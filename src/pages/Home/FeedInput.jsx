export default function feedInput(addNewPost) {
    return (
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

    )
}