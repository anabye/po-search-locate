import{a as w,b as S,o as f,p as oe}from"./chunk-JYNCG2Y6.js";import{Ab as g,F as k,Ga as $,K as X,Ra as ee,Wa as j,ca as Y,ja as Z,nb as te,zb as b}from"./chunk-HBOGTDFH.js";import{$a as x,Ac as Q,Ba as P,Ea as o,Fa as t,Ga as a,Ka as F,La as c,M as O,Nc as G,Pc as K,Rc as I,T as E,Ta as B,U as v,Ua as L,Va as z,Wa as A,Xa as e,Za as C,ab as M,bb as R,eb as _,ha as d,ia as D,oa as u,pa as V,ub as T,wc as W,xc as H,ya as m,yc as J,zc as U}from"./chunk-MIQUIDUB.js";var ie=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-modal-password-recovery-basic"]],standalone:!1,decls:3,vars:0,consts:[["passwordRecoveryModal",""],["p-label","Open modal password recovery",3,"p-click"]],template:function(r,n){if(r&1){let p=F();a(0,"po-modal-password-recovery",null,0),o(2,"po-button",1),c("p-click",function(){E(p);let s=A(1);return v(s.open())}),t()}},dependencies:[k,S],encapsulation:2})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-modal-password-recovery-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Modal Password Recovery Basic"),t(),o(4,"a",2),c("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-modal-password-recovery #passwordRecoveryModal></po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="passwordRecoveryModal.open()"> </po-button>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-modal-password-recovery-basic',
  templateUrl: './sample-po-modal-password-recovery-basic.component.html',
  standalone: false
})
export class SamplePoModalPasswordRecoveryBasicComponent {}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-modal-password-recovery-basic"),t(),a(23,"hr")),r&2&&(d(5),P("po-icon "+n.sampleCodeButtonIcon),d(),C(" ",n.sampleCodeButtonLabel,""),d(),m("ngClass",_(4,ve,n.hideSampleCodeTabs)))},dependencies:[T,f,b,g,ie],encapsulation:2})}return i})();var le=(()=>{class i{poDialog;poModalPasswordRecovery;codeError;componentsSize;email;event;invalidCode=!0;invalidCodeMessage;phoneMask;submitEvent;type;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"All",value:w.All},{label:"Email",value:w.Email},{label:"SMS",value:w.SMS}];constructor(l){this.poDialog=l}ngOnInit(){this.restore()}changeEvent(l){this.event=l}openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}restore(){this.codeError=void 0,this.componentsSize="medium",this.email=void 0,this.event=void 0,this.phoneMask=void 0,this.submitEvent=void 0,this.type=w.Email}submit(l){this.poDialog.alert({title:"Change Password Requested By User",message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.advanceModal(l)})}submitCode(l){this.poDialog.alert({title:"Emitted SMS Code By User",message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.resendCode(l)})}advanceModal(l){l.hasOwnProperty("sms")?this.openSmsCode(l):this.openConfirmation(l)}openConfirmation(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openConfirmation()}openSmsCode(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openSmsCode()}resendCode(l){this.submitEvent=JSON.stringify(event),this.invalidCode&&this.invalidCodeMessage?(this.invalidCode=!this.invalidCode,this.codeError=this.invalidCodeMessage,this.poModalPasswordRecovery.openSmsCode()):(this.codeError=void 0,this.invalidCode=!this.invalidCode,this.poModalPasswordRecovery.completed())}static \u0275fac=function(r){return new(r||i)(D(X))};static \u0275cmp=u({type:i,selectors:[["sample-po-modal-password-recovery-labs"]],viewQuery:function(r,n){if(r&1&&B(S,5),r&2){let p;L(p=z())&&(n.poModalPasswordRecovery=p.first)}},standalone:!1,decls:17,vars:14,consts:[["f","ngForm"],[3,"p-code-submit","p-submit","p-code-error","p-components-size","p-contact-email","p-phone-mask","p-type"],["p-label","Open modal password recovery",3,"p-click"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","type","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","invalidCodeMessage","p-clean","","p-label","Code Error","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-maxlength","30","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phoneMask","p-clean","","p-label","Phone Mask","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let p=F();o(0,"po-modal-password-recovery",1),c("p-code-submit",function(s){return E(p),n.submitCode(s),v(n.changeEvent("p-submit-code"))})("p-submit",function(s){return E(p),n.submit(s),v(n.changeEvent("p-submit"))}),t(),o(1,"po-button",2),c("p-click",function(){return E(p),v(n.openPasswordRecoveryModal())}),t(),a(2,"hr"),o(3,"div",3),a(4,"po-info",4)(5,"po-info",5),t(),a(6,"hr"),o(7,"form",null,0)(9,"div",3)(10,"po-select",6),R("ngModelChange",function(s){return E(p),M(n.type,s)||(n.type=s),v(s)}),t(),o(11,"po-input",7),R("ngModelChange",function(s){return E(p),M(n.invalidCodeMessage,s)||(n.invalidCodeMessage=s),v(s)}),t(),o(12,"po-input",8),R("ngModelChange",function(s){return E(p),M(n.email,s)||(n.email=s),v(s)}),t(),o(13,"po-input",9),R("ngModelChange",function(s){return E(p),M(n.phoneMask,s)||(n.phoneMask=s),v(s)}),t(),o(14,"po-radio-group",10),R("ngModelChange",function(s){return E(p),M(n.componentsSize,s)||(n.componentsSize=s),v(s)}),t()(),o(15,"div",3)(16,"po-button",11),c("p-click",function(){return E(p),A(8).reset(),v(n.restore())}),t()()()}r&2&&(m("p-code-error",n.codeError)("p-components-size",n.componentsSize)("p-contact-email",n.email)("p-phone-mask",n.phoneMask)("p-type",n.type),d(4),m("p-value",n.submitEvent),d(),m("p-value",n.event),d(5),x("ngModel",n.type),m("p-options",n.typeOptions),d(),x("ngModel",n.invalidCodeMessage),d(),x("ngModel",n.email),d(),x("ngModel",n.phoneMask),d(),x("ngModel",n.componentsSize),m("p-options",n.componentsSizeOptions))},dependencies:[Q,W,H,U,J,k,Z,$,ee,j,S],encapsulation:2})}return i})();var he=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-modal-password-recovery-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Modal Password Recovery Labs"),t(),o(4,"a",2),c("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-modal-password-recovery
  [p-code-error]="codeError"
  [p-components-size]="componentsSize"
  [p-contact-email]="email"
  [p-phone-mask]="phoneMask"
  [p-type]="type"
  (p-code-submit)="submitCode($event); changeEvent('p-submit-code')"
  (p-submit)="submit($event); changeEvent('p-submit')"
>
</po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="openPasswordRecoveryModal()"> </po-button>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="submitEvent"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-select class="po-md-6" name="type" [(ngModel)]="type" p-label="Type" [p-options]="typeOptions"> </po-select>

    <po-input
      class="po-md-6"
      name="invalidCodeMessage"
      [(ngModel)]="invalidCodeMessage"
      p-clean
      p-label="Code Error"
      p-required
    >
    </po-input>

    <po-input class="po-md-6" name="email" [(ngModel)]="email" p-clean p-label="Email" p-maxlength="30" p-required>
    </po-input>

    <po-input class="po-md-6" name="phoneMask" [(ngModel)]="phoneMask" p-clean p-label="Phone Mask" p-required>
    </po-input>

    <po-radio-group
      class="po-md-12 po-lg-6"
      name="componentsSize"
      [(ngModel)]="componentsSize"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); this.restore()"> </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import { PoDialogService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';
