import { useState } from 'react'
import './App.css'
import { Header, Product } from './components'
import products from './products.json'
function App() {
  const [money, setMoney] = useState(100)
const [basket, setBasket] = useState([])

  return (
    <>
<Header money={money} />

{products.map((product, index) => <Product key={index} Product={product}  />)}

    </>
  )
}

export default App
