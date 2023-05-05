import UserMenu from "./components/usermenu"
import { lazy } from "react";
import { Route, Router, Routes } from "react-router-dom";


const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>logo and fon</div>}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
      <UserMenu/>
    </>
  )
}

export default App
