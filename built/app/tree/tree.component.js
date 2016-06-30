System.register(['@angular/core', 'angular2-tree-component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular2_tree_component_1;
    var ResourceTreeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_tree_component_1_1) {
                angular2_tree_component_1 = angular2_tree_component_1_1;
            }],
        execute: function() {
            ResourceTreeComponent = (function () {
                function ResourceTreeComponent() {
                    this.selectedItem = "";
                    this.description = "";
                    this.nodes = [
                        {
                            name: 'root1',
                            description: 'this is root node one',
                            children: [
                                { name: 'child1',
                                    description: 'this is the first child of root node one' },
                                { name: 'child2',
                                    description: 'this is the second child of root node one' }
                            ]
                        },
                        {
                            name: 'root2',
                            description: 'this is root node two',
                            children: [
                                { name: 'child2.1',
                                    description: 'this is the first child of root node two' },
                                { name: 'child2.2',
                                    description: 'this is the second child of root node two',
                                    children: [
                                        { name: 'subsub',
                                            description: 'this is the first child of the second child of root node two' }
                                    ]
                                }
                            ]
                        }
                    ];
                }
                ResourceTreeComponent.prototype.onFocusEvent = function (event) {
                    this.selectedItem = event.node.data.name;
                    this.description = event.node.data.description;
                    //alert('Focus event');
                };
                ResourceTreeComponent = __decorate([
                    core_1.Component({
                        selector: 'resource-tree-component',
                        directives: [angular2_tree_component_1.TreeComponent],
                        template: "\n    <div>\n        <h2>Selected Item: {{ selectedItem }}</h2>\n        <h3>{{ description }}</h3>\n        <Tree\n            [nodes]=\"nodes\"\n            (onFocus)=\"onFocusEvent($event)\">\n        </Tree>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ResourceTreeComponent);
                return ResourceTreeComponent;
            }());
            exports_1("default", ResourceTreeComponent);
        }
    }
});
//# sourceMappingURL=tree.component.js.map