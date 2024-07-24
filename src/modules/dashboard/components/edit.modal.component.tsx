import React, { ChangeEvent, useEffect, useRef } from 'react'
import { Button, FormLabel, FormSelect, Modal } from 'react-bootstrap';
import { IEditModal, IUserData } from '../type';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { editSchema } from '../ducks/validationSchema';
import { IItem } from '@/modules/registration/types';
import { FormError, FormInput, FormItem, FormOption } from '@/modules/registration/resgistration.styled';
import { genderArray, states } from '@/common/constants';
import { updateUser } from '../ducks/slice';

function EditModal({show,handleClose, userDetails}:IEditModal) {
    const inputRefs = useRef<(HTMLInputElement | HTMLSelectElement | any | null)[]>([]);
    const dispatch = useDispatch();
    const { register, handleSubmit ,formState: { errors, isSubmitSuccessful },control, reset,setValue, getValues,watch } = useForm({
        values: userDetails, 
        resolver: yupResolver(editSchema),
    })
    
    const id = watch('id')
    const name = watch('name')
    const email = watch('email')
    const password = watch('password')
    const phone = watch('phone')
    const address = watch('address')
    const gender = watch('gender')
    const city = watch('city')
    
    const onSubmitHandler = (formData:IUserData) => {
       dispatch(updateUser({user:formData}))
       handleClose()
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
        createRefs(9);
    }, []);

    useEffect(() => {
        watch(el=> console.log(el))
    }, [watch]);

  return (
    <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
     >
    <Modal.Header closeButton>
      <Modal.Title>Edit User</Modal.Title>
    </Modal.Header>
    <form onSubmit={handleSubmit(onSubmitHandler)} id="update-user">
    <Modal.Body>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "3rem"}}>
            <FormItem className='full-width'>
                <FormLabel htmlFor="id"> Id </FormLabel>
                <FormInput  
                id="id" 
                value={id}
                className={errors.id?.message && "error"}
                onKeyDown={(event) => handleKeyDown(event, 0)} 
                ref={(el) => {inputRefs.current[0] = el}}
                onChange={(e:ChangeEvent<HTMLInputElement>)=> setValue("id", e.target.value)}
                />       
                {
                    errors.name?.message && <FormError>{errors.name?.message}</FormError>
                }          
            </FormItem>
            
            <FormItem className='full-width'>
                <FormLabel htmlFor="name"> Name </FormLabel>
                <FormInput  
                id="name" 
                value={name}
                className={errors.name?.message && "error"}
                onKeyDown={(event) => handleKeyDown(event, 1)} 
                ref={(el) => {inputRefs.current[1] = el}}
                onChange={(e:ChangeEvent<HTMLInputElement>)=> setValue("name", e.target.value)}
                />       
                {
                    errors.name?.message && <FormError>{errors.name?.message}</FormError>
                }          
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="email"> Email </FormLabel>
                <FormInput type="email" id='email' name="email"
                 value={email}
                 className={errors.email?.message && "error"}
                 ref={(el) => {inputRefs.current[2] = el}}
                 onKeyDown={(event) => handleKeyDown(event, 2)}
                 onChange={(e:ChangeEvent<HTMLInputElement>)=> setValue("email", e.target.value)}
                />
                {
                    errors.email?.message && <FormError>{errors.email?.message}</FormError>
                } 
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="password"> Password </FormLabel>
                <FormInput type="password" id='password' name="password" ref={(el) => {inputRefs.current[3] = el}}
                 value={password}
                 className={errors.password?.message && "error"}
                 onKeyDown={(event) => handleKeyDown(event, 3)}
                 onChange={(e:ChangeEvent<HTMLInputElement>)=> setValue("password", e.target.value)}
                />
                {
                    errors.password?.message && <FormError>{errors.password?.message}</FormError>
                } 
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="phone"> Phone Number </FormLabel>
                <FormInput type="phone" id='phone' name="phone" ref={(el) => {inputRefs.current[4] = el}}
                 value={phone}
                 className={errors.phone?.message && "error"}
                 onKeyDown={(event) => handleKeyDown(event, 4)}
                 onChange={(e:ChangeEvent<HTMLInputElement>)=> setValue("phone", e.target.value)}
                />
                {
                    errors.phone?.message && <FormError>{errors.phone?.message}</FormError>
                } 
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="gender"> Gender </FormLabel>
                <FormSelect id="gender" name="gender" value={gender} className={errors.gender?.message && 'error' || 'dropdown'} onChange={(e:ChangeEvent<HTMLSelectElement>)=> setValue("gender", e.target.value)}
                 ref={(el:any) => {inputRefs.current[5] = el}}
                 onKeyDown={(event) => handleKeyDown(event, 5)}>
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
                <FormInput type="address"  value={address} id='address' name="address" ref={(el) => {inputRefs.current[6] = el}}
                 className={errors.address?.message && "error"}
                 onKeyDown={(event) => handleKeyDown(event, 6)}
                 onChange={(e:ChangeEvent<HTMLInputElement>)=> setValue("address", e.target.value)}
                 />
                {
                    errors.address?.message && <FormError>{errors.address?.message}</FormError>
                }
            </FormItem>
            <FormItem className='full-width'>
                <FormLabel htmlFor="city"> City </FormLabel>
                <FormInput type="city" id='city' value={city} name="city" 
                 className={errors.city?.message && "error"}
                 onChange={(e:ChangeEvent<HTMLInputElement>)=> setValue("city", e.target.value)}
                 ref={(el) => {inputRefs.current[7] = el}}
                 onKeyDown={(event) => handleKeyDown(event, 7)}/>
                {
                    errors.city?.message && <FormError>{errors.city?.message}</FormError>
                }
            </FormItem>
        </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary"  onClick={handleClose}>
        Close
      </Button>
      <Button type='submit'> Edit User</Button>
    </Modal.Footer>
    </form>
  </Modal>
  )
}

export default EditModal;