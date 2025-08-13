import{o as x,p as de}from"./chunk-MMZVQUBQ.js";import{Aa as ae,Ab as C,F as $,Ga as oe,I as ee,K as te,Ka as re,Ra as le,T as W,Wa as se,ha as q,ja as ie,nb as me,qb as D,ta as ne,zb as y}from"./chunk-522XRIZO.js";import{Ac as O,Ba as w,Bc as j,Fa as i,Ga as t,Ha as r,L as Y,La as k,M as F,Ma as E,Oc as Z,Qc as G,Sc as U,T as p,U as c,Ua as N,Va as z,Wa as J,Xa as T,Ya as e,_a as L,ab as b,bb as h,cb as S,db as K,fb as _,ha as m,ia as P,oa as f,pa as B,sc as X,vb as M,xc as H,ya as g,yc as V,zc as I}from"./chunk-WFKG4FNY.js";var pe=(()=>{class s{static \u0275fac=function(o){return new(o||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page List"]],template:function(o,n){o&1&&r(0,"po-page-list",0)},dependencies:[D],encapsulation:2})}return s})();var Ce=s=>({"docs-sample-code-tabs":s}),ue=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(r(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List Basic"),t(),i(4,"a",2),E("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-basic/sample-po-page-list-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-basic/sample-po-page-list-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),t()()()()(),i(21,"div",10),r(22,"sample-po-page-list-basic"),t(),r(23,"hr")),o&2&&(m(5),w("po-icon "+n.sampleCodeButtonIcon),m(),L(" ",n.sampleCodeButtonLabel,""),m(),g("ngClass",_(4,Ce,n.hideSampleCodeTabs)))},dependencies:[M,x,y,C,pe],encapsulation:2})}return s})();var ge=(()=>{class s{poNotification;action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];constructor(l){this.poNotification=l}ngOnInit(){this.restore()}addAction(l){let o=Object.assign({},l);o.action=o.action?this.showAction.bind(this,o.action):void 0,this.actions=[...this.actions,o],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={}}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel()}addDisclaimerGroupParam(l,o){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:o})}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l)}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=!1,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals="",this.title="PO Page List",this.subtitle="",this.restoreDisclaimerModel(),this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`)}static \u0275fac=function(o){return new(o||s)(P(W))};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-labs"]],standalone:!1,decls:60,vars:40,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formDisclaimers","ngForm"],["form","ngForm"],[3,"p-actions","p-breadcrumb","p-components-size","p-disclaimer-group","p-filter","p-literals","p-title","p-subtitle"],["p-label","Model",3,"p-value"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","disclaimerGroupTitle","p-clean","","p-label","Disclaimer group title",1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","disclaimerGroupHideRemoveAll","p-label","Disclaimer group hide remove all","ngDefaultControl","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","disclaimerLabel","p-clean","","p-label","Disclaimer label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-clean","","p-label","Disclaimer property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-clean","","p-label","Disclaimer value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer hide close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add disclaimer",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterPlaceholder","p-label","Filter placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterWidth","p-label","Filter width",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(o,n){if(o&1){let d=k();i(0,"po-page-list",6),r(1,"hr")(2,"po-info",7),t(),r(3,"hr"),i(4,"form",null,0)(6,"div",8)(7,"po-input",9),S("ngModelChange",function(a){return p(d),h(n.action.action,a)||(n.action.action=a),c(a)}),t(),i(8,"po-input",10),S("ngModelChange",function(a){return p(d),h(n.action.label,a)||(n.action.label=a),c(a)}),t(),i(9,"po-input",11),S("ngModelChange",function(a){return p(d),h(n.action.url,a)||(n.action.url=a),c(a)}),t(),i(10,"po-select",12),S("ngModelChange",function(a){return p(d),h(n.action.type,a)||(n.action.type=a),c(a)}),t(),i(11,"po-select",13),S("ngModelChange",function(a){return p(d),h(n.action.icon,a)||(n.action.icon=a),c(a)}),t(),i(12,"po-checkbox-group",14),S("ngModelChange",function(a){return p(d),h(n.action,a)||(n.action=a),c(a)}),t()(),i(13,"div",8)(14,"po-button",15),E("p-click",function(){return p(d),c(n.addAction(n.action))}),t()()(),r(15,"hr"),i(16,"form",null,1)(18,"div",8)(19,"po-input",16),S("ngModelChange",function(a){return p(d),h(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),c(a)}),t()()(),i(20,"form",null,2)(22,"div",8)(23,"po-input",17),S("ngModelChange",function(a){return p(d),h(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),c(a)}),t(),i(24,"po-input",18),S("ngModelChange",function(a){return p(d),h(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),c(a)}),t()(),i(25,"div",8)(26,"po-button",19),E("p-click",function(){return p(d),c(n.addBreadcrumbItem())}),t()()(),r(27,"hr"),i(28,"form",null,3)(30,"div",8)(31,"po-input",20),S("ngModelChange",function(a){return p(d),h(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),c(a)}),t(),i(32,"po-input",21),S("ngModelChange",function(a){return p(d),h(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),c(a)}),t()(),i(33,"div",8)(34,"po-button",22),E("p-click",function(){return p(d),c(n.addBreadcrumbParam())}),t()()(),r(35,"hr"),i(36,"div",8)(37,"po-input",23),S("ngModelChange",function(a){return p(d),h(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),c(a)}),E("p-change-model",function(){return p(d),c(n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll))}),t(),i(38,"po-switch",24),S("ngModelChange",function(a){return p(d),h(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),c(a)}),E("p-change",function(a){return p(d),c(n.onChangeDisclaimerGroupHideRemoveAll(a))}),t()(),i(39,"form",null,4)(41,"div",8)(42,"po-input",25),S("ngModelChange",function(a){return p(d),h(n.disclaimerLabel,a)||(n.disclaimerLabel=a),c(a)}),t(),i(43,"po-input",26),S("ngModelChange",function(a){return p(d),h(n.disclaimerProperty,a)||(n.disclaimerProperty=a),c(a)}),t()(),i(44,"div",8)(45,"po-input",27),S("ngModelChange",function(a){return p(d),h(n.disclaimerValue,a)||(n.disclaimerValue=a),c(a)}),t(),i(46,"po-switch",28),S("ngModelChange",function(a){return p(d),h(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),c(a)}),t()(),i(47,"div",8)(48,"po-button",29),E("p-click",function(){return p(d),c(n.addDisclaimer())}),t()()(),r(49,"hr"),i(50,"form",null,5)(52,"po-input",30),S("ngModelChange",function(a){return p(d),h(n.title,a)||(n.title=a),c(a)}),t(),i(53,"po-input",31),S("ngModelChange",function(a){return p(d),h(n.subtitle,a)||(n.subtitle=a),c(a)}),t(),i(54,"po-input",32),S("ngModelChange",function(a){return p(d),h(n.filter.placeholder,a)||(n.filter.placeholder=a),c(a)}),t(),i(55,"po-input",33),S("ngModelChange",function(a){return p(d),h(n.filter.width,a)||(n.filter.width=a),c(a)}),t(),i(56,"po-input",34),S("ngModelChange",function(a){return p(d),h(n.literals,a)||(n.literals=a),c(a)}),E("p-change",function(){return p(d),c(n.changeLiterals())}),t(),i(57,"po-radio-group",35),S("ngModelChange",function(a){return p(d),h(n.componentsSize,a)||(n.componentsSize=a),c(a)}),t(),i(58,"div",8)(59,"po-button",36),E("p-click",function(){return p(d),c(n.restore())}),t()()()}if(o&2){let d=T(5),u=T(21),a=T(29),ve=T(40);g("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filter)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),m(2),g("p-value",n.filterModel),m(5),b("ngModel",n.action.action),m(),b("ngModel",n.action.label),m(),b("ngModel",n.action.url),m(),b("ngModel",n.action.type),g("p-options",n.typeOptions),m(),b("ngModel",n.action.icon),g("p-options",n.iconOptions),m(),b("ngModel",n.action),g("p-options",n.actionOptions),m(2),g("p-disabled",d.form.invalid),m(5),b("ngModel",n.breadcrumb.favorite),m(4),b("ngModel",n.breadcrumbItem.label),m(),b("ngModel",n.breadcrumbItem.link),m(2),g("p-disabled",u.invalid),m(5),b("ngModel",n.breadcrumbParams.property),m(),b("ngModel",n.breadcrumbParams.value),m(2),g("p-disabled",a.invalid),m(3),b("ngModel",n.disclaimerGroupTitle),m(),b("ngModel",n.disclaimerGroupHideRemoveAll),m(4),b("ngModel",n.disclaimerLabel),m(),b("ngModel",n.disclaimerProperty),m(2),b("ngModel",n.disclaimerValue),m(),b("ngModel",n.disclaimerHideClose),m(2),g("p-disabled",ve.invalid),m(4),b("ngModel",n.title),m(),b("ngModel",n.subtitle),m(),b("ngModel",n.filter.placeholder),m(),b("ngModel",n.filter.width),m(),b("ngModel",n.literals),m(),b("ngModel",n.componentsSize),g("p-options",n.componentsSizeOptions)}},dependencies:[j,X,H,V,O,I,$,q,ie,oe,le,ne,se,D],encapsulation:2})}return s})();var _e=s=>({"docs-sample-code-tabs":s}),be=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(r(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List Labs"),t(),i(4,"a",2),E("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-labs/sample-po-page-list-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filter"
  [p-literals]="customLiterals"
  [p-title]="title"
  [p-subtitle]="subtitle"
>
  <hr />

  <po-info p-label="Model" [p-value]="filterModel"> </po-info>
</po-page-list>

<hr />

<form #formAction="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-lg-3 po-md-6" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-lg-3 po-md-6" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
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
      class="po-lg-3 po-md-4"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<hr />

<form #formBreadcrumbFavorite="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="breadcrumbFavorite"
      [(ngModel)]="breadcrumb.favorite"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/favorite"
      p-label="Breadcrumb favorite"
    >
    </po-input>
  </div>
</form>

<form #formBreadcrumbItems="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbItemLabel"
      [(ngModel)]="breadcrumbItem.label"
      p-clean
      p-label="Breadcrumb item label"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbItemLink"
      [(ngModel)]="breadcrumbItem.link"
      p-clean
      p-label="Breadcrumb item link"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb item"
      [p-disabled]="formBreadcrumbItems.invalid"
      (p-click)="addBreadcrumbItem()"
    >
    </po-button>
  </div>
</form>

<hr />

<form #formBreadcrumbParams="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbParamsProperty"
      [(ngModel)]="breadcrumbParams.property"
      p-clean
      p-label="Breadcrumb params property"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbParamsValue"
      [(ngModel)]="breadcrumbParams.value"
      p-clean
      p-label="Breadcrumb params value"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb params"
      [p-disabled]="formBreadcrumbParams.invalid"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<hr />

<div class="po-row">
  <po-input
    class="po-md-6"
    name="disclaimerGroupTitle"
    [(ngModel)]="disclaimerGroupTitle"
    p-clean
    p-label="Disclaimer group title"
    (p-change-model)="addDisclaimerGroupParam(disclaimerGroupTitle, disclaimerGroupHideRemoveAll)"
  >
  </po-input>

  <po-switch
    class="po-md-6"
    name="disclaimerGroupHideRemoveAll"
    [(ngModel)]="disclaimerGroupHideRemoveAll"
    p-label="Disclaimer group hide remove all"
    (p-change)="onChangeDisclaimerGroupHideRemoveAll($event)"
    ngDefaultControl
  >
  </po-switch>
</div>

<form #formDisclaimers="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerLabel" [(ngModel)]="disclaimerLabel" p-clean p-label="Disclaimer label">
    </po-input>

    <po-input
      class="po-md-6"
      name="disclaimerProperty"
      [(ngModel)]="disclaimerProperty"
      p-clean
      p-label="Disclaimer property"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="disclaimerValue"
      [(ngModel)]="disclaimerValue"
      p-clean
      p-label="Disclaimer value"
      p-required
    >
    </po-input>

    <po-switch
      class="po-md-6"
      name="disclaimerHideClose"
      [(ngModel)]="disclaimerHideClose"
      p-label="Disclaimer hide close"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add disclaimer"
      [p-disabled]="formDisclaimers.invalid"
      (p-click)="addDisclaimer()"
    >
    </po-button>
  </div>
</form>

<hr />

<form #form="ngForm">
  <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>
  <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

  <po-input class="po-md-6" name="filterPlaceholder" [(ngModel)]="filter.placeholder" p-label="Filter placeholder">
  </po-input>

  <po-input class="po-md-6" name="filterWidth" [(ngModel)]="filter.width" p-label="Filter width"> </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"otherActions": "Mais a\xE7\xF5es"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-labs/sample-po-page-list-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

import { PoNotificationService, PoPageAction, PoPageFilter, PoPageListLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-list-labs',
  templateUrl: './sample-po-page-list-labs.component.html',
  standalone: false
})
export class SamplePoPageListLabsComponent implements OnInit {
  action: PoPageAction;
  actions: Array<PoPageAction>;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageListLiterals;
  disclaimerGroupHideRemoveAll: boolean;
  disclaimerGroupTitle: string;
  disclaimerHideClose: boolean;
  disclaimerLabel: string;
  disclaimerProperty: string;
  disclaimerValue: string;
  filterModel: string;
  literals: string;
  title: string;
  subtitle: string;

  public disclaimerGroup;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly filter: PoPageFilter = {
    action: this.showAction.bind(this),
    advancedAction: this.showAdvanceAction.bind(this)
  };

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPageAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = { [this.breadcrumbParams.property]: this.breadcrumbParams.value };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  addDisclaimer() {
    this.disclaimerGroup.disclaimers = [
      ...this.disclaimerGroup.disclaimers,
      {
        label: this.disclaimerLabel,
        property: this.disclaimerProperty,
        hideClose: this.disclaimerHideClose,
        value: this.disclaimerValue
      }
    ];

    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup);

    this.restoreDisclaimerModel();
  }

  addDisclaimerGroupParam(title, hideRemoveAll) {
    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup, {
      title,
      hideRemoveAll
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onChangeDisclaimerGroupHideRemoveAll(hideRemoveAll: boolean) {
    this.addDisclaimerGroupParam(this.disclaimerGroupTitle, hideRemoveAll);
  }

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.disclaimerGroup = {
      title: this.disclaimerGroupTitle,
      disclaimers: [],
      hideRemoveAll: this.disclaimerGroupHideRemoveAll
    };
    this.disclaimerGroupHideRemoveAll = false;
    this.disclaimerGroupTitle = undefined;
    this.filterModel = undefined;
    this.filter.placeholder = undefined;
    this.filter.width = undefined;
    this.literals = '';
    this.title = 'PO Page List';
    this.subtitle = '';

    this.restoreDisclaimerModel();
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  restoreDisclaimerModel() {
    this.disclaimerHideClose = undefined;
    this.disclaimerLabel = undefined;
    this.disclaimerProperty = undefined;
    this.disclaimerValue = undefined;
  }

  showAction(filter) {
    this.poNotification.success(\`Action clicked: \${filter}\`);
  }

  showAdvanceAction(filter) {
    this.poNotification.success(\`Advance Action clicked: \${filter}\`);
  }
}
`),t()()()()(),i(21,"div",10),r(22,"sample-po-page-list-labs"),t(),r(23,"hr")),o&2&&(m(5),w("po-icon "+n.sampleCodeButtonIcon),m(),L(" ",n.sampleCodeButtonLabel,""),m(),g("ngClass",_(4,_e,n.hideSampleCodeTabs)))},dependencies:[M,x,y,C,ge],encapsulation:2})}return s})();var R=(()=>{class s{getColumns(){return[{property:"hireStatus",label:"Status",type:"subtitle",subtitles:[{value:"hired",color:"success",label:"Hired",content:"1"},{value:"progress",color:"warning",label:"Progress",content:"2"},{value:"canceled",color:"danger",label:"Canceled",content:"3"}]},{property:"idCard",label:"Identity card",type:"string"},{property:"name",label:"Name"},{property:"age",label:"Age"},{property:"city",label:"City"},{property:"jobDescription",label:"Job description",type:"string"}]}getHireStatus(){return[{value:"hired",label:"Hired"},{value:"progress",label:"Progress"},{value:"canceled",label:"Canceled"}]}getItems(){return[{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",jobDescription:"Systems Analyst"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",jobDescription:"Trainee"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",jobDescription:"Programmer"},{hireStatus:"hired",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",jobDescription:"Web developer"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",jobDescription:"Recruiter"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",jobDescription:"Consultant"},{hireStatus:"hired",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",jobDescription:"Programmer"}]}getJobs(){return[{value:"Systems Analyst",label:"Systems Analyst"},{value:"Trainee",label:"Trainee"},{value:"Programmer",label:"Programmer"},{value:"Web Developer",label:"Web developer"},{value:"Recruiter",label:"Recruiter"},{value:"Consultant",label:"Consultant"},{value:"DBA",label:"DBA"}]}static \u0275fac=function(o){return new(o||s)};static \u0275prov=Y({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var Te=["advancedFilterModal"],Fe=["poPageList"],he=(()=>{class s{sampleHiringProcessesService;poNotification;poDialog;router;advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter="";status=[];statusOptions;actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:"Legislation",url:"https://www.usa.gov/labor-laws"}];breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"Hiring processes"}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l)},label:"Apply filters"};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:"Search"};disclaimers=[];constructor(l,o,n,d){this.sampleHiringProcessesService=l,this.poNotification=o,this.poDialog=n,this.router=d}ngOnInit(){this.disclaimerGroup={title:"Filters",disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses]}advancedFilterActionModal(){this.advancedFilterModal.open()}disableHireButton(){return!this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(o=>o.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess()}filterAction(l){let o=typeof l=="string"?[l]:[...l];this.populateDisclaimers(o),this.filter()}hireCandidate(){let l=this.hiringProcesses.find(o=>o.$selected);switch(l.hireStatus){case"progress":l.hireStatus="hired",this.poNotification.success("Hired candidate!");break;case"hired":this.poNotification.warning("This candidate has already been hired.");break;case"canceled":this.poNotification.error("This candidate has already been disqualified.");break}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(o=>Object.keys(o).some(n=>!(o[n]instanceof Object)&&this.includeFilter(o[n],l)))}includeFilter(l,o){return o.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter()}onClearDisclaimer(l){l.removedDisclaimer.property==="search"&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter()}populateDisclaimers(l){let o=l.length>1?"advanced":"search";this.disclaimers=l.map(n=>({value:n,property:o})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[]}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[]}beforeRedirect(l){this.hiringProcesses.some(o=>o.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:"There is data selected. Are you sure you want to quit?",confirm:()=>this.router.navigate(["/"])}):this.router.navigate(["/"])}static \u0275fac=function(o){return new(o||s)(P(R),P(W),P(te),P(G))};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-hiring-processes"]],viewQuery:function(o,n){if(o&1&&(N(Te,7),N(Fe,7)),o&2){let d;z(d=J())&&(n.advancedFilterModal=d.first),z(d=J())&&(n.poPageList=d.first)}},standalone:!1,features:[K([R])],decls:9,vars:15,consts:[["poPageList",""],["advancedFilterModal",""],["f","ngForm"],["p-title","Hiring processes",3,"p-actions","p-breadcrumb","p-disclaimer-group","p-filter"],[3,"p-selectable","p-single-select","p-sort","p-striped","p-columns","p-items"],["p-title","Advanced filter",3,"p-primary-action"],["name","jobDescription","p-label","Job description",3,"ngModelChange","ngModel","p-options"],["name","status","p-label","Status",3,"ngModelChange","ngModel","p-options"]],template:function(o,n){if(o&1){let d=k();i(0,"po-page-list",3,0),r(2,"po-table",4),t(),i(3,"po-modal",5,1)(5,"form",null,2)(7,"po-multiselect",6),S("ngModelChange",function(a){return p(d),h(n.jobDescription,a)||(n.jobDescription=a),c(a)}),t(),i(8,"po-checkbox-group",7),S("ngModelChange",function(a){return p(d),h(n.status,a)||(n.status=a),c(a)}),t()()()}o&2&&(g("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filterSettings),m(2),g("p-selectable",!0)("p-single-select",!0)("p-sort",!0)("p-striped",!0)("p-columns",n.hiringProcessesColumns)("p-items",n.hiringProcessesFiltered),m(),g("p-primary-action",n.advancedFilterPrimaryAction),m(4),b("ngModel",n.jobDescription),g("p-options",n.jobDescriptionOptions),m(),b("ngModel",n.status),g("p-options",n.statusOptions))},dependencies:[j,H,V,O,I,q,re,ee,D,ae],encapsulation:2})}return s})();var ke=s=>({"docs-sample-code-tabs":s}),Se=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-hiring-processes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(r(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List - Hiring Processes"),t(),i(4,"a",2),E("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list
  #poPageList
  p-title="Hiring processes"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filterSettings"
>
  <po-table
    [p-selectable]="true"
    [p-single-select]="true"
    [p-sort]="true"
    [p-striped]="true"
    [p-columns]="hiringProcessesColumns"
    [p-items]="hiringProcessesFiltered"
  >
  </po-table>
</po-page-list>

<po-modal #advancedFilterModal p-title="Advanced filter" [p-primary-action]="advancedFilterPrimaryAction">
  <form #f="ngForm">
    <po-multiselect
      name="jobDescription"
      [(ngModel)]="jobDescription"
      p-label="Job description"
      [p-options]="jobDescriptionOptions"
    >
    </po-multiselect>

    <po-checkbox-group name="status" [(ngModel)]="status" p-label="Status" [p-options]="statusOptions">
    </po-checkbox-group>
  </form>
</po-modal>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoCheckboxGroupOption, PoMultiselectOption } from '@po-ui/ng-components';

import { PoDialogService } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction, PoPageFilter } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';
import { PoPageListComponent } from '@po-ui/ng-components';

import { SamplePoPageListHiringProcessesService } from './sample-po-page-list-hiring-processes.service';

@Component({
  selector: 'sample-po-page-list-hiring-processes',
  templateUrl: './sample-po-page-list-hiring-processes.component.html',
  providers: [SamplePoPageListHiringProcessesService],
  standalone: false
})
export class SamplePoPageListHiringProcessesComponent implements OnInit {
  @ViewChild('advancedFilterModal', { static: true }) advancedFilterModal: PoModalComponent;
  @ViewChild('poPageList', { static: true }) poPageList: PoPageListComponent;

  disclaimerGroup;
  hiringProcesses: Array<object>;
  hiringProcessesColumns: Array<PoTableColumn>;
  hiringProcessesFiltered: Array<object>;
  jobDescription: Array<string> = [];
  jobDescriptionOptions: Array<PoMultiselectOption>;
  labelFilter: string = '';
  status: Array<string> = [];
  statusOptions: Array<PoCheckboxGroupOption>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Hire', action: this.hireCandidate.bind(this), disabled: this.disableHireButton.bind(this) },
    { label: 'Legislation', url: 'https://www.usa.gov/labor-laws' }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'Hiring processes' }]
  };

  public readonly advancedFilterPrimaryAction: PoModalAction = {
    action: () => {
      this.poPageList.clearInputSearch();
      this.advancedFilterModal.close();
      const filters = [...this.jobDescription, ...this.status];
      this.filterAction(filters);
    },
    label: 'Apply filters'
  };

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    advancedAction: this.advancedFilterActionModal.bind(this),
    placeholder: 'Search'
  };

  private disclaimers = [];

  constructor(
    private sampleHiringProcessesService: SamplePoPageListHiringProcessesService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService,
    private router: Router
  ) {}

  ngOnInit() {
    this.disclaimerGroup = {
      title: 'Filters',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this),
      remove: this.onClearDisclaimer.bind(this)
    };

    this.hiringProcesses = this.sampleHiringProcessesService.getItems();
    this.hiringProcessesColumns = this.sampleHiringProcessesService.getColumns();
    this.jobDescriptionOptions = this.sampleHiringProcessesService.getJobs();
    this.statusOptions = this.sampleHiringProcessesService.getHireStatus();

    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);
    filters.length ? this.hiringProcessesFilter(filters) : this.resetFilterHiringProcess();
  }

  filterAction(labelFilter: string | Array<string>) {
    const filter = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];
    this.populateDisclaimers(filter);
    this.filter();
  }

  hireCandidate() {
    const selectedCandidate = this.hiringProcesses.find(candidate => candidate['$selected']);
    switch (selectedCandidate['hireStatus']) {
      case 'progress':
        selectedCandidate['hireStatus'] = 'hired';
        this.poNotification.success('Hired candidate!');
        break;

      case 'hired':
        this.poNotification.warning('This candidate has already been hired.');
        break;

      case 'canceled':
        this.poNotification.error('This candidate has already been disqualified.');
        break;
    }
  }

  hiringProcessesFilter(filters) {
    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers;
    this.filter();
  }

  onClearDisclaimer(disclaimers) {
    if (disclaimers.removedDisclaimer.property === 'search') {
      this.poPageList.clearInputSearch();
    }
    this.disclaimers = [];
    this.filter();
  }

  populateDisclaimers(filters: Array<any>) {
    const property = filters.length > 1 ? 'advanced' : 'search';
    this.disclaimers = filters.map(value => ({ value, property }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetFilterHiringProcess() {
    this.hiringProcessesFiltered = [...this.hiringProcesses];
    this.status = [];
    this.jobDescription = [];
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.hiringProcesses.some(candidate => candidate['$selected'])) {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data selected. Are you sure you want to quit?\`,
        confirm: () => this.router.navigate(['/'])
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts"),t(),i(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoPageListHiringProcessesService {
  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'hireStatus',
        label: 'Status',
        type: 'subtitle',
        subtitles: [
          { value: 'hired', color: 'success', label: 'Hired', content: '1' },
          { value: 'progress', color: 'warning', label: 'Progress', content: '2' },
          { value: 'canceled', color: 'danger', label: 'Canceled', content: '3' }
        ]
      },
      { property: 'idCard', label: 'Identity card', type: 'string' },
      { property: 'name', label: 'Name' },
      { property: 'age', label: 'Age' },
      { property: 'city', label: 'City' },
      { property: 'jobDescription', label: 'Job description', type: 'string' }
    ];
  }

  getHireStatus() {
    return [
      { value: 'hired', label: 'Hired' },
      { value: 'progress', label: 'Progress' },
      { value: 'canceled', label: 'Canceled' }
    ];
  }

  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        jobDescription: 'Systems Analyst'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        jobDescription: 'Trainee'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'hired',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        jobDescription: 'Web developer'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        jobDescription: 'Recruiter'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        jobDescription: 'Consultant'
      },
      { hireStatus: 'hired', name: 'Ella Scott', city: 'Ontario', age: 24, idCard: 'UL78flg68', jobDescription: 'DBA' },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        jobDescription: 'Programmer'
      }
    ];
  }

  getJobs() {
    return [
      { value: 'Systems Analyst', label: 'Systems Analyst' },
      { value: 'Trainee', label: 'Trainee' },
      { value: 'Programmer', label: 'Programmer' },
      { value: 'Web Developer', label: 'Web developer' },
      { value: 'Recruiter', label: 'Recruiter' },
      { value: 'Consultant', label: 'Consultant' },
      { value: 'DBA', label: 'DBA' }
    ];
  }
}
`),t()()()()(),i(25,"div",10),r(26,"sample-po-page-list-hiring-processes"),t(),r(27,"hr")),o&2&&(m(5),w("po-icon "+n.sampleCodeButtonIcon),m(),L(" ",n.sampleCodeButtonLabel,""),m(),g("ngClass",_(4,ke,n.hideSampleCodeTabs)))},dependencies:[M,x,y,C,he],encapsulation:2})}return s})();var Ee=(()=>{class s{static \u0275fac=function(o){return new(o||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-doc"]],standalone:!1,decls:1100,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/icons"],["href","/documentation/po-disclaimer-group"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDisclaimerGroup"],["pan","",1,"docs-api-property-type","PoPageFilter"],["pan","",1,"docs-api-property-type","PoPageListLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"]],template:function(o,n){o&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),t()(),i(7,"h3",3),e(8,"Componente"),t(),i(9,"h4",4)(10,"code",5),e(11,"PoPageListComponent"),t()(),i(12,"div",2)(13,"p"),e(14,"O componente "),i(15,"code"),e(16,"po-page-list"),t(),e(17,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),t(),i(18,"p"),e(19,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),i(20,"em"),e(21,"click"),t(),e(22," do \xEDcone "),i(23,"a",6),e(24,"an-magnifying-glass"),t(),e(25,`
quanto ao pressionar da tecla `),i(26,"em"),e(27,"ENTER"),t(),e(28," quando o foco estiver no campo de pesquisa."),t(),i(29,"p"),e(30,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),i(31,"a",7)(32,"code"),e(33,"po-disclaimer-group"),t()(),e(34,". "),t()(),i(35,"div",8)(36,"h4",9),e(37,"Seletor"),t(),i(38,"pre",10),e(39,`<po-page-list
    p-actions="Array<PoPageAction>"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-disclaimer-group="PoDisclaimerGroup"
    p-filter="PoPageFilter"
    p-literals="PoPageListLiterals"
    p-quick-search-value="string"
    p-subtitle="string"
    p-title="string" >
</po-page-list>
`),t()(),i(40,"h4",11),e(41,"Propriedades"),t(),i(42,"table",12)(43,"tr",13)(44,"th",14),e(45,"Nome"),t(),i(46,"th",14),e(47,"Tipo"),t(),i(48,"th",14),e(49,"Padr\xE3o"),t(),i(50,"th",14),e(51,"Descri\xE7\xE3o"),t()(),i(52,"tr",15)(53,"td",16)(54,"div",17)(55,"span",18),e(56," p-actions"),r(57,"br"),t()()(),i(58,"td",19)(59,"code",20),e(60,"Array<PoPageAction>"),t()(),i(61,"td",21),e(62,"-"),t(),i(63,"td",22)(64,"em")(65,"strong"),e(66,"(opcional)"),t()(),i(67,"p"),e(68,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),i(69,"code"),e(70,"PoPageAction"),t(),e(71,"."),t()()(),i(72,"tr",15)(73,"td",16)(74,"div",17)(75,"span",18),e(76," p-breadcrumb"),r(77,"br"),t()()(),i(78,"td",19)(79,"code",23),e(80,"PoBreadcrumb"),t()(),i(81,"td",21),e(82,"-"),t(),i(83,"td",22)(84,"em")(85,"strong"),e(86,"(opcional)"),t()(),i(87,"p"),e(88,"Objeto que implementa as propriedades da interface "),i(89,"code"),e(90,"PoBreadcrumb"),t(),e(91,"."),t()()(),i(92,"tr",15)(93,"td",16)(94,"div",17)(95,"span",18),e(96," p-components-size"),r(97,"br"),t()()(),i(98,"td",19)(99,"code",24),e(100,"string"),t()(),i(101,"td",21)(102,"p")(103,"code"),e(104,"medium"),t()()(),i(105,"td",22)(106,"em")(107,"strong"),e(108,"(opcional)"),t()(),i(109,"p"),e(110,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),i(111,"ul")(112,"li")(113,"code"),e(114,"small"),t(),e(115,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(116,"li")(117,"code"),e(118,"medium"),t(),e(119,": aplica a medida medium de cada componente."),t()(),i(120,"blockquote")(121,"p"),e(122,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(123,"code"),e(124,"medium"),t(),e(125,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(126,"a",25),e(127,"po-theme"),t(),e(128,"."),t()()()(),i(129,"tr",15)(130,"td",16)(131,"div",17)(132,"span",18),e(133," p-disclaimer-group"),r(134,"br"),t()()(),i(135,"td",19)(136,"code",26),e(137,"PoDisclaimerGroup"),t()(),i(138,"td",21),e(139,"-"),t(),i(140,"td",22)(141,"em")(142,"strong"),e(143,"(opcional)"),t()(),i(144,"p"),e(145,"Objeto que implementa as propriedades da interface "),i(146,"code"),e(147,"PoDisclaimerGroup"),t(),e(148,"."),t()()(),i(149,"tr",15)(150,"td",16)(151,"div",17)(152,"span",18),e(153," p-filter"),r(154,"br"),t()()(),i(155,"td",19)(156,"code",27),e(157,"PoPageFilter"),t()(),i(158,"td",21),e(159,"-"),t(),i(160,"td",22)(161,"p"),e(162,"Objeto que implementa as propriedades da interface "),i(163,"code"),e(164,"PoPageFilter"),t(),e(165,"."),t()()(),i(166,"tr",15)(167,"td",16)(168,"div",17)(169,"span",18),e(170," p-literals"),r(171,"br"),t()()(),i(172,"td",19)(173,"code",28),e(174,"PoPageListLiterals"),t()(),i(175,"td",21),e(176,"-"),t(),i(177,"td",22)(178,"em")(179,"strong"),e(180,"(opcional)"),t()(),i(181,"p"),e(182,"Objeto com as literais usadas no "),i(183,"code"),e(184,"po-page-list"),t(),e(185,"."),t(),i(186,"p"),e(187,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(188,"pre")(189,"code"),e(190,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),t()(),i(191,"p"),e(192,"Ou passando apenas as literais que deseja customizar:"),t(),i(193,"pre")(194,"code"),e(195,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),t()(),i(196,"p"),e(197,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(198,"pre")(199,"code"),e(200,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),t()(),i(201,"blockquote")(202,"p"),e(203,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),i(204,"a",29)(205,"code"),e(206,"PoI18nService"),t()(),e(207," ou "),i(208,"em"),e(209,"browser"),t(),e(210,"."),t()()()(),i(211,"tr",15)(212,"td",16)(213,"div",17)(214,"span",18),e(215," p-quick-search-value"),r(216,"br"),t()()(),i(217,"td",19)(218,"code",24),e(219,"string"),t()(),i(220,"td",21),e(221,"-"),t(),i(222,"td",22)(223,"em")(224,"strong"),e(225,"(opcional)"),t()(),i(226,"p"),e(227,"Valor padr\xE3o na busca r\xE1pida ao inicializar o componente"),t()()(),i(228,"tr",15)(229,"td",16)(230,"div",17)(231,"span",18),e(232," p-subtitle"),r(233,"br"),t()()(),i(234,"td",19)(235,"code",24),e(236,"string"),t()(),i(237,"td",21),e(238,"-"),t(),i(239,"td",22)(240,"em")(241,"strong"),e(242,"(opcional)"),t()(),i(243,"p"),e(244,"Subtitulo do Header da p\xE1gina"),t()()(),i(245,"tr",15)(246,"td",16)(247,"div",17)(248,"span",18),e(249," p-title"),r(250,"br"),t()()(),i(251,"td",19)(252,"code",24),e(253,"string"),t()(),i(254,"td",21),e(255,"-"),t(),i(256,"td",22)(257,"p"),e(258,"T\xEDtulo da p\xE1gina."),t()()()(),i(259,"h3",11),e(260,"M\xE9todos"),t(),i(261,"table",30)(262,"tr",15)(263,"th",31)(264,"div",17)(265,"h4")(266,"span",18),e(267," clearInputSearch "),t()()()()(),i(268,"tr",22)(269,"td",22)(270,"p"),e(271,"Limpa o campo de pesquisa."),t()()()(),r(272,"br"),i(273,"h3"),e(274,"Interfaces"),t(),i(275,"h4",32)(276,"code",5),e(277,"PoBreadcrumbItem"),t()(),i(278,"div",2)(279,"p"),e(280,"Interface que define cada item do componente "),i(281,"strong"),e(282,"po-breadcrumb"),t(),e(283,"."),t()(),i(284,"h4",11),e(285,"Propriedades"),t(),i(286,"table",12)(287,"tr",13)(288,"th",14),e(289,"Nome"),t(),i(290,"th",14),e(291,"Tipo"),t(),i(292,"th",14),e(293,"Descri\xE7\xE3o"),t()(),i(294,"tr",15)(295,"td",16)(296,"div",17)(297,"span",18),e(298," action"),r(299,"br"),t()()(),i(300,"td",19)(301,"code",33),e(302,"Function"),t()(),i(303,"td",22)(304,"em")(305,"strong"),e(306,"(opcional)"),t()(),i(307,"p"),e(308,"A\xE7\xE3o executada ao clicar no item."),t(),i(309,"blockquote")(310,"p"),e(311,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),i(312,"em"),e(313,"label"),t(),e(314," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),i(315,"tr",15)(316,"td",16)(317,"div",17)(318,"span",18),e(319," label"),r(320,"br"),t()()(),i(321,"td",19)(322,"code",24),e(323,"string"),t()(),i(324,"td",22)(325,"p"),e(326,"R\xF3tulo do item."),t()()(),i(327,"tr",15)(328,"td",16)(329,"div",17)(330,"span",18),e(331," link"),r(332,"br"),t()()(),i(333,"td",19)(334,"code",24),e(335,"string"),t()(),i(336,"td",22)(337,"em")(338,"strong"),e(339,"(opcional)"),t()(),i(340,"p"),e(341,"Url do item."),t(),i(342,"blockquote")(343,"p"),e(344,"Caso o item tamb\xE9m contenha uma "),i(345,"em"),e(346,"action"),t(),e(347," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),i(348,"em"),e(349,"link"),t(),e(350,"."),t()(),i(351,"blockquote")(352,"p"),e(353,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),i(354,"strong")(355,"a",34),e(356,"Veja um exemplo de como criar rotas aqui"),t()(),e(357,"."),t()(),i(358,"blockquote")(359,"p"),e(360,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),i(361,"code"),e(362,"p-favorite-service"),t(),e(363," consiga favoritar ou desfavoritar."),t()()()()(),i(364,"h4",32)(365,"code",5),e(366,"PoBreadcrumb"),t()(),i(367,"div",2)(368,"p"),e(369,"Interface que define o "),i(370,"code"),e(371,"po-breadcrumb"),t(),e(372,"."),t()(),i(373,"h4",11),e(374,"Propriedades"),t(),i(375,"table",12)(376,"tr",13)(377,"th",14),e(378,"Nome"),t(),i(379,"th",14),e(380,"Tipo"),t(),i(381,"th",14),e(382,"Descri\xE7\xE3o"),t()(),i(383,"tr",15)(384,"td",16)(385,"div",17)(386,"span",18),e(387," favorite"),r(388,"br"),t()()(),i(389,"td",19)(390,"code",24),e(391,"string"),t()(),i(392,"td",22)(393,"em")(394,"strong"),e(395,"(opcional)"),t()(),i(396,"p"),e(397,"Permite definir uma URL para favoritar ou desfavoritar."),t(),i(398,"blockquote")(399,"p"),e(400,"Para maiores informa\xE7\xF5es verificar a propriedade "),i(401,"code"),e(402,"p-favorite-service"),t(),e(403," do componente "),i(404,"code"),e(405,"po-breadcrumb"),t(),e(406,"."),t()()()(),i(407,"tr",15)(408,"td",16)(409,"div",17)(410,"span",18),e(411," items"),r(412,"br"),t()()(),i(413,"td",19)(414,"code",35),e(415,"Array<PoBreadcrumbItem>"),t()(),i(416,"td",22)(417,"p"),e(418,"Lista de itens do "),i(419,"em"),e(420,"breadcrumb"),t(),e(421,"."),t(),i(422,"p")(423,"strong"),e(424,"Exemplo:"),t()(),i(425,"pre")(426,"code"),e(427,`{ label: 'Po Portal', link: 'portal' }
`),t()()()(),i(428,"tr",15)(429,"td",16)(430,"div",17)(431,"span",18),e(432," params"),r(433,"br"),t()()(),i(434,"td",19)(435,"code",36),e(436,"object"),t()(),i(437,"td",22)(438,"em")(439,"strong"),e(440,"(opcional)"),t()(),i(441,"p"),e(442,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()()(),i(443,"h4",32)(444,"code",5),e(445,"PoDisclaimer"),t()(),i(446,"div",2)(447,"p"),e(448,"Interface que representa o objeto "),i(449,"code"),e(450,"po-disclaimer"),t(),e(451,"."),t()(),i(452,"h4",11),e(453,"Propriedades"),t(),i(454,"table",12)(455,"tr",13)(456,"th",14),e(457,"Nome"),t(),i(458,"th",14),e(459,"Tipo"),t(),i(460,"th",14),e(461,"Descri\xE7\xE3o"),t()(),i(462,"tr",15)(463,"td",16)(464,"div",17)(465,"span",18),e(466," hideClose"),r(467,"br"),t()()(),i(468,"td",19)(469,"code",37),e(470,"boolean"),t()(),i(471,"td",22)(472,"em")(473,"strong"),e(474,"(opcional)"),t()(),i(475,"p"),e(476,"Se verdadeiro, oculta o bot\xE3o para fechar o "),i(477,"em"),e(478,"disclaimer"),t(),e(479,"."),t()()(),i(480,"tr",15)(481,"td",16)(482,"div",17)(483,"span",18),e(484," label"),r(485,"br"),t()()(),i(486,"td",19)(487,"code",24),e(488,"string"),t()(),i(489,"td",22)(490,"em")(491,"strong"),e(492,"(opcional)"),t()(),i(493,"p"),e(494,"Texto de exibi\xE7\xE3o do objeto."),t()()(),i(495,"tr",15)(496,"td",16)(497,"div",17)(498,"span",18),e(499," property"),r(500,"br"),t()()(),i(501,"td",19)(502,"code",24),e(503,"string"),t()(),i(504,"td",22)(505,"em")(506,"strong"),e(507,"(opcional)"),t()(),i(508,"p"),e(509,"Nome da propriedade vinculada ao objeto "),i(510,"em"),e(511,"disclaimer"),t(),e(512,"."),t()()(),i(513,"tr",15)(514,"td",16)(515,"div",17)(516,"span",18),e(517," value"),r(518,"br"),t()()(),i(519,"td",19)(520,"code",38),e(521,"any"),t()(),i(522,"td",22)(523,"p"),e(524,"Valor do objeto."),t()()()(),i(525,"h4",32)(526,"code",5),e(527,"PoDisclaimerGroupRemoveAction"),t()(),i(528,"div",2)(529,"p"),e(530,"Estrutura do objeto representando o estado dos "),i(531,"em"),e(532,"disclaimers"),t(),e(533," ap\xF3s a remo\xE7\xE3o."),t()(),i(534,"h4",11),e(535,"Propriedades"),t(),i(536,"table",12)(537,"tr",13)(538,"th",14),e(539,"Nome"),t(),i(540,"th",14),e(541,"Tipo"),t(),i(542,"th",14),e(543,"Descri\xE7\xE3o"),t()(),i(544,"tr",15)(545,"td",16)(546,"div",17)(547,"span",18),e(548," currentDisclaimers"),r(549,"br"),t()()(),i(550,"td",19)(551,"code",39),e(552,"Array<PoDisclaimer>"),t()(),i(553,"td",22)(554,"p"),e(555,"Lista com os "),i(556,"em"),e(557,"disclaimers"),t(),e(558," atuais (restantes)."),t()()(),i(559,"tr",15)(560,"td",16)(561,"div",17)(562,"span",18),e(563," removedDisclaimer"),r(564,"br"),t()()(),i(565,"td",19)(566,"code",40),e(567,"PoDisclaimer"),t()(),i(568,"td",22)(569,"p")(570,"em"),e(571,"Disclaimer"),t(),e(572," que foi removido."),t()()()(),i(573,"h4",32)(574,"code",5),e(575,"PoDisclaimerGroup"),t()(),i(576,"div",2)(577,"p"),e(578,"Interface que representa o objeto "),i(579,"code"),e(580,"po-disclaimer-group"),t(),e(581,"."),t()(),i(582,"h4",11),e(583,"Propriedades"),t(),i(584,"table",12)(585,"tr",13)(586,"th",14),e(587,"Nome"),t(),i(588,"th",14),e(589,"Tipo"),t(),i(590,"th",14),e(591,"Descri\xE7\xE3o"),t()(),i(592,"tr",15)(593,"td",16)(594,"div",17)(595,"span",18),e(596," change"),r(597,"br"),t()()(),i(598,"td",19)(599,"code",33),e(600,"Function"),t()(),i(601,"td",22)(602,"em")(603,"strong"),e(604,"(opcional)"),t()(),i(605,"p"),e(606,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),i(607,"em"),e(608,"disclaimers"),t(),e(609,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),i(610,"em"),e(611,"disclaimers"),t(),e(612,"."),t()()(),i(613,"tr",15)(614,"td",16)(615,"div",17)(616,"span",18),e(617," disclaimers"),r(618,"br"),t()()(),i(619,"td",19)(620,"code",39),e(621,"Array<PoDisclaimer>"),t()(),i(622,"td",22)(623,"p"),e(624,"Lista de "),i(625,"em"),e(626,"disclaimers"),t(),e(627,"."),t(),i(628,"p"),e(629,"Exemplo:"),t(),i(630,"pre")(631,"code"),e(632,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),t()(),i(633,"p"),e(634,"Para que a lista de "),i(635,"em"),e(636,"disclaimers"),t(),e(637," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),i(638,"code"),e(639,"PoDisclaimer"),t(),e(640,"."),t(),i(641,"p"),e(642,"Exemplo:"),t(),i(643,"pre")(644,"code"),e(645,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),t()()()(),i(646,"tr",15)(647,"td",16)(648,"div",17)(649,"span",18),e(650," hideRemoveAll"),r(651,"br"),t()()(),i(652,"td",19)(653,"code",37),e(654,"boolean"),t()(),i(655,"td",22)(656,"em")(657,"strong"),e(658,"(opcional)"),t()(),i(659,"p"),e(660,"Oculta o bot\xE3o para remover todos os "),i(661,"em"),e(662,"disclaimers"),t(),e(663," do grupo."),t(),i(664,"blockquote")(665,"p"),e(666,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),i(667,"em"),e(668,"disclaimers"),t(),e(669," com a op\xE7\xE3o "),i(670,"code"),e(671,"hideClose"),t(),e(672," habilitada."),t()()()(),i(673,"tr",15)(674,"td",16)(675,"div",17)(676,"span",18),e(677," remove"),r(678,"br"),t()()(),i(679,"td",19)(680,"code",33),e(681,"Function"),t()(),i(682,"td",22)(683,"em")(684,"strong"),e(685,"(opcional)"),t()(),i(686,"p"),e(687,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),i(688,"em"),e(689,"disclaimer"),t(),e(690,` for removido da lista de
`),i(691,"em"),e(692,"disclaimers"),t(),e(693," pelo usu\xE1rio."),t(),i(694,"p"),e(695,"Recebe como par\xE2metro um objeto conforme a interface "),i(696,"code"),e(697,"PoDisclaimerGroupRemoveAction"),t(),e(698,"."),t()()(),i(699,"tr",15)(700,"td",16)(701,"div",17)(702,"span",18),e(703," removeAll"),r(704,"br"),t()()(),i(705,"td",19)(706,"code",33),e(707,"Function"),t()(),i(708,"td",22)(709,"em")(710,"strong"),e(711,"(opcional)"),t()(),i(712,"p"),e(713,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),i(714,"em"),e(715,"disclaimers"),t(),e(716," forem removidos da lista de "),i(717,"em"),e(718,"disclaimers"),t(),e(719,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),t(),i(720,"p"),e(721,"Recebe como par\xE2metro uma lista contendo todos os "),i(722,"code"),e(723,"disclaimers"),t(),e(724," removidos."),t()()(),i(725,"tr",15)(726,"td",16)(727,"div",17)(728,"span",18),e(729," title"),r(730,"br"),t()()(),i(731,"td",19)(732,"code",24),e(733,"string"),t()(),i(734,"td",22)(735,"em")(736,"strong"),e(737,"(opcional)"),t()(),i(738,"p"),e(739,"T\xEDtulo do grupo de "),i(740,"em"),e(741,"disclaimers"),t(),e(742,"."),t()()()(),i(743,"h4",32)(744,"code",5),e(745,"PoPageAction"),t()(),i(746,"div",2)(747,"p"),e(748,"Interface para as a\xE7\xF5es dos componentes po-page-default e po-page-list."),t(),i(749,"blockquote")(750,"p"),e(751,"As propriedades "),i(752,"code"),e(753,"selected"),t(),e(754,", "),i(755,"code"),e(756,"separator"),t(),e(757," e "),i(758,"code"),e(759,"type"),t(),e(760,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),t()()(),i(761,"h4",11),e(762,"Propriedades"),t(),i(763,"table",12)(764,"tr",13)(765,"th",14),e(766,"Nome"),t(),i(767,"th",14),e(768,"Tipo"),t(),i(769,"th",14),e(770,"Descri\xE7\xE3o"),t()(),i(771,"tr",15)(772,"td",16)(773,"div",17)(774,"span",18),e(775," action"),r(776,"br"),t()()(),i(777,"td",19)(778,"code",33),e(779,"Function"),t()(),i(780,"td",22)(781,"em")(782,"strong"),e(783,"(opcional)"),t()(),i(784,"p"),e(785,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(786,"blockquote")(787,"p"),e(788,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),i(789,"em"),e(790,"bind"),t(),e(791,"."),t()(),i(792,"p"),e(793,"Exemplo: "),i(794,"code"),e(795,"action: this.myFunction.bind(this)"),t()()()(),i(796,"tr",15)(797,"td",16)(798,"div",17)(799,"span",18),e(800," disabled"),r(801,"br"),t()()(),i(802,"td",19)(803,"code",37),e(804,"boolean "),t(),i(805,"code",33),e(806," Function"),t()(),i(807,"td",22)(808,"em")(809,"strong"),e(810,"(opcional)"),t()(),i(811,"p"),e(812,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),i(813,"p"),e(814,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),i(815,"tr",15)(816,"td",16)(817,"div",17)(818,"span",18),e(819," icon"),r(820,"br"),t()()(),i(821,"td",19)(822,"code",24),e(823,"string "),t(),i(824,"code",41),e(825," TemplateRef<void>"),t()(),i(826,"td",22)(827,"em")(828,"strong"),e(829,"(opcional)"),t()(),i(830,"p"),e(831,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),i(832,"p"),e(833,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),i(834,"a",6),e(835,"Biblioteca de \xEDcones"),t(),e(836,". conforme exemplo abaixo:"),t(),i(837,"pre")(838,"code"),e(839,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),t()(),i(840,"p"),e(841,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),i(842,"pre")(843,"code"),e(844,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),t()(),i(845,"p"),e(846,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),i(847,"code"),e(848,"TemplateRef"),t(),e(849,`, conforme exemplo abaixo:
component.html:`),t(),i(850,"pre")(851,"code"),e(852,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),t()(),i(853,"p"),e(854,"component.ts:"),t(),i(855,"pre")(856,"code"),e(857,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),t()()()(),i(858,"tr",15)(859,"td",16)(860,"div",17)(861,"span",18),e(862," label"),r(863,"br"),t()()(),i(864,"td",19)(865,"code",24),e(866,"string"),t()(),i(867,"td",22)(868,"p"),e(869,"R\xF3tulo da a\xE7\xE3o."),t()()(),i(870,"tr",15)(871,"td",16)(872,"div",17)(873,"span",18),e(874," selected"),r(875,"br"),t()()(),i(876,"td",19)(877,"code",37),e(878,"boolean"),t()(),i(879,"td",22)(880,"em")(881,"strong"),e(882,"(opcional)"),t()(),i(883,"p"),e(884,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(885,"tr",15)(886,"td",16)(887,"div",17)(888,"span",18),e(889," separator"),r(890,"br"),t()()(),i(891,"td",19)(892,"code",37),e(893,"boolean"),t()(),i(894,"td",22)(895,"em")(896,"strong"),e(897,"(opcional)"),t()(),i(898,"p"),e(899,"Atribui uma linha separadora acima do item."),t()()(),i(900,"tr",15)(901,"td",16)(902,"div",17)(903,"span",18),e(904," type"),r(905,"br"),t()()(),i(906,"td",19)(907,"code",24),e(908,"string"),t()(),i(909,"td",22)(910,"em")(911,"strong"),e(912,"(opcional)"),t()(),i(913,"p"),e(914,"Define a cor do item, sendo "),i(915,"code"),e(916,"default"),t(),e(917," o padr\xE3o."),t(),i(918,"p"),e(919,"Valores v\xE1lidos:"),t(),i(920,"ul")(921,"li")(922,"code"),e(923,"default"),t()(),i(924,"li")(925,"code"),e(926,"danger"),t(),e(927," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),i(928,"tr",15)(929,"td",16)(930,"div",17)(931,"span",18),e(932," url"),r(933,"br"),t()()(),i(934,"td",19)(935,"code",24),e(936,"string"),t()(),i(937,"td",22)(938,"em")(939,"strong"),e(940,"(opcional)"),t()(),i(941,"p"),e(942,"URL utilizada no redirecionamento das p\xE1ginas."),t()()(),i(943,"tr",15)(944,"td",16)(945,"div",17)(946,"span",18),e(947," visible"),r(948,"br"),t()()(),i(949,"td",19)(950,"code",37),e(951,"boolean "),t(),i(952,"code",33),e(953," Function"),t()(),i(954,"td",22)(955,"em")(956,"strong"),e(957,"(opcional)"),t()(),i(958,"p"),e(959,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),i(960,"blockquote")(961,"p"),e(962,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),i(963,"p"),e(964,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),i(965,"ul")(966,"li")(967,"p"),e(968,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),i(969,"li")(970,"p"),e(971,"Informar diretamente um valor booleano."),t()()()()()(),i(972,"h4",32)(973,"code",5),e(974,"PoPageFilter"),t()(),i(975,"div",2)(976,"p"),e(977,"Interface para o atributo "),i(978,"code"),e(979,"filter"),t(),e(980," do componente "),i(981,"code"),e(982,"po-page-list"),t(),e(983,"."),t()(),i(984,"h4",11),e(985,"Propriedades"),t(),i(986,"table",12)(987,"tr",13)(988,"th",14),e(989,"Nome"),t(),i(990,"th",14),e(991,"Tipo"),t(),i(992,"th",14),e(993,"Descri\xE7\xE3o"),t()(),i(994,"tr",15)(995,"td",16)(996,"div",17)(997,"span",18),e(998," action"),r(999,"br"),t()()(),i(1e3,"td",19)(1001,"code",33),e(1002,"Function"),t()(),i(1003,"td",22)(1004,"em")(1005,"strong"),e(1006,"(opcional)"),t()(),i(1007,"p"),e(1008,"A\xE7\xE3o a ser executada."),t()()(),i(1009,"tr",15)(1010,"td",16)(1011,"div",17)(1012,"span",18),e(1013," advancedAction"),r(1014,"br"),t()()(),i(1015,"td",19)(1016,"code",33),e(1017,"Function"),t()(),i(1018,"td",22)(1019,"em")(1020,"strong"),e(1021,"(opcional)"),t()(),i(1022,"p"),e(1023,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),i(1024,"em"),e(1025,"click"),t(),e(1026," atrav\xE9s do r\xF3tulo "),i(1027,"strong"),e(1028,"Busca Avan\xE7ada"),t(),e(1029,"."),t()()(),i(1030,"tr",15)(1031,"td",16)(1032,"div",17)(1033,"span",18),e(1034," placeholder"),r(1035,"br"),t()()(),i(1036,"td",19)(1037,"code",24),e(1038,"string"),t()(),i(1039,"td",22)(1040,"em")(1041,"strong"),e(1042,"(opcional)"),t()(),i(1043,"p"),e(1044,"Texto de instru\xE7\xE3o exibido dentro do campo de filtro."),t()()(),i(1045,"tr",15)(1046,"td",16)(1047,"div",17)(1048,"span",18),e(1049," width"),r(1050,"br"),t()()(),i(1051,"td",19)(1052,"code",42),e(1053,"number"),t()(),i(1054,"td",22)(1055,"em")(1056,"strong"),e(1057,"(opcional)"),t()(),i(1058,"p"),e(1059,"Tamanho do filtro em tela, utilizando o "),i(1060,"em"),e(1061,"Grid System"),t(),e(1062,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),t()()()(),i(1063,"h4",32)(1064,"code",5),e(1065,"PoPageListLiterals"),t()(),i(1066,"div",2)(1067,"p"),e(1068,"Interface para defini\xE7\xE3o das literais usadas no "),i(1069,"code"),e(1070,"po-page-list"),t(),e(1071,"."),t()(),i(1072,"h4",11),e(1073,"Propriedades"),t(),i(1074,"table",12)(1075,"tr",13)(1076,"th",14),e(1077,"Nome"),t(),i(1078,"th",14),e(1079,"Tipo"),t(),i(1080,"th",14),e(1081,"Descri\xE7\xE3o"),t()(),i(1082,"tr",15)(1083,"td",16)(1084,"div",17)(1085,"span",18),e(1086," otherActions"),r(1087,"br"),t()()(),i(1088,"td",19)(1089,"code",24),e(1090,"string"),t()(),i(1091,"td",22)(1092,"em")(1093,"strong"),e(1094,"(opcional)"),t()(),i(1095,"p"),e(1096,"Legenda do "),i(1097,"code"),e(1098,"po-dropdown"),t(),e(1099," de a\xE7\xF5es."),t()()()()())},dependencies:[x],encapsulation:2})}return s})();var fe=(()=>{class s{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||s)(P(Z),P(G))};static \u0275cmp=f({type:s,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page List",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,n){o&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return n.changeTab("doc")}),r(3,"sample-po-page-list-doc"),t(),i(4,"po-tab",3),E("p-click",function(){return n.changeTab("web")}),r(5,"sample-po-page-list-basic-view")(6,"sample-po-page-list-labs-view")(7,"sample-po-page-list-hiring-processes-view"),t()()()),o&2&&(g("p-actions",n.actions),m(2),g("p-active",n.activeTab==="doc"),m(2),g("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[me,y,C,ue,be,Se,Ee],encapsulation:2})}return s})();var Ie=[{path:"",component:fe}],Pe=(()=>{class s{static \u0275fac=function(o){return new(o||s)};static \u0275mod=B({type:s});static \u0275inj=F({imports:[U.forChild(Ie),U]})}return s})();var lt=(()=>{class s{static \u0275fac=function(o){return new(o||s)};static \u0275mod=B({type:s});static \u0275inj=F({imports:[de,Pe]})}return s})();export{lt as DocPoPageListModule};
