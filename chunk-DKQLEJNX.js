import{o as w,p as re}from"./chunk-MMZVQUBQ.js";import{Ab as y,F as R,Fa as ie,Ga as F,I as ee,La as A,Pa as oe,Ra as ae,Wa as B,ha as te,ja as ne,nb as le,zb as C}from"./chunk-522XRIZO.js";import{Ac as K,Ba as P,Bc as z,Ec as Z,Fa as n,Fc as X,Ga as t,Ha as o,Jc as J,La as V,M as I,Ma as S,Oc as Y,Qc as $,Sc as O,T as c,U as u,Ua as H,Va as j,Wa as G,Xa as U,Ya as e,_a as _,ab as h,bb as v,cb as x,fb as M,ha as p,ia as q,oa as b,pa as D,uc as g,vb as k,xc as L,ya as s,yc as N,zc as Q}from"./chunk-WFKG4FNY.js";var pe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","input","p-label","PO Input"]],template:function(r,i){r&1&&o(0,"po-input",0)},dependencies:[F],encapsulation:2})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input Basic"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-basic/sample-po-input-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-basic/sample-po-input-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-basic"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,ve,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,pe],encapsulation:2})}return a})();var se=(()=>{class a{additionalHelpTooltip;input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;size;iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"maskFormatModel",label:"Formatted Model"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"uppercase",label:"Upper Case"},{value:"showRequired",label:"Show Required"},{value:"maskNoLengthValidation",label:"Mask No Length Validation"},{value:"errorLimit",label:"Limit Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.additionalHelpTooltip="",this.input=void 0,this.size="medium"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-labs"]],standalone:!1,decls:22,vars:41,consts:[["f","ngForm"],["name","input",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-mask","p-mask-format-model","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-required","p-required-field-error-message","p-readonly","p-upper-case","p-show-required","p-mask-no-length-validation","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","mask","p-clean","","p-help","Ex.: Zip code: '99999-999'; License plate: '@@@-9999'","p-label","Mask",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'","p-label","Pattern (Regex)",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let d=V();n(0,"po-input",1),x("ngModelChange",function(l){return c(d),v(i.input,l)||(i.input=l),u(l)}),S("p-blur",function(){return c(d),u(i.changeEvent("p-blur"))})("p-change",function(){return c(d),u(i.changeEvent("p-change"))})("p-change-model",function(){return c(d),u(i.changeEvent("p-change-model"))})("p-enter",function(){return c(d),u(i.changeEvent("p-enter"))})("p-keydown",function(){return c(d),u(i.changeEvent("p-keydown"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),n(6,"form",null,0)(8,"po-input",5),x("ngModelChange",function(l){return c(d),v(i.label,l)||(i.label=l),u(l)}),t(),n(9,"po-input",6),x("ngModelChange",function(l){return c(d),v(i.help,l)||(i.help=l),u(l)}),t(),n(10,"po-input",7),x("ngModelChange",function(l){return c(d),v(i.additionalHelpTooltip,l)||(i.additionalHelpTooltip=l),u(l)}),t(),n(11,"po-input",8),x("ngModelChange",function(l){return c(d),v(i.placeholder,l)||(i.placeholder=l),u(l)}),t(),n(12,"po-input",9),x("ngModelChange",function(l){return c(d),v(i.errorPattern,l)||(i.errorPattern=l),u(l)}),t(),n(13,"po-input",10),x("ngModelChange",function(l){return c(d),v(i.mask,l)||(i.mask=l),u(l)}),t(),n(14,"po-input",11),x("ngModelChange",function(l){return c(d),v(i.pattern,l)||(i.pattern=l),u(l)}),t(),n(15,"po-number",12),x("ngModelChange",function(l){return c(d),v(i.minlength,l)||(i.minlength=l),u(l)}),t(),n(16,"po-number",13),x("ngModelChange",function(l){return c(d),v(i.maxlength,l)||(i.maxlength=l),u(l)}),t(),n(17,"po-select",14),x("ngModelChange",function(l){return c(d),v(i.icon,l)||(i.icon=l),u(l)}),t(),n(18,"po-checkbox-group",15),x("ngModelChange",function(l){return c(d),v(i.properties,l)||(i.properties=l),u(l)}),t(),n(19,"po-radio-group",16),x("ngModelChange",function(l){return c(d),v(i.size,l)||(i.size=l),u(l)}),t(),n(20,"div",2)(21,"po-button",17),S("p-click",function(){return c(d),U(7).reset(),u(i.restore())}),t()()()}r&2&&(h("ngModel",i.input),s("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties==null?null:i.properties.includes("clean"))("p-disabled",i.properties==null?null:i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-mask",i.mask)("p-mask-format-model",i.properties==null?null:i.properties.includes("maskFormatModel"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties==null?null:i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-required",i.properties==null?null:i.properties.includes("required"))("p-required-field-error-message",i.properties==null?null:i.properties.includes("requiredFieldErrorMessage"))("p-readonly",i.properties==null?null:i.properties.includes("readonly"))("p-upper-case",i.properties==null?null:i.properties.includes("uppercase"))("p-show-required",i.properties==null?null:i.properties.includes("showRequired"))("p-mask-no-length-validation",i.properties==null?null:i.properties.includes("maskNoLengthValidation"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),p(3),s("p-value",i.input),p(),s("p-value",i.event),p(4),h("ngModel",i.label),p(),h("ngModel",i.help),p(),h("ngModel",i.additionalHelpTooltip),p(),h("ngModel",i.placeholder),p(),h("ngModel",i.errorPattern),p(),h("ngModel",i.mask),p(),h("ngModel",i.pattern),p(),h("ngModel",i.minlength),p(),h("ngModel",i.maxlength),p(),h("ngModel",i.icon),s("p-options",i.iconOptions),p(),h("ngModel",i.properties),s("p-options",i.propertiesOptions),p(),h("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[z,L,N,K,Q,R,te,ne,F,A,ae,B],encapsulation:2})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input Labs"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-labs/sample-po-input-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-input
  name="input"
  [(ngModel)]="input"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties?.includes('clean')"
  [p-disabled]="properties?.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-mask]="mask"
  [p-mask-format-model]="properties?.includes('maskFormatModel')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties?.includes('optional')"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-required]="properties?.includes('required')"
  [p-required-field-error-message]="properties?.includes('requiredFieldErrorMessage')"
  [p-readonly]="properties?.includes('readonly')"
  [p-upper-case]="properties?.includes('uppercase')"
  [p-show-required]="properties?.includes('showRequired')"
  [p-mask-no-length-validation]="properties?.includes('maskNoLengthValidation')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-input>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="input"> </po-info>

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

  <po-input
    class="po-md-12 po-lg-6"
    name="mask"
    [(ngModel)]="mask"
    p-clean
    p-help="Ex.: Zip code: '99999-999'; License plate: '@@@-9999'"
    p-label="Mask"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

  <po-select class="po-md-6" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); this.restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-labs/sample-po-input-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-input-labs',
  templateUrl: './sample-po-input-labs.component.html',
  standalone: false
})
export class SamplePoInputLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  input: string;
  errorPattern: string;
  event: string;
  help: string;
  icon: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'maskFormatModel', label: 'Formatted Model' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'uppercase', label: 'Upper Case' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'maskNoLengthValidation', label: 'Mask No Length Validation' },
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
    this.input = undefined;
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-labs"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,ye,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,se],encapsulation:2})}return a})();var Pe=["reactiveFormData"],ue=(()=>{class a{fb;reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};constructor(m){this.fb=m,this.createReactiveForm()}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",g.compose([g.required,g.minLength(5),g.maxLength(30)])],address:["",g.compose([g.required,g.minLength(5),g.maxLength(50)])],number:["",g.compose([g.required,g.min(1),g.max(99999)])],email:["",g.required],website:["",g.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(r){return new(r||a)(q(J))};static \u0275cmp=b({type:a,selectors:[["sample-po-input-reactive-form"]],viewQuery:function(r,i){if(r&1&&H(Pe,7),r&2){let d;j(d=G())&&(i.reactiveFormModal=d.first)}},standalone:!1,decls:23,vars:8,consts:[["reactiveFormData",""],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-md-12"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"]],template:function(r,i){if(r&1){let d=V();n(0,"form",1)(1,"div",2),o(2,"po-input",3),t(),n(3,"div",2),o(4,"po-input",4)(5,"po-number",5),t(),n(6,"div",2),o(7,"po-email",6)(8,"po-url",7),t(),n(9,"div",2)(10,"po-button",8),S("p-click",function(){return c(d),u(i.saveForm())}),t()()(),n(11,"po-modal",9,0)(13,"div",2),o(14,"po-info",10),t(),o(15,"hr"),n(16,"div",2),o(17,"po-info",11)(18,"po-info",12),t(),o(19,"hr"),n(20,"div",2),o(21,"po-info",13)(22,"po-info",14),t()()}r&2&&(s("formGroup",i.reactiveForm),p(10),s("p-disabled",!i.reactiveForm.valid),p(),s("p-primary-action",i.modalPrimaryAction),p(3),s("p-value",i.reactiveForm.controls.name.value),p(3),s("p-value",i.reactiveForm.controls.address.value),p(),s("p-value",i.reactiveForm.controls.number.value),p(3),s("p-value",i.reactiveForm.controls.email.value),p(),s("p-value",i.reactiveForm.controls.website.value))},dependencies:[z,L,N,Z,X,R,ie,F,A,oe,B,ee],encapsulation:2})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input - Reactive Form"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="reactiveForm">
  <div class="po-row">
    <po-input class="po-md-12" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-9" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address"> </po-input>

    <po-number class="po-lg-3" formControlName="number" p-label="Number" p-clean> </po-number>
  </div>

  <div class="po-row">
    <po-email class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-url class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
  </div>
