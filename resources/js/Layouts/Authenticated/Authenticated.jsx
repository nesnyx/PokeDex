import Navbar from "./Navbar"

export default function Authenticated({auth,children}){
    return(
        <>
        <Navbar/>
        <div className="container">
            {children}
        </div>
        </>
    )
}