import dashboardSaga from '@/modules/dashboard/ducks/saga';
import loginSaga from '@/modules/registration/ducks/saga';
import { all, fork } from 'redux-saga/effects';

function* rootSaga(){
    yield all([
       fork(loginSaga),
       fork(dashboardSaga)
    ]);
}

export default rootSaga;