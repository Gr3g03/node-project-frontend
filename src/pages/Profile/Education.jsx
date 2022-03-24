function Education({ show, setShow, user, setUser }) {

    if (!show) {
        return null
    }


    function addNew(e) {
        e.preventDefault()
        const school = e.target.school.value
        const field = e.target.field.value
        const startYear = Number(e.target.start.value)
        const endYear = Number(e.target.end.value)

        fetch('http://localhost:4000/education', {
            method: 'POST',
            headers: {
                Authorization: localStorage.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ school: school, field: field, startYear: startYear, endYear: endYear, userId: user.id })
        })
            .then(resp => resp.json())

            .then((data) => {
                const update = JSON.parse(JSON.stringify(user))

                update.Education.push(data)
                setUser(update)
            })
        e.target.reset()
    }
    return (
        <section className="add-modal">
            <div className="modal">

                <button className="close-button" onClick={() => setShow(false)}>X</button>

                <h1>Enter your education</h1>

                <form onSubmit={(e) => addNew(e)}>

                    <label>
                        School
                        <input type='text' className="firstname" name='school' />
                    </label>

                    <label>
                        Field of Study
                        <input type='text' className="lastname" name='field' />
                    </label>

                    <label>
                        Start Year
                        <input type='number' className="phone" name='start' />
                    </label>
                    <label>
                        End Year
                        <input type='number' className="phone" name='end' />
                    </label>
                    <input type='submit' className="submit" value={'SAVE'} />

                </form>
            </div>

        </section>
    )
}
export default Education