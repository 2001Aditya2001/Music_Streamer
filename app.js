const music = new Audio('starboy_audio.mp3');
// create array

const songs = [
	{
      	id:'1',
      	songName :"On My Way <br> <div class=\"subtitle\">Alan Walker</div>",
      	poster :"./download.jpg"
    },
    {
      	id:'2',
      	songName:"Attention <br> <div class=\"subtitle\">Charlie Puth</div>",
      	poster:"./attention.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
	element.getElementsByTagName("img")[0].src=songs[i].poster;
	element.getElementsByTagName("h5")[0].innerHTML=songs[i].songName;
})

let masterPlay=document.getElementsById("masterPlay");

masterPlay.addEventListener('click',()=>{
	alert("hii");
	// if(music.paused || music.currentTime <=0){
	// 	music.play();

	// }else {
	// 	music.pause();
		
	// }
});