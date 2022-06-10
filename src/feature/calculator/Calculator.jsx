import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {calcButton, calcResult, calcBackSpace, calcClear, calcPercent, calcMinusPlus } from './calculatorSlice'
import './calculator.css'

const Calculator = () => {
    const number = useSelector(state => state.calc.number)    
    console.log(number)
    const dispatch = useDispatch()
    const ops = ['+', '-', '*', '/', '.']

    
    const handleOpsDuplicate = (value) => {
        if( 
            (ops.includes(value ) && number ==='') ||
            (ops.includes(value) && ops.includes(number.slice(-1)))
        ) {return}
        dispatch(calcButton(value))
    }
    const handleButton = (value) => {
        if(value === '0' && number ===''){
            return number.slice(1)
        }
        dispatch(calcButton(value))
    }

    return (
        <>
        <div className="container col-6" style={{backgroundColor: '#333', color: 'white', borderRadius: '10px'}}>
            <div className="row calcDisplay">
                    
                {number || '0' }              
            </div>

            
            <div className="row">
                <div className="col" onClick={() => {
                    dispatch(calcClear())
                }}>
                AC
                </div>
                <div className="col" onClick={() => {
                    dispatch(calcBackSpace())
                }}>
                Del
                </div>
                <div className="col" onClick={() => {
                    dispatch(calcButton('(')) 
                   
                }}>
                (
                </div>
                <div className="col" onClick={() => {
                    dispatch(calcButton(')'))
                   
                }}>
                )
                </div>
                <div className='col' onClick={() => {
                    dispatch(calcMinusPlus(number))

                }}>
                +/_
                </div>
                <div className='col' onClick={() => {
                   dispatch(calcPercent())
                }}>
                %
                </div>
                
            </div>
            <div className="row">
                <div className="col" onClick={() => {
                    handleButton('7')
                }}>
                7
                </div>
                <div className="col" onClick={() => {
                    handleButton('8')
                   
                }}>
                8
                </div>
                <div className="col" onClick={() => {
                    handleButton('9')
                   
                }}>
                9
                </div>
                <div className="col" onClick={() => {
                    handleOpsDuplicate('+')

                }}>
                +
                </div>
            </div>
            <div className="row">
                <div className="col" onClick={() => {
                    handleButton('4')
                   
                }}>
                4
                </div>
                <div className="col" onClick={() => {
                    handleButton('5')
                   
                }}>
                5
                </div>
                <div className="col" onClick={() => {
                    handleButton('6')
                   
                }}>
                6
                </div>
                <div className="col" onClick={() => {
                    handleOpsDuplicate('-')
                }}>
                -
                </div>
            </div>
            <div className="row">
            <div className="col" onClick={() => {
                    handleButton('1')
                   
                }}>
                1
                </div>
                <div className="col" onClick={() => {
                    handleButton('2')
                   
                }}>
                2
                </div>
                <div className="col" onClick={() => {
                    handleButton('3')
                   
                }}>
                3
                </div>
                <div className="col" onClick={() => {
                    handleOpsDuplicate('*')


                }}>
                *
                </div>
            </div>
            <div className="row">
                <div className="col" onClick={() => {
                    handleButton('0')
                }}>
                0
                </div>
                <div className="col" onClick={() => {
                    handleOpsDuplicate('.')
    
                }}>
                .
                </div>
                <div className="col" onClick={() => {
                    dispatch(calcResult())
                }}>
                =
                </div>
                <div className="col" onClick={() => {
                    handleOpsDuplicate('/')
                }}>
                /
                </div>
            </div>
            
        </div>
        </> 

    )
}

export default Calculator