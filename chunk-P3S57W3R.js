import{o as y,p as Y}from"./chunk-JYNCG2Y6.js";import{Ab as C,F as O,Ga as U,La as q,Ra as B,Wa as X,ha as Q,ja as K,nb as J,zb as v}from"./chunk-HBOGTDFH.js";import{$a as b,Ac as F,Ba as _,Ea as n,Fa as t,Ga as a,Ka as D,La as x,M as N,Nc as j,Pc as G,Rc as H,T as s,U as u,Wa as I,Xa as e,Za as w,ab as E,bb as g,eb as M,ha as m,ia as A,oa as h,pa as k,ub as P,wc as V,xc as L,ya as S,yc as W,zc as z}from"./chunk-MIQUIDUB.js";var Z=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","number","p-label","PO Number"]],template:function(r,i){r&1&&a(0,"po-number",0)},dependencies:[q],encapsulation:2})}return l})();var pe=l=>({"docs-sample-code-tabs":l}),ee=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number Basic"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-basic/sample-po-number-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-number-basic/sample-po-number-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-basic"),t(),a(23,"hr")),r&2&&(m(5),_("po-icon "+i.sampleCodeButtonIcon),m(),w(" ",i.sampleCodeButtonLabel,""),m(),S("ngClass",M(4,pe,i.hideSampleCodeTabs)))},dependencies:[P,y,v,C,Z],encapsulation:2})}return l})();var te=(()=>{class l{additionalHelpTooltip;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:"an an-currency-circle-dollar",label:"an an-currency-circle-dollar"},{value:"an an-currency-btc",label:"an an-currency-btc"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.additionalHelpTooltip="",this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event="",this.messageErrorPattern="",this.label=void 0,this.placeholder="",this.help="",this.icon="",this.size="medium",this.step=void 0,this.properties=[]}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-labs"]],standalone:!1,decls:23,vars:40,consts:[["f","ngForm"],["name","PO number",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-max","p-maxlength","p-min","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-step","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","messageErrorPattern","p-clean","","p-label","Message error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Minlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Maxlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","step","p-clean","","p-label","Step",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=D();n(0,"po-number",1),g("ngModelChange",function(o){return s(p),E(i.number,o)||(i.number=o),u(o)}),x("p-blur",function(){return s(p),u(i.changeEvent("p-blur"))})("p-change",function(){return s(p),u(i.changeEvent("p-change"))})("p-change-model",function(){return s(p),u(i.changeEvent("p-change-model"))})("p-keydown",function(){return s(p),u(i.changeEvent("p-keydown"))}),t(),a(1,"hr"),n(2,"div",2),a(3,"po-info",3)(4,"po-info",4),t(),a(5,"hr"),n(6,"form",null,0)(8,"po-input",5),g("ngModelChange",function(o){return s(p),E(i.label,o)||(i.label=o),u(o)}),t(),n(9,"po-input",6),g("ngModelChange",function(o){return s(p),E(i.help,o)||(i.help=o),u(o)}),t(),n(10,"po-input",7),g("ngModelChange",function(o){return s(p),E(i.additionalHelpTooltip,o)||(i.additionalHelpTooltip=o),u(o)}),t(),n(11,"po-input",8),g("ngModelChange",function(o){return s(p),E(i.placeholder,o)||(i.placeholder=o),u(o)}),t(),n(12,"po-input",9),g("ngModelChange",function(o){return s(p),E(i.messageErrorPattern,o)||(i.messageErrorPattern=o),u(o)}),t(),n(13,"po-number",10),g("ngModelChange",function(o){return s(p),E(i.min,o)||(i.min=o),u(o)}),t(),n(14,"po-number",11),g("ngModelChange",function(o){return s(p),E(i.minlength,o)||(i.minlength=o),u(o)}),t(),n(15,"po-number",12),g("ngModelChange",function(o){return s(p),E(i.max,o)||(i.max=o),u(o)}),t(),n(16,"po-number",13),g("ngModelChange",function(o){return s(p),E(i.maxlength,o)||(i.maxlength=o),u(o)}),t(),n(17,"po-number",14),g("ngModelChange",function(o){return s(p),E(i.step,o)||(i.step=o),u(o)}),t(),n(18,"po-select",15),g("ngModelChange",function(o){return s(p),E(i.icon,o)||(i.icon=o),u(o)}),t(),n(19,"po-checkbox-group",16),g("ngModelChange",function(o){return s(p),E(i.properties,o)||(i.properties=o),u(o)}),t(),n(20,"po-radio-group",17),g("ngModelChange",function(o){return s(p),E(i.size,o)||(i.size=o),u(o)}),t(),n(21,"div",2)(22,"po-button",18),x("p-click",function(){return s(p),u(i.restore())}),t()()()}r&2&&(b("ngModel",i.number),S("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.messageErrorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-max",i.max)("p-maxlength",i.maxlength)("p-min",i.min)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-step",i.step)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),m(3),S("p-value",i.number),m(),S("p-value",i.event),m(4),b("ngModel",i.label),m(),b("ngModel",i.help),m(),b("ngModel",i.additionalHelpTooltip),m(),b("ngModel",i.placeholder),m(),b("ngModel",i.messageErrorPattern),m(),b("ngModel",i.min),m(),b("ngModel",i.minlength),m(),b("ngModel",i.max),m(),b("ngModel",i.maxlength),m(),b("ngModel",i.step),m(),b("ngModel",i.icon),S("p-options",i.iconOptions),m(),b("ngModel",i.properties),S("p-options",i.propertiesOptions),m(),b("ngModel",i.size),S("p-options",i.sizeOptions))},dependencies:[F,V,L,z,W,O,Q,K,U,q,B,X],encapsulation:2})}return l})();var ce=l=>({"docs-sample-code-tabs":l}),ne=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number Labs"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-labs/sample-po-number-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-number
  class="po-md-12"
  name="PO number"
  [(ngModel)]="number"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="messageErrorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-max]="max"
  [p-maxlength]="maxlength"
  [p-min]="min"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-step]="step"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-number>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="number"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help Tooltip"
  >
  </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="messageErrorPattern"
    [(ngModel)]="messageErrorPattern"
    p-clean
    p-label="Message error pattern"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Minlength"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Maxlength"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="step" [(ngModel)]="step" p-clean p-label="Step"> </po-number>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

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
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-number-labs/sample-po-number-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-labs',
  templateUrl: './sample-po-number-labs.component.html',
  standalone: false
})
export class SamplePoNumberLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  event: string;
  messageErrorPattern: string;
  help: string;
  icon: string;
  label: string;
  max: number;
  maxlength: number;
  min: number;
  minlength: number;
  number: number;
  placeholder: string;
  properties: Array<string>;
  size: string;
  step: string;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-currency-circle-dollar', label: 'an an-currency-circle-dollar' },
    { value: 'an an-currency-btc', label: 'an an-currency-btc' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' }
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
    this.number = undefined;
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.event = '';
    this.messageErrorPattern = '';
    this.label = undefined;
    this.placeholder = '';
    this.help = '';
    this.icon = '';
    this.size = 'medium';
    this.step = undefined;
    this.properties = [];
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-labs"),t(),a(23,"hr")),r&2&&(m(5),_("po-icon "+i.sampleCodeButtonIcon),m(),w(" ",i.sampleCodeButtonLabel,""),m(),S("ngClass",M(4,ce,i.hideSampleCodeTabs)))},dependencies:[P,y,v,C,te],encapsulation:2})}return l})();var ie=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:"S\xE3o Paulo"},{value:17,label:"Alagoas"},{value:15,label:"Cear\xE1"}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100)}loadICMS(){this.icms=this.state}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-calculate"]],standalone:!1,decls:16,vars:9,consts:[["f","ngForm"],[1,"po-row"],["name","price","p-label","Price","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantity","p-label","Quantity","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State","p-required","","p-sort","",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],["name","icms","p-label","ICMS %","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","liquid","p-label","Liquid","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","total","p-label","Total","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Calculate",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=D();n(0,"h3"),e(1,"Calculate Tax"),t(),a(2,"hr"),n(3,"form",null,0)(5,"div",1)(6,"po-number",2),g("ngModelChange",function(o){return s(p),E(i.price,o)||(i.price=o),u(o)}),t(),n(7,"po-number",3),g("ngModelChange",function(o){return s(p),E(i.quantity,o)||(i.quantity=o),u(o)}),t()(),n(8,"div")(9,"po-select",4),g("ngModelChange",function(o){return s(p),E(i.state,o)||(i.state=o),u(o)}),x("p-change",function(){return s(p),u(i.loadICMS())}),t(),n(10,"po-number",5),g("ngModelChange",function(o){return s(p),E(i.icms,o)||(i.icms=o),u(o)}),t(),n(11,"po-number",6),g("ngModelChange",function(o){return s(p),E(i.liquid,o)||(i.liquid=o),u(o)}),t(),n(12,"po-number",7),g("ngModelChange",function(o){return s(p),E(i.total,o)||(i.total=o),u(o)}),t()(),n(13,"div",1)(14,"po-button",8),x("p-click",function(){return s(p),u(i.calculate())}),t(),n(15,"po-button",9),x("p-click",function(){s(p);let o=I(4);return u(o.reset())}),t()()()}if(r&2){let p=I(4);m(6),b("ngModel",i.price),m(),b("ngModel",i.quantity),m(2),b("ngModel",i.state),S("p-options",i.statesOptions),m(),b("ngModel",i.icms),m(),b("ngModel",i.liquid),m(),b("ngModel",i.total),m(2),S("p-disabled",p.invalid),m(),S("p-disabled",p.invalid)}},dependencies:[F,V,L,z,W,O,q,B],encapsulation:2})}return l})();var ge=l=>({"docs-sample-code-tabs":l}),oe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-calculate-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number - Calculate"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-calculate/sample-po-number-calculate.component.html"),t(),n(13,"pre",7),e(14,`<h3>Calculate Tax</h3>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-number class="po-md-6" name="price" [(ngModel)]="price" p-label="Price" p-required> </po-number>

    <po-number class="po-md-6" name="quantity" [(ngModel)]="quantity" p-label="Quantity" p-required> </po-number>
  </div>

  <div>
    <po-select
      class="po-md-6 po-lg-3"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      p-required
      p-sort
      [p-options]="statesOptions"
      (p-change)="loadICMS()"
    >
    </po-select>

    <po-number class="po-md-6 po-lg-3" name="icms" [(ngModel)]="icms" p-label="ICMS %" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="liquid" [(ngModel)]="liquid" p-label="Liquid" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="total" [(ngModel)]="total" p-label="Total" p-disabled> </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Calculate" [p-disabled]="f.invalid" (p-click)="calculate()"> </po-button>

    <po-button class="po-md-3" p-label="Clean" [p-disabled]="f.invalid" (p-click)="f.reset()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-number-calculate/sample-po-number-calculate.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-calculate',
  templateUrl: './sample-po-number-calculate.component.html',
  standalone: false
})
export class SamplePoNumberCalculateComponent {
  icms: number;
  liquid: number;
  price: number;
  quantity: number;
  state: number;
  total: number;

  public readonly statesOptions: Array<PoSelectOption> = [
    { value: 18, label: 'S\xE3o Paulo' },
    { value: 17, label: 'Alagoas' },
    { value: 15, label: 'Cear\xE1' }
  ];

  calculate() {
    const realPrice = this.price * this.quantity;
    this.liquid = realPrice;
    this.total = realPrice + realPrice * (this.state / 100);
  }

  loadICMS() {
    this.icms = this.state;
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-calculate"),t(),a(23,"hr")),r&2&&(m(5),_("po-icon "+i.sampleCodeButtonIcon),m(),w(" ",i.sampleCodeButtonLabel,""),m(),S("ngClass",M(4,ge,i.hideSampleCodeTabs)))},dependencies:[P,y,v,C,ie],encapsulation:2})}return l})();var ae=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-doc"]],standalone:!1,decls:1211,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoNumberComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),a(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),a(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),a(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),a(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),a(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),a(210,"br"),e(211," O "),n(212,"code"),e(213,"po-number"),t(),e(214,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),t()(),n(215,"div",8)(216,"h4",9),e(217,"Seletor"),t(),n(218,"pre",10),e(219,`<po-number
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-disabled="boolean"
    p-emit-all-changes="boolean"
    (p-enter)="EventEmitter"
    p-error-async-properties="ErrorAsyncProperties"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-mask="string"
    p-mask-format-model="boolean"
    p-mask-no-length-validation="boolean"
    p-max="number"
    p-maxlength="number"
    p-min="number"
    p-minlength="number"
    name="string"
    p-no-autocomplete="boolean"
    p-optional="boolean"
    p-pattern="string"
    p-placeholder="string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-step="string"
    p-upper-case="boolean" >
</po-number>
`),t()(),n(220,"h4",11),e(221,"Propriedades"),t(),n(222,"table",12)(223,"tr",13)(224,"th",14),e(225,"Nome"),t(),n(226,"th",14),e(227,"Tipo"),t(),n(228,"th",14),e(229,"Padr\xE3o"),t(),n(230,"th",14),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),e(236," (p-additional-help)"),a(237,"br"),t()()(),n(238,"td",19)(239,"code",20),e(240,"EventEmitter"),t()(),n(241,"td",21),e(242,"-"),t(),n(243,"td",22)(244,"em")(245,"strong"),e(246,"(opcional)"),t()(),n(247,"p"),e(248,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(249,"code"),e(250,"p-help"),t(),e(251,"."),t()()(),n(252,"tr",15)(253,"td",16)(254,"div",23)(255,"span",24),e(256," p-additional-help-tooltip"),a(257,"br"),t()()(),n(258,"td",19)(259,"code",25),e(260,"string"),t()(),n(261,"td",21),e(262,"-"),t(),n(263,"td",22)(264,"em")(265,"strong"),e(266,"(opcional)"),t()(),n(267,"p"),e(268,"Exibe um \xEDcone de ajuda adicional ao "),n(269,"code"),e(270,"p-help"),t(),e(271,`, com o texto desta propriedade no tooltip.
Se o evento `),n(272,"code"),e(273,"p-additional-help"),t(),e(274,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(275,"strong"),e(276,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(277,"blockquote")(278,"p"),e(279,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),n(280,"tr",15)(281,"td",16)(282,"div",23)(283,"span",24),e(284," p-append-in-body"),a(285,"br"),t()()(),n(286,"td",19)(287,"code",26),e(288,"boolean"),t()(),n(289,"td",21)(290,"p")(291,"code"),e(292,"false"),t()()(),n(293,"td",22)(294,"em")(295,"strong"),e(296,"(opcional)"),t()(),n(297,"p"),e(298,"Define que o tooltip ("),n(299,"code"),e(300,"p-additional-help-tooltip"),t(),e(301," e/ou "),n(302,"code"),e(303,"p-error-limit"),t(),e(304,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(305,"blockquote")(306,"p"),e(307,"Quando utilizado com "),n(308,"code"),e(309,"p-additional-help-tooltip"),t(),e(310,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(311,"tr",15)(312,"td",16)(313,"div",23)(314,"span",24),e(315," p-auto-focus"),a(316,"br"),t()()(),n(317,"td",19)(318,"code",26),e(319,"boolean"),t()(),n(320,"td",21)(321,"p")(322,"code"),e(323,"false"),t()()(),n(324,"td",22)(325,"em")(326,"strong"),e(327,"(opcional)"),t()(),n(328,"p"),e(329,"Aplica foco no elemento ao ser iniciado."),t(),n(330,"blockquote")(331,"p"),e(332,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(333,"tr",15)(334,"td",16)(335,"div",17)(336,"span",18),e(337," (p-blur)"),a(338,"br"),t()()(),n(339,"td",19)(340,"code",20),e(341,"EventEmitter"),t()(),n(342,"td",21),e(343,"-"),t(),n(344,"td",22)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),n(348,"p"),e(349,"Evento disparado ao sair do campo."),t()()(),n(350,"tr",15)(351,"td",16)(352,"div",17)(353,"span",18),e(354," (p-change)"),a(355,"br"),t()()(),n(356,"td",19)(357,"code",20),e(358,"EventEmitter"),t()(),n(359,"td",21),e(360,"-"),t(),n(361,"td",22)(362,"em")(363,"strong"),e(364,"(opcional)"),t()(),n(365,"p"),e(366,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(367,"tr",15)(368,"td",16)(369,"div",17)(370,"span",18),e(371," (p-change-model)"),a(372,"br"),t()()(),n(373,"td",19)(374,"code",20),e(375,"EventEmitter"),t()(),n(376,"td",21),e(377,"-"),t(),n(378,"td",22)(379,"em")(380,"strong"),e(381,"(opcional)"),t()(),n(382,"p"),e(383,"Evento disparado ao alterar valor do model."),t()()(),n(384,"tr",15)(385,"td",16)(386,"div",23)(387,"span",24),e(388,"p-clean"),a(389,"br"),t()()(),n(390,"td",19)(391,"code",26),e(392,"boolean"),t()(),n(393,"td",21),e(394,"-"),t(),n(395,"td",22)(396,"em")(397,"strong"),e(398,"(opcional)"),t()(),n(399,"p"),e(400,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(401,"tr",15)(402,"td",16)(403,"div",23)(404,"span",24),e(405,"p-disabled"),a(406,"br"),t()()(),n(407,"td",19)(408,"code",26),e(409,"boolean"),t()(),n(410,"td",21)(411,"p")(412,"code"),e(413,"false"),t()()(),n(414,"td",22)(415,"em")(416,"strong"),e(417,"(opcional)"),t()(),n(418,"p"),e(419,"Se verdadeiro, desabilita o campo."),t()()(),n(420,"tr",15)(421,"td",16)(422,"div",23)(423,"span",24),e(424," p-emit-all-changes"),a(425,"br"),t()()(),n(426,"td",19)(427,"code",26),e(428,"boolean"),t()(),n(429,"td",21)(430,"p")(431,"code"),e(432,"false"),t()()(),n(433,"td",22)(434,"em")(435,"strong"),e(436,"(opcional)"),t()(),n(437,"p"),e(438,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(439,"tr",15)(440,"td",16)(441,"div",17)(442,"span",18),e(443," (p-enter)"),a(444,"br"),t()()(),n(445,"td",19)(446,"code",20),e(447,"EventEmitter"),t()(),n(448,"td",21),e(449,"-"),t(),n(450,"td",22)(451,"em")(452,"strong"),e(453,"(opcional)"),t()(),n(454,"p"),e(455,"Evento disparado ao entrar do campo."),t()()(),n(456,"tr",15)(457,"td",16)(458,"div",23)(459,"span",24),e(460," p-error-async-properties"),a(461,"br"),t()()(),n(462,"td",19)(463,"code",27),e(464,"ErrorAsyncProperties"),t()(),n(465,"td",21),e(466,"-"),t(),n(467,"td",22)(468,"em")(469,"strong"),e(470,"(opcional)"),t()(),n(471,"p"),e(472,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(473,"code"),e(474,"Reactive Forms"),t(),e(475,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(476,"code"),e(477,"asyncValidators"),t(),e(478,"."),t()()(),n(479,"tr",15)(480,"td",16)(481,"div",23)(482,"span",24),e(483," p-error-limit"),a(484,"br"),t()()(),n(485,"td",19)(486,"code",26),e(487,"boolean"),t()(),n(488,"td",21)(489,"p")(490,"code"),e(491,"false"),t()()(),n(492,"td",22)(493,"em")(494,"strong"),e(495,"(opcional)"),t()(),n(496,"p"),e(497,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(498,"blockquote")(499,"p"),e(500,"Caso essa propriedade seja definida como "),n(501,"code"),e(502,"true"),t(),e(503,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(504,"tr",15)(505,"td",16)(506,"div",23)(507,"span",24),e(508," p-error-pattern"),a(509,"br"),t()()(),n(510,"td",19)(511,"code",25),e(512,"string"),t()(),n(513,"td",21),e(514,"-"),t(),n(515,"td",22)(516,"em")(517,"strong"),e(518,"(opcional)"),t()(),n(519,"p"),e(520,"Mensagem que ser\xE1 apresentada quando o "),n(521,"code"),e(522,"pattern"),t(),e(523," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(524,"blockquote")(525,"p"),e(526,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(527,"code"),e(528,"p-required-field-error-message"),t(),e(529," em conjunto."),t()()()(),n(530,"tr",15)(531,"td",16)(532,"div",23)(533,"span",24),e(534," p-help"),a(535,"br"),t()()(),n(536,"td",19)(537,"code",25),e(538,"string"),t()(),n(539,"td",21),e(540,"-"),t(),n(541,"td",22)(542,"em")(543,"strong"),e(544,"(opcional)"),t()(),n(545,"p"),e(546,"Texto de apoio do campo."),t()()(),n(547,"tr",15)(548,"td",16)(549,"div",23)(550,"span",24),e(551," p-icon"),a(552,"br"),t()()(),n(553,"td",19)(554,"code",25),e(555,"string "),t(),n(556,"code",28),e(557," TemplateRef<void>"),t()(),n(558,"td",21),e(559,"-"),t(),n(560,"td",22)(561,"em")(562,"strong"),e(563,"(opcional)"),t()(),n(564,"p"),e(565,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(566,"p"),e(567,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(568,"a",29),e(569,"Biblioteca de \xEDcones"),t(),e(570,". conforme exemplo abaixo:"),t(),n(571,"pre")(572,"code"),e(573,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(574,"p"),e(575,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(576,"em"),e(577,"Font Awesome"),t(),e(578,", da seguinte forma:"),t(),n(579,"pre")(580,"code"),e(581,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(582,"p"),e(583,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(584,"code"),e(585,"TemplateRef"),t(),e(586,", conforme exemplo abaixo:"),t(),n(587,"pre")(588,"code"),e(589,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(590,"blockquote")(591,"p"),e(592,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(593,"code"),e(594,"font-size: inherit"),t(),e(595," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(596,"tr",15)(597,"td",16)(598,"div",17)(599,"span",18),e(600," (p-keydown)"),a(601,"br"),t()()(),n(602,"td",19)(603,"code",20),e(604,"EventEmitter"),t()(),n(605,"td",21),e(606,"-"),t(),n(607,"td",22)(608,"em")(609,"strong"),e(610,"(opcional)"),t()(),n(611,"p"),e(612,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(613,"code"),e(614,"KeyboardEvent"),t(),e(615," com informa\xE7\xF5es sobre a tecla."),t()()(),n(616,"tr",15)(617,"td",16)(618,"div",23)(619,"span",24),e(620," p-label"),a(621,"br"),t()()(),n(622,"td",19)(623,"code",25),e(624,"string"),t()(),n(625,"td",21),e(626,"-"),t(),n(627,"td",22)(628,"em")(629,"strong"),e(630,"(opcional)"),t()(),n(631,"p"),e(632,"R\xF3tulo do campo."),t()()(),n(633,"tr",15)(634,"td",16)(635,"div",23)(636,"span",24),e(637,"p-mask"),a(638,"br"),t()()(),n(639,"td",19)(640,"code",25),e(641,"string"),t()(),n(642,"td",21),e(643,"-"),t(),n(644,"td",22)(645,"em")(646,"strong"),e(647,"(opcional)"),t()(),n(648,"p"),e(649,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(650,"tr",15)(651,"td",16)(652,"div",23)(653,"span",24),e(654,"p-mask-format-model"),a(655,"br"),t()()(),n(656,"td",19)(657,"code",26),e(658,"boolean"),t()(),n(659,"td",21)(660,"p")(661,"code"),e(662,"false"),t()()(),n(663,"td",22)(664,"em")(665,"strong"),e(666,"(opcional)"),t()(),n(667,"p"),e(668,"Indica se o "),n(669,"code"),e(670,"model"),t(),e(671," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(672,"tr",15)(673,"td",16)(674,"div",23)(675,"span",24),e(676," p-mask-no-length-validation"),a(677,"br"),t()()(),n(678,"td",19)(679,"code",26),e(680,"boolean"),t()(),n(681,"td",21)(682,"p")(683,"code"),e(684,"false"),t()()(),n(685,"td",22)(686,"p"),e(687,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(688,"code"),e(689,"minLength"),t(),e(690,") e m\xE1ximo ("),n(691,"code"),e(692,"maxLength"),t(),e(693,") do campo."),t(),n(694,"ul")(695,"li"),e(696,"Quando "),n(697,"code"),e(698,"true"),t(),e(699,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(700,"li"),e(701,"Quando "),n(702,"code"),e(703,"false"),t(),e(704,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(705,"blockquote")(706,"p"),e(707,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(708,"code"),e(709,"p-mask-format-model"),t(),e(710,"."),t()(),n(711,"p"),e(712,"Exemplo:"),t(),n(713,"pre")(714,"code"),e(715,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(716,"ul")(717,"li"),e(718,"Entrada: "),n(719,"code"),e(720,"123-456"),t(),e(721," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(722,"code"),e(723,"-"),t(),e(724,"."),t()()()(),n(725,"tr",15)(726,"td",16)(727,"div",23)(728,"span",24),e(729,"p-max"),a(730,"br"),t()()(),n(731,"td",19)(732,"code",30),e(733,"number"),t()(),n(734,"td",21),e(735,"-"),t(),n(736,"td",22)(737,"em")(738,"strong"),e(739,"(opcional)"),t()(),n(740,"p"),e(741,"Valor m\xE1ximo."),t(),n(742,"blockquote")(743,"p"),e(744,"Quando o valor m\xE1ximo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),n(745,"code"),e(746,"p-step"),t(),e(747," tamb\xE9m passando a ela um valor decimal."),t()()()(),n(748,"tr",15)(749,"td",16)(750,"div",23)(751,"span",24),e(752," p-maxlength"),a(753,"br"),t()()(),n(754,"td",19)(755,"code",30),e(756,"number"),t()(),n(757,"td",21),e(758,"-"),t(),n(759,"td",22)(760,"em")(761,"strong"),e(762,"(opcional)"),t()(),n(763,"p"),e(764,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(765,"tr",15)(766,"td",16)(767,"div",23)(768,"span",24),e(769,"p-min"),a(770,"br"),t()()(),n(771,"td",19)(772,"code",30),e(773,"number"),t()(),n(774,"td",21),e(775,"-"),t(),n(776,"td",22)(777,"em")(778,"strong"),e(779,"(opcional)"),t()(),n(780,"p"),e(781,"Valor m\xEDnimo."),t(),n(782,"blockquote")(783,"p"),e(784,"Quando o valor m\xEDnimo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),n(785,"code"),e(786,"p-step"),t(),e(787," tamb\xE9m passando a ela um valor decimal."),t()()()(),n(788,"tr",15)(789,"td",16)(790,"div",23)(791,"span",24),e(792," p-minlength"),a(793,"br"),t()()(),n(794,"td",19)(795,"code",30),e(796,"number"),t()(),n(797,"td",21),e(798,"-"),t(),n(799,"td",22)(800,"em")(801,"strong"),e(802,"(opcional)"),t()(),n(803,"p"),e(804,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(805,"tr",15)(806,"td",16)(807,"div",23)(808,"span",24),e(809," name"),a(810,"br"),t()()(),n(811,"td",19)(812,"code",25),e(813,"string"),t()(),n(814,"td",21),e(815,"-"),t(),n(816,"td",22)(817,"p"),e(818,"Nome e identificador do campo."),t()()(),n(819,"tr",15)(820,"td",16)(821,"div",23)(822,"span",24),e(823," p-no-autocomplete"),a(824,"br"),t()()(),n(825,"td",19)(826,"code",26),e(827,"boolean"),t()(),n(828,"td",21)(829,"p")(830,"code"),e(831,"false"),t()()(),n(832,"td",22)(833,"em")(834,"strong"),e(835,"(opcional)"),t()(),n(836,"p"),e(837,"Define a propriedade nativa "),n(838,"code"),e(839,"autocomplete"),t(),e(840," do campo como "),n(841,"code"),e(842,"off"),t(),e(843,"."),t(),n(844,"blockquote")(845,"p"),e(846,"No componente "),n(847,"code"),e(848,"po-password"),t(),e(849," ser\xE1 definido como "),n(850,"code"),e(851,"new-password"),t(),e(852,"."),t()(),n(853,"p"),e(854,"Nos componentes "),n(855,"code"),e(856,"po-password"),t(),e(857," e "),n(858,"code"),e(859,"po-login"),t(),e(860," o valor padr\xE3o ser\xE1 "),n(861,"code"),e(862,"true"),t(),e(863,"."),t()()(),n(864,"tr",15)(865,"td",16)(866,"div",23)(867,"span",24),e(868," p-optional"),a(869,"br"),t()()(),n(870,"td",19)(871,"code",26),e(872,"boolean"),t()(),n(873,"td",21)(874,"p")(875,"code"),e(876,"false"),t()()(),n(877,"td",22)(878,"em")(879,"strong"),e(880,"(opcional)"),t()(),n(881,"p"),e(882,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(883,"blockquote")(884,"p"),e(885,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(886,"ul")(887,"li"),e(888,"O campo conter "),n(889,"code"),e(890,"p-required"),t(),e(891,";"),t(),n(892,"li"),e(893,"N\xE3o possuir "),n(894,"code"),e(895,"p-help"),t(),e(896," e/ou "),n(897,"code"),e(898,"p-label"),t(),e(899,"."),t()()()(),n(900,"tr",15)(901,"td",16)(902,"div",23)(903,"span",24),e(904,"p-pattern"),a(905,"br"),t()()(),n(906,"td",19)(907,"code",25),e(908,"string"),t()(),n(909,"td",21),e(910,"-"),t(),n(911,"td",22)(912,"em")(913,"strong"),e(914,"(opcional)"),t()(),n(915,"p"),e(916,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(917,"code"),e(918,"(p-mask)"),t(),e(919,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(920,"tr",15)(921,"td",16)(922,"div",23)(923,"span",24),e(924," p-placeholder"),a(925,"br"),t()()(),n(926,"td",19)(927,"code",25),e(928,"string"),t()(),n(929,"td",21)(930,"p"),e(931,"''"),t()(),n(932,"td",22)(933,"em")(934,"strong"),e(935,"(opcional)"),t()(),n(936,"p"),e(937,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(938,"tr",15)(939,"td",16)(940,"div",23)(941,"span",24),e(942,"p-readonly"),a(943,"br"),t()()(),n(944,"td",19)(945,"code",26),e(946,"boolean"),t()(),n(947,"td",21),e(948,"-"),t(),n(949,"td",22)(950,"em")(951,"strong"),e(952,"(opcional)"),t()(),n(953,"p"),e(954,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(955,"tr",15)(956,"td",16)(957,"div",23)(958,"span",24),e(959,"p-required"),a(960,"br"),t()()(),n(961,"td",19)(962,"code",26),e(963,"boolean"),t()(),n(964,"td",21)(965,"p")(966,"code"),e(967,"false"),t()()(),n(968,"td",22)(969,"em")(970,"strong"),e(971,"(opcional)"),t()(),n(972,"p"),e(973,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(974,"blockquote")(975,"p"),e(976,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(977,"code"),e(978,"(p-disabled)"),t(),e(979,"."),t()()()(),n(980,"tr",15)(981,"td",16)(982,"div",23)(983,"span",24),e(984," p-required-field-error-message"),a(985,"br"),t()()(),n(986,"td",19)(987,"code",26),e(988,"boolean"),t()(),n(989,"td",21)(990,"p")(991,"code"),e(992,"false"),t()()(),n(993,"td",22)(994,"em")(995,"strong"),e(996,"(opcional)"),t()(),n(997,"p"),e(998,"Exibe a mensagem setada na propriedade "),n(999,"code"),e(1e3,"p-error-pattern"),t(),e(1001," se o campo estiver vazio e for requerido."),t(),n(1002,"blockquote")(1003,"p"),e(1004,"Necess\xE1rio que a propriedade "),n(1005,"code"),e(1006,"p-required"),t(),e(1007," esteja habilitada."),t()()()(),n(1008,"tr",15)(1009,"td",16)(1010,"div",23)(1011,"span",24),e(1012," p-show-required"),a(1013,"br"),t()()(),n(1014,"td",19)(1015,"code",26),e(1016,"boolean"),t()(),n(1017,"td",21),e(1018,"-"),t(),n(1019,"td",22)(1020,"p"),e(1021,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1022,"blockquote")(1023,"p"),e(1024,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1025,"ul")(1026,"li"),e(1027,"N\xE3o possuir "),n(1028,"code"),e(1029,"p-help"),t(),e(1030," e/ou "),n(1031,"code"),e(1032,"p-label"),t(),e(1033,"."),t()()()(),n(1034,"tr",15)(1035,"td",16)(1036,"div",23)(1037,"span",24),e(1038," p-size"),a(1039,"br"),t()()(),n(1040,"td",19)(1041,"code",25),e(1042,"string"),t()(),n(1043,"td",21)(1044,"p")(1045,"code"),e(1046,"medium"),t()()(),n(1047,"td",22)(1048,"em")(1049,"strong"),e(1050,"(opcional)"),t()(),n(1051,"p"),e(1052,"Define o tamanho do componente:"),t(),n(1053,"ul")(1054,"li")(1055,"code"),e(1056,"small"),t(),e(1057,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1058,"li")(1059,"code"),e(1060,"medium"),t(),e(1061,": altura do input como 44px."),t()(),n(1062,"blockquote")(1063,"p"),e(1064,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1065,"code"),e(1066,"medium"),t(),e(1067,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1068,"a",31),e(1069,"po-theme"),t(),e(1070,"."),t()()()(),n(1071,"tr",15)(1072,"td",16)(1073,"div",23)(1074,"span",24),e(1075," p-step"),a(1076,"br"),t()()(),n(1077,"td",19)(1078,"code",25),e(1079,"string"),t()(),n(1080,"td",21)(1081,"p"),e(1082,"1"),t()(),n(1083,"td",22)(1084,"em")(1085,"strong"),e(1086,"(opcional)"),t()(),n(1087,"p"),e(1088,"Intervalo."),t()()(),n(1089,"tr",15)(1090,"td",16)(1091,"div",23)(1092,"span",24),e(1093," p-upper-case"),a(1094,"br"),t()()(),n(1095,"td",19)(1096,"code",26),e(1097,"boolean"),t()(),n(1098,"td",21),e(1099,"-"),t(),n(1100,"td",22)(1101,"p"),e(1102,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1103,"h3",11),e(1104,"M\xE9todos"),t(),n(1105,"table",32)(1106,"tr",15)(1107,"th",33)(1108,"div",23)(1109,"h4")(1110,"span",24),e(1111," showAdditionalHelp "),t()()()()(),n(1112,"tr",22)(1113,"td",22)(1114,"p"),e(1115,"M\xE9todo que exibe "),n(1116,"code"),e(1117,"p-additionalHelpTooltip"),t(),e(1118," ou executa a a\xE7\xE3o definida em "),n(1119,"code"),e(1120,"p-additionalHelp"),t(),e(1121,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1122,"code"),e(1123,"p-keydown"),t(),e(1124,"."),t(),n(1125,"pre")(1126,"code"),e(1127,`<po-nome-component
 #component
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1128,"pre")(1129,"code"),e(1130,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(1131,"br"),n(1132,"table",32)(1133,"tr",15)(1134,"th",33)(1135,"div",23)(1136,"h4")(1137,"span",24),e(1138," focus "),t()()()()(),n(1139,"tr",22)(1140,"td",22)(1141,"p"),e(1142,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1143,"p"),e(1144,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1145,"pre")(1146,"code"),e(1147,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),a(1148,"br"),n(1149,"h3"),e(1150,"Interfaces"),t(),n(1151,"h4",34)(1152,"code",5),e(1153,"ErrorAsyncProperties"),t()(),n(1154,"div",2)(1155,"p"),e(1156,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1157,"h4",11),e(1158,"Propriedades"),t(),n(1159,"table",12)(1160,"tr",13)(1161,"th",14),e(1162,"Nome"),t(),n(1163,"th",14),e(1164,"Tipo"),t(),n(1165,"th",14),e(1166,"Descri\xE7\xE3o"),t()(),n(1167,"tr",15)(1168,"td",16)(1169,"div",23)(1170,"span",24),e(1171," errorAsync"),a(1172,"br"),t()()(),n(1173,"td",19)(1174,"code",35),e(1175,"(value) => Observable<boolean>"),t()(),n(1176,"td",22)(1177,"p"),e(1178,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1179,"code"),e(1180,"change"),t(),e(1181," ou "),n(1182,"code"),e(1183,"change-model"),t(),e(1184,", dependendo do valor da propriedade "),n(1185,"code"),e(1186,"triggerMode"),t(),e(1187,"."),t()()(),n(1188,"tr",15)(1189,"td",16)(1190,"div",23)(1191,"span",24),e(1192," triggerMode"),a(1193,"br"),t()()(),n(1194,"td",19)(1195,"code",36),e(1196,"'change' "),t(),n(1197,"code",37),e(1198," 'changeModel'"),t()(),n(1199,"td",22)(1200,"em")(1201,"strong"),e(1202,"(opcional)"),t()(),n(1203,"p"),e(1204,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1205,"code"),e(1206,"change"),t(),e(1207," ou "),n(1208,"code"),e(1209,"change-model"),t(),e(1210,"."),t()()()()())},dependencies:[y],encapsulation:2})}return l})();var le=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(A(j),A(G))};static \u0275cmp=h({type:l,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Number",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-number-doc"),t(),n(4,"po-tab",3),x("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-number-basic-view")(6,"sample-po-number-labs-view")(7,"sample-po-number-calculate-view"),t()()()),r&2&&(S("p-actions",i.actions),m(2),S("p-active",i.activeTab==="doc"),m(2),S("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[J,v,C,ee,ne,oe,ae],encapsulation:2})}return l})();var xe=[{path:"",component:le}],re=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=k({type:l});static \u0275inj=N({imports:[H.forChild(xe),H]})}return l})();var Re=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=k({type:l});static \u0275inj=N({imports:[Y,re]})}return l})();export{Re as DocPoNumberModule};
