// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response);
//To get the name individual countries and population of countries in Asia.
data.forEach(function(a){
    if(a.region=='Asia')
    {console.log("Name:"+a.name);
    console.log("Population:"+a.population);
}
});
}

