import { useContext} from "react"
import { SiteContext } from "../context"


export default function Product({ Product }) {
  const { basket, setBasket, money, total } = useContext(SiteContext)

  const basketItem = basket.find(item => item.id === Product.id)

  const addBasket = () => {
    const checkBasket = basket.find(item => item.id === Product.id)
    // ürün daha önce eklenmiş
    if (checkBasket) {
      checkBasket.amount += 1
      setBasket([...basket.filter(item => item.id !== Product.id), checkBasket])
    } else {
      setBasket([...basket, {
        id: Product.id,
        amount: 1
      }])
    }
  }

  const removeBasket = () => {
    const currentBasket = basket.find(item => item.id === Product.id)
    const basketWithoutCurrent = basket.filter(item => item.id !== Product.id)
    currentBasket.amount -= 1
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent])
    } else {
      setBasket([...basketWithoutCurrent, currentBasket])
    }
  }

return (
  <>
    <div className="product">
      <h6>{Product.title} </h6>
      <div className="price">${Product.price} </div>
      <div className="actions">
        <button disabled={!basketItem} onClick={removeBasket}>sat</button>
        <span className="amout">
          {basketItem && basketItem.amount || 0}
        </span>
        <button disabled={total + Product.price > money}  onClick={addBasket}>satın al</button>
      </div>
      <style >{
        `
          .product {
            padding:10px ;
            background: #fff;
            border: 1px solid #ddd;
            margin-bottom:20px;
          }
`
      }
      </style>
    </div>
  </>
)
}