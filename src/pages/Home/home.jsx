import { useState } from "react"
import Sidebar from "./sidebar"
import Widgets from "./widgets"

export default function Home({ user, setUser }) {

    const [post, setPost] = useState([])


    function addNewPost(e) {
        e.preventDefault()
        const text = e.target.newPost.value
        const dateCreated = Date()

        fetch('http://localhost:4000/post', {
            method: 'POST',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: text, dateCreated: dateCreated })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    setPost(data)
                }
            })


    }

    return (


        <main className='main__section'>
            <Sidebar user={user} />
            <div className="feed">
                <div className="feed__inputContainer">
                    <div className="feed__input">
                        <img src={'./src/pages/assets/create.svg'} alt="" />
                        <form
                            onSubmit={addNewPost}
                        >
                            <input
                                type='text'
                                name='newPost'
                                required
                            />
                            <button type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                    <ul className="feed__inputOptions">
                        <li><img src={'./src/pages/assets/image.svg'} /></li>
                        <li><img src={'./src/pages/assets/subscriptions.svg'} /></li>
                        <li><img src={'./src/pages/assets/event.svg'} /></li>
                        <li><img src={'./src/pages/assets/calendarViewWeek.svg'} /></li>
                    </ul>
                    {user.post.map(item =>
                        <div className="post" key={item.id}>
                            <div className="post__header">
                                <img src={user.image} alt='avatar' />
                                <div className="post__info">
                                    <h2>{user.firstName}</h2>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                            <div className="post__body">
                                {/* <p>{item.text}</p> */}
                            </div>
                            <ul className="post__buttons">
                                <li><img src={'./src/pages/assets/thumbUp.svg'} /></li>
                                <li><img src={'./src/pages/assets/comment.svg'} /></li>
                                <li><img src={'./src/pages/assets/share.svg'} /></li>
                                <li><img src={'./src/pages/assets/send.svg'} /></li>
                            </ul>
                        </div>
                    )}
                </div>


            </div>

            <Widgets />

        </main>
    )
}