const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad534e8da5mshdba87968ddb068fp1d1f6fjsnd8cc9d026630',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

async function getMovies(){
    const temp = await fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game', options)
    const data = await temp.json()
    const list = data.d
    list.map(item =>{
        const name = item.l
        const poster = item.i.imageUrl
        const movie = `<li><img src = "${poster}"> <h2>${name}</h2> </l1>`
        document.querySelector('.movies').innerHTML += movie;
    })
}

getMovies()