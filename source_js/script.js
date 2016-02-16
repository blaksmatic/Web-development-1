/*referance: http://lions-mark.com/jquery/scrollTo/ */

var divs = document.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", highlightThis);
    /*
     divs[i].addEventListener("click", highlightThis, true);
     divs[i].addEventListener("click", highlightThis, false);*/
}

function highlightThis(event) {
    //event.stopPropagation();
    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor = 'yellow';
    alert(this.className);
    this.style.backgroundColor = backgroundColor;
}

var $window = $(window)
var $document = $(document)



/*This function is resizing the navbar*/
$document.ready(function () {
    $window.scroll(function () {
        var CurrentPosition = $document.scrollTop();
        if (CurrentPosition > 30) {
            $('nav.navbar').addClass('small');
        } else {
            $('nav.navbar').removeClass('small');
        }
    });
});

/*this function is smooth scrolling*/
$document.ready(function () {
    $('a[href*=#]').on('click', function (event) {
        if (this.id == "Trail" || this.id == "stor" || this.id == "charac" || this.id == "chrou")
            event.preventDefault();
        $('body').animate({scrollTop: $(this.hash).offset().top -100}, 'slow');
    });
});

/*This function is carousel moving right*/
$document.ready(function () {
    $('#navIconRight').click(function () {
        $('#carousel ul').animate({marginLeft: -1280}, 1500, function () {
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft: 0});
        })
    })
});

/*This function is carousel moving left*/
$document.ready(function () {
    $('#navIconLeft').click(function () {
        $('#carousel ul').animate({marginLeft: 1280}, 1500, function () {
            $(this).find("li:first").before($(this).find("li:last"));
            $(this).css({marginLeft: 0});
        })
    })
});

/*This function is position indicator*/
$document.ready(function () {
    var trailerDistance = $("#Trailer").offset().top;
    var storyDistance = $("#story").offset().top;
    var characterDistance = $(".charPicture").offset().top;
    var crouselDistance = $("#carousel").offset().top;

    $window.scroll(function () {
        var CurrentPosition = $document.scrollTop()+130;
       // alert(CurrentPosition+" "+characterDistance);
        if (CurrentPosition > trailerDistance && CurrentPosition <= storyDistance)
            $("#Trail").addClass("isHere");
        else
            $("#Trail").removeClass("isHere");
        if (CurrentPosition > storyDistance && CurrentPosition <= crouselDistance)
            $("#stor").addClass("isHere");
        else
            $("#stor").removeClass("isHere");
        if (CurrentPosition > crouselDistance && CurrentPosition <= 2350)
            $("#chrou").addClass("isHere");
        else
            $("#chrou").removeClass("isHere");
        if (CurrentPosition >= 2350)
            $("#charac").addClass("isHere");
        else
            $("#charac").removeClass("isHere");
    })
})
;
