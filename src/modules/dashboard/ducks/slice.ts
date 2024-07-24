import { IRegistrationData } from '@/modules/registration/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IInitialData, IUserData } from '../type';


const initialState: IInitialData = {
  users:[]
}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
      getUsersDetail:(state) => {},
      setUsersDetail:(state, action: PayloadAction<Array<IRegistrationData>>) => {
        state.users = action.payload
      },
      deleteUser:(state, action: PayloadAction< { idx:number}>) => {},
      updateUser:(state, action: PayloadAction< { user:IUserData}>) => {},
    }
})
  
export const {
 getUsersDetail,
 setUsersDetail,
 deleteUser,
 updateUser
} = dashboardSlice.actions
  
export default dashboardSlice.reducer;