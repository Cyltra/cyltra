var today = new Date().getDate();

window.onload = function myFunction() {

    if (today === 1) {
        document.getElementById("dia-1").setAttribute("class", "col col-avui");
    };

    if (today === 2) {
        document.getElementById("dia-2").setAttribute("class", "col col-avui");
    };

    if (today === 3) {
        document.getElementById("dia-3").setAttribute("class", "col col-avui");
    };

    if (today === 4) {
        document.getElementById("dia-4").setAttribute("class", "col col-avui");
    };

    if (today === 5) {
        document.getElementById("dia-5").setAttribute("class", "col col-avui");
    };

    if (today === 6) {
        document.getElementById("dia-6").setAttribute("class", "col col-avui");
    };

    if (today === 7) {
        document.getElementById("dia-7").setAttribute("class", "col col-avui");
    };

    if (today === 8) {
        document.getElementById("dia-8").setAttribute("class", "col col-avui");
    };

    if (today === 9) {
        document.getElementById("dia-9").setAttribute("class", "col col-avui");
    };

    if (today === 10) {
        document.getElementById("dia-10").setAttribute("class", "col col-avui");
    };

    if (today === 11) {
        document.getElementById("dia-11").setAttribute("class", "col col-avui");
    };

    if (today === 12) {
        document.getElementById("dia-12").setAttribute("class", "col col-avui");
    };

    if (today === 13) {
        document.getElementById("dia-13").setAttribute("class", "col col-avui");
    };

    if (today === 14) {
        document.getElementById("dia-14").setAttribute("class", "col col-avui");
    };

    if (today === 15) {
        document.getElementById("dia-15").setAttribute("class", "col col-avui");
    };

    if (today === 16) {
        document.getElementById("dia-16").setAttribute("class", "col col-avui");
    };

    if (today === 17) {
        document.getElementById("dia-17").setAttribute("class", "col col-avui");
    };

    if (today === 18) {
        document.getElementById("dia-18").setAttribute("class", "col col-avui");
    };

    if (today === 19) {
        document.getElementById("dia-19").setAttribute("class", "col col-avui");
    };

    if (today === 20) {
        document.getElementById("dia-20").setAttribute("class", "col col-avui");
    };

    if (today === 21) {
        document.getElementById("dia-21").setAttribute("class", "col col-avui");
    };

    if (today === 22) {
        document.getElementById("dia-22").setAttribute("class", "col col-avui");
    };

    if (today === 23) {
        document.getElementById("dia-23").setAttribute("class", "col col-avui");
    };

    if (today === 24) {
        document.getElementById("dia-24").setAttribute("class", "col col-avui");
    };

    if (today === 25) {
        document.getElementById("dia-25").setAttribute("class", "col col-avui");
    };

    if (today === 26) {
        document.getElementById("dia-26").setAttribute("class", "col col-avui");
    };

    if (today === 27) {
        document.getElementById("dia-27").setAttribute("class", "col col-avui");
    };

    if (today === 28) {
        document.getElementById("dia-28").setAttribute("class", "col col-avui");
    };

    if (today === 29) {
        document.getElementById("dia-29").setAttribute("class", "col col-avui");
    };

    if (today === 30) {
        document.getElementById("dia-30").setAttribute("class", "col col-avui");
    };
	
    if (today === 31) {
        document.getElementById("dia-31").setAttribute("class", "col col-avui");
    };

};

var numEx = $("div.examens > div.element").length;

var numDe = $("div.deures > div.element").length;

if ($(window).width() < 948) {
    $('.examens').css({"border-left":"0"});
     $('.deures').css({"border-right":"0"});
}
else {
    if (numEx > numDe) {
        $('.examens').css({"border-left":"solid 1px #e8e8e8"});
    }
    else {
        $('.deures').css({"border-right":"solid 1px #e8e8e8"});
    }
}

$(window).resize(function(){
    if ($(window).width() < 948) {
        $('.examens').css({"border-left":"0"});
        $('.deures').css({"border-right":"0"});
    }
    else {
        if (numEx > numDe) {
            $('.examens').css({"border-left":"solid 1px #e8e8e8"});
        }
        else {
            $('.deures').css({"border-right":"solid 1px #e8e8e8"});
        }
    }
});