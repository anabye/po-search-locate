import{o as M,p as Ee}from"./chunk-R3BKLGLC.js";import{Ab as T,Db as ue,F as H,Fa as re,Ga as U,I as Q,Ra as me,Sa as de,T as ae,V as R,Wa as se,c as ie,ha as pe,ja as le,nb as ce,zb as _}from"./chunk-TUTTJOS2.js";import{$ as k,$a as b,Ac as j,Ba as V,Ea as o,Fa as e,Ga as l,Ka as D,La as g,M as F,Ma as Y,Nc as oe,Pc as ne,Rc as G,T as c,Ta as C,U as u,Ua as P,Va as y,Wa as v,Xa as t,Za as L,ab as f,bb as h,db as Z,eb as w,ha as m,ia as A,oa as S,pa as B,qb as $,rc as te,ua as X,ub as O,wb as ee,wc as W,xc as I,ya as s,yc as z,zc as N}from"./chunk-MIQUIDUB.js";var ye=["target"],we=()=>({label:"PO Popup"}),_e=a=>[a],ge=(()=>{class a{cdr;targetRef;constructor(d){this.cdr=d}ngAfterViewInit(){this.cdr.detectChanges()}static \u0275fac=function(p){return new(p||a)(A($))};static \u0275cmp=S({type:a,selectors:[["sample-po-popup-basic"]],viewQuery:function(p,n){if(p&1&&C(ye,5,k),p&2){let r;P(r=y())&&(n.targetRef=r.first)}},standalone:!1,decls:4,vars:5,consts:[["target",""],["popup",""],["p-icon","an an-question",1,"po-clickable",3,"click"],[3,"p-actions","p-target"]],template:function(p,n){if(p&1){let r=D();o(0,"po-icon",2,0),g("click",function(){c(r);let i=v(3);return u(i.toggle())}),e(),l(2,"po-popup",3,1)}p&2&&(m(2),s("p-actions",w(3,_e,Z(2,we)))("p-target",n.targetRef))},dependencies:[ie,R],encapsulation:2})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-popup-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Popup - Basic"),e(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-popup-basic/sample-po-popup-basic.component.html"),e(),o(13,"pre",7),t(14,`<po-icon p-icon="an an-question" #target class="po-clickable" (click)="popup.toggle()"> </po-icon>
<po-popup #popup [p-actions]="[{ label: 'PO Popup' }]" [p-target]="targetRef"> </po-popup>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-popup-basic/sample-po-popup-basic.component.ts"),e(),o(19,"pre",9),t(20,`import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'sample-po-popup-basic',
  templateUrl: './sample-po-popup-basic.component.html',
  standalone: false
})
export class SamplePoPopupBasicComponent implements AfterViewInit {
  @ViewChild('target', { read: ElementRef }) targetRef: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-popup-basic"),e(),l(23,"hr")),p&2&&(m(5),V("po-icon "+n.sampleCodeButtonIcon),m(),L(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",w(4,Me,n.hideSampleCodeTabs)))},dependencies:[O,M,_,T,ge],encapsulation:2})}return a})();var Ve=["target"],fe=(()=>{class a{poNotification;targetRef;action;actions;customPositions;position;positions;properties;size;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];constructor(d){this.poNotification=d}ngOnInit(){this.restore()}addAction(d){let p=Object.assign({},d);p.action=p.action?this.showAction.bind(this,p.action):void 0,this.actions.push(p),this.restoreActionForm()}convertToArray(){this.customPositions=this.positions&&this.positions.length?JSON.parse(this.positions):void 0}restore(){this.actions=[],this.customPositions=[],this.position=void 0,this.positions="",this.properties=[],this.size="medium",this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}showAction(d){this.poNotification.success(`Action clicked: ${d}`)}static \u0275fac=function(p){return new(p||a)(A(ae))};static \u0275cmp=S({type:a,selectors:[["sample-po-popup-labs"]],viewQuery:function(p,n){if(p&1&&C(Ve,7,k),p&2){let r;P(r=y())&&(n.targetRef=r.first)}},standalone:!1,decls:28,vars:23,consts:[["popup",""],["target",""],["formAction","ngForm"],["f","ngForm"],[3,"p-actions","p-custom-positions","p-hide-arrow","p-position","p-size","p-target"],[1,"po-row","sample-button-container"],[1,"po-offset-xl-5","po-offset-lg-5","po-md-2","po-lg-2"],["p-label","PopUp",3,"p-click"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","customPositions","p-help",'["top", "left", "right-bottom"]',"p-label","Custom positions",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","position","p-label","Position",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let r=D();l(0,"po-popup",4,0),o(2,"div",5)(3,"div",6)(4,"po-button",7,1),g("p-click",function(){c(r);let i=v(1);return u(i.toggle())}),e()()(),l(6,"hr"),o(7,"form",null,2)(9,"div",8)(10,"po-input",9),h("ngModelChange",function(i){return c(r),f(n.action.action,i)||(n.action.action=i),u(i)}),e(),o(11,"po-input",10),h("ngModelChange",function(i){return c(r),f(n.action.label,i)||(n.action.label=i),u(i)}),e(),o(12,"po-input",11),h("ngModelChange",function(i){return c(r),f(n.action.url,i)||(n.action.url=i),u(i)}),e(),o(13,"po-select",12),h("ngModelChange",function(i){return c(r),f(n.action.type,i)||(n.action.type=i),u(i)}),e(),o(14,"po-select",13),h("ngModelChange",function(i){return c(r),f(n.action.icon,i)||(n.action.icon=i),u(i)}),e(),o(15,"po-checkbox-group",14),h("ngModelChange",function(i){return c(r),f(n.action,i)||(n.action=i),u(i)}),e()(),o(16,"div",8)(17,"po-button",15),g("p-click",function(){return c(r),u(n.addAction(n.action))}),e()()(),l(18,"hr"),o(19,"form",null,3)(21,"div",8)(22,"po-input",16),h("ngModelChange",function(i){return c(r),f(n.positions,i)||(n.positions=i),u(i)}),g("p-change",function(){return c(r),u(n.convertToArray())}),e(),o(23,"po-select",17),h("ngModelChange",function(i){return c(r),f(n.position,i)||(n.position=i),u(i)}),e(),o(24,"po-checkbox-group",18),h("ngModelChange",function(i){return c(r),f(n.properties,i)||(n.properties=i),u(i)}),e(),o(25,"po-radio-group",19),h("ngModelChange",function(i){return c(r),f(n.size,i)||(n.size=i),u(i)}),e()(),o(26,"div",8)(27,"po-button",20),g("p-click",function(){c(r);let i=v(8);return v(20).reset(),i.reset(),u(n.restore())}),e()()()}if(p&2){let r=v(8);s("p-actions",n.actions)("p-custom-positions",n.customPositions)("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-size",n.size)("p-target",n.targetRef),m(10),b("ngModel",n.action.action),m(),b("ngModel",n.action.label),m(),b("ngModel",n.action.url),m(),b("ngModel",n.action.type),s("p-options",n.typeOptions),m(),b("ngModel",n.action.icon),s("p-options",n.iconOptions),m(),b("ngModel",n.action),s("p-options",n.actionOptions),m(2),s("p-disabled",r.form.invalid),m(5),b("ngModel",n.positions),m(),b("ngModel",n.position),s("p-options",n.positionOptions),m(),b("ngModel",n.properties),s("p-options",n.propertiesOptions),m(),b("ngModel",n.size),s("p-options",n.sizeOptions)}},dependencies:[j,W,I,N,z,H,pe,le,U,me,R],styles:[".sample-button-container[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}"]})}return a})();var Le=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-popup-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Popup - Labs"),e(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-popup-labs/sample-po-popup-labs.component.html"),e(),o(13,"pre",7),t(14,`<po-popup
  #popup
  [p-actions]="actions"
  [p-custom-positions]="customPositions"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-size]="size"
  [p-target]="targetRef"
>
</po-popup>

<div class="po-row sample-button-container">
  <div class="po-offset-xl-5 po-offset-lg-5 po-md-2 po-lg-2">
    <po-button #target p-label="PopUp" (p-click)="popup.toggle()"> </po-button>
  </div>
</div>

<hr />

<form #formAction="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-md-6 po-lg-3" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
    </po-select>

    <po-checkbox-group
      class="po-md-12"
      name="action"
      [(ngModel)]="action"
      p-columns="4"
      p-indeterminate
      p-label="Action properties"
      [p-options]="actionOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-2 po-md-4"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="customPositions"
      [(ngModel)]="positions"
      p-help='["top", "left", "right-bottom"]'
      p-label="Custom positions"
      (p-change)="convertToArray()"
    >
    </po-input>

    <po-select
      class="po-md-6 po-lg-3"
      name="position"
      [(ngModel)]="position"
      p-label="Position"
      [p-options]="positionOptions"
    >
    </po-select>

    <po-checkbox-group
      class="po-md-12 po-lg-3"
      name="properties"
      [(ngModel)]="properties"
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
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); formAction.reset(); restore()">
    </po-button>
  </div>
</form>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-popup-labs/sample-po-popup-labs.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoPopupAction,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popup-labs',
  templateUrl: './sample-po-popup-labs.component.html',
  styles: [
    \`
      .sample-button-container {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    \`
  ],
  standalone: false
})
export class SamplePoPopupLabsComponent implements OnInit {
  @ViewChild('target', { read: ElementRef, static: true }) targetRef: ElementRef;

  action: PoPopupAction;
  actions: Array<PoPopupAction>;
  customPositions: Array<string>;
  position: string;
  positions: string;
  properties: Array<string>;
  size: string;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly positionOptions: Array<PoSelectOption> = [
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

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPopupAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions.push(newAction);

    this.restoreActionForm();
  }

  convertToArray() {
    this.customPositions = this.positions && this.positions.length ? JSON.parse(this.positions) : undefined;
  }

  restore() {
    this.actions = [];
    this.customPositions = [];
    this.position = undefined;
    this.positions = '';
    this.properties = [];
    this.size = 'medium';
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-popup-labs"),e(),l(23,"hr")),p&2&&(m(5),V("po-icon "+n.sampleCodeButtonIcon),m(),L(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",w(4,Le,n.hideSampleCodeTabs)))},dependencies:[O,M,_,T,fe],encapsulation:2})}return a})();var Re=["formEmail"],qe=["target"];function Fe(a,je){if(a&1&&(o(0,"div")(1,"div",6),l(2,"po-info",21),e(),l(3,"hr"),e()),a&2){let d=Y();m(2),s("p-value",d.cc)}}var Se=(()=>{class a{formEmail;targetRef;poModal;cc;emailText;from;popupActions;primaryAction;subject;to;ngOnInit(){this.popupActions=[{icon:"an an-plus",label:"Upper Text",type:"default",action:this.upper.bind(this)},{icon:"an an-minus",label:"Lower Text",type:"default",action:this.lower.bind(this)},{icon:"an an-x",label:"Clear",type:"danger",action:this.clear.bind(this),separator:!0}],this.primaryAction={label:"Confirmar",action:()=>{this.poModal.close(),this.reset()}}}send(){this.poModal.open()}reset(){this.formEmail.reset()}clear(){this.emailText=void 0}lower(){this.emailText=this.emailText&&this.emailText.toLowerCase()}upper(){this.emailText=this.emailText&&this.emailText.toUpperCase()}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-popup-email"]],viewQuery:function(p,n){if(p&1&&(C(Re,7),C(qe,7,k),C(Q,7)),p&2){let r;P(r=y())&&(n.formEmail=r.first),P(r=y())&&(n.targetRef=r.first),P(r=y())&&(n.poModal=r.first)}},standalone:!1,decls:31,vars:14,consts:[["popup",""],["formEmail","ngForm"],["target",""],["p-position","right",3,"p-actions","p-target"],["p-popup-header-template",""],[1,"sample-popup-header-template"],[1,"po-row"],["p-title","Send email",1,"po-sm-12"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","message","p-help","Click show settings popup","p-label","Message","p-required","",1,"po-lg-10",3,"ngModelChange","click","ngModel"],["src","./assets/graphics/po.png",1,"po-lg-2","sample-logo-po"],["p-label","Send","p-kind","primary",1,"po-md-4",3,"p-click","p-disabled"],["p-label","Reset",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Email successfully sent",3,"p-primary-action"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],[4,"ngIf"],["p-label","subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6","ngDefaultControl","",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(p,n){if(p&1){let r=D();o(0,"po-popup",3,0)(2,"div",4)(3,"div",5),t(4,"Settings"),e()()(),o(5,"div",6)(6,"po-widget",7)(7,"form",null,1)(9,"div",6)(10,"po-email",8),h("ngModelChange",function(i){return c(r),f(n.to,i)||(n.to=i),u(i)}),e(),o(11,"po-email",9),h("ngModelChange",function(i){return c(r),f(n.cc,i)||(n.cc=i),u(i)}),e(),o(12,"po-input",10),h("ngModelChange",function(i){return c(r),f(n.subject,i)||(n.subject=i),u(i)}),e()(),o(13,"div",6)(14,"po-textarea",11,2),h("ngModelChange",function(i){return c(r),f(n.emailText,i)||(n.emailText=i),u(i)}),g("click",function(){c(r);let i=v(1);return u(i.toggle())}),e(),l(16,"img",12),e(),o(17,"div",6)(18,"po-button",13),g("p-click",function(){return c(r),u(n.send())}),e(),o(19,"po-button",14),g("p-click",function(){return c(r),u(n.reset())}),e()()()()(),o(20,"po-modal",15)(21,"div",6),l(22,"po-info",16)(23,"po-info",17),e(),l(24,"hr"),X(25,Fe,4,1,"div",18),o(26,"div",6),l(27,"po-info",19),e(),l(28,"hr"),o(29,"div",6)(30,"po-textarea",20),h("ngModelChange",function(i){return c(r),f(n.emailText,i)||(n.emailText=i),u(i)}),e()()()}if(p&2){let r=v(8);s("p-actions",n.popupActions)("p-target",n.targetRef),m(10),b("ngModel",n.to),m(),b("ngModel",n.cc),m(),b("ngModel",n.subject),m(2),b("ngModel",n.emailText),m(4),s("p-disabled",r.form.invalid),m(),s("p-disabled",r.form.invalid),m(),s("p-primary-action",n.primaryAction),m(2),s("p-value",n.from),m(),s("p-value",n.to),m(2),s("ngIf",n.cc!==""),m(2),s("p-value",n.subject),m(3),b("ngModel",n.emailText)}},dependencies:[ee,j,te,W,I,N,z,H,re,U,de,se,Q,R,ue],styles:[".sample-logo-po[_ngcontent-%COMP%]{height:15%;padding-top:2.5%}.sample-popup-header-template[_ngcontent-%COMP%]{border-top-left-radius:3px;border-top-right-radius:3px;color:#0c9abe;padding-bottom:5%;padding-left:25%;padding-top:5%}"]})}return a})();var We=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-popup-email-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Popup Email"),e(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-popup-email/sample-po-popup-email.component.html"),e(),o(13,"pre",7),t(14,`<po-popup #popup p-position="right" [p-actions]="popupActions" [p-target]="targetRef">
  <div p-popup-header-template>
    <div class="sample-popup-header-template">Settings</div>
  </div>
</po-popup>

<div class="po-row">
  <po-widget class="po-sm-12" p-title="Send email">
    <form #formEmail="ngForm">
      <div class="po-row">
        <po-email class="po-sm-12" name="to" [(ngModel)]="to" p-clean p-label="To" p-required> </po-email>

        <po-email class="po-sm-12" name="cc" [(ngModel)]="cc" p-clean p-label="CC"> </po-email>

        <po-input class="po-sm-12" name="subject" [(ngModel)]="subject" p-clean p-label="Subject" p-required>
        </po-input>
      </div>

      <div class="po-row">
        <po-textarea
          #target
          class="po-lg-10"
          name="message"
          [(ngModel)]="emailText"
          p-help="Click show settings popup"
          p-label="Message"
          p-required
          (click)="popup.toggle()"
        >
        </po-textarea>

        <img class="po-lg-2 sample-logo-po" src="./assets/graphics/po.png" />
      </div>

      <div class="po-row">
        <po-button
          class="po-md-4"
          p-label="Send"
          p-kind="primary"
          [p-disabled]="formEmail.form.invalid"
          (p-click)="send()"
        >
        </po-button>
        <po-button class="po-md-4" p-label="Reset" [p-disabled]="formEmail.form.invalid" (p-click)="reset()">
        </po-button>
      </div>
    </form>
  </po-widget>
</div>

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
    <po-info class="po-md-12" p-label="subject:" [p-value]="subject"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-textarea
      class="po-md-12"
      name="text"
      [(ngModel)]="emailText"
      p-label="E-mail"
      p-readonly
      p-rows="6"
      ngDefaultControl
    >
    </po-textarea>
  </div>
</po-modal>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-popup-email/sample-po-popup-email.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoPopupAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popup-email',
  templateUrl: './sample-po-popup-email.component.html',
  styles: [
    \`
      .sample-logo-po {
        height: 15%;
        padding-top: 2.5%;
      }

      .sample-popup-header-template {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        color: #0c9abe;
        padding-bottom: 5%;
        padding-left: 25%;
        padding-top: 5%;
      }
    \`
  ],
  standalone: false
})
export class SamplePoPopupEmailComponent implements OnInit {
  @ViewChild('formEmail', { static: true }) formEmail: UntypedFormControl;

  @ViewChild('target', { read: ElementRef, static: true }) targetRef: ElementRef;

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  cc: string;
  emailText: string;
  from: string;
  popupActions: Array<PoPopupAction>;
  primaryAction: PoModalAction;
  subject: string;
  to: string;

  ngOnInit() {
    this.popupActions = [
      { icon: 'an an-plus', label: 'Upper Text', type: 'default', action: this.upper.bind(this) },
      { icon: 'an an-minus', label: 'Lower Text', type: 'default', action: this.lower.bind(this) },
      { icon: 'an an-x', label: 'Clear', type: 'danger', action: this.clear.bind(this), separator: true }
    ];

    this.primaryAction = {
      label: 'Confirmar',
      action: () => {
        this.poModal.close();
        this.reset();
      }
    };
  }

  send() {
    this.poModal.open();
  }

  reset() {
    this.formEmail.reset();
  }

  private clear() {
    this.emailText = undefined;
  }

  private lower() {
    this.emailText = this.emailText && this.emailText.toLowerCase();
  }

  private upper() {
    this.emailText = this.emailText && this.emailText.toUpperCase();
  }
}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-popup-email"),e(),l(23,"hr")),p&2&&(m(5),V("po-icon "+n.sampleCodeButtonIcon),m(),L(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",w(4,We,n.hideSampleCodeTabs)))},dependencies:[O,M,_,T,Se],encapsulation:2})}return a})();var xe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-popup-doc"]],standalone:!1,decls:855,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPopupAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string[]"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(p,n){p&1&&(o(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoPopupModule } from '@po-ui/ng-components';"),e()(),o(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente po-popup."),e()(),o(7,"h3",3),t(8,"Componente"),e(),o(9,"h4",4)(10,"code",5),t(11,"PoPopupComponent"),e()(),o(12,"div",2)(13,"p"),t(14,"O componente "),o(15,"code"),t(16,"po-popup"),e(),t(17,` \xE9 um container pequeno recomendado para a\xE7\xF5es de navega\xE7\xE3o:
Ele abre sobreposto aos outros componentes.`),e(),o(18,"p"),t(19,"\xC9 poss\xEDvel escolher as posi\xE7\xF5es do "),o(20,"code"),t(21,"po-popup"),e(),t(22," em rela\xE7\xE3o ao componente alvo, para isto veja a propriedade "),o(23,"code"),t(24,"p-position"),e(),t(25,"."),e(),o(26,"p"),t(27,"Tamb\xE9m \xE9 poss\xEDvel informar um "),o(28,"em"),t(29,"template"),e(),o(30,"em"),t(31,"header"),e(),t(32," para o "),o(33,"code"),t(34,"po-popup"),e(),t(35,`, que ser\xE1 exibido acima das a\xE7\xF5es.
Para funcionar corretamente \xE9 preciso adicionar a propriedade `),o(36,"code"),t(37,"p-popup-header-template"),e(),t(38," no elemento que servir\xE1 de template, por exemplo:"),e(),o(39,"pre")(40,"code"),t(41,`<po-popup [p-target]="target">
  <div p-popup-header-template>
    <div>
      Dev PO
    </div>
    <div>
      dev.po@po-ui.com.br
    </div>
  </div>
</po-popup >
`),e()(),o(42,"h4"),t(43,"Tokens customiz\xE1veis"),e(),o(44,"p"),t(45,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),o(46,"blockquote")(47,"p"),t(48,"Para maiores informa\xE7\xF5es, acesse o guia "),o(49,"a",6),t(50,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(51,"."),e()(),o(52,"table")(53,"thead")(54,"tr")(55,"th"),t(56,"Propriedade"),e(),o(57,"th"),t(58,"Descri\xE7\xE3o"),e(),o(59,"th"),t(60,"Valor Padr\xE3o"),e()()(),o(61,"tbody")(62,"tr")(63,"td")(64,"strong"),t(65,"Default Values"),e()(),l(66,"td")(67,"td"),e(),o(68,"tr")(69,"td")(70,"code"),t(71,"--border-radius"),e()(),o(72,"td"),t(73,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),o(74,"td")(75,"code"),t(76,"var(--border-radius-md)"),e()()(),o(77,"tr")(78,"td")(79,"code"),t(80,"--border-width"),e()(),o(81,"td"),t(82,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),e(),o(83,"td")(84,"code"),t(85,"var(--border-width-sm)"),e()()(),o(86,"tr")(87,"td")(88,"code"),t(89,"--border-color"),e()(),o(90,"td"),t(91,"Cor da borda"),e(),o(92,"td")(93,"code"),t(94,"var(--color-neutral-light-20)"),e()()(),o(95,"tr")(96,"td")(97,"code"),t(98,"--background"),e()(),o(99,"td"),t(100,"Cor do background"),e(),o(101,"td")(102,"code"),t(103,"var(--color-neutral-light-00)"),e()()(),o(104,"tr")(105,"td")(106,"code"),t(107,"--shadow"),e()(),o(108,"td"),t(109,"Cont\xE9m o valor da sombra do elemento"),e(),o(110,"td")(111,"code"),t(112,"var(--shadow-md)"),e()()(),o(113,"tr")(114,"td")(115,"strong"),t(116,"po-popup po-item-list"),e()(),l(117,"td")(118,"td"),e(),o(119,"tr")(120,"td")(121,"code"),t(122,"--font-family"),e()(),o(123,"td"),t(124,"Fam\xEDlia tipogr\xE1fica usada"),e(),o(125,"td")(126,"code"),t(127,"var(--font-family-theme)"),e()()(),o(128,"tr")(129,"td")(130,"code"),t(131,"--font-size"),e()(),o(132,"td"),t(133,"Tamanho da fonte"),e(),o(134,"td")(135,"code"),t(136,"var(--font-size-default)"),e()()(),o(137,"tr")(138,"td")(139,"code"),t(140,"--line-height"),e()(),o(141,"td"),t(142,"Tamanho da label"),e(),o(143,"td")(144,"code"),t(145,"var(--line-height-md)"),e()()(),o(146,"tr")(147,"td")(148,"strong"),t(149,"Action"),e()(),l(150,"td")(151,"td"),e(),o(152,"tr")(153,"td")(154,"code"),t(155,"--font-weight"),e()(),o(156,"td"),t(157,"Peso da fonte"),e(),o(158,"td")(159,"code"),t(160,"var(--font-weight-bold)"),e()()(),o(161,"tr")(162,"td")(163,"code"),t(164,"--color"),e()(),o(165,"td"),t(166,"Cor principal do popup"),e(),o(167,"td")(168,"code"),t(169,"var(--color-action-default)"),e()()(),o(170,"tr")(171,"td")(172,"strong"),t(173,"Hover"),e()(),l(174,"td")(175,"td"),e(),o(176,"tr")(177,"td")(178,"code"),t(179,"--color-hover"),e()(),o(180,"td"),t(181,"Cor principal no estado hover"),e(),o(182,"td")(183,"code"),t(184,"var(--color-brand-01-darkest)"),e()()(),o(185,"tr")(186,"td")(187,"code"),t(188,"--background-hover"),e()(),o(189,"td"),t(190,"Cor de background no estado hover"),e(),o(191,"td")(192,"code"),t(193,"var(--color-brand-01-lighter)"),e()()(),o(194,"tr")(195,"td")(196,"strong"),t(197,"Focused"),e()(),l(198,"td")(199,"td"),e(),o(200,"tr")(201,"td")(202,"code"),t(203,"--outline-color-focused"),e()(),o(204,"td"),t(205,"Cor do outline do estado de focus"),e(),o(206,"td")(207,"code"),t(208,"var(--color-action-focus)"),e()()(),o(209,"tr")(210,"td")(211,"strong"),t(212,"Pressed"),e()(),l(213,"td")(214,"td"),e(),o(215,"tr")(216,"td")(217,"code"),t(218,"--background-pressed"),e()(),o(219,"td"),t(220,"Cor de background no estado de pressionado\xA0"),e(),o(221,"td")(222,"code"),t(223,"var(--color-brand-01-light)"),e()()(),o(224,"tr")(225,"td")(226,"strong"),t(227,"Disabled"),e()(),l(228,"td")(229,"td"),e(),o(230,"tr")(231,"td")(232,"code"),t(233,"--color-disabled"),e()(),o(234,"td"),t(235,"Cor principal no estado disabled"),e(),o(236,"td")(237,"code"),t(238,"var(--color-action-disabled)"),e()()(),o(239,"tr")(240,"td")(241,"strong"),t(242,"Selected"),e()(),l(243,"td")(244,"td"),e(),o(245,"tr")(246,"td")(247,"code"),t(248,"--font-weight-selected"),e()(),o(249,"td"),t(250,"Peso da fonte no estado selecionado"),e(),o(251,"td")(252,"code"),t(253,"var(--font-weight-bold)"),e()()(),o(254,"tr")(255,"td")(256,"code"),t(257,"--background-selected"),e()(),o(258,"td"),t(259,"Cor de background no estado selecionado"),e(),o(260,"td")(261,"code"),t(262,"var(--color-brand-01-lightest)"),e()()(),o(263,"tr")(264,"td")(265,"strong"),t(266,"Option e check"),e()(),l(267,"td")(268,"td"),e(),o(269,"tr")(270,"td")(271,"code"),t(272,"--color-option"),e()(),o(273,"td"),t(274,"Cor principa no estado Option/check"),e(),o(275,"td")(276,"code"),t(277,"var(--color-neutral-dark-90)"),e()()()()()(),o(278,"div",7)(279,"h4",8),t(280,"Seletor"),e(),o(281,"pre",9),t(282,`<po-popup
    p-actions="PoPopupAction[]"
    p-custom-positions="string[]"
    p-hide-arrow="boolean"
    p-position="string"
    p-size="string"
    p-target="any" >
</po-popup>
`),e()(),o(283,"h4",10),t(284,"Propriedades"),e(),o(285,"table",11)(286,"tr",12)(287,"th",13),t(288,"Nome"),e(),o(289,"th",13),t(290,"Tipo"),e(),o(291,"th",13),t(292,"Padr\xE3o"),e(),o(293,"th",13),t(294,"Descri\xE7\xE3o"),e()(),o(295,"tr",14)(296,"td",15)(297,"div",16)(298,"span",17),t(299," p-actions"),l(300,"br"),e()()(),o(301,"td",18)(302,"code",19),t(303,"PoPopupAction[]"),e()(),o(304,"td",20),t(305,"-"),e(),o(306,"td",21)(307,"p"),t(308,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),e()()(),o(309,"tr",14)(310,"td",15)(311,"div",16)(312,"span",17),t(313," p-custom-positions"),l(314,"br"),e()()(),o(315,"td",18)(316,"code",22),t(317,"string[]"),e()(),o(318,"td",20),t(319,"-"),e(),o(320,"td",21)(321,"em")(322,"strong"),t(323,"(opcional)"),e()(),o(324,"p"),t(325,"Define as posi\xE7\xF5es e a sequ\xEAncia que o "),o(326,"code"),t(327,"po-popup"),e(),t(328,` poder\xE1 rotacionar. A sequ\xEAncia ser\xE1 definida pela ordem passada
no `),o(329,"em"),t(330,"array"),e(),t(331,". Caso n\xE3o seja definido, o "),o(332,"code"),t(333,"po-popup"),e(),t(334," ir\xE1 rotacionar em todas as posi\xE7\xF5es v\xE1lidas."),e(),o(335,"blockquote")(336,"p"),t(337,"O componente sempre ir\xE1 abrir na posi\xE7\xE3o definida no "),o(338,"code"),t(339,"p-position"),e(),t(340,` e caso n\xE3o caiba na posi\xE7\xE3o definida o mesmo
ir\xE1 rotacionar seguindo a ordem definida pelo `),o(341,"code"),t(342,"p-custom-position"),e(),t(343,"."),e()(),o(344,"p"),t(345,"Posi\xE7\xF5es v\xE1lidas:"),e(),o(346,"ul")(347,"li")(348,"code"),t(349,"right"),e(),t(350,": Posiciona o po-popup no lado direito do componente alvo."),e(),o(351,"li")(352,"code"),t(353,"right-bottom"),e(),t(354,": Posiciona o po-popup no lado direito inferior do componente alvo."),e(),o(355,"li")(356,"code"),t(357,"right-top"),e(),t(358,": Posiciona o po-popup no lado direito superior do componente alvo."),e(),o(359,"li")(360,"code"),t(361,"bottom"),e(),t(362,": Posiciona o po-popup abaixo do componente alvo."),e(),o(363,"li")(364,"code"),t(365,"bottom-left"),e(),t(366,": Posiciona o po-popup abaixo e \xE0 esquerda do componente alvo."),e(),o(367,"li")(368,"code"),t(369,"bottom-right"),e(),t(370,": Posiciona o po-popup abaixo e \xE0 direita do componente alvo."),e(),o(371,"li")(372,"code"),t(373,"left"),e(),t(374,": Posiciona o po-popup no lado esquerdo do componente alvo."),e(),o(375,"li")(376,"code"),t(377,"left-top"),e(),t(378,": Posiciona o po-popup no lado esquerdo superior do componente alvo."),e(),o(379,"li")(380,"code"),t(381,"left-bottom"),e(),t(382,": Posiciona o po-popup no lado esquerdo inferior do componente alvo."),e(),o(383,"li")(384,"code"),t(385,"top"),e(),t(386,": Posiciona o po-popup acima do componente alvo."),e(),o(387,"li")(388,"code"),t(389,"top-right"),e(),t(390,": Posiciona o po-popup acima e \xE0 direita do componente alvo."),e(),o(391,"li")(392,"code"),t(393,"top-left"),e(),t(394,": Posiciona o po-popup acima e \xE0 esquerda do componente alvo."),e()()()(),o(395,"tr",14)(396,"td",15)(397,"div",16)(398,"span",17),t(399," p-hide-arrow"),l(400,"br"),e()()(),o(401,"td",18)(402,"code",23),t(403,"boolean"),e()(),o(404,"td",20)(405,"p")(406,"code"),t(407,"false"),e()()(),o(408,"td",21)(409,"em")(410,"strong"),t(411,"(opcional)"),e()(),o(412,"p"),t(413,"Oculta a seta do componente "),o(414,"em"),t(415,"popup"),e(),t(416,"."),e()()(),o(417,"tr",14)(418,"td",15)(419,"div",16)(420,"span",17),t(421," p-position"),l(422,"br"),e()()(),o(423,"td",18)(424,"code",24),t(425,"string"),e()(),o(426,"td",20)(427,"p")(428,"code"),t(429,"bottom-left"),e()()(),o(430,"td",21)(431,"em")(432,"strong"),t(433,"(opcional)"),e()(),o(434,"p"),t(435,"Define a posi\xE7\xE3o inicial que o "),o(436,"code"),t(437,"po-popup"),e(),t(438,` abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o `),o(439,"code"),t(440,"bottom-left"),e(),t(441,` (abaixo e a esquerda), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),e(),o(442,"blockquote")(443,"p"),t(444,"Caso seja definido um "),o(445,"code"),t(446,"p-custom-positions"),e(),t(447," o componente ir\xE1 abrir na posi\xE7\xE3o definida na propriedade "),o(448,"code"),t(449,"p-position"),e(),t(450,`
e caso n\xE3o caiba na posi\xE7\xE3o inicial ele ir\xE1 rotacionar seguindo a ordem de posi\xE7\xF5es definidas no `),o(451,"code"),t(452,"p-custom-positions"),e(),t(453,"."),e()(),o(454,"p"),t(455,"Posi\xE7\xF5es v\xE1lidas:"),e(),o(456,"ul")(457,"li")(458,"code"),t(459,"right"),e(),t(460,": Posiciona o po-popup no lado direito do componente alvo."),e(),o(461,"li")(462,"code"),t(463,"right-bottom"),e(),t(464,": Posiciona o po-popup no lado direito inferior do componente alvo."),e(),o(465,"li")(466,"code"),t(467,"right-top"),e(),t(468,": Posiciona o po-popup no lado direito superior do componente alvo."),e(),o(469,"li")(470,"code"),t(471,"bottom"),e(),t(472,": Posiciona o po-popup abaixo do componente alvo."),e(),o(473,"li")(474,"code"),t(475,"bottom-left"),e(),t(476,": Posiciona o po-popup abaixo e \xE0 esquerda do componente alvo."),e(),o(477,"li")(478,"code"),t(479,"bottom-right"),e(),t(480,": Posiciona o po-popup abaixo e \xE0 direita do componente alvo."),e(),o(481,"li")(482,"code"),t(483,"left"),e(),t(484,": Posiciona o po-popup no lado esquerdo do componente alvo."),e(),o(485,"li")(486,"code"),t(487,"left-top"),e(),t(488,": Posiciona o po-popup no lado esquerdo superior do componente alvo."),e(),o(489,"li")(490,"code"),t(491,"left-bottom"),e(),t(492,": Posiciona o po-popup no lado esquerdo inferior do componente alvo."),e(),o(493,"li")(494,"code"),t(495,"top"),e(),t(496,": Posiciona o po-popup acima do componente alvo."),e(),o(497,"li")(498,"code"),t(499,"top-right"),e(),t(500,": Posiciona o po-popup acima e \xE0 direita do componente alvo."),e(),o(501,"li")(502,"code"),t(503,"top-left"),e(),t(504,": Posiciona o po-popup acima e \xE0 esquerda do componente alvo."),e()()()(),o(505,"tr",14)(506,"td",15)(507,"div",16)(508,"span",17),t(509," p-size"),l(510,"br"),e()()(),o(511,"td",18)(512,"code",24),t(513,"string"),e()(),o(514,"td",20)(515,"p")(516,"code"),t(517,"medium"),e()()(),o(518,"td",21)(519,"em")(520,"strong"),t(521,"(opcional)"),e()(),o(522,"p"),t(523,"Define o tamanho dos componentes de formul\xE1rio no template:"),e(),o(524,"ul")(525,"li")(526,"code"),t(527,"small"),e(),t(528,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),o(529,"li")(530,"code"),t(531,"medium"),e(),t(532,": aplica a medida medium de cada componente."),e()(),o(533,"blockquote")(534,"p"),t(535,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(536,"code"),t(537,"medium"),e(),t(538,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(539,"a",25),t(540,"po-theme"),e(),t(541,"."),e()()()(),o(542,"tr",14)(543,"td",15)(544,"div",16)(545,"span",17),t(546," p-target"),l(547,"br"),e()()(),o(548,"td",18)(549,"code",26),t(550,"any"),e()(),o(551,"td",20),t(552,"-"),e(),o(553,"td",21)(554,"p"),t(555,"Para utilizar o "),o(556,"code"),t(557,"po-popup"),e(),t(558,` deve-se colocar uma vari\xE1vel local no componente que disparar\xE1 o evento
de abertura no mesmo e com isso, invocar\xE1 a fun\xE7\xE3o `),o(559,"code"),t(560,"toggle"),e(),t(561,", por exemplo:"),e(),o(562,"pre")(563,"code"),t(564,`<span #icon class="an an-credit-card" (click)="popup.toggle()">
  Credit Actions
</span>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="icon">
</po-popup>
`),e()(),o(565,"p"),t(566,"Caso o elemento alvo for um componente, ser\xE1 preciso obter o "),o(567,"code"),t(568,"ElementRef"),e(),t(569," do mesmo e pass\xE1-lo \xE0 propriedade, por exemplo:"),e(),o(570,"pre")(571,"code"),t(572,`// component.html

<po-button #poButton
  p-label="Open Popover"
  (p-click)="popup.toggle()">
</po-button>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="poButtonRef">
</po-popup>

// component.ts

@ViewChild('poButton', { read: ElementRef }) poButtonRef: ElementRef;
`),e()()()()(),o(573,"h3",10),t(574,"M\xE9todos"),e(),o(575,"table",27)(576,"tr",14)(577,"th",28)(578,"div",16)(579,"h4")(580,"span",17),t(581," close "),e()()()()(),o(582,"tr",21)(583,"td",21)(584,"p"),t(585,"Fecha o componente "),o(586,"em"),t(587,"popup"),e(),t(588,"."),e(),o(589,"blockquote")(590,"p"),t(591,"Por padr\xE3o, este comportamento \xE9 acionado somente ao clicar fora do componente ou em determinada a\xE7\xE3o / url."),e()()()()(),l(592,"br"),o(593,"table",27)(594,"tr",14)(595,"th",28)(596,"div",16)(597,"h4")(598,"span",17),t(599," open "),e()()()()(),o(600,"tr",21)(601,"td",21)(602,"p"),t(603,"Abre o componente "),o(604,"em"),t(605,"popup"),e(),t(606,"."),e(),o(607,"blockquote")(608,"p"),t(609,"\xC9 poss\xEDvel informar um par\xE2metro que ser\xE1 utilizado na execu\xE7\xE3o da a\xE7\xE3o do item e na fun\xE7\xE3o de desabilitar."),e()()()()(),l(610,"br"),o(611,"table",27)(612,"tr",14)(613,"th",28)(614,"div",16)(615,"h4")(616,"span",17),t(617," toggle "),e()()()()(),o(618,"tr",21)(619,"td",21)(620,"p"),t(621,"Respons\xE1vel por abrir e fechar o "),o(622,"em"),t(623,"popup"),e(),t(624,"."),e(),o(625,"p"),t(626,"Quando disparado abrir\xE1 o "),o(627,"em"),t(628,"popup"),e(),t(629," e caso o mesmo j\xE1 estiver aberto e possuir o mesmo "),o(630,"code"),t(631,"target"),e(),t(632," ir\xE1 fecha-lo."),e(),o(633,"p"),t(634,"\xC9 poss\xEDvel informar um par\xE2metro que ser\xE1 utilizado na execu\xE7\xE3o da a\xE7\xE3o do item e na fun\xE7\xE3o de desabilitar."),e()()()(),l(635,"br"),o(636,"h3"),t(637,"Interfaces"),e(),o(638,"h4",29)(639,"code",5),t(640,"PoPopupAction"),e()(),o(641,"div",2)(642,"p"),t(643,"Interface para lista de a\xE7\xF5es do componente."),e()(),o(644,"h4",10),t(645,"Propriedades"),e(),o(646,"table",11)(647,"tr",12)(648,"th",13),t(649,"Nome"),e(),o(650,"th",13),t(651,"Tipo"),e(),o(652,"th",13),t(653,"Descri\xE7\xE3o"),e()(),o(654,"tr",14)(655,"td",15)(656,"div",16)(657,"span",17),t(658," action"),l(659,"br"),e()()(),o(660,"td",18)(661,"code",30),t(662,"Function"),e()(),o(663,"td",21)(664,"em")(665,"strong"),t(666,"(opcional)"),e()(),o(667,"p"),t(668,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),e(),o(669,"blockquote")(670,"p"),t(671,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),o(672,"em"),t(673,"bind"),e(),t(674,"."),e()(),o(675,"p"),t(676,"Exemplo: "),o(677,"code"),t(678,"action: this.myFunction.bind(this)"),e()()()(),o(679,"tr",14)(680,"td",15)(681,"div",16)(682,"span",17),t(683," disabled"),l(684,"br"),e()()(),o(685,"td",18)(686,"code",23),t(687,"boolean "),e(),o(688,"code",30),t(689," Function"),e()(),o(690,"td",21)(691,"em")(692,"strong"),t(693,"(opcional)"),e()(),o(694,"p"),t(695,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),e(),o(696,"p"),t(697,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),e()()(),o(698,"tr",14)(699,"td",15)(700,"div",16)(701,"span",17),t(702," icon"),l(703,"br"),e()()(),o(704,"td",18)(705,"code",24),t(706,"string "),e(),o(707,"code",31),t(708," TemplateRef<void>"),e()(),o(709,"td",21)(710,"em")(711,"strong"),t(712,"(opcional)"),e()(),o(713,"p"),t(714,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),e(),o(715,"p"),t(716,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),o(717,"a",32),t(718,"Biblioteca de \xEDcones"),e(),t(719,". conforme exemplo abaixo:"),e(),o(720,"pre")(721,"code"),t(722,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),e()(),o(723,"p"),t(724,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),e(),o(725,"pre")(726,"code"),t(727,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),e()(),o(728,"p"),t(729,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),o(730,"code"),t(731,"TemplateRef"),e(),t(732,`, conforme exemplo abaixo:
component.html:`),e(),o(733,"pre")(734,"code"),t(735,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),e()(),o(736,"p"),t(737,"component.ts:"),e(),o(738,"pre")(739,"code"),t(740,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),e()()()(),o(741,"tr",14)(742,"td",15)(743,"div",16)(744,"span",17),t(745," label"),l(746,"br"),e()()(),o(747,"td",18)(748,"code",24),t(749,"string"),e()(),o(750,"td",21)(751,"p"),t(752,"R\xF3tulo da a\xE7\xE3o."),e()()(),o(753,"tr",14)(754,"td",15)(755,"div",16)(756,"span",17),t(757," selected"),l(758,"br"),e()()(),o(759,"td",18)(760,"code",23),t(761,"boolean"),e()(),o(762,"td",21)(763,"em")(764,"strong"),t(765,"(opcional)"),e()(),o(766,"p"),t(767,"Define se a a\xE7\xE3o est\xE1 selecionada."),e()()(),o(768,"tr",14)(769,"td",15)(770,"div",16)(771,"span",17),t(772," separator"),l(773,"br"),e()()(),o(774,"td",18)(775,"code",23),t(776,"boolean"),e()(),o(777,"td",21)(778,"em")(779,"strong"),t(780,"(opcional)"),e()(),o(781,"p"),t(782,"Atribui uma linha separadora acima do item."),e()()(),o(783,"tr",14)(784,"td",15)(785,"div",16)(786,"span",17),t(787," type"),l(788,"br"),e()()(),o(789,"td",18)(790,"code",24),t(791,"string"),e()(),o(792,"td",21)(793,"em")(794,"strong"),t(795,"(opcional)"),e()(),o(796,"p"),t(797,"Define a cor do item, sendo "),o(798,"code"),t(799,"default"),e(),t(800," o padr\xE3o."),e(),o(801,"p"),t(802,"Valores v\xE1lidos:"),e(),o(803,"ul")(804,"li")(805,"code"),t(806,"default"),e()(),o(807,"li")(808,"code"),t(809,"danger"),e(),t(810," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),e()()()(),o(811,"tr",14)(812,"td",15)(813,"div",16)(814,"span",17),t(815," url"),l(816,"br"),e()()(),o(817,"td",18)(818,"code",24),t(819,"string"),e()(),o(820,"td",21)(821,"em")(822,"strong"),t(823,"(opcional)"),e()(),o(824,"p"),t(825,"URL utilizada no redirecionamento das p\xE1ginas."),e()()(),o(826,"tr",14)(827,"td",15)(828,"div",16)(829,"span",17),t(830," visible"),l(831,"br"),e()()(),o(832,"td",18)(833,"code",23),t(834,"boolean "),e(),o(835,"code",30),t(836," Function"),e()(),o(837,"td",21)(838,"em")(839,"strong"),t(840,"(opcional)"),e()(),o(841,"p"),t(842,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),e(),o(843,"blockquote")(844,"p"),t(845,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),e()(),o(846,"p"),t(847,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),e(),o(848,"ul")(849,"li")(850,"p"),t(851,"Fun\xE7\xE3o que deve retornar um booleano."),e()(),o(852,"li")(853,"p"),t(854,"Informar diretamente um valor booleano."),e()()()()()()())},dependencies:[M],encapsulation:2})}return a})();var Ce=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(A(oe),A(ne))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Popup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return n.changeTab("doc")}),l(3,"sample-po-popup-doc"),e(),o(4,"po-tab",3),g("p-click",function(){return n.changeTab("web")}),l(5,"sample-po-popup-basic-view")(6,"sample-po-popup-labs-view")(7,"sample-po-popup-email-view"),e()()()),p&2&&(s("p-actions",n.actions),m(2),s("p-active",n.activeTab==="doc"),m(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ce,_,T,be,he,ve,xe],encapsulation:2})}return a})();var Ne=[{path:"",component:Ce}],Pe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=B({type:a});static \u0275inj=F({imports:[G.forChild(Ne),G]})}return a})();var yt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=B({type:a});static \u0275inj=F({imports:[Ee,Pe]})}return a})();export{yt as DocPoPopupModule};
