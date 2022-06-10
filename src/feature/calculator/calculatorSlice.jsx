import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: '',
}

export const calculatorSlice =  createSlice ({
    name: 'calculator',
    initialState,
    reducers: {
        calcButton: (state,action) => {
            return {
                ...state,
                number: state.number.concat(action.payload)
            }
        },
        calcResult: (state) => {
            const newState = eval(state.number).toString()
            
            return {
                ...state,
                number: newState
            }
        },
        calcBackSpace: (state) => {
            return {
                ...state,
                number: state.number.slice(0,-1)
            }
        },
        calcClear: (state) => {
            return {
                ...state,
                number: '',
            }
        },
        calcPercent: (state) => {
            return{
                ...state,
                number: state.number / 100
            }
        },
        calcMinusPlus: (state,action) => {
            
            return{
                ...state,
                number: (-action.payload).toString()
            }
        },
        calcAddToMemo: (state,action) => {
            
            return{
                ...state,
                memory: Number(state.number + action.payload)
            }
        },
    }
})

export const {calcButton, calcResult, calcBackSpace, calcClear, calcPercent, calcMinusPlus } = calculatorSlice.actions

export default calculatorSlice.reducer
