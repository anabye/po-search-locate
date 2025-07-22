import{o as y,p as le}from"./chunk-JYNCG2Y6.js";import{Aa as te,Ab as w,Db as oe,F as Z,Fa as ne,Ga as ie,I as W,Ra as ae,T as z,ha as $,ja as ee,nb as x,zb as C}from"./chunk-HBOGTDFH.js";import{$a as g,Ac as N,Ba as D,Ea as n,Fa as e,Ga as r,Ka as B,L as Q,La as E,M as k,Nc as X,Pc as Y,Rc as U,T as s,Ta as R,U as c,Ua as H,Va as G,Wa as I,Xa as t,Za as _,ab as f,bb as h,cb as K,eb as M,ha as p,ia as P,oa as S,pa as L,ub as T,wc as V,xc as O,ya as u,yc as F,zc as q}from"./chunk-MIQUIDUB.js";var re=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Default"]],template:function(l,i){l&1&&r(0,"po-page-default",0)},dependencies:[x],encapsulation:2})}return o})();var Se=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Page Default Basic"),e(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-page-default-basic/sample-po-page-default-basic.component.html"),e(),n(13,"pre",7),t(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-page-default-basic/sample-po-page-default-basic.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),e()()()()(),n(21,"div",10),r(22,"sample-po-page-default-basic"),e(),r(23,"hr")),l&2&&(p(5),D("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),u("ngClass",M(4,Se,i.hideSampleCodeTabs)))},dependencies:[T,y,C,w,re],encapsulation:2})}return o})();var de=(()=>{class o{poNotification;action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;title;subtitle;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];constructor(m){this.poNotification=m}ngOnInit(){this.restore()}addAction(m){let l=Object.assign({},m);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions=[...this.actions,l],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let m={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,m):this.breadcrumb.params=m,this.breadcrumbParams={}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.literals="",this.title="PO Page Default",this.subtitle="",this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}showAction(m){this.poNotification.success(`Action clicked: ${m}`)}static \u0275fac=function(l){return new(l||o)(P(z))};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-labs"]],standalone:!1,decls:43,vars:28,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formPage","ngForm"],[3,"p-actions","p-breadcrumb","p-components-size","p-literals","p-title","p-subtitle"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let d=B();r(0,"po-page-default",5)(1,"hr"),n(2,"form",null,0)(4,"div",6)(5,"po-input",7),h("ngModelChange",function(a){return s(d),f(i.action.action,a)||(i.action.action=a),c(a)}),e(),n(6,"po-input",8),h("ngModelChange",function(a){return s(d),f(i.action.label,a)||(i.action.label=a),c(a)}),e(),n(7,"po-input",9),h("ngModelChange",function(a){return s(d),f(i.action.url,a)||(i.action.url=a),c(a)}),e(),n(8,"po-select",10),h("ngModelChange",function(a){return s(d),f(i.action.type,a)||(i.action.type=a),c(a)}),e(),n(9,"po-select",11),h("ngModelChange",function(a){return s(d),f(i.action.icon,a)||(i.action.icon=a),c(a)}),e(),n(10,"po-checkbox-group",12),h("ngModelChange",function(a){return s(d),f(i.action,a)||(i.action=a),c(a)}),e()(),n(11,"div",6)(12,"po-button",13),E("p-click",function(){return s(d),c(i.addAction(i.action))}),e()()(),r(13,"hr"),n(14,"form",null,1)(16,"div",6)(17,"po-input",14),h("ngModelChange",function(a){return s(d),f(i.breadcrumb.favorite,a)||(i.breadcrumb.favorite=a),c(a)}),e()()(),n(18,"form",null,2)(20,"div",6)(21,"po-input",15),h("ngModelChange",function(a){return s(d),f(i.breadcrumbItem.label,a)||(i.breadcrumbItem.label=a),c(a)}),e(),n(22,"po-input",16),h("ngModelChange",function(a){return s(d),f(i.breadcrumbItem.link,a)||(i.breadcrumbItem.link=a),c(a)}),e()(),n(23,"div",6)(24,"po-button",17),E("p-click",function(){return s(d),c(i.addBreadcrumbItem())}),e()()(),r(25,"hr"),n(26,"form",null,3)(28,"div",6)(29,"po-input",18),h("ngModelChange",function(a){return s(d),f(i.breadcrumbParams.property,a)||(i.breadcrumbParams.property=a),c(a)}),e(),n(30,"po-input",19),h("ngModelChange",function(a){return s(d),f(i.breadcrumbParams.value,a)||(i.breadcrumbParams.value=a),c(a)}),e()(),n(31,"div",6)(32,"po-button",20),E("p-click",function(){return s(d),c(i.addBreadcrumbParam())}),e()()(),r(33,"hr"),n(34,"form",null,4)(36,"div",6)(37,"po-input",21),h("ngModelChange",function(a){return s(d),f(i.title,a)||(i.title=a),c(a)}),e(),n(38,"po-input",22),h("ngModelChange",function(a){return s(d),f(i.subtitle,a)||(i.subtitle=a),c(a)}),e(),n(39,"po-input",23),h("ngModelChange",function(a){return s(d),f(i.literals,a)||(i.literals=a),c(a)}),E("p-change",function(){return s(d),c(i.changeLiterals())}),e(),n(40,"po-radio-group",24),h("ngModelChange",function(a){return s(d),f(i.componentsSize,a)||(i.componentsSize=a),c(a)}),e()(),n(41,"div",6)(42,"po-button",25),E("p-click",function(){return s(d),c(i.restore())}),e()()()}if(l&2){let d=I(3),b=I(19),a=I(27);u("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-literals",i.customLiterals)("p-title",i.title)("p-subtitle",i.subtitle),p(5),g("ngModel",i.action.action),p(),g("ngModel",i.action.label),p(),g("ngModel",i.action.url),p(),g("ngModel",i.action.type),u("p-options",i.typeOptions),p(),g("ngModel",i.action.icon),u("p-options",i.iconOptions),p(),g("ngModel",i.action),u("p-options",i.actionOptions),p(2),u("p-disabled",d.form.invalid),p(5),g("ngModel",i.breadcrumb.favorite),p(4),g("ngModel",i.breadcrumbItem.label),p(),g("ngModel",i.breadcrumbItem.link),p(2),u("p-disabled",b.invalid),p(5),g("ngModel",i.breadcrumbParams.property),p(),g("ngModel",i.breadcrumbParams.value),p(2),u("p-disabled",a.invalid),p(5),g("ngModel",i.title),p(),g("ngModel",i.subtitle),p(),g("ngModel",i.literals),p(),g("ngModel",i.componentsSize),u("p-options",i.componentsSizeOptions)}},dependencies:[N,V,O,q,F,Z,$,ee,ie,ae,x],encapsulation:2})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Page Default Labs"),e(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-page-default-labs/sample-po-page-default-labs.component.html"),e(),n(13,"pre",7),t(14,`<po-page-default
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-literals]="customLiterals"
  [p-title]="title"
  [p-subtitle]="subtitle"
>
</po-page-default>

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
      class="po-lg-2 po-md-4"
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
      class="po-md-6"
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

<form #formPage="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>
    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

    <po-input
      class="po-md-6"
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
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-page-default-labs/sample-po-page-default-labs.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

import { PoNotificationService, PoPageAction, PoPageDefaultLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-default-labs',
  templateUrl: './sample-po-page-default-labs.component.html',
  standalone: false
})
export class SamplePoPageDefaultLabsComponent implements OnInit {
  action: PoPageAction;
  actions: Array<PoPageAction>;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageDefaultLiterals;
  literals: string;
  title: string;
  subtitle: string;

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

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.literals = '';
    this.title = 'PO Page Default';
    this.subtitle = '';
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),e()()()()(),n(21,"div",10),r(22,"sample-po-page-default-labs"),e(),r(23,"hr")),l&2&&(p(5),D("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),u("ngClass",M(4,xe,i.hideSampleCodeTabs)))},dependencies:[T,y,C,w,de],encapsulation:2})}return o})();var j=(()=>{class o{getColumns(){return[{property:"cities",label:"Cities that most downloaded PO"},{property:"package",label:"Package version"},{property:"downloads",label:"Downloads"}]}getItems(){return[{cities:"S\xE3o Paulo",package:"2.0.0-beta.2",downloads:"2000"},{cities:"Joinville",package:"1.9.1",downloads:"1000"},{cities:"Rio de Janeiro",package:"2.0.0-beta.2",downloads:"250"},{cities:"Santa Catarina",package:"1.9.1",downloads:"100"},{cities:"Curitiba",package:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",package:"1.9.1",downloads:"250"},{cities:"Londrina",package:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",package:"1.9.1",downloads:"1100"}]}static \u0275fac=function(l){return new(l||o)};static \u0275prov=Q({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ye=["formShare"],ce=(()=>{class o{poNotification;sampleDashboardService;formShare;poModal;columns;email=void 0;isSubscribed=!1;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"GitHub",url:"https://github.com/po-ui/po-angular"},{label:"Components",url:"/documentation"},{label:"Disable notification",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};cancelAction={action:()=>{this.modalClose()},label:"Cancel"};shareAction={action:()=>{this.share()},label:"Share"};constructor(m,l){this.poNotification=m,this.sampleDashboardService=l}ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Email invalid."),this.modalClose()}disableNotification(){this.isSubscribed=!0}static \u0275fac=function(l){return new(l||o)(P(z),P(j))};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-dashboard"]],viewQuery:function(l,i){if(l&1&&(R(ye,7),R(W,7)),l&2){let d;H(d=G())&&(i.formShare=d.first),H(d=G())&&(i.poModal=d.first)}},standalone:!1,features:[K([j])],decls:38,vars:8,consts:[["formShare","ngForm"],["p-title","Dashboard",3,"p-actions","p-breadcrumb"],[1,"po-row"],["p-title","Daily visitors",1,"po-md-6","po-lg-4","po-mb-2"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-widget-text-subtitle"],["p-title","Most viewed page",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Website status",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","NPM downloads",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Devforum PO questions",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Angular versions supported",1,"po-md-6","po-lg-4","po-mb-2"],[3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(l,i){if(l&1){let d=B();n(0,"po-page-default",1)(1,"div",2)(2,"po-widget",3)(3,"div",4),t(4,"540"),e(),n(5,"div",5),t(6,"www.po.com.br"),e()(),n(7,"po-widget",6)(8,"div",4),t(9,"300 views"),e(),n(10,"div",5),t(11,"https://po-ui.io"),e()(),n(12,"po-widget",7)(13,"div",4),t(14,"Online"),e(),n(15,"div",5),t(16,"28 days"),e()(),n(17,"po-widget",8)(18,"div",4),t(19,"266"),e(),n(20,"div",5),t(21,"@po-ui/ng-components - 1.10.1"),e()(),n(22,"po-widget",9)(23,"div",4),t(24,"800 questions"),e(),n(25,"div",5),t(26,"https://devforum.po.com.br"),e()(),n(27,"po-widget",10)(28,"div",4),t(29,"AngularJS - Angular 6"),e(),n(30,"div",5),t(31,"Angular 6 most downloaded"),e()()(),r(32,"hr")(33,"po-table",11),e(),n(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),h("ngModelChange",function(a){return s(d),f(i.email,a)||(i.email=a),c(a)}),e()()()}l&2&&(u("p-actions",i.actions)("p-breadcrumb",i.breadcrumb),p(33),u("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",!1),p(),u("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),p(3),g("ngModel",i.email))},dependencies:[N,V,O,q,F,ne,W,x,te,oe],styles:[".sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}"]})}return o})();var _e=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-dashboard-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Page Default - Dashboard"),e(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html"),e(),n(13,"pre",7),t(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
  <div class="po-row">
    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Daily visitors">
      <div class="po-font-subtitle po-text-center">540</div>
      <div class="po-text-center sample-widget-text-subtitle">www.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Most viewed page">
      <div class="po-font-subtitle po-text-center">300 views</div>
      <div class="po-text-center sample-widget-text-subtitle">https://po-ui.io</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Website status">
      <div class="po-font-subtitle po-text-center">Online</div>
      <div class="po-text-center sample-widget-text-subtitle">28 days</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="NPM downloads">
      <div class="po-font-subtitle po-text-center">266</div>
      <div class="po-text-center sample-widget-text-subtitle">&#64;po-ui/ng-components - 1.10.1</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Devforum PO questions">
      <div class="po-font-subtitle po-text-center">800 questions</div>
      <div class="po-text-center sample-widget-text-subtitle">https://devforum.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Angular versions supported">
      <div class="po-font-subtitle po-text-center">AngularJS - Angular 6</div>
      <div class="po-text-center sample-widget-text-subtitle">Angular 6 most downloaded</div>
    </po-widget>
  </div>

  <hr />

  <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>
</po-page-default>

<po-modal p-title="Share webpage" [p-primary-action]="shareAction" [p-secondary-action]="cancelAction">
  <form #formShare="ngForm">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Type an e-mail for sharing webpage: http://www.po.com.br"
      p-required
    >
    </po-email>
  </form>
</po-modal>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';

import { SampleDashboardService } from './sample-po-page-default-dashboard.service';

@Component({
  selector: 'sample-po-page-default-dashboard',
  templateUrl: './sample-po-page-default-dashboard.component.html',
  styles: [
    \`
      .sample-widget-text-subtitle {
        font-family: NunitoSans;
        font-size: 14px;
        text-align: center;
        color: #9da7a9;
      }
    \`
  ],
  providers: [SampleDashboardService],
  standalone: false
})
export class SamplePoPageDefaultDashboardComponent implements OnInit {
  @ViewChild('formShare', { static: true }) formShare: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  columns: Array<PoTableColumn>;
  email: string = undefined;
  isSubscribed: boolean = false;
  items: Array<object>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Share', action: this.modalOpen.bind(this), icon: 'an an-share' },
    { label: 'GitHub', url: 'https://github.com/po-ui/po-angular' },
    { label: 'Components', url: '/documentation' },
    { label: 'Disable notification', action: this.disableNotification.bind(this), disabled: () => this.isSubscribed }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  public readonly cancelAction: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: PoModalAction = {
    action: () => {
      this.share();
    },
    label: 'Share'
  };

  constructor(
    private poNotification: PoNotificationService,
    private sampleDashboardService: SampleDashboardService
  ) {}

  ngOnInit(): void {
    this.columns = this.sampleDashboardService.getColumns();
    this.items = this.sampleDashboardService.getItems();
  }

  modalClose() {
    this.poModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.poModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.poNotification.success(\`Webpage shared successfully to: \${this.email}.\`);
    } else {
      this.poNotification.error(\`Email invalid.\`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }
}
`),e(),n(21,"label",6),t(22,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts"),e(),n(23,"pre",9),t(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SampleDashboardService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cities', label: 'Cities that most downloaded PO' },
      { property: 'package', label: 'Package version' },
      { property: 'downloads', label: 'Downloads' }
    ];
  }

  getItems() {
    return [
      { cities: 'S\xE3o Paulo', package: '2.0.0-beta.2', downloads: '2000' },
      { cities: 'Joinville', package: '1.9.1', downloads: '1000' },
      { cities: 'Rio de Janeiro', package: '2.0.0-beta.2', downloads: '250' },
      { cities: 'Santa Catarina', package: '1.9.1', downloads: '100' },
      { cities: 'Curitiba', package: '2.0.0-beta.2', downloads: '1040' },
      { cities: 'Goiania', package: '1.9.1', downloads: '250' },
      { cities: 'Londrina', package: '1.9.1', downloads: '35' },
      { cities: 'Belo Horizonte', package: '1.9.1', downloads: '1100' }
    ];
  }
}
`),e()()()()(),n(25,"div",10),r(26,"sample-po-page-default-dashboard"),e(),r(27,"hr")),l&2&&(p(5),D("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),u("ngClass",M(4,_e,i.hideSampleCodeTabs)))},dependencies:[T,y,C,w,ce],encapsulation:2})}return o})();var be=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-doc"]],standalone:!1,decls:690,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageDefaultLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoPageModule } from '@po-ui/ng-components';"),e()(),n(4,"div",2)(5,"p"),t(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),e()(),n(7,"h3",3),t(8,"Componente"),e(),n(9,"h4",4)(10,"code",5),t(11,"PoPageDefaultComponent"),e()(),n(12,"div",2)(13,"p"),t(14,"O componente "),n(15,"code"),t(16,"po-page-default"),e(),t(17," \xE9 utilizado como o container principal para as telas sem um template definido."),e(),n(18,"h4"),t(19,"Tokens customiz\xE1veis"),e(),n(20,"blockquote")(21,"p"),t(22,"Para maiores informa\xE7\xF5es, acesse o guia "),n(23,"a",6),t(24,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(25,"."),e()(),n(26,"table")(27,"thead")(28,"tr")(29,"th"),t(30,"Propriedade"),e(),n(31,"th"),t(32,"Descri\xE7\xE3o"),e(),n(33,"th"),t(34,"Valor Padr\xE3o"),e()()(),n(35,"tbody")(36,"tr")(37,"td")(38,"strong"),t(39,"Default Values"),e()(),r(40,"td")(41,"td"),e(),n(42,"tr")(43,"td")(44,"code"),t(45,"--padding"),e()(),n(46,"td"),t(47,"Espa\xE7amento do componente"),e(),n(48,"td")(49,"code"),t(50,"var(--spacing-xs) var(--spacing-md)"),e()()(),n(51,"tr")(52,"td")(53,"code"),t(54,"--gap"),e()(),n(55,"td"),t(56,"Gap entre o header e o conte\xFAdo"),e(),n(57,"td")(58,"code"),t(59,"var(--spacing-md)"),e()()(),n(60,"tr")(61,"td")(62,"code"),t(63,"--padding-top-header"),e()(),n(64,"td"),t(65,"Espa\xE7amento do topo do header"),e(),n(66,"td")(67,"code"),t(68,"var(--color-neutral-light-30)"),e()()(),n(69,"tr")(70,"td")(71,"code"),t(72,"--gap-actions"),e()(),n(73,"td"),t(74,"Gap entre os bot\xF5es de action"),e(),n(75,"td")(76,"code"),t(77,"var(--spacing-xs)"),e()()(),n(78,"tr")(79,"td")(80,"code"),t(81,"--padding-content"),e()(),n(82,"td"),t(83,"Espa\xE7amento do conte\xFAdo"),e(),n(84,"td")(85,"code"),t(86,"var(--spacing-xs) var(--spacing-sm)"),e()()()()()(),n(87,"div",7)(88,"h4",8),t(89,"Seletor"),e(),n(90,"pre",9),t(91,`<po-page-default
    p-actions="Array<PoPageAction>"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-literals="PoPageDefaultLiterals"
    p-subtitle="string"
    p-title="string" >
