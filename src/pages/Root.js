import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import MainNavigation from "../component/MainNavigation"
import classes from "./Root.module.css"

const RootLayout = () => {
    return (
        <Fragment>
            <MainNavigation />
            <main className={classes.root}>
            <Outlet />
            </main>
        </Fragment>
    )
}


export default RootLayout