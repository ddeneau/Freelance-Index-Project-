import './App.css';
import AboutScreen from './Screens/AboutScreen';
import HomeScreen from './Screens/HomeScreen';
import Header from './Components/Header.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar.js';
import BoardScreen from './Screens/BoardScreen.js';
import SocialScreen from './Screens/SocialScreen';
import ProfileScreen from './Screens/ProfileScreen';
import CreateProfileScreen from './Screens/Profile/CreateProfile';
import LoggedInProfileScreen from './Screens/Profile/LoggedInProfile';


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
            <Route path="/loggedInProfile" element={<LoggedInProfileScreen></LoggedInProfileScreen>}></Route>
            <Route path="/createProfile" element={<CreateProfileScreen></CreateProfileScreen>}></Route>
          </Routes>
        </BrowserRouter>
        {/* Footer goes here */}
        <footer className="text-center text-gray-500 text-sm py-4">
          &copy; {new Date().getFullYear()} Daniel Deneau.
        </footer>
      </div>
  );
}

export default App;
