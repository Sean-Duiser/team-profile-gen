const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const siteGenerator = require('./src/site-generator.js');
const myTeam = [];

const managerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Team Manager\'s name?',
                name: 'managerName',
            },
            {
                type: 'input',
                message: 'Please enter the Team Manager\'s employee ID.',
                name: 'managerID',
            },
            {
                type: 'input',
                message: 'Please enter the Team Manager\'s email address.',
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: 'Please enter the Team Manager\'s office number.',
                name: 'managerOffice',
            },
        ])
        .then(response => {
            const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice);
            myTeam.push(manager);
            promptMain();
        })
};

const promptMain = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do next?',
                name: 'addOrFinish',
                choices: ['Add an Engineer', 'Add an Intern', 'Finish Building My Team']
            }])
        .then(userSelection => {
            switch (userSelection.addOrFinish) {
                case 'Add an Engineer':
                    engineerPrompt();
                    break;
                case 'Add an Intern':
                    internPrompt();
                    break;
                case 'Finish Building My Team':
                    assembleTeam();
                    break;
            }
        });
};

const engineerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Engineer\'s name?',
                name: 'engineerName'
            },
            {
                type: 'input',
                message: 'Please enter the Engineer\'s employee ID.',
                name: 'engineerID'
            },
            {
                type: 'input',
                message: 'Please enter the Engineer\'s email address.',
                name: 'engineerEmail'
            },
            {
                type: 'input',
                message: 'Please enter the Engineer\'s gitHub username.',
                name: 'gitHub'
            }])
        .then(response => {
            const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.gitHub);
            myTeam.push(engineer);
            promptMain();
        })
};

const internPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the Intern\'s name?',
                name: 'internName'
            },
            {
                type: 'input',
                message: 'Please enter the Intern\'s employee ID.',
                name: 'internID'
            },
            {
                type: 'input',
                message: 'Please enter the Intern\'s email address.',
                name: 'internEmail'
            },
            {
                type: 'input',
                message: 'Please enter the Intern\'s school.',
                name: 'school'
            }])
        .then(response => {
            const intern = new Intern(response.internName, response.internID, response.internEmail, response.school);
            myTeam.push(intern);
            promptMain();
        })
};

const assembleTeam = (fileName, data) => {
    fs.writeFile('./dist/page.html', siteGenerator(myTeam), (err) => {
        err ? console.error(err) : console.log('success!')
    });
};

managerPrompt();