import { useContext } from "react"
import { SiteContext } from "../context"
import { moneyFormat } from "./helpers"


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
        <img src={Product.image} alt="" />
        <h6>{Product.title} </h6>
        <div className="price">$ {moneyFormat(Product.price)} </div>
        <div className="actions">
          <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>sat</button>
          <span className="amout">
            {basketItem && basketItem.amount || 0}
          </span>
          <button className="buy-btn" disabled={total + Product.price > money} onClick={addBasket}>satın al</button>
        </div>
        <style >{
          `
          .product {
            padding:10px ;
            background: #fff;
            border: 1px solid #ddd;
            margin-bottom:20px;
            width: 24%
          }
          .product img {
            width:100%;
            height:70%;
          }
          .product .price {
            font-size:20px;
            color: #34ad34;
          }
          .product h6{
            font-size: 20px;
            margin-bottom:10px;
          }
          .product .actions{
            display:flex;
            align-items:center;
            margin-top: 15px;
          }
          .actions button {
            curser: pointer;
            height: 40px;
            padding: 0 15px;
            flex: 1;
          }
          .actions .amout{
            width:50px;
            text-align: center;
            border: 1px solid #ddd;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .actions .buy-btn {
            background: #61dafb;
            font-size: 15px;
            font-width:500;
            border-radius: 0 4px 4px 0 ;
          }
          .actions .sell-btn {
            background: #ccc;
            color:#333;
            font-size: 15px;
            font-width:500;
            border-radius: 4px 0 0 4px ;
          }
`
        }
        </style>
      </div>
    </>
  )
}