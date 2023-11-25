var request =new XMLHttpRequest();
request.open("GET" , "https://restcountries.eu/rest/v2/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    for(var i=0; i<=result.lenght; i++){
        var flag = result[i].name;
        console.log(flag);
    }
}