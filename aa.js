let title = document.querySelector('#movieTitle');
let publisher = document.querySelector('#moviePublisher');
let image = document.querySelector('#movieImage');
let addMovie = document.querySelector('#AddMovie');
let clearMovie = document.querySelector('#ClearMovie'); // Clear button کو سلیکٹ کریں

addMovie.addEventListener("click", addMovies);
clearMovie.addEventListener("click", clearMovies); // Clear button کے لیے eventListener

function addMovies() {
    if (!title.value) {
        alert('Please enter your movie');
        return;
    } else if (!publisher.value) {
        alert('Please enter your Publisher');
        return;
    } else if (!image.value) {
        alert('Please enter your Image');
        return;
    }

    let movie = {
        title: title.value,
        publisher: publisher.value,
        image: image.value
    };

    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push(movie);

    localStorage.setItem('movies', JSON.stringify(movies)); // movies array کو `localStorage` میں save کریں

    display(movies);
}

// 🛑 **Clear Function (New)**
function clearMovies() {
    localStorage.removeItem('movies'); // `localStorage` سے movies کو ہٹائیں
    document.getElementById('movielist').innerHTML = ''; // UI سے بھی remove کریں
}

// 🖥 **Display Function**
function display(movies) {
    let movieList = document.getElementById('movielist');
    movieList.innerHTML = ''; // پہلے سے موجود movies کو کلئیر کریں

    movies.forEach(movie => {
        let div = document.createElement('div');
        div.classList.add('movie-item');
        div.innerHTML = `
            <img src="${movie.image}" alt="movie.cover" class="movie-image" width="200px">
            <div class="movie-details">
                <p class="movie-name">${movie.title}</p>
                <p class="movie-publisher">by ${movie.publisher}</p>
            </div>`;
        
        movieList.appendChild(div);
    });
}

// 🏁 **Page Load پر Movies دکھائیں**
let movies = JSON.parse(localStorage.getItem('movies')) || [];
display(movies);