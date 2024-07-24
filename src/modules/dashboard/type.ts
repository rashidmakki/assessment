import { IRegistrationData } from "../registration/types";

export interface IInitialData {
  users: Array<IRegistrationData>
}


export interface IEditModal{
    show: boolean;
    userDetails:IUserData;
    handleClose: ()=> void;
    setUserDetails:any;
}

export interface IUserData{
    id:string;
    name: string;
    email: string;
    password: string;
    phone:string;
    gender:string;
    address:string;
    city: string;
}