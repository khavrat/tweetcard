import { lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import SharedLayout from "./sharedLayout/SharedLayout";
const HomeView = lazy(() => import("./pages/HomeView"));
const TweetsView = lazy(() => import("./pages/TweetsView"));


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/tweetcard" element={<SharedLayout />}>
        <Route index element={<HomeView />} />
        <Route path="tweets" element={<TweetsView />} />
        <Route path="*" element={<Navigate to="/tweetcard" />} />
      </Route>
    </>
  )
);


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;


