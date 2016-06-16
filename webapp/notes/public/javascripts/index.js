'use strict';

// init task list
//var myTaskList = new TaskList(storageData.getAllTasks());

// add note
$("body").on("click", "#btnAddNote", function(event) {
    event.preventDefault();

    // goto add note
    window.location = '/add';
});

// edit note
$("body").on("click", ".btnEditNote", function(event) {
    event.preventDefault();

    // goto update note
    window.location = '/update/' + $(this).data("task-id");
});

// finished task
function finishedTask(event) {
    event.preventDefault();
    // validate button with class name
    if (event.srcElement.className.indexOf("checkboxFinishedTask") !== -1) {
        var taskID = event.srcElement.getAttribute("data-task-id");

        // set as finished
    }
};

//order by finish date
function orderByFinishDate(event) {
    event.preventDefault();
    myTaskList.orderBy('finishDate');
    myTaskList.renderHTML('btnOrderByFinishDate');
};

// order by create date
function orderByCreateDate(event) {
    event.preventDefault();
    myTaskList.orderBy('createDate');
    myTaskList.renderHTML('btnOrderByCreateDate');
};

// order by priority
function orderByPriority(event) {
    event.preventDefault();
    myTaskList.orderBy('priority');
    myTaskList.renderHTML('btnOrderByPriority');
};

// show finished tasks
function showFinished(event) {
    event.preventDefault();
    // validate toggle
    if (myTaskList.filterStr === 'closed') {
        myTaskList.filter('open');
        $("#btnShowFinished").text('Show finished');
    } else {
        myTaskList.filter('closed');
        $("#btnShowFinished").text('Show open');
    }
    myTaskList.renderHTML();
};

//select app skin event
function selectSkin(event) {
    var skin = event.srcElement.selectedOptions[0] ? event.srcElement.selectedOptions[0].value : 'color';
    storageConfig.setSkin(skin);
    updateSkin();
};

//select app skin
function updateSkin() {
    var skin = storageConfig.getSkin();
    // update select element
    $("#btnSelectSkin").val(skin);
    // set body class
    document.body.className = skin;
};

// on load
//updateSkin();

/**
 * event handler
 */
var btnOrderByFinishDate = document.querySelector("#btnOrderByFinishDate");
btnOrderByFinishDate.addEventListener("click", orderByFinishDate);
// order by create date
var btnOrderByCreateDate = document.querySelector("#btnOrderByCreateDate");
btnOrderByCreateDate.addEventListener("click", orderByCreateDate);
// order by priority
var btnOrderByPriority = document.querySelector("#btnOrderByPriority");
btnOrderByPriority.addEventListener("click", orderByPriority);
// show finished tasks only
var btnShowFinished = document.querySelector("#btnShowFinished");
btnShowFinished.addEventListener("click", showFinished);
// checkbox change handler
var checkboxFinishedTask = document.querySelector("#taskListWrapper");
checkboxFinishedTask.addEventListener('click', finishedTask);
// select skin
var btnSelectSkin = document.querySelector("#btnSelectSkin");
btnSelectSkin.addEventListener("change", selectSkin);