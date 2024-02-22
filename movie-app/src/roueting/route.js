import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
  const Movies = React.lazy(() => import('../pages/movies'));
  const FavirotMovies = React.lazy(() => import('../pages/favirotLlist'));
  const SignUp = React.lazy(() => import('../pages/signUp'));
  const MoviesDetails = React.lazy(() => import('../pages/movieDetails'));
  const NotFound = React.lazy(() => import('../pages/notFound'));

  return (
    <Suspense>
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/fave-movie" element={<FavirotMovies />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/movie/:id" element={<MoviesDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
  );
}
