const promptUser = require('./lib/userPrompt.js');
const generateShape = require('./lib/generateShape.js');
const fs = require('fs');
const file = "./examples/example.svg"

function createFile(response) {
    const svg = generateShape(response);
    console.log('generating shape and creating file');
    console.log(svg)
    fs.writeFile(file, svg, () => console.log('Generated SVG file.'));
}


const init = () => {
    promptUser()
        .then((response) => {
            console.log("input check");
            createFile(response)
        })
        .catch(err => {
            console.log(err)
        });
}

init();