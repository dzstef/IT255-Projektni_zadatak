System.register(['angular2/platform/browser', 'angular2/core', 'angular2/http', 'angular2/router', './app.component', 'app/sharedService/sharedService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, http_1, router_1, app_component_1, sharedService_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (sharedService_1_1) {
                sharedService_1 = sharedService_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [sharedService_1.SharedService,
                router_1.ROUTER_PROVIDERS, core_1.bind(router_1.APP_BASE_HREF).toValue(location.pathname), http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map