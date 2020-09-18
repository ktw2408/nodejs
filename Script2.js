var person1 = {name:'kim', age:20};
var person2 = {name:'park', age:20};

/* 5~12 : 틀*/
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed){
    console.log(speed + 'km 속도로 걸어갑니다.');                
};

var person3 = new Person('lee',25);
var person4 = new Person('oh',22);

person3.walk(20);