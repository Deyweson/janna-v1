interface prop {
  count: number
}

export function Header({ count }: prop): JSX.Element {
  return (
    <div className="Header">
      <h1>Janna</h1>

      <p>Prints: {count}</p>
    </div>
  )
}