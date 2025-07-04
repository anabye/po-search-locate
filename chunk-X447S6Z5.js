import{o as k,p as pe}from"./chunk-R3BKLGLC.js";import{Ab as C,F as V,Ga as O,K as R,Ra as j,T as H,Wa as re,ha as oe,ja as ae,ka as Q,la as M,nb as le,zb as x}from"./chunk-TUTTJOS2.js";import{$a as f,Ac as B,Ba as D,Dc as $,Ea as n,Ec as ee,Fa as t,Ga as a,Ic as te,Ka as W,La as h,M as N,Nc as ne,Pc as ie,Rc as U,T as c,Ta as Z,U as u,Ua as J,Va as Y,Wa as X,Xa as e,Za as w,ab as g,bb as b,eb as P,ha as p,ia as y,oa as S,pa as L,tc as T,ub as _,wc as A,xc as q,ya as s,yc as I,zc as z}from"./chunk-MIQUIDUB.js";var de=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","datepicker","p-label","PO Datepicker"]],template:function(l,i){l&1&&a(0,"po-datepicker",0)},dependencies:[M],encapsulation:2})}return r})();var ke=r=>({"docs-sample-code-tabs":r}),me=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Basic"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-datepicker name="datepicker" p-label="PO Datepicker"> </po-datepicker>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-basic',
  templateUrl: './sample-po-datepicker-basic.component.html',
  standalone: false
})
export class SamplePoDatepickerBasicComponent {}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-datepicker-basic"),t(),a(23,"hr")),l&2&&(p(5),D("po-icon "+i.sampleCodeButtonIcon),p(),w(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",P(4,ke,i.hideSampleCodeTabs)))},dependencies:[_,k,x,C,de],encapsulation:2})}return r})();var ce=(()=>{class r{additionalHelpTooltip;datepicker;maxDate;errorPattern;event;format;help;isoFormat;label;locale;placeholder;properties;minDate;size;isoFormatOptions=[{label:"Basic",value:Q.Basic},{label:"Extended",value:Q.Extended}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"}];formatOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.additionalHelpTooltip="",this.datepicker=void 0,this.maxDate=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.isoFormat=void 0,this.label=void 0,this.locale=void 0,this.placeholder=void 0,this.properties=[],this.minDate=void 0,this.size="medium"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-labs"]],standalone:!1,decls:22,vars:44,consts:[["f","ngForm"],["name","datepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-max-date","p-error-pattern","p-format","p-help","p-iso-format","p-label","p-locale","p-min-date","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date","p-format"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-format","p-min-date"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","format","p-columns","4","p-label","Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","isoFormat","p-columns","4","p-label","Iso Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let m=W();n(0,"po-datepicker",1),b("ngModelChange",function(o){return c(m),g(i.datepicker,o)||(i.datepicker=o),u(o)}),h("p-blur",function(){return c(m),u(i.changeEvent("p-blur"))})("p-change",function(){return c(m),u(i.changeEvent("p-change"))})("p-keydown",function(){return c(m),u(i.changeEvent("p-keydown"))}),t(),a(1,"hr"),n(2,"div",2),a(3,"po-info",3)(4,"po-info",4),t(),a(5,"hr"),n(6,"form",null,0)(8,"po-input",5),b("ngModelChange",function(o){return c(m),g(i.label,o)||(i.label=o),u(o)}),t(),n(9,"po-input",6),b("ngModelChange",function(o){return c(m),g(i.help,o)||(i.help=o),u(o)}),t(),n(10,"po-input",7),b("ngModelChange",function(o){return c(m),g(i.additionalHelpTooltip,o)||(i.additionalHelpTooltip=o),u(o)}),t(),n(11,"po-input",8),b("ngModelChange",function(o){return c(m),g(i.placeholder,o)||(i.placeholder=o),u(o)}),t(),n(12,"po-input",9),b("ngModelChange",function(o){return c(m),g(i.errorPattern,o)||(i.errorPattern=o),u(o)}),t(),n(13,"po-datepicker",10),b("ngModelChange",function(o){return c(m),g(i.minDate,o)||(i.minDate=o),u(o)}),t(),n(14,"po-datepicker",11),b("ngModelChange",function(o){return c(m),g(i.maxDate,o)||(i.maxDate=o),u(o)}),t(),n(15,"po-checkbox-group",12),b("ngModelChange",function(o){return c(m),g(i.properties,o)||(i.properties=o),u(o)}),t(),n(16,"po-radio-group",13),b("ngModelChange",function(o){return c(m),g(i.locale,o)||(i.locale=o),u(o)}),t(),n(17,"po-radio-group",14),b("ngModelChange",function(o){return c(m),g(i.format,o)||(i.format=o),u(o)}),t(),n(18,"po-radio-group",15),b("ngModelChange",function(o){return c(m),g(i.isoFormat,o)||(i.isoFormat=o),u(o)}),t(),n(19,"po-radio-group",16),b("ngModelChange",function(o){return c(m),g(i.size,o)||(i.size=o),u(o)}),t(),n(20,"div",2)(21,"po-button",17),h("p-click",function(){return c(m),u(i.restore())}),t()()()}l&2&&(f("ngModel",i.datepicker),s("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-max-date",i.maxDate)("p-error-pattern",i.errorPattern)("p-format",i.format)("p-help",i.help)("p-iso-format",i.isoFormat)("p-label",i.label)("p-locale",i.locale)("p-min-date",i.minDate)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),p(3),s("p-value",i.datepicker),p(),s("p-value",i.event),p(4),f("ngModel",i.label),p(),f("ngModel",i.help),p(),f("ngModel",i.additionalHelpTooltip),p(),f("ngModel",i.placeholder),p(),f("ngModel",i.errorPattern),p(),f("ngModel",i.minDate),s("p-max-date",i.maxDate)("p-format",i.format),p(),f("ngModel",i.maxDate),s("p-format",i.format)("p-min-date",i.minDate),p(),f("ngModel",i.properties),s("p-options",i.propertiesOptions),p(),f("ngModel",i.locale),s("p-options",i.localeOptions),p(),f("ngModel",i.format),s("p-options",i.formatOptions),p(),f("ngModel",i.isoFormat),s("p-options",i.isoFormatOptions),p(),f("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[B,A,q,z,I,V,oe,ae,M,O,re],encapsulation:2})}return r})();var Pe=r=>({"docs-sample-code-tabs":r}),ue=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Labs"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-datepicker
  class="po-sm-12"
  name="datepicker"
  [(ngModel)]="datepicker"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-max-date]="maxDate"
  [p-error-pattern]="errorPattern"
  [p-format]="format"
  [p-help]="help"
  [p-iso-format]="isoFormat"
  [p-label]="label"
  [p-locale]="locale"
  [p-min-date]="minDate"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-datepicker>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="datepicker"> </po-info>

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

  <po-datepicker
    class="po-md-6"
    name="minDate"
    [(ngModel)]="minDate"
    p-clean
    p-label="Min date"
    [p-max-date]="maxDate"
    [p-format]="format"
  >
  </po-datepicker>

  <po-datepicker
    class="po-md-6"
    name="maxDate"
    [(ngModel)]="maxDate"
    p-clean
    p-label="Max date"
    [p-format]="format"
    [p-min-date]="minDate"
  >
  </po-datepicker>

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
    name="locale"
    [(ngModel)]="locale"
    p-columns="4"
    p-label="Locale"
    [p-options]="localeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="format"
    [(ngModel)]="format"
    p-columns="4"
    p-label="Format"
    [p-options]="formatOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="isoFormat"
    [(ngModel)]="isoFormat"
    p-columns="4"
    p-label="Iso Format"
    [p-options]="isoFormatOptions"
  >
  </po-radio-group>

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
    <po-button class="po-lg-3 po-md-6" name="restore" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoDatepickerIsoFormat, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-labs',
  templateUrl: './sample-po-datepicker-labs.component.html',
  standalone: false
})
export class SamplePoDatepickerLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  datepicker: string | Date;
  maxDate: string | Date;
  errorPattern: string;
  event: string;
  format: string;
  help: string;
  isoFormat: PoDatepickerIsoFormat;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  minDate: string | Date;
  size: string;

  public readonly isoFormatOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: PoDatepickerIsoFormat.Basic },
    { label: 'Extended', value: PoDatepickerIsoFormat.Extended }
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

  public readonly formatOptions: Array<PoRadioGroupOption> = [
    { label: 'dd/mm/yyyy', value: 'dd/mm/yyyy' },
    { label: 'mm/dd/yyyy', value: 'mm/dd/yyyy' },
    { label: 'yyyy/mm/dd', value: 'yyyy/mm/dd' }
  ];

  public readonly localeOptions: Array<PoRadioGroupOption> = [
    { label: 'pt', value: 'pt' },
    { label: 'en', value: 'en' },
    { label: 'es', value: 'es' },
    { label: 'ru', value: 'ru' }
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
    this.datepicker = undefined;
    this.maxDate = undefined;
    this.event = undefined;
    this.errorPattern = undefined;
    this.format = undefined;
    this.help = undefined;
    this.isoFormat = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.minDate = undefined;
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-datepicker-labs"),t(),a(23,"hr")),l&2&&(p(5),D("po-icon "+i.sampleCodeButtonIcon),p(),w(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",P(4,Pe,i.hideSampleCodeTabs)))},dependencies:[_,k,x,C,ce],encapsulation:2})}return r})();var Me=["formAirfare"],Ee=(()=>{class r{poDialog;poNotification;formAirfare;accompany=0;destination;endDate=new Date;origin;startDate=new Date;ticketClass="Economy";accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];constructor(d,l){this.poDialog=d,this.poNotification=l}apply(){let d=`Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.ticketClass} class?`;this.poDialog.confirm({title:"Confirm",message:d,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"})},cancel:()=>{this.poNotification.warning("Booking Canceled")}})}getFormatedDate(d){return d&&d.slice(0,10)}static \u0275fac=function(l){return new(l||r)(y(R),y(H))};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-airfare"]],viewQuery:function(l,i){if(l&1&&Z(Me,7),l&2){let m;J(m=Y())&&(i.formAirfare=m.first)}},standalone:!1,decls:13,vars:11,consts:[["formAirfare","ngForm"],[1,"po-row"],["name","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","origin","p-placeholder","Flight origin","p-label","Origin","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-placeholder","Flight destination","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["clas","po-row"],["name","ticketClass","p-label","Class","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","accompany","p-label","Accompany","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let m=W();n(0,"form",null,0)(2,"div",1)(3,"po-datepicker",2),b("ngModelChange",function(o){return c(m),g(i.startDate,o)||(i.startDate=o),u(o)}),t(),n(4,"po-datepicker",3),b("ngModelChange",function(o){return c(m),g(i.endDate,o)||(i.endDate=o),u(o)}),t()(),n(5,"div",1)(6,"po-input",4),b("ngModelChange",function(o){return c(m),g(i.origin,o)||(i.origin=o),u(o)}),t(),n(7,"po-input",5),b("ngModelChange",function(o){return c(m),g(i.destination,o)||(i.destination=o),u(o)}),t()(),n(8,"div",6)(9,"po-select",7),b("ngModelChange",function(o){return c(m),g(i.ticketClass,o)||(i.ticketClass=o),u(o)}),t(),n(10,"po-select",8),b("ngModelChange",function(o){return c(m),g(i.accompany,o)||(i.accompany=o),u(o)}),t()(),n(11,"div",1)(12,"po-button",9),h("p-click",function(){return c(m),u(i.apply())}),t()()()}if(l&2){let m=X(1);p(3),f("ngModel",i.startDate),s("p-max-date",i.endDate),p(),f("ngModel",i.endDate),s("p-min-date",i.startDate),p(2),f("ngModel",i.origin),p(),f("ngModel",i.destination),p(2),f("ngModel",i.ticketClass),s("p-options",i.ticketClassOptions),p(),f("ngModel",i.accompany),s("p-options",i.accompanyNumber),p(2),s("p-disabled",m.invalid)}},dependencies:[B,A,q,z,I,V,M,O,j],encapsulation:2})}return r})();var Te=r=>({"docs-sample-code-tabs":r}),fe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-airfare-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker - Airfare"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html"),t(),n(13,"pre",7),e(14,`<form #formAirfare="ngForm">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="startDate"
      [(ngModel)]="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      p-required
      [p-max-date]="endDate"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="endDate"
      [(ngModel)]="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      p-required
      [p-min-date]="startDate"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="origin"
      [(ngModel)]="origin"
      p-placeholder="Flight origin"
      p-label="Origin"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="destination"
      [(ngModel)]="destination"
      p-label="Destination"
      p-placeholder="Flight destination"
      p-required
    >
    </po-input>
  </div>

  <div clas="po-row">
    <po-select
      class="po-md-6"
      name="ticketClass"
      [(ngModel)]="ticketClass"
      p-label="Class"
      p-required
      [p-options]="ticketClassOptions"
    >
    </po-select>

    <po-select
      class="po-md-6"
      name="accompany"
      [(ngModel)]="accompany"
      p-label="Accompany"
      p-required
      [p-options]="accompanyNumber"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-airfare',
  templateUrl: './sample-po-datepicker-airfare.component.html',
  standalone: false
})
export class SamplePoDatepickerAirfareComponent {
  @ViewChild('formAirfare', { static: true }) formAirfare: UntypedFormControl;

  accompany: number = 0;
  destination: string;
  endDate: string = <any>new Date();
  origin: string;
  startDate: string = <any>new Date();
  ticketClass: string = 'Economy';

  public readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  public readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  constructor(
    private poDialog: PoDialogService,
    private poNotification: PoNotificationService
  ) {}

  apply() {
    const message = \`Would you like to confirm the ticket from \${this.origin} to \${
      this.destination
    } with departure date at
    \${this.getFormatedDate(this.startDate)} and return at \${this.getFormatedDate(this.endDate)} with \${
      this.accompany
    } companions in
    \${this.ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-datepicker-airfare"),t(),a(23,"hr")),l&2&&(p(5),D("po-icon "+i.sampleCodeButtonIcon),p(),w(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",P(4,Te,i.hideSampleCodeTabs)))},dependencies:[_,k,x,C,Ee],encapsulation:2})}return r})();var ge=(()=>{class r{formBuilder;poDialog;poNotification;formAirfare;accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];constructor(d,l,i){this.formBuilder=d,this.poDialog=l,this.poNotification=i}ngOnInit(){this.formAirfare=this.formBuilder.group({accompany:[0,T.required],destination:["",T.required],endDate:[new Date,T.required],origin:["",T.required],startDate:[new Date,T.required],ticketClass:["Economy",T.required]})}apply(d){let{accompany:l,destination:i,endDate:m,origin:E,ticketClass:o,startDate:ye}=d.value,xe=`Would you like to confirm the ticket from ${E} to ${i} with departure date at
    ${this.getFormatedDate(ye)} and return at ${this.getFormatedDate(m)} with ${l} companions in
    ${o} class?`;this.poDialog.confirm({title:"Confirm",message:xe,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"})},cancel:()=>{this.poNotification.warning("Booking Canceled")}})}getFormatedDate(d){return d&&d.slice(0,10)}static \u0275fac=function(l){return new(l||r)(y(te),y(R),y(H))};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-airfare-reactive-form"]],standalone:!1,decls:12,vars:6,consts:[[3,"formGroup"],[1,"po-row"],["formControlName","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start",1,"po-md-6",3,"p-max-date"],["formControlName","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end",1,"po-md-6",3,"p-min-date"],["formControlName","origin","p-placeholder","Flight origin","p-label","Origin",1,"po-md-6"],["formControlName","destination","p-label","Destination","p-placeholder","Flight destination",1,"po-md-6"],["clas","po-row"],["formControlName","ticketClass","p-label","Class",1,"po-md-6",3,"p-options"],["formControlName","accompany","p-label","Accompany",1,"po-md-6",3,"p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(l,i){l&1&&(n(0,"form",0)(1,"div",1),a(2,"po-datepicker",2)(3,"po-datepicker",3),t(),n(4,"div",1),a(5,"po-input",4)(6,"po-input",5),t(),n(7,"div",6),a(8,"po-select",7)(9,"po-select",8),t(),n(10,"div",1)(11,"po-button",9),h("p-click",function(){return i.apply(i.formAirfare)}),t()()()),l&2&&(s("formGroup",i.formAirfare),p(2),s("p-max-date",i.formAirfare.get("endDate").value),p(),s("p-min-date",i.formAirfare.get("startDate").value),p(5),s("p-options",i.ticketClassOptions),p(),s("p-options",i.accompanyNumber),p(2),s("p-disabled",i.formAirfare.invalid))},dependencies:[B,A,q,$,ee,V,M,O,j],encapsulation:2})}return r})();var Be=r=>({"docs-sample-code-tabs":r}),be=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-airfare-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker - Airfare Reactive Form"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="formAirfare">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      formControlName="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      [p-max-date]="formAirfare.get('endDate').value"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      formControlName="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      [p-min-date]="formAirfare.get('startDate').value"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" formControlName="origin" p-placeholder="Flight origin" p-label="Origin"> </po-input>

    <po-input class="po-md-6" formControlName="destination" p-label="Destination" p-placeholder="Flight destination">
    </po-input>
  </div>

  <div clas="po-row">
    <po-select class="po-md-6" formControlName="ticketClass" p-label="Class" [p-options]="ticketClassOptions">
    </po-select>

    <po-select class="po-md-6" formControlName="accompany" p-label="Accompany" [p-options]="accompanyNumber">
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply(formAirfare)"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-airfare-reactive-form',
  templateUrl: './sample-po-datepicker-airfare-reactive-form.component.html',
  standalone: false
})
export class SamplePoDatepickerAirfareReactiveFormComponent implements OnInit {
  formAirfare: UntypedFormGroup;

  readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private poDialog: PoDialogService,
    private poNotification: PoNotificationService
  ) {}

  ngOnInit() {
    this.formAirfare = this.formBuilder.group({
      accompany: [0, Validators.required],
      destination: ['', Validators.required],
      endDate: [new Date(), Validators.required],
      origin: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      ticketClass: ['Economy', Validators.required]
    });
  }

  apply(formAirfare: UntypedFormGroup) {
    const { accompany, destination, endDate, origin, ticketClass, startDate } = formAirfare.value;

    const message = \`Would you like to confirm the ticket from \${origin} to \${destination} with departure date at
    \${this.getFormatedDate(startDate)} and return at \${this.getFormatedDate(endDate)} with \${accompany} companions in
    \${ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-datepicker-airfare-reactive-form"),t(),a(23,"hr")),l&2&&(p(5),D("po-icon "+i.sampleCodeButtonIcon),p(),w(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",P(4,Be,i.hideSampleCodeTabs)))},dependencies:[_,k,x,C,ge],encapsulation:2})}return r})();var Se=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-datepicker-doc"]],standalone:!1,decls:1038,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3schools.com/js/js_dates.asp"],["href","https://www.w3schools.com/jsref/jsref_setfullyear.asp"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","Date"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoDatepickerComponent"),t()(),n(21,"div",2)(22,"p"),e(23,"O "),n(24,"code"),e(25,"po-datepicker"),t(),e(26," \xE9 um componente espec\xEDfico para manipula\xE7\xE3o de datas permitindo a digita\xE7\xE3o e / ou sele\xE7\xE3o."),t(),n(27,"p"),e(28,`O formato de exibi\xE7\xE3o da data, ou seja, o formato que \xE9 apresentado ao usu\xE1rio \xE9 o dd/mm/yyyy,
mas podem ser definidos outros padr\xF5es (veja mais na propriedade `),n(29,"code"),e(30,"p-format"),t(),e(31,")."),t(),n(32,"p"),e(33,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),n(34,"code"),e(35,"p-locale"),t(),e(36,"."),t(),n(37,"p"),e(38,`O datepicker aceita tr\xEAs formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
Date padr\xE3o do Javascript.`),t(),n(39,"blockquote")(40,"p"),e(41,"Por padr\xE3o, o formato de sa\xEDda do "),n(42,"em"),e(43,"model"),t(),e(44,` se ajustar\xE1 conforme o formato de entrada. Se por acaso precisar controlar o valor de sa\xEDda,
a propriedade `),n(45,"code"),e(46,"p-iso-format"),t(),e(47," prov\xEA esse controle independentemente do formato de entrada. Veja abaixo os formatos dispon\xEDveis:"),t()(),n(48,"ul")(49,"li")(50,"p"),e(51,"Formato de entrada e sa\xEDda (E8601DZw) - "),n(52,"code"),e(53,"'2017-11-28T00:00:00-02:00'"),t(),e(54,";"),t()(),n(55,"li")(56,"p"),e(57,"Formato de entrada e sa\xEDda (E8601DAw) - "),n(58,"code"),e(59,"'2017-11-28'"),t(),e(60,";"),t()(),n(61,"li")(62,"p"),e(63,"Formato de entrada (Date) - "),n(64,"code"),e(65,"new Date(2017, 10, 28)"),t(),e(66," e sa\xEDda (E8601DAw) - "),n(67,"code"),e(68,"'2017-11-28'"),t(),e(69,";"),t()()(),n(70,"p")(71,"strong"),e(72,"Importante:"),t()(),n(73,"ul")(74,"li"),e(75,"Para utilizar datas com ano inferior a 100, verificar o comportamento do "),n(76,"a",6)(77,"code"),e(78,"new Date"),t()(),e(79,`
e utilizar o m\xE9todo `),n(80,"a",7)(81,"code"),e(82,"setFullYear"),t()(),e(83,"."),t(),n(84,"li"),e(85,"Caso a data esteja inv\xE1lida, o "),n(86,"code"),e(87,"model"),t(),e(88," receber\xE1 "),n(89,"strong"),e(90,"'Data inv\xE1lida'"),t(),e(91,"."),t(),n(92,"li"),e(93,"Caso o "),n(94,"code"),e(95,"input"),t(),e(96," esteja passando um "),n(97,"code"),e(98,"[(ngModel)]"),t(),e(99,", mas n\xE3o tenha um "),n(100,"code"),e(101,"name"),t(),e(102,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),n(103,"code"),e(104,'[ngModelOptions]="{standalone: true}"'),t(),e(105,")."),t()(),n(106,"p"),e(107,"Exemplo:"),t(),n(108,"pre")(109,"code"),e(110,`<po-datepicker
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}"
</po-datepicker>
`),t()(),n(111,"blockquote")(112,"p"),e(113,"N\xE3o esque\xE7a de importar o "),n(114,"code"),e(115,"FormsModule"),t(),e(116," em seu m\xF3dulo, tal como para utilizar o "),n(117,"code"),e(118,"input default"),t(),e(119,"."),t()(),n(120,"h4"),e(121,"Tokens customiz\xE1veis"),t(),n(122,"p"),e(123,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),a(124,"br"),e(125,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(126,"code"),e(127,".po-input"),t()(),n(128,"blockquote")(129,"p"),e(130,"Para maiores informa\xE7\xF5es, acesse o guia "),n(131,"a",8),e(132,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(133,"."),t()(),n(134,"table")(135,"thead")(136,"tr")(137,"th"),e(138,"Propriedade"),t(),n(139,"th"),e(140,"Descri\xE7\xE3o"),t(),n(141,"th"),e(142,"Valor Padr\xE3o"),t()()(),n(143,"tbody")(144,"tr")(145,"td")(146,"strong"),e(147,"Default Values"),t()(),a(148,"td")(149,"td"),t(),n(150,"tr")(151,"td")(152,"code"),e(153,"--font-family"),t()(),n(154,"td"),e(155,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(156,"td")(157,"code"),e(158,"var(--font-family-theme)"),t()()(),n(159,"tr")(160,"td")(161,"code"),e(162,"--font-size"),t()(),n(163,"td"),e(164,"Tamanho da fonte"),t(),n(165,"td")(166,"code"),e(167,"var(--font-size-default)"),t()()(),n(168,"tr")(169,"td")(170,"code"),e(171,"--text-color-placeholder"),t(),e(172," \xA0"),t(),n(173,"td"),e(174,"Cor principal do texto do placeholder"),t(),n(175,"td")(176,"code"),e(177,"var(--color-neutral-light-30)"),t()()(),n(178,"tr")(179,"td")(180,"code"),e(181,"--color"),t()(),n(182,"td"),e(183,"Cor principal do datepicker"),t(),n(184,"td")(185,"code"),e(186,"var(--color-neutral-dark-70)"),t()()(),n(187,"tr")(188,"td")(189,"code"),e(190,"--background"),t()(),n(191,"td"),e(192,"Cor de background"),t(),n(193,"td")(194,"code"),e(195,"var(--color-neutral-light-05)"),t()()(),n(196,"tr")(197,"td")(198,"code"),e(199,"--padding"),t()(),n(200,"td"),e(201,"Preenchimento"),t(),n(202,"td")(203,"code"),e(204,"0 0.5rem"),t()()(),n(205,"tr")(206,"td")(207,"code"),e(208,"--text-color"),t()(),n(209,"td"),e(210,"Cor do texto"),t(),n(211,"td")(212,"code"),e(213,"var(--color-neutral-dark-90)"),t()()(),n(214,"tr")(215,"td")(216,"strong"),e(217,"Hover"),t()(),a(218,"td")(219,"td"),t(),n(220,"tr")(221,"td")(222,"code"),e(223,"--color-hover"),t()(),n(224,"td"),e(225,"Cor principal no estado hover"),t(),n(226,"td")(227,"code"),e(228,"var(--color-brand-01-dark)"),t()()(),n(229,"tr")(230,"td")(231,"code"),e(232,"--background-hover"),t()(),n(233,"td"),e(234,"Cor de background no estado hover"),t(),n(235,"td")(236,"code"),e(237,"var(--color-brand-01-lightest)"),t()()(),n(238,"tr")(239,"td")(240,"strong"),e(241,"Focused"),t()(),a(242,"td")(243,"td"),t(),n(244,"tr")(245,"td")(246,"code"),e(247,"--color-focused"),t()(),n(248,"td"),e(249,"Cor principal no estado de focus"),t(),n(250,"td")(251,"code"),e(252,"var(--color-action-default)"),t()()(),n(253,"tr")(254,"td")(255,"code"),e(256,"--outline-color-focused"),t()(),n(257,"td"),e(258,"Cor do outline do estado de focus"),t(),n(259,"td")(260,"code"),e(261,"var(--color-action-focus)"),t()()(),n(262,"tr")(263,"td")(264,"strong"),e(265,"Disabled"),t()(),a(266,"td")(267,"td"),t(),n(268,"tr")(269,"td")(270,"code"),e(271,"--color-disabled"),t()(),n(272,"td"),e(273,"Cor principal no estado disabled"),t(),n(274,"td")(275,"code"),e(276,"var(--color-neutral-light-30)"),t()()(),n(277,"tr")(278,"td")(279,"code"),e(280,"--background-disabled"),t()(),n(281,"td"),e(282,"Cor de background no estado disabled \xA0"),t(),n(283,"td")(284,"code"),e(285,"var(--color-neutral-light-20)"),t()()(),n(286,"tr")(287,"td")(288,"code"),e(289,"--text-color-disabled"),t()(),n(290,"td"),e(291,"Cor do texto no estado disabled"),t(),n(292,"td")(293,"code"),e(294,"var(--color-neutral-dark-70)"),t()()()()()(),n(295,"div",9)(296,"h4",10),e(297,"Seletor"),t(),n(298,"pre",11),e(299,`<po-datepicker
    p-locale="string"
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean"
    p-disabled="boolean"
    p-error-async="(value) => Observable<boolean>"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-format="string"
    p-help="string"
    p-iso-format="PoDatepickerIsoFormat"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-max-date="string | Date"
    p-min-date="string | Date"
    p-no-autocomplete="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-datepicker>
`),t()(),n(300,"h4",12),e(301,"Propriedades"),t(),n(302,"table",13)(303,"tr",14)(304,"th",15),e(305,"Nome"),t(),n(306,"th",15),e(307,"Tipo"),t(),n(308,"th",15),e(309,"Padr\xE3o"),t(),n(310,"th",15),e(311,"Descri\xE7\xE3o"),t()(),n(312,"tr",16)(313,"td",17)(314,"div",18)(315,"span",19),e(316,"p-locale"),a(317,"br"),t()()(),n(318,"td",20)(319,"code",21),e(320,"string"),t()(),n(321,"td",22),e(322,"-"),t(),n(323,"td",23)(324,"em")(325,"strong"),e(326,"(opcional)"),t()(),n(327,"p"),e(328,"Idioma do Datepicker."),t(),n(329,"blockquote")(330,"p"),e(331,"O locale padr\xE3o sera recuperado com base no "),n(332,"a",24)(333,"code"),e(334,"PoI18nService"),t()(),e(335," ou "),n(336,"em"),e(337,"browser"),t(),e(338,"."),t()()()(),n(339,"tr",16)(340,"td",17)(341,"div",25)(342,"span",26),e(343," (p-additional-help)"),a(344,"br"),t()()(),n(345,"td",20)(346,"code",27),e(347,"EventEmitter"),t()(),n(348,"td",22),e(349,"-"),t(),n(350,"td",23)(351,"em")(352,"strong"),e(353,"(opcional)"),t()(),n(354,"p"),e(355,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(356,"code"),e(357,"p-help"),t(),e(358,"."),t()()(),n(359,"tr",16)(360,"td",17)(361,"div",18)(362,"span",19),e(363," p-additional-help-tooltip"),a(364,"br"),t()()(),n(365,"td",20)(366,"code",21),e(367,"string"),t()(),n(368,"td",22),e(369,"-"),t(),n(370,"td",23)(371,"em")(372,"strong"),e(373,"(opcional)"),t()(),n(374,"p"),e(375,"Exibe um \xEDcone de ajuda adicional ao "),n(376,"code"),e(377,"p-help"),t(),e(378,`, com o texto desta propriedade no tooltip.
Se o evento `),n(379,"code"),e(380,"p-additional-help"),t(),e(381,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(382,"strong"),e(383,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(384,"blockquote")(385,"p"),e(386,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),n(387,"tr",16)(388,"td",17)(389,"div",18)(390,"span",19),e(391," p-append-in-body"),a(392,"br"),t()()(),n(393,"td",20)(394,"code",28),e(395,"boolean"),t()(),n(396,"td",22)(397,"p")(398,"code"),e(399,"false"),t()()(),n(400,"td",23)(401,"em")(402,"strong"),e(403,"(opcional)"),t()(),n(404,"p"),e(405,"Define que o "),n(406,"code"),e(407,"calendar"),t(),e(408," e/ou tooltip ("),n(409,"code"),e(410,"p-additional-help-tooltip"),t(),e(411," e/ou "),n(412,"code"),e(413,"p-error-limit"),t(),e(414,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),n(415,"blockquote")(416,"p"),e(417,"Quando utilizado com "),n(418,"code"),e(419,"p-additional-help-tooltip"),t(),e(420,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(421,"tr",16)(422,"td",17)(423,"div",18)(424,"span",19),e(425," p-auto-focus"),a(426,"br"),t()()(),n(427,"td",20)(428,"code",28),e(429,"boolean"),t()(),n(430,"td",22)(431,"p")(432,"code"),e(433,"false"),t()()(),n(434,"td",23)(435,"em")(436,"strong"),e(437,"(opcional)"),t()(),n(438,"p"),e(439,"Aplica foco no elemento ao ser iniciado."),t(),n(440,"blockquote")(441,"p"),e(442,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(443,"tr",16)(444,"td",17)(445,"div",18)(446,"span",19),e(447,"p-clean"),a(448,"br"),t()()(),n(449,"td",20)(450,"code",28),e(451,"boolean"),t()(),n(452,"td",22),e(453,"-"),t(),n(454,"td",23)(455,"em")(456,"strong"),e(457,"(opcional)"),t()(),n(458,"p"),e(459,"Habilita a\xE7\xE3o para limpar o campo."),t()()(),n(460,"tr",16)(461,"td",17)(462,"div",18)(463,"span",19),e(464,"p-disabled"),a(465,"br"),t()()(),n(466,"td",20)(467,"code",28),e(468,"boolean"),t()(),n(469,"td",22),e(470,"-"),t(),n(471,"td",23)(472,"em")(473,"strong"),e(474,"(opcional)"),t()(),n(475,"p"),e(476,"Desabilita o campo."),t()()(),n(477,"tr",16)(478,"td",17)(479,"div",18)(480,"span",19),e(481," p-error-async"),a(482,"br"),t()()(),n(483,"td",20)(484,"code",29),e(485,"(value) => Observable<boolean>"),t()(),n(486,"td",22),e(487,"-"),t(),n(488,"td",23)(489,"em")(490,"strong"),e(491,"(opcional)"),t()(),n(492,"p"),e(493,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(494,"code"),e(495,"change"),t(),e(496,"."),t()()(),n(497,"tr",16)(498,"td",17)(499,"div",18)(500,"span",19),e(501," p-error-limit"),a(502,"br"),t()()(),n(503,"td",20)(504,"code",28),e(505,"boolean"),t()(),n(506,"td",22)(507,"p")(508,"code"),e(509,"false"),t()()(),n(510,"td",23)(511,"em")(512,"strong"),e(513,"(opcional)"),t()(),n(514,"p"),e(515,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(516,"blockquote")(517,"p"),e(518,"Caso essa propriedade seja definida como "),n(519,"code"),e(520,"true"),t(),e(521,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(522,"tr",16)(523,"td",17)(524,"div",18)(525,"span",19),e(526," p-error-pattern"),a(527,"br"),t()()(),n(528,"td",20)(529,"code",21),e(530,"string"),t()(),n(531,"td",22),e(532,"-"),t(),n(533,"td",23)(534,"em")(535,"strong"),e(536,"(opcional)"),t()(),n(537,"p"),e(538,"Mensagem apresentada quando a data for inv\xE1lida ou fora do per\xEDodo."),t(),n(539,"blockquote")(540,"p"),e(541,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(542,"code"),e(543,"p-required-field-error-message"),t(),e(544," em conjunto."),t()()()(),n(545,"tr",16)(546,"td",17)(547,"div",18)(548,"span",19),e(549," p-format"),a(550,"br"),t()()(),n(551,"td",20)(552,"code",21),e(553,"string"),t()(),n(554,"td",22)(555,"p")(556,"code"),e(557,"dd/mm/yyyy"),t()()(),n(558,"td",23)(559,"em")(560,"strong"),e(561,"(opcional)"),t()(),n(562,"p"),e(563,"Formato de exibi\xE7\xE3o da data."),t(),n(564,"p"),e(565,"Valores v\xE1lidos:"),t(),n(566,"ul")(567,"li")(568,"code"),e(569,"dd/mm/yyyy"),t()(),n(570,"li")(571,"code"),e(572,"mm/dd/yyyy"),t()(),n(573,"li")(574,"code"),e(575,"yyyy/mm/dd"),t()()()()(),n(576,"tr",16)(577,"td",17)(578,"div",18)(579,"span",19),e(580," p-help"),a(581,"br"),t()()(),n(582,"td",20)(583,"code",21),e(584,"string"),t()(),n(585,"td",22),e(586,"-"),t(),n(587,"td",23)(588,"em")(589,"strong"),e(590,"(opcional)"),t()(),n(591,"p"),e(592,"Texto de apoio do campo."),t()()(),n(593,"tr",16)(594,"td",17)(595,"div",18)(596,"span",19),e(597," p-iso-format"),a(598,"br"),t()()(),n(599,"td",20)(600,"code",30),e(601,"PoDatepickerIsoFormat"),t()(),n(602,"td",22),e(603,"-"),t(),n(604,"td",23)(605,"em")(606,"strong"),e(607,"(opcional)"),t()(),n(608,"p"),e(609,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),n(610,"em"),e(611,"model"),t(),e(612,", independentemente do formato de entrada."),t(),n(613,"blockquote")(614,"p"),e(615,"Veja os valores v\xE1lidos no "),n(616,"em"),e(617,"enum"),t(),n(618,"code"),e(619,"PoDatepickerIsoFormat"),t(),e(620,"."),t()()()(),n(621,"tr",16)(622,"td",17)(623,"div",25)(624,"span",26),e(625," (p-keydown)"),a(626,"br"),t()()(),n(627,"td",20)(628,"code",27),e(629,"EventEmitter"),t()(),n(630,"td",22),e(631,"-"),t(),n(632,"td",23)(633,"em")(634,"strong"),e(635,"(opcional)"),t()(),n(636,"p"),e(637,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(638,"code"),e(639,"KeyboardEvent"),t(),e(640," com informa\xE7\xF5es sobre a tecla."),t()()(),n(641,"tr",16)(642,"td",17)(643,"div",18)(644,"span",19),e(645," p-label"),a(646,"br"),t()()(),n(647,"td",20)(648,"code",21),e(649,"string"),t()(),n(650,"td",22),e(651,"-"),t(),n(652,"td",23)(653,"em")(654,"strong"),e(655,"(opcional)"),t()(),n(656,"p"),e(657,"R\xF3tulo do campo."),t()()(),n(658,"tr",16)(659,"td",17)(660,"div",18)(661,"span",19),e(662," p-max-date"),a(663,"br"),t()()(),n(664,"td",20)(665,"code",21),e(666,"string "),t(),n(667,"code",31),e(668," Date"),t()(),n(669,"td",22),e(670,"-"),t(),n(671,"td",23)(672,"em")(673,"strong"),e(674,"(opcional)"),t()(),n(675,"p"),e(676,"Define uma data m\xE1xima para o "),n(677,"code"),e(678,"po-datepicker"),t(),e(679,"."),t()()(),n(680,"tr",16)(681,"td",17)(682,"div",18)(683,"span",19),e(684," p-min-date"),a(685,"br"),t()()(),n(686,"td",20)(687,"code",21),e(688,"string "),t(),n(689,"code",31),e(690," Date"),t()(),n(691,"td",22),e(692,"-"),t(),n(693,"td",23)(694,"em")(695,"strong"),e(696,"(opcional)"),t()(),n(697,"p"),e(698,"Define uma data m\xEDnima para o "),n(699,"code"),e(700,"po-datepicker"),t(),e(701,"."),t()()(),n(702,"tr",16)(703,"td",17)(704,"div",18)(705,"span",19),e(706," p-no-autocomplete"),a(707,"br"),t()()(),n(708,"td",20)(709,"code",28),e(710,"boolean"),t()(),n(711,"td",22)(712,"p")(713,"code"),e(714,"false"),t()()(),n(715,"td",23)(716,"em")(717,"strong"),e(718,"(opcional)"),t()(),n(719,"p"),e(720,"Define a propriedade nativa "),n(721,"code"),e(722,"autocomplete"),t(),e(723," do campo como "),n(724,"code"),e(725,"off"),t(),e(726,"."),t()()(),n(727,"tr",16)(728,"td",17)(729,"div",25)(730,"span",26),e(731," (p-blur)"),a(732,"br"),t()()(),n(733,"td",20)(734,"code",27),e(735,"EventEmitter"),t()(),n(736,"td",22),e(737,"-"),t(),n(738,"td",23)(739,"em")(740,"strong"),e(741,"(opcional)"),t()(),n(742,"p"),e(743,"Evento disparado ao sair do campo."),t()()(),n(744,"tr",16)(745,"td",17)(746,"div",25)(747,"span",26),e(748," (p-change)"),a(749,"br"),t()()(),n(750,"td",20)(751,"code",27),e(752,"EventEmitter"),t()(),n(753,"td",22),e(754,"-"),t(),n(755,"td",23)(756,"em")(757,"strong"),e(758,"(opcional)"),t()(),n(759,"p"),e(760,"Evento disparado ao alterar valor do campo."),t()()(),n(761,"tr",16)(762,"td",17)(763,"div",18)(764,"span",19),e(765," p-optional"),a(766,"br"),t()()(),n(767,"td",20)(768,"code",28),e(769,"boolean"),t()(),n(770,"td",22)(771,"p")(772,"code"),e(773,"false"),t()()(),n(774,"td",23)(775,"em")(776,"strong"),e(777,"(opcional)"),t()(),n(778,"p"),e(779,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(780,"blockquote")(781,"p"),e(782,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(783,"ul")(784,"li"),e(785,"O campo conter "),n(786,"code"),e(787,"p-required"),t(),e(788,";"),t(),n(789,"li"),e(790,"N\xE3o possuir "),n(791,"code"),e(792,"p-help"),t(),e(793," e/ou "),n(794,"code"),e(795,"p-label"),t(),e(796,"."),t()()()(),n(797,"tr",16)(798,"td",17)(799,"div",18)(800,"span",19),e(801," p-placeholder"),a(802,"br"),t()()(),n(803,"td",20)(804,"code",21),e(805,"string"),t()(),n(806,"td",22),e(807,"-"),t(),n(808,"td",23)(809,"em")(810,"strong"),e(811,"(opcional)"),t()(),n(812,"p"),e(813,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(814,"tr",16)(815,"td",17)(816,"div",18)(817,"span",19),e(818,"p-readonly"),a(819,"br"),t()()(),n(820,"td",20)(821,"code",28),e(822,"boolean"),t()(),n(823,"td",22),e(824,"-"),t(),n(825,"td",23)(826,"em")(827,"strong"),e(828,"(opcional)"),t()(),n(829,"p"),e(830,"Torna o elemento somente leitura."),t()()(),n(831,"tr",16)(832,"td",17)(833,"div",18)(834,"span",19),e(835,"p-required"),a(836,"br"),t()()(),n(837,"td",20)(838,"code",28),e(839,"boolean"),t()(),n(840,"td",22)(841,"p")(842,"code"),e(843,"false"),t()()(),n(844,"td",23)(845,"em")(846,"strong"),e(847,"(opcional)"),t()(),n(848,"p"),e(849,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(850,"tr",16)(851,"td",17)(852,"div",18)(853,"span",19),e(854," p-required-field-error-message"),a(855,"br"),t()()(),n(856,"td",20)(857,"code",28),e(858,"boolean"),t()(),n(859,"td",22)(860,"p")(861,"code"),e(862,"false"),t()()(),n(863,"td",23)(864,"em")(865,"strong"),e(866,"(opcional)"),t()(),n(867,"p"),e(868,"Exibe a mensagem setada na propriedade "),n(869,"code"),e(870,"p-error-pattern"),t(),e(871," se o campo estiver vazio e for requerido."),t(),n(872,"blockquote")(873,"p"),e(874,"Necess\xE1rio que a propriedade "),n(875,"code"),e(876,"p-required"),t(),e(877," esteja habilitada."),t()()()(),n(878,"tr",16)(879,"td",17)(880,"div",18)(881,"span",19),e(882," p-show-required"),a(883,"br"),t()()(),n(884,"td",20)(885,"code",28),e(886,"boolean"),t()(),n(887,"td",22),e(888,"-"),t(),n(889,"td",23)(890,"p"),e(891,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(892,"blockquote")(893,"p"),e(894,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(895,"ul")(896,"li"),e(897,"N\xE3o possuir "),n(898,"code"),e(899,"p-help"),t(),e(900," e/ou "),n(901,"code"),e(902,"p-label"),t(),e(903,"."),t()()()(),n(904,"tr",16)(905,"td",17)(906,"div",18)(907,"span",19),e(908," p-size"),a(909,"br"),t()()(),n(910,"td",20)(911,"code",21),e(912,"string"),t()(),n(913,"td",22)(914,"p")(915,"code"),e(916,"medium"),t()()(),n(917,"td",23)(918,"em")(919,"strong"),e(920,"(opcional)"),t()(),n(921,"p"),e(922,"Define o tamanho do componente:"),t(),n(923,"ul")(924,"li")(925,"code"),e(926,"small"),t(),e(927,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(928,"li")(929,"code"),e(930,"medium"),t(),e(931,": altura do input como 44px."),t()(),n(932,"blockquote")(933,"p"),e(934,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(935,"code"),e(936,"medium"),t(),e(937,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(938,"a",32),e(939,"po-theme"),t(),e(940,"."),t()()()()(),n(941,"h3",12),e(942,"M\xE9todos"),t(),n(943,"table",33)(944,"tr",16)(945,"th",34)(946,"div",18)(947,"h4")(948,"span",19),e(949," focus "),t()()()()(),n(950,"tr",23)(951,"td",23)(952,"p"),e(953,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(954,"p"),e(955,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(956,"pre")(957,"code"),e(958,`import { PoDatepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;

focusDatepicker() {
  this.datepicker.focus();
}
`),t()()()()(),a(959,"br"),n(960,"table",33)(961,"tr",16)(962,"th",34)(963,"div",18)(964,"h4")(965,"span",19),e(966," showAdditionalHelp "),t()()()()(),n(967,"tr",23)(968,"td",23)(969,"p"),e(970,"M\xE9todo que exibe "),n(971,"code"),e(972,"p-additionalHelpTooltip"),t(),e(973," ou executa a a\xE7\xE3o definida em "),n(974,"code"),e(975,"p-additionalHelp"),t(),e(976,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(977,"code"),e(978,"p-keydown"),t(),e(979,"."),t(),n(980,"pre")(981,"code"),e(982,`<po-datepicker
 #datepicker
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, datepicker)"
></po-datepicker>
`),t()(),n(983,"pre")(984,"code"),e(985,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(986,"br"),n(987,"h3"),e(988,"Enums"),t(),n(989,"h4",4)(990,"code",5),e(991,"PoDatepickerIsoFormat"),t()(),n(992,"div",2)(993,"p")(994,"em"),e(995,"Enum"),t(),e(996," que define o padr\xE3o de formata\xE7\xE3o das datas."),t(),n(997,"blockquote")(998,"p"),e(999,"Caso um formato padr\xE3o seja definido, o mesmo n\xE3o ser\xE1 mais alterado de acordo com o formato de entrada."),t()()(),n(1e3,"h4",12),e(1001,"Propriedades"),t(),n(1002,"table",13)(1003,"tr",14)(1004,"th",15),e(1005,"Nome"),t(),n(1006,"th",15),e(1007,"Descri\xE7\xE3o"),t()(),n(1008,"tr",16)(1009,"td",17)(1010,"div",18)(1011,"span",19),e(1012," Basic"),a(1013,"br"),t()()(),n(1014,"td",23)(1015,"p"),e(1016,"Padr\xE3o "),n(1017,"strong"),e(1018,"E8601DAw"),t(),e(1019," ("),n(1020,"em"),e(1021,"yyyy-mm-dd"),t(),e(1022,")."),t()()(),n(1023,"tr",16)(1024,"td",17)(1025,"div",18)(1026,"span",19),e(1027," Extended"),a(1028,"br"),t()()(),n(1029,"td",23)(1030,"p"),e(1031,"Padr\xE3o "),n(1032,"strong"),e(1033,"E8601DZw"),t(),e(1034," ("),n(1035,"em"),e(1036,"yyyy-mm-ddThh:mm:ss+|-hh:mm"),t(),e(1037,")."),t()()()()())},dependencies:[k],encapsulation:2})}return r})();var he=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||r)(y(ne),y(ie))};static \u0275cmp=S({type:r,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Datepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-datepicker-doc"),t(),n(4,"po-tab",3),h("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-datepicker-basic-view")(6,"sample-po-datepicker-labs-view")(7,"sample-po-datepicker-airfare-view")(8,"sample-po-datepicker-airfare-reactive-form-view"),t()()()),l&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab==="doc"),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[le,x,C,me,ue,fe,be,Se],encapsulation:2})}return r})();var Ne=[{path:"",component:he}],ve=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=L({type:r});static \u0275inj=N({imports:[U.forChild(Ne),U]})}return r})();var ut=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=L({type:r});static \u0275inj=N({imports:[pe,ve]})}return r})();export{ut as DocPoDatepickerModule};
