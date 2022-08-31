import { Routes, Route, NavLink } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { NotFound } from './NotFound';
import s from './App.module.css';

// import Home from '../pages/Home/Home';
// import Movies from '../pages/Movies/Movies';
// import MovieDetails from '../pages/MovieDetails/MovieDetails';

const LazyHome = lazy(() => import('../pages/Home/Home'));
const LazyMovies = lazy(() => import('../pages/Movies/Movies'));
const LazyMovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails')
);

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" className={s.navLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={s.navLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/movies" element={<LazyMovies />} />
            <Route path="/movies/:movieId/*" element={<LazyMovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
