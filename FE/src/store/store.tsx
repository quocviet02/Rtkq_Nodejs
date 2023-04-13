import { configureStore, ThunkAction,Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import product from "../slice/product";
import { productAPI } from "../services/product";
export const store = configureStore({
    reducer:{
        // product:product 
        [productAPI.reducerPath]:productAPI.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productAPI.middleware)

})
console.log(store)
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;