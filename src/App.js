import { Route, Routes, Navigate } from 'react-router-dom';
import StartPage from './page/StartPage';
import SongListPage from './page/SongListPage';
import ResultPage from './page/ResultPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/result/:wishId" element={<ResultPage />} />
      <Route path="/songlist" element={<SongListPage />} />
    </Routes>
  );
}

export default App;
