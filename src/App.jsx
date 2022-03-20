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
  return (

    <div className="App">
      <Header />

      <Routes>
        <Route index element={<Navigate replace to={'/Login'} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>





    </div>
  )
}

export default App
