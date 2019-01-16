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

$(function(){
	var inputs = $('.input');
	var paras = $('.description-flex-container').find('p');
	$(inputs).click(function(){
		var t = $(this),
				ind = t.index(),
				matchedPara = $(paras).eq(ind);
		
		$(t).add(matchedPara).addClass('active');
		$(inputs).not(t).add($(paras).not(matchedPara)).removeClass('active');
	});
});