export function getOptionsByArr(arr: readonly string[]) {
  return arr.map(v => {
    return { value: v, label: v }
  })
}
