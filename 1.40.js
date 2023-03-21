import { newtons_method } from "./playground.js";

function cubic(a, b, c) {
    return x => x * x * x + a * x * x + b * x + c;
}

console.log(newtons_method(cubic(0, 0, -9), 1))
