import * as yup from "yup";

const REQUIRED = 'This Field is Mandatory';

export const editSchema = yup.object().shape({
    id: yup.string().required(REQUIRED),
    name: yup.string().required(REQUIRED),
    email: yup.string().required(REQUIRED),
    password: yup.string().required(REQUIRED),
    phone:yup.string().required(REQUIRED),
    gender:yup.string().required(REQUIRED),
    address:yup.string().required(REQUIRED),
    city: yup.string().required(REQUIRED),
});

