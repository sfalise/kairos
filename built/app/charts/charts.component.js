System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var ChartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ChartComponent = (function () {
                function ChartComponent() {
                    this.nullData = [
                        {
                            "date": "",
                            "ay": 0.0,
                            "by": 0.0
                        }];
                    this.chartData = [
                        {
                            "date": "2015-01-01",
                            "ay": 0.5,
                            "by": 2.2
                        },
                        {
                            "date": "2015-01-02",
                            "ay": 1.3,
                            "by": 4.9
                        },
                        {
                            "date": "2015-01-03",
                            "ay": 2.3,
                            "by": 5.1
                        },
                        {
                            "date": "2015-01-04",
                            "ay": 2.8,
                            "by": 5.3
                        },
                        {
                            "date": "2015-01-05",
                            "ay": 3.5,
                            "by": 6.1
                        },
                        {
                            "date": "2015-01-06",
                            "ay": 5.1,
                            "by": 8.3
                        },
                        {
                            "date": "2015-01-07",
                            "ay": 6.7,
                            "by": 10.5
                        },
                        {
                            "date": "2015-01-08",
                            "ay": 8,
                            "by": 12.3
                        },
                        {
                            "date": "2015-01-09",
                            "ay": 8.9,
                            "by": 14.5
                        },
                        {
                            "date": "2015-01-10",
                            "ay": 9.7,
                            "by": 15
                        },
                        {
                            "date": "2015-01-11",
                            "ay": 10.4,
                            "by": 18.8
                        },
                        {
                            "date": "2015-01-12",
                            "ay": 11.7,
                            "by": 19
                        }
                    ];
                    this.buttonLabel = 'Select Data File';
                }
                ChartComponent.prototype.ngOnInit = function () {
                    if (AmCharts.isReady) {
                        // XY CHART
                        this.chart = new AmCharts.AmXYChart();
                        this.chart.dataDateFormat = "YYYY-MM-DD";
                        this.chart.dataProvider = this.chartData;
                        //this.chart.dataProvider = this.nullData;
                        this.chart.startDuration = 1;
                        // AXES
                        // X
                        var xAxis = new AmCharts.ValueAxis();
                        xAxis.title = "X Axis";
                        xAxis.position = "bottom";
                        xAxis.dashLength = 1;
                        xAxis.axisAlpha = 0;
                        xAxis.type = "date";
                        xAxis.autoGridCount = true;
                        this.chart.addValueAxis(xAxis);
                        // Y
                        var yAxis = new AmCharts.ValueAxis();
                        yAxis.position = "left";
                        yAxis.title = "Y Axis";
                        yAxis.dashLength = 1;
                        yAxis.axisAlpha = 0;
                        yAxis.autoGridCount = true;
                        this.chart.addValueAxis(yAxis);
                        // GRAPHS
                        // triangles up
                        var graph1 = new AmCharts.AmGraph();
                        graph1.lineColor = "#FF6600";
                        graph1.balloonText = "x:[[x]] y:[[y]]";
                        graph1.xField = "date";
                        graph1.yField = "ay";
                        graph1.lineAlpha = 1;
                        graph1.type = "smoothedLine";
                        graph1.bullet = "triangleUp";
                        this.chart.addGraph(graph1);
                        // triangles down
                        var graph2 = new AmCharts.AmGraph();
                        graph2.lineColor = "#FCD202";
                        graph2.balloonText = "x:[[x]] y:[[y]]";
                        graph2.xField = "date";
                        graph2.yField = "by";
                        graph2.lineAlpha = 1;
                        graph2.type = "smoothedLine";
                        graph2.bullet = "triangleDown";
                        this.chart.addGraph(graph2);
                        // first trend line
                        var trendLine = new AmCharts.TrendLine();
                        trendLine.lineColor = "#FF6600";
                        trendLine.initialXValue = 1;
                        trendLine.initialValue = 2;
                        trendLine.finalXValue = 12;
                        trendLine.finalValue = 11;
                        this.chart.addTrendLine(trendLine);
                        // second trend line
                        trendLine = new AmCharts.TrendLine();
                        trendLine.lineColor = "#FCD202";
                        trendLine.initialXValue = 1;
                        trendLine.initialValue = 1;
                        trendLine.finalXValue = 12;
                        trendLine.finalValue = 19;
                        this.chart.addTrendLine(trendLine);
                        // CURSOR
                        var chartCursor = new AmCharts.ChartCursor();
                        this.chart.addChartCursor(chartCursor);
                        // SCROLLBAR
                        var chartScrollbar = new AmCharts.ChartScrollbar();
                        this.chart.addChartScrollbar(chartScrollbar);
                        // WRITE
                        this.chart.write("chartdiv");
                    }
                };
                ChartComponent.prototype.getDataFile = function () {
                    //get data to populate the xy plot (from file or web service)
                    var temp = "here i am";
                };
                ChartComponent = __decorate([
                    core_1.Component({
                        selector: 'amchart-xyplot',
                        template: "\n    <div align=\"center\" xmlns=\"http://www.w3.org/1999/html\">\n      <div id=\"chartdiv\" style=\"width: 600px; height: 400px;\"></div>\n      <p>\n        <button (click)=\"getDataFile()\">\n          {{ buttonLabel }}\n        </button>\n      </p>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartComponent);
                return ChartComponent;
            }());
            exports_1("default", ChartComponent);
        }
    }
});
//# sourceMappingURL=charts.component.js.map