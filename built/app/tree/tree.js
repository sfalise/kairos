System.register(['./tree.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tree_component_1;
    var TREE_DIRECTIVES;
    return {
        setters:[
            function (tree_component_1_1) {
                tree_component_1 = tree_component_1_1;
            }],
        execute: function() {
            TREE_DIRECTIVES = [
                tree_component_1.default
            ];
            exports_1("TREE_DIRECTIVES", TREE_DIRECTIVES);
            exports_1("ResourceTreeComponent", tree_component_1.default);
        }
    }
});
//# sourceMappingURL=tree.js.map