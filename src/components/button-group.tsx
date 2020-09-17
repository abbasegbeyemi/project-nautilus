import * as React from "react";
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";

interface ButtonGroupProps {
    values: Array<number | string>
    clicked: any
    variant: string
}

export default (props: ButtonGroupProps) => {
    const dispatch = useDispatch()
    const update = props.clicked
    return (
        <>
            {
                (props.values).map(
                    (value, index) => (
                        <Button
                            key={index}
                            variant={props.variant}
                            onClick={() => dispatch(update(value))}
                            className={"btn-lg my-2 mx-1 flex-fill"}>
                            {value}
                        </Button>
                    )
                )
            }
        </>
    )
}



