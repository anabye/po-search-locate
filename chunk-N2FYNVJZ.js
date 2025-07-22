import{o as P,p as $}from"./chunk-JYNCG2Y6.js";import{Ab as v,F as B,Ga as Y,K as W,La as Z,Ma as k,Wa as J,ha as Q,ja as U,nb as X,zb as f}from"./chunk-HBOGTDFH.js";import{$a as g,Ac as R,Ba as C,Ea as n,Fa as t,Ga as i,Ka as V,La as w,M as D,Nc as G,Pc as K,Rc as O,T as m,U as c,Wa as I,Xa as e,Za as y,ab as h,bb as b,cb as j,eb as _,ha as d,ia as q,oa as S,pa as L,ub as M,wc as F,xc as z,ya as u,yc as N,zc as A}from"./chunk-MIQUIDUB.js";var ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","password","p-label","PO Password"]],template:function(l,o){l&1&&i(0,"po-password",0)},dependencies:[k],encapsulation:2})}return a})();var me=a=>({"docs-sample-code-tabs":a}),ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password Basic"),t(),n(4,"a",2),w("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-basic/sample-po-password-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-basic/sample-po-password-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-password-basic"),t(),i(23,"hr")),l&2&&(d(5),C("po-icon "+o.sampleCodeButtonIcon),d(),y(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,me,o.hideSampleCodeTabs)))},dependencies:[M,P,f,v,ee],encapsulation:2})}return a})();var oe=(()=>{class a{additionalHelpTooltip;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"hidepasswordpeek",label:"Hide Password Peek"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(s){this.event=s}restore(){this.additionalHelpTooltip="",this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-labs"]],standalone:!1,decls:20,vars:34,consts:[["f","ngForm"],["name","password",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-error-pattern","p-help","p-hide-password-peek","p-label","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let p=V();n(0,"po-password",1),b("ngModelChange",function(r){return m(p),h(o.password,r)||(o.password=r),c(r)}),w("p-blur",function(){return m(p),c(o.changeEvent("p-blur"))})("p-change",function(){return m(p),c(o.changeEvent("p-change"))})("p-change-model",function(){return m(p),c(o.changeEvent("p-change-model"))})("p-enter",function(){return m(p),c(o.changeEvent("p-enter"))})("p-keydown",function(){return m(p),c(o.changeEvent("p-keydown"))}),t(),i(1,"hr"),n(2,"div",2),i(3,"po-info",3)(4,"po-info",4),t(),i(5,"hr"),n(6,"form",null,0)(8,"po-input",5),b("ngModelChange",function(r){return m(p),h(o.label,r)||(o.label=r),c(r)}),t(),n(9,"po-input",6),b("ngModelChange",function(r){return m(p),h(o.help,r)||(o.help=r),c(r)}),t(),n(10,"po-input",7),b("ngModelChange",function(r){return m(p),h(o.additionalHelpTooltip,r)||(o.additionalHelpTooltip=r),c(r)}),t(),n(11,"po-input",8),b("ngModelChange",function(r){return m(p),h(o.placeholder,r)||(o.placeholder=r),c(r)}),t(),n(12,"po-input",9),b("ngModelChange",function(r){return m(p),h(o.errorPattern,r)||(o.errorPattern=r),c(r)}),t(),n(13,"po-input",10),b("ngModelChange",function(r){return m(p),h(o.pattern,r)||(o.pattern=r),c(r)}),t(),n(14,"po-number",11),b("ngModelChange",function(r){return m(p),h(o.minlength,r)||(o.minlength=r),c(r)}),t(),n(15,"po-number",12),b("ngModelChange",function(r){return m(p),h(o.maxlength,r)||(o.maxlength=r),c(r)}),t(),n(16,"po-checkbox-group",13),b("ngModelChange",function(r){return m(p),h(o.properties,r)||(o.properties=r),c(r)}),t(),n(17,"po-radio-group",14),b("ngModelChange",function(r){return m(p),h(o.size,r)||(o.size=r),c(r)}),t(),n(18,"div",2)(19,"po-button",15),w("p-click",function(){return m(p),c(o.restore())}),t()()()}l&2&&(g("ngModel",o.password),u("p-additional-help-tooltip",o.additionalHelpTooltip)("p-clean",o.properties.includes("clean"))("p-disabled",o.properties.includes("disabled"))("p-error-pattern",o.errorPattern)("p-help",o.help)("p-hide-password-peek",o.properties.includes("hidepasswordpeek"))("p-label",o.label)("p-maxlength",o.maxlength)("p-minlength",o.minlength)("p-no-autocomplete",o.properties==null?null:o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-pattern",o.pattern)("p-placeholder",o.placeholder)("p-readonly",o.properties.includes("readonly"))("p-required",o.properties.includes("required"))("p-required-field-error-message",o.properties.includes("requiredFieldErrorMessage"))("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit")),d(3),u("p-value",o.password),d(),u("p-value",o.event),d(4),g("ngModel",o.label),d(),g("ngModel",o.help),d(),g("ngModel",o.additionalHelpTooltip),d(),g("ngModel",o.placeholder),d(),g("ngModel",o.errorPattern),d(),g("ngModel",o.pattern),d(),g("ngModel",o.minlength),d(),g("ngModel",o.maxlength),d(),g("ngModel",o.properties),u("p-options",o.propertiesOptions),d(),g("ngModel",o.size),u("p-options",o.sizeOptions))},dependencies:[R,F,z,A,N,B,Q,U,Y,Z,k,J],encapsulation:2})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password Labs"),t(),n(4,"a",2),w("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-labs/sample-po-password-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-password
  name="password"
  [(ngModel)]="password"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-hide-password-peek]="properties.includes('hidepasswordpeek')"
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
</po-password>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="password"> </po-info>

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
    class="po-md-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-labs/sample-po-password-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-labs',
  templateUrl: './sample-po-password-labs.component.html',
  standalone: false
})
export class SamplePoPasswordLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  password: string;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'hidepasswordpeek', label: 'Hide Password Peek' },
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
    this.errorPattern = undefined;
    this.event = undefined;
    this.help = undefined;
    this.label = undefined;
    this.maxlength = undefined;
    this.minlength = undefined;
    this.password = undefined;
    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-password-labs"),t(),i(23,"hr")),l&2&&(d(5),C("po-icon "+o.sampleCodeButtonIcon),d(),y(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,Se,o.hideSampleCodeTabs)))},dependencies:[M,P,f,v,oe],encapsulation:2})}return a})();var ae=(()=>{class a{poAlert;confirmNewPassword;currentPassword;errorPattern;help="Initial password = 123456";newPassword;password="123456";constructor(s){this.poAlert=s}setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:"Password Reset",message:"Password saved successfully",ok:()=>this.reset()})):this.poAlert.alert({title:"Password Error",message:"Your (new passsword) is different of (confirm new password)",ok:()=>this.reset()})}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0}static \u0275fac=function(l){return new(l||a)(q(W))};static \u0275cmp=S({type:a,selectors:[["sample-po-password-reset"]],standalone:!1,features:[j([W])],decls:7,vars:7,consts:[["passwordForm","ngForm"],["name","currentPassword","p-clean","","p-error-pattern","invalid password","p-label","Current Password","p-mask","999999","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-help"],["name","newPassword","p-clean","","p-error-pattern","invalid password","p-label","New password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","confirmNewPassword","p-clean","","p-error-pattern","invalid password","p-label","Confirm New Password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],[1,"po-row"],["p-label","Save",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let p=V();n(0,"form",null,0)(2,"po-password",1),b("ngModelChange",function(r){return m(p),h(o.currentPassword,r)||(o.currentPassword=r),c(r)}),t(),n(3,"po-password",2),b("ngModelChange",function(r){return m(p),h(o.newPassword,r)||(o.newPassword=r),c(r)}),t(),n(4,"po-password",3),b("ngModelChange",function(r){return m(p),h(o.confirmNewPassword,r)||(o.confirmNewPassword=r),c(r)}),t(),n(5,"div",4)(6,"po-button",5),w("p-click",function(){return m(p),c(o.setPassword())}),t()()()}if(l&2){let p=I(1);d(2),g("ngModel",o.currentPassword),u("p-help",o.help),d(),g("ngModel",o.newPassword),u("p-disabled",o.currentPassword!==o.password),d(),g("ngModel",o.confirmNewPassword),u("p-disabled",o.currentPassword!==o.password),d(2),u("p-disabled",p.invalid)}},dependencies:[R,F,z,A,N,B,k],encapsulation:2})}return a})();var be=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-reset-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password - Reset"),t(),n(4,"a",2),w("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-reset/sample-po-password-reset.component.html"),t(),n(13,"pre",7),e(14,`<form #passwordForm="ngForm">
  <po-password
    class="po-sm-12"
    name="currentPassword"
    [(ngModel)]="currentPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Current Password"
    p-mask="999999"
    p-required
    [p-help]="help"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="newPassword"
    [(ngModel)]="newPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="New password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="confirmNewPassword"
    [(ngModel)]="confirmNewPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Confirm New Password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Save" [p-disabled]="passwordForm.invalid" (p-click)="setPassword()">
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-reset/sample-po-password-reset.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-reset',
  templateUrl: './sample-po-password-reset.component.html',
  providers: [PoDialogService],
  standalone: false
})
export class SamplePoPasswordResetComponent {
  confirmNewPassword: string;
  currentPassword: string;
  errorPattern: string;
  help: string = 'Initial password = 123456';
  newPassword: string;
  password: string = '123456';

