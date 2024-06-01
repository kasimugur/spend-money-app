// import { useContext } from "react"
// import { SiteContext } from "../context"

export default function BasketItem({item, product}) {
  // const {products} = useContext(SiteContext)
  return (
    <>
<div>{product.title} x {item.amount}</div>
    </>
  )
}