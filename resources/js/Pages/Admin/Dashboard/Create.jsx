import Authenticated from "@/Layouts/Authenticated/Admin/Authenticated"

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

import { useForm, Head } from "@inertiajs/react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import FlashMessage from "@/Components/FlashMessage";
 
export default function Create({flash_message}){

    const {setData, post, processing, errors} = useForm({
        name:'',
        category:'',
        price:'',
        thumbnail:''
    })

    const onHandler = (event)=>{
        setData(event.target.name, event.target.type=== "file" ? event.target.files[0] : event.target.value);
    }

    const submit = (e)=>{
        e.preventDefault()
        post(route('admin.dashboard.create.store'))
    }
    return(
        <>
            <Authenticated>
                <Head><title>Create</title></Head>
            <div className="container flex justify-center">
                <div className="mt-9 mb-8">
                {flash_message?.message && <FlashMessage message={flash_message.message}/> }
                    <div className="row">
                    <Card color="transparent" shadow={false}>
                            <Typography
                            variant="h5"
                            className={"!text-2xl"}
                            >
                                Create <span className="bg-teal-800 text-white px-2 rounded-md">Creatures</span>
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
                                handleChange={onHandler}
                                isFocused={true}
                                
                                placeholder="name"
                                required
                                />
                                <InputError message={errors.name} className="mt-2" />

                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Price
                                </Typography>
                                <TextInput
                                type="number"
                                name="price"
                                id="price"
                                handleChange={onHandler}
                                isFocused={true}
                                
                                placeholder="price"
                                required
                                />
                                <InputError message={errors.price} className="mt-2" />

                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Thumbnail
                                </Typography>
                                <TextInput
                                type="file"
                                name="thumbnail"
                                id="thumbnail"
                                handleChange={onHandler}
                                isFocused={true}
                                
                                placeholder="thumbnail"
                                required
                                />
                                <InputError message={errors.thumbnail} className="mt-2" />

                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Category
                                </Typography>
                                <TextInput
                                type="text"
                                name="category"
                                id="category"
                                handleChange={onHandler}
                                isFocused={true}
                                
                                placeholder="category"
                                required
                                />
                                <InputError message={errors.category} className="mt-2" />
                                
                                
                            </div>
                            
                                <Button className={"mt-6 text-teal-950 hover:text-white hover:bg-teal-950"} type="submit" disabled={processing}>
                                    Create
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