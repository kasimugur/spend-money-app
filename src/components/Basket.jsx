import { useContext } from "react"
import { SiteContext } from "../context"
import BasketItem from "./BasketItem"
import products from '../products.json'
export default function Basket() {
  const { basket, total, setBasket } = useContext(SiteContext)
  const resetBasket = () => {
    setBasket([])
  }
  return (
    <>
      {basket.map((item) => <BasketItem
        product={products.find(p => p.id === item.id)}
        key={item.id}
        item={item} />)}
      {total > 0 && (

        <div>
          Toplam: ${total}
          <div>
          <button onClick={resetBasket}>sepeti sıfırla</button>
          </div>
        </div>
      
      )}
    </>
  )
}