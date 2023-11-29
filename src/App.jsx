import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import LoginPage from './LoginPage';
import MoviesListPage from './MoviesListPage';
import MovieDetailPage from './MovieDetailPage';
import ActorListPage from './ActorListPage';
import { movies } from './data';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <Router>
      <div>
        {user ? (
            <div>
              
            <NavBar user={user} />
            <Routes>
              {/* Route components in here */}
              <Route path='/' element={<MoviesListPage />} />
              <Route path="/movies/:movieName" element={<MovieDetailPage movies={ movies } />} />
              <Route path="/actors" element={<ActorListPage movies={movies} />} />
            </Routes>

            </div>
          ) : (
              <LoginPage onLogin={handleLogin} />
          )}
      </div>
    </Router>
  );
}

export default App;
