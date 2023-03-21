import { inc } from "./playground.js";

function double(f) {
    return x => f(f(x));
}

console.log((double(double))(inc)(5));