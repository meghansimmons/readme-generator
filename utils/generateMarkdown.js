// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadge = [
  '![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)', '![Apache License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
  '![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    ];


const licenseLink = [
  '(https://choosealicense.com/licenses/mit/)', '(https://choosealicense.com/licenses/apache-2.0/)',
  '(https://choosealicense.com/licenses/gpl-3.0/)'
];

// const chosenLicense = data.license;
// renderLicenseBadge();

// // renderLicenseBadge(license);
// function renderLicenseBadge(chosenLicense) {
  // if(chosenLicense == license[0])
  //   licenseLinkPrint = licenseBadge[0];
  // }else {
  //   licenseLinkPrint = licenseBadge[2];
  // }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// function renderLicenseSection(license) {}


//function generateMarkdown generates a markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  ${licenseBadge[2]}
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#test)
  * [Questions](#questions)
   
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  This application is covered under the [${data.license}]${licenseLink[2]}.
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.test}
  ## Questions
  Please contact me with any additional questions at[${data.email}](mailto:${data.email})\n
  Please visit my GitHub profile [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
