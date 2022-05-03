import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Movie from './components/Movie/Movie';
import Movies from './components/Movies/Movies';
import NotFound404 from './components/NotFound404/NotFound404';
import Header from './layouts/Header/Header';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:id' element={<Movie />} />
          <Route path='*' element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
