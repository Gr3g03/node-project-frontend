import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import NotFound from './NotFound';
import Companies from './pages/Companies/Companies';
import Connection from './pages/Connections/Connection';
import Header from './pages/Header/Header';
import Home from './pages/Home/home';
import Jobs from './pages/Jobs/Jobs';
import Login from './pages/Login';
import Profile from './pages/Profile/Profile';

function App() {
  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);

  return (

    <div className="App">
      <Header setUser={setUser} />

      <Routes>
        <Route index element={<Navigate replace to={'/Login'} />} />
        <Route path='/login' element={<Login setUser={setUser} user={user} />} />
        <Route path='/home' element={<Home user={user} setUser={setUser} />} />
        <Route path='/jobs' element={<Jobs user={user} />} />
        <Route path='/connection' element={<Connection />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>





    </div>
  )
}

export default App
