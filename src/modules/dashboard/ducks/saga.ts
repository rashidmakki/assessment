import { put, takeEvery, call , takeLatest, all,fork} from 'redux-saga/effects';
import { setUsersDetail } from './slice';
import { IRegistrationData } from '@/modules/registration/types';


function* getUsersDetails(action: any){
    try{
    if(localStorage.getItem("user_data")){
        let storedData = localStorage.getItem("user_data");
        let storedArray = JSON.parse(storedData as string);
        yield put(setUsersDetail(storedArray))
    }
    }catch(err:any){
      console.log(err.message)
    }
}

function* deleteUserDetail(action: any){
    try{
    if(localStorage.getItem("user_data")){
        let storedData = localStorage.getItem("user_data");
        let storedArray = JSON.parse(storedData as string);
        let filteredArray = storedArray.filter((user:IRegistrationData,idx:number)=> idx !== action.payload.idx)
        localStorage.setItem("user_data", JSON.stringify(filteredArray))
        yield put(setUsersDetail(filteredArray))
    }
    }catch(err:any){
      console.log(err.message)
    }
}
function* updateUserDetail(action: any){
    try{
    if(localStorage.getItem("user_data")){
        let storedData = localStorage.getItem("user_data");
        let storedArray = JSON.parse(storedData as string);
        storedArray[action.payload.user.id] = action.payload.user;
        localStorage.setItem("user_data", JSON.stringify(storedArray))
        yield put(setUsersDetail(storedArray))
    }
    }catch(err:any){
      console.log(err.message)
    }
}

function* callToUsersDetail(){
    yield takeEvery('dashboard/getUsersDetail', getUsersDetails)
}

function* callToDeleteUser(){
    yield takeEvery('dashboard/deleteUser', deleteUserDetail)
}
function* callToUpdateUser(){
    yield takeEvery('dashboard/updateUser', updateUserDetail)
}

function* dashboardSaga(){
    yield all([
    fork(callToUsersDetail),
    fork(callToDeleteUser),
    fork(callToUpdateUser) 
    ]);
}

export default dashboardSaga;