import icon from '../../assets/button-icons/play.png'
import '../../assets/button.css'

interface props {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  isPrinting: boolean
  setPrinting: React.Dispatch<React.SetStateAction<boolean>>
  intervalId: React.Dispatch<React.SetStateAction<NodeJS.Timeout | null>>
}

export function PlayButton({ setCount, count, isPrinting, setPrinting, intervalId }: props): JSX.Element {

  async function startPrinting() {
    setPrinting(true)

    const id = setInterval(() => {
      window.api.takeScreenShot(count)
      setCount(count++)
    }, 1000)

    intervalId(id)

  }

  return (
    <button id="play" className='btn' onClick={() => startPrinting()} disabled={isPrinting ? true : false}>
      <img src={icon} alt="" />
    </button>
  )
}