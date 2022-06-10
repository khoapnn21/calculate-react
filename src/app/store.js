import { configureStore } from '@reduxjs/toolkit'

import calculatorReducer from '../feature/calculator/calculatorSlice'


export default configureStore({
  reducer: {
    
    calc: calculatorReducer,
  }
})