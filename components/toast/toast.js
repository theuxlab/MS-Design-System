$(document).ready(function() {
    fireToast(500);

    $('.closeToast').on('click', function() {
        $('.toast').removeClass('open');
        $('body').removeClass('openToast');

        return false;
    });
});

function fireToast(delay = 1000) {
    setTimeout(function(){ 
        $('.toast').addClass('open'); 

        setTimeout(function(){ 
            $('body').addClass('openToast');
        }, 2550);
    }, delay);
}