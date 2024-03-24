import styles from "./List.module.css"

// Define a generic interface for items that the List component will handle
interface ListItem {
  id: string
  name: string
}

// Utility function to group items by their first character
function groupByFirstChar<T extends ListItem>(
  items: T[],
  keySelector: (item: T) => string,
): Record<string, T[]> {
  return items.reduce(
    (acc, item) => {
      const key = keySelector(item)
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(item)
      return acc
    },
    {} as Record<string, T[]>,
  )
}

// Functional component that renders a list of items grouped by their first letter
export const List = <T extends ListItem>({
  items,
  setItem,
}: {
  items: T[]
  setItem: React.Dispatch<React.SetStateAction<T | undefined>>
}) => {
  const groupedItems = groupByFirstChar(items, item => item.name[0])

  return (
    <>
      {Object.entries(groupedItems).map(([firstLetter, items]) => (
        <div key={firstLetter}>
          <h3 className={styles["header"]}>{firstLetter}</h3>
          {items.map(item => (
            <div
              className={styles["list"]}
              key={item.id}
              onClick={() => setItem(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
      ))}
    </>
  )
}
