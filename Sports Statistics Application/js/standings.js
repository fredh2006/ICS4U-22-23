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

function handleClick() {
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
    let game1 = {
        'day': day,
        'opp': ID2,
        'win': win1,
        'type': 'normal',
        'id': gameCounter
    }
    let game2 = {
        'day': day,
        'opp': ID1,
        'win': win2,
        'type': 'normal',
        'id': gameCounter
    }

    group = group.sort((teamA, teamB) => teamA.pos - teamB.pos)

    for (let i = 0; i < group.length; i++) {
        if (team1 === group[i].name.toUpperCase()) {
            group[i].games.unshift(game1)
            teams[i+num].games.unshift(game1)
            if (win1) {
                group[i].W++;
                teams[i+num].W++;
                if (group[i].streakValue > 0 && teams[i+num].streakValue >0) {
                    group[i].streakValue++;
                    group[i].streak = group[i].streakValue + "W"
                    teams[i+num].streakValue++;
                    teams[i+num].streak = teams[i+num].streakValue + "W"
                } else {
                    group[i].streakValue = 1;
                    group[i].streak = group[i].streakValue + "W"
                    teams[i+num].streakValue = 1;
                    teams[i+num].streak = teams[i+num].streakValue + "W"
                }
            } else {
                group[i].L++
                teams[i+num].L++
                if (group[i].streakValue > 0 && teams[i+num].streakValue >0) {
                    group[i].streakValue = -1;
                    group[i].streak = Math.abs(group[i].streakValue) + "L"
                    teams[i+num].streakValue = -1;
                    teams[i+num].streak = Math.abs(teams[i+num].streakValue) + "L"
                } else {
                    group[i].streakValue--;
                    group[i].streak = Math.abs(group[i].streakValue) + "L"
                    teams[i+num].streakValue --;
                    teams[i+num].streak = Math.abs(teams[i+num].streakValue) + "L"
                }
            }
        } else if (team2 === group[i].name.toUpperCase()) {
            group[i].games.unshift(game2)
            teams[i+num].games.unshift(game2)
            if (win2) {
                group[i].W++;
                teams[i+num].W++;
                if (group[i].streakValue > 0 && teams[i+num].streakValue >0) {
                    group[i].streakValue++;
                    group[i].streak = group[i].streakValue + "W"
                    teams[i+num].streakValue++;
                    teams[i+num].streak = teams[i+num].streakValue + "W"
                } else {
                    group[i].streakValue = 1;
                    group[i].streak = group[i].streakValue + "W"
                    teams[i+num].streakValue = 1;
                    teams[i+num].streak = teams[i+num].streakValue + "W"
                }
            } else {
                group[i].L++
                teams[i+num].L++;
                if (group[i].streakValue > 0 && teams[i+num].streakValue >0) {
                    group[i].streakValue = -1;
                    group[i].streak = Math.abs(group[i].streakValue) + "L"
                    teams[i+num].streakValue = -1;
                    teams[i+num].streak = Math.abs(teams[i+num].streakValue) + "L"
                } else {
                    group[i].streakValue--;
                    group[i].streak = Math.abs(group[i].streakValue) + "L"
                    teams[i+num].streakValue --;
                    teams[i+num].streak = Math.abs(teams[i+num].streakValue) + "L"
                }
            }
        }
    }
    group = sortGroupWins(group, team1, team2);
    group = group.sort((teamA, teamB) => teamA.pos - teamB.pos)

    createTable(group, groupLetter)
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


function sortGroupWins(group, team1, team2) {
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
        let td = document.createElement('td');
        td.textContent = team.pos;
        row.appendChild(td);
        td = document.createElement('td');
        let link = document.createElement('a');
        link.href = 'matches.html?id=' + team.id;
        link.textContent = team.name;
        td.appendChild(link);
        row.appendChild(td)
        td = document.createElement('td');
        td.textContent = team.W;
        row.appendChild(td)
        td = document.createElement('td');
        td.textContent = team.L;
        row.appendChild(td)
        td = document.createElement('td');
        td.textContent = (team.W / (team.W + team.L) * 100).toFixed(2) + "%"
        row.appendChild(td)
        td = document.createElement('td')
        td.textContent = team.streak;
        row.appendChild(td)
        tableBody.appendChild(row);
    })
}

