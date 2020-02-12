
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
          return Math.trunc( x / y);
        }
        else{
          return 'You can´t divide by 0';
        }
    },
};
export default calculate;
