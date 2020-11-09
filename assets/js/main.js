$(document).ready(function() {
    /*Lors du clic sur le bouton #green...*/
    $('#greenOne').click(function() {
        /*Change la couleur du texte*/
        $('#text').css('color', 'green');
    });

    $('#redOne').click(function() {
        $('#text').css('color', 'red');
    });

    $('#blueOne').click(function() {
        $('#text').css('color', 'blue');
    });

})