// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function tempColor(celcVal)
{
    switch (true) {
        case (celcVal < 0):
            $('#ipvalcelciusrange').css('accent-color', 'rgb(0,0,139)');
            $('.circle').css('background-color', 'rgb(0,0,139)');
            break;
        case (celcVal >= 0 && celcVal <= 10):
            $('#ipvalcelciusrange').css('accent-color', 'rgb(173, 216, 230)');
            $('.circle').css('background-color', 'rgb(173, 216, 230)');
            break;
        case (celcVal > 10 && celcVal <= 20):
            $('#ipvalcelciusrange').css('accent-color', 'green');
            $('.circle').css('background-color', 'green');
            break;
        case (celcVal > 20 && celcVal <= 30):
            $('#ipvalcelciusrange').css('accent-color', 'yellow');
            $('.circle').css('background-color', 'yellow');
            break;
        case (celcVal > 30 && celcVal <= 40):
            $('#ipvalcelciusrange').css('accent-color', 'orange');
            $('.circle').css('background-color', 'orange');
            break;
        case (celcVal > 40):
            $('#ipvalcelciusrange').css('accent-color', 'red');
            $('.circle').css('background-color', 'red');
            break;
        default:
            console.log('Temperature out of range');
            break;
    }
}

$('#celcius').on('change',function(){
    var farenheitVal = ($('#celcius').val() * 9/5) + 32;
     $('#ipvalcelciusrange').val($('#celcius').val());
     $('#farenheit').val(farenheitVal.toFixed(2));
     tempColor($('#celcius').val());
});

$('#ipvalcelciusrange').on('input',function(){
    var farenheitVal = ($('#ipvalcelciusrange').val() * 9/5) + 32;
    $('#celcius').val($('#ipvalcelciusrange').val());
    $('#farenheit').val(farenheitVal.toFixed(2));
    tempColor($('#ipvalcelciusrange').val());
});
 
$('#farenheit').on('change',function(){
    var celciusVal = ($('#farenheit').val() - 32) * 5 / 9;
    $('#celcius').val(celciusVal.toFixed(2));
    $('#ipvalcelciusrange').val(celciusVal.toFixed(2));
    tempColor(celciusVal);
});

//default value
$('#celcius').val(20);
$('#ipvalcelciusrange').val($('#celcius').val());
$('#farenheit').val(($('#celcius').val() * 9/5) + 32);
tempColor($('#celcius').val())





