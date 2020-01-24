for (var x = 0; x < document.querySelectorAll(".drum").length; x++) {
  document.querySelectorAll(".drum")[x].addEventListener("click", function() {
    //this.style.color="white";
    var a=this.textContent;
    makeSound(a);
    buttonAnimation(a)
  });

}

document.addEventListener("keypress",function(event){
makeSound(event.key);
buttonAnimation(event.key);
});

function makeSound(a)
{
  if(a=="w")
  {
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  else if(a=="a")
  {
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  else if(a=="s")
  {
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  else if(a=="d")
  {
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
  }
  else if(a=="j")
  {
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
  }
  else if(a=="k")
  {
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
  }
  else if(a=="l")
  {
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
}

function buttonAnimation(a)
{
  var b=document.querySelector("."+a);
  b.classList.add("pressed");
  setTimeout(function(){
    b.classList.remove("pressed");
  },100);
}
