import type { ZCity } from "@/lib/form/slides/slide1"
import { districts } from "@/mock/jsons"
import { useEffect, useState } from "react"
import PopupPortal from "../Portal/PopupPortal/PopupPortal"
import { List } from "./components/List"
import type { City, District, Region } from "./types"
import styles from "./CityPopup.module.css"

// запрос данных
const regions = districts.reduce(
  (acc, d: District) => acc.concat(d.areas),
  [] as Region[],
)

regions.sort((a, b) => a.name.localeCompare(b.name))

// const cities = regions.reduce((acc, reg) => acc.concat(reg.areas), [] as City[])

type TCityPopup = {
  showPopup: boolean
  onChange: (city: ZCity) => void
}

export default function CityPopup({ showPopup, onChange }: TCityPopup) {
  const [region, setRegion] = useState<Region>()
  const [city, setCity] = useState<City>()
  const [search, setSearch] = useState("")

  useEffect(() => {
    setSearch("")
    if (city && showPopup) {
      onChange(city)
      setRegion(undefined)
      setCity(undefined)
    }
  }, [city, onChange, region, showPopup])

  return (
    <PopupPortal isOpen={showPopup}>
      <div className={styles["popup"]}>
        <div className={styles["card"]}>
          <h2>Укажите город</h2>
          <input
            type="text"
            className={styles["card-input"]}
            onChange={e => setSearch(e.target.value)}
            value={search}
            disabled
          />
          <span className={styles["breadcrumbs"]}>
            <span onClick={() => setRegion(undefined)}>Россия</span>
            {region ? ` / ${region.name}` : ""}
          </span>
          {regions && !region && (
            <ul className={styles.wrapper}>
              <List items={regions} setItem={setRegion} />
            </ul>
          )}
          {region && (
            <ul className={styles.wrapper}>
              <List items={region.areas} setItem={setCity} />{" "}
            </ul>
          )}
        </div>
      </div>
    </PopupPortal>
  )
}
