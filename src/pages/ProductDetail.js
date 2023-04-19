import { Fragment } from "react"
import { useParams } from "react-router-dom"


const ProductDetail = () => {
    const param = useParams()
    return (
        <Fragment>
            <h1>Products Details</h1>
            <p>{param.productId}</p>
        </Fragment>
    )
}


export default ProductDetail