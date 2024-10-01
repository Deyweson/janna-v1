interface IApi {
  takeScreenShot: (count:number) => void
  makeVideo: () => void
}

interface Window {
  api: IApi
}