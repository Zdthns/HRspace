import type { RenderOptions } from "@testing-library/react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import type { PropsWithChildren, ReactElement } from "react"
import { Provider } from "react-redux"
import type { AppStore, RootState } from "../redux/store"
import { makeStore } from "../redux/store"

/**
 * Этот тип расширяет стандартные опции для функции рендеринга
 * библиотеки React Testing Library. Он позволяет настраивать
 * дополнительные параметры, такие как указание начального состояния Redux
 * и экземпляра пользовательского хранилища.
 */
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  /**
   * Определяет конкретную часть или всё начальное состояние для хранилища Redux.
   * Это особенно полезно для инициализации состояния в контролируемом режиме
   * во время тестирования, позволяя компонентам рендериться с предопределенными
   * условиями состояния.
   */
  preloadedState?: Partial<RootState>

  /**
   * Позволяет использовать конкретный экземпляр хранилища Redux вместо
   * стандартного или глобального хранилища. Эта гибкость полезна при тестировании
   * компонентов с уникальными требованиями к хранилищу или при изоляции
   * тестов от глобального состояния хранилища. Пользовательское хранилище должно
   * быть настроено так, чтобы соответствовать структуре и промежуточному программному
   * обеспечению хранилища, используемого приложением.
   *
   * @default makeStore(preloadedState)
   */
  store?: AppStore
}

/**
 * Рендерит заданный React элемент с помощью Provider Redux и пользовательского хранилища.
 * Эта функция полезна для тестирования компонентов, подключенных к хранилищу Redux.
 *
 * @param ui - React компонент или элемент для рендеринга.
 * @param extendedRenderOptions - Опциональная конфигурация для рендеринга. Это включает `preloadedState` для начального состояния Redux и `store` для конкретного экземпляра хранилища Redux. Любые дополнительные свойства передаются в функцию рендеринга React Testing Library.
 * @returns Объект, содержащий использованное в рендере хранилище Redux, API событий пользователя для симуляции взаимодействий пользователя в тестах, и все функции запросов React Testing Library для тестирования компонента.
 */
export const renderWithProviders = (
  ui: ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) => {
  const {
    preloadedState = {},
    // Автоматически создает экземпляр хранилища, если хранилище не было передано
    store = makeStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  )

  // Возвращает объект с хранилищем и всеми функциями запросов RTL
  return {
    store,
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  }
}
