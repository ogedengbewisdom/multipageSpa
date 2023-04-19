import { Fragment } from "react"
import { Link, useParams } from "react-router-dom"


const ProductDetail = () => {
    const param = useParams()
    return (
        <Fragment>
            <h1>Products Details</h1>
            <p>{param.productId}</p>
            <button type="button"><Link to=".." relative="path">Back</Link></button>
        </Fragment>
    )
}


export default ProductDetail