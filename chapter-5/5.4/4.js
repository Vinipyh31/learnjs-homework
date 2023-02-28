const sumInput = () => {
    let array = [];
    
    while (true) {
        let number = prompt('number?');
        if ( number === '' || number === null || !isFinite(value) ) {
            break;
        }
        array.push(+number);
    }

    let sum = 0;
    for (let el of array) {
        sum += el;
    }

    return sum;
}