import { put, takeEvery, call , takeLatest, all,fork} from 'redux-saga/effects';
import * as APIs from '@/apis/index';
import Router from 'next/router';


function* signUp(action: any){
    try{
    // const response = yield call(APIs.creatorSignup, action.payload);
    localStorage.setItem("user_data", JSON.stringify(action.payload))
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