import { Fragment } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <Fragment>
            <h1>Welcome to my Home Page</h1>
            <p>Go to <Link to="/products">the list of products</Link></p>
        </Fragment>
    )
}

export default Home