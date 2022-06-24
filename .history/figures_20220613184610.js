//Code for the square
console.group("square");
//const squareSide = 5;
//console.log('The sides of the square measure: '+ squareSide);

function squarePerimeter(side){
    return side * 4;
} 

//console.log('The perimeter of the square is: '+ squarePerimeter(4) +"cm");

function squareArea(side){
    return side * side;
}

//console.log('The area of the square is: '+ squareArea(5)+"cm^2");

console.groupEnd();


//Code for the triangle
console.group("triangle");
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

//Code for the circle
console.group("circle");
const circleRadius = 4;
console.log('The radius of the circle measure: '+ circleRadius);

//const PI = 3.1415;
const PI = Math.PI;
console.log('The PI value is: '+PI);

const circleDiameter = circleRadius * 2;
console.log('The diameter of the circle is: '+ circleDiameter +"cm");

const circlePerimeter = circleDiameter * PI;
console.log('The perimeter of the circle is: '+ circlePerimeter +"cm");

const circleArea = (circleRadius * circleRadius) * PI;
console.log('The area of the circle is: '+ circleArea+"cm^2");

console.groupEnd();