import {createSlice} from "@reduxjs/toolkit";
import CalculatorUtils from "./calculatorUtils";

const calc: CalculatorUtils = new CalculatorUtils()

interface ICalculatorSliceState {
    displayValue: string,
    currentOperator: string,
    bufferValue: number,
    startNext: boolean,
    previousOperator: string,
}

const initialState: ICalculatorSliceState = {
    displayValue: "0",
    currentOperator: "",
    bufferValue: 0,
    startNext: true,
    previousOperator: ""
}

export const slice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        updateDisplay: (state, action) => {
            // We need to handle decimals separately
            if (action.payload === ".") {
                if (state.displayValue.includes(".")) {
                    return
                }
            }

            if (state.startNext) {
                state.displayValue = action.payload.toString()
                state.startNext = false

            //To limit screen digits to 10. Integers are only reliable up to 15 degits in JS
            } else if (!(state.displayValue.length >= 15)) {
                state.displayValue = state.displayValue === "0" ? action.payload.toString() :
                    state.displayValue.concat(action.payload)
            }
        },

        updateOperation: (state:ICalculatorSliceState, action) => {
            state.previousOperator = state.currentOperator
            state.currentOperator = action.payload === "=" ? "" : action.payload

            if (state.previousOperator !== "") {
                const op1 = state.bufferValue
                const op2 = parseFloat(state.displayValue)
                const operator = state.previousOperator
                const result = calc.handleOperation(operator, op1, op2)
                // Put the result on the screen and reset stack
                state.displayValue = result.toString()
                state.bufferValue = result
                state.previousOperator = state.currentOperator
            } else {
                state.bufferValue = parseFloat(state.displayValue)
            }
            state.startNext = true

        },
        modifyDisplay: (state:ICalculatorSliceState, action) => {
            switch (action.payload) {
                case "C":
                    state.displayValue = "0"
                    break;
                case "CE":
                    state.displayValue = "0"
                    state.bufferValue = 0
                    state.currentOperator = ""
                    break;
                case "\uFE6A":
                    state.displayValue = calc.truncateNumber((parseFloat(state.displayValue) / 100), 10).toString()
                    break;
            }
        }
    }
})

export const {updateDisplay, updateOperation, modifyDisplay} = slice.actions
export const selectDisplayValue = (state: any) => state.calculator.displayValue
export const selectCurrentOperator = (state: any) => state.calculator.currentOperator
export const selectBufferValue = (state: any) => state.calculator.bufferValue
export default slice.reducer