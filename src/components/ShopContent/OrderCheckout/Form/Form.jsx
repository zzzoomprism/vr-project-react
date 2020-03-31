import React from "react";
import {Field, reduxForm, SubmissionError} from "redux-form";
import submit from "./validationSubmit";


const renderField = ({label, input, type,  meta: {touched, error }}) => (
    <div className={"form-group"}>
        <label>{label}</label>
        <input {...input} className={(error && touched) ? "input-error" : "form-input"} placeholder={error} type={type}/>
    </div>
);

const renderTextAreaField = ({label, textarea, meta: {touched, error}}) => (
    <div className={"form-group"}>
        <label>{label}</label>
        <textarea {...textarea}/>
    </div>
);

const renderSelectAreaField = ({label, input, children, meta: {touched, error}}) => (
    <div className={"form-group"}>
        <label>{label}</label>
        <select {...input} className={(error && touched) ? "form-error" : "form-default"} >
            {children}
        </select>
    </div>
);


const ContactFormFunc = ({handleSubmit}) => (
    <form onSubmit={handleSubmit(submit)} className={"form-section-col2"}>
        <div>
            <div className={"form-row"}>
                <Field name={"firstName"} label={"First Name" }  component={renderField} type={"text"}/>
                <Field name={"lastName"} label={"Last Name"} component={renderField} type={"text"} />
            </div>
            <div className={"form-row"}>
                <Field name={"email"} label="Email" component={renderField} type={"email"}/>
                <Field name={"number"} label="Phone Number" component={renderField} type={"number"}/>
            </div>
            <div className={"form-row"}>
                <Field name={"city"} label="City" component={renderSelectAreaField}>
                    <option value={""}>Choose your city:</option>
                    <option value="Minsk">Minsk</option>
                    <option value="Soligorsk">Soligorsk</option>
                    <option value="Vitebsk">Vitebsk</option>
                </Field>
                <Field name={"address"} label="Address" component={renderField} type={"text"}/>
            </div>
            <div className="form-row">
                <Field name={"Comment"} label="Comment" component={renderTextAreaField}/>
            </div>
        </div>


        <div>
                <p>Would you like to deliver?</p>
            <div className={"form-row"}>
                <Field name={"deliver"} label={"Yes" } value={"yes"} component={renderField} type={"radio"}/>
                <Field name={"deliver"} label={"No" } value={"no"} component={renderField} type={"radio"}/>
            </div>
        </div>
            <button type={"submit"}>OK!</button>
            </form>
        );

const ContactForm = reduxForm({
    form: "contact"
})(ContactFormFunc);

export default ContactForm;