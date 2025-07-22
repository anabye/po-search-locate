import{o as _,p as ae}from"./chunk-JYNCG2Y6.js";import{Ab as C,F as Q,Fa as ee,Ga as z,K,La as te,T as X,Wa as ie,ha as Y,ja as Z,la as $,nb as ne,pb as T,zb as v}from"./chunk-HBOGTDFH.js";import{$a as b,Ac as q,Ba as y,Ea as e,Fa as t,Ga as l,Ka as I,La as S,M as V,Nc as J,Pc as F,Rc as j,T as s,Ta as R,U as c,Ua as H,Va as G,Wa as k,Xa as i,Za as M,ab as g,bb as h,eb as x,ha as m,ia as w,oa as f,pa as D,ub as B,wc as N,xc as W,ya as E,yc as O,zc as U}from"./chunk-MIQUIDUB.js";var oe=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Edit"]],template:function(r,n){r&1&&l(0,"po-page-edit",0)},dependencies:[T],encapsulation:2})}return o})();var he=o=>({"docs-sample-code-tabs":o}),le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Page Edit Basic"),t(),e(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.html"),t(),e(13,"pre",7),i(14,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts"),t(),e(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-page-edit-basic"),t(),l(23,"hr")),r&2&&(m(5),y("po-icon "+n.sampleCodeButtonIcon),m(),M(" ",n.sampleCodeButtonLabel,""),m(),E("ngClass",x(4,he,n.hideSampleCodeTabs)))},dependencies:[B,_,v,C,oe],encapsulation:2})}return o})();var pe=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"disableSubmit",label:"Disable Submit"}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}cancel(){this.action="Cancel"}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.properties=[],this.title="PO Page Edit",this.subtitle=""}save(){this.action="Save"}saveNew(){this.action="Save and new"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-labs"]],standalone:!1,decls:34,vars:21,consts:[["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-cancel","p-save","p-save-new","p-breadcrumb","p-components-size","p-disable-submit","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let p=I();e(0,"po-page-edit",3),S("p-cancel",function(){return s(p),c(n.cancel())})("p-save",function(){return s(p),c(n.save())})("p-save-new",function(){return s(p),c(n.saveNew())}),e(1,"div",4),l(2,"po-info",5),t(),l(3,"hr"),e(4,"form")(5,"div",4)(6,"po-input",6),h("ngModelChange",function(a){return s(p),g(n.title,a)||(n.title=a),c(a)}),t(),e(7,"po-input",7),h("ngModelChange",function(a){return s(p),g(n.subtitle,a)||(n.subtitle=a),c(a)}),t(),e(8,"po-checkbox-group",8),h("ngModelChange",function(a){return s(p),g(n.properties,a)||(n.properties=a),c(a)}),t(),e(9,"po-radio-group",9),h("ngModelChange",function(a){return s(p),g(n.componentsSize,a)||(n.componentsSize=a),c(a)}),t()(),l(10,"hr"),e(11,"form",null,0)(13,"div",4)(14,"po-input",10),h("ngModelChange",function(a){return s(p),g(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),c(a)}),t()()(),e(15,"form",null,1)(17,"div",4)(18,"po-input",11),h("ngModelChange",function(a){return s(p),g(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),c(a)}),t(),e(19,"po-input",12),h("ngModelChange",function(a){return s(p),g(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),c(a)}),t()(),e(20,"div",4)(21,"po-button",13),S("p-click",function(){return s(p),c(n.addBreadcrumbItem())}),t()()(),l(22,"hr"),e(23,"form",null,2)(25,"div",4)(26,"po-input",14),h("ngModelChange",function(a){return s(p),g(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),c(a)}),t(),e(27,"po-input",15),h("ngModelChange",function(a){return s(p),g(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),c(a)}),t()(),e(28,"div",4)(29,"po-button",16),S("p-click",function(){return s(p),c(n.addBreadcrumbParam())}),t()()(),e(30,"div",4)(31,"po-input",17),h("ngModelChange",function(a){return s(p),g(n.literals,a)||(n.literals=a),c(a)}),S("p-change",function(){return s(p),c(n.changeLiterals())}),t()(),e(32,"div",4)(33,"po-button",18),S("p-click",function(){return s(p),c(n.restore())}),t()()()()}if(r&2){let p=k(16),u=k(24);E("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disable-submit",n.properties.includes("disableSubmit"))("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),m(2),E("p-value",n.action),m(4),b("ngModel",n.title),m(),b("ngModel",n.subtitle),m(),b("ngModel",n.properties),E("p-options",n.propertiesOptions),m(),b("ngModel",n.componentsSize),E("p-options",n.componentsSizeOptions),m(5),b("ngModel",n.breadcrumb.favorite),m(4),b("ngModel",n.breadcrumbItem.label),m(),b("ngModel",n.breadcrumbItem.link),m(2),E("p-disabled",p.invalid),m(5),b("ngModel",n.breadcrumbParams.property),m(),b("ngModel",n.breadcrumbParams.value),m(2),E("p-disabled",u.invalid),m(2),b("ngModel",n.literals)}},dependencies:[q,N,W,U,O,Q,Y,Z,z,ie,T],encapsulation:2})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Page Edit Labs"),t(),e(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.html"),t(),e(13,"pre",7),i(14,`<po-page-edit
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disable-submit]="properties.includes('disableSubmit')"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-cancel)="cancel()"
  (p-save)="save()"
  (p-save-new)="saveNew()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <hr />

  <form>
    <div class="po-row">
      <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>
      <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

      <po-checkbox-group
        class="po-md-12"
        name="properties"
        [(ngModel)]="properties"
        p-columns="4"
        p-label="Properties"
        [p-options]="propertiesOptions"
      >
      </po-checkbox-group>

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
          class="po-md-6 po-lg-3"
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
          class="po-md-6 po-lg-3"
          p-label="Add breadcrumb params"
          [p-disabled]="formBreadcrumbParams.invalid"
          (p-click)="addBreadcrumbParam()"
        >
        </po-button>
      </div>
    </form>

    <div class="po-row">
      <po-input
        class="po-md-12 po-lg-6"
        name="literals"
        [(ngModel)]="literals"
        p-help='Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-edit>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts"),t(),e(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

import { PoPageEditLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-labs',
  templateUrl: './sample-po-page-edit-labs.component.html',
  standalone: false
})
export class SamplePoPageEditLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageEditLiterals;
  literals: string;
  params: any;
  properties: Array<string>;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disableSubmit', label: 'Disable Submit' }
  ];

  ngOnInit() {
    this.restore();
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

  cancel() {
    this.action = 'Cancel';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.properties = [];
    this.title = 'PO Page Edit';
    this.subtitle = '';
  }

  save() {
    this.action = 'Save';
  }

  saveNew() {
    this.action = 'Save and new';
  }
}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-page-edit-labs"),t(),l(23,"hr")),r&2&&(m(5),y("po-icon "+n.sampleCodeButtonIcon),m(),M(" ",n.sampleCodeButtonLabel,""),m(),E("ngClass",x(4,Pe,n.hideSampleCodeTabs)))},dependencies:[B,_,v,C,pe],encapsulation:2})}return o})();var _e=["formEditUser"],de=(()=>{class o{route;poDialog;poNotification;formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"User Edit"}]};constructor(d,r,n){this.route=d,this.poDialog=r,this.poNotification=n}ngOnInit(){this.initialize()}cancel(){this.initialize()}initialize(){this.birthDate=new Date(1978,11,26),this.email="john.doe@po-ui.com.br",this.fathersName="Mike Doe",this.genre="male",this.graduation="College Degree",this.mothersName="Jane Doe",this.name="John Doe",this.nationality="USA",this.nickname="John",this.placeOfBirth="Colorado",this.userId=122635}save(){this.poNotification.success("Save successfully")}beforeRedirect(d){this.formEditUser.valid?this.route.navigate(["/"]):this.poDialog.confirm({title:`Confirm redirect to ${d}`,message:"There is data that has not been saved yet. Are you sure you want to quit?",confirm:()=>this.route.navigate(["/"])})}static \u0275fac=function(r){return new(r||o)(w(F),w(K),w(X))};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-user"]],viewQuery:function(r,n){if(r&1&&R(_e,7),r&2){let p;H(p=G())&&(n.formEditUser=p.first)}},standalone:!1,decls:18,vars:13,consts:[["formEditUser","ngForm"],["p-title","User Edit",3,"p-cancel","p-save","p-breadcrumb","p-disable-submit"],[1,"po-row"],["name","userId","p-clean","","p-label","User ID","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nickname","p-clean","","p-label","Nickname",1,"po-md-4",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-4",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nationality","p-clean","","p-label","Nationality",1,"po-md-4",3,"ngModelChange","ngModel"],["name","placeOfBirth","p-clean","","p-label","Place Of Birth",1,"po-md-4",3,"ngModelChange","ngModel"],["name","graduation","p-clean","","p-label","Graduation",1,"po-md-4",3,"ngModelChange","ngModel"],["name","fathersName","p-clean","","p-label","Father's Name",1,"po-md-4",3,"ngModelChange","ngModel"],["name","mothersName","p-clean","","p-label","Mother's Name",1,"po-md-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let p=I();e(0,"po-page-edit",1),S("p-cancel",function(){return s(p),c(n.cancel())})("p-save",function(){return s(p),c(n.save())}),e(1,"form",null,0)(3,"div",2)(4,"po-number",3),h("ngModelChange",function(a){return s(p),g(n.userId,a)||(n.userId=a),c(a)}),t(),e(5,"po-email",4),h("ngModelChange",function(a){return s(p),g(n.email,a)||(n.email=a),c(a)}),t(),e(6,"po-input",5),h("ngModelChange",function(a){return s(p),g(n.name,a)||(n.name=a),c(a)}),t()(),e(7,"div",2)(8,"po-input",6),h("ngModelChange",function(a){return s(p),g(n.nickname,a)||(n.nickname=a),c(a)}),t(),e(9,"po-datepicker",7),h("ngModelChange",function(a){return s(p),g(n.birthDate,a)||(n.birthDate=a),c(a)}),t(),e(10,"po-input",8),h("ngModelChange",function(a){return s(p),g(n.genre,a)||(n.genre=a),c(a)}),t()(),e(11,"div",2)(12,"po-input",9),h("ngModelChange",function(a){return s(p),g(n.nationality,a)||(n.nationality=a),c(a)}),t(),e(13,"po-input",10),h("ngModelChange",function(a){return s(p),g(n.placeOfBirth,a)||(n.placeOfBirth=a),c(a)}),t(),e(14,"po-input",11),h("ngModelChange",function(a){return s(p),g(n.graduation,a)||(n.graduation=a),c(a)}),t()(),e(15,"div",2)(16,"po-input",12),h("ngModelChange",function(a){return s(p),g(n.fathersName,a)||(n.fathersName=a),c(a)}),t(),e(17,"po-input",13),h("ngModelChange",function(a){return s(p),g(n.mothersName,a)||(n.mothersName=a),c(a)}),t()()()()}if(r&2){let p=k(2);E("p-breadcrumb",n.breadcrumb)("p-disable-submit",p.invalid),m(4),b("ngModel",n.userId),m(),b("ngModel",n.email),m(),b("ngModel",n.name),m(2),b("ngModel",n.nickname),m(),b("ngModel",n.birthDate),m(),b("ngModel",n.genre),m(2),b("ngModel",n.nationality),m(),b("ngModel",n.placeOfBirth),m(),b("ngModel",n.graduation),m(2),b("ngModel",n.fathersName),m(),b("ngModel",n.mothersName)}},dependencies:[q,N,W,U,O,$,ee,z,te,T],encapsulation:2})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Page Edit - User"),t(),e(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-edit-user/sample-po-page-edit-user.component.html"),t(),e(13,"pre",7),i(14,`<po-page-edit
  p-title="User Edit"
  [p-breadcrumb]="breadcrumb"
  [p-disable-submit]="formEditUser.invalid"
  (p-cancel)="cancel()"
  (p-save)="save()"
>
  <form #formEditUser="ngForm">
    <div class="po-row">
      <po-number class="po-md-4" name="userId" [(ngModel)]="userId" p-clean p-label="User ID" p-required> </po-number>

      <po-email class="po-md-4" name="email" [(ngModel)]="email" p-clean p-label="Email" p-required> </po-email>

      <po-input class="po-md-4" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nickname" [(ngModel)]="nickname" p-clean p-label="Nickname"> </po-input>

      <po-datepicker class="po-md-4" name="birthDate" [(ngModel)]="birthDate" p-clean p-label="Birth Date">
      </po-datepicker>

      <po-input class="po-md-4" name="genre" [(ngModel)]="genre" p-clean p-label="Genre"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nationality" [(ngModel)]="nationality" p-clean p-label="Nationality"> </po-input>

      <po-input class="po-md-4" name="placeOfBirth" [(ngModel)]="placeOfBirth" p-clean p-label="Place Of Birth">
      </po-input>

      <po-input class="po-md-4" name="graduation" [(ngModel)]="graduation" p-clean p-label="Graduation"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="fathersName" [(ngModel)]="fathersName" p-clean p-label="Father's Name">
      </po-input>

      <po-input class="po-md-4" name="mothersName" [(ngModel)]="mothersName" p-clean p-label="Mother's Name">
      </po-input>
    </div>
  </form>
</po-page-edit>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-edit-user/sample-po-page-edit-user.component.ts"),t(),e(19,"pre",9),i(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoDialogService } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-user',
  templateUrl: './sample-po-page-edit-user.component.html',
  standalone: false
})
export class SamplePoPageEditUserComponent implements OnInit {
  @ViewChild('formEditUser', { static: true }) formEditUser: NgForm;

