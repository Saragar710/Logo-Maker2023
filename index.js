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
   
];
function writeToFile(fileName, data){
    fs.writeFileSync(`./${fileName}` , data);
}

function init() {
    inquirer 
    .prompt(questions)
    .then((answers) => {
        console.log("results ...")
        console.log(answers)
      
      const shape = new Shapes(answers)
    //   if(shape === "circle"){
    //     console.log("You chose a circle.");
    //     } else if (shape === "triangle"){
    //         console.log("You chose a triangle.");
    //     } else if(shape === "square") {
    //         console.log("You chose a square");
    //     }
        writeToFile("logo.svg", shape.render())
    })   
}




init();