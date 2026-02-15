import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './routes';
import { StrictMode } from 'react';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Toaster />
            <App />
        </BrowserRouter>
    </StrictMode>
);