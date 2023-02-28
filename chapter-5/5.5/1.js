const camelize = (str) => {
    let arr = str.split('-');
    
    let camelArr = arr.map( (item, index) => (index == 0) ? item : item[0].toUpperCase() + item.slice(1) );

    return camelArr.join('');
}