const inquirer = require('inquirer');
const fs = require('fs');
const {Shapes, Circle, Triangle, Square} = require('./lib/shapes');



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
        type: 'list',
        message: "Choose your shape",
        name: 'shape',
        choices: ['Square','Triangle','Circle'],
        
    },
    {
        type: 'input',
        name: "fontcolor",

    }
   
];
class Shapes {
    constructor(shape) {
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.text = text;
    }

    render() {
        if(this.shape === 'circle'){
            return 'Render circle';
        } else if (this.shape === 'triangle') {
            return 'Render triangle';
        } else if (this.shape === 'square') {
            return 'Render square';
        }else {
            return 'Unknown shape';
        }

    }
}
function writeToFile(fileName, data){
    fs.writeFileSync(`./${fileName}` , data);
}

function init() {
    inquirer 
    .prompt(questions)
    .then((answers) => {
        console.log("results ...");
        console.log(answers);
      
      const shape = new Shapes(answers.shape);

      if(shape.shape === "circle"){
        console.log("You chose a circle.");
        } else if (shape.shape === "triangle"){
            console.log("You chose a triangle.");
        } else if(shape.shape === "square") {
            console.log("You chose a square");
        }
        writeToFile("logo.svg", shape.render())
    })   
}




init();