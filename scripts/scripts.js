$(document).ready(function () {
    $(".navbar ul li a").click(function () {
        $("a").removeClass("active");
        $(this).addClass("active");
    });
});

$(document).on('scroll', function () {
    let navbarAbout = $('#about').offset().top;
    let navbarSkills = $('#skills').offset().top;
    let navbarExperiences = $('#experiences').offset().top;
    let scrollTop = $(document).scrollTop();

    $(".navbar ul li a").removeClass("active");

    if (scrollTop - 1 < navbarAbout)
        $(".navbar ul>li:nth-child(1) a").addClass("active");
    else if (scrollTop - 1 < navbarSkills)
        $(".navbar ul>li:nth-child(2) a").addClass("active");
    else if (scrollTop - 1 < navbarExperiences)
        $(".navbar ul>li:nth-child(3) a").addClass("active");
});