function sort(field, groupNum) {
    if (groupNum == 'A') {
        let tableBody = document.querySelector('#groupA tbody')
        if (descendingA) {
            if (field == "pos") {
                groupA = groupA.sort((teamA, teamB) => teamB.pos - teamA.pos)
            } else if (field == 'Name') {
                groupA = groupA.sort((teamA, teamB) => {
                    return (teamA.name < teamB.name) ? -1 : 1
                });
            } else if (field == 'W') {
                groupA = groupA.sort((teamA, teamB) => teamA.W - teamB.W)
            } else if (field == 'L') {
                groupA = groupA.sort((teamA, teamB) => teamA.L - teamB.L)
            } else if (field == 'pct') {
                groupA = groupA.sort((teamA, teamB) => (teamA.W / (teamA.W + teamA.L) * 100) - (teamB.W / (teamB.W + teamB.L) * 100))
            } else if (field == 'streak') {
                groupA = groupA.sort((teamA, teamB) => teamB.streakValue - teamA.streakValue)
            }
            descendingA = false;
        } else {
            if (field == "pos") {
                groupA = groupA.sort((teamA, teamB) => teamA.pos - teamB.pos)
            } else if (field == 'Name') {
                groupA = groupA.sort((teamA, teamB) => {
                    return (teamB.name < teamA.name) ? -1 : 1
                });
            } else if (field == 'W') {
                groupA = groupA.sort((teamA, teamB) => teamB.W - teamA.W)
            } else if (field == 'L') {
                groupA = groupA.sort((teamA, teamB) => teamB.L - teamA.L)
            } else if (field == 'pct') {
                groupA = groupA.sort((teamA, teamB) => (teamB.W / (teamB.W + teamB.L) * 100) - (teamA.W / (teamA.W + teamA.L) * 100))
            } else if (field == 'streak') {
                groupA = groupA.sort((teamA, teamB) => teamA.streakValue - teamB.streakValue)
            }
            descendingA = true;
        }
        createTable(groupA, groupNum)
    } else if (groupNum == 'B') {
        let tableBody = document.querySelector('#groupB tbody')
        if (descendingB) {
            if (field == "pos") {
                groupB = groupB.sort((teamA, teamB) => teamB.pos - teamA.pos)
            } else if (field == 'Name') {
                groupB = groupB.sort((teamA, teamB) => {
                    return (teamA.name < teamB.name) ? -1 : 1
                });
            } else if (field == 'W') {
                groupB = groupB.sort((teamA, teamB) => teamA.W - teamB.W)
            } else if (field == 'L') {
                groupB = groupB.sort((teamA, teamB) => teamA.L - teamB.L)
            } else if (field == 'pct') {
                groupB = groupB.sort((teamA, teamB) => (teamA.W / (teamA.W + teamA.L) * 100) - (teamB.W / (teamB.W + teamB.L) * 100))
            } else if (field == 'streak') {
                groupB = groupB.sort((teamA, teamB) => teamB.streakValue - teamA.streakValue)
            }
            descendingB = false;
        } else {
            if (field == "pos") {
                groupB = groupB.sort((teamA, teamB) => teamA.pos - teamB.pos)
            } else if (field == 'Name') {
                groupB = groupB.sort((teamA, teamB) => {
                    return (teamB.name < teamA.name) ? -1 : 1
                });
            } else if (field == 'W') {
                groupB = groupB.sort((teamA, teamB) => teamB.W - teamA.W)
            } else if (field == 'L') {
                groupB = groupB.sort((teamA, teamB) => teamB.L - teamA.L)
            } else if (field == 'pct') {
                groupB = groupB.sort((teamA, teamB) => (teamB.W / (teamB.W + teamB.L) * 100) - (teamA.W / (teamA.W + teamA.L) * 100))
            } else if (field == 'streak') {
                groupB = groupB.sort((teamA, teamB) => teamA.streakValue - teamB.streakValue)
            }
            descendingB = true;
        }
        createTable(groupB, groupNum)
    } else if (groupNum == 'C') {
        let tableBody = document.querySelector('#groupC tbody')
        if (descendingC) {
            if (field == "pos") {
                groupC = groupC.sort((teamA, teamB) => teamB.pos - teamA.pos)
            } else if (field == 'Name') {
                groupC = groupC.sort((teamA, teamB) => {
                    return (teamA.name < teamB.name) ? -1 : 1
                });
            } else if (field == 'W') {
                groupC = groupC.sort((teamA, teamB) => teamA.W - teamB.W)
            } else if (field == 'L') {
                groupC = groupC.sort((teamA, teamB) => teamA.L - teamB.L)
            } else if (field == 'pct') {
                groupC = groupC.sort((teamA, teamB) => (teamA.W / (teamA.W + teamA.L) * 100) - (teamB.W / (teamB.W + teamB.L) * 100))
            } else if (field == 'streak') {
                groupC = groupC.sort((teamA, teamB) => teamB.streakValue - teamA.streakValue)
            }
            descendingC = false;
        } else {
            if (field == "pos") {
                groupC = groupC.sort((teamA, teamB) => teamA.pos - teamB.pos)
            } else if (field == 'Name') {
                groupC = groupC.sort((teamA, teamB) => {
                    return (teamB.name < teamA.name) ? -1 : 1
                });
            } else if (field == 'W') {
                groupC = groupC.sort((teamA, teamB) => teamB.W - teamA.W)
            } else if (field == 'L') {
                groupC = groupC.sort((teamA, teamB) => teamB.L - teamA.L)
            } else if (field == 'pct') {
                groupC = groupC.sort((teamA, teamB) => (teamB.W / (teamB.W + teamB.L) * 100) - (teamA.W / (teamA.W + teamA.L) * 100))
            } else if (field == 'streak') {
                groupC = groupC.sort((teamA, teamB) => teamA.streakValue - teamB.streakValue)
            }
            descendingC = true;
        }
        createTable(groupC, groupNum)
    } else if (groupNum == 'D') {
        let tableBody = document.querySelector('#groupD tbody')
        if (descendingD) {
            if (field == "pos") {
                groupD = groupD.sort((teamA, teamB) => teamB.pos - teamA.pos)
            } else if (field == 'Name') {
                groupD = groupD.sort((teamA, teamB) => {
                    return (teamA.name < teamB.name) ? -1 : 1
                });
            } else if (field == 'W') {
                groupD = groupD.sort((teamA, teamB) => teamA.W - teamB.W)
            } else if (field == 'L') {
                groupD = groupD.sort((teamA, teamB) => teamA.L - teamB.L)
            } else if (field == 'pct') {
                groupD = groupD.sort((teamA, teamB) => (teamA.W / (teamA.W + teamA.L) * 100) - (teamB.W / (teamB.W + teamB.L) * 100))
            } else if (field == 'streak') {
                groupD = groupD.sort((teamA, teamB) => teamB.streakValue - teamA.streakValue)
            }
            descendingD = false;
        } else {
            if (field == "pos") {
                groupD = groupD.sort((teamA, teamB) => teamA.pos - teamB.pos)
            } else if (field == 'Name') {
                groupD = groupD.sort((teamA, teamB) => {
                    return (teamB.name < teamA.name) ? -1 : 1
                });
            } else if (field == 'W') {
                groupD = groupD.sort((teamA, teamB) => teamB.W - teamA.W)
            } else if (field == 'L') {
                groupD = groupD.sort((teamA, teamB) => teamB.L - teamA.L)
            } else if (field == 'pct') {
                groupD = groupD.sort((teamA, teamB) => (teamB.W / (teamB.W + teamB.L) * 100) - (teamA.W / (teamA.W + teamA.L) * 100))
            } else if (field == 'streak') {
                groupD = groupD.sort((teamA, teamB) => teamA.streakValue - teamB.streakValue)
            }
            descendingD = true;
        }
        createTable(groupD, groupNum)
    }
}

