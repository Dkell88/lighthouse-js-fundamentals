/*const sayHello = function(){
  console.log("Hello, world");
}

sayHello();*/
const sayHello = function(name){
  console.log("Hello, "+ name);
}
sayHello("Tatiana");
sayHello("Nova");
sayHello("Nolyn");

const sayHelloToConsole = function (name){
  console.log("Hello, " +name);
}
sayHelloToConsole('Darren');

const returnSayHello = function (name){
  return "Hello, " + name;
}
const gretting = returnSayHello('Kelly');
console.log(gretting)