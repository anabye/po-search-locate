import{o as w,p as ie}from"./chunk-JYNCG2Y6.js";import{Ab as x,F as $,Ga as O,Ra as N,Wa as oe,ha as ee,ja as M,nb as ne,ta as te,zb as C}from"./chunk-HBOGTDFH.js";import{$a as h,Ac as L,Ba as _,Dc as Q,Ea as o,Ec as J,Fa as t,Ga as a,Ic as X,Ka as D,La as g,M as V,Nc as Y,Pc as Z,Rc as j,T as u,U as c,Wa as B,Xa as e,Za as y,ab as S,bb as f,db as I,eb as T,fb as K,ha as p,ia as k,oa as b,pa as q,tc as A,ub as P,wc as G,xc as F,ya as m,yc as W,zc as H}from"./chunk-MIQUIDUB.js";var Se=()=>({label:"Option 1",value:"1"}),fe=()=>({label:"Option 2",value:"2"}),ve=(i,he)=>[i,he],ae=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","radioGroupBasic","p-label","PO Radio Group",3,"p-options"]],template:function(r,n){r&1&&a(0,"po-radio-group",0),r&2&&m("p-options",K(3,ve,I(1,Se),I(2,fe)))},dependencies:[M],encapsulation:2})}return i})();var xe=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group Basic"),t(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-basic"),t(),a(23,"hr")),r&2&&(p(5),_("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",T(4,xe,n.hideSampleCodeTabs)))},dependencies:[P,w,C,x,ae],encapsulation:2})}return i})();var pe=(()=>{class i{additionalHelpTooltip;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];ngOnInit(){this.restore()}addOption(){this.options.push(this.option),this.option=this.getNewOption()}changeEvent(d){this.event=d}restore(){this.additionalHelpTooltip="",this.event="",this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage="",this.size="medium",this.option=this.getNewOption(),this.options=[]}getNewOption(){return{label:void 0,value:void 0}}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-labs"]],standalone:!1,decls:26,vars:29,consts:[["optionForm","ngForm"],["propertiesForm","ngForm"],["name","radioGroupLabs",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-columns","p-disabled","p-help","p-label","p-optional","p-options","p-required","p-field-error-message","p-show-required","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionDisabled","p-label","Option Disabled",1,"po-lg-4",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"click"]],template:function(r,n){if(r&1){let s=D();o(0,"po-radio-group",2),f("ngModelChange",function(l){return u(s),S(n.radioGroup,l)||(n.radioGroup=l),c(l)}),g("p-change",function(){return u(s),c(n.changeEvent("p-change"))})("p-keydown",function(){return u(s),c(n.changeEvent("p-keydown"))}),t(),a(1,"hr"),o(2,"div",3),a(3,"po-info",4)(4,"po-info",5),t(),a(5,"hr"),o(6,"form",null,0)(8,"div",3)(9,"po-input",6),f("ngModelChange",function(l){return u(s),S(n.option.label,l)||(n.option.label=l),c(l)}),t(),o(10,"po-input",7),f("ngModelChange",function(l){return u(s),S(n.option.value,l)||(n.option.value=l),c(l)}),t(),o(11,"po-switch",8),f("ngModelChange",function(l){return u(s),S(n.option.disabled,l)||(n.option.disabled=l),c(l)}),t()(),o(12,"div",3)(13,"po-button",9),g("p-click",function(){u(s);let l=B(7);return n.addOption(),c(l.reset())}),t()()(),a(14,"hr"),o(15,"form",null,1)(17,"po-input",10),f("ngModelChange",function(l){return u(s),S(n.label,l)||(n.label=l),c(l)}),t(),o(18,"po-input",11),f("ngModelChange",function(l){return u(s),S(n.help,l)||(n.help=l),c(l)}),t(),o(19,"po-input",12),f("ngModelChange",function(l){return u(s),S(n.additionalHelpTooltip,l)||(n.additionalHelpTooltip=l),c(l)}),t(),o(20,"po-input",13),f("ngModelChange",function(l){return u(s),S(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),c(l)}),t(),o(21,"po-radio-group",14),f("ngModelChange",function(l){return u(s),S(n.columns,l)||(n.columns=l),c(l)}),t(),o(22,"po-checkbox-group",15),f("ngModelChange",function(l){return u(s),S(n.properties,l)||(n.properties=l),c(l)}),t(),o(23,"po-radio-group",16),f("ngModelChange",function(l){return u(s),S(n.size,l)||(n.size=l),c(l)}),t(),o(24,"div",3)(25,"po-button",17),g("click",function(){return u(s),B(16).reset(),c(n.restore())}),t()()()}if(r&2){let s=B(7);h("ngModel",n.radioGroup),m("p-additional-help-tooltip",n.additionalHelpTooltip)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit")),p(3),m("p-value",n.radioGroup),p(),m("p-value",n.event),p(5),h("ngModel",n.option.label),p(),h("ngModel",n.option.value),p(),h("ngModel",n.option.disabled),p(2),m("p-disabled",s.invalid),p(4),h("ngModel",n.label),p(),h("ngModel",n.help),p(),h("ngModel",n.additionalHelpTooltip),p(),h("ngModel",n.fieldErrorMessage),p(),h("ngModel",n.columns),m("p-options",n.columnOptions),p(),h("ngModel",n.properties),m("p-options",n.propertiesOptions),p(),h("ngModel",n.size),m("p-options",n.sizesOptions)}},dependencies:[L,G,F,H,W,$,ee,M,O,te,oe],encapsulation:2})}return i})();var ye=i=>({"docs-sample-code-tabs":i}),de=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group Labs"),t(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-radio-group
  name="radioGroupLabs"
  [(ngModel)]="radioGroup"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-radio-group>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="radioGroup"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #optionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6 po-lg-4" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6 po-lg-4" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>

    <po-switch class="po-lg-4" name="optionDisabled" [(ngModel)]="option.disabled" p-label="Option Disabled">
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-3"
      p-label="Add Option"
      [p-disabled]="optionForm.invalid"
      (p-click)="addOption(); optionForm.reset()"
    >
    </po-button>
  </div>
