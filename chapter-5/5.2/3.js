function readNumber() {
    let a;

    do {
        a = prompt("Введите число", 0);
    } while ( !isFinite(a) );

    if (a === null || a === '') return null;

    return +a;
}
  
console.log(`Число: ${readNumber()}`);