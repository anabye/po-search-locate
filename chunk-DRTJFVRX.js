import{a as re,d as le,m as F,o as C,p as se}from"./chunk-MMZVQUBQ.js";import{Ab as f,F as ee,Ga as oe,K as q,R as te,Wa as V,a as $,ca as B,ha as ne,ja as ie,nb as ae,zb as P}from"./chunk-522XRIZO.js";import{Ac as Z,Ba as L,Bc as Q,Fa as n,Ga as t,Ha as o,La as O,M as A,Ma as h,Na as k,Oc as K,Qc as X,Sc as R,T as d,U as u,Xa as U,Ya as e,_a as y,a as N,ab as g,bb as E,cb as S,fb as _,ha as p,ia as w,oa as b,pa as D,ua as j,vb as M,xb as H,xc as G,ya as x,yc as Y,zc as J}from"./chunk-WFKG4FNY.js";var pe=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-basic"]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&o(0,"po-page-login")},dependencies:[F],encapsulation:2})}return r})();var fe=r=>({"docs-sample-code-tabs":r}),me=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Login Basic"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-login-basic/sample-po-page-login-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-page-login></po-page-login>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-login-basic/sample-po-page-login-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-login-basic',
  templateUrl: './sample-po-page-login-basic.component.html',
  standalone: false
})
export class SamplePoPageLoginBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-page-login-basic"),t(),o(23,"hr")),l&2&&(p(5),L("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),x("ngClass",_(4,fe,i.hideSampleCodeTabs)))},dependencies:[M,C,P,f,pe],encapsulation:2})}return r})();var de=(()=>{class r{poDialog;background;componentsSize;contactEmail;customField;customFieldOption;customFieldOptions;customLiterals;environment;exceededAttempts;secondaryLogo;literals;login;loginPattern;loginError;loginErrors;logo;passwordError;passwordErrors;passwordPattern;productName;properties;recovery;registerUrl;support;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"hideRememberUser",label:"Hide remember user"},{value:"loading",label:"Loading"}];constructor(s){this.poDialog=s}ngOnInit(){this.restore()}addCustomFieldOption(){this.customFieldOptions.push({label:this.customFieldOption.label,value:this.customFieldOption.value}),this.customField.options=this.customFieldOptions,this.onChangeCustomProperties(),this.customFieldOption={}}addLoginError(){this.loginErrors.push(this.loginError),this.loginError=""}addPasswordError(){this.passwordErrors.push(this.passwordError),this.passwordError=""}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}loginSubmit(s){this.exceededAttempts<=0&&this.poDialog.alert({title:"Authenticate",message:JSON.stringify(s),componentsSize:this.componentsSize})}onChangeCustomProperties(){this.customField=Object.assign({},this.customField)}restore(){this.properties=[],this.background="",this.componentsSize="medium",this.contactEmail="",this.customField={property:void 0},this.customFieldOption={label:void 0,value:void 0},this.customFieldOptions=[],this.customLiterals=void 0,this.environment="",this.exceededAttempts=0,this.secondaryLogo=void 0,this.literals="",this.login="",this.loginPattern="",this.loginError="",this.loginErrors=[],this.logo=void 0,this.passwordError="",this.passwordErrors=[],this.passwordPattern="",this.passwordError="",this.passwordErrors=[],this.productName="",this.recovery="",this.registerUrl="",this.support=""}static \u0275fac=function(l){return new(l||r)(w(q))};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-labs"]],standalone:!1,decls:60,vars:50,consts:[["f","ngForm"],["formCustomFieldOptions","ngForm"],[3,"p-login-submit","p-background","p-components-size","p-contact-email","p-custom-field","p-environment","p-exceeded-attempts-warning","p-hide-remember-user","p-loading","p-literals","p-login","p-login-errors","p-login-pattern","p-logo","p-password-errors","p-password-pattern","p-product-name","p-recovery","p-register-url","p-secondary-logo","p-support"],[1,"po-row"],["name","literals","p-help",'Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","productName","p-clean","","p-help","A custom name that succeeds the title","p-label","Product Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","loginPattern","p-clean","","p-help","Ex.: ^[a-zA-Z]*$ (Only letters)","p-label","Login Pattern",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","login","p-clean","","p-help","Ex.: podev","p-label","Login",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","exceededAttempts","p-clean","","p-help","Ex.: 5","p-label","Exceeded Attempts Warning",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","passwordPattern","p-clean","","p-help","Ex.: ^(\\d*)$ (Only numbers)","p-label","Password Pattern",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","contactMail","p-clean","","p-label","Contact Email",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","environment","p-clean","","p-label","Environment",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","background","p-clean","","p-label","Background",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","support","p-clean","","p-label","Support",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","recovery","p-clean","","p-label","Recovery",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","registerUrl","p-clean","","p-label","Register URL",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Login Errors"],["name","loginError","p-clean","","p-label","Login Error",1,"po-md-8",3,"ngModelChange","ngModel"],["p-label","Add Login Error",1,"po-md-4","po-mt-4",3,"p-click"],["p-label","Password Errors"],["name","passwordError","p-clean","","p-label","Password Error",1,"po-lg-8",3,"ngModelChange","ngModel"],["p-label","Add Password Error",1,"po-md-4","po-mt-4",3,"p-click"],["p-label","Custom Field"],["name","customFieldProperty","p-clean","","p-help","Ex.: domain","p-label","Custom Field Property",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldValue","p-clean","","p-help","Ex.: JV01","p-label","Custom Field Value",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","customFieldPlaceholder","p-clean","","p-help","Ex.: Enter your domain","p-label","Custom Field Placeholder",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldPattern","p-clean","","p-help","Ex.: [a-z]","p-label","Custom Field Pattern",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldErrorPattern","p-clean","","p-help","Ex.: Value doesn`t match expected","p-label","Custom Field Error Pattern",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldComboUrl","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/heroes","p-label","Custom Field URL",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldComboValue","p-clean","","p-help","Property to specify the return field. Ex.: value, nickname, label","p-label","Custom Field Field Value",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldOptionLabel","p-clean","","p-label","Custom Field Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","customFieldOptionValue","p-clean","","p-label","Custom Field Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Custom Field Option",1,"po-md-6","po-lg-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let m=O();n(0,"po-page-login",2),h("p-login-submit",function(a){return d(m),u(i.loginSubmit(a))}),t(),o(1,"hr"),n(2,"form",null,0)(4,"div",3)(5,"po-input",4),S("ngModelChange",function(a){return d(m),E(i.literals,a)||(i.literals=a),u(a)}),h("p-change",function(){return d(m),u(i.changeLiterals())}),t(),n(6,"po-input",5),S("ngModelChange",function(a){return d(m),E(i.productName,a)||(i.productName=a),u(a)}),t()(),n(7,"div",3)(8,"po-input",6),S("ngModelChange",function(a){return d(m),E(i.loginPattern,a)||(i.loginPattern=a),u(a)}),t(),n(9,"po-input",7),S("ngModelChange",function(a){return d(m),E(i.login,a)||(i.login=a),u(a)}),t()(),n(10,"div",3)(11,"po-input",8),S("ngModelChange",function(a){return d(m),E(i.exceededAttempts,a)||(i.exceededAttempts=a),u(a)}),t(),n(12,"po-input",9),S("ngModelChange",function(a){return d(m),E(i.passwordPattern,a)||(i.passwordPattern=a),u(a)}),t()(),n(13,"div",3)(14,"po-input",10),S("ngModelChange",function(a){return d(m),E(i.contactEmail,a)||(i.contactEmail=a),u(a)}),t(),n(15,"po-input",11),S("ngModelChange",function(a){return d(m),E(i.environment,a)||(i.environment=a),u(a)}),t()(),n(16,"div",3)(17,"po-input",12),S("ngModelChange",function(a){return d(m),E(i.logo,a)||(i.logo=a),u(a)}),t(),n(18,"po-input",13),S("ngModelChange",function(a){return d(m),E(i.secondaryLogo,a)||(i.secondaryLogo=a),u(a)}),t()(),n(19,"div",3)(20,"po-input",14),S("ngModelChange",function(a){return d(m),E(i.background,a)||(i.background=a),u(a)}),t(),n(21,"po-input",15),S("ngModelChange",function(a){return d(m),E(i.support,a)||(i.support=a),u(a)}),t()(),n(22,"div",3)(23,"po-input",16),S("ngModelChange",function(a){return d(m),E(i.recovery,a)||(i.recovery=a),u(a)}),t(),n(24,"po-input",17),S("ngModelChange",function(a){return d(m),E(i.registerUrl,a)||(i.registerUrl=a),u(a)}),t()(),n(25,"div",3)(26,"po-checkbox-group",18),S("ngModelChange",function(a){return d(m),E(i.properties,a)||(i.properties=a),u(a)}),t(),n(27,"po-radio-group",19),S("ngModelChange",function(a){return d(m),E(i.componentsSize,a)||(i.componentsSize=a),u(a)}),t()(),o(28,"po-divider",20),n(29,"div",3)(30,"po-input",21),S("ngModelChange",function(a){return d(m),E(i.loginError,a)||(i.loginError=a),u(a)}),t(),n(31,"po-button",22),h("p-click",function(){return d(m),u(i.addLoginError())}),t()(),o(32,"po-divider",23),n(33,"div",3)(34,"po-input",24),S("ngModelChange",function(a){return d(m),E(i.passwordError,a)||(i.passwordError=a),u(a)}),t(),n(35,"po-button",25),h("p-click",function(){return d(m),u(i.addPasswordError())}),t()(),o(36,"po-divider",26),n(37,"div",3)(38,"po-input",27),S("ngModelChange",function(a){return d(m),E(i.customField.property,a)||(i.customField.property=a),u(a)}),h("p-change-model",function(){return d(m),u(i.onChangeCustomProperties())}),t(),n(39,"po-input",28),S("ngModelChange",function(a){return d(m),E(i.customField.value,a)||(i.customField.value=a),u(a)}),t()(),n(40,"div",3)(41,"po-input",29),S("ngModelChange",function(a){return d(m),E(i.customField.placeholder,a)||(i.customField.placeholder=a),u(a)}),t(),n(42,"po-input",30),S("ngModelChange",function(a){return d(m),E(i.customField.pattern,a)||(i.customField.pattern=a),u(a)}),t(),n(43,"po-input",31),S("ngModelChange",function(a){return d(m),E(i.customField.errorPattern,a)||(i.customField.errorPattern=a),u(a)}),t()(),o(44,"hr"),n(45,"div",3)(46,"po-input",32),S("ngModelChange",function(a){return d(m),E(i.customField.url,a)||(i.customField.url=a),u(a)}),h("p-change-model",function(){return d(m),u(i.onChangeCustomProperties())}),t(),n(47,"po-input",33),S("ngModelChange",function(a){return d(m),E(i.customField.fieldValue,a)||(i.customField.fieldValue=a),u(a)}),h("p-change-model",function(){return d(m),u(i.onChangeCustomProperties())}),t()(),o(48,"hr"),n(49,"form",null,1)(51,"div",3)(52,"po-input",34),S("ngModelChange",function(a){return d(m),E(i.customFieldOption.label,a)||(i.customFieldOption.label=a),u(a)}),t(),n(53,"po-input",35),S("ngModelChange",function(a){return d(m),E(i.customFieldOption.value,a)||(i.customFieldOption.value=a),u(a)}),t()(),n(54,"div",3)(55,"po-button",36),h("p-click",function(){return d(m),u(i.addCustomFieldOption())}),t()()(),o(56,"br")(57,"hr"),n(58,"div",3)(59,"po-button",37),h("p-click",function(){return d(m),u(i.restore())}),t()()()}if(l&2){let m=U(50);x("p-background",i.background)("p-components-size",i.componentsSize)("p-contact-email",i.contactEmail)("p-custom-field",i.customField)("p-environment",i.environment)("p-exceeded-attempts-warning",i.exceededAttempts)("p-hide-remember-user",i.properties.includes("hideRememberUser"))("p-loading",i.properties.includes("loading"))("p-literals",i.customLiterals)("p-login",i.login)("p-login-errors",i.loginErrors)("p-login-pattern",i.loginPattern)("p-logo",i.logo)("p-password-errors",i.passwordErrors)("p-password-pattern",i.passwordPattern)("p-product-name",i.productName)("p-recovery",i.recovery)("p-register-url",i.registerUrl)("p-secondary-logo",i.secondaryLogo)("p-support",i.support),p(5),g("ngModel",i.literals),p(),g("ngModel",i.productName),p(2),g("ngModel",i.loginPattern),p(),g("ngModel",i.login),p(2),g("ngModel",i.exceededAttempts),p(),g("ngModel",i.passwordPattern),p(2),g("ngModel",i.contactEmail),p(),g("ngModel",i.environment),p(2),g("ngModel",i.logo),p(),g("ngModel",i.secondaryLogo),p(2),g("ngModel",i.background),p(),g("ngModel",i.support),p(2),g("ngModel",i.recovery),p(),g("ngModel",i.registerUrl),p(2),g("ngModel",i.properties),x("p-options",i.propertiesOptions),p(),g("ngModel",i.componentsSize),x("p-options",i.componentsSizeOptions),p(3),g("ngModel",i.loginError),p(4),g("ngModel",i.passwordError),p(4),g("ngModel",i.customField.property),p(),g("ngModel",i.customField.value),p(2),g("ngModel",i.customField.placeholder),p(),g("ngModel",i.customField.pattern),p(),g("ngModel",i.customField.errorPattern),p(3),g("ngModel",i.customField.url),p(),g("ngModel",i.customField.fieldValue),p(5),g("ngModel",i.customFieldOption.label),p(),g("ngModel",i.customFieldOption.value),p(2),x("p-disabled",m.invalid)}},dependencies:[Q,G,Y,Z,J,ee,$,ne,ie,oe,F],encapsulation:2})}return r})();var Le=r=>({"docs-sample-code-tabs":r}),ue=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Login Labs"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-login-labs/sample-po-page-login-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-page-login
  [p-background]="background"
  [p-components-size]="componentsSize"
  [p-contact-email]="contactEmail"
  [p-custom-field]="customField"
  [p-environment]="environment"
  [p-exceeded-attempts-warning]="exceededAttempts"
  [p-hide-remember-user]="properties.includes('hideRememberUser')"
  [p-loading]="properties.includes('loading')"
  [p-literals]="customLiterals"
  [p-login]="login"
  [p-login-errors]="loginErrors"
  [p-login-pattern]="loginPattern"
  [p-logo]="logo"
  [p-password-errors]="passwordErrors"
  [p-password-pattern]="passwordPattern"
  [p-product-name]="productName"
  [p-recovery]="recovery"
  [p-register-url]="registerUrl"
  [p-secondary-logo]="secondaryLogo"
  [p-support]="support"
  (p-login-submit)="loginSubmit($event)"
