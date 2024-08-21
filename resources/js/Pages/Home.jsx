import Authenticated from "@/Layouts/Authenticated/Authenticated";
import CreatureCard from "@/Components/CreatureCard";
import { Head } from "@inertiajs/react";
export default function Home({auth}){
    return(
        <>
        <Authenticated auth={auth}>
            <Head title="Home"/>
            <div className="container mx-auto">
                <div className={"row mt-5"}>
                    <h1>Welcome <strong>{auth.user.name}</strong></h1>
                    <div className={"col-md-6"}>
                        <CreatureCard/>
                    </div>
                    <div className={"col-md-6"}>
                        <CreatureCard/>
                    </div>
                </div>
            </div>
        </Authenticated>
        </>
    )   
}