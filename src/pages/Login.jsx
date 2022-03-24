import { useNavigate } from 'react-router-dom';


export default function Login({ signUp, login }) {
    const navigate = useNavigate()
    return (
        <div className="App">
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
                            Login
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

        </div>
    )
}