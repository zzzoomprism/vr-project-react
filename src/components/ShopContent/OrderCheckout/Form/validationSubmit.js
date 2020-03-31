import {SubmissionError} from "redux-form";

const submit = ({firstName, lastName, email, number, city, address}) => {
    let error = {};
    let isError = false;
    if(!firstName || firstName.trim() === ''){
        error.firstName = 'Please enter your name!';
        isError = true;
    }

    if(!lastName || lastName.trim() === ''){
        error.lastName = "Please enter your last name!";
        isError = true;
    }

    if(!email || email.trim() === ''){
        error.email = "This field is required.";
        isError = true;
    }
    if(!number || number.trim() === ''){
        error.number = "This field is required.";
        isError = true;
    }

    if(!city || city.trim()===''){
        error.city = "Choose your city please";
        isError = true;
    }

    if(!address || address.trim() === ''){
        error.address = "This field is required";
        isError = true;
    }

    if(isError)
        throw new SubmissionError(error);
    else
        console.log({firstName, lastName, email, city, address, number});
};

export default submit;