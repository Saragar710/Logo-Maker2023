const inquirer = require('inquirer');


function Shape (type, color) {
    this.type = type;
    this.color = color;

    this.createShape = () => console.log (`This is my ${this.type}`)
}

const circle = new Shape('circle', 'blue');
const triangle = new Shape ('triangle', 'pink');
const square = new Shape('square', 'yellow');

circle.createShape();
triangle.createShape();
square.createShape();