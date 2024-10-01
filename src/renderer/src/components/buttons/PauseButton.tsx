import icon from '../../assets/button-icons/pausa.png'
import '../../assets/button.css'

interface props {
  isPrinting: boolean
  setPrinting: React.Dispatch<React.SetStateAction<boolean>>
  id: NodeJS.Timeout | null
  intervalId: React.Dispatch<React.SetStateAction<NodeJS.Timeout | null>>
}

export function PauseButton({ isPrinting, setPrinting, id, intervalId }: props): JSX.Element {

  function PauseButton() {
    if (id) {
      setPrinting(false)
      clearInterval(id);
      intervalId(null);
    }
  }

  return (
    <button id="play" className='btn' onClick={() => PauseButton()} disabled={isPrinting ? false : true}>
      <img src={icon} alt="" />
    </button>
  )
}