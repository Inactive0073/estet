$(document).ready(function () {
    objectFitImages();
    $pathPage = (window.location.pathname);
    $burger = $(".burger");
    $clientWidth = document.documentElement.clientWidth;
    $searchHeader = $(".search--header");
    $inputWrapper = $(".search-input__form-wrapper");
    $inputWrapperDesk = $(".search-input__form-wrap");
    $searchSidebar = $(".search--sidebar");
    $inputWrapperSidebar = $(".search-input--sidebar__form-wrapper");
    $inputSidebar = $(".search-input--sidebar__input");
    $($burger).click(function (event) {
        if (document.documentElement.clientWidth < 1280) {
            $(".dropbox").toggleClass("dropbox--active");
            if ($pathPage === "/index.html" || $pathPage === "/estet2") {
                $("body").toggleClass("page-fixed");
            }
        }
    })
    $($searchHeader).click(function () { //Выезжающий инпут вниз на первой странице
        if (document.documentElement.clientWidth < 1280) {
            if (($inputWrapper).first().is(":hidden")) {
                $inputWrapper.slideDown(300);
            } else {
                $inputWrapper.slideUp(300);
            }
        } else {
            if (($inputWrapperDesk).first().is(":hidden")) { //Вариант для десктопа
                $inputWrapperDesk.slideDown(300);
            } else {
                $inputWrapperDesk.slideUp(300);
            }
        }
    });
    $('form').keydown(function (event) { //Замок на перезагрузку страницы при Enter в input[type='search']
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
    if (document.documentElement.clientWidth < 768) {
        $(".slider__inner").slick({
            prevArrow: $('.button--prev'),
            nextArrow: $(".button--next"),
            arrows: true
        });
    }
    window.addEventListener("resize", function () {
        if (document.documentElement.clientWidth >= 768) {
            $(".slider__inner").slick("unslick");
            sliderIsLive = false;
        } else if (document.documentElement.clientWidth < 768) {
            $(".slider__inner").slick({
                prevArrow: $('.button--prev'),
                nextArrow: $(".button--next"),
                arrows: true
            });
            sliderIsLive = true;
        }
    });
    if (document.documentElement.clientWidth < 767 || document.documentElement.clientWidth === 767) {
        $(".shops__cards").slick({
            prevArrow: $('.arrow-prev--shops'),
            nextArrow: $(".arrow-next--shops"),
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    window.addEventListener("resize", function () {
        if (document.documentElement.clientWidth >= 768) {
            $(".shops__cards").slick("unslick");
            sliderIsLive = false;
        } else if (document.documentElement.clientWidth < 768) {
            $(".shops__cards").slick({
                prevArrow: $('.arrow-prev--shops'),
                nextArrow: $(".arrow-next--shops"),
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                responsive: [{
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            });
            sliderIsLive = true;
        }
    });
    $searchSidebar.click(function () {
        $inputWrapperSidebar.toggleClass("active");
        $inputSidebar.toggleClass("active");
        $inputSidebar[type = "search"].focus();
    });
    function getBrowser() {
        var ua = navigator.userAgent;
        if (ua.search(/Chrome/) > 0) return 'Google Chrome';
        if (ua.search(/Firefox/) > 0) return 'Firefox';
        if (ua.search(/Opera/) > 0) return 'Opera';
        if (ua.search(/Safari/) > 0) return 'Safari';
        if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
        return 'Не определен';
    }
    const browser = getBrowser();

    function editFooter() {
        if (browser === "Safari") {
            let safari = document.querySelector(".safari");
            safari.style.lineHeight = "25px";
        }
    }
    editFooter();
    const rangeInput = document.querySelector(".noUiSlider");
    noUiSlider.create(rangeInput, {
        start: [2000, 24000],
        connect: true,
        range: {
            'min': 0,
            'max': 30000
        },
        step: 500
    });
})