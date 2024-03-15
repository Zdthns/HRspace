import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../createAppSlice"
import type { AppThunk } from "../../store"
import { fetchCount } from "./counterAPI"

export interface CounterSliceState {
  value: number
  status: "idle" | "loading" | "failed"
}

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
}

// Если вы не используете асинхронные thunk, вы можете использовать `createSlice` отдельно.
export const counterSlice = createAppSlice({
  name: "counter",
  // `createSlice` выводит тип состояния из аргумента `initialState`
  initialState,
  // Поле `reducers` позволяет нам определять редукторы и генерировать связанные с ними действия
  reducers: create => ({
    increment: create.reducer(state => {
      // Redux Toolkit позволяет нам писать "мутирующую" логику в редукторах. Он
      // на самом деле не мутирует состояние, потому что использует библиотеку Immer,
      // которая обнаруживает изменения в "черновике состояния" и создает совершенно новое
      // неизменяемое состояние на основе этих изменений
      state.value += 1
    }),
    decrement: create.reducer(state => {
      state.value -= 1
    }),
    // Используйте тип `PayloadAction` для объявления содержимого `action.payload`
    incrementByAmount: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.value += action.payload
      },
    ),
    // Функция ниже называется thunk и позволяет нам выполнять асинхронную логику. Она
    // может быть отправлена как обычное действие: `dispatch(incrementAsync(10))`. Это
    // вызовет thunk с функцией `dispatch` в качестве первого аргумента. Затем
    // можно выполнить асинхронный код и отправить другие действия. Thunk
    // обычно используются для выполнения асинхронных запросов.
    incrementAsync: create.asyncThunk(
      async (amount: number) => {
        const response = await fetchCount(amount)
        // Возвращаемое значение становится полезной нагрузкой действия `fulfilled`
        return response.data
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.value += action.payload
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),
  }),
  // Вы можете определить ваши селекторы здесь. Эти селекторы получают состояние среза
  // в качестве своего первого аргумента.
  selectors: {
    selectCount: counter => counter.value,
    selectStatus: counter => counter.status,
  },
})

// Создатели действий генерируются для каждой функции редуктора.
export const { decrement, increment, incrementByAmount, incrementAsync } =
  counterSlice.actions

// Селекторы, возвращаемые `slice.selectors`, принимают корневое состояние в качестве своего первого аргумента.
export const { selectCount, selectStatus } = counterSlice.selectors

// Мы также можем писать thunk вручную, которые могут содержать как синхронную, так и асинхронную логику.
// Вот пример условной отправки действий на основе текущего состояния.
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState())

    if (currentValue % 2 === 1 || currentValue % 2 === -1) {
      dispatch(incrementByAmount(amount))
    }
  }
