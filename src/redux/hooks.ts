// Этот файл служит центральным хабом для переэкспорта предварительно типизированных хуков Redux.
// Эти импорты ограничены в других местах, чтобы обеспечить последовательное использование типизированных хуков по всему приложению.
// Мы отключаем правило ESLint здесь, потому что это предназначенное место для импорта и переэкспорта типизированных версий хуков.
/* eslint-disable @typescript-eslint/no-restricted-imports */
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "./store"

// Используйте по всему приложению вместо обычных `useDispatch` и `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
