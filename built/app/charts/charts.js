System.register(['./charts.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var charts_component_1;
    var CHARTS_DIRECTIVES;
    return {
        setters:[
            function (charts_component_1_1) {
                charts_component_1 = charts_component_1_1;
            }],
        execute: function() {
            CHARTS_DIRECTIVES = [
                charts_component_1.default
            ];
            exports_1("CHARTS_DIRECTIVES", CHARTS_DIRECTIVES);
            exports_1("ChartComponent", charts_component_1.default);
        }
    }
});
//# sourceMappingURL=charts.js.map