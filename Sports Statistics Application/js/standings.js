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

function handleButtonClick(){
    let container = document.querySelector('.for-form')
    if(button.classList.contains('inactive')){
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
    let inputFour= document.createElement('input')
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
    buttonSix.onclick = function(){handleFormClick()}
    buttonSix.textContent = "Submit"

    form.appendChild(fieldSix)
    fieldSix.appendChild(controlSix)
    controlSix.appendChild(buttonSix)
    button.classList.remove('inactive')
    button.classList.add('active')
    }else{
        container.replaceChildren();
        button.textContent = "Add Game"
        button.classList.remove('active')
        button.classList.add('inactive')
    }
}

function handleFormClick() {
    let group = document.querySelector('.group').value.toUpperCase();
    let team1 = document.querySelector('.team1').value.toUpperCase();
    let team2 = document.querySelector('.team2').value.toUpperCase();
    let select = document.querySelector('.select-options')
    let option = select.options[select.selectedIndex]
    let win = option.value;
    let day = (+(document.querySelector('.day').value));
    if (group.length == 0 || team1.length == 0 || team2.length == 0 || day < 1 || day > 8||!(Number.isInteger(day))) {
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

function deleteInputs(){
    const inputs = document.querySelectorAll('.input')
    inputs.forEach(input => {
        input.value = '';
    })
}

function checkGroupValidity(team1, team2, group){
    if(group == "A"){
        if ((team1 === "T1" || team1 === "EDWARD GAMING" || team1 === "FNATIC" || team1 === "CLOUD 9") &&
            (team2 != team1 && (team2 === "T1" || team2 === "EDWARD GAMING" || team2 === "FNATIC" || team2 === "CLOUD 9"))) {
                return true;
            }
    }else if(group =="B"){
        if ((team1 === "JD GAMING" || team1 === "DWG KIA" || team1 === "EVIL GENIUSES" || team1 === "G2 ESPORTS") && (team2 != team1 &&
            (team2 === "JD GAMING" || team2 === "DWG KIA" || team2 === "EVIL GENIUSES" || team2 === "G2 ESPORTS"))) {
                return true;
            }
    }else if(group =="C"){
        if ((team1 === "DRX" || team1 === "ROGUE" || team1 === "TOP ESPORTS" || team1 === "GAM ESPORTS") &&
            (team2 != team1 && (team2 === "DRX" || team2 === "ROGUE" || team2 === "TOP ESPORTS" || team2 === "GAM ESPORTS"))) {
                return true;
            }
    }else if(group =="D"){
        if ((team1 === "GEN. G" || team1 === "ROYAL NEVER GIVE UP" || team1 === "CTBC FLYING OYSTER" || team1 === "100 THIEVES") &&
        (team2 != team1 && (team2 === "GEN. G" || team2 === "ROYAL NEVER GIVE UP" || team2 === "CTBC FLYING OYSTER" || team2 === "100 THIEVES"))) {
            return true;
        }
    }
    return false;
}

function IDFromName(teamName, group){
    let id;

    group.forEach(team=>{
        if(team.name.toUpperCase() === teamName){
            id = team.id
        }
    })
    return id;
}

function makeGame(day, ID, win, gameCounter){
    let game = {
        'day': day,
        'opp': ID,
        'win': win,
        'type': 'normal',
        'id': gameCounter
    }
    return game;
}

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
        num=0;
    } else if (groupLetter === "B") {
        num=4;
    } else if (groupLetter === "C") {
        num=8;
    } else if (groupLetter === "D") {
        num=12;
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
            teams[i+num].games.unshift(game1)
            let result = changeStreak(group[i], teams[i+num], win1)
            group[i] = result[0];
            teams[i+num] = result[1]
        } else if (team2 === group[i].name.toUpperCase()) {
            group[i].games.unshift(game2)
            teams[i+num].games.unshift(game2)
            let result = changeStreak(group[i], teams[i+num], win2)
            group[i] = result[0];
            teams[i+num] = result[1]
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

function changeStreak(currGroup, team, win, index, num){
    let group = currGroup;
    let teams = team;
    let i = index;
    if(win){
        group.W++;
        teams.W++;
        if (group.streakValue > 0 && teams.streakValue >0) {
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
    }else{
        group.L++;
        teams.L++;
        if (group.streakValue > 0 && teams.streakValue >0) {
            group.streakValue = -1;
            group.streak = Math.abs(group.streakValue) + "L"
            teams.streakValue = -1;
            teams.streak = Math.abs(teams.streakValue) + "L"
        } else {
            group.streakValue--;
            group.streak = Math.abs(group.streakValue) + "L"
            teams.streakValue --;
            teams.streak = Math.abs(teams.streakValue) + "L"
        }
    }
    return [group, teams]
}


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

function createTable(group, groupNum) {    
    let tableBody;
    if(groupNum == 'A'){
        tableBody = document.querySelector('#groupA tbody')
    }else if(groupNum == 'B'){
        tableBody =  document.querySelector('#groupB tbody')
    }else if(groupNum == 'C'){
        tableBody =  document.querySelector('#groupC tbody')
    }
    else if(groupNum == 'D'){
        tableBody =  document.querySelector('#groupD tbody')
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
        link.href = 'matches.html?id=' + team.id;
        link.textContent = team.name;
        td.appendChild(link);
        row.appendChild(td)
        td = document.createElement('td')
        td.classList.add('hidden')
        let link1 = document.createElement('a')
        link1.href = 'matches.html?id=' + team.id
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

function sort(field, groupNum){
    let tableBody;
    let descending;
    let group;
    if(groupNum == 'A'){
        tableBody = document.querySelector('#groupA tbody')
        descending = descendingA;
        group = groupA;
    }else if(groupNum == 'B'){
        tableBody = document.querySelector('#groupB tbody')
        descending = descendingB;
        group = groupB;
    }else if(groupNum == 'C'){
        tableBody = document.querySelector('#groupC tbody') 
        descending = descendingC;
        group = groupC;
    }else if(groupNum == 'D'){
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
    if(groupNum == 'A'){
        descendingA = descending
    }else if(groupNum == 'B'){
        descendingB = descending
    }else if(groupNum == 'C'){
        descendingC = descending
    }else if(groupNum == 'D'){
        descendingD = descending
    }
    createTable(group, groupNum)
}

let teams = [];
let team = {};

team['pos'] = 1
team['name'] = "T1";
team['shortname'] = "T1"
team['id'] = 'GAT1';
team['W'] = 5;
team['L'] = 1;
team['streak'] = '3W'
team['streakValue'] = 3
team['logo'] = './images/t1.png';
team['games'] = [
    {
        'day': 5,
        'opp': 'GAT2',
        'win': true,
        'type': 'normal',
        'id': '5-GAT1-GAT2-GAT2-GAT1'
    },
    {
        'day': 5,
        'opp': 'GAT4',
        'win': true,
        'type': 'normal',
        'id': '5-GAT1-GAT4-GAT4-GAT1'
    },
    {
        'day': 5,
        'opp': 'GAT3',
        'win': true,
        'type': 'normal',
        'id': '5-GAT1-GAT3-GAT3-GAT1'
    },
    {
        'day': 3,
        'opp': 'GAT4',
        'win': true,
        'type': 'normal',
        'id': '3-GAT1-GAT4-GAT4-GAT1'
    },
    {
        'day': 2,
        'opp': 'GAT3',
        'win': false,
        'type': 'normal',
        'id': '2-GAT1-GAT3-GAT3-GAT1'
    },
    {
        'day': 1,
        'opp': 'GAT2',
        'win': true,
        'id': '1-GAT1-GAT2-GAT2-GAT1'
    }
];
teams.push(team);

team = {};
team['pos'] = 2
team['name'] = "Edward Gaming";
team['shortname'] = "EDG"
team['id'] = 'GAT2';
team['W'] = 4;
team['L'] = 2;
team['streak'] = '1L'
team['streakValue'] = -1
team['logo'] = './images/edg.png';
team['games'] = [
    {
        'day': 5,
        'opp': 'GAT1',
        'win': false,
        'type': 'normal',
        'id': '5-GAT1-GAT2-GAT2-GAT1'
    },
    {
        'day': 5,
        'opp': 'GAT3',
        'win': true,
        'type': 'normal',
        'id': '5-GAT2-GAT3-GAT3-GAT2'
    },
    {
        'day': 5,
        'opp': 'GAT4',
        'win': true,
        'type': 'normal',
        'id': '5-GAT2-GAT4-GAT4-GAT2'
    },
    {
        'day': 3,
        'opp': 'GAT3',
        'win': true,
        'type': 'normal',
        'id': '3-GAT2-GAT3-GAT3-GAT2'
    },
    {
        'day': 2,
        'opp': 'GAT4',
        'win': true,
        'type': 'normal',
        'id': '2-GAT2-GAT4-GAT4-GAT2'
    },
    {
        'day': 1,
        'opp': 'GAT1',
        'win': false,
        'type': 'normal',
        'id': '1-GAT1-GAT2-GAT2-GAT1'
    }
];
teams.push(team);

team = {};
team['pos'] = 3
team['name'] = "Fnatic";
team['shortname'] = "FNC"
team['id'] = 'GAT3';
team['W'] = 2;
team['L'] = 4;
team['streak'] = '4L';
team['streakValue'] = -4
team['logo'] = './images/fnc.png';
team['games'] = [
    {
        'day': 5,
        'opp': 'GAT2',
        'win': false,
        'type': 'normal',
        'id': '5-GAT2-GAT3-GAT3-GAT2'
    },
    {
        'day': 5,
        'opp': 'GAT1',
        'win': false,
        'type': 'normal',
        'id': '5-GAT1-GAT3-GAT3-GAT1'
    },
    {
        'day': 5,
        'opp': 'GAT4',
        'win': false,
        'type': 'normal',
        'id': '5-GAT3-GAT4-GAT4-GAT3'
    },
    {
        'day': 3,
        'opp': 'GAT2',
        'win': false,
        'type': 'normal',
        'id': '3-GAT2-GAT3-GAT3-GAT2'
    },
    {
        'day': 2,
        'opp': 'GAT1',
        'win': true,
        'type': 'normal',
        'id': '2-GAT1-GAT3-GAT3-GAT1'
    },
    {
        'day': 1,
        'opp': 'GAT4',
        'win': true,
        'type': 'normal',
        'id': '1-GAT3-GAT4-GAT4-GAT3'
    }
];
teams.push(team);

team = {};
team['pos'] = 4
team['name'] = "Cloud 9";
team['shortname'] = "C9"
team['id'] = 'GAT4';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '2L'
team['streakValue'] = -2
team['logo'] = './images/c9.png';
team['games'] = [
    {
        'day': 5,
        'opp': 'GAT1',
        'win': false,
        'type': 'normal',
        'id': '5-GAT1-GAT4-GAT4-GAT1'
    },
    {
        'day': 5,
        'opp': 'GAT2',
        'win': false,
        'type': 'normal',
        'id': '5-GAT2-GAT4-GAT4-GAT2'
    },
    {
        'day': 5,
        'opp': 'GAT3',
        'win': true,
        'type': 'normal',
        'id': '5-GAT3-GAT4-GAT3-GAT2'
    },
    {
        'day': 3,
        'opp': 'GAT1',
        'win': false,
        'type': 'normal',
        'id': '3-GAT1-GAT4-GAT4-GAT1'
    },
    {
        'day': 2,
        'opp': 'GAT2',
        'win': false,
        'type': 'normal',
        'id': '2-GAT2-GAT4-GAT4-GAT2'
    },
    {
        'day': 1,
        'opp': 'GAT3',
        'win': false,
        'type': 'normal',
        'id': '1-GAT3-GAT4-GAT4-GAT3'
    }
];
teams.push(team);

team = {};
team['pos'] = 1
team['name'] = "JD Gaming";
team['shortname'] = "JDG"
team['id'] = 'GBT1';
team['W'] = 6;
team['L'] = 1;
team['streak'] = '1W'
team['streakValue'] = 1
team['logo'] = './images/jdg.png';
team['games'] = [
    {
        'day': 6,
        'opp': 'GBT2',
        'win': true,
        'type': 'tiebreaker',
        'id': '6-GBT1-GBT2-GBT2-GBT1-T'
    },
    {
        'day': 6,
        'opp': 'GBT2',
        'win': false,
        'type': 'normal',
        'id': '6-GBT1-GBT2-GBT2-GBT1'
    },
    {
        'day': 6,
        'opp': 'GBT4',
        'win': true,
        'type': 'normal',
        'id': '6-GBT1-GBT4-GBT4-GBT1'
    },
    {
        'day': 6,
        'opp': 'GBT3',
        'win': true,
        'type': 'normal',
        'id': '6-GBT1-GBT3-GBT3-GBT1'
    },
    {
        'day': 4,
        'opp': 'GBT4',
        'win': true,
        'type': 'normal',
        'id': '4-GBT1-GBT4-GBT4-GBT1'
    },
    {
        'day': 2,
        'opp': 'GBT2',
        'win': true,
        'type': 'normal',
        'id': '2-GBT1-GBT2-GBT2-GBT1'
    },
    {
        'day': 1,
        'opp': 'GBT3',
        'win': true,
        'type': 'normal',
        'id': '1-GBT1-GBT3-GBT3-GBT1'
    }
];
teams.push(team);

team = {};
team['pos'] = 2
team['name'] = "DWG KIA";
team['shortname'] = "DWG"
team['id'] = 'GBT2';
team['W'] = 5;
team['L'] = 2;
team['streak'] = '1L'
team['streakValue'] = -1
team['logo'] = './images/dwg.png';
team['games'] = [
    {
        'day': 6,
        'opp': 'GBT1',
        'win': false,
        'type': 'tiebreaker',
        'id': '6-GBT1-GBT2-GBT2-GBT1-T'
    },
    {
        'day': 6,
        'opp': 'GBT1',
        'win': true,
        'type': 'normal',
        'id': '6-GBT1-GBT2-GBT2-GBT1'
    },
    {
        'day': 6,
        'opp': 'GBT3',
        'win': true,
        'type': 'normal',
        'id': '6-GBT2-GBT3-GBT3-GBT2'
    },
    {
        'day': 6,
        'opp': 'GBT4',
        'win': true,
        'type': 'normal',
        'id': '6-GBT2-GBT4-GBT4-GBT2'
    },
    {
        'day': 4,
        'opp': 'GBT3',
        'win': true,
        'type': 'normal',
        'id': '4-GBT2-GBT3-GBT3-GBT2'
    },
    {
        'day': 2,
        'opp': 'GBT1',
        'win': false,
        'type': 'normal',
        'id': '2-GBT1-GBT2-GBT2-GBT1'
    },
    {
        'day': 1,
        'opp': 'GBT4',
        'win': true,
        'type': 'normal',
        'id': '1-GBT2-GBT4-GBT4-GBT2'
    }
];
teams.push(team);

team = {};
team['pos'] = 3
team['name'] = "Evil Geniuses";
team['shortname'] = "EG"
team['id'] = 'GBT3';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '2L'
team['streakValue'] = -2
team['logo'] = './images/eg.png';
team['games'] = [
    {
        'day': 6,
        'opp': 'GBT2',
        'win': false,
        'type': 'normal',
        'id': '6-GBT2-GBT3-GBT3-GBT2'
    },
    {
        'day': 6,
        'opp': 'GBT1',
        'win': false,
        'type': 'normal',
        'id': '6-GBT1-GBT2-GBT2-GBT1'
    },
    {
        'day': 6,
        'opp': 'GBT4',
        'win': true,
        'type': 'normal',
        'id': '6-GBT3-GBT4-GBT4-GBT3'
    },
    {
        'day': 4,
        'opp': 'GBT2',
        'win': false,
        'type': 'normal',
        'id': '4-GBT2-GBT3-GBT3-GBT2'
    },
    {
        'day': 2,
        'opp': 'GBT4',
        'win': false,
        'type': 'normal',
        'id': '2-GBT3-GBT4-GBT4-GBT3'
    },
    {
        'day': 1,
        'opp': 'GBT1',
        'win': false,
        'type': 'normal',
        'id': '1-GBT1-GBT2-GBT2-GBT1'
    }
];
teams.push(team);

team = {};
team['pos'] = 4
team['name'] = "G2 Esports";
team['shortname'] = "G2"
team['id'] = 'GBT4';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '4L'
team['streakValue'] = -4
team['logo'] = './images/g2.png';
team['games'] = [
    {
        'day': 6,
        'opp': 'GBT1',
        'win': false,
        'type': 'normal',
        'id': '6-GBT1-GBT4-GBT4-GBT1'
    },
    {
        'day': 6,
        'opp': 'GBT2',
        'win': false,
        'type': 'normal',
        'id': '6-GBT1-GBT2-GBT2-GBT1'
    },
    {
        'day': 6,
        'opp': 'GBT3',
        'win': false,
        'type': 'normal',
        'id': '6-GBT3-GBT4-GBT4-GBT3'
    },
    {
        'day': 4,
        'opp': 'GBT1',
        'win': false,
        'type': 'normal',
        'id': '4-GBT1-GBT3-GBT3-GBT1'
    },
    {
        'day': 2,
        'opp': 'GBT3',
        'win': true,
        'type': 'normal',
        'id': '2-GBT3-GBT4-GBT4-GBT3'
    },
    {
        'day': 1,
        'opp': 'GBT2',
        'win': false,
        'type': 'normal',
        'id': '1-GBT2-GBT4-GBT4-GBT2'
    }
];
teams.push(team);

team = {};
team['pos'] = 1
team['name'] = "DRX";
team['shortname'] = "DRX"
team['id'] = 'GCT1';
team['W'] = 5;
team['L'] = 2;
team['streak'] = '1W'
team['streakValue'] = 1
team['logo'] = './images/drx.png';
team['games'] = [
    {
        'day': 7,
        'opp': 'GCT2',
        'win': true,
        'type': 'tiebreaker',
        'id': '7-GCT1-GCT2-GCT2-GCT1-T'
    },
    {
        'day': 7,
        'opp': 'GCT3',
        'win': false,
        'type': 'normal',
        'id': '7-GCT1-GCT3-GCT3-GCT1'
    },
    {
        'day': 7,
        'opp': 'GCT4',
        'win': true,
        'type': 'normal',
        'id': '7-GCT1-GCT4-GCT4-GCT1'
    },
    {
        'day': 7,
        'opp': 'GCT2',
        'win': true,
        'type': 'normal',
        'id': '7-GCT1-GCT2-GCT2-GCT1'
    },
    {
        'day': 4,
        'opp': 'GCT4',
        'win': true,
        'type': 'normal',
        'id': '4-GCT1-GCT4-GCT4-GCT1'
    },
    {
        'day': 3,
        'opp': 'GCT3',
        'win': true,
        'type': 'normal',
        'id': '3-GCT1-GCT3-GCT3-GCT1'
    },
    {
        'day': 2,
        'opp': 'GCT2',
        'win': false,
        'type': 'normal',
        'id': '2-GCT1-GCT2-GCT2-GCT1'
    }
];
teams.push(team);

team = {};
team['pos'] = 2
team['name'] = "Rogue";
team['shortname'] = "RGE"
team['id'] = 'GCT2';
team['W'] = 4;
team['L'] = 3;
team['streak'] = '3L'
team['streakValue'] = -3
team['logo'] = './images/rge.png';
team['games'] = [
    {
        'day': 7,
        'opp': 'GCT1',
        'win': false,
        'type': 'tiebreaker',
        'id': '7-GCT1-GCT2-GCT2-GCT1-T'
    },
    {
        'day': 7,
        'opp': 'GCT3',
        'win': false,
        'type': 'normal',
        'id': '7-GCT2-GCT3-GCT3-GCT2'
    },
    {
        'day': 7,
        'opp': 'GCT1',
        'win': false,
        'type': 'normal',
        'id': '7-GCT1-GCT2-GCT2-GCT1'
    },
    {
        'day': 7,
        'opp': 'GCT4',
        'win': true,
        'type': 'normal',
        'id': '7-GCT2-GCT4-GCT4-GCT2'
    },
    {
        'day': 4,
        'opp': 'GCT3',
        'win': true,
        'type': 'normal',
        'id': '4-GCT2-GCT3-GCT3-GCT2'
    },
    {
        'day': 3,
        'opp': 'GCT4',
        'win': true,
        'type': 'normal',
        'id': '3-GCT2-GCT4-GCT4-GCT2'
    },
    {
        'day': 2,
        'opp': 'GCT1',
        'win': true,
        'type': 'normal',
        'id': '2-GCT1-GCT2-GCT2-GCT1'
    }
];
teams.push(team);

team = {};
team['pos'] = 3
team['name'] = "Top Esports";
team['shortname'] = "TOP"
team['id'] = 'GCT3';
team['W'] = 3;
team['L'] = 3;
team['streak'] = '2W'
team['streakValue'] = 2
team['logo'] = './images/top.png';
team['games'] = [
    {
        'day': 7,
        'opp': 'GCT1',
        'win': true,
        'type': 'normal',
        'id': '7-GCT1-GCT3-GCT3-GCT1'
    },
    {
        'day': 7,
        'opp': 'GCT2',
        'win': true,
        'type': 'normal',
        'id': '7-GCT2-GCT3-GCT3-GCT2'
    },
    {
        'day': 7,
        'opp': 'GCT4',
        'win': false,
        'type': 'normal',
        'id': '7-GCT3-GCT4-GCT4-GCT3'
    },
    {
        'day': 4,
        'opp': 'GCT2',
        'win': false,
        'type': 'normal',
        'id': '4-GCT2-GCT3-GCT3-GCT2'
    },
    {
        'day': 3,
        'opp': 'GCT1',
        'win': false,
        'type': 'normal',
        'id': '3-GCT1-GCT3-GCT3-GCT1'
    },
    {
        'day': 2,
        'opp': 'GCT4',
        'win': true,
        'type': 'normal',
        'id': '2-GCT3-GCT4-GCT4-GCT3'
    }
];
teams.push(team);

team = {};
team['pos'] = 4
team['name'] = "GAM Esports";
team['shortname'] = "GAM"
team['id'] = 'GCT4';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '1L'
team['streakValue'] = -1
team['logo'] = './images/gam.png';
team['games'] = [
    {
        'day': 7,
        'opp': 'GCT1',
        'win': false,
        'type': 'normal',
        'id': '7-GCT1-GCT4-GCT4-GCT1'
    },
    {
        'day': 7,
        'opp': 'GCT3',
        'win': true,
        'type': 'normal',
        'id': '7-GCT3-GCT4-GCT4-GCT3'
    },
    {
        'day': 7,
        'opp': 'GCT2',
        'win': false,
        'type': 'normal',
        'id': '7-GCT2-GCT4-GCT4-GCT2'
    },
    {
        'day': 4,
        'opp': 'GCT1',
        'win': false,
        'type': 'normal',
        'id': '4-GCT1-GCT4-GCT4-GCT1'
    },
    {
        'day': 3,
        'opp': 'GCT2',
        'win': false,
        'type': 'normal',
        'id': '3-GCT2-GCT4-GCT4-GCT2'
    },
    {
        'day': 2,
        'opp': 'GCT3',
        'win': true,
        'type': 'normal',
        'id': '2-GCT3-GCT4-GCT4-GCT3'
    }
];
teams.push(team);

team = {};
team['pos'] = 1
team['name'] = "Gen. G";
team['shortname'] = "GG"
team['id'] = 'GDT1';
team['W'] = 6;
team['L'] = 1;
team['streak'] = '6W'
team['streakValue'] = 6
team['logo'] = './images/geng.png';
team['games'] = [
    {
        'day': 8,
        'opp': 'GDT2',
        'win': true,
        'type': 'tiebreaker',
        'id': '8-GDT1-GDT2-GDT2-GDT1-T'
    },
    {
        'day': 8,
        'opp': 'GDT2',
        'win': true,
        'type': 'normal',
        'id': '8-GDT1-GDT2-GDT2-GDT1'
    },
    {
        'day': 8,
        'opp': 'GDT4',
        'win': true,
        'type': 'normal',
        'id': '8-GDT1-GDT4-GDT4-GDT1'
    },
    {
        'day': 8,
        'opp': 'GDT3',
        'win': true,
        'type': 'normal',
        'id': '8-GDT1-GDT3-GDT3-GDT1'
    },
    {
        'day': 4,
        'opp': 'GDT3',
        'win': true,
        'type': 'normal',
        'id': '4-GDT1-GDT3-GDT3-GDT1'
    },
    {
        'day': 3,
        'opp': 'GDT4',
        'win': true,
        'type': 'normal',
        'id': '3-GDT1-GDT4-GDT4-GDT1'
    },
    {
        'day': 1,
        'opp': 'GDT2',
        'win': false,
        'type': 'normal',
        'id': '1-GDT1-GDT2-GDT2-GDT1'
    }
];
teams.push(team);

team = {};
team['pos'] = 2
team['name'] = "Royal Never Give Up";
team['shortname'] = "RNG"
team['id'] = 'GDT2';
team['W'] = 5;
team['L'] = 2;
team['streak'] = '2L'
team['streakValue'] = -2
team['logo'] = './images/rng.png';
team['games'] = [
    {
        'day': 8,
        'opp': 'GDT1',
        'win': false,
        'type': 'tiebreaker',
        'id': '8-GDT1-GDT2-GDT2-GDT1-T'
    },
    {
        'day': 8,
        'opp': 'GDT1',
        'win': false,
        'type': 'normal',
        'id': '8-GDT1-GDT2-GDT2-GDT1'
    },
    {
        'day': 8,
        'opp': 'GDT3',
        'win': true,
        'type': 'normal',
        'id': '8-GDT2-GDT3-GDT3-GDT2'
    },
    {
        'day': 8,
        'opp': 'GDT4',
        'win': true,
        'type': 'normal',
        'id': '8-GDT2-GDT4-GDT4-GDT2'
    },
    {
        'day': 4,
        'opp': 'GDT4',
        'win': true,
        'type': 'normal',
        'id': '4-GDT2-GDT4-GDT4-GDT2'
    },
    {
        'day': 3,
        'opp': 'GDT3',
        'win': true,
        'type': 'normal',
        'id': '3-GDT2-GDT3-GDT3-GDT2'
    },
    {
        'day': 1,
        'opp': 'GDT1',
        'win': true,
        'type': 'normal',
        'id': '1-GDT1-GDT2-GDT2-GDT1'
    }
];
teams.push(team);

team = {};
team['pos'] = 3
team['name'] = "CTBC Flying Oyster";
team['shortname'] = "CTBC"
team['id'] = 'GDT3';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '5L'
team['streakValue'] = -5
team['logo'] = './images/ctbc.png';
team['games'] = [
    {
        'day': 8,
        'opp': 'GDT2',
        'win': false,
        'type': 'normal',
        'id': '8-GDT2-GDT3-GDT3-GDT2'
    },
    {
        'day': 8,
        'opp': 'GDT1',
        'win': false,
        'type': 'normal',
        'id': '8-GDT1-GDT3-GDT3-GDT1'
    },
    {
        'day': 8,
        'opp': 'GDT4',
        'win': false,
        'type': 'normal',
        'id': '8-GDT3-GDT4-GDT4-GDT3'
    },
    {
        'day': 4,
        'opp': 'GDT1',
        'win': false,
        'type': 'normal',
        'id': '4-GDT1-GDT3-GDT3-GDT1'
    },
    {
        'day': 3,
        'opp': 'GDT2',
        'win': false,
        'type': 'normal',
        'id': '3-GDT2-GDT3-GDT3-GDT2'
    },
    {
        'day': 1,
        'opp': 'GDT4',
        'win': true,
        'type': 'normal',
        'id': '1-GDT3-GDT4-GDT4-GDT3'
    }
];
teams.push(team);

team = {};
team['pos'] = 4
team['name'] = "100 Thieves";
team['shortname'] = "100T"
team['id'] = 'GDT4';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '2L'
team['streakValue'] = -2
team['logo'] = './images/100t.png';
team['games'] = [
    {
        'day': 8,
        'opp': 'GDT2',
        'win': false,
        'type': 'normal',
        'id': '8-GDT2-GDT4-GDT4-GDT2'
    },
    {
        'day': 8,
        'opp': 'GDT1',
        'win': false,
        'type': 'normal',
        'id': '8-GDT1-GDT4-GDT4-GDT1'
    },
    {
        'day': 8,
        'opp': 'GDT3',
        'win': false,
        'type': 'normal',
        'id': '8-GDT3-GDT4-GDT4-GDT3'
    },
    {
        'day': 4,
        'opp': 'GDT1',
        'win': false,
        'type': 'normal',
        'id': '8-GDT1-GDT4-GDT4-GDT1'
    },
    {
        'day': 3,
        'opp': 'GDT2',
        'win': false,
        'type': 'normal',
        'id': '8-GDT2-GDT4-GDT4-GDT2'
    },
    {
        'day': 1,
        'opp': 'GDT3',
        'win': true,
        'type': 'normal',
        'id': '1-GDT3-GDT4-GDT4-GDT3'
    }
];
teams.push(team);
localStorage.setItem('teams', JSON.stringify(teams))
localStorage.setItem('groupA', JSON.stringify(groupA))
localStorage.setItem('groupB', JSON.stringify(groupB))
localStorage.setItem('groupC', JSON.stringify(groupC))
localStorage.setItem('groupD', JSON.stringify(groupD))


