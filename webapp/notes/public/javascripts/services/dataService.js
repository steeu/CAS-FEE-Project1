/**
 * data service
 */
var dataService = (function () {
    "use strict";

    function publicAllNotes(successCallback, errorCallback) {
        return httpService.get("/rest/notes/", successCallback, errorCallback);
    };

    function publicOpenNotes(successCallback, errorCallback) {
        return httpService.get("/rest/notes/open/", successCallback, errorCallback);
    };

    function publicFinishedNotes(successCallback, errorCallback) {
        return httpService.get("/rest/notes/finished/", successCallback, errorCallback);
    };

    function publicUpdateNote(id, data, successCallback, errorCallback) {
        return httpService.put("/rest/note/" + id, data, successCallback, errorCallback);
    };

    function publicRemoveNote(id, successCallback, errorCallback) {
        return httpService.delete("/rest/note/" + id, successCallback, errorCallback);
    };

    return {
        allNotes: publicAllNotes,
        openNotes: publicOpenNotes,
        finishedNotes: publicFinishedNotes,
        update: publicUpdateNote,
        remove: publicRemoveNote
    }
})();
