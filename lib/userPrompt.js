const inquirer = require('inquirer');
const { hexRegex, svgColorNames } = require('./colorValid.js');


//prompt user for questions regarding logo creation
const promptUser = () => {
    return new Promise((resolve, reject) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'initials',
                message: 'Enter initials for logo:',
                validate: value => value.length > 3 ? 'Initials must contain no more than 3 characters' : true
            },
            {
                type: 'list',
                name: 'textcolorChoice',
                message: 'Select your input for the text color:',
                choices: [
                    'hexadecimal',
                    'color name'
                ],
            },
            {
                type: 'input',
                name: 'textColor',
                message: "Enter color in hexadecimal (#FFFFFF):",
                when: (value) => {
                    if(value.textcolorChoice == 'hexadecimal') {
                        return true;
                    }
                    return false;
                },
                validate: value => !value.match(hexRegex) ? 'Error! Enter a valid hexadecimal (#FFFFFF)' : true
            },
            {
                type: 'input',
                name: 'textColor',
                message: "Enter a text color:",
                when: (value) => {
                    if(value.textcolorChoice == 'color name') {
                        return true
                    }
                    return false
                },
                validate: (value) => {
                    let cleanValue = value.trim().toLowerCase();
                    for(const color of svgColorNames) {
                        if (color === cleanValue) {
                            return true
                        }
                    }
                    return 'Please enter a valid color keyword'
                }
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: [
                    'Circle',
                    'Triangle',
                    'Square'
                ]
            },
            {
                type: 'list',
                name: 'shapecolorChoice',
                message: 'Select your input for the shape color:',
                choices: [
                    'hexadecimal',
                    'color name'
                ],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: "Enter color in hexadecimal (#FFFFFF):",
                when: (value) => {
                    if(value.shapecolorChoice == 'hexadecimal') {
                        return true;
                    }
                    return false;
                },
                validate: value => !value.match(hexRegex) ? 'Error! Enter a valid hexadecimal (#FFFFFF)' : true
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: "Enter a shape color:",
                when: (value) => {
                    if(value.shapecolorChoice == 'color name') {
                        return true
                    }
                    return false
                },
                validate: (value) => {
                    let cleanValue = value.trim().toLowerCase();
                    for(const color of svgColorNames) {
                        if (color === cleanValue) {
                            return true
                        }
                    }
                    return 'Please enter a valid color keyword';
                }
            }
        ])
        .then((response) => {
            console.log('!!!!!')
            console.log(response)
            console.log('!!!!!')
            resolve(response);
            

        })
    })    


}

// console.log(svgColorNames);

module.exports = promptUser;

