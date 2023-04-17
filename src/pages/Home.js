import { Fragment } from "react"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate('/products')
    }
    return (
        <Fragment>
            <h1>Welcome to my Home Page</h1>
            <p>Go to <Link to="/products" >the list of products</Link></p>
            <button onClick={navigateHandler}>onClick</button>
        </Fragment>
    )
}

export default Home