function square_sum_of_bigger_two(a, b, c) {
    return (a <= b && a <= c)
           ? b * b + c * c
           : (b <= a && b <= c)
           ? a * a + c * c
           : a *a + b * b;
}