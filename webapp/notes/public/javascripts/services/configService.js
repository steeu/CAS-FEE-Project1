/**
 * config service
 */
var configService = (function () {
    'use strict';

    var storageKey = "TaskListConfig";
    var storageData = privateReadConfig();

    /**
     * public methodes
     */
    function publicGetSkin() {
        return storageData.skin ? storageData.skin : 'color';
    };

    function publicSetSkin(skin) {
        storageData.skin = skin;

        return privateWriteConfig();
    };

    function publicGetOrderBy() {
        return storageData.order ? storageData.order : 'priority';
    };

    function publicSetOrderBy(order) {
        storageData.order = skin;
        return privateWriteConfig();
    };

    function publicGetFilter() {
        return storageData.filter ? storageData.filter : 'all';
    };

    function publicSetFilter(filter) {
        storageData.filter = filter;
        return privateWriteConfig();
    };

    /**
     * private methodes
     */
    function privateWriteConfig() {
        localStorage.setItem(storageKey, JSON.stringify(storageData));
        return true;
    }

    function privateReadConfig() {
        return JSON.parse(localStorage.getItem(storageKey)) || {};
    }

    return {
        getSkin: publicGetSkin,
        setSkin: publicSetSkin,
        getOrderBy: publicGetOrderBy,
        setOrderBy: publicSetOrderBy,
        getFilter: publicGetFilter,
        setFilter: publicSetFilter
    }
})();
