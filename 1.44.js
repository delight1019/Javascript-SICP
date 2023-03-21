function compose(f, g) {
    return x => f(g(x));
}

function repeated(f, n) {
    return x =>
           n === 1
           ? f(x)
           : compose(f, repeated(f, n - 1))(x);
}

function smooth(f) {
    const dx = 0.0001;

    return x => (f(x - dx) + f(x) + f(x + dx)) / 3;
}

function n_fold_smooth(f, n) {
    return x => repeated(smooth(f), n)(x)
}

console.log(n_fold_smooth(i => i + 1, 10)(3));