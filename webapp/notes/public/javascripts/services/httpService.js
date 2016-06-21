/**
 * http request service
 */
var httpService = (function () {
    "use strict";

    function publicGET(url, successCallback, errorCallback) {
        privateRequest("GET", url, null, successCallback, errorCallback);
    };

    function publicPUT(url, data, successCallback, errorCallback) {
        privateRequest("PUT", url, data, successCallback, errorCallback);
    };

    function publicDELETE(url, successCallback, errorCallback) {
        privateRequest("DELETE", url, null, successCallback, errorCallback);
    };

    function privateRequest(methode, url, data, successCallback, errorCallback) {
        var xhr = new XMLHttpRequest();
        var data = data ? JSON.stringify(data) : null;

        xhr.onreadystatechange = function () {
            if (4 === xhr.readyState) {
                if (xhr.status === 200) {
                    console.log("success: ", xhr.responseText);
                    // validate success callback function
                    if (successCallback) {
                        successCallback(JSON.parse(xhr.responseText));
                    }
                } else {
                    console.log("error: ", xhr.responseText);
                    // validate error callback function
                    if (errorCallback) {
                        errorCallback(xhr.responseText);
                    }
                }
            }
        };

        xhr.open(methode, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(data);
    };

    return {
        get: publicGET,
        put: publicPUT,
        delete: publicDELETE
    };
})();