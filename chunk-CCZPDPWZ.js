import{o as k,p as ee}from"./chunk-JYNCG2Y6.js";import{Ab as M,F as _,Ga as A,I as K,ha as X,ja as Z,nb as $,pa as D,zb as T}from"./chunk-HBOGTDFH.js";import{$ as C,$a as S,Ac as Q,Ba as V,Ea as o,Fa as e,Ga as a,Ka as H,La as u,M as q,Nc as Y,Pc as J,Rc as G,T as g,Ta as f,U as b,Ua as h,Va as E,Wa as z,Xa as t,Za as v,ab as P,bb as w,eb as B,ha as r,ia as j,oa as c,pa as N,ub as R,wc as O,xc as F,ya as s,yc as I,zc as W}from"./chunk-MIQUIDUB.js";var te=(()=>{class i{poButton;static \u0275fac=function(p){return new(p||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-popover-basic"]],viewQuery:function(p,n){if(p&1&&f(_,7,C),p&2){let l;h(l=E())&&(n.poButton=l.first)}},standalone:!1,decls:3,vars:1,consts:[[3,"p-target"],["p-label","Open Popover"]],template:function(p,n){p&1&&(o(0,"po-popover",0),t(1," PO Popover "),e(),a(2,"po-button",1)),p&2&&s("p-target",n.poButton)},dependencies:[_,D],encapsulation:2})}return i})();var ce=i=>({"docs-sample-code-tabs":i}),ne=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-popover-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Popover Basic"),e(),o(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-popover-basic/sample-po-popover-basic.component.html"),e(),o(13,"pre",7),t(14,`<po-popover [p-target]="poButton"> PO Popover </po-popover>

<po-button p-label="Open Popover"> </po-button>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-popover-basic/sample-po-popover-basic.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, ElementRef, ViewChild } from '@angular/core';

import { PoButtonComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popover-basic',
  templateUrl: './sample-po-popover-basic.component.html',
  standalone: false
})
export class SamplePoPopoverBasicComponent {
  @ViewChild(PoButtonComponent, { read: ElementRef, static: true }) poButton: PoButtonComponent;
}
`),e()()()()(),o(21,"div",10),a(22,"sample-po-popover-basic"),e(),a(23,"hr")),p&2&&(r(5),V("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",B(4,ce,n.hideSampleCodeTabs)))},dependencies:[R,k,T,M,te],encapsulation:2})}return i})();var ge=["buttonClick"],be=["buttonHover"],ie=(()=>{class i{buttonClickRef;buttonHoverRef;content="";position="";properties=[];title="";positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];restore(){this.content="",this.position=void 0,this.properties=[],this.title=""}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-popover-labs"]],viewQuery:function(p,n){if(p&1&&(f(ge,7,C),f(be,7,C)),p&2){let l;h(l=E())&&(n.buttonClickRef=l.first),h(l=E())&&(n.buttonHoverRef=l.first)}},standalone:!1,decls:22,vars:16,consts:[["buttonClick",""],["buttonHover",""],["f","ngForm"],["p-trigger","click",3,"p-hide-arrow","p-position","p-target","p-title"],["p-trigger","hover",3,"p-hide-arrow","p-position","p-target","p-title"],[1,"po-row"],[1,"po-offset-xl-1","po-offset-lg-1","po-md-6","po-lg-3"],["p-label","Popover with click"],["p-label","Popover with hover"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","content","p-clean","","p-label","Content",1,"po-md-6",3,"ngModelChange","ngModel"],["name","position","p-label","Position",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let l=H();o(0,"po-popover",3),t(1),e(),o(2,"po-popover",4),t(3),e(),o(4,"div",5)(5,"div",6),a(6,"po-button",7,0),e(),o(8,"div",6),a(9,"po-button",8,1),e()(),a(11,"hr"),o(12,"form",null,2)(14,"div",5)(15,"po-input",9),w("ngModelChange",function(m){return g(l),P(n.title,m)||(n.title=m),b(m)}),e(),o(16,"po-input",10),w("ngModelChange",function(m){return g(l),P(n.content,m)||(n.content=m),b(m)}),e()(),o(17,"div",5)(18,"po-radio-group",11),w("ngModelChange",function(m){return g(l),P(n.position,m)||(n.position=m),b(m)}),e(),o(19,"po-checkbox-group",12),w("ngModelChange",function(m){return g(l),P(n.properties,m)||(n.properties=m),b(m)}),e()(),o(20,"div",5)(21,"po-button",13),u("p-click",function(){return g(l),b(n.restore())}),e()()()}p&2&&(s("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonClickRef)("p-title",n.title),r(),v(" ",n.content,`
`),r(),s("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonHoverRef)("p-title",n.title),r(),v(" ",n.content,`
`),r(12),S("ngModel",n.title),r(),S("ngModel",n.content),r(2),S("ngModel",n.position),s("p-options",n.positionOptions),r(),S("ngModel",n.properties),s("p-options",n.propertiesOptions))},dependencies:[Q,O,F,W,I,_,X,Z,A,D],encapsulation:2})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-popover-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Popover Labs"),e(),o(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-popover-labs/sample-po-popover-labs.component.html"),e(),o(13,"pre",7),t(14,`<po-popover
  p-trigger="click"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-target]="buttonClickRef"
  [p-title]="title"
>
  { { content }}
</po-popover>

<po-popover
  p-trigger="hover"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-target]="buttonHoverRef"
  [p-title]="title"
>
  { { content }}
</po-popover>

<div class="po-row">
  <div class="po-offset-xl-1 po-offset-lg-1 po-md-6 po-lg-3">
    <po-button #buttonClick p-label="Popover with click"> </po-button>
  </div>

  <div class="po-offset-xl-1 po-offset-lg-1 po-md-6 po-lg-3">
    <po-button #buttonHover p-label="Popover with hover"> </po-button>
  </div>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-clean p-label="Title"> </po-input>

    <po-input class="po-md-6" name="content" [(ngModel)]="content" p-clean p-label="Content"> </po-input>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-8"
      name="position"
      [(ngModel)]="position"
      p-label="Position"
      [p-options]="positionOptions"
    >
    </po-radio-group>

    <po-checkbox-group
      class="po-md-4"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-popover-labs/sample-po-popover-labs.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, ElementRef, ViewChild } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popover-labs',
  templateUrl: './sample-po-popover-labs.component.html',
  standalone: false
})
export class SamplePoPopoverLabsComponent {
  @ViewChild('buttonClick', { read: ElementRef, static: true }) buttonClickRef: ElementRef;
  @ViewChild('buttonHover', { read: ElementRef, static: true }) buttonHoverRef: ElementRef;

