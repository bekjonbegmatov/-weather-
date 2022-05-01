$(document).ready(function () {
    $('#goto').on('click' , function(){
        
        let location = $("#location").val();
       
        let link = "http://api.weatherapi.com/v1/forecast.json?key=f68b6746b6504d11ad2124737223004&q=" + location + "&days=3&aqi=no&alerts=no"
        
        
        location =  location[0].toUpperCase() + location.substring(1)
        fetch(link)
        .then(response => response.json())
        .then(data => {
            if (data.current) {
                $('#iconw').attr("src", data.current.condition.icon);
                $('#temp_c').html('Temp &#8451; : ' + data.current.temp_c);
                $('#temp_f').html('Temp &#8457; : ' + data.current.temp_f);
                $('#user_location').html('Your location is : ' + location);
                $('#weather').html("The weather is : " + data.current.condition.text);

                $('#time').html("The time of weather: " + data.current.last_updated);
                

            } else if (data.error) {
                console.log("Foobar" , data.error);
                $('#error').html(data.error.message , "</br>" , "Error code : " + data.error.code)
            }
        })
        $('#back').on('click', function(){
            $('#inp').css('display' , 'block');
            $('#second').css('display' , 'none');
        })
        

        $('#inp').css('display' , 'none');
        $('#second').css('display' , 'block');
        

         
        

    });


});
