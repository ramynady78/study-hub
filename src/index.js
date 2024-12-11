import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./styels/home.css";
import "./styels/course-card.css";
import "./styels/nav-bar.css";
import "./styels/welcome-card.css";
import "./styels/course-info.css";
import "./styels/register-form.css";
import "./styels/my-course.css";
import "./styels/about-us.css";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux TK/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
</React.StrictMode>
</BrowserRouter>

);

reportWebVitals();