  content: string = '';
  position: string = '';
  properties: Array<string> = [];
  title: string = '';

  public readonly positionOptions: Array<PoRadioGroupOption> = [
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'hideArrow', label: 'Hide arrow' }];

  restore() {
    this.content = '';
    this.position = undefined;
    this.properties = [];
    this.title = '';
  }
}
`),e()()()()(),o(21,"div",10),a(22,"sample-po-popover-labs"),e(),a(23,"hr")),p&2&&(r(5),V("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",B(4,fe,n.hideSampleCodeTabs)))},dependencies:[R,k,T,M,ie],encapsulation:2})}return i})();var Ee=["cardname"],Se=["cardcode"],Pe=["carddate"],ae=(()=>{class i{cardnameref;cardcoderef;carddateref;inputCardName;inputCardCode;inputCardValid;static \u0275fac=function(p){return new(p||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-popover-credit-card"]],viewQuery:function(p,n){if(p&1&&(f(Ee,7,C),f(Se,7,C),f(Pe,7,C)),p&2){let l;h(l=E())&&(n.cardnameref=l.first),h(l=E())&&(n.cardcoderef=l.first),h(l=E())&&(n.carddateref=l.first)}},standalone:!1,decls:28,vars:10,consts:[["f","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["modalCreditCard",""],["p-trigger","hover",3,"p-target"],["src","assets/graphics/card-code.jpg"],["src","assets/graphics/card-date.jpg"],["src","assets/graphics/card-owner.jpg"],[1,"po-row"],["name","inputCardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","inputCardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","inputCardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Confirm",1,"po-md-2",3,"click","p-disabled"],["p-title","Your Credit Card"]],template:function(p,n){if(p&1){let l=H();o(0,"po-popover",5),a(1,"img",6),e(),o(2,"po-popover",5),a(3,"img",7),e(),o(4,"po-popover",5),a(5,"img",8),e(),o(6,"form",null,0)(8,"div",9)(9,"po-input",10,1),w("ngModelChange",function(m){return g(l),P(n.inputCardName,m)||(n.inputCardName=m),b(m)}),e(),o(11,"po-input",11,2),w("ngModelChange",function(m){return g(l),P(n.inputCardCode,m)||(n.inputCardCode=m),b(m)}),e(),o(13,"po-input",12,3),w("ngModelChange",function(m){return g(l),P(n.inputCardValid,m)||(n.inputCardValid=m),b(m)}),e()(),o(15,"div",9)(16,"po-button",13),u("click",function(){g(l);let m=z(18);return b(m.open())}),e()()(),o(17,"po-modal",14,4)(19,"div",9)(20,"div"),t(21),e()(),o(22,"div",9)(23,"div"),t(24),e()(),o(25,"div",9)(26,"div"),t(27),e()()()}if(p&2){let l=z(7);s("p-target",n.cardcoderef),r(2),s("p-target",n.carddateref),r(2),s("p-target",n.cardnameref),r(5),S("ngModel",n.inputCardName),r(2),S("ngModel",n.inputCardCode),r(2),S("ngModel",n.inputCardValid),r(3),s("p-disabled",l.form.invalid),r(5),v("Card Code: ",n.inputCardCode,""),r(3),v("Card Expiration: ",n.inputCardValid,""),r(3),v("Card Owner: ",n.inputCardName,"")}},dependencies:[Q,O,F,W,I,_,A,K,D],encapsulation:2})}return i})();var xe=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-popover-credit-card-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Popover - Credit Card"),e(),o(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.html"),e(),o(13,"pre",7),t(14,`<po-popover p-trigger="hover" [p-target]="cardcoderef">
  <img src="assets/graphics/card-code.jpg" />
