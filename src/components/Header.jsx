import { useContext } from "react"
import { SiteContext } from "../context"
import { moneyFormat } from "./helpers"

export default function Header() {
  const { total, money } = useContext(SiteContext)
  return (
    <>
        {total > 0 && money - total !== 0 && (
          <div className="header">    harcamak için ${moneyFormat(money - total)} paranız kaldı</div>
        )}
        {total === 0 && (
          <div className="header">    harcamak için ${moneyFormat(money)} paranız var</div>
        )}
        {money - total === 0 && (
          <div className="header">paran bitti, bakiyeyi tekrar yükleyiniz </div>
        )}
      <style>
        {
        `  .header {
          background: linear-gradient(to bottom , green , greenyellow);
          height:60px;
          }
          `}
      </style>
    </>
  )
}
