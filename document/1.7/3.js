// HTML в задаче некорректен. В этом всё дело.
// Браузер исправил ошибку автоматически. Но внутри <table> не может быть текста: в соответствии со спецификацией допускаются только табличные теги. Поэтому браузер показывает "aaa" до <table>.
// Теперь очевидно, что когда мы удаляем таблицу, текст остаётся.
// На этот вопрос можно легко ответить, изучив DOM, используя инструменты браузера. Вы увидите "aaa" до элемента <table>.
// Вообще, в стандарте HTML описано, как браузеру обрабатывать некорректный HTML, так что такое действие браузера является правильным.