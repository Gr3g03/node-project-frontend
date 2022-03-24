import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Home/sidebar";
import Widgets from "../Home/widgets";

export default function Jobs({ user }) {

    const [companies, setCompanies] = useState([])


    useEffect(() => {
        fetch('http://localhost:4000/companies')
            .then(resp => resp.json())
            .then(newData => setCompanies(newData))
    }, [])
    // console.log(companies)


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
                {companies.map(job =>
                    <Link to={`/jobs/${job.id}`}
                        key={job.id}
                        className='jobs_list_item'>
                        <section className="company-info">
                            <div className="logo">
                                <img src={job.photo} alt="image" className="logo-img" />
                            </div>
                            <div className="job-possition">
                                <h3>{job.jobs[0].title}</h3>
                            </div>
                            <div className="company-data">
                                <ul>
                                    <li>{job.name}</li>
                                    <li>{job.location}</li>
                                    <li>{job.jobs[0].salary}$</li>
                                </ul>
                            </div>
                        </section>
                    </Link>

                )}
            </div>

            <Widgets />
        </main>
    )
}