import { Component, OnInit } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  path: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fonts',
    path: '',
    children: [
      {name: 'Fantacy', path: 'fantacy'},
      {name: 'Monospace', path: 'monospace'},
    ]
  }, {
    name: 'Colors',
    path: '',
    children: [
      {
        name: 'Red',
        path: '',
        children: [
          {name: 'Dark red', path: 'dark-red'},
          {name: 'Light red', path: 'light-red'},
        ]
      }, {
        name: 'Green',
        path: '',
        children: [
          {name: 'Dark green', path: 'dark-green'},
          {name: 'Light green', path: 'light-green'},
        ]
      }, {
        name: 'Blue',
        path: '',
        children: [
          {name: 'Dark blue', path: 'dark-blue'},
          {name: 'Light blue', path: 'light-blue'},
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-menu-settings',
  templateUrl: './menu-settings.component.html',
  styleUrls: ['./menu-settings.component.css']
})
export class MenuSettingsComponent {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      path: node.path,
      level,
    };
  }
  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
