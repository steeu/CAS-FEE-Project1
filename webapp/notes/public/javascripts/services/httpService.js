var httpService = (function () {

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
                    if (successCallback) {
                        successCallback(xhr.responseText);
                    }
                } else {
                    if (errorCallback) {
                        errorCallback();
                    }
                }
            }
        };

        xhr.open(methode, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(data);
    };

    return {
        put: publicPUT,
        delete: publicDELETE
    };
})();