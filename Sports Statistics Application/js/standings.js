let teamData;
teamData = JSON.parse(localStorage.getItem('teams'))

let groupA = [];
let groupB = [];
let groupC = [];
let groupD = [];

let descendingA = true;
let descendingB = true;
let descendingC = true;
let descendingD = true;

let button = document.querySelector('.button')
button.addEventListener('click', () => {
    handleButtonClick();
})

/*creates a form and sets text properly on button click*/
function handleButtonClick() {
    let container = document.querySelector('.for-form')
    if (button.classList.contains('inactive')) {
        button.classList.remove('inactive')
        button.classList.add('active')
        button.textContent = "Remove Game"
        let form = document.createElement('div')
        form.classList.add('form')
        container.appendChild(form)
        let columns = document.createElement('div')
        columns.classList.add('columns')
        columns.classList.add('is-mobile')
        form.appendChild(columns)

        let columnOne = document.createElement('div')
        columnOne.classList.add('column')
        columnOne.classList.add('is-half')
        let fieldOne = document.createElement('div')
        fieldOne.classList.add('field')
        let labelOne = document.createElement('label')
        labelOne.classList.add('label')
        labelOne.textContent = "Group";
        let controlOne = document.createElement('div')
        controlOne.classList.add('control')
        let inputOne = document.createElement('input')
        inputOne.classList.add('input')
        inputOne.classList.add('group')
        inputOne.type = "text"
        inputOne.placeholder = "A, B, C, D"

        columns.appendChild(columnOne)
        columnOne.appendChild(fieldOne)
        fieldOne.appendChild(labelOne)
        labelOne.appendChild(controlOne)
        labelOne.appendChild(inputOne)

        let columnTwo = document.createElement('div')
        columnTwo.classList.add('column')
        columnTwo.classList.add('is-half')
        let fieldTwo = document.createElement('div')
        fieldTwo.classList.add('field')
        let labelTwo = document.createElement('label')
        labelTwo.classList.add('label')
        labelTwo.textContent = "Team 1";
        let controlTwo = document.createElement('div')
        controlTwo.classList.add('control')
        let inputTwo = document.createElement('input')
        inputTwo.classList.add('input')
        inputTwo.classList.add('team1')
        inputTwo.type = "text"
        inputTwo.placeholder = "Pick a team from chosen group"

        columns.appendChild(columnTwo)
        columnTwo.appendChild(fieldTwo)
        fieldTwo.appendChild(labelTwo)
        labelTwo.appendChild(controlTwo)
        labelTwo.appendChild(inputTwo)

        let columns2 = document.createElement('div')
        columns2.classList.add('columns')
        columns2.classList.add('is-mobile')
        form.appendChild(columns2)

        let columnThree = document.createElement('div')
        columnThree.classList.add('column')
        columnThree.classList.add('is-half')
        let fieldThree = document.createElement('div')
        fieldThree.classList.add('field')
        let labelThree = document.createElement('label')
        labelThree.classList.add('label')
        labelThree.textContent = "Team 2";
        let controlThree = document.createElement('div')
        controlThree.classList.add('control')
        let inputThree = document.createElement('input')
        inputThree.classList.add('input')
        inputThree.classList.add('team2')
        inputThree.type = "text"
        inputThree.placeholder = "Pick a team from chosen group"

        columns2.appendChild(columnThree)
        columnThree.appendChild(fieldThree)
        fieldThree.appendChild(labelThree)
        labelThree.appendChild(controlThree)
        labelThree.appendChild(inputThree)

        let columnFour = document.createElement('div')
        columnFour.classList.add('column')
        columnFour.classList.add('is-half')
        let fieldFour = document.createElement('div')
        fieldFour.classList.add('field')
        let labelFour = document.createElement('label')
        labelFour.classList.add('label')
        labelFour.textContent = "Day";
        let controlFour = document.createElement('div')
        controlFour.classList.add('control')
        let inputFour = document.createElement('input')
        inputFour.classList.add('input')
        inputFour.classList.add('day')
        inputFour.type = "text"
        inputFour.placeholder = "1 - 8"

        columns2.appendChild(columnFour)
        columnFour.appendChild(fieldFour)
        fieldFour.appendChild(labelFour)
        labelFour.appendChild(controlFour)
        labelFour.appendChild(inputFour)

        let columnFive = document.createElement('div')
        columnFive.classList.add('column')
        let fieldFive = document.createElement('div')
        fieldFive.classList.add('field')
        let labelFive = document.createElement('label')
        labelFive.classList.add('label')
        labelFive.textContent = "Winner";
        let controlFive = document.createElement('control')
        controlFive.classList.add('control')
        let divFive = document.createElement('div')
        divFive.classList.add('select')
        let select = document.createElement('select')
        select.classList.add('select-options')
        let option1 = document.createElement('option')
        option1.textContent = "Team 1"
        let option2 = document.createElement('option')
        option2.textContent = "Team 2"

        form.appendChild(fieldFive)
        fieldFive.appendChild(labelFive)
        fieldFive.appendChild(controlFive)
        controlFive.appendChild(divFive)
        divFive.appendChild(select)
        select.appendChild(option1)
        select.appendChild(option2)

        let fieldSix = document.createElement('div')
        fieldSix.classList.add('field')
        fieldSix.classList.add('is-grouped')
        let controlSix = document.createElement('div')
        controlSix.classList.add('control')
        let buttonSix = document.createElement('button')
        buttonSix.classList.add('button')
        buttonSix.classList.add('is-link')
        buttonSix.onclick = function () { handleFormClick() }
        buttonSix.textContent = "Submit"

        form.appendChild(fieldSix)
        fieldSix.appendChild(controlSix)
        controlSix.appendChild(buttonSix)
        button.classList.remove('inactive')
        button.classList.add('active')
    } else {
        container.replaceChildren();
        button.textContent = "Add Game"
        button.classList.remove('active')
        button.classList.add('inactive')
    }
}

