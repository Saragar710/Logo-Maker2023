const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes')



const questions = [
    {
        type: 'input',
        name: 'text',
        message: "Enter three characters",
    },
    {
        type: 'input',
        name: 'color',
        message: "Choose a color.",
    },
    {
        type: 'checkbox',
        message: "Choose your shape",
        name: 'shape',
        choices: ['Square','Triangle','Circle'],
        
    },
   
];
function init() {
    inquirer 
    .prompt(questions)
    .then((answers) => {
        console.log("results ...")
        console.log(answers)
    })
}
// class Shape {
//     constructor(type, color, ) {
//         this.type = type,
//             this.color = color,
//             // this.width = width,
//             // this.height = height,
//             // this.fill = fill,
        
//     }

//     showCreateShape() {
//         console.log(`The shape you choose is ${this.type} ${this.color} `);
//     }
// }




// class Circle extends Shape  {
// constructor (type, color, ){
//     super()
// }

// }
// const triangle = new Shape('triangle', 'pink');
// const square = new Shape('square', 'yellow');

// circle.createShape();
// triangle.createShape();
// square.createShape();
init();