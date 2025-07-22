import{o as E,p as me}from"./chunk-JYNCG2Y6.js";import{Aa as ie,Ab as f,Cb as _,Db as se,F as $,Ga as oe,Ra as ae,Wa as le,a as Y,c as Z,ha as ee,ja as te,nb as k,ta as ne,vb as re,xb as pe,zb as g}from"./chunk-HBOGTDFH.js";import{$a as C,Ac as U,Ba as P,Ea as t,Fa as e,Ga as l,Ka as D,La as S,M as L,Nc as K,Pc as X,Rc as O,T as b,Ta as j,U as v,Ua as q,Va as W,Wa as F,Xa as n,Za as x,a as N,ab as T,bb as V,db as H,eb as h,ha as s,ia as A,oa as u,pa as M,ub as y,wc as R,xc as G,ya as d,yc as J,zc as Q}from"./chunk-MIQUIDUB.js";var Ve=()=>({label:"Adicionar",value:1.1}),de=a=>[a],Pe=a=>({label:"Gerenciador de usu\xE1rios",value:1,subItems:a}),ce=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-tree-view-basic"]],standalone:!1,decls:1,vars:8,consts:[[3,"p-items"]],template:function(o,i){o&1&&l(0,"po-tree-view",0),o&2&&d("p-items",h(6,de,h(4,Pe,h(2,de,H(1,Ve)))))},dependencies:[_],encapsulation:2})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-tree-view-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tree View Basic"),e(),t(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tree-view-basic/sample-po-tree-view-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-tree-view
  [p-items]="[{ label: 'Gerenciador de usu\xE1rios', value: 1, subItems: [{ label: 'Adicionar', value: 1.1 }] }]"
>
</po-tree-view>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tree-view-basic/sample-po-tree-view-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-tree-view-basic',
  templateUrl: 'sample-po-tree-view-basic.component.html',
  standalone: false
})
export class SamplePoTreeViewBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-tree-view-basic"),e(),l(23,"hr")),o&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),x(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",h(4,ye,i.hideSampleCodeTabs)))},dependencies:[y,E,g,f,ce],encapsulation:2})}return a})();var be=(()=>{class a{componentsSize="medium";event;items;itemProperties;parent;parentList;selectable;treeViewItem;maxLevel=4;singleSelect=!1;componentsSizeOptions=[{value:"small",label:"Small"},{value:"medium",label:"Medium"}];itemPropertiesOptions=[{value:"selected",label:"Selected"},{value:"expanded",label:"Expanded"},{value:"disable-selection",label:"Disable Selection"}];ngOnInit(){this.restore()}add(r){r.selected=this.itemProperties.includes("selected"),r.expanded=this.itemProperties.includes("expanded"),r.isSelectable=!this.itemProperties.includes("disable-selection");let o=N({},r);if(!this.parent)this.items=[...this.items,o];else{let i=this.getTreeViewItemNode(this.items,this.parent);i.subItems||(i.subItems=[]),i.subItems=[...i.subItems,o]}this.items=[].concat(this.items),this.parentList=this.updateParentList(this.items)}changeEvent(r,o){this.event=`${r}: ${JSON.stringify(o)}`}restore(){this.componentsSize="medium",this.event=void 0,this.items=[],this.parent=void 0,this.parentList=[],this.itemProperties=[],this.selectable=void 0,this.treeViewItem={},this.maxLevel=4}getTreeViewItemNode(r,o){let i;if(r){for(let m of r)if(m.value===o){i=m;break}else i||(i=this.getTreeViewItemNode(m.subItems,o));return i}}updateParentList(r,o=0,i=[],m){return r.forEach(c=>{let{label:p,value:Te}=c;i.push({label:`${"-".repeat(o)} ${p}`,value:Te}),c.subItems&&(this.updateParentList(c.subItems,++o,i,c),--o),o=m?o:0}),i}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-tree-view-labs"]],standalone:!1,decls:24,vars:18,consts:[["treeViewItemForm","ngForm"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-components-size","p-items","p-selectable","p-max-level","p-single-select"],["p-label","Events"],[1,"po-row"],["p-label","Event",3,"p-value"],["p-label","Po Tree View Config"],["name","level","p-label","Max Level",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","selectable","p-label","Selectable",1,"po-md-6","po-lg-2",3,"ngModelChange","ngModel"],["name","singleSelect","p-label","Single Select",1,"po-md-6","po-lg-2",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-5",3,"ngModelChange","ngModel","p-options"],["p-label","Po Tree View Item"],["name","parent","p-label","Parent Item","p-placeholder","Add tree view item",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","label","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","value","p-label","Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","itemProperties","p-columns","3","p-label","Item Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add",1,"o-md-4","po-lg-2",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-6","po-lg-3",3,"p-click"]],template:function(o,i){if(o&1){let m=D();t(0,"po-tree-view",1),S("p-collapsed",function(p){return b(m),v(i.changeEvent("p-collapsed",p))})("p-expanded",function(p){return b(m),v(i.changeEvent("p-expanded",p))})("p-selected",function(p){return b(m),v(i.changeEvent("p-selected",p))})("p-unselected",function(p){return b(m),v(i.changeEvent("p-unselected",p))}),e(),l(1,"po-divider",2),t(2,"div",3),l(3,"po-info",4),e(),l(4,"po-divider",5),t(5,"div",3)(6,"po-input",6),V("ngModelChange",function(p){return b(m),T(i.maxLevel,p)||(i.maxLevel=p),v(p)}),e(),t(7,"po-switch",7),V("ngModelChange",function(p){return b(m),T(i.selectable,p)||(i.selectable=p),v(p)}),e(),t(8,"po-switch",8),V("ngModelChange",function(p){return b(m),T(i.singleSelect,p)||(i.singleSelect=p),v(p)}),e(),t(9,"po-radio-group",9),V("ngModelChange",function(p){return b(m),T(i.componentsSize,p)||(i.componentsSize=p),v(p)}),e()(),l(10,"po-divider",10),t(11,"form",null,0)(13,"div",3)(14,"po-select",11),V("ngModelChange",function(p){return b(m),T(i.parent,p)||(i.parent=p),v(p)}),e(),t(15,"po-input",12),V("ngModelChange",function(p){return b(m),T(i.treeViewItem.label,p)||(i.treeViewItem.label=p),v(p)}),e(),t(16,"po-input",13),V("ngModelChange",function(p){return b(m),T(i.treeViewItem.value,p)||(i.treeViewItem.value=p),v(p)}),e()(),t(17,"div",3)(18,"po-checkbox-group",14),V("ngModelChange",function(p){return b(m),T(i.itemProperties,p)||(i.itemProperties=p),v(p)}),e()(),t(19,"div",3)(20,"po-button",15),S("p-click",function(){b(m);let p=F(12);return i.add(i.treeViewItem),p.reset(),v(i.itemProperties=[])}),e()()(),l(21,"hr"),t(22,"div",3)(23,"po-button",16),S("p-click",function(){return b(m),v(i.restore())}),e()()}if(o&2){let m=F(12);d("p-components-size",i.componentsSize)("p-items",i.items)("p-selectable",i.selectable)("p-max-level",i.maxLevel)("p-single-select",i.singleSelect),s(3),d("p-value",i.event),s(3),C("ngModel",i.maxLevel),s(),C("ngModel",i.selectable),s(),C("ngModel",i.singleSelect),s(),C("ngModel",i.componentsSize),d("p-options",i.componentsSizeOptions),s(5),C("ngModel",i.parent),d("p-options",i.parentList),s(),C("ngModel",i.treeViewItem.label),s(),C("ngModel",i.treeViewItem.value),s(2),C("ngModel",i.itemProperties),d("p-options",i.itemPropertiesOptions),s(2),d("p-disabled",m.invalid)}},dependencies:[U,R,G,Q,J,$,Y,ee,te,oe,ae,ne,le,_],encapsulation:2})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-tree-view-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tree View Labs"),e(),t(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tree-view-labs/sample-po-tree-view-labs.component.html"),e(),t(13,"pre",7),n(14,`<po-tree-view
  [p-components-size]="componentsSize"
  [p-items]="items"
  [p-selectable]="selectable"
  (p-collapsed)="changeEvent('p-collapsed', $event)"
  (p-expanded)="changeEvent('p-expanded', $event)"
  (p-selected)="changeEvent('p-selected', $event)"
  (p-unselected)="changeEvent('p-unselected', $event)"
  [p-max-level]="maxLevel"
  [p-single-select]="singleSelect"
>
</po-tree-view>

<po-divider p-label="Events"></po-divider>

<div class="po-row">
  <po-info p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider p-label="Po Tree View Config"></po-divider>

<div class="po-row">
  <po-input class="po-md-6 po-lg-3" name="level" [(ngModel)]="maxLevel" p-label="Max Level"> </po-input>
  <po-switch class="po-md-6 po-lg-2" name="selectable" [(ngModel)]="selectable" p-label="Selectable"> </po-switch>
  <po-switch class="po-md-6 po-lg-2" name="singleSelect" [(ngModel)]="singleSelect" p-label="Single Select">
  </po-switch>

  <po-radio-group
    class="po-lg-5"
    name="componentsSize"
    [(ngModel)]="componentsSize"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>
</div>

<po-divider p-label="Po Tree View Item"></po-divider>

<form #treeViewItemForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6 po-lg-4"
      name="parent"
      [(ngModel)]="parent"
      p-label="Parent Item"
      p-placeholder="Add tree view item"
      [p-options]="parentList"
    >
    </po-select>

    <po-input class="po-md-6 po-lg-4" name="label" [(ngModel)]="treeViewItem.label" p-label="Label" p-required>
    </po-input>

    <po-input class="po-md-6 po-lg-4" name="value" [(ngModel)]="treeViewItem.value" p-label="Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-6"
      name="itemProperties"
      [(ngModel)]="itemProperties"
      p-columns="3"
      p-label="Item Properties"
      [p-options]="itemPropertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="o-md-4 po-lg-2"
      p-label="Add"
      [p-disabled]="treeViewItemForm.invalid"
      (p-click)="add(treeViewItem); treeViewItemForm.reset(); this.itemProperties = []"
    >
    </po-button>
  </div>
</form>

<hr />

<div class="po-row">
  <po-button class="po-md-6 po-lg-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tree-view-labs/sample-po-tree-view-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption, PoTreeViewItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tree-view-labs',
  templateUrl: 'sample-po-tree-view-labs.component.html',
  standalone: false
})
export class SamplePoTreeViewLabsComponent implements OnInit {
  componentsSize: string = 'medium';
  event: string;
  items: Array<PoTreeViewItem>;
  itemProperties: Array<string>;
  parent: string;
  parentList: Array<PoSelectOption>;
  selectable: boolean;
  treeViewItem: PoTreeViewItem;
  maxLevel: number = 4;
  singleSelect: boolean = false;

  readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' }
  ];

  readonly itemPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'selected', label: 'Selected' },
    { value: 'expanded', label: 'Expanded' },
    { value: 'disable-selection', label: 'Disable Selection' }
  ];

  ngOnInit() {
    this.restore();
  }

  add(treeViewItem: PoTreeViewItem) {
    treeViewItem.selected = this.itemProperties.includes('selected');
    treeViewItem.expanded = this.itemProperties.includes('expanded');
    treeViewItem.isSelectable = !this.itemProperties.includes('disable-selection');

    const treeViewItemClone = { ...treeViewItem };

    if (!this.parent) {
      this.items = [...this.items, treeViewItemClone];
    } else {
      const treeViewItemNode = this.getTreeViewItemNode(this.items, this.parent);

      if (!treeViewItemNode.subItems) {
        treeViewItemNode.subItems = [];
      }

      treeViewItemNode.subItems = [...treeViewItemNode.subItems, treeViewItemClone];
    }

    this.items = [].concat(this.items);
    this.parentList = this.updateParentList(this.items);
  }

  changeEvent(event: string, treeViewItem: PoTreeViewItem) {
    this.event = \`\${event}: \${JSON.stringify(treeViewItem)}\`;
  }

  restore() {
    this.componentsSize = 'medium';
    this.event = undefined;
    this.items = [];
    this.parent = undefined;
    this.parentList = [];
    this.itemProperties = [];
    this.selectable = undefined;
    this.treeViewItem = <any>{};
    this.maxLevel = 4;
  }

  private getTreeViewItemNode(items: Array<PoTreeViewItem>, value: string) {
    let treeViewItemNode: PoTreeViewItem;

    if (!items) {
      return;
    }

    for (const item of items) {
      if (item.value === value) {
        treeViewItemNode = item;
        break;
      } else if (!treeViewItemNode) {
        treeViewItemNode = this.getTreeViewItemNode(item.subItems, value);
      }
    }

    return treeViewItemNode;
  }

  private updateParentList(
    items: Array<PoTreeViewItem>,
    level = 0,
    parentList = [],
    parentItem?: PoTreeViewItem
  ): Array<PoSelectOption> {
    items.forEach(item => {
      const { label, value } = item;

      parentList.push({ label: \`\${'-'.repeat(level)} \${label}\`, value });

      if (item.subItems) {
        this.updateParentList(item.subItems, ++level, parentList, item);
        --level;
      }

      level = !parentItem ? 0 : level;
    });

    return parentList;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-tree-view-labs"),e(),l(23,"hr")),o&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),x(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",h(4,ke,i.hideSampleCodeTabs)))},dependencies:[y,E,g,f,be],encapsulation:2})}return a})();var Se=(()=>{class a{items=[{label:"my_project",value:1,expanded:!0,subItems:[{label:"angular.json",value:121},{label:"browserslist",value:122,subItems:[{label:"e2e",value:1223,subItems:[{label:"protractor.conf.js",value:12231},{label:"src",value:12232},{label:"tsconfig.json",value:12233}]}]},{label:"karma.conf.js",value:123},{label:"node_modules",value:124},{label:"package.json",value:125},{label:"package-lock.json",value:126},{label:"README.md",value:127},{label:"src",value:128,subItems:[{label:"app",value:1281},{label:"assets",value:1282},{label:"environments",value:1283},{label:"favicon.ico",value:1284},{label:"index.html",value:1285},{label:"main.ts",value:1286},{label:"polyfills.ts",value:1287},{label:"styles.css",value:1288},{label:"test.ts",value:1289}]},{label:"tsconfig.app.json",value:129},{label:"tsconfig.json",value:130},{label:"tsconfig.spec.json",value:131},{label:"eslint.json",value:132}]}];static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-tree-view-folder-structure"]],standalone:!1,decls:4,vars:1,consts:[["p-title","Angular folder structure"],[1,"po-mb-4","po-ml-1","po-text-color-neutral-dark-40"],[1,"po-lg-4","po-md-6",3,"p-items"]],template:function(o,i){o&1&&(t(0,"po-page-default",0)(1,"p",1),n(2," This is the basic structure created using the Angular cli: "),e(),l(3,"po-tree-view",2),e()),o&2&&(s(3),d("p-items",i.items))},dependencies:[k,_],encapsulation:2})}return a})();var De=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-tree-view-folder-structure-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tree View - Folder Structure"),e(),t(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.html"),e(),t(13,"pre",7),n(14,`<po-page-default p-title="Angular folder structure">
  <p class="po-mb-4 po-ml-1 po-text-color-neutral-dark-40">
    This is the basic structure created using the Angular cli:
  </p>

  <po-tree-view class="po-lg-4 po-md-6" [p-items]="items"> </po-tree-view>
</po-page-default>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tree-view-folder-structure/sample-po-tree-view-folder-structure.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

import { PoTreeViewItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tree-view-folder-structure',
  templateUrl: 'sample-po-tree-view-folder-structure.component.html',
  standalone: false
})
export class SamplePoTreeViewFolderStructureComponent {
  readonly items: Array<PoTreeViewItem> = [
    {
      label: 'my_project',
      value: 1,
      expanded: true,
      subItems: [
        { label: 'angular.json', value: 121 },
        {
          label: 'browserslist',
          value: 122,
          subItems: [
            {
              label: 'e2e',
              value: 1223,
              subItems: [
                { label: 'protractor.conf.js', value: 12231 },
                { label: 'src', value: 12232 },
                { label: 'tsconfig.json', value: 12233 }
              ]
            }
          ]
        },
        { label: 'karma.conf.js', value: 123 },
        { label: 'node_modules', value: 124 },
        { label: 'package.json', value: 125 },
        { label: 'package-lock.json', value: 126 },
        { label: 'README.md', value: 127 },
        {
          label: 'src',
          value: 128,
          subItems: [
            { label: 'app', value: 1281 },
            { label: 'assets', value: 1282 },
            { label: 'environments', value: 1283 },
            { label: 'favicon.ico', value: 1284 },
            { label: 'index.html', value: 1285 },
            { label: 'main.ts', value: 1286 },
            { label: 'polyfills.ts', value: 1287 },
            { label: 'styles.css', value: 1288 },
            { label: 'test.ts', value: 1289 }
          ]
        },
        { label: 'tsconfig.app.json', value: 129 },
        { label: 'tsconfig.json', value: 130 },
        { label: 'tsconfig.spec.json', value: 131 },
        { label: 'eslint.json', value: 132 }
      ]
    }
  ];
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-tree-view-folder-structure"),e(),l(23,"hr")),o&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),x(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",h(4,De,i.hideSampleCodeTabs)))},dependencies:[y,E,g,f,Se],encapsulation:2})}return a})();var Ae=["stepper"],we=(()=>{class a{stepper;columnsItemsSelected=[{property:"item"}];confirmed=!1;itemsListSelected=[];items=[{label:"Condiments",value:"condiments",subItems:[{label:"Extra virgin Olive",value:"extraVirginOlive"},{label:"Mayonnaise",value:"Mayonnaise"},{label:"Tomato ketchup",value:"tomatoKetchup"},{label:"Soda",value:"soda"}]},{label:"Drinks",value:"drinks",subItems:[{label:"Orange juice",value:"orangeJuice"},{label:"Grape juice",value:"grapeJuice"},{label:"Beer",value:"beer"},{label:"Wine",value:"wine"},{label:"Soda",value:"soda"}]},{label:"Grains",value:122,subItems:[{label:"Black bean",value:"blackBean"},{label:"Chickpeas",value:"chickpeas"},{label:"Lentil",value:"lentil"},{label:"Pea",value:"pea"}]},{label:"Personal hygiene",value:"personalHygiene",subItems:[{label:"Body wash",value:"bodyWash"},{label:"Deodorant",value:"deodorant"},{label:"Shampoo",value:"deodorant"},{label:"Conditioner",value:"conditioner"},{label:"Sunscreen lotion",value:"sunscreenLotion"}]},{label:"Frozen foods",value:"frozenFoods",subItems:[{label:"Hamburguer",value:"hamburguer"},{label:"Lasagna",value:"lasagna"},{label:"Sandwiches",value:"sandwiches"}]}];addItem(r){r.subItems?r.subItems.forEach(o=>{this.itemsListSelected.some(i=>i.item===o.label)||this.itemsListSelected.push({item:o.label})}):this.itemsListSelected.some(o=>o.item===r.label)||this.itemsListSelected.push({item:r.label})}checkOut(){this.confirmed=!0,this.stepper.next()}isConfirmed(){return!!this.confirmed}removeItem(r){if(r.subItems){let o=r.subItems.map(i=>i.label);this.itemsListSelected=this.itemsListSelected.filter(i=>!o.includes(i.item))}else this.itemsListSelected=this.itemsListSelected.filter(o=>r.label!==o.item)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-tree-view-supermarket"]],viewQuery:function(o,i){if(o&1&&j(Ae,7),o&2){let m;q(m=W())&&(i.stepper=m.first)}},standalone:!1,decls:18,vars:6,consts:[["stepper",""],["p-title","Welcome to the PO Supermarket"],[1,"po-offset-md-3","po-offset-lg-2","po-offset-xl-2"],[1,"po-row"],["p-step-icons","",1,"po-md-9","po-lg-8","po-mb-1"],["p-label","Step 1"],[1,"po-font-subtitle"],["p-selectable","",3,"p-selected","p-unselected","p-items"],["p-label","Step 2",3,"p-can-active-next-step"],["p-primary-label","Confirm","p-title","Selected items",3,"p-primary-action","p-disabled"],["p-striped","",3,"p-columns","p-items","p-hide-table-search"],["p-label","Step 3"],[1,"po-row","po-font-display"],["p-icon","po-icon an an-check"]],template:function(o,i){if(o&1){let m=D();t(0,"po-page-default",1)(1,"div",2)(2,"div",3)(3,"po-stepper",4,0)(5,"po-step",5)(6,"p",6),n(7,"Please, select your items:"),e(),t(8,"po-tree-view",7),S("p-selected",function(p){return b(m),v(i.addItem(p))})("p-unselected",function(p){return b(m),v(i.removeItem(p))}),e()(),t(9,"po-step",8)(10,"po-widget",9),S("p-primary-action",function(){return b(m),v(i.checkOut())}),l(11,"po-table",10),e()(),t(12,"po-step",11)(13,"po-widget")(14,"div",12)(15,"p"),n(16,"Order dispatched"),e(),l(17,"po-icon",13),e()()()()()()()}o&2&&(s(8),d("p-items",i.items),s(),d("p-can-active-next-step",i.isConfirmed.bind(i)),s(),d("p-disabled",i.itemsListSelected.length<1),s(),d("p-columns",i.columnsItemsSelected)("p-items",i.itemsListSelected)("p-hide-table-search",!1))},dependencies:[Z,k,re,pe,ie,_,se],encapsulation:2})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-tree-view-supermarket-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tree View - Supermarket"),e(),t(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.html"),e(),t(13,"pre",7),n(14,`<po-page-default p-title="Welcome to the PO Supermarket">
  <div class="po-offset-md-3 po-offset-lg-2 po-offset-xl-2">
    <div class="po-row">
      <po-stepper #stepper p-step-icons class="po-md-9 po-lg-8 po-mb-1">
        <po-step p-label="Step 1">
          <p class="po-font-subtitle">Please, select your items:</p>

          <po-tree-view
            p-selectable
            [p-items]="items"
            (p-selected)="addItem($event)"
            (p-unselected)="removeItem($event)"
          >
          </po-tree-view>
        </po-step>

        <po-step p-label="Step 2" [p-can-active-next-step]="isConfirmed.bind(this)">
          <po-widget
            p-primary-label="Confirm"
            p-title="Selected items"
            [p-disabled]="itemsListSelected.length < 1"
            (p-primary-action)="checkOut()"
          >
            <po-table
              p-striped
              [p-columns]="columnsItemsSelected"
              [p-items]="itemsListSelected"
              [p-hide-table-search]="false"
            >
            </po-table>
          </po-widget>
        </po-step>

        <po-step p-label="Step 3">
          <po-widget>
            <div class="po-row po-font-display">
              <p>Order dispatched</p>
              <po-icon p-icon="po-icon an an-check"></po-icon>
            </div>
          </po-widget>
        </po-step>
      </po-stepper>
    </div>
  </div>
</po-page-default>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tree-view-supermarket/sample-po-tree-view-supermarket.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, ViewChild } from '@angular/core';

import { PoStepperComponent, PoTableColumn, PoTreeViewItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tree-view-supermarket',
  templateUrl: 'sample-po-tree-view-supermarket.component.html',
  standalone: false
})
export class SamplePoTreeViewSupermarketComponent {
  @ViewChild('stepper', { static: true }) stepper: PoStepperComponent;

  columnsItemsSelected: Array<PoTableColumn> = [{ property: 'item' }];
  confirmed: boolean = false;
  itemsListSelected: Array<any> = [];

  readonly items: Array<PoTreeViewItem> = [
    {
      label: 'Condiments',
      value: 'condiments',
      subItems: [
        { label: 'Extra virgin Olive', value: 'extraVirginOlive' },
        { label: 'Mayonnaise', value: 'Mayonnaise' },
        { label: 'Tomato ketchup', value: 'tomatoKetchup' },
        { label: 'Soda', value: 'soda' }
      ]
    },
    {
      label: 'Drinks',
      value: 'drinks',
      subItems: [
        { label: 'Orange juice', value: 'orangeJuice' },
        { label: 'Grape juice', value: 'grapeJuice' },
        { label: 'Beer', value: 'beer' },
        { label: 'Wine', value: 'wine' },
        { label: 'Soda', value: 'soda' }
      ]
    },
    {
      label: 'Grains',
      value: 122,
      subItems: [
        { label: 'Black bean', value: 'blackBean' },
        { label: 'Chickpeas', value: 'chickpeas' },
        { label: 'Lentil', value: 'lentil' },
        { label: 'Pea', value: 'pea' }
      ]
    },
    {
      label: 'Personal hygiene',
      value: 'personalHygiene',
      subItems: [
        { label: 'Body wash', value: 'bodyWash' },
        { label: 'Deodorant', value: 'deodorant' },
        { label: 'Shampoo', value: 'deodorant' },
        { label: 'Conditioner', value: 'conditioner' },
        { label: 'Sunscreen lotion', value: 'sunscreenLotion' }
      ]
    },
    {
      label: 'Frozen foods',
      value: 'frozenFoods',
      subItems: [
        { label: 'Hamburguer', value: 'hamburguer' },
        { label: 'Lasagna', value: 'lasagna' },
        { label: 'Sandwiches', value: 'sandwiches' }
      ]
    }
  ];

  addItem(seletectedItem) {
    if (seletectedItem.subItems) {
      seletectedItem.subItems.forEach(itemSelected => {
        if (!this.itemsListSelected.some(item => item.item === itemSelected.label)) {
          this.itemsListSelected.push({ item: itemSelected.label });
        }
      });
    } else {
      if (!this.itemsListSelected.some(item => item.item === seletectedItem.label)) {
        this.itemsListSelected.push({ item: seletectedItem.label });
      }
    }
  }

  checkOut() {
    this.confirmed = true;
    this.stepper.next();
  }

  isConfirmed() {
    return !!this.confirmed;
  }

  removeItem(unseletectedItem) {
    if (unseletectedItem.subItems) {
      const removedValues = unseletectedItem.subItems.map(item => item.label);
      this.itemsListSelected = this.itemsListSelected.filter(
        itemSelected => !removedValues.includes(itemSelected.item)
      );
    } else {
      this.itemsListSelected = this.itemsListSelected.filter(
        itemSelected => unseletectedItem.label !== itemSelected.item
      );
    }
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-tree-view-supermarket"),e(),l(23,"hr")),o&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),x(" ",i.sampleCodeButtonLabel,""),s(),d("ngClass",h(4,Oe,i.hideSampleCodeTabs)))},dependencies:[y,E,g,f,we],encapsulation:2})}return a})();var fe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-tree-view-doc"]],standalone:!1,decls:377,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoTreeViewItem>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","null"]],template:function(o,i){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoTreeViewModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente "),t(7,"code"),n(8,"po-tree-view"),e(),n(9,"."),e(),t(10,"blockquote")(11,"p"),n(12,"Para o correto funcionamento do componente "),t(13,"code"),n(14,"po-tree-view"),e(),n(15,", deve ser importado o m\xF3dulo "),t(16,"code"),n(17,"BrowserAnimationsModule"),e(),n(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),e()(),t(19,"p"),n(20,"M\xF3dulo da aplica\xE7\xE3o:"),e(),t(21,"pre")(22,"code"),n(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),e()(),t(24,"p"),n(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),e(),t(26,"pre")(27,"code"),n(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),e()()(),t(29,"h3",3),n(30,"Componente"),e(),t(31,"h4",4)(32,"code",5),n(33,"PoTreeViewComponent"),e()(),t(34,"div",2)(35,"p"),n(36,`O componente fornece um modelo de visualiza\xE7\xE3o em \xE1rvore, possibilitando a visualiza\xE7\xE3o das informa\xE7\xF5es de maneira
hier\xE1rquica, desta forma sendo poss\xEDvel utilizar at\xE9 4 n\xEDveis.`),e(),t(37,"p"),n(38,"Nele \xE9 poss\xEDvel navegar entre os itens atrav\xE9s da tecla "),t(39,"em"),n(40,"tab"),e(),n(41,`, permitindo expandir ou colapsar o item em foco
por meio das teclas `),t(42,"em"),n(43,"enter"),e(),n(44," e "),t(45,"em"),n(46,"space"),e(),n(47,"."),e(),t(48,"p"),n(49,"Al\xE9m da navega\xE7\xE3o, o componente possibilita tamb\xE9m a sele\xE7\xE3o dos itens do primeiro ao \xFAltimo n\xEDvel, tanto de forma parcial como completa."),e(),t(50,"p"),n(51,"O componente tamb\xE9m possui eventos disparados ao marcar/desmarcar e expandir/colapsar os itens. "),e()(),t(52,"div",6)(53,"h4",7),n(54,"Seletor"),e(),t(55,"pre",8),n(56,`<po-tree-view
    (p-collapsed)="EventEmitter"
    p-components-size="string"
    (p-expanded)="EventEmitter"
    p-items="Array<PoTreeViewItem>"
    p-max-level="number"
    p-selectable="boolean"
    (p-selected)="EventEmitter"
    p-single-select="boolean"
    (p-unselected)="EventEmitter" >
</po-tree-view>
`),e()(),t(57,"h4",9),n(58,"Propriedades"),e(),t(59,"table",10)(60,"tr",11)(61,"th",12),n(62,"Nome"),e(),t(63,"th",12),n(64,"Tipo"),e(),t(65,"th",12),n(66,"Padr\xE3o"),e(),t(67,"th",12),n(68,"Descri\xE7\xE3o"),e()(),t(69,"tr",13)(70,"td",14)(71,"div",15)(72,"span",16),n(73," (p-collapsed)"),l(74,"br"),e()()(),t(75,"td",17)(76,"code",18),n(77,"EventEmitter"),e()(),t(78,"td",19),n(79,"-"),e(),t(80,"td",20)(81,"em")(82,"strong"),n(83,"(opcional)"),e()(),t(84,"p"),n(85,"A\xE7\xE3o que ser\xE1 disparada ao colapsar um item."),e(),t(86,"blockquote")(87,"p"),n(88,"Como par\xE2metro o componente envia o item colapsado."),e()()()(),t(89,"tr",13)(90,"td",14)(91,"div",21)(92,"span",22),n(93," p-components-size"),l(94,"br"),e()()(),t(95,"td",17)(96,"code",23),n(97,"string"),e()(),t(98,"td",19)(99,"p")(100,"code"),n(101,"medium"),e()()(),t(102,"td",20)(103,"em")(104,"strong"),n(105,"(opcional)"),e()(),t(106,"p"),n(107,"Define o tamanho dos componentes de formul\xE1rio:"),e(),t(108,"ul")(109,"li")(110,"code"),n(111,"small"),e(),n(112,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(113,"li")(114,"code"),n(115,"medium"),e(),n(116,": aplica a medida medium de cada componente."),e()(),t(117,"blockquote")(118,"p"),n(119,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(120,"code"),n(121,"medium"),e(),n(122,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(123,"a",24),n(124,"po-theme"),e(),n(125,"."),e()()()(),t(126,"tr",13)(127,"td",14)(128,"div",15)(129,"span",16),n(130," (p-expanded)"),l(131,"br"),e()()(),t(132,"td",17)(133,"code",18),n(134,"EventEmitter"),e()(),t(135,"td",19),n(136,"-"),e(),t(137,"td",20)(138,"em")(139,"strong"),n(140,"(opcional)"),e()(),t(141,"p"),n(142,"A\xE7\xE3o que ser\xE1 disparada ao expandir um item."),e(),t(143,"blockquote")(144,"p"),n(145,"Como par\xE2metro o componente envia o item expandido."),e()()()(),t(146,"tr",13)(147,"td",14)(148,"div",21)(149,"span",22),n(150," p-items"),l(151,"br"),e()()(),t(152,"td",17)(153,"code",25),n(154,"Array<PoTreeViewItem>"),e()(),t(155,"td",19),n(156,"-"),e(),t(157,"td",20)(158,"p"),n(159,"Lista de itens do tipo "),t(160,"code"),n(161,"PoTreeViewItem"),e(),n(162," que ser\xE1 renderizada pelo componente."),e()()(),t(163,"tr",13)(164,"td",14)(165,"div",21)(166,"span",22),n(167," p-max-level"),l(168,"br"),e()()(),t(169,"td",17)(170,"code",26),n(171,"number"),e()(),t(172,"td",19)(173,"p"),n(174,"4"),e()(),t(175,"td",20)(176,"em")(177,"strong"),n(178,"(opcional)"),e()(),t(179,"p"),n(180,"Define o m\xE1ximo de n\xEDveis para o tree-view."),e(),t(181,"blockquote")(182,"p"),n(183,"O valor padr\xE3o \xE9 4"),e()()()(),t(184,"tr",13)(185,"td",14)(186,"div",21)(187,"span",22),n(188," p-selectable"),l(189,"br"),e()()(),t(190,"td",17)(191,"code",27),n(192,"boolean"),e()(),t(193,"td",19)(194,"p"),n(195,"false"),e()(),t(196,"td",20)(197,"em")(198,"strong"),n(199,"(opcional)"),e()(),t(200,"p"),n(201,"Habilita uma caixa de sele\xE7\xE3o para selecionar e/ou desmarcar um item da lista."),e()()(),t(202,"tr",13)(203,"td",14)(204,"div",15)(205,"span",16),n(206," (p-selected)"),l(207,"br"),e()()(),t(208,"td",17)(209,"code",18),n(210,"EventEmitter"),e()(),t(211,"td",19),n(212,"-"),e(),t(213,"td",20)(214,"em")(215,"strong"),n(216,"(opcional)"),e()(),t(217,"p"),n(218,"A\xE7\xE3o que ser\xE1 disparada ao selecionar um item."),e(),t(219,"blockquote")(220,"p"),n(221,"Como par\xE2metro o componente envia o item selecionado."),e()()()(),t(222,"tr",13)(223,"td",14)(224,"div",21)(225,"span",22),n(226," p-single-select"),l(227,"br"),e()()(),t(228,"td",17)(229,"code",27),n(230,"boolean"),e()(),t(231,"td",19)(232,"p"),n(233,"false"),e()(),t(234,"td",20)(235,"em")(236,"strong"),n(237,"(opcional)"),e()(),t(238,"p"),n(239,"Habilita a sele\xE7\xE3o para item \xFAnico atr\xE1ves de po-radio."),e()()(),t(240,"tr",13)(241,"td",14)(242,"div",15)(243,"span",16),n(244," (p-unselected)"),l(245,"br"),e()()(),t(246,"td",17)(247,"code",18),n(248,"EventEmitter"),e()(),t(249,"td",19),n(250,"-"),e(),t(251,"td",20)(252,"em")(253,"strong"),n(254,"(opcional)"),e()(),t(255,"p"),n(256,"A\xE7\xE3o que ser\xE1 disparada ao desfazer a sele\xE7\xE3o de um item."),e(),t(257,"blockquote")(258,"p"),n(259,"Como par\xE2metro o componente envia o item que foi desmarcado."),e()()()()(),t(260,"h3"),n(261,"Interfaces"),e(),t(262,"h4",28)(263,"code",5),n(264,"PoTreeViewItem"),e()(),t(265,"div",2)(266,"p"),n(267,"Interface para defini\xE7\xE3o dos itens do componente "),t(268,"code"),n(269,"po-tree-view"),e(),n(270,"."),e()(),t(271,"h4",9),n(272,"Propriedades"),e(),t(273,"table",10)(274,"tr",11)(275,"th",12),n(276,"Nome"),e(),t(277,"th",12),n(278,"Tipo"),e(),t(279,"th",12),n(280,"Descri\xE7\xE3o"),e()(),t(281,"tr",13)(282,"td",14)(283,"div",21)(284,"span",22),n(285," expanded"),l(286,"br"),e()()(),t(287,"td",17)(288,"code",27),n(289,"boolean"),e()(),t(290,"td",20)(291,"em")(292,"strong"),n(293,"(opcional)"),e()(),t(294,"p"),n(295,"Expande o item."),e()()(),t(296,"tr",13)(297,"td",14)(298,"div",21)(299,"span",22),n(300," isSelectable"),l(301,"br"),e()()(),t(302,"td",17)(303,"code",27),n(304,"boolean "),e(),t(305,"code",29),n(306," null"),e()(),t(307,"td",20)(308,"em")(309,"strong"),n(310,"(opcional)"),e()(),t(311,"p"),n(312,"Permite ativar/desativar a sele\xE7\xE3o do item"),e()()(),t(313,"tr",13)(314,"td",14)(315,"div",21)(316,"span",22),n(317," label"),l(318,"br"),e()()(),t(319,"td",17)(320,"code",23),n(321,"string"),e()(),t(322,"td",20)(323,"p"),n(324,`Desabilita a selec\xE3o do item.
Texto de exibi\xE7\xE3o do item.`),e()()(),t(325,"tr",13)(326,"td",14)(327,"div",21)(328,"span",22),n(329," selected"),l(330,"br"),e()()(),t(331,"td",17)(332,"code",27),n(333,"boolean "),e(),t(334,"code",29),n(335," null"),e()(),t(336,"td",20)(337,"em")(338,"strong"),n(339,"(opcional)"),e()(),t(340,"p"),n(341,"Marca o item como selecionado."),e(),t(342,"blockquote")(343,"p"),n(344,"Caso o item que conter "),t(345,"code"),n(346,"subItems"),e(),n(347," for selecionado, os seus itens filhos ser\xE3o tamb\xE9m selecionados."),e()()()(),t(348,"tr",13)(349,"td",14)(350,"div",21)(351,"span",22),n(352," subItems"),l(353,"br"),e()()(),t(354,"td",17)(355,"code",25),n(356,"Array<PoTreeViewItem>"),e()(),t(357,"td",20)(358,"em")(359,"strong"),n(360,"(opcional)"),e()(),t(361,"p"),n(362,"Lista de itens do pr\xF3ximo n\xEDvel, e assim consecutivamente at\xE9 que se atinja o quarto n\xEDvel."),e()()(),t(363,"tr",13)(364,"td",14)(365,"div",21)(366,"span",22),n(367," value"),l(368,"br"),e()()(),t(369,"td",17)(370,"code",23),n(371,"string "),e(),t(372,"code",26),n(373," number"),e()(),t(374,"td",20)(375,"p"),n(376,"Valor do item que poder\xE1 ser utilizado como refer\xEAncia para sua identifica\xE7\xE3o."),e()()()()())},dependencies:[E],encapsulation:2})}return a})();var Ee=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||a)(A(K),A(X))};static \u0275cmp=u({type:a,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Tree View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-tree-view-doc"),e(),t(4,"po-tab",3),S("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-tree-view-basic-view")(6,"sample-po-tree-view-labs-view")(7,"sample-po-tree-view-folder-structure-view")(8,"sample-po-tree-view-supermarket-view"),e()()()),o&2&&(d("p-actions",i.actions),s(2),d("p-active",i.activeTab==="doc"),s(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[k,g,f,ue,ve,he,ge,fe],encapsulation:2})}return a})();var je=[{path:"",component:Ee}],Ce=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=M({type:a});static \u0275inj=L({imports:[O.forChild(je),O]})}return a})();var St=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=M({type:a});static \u0275inj=L({imports:[me,Ce]})}return a})();export{St as DocPoTreeViewModule};