/*adds a game to local storage and updates tables when submit is clicked on the form*/
/*will check for validity*/
function handleFormClick() {
    let group = document.querySelector('.group').value.toUpperCase();
    let team1 = document.querySelector('.team1').value.toUpperCase();
    let team2 = document.querySelector('.team2').value.toUpperCase();
    let select = document.querySelector('.select-options')
    let option = select.options[select.selectedIndex]
    let win = option.value;
    let day = (+(document.querySelector('.day').value));
    if (group.length == 0 || team1.length == 0 || team2.length == 0 || day < 1 || day > 8 || !(Number.isInteger(day))) {
        alert("Please follow and fill all the fields")
        deleteInputs();
        return false
    }
    if (group.toUpperCase() === 'A') {
        if (checkGroupValidity(team1, team2, "A")) {
            let groupA = JSON.parse(localStorage.getItem('groupA'))
            determineGame(team1, team2, day, groupA, teamData, win, "A")
        } else {
            alert("Please Pick a team from Group A")
        }
    } else if (group === 'B') {
        if (checkGroupValidity(team1, team2, "B")) {
            let groupB = JSON.parse(localStorage.getItem('groupB'))
            determineGame(team1, team2, day, groupB, teamData, win, "B")
        } else {
            alert("Please Pick a team from Group B")
        }
    } else if (group === 'C') {
        if (checkGroupValidity(team1, team2, "C")) {
            let groupC = JSON.parse(localStorage.getItem('groupC'))
            determineGame(team1, team2, day, groupC, teamData, win, "C")
        } else {
            alert("Please Pick a team from Group C")
        }
    } else if (group === "D") {
        if (checkGroupValidity(team1, team2, "D")) {
            let groupD = JSON.parse(localStorage.getItem('groupD'))
            determineGame(team1, team2, day, groupD, teamData, win, "D")
        } else {
            alert("Please Pick a team from Group D")
        }
    } else {
        alert("Please enter a valid group")
    }
    deleteInputs();
    return true;
}

/*deletes inputs in the form after accepted or rejected*/
function deleteInputs() {
    const inputs = document.querySelectorAll('.input')
    inputs.forEach(input => {
        input.value = '';
    })
}

