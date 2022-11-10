teamData = JSON.parse(localStorage['teams'])
groupA = JSON.parse(localStorage['groupA'])
groupB = JSON.parse(localStorage['groupB'])
groupC = JSON.parse(localStorage['groupC'])
groupD = JSON.parse(localStorage['groupD'])

console.log(groupA);
console.log(groupB);
console.log(groupC);
console.log(groupD);

function getGames(group){
    let section = document.querySelector('section')
    group.forEach((team)=>{
        let games = team.games;
        console.log(team.name);
        games.forEach((game)=>{
            console.log(game.win);
            console.log(game.opp);
            console.log(game.day);
        })
    })
}

getGames(groupA)