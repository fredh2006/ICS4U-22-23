let teamData;

teamData = JSON.parse(localStorage['teams'])

let groupA = [];
let groupB = [];
let groupC = [];
let groupD = [];

let startGroupA = [];
let startGroupB = [];
let startGroupC = [];
let startGroupD = [];

let descendingA = true;
let descendingB = true;
let descendingC = true;
let descendingD = true;

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
    if (groupNum == 'A') {
        let tableBody = document.querySelector('#groupA tbody')
        tableBody.replaceChildren();
        group.forEach((team) => {
            const row = document.createElement('tr');
            let td = document.createElement('td');
            td.textContent = team.pos;
            row.appendChild(td);
            td = document.createElement('td');
            let link = document.createElement('a');
            link.href = 'games.html?id=' + team.id;
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
    } else if (groupNum == 'B') {
        let tableBody = document.querySelector('#groupB tbody')
        tableBody.replaceChildren();
        group.forEach((team) => {
            const row = document.createElement('tr');
            let td = document.createElement('td');
            td.textContent = team.pos;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = team.name;
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
    } else if (groupNum == 'C') {
        let tableBody = document.querySelector('#groupC tbody')
        tableBody.replaceChildren();
        group.forEach((team) => {
            const row = document.createElement('tr');
            let td = document.createElement('td');
            td.textContent = team.pos;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = team.name;
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
    } else if (groupNum == 'D') {
        let tableBody = document.querySelector('#groupD tbody')
        tableBody.replaceChildren();
        group.forEach((team) => {
            const row = document.createElement('tr');
            let td = document.createElement('td');
            td.textContent = team.pos;
            row.appendChild(td);
            td = document.createElement('td');
            td.textContent = team.name;
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
}


function getStanding(team, group) {
    if (group == 'A') {
        console.log(groupA.indexOf(team));
        return (groupA.indexOf(team))
    } else if (group == 'B') {
        return (groupB.indexOf(team))
    } else if (group == 'C') {
        return (groupC.indexOf(team))
    } else if (group == 'D') {
        return (groupD.indexOf(team))
    }
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
        'win': true
    },
    {
        'day': 5,
        'opp': 'GAT4',
        'win': true
    },
    {
        'day': 5,
        'opp': 'GAT3',
        'win': true
    },
    {
        'day': 3,
        'opp': 'GAT4',
        'win': true
    },
    {
        'day': 2,
        'opp': 'GAT3',
        'win': false
    },
    {
        'day': 1,
        'opp': 'GAT2',
        'win': true
    }
];
teams.push(team);

team = {};
team['pos'] = 2
team['name'] = "Edward Gaming Hycan";
team['id'] = 'GAT2';
team['W'] = 4;
team['L'] = 2;
team['streak'] = '1L'
team['streakValue'] = -1
team['games'] = [
    {
        'day': 5,
        'opp': 'GAT1',
        'win': false
    },
    {
        'day': 5,
        'opp': 'GAT3',
        'win': true
    },
    {
        'day': 5,
        'opp': 'GAT4',
        'win': true
    },
    {
        'day': 3,
        'opp': 'GAT3',
        'win': true
    },
    {
        'day': 2,
        'opp': 'GAT4',
        'win': true
    },
    {
        'day': 1,
        'opp': 'GAT1',
        'win': false
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
team['games'] = [];
teams.push(team);

team = {};
team['pos'] = 4
team['name'] = "Cloud 9";
team['id'] = 'GAT4';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '2L'
team['streakValue'] = -2
team['games'] = [];
teams.push(team);

team = {};
team['pos'] = 1
team['name'] = "JDG Intel Esports Club";
team['id'] = 'GBT1';
team['W'] = 6;
team['L'] = 1;
team['streak'] = '1W'
team['streakValue'] = 1
team['games'] = [];
teams.push(team);

team = {};
team['pos'] = 2
team['name'] = "DWG KIA";
team['id'] = 'GBT2';
team['W'] = 5;
team['L'] = 2;
team['streak'] = '1L'
team['streakValue'] = -1
team['games'] = [];
teams.push(team);

team = {};
team['pos'] = 3
team['name'] = "Evil Geniuses";
team['id'] = 'GBT3';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '2L'
team['streakValue'] = -2
team['games'] = [];
teams.push(team);

team = {};
team['pos'] = 4
team['name'] = "G2 Esports";
team['id'] = 'GBT4';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '4L'
team['streakValue'] = -4
team['games'] = [];
teams.push(team);

team = {};
team['pos'] = 1
team['name'] = "DRX";
team['id'] = 'GCT1';
team['W'] = 5;
team['L'] = 2;
team['streak'] = '1W'
team['streakValue'] = 1
team['games'] = [];
teams.push(team);

team = {};
team['pos'] = 2
team['name'] = "Rouge";
team['id'] = 'GCT2';
team['W'] = 4;
team['L'] = 3;
team['streak'] = '3L'
team['streakValue'] = -3
team['games'] = [];
teams.push(team);

team = {};
team['pos'] = 3
team['name'] = "Top Esports";
team['id'] = 'GCT3';
team['W'] = 3;
team['L'] = 3;
team['streak'] = '2W'
team['streakValue'] = 2
team['games'] = [];
teams.push(team);

team = {};
team['pos'] = 4
team['name'] = "GAM Esports";
team['id'] = 'GCT4';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '1L'
team['streakValue'] = -1
team['games'] = [];
teams.push(team);

team = {};
team['pos'] = 1
team['name'] = "Gen. G";
team['id'] = 'GDT1';
team['W'] = 6;
team['L'] = 1;
team['streak'] = '6W'
team['streakValue'] = 6
team['games'] = [];
teams.push(team);

team = {};
team['pos'] = 2
team['name'] = "Royal Never Give Up";
team['id'] = 'GDT2';
team['W'] = 5;
team['L'] = 2;
team['streak'] = '2L'
team['streakValue'] = -2
team['games'] = [];
teams.push(team);

team = {};
team['pos'] = 3
team['name'] = "CTBC Flying Oyster";
team['id'] = 'GDT3';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '5L'
team['streakValue'] = -5
team['games'] = [];
teams.push(team);

team = {};
team['pos'] = 4
team['name'] = "100 Thieves";
team['id'] = 'GDT4';
team['W'] = 1;
team['L'] = 5;
team['streak'] = '2L'
team['streakValue'] = -2
team['games'] = [];
teams.push(team);

localStorage.setItem('teams', JSON.stringify(teams))
localStorage.setItem('groupA', JSON.stringify(groupA))
localStorage.setItem('groupB', JSON.stringify(groupB))
localStorage.setItem('groupC', JSON.stringify(groupC))
localStorage.setItem('groupD', JSON.stringify(groupD))