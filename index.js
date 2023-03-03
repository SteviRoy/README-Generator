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
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'list',
    name: 'features',
    message: 'List features your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const {
    title,
    description,
    installation,
    usage,
    credits,
    license,
    features,
    tests,
    username,
    email,
  } = data;

  const licenseBadge =
    license === 'MIT'
      ? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      : '';
      const contents = `# ${title}

      ${licenseBadge}
      
      ## Description
      
      ${description}
      
      ## Table of Contents
      
      - [Installation](#installation)
      - [Usage](#usage)
      - [Credits](#credits)
      - [License](#license)
      - [Features](#features)
      - [Tests](#tests)
      - [Questions](#questions)
      
      ## Installation
      
      ${installation}
      
      ## Usage
      
      ${usage}
      
      ## Credits
      
      ${credits}
      
      ## License
      
      This project is licensed under the ${license} license.
      
      ## Features
      
      ${features}
      
      ## Tests
      
      ${tests}
      
      ## Questions/Contribute
      
      If you have any questions or want to contribute, please feel free to reach out to me via email (${email}) or visit my [GitHub profile](https://github.com/${username}).`;

      fs.writeFile(fileName, contents, (err) =>
    err ? console.error(err) : console.log('README file generated!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile('README.md', data);
  });
}

// Function call to initialize app
init();
