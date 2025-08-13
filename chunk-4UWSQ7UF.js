import{o as x,p as oe}from"./chunk-MMZVQUBQ.js";import{Aa as z,Ab as C,Db as j,F as B,Ga as te,T as q,Wa as ie,ha as $,ja as ee,nb as ne,sa as F,ta as k,zb as w}from"./chunk-522XRIZO.js";import{Ac as W,Ba as y,Bc as V,Ec as Y,Fa as i,Fc as Q,Ga as t,Ha as a,Jc as J,La as R,M as A,Ma as u,Oc as X,Qc as Z,Sc as U,T as h,U as b,Ya as e,Za as I,_a as _,ab as f,bb as g,cb as E,fb as T,ha as p,ia as P,oa as c,pa as N,vb as M,xc as L,ya as d,yc as D,zc as H}from"./chunk-WFKG4FNY.js";var ae=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","switch","p-label","PO Switch"]],template:function(l,n){l&1&&a(0,"po-switch",0)},dependencies:[k],encapsulation:2})}return o})();var ge=o=>({"docs-sample-code-tabs":o}),le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch Basic"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-basic/sample-po-switch-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-basic/sample-po-switch-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),t()()()()(),i(21,"div",10),a(22,"sample-po-switch-basic"),t(),a(23,"hr")),l&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel,""),p(),d("ngClass",T(4,ge,n.hideSampleCodeTabs)))},dependencies:[M,x,w,C,ae],encapsulation:2})}return o})();var pe=(()=>{class o{additionalHelpTooltip;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:"Left",value:F.Left},{label:"Right",value:F.Right}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"formatModel",label:"Format Model"},{value:"hideLabelStatus",label:"Hide label status"},{value:"errorLimit",label:"Limit Error Message"},{value:"invalidValue",label:"Invalid Value is On/True"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.additionalHelpTooltip="",this.event="",this.help=void 0,this.label=void 0,this.labelOn="",this.labelOff="",this.labelPosition=void 0,this.properties=[],this.size="medium",this.switch=void 0,this.fieldErrorMessage=""}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-labs"]],standalone:!1,decls:19,vars:28,consts:[["f","ngForm"],["name","switch",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-disabled","p-error-limit","p-field-error-message","p-format-model","p-help","p-hide-label-status","p-invalid-value","p-label","p-label-off","p-label-on","p-label-position","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOff","p-help","Text displayed when PO Switch is set to 'false'","p-label","Label Off",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOn","p-help","Text displayed when PO Switch is set to 'true'","p-label","Label On",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelPosition","p-label","Label Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=R();i(0,"po-switch",1),E("ngModelChange",function(r){return h(s),g(n.switch,r)||(n.switch=r),b(r)}),u("p-change",function(){return h(s),b(n.changeEvent("p-change"))})("p-keydown",function(){return h(s),b(n.changeEvent("p-keydown"))}),t(),a(1,"hr"),i(2,"div",2),a(3,"po-info",3)(4,"po-info",4),t(),a(5,"hr"),i(6,"form",null,0)(8,"po-input",5),E("ngModelChange",function(r){return h(s),g(n.label,r)||(n.label=r),b(r)}),t(),i(9,"po-input",6),E("ngModelChange",function(r){return h(s),g(n.help,r)||(n.help=r),b(r)}),t(),i(10,"po-input",7),E("ngModelChange",function(r){return h(s),g(n.additionalHelpTooltip,r)||(n.additionalHelpTooltip=r),b(r)}),t(),i(11,"po-input",8),E("ngModelChange",function(r){return h(s),g(n.labelOff,r)||(n.labelOff=r),b(r)}),t(),i(12,"po-input",9),E("ngModelChange",function(r){return h(s),g(n.labelOn,r)||(n.labelOn=r),b(r)}),t(),i(13,"po-input",10),E("ngModelChange",function(r){return h(s),g(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),b(r)}),t(),i(14,"po-radio-group",11),E("ngModelChange",function(r){return h(s),g(n.labelPosition,r)||(n.labelPosition=r),b(r)}),t(),i(15,"po-checkbox-group",12),E("ngModelChange",function(r){return h(s),g(n.properties,r)||(n.properties=r),b(r)}),t(),i(16,"po-radio-group",13),E("ngModelChange",function(r){return h(s),g(n.size,r)||(n.size=r),b(r)}),t(),i(17,"div",2)(18,"po-button",14),u("p-click",function(){return h(s),b(n.restore())}),t()()()}l&2&&(f("ngModel",n.switch),d("p-additional-help-tooltip",n.additionalHelpTooltip)("p-disabled",n.properties.includes("disabled"))("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-field-error-message",n.fieldErrorMessage)("p-format-model",n.properties.includes("formatModel"))("p-help",n.help)("p-hide-label-status",n.properties.includes("hideLabelStatus"))("p-invalid-value",n.properties==null?null:n.properties.includes("invalidValue"))("p-label",n.label)("p-label-off",n.labelOff)("p-label-on",n.labelOn)("p-label-position",n.labelPosition)("p-size",n.size),p(3),d("p-value",n.switch),p(),d("p-value",n.event),p(4),f("ngModel",n.label),p(),f("ngModel",n.help),p(),f("ngModel",n.additionalHelpTooltip),p(),f("ngModel",n.labelOff),p(),f("ngModel",n.labelOn),p(),f("ngModel",n.fieldErrorMessage),p(),f("ngModel",n.labelPosition),d("p-options",n.labelPositionOptions),p(),f("ngModel",n.properties),d("p-options",n.propertiesOptions),p(),f("ngModel",n.size),d("p-options",n.sizeOptions))},dependencies:[V,L,D,W,H,B,$,ee,te,k,ie],encapsulation:2})}return o})();var we=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch Labs"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-labs/sample-po-switch-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-switch
  name="switch"
  [(ngModel)]="switch"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-disabled]="properties.includes('disabled')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-field-error-message]="fieldErrorMessage"
  [p-format-model]="properties.includes('formatModel')"
  [p-help]="help"
  [p-hide-label-status]="properties.includes('hideLabelStatus')"
  [p-invalid-value]="properties?.includes('invalidValue')"
  [p-label]="label"
  [p-label-off]="labelOff"
  [p-label-on]="labelOn"
  [p-label-position]="labelPosition"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-switch>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="switch"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help Tooltip"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="labelOff"
    [(ngModel)]="labelOff"
    p-help="Text displayed when PO Switch is set to 'false'"
    p-label="Label Off"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="labelOn"
    [(ngModel)]="labelOn"
    p-help="Text displayed when PO Switch is set to 'true'"
    p-label="Label On"
  >
  </po-input>
  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-radio-group
    class="po-lg-6"
    name="labelPosition"
    [(ngModel)]="labelPosition"
    p-label="Label Position"
    [p-options]="labelPositionOptions"
  >
  </po-radio-group>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-labs/sample-po-switch-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSwitchLabelPosition } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-labs',
  templateUrl: './sample-po-switch-labs.component.html',
  standalone: false
})
export class SamplePoSwitchLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  event: string;
  fieldErrorMessage: string;
  help: string;
  label: string;
  labelOff: string;
  labelOn: string;
  labelPosition: PoSwitchLabelPosition;
  properties: Array<string>;
  size: string;
  switch: boolean;

  public readonly labelPositionOptions: Array<PoRadioGroupOption> = [
    { label: 'Left', value: PoSwitchLabelPosition.Left },
    { label: 'Right', value: PoSwitchLabelPosition.Right }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'formatModel', label: 'Format Model' },
    { value: 'hideLabelStatus', label: 'Hide label status' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'invalidValue', label: 'Invalid Value is On/True' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.labelOn = '';
    this.labelOff = '';
    this.labelPosition = undefined;
    this.properties = [];
    this.size = 'medium';
    this.switch = undefined;
    this.fieldErrorMessage = '';
  }
}
`),t()()()()(),i(21,"div",10),a(22,"sample-po-switch-labs"),t(),a(23,"hr")),l&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel,""),p(),d("ngClass",T(4,we,n.hideSampleCodeTabs)))},dependencies:[M,x,w,C,pe],encapsulation:2})}return o})();var de=(()=>{class o{poNotification;labelPosition=F.Left;serviceFee=!1;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];constructor(m){this.poNotification=m}addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43}confirm(){this.poNotification.success("Purchase done Successful!")}static \u0275fac=function(l){return new(l||o)(P(q))};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-order"]],standalone:!1,decls:15,vars:6,consts:[["f","ngForm"],[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"ngModelChange","p-change","ngModel","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","po-icon an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){if(l&1){let s=R();i(0,"div",1)(1,"po-widget",2)(2,"form",null,0),a(4,"po-table",3),i(5,"po-switch",4),E("ngModelChange",function(r){return h(s),g(n.serviceFee,r)||(n.serviceFee=r),b(r)}),u("p-change",function(){return h(s),b(n.addServiceFee())}),t(),i(6,"div",5)(7,"div",6),e(8,"Total value"),t(),i(9,"span",7),e(10,"R$"),t(),i(11,"span",8),e(12),t()(),i(13,"div",1)(14,"po-button",9),u("p-click",function(){return h(s),b(n.confirm())}),t()()()()()}l&2&&(p(4),d("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",!1),p(),f("ngModel",n.serviceFee),d("p-label-position",n.labelPosition),p(7),I(n.totalAmount))},dependencies:[V,L,D,W,H,B,k,z,j],encapsulation:2})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-order-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch - Order Summary"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-order/sample-po-switch-order.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-md-6 po-lg-4" p-title="Order Summary">
    <form #f="ngForm">
      <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>

      <po-switch
        name="serviceFee"
        [(ngModel)]="serviceFee"
        p-label="Allow a 10% service fee?"
        p-label-off="No, thank you."
        p-label-on="Yes, please."
        [p-label-position]="labelPosition"
        (p-change)="addServiceFee()"
      >
      </po-switch>

      <div class="po-pull-right">
        <div class="po-font-text-large-bold">Total value</div>
        <span class="po-font-text">R$</span>
        <span class="po-pull-right po-font-title">{ { totalAmount }}</span>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-12"
          p-icon="po-icon an an-check"
          p-label="Confirm"
          p-kind="primary"
          (p-click)="confirm()"
        >
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-order/sample-po-switch-order.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoNotificationService, PoSwitchLabelPosition, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-order',
  templateUrl: './sample-po-switch-order.component.html',
  standalone: false
})
export class SamplePoSwitchOrderComponent {
  labelPosition: PoSwitchLabelPosition = PoSwitchLabelPosition.Left;
  serviceFee: boolean = false;
  totalAmount: number = 43;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'page',
      label: 'Product'
    },
    {
      property: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL'
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  addServiceFee() {
    const percentage: number = 1.1;
    this.totalAmount = this.serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }
}
`),t()()()()(),i(21,"div",10),a(22,"sample-po-switch-order"),t(),a(23,"hr")),l&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel,""),p(),d("ngClass",T(4,Pe,n.hideSampleCodeTabs)))},dependencies:[M,x,w,C,de],encapsulation:2})}return o})();var ce=(()=>{class o{poNotification;formBuilder;formOrderSummary;labelPosition=F.Left;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];constructor(m,l){this.poNotification=m,this.formBuilder=l}ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[!1]})}addServiceFee(){let m=this.formOrderSummary.get("serviceFee").value,l=1.1;this.totalAmount=m?parseFloat((this.totalAmount*l).toFixed(2)):43}confirm(){this.poNotification.success("Purchase done Successful!")}static \u0275fac=function(l){return new(l||o)(P(q),P(J))};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-order-reactive-form"]],standalone:!1,decls:14,vars:6,consts:[[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"formGroup"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","formControlName","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"p-change","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){l&1&&(i(0,"div",0)(1,"po-widget",1)(2,"form",2),a(3,"po-table",3),i(4,"po-switch",4),u("p-change",function(){return n.addServiceFee()}),t(),i(5,"div",5)(6,"div",6),e(7,"Total value"),t(),i(8,"span",7),e(9,"R$"),t(),i(10,"span",8),e(11),t()(),i(12,"div",0)(13,"po-button",9),u("p-click",function(){return n.confirm()}),t()()()()()),l&2&&(p(2),d("formGroup",n.formOrderSummary),p(),d("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",!1),p(),d("p-label-position",n.labelPosition),p(7),I(n.totalAmount))},dependencies:[V,L,D,Y,Q,B,k,z,j],encapsulation:2})}return o})();var Te=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-order-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch - Order Summary Reactive Form"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-md-6 po-lg-4" p-title="Order Summary">
    <form [formGroup]="formOrderSummary">
      <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>

      <po-switch
        name="serviceFee"
        formControlName="serviceFee"
        p-label="Allow a 10% service fee?"
        p-label-off="No, thank you."
        p-label-on="Yes, please."
        [p-label-position]="labelPosition"
        (p-change)="addServiceFee()"
      >
      </po-switch>

      <div class="po-pull-right">
        <div class="po-font-text-large-bold">Total value</div>
        <span class="po-font-text">R$</span>
        <span class="po-pull-right po-font-title">{ { totalAmount }}</span>
      </div>

      <div class="po-row">
        <po-button class="po-md-12" p-icon="an an-check" p-label="Confirm" p-kind="primary" (p-click)="confirm()">
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { PoNotificationService, PoSwitchLabelPosition, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-order-reactive-form',
  templateUrl: './sample-po-switch-order-reactive-form.component.html',
  standalone: false
})
export class SamplePoSwitchOrderReactiveFormComponent implements OnInit {
  formOrderSummary: UntypedFormGroup;
  labelPosition: PoSwitchLabelPosition = PoSwitchLabelPosition.Left;
  totalAmount: number = 43;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'page',
      label: 'Product'
    },
    {
      property: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL'
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  constructor(
    private poNotification: PoNotificationService,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit() {
    this.formOrderSummary = this.formBuilder.group({ serviceFee: [false] });
  }

  addServiceFee() {
    const serviceFee = this.formOrderSummary.get('serviceFee').value;
    const percentage: number = 1.1;
    this.totalAmount = serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }
}
`),t()()()()(),i(21,"div",10),a(22,"sample-po-switch-order-reactive-form"),t(),a(23,"hr")),l&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel,""),p(),d("ngClass",T(4,Te,n.hideSampleCodeTabs)))},dependencies:[M,x,w,C,ce],encapsulation:2})}return o})();var he=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-doc"]],standalone:!1,decls:708,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,n){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),i(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),i(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),i(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),i(16,"h3",3),e(17,"Componente"),t(),i(18,"h4",4)(19,"code",5),e(20,"PoSwitchComponent"),t()(),i(21,"div",2)(22,"p"),e(23," O componente "),i(24,"code"),e(25,"po-switch"),t(),e(26," \xE9 um "),i(27,"a",6),e(28,"checkbox"),t(),e(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),t(),i(30,"p"),e(31,"Pode-se ligar ou desligar o switch utilizando a tecla de espa\xE7o ou o clique do mouse."),t(),i(32,"p"),e(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),t(),i(34,"blockquote")(35,"p"),e(36,"O componente n\xE3o altera o valor incial informado no "),i(37,"em"),e(38,"model"),t(),e(39,", portanto indica-se inicializa-lo caso ter necessidade."),t()(),i(40,"h4"),e(41,"Boas pr\xE1ticas"),t(),i(42,"ul")(43,"li"),e(44,"Evite "),i(45,"code"),e(46,"labels"),t(),e(47," extensos que quebram o layout do "),i(48,"code"),e(49,"po-switch"),t(),e(50,", use "),i(51,"code"),e(52,"labels"),t(),e(53," diretos, curtos e intuitivos."),t()(),i(54,"h4"),e(55,"Acessibilidade tratada no componente"),t(),i(56,"p"),e(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),i(58,"ul")(59,"li"),e(60,"Quando em foco, o switch \xE9 ativado usando a tecla de Espa\xE7o. "),i(61,"a",7),e(62,"W3C WAI-ARIA 3.5 Switch - Keyboard Interaction"),t()(),i(63,"li"),e(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),i(65,"a",8),e(66,"WCAG 2.4.12: Focus Appearance"),t()()(),i(67,"h4"),e(68,"Tokens customiz\xE1veis"),t(),i(69,"p"),e(70,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(71,"blockquote")(72,"p"),e(73,"Para maiores informa\xE7\xF5es, acesse o guia "),i(74,"a",9),e(75,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(76,"."),t()(),i(77,"table")(78,"thead")(79,"tr")(80,"th"),e(81,"Propriedade"),t(),i(82,"th"),e(83,"Descri\xE7\xE3o"),t(),i(84,"th"),e(85,"Valor Padr\xE3o"),t()()(),i(86,"tbody")(87,"tr")(88,"td")(89,"strong"),e(90,"Unchecked"),t()(),a(91,"td")(92,"td"),t(),i(93,"tr")(94,"td")(95,"code"),e(96,"--color-unchecked"),t()(),i(97,"td"),e(98,"Cor principal no estado desmarcado"),t(),i(99,"td")(100,"code"),e(101,"var(--color-neutral-light-00)"),t()()(),i(102,"tr")(103,"td")(104,"code"),e(105,"--border-color"),t()(),i(106,"td"),e(107,"Cor da borda"),t(),i(108,"td")(109,"code"),e(110,"var(--color-neutral-dark-70)"),t()()(),i(111,"tr")(112,"td")(113,"code"),e(114,"--track-unchecked"),t()(),i(115,"td"),e(116,"Cor principal da faixa no estado desmarcado"),t(),i(117,"td")(118,"code"),e(119,"var(--color-neutral-light-20)"),t()()(),i(120,"tr")(121,"td")(122,"strong"),e(123,"Checked"),t()(),a(124,"td")(125,"td"),t(),i(126,"tr")(127,"td")(128,"code"),e(129,"--color-checked"),t()(),i(130,"td"),e(131,"Cor principal no estado selecionado"),t(),i(132,"td")(133,"code"),e(134,"var(--color-action-default)"),t()()(),i(135,"tr")(136,"td")(137,"code"),e(138,"--track-checked"),t()(),i(139,"td"),e(140,"Cor da faixa no estado selecionado"),t(),i(141,"td")(142,"code"),e(143,"var(--color-brand-01-light)"),t()()(),i(144,"tr")(145,"td")(146,"strong"),e(147,"Hover"),t()(),a(148,"td")(149,"td"),t(),i(150,"tr")(151,"td")(152,"code"),e(153,"--color-unchecked-hover"),t()(),i(154,"td"),e(155,"Cor principal no estado hover desmarcado"),t(),i(156,"td")(157,"code"),e(158,"var(--color-action-pressed)"),t()()(),i(159,"tr")(160,"td")(161,"code"),e(162,"--color-checked-hover"),t()(),i(163,"td"),e(164,"Cor principal no estado hover marcado"),t(),i(165,"td")(166,"code"),e(167,"var(--color-action-pressed)"),t()()(),i(168,"tr")(169,"td")(170,"strong"),e(171,"Focused"),t()(),a(172,"td")(173,"td"),t(),i(174,"tr")(175,"td")(176,"code"),e(177,"--outline-color-focused"),t()(),i(178,"td"),e(179,"Cor do outline do estado de focus"),t(),i(180,"td")(181,"code"),e(182,"var(--color-action-focus)"),t()()(),i(183,"tr")(184,"td")(185,"strong"),e(186,"Disabled"),t()(),a(187,"td")(188,"td"),t(),i(189,"tr")(190,"td")(191,"code"),e(192,"--color-unchecked-disabled"),t()(),i(193,"td"),e(194,"Cor principal do disabled no estado desmarcado"),t(),i(195,"td")(196,"code"),e(197,"var(--color-neutral-light-20)"),t()()(),i(198,"tr")(199,"td")(200,"code"),e(201,"--color-checked-disabled"),t()(),i(202,"td"),e(203,"Cor principal do disabled no estado marcado"),t(),i(204,"td")(205,"code"),e(206,"var(--color-action-disabled)"),t()()()()()(),i(207,"div",10)(208,"h4",11),e(209,"Seletor"),t(),i(210,"pre",12),e(211,`<po-switch
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-change)="EventEmitter"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-format-model="boolean"
    p-help="string"
    p-hide-label-status="boolean"
    p-invalid-value="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-off="string"
    p-label-on="string"
    p-label-position="PoSwitchLabelPosition"
    name="string"
    p-size="string" >
