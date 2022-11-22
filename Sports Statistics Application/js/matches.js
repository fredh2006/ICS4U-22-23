const dataString = localStorage.getItem('teams');
const teams = JSON.parse(dataString)
let params = (new URL(document.location)).searchParams;
const team = teams.filter(team => team.id == params.get('id'));
let totalGames = [];
const paginationNumbers = document.querySelector('.pagination-list')
const paginationLimit = 8;
let currentPage = 1;

function displayTeam() {
    console.log(team);
    document.querySelector('#container').textContent = team[0].name;
 }

function displayGames(){
    let counter = 0;
    let section = document.querySelector('#container');
    let column;
    team[0].games.forEach((gameData)=>{
        totalGames.push(gameData)
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
    createPagination();
}

function createPagination(){
    console.log(totalGames);
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
    displayTeam()
    displayGames()
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