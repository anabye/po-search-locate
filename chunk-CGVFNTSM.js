import{o as k,p as ie}from"./chunk-R3BKLGLC.js";import{Ab as v,F as W,Ga as ee,La as te,T as Z,Wa as oe,ha as M,ja as $,nb as ne,ta as N,zb as C}from"./chunk-TUTTJOS2.js";import{$a as x,Ac as B,Ba as w,Ea as o,Fa as t,Ga as i,Jb as J,Ka as L,La as S,M as O,Nc as X,Pc as Y,Rc as H,T as c,U as u,Wa as R,Xa as e,Za as y,ab as g,bb as E,db as z,eb as P,fb as K,ha as r,ia as T,kb as Q,lb as U,oa as h,pa as D,ub as _,wc as V,xc as q,ya as m,yc as A,zc as F}from"./chunk-MIQUIDUB.js";var he=()=>({value:"1",label:"Option 1"}),xe=()=>({value:"2",label:"Option 2"}),ge=(a,be)=>[a,be],ae=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","checkboxGroup","p-label","PO Checkbox Group",3,"p-options"]],template:function(p,n){p&1&&i(0,"po-checkbox-group",0),p&2&&m("p-options",K(3,ge,z(1,he),z(2,xe)))},dependencies:[M],encapsulation:2})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(i(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group Basic"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),t()()()()(),o(21,"div",10),i(22,"sample-po-checkbox-group-basic"),t(),i(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel,""),r(),m("ngClass",P(4,Se,n.hideSampleCodeTabs)))},dependencies:[_,k,C,v,ae],encapsulation:2})}return a})();var pe=(()=>{class a{additionalHelpTooltip;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"indeterminate",label:"Indeterminate"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,this.option],this.clearOption()}changeEvent(d){this.event=d}restore(){this.additionalHelpTooltip="",this.checkboxGroup=void 0,this.columns=void 0,this.disabled=!1,this.event=void 0,this.help="",this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage="",this.size="medium",this.clearOption()}clearOption(){this.option={label:void 0,value:void 0}}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-labs"]],standalone:!1,decls:26,vars:32,consts:[["fOption","ngForm"],["f","ngForm"],["name","checkboxGroup",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-columns","p-disabled","p-help","p-indeterminate","p-label","p-optional","p-options","p-required","p-field-error-message","p-error-limit","p-show-required","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionValue","p-clean","","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionLabel","p-clean","","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Option Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let s=L();o(0,"po-checkbox-group",2),E("ngModelChange",function(l){return c(s),g(n.checkboxGroup,l)||(n.checkboxGroup=l),u(l)}),S("p-change",function(){return c(s),u(n.changeEvent("p-change"))})("p-keydown",function(){return c(s),u(n.changeEvent("p-keydown"))}),t(),i(1,"hr"),o(2,"div",3),i(3,"po-info",4),Q(4,"json"),i(5,"po-info",5),t(),i(6,"hr"),o(7,"form",null,0)(9,"po-input",6),E("ngModelChange",function(l){return c(s),g(n.option.value,l)||(n.option.value=l),u(l)}),t(),o(10,"po-input",7),E("ngModelChange",function(l){return c(s),g(n.option.label,l)||(n.option.label=l),u(l)}),t(),o(11,"po-switch",8),E("ngModelChange",function(l){return c(s),g(n.option.disabled,l)||(n.option.disabled=l),u(l)}),t(),o(12,"div",3)(13,"po-button",9),S("p-click",function(){return c(s),u(n.addOption())}),t()()(),i(14,"hr"),o(15,"form",null,1)(17,"po-input",10),E("ngModelChange",function(l){return c(s),g(n.label,l)||(n.label=l),u(l)}),t(),o(18,"po-input",11),E("ngModelChange",function(l){return c(s),g(n.help,l)||(n.help=l),u(l)}),t(),o(19,"po-input",12),E("ngModelChange",function(l){return c(s),g(n.additionalHelpTooltip,l)||(n.additionalHelpTooltip=l),u(l)}),t(),o(20,"po-input",13),E("ngModelChange",function(l){return c(s),g(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),u(l)}),t(),o(21,"po-checkbox-group",14),E("ngModelChange",function(l){return c(s),g(n.properties,l)||(n.properties=l),u(l)}),t(),o(22,"po-radio-group",15),E("ngModelChange",function(l){return c(s),g(n.columns,l)||(n.columns=l),u(l)}),t(),o(23,"po-radio-group",16),E("ngModelChange",function(l){return c(s),g(n.size,l)||(n.size=l),u(l)}),t(),o(24,"div",3)(25,"po-button",17),S("p-click",function(){return c(s),u(n.restore())}),t()()()}if(p&2){let s=R(8);x("ngModel",n.checkboxGroup),m("p-additional-help-tooltip",n.additionalHelpTooltip)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-indeterminate",n.properties.includes("indeterminate"))("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-show-required",n.properties.includes("showRequired"))("p-size",n.size),r(3),m("p-value",U(4,30,n.checkboxGroup)),r(2),m("p-value",n.event),r(4),x("ngModel",n.option.value),r(),x("ngModel",n.option.label),r(),x("ngModel",n.option.disabled),r(2),m("p-disabled",s.invalid),r(4),x("ngModel",n.label),r(),x("ngModel",n.help),r(),x("ngModel",n.additionalHelpTooltip),r(),x("ngModel",n.fieldErrorMessage),r(),x("ngModel",n.properties),m("p-options",n.propertiesOptions),r(),x("ngModel",n.columns),m("p-options",n.columnOptions),r(),x("ngModel",n.size),m("p-options",n.sizeOptions)}},dependencies:[B,V,q,F,A,W,M,$,ee,N,oe,J],encapsulation:2})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(i(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group Labs"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox-group
  name="checkboxGroup"
  [(ngModel)]="checkboxGroup"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-indeterminate]="properties.includes('indeterminate')"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-checkbox-group>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkboxGroup | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #fOption="ngForm">
  <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-clean p-label="Option Value" p-required>
  </po-input>

  <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-clean p-label="Option Label" p-required>
  </po-input>

  <po-switch class="po-md-6" name="disabled" [(ngModel)]="option.disabled" p-label="Option Disabled"> </po-switch>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

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

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

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
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-labs',
  templateUrl: './sample-po-checkbox-group-labs.component.html',
  standalone: false
})
export class SamplePoCheckboxGroupLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  checkboxGroup: object;
  columns: number;
  disabled: boolean;
  event: string;
  help: string;
  indeterminate: boolean;
  label: string;
  option: PoCheckboxGroupOption;
  options: Array<PoCheckboxGroupOption>;
  properties: Array<string>;
  fieldErrorMessage: string;
  size: string;

  public readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'indeterminate', label: 'Indeterminate' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
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

  addOption() {
    this.options = [...this.options, this.option];
    this.clearOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.checkboxGroup = undefined;
    this.columns = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.indeterminate = undefined;
    this.label = undefined;
    this.options = [];
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';

    this.clearOption();
  }

  private clearOption() {
    this.option = { label: undefined, value: undefined };
  }
}
`),t()()()()(),o(21,"div",10),i(22,"sample-po-checkbox-group-labs"),t(),i(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel,""),r(),m("ngClass",P(4,ke,n.hideSampleCodeTabs)))},dependencies:[_,k,C,v,pe],encapsulation:2})}return a})();var de=(()=>{class a{poNotification;attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:"1",label:"Functional menu"},{value:"2",label:"Online panel"},{value:"3",label:"Internet browser"},{value:"4",label:"Browser details"},{value:"5",label:"Transparent panel"},{value:"6",label:"Browser refresh"}];systemOptions=[{value:"1",label:"Audit updates in the data dictionary"},{value:"2",label:"Audit updates in the user registry"},{value:"3",label:"Audit authentication / access"},{value:"4",label:"Audit rejection of access to resources"}];constructor(d){this.poNotification=d}confirm(){this.poNotification.success("Settings saved successfully!")}static \u0275fac=function(p){return new(p||a)(T(Z))};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-password-policy"]],standalone:!1,decls:19,vars:7,consts:[["g","ngForm"],[1,"po-font-subtitle"],[1,"po-row"],["name","system","p-label","System features",1,"po-lg-12",3,"p-options"],["name","audit","p-label","Audit rules",1,"po-lg-12",3,"p-options"],["name","expiration","p-label","Password expiration","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","periodExpiration","p-label","Period (in days)","p-maxlength","3",1,"po-lg-6",3,"p-disabled"],["name","attempts","p-label","Restrict access attempts","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","maxAttempts","p-label","Maximum number of attempts","p-maxlength","3",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Apply password policy",1,"po-offset-lg-9","po-lg-3","po-offset-xl-9",3,"p-click"]],template:function(p,n){if(p&1){let s=L();o(0,"div",1),e(1,"Password Rules"),t(),i(2,"hr"),o(3,"form",null,0)(5,"div",2),i(6,"po-checkbox-group",3),t(),i(7,"hr"),o(8,"div",2),i(9,"po-checkbox-group",4),t(),i(10,"hr"),o(11,"div",2)(12,"po-switch",5),E("ngModelChange",function(l){return c(s),g(n.expiration,l)||(n.expiration=l),u(l)}),t(),i(13,"po-number",6),t(),o(14,"div",2)(15,"po-switch",7),E("ngModelChange",function(l){return c(s),g(n.attempts,l)||(n.attempts=l),u(l)}),t(),o(16,"po-number",8),E("ngModelChange",function(l){return c(s),g(n.maxAttempts,l)||(n.maxAttempts=l),u(l)}),t()(),o(17,"div",2)(18,"po-button",9),S("p-click",function(){return c(s),u(n.confirm())}),t()()()}p&2&&(r(6),m("p-options",n.systemOptions),r(3),m("p-options",n.auditOptions),r(3),x("ngModel",n.expiration),r(),m("p-disabled",!n.expiration),r(2),x("ngModel",n.attempts),r(),x("ngModel",n.maxAttempts),m("p-disabled",!n.attempts))},dependencies:[B,V,q,F,A,W,M,te,N],encapsulation:2})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-password-policy-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(i(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group \u2013 Security policy"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-font-subtitle">Password Rules</div>

<hr />

<form #g="ngForm">
  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="system" p-label="System features" [p-options]="systemOptions">
    </po-checkbox-group>
  </div>

  <hr />

  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="audit" p-label="Audit rules" [p-options]="auditOptions">
    </po-checkbox-group>
  </div>

  <hr />

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="expiration"
      [(ngModel)]="expiration"
      p-label="Password expiration"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="periodExpiration"
      p-label="Period (in days)"
      p-maxlength="3"
      [p-disabled]="!expiration"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="attempts"
      [(ngModel)]="attempts"
      p-label="Restrict access attempts"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="maxAttempts"
      [(ngModel)]="maxAttempts"
      p-label="Maximum number of attempts"
      p-maxlength="3"
      [p-disabled]="!attempts"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-offset-lg-9 po-lg-3 po-offset-xl-9" p-label="Apply password policy" (p-click)="confirm()">
    </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-password-policy',
  templateUrl: './sample-po-checkbox-group-password-policy.component.html',
  standalone: false
})
export class SamplePoCheckboxGroupPasswordPolicyComponent {
  attempts: number;
  expiration: number;
  maxAttempts: boolean;
  periodExpiration: boolean;

  public readonly auditOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Functional menu' },
    { value: '2', label: 'Online panel' },
    { value: '3', label: 'Internet browser' },
    { value: '4', label: 'Browser details' },
    { value: '5', label: 'Transparent panel' },
    { value: '6', label: 'Browser refresh' }
  ];

  public readonly systemOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Audit updates in the data dictionary' },
    { value: '2', label: 'Audit updates in the user registry' },
    { value: '3', label: 'Audit authentication / access' },
    { value: '4', label: 'Audit rejection of access to resources' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  confirm() {
    this.poNotification.success('Settings saved successfully!');
  }
}
`),t()()()()(),o(21,"div",10),i(22,"sample-po-checkbox-group-password-policy"),t(),i(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel,""),r(),m("ngClass",P(4,Pe,n.hideSampleCodeTabs)))},dependencies:[_,k,C,v,de],encapsulation:2})}return a})();var me=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-doc"]],standalone:!1,decls:719,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-radio-group"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoCheckboxGroupOption[]"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(p,n){p&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),o(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),o(16,"h3",3),e(17,"Componente"),t(),o(18,"h4",4)(19,"code",5),e(20,"PoCheckboxGroupComponent"),t()(),o(21,"div",2)(22,"p"),e(23,"O componente "),o(24,"code"),e(25,"po-checkbox-group"),t(),e(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),t(),o(27,"blockquote")(28,"p"),e(29,"Para sele\xE7\xE3o \xFAnica, utilize o "),o(30,"a",6)(31,"strong"),e(32,"PO Radio Group"),t()(),e(33,"."),t()(),o(34,"p"),e(35,"Por padr\xE3o, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model."),t(),o(36,"pre")(37,"code"),e(38,`favorites = ['PO', 'Angular'];
`),t()(),o(39,"p"),e(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),o(41,"code"),e(42,"null"),t(),e(43,"), ou seja, nem marcado ("),o(44,"code"),e(45,"true"),t(),e(46,") e nem desmarcado ("),o(47,"code"),e(48,"false"),t(),e(49,`),
deve setar a propriedade `),o(50,"code"),e(51,"p-indeterminate"),t(),e(52," como "),o(53,"code"),e(54,"true"),t(),e(55,"."),t(),o(56,"p"),e(57,"Nesse caso, o po-checkbox-group vai retornar um objeto com todas as op\xE7\xF5es dispon\xEDveis e seus valores."),t(),o(58,"pre")(59,"code"),e(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),t()()(),o(61,"div",7)(62,"h4",8),e(63,"Seletor"),t(),o(64,"pre",9),e(65,`<po-checkbox-group
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
    p-indeterminate="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="PoCheckboxGroupOption[]"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-checkbox-group>
