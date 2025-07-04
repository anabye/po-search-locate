import{o as P,p as Ce}from"./chunk-R3BKLGLC.js";import{Ab as x,F as ue,Ga as Se,I as he,La as ve,Ra as Ee,T as B,Wa as D,eb as T,fb as j,gb as k,ha as ge,ja as be,m as de,nb as fe,q as ce,qb as we,zb as y}from"./chunk-TUTTJOS2.js";import{$a as S,Ac as re,Ba as _,Ea as t,Fa as e,Ga as s,Hb as ne,Ka as H,L as $,La as g,M as O,Nc as pe,Pa as Q,Pc as me,Rc as W,T as c,Ta as Y,U as u,Ua as Z,Va as K,Wa as q,Xa as i,Za as V,a as U,ab as v,b as J,bb as E,cb as X,db as z,eb as M,fb as ee,ha as r,ia as C,kb as te,lb as ie,oa as b,pa as I,ua as L,ub as A,wc as oe,xc as ae,ya as m,yc as le,zc as se}from"./chunk-MIQUIDUB.js";var Te=()=>({name:"Registro 1",email:"register@po-ui.com"}),ke=()=>({name:"Registro 2",email:"register2@po-ui.com"}),Fe=(a,f)=>[a,f];function Oe(a,f){if(a&1&&(t(0,"div",2),s(1,"po-info",3),e()),a&2){let o=f.$implicit;r(),m("p-value",o.email)}}var ye=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-list-view-basic"]],standalone:!1,decls:2,vars:6,consts:[["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],[1,"po-row"],["p-label","Email",1,"po-md-12",3,"p-value"]],template:function(l,n){l&1&&(t(0,"po-list-view",0),L(1,Oe,2,1,"ng-template",1),e()),l&2&&m("p-items",ee(3,Fe,z(1,Te),z(2,ke)))},dependencies:[D,k,T],encapsulation:2})}return a})();var He=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-list-view-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(s(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO List View Basic"),e(),t(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),s(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-list-view-basic/sample-po-list-view-basic.component.html"),e(),t(13,"pre",7),i(14,`<po-list-view
  p-property-title="name"
  [p-items]="[
    { name: 'Registro 1', email: 'register@po-ui.com' },
    { name: 'Registro 2', email: 'register2@po-ui.com' }
  ]"
>
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>
</po-list-view>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-list-view-basic/sample-po-list-view-basic.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-list-view-basic',
  templateUrl: './sample-po-list-view-basic.component.html',
  standalone: false
})
export class SamplePoListViewBasicComponent {}
`),e()()()()(),t(21,"div",10),s(22,"sample-po-list-view-basic"),e(),s(23,"hr")),l&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),V(" ",n.sampleCodeButtonLabel,""),r(),m("ngClass",M(4,He,n.hideSampleCodeTabs)))},dependencies:[A,P,y,x,ye],encapsulation:2})}return a})();function je(a,f){if(a&1&&(t(0,"div",5),s(1,"po-info",22)(2,"po-info",23)(3,"po-info",24)(4,"po-info",25),e()),a&2){let o=f.$implicit;r(),m("p-value",o.name),r(),m("p-value",o.email),r(),m("p-value",o.location),r(),m("p-value",o.phone)}}function Ne(a,f){if(a&1&&(t(0,"div",5),s(1,"po-info",26)(2,"po-info",27),e()),a&2){let o=f.$implicit;r(),m("p-value",o.company),r(),m("p-value",o.zipCode)}}var Pe=(()=>{class a{poNotification;action;actions;componentsSize="medium";customLiterals;height;items;literals;properties;propertyLink;propertyLinkValue;propertyTitle;titleAction;propertiesOptions=[{value:"select",label:"Select"},{value:"hideSelectAll",label:"Hide Select All",disabled:!0},{value:"showMoreDisabled",label:"Show More Disabled"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertyTitleOptions=[{value:"name",label:"name"},{value:"email",label:"email"},{value:"phone",label:"phone"},{value:"location",label:"location"}];typeOptions=[{label:"Default",value:"default"},{label:"Danger",value:"danger"}];constructor(o){this.poNotification=o}ngOnInit(){this.restore()}addAction(o){let l=Object.assign({},o);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions.push(l),this.restoreActionForm()}addItem(){this.items.push(this.generateNewItem(this.items.length+1))}changeAction(o){this.titleAction=o}changeActionOptions(){this.propertiesOptions=this.propertiesOptions.map(o=>o.value==="hideSelectAll"?J(U({},o),{disabled:!this.properties.includes("select")}):o)}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.actions=[],this.componentsSize="medium",this.items=[],this.height=void 0,this.literals="",this.properties=[],this.propertyLink="url",this.propertyLinkValue="",this.propertyTitle="",this.titleAction="",this.restoreActionForm()}showMore(){this.addItem()}generateNewItem(o){return{name:`Register ${o}`,email:`register${o}@po-ui.com`,phone:`(55) ${o}234567`,location:"Brazil",company:`Company ${o}`,url:this.propertyLinkValue,zipCode:`${o}221`}}restoreActionForm(){this.action={label:"",visible:null}}showAction(o){this.poNotification.success(`Action clicked: ${o}`)}static \u0275fac=function(l){return new(l||a)(C(B))};static \u0275cmp=b({type:a,selectors:[["sample-po-list-view-labs"]],standalone:!1,decls:35,vars:30,consts:[["propertiesForm","ngForm"],["actionForm","ngForm"],[3,"p-show-more","p-title-action","p-actions","p-components-size","p-height","p-hide-select-all","p-items","p-literals","p-property-link","p-property-title","p-select","p-show-more-disabled"],["p-list-view-content-template",""],["p-list-view-detail-template",""],[1,"po-row"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","propertyTitle","p-help","Ex.: email","p-label","Property title",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","height","p-help","Ex.: 200","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","propertyLinkValue","p-help",'Ex.: "http://po.com.br"',"p-label","Title Link",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties","p-help",'To enable the "Hide Select All" option, you must select the "Select" option first.',1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-4","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-label","Name",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Email",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Location",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Phone",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Company",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Zip Code",1,"po-md-6","po-lg-3",3,"p-value"]],template:function(l,n){if(l&1){let d=H();t(0,"po-list-view",2),g("p-show-more",function(){return c(d),u(n.showMore())})("p-title-action",function(){return c(d),u(n.changeAction("p-title-action"))}),L(1,je,5,4,"ng-template",3)(2,Ne,3,2,"ng-template",4),e(),s(3,"hr"),t(4,"div",5)(5,"po-button",6),g("p-click",function(){return c(d),u(n.addItem())}),e()(),s(6,"hr"),t(7,"div",5),s(8,"po-info",7),e(),s(9,"hr"),t(10,"form",null,0)(12,"div",5)(13,"po-select",8),E("ngModelChange",function(p){return c(d),v(n.propertyTitle,p)||(n.propertyTitle=p),u(p)}),e(),t(14,"po-number",9),E("ngModelChange",function(p){return c(d),v(n.height,p)||(n.height=p),u(p)}),g("p-change",function(){return c(d),u(n.changeLiterals())}),e(),t(15,"po-input",10),E("ngModelChange",function(p){return c(d),v(n.propertyLinkValue,p)||(n.propertyLinkValue=p),u(p)}),e(),t(16,"po-input",11),E("ngModelChange",function(p){return c(d),v(n.literals,p)||(n.literals=p),u(p)}),g("p-change",function(){return c(d),u(n.changeLiterals())}),e(),t(17,"po-radio-group",12),E("ngModelChange",function(p){return c(d),v(n.componentsSize,p)||(n.componentsSize=p),u(p)}),e()(),t(18,"div",5)(19,"po-checkbox-group",13),E("ngModelChange",function(p){return c(d),v(n.properties,p)||(n.properties=p),u(p)}),g("p-change",function(){return c(d),u(n.changeActionOptions())}),e()()(),s(20,"hr"),t(21,"form",null,1)(23,"div",5)(24,"po-input",14),E("ngModelChange",function(p){return c(d),v(n.action.action,p)||(n.action.action=p),u(p)}),e(),t(25,"po-input",15),E("ngModelChange",function(p){return c(d),v(n.action.label,p)||(n.action.label=p),u(p)}),e(),t(26,"po-input",16),E("ngModelChange",function(p){return c(d),v(n.action.url,p)||(n.action.url=p),u(p)}),e(),t(27,"po-select",17),E("ngModelChange",function(p){return c(d),v(n.action.type,p)||(n.action.type=p),u(p)}),e(),t(28,"po-select",18),E("ngModelChange",function(p){return c(d),v(n.action.icon,p)||(n.action.icon=p),u(p)}),e(),t(29,"po-checkbox-group",19),E("ngModelChange",function(p){return c(d),v(n.action,p)||(n.action=p),u(p)}),e()(),t(30,"div",5)(31,"po-button",20),g("p-click",function(){return c(d),u(n.addAction(n.action))}),e()()(),s(32,"hr"),t(33,"div",5)(34,"po-button",21),g("p-click",function(){return c(d),q(22).reset(),u(n.restore())}),e()()}if(l&2){let d=q(22);m("p-actions",n.actions)("p-components-size",n.componentsSize)("p-height",n.height)("p-hide-select-all",n.properties.includes("hideSelectAll"))("p-items",n.items)("p-literals",n.customLiterals)("p-property-link",n.propertyLink)("p-property-title",n.propertyTitle)("p-select",n.properties.includes("select"))("p-show-more-disabled",n.properties.includes("showMoreDisabled")),r(8),m("p-value",n.titleAction),r(5),S("ngModel",n.propertyTitle),m("p-options",n.propertyTitleOptions),r(),S("ngModel",n.height),r(),S("ngModel",n.propertyLinkValue),r(),S("ngModel",n.literals),r(),S("ngModel",n.componentsSize),m("p-options",n.componentsSizeOptions),r(2),S("ngModel",n.properties),m("p-options",n.propertiesOptions),r(5),S("ngModel",n.action.action),r(),S("ngModel",n.action.label),r(),S("ngModel",n.action.url),r(),S("ngModel",n.action.type),m("p-options",n.typeOptions),r(),S("ngModel",n.action.icon),m("p-options",n.iconOptions),r(),S("ngModel",n.action),m("p-options",n.actionOptions),r(2),m("p-disabled",d.invalid)}},dependencies:[re,oe,ae,se,le,ue,ge,be,Se,ve,Ee,D,k,T,j],encapsulation:2})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-list-view-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(s(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO List View Labs"),e(),t(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),s(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-list-view-labs/sample-po-list-view-labs.component.html"),e(),t(13,"pre",7),i(14,`<po-list-view
  [p-actions]="actions"
  [p-components-size]="componentsSize"
  [p-height]="height"
  [p-hide-select-all]="properties.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-property-link]="propertyLink"
  [p-property-title]="propertyTitle"
  [p-select]="properties.includes('select')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  (p-show-more)="showMore()"
  (p-title-action)="changeAction('p-title-action')"
>
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <po-info class="po-md-6 po-lg-3" p-label="Name" [p-value]="item.name"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Email" [p-value]="item.email"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Location" [p-value]="item.location"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Phone" [p-value]="item.phone"> </po-info>
    </div>
  </ng-template>

  <ng-template p-list-view-detail-template let-item>
    <div class="po-row">
      <po-info class="po-md-6 po-lg-3" p-label="Company" [p-value]="item.company"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Zip Code" [p-value]="item.zipCode"> </po-info>
    </div>
  </ng-template>
</po-list-view>

<hr />

<div class="po-row">
  <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()"> </po-button>
</div>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Action" [p-value]="titleAction"> </po-info>
</div>

<hr />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6 po-lg-3"
      name="propertyTitle"
      [(ngModel)]="propertyTitle"
      p-help="Ex.: email"
      p-label="Property title"
      [p-options]="propertyTitleOptions"
    >
    </po-select>

    <po-number
      class="po-md-6 po-lg-3"
      name="height"
      [(ngModel)]="height"
      p-help="Ex.: 200"
      p-label="Height"
      (p-change)="changeLiterals()"
    >
    </po-number>

    <po-input
      class="po-md-6"
      name="propertyLinkValue"
      [(ngModel)]="propertyLinkValue"
      p-help='Ex.: "http://po.com.br"'
      p-label="Title Link"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-radio-group
      class="po-lg-6"
      name="size"
      [(ngModel)]="componentsSize"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-label="Properties"
      p-help='To enable the "Hide Select All" option, you must select the "Select" option first.'
      [p-options]="propertiesOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>
</form>

<hr />

<form #actionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-md-6 po-lg-3" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
    </po-select>

    <po-checkbox-group
      class="po-md-12"
      name="action"
      [(ngModel)]="action"
      p-columns="4"
      p-indeterminate
      p-label="Action properties"
      [p-options]="actionOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-lg-3"
      p-label="Add Action"
      [p-disabled]="actionForm.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<hr />

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="actionForm.reset(); restore()"> </po-button>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-list-view-labs/sample-po-list-view-labs.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoListViewAction,
  PoListViewLiterals,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-list-view-labs',
  templateUrl: './sample-po-list-view-labs.component.html',
  standalone: false
})
export class SamplePoListViewLabsComponent implements OnInit {
  action: PoListViewAction;
  actions: Array<PoListViewAction>;
  componentsSize: string = 'medium';
  customLiterals: PoListViewLiterals;
  height: number;
  items: Array<any>;
  literals: string;
  properties: Array<string>;
  propertyLink: string;
  propertyLinkValue: string;
  propertyTitle: string;
  titleAction: string;

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'select', label: 'Select' },
    { value: 'hideSelectAll', label: 'Hide Select All', disabled: true },
    { value: 'showMoreDisabled', label: 'Show More Disabled' }
  ];

  readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  readonly propertyTitleOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'name' },
    { value: 'email', label: 'email' },
    { value: 'phone', label: 'phone' },
    { value: 'location', label: 'location' }
  ];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Default', value: 'default' },
    { label: 'Danger', value: 'danger' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoListViewAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    this.actions.push(newAction);
    this.restoreActionForm();
  }

  addItem() {
    this.items.push(this.generateNewItem(this.items.length + 1));
  }

  changeAction(action) {
    this.titleAction = action;
  }

  changeActionOptions() {
    this.propertiesOptions = this.propertiesOptions.map(propertyOption => {
      if (propertyOption.value === 'hideSelectAll') {
        return { ...propertyOption, disabled: !this.properties.includes('select') };
      } else {
        return propertyOption;
      }
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.actions = [];
    this.componentsSize = 'medium';
    this.items = [];
    this.height = undefined;
    this.literals = '';
    this.properties = [];
    this.propertyLink = 'url';
    this.propertyLinkValue = '';
    this.propertyTitle = '';
    this.titleAction = '';
    this.restoreActionForm();
  }

  showMore() {
    this.addItem();
  }

  private generateNewItem(index) {
    return {
      name: \`Register \${index}\`,
      email: \`register\${index}@po-ui.com\`,
      phone: \`(55) \${index}234567\`,
      location: 'Brazil',
      company: \`Company \${index}\`,
      url: this.propertyLinkValue,
      zipCode: \`\${index}221\`
    };
  }

  private restoreActionForm() {
    this.action = {
      label: '',
      visible: null
    };
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),e()()()()(),t(21,"div",10),s(22,"sample-po-list-view-labs"),e(),s(23,"hr")),l&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),V(" ",n.sampleCodeButtonLabel,""),r(),m("ngClass",M(4,ze,n.hideSampleCodeTabs)))},dependencies:[A,P,y,x,Pe],encapsulation:2})}return a})();var N=(()=>{class a{getItems(){return[{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",email:"james@johnson.com",telephone:"1-541-754-3010",jobDescription:"Systems Analyst",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",email:"brian@brown.com",telephone:"1-543-456-9876",jobDescription:"Trainee",url:"https://po-ui.io/"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",email:"mary@davis.com",telephone:"1-521-223-3232",jobDescription:"Programmer"},{hireStatus:"progress",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",email:"margaret@garcia.com",telephone:"1-541-344-2211",jobDescription:"Web developer",url:"https://po-ui.io/"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",email:"emma@hall.com",telephone:"1-555-321-3234",jobDescription:"Recruiter",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",email:"lucas@clark.com",telephone:"1-541-322-4343",jobDescription:"Consultant"},{hireStatus:"progress",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",email:"ella@scott.com",telephone:"1-229-324-3434",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",email:"chloe@walker.com",telephone:"1-518-222-1212",jobDescription:"Programmer"}]}static \u0275fac=function(l){return new(l||a)};static \u0275prov=$({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ge=["detailsModal"];function Ue(a,f){if(a&1&&(t(0,"div",6),s(1,"po-info",14)(2,"po-info",15)(3,"po-info",16),te(4,"uppercase"),e()),a&2){let o=f.$implicit;r(),m("p-value",o.idCard),r(),m("p-value",o.jobDescription),r(),Q("p-value",ie(4,3,o.hireStatus))}}function Je(a,f){if(a&1&&(t(0,"div",6),s(1,"po-info",17)(2,"po-info",18),e()),a&2){let o=f.$implicit;r(),m("p-value",o.age),r(),m("p-value",o.city)}}var _e=(()=>{class a{poNotification;hiringProcessesService;detailsModalElement;hiringProcesses;hiringProcessesFiltered;labelFilter="";modalDetail=!1;selectedActionItem={};titleDetailsModal="User Detail";actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),icon:"an an-check"},{label:"Cancel",action:this.cancelCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),type:"danger",icon:"an an-x"}];pageActions=[{label:"Hire selected",action:this.updateCandidates.bind(this,this.hireCandidate),disabled:this.disableHireButton.bind(this),icon:"an an-check"},{label:"Cancel selected",action:this.updateCandidates.bind(this,this.cancelCandidate),disabled:this.disableHireButton.bind(this),icon:"an an-x"}];filterSettings={action:this.hiringProcessesFilter.bind(this),placeholder:"Search"};constructor(o,l){this.poNotification=o,this.hiringProcessesService=l}ngOnInit(){this.hiringProcesses=this.hiringProcessesService.getItems(),this.hiringProcessesFiltered=[...this.hiringProcesses]}formatTitle(o){return`${o.idCard} - ${o.name}`}showDetail(o){return o.url}showDetailModal(o){this.setModalItem(o),this.detailsModalElement.open()}cancelCandidate(o){o.hireStatus="canceled",this.poNotification.error("Canceled candidate!")}disableHireButton(){return!this.hiringProcesses.find(o=>o.$selected)}hireCandidate(o){o.hireStatus="hired",this.poNotification.success("Hired candidate!")}hiringProcessesFilter(o){let l=typeof o=="string"?[o]:[...o];this.hiringProcessesFiltered=this.hiringProcesses.filter(n=>Object.keys(n).some(d=>!(n[d]instanceof Object)&&this.includeFilter(n[d],l)))}includeFilter(o,l){return l.some(n=>String(o).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}isHiredOrCanceled(o){return o.hireStatus==="hired"||o.hireStatus==="canceled"}setModalItem(o){this.selectedActionItem=o,this.titleDetailsModal=`Get in touch with ${this.selectedActionItem.name}`}updateCandidates(o){this.hiringProcesses.forEach(l=>{if(l.$selected){switch(l.hireStatus){case"progress":o.call(this,l);break;case"hired":this.poNotification.warning("This candidate has already been hired.");break;case"canceled":this.poNotification.error("This candidate has already been disqualified.");break}l.$selected=!1}})}static \u0275fac=function(l){return new(l||a)(C(B),C(N))};static \u0275cmp=b({type:a,selectors:[["sample-po-list-view-hiring-processes"]],viewQuery:function(l,n){if(l&1&&Y(Ge,7),l&2){let d;Z(d=K())&&(n.detailsModalElement=d.first)}},standalone:!1,features:[X([N])],decls:16,vars:11,consts:[["detailsModal",""],["p-title","Hiring processes",3,"p-actions","p-filter"],["p-hide-select-all","","p-property-link","url","p-property-title","name","p-select","",3,"p-title-action","p-actions","p-items"],["p-list-view-content-template","",3,"p-title"],["p-list-view-detail-template","",3,"p-show-detail"],[3,"p-title"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl","p-src","assets/graphics/avatar2.png"],[1,"po-md-7","po-lg-8"],[1,"po-mb-1"],[3,"p-value","p-type"],["p-label","Email",3,"p-value"],["p-label","Telephone",3,"p-value"],["p-label","Id Card",1,"po-lg-4",3,"p-value"],["p-label","Job description",1,"po-lg-4",3,"p-value"],["p-label","Hire status",1,"po-lg-4",3,"p-value"],["p-label","Age",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"]],template:function(l,n){if(l&1){let d=H();t(0,"po-page-list",1)(1,"po-list-view",2),g("p-title-action",function(p){return c(d),u(n.showDetailModal(p))}),L(2,Ue,5,5,"ng-template",3)(3,Je,3,2,"ng-template",4),e(),t(4,"po-modal",5,0)(6,"div",6)(7,"div",7),s(8,"po-avatar",8),e(),t(9,"div",9)(10,"div",10),s(11,"po-tag",11),e(),t(12,"div",10),s(13,"po-info",12),e(),t(14,"div",10),s(15,"po-info",13),e()()()()()}l&2&&(m("p-actions",n.pageActions)("p-filter",n.filterSettings),r(),m("p-actions",n.actions)("p-items",n.hiringProcessesFiltered),r(),m("p-title",n.formatTitle),r(),m("p-show-detail",n.showDetail),r(),m("p-title",n.titleDetailsModal),r(7),m("p-value",n.selectedActionItem.hireStatus)("p-type",n.selectedActionItem.hireStatus==="hired"?"success":"info"),r(2),m("p-value",n.selectedActionItem.email),r(2),m("p-value",n.selectedActionItem.telephone))},dependencies:[ce,de,D,k,T,j,he,we,ne],encapsulation:2})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-list-view-hiring-processes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(s(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO List View - Hiring Processes"),e(),t(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),s(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html"),e(),t(13,"pre",7),i(14,`<po-page-list p-title="Hiring processes" [p-actions]="pageActions" [p-filter]="filterSettings">
  <po-list-view
    p-hide-select-all
    p-property-link="url"
    p-property-title="name"
    p-select
    [p-actions]="actions"
    [p-items]="hiringProcessesFiltered"
    (p-title-action)="showDetailModal($event)"
  >
    <ng-template p-list-view-content-template let-item [p-title]="formatTitle">
      <div class="po-row">
        <po-info class="po-lg-4" p-label="Id Card" [p-value]="item.idCard"></po-info>

        <po-info class="po-lg-4" p-label="Job description" [p-value]="item.jobDescription"></po-info>

        <po-info class="po-lg-4" p-label="Hire status" p-value="{ { item.hireStatus | uppercase }}"></po-info>
      </div>
    </ng-template>

    <ng-template p-list-view-detail-template let-item [p-show-detail]="showDetail">
      <div class="po-row">
        <po-info class="po-md-6" p-label="Age" [p-value]="item.age"></po-info>

        <po-info class="po-md-6" p-label="City" [p-value]="item.city"></po-info>
      </div>
    </ng-template>
  </po-list-view>

  <po-modal #detailsModal [p-title]="titleDetailsModal">
    <div class="po-row">
      <div class="po-md-5 po-lg-4">
        <po-avatar p-size="xl" p-src="assets/graphics/avatar2.png"></po-avatar>
      </div>
      <div class="po-md-7 po-lg-8">
        <div class="po-mb-1">
          <po-tag
            [p-value]="selectedActionItem['hireStatus']"
            [p-type]="selectedActionItem['hireStatus'] === 'hired' ? 'success' : 'info'"
          >
          </po-tag>
        </div>
        <div class="po-mb-1">
          <po-info p-label="Email" [p-value]="selectedActionItem['email']"> </po-info>
        </div>
        <div class="po-mb-1">
          <po-info p-label="Telephone" [p-value]="selectedActionItem['telephone']"> </po-info>
        </div>
      </div>
    </div>
  </po-modal>
</po-page-list>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import {
  PoListViewAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoPageFilter
} from '@po-ui/ng-components';

import { SamplePoListViewHiringProcessesService } from './sample-po-list-view-hiring-processes.service';

@Component({
  selector: 'sample-po-list-view-hiring-processes',
  templateUrl: 'sample-po-list-view-hiring-processes.component.html',
  providers: [SamplePoListViewHiringProcessesService],
  standalone: false
})
export class SamplePoListViewHiringProcessesComponent implements OnInit {
  @ViewChild('detailsModal', { static: true }) detailsModalElement: PoModalComponent;

  hiringProcesses: Array<any>;
  hiringProcessesFiltered: Array<object>;
  labelFilter: string = '';
  modalDetail: boolean = false;
  selectedActionItem = {};
  titleDetailsModal: string = 'User Detail';

  readonly actions: Array<PoListViewAction> = [
    {
      label: 'Hire',
      action: this.hireCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      icon: 'an an-check'
    },
    {
      label: 'Cancel',
      action: this.cancelCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      type: 'danger',
      icon: 'an an-x'
    }
  ];

  readonly pageActions: Array<PoPageAction> = [
    {
      label: 'Hire selected',
      action: this.updateCandidates.bind(this, this.hireCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'an an-check'
    },
    {
      label: 'Cancel selected',
      action: this.updateCandidates.bind(this, this.cancelCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'an an-x'
    }
  ];

  readonly filterSettings: PoPageFilter = {
    action: this.hiringProcessesFilter.bind(this),
    placeholder: 'Search'
  };

  constructor(
    private poNotification: PoNotificationService,
    private hiringProcessesService: SamplePoListViewHiringProcessesService
  ) {}

  ngOnInit() {
    this.hiringProcesses = this.hiringProcessesService.getItems();
    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  formatTitle(item) {
    return \`\${item.idCard} - \${item.name}\`;
  }

  showDetail(item) {
    return item.url;
  }

  showDetailModal(item) {
    this.setModalItem(item);
    this.detailsModalElement.open();
  }

  private cancelCandidate(selectedCandidate) {
    selectedCandidate['hireStatus'] = 'canceled';
    this.poNotification.error('Canceled candidate!');
  }

  private disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  private hireCandidate(selectedCandidate) {
    selectedCandidate['hireStatus'] = 'hired';
    this.poNotification.success('Hired candidate!');
  }

  private hiringProcessesFilter(labelFilter: string | Array<string>) {
    const filters = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];

    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  private includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  private isHiredOrCanceled(candidate): boolean {
    return candidate['hireStatus'] === 'hired' || candidate['hireStatus'] === 'canceled';
  }

  private setModalItem(listItem) {
    this.selectedActionItem = listItem;
    this.titleDetailsModal = \`Get in touch with \${this.selectedActionItem['name']}\`;
  }

  private updateCandidates(action: Function) {
    this.hiringProcesses.forEach(candidate => {
      if (candidate['$selected']) {
        switch (candidate['hireStatus']) {
          case 'progress':
            action.call(this, candidate);
            break;

          case 'hired':
            this.poNotification.warning('This candidate has already been hired.');
            break;

          case 'canceled':
            this.poNotification.error('This candidate has already been disqualified.');
            break;
        }

        candidate['$selected'] = false;
      }
    });
  }
}
`),e(),t(21,"label",6),i(22,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.service.ts"),e(),t(23,"pre",9),i(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoListViewHiringProcessesService {
  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        email: 'james@johnson.com',
        telephone: '1-541-754-3010',
        jobDescription: 'Systems Analyst',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        email: 'brian@brown.com',
        telephone: '1-543-456-9876',
        jobDescription: 'Trainee',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        email: 'mary@davis.com',
        telephone: '1-521-223-3232',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'progress',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        email: 'margaret@garcia.com',
        telephone: '1-541-344-2211',
        jobDescription: 'Web developer',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        email: 'emma@hall.com',
        telephone: '1-555-321-3234',
        jobDescription: 'Recruiter',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        email: 'lucas@clark.com',
        telephone: '1-541-322-4343',
        jobDescription: 'Consultant'
      },
      {
        hireStatus: 'progress',
        name: 'Ella Scott',
        city: 'Ontario',
        age: 24,
        idCard: 'UL78flg68',
        email: 'ella@scott.com',
        telephone: '1-229-324-3434',
        jobDescription: 'DBA'
      },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        email: 'chloe@walker.com',
        telephone: '1-518-222-1212',
        jobDescription: 'Programmer'
      }
    ];
  }
}
`),e()()()()(),t(25,"div",10),s(26,"sample-po-list-view-hiring-processes"),e(),s(27,"hr")),l&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),V(" ",n.sampleCodeButtonLabel,""),r(),m("ngClass",M(4,Qe,n.hideSampleCodeTabs)))},dependencies:[A,P,y,x,_e],encapsulation:2})}return a})();var Me=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-list-view-doc"]],standalone:!1,decls:693,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-list-view-content-template"],["href","/documentation/po-list-view-detail-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoListViewAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoListViewLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(l,n){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoListViewModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),i(6,"M\xF3dulo do componente "),t(7,"code"),i(8,"po-list-view"),e(),i(9,"."),e(),t(10,"blockquote")(11,"p"),i(12,"Para o correto funcionamento do componente "),t(13,"code"),i(14,"po-list-view"),e(),i(15,", deve ser importado o m\xF3dulo "),t(16,"code"),i(17,"BrowserAnimationsModule"),e(),i(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),e()(),t(19,"p"),i(20,"M\xF3dulo da aplica\xE7\xE3o:"),e(),t(21,"pre")(22,"code"),i(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
`),e()(),t(24,"p"),i(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),e(),t(26,"pre")(27,"code"),i(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),e()()(),t(29,"h3",3),i(30,"Componente"),e(),t(31,"h4",4)(32,"code",5),i(33,"PoListViewComponent"),e()(),t(34,"div",2)(35,"p"),i(36,`Componente de lista que recebe um array de objetos e renderiza de forma din\xE2mica os dados de
acordo com a necessidade de cada tela e deve ser utilizado em conjunto com as diretivas de `),t(37,"em"),i(38,"templates"),e(),t(39,"strong")(40,"a",6),i(41,"p-list-view-content-template"),e()(),i(42,` e
`),t(43,"strong")(44,"a",7),i(45,"p-list-view-detail-template"),e()(),i(46,"."),e(),t(47,"p"),i(48,`O componente disponibiliza uma \xE1rea espec\xEDfica para exibi\xE7\xE3o informa\xE7\xF5es adicionais,
atrav\xE9s da diretiva `),t(49,"strong")(50,"a",7),i(51,"p-list-view-detail-template"),e()(),i(52,". "),e()(),t(53,"div",8)(54,"h4",9),i(55,"Seletor"),e(),t(56,"pre",10),i(57,`<po-list-view
    p-actions="PoListViewAction[]"
    p-components-size="string"
    p-height="number"
    p-hide-select-all="boolean"
    p-items="any[]"
    p-literals="PoListViewLiterals"
    p-property-link="string"
    p-property-title="string"
    p-select="boolean"
    (p-show-detail)="EventEmitter"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    (p-title-action)="EventEmitter" >
</po-list-view>
`),e()(),t(58,"h4",11),i(59,"Propriedades"),e(),t(60,"table",12)(61,"tr",13)(62,"th",14),i(63,"Nome"),e(),t(64,"th",14),i(65,"Tipo"),e(),t(66,"th",14),i(67,"Padr\xE3o"),e(),t(68,"th",14),i(69,"Descri\xE7\xE3o"),e()(),t(70,"tr",15)(71,"td",16)(72,"div",17)(73,"span",18),i(74," p-actions"),s(75,"br"),e()()(),t(76,"td",19)(77,"code",20),i(78,"PoListViewAction[]"),e()(),t(79,"td",21),i(80,"-"),e(),t(81,"td",22)(82,"em")(83,"strong"),i(84,"(opcional)"),e()(),t(85,"p"),i(86,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),e()()(),t(87,"tr",15)(88,"td",16)(89,"div",17)(90,"span",18),i(91," p-components-size"),s(92,"br"),e()()(),t(93,"td",19)(94,"code",23),i(95,"string"),e()(),t(96,"td",21)(97,"p")(98,"code"),i(99,"medium"),e()()(),t(100,"td",22)(101,"em")(102,"strong"),i(103,"(opcional)"),e()(),t(104,"p"),i(105,"Define o tamanho dos componentes de formul\xE1rio no template:"),e(),t(106,"ul")(107,"li")(108,"code"),i(109,"small"),e(),i(110,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(111,"li")(112,"code"),i(113,"medium"),e(),i(114,": aplica a medida medium de cada componente."),e()(),t(115,"blockquote")(116,"p"),i(117,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(118,"code"),i(119,"medium"),e(),i(120,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(121,"a",24),i(122,"po-theme"),e(),i(123,"."),e()()()(),t(124,"tr",15)(125,"td",16)(126,"div",17)(127,"span",18),i(128," p-height"),s(129,"br"),e()()(),t(130,"td",19)(131,"code",25),i(132,"number"),e()(),t(133,"td",21),i(134,"-"),e(),t(135,"td",22)(136,"em")(137,"strong"),i(138,"(opcional)"),e()(),t(139,"p"),i(140,"Define a altura do "),t(141,"code"),i(142,"po-list-view"),e(),i(143," em "),t(144,"em"),i(145,"pixels"),e(),i(146,"."),e()()(),t(147,"tr",15)(148,"td",16)(149,"div",17)(150,"span",18),i(151," p-hide-select-all"),s(152,"br"),e()()(),t(153,"td",19)(154,"code",26),i(155,"boolean"),e()(),t(156,"td",21)(157,"p")(158,"code"),i(159,"false"),e()()(),t(160,"td",22)(161,"p"),i(162,"Esconde o "),t(163,"em"),i(164,"checkbox"),e(),i(165," para sele\xE7\xE3o de todos os itens."),e()()(),t(166,"tr",15)(167,"td",16)(168,"div",17)(169,"span",18),i(170," p-items"),s(171,"br"),e()()(),t(172,"td",19)(173,"code",27),i(174,"any[]"),e()(),t(175,"td",21),i(176,"-"),e(),t(177,"td",22)(178,"p"),i(179,"Lista de itens que ser\xE3o exibidos no componente."),e()()(),t(180,"tr",15)(181,"td",16)(182,"div",17)(183,"span",18),i(184," p-literals"),s(185,"br"),e()()(),t(186,"td",19)(187,"code",28),i(188,"PoListViewLiterals"),e()(),t(189,"td",21),i(190,"-"),e(),t(191,"td",22)(192,"em")(193,"strong"),i(194,"(opcional)"),e()(),t(195,"p"),i(196,"Objeto com as literais usadas no "),t(197,"code"),i(198,"po-list-view"),e(),i(199,"."),e(),t(200,"p"),i(201,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),t(202,"pre")(203,"code"),i(204,`const customLiterals: PoListViewLiterals = {
  hideDetail: 'Ocultar detalhes completamente',
  loadMoreData: 'Mais dados',
  showDetail: 'Mostrar mais detalhes',
  selectAll: 'Selecionar todos os itens'
};
`),e()(),t(205,"p"),i(206,"Ou passando apenas as literais que deseja customizar:"),e(),t(207,"pre")(208,"code"),i(209,`const customLiterals: PoListViewLiterals = {
  showDetail: 'Mostrar mais detalhes'
};
`),e()(),t(210,"p"),i(211,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),t(212,"pre")(213,"code"),i(214,`<po-list-view
  [p-literals]="customLiterals">
</po-list-view>
`),e()(),t(215,"blockquote")(216,"p"),i(217,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(218,"a",29)(219,"code"),i(220,"PoI18nService"),e()(),i(221," ou do browser."),e()()()(),t(222,"tr",15)(223,"td",16)(224,"div",17)(225,"span",18),i(226," p-property-link"),s(227,"br"),e()()(),t(228,"td",19)(229,"code",23),i(230,"string"),e()(),t(231,"td",21),i(232,"-"),e(),t(233,"td",22)(234,"em")(235,"strong"),i(236,"(opcional)"),e()(),t(237,"p"),i(238,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 usado como link para o t\xEDtulo."),e()()(),t(239,"tr",15)(240,"td",16)(241,"div",17)(242,"span",18),i(243," p-property-title"),s(244,"br"),e()()(),t(245,"td",19)(246,"code",23),i(247,"string"),e()(),t(248,"td",21),i(249,"-"),e(),t(250,"td",22)(251,"em")(252,"strong"),i(253,"(opcional)"),e()(),t(254,"p"),i(255,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 exibido como o t\xEDtulo de cada item."),e()()(),t(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),i(260," p-select"),s(261,"br"),e()()(),t(262,"td",19)(263,"code",26),i(264,"boolean"),e()(),t(265,"td",21)(266,"p")(267,"code"),i(268,"false"),e()()(),t(269,"td",22)(270,"em")(271,"strong"),i(272,"(opcional)"),e()(),t(273,"p"),i(274,"Habilita um "),t(275,"em"),i(276,"checkbox"),e(),i(277," para cada item da lista. Todos os items possuem a propriedade din\xE2mica "),t(278,"code"),i(279,"$selected"),e(),i(280,` para identificar se o
item est\xE1 selecionado, por exemplo:`),e(),t(281,"pre")(282,"code"),i(283,`item.$selected

// ou

item['$selected']
`),e()()()(),t(284,"tr",15)(285,"td",16)(286,"div",30)(287,"span",31),i(288," (p-show-detail)"),s(289,"br"),e()()(),t(290,"td",19)(291,"code",32),i(292,"EventEmitter"),e()(),t(293,"td",21),i(294,"-"),e(),t(295,"td",22)(296,"em")(297,"strong"),i(298,"(opcional)"),e()(),t(299,"p"),i(300,"A\xE7\xE3o que ser\xE1 executada ao clicar no bot\xE3o exibir detalhes."),e(),t(301,"p"),i(302,"Ao ser disparado, o m\xE9todo passa como par\xE2metros os detalhes que ser\xE3o exibidos."),e()()(),t(303,"tr",15)(304,"td",16)(305,"div",30)(306,"span",31),i(307," (p-show-more)"),s(308,"br"),e()()(),t(309,"td",19)(310,"code",32),i(311,"EventEmitter"),e()(),t(312,"td",21),i(313,"-"),e(),t(314,"td",22)(315,"em")(316,"strong"),i(317,"(opcional)"),e()(),t(318,"p"),i(319,'Recebe uma a\xE7\xE3o, que ser\xE1 executada quando clicar no bot\xE3o "Carregar mais resultados".'),e(),t(320,"blockquote")(321,"p"),i(322,"Caso nenhuma a\xE7\xE3o for definida o mesmo n\xE3o ficar\xE1 vis\xEDvel."),e()()()(),t(323,"tr",15)(324,"td",16)(325,"div",17)(326,"span",18),i(327," p-show-more-disabled"),s(328,"br"),e()()(),t(329,"td",19)(330,"code",26),i(331,"boolean"),e()(),t(332,"td",21),i(333,"-"),e(),t(334,"td",22)(335,"em")(336,"strong"),i(337,"(opcional)"),e()(),t(338,"p"),i(339,"Indica que o bot\xE3o "),t(340,"code"),i(341,"Carregar Mais Resultados"),e(),i(342," ser\xE1 desabilitado."),e()()(),t(343,"tr",15)(344,"td",16)(345,"div",30)(346,"span",31),i(347," (p-title-action)"),s(348,"br"),e()()(),t(349,"td",19)(350,"code",32),i(351,"EventEmitter"),e()(),t(352,"td",21),i(353,"-"),e(),t(354,"td",22)(355,"em")(356,"strong"),i(357,"(opcional)"),e()(),t(358,"p"),i(359,"A\xE7\xE3o que ser\xE1 executada ao clicar no t\xEDtulo."),e(),t(360,"p"),i(361,"Ao ser disparado, o m\xE9todo inserido na a\xE7\xE3o ir\xE1 receber como par\xE2metro o item da lista clicado."),e()()()(),t(362,"h3"),i(363,"Interfaces"),e(),t(364,"h4",33)(365,"code",5),i(366,"PoListViewAction"),e()(),t(367,"div",2)(368,"p"),i(369,"Interface para lista de a\xE7\xF5es do componente. Interface que define as a\xE7\xF5es do componente "),t(370,"code"),i(371,"po-list-view"),e(),i(372,"."),e(),t(373,"blockquote")(374,"p"),i(375,"As propriedades "),t(376,"code"),i(377,"separator"),e(),i(378,", "),t(379,"code"),i(380,"url"),e(),i(381," e "),t(382,"code"),i(383,"selected"),e(),i(384,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),e()()(),t(385,"h4",11),i(386,"Propriedades"),e(),t(387,"table",12)(388,"tr",13)(389,"th",14),i(390,"Nome"),e(),t(391,"th",14),i(392,"Tipo"),e(),t(393,"th",14),i(394,"Descri\xE7\xE3o"),e()(),t(395,"tr",15)(396,"td",16)(397,"div",17)(398,"span",18),i(399," action"),s(400,"br"),e()()(),t(401,"td",19)(402,"code",34),i(403,"Function"),e()(),t(404,"td",22)(405,"em")(406,"strong"),i(407,"(opcional)"),e()(),t(408,"p"),i(409,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),e(),t(410,"blockquote")(411,"p"),i(412,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),t(413,"em"),i(414,"bind"),e(),i(415,"."),e()(),t(416,"p"),i(417,"Exemplo: "),t(418,"code"),i(419,"action: this.myFunction.bind(this)"),e()()()(),t(420,"tr",15)(421,"td",16)(422,"div",17)(423,"span",18),i(424," disabled"),s(425,"br"),e()()(),t(426,"td",19)(427,"code",26),i(428,"boolean "),e(),t(429,"code",34),i(430," Function"),e()(),t(431,"td",22)(432,"em")(433,"strong"),i(434,"(opcional)"),e()(),t(435,"p"),i(436,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),e(),t(437,"p"),i(438,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),e()()(),t(439,"tr",15)(440,"td",16)(441,"div",17)(442,"span",18),i(443," icon"),s(444,"br"),e()()(),t(445,"td",19)(446,"code",23),i(447,"string "),e(),t(448,"code",35),i(449," TemplateRef<void>"),e()(),t(450,"td",22)(451,"em")(452,"strong"),i(453,"(opcional)"),e()(),t(454,"p"),i(455,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),e(),t(456,"p"),i(457,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(458,"a",36),i(459,"Biblioteca de \xEDcones"),e(),i(460,". conforme exemplo abaixo:"),e(),t(461,"pre")(462,"code"),i(463,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),e()(),t(464,"p"),i(465,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),e(),t(466,"pre")(467,"code"),i(468,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),e()(),t(469,"p"),i(470,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(471,"code"),i(472,"TemplateRef"),e(),i(473,`, conforme exemplo abaixo:
component.html:`),e(),t(474,"pre")(475,"code"),i(476,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),e()(),t(477,"p"),i(478,"component.ts:"),e(),t(479,"pre")(480,"code"),i(481,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),e()()()(),t(482,"tr",15)(483,"td",16)(484,"div",17)(485,"span",18),i(486," label"),s(487,"br"),e()()(),t(488,"td",19)(489,"code",23),i(490,"string"),e()(),t(491,"td",22)(492,"p"),i(493,"R\xF3tulo da a\xE7\xE3o."),e()()(),t(494,"tr",15)(495,"td",16)(496,"div",17)(497,"span",18),i(498," selected"),s(499,"br"),e()()(),t(500,"td",19)(501,"code",26),i(502,"boolean"),e()(),t(503,"td",22)(504,"em")(505,"strong"),i(506,"(opcional)"),e()(),t(507,"p"),i(508,"Define se a a\xE7\xE3o est\xE1 selecionada."),e()()(),t(509,"tr",15)(510,"td",16)(511,"div",17)(512,"span",18),i(513," separator"),s(514,"br"),e()()(),t(515,"td",19)(516,"code",26),i(517,"boolean"),e()(),t(518,"td",22)(519,"em")(520,"strong"),i(521,"(opcional)"),e()(),t(522,"p"),i(523,"Atribui uma linha separadora acima do item."),e()()(),t(524,"tr",15)(525,"td",16)(526,"div",17)(527,"span",18),i(528," type"),s(529,"br"),e()()(),t(530,"td",19)(531,"code",23),i(532,"string"),e()(),t(533,"td",22)(534,"em")(535,"strong"),i(536,"(opcional)"),e()(),t(537,"p"),i(538,"Define a cor do item, sendo "),t(539,"code"),i(540,"default"),e(),i(541," o padr\xE3o."),e(),t(542,"p"),i(543,"Valores v\xE1lidos:"),e(),t(544,"ul")(545,"li")(546,"code"),i(547,"default"),e()(),t(548,"li")(549,"code"),i(550,"danger"),e(),i(551," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),e()()()(),t(552,"tr",15)(553,"td",16)(554,"div",17)(555,"span",18),i(556," url"),s(557,"br"),e()()(),t(558,"td",19)(559,"code",23),i(560,"string"),e()(),t(561,"td",22)(562,"em")(563,"strong"),i(564,"(opcional)"),e()(),t(565,"p"),i(566,"URL utilizada no redirecionamento das p\xE1ginas."),e()()(),t(567,"tr",15)(568,"td",16)(569,"div",17)(570,"span",18),i(571," visible"),s(572,"br"),e()()(),t(573,"td",19)(574,"code",26),i(575,"boolean "),e(),t(576,"code",34),i(577," Function"),e()(),t(578,"td",22)(579,"em")(580,"strong"),i(581,"(opcional)"),e()(),t(582,"p"),i(583,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),e(),t(584,"blockquote")(585,"p"),i(586,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),e()(),t(587,"p"),i(588,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),e(),t(589,"ul")(590,"li")(591,"p"),i(592,"Fun\xE7\xE3o que deve retornar um booleano."),e()(),t(593,"li")(594,"p"),i(595,"Informar diretamente um valor booleano."),e()()()()()(),t(596,"h4",33)(597,"code",5),i(598,"PoListViewLiterals"),e()(),t(599,"div",2)(600,"p"),i(601,"Interface para defini\xE7\xE3o das literais usadas no "),t(602,"code"),i(603,"po-list-view"),e(),i(604,"."),e()(),t(605,"h4",11),i(606,"Propriedades"),e(),t(607,"table",12)(608,"tr",13)(609,"th",14),i(610,"Nome"),e(),t(611,"th",14),i(612,"Tipo"),e(),t(613,"th",14),i(614,"Descri\xE7\xE3o"),e()(),t(615,"tr",15)(616,"td",16)(617,"div",17)(618,"span",18),i(619," hideDetails"),s(620,"br"),e()()(),t(621,"td",19)(622,"code",23),i(623,"string"),e()(),t(624,"td",22)(625,"em")(626,"strong"),i(627,"(opcional)"),e()(),t(628,"p"),i(629,"R\xF3tulo do bot\xE3o que oculta os detalhes do item."),e()()(),t(630,"tr",15)(631,"td",16)(632,"div",17)(633,"span",18),i(634," loadMoreData"),s(635,"br"),e()()(),t(636,"td",19)(637,"code",23),i(638,"string"),e()(),t(639,"td",22)(640,"em")(641,"strong"),i(642,"(opcional)"),e()(),t(643,"p"),i(644,"R\xF3tulo do bot\xE3o que deve carregar mais resultados."),e()()(),t(645,"tr",15)(646,"td",16)(647,"div",17)(648,"span",18),i(649," noData"),s(650,"br"),e()()(),t(651,"td",19)(652,"code",23),i(653,"string"),e()(),t(654,"td",22)(655,"em")(656,"strong"),i(657,"(opcional)"),e()(),t(658,"p"),i(659,"R\xF3tulo exibido quando n\xE3o existem itens para serem exibidos na lista."),e()()(),t(660,"tr",15)(661,"td",16)(662,"div",17)(663,"span",18),i(664," selectAll"),s(665,"br"),e()()(),t(666,"td",19)(667,"code",23),i(668,"string"),e()(),t(669,"td",22)(670,"em")(671,"strong"),i(672,"(opcional)"),e()(),t(673,"p"),i(674,"R\xF3tulo do "),t(675,"code"),i(676,"checkbox"),e(),i(677," da op\xE7\xE3o de selecionar todos."),e()()(),t(678,"tr",15)(679,"td",16)(680,"div",17)(681,"span",18),i(682," showDetails"),s(683,"br"),e()()(),t(684,"td",19)(685,"code",23),i(686,"string"),e()(),t(687,"td",22)(688,"em")(689,"strong"),i(690,"(opcional)"),e()(),t(691,"p"),i(692,"R\xF3tulo do bot\xE3o que exibe os detalhes do item."),e()()()()())},dependencies:[P],encapsulation:2})}return a})();var Ae=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(C(pe),C(me))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","List View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return n.changeTab("doc")}),s(3,"sample-po-list-view-doc"),e(),t(4,"po-tab",3),g("p-click",function(){return n.changeTab("web")}),s(5,"sample-po-list-view-basic-view")(6,"sample-po-list-view-labs-view")(7,"sample-po-list-view-hiring-processes-view"),e()()()),l&2&&(m("p-actions",n.actions),r(2),m("p-active",n.activeTab==="doc"),r(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[fe,y,x,xe,Le,Ve,Me],encapsulation:2})}return a})();var Ke=[{path:"",component:Ae}],De=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=I({type:a});static \u0275inj=O({imports:[W.forChild(Ke),W]})}return a})();var Pt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=I({type:a});static \u0275inj=O({imports:[Ce,De]})}return a})();export{Pt as DocPoListViewModule};