</form>

<hr />

<form #propertiesForm="ngForm">
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

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-radio-group
    class="po-md-12"
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
  >
  </po-radio-group>

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
    [p-options]="sizesOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (click)="propertiesForm.reset(); restore()">
    </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-labs',
  templateUrl: './sample-po-radio-group-labs.component.html',
  standalone: false
})
export class SamplePoRadioGroupLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  columns: number;
  event: string;
  help: string;
  label: string;
  option: PoRadioGroupOption;
  options: Array<PoRadioGroupOption>;
  properties: Array<string>;
  radioGroup: string;
  fieldErrorMessage: string;
  size: string;

  readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  readonly sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options.push(this.option);
    this.option = this.getNewOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.event = '';
    this.radioGroup = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';
    this.option = this.getNewOption();
    this.options = [];
  }

  private getNewOption(): PoRadioGroupOption {
    return {
      label: undefined,
      value: undefined
    };
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-labs"),t(),a(23,"hr")),r&2&&(p(5),_("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",T(4,ye,n.hideSampleCodeTabs)))},dependencies:[P,w,C,x,pe],encapsulation:2})}return i})();var se=(()=>{class i{language="es";original="";translated="";languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language])}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-translator"]],standalone:!1,decls:6,vars:5,consts:[["f","ngForm"],[1,"po-row"],["name","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let s=D();o(0,"form",null,0)(2,"div",1)(3,"po-radio-group",2),f("ngModelChange",function(l){return u(s),S(n.language,l)||(n.language=l),c(l)}),g("p-change",function(l){return u(s),c(n.changeLanguage(l))}),t(),o(4,"po-select",3),f("ngModelChange",function(l){return u(s),S(n.original,l)||(n.original=l),c(l)}),g("p-change",function(l){return u(s),c(n.changeLanguage(l))}),t(),o(5,"po-input",4),f("ngModelChange",function(l){return u(s),S(n.translated,l)||(n.translated=l),c(l)}),t()()()}r&2&&(p(3),h("ngModel",n.language),m("p-options",n.languageOptions),p(),h("ngModel",n.original),m("p-options",n.optionsList),p(),h("ngModel",n.translated))},dependencies:[L,G,F,H,W,M,O,N],encapsulation:2})}return i})();var Me=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-translator-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group - Translator"),t(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.html"),t(),o(13,"pre",7),e(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      [(ngModel)]="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage($event)"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      [(ngModel)]="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage($event)"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      [(ngModel)]="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator',
  templateUrl: './sample-po-radio-group-translator.component.html',
  standalone: false
})
export class SamplePoRadioGroupTranslatorComponent {
  language: string = 'es';
  original: string = '';
  translated: string = '';

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  changeLanguage(value) {
    const word = this.wordsOptions.find(item => item.id === this.original);

    if (word) {
      this.translated = word[value || this.language];
    }
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-translator"),t(),a(23,"hr")),r&2&&(p(5),_("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",T(4,Me,n.hideSampleCodeTabs)))},dependencies:[P,w,C,x,se],encapsulation:2})}return i})();var ue=(()=>{class i{formBuilder;translatorForm;languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];constructor(d){this.formBuilder=d}ngOnInit(){this.translatorForm=this.formBuilder.group({language:["es",A.required],original:[void 0,A.required],translated:[void 0,A.required]})}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(s=>s.id===r);n&&this.translatorForm.patchValue({translated:n[d]})}static \u0275fac=function(r){return new(r||i)(k(X))};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-translator-reactive-form"]],standalone:!1,decls:5,vars:3,consts:[[3,"formGroup"],[1,"po-row"],["name","language","formControlName","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","original","formControlName","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","translated","formControlName","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4"]],template:function(r,n){r&1&&(o(0,"form",0)(1,"div",1)(2,"po-radio-group",2),g("p-change",function(){return n.changeLanguage()}),t(),o(3,"po-select",3),g("p-change",function(){return n.changeLanguage()}),t(),a(4,"po-input",4),t()()),r&2&&(m("formGroup",n.translatorForm),p(2),m("p-options",n.languageOptions),p(),m("p-options",n.optionsList))},dependencies:[L,G,F,Q,J,M,O,N],encapsulation:2})}return i})();var Fe=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-translator-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group - Translator Reactive Form"),t(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html"),t(),o(13,"pre",7),e(14,`<form [formGroup]="translatorForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      formControlName="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage()"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      formControlName="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage()"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      formControlName="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator-reactive-form',
  templateUrl: './sample-po-radio-group-translator-reactive-form.component.html',
  standalone: false
})
export class SamplePoRadioGroupTranslatorReactiveFormComponent implements OnInit {
  translatorForm: UntypedFormGroup;

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.translatorForm = this.formBuilder.group({
      language: ['es', Validators.required],
      original: [undefined, Validators.required],
      translated: [undefined, Validators.required]
    });
  }

  changeLanguage() {
    const language = this.translatorForm.value.language;
    const original = this.translatorForm.value.original;

    const word = this.wordsOptions.find(item => item.id === original);

    if (word) {
      this.translatorForm.patchValue({
        translated: word[language]
      });
    }
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-translator-reactive-form"),t(),a(23,"hr")),r&2&&(p(5),_("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",T(4,Fe,n.hideSampleCodeTabs)))},dependencies:[P,w,C,x,ue],encapsulation:2})}return i})();var ge=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-doc"]],standalone:!1,decls:766,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo"],["href","/documentation/po-select"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://doc.animaliads.io/docs/components/radio"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoRadioGroupOption[]"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),o(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),o(16,"h3",3),e(17,"Componente"),t(),o(18,"h4",4)(19,"code",5),e(20,"PoRadioGroupComponent"),t()(),o(21,"div",2)(22,"p"),e(23,"O componente "),o(24,"code"),e(25,"po-radio-group"),t(),e(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),o(27,"a",6)(28,"strong"),e(29,"po-combo"),t()(),e(30," ou "),o(31,"a",7)(32,"strong"),e(33,"po-select"),t()(),e(34,"."),t(),o(35,"p"),e(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),o(37,"a",8)(38,"strong"),e(39,"po-checkbox-group"),t()(),e(40,"."),t(),o(41,"blockquote")(42,"p"),e(43,"Ao passar um valor para o "),o(44,"em"),e(45,"model"),t(),e(46," que n\xE3o esteja na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),o(47,"code"),e(48,"undefined"),t(),e(49,"."),t()(),o(50,"h4"),e(51,"Acessibilidade tratada no componente interno "),o(52,"code"),e(53,"po-radio"),t(),e(54,":"),t(),o(55,"p"),e(56,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),o(57,"ul")(58,"li"),e(59,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),o(60,"a",9),e(61,"WCAG 4.1.2: Name, Role, Value"),t()(),o(62,"li"),e(63,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferen\xE7a visual entre os estados. "),o(64,"a",10),e(65,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),t()(),o(66,"li"),e(67,"Quando em foco, o componente \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),o(68,"a",11),e(69,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),t()(),o(70,"li"),e(71,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),o(72,"a",12),e(73,"(WCAG 2.4.12: Focus Appearance"),t()()(),o(74,"p"),e(75,"Conforme documenta\xE7\xE3o em: "),o(76,"a",13),e(77,"https://doc.animaliads.io/docs/components/radio"),t()(),o(78,"h4"),e(79,"Tokens customiz\xE1veis"),t(),o(80,"p"),e(81,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),a(82,"br"),e(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),o(84,"code"),e(85,"po-radio"),t(),e(86," que comp\xF5em o grupo de op\xE7\xF5es. "),a(87,"br"),e(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),o(89,"code"),e(90,"po-radio"),t(),e(91," em vez do pr\xF3prio "),o(92,"code"),e(93,"po-radio-group"),t(),e(94,"."),t(),o(95,"blockquote")(96,"p"),e(97,"Para maiores informa\xE7\xF5es, acesse o guia "),o(98,"a",14),e(99,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(100,"."),t()(),o(101,"table")(102,"thead")(103,"tr")(104,"th"),e(105,"Propriedade"),t(),o(106,"th"),e(107,"Descri\xE7\xE3o"),t(),o(108,"th"),e(109,"Valor Padr\xE3o"),t()()(),o(110,"tbody")(111,"tr")(112,"td")(113,"strong"),e(114,"Default Values"),t()(),a(115,"td")(116,"td"),t(),o(117,"tr")(118,"td")(119,"code"),e(120,"--border-color"),t()(),o(121,"td"),e(122,"Cor da borda"),t(),o(123,"td")(124,"code"),e(125,"var(--color-neutral-dark-70)"),t()()(),o(126,"tr")(127,"td")(128,"strong"),e(129,"Hover"),t()(),a(130,"td")(131,"td"),t(),o(132,"tr")(133,"td")(134,"code"),e(135,"--shadow-color-hover"),t()(),o(136,"td"),e(137,"Cor da sombra no estado hover"),t(),o(138,"td")(139,"code"),e(140,"var(--color-brand-01-lighter)"),t()()(),o(141,"tr")(142,"td")(143,"code"),e(144,"--color-hover"),t()(),o(145,"td"),e(146,"Cor principal no estado hover"),t(),o(147,"td")(148,"code"),e(149,"var(--color-brand-01-dark)"),t()()(),o(150,"tr")(151,"td")(152,"strong"),e(153,"Focused"),t()(),a(154,"td")(155,"td"),t(),o(156,"tr")(157,"td")(158,"code"),e(159,"--outline-color-focused"),t()(),o(160,"td"),e(161,"Cor do outline do estado de focus"),t(),o(162,"td")(163,"code"),e(164,"var(--color-brand-01-darkest)"),t()()(),o(165,"tr")(166,"td")(167,"strong"),e(168,"checked"),t()(),a(169,"td")(170,"td"),t(),o(171,"tr")(172,"td")(173,"code"),e(174,"--color-unchecked"),t()(),o(175,"td"),e(176,"Cor quando n\xE3o selecionado"),t(),o(177,"td")(178,"code"),e(179,"var(--color-neutral-light-00)"),t()()(),o(180,"tr")(181,"td")(182,"code"),e(183,"--color-checked"),t()(),o(184,"td"),e(185,"Cor quando selecionado"),t(),o(186,"td")(187,"code"),e(188,"var(--color-action-default)"),t()()(),o(189,"tr")(190,"td")(191,"strong"),e(192,"Disabled"),t()(),a(193,"td")(194,"td"),t(),o(195,"tr")(196,"td")(197,"code"),e(198,"--color-unchecked-disabled"),t()(),o(199,"td"),e(200,"Cor pricipal quando n\xE3o selecionado no estado disabled"),t(),o(201,"td")(202,"code"),e(203,"var(--color-neutral-light-30)"),t()()(),o(204,"tr")(205,"td")(206,"code"),e(207,"--color-checked-disabled"),t()(),o(208,"td"),e(209,"Cor pricipal quando selecionado no estado disabled"),t(),o(210,"td")(211,"code"),e(212,"var(--color-neutral-dark-70)"),t()()()()()(),o(213,"div",15)(214,"h4",16),e(215,"Seletor"),t(),o(216,"pre",17),e(217,`<po-radio-group
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change)="EventEmitter"
    p-columns="number"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    name="string"
    p-optional="boolean"
    p-options="PoRadioGroupOption[]"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-radio-group>
