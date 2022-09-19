let home = 0; 
let guest = 0;
let countHome =0;
let countGuest =0;

let counterHome = document.getElementById("scoreHome")
let counterGuest = document.getElementById("scoreGuest")
counterHome.textContent=countHome
counterGuest.textContent=countGuest

function plusOneHome() {
    countHome+=1
    counterHome.textContent=countHome
}
function plusTwoHome() {
    countHome+=2
    counterHome.textContent=countHome
}
function plusThreeHome() {
    countHome+=3
    counterHome.textContent=countHome
}
function plusOneGuest() {
    countGuest+=1
    counterGuest.textContent=countGuest
    }
function plusTwoGuest() {
    countGuest+=2
    counterGuest.textContent=countGuest
}
function plusThreeGuest() {
    countGuest+=3
    counterGuest.textContent=countGuest
}

function reset() {
    countHome=0
    countGuest=0
    counterHome.textContent =countHome
    counterGuest.textContent= countGuest
}