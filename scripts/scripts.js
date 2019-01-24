$(document).ready(function () {
    $(".navbar ul li a").click(function () {
        $("a").removeClass("active");
        $(this).addClass("active");
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
});

$("#about-link-title").on('click', function() {
    $("html, body").animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#about-link").on('click', function() {
    $("html, body").animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#skills-link").on('click', function() {
    $("html, body").animate({
        scrollTop: $("#skills").offset().top
    }, 1000);
});

$("#experience-link").on('click', function() {
    $("html, body").animate({
        scrollTop: $("#experience").offset().top
    }, 1000);
});

$(document).on('scroll', function () {
    let navbarAbout = $('#about').offset().top;
    let navbarSkills = $('#skills').offset().top;
    let navbarExperience = $('#experience').offset().top;
    let scrollTop = $(document).scrollTop() + 1;

    $(".navbar ul li a").removeClass("active");

    if (scrollTop > 2 && scrollTop < navbarSkills || scrollTop > navbarAbout && scrollTop < navbarSkills)
        $(".navbar ul>li:nth-child(1) a").addClass("active");
    else if (scrollTop > navbarSkills && scrollTop < navbarExperience)
        $(".navbar ul>li:nth-child(2) a").addClass("active");
    else if (scrollTop > navbarExperience)
        $(".navbar ul>li:nth-child(3) a").addClass("active");
});

$(function () {
    var inputs = $('.input');
    var paras = $('.description-flex-container').find('p');
    $(inputs).click(function () {
        var t = $(this),
            ind = t.index(),
            matchedPara = $(paras).eq(ind);

        $(t).add(matchedPara).addClass('active');
        $(inputs).not(t).add($(paras).not(matchedPara)).removeClass('active');
    });
});
