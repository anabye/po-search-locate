import{c as U,d as y,m as V,o as S,p as oe}from"./chunk-MMZVQUBQ.js";import{Ab as E,F as Z,Ga as ee,a as X,ja as $,nb as te,zb as P}from"./chunk-522XRIZO.js";import{Ac as Y,Ba as v,Bc as J,Fa as t,Ga as e,Ha as p,La as M,M as D,Ma as c,Na as L,Oc as Q,Qc as K,Sc as W,T as g,U as h,Ya as o,_a as _,ab as k,bb as C,cb as x,fb as B,ha as s,ia as z,oa as d,pa as A,ua as R,vb as w,xb as I,xc as F,ya as m,yc as H,zc as j}from"./chunk-WFKG4FNY.js";var ne=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-page-blocked-user-basic"]],standalone:!1,decls:1,vars:0,template:function(i,a){i&1&&p(0,"po-page-blocked-user")},dependencies:[y],encapsulation:2})}return n})();var he=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-page-blocked-user-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Page Blocked User Basic"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),p(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html"),e(),t(13,"pre",7),o(14,`<po-page-blocked-user></po-page-blocked-user>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-basic',
  templateUrl: './sample-po-page-blocked-user-basic.component.html',
  standalone: false
})
export class SamplePoPageBlockedUserBasicComponent {}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-page-blocked-user-basic"),e(),p(23,"hr")),i&2&&(s(5),v("po-icon "+a.sampleCodeButtonIcon),s(),_(" ",a.sampleCodeButtonLabel,""),s(),m("ngClass",B(4,he,a.hideSampleCodeTabs)))},dependencies:[w,S,P,E,ne],encapsulation:2})}return n})();var ie=(()=>{class n{componentsSize;contactMail;contactPhone;customParams;params;logo;reason=U.None;secondaryLogo;url;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];reasonOptions=[{label:"Default",value:U.None},{label:"Expired Password",value:U.ExpiredPassword},{label:"Exceeded Attempts",value:U.ExceededAttempts}];ngOnInit(){this.restore()}changeLiterals(){try{this.customParams=JSON.parse(this.params)}catch{this.customParams=void 0}}restore(){this.componentsSize="medium",this.contactMail=void 0,this.contactPhone=void 0,this.customParams={attempts:5,days:90,hours:24},this.params="",this.logo="",this.reason=U.None,this.secondaryLogo="",this.url=void 0}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-page-blocked-user-labs"]],standalone:!1,decls:15,vars:18,consts:[["f","ngForm"],[3,"p-components-size","p-contact-email","p-contact-phone","p-logo","p-params","p-reason","p-secondary-logo","p-url-back"],["p-label","Properties"],[1,"po-row"],["name","contactPhone","p-clean","","p-help","11 99999 9999","p-label","Contact Phone",1,"po-md-6",3,"ngModelChange","ngModel"],["name","contactMail","p-help","user@po-ui.com.br","p-label","Contact Mail",1,"po-md-6",3,"ngModelChange","ngModel"],["name","reason","p-columns","4","p-label","Reason Screen Type",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","params","p-clean","","p-help",'{"attempts": 20, "days": 20, "hours": 20}',"p-label","Custom Params",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","url","p-clean","","p-help","https://po-ui.io/home","p-label","URL Link",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-help","https://po-ui.io/assets/po-logos/po_color.svg","p-label","Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-help","https://po-ui.io/assets/po-logos/po_color.svg","p-label","Secondary logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(i,a){if(i&1){let u=M();p(0,"po-page-blocked-user",1)(1,"po-divider",2),t(2,"form",null,0)(4,"div",3)(5,"po-input",4),x("ngModelChange",function(r){return g(u),C(a.contactPhone,r)||(a.contactPhone=r),h(r)}),e(),t(6,"po-input",5),x("ngModelChange",function(r){return g(u),C(a.contactMail,r)||(a.contactMail=r),h(r)}),e(),t(7,"po-radio-group",6),x("ngModelChange",function(r){return g(u),C(a.reason,r)||(a.reason=r),h(r)}),e(),t(8,"po-input",7),x("ngModelChange",function(r){return g(u),C(a.params,r)||(a.params=r),h(r)}),c("p-change",function(){return g(u),h(a.changeLiterals())}),e(),t(9,"po-input",8),x("ngModelChange",function(r){return g(u),C(a.url,r)||(a.url=r),h(r)}),e(),t(10,"po-input",9),x("ngModelChange",function(r){return g(u),C(a.logo,r)||(a.logo=r),h(r)}),e(),t(11,"po-input",10),x("ngModelChange",function(r){return g(u),C(a.secondaryLogo,r)||(a.secondaryLogo=r),h(r)}),e(),t(12,"po-radio-group",11),x("ngModelChange",function(r){return g(u),C(a.componentsSize,r)||(a.componentsSize=r),h(r)}),e()(),t(13,"div",3)(14,"po-button",12),c("p-click",function(){return g(u),h(a.restore())}),e()()()}i&2&&(m("p-components-size",a.componentsSize)("p-contact-email",a.contactMail)("p-contact-phone",a.contactPhone)("p-logo",a.logo)("p-params",a.customParams)("p-reason",a.reason)("p-secondary-logo",a.secondaryLogo)("p-url-back",a.url),s(5),k("ngModel",a.contactPhone),s(),k("ngModel",a.contactMail),s(),k("ngModel",a.reason),m("p-options",a.reasonOptions),s(),k("ngModel",a.params),s(),k("ngModel",a.url),s(),k("ngModel",a.logo),s(),k("ngModel",a.secondaryLogo),s(),k("ngModel",a.componentsSize),m("p-options",a.componentsSizeOptions))},dependencies:[J,F,H,Y,j,Z,X,$,ee,y],encapsulation:2})}return n})();var Ee=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-page-blocked-user-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Page Blocked User Labs"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),p(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html"),e(),t(13,"pre",7),o(14,`<po-page-blocked-user
  [p-components-size]="componentsSize"
  [p-contact-email]="contactMail"
  [p-contact-phone]="contactPhone"
  [p-logo]="logo"
  [p-params]="customParams"
  [p-reason]="reason"
  [p-secondary-logo]="secondaryLogo"
  [p-url-back]="url"
>
</po-page-blocked-user>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="contactPhone"
      [(ngModel)]="contactPhone"
      p-clean
      p-help="11 99999 9999"
      p-label="Contact Phone"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="contactMail"
      [(ngModel)]="contactMail"
      p-help="user@po-ui.com.br"
      p-label="Contact Mail"
    >
    </po-input>

    <po-radio-group
      class="po-md-12"
      name="reason"
      [(ngModel)]="reason"
      p-columns="4"
      p-label="Reason Screen Type"
      [p-options]="reasonOptions"
    >
    </po-radio-group>

    <po-input
      class="po-md-6"
      name="params"
      [(ngModel)]="params"
      p-clean
      p-help='{"attempts": 20, "days": 20, "hours": 20}'
      p-label="Custom Params"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input class="po-md-6" name="url" [(ngModel)]="url" p-clean p-help="https://po-ui.io/home" p-label="URL Link">
    </po-input>

    <po-input
      class="po-md-6"
      name="logo"
      [(ngModel)]="logo"
      p-clean
      p-help="https://po-ui.io/assets/po-logos/po_color.svg"
      p-label="Logo"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="secondaryLogo"
      [(ngModel)]="secondaryLogo"
      p-clean
      p-help="https://po-ui.io/assets/po-logos/po_color.svg"
      p-label="Secondary logo"
    >
    </po-input>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, OnInit } from '@angular/core';

import { PoRadioGroupOption } from '@po-ui/ng-components';
import { PoPageBlockedUserReason, PoPageBlockedUserReasonParams } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-blocked-user-labs',
  templateUrl: './sample-po-page-blocked-user-labs.component.html',
  standalone: false
})
export class SamplePoPageBlockedUserLabsComponent implements OnInit {
  componentsSize: string;
  contactMail: string;
  contactPhone: string;
  customParams: PoPageBlockedUserReasonParams;
  params: string;
  logo: string;
  reason: PoPageBlockedUserReason = PoPageBlockedUserReason.None;
  secondaryLogo: string;
  url: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly reasonOptions: Array<PoRadioGroupOption> = [
    { label: 'Default', value: PoPageBlockedUserReason.None },
    { label: 'Expired Password', value: PoPageBlockedUserReason.ExpiredPassword },
    { label: 'Exceeded Attempts', value: PoPageBlockedUserReason.ExceededAttempts }
  ];

