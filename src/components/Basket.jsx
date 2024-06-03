import { useContext } from "react"
import { SiteContext } from "../context"
import BasketItem from "./BasketItem"
import products from '../products.json'
import '../css/basket.css'
export default function Basket() {
  const { basket, total, setBasket } = useContext(SiteContext)
  const resetBasket = () => {
    setBasket([])
  }
  return (
    <>
      <div className="basket-container container">
        <h3>alışveriş detaylerı</h3>
      <ul>
      {basket.map((item) => <BasketItem
        product={products.find(p => p.id === item.id)}
        key={item.id}
        item={item} />)}
      </ul>
      {total > 0 && (
        <div>
          <div className="total" >
          Toplam: ${total}
          </div>
        
          <button className="basket-reset-btn" onClick={resetBasket}>sepeti sıfırla</button>
          
        </div>
      
      )}
      </div>
    </>
  )
}