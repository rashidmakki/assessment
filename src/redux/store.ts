import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import signInSlice from '@/modules/registration/ducks/slice';


const saga = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    signIn: signInSlice,
  },
  middleware: (gDM) => gDM().concat(saga)
});

saga.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default saga;