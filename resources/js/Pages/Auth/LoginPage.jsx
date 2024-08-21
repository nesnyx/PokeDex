import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

  export default function LoginPage() {
    const {data, setData, errors, processing, post} = useForm({
        email: '',
        password: '',
        
    })

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const onHandler = (e) =>{
        setData(e.target.name, e.target.value)}
    
    return (
       <>
            <Card color="transparent" shadow={false}>
            <form onSubmit={submit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
                
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Email
                </Typography>
                <TextInput
                type="email"
                name="email"
                id="email"
                onChange={onHandler}
                isFocused={true}
                value={data.email}
                placeholder="email"
                required
                />
                
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
                </Typography>
                <TextInput 
                    type="password"
                    name="password"
                    id="password"
                    isFocused={true}
                    value={data.password}
                    placeholder="password"
                    onChange={onHandler}
                    required
                />
                
            </div>
            
                <Button className={"mt-6 text-teal-950"} type="submit" disable={processing}>
                    Login
                </Button>
            </form>
            </Card>
       </>
    );
  }