`),t()(),o(218,"h4",18),e(219,"Propriedades"),t(),o(220,"table",19)(221,"tr",20)(222,"th",21),e(223,"Nome"),t(),o(224,"th",21),e(225,"Tipo"),t(),o(226,"th",21),e(227,"Padr\xE3o"),t(),o(228,"th",21),e(229,"Descri\xE7\xE3o"),t()(),o(230,"tr",22)(231,"td",23)(232,"div",24)(233,"span",25),e(234," (p-additional-help)"),a(235,"br"),t()()(),o(236,"td",26)(237,"code",27),e(238,"EventEmitter"),t()(),o(239,"td",28),e(240,"-"),t(),o(241,"td",29)(242,"em")(243,"strong"),e(244,"(opcional)"),t()(),o(245,"p"),e(246,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),o(247,"code"),e(248,"p-help"),t(),e(249,"."),t()()(),o(250,"tr",22)(251,"td",23)(252,"div",30)(253,"span",31),e(254," p-additional-help-tooltip"),a(255,"br"),t()()(),o(256,"td",26)(257,"code",32),e(258,"string"),t()(),o(259,"td",28),e(260,"-"),t(),o(261,"td",29)(262,"em")(263,"strong"),e(264,"(opcional)"),t()(),o(265,"p"),e(266,"Exibe um \xEDcone de ajuda adicional ao "),o(267,"code"),e(268,"p-help"),t(),e(269,`, com o texto desta propriedade no tooltip.
Se o evento `),o(270,"code"),e(271,"p-additional-help"),t(),e(272,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),o(273,"strong"),e(274,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),o(275,"blockquote")(276,"p"),e(277,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),o(278,"tr",22)(279,"td",23)(280,"div",30)(281,"span",31),e(282," p-append-in-body"),a(283,"br"),t()()(),o(284,"td",26)(285,"code",33),e(286,"boolean"),t()(),o(287,"td",28)(288,"p")(289,"code"),e(290,"false"),t()()(),o(291,"td",29)(292,"em")(293,"strong"),e(294,"(opcional)"),t()(),o(295,"p"),e(296,"Define que o tooltip ("),o(297,"code"),e(298,"p-additional-help-tooltip"),t(),e(299," e/ou "),o(300,"code"),e(301,"p-error-limit"),t(),e(302,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),o(303,"blockquote")(304,"p"),e(305,"Quando utilizado com "),o(306,"code"),e(307,"p-additional-help-tooltip"),t(),e(308,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),o(309,"tr",22)(310,"td",23)(311,"div",30)(312,"span",31),e(313," p-auto-focus"),a(314,"br"),t()()(),o(315,"td",26)(316,"code",33),e(317,"boolean"),t()(),o(318,"td",28)(319,"p")(320,"code"),e(321,"false"),t()()(),o(322,"td",29)(323,"em")(324,"strong"),e(325,"(opcional)"),t()(),o(326,"p"),e(327,"Aplica foco no elemento ao ser iniciado."),t(),o(328,"blockquote")(329,"p"),e(330,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(331,"tr",22)(332,"td",23)(333,"div",24)(334,"span",25),e(335," (p-change)"),a(336,"br"),t()()(),o(337,"td",26)(338,"code",27),e(339,"EventEmitter"),t()(),o(340,"td",28),e(341,"-"),t(),o(342,"td",29)(343,"em")(344,"strong"),e(345,"(opcional)"),t()(),o(346,"p"),e(347,"Evento ao alterar valor do campo."),t()()(),o(348,"tr",22)(349,"td",23)(350,"div",30)(351,"span",31),e(352," p-columns"),a(353,"br"),t()()(),o(354,"td",26)(355,"code",34),e(356,"number"),t()(),o(357,"td",28)(358,"p")(359,"code"),e(360,"2"),t()()(),o(361,"td",29)(362,"em")(363,"strong"),e(364,"(opcional)"),t()(),o(365,"p"),e(366,"Define a quantidade de colunas para exibi\xE7\xE3o das op\xE7\xF5es."),t(),o(367,"p")(368,"strong"),e(369,"Considera\xE7\xF5es:"),t()(),o(370,"ul")(371,"li"),e(372,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),o(373,"code"),e(374,"1"),t(),e(375," e "),o(376,"code"),e(377,"4"),t(),e(378," colunas."),t(),o(379,"li"),e(380,"O n\xFAmero m\xE1ximo de colunas \xE9 invari\xE1vel nas seguintes resolu\xE7\xF5es:"),o(381,"ul")(382,"li")(383,"code"),e(384,"sm"),t(),e(385,": "),o(386,"code"),e(387,"1"),t()(),o(388,"li")(389,"code"),e(390,"md"),t(),e(391,": "),o(392,"code"),e(393,"2"),t()()()()()()(),o(394,"tr",22)(395,"td",23)(396,"div",30)(397,"span",31),e(398," p-disabled"),a(399,"br"),t()()(),o(400,"td",26)(401,"code",33),e(402,"boolean"),t()(),o(403,"td",28)(404,"p")(405,"code"),e(406,"false"),t()()(),o(407,"td",29)(408,"em")(409,"strong"),e(410,"(opcional)"),t()(),o(411,"p"),e(412,"Indica que o campo ser\xE1 desabilitado."),t()()(),o(413,"tr",22)(414,"td",23)(415,"div",30)(416,"span",31),e(417," p-error-limit"),a(418,"br"),t()()(),o(419,"td",26)(420,"code",33),e(421,"boolean"),t()(),o(422,"td",28)(423,"p")(424,"code"),e(425,"false"),t()()(),o(426,"td",29)(427,"em")(428,"strong"),e(429,"(opcional)"),t()(),o(430,"p"),e(431,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),o(432,"blockquote")(433,"p"),e(434,"Caso essa propriedade seja definida como "),o(435,"code"),e(436,"true"),t(),e(437,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),o(438,"tr",22)(439,"td",23)(440,"div",30)(441,"span",31),e(442," p-field-error-message"),a(443,"br"),t()()(),o(444,"td",26)(445,"code",32),e(446,"string"),t()(),o(447,"td",28),e(448,"-"),t(),o(449,"td",29)(450,"em")(451,"strong"),e(452,"(opcional)"),t()(),o(453,"p"),e(454,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),o(455,"blockquote")(456,"p"),e(457,"Necess\xE1rio que a propriedade "),o(458,"code"),e(459,"p-required"),t(),e(460," esteja habilitada."),t()()()(),o(461,"tr",22)(462,"td",23)(463,"div",30)(464,"span",31),e(465," p-help"),a(466,"br"),t()()(),o(467,"td",26)(468,"code",32),e(469,"string"),t()(),o(470,"td",28),e(471,"-"),t(),o(472,"td",29)(473,"em")(474,"strong"),e(475,"(opcional)"),t()(),o(476,"p"),e(477,"Texto de apoio do campo."),t()()(),o(478,"tr",22)(479,"td",23)(480,"div",24)(481,"span",25),e(482," (p-keydown)"),a(483,"br"),t()()(),o(484,"td",26)(485,"code",27),e(486,"EventEmitter"),t()(),o(487,"td",28),e(488,"-"),t(),o(489,"td",29)(490,"em")(491,"strong"),e(492,"(opcional)"),t()(),o(493,"p"),e(494,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(495,"code"),e(496,"KeyboardEvent"),t(),e(497," com informa\xE7\xF5es sobre a tecla."),t()()(),o(498,"tr",22)(499,"td",23)(500,"div",30)(501,"span",31),e(502," p-label"),a(503,"br"),t()()(),o(504,"td",26)(505,"code",32),e(506,"string"),t()(),o(507,"td",28),e(508,"-"),t(),o(509,"td",29)(510,"em")(511,"strong"),e(512,"(opcional)"),t()(),o(513,"p"),e(514,"Label do campo."),t()()(),o(515,"tr",22)(516,"td",23)(517,"div",30)(518,"span",31),e(519," name"),a(520,"br"),t()()(),o(521,"td",26)(522,"code",32),e(523,"string"),t()(),o(524,"td",28),e(525,"-"),t(),o(526,"td",29)(527,"p"),e(528,"Nome das op\xE7\xF5es."),t()()(),o(529,"tr",22)(530,"td",23)(531,"div",30)(532,"span",31),e(533," p-optional"),a(534,"br"),t()()(),o(535,"td",26)(536,"code",33),e(537,"boolean"),t()(),o(538,"td",28)(539,"p")(540,"code"),e(541,"false"),t()()(),o(542,"td",29)(543,"em")(544,"strong"),e(545,"(opcional)"),t()(),o(546,"p"),e(547,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),o(548,"blockquote")(549,"p"),e(550,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(551,"ul")(552,"li"),e(553,"O campo conter "),o(554,"code"),e(555,"p-required"),t(),e(556,";"),t(),o(557,"li"),e(558,"N\xE3o possuir "),o(559,"code"),e(560,"p-help"),t(),e(561," e/ou "),o(562,"code"),e(563,"p-label"),t(),e(564,"."),t()()()(),o(565,"tr",22)(566,"td",23)(567,"div",30)(568,"span",31),e(569," p-options"),a(570,"br"),t()()(),o(571,"td",26)(572,"code",35),e(573,"PoRadioGroupOption[]"),t()(),o(574,"td",28),e(575,"-"),t(),o(576,"td",29)(577,"p"),e(578,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),t()()(),o(579,"tr",22)(580,"td",23)(581,"div",30)(582,"span",31),e(583," p-required"),a(584,"br"),t()()(),o(585,"td",26)(586,"code",33),e(587,"boolean"),t()(),o(588,"td",28)(589,"p")(590,"code"),e(591,"false"),t()()(),o(592,"td",29)(593,"em")(594,"strong"),e(595,"(opcional)"),t()(),o(596,"p"),e(597,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),o(598,"tr",22)(599,"td",23)(600,"div",30)(601,"span",31),e(602," p-show-required"),a(603,"br"),t()()(),o(604,"td",26)(605,"code",33),e(606,"boolean"),t()(),o(607,"td",28),e(608,"-"),t(),o(609,"td",29)(610,"p"),e(611,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),o(612,"blockquote")(613,"p"),e(614,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(615,"ul")(616,"li"),e(617,"N\xE3o possuir "),o(618,"code"),e(619,"p-help"),t(),e(620," e/ou "),o(621,"code"),e(622,"p-label"),t(),e(623,"."),t()()()(),o(624,"tr",22)(625,"td",23)(626,"div",30)(627,"span",31),e(628," p-size"),a(629,"br"),t()()(),o(630,"td",26)(631,"code",32),e(632,"string"),t()(),o(633,"td",28)(634,"p")(635,"code"),e(636,"medium"),t()()(),o(637,"td",29)(638,"em")(639,"strong"),e(640,"(opcional)"),t()(),o(641,"p"),e(642,"Define o tamanho dos radios do componente:"),t(),o(643,"ul")(644,"li")(645,"code"),e(646,"small"),t(),e(647,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(648,"li")(649,"code"),e(650,"medium"),t(),e(651,": 24x24."),t()(),o(652,"blockquote")(653,"p"),e(654,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(655,"code"),e(656,"medium"),t(),e(657,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(658,"a",36),e(659,"po-theme"),t(),e(660,"."),t()()()()(),o(661,"h3",18),e(662,"M\xE9todos"),t(),o(663,"table",37)(664,"tr",22)(665,"th",38)(666,"div",30)(667,"h4")(668,"span",31),e(669," focus "),t()()()()(),o(670,"tr",29)(671,"td",29)(672,"p"),e(673,"Fun\xE7\xE3o que atribui foco ao componente."),t(),o(674,"p"),e(675,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),o(676,"pre")(677,"code"),e(678,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),t()()()()(),a(679,"br"),o(680,"table",37)(681,"tr",22)(682,"th",38)(683,"div",30)(684,"h4")(685,"span",31),e(686," showAdditionalHelp "),t()()()()(),o(687,"tr",29)(688,"td",29)(689,"p"),e(690,"M\xE9todo que exibe "),o(691,"code"),e(692,"p-additionalHelpTooltip"),t(),e(693," ou executa a a\xE7\xE3o definida em "),o(694,"code"),e(695,"p-additionalHelp"),t(),e(696,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),o(697,"code"),e(698,"p-keydown"),t(),e(699,"."),t(),o(700,"pre")(701,"code"),e(702,`<po-radio-group
 #radioGroup
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),t()(),o(703,"pre")(704,"code"),e(705,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(706,"br"),o(707,"h3"),e(708,"Interfaces"),t(),o(709,"h4",39)(710,"code",5),e(711,"PoRadioGroupOption"),t()(),o(712,"div",2)(713,"p"),e(714,"Interface para as a\xE7\xF5es do componente po-radio-group."),t()(),o(715,"h4",18),e(716,"Propriedades"),t(),o(717,"table",19)(718,"tr",20)(719,"th",21),e(720,"Nome"),t(),o(721,"th",21),e(722,"Tipo"),t(),o(723,"th",21),e(724,"Descri\xE7\xE3o"),t()(),o(725,"tr",22)(726,"td",23)(727,"div",30)(728,"span",31),e(729," disabled"),a(730,"br"),t()()(),o(731,"td",26)(732,"code",33),e(733,"boolean"),t()(),o(734,"td",29)(735,"em")(736,"strong"),e(737,"(opcional)"),t()(),o(738,"p"),e(739,"Desabilita o radio."),t()()(),o(740,"tr",22)(741,"td",23)(742,"div",30)(743,"span",31),e(744," label"),a(745,"br"),t()()(),o(746,"td",26)(747,"code",32),e(748,"string"),t()(),o(749,"td",29)(750,"p"),e(751,"Texto do radio."),t()()(),o(752,"tr",22)(753,"td",23)(754,"div",30)(755,"span",31),e(756," value"),a(757,"br"),t()()(),o(758,"td",26)(759,"code",32),e(760,"string "),t(),o(761,"code",34),e(762," number"),t()(),o(763,"td",29)(764,"p"),e(765,"Valor do radio."),t()()()()())},dependencies:[w],encapsulation:2})}return i})();var be=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||i)(k(Y),k(Z))};static \u0275cmp=b({type:i,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Radio Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-radio-group-doc"),t(),o(4,"po-tab",3),g("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-radio-group-basic-view")(6,"sample-po-radio-group-labs-view")(7,"sample-po-radio-group-translator-view")(8,"sample-po-radio-group-translator-reactive-form-view"),t()()()),r&2&&(m("p-actions",n.actions),p(2),m("p-active",n.activeTab==="doc"),p(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ne,C,x,le,de,me,ce,ge],encapsulation:2})}return i})();var ke=[{path:"",component:be}],Ee=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=q({type:i});static \u0275inj=V({imports:[j.forChild(ke),j]})}return i})();var dt=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=q({type:i});static \u0275inj=V({imports:[ie,Ee]})}return i})();export{dt as DocPoRadioGroupModule};
