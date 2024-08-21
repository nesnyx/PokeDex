import NavbarNav from "./Navbar"

export default function Authenticated({checkAuth,children}){
    return(
        <>
        <NavbarNav checkAuth={checkAuth}/>
        <div className="container">
            {children}
        </div>
        </>
    )
}