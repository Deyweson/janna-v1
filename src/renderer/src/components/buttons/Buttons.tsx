import { ExportButton } from "./ExportButton"
import { PauseButton } from "./PauseButton"
import { PlayButton } from "./PlayButton"
import { StopButton } from "./StopButton"


interface prop {
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export function Buttons({ setCount }: prop): JSX.Element {

  return (
    <div className="Buttons">
      <PlayButton setCount={setCount} />
      <PauseButton />
      <StopButton />
      <ExportButton />
    </div>
  )
}