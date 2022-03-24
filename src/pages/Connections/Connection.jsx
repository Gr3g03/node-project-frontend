import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Connection() {

    const [user, setUser] = useState([])

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/users/${params.id}`)
            .then(resp => resp.json())
            .then(newData => setUser(newData))
    }, [])

    console.log(user)

    return (
        <>
            <div className="sidebar">
                <div className="sidebar__top">
                    <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080" alt="" />
                    <i className="material-icons sidebar__topAvatar"><img className='user_avatar' src="https://www.vhv.rs/dpng/d/505-5058091_agent-icon-png-male-profile-logo-png-transparent.png" alt="" /> </i>

                    <h2>{user.firstName}</h2>
                    <h4>{user.email}</h4>
                </div>

                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Who Viewed You</p>
                        <p className="sidebar__statNumber">2,453</p>
                    </div>
                    <div className="sidebar__stat">
                        <p>Views on post</p>
                        <p className="sidebar__statNumber">2,650</p>
                    </div>
                </div>

                <div className="sidebar__bottom">
                    <p>Recent</p>
                    <div className="sidebar__recentItem">
                        <span className="sidebar__hash">#</span>
                        <p>reactjs</p>
                    </div>
                    <div className="sidebar__recentItem">
                        <span className="sidebar__hash">#</span>
                        <p>programming</p>
                    </div>
                    <div className="sidebar__recentItem">
                        <span className="sidebar__hash">#</span>
                        <p>softwareengineering</p>
                    </div>
                    <div className="sidebar__recentItem">
                        <span className="sidebar__hash">#</span>
                        <p>design</p>
                    </div>
                    <div className="sidebar__recentItem">
                        <span className="sidebar__hash">#</span>
                        <p>developer</p>
                    </div>
                </div>
                <div className="sidebar__bottom">
                    <p>Recent</p>
                    <div className="sidebar__recentItem">
                        <span className="sidebar__hash">#</span>
                        <p>reactjs</p>
                    </div>
                    <div className="sidebar__recentItem">
                        <span className="sidebar__hash">#</span>
                        <p>programming</p>
                    </div>
                    <div className="sidebar__recentItem">
                        <span className="sidebar__hash">#</span>
                        <p>softwareengineering</p>
                    </div>
                    <div className="sidebar__recentItem">
                        <span className="sidebar__hash">#</span>
                        <p>design</p>
                    </div>
                    <div className="sidebar__recentItem">
                        <span className="sidebar__hash">#</span>
                        <p>developer</p>
                    </div>
                </div>
                <div className="sidebar__bottom">
                    <p>Recent</p>
                    <div className="sidebar__recentItem">
                        <span className="sidebar__hash">#</span>
                        <p>reactjs</p>
                    </div>
                    <div className="sidebar__recentItem">
                        <span className="sidebar__hash">#</span>
                        <p>programming</p>
                    </div>
                    <div className="sidebar__recentItem">
                        <span className="sidebar__hash">#</span>
                        <p>softwareengineering</p>
                    </div>
                    <div className="sidebar__recentItem">
                        <span className="sidebar__hash">#</span>
                        <p>design</p>
                    </div>
                    <div className="sidebar__recentItem">
                        <span className="sidebar__hash">#</span>
                        <p>developer</p>
                    </div>
                </div>
            </div>
        </>
    )
}