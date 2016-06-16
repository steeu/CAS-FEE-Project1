;(function () {
    'use strict';

    var templateSource = $('#tasklist-template').html();
    var template = Handlebars.compile(templateSource);
    var listData = [];

    // render list
    function renderList(data) {
        $("#taskListWrapper").html(template(data));
    };

    // load task list
    dataService.all(function (data) {
        listData = data;
        renderList(listData);
    });

    // add note
    $("body").on("click", "#btnAddNote", function (event) {
        event.preventDefault();
        // goto add note
        window.location = '/add';
    });

    // edit note
    $("body").on("click", ".btnEditNote", function (event) {
        event.preventDefault();
        // goto update note
        window.location = '/update/' + $(this).data("task-id");
    });

    // order notes by priority
    $("body").on("click", "#btnOrderByPriority", function (event) {
        event.preventDefault();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        // sort list
        renderList(listData.sort(function (note1, note2) {
            return note1.priority < note2.priority;
        }));
    });

    // order notes by finish date
    $("body").on("click", "#btnOrderByFinishDate", function (event) {
        event.preventDefault();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        // sort list
        renderList(listData.sort(function (note1, note2) {
            var date1 = new Date(note1.finishDate);
            var date2 = new Date(note2.finishDate);
            return date1 > date2;
        }));
    });

    // order notes by create date
    $("body").on("click", "#btnOrderByCreateDate", function (event) {
        event.preventDefault();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        // sort list
        renderList(listData.sort(function (note1, note2) {
            var date1 = new Date(note1.createDate);
            var date2 = new Date(note2.createDate);
            return date1 > date2;
        }));
    });

    // show finished notes
    $("body").on("click", "#btnShowFinished", function (event) {
        event.preventDefault();
        // toggle
        if ($("#btnShowFinished").data("show-finished")) {
            $("#btnShowFinished").data("show-finished", false);
            $("#btnShowFinished").text('Show finished');
            // load finished notes
            // ???
        } else {
            $("#btnShowFinished").data("show-finished", true);
            $("#btnShowFinished").text('Show open');
            // load open notes
            // ???
        }
    });

    // finish note checkbox
    $("body").on("change", ".checkboxFinishNote", function (event) {
        event.preventDefault();
        // mark note as finished
        // ???
    });

    // select skin dropdown
    $("body").on("change", "#btnSelectSkin", function (event) {
        event.preventDefault();
        // set body class
        document.body.className = $(this).val();
        // save selected skin
        // ???
    });
})();
