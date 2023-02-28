
let date = new Date(2012, 0, 3);  // 3 января 2012 года
const getWeekDay = (date) => {
    const array = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return array[date.getDay()]
}
console.log( getWeekDay(date) );      