import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Job() {


    const params = useParams()
    const [company, setCompany] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:4000/companies/${params.id}`)
            .then(resp => resp.json())
            .then(newData => setCompany(newData))
    }, [])


    // console.log(companies)
    if (company === null) return <h1>Loading</h1>
    return (
        <main>
            <h2>sometext</h2>
            <section className="product-detail">
                <img

                    src={company.photo}

                    alt={company.name}
                />

                <div className="product-detail__side"  >
                    <h3>{

                        company.name}</h3>
                    <h2 >{

                        company.location} </h2>
                    <p> {

                        company.description}</p>
                    <p> item </p>
                    <h2>reviews</h2>
                </div>

            </section>
        </main>
    );

}