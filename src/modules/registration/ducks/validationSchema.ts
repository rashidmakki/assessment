import * as yup from "yup";

const REQUIRED = 'This Field is Mandatory';

export const registrationSchema = yup.object().shape({
    name: yup.string().required(REQUIRED),
    email: yup.string().required(REQUIRED),
    password: yup.string().required(REQUIRED),
    phone:yup.string().required(REQUIRED),
    gender:yup.string().required(REQUIRED),
    address:yup.string().required(REQUIRED),
    city: yup.string().required(REQUIRED),
    state: yup.string().required(REQUIRED)
    // state: yup.object().shape({
    //     value:yup.string().required(REQUIRED),
    //     label:yup.string().required(REQUIRED)
    // })
});

