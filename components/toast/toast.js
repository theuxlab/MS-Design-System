$(document).ready(function() {
    fireToast(500);
    // Use this tab key function according to the situation to focus toast and then close it to tab through other HTML page elements. 
    // Without closing this toast, you cannot tab through other HTML elements. Use this functionality carefully.     
    $(document).keyup(function (e) {
        if (e.keyCode == 9) {
            if($("body").hasClass("openToast")){                
                $(".toast").find("p a").focus();
            }  
        }             
    }); // Tab key function ends here.

    $('.closeToast').on('click', function() {
        $('.toast').removeClass('open').attr("aria-hidden", true);
        $('body').removeClass('openToast');

        return false;
    });
});

function fireToast(delay = 1000) {
    setTimeout(function(){ 
        $('.toast').addClass('open').attr("aria-hidden", false); 

        setTimeout(function(){ 
            $('body').addClass('openToast');
        }, 2550);
    }, delay);
}
