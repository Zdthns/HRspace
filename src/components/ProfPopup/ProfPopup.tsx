import type { ZProf } from "@/lib/form/slides/slide1"
import { prof } from "@/mock/jsons/"
import PopupPortal from "../Portal/PopupPortal/PopupPortal"
import styles from "./styles.module.css"

type TProfPopup = {
  showPopup: boolean
  onChange: (prof: ZProf) => void
}

export function ProfPopup({ showPopup, onChange }: TProfPopup) {
  return (
    <PopupPortal isOpen={showPopup}>
      <div className={styles["popup"]}>
        <div className={styles["card"]}>
          <fieldset
            className={styles["fieldset"]}
            onChange={(event: React.FormEvent<HTMLFieldSetElement>) => {
              const target = event.target as HTMLInputElement
              if (target && target.type === "radio") {
                const selectedProf = prof.find(
                  prof => prof.id.toString() === target.id,
                )
                if (selectedProf) {
                  onChange(selectedProf)
                  console.log(selectedProf)
                }
              }
            }}
          >
            <legend>Укажите профессию</legend>
            {prof.map(prof => (
              <div key={prof.id}>
                <input type="radio" id={`${prof.id}`} name="profession" />
                <label htmlFor={`${prof.id}`}>{prof.prof_name}</label>
              </div>
            ))}
          </fieldset>
        </div>
      </div>
    </PopupPortal>
  )
}
