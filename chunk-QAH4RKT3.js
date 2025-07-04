import{o as T,p as $}from"./chunk-R3BKLGLC.js";import{Ab as y,F as z,Ga as q,K as x,T as Z,Wa as X,ha as Y,ja as F,nb as j,zb as v}from"./chunk-TUTTJOS2.js";import{$a as h,Ac as I,Ba as P,Ea as t,Fa as e,Ga as r,Ka as V,La as S,M as k,Nc as J,Pc as K,Rc as H,T as m,Ta as R,U as c,Ua as G,Va as U,Wa as Q,Xa as i,Za as _,ab as C,bb as b,eb as M,ha as s,ia as E,oa as f,pa as L,ub as w,wc as A,xc as N,ya as g,yc as W,zc as B}from"./chunk-MIQUIDUB.js";var ee=(()=>{class a{poDialog;constructor(p){this.poDialog=p}static \u0275fac=function(l){return new(l||a)(E(x))};static \u0275cmp=f({type:a,selectors:[["sample-po-dialog-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-label","Open Dialog",3,"p-click"]],template:function(l,n){l&1&&(t(0,"po-button",0),S("p-click",function(){return n.poDialog.alert({title:"PO Dialog",message:"PO Dialog"})}),e())},dependencies:[z],encapsulation:2})}return a})();var ce=a=>({"docs-sample-code-tabs":a}),ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-dialog-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Dialog Basic"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-dialog-basic/sample-po-dialog-basic.component.html"),e(),t(13,"pre",7),i(14,`<po-button p-label="Open Dialog" (p-click)="poDialog.alert({ title: 'PO Dialog', message: 'PO Dialog' })"> </po-button>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-dialog-basic/sample-po-dialog-basic.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dialog-basic',
  templateUrl: './sample-po-dialog-basic.component.html',
  standalone: false
})
export class SamplePoDialogBasicComponent {
  constructor(public poDialog: PoDialogService) {}
}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-dialog-basic"),e(),r(23,"hr")),l&2&&(s(5),P("po-icon "+n.sampleCodeButtonIcon),s(),_(" ",n.sampleCodeButtonLabel,""),s(),g("ngClass",M(4,ce,n.hideSampleCodeTabs)))},dependencies:[w,T,v,y,ee],encapsulation:2})}return a})();var oe=(()=>{class a{poAlert;action;actionOptions;componentsSize="medium";dialogMethod;help;literals;literalsAlert;literalsConfirm;message;title;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];dialogActionOptions=[{label:"Ok",value:"ok"},{label:"Cancel",value:"cancel"},{label:"Confirm",value:"confirm"},{label:"Close",value:"close"}];dialogMethodOptions=[{label:"Alert",value:"alert"},{label:"Confirm",value:"confirm"}];constructor(p){this.poAlert=p}ngOnInit(){this.restore()}alertDialog(){this.poAlert.alert({componentsSize:this.componentsSize,literals:this.literalsAlert,title:this.title,message:this.message,ok:()=>this.actionOptions.includes("ok")?this.action="OK":void 0})}changeLiterals(){let p;try{p=this.literals?JSON.parse(this.literals):void 0}catch{p=void 0}this.dialogMethod==="alert"?this.literalsAlert=p:this.dialogMethod==="confirm"&&(this.literalsConfirm=p)}changeMethod(){this.dialogMethod==="alert"?this.help='Ex: { "ok": "Conclu\xEDdo" }':this.help='Ex: { "cancel": "N\xE3o", "confirm": "Sim" }'}confirmDialog(){this.poAlert.confirm({componentsSize:this.componentsSize,literals:this.literalsConfirm,title:this.title,message:this.message,confirm:()=>this.actionOptions.includes("confirm")?this.action="Confirm":void 0,cancel:()=>this.actionOptions.includes("cancel")?this.action="Cancel":void 0,close:()=>this.actionOptions.includes("close")?this.action="Close":void 0})}openDialog(){this.action="",this.dialogMethod==="alert"?this.alertDialog():this.confirmDialog()}restore(){this.action=void 0,this.actionOptions=[],this.componentsSize="medium",this.title="PO Dialog",this.message="PO Dialog",this.dialogMethod=void 0,this.literals=void 0,this.literalsAlert=void 0,this.literalsConfirm=void 0,this.help=""}static \u0275fac=function(l){return new(l||a)(E(x))};static \u0275cmp=f({type:a,selectors:[["sample-po-dialog-labs"]],standalone:!1,decls:15,vars:13,consts:[["f","ngForm"],["name","openDialog","p-label","Open Dialog",3,"p-click","p-disabled"],[1,"po-row"],["p-label","Action clicked",1,"po-md-12",3,"p-value"],["name","title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","message","p-clean","","p-label","Message","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dialogMethod","p-label","Dialog method",1,"po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","literals","p-clean","","p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-blur","p-change-model","ngModel","p-disabled","p-help"],["name","actionOptions","p-columns","4","p-label","Action options",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,n){if(l&1){let d=V();t(0,"po-button",1),S("p-click",function(){return m(d),c(n.openDialog())}),e(),r(1,"hr"),t(2,"div",2),r(3,"po-info",3),e(),r(4,"hr"),t(5,"form",null,0)(7,"po-input",4),b("ngModelChange",function(o){return m(d),C(n.title,o)||(n.title=o),c(o)}),e(),t(8,"po-input",5),b("ngModelChange",function(o){return m(d),C(n.message,o)||(n.message=o),c(o)}),e(),t(9,"po-radio-group",6),b("ngModelChange",function(o){return m(d),C(n.dialogMethod,o)||(n.dialogMethod=o),c(o)}),S("p-change",function(){return m(d),c(n.changeMethod())}),e(),t(10,"po-input",7),b("ngModelChange",function(o){return m(d),C(n.literals,o)||(n.literals=o),c(o)}),S("p-blur",function(){return m(d),c(n.changeLiterals())})("p-change-model",function(){return m(d),c(n.changeLiterals())}),e(),t(11,"po-checkbox-group",8),b("ngModelChange",function(o){return m(d),C(n.actionOptions,o)||(n.actionOptions=o),c(o)}),e(),t(12,"po-radio-group",9),b("ngModelChange",function(o){return m(d),C(n.componentsSize,o)||(n.componentsSize=o),c(o)}),e(),t(13,"div",2)(14,"po-button",10),S("p-click",function(){return m(d),c(n.restore())}),e()()()}if(l&2){let d=Q(6);g("p-disabled",d.invalid),s(3),g("p-value",n.action),s(4),h("ngModel",n.title),s(),h("ngModel",n.message),s(),h("ngModel",n.dialogMethod),g("p-options",n.dialogMethodOptions),s(),h("ngModel",n.literals),g("p-disabled",n.dialogMethod===void 0)("p-help",n.help),s(),h("ngModel",n.actionOptions),g("p-options",n.dialogActionOptions),s(),h("ngModel",n.componentsSize),g("p-options",n.componentsSizeOptions)}},dependencies:[I,A,N,B,W,z,Y,F,q,X],encapsulation:2})}return a})();var Ce=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-dialog-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Dialog Labs"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-dialog-labs/sample-po-dialog-labs.component.html"),e(),t(13,"pre",7),i(14,`<po-button name="openDialog" p-label="Open Dialog" [p-disabled]="f.invalid" (p-click)="openDialog()"> </po-button>

<hr />

<div class="po-row">
  <po-info class="po-md-12" p-label="Action clicked" [p-value]="action"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="title" [(ngModel)]="title" p-clean p-label="Title" p-required> </po-input>

  <po-input class="po-md-6" name="message" [(ngModel)]="message" p-clean p-label="Message" p-required> </po-input>

  <po-radio-group
    class="po-lg-6"
    name="dialogMethod"
    [(ngModel)]="dialogMethod"
    p-label="Dialog method"
    [p-options]="dialogMethodOptions"
    (p-change)="changeMethod()"
  >
  </po-radio-group>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-clean
    p-label="Literals"
    [p-disabled]="dialogMethod === undefined"
    [p-help]="help"
    (p-blur)="changeLiterals()"
    (p-change-model)="changeLiterals()"
  >
  </po-input>

  <po-checkbox-group
    class="po-md-12"
    name="actionOptions"
    [(ngModel)]="actionOptions"
    p-columns="4"
    p-label="Action options"
    [p-options]="dialogActionOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="componentsSize"
    [(ngModel)]="componentsSize"
    p-columns="4"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-dialog-labs/sample-po-dialog-labs.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

import { PoDialogAlertLiterals, PoDialogConfirmLiterals, PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dialog-labs',
  templateUrl: './sample-po-dialog-labs.component.html',
  standalone: false
})
export class SamplePoDialogLabsComponent implements OnInit {
  action: string;
  actionOptions: Array<string>;
  componentsSize: string = 'medium';
  dialogMethod: string;
  help: string;
  literals: string;
  literalsAlert: PoDialogAlertLiterals;
  literalsConfirm: PoDialogConfirmLiterals;
  message: string;
  title: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly dialogActionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Ok', value: 'ok' },
    { label: 'Cancel', value: 'cancel' },
    { label: 'Confirm', value: 'confirm' },
    { label: 'Close', value: 'close' }
  ];

  public readonly dialogMethodOptions: Array<PoRadioGroupOption> = [
    { label: 'Alert', value: 'alert' },
    { label: 'Confirm', value: 'confirm' }
  ];

  constructor(private poAlert: PoDialogService) {}

  ngOnInit() {
    this.restore();
  }

  alertDialog() {
    this.poAlert.alert({
      componentsSize: this.componentsSize,
      literals: this.literalsAlert,
      title: this.title,
      message: this.message,
      ok: () => (this.actionOptions.includes('ok') ? (this.action = 'OK') : undefined)
    });
  }

  changeLiterals() {
    let literalsModel;
    try {
      literalsModel = this.literals ? JSON.parse(this.literals) : undefined;
    } catch (error) {
      literalsModel = undefined;
    }

    if (this.dialogMethod === 'alert') {
      this.literalsAlert = literalsModel;
    } else if (this.dialogMethod === 'confirm') {
      this.literalsConfirm = literalsModel;
    }
  }

  changeMethod() {
    if (this.dialogMethod === 'alert') {
      this.help = 'Ex: { "ok": "Conclu\xEDdo" }';
    } else {
      this.help = 'Ex: { "cancel": "N\xE3o", "confirm": "Sim" }';
    }
  }

  confirmDialog() {
    this.poAlert.confirm({
      componentsSize: this.componentsSize,
      literals: this.literalsConfirm,
      title: this.title,
      message: this.message,
      confirm: () => (this.actionOptions.includes('confirm') ? (this.action = 'Confirm') : undefined),
      cancel: () => (this.actionOptions.includes('cancel') ? (this.action = 'Cancel') : undefined),
      close: () => (this.actionOptions.includes('close') ? (this.action = 'Close') : undefined)
    });
  }

  openDialog() {
    this.action = '';
    this.dialogMethod === 'alert' ? this.alertDialog() : this.confirmDialog();
  }

  restore() {
    this.action = undefined;
    this.actionOptions = [];
    this.componentsSize = 'medium';
    this.title = 'PO Dialog';
    this.message = 'PO Dialog';
    this.dialogMethod = undefined;
    this.literals = undefined;
    this.literalsAlert = undefined;
    this.literalsConfirm = undefined;
    this.help = '';
  }
}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-dialog-labs"),e(),r(23,"hr")),l&2&&(s(5),P("po-icon "+n.sampleCodeButtonIcon),s(),_(" ",n.sampleCodeButtonLabel,""),s(),g("ngClass",M(4,Ce,n.hideSampleCodeTabs)))},dependencies:[w,T,v,y,oe],encapsulation:2})}return a})();var fe=["form"],le=(()=>{class a{poDialog;poNotification;form;action;address;cardNumber;cardType;city;country;name;phoneNumber;securityCode;stateProvince;zipPostalCode;cardTypeOptions=[{label:"Master Card",value:"Master"},{label:"Visa",value:"visa"},{label:"Diners",value:"diners"},{label:"Hipercard",value:"hipercard"}];statusSubscription;constructor(p,l){this.poDialog=p,this.poNotification=l}ngOnDestroy(){this.statusSubscription.unsubscribe()}ngOnInit(){this.action=[{label:"Cancel",icon:"ICON_DELETE",action:this.openConfirmDialog.bind(this),disabled:!0}],this.statusSubscription=this.form.statusChanges.subscribe(p=>this.actionDisabledCheck(p))}actionDisabledCheck(p){this.action[0].disabled=p==="INVALID"}confirmCancelation(){this.poNotification.success(`Credit card ${this.cardNumber} canceled`),this.form.reset()}openConfirmDialog(){this.poDialog.confirm({title:"Confirm",message:`<p>Hi <b>${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon an an-credit-card"></i> <b>${this.cardNumber}<b>? </p>`,confirm:()=>this.confirmCancelation()})}static \u0275fac=function(l){return new(l||a)(E(x),E(Z))};static \u0275cmp=f({type:a,selectors:[["sample-po-dialog-cancel-credit-card"]],viewQuery:function(l,n){if(l&1&&R(fe,7),l&2){let d;G(d=U())&&(n.form=d.first)}},standalone:!1,decls:18,vars:12,consts:[["form","ngForm"],["p-title","Credit Card Cancelation",3,"p-actions"],[1,"po-row"],["name","cardType","p-label","Card type","p-required","",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["name","cardNumber","p-label","Card number","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-minlength","19","p-required","",1,"po-md-8",3,"ngModelChange","ngModel"],["name","securityCode","p-label","Security code","p-mask","999","p-minlength","3","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-label","Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","address","p-label","Address",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","city","p-label","City",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","stateProvince","p-label","State/Province",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","zipPostalCode","p-label","Zip/PostalCode",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","phoneNumber","p-label","Phone number","p-mask","(99) 9?9999-9999","p-mask-format-model","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","country","p-label","Country",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,n){if(l&1){let d=V();t(0,"po-page-default",1)(1,"form",null,0)(3,"div",2)(4,"po-radio-group",3),b("ngModelChange",function(o){return m(d),C(n.cardType,o)||(n.cardType=o),c(o)}),e()(),t(5,"div",2)(6,"po-input",4),b("ngModelChange",function(o){return m(d),C(n.cardNumber,o)||(n.cardNumber=o),c(o)}),e(),t(7,"po-input",5),b("ngModelChange",function(o){return m(d),C(n.securityCode,o)||(n.securityCode=o),c(o)}),e()(),t(8,"div",2)(9,"po-input",6),b("ngModelChange",function(o){return m(d),C(n.name,o)||(n.name=o),c(o)}),e()(),t(10,"div",2)(11,"po-input",7),b("ngModelChange",function(o){return m(d),C(n.address,o)||(n.address=o),c(o)}),e(),t(12,"po-input",8),b("ngModelChange",function(o){return m(d),C(n.city,o)||(n.city=o),c(o)}),e(),t(13,"po-input",9),b("ngModelChange",function(o){return m(d),C(n.stateProvince,o)||(n.stateProvince=o),c(o)}),e(),t(14,"po-input",10),b("ngModelChange",function(o){return m(d),C(n.zipPostalCode,o)||(n.zipPostalCode=o),c(o)}),e()(),t(15,"div",2)(16,"po-input",11),b("ngModelChange",function(o){return m(d),C(n.phoneNumber,o)||(n.phoneNumber=o),c(o)}),e(),t(17,"po-input",12),b("ngModelChange",function(o){return m(d),C(n.country,o)||(n.country=o),c(o)}),e()()()()}l&2&&(g("p-actions",n.action),s(4),h("ngModel",n.cardType),g("p-options",n.cardTypeOptions),s(2),h("ngModel",n.cardNumber),s(),h("ngModel",n.securityCode),s(2),h("ngModel",n.name),s(2),h("ngModel",n.address),s(),h("ngModel",n.city),s(),h("ngModel",n.stateProvince),s(),h("ngModel",n.zipPostalCode),s(2),h("ngModel",n.phoneNumber),s(),h("ngModel",n.country))},dependencies:[I,A,N,B,W,F,q,j],encapsulation:2})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-dialog-cancel-credit-card-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Dialog - Cancel Credit Card"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html"),e(),t(13,"pre",7),i(14,`<po-page-default p-title="Credit Card Cancelation" [p-actions]="action">
  <form #form="ngForm">
    <div class="po-row">
      <po-radio-group
        class="po-md-8"
        name="cardType"
        [(ngModel)]="cardType"
        p-label="Card type"
        p-required
        [p-options]="cardTypeOptions"
      >
      </po-radio-group>
    </div>

    <div class="po-row">
      <po-input
        class="po-md-8"
        name="cardNumber"
        [(ngModel)]="cardNumber"
        p-label="Card number"
        p-mask="9999 9999 9999 9999"
        p-mask-format-model
        p-minlength="19"
        p-required
      >
      </po-input>

      <po-input
        class="po-md-4"
        name="securityCode"
        [(ngModel)]="securityCode"
        p-label="Security code"
        p-mask="999"
        p-minlength="3"
        p-required
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-12" name="name" [(ngModel)]="name" p-label="Name" p-required> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-6 po-lg-3" name="address" [(ngModel)]="address" p-label="Address"> </po-input>

      <po-input class="po-md-6 po-lg-3" name="city" [(ngModel)]="city" p-label="City"> </po-input>

      <po-input class="po-md-6 po-lg-3" name="stateProvince" [(ngModel)]="stateProvince" p-label="State/Province">
      </po-input>

      <po-input class="po-md-6 po-lg-3" name="zipPostalCode" [(ngModel)]="zipPostalCode" p-label="Zip/PostalCode">
      </po-input>
    </div>

    <div class="po-row">
      <po-input
        class="po-md-6"
        name="phoneNumber"
        [(ngModel)]="phoneNumber"
        p-label="Phone number"
        p-mask="(99) 9?9999-9999"
        p-mask-format-model
      >
      </po-input>

      <po-input class="po-md-6" name="country" [(ngModel)]="country" p-label="Country"> </po-input>
    </div>
  </form>
