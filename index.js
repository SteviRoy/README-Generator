// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage instructions:',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Provide contribution credits:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const {
    title,
    description,
    installation,
    usage,
    contributing,
    tests,
    license,
    username,
    email,
  } = data;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
