;(function () {
    'use strict';

    /**
     * handlebars date helper
     */
    Handlebars.registerHelper("formatDate", function (datetime, format) {
        var myDate = new Date(datetime);
        return myDate.getDate() + '.' + (myDate.getMonth() + 1) + '.' + myDate.getFullYear();
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