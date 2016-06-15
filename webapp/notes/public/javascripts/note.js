'use strict'

// save note
function saveTaskHandler(event) {
    event.preventDefault();
    myTask.getFormData();
    myTask.save();
    window.location = 'index.html';
};

// remove note
function removeTaskHandler(event) {
    event.preventDefault();
    myTask.remove();
    window.location = 'index.html';
};

// cancel task
function cancelTaskHandler(event) {
    event.preventDefault();
    window.location = '/';
};

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

// on load
//updateSkin();

/**
 * event handler
 */
var btnSaveTask = document.querySelector("#btnSaveTask");
btnSaveTask.addEventListener("click", saveTaskHandler);
// remove task
var btnRemoveTask = document.querySelector("#btnRemoveTask");
btnRemoveTask.addEventListener("click", removeTaskHandler);
// candel task
var btnCancelTask = document.querySelector("#btnCancelTask");
btnCancelTask.addEventListener("click", cancelTaskHandler);
// set priority
var iconPriority = document.querySelector("#icon-priority-wrapper");
iconPriority.addEventListener("click", iconPriorityHandler);
