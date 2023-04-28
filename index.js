// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [];


const generateREADME = ({ title, description, installation, usage, license, contributing, test, github, email }) =>
`# ${title}
## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#test)
* [Questions](#questions)

## Installation
${installation}
## Usage
${usage}
## License
${license}
## Contributing
${contributing}
## Tests
${test}
## Questions
${github}
${email}
`;

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
    },
      
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
    },

    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['MIT License', 'Apache License v2.0', 'GNU General Public License v3.0'],
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    }
  ])
//   .then((response) =>
//     response.github === response.email
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );

  .then((data) => {
    const readmePageContent = generateREADME(data);
    fs.writeFile('practice.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created practice.md!')
    );
  });



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// function writeToFile("newREADME.md", data, (err) => {
//     if(err){
//         console.log(err)
//     }
//     console.log("Your README has been generated!");
// });


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
