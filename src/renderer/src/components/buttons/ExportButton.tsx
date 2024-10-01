import icon from '../../assets/button-icons/video-export.png'
import '../../assets/button.css'

export function ExportButton(): JSX.Element {

  function makeVideo() {
    window.api.makeVideo()
  }

  return (
    <button id="play" className='btn' onClick={() => makeVideo()}>
      <img src={icon} alt="" />
    </button>
  )
}