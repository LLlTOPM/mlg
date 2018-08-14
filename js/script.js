var main = document.getElementById("fullpage"),
    timerIDforFallingMlgStaff,
    timerIDforComicText,
    timerIDShowSunglass,
    countMlgStaff = 21; //count of png +1

var data = {
    "persons": [
        {
            "fullName": "Иван Иванов",
            "pic": "4.jpg",
            "desription": "Бенефисы, дурные картины, статуи, благотворительные общества, цыгане, школы," +
            " подписные обеды, кутежи, масоны, церкви, книги — никто и ничто не получало отказа, и ежели " +
            "бы не два его друга, занявшие у него много денег и взявшие его под свою опеку, он бы все " +
            "роздал. В клубе не было ни обеда, ни вечера без него. Как только он приваливался на свое место " +
            "на диване после двух бутылок Марго, его окружали, и завязывались толки, споры, шутки. " +
            "Где ссорились он — одной своей доброй улыбкой и кстати сказанной шуткой — мирил. " +
            "Масонские столовые ложи были скучны и вялы, ежели его не было."
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
                "<div class='fixerComicTextBlock'>" +
                    "<div class='comicTextBlock'>" +
                        "<img src='pic/comicText/0.png'>" +
                        "<img src='pic/comicText/1.png'>" +
                        "<img src='pic/comicText/2.png'>" +
                        "<img src='pic/comicText/3.png'>" +
                    "</div>" +
                "</div>"+
                "<div class='fixer'>"+
                    "<div class='mlgBlock' id='mlgBlockId " + i + "'></div>" +
                "</div>" +
                "<div class='subjectFixer'>" +
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
                "</div>"+
            "<div class='scrolling'>" +
                "<img class='scrollingPic' src='pic/thingsForPage/scrolling.png'>" +
            "</div>"+
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
    $('.fp-section.active').find('.mlgBlock').css("display", "none");
}

function showComicText() {
    $('.fp-section.active').find('.comicTextBlock').css("display", "flex");
    $('.fp-section.active').find('.comicTextBlock').children().eq(0).addClass('comicText0');
    $('.fp-section.active').find('.comicTextBlock').children().eq(1).addClass('comicText1');
    $('.fp-section.active').find('.comicTextBlock').children().eq(2).addClass('comicText2');
    $('.fp-section.active').find('.comicTextBlock').children().eq(3).addClass('comicText3');
    setTimeout(hideComicText,2500);
}

function hideComicText() {
    $('.fp-section.active').find('.comicTextBlock').css("display", "none");
}

// function hideSunglass() {
//     console.log("hide sunglass");
//     $('.fp-section.active').find('.sunglassBlock').css("display", "none");
// }

function showSunglass(slideNumber) {
    $('.fp-section.active').find('.sunglassBlock').css("display", "flex");
    $('.fp-section.active').find('.sunglassBlock').children().addClass('sunglassForPerson'+ slideNumber);
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

            timerIDShowSunglass = setTimeout(showSunglass, 3500, slideNumber);
            timerIDforFallingMlgStaff = setTimeout(hideMlgBlock, 8000);
            timerIDforComicText = setInterval(showComicText, 30000);
        },
        onLeave: function (anchor, index) {
            clearTimeout(timerIDforFallingMlgStaff);
            clearTimeout(timerIDShowSunglass);
            clearInterval(timerIDforComicText);

            $('.fp-section.active').find('.mlgBlock').css("display", "none");
            $('.fp-section.active').find('.comicTextBlock').css("display", "none");
        }
    });
});