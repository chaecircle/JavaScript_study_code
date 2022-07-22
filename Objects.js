const player = {
    name: '한유진',
    points: 10,
    class: 'F'
}

console.log(player);
console.log(player.name);
console.log(player.class);
console.log(player.points);

console.log(player['name']);

// const로 생성한 변수는 그 자체의 값을 수정할 수 없지만, 아래와 같이 그 안의 값을 업데이트하는 것은 가능하다.
player.class = 'S';
console.log(player);