</po-page-default>
`),e()(),n(92,"h4",10),t(93,"Propriedades"),e(),n(94,"table",11)(95,"tr",12)(96,"th",13),t(97,"Nome"),e(),n(98,"th",13),t(99,"Tipo"),e(),n(100,"th",13),t(101,"Padr\xE3o"),e(),n(102,"th",13),t(103,"Descri\xE7\xE3o"),e()(),n(104,"tr",14)(105,"td",15)(106,"div",16)(107,"span",17),t(108," p-actions"),r(109,"br"),e()()(),n(110,"td",18)(111,"code",19),t(112,"Array<PoPageAction>"),e()(),n(113,"td",20),t(114,"-"),e(),n(115,"td",21)(116,"em")(117,"strong"),t(118,"(opcional)"),e()(),n(119,"p"),t(120,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),n(121,"code"),t(122,"PoPageAction"),e(),t(123,"."),e()()(),n(124,"tr",14)(125,"td",15)(126,"div",16)(127,"span",17),t(128," p-breadcrumb"),r(129,"br"),e()()(),n(130,"td",18)(131,"code",22),t(132,"PoBreadcrumb"),e()(),n(133,"td",20),t(134,"-"),e(),n(135,"td",21)(136,"em")(137,"strong"),t(138,"(opcional)"),e()(),n(139,"p"),t(140,"Objeto com propriedades do breadcrumb."),e()()(),n(141,"tr",14)(142,"td",15)(143,"div",16)(144,"span",17),t(145," p-components-size"),r(146,"br"),e()()(),n(147,"td",18)(148,"code",23),t(149,"string"),e()(),n(150,"td",20)(151,"p")(152,"code"),t(153,"medium"),e()()(),n(154,"td",21)(155,"em")(156,"strong"),t(157,"(opcional)"),e()(),n(158,"p"),t(159,"Define o tamanho dos componentes de formul\xE1rio no template:"),e(),n(160,"ul")(161,"li")(162,"code"),t(163,"small"),e(),t(164,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),n(165,"li")(166,"code"),t(167,"medium"),e(),t(168,": aplica a medida medium de cada componente."),e()(),n(169,"blockquote")(170,"p"),t(171,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(172,"code"),t(173,"medium"),e(),t(174,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(175,"a",24),t(176,"po-theme"),e(),t(177,"."),e()()()(),n(178,"tr",14)(179,"td",15)(180,"div",16)(181,"span",17),t(182," p-literals"),r(183,"br"),e()()(),n(184,"td",18)(185,"code",25),t(186,"PoPageDefaultLiterals"),e()(),n(187,"td",20),t(188,"-"),e(),n(189,"td",21)(190,"em")(191,"strong"),t(192,"(opcional)"),e()(),n(193,"p"),t(194,"Objeto com as literais usadas no "),n(195,"code"),t(196,"po-page-default"),e(),t(197,"."),e(),n(198,"p"),t(199,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),n(200,"pre")(201,"code"),t(202,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),e()(),n(203,"p"),t(204,"Ou passando apenas as literais que deseja customizar:"),e(),n(205,"pre")(206,"code"),t(207,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),e()(),n(208,"p"),t(209,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),n(210,"pre")(211,"code"),t(212,`<po-page-default
  [p-literals]="customLiterals">
