const fs = require('fs');

//Parent Class for shapes
class Shape {
    constructor(initials, textColor, shapeColor) {
        super(initials, textColor, shapeColor);
        this.initials = initials;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    };
};

//Triangle, child of Shape
class Triangle extends Shape {
    constructor(initials, textColor, shapeColor) {
        super(initials, textColor, shapeColor);
    };
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>
        </svg>
        `
    }
};

//Cirle, child of Shape
class Circle extends Shape {
    constructor(initials, textColor, shapeColor) {
        super(initials, textColor, shapeColor);
    };
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>
        </svg>
        `
    }
};

//Square, child of Shape
class Square extends Shape {
    constructor(initials, textColor, shapeColor) {
        super(initials, textColor, shapeColor);
    };
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="${this.shapeColor}" />
            <text x="150 y="125" font=size="60" text-anchor="middle" fill="${this.shapeColor}">${this.initials}</text>
        </svg>
        `
    }
    
};


function generateShape(response) {
    let finalShape;
    // switch(response.Shape) {
        
    // }
}

// module.exports = { Triangle, Circle, Square };