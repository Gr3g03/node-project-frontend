import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import NotFound from './NotFound';
import Header from './pages/Header/Header';
import Home from './pages/Home/home';
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);

  return (

    <div className="App">
      <Header setUser={setUser} />

      <Routes>
        <Route index element={<Navigate replace to={'/Login'} />} />
        <Route path='/login' element={<Login setUser={setUser} user={user} />} />
        <Route path='/home' element={<Home user={user} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>





    </div>
  )
}

export default App
