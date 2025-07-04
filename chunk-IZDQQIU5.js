import{o as x,p as Q}from"./chunk-R3BKLGLC.js";import{Ab as C,F as H,Ga as J,Wa as V,ja as G,nb as K,ob as k,zb as P}from"./chunk-TUTTJOS2.js";import{$a as E,Ac as A,Ba as D,Ea as e,Fa as t,Ga as o,Ka as N,La as g,M as T,Nc as R,Pc as I,Rc as O,T as u,U as b,Wa as q,Xa as i,Za as _,ab as S,bb as f,eb as y,ha as r,ia as B,oa as h,pa as L,ub as w,wc as z,xc as W,ya as d,yc as j,zc as U}from"./chunk-MIQUIDUB.js";var X=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-page-detail-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Detail"]],template:function(l,n){l&1&&o(0,"po-page-detail",0)},dependencies:[k],encapsulation:2})}return a})();var re=a=>({"docs-sample-code-tabs":a}),Z=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-page-detail-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Page Detail Basic"),t(),e(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.html"),t(),e(13,"pre",7),i(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts"),t(),e(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),t()()()()(),e(21,"div",10),o(22,"sample-po-page-detail-basic"),t(),o(23,"hr")),l&2&&(r(5),D("po-icon "+n.sampleCodeButtonIcon),r(),_(" ",n.sampleCodeButtonLabel,""),r(),d("ngClass",y(4,re,n.hideSampleCodeTabs)))},dependencies:[w,x,P,C,X],encapsulation:2})}return a})();var $=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let p={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,p):this.breadcrumb.params=p,this.breadcrumbParams={}}back(){this.action="back"}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}edit(){this.action="edit"}remove(){this.action="remove"}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.title="PO Page Detail",this.subtitle=""}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-page-detail-labs"]],standalone:!1,decls:33,vars:18,consts:[["f","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-edit","p-remove","p-breadcrumb","p-components-size","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=N();e(0,"po-page-detail",4),g("p-back",function(){return u(s),b(n.back())})("p-edit",function(){return u(s),b(n.edit())})("p-remove",function(){return u(s),b(n.remove())}),e(1,"div",5),o(2,"po-info",6),t(),o(3,"hr"),e(4,"form",null,0)(6,"po-input",7),f("ngModelChange",function(m){return u(s),S(n.title,m)||(n.title=m),b(m)}),t(),e(7,"po-input",8),f("ngModelChange",function(m){return u(s),S(n.subtitle,m)||(n.subtitle=m),b(m)}),t(),e(8,"po-radio-group",9),f("ngModelChange",function(m){return u(s),S(n.componentsSize,m)||(n.componentsSize=m),b(m)}),t(),o(9,"hr"),e(10,"form",null,1)(12,"div",5)(13,"po-input",10),f("ngModelChange",function(m){return u(s),S(n.breadcrumb.favorite,m)||(n.breadcrumb.favorite=m),b(m)}),t()()(),e(14,"form",null,2)(16,"div",5)(17,"po-input",11),f("ngModelChange",function(m){return u(s),S(n.breadcrumbItem.label,m)||(n.breadcrumbItem.label=m),b(m)}),t(),e(18,"po-input",12),f("ngModelChange",function(m){return u(s),S(n.breadcrumbItem.link,m)||(n.breadcrumbItem.link=m),b(m)}),t()(),e(19,"div",5)(20,"po-button",13),g("p-click",function(){return u(s),b(n.addBreadcrumbItem())}),t()()(),o(21,"hr"),e(22,"form",null,3)(24,"div",5)(25,"po-input",14),f("ngModelChange",function(m){return u(s),S(n.breadcrumbParams.property,m)||(n.breadcrumbParams.property=m),b(m)}),t(),e(26,"po-input",15),f("ngModelChange",function(m){return u(s),S(n.breadcrumbParams.value,m)||(n.breadcrumbParams.value=m),b(m)}),t()(),e(27,"div",5)(28,"po-button",16),g("p-click",function(){return u(s),b(n.addBreadcrumbParam())}),t()()(),e(29,"div",5)(30,"po-input",17),f("ngModelChange",function(m){return u(s),S(n.literals,m)||(n.literals=m),b(m)}),g("p-change",function(){return u(s),b(n.changeLiterals())}),t()(),e(31,"div",5)(32,"po-button",18),g("p-click",function(){return u(s),b(n.restore())}),t()()()()}if(l&2){let s=q(15),c=q(23);d("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),r(2),d("p-value",n.action),r(4),E("ngModel",n.title),r(),E("ngModel",n.subtitle),r(),E("ngModel",n.componentsSize),d("p-options",n.componentsSizeOptions),r(5),E("ngModel",n.breadcrumb.favorite),r(4),E("ngModel",n.breadcrumbItem.label),r(),E("ngModel",n.breadcrumbItem.link),r(2),d("p-disabled",s.invalid),r(5),E("ngModel",n.breadcrumbParams.property),r(),E("ngModel",n.breadcrumbParams.value),r(2),d("p-disabled",c.invalid),r(2),E("ngModel",n.literals)}},dependencies:[A,z,W,U,j,H,G,J,V,k],encapsulation:2})}return a})();var de=a=>({"docs-sample-code-tabs":a}),ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-page-detail-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Page Detail Labs"),t(),e(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.html"),t(),e(13,"pre",7),i(14,`<po-page-detail
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-back)="back()"
  (p-edit)="edit()"
  (p-remove)="remove()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <hr />

  <form #f="ngForm">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>

    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

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
        p-help='Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-detail>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts"),t(),e(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoPageDetailLiterals, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-labs',
  templateUrl: './sample-po-page-detail-labs.component.html',
  standalone: false
})
export class SamplePoPageDetailLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageDetailLiterals;
  literals: string;
  params: any;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
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

  back() {
    this.action = 'back';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  edit() {
    this.action = 'edit';
  }

  remove() {
    this.action = 'remove';
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.title = 'PO Page Detail';
    this.subtitle = '';
  }
}
`),t()()()()(),e(21,"div",10),o(22,"sample-po-page-detail-labs"),t(),o(23,"hr")),l&2&&(r(5),D("po-icon "+n.sampleCodeButtonIcon),r(),_(" ",n.sampleCodeButtonLabel,""),r(),d("ngClass",y(4,de,n.hideSampleCodeTabs)))},dependencies:[w,x,P,C,$],encapsulation:2})}return a})();var te=(()=>{class a{router;birthDate="26/12/1978";email="john.doe@po-ui.com.br";fathersName="Mike Doe";genre="male";graduation="College Degree";mothersName="Jane Doe";name="John Doe";nationality="USA";nickname="John";placeOfBirth="Colorado";userId=122635;breadcrumb={items:[{label:"Home",link:"/"},{label:"User Detail"}]};constructor(p){this.router=p}edit(){this.router.navigate(["/documentation/po-page-edit"],{queryParams:{view:"web"}})}static \u0275fac=function(l){return new(l||a)(B(I))};static \u0275cmp=h({type:a,selectors:[["sample-po-page-detail-user"]],standalone:!1,decls:19,vars:12,consts:[["p-title","User Detail",3,"p-edit","p-breadcrumb"],[1,"po-row"],["p-label","User ID",1,"po-md-4",3,"p-value"],["p-label","E-mail",1,"po-md-4",3,"p-value"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Birth Date",1,"po-md-4",3,"p-value"],["p-label","Genre",1,"po-md-4",3,"p-value"],["p-label","Nationality",1,"po-md-4",3,"p-value"],["p-label","Place Of Birth",1,"po-md-4",3,"p-value"],["p-label","Graduation",1,"po-md-4",3,"p-value"],["p-label","Fathers Name",1,"po-md-4",3,"p-value"],["p-label","Mothers Name",1,"po-md-4",3,"p-value"]],template:function(l,n){l&1&&(e(0,"po-page-detail",0),g("p-edit",function(){return n.edit()}),e(1,"div",1),o(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),e(6,"div",1),o(7,"po-info",5)(8,"po-info",6)(9,"po-info",7),t(),o(10,"hr"),e(11,"div",1),o(12,"po-info",8)(13,"po-info",9)(14,"po-info",10),t(),o(15,"hr"),e(16,"div",1),o(17,"po-info",11)(18,"po-info",12),t()()),l&2&&(d("p-breadcrumb",n.breadcrumb),r(2),d("p-value",n.userId),r(),d("p-value",n.email),r(),d("p-value",n.name),r(3),d("p-value",n.nickname),r(),d("p-value",n.birthDate),r(),d("p-value",n.genre),r(3),d("p-value",n.nationality),r(),d("p-value",n.placeOfBirth),r(),d("p-value",n.graduation),r(3),d("p-value",n.fathersName),r(),d("p-value",n.mothersName))},dependencies:[V,k],encapsulation:2})}return a})();var be=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-page-detail-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Page Detail - User"),t(),e(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-detail-user/sample-po-page-detail-user.component.html"),t(),e(13,"pre",7),i(14,`<po-page-detail p-title="User Detail" [p-breadcrumb]="breadcrumb" (p-edit)="edit()">
  <div class="po-row">
    <po-info class="po-md-4" p-label="User ID" [p-value]="userId"> </po-info>

    <po-info class="po-md-4" p-label="E-mail" [p-value]="email"> </po-info>

    <po-info class="po-md-4" p-label="Name" [p-value]="name"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nickname" [p-value]="nickname"> </po-info>

    <po-info class="po-md-4" p-label="Birth Date" [p-value]="birthDate"> </po-info>

    <po-info class="po-md-4" p-label="Genre" [p-value]="genre"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nationality" [p-value]="nationality"> </po-info>

    <po-info class="po-md-4" p-label="Place Of Birth" [p-value]="placeOfBirth"> </po-info>

    <po-info class="po-md-4" p-label="Graduation" [p-value]="graduation"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Fathers Name" [p-value]="fathersName"> </po-info>

    <po-info class="po-md-4" p-label="Mothers Name" [p-value]="mothersName"> </po-info>
  </div>
