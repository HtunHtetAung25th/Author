import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import HomeCustomize from "./sub-pages/Home/HomeCustomize";
import HomePlugin from "./sub-pages/Home/HomePlugin";
import HomeLearn from "./sub-pages/Home/HomeLearn";

import WorkSpace from './pages/WorkSpace';
import Error from './pages/Error';

import SideBar from "./components/SideBar";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path='/Customize' element={<HomeCustomize/>} />
      <Route path='/Plugin' element={<HomePlugin/>} />
      <Route path='/Learn' element={<HomeLearn/>} />
      <Route path='/WorkSpace' element={<WorkSpace />} />
      <Route path='/*' element={<Error />} />
    </Route>
  )

);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
