let movieTitles = document.querySelectorAll(".movie-title");
let moviesDetail = document.querySelectorAll(".movie-title + div");
for (let i = 0; i < movieTitles.length; i++) {
    movieTitles[i].addEventListener("mouseenter", function() {
        for(let i = 0; i < movieTitles.length; i++) {
            movieTitles[i].classList.remove("dispear");
        }
        this.classList.add("dispear");
    })

}
// for(let i = 0; i < moviesDetail.length; i++) {
//     moviesDetail[i].addEventListener("mouseenter", function() {
//         this.classList.add("dispear");
//     })
// }



