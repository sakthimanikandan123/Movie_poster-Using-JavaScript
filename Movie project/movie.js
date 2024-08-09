function getmovie()
{
let j=document.getElementById("find");
    var url="http://www.omdbapi.com/?apikey=61e576a4&t="
fetch(url.concat(j.value))
    .then(Response=>{
        Response.json()
        .then(data=>{
            console.log(data)
            document.getElementById("bo").innerText=data.BoxOffice
            document.getElementById("de").innerText=data.Plot
            document.getElementById("ge").innerText=data.Genre
            document.getElementById("rd").innerText=data.Released
            document.getElementById("di").innerText=data.Director
            document.getElementById("ac").innerText=data.Actors
            document.getElementById("wr").innerText=data.Writer
            document.getElementById("aw").innerText=data.Awards
            document.getElementById("ib").innerText=data.imdbRating
        })
    })
}
    