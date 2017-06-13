$("document").ready(function(){

  $(".city").submit(function(event){
    event.preventDefault();

    var city = $("#city").val();

    if (city != '') {
      $.ajax({
        url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=72844c9c91083fec0c515ae99b51c5cd",
        type: "GET",
        dataType: "jsonp",
        success: function(data){
          
          $("#main").text(data.weather[0].main);
          $("#main2").text(data.weather[0].main);
          $("#lon").text(data.lon);
          $("#lat").text(data.lat);
          $("#temp").text(data.main.temp);
          $("#temp_min").text(data.main.temp_min);
          $("#temp_max").text(data.main.temp_max);
          $("#pressure").text(data.main.pressure);
          $("#humidity").text(data.main.humidity);
          $("#speed").text(data.wind.speed);
          $("#deg").text(data.wind.deg);
          $("#country").text(data.sys.country);

          $("#output").show();
        }
      });

    }else {
      $("#error").html('field cannot be empty');
    }
  });
});
// {
//   "coord":{"lon":-122.42,"lat":37.77},
//   "weather":[{"id":200,"main":"Thunderstorm","description":"thunderstorm with light rain","icon":"11n"},{"id":701,"main":"Mist","description":"mist","icon":"50n"}],
//   "base":"stations","main":{"temp":59.16,"pressure":1020,"humidity":71,"temp_min":51.8,"temp_max":78.8},
//   "visibility":16093,"wind":{"speed":8.05,"deg":250},
//   "clouds":{"all":75},"dt":1497333900,
//   "sys":{"type":1,"id":397,"message":0.0055,"country":"US","sunrise":1497358032,"sunset":1497411165},"id":5391959,"name":"San Francisco","cod":200}
