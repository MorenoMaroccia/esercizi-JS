class Square {
  constructor(side) {
    this.side = side;
    
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(value) {
if(value == square){
  return value.side * value.side
} else if (value == rectangle){
  return value.width * value.height
} else if (value == circle){
  return Math.round(Math.PI*(value.radius*value.radius))
}
  };

}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));