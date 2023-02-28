const sumSalaries = (obj) => {
    let sum = 0;
    for (let value of Object.values(obj)) {
        sum += value;
    }
    return sum
}