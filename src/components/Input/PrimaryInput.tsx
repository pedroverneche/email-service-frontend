import { Input } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";
import "./primaryinput.css";


interface PrimaryInputProps{
    name: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    label: string,
    placeholder: string
}

export default function PrimaryInput({ name, value, onChange, label, placeholder} : PrimaryInputProps){
    return(
        <div className="input-container">
            <label className="label">{label}</label>
            <Input 
                variant='filled' 
                placeholder={placeholder} 
                name={name} 
                value={value} 
                onChange={onChange}
            />
        </div>
    )
}
