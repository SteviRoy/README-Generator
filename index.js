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
