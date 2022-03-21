const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the Team Manager\'s name?',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is the Team Manager\'s employee ID?',
            name: 'managerID',
        },
        {
            type: 'input',
            message: 'What is the Team Manager\'s email address?',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'What is the Team Manager\'s office number?',
            name: 'managerOffice',
        },
        {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'addOrFinish',
            choices: [
                { name: 'Add an Engineer', value: 'add engineer' },
                { name: 'Add an Intern', value: 'add intern' },
                { name: 'Finish Building My Team', value: 'finish building' },
            ]
        },
    ])
    .then((response) =>
        response.confirm === response.password
            ? console.log('Success!')
            : console.log('You forgot your password already?!')
    );
