import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import NotFound from './NotFound';
import Companies from './pages/Companies/Companies';
import Connection from './pages/Connections/Connection';
import Connections from './pages/Connections/Connections';
import Header from './pages/Header/Header';
import Home from './pages/Home/home';
import Job from './pages/Jobs/job';
import Jobs from './pages/Jobs/Jobs';
import Login from './pages/Login';
import Profile from './pages/Profile/Profile';

function App() {
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState([])
  const [search, setSearch] = useState('')

  const searcheditems = allUsers.filter(user =>
    user.firstName.toUpperCase().includes(search.toUpperCase())
  )

  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:4000/validate', {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            console.log('Invalid token!')
          } else {
            setUser(data)
          }
        })
    }
  }, [])


  function signUp(e) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value
    const photo = e.target.photo.value

    fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password, photo: photo, firstName: firstName, lastName: lastName })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          alert('Oops, something went wrong.')
        } else {
          // we managed to create our user!
          localStorage.setItem('token', data.token)
          setUser(data.user)
        }
      })
  }

  function login(e) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          localStorage.setItem('token', data.token)
          setUser(data.user)
        }
      })
  }

  if (user === null)
    return (

      <Login login={login} signUp={signUp} />
    )
  return (
    <div>
      <Header setUser={setUser} search={search} setSearch={setSearch} />
      <Routes>
        <Route index element={<Navigate replace to={'/home'} />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/home' element={<Home user={user} setUser={setUser} />} />
        <Route path='/jobs' element={<Jobs user={user} />} />
        <Route path='/jobs/:id' element={<Job />} />
        <Route path='connections' element={<Connections setAllUsers={setAllUsers} searcheditems={searcheditems} />} />
        <Route path='/connections/:id' element={<Connection />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/profile' element={<Profile user={user} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
