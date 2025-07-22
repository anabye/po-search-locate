import{o as w,p as he}from"./chunk-JYNCG2Y6.js";import{Ab as v,Db as ge,F,Ga as ce,Ra as be,T as V,Wa as Y,Za as ue,a as pe,c as se,ja as Z,la as me,nb as G,q as de,zb as f}from"./chunk-HBOGTDFH.js";import{$a as C,Ac as oe,Ba as P,Ea as t,Fa as e,Ga as s,Ib as ne,Ka as k,La as g,M as N,Ma as A,Nc as le,Pa as $,Pc as re,Qa as ee,Rc as X,T as c,Ta as z,U as b,Ua as I,Va as R,Wa as x,Xa as n,Ya as te,Za as E,ab as S,bb as T,eb as M,ha as p,ia as _,kb as U,mb as K,oa as h,pa as q,ua as L,ub as B,vb as H,wc as j,xc as ie,ya as m,yc as ae,zc as Q}from"./chunk-MIQUIDUB.js";var fe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-basic"]],standalone:!1,decls:3,vars:0,consts:[["p-label","PO Tabs 1"],["p-label","PO Tabs 2"]],template:function(o,i){o&1&&(t(0,"po-tabs"),s(1,"po-tab",0)(2,"po-tab",1),e())},dependencies:[f,v],encapsulation:2})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(s(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tabs Basic"),e(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),s(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tabs-basic/sample-po-tabs-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-tabs>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tabs-basic/sample-po-tabs-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-tabs-basic',
  templateUrl: './sample-po-tabs-basic.component.html',
  standalone: false
})
export class SamplePoTabsBasicComponent {}
`),e()()()()(),t(21,"div",10),s(22,"sample-po-tabs-basic"),e(),s(23,"hr")),o&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),E(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",M(4,Be,i.hideSampleCodeTabs)))},dependencies:[B,w,f,v,fe],encapsulation:2})}return a})();var Ve=["poTab"];function Oe(a,W){if(a&1){let l=k();t(0,"po-tab",9),g("p-click",function(){let i=c(l).$implicit,d=A();return b(d.onClick(i))}),t(1,"div",10),n(2),e()()}if(a&2){let l=W.$implicit,o=W.index;m("p-active",l.active)("p-disabled",l.disabled)("p-hide",l.hide)("p-label",l.label),p(2),E("Tab Content ",o,"")}}var Ce=(()=>{class a{poNotification;poTab;tabsFieldsForm=[{property:"label",divider:"TAB",required:!0,gridColumns:6},{property:"click",gridColumns:6},{property:"active",type:"boolean",gridColumns:4},{property:"disabled",type:"boolean",gridColumns:4},{property:"hide",type:"boolean",gridColumns:4}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];size="medium";tabs=[];properties=[];pageWidth;constructor(l){this.poNotification=l}ngOnInit(){this.restore(),this.pageWidth=window.innerWidth}addTab(l){let o=Object.assign({},l);o.click=o.click?this.showClick.bind(this,o.click):void 0,this.tabs.push(o),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4)}onClick(l){l.click&&l.click()}restore(){this.size="medium",this.tabs=[],this.poTab.quantityTabsButton=0}showClick(l){this.poNotification.success(`Action clicked: ${l}`)}static \u0275fac=function(o){return new(o||a)(_(V))};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-labs"]],viewQuery:function(o,i){if(o&1&&z(Ve,7),o&2){let d;I(d=R())&&(i.poTab=d.first)}},standalone:!1,decls:11,vars:7,consts:[["poTab",""],["tabsForm",""],[3,"p-size"],[3,"p-active","p-disabled","p-hide","p-label","p-click",4,"ngFor","ngForOf"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Tab",1,"po-md-3",3,"p-click","p-disabled"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],[3,"p-click","p-active","p-disabled","p-hide","p-label"],[1,"po-font-subtitle"]],template:function(o,i){if(o&1){let d=k();t(0,"po-tabs",2,0),L(2,Oe,3,5,"po-tab",3),e(),s(3,"po-dynamic-form",4,1),t(5,"div",5)(6,"po-button",6),g("p-click",function(){c(d);let r=x(4);return i.addTab(r.form.value),b(r.form.reset())}),e()(),s(7,"po-divider"),t(8,"po-radio-group",7),T("ngModelChange",function(r){return c(d),S(i.size,r)||(i.size=r),b(r)}),e(),t(9,"div",5)(10,"po-button",8),g("p-click",function(){return c(d),b(i.restore())}),e()()}if(o&2){let d=x(4);m("p-size",i.size),p(2),m("ngForOf",i.tabs),p(),m("p-fields",i.tabsFieldsForm)("p-value",i.tabs),p(3),m("p-disabled",d.form.invalid),p(2),C("ngModel",i.size),m("p-options",i.sizeOptions)}},dependencies:[H,j,Q,F,pe,ue,Z,f,v],encapsulation:2})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(s(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tabs Labs"),e(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),s(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tabs-labs/sample-po-tabs-labs.component.html"),e(),t(13,"pre",7),n(14,`<po-tabs #poTab [p-size]="size">
  <po-tab
    *ngFor="let tab of tabs; let i = index"
    [p-active]="tab.active"
    [p-disabled]="tab.disabled"
    [p-hide]="tab.hide"
    [p-label]="tab.label"
    (p-click)="onClick(tab)"
  >
    <div class="po-font-subtitle">Tab Content { { i }}</div>
  </po-tab>
</po-tabs>

