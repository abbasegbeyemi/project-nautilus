export default class CalculatorUtils{
    handleOperation(operator: string, op1: number, op2: number) {
        let result: number = 0
        switch (operator) {
            case "+":
                result = op1 + op2
                break

            case "-":
                result = op1 - op2
                break

            case "*":
                result = op1 * op2
                break

            case "/":
                result = op1 / op2

        }
        // We want to limit answers to 10 decimal places at most
        const digits = 10
        result = Math.trunc(result * Math.pow(10, digits))/Math.pow(10, digits)
        return result
    }
}