import{o as w,p as ge}from"./chunk-MMZVQUBQ.js";import{Ab as y,Bb as be,F as ae,Ga as se,La as de,Pa as pe,Ra as ue,Wa as ce,Y as le,a as oe,ja as re,kb as he,lb as C,nb as L,ta as me,zb as P}from"./chunk-522XRIZO.js";import{Ac as ee,Ba as _,Bc as te,Ca as H,Fa as t,Ga as n,Ha as o,L as O,La as j,M as D,Ma as f,O as W,Oc as ne,Qc as ie,Sc as q,T as u,U as c,Ua as N,Ub as X,Va as U,Wa as G,Ya as e,_a as v,ab as g,bb as E,cb as S,db as Q,eb as J,fb as M,ha as s,ia as I,o as z,oa as b,pa as V,rb as K,ua as R,vb as k,xc as Y,ya as p,yc as Z,zc as $}from"./chunk-WFKG4FNY.js";var Ie=()=>({label:"PO UI - Angular Framework",link:"/"}),_e=a=>[a],Ee=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-menu-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-menus"]],template:function(r,i){r&1&&o(0,"po-menu",0),r&2&&p("p-menus",M(2,_e,J(1,Ie)))},dependencies:[C],encapsulation:2})}return a})();var Le=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-menu-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Menu Basic"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-menu-basic/sample-po-menu-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-menu [p-menus]="[{ label: 'PO UI - Angular Framework', link: '/' }]"></po-menu>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-menu-basic/sample-po-menu-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-menu-basic',
  templateUrl: './sample-po-menu-basic.component.html',
  standalone: false
})
export class SamplePoMenuBasicComponent {}
`),n()()()()(),t(21,"div",10),o(22,"sample-po-menu-basic"),n(),o(23,"hr")),r&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),v(" ",i.sampleCodeButtonLabel,""),s(),p("ngClass",M(4,Le,i.hideSampleCodeTabs)))},dependencies:[k,w,P,y,Ee],encapsulation:2})}return a})();function De(a,F){if(a&1&&(t(0,"div"),o(1,"span"),t(2,"span",26),e(3),n()()),a&2){let m=F.$implicit;s(),H("sample-menu-circle sample-menu-vertical-middle po-",m.value,""),s(2),v(" ",m.label," ")}}var xe=(()=>{class a{changeDetector;menu;badgeColor;badgeValue;buttons=[{label:"Collapse",action:this.collapse.bind(this)},{label:"Expand",action:this.expand.bind(this)},{label:"Toggle",action:this.toggle.bind(this)}];componentsSize;filter;icon;label;link;logo;logoLink;maxBadgeValue=999999999999999;menuItems;menuItemSelected;menuParams;params;parent;parentList;service;shortLabel;shortLogo;searchTreeItems;badgeColorList=[{label:"color-01",value:"color-01"},{label:"color-02",value:"color-02"},{label:"color-03",value:"color-03"},{label:"color-04",value:"color-04"},{label:"color-05",value:"color-05"},{label:"color-06",value:"color-06"},{label:"color-07",value:"color-07"},{label:"color-08",value:"color-08"},{label:"color-09",value:"color-09"},{label:"color-10",value:"color-10"},{label:"color-11",value:"color-11"},{label:"color-12",value:"color-12"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-camera",value:"an an-camera"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"an an-chat",value:"an an-chat"},{label:"an an-package",value:"an an-package"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];constructor(m){this.changeDetector=m}ngOnInit(){this.restore()}addMenuItem(){if(this.label){if(!this.parent)this.menuItems.push({action:this.changeMenuSelected.bind(this),icon:this.icon,label:this.label,link:this.link,shortLabel:this.shortLabel,badge:{value:this.badgeValue,color:this.badgeColor}});else{let m=this.getMenuParent(this.menuItems,this.parent);m.subItems||(m.subItems=[]),m.subItems.push({action:this.changeMenuSelected.bind(this),label:this.label,link:this.link,badge:{value:this.badgeValue,color:this.badgeColor}})}this.formReset(),this.updateMenuItems()}}onChangeParams(m){try{this.params=JSON.parse(m)}catch{this.params=void 0}}restore(){this.formReset(),this.filter=!1,this.menuItemSelected=void 0,this.badgeColor=void 0,this.badgeValue=void 0,this.logo=void 0,this.logoLink=void 0,this.params=void 0,this.parentList=[],this.menuItems=[],this.menuParams=void 0,this.service="",this.shortLogo=void 0,this.searchTreeItems=!1,this.updateMenuItems()}changeMenuSelected(m){this.menuItemSelected=m.label}collapse(){this.menu.collapse()}expand(){this.menu.expand()}formReset(){this.badgeColor=void 0,this.badgeValue=void 0,this.componentsSize="medium",this.icon=void 0,this.label="PO Menu",this.link=void 0,this.parent=void 0,this.shortLabel="Menu"}getMenuParent(m,r){let i;if(m){for(let d of m)if(d.id===r){i=d;break}else i||(i=this.getMenuParent(d.subItems,r));return i}}toggle(){this.menu.toggle()}updateMenuItems(){this.changeDetector.detectChanges(),this.parentList=[],this.menuItems.forEach(m=>{this.parentList.push({label:m.label,value:m.id}),m.subItems&&m.subItems.forEach(r=>{this.parentList.push({label:`- ${r.label}`,value:r.id}),r.subItems&&r.subItems.forEach(i=>{this.parentList.push({label:`-- ${i.label}`,value:i.id})})})})}onFilterChange(m){this.filter=m,!this.filter&&this.searchTreeItems&&(this.searchTreeItems=!1)}static \u0275fac=function(r){return new(r||a)(I(K))};static \u0275cmp=b({type:a,selectors:[["sample-po-menu-labs"]],viewQuery:function(r,i){if(r&1&&N(C,7),r&2){let d;U(d=G())&&(i.menu=d.first)}},standalone:!1,decls:32,vars:33,consts:[["f","ngForm"],[1,"po-wrapper"],[3,"p-components-size","p-filter","p-logo","p-logo-link","p-menus","p-params","p-service","p-short-logo","p-search-tree-items"],["p-title","PO Menu"],[1,"po-row"],["p-label","Methods","p-value","Only if all menu items have icon and short label.",1,"po-lg-12"],[1,"po-lg-12",3,"p-buttons"],["p-label","Menu Item Selected",3,"p-value"],["name","filterMenu","p-label","Filter","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","searchTreeItems","p-label","Filter Search Tree Items","p-label-off","Disabled","p-label-on","Enabled",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["name","parent","p-label","Parent","p-placeholder","Add new menu at root level",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","label","p-label","Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","shortLabel","p-label","Short Label","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","link","p-label","External link","p-placeholder","http://",1,"po-md-4",3,"ngModelChange","ngModel"],["name","badgeColor","p-label","Badge color","p-placeholder","Select a color of badge",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-select-option-template",""],["name","badgeValue","p-label","Badge value","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max"],["name","icon","p-label","Icon",1,"po-md-4",3,"ngModelChange","ngModel","p-disabled","p-options"],["p-label","Add",1,"po-xl-2","po-md-4",3,"p-click"],["name","service","p-clean","","p-label","Service","p-help","https://po-sample-api.onrender.com/v1/menus",1,"po-md-6",3,"ngModelChange","ngModel"],["name","menuParams","p-clean","","p-label","Params","p-help",'Enter a value to be sent as a parameter. Ex: { "departament": "technology" }',1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","logo","p-clean","","p-help","https://po-ui.io/assets/graphics/po.png","p-label","Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","shortLogo","p-clean","","p-help","https://po-ui.io/assets/graphics/logo-dgeni.png","p-label","Short Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo link","p-clean","","p-help","ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'","p-label","Logo link",1,"po-md-12",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-xl-3","po-md-5",3,"p-click"],[1,"sample-menu-vertical-middle"]],template:function(r,i){if(r&1){let d=j();t(0,"div",1),o(1,"po-menu",2),t(2,"po-page-default",3)(3,"div",4),o(4,"po-info",5)(5,"po-button-group",6),n(),o(6,"po-divider"),t(7,"div",4),o(8,"po-info",7),t(9,"form",null,0)(11,"po-switch",8),S("ngModelChange",function(l){return u(d),E(i.filter,l)||(i.filter=l),c(l)}),f("ngModelChange",function(l){return u(d),c(i.onFilterChange(l))}),n(),t(12,"po-switch",9),S("ngModelChange",function(l){return u(d),E(i.searchTreeItems,l)||(i.searchTreeItems=l),c(l)}),n(),t(13,"po-select",10),S("ngModelChange",function(l){return u(d),E(i.parent,l)||(i.parent=l),c(l)}),n(),t(14,"po-input",11),S("ngModelChange",function(l){return u(d),E(i.label,l)||(i.label=l),c(l)}),n(),t(15,"po-input",12),S("ngModelChange",function(l){return u(d),E(i.shortLabel,l)||(i.shortLabel=l),c(l)}),n(),t(16,"po-url",13),S("ngModelChange",function(l){return u(d),E(i.link,l)||(i.link=l),c(l)}),n(),t(17,"po-select",14),S("ngModelChange",function(l){return u(d),E(i.badgeColor,l)||(i.badgeColor=l),c(l)}),R(18,De,4,4,"ng-template",15),n(),t(19,"po-number",16),S("ngModelChange",function(l){return u(d),E(i.badgeValue,l)||(i.badgeValue=l),c(l)}),n(),t(20,"po-select",17),S("ngModelChange",function(l){return u(d),E(i.icon,l)||(i.icon=l),c(l)}),n(),t(21,"div",4)(22,"po-button",18),f("p-click",function(){return u(d),c(i.addMenuItem())}),n()(),o(23,"hr"),t(24,"po-input",19),S("ngModelChange",function(l){return u(d),E(i.service,l)||(i.service=l),c(l)}),n(),t(25,"po-input",20),S("ngModelChange",function(l){return u(d),E(i.menuParams,l)||(i.menuParams=l),c(l)}),f("p-change-model",function(l){return u(d),c(i.onChangeParams(l))}),n(),t(26,"po-input",21),S("ngModelChange",function(l){return u(d),E(i.logo,l)||(i.logo=l),c(l)}),n(),t(27,"po-input",22),S("ngModelChange",function(l){return u(d),E(i.shortLogo,l)||(i.shortLogo=l),c(l)}),n(),t(28,"po-input",23),S("ngModelChange",function(l){return u(d),E(i.logoLink,l)||(i.logoLink=l),c(l)}),n(),t(29,"po-radio-group",24),S("ngModelChange",function(l){return u(d),E(i.componentsSize,l)||(i.componentsSize=l),c(l)}),n(),t(30,"div",4)(31,"po-button",25),f("p-click",function(){return u(d),c(i.restore())}),n()()()()()()}r&2&&(s(),p("p-components-size",i.componentsSize)("p-filter",i.filter)("p-logo",i.logo)("p-logo-link",i.logoLink)("p-menus",i.menuItems)("p-params",i.params)("p-service",i.service)("p-short-logo",i.shortLogo)("p-search-tree-items",i.searchTreeItems),s(4),p("p-buttons",i.buttons),s(3),p("p-value",i.menuItemSelected),s(3),g("ngModel",i.filter),s(),g("ngModel",i.searchTreeItems),p("p-disabled",!i.filter),s(),g("ngModel",i.parent),p("p-options",i.parentList),s(),g("ngModel",i.label),s(),g("ngModel",i.shortLabel),s(),g("ngModel",i.link),s(),g("ngModel",i.badgeColor),p("p-options",i.badgeColorList),s(2),g("ngModel",i.badgeValue),p("p-max",i.maxBadgeValue),s(),g("ngModel",i.icon),p("p-disabled",i.parent)("p-options",i.iconsOptions),s(4),g("ngModel",i.service),s(),g("ngModel",i.menuParams),s(),g("ngModel",i.logo),s(),g("ngModel",i.shortLogo),s(),g("ngModel",i.logoLink),s(),g("ngModel",i.componentsSize),p("p-options",i.componentsSizeOptions))},dependencies:[te,Y,Z,ee,$,ae,le,oe,re,se,de,ue,pe,me,ce,C,L],styles:[".sample-menu-circle[_ngcontent-%COMP%]{border-radius:14px;display:inline-block;height:20px;width:20px}.sample-menu-vertical-middle[_ngcontent-%COMP%]{vertical-align:middle}"]})}return a})();var Re=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-menu-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Menu Labs"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-menu-labs/sample-po-menu-labs.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-wrapper">
  <po-menu
    [p-components-size]="componentsSize"
    [p-filter]="filter"
    [p-logo]="logo"
    [p-logo-link]="logoLink"
    [p-menus]="menuItems"
    [p-params]="params"
    [p-service]="service"
    [p-short-logo]="shortLogo"
    [p-search-tree-items]="searchTreeItems"
  >
  </po-menu>

  <po-page-default p-title="PO Menu">
    <div class="po-row">
      <po-info class="po-lg-12" p-label="Methods" p-value="Only if all menu items have icon and short label.">
      </po-info>

      <po-button-group class="po-lg-12" [p-buttons]="buttons"> </po-button-group>
    </div>

    <po-divider></po-divider>

    <div class="po-row">
      <po-info p-label="Menu Item Selected" [p-value]="menuItemSelected"> </po-info>

      <form #f="ngForm">
        <po-switch
          class="po-lg-6"
          name="filterMenu"
          [(ngModel)]="filter"
          p-label="Filter"
          p-label-off="Disabled"
          p-label-on="Enabled"
          (ngModelChange)="onFilterChange($event)"
        >
        </po-switch>

        <po-switch
          class="po-lg-6"
          name="searchTreeItems"
          [(ngModel)]="searchTreeItems"
          p-label="Filter Search Tree Items"
          p-label-off="Disabled"
          p-label-on="Enabled"
          [p-disabled]="!filter"
        >
        </po-switch>

        <po-select
          class="po-md-4"
          name="parent"
          [(ngModel)]="parent"
          p-label="Parent"
          p-placeholder="Add new menu at root level"
          [p-options]="parentList"
        >
        </po-select>

        <po-input class="po-md-4" name="label" [(ngModel)]="label" p-label="Label" p-required> </po-input>

        <po-input class="po-md-4" name="shortLabel" [(ngModel)]="shortLabel" p-label="Short Label" p-required>
        </po-input>

        <po-url class="po-md-4" name="link" [(ngModel)]="link" p-label="External link" p-placeholder="http://">
        </po-url>

        <po-select
          class="po-md-4"
          name="badgeColor"
          [(ngModel)]="badgeColor"
          p-label="Badge color"
          p-placeholder="Select a color of badge"
          [p-options]="badgeColorList"
        >
          <ng-template p-select-option-template let-option>
            <div>
              <span class="sample-menu-circle sample-menu-vertical-middle po-{ { option.value }}"></span>
              <span class="sample-menu-vertical-middle"> { { option.label }} </span>
            </div>
          </ng-template>
        </po-select>

        <po-number
          class="po-md-4"
          name="badgeValue"
          [(ngModel)]="badgeValue"
          p-label="Badge value"
          p-required
          [p-max]="maxBadgeValue"
        >
        </po-number>

        <po-select
          class="po-md-4"
          name="icon"
          [(ngModel)]="icon"
          p-label="Icon"
          [p-disabled]="parent"
          [p-options]="iconsOptions"
        >
        </po-select>

        <div class="po-row">
          <po-button class="po-xl-2 po-md-4" p-label="Add" (p-click)="addMenuItem()"> </po-button>
        </div>

        <hr />

        <po-input
          class="po-md-6"
          name="service"
          [(ngModel)]="service"
          p-clean
          p-label="Service"
          p-help="https://po-sample-api.onrender.com/v1/menus"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="menuParams"
          [(ngModel)]="menuParams"
          p-clean
          p-label="Params"
          p-help='Enter a value to be sent as a parameter. Ex: { "departament": "technology" }'
          (p-change-model)="onChangeParams($event)"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="logo"
          [(ngModel)]="logo"
          p-clean
          p-help="https://po-ui.io/assets/graphics/po.png"
          p-label="Logo"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="shortLogo"
          [(ngModel)]="shortLogo"
          p-clean
          p-help="https://po-ui.io/assets/graphics/logo-dgeni.png"
          p-label="Short Logo"
        >
        </po-input>

        <po-input
          class="po-md-12"
          name="logo link"
          [(ngModel)]="logoLink"
          p-clean
          p-help="ex.: '/documentation/po-menu','https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md'"
          p-label="Logo link"
        >
        </po-input>

        <po-radio-group
          class="po-md-12"
          name="size"
          [(ngModel)]="componentsSize"
          p-columns="4"
          p-label="Components size"
          p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
          [p-options]="componentsSizeOptions"
        >
        </po-radio-group>

        <div class="po-row">
          <po-button class="po-xl-3 po-md-5" p-label="Sample Restore" (p-click)="restore()"> </po-button>
        </div>
      </form>
    </div>
  </po-page-default>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-menu-labs/sample-po-menu-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import {
  PoButtonGroupItem,
  PoMenuComponent,
  PoMenuItem,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-menu-labs',
  templateUrl: './sample-po-menu-labs.component.html',
  styles: [
    \`
      .sample-menu-circle {
        border-radius: 14px;
        display: inline-block;
        height: 20px;
        width: 20px;
      }

      .sample-menu-vertical-middle {
        vertical-align: middle;
      }
    \`
  ],
  standalone: false
})
export class SamplePoMenuLabsComponent implements OnInit {
  @ViewChild(PoMenuComponent, { static: true }) menu: PoMenuComponent;

  badgeColor: string;
  badgeValue: number;
  buttons: Array<PoButtonGroupItem> = [
    { label: 'Collapse', action: this.collapse.bind(this) },
    { label: 'Expand', action: this.expand.bind(this) },
    { label: 'Toggle', action: this.toggle.bind(this) }
  ];
  componentsSize: string;
  filter: boolean;
  icon: string;
  label: string;
  link: string;
  logo: string;
  logoLink: string;
  maxBadgeValue = 999999999999999;
  menuItems: Array<PoMenuItem>;
  menuItemSelected: string;
  menuParams: string;
  params: any;
  parent: string;
  parentList: Array<PoSelectOption>;
  service: string;
  shortLabel: string;
  shortLogo: string;
  searchTreeItems: boolean;

  public readonly badgeColorList: Array<PoSelectOption> = [
    { label: 'color-01', value: 'color-01' },
    { label: 'color-02', value: 'color-02' },
    { label: 'color-03', value: 'color-03' },
    { label: 'color-04', value: 'color-04' },
    { label: 'color-05', value: 'color-05' },
    { label: 'color-06', value: 'color-06' },
    { label: 'color-07', value: 'color-07' },
    { label: 'color-08', value: 'color-08' },
    { label: 'color-09', value: 'color-09' },
    { label: 'color-10', value: 'color-10' },
    { label: 'color-11', value: 'color-11' },
    { label: 'color-12', value: 'color-12' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly iconsOptions: Array<PoSelectOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-camera', value: 'an an-camera' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'an an-chat', value: 'an an-chat' },
    { label: 'an an-package', value: 'an an-package' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.restore();
  }

  addMenuItem() {
    if (!this.label) {
      return;
    }

    if (!this.parent) {
      this.menuItems.push({
        action: this.changeMenuSelected.bind(this),
        icon: this.icon,
        label: this.label,
        link: this.link,
        shortLabel: this.shortLabel,
        badge: { value: this.badgeValue, color: this.badgeColor }
      });
    } else {
      const menuParent = this.getMenuParent(this.menuItems, this.parent);

      if (!menuParent.subItems) {
        menuParent.subItems = [];
      }

      menuParent.subItems.push({
        action: this.changeMenuSelected.bind(this),
        label: this.label,
        link: this.link,
        badge: { value: this.badgeValue, color: this.badgeColor }
      });
    }

    this.formReset();
    this.updateMenuItems();
  }

  onChangeParams(params: any) {
    try {
      this.params = JSON.parse(params);
    } catch (e) {
      this.params = undefined;
    }
  }

  restore() {
    this.formReset();

    this.filter = false;
    this.menuItemSelected = undefined;
    this.badgeColor = undefined;
    this.badgeValue = undefined;
    this.logo = undefined;
    this.logoLink = undefined;
    this.params = undefined;
    this.parentList = [];
    this.menuItems = [];
    this.menuParams = undefined;
    this.service = '';
    this.shortLogo = undefined;
    this.searchTreeItems = false;

    this.updateMenuItems();
  }

  private changeMenuSelected(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }

  private collapse() {
    this.menu.collapse();
  }

  private expand() {
    this.menu.expand();
  }

  private formReset() {
    this.badgeColor = undefined;
    this.badgeValue = undefined;
    this.componentsSize = 'medium';
    this.icon = undefined;
    this.label = 'PO Menu';
    this.link = undefined;
    this.parent = undefined;
    this.shortLabel = 'Menu';
  }

  private getMenuParent(menus: Array<PoMenuItem>, id: string): PoMenuItem {
    let menuParent;

    if (!menus) {
      return;
    }

    for (const subMenu of menus) {
      if (subMenu['id'] === id) {
        menuParent = subMenu;
        break;
      } else if (!menuParent) {
        menuParent = this.getMenuParent(subMenu.subItems, id);
      }
    }

    return menuParent;
  }

  private toggle() {
    this.menu.toggle();
  }

  private updateMenuItems() {
    this.changeDetector.detectChanges();

    this.parentList = [];

    this.menuItems.forEach(item => {
      this.parentList.push(<PoSelectOption>{ label: item.label, value: item['id'] });

      if (item.subItems) {
        item.subItems.forEach(secondItem => {
          this.parentList.push(<PoSelectOption>{ label: \`- \${secondItem.label}\`, value: secondItem['id'] });

          if (secondItem.subItems) {
            secondItem.subItems.forEach(thirdItem => {
              this.parentList.push(<PoSelectOption>{ label: \`-- \${thirdItem.label}\`, value: thirdItem['id'] });
            });
          }
        });
      }
    });
  }

  onFilterChange(newValue: boolean) {
    this.filter = newValue;
    if (!this.filter && this.searchTreeItems) {
      this.searchTreeItems = false;
    }
  }
}
`),n()()()()(),t(21,"div",10),o(22,"sample-po-menu-labs"),n(),o(23,"hr")),r&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),v(" ",i.sampleCodeButtonLabel,""),s(),p("ngClass",M(4,Re,i.hideSampleCodeTabs)))},dependencies:[k,w,P,y,xe],encapsulation:2})}return a})();var A=(()=>{class a{http;url="https://po-sample-api.onrender.com/v1/menus";constructor(m){this.http=m}getFilteredData(m){let r={search:m};return this.http.get(this.url,{params:r}).pipe(z(i=>i.items))}static \u0275fac=function(r){return new(r||a)(W(X))};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Be(a,F){a&1&&(t(0,"div",5)(1,"p"),e(2,"Welcome,"),n(),t(3,"p")(4,"b"),e(5," John Doe "),n()()())}var Me=(()=>{class a{samplePoMenuHumanResourcesService;menuItemSelected;menus=[{label:"Register user",action:this.printMenuAction.bind(this),icon:"an an-user",shortLabel:"Register"},{label:"Timekeeping",action:this.printMenuAction.bind(this),icon:"an an-clock",shortLabel:"Timekeeping",badge:{value:1}},{label:"Useful links",icon:"an an-share",shortLabel:"Links",subItems:[{label:"Ministry of Labour",action:this.printMenuAction.bind(this),link:"http://trabalho.gov.br/"},{label:"SindPD Syndicate",action:this.printMenuAction.bind(this),link:"http://www.sindpd.com.br/"}]},{label:"Benefits",icon:"an an-star",shortLabel:"Benefits",subItems:[{label:"Meal tickets",subItems:[{label:"Acceptance network ",action:this.printMenuAction.bind(this)},{label:"Extracts",action:this.printMenuAction.bind(this),subItems:[{label:"Monthly",action:this.printMenuAction.bind(this),badge:{value:3,color:"color-03"}},{label:"Custom",action:this.printMenuAction.bind(this)}]}]},{label:"Transportation tickets",action:this.printMenuAction.bind(this),badge:{value:12}}]}];constructor(m){this.samplePoMenuHumanResourcesService=m}printMenuAction(m){this.menuItemSelected=m.label}static \u0275fac=function(r){return new(r||a)(I(A))};static \u0275cmp=b({type:a,selectors:[["sample-po-menu-human-resources"]],standalone:!1,features:[Q([A])],decls:5,vars:5,consts:[[1,"po-wrapper"],["p-collapsed","","p-filter","",3,"p-menus","p-service","p-automatic-toggle"],["class","po-p-2 po-font-title sample-menu-header-text-color",4,"p-menu-header-template"],["p-title","PO - Human Resources",3,"p-show-notification"],[3,"p-title"],[1,"po-p-2","po-font-title","sample-menu-header-text-color"]],template:function(r,i){r&1&&(t(0,"div",0)(1,"po-menu",1),R(2,Be,6,0,"div",2),n(),o(3,"po-toolbar",3)(4,"po-page-default",4),n()),r&2&&(s(),p("p-menus",i.menus)("p-service",i.samplePoMenuHumanResourcesService)("p-automatic-toggle",!0),s(2),p("p-show-notification",!1),s(),p("p-title",i.menuItemSelected))},dependencies:[C,he,L,be],styles:[".sample-menu-header-text-color[_ngcontent-%COMP%]{color:#9da7a9}"]})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-menu-human-resources-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Menu - Human Resources"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-wrapper">
  <po-menu
    p-collapsed
    p-filter
    [p-menus]="menus"
    [p-service]="samplePoMenuHumanResourcesService"
    [p-automatic-toggle]="true"
  >
    <div *p-menu-header-template class="po-p-2 po-font-title sample-menu-header-text-color">
      <p>Welcome,</p>
      <p>
        <b> John Doe </b>
      </p>
    </div>
  </po-menu>

  <po-toolbar p-title="PO - Human Resources" [p-show-notification]="false"></po-toolbar>

  <po-page-default [p-title]="menuItemSelected"></po-page-default>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-menu-human-resources/sample-po-menu-human-resources.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

import { SamplePoMenuHumanResourcesService } from './sample-po-menu-human-resources.service';

@Component({
  selector: 'sample-po-menu-human-resources',
  templateUrl: './sample-po-menu-human-resources.component.html',
  providers: [SamplePoMenuHumanResourcesService],
  styles: [
    \`
      .sample-menu-header-text-color {
        color: #9da7a9;
      }
    \`
  ],
  standalone: false
})
export class SamplePoMenuHumanResourcesComponent {
  menuItemSelected: string;

  menus: Array<PoMenuItem> = [
    { label: 'Register user', action: this.printMenuAction.bind(this), icon: 'an an-user', shortLabel: 'Register' },
    {
      label: 'Timekeeping',
      action: this.printMenuAction.bind(this),
      icon: 'an an-clock',
      shortLabel: 'Timekeeping',
      badge: { value: 1 }
    },
    {
      label: 'Useful links',
      icon: 'an an-share',
      shortLabel: 'Links',
      subItems: [
        { label: 'Ministry of Labour', action: this.printMenuAction.bind(this), link: 'http://trabalho.gov.br/' },
        { label: 'SindPD Syndicate', action: this.printMenuAction.bind(this), link: 'http://www.sindpd.com.br/' }
      ]
    },
    {
      label: 'Benefits',
      icon: 'an an-star',
      shortLabel: 'Benefits',
      subItems: [
        {
          label: 'Meal tickets',
          subItems: [
            { label: 'Acceptance network ', action: this.printMenuAction.bind(this) },
            {
              label: 'Extracts',
              action: this.printMenuAction.bind(this),
              subItems: [
                { label: 'Monthly', action: this.printMenuAction.bind(this), badge: { value: 3, color: 'color-03' } },
                { label: 'Custom', action: this.printMenuAction.bind(this) }
              ]
            }
          ]
        },
        { label: 'Transportation tickets', action: this.printMenuAction.bind(this), badge: { value: 12 } }
      ]
    }
  ];

  constructor(public samplePoMenuHumanResourcesService: SamplePoMenuHumanResourcesService) {}

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-menu-human-resources/sample-po-menu-human-resources.service.ts"),n(),t(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMenuFilter, PoMenuItemFiltered } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoMenuHumanResourcesService implements PoMenuFilter {
  private url: string = 'https://po-sample-api.onrender.com/v1/menus';

  constructor(private http: HttpClient) {}

  getFilteredData(search: string): Observable<Array<PoMenuItemFiltered>> {
    const params = { search };

    return this.http.get(this.url, { params }).pipe(map((response: any) => response.items));
  }
}
`),n()()()()(),t(25,"div",10),o(26,"sample-po-menu-human-resources"),n(),o(27,"hr")),r&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),v(" ",i.sampleCodeButtonLabel,""),s(),p("ngClass",M(4,ze,i.hideSampleCodeTabs)))},dependencies:[k,w,P,y,Me],encapsulation:2})}return a})();var Pe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-menu-doc"]],standalone:!1,decls:1175,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-menu-header-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","documentation/po-menu#colapseMethod"],["href","documentation/po-menu#expandMethod"],["href","documentation/po-menu#toggleMethod"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoMenuItem[]"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoMenuFilter"],["href","https://po-ui.io/guides/api"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["id","colapseMethod"],["id","expandMethod"],["id","toggleMethod"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","()","=>","void"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoMenuItemBadge"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"]],template:function(r,i){r&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoMenuModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-menu."),n()(),t(7,"h3",3),e(8,"Componente"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoMenuComponent"),n()(),t(12,"div",2)(13,"p"),e(14,"Este \xE9 um componente de menu lateral que \xE9 utilizado para navega\xE7\xE3o nas p\xE1ginas de uma aplica\xE7\xE3o."),n(),t(15,"p"),e(16,"O componente po-menu recebe uma lista de objetos do tipo "),t(17,"code"),e(18,"MenuItem"),n(),e(19,` com as informa\xE7\xF5es dos itens de menu como
textos, links para redirecionamento, a\xE7\xF5es, at\xE9 4 n\xEDveis de menu e \xEDcones para o primeiro n\xEDvel de menu.`),n(),t(20,"h4"),e(21,"Tokens customiz\xE1veis"),n(),t(22,"p"),e(23,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),n(),t(24,"blockquote")(25,"p"),e(26,"Para maiores informa\xE7\xF5es, acesse o guia "),t(27,"a",6),e(28,"Personalizando o Tema Padr\xE3o com Tokens CSS"),n(),e(29,"."),n()(),t(30,"table")(31,"thead")(32,"tr")(33,"th"),e(34,"Propriedade"),n(),t(35,"th"),e(36,"Descri\xE7\xE3o"),n(),t(37,"th"),e(38,"Valor Padr\xE3o"),n()()(),t(39,"tbody")(40,"tr")(41,"td")(42,"strong"),e(43,"Default Values"),n()(),o(44,"td")(45,"td"),n(),t(46,"tr")(47,"td")(48,"code"),e(49,"--border-radius"),n()(),t(50,"td"),e(51,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),n(),t(52,"td")(53,"code"),e(54,"var(--border-radius-md)"),n()()(),t(55,"tr")(56,"td")(57,"code"),e(58,"--border-color"),n()(),t(59,"td"),e(60,"Cor da borda"),n(),t(61,"td")(62,"code"),e(63,"var(--color-neutral-light-20)"),n()()(),t(64,"tr")(65,"td")(66,"code"),e(67,"--background-color"),n()(),t(68,"td"),e(69,"Cor de background"),n(),t(70,"td")(71,"code"),e(72,"Var(----color-neutral-light-05)"),n()()(),t(73,"tr")(74,"td")(75,"strong"),e(76,"Menu Footer"),n()(),o(77,"td")(78,"td"),n(),t(79,"tr")(80,"td")(81,"code"),e(82,"--color"),n()(),t(83,"td"),e(84,"Cor principla do menu footer"),n(),t(85,"td")(86,"code"),e(87,"var(--color-action-default)"),n()()(),t(88,"tr")(89,"td")(90,"code"),e(91,"--font-size"),n()(),t(92,"td"),e(93,"Tamanho da fonte"),n(),t(94,"td")(95,"code"),e(96,"var(--font-size-default)"),n()()(),t(97,"tr")(98,"td")(99,"code"),e(100,"--line-height"),n()(),t(101,"td"),e(102,"Tamanho da label"),n(),t(103,"td")(104,"code"),e(105,"var(--line-height-md)"),n()()(),t(106,"tr")(107,"td")(108,"code"),e(109,"--outline-color-focused"),n()(),t(110,"td"),e(111,"Cor do outline do estado de focus"),n(),t(112,"td")(113,"code"),e(114,"var(--color-action-focus)"),n()()(),t(115,"tr")(116,"td")(117,"code"),e(118,"--font-weight-lvl0"),n()(),t(119,"td"),e(120,"Peso da fonte"),n(),t(121,"td")(122,"code"),e(123,"var(--font-weight-bold)"),n()()(),t(124,"tr")(125,"td")(126,"strong"),e(127,"po-menu-item"),n()(),o(128,"td")(129,"td"),n(),t(130,"tr")(131,"td")(132,"code"),e(133,"--font-family"),n()(),t(134,"td"),e(135,"Fam\xEDlia tipogr\xE1fica usada"),n(),t(136,"td")(137,"code"),e(138,"var(--font-family-theme)"),n()()(),t(139,"tr")(140,"td")(141,"code"),e(142,"--font-size"),n()(),t(143,"td"),e(144,"Tamanho da fonte"),n(),t(145,"td")(146,"code"),e(147,"var(--font-size-default)"),n()()(),t(148,"tr")(149,"td")(150,"code"),e(151,"--line-height"),n()(),t(152,"td"),e(153,"Tamanho da label"),n(),t(154,"td")(155,"code"),e(156,"var(--line-height-md)"),n()()(),t(157,"tr")(158,"td")(159,"code"),e(160,"--border-radius"),n()(),t(161,"td"),e(162,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),n(),t(163,"td")(164,"code"),e(165,"var(--border-radius-md)"),n()()(),t(166,"tr")(167,"td")(168,"code"),e(169,"--color"),n()(),t(170,"td"),e(171,"Cor principal do item"),n(),t(172,"td")(173,"code"),e(174,"var(--color-action-default)"),n()()(),t(175,"tr")(176,"td")(177,"code"),e(178,"--background-color"),n()(),t(179,"td"),e(180,"Cor do background"),n(),t(181,"td")(182,"code"),e(183,"transparent"),n()()(),t(184,"tr")(185,"td")(186,"strong"),e(187,"Hover"),n()(),o(188,"td")(189,"td"),n(),t(190,"tr")(191,"td")(192,"code"),e(193,"--color-hover"),n()(),t(194,"td"),e(195,"Cor principal no estado hover"),n(),t(196,"td")(197,"code"),e(198,"var(--color-brand-01-darkest)"),n()()(),t(199,"tr")(200,"td")(201,"code"),e(202,"--background-color-hover"),n()(),t(203,"td"),e(204,"Cor de background no estado hover"),n(),t(205,"td")(206,"code"),e(207,"var(--color-brand-01-lighter)"),n()()(),t(208,"tr")(209,"td")(210,"strong"),e(211,"Focused"),n()(),o(212,"td")(213,"td"),n(),t(214,"tr")(215,"td")(216,"code"),e(217,"--outline-color-focused"),n()(),t(218,"td"),e(219,"Cor do outline do estado de focus"),n(),t(220,"td")(221,"code"),e(222,"var(--color-action-focus)"),n()()(),t(223,"tr")(224,"td")(225,"strong"),e(226,"Pressed"),n()(),o(227,"td")(228,"td"),n(),t(229,"tr")(230,"td")(231,"code"),e(232,"--background-color-pressed"),n(),e(233," \xA0"),n(),t(234,"td"),e(235,"Cor de background no estado de pressionado\xA0"),n(),t(236,"td")(237,"code"),e(238,"var(--color-brand-01-light)"),n()()(),t(239,"tr")(240,"td")(241,"strong"),e(242,"Actived"),n()(),o(243,"td")(244,"td"),n(),t(245,"tr")(246,"td")(247,"code"),e(248,"--background-color-actived"),n()(),t(249,"td"),e(250,"Cor de background no estado actived"),n(),t(251,"td")(252,"code"),e(253,"var(--color-brand-01-darkest)"),n()()(),t(254,"tr")(255,"td")(256,"code"),e(257,"--color-actived"),n()(),t(258,"td"),e(259,"Cor principal no estado actived"),n(),t(260,"td")(261,"code"),e(262,"var(--color-brand-01-lighter)"),n()()(),t(263,"tr")(264,"td")(265,"strong"),e(266,"Font"),n()(),o(267,"td")(268,"td"),n(),t(269,"tr")(270,"td")(271,"code"),e(272,"--font-weight-lvl0"),n()(),t(273,"td"),e(274,"Peso da fonte bold"),n(),t(275,"td")(276,"code"),e(277,"var(--font-weight-bold)"),n()()(),t(278,"tr")(279,"td")(280,"code"),e(281,"--font-weight-lvl1"),n()(),t(282,"td"),e(283,"Peso da fonte"),n(),t(284,"td")(285,"code"),e(286,"var(--font-weight-normal)"),n()()()()(),t(287,"p"),o(288,"br"),e(289," Aparece completo em telas com largura maior que 1200px, caso contr\xE1rio o menu \xE9 escondido e chamado por meio de um bot\xE3o."),n(),t(290,"p"),e(291,`O menu tamb\xE9m pode ser colapsado. Essa op\xE7\xE3o \xE9 habilitada quando todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones e textos curtos.
Se colapsado, somente os itens de primeiro n\xEDvel ser\xE3o exibidos e, caso o item selecionado possua sub-n\xEDveis,
ent\xE3o o menu alternar\xE1 novamente para o estado aberto.`),n(),t(292,"p"),e(293,"Existe a possibilidade de customizar a logomarca, que \xE9 exibida na parte superior do componente."),n(),t(294,"p"),e(295,`E para adicionar um conte\xFAdo personalizado entre a logomarca e o campo de filtro,
basta adicionar este conte\xFAdo com a diretiva `),t(296,"a",7)(297,"strong"),e(298,"p-menu-header-template"),n()(),e(299,"."),n(),t(300,"p"),e(301,`Caso utilizar o filtro de menus, \xE9 poss\xEDvel realizar buscas em servi\xE7o, apenas informando a URL do servi\xE7o ou a inst\xE2ncia de
um servi\xE7o customizado implementando a interface `),t(302,"code"),e(303,"PoMenuFilter"),n(),e(304,"."),n(),t(305,"p"),e(306,"Para o menu funcionar corretamente \xE9 necess\xE1rio importar o "),t(307,"code"),e(308,"RouterModule"),n(),e(309," e "),t(310,"code"),e(311,"Routes"),n(),e(312," do m\xF3dulo principal de sua aplica\xE7\xE3o:"),n(),t(313,"pre")(314,"code"),e(315,`import { RouterModule, Routes } from '@angular/router';

...

@NgModule({
  imports: [
    RouterModule,
    Routes,
    ...
    PoModule,
    ...
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),n()(),t(316,"p"),e(317,"Al\xE9m disso \xE9 necess\xE1rio criar um m\xF3dulo configurando as rotas da aplica\xE7\xE3o."),n(),t(318,"pre")(319,"code"),e(320,`import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  {path: 'hello-world', component: HelloWorldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
`),n()()(),t(321,"div",8)(322,"h4",9),e(323,"Seletor"),n(),t(324,"pre",10),e(325,`<po-menu
    p-automatic-toggle="boolean"
    p-collapsed="boolean"
    p-components-size="string"
    p-filter="boolean"
    p-logo="string"
    p-logo-alt="string"
    p-logo-link="boolean | string"
    p-menus="PoMenuItem[]"
    p-params="any"
    p-search-tree-items="boolean"
    p-service="string | PoMenuFilter"
    p-short-logo="string" >
</po-menu>
`),n()(),t(326,"h4",11),e(327,"Propriedades"),n(),t(328,"table",12)(329,"tr",13)(330,"th",14),e(331,"Nome"),n(),t(332,"th",14),e(333,"Tipo"),n(),t(334,"th",14),e(335,"Padr\xE3o"),n(),t(336,"th",14),e(337,"Descri\xE7\xE3o"),n()(),t(338,"tr",15)(339,"td",16)(340,"div",17)(341,"span",18),e(342," p-automatic-toggle"),o(343,"br"),n()()(),t(344,"td",19)(345,"code",20),e(346,"boolean"),n()(),t(347,"td",21)(348,"p")(349,"code"),e(350,"false"),n()()(),t(351,"td",22)(352,"em")(353,"strong"),e(354,"(opcional)"),n()(),t(355,"p"),e(356,"Expande e Colapsa (retrai) o menu automaticamente."),n()()(),t(357,"tr",15)(358,"td",16)(359,"div",17)(360,"span",18),e(361," p-collapsed"),o(362,"br"),n()()(),t(363,"td",19)(364,"code",20),e(365,"boolean"),n()(),t(366,"td",21)(367,"p")(368,"code"),e(369,"false"),n()()(),t(370,"td",22)(371,"em")(372,"strong"),e(373,"(opcional)"),n()(),t(374,"p"),e(375,"Colapsa (retrai) o menu e caso receba o valor "),t(376,"code"),e(377,"false"),n(),e(378," expande o menu."),n(),t(379,"blockquote")(380,"p"),e(381,"Utilize esta propriedade para iniciar o menu colapsado."),n()(),t(382,"blockquote")(383,"p"),e(384,"Ao utilizar os m\xE9todos "),t(385,"a",23)(386,"code"),e(387,"colapse"),n()(),e(388,", "),t(389,"a",24)(390,"code"),e(391,"expand"),n()(),e(392,` e
`),t(393,"a",25)(394,"code"),e(395,"toggle"),n()(),e(396," o valor desta propriedade n\xE3o \xE9 alterado."),n()(),t(397,"p")(398,"strong"),e(399,"Importante:"),n()(),t(400,"blockquote")(401,"p"),e(402,"O menu ser\xE1 colapsado/expandido apenas se todos os itens de menu tiverem valor nas propriedades "),t(403,"code"),e(404,"icon"),n(),e(405," e "),t(406,"code"),e(407,"shortLabel"),n(),e(408,"."),n()()()(),t(409,"tr",15)(410,"td",16)(411,"div",17)(412,"span",18),e(413," p-components-size"),o(414,"br"),n()()(),t(415,"td",19)(416,"code",26),e(417,"string"),n()(),t(418,"td",21)(419,"p")(420,"code"),e(421,"medium"),n()()(),t(422,"td",22)(423,"em")(424,"strong"),e(425,"(opcional)"),n()(),t(426,"p"),e(427,"Define o tamanho dos componentes de formul\xE1rio no menu:"),n(),t(428,"ul")(429,"li")(430,"code"),e(431,"small"),n(),e(432,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),n(),t(433,"li")(434,"code"),e(435,"medium"),n(),e(436,": aplica a medida medium de cada componente."),n()(),t(437,"blockquote")(438,"p"),e(439,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(440,"code"),e(441,"medium"),n(),e(442,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(443,"a",27),e(444,"po-theme"),n(),e(445,"."),n()()()(),t(446,"tr",15)(447,"td",16)(448,"div",17)(449,"span",18),e(450," p-filter"),o(451,"br"),n()()(),t(452,"td",19)(453,"code",20),e(454,"boolean"),n()(),t(455,"td",21)(456,"p")(457,"code"),e(458,"false"),n()()(),t(459,"td",22)(460,"em")(461,"strong"),e(462,"(opcional)"),n()(),t(463,"p"),e(464,`Habilita um campo para pesquisa no menu.
A pesquisa \xE9 realizada em todos os n\xEDveis do menu e busca apenas pelos itens que cont\xE9m uma a\xE7\xE3o e/ou link definidos,
ou tamb\xE9m, pode ser realizada atrav\xE9s de um servi\xE7o definido na propriedade `),t(465,"code"),e(466,"p-service"),n(),e(467,"."),n(),t(468,"blockquote")(469,"p"),e(470,"O campo de pesquisa \xE9 desabilitado se o menu estiver colapsado."),n()()()(),t(471,"tr",15)(472,"td",16)(473,"div",17)(474,"span",18),e(475," p-logo"),o(476,"br"),n()()(),t(477,"td",19)(478,"code",26),e(479,"string"),n()(),t(480,"td",21),e(481,"-"),n(),t(482,"td",22)(483,"em")(484,"strong"),e(485,"(opcional)"),n()(),t(486,"p"),e(487,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver expandido, localizada na parte superior."),n(),t(488,"blockquote")(489,"p")(490,"strong"),e(491,"Importante:"),n()()(),t(492,"ul")(493,"li"),e(494,"Caso esta propriedade estiver indefinida ou inv\xE1lida o espa\xE7o para logomarca ser\xE1 removido."),n(),t(495,"li"),e(496,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),t(497,"code"),e(498,"24px"),n(),e(499," de altura e "),t(500,"code"),e(501,"224px"),n(),e(502,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),n()()()(),t(503,"tr",15)(504,"td",16)(505,"div",17)(506,"span",18),e(507," p-logo-alt"),o(508,"br"),n()()(),t(509,"td",19)(510,"code",26),e(511,"string"),n()(),t(512,"td",21)(513,"p")(514,"code"),e(515,"Logomarca in\xEDcio"),n()()(),t(516,"td",22)(517,"em")(518,"strong"),e(519,"(opcional)"),n()(),t(520,"p"),e(521,"Define o texto alternativo para a logomarca."),n(),t(522,"blockquote")(523,"p")(524,"strong"),e(525,"Importante"),n(),e(526,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),n()()()(),t(527,"tr",15)(528,"td",16)(529,"div",17)(530,"span",18),e(531," p-logo-link"),o(532,"br"),n()()(),t(533,"td",19)(534,"code",20),e(535,"boolean "),n(),t(536,"code",26),e(537," string"),n()(),t(538,"td",21)(539,"p")(540,"code"),e(541,"true"),n()()(),t(542,"td",22)(543,"em")(544,"strong"),e(545,"(opcional)"),n()(),t(546,"p"),e(547,"Define o link para a rota ao clicar no logo do menu."),n(),t(548,"ul")(549,"li"),e(550,"Se o valor for uma string, define a rota para o link informado."),n(),t(551,"li"),e(552,"Se for "),t(553,"code"),e(554,"false"),n(),e(555,", o logo n\xE3o ter\xE1 link associado."),n(),t(556,"li"),e(557,"Se for "),t(558,"code"),e(559,"true"),n(),e(560,", o logo ter\xE1 a rota padr\xE3o "),t(561,"code"),e(562,"./"),n(),e(563,"."),n()()()(),t(564,"tr",15)(565,"td",16)(566,"div",17)(567,"span",18),e(568," p-menus"),o(569,"br"),n()()(),t(570,"td",19)(571,"code",28),e(572,"PoMenuItem[]"),n()(),t(573,"td",21),e(574,"-"),n(),t(575,"td",22)(576,"p"),e(577,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),n()()(),t(578,"tr",15)(579,"td",16)(580,"div",17)(581,"span",18),e(582," p-params"),o(583,"br"),n()()(),t(584,"td",19)(585,"code",29),e(586,"any"),n()(),t(587,"td",21),e(588,"-"),n(),t(589,"td",22)(590,"em")(591,"strong"),e(592,"(opcional)"),n()(),t(593,"p"),e(594,"Deve ser informado um objeto que deseja-se utilizar na requisi\xE7\xE3o de filtro dos itens de menu."),n(),t(595,"p"),e(596,"Caso utilizado um servi\xE7o customizado, implementando a interface "),t(597,"code"),e(598,"PoMenuFilter"),n(),e(599,`, o valor desta propriedade
ser\xE1 passado como par\xE2metro, na fun\xE7\xE3o `),t(600,"code"),e(601,"getFilteredData"),n(),e(602,"."),n(),t(603,"p"),e(604,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),t(605,"em"),e(606,"GET"),n(),e(607,` na URL informada, passando os valores informados
nesta propriedade em conjunto com o par\xE2metro `),t(608,"code"),e(609,"search"),n(),e(610,", veja exemplo:"),n(),t(611,"pre")(612,"code"),e(613,`<po-menu p-service="/api/v1/fnd/menu" [p-params]="{ company: 1, user: 297767512 }">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas&company=1&user=297767512
`),n()()()(),t(614,"tr",15)(615,"td",16)(616,"div",17)(617,"span",18),e(618," p-search-tree-items"),o(619,"br"),n()()(),t(620,"td",19)(621,"code",20),e(622,"boolean"),n()(),t(623,"td",21)(624,"p")(625,"code"),e(626,"false"),n()()(),t(627,"td",22)(628,"em")(629,"strong"),e(630,"(opcional)"),n()(),t(631,"p"),e(632,`Quando ativado, a pesquisa tamb\xE9m retornar\xE1 itens agrupadores al\xE9m dos itens que cont\xEAm uma a\xE7\xE3o e/ou link definidos.
Isso pode ser \xFAtil quando se deseja encontrar rapidamente categorias ou se\xE7\xF5es do menu.`),n(),t(633,"blockquote")(634,"p"),e(635,"\xC9 necess\xE1rio que a propriedade "),t(636,"code"),e(637,"p-filter"),n(),e(638," esteja habilitada."),n()()()(),t(639,"tr",15)(640,"td",16)(641,"div",17)(642,"span",18),e(643," p-service"),o(644,"br"),n()()(),t(645,"td",19)(646,"code",26),e(647,"string "),n(),t(648,"code",30),e(649," PoMenuFilter"),n()(),t(650,"td",21),e(651,"-"),n(),t(652,"td",22)(653,"em")(654,"strong"),e(655,"(opcional)"),n()(),t(656,"p"),e(657,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 utilizado para realizar o filtro de itens do
menu quando realizar uma busca. Caso haja a necessidade de customiza\xE7\xE3o, pode ser informado um
servi\xE7o implementando a interface `),t(658,"code"),e(659,"PoMenuFilter"),n(),e(660,"."),n(),t(661,"p"),e(662,`Caso utilizada uma URL, o servi\xE7o deve retornar os dados conforme o
`),t(663,"a",31),e(664,"Guia de implementa\xE7\xE3o de APIs"),n(),e(665," do PO UI."),n(),t(666,"p"),e(667,"Quando utilizada uma URL de servi\xE7o, ser\xE1 realizado um "),t(668,"em"),e(669,"GET"),n(),e(670,` na URL informada, passando o valor digitado
no par\xE2metro `),t(671,"code"),e(672,"search"),n(),e(673,", veja exemplo:"),n(),t(674,"blockquote")(675,"p"),e(676,"O filtro no servi\xE7o ser\xE1 realizado caso contenha no m\xEDnimo tr\xEAs caracteres no campo de busca, por exemplo "),t(677,"code"),e(678,"tot"),n(),e(679,"."),n()(),t(680,"pre")(681,"code"),e(682,`<po-menu p-service="/api/v1/fnd/menu">
</po-menu>

Requisi\xE7\xE3o: GET /api/v1/fnd/menu?search=contas
`),n()(),t(683,"blockquote")(684,"p"),e(685,"\xC9 necess\xE1rio que propriedade "),t(686,"code"),e(687,"p-filter"),n(),e(688," esteja habilitada."),n()()()(),t(689,"tr",15)(690,"td",16)(691,"div",17)(692,"span",18),e(693," p-short-logo"),o(694,"br"),n()()(),t(695,"td",19)(696,"code",26),e(697,"string"),n()(),t(698,"td",21),e(699,"-"),n(),t(700,"td",22)(701,"em")(702,"strong"),e(703,"(opcional)"),n()(),t(704,"p"),e(705,"Caminho para a logomarca, que ser\xE1 exibida quando o componente estiver colapsado, localizada na parte superior."),n(),t(706,"blockquote")(707,"p")(708,"strong"),e(709,"Importante:"),n()()(),t(710,"ul")(711,"li"),e(712,"Caso esta propriedade estiver indefinida ou inv\xE1lida passa a assumir o valor informado na propriedade "),t(713,"code"),e(714,"p-logo"),n(),e(715,` e na aus\xEAncia desta o
espa\xE7o para logomarca ser\xE1 removido.`),n(),t(716,"li"),e(717,"Como boa pr\xE1tica, indica-se utilizar imagens com at\xE9 "),t(718,"code"),e(719,"48px"),n(),e(720," de altura e "),t(721,"code"),e(722,"48px"),n(),e(723,` de largura,
caso ultrapassar esses valores a imagem ser\xE1 readequada no espa\xE7o dispon\xEDvel.`),n(),t(724,"li"),e(725,"Caso n\xE3o informar um valor, esta propriedade passa a assumir o valor informado na propriedade "),t(726,"code"),e(727,"p-logo"),n(),e(728,"."),n()()()()(),t(729,"h3",11),e(730,"M\xE9todos"),n(),t(731,"table",32)(732,"tr",15)(733,"th",33)(734,"div",17)(735,"h4")(736,"span",18),e(737," collapse "),n()()()()(),t(738,"tr",22)(739,"td",22)(740,"p"),o(741,"a",34),n(),t(742,"p"),e(743,"M\xE9todo para colapsar (retrair) o menu."),n()()()(),o(744,"br"),t(745,"table",32)(746,"tr",15)(747,"th",33)(748,"div",17)(749,"h4")(750,"span",18),e(751," expand "),n()()()()(),t(752,"tr",22)(753,"td",22)(754,"p"),o(755,"a",35),n(),t(756,"p"),e(757,"M\xE9todo para expandir (aumentar) o menu."),n()()()(),o(758,"br"),t(759,"table",32)(760,"tr",15)(761,"th",33)(762,"div",17)(763,"h4")(764,"span",18),e(765," toggle "),n()()()()(),t(766,"tr",22)(767,"td",22)(768,"p"),o(769,"a",36),e(770,`
M\xE9todo que colapsa e expande o menu alternadamente.`),n(),t(771,"blockquote")(772,"p"),e(773,"Os m\xE9todos apenas v\xE3o colapsar/expandir o menu se:"),n()(),t(774,"ul")(775,"li"),e(776,"Todos os itens de menu tiverem valor nas propriedades "),t(777,"code"),e(778,"icon"),n(),e(779," e "),t(780,"code"),e(781,"shortLabel"),n(),e(782,"."),n()()()()(),o(783,"br"),t(784,"h3"),e(785,"Interfaces"),n(),t(786,"h4",37)(787,"code",5),e(788,"PoMenuFilter"),n()(),t(789,"div",2)(790,"p"),e(791,"Interface do servi\xE7o utilizado no componente "),t(792,"code"),e(793,"po-menu"),n(),e(794,"."),n()(),t(795,"h4",11),e(796,"M\xE9todos"),n(),t(797,"table",32)(798,"tr",15)(799,"th",33)(800,"div",17)(801,"h4")(802,"span",18),e(803," getFilteredData "),n()()()()(),t(804,"tr",22)(805,"td",22)(806,"p"),e(807,"M\xE9todo respons\xE1vel por retornar um "),t(808,"em"),e(809,"Observable"),n(),e(810," que retorne uma lista de objetos que seguem a interface "),t(811,"code"),e(812,"PoMenuItemFiltered"),n(),e(813,`.
Ser\xE1 informado por par\xE2metro o valor a ser pesquisado e as informa\xE7\xF5es adicionais preenchidas atrav\xE9s da propriedade `),t(814,"code"),e(815,"p-params"),n(),e(816,"."),n()()()(),t(817,"h5")(818,"b"),e(819,"Par\xE2metros"),n()(),t(820,"table",12)(821,"tr",13)(822,"th",14),e(823,"Nome"),n(),t(824,"th",14),e(825,"Tipo"),n(),t(826,"th",14),e(827,"Descri\xE7\xE3o"),n()(),t(828,"tr",15)(829,"td",16),e(830," search"),n(),t(831,"td",19)(832,"code",38),e(833," string "),n()(),t(834,"td",22)(835,"p"),e(836,"Valor informado no campo de busca dos itens de menus."),n()()(),t(837,"tr",15)(838,"td",16),e(839," params"),n(),t(840,"td",19)(841,"code",38),e(842," any "),n()(),t(843,"td",22)(844,"p"),e(845,"Valor informado atrav\xE9s da propriedade "),t(846,"code"),e(847,"p-params"),n(),e(848,"."),n()()()(),o(849,"br"),t(850,"h4",37)(851,"code",5),e(852,"PoMenuItemBadge"),n()(),t(853,"div",2)(854,"p"),e(855,"Interface do "),t(856,"em"),e(857,"badge"),n(),e(858," utilizado no "),t(859,"code"),e(860,"po-menu"),n(),e(861,"."),n()(),t(862,"h4",11),e(863,"Propriedades"),n(),t(864,"table",12)(865,"tr",13)(866,"th",14),e(867,"Nome"),n(),t(868,"th",14),e(869,"Tipo"),n(),t(870,"th",14),e(871,"Descri\xE7\xE3o"),n()(),t(872,"tr",15)(873,"td",16)(874,"div",17)(875,"span",18),e(876," color"),o(877,"br"),n()()(),t(878,"td",19)(879,"code",26),e(880,"string"),n()(),t(881,"td",22)(882,"em")(883,"strong"),e(884,"(opcional)"),n()(),t(885,"p"),e(886,"Define a cor do "),t(887,"em"),e(888,"badge"),n(),e(889," e aceita os valores:"),n(),t(890,"p"),o(891,"span",39),t(892,"code"),e(893,"color-01"),n()(),t(894,"p"),o(895,"span",40),t(896,"code"),e(897,"color-02"),n()(),t(898,"p"),o(899,"span",41),t(900,"code"),e(901,"color-03"),n()(),t(902,"p"),o(903,"span",42),t(904,"code"),e(905,"color-04"),n()(),t(906,"p"),o(907,"span",43),t(908,"code"),e(909,"color-05"),n()(),t(910,"p"),o(911,"span",44),t(912,"code"),e(913,"color-06"),n()(),t(914,"p"),o(915,"span",45),t(916,"code"),e(917,"color-07"),n()(),t(918,"p"),o(919,"span",46),t(920,"code"),e(921,"color-08"),n()(),t(922,"p"),o(923,"span",47),t(924,"code"),e(925,"color-09"),n()(),t(926,"p"),o(927,"span",48),t(928,"code"),e(929,"color-10"),n()(),t(930,"p"),o(931,"span",49),t(932,"code"),e(933,"color-11"),n()(),t(934,"p"),o(935,"span",50),t(936,"code"),e(937,"color-12"),n()()()(),t(938,"tr",15)(939,"td",16)(940,"div",17)(941,"span",18),e(942," value"),o(943,"br"),n()()(),t(944,"td",19)(945,"code",51),e(946,"number"),n()(),t(947,"td",22)(948,"p"),e(949,"N\xFAmero exibido no "),t(950,"em"),e(951,"badge"),n(),e(952,", caso o mesmo seja maior que "),t(953,"strong"),e(954,"9"),n(),e(955," o mesmo exibe "),t(956,"strong"),e(957,"9+"),n(),e(958,"."),n()()()(),t(959,"h4",37)(960,"code",5),e(961,"PoMenuItemFiltered"),n()(),t(962,"div",2)(963,"p"),e(964,"Interface do objeto que deve conter na cole\xE7\xE3o de itens filtrados no componente "),t(965,"code"),e(966,"po-menu"),n(),e(967,"."),n()(),t(968,"h4",11),e(969,"Propriedades"),n(),t(970,"table",12)(971,"tr",13)(972,"th",14),e(973,"Nome"),n(),t(974,"th",14),e(975,"Tipo"),n(),t(976,"th",14),e(977,"Descri\xE7\xE3o"),n()(),t(978,"tr",15)(979,"td",16)(980,"div",17)(981,"span",18),e(982," action"),o(983,"br"),n()()(),t(984,"td",19)(985,"code",52),e(986,"() => void"),n()(),t(987,"td",22)(988,"p"),e(989,"A\xE7\xE3o a ser executada quando o item de menu for clicado."),n()()(),t(990,"tr",15)(991,"td",16)(992,"div",17)(993,"span",18),e(994," label"),o(995,"br"),n()()(),t(996,"td",19)(997,"code",26),e(998,"string"),n()(),t(999,"td",22)(1e3,"p"),e(1001,"Texto do item de menu."),n()()(),t(1002,"tr",15)(1003,"td",16)(1004,"div",17)(1005,"span",18),e(1006," link"),o(1007,"br"),n()()(),t(1008,"td",19)(1009,"code",26),e(1010,"string"),n()(),t(1011,"td",22)(1012,"p"),e(1013,"Link* para redirecionamento no clique do item do menu, podendo ser um "),t(1014,"em"),e(1015,"link"),n(),e(1016," interno ou externo."),n()()()(),t(1017,"h4",37)(1018,"code",5),e(1019,"PoMenuItem"),n()(),t(1020,"div",2)(1021,"p"),e(1022,"Interface para os itens de menu do componente po-menu."),n()(),t(1023,"h4",11),e(1024,"Propriedades"),n(),t(1025,"table",12)(1026,"tr",13)(1027,"th",14),e(1028,"Nome"),n(),t(1029,"th",14),e(1030,"Tipo"),n(),t(1031,"th",14),e(1032,"Descri\xE7\xE3o"),n()(),t(1033,"tr",15)(1034,"td",16)(1035,"div",17)(1036,"span",18),e(1037," action"),o(1038,"br"),n()()(),t(1039,"td",19)(1040,"code",53),e(1041,"Function"),n()(),t(1042,"td",22)(1043,"em")(1044,"strong"),e(1045,"(opcional)"),n()(),t(1046,"p"),e(1047,"A\xE7\xE3o personalizada para clique do item de menu."),n()()(),t(1048,"tr",15)(1049,"td",16)(1050,"div",17)(1051,"span",18),e(1052," badge"),o(1053,"br"),n()()(),t(1054,"td",19)(1055,"code",54),e(1056,"PoMenuItemBadge"),n()(),t(1057,"td",22)(1058,"em")(1059,"strong"),e(1060,"(opcional)"),n()(),t(1061,"p"),e(1062,"Badge do item de menu."),n(),t(1063,"p"),e(1064,"Ao adicion\xE1-lo em um subitem (filho) todos os itens ascendentes (pai) ser\xE3o marcados com um ponto vermelho."),n(),t(1065,"blockquote")(1066,"p"),e(1067,"O "),t(1068,"code"),e(1069,"po-badge"),n(),e(1070," s\xF3 ser\xE1 exibido caso o item do menu n\xE3o possua "),t(1071,"code"),e(1072,"subItems"),n(),e(1073," e seu valor seja maior ou igual a 0."),n()()()(),t(1074,"tr",15)(1075,"td",16)(1076,"div",17)(1077,"span",18),e(1078," icon"),o(1079,"br"),n()()(),t(1080,"td",19)(1081,"code",26),e(1082,"string "),n(),t(1083,"code",55),e(1084," TemplateRef<void>"),n()(),t(1085,"td",22)(1086,"em")(1087,"strong"),e(1088,"(opcional)"),n()(),t(1089,"p"),e(1090,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(1091,"a",56),e(1092,"Biblioteca de \xEDcones"),n(),e(1093,". conforme exemplo abaixo:"),n(),t(1094,"pre")(1095,"code"),e(1096,`<po-menu
 [p-menus]="[{ link: '/', label: 'PO ICON', icon: 'an an-newspaper' }]">
</po-menu>
`),n()(),t(1097,"p"),e(1098,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),n(),t(1099,"pre")(1100,"code"),e(1101,`<po-menu
 [p-menus]="[{ link: '/', label: 'FA ICON', icon: 'fa fa-podcast' }]">
</po-menu>
`),n()(),t(1102,"p"),e(1103,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(1104,"code"),e(1105,"TemplateRef"),n(),e(1106,`, conforme exemplo abaixo:
component.html:`),n(),t(1107,"pre")(1108,"code"),e(1109,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-menu [p-menus]="myProperty"></po-menu>
`),n()(),t(1110,"p"),e(1111,"component.ts:"),n(),t(1112,"pre")(1113,"code"),e(1114,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   link: '/',
   label: 'Icon',
   icon: this.iconTemplate
 }
];
`),n()(),t(1115,"blockquote")(1116,"p"),e(1117,`S\xE3o exibidos apenas no primeiro n\xEDvel de menu e ser\xE3o vis\xEDveis apenas se todos os itens de primeiro n\xEDvel possu\xEDrem \xEDcones.
O menu colapsado tamb\xE9m aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu possu\xEDrem \xEDcones e textos curtos.`),n()()()(),t(1118,"tr",15)(1119,"td",16)(1120,"div",17)(1121,"span",18),e(1122," label"),o(1123,"br"),n()()(),t(1124,"td",19)(1125,"code",26),e(1126,"string"),n()(),t(1127,"td",22)(1128,"p"),e(1129,"Texto do item de menu."),n()()(),t(1130,"tr",15)(1131,"td",16)(1132,"div",17)(1133,"span",18),e(1134," link"),o(1135,"br"),n()()(),t(1136,"td",19)(1137,"code",26),e(1138,"string"),n()(),t(1139,"td",22)(1140,"em")(1141,"strong"),e(1142,"(opcional)"),n()(),t(1143,"p"),e(1144,"Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo."),n()()(),t(1145,"tr",15)(1146,"td",16)(1147,"div",17)(1148,"span",18),e(1149," shortLabel"),o(1150,"br"),n()()(),t(1151,"td",19)(1152,"code",26),e(1153,"string"),n()(),t(1154,"td",22)(1155,"em")(1156,"strong"),e(1157,"(opcional)"),n()(),t(1158,"p"),e(1159,`Texto curto exibido atrav\xE9s de um tooltip para o item que aparece quando o menu estiver colapsado.
Se colapsado, aparecer\xE1 somente se todos os itens de primeiro n\xEDvel de menu que possu\xEDrem \xEDcones e textos curtos.`),n()()(),t(1160,"tr",15)(1161,"td",16)(1162,"div",17)(1163,"span",18),e(1164," subItems"),o(1165,"br"),n()()(),t(1166,"td",19)(1167,"code",57),e(1168,"Array<PoMenuItem>"),n()(),t(1169,"td",22)(1170,"em")(1171,"strong"),e(1172,"(opcional)"),n()(),t(1173,"p"),e(1174,"Lista de sub-items, criando novos n\xEDveis dentro do menu. O n\xFAmero m\xE1ximo de n\xEDveis do menu \xE9 igual a 4."),n()()()()())},dependencies:[w],encapsulation:2})}return a})();var ye=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(I(ne),I(ie))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Menu",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),f("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-menu-doc"),n(),t(4,"po-tab",3),f("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-menu-basic-view")(6,"sample-po-menu-labs-view")(7,"sample-po-menu-human-resources-view"),n()()()),r&2&&(p("p-actions",i.actions),s(2),p("p-active",i.activeTab==="doc"),s(2),p("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[L,P,y,fe,ve,Ce,Pe],encapsulation:2})}return a})();var He=[{path:"",component:ye}],we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=V({type:a});static \u0275inj=D({imports:[q.forChild(He),q]})}return a})();var Et=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=V({type:a});static \u0275inj=D({imports:[ge,we]})}return a})();export{Et as DocPoMenuModule};
