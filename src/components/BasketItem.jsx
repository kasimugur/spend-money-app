 
 import "../css/basketItem.css"
export default function BasketItem({item, product}) {
  return (
    <>
<li className="basket-item">{product.title} <span>x {item.amount}</span></li>
    </>
  )
}