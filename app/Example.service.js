System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ExampleService;
    return {
        setters:[],
        execute: function() {
            ExampleService = (function () {
                function ExampleService() {
                }
                ExampleService.prototype.getTitles = function () {
                    return ['title1', 'title2', 'title3'];
                };
                return ExampleService;
            }());
            exports_1("ExampleService", ExampleService);
        }
    }
});
//# sourceMappingURL=Example.service.js.map