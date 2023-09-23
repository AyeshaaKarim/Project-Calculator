import * as inquirer from "inquirer";
import chalk from "chalk";
// Calculator Operators
var Operators;
(function (Operators) {
    Operators["ADD"] = "Addition";
    Operators["SUBTRACT"] = "Subtraction";
    Operators["MULTIPLY"] = "Multiplication";
    Operators["DIVIDE"] = "Division";
})(Operators || (Operators = {}));
const prompt = inquirer.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return "Please enter a valid number";
    }
    return true;
}
async function main() {
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter the first number:",
            validate: validateNumber,
        },
        {
            type: "list",
            name: "operator",
            message: "Select an Operation",
            choices: Object.values(Operators)
        },
        {
            type: "input",
            name: "num2",
            message: "Enter second Number:",
            validate: validateNumber
        }
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const selectedOperator = input.operator;
    let result;
    if (selectedOperator === Operators.ADD) {
        result = num1 + num2;
        console.log((chalk.blueBright.bgBlack `Result is : ${result}`));
    }
    else if (selectedOperator === Operators.DIVIDE) {
        result = num1 / num2;
        console.log((chalk.yellow.bgBlack `Result is : ${result}`));
    }
    else if (selectedOperator === Operators.MULTIPLY) {
        result = num1 * num2;
        console.log((chalk.green.bgBlack `Result is : ${result}`));
    }
    else if (selectedOperator === Operators.SUBTRACT) {
        result = num1 - num2;
        console.log((chalk.red.bgBlack `Result is : ${result}`));
    }
}
;
main();
