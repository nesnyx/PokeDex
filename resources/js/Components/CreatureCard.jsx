
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useState } from "react";


export default function CreatureCard({name,price,thumbnail,points}){

    const [isPoint, setIsPoint] = useState()
    const onChecking = (e)=>{
            e.preventDefault()
            console.log(points)
    }
    return(
        
            <Card className="mt-6 w-96 mb-7">
                <CardHeader color="blue-gray" className="relative h-56">
                    {/* <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                    /> */}
                    <img src={`/storage/${thumbnail}`} alt="" />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {name}
                    </Typography>
                    
                    <Typography variant="h6">
                       
                        <p>Price : <span className="bg-teal-700 text-white px-2">{price} points</span></p>
                        
                        
                    </Typography>
                </CardBody>
                <CardFooter className={"pt-0 "}>
                        {points ? (
                            <Button onClick={onChecking} className={"text-teal-700 hover:text-teal-100 hover:bg-teal-950"}>Buy</Button>
                            
                        ) : (
                            <Button className={"bg-slate-400 "} disabled={true}>Insufficient points</Button>
                        )}
                    
                </CardFooter>
            </Card>
    )
}