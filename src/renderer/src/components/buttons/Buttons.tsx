import { useState } from "react"
import { ExportButton } from "./ExportButton"
import { PauseButton } from "./PauseButton"
import { PlayButton } from "./PlayButton"
import { StopButton } from "./StopButton"


interface prop {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export function Buttons({ setCount, count }: prop): JSX.Element {

  const [isPrinting, setPrinting] = useState<boolean>(false)
  const [id, intervalId] = useState<NodeJS.Timeout | null>(null)


  return (
    <div className="Buttons">
      <PlayButton isPrinting={isPrinting} setPrinting={setPrinting} count={count} setCount={setCount} intervalId={intervalId} />
      <PauseButton isPrinting={isPrinting} setPrinting={setPrinting} id={id} intervalId={intervalId} />
      <StopButton />
      <ExportButton />
    </div>
  )
}