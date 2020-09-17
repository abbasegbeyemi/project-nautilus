import * as React from "react";
import Button from "react-bootstrap/cjs/Button";
import {updateDisplay} from "../app/calculatorSlice"
import {useDispatch} from "react-redux";

const BottomRowButtons = () => {
    const values = [0, "."]
    const dispatch = useDispatch()
    const buttonClass = "normal"
    return (
        <div className={"d-flex"}>
            <Button className={`flex-grow-1 btn-lg my-2 mx-1 btn-${buttonClass}`} onClick={() => dispatch(updateDisplay(values[0]))}>
                {values[0]}
            </Button>
            <Button className={`btn-lg my-2 mx-1 btn-point-lg btn-${buttonClass}`} onClick={() => dispatch(updateDisplay(values[1]))}>
                {values[1]}
            </Button>
        </div>
    )
}

export default BottomRowButtons