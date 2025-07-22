import{o as T,p as te}from"./chunk-JYNCG2Y6.js";import{Ab as v,Db as ee,F as I,Fa as Y,Ga as O,Ma as Z,T as J,ja as K,l as M,la as X,nb as $,zb as E}from"./chunk-HBOGTDFH.js";import{$a as h,Ac as W,Ba as P,Ea as t,Fa as e,Ga as p,Ka as V,La as f,M as k,Nc as G,Pc as Q,Rc as H,T as u,Ta as z,U as g,Ua as A,Va as j,Xa as o,Za as y,ab as C,bb as S,eb as _,ha as r,ia as D,oa as c,pa as B,ub as x,wc as L,xc as q,ya as d,yc as F,zc as U}from"./chunk-MIQUIDUB.js";var oe=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-tooltip-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-label","Open Tooltip","p-tooltip","po-tooltip"]],template:function(a,i){a&1&&p(0,"po-button",0)},dependencies:[I,M],encapsulation:2})}return n})();var ue=n=>({"docs-sample-code-tabs":n}),ne=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-tooltip-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Tooltip Basic"),e(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),p(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.html"),e(),t(13,"pre",7),o(14,`<po-button p-label="Open Tooltip" p-tooltip="po-tooltip"> </po-button>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-tooltip-basic/sample-po-tooltip-basic.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-tooltip-basic',
  templateUrl: './sample-po-tooltip-basic.component.html',
  standalone: false
})
export class SamplePoTooltipBasicComponent {}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-tooltip-basic"),e(),p(23,"hr")),a&2&&(r(5),P("po-icon "+i.sampleCodeButtonIcon),r(),y(" ",i.sampleCodeButtonLabel,""),r(),d("ngClass",_(4,ue,i.hideSampleCodeTabs)))},dependencies:[x,T,E,v,oe],encapsulation:2})}return n})();var ae=(()=>{class n{tooltip;tooltipPosition;tooltipPositionOptions=[{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"},{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"}];ngOnInit(){this.restore()}restore(){this.tooltip="",this.tooltipPosition=void 0}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-tooltip-labs"]],standalone:!1,decls:12,vars:5,consts:[["f","ngForm"],[1,"po-row"],[1,"po-md-4","po-lg-2","po-offset-md-4","po-offset-lg-5","po-offset-xl-5"],["p-label","Po-Tooltip",3,"p-tooltip","p-tooltip-position"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","tooltipPosition","p-label","Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let m=V();t(0,"div",1)(1,"div",2),p(2,"po-button",3),e()(),p(3,"hr"),t(4,"form",null,0)(6,"div",1)(7,"po-input",4),S("ngModelChange",function(l){return u(m),C(i.tooltip,l)||(i.tooltip=l),g(l)}),e()(),t(8,"div",1)(9,"po-radio-group",5),S("ngModelChange",function(l){return u(m),C(i.tooltipPosition,l)||(i.tooltipPosition=l),g(l)}),e()(),t(10,"div",1)(11,"po-button",6),f("p-click",function(){return u(m),g(i.restore())}),e()()()}a&2&&(r(2),d("p-tooltip",i.tooltip)("p-tooltip-position",i.tooltipPosition),r(5),h("ngModel",i.tooltip),r(2),h("ngModel",i.tooltipPosition),d("p-options",i.tooltipPositionOptions))},dependencies:[W,L,q,U,F,I,K,O,M],encapsulation:2})}return n})();var he=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-tooltip-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Tooltip Labs"),e(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),p(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
  <div class="po-md-4 po-lg-2 po-offset-md-4 po-offset-lg-5 po-offset-xl-5">
    <po-button [p-tooltip]="tooltip" [p-tooltip-position]="tooltipPosition" p-label="Po-Tooltip"> </po-button>
  </div>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-lg-12" name="tooltip" [(ngModel)]="tooltip" p-clean p-label="Tooltip"> </po-input>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-6"
      name="tooltipPosition"
      [(ngModel)]="tooltipPosition"
      p-label="Position"
      [p-options]="tooltipPositionOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-tooltip-labs/sample-po-tooltip-labs.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tooltip-labs',
  templateUrl: './sample-po-tooltip-labs.component.html',
  standalone: false
})
export class SamplePoTooltipLabsComponent implements OnInit {
  tooltip: string;
  tooltipPosition: string;

