import { Fragment } from "react"
import MainNavigation from "../component/MainNavigation"

const ErrorPage = () => {
    return(
        <Fragment>
            <MainNavigation />
            <main>
                <h1>An error occured!</h1>
                <p>Could not find this page!</p>
            </main>
        </Fragment>
    )
}


export default ErrorPage