let buttons = document.querySelectorAll('a')
console.log(buttons);
let section = document.querySelector('#container')
let totalGames = [];
const paginationNumbers = document.querySelector('.pagination-lister')
const paginationLimit = 8;
let currentPage = 1;

function handleClick(num) {
    console.log("hello");
    buttons.forEach(button => {
        if (button.classList.contains("is-current")) {
            button.classList.remove("is-current")
        }
    })
    let clickedButton = document.getElementById(num)
    console.log(clickedButton);
    clickedButton.classList.add("is-current")
    deleteSmallPagination()
    createSchedule();
}   

function createSchedule() {
    let currentPage;
    buttons.forEach(button => {
        if (button.classList.contains("is-current")) {
            currentPage = button.id;
        }
    })
    let pageTitle = document.createElement('div')
    pageTitle.textContent = currentPage;
    section.replaceChildren(pageTitle)
    displayGames(currentPage)
}

const dataString = localStorage.getItem('teams');
const teams = JSON.parse(dataString)

function displayGames(day) {
    let column;
    let gameArr = [];
    let counter = 0;
    totalGames = [];
    let section = document.getElementById("container")
    teams.forEach(team => {
        team.games.forEach(game => {
            if (game.day == day) {
                console.log(game);
                if (counter % 4 == 0) {
                    column = document.createElement('div')
                    column.setAttribute('class', 'columns')
                }
                if (gameArr.includes(game.id)) {
                    console.log('hello');
                } else {
                    gameArr.push(game.id)
                    totalGames.push(game)
                    let columns = document.createElement('div')
                    columns.setAttribute('class', 'column is-one-quarter')
                    let card = document.createElement('div')
                    card.setAttribute('class', 'card')
                    let cardHeader = document.createElement('div')
                    cardHeader.setAttribute('class', 'card-header-title')
                    let cardTitle = "Day: " + game.day.toString();
                    if (game.type === "tiebreaker") {
                        cardTitle += " - " + "Tiebreaker"
                        console.log(cardTitle);
                    }
                    cardHeader.textContent = cardTitle;
                    let cardContent = document.createElement('div')
                    cardContent.setAttribute('class', 'card-content')
                    let oppArr = teams.filter(team => team.id == game.opp)
                    cardContent.textContent = team.name + " v.s " + oppArr[0].name
                    let score = document.createElement('div')
                    score.setAttribute('class', 'card-content')
                    if (game.win) {
                        score.textContent = "Score: 1 - 0"
                    } else {
                        score.textContent = "Score: 0 - 1"
                    }
                    section.appendChild(column)
                    column.appendChild(columns)
                    columns.appendChild(card)
                    card.appendChild(cardHeader)
                    card.appendChild(cardContent)
                    card.appendChild(score)
                    counter++;
                }
            }
        })
    })
    createPagination()
}


function createPagination(){
    const pageCount = Math.ceil(totalGames.length/paginationLimit)
    console.log(pageCount);
    for(let i = 0; i<pageCount; i++){
        let li = document.createElement('li')
        li.classList.add('small2')
        let a = document.createElement('a')
        a.textContent = i+1;
        a.classList.add('pagination-link')
        a.classList.add('small')
        a.setAttribute("page-index", i+1)
        paginationNumbers.appendChild(li)
        li.appendChild(a)
    }
    setCurrentPage(1)
    document.querySelectorAll('.small').forEach((link)=>{
        let page = Number(link.textContent)
        if(page){
            console.log(page);
            link.addEventListener("click",()=>{
                setCurrentPage(page)
            })
        }
})
}

function deleteSmallPagination(){
    let smallPagination = document.querySelectorAll('.small2')
    smallPagination.forEach(page=>{
        paginationNumbers.removeChild(page)
    })
}

function setCurrentPage(pageNum){
    console.log(pageNum);
    currentPage = pageNum;
    console.log(currentPage);
    handleActivePageNumber();
    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;
    let allGames = document.querySelectorAll('.card')
    allGames.forEach((game,index)=>{
        game.classList.add('hidden')
        if (index >= prevRange && index < currRange) {
            game.classList.remove("hidden");
          }
    })
}

window.addEventListener('load',()=>{
    createSchedule();
    setCurrentPage(1)
    document.querySelectorAll('.small').forEach((link)=>{
        let page = Number(link.textContent)
        if(page){
            console.log(page);
            link.addEventListener("click",()=>{
                setCurrentPage(page)
            })
        }
})
})

const handleActivePageNumber = () => {
    console.log(currentPage);
    document.querySelectorAll(".small").forEach((link) => {
      link.classList.remove("is-current");
       
      const pageIndex = Number(link.textContent)
      if (pageIndex == currentPage) {
        link.classList.add("is-current");
      }
    });
  };
  

/*
function displayGames() {
    let counter = 0;
    let container = document.querySelector('#container');
    let column;
    teams.forEach(team => {
        console.log(team);
        team.games.forEach(game => {
            if (dayArr.includes(game.day)) {

            } else {
                dayArr.push(game.day)
            }
        })
    })
    console.log(dayArr);
    dayArr = dayArr.sort((a, b) => b - a);
    console.log(dayArr);
    dayArr.forEach(num => {
        let section = document.createElement('section')
        section.textContent = "Day: " + num;
        container.appendChild(section)
        section.setAttribute('id', num)
        section.setAttribute('class', 'daySections')
    })
    let allSections = document.querySelectorAll('.daySections')
    allSections.forEach(section => {
        counter = 0;
        let gameArr = [];
        teams.forEach(team => {
            team.games.forEach(game => {
                if (counter % 4 == 0) {
                    column = document.createElement('div')
                    column.setAttribute('class', 'columns')
                }
                if(gameArr.includes(game.id)){
                    console.log('hello');
                }else{
                    gameArr.push(game.id)
                let columns = document.createElement('div')
                columns.setAttribute('class', 'column is-one-quarter')
                if (game.day == section.getAttribute('id')) {
                    let card = document.createElement('div')
                    card.setAttribute('class', 'card')
                    let cardHeader = document.createElement('div')
                    cardHeader.setAttribute('class', 'card-header-title')
                    let cardTitle = "Day: " + game.day.toString();
                    if (game.type === "tiebreaker") {
                        cardTitle += " - " + "Tiebreaker"
                        console.log(cardTitle);
                    }
                    cardHeader.textContent = cardTitle;
                    let cardContent = document.createElement('div')
                    cardContent.setAttribute('class', 'card-content')
                    let oppArr = teams.filter(team => team.id == game.opp)
                    cardContent.textContent = team.name + " v.s " + oppArr[0].name
                    let score = document.createElement('div')
                    score.setAttribute('class', 'card-content')
                    if (game.win) {
                        score.textContent = "Score: 1 - 0"
                    } else {
                        score.textContent = "Score: 0 - 1"
                    }
                    section.appendChild(column)
                    column.appendChild(columns)
                    columns.appendChild(card)
                    card.appendChild(cardHeader)
                    card.appendChild(cardContent)
                    card.appendChild(score)
                    counter++;
                }
                }
            })
        })
    })

}
*/
