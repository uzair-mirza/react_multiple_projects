import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './components/Layout/AppLayout'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Location from './pages/Location'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children :[
      {
        path: '/',
        element: <Home />
      },{
        path: 'location',
        element: <Location />
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
