import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { counterSlice } from "./slices/counterSlice/counterSlice"
import { quotesApiSlice } from "./slices/quotesSlice/quotesApiSlice"

// `combineSlices` автоматически объединяет редукторы, используя их `reducerPath`s,
// поэтому больше не нужно вызывать `combineReducers`.
const rootReducer = combineSlices(counterSlice, quotesApiSlice)
// Выводим тип `RootState` из корневого редуктора
export type RootState = ReturnType<typeof rootReducer>

// Настройка хранилища обернута в `makeStore`, чтобы позволить повторное использование
// при настройке тестов, которые требуют такой же конфигурации хранилища
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    // Добавление middleware API позволяет использовать кэширование, инвалидацию, опрос
    // и другие полезные функции `rtk-query`.
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat(quotesApiSlice.middleware)
    },
    preloadedState,
  })
  // настройка слушателей с использованием предоставленных по умолчанию настроек
  // необязательно, но требуется для поведений `refetchOnFocus`/`refetchOnReconnect`
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

// Выводим тип `store`
export type AppStore = typeof store
// Выводим тип `AppDispatch` из самого хранилища
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
