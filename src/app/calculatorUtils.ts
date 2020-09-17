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

        return this.truncateNumber(result, 10)
    }

    truncateNumber (num: number, digits: number) {
        return Math.trunc(num * Math.pow(10, digits))/Math.pow(10, digits)
    }
}
