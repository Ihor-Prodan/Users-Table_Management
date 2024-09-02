import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './assets/index.scss';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
