$(document).ready(function() {
    $('form').submit(function() {
        var city = $("#city").val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q="+ city+ "&&appid=8f060ea6bca98c81e38e69d83cc8f08b"
        $.get(url, function(res) {
            console.log(res.name);
            console.log(res.main.temp);
         $("h2").html("<h2>"+(res.name)+"</h2>");
         $("h3").html("<h3>Temperature: "+(res.main.temp*9/5 -459.67)+" F</h3>");
        }, 'json');
        return false;
    });
});