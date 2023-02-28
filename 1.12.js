// r번째 줄의 c번째 숫자를 계산하는 함수이다.
function pascal_triangle(r, c) {
    return r === 1 || c === 1 || r === c
           ? 1
           : pascal_triangle(r - 1, c - 1) + pascal_triangle(r - 1, c);
}

console.log(pascal_triangle(5, 3));
console.log(pascal_triangle(4, 3));