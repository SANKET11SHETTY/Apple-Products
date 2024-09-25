let ap = document.getElementById("airpods1");
let ap2 = document.getElementById("airpods2");
let ip16 = document.getElementById("iPhone16");
let ip16Pro = document.getElementById("iPhone16pro");
let airpods = "images/airpod.png";
let airpodsANC = "images/airpods4.png";
let iphone16 = "images/iPhone 16.png";
let iphone16pro = "images/ip16PRO.png";
let iphone15plus = "images/iPhone15PLUS.png";
let iphone15pro = "images/ip15PRO.png";
let series10 = "images/iWatch.png";
let ultra2 = "images/iWatch ultra 2.png";

ap.addEventListener('click', function () {
  document.getElementById('thepods').src = airpods;
})

ap2.addEventListener('click', function () {
  document.getElementById('thepods').src = airpodsANC;
})

ip16.addEventListener('click', function(){
  document.getElementById("aIP16").src = iphone16;
})

ip16Pro.addEventListener('click', function (){
  document.getElementById('aIP16').src = iphone16pro;
})

$("#iPhone15").click(()=>{
  document.getElementById('aIP15').src = iphone15plus;
})

$("#iPhone15pro").click(()=>{
  document.getElementById('aIP15').src = iphone15pro;
})

$("#series10").click(()=>{
  document.getElementById('iwatch').src = series10;
})

$("#ultra2").click(()=>{
  document.getElementById('iwatch').src = ultra2;
})