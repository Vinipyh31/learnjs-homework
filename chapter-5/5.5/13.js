const groupById = (arr) =>  arr.reduce( (obj, item) => {
        obj[item.id] = item;
        return obj;   
    }, {})