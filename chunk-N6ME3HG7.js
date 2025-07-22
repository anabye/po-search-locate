import{o as v,p as re}from"./chunk-JYNCG2Y6.js";import{Aa as ee,Ab as S,Db as ae,F as Y,Fa as te,Ga as ne,I as W,La as oe,Sa as ie,T as Z,ca as D,ha as $,nb as q,zb as f}from"./chunk-HBOGTDFH.js";import{$a as E,Ac as F,Ba as y,Ea as n,Fa as e,Ga as r,Ka as B,L as Q,La as u,M as V,Nc as K,Pc as X,Rc as G,T as h,Ta as j,U as g,Ua as z,Va as R,Xa as t,Za as C,ab as w,bb as x,cb as U,eb as T,ha as s,ia as P,oa as c,pa as A,ub as M,wc as N,xc as I,ya as m,yc as L,zc as O}from"./chunk-MIQUIDUB.js";var le=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-container-basic"]],standalone:!1,decls:1,vars:0,template:function(a,i){a&1&&r(0,"po-container")},dependencies:[D],encapsulation:2})}return o})();var fe=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-container-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Container Basic"),e(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-container-basic/sample-po-container-basic.component.html"),e(),n(13,"pre",7),t(14,`<po-container></po-container>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-container-basic/sample-po-container-basic.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-container-basic',
  templateUrl: './sample-po-container-basic.component.html',
  standalone: false
})
export class SamplePoContainerBasicComponent {}
`),e()()()()(),n(21,"div",10),r(22,"sample-po-container-basic"),e(),r(23,"hr")),a&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),C(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",T(4,fe,i.hideSampleCodeTabs)))},dependencies:[M,v,f,S,le],encapsulation:2})}return o})();var de=(()=>{class o{content;title;height;properties;propertiesOptions=[{value:"noBorder",label:"No Border"},{value:"noPadding",label:"No Padding"}];ngOnInit(){this.restore()}restore(){this.title=void 0,this.content=void 0,this.height=void 0,this.properties=[]}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-container-labs"]],standalone:!1,decls:13,vars:10,consts:[["f","ngForm"],[3,"p-title","p-height","p-no-border","p-no-padding"],[1,"po-row"],["name","title","p-label","Titulo",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let d=B();n(0,"po-container",1),t(1),e(),r(2,"hr"),n(3,"form",null,0)(5,"div",2)(6,"po-input",3),x("ngModelChange",function(p){return h(d),w(i.title,p)||(i.title=p),g(p)}),e(),n(7,"po-number",4),x("ngModelChange",function(p){return h(d),w(i.height,p)||(i.height=p),g(p)}),e(),n(8,"po-checkbox-group",5),x("ngModelChange",function(p){return h(d),w(i.properties,p)||(i.properties=p),g(p)}),e()(),n(9,"div",2)(10,"po-textarea",6),x("ngModelChange",function(p){return h(d),w(i.content,p)||(i.content=p),g(p)}),e()(),n(11,"div",2)(12,"po-button",7),u("p-click",function(){return h(d),g(i.restore())}),e()()()}a&2&&(m("p-title",i.title)("p-height",i.height)("p-no-border",i.properties.includes("noBorder"))("p-no-padding",i.properties.includes("noPadding")),s(),C(" ",i.content,`
`),s(5),E("ngModel",i.title),s(),E("ngModel",i.height),s(),E("ngModel",i.properties),m("p-options",i.propertiesOptions),s(2),E("ngModel",i.content))},dependencies:[F,N,I,O,L,Y,D,$,ne,oe,ie],encapsulation:2})}return o})();var we=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-container-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Container Labs"),e(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-container-labs/sample-po-container-labs.component.html"),e(),n(13,"pre",7),t(14,`<po-container
  [p-title]="title"
  [p-height]="height"
  [p-no-border]="properties.includes('noBorder')"
  [p-no-padding]="properties.includes('noPadding')"
>
  { { content }}
