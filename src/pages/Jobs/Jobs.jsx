import Sidebar from "../Home/sidebar";
import Widgets from "../Home/widgets";

export default function Jobs({ user }) {
    return (

        <main className="jobs__main">
            <Sidebar user={user} />

            <div className="sugested__jobs__searches">
                <section className="suggested-searches">
                    <div className="suggested">
                        <h2>Suggested searches</h2>
                        <ul className="suggested__">
                            <li className="suggested-box" >searches  </li>
                            <li className="suggested-box">searches  </li>
                            <li className="suggested-box">searches  </li>
                            <li className="suggested-box">searches  </li>
                        </ul>
                    </div>
                </section>

                <section className="company-info">
                    <div className="logo">
                        <img src="" alt="image" />
                    </div>
                    <div className="job-possition">
                        <h3>title</h3>
                    </div>
                    <div className="company-data">
                        <ul>
                            <li>company Name</li>
                            <li>job location</li>
                            <li>job salary</li>
                        </ul>
                    </div>
                </section>
            </div>
            <Widgets />
        </main>
    )
}