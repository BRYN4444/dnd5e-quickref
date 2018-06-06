$(document).ready(function(){

    $("#collapse-all").click(function(){
        $("#tog-abilities").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-abilities .section-content").slideUp("slow");
        $("#tog-movement").attr("class","toggler show").parent().animate({ height: 25 }, 600);;
        $("#section-movement .section-content").slideUp("slow");
        $("#tog-action").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-action .section-content:eq(0)").slideUp("slow");
        $("#tog-bonus-action").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-bonus-action .section-content").slideUp("slow");
        $("#tog-reaction").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-reaction .section-content").slideUp("slow");
        $("#tog-food").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-food .section-content").slideUp("slow");
        $("#tog-services").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-services .section-content").slideUp("slow");
        $("#tog-downtime").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-downtime .section-content").slideUp("slow");
        $("#tog-condition").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-condition .section-content").slideUp("slow");
        $("#tog-injury").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-injury .section-content").slideUp("slow");
        $("#tog-environment").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-environment .section-content").slideUp("slow");
        $("#tog-death").attr("class","toggler show").parent().animate({ height: 25 }, 600);
        $("#section-death .section-content").slideUp("slow");
    });

    $("#tog-abilities").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-abilities .section-content").slideToggle("slow");
    });

    $("#tog-movement").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-movement .section-content").slideToggle("slow");
    });

    $("#tog-action").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-action .section-content:eq(0)").slideToggle("slow");
    });

    $("#tog-bonus-action").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-bonus-action .section-content").slideToggle("slow");
    });

    $("#tog-reaction").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-reaction .section-content").slideToggle("slow");
    });

    $("#tog-food").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-food .section-content").slideToggle("slow");
    });

    $("#tog-services").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-services .section-content").slideToggle("slow");
    });

    $("#tog-downtime").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-downtime .section-content").slideToggle("slow");
    });

    $("#tog-condition").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-condition .section-content").slideToggle("slow");
    });

    $("#tog-injury").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-injury .section-content").slideToggle("slow");
    });

    $("#tog-environment").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-environment .section-content").slideToggle("slow");
    });

    $("#tog-death").click(function(){
        $(this).parent().animate({
            height: ($(this).parent().height() == 32) ? 25 : 32
        }, 600);
        $(this).toggleClass("hide show");
        $("#section-death .section-content").slideToggle("slow");
    });
	
});