////////////////////////////////////////////////////
/*
 * JSTree methods
 */

(function ($) {

    $.treeViewDataKey = 'treeviewData6';
    $.prepareStartupData = function () {

        if (window.localStorage && localStorage.getItem($.treeViewDataKey) == null) {
            var startupData = [
                        {
                            "data": {
                                "title": "Node1"
                            },
                            "attr": { "id": "node1" },
                            "children": [
                                {
                                    "data": {
                                        "title": "Level 1"
                                    },
                                    "attr": { "rel": "product-category" }
                                }
                            ]
                        },
                        {
                            "data": {
                                "title": "Node 2"
                            }
                        },
                        {
                            "data": {
                                "title": "Node 3"
                            }
                        },
                        {
                            "data": {
                                "title": "Node 4"
                            }
                        }
            ];

            localStorage.setItem($.treeViewDataKey, JSON.stringify(startupData));
        }

    };

    $.getTreeDataFromStorage = function (key) {

        /* check if browser support local storage */
        if (window.localStorage) {

            var treeData = localStorage.getItem(key);
            if (treeData == null) {
                treeData = localStorage.getItem($.treeViewDataKey);
            }
            return treeData && JSON.parse(treeData);
        }
        else {
            console.log("HTML5 not supported");
            /* use some other methods to get data */
        }
    };

    $.saveTreeData = function (key, data) {
        
        if (window.localStorage) {
            localStorage.setItem(key, JSON.stringify(data));
        }
        else {
            console.log("HTML5 not supported");
            /* use some other methods to get data */
        }
    },

    $.reloadTreeData = function (key) {
        if (window.localStorage) {
            return localStorage.getItem(key);
        }
        else {
            console.log("HTML5 not supported");
            /* use some other methods to get data */
        }
    }

}(jQuery));