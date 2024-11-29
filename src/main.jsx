import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Provider store={Store}>
      <App />
    </Provider>
);
