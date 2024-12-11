import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import HomePage from './pages/HomePage';
import SingleFilm from './pages/SingleFilm';
import { FilmProvider } from './context/FilmContext';

function App() {
  return (
    <FilmProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="film/:id" element={<SingleFilm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FilmProvider>
  );
}

export default App;
