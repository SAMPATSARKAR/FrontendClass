export function add(a, b) { 
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

export function power(a, b) {
    return Math.pow(a, b);
}

export function squareRoot(a) {
    if (a < 0) {
        throw new Error("Cannot calculate square root of a negative number");
    }
    return Math.sqrt(a);
}

export function factorial(n) {
    if (n < 0) {
        throw new Error("Cannot calculate factorial of a negative number");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}