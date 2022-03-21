export default function Sidebar({ user }) {
    return (
        <section className="sidebar">
            <div className="sidebar__top">
                <img
                    src="https://images.unsplash.com/photo-1523650055327-53aeba964f5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                    alt=""
                />
                <div className="sidebar__avatar">
                    <img src={user.image} alt='avatar' />
                    <h3>{user.firstName}</h3>
                </div>
                <h2>{user.firstName}</h2>
                <h4>{user.email}'</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>View on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>
            <ul className="sidebar__bottom">
                <p>Recent</p>
                <li>reactjs</li>
                <li>programming</li>
                <li>softwareengineering</li>
                <li>design</li>
                <li>developer</li>
            </ul>
        </section>
    )
}