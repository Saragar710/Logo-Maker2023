const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes')


// function Shape () {
//     constuctor( type, color, width, height, fill )
//     this.type = type;
//     this.color = color;
//     this.width = width;
//     this.height = height;
//     this.fill = fill;

//     this.createShape = function ()  {console.log (`This is my ${this.type} ${this.color}`)}
// }
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your name?",
    }
]

class Shape{
    constructor(type, color, width, height, fill) {
        this.type = type,
        this.color = color,
        this. width = width,
        this.height = height,
        this.fill = fill,
        
    };

    showCreateShape() {
        console.log(`The shape you choose is ${this.type} ${this.color} ${this.width} ${this.height} ${this.fill}`);
    }
}




const circle = new Shape('circle', 'blue');
const triangle = new Shape ('triangle', 'pink');
const square = new Shape('square', 'yellow');

circle.createShape();
triangle.createShape();
square.createShape();