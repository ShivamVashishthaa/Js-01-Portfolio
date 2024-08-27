import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Hero_Section from './Components/Body/Hero-section.jsx'
import About from './Components/Body/About.jsx'
import Skills from './Components/Body/Skills.jsx'
import Contact from './Components/Body/Contact.jsx'


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Hero_Section/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='skills' element={<Skills/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
