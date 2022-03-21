import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home/home';

export default function Login({ user, setUser }) {
    const navigate = useNavigate()

    // const [user, setUser] = useState(null)

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
            <main className="login__main">
                <div className="login">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6gTMRC4TofFTro6BXyqaT5zNWhHTOqJJPEQ&usqp=CAU"
                        alt=""
                    />
                    <form onSubmit={signUp}>
                        <input
                            placeholder="Full name (required if registering)"
                            name='firstName'
                            type="text"
                        />
                        <input
                            placeholder="Full name (required if registering)"
                            name='lastName'
                            type="text"
                        />
                        <input
                            placeholder="Profile pic URL (optional)"
                            name='photo'
                            type="text"
                        />
                        <input
                            placeholder="Email"
                            name='email'
                            type="email"
                        />
                        <input
                            placeholder="Password"
                            name='password'
                            type="password"
                        />
                        <button type="submit" onSubmit={(e) => {
                            e.preventDefault()
                            navigate('/home')
                        }}>
                            Sign In
                        </button>
                    </form>

                    <form onSubmit={login}>
                        <input
                            placeholder="Email"
                            name='email'
                            type="email"
                        />
                        <input
                            placeholder="Password"
                            name='password'
                            type="password"
                        />
                        <button type="submit" onSubmit={(e) => {
                            e.preventDefault()
                            navigate('/home')
                        }}>
                            Sign In
                        </button>
                    </form>
                    <p>
                        Not a member?{` `}
                        <span className="login__register">
                            Register Now
                        </span>
                    </p>
                </div>
                <div className="right_logi__section">
                    <img src={'src/pages/assets/background_linkedin.svg'} alt="" />
                </div>
            </main>
        )
    return (
        <Home user={user} setUser={setUser} />
    )
}