//  packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown') //path

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter your project title',
        },

         {   
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username?',
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project in a brief sentance.',
            
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select the license for you project',
            choices: ['Apache 2.0', 'Eclipse Public', 'MIT']
            // add badge to the license 
        },
        {
            type: 'list',
            name: 'motivation',
            message: 'Motivation: we built this project to: (please choose 1)',
            choices: ['to solve a problem' , 'to improve an existing app/ website', 'to create/try something new'],
        },
        {
            type: 'checkbox',
            name: 'problem',
            message: 'What problem does your project solve?',
            choices: ['a real world problem', 'a User Experience issue', 'a User Interface issue', 'something else'],

        },
        {
            type: 'confirm', // y/N ?
            name: 'installT',
            message: 'Installation: open in Terminal? (y/N)',
        },
        {
            type: 'input',
            name: 'installVs',
            message: 'Installation: open in VSCode',
        },
        {
            type: 'input',
            name: 'npminstall',
            message: 'Type in the installer code', //add placeholder for 'npm install'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter how the user can use this repository',
        },
        {
            type: 'input',
            name: 'links',
            message: 'Please paste in any links relevat to your project',
        },
        {
            type: 'checkbox',
            name: 'contribute',
            message: 'Contributing: How can developrs contribute to the repository?',
            choices: ['fork and Git pull request', 'email the repo owner', 'send a pigeon'],
        }
    ])
    .then((response) => {
        console.log(response);
        const string = generateMarkdown(response);
        fs.writeFile("README.md", string, (err) =>
            err ? console.error(err) : console.log("Your README has been created!")
        );
    });

}

// Function call to initialize app
init();
