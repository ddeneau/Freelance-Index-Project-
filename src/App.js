import './App.css';
import AboutScreen from './Screens/AboutScreen';
import HomeScreen from './Screens/HomeScreen';
import Header from './Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import BoardScreen from './Screens/BoardScreen.js';
import SocialScreen from './Screens/SocialScreen';
import ProfileScreen from './Screens/ProfileScreen';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Header/>
          <NavBar/>
          <Routes>
            <Route path="/about" element={<AboutScreen></AboutScreen>}></Route>
            <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
            <Route path="/board" element={<BoardScreen></BoardScreen>}></Route>
            <Route path="/social" element={<SocialScreen></SocialScreen>}></Route>
            <Route path="/profile" element={<ProfileScreen></ProfileScreen>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
