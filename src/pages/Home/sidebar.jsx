import './profile.css'

export default function Sidebar({ user }) {
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
                    {/* <p className="sidebar__statNumber">{user.following.length}</p> */}
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
        </div>
    )
}