  public readonly tooltipPositionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' },
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.tooltip = '';
    this.tooltipPosition = undefined;
  }
}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-tooltip-labs"),e(),p(23,"hr")),a&2&&(r(5),P("po-icon "+i.sampleCodeButtonIcon),r(),y(" ",i.sampleCodeButtonLabel,""),r(),d("ngClass",_(4,he,i.hideSampleCodeTabs)))},dependencies:[x,T,E,v,ae],encapsulation:2})}return n})();var Se=["formNewUser"],pe=(()=>{class n{poNotification;formNewUser;birthDate;confirmPassword;CPF;email;emailTooltip;genre;name;nameTooltip;password;passwordTooltip;registration;registrationTooltip;constructor(s){this.poNotification=s}ngOnInit(){this.initialize()}cancel(){this.formNewUser.reset()}confirm(){this.formNewUser.valid?(this.poNotification.success("New user registered"),this.cancel()):this.poNotification.error("Please fill in the required fields")}initialize(){this.emailTooltip="your_account@po-ui.com",this.nameTooltip="Enter full name",this.passwordTooltip="Password must contain at least 8 characters",this.registrationTooltip="The registration number is on the registration form"}static \u0275fac=function(a){return new(a||n)(D(J))};static \u0275cmp=c({type:n,selectors:[["sample-po-tooltip-new-user"]],viewQuery:function(a,i){if(a&1&&z(Se,7),a&2){let m;A(m=j())&&(i.formNewUser=m.first)}},standalone:!1,decls:16,vars:13,consts:[["formNewUser","ngForm"],[1,"po-row"],["p-primary-label","Cancel","p-secondary-label","Confirm","p-title","Register New User",1,"po-md-12",3,"p-primary-action","p-secondary-action"],["name","registration","p-clean","","p-label","Registration","p-mask","99999-99/99","p-minlength","11","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","email","p-clean","","p-label","Email","p-pattern","@po-ui.com","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","CPF","p-clean","","p-label","CPF","p-mask","999.999.999-99","p-minlength","14","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-6",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-6",3,"ngModelChange","ngModel"],["name","password","p-clean","","p-label","Password","p-minlength","8","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-tooltip"],["name","confirmPassword","p-clean","","p-label","Confirm Password","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-pattern"]],template:function(a,i){if(a&1){let m=V();t(0,"div",1)(1,"po-widget",2),f("p-primary-action",function(){return u(m),g(i.cancel())})("p-secondary-action",function(){return u(m),g(i.confirm())}),t(2,"form",null,0)(4,"div",1)(5,"po-input",3),S("ngModelChange",function(l){return u(m),C(i.registration,l)||(i.registration=l),g(l)}),e(),t(6,"po-email",4),S("ngModelChange",function(l){return u(m),C(i.email,l)||(i.email=l),g(l)}),e()(),t(7,"div",1)(8,"po-input",5),S("ngModelChange",function(l){return u(m),C(i.name,l)||(i.name=l),g(l)}),e(),t(9,"po-input",6),S("ngModelChange",function(l){return u(m),C(i.CPF,l)||(i.CPF=l),g(l)}),e()(),t(10,"div",1)(11,"po-datepicker",7),S("ngModelChange",function(l){return u(m),C(i.birthDate,l)||(i.birthDate=l),g(l)}),e(),t(12,"po-input",8),S("ngModelChange",function(l){return u(m),C(i.genre,l)||(i.genre=l),g(l)}),e()(),t(13,"div",1)(14,"po-password",9),S("ngModelChange",function(l){return u(m),C(i.password,l)||(i.password=l),g(l)}),e(),t(15,"po-password",10),S("ngModelChange",function(l){return u(m),C(i.confirmPassword,l)||(i.confirmPassword=l),g(l)}),e()()()()()}a&2&&(r(5),h("ngModel",i.registration),d("p-tooltip",i.registrationTooltip),r(),h("ngModel",i.email),d("p-tooltip",i.emailTooltip),r(2),h("ngModel",i.name),d("p-tooltip",i.nameTooltip),r(),h("ngModel",i.CPF),r(2),h("ngModel",i.birthDate),r(),h("ngModel",i.genre),r(2),h("ngModel",i.password),d("p-tooltip",i.passwordTooltip),r(),h("ngModel",i.confirmPassword),d("p-pattern",i.password))},dependencies:[W,L,q,U,F,X,Y,O,Z,ee,M],encapsulation:2})}return n})();var Ee=n=>({"docs-sample-code-tabs":n}),re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-tooltip-new-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Tooltip - New User"),e(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),p(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
  <po-widget
    class="po-md-12"
    p-primary-label="Cancel"
    p-secondary-label="Confirm"
    p-title="Register New User"
    (p-primary-action)="cancel()"
    (p-secondary-action)="confirm()"
  >
    <form #formNewUser="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="registration"
          [(ngModel)]="registration"
          p-clean
          p-label="Registration"
          p-mask="99999-99/99"
          p-minlength="11"
          p-required
          [p-tooltip]="registrationTooltip"
        >
        </po-input>

        <po-email
          class="po-md-6"
          name="email"
          [(ngModel)]="email"
          p-clean
          p-label="Email"
          p-pattern="@po-ui.com"
          p-required
          [p-tooltip]="emailTooltip"
        >
        </po-email>
      </div>

      <div class="po-row">
        <po-input
          class="po-md-6"
          name="name"
          [(ngModel)]="name"
          p-clean
          p-label="Name"
          p-required
          [p-tooltip]="nameTooltip"
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="CPF"
          [(ngModel)]="CPF"
          p-clean
          p-label="CPF"
          p-mask="999.999.999-99"
          p-minlength="14"
          p-required
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-datepicker class="po-md-6" name="birthDate" [(ngModel)]="birthDate" p-clean p-label="Birth Date">
        </po-datepicker>

        <po-input class="po-md-6" name="genre" [(ngModel)]="genre" p-clean p-label="Genre"> </po-input>
      </div>

      <div class="po-row">
        <po-password
          class="po-md-6"
          name="password"
          [(ngModel)]="password"
          p-clean
          p-label="Password"
          p-minlength="8"
          p-required
          [p-tooltip]="passwordTooltip"
        >
        </po-password>

        <po-password
          class="po-md-6"
          name="confirmPassword"
          [(ngModel)]="confirmPassword"
          p-clean
          p-label="Confirm Password"
          p-required
          [p-pattern]="password"
        >
        </po-password>
      </div>
    </form>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-tooltip-new-user/sample-po-tooltip-new-user.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tooltip-new-user',
  templateUrl: './sample-po-tooltip-new-user.component.html',
  standalone: false
})
export class SamplePoTooltipNewUserComponent implements OnInit {
  @ViewChild('formNewUser', { static: true }) formNewUser: UntypedFormControl;

