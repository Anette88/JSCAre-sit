import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Heading from "./layout/Heading";
import FormError from "../common/FormError";
import { useHistory } from "react-router-dom";


const options = ["Enquiry", "Complaint", "Compliment", "General Message"];

const schema = yup.object().shape({
    title: yup.string().required("Please enter your name"),
    number: yup.number().required("Please enter your phone number"),
    content: yup.string()
            .required("Please enter your message")
            .min(10, "The message must be at least 10 characters"),
});



export default function ContactUs(){
    
    const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const history = useHistory();
	
    

    const { register, 
            handleSubmit, 
            formState: { errors } 
        } = useForm({ resolver: yupResolver(schema) });

    async function onSubmit(data) {
        setSubmitting(true);
		setServerError(null);

		data.status = "publish";
        

        //console.log("this data", data);


}

    return (
        <>
        <Heading content="Contact us" />
        
        <form onSubmit={handleSubmit(onSubmit)}>
				{serverError && <FormError>{serverError}</FormError>}
            <fieldset disabled={submitting}>
            <p>Do you have any questions? Please fill out this form. We will get back to you within 1-2 days.</p>
                <div>
                    <p>Name</p>
                    <input {...register("title")} /> 
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div>
                    <p>Phone Number</p>
                    <input name="number" type="number" id="number" {...register("number")} />
                    {errors.number && <span>{errors.number.message}</span>}
                </div>
                <div>
                    <p>Message</p>
                    <textarea {...register("content")} />
                    {errors.content && <span>{errors.content.message}</span>}
                </div>
                <button>{submitting ? "Submitting..." : "Send"}</button>
            </fieldset>
        </form>
        
        </>
    );
}
