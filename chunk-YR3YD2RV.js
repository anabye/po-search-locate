import{o as C,p as ae}from"./chunk-MMZVQUBQ.js";import{Aa as ee,Ab as y,Db as M,F as Z,Ga as te,I as D,La as ne,Sa as ie,Wa as I,ha as $,nb as oe,zb as f}from"./chunk-522XRIZO.js";import{Ac as Q,Ba as _,Bc as K,Fa as t,Ga as e,Ha as l,La as A,M as k,Ma as u,Oc as X,Qc as Y,Sc as H,T as g,U as h,Ua as V,Va as F,Wa as B,Ya as n,Za as N,_a as E,ab as w,bb as v,cb as x,fb as P,ha as p,ia as U,oa as c,pa as L,ua as J,vb as T,wb as j,xc as z,ya as m,yc as G,zc as R}from"./chunk-WFKG4FNY.js";var le=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-widget-basic"]],standalone:!1,decls:1,vars:0,template:function(a,i){a&1&&l(0,"po-widget")},dependencies:[M],encapsulation:2})}return o})();var fe=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-widget-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Widget Basic"),e(),t(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-widget-basic/sample-po-widget-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-widget></po-widget>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-widget-basic/sample-po-widget-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-widget-basic"),e(),l(23,"hr")),a&2&&(p(5),_("po-icon "+i.sampleCodeButtonIcon),p(),E(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",P(4,fe,i.hideSampleCodeTabs)))},dependencies:[T,C,f,y,le],encapsulation:2})}return o})();var re=(()=>{class o{action;background;content;height;help;primaryLabel;properties;secondaryLabel;title;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"primaryWidget",label:"Primary Widget"}];ngOnInit(){this.restore()}changeAction(r){this.action=r}restore(){this.background="",this.action="",this.content="",this.height=void 0,this.help="",this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.secondaryLabel=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-widget-labs"]],standalone:!1,decls:19,vars:19,consts:[["f","ngForm"],[1,"po-sm-12",3,"p-on-disabled","p-primary-action","p-secondary-action","p-setting","p-title-action","p-background","p-disabled","p-height","p-help","p-primary","p-primary-label","p-secondary-label","p-title"],[1,"po-row"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","title","p-label","Title",1,"po-md-4",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-4",3,"ngModelChange","ngModel"],["name","background","p-clean","","p-help","Ex.: 'http://image.com'; '../../image.png'","p-label","Background",1,"po-md-12",3,"ngModelChange","ngModel"],["name","primaryLabel","p-label","Primary Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondaryLabel","p-label","Secondary Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","3","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let d=A();t(0,"po-widget",1),u("p-on-disabled",function(){return g(d),h(i.changeAction("p-on-disabled"))})("p-primary-action",function(){return g(d),h(i.changeAction("p-primary-action"))})("p-secondary-action",function(){return g(d),h(i.changeAction("p-secondary-action"))})("p-setting",function(){return g(d),h(i.changeAction("p-setting"))})("p-title-action",function(){return g(d),h(i.changeAction("p-title-action"))}),n(1),e(),l(2,"hr"),t(3,"div",2),l(4,"po-info",3),e(),l(5,"hr"),t(6,"form",null,0)(8,"po-input",4),x("ngModelChange",function(s){return g(d),v(i.title,s)||(i.title=s),h(s)}),e(),t(9,"po-input",5),x("ngModelChange",function(s){return g(d),v(i.help,s)||(i.help=s),h(s)}),e(),t(10,"po-number",6),x("ngModelChange",function(s){return g(d),v(i.height,s)||(i.height=s),h(s)}),e(),t(11,"po-input",7),x("ngModelChange",function(s){return g(d),v(i.background,s)||(i.background=s),h(s)}),e(),t(12,"po-input",8),x("ngModelChange",function(s){return g(d),v(i.primaryLabel,s)||(i.primaryLabel=s),h(s)}),e(),t(13,"po-input",9),x("ngModelChange",function(s){return g(d),v(i.secondaryLabel,s)||(i.secondaryLabel=s),h(s)}),e(),t(14,"div",2)(15,"po-checkbox-group",10),x("ngModelChange",function(s){return g(d),v(i.properties,s)||(i.properties=s),h(s)}),e()(),t(16,"po-textarea",11),x("ngModelChange",function(s){return g(d),v(i.content,s)||(i.content=s),h(s)}),e(),t(17,"div",2)(18,"po-button",12),u("p-click",function(){return g(d),h(i.restore())}),e()()()}a&2&&(m("p-background",i.background)("p-disabled",i.properties.includes("disabled"))("p-height",i.height)("p-help",i.help)("p-primary",i.properties.includes("primaryWidget"))("p-primary-label",i.primaryLabel)("p-secondary-label",i.secondaryLabel)("p-title",i.title),p(),E(" ",i.content,`
`),p(3),m("p-value",i.action),p(4),w("ngModel",i.title),p(),w("ngModel",i.help),p(),w("ngModel",i.height),p(),w("ngModel",i.background),p(),w("ngModel",i.primaryLabel),p(),w("ngModel",i.secondaryLabel),p(2),w("ngModel",i.properties),m("p-options",i.propertiesOptions),p(),w("ngModel",i.content))},dependencies:[K,z,G,Q,R,Z,$,te,ne,ie,I,M],encapsulation:2})}return o})();var we=o=>({"docs-sample-code-tabs":o}),de=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-widget-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Widget Labs"),e(),t(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-widget-labs/sample-po-widget-labs.component.html"),e(),t(13,"pre",7),n(14,`<po-widget
  class="po-sm-12"
  [p-background]="background"
  [p-disabled]="properties.includes('disabled')"
  [p-height]="height"
  [p-help]="help"
  [p-primary]="properties.includes('primaryWidget')"
  [p-primary-label]="primaryLabel"
  [p-secondary-label]="secondaryLabel"
  [p-title]="title"
  (p-on-disabled)="changeAction('p-on-disabled')"
  (p-primary-action)="changeAction('p-primary-action')"
  (p-secondary-action)="changeAction('p-secondary-action')"
  (p-setting)="changeAction('p-setting')"
  (p-title-action)="changeAction('p-title-action')"
>
  { { content }}
</po-widget>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Action" [p-value]="action"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <po-input class="po-md-4" name="title" [(ngModel)]="title" p-label="Title"> </po-input>

  <po-input class="po-md-4" name="help" [(ngModel)]="help" p-label="Help"> </po-input>

  <po-number class="po-md-4" name="height" [(ngModel)]="height" p-label="Height"> </po-number>

  <po-input
    class="po-md-12"
    name="background"
    [(ngModel)]="background"
    p-clean
    p-help="Ex.: 'http://image.com'; '../../image.png'"
    p-label="Background"
  >
  </po-input>

  <po-input class="po-md-6" name="primaryLabel" [(ngModel)]="primaryLabel" p-label="Primary Label"> </po-input>

  <po-input class="po-md-6" name="secondaryLabel" [(ngModel)]="secondaryLabel" p-label="Secondary Label"> </po-input>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="3"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <po-textarea class="po-md-12" [(ngModel)]="content" name="content" p-label="Content"> </po-textarea>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-widget-labs/sample-po-widget-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-labs',
  templateUrl: './sample-po-widget-labs.component.html',
  standalone: false
})
export class SamplePoWidgetLabsComponent implements OnInit {
  action: string;
  background: string;
  content: string;
  height: number;
  help: string;
  primaryLabel: string;
  properties: Array<string>;
  secondaryLabel: string;
  title: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'primaryWidget', label: 'Primary Widget' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeAction(action) {
    this.action = action;
  }

  restore() {
    this.background = '';
    this.action = '';
    this.content = '';
    this.height = undefined;
    this.help = '';
    this.title = undefined;
    this.primaryLabel = undefined;
    this.properties = [];
    this.secondaryLabel = undefined;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-widget-labs"),e(),l(23,"hr")),a&2&&(p(5),_("po-icon "+i.sampleCodeButtonIcon),p(),E(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",P(4,we,i.hideSampleCodeTabs)))},dependencies:[T,C,f,y,re],encapsulation:2})}return o})();var xe=["detailsModal"],se=(()=>{class o{detailsModalElement;paymentLink="https://www.google.com.br/search?q=days+to+payment";itemsDetails;titleDetailsModal;typeChart="line";columnsDetails=[{property:"dateUpdate",label:"Date update",type:"date"},{property:"statement",label:"Statement",type:"currency"}];itemsAccountDetails=[{dateUpdate:"03-05-2018",statement:"-56.45"},{dateUpdate:"02-05-2018",statement:"-14.99"},{dateUpdate:"02-05-2018",statement:"-657.56"},{dateUpdate:"12-05-2017",statement:"3547.29"}];itemsSavingsDetails=[{dateUpdate:"03-05-2018",statement:"-300"},{dateUpdate:"03-05-2018",statement:"2000"},{dateUpdate:"02-05-2018",statement:"1500"},{dateUpdate:"02-05-2018",statement:"-200"},{dateUpdate:"12-05-2017",statement:"2000"}];daysPayment(){window.open(this.paymentLink,"_blank")}openModal(r){switch(r){case"savings":this.titleDetailsModal="Total savings - Details",this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case"account":this.titleDetailsModal="Total checking account - Details",this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open();break}}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-widget-finance-dashboard"]],viewQuery:function(a,i){if(a&1&&V(xe,7),a&2){let d;F(d=B())&&(i.detailsModalElement=d.first)}},standalone:!1,decls:35,vars:4,consts:[["detailsModal",""],[1,"po-row"],["p-background","../../../assets/graphics/days-to-payment.png","p-height","210","p-primary","true","p-title","Days to Payment",1,"po-lg-6","po-mt-2",3,"p-click"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center"],["p-height","200","p-primary","true","p-primary-label","Details","p-title","Total savings",1,"po-lg-3","po-mt-2",3,"p-primary-action"],["p-height","200","p-primary-label","Details","p-title","Total checking account",1,"po-lg-3","po-mt-2",3,"p-primary-action"],["p-title","Category with the highest expense",1,"po-md-12","po-lg-4","po-mt-2"],["p-title","Most used payment type",1,"po-md-12","po-lg-4","po-mt-2"],["p-title","Higher revenue in month",1,"po-md-12","po-lg-4","po-mt-2"],[3,"p-title"],[3,"p-columns","p-items","p-hide-table-search"]],template:function(a,i){if(a&1){let d=A();t(0,"div",1)(1,"po-widget",2),u("p-click",function(){return g(d),h(i.daysPayment())}),t(2,"div",3),n(3,"17 days left"),e(),t(4,"div",4),n(5,"Scheduled to 05/04/2018"),e()(),t(6,"po-widget",5),u("p-primary-action",function(){return g(d),h(i.openModal("savings"))}),t(7,"div",3),n(8,"$5.000,00"),e(),t(9,"div",4),n(10,"Last updated at 18:34"),e()(),t(11,"po-widget",6),u("p-primary-action",function(){return g(d),h(i.openModal("account"))}),t(12,"div",3),n(13,"$2.818,29"),e(),t(14,"div",4),n(15,"Last updated at 08:20"),e()()(),t(16,"div",1)(17,"po-widget",7)(18,"div",3),n(19,"$1.500,00"),e(),t(20,"div",4),n(21,"Meal"),e()(),t(22,"po-widget",8)(23,"div",3),n(24,"Credit card"),e(),t(25,"div",4),n(26,"MasterCard - 5500 0000 0000 0004"),e()(),t(27,"po-widget",9)(28,"div",3),n(29,"$2.000,00"),e(),t(30,"div",4),n(31,"05/03/2018"),e()()(),t(32,"po-modal",10,0),l(34,"po-table",11),e()}a&2&&(p(32),m("p-title",i.titleDetailsModal),p(2),m("p-columns",i.columnsDetails)("p-items",i.itemsDetails)("p-hide-table-search",!1))},dependencies:[D,ee,M],encapsulation:2})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-widget-finance-dashboard-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Widget - Finance dashboard"),e(),t(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-widget
    class="po-lg-6 po-mt-2"
    p-background="../../../assets/graphics/days-to-payment.png"
    p-height="210"
    p-primary="true"
    p-title="Days to Payment"
    (p-click)="daysPayment()"
  >
    <div class="po-font-subtitle po-text-center">17 days left</div>
    <div class="po-text-center">Scheduled to 05/04/2018</div>
  </po-widget>

  <po-widget
    class="po-lg-3 po-mt-2"
    p-height="200"
    p-primary="true"
    p-primary-label="Details"
    p-title="Total savings"
    (p-primary-action)="openModal('savings')"
  >
    <div class="po-font-subtitle po-text-center">$5.000,00</div>
    <div class="po-text-center">Last updated at 18:34</div>
  </po-widget>

  <po-widget
    class="po-lg-3 po-mt-2"
    p-height="200"
    p-primary-label="Details"
    p-title="Total checking account"
    (p-primary-action)="openModal('account')"
  >
    <div class="po-font-subtitle po-text-center">$2.818,29</div>
    <div class="po-text-center">Last updated at 08:20</div>
  </po-widget>
</div>

<div class="po-row">
  <po-widget class="po-md-12 po-lg-4 po-mt-2" p-title="Category with the highest expense">
    <div class="po-font-subtitle po-text-center">$1.500,00</div>
    <div class="po-text-center">Meal</div>
  </po-widget>

  <po-widget class="po-md-12 po-lg-4 po-mt-2" p-title="Most used payment type">
    <div class="po-font-subtitle po-text-center">Credit card</div>
    <div class="po-text-center">MasterCard - 5500 0000 0000 0004</div>
  </po-widget>

  <po-widget class="po-md-12 po-lg-4 po-mt-2" p-title="Higher revenue in month">
    <div class="po-font-subtitle po-text-center">$2.000,00</div>
    <div class="po-text-center">05/03/2018</div>
  </po-widget>
</div>

<po-modal #detailsModal [p-title]="titleDetailsModal">
  <po-table [p-columns]="columnsDetails" [p-items]="itemsDetails" [p-hide-table-search]="false"> </po-table>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, ViewChild } from '@angular/core';

import { PoModalComponent, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-finance-dashboard',
  templateUrl: './sample-po-widget-finance-dashboard.component.html',
  standalone: false
})
export class SamplePoWidgetFinanceDashboardComponent {
  @ViewChild('detailsModal', { static: true }) detailsModalElement: PoModalComponent;

  paymentLink: string = 'https://www.google.com.br/search?q=days+to+payment';
  itemsDetails: Array<any>;
  titleDetailsModal: string;
  typeChart: string = 'line';

  public readonly columnsDetails: Array<PoTableColumn> = [
    { property: 'dateUpdate', label: 'Date update', type: 'date' },
    { property: 'statement', label: 'Statement', type: 'currency' }
  ];

  public readonly itemsAccountDetails: Array<any> = [
    { dateUpdate: '03-05-2018', statement: '-56.45' },
    { dateUpdate: '02-05-2018', statement: '-14.99' },
    { dateUpdate: '02-05-2018', statement: '-657.56' },
    { dateUpdate: '12-05-2017', statement: '3547.29' }
  ];

  public readonly itemsSavingsDetails: Array<any> = [
    { dateUpdate: '03-05-2018', statement: '-300' },
    { dateUpdate: '03-05-2018', statement: '2000' },
    { dateUpdate: '02-05-2018', statement: '1500' },
    { dateUpdate: '02-05-2018', statement: '-200' },
    { dateUpdate: '12-05-2017', statement: '2000' }
  ];

  daysPayment() {
    window.open(this.paymentLink, '_blank');
  }

  openModal(type) {
    switch (type) {
      case 'savings':
        this.titleDetailsModal = 'Total savings - Details';
        this.itemsDetails = this.itemsSavingsDetails;
        this.detailsModalElement.open();
        break;
      case 'account':
        this.titleDetailsModal = 'Total checking account - Details';
        this.itemsDetails = this.itemsAccountDetails;
        this.detailsModalElement.open();
        break;
    }
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-widget-finance-dashboard"),e(),l(23,"hr")),a&2&&(p(5),_("po-icon "+i.sampleCodeButtonIcon),p(),E(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",P(4,Pe,i.hideSampleCodeTabs)))},dependencies:[T,C,f,y,se],encapsulation:2})}return o})();function Me(o,Se){if(o&1&&(t(0,"li"),n(1),e()),o&2){let r=Se.$implicit;p(),N(r)}}var ce=(()=>{class o{poModal;help;label;technologies=["Angular","Typescript","React","Babel","Jasmine","Vue"];value;ngOnInit(){this.showAngular()}showAngular(){this.label="Angular",this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help="https://angular.io/"}showJavascriptTechnologies(){this.poModal.open()}showTypescript(){this.label="Typescript",this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help="https://www.typescriptlang.org/"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-widget-card"]],viewQuery:function(a,i){if(a&1&&V(D,7),a&2){let d;F(d=B())&&(i.poModal=d.first)}},standalone:!1,decls:8,vars:4,consts:[[1,"po-row"],["p-height","300","p-primary-label","Angular","p-secondary-label","Typescript","p-title","Javascript technologies",1,"po-lg-6",3,"p-primary-action","p-secondary-action","p-title-action","p-help"],[3,"p-label","p-value"],["p-title","Javascript Technologies"],[1,"po-ml-3"],[4,"ngFor","ngForOf"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"po-widget",1),u("p-primary-action",function(){return i.showAngular()})("p-secondary-action",function(){return i.showTypescript()})("p-title-action",function(){return i.showJavascriptTechnologies()}),l(2,"po-info",2),e()(),t(3,"po-modal",3),n(4," There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: "),t(5,"div",4)(6,"ul"),J(7,Me,2,1,"li",5),e()()()),a&2&&(p(),m("p-help",i.help),p(),m("p-label",i.label)("p-value",i.value),p(5),m("ngForOf",i.technologies))},dependencies:[j,I,D,M],encapsulation:2})}return o})();var De=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-widget-card-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Widget - Card"),e(),t(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-widget-card/sample-po-widget-card.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-widget
    class="po-lg-6"
    p-height="300"
    p-primary-label="Angular"
    p-secondary-label="Typescript"
    p-title="Javascript technologies"
    [p-help]="help"
    (p-primary-action)="showAngular()"
    (p-secondary-action)="showTypescript()"
    (p-title-action)="showJavascriptTechnologies()"
  >
    <po-info [p-label]="label" [p-value]="value"> </po-info>
  </po-widget>
</div>

<po-modal p-title="Javascript Technologies">
  There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we
  can mention:

  <div class="po-ml-3">
    <ul>
      <li *ngFor="let technology of technologies">{ { technology }}</li>
    </ul>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-widget-card/sample-po-widget-card.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-card',
  templateUrl: './sample-po-widget-card.component.html',
  standalone: false
})
export class SamplePoWidgetCardComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  help: string;
  label: string;
  technologies: Array<string> = ['Angular', 'Typescript', 'React', 'Babel', 'Jasmine', 'Vue'];
  value: string;

  ngOnInit() {
    this.showAngular();
  }

  showAngular() {
    this.label = 'Angular';
    this.value = \`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.\`;
    this.help = 'https://angular.io/';
  }

  showJavascriptTechnologies() {
    this.poModal.open();
  }

  showTypescript() {
    this.label = 'Typescript';
    this.value = \`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.\`;
    this.help = 'https://www.typescriptlang.org/';
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-widget-card"),e(),l(23,"hr")),a&2&&(p(5),_("po-icon "+i.sampleCodeButtonIcon),p(),E(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",P(4,De,i.hideSampleCodeTabs)))},dependencies:[T,C,f,y,ce],encapsulation:2})}return o})();var ge=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-widget-doc"]],standalone:!1,decls:532,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/keyboard"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoWidgetModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente po-widget"),e()(),t(7,"h3",3),n(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),n(11,"PoWidgetComponent"),e()(),t(12,"div",2)(13,"p"),n(14,"O componente "),t(15,"code"),n(16,"po-widget"),e(),n(17," \xE9 recomendado para exibi\xE7\xE3o de "),t(18,"em"),n(19,"dashboards"),e(),n(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),e(),t(21,"p"),n(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),e(),t(23,"p"),n(24,"Para controlar sua largura, \xE9 poss\xEDvel utilizar o "),t(25,"a",6),n(26,"Grid System"),e(),n(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),e(),t(28,"h4"),n(29,"Acessibilidade tratada no componente"),e(),t(30,"p"),n(31,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),e(),t(32,"ul")(33,"li"),n(34,"Utiliza medidas relativas, para se adequar \xE0s prefer\xEAncias e necessidades de quem for utilizar o sistema."),e(),t(35,"li"),n(36,"Desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o na interface por tecnologias assistivas. (WCAG "),t(37,"a",7),n(38,"4.1.2: Name, Role, Value"),e(),n(39,")"),e(),t(40,"li"),n(41,"O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros elementos da tela. (WCAG "),t(42,"a",8),n(43,"2.4.12: Focus Appearance"),e(),n(44,")"),e(),t(45,"li"),n(46,"Quando selecion\xE1vel, prev\xEA intera\xE7\xE3o por teclado, podendo ser selecionado atrav\xE9s da tecla space (WCAG "),t(47,"a",9),n(48,"2.4.1 - Keyboard"),e(),n(49,")"),e()(),t(50,"h4"),n(51,"Tokens customiz\xE1veis"),e(),t(52,"p"),n(53,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(54,"blockquote")(55,"p"),n(56,"Para maiores informa\xE7\xF5es, acesse o guia "),t(57,"a",10),n(58,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(59,"."),e()(),t(60,"table")(61,"thead")(62,"tr")(63,"th"),n(64,"Propriedade"),e(),t(65,"th"),n(66,"Descri\xE7\xE3o"),e(),t(67,"th"),n(68,"Valor Padr\xE3o"),e()()(),t(69,"tbody")(70,"tr")(71,"td")(72,"strong"),n(73,"Default Values"),e()(),l(74,"td")(75,"td"),e(),t(76,"tr")(77,"td")(78,"code"),n(79,"--padding"),e()(),t(80,"td"),n(81,"Preenchimento"),e(),t(82,"td")(83,"code"),n(84,"1rem"),e()()(),t(85,"tr")(86,"td")(87,"code"),n(88,"--border-radius"),e()(),t(89,"td"),n(90,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(91,"td")(92,"code"),n(93,"var(--border-radius-md)"),e()()(),t(94,"tr")(95,"td")(96,"code"),n(97,"--border-width"),e()(),t(98,"td"),n(99,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),e(),t(100,"td")(101,"code"),n(102,"var(--border-width-sm)"),e()()(),t(103,"tr")(104,"td")(105,"code"),n(106,"--border-color"),e()(),t(107,"td"),n(108,"Cor da borda"),e(),t(109,"td")(110,"code"),n(111,"var(--color-neutral-light-20)"),e()()(),t(112,"tr")(113,"td")(114,"code"),n(115,"--background"),e()(),t(116,"td"),n(117,"Cor de background"),e(),t(118,"td")(119,"code"),n(120,"var(--color-neutral-light-00)"),e()()(),t(121,"tr")(122,"td")(123,"code"),n(124,"--shadow"),e()(),t(125,"td"),n(126,"Cont\xE9m o valor da sombra do elemento"),e(),t(127,"td")(128,"code"),n(129,"var(--shadow-md)"),e()()(),t(130,"tr")(131,"td")(132,"strong"),n(133,"Selected"),e()(),l(134,"td")(135,"td"),e(),t(136,"tr")(137,"td")(138,"code"),n(139,"--background-selected"),e(),n(140," \xA0"),e(),t(141,"td"),n(142,"Cor de background no estado selecionado \xA0"),e(),t(143,"td")(144,"code"),n(145,"var(--color-brand-01-lightest)"),e()()(),t(146,"tr")(147,"td")(148,"code"),n(149,"--border-color-selected"),e(),n(150," \xA0"),e(),t(151,"td"),n(152,"Cor da borda no estado selecionado"),e(),t(153,"td")(154,"code"),n(155,"var(--color-action-default)"),e()()(),t(156,"tr")(157,"td")(158,"strong"),n(159,"Hover"),e()(),l(160,"td")(161,"td"),e(),t(162,"tr")(163,"td")(164,"code"),n(165,"--border-color-hover"),e()(),t(166,"td"),n(167,"Cor da borda no estado hover"),e(),t(168,"td")(169,"code"),n(170,"var(--color-brand-01-dark)"),e()()(),t(171,"tr")(172,"td")(173,"code"),n(174,"--shadow-hover"),e()(),t(175,"td"),n(176,"Cont\xE9m o valor da sombra do elemento no estado hover \xA0"),e(),t(177,"td")(178,"code"),n(179,"var(--shadow-lg)"),e()()(),t(180,"tr")(181,"td")(182,"strong"),n(183,"Focused"),e()(),l(184,"td")(185,"td"),e(),t(186,"tr")(187,"td")(188,"code"),n(189,"--color-focused"),e()(),t(190,"td"),n(191,"Cor principal no estado de focus"),e(),t(192,"td")(193,"code"),n(194,"var(--color-action-default)"),e()()(),t(195,"tr")(196,"td")(197,"code"),n(198,"--outline-color-focused"),e(),n(199," \xA0"),e(),t(200,"td"),n(201,"Cor do outline do estado de focus"),e(),t(202,"td")(203,"code"),n(204,"var(--color-action-focus)"),e()()()()()(),t(205,"div",11)(206,"h4",12),n(207,"Seletor"),e(),t(208,"pre",13),n(209,`<po-widget
    p-background="string"
    (p-click)="EventEmitter"
    p-disabled="boolean"
    p-height="number"
    p-help="string"
    p-no-shadow="boolean"
    (p-on-disabled)="EventEmitter"
    p-primary="boolean"
    (p-primary-action)="EventEmitter"
    p-primary-label="string"
    (p-secondary-action)="EventEmitter"
    p-secondary-label="string"
    (p-setting)="EventEmitter"
    p-title="string"
    (p-title-action)="EventEmitter" >
</po-widget>
`),e()(),t(210,"h4",14),n(211,"Propriedades"),e(),t(212,"table",15)(213,"tr",16)(214,"th",17),n(215,"Nome"),e(),t(216,"th",17),n(217,"Tipo"),e(),t(218,"th",17),n(219,"Padr\xE3o"),e(),t(220,"th",17),n(221,"Descri\xE7\xE3o"),e()(),t(222,"tr",18)(223,"td",19)(224,"div",20)(225,"span",21),n(226," p-background"),l(227,"br"),e()()(),t(228,"td",22)(229,"code",23),n(230,"string"),e()(),t(231,"td",24),n(232,"-"),e(),t(233,"td",25)(234,"em")(235,"strong"),n(236,"(opcional)"),e()(),t(237,"p"),n(238,"Aplica\xE7\xE3o de imagem de fundo."),e(),t(239,"blockquote")(240,"p"),n(241,"Se a imagem escolhida intervir na legibilidade do texto contido no "),t(242,"code"),n(243,"p-widget"),e(),n(244,`,
pode-se utilizar a propriedade `),t(245,"code"),n(246,"p-primary"),e(),n(247," em conjunto para que os textos fiquem na cor branca."),e()()()(),t(248,"tr",18)(249,"td",19)(250,"div",26)(251,"span",27),n(252," (p-click)"),l(253,"br"),e()()(),t(254,"td",22)(255,"code",28),n(256,"EventEmitter"),e()(),t(257,"td",24),n(258,"-"),e(),t(259,"td",25)(260,"em")(261,"strong"),n(262,"(opcional)"),e()(),t(263,"p"),n(264,"A\xE7\xE3o que ser\xE1 executada quando o usu\xE1rio clicar sobre a \xE1rea total do "),t(265,"code"),n(266,"po-widget"),e(),n(267,"."),e()()(),t(268,"tr",18)(269,"td",19)(270,"div",20)(271,"span",21),n(272," p-disabled"),l(273,"br"),e()()(),t(274,"td",22)(275,"code",29),n(276,"boolean"),e()(),t(277,"td",24)(278,"p")(279,"code"),n(280,"false"),e()()(),t(281,"td",25)(282,"em")(283,"strong"),n(284,"(opcional)"),e()(),t(285,"p"),n(286,"Desabilita todas as a\xE7\xF5es do componente."),e()()(),t(287,"tr",18)(288,"td",19)(289,"div",20)(290,"span",21),n(291," p-height"),l(292,"br"),e()()(),t(293,"td",22)(294,"code",30),n(295,"number"),e()(),t(296,"td",24),n(297,"-"),e(),t(298,"td",25)(299,"em")(300,"strong"),n(301,"(opcional)"),e()(),t(302,"p"),n(303,"Define a altura do "),t(304,"code"),n(305,"po-widget"),e(),n(306,`.
A altura m\xEDnima para o `),t(307,"code"),n(308,"po-widget"),e(),n(309," depende do que ser\xE1 exibido atrav\xE9s das propriedades "),t(310,"code"),n(311,"p-primary-label"),e(),n(312,`,
`),t(313,"code"),n(314,"p-setting"),e(),n(315,", "),t(316,"code"),n(317,"p-help"),e(),n(318," e "),t(319,"code"),n(320,"p-title"),e(),n(321,"."),e(),t(322,"blockquote")(323,"p"),n(324,"Caso n\xE3o seja informado valor, a propriedade ir\xE1 assumir o tamanho do conte\xFAdo."),e()()()(),t(325,"tr",18)(326,"td",19)(327,"div",20)(328,"span",21),n(329," p-help"),l(330,"br"),e()()(),t(331,"td",22)(332,"code",23),n(333,"string"),e()(),t(334,"td",24),n(335,"-"),e(),t(336,"td",25)(337,"em")(338,"strong"),n(339,"(opcional)"),e()(),t(340,"p"),n(341,"Link de ajuda"),e()()(),t(342,"tr",18)(343,"td",19)(344,"div",20)(345,"span",21),n(346," p-no-shadow"),l(347,"br"),e()()(),t(348,"td",22)(349,"code",29),n(350,"boolean"),e()(),t(351,"td",24)(352,"p")(353,"code"),n(354,"true"),e()()(),t(355,"td",25)(356,"em")(357,"strong"),n(358,"(opcional)"),e()(),t(359,"p"),n(360,"Desabilita a sombra do "),t(361,"code"),n(362,"po-widget"),e(),n(363," quando o mesmo for clic\xE1vel."),e()()(),t(364,"tr",18)(365,"td",19)(366,"div",26)(367,"span",27),n(368," (p-on-disabled)"),l(369,"br"),e()()(),t(370,"td",22)(371,"code",28),n(372,"EventEmitter"),e()(),t(373,"td",24),n(374,"-"),e(),t(375,"td",25)(376,"em")(377,"strong"),n(378,"(opcional)"),e()(),t(379,"p"),n(380,"Fun\xE7\xE3o que ser\xE1 disparada com o valor do "),t(381,"code"),n(382,"p-disabled"),e(),n(383," quando esta propriedade for alterada."),e()()(),t(384,"tr",18)(385,"td",19)(386,"div",20)(387,"span",21),n(388," p-primary"),l(389,"br"),e()()(),t(390,"td",22)(391,"code",29),n(392,"boolean"),e()(),t(393,"td",24)(394,"p")(395,"code"),n(396,"false"),e()()(),t(397,"td",25)(398,"em")(399,"strong"),n(400,"(opcional)"),e()(),t(401,"p"),n(402,"Op\xE7\xE3o para que o "),t(403,"code"),n(404,"po-widget"),e(),n(405," fique em destaque."),e()()(),t(406,"tr",18)(407,"td",19)(408,"div",26)(409,"span",27),n(410," (p-primary-action)"),l(411,"br"),e()()(),t(412,"td",22)(413,"code",28),n(414,"EventEmitter"),e()(),t(415,"td",24),n(416,"-"),e(),t(417,"td",25)(418,"em")(419,"strong"),n(420,"(opcional)"),e()(),t(421,"p"),n(422,"Fun\xE7\xE3o que ser\xE1 chamada na primeira a\xE7\xE3o."),e()()(),t(423,"tr",18)(424,"td",19)(425,"div",20)(426,"span",21),n(427," p-primary-label"),l(428,"br"),e()()(),t(429,"td",22)(430,"code",23),n(431,"string"),e()(),t(432,"td",24)(433,"p")(434,"code"),n(435,"false"),e()()(),t(436,"td",25)(437,"em")(438,"strong"),n(439,"(opcional)"),e()(),t(440,"p"),n(441,"Descri\xE7\xE3o da primeira a\xE7\xE3o."),e()()(),t(442,"tr",18)(443,"td",19)(444,"div",26)(445,"span",27),n(446," (p-secondary-action)"),l(447,"br"),e()()(),t(448,"td",22)(449,"code",28),n(450,"EventEmitter"),e()(),t(451,"td",24),n(452,"-"),e(),t(453,"td",25)(454,"em")(455,"strong"),n(456,"(opcional)"),e()(),t(457,"p"),n(458,"Fun\xE7\xE3o que ser\xE1 chamada na segunda a\xE7\xE3o."),e()()(),t(459,"tr",18)(460,"td",19)(461,"div",20)(462,"span",21),n(463," p-secondary-label"),l(464,"br"),e()()(),t(465,"td",22)(466,"code",23),n(467,"string"),e()(),t(468,"td",24),n(469,"-"),e(),t(470,"td",25)(471,"em")(472,"strong"),n(473,"(opcional)"),e()(),t(474,"p"),n(475,"Descri\xE7\xE3o da segunda a\xE7\xE3o."),e()()(),t(476,"tr",18)(477,"td",19)(478,"div",26)(479,"span",27),n(480," (p-setting)"),l(481,"br"),e()()(),t(482,"td",22)(483,"code",28),n(484,"EventEmitter"),e()(),t(485,"td",24),n(486,"-"),e(),t(487,"td",25)(488,"em")(489,"strong"),n(490,"(opcional)"),e()(),t(491,"p"),n(492,"Fun\xE7\xE3o chamada ao clicar no \xEDcone de configura\xE7\xE3o"),e()()(),t(493,"tr",18)(494,"td",19)(495,"div",20)(496,"span",21),n(497," p-title"),l(498,"br"),e()()(),t(499,"td",22)(500,"code",23),n(501,"string"),e()(),t(502,"td",24)(503,"p")(504,"code"),n(505,"false"),e()()(),t(506,"td",25)(507,"em")(508,"strong"),n(509,"(opcional)"),e()(),t(510,"p"),n(511,"T\xEDtulo do "),t(512,"code"),n(513,"po-widget"),e(),n(514,"."),e()()(),t(515,"tr",18)(516,"td",19)(517,"div",26)(518,"span",27),n(519," (p-title-action)"),l(520,"br"),e()()(),t(521,"td",22)(522,"code",28),n(523,"EventEmitter"),e()(),t(524,"td",24),n(525,"-"),e(),t(526,"td",25)(527,"em")(528,"strong"),n(529,"(opcional)"),e()(),t(530,"p"),n(531,"Fun\xE7\xE3o que ser\xE1 chamada ao clicar no t\xEDtulo."),e()()()()())},dependencies:[C],encapsulation:2})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(U(X),U(Y))};static \u0275cmp=c({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Widget",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-widget-doc"),e(),t(4,"po-tab",3),u("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-widget-basic-view")(6,"sample-po-widget-labs-view")(7,"sample-po-widget-finance-dashboard-view")(8,"sample-po-widget-card-view"),e()()()),a&2&&(m("p-actions",i.actions),p(2),m("p-active",i.activeTab==="doc"),p(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[oe,f,y,pe,de,me,ue,ge],encapsulation:2})}return o})();var Ae=[{path:"",component:he}],be=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=L({type:o});static \u0275inj=k({imports:[H.forChild(Ae),H]})}return o})();var dt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=L({type:o});static \u0275inj=k({imports:[ae,be]})}return o})();export{dt as DocPoWidgetModule};
