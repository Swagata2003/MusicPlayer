

let songindex=0;
let audioelement=new Audio('songs/0.mp3');
let masterplay=document.getElementById('masterplay');
let progressbar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitem=Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songname:"Ellie Goulding - Love Me Like You Do (Lyrics)",filepath:"songs/0.mp3",coverpath:"cover/0.jpg",dur:"04:12"},
    {songname:"Ruth B.-Dandelions",filepath:"songs/1.mp3",coverpath:"cover/1.jpg",dur:"03:58"},
    {songname:"Ariana-Side to Side",filepath:"songs/2.mp3",coverpath:"cover/2.jpg",dur:"03:46"},
    {songname:"Sean Paul – No Lie (feat. Dua Lipa)",filepath:"songs/3.mp3",coverpath:"cover/3.jpg",dur:"03:41"},
    {songname:"Sia-Cheap Thrills",filepath:"songs/4.mp3",coverpath:"cover/4.webp",dur:"04:21"},
    {songname:"One direction-Night Changes",filepath:"songs/5.mp3",coverpath:"cover/5.jpg",dur:"03:46"},
    {songname:"Zara Zara",filepath:"songs/6.mp3",coverpath:"cover/6.jpg",dur:"03:26"},
    {songname:"Khariyat",filepath:"songs/7.mp3",coverpath:"cover/7.jpg",dur:"04:40"},
    {songname:"Taki Taki-DJ Snake",filepath:"songs/8.mp3",coverpath:"cover/8.jpg",dur:"03:51"},
    {songname:"Arijit Singh-Tum hi ho",filepath:"songs/9.mp3",coverpath:"cover/9.jpg",dur:"04:22"}
]
//handle play
masterplay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0){

        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
songitem.forEach((element,i)=>{
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
    element.getElementsByClassName("timestamp")[0].innerText=songs[i].dur;
})
//listening to events
audioelement.addEventListener('timeupdate',()=>{
    //console.log('time')
    //update seekbar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    //console.log(progress);
    progressbar.value=progress;
})
//for moving the audio pointer 
progressbar.addEventListener('change',()=>{
    audioelement.currentTime=progressbar.value*audioelement.duration/100;
})
const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src=`songs/${songindex}.mp3`;
        mastersongname.innerText=songs[songindex].songname;
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity=1;
        gif.src=`cover/${songindex}.jpg`;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    mastersongname.innerText=songs[songindex].songname;
    audioelement.src=`songs/${songindex}.mp3`;
    gif.src=`cover/${songindex}.jpg`;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    mastersongname.innerText=songs[songindex].songname;
    audioelement.src=`songs/${songindex}.mp3`;
    gif.src=`cover/${songindex}.jpg`;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})


