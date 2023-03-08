import { createBrowserRouter } from "react-router-dom";
// === routes 
import { HomeScreen } from "../pages/home"

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />
  }
])

