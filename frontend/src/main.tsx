import { createRoot } from 'react-dom/client';
import 'primereact/resources/themes/mdc-dark-indigo/theme.css'; // tema globale
import 'primereact/resources/primereact.min.css'; // stili base PrimeReact
import 'primeicons/primeicons.css'; // icone PrimeIcons
import App from './App.tsx';
import './main.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
