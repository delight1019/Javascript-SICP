import { square } from "./playground.js";

function compose(f, g) {
    return x => f(g(x));
}

function repeated(f, n) {
    return x =>
           n === 1
           ? f(x)
           : compose(f, repeated(f, n - 1))(x);
}

console.log(repeated(square, 2)(5));