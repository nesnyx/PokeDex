import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

  import { Link, Head } from "@inertiajs/react";

export default function ProfileCard({auth, points}){
    return (
        <Card className="mt-6 w-96">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                    Name : {auth.user.name}
                    </Typography>
                    <Typography className="mb-4">
                    Email : <strong>{auth.user.email}</strong>
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis autem rerum reiciendis sed dolorum, culpa aut perferendis aspernatur eos recusandae qui praesentium aliquid iure itaque quod perspiciatis, totam sunt accusamus!
                    </Typography>
                    <CardFooter>

                        
                            { !points ? (
                                <h2>Point : 0</h2>
                            ):(
                                <div >
                                    <h2 >Point : <strong className={"bg-teal-600 text-white p-2 rounded"}>{points.points}</strong></h2>
                                </div>
                            ) }
                       
                    </CardFooter>
                    <Link href={route('payment.index')} method="get">
                        <Button className={"mt-1 text-teal-600 hover:bg-teal-900 hover:text-white"}>
                            Top Up
                        </Button>
                    </Link>
                </CardBody>
                
        </Card>
    )
}