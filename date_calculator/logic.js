$(document).ready(function () {

$('#btn1').on('click', function (e) {
    $('#btn1').each(function () {
        $(this).addClass('active');
    });
    $('#btn2').each(function () {
        $(this).removeClass('active');
    });
    $('#btn3').each(function () {
        $(this).removeClass('active');
    });
    $('#btn4').each(function () {
        $(this).removeClass('active');
    })
});

$('#btn2').on('click', function (e) {
    $('#btn2').each(function () {
        $(this).addClass('active');
    });
    $('#btn1').each(function () {
        $(this).removeClass('active');
    });
    $('#btn3').each(function () {
        $(this).removeClass('active');
    });
    $('#btn4').each(function () {
        $(this).removeClass('active');
    })
});

$('#btn3').on('click', function (e) {
    $('#btn3').each(function () {
        $(this).addClass('active');
    });
    $('#btn1').each(function () {
        $(this).removeClass('active');
    });
    $('#btn2').each(function () {
        $(this).removeClass('active');
    });
    $('#btn4').each(function () {
        $(this).removeClass('active');
    })
});

$('#btn4').on('click', function (e) {
    $('#btn4').each(function () {
        $(this).addClass('active');
    });
    $('#btn1').each(function () {
        $(this).removeClass('active');
    });
    $('#btn2').each(function () {
        $(this).removeClass('active');
    });
    $('#btn3').each(function () {
        $(this).removeClass('active');
    })
});

$('#toggle1').on('click', function (e) {
    $('#toggle1').each(function () {
        $(this).addClass('active');
    });
    $('#toggle2').each(function () {
        $(this).removeClass('active');
    });
});

$('#toggle2').on('click', function (e) {
    $('#toggle2').each(function () {
        $(this).addClass('active');
    });
    $('#toggle1').each(function () {
        $(this).removeClass('active');
    });
});

var sessions = 0;
var interval = 0;

$('#btn-calc').on('click', function (e) {
    // get active interval
    if ($('#toggle1').hasClass('active')) {
        interval = 1;
    }
    else {
        interval = 2;
    }
    // get active sessions
    if ($('#btn1').hasClass('active')) {
        sessions = 3;
    } else if ($('#btn2').hasClass('active')) {
        sessions = 6;
    } else if ($('#btn3').hasClass('active')) {
        sessions = 9;
    } else if ($('#btn4').hasClass('active')) {
        sessions = 12;
    }

    // get picked date
    var date_cont = document.querySelector('input[type="date"]');
    var picked_date = date_cont.value
    // adapt result text
    res_date = ""
    $('#result-text').text(`Berechnetes Enddatum: ${picked_date}`);

});
});