<po-dynamic-form #tabsForm [p-fields]="tabsFieldsForm" [p-value]="tabs"> </po-dynamic-form>

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Add Tab"
    [p-disabled]="tabsForm.form.invalid"
    (p-click)="addTab(tabsForm.form.value); tabsForm.form.reset()"
  >
  </po-button>
</div>

<po-divider></po-divider>

<po-radio-group
  class="po-md-12"
  name="size"
  [(ngModel)]="size"
  p-columns="4"
  p-label="Size"
  p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
  [p-options]="sizeOptions"
>
</po-radio-group>

<div class="po-row">
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tabs-labs/sample-po-tabs-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import {
  PoDynamicFormField,
  PoNotificationService,
  PoRadioGroupOption,
  PoTab,
  PoTabsComponent
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-labs',
  templateUrl: './sample-po-tabs-labs.component.html',
  standalone: false
})
export class SamplePoTabsLabsComponent implements OnInit {
  @ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

  tabsFieldsForm: Array<PoDynamicFormField> = [
    { property: 'label', divider: 'TAB', required: true, gridColumns: 6 },
    { property: 'click', gridColumns: 6 },
    { property: 'active', type: 'boolean', gridColumns: 4 },
    { property: 'disabled', type: 'boolean', gridColumns: 4 },
    { property: 'hide', type: 'boolean', gridColumns: 4 }
  ];

