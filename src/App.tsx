import React from 'react';
import Container from "react-bootstrap/Container";
import "./styles/theme.scss"
import NumberButtons from './components/number-buttons';
import TopActionsButtons from "./components/top-actions-row-buttons";
import Col from "react-bootstrap/cjs/Col";
import Row from "react-bootstrap/cjs/Row";
import BottomRowButtons from "./components/bottom-row-buttons";
import OperationsButtons from "./components/operator-buttons";
import CalculatorScreen from './components/calculator-screen';
import Jumbotron from "react-bootstrap/cjs/Jumbotron";


const App = () => {
    return (
        <>
            <Jumbotron fluid className={"header"}>
                <Container>
                    <h1 className={"text-center"}>
                        Nautilus Calculator
                    </h1>
                </Container>
            </Jumbotron>
            <Container>
                <Row className={"justify-content-center"}>
                    <Col className={"mx-2 col-md-5 col-lg-4 calc-container shadow-lg"}>
                        <Row>
                            <Col className={"w-100 p-0"}>
                                <CalculatorScreen/>
                            </Col>
                        </Row>
                        <Row className={"px-1"}>
                            <Col className={"p-0"}>
                                <TopActionsButtons/>
                                <NumberButtons/>
                                <BottomRowButtons/>
                            </Col>
                            <Col className={"col-auto p-0"}>
                                <OperationsButtons/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default App;
