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