</po-page-default>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { Subscription } from 'rxjs';

import { PoDialogService, PoNotificationService, PoPageAction, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dialog-cancel-credit-card',
  templateUrl: './sample-po-dialog-cancel-credit-card.component.html',
  standalone: false
})
export class SamplePoDialogCancelCreditCardComponent implements OnDestroy, OnInit {
  @ViewChild('form', { static: true }) form: UntypedFormControl;

  action: Array<PoPageAction>;
  address: string;
  cardNumber: string;
  cardType: string;
  city: string;
  country: string;
  name: string;
  phoneNumber: string;
  securityCode: string;
  stateProvince: string;
  zipPostalCode: string;

  public readonly cardTypeOptions: Array<PoRadioGroupOption> = [
    { label: 'Master Card', value: 'Master' },
    { label: 'Visa', value: 'visa' },
    { label: 'Diners', value: 'diners' },
    { label: 'Hipercard', value: 'hipercard' }
  ];

  private statusSubscription: Subscription;

  constructor(
    private poDialog: PoDialogService,
    private poNotification: PoNotificationService
  ) {}

  ngOnDestroy() {
    this.statusSubscription.unsubscribe();
  }

  ngOnInit() {
    this.action = [
      {
        label: 'Cancel',
        icon: 'ICON_DELETE',
        action: this.openConfirmDialog.bind(this),
        disabled: true
      }
    ];
    this.statusSubscription = this.form.statusChanges.subscribe(status => this.actionDisabledCheck(status));
  }

