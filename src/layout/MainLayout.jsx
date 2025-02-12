import {Outlet} from "react-router-dom";
import Header from "../partials/Header";

function MainLayout () {

    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )

}

export default MainLayout;