</po-container>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="title" [(ngModel)]="title" p-label="Titulo"> </po-input>

    <po-number class="po-md-4" name="height" [(ngModel)]="height" p-label="Height"> </po-number>

    <po-checkbox-group
      class="po-md-4"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" [(ngModel)]="content" name="content" p-label="Content"> </po-textarea>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-container-labs/sample-po-container-labs.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-container-labs',
  templateUrl: './sample-po-container-labs.component.html',
  standalone: false
})
export class SamplePoContainerLabsComponent implements OnInit {
  content: string;
  title: string;
  height: number;
  properties: Array<string>;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'noBorder', label: 'No Border' },
    { value: 'noPadding', label: 'No Padding' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.title = undefined;
    this.content = undefined;
    this.height = undefined;
    this.properties = [];
  }
}
`),e()()()()(),n(21,"div",10),r(22,"sample-po-container-labs"),e(),r(23,"hr")),a&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),C(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",T(4,we,i.hideSampleCodeTabs)))},dependencies:[M,v,f,S,de],encapsulation:2})}return o})();var H=(()=>{class o{getColumns(){return[{property:"cities",label:"Cities that most downloaded PO"},{property:"packageVersion",label:"Package version"},{property:"downloads"}]}getItems(){return[{cities:"S\xE3o Paulo",packageVersion:"3.0.0-beta.1",downloads:"2000"},{cities:"Joinville",packageVersion:"2.9.1",downloads:"1000"},{cities:"Rio de Janeiro",packageVersion:"3.0.0",downloads:"250"},{cities:"Santa Catarina",packageVersion:"1.9.1",downloads:"100"},{cities:"Curitiba",packageVersion:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",packageVersion:"1.9.1",downloads:"250"},{cities:"Londrina",packageVersion:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",packageVersion:"1.9.1",downloads:"1100"}]}static \u0275fac=function(a){return new(a||o)};static \u0275prov=Q({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ye=["formShare"],ce=(()=>{class o{poNotification;sampleDashboardService;formShare;poModal;columns;email=void 0;isSubscribed=!1;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"Disable notification",icon:"an an-bell",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};cancelAction={action:()=>{this.modalClose()},label:"Cancel"};shareAction={action:()=>{this.share()},label:"Share"};constructor(l,a){this.poNotification=l,this.sampleDashboardService=a}ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}ngAfterContentChecked(){this.shareAction.danger=this.formShare.invalid}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Invalid email."),this.modalClose()}disableNotification(){this.isSubscribed=!0}static \u0275fac=function(a){return new(a||o)(P(Z),P(H))};static \u0275cmp=c({type:o,selectors:[["sample-po-container-dashboard"]],viewQuery:function(a,i){if(a&1&&(j(ye,7),j(W,5)),a&2){let d;z(d=R())&&(i.formShare=d.first),z(d=R())&&(i.poModal=d.first)}},standalone:!1,features:[U([H])],decls:38,vars:8,consts:[["formShare","ngForm"],["p-title","Dashboard",3,"p-actions","p-breadcrumb"],[1,"po-lg-6"],["p-title","Daily visitors",1,"po-lg-6","po-mb-1"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-container-dashboard"],["p-title","Most viewed page",1,"po-lg-6","po-mb-1"],["p-title","Website status",1,"po-lg-6","po-mb-1"],["p-title","NPM downloads",1,"po-lg-6","po-mb-1"],["p-title","Devforum PO questions",1,"po-lg-6","po-mb-1"],["p-title","Angular versions supported",1,"po-lg-6","po-mb-1"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(a,i){if(a&1){let d=B();n(0,"po-page-default",1)(1,"po-container",2)(2,"po-widget",3)(3,"div",4),t(4,"540"),e(),n(5,"div",5),t(6,"www.po.com.br"),e()(),n(7,"po-widget",6)(8,"div",4),t(9,"300 views"),e(),n(10,"div",5),t(11,"https://po-ui.io"),e()(),n(12,"po-widget",7)(13,"div",4),t(14,"Online"),e(),n(15,"div",5),t(16,"21 days"),e()(),n(17,"po-widget",8)(18,"div",4),t(19,"266"),e(),n(20,"div",5),t(21,"@po-ui/ng-components - 2.0.0"),e()(),n(22,"po-widget",9)(23,"div",4),t(24,"800 questions"),e(),n(25,"div",5),t(26,"https://devforum.po.com.br"),e()(),n(27,"po-widget",10)(28,"div",4),t(29,"AngularJS - Angular 7"),e(),n(30,"div",5),t(31,"Angular 7 most downloaded"),e()()(),n(32,"po-container",2),r(33,"po-table",11),e()(),n(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),x("ngModelChange",function(p){return h(d),w(i.email,p)||(i.email=p),g(p)}),e()()()}a&2&&(m("p-actions",i.actions)("p-breadcrumb",i.breadcrumb),s(33),m("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",!1),s(),m("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),s(3),E("ngModel",i.email))},dependencies:[F,N,I,O,L,D,te,W,q,ee,ae],styles:[".sample-container-dashboard[_ngcontent-%COMP%]{color:#9da7a9;font-family:NunitoSans;font-size:14px}"]})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-container-dashboard-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Container - Dashboard"),e(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-container-dashboard/sample-po-container-dashboard.component.html"),e(),n(13,"pre",7),t(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
  <po-container class="po-lg-6">
    <po-widget class="po-lg-6 po-mb-1" p-title="Daily visitors">
      <div class="po-font-subtitle po-text-center">540</div>
      <div class="po-text-center sample-container-dashboard">www.po.com.br</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Most viewed page">
      <div class="po-font-subtitle po-text-center">300 views</div>
      <div class="po-text-center sample-container-dashboard">https://po-ui.io</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Website status">
      <div class="po-font-subtitle po-text-center">Online</div>
      <div class="po-text-center sample-container-dashboard">21 days</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="NPM downloads">
      <div class="po-font-subtitle po-text-center">266</div>
      <div class="po-text-center sample-container-dashboard">&#64;po-ui/ng-components - 2.0.0</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Devforum PO questions">
      <div class="po-font-subtitle po-text-center">800 questions</div>
      <div class="po-text-center sample-container-dashboard">https://devforum.po.com.br</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Angular versions supported">
      <div class="po-font-subtitle po-text-center">AngularJS - Angular 7</div>
      <div class="po-text-center sample-container-dashboard">Angular 7 most downloaded</div>
    </po-widget>
  </po-container>

  <po-container class="po-lg-6">
    <po-table [p-columns]="columns" [p-items]="items" p-striped="true" [p-hide-table-search]="false"> </po-table>
  </po-container>
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
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-container-dashboard/sample-po-container-dashboard.component.ts"),e(),n(19,"pre",9),t(20,`import { AfterContentChecked, Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SampleDashboardService } from './sample-po-container-dashboard.service';

