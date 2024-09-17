import Authenticated from "@/Layouts/Authenticated/Authenticated"
import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

  import { Link, Head, useForm } from "@inertiajs/react";


export default function Payment({auth}){

    const {setData, post, processing, errors} = useForm({
        user_id:auth.user.id,
        points:500,
    })

    const onHandlerSubmit = (e) =>{
        e.preventDefault(); 
        post(route('payment.store'))
    }

    return (
        <>
        <Authenticated>
            <Head>
                <title>Payments</title>
            </Head>
            <div className="mt-5 mb-5">
                <div className="row">
                    
                    <div className={"col-md-12 flex justify-center text-center"}>
                    <Card>
                        <CardHeader>
                            <Typography variant="h2">
                                Top Up
                            </Typography>
                        </CardHeader>
                        <CardBody>
                           <Typography variant="h4">
                                500 Points
                           </Typography>
                           <Typography className={"mt-3 bg-teal-300"}>
                           Rp. 200.000,-
                           </Typography>
                           
                        </CardBody>
                        <form onSubmit={onHandlerSubmit}>
                            <CardFooter>
                                <Button type="submit" className={"text-teal-600"}>
                                    Pay
                                </Button>
                            </CardFooter>
                        </form>
                    </Card>
                    </div>
                </div>
            </div>
        </Authenticated>
        </>
    )
}