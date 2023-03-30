import Header from './components/Header/Header';
import { Movies } from './components/Movies/Movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieDetail } from './components/Movies/MovieDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Movies />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/:imdbID" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
