import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

  import { Link, Head } from "@inertiajs/react";

export default function MyCollectionCard(){
    return(
        <>
        <Card className="mt-6 w-96">
                   
                    <CardBody>
                        <CardHeader shadow={false}>
                            <Typography variant="h5" className="mb-2">
                            My Collection
                            </Typography>
                        </CardHeader>
                    </CardBody>
                
        </Card>
        </>
    )
}