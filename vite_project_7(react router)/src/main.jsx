import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Github, { gitinfo } from "./Components/GitHub/Github.jsx";
import Layout from "./Components/Layout.jsx";
import User from "./Components/User/User.jsx";
import AboutNishant from "./Components/AboutNishant/AboutNishant.jsx";

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Route/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       },
//       {
//         path:"github",
//         element:<Github/>,
//         loader : {gitinfo}
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="about" element={<About />}>
        <Route path="nishant" element={<AboutNishant />} />
      </Route>

      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={gitinfo} path="github" element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
