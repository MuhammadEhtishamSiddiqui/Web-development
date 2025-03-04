let title = document.querySelector('#movieTitle')
let publisher = document.querySelector('#moviePublisher')
let image = document.querySelector('#movieImage')
let addMovie = document.querySelector('#AddMovie')
let clearMovie = document.querySelector('#ClearMovie')

addMovie.addEventListener("click", addMovies);

function addMovies(){
    if (!title.value){
        alert('please enter your movie')
        return
    }
    else if(!publisher.value){
        alert('please enter your Publisher')
        return

    }
    else if(!image.value){
        alert('please enter your Image')
        return   
    }
    let movie = {
        title : title,
        publisher: publisher,
        image : image.value
    }
    console.log(movie);
    

}