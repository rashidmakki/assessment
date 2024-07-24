import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Button, FormError, FormInput, FormItem, FormLabel, FormOption, FormSelect } from '../resgistration.styled'
import Select from 'react-select';
import { IItem, IRegistrationData } from '../types';
import { useDispatch } from 'react-redux';
import { callToSignup } from '../ducks/slice';
import { states, genderArray } from '@/common/constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from '../ducks/validationSchema';
import '@/styles/Home.module.css';

const registerData:IRegistrationData = {
    name:'',
    email:'',
    password:'',
    phone:'',
    gender:'',
    address:'',
    city:'',
    state:''
};

function LoginForm() {
    const inputRefs = useRef<(HTMLInputElement | HTMLSelectElement | any | null)[]>([]);
    const dispatch = useDispatch();
   
    const { register, handleSubmit ,formState: { errors, isSubmitSuccessful },control, reset,setValue, getValues,watch } = useForm({
        defaultValues: registerData, 
        resolver: yupResolver(registrationSchema),
    })

    const onSubmitHandler = (formData:IRegistrationData) => {
        dispatch(callToSignup(formData))
    }

     // Handle key down event
    const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement | HTMLSelectElement | any>, index:number) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action (form submission)
            const nextIndex = index + 1;
            if (nextIndex < inputRefs.current.length && inputRefs.current[nextIndex]) {
              inputRefs.current[nextIndex]!.focus(); // Focus the next field
            }
          }
    };

    const createRefs = (refsNumber:number)=>{
        inputRefs.current = Array(refsNumber)
        .fill(null)
        .map((_, i) => inputRefs.current[i] || React.createRef<HTMLInputElement>().current || React.createRef<HTMLSelectElement>().current || React.createRef<any>().current);
    }
    
    useEffect(() => {
        createRefs(8);
        watch(el=> console.log(el))
    }, []);

    return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "3rem"}}>
            <FormItem className='full-width'>
                <FormLabel htmlFor="name"> Name </FormLabel>
                <FormInput  
                id="name" 
                name="name"
                className={errors.name?.message && "error"}
                onKeyDown={(event) => handleKeyDown(event, 0)} 
                ref={(el) => {inputRefs.current[0] = el}}
                onChange={(e:ChangeEvent<HTMLInputElement>)=> setValue("name", e.target.value)}
                />       
                {
                    errors.name?.message && <FormError>{errors.name?.message}</FormError>
                }          
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="email"> Email </FormLabel>
                <FormInput type="email" id='email' name="email"
                 className={errors.email?.message && "error"}
                 ref={(el) => {inputRefs.current[1] = el}}
                 onKeyDown={(event) => handleKeyDown(event, 1)}
                 onChange={(e:ChangeEvent<HTMLInputElement>)=> setValue("email", e.target.value)}
                />
                {
                    errors.email?.message && <FormError>{errors.email?.message}</FormError>
                } 
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="password"> Password </FormLabel>
                <FormInput type="password" id='password' name="password" ref={(el) => {inputRefs.current[2] = el}}
                 className={errors.password?.message && "error"}
                 onKeyDown={(event) => handleKeyDown(event, 2)}
                 onChange={(e:ChangeEvent<HTMLInputElement>)=> setValue("password", e.target.value)}
                />
                {
                    errors.password?.message && <FormError>{errors.password?.message}</FormError>
                } 
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="phone"> Phone Number </FormLabel>
                <FormInput type="phone" id='phone' name="phone" ref={(el) => {inputRefs.current[3] = el}}
                 className={errors.phone?.message && "error"}
                 onKeyDown={(event) => handleKeyDown(event, 3)}
                 onChange={(e:ChangeEvent<HTMLInputElement>)=> setValue("phone", e.target.value)}
                />
                {
                    errors.phone?.message && <FormError>{errors.phone?.message}</FormError>
                } 
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="gender"> Gender </FormLabel>
                <FormSelect id="gender" name="gender" className={errors.gender?.message && 'error' || 'dropdown'} onChange={(e:ChangeEvent<HTMLSelectElement>)=> setValue("gender", e.target.value)}
                 ref={(el) => {inputRefs.current[4] = el}}
                 onKeyDown={(event) => handleKeyDown(event, 4)}>
                    {
                        genderArray.map((item:IItem,idx:number)=>(
                        <FormOption key={idx} value={item.value}>
                            {item.label}
                        </FormOption>
                        ))
                    }
                </FormSelect>
                {
                    errors.gender?.message && <FormError>{errors.gender?.message}</FormError>
                } 
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="address"> Address </FormLabel>
                <FormInput type="address" id='address' name="address" ref={(el) => {inputRefs.current[5] = el}}
                 className={errors.address?.message && "error"}
                 onKeyDown={(event) => handleKeyDown(event, 5)}
                 onChange={(e:ChangeEvent<HTMLInputElement>)=> setValue("address", e.target.value)}
                 />
                {
                    errors.address?.message && <FormError>{errors.address?.message}</FormError>
                }
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="city"> City </FormLabel>
                <FormInput type="city" id='city' name="city" 
                 className={errors.city?.message && "error"}
                 onChange={(e:ChangeEvent<HTMLInputElement>)=> setValue("city", e.target.value)}
                 ref={(el) => {inputRefs.current[6] = el}}
                 onKeyDown={(event) => handleKeyDown(event, 6)}/>
                {
                    errors.city?.message && <FormError>{errors.city?.message}</FormError>
                }
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="state"> State </FormLabel>
                <Select
                id="state"
                name="state"
                className={errors.state?.message && 'error' || 'search-dropdown'}
                placeholder="Select State"
                onChange={(option:any)=> setValue("state",option.value)}
                options={states}
                ref={(el:any) => {inputRefs.current[7] = el}}
                onKeyDown={(event) => handleKeyDown(event, 7)}
                />
                {
                    errors.state?.message && <FormError>{errors.state?.message}</FormError>
                }
            </FormItem>
        </div>
        <Button type='submit' className='primary full-width'> Register </Button>
    </form>
  )
}

export default LoginForm;