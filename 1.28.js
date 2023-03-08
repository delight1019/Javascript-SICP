import { is_even, square } from "./playground.js";
import { math_floor, math_random} from "sicp";

function expmod(base, exp, m) {
    function check(x, m) {
        return ((x === 1) || (x === m - 1))
               ? square(x) % m
               : (square(x) % m) === 1
               ? 0
               : square(x) % m;
    }

    return exp === 0
           ? 1
           : !is_even(exp)
           ? (base * expmod(base, exp - 1, m)) % m
           : check(expmod(base, exp / 2, m), m);
}

function Miller_Rabin_is_prime(n) {
    function try_it(a) {
        return expmod(a, n - 1, n) === 1;
    }

    return try_it(1 + math_floor(math_random() * (n - 1)));
}


console.log(Miller_Rabin_is_prime(331));
console.log(Miller_Rabin_is_prime(335));
console.log(Miller_Rabin_is_prime(1181));
console.log(Miller_Rabin_is_prime(1183));
console.log(Miller_Rabin_is_prime(1223));
console.log(Miller_Rabin_is_prime(1219));