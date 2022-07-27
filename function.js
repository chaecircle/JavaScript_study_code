// function 만들기

function sayHello(nameOfPerson, age) {
    console.log('Hello! My name is', nameOfPerson, 'and I am', age);
  }
  
  sayHello('chaewon', 22);
  sayHello('hyunjae', 38);
  
  function plus(a, b) {
    console.log(a + b);
  }
  
  plus(10, 12);
  plus(20, 235);
  plus(); // NaN : Not a number

  
function divide(a, b){
    console.log(a / b);
  }
  
  divide(10, 2);
  divide(20, 3);
  
// object 안에 함수 넣기
const player = {
    name: 'chaewon',
    sayHello: function (name) {
      console.log('Hello!', name);
    }
  };
  
  console.log(player.name);
  player.sayHello('yujin');
  
  // 인자argument에 디폴트값 설정 가능
  function sayMyName(name1 = '채원', name2 = '현제') {
    console.log("Hello,", name1);
    console.log("Hello,", name2);
  };
  
  sayMyName('chaewon', 'hyunjae');

// 각 object가 어떻게 구성되었는지 확인할 수 있음
console.log(player)
console.log(console)



function anything(num) {
    console.log(num - 2);
  };
  
// 아래와 같이 인자를 여러 개 주어도 차례로 앞에 있는 것만 인식하여 함수가 작동함
// 파이썬과 다른 점임!
anything(5, 10, 11)

const etc = {
    name: 'Harry',
    sayILoveYou: function (name) {
        console.log('I love you,', name);
    }
};

etc.sayILoveYou('HyunJae');


