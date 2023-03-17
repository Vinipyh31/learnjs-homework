// оба объекта ссылаются на один и тот же stomach, поэтому когда 'ест' один, то наедается и второй
// чтобы это исправить нужно переопределить stomach у каждого дочернего объекта

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: []
};

let lazy = {
  __proto__: hamster,
  stomach: []
};

speedy.eat("carrot");
alert(speedy.stomach); // carrot

alert( lazy.stomach ); // <ничего>