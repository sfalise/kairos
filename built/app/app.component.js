System.register(['@angular/core', '@angular/http', './charts/charts', './tree/tree'], function(exports_1, context_1) {
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
    var core_1, http_1, charts_1, tree_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (charts_1_1) {
                charts_1 = charts_1_1;
            },
            function (tree_1_1) {
                tree_1 = tree_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'kairos-app',
                        directives: [charts_1.CHARTS_DIRECTIVES, tree_1.TREE_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS],
                        styles: ["\n        header {\n            background-color:black;\n            color:white;\n            text-align:center;\n            padding:5px;\n        }\n        nav {\n            line-height:30px;\n            background-color:#eeeeee;\n            height:300px;\n            width:300px;\n            float:left;\n            padding:5px;\n        }\n        section {\n            width:800px;\n            float:left;\n            padding:10px;\n        }\n\n        /*div.example {min-height: 800px}*/\n\n        /* Tabbed example */\n        div.tabs {\n            min-height: 200em;\t\t/* No height: can grow if :target doesn't work */\n            max-height: 400em;\n            position: relative;\t\t/* Establish a containing block */\n            line-height: 1;\t\t/* Easier to calculate with */\n            z-index: 0}\t\t\t/* So that we can put other things behind */\n        div.tabs > div {\n            display: inline}\t\t/* We want the buttons all on one line */\n        div.tabs > div > a {\n            color: black;\t\t\t/* Looks more like a button than a link */\n            background: #CCC;\t\t/* Active tabs are light gray */\n            padding: 0.2em;\t\t/* Some breathing space */\n            border: 0.1em outset #BBB;\t/* Make it look like a button */\n            border-bottom: 0.1em solid #CCC} /* Visually connect tab and tab body */\n        div.tabs > div:not(:target) > a {\n            border-bottom: none;\t\t/* Make the bottom border disappear */\n            background: #999}\t\t/* Inactive tabs are dark gray */\n        div.tabs > div:target > a,\t/* Apply to the targeted item or... */\n        :target #default2 > a {\t\t/* ... to the default item */\n            border-bottom: 0.1em solid #CCC; /* Visually connect tab and tab body */\n            background: #CCC}\t\t/* Active tab is light gray */\n        div.tabs > div > div {\n            background: #CCC;\t\t/* Light gray */\n            z-index: -2;\t\t\t/* Behind, because the borders overlap */\n            left: 0; top: 1.3em;\t\t/* The top needs some calculation... */\n            bottom: 0; right: 0;\t\t/* Other sides flush with containing block */\n            overflow: auto;\t\t/* Scroll bar if needed */\n            padding: 0.3em;\t\t/* Looks better */\n            border: 0.1em outset #BBB}\t/* 3D look */\n        div.tabs > div:not(:target) > div { /* Protect CSS1 & CSS2 browsers */\n            position: absolute }\t\t/* All these DIVs overlap */\n        div.tabs > div:target > div, :target #default2 > div {\n            position: absolute;\t\t/* All these DIVs overlap */\n            z-index: -1}\t\t\t/* Raise it above the others */\n\n        div.tabs :target {\n            outline: none}\n    "],
                        template: "\n        <header>\n            <h2>Kairos Test</h2>\n        </header>\n\n        <nav>\n            <resource-tree-component></resource-tree-component>\n        </nav>\n\n        <section>\n            <div class=section id=tabs>\n                <div class=example>\n                    <div class=tabs>\n                        <div id=tab1> <a href=\"#tab1\">Tab 1</a>\n                            <div><amchart-xyplot>Loading...</amchart-xyplot></div>\n                        </div>\n\n                        <div id=tab2> <a href=\"#tab2\">Tab 2</a>\n                            <div>Tab 2 Content...</div>\n                        </div>\n\n                        <div id=tab3> <a href=\"#tab3\">Tab 3</a>\n                            <div>Tab 3 Content...</div>\n                        </div>\n\n                        <div id=default2> <a href=\"#default2\">Default</a>\n                            <div>Default Content...</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("default", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map