import { useContext } from "react"
import { SiteContext } from "../context"
import { moneyFormat } from "./helpers"

export default function Header() {
  const { total, money } = useContext(SiteContext)
  return (
    <>
        {total > 0 && money - total !== 0 && (
          <div className="header">    harcamak için <span>${moneyFormat(money - total)} </span> paranız kaldı</div>
        )}
        {total === 0 && (
          <div className="header">    harcamak için <span>${moneyFormat(money)}</span> paranız var</div>
        )}
        {money - total === 0 && (
          <div className="header">paran bitti, bakiyeyi tekrar yükleyiniz </div>
        )}
      <style>
        {
        `  .header {
          position: sticky;
          top:0;
          background: linear-gradient(to bottom , green , greenyellow);
          height:60px;
          display: flex;
          align-items: center;
          justify-content: center;
          color:#fff;
          font-size:24px;
          letter-spacing: 1px;
          }
          .header span {
            margin: 0 10px;
            font-weight: bold;
          }
          `}
      </style>
    </>
  )
}
