import { createPortal } from "react-dom"

type PortalProps = {
  children: React.ReactNode
  selectorId: string
  portalStyles: React.CSSProperties
}

export default function Portal({
  children,
  selectorId,
  portalStyles,
}: PortalProps) {
  const portalContainer = document.getElementById(selectorId)
  if (!portalContainer)
    return createPortal(
      <div id={selectorId} style={portalStyles}>
        {children}
      </div>,
      document.body,
    )
  return createPortal(children, portalContainer)
}
