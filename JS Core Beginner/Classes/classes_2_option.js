class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

let rectangle = new Rectangle(10, 5);

console.log(`Площадь: ${rectangle.calculateArea()}`);
console.log(`Периметр: ${rectangle.calculatePerimeter()}`);
