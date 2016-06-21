;(function () {
    'use strict';

    var templateSource = $('#tasklist-template').html();
    var template = Handlebars.compile(templateSource);
    var listData = [];

    // render list
    function renderList(data) {
        listData = data;
        $("#taskListWrapper").html(template(data));
    };

    // set skin class
    if (configService.getSkin()) {
        $('body').addClass(configService.getSkin());
        $("#btnSelectSkin").val(configService.getSkin());
    }

    // load all notes
    dataService.openNotes(function (data) {
        renderList(data);
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
        window.location = '/update/' + $(this).data("id");
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
            dataService.openNotes(function (data) {
                renderList(data);
            });
        } else {
            $("#btnShowFinished").data("show-finished", true);
            $("#btnShowFinished").text('Show open');
            // load open notes
            dataService.finishedNotes(function (data) {
                renderList(data);
            });
        }
    });

    // finish note checkbox
    $("body").on("change", ".checkboxFinishNote", function (event) {
        event.preventDefault();
        // mark note as finished / not finished
        dataService.update($(this).data("id"), {finished: $(this).is(':checked')});
    });

    // select skin dropdown
    $("body").on("change", "#btnSelectSkin", function (event) {
        event.preventDefault();
        // skin
        var skinClass = $(this).val();
        // set body class
        document.body.className = skinClass;
        // save selected skin
        configService.setSkin(skinClass);
    });
})();
