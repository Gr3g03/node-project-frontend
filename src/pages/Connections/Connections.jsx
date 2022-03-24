import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './connections.css'

export default function Connections({ setAllUsers, searcheditems }) {
    useEffect(() => {
        fetch('http://localhost:4000/users')
            .then(resp => resp.json())
            .then(newData => setAllUsers(newData))
    }, [])

    return (
        <div className="container">
            <div className="main-body">
                {searcheditems.map(getUser =>
                    <Link to={`/connections/${getUser.id}`}
                        key={getUser.id}
                        className='users_list_item'
                    >
                        <div className="user_card" >
                            <div className="card">
                                <div className="card-body">
                                    <img src={getUser.photo} alt="User" className="user_avatar" />
                                    <h5 className="user_job">{getUser.firstName} {getUser.lastName}</h5>
                                    <p className="user_proffesion">Full Stack Developer</p>
                                    <p className="User_location">Bay Area, San Francisco, CA</p>
                                </div>
                                <div className="card-footer">
                                    <button className="connect_btn" type="button"><i className="material-icons">add</i>Follow</button>
                                    <button className="chat_btn" type="button">Chat</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}


            </div>
        </div>
    )
}