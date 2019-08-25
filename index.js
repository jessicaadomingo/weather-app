$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();

    var input = $('input').val()
    $('#search').hide(500);

    $.get('https://api.openweathermap.org/data/2.5/weather?q='+ input +'&APPID=7b7bbe60550027a39d5b3df870eff8f3&units=metric', function(data) {
      console.log("data", data)
      $('#cityname').text(data.name + ", " + data.sys.country)
      // this is how you access elements in an array (use square brackets and the index)
      $('#clouds').text(data.weather[0].main)
      $('#cloudsdescript').text(data.weather[0].description)
      $('#temp').text(data.main.temp)
      $('#pressure').text(data.main.pressure)
      $('#humidity').text(data.main.humidity)
      $('#mintemp').text(data.main.temp_min)
      $('#maxtemp').text(data.main.temp_max)
      $('#wind').text(data.wind.speed)

      $('#results').show(1000);
    })
  });

  $('#searchagain').on('click', function() {
    $('#search').fadeIn(1000);
    $('#results').fadeOut(1000);
  });
});
