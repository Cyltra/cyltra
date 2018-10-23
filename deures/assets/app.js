// var today = new Date().getDate();

var today = 17;

window.onload = function myFunction() {
	
    if (today === 17) {
        document.getElementById("dia-15").setAttribute("class", "col col-avui");
        if (document.getElementById("dia-15").getElementsByTagName("p").getElementsByClassName("hover-box").innerHTML.inexOf("(") != -1) {
            document.getElementById("dia-15").setAttribute("class", "col col-avui-ex");
    };
    };

    // if (today === 13) {
    //     document.getElementById("dia-13").setAttribute("class", "col-avui");
    //     if ((document.getElementById("dia-13").getElementsByTagName("p").getElementsByClassName("hover-box").innerHTML.indexOf("(Mat)") != -1)) {
    //         document.getElementById("dia-13").className = "col col-avui col-avui-ex";
    //     };
    // };

};