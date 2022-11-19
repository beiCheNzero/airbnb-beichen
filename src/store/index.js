import { configureStore } from "@reduxjs/toolkit";
import mainSlice from './modules/main'
import homeReducer from './modules/home'
import entireReducer from './modules/entire'
import defailReducer from './modules/detail'

const store = configureStore({
  reducer: {
    main: mainSlice,
    home: homeReducer,
    entire: entireReducer,
    detail: defailReducer
  }
})

export default store