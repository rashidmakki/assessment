import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRegistrationData } from '../types';


const initialState: any = {

}

export const signInSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {
      callToSignup:(state, action: PayloadAction<IRegistrationData>) => {},
    }
})
  
export const {
 callToSignup
} = signInSlice.actions
  
export default signInSlice.reducer;