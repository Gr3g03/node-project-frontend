import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Register from './Register';


export default function Login({ signUp, login }) {

    const [show, setShow] = useState(false)


    function handleOnClick() {
        setShow(true)
    }


    const navigate = useNavigate()
    return (
        <div className="App">
            <main className="login__main">
                <div className="login">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6gTMRC4TofFTro6BXyqaT5zNWhHTOqJJPEQ&usqp=CAU"
                        alt=""
                    />

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
                    <p className='Education_list'>
                        Not a member?{` `}
                        <button className="register_Button" onClick={() =>
                            handleOnClick()
                        }>
                            <span >Register now</span></button>
                        <Register show={show} setShow={setShow} signUp={signUp} />
                    </p>
                </div>
                <div className="right_logi__section">
                    <img src={'src/pages/assets/background_linkedin.svg'} alt="" />
                </div>
            </main>

        </div>
    )
}