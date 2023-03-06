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

function is_even(n) {
    return n % 2 === 0;
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function divides(a, b) {
    return b % a === 0;
}

function smallest_divisor(n) {
    function find_divisor(test_divisor) {
        return square(test_divisor) > n
               ? n
               : divides(test_divisor, n)
               ? test_divisor
               : find_divisor(test_divisor + 1);
    }

    return find_divisor(n, 2);
}

function is_prime(n) {
    return n === smallest_divisor(n);
}

function expmod(base, exp, m) {
    return exp === 0
           ? 1
           : is_even(exp)
           ? square(expmod(base, exp / 2, m)) % m
           : (base * expmod(base, exp - 1, m)) % m
}