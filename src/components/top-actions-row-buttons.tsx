import * as React from "react";
import ButtonGroup from "./button-group";
import {modifyDisplay} from "../app/calculatorSlice"

const TopActionsButtons = () => {
    const values = ["C", "CE", "\uFE6A"]
    return (
        <div className={"d-flex"}>
            <ButtonGroup values={values} clicked={modifyDisplay} variant={"action"}/>
        </div>
    )
}

export default TopActionsButtons