/*checks validity of the teams submitted*/
/*compares team1 and team2 to teams in their group*/
function checkGroupValidity(team1, team2, group) {
    if (group == "A") {
        if ((team1 === "T1" || team1 === "EDWARD GAMING" || team1 === "FNATIC" || team1 === "CLOUD 9") &&
            (team2 != team1 && (team2 === "T1" || team2 === "EDWARD GAMING" || team2 === "FNATIC" || team2 === "CLOUD 9"))) {
            return true;
        }
    } else if (group == "B") {
        if ((team1 === "JD GAMING" || team1 === "DWG KIA" || team1 === "EVIL GENIUSES" || team1 === "G2 ESPORTS") && (team2 != team1 &&
            (team2 === "JD GAMING" || team2 === "DWG KIA" || team2 === "EVIL GENIUSES" || team2 === "G2 ESPORTS"))) {
            return true;
        }
    } else if (group == "C") {
        if ((team1 === "DRX" || team1 === "ROGUE" || team1 === "TOP ESPORTS" || team1 === "GAM ESPORTS") &&
            (team2 != team1 && (team2 === "DRX" || team2 === "ROGUE" || team2 === "TOP ESPORTS" || team2 === "GAM ESPORTS"))) {
            return true;
        }
    } else if (group == "D") {
        if ((team1 === "GEN. G" || team1 === "ROYAL NEVER GIVE UP" || team1 === "CTBC FLYING OYSTER" || team1 === "100 THIEVES") &&
            (team2 != team1 && (team2 === "GEN. G" || team2 === "ROYAL NEVER GIVE UP" || team2 === "CTBC FLYING OYSTER" || team2 === "100 THIEVES"))) {
            return true;
        }
    }
    return false;
}

/*gets a team's id from their name*/
/*cycles through the group, sets a variable to a id when a teams name matches teamName*/
function IDFromName(teamName, group) {
    let id;

    group.forEach(team => {
        if (team.name.toUpperCase() === teamName) {
            id = team.id
        }
    })
    return id;
}

/*takes in the proper variables to make a game*/
function makeGame(day, ID, win, gameCounter) {
    let game = {
        'day': day,
        'opp': ID,
        'win': win,
        'type': 'normal',
        'id': gameCounter
    }
    return game;
}

/*calls previous functions to add a game to local storage and update table*/
function determineGame(team1, team2, day, group, teams, win, groupLetter) {
    let ID1 = IDFromName(team1, group)
    let ID2 = IDFromName(team2, group)
    let win1;
    let win2;
    let num;
    if (win === "Team 1") {
        win1 = true;
        win2 = false;
    } else {
        win1 = false;
        win2 = true;
    }
    if (groupLetter === 'A') {
        num = 0;
    } else if (groupLetter === "B") {
        num = 4;
    } else if (groupLetter === "C") {
        num = 8;
    } else if (groupLetter === "D") {
        num = 12;
    }
    let gameCounter = localStorage.getItem('gameCounter')
    gameCounter++;
    localStorage.setItem('gameCounter', gameCounter)
    let game1 = makeGame(day, ID2, win1, gameCounter)
    let game2 = makeGame(day, ID1, win2, gameCounter)

    group = group.sort((teamA, teamB) => {
        return (teamA.id < teamB.id) ? -1 : 1
    });

    for (let i = 0; i < group.length; i++) {
        if (team1 === group[i].name.toUpperCase()) {
            group[i].games.unshift(game1)
            teams[i + num].games.unshift(game1)
            let result = changeStreak(group[i], teams[i + num], win1)
            group[i] = result[0];
            teams[i + num] = result[1]
        } else if (team2 === group[i].name.toUpperCase()) {
            group[i].games.unshift(game2)
            teams[i + num].games.unshift(game2)
            let result = changeStreak(group[i], teams[i + num], win2)
            group[i] = result[0];
            teams[i + num] = result[1]
        }
    }
    group = sortGroupByWins(group);
    group = group.sort((teamA, teamB) => teamA.pos - teamB.pos)

    createTable(group, groupLetter)
    group = group.sort((teamA, teamB) => {
        return (teamA.id < teamB.id) ? -1 : 1
    });
    if (groupLetter === "A") {
        localStorage.setItem('groupA', JSON.stringify(group))
    } else if (groupLetter === "B") {
        localStorage.setItem('groupB', JSON.stringify(group))
    } else if (groupLetter === "C") {
        localStorage.setItem('groupC', JSON.stringify(group))
    } else if (groupLetter === "D") {
        localStorage.setItem('groupD', JSON.stringify(group))
    }
    localStorage.setItem('teams', JSON.stringify(teams))

}

