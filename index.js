// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub Username.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter a valid email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You need to enter a project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Provide instruction on how to install the project:',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide instalation instructions!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What language was used to create this project: (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide exmaples showcasing how this program can be used:',
    },
    {
        type: 'checkbox',
        name: 'License',
        message: 'Specify the license(s) on your project (More than one can apply)',
        choices: ['Apache', 'GNU GPLv3', 'MIT', 'ISC', 'GNU GPLv2 (or later)', 'No License Required',]
    },
    {
        type: 'input',
        name: 'Credit',
        message: 'If applicable, mention the people who helped you with this project.',
    },
    {
        type: 'input',
        name: 'Contribute',
        message: 'Let people know how they can contribute to your project!',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Provide any tests written for your project and showcase how they are used.',
    },
    {
        type: 'input',
        name: 'Badges',
        message: 'Add all applicable badges to your README',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./dist/generated-README.md", data, err => {
        if (err) {
            return console.log(err)
        } else {
            console.log("Your README has been generated!");
        }
    });
};

//Function to initialize
function init() {

    //Prompt to call inquirer
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

// Function call to initialize app
init();