  ngOnInit() {
    this.restore();
  }

  changeLiterals() {
    try {
      this.customParams = JSON.parse(this.params);
    } catch {
      this.customParams = undefined;
    }
  }

  restore() {
    this.componentsSize = 'medium';
    this.contactMail = undefined;
    this.contactPhone = undefined;
    this.customParams = { attempts: 5, days: 90, hours: 24 };
    this.params = '';
    this.logo = '';
    this.reason = PoPageBlockedUserReason.None;
    this.secondaryLogo = '';
    this.url = undefined;
  }
}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-page-blocked-user-labs"),e(),p(23,"hr")),i&2&&(s(5),v("po-icon "+a.sampleCodeButtonIcon),s(),_(" ",a.sampleCodeButtonLabel,""),s(),m("ngClass",B(4,Ee,a.hideSampleCodeTabs)))},dependencies:[w,S,P,E,ie],encapsulation:2})}return n})();function fe(n,q){if(n&1){let l=M();t(0,"po-page-login",2),c("p-login-submit",function(){g(l);let a=L();return h(a.checkLogin())}),e()}}function ke(n,q){if(n&1&&p(0,"po-page-blocked-user",3),n&2){let l=L();m("p-params",l.params)}}var le=(()=>{class n{blocked=!1;params={attempts:1,hours:48};checkLogin(){this.blocked=!0}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-page-blocked-user-exceeded-attempts"]],standalone:!1,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit",4,"ngIf"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-back","https://po-ui.io/documentation/po-page-blocked-user",3,"p-params",4,"ngIf"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-back","https://po-ui.io/documentation/po-page-blocked-user",3,"p-params"]],template:function(i,a){i&1&&R(0,fe,1,0,"po-page-login",0)(1,ke,1,1,"po-page-blocked-user",1),i&2&&(m("ngIf",!a.blocked),s(),m("ngIf",a.blocked))},dependencies:[I,y,V],encapsulation:2})}return n})();var xe=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-page-blocked-user-exceeded-attempts-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Page Blocked User Exceeded Attempts"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),p(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html"),e(),t(13,"pre",7),o(14,`<po-page-login
  *ngIf="!blocked"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  (p-login-submit)="checkLogin()"
