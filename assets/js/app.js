console.log('test');

//nav view on mobile
$('#menuButton').on('click', function() {
    event.preventDefault();
    $('nav').toggleClass('active');
})

$('#close').on('click', function() {
    event.preventDefault();
    $('nav').removeClass('active');
})