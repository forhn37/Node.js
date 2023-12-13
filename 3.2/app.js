function helloWorld() {
  console.log('Hello World'); //2번
  helloNode(); //3번
}

function helloNode() {
  console.log('Hello Node'); //4번
}

helloWorld(); // 1번

//예제 3.2