// Мок-функция для имитации выполнения асинхронного запроса данных
export const fetchCount = (amount = 1) => {
  return new Promise<{ data: number }>(resolve =>
    setTimeout(() => resolve({ data: amount }), 500),
  )
}
