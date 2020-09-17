import * as React from "react";
import {useSelector} from "react-redux";
import {selectDisplayValue, selectBufferValue} from "../app/calculatorSlice"

const CalculatorScreen = () => {

    const screenDisplay = useSelector(selectDisplayValue)
    const bufferDisplay = useSelector(selectBufferValue)
    return (
        <div className={"calc-screen"}>
            <div className={"buffer-display"}>
                {bufferDisplay}
            </div>
            <div className={"w-100 main-display"}>
                {screenDisplay}
            </div>
        </div>
    )
}

export default CalculatorScreen