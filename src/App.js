import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';
import LoginPage from './pages/LoginPage';
import PostShow from './components/PostShow';
import SignupPage from './pages/SignupPage';
import RequireAuth from './components/RequireAuth';


function App() {
  return (
    <div className="App">
      <h1>Demo Project</h1>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<RequireAuth><AboutPage /></RequireAuth>} />
        <Route path='/posts' element={<RequireAuth><PostsPage /></RequireAuth>} />
        <Route path='/posts/:postId' element={<PostShow />} />
        {/* <Route path="/posts" element={<PostsPage />}>
          <Route path=':postId' element={<PostShow />} />
        </Route> */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