import {
  PoModalPasswordRecovery,
  PoModalPasswordRecoveryComponent,
  PoModalPasswordRecoveryType
} from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-modal-password-recovery-labs',
  templateUrl: './sample-po-modal-password-recovery-labs.component.html',
  standalone: false
})
export class SamplePoModalPasswordRecoveryLabsComponent implements OnInit {
  @ViewChild(PoModalPasswordRecoveryComponent) poModalPasswordRecovery: PoModalPasswordRecoveryComponent;

  codeError: string;
  componentsSize: string;
  email: string;
  event: string;
  invalidCode: boolean = true;
  invalidCodeMessage: string;
  phoneMask: string;
  submitEvent: string;
  type: PoModalPasswordRecoveryType;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  typeOptions: Array<PoSelectOption> = [
    { label: 'All', value: PoModalPasswordRecoveryType.All },
    { label: 'Email', value: PoModalPasswordRecoveryType.Email },
    { label: 'SMS', value: PoModalPasswordRecoveryType.SMS }
  ];

  constructor(private poDialog: PoDialogService) {}

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  openPasswordRecoveryModal() {
    this.poModalPasswordRecovery.open();
  }

  restore() {
    this.codeError = undefined;
    this.componentsSize = 'medium';
    this.email = undefined;
    this.event = undefined;
    this.phoneMask = undefined;
    this.submitEvent = undefined;
    this.type = PoModalPasswordRecoveryType.Email;
  }

