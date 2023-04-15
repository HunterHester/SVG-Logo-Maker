const inquirer = require('inquirer');

//prompt user for questions regarding logo creation
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'initials',
            message: 'Enter initials for logo:',
            validate: value => value.length > 3 ? 'Initials must contain no more than 3 characters' : true
        },
        {
            type: 'input',
            name: 'textcolor',
            message: 'Enter a color keyword (OR a hexadecimal number) for logo text color:'
            //requires regex validation
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: [
                'circle',
                'triangle',
                'square'
            ]
        },
        {
            type: 'input',
            name: 'shapecolor',
            message: 'Enter a color keyword (OR a hexadecimal number) for shape color:'
            //requires regex validation
        }
    ])

    .then((answers) => {
        console.log(answers)
    })
}

promptUser()