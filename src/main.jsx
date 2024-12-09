import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';  // Import the Provider from react-redux
import store from './redux/store';  // Import the store you configured earlier

// Render the app with the Provider wrapping the App component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap your App with the Provider */}
      <App />
    </Provider>
  </StrictMode>,
);