  submit(event: PoModalPasswordRecovery) {
    this.poDialog.alert({
      title: 'Change Password Requested By User',
      message: \`Submitted Object: \${JSON.stringify(event)}\`,
      ok: () => this.advanceModal(event)
    });
  }

  submitCode(event: PoModalPasswordRecovery) {
    this.poDialog.alert({
      title: 'Emitted SMS Code By User',
      message: \`Submitted Object: \${JSON.stringify(event)}\`,
      ok: () => this.resendCode(event)
    });
  }

  private advanceModal(event: PoModalPasswordRecovery) {
    event.hasOwnProperty('sms') ? this.openSmsCode(event) : this.openConfirmation(event);
  }

  private openConfirmation(event: PoModalPasswordRecovery) {
    this.submitEvent = JSON.stringify(event);
    this.poModalPasswordRecovery.openConfirmation();
  }

  private openSmsCode(event: PoModalPasswordRecovery) {
    this.submitEvent = JSON.stringify(event);
    this.poModalPasswordRecovery.openSmsCode();
  }

  private resendCode(eventevent: PoModalPasswordRecovery) {
    this.submitEvent = JSON.stringify(event);

    if (this.invalidCode && this.invalidCodeMessage) {
      this.invalidCode = !this.invalidCode;
      this.codeError = this.invalidCodeMessage;

      this.poModalPasswordRecovery.openSmsCode();
    } else {
      this.codeError = undefined;
      this.invalidCode = !this.invalidCode;
      this.poModalPasswordRecovery.completed();
    }
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-modal-password-recovery-labs"),t(),a(23,"hr")),r&2&&(d(5),P("po-icon "+n.sampleCodeButtonIcon),d(),C(" ",n.sampleCodeButtonLabel,""),d(),m("ngClass",_(4,he,n.hideSampleCodeTabs)))},dependencies:[T,f,b,g,le],encapsulation:2})}return i})();var de=(()=>{class i{poModalPasswordRecovery;type=w.All;urlRecovery="https://po-sample-api.onrender.com/v1/users";openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-modal-password-recovery-request"]],viewQuery:function(r,n){if(r&1&&B(S,5),r&2){let p;L(p=z())&&(n.poModalPasswordRecovery=p.first)}},standalone:!1,decls:14,vars:2,consts:[[1,"po-row"],["p-label","Data Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Data Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Data SMS Code","p-value","999999",1,"po-md-2"],["src","./assets/images/expired.svg",1,"po-page-blocked-user-image","po-mb-5","po-mt-5"],[1,"po-font-title","po-text-center","po-md-12","po-mb-2"],[1,"po-font-text","po-text-center","po-md-12","po-mb-5","po-text-color-neutral-dark-40"],["p-label","Forgot your password?","p-kind","primary",1,"po-mb-5","po-offset-md-3","po-md-6","po-offset-lg-4","po-lg-4","po-offset-xl-4","po-xl-4",3,"p-click"],[3,"p-type","p-url-recovery"]],template:function(r,n){r&1&&(o(0,"po-container")(1,"div",0),a(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),t()(),o(5,"po-container"),a(6,"img",4),o(7,"div",0)(8,"p",5),e(9,"Oops!"),t(),o(10,"p",6),e(11," Password Recovery Requested by user "),t(),o(12,"po-button",7),c("p-click",function(){return n.openPasswordRecoveryModal()}),t()()(),a(13,"po-modal-password-recovery",8)),r&2&&(d(13),m("p-type",n.type)("p-url-recovery",n.urlRecovery))},dependencies:[k,Y,j,S],encapsulation:2})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-modal-password-recovery-request-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Modal Password Recovery Request"),t(),o(4,"a",2),c("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html"),t(),o(13,"pre",7),e(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Data Phone" p-value="(99) 99999-9999"></po-info>
    <po-info class="po-md-2" p-label="Data Email" p-value="mail@mail.com"></po-info>
    <po-info class="po-md-2" p-label="Data SMS Code" p-value="999999"></po-info>
  </div>
</po-container>

<po-container>
  <img class="po-page-blocked-user-image po-mb-5 po-mt-5" src="./assets/images/expired.svg" />

  <div class="po-row">
    <p class="po-font-title po-text-center po-md-12 po-mb-2">Oops!</p>
    <p class="po-font-text po-text-center po-md-12 po-mb-5 po-text-color-neutral-dark-40">
      Password Recovery Requested by user
    </p>
    <po-button
      class="po-mb-5 po-offset-md-3 po-md-6 po-offset-lg-4 po-lg-4 po-offset-xl-4 po-xl-4"
      p-label="Forgot your password?"
      p-kind="primary"
      (p-click)="openPasswordRecoveryModal()"
    >
    </po-button>
  </div>
</po-container>

<po-modal-password-recovery [p-type]="type" [p-url-recovery]="urlRecovery"> </po-modal-password-recovery>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';

import { PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryType } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-modal-password-recovery-request',
  templateUrl: './sample-po-modal-password-recovery-request.component.html',
  standalone: false
})
export class SamplePoModalPasswordRecoveryRequestComponent {
  @ViewChild(PoModalPasswordRecoveryComponent) poModalPasswordRecovery: PoModalPasswordRecoveryComponent;

  type: PoModalPasswordRecoveryType = PoModalPasswordRecoveryType.All;
  urlRecovery: string = 'https://po-sample-api.onrender.com/v1/users';

  openPasswordRecoveryModal() {
    this.poModalPasswordRecovery.open();
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-modal-password-recovery-request"),t(),a(23,"hr")),r&2&&(d(5),P("po-icon "+n.sampleCodeButtonIcon),d(),C(" ",n.sampleCodeButtonLabel,""),d(),m("ngClass",_(4,fe,n.hideSampleCodeTabs)))},dependencies:[T,f,b,g,de],encapsulation:2})}return i})();var me=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-modal-password-recovery-doc"]],standalone:!1,decls:640,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';"),t()(),o(4,"div",2)(5,"p"),e(6,"M\xF3dulo do template do po-modal-password-recovery."),t()(),o(7,"h3",3),e(8,"Componente"),t(),o(9,"h4",4)(10,"code",5),e(11,"PoModalPasswordRecoveryComponent"),t()(),o(12,"div",2)(13,"p"),e(14,"O componente "),o(15,"code"),e(16,"po-modal-password-recovery"),t(),e(17," \xE9 utilizado como template para solicita\xE7\xE3o de troca de senha."),t(),o(18,"p"),e(19,"\xC9 composto por uma modal que possui tr\xEAs telas, cada uma com as seguintes caracter\xEDsticas:"),t(),o(20,"ul")(21,"li"),e(22,"A primeira possui campos para preenchimento de email ou n\xFAmero de telefone;"),t(),o(23,"li"),e(24,"Tela com campo para preenchimento de c\xF3digo SMS enviado para o n\xFAmero de telefone enviado;"),t(),o(25,"li"),e(26,"A terceira se trata de uma confirma\xE7\xE3o de envio de link para a caixa de email do usu\xE1rio."),t()(),o(27,"p"),e(28,"A propriedade "),o(29,"code"),e(30,"p-url-recovery"),t(),e(31,` automatiza a rotina do componente e simplifica o processo
para recupera\xE7\xE3o de senha, bastando definir uma url para requisi\xE7\xE3o dos recursos.
Seu detalhamento para uso pode ser visto logo abaixo em `),o(32,"em"),e(33,"propriedades"),t(),e(34,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),t(),o(35,"p"),e(36,`Para a modal de digita\xE7\xE3o de c\xF3digo SMS, \xE9 poss\xEDvel definir uma mensagem de erro
customizada com a propriedade `),o(37,"code"),e(38,"p-code-error"),t(),e(39,` e h\xE1 um link para
reenvio de c\xF3digo por SMS. Ao reenviar, o evento `),o(40,"code"),e(41,"p-code-submit"),t(),e(42,` envia um objeto com o telefone do usu\xE1rio e a quantidade
de vezes em que o usu\xE1rio fez a solicita\xE7\xE3o de reenvio.`),t(),o(43,"blockquote")(44,"p"),e(45,`\xC9 indicada a utiliza\xE7\xE3o da tela de digita\xE7\xE3o para envio de c\xF3digo SMS apenas
se a op\xE7\xE3o por envio SMS for disponibilizada para o usu\xE1rio.`),t()(),o(46,"p"),e(47,"A modal de confirma\xE7\xE3o cont\xE9m uma a\xE7\xE3o de reenvio e o evento "),o(48,"code"),e(49,"p-submit"),t(),e(50,`
\xE9 quem passa o objeto contendo o email em conjunto com a quantidade de tentativas de reenvio.`),t(),o(51,"blockquote")(52,"p"),e(53,"A tela de confirma\xE7\xE3o \xE9 indicada para quando o usu\xE1rio solicitar a troca atrav\xE9s do email."),t()(),o(54,"blockquote")(55,"p"),e(56,"Os textos das modals s\xE3o pr\xE9-definidos, imut\xE1veis e s\xE3o traduzidos de acordo com o idioma do "),o(57,"em"),e(58,"browser"),t(),e(59," (pt, en e es)"),t()(),o(60,"p"),e(61,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),o(62,"em"),e(63,"assets"),t(),e(64," no arquivo "),o(65,"strong"),e(66,"angular.json"),t(),e(67," da aplica\xE7\xE3o na seguinte ordem:"),t(),o(68,"pre")(69,"code"),e(70,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),t()()(),o(71,"div",6)(72,"h4",7),e(73,"Seletor"),t(),o(74,"pre",8),e(75,`<po-modal-password-recovery
    p-code-error="string"
    (p-code-submit)="EventEmitter"
    p-components-size="string"
    p-contact-email="string"
    p-phone-mask="string"
    (p-submit)="EventEmitter"
    p-type="PoModalPasswordRecoveryType"
    p-url-recovery="string" >
</po-modal-password-recovery>
`),t()(),o(76,"h4",9),e(77,"Propriedades"),t(),o(78,"table",10)(79,"tr",11)(80,"th",12),e(81,"Nome"),t(),o(82,"th",12),e(83,"Tipo"),t(),o(84,"th",12),e(85,"Padr\xE3o"),t(),o(86,"th",12),e(87,"Descri\xE7\xE3o"),t()(),o(88,"tr",13)(89,"td",14)(90,"div",15)(91,"span",16),e(92," p-code-error"),a(93,"br"),t()()(),o(94,"td",17)(95,"code",18),e(96,"string"),t()(),o(97,"td",19),e(98,"-"),t(),o(99,"td",20)(100,"em")(101,"strong"),e(102,"(opcional)"),t()(),o(103,"p"),e(104,"Defini\xE7\xE3o de mensagem de erro customizada para quando o usu\xE1rio passar um c\xF3digo SMS inv\xE1lido ou errado."),t()()(),o(105,"tr",13)(106,"td",14)(107,"div",21)(108,"span",22),e(109," (p-code-submit)"),a(110,"br"),t()()(),o(111,"td",17)(112,"code",23),e(113,"EventEmitter"),t()(),o(114,"td",19),e(115,"-"),t(),o(116,"td",20)(117,"em")(118,"strong"),e(119,"(opcional)"),t()(),o(120,"p"),e(121,"A\xE7\xE3o contendo como par\xE2metro o c\xF3digo enviado por SMS e digitado pelo usu\xE1rio."),t(),o(122,"blockquote")(123,"p"),e(124,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),o(125,"code"),e(126,"p-url-recovery"),t(),e(127,"."),t()()()(),o(128,"tr",13)(129,"td",14)(130,"div",15)(131,"span",16),e(132," p-components-size"),a(133,"br"),t()()(),o(134,"td",17)(135,"code",18),e(136,"string"),t()(),o(137,"td",19)(138,"p")(139,"code"),e(140,"medium"),t()()(),o(141,"td",20)(142,"em")(143,"strong"),e(144,"(opcional)"),t()(),o(145,"p"),e(146,"Define o tamanho dos componentes de formul\xE1rio no modal:"),t(),o(147,"ul")(148,"li")(149,"code"),e(150,"small"),t(),e(151,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(152,"li")(153,"code"),e(154,"medium"),t(),e(155,": aplica a medida medium de cada componente."),t()(),o(156,"blockquote")(157,"p"),e(158,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(159,"code"),e(160,"medium"),t(),e(161,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(162,"a",24),e(163,"po-theme"),t(),e(164,"."),t()()()(),o(165,"tr",13)(166,"td",14)(167,"div",15)(168,"span",16),e(169," p-contact-email"),a(170,"br"),t()()(),o(171,"td",17)(172,"code",18),e(173,"string"),t()(),o(174,"td",19),e(175,"-"),t(),o(176,"td",20)(177,"em")(178,"strong"),e(179,"(opcional)"),t()(),o(180,"p"),e(181,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),t()()(),o(182,"tr",13)(183,"td",14)(184,"div",15)(185,"span",16),e(186," p-phone-mask"),a(187,"br"),t()()(),o(188,"td",17)(189,"code",18),e(190,"string"),t()(),o(191,"td",19)(192,"p")(193,"code"),e(194,"(99) 99999-9999"),t()()(),o(195,"td",20)(196,"em")(197,"strong"),e(198,"(opcional)"),t()(),o(199,"p"),e(200,"Defini\xE7\xE3o da mascara do campo de telefone."),t()()(),o(201,"tr",13)(202,"td",14)(203,"div",21)(204,"span",22),e(205," (p-submit)"),a(206,"br"),t()()(),o(207,"td",17)(208,"code",23),e(209,"EventEmitter"),t()(),o(210,"td",19),e(211,"-"),t(),o(212,"td",20)(213,"em")(214,"strong"),e(215,"(opcional)"),t()(),o(216,"p"),e(217,"A\xE7\xE3o contendo o email como par\xE2metro e que \xE9 executada quando o usu\xE1rio clica sobres os bot\xF5es de 'enviar' e 'reenviar' e-mail."),t(),o(218,"blockquote")(219,"p"),e(220,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),o(221,"code"),e(222,"p-url-recovery"),t(),e(223,"."),t()()()(),o(224,"tr",13)(225,"td",14)(226,"div",15)(227,"span",16),e(228," p-type"),a(229,"br"),t()()(),o(230,"td",17)(231,"code",25),e(232,"PoModalPasswordRecoveryType"),t()(),o(233,"td",19)(234,"p")(235,"code"),e(236,"PoModalPasswordRecoveryType.Email"),t()()(),o(237,"td",20)(238,"em")(239,"strong"),e(240,"(opcional)"),t()(),o(241,"p"),e(242,"Define o tipo de recupera\xE7\xE3o de senha que ser\xE1 exibido."),t()()(),o(243,"tr",13)(244,"td",14)(245,"div",15)(246,"span",16),e(247," p-url-recovery"),a(248,"br"),t()()(),o(249,"td",17)(250,"code",18),e(251,"string"),t()(),o(252,"td",19),e(253,"-"),t(),o(254,"td",20)(255,"em")(256,"strong"),e(257,"(opcional)"),t()(),o(258,"p"),e(259,`Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido,
o m\xE9todos `),o(260,"code"),e(261,"p-submit"),t(),e(262," e "),o(263,"code"),e(264,"p-submit-code"),t(),e(265,` ser\xE3o ignorados e o componente adquirir\xE1 automatiza\xE7\xE3o
para o processo de solicita\xE7\xE3o de troca de senha.`),t(),o(266,"h3"),e(267,"Processos"),t(),o(268,"p"),e(269,"Ao digitar um valor v\xE1lido no campo de email/telefone e pressionar "),o(270,"strong"),e(271,"enviar"),t(),e(272,`,
o componente far\xE1 uma requisi\xE7\xE3o `),o(273,"code"),e(274,"POST"),t(),e(275," na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio."),t(),o(276,"pre")(277,"code"),e(278,`body {
 email: email,
 retry?: retry
}
`),t()(),o(279,"h4"),e(280,"Recupera\xE7\xE3o por email"),t(),o(281,"p"),e(282,"Para a recupera\xE7\xE3o de senha por "),o(283,"strong"),e(284,"email"),t(),e(285,", o c\xF3digo de resposta HTTP de status esperado \xE9 "),o(286,"code"),e(287,"204"),t(),e(288,"."),t(),o(289,"p"),e(290,"Em caso de "),o(291,"strong"),e(292,"sucesso"),t(),e(293,", ser\xE1 exibida a modal de confirma\xE7\xE3o de e-mail para o usu\xE1rio."),t(),o(294,"blockquote")(295,"p"),e(296,"A a\xE7\xE3o "),o(297,"strong"),e(298,"Reenviar"),t(),e(299,` na tela de confirma\xE7\xE3o efetua uma nova requisi\xE7\xE3o
passando-se o objeto com incremento para o valor da propriedade `),o(300,"strong"),e(301,"retry"),t(),e(302,"."),t()(),o(303,"p")(304,"em"),e(305,"Processo finalizado."),t()(),o(306,"h4"),e(307,"Recupera\xE7\xE3o por SMS"),t(),o(308,"p"),e(309,"Se a op\xE7\xE3o de recupera\xE7\xE3o for por "),o(310,"strong"),e(311,"SMS"),t(),e(312,", o c\xF3digo de status de sucesso deve ser "),o(313,"code"),e(314,"200"),t(),e(315,`.
Em caso de `),o(316,"strong"),e(317,"sucesso"),t(),e(318,`, abre-se a modal de digita\xE7\xE3o de c\xF3digo SMS e a resposta
desta requisi\xE7\xE3o deve retornar uma defini\xE7\xE3o de dados abaixo:`),t(),o(319,"pre")(320,"code"),e(321,`200:
{
  hash: hash,
  urlValidationCode?: url
}
`),t()(),o(322,"ul")(323,"li"),e(324,"O "),o(325,"strong"),e(326,"hash"),t(),e(327," ser\xE1 o c\xF3digo de valida\xE7\xE3o da solicita\xE7\xE3o do SMS para ser enviado juntamente com o c\xF3digo de verifica\xE7\xE3o do SMS;"),t(),o(328,"li")(329,"strong"),e(330,"urlValidationCode"),t(),e(331," \xE9 a url usada para valida\xE7\xE3o do c\xF3digo enviado por SMS."),t()(),o(332,"blockquote")(333,"p"),e(334,"Caso n\xE3o seja passado urlValidationCode, o endpoint usado para valida\xE7\xE3o do c\xF3digo ser\xE1 "),o(335,"code"),e(336,"<p-url-recovery>/validation"),t(),e(337,"."),t()(),o(338,"h4"),e(339,"Valida\xE7\xE3o do c\xF3digo SMS"),t(),o(340,"p"),e(341,"Ao digitar um valor v\xE1lido no campo de c\xF3digo SMS e pressionar "),o(342,"strong"),e(343,"continuar"),t(),e(344,", o componente far\xE1 uma requisi\xE7\xE3o "),o(345,"code"),e(346,"POST"),t(),e(347," contendo:"),t(),o(348,"pre")(349,"code"),e(350,`POST /<p-url-recovery>/validation OU /<urlValidationCode>
Body {
 hash: hash,
 code: code
}
`),t()(),o(351,"p"),e(352,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),o(353,"code"),e(354,"200"),t(),e(355,"."),t(),o(356,"p"),e(357,"Em caso de "),o(358,"strong"),e(359,"erro"),t(),e(360,` na valida\xE7\xE3o do c\xF3digo SMS, a modal se mant\xE9m com o campo para digita\xE7\xE3o
de c\xF3digo SMS`),t(),o(361,"blockquote")(362,"p"),e(363,"Pode-se atribuir a mensagem de erro (message) para o atributo "),o(364,"code"),e(365,"p-code-error"),t(),e(366," conforme retorno abaixo:"),t()(),o(367,"pre")(368,"code"),e(369,`400
{
  error {
    message: 'Error Message'
  }
}
`),t()(),o(370,"p"),e(371,"Em caso de "),o(372,"strong"),e(373,"sucesso"),t(),e(374,", espera-se a resposta desta requisi\xE7\xE3o retornando a seguinte defini\xE7\xE3o:"),t(),o(375,"pre")(376,"code"),e(377,`200:
{
  token: token,
  urlChangePassword?: url
}
`),t()(),o(378,"ul")(379,"li")(380,"strong"),e(381,"token"),t(),e(382,": Token de altera\xE7\xE3o de senha;"),t(),o(383,"li")(384,"strong"),e(385,"urlChangePassword"),t(),e(386,": url para o formul\xE1rio de altera\xE7\xE3o de senha."),t()(),o(387,"p"),e(388,"O componente est\xE1 configurado para redirecionar para a url estabelecida em "),o(389,"code"),e(390,"urlChangePassword"),t(),e(391,"."),t(),o(392,"blockquote")(393,"p"),e(394,`Caso n\xE3o seja passado valor para urlChangePassword,
a url usada para valida\xE7\xE3o ser\xE1 a `),o(395,"code"),e(396,"<p-url-recovery>/changePassword?token=<token>"),t(),e(397,"."),t()(),o(398,"p")(399,"em"),e(400,"Processo finalizado."),t()()()()(),o(401,"h3",9),e(402,"M\xE9todos"),t(),o(403,"table",26)(404,"tr",13)(405,"th",27)(406,"div",15)(407,"h4")(408,"span",16),e(409," completed "),t()()()()(),o(410,"tr",20)(411,"td",20)(412,"p"),e(413,`Ac\xE3o para conclus\xE3o de processo e fechamento da modal. Indica-se sua utiliza\xE7\xE3o
para ap\xF3s o envio e valida\xE7\xE3o do c\xF3digo SMS enviado pelo usu\xE1rio.`),t(),o(414,"blockquote")(415,"p"),e(416,"Nas modals em que h\xE1 a a\xE7\xE3o de 'cancelar' dispensa-se o uso desta a\xE7\xE3o pois o componente j\xE1 trata o fechamento da modal."),t()()()()(),a(417,"br"),o(418,"table",26)(419,"tr",13)(420,"th",27)(421,"div",15)(422,"h4")(423,"span",16),e(424," open "),t()()()()(),o(425,"tr",20)(426,"td",20)(427,"p"),e(428,"Abre a modal de preenchimento de email ou n\xFAmero de telefone para solicita\xE7\xE3o de troca de senha."),t()()()(),a(429,"br"),o(430,"table",26)(431,"tr",13)(432,"th",27)(433,"div",15)(434,"h4")(435,"span",16),e(436," openConfirmation "),t()()()()(),o(437,"tr",20)(438,"td",20)(439,"p"),e(440,"Abre a modal de confirma\xE7\xE3o de envio de email."),t()()()(),a(441,"br"),o(442,"table",26)(443,"tr",13)(444,"th",27)(445,"div",15)(446,"h4")(447,"span",16),e(448," openSmsCode "),t()()()()(),o(449,"tr",20)(450,"td",20)(451,"p"),e(452,"Abre a modal de preenchimento do c\xF3digo SMS enviado ao usu\xE1rio."),t()()()(),a(453,"br"),o(454,"h3"),e(455,"Interfaces"),t(),o(456,"h4",28)(457,"code",5),e(458,"PoModalPasswordRecovery"),t()(),o(459,"div",2)(460,"p"),e(461,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),o(462,"code"),e(463,"po-modal-password-recovery"),t(),e(464,"."),t()(),o(465,"h4",9),e(466,"Propriedades"),t(),o(467,"table",10)(468,"tr",11)(469,"th",12),e(470,"Nome"),t(),o(471,"th",12),e(472,"Tipo"),t(),o(473,"th",12),e(474,"Descri\xE7\xE3o"),t()(),o(475,"tr",13)(476,"td",14)(477,"div",15)(478,"span",16),e(479," code"),a(480,"br"),t()()(),o(481,"td",17)(482,"code",18),e(483,"string"),t()(),o(484,"td",20)(485,"em")(486,"strong"),e(487,"(opcional)"),t()(),o(488,"p"),e(489,"Valor contendo o c\xF3digo enviado por SMS e digitado pelo usu\xE1rio."),t()()(),o(490,"tr",13)(491,"td",14)(492,"div",15)(493,"span",16),e(494," email"),a(495,"br"),t()()(),o(496,"td",17)(497,"code",18),e(498,"string"),t()(),o(499,"td",20)(500,"em")(501,"strong"),e(502,"(opcional)"),t()(),o(503,"p"),e(504,"Valor contendo o email enviado pelo usu\xE1rio."),t()()(),o(505,"tr",13)(506,"td",14)(507,"div",15)(508,"span",16),e(509," hash"),a(510,"br"),t()()(),o(511,"td",17)(512,"code",18),e(513,"string"),t()(),o(514,"td",20)(515,"em")(516,"strong"),e(517,"(opcional)"),t()(),o(518,"p"),e(519,"C\xF3digo de valida\xE7\xE3o da solicita\xE7\xE3o do SMS para ser enviado junto com o c\xF3digo de verifica\xE7\xE3o do SMS"),t()()(),o(520,"tr",13)(521,"td",14)(522,"div",15)(523,"span",16),e(524," retry"),a(525,"br"),t()()(),o(526,"td",17)(527,"code",29),e(528,"number"),t()(),o(529,"td",20)(530,"em")(531,"strong"),e(532,"(opcional)"),t()(),o(533,"p"),e(534,"N\xFAmero de tentativas de reenvio."),t()()(),o(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),e(539," sms"),a(540,"br"),t()()(),o(541,"td",17)(542,"code",18),e(543,"string"),t()(),o(544,"td",20)(545,"em")(546,"strong"),e(547,"(opcional)"),t()(),o(548,"p"),e(549,"Valor contendo o n\xFAmero de telefone enviado pelo usu\xE1rio."),t()()(),o(550,"tr",13)(551,"td",14)(552,"div",15)(553,"span",16),e(554," token"),a(555,"br"),t()()(),o(556,"td",17)(557,"code",18),e(558,"string"),t()(),o(559,"td",20)(560,"em")(561,"strong"),e(562,"(opcional)"),t()(),o(563,"p"),e(564,"Token de altera\xE7\xE3o de senha"),t()()(),o(565,"tr",13)(566,"td",14)(567,"div",15)(568,"span",16),e(569," urlChangePassword"),a(570,"br"),t()()(),o(571,"td",17)(572,"code",18),e(573,"string"),t()(),o(574,"td",20)(575,"em")(576,"strong"),e(577,"(opcional)"),t()(),o(578,"p"),e(579,"URL para o formul\xE1rio de altera\xE7\xE3o de senha"),t()()(),o(580,"tr",13)(581,"td",14)(582,"div",15)(583,"span",16),e(584," urlValidationCode"),a(585,"br"),t()()(),o(586,"td",17)(587,"code",18),e(588,"string"),t()(),o(589,"td",20)(590,"em")(591,"strong"),e(592,"(opcional)"),t()(),o(593,"p"),e(594,"URL usada para valida\xE7\xE3o do c\xF3digo enviado por SMS"),t()()()(),o(595,"h3"),e(596,"Enums"),t(),o(597,"h4",4)(598,"code",5),e(599,"PoModalPasswordRecoveryType"),t()(),o(600,"div",2)(601,"p")(602,"em"),e(603,"Enum"),t(),e(604," para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha."),t()(),o(605,"h4",9),e(606,"Propriedades"),t(),o(607,"table",10)(608,"tr",11)(609,"th",12),e(610,"Nome"),t(),o(611,"th",12),e(612,"Descri\xE7\xE3o"),t()(),o(613,"tr",13)(614,"td",14)(615,"div",15)(616,"span",16),e(617," All"),a(618,"br"),t()()(),o(619,"td",20)(620,"p"),e(621,"Possibilita ao usu\xE1rio optar por envio via email ou SMS"),t()()(),o(622,"tr",13)(623,"td",14)(624,"div",15)(625,"span",16),e(626," Email"),a(627,"br"),t()()(),o(628,"td",20)(629,"p"),e(630,"Defini\xE7\xE3o para recupera\xE7\xE3o apenas por email"),t()()(),o(631,"tr",13)(632,"td",14)(633,"div",15)(634,"span",16),e(635," SMS"),a(636,"br"),t()()(),o(637,"td",20)(638,"p"),e(639,"Defini\xE7\xE3o para recupera\xE7\xE3o apenas por SMS"),t()()()()())},dependencies:[f],encapsulation:2})}return i})();var ce=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||i)(D(G),D(K))};static \u0275cmp=u({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Modal Password Recovery",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-modal-password-recovery-doc"),t(),o(4,"po-tab",3),c("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-modal-password-recovery-basic-view")(6,"sample-po-modal-password-recovery-labs-view")(7,"sample-po-modal-password-recovery-request-view"),t()()()),r&2&&(m("p-actions",n.actions),d(2),m("p-active",n.activeTab==="doc"),d(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[te,b,g,re,se,pe,me],encapsulation:2})}return i})();var Ce=[{path:"",component:ce}],ue=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=V({type:i});static \u0275inj=O({imports:[I.forChild(Ce),I]})}return i})();var Ye=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=V({type:i});static \u0275inj=O({imports:[oe,ue]})}return i})();export{Ye as DocPoModalPasswordRecoveryModule};
