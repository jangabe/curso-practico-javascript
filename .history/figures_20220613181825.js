//Code for the square
console.group("square");
const squareSide = 5;
console.log('The sides of the square measure: '+ squareSide);

const squarePerimeter = squareSide * 4;
console.log('The perimeter of the square is: '+ squarePerimeter +"cm");

const squareArea = squareSide * squareSide;
console.log('The area of the square is: '+ squareArea+"cm^2");
console.groupEnd();


//Code for the triangle
console.group('triangle');
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
console.log('The sides of the triangle measure: '+ triangleSide1+"cm, "+triangleSide2+"cm, "+triangleBase+"cm");
console.groupEnd();

const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
console.log('The perimeter of the triangle is: '+ trianglePerimeter +"cm");

const triangleHeight = 5.5;
console.log('The height of the triangle is: '+triangleHeight+"cm");

const triangleArea = (triangleBase * triangleHeight)/2;
console.log('The area of the square is: '+ triangleArea+"cm^2");