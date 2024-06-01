import { useContext } from "react"
import { SiteContext } from "../context"

export default function Header() {
  const { total, money } = useContext(SiteContext)
  return (
    <>
      <div>
        {total > 0 && money - total !== 0 && (
          <div>    harcamak için ${money - total} paranız kaldı</div>
        )}
        {total === 0 && (
          <div>    harcamak için ${money} paranız var</div>
        )}
        {money - total === 0 && (
          <div>paran bitti, bakiyeyi tekrar yükleyiniz </div>
        )}
      </div>
      
    </>
  )
}