import{o as y,p as ne}from"./chunk-R3BKLGLC.js";import{Ab as C,F,Ga as X,Ha as L,I as A,La as Y,Ma as $,T as K,Wa as ee,ha as Z,ja as J,nb as te,zb as v}from"./chunk-TUTTJOS2.js";import{$a as S,Ac as G,Ba as w,Ea as n,Fa as t,Ga as o,Ka as O,La as x,M as k,Nc as Q,Pc as U,Rc as B,T as c,Ta as W,U as u,Ua as R,Va as H,Xa as e,Za as P,ab as h,bb as b,eb as _,ha as m,ia as q,oa as g,pa as D,ub as M,wc as z,xc as I,ya as E,yc as j,zc as V}from"./chunk-MIQUIDUB.js";var ie=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","login","p-label","PO Login"]],template:function(l,i){l&1&&o(0,"po-login",0)},dependencies:[L],encapsulation:2})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Login Basic"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-login-basic/sample-po-login-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-login name="login" p-label="PO Login"> </po-login>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-login-basic/sample-po-login-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-login-basic',
  templateUrl: './sample-po-login-basic.component.html',
  standalone: false
})
export class SamplePoLoginBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-login-basic"),t(),o(23,"hr")),l&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),P(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",_(4,Ee,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,ie],encapsulation:2})}return a})();var le=(()=>{class a{additionalHelpTooltip;errorPattern;event;help;label;login;maxlength;minlength;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.additionalHelpTooltip="",this.errorPattern="",this.event="",this.label=void 0,this.login="",this.help=void 0,this.maxlength=void 0,this.minlength=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-labs"]],standalone:!1,decls:20,vars:33,consts:[["f","ngForm"],["name","login",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-error-pattern","p-help","p-label","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-help","Ex.: Required field","p-label","Error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let d=O();n(0,"po-login",1),b("ngModelChange",function(r){return c(d),h(i.login,r)||(i.login=r),u(r)}),x("p-blur",function(){return c(d),u(i.changeEvent("p-blur"))})("p-change",function(){return c(d),u(i.changeEvent("p-change"))})("p-change-model",function(){return c(d),u(i.changeEvent("p-change-model"))})("p-enter",function(){return c(d),u(i.changeEvent("p-enter"))})("p-keydown",function(){return c(d),u(i.changeEvent("p-keydown"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),n(6,"form",null,0)(8,"po-input",5),b("ngModelChange",function(r){return c(d),h(i.label,r)||(i.label=r),u(r)}),t(),n(9,"po-input",6),b("ngModelChange",function(r){return c(d),h(i.help,r)||(i.help=r),u(r)}),t(),n(10,"po-input",7),b("ngModelChange",function(r){return c(d),h(i.placeholder,r)||(i.placeholder=r),u(r)}),t(),n(11,"po-input",8),b("ngModelChange",function(r){return c(d),h(i.additionalHelpTooltip,r)||(i.additionalHelpTooltip=r),u(r)}),t(),n(12,"po-input",9),b("ngModelChange",function(r){return c(d),h(i.pattern,r)||(i.pattern=r),u(r)}),t(),n(13,"po-input",10),b("ngModelChange",function(r){return c(d),h(i.errorPattern,r)||(i.errorPattern=r),u(r)}),t(),n(14,"po-number",11),b("ngModelChange",function(r){return c(d),h(i.minlength,r)||(i.minlength=r),u(r)}),t(),n(15,"po-number",12),b("ngModelChange",function(r){return c(d),h(i.maxlength,r)||(i.maxlength=r),u(r)}),t(),n(16,"po-checkbox-group",13),b("ngModelChange",function(r){return c(d),h(i.properties,r)||(i.properties=r),u(r)}),t(),n(17,"po-radio-group",14),b("ngModelChange",function(r){return c(d),h(i.size,r)||(i.size=r),u(r)}),t(),n(18,"div",2)(19,"po-button",15),x("p-click",function(){return c(d),u(i.restore())}),t()()()}l&2&&(S("ngModel",i.login),E("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-label",i.label)("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),m(3),E("p-value",i.login),m(),E("p-value",i.event),m(4),S("ngModel",i.label),m(),S("ngModel",i.help),m(),S("ngModel",i.placeholder),m(),S("ngModel",i.additionalHelpTooltip),m(),S("ngModel",i.pattern),m(),S("ngModel",i.errorPattern),m(),S("ngModel",i.minlength),m(),S("ngModel",i.maxlength),m(),S("ngModel",i.properties),E("p-options",i.propertiesOptions),m(),S("ngModel",i.size),E("p-options",i.sizeOptions))},dependencies:[G,z,I,V,j,F,Z,J,X,L,Y,ee],encapsulation:2})}return a})();var be=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Login Labs"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-login-labs/sample-po-login-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-login
  name="login"
  [(ngModel)]="login"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-label]="label"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-login>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="login"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6 po-lg-4" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6 po-lg-4" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6 po-lg-4" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder">
  </po-input>

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
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="errorPattern"
    [(ngModel)]="errorPattern"
    p-clean
    p-help="Ex.: Required field"
    p-label="Error pattern"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max length"> </po-number>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-login-labs/sample-po-login-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-login-labs',
  templateUrl: './sample-po-login-labs.component.html',
  standalone: false
})
export class SamplePoLoginLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  login: string;
  maxlength: number;
  minlength: number;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

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
    this.errorPattern = '';
    this.event = '';

    this.label = undefined;
    this.login = '';

    this.help = undefined;

    this.maxlength = undefined;
    this.minlength = undefined;

    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-login-labs"),t(),o(23,"hr")),l&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),P(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",_(4,be,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,le],encapsulation:2})}return a})();var me=(()=>{class a{poNotification;poModal;userLogin;userPassword;primaryAction={label:"Confirm",action:()=>{this.confirmAction()}};constructor(p){this.poNotification=p}openModal(){this.poModal.open()}cleanForm(){this.userLogin="",this.userPassword=""}confirmAction(){this.userLogin&&this.userPassword&&(this.poNotification.success(`Discount successfully applied to user ${this.userLogin}!`),this.poModal.close(),this.cleanForm())}static \u0275fac=function(l){return new(l||a)(q(K))};static \u0275cmp=g({type:a,selectors:[["sample-po-login-confirm"]],viewQuery:function(l,i){if(l&1&&W(A,7),l&2){let d;R(d=H())&&(i.poModal=d.first)}},standalone:!1,decls:7,vars:3,consts:[[1,"po-text-center"],[1,"po-font-subtitle"],["p-label","Confirm Identity",3,"p-click"],["p-hide-close","true","p-size","auto","p-title","Confirm your identity",3,"p-primary-action"],["name","userLogin","p-clean","","p-label","User","p-maxlength","40","p-placeholder","domain\\user","p-required","",3,"ngModelChange","ngModel"],["name","userPassword","p-clean","","p-label","Password","p-placeholder","Enter your password","p-required","",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"div",1),e(2," To gain a 25% discount on your purchases, confirm your identity with your username and password! "),t(),n(3,"po-button",2),x("p-click",function(){return i.openModal()}),t()(),n(4,"po-modal",3)(5,"po-login",4),b("ngModelChange",function(s){return h(i.userLogin,s)||(i.userLogin=s),s}),t(),n(6,"po-password",5),b("ngModelChange",function(s){return h(i.userPassword,s)||(i.userPassword=s),s}),t()()),l&2&&(m(4),E("p-primary-action",i.primaryAction),m(),S("ngModel",i.userLogin),m(),S("ngModel",i.userPassword))},dependencies:[z,V,F,L,$,A],encapsulation:2})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-confirm-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Login - Confirm Identity"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-login-confirm/sample-po-login-confirm.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-text-center">
  <div class="po-font-subtitle">
    To gain a 25% discount on your purchases, confirm your identity with your username and password!
  </div>

  <po-button p-label="Confirm Identity" (p-click)="openModal()"> </po-button>
</div>

<po-modal p-hide-close="true" p-size="auto" p-title="Confirm your identity" [p-primary-action]="primaryAction">
  <po-login
    name="userLogin"
    [(ngModel)]="userLogin"
    p-clean
    p-label="User"
    p-maxlength="40"
    p-placeholder="domain\\user"
    p-required
  >
  </po-login>

  <po-password
    name="userPassword"
    [(ngModel)]="userPassword"
    p-clean
    p-label="Password"
    p-placeholder="Enter your password"
    p-required
  >
  </po-password>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-login-confirm/sample-po-login-confirm.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-login-confirm',
  templateUrl: './sample-po-login-confirm.component.html',
  standalone: false
})
export class SamplePoLoginConfirmComponent {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  userLogin: string;
  userPassword: string;

