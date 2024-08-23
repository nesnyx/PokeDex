
import FlashMessage from "@/Components/FlashMessage";
import Modal from "@/Components/Modal";
import Authenticated from "@/Layouts/Authenticated/Admin/Authenticated"
import { Link, Head, useForm } from "@inertiajs/react";
import { Button, Card,CardBody,CardHeader,CardFooter, Typography } from "@material-tailwind/react";
import { useState } from "react";


export default function Index({flash_message, creatures}){
    const [isOpen,setIsOpen] = useState(false);
    const {delete : destroy ,put} = useForm()
    
    let onShowDialogWithButtons = () => {
        setIsOpen(true);
    }
    
    
    return (
        <>
           <Authenticated>
            <Head><title>Dashboard</title></Head>
           <div className="container">
            {flash_message?.message && <FlashMessage message={flash_message.message}/> }
                <Link href={route('admin.dashboard.create')}>
                    <Button className={"text-teal-200 bg-teal-900 mt-5 hover:text-teal-900 hover:bg-white"}>
                        Create
                    </Button>
                </Link>
                <div className="mt-9">
                    <div className="row">
                    <Card className="h-full w-full pb-4">
                        <table className="w-full min-w-max table-auto text-center pb-5">
                            <thead>
                            <tr>
                                
                               
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                    >
                                    Name
                                    </Typography>
                                </th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                    >
                                    Price
                                    </Typography>
                                </th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                    >
                                    Action
                                    </Typography>
                                </th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            
                                    {creatures.map((creature)=> (
                                        <tr key={creature.id} className="text-center">
                                            
                                            <td>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {creature.name}
                                                </Typography>
                                            </td>
                                            <td>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {creature.price}
                                                </Typography>
                                            </td>
                                            <td>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal mt-2"
                                                >
                                                    <Link href={route('admin.dashboard.creature.edit',creature.id)}>
                                                        <Button type="button" className={"text-white bg-teal-600 mx-2"}>
                                                            Edit
                                                        </Button>
                                                    </Link>
                                                   
                                                        <Button onClick={()=>{
                                                        destroy(route('admin.dashboard.creature.destroy',creature.id))
                                                    }} type="button" className={"text-white bg-red-600"}>
                                                            Delete
                                                        </Button>
                                                    
                                                    
                                                    
                                                </Typography>
                                            </td>
                                        </tr>
                                    ))}
                                    
                                    
                                
                            </tbody>
                        </table>
                    </Card>
                    </div>
                </div>
           </div>

           
           </Authenticated>
        </>
    )
}