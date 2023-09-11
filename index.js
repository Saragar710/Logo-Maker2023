const inquirer = require('inquirer.js');
const fs = require('fs');
const shapes = require('./shapes')


function Shape () {
    constuctor( type, color, width, height, fill )
    this.type = type;
    this.color = color;
    this.width = width;
    this.height = height;
    this.fill = fill;

    this.createShape = () => console.log (`This is my ${this.type} ${this.color}`)
}

const circle = new Shape('circle', 'blue');
const triangle = new Shape ('triangle', 'pink');
const square = new Shape('square', 'yellow');

circle.createShape();
triangle.createShape();
square.createShape();