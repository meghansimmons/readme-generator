// constants for badge and link information for licenses
const mitLicenseBadge = "![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)";
const apacheLicenseBadge = "![Apache License](https://img.shields.io/badge/license-Apache_2.0-blue.svg)";
const gplv3LicenseBadge = "![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)";
const arrayLicenseBadge = [mitLicenseBadge, apacheLicenseBadge, gplv3LicenseBadge, ""];

const mitLicenseLink = "(https://choosealicense.com/licenses/mit/)";
const apacheLicenseLink = "(https://choosealicense.com/licenses/apache-2.0/)";
const gplv3LicenseLink = "(https://choosealicense.com/licenses/gpl-3.0/)";
const arrayLicenseLink = [mitLicenseLink, apacheLicenseLink, gplv3LicenseLink, ""];

const arrayLicense = ["MIT License", "Apache License 2.0", "GNU General Public License v3.0", "N/A"];

// function renderLicenseBadge returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  for(let i = 0; i < arrayLicense.length; i++){
    if(license == arrayLicense[i]){
      return arrayLicenseBadge[i];
    }
  }
}
// function renderLicenseLink returns the license link for license passed in
function renderLicenseLink(license) {
  for(let i = 0; i < arrayLicense.length; i++){
    if(license == arrayLicense[i]){
      return arrayLicenseLink[i];
    }
  }
}

// function renderLicenseSection returns a message with the license name and link to the license section of the README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  for(let i = 0; i < arrayLicense.length; i++){
    if(license == arrayLicense[3]){
      return "";
    }else{
      return `This application is covered under the [${license}]`;
    }
  }
}

//function generateMarkdown generates a markdown file for a README with user input from the integrated terminal
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
   
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}${renderLicenseLink(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.test}
  ## Questions
  Please contact me with any additional questions at [${data.email}](mailto:${data.email})\n
  Please visit my GitHub profile [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