  actionDisabledCheck(status: string) {
    this.action[0].disabled = status === 'INVALID';
  }

  confirmCancelation() {
    this.poNotification.success(\`Credit card \${this.cardNumber} canceled\`);
    this.form.reset();
  }

  openConfirmDialog() {
    this.poDialog.confirm({
      title: 'Confirm',
      message: \`<p>Hi <b>\${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon an an-credit-card"></i> <b>\${this.cardNumber}<b>? </p>\`,
      confirm: () => this.confirmCancelation()
    });
  }
}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-dialog-cancel-credit-card"),e(),r(23,"hr")),l&2&&(s(5),P("po-icon "+n.sampleCodeButtonIcon),s(),_(" ",n.sampleCodeButtonLabel,""),s(),g("ngClass",M(4,Ee,n.hideSampleCodeTabs)))},dependencies:[w,T,v,y,le],encapsulation:2})}return a})();var pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=f({type:a,selectors:[["sample-po-dialog-doc"]],standalone:!1,decls:397,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDialogAlertLiterals"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoDialogConfirmLiterals"]],template:function(l,n){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoDialogModule } from '@po-ui/ng-components';"),e()(),r(4,"div",2),t(5,"h3",3),i(6,"Services"),e(),t(7,"h4",4)(8,"code",5),i(9,"PoDialogService"),e()(),t(10,"div",2)(11,"p"),i(12,`O po-dialog \xE9 um servi\xE7o para exibi\xE7\xE3o de caixas de di\xE1logo, \xE9 poss\xEDvel customiza-los passando alguns par\xE2metros de acordo com a
necessidade do desenvolvedor. `),e()(),t(13,"h3",6),i(14,"M\xE9todos"),e(),t(15,"table",7)(16,"tr",8)(17,"th",9)(18,"div",10)(19,"h4")(20,"span",11),i(21," confirm "),e()()()()(),t(22,"tr",12)(23,"td",12)(24,"p"),i(25,"Exibe um di\xE1logo de confirma\xE7\xE3o, \xE9 poss\xEDvel definir a\xE7\xF5es para as op\xE7\xF5es de confirma\xE7\xE3o e cancelamento."),e()()()(),r(26,"br"),t(27,"table",7)(28,"tr",8)(29,"th",9)(30,"div",10)(31,"h4")(32,"span",11),i(33," alert "),e()()()()(),t(34,"tr",12)(35,"td",12)(36,"p"),i(37,"Exibe um di\xE1logo de alerta."),e()()()(),r(38,"br"),t(39,"h3"),i(40,"Interfaces"),e(),t(41,"h4",13)(42,"code",5),i(43,"PoDialogAlertLiterals"),e()(),t(44,"div",2)(45,"p"),i(46,"Interface para defini\xE7\xE3o das literais usadas no servi\xE7o "),t(47,"code"),i(48,"po-dialog"),e(),i(49," para o tipo alerta."),e()(),t(50,"h4",6),i(51,"Propriedades"),e(),t(52,"table",14)(53,"tr",15)(54,"th",16),i(55,"Nome"),e(),t(56,"th",16),i(57,"Tipo"),e(),t(58,"th",16),i(59,"Descri\xE7\xE3o"),e()(),t(60,"tr",8)(61,"td",17)(62,"div",10)(63,"span",11),i(64," ok"),r(65,"br"),e()()(),t(66,"td",18)(67,"code",19),i(68,"string"),e()(),t(69,"td",12)(70,"em")(71,"strong"),i(72,"(opcional)"),e()(),t(73,"p"),i(74,'R\xF3tulo do bot\xE3o de "Ok".'),e()()()(),t(75,"h4",13)(76,"code",5),i(77,"PoDialogConfirmLiterals"),e()(),t(78,"div",2)(79,"p"),i(80,"Interface para defini\xE7\xE3o das literais usadas no servi\xE7o "),t(81,"code"),i(82,"po-dialog"),e(),i(83," para o tipo confirma\xE7\xE3o."),e()(),t(84,"h4",6),i(85,"Propriedades"),e(),t(86,"table",14)(87,"tr",15)(88,"th",16),i(89,"Nome"),e(),t(90,"th",16),i(91,"Tipo"),e(),t(92,"th",16),i(93,"Descri\xE7\xE3o"),e()(),t(94,"tr",8)(95,"td",17)(96,"div",10)(97,"span",11),i(98," cancel"),r(99,"br"),e()()(),t(100,"td",18)(101,"code",19),i(102,"string"),e()(),t(103,"td",12)(104,"em")(105,"strong"),i(106,"(opcional)"),e()(),t(107,"p"),i(108,'R\xF3tulo do bot\xE3o de "Cancelar".'),e()()(),t(109,"tr",8)(110,"td",17)(111,"div",10)(112,"span",11),i(113," confirm"),r(114,"br"),e()()(),t(115,"td",18)(116,"code",19),i(117,"string"),e()(),t(118,"td",12)(119,"em")(120,"strong"),i(121,"(opcional)"),e()(),t(122,"p"),i(123,'R\xF3tulo do bot\xE3o de "Confirmar".'),e()()()(),t(124,"h4",13)(125,"code",5),i(126,"PoDialogAlertOptions"),e()(),t(127,"div",2)(128,"p"),i(129,"Interface para o t\xEDtulo e a mensagem do servi\xE7o po-dialog. Interface com as propriedades da caixa de di\xE1logo de alerta do servi\xE7o po-dialog."),e()(),t(130,"h4",6),i(131,"Propriedades"),e(),t(132,"table",14)(133,"tr",15)(134,"th",16),i(135,"Nome"),e(),t(136,"th",16),i(137,"Tipo"),e(),t(138,"th",16),i(139,"Descri\xE7\xE3o"),e()(),t(140,"tr",8)(141,"td",17)(142,"div",10)(143,"span",11),i(144," componentsSize"),r(145,"br"),e()()(),t(146,"td",18)(147,"code",19),i(148,"string"),e()(),t(149,"td",12)(150,"em")(151,"strong"),i(152,"(opcional)"),e()(),t(153,"p"),i(154,"Define o tamanho dos componentes de formul\xE1rio no dialog:"),e(),t(155,"ul")(156,"li")(157,"code"),i(158,"small"),e(),i(159,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(160,"li")(161,"code"),i(162,"medium"),e(),i(163,": aplica a medida medium de cada componente."),e()(),t(164,"blockquote")(165,"p"),i(166,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(167,"code"),i(168,"medium"),e(),i(169,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(170,"a",20),i(171,"po-theme"),e(),i(172,"."),e()()()(),t(173,"tr",8)(174,"td",17)(175,"div",10)(176,"span",11),i(177," literals"),r(178,"br"),e()()(),t(179,"td",18)(180,"code",21),i(181,"PoDialogAlertLiterals"),e()(),t(182,"td",12)(183,"em")(184,"strong"),i(185,"(opcional)"),e()(),t(186,"p"),i(187,"Objeto com as literais usadas no "),t(188,"code"),i(189,"po-dialog"),e(),i(190," do tipo alerta."),e(),t(191,"p"),i(192,"Para customizar o "),t(193,"em"),i(194,"label"),e(),i(195,", pode ser enviado o objeto da seguinte forma:"),e(),t(196,"pre")(197,"code",22),i(198,`this.poDialog.alert({
  literals: { ok: 'Close' },
  title: 'Info message',
  message: 'Message body dialog'
});
`),e()(),t(199,"blockquote")(200,"p"),i(201,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),t(202,"em"),i(203,"browser"),e(),i(204," (pt, en, es)."),e()()()(),t(205,"tr",8)(206,"td",17)(207,"div",10)(208,"span",11),i(209," message"),r(210,"br"),e()()(),t(211,"td",18)(212,"code",19),i(213,"string"),e()(),t(214,"td",12)(215,"p"),i(216,"Mensagem da caixa de di\xE1logo."),e(),t(217,"blockquote")(218,"p"),i(219,"Pode-se informar um conte\xFAdo HTML na mensagem."),e()()()(),t(220,"tr",8)(221,"td",17)(222,"div",10)(223,"span",11),i(224," ok"),r(225,"br"),e()()(),t(226,"td",18)(227,"code",23),i(228,"Function"),e()(),t(229,"td",12)(230,"em")(231,"strong"),i(232,"(opcional)"),e()(),t(233,"p"),i(234,'A\xE7\xE3o executada ao fechar o alerta pelo bot\xE3o "Ok".'),e()()(),t(235,"tr",8)(236,"td",17)(237,"div",10)(238,"span",11),i(239," title"),r(240,"br"),e()()(),t(241,"td",18)(242,"code",19),i(243,"string"),e()(),t(244,"td",12)(245,"p"),i(246,"T\xEDtulo da caixa de di\xE1logo."),e()()()(),t(247,"h4",13)(248,"code",5),i(249,"PoDialogConfirmOptions"),e()(),t(250,"div",2)(251,"p"),i(252,"Interface para o t\xEDtulo e a mensagem do servi\xE7o po-dialog. Interface com as propriedades da caixa de di\xE1logo de confirma\xE7\xE3o do servi\xE7o po-dialog."),e()(),t(253,"h4",6),i(254,"Propriedades"),e(),t(255,"table",14)(256,"tr",15)(257,"th",16),i(258,"Nome"),e(),t(259,"th",16),i(260,"Tipo"),e(),t(261,"th",16),i(262,"Descri\xE7\xE3o"),e()(),t(263,"tr",8)(264,"td",17)(265,"div",10)(266,"span",11),i(267," cancel"),r(268,"br"),e()()(),t(269,"td",18)(270,"code",23),i(271,"Function"),e()(),t(272,"td",12)(273,"em")(274,"strong"),i(275,"(opcional)"),e()(),t(276,"p"),i(277,"A\xE7\xE3o de cancelamento da caixa de di\xE1logo."),e()()(),t(278,"tr",8)(279,"td",17)(280,"div",10)(281,"span",11),i(282," close"),r(283,"br"),e()()(),t(284,"td",18)(285,"code",23),i(286,"Function"),e()(),t(287,"td",12)(288,"em")(289,"strong"),i(290,"(opcional)"),e()(),t(291,"p"),i(292,"A\xE7\xE3o de fechamento da caixa de di\xE1logo."),e()()(),t(293,"tr",8)(294,"td",17)(295,"div",10)(296,"span",11),i(297," componentsSize"),r(298,"br"),e()()(),t(299,"td",18)(300,"code",19),i(301,"string"),e()(),t(302,"td",12)(303,"em")(304,"strong"),i(305,"(opcional)"),e()(),t(306,"p"),i(307,"Define o tamanho dos componentes de formul\xE1rio no dialog:"),e(),t(308,"ul")(309,"li")(310,"code"),i(311,"small"),e(),i(312,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(313,"li")(314,"code"),i(315,"medium"),e(),i(316,": aplica a medida medium de cada componente."),e()(),t(317,"blockquote")(318,"p"),i(319,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(320,"code"),i(321,"medium"),e(),i(322,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(323,"a",20),i(324,"po-theme"),e(),i(325,"."),e()()()(),t(326,"tr",8)(327,"td",17)(328,"div",10)(329,"span",11),i(330," confirm"),r(331,"br"),e()()(),t(332,"td",18)(333,"code",23),i(334,"Function"),e()(),t(335,"td",12)(336,"p"),i(337,"A\xE7\xE3o de confirma\xE7\xE3o da caixa de di\xE1logo."),e()()(),t(338,"tr",8)(339,"td",17)(340,"div",10)(341,"span",11),i(342," literals"),r(343,"br"),e()()(),t(344,"td",18)(345,"code",24),i(346,"PoDialogConfirmLiterals"),e()(),t(347,"td",12)(348,"em")(349,"strong"),i(350,"(opcional)"),e()(),t(351,"p"),i(352,"Objeto com as literais usadas no "),t(353,"code"),i(354,"po-dialog"),e(),i(355," do tipo confirma\xE7\xE3o."),e(),t(356,"p"),i(357,"Para customizar os "),t(358,"em"),i(359,"labels"),e(),i(360,", pode ser enviado o objeto da seguinte forma:"),e(),t(361,"pre")(362,"code",22),i(363,`this.poDialog.confirm({
  literals: { cancel: 'No', confirm: 'Yes' },
  title: 'Confirm',
  message: 'Message body dialog',
  confirm: () => this.confirmOperation()
});
`),e()(),t(364,"blockquote")(365,"p"),i(366,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),t(367,"em"),i(368,"browser"),e(),i(369," (pt, en, es)."),e()()()(),t(370,"tr",8)(371,"td",17)(372,"div",10)(373,"span",11),i(374," message"),r(375,"br"),e()()(),t(376,"td",18)(377,"code",19),i(378,"string"),e()(),t(379,"td",12)(380,"p"),i(381,"Mensagem da caixa de di\xE1logo."),e(),t(382,"blockquote")(383,"p"),i(384,"Pode-se informar um conte\xFAdo HTML na mensagem."),e()()()(),t(385,"tr",8)(386,"td",17)(387,"div",10)(388,"span",11),i(389," title"),r(390,"br"),e()()(),t(391,"td",18)(392,"code",19),i(393,"string"),e()(),t(394,"td",12)(395,"p"),i(396,"T\xEDtulo da caixa de di\xE1logo."),e()()()()())},encapsulation:2})}return a})();var se=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(E(J),E(K))};static \u0275cmp=f({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Dialog",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),r(3,"sample-po-dialog-doc"),e(),t(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),r(5,"sample-po-dialog-basic-view")(6,"sample-po-dialog-labs-view")(7,"sample-po-dialog-cancel-credit-card-view"),e()()()),l&2&&(g("p-actions",n.actions),s(2),g("p-active",n.activeTab==="doc"),s(2),g("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[j,v,y,ne,ae,re,pe],encapsulation:2})}return a})();var ye=[{path:"",component:se}],de=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=L({type:a});static \u0275inj=k({imports:[H.forChild(ye),H]})}return a})();var Qe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=L({type:a});static \u0275inj=k({imports:[$,de]})}return a})();export{Qe as DocPoDialogModule};
