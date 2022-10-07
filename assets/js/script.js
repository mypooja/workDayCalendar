var today = moment();
$("#currentDay").text(today.format("dddd,MMMM Do"));

function addColorToTimeBlock() {
    $(".time-block").each(addColor);
}

function addColor() {
    var currentHour = moment().hour();
    console.log(currentHour);

    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(timeBlockHour);

    if (timeBlockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if (timeBlockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
}

addColorToTimeBlock();