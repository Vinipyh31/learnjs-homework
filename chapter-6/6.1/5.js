'use strict';

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const printListReverseRecursion = (list) => {
    if (list.next) {
        printListReverseRecursion(list.next)
    }
    console.log(list.value);
}


function printListReverseCycle(list) {
    let tmp = list;
    const arr = [];
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    console.log(arr.reverse().join(', '));
}

printListReverseRecursion(list)
printListReverseCycle(list)