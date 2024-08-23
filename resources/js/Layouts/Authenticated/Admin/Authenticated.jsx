import NavbarNav from "./Navbar"

export default function Authenticated({children}){
    return(
        <>
            <NavbarNav/>
            <div className="container">
                {children}
            </div>
        </>
    )
}