import DemoForm from "@components/DemoForm/DemoForm"
import DemoPopup from "@components/DemoPopup/DemoPopup"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Form } from "@components/Form/Form"
import "./index.css"
import { store } from "./redux/store"
import "@/lib/zod/ru-zod"
import LandingPage from "./pages/Landing-page/LandingPage"
const container = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/form",
    element: <DemoForm />,
  },
  {
    path: "/popup",
    element: <DemoPopup />,
  },
  {
    path: "/main",
    element: <Form />,
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