  primaryAction: PoModalAction = {
    label: 'Confirm',
    action: () => {
      this.confirmAction();
    }
  };

  constructor(private poNotification: PoNotificationService) {}

  openModal() {
    this.poModal.open();
  }

  private cleanForm() {
    this.userLogin = '';
    this.userPassword = '';
  }

  private confirmAction() {
    if (this.userLogin && this.userPassword) {
      this.poNotification.success(\`Discount successfully applied to user \${this.userLogin}!\`);

      this.poModal.close();
      this.cleanForm();
    }
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-login-confirm"),t(),o(23,"hr")),l&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),P(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",_(4,ve,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,me],encapsulation:2})}return a})();var de=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-doc"]],standalone:!1,decls:1147,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoLoginComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),o(210,"br"),e(211," O "),n(212,"code"),e(213,"po-login"),t(),e(214," \xE9 um input espec\xEDfico para login. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),t()(),n(215,"div",8)(216,"h4",9),e(217,"Seletor"),t(),n(218,"pre",10),e(219,`<po-login
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
</po-login>
`),t()(),n(220,"h4",11),e(221,"Propriedades"),t(),n(222,"table",12)(223,"tr",13)(224,"th",14),e(225,"Nome"),t(),n(226,"th",14),e(227,"Tipo"),t(),n(228,"th",14),e(229,"Padr\xE3o"),t(),n(230,"th",14),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),e(236," (p-additional-help)"),o(237,"br"),t()()(),n(238,"td",19)(239,"code",20),e(240,"EventEmitter"),t()(),n(241,"td",21),e(242,"-"),t(),n(243,"td",22)(244,"em")(245,"strong"),e(246,"(opcional)"),t()(),n(247,"p"),e(248,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(249,"code"),e(250,"p-help"),t(),e(251,"."),t()()(),n(252,"tr",15)(253,"td",16)(254,"div",23)(255,"span",24),e(256," p-additional-help-tooltip"),o(257,"br"),t()()(),n(258,"td",19)(259,"code",25),e(260,"string"),t()(),n(261,"td",21),e(262,"-"),t(),n(263,"td",22)(264,"em")(265,"strong"),e(266,"(opcional)"),t()(),n(267,"p"),e(268,"Exibe um \xEDcone de ajuda adicional ao "),n(269,"code"),e(270,"p-help"),t(),e(271,`, com o texto desta propriedade no tooltip.
Se o evento `),n(272,"code"),e(273,"p-additional-help"),t(),e(274,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(275,"strong"),e(276,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(277,"blockquote")(278,"p"),e(279,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),n(280,"tr",15)(281,"td",16)(282,"div",23)(283,"span",24),e(284," p-append-in-body"),o(285,"br"),t()()(),n(286,"td",19)(287,"code",26),e(288,"boolean"),t()(),n(289,"td",21)(290,"p")(291,"code"),e(292,"false"),t()()(),n(293,"td",22)(294,"em")(295,"strong"),e(296,"(opcional)"),t()(),n(297,"p"),e(298,"Define que o tooltip ("),n(299,"code"),e(300,"p-additional-help-tooltip"),t(),e(301," e/ou "),n(302,"code"),e(303,"p-error-limit"),t(),e(304,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(305,"blockquote")(306,"p"),e(307,"Quando utilizado com "),n(308,"code"),e(309,"p-additional-help-tooltip"),t(),e(310,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(311,"tr",15)(312,"td",16)(313,"div",23)(314,"span",24),e(315," p-auto-focus"),o(316,"br"),t()()(),n(317,"td",19)(318,"code",26),e(319,"boolean"),t()(),n(320,"td",21)(321,"p")(322,"code"),e(323,"false"),t()()(),n(324,"td",22)(325,"em")(326,"strong"),e(327,"(opcional)"),t()(),n(328,"p"),e(329,"Aplica foco no elemento ao ser iniciado."),t(),n(330,"blockquote")(331,"p"),e(332,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(333,"tr",15)(334,"td",16)(335,"div",17)(336,"span",18),e(337," (p-blur)"),o(338,"br"),t()()(),n(339,"td",19)(340,"code",20),e(341,"EventEmitter"),t()(),n(342,"td",21),e(343,"-"),t(),n(344,"td",22)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),n(348,"p"),e(349,"Evento disparado ao sair do campo."),t()()(),n(350,"tr",15)(351,"td",16)(352,"div",17)(353,"span",18),e(354," (p-change)"),o(355,"br"),t()()(),n(356,"td",19)(357,"code",20),e(358,"EventEmitter"),t()(),n(359,"td",21),e(360,"-"),t(),n(361,"td",22)(362,"em")(363,"strong"),e(364,"(opcional)"),t()(),n(365,"p"),e(366,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(367,"tr",15)(368,"td",16)(369,"div",17)(370,"span",18),e(371," (p-change-model)"),o(372,"br"),t()()(),n(373,"td",19)(374,"code",20),e(375,"EventEmitter"),t()(),n(376,"td",21),e(377,"-"),t(),n(378,"td",22)(379,"em")(380,"strong"),e(381,"(opcional)"),t()(),n(382,"p"),e(383,"Evento disparado ao alterar valor do model."),t()()(),n(384,"tr",15)(385,"td",16)(386,"div",23)(387,"span",24),e(388,"p-clean"),o(389,"br"),t()()(),n(390,"td",19)(391,"code",26),e(392,"boolean"),t()(),n(393,"td",21),e(394,"-"),t(),n(395,"td",22)(396,"em")(397,"strong"),e(398,"(opcional)"),t()(),n(399,"p"),e(400,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(401,"tr",15)(402,"td",16)(403,"div",23)(404,"span",24),e(405,"p-disabled"),o(406,"br"),t()()(),n(407,"td",19)(408,"code",26),e(409,"boolean"),t()(),n(410,"td",21)(411,"p")(412,"code"),e(413,"false"),t()()(),n(414,"td",22)(415,"em")(416,"strong"),e(417,"(opcional)"),t()(),n(418,"p"),e(419,"Se verdadeiro, desabilita o campo."),t()()(),n(420,"tr",15)(421,"td",16)(422,"div",23)(423,"span",24),e(424," p-emit-all-changes"),o(425,"br"),t()()(),n(426,"td",19)(427,"code",26),e(428,"boolean"),t()(),n(429,"td",21)(430,"p")(431,"code"),e(432,"false"),t()()(),n(433,"td",22)(434,"em")(435,"strong"),e(436,"(opcional)"),t()(),n(437,"p"),e(438,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(439,"tr",15)(440,"td",16)(441,"div",17)(442,"span",18),e(443," (p-enter)"),o(444,"br"),t()()(),n(445,"td",19)(446,"code",20),e(447,"EventEmitter"),t()(),n(448,"td",21),e(449,"-"),t(),n(450,"td",22)(451,"em")(452,"strong"),e(453,"(opcional)"),t()(),n(454,"p"),e(455,"Evento disparado ao entrar do campo."),t()()(),n(456,"tr",15)(457,"td",16)(458,"div",23)(459,"span",24),e(460," p-error-async-properties"),o(461,"br"),t()()(),n(462,"td",19)(463,"code",27),e(464,"ErrorAsyncProperties"),t()(),n(465,"td",21),e(466,"-"),t(),n(467,"td",22)(468,"em")(469,"strong"),e(470,"(opcional)"),t()(),n(471,"p"),e(472,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(473,"code"),e(474,"Reactive Forms"),t(),e(475,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(476,"code"),e(477,"asyncValidators"),t(),e(478,"."),t()()(),n(479,"tr",15)(480,"td",16)(481,"div",23)(482,"span",24),e(483," p-error-limit"),o(484,"br"),t()()(),n(485,"td",19)(486,"code",26),e(487,"boolean"),t()(),n(488,"td",21)(489,"p")(490,"code"),e(491,"false"),t()()(),n(492,"td",22)(493,"em")(494,"strong"),e(495,"(opcional)"),t()(),n(496,"p"),e(497,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(498,"blockquote")(499,"p"),e(500,"Caso essa propriedade seja definida como "),n(501,"code"),e(502,"true"),t(),e(503,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(504,"tr",15)(505,"td",16)(506,"div",23)(507,"span",24),e(508," p-error-pattern"),o(509,"br"),t()()(),n(510,"td",19)(511,"code",25),e(512,"string"),t()(),n(513,"td",21),e(514,"-"),t(),n(515,"td",22)(516,"em")(517,"strong"),e(518,"(opcional)"),t()(),n(519,"p"),e(520,"Mensagem que ser\xE1 apresentada quando o "),n(521,"code"),e(522,"pattern"),t(),e(523," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(524,"blockquote")(525,"p"),e(526,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(527,"code"),e(528,"p-required-field-error-message"),t(),e(529," em conjunto."),t()()()(),n(530,"tr",15)(531,"td",16)(532,"div",23)(533,"span",24),e(534," p-help"),o(535,"br"),t()()(),n(536,"td",19)(537,"code",25),e(538,"string"),t()(),n(539,"td",21),e(540,"-"),t(),n(541,"td",22)(542,"em")(543,"strong"),e(544,"(opcional)"),t()(),n(545,"p"),e(546,"Texto de apoio do campo."),t()()(),n(547,"tr",15)(548,"td",16)(549,"div",23)(550,"span",24),e(551," p-icon"),o(552,"br"),t()()(),n(553,"td",19)(554,"code",25),e(555,"string "),t(),n(556,"code",28),e(557," TemplateRef<void>"),t()(),n(558,"td",21),e(559,"-"),t(),n(560,"td",22)(561,"em")(562,"strong"),e(563,"(opcional)"),t()(),n(564,"p"),e(565,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(566,"p"),e(567,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(568,"a",29),e(569,"Biblioteca de \xEDcones"),t(),e(570,". conforme exemplo abaixo:"),t(),n(571,"pre")(572,"code"),e(573,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(574,"p"),e(575,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(576,"em"),e(577,"Font Awesome"),t(),e(578,", da seguinte forma:"),t(),n(579,"pre")(580,"code"),e(581,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(582,"p"),e(583,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(584,"code"),e(585,"TemplateRef"),t(),e(586,", conforme exemplo abaixo:"),t(),n(587,"pre")(588,"code"),e(589,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(590,"blockquote")(591,"p"),e(592,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(593,"code"),e(594,"font-size: inherit"),t(),e(595," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(596,"tr",15)(597,"td",16)(598,"div",17)(599,"span",18),e(600," (p-keydown)"),o(601,"br"),t()()(),n(602,"td",19)(603,"code",20),e(604,"EventEmitter"),t()(),n(605,"td",21),e(606,"-"),t(),n(607,"td",22)(608,"em")(609,"strong"),e(610,"(opcional)"),t()(),n(611,"p"),e(612,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(613,"code"),e(614,"KeyboardEvent"),t(),e(615," com informa\xE7\xF5es sobre a tecla."),t()()(),n(616,"tr",15)(617,"td",16)(618,"div",23)(619,"span",24),e(620," p-label"),o(621,"br"),t()()(),n(622,"td",19)(623,"code",25),e(624,"string"),t()(),n(625,"td",21),e(626,"-"),t(),n(627,"td",22)(628,"em")(629,"strong"),e(630,"(opcional)"),t()(),n(631,"p"),e(632,"R\xF3tulo do campo."),t()()(),n(633,"tr",15)(634,"td",16)(635,"div",23)(636,"span",24),e(637,"p-mask"),o(638,"br"),t()()(),n(639,"td",19)(640,"code",25),e(641,"string"),t()(),n(642,"td",21),e(643,"-"),t(),n(644,"td",22)(645,"em")(646,"strong"),e(647,"(opcional)"),t()(),n(648,"p"),e(649,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(650,"tr",15)(651,"td",16)(652,"div",23)(653,"span",24),e(654,"p-mask-format-model"),o(655,"br"),t()()(),n(656,"td",19)(657,"code",26),e(658,"boolean"),t()(),n(659,"td",21)(660,"p")(661,"code"),e(662,"false"),t()()(),n(663,"td",22)(664,"em")(665,"strong"),e(666,"(opcional)"),t()(),n(667,"p"),e(668,"Indica se o "),n(669,"code"),e(670,"model"),t(),e(671," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(672,"tr",15)(673,"td",16)(674,"div",23)(675,"span",24),e(676," p-mask-no-length-validation"),o(677,"br"),t()()(),n(678,"td",19)(679,"code",26),e(680,"boolean"),t()(),n(681,"td",21)(682,"p")(683,"code"),e(684,"false"),t()()(),n(685,"td",22)(686,"p"),e(687,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(688,"code"),e(689,"minLength"),t(),e(690,") e m\xE1ximo ("),n(691,"code"),e(692,"maxLength"),t(),e(693,") do campo."),t(),n(694,"ul")(695,"li"),e(696,"Quando "),n(697,"code"),e(698,"true"),t(),e(699,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(700,"li"),e(701,"Quando "),n(702,"code"),e(703,"false"),t(),e(704,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(705,"blockquote")(706,"p"),e(707,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(708,"code"),e(709,"p-mask-format-model"),t(),e(710,"."),t()(),n(711,"p"),e(712,"Exemplo:"),t(),n(713,"pre")(714,"code"),e(715,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(716,"ul")(717,"li"),e(718,"Entrada: "),n(719,"code"),e(720,"123-456"),t(),e(721," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(722,"code"),e(723,"-"),t(),e(724,"."),t()()()(),n(725,"tr",15)(726,"td",16)(727,"div",23)(728,"span",24),e(729," p-maxlength"),o(730,"br"),t()()(),n(731,"td",19)(732,"code",30),e(733,"number"),t()(),n(734,"td",21),e(735,"-"),t(),n(736,"td",22)(737,"em")(738,"strong"),e(739,"(opcional)"),t()(),n(740,"p"),e(741,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(742,"tr",15)(743,"td",16)(744,"div",23)(745,"span",24),e(746," p-minlength"),o(747,"br"),t()()(),n(748,"td",19)(749,"code",30),e(750,"number"),t()(),n(751,"td",21),e(752,"-"),t(),n(753,"td",22)(754,"em")(755,"strong"),e(756,"(opcional)"),t()(),n(757,"p"),e(758,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(759,"tr",15)(760,"td",16)(761,"div",23)(762,"span",24),e(763," name"),o(764,"br"),t()()(),n(765,"td",19)(766,"code",25),e(767,"string"),t()(),n(768,"td",21),e(769,"-"),t(),n(770,"td",22)(771,"p"),e(772,"Nome e identificador do campo."),t()()(),n(773,"tr",15)(774,"td",16)(775,"div",23)(776,"span",24),e(777," p-no-autocomplete"),o(778,"br"),t()()(),n(779,"td",19)(780,"code",26),e(781,"boolean"),t()(),n(782,"td",21)(783,"p")(784,"code"),e(785,"false"),t()()(),n(786,"td",22)(787,"em")(788,"strong"),e(789,"(opcional)"),t()(),n(790,"p"),e(791,"Define a propriedade nativa "),n(792,"code"),e(793,"autocomplete"),t(),e(794," do campo como "),n(795,"code"),e(796,"off"),t(),e(797,"."),t(),n(798,"blockquote")(799,"p"),e(800,"No componente "),n(801,"code"),e(802,"po-password"),t(),e(803," ser\xE1 definido como "),n(804,"code"),e(805,"new-password"),t(),e(806,"."),t()(),n(807,"p"),e(808,"Nos componentes "),n(809,"code"),e(810,"po-password"),t(),e(811," e "),n(812,"code"),e(813,"po-login"),t(),e(814," o valor padr\xE3o ser\xE1 "),n(815,"code"),e(816,"true"),t(),e(817,"."),t()()(),n(818,"tr",15)(819,"td",16)(820,"div",23)(821,"span",24),e(822," p-optional"),o(823,"br"),t()()(),n(824,"td",19)(825,"code",26),e(826,"boolean"),t()(),n(827,"td",21)(828,"p")(829,"code"),e(830,"false"),t()()(),n(831,"td",22)(832,"em")(833,"strong"),e(834,"(opcional)"),t()(),n(835,"p"),e(836,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(837,"blockquote")(838,"p"),e(839,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(840,"ul")(841,"li"),e(842,"O campo conter "),n(843,"code"),e(844,"p-required"),t(),e(845,";"),t(),n(846,"li"),e(847,"N\xE3o possuir "),n(848,"code"),e(849,"p-help"),t(),e(850," e/ou "),n(851,"code"),e(852,"p-label"),t(),e(853,"."),t()()()(),n(854,"tr",15)(855,"td",16)(856,"div",23)(857,"span",24),e(858,"p-pattern"),o(859,"br"),t()()(),n(860,"td",19)(861,"code",25),e(862,"string"),t()(),n(863,"td",21),e(864,"-"),t(),n(865,"td",22)(866,"em")(867,"strong"),e(868,"(opcional)"),t()(),n(869,"p"),e(870,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(871,"code"),e(872,"(p-mask)"),t(),e(873,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(874,"tr",15)(875,"td",16)(876,"div",23)(877,"span",24),e(878," p-placeholder"),o(879,"br"),t()()(),n(880,"td",19)(881,"code",25),e(882,"string"),t()(),n(883,"td",21)(884,"p"),e(885,"''"),t()(),n(886,"td",22)(887,"em")(888,"strong"),e(889,"(opcional)"),t()(),n(890,"p"),e(891,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(892,"tr",15)(893,"td",16)(894,"div",23)(895,"span",24),e(896,"p-readonly"),o(897,"br"),t()()(),n(898,"td",19)(899,"code",26),e(900,"boolean"),t()(),n(901,"td",21),e(902,"-"),t(),n(903,"td",22)(904,"em")(905,"strong"),e(906,"(opcional)"),t()(),n(907,"p"),e(908,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(909,"tr",15)(910,"td",16)(911,"div",23)(912,"span",24),e(913,"p-required"),o(914,"br"),t()()(),n(915,"td",19)(916,"code",26),e(917,"boolean"),t()(),n(918,"td",21)(919,"p")(920,"code"),e(921,"false"),t()()(),n(922,"td",22)(923,"em")(924,"strong"),e(925,"(opcional)"),t()(),n(926,"p"),e(927,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(928,"blockquote")(929,"p"),e(930,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(931,"code"),e(932,"(p-disabled)"),t(),e(933,"."),t()()()(),n(934,"tr",15)(935,"td",16)(936,"div",23)(937,"span",24),e(938," p-required-field-error-message"),o(939,"br"),t()()(),n(940,"td",19)(941,"code",26),e(942,"boolean"),t()(),n(943,"td",21)(944,"p")(945,"code"),e(946,"false"),t()()(),n(947,"td",22)(948,"em")(949,"strong"),e(950,"(opcional)"),t()(),n(951,"p"),e(952,"Exibe a mensagem setada na propriedade "),n(953,"code"),e(954,"p-error-pattern"),t(),e(955," se o campo estiver vazio e for requerido."),t(),n(956,"blockquote")(957,"p"),e(958,"Necess\xE1rio que a propriedade "),n(959,"code"),e(960,"p-required"),t(),e(961," esteja habilitada."),t()()()(),n(962,"tr",15)(963,"td",16)(964,"div",23)(965,"span",24),e(966," p-show-required"),o(967,"br"),t()()(),n(968,"td",19)(969,"code",26),e(970,"boolean"),t()(),n(971,"td",21),e(972,"-"),t(),n(973,"td",22)(974,"p"),e(975,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(976,"blockquote")(977,"p"),e(978,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(979,"ul")(980,"li"),e(981,"N\xE3o possuir "),n(982,"code"),e(983,"p-help"),t(),e(984," e/ou "),n(985,"code"),e(986,"p-label"),t(),e(987,"."),t()()()(),n(988,"tr",15)(989,"td",16)(990,"div",23)(991,"span",24),e(992," p-size"),o(993,"br"),t()()(),n(994,"td",19)(995,"code",25),e(996,"string"),t()(),n(997,"td",21)(998,"p")(999,"code"),e(1e3,"medium"),t()()(),n(1001,"td",22)(1002,"em")(1003,"strong"),e(1004,"(opcional)"),t()(),n(1005,"p"),e(1006,"Define o tamanho do componente:"),t(),n(1007,"ul")(1008,"li")(1009,"code"),e(1010,"small"),t(),e(1011,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1012,"li")(1013,"code"),e(1014,"medium"),t(),e(1015,": altura do input como 44px."),t()(),n(1016,"blockquote")(1017,"p"),e(1018,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1019,"code"),e(1020,"medium"),t(),e(1021,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1022,"a",31),e(1023,"po-theme"),t(),e(1024,"."),t()()()(),n(1025,"tr",15)(1026,"td",16)(1027,"div",23)(1028,"span",24),e(1029," p-upper-case"),o(1030,"br"),t()()(),n(1031,"td",19)(1032,"code",26),e(1033,"boolean"),t()(),n(1034,"td",21),e(1035,"-"),t(),n(1036,"td",22)(1037,"p"),e(1038,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1039,"h3",11),e(1040,"M\xE9todos"),t(),n(1041,"table",32)(1042,"tr",15)(1043,"th",33)(1044,"div",23)(1045,"h4")(1046,"span",24),e(1047," showAdditionalHelp "),t()()()()(),n(1048,"tr",22)(1049,"td",22)(1050,"p"),e(1051,"M\xE9todo que exibe "),n(1052,"code"),e(1053,"p-additionalHelpTooltip"),t(),e(1054," ou executa a a\xE7\xE3o definida em "),n(1055,"code"),e(1056,"p-additionalHelp"),t(),e(1057,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1058,"code"),e(1059,"p-keydown"),t(),e(1060,"."),t(),n(1061,"pre")(1062,"code"),e(1063,`<po-nome-component
 #component
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1064,"pre")(1065,"code"),e(1066,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1067,"br"),n(1068,"table",32)(1069,"tr",15)(1070,"th",33)(1071,"div",23)(1072,"h4")(1073,"span",24),e(1074," focus "),t()()()()(),n(1075,"tr",22)(1076,"td",22)(1077,"p"),e(1078,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1079,"p"),e(1080,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1081,"pre")(1082,"code"),e(1083,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1084,"br"),n(1085,"h3"),e(1086,"Interfaces"),t(),n(1087,"h4",34)(1088,"code",5),e(1089,"ErrorAsyncProperties"),t()(),n(1090,"div",2)(1091,"p"),e(1092,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1093,"h4",11),e(1094,"Propriedades"),t(),n(1095,"table",12)(1096,"tr",13)(1097,"th",14),e(1098,"Nome"),t(),n(1099,"th",14),e(1100,"Tipo"),t(),n(1101,"th",14),e(1102,"Descri\xE7\xE3o"),t()(),n(1103,"tr",15)(1104,"td",16)(1105,"div",23)(1106,"span",24),e(1107," errorAsync"),o(1108,"br"),t()()(),n(1109,"td",19)(1110,"code",35),e(1111,"(value) => Observable<boolean>"),t()(),n(1112,"td",22)(1113,"p"),e(1114,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1115,"code"),e(1116,"change"),t(),e(1117," ou "),n(1118,"code"),e(1119,"change-model"),t(),e(1120,", dependendo do valor da propriedade "),n(1121,"code"),e(1122,"triggerMode"),t(),e(1123,"."),t()()(),n(1124,"tr",15)(1125,"td",16)(1126,"div",23)(1127,"span",24),e(1128," triggerMode"),o(1129,"br"),t()()(),n(1130,"td",19)(1131,"code",36),e(1132,"'change' "),t(),n(1133,"code",37),e(1134," 'changeModel'"),t()(),n(1135,"td",22)(1136,"em")(1137,"strong"),e(1138,"(opcional)"),t()(),n(1139,"p"),e(1140,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1141,"code"),e(1142,"change"),t(),e(1143," ou "),n(1144,"code"),e(1145,"change-model"),t(),e(1146,"."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var se=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(q(Q),q(U))};static \u0275cmp=g({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Login",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-login-doc"),t(),n(4,"po-tab",3),x("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-login-basic-view")(6,"sample-po-login-labs-view")(7,"sample-po-login-confirm-view"),t()()()),l&2&&(E("p-actions",i.actions),m(2),E("p-active",i.activeTab==="doc"),m(2),E("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[te,v,C,ae,re,pe,de],encapsulation:2})}return a})();var we=[{path:"",component:se}],ce=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=D({type:a});static \u0275inj=k({imports:[B.forChild(we),B]})}return a})();var Ze=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=D({type:a});static \u0275inj=k({imports:[ne,ce]})}return a})();export{Ze as DocPoLoginModule};
