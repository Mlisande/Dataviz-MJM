/*function refresh(){
    var t = 1000; // rafraîchissement en millisecondes
    setTimeout('showDate()',t);
}

function showDate() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    var time = h + ':' + m;
    document.getElementById('horloge').innerHTML = time;
    refresh();
 } 
 
 fetch("https://superheroapi.com/api/access-token/character-id/image")
.then(reponse =>reponse.json())
.then(reponse2 => console.table(reponse2)) */

// animeJS 

// constentes à portées globales
/*const title = document.querySelector("h1");
const days = [...document.querySelectorAll("h1 span")];

//déclenchement de l'animation avec la souris qui rentre/sort de l'animation
title.addEventListener("mouseenter", handDays);
title.addEventListener("mouseleave", handDays);

let isAnimatingIn = false; // 1ère animation
let calledOut = false; // si on a quitté notre h1
let animeOpened = false; // si on reste dans notre h1

function handDays(){
    if (animeOpened){
        animOut();
        animeOpened = false;
        return;
    }

    if(isAnimatingIn){
        calledOut = true;
        return;
    } // rappel la fonction pour éviter le spam : de relanver l'animation dès que la souris passe sur le texte
   
    isAnimatingIn = true; // en train d'être animé
    
    // promesse qu'on va résoudre avec resolve. Une fois résolue, on pourra effectuer d'autres fonctions callback
    const animePromise = new Promise((resolve) => {
        animIn()
        setTimeout(() => {
            resolve()},
            750) // au bout de 750ms, je veux résoudre ma promesse
    })
    animePromise.then(() => {
        isAnimatingIn = false;

        if(calledOut){
            animOut()
            calledOut = false;
        } else if(!calledOut){
            animeOpened = true;
        }
    })
}

// fonction animeIn : définit la manière dont l'animation va se déplacer à l'écran
function animIn(){
    // pour utiliser animeJS on utilise la méthode anime à laquelle on applique
    anime({
        targets : "h1 span",
        translateX : function(){return anime.random(-250,250)},
        translateY : function(){return anime.random(-250,250)},
        translateZ : function(){return anime.random(-2000,750)},
        rotate : function(){return anime.random(-250,250)},
        easing : "easeOutCirc", // easin =manière dont se fait l'amition, easeOutCirc=manière dont l'animation se déroule, plus lent à la fin
        duration : 750 // duree de l'animation
    })
}

// funtion animOut : Définit la manière dont les lettres vont reprendre leurs places
function animOut(){
    anime({
        targets : "h1 span",
        translateX : 0,
        translateY : 0,
        translateZ : 0,
        rotate : 0,
        easing : "easInQuad", // easin =manière dont se fait l'amition, easeInQuad=manière dont l'animation se termine
        duration : 750 // duree de l'animation
    })
}*/

const title = document.querySelector("h1")

const letters = [...document.querySelectorAll('h1 span')]





title.addEventListener("mouseenter", handleLetters);

title.addEventListener("mouseleave", handleLetters);



let isAnimatingIn = false;

let calledOut = false;

let animOpened = false;



function handleLetters(){

  

  if(animOpened){

    animOut();

    animOpened = false;

    return;

  }



  if(isAnimatingIn){

    calledOut = true;

    return;

  }



  isAnimatingIn = true;



  const animPromise = new Promise((resolve) => {

    animIn()

    setTimeout(() => {

      resolve()

    }, 750)

  })

  animPromise.then(() => {

    isAnimatingIn = false;



    if(calledOut) {

      animOut()

      calledOut = false;

    } else if (!calledOut){

      animOpened = true;

    }

  })



}



function animIn(){

  anime({

    targets: "h1 span",

    translateX: function(){

      return anime.random(-250,250)

    },

    translateY: function(){

      return anime.random(-250,250)

    },

    translateZ: function(){

      return anime.random(-2000,750)

    },

    rotate: function(){

      return anime.random(-250,250)

    },

    easing: "easeOutCirc",

    duration: 750

  })

}



function animOut(){

  anime({

    targets: "h1 span",

    translateX: 0,

    translateY: 0,

    translateZ: 0,

    rotate: 0,

    easing: "easeInQuad",

    duration: 750

  })

}