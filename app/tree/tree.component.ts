import { Component, EventEmitter, Output } from '@angular/core';
import { TreeComponent } from 'angular2-tree-component';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'resource-tree-component',
    directives: [TreeComponent],
    template: `
    <div>
        <h2>Selected Item: {{ selectedItem }}</h2>
        <h3>{{ description }}</h3>
        <Tree
            [nodes]="nodes"
            (onFocus)="onFocusEvent($event)">
        </Tree>
    </div>
    `
})
export default class ResourceTreeComponent {
    selectedItem: string = "";
    description: string = "";

    nodes = [
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
                    description: 'this is the first child of root node two'},
                { name: 'child2.2',
                    description: 'this is the second child of root node two',
                    children: [
                        { name: 'subsub',
                            description: 'this is the first child of the second child of root node two'}
                    ]
                }
            ]
        }
    ];

    onFocusEvent(event): void {
        this.selectedItem = event.node.data.name;
        this.description = event.node.data.description;
        //alert('Focus event');
    }

}