</po-popover>

<po-popover p-trigger="hover" [p-target]="carddateref">
  <img src="assets/graphics/card-date.jpg" />
</po-popover>

<po-popover p-trigger="hover" [p-target]="cardnameref">
  <img src="assets/graphics/card-owner.jpg" />
</po-popover>

<form #f="ngForm">
  <div class="po-row">
    <po-input
      #cardname
      class="po-lg-6"
      name="inputCardName"
      [(ngModel)]="inputCardName"
      p-clean
      p-label="Name"
      p-required
    >
    </po-input>

    <po-input
      #cardcode
      class="po-lg-4 po-md-9"
      name="inputCardCode"
      [(ngModel)]="inputCardCode"
      p-clean
      p-label="Code"
      p-mask="9999 9999 9999 9999"
      p-mask-format-model
      p-pattern="\\d{4} \\d{4} \\d{4} \\d{4}"
      p-required
    >
    </po-input>

    <po-input
      #carddate
      class="po-lg-2 po-md-3"
      name="inputCardValid"
      [(ngModel)]="inputCardValid"
      p-clean
      p-label="Expiration Date"
      p-mask="12/99"
      p-mask-format-model
      p-pattern="\\d{2}\\/\\d{2}"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-2" p-label="Confirm" [p-disabled]="f.form.invalid" (click)="modalCreditCard.open()">
    </po-button>
  </div>
</form>

<po-modal #modalCreditCard p-title="Your Credit Card">
  <div class="po-row">
    <div>Card Code: { { inputCardCode }}</div>
  </div>
  <div class="po-row">
    <div>Card Expiration: { { inputCardValid }}</div>
  </div>
  <div class="po-row">
    <div>Card Owner: { { inputCardName }}</div>
  </div>
