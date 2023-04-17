import { Fragment } from "react"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <Fragment>
            <h1>layout</h1>
            <main>
            <Outlet />
            </main>
        </Fragment>
    )
}


export default RootLayout