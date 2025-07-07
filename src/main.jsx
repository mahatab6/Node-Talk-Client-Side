import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/Routes'
import AuthProvider from './context/AuthProvider'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
          <RouterProvider router={router} />
          <Toaster position="top-right" reverseOrder={true}/>
    </AuthProvider>
  </StrictMode>,
)
