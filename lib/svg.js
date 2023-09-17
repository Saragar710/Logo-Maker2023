//text element and color elemennt
class SVG {
    constructor() {
         // if (this. === shape) {
        //     throw new Error('Shape is an abstract class and cannot be instantiated.');
        // }
       
        this.textEl = "";
        this.shapeEl = "";
        this.shapeColor = "";
    }
    render() {

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/">
        ${this.shapeEl} ${this.textEl}</svg> `;
       
        
    }
    setText(message, color) {
        if(message.length > 3) {
            throw new Error ('Too many characters')
        }
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`
    }
    setShape(shape) {
        this.shapeEl = shape.render()
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor.render()
    }
   
}
module.exports = SVG