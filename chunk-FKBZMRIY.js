import{o as T,p as me}from"./chunk-JYNCG2Y6.js";import{Ab as C,F as ae,Fa as Y,Ga as A,I as _,La as pe,Sa as q,Wa as B,ha as le,ja as re,nb as W,zb as v}from"./chunk-HBOGTDFH.js";import{$a as h,Ac as L,Ba as w,Dc as ee,Ea as t,Ec as te,Fa as e,Ga as a,Ic as ne,Ka as Q,La as x,M as H,Ma as K,Nc as oe,Pc as ie,Rc as $,T as c,Ta as N,U as u,Ua as j,Va as O,Xa as n,Za as y,ab as b,bb as f,eb as M,ha as p,ia as I,oa as E,pa as G,tc as R,ua as U,ub as P,wb as J,wc as k,xc as D,ya as s,yc as X,zc as F}from"./chunk-MIQUIDUB.js";var de=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-textarea-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","textarea","p-label","PO Textarea"]],template:function(r,o){r&1&&a(0,"po-textarea",0)},dependencies:[q],encapsulation:2})}return i})();var we=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-textarea-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,o){r&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Textarea Basic"),e(),t(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-textarea-basic/sample-po-textarea-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-textarea-basic/sample-po-textarea-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),e()()()()(),t(21,"div",10),a(22,"sample-po-textarea-basic"),e(),a(23,"hr")),r&2&&(p(5),w("po-icon "+o.sampleCodeButtonIcon),p(),y(" ",o.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,we,o.hideSampleCodeTabs)))},dependencies:[P,T,v,C,de],encapsulation:2})}return i})();var ue=(()=>{class i{additionalHelpTooltip;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.additionalHelpTooltip="",this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage="",this.rows=void 0,this.placeholder="",this.properties=[],this.size="medium"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-textarea-labs"]],standalone:!1,decls:20,vars:30,consts:[["f","ngForm"],["name","textarea",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-additional-help-tooltip","p-disabled","p-help","p-label","p-maxlength","p-minlength","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-rows","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","rows","p-clean","","p-label","Rows","p-min","3",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,o){if(r&1){let d=Q();t(0,"po-textarea",1),f("ngModelChange",function(l){return c(d),b(o.textarea,l)||(o.textarea=l),u(l)}),x("p-blur",function(){return c(d),u(o.changeEvent("p-blur"))})("p-change",function(){return c(d),u(o.changeEvent("p-change"))})("p-change-model",function(){return c(d),u(o.changeEvent("p-change-model"))})("p-enter",function(){return c(d),u(o.changeEvent("p-enter"))})("p-keydown",function(){return c(d),u(o.changeEvent("p-keydown"))}),e(),a(1,"hr"),t(2,"div",2),a(3,"po-info",3)(4,"po-info",4),e(),a(5,"hr"),t(6,"form",null,0)(8,"po-input",5),f("ngModelChange",function(l){return c(d),b(o.label,l)||(o.label=l),u(l)}),e(),t(9,"po-input",6),f("ngModelChange",function(l){return c(d),b(o.help,l)||(o.help=l),u(l)}),e(),t(10,"po-input",7),f("ngModelChange",function(l){return c(d),b(o.additionalHelpTooltip,l)||(o.additionalHelpTooltip=l),u(l)}),e(),t(11,"po-input",8),f("ngModelChange",function(l){return c(d),b(o.placeholder,l)||(o.placeholder=l),u(l)}),e(),t(12,"po-input",9),f("ngModelChange",function(l){return c(d),b(o.fieldErrorMessage,l)||(o.fieldErrorMessage=l),u(l)}),e(),t(13,"po-number",10),f("ngModelChange",function(l){return c(d),b(o.rows,l)||(o.rows=l),u(l)}),e(),t(14,"po-number",11),f("ngModelChange",function(l){return c(d),b(o.minlength,l)||(o.minlength=l),u(l)}),e(),t(15,"po-number",12),f("ngModelChange",function(l){return c(d),b(o.maxlength,l)||(o.maxlength=l),u(l)}),e(),t(16,"po-checkbox-group",13),f("ngModelChange",function(l){return c(d),b(o.properties,l)||(o.properties=l),u(l)}),e(),t(17,"po-radio-group",14),f("ngModelChange",function(l){return c(d),b(o.size,l)||(o.size=l),u(l)}),e(),t(18,"div",2)(19,"po-button",15),x("p-click",function(){return c(d),u(o.restore())}),e()()()}r&2&&(h("ngModel",o.textarea),s("p-additional-help-tooltip",o.additionalHelpTooltip)("p-disabled",o.properties.includes("disabled"))("p-help",o.help)("p-label",o.label)("p-maxlength",o.maxlength)("p-minlength",o.minlength)("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-readonly",o.properties.includes("readonly"))("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-rows",o.rows)("p-size",o.size)("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit")),p(3),s("p-value",o.textarea),p(),s("p-value",o.event),p(4),h("ngModel",o.label),p(),h("ngModel",o.help),p(),h("ngModel",o.additionalHelpTooltip),p(),h("ngModel",o.placeholder),p(),h("ngModel",o.fieldErrorMessage),p(),h("ngModel",o.rows),p(),h("ngModel",o.minlength),p(),h("ngModel",o.maxlength),p(),h("ngModel",o.properties),s("p-options",o.propertiesOptions),p(),h("ngModel",o.size),s("p-options",o.sizeOptions))},dependencies:[L,k,D,F,X,ae,le,re,A,pe,q,B],encapsulation:2})}return i})();var Pe=i=>({"docs-sample-code-tabs":i}),ge=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-textarea-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,o){r&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Textarea Labs"),e(),t(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-textarea-labs/sample-po-textarea-labs.component.html"),e(),t(13,"pre",7),n(14,`<po-textarea
  name="textarea"
  [(ngModel)]="textarea"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-rows]="rows"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-textarea>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="textarea"> </po-info>

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
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="rows" [(ngModel)]="rows" p-clean p-label="Rows" p-min="3"> </po-number>

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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-textarea-labs/sample-po-textarea-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-labs',
  templateUrl: './sample-po-textarea-labs.component.html',
  standalone: false
})
export class SamplePoTextareaLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  rows: string;
  size: string;
  textarea: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
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

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.textarea = undefined;
    this.label = undefined;
    this.help = undefined;
    this.minlength = undefined;
    this.maxlength = undefined;
    this.event = undefined;
    this.fieldErrorMessage = '';
    this.rows = undefined;
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),e()()()()(),t(21,"div",10),a(22,"sample-po-textarea-labs"),e(),a(23,"hr")),r&2&&(p(5),w("po-icon "+o.sampleCodeButtonIcon),p(),y(" ",o.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Pe,o.hideSampleCodeTabs)))},dependencies:[P,T,v,C,ue],encapsulation:2})}return i})();var qe=["formEmail"];function Ve(i,Ce){if(i&1&&(t(0,"div")(1,"div",8),a(2,"po-info",14),e(),a(3,"hr"),e()),i&2){let m=K();p(2),s("p-value",m.cc)}}var Ee=(()=>{class i{formEmail;poModal;cc="";emailText="";from="";subject="";to="";pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:"Ok"};getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-textarea-email"]],viewQuery:function(r,o){if(r&1&&(N(qe,7),N(_,7)),r&2){let d;j(d=O())&&(o.formEmail=d.first),j(d=O())&&(o.poModal=d.first)}},standalone:!1,decls:19,vars:12,consts:[["formEmail","ngForm"],["p-title","Send email",3,"p-actions"],["name","from","p-clean","","p-label","From","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","emailText","p-label","E-mail","p-required","","p-rows","8",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],[4,"ngIf"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,o){if(r&1){let d=Q();t(0,"po-page-default",1)(1,"form",null,0)(3,"po-email",2),f("ngModelChange",function(l){return c(d),b(o.from,l)||(o.from=l),u(l)}),e(),t(4,"po-email",3),f("ngModelChange",function(l){return c(d),b(o.to,l)||(o.to=l),u(l)}),e(),t(5,"po-email",4),f("ngModelChange",function(l){return c(d),b(o.cc,l)||(o.cc=l),u(l)}),e(),t(6,"po-input",5),f("ngModelChange",function(l){return c(d),b(o.subject,l)||(o.subject=l),u(l)}),e(),t(7,"po-textarea",6),f("ngModelChange",function(l){return c(d),b(o.emailText,l)||(o.emailText=l),u(l)}),e()()(),t(8,"po-modal",7)(9,"div",8),a(10,"po-info",9)(11,"po-info",10),e(),a(12,"hr"),U(13,Ve,4,1,"div",11),t(14,"div",8),a(15,"po-info",12),e(),a(16,"hr"),t(17,"div",8)(18,"po-textarea",13),f("ngModelChange",function(l){return c(d),b(o.emailText,l)||(o.emailText=l),u(l)}),e()()()}r&2&&(s("p-actions",o.getPageAction()),p(3),h("ngModel",o.from),p(),h("ngModel",o.to),p(),h("ngModel",o.cc),p(),h("ngModel",o.subject),p(),h("ngModel",o.emailText),p(),s("p-primary-action",o.primaryAction),p(2),s("p-value",o.from),p(),s("p-value",o.to),p(2),s("ngIf",o.cc!==""),p(2),s("p-value",o.subject),p(3),h("ngModel",o.emailText))},dependencies:[J,L,k,D,F,X,Y,A,q,B,_,W],encapsulation:2})}return i})();var De=i=>({"docs-sample-code-tabs":i}),he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-textarea-email-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,o){r&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Textarea - Email"),e(),t(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-textarea-email/sample-po-textarea-email.component.html"),e(),t(13,"pre",7),n(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
  <form #formEmail="ngForm">
    <po-email class="po-sm-12" name="from" [(ngModel)]="from" p-clean p-label="From" p-required> </po-email>

    <po-email class="po-sm-12" name="to" [(ngModel)]="to" p-clean p-label="To" p-required> </po-email>

    <po-email class="po-sm-12" name="cc" [(ngModel)]="cc" p-clean p-label="CC"> </po-email>

    <po-input class="po-sm-12" name="subject" [(ngModel)]="subject" p-clean p-label="Subject" p-required> </po-input>

    <po-textarea class="po-sm-12" name="emailText" [(ngModel)]="emailText" p-label="E-mail" p-required p-rows="8">
    </po-textarea>
  </form>
</po-page-default>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="from"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="to"> </po-info>
  </div>

  <hr />

  <div *ngIf="cc !== ''">
    <div class="po-row">
      <po-info class="po-md-12" p-label="CC:" [p-value]="cc"> </po-info>
    </div>
    <hr />
  </div>

  <div class="po-row">
    <po-info class="po-md-12" p-label="Subject:" [p-value]="subject"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-textarea class="po-md-12" name="text" [(ngModel)]="emailText" p-label="E-mail" p-readonly p-rows="6">
    </po-textarea>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-textarea-email/sample-po-textarea-email.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-email',
  templateUrl: './sample-po-textarea-email.component.html',
  standalone: false
})
export class SamplePoTextareaEmailComponent {
  @ViewChild('formEmail', { static: true }) formEmail: UntypedFormControl;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  cc: string = '';
  emailText: string = '';
  from: string = '';
  subject: string = '';
  to: string = '';

  pageActions: Array<PoPageAction>;
  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.reset();
    },
    label: 'Ok'
  };
  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail['valid'] : true;
    return [
      { label: 'Send', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.poModal.open();
  }
}
`),e()()()()(),t(21,"div",10),a(22,"sample-po-textarea-email"),e(),a(23,"hr")),r&2&&(p(5),w("po-icon "+o.sampleCodeButtonIcon),p(),y(" ",o.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,De,o.hideSampleCodeTabs)))},dependencies:[P,T,v,C,Ee],encapsulation:2})}return i})();function Le(i,Ce){if(i&1&&(t(0,"div")(1,"div",8),a(2,"po-info",14),e(),a(3,"hr"),e()),i&2){let m=K();p(2),s("p-value",m.formEmail.get("cc").value)}}var be=(()=>{class i{formBuilder;poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:"Ok"};constructor(m){this.formBuilder=m}ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,R.required],to:[null,R.required],emailText:[null,R.required],subject:[null,R.required]})}getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static \u0275fac=function(r){return new(r||i)(I(ne))};static \u0275cmp=E({type:i,selectors:[["sample-po-textarea-email-reactive-form"]],viewQuery:function(r,o){if(r&1&&N(_,7),r&2){let d;j(d=O())&&(o.poModal=d.first)}},standalone:!1,decls:18,vars:8,consts:[["p-title","Send email",3,"p-actions"],[3,"formGroup"],["name","from","formControlName","from","p-clean","","p-label","From","p-required","",1,"po-sm-12"],["name","to","formControlName","to","p-clean","","p-label","To","p-required","",1,"po-sm-12"],["name","cc","formControlName","cc","p-clean","","p-label","CC",1,"po-sm-12"],["name","subject","formControlName","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12"],["name","emailText","formControlName","emailText","p-label","E-mail","p-rows","8","p-required","",1,"po-sm-12"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],[4,"ngIf"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-required","","p-rows","6",1,"po-md-12",3,"ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,o){r&1&&(t(0,"po-page-default",0)(1,"form",1),a(2,"po-email",2)(3,"po-email",3)(4,"po-email",4)(5,"po-input",5)(6,"po-textarea",6),e()(),t(7,"po-modal",7)(8,"div",8),a(9,"po-info",9)(10,"po-info",10),e(),a(11,"hr"),U(12,Le,4,1,"div",11),t(13,"div",8),a(14,"po-info",12),e(),a(15,"hr"),t(16,"div",8),a(17,"po-textarea",13),e()()),r&2&&(s("p-actions",o.getPageAction()),p(),s("formGroup",o.formEmail),p(6),s("p-primary-action",o.primaryAction),p(2),s("p-value",o.formEmail.get("from").value),p(),s("p-value",o.formEmail.get("to").value),p(2),s("ngIf",o.formEmail.get("cc").value),p(2),s("p-value",o.formEmail.get("subject").value),p(3),s("ngModel",o.formEmail.get("emailText").value))},dependencies:[J,L,k,D,F,ee,te,Y,A,q,B,_,W],encapsulation:2})}return i})();var Be=i=>({"docs-sample-code-tabs":i}),fe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-textarea-email-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,o){r&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Textarea - Email Reactive Form"),e(),t(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html"),e(),t(13,"pre",7),n(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
  <form [formGroup]="formEmail">
    <po-email class="po-sm-12" name="from" formControlName="from" p-clean p-label="From" p-required> </po-email>

    <po-email class="po-sm-12" name="to" formControlName="to" p-clean p-label="To" p-required> </po-email>

    <po-email class="po-sm-12" name="cc" formControlName="cc" p-clean p-label="CC"> </po-email>

    <po-input class="po-sm-12" name="subject" formControlName="subject" p-clean p-label="Subject" p-required>
    </po-input>

    <po-textarea class="po-sm-12" name="emailText" formControlName="emailText" p-label="E-mail" p-rows="8" p-required>
    </po-textarea>
  </form>
</po-page-default>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="formEmail.get('from').value"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="formEmail.get('to').value"> </po-info>
  </div>

  <hr />

  <div *ngIf="formEmail.get('cc').value">
    <div class="po-row">
      <po-info class="po-md-12" p-label="CC:" [p-value]="formEmail.get('cc').value"> </po-info>
    </div>
    <hr />
  </div>

  <div class="po-row">
    <po-info class="po-md-12" p-label="Subject:" [p-value]="formEmail.get('subject').value"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-textarea
      class="po-md-12"
      name="text"
      [ngModel]="formEmail.get('emailText').value"
      p-label="E-mail"
      p-readonly
      p-required
      p-rows="6"
    >
    </po-textarea>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-email-reactive-form',
  templateUrl: './sample-po-textarea-email-reactive-form.component.html',
  standalone: false
})
export class SamplePoTextareaEmailReactiveFormComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  formEmail: UntypedFormGroup;
  pageActions: Array<PoPageAction>;
  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.reset();
    },
    label: 'Ok'
  };

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.formEmail = this.formBuilder.group({
      cc: null,
      from: [null, Validators.required],
      to: [null, Validators.required],
      emailText: [null, Validators.required],
      subject: [null, Validators.required]
    });
  }

  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail.valid : true;
    return [
      { label: 'Send', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.poModal.open();
  }
}
`),e()()()()(),t(21,"div",10),a(22,"sample-po-textarea-email-reactive-form"),e(),a(23,"hr")),r&2&&(p(5),w("po-icon "+o.sampleCodeButtonIcon),p(),y(" ",o.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Be,o.hideSampleCodeTabs)))},dependencies:[P,T,v,C,be],encapsulation:2})}return i})();var xe=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=E({type:i,selectors:[["sample-po-textarea-doc"]],standalone:!1,decls:711,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,o){r&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),t(7,"blockquote")(8,"p"),n(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),n(11,"FormsModule"),e(),n(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),n(14,"ReactiveFormsModule"),e(),n(15,", ambos nativos do Angular."),e()()(),t(16,"h3",3),n(17,"Componente"),e(),t(18,"h4",4)(19,"code",5),n(20,"PoTextareaComponent"),e()(),t(21,"div",2)(22,"p"),n(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),e(),t(24,"p"),n(25,"Importante:"),e(),t(26,"ul")(27,"li"),n(28,"A propriedade "),t(29,"code"),n(30,"name"),e(),n(31," \xE9 obrigat\xF3ria para que o formul\xE1rio e o "),t(32,"code"),n(33,"model"),e(),n(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),t(35,"em"),n(36,"Angular"),e(),n(37,", onde ser\xE1 necess\xE1rio informar o atributo "),t(38,"code"),n(39,"name"),e(),n(40," ou o atributo "),t(41,"code"),n(42,'[ngModelOptions]="{standalone: true}"'),e(),n(43,", por exemplo:"),e()(),t(44,"pre")(45,"code"),n(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),e()(),t(47,"h4"),n(48,"Acessibilidade tratada no componente"),e(),t(49,"p"),n(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),e(),t(51,"ul")(52,"li"),n(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),t(54,"a",6),n(55,"WCAG 4.1.2: Name, Role, Value"),e()(),t(56,"li"),n(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),t(58,"a",7),n(59,"WCAG 2.4.12: Focus Appearance)"),e()(),t(60,"li"),n(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),t(62,"a",8),n(63,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),e()()(),t(64,"h4"),n(65,"Tokens customiz\xE1veis"),e(),t(66,"p"),n(67,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(68,"blockquote")(69,"p"),n(70,"Para maiores informa\xE7\xF5es, acesse o guia "),t(71,"a",9),n(72,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(73,"."),e()(),t(74,"table")(75,"thead")(76,"tr")(77,"th"),n(78,"Propriedade"),e(),t(79,"th"),n(80,"Descri\xE7\xE3o"),e(),t(81,"th"),n(82,"Valor Padr\xE3o"),e()()(),t(83,"tbody")(84,"tr")(85,"td")(86,"strong"),n(87,"Default Values"),e()(),a(88,"td")(89,"td"),e(),t(90,"tr")(91,"td")(92,"code"),n(93,"--font-family"),e()(),t(94,"td"),n(95,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(96,"td")(97,"code"),n(98,"var(--font-family-theme)"),e()()(),t(99,"tr")(100,"td")(101,"code"),n(102,"--font-size"),e()(),t(103,"td"),n(104,"Tamanho da fonte"),e(),t(105,"td")(106,"code"),n(107,"var(--font-size-default)"),e()()(),t(108,"tr")(109,"td")(110,"code"),n(111,"--text-color-placeholder"),e()(),t(112,"td"),n(113,"Cor do texto placeholder"),e(),t(114,"td")(115,"code"),n(116,"var(--color-neutral-light-30)"),e()()(),t(117,"tr")(118,"td")(119,"code"),n(120,"--color"),e()(),t(121,"td"),n(122,"Cor pincipal do campo"),e(),t(123,"td")(124,"code"),n(125,"var(--color-neutral-dark-70)"),e()()(),t(126,"tr")(127,"td")(128,"code"),n(129,"--background"),e()(),t(130,"td"),n(131,"Cor de background"),e(),t(132,"td")(133,"code"),n(134,"var(--color-neutral-light-05)"),e()()()()()(),t(135,"div",10)(136,"h4",11),n(137,"Seletor"),e(),t(138,"pre",12),n(139,`<po-textarea
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-disabled="boolean"
    (p-enter)="EventEmitter"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-maxlength="number"
    p-minlength="number"
    name="string"
    p-optional="boolean"
    p-placeholder="string"
    p-readonly="boolean"
    p-required="boolean"
    p-rows="number"
    p-show-required="boolean"
    p-size="string" >
