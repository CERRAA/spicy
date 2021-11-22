
$(function () {
    let desp = $('#desp');
    let devp = $('#devp');
    let prop = $('#prop');
    let destext = $('#destxt');
    let devtext = $('#devtext');
    let protext = $('#protext');
    $(desp).hide();
    $(devp).hide();
    $(prop).hide();
    //Show paragraph content
    $('.des').on('click', function () {
        $('.des').slideUp('slow');
        $(desp).show(500);
        $(destext).animate({fontWeight:'bolder',fontSize:'30px'})
    });
    $('.dev').on('click', function () {
        $('.dev').slideUp('slow');
        $(devp).show(500);
        $(devtext).animate({fontWeight:'bolder',fontSize:'30px'})
    });
    $('.pro').on('click', function () {
        $('.pro').slideUp('slow');
        $(prop).show(500);
        $(protext).animate({fontWeight:'bolder',fontSize:'30px'})
    });
    //Hide paragraph content
    $(desp, destext).on('click', function () {
        $('.des').slideDown();
        $(desp).hide(500);
        $(destext).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(devp, devtext).on('click', function () {
        $('.dev').slideDown();
        $(devp).hide(500);
        $(devtext).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(prop, protext).on('click', function () {
        $('.pro').slideDown();
        $(prop).hide(500);
        $(protext).animate({fontWeight:'normal',fontSize:'16px'})
    })
    //Overlay images
    $('.portimg').hover(function(){
        $('.porttext',this).slideToggle('slow');
     }, function(){
        $('.porttext',this).slideToggle('slow');
     });
    //Form Validation
        $("form#form").on('submit',function(event){
            event.preventDefault();
            let name = $("input#name").val();
            let email = $("input#email").val();
            let message = $("textarea#message").val();
            if ($("input#name").val() && $("input#email").val()){
                alert ("Hey " + name + ", Thanks for reaching out, we'll get back to you shortly...stay safe.");
            }
            else {
                alert("Please provide your correct name and email!");
            }
        });
    });
    function myFunction() {
    let varName = document.getElementById("name").value;
    //includes a line of code to auto capitalize the 1st letter of the users name.
    const nameCaps = varName.charAt(0).toUpperCase() + varName.slice(1)
    alert("Hey " + nameCaps + ". Thank you for reaching out to us.\nWe have received your message.\SHave a nice day");
    }
    
    diplay.js
    ("desImg").style.display="none";
    
    function display2(){
    document.getElementById("desp").style.display="none";
    document.getElementById("desImg").style.display="initial";
    }
    //disappear function for the second button
    function display3(){
    document.getElementById("devp").style.display="initial";
    document.getElementById("devImg").st
    //disappear and appear function for the first button
    function display1(){
    document.getElementById("desp").style.display="initial";
    document.getElementByIdyle.display="none";
    }
    function display4(){
    document.getElementById("devp").style.display="none";
    document.getElementById("devImg").style.display="initial";
    }
    //disappear function for the second button
    function display5(){
    document.getElementById("prop").style.display="initial";
    document.getElementById("propImg").style.display="none";
    }
    function display6(){
    document.getElementById("prop").style.display="none";
    document.getElementById("propImg").style.display="initial";})