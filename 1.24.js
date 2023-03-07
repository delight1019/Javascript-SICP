import { display, get_time } from "sicp";
import { fast_is_prime, is_even, is_prime, smallest_divisor } from "./playground.js";

function report_prime(elapsed_time) {
    display(" *** ");
    display(elapsed_time);
}

function start_prime_test(n, start_time) {
    return fast_is_prime(n, 10)
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

// 소요되는 시간이 너무 짧아 제대로 측정되지 않았다.