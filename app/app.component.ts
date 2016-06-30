import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { CHARTS_DIRECTIVES } from './charts/charts';
import { TREE_DIRECTIVES } from './tree/tree';

@Component ({
    selector: 'kairos-app',
    directives: [CHARTS_DIRECTIVES, TREE_DIRECTIVES],
    providers: [HTTP_PROVIDERS],
    styles: [`
        header {
            background-color:black;
            color:white;
            text-align:center;
            padding:5px;
        }
        nav {
            line-height:30px;
            background-color:#eeeeee;
            height:300px;
            width:300px;
            float:left;
            padding:5px;
        }
        section {
            width:800px;
            float:left;
            padding:10px;
        }

        /*div.example {min-height: 800px}*/

        /* Tabbed example */
        div.tabs {
            min-height: 200em;		/* No height: can grow if :target doesn't work */
            max-height: 400em;
            position: relative;		/* Establish a containing block */
            line-height: 1;		/* Easier to calculate with */
            z-index: 0}			/* So that we can put other things behind */
        div.tabs > div {
            display: inline}		/* We want the buttons all on one line */
        div.tabs > div > a {
            color: black;			/* Looks more like a button than a link */
            background: #CCC;		/* Active tabs are light gray */
            padding: 0.2em;		/* Some breathing space */
            border: 0.1em outset #BBB;	/* Make it look like a button */
            border-bottom: 0.1em solid #CCC} /* Visually connect tab and tab body */
        div.tabs > div:not(:target) > a {
            border-bottom: none;		/* Make the bottom border disappear */
            background: #999}		/* Inactive tabs are dark gray */
        div.tabs > div:target > a,	/* Apply to the targeted item or... */
        :target #default2 > a {		/* ... to the default item */
            border-bottom: 0.1em solid #CCC; /* Visually connect tab and tab body */
            background: #CCC}		/* Active tab is light gray */
        div.tabs > div > div {
            background: #CCC;		/* Light gray */
            z-index: -2;			/* Behind, because the borders overlap */
            left: 0; top: 1.3em;		/* The top needs some calculation... */
            bottom: 0; right: 0;		/* Other sides flush with containing block */
            overflow: auto;		/* Scroll bar if needed */
            padding: 0.3em;		/* Looks better */
            border: 0.1em outset #BBB}	/* 3D look */
        div.tabs > div:not(:target) > div { /* Protect CSS1 & CSS2 browsers */
            position: absolute }		/* All these DIVs overlap */
        div.tabs > div:target > div, :target #default2 > div {
            position: absolute;		/* All these DIVs overlap */
            z-index: -1}			/* Raise it above the others */

        div.tabs :target {
            outline: none}
    `],
    template: `
        <header>
            <h2>Kairos Test</h2>
        </header>

        <nav>
            <resource-tree-component></resource-tree-component>
        </nav>

        <section>
            <div class=section id=tabs>
                <div class=example>
                    <div class=tabs>
                        <div id=tab1> <a href="#tab1">Tab 1</a>
                            <div><amchart-xyplot>Loading...</amchart-xyplot></div>
                        </div>

                        <div id=tab2> <a href="#tab2">Tab 2</a>
                            <div>Tab 2 Content...</div>
                        </div>

                        <div id=tab3> <a href="#tab3">Tab 3</a>
                            <div>Tab 3 Content...</div>
                        </div>

                        <div id=default2> <a href="#default2">Default</a>
                            <div>Default Content...</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
    //styleUrls: ['./kairos-app.css'],
    //templateUrl: './kairos-app.html',

})

export default class AppComponent {}