import { useEffect, useState } from 'react'
import './App.css'
import { Header, Product } from './components'
import products from './products.json'
import { SiteContext } from './context'
function App() {
  const [money, setMoney] = useState(100)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  const data = {
    money,
    basket,
    setBasket,
    setMoney,
  }

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (
          item.amount * (products.find(
            product => product.id === item.id
          ).price)
        )
      }, 0)
    )
  }, [basket])
  return (
    <>
      <SiteContext.Provider value={data}>
        <Header money={money} />

        {products.map((product) => <Product key={product.id} Product={product} />)}
      </SiteContext.Provider>
    </>
  )
}

export default App