</po-modal>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'sample-po-popover-credit-card',
  templateUrl: './sample-po-popover-credit-card.component.html',
  standalone: false
})
export class SamplePoPopoverCreditCardComponent {
  @ViewChild('cardname', { read: ElementRef, static: true }) cardnameref: ElementRef;
  @ViewChild('cardcode', { read: ElementRef, static: true }) cardcoderef: ElementRef;
  @ViewChild('carddate', { read: ElementRef, static: true }) carddateref: ElementRef;

  public inputCardName: string;
  public inputCardCode: string;
  public inputCardValid: string;
}
`),e()()()()(),o(21,"div",10),a(22,"sample-po-popover-credit-card"),e(),a(23,"hr")),p&2&&(r(5),V("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",B(4,xe,n.hideSampleCodeTabs)))},dependencies:[R,k,T,M,ae],encapsulation:2})}return i})();var le=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-popover-doc"]],standalone:!1,decls:298,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-tooltip?view=doc"],["href","https://po-ui.io/documentation/po-modal?view=doc"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","ElementRef"],["pan","",1,"docs-api-property-type","HTMLElement"]],template:function(p,n){p&1&&(o(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoPopoverModule } from '@po-ui/ng-components';"),e()(),o(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente po-popover."),e()(),o(7,"h3",3),t(8,"Componente"),e(),o(9,"h4",4)(10,"code",5),t(11,"PoPopoverComponent"),e()(),o(12,"div",2)(13,"p"),t(14,"O componente "),o(15,"code"),t(16,"po-popover"),e(),t(17,` \xE9 um container pequeno recomendado para incluir v\xE1rios tipos de conte\xFAdo como:
gr\xE1ficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.`),e(),o(18,"p"),t(19,`Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
`),o(20,"a",6)(21,"strong"),t(22,"po-tooltip"),e()(),t(23,"."),e(),o(24,"p"),t(25,"Para conte\xFAdos maiores recomenda-se o uso do "),o(26,"a",7)(27,"strong"),t(28,"po-modal"),e()(),t(29,"."),e(),o(30,"p"),t(31,`Ele cont\xE9m um t\xEDtulo e tamb\xE9m \xE9 poss\xEDvel escolher as posi\xE7\xF5es do popover em rela\xE7\xE3o ao componente pai,
as posi\xE7\xF5es permitidas s\xE3o: `),o(32,"code"),t(33,"right"),e(),t(34,", "),o(35,"code"),t(36,"right-top"),e(),t(37,", "),o(38,"code"),t(39,"right-bottom"),e(),t(40,", "),o(41,"code"),t(42,"top"),e(),t(43,", "),o(44,"code"),t(45,"top-left"),e(),t(46,", "),o(47,"code"),t(48,"top-right"),e(),t(49,`,
`),o(50,"code"),t(51,"left"),e(),t(52,", "),o(53,"code"),t(54,"left-top"),e(),t(55,", "),o(56,"code"),t(57,"left-bottom"),e(),t(58,", "),o(59,"code"),t(60,"bottom"),e(),t(61,", "),o(62,"code"),t(63,"bottom-left"),e(),t(64," e "),o(65,"code"),t(66,"bottom-right"),e(),t(67,"."),e(),o(68,"p"),t(69,"Tamb\xE9m \xE9 poss\xEDvel escolher entre os dois eventos que podem abrir o "),o(70,"em"),t(71,"popover"),e(),t(72,`.
Os eventos permitidos s\xE3o: `),o(73,"code"),t(74,"click"),e(),t(75," e "),o(76,"code"),t(77,"hover"),e(),t(78,". "),e()(),o(79,"div",8)(80,"h4",9),t(81,"Seletor"),e(),o(82,"pre",10),t(83,`<po-popover
    p-append-in-body="boolean"
    (p-close)="EventEmitter"
    p-hide-arrow="boolean"
    p-position="string"
    p-target="ElementRef | HTMLElement"
    p-title="string"
    p-trigger="string" >
