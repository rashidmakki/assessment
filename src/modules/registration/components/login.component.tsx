import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Button, FormInput, FormItem, FormLabel, FormOption, FormSelect } from '../resgistration.styled'
import Select, { SelectInstance } from 'react-select';
import { IRegistrationData } from '../types';
import { useDispatch } from 'react-redux';
import { callToSignup } from '../ducks/slice';
import '@/styles/Home.module.css';

function LoginForm() {
     // Create references for each input field
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);
    const input5Ref = useRef(null);
    const input6Ref = useRef(null);
    const input7Ref = useRef(null);
    const input8Ref = useRef(null);

    const inputRefs = useRef<(HTMLInputElement | HTMLSelectElement | any | null)[]>([]);

    
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
    
    useEffect(() => {
        inputRefs.current = Array(8)
          .fill(null)
          .map((_, i) => inputRefs.current[i] || React.createRef<HTMLInputElement>().current || React.createRef<HTMLSelectElement>().current || React.createRef<any>().current);
      }, []);
    const { name, email, password, phone, gender, address, city, state} = registerData;
  return (
    <form onSubmit={onSubmitHandler}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "3rem"}}>
            <FormItem className='full-width'>
                <FormLabel htmlFor="name"> Name </FormLabel>
                <FormInput  id="name" name="name" value={name} onChange={handleInputOnChange}  ref={(el) => {inputRefs.current[0] = el}}
                 onKeyDown={(event) => handleKeyDown(event, 0)}/>                
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="email"> Email </FormLabel>
                <FormInput type="email" id='email' name="email" value={email} onChange={handleInputOnChange} 
                 ref={(el) => {inputRefs.current[1] = el}}
                 onKeyDown={(event) => handleKeyDown(event, 1)}
                />
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="password"> Password </FormLabel>
                <FormInput type="password" id='password' name="password" value={password} onChange={handleInputOnChange} ref={(el) => {inputRefs.current[2] = el}}
                 onKeyDown={(event) => handleKeyDown(event, 2)}/>
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="phone"> Phone Number </FormLabel>
                <FormInput type="phone" id='phone' name="phone" value={phone} onChange={handleInputOnChange}   ref={(el) => {inputRefs.current[3] = el}}
                 onKeyDown={(event) => handleKeyDown(event, 3)} />
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="gender"> Gender </FormLabel>
                <FormSelect id="gender" name="gender" className='dropdown' value={gender} onChange={(e:ChangeEvent<HTMLSelectElement>)=>{ setRegisterData({...registerData, [e.target.name]: e.target.value})}} ref={(el) => {inputRefs.current[4] = el}}
                 onKeyDown={(event) => handleKeyDown(event, 4)}>
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
                <FormInput type="address" id='address' name="address" value={address} onChange={handleInputOnChange} ref={(el) => {inputRefs.current[5] = el}}
                 onKeyDown={(event) => handleKeyDown(event, 5)}/>
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="city"> City </FormLabel>
                <FormInput type="city" id='city' name="city" value={city} onChange={handleInputOnChange} ref={(el) => {inputRefs.current[6] = el}}
                 onKeyDown={(event) => handleKeyDown(event, 6)}/>
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
                ref={(el) => {inputRefs.current[7] = el}}
                onKeyDown={(event) => handleKeyDown(event, 7)}
                />
            </FormItem>
        </div>
        <Button type='submit' className='primary full-width'> Register </Button>
    </form>
  )
}

export default LoginForm;