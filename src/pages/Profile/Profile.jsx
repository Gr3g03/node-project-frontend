import { useState } from "react"
import Education from "./Education"

export default function Profile({ user, setUser }) {
    const [show, setShow] = useState(false)

    function handleOnClick() {
        setShow(true)
    }
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080" alt="" />
                <i className="material-icons sidebar__topAvatar"><img className='user_avatar' src={user.photo} alt="" /> </i>
                <h2>{user.firstName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Connections</p>
                    <p className="sidebar__statNumber">{user.following.length}</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,650</p>
                </div>
            </div>


            <div className="sidebar__bottom">
                <p>Education</p>
                <ul>
                    <li>
                        <button onClick={() =>
                            handleOnClick()
                        }>
                            <h3 >+</h3></button>
                        <Education show={show} setShow={setShow} user={user} setUser={setUser} />
                    </li>
                    {
                        user.Education.map(school =>
                            <li><div><h3>{school.school}</h3>
                                <h4>{school.field}</h4>
                                <span>{school.startYear}</span><span>-{school.endYear}</span></div></li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}