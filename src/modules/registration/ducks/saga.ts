import { put, takeEvery, call , takeLatest, all,fork} from 'redux-saga/effects';
import * as APIs from '@/apis/index';
import Router from 'next/router';


function* signUp(action: any){
    try{
    // const response = yield call(APIs.creatorSignup, action.payload);
    if(localStorage.getItem("user_data")){
        let storedData = localStorage.getItem("user_data");
        let storedArray = JSON.parse(storedData as string);
        storedArray.push(action.payload);
        localStorage.setItem("user_data", JSON.stringify(storedArray))
    }else{
        let data = [];
        data.push(action.payload);
        localStorage.setItem("user_data", JSON.stringify(data))
    }
    Router.push("/dashboard")
    }catch(err:any){
      console.log(err.message)
    }
}

function* callToSignUpProcess(){
    yield takeEvery('signin/callToSignup', signUp)
}

function* loginSaga(){
    yield all([
    fork(callToSignUpProcess)    
    ]);
}

export default loginSaga;