</form>

<po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

    <po-info class="po-md-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

    <po-info class="po-md-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-input-reactive-form',
  templateUrl: './sample-po-input-reactive-form.component.html',
  standalone: false
})
export class SamplePoInputReactiveFormComponent {
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;

  reactiveForm: UntypedFormGroup;

  public readonly modalPrimaryAction: PoModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  constructor(private fb: UntypedFormBuilder) {
    this.createReactiveForm();
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-reactive-form"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Me,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,ue],encapsulation:2})}return a})();var be=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-doc"]],standalone:!1,decls:1142,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoInputComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),o(209,"br"),t(),n(210,"div",8)(211,"h4",9),e(212,"Seletor"),t(),n(213,"pre",10),e(214,`<po-input
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
    p-maxlength="number"
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
    p-upper-case="boolean" >
</po-input>
`),t()(),n(215,"h4",11),e(216,"Propriedades"),t(),n(217,"table",12)(218,"tr",13)(219,"th",14),e(220,"Nome"),t(),n(221,"th",14),e(222,"Tipo"),t(),n(223,"th",14),e(224,"Padr\xE3o"),t(),n(225,"th",14),e(226,"Descri\xE7\xE3o"),t()(),n(227,"tr",15)(228,"td",16)(229,"div",17)(230,"span",18),e(231," (p-additional-help)"),o(232,"br"),t()()(),n(233,"td",19)(234,"code",20),e(235,"EventEmitter"),t()(),n(236,"td",21),e(237,"-"),t(),n(238,"td",22)(239,"em")(240,"strong"),e(241,"(opcional)"),t()(),n(242,"p"),e(243,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(244,"code"),e(245,"p-help"),t(),e(246,"."),t()()(),n(247,"tr",15)(248,"td",16)(249,"div",23)(250,"span",24),e(251," p-additional-help-tooltip"),o(252,"br"),t()()(),n(253,"td",19)(254,"code",25),e(255,"string"),t()(),n(256,"td",21),e(257,"-"),t(),n(258,"td",22)(259,"em")(260,"strong"),e(261,"(opcional)"),t()(),n(262,"p"),e(263,"Exibe um \xEDcone de ajuda adicional ao "),n(264,"code"),e(265,"p-help"),t(),e(266,`, com o texto desta propriedade no tooltip.
Se o evento `),n(267,"code"),e(268,"p-additional-help"),t(),e(269,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(270,"strong"),e(271,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(272,"blockquote")(273,"p"),e(274,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),n(275,"tr",15)(276,"td",16)(277,"div",23)(278,"span",24),e(279," p-append-in-body"),o(280,"br"),t()()(),n(281,"td",19)(282,"code",26),e(283,"boolean"),t()(),n(284,"td",21)(285,"p")(286,"code"),e(287,"false"),t()()(),n(288,"td",22)(289,"em")(290,"strong"),e(291,"(opcional)"),t()(),n(292,"p"),e(293,"Define que o tooltip ("),n(294,"code"),e(295,"p-additional-help-tooltip"),t(),e(296," e/ou "),n(297,"code"),e(298,"p-error-limit"),t(),e(299,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(300,"blockquote")(301,"p"),e(302,"Quando utilizado com "),n(303,"code"),e(304,"p-additional-help-tooltip"),t(),e(305,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(306,"tr",15)(307,"td",16)(308,"div",23)(309,"span",24),e(310," p-auto-focus"),o(311,"br"),t()()(),n(312,"td",19)(313,"code",26),e(314,"boolean"),t()(),n(315,"td",21)(316,"p")(317,"code"),e(318,"false"),t()()(),n(319,"td",22)(320,"em")(321,"strong"),e(322,"(opcional)"),t()(),n(323,"p"),e(324,"Aplica foco no elemento ao ser iniciado."),t(),n(325,"blockquote")(326,"p"),e(327,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(328,"tr",15)(329,"td",16)(330,"div",17)(331,"span",18),e(332," (p-blur)"),o(333,"br"),t()()(),n(334,"td",19)(335,"code",20),e(336,"EventEmitter"),t()(),n(337,"td",21),e(338,"-"),t(),n(339,"td",22)(340,"em")(341,"strong"),e(342,"(opcional)"),t()(),n(343,"p"),e(344,"Evento disparado ao sair do campo."),t()()(),n(345,"tr",15)(346,"td",16)(347,"div",17)(348,"span",18),e(349," (p-change)"),o(350,"br"),t()()(),n(351,"td",19)(352,"code",20),e(353,"EventEmitter"),t()(),n(354,"td",21),e(355,"-"),t(),n(356,"td",22)(357,"em")(358,"strong"),e(359,"(opcional)"),t()(),n(360,"p"),e(361,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(362,"tr",15)(363,"td",16)(364,"div",17)(365,"span",18),e(366," (p-change-model)"),o(367,"br"),t()()(),n(368,"td",19)(369,"code",20),e(370,"EventEmitter"),t()(),n(371,"td",21),e(372,"-"),t(),n(373,"td",22)(374,"em")(375,"strong"),e(376,"(opcional)"),t()(),n(377,"p"),e(378,"Evento disparado ao alterar valor do model."),t()()(),n(379,"tr",15)(380,"td",16)(381,"div",23)(382,"span",24),e(383,"p-clean"),o(384,"br"),t()()(),n(385,"td",19)(386,"code",26),e(387,"boolean"),t()(),n(388,"td",21),e(389,"-"),t(),n(390,"td",22)(391,"em")(392,"strong"),e(393,"(opcional)"),t()(),n(394,"p"),e(395,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(396,"tr",15)(397,"td",16)(398,"div",23)(399,"span",24),e(400,"p-disabled"),o(401,"br"),t()()(),n(402,"td",19)(403,"code",26),e(404,"boolean"),t()(),n(405,"td",21)(406,"p")(407,"code"),e(408,"false"),t()()(),n(409,"td",22)(410,"em")(411,"strong"),e(412,"(opcional)"),t()(),n(413,"p"),e(414,"Se verdadeiro, desabilita o campo."),t()()(),n(415,"tr",15)(416,"td",16)(417,"div",23)(418,"span",24),e(419," p-emit-all-changes"),o(420,"br"),t()()(),n(421,"td",19)(422,"code",26),e(423,"boolean"),t()(),n(424,"td",21)(425,"p")(426,"code"),e(427,"false"),t()()(),n(428,"td",22)(429,"em")(430,"strong"),e(431,"(opcional)"),t()(),n(432,"p"),e(433,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(434,"tr",15)(435,"td",16)(436,"div",17)(437,"span",18),e(438," (p-enter)"),o(439,"br"),t()()(),n(440,"td",19)(441,"code",20),e(442,"EventEmitter"),t()(),n(443,"td",21),e(444,"-"),t(),n(445,"td",22)(446,"em")(447,"strong"),e(448,"(opcional)"),t()(),n(449,"p"),e(450,"Evento disparado ao entrar do campo."),t()()(),n(451,"tr",15)(452,"td",16)(453,"div",23)(454,"span",24),e(455," p-error-async-properties"),o(456,"br"),t()()(),n(457,"td",19)(458,"code",27),e(459,"ErrorAsyncProperties"),t()(),n(460,"td",21),e(461,"-"),t(),n(462,"td",22)(463,"em")(464,"strong"),e(465,"(opcional)"),t()(),n(466,"p"),e(467,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(468,"code"),e(469,"Reactive Forms"),t(),e(470,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(471,"code"),e(472,"asyncValidators"),t(),e(473,"."),t()()(),n(474,"tr",15)(475,"td",16)(476,"div",23)(477,"span",24),e(478," p-error-limit"),o(479,"br"),t()()(),n(480,"td",19)(481,"code",26),e(482,"boolean"),t()(),n(483,"td",21)(484,"p")(485,"code"),e(486,"false"),t()()(),n(487,"td",22)(488,"em")(489,"strong"),e(490,"(opcional)"),t()(),n(491,"p"),e(492,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(493,"blockquote")(494,"p"),e(495,"Caso essa propriedade seja definida como "),n(496,"code"),e(497,"true"),t(),e(498,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(499,"tr",15)(500,"td",16)(501,"div",23)(502,"span",24),e(503," p-error-pattern"),o(504,"br"),t()()(),n(505,"td",19)(506,"code",25),e(507,"string"),t()(),n(508,"td",21),e(509,"-"),t(),n(510,"td",22)(511,"em")(512,"strong"),e(513,"(opcional)"),t()(),n(514,"p"),e(515,"Mensagem que ser\xE1 apresentada quando o "),n(516,"code"),e(517,"pattern"),t(),e(518," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(519,"blockquote")(520,"p"),e(521,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(522,"code"),e(523,"p-required-field-error-message"),t(),e(524," em conjunto."),t()()()(),n(525,"tr",15)(526,"td",16)(527,"div",23)(528,"span",24),e(529," p-help"),o(530,"br"),t()()(),n(531,"td",19)(532,"code",25),e(533,"string"),t()(),n(534,"td",21),e(535,"-"),t(),n(536,"td",22)(537,"em")(538,"strong"),e(539,"(opcional)"),t()(),n(540,"p"),e(541,"Texto de apoio do campo."),t()()(),n(542,"tr",15)(543,"td",16)(544,"div",23)(545,"span",24),e(546," p-icon"),o(547,"br"),t()()(),n(548,"td",19)(549,"code",25),e(550,"string "),t(),n(551,"code",28),e(552," TemplateRef<void>"),t()(),n(553,"td",21),e(554,"-"),t(),n(555,"td",22)(556,"em")(557,"strong"),e(558,"(opcional)"),t()(),n(559,"p"),e(560,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(561,"p"),e(562,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(563,"a",29),e(564,"Biblioteca de \xEDcones"),t(),e(565,". conforme exemplo abaixo:"),t(),n(566,"pre")(567,"code"),e(568,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(569,"p"),e(570,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(571,"em"),e(572,"Font Awesome"),t(),e(573,", da seguinte forma:"),t(),n(574,"pre")(575,"code"),e(576,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(577,"p"),e(578,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(579,"code"),e(580,"TemplateRef"),t(),e(581,", conforme exemplo abaixo:"),t(),n(582,"pre")(583,"code"),e(584,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(585,"blockquote")(586,"p"),e(587,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(588,"code"),e(589,"font-size: inherit"),t(),e(590," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(591,"tr",15)(592,"td",16)(593,"div",17)(594,"span",18),e(595," (p-keydown)"),o(596,"br"),t()()(),n(597,"td",19)(598,"code",20),e(599,"EventEmitter"),t()(),n(600,"td",21),e(601,"-"),t(),n(602,"td",22)(603,"em")(604,"strong"),e(605,"(opcional)"),t()(),n(606,"p"),e(607,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(608,"code"),e(609,"KeyboardEvent"),t(),e(610," com informa\xE7\xF5es sobre a tecla."),t()()(),n(611,"tr",15)(612,"td",16)(613,"div",23)(614,"span",24),e(615," p-label"),o(616,"br"),t()()(),n(617,"td",19)(618,"code",25),e(619,"string"),t()(),n(620,"td",21),e(621,"-"),t(),n(622,"td",22)(623,"em")(624,"strong"),e(625,"(opcional)"),t()(),n(626,"p"),e(627,"R\xF3tulo do campo."),t()()(),n(628,"tr",15)(629,"td",16)(630,"div",23)(631,"span",24),e(632,"p-mask"),o(633,"br"),t()()(),n(634,"td",19)(635,"code",25),e(636,"string"),t()(),n(637,"td",21),e(638,"-"),t(),n(639,"td",22)(640,"em")(641,"strong"),e(642,"(opcional)"),t()(),n(643,"p"),e(644,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(645,"tr",15)(646,"td",16)(647,"div",23)(648,"span",24),e(649,"p-mask-format-model"),o(650,"br"),t()()(),n(651,"td",19)(652,"code",26),e(653,"boolean"),t()(),n(654,"td",21)(655,"p")(656,"code"),e(657,"false"),t()()(),n(658,"td",22)(659,"em")(660,"strong"),e(661,"(opcional)"),t()(),n(662,"p"),e(663,"Indica se o "),n(664,"code"),e(665,"model"),t(),e(666," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(667,"tr",15)(668,"td",16)(669,"div",23)(670,"span",24),e(671," p-mask-no-length-validation"),o(672,"br"),t()()(),n(673,"td",19)(674,"code",26),e(675,"boolean"),t()(),n(676,"td",21)(677,"p")(678,"code"),e(679,"false"),t()()(),n(680,"td",22)(681,"p"),e(682,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(683,"code"),e(684,"minLength"),t(),e(685,") e m\xE1ximo ("),n(686,"code"),e(687,"maxLength"),t(),e(688,") do campo."),t(),n(689,"ul")(690,"li"),e(691,"Quando "),n(692,"code"),e(693,"true"),t(),e(694,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(695,"li"),e(696,"Quando "),n(697,"code"),e(698,"false"),t(),e(699,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(700,"blockquote")(701,"p"),e(702,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(703,"code"),e(704,"p-mask-format-model"),t(),e(705,"."),t()(),n(706,"p"),e(707,"Exemplo:"),t(),n(708,"pre")(709,"code"),e(710,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(711,"ul")(712,"li"),e(713,"Entrada: "),n(714,"code"),e(715,"123-456"),t(),e(716," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(717,"code"),e(718,"-"),t(),e(719,"."),t()()()(),n(720,"tr",15)(721,"td",16)(722,"div",23)(723,"span",24),e(724," p-maxlength"),o(725,"br"),t()()(),n(726,"td",19)(727,"code",30),e(728,"number"),t()(),n(729,"td",21),e(730,"-"),t(),n(731,"td",22)(732,"em")(733,"strong"),e(734,"(opcional)"),t()(),n(735,"p"),e(736,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(737,"tr",15)(738,"td",16)(739,"div",23)(740,"span",24),e(741," p-minlength"),o(742,"br"),t()()(),n(743,"td",19)(744,"code",30),e(745,"number"),t()(),n(746,"td",21),e(747,"-"),t(),n(748,"td",22)(749,"em")(750,"strong"),e(751,"(opcional)"),t()(),n(752,"p"),e(753,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(754,"tr",15)(755,"td",16)(756,"div",23)(757,"span",24),e(758," name"),o(759,"br"),t()()(),n(760,"td",19)(761,"code",25),e(762,"string"),t()(),n(763,"td",21),e(764,"-"),t(),n(765,"td",22)(766,"p"),e(767,"Nome e identificador do campo."),t()()(),n(768,"tr",15)(769,"td",16)(770,"div",23)(771,"span",24),e(772," p-no-autocomplete"),o(773,"br"),t()()(),n(774,"td",19)(775,"code",26),e(776,"boolean"),t()(),n(777,"td",21)(778,"p")(779,"code"),e(780,"false"),t()()(),n(781,"td",22)(782,"em")(783,"strong"),e(784,"(opcional)"),t()(),n(785,"p"),e(786,"Define a propriedade nativa "),n(787,"code"),e(788,"autocomplete"),t(),e(789," do campo como "),n(790,"code"),e(791,"off"),t(),e(792,"."),t(),n(793,"blockquote")(794,"p"),e(795,"No componente "),n(796,"code"),e(797,"po-password"),t(),e(798," ser\xE1 definido como "),n(799,"code"),e(800,"new-password"),t(),e(801,"."),t()(),n(802,"p"),e(803,"Nos componentes "),n(804,"code"),e(805,"po-password"),t(),e(806," e "),n(807,"code"),e(808,"po-login"),t(),e(809," o valor padr\xE3o ser\xE1 "),n(810,"code"),e(811,"true"),t(),e(812,"."),t()()(),n(813,"tr",15)(814,"td",16)(815,"div",23)(816,"span",24),e(817," p-optional"),o(818,"br"),t()()(),n(819,"td",19)(820,"code",26),e(821,"boolean"),t()(),n(822,"td",21)(823,"p")(824,"code"),e(825,"false"),t()()(),n(826,"td",22)(827,"em")(828,"strong"),e(829,"(opcional)"),t()(),n(830,"p"),e(831,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(832,"blockquote")(833,"p"),e(834,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(835,"ul")(836,"li"),e(837,"O campo conter "),n(838,"code"),e(839,"p-required"),t(),e(840,";"),t(),n(841,"li"),e(842,"N\xE3o possuir "),n(843,"code"),e(844,"p-help"),t(),e(845," e/ou "),n(846,"code"),e(847,"p-label"),t(),e(848,"."),t()()()(),n(849,"tr",15)(850,"td",16)(851,"div",23)(852,"span",24),e(853,"p-pattern"),o(854,"br"),t()()(),n(855,"td",19)(856,"code",25),e(857,"string"),t()(),n(858,"td",21),e(859,"-"),t(),n(860,"td",22)(861,"em")(862,"strong"),e(863,"(opcional)"),t()(),n(864,"p"),e(865,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(866,"code"),e(867,"(p-mask)"),t(),e(868,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(869,"tr",15)(870,"td",16)(871,"div",23)(872,"span",24),e(873," p-placeholder"),o(874,"br"),t()()(),n(875,"td",19)(876,"code",25),e(877,"string"),t()(),n(878,"td",21)(879,"p"),e(880,"''"),t()(),n(881,"td",22)(882,"em")(883,"strong"),e(884,"(opcional)"),t()(),n(885,"p"),e(886,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(887,"tr",15)(888,"td",16)(889,"div",23)(890,"span",24),e(891,"p-readonly"),o(892,"br"),t()()(),n(893,"td",19)(894,"code",26),e(895,"boolean"),t()(),n(896,"td",21),e(897,"-"),t(),n(898,"td",22)(899,"em")(900,"strong"),e(901,"(opcional)"),t()(),n(902,"p"),e(903,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(904,"tr",15)(905,"td",16)(906,"div",23)(907,"span",24),e(908,"p-required"),o(909,"br"),t()()(),n(910,"td",19)(911,"code",26),e(912,"boolean"),t()(),n(913,"td",21)(914,"p")(915,"code"),e(916,"false"),t()()(),n(917,"td",22)(918,"em")(919,"strong"),e(920,"(opcional)"),t()(),n(921,"p"),e(922,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(923,"blockquote")(924,"p"),e(925,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(926,"code"),e(927,"(p-disabled)"),t(),e(928,"."),t()()()(),n(929,"tr",15)(930,"td",16)(931,"div",23)(932,"span",24),e(933," p-required-field-error-message"),o(934,"br"),t()()(),n(935,"td",19)(936,"code",26),e(937,"boolean"),t()(),n(938,"td",21)(939,"p")(940,"code"),e(941,"false"),t()()(),n(942,"td",22)(943,"em")(944,"strong"),e(945,"(opcional)"),t()(),n(946,"p"),e(947,"Exibe a mensagem setada na propriedade "),n(948,"code"),e(949,"p-error-pattern"),t(),e(950," se o campo estiver vazio e for requerido."),t(),n(951,"blockquote")(952,"p"),e(953,"Necess\xE1rio que a propriedade "),n(954,"code"),e(955,"p-required"),t(),e(956," esteja habilitada."),t()()()(),n(957,"tr",15)(958,"td",16)(959,"div",23)(960,"span",24),e(961," p-show-required"),o(962,"br"),t()()(),n(963,"td",19)(964,"code",26),e(965,"boolean"),t()(),n(966,"td",21),e(967,"-"),t(),n(968,"td",22)(969,"p"),e(970,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(971,"blockquote")(972,"p"),e(973,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(974,"ul")(975,"li"),e(976,"N\xE3o possuir "),n(977,"code"),e(978,"p-help"),t(),e(979," e/ou "),n(980,"code"),e(981,"p-label"),t(),e(982,"."),t()()()(),n(983,"tr",15)(984,"td",16)(985,"div",23)(986,"span",24),e(987," p-size"),o(988,"br"),t()()(),n(989,"td",19)(990,"code",25),e(991,"string"),t()(),n(992,"td",21)(993,"p")(994,"code"),e(995,"medium"),t()()(),n(996,"td",22)(997,"em")(998,"strong"),e(999,"(opcional)"),t()(),n(1e3,"p"),e(1001,"Define o tamanho do componente:"),t(),n(1002,"ul")(1003,"li")(1004,"code"),e(1005,"small"),t(),e(1006,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1007,"li")(1008,"code"),e(1009,"medium"),t(),e(1010,": altura do input como 44px."),t()(),n(1011,"blockquote")(1012,"p"),e(1013,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1014,"code"),e(1015,"medium"),t(),e(1016,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1017,"a",31),e(1018,"po-theme"),t(),e(1019,"."),t()()()(),n(1020,"tr",15)(1021,"td",16)(1022,"div",23)(1023,"span",24),e(1024," p-upper-case"),o(1025,"br"),t()()(),n(1026,"td",19)(1027,"code",26),e(1028,"boolean"),t()(),n(1029,"td",21),e(1030,"-"),t(),n(1031,"td",22)(1032,"p"),e(1033,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1034,"h3",11),e(1035,"M\xE9todos"),t(),n(1036,"table",32)(1037,"tr",15)(1038,"th",33)(1039,"div",23)(1040,"h4")(1041,"span",24),e(1042," showAdditionalHelp "),t()()()()(),n(1043,"tr",22)(1044,"td",22)(1045,"p"),e(1046,"M\xE9todo que exibe "),n(1047,"code"),e(1048,"p-additionalHelpTooltip"),t(),e(1049," ou executa a a\xE7\xE3o definida em "),n(1050,"code"),e(1051,"p-additionalHelp"),t(),e(1052,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1053,"code"),e(1054,"p-keydown"),t(),e(1055,"."),t(),n(1056,"pre")(1057,"code"),e(1058,`<po-nome-component
 #component
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1059,"pre")(1060,"code"),e(1061,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1062,"br"),n(1063,"table",32)(1064,"tr",15)(1065,"th",33)(1066,"div",23)(1067,"h4")(1068,"span",24),e(1069," focus "),t()()()()(),n(1070,"tr",22)(1071,"td",22)(1072,"p"),e(1073,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1074,"p"),e(1075,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1076,"pre")(1077,"code"),e(1078,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1079,"br"),n(1080,"h3"),e(1081,"Interfaces"),t(),n(1082,"h4",34)(1083,"code",5),e(1084,"ErrorAsyncProperties"),t()(),n(1085,"div",2)(1086,"p"),e(1087,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1088,"h4",11),e(1089,"Propriedades"),t(),n(1090,"table",12)(1091,"tr",13)(1092,"th",14),e(1093,"Nome"),t(),n(1094,"th",14),e(1095,"Tipo"),t(),n(1096,"th",14),e(1097,"Descri\xE7\xE3o"),t()(),n(1098,"tr",15)(1099,"td",16)(1100,"div",23)(1101,"span",24),e(1102," errorAsync"),o(1103,"br"),t()()(),n(1104,"td",19)(1105,"code",35),e(1106,"(value) => Observable<boolean>"),t()(),n(1107,"td",22)(1108,"p"),e(1109,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1110,"code"),e(1111,"change"),t(),e(1112," ou "),n(1113,"code"),e(1114,"change-model"),t(),e(1115,", dependendo do valor da propriedade "),n(1116,"code"),e(1117,"triggerMode"),t(),e(1118,"."),t()()(),n(1119,"tr",15)(1120,"td",16)(1121,"div",23)(1122,"span",24),e(1123," triggerMode"),o(1124,"br"),t()()(),n(1125,"td",19)(1126,"code",36),e(1127,"'change' "),t(),n(1128,"code",37),e(1129," 'changeModel'"),t()(),n(1130,"td",22)(1131,"em")(1132,"strong"),e(1133,"(opcional)"),t()(),n(1134,"p"),e(1135,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1136,"code"),e(1137,"change"),t(),e(1138," ou "),n(1139,"code"),e(1140,"change-model"),t(),e(1141,"."),t()()()()())},dependencies:[w],encapsulation:2})}return a})();var ge=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(q(Y),q($))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Input",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-input-doc"),t(),n(4,"po-tab",3),S("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-input-basic-view")(6,"sample-po-input-labs-view")(7,"sample-po-input-reactive-form-view"),t()()()),r&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab==="doc"),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[le,C,y,de,ce,Ee,be],encapsulation:2})}return a})();var Te=[{path:"",component:ge}],Se=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=D({type:a});static \u0275inj=I({imports:[O.forChild(Te),O]})}return a})();var tt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=D({type:a});static \u0275inj=I({imports:[re,Se]})}return a})();export{tt as DocPoInputModule};
