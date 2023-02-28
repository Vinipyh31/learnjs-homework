'use strict'

function printPrimes(n) {
    let primes = [];

    for (let i = 2; i <= n; i++) {
        let isPrime = true;

        for (let j = 0; j < primes.length; j++) {
            if (i % primes[j] === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(i);
        }
    }

    // Выводим все простые числа с помощью alert
    alert(primes.join(', '));
}

printPrimes(20);