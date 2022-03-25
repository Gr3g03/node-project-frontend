import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Connection({ allUsers, user }) {

    const [useri, setUser] = useState(null)

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/users/${params.id}`)
            .then(resp => resp.json())
            .then(newData => setUser(newData))
    }, [])

    function connect(user) {
        fetch(`http://localhost:4000/connect`, {
            method: 'PATCH',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ connectionId: user.id })
        })
            .then(resp => resp.json())
            // update state
            .then(updatedUser => setUser(updatedUser))

    }

    function disconnect(user) {
        fetch(`http://localhost:4000/removeconnection`, {
            method: 'PATCH',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ connectionId: user.id })
        })
            .then(resp => resp.json())
            // update state
            .then(updatedUser => setUser(updatedUser))

    }
    let foundConnection = allUsers
    foundConnection = foundConnection.find(users =>
        users.following.find(follower => follower.id === user.id))


    console.log(useri)
    if (useri === null) return <h1>Loading</h1>
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080" alt="" />
                <i className="material-icons sidebar__topAvatar"><img className='user_avatar' src={useri.

                    photo} alt="" /> </i>
                <h2>{useri.

                    firstName}</h2>
                <h4>{useri.

                    email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Connections</p>
                    <p className="sidebar__statNumber">{useri.following.length}</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,650</p>
                </div>
                {
                    foundConnection?.id === useri.id ?
                        <button className="connect_btn" onClick={() => connect(useri)}>Connect</button>
                        : <button className="disconnect_btn" onClick={() => disconnect(useri)}>Disconnect</button>}


            </div>
            < div className="sidebar__bottom">
                <p>Education</p>
                <ul className="Education_container">

                    {
                        useri.Education?.map(school =>
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