// получаем элемент
let elem = document.querySelector('[data-widget-name]');

// читаем значение
alert(elem.dataset.widgetName);
// или так
alert(elem.getAttribute('data-widget-name'));