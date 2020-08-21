// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response);
//To get the name individual countries and converting it to capital.
data.forEach(function(a){console.log(a.name.toUpperCase())});
}
/*display name and population 
for(let i=0;i<data.length;i++)
    console.log("Name of the country in capital:"+name[i]);
}
*/
