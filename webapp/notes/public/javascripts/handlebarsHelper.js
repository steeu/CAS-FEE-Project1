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
                html += '<svg class="icon-priority" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 272.256 272.256" style="enable-background:new 0 0 272.256 272.256;" xml:space="preserve" width="512px" height="512px">'
                    + '<path d="M235.096,103.563c-1.644-3.688-5.304-6.063-9.342-6.063c-11.689,0-76.95,0-76.95,0l31.652-83.653  c1.189-3.142,0.759-6.668-1.151-9.433C177.396,1.65,174.251,0,170.891,0H94.762c-4.252,0-8.061,2.631-9.566,6.608l-48.26,127.544  c-1.189,3.142-0.759,6.668,1.151,9.433c1.91,2.764,5.055,4.415,8.415,4.415l85.399-0.513L86.78,267.492  c-0.596,1.586,0.021,3.372,1.469,4.252c1.448,0.88,3.318,0.604,4.451-0.656l140.662-156.523  C236.06,111.561,236.74,107.251,235.096,103.563z" fill="#FFDA44"/>'
                    + '<g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>'
                    + '</svg>';
            }
            return html;
        }
    });
})();