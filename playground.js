import { math_cos, math_floor, math_random, math_sin } from "sicp";

export function square(x) {
    return x* x;
}

export function cube(x) {
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

export function sum(term, a, next, b) {
    return a > b
           ? 0
           : term(a) + sum(term, next(a), next, b);
}

export function inc(a) {
    return a + 1;
}

export function identity(a) {
    return a;
}

export function positive(x) {
    return x > 0;
}

export function negative(x) {
    return x < 0;
}

export function half_interval_method(f, a, b) {
    function close_enough(x, y) {
        return abs(x - y) < 0.001;
    }

    function search(f, neg_point, pos_point) {    
        const midpoint = average(neg_point, pos_point);
    
        if (close_enough(neg_point, pos_point)) {
            return midpoint;
        }
        else {
            const test_value = f(midpoint);
    
            return positive(test_value)
                   ? search(f, neg_point, midpoint)
                   : negative(test_value)
                   ? search(f, midpoint, pos_point)
                   : midpoint;
        }
    }

    const a_value = f(a);
    const b_value = f(b);

    return negative(a_value) && positive(b_value)
           ? search(f, a, b)
           : negative(b_value) && positive(a_value)
           ? search(f, b, a)
           : error("values are not of opposite sign");
}

export function fixed_point(f, first_guess) {
    const tolerance = 0.00001;

    function close_enough(x, y) {
        return abs(x - y) < tolerance;
    }

    function try_with(guess) {
        const next = f(guess);
        return close_enough(guess, next)
               ? next
               : try_with(next);
    }

    return try_with(first_guess);
}