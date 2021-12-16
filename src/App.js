import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <div className="App">
      <h1>Demo Project</h1>
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
