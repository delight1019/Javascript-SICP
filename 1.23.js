import { display, get_time } from "sicp";
import { square, divides, is_even } from "./playground.js";

function next(n) {
    return n === 2
           ? 3
           : n + 2;
}

function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
           ? n
           : divides(test_divisor, n)
           ? test_divisor
           : find_divisor(n, next(test_divisor));
}

function smallest_divisor(n) {
    return find_divisor(n, 2);
}

function is_prime(n) {
    return n === smallest_divisor(n);
}

function report_prime(elapsed_time) {
    display(" *** ");
    display(elapsed_time);
}

function start_prime_test(n, start_time) {
    return is_prime(n)
           ? report_prime(get_time() - start_time)
           : true;
}

function timed_prime_test(n) {
    display(n);
    return start_prime_test(n, get_time());
}

function search_for_primes(n, m) {
    function iter(n, count) {
        return count <= 0
               ? false
               : n > m
               ? false
               : is_even(n)
               ? iter(n + 1, count)
               : timed_prime_test(n)
               ? iter(n + 2, count)
               : iter(n + 2, count - 1)
    }

    return iter(n, 3);
}

search_for_primes(1000, 10000);
search_for_primes(10000, 100000);
search_for_primes(100000, 1000000);
search_for_primes(1000000, 10000000);
search_for_primes(100000000, 1000000000);

// 시간이 제대로 측정되지 않았다.