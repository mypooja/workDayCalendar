//Adding today's date to header
var today = moment();
$("#currentDay").text(today.format("dddd,MMMM Do"));

//Adding color to time blocks based on current time of the day.
function addColorToTimeBlock() {
    $(".time-block").each(addColor);
}

function addColor() {
    var currentHour = moment().hour();

    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

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

    var timeBlockId = $(this).attr("id");
    var text = localStorage.getItem(timeBlockId);
    $(this).find(".description").val(text);
}

//Saving entered text on click event on the save button.
function saveTextToLocalStorage() {
    var enteredText = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");

    localStorage.setItem(hour, enteredText);
}

$(".saveBtn").on("click", saveTextToLocalStorage);

addColorToTimeBlock();


