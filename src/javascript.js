let mySongs = document.getElementById(".audio_content");
let input= document.getElementById(".input")

async function Omdbmovies() 
{
let Songs = await fetch(`https://www.omdbapi.com/?s=${movieSearch.value}&apikey=ec701631`);
    // movies = await movies.json();
    console.log(movies);
    // movies = movies.Search;
    // // console.log(movies);
    // Mymovies.innerHTML=``;
    // movies.map(function(ele)
    //     {
    //     let child = document.createElement("div");
    //     child.className = "child";

    //     let h1 = document.createElement("h1");
    //     h1.textContent = ele.Title;

    //     let img = document.createElement("img");
    //     img.src = ele.Poster;

    //     child.append(h1);
    //     child.append(img);

    //     return Mymovies.append(child);
    // })
    }

    // btn.addEventListener('click', Omdbmovies);