  birthDate: Date;
  email: string;
  fathersName: string;
  genre: string;
  graduation: string;
  mothersName: string;
  name: string;
  nationality: string;
  nickname: string;
  placeOfBirth: string;
  userId: number;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'User Edit' }]
  };

  constructor(
    private route: Router,
    private poDialog: PoDialogService,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.initialize();
  }

  initialize() {
    this.birthDate = new Date(1978, 11, 26);
    this.email = 'john.doe@po-ui.com.br';
    this.fathersName = 'Mike Doe';
    this.genre = 'male';
    this.graduation = 'College Degree';
    this.mothersName = 'Jane Doe';
    this.name = 'John Doe';
    this.nationality = 'USA';
    this.nickname = 'John';
    this.placeOfBirth = 'Colorado';
    this.userId = 122635;
  }

  save() {
    this.poNotification.success(\`Save successfully\`);
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.formEditUser.valid) {
      this.route.navigate(['/']);
    } else {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data that has not been saved yet. Are you sure you want to quit?\`,
        confirm: () => this.route.navigate(['/'])
      });
    }
  }
}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-page-edit-user"),t(),l(23,"hr")),r&2&&(m(5),y("po-icon "+n.sampleCodeButtonIcon),m(),M(" ",n.sampleCodeButtonLabel,""),m(),E("ngClass",x(4,ye,n.hideSampleCodeTabs)))},dependencies:[B,_,v,C,de],encapsulation:2})}return o})();var ce=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-doc"]],standalone:!1,decls:487,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoPageEditLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(r,n){r&1&&(e(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),e(4,"div",2)(5,"p"),i(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),t()(),e(7,"h3",3),i(8,"Componente"),t(),e(9,"h4",4)(10,"code",5),i(11,"PoPageEditComponent"),t()(),e(12,"div",2)(13,"p"),i(14,"O componente "),e(15,"strong"),i(16,"po-page-edit"),t(),i(17,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),t(),e(18,"p"),i(19,'Os bot\xF5es "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade '),e(20,"code"),i(21,"p-disable-submit"),t(),i(22,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida. `),t()(),e(23,"div",6)(24,"h4",7),i(25,"Seletor"),t(),e(26,"pre",8),i(27,`<po-page-edit
    p-breadcrumb="PoBreadcrumb"
    (p-cancel)="EventEmitter"
    p-components-size="string"
    p-disable-submit="boolean"
    p-literals="PoPageEditLiterals"
    (p-save)="EventEmitter"
    (p-save-new)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-edit>
`),t()(),e(28,"h4",9),i(29,"Propriedades"),t(),e(30,"table",10)(31,"tr",11)(32,"th",12),i(33,"Nome"),t(),e(34,"th",12),i(35,"Tipo"),t(),e(36,"th",12),i(37,"Padr\xE3o"),t(),e(38,"th",12),i(39,"Descri\xE7\xE3o"),t()(),e(40,"tr",13)(41,"td",14)(42,"div",15)(43,"span",16),i(44," p-breadcrumb"),l(45,"br"),t()()(),e(46,"td",17)(47,"code",18),i(48,"PoBreadcrumb"),t()(),e(49,"td",19),i(50,"-"),t(),e(51,"td",20)(52,"em")(53,"strong"),i(54,"(opcional)"),t()(),e(55,"p"),i(56,"Objeto com propriedades do breadcrumb."),t()()(),e(57,"tr",13)(58,"td",14)(59,"div",21)(60,"span",22),i(61," (p-cancel)"),l(62,"br"),t()()(),e(63,"td",17)(64,"code",23),i(65,"EventEmitter"),t()(),e(66,"td",19),i(67,"-"),t(),e(68,"td",20)(69,"p"),i(70,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Cancelar".'),t(),e(71,"pre")(72,"code"),i(73,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),t()(),e(74,"blockquote")(75,"p"),i(76,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Cancelar" n\xE3o ser\xE1 exibido.'),t()()()(),e(77,"tr",13)(78,"td",14)(79,"div",15)(80,"span",16),i(81," p-components-size"),l(82,"br"),t()()(),e(83,"td",17)(84,"code",24),i(85,"string"),t()(),e(86,"td",19)(87,"p")(88,"code"),i(89,"medium"),t()()(),e(90,"td",20)(91,"em")(92,"strong"),i(93,"(opcional)"),t()(),e(94,"p"),i(95,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),e(96,"ul")(97,"li")(98,"code"),i(99,"small"),t(),i(100,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),e(101,"li")(102,"code"),i(103,"medium"),t(),i(104,": aplica a medida medium de cada componente."),t()(),e(105,"blockquote")(106,"p"),i(107,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),e(108,"code"),i(109,"medium"),t(),i(110,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),e(111,"a",25),i(112,"po-theme"),t(),i(113,"."),t()()()(),e(114,"tr",13)(115,"td",14)(116,"div",15)(117,"span",16),i(118," p-disable-submit"),l(119,"br"),t()()(),e(120,"td",17)(121,"code",26),i(122,"boolean"),t()(),e(123,"td",19),i(124,"-"),t(),e(125,"td",20)(126,"em")(127,"strong"),i(128,"(opcional)"),t()(),e(129,"p"),i(130,"Desabilita bot\xF5es de submiss\xE3o (save e saveNew)"),t()()(),e(131,"tr",13)(132,"td",14)(133,"div",15)(134,"span",16),i(135," p-literals"),l(136,"br"),t()()(),e(137,"td",17)(138,"code",27),i(139,"PoPageEditLiterals"),t()(),e(140,"td",19),i(141,"-"),t(),e(142,"td",20)(143,"em")(144,"strong"),i(145,"(opcional)"),t()(),e(146,"p"),i(147,"Objeto com as literais usadas no "),e(148,"code"),i(149,"po-page-edit"),t(),i(150,"."),t(),e(151,"p"),i(152,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),e(153,"pre")(154,"code"),i(155,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),t()(),e(156,"p"),i(157,"Ou passando apenas as literais que deseja customizar:"),t(),e(158,"pre")(159,"code"),i(160,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),t()(),e(161,"p"),i(162,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),e(163,"pre")(164,"code"),i(165,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),t()(),e(166,"blockquote")(167,"p"),i(168,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),e(169,"a",28)(170,"code"),i(171,"PoI18nService"),t()(),i(172," ou do browser."),t()()()(),e(173,"tr",13)(174,"td",14)(175,"div",21)(176,"span",22),i(177," (p-save)"),l(178,"br"),t()()(),e(179,"td",17)(180,"code",23),i(181,"EventEmitter"),t()(),e(182,"td",19),i(183,"-"),t(),e(184,"td",20)(185,"p"),i(186,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar".'),t(),e(187,"pre")(188,"code"),i(189,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),t()(),e(190,"blockquote")(191,"p"),i(192,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar" n\xE3o ser\xE1 exibido.'),t()()()(),e(193,"tr",13)(194,"td",14)(195,"div",21)(196,"span",22),i(197," (p-save-new)"),l(198,"br"),t()()(),e(199,"td",17)(200,"code",23),i(201,"EventEmitter"),t()(),e(202,"td",19),i(203,"-"),t(),e(204,"td",20)(205,"p"),i(206,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar e Novo".'),t(),e(207,"pre")(208,"code"),i(209,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),t()(),e(210,"blockquote")(211,"p"),i(212,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar e Novo" n\xE3o ser\xE1 exibido.'),t()()()(),e(213,"tr",13)(214,"td",14)(215,"div",15)(216,"span",16),i(217," p-subtitle"),l(218,"br"),t()()(),e(219,"td",17)(220,"code",24),i(221,"string"),t()(),e(222,"td",19),i(223,"-"),t(),e(224,"td",20)(225,"em")(226,"strong"),i(227,"(opcional)"),t()(),e(228,"p"),i(229,"Subtitulo do Header da p\xE1gina"),t()()(),e(230,"tr",13)(231,"td",14)(232,"div",15)(233,"span",16),i(234," p-title"),l(235,"br"),t()()(),e(236,"td",17)(237,"code",24),i(238,"string"),t()(),e(239,"td",19),i(240,"-"),t(),e(241,"td",20)(242,"p"),i(243,"T\xEDtulo da p\xE1gina."),t()()()(),e(244,"h3"),i(245,"Interfaces"),t(),e(246,"h4",29)(247,"code",5),i(248,"PoBreadcrumbItem"),t()(),e(249,"div",2)(250,"p"),i(251,"Interface que define cada item do componente "),e(252,"strong"),i(253,"po-breadcrumb"),t(),i(254,"."),t()(),e(255,"h4",9),i(256,"Propriedades"),t(),e(257,"table",10)(258,"tr",11)(259,"th",12),i(260,"Nome"),t(),e(261,"th",12),i(262,"Tipo"),t(),e(263,"th",12),i(264,"Descri\xE7\xE3o"),t()(),e(265,"tr",13)(266,"td",14)(267,"div",15)(268,"span",16),i(269," action"),l(270,"br"),t()()(),e(271,"td",17)(272,"code",30),i(273,"Function"),t()(),e(274,"td",20)(275,"em")(276,"strong"),i(277,"(opcional)"),t()(),e(278,"p"),i(279,"A\xE7\xE3o executada ao clicar no item."),t(),e(280,"blockquote")(281,"p"),i(282,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),e(283,"em"),i(284,"label"),t(),i(285," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),e(286,"tr",13)(287,"td",14)(288,"div",15)(289,"span",16),i(290," label"),l(291,"br"),t()()(),e(292,"td",17)(293,"code",24),i(294,"string"),t()(),e(295,"td",20)(296,"p"),i(297,"R\xF3tulo do item."),t()()(),e(298,"tr",13)(299,"td",14)(300,"div",15)(301,"span",16),i(302," link"),l(303,"br"),t()()(),e(304,"td",17)(305,"code",24),i(306,"string"),t()(),e(307,"td",20)(308,"em")(309,"strong"),i(310,"(opcional)"),t()(),e(311,"p"),i(312,"Url do item."),t(),e(313,"blockquote")(314,"p"),i(315,"Caso o item tamb\xE9m contenha uma "),e(316,"em"),i(317,"action"),t(),i(318," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),e(319,"em"),i(320,"link"),t(),i(321,"."),t()(),e(322,"blockquote")(323,"p"),i(324,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),e(325,"strong")(326,"a",31),i(327,"Veja um exemplo de como criar rotas aqui"),t()(),i(328,"."),t()(),e(329,"blockquote")(330,"p"),i(331,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),e(332,"code"),i(333,"p-favorite-service"),t(),i(334," consiga favoritar ou desfavoritar."),t()()()()(),e(335,"h4",29)(336,"code",5),i(337,"PoBreadcrumb"),t()(),e(338,"div",2)(339,"p"),i(340,"Interface que define o "),e(341,"code"),i(342,"po-breadcrumb"),t(),i(343,"."),t()(),e(344,"h4",9),i(345,"Propriedades"),t(),e(346,"table",10)(347,"tr",11)(348,"th",12),i(349,"Nome"),t(),e(350,"th",12),i(351,"Tipo"),t(),e(352,"th",12),i(353,"Descri\xE7\xE3o"),t()(),e(354,"tr",13)(355,"td",14)(356,"div",15)(357,"span",16),i(358," favorite"),l(359,"br"),t()()(),e(360,"td",17)(361,"code",24),i(362,"string"),t()(),e(363,"td",20)(364,"em")(365,"strong"),i(366,"(opcional)"),t()(),e(367,"p"),i(368,"Permite definir uma URL para favoritar ou desfavoritar."),t(),e(369,"blockquote")(370,"p"),i(371,"Para maiores informa\xE7\xF5es verificar a propriedade "),e(372,"code"),i(373,"p-favorite-service"),t(),i(374," do componente "),e(375,"code"),i(376,"po-breadcrumb"),t(),i(377,"."),t()()()(),e(378,"tr",13)(379,"td",14)(380,"div",15)(381,"span",16),i(382," items"),l(383,"br"),t()()(),e(384,"td",17)(385,"code",32),i(386,"Array<PoBreadcrumbItem>"),t()(),e(387,"td",20)(388,"p"),i(389,"Lista de itens do "),e(390,"em"),i(391,"breadcrumb"),t(),i(392,"."),t(),e(393,"p")(394,"strong"),i(395,"Exemplo:"),t()(),e(396,"pre")(397,"code"),i(398,`{ label: 'Po Portal', link: 'portal' }
`),t()()()(),e(399,"tr",13)(400,"td",14)(401,"div",15)(402,"span",16),i(403," params"),l(404,"br"),t()()(),e(405,"td",17)(406,"code",33),i(407,"object"),t()(),e(408,"td",20)(409,"em")(410,"strong"),i(411,"(opcional)"),t()(),e(412,"p"),i(413,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()()(),e(414,"h4",29)(415,"code",5),i(416,"PoPageEditLiterals"),t()(),e(417,"div",2)(418,"p"),i(419,"Interface para defini\xE7\xE3o das literais usadas no "),e(420,"code"),i(421,"po-page-edit"),t(),i(422,"."),t()(),e(423,"h4",9),i(424,"Propriedades"),t(),e(425,"table",10)(426,"tr",11)(427,"th",12),i(428,"Nome"),t(),e(429,"th",12),i(430,"Tipo"),t(),e(431,"th",12),i(432,"Descri\xE7\xE3o"),t()(),e(433,"tr",13)(434,"td",14)(435,"div",15)(436,"span",16),i(437," cancel"),l(438,"br"),t()()(),e(439,"td",17)(440,"code",24),i(441,"string"),t()(),e(442,"td",20)(443,"em")(444,"strong"),i(445,"(opcional)"),t()(),e(446,"p"),i(447,"Label da a\xE7\xE3o "),e(448,"code"),i(449,"cancel"),t(),i(450,"."),t()()(),e(451,"tr",13)(452,"td",14)(453,"div",15)(454,"span",16),i(455," save"),l(456,"br"),t()()(),e(457,"td",17)(458,"code",24),i(459,"string"),t()(),e(460,"td",20)(461,"em")(462,"strong"),i(463,"(opcional)"),t()(),e(464,"p"),i(465,"Label da a\xE7\xE3o "),e(466,"code"),i(467,"save"),t(),i(468,"."),t()()(),e(469,"tr",13)(470,"td",14)(471,"div",15)(472,"span",16),i(473," saveNew"),l(474,"br"),t()()(),e(475,"td",17)(476,"code",24),i(477,"string"),t()(),e(478,"td",20)(479,"em")(480,"strong"),i(481,"(opcional)"),t()(),e(482,"p"),i(483,"Label da a\xE7\xE3o "),e(484,"code"),i(485,"saveNew"),t(),i(486,"."),t()()()()())},dependencies:[_],encapsulation:2})}return o})();var ue=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||o)(w(J),w(F))};static \u0275cmp=f({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),l(3,"sample-po-page-edit-doc"),t(),e(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),l(5,"sample-po-page-edit-basic-view")(6,"sample-po-page-edit-labs-view")(7,"sample-po-page-edit-user-view"),t()()()),r&2&&(E("p-actions",n.actions),m(2),E("p-active",n.activeTab==="doc"),m(2),E("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ne,v,C,le,me,se,ce],encapsulation:2})}return o})();var Be=[{path:"",component:ue}],be=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=D({type:o});static \u0275inj=V({imports:[j.forChild(Be),j]})}return o})();var Ye=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=D({type:o});static \u0275inj=V({imports:[ae,be]})}return o})();export{Ye as DocPoPageEditModule};
