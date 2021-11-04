 // movies 
let contPage = 1
let movies = document.getElementById('movies');

function nextPage(){
    contPage++
    renderMovies()
    renderPageMenu()
}

function previousPage(){
    if(contPage != 1){
        contPage--
        renderMovies()
        renderPageMenu()
    }
}

async function renderMovies(){
    let response = await fetch(`/api/${contPage}`);
    let moviesList = await response.json();
    movies.innerHTML= ''
    moviesList.results.forEach((movie) => {
        movies.innerHTML+=
        `
        <div class="movie">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="poster">
                <div class ="movie_info">
                    <h1>${movie.title}</h1>
                    <h4><span>Original Title:</span> ${movie.original_title}</h4>
                    <p class="overview"><span>Overview:</span> ${movie.overview}</p>
                    <p><span>Rating:</span> ${movie.vote_average}</p>
                    <p><span>Release date:</span> ${movie.release_date}</p>
                    <p><span>Original language:</span> ${movie.original_language}</p>
                </div>
            </div>
        `
    });
}

let movieName = document.getElementById('input')

async function renderSearchMovies(){
    let response = await fetch(`/search/${movieName.value}`);
    let moviesList = await response.json();
    contPage = moviesList.page;
    movies.innerHTML= ''
    moviesList.results.forEach((movie) => {
        movies.innerHTML+=
        `
        <div class="movie">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="poster">
                <div class ="movie_info">
                    <h1>${movie.title}</h1>
                    <h4><span>Original Title:</span> ${movie.original_title}</h4>
                    <p class="overview"><span>Overview:</span> ${movie.overview}</p>
                    <p><span>Rating:</span> ${movie.vote_average}</p>
                    <p><span>Release date:</span> ${movie.release_date}</p>
                    <p><span>Original language:</span> ${movie.original_language}</p>
                </div>
            </div>
        `
    });
}

let pages = document.getElementById('pages');
let pages2 = document.getElementById('pages2');

function renderPageMenu(){
    pages.innerHTML= ''
    pages.innerHTML=`
    <button onclick="previousPage()" id="previous_button">Back</button>
    <p>Page ${contPage}</p>
    <button onclick="nextPage()" id="next_button">Next</button> `
    pages2.innerHTML= ''
    pages2.innerHTML=`
    <button onclick="previousPage()" id="previous_button">Back</button>
    <p>Page ${contPage}</p>
    <button onclick="nextPage()" id="next_button">Next</button> `
}

renderPageMenu()
renderMovies() 