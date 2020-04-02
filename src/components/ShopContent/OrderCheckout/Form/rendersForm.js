import React from "react";

export const renderField = ({label, input, type, id,  meta: {touched, error }}) => (
    <div className={"form-group"}>
        <label htmlFor={id}>{label}{(type === "radio") && <span className={"radioBtn"}></span>}</label>
        <input {...input} className={(error && touched) ? "input-error" : "form-input"} placeholder={error} type={type}/>
    </div>
);

export const renderRadioField = ({label, input, id, meta: {touched, error}}) => (
    <div className="form-group">
        <div className={"radio-btn-position"}>
            <input {...input} id={id} type="radio"/>
            <span className="radioBtn"><label className="radio-btn-checked" htmlFor={id}>{label}</label><span></span></span>
        </div>
    </div>
);

export const renderTextAreaField = ({label, textarea, meta: {touched, error}}) => (
    <div className={"form-group"}>
        <label>{label}</label>
        <textarea {...textarea}/>
    </div>
);

export const renderSelectAreaField = ({label, input, children, meta: {touched, error}}) => (
    <div className={"form-group"}>
        <label>{label}</label>
        <select {...input} className={(error && touched) ? "form-error" : "form-default"} >
            {children}
        </select>
    </div>
);
