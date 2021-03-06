/* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
    
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
});     
    
/* Collapse */
$("[data-collapse]").on("click", function(event) {
    event.preventDefault();
    
    var $this = $(this),
        blockId = $this.data('collapse');
    
    $this.toggleClass("active");
});

/* Slider*/
$(document).ready(function(){
    $('.pets__inner').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 700,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });
});


/* Modal*/
const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $("body").addClass('no-scroll')

    setTimeout(function() {
        $(modalId).find(".modal__dialog").css({
            transform: "scale(1)"
        });
    }, 200);
});

modalClose.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.find(".modal__dialog").css({
        transform: "scale(0)"
    });

    setTimeout(function() {
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll')
    }, 200);

});

$(".modal").on("click", function(event) {
    let $this = $(this);

    $this.find(".modal__dialog").css({
        transform: "scale(0)"
    });

    setTimeout(function() {    
        $this.removeClass('show');
        $("body").removeClass('no-scroll')
    }, 200);
});

$(".modal__dialog").on("click", function(event) {
    event.stopPropagation()
});

$(".slickPrev").on("click", function(event) {
    event.preventDefault();
        
    let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

    currentSlider.slick("slickPrev");
});

$(".slickNext").on("click", function(event) {
    event.preventDefault();

    let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

    currentSlider.slick("slickNext");
});
