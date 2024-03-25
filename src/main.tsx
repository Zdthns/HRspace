import "@/lib/zod/ru-zod"
import { Form } from "@components/Form/Form"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { Header } from "./components/header/Header"
import "./index.css"
import LandingPage from "./pages/Landing-page/LandingPage"
import { store } from "./redux/store"
const container = document.getElementById("root")

const Layout = () => (
  <>
    <Header />
    <Outlet /> {/* Все дочерние маршруты будут рендериться здесь */}
  </>
)

const router = createBrowserRouter([
  {
    path: "/", // родительский маршрут
    element: <Layout />, // здесь Header и Outlet
    children: [
      {
        index: true, // подмаршрут корня
        element: <LandingPage />,
      },
      {
        path: "application",
        element: <Form />,
      },
      // ... дополнительные подмаршруты при необходимости ...
    ],
  },
])

if (container) {
  const root = createRoot(container)

  root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
