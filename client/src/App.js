// libraries
import { useState } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

// Style
import './App.scss';

// Components
import NavBar from './components/NavBav';
import Home from './components/Home';


function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        (!user && (<Route path="/login" element={<Home setUser={setUser} />} />))
        (user && (<Route path="/" element={<Home user={user} />} />))
      </Routes>
    </div>
  );
}

export default App;