  public sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  size: string = 'medium';
  tabs: Array<PoTab> = [];
  properties: Array<string> = [];
  pageWidth: number;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
    this.pageWidth = window.innerWidth;
  }

  addTab(tab: PoTab) {
    const newTab = Object.assign({}, tab);

    newTab.click = newTab.click ? this.showClick.bind(this, newTab.click) : undefined;
    this.tabs.push(newTab);
    if (this.tabs.length <= 4) {
      this.poTab.setQuantityTabsButton(this.tabs.length);
    } else if (this.tabs.length > 4) {
      this.poTab.setQuantityTabsButton(4);
    }
  }

  onClick(tab: PoTab) {
    if (tab.click) {
      tab.click();
    }
  }

  restore() {
    this.size = 'medium';
    this.tabs = [];
    this.poTab.quantityTabsButton = 0;
  }

  private showClick(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),e()()()()(),t(21,"div",10),s(22,"sample-po-tabs-labs"),e(),s(23,"hr")),o&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),E(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",M(4,Ne,i.hideSampleCodeTabs)))},dependencies:[B,w,f,v,Ce],encapsulation:2})}return a})();var Te=(()=>{class a{poNotificationService;card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:"Economy",value:1},{label:"Business",value:2},{label:"Comfort",value:3},{label:"First Class",value:4}];classTrainOptions=[{label:"Economy",value:1},{label:"Cabin",value:2},{label:"First Class",value:3}];flightCompanyOptions=[{label:"American Airlines",value:"american"},{label:"Avianca",value:"avianca"},{label:"Delta Airlines",value:"delta"},{label:"Emirates",value:"emirates"},{label:"Latam",value:"latam"}];trainCompanyOptions=[{label:"EuroStar",value:"eurostar"},{label:"OBB",value:"obb"},{label:"Renfe",value:"renfe"},{label:"TrenItalia",value:"trenitalia"}];transportationOptions=[{label:"Flights",value:"flight"},{label:"Trains",value:"train"}];constructor(l){this.poNotificationService=l}bankBillet(){this.poNotificationService.warning("Bank billet sent to email")}isPaymentEnable(l,o,i){return l.valid&&this.transportation==="flight"&&i.valid||l.valid&&this.transportation==="train"&&o.valid}getTotalCost(){return this.transportation==="flight"&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation==="train"&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,"Fields are missing")}payment(){this.poNotificationService.success("Order confirmed")}static \u0275fac=function(o){return new(o||a)(_(V))};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-travel"]],standalone:!1,decls:47,vars:26,consts:[["formTravel","ngForm"],["formTrain","ngForm"],["formFlight","ngForm"],["formCreditCard","ngForm"],["p-active","","p-label","Destination"],[1,"po-row"],["name","origin","p-label","Origin","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","departDate","p-label","Depart","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","returnDate","p-label","Return","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","transportation","p-label","Transportation","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Trains",3,"p-hide"],["name","trainCompany","p-label","Tran Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classTrain","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Flights",3,"p-hide"],["name","flightCompany","p-label","Flight Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classFlight","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Payment",3,"p-disabled"],["p-label","Total Cost",1,"po-md-6",3,"p-value"],["p-active","","p-label","Credit Card"],["name","cardName","p-clean","","p-label","Name on Card","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","card","p-clean","","p-label","Card Number","p-mask","9999 9999 9999 9999","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","expiryMonth","p-clean","","p-label","Expiry Month","p-mask","19","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","expiryYear","p-clean","","p-label","Year","p-mask","2999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","cvv","p-clean","","p-label","CVV","p-mask","9999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Pay now",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Bank Billet"],["p-label","Generate Bank Billet",1,"po-md-4",3,"p-click","p-disabled"]],template:function(o,i){if(o&1){let d=k();t(0,"po-tabs")(1,"po-tab",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),T("ngModelChange",function(r){return c(d),S(i.origin,r)||(i.origin=r),b(r)}),e()(),t(6,"div",5)(7,"po-input",7),T("ngModelChange",function(r){return c(d),S(i.destination,r)||(i.destination=r),b(r)}),e()(),t(8,"div",5)(9,"po-datepicker",8),T("ngModelChange",function(r){return c(d),S(i.departDate,r)||(i.departDate=r),b(r)}),e(),t(10,"po-datepicker",9),T("ngModelChange",function(r){return c(d),S(i.returnDate,r)||(i.returnDate=r),b(r)}),e()(),t(11,"div",5)(12,"po-radio-group",10),T("ngModelChange",function(r){return c(d),S(i.transportation,r)||(i.transportation=r),b(r)}),e()()()(),t(13,"po-tab",11)(14,"form",null,1)(16,"div",5)(17,"po-select",12),T("ngModelChange",function(r){return c(d),S(i.trainCompany,r)||(i.trainCompany=r),b(r)}),e()(),t(18,"div",5)(19,"po-select",13),T("ngModelChange",function(r){return c(d),S(i.classTrain,r)||(i.classTrain=r),b(r)}),e()()()(),t(20,"po-tab",14)(21,"form",null,2)(23,"div",5)(24,"po-select",15),T("ngModelChange",function(r){return c(d),S(i.flightCompany,r)||(i.flightCompany=r),b(r)}),e()(),t(25,"div",5)(26,"po-select",16),T("ngModelChange",function(r){return c(d),S(i.classFlight,r)||(i.classFlight=r),b(r)}),e()()()(),t(27,"po-tab",17)(28,"div",5),s(29,"po-info",18),e(),t(30,"po-tabs")(31,"po-tab",19)(32,"form",null,3)(34,"div",5)(35,"po-input",20),T("ngModelChange",function(r){return c(d),S(i.cardName,r)||(i.cardName=r),b(r)}),e()(),t(36,"div",5)(37,"po-input",21),T("ngModelChange",function(r){return c(d),S(i.card,r)||(i.card=r),b(r)}),e()(),t(38,"div",5)(39,"po-input",22),T("ngModelChange",function(r){return c(d),S(i.expiryMonth,r)||(i.expiryMonth=r),b(r)}),e(),t(40,"po-input",23),T("ngModelChange",function(r){return c(d),S(i.expiryYear,r)||(i.expiryYear=r),b(r)}),e(),t(41,"po-input",24),T("ngModelChange",function(r){return c(d),S(i.cvv,r)||(i.cvv=r),b(r)}),e()(),t(42,"div",5)(43,"po-button",25),g("p-click",function(){return c(d),b(i.payment())}),e()()()(),t(44,"po-tab",26)(45,"div",5)(46,"po-button",27),g("p-click",function(){return c(d),b(i.bankBillet())}),e()()()()()()}if(o&2){let d=x(3),u=x(15),r=x(22),xe=x(33);p(5),C("ngModel",i.origin),p(2),C("ngModel",i.destination),p(2),C("ngModel",i.departDate),p(),C("ngModel",i.returnDate),m("p-min-date",i.departDate),p(2),C("ngModel",i.transportation),m("p-options",i.transportationOptions),p(),m("p-hide",i.transportation!=="train"),p(4),C("ngModel",i.trainCompany),m("p-options",i.trainCompanyOptions),p(2),C("ngModel",i.classTrain),m("p-options",i.classTrainOptions),p(),m("p-hide",i.transportation!=="flight"),p(4),C("ngModel",i.flightCompany),m("p-options",i.flightCompanyOptions),p(2),C("ngModel",i.classFlight),m("p-options",i.classFlightOptions),p(),m("p-disabled",i.isPaymentEnable(d,u,r)===!1),p(2),m("p-value",i.getTotalCost()),p(6),C("ngModel",i.cardName),p(2),C("ngModel",i.card),p(2),C("ngModel",i.expiryMonth),p(),C("ngModel",i.expiryYear),p(),C("ngModel",i.cvv),p(2),m("p-disabled",!xe.form.valid||!i.totalCost),p(3),m("p-disabled",!i.totalCost)}},dependencies:[oe,j,ie,Q,ae,F,Z,me,ce,be,Y,f,v],encapsulation:2})}return a})();var Ae=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-travel-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(s(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tabs - Travel"),e(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),s(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tabs-travel/sample-po-tabs-travel.component.html"),e(),t(13,"pre",7),n(14,`<po-tabs>
  <po-tab p-active p-label="Destination">
    <form #formTravel="ngForm">
      <div class="po-row">
        <po-input class="po-lg-12" name="origin" [(ngModel)]="origin" p-label="Origin" p-required> </po-input>
      </div>

      <div class="po-row">
        <po-input class="po-lg-12" name="destination" [(ngModel)]="destination" p-label="Destination" p-required>
        </po-input>
      </div>

      <div class="po-row">
        <po-datepicker class="po-md-6" name="departDate" [(ngModel)]="departDate" p-label="Depart" p-required>
        </po-datepicker>

        <po-datepicker
          class="po-md-6"
          name="returnDate"
          [(ngModel)]="returnDate"
          p-label="Return"
          p-required
          [p-min-date]="departDate"
        >
        </po-datepicker>
      </div>

      <div class="po-row">
        <po-radio-group
          class="po-lg-12"
          name="transportation"
          [(ngModel)]="transportation"
          p-label="Transportation"
          p-required
          [p-options]="transportationOptions"
        >
        </po-radio-group>
      </div>
    </form>
  </po-tab>
  <po-tab p-label="Trains" [p-hide]="transportation !== 'train'">
    <form #formTrain="ngForm">
      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="trainCompany"
          [(ngModel)]="trainCompany"
          p-label="Tran Company"
          p-required
          [p-options]="trainCompanyOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="classTrain"
          [(ngModel)]="classTrain"
          p-label="Class"
          p-required
          [p-options]="classTrainOptions"
        >
        </po-select>
      </div>
    </form>
  </po-tab>
  <po-tab p-label="Flights" [p-hide]="transportation !== 'flight'">
    <form #formFlight="ngForm">
      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="flightCompany"
          [(ngModel)]="flightCompany"
          p-label="Flight Company"
          p-required
          [p-options]="flightCompanyOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="classFlight"
          [(ngModel)]="classFlight"
          p-label="Class"
          p-required
          [p-options]="classFlightOptions"
        >
        </po-select>
      </div>
    </form>
  </po-tab>
  <po-tab p-label="Payment" [p-disabled]="isPaymentEnable(formTravel, formTrain, formFlight) === false">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Total Cost" [p-value]="getTotalCost()"> </po-info>
    </div>

    <po-tabs>
      <po-tab p-active p-label="Credit Card">
        <form #formCreditCard="ngForm">
          <div class="po-row">
            <po-input
              class="po-md-8 po-lg-6"
              name="cardName"
              [(ngModel)]="cardName"
              p-clean
              p-label="Name on Card"
              p-required
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-input
              class="po-md-8 po-lg-6"
              name="card"
              [(ngModel)]="card"
              p-clean
              p-label="Card Number"
              p-mask="9999 9999 9999 9999"
              p-required
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-input
              class="po-md-2"
              name="expiryMonth"
              [(ngModel)]="expiryMonth"
              p-clean
              p-label="Expiry Month"
              p-mask="19"
              p-required
            >
            </po-input>

            <po-input
              class="po-md-2"
              name="expiryYear"
              [(ngModel)]="expiryYear"
              p-clean
              p-label="Year"
              p-mask="2999"
              p-required
            >
            </po-input>

            <po-input class="po-md-2" name="cvv" [(ngModel)]="cvv" p-clean p-label="CVV" p-mask="9999" p-required>
            </po-input>
          </div>

          <div class="po-row">
            <po-button
              class="po-md-3"
              p-label="Pay now"
              [p-disabled]="!formCreditCard.form.valid || !totalCost"
              (p-click)="payment()"
            >
            </po-button>
          </div>
        </form>
      </po-tab>

      <po-tab p-label="Bank Billet">
        <div class="po-row">
          <po-button class="po-md-4" p-label="Generate Bank Billet" [p-disabled]="!totalCost" (p-click)="bankBillet()">
          </po-button>
        </div>
      </po-tab>
    </po-tabs>
  </po-tab>
</po-tabs>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tabs-travel/sample-po-tabs-travel.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

import { PoNotificationService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-travel',
  templateUrl: './sample-po-tabs-travel.component.html',
  standalone: false
})
export class SamplePoTabsTravelComponent {
  card: number;
  cardName: string;
  classFlight: number;
  classTrain: number;
  cvv: number;
  departDate: Date;
  destination: string;
  expiryMonth: number;
  expiryYear: number;
  flightCompany: string;
  origin: string;
  returnDate: Date;
  totalCost: number;
  trainCompany: string;
  transportation: string;

  public readonly classFlightOptions: Array<PoSelectOption> = [
    { label: 'Economy', value: 1 },
    { label: 'Business', value: 2 },
    { label: 'Comfort', value: 3 },
    { label: 'First Class', value: 4 }
  ];

  public readonly classTrainOptions: Array<PoSelectOption> = [
    { label: 'Economy', value: 1 },
    { label: 'Cabin', value: 2 },
    { label: 'First Class', value: 3 }
  ];

  public readonly flightCompanyOptions: Array<PoSelectOption> = [
    { label: 'American Airlines', value: 'american' },
    { label: 'Avianca', value: 'avianca' },
    { label: 'Delta Airlines', value: 'delta' },
    { label: 'Emirates', value: 'emirates' },
    { label: 'Latam', value: 'latam' }
  ];

  public readonly trainCompanyOptions: Array<PoSelectOption> = [
    { label: 'EuroStar', value: 'eurostar' },
    { label: 'OBB', value: 'obb' },
    { label: 'Renfe', value: 'renfe' },
    { label: 'TrenItalia', value: 'trenitalia' }
  ];

  public readonly transportationOptions: Array<PoRadioGroupOption> = [
    { label: 'Flights', value: 'flight' },
    { label: 'Trains', value: 'train' }
  ];

  constructor(private poNotificationService: PoNotificationService) {}

  bankBillet() {
    this.poNotificationService.warning('Bank billet sent to email');
  }

  isPaymentEnable(formTravel, formTrain, formFlight) {
    return (
      (formTravel.valid && this.transportation === 'flight' && formFlight.valid) ||
      (formTravel.valid && this.transportation === 'train' && formTrain.valid)
    );
  }

  getTotalCost() {
    if (this.transportation === 'flight' && this.classFlight) {
      this.totalCost = 800 * this.classFlight;
      return \`$\${this.totalCost}\`;
    }

    if (this.transportation === 'train' && this.classTrain) {
      this.totalCost = 300 * this.classTrain;
      return \`$\${this.totalCost}\`;
    }

    this.totalCost = undefined;
    return 'Fields are missing';
  }

  payment() {
    this.poNotificationService.success('Order confirmed');
  }
}
`),e()()()()(),t(21,"div",10),s(22,"sample-po-tabs-travel"),e(),s(23,"hr")),o&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),E(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",M(4,Ae,i.hideSampleCodeTabs)))},dependencies:[B,w,f,v,Te],encapsulation:2})}return a})();var Ie=["poTab"];function Re(a,W){if(a&1){let l=k();t(0,"po-tab",7),U(1,"date"),t(2,"div",8)(3,"div",5)(4,"div",4)(5,"div",9)(6,"po-widget")(7,"div",4)(8,"div",10),s(9,"po-avatar",11),e(),t(10,"div",12)(11,"div",13),s(12,"po-info",14),e(),t(13,"div",13),s(14,"po-info",15),e(),t(15,"div",13),s(16,"po-info",16),e()()()()(),t(17,"div",17)(18,"po-widget",18)(19,"div",19),n(20,"TFace Conference Week"),e(),t(21,"div",20),n(22,"From 21th September until 26th setember 2018"),e(),s(23,"hr"),t(24,"div",4)(25,"div",21)(26,"span",22),s(27,"po-icon",23),e(),t(28,"span",24),n(29),U(30,"date"),e()(),t(31,"div",21)(32,"span",22),s(33,"po-icon",25),e(),t(34,"span",26),n(35,"Av. Braz Leme, 1000, Santana"),e()()(),t(36,"div",27)(37,"po-button",28),g("p-click",function(){let i=c(l).$implicit,d=A();return b(d.confirmSubscription(i))}),e()()()()()()()()}if(a&2){let l=W.$implicit;$("p-label",K(1,9,l.createdDate,"MMM d")),m("p-active",l.id==="1")("p-hide",l.subscribe),p(9),ee("p-src","assets/graphics/",l.photo,""),p(3),m("p-value",l.name),p(2),m("p-value",l.email),p(2),m("p-value",l.description),p(13),te(K(30,12,l.createdDate,"MM/dd/yyyy"))}}var Ee=(()=>{class a{poNotification;poTab;disableRestoreBtn=!0;speakers;pageWidth;constructor(l){this.poNotification=l}ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3)}cancelSubscription(){this.disableRestoreBtn=!0,this.speakers.forEach(l=>l.subscribe=!1)}confirmSubscription(l){this.disableRestoreBtn=!1,l.subscribe=!0,this.poNotification.success("Registration completed successfully. See you soon!")}getSpeakers(){return[{id:"1",name:"Peter Benjamin Parker",email:"peter.parker@po-ui.com.br",photo:"avatar1.png",description:"Nodejs developer with 4 years experience",createdDate:"2018-09-21T20:21:06.990Z",subscribe:"false"},{id:"2",name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png",description:"Angular developer with 2 years experience",createdDate:"2018-09-22T20:21:06.990Z",subscribe:"false"},{id:"3",name:"Anthony Stark",email:"anthony.stark@po-ui.com.br",photo:"avatar3.png",description:"Javascript developer with 8 years experience",createdDate:"2018-09-23T20:21:06.990Z",subscribe:"false"},{id:"4",name:"Carol Danvers",email:"carol.danvers@po-ui.com.br",photo:"avatar4.png",description:"Full stack developer with 2 years experience",createdDate:"2018-09-24T20:21:06.990Z",subscribe:"false"},{id:"5",name:"Wagner Dantas",email:"wagner.dantas@po-ui.com.br",photo:"avatar5.png",description:"Front-end Engineer developer with 8 years experience",createdDate:"2018-09-25T20:21:06.990Z",subscribe:"false"},{id:"6",name:"Kaiam Alexandre",email:"kaiam.alexandre@po-ui.com.br",photo:"avatar6.png",description:"Javascript developer with 12 years experience",createdDate:"2018-09-26T20:21:06.990Z",subscribe:"false"}]}static \u0275fac=function(o){return new(o||a)(_(V))};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-business-conf"]],viewQuery:function(o,i){if(o&1&&z(Ie,7),o&2){let d;I(d=R())&&(i.poTab=d.first)}},standalone:!1,decls:9,vars:2,consts:[["poTab",""],["p-title","Check the speaker's list"],[3,"p-label","p-active","p-hide",4,"ngFor","ngForOf"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10","po-mt-0"],[1,"po-row"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10"],["p-label","Cancel Subscription",1,"po-offset-lg-8","po-offset-xl-8","po-lg-4",3,"p-click","p-disabled"],[3,"p-label","p-active","p-hide"],[1,"po-row","po-mt-5"],[1,"po-lg-8","po-mb-2"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Speaker",3,"p-value"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-label","Description",1,"po-mb-5",3,"p-value"],[1,"po-lg-4","po-mb-2"],["p-title","Subscription"],[1,"po-font-subtitle","po-mb-2"],[1,"po-font-text-bold","po-mb-5"],[1,"po-md-6","po-lg-12"],[1,"po-mr-1","po-font-subtitle"],["p-icon","po-icon an an-calendar-dots"],[1,"po-font-text","po-mb-2"],["p-icon","po-icon an an-map-pin"],[1,"po-font-text"],[1,"po-mt-5"],["p-label","Subscription",1,"po-mt-5",3,"p-click"]],template:function(o,i){if(o&1){let d=k();t(0,"po-page-default",1)(1,"po-tabs",null,0),L(3,Re,38,15,"po-tab",2),e(),s(4,"hr",3),t(5,"div",4)(6,"div",5)(7,"div",4)(8,"po-button",6),g("p-click",function(){return c(d),b(i.cancelSubscription())}),e()()()()()}o&2&&(p(3),m("ngForOf",i.speakers),p(5),m("p-disabled",i.disableRestoreBtn))},dependencies:[H,de,F,se,Y,G,f,v,ge,ne],encapsulation:2})}return a})();var je=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-business-conf-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(s(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Tabs - Business Conference"),e(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),s(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html"),e(),t(13,"pre",7),n(14,`<po-page-default p-title="Check the speaker's list">
  <po-tabs #poTab>
    <po-tab
      *ngFor="let speaker of speakers"
      p-label="{ { speaker.createdDate | date: 'MMM d' }}"
      [p-active]="speaker.id === '1'"
      [p-hide]="speaker.subscribe"
    >
      <div class="po-row po-mt-5">
        <div class="po-offset-lg-1 po-offset-xl-1 po-lg-10">
          <div class="po-row">
            <div class="po-lg-8 po-mb-2">
              <po-widget>
                <div class="po-row">
                  <div class="po-md-5 po-lg-4">
                    <po-avatar p-size="xl" p-src="assets/graphics/{ { speaker.photo }}"></po-avatar>
                  </div>
                  <div class="po-md-7 po-lg-8">
                    <div class="po-mb-2">
                      <po-info p-label="Speaker" [p-value]="speaker.name"></po-info>
                    </div>
                    <div class="po-mb-2">
                      <po-info class="po-mt-5" p-label="Email" [p-value]="speaker.email"> </po-info>
                    </div>
                    <div class="po-mb-2">
                      <po-info class="po-mb-5" p-label="Description" [p-value]="speaker.description"> </po-info>
                    </div>
                  </div>
                </div>
              </po-widget>
            </div>

            <div class="po-lg-4 po-mb-2">
              <po-widget p-title="Subscription">
                <div class="po-font-subtitle po-mb-2">TFace Conference Week</div>
                <div class="po-font-text-bold po-mb-5">From 21th September until 26th setember 2018</div>
                <hr />
                <div class="po-row">
                  <div class="po-md-6 po-lg-12">
                    <span class="po-mr-1 po-font-subtitle">
                      <po-icon p-icon="po-icon an an-calendar-dots"></po-icon>
                    </span>
                    <span class="po-font-text po-mb-2">{ { speaker.createdDate | date: 'MM/dd/yyyy' }}</span>
                  </div>
                  <div class="po-md-6 po-lg-12">
                    <span class="po-mr-1 po-font-subtitle">
                      <po-icon p-icon="po-icon an an-map-pin"></po-icon>
                    </span>
                    <span class="po-font-text">Av. Braz Leme, 1000, Santana</span>
                  </div>
                </div>
                <div class="po-mt-5">
                  <po-button class="po-mt-5" p-label="Subscription" (p-click)="confirmSubscription(speaker)">
                  </po-button>
                </div>
              </po-widget>
            </div>
          </div>
        </div>
      </div>
    </po-tab>
  </po-tabs>

  <hr class="po-offset-lg-1 po-offset-xl-1 po-lg-10 po-mt-0" />

  <div class="po-row">
    <div class="po-offset-lg-1 po-offset-xl-1 po-lg-10">
      <div class="po-row">
        <po-button
          class="po-offset-lg-8 po-offset-xl-8 po-lg-4"
          p-label="Cancel Subscription"
          [p-disabled]="disableRestoreBtn"
          (p-click)="cancelSubscription()"
        >
        </po-button>
      </div>
    </div>
  </div>