let teams = [];
let team = {};

team['pos'] = 1
team['name'] = "T1";
team['id'] = 'GAT1';
team['W'] = 5;
team['L'] = 1;
team['streak'] = '3W'
team['streakValue'] = 3
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
team['id'] = 'GAT2';
team['W'] = 4;
team['L'] = 2;
team['streak'] = '1L'
team['streakValue'] = -1
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
team['id'] = 'GAT3';
team['W'] = 2;
team['L'] = 4;
team['streak'] = '4L';
team['streakValue'] = -4
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
team['id'] = 'GAT4';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '2L'
team['streakValue'] = -2
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
team['id'] = 'GBT1';
team['W'] = 6;
team['L'] = 1;
team['streak'] = '1W'
team['streakValue'] = 1
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
team['id'] = 'GBT2';
team['W'] = 5;
team['L'] = 2;
team['streak'] = '1L'
team['streakValue'] = -1
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
team['id'] = 'GBT3';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '2L'
team['streakValue'] = -2
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
team['id'] = 'GBT4';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '4L'
team['streakValue'] = -4
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
team['id'] = 'GCT1';
team['W'] = 5;
team['L'] = 2;
team['streak'] = '1W'
team['streakValue'] = 1
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
team['id'] = 'GCT2';
team['W'] = 4;
team['L'] = 3;
team['streak'] = '3L'
team['streakValue'] = -3
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
team['id'] = 'GCT3';
team['W'] = 3;
team['L'] = 3;
team['streak'] = '2W'
team['streakValue'] = 2
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
team['id'] = 'GCT4';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '1L'
team['streakValue'] = -1
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
team['id'] = 'GDT1';
team['W'] = 6;
team['L'] = 1;
team['streak'] = '6W'
team['streakValue'] = 6
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
team['id'] = 'GDT2';
team['W'] = 5;
team['L'] = 2;
team['streak'] = '2L'
team['streakValue'] = -2
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
team['id'] = 'GDT3';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '5L'
team['streakValue'] = -5
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
team['id'] = 'GDT4';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '2L'
team['streakValue'] = -2
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


