const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
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
    name: 'contributions',
    message: 'Provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Provide credits:',
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

// function to write README file
function writeToFile(fileName, data) {
  const {
    title,
    description,
    installation,
    usage,
    contributions,
    credits,
    tests,
    license,
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
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contributions

${contributions}

## Credits

${credits}

## Tests

${tests}

## License

This project is licensed under the ${license} license.

## Questions

If you have any questions, please feel free to reach out to me via email (${email}) or visit my [GitHub profile](https://github.com/${username}).`;

  fs.writeFile(fileName, contents, (err) =>
    err ? console.error(err) : console.log('README file generated!')
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile('README.md', data);
  });
}

// function call to initialize program
init();
