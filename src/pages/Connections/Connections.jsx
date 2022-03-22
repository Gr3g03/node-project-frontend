import './connections.css'

export default function Connections({ user }) {
    return (
        <div className="container">
            <div className="main-body">
                {user.post.map(getUser =>
                    <div className="user_card" key={getUser.id}>
                        <div className="card">
                            <div className="card-body">
                                <img src={user.photo} alt="User" className="user_avatar" />
                                <h5 className="user_job">{user.firstName} {user.lastName}</h5>
                                <p className="user_proffesion">Full Stack Developer</p>
                                <p className="User_location">Bay Area, San Francisco, CA</p>
                            </div>
                            <div className="card-footer">
                                <button className="connect_btn" type="button"><i className="material-icons">add</i>Follow</button>
                                <button className="chat_btn" type="button">Chat</button>
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </div>
    )
}