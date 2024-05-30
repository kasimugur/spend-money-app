import { useState } from 'react'
import './App.css'
import { Header } from './components'

function App() {
  const [money, setMoney] = useState(100)



  return (
    <>
    <Header money={money} />
    <hr /><button onClick={() => setMoney(money + 5)}>add</button>
    </>
  )
}

export default App
