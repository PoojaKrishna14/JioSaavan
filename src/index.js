let Mysongs=[
    {
        AlbumName:"Mangalyam",
        Artist:" Sumit Bhalla",
        duration:"4:20",
        image:"../images/img17.jpg",
        audio:"./Audio/1.mpeg"
    },
    {
        AlbumName:"Padmaavat",
        Artist:"Bhansali ",
        duration:"4:20",
        image:"../images/img1.jpg",
        audio:"./Audio/2.mpeg"
        },
    {
        AlbumName:"Lsingh",
        Artist:"Arih ",
        duration:"4:43",
        image:"../images/img2.jpg",
        audio:"./Audio/3.mpeg"
    },
    {
        AlbumName:"Arabic Kuttu",
        Artist:"Anirudh ",
        duration:"4:39",
        image:"../images/img3.jpg",
        audio:"./Audio/17.mpeg"
    },
    {
        AlbumName:"abcd",
        Artist:"tippu ",
        duration:"4:43",
        image:"../images/img20.jpg",
        audio:"./Audio/4.mpeg"
    },
    {
        AlbumName:"escape",
        Artist:"Arijit Singh ",
        duration:"4:43",
        image:"../images/img19.jpg",
        audio:"./Audio/5.mpeg"
    },
    {
        AlbumName:"gone mad",
        Artist:"Arijit Singh ",
        duration:"4:43",
        image:"../images/img20.jpg",
        audio:"./Audio/6.mpeg"
    },
    {
        AlbumName:"hate this",
        Artist:"Arijit Singh ",
        duration:"4:43",
        image:"../images/img2.jpg",
        audio:"./Audio/7.mpeg"
    },
    {
        AlbumName:"Naino Waale",
        Artist:"sonu nigam",
        duration:"4:43",
        image:"../images/img1.jpg",
        audio:"./Audio/8.mpeg"
    },
    {
        AlbumName:"Jolly-o",
        Artist:"Anirudh ",
        duration:"3:28",
        image:"../images/img3.jpg",
        audio:"./Audio/9.mpeg"
    },
    {
        AlbumName:"No idea",
        Artist:"Arijit Singh ",
        duration:"4:43",
        image:"../images/img19.jpg",
        audio:"./Audio/10.mpeg"
    },
    {
        AlbumName:"beast mode",
        Artist:"Anirudh ",
        duration:"4:43",
        image:"../images/img3.jpg",
        audio:"./Audio/11.mpeg"
    },
    {
        AlbumName:"chadda",
        Artist:"tippu ",
        duration:"4:43",
        image:"../images/img20.jpg",
        audio:"./Audio/12.mpeg"
    },
    {
        AlbumName:"Gone case",
        Artist:"Arijit Singh ",
        duration:"4:43",
        image:"../images/img19.jpg",
        audio:"./Audio/13.mpeg"
    },
    {
        AlbumName:"rock star",
        Artist:"Arijit Singh ",
        duration:"4:43",
        image:"../images/img20.jpg",
        audio:"./Audio/14.mpeg"
    }, {
        AlbumName:"I dont know",
        Artist:"Singh ",
        duration:"4:43",
        image:"../images/img3.jpg",
        audio:"./Audio/15.mpeg"
    },
    {
        AlbumName:"who are you",
        Artist:"Arijit ",
        duration:"4:43",
        image:"../images/img19.jpg",
        audio:"./Audio/16.mpeg"
    },
    {
        AlbumName:"Holi",
        Artist:"Sanjayali ",
        duration:"2:56",
        image:"../images/img1.jpg",
        audio:"./Audio/17.mpeg"
    },
    {
        AlbumName:"khalibali",
        Artist:"Arijit Singh ",
        duration:"4:18",
        image:"../images/img1.jpg",
        audio:"./Audio/1.mpeg"
    },
    {
        AlbumName:"Laal singh",
        Artist:"unknown ",
        duration:"4:43",
        image:"../images/img19.jpg",
        audio:"./Audio/18.mpeg"
    }
 
]

 let audio_content=document.querySelector(".audio_content");
//  console.log(audio_content);

function play(index,pause) {

    var audio = document.getElementById("audio"+index);
    console.log(audio,index,pause);
if(pause){
    audio && audio.pause();
}else{
    audio && audio.play();
}
} 
 let output="";
 for(let index=0 ; index < Mysongs.length ; index++){
    let value=Mysongs[index];
    let{AlbumName,Artist,duration,image,audio}=value;

    output+=`<div class='audio_list'>
    <img  onclick="play(${index})" class='img' src="${image}"/>
    <p class='title'>${AlbumName}</p>
    <div class="para">
    <p class='art'>${Artist}</p>
    <p class='tym'>${duration}</p></div>
    <audio src="${audio}" type="audio/mpeg" id="${"audio"+index}"></audio>
    <div class="pla">
 
    <input type="button" class="play" value="Play /" onclick="play(${index})"></input>
    <input type="button" class="pause" value="Pause" onclick="play(${index},true)"></input>
    
    </div></div>
    `
    audio_content.innerHTML=output;    
}
    let input = document.querySelector(".Search");
    input.addEventListener("change",e=>{   
    let output1="";
    Mysongs.filter((value,index)=>{

    if(e.target.value == value.AlbumName)
   {

    output1 +=`<div class='audio_list'>
    <img  onclick="play(${index})" class='img' src="${value.image}"/>
    <p class='title'>${value.AlbumName}</p>
    <div class="para">
    <p class='art'>${value.Artist}</p>
    <p class='tym'>${value.duration}</p></div>
    <audio src="${value.audio}" type="audio/mpeg" id="${"audio"+index}"></audio>
    <div class="pla">
    <input type="button"  class="play"value="Play /" onclick="play(${index})" ></input>
    <input type="button" class="pause" value="Pause" onclick="play(${index},true)"></input>
    </div>
    </div> `
    
   }
   audio_content.innerHTML = output1;  

})

})
// model block

let icon_change = document.querySelector(".audio_main");
let favorite = document.querySelector(".favorite");

icon_change.addEventListener("mouseenter", (e) => {
  let child = icon_change.children[0].children[0];
  child.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
  child.style.fontSize = "20px";
});
icon_change.addEventListener("mouseleave", (e) => {
  let child = icon_change.children[0].children[0];
  child.innerHTML = `1`;
  child.style.fontSize = "16px";
});

let heart_anchor = document.querySelector(".heart_anchor");
let likes = document.querySelector(".favorite");
let data = localStorage.getItem("count");

counter = localStorage.getItem("counter");
likes.innerHTML = counter;
heart_anchor.addEventListener("click", (e) => {
  counter++;
  likes.innerHTML = counter;
  localStorage.setItem("counter", counter);
});

heart_anchor.addEventListener("mousedown", (e) => {
  heart_anchor.style.color = "red";
  heart_anchor.style.borderColor = "red";
});
heart_anchor.addEventListener("mouseup", (e) => {
  heart_anchor.style.color = "gray";
  heart_anchor.style.borderColor = "gray";
});



