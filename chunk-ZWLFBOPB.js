import{o as C,p as ge}from"./chunk-JYNCG2Y6.js";import{Ab as D,Da as M,F as W,Ga as se,I as P,La as X,Ra as ce,Sa as $,T as Z,Wa as I,a as K,ha as pe,ja as de,la as me,nb as ue,zb as k}from"./chunk-HBOGTDFH.js";import{$a as b,Ac as N,Ba as y,Dc as ie,Ea as t,Ec as ae,Fa as n,Ga as a,Ib as Y,Ic as oe,Ka as T,La as f,M as Q,Nc as le,Pc as re,Rc as te,T as c,Ta as z,U as u,Ua as A,Va as H,Wa as U,Xa as e,Za as R,ab as h,bb as E,eb as w,ha as p,ia as x,kb as q,nb as L,oa as S,pa as G,tc as ne,ub as _,wc as F,xc as O,ya as s,yc as J,zc as B}from"./chunk-MIQUIDUB.js";var fe=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","datepickerRange","p-label","PO Datepicker Range"]],template:function(o,i){o&1&&a(0,"po-datepicker-range",0)},dependencies:[M],encapsulation:2})}return l})();var _e=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range Basic"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-basic/sample-po-datepicker-range-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-datepicker-range name="datepickerRange" p-label="PO Datepicker Range"> </po-datepicker-range>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-basic/sample-po-datepicker-range-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-range-basic',
  templateUrl: './sample-po-datepicker-range-basic.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeBasicComponent {}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-basic"),n(),a(23,"hr")),o&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),R(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,_e,i.hideSampleCodeTabs)))},dependencies:[_,C,k,D,fe],encapsulation:2})}return l})();var he=(()=>{class l{additionalHelpTooltip;clean;customLiterals;datepickerRange;endDate;event;help;label;literals;properties;fieldErrorMessage;startDate;maxDate;minDate;locale;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"}];localeOptions=[{label:"English",value:"en"},{label:"Espa\xF1ol",value:"es"},{label:"Portugu\xEAs",value:"pt"},{label:"P\u0443\u0441\u0441\u043A\u0438\u0439",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}getDatepickerRange(){return JSON.stringify(this.datepickerRange)}restore(){this.additionalHelpTooltip="",this.clean=void 0,this.customLiterals=void 0,this.endDate=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.literals=void 0,this.properties=[],this.fieldErrorMessage="",this.startDate=void 0,this.maxDate=void 0,this.minDate=void 0,this.locale=void 0,this.size="medium",setTimeout(()=>this.datepickerRange=void 0)}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-labs"]],standalone:!1,decls:20,vars:37,consts:[["f","ngForm"],["name","datepickerRange",1,"po-sm-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-end-date","p-help","p-label","p-literals","p-max-date","p-min-date","p-no-autocomplete","p-optional","p-readonly","p-required","p-field-error-message","p-show-required","p-start-date","p-locale","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","literals","p-help",'Ex.: { "invalidFormat": "Date in inconsistent format", "startDateGreaterThanEndDate": "End date less than start date" }',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","locale","p-label","Locale",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(o,i){if(o&1){let m=T();t(0,"po-datepicker-range",1),E("ngModelChange",function(r){return c(m),h(i.datepickerRange,r)||(i.datepickerRange=r),u(r)}),f("p-change",function(){return c(m),u(i.changeEvent("p-change"))})("p-keydown",function(){return c(m),u(i.changeEvent("p-keydown"))}),n(),a(1,"hr"),t(2,"div",2),a(3,"po-info",3)(4,"po-info",4),n(),a(5,"hr"),t(6,"form",null,0)(8,"po-input",5),E("ngModelChange",function(r){return c(m),h(i.label,r)||(i.label=r),u(r)}),n(),t(9,"po-input",6),E("ngModelChange",function(r){return c(m),h(i.help,r)||(i.help=r),u(r)}),n(),t(10,"po-input",7),E("ngModelChange",function(r){return c(m),h(i.additionalHelpTooltip,r)||(i.additionalHelpTooltip=r),u(r)}),n(),t(11,"po-datepicker",8),E("ngModelChange",function(r){return c(m),h(i.minDate,r)||(i.minDate=r),u(r)}),n(),t(12,"po-datepicker",9),E("ngModelChange",function(r){return c(m),h(i.maxDate,r)||(i.maxDate=r),u(r)}),n(),t(13,"po-input",10),E("ngModelChange",function(r){return c(m),h(i.literals,r)||(i.literals=r),u(r)}),f("p-change",function(){return c(m),u(i.changeLiterals())}),n(),t(14,"po-input",11),E("ngModelChange",function(r){return c(m),h(i.fieldErrorMessage,r)||(i.fieldErrorMessage=r),u(r)}),n(),t(15,"po-select",12),E("ngModelChange",function(r){return c(m),h(i.locale,r)||(i.locale=r),u(r)}),n(),t(16,"po-checkbox-group",13),E("ngModelChange",function(r){return c(m),h(i.properties,r)||(i.properties=r),u(r)}),n(),t(17,"po-radio-group",14),E("ngModelChange",function(r){return c(m),h(i.size,r)||(i.size=r),u(r)}),n(),t(18,"div",2)(19,"po-button",15),f("p-click",function(){return c(m),u(i.restore())}),n()()()}o&2&&(b("ngModel",i.datepickerRange),s("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-end-date",i.endDate)("p-help",i.help)("p-label",i.label)("p-literals",i.customLiterals)("p-max-date",i.maxDate)("p-min-date",i.minDate)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-start-date",i.startDate)("p-locale",i.locale)("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),p(3),s("p-value",i.getDatepickerRange()),p(),s("p-value",i.event),p(4),b("ngModel",i.label),p(),b("ngModel",i.help),p(),b("ngModel",i.additionalHelpTooltip),p(),b("ngModel",i.minDate),s("p-max-date",i.maxDate),p(),b("ngModel",i.maxDate),s("p-min-date",i.minDate),p(),b("ngModel",i.literals),p(),b("ngModel",i.fieldErrorMessage),p(),b("ngModel",i.locale),s("p-options",i.localeOptions),p(),b("ngModel",i.properties),s("p-options",i.propertiesOptions),p(),b("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[N,F,O,B,J,W,pe,de,me,M,se,ce,I],encapsulation:2})}return l})();var Ve=l=>({"docs-sample-code-tabs":l}),Ee=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range Labs"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-labs/sample-po-datepicker-range-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-datepicker-range
  class="po-sm-12"
  name="datepickerRange"
  [(ngModel)]="datepickerRange"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-end-date]="endDate"
  [p-help]="help"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-max-date]="maxDate"
  [p-min-date]="minDate"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-start-date]="startDate"
  [p-locale]="locale"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-datepicker-range>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="getDatepickerRange()"> </po-info>

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

  <po-datepicker class="po-md-6" name="minDate" [(ngModel)]="minDate" p-clean p-label="Min date" [p-max-date]="maxDate">
  </po-datepicker>

  <po-datepicker class="po-md-6" name="maxDate" [(ngModel)]="maxDate" p-clean p-label="Max date" [p-min-date]="minDate">
  </po-datepicker>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: { "invalidFormat": "Date in inconsistent format", "startDateGreaterThanEndDate": "End date less than start date" }'
    p-label="Literals"
    (p-change)="changeLiterals()"
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

  <po-select class="po-md-6" name="locale" p-label="Locale" [(ngModel)]="locale" [p-options]="localeOptions">
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
    <po-button class="po-lg-3 po-md-6" name="restore" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-labs/sample-po-datepicker-range-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoDatepickerRange,
  PoDatepickerRangeLiterals,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-range-labs',
  templateUrl: './sample-po-datepicker-range-labs.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  clean: boolean;
  customLiterals: PoDatepickerRangeLiterals;
  datepickerRange: PoDatepickerRange;
  endDate: string | Date;
  event: string;
  help: string;
  label: string;
  literals: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  startDate: string | Date;
  maxDate: string | Date;
  minDate: string | Date;
  locale: string;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  public readonly localeOptions: Array<PoSelectOption> = [
    { label: 'English', value: 'en' },
    { label: 'Espa\xF1ol', value: 'es' },
    { label: 'Portugu\xEAs', value: 'pt' },
    { label: 'P\u0443\u0441\u0441\u043A\u0438\u0439', value: 'ru' }
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

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  getDatepickerRange() {
    return JSON.stringify(this.datepickerRange);
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.clean = undefined;
    this.customLiterals = undefined;
    this.endDate = undefined;
    this.event = undefined;
    this.help = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.startDate = undefined;
    this.maxDate = undefined;
    this.minDate = undefined;
    this.locale = undefined;
    this.size = 'medium';
    setTimeout(() => (this.datepickerRange = undefined));
  }
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-labs"),n(),a(23,"hr")),o&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),R(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,Ve,i.hideSampleCodeTabs)))},dependencies:[_,C,k,D,he],encapsulation:2})}return l})();var qe=["formVacationSuggestion"],ve=(()=>{class l{poNotification;formVacationSuggestion;poModal;datepickerRange;quantityOfDays=void 0;reason;cancel={action:()=>{this.poModal.close()},label:"Cancel"};submit={action:()=>{this.poModal.close(),this.formVacationSuggestion.reset(),this.poNotification.success("Vacation suggestion submitted!")},label:"Submit"};get validateForm(){return!(this.formVacationSuggestion.valid&&this.datepickerRange&&this.datepickerRange.start&&this.datepickerRange.end)}constructor(d){this.poNotification=d}calculateQuantityOfVacationDays(){let d=new Date(this.datepickerRange.start),o=new Date(this.datepickerRange.end);this.quantityOfDays=Math.floor((Date.UTC(o.getFullYear(),o.getMonth(),o.getDate())-Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()))/(1e3*60*60*24))}clean(){this.datepickerRange=void 0,this.quantityOfDays=void 0,this.reason=void 0}static \u0275fac=function(o){return new(o||l)(x(Z))};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-vacations"]],viewQuery:function(o,i){if(o&1&&(z(qe,7),z(P,7)),o&2){let m;A(m=H())&&(i.formVacationSuggestion=m.first),A(m=H())&&(i.poModal=m.first)}},standalone:!1,decls:21,vars:18,consts:[["formVacationSuggestion","ngForm"],["modalVacationSuggestion",""],["p-label","Vacation suggestion",1,"po-md-9"],[1,"po-row"],["name","datepickerRange","p-clean","","p-label","Select the period","p-required","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","number","p-disabled","","p-label","Quantity of days","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","textarea","p-label","Reason",1,"po-md-9",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-2","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click"],["p-label","Submit",1,"po-md-2",3,"p-click","p-disabled"],["p-hide-close","","p-title","Confirm vacation suggestion",3,"p-primary-action","p-secondary-action"],["p-label","Initial period",1,"po-md-4",3,"p-value"],["p-label","Final period",1,"po-md-4",3,"p-value"],["p-label","Quantity of days",1,"po-md-4",3,"p-value"],["p-disabled","","p-label","Reason","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(o,i){if(o&1){let m=T();t(0,"form",null,0),a(2,"po-divider",2),t(3,"div",3)(4,"po-datepicker-range",4),E("ngModelChange",function(r){return c(m),h(i.datepickerRange,r)||(i.datepickerRange=r),u(r)}),f("p-change",function(){return c(m),u(i.calculateQuantityOfVacationDays())}),n(),t(5,"po-number",5),E("ngModelChange",function(r){return c(m),h(i.quantityOfDays,r)||(i.quantityOfDays=r),u(r)}),n()(),t(6,"div",3)(7,"po-textarea",6),E("ngModelChange",function(r){return c(m),h(i.reason,r)||(i.reason=r),u(r)}),n()(),t(8,"div",3)(9,"po-button",7),f("p-click",function(){return c(m),u(i.clean())}),n(),t(10,"po-button",8),f("p-click",function(){c(m);let r=U(12);return u(r.open())}),n()()(),t(11,"po-modal",9,1)(13,"div",3),a(14,"po-info",10),q(15,"date"),a(16,"po-info",11),q(17,"date"),a(18,"po-info",12),n(),t(19,"div",3)(20,"po-textarea",13),E("ngModelChange",function(r){return c(m),h(i.reason,r)||(i.reason=r),u(r)}),n()()()}o&2&&(p(4),b("ngModel",i.datepickerRange),p(),b("ngModel",i.quantityOfDays),p(2),b("ngModel",i.reason),p(3),s("p-disabled",i.validateForm),p(),s("p-primary-action",i.submit)("p-secondary-action",i.cancel),p(3),s("p-value",L(15,10,i.datepickerRange==null?null:i.datepickerRange.start,"longDate","+0000")),p(2),s("p-value",L(17,14,i.datepickerRange==null?null:i.datepickerRange.end,"longDate","+0000")),p(2),s("p-value",i.quantityOfDays),p(2),b("ngModel",i.reason))},dependencies:[N,F,O,B,J,W,K,M,X,$,I,P,Y],encapsulation:2})}return l})();var Fe=l=>({"docs-sample-code-tabs":l}),ke=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-vacations-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range - Vacations Suggestion"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-vacations/sample-po-datepicker-range-vacations.component.html"),n(),t(13,"pre",7),e(14,`<form #formVacationSuggestion="ngForm">
  <po-divider class="po-md-9" p-label="Vacation suggestion"> </po-divider>

  <div class="po-row">
    <po-datepicker-range
      class="po-md-6"
      name="datepickerRange"
      [(ngModel)]="datepickerRange"
      p-clean
      p-label="Select the period"
      p-required
      (p-change)="calculateQuantityOfVacationDays()"
    >
    </po-datepicker-range>

    <po-number
      class="po-md-3"
      name="number"
      [(ngModel)]="quantityOfDays"
      p-disabled
      p-label="Quantity of days"
      p-required
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-9" name="textarea" [(ngModel)]="reason" p-label="Reason"> </po-textarea>
  </div>

  <div class="po-row">
    <po-button class="po-md-2 po-offset-md-5 po-offset-lg-5 po-offset-xl-5" p-label="Clean" (p-click)="clean()">
    </po-button>

    <po-button class="po-md-2" p-label="Submit" [p-disabled]="validateForm" (p-click)="modalVacationSuggestion.open()">
    </po-button>
  </div>
</form>

<po-modal
  #modalVacationSuggestion
  p-hide-close
  p-title="Confirm vacation suggestion"
  [p-primary-action]="submit"
  [p-secondary-action]="cancel"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="Initial period" [p-value]="datepickerRange?.start | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Final period" [p-value]="datepickerRange?.end | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Quantity of days" [p-value]="quantityOfDays"> </po-info>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" [(ngModel)]="reason" p-disabled p-label="Reason" p-required> </po-textarea>
  </div>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-vacations/sample-po-datepicker-range-vacations.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDatepickerRange, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-range-vacations',
  templateUrl: './sample-po-datepicker-range-vacations.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeVacationsComponent {
  @ViewChild('formVacationSuggestion', { static: true }) formVacationSuggestion: UntypedFormControl;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  datepickerRange: PoDatepickerRange;
  quantityOfDays: number = undefined;
  reason: string;

  cancel: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancel'
  };

  submit: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.formVacationSuggestion.reset();
      this.poNotification.success('Vacation suggestion submitted!');
    },
    label: 'Submit'
  };

  get validateForm() {
    return !(
      this.formVacationSuggestion.valid &&
      this.datepickerRange &&
      this.datepickerRange.start &&
      this.datepickerRange.end
    );
  }

  constructor(private poNotification: PoNotificationService) {}

  calculateQuantityOfVacationDays() {
    const start = new Date(this.datepickerRange.start);
    const end = new Date(this.datepickerRange.end);

    this.quantityOfDays = Math.floor(
      (Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) -
        Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  }

  clean() {
    this.datepickerRange = undefined;
    this.quantityOfDays = undefined;
    this.reason = undefined;
  }
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-vacations"),n(),a(23,"hr")),o&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),R(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,Fe,i.hideSampleCodeTabs)))},dependencies:[_,C,k,D,ve],encapsulation:2})}return l})();var De=(()=>{class l{poNotification;formBuilder;poModal;datepickerRange;formVacationSuggestion;quantityOfDays;reason;cancel={action:()=>{this.poModal.close()},label:"Cancel"};submit={action:()=>{this.poModal.close(),this.formVacationSuggestion.reset(),this.poNotification.success("Vacation suggestion submitted!")},label:"Submit"};get validateForm(){return!(this.formVacationSuggestion.valid&&this.formVacationSuggestion.get("datepickerRange").value.start&&this.formVacationSuggestion.get("datepickerRange").value.end)}constructor(d,o){this.poNotification=d,this.formBuilder=o}ngOnInit(){this.formVacationSuggestion=this.formBuilder.group({datepickerRange:[void 0,ne.required],quantityOfDays:[void 0],reason:[void 0]})}calculateQuantityOfVacationDays(){let d=new Date(this.formVacationSuggestion.get("datepickerRange").value.start),o=new Date(this.formVacationSuggestion.get("datepickerRange").value.end),i=Math.floor((Date.UTC(o.getFullYear(),o.getMonth(),o.getDate())-Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()))/(1e3*60*60*24));this.formVacationSuggestion.get("quantityOfDays").setValue(i)}clean(){this.formVacationSuggestion.reset()}submitForm(){this.datepickerRange=this.formVacationSuggestion.get("datepickerRange").value,this.reason=this.formVacationSuggestion.get("reason").value,this.quantityOfDays=this.formVacationSuggestion.get("quantityOfDays").value}static \u0275fac=function(o){return new(o||l)(x(Z),x(oe))};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-vacations-reactive-form"]],viewQuery:function(o,i){if(o&1&&z(P,7),o&2){let m;A(m=H())&&(i.poModal=m.first)}},standalone:!1,decls:20,vars:16,consts:[["modalVacationSuggestion",""],[3,"formGroup"],["p-label","Vacation suggestion",1,"po-md-9"],[1,"po-row"],["formControlName","datepickerRange","p-clean","","p-label","Select the period","p-required","",1,"po-md-6",3,"p-change"],["formControlName","quantityOfDays","p-disabled","","p-label","Quantity of days","p-required","",1,"po-md-3"],["formControlName","reason","p-label","Reason",1,"po-md-9"],["p-label","Clean",1,"po-md-2","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click"],["p-label","Submit",1,"po-md-2",3,"p-click","p-disabled"],["p-hide-close","","p-title","Confirm vacation suggestion",3,"p-primary-action","p-secondary-action"],["p-label","Initial period",1,"po-md-4",3,"p-value"],["p-label","Final period",1,"po-md-4",3,"p-value"],["p-label","Quantity of days",1,"po-md-4",3,"p-value"],["p-disabled","","p-label","Reason","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(o,i){if(o&1){let m=T();t(0,"form",1),a(1,"po-divider",2),t(2,"div",3)(3,"po-datepicker-range",4),f("p-change",function(){return c(m),u(i.calculateQuantityOfVacationDays())}),n(),a(4,"po-number",5),n(),t(5,"div",3),a(6,"po-textarea",6),n(),t(7,"div",3)(8,"po-button",7),f("p-click",function(){return c(m),u(i.clean())}),n(),t(9,"po-button",8),f("p-click",function(){c(m);let r=U(11);return i.submitForm(),u(r.open())}),n()()(),t(10,"po-modal",9,0)(12,"div",3),a(13,"po-info",10),q(14,"date"),a(15,"po-info",11),q(16,"date"),a(17,"po-info",12),n(),t(18,"div",3)(19,"po-textarea",13),E("ngModelChange",function(r){return c(m),h(i.reason,r)||(i.reason=r),u(r)}),n()()()}o&2&&(s("formGroup",i.formVacationSuggestion),p(9),s("p-disabled",i.validateForm),p(),s("p-primary-action",i.submit)("p-secondary-action",i.cancel),p(3),s("p-value",L(14,8,i.datepickerRange==null?null:i.datepickerRange.start,"longDate","+0000")),p(2),s("p-value",L(16,12,i.datepickerRange==null?null:i.datepickerRange.end,"longDate","+0000")),p(2),s("p-value",i.quantityOfDays),p(2),b("ngModel",i.reason))},dependencies:[N,F,O,B,ie,ae,W,K,M,X,$,I,P,Y],encapsulation:2})}return l})();var Ne=l=>({"docs-sample-code-tabs":l}),Ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-vacations-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range - Vacations Reactive Form"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-vacations-reactive-form/sample-po-datepicker-range-vacations-reactive-form.component.html"),n(),t(13,"pre",7),e(14,`<form [formGroup]="formVacationSuggestion">
  <po-divider class="po-md-9" p-label="Vacation suggestion"> </po-divider>

  <div class="po-row">
    <po-datepicker-range
      class="po-md-6"
      formControlName="datepickerRange"
      p-clean
      p-label="Select the period"
      p-required
      (p-change)="calculateQuantityOfVacationDays()"
    >
    </po-datepicker-range>

    <po-number class="po-md-3" formControlName="quantityOfDays" p-disabled p-label="Quantity of days" p-required>
    </po-number>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-9" formControlName="reason" p-label="Reason"> </po-textarea>
  </div>

  <div class="po-row">
    <po-button class="po-md-2 po-offset-md-5 po-offset-lg-5 po-offset-xl-5" p-label="Clean" (p-click)="clean()">
    </po-button>

    <po-button
      class="po-md-2"
      p-label="Submit"
      [p-disabled]="validateForm"
      (p-click)="submitForm(); modalVacationSuggestion.open()"
    >
    </po-button>
  </div>
</form>

<po-modal
  #modalVacationSuggestion
  p-hide-close
  p-title="Confirm vacation suggestion"
  [p-primary-action]="submit"
  [p-secondary-action]="cancel"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="Initial period" [p-value]="datepickerRange?.start | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Final period" [p-value]="datepickerRange?.end | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Quantity of days" [p-value]="quantityOfDays"> </po-info>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" [(ngModel)]="reason" p-disabled p-label="Reason" p-required> </po-textarea>
  </div>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-vacations-reactive-form/sample-po-datepicker-range-vacations-reactive-form.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoDatepickerRange, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-range-vacations-reactive-form',
  templateUrl: './sample-po-datepicker-range-vacations-reactive-form.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeVacationsReactiveFormComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  datepickerRange: PoDatepickerRange;
  formVacationSuggestion: UntypedFormGroup;
  quantityOfDays: number;
  reason: string;

  cancel: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancel'
  };

  submit: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.formVacationSuggestion.reset();
      this.poNotification.success('Vacation suggestion submitted!');
    },
    label: 'Submit'
  };

  get validateForm() {
    return !(
      this.formVacationSuggestion.valid &&
      this.formVacationSuggestion.get('datepickerRange').value.start &&
      this.formVacationSuggestion.get('datepickerRange').value.end
    );
  }

  constructor(
    private poNotification: PoNotificationService,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit() {
    this.formVacationSuggestion = this.formBuilder.group({
      datepickerRange: [undefined, Validators.required],
      quantityOfDays: [undefined],
      reason: [undefined]
    });
  }

  calculateQuantityOfVacationDays() {
    const start = new Date(this.formVacationSuggestion.get('datepickerRange').value.start);
    const end = new Date(this.formVacationSuggestion.get('datepickerRange').value.end);

    const result = Math.floor(
      (Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) -
        Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) /
        (1000 * 60 * 60 * 24)
    );

    this.formVacationSuggestion.get('quantityOfDays').setValue(result);
  }

  clean() {
    this.formVacationSuggestion.reset();
  }

  submitForm() {
    this.datepickerRange = this.formVacationSuggestion.get('datepickerRange').value;
    this.reason = this.formVacationSuggestion.get('reason').value;
    this.quantityOfDays = this.formVacationSuggestion.get('quantityOfDays').value;
  }
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-vacations-reactive-form"),n(),a(23,"hr")),o&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),R(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,Ne,i.hideSampleCodeTabs)))},dependencies:[_,C,k,D,De],encapsulation:2})}return l})();var xe=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-doc"]],standalone:!1,decls:875,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","accepted-formats"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["href","/documentation/po-datepicker-range#accepted-formats"]],template:function(o,i){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),n(),t(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),e(11,"FormsModule"),n(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),e(14,"ReactiveFormsModule"),n(),e(15,", ambos nativos do Angular."),n()()(),t(16,"h3",3),e(17,"Componente"),n(),t(18,"h4",4)(19,"code",5),e(20,"PoDatepickerRangeComponent"),n()(),t(21,"div",2)(22,"p"),e(23,"O "),t(24,"code"),e(25,"po-datepicker-range"),n(),e(26,` \xE9 um componente para sele\xE7\xE3o de um per\xEDodo entre duas datas, onde \xE9 poss\xEDvel informar apenas
a data inicial ou a data final.`),n(),t(27,"p"),e(28,"O componente "),t(29,"code"),e(30,"[(ngModel)]"),n(),e(31," do "),t(32,"code"),e(33,"po-datepicker-range"),n(),e(34,` trabalha com um objeto que implementa a interface
`),t(35,"code"),e(36,"PoDatepickerRange"),n(),e(37,", contendo as seguintes propriedades:"),n(),t(38,"pre")(39,"code"),e(40,`{ "start": '2017-11-28', "end": '2017-11-30' }
`),n()(),t(41,"p"),a(42,"a",6),e(43,`
Este componente pode receber os seguintes formatos de data:`),n(),t(44,"ul")(45,"li")(46,"p")(47,"strong"),e(48,"Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm"),n()(),t(49,"pre")(50,"code"),e(51,`'2017-11-28T00:00:00-02:00';
`),n()()(),t(52,"li")(53,"p")(54,"strong"),e(55,"Data (E8601DAw.): yyyy-mm-dd"),n()(),t(56,"pre")(57,"code"),e(58,`'2017-11-28';
`),n()()(),t(59,"li")(60,"p")(61,"strong"),e(62,"JavaScript Date Object:"),n()(),t(63,"pre")(64,"code"),e(65,`new Date(2017, 10, 28);
`),n()()()(),t(66,"blockquote")(67,"p"),e(68,"O componente respeitar\xE1 o formato passado para o "),t(69,"em"),e(70,"model"),n(),e(71,` via codifica\xE7\xE3o. Por\xE9m, caso seja feita altera\xE7\xE3o em algum
dos valores de data em tela, o componente atribuir\xE1 o formato `),t(72,"strong"),e(73,"Data (E8601DAw.): yyyy-mm-dd"),n(),e(74," ao model."),n()(),t(75,"p"),e(76,"Importante:"),n(),t(77,"ul")(78,"li"),e(79,"Quando preenchidas a data inicial e final, a data inicial deve ser sempre menor ou igual a data final;"),n(),t(80,"li"),e(81,"Ao passar uma data inv\xE1lida via codifica\xE7\xE3o, o valor ser\xE1 mantido no "),t(82,"em"),e(83,"model"),n(),e(84," e o "),t(85,"code"),e(86,"input"),n(),e(87," da tela aparecer\xE1 vazio;"),n(),t(88,"li"),e(89,"Permite trabalhar com as duas datas separadamente atrav\xE9s das propriedades "),t(90,"code"),e(91,"p-start-date"),n(),e(92," e "),t(93,"code"),e(94,"p-end-date"),n(),e(95,` no lugar do
`),t(96,"code"),e(97,"[(ngModel)]"),n(),e(98,", no entanto sem a valida\xE7\xE3o do formul\xE1rio;"),n(),t(99,"li"),e(100,"Para a valida\xE7\xE3o do formul\xE1rio, utilize o "),t(101,"code"),e(102,"[(ngModel)]"),n(),e(103,"."),n()()(),t(104,"div",7)(105,"h4",8),e(106,"Seletor"),n(),t(107,"pre",9),e(108,`<po-datepicker-range
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean"
    p-disabled="boolean"
    p-end-date="string | Date"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-literals="PoDatepickerRangeLiterals"
    p-locale="string"
    p-max-date="string | Date"
    p-min-date="string | Date"
    p-no-autocomplete="boolean"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-start-date="string | Date" >
