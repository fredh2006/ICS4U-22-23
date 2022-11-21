const dataString = localStorage.getItem('teams');
const teams = JSON.parse(dataString)
let params = (new URL(document.location)).searchParams;
const team = teams.filter(team => team.id == params.get('id'));
const groupAF = localStorage.getItem('groupA');
const groupA = JSON.parse(groupAF)
const groupBF = localStorage.getItem('groupB');
const groupB = JSON.parse(groupBF)
const groupCF = localStorage.getItem('groupC');
const groupC = JSON.parse(groupCF)
const groupDF = localStorage.getItem('groupD');
const groupD = JSON.parse(groupDF)
localStorage.setItem('teams', JSON.stringify(teams))
localStorage.setItem('groupA', JSON.stringify(groupA))
localStorage.setItem('groupB', JSON.stringify(groupB))
localStorage.setItem('groupC', JSON.stringify(groupC))
localStorage.setItem('groupD', JSON.stringify(groupD))

displayTeam()

function displayTeam() {
    console.log(team);
    document.querySelector('#container').textContent = team[0].name;
 }

displayGames();

function displayGames(){
    let counter = 0;
    let section = document.querySelector('#container');
    let column;
    team[0].games.forEach((gameData)=>{
        console.log(gameData);
        if(counter%4==0){
        column = document.createElement('div')
        column.setAttribute('class', 'columns')
        }
        let columns = document.createElement('div')
        columns.setAttribute('class', 'column is-one-quarter')
        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        let cardHeader = document.createElement('div')
        cardHeader.setAttribute('class', 'card-header-title')
        let cardTitle = "Day: " + gameData.day.toString();
        if(gameData.type === "tiebreaker"){
            cardTitle += " - " + "Tiebreaker"
            console.log(cardTitle);
        }
        cardHeader.textContent = cardTitle;
        let cardContent = document.createElement('div')
        cardContent.setAttribute('class', 'card-content')
        console.log(gameData);
        let oppArr = teams.filter(team => team.id == gameData.opp)
        cardContent.textContent = team[0].name + " v.s " + oppArr[0].name 
        let score = document.createElement('div')
        score.setAttribute('class', 'card-content')
        if(gameData.win){
            score.textContent = "Score: 1 - 0"
        }else{
            score.textContent = "Score: 0 - 1"
        }
        section.appendChild(column)
        column.appendChild(columns)
        columns.appendChild(card)
        card.appendChild(cardHeader)
        card.appendChild(cardContent)
        card.appendChild(score)
        counter++;
    })
}