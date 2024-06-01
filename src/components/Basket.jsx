import { useContext } from "react"
import { SiteContext } from "../context"

export default function Basket() {
  const {basket} = useContext(SiteContext)
  
  return (
    <>
    {basket.map(item => <div>{item.id} </div> )}
    </>
  )
}