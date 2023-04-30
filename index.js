// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0','N/A'],
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
  ];

// // TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((responses) => {
    const Markdown =  generateMarkdown(responses);
    writeToFile('./utils/README.md', Markdown)
  });
}

// TODO: Create a function to write README file
function writeToFile(filename, data) {
  fs.writeFile(filename, data, function(err) {
    if(err) {
      return console.error(err);
    }else{
      console.log("Success! A README.md file was created.");
    }
  });
}

// // Function call to initialize app
init();
