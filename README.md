# Note Taker Using Express

![badge](https://img.shields.io/badge/License-mit-blue)

## Overview

As a user, I want to be able to write and save notes. I also want to be able to delete notes I've written before, so
that I can organize my thoughts and keep track of tasks I need to complete.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Deployed](#deployed)
- [Tools](#tools)
- [Research](#research)
- [Questions](#questions)
- [License](#license)

## Description

To dynamically and quickly create notes data, Express and Heroku were utilized to:

- Serve and display a working data base.
- The user's input was gathered and added as notes which can be deleted.

## Installation

1. Create a .gitignore file and include node_modules and .DS store. This ensures that the node_modules directory isn't
   tracked or uploaded to GitHub.
2. Use the command-line, npm install, to install Express.
3. To start saving notes with Express, use the command, node server.js.

## Usage

- Inquirer NPM is used to prompt the user to provide information regarding their employee teams to create their HTML
  pages.
- fs.writeFile is used to render the HTML.
- Once the user's information regarding:
  - name, id, email, member's role, then subsequent user role questions are served:
  - Manager - office, Engineer - Github Username, and Intern - school name.
- An HTML file with the user's reponses regarding their team is created.

## Test

![Screenshot of Passed Jest Test](./test.jpg)

## Deployed

- \*[Deployed website](https://blooming-inlet-06982.herokuapp.com/)
- \*[GitHub Repository](https://github.com/Kay0s/ExpressNoteTaker)

### Screenshot of Inquirer Questions Code

![Screenshot of Inquirer Questions Code](./codeScreenshot.jpg)

## Tools

- JavaScript
- .gitignore
- Git Bash
- Heroku
- Express

## Research

- [Inquirer.js - NPM](https://www.npmjs.com/package/inquirer)

## Questions

- [Email](hamilton.kristina@gmail.com)
- [GitHub Profile](https://github.com/Kay0s)
- [GitHub Repository](https://github.com/Kay0s/https://github.com/Kay0s/TeamGenerator)

## License

![badge](https://img.shields.io/badge/License-mit-blue)

© 2020 Kristina Hamilton and Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved. Permission is hereby
granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
