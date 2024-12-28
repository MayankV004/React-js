import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import './index.css'
import ContactUS from './components/ContactUs/ContactUS.jsx'
import GitHub, { gitHubInfoLoader } from './components/GitHub/GitHub.jsx'
import User from './components/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contactus",
//         element:<ContactUS/>
//       },
//       {
//         path:"github",
//         element:<GitHub/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='contactus' element={<ContactUS />}/>
          <Route loader = {gitHubInfoLoader} path='github' element={<GitHub />}/>
          <Route path='user/:userid' element={<User />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
