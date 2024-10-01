import { app, ipcMain, desktopCapturer, screen } from 'electron'
import path from 'path'
import fs from 'fs'


export function TakeScreenShot() {

  ipcMain.handle('take', async (__event, count: number) : Promise<void>  => {
    try {
      const { width, height } = screen.getPrimaryDisplay().workAreaSize;
      const sources = await desktopCapturer.getSources({
        types: ['screen'],
        thumbnailSize: { width, height }
      });
      console.log('Sources obtained:', sources.length);
  
      if (sources.length === 0) {
        throw new Error('No screen sources available');
      }
  
      const screenshot = sources[0].thumbnail.toPNG();
      const picturesPath = path.join(app.getPath('videos'), 'janna-screenshots');
      console.log('Pictures path:', picturesPath);
  
      if (!fs.existsSync(picturesPath)) {
        fs.mkdirSync(picturesPath, { recursive: true });
        console.log('Directory created:', picturesPath);
      }
  
      const filePath = path.join(picturesPath, `${count.toString()}.png`);
      fs.writeFileSync(filePath, screenshot);
      console.log('Screenshot saved:', filePath);

    } catch (error) {
      console.error('Error taking screenshot:', error);
    }
  });
}