</po-datepicker-range>
`),n()(),t(109,"h4",10),e(110,"Propriedades"),n(),t(111,"table",11)(112,"tr",12)(113,"th",13),e(114,"Nome"),n(),t(115,"th",13),e(116,"Tipo"),n(),t(117,"th",13),e(118,"Padr\xE3o"),n(),t(119,"th",13),e(120,"Descri\xE7\xE3o"),n()(),t(121,"tr",14)(122,"td",15)(123,"div",16)(124,"span",17),e(125," (p-additional-help)"),a(126,"br"),n()()(),t(127,"td",18)(128,"code",19),e(129,"EventEmitter"),n()(),t(130,"td",20),e(131,"-"),n(),t(132,"td",21)(133,"em")(134,"strong"),e(135,"(opcional)"),n()(),t(136,"p"),e(137,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),t(138,"code"),e(139,"p-help"),n(),e(140,"."),n()()(),t(141,"tr",14)(142,"td",15)(143,"div",22)(144,"span",23),e(145," p-additional-help-tooltip"),a(146,"br"),n()()(),t(147,"td",18)(148,"code",24),e(149,"string"),n()(),t(150,"td",20),e(151,"-"),n(),t(152,"td",21)(153,"em")(154,"strong"),e(155,"(opcional)"),n()(),t(156,"p"),e(157,"Exibe um \xEDcone de ajuda adicional ao "),t(158,"code"),e(159,"p-help"),n(),e(160,`, com o texto desta propriedade no tooltip.
Se o evento `),t(161,"code"),e(162,"p-additional-help"),n(),e(163,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),t(164,"strong"),e(165,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),n()(),t(166,"blockquote")(167,"p"),e(168,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),n()()()(),t(169,"tr",14)(170,"td",15)(171,"div",22)(172,"span",23),e(173," p-append-in-body"),a(174,"br"),n()()(),t(175,"td",18)(176,"code",25),e(177,"boolean"),n()(),t(178,"td",20)(179,"p")(180,"code"),e(181,"false"),n()()(),t(182,"td",21)(183,"em")(184,"strong"),e(185,"(opcional)"),n()(),t(186,"p"),e(187,"Define que o "),t(188,"code"),e(189,"calendar"),n(),e(190," e/ou tooltip ("),t(191,"code"),e(192,"p-additional-help-tooltip"),n(),e(193," e/ou "),t(194,"code"),e(195,"p-error-limit"),n(),e(196,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),n(),t(197,"blockquote")(198,"p"),e(199,"Quando utilizado com "),t(200,"code"),e(201,"p-additional-help-tooltip"),n(),e(202,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),n()()()(),t(203,"tr",14)(204,"td",15)(205,"div",22)(206,"span",23),e(207," p-auto-focus"),a(208,"br"),n()()(),t(209,"td",18)(210,"code",25),e(211,"boolean"),n()(),t(212,"td",20)(213,"p")(214,"code"),e(215,"false"),n()()(),t(216,"td",21)(217,"em")(218,"strong"),e(219,"(opcional)"),n()(),t(220,"p"),e(221,"Aplica foco no elemento ao ser iniciado."),n(),t(222,"blockquote")(223,"p"),e(224,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),n()()()(),t(225,"tr",14)(226,"td",15)(227,"div",22)(228,"span",23),e(229," p-clean"),a(230,"br"),n()()(),t(231,"td",18)(232,"code",25),e(233,"boolean"),n()(),t(234,"td",20)(235,"p")(236,"code"),e(237,"false"),n()()(),t(238,"td",21)(239,"em")(240,"strong"),e(241,"(opcional)"),n()(),t(242,"p"),e(243,"Habilita a\xE7\xE3o para limpar o campo."),n()()(),t(244,"tr",14)(245,"td",15)(246,"div",22)(247,"span",23),e(248," p-disabled"),a(249,"br"),n()()(),t(250,"td",18)(251,"code",25),e(252,"boolean"),n()(),t(253,"td",20)(254,"p")(255,"code"),e(256,"false"),n()()(),t(257,"td",21)(258,"em")(259,"strong"),e(260,"(opcional)"),n()(),t(261,"p"),e(262,"Desabilita o campo."),n()()(),t(263,"tr",14)(264,"td",15)(265,"div",22)(266,"span",23),e(267," p-end-date"),a(268,"br"),n()()(),t(269,"td",18)(270,"code",24),e(271,"string "),n(),t(272,"code",26),e(273," Date"),n()(),t(274,"td",20),e(275,"-"),n(),t(276,"td",21)(277,"em")(278,"strong"),e(279,"(opcional)"),n()(),t(280,"p"),e(281,"Data final."),n()()(),t(282,"tr",14)(283,"td",15)(284,"div",22)(285,"span",23),e(286," p-error-limit"),a(287,"br"),n()()(),t(288,"td",18)(289,"code",25),e(290,"boolean"),n()(),t(291,"td",20)(292,"p")(293,"code"),e(294,"false"),n()()(),t(295,"td",21)(296,"em")(297,"strong"),e(298,"(opcional)"),n()(),t(299,"p"),e(300,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),n(),t(301,"blockquote")(302,"p"),e(303,"Caso essa propriedade seja definida como "),t(304,"code"),e(305,"true"),n(),e(306,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),n()()()(),t(307,"tr",14)(308,"td",15)(309,"div",22)(310,"span",23),e(311," p-field-error-message"),a(312,"br"),n()()(),t(313,"td",18)(314,"code",24),e(315,"string"),n()(),t(316,"td",20),e(317,"-"),n(),t(318,"td",21)(319,"em")(320,"strong"),e(321,"(opcional)"),n()(),t(322,"p"),e(323,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),n(),t(324,"blockquote")(325,"p"),e(326,"Necess\xE1rio que a propriedade "),t(327,"code"),e(328,"p-required"),n(),e(329," esteja habilitada."),n()()()(),t(330,"tr",14)(331,"td",15)(332,"div",22)(333,"span",23),e(334," p-help"),a(335,"br"),n()()(),t(336,"td",18)(337,"code",24),e(338,"string"),n()(),t(339,"td",20),e(340,"-"),n(),t(341,"td",21)(342,"em")(343,"strong"),e(344,"(opcional)"),n()(),t(345,"p"),e(346,"Texto de apoio do campo."),n()()(),t(347,"tr",14)(348,"td",15)(349,"div",16)(350,"span",17),e(351," (p-keydown)"),a(352,"br"),n()()(),t(353,"td",18)(354,"code",19),e(355,"EventEmitter"),n()(),t(356,"td",20),e(357,"-"),n(),t(358,"td",21)(359,"em")(360,"strong"),e(361,"(opcional)"),n()(),t(362,"p"),e(363,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),t(364,"code"),e(365,"KeyboardEvent"),n(),e(366," com informa\xE7\xF5es sobre a tecla."),n()()(),t(367,"tr",14)(368,"td",15)(369,"div",22)(370,"span",23),e(371," p-label"),a(372,"br"),n()()(),t(373,"td",18)(374,"code",24),e(375,"string"),n()(),t(376,"td",20),e(377,"-"),n(),t(378,"td",21)(379,"em")(380,"strong"),e(381,"(opcional)"),n()(),t(382,"p"),e(383,"R\xF3tulo do campo."),n()()(),t(384,"tr",14)(385,"td",15)(386,"div",22)(387,"span",23),e(388," p-literals"),a(389,"br"),n()()(),t(390,"td",18)(391,"code",27),e(392,"PoDatepickerRangeLiterals"),n()(),t(393,"td",20),e(394,"-"),n(),t(395,"td",21)(396,"em")(397,"strong"),e(398,"(opcional)"),n()(),t(399,"p"),e(400,"Objeto com as literais usadas no "),t(401,"code"),e(402,"po-datepicker-range"),n(),e(403,"."),n(),t(404,"p"),e(405,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),n(),t(406,"pre")(407,"code"),e(408,`const customLiterals: PoDatepickerRangeLiterals = {
  invalidFormat: 'Date in inconsistent format',
  startDateGreaterThanEndDate: 'End date less than start date'
};
`),n()(),t(409,"p"),e(410,"Ou passando apenas as literais que deseja customizar:"),n(),t(411,"pre")(412,"code"),e(413,`const customLiterals: PoDatepickerRangeLiterals = {
  invalidFormat: 'Date in inconsistent format'
};
`),n()(),t(414,"p"),e(415,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),n(),t(416,"pre")(417,"code"),e(418,`<po-datepicker-range
  [p-literals]="customLiterals">
