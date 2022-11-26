const dataString = localStorage.getItem('teams');
const teams = JSON.parse(dataString)
let params = (new URL(document.location)).searchParams;
const team = teams.filter(team => team.id == params.get('id'));
let totalGames = [];
const paginationNumbers = document.querySelector('.pagination-list')
const paginationLimit = 8;
let currentPage = 1;
let biggestPage = []

/*adds the teams name and logo to the hero*/
function addToHero() {
    let hero = document.querySelector('.hero-body')
    let logo = team[0].logo
    let img = document.createElement('img')
    img.src = logo;
    let text = document.querySelector('.hero-text')
    text.textContent = team[0].name;
    hero.appendChild(img)
    hero.appendChild(text)
}

/*displays games only for the certain team*/
/*puts the score and teams on a card that's in columns*/
/*puts columns in a big column, and creates a new big column every 4 columns*/
function displayGames() {
    let counter = 0;
    let section = document.querySelector('.container-matches');
    let column;
    team[0].games.forEach((gameData) => {
        totalGames.push(gameData)
        if (counter % 4 == 0) {
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
        if (gameData.type === "tiebreaker") {
            cardTitle += " - " + "Tiebreaker"
        }
        cardHeader.textContent = cardTitle;
        let cardContent = document.createElement('div')
        cardContent.setAttribute('class', 'card-content')
        let oppArr = teams.filter(team => team.id == gameData.opp)
        cardContent.textContent = team[0].name + " v.s " + oppArr[0].name
        cardContent.classList.add('active')
        let cardContentSmall = document.createElement('div')
        cardContentSmall.setAttribute('class', 'card-content')
        cardContentSmall.textContent = team[0].shortname + " v.s " + oppArr[0].shortname
        cardContentSmall.classList.add('hidden')
        let img = document.createElement('img')
        img.src = team[0].logo
        img.classList.add('card-content')
        img.classList.add('games-logo')
        let img1 = document.createElement('img')
        img1.src = oppArr[0].logo
        img1.classList.add('card-content')
        img1.classList.add('games-logo')
        let score = document.createElement('div')
        score.setAttribute('class', 'card-content')
        if (gameData.win) {
            score.textContent = "Score: 1 - 0"
        } else {
            score.textContent = "Score: 0 - 1"
        }
        section.appendChild(column)
        column.appendChild(columns)
        columns.appendChild(card)
        card.appendChild(cardHeader)
        card.appendChild(cardContent)
        card.appendChild(cardContentSmall)
        card.appendChild(img)
        card.appendChild(img1)
        card.appendChild(score)
        counter++;
    })
    createPagination();
}

/*creates pagination links depending on amount of games*/
function createPagination() {
    paginationNumbers.classList.add('mt-5')
    const pageCount = Math.ceil(totalGames.length / paginationLimit)
    let li = document.createElement('li')
    li.classList.add('small2')
    let a = document.createElement('a')
    a.textContent = "<<"
    a.classList.add('pagination-link')
    a.classList.add('small')
    a.classList.add('fb')
    paginationNumbers.appendChild(li)
    li.appendChild(a)
    biggestPage = [];
    for (let i = 0; i < pageCount; i++) {
        let li = document.createElement('li')
        li.classList.add('small2')
        let a = document.createElement('a')
        a.textContent = i + 1;
        biggestPage.push(i + 1)
        a.classList.add('pagination-link')
        a.classList.add('small')
        a.setAttribute("page-index", i + 1)
        paginationNumbers.appendChild(li)
        li.appendChild(a)
    }
    let liTwo = document.createElement('li')
    liTwo.classList.add('small2')
    let aTwo = document.createElement('a')
    aTwo.textContent = ">>"
    aTwo.classList.add('pagination-link')
    aTwo.classList.add('small')
    aTwo.classList.add('fb')
    paginationNumbers.appendChild(liTwo)
    liTwo.appendChild(aTwo)
    setCurrentPage(1)
    document.querySelectorAll('.small').forEach((link) => {
        let page = Number(link.textContent)
        if (link.classList.contains('fb')) {
            link.addEventListener("click", () => {
                if (link.textContent === ">>") {
                    let page = currentPage + 1;
                    if (page > biggestPage[biggestPage.length - 1]) {
                        setCurrentPage(currentPage)
                    } else {
                        setCurrentPage(currentPage + 1)
                    }
                } else {
                    if (currentPage - 1 <= 0) {
                        setCurrentPage(currentPage)
                    } else {
                        setCurrentPage(currentPage - 1)
                    }
                }
            })
        }
        if (page) {
            link.addEventListener("click", () => {
                setCurrentPage(page)
            })
        }
    })
}

/*makes the contianers viewport height 100 if not enough cards*/
function getCards(){
    let cards = document.querySelectorAll('.card')
    let counter = 0;
    cards.forEach(card=>{
        if(card.classList.contains('hidden')){
            counter++;
        }
    })
    if(counter==0){
        if(section.classList.contains('viewport-height')){
            section.classList.remove('viewport-height')
        }
        return true;
    }
    if(counter<=4){
        section.classList.add('viewport-height')
    }else{
        if(section.classList.contains('viewport-height')){
            section.classList.remove('viewport-height')
        }
    }
}

/*sets the current page of the pagination to show all and the correct amount of games*/
function setCurrentPage(pageNum) {
    getCards();
    currentPage = pageNum;
    handleActivePageNumber();
    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;
    let allGames = document.querySelectorAll('.card')
    allGames.forEach((game, index) => {
        game.classList.add('hidden')
        if (index >= prevRange && index < currRange) {
            game.classList.remove("hidden");
        }
    })
}

/*calls functions onload*/
window.addEventListener('load', () => {
    addToHero();
    displayGames()
    setCurrentPage(1)
    document.querySelectorAll('.small').forEach((link) => {
        let page = Number(link.textContent)
        if (page) {
            console.log(page);
            link.addEventListener("click", () => {
                setCurrentPage(page)
            })
        }
    })
})

/*identifies the active page in pagination*/
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