</po-switch>
`),t()(),i(212,"h4",13),e(213,"Propriedades"),t(),i(214,"table",14)(215,"tr",15)(216,"th",16),e(217,"Nome"),t(),i(218,"th",16),e(219,"Tipo"),t(),i(220,"th",16),e(221,"Padr\xE3o"),t(),i(222,"th",16),e(223,"Descri\xE7\xE3o"),t()(),i(224,"tr",17)(225,"td",18)(226,"div",19)(227,"span",20),e(228," (p-additional-help)"),a(229,"br"),t()()(),i(230,"td",21)(231,"code",22),e(232,"EventEmitter"),t()(),i(233,"td",23),e(234,"-"),t(),i(235,"td",24)(236,"em")(237,"strong"),e(238,"(opcional)"),t()(),i(239,"p"),e(240,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(241,"code"),e(242,"p-help"),t(),e(243,"."),t()()(),i(244,"tr",17)(245,"td",18)(246,"div",25)(247,"span",26),e(248," p-additional-help-tooltip"),a(249,"br"),t()()(),i(250,"td",21)(251,"code",27),e(252,"string"),t()(),i(253,"td",23),e(254,"-"),t(),i(255,"td",24)(256,"em")(257,"strong"),e(258,"(opcional)"),t()(),i(259,"p"),e(260,"Exibe um \xEDcone de ajuda adicional ao "),i(261,"code"),e(262,"p-help"),t(),e(263,`, com o texto desta propriedade no tooltip.
Se o evento `),i(264,"code"),e(265,"p-additional-help"),t(),e(266,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(267,"strong"),e(268,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(269,"blockquote")(270,"p"),e(271,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),i(272,"tr",17)(273,"td",18)(274,"div",25)(275,"span",26),e(276," p-append-in-body"),a(277,"br"),t()()(),i(278,"td",21)(279,"code",28),e(280,"boolean"),t()(),i(281,"td",23)(282,"p")(283,"code"),e(284,"false"),t()()(),i(285,"td",24)(286,"em")(287,"strong"),e(288,"(opcional)"),t()(),i(289,"p"),e(290,"Define que o tooltip ("),i(291,"code"),e(292,"p-additional-help-tooltip"),t(),e(293," e/ou "),i(294,"code"),e(295,"p-error-limit"),t(),e(296,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),i(297,"blockquote")(298,"p"),e(299,"Quando utilizado com "),i(300,"code"),e(301,"p-additional-help-tooltip"),t(),e(302,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(303,"tr",17)(304,"td",18)(305,"div",19)(306,"span",20),e(307," (p-change)"),a(308,"br"),t()()(),i(309,"td",21)(310,"code",22),e(311,"EventEmitter"),t()(),i(312,"td",23),e(313,"-"),t(),i(314,"td",24)(315,"em")(316,"strong"),e(317,"(opcional)"),t()(),i(318,"p"),e(319,"Evento disparado ao alterar valor do campo."),t()()(),i(320,"tr",17)(321,"td",18)(322,"div",25)(323,"span",26),e(324," p-disabled"),a(325,"br"),t()()(),i(326,"td",21)(327,"code",28),e(328,"boolean"),t()(),i(329,"td",23)(330,"p")(331,"code"),e(332,"false"),t()()(),i(333,"td",24)(334,"em")(335,"strong"),e(336,"(opcional)"),t()(),i(337,"p"),e(338,"Indica se o campo ser\xE1 desabilitado."),t()()(),i(339,"tr",17)(340,"td",18)(341,"div",25)(342,"span",26),e(343," p-error-limit"),a(344,"br"),t()()(),i(345,"td",21)(346,"code",28),e(347,"boolean"),t()(),i(348,"td",23)(349,"p")(350,"code"),e(351,"false"),t()()(),i(352,"td",24)(353,"em")(354,"strong"),e(355,"(opcional)"),t()(),i(356,"p"),e(357,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(358,"blockquote")(359,"p"),e(360,"Caso essa propriedade seja definida como "),i(361,"code"),e(362,"true"),t(),e(363,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(364,"tr",17)(365,"td",18)(366,"div",25)(367,"span",26),e(368," p-field-error-message"),a(369,"br"),t()()(),i(370,"td",21)(371,"code",27),e(372,"string"),t()(),i(373,"td",23),e(374,"-"),t(),i(375,"td",24)(376,"em")(377,"strong"),e(378,"(opcional)"),t()(),i(379,"p"),e(380,"Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false)."),t()()(),i(381,"tr",17)(382,"td",18)(383,"div",25)(384,"span",26),e(385," p-format-model"),a(386,"br"),t()()(),i(387,"td",21)(388,"code",28),e(389,"boolean"),t()(),i(390,"td",23)(391,"p")(392,"code"),e(393,"false"),t()()(),i(394,"td",24)(395,"em")(396,"strong"),e(397,"(opcional)"),t()(),i(398,"p"),e(399,"Indica se o "),i(400,"code"),e(401,"model"),t(),e(402," receber\xE1 o valor formatado pelas propriedades "),i(403,"code"),e(404,"p-label-on"),t(),e(405," e "),i(406,"code"),e(407,"p-label-off"),t(),e(408,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),i(409,"blockquote")(410,"p"),e(411,"Por padr\xE3o ser\xE1 atribu\xEDdo "),i(412,"code"),e(413,"false"),t(),e(414,"."),t()()()(),i(415,"tr",17)(416,"td",18)(417,"div",25)(418,"span",26),e(419," p-help"),a(420,"br"),t()()(),i(421,"td",21)(422,"code",27),e(423,"string"),t()(),i(424,"td",23),e(425,"-"),t(),i(426,"td",24)(427,"p"),e(428,"Texto de apoio para o campo."),t()()(),i(429,"tr",17)(430,"td",18)(431,"div",25)(432,"span",26),e(433," p-hide-label-status"),a(434,"br"),t()()(),i(435,"td",21)(436,"code",28),e(437,"boolean"),t()(),i(438,"td",23)(439,"p")(440,"code"),e(441,"false"),t()()(),i(442,"td",24)(443,"em")(444,"strong"),e(445,"(opcional)"),t()(),i(446,"p"),e(447,"Indica se o status do "),i(448,"code"),e(449,"model"),t(),e(450," ser\xE1 escondido visualmente ao lado do switch."),t(),i(451,"blockquote")(452,"p"),e(453,"Por padr\xE3o ser\xE1 atribu\xEDdo "),i(454,"code"),e(455,"false"),t(),e(456,"."),t()()()(),i(457,"tr",17)(458,"td",18)(459,"div",25)(460,"span",26),e(461," p-invalid-value"),a(462,"br"),t()()(),i(463,"td",21)(464,"code",28),e(465,"boolean"),t()(),i(466,"td",23)(467,"p")(468,"code"),e(469,"false"),t()()(),i(470,"td",24)(471,"em")(472,"strong"),e(473,"(opcional)"),t()(),i(474,"p"),e(475,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),i(476,"code"),e(477,"p-field-error-message"),t(),e(478,"."),t(),i(479,"blockquote")(480,"p"),e(481,"Caso essa propriedade seja definida como "),i(482,"code"),e(483,"true"),t(),e(484,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()()()(),i(485,"tr",17)(486,"td",18)(487,"div",19)(488,"span",20),e(489," (p-keydown)"),a(490,"br"),t()()(),i(491,"td",21)(492,"code",22),e(493,"EventEmitter"),t()(),i(494,"td",23),e(495,"-"),t(),i(496,"td",24)(497,"em")(498,"strong"),e(499,"(opcional)"),t()(),i(500,"p"),e(501,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(502,"code"),e(503,"KeyboardEvent"),t(),e(504," com informa\xE7\xF5es sobre a tecla."),t()()(),i(505,"tr",17)(506,"td",18)(507,"div",25)(508,"span",26),e(509," p-label"),a(510,"br"),t()()(),i(511,"td",21)(512,"code",27),e(513,"string"),t()(),i(514,"td",23),e(515,"-"),t(),i(516,"td",24)(517,"p"),e(518,"R\xF3tulo exibido pelo componente."),t()()(),i(519,"tr",17)(520,"td",18)(521,"div",25)(522,"span",26),e(523," p-label-off"),a(524,"br"),t()()(),i(525,"td",21)(526,"code",27),e(527,"string"),t()(),i(528,"td",23)(529,"p")(530,"code"),e(531,"false"),t()()(),i(532,"td",24)(533,"p"),e(534,"Texto exibido quando o valor do componente for "),i(535,"code"),e(536,"false"),t(),e(537,"."),t()()(),i(538,"tr",17)(539,"td",18)(540,"div",25)(541,"span",26),e(542," p-label-on"),a(543,"br"),t()()(),i(544,"td",21)(545,"code",27),e(546,"string"),t()(),i(547,"td",23)(548,"p")(549,"code"),e(550,"true"),t()()(),i(551,"td",24)(552,"p"),e(553,"Texto exibido quando o valor do componente for "),i(554,"code"),e(555,"true"),t(),e(556,"."),t()()(),i(557,"tr",17)(558,"td",18)(559,"div",25)(560,"span",26),e(561," p-label-position"),a(562,"br"),t()()(),i(563,"td",21)(564,"code",29),e(565,"PoSwitchLabelPosition"),t()(),i(566,"td",23),e(567,"-"),t(),i(568,"td",24)(569,"em")(570,"strong"),e(571,"(opcional)"),t()(),i(572,"p"),e(573,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo que fica ao lado do switch."),t(),i(574,"blockquote")(575,"p"),e(576,"Por padr\xE3o exibe \xE0 direita."),t()()()(),i(577,"tr",17)(578,"td",18)(579,"div",25)(580,"span",26),e(581," name"),a(582,"br"),t()()(),i(583,"td",21)(584,"code",27),e(585,"string"),t()(),i(586,"td",23),e(587,"-"),t(),i(588,"td",24)(589,"p"),e(590,"Nome do componente."),t()()(),i(591,"tr",17)(592,"td",18)(593,"div",25)(594,"span",26),e(595," p-size"),a(596,"br"),t()()(),i(597,"td",21)(598,"code",27),e(599,"string"),t()(),i(600,"td",23)(601,"p")(602,"code"),e(603,"medium"),t()()(),i(604,"td",24)(605,"em")(606,"strong"),e(607,"(opcional)"),t()(),i(608,"p"),e(609,"Define o tamanho do componente:"),t(),i(610,"ul")(611,"li")(612,"code"),e(613,"small"),t(),e(614,": altura de 16px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(615,"li")(616,"code"),e(617,"medium"),t(),e(618,": altura de 24px."),t()(),i(619,"blockquote")(620,"p"),e(621,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(622,"code"),e(623,"medium"),t(),e(624,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(625,"a",30),e(626,"po-theme"),t(),e(627,"."),t()()()()(),i(628,"h3",13),e(629,"M\xE9todos"),t(),i(630,"table",31)(631,"tr",17)(632,"th",32)(633,"div",25)(634,"h4")(635,"span",26),e(636," showAdditionalHelp "),t()()()()(),i(637,"tr",24)(638,"td",24)(639,"p"),e(640,"M\xE9todo que exibe "),i(641,"code"),e(642,"p-additionalHelpTooltip"),t(),e(643," ou executa a a\xE7\xE3o definida em "),i(644,"code"),e(645,"p-additionalHelp"),t(),e(646,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(647,"code"),e(648,"p-keydown"),t(),e(649,"."),t(),i(650,"pre")(651,"code"),e(652,`<po-nome-component
 #component
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),i(653,"pre")(654,"code"),e(655,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(656,"br"),i(657,"table",31)(658,"tr",17)(659,"th",32)(660,"div",25)(661,"h4")(662,"span",26),e(663," focus "),t()()()()(),i(664,"tr",24)(665,"td",24)(666,"p"),e(667,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(668,"p"),e(669,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(670,"pre")(671,"code"),e(672,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),t()()()()(),a(673,"br"),i(674,"h3"),e(675,"Enums"),t(),i(676,"h4",4)(677,"code",5),e(678,"PoSwitchLabelPosition"),t()(),i(679,"div",2)(680,"p"),e(681,"Enum para posicionar o label do valor do po-switch."),t()(),i(682,"h4",13),e(683,"Propriedades"),t(),i(684,"table",14)(685,"tr",15)(686,"th",16),e(687,"Nome"),t(),i(688,"th",16),e(689,"Descri\xE7\xE3o"),t()(),i(690,"tr",17)(691,"td",18)(692,"div",25)(693,"span",26),e(694," Right"),a(695,"br"),t()()(),i(696,"td",24)(697,"p"),e(698,"Posiciona o label do lado esquerdo do switch."),t()()(),i(699,"tr",17)(700,"td",18)(701,"div",25)(702,"span",26),e(703," Left"),a(704,"br"),t()()(),i(705,"td",24)(706,"p"),e(707,"Posiciona o label do lado direito do switch."),t()()()()())},dependencies:[x],encapsulation:2})}return o})();var be=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(P(X),P(Z))};static \u0275cmp=c({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Switch",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-switch-doc"),t(),i(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-switch-basic-view")(6,"sample-po-switch-labs-view")(7,"sample-po-switch-order-view")(8,"sample-po-switch-order-reactive-form-view"),t()()()),l&2&&(d("p-actions",n.actions),p(2),d("p-active",n.activeTab==="doc"),p(2),d("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ne,w,C,le,me,se,ue,he],encapsulation:2})}return o})();var Oe=[{path:"",component:be}],Se=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=N({type:o});static \u0275inj=A({imports:[U.forChild(Oe),U]})}return o})();var rt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=N({type:o});static \u0275inj=A({imports:[oe,Se]})}return o})();export{rt as DocPoSwitchModule};
