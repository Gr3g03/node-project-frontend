import Sidebar from "./sidebar"
import Widgets from "./widgets"

export default function Home({ user, setUser }) {

    function addNewPost(e) {
        e.preventDefault()
        const text = e.target.newPost.value
        const dateCreated = Date
        const likes = user.likes

        fetch('http://localhost:4000/post', {
            method: 'POST',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: text, dateCreated: dateCreated, likes: 0 })
        })
            .then(resp => resp.json())

            .then((postData) => {
                const upadtepost = JSON.parse(JSON.stringify(user))
                postData.comments = []
                upadtepost.post.push(postData)
                setUser(upadtepost)
            })
        e.target.reset()
    }


    function addComment(e, id) {
        e.preventDefault()
        const commentText = e.target.comment.value
        const dateCreated = Date()
        const postId = id


        fetch('http://localhost:4000/comments', {
            method: 'POST',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ commentText: commentText, dateCreated: dateCreated, postId: postId, likes: 0 })
        })
            .then(resp => resp.json())
            .then((postData) => {
                const upadteLikes = JSON.parse(JSON.stringify(user))
                const postIndex = upadteLikes.post.findIndex(item =>
                    item.id === postId)
                upadteLikes.post[postIndex].comments.push(postData)
                setUser(upadteLikes)
            })
    }

    function comment(e, follower, item) {
        e.preventDefault()
        const commentText = e.target.comment.value
        const dateCreated = Date()
        const postId = item.id

        fetch('http://localhost:4000/comments', {
            method: 'POST',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ commentText: commentText, dateCreated: dateCreated, postId: postId, likes: 0 })
        })
            .then(resp => resp.json())
            .then((postData) => {
                const upadteLikes = JSON.parse(JSON.stringify(user))
                const followingIndex = upadteLikes.following.findIndex(item =>
                    item.id === follower.id)
                const postIndex = upadteLikes.following[followingIndex].post.findIndex(item =>
                    item.id === postId)
                upadteLikes.following[followingIndex].post[postIndex].comments.push(postData)
                setUser(upadteLikes)
            })
    }

    function like(item) {
        fetch(`http://localhost:4000/likes/${item.id}`, {
            method: 'PATCH',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ likes: item.likes + 1 })
        })
            .then(resp => resp.json())
            // update state
            .then((postData) => {
                const upadteLikes = JSON.parse(JSON.stringify(user))
                const postIndex = upadteLikes.post.findIndex(item =>
                    item.id === postData.id)
                upadteLikes.post[postIndex] = postData
                setUser(upadteLikes)
            })
    }

    function increaselike(follower, item) {
        fetch(`http://localhost:4000/likes/${item.id}`, {
            method: 'PATCH',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ likes: item.likes + 1 })
        })
            .then(resp => resp.json())
            // update state
            .then((postData) => {
                const upadteLikes = JSON.parse(JSON.stringify(user))
                const followingIndex = upadteLikes.following.findIndex(item =>
                    item.id === follower.id)

                const first = upadteLikes.following[followingIndex].post.findIndex(itemi =>
                    itemi.id === postData.id)
                upadteLikes.following[followingIndex].post[first] = postData


                setUser(upadteLikes)


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
                                <img className="user_avatar" src={user.photo} alt='avatar' />
                                <div className="post__info">
                                    <h2>{user.firstName}</h2>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                            <ul className="post__buttons">
                                <li><button className="like_button" onClick={() => { like(item) }}>
                                    <img src={'./src/pages/assets/thumbUp.svg'} /> {item.likes}   </button></li>
                                <li><img src={'./src/pages/assets/comment.svg'} /></li>
                                <li><img src={'./src/pages/assets/share.svg'} /></li>
                                <li><img src={'./src/pages/assets/send.svg'} /></li>
                            </ul>
                            <ul className="comments">
                                <form className="comment-form" onSubmit={(e) => addComment(e, item.id)}>
                                    <input type="text"
                                        name="comment"
                                        className="comment-input"
                                        placeholder="Add a comment" />
                                    <button className="comment-button" type="submit">ADD</button>
                                </form>
                                <h5>Comments</h5>
                                <li>{item.comments.map(comment => <p key={comment.id}>{comment.commentText}</p>)}</li>
                            </ul>

                        </div>
                    )}

                    {user.following.map(follower => (
                        follower.post.map(item =>
                            <div className="post" key={item.id}>
                                <div className="post__header">
                                    <img className="user_avatar" src={follower.photo} alt='avatar' />
                                    <div className="post__info">
                                        <h2>{follower.firstName}</h2>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                                <ul className="post__buttons">
                                    <li><button className="like_button" onClick={() => { increaselike(follower, item) }}>
                                        <img src={'./src/pages/assets/thumbUp.svg'} /> {item.likes}   </button></li>
                                    <li><img src={'./src/pages/assets/comment.svg'} /></li>
                                    <li><img src={'./src/pages/assets/share.svg'} /></li>
                                    <li><img src={'./src/pages/assets/send.svg'} /></li>
                                </ul>
                                <ul className="comments">
                                    <form className="comment-form" onSubmit={(e) => comment(e, follower, item)}>
                                        <input type="text"
                                            name="comment"
                                            className="comment-input"
                                            placeholder="Add a comment" />
                                        <button className="comment-button" type="submit">ADD</button>
                                    </form>
                                    <h5>Comments</h5>
                                    <li>{item.comments.map(comment => <p key={comment.id}>{comment.commentText}</p>)}</li>
                                </ul>

                            </div>
                        )
                    )

                    )}
                </div>


            </div>

            <Widgets />

        </main>
    )
}