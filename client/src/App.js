// libraries
import { useState, useEffect } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import axios from "axios";

// Style
import './App.scss';

// Components
import NavBar from './components/NavBav';
import Home from './components/Home';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/api/user/login', user).then(data => { setUser(data[0].data) });
  }, [user])

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
