import{o as C,p as ie}from"./chunk-MMZVQUBQ.js";import{Ab as v,Ea as M,F as H,Ga as $,La as L,Ra as ee,Wa as te,ha as Y,ja as Z,nb as ne,zb as y}from"./chunk-522XRIZO.js";import{Ac as R,Ba as w,Bc as q,Ec as U,Fa as n,Fc as Q,Ga as t,Ha as o,Jc as K,La as O,M as B,Ma as g,Oc as J,Qc as X,Sc as I,T as s,U as c,Xa as G,Ya as e,_a as D,ab as h,bb as b,cb as S,fb as P,ha as m,ia as V,oa as x,pa as z,uc as F,vb as _,xc as W,ya as E,yc as T,zc as N}from"./chunk-WFKG4FNY.js";var oe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","decimal","p-label","PO Decimal"]],template:function(r,i){r&1&&o(0,"po-decimal",0)},dependencies:[M],encapsulation:2})}return l})();var be=l=>({"docs-sample-code-tabs":l}),ae=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal Basic"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-basic/sample-po-decimal-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-basic/sample-po-decimal-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-basic"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",P(4,be,i.hideSampleCodeTabs)))},dependencies:[_,C,y,v,oe],encapsulation:2})}return l})();var re=(()=>{class l{additionalHelpTooltip;decimal;decimalsLength;event;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:"pt",label:"Portuguese"},{value:"en",label:"English"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"}];iconOptions=[{value:"an an-shopping-cart-simple",label:"an an-shopping-cart-simple"},{value:"an an-currency-dollar-simple",label:"an an-currency-dollar-simple"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.additionalHelpTooltip="",this.decimal=void 0,this.decimalsLength=void 0,this.event="",this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder="",this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size="medium",this.properties=[]}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-labs"]],standalone:!1,decls:23,vars:43,consts:[["f","ngForm"],["name","decimal",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-decimals-length","p-disabled","p-help","p-icon","p-label","p-locale","p-error-pattern","p-max","p-min","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-thousand-maxlength","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","locale","p-clean","","p-label","Locale",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","decimalsLength","p-clean","","p-help","M\xE1ximo 15","p-label","Decimals max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","thousandMaxlength","p-clean","","p-help","M\xE1ximo 13","p-label","Thousand max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let d=O();n(0,"po-decimal",1),S("ngModelChange",function(a){return s(d),b(i.decimal,a)||(i.decimal=a),c(a)}),g("p-blur",function(){return s(d),c(i.changeEvent("p-blur"))})("p-change",function(){return s(d),c(i.changeEvent("p-change"))})("p-change-model",function(){return s(d),c(i.changeEvent("p-change-model"))})("p-keydown",function(){return s(d),c(i.changeEvent("p-keydown"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),n(6,"form",null,0)(8,"po-input",5),S("ngModelChange",function(a){return s(d),b(i.label,a)||(i.label=a),c(a)}),t(),n(9,"po-input",6),S("ngModelChange",function(a){return s(d),b(i.help,a)||(i.help=a),c(a)}),t(),n(10,"po-input",7),S("ngModelChange",function(a){return s(d),b(i.additionalHelpTooltip,a)||(i.additionalHelpTooltip=a),c(a)}),t(),n(11,"po-input",8),S("ngModelChange",function(a){return s(d),b(i.placeholder,a)||(i.placeholder=a),c(a)}),t(),n(12,"po-input",9),S("ngModelChange",function(a){return s(d),b(i.errorPattern,a)||(i.errorPattern=a),c(a)}),t(),n(13,"po-select",10),S("ngModelChange",function(a){return s(d),b(i.icon,a)||(i.icon=a),c(a)}),t(),n(14,"po-number",11),S("ngModelChange",function(a){return s(d),b(i.min,a)||(i.min=a),c(a)}),t(),n(15,"po-number",12),S("ngModelChange",function(a){return s(d),b(i.max,a)||(i.max=a),c(a)}),t(),n(16,"po-select",13),S("ngModelChange",function(a){return s(d),b(i.locale,a)||(i.locale=a),c(a)}),t(),n(17,"po-number",14),S("ngModelChange",function(a){return s(d),b(i.decimalsLength,a)||(i.decimalsLength=a),c(a)}),t(),n(18,"po-number",15),S("ngModelChange",function(a){return s(d),b(i.thousandMaxlength,a)||(i.thousandMaxlength=a),c(a)}),t(),n(19,"po-checkbox-group",16),S("ngModelChange",function(a){return s(d),b(i.properties,a)||(i.properties=a),c(a)}),t(),n(20,"po-radio-group",17),S("ngModelChange",function(a){return s(d),b(i.size,a)||(i.size=a),c(a)}),t(),n(21,"div",2)(22,"po-button",18),g("p-click",function(){return s(d),c(i.restore())}),t()()()}r&2&&(h("ngModel",i.decimal),E("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-decimals-length",i.decimalsLength)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-locale",i.locale)("p-error-pattern",i.errorPattern)("p-max",i.max)("p-min",i.min)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-thousand-maxlength",i.thousandMaxlength)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),m(3),E("p-value",i.decimal),m(),E("p-value",i.event),m(4),h("ngModel",i.label),m(),h("ngModel",i.help),m(),h("ngModel",i.additionalHelpTooltip),m(),h("ngModel",i.placeholder),m(),h("ngModel",i.errorPattern),m(),h("ngModel",i.icon),E("p-options",i.iconOptions),m(),h("ngModel",i.min),m(),h("ngModel",i.max),m(),h("ngModel",i.locale),E("p-options",i.localeOptions),m(),h("ngModel",i.decimalsLength),E("p-max",i.maxDecimalsLength),m(),h("ngModel",i.thousandMaxlength),E("p-max",i.maxThousandMaxlength),m(),h("ngModel",i.properties),E("p-options",i.propertiesOptions),m(),h("ngModel",i.size),E("p-options",i.sizeOptions))},dependencies:[q,W,T,R,N,H,Y,Z,M,$,L,ee,te],encapsulation:2})}return l})();var fe=l=>({"docs-sample-code-tabs":l}),me=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal Labs"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-labs/sample-po-decimal-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-decimal
  class="po-md-12"
  name="decimal"
  [(ngModel)]="decimal"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-decimals-length]="decimalsLength"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-locale]="locale"
  [p-error-pattern]="errorPattern"
  [p-max]="max"
  [p-min]="min"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-thousand-maxlength]="thousandMaxlength"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-decimal>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="decimal"> </po-info>
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

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

  <po-select
    class="po-md-6 po-lg-3"
    name="locale"
    [(ngModel)]="locale"
    p-clean
    p-label="Locale"
    [p-options]="localeOptions"
  ></po-select>

  <po-number
    class="po-md-6 po-lg-3"
    name="decimalsLength"
    [(ngModel)]="decimalsLength"
    p-clean
    p-help="M\xE1ximo 15"
    p-label="Decimals max length"
    p-min="0"
    [p-max]="maxDecimalsLength"
  >
  </po-number>

  <po-number
    class="po-md-6 po-lg-3"
    name="thousandMaxlength"
    [(ngModel)]="thousandMaxlength"
    p-clean
    p-help="M\xE1ximo 13"
    p-label="Thousand max length"
    p-min="0"
    [p-max]="maxThousandMaxlength"
  >
  </po-number>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-labs/sample-po-decimal-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-decimal-labs',
  templateUrl: './sample-po-decimal-labs.component.html',
  standalone: false
})
export class SamplePoDecimalLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  decimal: number;
  decimalsLength: number;
  event: string;
  help: string;
  icon: string;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  thousandMaxlength: number;
  errorPattern: string;
  max: number;
  min: number;
  size: string;

  public readonly localeOptions: Array<PoSelectOption> = [
    { value: 'pt', label: 'Portuguese' },
    { value: 'en', label: 'English' },
    { value: 'ru', label: 'Russian' },
    { value: 'es', label: 'Spanish' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-shopping-cart-simple', label: 'an an-shopping-cart-simple' },
    { value: 'an an-currency-dollar-simple', label: 'an an-currency-dollar-simple' },
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

  get maxDecimalsLength() {
    return 16 - this.thousandMaxlength || 15;
  }

  get maxThousandMaxlength() {
    return 16 - this.decimalsLength || 13;
  }

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.decimal = undefined;
    this.decimalsLength = undefined;
    this.event = '';
    this.help = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = '';
    this.thousandMaxlength = undefined;
    this.errorPattern = undefined;
    this.max = undefined;
    this.min = undefined;
    this.size = 'medium';

    this.properties = [];
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-labs"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",P(4,fe,i.hideSampleCodeTabs)))},dependencies:[_,C,y,v,re],encapsulation:2})}return l})();var de=(()=>{class l{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let p=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/p;this.hourlyWage=r}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-hourly-wage"]],standalone:!1,decls:16,vars:6,consts:[["f","ngForm"],[1,"po-font-title"],[1,"po-row"],["name","weekHours","p-label","Week Hours","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","workingDaysPerWeek","p-label","Working days per week","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantityDaysPerMonth","p-label","Quantity days per month","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let d=O();n(0,"form",null,0)(2,"div",1),e(3,"Calculate hourly wage"),t(),o(4,"hr"),n(5,"div",2)(6,"po-number",3),S("ngModelChange",function(a){return s(d),b(i.weekHours,a)||(i.weekHours=a),c(a)}),t(),n(7,"po-number",4),S("ngModelChange",function(a){return s(d),b(i.workingDaysPerWeek,a)||(i.workingDaysPerWeek=a),c(a)}),t()(),n(8,"div",2)(9,"po-number",5),S("ngModelChange",function(a){return s(d),b(i.quantityDaysPerMonth,a)||(i.quantityDaysPerMonth=a),c(a)}),t(),n(10,"po-decimal",6),S("ngModelChange",function(a){return s(d),b(i.salary,a)||(i.salary=a),c(a)}),g("p-change",function(){return s(d),c(i.calculate())}),t()(),n(11,"div",2)(12,"po-decimal",7),S("ngModelChange",function(a){return s(d),b(i.hourlyWage,a)||(i.hourlyWage=a),c(a)}),t()(),n(13,"div",2)(14,"po-button",8),g("p-click",function(){s(d);let a=G(1);return c(a.reset())}),t(),n(15,"po-button",9),g("p-click",function(){return s(d),c(i.calculate())}),t()()()}r&2&&(m(6),h("ngModel",i.weekHours),m(),h("ngModel",i.workingDaysPerWeek),m(2),h("ngModel",i.quantityDaysPerMonth),m(),h("ngModel",i.salary),m(2),h("ngModel",i.hourlyWage),m(3),E("p-disabled",!i.hourlyWage))},dependencies:[q,W,T,R,N,H,M,L],encapsulation:2})}return l})();var Ce=l=>({"docs-sample-code-tabs":l}),pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-hourly-wage-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal - Hourly Wage"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html"),t(),n(13,"pre",7),e(14,`<form #f="ngForm">
  <div class="po-font-title">Calculate hourly wage</div>

  <hr />

  <div class="po-row">
    <po-number class="po-md-6" name="weekHours" [(ngModel)]="weekHours" p-label="Week Hours" p-required> </po-number>

    <po-number
      class="po-md-6"
      name="workingDaysPerWeek"
      [(ngModel)]="workingDaysPerWeek"
      p-label="Working days per week"
      p-required
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-number
      class="po-md-6"
      name="quantityDaysPerMonth"
      [(ngModel)]="quantityDaysPerMonth"
      p-label="Quantity days per month"
      p-required
    >
    </po-number>

    <po-decimal
      class="po-md-6"
      name="salary"
      [(ngModel)]="salary"
      p-decimals-length="2"
      p-icon="an an-currency-circle-dollar"
      p-label="Salary"
      p-required
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="hourlyWage"
      [(ngModel)]="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="an an-currency-dollar-simple"
      p-label="Hourly Wage"
      p-required
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="f.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="!hourlyWage"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-hourly-wage',
  templateUrl: './sample-po-decimal-hourly-wage.component.html',
  standalone: false
})
export class SamplePoDecimalHourlyWageComponent {
  hourlyWage: number;
  quantityDaysPerMonth: number;
  salary: number;
  weekHours: number;
  workingDaysPerWeek: number;

  calculate() {
    const hours = (this.weekHours / this.workingDaysPerWeek) * this.quantityDaysPerMonth;
    const salary = this.salary / hours;
    this.hourlyWage = salary;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-hourly-wage"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",P(4,Ce,i.hideSampleCodeTabs)))},dependencies:[_,C,y,v,de],encapsulation:2})}return l})();var se=(()=>{class l{formBuilder;formCalculateHourlyWage;constructor(p){this.formBuilder=p}ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,F.required],salary:[null,F.required],weekHours:[null,F.required],workingDaysPerWeek:[null,F.required]})}calculate(){let{weekHours:p,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:d}=this.formCalculateHourlyWage.value,u=p/r*i,a=d/u;this.formCalculateHourlyWage.patchValue({hourlyWage:a})}static \u0275fac=function(r){return new(r||l)(V(K))};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form"]],standalone:!1,decls:15,vars:2,consts:[[3,"formGroup"],[1,"po-font-title"],[1,"po-row"],["formControlName","weekHours","p-label","Week Hours",1,"po-md-6"],["formControlName","workingDaysPerWeek","p-label","Working days per week",1,"po-md-6"],["formControlName","quantityDaysPerMonth","p-label","Quantity days per month",1,"po-md-6"],["formControlName","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-thousand-maxlength","13",1,"po-md-6",3,"p-change"],["formControlName","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-thousand-maxlength","13",1,"po-md-6"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){r&1&&(n(0,"form",0)(1,"div",1),e(2,"Calculate hourly wage"),t(),o(3,"hr"),n(4,"div",2),o(5,"po-number",3)(6,"po-number",4),t(),n(7,"div",2),o(8,"po-number",5),n(9,"po-decimal",6),g("p-change",function(){return i.calculate()}),t()(),n(10,"div",2),o(11,"po-decimal",7),t(),n(12,"div",2)(13,"po-button",8),g("p-click",function(){return i.formCalculateHourlyWage.reset()}),t(),n(14,"po-button",9),g("p-click",function(){return i.calculate()}),t()()()),r&2&&(E("formGroup",i.formCalculateHourlyWage),m(14),E("p-disabled",i.formCalculateHourlyWage.invalid))},dependencies:[q,W,T,U,Q,H,M,L],encapsulation:2})}return l})();var Pe=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal - Hourly Wage Reactive Form"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="formCalculateHourlyWage">
  <div class="po-font-title">Calculate hourly wage</div>

  <hr />

  <div class="po-row">
    <po-number class="po-md-6" formControlName="weekHours" p-label="Week Hours"> </po-number>

    <po-number class="po-md-6" formControlName="workingDaysPerWeek" p-label="Working days per week"> </po-number>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" formControlName="quantityDaysPerMonth" p-label="Quantity days per month"> </po-number>

    <po-decimal
      class="po-md-6"
      formControlName="salary"
      p-decimals-length="2"
      p-icon="an an-currency-circle-dollar"
      p-label="Salary"
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      formControlName="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="an an-currency-dollar-simple"
      p-label="Hourly Wage"
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="formCalculateHourlyWage.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="formCalculateHourlyWage.invalid"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sample-po-decimal-hourly-wage-reactive-form',
  templateUrl: './sample-po-decimal-hourly-wage-reactive-form.component.html',
  standalone: false
})
export class SamplePoDecimalHourlyWageReactiveFormComponent implements OnInit {
  formCalculateHourlyWage: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.formCalculateHourlyWage = this.formBuilder.group({
      hourlyWage: [null],
      quantityDaysPerMonth: [null, Validators.required],
      salary: [null, Validators.required],
      weekHours: [null, Validators.required],
      workingDaysPerWeek: [null, Validators.required]
    });
  }

  calculate() {
    const { weekHours, workingDaysPerWeek, quantityDaysPerMonth, salary } = this.formCalculateHourlyWage.value;

    const hours = (weekHours / workingDaysPerWeek) * quantityDaysPerMonth;
    const hourlyWage = salary / hours;

    this.formCalculateHourlyWage.patchValue({ hourlyWage });
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-hourly-wage-reactive-form"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",P(4,Pe,i.hideSampleCodeTabs)))},dependencies:[_,C,y,v,se],encapsulation:2})}return l})();var ue=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-doc"]],standalone:!1,decls:1322,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","documentation/po-i18n"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoDecimalComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),o(210,"br"),e(211," - O "),n(212,"code"),e(213,"po-decimal"),t(),e(214," \xE9 um "),n(215,"em"),e(216,"input"),t(),e(217," espec\xEDfico para receber apenas n\xFAmeros decimais, por isso recebe as seguintes caracter\xEDsticas:"),t(),n(218,"ul")(219,"li"),e(220,"Aceita apenas n\xFAmeros;"),t(),n(221,"li"),e(222,"Utiliza ',' como separador de decimal;"),t(),n(223,"li"),e(224,"Utiliza '.' para separa\xE7\xE3o de milhar;"),t(),n(225,"li"),e(226,"\xC9 poss\xEDvel configurar a quantidade de casas decimais e a quantidade de digitos do campo."),t()(),n(227,"blockquote")(228,"p")(229,"strong"),e(230,"Importante:"),t(),e(231,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),n(232,"code"),e(233,"32 bits"),t(),e(234,`, e para que os valores comportem-se devidamente,
o `),n(235,"code"),e(236,"po-decimal"),t(),e(237,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),n(238,"code"),e(239,"p-decimals-length"),t(),e(240," e "),n(241,"code"),e(242,"p-thousand-maxlength"),t(),e(243,"."),t()()(),n(244,"div",8)(245,"h4",9),e(246,"Seletor"),t(),n(247,"pre",10),e(248,`<po-decimal
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-decimals-length="number"
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
    p-locale="string"
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
    p-thousand-maxlength="number"
    p-upper-case="boolean" >
</po-decimal>
`),t()(),n(249,"h4",11),e(250,"Propriedades"),t(),n(251,"table",12)(252,"tr",13)(253,"th",14),e(254,"Nome"),t(),n(255,"th",14),e(256,"Tipo"),t(),n(257,"th",14),e(258,"Padr\xE3o"),t(),n(259,"th",14),e(260,"Descri\xE7\xE3o"),t()(),n(261,"tr",15)(262,"td",16)(263,"div",17)(264,"span",18),e(265," (p-additional-help)"),o(266,"br"),t()()(),n(267,"td",19)(268,"code",20),e(269,"EventEmitter"),t()(),n(270,"td",21),e(271,"-"),t(),n(272,"td",22)(273,"em")(274,"strong"),e(275,"(opcional)"),t()(),n(276,"p"),e(277,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(278,"code"),e(279,"p-help"),t(),e(280,"."),t()()(),n(281,"tr",15)(282,"td",16)(283,"div",23)(284,"span",24),e(285," p-additional-help-tooltip"),o(286,"br"),t()()(),n(287,"td",19)(288,"code",25),e(289,"string"),t()(),n(290,"td",21),e(291,"-"),t(),n(292,"td",22)(293,"em")(294,"strong"),e(295,"(opcional)"),t()(),n(296,"p"),e(297,"Exibe um \xEDcone de ajuda adicional ao "),n(298,"code"),e(299,"p-help"),t(),e(300,`, com o texto desta propriedade no tooltip.
Se o evento `),n(301,"code"),e(302,"p-additional-help"),t(),e(303,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(304,"strong"),e(305,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(306,"blockquote")(307,"p"),e(308,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),n(309,"tr",15)(310,"td",16)(311,"div",23)(312,"span",24),e(313," p-append-in-body"),o(314,"br"),t()()(),n(315,"td",19)(316,"code",26),e(317,"boolean"),t()(),n(318,"td",21)(319,"p")(320,"code"),e(321,"false"),t()()(),n(322,"td",22)(323,"em")(324,"strong"),e(325,"(opcional)"),t()(),n(326,"p"),e(327,"Define que o tooltip ("),n(328,"code"),e(329,"p-additional-help-tooltip"),t(),e(330," e/ou "),n(331,"code"),e(332,"p-error-limit"),t(),e(333,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(334,"blockquote")(335,"p"),e(336,"Quando utilizado com "),n(337,"code"),e(338,"p-additional-help-tooltip"),t(),e(339,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(340,"tr",15)(341,"td",16)(342,"div",23)(343,"span",24),e(344," p-auto-focus"),o(345,"br"),t()()(),n(346,"td",19)(347,"code",26),e(348,"boolean"),t()(),n(349,"td",21)(350,"p")(351,"code"),e(352,"false"),t()()(),n(353,"td",22)(354,"em")(355,"strong"),e(356,"(opcional)"),t()(),n(357,"p"),e(358,"Aplica foco no elemento ao ser iniciado."),t(),n(359,"blockquote")(360,"p"),e(361,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(362,"tr",15)(363,"td",16)(364,"div",17)(365,"span",18),e(366," (p-blur)"),o(367,"br"),t()()(),n(368,"td",19)(369,"code",20),e(370,"EventEmitter"),t()(),n(371,"td",21),e(372,"-"),t(),n(373,"td",22)(374,"em")(375,"strong"),e(376,"(opcional)"),t()(),n(377,"p"),e(378,"Evento disparado ao sair do campo."),t()()(),n(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),e(383," (p-change)"),o(384,"br"),t()()(),n(385,"td",19)(386,"code",20),e(387,"EventEmitter"),t()(),n(388,"td",21),e(389,"-"),t(),n(390,"td",22)(391,"em")(392,"strong"),e(393,"(opcional)"),t()(),n(394,"p"),e(395,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),e(400," (p-change-model)"),o(401,"br"),t()()(),n(402,"td",19)(403,"code",20),e(404,"EventEmitter"),t()(),n(405,"td",21),e(406,"-"),t(),n(407,"td",22)(408,"em")(409,"strong"),e(410,"(opcional)"),t()(),n(411,"p"),e(412,"Evento disparado ao alterar valor do model."),t()()(),n(413,"tr",15)(414,"td",16)(415,"div",23)(416,"span",24),e(417,"p-clean"),o(418,"br"),t()()(),n(419,"td",19)(420,"code",26),e(421,"boolean"),t()(),n(422,"td",21),e(423,"-"),t(),n(424,"td",22)(425,"em")(426,"strong"),e(427,"(opcional)"),t()(),n(428,"p"),e(429,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(430,"tr",15)(431,"td",16)(432,"div",23)(433,"span",24),e(434," p-decimals-length"),o(435,"br"),t()()(),n(436,"td",19)(437,"code",27),e(438,"number"),t()(),n(439,"td",21)(440,"p")(441,"code"),e(442,"2"),t()()(),n(443,"td",22)(444,"em")(445,"strong"),e(446,"(opcional)"),t()(),n(447,"p"),e(448,"Quantidade m\xE1xima de casas decimais."),t(),n(449,"blockquote")(450,"p")(451,"strong"),e(452,"Importante:"),t()()(),n(453,"ul")(454,"li"),e(455,"O valor m\xE1ximo permitido \xE9 15;"),t(),n(456,"li"),e(457,"A soma total de "),n(458,"code"),e(459,"p-decimals-length"),t(),e(460," com "),n(461,"code"),e(462,"p-thousand-maxlength"),t(),e(463," limita-se \xE0 16;"),t(),n(464,"li"),e(465,"Esta propriedade sobrep\xF5e apenas o valor "),n(466,"strong"),e(467,"padr\xE3o"),t(),e(468," de "),n(469,"code"),e(470,"p-thousand-maxlength"),t(),e(471,";"),t(),n(472,"li"),e(473,"Caso "),n(474,"code"),e(475,"p-thousand-maxlength"),t(),e(476," tenha um valor definido, esta propriedade poder\xE1 receber apenas o valor restante do limite total (16)."),t()()()(),n(477,"tr",15)(478,"td",16)(479,"div",23)(480,"span",24),e(481,"p-disabled"),o(482,"br"),t()()(),n(483,"td",19)(484,"code",26),e(485,"boolean"),t()(),n(486,"td",21)(487,"p")(488,"code"),e(489,"false"),t()()(),n(490,"td",22)(491,"em")(492,"strong"),e(493,"(opcional)"),t()(),n(494,"p"),e(495,"Se verdadeiro, desabilita o campo."),t()()(),n(496,"tr",15)(497,"td",16)(498,"div",23)(499,"span",24),e(500," p-emit-all-changes"),o(501,"br"),t()()(),n(502,"td",19)(503,"code",26),e(504,"boolean"),t()(),n(505,"td",21)(506,"p")(507,"code"),e(508,"false"),t()()(),n(509,"td",22)(510,"em")(511,"strong"),e(512,"(opcional)"),t()(),n(513,"p"),e(514,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(515,"tr",15)(516,"td",16)(517,"div",17)(518,"span",18),e(519," (p-enter)"),o(520,"br"),t()()(),n(521,"td",19)(522,"code",20),e(523,"EventEmitter"),t()(),n(524,"td",21),e(525,"-"),t(),n(526,"td",22)(527,"em")(528,"strong"),e(529,"(opcional)"),t()(),n(530,"p"),e(531,"Evento disparado ao entrar do campo."),t()()(),n(532,"tr",15)(533,"td",16)(534,"div",23)(535,"span",24),e(536," p-error-async-properties"),o(537,"br"),t()()(),n(538,"td",19)(539,"code",28),e(540,"ErrorAsyncProperties"),t()(),n(541,"td",21),e(542,"-"),t(),n(543,"td",22)(544,"em")(545,"strong"),e(546,"(opcional)"),t()(),n(547,"p"),e(548,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(549,"code"),e(550,"Reactive Forms"),t(),e(551,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(552,"code"),e(553,"asyncValidators"),t(),e(554,"."),t()()(),n(555,"tr",15)(556,"td",16)(557,"div",23)(558,"span",24),e(559," p-error-limit"),o(560,"br"),t()()(),n(561,"td",19)(562,"code",26),e(563,"boolean"),t()(),n(564,"td",21)(565,"p")(566,"code"),e(567,"false"),t()()(),n(568,"td",22)(569,"em")(570,"strong"),e(571,"(opcional)"),t()(),n(572,"p"),e(573,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(574,"blockquote")(575,"p"),e(576,"Caso essa propriedade seja definida como "),n(577,"code"),e(578,"true"),t(),e(579,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(580,"tr",15)(581,"td",16)(582,"div",23)(583,"span",24),e(584," p-error-pattern"),o(585,"br"),t()()(),n(586,"td",19)(587,"code",25),e(588,"string"),t()(),n(589,"td",21),e(590,"-"),t(),n(591,"td",22)(592,"em")(593,"strong"),e(594,"(opcional)"),t()(),n(595,"p"),e(596,"Mensagem que ser\xE1 apresentada quando o "),n(597,"code"),e(598,"pattern"),t(),e(599," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(600,"blockquote")(601,"p"),e(602,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(603,"code"),e(604,"p-required-field-error-message"),t(),e(605," em conjunto."),t()()()(),n(606,"tr",15)(607,"td",16)(608,"div",23)(609,"span",24),e(610," p-help"),o(611,"br"),t()()(),n(612,"td",19)(613,"code",25),e(614,"string"),t()(),n(615,"td",21),e(616,"-"),t(),n(617,"td",22)(618,"em")(619,"strong"),e(620,"(opcional)"),t()(),n(621,"p"),e(622,"Texto de apoio do campo."),t()()(),n(623,"tr",15)(624,"td",16)(625,"div",23)(626,"span",24),e(627," p-icon"),o(628,"br"),t()()(),n(629,"td",19)(630,"code",25),e(631,"string "),t(),n(632,"code",29),e(633," TemplateRef<void>"),t()(),n(634,"td",21),e(635,"-"),t(),n(636,"td",22)(637,"em")(638,"strong"),e(639,"(opcional)"),t()(),n(640,"p"),e(641,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(642,"p"),e(643,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(644,"a",30),e(645,"Biblioteca de \xEDcones"),t(),e(646,". conforme exemplo abaixo:"),t(),n(647,"pre")(648,"code"),e(649,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(650,"p"),e(651,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(652,"em"),e(653,"Font Awesome"),t(),e(654,", da seguinte forma:"),t(),n(655,"pre")(656,"code"),e(657,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(658,"p"),e(659,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(660,"code"),e(661,"TemplateRef"),t(),e(662,", conforme exemplo abaixo:"),t(),n(663,"pre")(664,"code"),e(665,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(666,"blockquote")(667,"p"),e(668,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(669,"code"),e(670,"font-size: inherit"),t(),e(671," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(672,"tr",15)(673,"td",16)(674,"div",17)(675,"span",18),e(676," (p-keydown)"),o(677,"br"),t()()(),n(678,"td",19)(679,"code",20),e(680,"EventEmitter"),t()(),n(681,"td",21),e(682,"-"),t(),n(683,"td",22)(684,"em")(685,"strong"),e(686,"(opcional)"),t()(),n(687,"p"),e(688,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(689,"code"),e(690,"KeyboardEvent"),t(),e(691," com informa\xE7\xF5es sobre a tecla."),t()()(),n(692,"tr",15)(693,"td",16)(694,"div",23)(695,"span",24),e(696," p-label"),o(697,"br"),t()()(),n(698,"td",19)(699,"code",25),e(700,"string"),t()(),n(701,"td",21),e(702,"-"),t(),n(703,"td",22)(704,"em")(705,"strong"),e(706,"(opcional)"),t()(),n(707,"p"),e(708,"R\xF3tulo do campo."),t()()(),n(709,"tr",15)(710,"td",16)(711,"div",23)(712,"span",24),e(713," p-locale"),o(714,"br"),t()()(),n(715,"td",19)(716,"code",25),e(717,"string"),t()(),n(718,"td",21),e(719,"-"),t(),n(720,"td",22)(721,"em")(722,"strong"),e(723,"(opcional)"),t()(),n(724,"p"),e(725,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),n(726,"a",31)(727,"code"),e(728,"I18n"),t()()(),n(729,"blockquote")(730,"p"),e(731,"Para ver quais linguagens suportadas acesse "),n(732,"a",31)(733,"code"),e(734,"I18n"),t()()()()()(),n(735,"tr",15)(736,"td",16)(737,"div",23)(738,"span",24),e(739,"p-mask"),o(740,"br"),t()()(),n(741,"td",19)(742,"code",25),e(743,"string"),t()(),n(744,"td",21),e(745,"-"),t(),n(746,"td",22)(747,"em")(748,"strong"),e(749,"(opcional)"),t()(),n(750,"p"),e(751,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(752,"tr",15)(753,"td",16)(754,"div",23)(755,"span",24),e(756,"p-mask-format-model"),o(757,"br"),t()()(),n(758,"td",19)(759,"code",26),e(760,"boolean"),t()(),n(761,"td",21)(762,"p")(763,"code"),e(764,"false"),t()()(),n(765,"td",22)(766,"em")(767,"strong"),e(768,"(opcional)"),t()(),n(769,"p"),e(770,"Indica se o "),n(771,"code"),e(772,"model"),t(),e(773," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(774,"tr",15)(775,"td",16)(776,"div",23)(777,"span",24),e(778," p-mask-no-length-validation"),o(779,"br"),t()()(),n(780,"td",19)(781,"code",26),e(782,"boolean"),t()(),n(783,"td",21)(784,"p")(785,"code"),e(786,"false"),t()()(),n(787,"td",22)(788,"p"),e(789,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(790,"code"),e(791,"minLength"),t(),e(792,") e m\xE1ximo ("),n(793,"code"),e(794,"maxLength"),t(),e(795,") do campo."),t(),n(796,"ul")(797,"li"),e(798,"Quando "),n(799,"code"),e(800,"true"),t(),e(801,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(802,"li"),e(803,"Quando "),n(804,"code"),e(805,"false"),t(),e(806,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(807,"blockquote")(808,"p"),e(809,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(810,"code"),e(811,"p-mask-format-model"),t(),e(812,"."),t()(),n(813,"p"),e(814,"Exemplo:"),t(),n(815,"pre")(816,"code"),e(817,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(818,"ul")(819,"li"),e(820,"Entrada: "),n(821,"code"),e(822,"123-456"),t(),e(823," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(824,"code"),e(825,"-"),t(),e(826,"."),t()()()(),n(827,"tr",15)(828,"td",16)(829,"div",23)(830,"span",24),e(831," p-max"),o(832,"br"),t()()(),n(833,"td",19)(834,"code",27),e(835,"number"),t()(),n(836,"td",21),e(837,"-"),t(),n(838,"td",22)(839,"em")(840,"strong"),e(841,"(opcional)"),t()(),n(842,"p"),e(843,"Valor m\xE1ximo."),t()()(),n(844,"tr",15)(845,"td",16)(846,"div",23)(847,"span",24),e(848," p-maxlength"),o(849,"br"),t()()(),n(850,"td",19)(851,"code",27),e(852,"number"),t()(),n(853,"td",21),e(854,"-"),t(),n(855,"td",22)(856,"em")(857,"strong"),e(858,"(opcional)"),t()(),n(859,"p"),e(860,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(861,"tr",15)(862,"td",16)(863,"div",23)(864,"span",24),e(865," p-min"),o(866,"br"),t()()(),n(867,"td",19)(868,"code",27),e(869,"number"),t()(),n(870,"td",21),e(871,"-"),t(),n(872,"td",22)(873,"em")(874,"strong"),e(875,"(opcional)"),t()(),n(876,"p"),e(877,"Valor m\xEDnimo."),t()()(),n(878,"tr",15)(879,"td",16)(880,"div",23)(881,"span",24),e(882," p-minlength"),o(883,"br"),t()()(),n(884,"td",19)(885,"code",27),e(886,"number"),t()(),n(887,"td",21),e(888,"-"),t(),n(889,"td",22)(890,"em")(891,"strong"),e(892,"(opcional)"),t()(),n(893,"p"),e(894,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(895,"tr",15)(896,"td",16)(897,"div",23)(898,"span",24),e(899," name"),o(900,"br"),t()()(),n(901,"td",19)(902,"code",25),e(903,"string"),t()(),n(904,"td",21),e(905,"-"),t(),n(906,"td",22)(907,"p"),e(908,"Nome e identificador do campo."),t()()(),n(909,"tr",15)(910,"td",16)(911,"div",23)(912,"span",24),e(913," p-no-autocomplete"),o(914,"br"),t()()(),n(915,"td",19)(916,"code",26),e(917,"boolean"),t()(),n(918,"td",21)(919,"p")(920,"code"),e(921,"false"),t()()(),n(922,"td",22)(923,"em")(924,"strong"),e(925,"(opcional)"),t()(),n(926,"p"),e(927,"Define a propriedade nativa "),n(928,"code"),e(929,"autocomplete"),t(),e(930," do campo como "),n(931,"code"),e(932,"off"),t(),e(933,"."),t(),n(934,"blockquote")(935,"p"),e(936,"No componente "),n(937,"code"),e(938,"po-password"),t(),e(939," ser\xE1 definido como "),n(940,"code"),e(941,"new-password"),t(),e(942,"."),t()(),n(943,"p"),e(944,"Nos componentes "),n(945,"code"),e(946,"po-password"),t(),e(947," e "),n(948,"code"),e(949,"po-login"),t(),e(950," o valor padr\xE3o ser\xE1 "),n(951,"code"),e(952,"true"),t(),e(953,"."),t()()(),n(954,"tr",15)(955,"td",16)(956,"div",23)(957,"span",24),e(958," p-optional"),o(959,"br"),t()()(),n(960,"td",19)(961,"code",26),e(962,"boolean"),t()(),n(963,"td",21)(964,"p")(965,"code"),e(966,"false"),t()()(),n(967,"td",22)(968,"em")(969,"strong"),e(970,"(opcional)"),t()(),n(971,"p"),e(972,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(973,"blockquote")(974,"p"),e(975,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(976,"ul")(977,"li"),e(978,"O campo conter "),n(979,"code"),e(980,"p-required"),t(),e(981,";"),t(),n(982,"li"),e(983,"N\xE3o possuir "),n(984,"code"),e(985,"p-help"),t(),e(986," e/ou "),n(987,"code"),e(988,"p-label"),t(),e(989,"."),t()()()(),n(990,"tr",15)(991,"td",16)(992,"div",23)(993,"span",24),e(994,"p-pattern"),o(995,"br"),t()()(),n(996,"td",19)(997,"code",25),e(998,"string"),t()(),n(999,"td",21),e(1e3,"-"),t(),n(1001,"td",22)(1002,"em")(1003,"strong"),e(1004,"(opcional)"),t()(),n(1005,"p"),e(1006,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(1007,"code"),e(1008,"(p-mask)"),t(),e(1009,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(1010,"tr",15)(1011,"td",16)(1012,"div",23)(1013,"span",24),e(1014," p-placeholder"),o(1015,"br"),t()()(),n(1016,"td",19)(1017,"code",25),e(1018,"string"),t()(),n(1019,"td",21)(1020,"p"),e(1021,"''"),t()(),n(1022,"td",22)(1023,"em")(1024,"strong"),e(1025,"(opcional)"),t()(),n(1026,"p"),e(1027,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(1028,"tr",15)(1029,"td",16)(1030,"div",23)(1031,"span",24),e(1032,"p-readonly"),o(1033,"br"),t()()(),n(1034,"td",19)(1035,"code",26),e(1036,"boolean"),t()(),n(1037,"td",21),e(1038,"-"),t(),n(1039,"td",22)(1040,"em")(1041,"strong"),e(1042,"(opcional)"),t()(),n(1043,"p"),e(1044,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(1045,"tr",15)(1046,"td",16)(1047,"div",23)(1048,"span",24),e(1049,"p-required"),o(1050,"br"),t()()(),n(1051,"td",19)(1052,"code",26),e(1053,"boolean"),t()(),n(1054,"td",21)(1055,"p")(1056,"code"),e(1057,"false"),t()()(),n(1058,"td",22)(1059,"em")(1060,"strong"),e(1061,"(opcional)"),t()(),n(1062,"p"),e(1063,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1064,"blockquote")(1065,"p"),e(1066,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1067,"code"),e(1068,"(p-disabled)"),t(),e(1069,"."),t()()()(),n(1070,"tr",15)(1071,"td",16)(1072,"div",23)(1073,"span",24),e(1074," p-required-field-error-message"),o(1075,"br"),t()()(),n(1076,"td",19)(1077,"code",26),e(1078,"boolean"),t()(),n(1079,"td",21)(1080,"p")(1081,"code"),e(1082,"false"),t()()(),n(1083,"td",22)(1084,"em")(1085,"strong"),e(1086,"(opcional)"),t()(),n(1087,"p"),e(1088,"Exibe a mensagem setada na propriedade "),n(1089,"code"),e(1090,"p-error-pattern"),t(),e(1091," se o campo estiver vazio e for requerido."),t(),n(1092,"blockquote")(1093,"p"),e(1094,"Necess\xE1rio que a propriedade "),n(1095,"code"),e(1096,"p-required"),t(),e(1097," esteja habilitada."),t()()()(),n(1098,"tr",15)(1099,"td",16)(1100,"div",23)(1101,"span",24),e(1102," p-show-required"),o(1103,"br"),t()()(),n(1104,"td",19)(1105,"code",26),e(1106,"boolean"),t()(),n(1107,"td",21),e(1108,"-"),t(),n(1109,"td",22)(1110,"p"),e(1111,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1112,"blockquote")(1113,"p"),e(1114,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1115,"ul")(1116,"li"),e(1117,"N\xE3o possuir "),n(1118,"code"),e(1119,"p-help"),t(),e(1120," e/ou "),n(1121,"code"),e(1122,"p-label"),t(),e(1123,"."),t()()()(),n(1124,"tr",15)(1125,"td",16)(1126,"div",23)(1127,"span",24),e(1128," p-size"),o(1129,"br"),t()()(),n(1130,"td",19)(1131,"code",25),e(1132,"string"),t()(),n(1133,"td",21)(1134,"p")(1135,"code"),e(1136,"medium"),t()()(),n(1137,"td",22)(1138,"em")(1139,"strong"),e(1140,"(opcional)"),t()(),n(1141,"p"),e(1142,"Define o tamanho do componente:"),t(),n(1143,"ul")(1144,"li")(1145,"code"),e(1146,"small"),t(),e(1147,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1148,"li")(1149,"code"),e(1150,"medium"),t(),e(1151,": altura do input como 44px."),t()(),n(1152,"blockquote")(1153,"p"),e(1154,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1155,"code"),e(1156,"medium"),t(),e(1157,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1158,"a",32),e(1159,"po-theme"),t(),e(1160,"."),t()()()(),n(1161,"tr",15)(1162,"td",16)(1163,"div",23)(1164,"span",24),e(1165," p-thousand-maxlength"),o(1166,"br"),t()()(),n(1167,"td",19)(1168,"code",27),e(1169,"number"),t()(),n(1170,"td",21)(1171,"p")(1172,"code"),e(1173,"13"),t()()(),n(1174,"td",22)(1175,"em")(1176,"strong"),e(1177,"(opcional)"),t()(),n(1178,"p"),e(1179,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal."),t(),n(1180,"blockquote")(1181,"p")(1182,"strong"),e(1183,"Importante:"),t()()(),n(1184,"ul")(1185,"li"),e(1186,"O valor m\xE1ximo permitido \xE9 13;"),t(),n(1187,"li"),e(1188,"A soma total de "),n(1189,"code"),e(1190,"p-decimals-length"),t(),e(1191," com "),n(1192,"code"),e(1193,"p-thousand-maxlength"),t(),e(1194," limita-se \xE0 16;"),t(),n(1195,"li"),e(1196,"Esta propriedade sobrep\xF5e o valor definido em "),n(1197,"code"),e(1198,"p-decimals-length"),t(),e(1199,"."),t()()()(),n(1200,"tr",15)(1201,"td",16)(1202,"div",23)(1203,"span",24),e(1204," p-upper-case"),o(1205,"br"),t()()(),n(1206,"td",19)(1207,"code",26),e(1208,"boolean"),t()(),n(1209,"td",21),e(1210,"-"),t(),n(1211,"td",22)(1212,"p"),e(1213,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1214,"h3",11),e(1215,"M\xE9todos"),t(),n(1216,"table",33)(1217,"tr",15)(1218,"th",34)(1219,"div",23)(1220,"h4")(1221,"span",24),e(1222," showAdditionalHelp "),t()()()()(),n(1223,"tr",22)(1224,"td",22)(1225,"p"),e(1226,"M\xE9todo que exibe "),n(1227,"code"),e(1228,"p-additionalHelpTooltip"),t(),e(1229," ou executa a a\xE7\xE3o definida em "),n(1230,"code"),e(1231,"p-additionalHelp"),t(),e(1232,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1233,"code"),e(1234,"p-keydown"),t(),e(1235,"."),t(),n(1236,"pre")(1237,"code"),e(1238,`<po-nome-component
 #component
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1239,"pre")(1240,"code"),e(1241,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1242,"br"),n(1243,"table",33)(1244,"tr",15)(1245,"th",34)(1246,"div",23)(1247,"h4")(1248,"span",24),e(1249," focus "),t()()()()(),n(1250,"tr",22)(1251,"td",22)(1252,"p"),e(1253,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1254,"p"),e(1255,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1256,"pre")(1257,"code"),e(1258,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1259,"br"),n(1260,"h3"),e(1261,"Interfaces"),t(),n(1262,"h4",35)(1263,"code",5),e(1264,"ErrorAsyncProperties"),t()(),n(1265,"div",2)(1266,"p"),e(1267,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1268,"h4",11),e(1269,"Propriedades"),t(),n(1270,"table",12)(1271,"tr",13)(1272,"th",14),e(1273,"Nome"),t(),n(1274,"th",14),e(1275,"Tipo"),t(),n(1276,"th",14),e(1277,"Descri\xE7\xE3o"),t()(),n(1278,"tr",15)(1279,"td",16)(1280,"div",23)(1281,"span",24),e(1282," errorAsync"),o(1283,"br"),t()()(),n(1284,"td",19)(1285,"code",36),e(1286,"(value) => Observable<boolean>"),t()(),n(1287,"td",22)(1288,"p"),e(1289,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1290,"code"),e(1291,"change"),t(),e(1292," ou "),n(1293,"code"),e(1294,"change-model"),t(),e(1295,", dependendo do valor da propriedade "),n(1296,"code"),e(1297,"triggerMode"),t(),e(1298,"."),t()()(),n(1299,"tr",15)(1300,"td",16)(1301,"div",23)(1302,"span",24),e(1303," triggerMode"),o(1304,"br"),t()()(),n(1305,"td",19)(1306,"code",37),e(1307,"'change' "),t(),n(1308,"code",38),e(1309," 'changeModel'"),t()(),n(1310,"td",22)(1311,"em")(1312,"strong"),e(1313,"(opcional)"),t()(),n(1314,"p"),e(1315,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1316,"code"),e(1317,"change"),t(),e(1318," ou "),n(1319,"code"),e(1320,"change-model"),t(),e(1321,"."),t()()()()())},dependencies:[C],encapsulation:2})}return l})();var Ee=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(V(J),V(X))};static \u0275cmp=x({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Decimal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-decimal-doc"),t(),n(4,"po-tab",3),g("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-decimal-basic-view")(6,"sample-po-decimal-labs-view")(7,"sample-po-decimal-hourly-wage-view")(8,"sample-po-decimal-hourly-wage-reactive-form-view"),t()()()),r&2&&(E("p-actions",i.actions),m(2),E("p-active",i.activeTab==="doc"),m(2),E("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ne,y,v,ae,me,pe,ce,ue],encapsulation:2})}return l})();var ke=[{path:"",component:Ee}],ge=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=z({type:l});static \u0275inj=B({imports:[I.forChild(ke),I]})}return l})();var ot=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=z({type:l});static \u0275inj=B({imports:[ie,ge]})}return l})();export{ot as DocPoDecimalModule};