</po-page-default>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import { PoNotificationService, PoTabsComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-business-conf',
  templateUrl: './sample-po-tabs-business-conf.component.html',
  standalone: false
})
export class SamplePoTabsBusinessConfComponent implements OnInit {
  @ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

  disableRestoreBtn: boolean = true;
  speakers: Array<any>;
  pageWidth: number;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.speakers = this.getSpeakers();
    this.pageWidth = window.innerWidth;
    if (this.pageWidth <= 600) {
      this.poTab.setQuantityTabsButton(3);
    }
  }

  cancelSubscription() {
    this.disableRestoreBtn = true;
    this.speakers.forEach(item => (item.subscribe = false));
  }

  confirmSubscription(speaker) {
    this.disableRestoreBtn = false;

    speaker.subscribe = true;

    this.poNotification.success('Registration completed successfully. See you soon!');
  }

  private getSpeakers() {
    return [
      {
        'id': '1',
        'name': 'Peter Benjamin Parker',
        'email': 'peter.parker@po-ui.com.br',
        'photo': 'avatar1.png',
        'description': 'Nodejs developer with 4 years experience',
        'createdDate': '2018-09-21T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '2',
        'name': 'Natasha Romanova',
        'email': 'natasha.romanova@po-ui.com.br',
        'photo': 'avatar2.png',
        'description': 'Angular developer with 2 years experience',
        'createdDate': '2018-09-22T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '3',
        'name': 'Anthony Stark',
        'email': 'anthony.stark@po-ui.com.br',
        'photo': 'avatar3.png',
        'description': 'Javascript developer with 8 years experience',
        'createdDate': '2018-09-23T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '4',
        'name': 'Carol Danvers',
        'email': 'carol.danvers@po-ui.com.br',
        'photo': 'avatar4.png',
        'description': 'Full stack developer with 2 years experience',
        'createdDate': '2018-09-24T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '5',
        'name': 'Wagner Dantas',
        'email': 'wagner.dantas@po-ui.com.br',
        'photo': 'avatar5.png',
        'description': 'Front-end Engineer developer with 8 years experience',
        'createdDate': '2018-09-25T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '6',
        'name': 'Kaiam Alexandre',
        'email': 'kaiam.alexandre@po-ui.com.br',
        'photo': 'avatar6.png',
        'description': 'Javascript developer with 12 years experience',
        'createdDate': '2018-09-26T20:21:06.990Z',
        'subscribe': 'false'
      }
    ];
  }
}
`),e()()()()(),t(21,"div",10),s(22,"sample-po-tabs-business-conf"),e(),s(23,"hr")),o&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),E(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",M(4,je,i.hideSampleCodeTabs)))},dependencies:[B,w,f,v,Ee],encapsulation:2})}return a})();var _e=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-tabs-doc"]],standalone:!1,decls:360,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-tab"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(o,i){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoTabsModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente po-tabs"),e()(),t(7,"h3",3),n(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),n(11,"PoTabsComponent"),e()(),t(12,"div",2)(13,"p"),n(14,"O componente "),t(15,"code"),n(16,"po-tabs"),e(),n(17," \xE9 respons\xE1vel por agrupar "),t(18,"a",6),n(19,"abas"),e(),n(20,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),e(),t(21,"p"),n(22,"O componente exibir\xE1 as abas enquanto houver espa\xE7o na tela, caso a aba ultrapasse o limite da tela a mesma ser\xE1 agrupada em um dropdown."),e(),t(23,"blockquote")(24,"p"),n(25,"As abas que estiverem agrupadas ser\xE3o dispostas numa cascata suspensa que ser\xE1 exibida ao clicar no bot\xE3o."),e()(),t(26,"p"),n(27,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),e(),t(28,"h4"),n(29,"Boas pr\xE1ticas"),e(),t(30,"ul")(31,"li"),n(32,"Evite utilizar um "),t(33,"code"),n(34,"po-tabs"),e(),n(35," dentro de outro "),t(36,"code"),n(37,"po-tabs"),e(),n(38,";"),e(),t(39,"li"),n(40,"Evite utilizar uma quantidade excessiva de abas, pois ir\xE1 gerar um "),t(41,"em"),n(42,"scroll"),e(),n(43," muito longo no "),t(44,"code"),n(45,"dropdown"),e(),n(46,";"),e(),t(47,"li"),n(48,"Evite "),t(49,"code"),n(50,"labels"),e(),n(51," extensos para as "),t(52,"code"),n(53,"tabs"),e(),n(54," pois podem quebrar seu "),t(55,"em"),n(56,"layout"),e(),n(57,", use "),t(58,"code"),n(59,"labels"),e(),n(60," diretas, curtas e intuitivas."),e()(),t(61,"h4"),n(62,"Tokens customiz\xE1veis"),e(),t(63,"p"),n(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(65,"blockquote")(66,"p"),n(67,"Para maiores informa\xE7\xF5es, acesse o guia "),t(68,"a",7),n(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(70,"."),e()(),t(71,"table")(72,"thead")(73,"tr")(74,"th"),n(75,"Propriedade"),e(),t(76,"th"),n(77,"Descri\xE7\xE3o"),e(),t(78,"th"),n(79,"Valor Padr\xE3o"),e()()(),t(80,"tbody")(81,"tr")(82,"td")(83,"strong"),n(84,"Default Values"),e()(),s(85,"td")(86,"td"),e(),t(87,"tr")(88,"td")(89,"code"),n(90,"--background"),e()(),t(91,"td"),n(92,"Cor de background"),e(),t(93,"td")(94,"code"),n(95,"var(--color-transparent)"),e()()(),t(96,"tr")(97,"td")(98,"code"),n(99,"--background-item-default"),e()(),t(100,"td"),n(101,"Cor de background do item padr\xE3o"),e(),t(102,"td")(103,"code"),n(104,"var(--color-transparent)"),e()()(),t(105,"tr")(106,"td")(107,"code"),n(108,"--border-radius"),e()(),t(109,"td"),n(110,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(111,"td")(112,"code"),n(113,"var(--border-radius-md)"),e()()(),t(114,"tr")(115,"td")(116,"code"),n(117,"--color"),e()(),t(118,"td"),n(119,"Cor da fonte padr\xE3o"),e(),t(120,"td")(121,"code"),n(122,"var(--color-action-default)"),e()()(),t(123,"tr")(124,"td")(125,"code"),n(126,"--color-baseline"),e()(),t(127,"td"),n(128,"Cor para box-shadow"),e(),t(129,"td")(130,"code"),n(131,"var(--color-neutral-light-20)"),e()()(),t(132,"tr")(133,"td")(134,"code"),n(135,"--font-family"),e()(),t(136,"td"),n(137,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(138,"td")(139,"code"),n(140,"var(--font-family-theme)"),e()()(),t(141,"tr")(142,"td")(143,"code"),n(144,"--font-size"),e()(),t(145,"td"),n(146,"Tamanho da fonte"),e(),t(147,"td")(148,"code"),n(149,"var(--font-size-default)"),e()()(),t(150,"tr")(151,"td")(152,"code"),n(153,"--font-weight"),e()(),t(154,"td"),n(155,"Peso da fonte"),e(),t(156,"td")(157,"code"),n(158,"var(--font-weight-bold)"),e()()(),t(159,"tr")(160,"td")(161,"code"),n(162,"--margin-tabs-container-left"),e()(),t(163,"td"),n(164,"Margem lateral esquerda do componente quando usado dentro de um "),t(165,"code"),n(166,"page-default"),e()(),t(167,"td")(168,"code"),n(169,"var(--spacing-md)"),e()()(),t(170,"tr")(171,"td")(172,"code"),n(173,"--margin-tabs-container-right"),e()(),t(174,"td"),n(175,"Margem lateral direita do componente quando usado dentro de um "),t(176,"code"),n(177,"page-default"),e()(),t(178,"td")(179,"code"),n(180,"-16px"),e()()(),t(181,"tr")(182,"td")(183,"code"),n(184,"--padding-tabs-header"),e()(),t(185,"td"),n(186,"Padding do valor lateral das abas"),e(),t(187,"td")(188,"code"),n(189,"var(--spacing-sm)"),e()()(),t(190,"tr")(191,"td")(192,"code"),n(193,"--margin-tabs-first-child"),e()(),t(194,"td"),n(195,"Margem lateral da primeira aba"),e(),t(196,"td")(197,"code"),n(198,"var(--spacing-md)"),e()()(),t(199,"tr")(200,"td")(201,"code"),n(202,"--margin-tabs-last-child"),e()(),t(203,"td"),n(204,"Margem lateral da ultima aba"),e(),t(205,"td")(206,"code"),n(207,"var(--spacing-md)"),e()()(),t(208,"tr")(209,"td")(210,"strong"),n(211,"Disabled"),e()(),s(212,"td")(213,"td"),e(),t(214,"tr")(215,"td")(216,"code"),n(217,"--color-disabled"),e()(),t(218,"td"),n(219,"Cor da fonte no estado disabilitado"),e(),t(220,"td")(221,"code"),n(222,"var(--color-action-disabled)"),e()()(),t(223,"tr")(224,"td")(225,"code"),n(226,"--background-item-disabled"),e(),n(227,"\xA0"),e(),t(228,"td"),n(229,"Cor de background do item desabilitado"),e(),t(230,"td")(231,"code"),n(232,"var(--color-neutral-light-10)"),e()()(),t(233,"tr")(234,"td")(235,"strong"),n(236,"Focused"),e()(),s(237,"td")(238,"td"),e(),t(239,"tr")(240,"td")(241,"code"),n(242,"--outline-color-focused"),e()(),t(243,"td"),n(244,"Cor do outline do estado de focus"),e(),t(245,"td")(246,"code"),n(247,"var(--color-action-focus)"),e()()(),t(248,"tr")(249,"td")(250,"strong"),n(251,"Hover"),e()(),s(252,"td")(253,"td"),e(),t(254,"tr")(255,"td")(256,"code"),n(257,"--color-hover"),e()(),t(258,"td"),n(259,"Cor principal no estado hover"),e(),t(260,"td")(261,"code"),n(262,"var(--color-brand-01-darkest)"),e()()(),t(263,"tr")(264,"td")(265,"code"),n(266,"--background-item-hover"),e()(),t(267,"td"),n(268,"Cor de background no estado de hover"),e(),t(269,"td")(270,"code"),n(271,"var(--color-brand-01-lightest)"),e()()(),t(272,"tr")(273,"td")(274,"strong"),n(275,"Selected"),e()(),s(276,"td")(277,"td"),e(),t(278,"tr")(279,"td")(280,"code"),n(281,"--background-item-selected"),e()(),t(282,"td"),n(283,"Cor de background do item selecionado"),e(),t(284,"td")(285,"code"),n(286,"var(--color-brand-01-lightest)"),e()()()()()(),t(287,"div",8)(288,"h4",9),n(289,"Seletor"),e(),t(290,"pre",10),n(291,`<po-tabs
    p-size="string" >
