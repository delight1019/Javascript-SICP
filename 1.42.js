import { inc, square } from "./playground.js";

function compose(f, g) {
    return x => f(g(x));
}

console.log(compose(square, inc)(6));