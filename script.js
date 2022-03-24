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
.then(reponse2 => console.table(reponse2))*/

/*import * as Dataviz from './data.json';

function load() {
 var mydata = JSON.parse(Dataviz);
 alert(mydata[0].lundi);
 alert(mydata[1].mardi);
 alert(mydata[2].mercredi);
 alert(mydata[3].jeudi);
 alert(mydata[4].vendredi);
}

load();*/

/*let myJSON = {
    "lundi":["satisfait"],
    "mardi":["content"],
    "mercredi":["neutre"],
    "jeudi":["content", "fatigué"],
    "vendredi":["festif"]
};

//let myNewJSON = JSON.stringify(myJSON,null, '\t');

console.log(myJSON.jeudi);*/

let myJSON = '{"lundi":"satisfait", "mardi":"content","mercredi":"neutre","jeudi":["content", "fatigué"],"vendredi":"festif"}';

let myNewJSON = JSON.parse(myJSON);
console.log(myNewJSON.lundi);