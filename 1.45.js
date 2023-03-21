import { math_pow } from "sicp";
import { average_damp, fixed_point_of_transform, repeated } from "./playground.js";

function n_sqrt(x, n) {
    function transform(x) {
        return x === 0
               ? average_damp
               : repeated(average_damp, x);
    }

    return fixed_point_of_transform(y => x / math_pow(y, n - 1), transform(n - 2), 1);
}

console.log(n_sqrt(3, 2));
console.log(n_sqrt(3, 3));
console.log(n_sqrt(3, 4));
console.log(n_sqrt(3, 5));
console.log(n_sqrt(3, 6));
console.log(n_sqrt(3, 7));
console.log(n_sqrt(3, 8));
console.log(n_sqrt(3, 9));
console.log(n_sqrt(3, 10));
console.log(n_sqrt(3, 11));
console.log(n_sqrt(3, 100));