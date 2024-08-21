import MyCollectionCard from "@/Components/MyCollectionCard";
import ProfileCard from "@/Components/ProfileCard";
import Authenticated from "@/Layouts/Authenticated/Authenticated"
import { Link, Head } from "@inertiajs/react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";


export default function ProfileUser({auth , points}){
    return (
        <>
        <Authenticated>
            <Head>
                <title>Profile</title>
            </Head>
            <div className="row">
                <div className="col-md-6">
                    <div className={"mt-5"}>
                        <ProfileCard auth={auth} points={points} />
                    </div> 
                </div>
                <div className="col-md-6">
                    <div className="mt-5">
                        <MyCollectionCard />
                    </div>
                </div>
            </div>

        </Authenticated>
        </>
    )
}