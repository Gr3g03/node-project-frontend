import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Job() {


    const params = useParams()
    const [companies, setCompanies] = useState({})

    useEffect(() => {
        fetch(`http://localhost:4000/companies/${params.id}`)
            .then(resp => resp.json())
            .then(newData => setCompanies(newData))
    }, [])


    // console.log(companies)

    return (
        <main>
            <h2>sometext</h2>
            <section className="product-detail">
                <img
                    // @ts-ignore
                    src={companies.photo}
                    // @ts-ignore
                    alt={companies.name}
                />
                {/* {companies.map(company => */}
                <div className="product-detail__side"  >
                    <h3>{
                        // @ts-ignore
                        company.name}</h3>
                    <h2 >{
                        // @ts-ignore
                        company.location} </h2>
                    <p> {
                        // @ts-ignore
                        company.description}</p>
                    <p> item </p>
                    <h2>reviews</h2>
                </div>
                {/* )} */}
            </section>
        </main>
    );

}