import { Route, Routes } from 'react-router-dom';
import MainPage from './components/mainpage/mainpage';
import Header from './components/header/header';
import WatchPage from './components/watchpage.js/watchpage';
import VideoUpload from './components/uploadvideo/uploadvideo';
import SearchPage from './components/searchpage/searchpage'; // Импорт страницы поиска
import NotFoundPage from './components/notfoundpage/notfoundpage';
import RegisterPage from './components/auth/regpage/regpage'
import Login from './components/auth/loginpage/loginpage';

function UniCast() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/frontend/" element={<MainPage />} />
        <Route path="/frontend/watch" element={<WatchPage />} />
        <Route path="/frontend/upload" element={<VideoUpload />} />
        <Route path="/frontend/search" element={<SearchPage />} /> {/* Маршрут для поиска */}
        <Route path="/frontend/register" element={<RegisterPage />} />
        <Route path="/frontend/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default UniCast;
