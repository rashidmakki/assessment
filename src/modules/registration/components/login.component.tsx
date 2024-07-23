import React, { ChangeEvent, useState } from 'react'
import { Button, FormInput, FormItem, FormLabel, FormOption, FormSelect } from '../resgistration.styled'
import Select from 'react-select';
import { IRegistrationData } from '../types';
import { useDispatch } from 'react-redux';
import { callToSignup } from '../ducks/slice';
import '@/styles/Home.module.css';

function LoginForm() {
    const dispatch = useDispatch();
    const [registerData, setRegisterData] = useState<IRegistrationData>({
        name:'',
        email:'',
        password:'',
        phone:'',
        gender:'',
        address:'',
        city:'',
        state:null
    })
    const optionsArray = [
        { value: 'Arunchal Pradesh', label: 'Arunchal Pradesh' },
        { value: 'Andra Pradesh', label: 'Andhra Pradesh' },
        { value: 'Bihar', label: 'Bihar' },
        { value: 'Chattisgarh', label: 'Chattisgarh' },
        { value: 'Gujrat', label: 'Gujrat' },
        { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
        { value: 'West Bengal', label: 'West Bengal' },
        { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
        { value: 'Maharastra', label: 'Maharastra' },
        { value: 'Kerala', label: 'Kerala' },

    ];
    const genderArray = [
        { value:'male', label:"Male"},
        { value:'female', label:"Female"},
        { value: 'other', label:"Other"}
    ]

    const handleSelectOnChange = (option:any) => {
        setRegisterData({...registerData, state: option})
    }

    const handleInputOnChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setRegisterData({...registerData, [name]:value})
    }
   
    const onSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(callToSignup(registerData))
    }
    const { name, email, password, phone, gender, address, city, state} = registerData;
  return (
    <form onSubmit={onSubmitHandler}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "3rem"}}>
            <FormItem className='full-width'>
                <FormLabel htmlFor="name"> Name </FormLabel>
                <FormInput  id="name" name="name" value={name} onChange={handleInputOnChange}/>                </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="email"> Email </FormLabel>
                <FormInput type="email" id='email' name="email" value={email} onChange={handleInputOnChange} />
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="password"> Password </FormLabel>
                <FormInput type="password" id='password' name="password" value={password} onChange={handleInputOnChange}/>
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="phone"> Phone Number </FormLabel>
                <FormInput type="phone" id='phone' name="phone" value={phone} onChange={handleInputOnChange}  />
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="gender"> Gender </FormLabel>
                <FormSelect id="gender" name="gender" className='dropdown' value={gender} onChange={(e:ChangeEvent<HTMLSelectElement>)=>{ setRegisterData({...registerData, [e.target.name]: e.target.value})}}>
                    {
                        genderArray.map((item,idx)=>(
                        <FormOption key={idx} value={item.value}>
                            {item.label}
                        </FormOption>
                        ))
                    }
                </FormSelect>
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="address"> Address </FormLabel>
                <FormInput type="address" id='address' name="address" value={address} onChange={handleInputOnChange}/>
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="city"> City </FormLabel>
                <FormInput type="city" id='city' name="city" value={city} onChange={handleInputOnChange} />
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="state"> State </FormLabel>
                <Select
                id="state"
                name="state"
                className='search-dropdown'
                value={state}
                placeholder="Select State"
                onChange={handleSelectOnChange}
                options={optionsArray}
                />
            </FormItem>
        </div>
        <Button type='submit' className='primary full-width'> Register </Button>
    </form>
  )
}

export default LoginForm;