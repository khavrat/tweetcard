import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import HomeView from "./pages/HomeView";
import TweetsView from "./pages/TweetsView";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/tweetcard">
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


