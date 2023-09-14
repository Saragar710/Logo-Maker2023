// function createShape()

class Shapes {
    constructor(shapeColor, text, shape) {
         // if (this. === shape) {
        //     throw new Error('Shape is an abstract class and cannot be instantiated.');
        // }
        this.shapeColor = shapeColor;
        this.text = text;
        this.shape = shape;
    }

    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    render() {

        return `<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
        ${this.shape}
         <text x="10" y="0" class="small">${this.text}</text>
        </svg> `;
    }
}

class Triangle extends Shapes {

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`;
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}

// const triangle = new Triangle();
// triangle.setColor("blue");
// expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// const circle = new Circle();
// circle.setColor("green");
// expect(circle.render()).toEqual('<circle cx="25" cy="75" r="20" fill="green" />');

// const square = new Square();
// square.setColor("yellow");
// expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="yellow" />');
// class Shape {
//     constructor(type, color) {
//         this.type = type,
//         this.color = color,



//     showCreateShape() {
//        console.log(`The shape you choose is ${this.type} ${this.color} `);
//     }
//     }
// }

// const triangle = new Shape();
// Shape.setColor("blue");
// expect (Shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


// const circle = new Shape();
// Shape.setColor("green");
// expect (Shape.render()).toEqual('<circle cx="25" cy="75" r="20"/>')
// {/* <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
// <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/> */}

// const square = new Shape();
// Shape.setColor("yellow");
// expect (Shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="yellow" />');



// class Circle extends Shape  {
// constructor (type, color, ){
//     super()
// }

// }
// const circle = new Shape('circle', 'green');
// const triangle = new Shape('triangle', 'pink');
// const square = new Shape('square', 'yellow');

// circle.createShape();
// triangle.createShape();
// square.createShape();





module.exports = { Shapes, Circle, Triangle, Square }