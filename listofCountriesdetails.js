// 3. Use the same rest countries and print all countries name,region,subregion and population

let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.responseType='json';
xhr.send();
xhr.onload = function displyResult() {
    let countries = xhr.response;
    console.log(countries.length);
    for (var i = 0; i < countries.length; i++) {
        console.log("countries Names:", countries[i].name.common);
        console.log("countries Regions:", countries[i].region);
        console.log("countries Subregions:", countries[i].subregion);
        console.log("countries Language:", countries[i].languages);
        console.log("countries Populations:", countries[i].population);
    };
}