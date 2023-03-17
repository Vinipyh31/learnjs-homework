// внешние углы
let coords = elem.getBoundingClientRect();

let answer1 = [coords.left, coords.top];
let answer2 = [coords.right, coords.bottom];

// Верхний левый внутренний угол
let answer3 = [coords.left + field.clientLeft, coords.top + field.clientTop];

// Нижний правый внутренний угол
let answer4 = [
    coords.right - parseInt(getComputedStyle(field).borderRightWidth),
    coords.bottom - parseInt(getComputedStyle(field).borderBottomWidth)
];