/*changes the streakValue and streak of a team*/
function changeStreak(currGroup, team, win, index, num) {
    let group = currGroup;
    let teams = team;
    let i = index;
    if (win) {
        group.W++;
        teams.W++;
        if (group.streakValue > 0 && teams.streakValue > 0) {
            group.streakValue++;
            group.streak = group.streakValue + "W"
            teams.streakValue++;
            teams.streak = teams.streakValue + "W"
        } else {
            group.streakValue = 1;
            group.streak = group.streakValue + "W"
            teams.streakValue = 1;
            teams.streak = teams.streakValue + "W"
        }
    } else {
        group.L++;
        teams.L++;
        if (group.streakValue > 0 && teams.streakValue > 0) {
            group.streakValue = -1;
            group.streak = Math.abs(group.streakValue) + "L"
            teams.streakValue = -1;
            teams.streak = Math.abs(teams.streakValue) + "L"
        } else {
            group.streakValue--;
            group.streak = Math.abs(group.streakValue) + "L"
            teams.streakValue--;
            teams.streak = Math.abs(teams.streakValue) + "L"
        }
    }
    return [group, teams]
}

/*sorts a group by wins*/
/*sorts it by losses at the end in case there's the same amount of wins*/
function sortGroupByWins(group) {
    group = group.sort((teamA, teamB) => teamB.W - teamA.W)
    for (let i = 0; i < group.length; i++) {
        group[i].pos = i + 1;
    }
    for (let i = 0; i < group.length - 1; i++) {
        if (group[i].W == group[i + 1].W) {
            if (group[i].L > group[i + 1].L) {
                let pos = group[i].pos
                group[i].pos = group[i + 1].pos
                group[i + 1].pos = pos;
            }
        }
    }
    group = group.sort((teamA, teamB) => teamA.L - teamB.L)
    return group;
}

getGroups(teamData)

/*gets groups from localstorage and sets respective variables as them*/
function getGroups(teamData) {
    teamData.forEach((team) => {
        if (team.id.indexOf('GA') >= 0) {
            groupA.push(team);
        } else if (team.id.indexOf('GB') >= 0) {
            groupB.push(team);
        } else if (team.id.indexOf('GC') >= 0) {
            groupC.push(team);
        } else if (team.id.indexOf('GD') >= 0) {
            groupD.push(team)
        }
    })
}

createTable(groupA, 'A');
createTable(groupB, 'B')
createTable(groupC, 'C')
createTable(groupD, 'D')

