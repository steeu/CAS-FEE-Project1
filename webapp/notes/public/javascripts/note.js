;(function () {
    'use strict'

    // render priority icons active state
    function renderPriorityIcons() {
        $(".icon-priority").each(function (index, value) {
            if (index < $("#in-priority").val()) {
                $(value).addClass("active");
            } else {
                $(value).removeClass("active");
            }
        });
    }

    renderPriorityIcons();

    // set priority (hidden input field)
    $("body").on("click", ".icon-priority", function (event) {
        event.preventDefault();
        // add value to hidden field
        $("#in-priority").val($(this).data("priority"));
        // update priority icons active state
        renderPriorityIcons();
    });

    // update note
    $("body").on("click", "#btnSaveNote", function (event) {
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
    $("body").on("click", "#btnRemoveNote", function (event) {
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
    $("body").on("click", "#btnCancelNote", function (event) {
        event.preventDefault();
        // goto root
        window.location = '/';
    });
})();
