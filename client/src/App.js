// libraries
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from "axios";

// Style
import './App.scss';

// Components
import NavBar from './components/NavBav';
import Home from './components/Home';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/api/user/login')
      .then(data => {
        setUser(data.data)
      })
      .catch(err => console.error(err))

  }, [])


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home setUser={setUser} user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
