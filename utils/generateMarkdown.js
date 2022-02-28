// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'No License Required') {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'No License Required') {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License Required') {
    return `This application is covered under the following license: 
    ${renderLicenseLink(license)}
    `;
  } else {
    return '';
  }
};

function renderLicenseInfo(license) {
  if (license !== 'No License Required') {
    return `[License](#license)`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * ${renderLicenseInfo(data.license)}
  * [Badges](#badges)
  * [Credits](#credits)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions) 

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Badges
  ${data.badges}

  ## Credits
   ${data.credits}

  ## Contributing
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
  ${data.contributing}


  ## Tests
  ${data.tests}

  ## Questions
  Feel free to reach out to me for questions or contributions: 
  
  [GitHub](https://github.com/${data.username})
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
