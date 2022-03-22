import './profile.css'
export default function Widgets() {
    return (
        <section className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <i className="material-icons"> info </i>
            </div>
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                </div>
                <div className="widgets__articleRight">
                    <h4>Coding </h4>
                    <p>Top news - 4500 readers</p>
                </div>
            </div>

            <div className="widgets__article">
                <div className="widgets__articleLeft">
                </div>
                <div className="widgets__articleRight">
                    <h4> LinkedIn </h4>
                    <p>Top news - 4500 readers</p>
                </div>
            </div>

            <div className="widgets__article">
                <div className="widgets__articleLeft">
                </div>
                <div className="widgets__articleRight">
                    <h4>Article</h4>
                    <p>Top news - 4500 readers</p>
                </div>
            </div>
        </section>
    )
}