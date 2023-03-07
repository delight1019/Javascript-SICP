import { math_floor, math_random } from "sicp";

export function square(x) {
    return x* x;
}

export function cubic(x) {
    return x * x * x;
}

export function sum_of_squares(x, y) {
    return square(x) + square(y);
}

export function abs(x) {
    return x >= 0 ? x : -x;
}

export function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
           ? guess
           : sqrt_iter(improve(guess, x), x);
}

export function improve(guess, x) {
    return average(guess, x / guess);
}

export function average(x, y) {
    return (x + y) / 2;
}

export function is_good_enough(guess, x) {
    return abs(square(guess) - x) < 0.001;
}

export function sqrt(x) {
    return sqrt_iter(1, x);
}

export function is_even(n) {
    return n % 2 === 0;
}

export function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

export function divides(a, b) {
    return b % a === 0;
}

function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
           ? n
           : divides(test_divisor, n)
           ? test_divisor
           : find_divisor(n, test_divisor + 1);
}

export function smallest_divisor(n) {    
    return find_divisor(n, 2);
}

export function is_prime(n) {
    return n === smallest_divisor(n);
}

export function expmod(base, exp, m) {
    return exp === 0
           ? 1
           : is_even(exp)
           ? square(expmod(base, exp / 2, m)) % m
           : (base * expmod(base, exp - 1, m)) % m
}

export function fermat_test(n) {
    function try_it(a) {
        return expmod(a, n, n) === a;
    }

    return try_it(1 + math_floor(math_random() * (n - 1)));
}

export function fast_is_prime(n, times) {
    return times === 0
           ? true
           : fermat_test(n)
           ? fast_is_prime(n, times - 1)
           : false;
}