import { configureStore } from "@reduxjs/toolkit";
import useSlice from "./CreateSlice"


export default configureStore({
    reducer:{
        user:useSlice
    }

})

