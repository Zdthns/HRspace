export function Error({
  message,
  position = "absolute",
}: {
  message?: string
  position?: "relative" | "absolute"
}) {
  return (
    message && (
      <div
        style={{
          position: "relative",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "tomato",
            fontSize: 12,
            lineHeight: 1,
            position,
            textWrap: "balance",
            top: 4,
            left: 2,
          }}
        >
          {message}
        </p>
      </div>
    )
  )
}