</po-popover>
`),e()(),o(84,"h4",11),t(85,"Propriedades"),e(),o(86,"table",12)(87,"tr",13)(88,"th",14),t(89,"Nome"),e(),o(90,"th",14),t(91,"Tipo"),e(),o(92,"th",14),t(93,"Padr\xE3o"),e(),o(94,"th",14),t(95,"Descri\xE7\xE3o"),e()(),o(96,"tr",15)(97,"td",16)(98,"div",17)(99,"span",18),t(100," p-append-in-body"),a(101,"br"),e()()(),o(102,"td",19)(103,"code",20),t(104,"boolean"),e()(),o(105,"td",21)(106,"p")(107,"code"),t(108,"false"),e()()(),o(109,"td",22)(110,"em")(111,"strong"),t(112,"(opcional)"),e()(),o(113,"p"),t(114,"Define que o popover ser\xE1 inserido no body da p\xE1gina em vez do elemento definido em "),o(115,"code"),t(116,"p-target"),e(),t(117,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),e()()(),o(118,"tr",15)(119,"td",16)(120,"div",23)(121,"span",24),t(122," (p-close)"),a(123,"br"),e()()(),o(124,"td",19)(125,"code",25),t(126,"EventEmitter"),e()(),o(127,"td",21),t(128,"-"),e(),o(129,"td",22)(130,"p"),t(131,"Evento disparado ao fechar o popover."),e()()(),o(132,"tr",15)(133,"td",16)(134,"div",17)(135,"span",18),t(136," p-hide-arrow"),a(137,"br"),e()()(),o(138,"td",19)(139,"code",20),t(140,"boolean"),e()(),o(141,"td",21)(142,"p")(143,"code"),t(144,"false"),e()()(),o(145,"td",22)(146,"em")(147,"strong"),t(148,"(opcional)"),e()(),o(149,"p"),t(150,"Desabilita a seta do componente "),o(151,"em"),t(152,"popover"),e(),t(153,"."),e()()(),o(154,"tr",15)(155,"td",16)(156,"div",17)(157,"span",18),t(158," p-position"),a(159,"br"),e()()(),o(160,"td",19)(161,"code",26),t(162,"string"),e()(),o(163,"td",21)(164,"p"),t(165,"right"),e()(),o(166,"td",22)(167,"em")(168,"strong"),t(169,"(opcional)"),e()(),o(170,"p"),t(171,`Define a posi\xE7\xE3o que o po-popover abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "right" (direita), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),e(),o(172,"p"),t(173,"Posi\xE7\xF5es v\xE1lidas:"),e(),o(174,"ul")(175,"li")(176,"code"),t(177,"right"),e(),t(178,": Posiciona o po-popover no lado direito do componente alvo."),e(),o(179,"li")(180,"code"),t(181,"right-bottom"),e(),t(182,": Posiciona o po-popover no lado direito inferior do componente alvo."),e(),o(183,"li")(184,"code"),t(185,"right-top"),e(),t(186,": Posiciona o po-popover no lado direito superior do componente alvo."),e(),o(187,"li")(188,"code"),t(189,"bottom"),e(),t(190,": Posiciona o po-popover abaixo do componente alvo."),e(),o(191,"li")(192,"code"),t(193,"bottom-left"),e(),t(194,": Posiciona o po-popover abaixo e \xE0 esquerda do componente alvo."),e(),o(195,"li")(196,"code"),t(197,"bottom-right"),e(),t(198,": Posiciona o po-popover abaixo e \xE0 direita do componente alvo."),e(),o(199,"li")(200,"code"),t(201,"left"),e(),t(202,": Posiciona o po-popover no lado esquerdo do componente alvo."),e(),o(203,"li")(204,"code"),t(205,"left-top"),e(),t(206,": Posiciona o po-popover no lado esquerdo superior do componente alvo."),e(),o(207,"li")(208,"code"),t(209,"left-bottom"),e(),t(210,": Posiciona o po-popover no lado esquerdo inferior do componente alvo."),e(),o(211,"li")(212,"code"),t(213,"top"),e(),t(214,": Posiciona o po-popover acima do componente alvo."),e(),o(215,"li")(216,"code"),t(217,"top-right"),e(),t(218,": Posiciona o po-popover acima e \xE0 direita do componente alvo."),e(),o(219,"li")(220,"code"),t(221,"top-left"),e(),t(222,": Posiciona o po-popover acima e \xE0 esquerda do componente alvo."),e()()()(),o(223,"tr",15)(224,"td",16)(225,"div",17)(226,"span",18),t(227," p-target"),a(228,"br"),e()()(),o(229,"td",19)(230,"code",27),t(231,"ElementRef "),e(),o(232,"code",28),t(233," HTMLElement"),e()(),o(234,"td",21),t(235,"-"),e(),o(236,"td",22)(237,"p"),t(238,`ElementRef do componente de origem respons\xE1vel por abrir o popover.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),e(),o(239,"pre")(240,"code"),t(241,`<po-button
  p-label="Open Popover">
</po-button>

<po-popover
  [p-target]="poButton"
  [p-title]="PO Popover">
</po-popover>
`),e()(),o(242,"p"),t(243,`Tamb\xE9m deve-se criar um ViewChild para cada popover, passando como refer\xEAncia o elemento do
HTML que ir\xE1 disparar o evento. Exemplo:`),e(),o(244,"pre")(245,"code"),t(246,`@ViewChild(PoButtonComponent, {read: ElementRef}) poButton: PoButtonComponent;
`),e()(),o(247,"p"),t(248,`Pode-se tambem informar diretamente o HTMLElement, para n\xE3o ter que utilizar o ViewChild.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),e(),o(249,"pre")(250,"code"),t(251,`<button #target>
  Abrir popover
</button>

<po-popover
    [p-target]="target"
    p-trigger="click" >
</po-popover>
`),e()()()(),o(252,"tr",15)(253,"td",16)(254,"div",17)(255,"span",18),t(256," p-title"),a(257,"br"),e()()(),o(258,"td",19)(259,"code",26),t(260,"string"),e()(),o(261,"td",21),t(262,"-"),e(),o(263,"td",22)(264,"em")(265,"strong"),t(266,"(opcional)"),e()(),o(267,"p"),t(268,"T\xEDtulo do popover."),e()()(),o(269,"tr",15)(270,"td",16)(271,"div",17)(272,"span",18),t(273," p-trigger"),a(274,"br"),e()()(),o(275,"td",19)(276,"code",26),t(277,"string"),e()(),o(278,"td",21)(279,"p"),t(280,"click"),e()(),o(281,"td",22)(282,"em")(283,"strong"),t(284,"(opcional)"),e()(),o(285,"p"),t(286,"Define o evento que abrir\xE1 o po-popover."),e(),o(287,"p"),t(288,"Valores v\xE1lidos:"),e(),o(289,"ul")(290,"li")(291,"code"),t(292,"click"),e(),t(293,": Abre ao clicar no componente alvo."),e(),o(294,"li")(295,"code"),t(296,"hover"),e(),t(297,": Abre ao passar o mouse sobre o componente alvo."),e()()()()()())},dependencies:[k],encapsulation:2})}return i})();var me=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||i)(j(Y),j(J))};static \u0275cmp=c({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Popover",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-popover-doc"),e(),o(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-popover-basic-view")(6,"sample-po-popover-labs-view")(7,"sample-po-popover-credit-card-view"),e()()()),p&2&&(s("p-actions",n.actions),r(2),s("p-active",n.activeTab==="doc"),r(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[$,T,M,ne,pe,re,le],encapsulation:2})}return i})();var Te=[{path:"",component:me}],de=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=N({type:i});static \u0275inj=q({imports:[G.forChild(Te),G]})}return i})();var rt=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=N({type:i});static \u0275inj=q({imports:[ee,de]})}return i})();export{rt as DocPoPopoverModule};
