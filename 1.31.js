import { identity, inc } from "./playground.js";

// a
function product(term, a, next, b) {
    return a > b
           ? 1
           : term(a) * product(term, next(a), next, b);
}

function factorial(x) {
    return product(identity, 1, inc, x);
}

function term(a) {
    return (a / (a - 1)) * (a / (a + 1));
}

function next(a) {
    return a + 2;
}

console.log(2 * product(term, 2, next, 100));
console.log(2 * product(term, 2, next, 1000));
console.log(2 * product(term, 2, next, 10000));

// b
function product_iter(term, a, next, b) {
    function iter(a, result) {
        return a > b
               ? result
               : iter(next(a), term(a) * result);
    }

    return iter(a, 1);
}