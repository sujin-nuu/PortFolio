import { Outlet } from "react-router-dom"
import { DashHeader } from "./DashHeader"

export const DashLayout = () => {
    return (
        <>
            <DashHeader />
            <Outlet />
        </>
    )
}