</po-page-default>
`),e()(),n(213,"blockquote")(214,"p"),t(215,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),n(216,"a",26)(217,"code"),t(218,"PoI18nService"),e()(),t(219," ou "),n(220,"em"),t(221,"browser"),e(),t(222,"."),e()()()(),n(223,"tr",14)(224,"td",15)(225,"div",16)(226,"span",17),t(227," p-subtitle"),r(228,"br"),e()()(),n(229,"td",18)(230,"code",23),t(231,"string"),e()(),n(232,"td",20),t(233,"-"),e(),n(234,"td",21)(235,"em")(236,"strong"),t(237,"(opcional)"),e()(),n(238,"p"),t(239,"Subtitulo do Header da p\xE1gina"),e()()(),n(240,"tr",14)(241,"td",15)(242,"div",16)(243,"span",17),t(244," p-title"),r(245,"br"),e()()(),n(246,"td",18)(247,"code",23),t(248,"string"),e()(),n(249,"td",20),t(250,"-"),e(),n(251,"td",21)(252,"p"),t(253,"T\xEDtulo da p\xE1gina."),e()()()(),n(254,"h3"),t(255,"Interfaces"),e(),n(256,"h4",27)(257,"code",5),t(258,"PoBreadcrumbItem"),e()(),n(259,"div",2)(260,"p"),t(261,"Interface que define cada item do componente "),n(262,"strong"),t(263,"po-breadcrumb"),e(),t(264,"."),e()(),n(265,"h4",10),t(266,"Propriedades"),e(),n(267,"table",11)(268,"tr",12)(269,"th",13),t(270,"Nome"),e(),n(271,"th",13),t(272,"Tipo"),e(),n(273,"th",13),t(274,"Descri\xE7\xE3o"),e()(),n(275,"tr",14)(276,"td",15)(277,"div",16)(278,"span",17),t(279," action"),r(280,"br"),e()()(),n(281,"td",18)(282,"code",28),t(283,"Function"),e()(),n(284,"td",21)(285,"em")(286,"strong"),t(287,"(opcional)"),e()(),n(288,"p"),t(289,"A\xE7\xE3o executada ao clicar no item."),e(),n(290,"blockquote")(291,"p"),t(292,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),n(293,"em"),t(294,"label"),e(),t(295," do item como par\xE2metro para execu\xE7\xE3o."),e()()()(),n(296,"tr",14)(297,"td",15)(298,"div",16)(299,"span",17),t(300," label"),r(301,"br"),e()()(),n(302,"td",18)(303,"code",23),t(304,"string"),e()(),n(305,"td",21)(306,"p"),t(307,"R\xF3tulo do item."),e()()(),n(308,"tr",14)(309,"td",15)(310,"div",16)(311,"span",17),t(312," link"),r(313,"br"),e()()(),n(314,"td",18)(315,"code",23),t(316,"string"),e()(),n(317,"td",21)(318,"em")(319,"strong"),t(320,"(opcional)"),e()(),n(321,"p"),t(322,"Url do item."),e(),n(323,"blockquote")(324,"p"),t(325,"Caso o item tamb\xE9m contenha uma "),n(326,"em"),t(327,"action"),e(),t(328," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),n(329,"em"),t(330,"link"),e(),t(331,"."),e()(),n(332,"blockquote")(333,"p"),t(334,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),n(335,"strong")(336,"a",29),t(337,"Veja um exemplo de como criar rotas aqui"),e()(),t(338,"."),e()(),n(339,"blockquote")(340,"p"),t(341,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),n(342,"code"),t(343,"p-favorite-service"),e(),t(344," consiga favoritar ou desfavoritar."),e()()()()(),n(345,"h4",27)(346,"code",5),t(347,"PoBreadcrumb"),e()(),n(348,"div",2)(349,"p"),t(350,"Interface que define o "),n(351,"code"),t(352,"po-breadcrumb"),e(),t(353,"."),e()(),n(354,"h4",10),t(355,"Propriedades"),e(),n(356,"table",11)(357,"tr",12)(358,"th",13),t(359,"Nome"),e(),n(360,"th",13),t(361,"Tipo"),e(),n(362,"th",13),t(363,"Descri\xE7\xE3o"),e()(),n(364,"tr",14)(365,"td",15)(366,"div",16)(367,"span",17),t(368," favorite"),r(369,"br"),e()()(),n(370,"td",18)(371,"code",23),t(372,"string"),e()(),n(373,"td",21)(374,"em")(375,"strong"),t(376,"(opcional)"),e()(),n(377,"p"),t(378,"Permite definir uma URL para favoritar ou desfavoritar."),e(),n(379,"blockquote")(380,"p"),t(381,"Para maiores informa\xE7\xF5es verificar a propriedade "),n(382,"code"),t(383,"p-favorite-service"),e(),t(384," do componente "),n(385,"code"),t(386,"po-breadcrumb"),e(),t(387,"."),e()()()(),n(388,"tr",14)(389,"td",15)(390,"div",16)(391,"span",17),t(392," items"),r(393,"br"),e()()(),n(394,"td",18)(395,"code",30),t(396,"Array<PoBreadcrumbItem>"),e()(),n(397,"td",21)(398,"p"),t(399,"Lista de itens do "),n(400,"em"),t(401,"breadcrumb"),e(),t(402,"."),e(),n(403,"p")(404,"strong"),t(405,"Exemplo:"),e()(),n(406,"pre")(407,"code"),t(408,`{ label: 'Po Portal', link: 'portal' }
`),e()()()(),n(409,"tr",14)(410,"td",15)(411,"div",16)(412,"span",17),t(413," params"),r(414,"br"),e()()(),n(415,"td",18)(416,"code",31),t(417,"object"),e()(),n(418,"td",21)(419,"em")(420,"strong"),t(421,"(opcional)"),e()(),n(422,"p"),t(423,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),e()()()(),n(424,"h4",27)(425,"code",5),t(426,"PoPageAction"),e()(),n(427,"div",2)(428,"p"),t(429,"Interface para as a\xE7\xF5es dos componentes po-page-default e po-page-list."),e(),n(430,"blockquote")(431,"p"),t(432,"As propriedades "),n(433,"code"),t(434,"selected"),e(),t(435,", "),n(436,"code"),t(437,"separator"),e(),t(438," e "),n(439,"code"),t(440,"type"),e(),t(441,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),e()()(),n(442,"h4",10),t(443,"Propriedades"),e(),n(444,"table",11)(445,"tr",12)(446,"th",13),t(447,"Nome"),e(),n(448,"th",13),t(449,"Tipo"),e(),n(450,"th",13),t(451,"Descri\xE7\xE3o"),e()(),n(452,"tr",14)(453,"td",15)(454,"div",16)(455,"span",17),t(456," action"),r(457,"br"),e()()(),n(458,"td",18)(459,"code",28),t(460,"Function"),e()(),n(461,"td",21)(462,"em")(463,"strong"),t(464,"(opcional)"),e()(),n(465,"p"),t(466,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),e(),n(467,"blockquote")(468,"p"),t(469,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),n(470,"em"),t(471,"bind"),e(),t(472,"."),e()(),n(473,"p"),t(474,"Exemplo: "),n(475,"code"),t(476,"action: this.myFunction.bind(this)"),e()()()(),n(477,"tr",14)(478,"td",15)(479,"div",16)(480,"span",17),t(481," disabled"),r(482,"br"),e()()(),n(483,"td",18)(484,"code",32),t(485,"boolean "),e(),n(486,"code",28),t(487," Function"),e()(),n(488,"td",21)(489,"em")(490,"strong"),t(491,"(opcional)"),e()(),n(492,"p"),t(493,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),e(),n(494,"p"),t(495,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),e()()(),n(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),t(500," icon"),r(501,"br"),e()()(),n(502,"td",18)(503,"code",23),t(504,"string "),e(),n(505,"code",33),t(506," TemplateRef<void>"),e()(),n(507,"td",21)(508,"em")(509,"strong"),t(510,"(opcional)"),e()(),n(511,"p"),t(512,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),e(),n(513,"p"),t(514,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(515,"a",34),t(516,"Biblioteca de \xEDcones"),e(),t(517,". conforme exemplo abaixo:"),e(),n(518,"pre")(519,"code"),t(520,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),e()(),n(521,"p"),t(522,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),e(),n(523,"pre")(524,"code"),t(525,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),e()(),n(526,"p"),t(527,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(528,"code"),t(529,"TemplateRef"),e(),t(530,`, conforme exemplo abaixo:
component.html:`),e(),n(531,"pre")(532,"code"),t(533,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),e()(),n(534,"p"),t(535,"component.ts:"),e(),n(536,"pre")(537,"code"),t(538,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),e()()()(),n(539,"tr",14)(540,"td",15)(541,"div",16)(542,"span",17),t(543," label"),r(544,"br"),e()()(),n(545,"td",18)(546,"code",23),t(547,"string"),e()(),n(548,"td",21)(549,"p"),t(550,"R\xF3tulo da a\xE7\xE3o."),e()()(),n(551,"tr",14)(552,"td",15)(553,"div",16)(554,"span",17),t(555," selected"),r(556,"br"),e()()(),n(557,"td",18)(558,"code",32),t(559,"boolean"),e()(),n(560,"td",21)(561,"em")(562,"strong"),t(563,"(opcional)"),e()(),n(564,"p"),t(565,"Define se a a\xE7\xE3o est\xE1 selecionada."),e()()(),n(566,"tr",14)(567,"td",15)(568,"div",16)(569,"span",17),t(570," separator"),r(571,"br"),e()()(),n(572,"td",18)(573,"code",32),t(574,"boolean"),e()(),n(575,"td",21)(576,"em")(577,"strong"),t(578,"(opcional)"),e()(),n(579,"p"),t(580,"Atribui uma linha separadora acima do item."),e()()(),n(581,"tr",14)(582,"td",15)(583,"div",16)(584,"span",17),t(585," type"),r(586,"br"),e()()(),n(587,"td",18)(588,"code",23),t(589,"string"),e()(),n(590,"td",21)(591,"em")(592,"strong"),t(593,"(opcional)"),e()(),n(594,"p"),t(595,"Define a cor do item, sendo "),n(596,"code"),t(597,"default"),e(),t(598," o padr\xE3o."),e(),n(599,"p"),t(600,"Valores v\xE1lidos:"),e(),n(601,"ul")(602,"li")(603,"code"),t(604,"default"),e()(),n(605,"li")(606,"code"),t(607,"danger"),e(),t(608," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),e()()()(),n(609,"tr",14)(610,"td",15)(611,"div",16)(612,"span",17),t(613," url"),r(614,"br"),e()()(),n(615,"td",18)(616,"code",23),t(617,"string"),e()(),n(618,"td",21)(619,"em")(620,"strong"),t(621,"(opcional)"),e()(),n(622,"p"),t(623,"URL utilizada no redirecionamento das p\xE1ginas."),e()()(),n(624,"tr",14)(625,"td",15)(626,"div",16)(627,"span",17),t(628," visible"),r(629,"br"),e()()(),n(630,"td",18)(631,"code",32),t(632,"boolean "),e(),n(633,"code",28),t(634," Function"),e()(),n(635,"td",21)(636,"em")(637,"strong"),t(638,"(opcional)"),e()(),n(639,"p"),t(640,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),e(),n(641,"blockquote")(642,"p"),t(643,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),e()(),n(644,"p"),t(645,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),e(),n(646,"ul")(647,"li")(648,"p"),t(649,"Fun\xE7\xE3o que deve retornar um booleano."),e()(),n(650,"li")(651,"p"),t(652,"Informar diretamente um valor booleano."),e()()()()()(),n(653,"h4",27)(654,"code",5),t(655,"PoPageDefaultLiterals"),e()(),n(656,"div",2)(657,"p"),t(658,"Interface para defini\xE7\xE3o das literais usadas no "),n(659,"code"),t(660,"po-page-default"),e(),t(661,"."),e()(),n(662,"h4",10),t(663,"Propriedades"),e(),n(664,"table",11)(665,"tr",12)(666,"th",13),t(667,"Nome"),e(),n(668,"th",13),t(669,"Tipo"),e(),n(670,"th",13),t(671,"Descri\xE7\xE3o"),e()(),n(672,"tr",14)(673,"td",15)(674,"div",16)(675,"span",17),t(676," otherActions"),r(677,"br"),e()()(),n(678,"td",18)(679,"code",23),t(680,"string"),e()(),n(681,"td",21)(682,"em")(683,"strong"),t(684,"(opcional)"),e()(),n(685,"p"),t(686,"Legenda do "),n(687,"code"),t(688,"po-dropdown"),e(),t(689," de a\xE7\xF5es."),e()()()()())},dependencies:[y],encapsulation:2})}return o})();var ge=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(P(X),P(Y))};static \u0275cmp=S({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Default",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return i.changeTab("doc")}),r(3,"sample-po-page-default-doc"),e(),n(4,"po-tab",3),E("p-click",function(){return i.changeTab("web")}),r(5,"sample-po-page-default-basic-view")(6,"sample-po-page-default-labs-view")(7,"sample-po-page-default-dashboard-view"),e()()()),l&2&&(u("p-actions",i.actions),p(2),u("p-active",i.activeTab==="doc"),p(2),u("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[x,C,w,me,se,ue,be],encapsulation:2})}return o})();var Ae=[{path:"",component:ge}],fe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=L({type:o});static \u0275inj=k({imports:[U.forChild(Ae),U]})}return o})();var nt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=L({type:o});static \u0275inj=k({imports:[le,fe]})}return o})();export{nt as DocPoPageDefaultModule};