>
</po-page-login>

<po-page-blocked-user
  *ngIf="blocked"
  p-contact-email="user@po-ui.com.br"
  p-contact-phone="0800 709 8100"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-reason="exceededAttempts"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  p-url-back="https://po-ui.io/documentation/po-page-blocked-user"
  [p-params]="params"
>
</po-page-blocked-user>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

import { PoPageBlockedUserReasonParams } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-blocked-user-exceeded-attempts',
  templateUrl: './sample-po-page-blocked-user-exceeded-attempts.component.html',
  standalone: false
})
export class SamplePoPageBlockedUserExceededAttemptsComponent {
  blocked = false;
  params: PoPageBlockedUserReasonParams = { attempts: 1, hours: 48 };

  checkLogin() {
    this.blocked = true;
  }
}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-page-blocked-user-exceeded-attempts"),e(),p(23,"hr")),i&2&&(s(5),v("po-icon "+a.sampleCodeButtonIcon),s(),_(" ",a.sampleCodeButtonLabel,""),s(),m("ngClass",B(4,xe,a.hideSampleCodeTabs)))},dependencies:[w,S,P,E,le],encapsulation:2})}return n})();function _e(n,q){if(n&1){let l=M();t(0,"po-page-login",2),c("p-login-submit",function(){g(l);let a=L();return h(a.checkLogin())}),e()}}function Be(n,q){n&1&&p(0,"po-page-blocked-user",3)}var re=(()=>{class n{blocked=!1;checkLogin(){this.blocked=!0}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-page-blocked-user-expired-password"]],standalone:!1,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit",4,"ngIf"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","expiredPassword","p-url-back","https://po-ui.io/documentation/po-page-blocked-user",4,"ngIf"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","expiredPassword","p-url-back","https://po-ui.io/documentation/po-page-blocked-user"]],template:function(i,a){i&1&&R(0,_e,1,0,"po-page-login",0)(1,Be,1,0,"po-page-blocked-user",1),i&2&&(m("ngIf",!a.blocked),s(),m("ngIf",a.blocked))},dependencies:[I,y,V],encapsulation:2})}return n})();var ye=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-page-blocked-user-expired-password-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Page Blocked User Expired Password"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),p(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html"),e(),t(13,"pre",7),o(14,`<po-page-login
  *ngIf="!blocked"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  (p-login-submit)="checkLogin()"
