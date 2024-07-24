import React, { ChangeEvent, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../ducks/selector';
import { IRegistrationData } from '@/modules/registration/types';
import { deleteUser, getUsersDetail } from '../ducks/slice';
import { Button, Icon } from '../dashboard.styled';
import EditModal from './edit.modal.component';
import { IUserData } from '../type';

function UserTable() {
  const users = useSelector(getUsers);
  const [userDetails, setUserDetails] = useState<IUserData>(  {
    id: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    address: '',
    city: '',
  });
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (user:IUserData) => {
    setUserDetails(user)
    handleShow()
  }

  useEffect(()=>{
   dispatch(getUsersDetail())
  },[])

  return (
    <>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email </th>
        <th>Phone</th>
        <th>Gender</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Action </th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user:IRegistrationData , idx:number) => (
                <tr key={idx}>
                <td> {idx + 1} </td>
                <td> {user.name}</td>
                <td> {user.email}</td>
                <td> {user.phone}</td>
                <td> {user.gender}</td>
                <td> {user.address}</td>
                <td> {user.city}</td>
                <td> {user.state}</td>
                <td className='d-flex justify-content-center gap-2'>
                    <Button onClick={()=>handleEdit({...user,id:String(idx)})} style={{backgroundColor:'#466DCD'}}> 
                      <Icon  src='/images/edit.svg'  alt='This is edit icon' />
                    </Button>
                    <Button style={{backgroundColor:'#A20D0D'}} onClick={()=>dispatch(deleteUser({idx}))}> 
                      <Icon src='/images/delete.svg'  alt='This is delete icon' />
                    </Button>
                </td>
              </tr>
            ))
        }
    </tbody>
  </Table>
  <EditModal show={show} userDetails={userDetails} handleClose={handleClose} setUserDetails={setUserDetails}/>
</>
  )
}

export default UserTable;
