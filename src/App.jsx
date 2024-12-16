import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import HomePage from './pages/HomePage';
import SingleFilm from './pages/SingleFilm';
import { FilmProvider } from './context/FilmContext';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);


    return () => clearTimeout(timeout);
  }, []);

  return (
    <FilmProvider>
      <BrowserRouter>
        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="films/:id" element={<SingleFilm />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </FilmProvider>
  );
}

export default App;
