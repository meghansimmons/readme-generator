// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
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
      message: 'What commands should be run to install the project?',
    },

    {
      type: 'input',
      name: 'test',
      message: 'What command should be used to run tests?',
    },

    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repo?',
    },

    {
      type: 'input',
      name: 'contributing',
      message: 'What does the user need to know about contributing to the repo?',
    },

    {
      type: 'list',
      name: 'license',
      message: 'What license should your project have?',
      choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0','N/A'],
    },

    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    }
  ];

// function init() prompts the user for information about the project in the integrated terminal
// the answers are sent to the generateMarkdown function in the generateMarkdown.js file
// the resuls from the generatedMarkdown.js file are returned and used in the call to the writeToFile function
function init() {
  inquirer
  .prompt(questions)
  .then((responses) => {
    const Markdown =  generateMarkdown(responses);
    writeToFile('README.md', Markdown)
  });
}

// the writeToFile function writes the data to a new README.md file in the project's root directory
// an error message or a sucess message will appear in the console log
function writeToFile(filename, data) {
  fs.writeFile(filename, data, function(err) {
    if(err) {
      return console.error(err);
    }else{
      console.log("Success! A README.md file was created.");
    }
  });
}

// Calls the function init() after the index.js is run in the integrated terminal
init();
