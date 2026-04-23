// // 1)module exports
// //  A module is a reusable piece of code that encapsulates related functionality, data, and logic. It allows developers to organize their code into smaller, manageable units, promoting code reusability and maintainability. Modules can be imported and used in other parts of the application, enabling developers to share functionality across different files and components.

// import { set } from "lodash";

// import { toUpper } from "lodash"

// // 2)importing and exporting modules
// // In JavaScript, you can use the `export` keyword to make functions, objects, or variables available for use in other files. You can then use the `import` keyword to bring those exported entities into another file. This allows you to organize your code into separate modules and reuse functionality across different parts of your application.

// export function add(a, b) {
//     return a + b;
// }

// export function subtract(a, b) {
//     return a - b;
// }

// export function multiply(a, b) {
//     return a * b;
// }

// export function greet() {
//     console.log("Hello, welcome to the module!");
// }

// //Export as default (single object)
// export default (add,subtract,multiply,greet);


// export function toUpper(str){
//     return str.toUpperCase();
// }

// export default toUpper;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}