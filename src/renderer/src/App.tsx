import { useState } from 'react'
import './assets/style.css'
import { Buttons } from './components/buttons/Buttons'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App(): JSX.Element {

  const [count, setCount] = useState<number>(0)

  return (
    <>

      <Header count={count} />

      <Buttons setCount={setCount} />

      <Footer />
    </>
  )
}

export default App