>
</po-page-login>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="productName"
      [(ngModel)]="productName"
      p-clean
      p-help="A custom name that succeeds the title"
      p-label="Product Name"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="loginPattern"
      [(ngModel)]="loginPattern"
      p-clean
      p-help="Ex.: ^[a-zA-Z]*$ (Only letters)"
      p-label="Login Pattern"
    >
    </po-input>

    <po-input class="po-lg-6" name="login" [(ngModel)]="login" p-clean p-help="Ex.: podev" p-label="Login"> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="exceededAttempts"
      [(ngModel)]="exceededAttempts"
      p-clean
      p-help="Ex.: 5"
      p-label="Exceeded Attempts Warning"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="passwordPattern"
      [(ngModel)]="passwordPattern"
      p-clean
      p-help="Ex.: ^(\\d*)$ (Only numbers)"
      p-label="Password Pattern"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="contactMail" [(ngModel)]="contactEmail" p-clean p-label="Contact Email"> </po-input>

    <po-input class="po-lg-6" name="environment" [(ngModel)]="environment" p-clean p-label="Environment"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="logo" [(ngModel)]="logo" p-clean p-label="Logo"> </po-input>

    <po-input class="po-lg-6" name="secondaryLogo" [(ngModel)]="secondaryLogo" p-clean p-label="Secondary logo">
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="background" [(ngModel)]="background" p-clean p-label="Background"> </po-input>

    <po-input class="po-lg-6" name="support" [(ngModel)]="support" p-clean p-label="Support"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="recovery" [(ngModel)]="recovery" p-clean p-label="Recovery"> </po-input>

    <po-input class="po-lg-6" name="registerUrl" [(ngModel)]="registerUrl" p-clean p-label="Register URL"> </po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

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

  <po-divider p-label="Login Errors"></po-divider>

  <div class="po-row">
    <po-input class="po-md-8" name="loginError" [(ngModel)]="loginError" p-clean p-label="Login Error"> </po-input>

    <po-button class="po-md-4 po-mt-4" p-label="Add Login Error" (p-click)="addLoginError()"> </po-button>
  </div>

  <po-divider p-label="Password Errors"></po-divider>

  <div class="po-row">
    <po-input class="po-lg-8" name="passwordError" [(ngModel)]="passwordError" p-clean p-label="Password Error">
    </po-input>

    <po-button class="po-md-4 po-mt-4" p-label="Add Password Error" (p-click)="addPasswordError()"> </po-button>
  </div>

  <po-divider p-label="Custom Field"></po-divider>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="customFieldProperty"
      [(ngModel)]="customField.property"
      p-clean
      p-help="Ex.: domain"
      p-label="Custom Field Property"
      (p-change-model)="onChangeCustomProperties()"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="customFieldValue"
      [(ngModel)]="customField.value"
      p-clean
      p-help="Ex.: JV01"
      p-label="Custom Field Value"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-4"
      name="customFieldPlaceholder"
      [(ngModel)]="customField.placeholder"
      p-clean
      p-help="Ex.: Enter your domain"
      p-label="Custom Field Placeholder"
    >
    </po-input>

    <po-input
      class="po-lg-4"
      name="customFieldPattern"
      [(ngModel)]="customField.pattern"
      p-clean
      p-help="Ex.: [a-z]"
      p-label="Custom Field Pattern"
    >
    </po-input>

    <po-input
      class="po-lg-4"
      name="customFieldErrorPattern"
      [(ngModel)]="customField.errorPattern"
      p-clean
      p-help="Ex.: Value doesn\`t match expected"
      p-label="Custom Field Error Pattern"
    >
    </po-input>
  </div>

  <hr />

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="customFieldComboUrl"
      [(ngModel)]="customField.url"
      p-clean
      p-help="Ex.: https://po-sample-api.onrender.com/v1/heroes"
      p-label="Custom Field URL"
      (p-change-model)="onChangeCustomProperties()"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="customFieldComboValue"
      [(ngModel)]="customField.fieldValue"
      p-clean
      p-help="Property to specify the return field. Ex.: value, nickname, label"
      p-label="Custom Field Field Value"
      (p-change-model)="onChangeCustomProperties()"
    >
    </po-input>
  </div>

  <hr />

  <form #formCustomFieldOptions="ngForm">
    <div class="po-row">
      <po-input
        class="po-md-6"
        name="customFieldOptionLabel"
        [(ngModel)]="customFieldOption.label"
        p-clean
        p-label="Custom Field Option Label"
        p-required
      >
      </po-input>

      <po-input
        class="po-md-6"
        name="customFieldOptionValue"
        [(ngModel)]="customFieldOption.value"
        p-clean
        p-label="Custom Field Option Value"
        p-required
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-6 po-lg-4"
        p-label="Add Custom Field Option"
        [p-disabled]="formCustomFieldOptions.invalid"
        (p-click)="addCustomFieldOption()"
      >
      </po-button>
    </div>
  </form>

  <br />

  <hr />

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-login-labs/sample-po-page-login-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoDialogService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