</po-tabs>
`),e()(),t(292,"h4",11),n(293,"Propriedades"),e(),t(294,"table",12)(295,"tr",13)(296,"th",14),n(297,"Nome"),e(),t(298,"th",14),n(299,"Tipo"),e(),t(300,"th",14),n(301,"Padr\xE3o"),e(),t(302,"th",14),n(303,"Descri\xE7\xE3o"),e()(),t(304,"tr",15)(305,"td",16)(306,"div",17)(307,"span",18),n(308," p-size"),s(309,"br"),e()()(),t(310,"td",19)(311,"code",20),n(312,"string"),e()(),t(313,"td",21)(314,"p")(315,"code"),n(316,"medium"),e()()(),t(317,"td",22)(318,"em")(319,"strong"),n(320,"(opcional)"),e()(),t(321,"p"),n(322,"Define o tamanho do componente:"),e(),t(323,"ul")(324,"li")(325,"code"),n(326,"small"),e(),n(327,": altura dos tabs como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(328,"li")(329,"code"),n(330,"medium"),e(),n(331,": altura dos tabs como 44px."),e()(),t(332,"blockquote")(333,"p"),n(334,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(335,"code"),n(336,"medium"),e(),n(337,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(338,"a",23),n(339,"po-theme"),e(),n(340,"."),e()()()()(),t(341,"h3",11),n(342,"M\xE9todos"),e(),t(343,"table",24)(344,"tr",15)(345,"th",25)(346,"div",17)(347,"h4")(348,"span",18),n(349," setQuantityTabsButton "),e()()()()(),t(350,"tr",22)(351,"td",22)(352,"p"),n(353,"Fun\xE7\xE3o que atribui o n\xFAmero de tabs fora do dropdown."),e(),t(354,"p"),n(355,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(356,"pre")(357,"code"),n(358,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

changeQuantityTabs() {
  this.poTab.setQuantityTabsButton(1); //N\xFAmero de tabs
}
`),e()()()()(),s(359,"br"),e())},dependencies:[w],encapsulation:2})}return a})();var Pe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||a)(_(le),_(re))};static \u0275cmp=h({type:a,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Tabs",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return i.changeTab("doc")}),s(3,"sample-po-tabs-doc"),e(),t(4,"po-tab",3),g("p-click",function(){return i.changeTab("web")}),s(5,"sample-po-tabs-basic-view")(6,"sample-po-tabs-labs-view")(7,"sample-po-tabs-travel-view")(8,"sample-po-tabs-business-conf-view"),e()()()),o&2&&(m("p-actions",i.actions),p(2),m("p-active",i.activeTab==="doc"),p(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[G,f,v,ve,Se,ye,we,_e],encapsulation:2})}return a})();var Ye=[{path:"",component:Pe}],ke=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=q({type:a});static \u0275inj=N({imports:[X.forChild(Ye),X]})}return a})();var Tt=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=q({type:a});static \u0275inj=N({imports:[he,ke]})}return a})();export{Tt as DocPoTabsModule};
