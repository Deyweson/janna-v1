import icon from '../../assets/button-icons/video-export.png'
import '../../assets/button.css'

export function ExportButton(): JSX.Element {
  return (
    <button id="play" className='btn'>
      <img src={icon} alt="" />
    </button>
  )
}