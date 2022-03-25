import { useNavigate } from "react-router-dom"

function Register({ show, setShow, signUp }) {

    if (!show) {
        return null
    }

    const navigate = useNavigate()

    return (
        <section className="add-modal">
            <div className="modal">

                <button className="close-button" onClick={() => setShow(false)}>X</button>
                <h1>Enter your Information</h1>
                <form onSubmit={signUp}>
                    <label>
                        Name
                        <input
                            className="firstname"
                            placeholder="First name"
                            name='firstName'
                            type="text"
                        />
                    </label>
                    <label>
                        Last Name
                        <input
                            className="lastname"
                            placeholder="Last name"
                            name='lastName'
                            type="text"
                        />
                    </label>
                    <label>
                        Profile Pic
                        <input
                            className="profilepic"
                            placeholder="Profile pic URL (optional)"
                            name='photo'
                            type="text"
                        />
                    </label>
                    <label>
                        Email
                        <input
                            className="email"
                            placeholder="Email"
                            name='email'
                            type="email"
                        />
                    </label>
                    <label>
                        Password
                        <input
                            className="password"
                            placeholder="Password"
                            name='password'
                            type="password"
                        />
                    </label>
                    <input type='submit' className="submit" value={'SAVE'} />
                </form>
            </div>

        </section>
    )
}
export default Register