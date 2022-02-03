class Vehicle {
  constructor(name, wheel){
    this.name = name;
    this.wheel = wheel;
  }
}
const myVehicle = new Vehicle('운송수단', 2);
console.log(myVehicle);

// extends : 확장(상속)
class Bicyle extends Vehicle{   // Vehicle 클래스를 확장해서 Bicyle 내부에서 사용하겠다.
  constructor(name, wheel){
    // super : Vehicle을 의미한다.
    super(name, wheel);   // super가 있는 자리에서 Vehicle이 실행된다.
  }
}
const myBicyle = new Bicyle('삼천리', 2);
const daughtsBicyle = new Bicyle('세발', 3);
console.log(myBicyle);
console.log(daughtsBicyle);

// 진정한 의미의 확장은 Car 클래스를 보면 된다!
class Car extends Vehicle{    
  constructor(name, wheel, license){    // 인수 추가
    super(name, wheel);
    this.license = license;   // 추가적인 내용 일부만 작성
  }
}
const myCar = new Car('벤츠', 4, true);
const daughtsCar = new Car('포르쉐', 4, false);
console.log(myCar);
console.log(daughtsCar);