>
</po-page-login>

<po-page-blocked-user
  *ngIf="blocked"
  p-contact-email="user@po-ui.com.br"
  p-contact-phone="0800 709 8100"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-reason="expiredPassword"
  p-url-back="https://po-ui.io/documentation/po-page-blocked-user"
>
</po-page-blocked-user>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-expired-password',
  templateUrl: './sample-po-page-blocked-user-expired-password.component.html',
  standalone: false
})
export class SamplePoPageBlockedUserExpiredPasswordComponent {
  blocked = false;

  checkLogin() {
    this.blocked = true;
  }
}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-page-blocked-user-expired-password"),e(),p(23,"hr")),i&2&&(s(5),v("po-icon "+a.sampleCodeButtonIcon),s(),_(" ",a.sampleCodeButtonLabel,""),s(),m("ngClass",B(4,ye,a.hideSampleCodeTabs)))},dependencies:[w,S,P,E,re],encapsulation:2})}return n})();var de=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-page-blocked-user-doc"]],standalone:!1,decls:361,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageBlockedUserReasonParams"],["pan","",1,"docs-api-property-type","PoPageBlockedUserReason"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(i,a){i&1&&(t(0,"div",0)(1,"p",1)(2,"code"),o(3,"import { PoPageBlockedUserModule } from '@po-ui/ng-templates';"),e()(),t(4,"div",2)(5,"p"),o(6,"M\xF3dulo do template do po-page-blocked-user."),e()(),t(7,"h3",3),o(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),o(11,"PoPageBlockedUserComponent"),e()(),t(12,"div",2)(13,"p"),o(14,"O componente "),t(15,"code"),o(16,"po-page-blocked-user"),e(),o(17,` \xE9 utilizado como template para tela de bloqueio de usu\xE1rio.
\xC9 poss\xEDvel definir entre tr\xEAs tipos de telas para alertar o usu\xE1rio sobre um eventual bloqueio de login.`),e(),t(18,"p"),o(19,`Cada modelo de bloqueio possui uma imagem e texto adequados \xE0 situa\xE7\xE3o.
Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis, por\xE9m,
\xE9 poss\xEDvel estipular par\xE2metros como dias, horas e tentativas de acesso esgotadas.`),e(),t(20,"p"),o(21,"Por fim, h\xE1 propriedades para adi\xE7\xE3o de telefone e/ou email para contato e tamb\xE9m a defini\xE7\xE3o para a url de retorno."),e(),t(22,"p"),o(23,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),t(24,"em"),o(25,"assets"),e(),o(26," no arquivo "),t(27,"strong"),o(28,"angular.json"),e(),o(29," da aplica\xE7\xE3o na seguinte ordem:"),e(),t(30,"pre")(31,"code"),o(32,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),e()(),p(33,"hr"),t(34,"h4"),o(35,"Praticidade"),e(),t(36,"p"),o(37,"O "),t(38,"code"),o(39,"po-page-blocked-user"),e(),o(40,`, assim como suas propriedades, pode tamb\xE9m ser transmitido diretamente pelas configura\xE7\xE3os de rota e,
desta maneira, dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template pode ser gerado se navegasse para uma rota denominada como `),t(41,"code"),o(42,"/access-denied"),e(),o(43,":"),e(),t(44,"pre")(45,"code"),o(46,`import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@po-ui/ng-templates';

