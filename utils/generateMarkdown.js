// TODO: Create a function that returns a license badge based on which license is passed in

const { default: CheckboxPrompt } = require("inquirer/lib/prompts/checkbox");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseChosen = Response.license
  let licenceBadge = '';

  if (licenseChosen === 'Apache 2.0'){
    licenceBadge = `$[![Apache License](https://img.shields.io/badge/License-Apache%202.0-red )]`
  } else if(licenseChosen === 'Eclipse Public') {
    licenceBadge = `$[![Eclipse License](https://img.shields.io/badge/License-Eclipse%20Public-yellow )]`
  } else if (licenseChosen === 'MIT'){
    licenceBadge = `$[![MIT license](https://img.shields.io/badge/License-MIT-green)]`
  }
   //Apache: https://img.shields.io/badge/License-Apache%202.0-red 
  //Eclipse: https://img.shields.io/badge/License-Eclipse%20Public-yellow 
  //MIT https://img.shields.io/badge/License-MIT-green 
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // generate Table of Contents based in user input
  let draftToCon = `## Table of Contents`;

  if (data.npminstall !== ''){ draftToCon += `
  * [Installation](#npminstall)`};

  return `# Project Title 🗂: ${data.title}

  ## Contact information 📮:
  Contact the Developer of this project via
  * GitHub: ${data.github}
  * email: ${data.email}
  
  ## Description 📜 
  Brief overview: 
  * ${data.description}
  
  ## License 🪪 and badge 🛡
  The ${data.liscence} liscence has been selected for this project.
  
  ## Motivation 💪🏻
  We built this project ${data.motivation}
  
  ## What problem does it solve 🤷🏼? 
  * //problem data.problem

  ## Installation 🛠
  Follow these simple step-by-step instructions for installing the project code. 
  1) Open in Terminal ${data.installT} OR
      Open in VS Code terminal ${data.installVs}
  2) Type in the installer code: npm install ${data.npminstall}

  ## Usage 🥡🥢
  You can use this repository and code by: 
  * ${data.usage}

  ## Links 💻 
  Insert any links that you have used in this project:
  * https:// ${data.links}

  ## Tests 🧪⚗️🧑🏾‍🔬
  Tests that have been carried out on this project are:
  * ${data.tests}
  
  ## Contributing 💃🏻🕺🏼 
  You can contribute to this repository by ${data.contribute}
  
  ## Further Issues 🚨
  Any issues with this repository please contact the repository owner via email at ${data.email}.
  
  
  #### This README file has been generated by FeedTheRead 🥙😋🗒 created by Adela Kobic 🙋🏻‍♀️
`;
}

module.exports = generateMarkdown;
