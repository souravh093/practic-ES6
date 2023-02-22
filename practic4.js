const operationDo = (num1, num2) => {
    const number1 = num1 + 2;
    const number2 = num2 + 2;
    const operation = number1 * number2;
    return operation
}

const showOperation = operationDo(5, 7);
console.log(showOperation);