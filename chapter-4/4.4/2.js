const calculator = {
    read() {
        this.a = +print('a?');
        this.b = +print('b?');
        //this.a = 5;
        //this.b = 10;
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );