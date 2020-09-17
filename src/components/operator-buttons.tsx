import * as React from "react";
import Button from "react-bootstrap/cjs/Button";
import {useDispatch, useSelector} from "react-redux";
import {updateOperation, selectCurrentOperator} from "../app/calculatorSlice"

const OperatorButtons = () => {
    const operators = [
        {name: "divide", value: "/", display: "\u00F7"},
        {name: "multiply", value: "*", display: "\u2715"},
        {name: "subtract", value: "-", display: "\u2212"},
        {name: "add", value: "+", display: "\u002B"},
    ]
    const dispatch = useDispatch()
    const currentOperator = useSelector(selectCurrentOperator)
    return (
        <div className={"d-flex flex-column"}>
            {
                operators.map((operator, index) => (
                    <Button
                        className={"btn-lg m-2"}
                        variant={"secondary"}
                        active={currentOperator === operator.value ? true : undefined}
                        value={operator.value}
                        key={index}
                        name={operator.name}
                        onClick={() => dispatch(updateOperation(operator.value))}>
                        {operator.display}
                    </Button>
                ))
            }
            <Button
                className={"btn-lg m-2"}
                name={"equals"}
                variant={"equals"}
                onClick={() => dispatch(updateOperation("="))}
            >
                {"\u003D"}
            </Button>
        </div>
    )
}

export default OperatorButtons

