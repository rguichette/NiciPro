const loginBtn = document.getElementById("login_btn")
const myMoviesBtn = document.getElementById("my_movies_btn")

//grab value from somwhere --> obj
let loggedout = false;


//don't touch
if(loginBtn && loggedout===false){
loginBtn.addEventListener("click", (e)=>{
console.log("loggind in");
window.location = '../pages/Home.html'
})

}

  myMoviesBtn.addEventListener("click", (e)=>{
    console.log("moving to my movies");
    window.location = '../pages/MyMovies.html'

})  /** rest of code goes here 





*/



// logout functionality 



if(loggedout){
    //load index page
}





