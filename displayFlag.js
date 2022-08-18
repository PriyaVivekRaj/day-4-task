//2. use the restcountries API url => https://restcountries.eu/rest/v2/all and display all the countries flags in the console


let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.responseType='json';
xhr.send();
xhr.onload=function displyResult() {
let countires= xhr.response;
console.log(countires.length);
for(var i=0;i<countires.length;i++)
console.log("Countires Flag:",countires[i].flag);
};


