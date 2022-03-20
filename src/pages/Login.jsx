export default function Login() {
    return (
        <main className="login__main">
            <div className="login">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6gTMRC4TofFTro6BXyqaT5zNWhHTOqJJPEQ&usqp=CAU"
                    alt=""
                />
                <form>
                    <input
                        placeholder="Full name (required if registering)"
                        type="text"
                    />
                    <input
                        placeholder="Profile pic URL (optional)"
                        type="text"
                    />
                    <input
                        placeholder="Email"
                        type="email"
                    />
                    <input
                        placeholder="Password"
                        type="password"
                    />
                    <button type="submit">
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
}