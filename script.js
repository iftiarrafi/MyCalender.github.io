const mash = document.querySelector(".month h1");
const year = document.querySelector(".month p");
const date = document.querySelector("#tarikh");
const bar = document.querySelector("#bar");


const m = new Date().getMonth();
const y = new Date().getFullYear();
const d = new Date().getDate();
const b = new Date().getDay();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Seprtember",
    "October",
    "November",
    "December"
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

mash.innerHTML = months[m];
year.innerHTML = y;
date.innerHTML = d;
bar.innerHTML = days[b];