export default function Widgets() {
    return (
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
    )
}