import { app, ipcMain } from 'electron'
import path from 'path'
import fs from 'fs'
import ffmpeg from 'fluent-ffmpeg'
import ffmpegPathStatic from 'ffmpeg-static'



const isProduction = app.isPackaged;
console.log('Running in production:', isProduction);

var ffmpegPath: any;

if(!isProduction){
  ffmpegPath = ffmpegPathStatic
} else if(isProduction && process.platform === 'darwin'){
  ffmpegPath = path.join(app.getAppPath(),'..' ,'ffmpeg', 'mac', 'ffmpeg');
}else if(isProduction && process.platform === 'linux'){
  ffmpegPath = path.join(app.getAppPath(),'..' ,'ffmpeg', 'linux', 'ffmpeg');
}else if(isProduction && process.platform === 'win32'){
  ffmpegPath = path.join(app.getAppPath(),'..' ,'ffmpeg', 'win', 'ffmpeg.exe');
}


export function MakeVideo() {
  ipcMain.handle('video', async (__event) => {
    const imagesDir = path.join(app.getPath('videos'), 'janna-screenshots');
    const fileListPath = path.resolve(imagesDir, 'filelist.txt');

    const imageFiles = fs.readdirSync(imagesDir)
    .filter(file => file.endsWith('.png')) // Filtrar apenas arquivos PNG
    .map(file => {
      const match = file.match(/\d+/);
      const num = match ? parseInt(match[0]) : NaN; // Extrair número ou usar NaN se não houver número
      return {
        name: file,
        path: path.join(imagesDir, file),
        num // Adiciona o número extraído ou NaN
      };
    })
    .sort((a, b) => (isNaN(a.num) ? 0 : a.num) - (isNaN(b.num) ? 0 : b.num)); // Ordena pelos números

 


    const fileListContent = imageFiles.map(file => `file '${file.path}'\n duration 0.1`).join('\n');
    fs.writeFileSync(fileListPath, fileListContent);
    
    
    const hour = new Date().getHours()
    const min = new Date().getMinutes()
    const sec = new Date().getSeconds()
    
    const videoPath = path.join(app.getPath('videos'), `${hour}-${min}-${sec}-video.mp4`);
    
    console.log(ffmpegPath)
    ffmpeg.setFfmpegPath(ffmpegPath);

    await ffmpeg()
    .input(fileListPath)
    .inputOptions(['-f concat', '-safe 0'])
    .outputOptions(['-pix_fmt yuv420p'])
    .save(videoPath)
    .on('start', function (command) {
        console.log('ffmpeg process started:', command);
    })
    .on('error', function (err, __stdout, stderr) {
        console.error('Error:', err);
        console.error('ffmpeg stderr:', stderr);
    })
    .on('end', function (__output) {
        console.log('Video created in:', videoPath);
        fs.rmSync(imagesDir, {recursive: true})
    });
  });
}