</po-textarea>
`),e()(),t(140,"h4",13),n(141,"Propriedades"),e(),t(142,"table",14)(143,"tr",15)(144,"th",16),n(145,"Nome"),e(),t(146,"th",16),n(147,"Tipo"),e(),t(148,"th",16),n(149,"Padr\xE3o"),e(),t(150,"th",16),n(151,"Descri\xE7\xE3o"),e()(),t(152,"tr",17)(153,"td",18)(154,"div",19)(155,"span",20),n(156," (p-additional-help)"),a(157,"br"),e()()(),t(158,"td",21)(159,"code",22),n(160,"EventEmitter"),e()(),t(161,"td",23),n(162,"-"),e(),t(163,"td",24)(164,"em")(165,"strong"),n(166,"(opcional)"),e()(),t(167,"p"),n(168,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),t(169,"code"),n(170,"p-help"),e(),n(171,"."),e()()(),t(172,"tr",17)(173,"td",18)(174,"div",25)(175,"span",26),n(176," p-additional-help-tooltip"),a(177,"br"),e()()(),t(178,"td",21)(179,"code",27),n(180,"string"),e()(),t(181,"td",23),n(182,"-"),e(),t(183,"td",24)(184,"em")(185,"strong"),n(186,"(opcional)"),e()(),t(187,"p"),n(188,"Exibe um \xEDcone de ajuda adicional ao "),t(189,"code"),n(190,"p-help"),e(),n(191,`, com o texto desta propriedade no tooltip.
Se o evento `),t(192,"code"),n(193,"p-additional-help"),e(),n(194,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),t(195,"strong"),n(196,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),e()(),t(197,"blockquote")(198,"p"),n(199,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),e()()()(),t(200,"tr",17)(201,"td",18)(202,"div",25)(203,"span",26),n(204," p-append-in-body"),a(205,"br"),e()()(),t(206,"td",21)(207,"code",28),n(208,"boolean"),e()(),t(209,"td",23)(210,"p")(211,"code"),n(212,"false"),e()()(),t(213,"td",24)(214,"em")(215,"strong"),n(216,"(opcional)"),e()(),t(217,"p"),n(218,"Define que o tooltip ("),t(219,"code"),n(220,"p-additional-help-tooltip"),e(),n(221," e/ou "),t(222,"code"),n(223,"p-error-limit"),e(),n(224,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),e(),t(225,"blockquote")(226,"p"),n(227,"Quando utilizado com "),t(228,"code"),n(229,"p-additional-help-tooltip"),e(),n(230,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),e()()()(),t(231,"tr",17)(232,"td",18)(233,"div",25)(234,"span",26),n(235," p-auto-focus"),a(236,"br"),e()()(),t(237,"td",21)(238,"code",28),n(239,"boolean"),e()(),t(240,"td",23)(241,"p")(242,"code"),n(243,"false"),e()()(),t(244,"td",24)(245,"em")(246,"strong"),n(247,"(opcional)"),e()(),t(248,"p"),n(249,"Aplica foco no elemento ao ser iniciado."),e(),t(250,"blockquote")(251,"p"),n(252,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),e()()()(),t(253,"tr",17)(254,"td",18)(255,"div",19)(256,"span",20),n(257," (p-blur)"),a(258,"br"),e()()(),t(259,"td",21)(260,"code",22),n(261,"EventEmitter"),e()(),t(262,"td",23),n(263,"-"),e(),t(264,"td",24)(265,"em")(266,"strong"),n(267,"(opcional)"),e()(),t(268,"p"),n(269,"Evento disparado ao sair do campo."),e()()(),t(270,"tr",17)(271,"td",18)(272,"div",19)(273,"span",20),n(274," (p-change)"),a(275,"br"),e()()(),t(276,"td",21)(277,"code",22),n(278,"EventEmitter"),e()(),t(279,"td",23),n(280,"-"),e(),t(281,"td",24)(282,"em")(283,"strong"),n(284,"(opcional)"),e()(),t(285,"p"),n(286,"Evento disparado ao alterar valor e deixar o campo."),e()()(),t(287,"tr",17)(288,"td",18)(289,"div",19)(290,"span",20),n(291," (p-change-model)"),a(292,"br"),e()()(),t(293,"td",21)(294,"code",22),n(295,"EventEmitter"),e()(),t(296,"td",23),n(297,"-"),e(),t(298,"td",24)(299,"em")(300,"strong"),n(301,"(opcional)"),e()(),t(302,"p"),n(303,"Evento disparado ao alterar valor do model."),e()()(),t(304,"tr",17)(305,"td",18)(306,"div",25)(307,"span",26),n(308," p-disabled"),a(309,"br"),e()()(),t(310,"td",21)(311,"code",28),n(312,"boolean"),e()(),t(313,"td",23)(314,"p")(315,"code"),n(316,"false"),e()()(),t(317,"td",24)(318,"em")(319,"strong"),n(320,"(opcional)"),e()(),t(321,"p"),n(322,"Indica que o campo ser\xE1 desabilitado."),e()()(),t(323,"tr",17)(324,"td",18)(325,"div",19)(326,"span",20),n(327," (p-enter)"),a(328,"br"),e()()(),t(329,"td",21)(330,"code",22),n(331,"EventEmitter"),e()(),t(332,"td",23),n(333,"-"),e(),t(334,"td",24)(335,"em")(336,"strong"),n(337,"(opcional)"),e()(),t(338,"p"),n(339,"Evento disparado ao entrar do campo."),e()()(),t(340,"tr",17)(341,"td",18)(342,"div",25)(343,"span",26),n(344," p-error-limit"),a(345,"br"),e()()(),t(346,"td",21)(347,"code",28),n(348,"boolean"),e()(),t(349,"td",23)(350,"p")(351,"code"),n(352,"false"),e()()(),t(353,"td",24)(354,"em")(355,"strong"),n(356,"(opcional)"),e()(),t(357,"p"),n(358,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),e(),t(359,"blockquote")(360,"p"),n(361,"Caso essa propriedade seja definida como "),t(362,"code"),n(363,"true"),e(),n(364,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),e()()()(),t(365,"tr",17)(366,"td",18)(367,"div",25)(368,"span",26),n(369," p-field-error-message"),a(370,"br"),e()()(),t(371,"td",21)(372,"code",27),n(373,"string"),e()(),t(374,"td",23),n(375,"-"),e(),t(376,"td",24)(377,"em")(378,"strong"),n(379,"(opcional)"),e()(),t(380,"p"),n(381,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),e(),t(382,"blockquote")(383,"p"),n(384,"Necess\xE1rio que a propriedade "),t(385,"code"),n(386,"p-required"),e(),n(387," esteja habilitada."),e()()()(),t(388,"tr",17)(389,"td",18)(390,"div",25)(391,"span",26),n(392," p-help"),a(393,"br"),e()()(),t(394,"td",21)(395,"code",27),n(396,"string"),e()(),t(397,"td",23),n(398,"-"),e(),t(399,"td",24)(400,"em")(401,"strong"),n(402,"(opcional)"),e()(),t(403,"p"),n(404,"Texto de apoio do campo."),e()()(),t(405,"tr",17)(406,"td",18)(407,"div",19)(408,"span",20),n(409," (p-keydown)"),a(410,"br"),e()()(),t(411,"td",21)(412,"code",22),n(413,"EventEmitter"),e()(),t(414,"td",23),n(415,"-"),e(),t(416,"td",24)(417,"em")(418,"strong"),n(419,"(opcional)"),e()(),t(420,"p"),n(421,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),t(422,"code"),n(423,"KeyboardEvent"),e(),n(424," com informa\xE7\xF5es sobre a tecla."),e()()(),t(425,"tr",17)(426,"td",18)(427,"div",25)(428,"span",26),n(429," p-label"),a(430,"br"),e()()(),t(431,"td",21)(432,"code",27),n(433,"string"),e()(),t(434,"td",23),n(435,"-"),e(),t(436,"td",24)(437,"em")(438,"strong"),n(439,"(opcional)"),e()(),t(440,"p"),n(441,"Label do campo."),e()()(),t(442,"tr",17)(443,"td",18)(444,"div",25)(445,"span",26),n(446," p-maxlength"),a(447,"br"),e()()(),t(448,"td",21)(449,"code",29),n(450,"number"),e()(),t(451,"td",23),n(452,"-"),e(),t(453,"td",24)(454,"em")(455,"strong"),n(456,"(opcional)"),e()(),t(457,"p"),n(458,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),e()()(),t(459,"tr",17)(460,"td",18)(461,"div",25)(462,"span",26),n(463," p-minlength"),a(464,"br"),e()()(),t(465,"td",21)(466,"code",29),n(467,"number"),e()(),t(468,"td",23),n(469,"-"),e(),t(470,"td",24)(471,"em")(472,"strong"),n(473,"(opcional)"),e()(),t(474,"p"),n(475,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),e()()(),t(476,"tr",17)(477,"td",18)(478,"div",25)(479,"span",26),n(480," name"),a(481,"br"),e()()(),t(482,"td",21)(483,"code",27),n(484,"string"),e()(),t(485,"td",23),n(486,"-"),e(),t(487,"td",24)(488,"p"),n(489,"Nome e Id do componente."),e()()(),t(490,"tr",17)(491,"td",18)(492,"div",25)(493,"span",26),n(494," p-optional"),a(495,"br"),e()()(),t(496,"td",21)(497,"code",28),n(498,"boolean"),e()(),t(499,"td",23)(500,"p")(501,"code"),n(502,"false"),e()()(),t(503,"td",24)(504,"em")(505,"strong"),n(506,"(opcional)"),e()(),t(507,"p"),n(508,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e(),t(509,"blockquote")(510,"p"),n(511,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(512,"ul")(513,"li"),n(514,"O campo conter "),t(515,"code"),n(516,"p-required"),e(),n(517,";"),e(),t(518,"li"),n(519,"N\xE3o possuir "),t(520,"code"),n(521,"p-help"),e(),n(522," e/ou "),t(523,"code"),n(524,"p-label"),e(),n(525,"."),e()()()(),t(526,"tr",17)(527,"td",18)(528,"div",25)(529,"span",26),n(530," p-placeholder"),a(531,"br"),e()()(),t(532,"td",21)(533,"code",27),n(534,"string"),e()(),t(535,"td",23),n(536,"-"),e(),t(537,"td",24)(538,"p"),n(539,"Placeholder, mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),e()()(),t(540,"tr",17)(541,"td",18)(542,"div",25)(543,"span",26),n(544," p-readonly"),a(545,"br"),e()()(),t(546,"td",21)(547,"code",28),n(548,"boolean"),e()(),t(549,"td",23)(550,"p")(551,"code"),n(552,"false"),e()()(),t(553,"td",24)(554,"em")(555,"strong"),n(556,"(opcional)"),e()(),t(557,"p"),n(558,"Indica que o campo ser\xE1 somente leitura."),e()()(),t(559,"tr",17)(560,"td",18)(561,"div",25)(562,"span",26),n(563," p-required"),a(564,"br"),e()()(),t(565,"td",21)(566,"code",28),n(567,"boolean"),e()(),t(568,"td",23)(569,"p")(570,"code"),n(571,"false"),e()()(),t(572,"td",24)(573,"em")(574,"strong"),n(575,"(opcional)"),e()(),t(576,"p"),n(577,"Define que o campo ser\xE1 obrigat\xF3rio."),e(),t(578,"blockquote")(579,"p"),n(580,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),t(581,"code"),n(582,"(p-disabled)"),e(),n(583,"."),e()()()(),t(584,"tr",17)(585,"td",18)(586,"div",25)(587,"span",26),n(588," p-rows"),a(589,"br"),e()()(),t(590,"td",21)(591,"code",29),n(592,"number"),e()(),t(593,"td",23)(594,"p")(595,"code"),n(596,"3"),e()()(),t(597,"td",24)(598,"em")(599,"strong"),n(600,"(opcional)"),e()(),t(601,"p"),n(602,"Indica a quantidade de linhas que ser\xE3o exibidas."),e()()(),t(603,"tr",17)(604,"td",18)(605,"div",25)(606,"span",26),n(607," p-show-required"),a(608,"br"),e()()(),t(609,"td",21)(610,"code",28),n(611,"boolean"),e()(),t(612,"td",23),n(613,"-"),e(),t(614,"td",24)(615,"p"),n(616,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e(),t(617,"blockquote")(618,"p"),n(619,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(620,"ul")(621,"li"),n(622,"N\xE3o possuir "),t(623,"code"),n(624,"p-help"),e(),n(625," e/ou "),t(626,"code"),n(627,"p-label"),e(),n(628,"."),e()()()(),t(629,"tr",17)(630,"td",18)(631,"div",25)(632,"span",26),n(633," p-size"),a(634,"br"),e()()(),t(635,"td",21)(636,"code",27),n(637,"string"),e()(),t(638,"td",23)(639,"p")(640,"code"),n(641,"medium"),e()()(),t(642,"td",24)(643,"em")(644,"strong"),n(645,"(opcional)"),e()(),t(646,"p"),n(647,"Define o tamanho do componente:"),e(),t(648,"ul")(649,"li")(650,"code"),n(651,"small"),e(),n(652," (dispon\xEDvel apenas para acessibilidade AA)"),e(),t(653,"li")(654,"code"),n(655,"medium"),e()()(),t(656,"blockquote")(657,"p"),n(658,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(659,"code"),n(660,"medium"),e(),n(661,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(662,"a",30),n(663,"po-theme"),e(),n(664,"."),e()()()()(),t(665,"h3",13),n(666,"M\xE9todos"),e(),t(667,"table",31)(668,"tr",17)(669,"th",32)(670,"div",25)(671,"h4")(672,"span",26),n(673," focus "),e()()()()(),t(674,"tr",24)(675,"td",24)(676,"p"),n(677,"Fun\xE7\xE3o que atribui foco ao componente."),e(),t(678,"p"),n(679,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(680,"pre")(681,"code"),n(682,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),e()()()()(),a(683,"br"),t(684,"table",31)(685,"tr",17)(686,"th",32)(687,"div",25)(688,"h4")(689,"span",26),n(690," showAdditionalHelp "),e()()()()(),t(691,"tr",24)(692,"td",24)(693,"p"),n(694,"M\xE9todo que exibe "),t(695,"code"),n(696,"p-additionalHelpTooltip"),e(),n(697," ou executa a a\xE7\xE3o definida em "),t(698,"code"),n(699,"p-additionalHelp"),e(),n(700,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),t(701,"code"),n(702,"p-keydown"),e(),n(703,"."),e(),t(704,"pre")(705,"code"),n(706,`<po-textarea
 #textarea
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),e()(),t(707,"pre")(708,"code"),n(709,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),e()()()()(),a(710,"br"),e())},dependencies:[T],encapsulation:2})}return i})();var Se=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||i)(I(oe),I(ie))};static \u0275cmp=E({type:i,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Textarea",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,o){r&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return o.changeTab("doc")}),a(3,"sample-po-textarea-doc"),e(),t(4,"po-tab",3),x("p-click",function(){return o.changeTab("web")}),a(5,"sample-po-textarea-basic-view")(6,"sample-po-textarea-labs-view")(7,"sample-po-textarea-email-view")(8,"sample-po-textarea-email-reactive-form-view"),e()()()),r&2&&(s("p-actions",o.actions),p(2),s("p-active",o.activeTab==="doc"),p(2),s("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[W,v,C,se,ge,he,fe,xe],encapsulation:2})}return i})();var Ne=[{path:"",component:Se}],ve=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=G({type:i});static \u0275inj=H({imports:[$.forChild(Ne),$]})}return i})();var ht=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=G({type:i});static \u0275inj=H({imports:[me,ve]})}return i})();export{ht as DocPoTextareaModule};
