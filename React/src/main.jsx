import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ContextThemeProvider from './ContextThemeProvider.jsx';

createRoot(document.getElementById('root')).render(
    <ContextThemeProvider>
      <App />
    </ContextThemeProvider>
);
