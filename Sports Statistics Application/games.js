const dataString = localStorage.getItem('teams');
const teams = JSON.parse(dataString)
let params = (new URL(document.location)).searchParams;
const team = teams.filter(team => team.id == params.get('id'));

displayTeam()

function displayTeam() {
    document.querySelector('#container').textContent = team[0].name;
 }

displayGames();

function displayGames(){
    let counter = 0;
    let section = document.querySelector('#container');
    let column;
    team[0].games.forEach((gameData)=>{
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
        cardHeader.textContent = "Day: " + gameData.day.toString();
        let cardContent = document.createElement('div')
        cardContent.setAttribute('class', 'card-content')
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

 function displayGames1(){
    let counter = 0;
    let column;
    let section = document.querySelector('#container');
    team[0].games.forEach((gameData)=>{
        if(counter%4==0){
            column = document.createElement('div')
            column.setAttribute('class', 'columns')
        }
        let columns = document.createElement('div')
        div.setAttribute('class', 'columns')
        let div = document.createElement('div')
        div.setAttribute('class', 'card');
        let divContent = document.createElement('div');
        divContent.setAttribute('class', 'card-content')
        let divHeader = document.createElement('header');
        divHeader.setAttribute('class', 'card-header-title')
        let divScore = document.createElement('div')
        divScore.setAttribute('class', 'card-content')
        let oppArr = teams.filter(team => team.id == gameData.opp)
        let opp = oppArr[0].name;
        divContent.textContent = team[0].name + " v.s " + opp;
        divHeader.textContent = "Day: " + gameData.day.toString();
        if(gameData.win){
            divScore.textContent = "Score: 1 - 0"
        }else{
            divScore.textContent = "Score: 0 - 1"
        }

        section.appendChild(div)
        div.appendChild(divHeader)
        div.appendChild(divContent)
        div.appendChild(divScore)
        counter++;
    })
 }