  constructor(private poAlert: PoDialogService) {}

  setPassword() {
    if (this.confirmNewPassword === this.newPassword) {
      this.password = this.newPassword;
      this.help = \`Actual password = \${this.password}\`;
      this.currentPassword = undefined;
      this.newPassword = undefined;
      this.confirmNewPassword = undefined;

      this.poAlert.alert({
        title: 'Password Reset',
        message: 'Password saved successfully',
        ok: () => this.reset()
      });
    } else {
      this.poAlert.alert({
        title: 'Password Error',
        message: 'Your (new passsword) is different of (confirm new password)',
        ok: () => this.reset()
      });
    }
  }

  reset() {
    this.newPassword = undefined;
    this.confirmNewPassword = undefined;
  }
}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-password-reset"),t(),i(23,"hr")),l&2&&(d(5),C("po-icon "+o.sampleCodeButtonIcon),d(),y(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,be,o.hideSampleCodeTabs)))},dependencies:[M,P,f,v,ae],encapsulation:2})}return a})();var le=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-doc"]],standalone:!1,decls:1166,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoPasswordComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),i(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),i(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),i(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),i(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),i(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),i(210,"br"),e(211," O "),n(212,"code"),e(213,"po-password"),t(),e(214," \xE9 um input espec\xEDfico para senhas. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),t()(),n(215,"div",8)(216,"h4",9),e(217,"Seletor"),t(),n(218,"pre",10),e(219,`<po-password
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
    p-hide-password-peek="boolean"
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
</po-password>
`),t()(),n(220,"h4",11),e(221,"Propriedades"),t(),n(222,"table",12)(223,"tr",13)(224,"th",14),e(225,"Nome"),t(),n(226,"th",14),e(227,"Tipo"),t(),n(228,"th",14),e(229,"Padr\xE3o"),t(),n(230,"th",14),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),e(236," (p-additional-help)"),i(237,"br"),t()()(),n(238,"td",19)(239,"code",20),e(240,"EventEmitter"),t()(),n(241,"td",21),e(242,"-"),t(),n(243,"td",22)(244,"em")(245,"strong"),e(246,"(opcional)"),t()(),n(247,"p"),e(248,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(249,"code"),e(250,"p-help"),t(),e(251,"."),t()()(),n(252,"tr",15)(253,"td",16)(254,"div",23)(255,"span",24),e(256," p-additional-help-tooltip"),i(257,"br"),t()()(),n(258,"td",19)(259,"code",25),e(260,"string"),t()(),n(261,"td",21),e(262,"-"),t(),n(263,"td",22)(264,"em")(265,"strong"),e(266,"(opcional)"),t()(),n(267,"p"),e(268,"Exibe um \xEDcone de ajuda adicional ao "),n(269,"code"),e(270,"p-help"),t(),e(271,`, com o texto desta propriedade no tooltip.
Se o evento `),n(272,"code"),e(273,"p-additional-help"),t(),e(274,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(275,"strong"),e(276,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(277,"blockquote")(278,"p"),e(279,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),n(280,"tr",15)(281,"td",16)(282,"div",23)(283,"span",24),e(284," p-append-in-body"),i(285,"br"),t()()(),n(286,"td",19)(287,"code",26),e(288,"boolean"),t()(),n(289,"td",21)(290,"p")(291,"code"),e(292,"false"),t()()(),n(293,"td",22)(294,"em")(295,"strong"),e(296,"(opcional)"),t()(),n(297,"p"),e(298,"Define que o tooltip ("),n(299,"code"),e(300,"p-additional-help-tooltip"),t(),e(301," e/ou "),n(302,"code"),e(303,"p-error-limit"),t(),e(304,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(305,"blockquote")(306,"p"),e(307,"Quando utilizado com "),n(308,"code"),e(309,"p-additional-help-tooltip"),t(),e(310,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(311,"tr",15)(312,"td",16)(313,"div",23)(314,"span",24),e(315," p-auto-focus"),i(316,"br"),t()()(),n(317,"td",19)(318,"code",26),e(319,"boolean"),t()(),n(320,"td",21)(321,"p")(322,"code"),e(323,"false"),t()()(),n(324,"td",22)(325,"em")(326,"strong"),e(327,"(opcional)"),t()(),n(328,"p"),e(329,"Aplica foco no elemento ao ser iniciado."),t(),n(330,"blockquote")(331,"p"),e(332,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(333,"tr",15)(334,"td",16)(335,"div",17)(336,"span",18),e(337," (p-blur)"),i(338,"br"),t()()(),n(339,"td",19)(340,"code",20),e(341,"EventEmitter"),t()(),n(342,"td",21),e(343,"-"),t(),n(344,"td",22)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),n(348,"p"),e(349,"Evento disparado ao sair do campo."),t()()(),n(350,"tr",15)(351,"td",16)(352,"div",17)(353,"span",18),e(354," (p-change)"),i(355,"br"),t()()(),n(356,"td",19)(357,"code",20),e(358,"EventEmitter"),t()(),n(359,"td",21),e(360,"-"),t(),n(361,"td",22)(362,"em")(363,"strong"),e(364,"(opcional)"),t()(),n(365,"p"),e(366,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(367,"tr",15)(368,"td",16)(369,"div",17)(370,"span",18),e(371," (p-change-model)"),i(372,"br"),t()()(),n(373,"td",19)(374,"code",20),e(375,"EventEmitter"),t()(),n(376,"td",21),e(377,"-"),t(),n(378,"td",22)(379,"em")(380,"strong"),e(381,"(opcional)"),t()(),n(382,"p"),e(383,"Evento disparado ao alterar valor do model."),t()()(),n(384,"tr",15)(385,"td",16)(386,"div",23)(387,"span",24),e(388,"p-clean"),i(389,"br"),t()()(),n(390,"td",19)(391,"code",26),e(392,"boolean"),t()(),n(393,"td",21),e(394,"-"),t(),n(395,"td",22)(396,"em")(397,"strong"),e(398,"(opcional)"),t()(),n(399,"p"),e(400,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(401,"tr",15)(402,"td",16)(403,"div",23)(404,"span",24),e(405,"p-disabled"),i(406,"br"),t()()(),n(407,"td",19)(408,"code",26),e(409,"boolean"),t()(),n(410,"td",21)(411,"p")(412,"code"),e(413,"false"),t()()(),n(414,"td",22)(415,"em")(416,"strong"),e(417,"(opcional)"),t()(),n(418,"p"),e(419,"Se verdadeiro, desabilita o campo."),t()()(),n(420,"tr",15)(421,"td",16)(422,"div",23)(423,"span",24),e(424," p-emit-all-changes"),i(425,"br"),t()()(),n(426,"td",19)(427,"code",26),e(428,"boolean"),t()(),n(429,"td",21)(430,"p")(431,"code"),e(432,"false"),t()()(),n(433,"td",22)(434,"em")(435,"strong"),e(436,"(opcional)"),t()(),n(437,"p"),e(438,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(439,"tr",15)(440,"td",16)(441,"div",17)(442,"span",18),e(443," (p-enter)"),i(444,"br"),t()()(),n(445,"td",19)(446,"code",20),e(447,"EventEmitter"),t()(),n(448,"td",21),e(449,"-"),t(),n(450,"td",22)(451,"em")(452,"strong"),e(453,"(opcional)"),t()(),n(454,"p"),e(455,"Evento disparado ao entrar do campo."),t()()(),n(456,"tr",15)(457,"td",16)(458,"div",23)(459,"span",24),e(460," p-error-async-properties"),i(461,"br"),t()()(),n(462,"td",19)(463,"code",27),e(464,"ErrorAsyncProperties"),t()(),n(465,"td",21),e(466,"-"),t(),n(467,"td",22)(468,"em")(469,"strong"),e(470,"(opcional)"),t()(),n(471,"p"),e(472,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(473,"code"),e(474,"Reactive Forms"),t(),e(475,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(476,"code"),e(477,"asyncValidators"),t(),e(478,"."),t()()(),n(479,"tr",15)(480,"td",16)(481,"div",23)(482,"span",24),e(483," p-error-limit"),i(484,"br"),t()()(),n(485,"td",19)(486,"code",26),e(487,"boolean"),t()(),n(488,"td",21)(489,"p")(490,"code"),e(491,"false"),t()()(),n(492,"td",22)(493,"em")(494,"strong"),e(495,"(opcional)"),t()(),n(496,"p"),e(497,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(498,"blockquote")(499,"p"),e(500,"Caso essa propriedade seja definida como "),n(501,"code"),e(502,"true"),t(),e(503,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(504,"tr",15)(505,"td",16)(506,"div",23)(507,"span",24),e(508," p-error-pattern"),i(509,"br"),t()()(),n(510,"td",19)(511,"code",25),e(512,"string"),t()(),n(513,"td",21),e(514,"-"),t(),n(515,"td",22)(516,"em")(517,"strong"),e(518,"(opcional)"),t()(),n(519,"p"),e(520,"Mensagem que ser\xE1 apresentada quando o "),n(521,"code"),e(522,"pattern"),t(),e(523," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(524,"blockquote")(525,"p"),e(526,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(527,"code"),e(528,"p-required-field-error-message"),t(),e(529," em conjunto."),t()()()(),n(530,"tr",15)(531,"td",16)(532,"div",23)(533,"span",24),e(534," p-help"),i(535,"br"),t()()(),n(536,"td",19)(537,"code",25),e(538,"string"),t()(),n(539,"td",21),e(540,"-"),t(),n(541,"td",22)(542,"em")(543,"strong"),e(544,"(opcional)"),t()(),n(545,"p"),e(546,"Texto de apoio do campo."),t()()(),n(547,"tr",15)(548,"td",16)(549,"div",23)(550,"span",24),e(551," p-hide-password-peek"),i(552,"br"),t()()(),n(553,"td",19)(554,"code",26),e(555,"boolean"),t()(),n(556,"td",21)(557,"p")(558,"code"),e(559,"false"),t()()(),n(560,"td",22)(561,"em")(562,"strong"),e(563,"(opcional)"),t()(),n(564,"p"),e(565,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),t()()(),n(566,"tr",15)(567,"td",16)(568,"div",23)(569,"span",24),e(570," p-icon"),i(571,"br"),t()()(),n(572,"td",19)(573,"code",25),e(574,"string "),t(),n(575,"code",28),e(576," TemplateRef<void>"),t()(),n(577,"td",21),e(578,"-"),t(),n(579,"td",22)(580,"em")(581,"strong"),e(582,"(opcional)"),t()(),n(583,"p"),e(584,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(585,"p"),e(586,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(587,"a",29),e(588,"Biblioteca de \xEDcones"),t(),e(589,". conforme exemplo abaixo:"),t(),n(590,"pre")(591,"code"),e(592,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(593,"p"),e(594,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(595,"em"),e(596,"Font Awesome"),t(),e(597,", da seguinte forma:"),t(),n(598,"pre")(599,"code"),e(600,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(601,"p"),e(602,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(603,"code"),e(604,"TemplateRef"),t(),e(605,", conforme exemplo abaixo:"),t(),n(606,"pre")(607,"code"),e(608,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(609,"blockquote")(610,"p"),e(611,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(612,"code"),e(613,"font-size: inherit"),t(),e(614," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(615,"tr",15)(616,"td",16)(617,"div",17)(618,"span",18),e(619," (p-keydown)"),i(620,"br"),t()()(),n(621,"td",19)(622,"code",20),e(623,"EventEmitter"),t()(),n(624,"td",21),e(625,"-"),t(),n(626,"td",22)(627,"em")(628,"strong"),e(629,"(opcional)"),t()(),n(630,"p"),e(631,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(632,"code"),e(633,"KeyboardEvent"),t(),e(634," com informa\xE7\xF5es sobre a tecla."),t()()(),n(635,"tr",15)(636,"td",16)(637,"div",23)(638,"span",24),e(639," p-label"),i(640,"br"),t()()(),n(641,"td",19)(642,"code",25),e(643,"string"),t()(),n(644,"td",21),e(645,"-"),t(),n(646,"td",22)(647,"em")(648,"strong"),e(649,"(opcional)"),t()(),n(650,"p"),e(651,"R\xF3tulo do campo."),t()()(),n(652,"tr",15)(653,"td",16)(654,"div",23)(655,"span",24),e(656,"p-mask"),i(657,"br"),t()()(),n(658,"td",19)(659,"code",25),e(660,"string"),t()(),n(661,"td",21),e(662,"-"),t(),n(663,"td",22)(664,"em")(665,"strong"),e(666,"(opcional)"),t()(),n(667,"p"),e(668,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(669,"tr",15)(670,"td",16)(671,"div",23)(672,"span",24),e(673,"p-mask-format-model"),i(674,"br"),t()()(),n(675,"td",19)(676,"code",26),e(677,"boolean"),t()(),n(678,"td",21)(679,"p")(680,"code"),e(681,"false"),t()()(),n(682,"td",22)(683,"em")(684,"strong"),e(685,"(opcional)"),t()(),n(686,"p"),e(687,"Indica se o "),n(688,"code"),e(689,"model"),t(),e(690," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(691,"tr",15)(692,"td",16)(693,"div",23)(694,"span",24),e(695," p-mask-no-length-validation"),i(696,"br"),t()()(),n(697,"td",19)(698,"code",26),e(699,"boolean"),t()(),n(700,"td",21)(701,"p")(702,"code"),e(703,"false"),t()()(),n(704,"td",22)(705,"p"),e(706,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(707,"code"),e(708,"minLength"),t(),e(709,") e m\xE1ximo ("),n(710,"code"),e(711,"maxLength"),t(),e(712,") do campo."),t(),n(713,"ul")(714,"li"),e(715,"Quando "),n(716,"code"),e(717,"true"),t(),e(718,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(719,"li"),e(720,"Quando "),n(721,"code"),e(722,"false"),t(),e(723,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(724,"blockquote")(725,"p"),e(726,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(727,"code"),e(728,"p-mask-format-model"),t(),e(729,"."),t()(),n(730,"p"),e(731,"Exemplo:"),t(),n(732,"pre")(733,"code"),e(734,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(735,"ul")(736,"li"),e(737,"Entrada: "),n(738,"code"),e(739,"123-456"),t(),e(740," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(741,"code"),e(742,"-"),t(),e(743,"."),t()()()(),n(744,"tr",15)(745,"td",16)(746,"div",23)(747,"span",24),e(748," p-maxlength"),i(749,"br"),t()()(),n(750,"td",19)(751,"code",30),e(752,"number"),t()(),n(753,"td",21),e(754,"-"),t(),n(755,"td",22)(756,"em")(757,"strong"),e(758,"(opcional)"),t()(),n(759,"p"),e(760,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(761,"tr",15)(762,"td",16)(763,"div",23)(764,"span",24),e(765," p-minlength"),i(766,"br"),t()()(),n(767,"td",19)(768,"code",30),e(769,"number"),t()(),n(770,"td",21),e(771,"-"),t(),n(772,"td",22)(773,"em")(774,"strong"),e(775,"(opcional)"),t()(),n(776,"p"),e(777,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(778,"tr",15)(779,"td",16)(780,"div",23)(781,"span",24),e(782," name"),i(783,"br"),t()()(),n(784,"td",19)(785,"code",25),e(786,"string"),t()(),n(787,"td",21),e(788,"-"),t(),n(789,"td",22)(790,"p"),e(791,"Nome e identificador do campo."),t()()(),n(792,"tr",15)(793,"td",16)(794,"div",23)(795,"span",24),e(796," p-no-autocomplete"),i(797,"br"),t()()(),n(798,"td",19)(799,"code",26),e(800,"boolean"),t()(),n(801,"td",21)(802,"p")(803,"code"),e(804,"false"),t()()(),n(805,"td",22)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),n(809,"p"),e(810,"Define a propriedade nativa "),n(811,"code"),e(812,"autocomplete"),t(),e(813," do campo como "),n(814,"code"),e(815,"off"),t(),e(816,"."),t(),n(817,"blockquote")(818,"p"),e(819,"No componente "),n(820,"code"),e(821,"po-password"),t(),e(822," ser\xE1 definido como "),n(823,"code"),e(824,"new-password"),t(),e(825,"."),t()(),n(826,"p"),e(827,"Nos componentes "),n(828,"code"),e(829,"po-password"),t(),e(830," e "),n(831,"code"),e(832,"po-login"),t(),e(833," o valor padr\xE3o ser\xE1 "),n(834,"code"),e(835,"true"),t(),e(836,"."),t()()(),n(837,"tr",15)(838,"td",16)(839,"div",23)(840,"span",24),e(841," p-optional"),i(842,"br"),t()()(),n(843,"td",19)(844,"code",26),e(845,"boolean"),t()(),n(846,"td",21)(847,"p")(848,"code"),e(849,"false"),t()()(),n(850,"td",22)(851,"em")(852,"strong"),e(853,"(opcional)"),t()(),n(854,"p"),e(855,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(856,"blockquote")(857,"p"),e(858,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(859,"ul")(860,"li"),e(861,"O campo conter "),n(862,"code"),e(863,"p-required"),t(),e(864,";"),t(),n(865,"li"),e(866,"N\xE3o possuir "),n(867,"code"),e(868,"p-help"),t(),e(869," e/ou "),n(870,"code"),e(871,"p-label"),t(),e(872,"."),t()()()(),n(873,"tr",15)(874,"td",16)(875,"div",23)(876,"span",24),e(877,"p-pattern"),i(878,"br"),t()()(),n(879,"td",19)(880,"code",25),e(881,"string"),t()(),n(882,"td",21),e(883,"-"),t(),n(884,"td",22)(885,"em")(886,"strong"),e(887,"(opcional)"),t()(),n(888,"p"),e(889,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(890,"code"),e(891,"(p-mask)"),t(),e(892,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(893,"tr",15)(894,"td",16)(895,"div",23)(896,"span",24),e(897," p-placeholder"),i(898,"br"),t()()(),n(899,"td",19)(900,"code",25),e(901,"string"),t()(),n(902,"td",21)(903,"p"),e(904,"''"),t()(),n(905,"td",22)(906,"em")(907,"strong"),e(908,"(opcional)"),t()(),n(909,"p"),e(910,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(911,"tr",15)(912,"td",16)(913,"div",23)(914,"span",24),e(915,"p-readonly"),i(916,"br"),t()()(),n(917,"td",19)(918,"code",26),e(919,"boolean"),t()(),n(920,"td",21),e(921,"-"),t(),n(922,"td",22)(923,"em")(924,"strong"),e(925,"(opcional)"),t()(),n(926,"p"),e(927,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(928,"tr",15)(929,"td",16)(930,"div",23)(931,"span",24),e(932,"p-required"),i(933,"br"),t()()(),n(934,"td",19)(935,"code",26),e(936,"boolean"),t()(),n(937,"td",21)(938,"p")(939,"code"),e(940,"false"),t()()(),n(941,"td",22)(942,"em")(943,"strong"),e(944,"(opcional)"),t()(),n(945,"p"),e(946,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(947,"blockquote")(948,"p"),e(949,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(950,"code"),e(951,"(p-disabled)"),t(),e(952,"."),t()()()(),n(953,"tr",15)(954,"td",16)(955,"div",23)(956,"span",24),e(957," p-required-field-error-message"),i(958,"br"),t()()(),n(959,"td",19)(960,"code",26),e(961,"boolean"),t()(),n(962,"td",21)(963,"p")(964,"code"),e(965,"false"),t()()(),n(966,"td",22)(967,"em")(968,"strong"),e(969,"(opcional)"),t()(),n(970,"p"),e(971,"Exibe a mensagem setada na propriedade "),n(972,"code"),e(973,"p-error-pattern"),t(),e(974," se o campo estiver vazio e for requerido."),t(),n(975,"blockquote")(976,"p"),e(977,"Necess\xE1rio que a propriedade "),n(978,"code"),e(979,"p-required"),t(),e(980," esteja habilitada."),t()()()(),n(981,"tr",15)(982,"td",16)(983,"div",23)(984,"span",24),e(985," p-show-required"),i(986,"br"),t()()(),n(987,"td",19)(988,"code",26),e(989,"boolean"),t()(),n(990,"td",21),e(991,"-"),t(),n(992,"td",22)(993,"p"),e(994,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(995,"blockquote")(996,"p"),e(997,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(998,"ul")(999,"li"),e(1e3,"N\xE3o possuir "),n(1001,"code"),e(1002,"p-help"),t(),e(1003," e/ou "),n(1004,"code"),e(1005,"p-label"),t(),e(1006,"."),t()()()(),n(1007,"tr",15)(1008,"td",16)(1009,"div",23)(1010,"span",24),e(1011," p-size"),i(1012,"br"),t()()(),n(1013,"td",19)(1014,"code",25),e(1015,"string"),t()(),n(1016,"td",21)(1017,"p")(1018,"code"),e(1019,"medium"),t()()(),n(1020,"td",22)(1021,"em")(1022,"strong"),e(1023,"(opcional)"),t()(),n(1024,"p"),e(1025,"Define o tamanho do componente:"),t(),n(1026,"ul")(1027,"li")(1028,"code"),e(1029,"small"),t(),e(1030,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1031,"li")(1032,"code"),e(1033,"medium"),t(),e(1034,": altura do input como 44px."),t()(),n(1035,"blockquote")(1036,"p"),e(1037,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1038,"code"),e(1039,"medium"),t(),e(1040,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1041,"a",31),e(1042,"po-theme"),t(),e(1043,"."),t()()()(),n(1044,"tr",15)(1045,"td",16)(1046,"div",23)(1047,"span",24),e(1048," p-upper-case"),i(1049,"br"),t()()(),n(1050,"td",19)(1051,"code",26),e(1052,"boolean"),t()(),n(1053,"td",21),e(1054,"-"),t(),n(1055,"td",22)(1056,"p"),e(1057,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1058,"h3",11),e(1059,"M\xE9todos"),t(),n(1060,"table",32)(1061,"tr",15)(1062,"th",33)(1063,"div",23)(1064,"h4")(1065,"span",24),e(1066," showAdditionalHelp "),t()()()()(),n(1067,"tr",22)(1068,"td",22)(1069,"p"),e(1070,"M\xE9todo que exibe "),n(1071,"code"),e(1072,"p-additionalHelpTooltip"),t(),e(1073," ou executa a a\xE7\xE3o definida em "),n(1074,"code"),e(1075,"p-additionalHelp"),t(),e(1076,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1077,"code"),e(1078,"p-keydown"),t(),e(1079,"."),t(),n(1080,"pre")(1081,"code"),e(1082,`<po-nome-component
 #component
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1083,"pre")(1084,"code"),e(1085,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),i(1086,"br"),n(1087,"table",32)(1088,"tr",15)(1089,"th",33)(1090,"div",23)(1091,"h4")(1092,"span",24),e(1093," focus "),t()()()()(),n(1094,"tr",22)(1095,"td",22)(1096,"p"),e(1097,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1098,"p"),e(1099,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1100,"pre")(1101,"code"),e(1102,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),i(1103,"br"),n(1104,"h3"),e(1105,"Interfaces"),t(),n(1106,"h4",34)(1107,"code",5),e(1108,"ErrorAsyncProperties"),t()(),n(1109,"div",2)(1110,"p"),e(1111,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1112,"h4",11),e(1113,"Propriedades"),t(),n(1114,"table",12)(1115,"tr",13)(1116,"th",14),e(1117,"Nome"),t(),n(1118,"th",14),e(1119,"Tipo"),t(),n(1120,"th",14),e(1121,"Descri\xE7\xE3o"),t()(),n(1122,"tr",15)(1123,"td",16)(1124,"div",23)(1125,"span",24),e(1126," errorAsync"),i(1127,"br"),t()()(),n(1128,"td",19)(1129,"code",35),e(1130,"(value) => Observable<boolean>"),t()(),n(1131,"td",22)(1132,"p"),e(1133,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1134,"code"),e(1135,"change"),t(),e(1136," ou "),n(1137,"code"),e(1138,"change-model"),t(),e(1139,", dependendo do valor da propriedade "),n(1140,"code"),e(1141,"triggerMode"),t(),e(1142,"."),t()()(),n(1143,"tr",15)(1144,"td",16)(1145,"div",23)(1146,"span",24),e(1147," triggerMode"),i(1148,"br"),t()()(),n(1149,"td",19)(1150,"code",36),e(1151,"'change' "),t(),n(1152,"code",37),e(1153," 'changeModel'"),t()(),n(1154,"td",22)(1155,"em")(1156,"strong"),e(1157,"(opcional)"),t()(),n(1158,"p"),e(1159,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1160,"code"),e(1161,"change"),t(),e(1162," ou "),n(1163,"code"),e(1164,"change-model"),t(),e(1165,"."),t()()()()())},dependencies:[P],encapsulation:2})}return a})();var de=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,l){this.route=s,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let l=s.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(q(G),q(K))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),w("p-click",function(){return o.changeTab("doc")}),i(3,"sample-po-password-doc"),t(),n(4,"po-tab",3),w("p-click",function(){return o.changeTab("web")}),i(5,"sample-po-password-basic-view")(6,"sample-po-password-labs-view")(7,"sample-po-password-reset-view"),t()()()),l&2&&(u("p-actions",o.actions),d(2),u("p-active",o.activeTab==="doc"),d(2),u("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[X,f,v,ne,ie,re,le],encapsulation:2})}return a})();var fe=[{path:"",component:de}],pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=L({type:a});static \u0275inj=D({imports:[O.forChild(fe),O]})}return a})();var Ke=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=L({type:a});static \u0275inj=D({imports:[$,pe]})}return a})();export{Ke as DocPoPasswordModule};
