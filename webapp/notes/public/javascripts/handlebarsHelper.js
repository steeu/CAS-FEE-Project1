;(function () {
    'use strict';

    /**
     * handlebars date helper
     */
    Handlebars.registerHelper("formatDate", function (datetime, format) {
        var myDate = new Date(datetime);
        var currentDate = new Date();
        var timeDifference = myDate - currentDate;
        var dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

        if (format === "words") {
            if (dayDifference === 0) {
                return "Today";
            } else if (dayDifference === 1) {
                return "Tomorrow"
            } else if (dayDifference) {
                return "Somtime"
            }
        } else {
            return myDate.getDate() + '.' + (myDate.getMonth() + 1) + '.' + myDate.getFullYear();
        }
    });

    /**
     * handlebars priority helper
     */
    Handlebars.registerHelper("renderPriorityHTML", function (value) {
        var html = '';
        if (value) {
            for (var i = 0; i < value; i++) {
                html += '<i class="fa fa-bolt" aria-hidden="true"></i>';
            }
            return html;
        }
    });
})();