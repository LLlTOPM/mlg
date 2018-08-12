var main = document.getElementById("fullpage"),
    timerIDforFallingMlgStaff,
    timerIDforComicText,
    timerIDforSunglass,
    countMlgStaff = 21; //count of png +1

var data = {
    "persons": [
        {
            "fullName": "Иван Иванов",
            "pic": "1.jpg",
            "desription": "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание."
        },
        {
            "fullName": "Петр Петров",
            "pic": "2.jpg",
            "desription": "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание."
        },
        {
            "fullName": "Павел Павлович",
            "pic": "3.jpg",
            "desription": "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание."
        },
        {
            "fullName": "Семен Семенович",
            "pic": "1.jpg",
            "desription": "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание." +
            "самое жирное описание. самое жирное описание. самое жирное описание."
        }
    ]
};

(function () {
    var output = '';

    for (var i = 0; i < data.persons.length; i++) {
        output +=

            "<div class='section'>" +
                "<div class='comicTextBlock'><img src='pic/comicText/wow.png'></div>" +
                "<div class='fixer'>"+
                    "<div class='mlgBlock' id='mlgBlockId " + i + "'></div>" +
                "</div>" +
                "<div class='subject'>" +
                    "<div class='info'>" +
                        "<div class='fullName'>" + data.persons[i].fullName + "</div>" +
                        "<div class='description'>" + data.persons[i].desription + "</div>" +
                    "</div>" +
                    "<div class='photo'>" +
                        "<div class='sunglassBlock'>" +
                            "<img src='pic/mlgStaff/sunglass.png'>" +
                        "</div>" +
                        "<img src='pic/photo/" + data.persons[i].pic + "' class='pic' id='picPerson" + i + "'>" +
                    "</div>" +
                "</div>" +
            "</div>";
    }
    main.innerHTML = output;

    loadMlgStaff();
}());

function loadMlgStaff() {

        for (var i = 0; i < data.persons.length; i++) {
            var mlgBlock = document.getElementById('mlgBlockId ' + i);

            for (var n = 0; n < countMlgStaff; n++) {
                var div = document.createElement('div');
                div.className = "mlgStaff";

                var image = document.createElement('img');
                image.src = "pic/mlgStaff/" + randomInteger() + ".png";

                div.appendChild(image);
                mlgBlock.appendChild(div);
            }
        }
}

function loadComicText() {
    for (var i = 0; i < 1; i++) {
        var div = document.createElement('div');
        div.className = "mlgStaff";

        var image = document.createElement('img');
        image.src = "pic/mlgStaff/" + randomInteger() + ".png";

        div.appendChild(image);
        mlgBlock.appendChild(div);
    }
}


function hideMlgBlock () {
    console.log('hide mlgBlock');
    $('.fp-section.active').find('.mlgBlock').css("display", "none");
}

function showComicText() {
    console.log("show comic text");
    $('.fp-section.active').find('.comicTextBlock').css("display", "flex");
    $('.fp-section.active').find('.comicTextBlock').children().addClass('comicText0');
    setTimeout(hideComicText,2500);
}

function hideComicText() {
    console.log("hide comic text");
    $('.fp-section.active').find('.comicTextBlock').css("display", "none");
}

function hideSunglass() {
    console.log("hide sunglass");
    $('.fp-section.active').find('.sunglassBlock').css("display", "none");
}

function randomInteger() {
    var rand = Math.random() * countMlgStaff;
    rand = Math.floor(rand);
    return rand;
}

$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {

            var slideNumber = $('.fp-section.active').index();  // if have not only sections, has been see fucking index 1,3,5,7.

            $('.fp-section.active').find('.mlgBlock').css("display", "flex");
            $('.fp-section.active').find('.mlgBlock').children().addClass('mlgActive0');

            $('.fp-section.active').find('.sunglassBlock').css("display", "flex");
            $('.fp-section.active').find('.sunglassBlock').children().addClass('sunglassForPerson'+ slideNumber);

            timerIDforFallingMlgStaff = setTimeout(hideMlgBlock, 8000);
            timerIDforSunglass = setTimeout(hideSunglass,5000);
            timerIDforComicText = setInterval(showComicText, 5000);
        },
        onLeave: function (anchor, index) {
            clearTimeout(timerIDforFallingMlgStaff);
            clearTimeout(timerIDforSunglass);
            clearInterval(timerIDforComicText);

            $('.fp-section.active').find('.sunglassBlock').css("display", "none");
            $('.fp-section.active').find('.mlgBlock').css("display", "none");
            $('.fp-section.active').find('.comicTextBlock').css("display", "none");
        }
    });
});