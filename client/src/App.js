// libraries
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";

// Style
import './App.scss';

// Components
import NavBar from './components/NavBav';
import Auth from "./components/Authorization";
import FilterBar from "./components/FilterBar";
import Goal from "./components/Goal";


function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/user/login')
      .then(data => {
        setUser(data.data)
      })
      .catch(err => {
        console.error(err)

        return navigate('/login')
      })

  }, [])


  return (
    <div className="App">
      <NavBar />
      <Routes>
        {!user && <Route path='/login' element={<Auth setUser={setUser} user={user} />} />}
        {user && <Route path='/' element={<>
          <FilterBar user={user} />
          <Goal />
        </>} />}
      </Routes>
    </div>
  );
}

export default App;
