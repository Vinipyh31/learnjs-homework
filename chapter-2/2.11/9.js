'use strict'

let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

    let password = prompt('Пароль?', '');

    if (password === 'Я главный') {
        alert('Здравствуйте!');
    } else if (password === '' || password === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (userName === '' || userName === null) {
    alert('Отменено');
} else {
    alert("Я вас не знаю");
}