'use strict'

// update note
$("body").on("click", "#btnSaveNote", function(event){
    event.preventDefault();

    var formData = {
        title: $("#in-title").val(),
        content: $("#in-description").val(),
        priority: $("#in-priority").val(),
        finishDate: $("#in-date").val()
    };

    // rest service
    httpService.put($(this).data("urlpath"), formData, function (result) {
        console.log(result);
        window.location = "/";
    }, function (result) {
        console.log("Error: ", result);
    });
});

// remove note
$("body").on("click", "#btnRemoveNote", function(event) {
    event.preventDefault();

    // rest service
    httpService.delete($(this).data("urlpath"), function (result) {
        console.log(result);
        window.location = "/";
    }, function (result) {
        console.log("Error: ", result);
    });
});

// cancel note
$("body").on("click", "#btnCancelNote", function(event) {
    event.preventDefault();

    // goto root
    window.location = '/';
});

// set priority
function iconPriorityHandler(event) {
    event.preventDefault();
    var svgElement = event.srcElement.tagName === "svg" ? event.srcElement : event.srcElement.parentElement;

    if (svgElement.tagName === "svg") {
        myTask.data.priority = svgElement.getAttribute("data-priority");
        renderPriorityIconHTML(myTask.data.priority);
    }
};

// render priority html
function renderPriorityIconHTML(priority) {
    var icons = document.querySelectorAll(".icon-priority");

    icons.forEach(function (icon, index) {
        if (index < this.priority) {
            icon.className.baseVal = "icon-priority active"
        } else {
            icon.className.baseVal = "icon-priority"
        }
    }, {priority: priority});
}
//renderPriorityIconHTML(myTask.data.priority);

//select app skin
function updateSkin() {
    document.body.className = storageConfig.getSkin()
};

// set priority
var iconPriority = document.querySelector("#icon-priority-wrapper");
iconPriority.addEventListener("click", iconPriorityHandler);
