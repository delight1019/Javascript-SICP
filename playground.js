export function square(x) {
    return x* x;
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