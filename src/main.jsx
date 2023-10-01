
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App.jsx';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { productsApi } from './store/apiSlice';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ApiProvider api={productsApi}>
      <App />
    </ApiProvider>
  </Provider>
)
