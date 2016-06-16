'use strict';

var templateSource = $('#tasklist-template').html();
var template = Handlebars.compile(templateSource);

// render list
function renderList(data) {
    $("#taskListWrapper").html(template(data));
};

// load task list
dataService.all(function (data) {
    renderList(data);
});

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

// order notes by priority
$("body").on("click", "#btnOrderByPriority", function(event) {
    event.preventDefault();

});

// order notes by finish date
$("body").on("click", "#btnOrderByFinishDate", function(event) {
    event.preventDefault();

});

// order notes by create date
$("body").on("click", "#btnOrderByCreateDate", function(event) {
    event.preventDefault();

});

// show finished notes
$("body").on("click", "#btnShowFinished", function(event) {
    event.preventDefault();

});

// finish note checkbox
$("body").on("change", ".checkboxFinishNote", function(event) {
    event.preventDefault();

});

// finish note checkbox
$("body").on("change", "#btnSelectSkin", function(event) {
    event.preventDefault();

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