import { configureStore } from "@reduxjs/toolkit";
import captReducer  from "./features/capth";
export const store=configureStore({

reducer:{
capt:captReducer,

}

})