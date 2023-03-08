import { expmod } from "./playground.js";

// 561, 1105, 1729, 2465, 2821, 6601

function is_prime(n) {
    function iter(a) {
        return a >= n
               ? true
               : expmod(a, n, n) === (a % n)
               ? iter(a + 1, n)
               : false;
    }

    return iter(1);
}

console.log(is_prime(561));
console.log(is_prime(1105));
console.log(is_prime(1729));
console.log(is_prime(2465));
console.log(is_prime(2821));
console.log(is_prime(6601));
console.log(is_prime(6603));