  birthDate: Date;
  confirmPassword: string;
  CPF: string;
  email: string;
  emailTooltip: string;
  genre: string;
  name: string;
  nameTooltip: string;
  password: string;
  passwordTooltip: string;
  registration: number;
  registrationTooltip: string;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.formNewUser.reset();
  }

  confirm() {
    if (this.formNewUser.valid) {
      this.poNotification.success(\`New user registered\`);
      this.cancel();
    } else {
      this.poNotification.error(\`Please fill in the required fields\`);
    }
  }

  initialize() {
    this.emailTooltip = 'your_account@po-ui.com';
    this.nameTooltip = 'Enter full name';
    this.passwordTooltip = 'Password must contain at least 8 characters';
    this.registrationTooltip = 'The registration number is on the registration form';
  }
}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-tooltip-new-user"),e(),p(23,"hr")),a&2&&(r(5),P("po-icon "+i.sampleCodeButtonIcon),r(),y(" ",i.sampleCodeButtonLabel,""),r(),d("ngClass",_(4,Ee,i.hideSampleCodeTabs)))},dependencies:[x,T,E,v,pe],encapsulation:2})}return n})();var se=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-tooltip-doc"]],standalone:!1,decls:267,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-popover?view=doc"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),o(3,"import { PoTooltipModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),o(6,"M\xF3dulo da diretiva Po-Tooltip."),e()(),t(7,"h3",3),o(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),o(11,"PoTooltipDirective"),e()(),t(12,"div",2)(13,"p"),o(14,`A diretiva po-tooltip deve ser utilizada para oferecer informa\xE7\xF5es adicionais quando os usu\xE1rios
passam o mouse ou realizam o foco sobre o elemento alvo ao qual ela est\xE1 atribu\xEDda.`),e(),t(15,"p"),o(16,`O conte\xFAdo \xE9 formado por um pequeno texto que deve contribuir para uma tomada de decis\xE3o ou
orienta\xE7\xE3o do usu\xE1rio. A ativa\xE7\xE3o dele pode estar em qualquer componente ou tag HTML.`),e(),t(17,"p"),o(18,`Para textos maiores ou no caso de haver a necessidade de utilizar algum outro elemento como
conte\xFAdo deve-se utilizar o `),t(19,"a",6)(20,"strong"),o(21,"po-popover"),e()(),o(22,"."),e(),t(23,"h4"),o(24,"Tokens customiz\xE1veis"),e(),t(25,"p"),o(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(27,"blockquote")(28,"p"),o(29,"Para maiores informa\xE7\xF5es, acesse o guia "),t(30,"a",7),o(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),o(32,"."),e()(),t(33,"table")(34,"thead")(35,"tr")(36,"th"),o(37,"Propriedade"),e(),t(38,"th"),o(39,"Descri\xE7\xE3o"),e(),t(40,"th"),o(41,"Valor Padr\xE3o"),e()()(),t(42,"tbody")(43,"tr")(44,"td")(45,"strong"),o(46,"Default Values"),e()(),p(47,"td")(48,"td"),e(),t(49,"tr")(50,"td")(51,"code"),o(52,"--border-radius"),e(),o(53," \xA0"),e(),t(54,"td"),o(55,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(56,"td")(57,"code"),o(58,"var(--border-radius-md)"),e()()(),t(59,"tr")(60,"td")(61,"code"),o(62,"--color"),e()(),t(63,"td"),o(64,"Cor principal da tooltip"),e(),t(65,"td")(66,"code"),o(67,"var(--color-neutral-dark-80)"),e()()(),t(68,"tr")(69,"td")(70,"code"),o(71,"--font-family"),e()(),t(72,"td"),o(73,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(74,"td")(75,"code"),o(76,"var(--font-family-theme)"),e()()(),t(77,"tr")(78,"td")(79,"code"),o(80,"--text-color"),e()(),t(81,"td"),o(82,"Cor do texto"),e(),t(83,"td")(84,"code"),o(85,"var(--color-neutral-light-00)"),e()()()()()(),t(86,"div",8)(87,"h4",9),o(88,"Seletor"),e(),t(89,"pre",10),o(90,`<[p-tooltip]
    p-append-in-body="boolean"
    p-hide-arrow="boolean"
    p-inner-html="boolean"
    p-tooltip="string"
    p-tooltip-position="string" >
</[p-tooltip]>
`),e()(),t(91,"h4",11),o(92,"Propriedades"),e(),t(93,"table",12)(94,"tr",13)(95,"th",14),o(96,"Nome"),e(),t(97,"th",14),o(98,"Tipo"),e(),t(99,"th",14),o(100,"Padr\xE3o"),e(),t(101,"th",14),o(102,"Descri\xE7\xE3o"),e()(),t(103,"tr",15)(104,"td",16)(105,"div",17)(106,"span",18),o(107," p-append-in-body"),p(108,"br"),e()()(),t(109,"td",19)(110,"code",20),o(111,"boolean"),e()(),t(112,"td",21)(113,"p")(114,"code"),o(115,"false"),e()()(),t(116,"td",22)(117,"em")(118,"strong"),o(119,"(opcional)"),e()(),t(120,"p"),o(121,`Define que o po-tooltip ser\xE1 incluido no body e n\xE3o dentro do elemento ao qual o tooltip foi especificado.
Op\xE7\xE3o necess\xE1ria para o caso de uso de tooltip em um elemento SVG.`),e()()(),t(122,"tr",15)(123,"td",16)(124,"div",17)(125,"span",18),o(126," p-hide-arrow"),p(127,"br"),e()()(),t(128,"td",19)(129,"code",20),o(130,"boolean"),e()(),t(131,"td",21)(132,"p")(133,"code"),o(134,"false"),e()()(),t(135,"td",22)(136,"em")(137,"strong"),o(138,"(opcional)"),e()(),t(139,"p"),o(140,"Controla a exibi\xE7\xE3o da seta de indica\xE7\xE3o da tooltip."),e(),t(141,"p"),o(142,"Quando "),t(143,"code"),o(144,"true"),e(),o(145,`, a seta que aponta para o elemento alvo ser\xE1 ocultada.
Quando `),t(146,"code"),o(147,"false"),e(),o(148,", a seta ser\xE1 exibida normalmente."),e(),t(149,"p"),o(150,"Essa propriedade \xE9 \xFAtil em cen\xE1rios onde a seta n\xE3o \xE9 necess\xE1ria ou pode interferir no layout da aplica\xE7\xE3o."),e()()(),t(151,"tr",15)(152,"td",16)(153,"div",17)(154,"span",18),o(155," p-inner-html"),p(156,"br"),e()()(),t(157,"td",19)(158,"code",20),o(159,"boolean"),e()(),t(160,"td",21)(161,"p")(162,"code"),o(163,"false"),e()()(),t(164,"td",22)(165,"em")(166,"strong"),o(167,"(opcional)"),e()(),t(168,"p"),o(169,"Permite a renderiza\xE7\xE3o de conte\xFAdo HTML dentro da tooltip."),e(),t(170,"p"),o(171,"Quando "),t(172,"code"),o(173,"true"),e(),o(174,", o valor da propriedade "),t(175,"code"),o(176,"tooltip"),e(),o(177,` ser\xE1 interpretado como HTML,
possibilitando a utiliza\xE7\xE3o de tags e elementos HTML dentro da tooltip.
Caso `),t(178,"code"),o(179,"false"),e(),o(180,", o conte\xFAdo ser\xE1 tratado como texto puro."),e()()(),t(181,"tr",15)(182,"td",16)(183,"div",17)(184,"span",18),o(185," p-tooltip"),p(186,"br"),e()()(),t(187,"td",19)(188,"code",23),o(189,"string"),e()(),t(190,"td",21),o(191,"-"),e(),t(192,"td",22)(193,"p"),o(194,"Habilita e atribui um texto ao po-tooltip."),e(),t(195,"p")(196,"strong"),o(197,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),e()()()(),t(198,"tr",15)(199,"td",16)(200,"div",17)(201,"span",18),o(202," p-tooltip-position"),p(203,"br"),e()()(),t(204,"td",19)(205,"code",23),o(206,"string"),e()(),t(207,"td",21)(208,"p"),o(209,"bottom"),e()(),t(210,"td",22)(211,"em")(212,"strong"),o(213,"(opcional)"),e()(),t(214,"p"),o(215,`Define a posi\xE7\xE3o que o po-tooltip abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "bottom" (abaixo), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),e(),t(216,"p"),o(217,"Posi\xE7\xF5es v\xE1lidas:"),e(),t(218,"ul")(219,"li")(220,"code"),o(221,"right"),e(),o(222,": Posiciona o po-tooltip no lado direito do componente alvo."),e(),t(223,"li")(224,"code"),o(225,"right-bottom"),e(),o(226,": Posiciona o po-tooltip no lado direito inferior do componente alvo."),e(),t(227,"li")(228,"code"),o(229,"right-top"),e(),o(230,": Posiciona o po-tooltip no lado direito superior do componente alvo."),e(),t(231,"li")(232,"code"),o(233,"bottom"),e(),o(234,": Posiciona o po-tooltip abaixo do componente alvo."),e(),t(235,"li")(236,"code"),o(237,"bottom-left"),e(),o(238,": Posiciona o po-tooltip abaixo e \xE0 esquerda do componente alvo."),e(),t(239,"li")(240,"code"),o(241,"bottom-right"),e(),o(242,": Posiciona o po-tooltip abaixo e \xE0 direita do componente alvo."),e(),t(243,"li")(244,"code"),o(245,"left"),e(),o(246,": Posiciona o po-tooltip no lado esquerdo do componente alvo."),e(),t(247,"li")(248,"code"),o(249,"left-top"),e(),o(250,": Posiciona o po-tooltip no lado esquerdo superior do componente alvo."),e(),t(251,"li")(252,"code"),o(253,"left-bottom"),e(),o(254,": Posiciona o po-tooltip no lado esquerdo inferior do componente alvo."),e(),t(255,"li")(256,"code"),o(257,"top"),e(),o(258,": Posiciona o po-tooltip acima do componente alvo."),e(),t(259,"li")(260,"code"),o(261,"top-right"),e(),o(262,": Posiciona o po-tooltip acima e \xE0 direita do componente alvo."),e(),t(263,"li")(264,"code"),o(265,"top-left"),e(),o(266,": Posiciona o po-tooltip acima e \xE0 esquerda do componente alvo."),e()()()()()())},dependencies:[T],encapsulation:2})}return n})();var me=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||n)(D(G),D(Q))};static \u0275cmp=c({type:n,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Tooltip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),f("p-click",function(){return i.changeTab("doc")}),p(3,"sample-po-tooltip-doc"),e(),t(4,"po-tab",3),f("p-click",function(){return i.changeTab("web")}),p(5,"sample-po-tooltip-basic-view")(6,"sample-po-tooltip-labs-view")(7,"sample-po-tooltip-new-user-view"),e()()()),a&2&&(d("p-actions",i.actions),r(2),d("p-active",i.activeTab==="doc"),r(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[$,E,v,ne,le,re,se],encapsulation:2})}return n})();var Pe=[{path:"",component:me}],de=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=B({type:n});static \u0275inj=k({imports:[H.forChild(Pe),H]})}return n})();var Je=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=B({type:n});static \u0275inj=k({imports:[te,de]})}return n})();export{Je as DocPoTooltipModule};
