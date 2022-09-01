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
            validate: function (answer){
                if (answer.length < 1) {
                    return console.log("A valid GitHub Username must be entered.");
                }
                return true;
            }            
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address',
            validate: function (answer){
                if (answer.length < 1){
                    return console.log("A valid email must be entered.");
                }
                return true;
            }
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
            choices: ['Apache', 'Eclipse Public', 'MIT'],
            // add badge to the license 
        },
        {
            type: 'list',
            name: 'motivation',
            message: 'Motivation: we built this project to: (please choose 1)',
            choices: ['to solve a problem.' , 'to improve an existing app/ website.', 'to create/try something new.'],
        },
        {
            type: 'list',
            name: 'problem',
            message: 'What problem does your project solve?',
            choices: ['a real world problem.', 'a User Experience issue.', 'a User Interface issue.', 'something else.'],

        },
        {
            type: 'confirm', // y/N ? - need an if/Or?? as returning True or false in REadME
            name: 'installT',
            message: 'Installation: open in Terminal?',
            validate: async (input) =>{
                if (input == 'y'){
                    return('Yes');
                } else {
                    return 'No';
                }
                return true;
            }
        },
        {
            type: 'confirm', //y/N ?
            name: 'installVs',
            message: 'Installation: open in VSCode?',
        },
        {
            type: 'input',
            name: 'npminstall',
            message: 'Type in the installer code: ', //add placeholder for 'npm install'
            default:'npm install',

        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter how the user can use this repository',
        },
        {
            type: 'input',
            name: 'links',
            message: 'Please paste in any links relevant to your project',
            default: 'https://',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'If applicable tell us about any tests that have been run on this project.',

        },
        {
            type: 'list',
            name: 'contribute',
            message: 'Contributing: How can developrs contribute to the repository?',
            choices: ['fork and Git pull request', 'email the repo owner', 'sending a pigeon'],
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
