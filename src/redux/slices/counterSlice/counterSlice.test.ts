import { describe, it, expect, beforeEach } from "vitest"
import type { AppStore } from "../../store"
import { makeStore } from "../../store"
import type { CounterSliceState } from "./counterSlice"
import {
  counterSlice,
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./counterSlice"

interface LocalTestContext {
  store: AppStore
}

const initialState: CounterSliceState = {
  value: 3,
  status: "idle",
}

describe("счетчик reducer", () => {
  beforeEach(async (context: LocalTestContext) => {
    context.store = makeStore({ counter: initialState })
  })

  it("должен обрабатывать начальное состояние", ({
    store,
  }: LocalTestContext) => {
    expect(counterSlice.reducer(undefined, { type: "unknown" })).toStrictEqual({
      value: 0,
      status: "idle",
    })
  })

  it("должен обрабатывать увеличение", ({ store }: LocalTestContext) => {
    expect(selectCount(store.getState())).toBe(3)

    store.dispatch(increment())

    expect(selectCount(store.getState())).toBe(4)
  })

  it("должен обрабатывать уменьшение", ({ store }: LocalTestContext) => {
    expect(selectCount(store.getState())).toBe(3)

    store.dispatch(decrement())

    expect(selectCount(store.getState())).toBe(2)
  })

  it("должен обрабатывать увеличение на определенное количество", ({
    store,
  }: LocalTestContext) => {
    expect(selectCount(store.getState())).toBe(3)

    store.dispatch(incrementByAmount(2))

    expect(selectCount(store.getState())).toBe(5)
  })
})
