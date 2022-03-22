import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Job() {


    const params = useParams()
    const [companies, setCompanies] = useState([])

    // const [product, setProduct] = useState([])
    // const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/companies/${params.id}`)
            .then(resp => resp.json())
            .then(newData => setCompanies(newData))
    }, [])


    return (
        <main>
            <section className="product-detail main-wrapper">
                <img
                    // @ts-ignore
                    src={companies.photo}
                    // @ts-ignore
                    alt={companies.name}
                />
                {companies.map(company =>
                    <div className="product-detail__side"  >

                        <h3>{company.name}</h3>
                        <h2 >{company.description} </h2>
                        <p> item</p>
                        <p> item </p>
                        <h2>reviews</h2>
                    </div>
                )}
            </section>
        </main>
    );

}