import icon from '../../assets/button-icons/cancelar.png'
import '../../assets/button.css'

export function StopButton(): JSX.Element {
  return (
    <button id="play" className='btn'>
      <img src={icon} alt="" />
    </button>
  )
}