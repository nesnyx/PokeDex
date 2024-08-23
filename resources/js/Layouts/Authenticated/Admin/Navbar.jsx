import { Link, usePage } from '@inertiajs/react';
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


function NavList() {
    const {checkAuth} = usePage().props
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
            {
            checkAuth && (
                <>
                    <Link href={route('logout')} as='button' className='flex items-center transition-colors hover:text-blue-500' method='post'>
                        Logout
                    </Link>

                
                </>
                
                
            ) 
        } 
            {
                !checkAuth && (
                        <Link href={route('login')} as='button' className='flex items-center transition-colors hover:text-blue-500'>
                            Login
                        </Link>
                ) 
            } 
          
        </Typography>

        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium text-white bg-teal-900"
        >
            {
            checkAuth && (
                <>
                    {checkAuth.name}

                
                </>
                
                
            ) 
        } 
          
        </Typography>
        
      </ul>
    );
  }

export default function NavbarNav(){
    const {checkAuth} = usePage().props
    const [openNav, setOpenNav] = React.useState(false);
 
    const handleWindowResize = () =>
      window.innerWidth >= 960 && setOpenNav(false);
   
    React.useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
   
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);

    return(
        <>
              <Navbar className="mx-auto max-w-screen-xl px-6 py-3 text-teal-600">
                <div className="flex items-center justify-between ">
                    <Typography
                    as="a"
                    href="#"
                    variant="h5"
                    className="mr-4 cursor-pointer py-1.5"
                    >
                        <Link href={route('login')}>
                        PokeDex
                        </Link>
                    </Typography>
                    <div className="hidden lg:block">
                    <NavList />
                    </div>
                    <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                    >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList checkAuth={checkAuth} />
                </Collapse>
                </Navbar>
        </>
            
        
    )
}