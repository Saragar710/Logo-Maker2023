const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const SVG = require('./lib/svg');


const questions = [
    {
        type: 'input',
        name: 'text',
        message: "Enter three characters",
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "Choose a color.",
    },
    {
        type: 'list',
        message: "Choose your shape.",
        name: 'shapeType',
        choices: ['circle', 'triangle', 'square'],

    },
    {
        type: 'confirm',
        name: "fontcolor",
        message: "Choose your font color.",


    }

];


// Code didnt work, will try rewriting
// function writeToFile(fileName, data) {
//     fs.writeFileSync(`./${fileName}`, data);


// .then(() => {
//     console.log("Create a svglogo");
// })
// .catch((error) => {
//     console.log(error);
//     console.log("Something went wrong");
// });
// }

// Code worked 
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./${fileName}`, data, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}

writeToFile('filename.txt', 'Some data')
    .then(() => {
        console.log('Create a svglogo');
    })
    .catch((error) => {
        console.error(error);
        console.log('Something went wrong');
    });


function init() {
    // run()
    //  {
        return inquirer
        .prompt([ 
            {
                type: 'input',
                name: 'text',
                message: "Enter three characters",
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: "Choose a color.",
            },
            {
                type: 'list',
                message: "Choose your shape.",
                name: 'shapeType',
                choices: ['square', 'triangle', 'circle'],
        
            },
            {
                type: 'confirm',
                name: "fontColor",
                message: "Chose a font color.",
        
        
            }
        
        ])
        .then(({ text, shapeColor, fontColor, shapeType }) => {
            // console.log("results ...");
           
            let shape;
            switch (shapeType) {
                case "square":
                    shape = new Square();
                    break;
                case "triangle":
                    shape = new Triangle();
                    break; 
                default: 
                    shape = new Circle();
                    break;
    }
        // let shapeColor = shape.setColor(shapeColor)
})
        // .then(() => 
        // let shapeColor =  shape.setColor(shapeColor)
        // )
       
    }
//}





init().run();