</po-datepicker-range>
`),n()(),t(419,"blockquote")(420,"p"),e(421,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(422,"a",28)(423,"code"),e(424,"PoI18nService"),n()(),e(425," ou do browser."),n()()()(),t(426,"tr",14)(427,"td",15)(428,"div",22)(429,"span",23),e(430," p-locale"),a(431,"br"),n()()(),t(432,"td",18)(433,"code",24),e(434,"string"),n()(),t(435,"td",20),e(436,"-"),n(),t(437,"td",21)(438,"em")(439,"strong"),e(440,"(opcional)"),n()(),t(441,"p"),e(442,"Idioma que o calend\xE1rio utilizar\xE1 para exibir as datas."),n(),t(443,"blockquote")(444,"p"),e(445,"O locale padr\xE3o ser\xE1 recuperado com base no "),t(446,"a",28)(447,"code"),e(448,"PoI18nService"),n()(),e(449," ou "),t(450,"em"),e(451,"browser"),n(),e(452,"."),n()()()(),t(453,"tr",14)(454,"td",15)(455,"div",22)(456,"span",23),e(457," p-max-date"),a(458,"br"),n()()(),t(459,"td",18)(460,"code",24),e(461,"string "),n(),t(462,"code",26),e(463," Date"),n()(),t(464,"td",20),e(465,"-"),n(),t(466,"td",21)(467,"em")(468,"strong"),e(469,"(opcional)"),n()(),t(470,"p"),e(471,"Define uma data m\xE1xima para o "),t(472,"code"),e(473,"po-datepicker-range"),n(),e(474,"."),n()()(),t(475,"tr",14)(476,"td",15)(477,"div",22)(478,"span",23),e(479," p-min-date"),a(480,"br"),n()()(),t(481,"td",18)(482,"code",24),e(483,"string "),n(),t(484,"code",26),e(485," Date"),n()(),t(486,"td",20),e(487,"-"),n(),t(488,"td",21)(489,"em")(490,"strong"),e(491,"(opcional)"),n()(),t(492,"p"),e(493,"Define uma data m\xEDnima para o "),t(494,"code"),e(495,"po-datepicker-range"),n(),e(496,"."),n()()(),t(497,"tr",14)(498,"td",15)(499,"div",22)(500,"span",23),e(501," p-no-autocomplete"),a(502,"br"),n()()(),t(503,"td",18)(504,"code",25),e(505,"boolean"),n()(),t(506,"td",20)(507,"p")(508,"code"),e(509,"false"),n()()(),t(510,"td",21)(511,"em")(512,"strong"),e(513,"(opcional)"),n()(),t(514,"p"),e(515,"Define a propriedade nativa "),t(516,"code"),e(517,"autocomplete"),n(),e(518," do campo como "),t(519,"code"),e(520,"off"),n(),e(521,"."),n()()(),t(522,"tr",14)(523,"td",15)(524,"div",16)(525,"span",17),e(526," (p-change)"),a(527,"br"),n()()(),t(528,"td",18)(529,"code",19),e(530,"EventEmitter"),n()(),t(531,"td",20),e(532,"-"),n(),t(533,"td",21)(534,"em")(535,"strong"),e(536,"(opcional)"),n()(),t(537,"p"),e(538,"Evento disparado ao alterar valor do campo."),n()()(),t(539,"tr",14)(540,"td",15)(541,"div",22)(542,"span",23),e(543," p-optional"),a(544,"br"),n()()(),t(545,"td",18)(546,"code",25),e(547,"boolean"),n()(),t(548,"td",20)(549,"p")(550,"code"),e(551,"false"),n()()(),t(552,"td",21)(553,"em")(554,"strong"),e(555,"(opcional)"),n()(),t(556,"p"),e(557,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),n(),t(558,"blockquote")(559,"p"),e(560,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),n()(),t(561,"ul")(562,"li"),e(563,"O campo conter "),t(564,"code"),e(565,"p-required"),n(),e(566,";"),n(),t(567,"li"),e(568,"N\xE3o possuir "),t(569,"code"),e(570,"p-help"),n(),e(571," e/ou "),t(572,"code"),e(573,"p-label"),n(),e(574,"."),n()()()(),t(575,"tr",14)(576,"td",15)(577,"div",22)(578,"span",23),e(579," p-readonly"),a(580,"br"),n()()(),t(581,"td",18)(582,"code",25),e(583,"boolean"),n()(),t(584,"td",20)(585,"p")(586,"code"),e(587,"false"),n()()(),t(588,"td",21)(589,"em")(590,"strong"),e(591,"(opcional)"),n()(),t(592,"p"),e(593,"Indica que o campo ser\xE1 somente leitura."),n()()(),t(594,"tr",14)(595,"td",15)(596,"div",22)(597,"span",23),e(598," p-required"),a(599,"br"),n()()(),t(600,"td",18)(601,"code",25),e(602,"boolean"),n()(),t(603,"td",20)(604,"p")(605,"code"),e(606,"false"),n()()(),t(607,"td",21)(608,"em")(609,"strong"),e(610,"(opcional)"),n()(),t(611,"p"),e(612,"Define que o campo ser\xE1 obrigat\xF3rio."),n()()(),t(613,"tr",14)(614,"td",15)(615,"div",22)(616,"span",23),e(617," p-show-required"),a(618,"br"),n()()(),t(619,"td",18)(620,"code",25),e(621,"boolean"),n()(),t(622,"td",20),e(623,"-"),n(),t(624,"td",21)(625,"p"),e(626,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),n(),t(627,"blockquote")(628,"p"),e(629,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),n()(),t(630,"ul")(631,"li"),e(632,"N\xE3o possuir "),t(633,"code"),e(634,"p-help"),n(),e(635," e/ou "),t(636,"code"),e(637,"p-label"),n(),e(638,"."),n()()()(),t(639,"tr",14)(640,"td",15)(641,"div",22)(642,"span",23),e(643," p-size"),a(644,"br"),n()()(),t(645,"td",18)(646,"code",24),e(647,"string"),n()(),t(648,"td",20)(649,"p")(650,"code"),e(651,"medium"),n()()(),t(652,"td",21)(653,"em")(654,"strong"),e(655,"(opcional)"),n()(),t(656,"p"),e(657,"Define o tamanho do componente:"),n(),t(658,"ul")(659,"li")(660,"code"),e(661,"small"),n(),e(662,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),n(),t(663,"li")(664,"code"),e(665,"medium"),n(),e(666,": altura do input como 44px."),n()(),t(667,"blockquote")(668,"p"),e(669,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(670,"code"),e(671,"medium"),n(),e(672,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(673,"a",29),e(674,"po-theme"),n(),e(675,"."),n()()()(),t(676,"tr",14)(677,"td",15)(678,"div",22)(679,"span",23),e(680," p-start-date"),a(681,"br"),n()()(),t(682,"td",18)(683,"code",24),e(684,"string "),n(),t(685,"code",26),e(686," Date"),n()(),t(687,"td",20),e(688,"-"),n(),t(689,"td",21)(690,"em")(691,"strong"),e(692,"(opcional)"),n()(),t(693,"p"),e(694,"Data inicial."),n()()()(),t(695,"h3",10),e(696,"M\xE9todos"),n(),t(697,"table",30)(698,"tr",14)(699,"th",31)(700,"div",22)(701,"h4")(702,"span",23),e(703," focus "),n()()()()(),t(704,"tr",21)(705,"td",21)(706,"p"),e(707,"Fun\xE7\xE3o que atribui foco ao componente."),n(),t(708,"p"),e(709,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),n(),t(710,"pre")(711,"code"),e(712,`import { PoDatepickerRangeComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerRangeComponent, { static: true }) datepickerRange: PoDatepickerRangeComponent;

