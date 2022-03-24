import { Link, useNavigate } from "react-router-dom";
import './header.css'
export default function Header({ setUser, search, setSearch }) {

    const navigate = useNavigate()


    function signOut() {
        localStorage.removeItem('token')
        setUser(null)
    }



    return (
        <header>
            <nav className="header" >
                <ul className='header__left'>
                    <li >
                        <img className='header__logo'
                            src="https://www.pikpng.com/pngl/m/57-572097_linkedin-transparent-icon-linked-in-logo-with-white.png"
                            alt=""
                        />
                    </li>
                    <li className="header__search">
                        <img src='./src/pages/assets/search.svg' alt='' />
                        <input placeholder="Search" type="text" name="search"
                            onChange={e => {
                                setSearch(e.target.value)
                            }}
                        />
                    </li>
                </ul>

                <ul className="header__right">
                    <Link to={'/home'}><li className='headerOption__icon' > <img src='./src/pages/assets/home.svg' alt="home" /> </li></Link>
                    <Link to={'/jobs'}> <li className='headerOption__icon' > <img src='./src/pages/assets/businessCenter.svg' alt="businessCenter" /> </li></Link>
                    {/* <Link to={'/companies'}> <li className='headerOption__icon' > <img src='./src/pages/assets/notifications.svg' alt="notifications" /> </li></Link> */}
                    <Link to={'/connections'}> <li className='headerOption__icon' > <img src='./src/pages/assets/supervisorAccount.svg' alt="supervisorAccount" /></li></Link>
                    <Link to={'/profile'}> <li className='headerOption__icon'> <img src='./src/pages/assets/avatar.svg' alt="chat" /> </li></Link>
                    <li><button className="sign_out" onClick={signOut}>SIGN OUT</button></li>
                </ul>
            </nav>
        </header>
    )
}