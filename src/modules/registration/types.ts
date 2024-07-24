export interface IRegistrationData{
    id?:string
    name: string;
    email: string;
    password: string;
    phone:string;
    gender:string;
    address:string;
    city: string;
    state:string 
}

export interface IItem{
    value:string;
    label:string;
}