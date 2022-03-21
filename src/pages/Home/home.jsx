import { useState } from "react"

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


            <section className="widgets">
                <div className="widgets__header">
                    <h2>LinkedIn News</h2>
                    <img src={'./src/pages/assets/info.svg'} alt="" />
                </div>
                <article>React is awesome, Top news - 9899 readers</article>
                <article>Coronavirus: UK updates, Top news - 886 readers</article>
                <article>Tesla hits new highs, Cars  auto - 300 readers</article>
                <article>Bitcoin breaks $22k, Crypto - 8000 readers</article>
                <article>Is Redux too good?, Code - 123 readers</article>
            </section>

        </main>
    )
}