import './App.css';
import AboutScreen from './Screens/AboutScreen';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/about" element={<AboutScreen></AboutScreen>}></Route>
            <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
            <Route path="/about" element={<AboutScreen></AboutScreen>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
