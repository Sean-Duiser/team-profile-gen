const assembleTeam = (team) => {
    const profilePage = [];

    const createManager = manager => {
        let managerCard = `
        <div class="managerCard">
            <div class="managerHeader">
            ${manager.name}</div>
            <ul class="managerList">
            <li class="managerListItem">ID: ${manager.id}</li>
            <li class="managerListItem">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class = "managerListItem">Office Number: ${manager.managerOffice}</li>
            </ul>
        </div>
        `;
        profilePage.push(managerCard);
    };
    const createEngineer = engineer => {
        let engineerCard = `
        <div class="engineerCard">
            <div class="engineerHeader">
            ${engineer.name}</div>
            <ul class="engineerList">
            <li class="engineerListItem">ID: ${engineer.id}</li>
            <li class="engineerListItem">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class = "engineerListItem">GitHub: ${engineer.gitHub}</li>
            </ul>
        </div>
        `;
        profilePage.push(engineerCard);

    };
    const createIntern = intern => {
        let internCard = `
        <div class="internCard">
            <div class="internHeader">
            ${intern.name}</div>
            <ul class="internList">
            <li class="internListItem">ID: ${intern.id}</li>
            <li class="internListItem">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class = "internListItem">School: ${intern.school}</li>
            </ul>
        </div>
        `;
        profilePage.push(internCard);

    };

    for (let i = 0; i < team.length; i++) {
        if (team[i].getPosition() === "Manager") {
            createManager(team[i]);
        };
        if (team[i].getPosition() === "Engineer") {
            createEngineer(team[i]);
        };
        if (team[i].getPosition() === "Intern") {
            createIntern(team[i]);
        };
    }

    return profilePage.join('');
};

module.exports = team => {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    
        <main>${assembleTeam(team)}</main>
    
    </body>
    </html>
    `;
}