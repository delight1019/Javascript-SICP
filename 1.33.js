import { gcd, identity, inc, is_prime, square } from "./playground.js";

function filtered_accumulate(combiner, null_value, term, a, next, b, filter) {
    function iter(a, result) {
        return a > b
               ? result
               : filter(a)
               ? iter(next(a), combiner(term(a), result))
               : iter(next(a), result);
    }

    return iter(a, null_value);
}

// a
function sum_of_prime_square(a, b) {
    function sum(a, b) {
        return a + b;
    }

    return filtered_accumulate(sum, 0, square, a, inc, b, is_prime);
}

console.log(sum_of_prime_square(2, 7));

// b
function b_func(n) {
    function sum(a, b) {
        return a + b;
    }

    function b_filter(x) {
        return gcd(n, x) === 1;
    }

    return filtered_accumulate(sum, 0, identity, 1, inc, n - 1, b_filter);
}

console.log(b_func(7));