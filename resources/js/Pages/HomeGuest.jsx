import Authenticated from "@/Layouts/Authenticated/Authenticated"
import LoginPage from "./Auth/LoginPage"
import { Head } from "@inertiajs/react"



export default function HomeGuest(){
    return(
        <>
           <Authenticated>
            <Head title={"Login"}/>
            <div className="container">
                <LoginPage/>
            </div>
           </Authenticated>
        </>
    )
}