</po-page-detail>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-detail-user/sample-po-page-detail-user.component.ts"),t(),e(19,"pre",9),i(20,`import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-user',
  templateUrl: './sample-po-page-detail-user.component.html',
  standalone: false
})
export class SamplePoPageDetailUserComponent {
  birthDate: string = '26/12/1978';
  email: string = 'john.doe@po-ui.com.br';
  fathersName: string = 'Mike Doe';
  genre: string = 'male';
  graduation: string = 'College Degree';
  mothersName: string = 'Jane Doe';
  name: string = 'John Doe';
  nationality: string = 'USA';
  nickname: string = 'John';
  placeOfBirth: string = 'Colorado';
  userId: number = 122635;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'User Detail' }]
  };

  constructor(private router: Router) {}

  edit() {
    this.router.navigate(['/documentation/po-page-edit'], { queryParams: { view: 'web' } });
  }
}
`),t()()()()(),e(21,"div",10),o(22,"sample-po-page-detail-user"),t(),o(23,"hr")),l&2&&(r(5),D("po-icon "+n.sampleCodeButtonIcon),r(),_(" ",n.sampleCodeButtonLabel,""),r(),d("ngClass",y(4,be,n.hideSampleCodeTabs)))},dependencies:[w,x,P,C,te],encapsulation:2})}return a})();var ne=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-page-detail-doc"]],standalone:!1,decls:462,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageDetailLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(l,n){l&1&&(e(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),e(4,"div",2)(5,"p"),i(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),t()(),e(7,"h3",3),i(8,"Componente"),t(),e(9,"h4",4)(10,"code",5),i(11,"PoPageDetailComponent"),t()(),e(12,"div",2)(13,"p"),i(14,"O componente "),e(15,"strong"),i(16,"po-page-detail"),t(),i(17,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover". `),t()(),e(18,"div",6)(19,"h4",7),i(20,"Seletor"),t(),e(21,"pre",8),i(22,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),t()(),e(23,"h4",9),i(24,"Propriedades"),t(),e(25,"table",10)(26,"tr",11)(27,"th",12),i(28,"Nome"),t(),e(29,"th",12),i(30,"Tipo"),t(),e(31,"th",12),i(32,"Padr\xE3o"),t(),e(33,"th",12),i(34,"Descri\xE7\xE3o"),t()(),e(35,"tr",13)(36,"td",14)(37,"div",15)(38,"span",16),i(39," (p-back)"),o(40,"br"),t()()(),e(41,"td",17)(42,"code",18),i(43,"EventEmitter"),t()(),e(44,"td",19),i(45,"-"),t(),e(46,"td",20)(47,"p"),i(48,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Voltar".'),t(),e(49,"pre")(50,"code"),i(51,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),t()(),e(52,"blockquote")(53,"p"),i(54,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Voltar" n\xE3o ser\xE1 exibido.'),t()()()(),e(55,"tr",13)(56,"td",14)(57,"div",21)(58,"span",22),i(59," p-breadcrumb"),o(60,"br"),t()()(),e(61,"td",17)(62,"code",23),i(63,"PoBreadcrumb"),t()(),e(64,"td",19),i(65,"-"),t(),e(66,"td",20)(67,"p"),i(68,"Objeto com propriedades do breadcrumb."),t()()(),e(69,"tr",13)(70,"td",14)(71,"div",21)(72,"span",22),i(73," p-components-size"),o(74,"br"),t()()(),e(75,"td",17)(76,"code",24),i(77,"string"),t()(),e(78,"td",19)(79,"p")(80,"code"),i(81,"medium"),t()()(),e(82,"td",20)(83,"em")(84,"strong"),i(85,"(opcional)"),t()(),e(86,"p"),i(87,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),e(88,"ul")(89,"li")(90,"code"),i(91,"small"),t(),i(92,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),e(93,"li")(94,"code"),i(95,"medium"),t(),i(96,": aplica a medida medium de cada componente."),t()(),e(97,"blockquote")(98,"p"),i(99,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),e(100,"code"),i(101,"medium"),t(),i(102,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),e(103,"a",25),i(104,"po-theme"),t(),i(105,"."),t()()()(),e(106,"tr",13)(107,"td",14)(108,"div",15)(109,"span",16),i(110," (p-edit)"),o(111,"br"),t()()(),e(112,"td",17)(113,"code",18),i(114,"EventEmitter"),t()(),e(115,"td",19),i(116,"-"),t(),e(117,"td",20)(118,"p"),i(119,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Editar".'),t(),e(120,"pre")(121,"code"),i(122,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),t()(),e(123,"blockquote")(124,"p"),i(125,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Editar" n\xE3o ser\xE1 exibido.'),t()()()(),e(126,"tr",13)(127,"td",14)(128,"div",21)(129,"span",22),i(130," p-literals"),o(131,"br"),t()()(),e(132,"td",17)(133,"code",26),i(134,"PoPageDetailLiterals"),t()(),e(135,"td",19),i(136,"-"),t(),e(137,"td",20)(138,"em")(139,"strong"),i(140,"(opcional)"),t()(),e(141,"p"),i(142,"Objeto com as literais usadas no "),e(143,"code"),i(144,"po-page-detail"),t(),i(145,"."),t(),e(146,"p"),i(147,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),e(148,"pre")(149,"code"),i(150,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),t()(),e(151,"p"),i(152,"Ou passando apenas as literais que deseja customizar:"),t(),e(153,"pre")(154,"code"),i(155,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),t()(),e(156,"p"),i(157,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),e(158,"pre")(159,"code"),i(160,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),t()(),e(161,"blockquote")(162,"p"),i(163,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),e(164,"a",27)(165,"code"),i(166,"PoI18nService"),t()(),i(167," ou do browser."),t()()()(),e(168,"tr",13)(169,"td",14)(170,"div",15)(171,"span",16),i(172," (p-remove)"),o(173,"br"),t()()(),e(174,"td",17)(175,"code",18),i(176,"EventEmitter"),t()(),e(177,"td",19),i(178,"-"),t(),e(179,"td",20)(180,"p"),i(181,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Remover".'),t(),e(182,"pre")(183,"code"),i(184,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),t()(),e(185,"blockquote")(186,"p"),i(187,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Remover" n\xE3o ser\xE1 exibido.'),t()()()(),e(188,"tr",13)(189,"td",14)(190,"div",21)(191,"span",22),i(192," p-subtitle"),o(193,"br"),t()()(),e(194,"td",17)(195,"code",24),i(196,"string"),t()(),e(197,"td",19),i(198,"-"),t(),e(199,"td",20)(200,"em")(201,"strong"),i(202,"(opcional)"),t()(),e(203,"p"),i(204,"Subtitulo do Header da p\xE1gina"),t()()(),e(205,"tr",13)(206,"td",14)(207,"div",21)(208,"span",22),i(209," p-title"),o(210,"br"),t()()(),e(211,"td",17)(212,"code",24),i(213,"string"),t()(),e(214,"td",19),i(215,"-"),t(),e(216,"td",20)(217,"p"),i(218,"T\xEDtulo da p\xE1gina."),t()()()(),e(219,"h3"),i(220,"Interfaces"),t(),e(221,"h4",28)(222,"code",5),i(223,"PoBreadcrumbItem"),t()(),e(224,"div",2)(225,"p"),i(226,"Interface que define cada item do componente "),e(227,"strong"),i(228,"po-breadcrumb"),t(),i(229,"."),t()(),e(230,"h4",9),i(231,"Propriedades"),t(),e(232,"table",10)(233,"tr",11)(234,"th",12),i(235,"Nome"),t(),e(236,"th",12),i(237,"Tipo"),t(),e(238,"th",12),i(239,"Descri\xE7\xE3o"),t()(),e(240,"tr",13)(241,"td",14)(242,"div",21)(243,"span",22),i(244," action"),o(245,"br"),t()()(),e(246,"td",17)(247,"code",29),i(248,"Function"),t()(),e(249,"td",20)(250,"em")(251,"strong"),i(252,"(opcional)"),t()(),e(253,"p"),i(254,"A\xE7\xE3o executada ao clicar no item."),t(),e(255,"blockquote")(256,"p"),i(257,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),e(258,"em"),i(259,"label"),t(),i(260," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),e(261,"tr",13)(262,"td",14)(263,"div",21)(264,"span",22),i(265," label"),o(266,"br"),t()()(),e(267,"td",17)(268,"code",24),i(269,"string"),t()(),e(270,"td",20)(271,"p"),i(272,"R\xF3tulo do item."),t()()(),e(273,"tr",13)(274,"td",14)(275,"div",21)(276,"span",22),i(277," link"),o(278,"br"),t()()(),e(279,"td",17)(280,"code",24),i(281,"string"),t()(),e(282,"td",20)(283,"em")(284,"strong"),i(285,"(opcional)"),t()(),e(286,"p"),i(287,"Url do item."),t(),e(288,"blockquote")(289,"p"),i(290,"Caso o item tamb\xE9m contenha uma "),e(291,"em"),i(292,"action"),t(),i(293," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),e(294,"em"),i(295,"link"),t(),i(296,"."),t()(),e(297,"blockquote")(298,"p"),i(299,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),e(300,"strong")(301,"a",30),i(302,"Veja um exemplo de como criar rotas aqui"),t()(),i(303,"."),t()(),e(304,"blockquote")(305,"p"),i(306,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),e(307,"code"),i(308,"p-favorite-service"),t(),i(309," consiga favoritar ou desfavoritar."),t()()()()(),e(310,"h4",28)(311,"code",5),i(312,"PoBreadcrumb"),t()(),e(313,"div",2)(314,"p"),i(315,"Interface que define o "),e(316,"code"),i(317,"po-breadcrumb"),t(),i(318,"."),t()(),e(319,"h4",9),i(320,"Propriedades"),t(),e(321,"table",10)(322,"tr",11)(323,"th",12),i(324,"Nome"),t(),e(325,"th",12),i(326,"Tipo"),t(),e(327,"th",12),i(328,"Descri\xE7\xE3o"),t()(),e(329,"tr",13)(330,"td",14)(331,"div",21)(332,"span",22),i(333," favorite"),o(334,"br"),t()()(),e(335,"td",17)(336,"code",24),i(337,"string"),t()(),e(338,"td",20)(339,"em")(340,"strong"),i(341,"(opcional)"),t()(),e(342,"p"),i(343,"Permite definir uma URL para favoritar ou desfavoritar."),t(),e(344,"blockquote")(345,"p"),i(346,"Para maiores informa\xE7\xF5es verificar a propriedade "),e(347,"code"),i(348,"p-favorite-service"),t(),i(349," do componente "),e(350,"code"),i(351,"po-breadcrumb"),t(),i(352,"."),t()()()(),e(353,"tr",13)(354,"td",14)(355,"div",21)(356,"span",22),i(357," items"),o(358,"br"),t()()(),e(359,"td",17)(360,"code",31),i(361,"Array<PoBreadcrumbItem>"),t()(),e(362,"td",20)(363,"p"),i(364,"Lista de itens do "),e(365,"em"),i(366,"breadcrumb"),t(),i(367,"."),t(),e(368,"p")(369,"strong"),i(370,"Exemplo:"),t()(),e(371,"pre")(372,"code"),i(373,`{ label: 'Po Portal', link: 'portal' }
`),t()()()(),e(374,"tr",13)(375,"td",14)(376,"div",21)(377,"span",22),i(378," params"),o(379,"br"),t()()(),e(380,"td",17)(381,"code",32),i(382,"object"),t()(),e(383,"td",20)(384,"em")(385,"strong"),i(386,"(opcional)"),t()(),e(387,"p"),i(388,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()()(),e(389,"h4",28)(390,"code",5),i(391,"PoPageDetailLiterals"),t()(),e(392,"div",2)(393,"p"),i(394,"Interface para defini\xE7\xE3o das literais usadas no "),e(395,"code"),i(396,"po-page-detail"),t(),i(397,"."),t()(),e(398,"h4",9),i(399,"Propriedades"),t(),e(400,"table",10)(401,"tr",11)(402,"th",12),i(403,"Nome"),t(),e(404,"th",12),i(405,"Tipo"),t(),e(406,"th",12),i(407,"Descri\xE7\xE3o"),t()(),e(408,"tr",13)(409,"td",14)(410,"div",21)(411,"span",22),i(412," back"),o(413,"br"),t()()(),e(414,"td",17)(415,"code",24),i(416,"string"),t()(),e(417,"td",20)(418,"em")(419,"strong"),i(420,"(opcional)"),t()(),e(421,"p"),i(422,"Label da a\xE7\xE3o "),e(423,"code"),i(424,"back"),t(),i(425,"."),t()()(),e(426,"tr",13)(427,"td",14)(428,"div",21)(429,"span",22),i(430," edit"),o(431,"br"),t()()(),e(432,"td",17)(433,"code",24),i(434,"string"),t()(),e(435,"td",20)(436,"em")(437,"strong"),i(438,"(opcional)"),t()(),e(439,"p"),i(440,"Label da a\xE7\xE3o "),e(441,"code"),i(442,"edit"),t(),i(443,"."),t()()(),e(444,"tr",13)(445,"td",14)(446,"div",21)(447,"span",22),i(448," remove"),o(449,"br"),t()()(),e(450,"td",17)(451,"code",24),i(452,"string"),t()(),e(453,"td",20)(454,"em")(455,"strong"),i(456,"(opcional)"),t()(),e(457,"p"),i(458,"Label da a\xE7\xE3o "),e(459,"code"),i(460,"remove"),t(),i(461,"."),t()()()()())},dependencies:[x],encapsulation:2})}return a})();var ae=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(B(R),B(I))};static \u0275cmp=h({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Detail",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return n.changeTab("doc")}),o(3,"sample-po-page-detail-doc"),t(),e(4,"po-tab",3),g("p-click",function(){return n.changeTab("web")}),o(5,"sample-po-page-detail-basic-view")(6,"sample-po-page-detail-labs-view")(7,"sample-po-page-detail-user-view"),t()()()),l&2&&(d("p-actions",n.actions),r(2),d("p-active",n.activeTab==="doc"),r(2),d("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[K,P,C,Z,ee,ie,ne],encapsulation:2})}return a})();var Ee=[{path:"",component:ae}],oe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=L({type:a});static \u0275inj=T({imports:[O.forChild(Ee),O]})}return a})();var je=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=L({type:a});static \u0275inj=T({imports:[Q,oe]})}return a})();export{je as DocPoPageDetailModule};
