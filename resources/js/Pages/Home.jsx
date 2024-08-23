import Authenticated from "@/Layouts/Authenticated/Authenticated";
import CreatureCard from "@/Components/CreatureCard";
import { Head } from "@inertiajs/react";
export default function Home({auth, creatures}){
    return(
        <>
        <Authenticated auth={auth}>
            <Head title="Home"/>
            <div className="mt-5 mb-6">
            <h1>Welcome <strong>{auth.user.name}</strong></h1>
            </div>
            <div className="container mx-auto flex justify-center justify-items-center px-8 py-3 lg:py-28">
                <div className={"row mt-5"}>
                    {creatures.map((creature, index) => (
                        <div className={"col-md-6 lg:max-w-lg"}>
                            <CreatureCard
                            key={`${index}-${creature.slug}`}
                            name={creature.name}
                            price={creature.price}
                            thumbnail={creature.thumbnail}
                            />
                        </div>
                    ))}
                    
                   
                </div>
            </div>
        </Authenticated>
        </>
    )   
}