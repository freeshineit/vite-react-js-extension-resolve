import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Home = React.lazy(async () => await import('@/pages/home'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback={<>...</>}>
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>
)
