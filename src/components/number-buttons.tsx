import * as React from "react";
import ButtonGroup from "./button-group";
import {updateDisplay} from "../app/calculatorSlice"

const NumberButtons = () => {
    const numbers = chunkArray(Array.from({length: 9}, (_, i) => i + 1).reverse(), 3)
    return (
        <>
            {
                numbers.map((values, index) => (
                        <div key={`${values}-${index}`} className={"d-flex"}>
                            <ButtonGroup values={values.reverse()} clicked={updateDisplay} variant={"primary"}/>
                        </div>
                    )
                )
            }
        </>
    )
}

const chunkArray = (array: Array<any>, chunckSize: number) => {
    let result: Array<any> = []

    while (array.length) {
        result.push(array.splice(0, chunckSize))
    }

    return result
}

export default NumberButtons
