$(function () {             
    
                //Carousel Direction right to left for Arabic
                if ($('body').hasClass("rtl")) {
    
                    $("#imageCarousel").removeAttr("data-ride").addClass("rtl").each(function () {
                        $(this).carousel();
    
                        var carousel = $(this).data('bs.carousel'); // or .data('carousel') in bootstrap 2
    
                        // At first, reverse the order of the items in the carousel because we're moving backwards
                        $(this).find('> .carousel-inner > .item:not(:first-child)').each(function () {
                            $(this).prependTo(this.parentNode);
                        });
    
                        // Override the bootstrap carousel prototype function, adding a different one won't work (it'll work only for the first slide)
                        carousel.cycle = function (e) {
                            if (!e) this.paused = false
                            if (this.interval) clearInterval(this.interval);
                            this.options.interval
                                && !this.paused
                                && (this.interval = setInterval($.proxy(this.prev, this), this.options.interval))
                            return this;
                        };
                        carousel.cycle();
                    });
                } else {
                    $("#imageCarousel").removeClass("rtl");
                }
                    
                //**** Hide and show the left right arrows by hovering over the carousel*****//
                 $('#imageCarousel').on("mouseenter",function(){
                     $(".leftrightcontrols").fadeIn("slow");
                 }).on("mouseleave", function(){
                     $(".leftrightcontrols").fadeOut("slow");
                 }); 
                
                //////****Play pause button function*****//////
                 $('#playButton').on("click", function () {
                    $('#imageCarousel').carousel('cycle');
                });
                $('#pauseButton').on("click", function () {                
                    $('#imageCarousel').carousel('pause');
                });
    
                /** Play pause button toggling effect*/
                $("button.playpause").on("click", function () {
                    $("button.playpause").toggle();
                });
    
                /** Start stop carousel by clicking on the indicators */
                $(".carousel-indicators li, .leftrightcontrols, a.modal-link").on('click', function(e){
                    
                    e.preventDefault();                
                    if ($(this).hasClass('active')) {                    
                        $("button.playpause").toggle();                    
                    } else {
                        $('#imageCarousel').carousel("pause");
                        $("button#pauseButton").hide();
                        $("button#playButton").show();
                    }                   
                });
                
                //****For mobile touch enabled****//
                $("#imageCarousel").swipe({
    
                    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
    
                        if (direction == 'left') $(this).carousel('next');
                        if (direction == 'right') $(this).carousel('prev');
                        $('#imageCarousel').carousel("pause");
                        $("button#pauseButton").hide();
                        $("button#playButton").show();
    
                    },
                    allowPageScroll: "vertical"
                });
            });
    