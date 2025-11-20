import { StrictMode } from 'react';
import './index.css';
import { RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client';
import { router } from './Routes/router';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Context/AuthProvider';


const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer autoClose={2000} position="bottom-right"></ToastContainer>
    </AuthProvider>
  </StrictMode>
);
