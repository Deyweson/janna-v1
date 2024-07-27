import icon from '../../assets/button-icons/pausa.png'
import '../../assets/button.css'

export function PauseButton(): JSX.Element {
  return (
    <button id="play" className='btn'>
      <img src={icon} alt="" />
    </button>
  )
}