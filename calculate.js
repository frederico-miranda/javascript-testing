const calculate = {
    add(x, y) {
        return x + y;
    },
    subtract(x, y) {
        return x - y;
    },
    multiply(x, y) {
        return x * y;
    },
    divide(x, y) {
        if (y!=0) {
          return x / y;
        }
        else{
          return 'You can´t divide by 0';
        }
    },
};

module.exports = arithmetic;