import {
  PoBreadcrumb,
  PoModalAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoTableColumn
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-container-dashboard',
  templateUrl: './sample-po-container-dashboard.component.html',
  styles: [
    \`
      .sample-container-dashboard {
        color: #9da7a9;
        font-family: NunitoSans;
        font-size: 14px;
      }
    \`
  ],
  providers: [SampleDashboardService],
  standalone: false
})
export class SamplePoContainerDashboardComponent implements AfterContentChecked, OnInit {
  @ViewChild('formShare', { static: true }) formShare: NgForm;
  @ViewChild(PoModalComponent) poModal: PoModalComponent;

  columns: Array<PoTableColumn>;
  email: string = undefined;
  isSubscribed: boolean = false;
  items: Array<object>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Share', action: this.modalOpen.bind(this), icon: 'an an-share' },
    {
      label: 'Disable notification',
      icon: 'an an-bell',
      action: this.disableNotification.bind(this),
      disabled: () => this.isSubscribed
    }
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

  ngOnInit() {
    this.columns = this.sampleDashboardService.getColumns();
    this.items = this.sampleDashboardService.getItems();
  }

  ngAfterContentChecked() {
    this.shareAction.danger = this.formShare.invalid;
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
      this.poNotification.error(\`Invalid email.\`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }
}
`),e(),n(21,"label",6),t(22,"sample-po-container-dashboard/sample-po-container-dashboard.service.ts"),e(),n(23,"pre",9),t(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SampleDashboardService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cities', label: 'Cities that most downloaded PO' },
      { property: 'packageVersion', label: 'Package version' },
      { property: 'downloads' }
    ];
  }

  getItems() {
    return [
      { cities: 'S\xE3o Paulo', packageVersion: '3.0.0-beta.1', downloads: '2000' },
      { cities: 'Joinville', packageVersion: '2.9.1', downloads: '1000' },
      { cities: 'Rio de Janeiro', packageVersion: '3.0.0', downloads: '250' },
      { cities: 'Santa Catarina', packageVersion: '1.9.1', downloads: '100' },
      { cities: 'Curitiba', packageVersion: '2.0.0-beta.2', downloads: '1040' },
      { cities: 'Goiania', packageVersion: '1.9.1', downloads: '250' },
      { cities: 'Londrina', packageVersion: '1.9.1', downloads: '35' },
      { cities: 'Belo Horizonte', packageVersion: '1.9.1', downloads: '1100' }
    ];
  }
}
`),e()()()()(),n(25,"div",10),r(26,"sample-po-container-dashboard"),e(),r(27,"hr")),a&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),C(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",T(4,Me,i.hideSampleCodeTabs)))},dependencies:[M,v,f,S,ce],encapsulation:2})}return o})();var be=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-container-doc"]],standalone:!1,decls:277,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoContainerModule } from '@po-ui/ng-components';"),e()(),n(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente "),n(7,"code"),t(8,"po-container"),e(),t(9,"."),e()(),n(10,"h3",3),t(11,"Componente"),e(),n(12,"h4",4)(13,"code",5),t(14,"PoContainerComponent"),e()(),n(15,"div",2)(16,"p"),t(17,"O "),n(18,"code"),t(19,"po-container"),e(),t(20,` \xE9 um componente que visa facilitar o agrupamento de conte\xFAdos.
Por padr\xE3o o mesmo exibe uma borda, um efeito de sombra ao seu redor e um espa\xE7amento em sua parte interna, os quais
podem ser desabilitados. Ao remover sua borda a sombra tamb\xE9m ser\xE1 removida. Al\xE9m disso, sua altura acompanha a
quantidade do conte\xFAdo, por\xE9m pode ser fixada. Para controlar sua largura, utilize o `),n(21,"a",6),t(22,"Grid System"),e(),t(23,`,
assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),e(),n(24,"h4"),t(25,"Tokens customiz\xE1veis"),e(),n(26,"p"),t(27,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),n(28,"blockquote")(29,"p"),t(30,"Para maiores informa\xE7\xF5es, acesse o guia "),n(31,"a",7),t(32,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(33,"."),e()(),n(34,"table")(35,"thead")(36,"tr")(37,"th"),t(38,"Propriedade"),e(),n(39,"th"),t(40,"Descri\xE7\xE3o"),e(),n(41,"th"),t(42,"Valor Padr\xE3o"),e()()(),n(43,"tbody")(44,"tr")(45,"td")(46,"strong"),t(47,"Default Values - CONTENT"),e()(),r(48,"td")(49,"td"),e(),n(50,"tr")(51,"td")(52,"code"),t(53,"--padding"),e(),t(54," \xA0"),e(),n(55,"td"),t(56,"Preenchimento"),e(),n(57,"td")(58,"code"),t(59,"var(--spacing-sm)"),e()()(),n(60,"tr")(61,"td")(62,"code"),t(63,"--border-radius"),e(),t(64," \xA0"),e(),n(65,"td"),t(66,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),n(67,"td")(68,"code"),t(69,"var(--border-radius-md)"),e()()(),n(70,"tr")(71,"td")(72,"code"),t(73,"--border-width"),e(),t(74," \xA0"),e(),n(75,"td"),t(76,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),e(),n(77,"td")(78,"code"),t(79,"var(--border-width-sm)"),e()()(),n(80,"tr")(81,"td")(82,"code"),t(83,"--border-color"),e(),t(84," \xA0"),e(),n(85,"td"),t(86,"Cor da borda"),e(),n(87,"td")(88,"code"),t(89,"var(--color-neutral-light-20)"),e()()(),n(90,"tr")(91,"td")(92,"code"),t(93,"--background"),e(),t(94," \xA0"),e(),n(95,"td"),t(96,"Cor de background"),e(),n(97,"td")(98,"code"),t(99,"var(--color-neutral-light-00)"),e()()(),n(100,"tr")(101,"td")(102,"strong"),t(103,"Default Values - TITLE"),e()(),r(104,"td")(105,"td"),e(),n(106,"tr")(107,"td")(108,"code"),t(109,"--font-family"),e(),t(110," \xA0"),e(),n(111,"td"),t(112,"Font aplicado ao titulo"),e(),n(113,"td")(114,"code"),t(115,"var(--font-family-theme)"),e()()(),n(116,"tr")(117,"td")(118,"code"),t(119,"--line-weight"),e(),t(120," \xA0"),e(),n(121,"td"),t(122,"Espessura da Fonte a ser aplicada do titulo"),e(),n(123,"td")(124,"code"),t(125,"var(--font-weight-semibold)"),e()()(),n(126,"tr")(127,"td")(128,"code"),t(129,"--line-height"),e(),t(130," \xA0"),e(),n(131,"td"),t(132,"tamanho da linha do titulo"),e(),n(133,"td")(134,"code"),t(135,"var(--line-height-md)"),e()()(),n(136,"tr")(137,"td")(138,"code"),t(139,"--text-color"),e(),t(140," \xA0"),e(),n(141,"td"),t(142,"Cor do Texto do titulo"),e(),n(143,"td")(144,"code"),t(145,"var(--color-neutral-dark-90)"),e()()(),n(146,"tr")(147,"td")(148,"code"),t(149,"--font-size"),e(),t(150," \xA0"),e(),n(151,"td"),t(152,"Tamanho da fonte do titulo"),e(),n(153,"td")(154,"code"),t(155,"1.125rem"),e()()(),n(156,"tr")(157,"td")(158,"code"),t(159,"--letter-spacing"),e(),t(160," \xA0"),e(),n(161,"td"),t(162,"distancia entre letras do titulo"),e(),n(163,"td")(164,"code"),t(165,"0.017rem"),e()()(),n(166,"tr")(167,"td")(168,"code"),t(169,"--margin"),e(),t(170," \xA0"),e(),n(171,"td"),t(172,"Margin entre o titulo e o conteudo"),e(),n(173,"td")(174,"code"),t(175,"0 0 var(--spacing-xs)"),e()()()()()(),n(176,"div",8)(177,"h4",9),t(178,"Seletor"),e(),n(179,"pre",10),t(180,`<po-container
    p-height="number"
    p-no-border="boolean"
    p-no-padding="boolean"
    p-title="string" >
</po-container>
`),e()(),n(181,"h4",11),t(182,"Propriedades"),e(),n(183,"table",12)(184,"tr",13)(185,"th",14),t(186,"Nome"),e(),n(187,"th",14),t(188,"Tipo"),e(),n(189,"th",14),t(190,"Padr\xE3o"),e(),n(191,"th",14),t(192,"Descri\xE7\xE3o"),e()(),n(193,"tr",15)(194,"td",16)(195,"div",17)(196,"span",18),t(197," p-height"),r(198,"br"),e()()(),n(199,"td",19)(200,"code",20),t(201,"number"),e()(),n(202,"td",21),t(203,"-"),e(),n(204,"td",22)(205,"em")(206,"strong"),t(207,"(opcional)"),e()(),n(208,"p"),t(209,"Define a altura do "),n(210,"code"),t(211,"po-container"),e(),t(212,"."),e(),n(213,"blockquote")(214,"p"),t(215,"Caso n\xE3o seja definido um valor, a altura se ajustar\xE1 de acordo com o conte\xFAdo."),e()()()(),n(216,"tr",15)(217,"td",16)(218,"div",17)(219,"span",18),t(220," p-no-border"),r(221,"br"),e()()(),n(222,"td",19)(223,"code",23),t(224,"boolean"),e()(),n(225,"td",21)(226,"p")(227,"code"),t(228,"false"),e()()(),n(229,"td",22)(230,"em")(231,"strong"),t(232,"(opcional)"),e()(),n(233,"p"),t(234,"Desabilita a borda e a sombra em torno do "),n(235,"code"),t(236,"po-container"),e(),t(237,"."),e()()(),n(238,"tr",15)(239,"td",16)(240,"div",17)(241,"span",18),t(242," p-no-padding"),r(243,"br"),e()()(),n(244,"td",19)(245,"code",23),t(246,"boolean"),e()(),n(247,"td",21)(248,"p")(249,"code"),t(250,"false"),e()()(),n(251,"td",22)(252,"em")(253,"strong"),t(254,"(opcional)"),e()(),n(255,"p"),t(256,"Desabilita o espa\xE7amento interno do "),n(257,"code"),t(258,"po-container"),e(),t(259,"."),e()()(),n(260,"tr",15)(261,"td",16)(262,"div",17)(263,"span",18),t(264," p-title"),r(265,"br"),e()()(),n(266,"td",19)(267,"code",24),t(268,"string"),e()(),n(269,"td",21),t(270,"-"),e(),n(271,"td",22)(272,"em")(273,"strong"),t(274,"(opcional)"),e()(),n(275,"p"),t(276,"T\xEDtulo do Container."),e()()()()())},dependencies:[v],encapsulation:2})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(P(K),P(X))};static \u0275cmp=c({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Container",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return i.changeTab("doc")}),r(3,"sample-po-container-doc"),e(),n(4,"po-tab",3),u("p-click",function(){return i.changeTab("web")}),r(5,"sample-po-container-basic-view")(6,"sample-po-container-labs-view")(7,"sample-po-container-dashboard-view"),e()()()),a&2&&(m("p-actions",i.actions),s(2),m("p-active",i.activeTab==="doc"),s(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[q,f,S,pe,me,ue,be],encapsulation:2})}return o})();var _e=[{path:"",component:he}],ge=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=A({type:o});static \u0275inj=V({imports:[G.forChild(_e),G]})}return o})();var nt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=A({type:o});static \u0275inj=V({imports:[re,ge]})}return o})();export{nt as DocPoContainerModule};
