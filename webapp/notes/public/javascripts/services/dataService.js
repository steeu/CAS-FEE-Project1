var dataService = (function () {
    "use strict";

    var storageKey = "TaskList";
    var storageData = privateReadTaskList();

    function publicAllNotes(successCallback, errorCallback) {
        return httpService.get("/rest/notes/", successCallback, errorCallback);
    };

    function publicGetTaskById(id) {
        var index = storageData.findIndex(function (item) {
            if (item.ID == this.key) {
                return true;
            }
        }, {
            key: id
        });
        return {
            data: publicGetAllTasks()[index],
            index: index
        };
    };

    function publicSaveTask(task) {
        var existing = publicGetTaskById(task.ID);

        // validate if existing
        if (existing && existing.index !== -1) {
            storageData[existing.index] = task;
        } else {
            // add task
            storageData.push(task);
        }

        return privateWriteTaskList();
    };

    function publicRemoveTask(task) {
        var existing = publicGetTaskById(task.ID);

        // validate if existing
        if (existing && existing.index !== -1) {
            storageData.splice(existing.index, 1);

            return privateWriteTaskList();
        } else {
            throw 'Task not found in storage';

        }
    };

    /**
     * private methodes
     */

    function privateWriteTaskList() {
        localStorage.setItem(storageKey, JSON.stringify(storageData));
        return true;
    }

    function privateReadTaskList() {
        return JSON.parse(localStorage.getItem(storageKey)) || [];
    }

    return {
        all: publicAllNotes,
    }
})();
