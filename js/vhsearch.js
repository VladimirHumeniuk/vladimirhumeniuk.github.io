$(function () {
    // Tours search UI fields
    $("#departure__date, #datepicker, #datepicker__hotels, #return__date").datepicker({
        firstDay: 1,
        dateFormat: 'dd-mm-yy',
        minDate: new Date()
    });
    
    $("#datepicker").datepicker().datepicker("setDate", new Date());

    $("#slider-range").slider({
        range: true,
        min: 1,
        max: 30,
        values: [1, 7],
        slide: function (event, ui) {
            $("#amount").val(ui.values[0] + " - " + ui.values[1] + " nights");
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0) +
        " - " + $("#slider-range").slider("values", 1) + " nights");
    $("#spinner__adults").spinner({
        min: 1,
        value: 1,
        max: 16,
        step: 1,
        spin: function (event, ui) {
            $(this).change();
        }
    });
    $("#spinner__children").spinner({
        min: 0,
        value: 1,
        max: 10,
        step: 1,
        spin: function (event, ui) {
            $(this).change();
        }
    });

    // Hotels search UI fields
    $("#datepicker__hotels").datepicker().datepicker("setDate", new Date());
    $("#slider-range__hotels").slider({
        range: true,
        min: 1,
        max: 30,
        values: [1, 7],
        slide: function (event, ui) {
            $("#amount__hotels").val(ui.values[0] + " - " + ui.values[1] + " nights");
        }
    });
    $("#amount__hotels").val($("#slider-range__hotels").slider("values", 0) + " - " + $("#slider-range__hotels").slider("values", 1) + " nights");
    $("#spinner__adults__hotels").spinner({
        min: 1,
        value: 1,
        max: 16,
        step: 1,
        spin: function (event, ui) {
            $(this).change();
        }
    });
    $("#spinner__children__hotels").spinner({
        min: 0,
        value: 1,
        max: 10,
        step: 1,
        spin: function (event, ui) {
            $(this).change();
        }
    });
    $("#spinner__adults__flights").spinner({
        min: 1,
        value: 1,
        max: 16,
        step: 1,
        spin: function (event, ui) {
            $(this).change();
        }
    });
    $("#spinner__children__flights").spinner({
        min: 0,
        value: 1,
        max: 10,
        step: 1,
        spin: function (event, ui) {
            $(this).change();
        }
    });
    $("#departure__date").datepicker().datepicker("setDate", new Date());
    $("#return__date").datepicker().datepicker("setDate", ('getDate', '+8d'));

})

$(document).ready(function () {
    $(".children").find(".ui-spinner-button").attr("onclick", "addFields()");
    $(".children__hotels").find(".ui-spinner-button").attr("onclick", "addFieldsHotels()");
    $(".children__flights").find(".ui-spinner-button").attr("onclick", "addFieldsFlights()");
    $("#return__date").attr("disabled", true);
});

$(".return__date .box").click(function(){
    if ($('.activate__return__date').is(':checked')) {
        $("#return__date").attr("disabled", true);
    } else {
        $("#return__date").attr("disabled", false);
    }
});

$(".search__tabs li").click(function () {
    $(".search__tabs li").removeClass("active");
    $(this).addClass("active");

    if ($(".filter__tours").hasClass("active")) {
        $("#main__search").show();
        $("#hotels__search").hide();
        $("#flights__search").hide();
    }

    if ($(".filter__hotels").hasClass("active")) {
        $("#hotels__search").show();
        $("#main__search").hide();
        $("#flights__search").hide();
    }

    if ($(".filter__flights").hasClass("active")) {
        $("#flights__search").show();
        $("#hotels__search").hide();
        $("#main__search").hide();
    }
});



$(".return__date .box").click(function () {
    $(".return__date").find(".custom__checkbox").click();
});

// Toggle resorts list for tours search
$("#toogle__multiple__select").click(function () {
    $(".destination__multiple__select").toggleClass("active");
    $("#toogle__multiple__select i img").toggleClass("active");
});

// Toggle resorts list for hotels search
$("#toogle__multiple__select__hotels").click(function () {
    $(".destination__multiple__select__hotels").toggleClass("active");
    $("#toogle__multiple__select__hotels i img").toggleClass("active");
});

// Toggle departure city
$("#toogle__departure__from").click(function () {
    $(".departure__city__select").toggleClass("active");
    $("#toogle__departure__from i img").toggleClass("active");
});

$("#toogle__departure__to").click(function () {
    $(".arrival__city__select").toggleClass("active");
    $("#toogle__departure__to i img").toggleClass("active");
});

$(".departure__city__select li a").click(function () {
    var depCityName = $(this).text();
    $("#toogle__departure__from span").text(depCityName);
    $(".departure__city__select").removeClass("active");
    $("#toogle__departure__from i img").removeClass("active");
});

$(".arrival__city__select li a").click(function () {
    var depCityName = $(this).text();
    $("#toogle__departure__to span").text(depCityName);
    $(".arrival__city__select").removeClass("active");
    $("#toogle__departure__to i img").removeClass("active");
});

// Childrens age fields for tours search 
function addFields(event, ui) {
    var number = $("#spinner__children").spinner("value");

    var container = document.querySelector(".container__childrens__age");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i = 0; i < number; i++) {

        var ageDiv = document.createElement("div");
        ageDiv.className = "child__age__div"

        var label = document.createElement("label");
        label.innerHTML = (i + 1) + " child age";

        ageDiv.appendChild(label);
        ageDiv.appendChild(document.createElement("br"));

        var input = document.createElement("input");
        input.type = "number";
        input.value = "0";
        input.min = "0";
        input.max = '17';
        input.name = "child-" + i;
        ageDiv.appendChild(input);

        container.appendChild(ageDiv);
    }
}

// Childrens age fields for hotels search 
function addFieldsHotels(event, ui) {
    var number = $("#spinner__children__hotels").spinner("value");

    var container = document.querySelector(".container__childrens__age__hotels");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i = 0; i < number; i++) {

        var ageDiv = document.createElement("div");
        ageDiv.className = "child__age__div"

        var label = document.createElement("label");
        label.innerHTML = (i + 1) + " child age";

        ageDiv.appendChild(label);
        ageDiv.appendChild(document.createElement("br"));

        var input = document.createElement("input");
        input.type = "number";
        input.value = "0";
        input.min = "0";
        input.max = '17';
        input.name = "child-" + i;
        ageDiv.appendChild(input);

        container.appendChild(ageDiv);
    }
}

// Childrens age fields for hotels search 
function addFieldsFlights(event, ui) {
    var number = $("#spinner__children__flights").spinner("value");

    var container = document.querySelector(".container__childrens__age__flights");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i = 0; i < number; i++) {

        var ageDiv = document.createElement("div");
        ageDiv.className = "child__age__div"

        var label = document.createElement("label");
        label.innerHTML = (i + 1) + " child age";

        ageDiv.appendChild(label);
        ageDiv.appendChild(document.createElement("br"));

        var input = document.createElement("input");
        input.type = "number";
        input.value = "0";
        input.min = "0";
        input.max = '17';
        input.name = "child-" + i;
        ageDiv.appendChild(input);

        container.appendChild(ageDiv);
    }
}

