import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Heading from "./layout/Heading";
import FormError from "../common/FormError";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/api";


const options = ["Enquiry", "Complaint", "Compliment", "General Message"];

const schema = yup.object().shape({
    title: yup.string().required("Please enter your name"),
    number: yup.number().required("Please enter your phone number"),
    option: yup.string().oneOf(options),
    content: yup.string()
            .required("Please enter your message")
            .min(10, "The message must be at least 10 characters"),
});



export default function ContactUs(){
    
    const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

    const [changes, setChanges] = useState(false);
    const url = BASE_URL;

	const history = useHistory();
	
    

    const { register, 
            handleSubmit, 
            formState: { errors } 
        } = useForm({ resolver: yupResolver(schema) });

    async function onSubmit() {
        
            history.push("/contactussent");
		
		}
            console.log(errors);
    

    return (
        <>
        <Heading content="Contact us" />
        
        <form onSubmit={handleSubmit(onSubmit)}>
				{serverError && <FormError>{serverError}</FormError>}
            <fieldset disabled={submitting}>
            <p>Feel free to write to us if you have questions, comments or feedback</p>
                <div>
                    <p className="formp">Name</p>
                    <input {...register("title")} /> 
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div>
                    <p className="formp">Phone Number</p>
                    <input name="number" type="number" id="number" {...register("number")} />
                    {errors.number && <span>{errors.number.message}</span>}
                </div>
                <div>
                    <p>Options</p>
                    <select name="option">
                        <option value={options[0]}>{options[0]}</option>
                        <option value={options[1]}>{options[1]}</option>
                        <option value={options[2]}>{options[2]}</option>
                        <option value={options[3]}>{options[3]}</option>
                        
                    </select>
                    
                </div>
                <div>
                    <p className="formp">Message</p>
                    <textarea {...register("content")} />
                    {errors.content && <span>{errors.content.message}</span>}
                </div>
                <button>Send</button>
            </fieldset>
        </form>
        
        </>
    );
}
