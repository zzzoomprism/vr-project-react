import React from "react";
import {Field, reduxForm, SubmissionError} from "redux-form";
import submit from "./validationSubmit";
import {renderField, renderRadioField, renderSelectAreaField, renderTextAreaField} from "./rendersForm";


const ContactFormFunc = (props) => {
    const handleSubmit = props.handleSubmit;
    return  <form onSubmit={handleSubmit(submit)} >
        <div className={"form-section-col2"}>
            <div>
                <div className={"form-row"}>
                    <Field name={"firstName"} label={"First Name" }  component={renderField} type={"text"} />
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


            <div className={"frame"}>
                <p>Would you like to deliver?</p>
                <div className={"form-row"}>
                    <Field name={"deliver"} label={"Yes" } value={"yes"} id="radioBtn1" component={renderRadioField} type={"radio"} onChange={()=>{ props.updateDeliver(true)}}/>
                    <Field name={"deliver"} label={"No" } value={"no"} id="radioBtn2" component={renderRadioField} type={"radio"} onChange={()=>{ props.updateDeliver(false)}}/>
                    <span>{props.deliver && "+20$" }</span>
                </div>
                <p>Would you like up to the floor? </p>
                <div className={"form-row"}>
                    <Field name={"uptothefloor"} label={"Yes" } value={"yes"} id="uptothefloor1" component={renderRadioField} type={"radio"} onChange={()=>{ props.updateServiceUpToFloor(true)}}/>
                    <Field name={"uptothefloor"} label={"No" } value={"no"} id="uptothefloor2" component={renderRadioField} type={"radio"} onChange={()=>{ props.updateServiceUpToFloor(false)}}/>
                    <span>+20$</span>
                </div>
                <p>Would you like to use the furniture assembly service? </p>
                <div className={"form-row"}>
                    <Field name={"assemblyservice"} label={"Yes" } value={"yes"} id="assemblyservice1" component={renderRadioField} type={"radio"} onChange={()=>{ props.updateServiceFurnitureAss(true)}}/>
                    <Field name={"assemblyservice"} label={"No" } value={"no"} id="assemblyservice2" component={renderRadioField} type={"radio"} onChange={()=>{ props.updateServiceFurnitureAss(false)}}/>
                    <span>+20$</span>
                </div>
            </div>
        </div>
        <button type={"submit"}>OK!</button>
    </form>
};


const ContactForm = reduxForm({
    form: "contact"
})(ContactFormFunc);

export default ContactForm;