import { PoPageLogin, PoPageLoginCustomField, PoPageLoginLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-login-labs',
  templateUrl: './sample-po-page-login-labs.component.html',
  standalone: false
})
export class SamplePoPageLoginLabsComponent implements OnInit {
  background: string;
  componentsSize: string;
  contactEmail: string;
  customField: PoPageLoginCustomField;
  customFieldOption: any;
  customFieldOptions: Array<PoSelectOption>;
  customLiterals: PoPageLoginLiterals;
  environment: string;
  exceededAttempts: number;
  secondaryLogo: string;
  literals: string;
  login: string;
  loginPattern: string;
  loginError: string;
  loginErrors: Array<string>;
  logo: string;
  passwordError: string;
  passwordErrors: Array<string>;
  passwordPattern: string;
  productName: string;
  properties: Array<string>;
  recovery: string;
  registerUrl: string;
  support: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'hideRememberUser', label: 'Hide remember user' },
    { value: 'loading', label: 'Loading' }
  ];

  constructor(private poDialog: PoDialogService) {}

  ngOnInit() {
    this.restore();
  }

  addCustomFieldOption() {
    this.customFieldOptions.push({ label: this.customFieldOption.label, value: this.customFieldOption.value });
    this.customField.options = this.customFieldOptions;
    this.onChangeCustomProperties();

    this.customFieldOption = {};
  }

  addLoginError() {
    this.loginErrors.push(this.loginError);
    this.loginError = '';
  }

  addPasswordError() {
    this.passwordErrors.push(this.passwordError);
    this.passwordError = '';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  loginSubmit(formData: PoPageLogin) {
    if (this.exceededAttempts <= 0) {
      this.poDialog.alert({
        title: 'Authenticate',
        message: JSON.stringify(formData),
        componentsSize: this.componentsSize
      });
    }
  }

  onChangeCustomProperties() {
    this.customField = Object.assign({}, this.customField);
  }

  restore() {
    this.properties = [];
    this.background = '';
    this.componentsSize = 'medium';
    this.contactEmail = '';
    this.customField = { property: undefined };
    this.customFieldOption = { label: undefined, value: undefined };
    this.customFieldOptions = [];
    this.customLiterals = undefined;
    this.environment = '';
    this.exceededAttempts = 0;
    this.secondaryLogo = undefined;
    this.literals = '';
    this.login = '';
    this.loginPattern = '';
    this.loginError = '';
    this.loginErrors = [];
    this.logo = undefined;
    this.passwordError = '';
    this.passwordErrors = [];
    this.passwordPattern = '';
    this.passwordError = '';
    this.passwordErrors = [];
    this.productName = '';
    this.recovery = '';
    this.registerUrl = '';
    this.support = '';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-page-login-labs"),t(),o(23,"hr")),l&2&&(p(5),L("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),x("ngClass",_(4,Le,i.hideSampleCodeTabs)))},dependencies:[M,C,P,f,de],encapsulation:2})}return r})();function _e(r,ve){if(r&1){let s=O();n(0,"po-page-login",6),h("p-login-change",function(){d(s);let i=k();return u(i.loginChange())})("p-login-submit",function(i){d(s);let m=k();return u(m.checkLogin(i))})("p-password-change",function(){d(s);let i=k();return u(i.passwordChange())}),t()}if(r&2){let s=k();x("p-custom-field",s.customField)("p-exceeded-attempts-warning",s.exceededAttempts)("p-literals",s.literalsI18n)("p-loading",s.loading)("p-password-errors",s.passwordErrors)("p-login-errors",s.loginErrors)("p-recovery",s.passwordRecovery)}}function Me(r,ve){if(r&1&&o(0,"po-page-blocked-user",7),r&2){let s=k();x("p-params",s.params)}}var ce=(()=>{class r{poI18nService;poDialog;customField={property:"domain",placeholder:"Enter your domain"};attempts=3;exceededAttempts;literalsI18n;loading=!1;loginErrors=[];passwordErrors=[];params={attempts:3,hours:24};passwordRecovery={url:"https://po-sample-api.onrender.com/v1/users",type:re.All,contactMail:"support@mail.com"};showPageBlocked=!1;i18nSubscription;constructor(s,l){this.poI18nService=s,this.poDialog=l}ngOnDestroy(){this.i18nSubscription.unsubscribe()}ngOnInit(){this.i18nSubscription=this.poI18nService.getLiterals().subscribe(s=>{this.literalsI18n=s,this.exceededAttempts=0})}checkLogin(s){this.loading=!0,s.login==="devpo"&&s.password==="1986"?(this.passwordErrors=[],this.exceededAttempts=0,this.loginErrors=[],setTimeout(()=>{this.poDialog.alert({ok:()=>this.loading=!1,title:"Access released",message:"You are on vacation, take time to rest."})},3e3)):(this.loading=!1,this.generateAttempts(),this.passwordErrors=["Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente."],this.loginErrors=["Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente."])}passwordChange(){this.passwordErrors.length&&(this.passwordErrors=[])}loginChange(){this.loginErrors.length&&(this.loginErrors=[])}generateAttempts(){this.attempts>=1&&(this.attempts--,this.exceededAttempts=this.attempts),this.attempts===0&&(this.showPageBlocked=!0)}static \u0275fac=function(l){return new(l||r)(w(te),w(q))};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-human-resources"]],standalone:!1,decls:7,vars:2,consts:[[1,"po-row"],["p-label","Forgot your ID Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your ID Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your ID Sample SMS Code","p-value","999999",1,"po-md-2"],["p-hide-remember-user","","p-login-pattern","^[a-zA-Z]*$","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-password-pattern","^(\\d*)$","p-product-name","Human Resources","p-register-url","http://po.com","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-custom-field","p-exceeded-attempts-warning","p-literals","p-loading","p-password-errors","p-login-errors","p-recovery","p-login-change","p-login-submit","p-password-change",4,"ngIf"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-url-back","https://po-ui.io/documentation/po-page-login",3,"p-params",4,"ngIf"],["p-hide-remember-user","","p-login-pattern","^[a-zA-Z]*$","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-password-pattern","^(\\d*)$","p-product-name","Human Resources","p-register-url","http://po.com","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-change","p-login-submit","p-password-change","p-custom-field","p-exceeded-attempts-warning","p-literals","p-loading","p-password-errors","p-login-errors","p-recovery"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-url-back","https://po-ui.io/documentation/po-page-login",3,"p-params"]],template:function(l,i){l&1&&(n(0,"po-container")(1,"div",0),o(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),t()(),j(5,_e,1,7,"po-page-login",4)(6,Me,1,1,"po-page-blocked-user",5)),l&2&&(p(5),x("ngIf",!i.showPageBlocked),p(),x("ngIf",i.showPageBlocked))},dependencies:[H,B,V,le,F],encapsulation:2})}return r})();var Te=r=>({"docs-sample-code-tabs":r}),ge=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-human-resources-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Login - Human Resources"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html"),t(),n(13,"pre",7),e(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Forgot your ID Sample Phone" p-value="(99) 99999-9999"></po-info>
    <po-info class="po-md-2" p-label="Forgot your ID Sample Email" p-value="mail@mail.com"></po-info>
    <po-info class="po-md-2" p-label="Forgot your ID Sample SMS Code" p-value="999999"></po-info>
  </div>
</po-container>

<po-page-login
  *ngIf="!showPageBlocked"
  p-hide-remember-user
  p-login-pattern="^[a-zA-Z]*$"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-password-pattern="^(\\d*)$"
  p-product-name="Human Resources"
  p-register-url="http://po.com"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  [p-custom-field]="customField"
  [p-exceeded-attempts-warning]="exceededAttempts"
  [p-literals]="literalsI18n"
  [p-loading]="loading"
  [p-password-errors]="passwordErrors"
  [p-login-errors]="loginErrors"
  [p-recovery]="passwordRecovery"
  (p-login-change)="loginChange()"
  (p-login-submit)="checkLogin($event)"
  (p-password-change)="passwordChange()"
>
</po-page-login>

<po-page-blocked-user
  *ngIf="showPageBlocked"
  p-contact-email="user@po-ui.com.br"
  p-contact-phone="0800 709 8100"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-reason="exceededAttempts"
  p-url-back="https://po-ui.io/documentation/po-page-login"
  [p-params]="params"
>
</po-page-blocked-user>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { PoDialogService, PoI18nService } from '@po-ui/ng-components';
import {
  PoModalPasswordRecoveryType,
  PoPageBlockedUserReasonParams,
  PoPageLoginCustomField,
  PoPageLoginLiterals,
  PoPageLoginRecovery
} from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-login-human-resources',
  templateUrl: './sample-po-page-login-human-resources.component.html',
  standalone: false
})
export class SamplePoPageLoginHumanResourcesComponent implements OnDestroy, OnInit {
  customField: PoPageLoginCustomField = {
    property: 'domain',
    placeholder: 'Enter your domain'
  };

  attempts = 3;
  exceededAttempts: number;
  literalsI18n: PoPageLoginLiterals;
  loading: boolean = false;
  loginErrors = [];
  passwordErrors = [];
  params: PoPageBlockedUserReasonParams = { attempts: 3, hours: 24 };
  passwordRecovery: PoPageLoginRecovery = {
    url: 'https://po-sample-api.onrender.com/v1/users',
    type: PoModalPasswordRecoveryType.All,
    contactMail: 'support@mail.com'
  };
  showPageBlocked: boolean = false;

  private i18nSubscription: Subscription;

  constructor(
    private poI18nService: PoI18nService,
    private poDialog: PoDialogService
  ) {}

  ngOnDestroy() {
    this.i18nSubscription.unsubscribe();
  }

  ngOnInit() {
    this.i18nSubscription = this.poI18nService.getLiterals().subscribe(literals => {
      this.literalsI18n = literals;
      this.exceededAttempts = 0;
    });
  }

  checkLogin(formData) {
    this.loading = true;

    if (formData.login === 'devpo' && formData.password === '1986') {
      this.passwordErrors = [];
      this.exceededAttempts = 0;
      this.loginErrors = [];

      setTimeout(() => {
        this.poDialog.alert({
          ok: () => (this.loading = false),
          title: 'Access released',
          message: 'You are on vacation, take time to rest.'
        });
      }, 3000);
    } else {
      this.loading = false;
      this.generateAttempts();
      this.passwordErrors = ['Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente.'];
      this.loginErrors = ['Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente.'];
    }
  }

  passwordChange() {
    if (this.passwordErrors.length) {
      this.passwordErrors = [];
    }
  }

  loginChange() {
    if (this.loginErrors.length) {
      this.loginErrors = [];
    }
  }

  private generateAttempts() {
    if (this.attempts >= 1) {
      this.attempts--;
      this.exceededAttempts = this.attempts;
    }
    if (this.attempts === 0) {
      this.showPageBlocked = true;
    }
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts"),t(),n(23,"pre",9),e(24,`/**
 * Exemplo de configura\xE7\xE3o de um m\xF3dulo com i18n.
 */

// import { NgModule } from '@angular/core';

// import { PoModule } from '@po-ui/ng-components/po.module';
// import { PoI18nConfig, PoI18nModule } from '@po-ui/ng-components/services/po-i18n';

// import { SamplePoPageLoginHumanResourcesComponent } from './sample-po-page-login-human-resources.component';

// const humanResourcesEnLiterals = {
//   loginErrorPattern: 'Invalid ID',
//   loginPlaceholder: 'Insert your ID',
//   passwordErrorPattern: 'Invalid PIN',
//   passwordPlaceholder: 'Insert your PIN',
//   submitLabel: 'Access your account',
//   forgotPassword: 'Forgot your ID or PIN?',
//   highlightInfo: 'For us the future is now'
// };

// const humanResourcesEsLiterals = {
//   loginErrorPattern: 'ID invalido',
//   loginPlaceholder: 'Inserte su ID',
//   passwordErrorPattern: 'Contrase\xF1a incorrecta',
//   passwordPlaceholder: 'Inserte su contrase\xF1a',
//   submitLabel: 'Accede a su cuenta',
//   forgotPassword: '\xBFOlvid\xF3 su ID o contrase\xF1a?',
//   highlightInfo: 'Para nosotros el futuro es ahora'
// };

// const humanResourcesPtLiterals = {
// loginErrorPattern: 'ID inv\xE1lido',
//   loginPlaceholder: 'Insira seu ID',
//   passwordErrorPattern: 'Senha incorreta',
//   passwordPlaceholder: 'Insira sua senha',
//   submitLabel: 'Acesse a sua conta',
//   forgotPassword: 'Esqueceu seu ID ou sua senha?',
//   highlightInfo: 'Para n\xF3s o futuro \xE9 agora'
// };

// const poI18nConfig: PoI18nConfig = {
//   contexts: {
//     general: {
//       'en': humanResourcesEnLiterals,
//       'es': humanResourcesEsLiterals,
//       'pt': humanResourcesPtLiterals,
//     }
//   },
//   default: {
//    context: 'general',
//    cache: true
//   }
// };

// @NgModule({
//   imports: [
//     PoModule,
//     PoI18nModule.config(poI18nConfig)
//   ],
//   declarations: [
//     SamplePoPageLoginHumanResourcesComponent
//   ],
//   exports: [],
//   providers: []
// })
// export class SamplePoPageLoginHumanResourcesModule { }
`),t()()()()(),n(25,"div",10),o(26,"sample-po-page-login-human-resources"),t(),o(27,"hr")),l&2&&(p(5),L("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),x("ngClass",_(4,Te,i.hideSampleCodeTabs)))},dependencies:[M,C,P,f,ce],encapsulation:2})}return r})();var Ee=(()=>{class r{literals;japoneseLiterals={welcome:"\u3088\u3046\u3053\u305D",loginLabel:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",loginPlaceholder:"\u30A2\u30AF\u30BB\u30B9\u30E6\u30FC\u30B6\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",passwordErrorPattern:"\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981",passwordLabel:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",passwordPlaceholder:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",submitLabel:"\u30A2\u30AF\u30BB\u30B9\u30B7\u30B9\u30C6\u30E0",submittedLabel:"\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u4E2D ...",rememberUser:"\u81EA\u52D5\u7684\u306B\u30ED\u30B0\u30A4\u30F3",rememberUserHint:"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30B7\u30B9\u30C6\u30E0\u30E1\u30CB\u30E5\u30FC\u3067\u7121\u52B9\u306B\u3067\u304D\u307E\u3059",loginHint:`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044`};languages=[{language:"pt",description:"Portugu\xEAs"},{language:"jp",description:"\u65E5\u672C\u8A9E"}];changeLanguage(s){s?.language==="jp"?this.literals=N({},this.japoneseLiterals):this.literals={}}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-automatic-service"]],standalone:!1,decls:5,vars:2,consts:[[1,"po-row"],["p-label","Forgot your ID Sample Login","p-value","admin",1,"po-md-2"],["p-label","Forgot your ID Sample Password","p-value","admin",1,"po-md-2"],["p-authentication-url","https://po-sample-api.onrender.com/v1/users/authentication","p-blocked-url","/documentation/po-page-blocked-user","p-authentication-type","Bearer","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-language-change","p-languages","p-literals"]],template:function(l,i){l&1&&(n(0,"po-container")(1,"div",0),o(2,"po-info",1)(3,"po-info",2),t()(),n(4,"po-page-login",3),h("p-language-change",function(c){return i.changeLanguage(c)}),t()),l&2&&(p(4),x("p-languages",i.languages)("p-literals",i.literals))},dependencies:[B,V,F],encapsulation:2})}return r})();var De=r=>({"docs-sample-code-tabs":r}),Se=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-automatic-service-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Login - Automatic Service"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html"),t(),n(13,"pre",7),e(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Forgot your ID Sample Login" p-value="admin"></po-info>
    <po-info class="po-md-2" p-label="Forgot your ID Sample Password" p-value="admin"></po-info>
  </div>
</po-container>
<po-page-login
  p-authentication-url="https://po-sample-api.onrender.com/v1/users/authentication"
  p-blocked-url="/documentation/po-page-blocked-user"
  p-authentication-type="Bearer"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  [p-languages]="languages"
  [p-literals]="literals"
  (p-language-change)="changeLanguage($event)"
>
</po-page-login>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoLanguage } from '@po-ui/ng-components';
import { PoPageLoginLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-login-automatic-service',
  templateUrl: './sample-po-page-login-automatic-service.component.html',
  standalone: false
})
export class SamplePoPageLoginAutomaticServiceComponent {
  literals: PoPageLoginLiterals;
  japoneseLiterals: PoPageLoginLiterals = {
    welcome: '\u3088\u3046\u3053\u305D',
    loginLabel: '\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    loginPlaceholder: '\u30A2\u30AF\u30BB\u30B9\u30E6\u30FC\u30B6\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    passwordErrorPattern: '\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981',
    passwordLabel: '\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    passwordPlaceholder: '\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    submitLabel: '\u30A2\u30AF\u30BB\u30B9\u30B7\u30B9\u30C6\u30E0',
    submittedLabel: '\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u4E2D ...',
    rememberUser: '\u81EA\u52D5\u7684\u306B\u30ED\u30B0\u30A4\u30F3',
    rememberUserHint: '\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30B7\u30B9\u30C6\u30E0\u30E1\u30CB\u30E5\u30FC\u3067\u7121\u52B9\u306B\u3067\u304D\u307E\u3059',
    loginHint: \`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\`
  };

  languages: Array<PoLanguage> = [
    { language: 'pt', description: 'Portugu\xEAs' },
    { language: 'jp', description: '\u65E5\u672C\u8A9E' }
  ];

  changeLanguage(language: PoLanguage) {
    if (language?.language === 'jp') {
      this.literals = { ...this.japoneseLiterals };
    } else {
      this.literals = {};
    }
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-page-login-automatic-service"),t(),o(23,"hr")),l&2&&(p(5),L("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),x("ngClass",_(4,De,i.hideSampleCodeTabs)))},dependencies:[M,C,P,f,Ee],encapsulation:2})}return r})();var he=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-page-login-doc"]],standalone:!1,decls:1897,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageLoginAuthenticationType"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageLoginCustomField"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoLanguage>"],["pan","",1,"docs-api-property-type","PoPageLoginLiterals"],["pan","",1,"docs-api-property-type","string[]"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageLoginRecovery"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageLoginModule } from '@po-ui/ng-templates';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do template do po-page-login."),t()(),n(7,"h3",3),e(8,"Componente"),t(),n(9,"h4",4)(10,"code",5),e(11,"PoPageLoginComponent"),t()(),n(12,"div",2)(13,"p"),e(14,"O componente "),n(15,"code"),e(16,"po-page-login"),t(),e(17,` \xE9 utilizado como template para tela de login.
Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio.
Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque.`),t(),n(18,"p"),e(19,"A propriedade "),n(20,"code"),e(21,"p-authentication-url"),t(),e(22,` automatiza a rotina do componente e simplifica o processo para autentica\xE7\xE3o do usu\xE1rio, bastando
definir uma url para requisi\xE7\xE3o da autentica\xE7\xE3o. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o desenvolvimento
da aplica\xE7\xE3o no `),n(23,"em"),e(24,"client side"),t(),e(25,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de login de usu\xE1rio.
Seu detalhamento para uso pode ser visto logo abaixo em `),n(26,"em"),e(27,"propriedades"),t(),e(28,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),t(),n(29,"p"),e(30,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),n(31,"em"),e(32,"assets"),t(),e(33," no arquivo "),n(34,"strong"),e(35,"angular.json"),t(),e(36," da aplica\xE7\xE3o na seguinte ordem:"),t(),n(37,"pre")(38,"code"),e(39,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),t()()(),n(40,"div",6)(41,"h4",7),e(42,"Seletor"),t(),n(43,"pre",8),e(44,`<po-page-login
    p-authentication-type="PoPageLoginAuthenticationType"
    p-authentication-url="string"
    p-background="string"
    p-blocked-url="string"
    p-components-size="string"
    p-contact-email="string"
    p-custom-field="string | PoPageLoginCustomField"
    p-environment="string"
    p-exceeded-attempts-warning="number"
    p-hide-label-status="boolean"
    p-hide-password-peek="boolean"
    p-hide-remember-user="boolean"
    (p-language-change)="EventEmitter"
    p-languages="Array<PoLanguage>"
    p-literals="PoPageLoginLiterals"
    p-loading="boolean"
    p-login="string"
    (p-login-change)="EventEmitter"
    p-login-errors="string[]"
    p-login-pattern="string"
    (p-login-submit)="EventEmitter"
    p-logo="string"
    p-no-autocomplete-login="boolean"
    p-no-autocomplete-password="boolean"
    (p-password-change)="EventEmitter"
    p-password-errors="string[]"
    p-password-pattern="string"
    p-product-name="string"
    p-recovery="string | Function | PoPageLoginRecovery"
    p-register-url="string"
    p-secondary-logo="string"
    p-support="string | Function" >
</po-page-login>
`),t()(),n(45,"h4",9),e(46,"Propriedades"),t(),n(47,"table",10)(48,"tr",11)(49,"th",12),e(50,"Nome"),t(),n(51,"th",12),e(52,"Tipo"),t(),n(53,"th",12),e(54,"Padr\xE3o"),t(),n(55,"th",12),e(56,"Descri\xE7\xE3o"),t()(),n(57,"tr",13)(58,"td",14)(59,"div",15)(60,"span",16),e(61," p-authentication-type"),o(62,"br"),t()()(),n(63,"td",17)(64,"code",18),e(65,"PoPageLoginAuthenticationType"),t()(),n(66,"td",19)(67,"p")(68,"code"),e(69,"PoPageLoginAuthenticationType.Basic"),t()()(),n(70,"td",20)(71,"em")(72,"strong"),e(73,"(opcional)"),t()(),n(74,"p"),e(75,"Atributo que recebe o tipo de esquema da autentica\xE7\xE3o, sendo suportados apenas os valores "),n(76,"code"),e(77,"Basic"),t(),e(78," e "),n(79,"code"),e(80,"Bearer"),t(),e(81,"."),t(),n(82,"blockquote")(83,"p"),e(84,"Caso o tipo definido seja "),n(85,"code"),e(86,"Basic"),t(),e(87,", o componente far\xE1 uma requisi\xE7\xE3o "),n(88,"code"),e(89,"POST"),t(),e(90," contendo:"),t()(),n(91,"pre")(92,"code"),e(93,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),t()(),n(94,"blockquote")(95,"p"),e(96,"Caso o tipo definido seja "),n(97,"code"),e(98,"Bearer"),t(),e(99,", o componente far\xE1 uma requisi\xE7\xE3o "),n(100,"code"),e(101,"POST"),t(),e(102," contendo:"),t()(),n(103,"pre")(104,"code"),e(105,`body {
 login: login,
 password: base64(password),
 rememberUser: rememberUser
}
`),t()()()(),n(106,"tr",13)(107,"td",14)(108,"div",15)(109,"span",16),e(110," p-authentication-url"),o(111,"br"),t()()(),n(112,"td",17)(113,"code",21),e(114,"string"),t()(),n(115,"td",19),e(116,"-"),t(),n(117,"td",20)(118,"em")(119,"strong"),e(120,"(opcional)"),t()(),n(121,"p"),e(122,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido, o m\xE9todo "),n(123,"code"),e(124,"p-login-submit"),t(),e(125,` ser\xE1 ignorado e o
componente adquirir\xE1 automatiza\xE7\xE3o para o processo de autentica\xE7\xE3o.`),t(),n(126,"h3"),e(127,"Processos"),t(),n(128,"p"),e(129,"Ao digitar um valor v\xE1lido no campo de login/password e pressionar "),n(130,"strong"),e(131,"Enter"),t(),e(132,", o componente far\xE1 uma requisi\xE7\xE3o "),n(133,"code"),e(134,"POST"),t(),e(135,`
na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio:`),t(),n(136,"pre")(137,"code"),e(138,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),t()(),n(139,"p"),e(140,"Em caso de "),n(141,"strong"),e(142,"sucesso"),t(),e(143,", o objeto de retorno \xE9 armazenado no "),n(144,"code"),e(145,"sessionStorage"),t(),e(146,` e o usu\xE1rio \xE9 redirecionado para a p\xE1gina inicial da
aplica\xE7\xE3o `),n(147,"code"),e(148,"/"),t(),e(149,"."),t(),n(150,"pre")(151,"code"),e(152,`200:
{
  user: user
}
`),t()(),n(153,"p"),e(154,"Em caso de "),n(155,"strong"),e(156,"erro"),t(),e(157," na autentica\xE7\xE3o, espera-se o seguinte retorno:"),t(),n(158,"pre")(159,"code"),e(160,`400/401
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl
}
`),t()(),n(161,"blockquote")(162,"p"),e(163,"Pode-se atribuir uma quantidade m\xE1xima de tentativas restantes (maxAttemptsRemaining) para o atributo "),n(164,"code"),e(165,"p-exceeded-attempts-warning"),t(),e(166,`,
assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `),n(167,"code"),e(168,"p-login-errors"),t(),e(169,` e
`),n(170,"code"),e(171,"p-password-errors"),t(),e(172," conforme retorno abaixo:"),t()(),n(173,"pre")(174,"code"),e(175,`400
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl,
  maxAttemptsRemaining?: maxAttemptsRemaining,
  loginWarnings?: [loginWarnings],
  passwordWarnings?: [passwordWarnings]
}
`),t()(),n(176,"blockquote")(177,"p"),e(178,"Caso o valor atribu\xEDdo para "),n(179,"code"),e(180,"p-exceeded-attempts-warning"),t(),e(181,` seja igual a 0(zero), poder\xE1 ser passado um valor para o
atributo `),n(182,"code"),e(183,"p-blocked-url"),t(),e(184," e o usu\xE1rio ser\xE1 redirecionado para uma tela de bloqueio."),t()(),n(185,"p")(186,"em"),e(187,"Processo finalizado."),t()(),o(188,"hr"),n(189,"h4"),e(190,"Praticidade"),t(),n(191,"p"),e(192,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),n(193,"code"),e(194,"po-page-login"),t(),e(195,` no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template de tela de login pode ser gerado ao navegar para rota `),n(196,"code"),e(197,"/login"),t(),e(198,`, e tamb\xE9m como ele se comunica
com o servi\xE7o para efetua\xE7\xE3o do processo de autentica\xE7\xE3o do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),t(),n(199,"pre")(200,"code"),e(201,`import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';

...
const routes: Routes = [
  {
    path: 'login', component: PoPageLoginComponent, data: {
      serviceApi: 'https://po-ui.io/sample/api/users/authentication',
      environment: 'development',
      recovery: {
        url: 'https://po-ui.io/sample/api/users',
        type: PoModalPasswordRecoveryType.All,
        contactMail: 'dev.po@po-ui.com',
        phoneMask: '9-999-999-9999'
      },
      registerUrl: '/new-password',
      authenticationType: PoPageLoginAthenticationType.Basic
    }
  }
  ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`),t()(),n(202,"p"),e(203,"O metadado "),n(204,"code"),e(205,"serviceApi"),t(),e(206," deve ser a "),n(207,"strong"),e(208,"url"),t(),e(209," para requisi\xE7\xE3o dos recursos de autentica\xE7\xE3o, o "),n(210,"code"),e(211,"environment"),t(),e(212,` alimenta a propriedade
`),n(213,"code"),e(214,"p-environment"),t(),e(215,", "),n(216,"code"),e(217,"recovery"),t(),e(218," \xE9 a interface "),n(219,"code"),e(220,"PoPageLoginRecovery"),t(),e(221,` respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de
senha, `),n(222,"code"),e(223,"registerUrl"),t(),e(224," alimenta a propriedade "),n(225,"code"),e(226,"p-register-url"),t(),e(227," e "),n(228,"code"),e(229,"authenticationType"),t(),e(230," que define a propriedade "),n(231,"code"),e(232,"p-authentication-type"),t(),e(233,"."),t(),n(234,"blockquote")(235,"p"),e(236,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),t()()()(),n(237,"tr",13)(238,"td",14)(239,"div",15)(240,"span",16),e(241," p-background"),o(242,"br"),t()()(),n(243,"td",17)(244,"code",21),e(245,"string"),t()(),n(246,"td",19),e(247,"-"),t(),n(248,"td",20)(249,"em")(250,"strong"),e(251,"(opcional)"),t()(),n(252,"p"),e(253,"O "),n(254,"code"),e(255,"p-background"),t(),e(256,` permite inserir uma imagem de destaque ao lado direito do formul\xE1rio de login, caso a propriedade
n\xE3o seja preenchida o formul\xE1rio ser\xE1 centralizado no espa\xE7o dispon\xEDvel.`),t(),n(257,"p"),e(258,"A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo."),t(),n(259,"p"),e(260,`Al\xE9m da imagem, \xE9 poss\xEDvel adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
um valor para a literal `),n(261,"code"),e(262,"highlightInfo"),t(),e(263,"."),t(),n(264,"blockquote")(265,"p"),e(266,"Veja mais sobre as literais na propriedade "),n(267,"code"),e(268,"p-literals"),t(),e(269,"."),t()(),n(270,"p"),e(271,"Exemplos de valores v\xE1lidos:"),t(),n(272,"ul")(273,"li")(274,"strong"),e(275,"local"),t(),e(276,": "),n(277,"code"),e(278,"./assets/images/login-background.png"),t()(),n(279,"li")(280,"strong"),e(281,"url externa"),t(),e(282,": "),n(283,"code"),e(284,"https://po-ui.io/assets/images/login-background.png"),t()()(),n(285,"blockquote")(286,"p"),e(287,"Essa propriedade \xE9 ignorada para aplica\xE7\xF5es mobile."),t()()()(),n(288,"tr",13)(289,"td",14)(290,"div",15)(291,"span",16),e(292," p-blocked-url"),o(293,"br"),t()()(),n(294,"td",17)(295,"code",21),e(296,"string"),t()(),n(297,"td",19),e(298,"-"),t(),n(299,"td",20)(300,"em")(301,"strong"),e(302,"(opcional)"),t()(),n(303,"p"),e(304,"Caso o valor atribu\xEDdo para "),n(305,"code"),e(306,"p-exceeded-attempts-warning"),t(),e(307,` seja igual a 0(zero) e a aplica\xE7\xE3o tenha um link de bloqueio de usu\xE1rio,
informe uma url externa ou uma rota v\xE1lida, dessa forma em caso de bloqueio o usu\xE1rio ser\xE1 redirecionado.`),t()()(),n(308,"tr",13)(309,"td",14)(310,"div",15)(311,"span",16),e(312," p-components-size"),o(313,"br"),t()()(),n(314,"td",17)(315,"code",21),e(316,"string"),t()(),n(317,"td",19)(318,"p")(319,"code"),e(320,"medium"),t()()(),n(321,"td",20)(322,"em")(323,"strong"),e(324,"(opcional)"),t()(),n(325,"p"),e(326,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),n(327,"ul")(328,"li")(329,"code"),e(330,"small"),t(),e(331,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(332,"li")(333,"code"),e(334,"medium"),t(),e(335,": aplica a medida medium de cada componente."),t()(),n(336,"blockquote")(337,"p"),e(338,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(339,"code"),e(340,"medium"),t(),e(341,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(342,"a",22),e(343,"po-theme"),t(),e(344,"."),t()()()(),n(345,"tr",13)(346,"td",14)(347,"div",15)(348,"span",16),e(349," p-contact-email"),o(350,"br"),t()()(),n(351,"td",17)(352,"code",21),e(353,"string"),t()(),n(354,"td",19),e(355,"-"),t(),n(356,"td",20)(357,"em")(358,"strong"),e(359,"(opcional)"),t()(),n(360,"p"),e(361,"Personaliza o e-mail que \xE9 exibido na mensagem de dica de login padr\xE3o para contato de suporte."),t()()(),n(362,"tr",13)(363,"td",14)(364,"div",15)(365,"span",16),e(366," p-custom-field"),o(367,"br"),t()()(),n(368,"td",17)(369,"code",21),e(370,"string "),t(),n(371,"code",23),e(372," PoPageLoginCustomField"),t()(),n(373,"td",19),e(374,"-"),t(),n(375,"td",20)(376,"em")(377,"strong"),e(378,"(opcional)"),t()(),n(379,"p"),e(380,"Ao informar um valor do tipo "),n(381,"code"),e(382,"string"),t(),e(383,`, o mesmo ser\xE1 aplicado como a chave do campo customizado e utilizar\xE1
os valores padr\xF5es contidos na propriedade `),n(384,"code"),e(385,"literals"),t(),e(386," como "),n(387,"code"),e(388,"customFieldErrorPattern"),t(),e(389," e "),n(390,"code"),e(391,"customFieldPlaceholder"),t(),e(392,"."),t(),n(393,"p"),e(394,"Existe a possibilidade de informar um objeto que segue a defini\xE7\xE3o da interface "),n(395,"code"),e(396,"PoPageLoginCustomField"),t(),e(397,`, onde
atrav\xE9s dos par\xE2metros enviados pode gerar um `),n(398,"code"),e(399,"po-input"),t(),e(400,", "),n(401,"code"),e(402,"po-combo"),t(),e(403,` especificamente para servi\xE7os
ou `),n(404,"code"),e(405,"po-select"),t(),e(406," para valores fixos."),t(),n(407,"p"),e(408,"Abaixo seguem os exemplos de cada tipo de campo."),t(),n(409,"p")(410,"code"),e(411,"po-input"),t(),e(412,":"),t(),n(413,"pre")(414,"code"),e(415,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  pattern: '[a-z]',
  errorPattern: 'Invalid value'
}
`),t()(),n(416,"p")(417,"code"),e(418,"po-combo"),t(),e(419,":"),t(),n(420,"pre")(421,"code"),e(422,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  url: 'https://po-ui.io/sample/api/comboOption/domains',
  fieldValue: 'nickname'
}
`),t()(),n(423,"p")(424,"code"),e(425,"po-select"),t(),e(426,":"),t(),n(427,"pre")(428,"code"),e(429,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
}
`),t()(),n(430,"p"),e(431,`Caso o customField possua options, url e fieldValue preenchidos, ser\xE1 priorizado o po-select
utilizando o options.`),t()()(),n(432,"tr",13)(433,"td",14)(434,"div",15)(435,"span",16),e(436," p-environment"),o(437,"br"),t()()(),n(438,"td",17)(439,"code",21),e(440,"string"),t()(),n(441,"td",19),e(442,"-"),t(),n(443,"td",20)(444,"em")(445,"strong"),e(446,"(opcional)"),t()(),n(447,"p"),e(448,"Adiciona uma "),n(449,"code"),e(450,"tag"),t(),e(451," abaixo do t\xEDtulo que especifica o ambiente que o usu\xE1rio est\xE1 fazendo o login."),t(),n(452,"blockquote")(453,"p"),e(454,"Essa propriedade limita o texto em 40 caracteres."),t()()()(),n(455,"tr",13)(456,"td",14)(457,"div",15)(458,"span",16),e(459," p-exceeded-attempts-warning"),o(460,"br"),t()()(),n(461,"td",17)(462,"code",24),e(463,"number"),t()(),n(464,"td",19)(465,"p")(466,"code"),e(467,"0"),t()()(),n(468,"td",20)(469,"em")(470,"strong"),e(471,"(opcional)"),t()(),n(472,"p"),e(473,`Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
O aviso ser\xE1 exibido somente se a quantidade for maior que zero.`),t(),n(474,"blockquote")(475,"p"),e(476,"Caso tenha algum valor atribu\xEDdo para o atributo "),n(477,"code"),e(478,"p-authentication-url"),t(),e(479,` e o retorno da requisi\xE7\xE3o estiver atribuindo valor
para o `),n(480,"code"),e(481,"p-exceeded-attempts-warning"),t(),e(482,", o valor considerado ser\xE1 o do retorno da requisi\xE7\xE3o."),t()()()(),n(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),e(487," p-hide-label-status"),o(488,"br"),t()()(),n(489,"td",17)(490,"code",25),e(491,"boolean"),t()(),n(492,"td",19)(493,"p")(494,"code"),e(495,"false"),t()()(),n(496,"td",20)(497,"em")(498,"strong"),e(499,"(opcional)"),t()(),n(500,"p"),e(501,"Indica se o status do "),n(502,"code"),e(503,"model"),t(),e(504," do switch de lembrar o usu\xE1rio ser\xE1 escondido visualmente."),t(),n(505,"blockquote")(506,"p"),e(507,"Por padr\xE3o ser\xE1 atribu\xEDdo "),n(508,"code"),e(509,"false"),t(),e(510,"."),t()()()(),n(511,"tr",13)(512,"td",14)(513,"div",15)(514,"span",16),e(515," p-hide-password-peek"),o(516,"br"),t()()(),n(517,"td",17)(518,"code",25),e(519,"boolean"),t()(),n(520,"td",19)(521,"p")(522,"code"),e(523,"false"),t()()(),n(524,"td",20)(525,"em")(526,"strong"),e(527,"(opcional)"),t()(),n(528,"p"),e(529,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),t()()(),n(530,"tr",13)(531,"td",14)(532,"div",15)(533,"span",16),e(534," p-hide-remember-user"),o(535,"br"),t()()(),n(536,"td",17)(537,"code",25),e(538,"boolean"),t()(),n(539,"td",19)(540,"p")(541,"code"),e(542,"false"),t()()(),n(543,"td",20)(544,"em")(545,"strong"),e(546,"(opcional)"),t()(),n(547,"p"),e(548,'Esconde a fun\xE7\xE3o "Lembrar usu\xE1rio" do formul\xE1rio de login.'),t(),n(549,"p"),e(550,"Quando essa propriedade \xE9 setada com "),n(551,"code"),e(552,"true"),t(),e(553," a propriedade "),n(554,"code"),e(555,"rememberUser"),t(),e(556," enviada no evento "),n(557,"code"),e(558,"p-login-submit"),t(),e(559,` ser\xE1 sempre
`),n(560,"code"),e(561,"false"),t(),e(562,"."),t(),n(563,"blockquote")(564,"p"),e(565,"Veja a propriedade "),n(566,"code"),e(567,"p-literals"),t(),e(568," para customizar a literal "),n(569,"code"),e(570,"rememberUser"),t(),e(571,"."),t()()()(),n(572,"tr",13)(573,"td",14)(574,"div",26)(575,"span",27),e(576," (p-language-change)"),o(577,"br"),t()()(),n(578,"td",17)(579,"code",28),e(580,"EventEmitter"),t()(),n(581,"td",19),e(582,"-"),t(),n(583,"td",20)(584,"em")(585,"strong"),e(586,"(opcional)"),t()(),n(587,"p"),e(588,"Evento disparado quando o usu\xE1rio alterar o idioma da p\xE1gina."),t(),n(589,"p"),e(590,"Esse evento receber\xE1 como par\xE2metro um objeto do tipo "),n(591,"code"),e(592,"PoLanguage"),t(),e(593," com a linguagem selecionada."),t()()(),n(594,"tr",13)(595,"td",14)(596,"div",15)(597,"span",16),e(598," p-languages"),o(599,"br"),t()()(),n(600,"td",17)(601,"code",29),e(602,"Array<PoLanguage>"),t()(),n(603,"td",19),e(604,"-"),t(),n(605,"td",20)(606,"em")(607,"strong"),e(608,"(opcional)"),t()(),n(609,"p"),e(610,"Cole\xE7\xE3o de idiomas que o componente ir\xE1 tratar e disponibilizar\xE1 para o usu\xE1rio escolher."),t(),n(611,"p"),e(612,"Caso essa propriedade n\xE3o seja utilizada o componente mostrar\xE1 no combo os idiomas que ele suporta por padr\xE3o."),t(),n(613,"p"),e(614,"Caso a cole\xE7\xE3o tenha um idioma, a p\xE1gina estar\xE1 nesse idioma e n\xE3o mostrar\xE1 o combo."),t(),n(615,"p"),e(616,"Caso seja passado um array vazio, a p\xE1gina ter\xE1 o idioma configurado no "),n(617,"code"),e(618,"i18n"),t(),e(619," e n\xE3o mostrar\xE1 o combo de sele\xE7\xE3o."),t(),n(620,"blockquote")(621,"p"),e(622,"Se for passado um idioma n\xE3o suportado, ser\xE1 preciso passar as literais pela propriedade "),n(623,"code"),e(624,"p-literals"),t(),e(625,"."),t()()()(),n(626,"tr",13)(627,"td",14)(628,"div",15)(629,"span",16),e(630," p-literals"),o(631,"br"),t()()(),n(632,"td",17)(633,"code",30),e(634,"PoPageLoginLiterals"),t()(),n(635,"td",19),e(636,"-"),t(),n(637,"td",20)(638,"em")(639,"strong"),e(640,"(opcional)"),t()(),n(641,"p"),e(642,"Objeto com as literais usadas no "),n(643,"code"),e(644,"po-page-login"),t(),e(645,"."),t(),n(646,"p"),e(647,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),n(648,"pre")(649,"code"),e(650,`const customLiterals: PoPageLoginLiterals = {
  attempts: '{0} vez(es) ',
  createANewPasswordNow: 'Melhor criar uma senha nova agora! Voc\xEA vai poder entrar no sistema logo em seguida.',
  forgotPassword: 'Esqueceu sua senha?',
  forgotYourPassword: 'Esqueceu sua senha?',
  highlightInfo: '',
  iForgotMyPassword: 'Esqueci minha senha',
  ifYouTryHarder: 'Se tentar mais ',
  welcome: 'Boas-vindas',
  loginErrorPattern: 'Login obrigat\xF3rio',
  loginHint: 'Caso n\xE3o possua usu\xE1rio entre em contato com o suporte',
  loginLabel: 'Insira seu usu\xE1rio',
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordErrorPattern: 'Senha obrigat\xF3ria',
  passwordLabel: 'Insira sua senha',
  passwordPlaceholder: 'Insira sua senha de acesso',
  customFieldErrorPattern: 'Campo customizado inv\xE1lido',
  customFieldPlaceholder: 'Por favor insira um valor',
  registerUrl: 'Novo registro',
  rememberUser: 'Lembrar usu\xE1rio',
  rememberUserHint: 'Esta op\xE7\xE3o pode ser desabilitada nas configura\xE7\xF5es do sistema',
  submitLabel: 'Acessar sistema',
  submittedLabel: 'Carregando...',
  titlePopover: 'Opa!',
  yourUserWillBeBlocked: 'sem sucesso seu usu\xE1rio ser\xE1 bloqueado e voc\xEA fica 24 horas sem poder acessar :('
};
`),t()(),n(651,"p"),e(652,"Ou passando apenas as literais que deseja customizar:"),t(),n(653,"pre")(654,"code"),e(655,`const customLiterals: PoPageLoginLiterals = {
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordPlaceholder: 'Insira sua senha de acesso',
  submitLabel: 'Acessar sistema'
};
`),t()(),n(656,"p"),e(657,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),n(658,"pre")(659,"code"),e(660,`<po-page-login
  [p-literals]="customLiterals">
</po-page-login>
`),t()(),n(661,"blockquote")(662,"p"),e(663,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do browser (pt, en, es).
\xC9 tamb\xE9m poss\xEDvel alternar o objeto padr\xE3o de literais atrav\xE9s do seletor de idiomas localizado na parte inferior do template,
nesse caso, h\xE1 tamb\xE9m a op\xE7\xE3o do idioma russo.`),t()()()(),n(664,"tr",13)(665,"td",14)(666,"div",15)(667,"span",16),e(668," p-loading"),o(669,"br"),t()()(),n(670,"td",17)(671,"code",25),e(672,"boolean"),t()(),n(673,"td",19)(674,"p")(675,"code"),e(676,"false"),t()()(),n(677,"td",20)(678,"em")(679,"strong"),e(680,"(opcional)"),t()(),n(681,"p"),e(682,"Habilita um estado de carregamento ao bot\xE3o de "),n(683,"em"),e(684,"login"),t(),e(685,"."),t(),n(686,"blockquote")(687,"p"),e(688,"\xC9 necess\xE1rio atribuir "),n(689,"code"),e(690,"true"),t(),e(691," \xE0 esta propriedade na fun\xE7\xE3o definida em "),n(692,"code"),e(693,"p-login-submit"),t(),e(694,"."),t()()()(),n(695,"tr",13)(696,"td",14)(697,"div",15)(698,"span",16),e(699," p-login"),o(700,"br"),t()()(),n(701,"td",17)(702,"code",21),e(703,"string"),t()(),n(704,"td",19),e(705,"-"),t(),n(706,"td",20)(707,"em")(708,"strong"),e(709,"(opcional)"),t()(),n(710,"p"),e(711,"Valor do modelo do campo de login."),t()()(),n(712,"tr",13)(713,"td",14)(714,"div",26)(715,"span",27),e(716," (p-login-change)"),o(717,"br"),t()()(),n(718,"td",17)(719,"code",28),e(720,"EventEmitter"),t()(),n(721,"td",19),e(722,"-"),t(),n(723,"td",20)(724,"em")(725,"strong"),e(726,"(opcional)"),t()(),n(727,"p"),e(728,"Evento disparado quando o usu\xE1rio alterar o input do campo login."),t(),n(729,"p"),e(730,"Esse evento receber\xE1 como par\xE2metro uma vari\xE1vel do tipo "),n(731,"code"),e(732,"string"),t(),e(733," com o texto informado no campo."),t(),n(734,"blockquote")(735,"p"),e(736,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),n(737,"code"),e(738,"p-authentication-url"),t(),e(739,"."),t()()()(),n(740,"tr",13)(741,"td",14)(742,"div",15)(743,"span",16),e(744," p-login-errors"),o(745,"br"),t()()(),n(746,"td",17)(747,"code",31),e(748,"string[]"),t()(),n(749,"td",19),e(750,"-"),t(),n(751,"td",20)(752,"em")(753,"strong"),e(754,"(opcional)"),t()(),n(755,"p"),e(756,"Atributo que recebe uma lista de erros e exibe abaixo do campo de login."),t()()(),n(757,"tr",13)(758,"td",14)(759,"div",15)(760,"span",16),e(761," p-login-pattern"),o(762,"br"),t()()(),n(763,"td",17)(764,"code",21),e(765,"string"),t()(),n(766,"td",19),e(767,"-"),t(),n(768,"td",20)(769,"em")(770,"strong"),e(771,"(opcional)"),t()(),n(772,"p"),e(773,"Express\xE3o regular para validar o campo de login, caso a express\xE3o n\xE3o seja atentida, a literal "),n(774,"code"),e(775,"loginErrorPattern"),t(),e(776,`
ser\xE1 exibida.`),t(),n(777,"p"),e(778,"Exemplos de valores v\xE1lidos:"),t(),n(779,"ul")(780,"li"),e(781,"email: "),n(782,"code"),e(783,"[expressao-regular-email]"),t()(),n(784,"li"),e(785,"cpf: "),n(786,"code"),e(787,"[expressao-regular-cpf]"),t()()(),n(788,"blockquote")(789,"p"),e(790,"Veja a propriedade "),n(791,"code"),e(792,"p-literals"),t(),e(793," para customizar a literal "),n(794,"code"),e(795,"loginErrorPattern"),t(),e(796,"."),t()()()(),n(797,"tr",13)(798,"td",14)(799,"div",26)(800,"span",27),e(801," (p-login-submit)"),o(802,"br"),t()()(),n(803,"td",17)(804,"code",28),e(805,"EventEmitter"),t()(),n(806,"td",19),e(807,"-"),t(),n(808,"td",20)(809,"p"),e(810,"Evento disparado ao submeter o formul\xE1rio de login (apertando "),n(811,"code"),e(812,"Enter"),t(),e(813," dentro dos campos ou pressionando o bot\xE3o de confirma\xE7\xE3o)."),t(),n(814,"p"),e(815,"Esse evento receber\xE1 como par\xE2metro um objeto do tipo "),n(816,"code"),e(817,"PoPageLogin"),t(),e(818," com os dados informados no formul\xE1rio."),t(),n(819,"blockquote")(820,"p"),e(821,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),n(822,"code"),e(823,"p-url-recovery"),t(),e(824,"."),t()(),n(825,"blockquote")(826,"p"),e(827,"Para mais detalhes consulte a documenta\xE7\xE3o sobre a interface "),n(828,"code"),e(829,"PoPageLogin"),t(),e(830," mais abaixo."),t()()()(),n(831,"tr",13)(832,"td",14)(833,"div",15)(834,"span",16),e(835," p-logo"),o(836,"br"),t()()(),n(837,"td",17)(838,"code",21),e(839,"string"),t()(),n(840,"td",19),e(841,"-"),t(),n(842,"td",20)(843,"em")(844,"strong"),e(845,"(opcional)"),t()(),n(846,"p"),e(847,"Caminho para a logomarca localizada na parte superior."),t(),n(848,"blockquote")(849,"p"),e(850,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),t()()()(),n(851,"tr",13)(852,"td",14)(853,"div",15)(854,"span",16),e(855," p-no-autocomplete-login"),o(856,"br"),t()()(),n(857,"td",17)(858,"code",25),e(859,"boolean"),t()(),n(860,"td",19)(861,"p")(862,"code"),e(863,"true"),t()()(),n(864,"td",20)(865,"em")(866,"strong"),e(867,"(opcional)"),t()(),n(868,"p"),e(869,"Define a propriedade nativa "),n(870,"code"),e(871,"autocomplete"),t(),e(872," do campo como "),n(873,"code"),e(874,"off"),t(),e(875,"."),t()()(),n(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),e(880," p-no-autocomplete-password"),o(881,"br"),t()()(),n(882,"td",17)(883,"code",25),e(884,"boolean"),t()(),n(885,"td",19)(886,"p")(887,"code"),e(888,"true"),t()()(),n(889,"td",20)(890,"em")(891,"strong"),e(892,"(opcional)"),t()(),n(893,"p"),e(894,"Define a propriedade nativa "),n(895,"code"),e(896,"autocomplete"),t(),e(897," do campo como "),n(898,"code"),e(899,"off"),t(),e(900,"."),t(),n(901,"blockquote")(902,"p"),e(903,"No componente "),n(904,"code"),e(905,"po-password"),t(),e(906," ser\xE1 definido como "),n(907,"code"),e(908,"new-password"),t(),e(909,"."),t()()()(),n(910,"tr",13)(911,"td",14)(912,"div",26)(913,"span",27),e(914," (p-password-change)"),o(915,"br"),t()()(),n(916,"td",17)(917,"code",28),e(918,"EventEmitter"),t()(),n(919,"td",19),e(920,"-"),t(),n(921,"td",20)(922,"em")(923,"strong"),e(924,"(opcional)"),t()(),n(925,"p"),e(926,"Evento disparado quando o usu\xE1rio alterar o input do campo password."),t(),n(927,"p"),e(928,"Esse evento receber\xE1 como par\xE2metro uma vari\xE1vel do tipo "),n(929,"code"),e(930,"string"),t(),e(931," com o texto informado no campo."),t(),n(932,"blockquote")(933,"p"),e(934,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),n(935,"code"),e(936,"p-authentication-url"),t(),e(937,"."),t()()()(),n(938,"tr",13)(939,"td",14)(940,"div",15)(941,"span",16),e(942," p-password-errors"),o(943,"br"),t()()(),n(944,"td",17)(945,"code",31),e(946,"string[]"),t()(),n(947,"td",19),e(948,"-"),t(),n(949,"td",20)(950,"em")(951,"strong"),e(952,"(opcional)"),t()(),n(953,"p"),e(954,"Atributo que recebe uma lista de erros e exibe abaixo do campo de password."),t()()(),n(955,"tr",13)(956,"td",14)(957,"div",15)(958,"span",16),e(959," p-password-pattern"),o(960,"br"),t()()(),n(961,"td",17)(962,"code",21),e(963,"string"),t()(),n(964,"td",19),e(965,"-"),t(),n(966,"td",20)(967,"em")(968,"strong"),e(969,"(opcional)"),t()(),n(970,"p"),e(971,"Express\xE3o regular para validar o campo de password, caso a express\xE3o n\xE3o seja atentida, a literal "),n(972,"code"),e(973,"passwordErrorPattern"),t(),e(974,`
ser\xE1 exibida.`),t(),n(975,"p"),e(976,"Exemplos de valores v\xE1lidos:"),t(),n(977,"ul")(978,"li"),e(979,"Apenas n\xFAmeros: "),n(980,"code"),e(981,"\\d?"),t()(),n(982,"li"),e(983,"Letras m\xEDnusculas: "),n(984,"code"),e(985,"\\z?"),t()()(),n(986,"blockquote")(987,"p"),e(988,"Veja a propriedade "),n(989,"code"),e(990,"p-literals"),t(),e(991," para customizar a literal "),n(992,"code"),e(993,"passwordErrorPattern"),t(),e(994,"."),t()()()(),n(995,"tr",13)(996,"td",14)(997,"div",15)(998,"span",16),e(999," p-product-name"),o(1e3,"br"),t()()(),n(1001,"td",17)(1002,"code",21),e(1003,"string"),t()(),n(1004,"td",19),e(1005,"-"),t(),n(1006,"td",20)(1007,"em")(1008,"strong"),e(1009,"(opcional)"),t()(),n(1010,"p"),e(1011,"Texto customizado que fica entre a logo e a mensagem de boas-vindas."),t()()(),n(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),e(1016," p-recovery"),o(1017,"br"),t()()(),n(1018,"td",17)(1019,"code",21),e(1020,"string "),t(),n(1021,"code",32),e(1022," Function "),t(),n(1023,"code",33),e(1024," PoPageLoginRecovery"),t()(),n(1025,"td",19),e(1026,"-"),t(),n(1027,"td",20)(1028,"em")(1029,"strong"),e(1030,"(opcional)"),t()(),n(1031,"p"),e(1032,"Exibe um link abaixo do formul\xE1rio de login para que os usu\xE1rios da aplica\xE7\xE3o fa\xE7am a recupera\xE7\xE3o dos dados de autentica\xE7\xE3o."),t(),n(1033,"p"),e(1034,"A propriedade aceita os seguintes tipos:"),t(),n(1035,"ul")(1036,"li")(1037,"p")(1038,"strong"),e(1039,"String"),t(),e(1040,": informe uma url externa ou uma rota v\xE1lida;"),t()(),n(1041,"li")(1042,"p")(1043,"strong"),e(1044,"Function"),t(),e(1045,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),t(),n(1046,"pre")(1047,"code"),e(1048,`<po-page-login>
  [recovery]="this.myRecovery.bind(this)">
</po-page-login>
`),t()()(),n(1049,"li")(1050,"p")(1051,"strong"),e(1052,"PoPageLoginRecovery"),t(),e(1053,": cria-se v\xEDnculo autom\xE1tico com o template "),n(1054,"strong"),e(1055,"po-modal-password-recovery"),t(),e(1056,`.
O objeto deve conter a `),n(1057,"strong"),e(1058,"url"),t(),e(1059," para requisi\xE7\xE3o dos recursos e pode-se definir o "),n(1060,"strong"),e(1061,"tipo"),t(),e(1062,` de modal para recupera\xE7\xE3o de senha,
`),n(1063,"strong"),e(1064,"email"),t(),e(1065," para contato e "),n(1066,"strong"),e(1067,"m\xE1scara"),t(),e(1068," do campo de telefone."),t()()()()(),n(1069,"tr",13)(1070,"td",14)(1071,"div",15)(1072,"span",16),e(1073," p-register-url"),o(1074,"br"),t()()(),n(1075,"td",17)(1076,"code",21),e(1077,"string"),t()(),n(1078,"td",19),e(1079,"-"),t(),n(1080,"td",20)(1081,"em")(1082,"strong"),e(1083,"(opcional)"),t()(),n(1084,"p"),e(1085,`Caso a aplica\xE7\xE3o tenha um link para novos cadastros, informe uma url externa ou uma rota v\xE1lida, dessa
forma ser\xE1 exibido um link abaixo do formul\xE1rio de login para os usu\xE1rios da aplica\xE7\xE3o.`),t(),n(1086,"p"),e(1087,"Exemplos de valores v\xE1lidos:"),t(),n(1088,"ul")(1089,"li")(1090,"strong"),e(1091,"local"),t(),e(1092,": "),n(1093,"code"),e(1094,"/home"),t()(),n(1095,"li")(1096,"strong"),e(1097,"url externa"),t(),e(1098,": "),n(1099,"code"),e(1100,"https://po-ui.io"),t()()(),n(1101,"blockquote")(1102,"p"),e(1103,"Veja a propriedade "),n(1104,"code"),e(1105,"p-literals"),t(),e(1106," para customizar a literal "),n(1107,"code"),e(1108,"registerUrl"),t(),e(1109,"."),t()()()(),n(1110,"tr",13)(1111,"td",14)(1112,"div",15)(1113,"span",16),e(1114," p-secondary-logo"),o(1115,"br"),t()()(),n(1116,"td",17)(1117,"code",21),e(1118,"string"),t()(),n(1119,"td",19),e(1120,"-"),t(),n(1121,"td",20)(1122,"em")(1123,"strong"),e(1124,"(opcional)"),t()(),n(1125,"p"),e(1126,"Caminho para a logomarca localizada no rodap\xE9."),t()()(),n(1127,"tr",13)(1128,"td",14)(1129,"div",15)(1130,"span",16),e(1131," p-support"),o(1132,"br"),t()()(),n(1133,"td",17)(1134,"code",21),e(1135,"string "),t(),n(1136,"code",32),e(1137," Function"),t()(),n(1138,"td",19),e(1139,"-"),t(),n(1140,"td",20)(1141,"em")(1142,"strong"),e(1143,"(opcional)"),t()(),n(1144,"p"),e(1145,"Exibe um bot\xE3o para suporte."),t(),n(1146,"p"),e(1147,"A propriedade aceita os seguintes tipos:"),t(),n(1148,"ul")(1149,"li")(1150,"strong"),e(1151,"String"),t(),e(1152,": URL externa ou uma rota v\xE1lida;"),t(),n(1153,"li")(1154,"strong"),e(1155,"Function"),t(),e(1156,": Fun\xE7\xE3o a ser disparada ao clicar no bot\xE3o de suporte;"),n(1157,"pre")(1158,"code"),e(1159,`<po-page-login>
  [p-support]="this.mySupport.bind(this)">
</po-page-login>
`),t()()()()()()(),n(1160,"h3"),e(1161,"Interfaces"),t(),n(1162,"h4",34)(1163,"code",5),e(1164,"PoPageLoginCustomField"),t()(),n(1165,"div",2)(1166,"p"),e(1167,"Interface com a defini\xE7\xE3o do Custom Field, podendo ser utilizado para informar um campo customizado no componente "),n(1168,"code"),e(1169,"po-page-login"),t(),e(1170,"."),t()(),n(1171,"h4",9),e(1172,"Propriedades"),t(),n(1173,"table",10)(1174,"tr",11)(1175,"th",12),e(1176,"Nome"),t(),n(1177,"th",12),e(1178,"Tipo"),t(),n(1179,"th",12),e(1180,"Descri\xE7\xE3o"),t()(),n(1181,"tr",13)(1182,"td",14)(1183,"div",15)(1184,"span",16),e(1185," errorPattern"),o(1186,"br"),t()()(),n(1187,"td",17)(1188,"code",21),e(1189,"string"),t()(),n(1190,"td",20)(1191,"em")(1192,"strong"),e(1193,"(opcional)"),t()(),n(1194,"p"),e(1195,"Mensagem que ser\xE1 exibida quando a express\xE3o regular informada na propriedade "),n(1196,"code"),e(1197,"pattern"),t(),e(1198," n\xE3o for v\xE1lida."),t()()(),n(1199,"tr",13)(1200,"td",14)(1201,"div",15)(1202,"span",16),e(1203," fieldValue"),o(1204,"br"),t()()(),n(1205,"td",17)(1206,"code",21),e(1207,"string"),t()(),n(1208,"td",20)(1209,"em")(1210,"strong"),e(1211,"(opcional)"),t()(),n(1212,"p"),e(1213,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na
lista do componente `),n(1214,"code"),e(1215,"po-combo"),t(),e(1216,", esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),t()()(),n(1217,"tr",13)(1218,"td",14)(1219,"div",15)(1220,"span",16),e(1221," options"),o(1222,"br"),t()()(),n(1223,"td",17)(1224,"code",35),e(1225,"Array<PoSelectOption>"),t()(),n(1226,"td",20)(1227,"em")(1228,"strong"),e(1229,"(opcional)"),t()(),n(1230,"p"),e(1231,"Lista de op\xE7\xF5es de um "),n(1232,"code"),e(1233,"po-select"),t(),e(1234,"."),t()()(),n(1235,"tr",13)(1236,"td",14)(1237,"div",15)(1238,"span",16),e(1239," pattern"),o(1240,"br"),t()()(),n(1241,"td",17)(1242,"code",21),e(1243,"string"),t()(),n(1244,"td",20)(1245,"em")(1246,"strong"),e(1247,"(opcional)"),t()(),n(1248,"p"),e(1249,`Express\xE3o regular para validar o campo customizado, caso a express\xE3o n\xE3o seja atendida a literal informada na
propriedade `),n(1250,"code"),e(1251,"errorPattern"),t(),e(1252," ser\xE1 exibida."),t()()(),n(1253,"tr",13)(1254,"td",14)(1255,"div",15)(1256,"span",16),e(1257," placeholder"),o(1258,"br"),t()()(),n(1259,"td",17)(1260,"code",21),e(1261,"string"),t()(),n(1262,"td",20)(1263,"em")(1264,"strong"),e(1265,"(opcional)"),t()(),n(1266,"p"),e(1267,"Mensagem que ser\xE1 exibida enquanto o campo customizado n\xE3o estiver preenchido."),t()()(),n(1268,"tr",13)(1269,"td",14)(1270,"div",15)(1271,"span",16),e(1272," property"),o(1273,"br"),t()()(),n(1274,"td",17)(1275,"code",21),e(1276,"string"),t()(),n(1277,"td",20)(1278,"p"),e(1279,"Nome da propriedade que ser\xE1 utilizado no campo customizado."),t()()(),n(1280,"tr",13)(1281,"td",14)(1282,"div",15)(1283,"span",16),e(1284," url"),o(1285,"br"),t()()(),n(1286,"td",17)(1287,"code",21),e(1288,"string"),t()(),n(1289,"td",20)(1290,"em")(1291,"strong"),e(1292,"(opcional)"),t()(),n(1293,"p"),e(1294,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da
lista de itens do componente `),n(1295,"code"),e(1296,"po-combo"),t(),e(1297,"."),t()()(),n(1298,"tr",13)(1299,"td",14)(1300,"div",15)(1301,"span",16),e(1302," value"),o(1303,"br"),t()()(),n(1304,"td",17)(1305,"code",21),e(1306,"string "),t(),n(1307,"code",24),e(1308," number"),t()(),n(1309,"td",20)(1310,"em")(1311,"strong"),e(1312,"(opcional)"),t()(),n(1313,"p"),e(1314,"Valor do campo customizado."),t()()()(),n(1315,"h4",34)(1316,"code",5),e(1317,"PoPageLoginLiterals"),t()(),n(1318,"div",2)(1319,"p"),e(1320,"Interface para defini\xE7\xE3o das literais usadas no "),n(1321,"code"),e(1322,"po-page-login"),t(),e(1323,"."),t()(),n(1324,"h4",9),e(1325,"Propriedades"),t(),n(1326,"table",10)(1327,"tr",11)(1328,"th",12),e(1329,"Nome"),t(),n(1330,"th",12),e(1331,"Tipo"),t(),n(1332,"th",12),e(1333,"Descri\xE7\xE3o"),t()(),n(1334,"tr",13)(1335,"td",14)(1336,"div",15)(1337,"span",16),e(1338," attempts"),o(1339,"br"),t()()(),n(1340,"td",17)(1341,"code",21),e(1342,"string"),t()(),n(1343,"td",20)(1344,"em")(1345,"strong"),e(1346,"(opcional)"),t()(),n(1347,"p"),e(1348,"Texto que informa a quantidade de tentativas restantes no popover de aviso de bloqueio."),t()()(),n(1349,"tr",13)(1350,"td",14)(1351,"div",15)(1352,"span",16),e(1353," createANewPasswordNow"),o(1354,"br"),t()()(),n(1355,"td",17)(1356,"code",21),e(1357,"string"),t()(),n(1358,"td",20)(1359,"em")(1360,"strong"),e(1361,"(opcional)"),t()(),n(1362,"p"),e(1363,"Texto exibido no popover de aviso de bloqueio, que orienta o usu\xE1rio, caso ele tenha esquecido a senha, a criar uma nova senha."),t()()(),n(1364,"tr",13)(1365,"td",14)(1366,"div",15)(1367,"span",16),e(1368," customFieldErrorPattern"),o(1369,"br"),t()()(),n(1370,"td",17)(1371,"code",21),e(1372,"string"),t()(),n(1373,"td",20)(1374,"em")(1375,"strong"),e(1376,"(opcional)"),t()(),n(1377,"p"),e(1378,"Mensagem de erro apresentada quando o campo customizado est\xE1 inv\xE1lido"),t()()(),n(1379,"tr",13)(1380,"td",14)(1381,"div",15)(1382,"span",16),e(1383," customFieldPlaceholder"),o(1384,"br"),t()()(),n(1385,"td",17)(1386,"code",21),e(1387,"string"),t()(),n(1388,"td",20)(1389,"em")(1390,"strong"),e(1391,"(opcional)"),t()(),n(1392,"p"),e(1393,"Placeholder para o campo customizado."),t()()(),n(1394,"tr",13)(1395,"td",14)(1396,"div",15)(1397,"span",16),e(1398," forgotPassword"),o(1399,"br"),t()()(),n(1400,"td",17)(1401,"code",21),e(1402,"string"),t()(),n(1403,"td",20)(1404,"em")(1405,"strong"),e(1406,"(opcional)"),t()(),n(1407,"p"),e(1408,"Texto de ajuda para recupera\xE7\xE3o dos dados de acesso."),t()()(),n(1409,"tr",13)(1410,"td",14)(1411,"div",15)(1412,"span",16),e(1413," forgotYourPassword"),o(1414,"br"),t()()(),n(1415,"td",17)(1416,"code",21),e(1417,"string"),t()(),n(1418,"td",20)(1419,"em")(1420,"strong"),e(1421,"(opcional)"),t()(),n(1422,"p"),e(1423,"Texto que questiona o esquecimento da senha no popover de aviso de bloqueio."),t()()(),n(1424,"tr",13)(1425,"td",14)(1426,"div",15)(1427,"span",16),e(1428," highlightInfo"),o(1429,"br"),t()()(),n(1430,"td",17)(1431,"code",21),e(1432,"string"),t()(),n(1433,"td",20)(1434,"em")(1435,"strong"),e(1436,"(opcional)"),t()(),n(1437,"p"),e(1438,"Texto de destaque sobreposto \xE0 imagem de destaque. Essa op\xE7\xE3o \xE9 utilizada em conjunto com o atributo "),n(1439,"code"),e(1440,"p-background"),t(),e(1441,"."),t()()(),n(1442,"tr",13)(1443,"td",14)(1444,"div",15)(1445,"span",16),e(1446," iForgotMyPassword"),o(1447,"br"),t()()(),n(1448,"td",17)(1449,"code",21),e(1450,"string"),t()(),n(1451,"td",20)(1452,"em")(1453,"strong"),e(1454,"(opcional)"),t()(),n(1455,"p"),e(1456,"Texto do link de 'esqueci minha senha' exibido no popover de aviso de bloqueio."),t()()(),n(1457,"tr",13)(1458,"td",14)(1459,"div",15)(1460,"span",16),e(1461," ifYouTryHarder"),o(1462,"br"),t()()(),n(1463,"td",17)(1464,"code",21),e(1465,"string"),t()(),n(1466,"td",20)(1467,"em")(1468,"strong"),e(1469,"(opcional)"),t()(),n(1470,"p"),e(1471,"Texto de aviso de tentativas exibido no popover de aviso de bloqueio."),t()()(),n(1472,"tr",13)(1473,"td",14)(1474,"div",15)(1475,"span",16),e(1476," loginErrorPattern"),o(1477,"br"),t()()(),n(1478,"td",17)(1479,"code",21),e(1480,"string"),t()(),n(1481,"td",20)(1482,"em")(1483,"strong"),e(1484,"(opcional)"),t()(),n(1485,"p"),e(1486,"Mensagem de erro apresentada quando o campo de login est\xE1 inv\xE1lido."),t()()(),n(1487,"tr",13)(1488,"td",14)(1489,"div",15)(1490,"span",16),e(1491," loginHint"),o(1492,"br"),t()()(),n(1493,"td",17)(1494,"code",21),e(1495,"string"),t()(),n(1496,"td",20)(1497,"em")(1498,"strong"),e(1499,"(opcional)"),t()(),n(1500,"p"),e(1501,"Texto exibido como dica para o campo de login."),t()()(),n(1502,"tr",13)(1503,"td",14)(1504,"div",15)(1505,"span",16),e(1506," loginLabel"),o(1507,"br"),t()()(),n(1508,"td",17)(1509,"code",21),e(1510,"string"),t()(),n(1511,"td",20)(1512,"em")(1513,"strong"),e(1514,"(opcional)"),t()(),n(1515,"p"),e(1516,"Texto exibido como label do campo de login."),t()()(),n(1517,"tr",13)(1518,"td",14)(1519,"div",15)(1520,"span",16),e(1521," loginPlaceholder"),o(1522,"br"),t()()(),n(1523,"td",17)(1524,"code",21),e(1525,"string"),t()(),n(1526,"td",20)(1527,"em")(1528,"strong"),e(1529,"(opcional)"),t()(),n(1530,"p"),e(1531,"Placeholder do campo de login."),t()()(),n(1532,"tr",13)(1533,"td",14)(1534,"div",15)(1535,"span",16),e(1536," passwordErrorPattern"),o(1537,"br"),t()()(),n(1538,"td",17)(1539,"code",21),e(1540,"string"),t()(),n(1541,"td",20)(1542,"em")(1543,"strong"),e(1544,"(opcional)"),t()(),n(1545,"p"),e(1546,"Mensagem de erro apresentada quando o campo de password est\xE1 inv\xE1lido."),t()()(),n(1547,"tr",13)(1548,"td",14)(1549,"div",15)(1550,"span",16),e(1551," passwordLabel"),o(1552,"br"),t()()(),n(1553,"td",17)(1554,"code",21),e(1555,"string"),t()(),n(1556,"td",20)(1557,"em")(1558,"strong"),e(1559,"(opcional)"),t()(),n(1560,"p"),e(1561,"Texto exibido como label do campo de password."),t()()(),n(1562,"tr",13)(1563,"td",14)(1564,"div",15)(1565,"span",16),e(1566," passwordPlaceholder"),o(1567,"br"),t()()(),n(1568,"td",17)(1569,"code",21),e(1570,"string"),t()(),n(1571,"td",20)(1572,"em")(1573,"strong"),e(1574,"(opcional)"),t()(),n(1575,"p"),e(1576,"Placeholder do campo de password."),t()()(),n(1577,"tr",13)(1578,"td",14)(1579,"div",15)(1580,"span",16),e(1581," registerUrl"),o(1582,"br"),t()()(),n(1583,"td",17)(1584,"code",21),e(1585,"string"),t()(),n(1586,"td",20)(1587,"em")(1588,"strong"),e(1589,"(opcional)"),t()(),n(1590,"p"),e(1591,"Texto exibido no link de novo cadastro."),t()()(),n(1592,"tr",13)(1593,"td",14)(1594,"div",15)(1595,"span",16),e(1596," rememberUser"),o(1597,"br"),t()()(),n(1598,"td",17)(1599,"code",21),e(1600,"string"),t()(),n(1601,"td",20)(1602,"em")(1603,"strong"),e(1604,"(opcional)"),t()(),n(1605,"p"),e(1606,'Texto exibido na fun\xE7\xE3o "Lembrar usu\xE1rio".'),t()()(),n(1607,"tr",13)(1608,"td",14)(1609,"div",15)(1610,"span",16),e(1611," rememberUserHint"),o(1612,"br"),t()()(),n(1613,"td",17)(1614,"code",21),e(1615,"string"),t()(),n(1616,"td",20)(1617,"em")(1618,"strong"),e(1619,"(opcional)"),t()(),n(1620,"p"),e(1621,'Texto exibido como dica da fun\xE7\xE3o "Lembrar usu\xE1rio"'),t()()(),n(1622,"tr",13)(1623,"td",14)(1624,"div",15)(1625,"span",16),e(1626," submitLabel"),o(1627,"br"),t()()(),n(1628,"td",17)(1629,"code",21),e(1630,"string"),t()(),n(1631,"td",20)(1632,"em")(1633,"strong"),e(1634,"(opcional)"),t()(),n(1635,"p"),e(1636,"Texto exibido no bot\xE3o de confirma\xE7\xE3o da p\xE1gina de login."),t()()(),n(1637,"tr",13)(1638,"td",14)(1639,"div",15)(1640,"span",16),e(1641," submittedLabel"),o(1642,"br"),t()()(),n(1643,"td",17)(1644,"code",21),e(1645,"string"),t()(),n(1646,"td",20)(1647,"em")(1648,"strong"),e(1649,"(opcional)"),t()(),n(1650,"p"),e(1651,"Texto exibido no bot\xE3o de confirma\xE7\xE3o da p\xE1gina de login quando estiver em estado de carregamento."),t()()(),n(1652,"tr",13)(1653,"td",14)(1654,"div",15)(1655,"span",16),e(1656," support"),o(1657,"br"),t()()(),n(1658,"td",17)(1659,"code",21),e(1660,"string"),t()(),n(1661,"td",20)(1662,"em")(1663,"strong"),e(1664,"(opcional)"),t()(),n(1665,"p"),e(1666,"Label do bot\xE3o de suporte."),t()()(),n(1667,"tr",13)(1668,"td",14)(1669,"div",15)(1670,"span",16),e(1671," titlePopover"),o(1672,"br"),t()()(),n(1673,"td",17)(1674,"code",21),e(1675,"string"),t()(),n(1676,"td",20)(1677,"em")(1678,"strong"),e(1679,"(opcional)"),t()(),n(1680,"p"),e(1681,"T\xEDtulo do popover para aviso de bloqueio."),t()()(),n(1682,"tr",13)(1683,"td",14)(1684,"div",15)(1685,"span",16),e(1686," welcome"),o(1687,"br"),t()()(),n(1688,"td",17)(1689,"code",21),e(1690,"string"),t()(),n(1691,"td",20)(1692,"em")(1693,"strong"),e(1694,"(opcional)"),t()(),n(1695,"p"),e(1696,'Mensagem de "Boas-vindas" para o usu\xE1rio que aparece acima dos campos de entrada.'),t()()(),n(1697,"tr",13)(1698,"td",14)(1699,"div",15)(1700,"span",16),e(1701," yourUserWillBeBlocked"),o(1702,"br"),t()()(),n(1703,"td",17)(1704,"code",21),e(1705,"string"),t()(),n(1706,"td",20)(1707,"em")(1708,"strong"),e(1709,"(opcional)"),t()(),n(1710,"p"),e(1711,"Texto que informa ao usu\xE1rio que o mesmo ser\xE1 bloqueado e por quanto tempo no popover de aviso de bloqueio."),t()()()(),n(1712,"h4",34)(1713,"code",5),e(1714,"PoPageLoginRecovery"),t()(),n(1715,"div",2)(1716,"p"),e(1717,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),n(1718,"code"),e(1719,"po-modal-password-recovery"),t(),e(1720,"."),t()(),n(1721,"h4",9),e(1722,"Propriedades"),t(),n(1723,"table",10)(1724,"tr",11)(1725,"th",12),e(1726,"Nome"),t(),n(1727,"th",12),e(1728,"Tipo"),t(),n(1729,"th",12),e(1730,"Descri\xE7\xE3o"),t()(),n(1731,"tr",13)(1732,"td",14)(1733,"div",15)(1734,"span",16),e(1735," contactMail"),o(1736,"br"),t()()(),n(1737,"td",17)(1738,"code",21),e(1739,"string"),t()(),n(1740,"td",20)(1741,"em")(1742,"strong"),e(1743,"(opcional)"),t()(),n(1744,"p"),e(1745,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),t()()(),n(1746,"tr",13)(1747,"td",14)(1748,"div",15)(1749,"span",16),e(1750," phoneMask"),o(1751,"br"),t()()(),n(1752,"td",17)(1753,"code",21),e(1754,"string"),t()(),n(1755,"td",20)(1756,"em")(1757,"strong"),e(1758,"(opcional)"),t()(),n(1759,"p"),e(1760,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),t()()(),n(1761,"tr",13)(1762,"td",14)(1763,"div",15)(1764,"span",16),e(1765," type"),o(1766,"br"),t()()(),n(1767,"td",17)(1768,"code",36),e(1769,"PoModalPasswordRecoveryType"),t()(),n(1770,"td",20)(1771,"em")(1772,"strong"),e(1773,"(opcional)"),t()(),n(1774,"p"),e(1775,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),n(1776,"a",37),e(1777,"PoModalPasswordRecoveryType"),t(),e(1778,"."),t(),n(1779,"blockquote")(1780,"p"),e(1781,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),n(1782,"code"),e(1783,"PoModalPasswordRecoveryType.Email"),t(),e(1784,"."),t()()()(),n(1785,"tr",13)(1786,"td",14)(1787,"div",15)(1788,"span",16),e(1789," url"),o(1790,"br"),t()()(),n(1791,"td",17)(1792,"code",21),e(1793,"string"),t()(),n(1794,"td",20)(1795,"p"),e(1796,"Endpoint usado pelo template "),n(1797,"strong"),e(1798,"PoModalPasswordRecovery"),t(),e(1799," para requisi\xE7\xE3o do recurso."),t(),n(1800,"blockquote")(1801,"p"),e(1802,"Saiba mais em "),n(1803,"a",37),e(1804,"PoModalPasswordRecovery"),t(),e(1805,"."),t()()()()(),n(1806,"h4",34)(1807,"code",5),e(1808,"PoPageLogin"),t()(),n(1809,"div",2)(1810,"p"),e(1811,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),n(1812,"code"),e(1813,"po-page-login"),t(),e(1814,"."),t()(),n(1815,"h4",9),e(1816,"Propriedades"),t(),n(1817,"table",10)(1818,"tr",11)(1819,"th",12),e(1820,"Nome"),t(),n(1821,"th",12),e(1822,"Tipo"),t(),n(1823,"th",12),e(1824,"Descri\xE7\xE3o"),t()(),n(1825,"tr",13)(1826,"td",14)(1827,"div",15)(1828,"span",16),e(1829," login"),o(1830,"br"),t()()(),n(1831,"td",17)(1832,"code",21),e(1833,"string"),t()(),n(1834,"td",20)(1835,"p"),e(1836,"Login preenchido pelo usu\xE1rio."),t()()(),n(1837,"tr",13)(1838,"td",14)(1839,"div",15)(1840,"span",16),e(1841," password"),o(1842,"br"),t()()(),n(1843,"td",17)(1844,"code",21),e(1845,"string"),t()(),n(1846,"td",20)(1847,"p"),e(1848,"Senha preenchida pelo usu\xE1rio, a mesma ser\xE1 convertida para [hash/md5] antes de ser enviada para a aplica\xE7\xE3o."),t()()(),n(1849,"tr",13)(1850,"td",14)(1851,"div",15)(1852,"span",16),e(1853," rememberUser"),o(1854,"br"),t()()(),n(1855,"td",17)(1856,"code",25),e(1857,"boolean"),t()(),n(1858,"td",20)(1859,"p"),e(1860,"Essa propriedade informa se o usu\xE1rio quer que seus dados sejam lembrados em um acesso futuro."),t()()()(),n(1861,"h3"),e(1862,"Enums"),t(),n(1863,"h4",4)(1864,"code",5),e(1865,"PoPageLoginAuthenticationType"),t()(),n(1866,"div",2)(1867,"p")(1868,"em"),e(1869,"Enum"),t(),e(1870," para defini\xE7\xE3o do tipo de autentica\xE7\xE3o."),t()(),n(1871,"h4",9),e(1872,"Propriedades"),t(),n(1873,"table",10)(1874,"tr",11)(1875,"th",12),e(1876,"Nome"),t(),n(1877,"th",12),e(1878,"Descri\xE7\xE3o"),t()(),n(1879,"tr",13)(1880,"td",14)(1881,"div",15)(1882,"span",16),e(1883," Basic"),o(1884,"br"),t()()(),n(1885,"td",20)(1886,"p"),e(1887,"Autentica\xE7\xE3o Basic"),t()()(),n(1888,"tr",13)(1889,"td",14)(1890,"div",15)(1891,"span",16),e(1892," Bearer"),o(1893,"br"),t()()(),n(1894,"td",20)(1895,"p"),e(1896,"Autentica\xE7\xE3o Bearer"),t()()()()())},dependencies:[C],encapsulation:2})}return r})();var xe=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,l){this.route=s,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let l=s.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||r)(w(K),w(X))};static \u0275cmp=b({type:r,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Page Login",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-page-login-doc"),t(),n(4,"po-tab",3),h("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-page-login-basic-view")(6,"sample-po-page-login-labs-view")(7,"sample-po-page-login-human-resources-view")(8,"sample-po-page-login-automatic-service-view"),t()()()),l&2&&(x("p-actions",i.actions),p(2),x("p-active",i.activeTab==="doc"),p(2),x("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ae,P,f,me,ue,ge,Se,he],encapsulation:2})}return r})();var Be=[{path:"",component:xe}],be=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=D({type:r});static \u0275inj=A({imports:[R.forChild(Be),R]})}return r})();var ct=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=D({type:r});static \u0275inj=A({imports:[se,be]})}return r})();export{ct as DocPoPageLoginModule};