`),t()(),o(66,"h4",10),e(67,"Propriedades"),t(),o(68,"table",11)(69,"tr",12)(70,"th",13),e(71,"Nome"),t(),o(72,"th",13),e(73,"Tipo"),t(),o(74,"th",13),e(75,"Padr\xE3o"),t(),o(76,"th",13),e(77,"Descri\xE7\xE3o"),t()(),o(78,"tr",14)(79,"td",15)(80,"div",16)(81,"span",17),e(82," (p-additional-help)"),i(83,"br"),t()()(),o(84,"td",18)(85,"code",19),e(86,"EventEmitter"),t()(),o(87,"td",20),e(88,"-"),t(),o(89,"td",21)(90,"em")(91,"strong"),e(92,"(opcional)"),t()(),o(93,"p"),e(94,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),o(95,"code"),e(96,"p-help"),t(),e(97,"."),t()()(),o(98,"tr",14)(99,"td",15)(100,"div",22)(101,"span",23),e(102," p-additional-help-tooltip"),i(103,"br"),t()()(),o(104,"td",18)(105,"code",24),e(106,"string"),t()(),o(107,"td",20),e(108,"-"),t(),o(109,"td",21)(110,"em")(111,"strong"),e(112,"(opcional)"),t()(),o(113,"p"),e(114,"Exibe um \xEDcone de ajuda adicional ao "),o(115,"code"),e(116,"p-help"),t(),e(117,`, com o texto desta propriedade no tooltip.
Se o evento `),o(118,"code"),e(119,"p-additional-help"),t(),e(120,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),o(121,"strong"),e(122,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),o(123,"blockquote")(124,"p"),e(125,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),o(126,"tr",14)(127,"td",15)(128,"div",22)(129,"span",23),e(130," p-append-in-body"),i(131,"br"),t()()(),o(132,"td",18)(133,"code",25),e(134,"boolean"),t()(),o(135,"td",20)(136,"p")(137,"code"),e(138,"false"),t()()(),o(139,"td",21)(140,"em")(141,"strong"),e(142,"(opcional)"),t()(),o(143,"p"),e(144,"Define que o tooltip ("),o(145,"code"),e(146,"p-additional-help-tooltip"),t(),e(147," e/ou "),o(148,"code"),e(149,"p-error-limit"),t(),e(150,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),o(151,"blockquote")(152,"p"),e(153,"Quando utilizado com "),o(154,"code"),e(155,"p-additional-help-tooltip"),t(),e(156,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),o(157,"tr",14)(158,"td",15)(159,"div",22)(160,"span",23),e(161," p-auto-focus"),i(162,"br"),t()()(),o(163,"td",18)(164,"code",25),e(165,"boolean"),t()(),o(166,"td",20)(167,"p")(168,"code"),e(169,"false"),t()()(),o(170,"td",21)(171,"em")(172,"strong"),e(173,"(opcional)"),t()(),o(174,"p"),e(175,"Aplica foco no elemento ao ser iniciado."),t(),o(176,"blockquote")(177,"p"),e(178,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(179,"tr",14)(180,"td",15)(181,"div",16)(182,"span",17),e(183," (p-change)"),i(184,"br"),t()()(),o(185,"td",18)(186,"code",19),e(187,"EventEmitter"),t()(),o(188,"td",20),e(189,"-"),t(),o(190,"td",21)(191,"em")(192,"strong"),e(193,"(opcional)"),t()(),o(194,"p"),e(195,"Evento disparado ao alterar valor do campo"),t()()(),o(196,"tr",14)(197,"td",15)(198,"div",22)(199,"span",23),e(200," p-columns"),i(201,"br"),t()()(),o(202,"td",18)(203,"code",26),e(204,"number"),t()(),o(205,"td",20)(206,"p")(207,"code"),e(208,"2"),t()()(),o(209,"td",21)(210,"em")(211,"strong"),e(212,"(opcional)"),t()(),o(213,"p"),e(214,"Possibilita definir a quantidade de colunas para exibi\xE7\xE3o dos itens do "),o(215,"em"),e(216,"checkbox"),t(),e(217,"."),t(),o(218,"ul")(219,"li"),e(220,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),o(221,"code"),e(222,"1"),t(),e(223," e "),o(224,"code"),e(225,"4"),t(),e(226," colunas."),t(),o(227,"li"),e(228,"Para resolu\xE7\xE3o "),o(229,"code"),e(230,"sm"),t(),e(231," a colunagem invariavelmente passa para "),o(232,"code"),e(233,"1"),t(),e(234," coluna."),t(),o(235,"li"),e(236,"Quando se trata de resolu\xE7\xE3o "),o(237,"code"),e(238,"md"),t(),e(239," e o valor estabelecido para colunas for superior a "),o(240,"code"),e(241,"2"),t(),e(242,`,
o `),o(243,"em"),e(244,"grid system"),t(),e(245," ser\xE1 composto por "),o(246,"code"),e(247,"2"),t(),e(248," colunas."),t(),o(249,"li"),e(250,"Para evitar a quebra de linha, prefira a utiliza\xE7\xE3o de "),o(251,"code"),e(252,"1"),t(),e(253," coluna para op\xE7\xF5es com textos grandes."),t()()()(),o(254,"tr",14)(255,"td",15)(256,"div",22)(257,"span",23),e(258," p-disabled"),i(259,"br"),t()()(),o(260,"td",18)(261,"code",25),e(262,"boolean"),t()(),o(263,"td",20)(264,"p")(265,"code"),e(266,"false"),t()()(),o(267,"td",21)(268,"em")(269,"strong"),e(270,"(opcional)"),t()(),o(271,"p"),e(272,"Desabilita todos os itens do checkbox."),t()()(),o(273,"tr",14)(274,"td",15)(275,"div",22)(276,"span",23),e(277," p-error-limit"),i(278,"br"),t()()(),o(279,"td",18)(280,"code",25),e(281,"boolean"),t()(),o(282,"td",20)(283,"p")(284,"code"),e(285,"false"),t()()(),o(286,"td",21)(287,"em")(288,"strong"),e(289,"(opcional)"),t()(),o(290,"p"),e(291,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),o(292,"blockquote")(293,"p"),e(294,"Caso essa propriedade seja definida como "),o(295,"code"),e(296,"true"),t(),e(297,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),o(298,"tr",14)(299,"td",15)(300,"div",22)(301,"span",23),e(302," p-field-error-message"),i(303,"br"),t()()(),o(304,"td",18)(305,"code",24),e(306,"string"),t()(),o(307,"td",20),e(308,"-"),t(),o(309,"td",21)(310,"em")(311,"strong"),e(312,"(opcional)"),t()(),o(313,"p"),e(314,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),o(315,"blockquote")(316,"p"),e(317,"Necess\xE1rio que a propriedade "),o(318,"code"),e(319,"p-required"),t(),e(320," esteja habilitada."),t()()()(),o(321,"tr",14)(322,"td",15)(323,"div",22)(324,"span",23),e(325," p-help"),i(326,"br"),t()()(),o(327,"td",18)(328,"code",24),e(329,"string"),t()(),o(330,"td",20),e(331,"-"),t(),o(332,"td",21)(333,"em")(334,"strong"),e(335,"(opcional)"),t()(),o(336,"p"),e(337,"Texto de apoio do campo"),t()()(),o(338,"tr",14)(339,"td",15)(340,"div",22)(341,"span",23),e(342," p-indeterminate"),i(343,"br"),t()()(),o(344,"td",18)(345,"code",25),e(346,"boolean"),t()(),o(347,"td",20)(348,"p")(349,"code"),e(350,"false"),t()()(),o(351,"td",21)(352,"em")(353,"strong"),e(354,"(opcional)"),t()(),o(355,"p"),e(356,"Caso exista a necessidade de usar o valor indeterminado ("),o(357,"code"),e(358,"null"),t(),e(359,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),o(360,"code"),e(361,"p-indeterminate"),t(),e(362," como "),o(363,"code"),e(364,"true"),t(),e(365,", por padr\xE3o essa propriedade vem desabilitada ("),o(366,"code"),e(367,"false"),t(),e(368,")."),t(),o(369,"p"),e(370,"Quando essa propriedade \xE9 setada como "),o(371,"code"),e(372,"true"),t(),e(373,", o "),o(374,"em"),e(375,"po-checkbox-group"),t(),e(376,` passa a devolver um objeto completo para o
`),o(377,"code"),e(378,"ngModel"),t(),e(379,", diferente do array que cont\xE9m apenas os valores selecionados."),t()()(),o(380,"tr",14)(381,"td",15)(382,"div",16)(383,"span",17),e(384," (p-keydown)"),i(385,"br"),t()()(),o(386,"td",18)(387,"code",19),e(388,"EventEmitter"),t()(),o(389,"td",20),e(390,"-"),t(),o(391,"td",21)(392,"em")(393,"strong"),e(394,"(opcional)"),t()(),o(395,"p"),e(396,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(397,"code"),e(398,"KeyboardEvent"),t(),e(399," com informa\xE7\xF5es sobre a tecla."),t()()(),o(400,"tr",14)(401,"td",15)(402,"div",22)(403,"span",23),e(404," p-label"),i(405,"br"),t()()(),o(406,"td",18)(407,"code",24),e(408,"string"),t()(),o(409,"td",20),e(410,"-"),t(),o(411,"td",21)(412,"em")(413,"strong"),e(414,"(opcional)"),t()(),o(415,"p"),e(416,"Label do campo"),t()()(),o(417,"tr",14)(418,"td",15)(419,"div",22)(420,"span",23),e(421," name"),i(422,"br"),t()()(),o(423,"td",18)(424,"code",24),e(425,"string"),t()(),o(426,"td",20),e(427,"-"),t(),o(428,"td",21)(429,"p"),e(430,"Nome dos checkboxes"),t()()(),o(431,"tr",14)(432,"td",15)(433,"div",16)(434,"span",17),e(435," (ngModelChange)"),i(436,"br"),t()()(),o(437,"td",18)(438,"code",19),e(439,"EventEmitter"),t()(),o(440,"td",20),e(441,"-"),t(),o(442,"td",21)(443,"em")(444,"strong"),e(445,"(opcional)"),t()(),o(446,"p"),e(447,"Fun\xE7\xE3o para atualizar o "),o(448,"code"),e(449,"ngModel"),t(),e(450," do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),t(),o(451,"p"),e(452,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),o(453,"code"),e(454,"strictTemplates"),t(),e(455,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),o(456,"pre")(457,"code"),e(458,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),t()()()(),o(459,"tr",14)(460,"td",15)(461,"div",22)(462,"span",23),e(463," p-optional"),i(464,"br"),t()()(),o(465,"td",18)(466,"code",25),e(467,"boolean"),t()(),o(468,"td",20)(469,"p")(470,"code"),e(471,"false"),t()()(),o(472,"td",21)(473,"em")(474,"strong"),e(475,"(opcional)"),t()(),o(476,"p"),e(477,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),o(478,"blockquote")(479,"p"),e(480,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(481,"ul")(482,"li"),e(483,"O campo conter "),o(484,"code"),e(485,"p-required"),t(),e(486,";"),t(),o(487,"li"),e(488,"N\xE3o possuir "),o(489,"code"),e(490,"p-help"),t(),e(491," e/ou "),o(492,"code"),e(493,"p-label"),t(),e(494,"."),t()()()(),o(495,"tr",14)(496,"td",15)(497,"div",22)(498,"span",23),e(499," p-options"),i(500,"br"),t()()(),o(501,"td",18)(502,"code",27),e(503,"PoCheckboxGroupOption[]"),t()(),o(504,"td",20),e(505,"-"),t(),o(506,"td",21)(507,"em")(508,"strong"),e(509,"(opcional)"),t()(),o(510,"p"),e(511,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),t()()(),o(512,"tr",14)(513,"td",15)(514,"div",22)(515,"span",23),e(516," p-required"),i(517,"br"),t()()(),o(518,"td",18)(519,"code",25),e(520,"boolean"),t()(),o(521,"td",20)(522,"p")(523,"code"),e(524,"false"),t()()(),o(525,"td",21)(526,"em")(527,"strong"),e(528,"(opcional)"),t()(),o(529,"p"),e(530,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),o(531,"tr",14)(532,"td",15)(533,"div",22)(534,"span",23),e(535," p-show-required"),i(536,"br"),t()()(),o(537,"td",18)(538,"code",25),e(539,"boolean"),t()(),o(540,"td",20),e(541,"-"),t(),o(542,"td",21)(543,"p"),e(544,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),o(545,"blockquote")(546,"p"),e(547,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(548,"ul")(549,"li"),e(550,"N\xE3o possuir "),o(551,"code"),e(552,"p-help"),t(),e(553," e/ou "),o(554,"code"),e(555,"p-label"),t(),e(556,"."),t()()()(),o(557,"tr",14)(558,"td",15)(559,"div",22)(560,"span",23),e(561," p-size"),i(562,"br"),t()()(),o(563,"td",18)(564,"code",24),e(565,"string"),t()(),o(566,"td",20)(567,"p")(568,"code"),e(569,"medium"),t()()(),o(570,"td",21)(571,"em")(572,"strong"),e(573,"(opcional)"),t()(),o(574,"p"),e(575,"Define o tamanho dos checkboxes do componente:"),t(),o(576,"ul")(577,"li")(578,"code"),e(579,"small"),t(),e(580,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(581,"li")(582,"code"),e(583,"medium"),t(),e(584,": 24x24."),t()(),o(585,"blockquote")(586,"p"),e(587,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(588,"code"),e(589,"medium"),t(),e(590,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(591,"a",28),e(592,"po-theme"),t(),e(593,"."),t()()()()(),o(594,"h3",10),e(595,"M\xE9todos"),t(),o(596,"table",29)(597,"tr",14)(598,"th",30)(599,"div",22)(600,"h4")(601,"span",23),e(602," focus "),t()()()()(),o(603,"tr",21)(604,"td",21)(605,"p"),e(606,"Fun\xE7\xE3o que atribui foco ao componente."),t(),o(607,"p"),e(608,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),o(609,"pre")(610,"code"),e(611,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),t()()()()(),i(612,"br"),o(613,"table",29)(614,"tr",14)(615,"th",30)(616,"div",22)(617,"h4")(618,"span",23),e(619," showAdditionalHelp "),t()()()()(),o(620,"tr",21)(621,"td",21)(622,"p"),e(623,"M\xE9todo que exibe "),o(624,"code"),e(625,"p-additionalHelpTooltip"),t(),e(626," ou executa a a\xE7\xE3o definida em "),o(627,"code"),e(628,"p-additionalHelp"),t(),e(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),o(630,"code"),e(631,"p-keydown"),t(),e(632,"."),t(),o(633,"pre")(634,"code"),e(635,`<po-checkbox-group
 #checkboxGroup
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),t()(),o(636,"pre")(637,"code"),e(638,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),i(639,"br"),o(640,"h3"),e(641,"Interfaces"),t(),o(642,"h4",31)(643,"code",5),e(644,"PoCheckboxGroupOption"),t()(),o(645,"div",2)(646,"p"),e(647,"Interface para as a\xE7\xF5es do componente po-checkbox-group."),t()(),o(648,"h4",10),e(649,"Propriedades"),t(),o(650,"table",11)(651,"tr",12)(652,"th",13),e(653,"Nome"),t(),o(654,"th",13),e(655,"Tipo"),t(),o(656,"th",13),e(657,"Descri\xE7\xE3o"),t()(),o(658,"tr",14)(659,"td",15)(660,"div",22)(661,"span",23),e(662," disabled"),i(663,"br"),t()()(),o(664,"td",18)(665,"code",25),e(666,"boolean"),t()(),o(667,"td",21)(668,"em")(669,"strong"),e(670,"(opcional)"),t()(),o(671,"p"),e(672,"Desabilita o checkbox, por padr\xE3o as op\xE7\xF5es sempre estar\xE3o habilitadas para o usu\xE1rio."),t(),o(673,"p"),e(674,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),t()()(),o(675,"tr",14)(676,"td",15)(677,"div",22)(678,"span",23),e(679," label"),i(680,"br"),t()()(),o(681,"td",18)(682,"code",24),e(683,"string"),t()(),o(684,"td",21)(685,"p"),e(686,"Texto exibido para o usu\xE1rio ao lado do checkbox."),t()()(),o(687,"tr",14)(688,"td",15)(689,"div",22)(690,"span",23),e(691," value"),i(692,"br"),t()()(),o(693,"td",18)(694,"code",24),e(695,"string"),t()(),o(696,"td",21)(697,"p"),e(698,"Valor retornado no model."),t(),o(699,"p"),e(700,"\xC9 poss\xEDvel usar os valores "),o(701,"code"),e(702,"true"),t(),e(703," e "),o(704,"code"),e(705,"false"),t(),e(706,", caso a propriedade "),o(707,"code"),e(708,"p-indeterminate"),t(),e(709," esteja setada como "),o(710,"code"),e(711,"true"),t(),e(712,`
passa a aceitar `),o(713,"code"),e(714,"null"),t(),e(715," tamb\xE9m, por padr\xE3o esse valor sempre ser\xE1 setado como "),o(716,"code"),e(717,"false"),t(),e(718,"."),t()()()()())},dependencies:[k],encapsulation:2})}return a})();var ce=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(T(X),T(Y))};static \u0275cmp=h({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Checkbox Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),i(3,"sample-po-checkbox-group-doc"),t(),o(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),i(5,"sample-po-checkbox-group-basic-view")(6,"sample-po-checkbox-group-labs-view")(7,"sample-po-checkbox-group-password-policy-view"),t()()()),p&2&&(m("p-actions",n.actions),r(2),m("p-active",n.activeTab==="doc"),r(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ne,C,v,le,re,se,me],encapsulation:2})}return a})();var Ge=[{path:"",component:ce}],ue=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=D({type:a});static \u0275inj=O({imports:[H.forChild(Ge),H]})}return a})();var $e=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=D({type:a});static \u0275inj=O({imports:[ie,ue]})}return a})();export{$e as DocPoCheckboxGroupModule};