focusDatepickerRange() {
  this.datepickerRange.focus();
}
`),n()()()()(),a(713,"br"),t(714,"table",30)(715,"tr",14)(716,"th",31)(717,"div",22)(718,"h4")(719,"span",23),e(720," showAdditionalHelp "),n()()()()(),t(721,"tr",21)(722,"td",21)(723,"p"),e(724,"M\xE9todo que exibe "),t(725,"code"),e(726,"p-additionalHelpTooltip"),n(),e(727," ou executa a a\xE7\xE3o definida em "),t(728,"code"),e(729,"p-additionalHelp"),n(),e(730,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),t(731,"code"),e(732,"p-keydown"),n(),e(733,"."),n(),t(734,"pre")(735,"code"),e(736,`<po-datepicker-range
 #datepickerRange
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, datepickerRange)"
></po-datepicker-range>
`),n()(),t(737,"pre")(738,"code"),e(739,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerRangeComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),n()()()()(),a(740,"br"),t(741,"h3"),e(742,"Interfaces"),n(),t(743,"h4",32)(744,"code",5),e(745,"PoDatepickerRangeLiterals"),n()(),t(746,"div",2)(747,"p"),e(748,"Interface para defini\xE7\xE3o das literais usadas no "),t(749,"code"),e(750,"po-datepicker-range"),n(),e(751,"."),n()(),t(752,"h4",10),e(753,"Propriedades"),n(),t(754,"table",11)(755,"tr",12)(756,"th",13),e(757,"Nome"),n(),t(758,"th",13),e(759,"Tipo"),n(),t(760,"th",13),e(761,"Descri\xE7\xE3o"),n()(),t(762,"tr",14)(763,"td",15)(764,"div",22)(765,"span",23),e(766," dateOutOfPeriod"),a(767,"br"),n()()(),t(768,"td",18)(769,"code",24),e(770,"string"),n()(),t(771,"td",21)(772,"em")(773,"strong"),e(774,"(opcional)"),n()(),t(775,"p"),e(776,"Data fora do per\xEDodo."),n()()(),t(777,"tr",14)(778,"td",15)(779,"div",22)(780,"span",23),e(781," invalidDate"),a(782,"br"),n()()(),t(783,"td",18)(784,"code",24),e(785,"string"),n()(),t(786,"td",21)(787,"em")(788,"strong"),e(789,"(opcional)"),n()(),t(790,"p"),e(791,"Data inv\xE1lida."),n()()(),t(792,"tr",14)(793,"td",15)(794,"div",22)(795,"span",23),e(796," invalidFormat"),a(797,"br"),n()()(),t(798,"td",18)(799,"code",24),e(800,"string"),n()(),t(801,"td",21)(802,"em")(803,"strong"),e(804,"(opcional)"),n()(),t(805,"p"),e(806,"Data em formato inv\xE1lido."),n()()(),t(807,"tr",14)(808,"td",15)(809,"div",22)(810,"span",23),e(811," startDateGreaterThanEndDate"),a(812,"br"),n()()(),t(813,"td",18)(814,"code",24),e(815,"string"),n()(),t(816,"td",21)(817,"em")(818,"strong"),e(819,"(opcional)"),n()(),t(820,"p"),e(821,"Data inicial maior que data final."),n()()()(),t(822,"h4",32)(823,"code",5),e(824,"PoDatepickerRange"),n()(),t(825,"div",2)(826,"p"),e(827,"Interface para defini\xE7\xE3o do objeto com a data inicial e final usadas no "),t(828,"code"),e(829,"po-datepicker-range"),n(),e(830,"."),n(),t(831,"blockquote")(832,"p"),e(833,`Os formatos de data permitidos seguem os padr\xF5es definidos na
`),t(834,"a",33),e(835,"descri\xE7\xE3o do componente"),n(),e(836,"."),n()()(),t(837,"h4",10),e(838,"Propriedades"),n(),t(839,"table",11)(840,"tr",12)(841,"th",13),e(842,"Nome"),n(),t(843,"th",13),e(844,"Tipo"),n(),t(845,"th",13),e(846,"Descri\xE7\xE3o"),n()(),t(847,"tr",14)(848,"td",15)(849,"div",22)(850,"span",23),e(851," end"),a(852,"br"),n()()(),t(853,"td",18)(854,"code",24),e(855,"string "),n(),t(856,"code",26),e(857," Date"),n()(),t(858,"td",21)(859,"p"),e(860,"Data final"),n()()(),t(861,"tr",14)(862,"td",15)(863,"div",22)(864,"span",23),e(865," start"),a(866,"br"),n()()(),t(867,"td",18)(868,"code",24),e(869,"string "),n(),t(870,"code",26),e(871," Date"),n()(),t(872,"td",21)(873,"p"),e(874,"Data inicial"),n()()()()())},dependencies:[C],encapsulation:2})}return l})();var ye=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,o){this.route=d,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let o=d.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||l)(x(le),x(re))};static \u0275cmp=S({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Datepicker Range",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),f("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-datepicker-range-doc"),n(),t(4,"po-tab",3),f("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-datepicker-range-basic-view")(6,"sample-po-datepicker-range-labs-view")(7,"sample-po-datepicker-range-vacations-view")(8,"sample-po-datepicker-range-vacations-reactive-form-view"),n()()()),o&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab==="doc"),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ue,k,D,Se,Ee,ke,Ce,xe],encapsulation:2})}return l})();var ze=[{path:"",component:ye}],Re=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275mod=G({type:l});static \u0275inj=Q({imports:[te.forChild(ze),te]})}return l})();var ht=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275mod=G({type:l});static \u0275inj=Q({imports:[ge,Re]})}return l})();export{ht as DocPoDatepickerRangeModule};