...
const routes: Routes = [
  {
    path: 'access-denied', component: PoPageBlockedUserComponent, data: {
      contactEmail: 'dev.po@po-ui.com',
      contactPhone: '0800 1234 000',
      reason: PoPageBlockedUserReason.ExpiredPassword,
      urlBack: '/home'
    }
  }
  ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`),e()(),t(47,"blockquote")(48,"p"),o(49,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade. "),e()()(),t(50,"div",6)(51,"h4",7),o(52,"Seletor"),e(),t(53,"pre",8),o(54,`<po-page-blocked-user
    p-components-size="string"
    p-contact-email="string"
    p-contact-phone="string"
    p-logo="string"
    p-params="PoPageBlockedUserReasonParams"
    p-reason="PoPageBlockedUserReason"
    p-secondary-logo="string"
    p-url-back="string" >
</po-page-blocked-user>
`),e()(),t(55,"h4",9),o(56,"Propriedades"),e(),t(57,"table",10)(58,"tr",11)(59,"th",12),o(60,"Nome"),e(),t(61,"th",12),o(62,"Tipo"),e(),t(63,"th",12),o(64,"Padr\xE3o"),e(),t(65,"th",12),o(66,"Descri\xE7\xE3o"),e()(),t(67,"tr",13)(68,"td",14)(69,"div",15)(70,"span",16),o(71," p-components-size"),p(72,"br"),e()()(),t(73,"td",17)(74,"code",18),o(75,"string"),e()(),t(76,"td",19)(77,"p")(78,"code"),o(79,"medium"),e()()(),t(80,"td",20)(81,"em")(82,"strong"),o(83,"(opcional)"),e()(),t(84,"p"),o(85,"Define o tamanho dos componentes de formul\xE1rio no template:"),e(),t(86,"ul")(87,"li")(88,"code"),o(89,"small"),e(),o(90,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(91,"li")(92,"code"),o(93,"medium"),e(),o(94,": aplica a medida medium de cada componente."),e()(),t(95,"blockquote")(96,"p"),o(97,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(98,"code"),o(99,"medium"),e(),o(100,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(101,"a",21),o(102,"po-theme"),e(),o(103,"."),e()()()(),t(104,"tr",13)(105,"td",14)(106,"div",15)(107,"span",16),o(108," p-contact-email"),p(109,"br"),e()()(),t(110,"td",17)(111,"code",18),o(112,"string"),e()(),t(113,"td",19),o(114,"-"),e(),t(115,"td",20)(116,"em")(117,"strong"),o(118,"(opcional)"),e()(),t(119,"p"),o(120,`Valor para o email de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo MAILTO e \xE9 poss\xEDvel definir
tanto rotas internas quanto externas.`),e()()(),t(121,"tr",13)(122,"td",14)(123,"div",15)(124,"span",16),o(125," p-contact-phone"),p(126,"br"),e()()(),t(127,"td",17)(128,"code",18),o(129,"string"),e()(),t(130,"td",19),o(131,"-"),e(),t(132,"td",20)(133,"em")(134,"strong"),o(135,"(opcional)"),e()(),t(136,"p"),o(137,"Valor para o telefone de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo TEL."),e(),t(138,"blockquote")(139,"p"),o(140,"A propriedade n\xE3o contem tratamento de m\xE1scara, fica a crit\xE9rio do desenvolvedor defini-la."),e()()()(),t(141,"tr",13)(142,"td",14)(143,"div",15)(144,"span",16),o(145," p-logo"),p(146,"br"),e()()(),t(147,"td",17)(148,"code",18),o(149,"string"),e()(),t(150,"td",19),o(151,"-"),e(),t(152,"td",20)(153,"em")(154,"strong"),o(155,"(opcional)"),e()(),t(156,"p"),o(157,"Caminho para a logomarca localizada na parte superior, caso n\xE3o seja definida ou seja inv\xE1lida assume a logo padr\xE3o do PO UI."),e()()(),t(158,"tr",13)(159,"td",14)(160,"div",15)(161,"span",16),o(162," p-params"),p(163,"br"),e()()(),t(164,"td",17)(165,"code",22),o(166,"PoPageBlockedUserReasonParams"),e()(),t(167,"td",19),o(168,"-"),e(),t(169,"td",20)(170,"em")(171,"strong"),o(172,"(opcional)"),e()(),t(173,"p"),o(174,`Designa\xE7\xE3o de valores usados para a customiza\xE7\xE3o da mensagem de bloqueio.
Confira abaixo os valores pr\xE9-definidos.`),e(),t(175,"pre")(176,"code"),o(177,`const customLiterals: PoPageBlockedUserReasonParams = {
  attempts: 5,
  days: 90,
  hours: 24
};
`),e()(),t(178,"blockquote")(179,"p"),o(180,"Salientamos a import\xE2ncia e aten\xE7\xE3o para configura\xE7\xE3o desses valores conforme definidos no projeto."),e()(),t(181,"blockquote")(182,"p"),o(183,"Veja os par\xE2metros customiz\xE1veis na interface "),t(184,"code"),o(185,"PoPageBlockedUserReasonParams"),e(),o(186,"."),e()()()(),t(187,"tr",13)(188,"td",14)(189,"div",15)(190,"span",16),o(191," p-reason"),p(192,"br"),e()()(),t(193,"td",17)(194,"code",23),o(195,"PoPageBlockedUserReason"),e()(),t(196,"td",19)(197,"p")(198,"code"),o(199,"PoPageBlockedUserReason.None"),e()()(),t(200,"td",20)(201,"em")(202,"strong"),o(203,"(opcional)"),e()(),t(204,"p"),o(205,"Defini\xE7\xE3o de motivo de bloqueio de usu\xE1rio. As informa\xE7\xF5es modificam conforme o motivo selecionado."),e(),t(206,"blockquote")(207,"p"),o(208,"Veja os valores v\xE1lidos no "),t(209,"em"),o(210,"enum"),e(),t(211,"code"),o(212,"PoPageBlockedUserReason"),e(),o(213,"."),e()()()(),t(214,"tr",13)(215,"td",14)(216,"div",15)(217,"span",16),o(218," p-secondary-logo"),p(219,"br"),e()()(),t(220,"td",17)(221,"code",18),o(222,"string"),e()(),t(223,"td",19),o(224,"-"),e(),t(225,"td",20)(226,"em")(227,"strong"),o(228,"(opcional)"),e()(),t(229,"p"),o(230,"Caminho para a logomarca localizada no rodap\xE9."),e()()(),t(231,"tr",13)(232,"td",14)(233,"div",15)(234,"span",16),o(235," p-url-back"),p(236,"br"),e()()(),t(237,"td",17)(238,"code",18),o(239,"string"),e()(),t(240,"td",19)(241,"p")(242,"code"),o(243,"/"),e()()(),t(244,"td",20)(245,"em")(246,"strong"),o(247,"(opcional)"),e()(),t(248,"p"),o(249,"URL para a a\xE7\xE3o de retorno da p\xE1gina."),e()()()(),t(250,"h3"),o(251,"Interfaces"),e(),t(252,"h4",24)(253,"code",5),o(254,"PoPageBlockedUserReasonParams"),e()(),t(255,"div",2)(256,"p"),o(257,"Interface que define os valores de customiza\xE7\xE3o da mensagem de bloqueio do componente "),t(258,"code"),o(259,"po-page-blocked-user"),e(),o(260,"."),e()(),t(261,"h4",9),o(262,"Propriedades"),e(),t(263,"table",10)(264,"tr",11)(265,"th",12),o(266,"Nome"),e(),t(267,"th",12),o(268,"Tipo"),e(),t(269,"th",12),o(270,"Descri\xE7\xE3o"),e()(),t(271,"tr",13)(272,"td",14)(273,"div",15)(274,"span",16),o(275," attempts"),p(276,"br"),e()()(),t(277,"td",17)(278,"code",25),o(279,"number"),e()(),t(280,"td",20)(281,"em")(282,"strong"),o(283,"(opcional)"),e()(),t(284,"p"),o(285,"Quantidade m\xE1xima de tentativas."),e()()(),t(286,"tr",13)(287,"td",14)(288,"div",15)(289,"span",16),o(290," days"),p(291,"br"),e()()(),t(292,"td",17)(293,"code",25),o(294,"number"),e()(),t(295,"td",20)(296,"em")(297,"strong"),o(298,"(opcional)"),e()(),t(299,"p"),o(300,"Quantidade de dias para expira\xE7\xE3o de senha."),e()()(),t(301,"tr",13)(302,"td",14)(303,"div",15)(304,"span",16),o(305," hours"),p(306,"br"),e()()(),t(307,"td",17)(308,"code",25),o(309,"number"),e()(),t(310,"td",20)(311,"em")(312,"strong"),o(313,"(opcional)"),e()(),t(314,"p"),o(315,"Horas que o sistema permanecer\xE1 bloqueado."),e()()()(),t(316,"h3"),o(317,"Enums"),e(),t(318,"h4",4)(319,"code",5),o(320,"PoPageBlockedUserReason"),e()(),t(321,"div",2)(322,"p")(323,"em"),o(324,"Enum"),e(),o(325," para os tipos de motivo de bloqueio de usu\xE1rio. As informa\xE7\xF5es modificam conforme o motivo selecionado pelo desenvolvedor."),e()(),t(326,"h4",9),o(327,"Propriedades"),e(),t(328,"table",10)(329,"tr",11)(330,"th",12),o(331,"Nome"),e(),t(332,"th",12),o(333,"Descri\xE7\xE3o"),e()(),t(334,"tr",13)(335,"td",14)(336,"div",15)(337,"span",16),o(338," None"),p(339,"br"),e()()(),t(340,"td",20)(341,"p"),o(342,"Sem defini\xE7\xE3o; a tela exibir\xE1 conte\xFAdo de bloqueio gen\xE9rico."),e()()(),t(343,"tr",13)(344,"td",14)(345,"div",15)(346,"span",16),o(347," ExceededAttempts"),p(348,"br"),e()()(),t(349,"td",20)(350,"p"),o(351,"Defini\xE7\xE3o para tentativas de acesso esgotadas."),e()()(),t(352,"tr",13)(353,"td",14)(354,"div",15)(355,"span",16),o(356," ExpiredPassword"),p(357,"br"),e()()(),t(358,"td",20)(359,"p"),o(360,"Defini\xE7\xE3o para senha expirada."),e()()()()())},dependencies:[S],encapsulation:2})}return n})();var ce=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,i){this.route=l,this.router=i}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(i){return new(i||n)(z(Q),z(K))};static \u0275cmp=d({type:n,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Page Blocked User",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,a){i&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return a.changeTab("doc")}),p(3,"sample-po-page-blocked-user-doc"),e(),t(4,"po-tab",3),c("p-click",function(){return a.changeTab("web")}),p(5,"sample-po-page-blocked-user-basic-view")(6,"sample-po-page-blocked-user-labs-view")(7,"sample-po-page-blocked-user-exceeded-attempts-view")(8,"sample-po-page-blocked-user-expired-password-view"),e()()()),i&2&&(m("p-actions",a.actions),s(2),m("p-active",a.activeTab==="doc"),s(2),m("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[te,P,E,ae,pe,se,me,de],encapsulation:2})}return n})();var Le=[{path:"",component:ce}],ue=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=A({type:n});static \u0275inj=D({imports:[W.forChild(Le),W]})}return n})();var lt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=A({type:n});static \u0275inj=D({imports:[oe,ue]})}return n})();export{lt as DocPoPageBlockedUserModule};
