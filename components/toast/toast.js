$(document).ready(function() {
    fireToast(500);

    $('.krds-closeToast').on('click', function() {
        $('.krds-toast').removeClass('krds-open');
        $('body').removeClass('krds-openToast');

        return false;
    });
});

function fireToast(delay = 1000) {
    setTimeout(function(){ 
        $('.krds-toast').addClass('krds-open'); 

        setTimeout(function(){ 
            $('body').addClass('krds-openToast');
        }, 2550);
    }, delay);
}