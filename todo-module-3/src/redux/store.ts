import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../redux/features/todoSlice'
import authReducer from '../redux/features/auth/authSlice'
import { baseApi } from './api/api'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]:baseApi.reducer,
    todos:todoReducer,
    auth:authReducer
  },
  middleware:(getDefaultMiddlewares)=>getDefaultMiddlewares().concat(baseApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch