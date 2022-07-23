// 계산기 기능을 가진 object calculator를 만들어보자

const calculator = {
    add: function (a, b) {
        console.log(a +b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    divide: function (a, b) {
        console.log(a / b);
    },
    multiply: function (a, b) {
        console.log(a * b);
    },
    powerof: function (a, b) {
        console.log(a ** b);
    }
};

calculator.add(3, 4);
calculator.minus(5, 2);
calculator.divide(9, 3);
calculator.multiply(5, 6);
calculator.powerof(2, 5);
