import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import DemoRedux from "./components/DemoRedux/DemoRedux"
import { store } from "./redux/store"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "./pages/Landing-page/LandingPage"
import DemoForm from "@components/DemoForm/DemoForm"
import DemoPopup from "@components/DemoPopup/DemoPopup"
import Callback from "./pages/Landing-page/components/CallbackPopup/Callback"

const container = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/redux",
    element: <DemoRedux />,
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
    path: "/callback",
    element: <Callback />,
  },
])

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
