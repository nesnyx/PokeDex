import Authenticated from "@/Layouts/Authenticated/Admin/Authenticated"

import InputError from "@/Components/InputError";

import TextInput from "@/Components/TextInput";

import { useForm, Head, router, usePage } from "@inertiajs/react";
import {
    Card,
    Button,
    Typography,
  } from "@material-tailwind/react";


export default function Edit({creature}){
    
    const {data,setData, processing, errors} = useForm({
      ...creature
    });
    
    console.log(creature)
    const onHandleChange = (event)=>{
        setData(event.target.name, event.target.type=== "file" ? event.target.files[0] : event.target.value);
    }

    const submit = (e)=>{
        e.preventDefault()
        if(data.thumbnail === creature.thumbnail){
            delete data.thumbnail
        }
        router.put(route('admin.dashboard.creature.update', creature.id),{
            ...data
        })
    }

    return(
        <>
            <Authenticated>
                
                <div className="container flex justify-center">
                    <div className="mt-9 mb-8">
                    
                        <div className="row">
                        <Card color="transparent" shadow={false}>
                                <Typography
                                variant="h5"
                                className={"!text-2xl"}
                                >
                                    Edit <span className="bg-teal-800 text-white px-2 rounded-md">creature</span>
                                </Typography>
                                <form onSubmit={submit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-1 flex flex-col gap-6">
                                    
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Name
                                    </Typography>
                                    <TextInput
                                    type="text"
                                    name="name"
                                    id="name"
                                    isFocused={true}
                                    defaultValue={creature.name}
                                    handleChange={onHandleChange}
                                    placeholder="name"
                                    
                                    />
                                    <InputError message={errors.name} className="mt-2" />

                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Price
                                    </Typography>
                                    <TextInput
                                    type="number"
                                    name="price"
                                    id="price"
                                    isFocused={true}
                                    defaultValue={creature.price}
                                    handleChange={onHandleChange}
                                    placeholder="price"
                                    
                                    />
                                    <InputError message={errors.price} className="mt-2" />

                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Thumbnail
                                    </Typography>
                                    <TextInput
                                    type="file"
                                    name="thumbnail"
                                    id="thumbnail"
                                    isFocused={true}
                                    
                                    placeholder="thumbnail"
                                    handleChange={onHandleChange}
                                    
                                    />
                                    <InputError message={errors.thumbnail} className="mt-2" />
                                    <img src={`/storage/${creature.thumbnail}`} alt="" />

                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Category
                                    </Typography>
                                    <TextInput
                                    type="text"
                                    name="category"
                                    id="category"
                                    isFocused={true}
                                    defaultValue={creature.category}
                                    handleChange={onHandleChange}
                                    placeholder="category"
                                    
                                    />
                                    <InputError message={errors.category} className="mt-2" />
                                    
                                    
                                </div>
                                
                                    <Button  className={"mt-6 text-teal-950 hover:text-white hover:bg-teal-950"} type="submit" disabled={processing}>
                                        Update
                                    </Button>
                                </form>
                        </Card>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    )
}