/*creates table for a group*/
/*takes in an array of teams, and the letter of the group*/
function createTable(group, groupNum) {
    let tableBody;
    if (groupNum == 'A') {
        tableBody = document.querySelector('#groupA tbody')
    } else if (groupNum == 'B') {
        tableBody = document.querySelector('#groupB tbody')
    } else if (groupNum == 'C') {
        tableBody = document.querySelector('#groupC tbody')
    }
    else if (groupNum == 'D') {
        tableBody = document.querySelector('#groupD tbody')
    }
    tableBody.replaceChildren();
    group.forEach((team) => {
        const row = document.createElement('tr');
        row.classList.add('rows')
        let td = document.createElement('td');
        td.textContent = team.pos;
        row.appendChild(td);
        td = document.createElement('td')
        let img = document.createElement('img')
        img.src = team.logo
        img.classList.add('table-logo')
        td.appendChild(img)
        row.appendChild(td)
        td = document.createElement('td');
        td.classList.add('active')
        let link = document.createElement('a');
        link.href = 'matches.html?id=' + team.id; //brings to seperate teams page
        link.textContent = team.name;
        td.appendChild(link);
        row.appendChild(td)
        td = document.createElement('td')
        td.classList.add('hidden')
        let link1 = document.createElement('a')
        link1.href = 'matches.html?id=' + team.id //shows the shortened version when display gets smaller
        link1.textContent = team.shortname
        td.appendChild(link1)
        row.appendChild(td)
        td = document.createElement('td');
        td.textContent = team.W;
        row.appendChild(td)
        td = document.createElement('td');
        td.textContent = team.L;
        row.appendChild(td)
        td = document.createElement('td');
        td.classList.add('pct')
        td.textContent = (team.W / (team.W + team.L) * 100).toFixed(2) + "%"
        row.appendChild(td)
        td = document.createElement('td')
        td.textContent = team.streak;
        td.classList.add('streak')
        row.appendChild(td)
        tableBody.appendChild(row);
    })
}

/*sorts teams based on field and the number of the group*/
/*grab boolean and sets the table and group for the respective group letter*/
/*sorts asecnding if boolean is true, sorts descending if boolean is false*/
/*sets boolean to the correct value at end to keep sorting*/
function sort(field, groupNum) {
    let tableBody;
    let descending;
    let group;
    if (groupNum == 'A') {
        tableBody = document.querySelector('#groupA tbody')
        descending = descendingA;
        group = groupA;
    } else if (groupNum == 'B') {
        tableBody = document.querySelector('#groupB tbody')
        descending = descendingB;
        group = groupB;
    } else if (groupNum == 'C') {
        tableBody = document.querySelector('#groupC tbody')
        descending = descendingC;
        group = groupC;
    } else if (groupNum == 'D') {
        tableBody = document.querySelector('#groupD tbody')
        descending = descendingD;
        group = groupD;
    }
    if (descending) {
        if (field == "pos") {
            group = group.sort((teamA, teamB) => teamB.pos - teamA.pos)
        } else if (field == 'Name') {
            group = group.sort((teamA, teamB) => {
                return (teamA.name < teamB.name) ? -1 : 1
            });
        } else if (field == 'W') {
            group = group.sort((teamA, teamB) => teamA.W - teamB.W)
        } else if (field == 'L') {
            group = group.sort((teamA, teamB) => teamA.L - teamB.L)
        } else if (field == 'pct') {
            group = group.sort((teamA, teamB) => (teamA.W / (teamA.W + teamA.L) * 100) - (teamB.W / (teamB.W + teamB.L) * 100))
        } else if (field == 'streak') {
            group = group.sort((teamA, teamB) => teamB.streakValue - teamA.streakValue)
        }
        descending = false;
    } else {
        if (field == "pos") {
            group = group.sort((teamA, teamB) => teamA.pos - teamB.pos)
        } else if (field == 'Name') {
            group = group.sort((teamA, teamB) => {
                return (teamB.name < teamA.name) ? -1 : 1
            });
        } else if (field == 'W') {
            group = group.sort((teamA, teamB) => teamB.W - teamA.W)
        } else if (field == 'L') {
            group = group.sort((teamA, teamB) => teamB.L - teamA.L)
        } else if (field == 'pct') {
            group = group.sort((teamA, teamB) => (teamB.W / (teamB.W + teamB.L) * 100) - (teamA.W / (teamA.W + teamA.L) * 100))
        } else if (field == 'streak') {
            group = group.sort((teamA, teamB) => teamA.streakValue - teamB.streakValue)
        }
        descending = true;
    }
    if (groupNum == 'A') {
        descendingA = descending
    } else if (groupNum == 'B') {
        descendingB = descending
    } else if (groupNum == 'C') {
        descendingC = descending
    } else if (groupNum == 'D') {
        descendingD = descending
    }
    createTable(group, groupNum)
}

//sets teams local storage as the current teams to make sure it is updated incase something changes it though code//
localStorage.setItem('teams', JSON.stringify(teamData))


