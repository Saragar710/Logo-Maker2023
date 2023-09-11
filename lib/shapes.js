// const { Square, Triangle, Circle} = require("./shapes");
class Shape {
    constructor(type, color, ) {
        this.type = type,
            this.color = color,
            // this.width = width,
            // this.height = height,
            // this.fill = fill,
        
    }

    showCreateShape() {
        console.log(`The shape you choose is ${this.type} ${this.color} `);
    }
}

const triangle = new Shape();
Shape.setColor("blue");
expect (Shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


const circle = new Shape();
Shape.setColor("green");
expect (Shape.render()).toEqual('<circle cx="25" cy="75" r="20"/>')
{/* <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
<ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/> */}

const square = new Shape();
Shape.setColor("yellow");
expect (Shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="yellow" />');



// class Circle extends Shape  {
// constructor (type, color, ){
//     super()
// }

// }
// const circle = new Shape('circle', 'green');
// const triangle = new Shape('triangle', 'pink');
// const square = new Shape('square', 'yellow');

circle.createShape();
triangle.createShape();
square.createShape();





module.exports = shapes;