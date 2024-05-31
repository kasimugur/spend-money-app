import { useEffect, useState } from 'react'
import './App.css'
import { Header, Product } from './components'
import products from './products.json'
import { SiteContext } from './context'
function App() {
  const [money, setMoney] = useState(100)
  const [basket, setBasket] = useState([])


  const data = {
    money,
    basket,
    setBasket,
    setMoney,
  }

  useEffect(() => {
    console.log(basket)
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
