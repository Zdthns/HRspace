import { POPUP_ID, POPUP_Z_INDEX } from "@/constants"
import Portal from "../Portal"

export default function PopupPortal({
  children,
  isOpen,
}: {
  children: React.ReactNode
  isOpen: boolean
}) {
  return (
    <Portal
      selectorId={POPUP_ID}
      portalStyles={{
        zIndex: POPUP_Z_INDEX,
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      {isOpen && children}
    </Portal>
  )
}
