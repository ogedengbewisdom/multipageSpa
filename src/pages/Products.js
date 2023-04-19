import { Fragment } from "react"
import { Link } from "react-router-dom"


const DUMMY = [
    {id: "p1", title: "product 1"},
    {id: "p2", title: "product 2"},
    {id: "p3", title: "product 3"}
]


const Products = () => {
    return (
        <Fragment>
            <h1>My Products page</h1>
            <ul>
                {DUMMY.map(item => <li key={item.id}><Link to={item.id}>{item.title}</Link></li>)}
            </ul>
        </Fragment>
    )
}

export default Products