import icon from '../../assets/button-icons/play.png'
import '../../assets/button.css'

interface prop {
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export function PlayButton({ setCount }: prop): JSX.Element {

  function teste() {
    setCount(10)
    console.log(10)
  }

  return (
    <button id="play" className='btn' onClick={teste}>
      <img src={icon} alt="" />
    </button>
  )
}