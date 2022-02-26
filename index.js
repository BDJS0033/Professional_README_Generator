// TODO: Include packages needed for this application
const fs = require ('fs');
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
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
  },
  {
    type: 'input',
    name: 'about',
    message: 'Provide some information about yourself:',
    when: ({ confirmAbout }) => confirmAbout
  },
  {
      type:'input',
      name:'What is the name of your poject?',
      message:'Project Title',
  },
  {
    type:'input',
    name:'',
    message:'',
    default: ''
  },
  {
    type:'input',
    name:'',
    message:'',
    default: ''
  },
  {
    type:'input',
    name:'',
    message:'',
    default: ''
  },
  {
    type: 'checkbox',
    name: 'languages',
    message: 'What did you this project with? (Check all that apply)',
    choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
  },
];
// TODO: Create a function to write README file
function init() {

// TODO: Create a function to initialize app
    inquirer.prompt(questions)
    .then((generateMarkdown, data) => {
        console.log("Making ReadME");
        fs.writeFileSync( generateMarkdown, data);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
