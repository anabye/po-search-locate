import{o as B,p as ne}from"./chunk-R3BKLGLC.js";import{Ab as P,Db as te,F as Y,Ga as X,Ra as Z,Sa as $,T as z,X as N,Y as _,ja as K,nb as ee,ta as Q,zb as C}from"./chunk-TUTTJOS2.js";import{$a as f,Ac as R,Ba as y,Ea as n,Fa as e,Ga as l,Ka as q,La as c,M as k,Nc as U,Pc as J,Rc as V,T as h,U as S,Wa as A,Xa as t,Za as E,ab as x,bb as v,eb as w,ha as p,ia as M,oa as d,pa as D,ub as T,wc as I,xc as H,ya as s,yc as j,za as W,zc as L}from"./chunk-MIQUIDUB.js";var oe=(()=>{class i{buttons=[{label:"Button 1",action:this.action.bind(this)},{label:"Button 2",action:this.action.bind(this)}];action(r){alert(`${r.label}`)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-button-group-basic"]],standalone:!1,decls:1,vars:1,consts:[[1,"po-md-12",3,"p-buttons"]],template:function(a,o){a&1&&l(0,"po-button-group",0),a&2&&s("p-buttons",o.buttons)},dependencies:[_],encapsulation:2})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),ie=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-button-group-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Button Group Basic"),e(),n(4,"a",2),c("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-button-group-basic/sample-po-button-group-basic.component.html"),e(),n(13,"pre",7),t(14,`<po-button-group class="po-md-12" [p-buttons]="buttons"> </po-button-group>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-button-group-basic/sample-po-button-group-basic.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-basic',
  templateUrl: './sample-po-button-group-basic.component.html',
  standalone: false
})
export class SamplePoButtonGroupBasicComponent {
  buttons: Array<PoButtonGroupItem> = [
    { label: 'Button 1', action: this.action.bind(this) },
    { label: 'Button 2', action: this.action.bind(this) }
  ];

  action(button) {
    alert(\`\${button.label}\`);
  }
}
`),e()()()()(),n(21,"div",10),l(22,"sample-po-button-group-basic"),e(),l(23,"hr")),a&2&&(p(5),y("po-icon "+o.sampleCodeButtonIcon),p(),E(" ",o.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,ge,o.hideSampleCodeTabs)))},dependencies:[T,B,C,P,oe],encapsulation:2})}return i})();var ae=(()=>{class i{poNotification;button;buttons;size;toggle;iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"fa fa-podcast",value:"fa fa-podcast"},{label:"fa fa-calculator",value:"fa fa-calculator"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];toggleOptions=[{label:"none",value:N.None},{label:"single",value:N.Single},{label:"multiple",value:N.Multiple}];constructor(r){this.poNotification=r}ngOnInit(){this.restore()}action(r){this.poNotification.success(r.action)}addButton(){this.buttons.push({icon:this.button.icon,label:this.button.label,action:this.action.bind(this,this.button),disabled:this.button.disabled,tooltip:this.button.tooltip}),this.button={}}restore(){this.size="medium",this.button={},this.buttons=[]}static \u0275fac=function(a){return new(a||i)(M(z))};static \u0275cmp=d({type:i,selectors:[["sample-po-button-group-labs"]],standalone:!1,decls:21,vars:14,consts:[["fButtons","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-buttons","p-toggle","p-size"],["name","buttonLabel","p-label","Button label",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonAction","p-label","Button action","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonTooltip","p-label","Button tooltip",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","buttonIcon","p-columns","4","p-label","Button Icon",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","buttonDisabled","p-label","Button disabled",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add button",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","toggle","p-label","Toggle",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let u=q();n(0,"div",2),l(1,"po-button-group",3),e(),l(2,"hr"),n(3,"form",null,0)(5,"div",2)(6,"po-input",4),v("ngModelChange",function(m){return h(u),x(o.button.label,m)||(o.button.label=m),S(m)}),e(),n(7,"po-input",5),v("ngModelChange",function(m){return h(u),x(o.button.action,m)||(o.button.action=m),S(m)}),e(),n(8,"po-input",6),v("ngModelChange",function(m){return h(u),x(o.button.tooltip,m)||(o.button.tooltip=m),S(m)}),e(),n(9,"po-radio-group",7),v("ngModelChange",function(m){return h(u),x(o.button.icon,m)||(o.button.icon=m),S(m)}),e(),n(10,"po-switch",8),v("ngModelChange",function(m){return h(u),x(o.button.disabled,m)||(o.button.disabled=m),S(m)}),e()(),n(11,"div",2)(12,"po-button",9),c("p-click",function(){h(u);let m=A(4);return o.addButton(),S(m.reset())}),e()()(),l(13,"hr"),n(14,"form",null,1)(16,"div",2)(17,"po-select",10),v("ngModelChange",function(m){return h(u),x(o.toggle,m)||(o.toggle=m),S(m)}),e(),n(18,"po-radio-group",11),v("ngModelChange",function(m){return h(u),x(o.size,m)||(o.size=m),S(m)}),e()(),n(19,"div",2)(20,"po-button",12),c("p-click",function(){h(u);let m=A(4);return A(15).reset(),m.reset(),S(o.restore())}),e()()()}if(a&2){let u=A(4);p(),s("p-buttons",o.buttons)("p-toggle",o.toggle)("p-size",o.size),p(5),f("ngModel",o.button.label),p(),f("ngModel",o.button.action),p(),f("ngModel",o.button.tooltip),p(),f("ngModel",o.button.icon),s("p-options",o.iconsOptions),p(),f("ngModel",o.button.disabled),p(2),s("p-disabled",u.invalid),p(5),f("ngModel",o.toggle),s("p-options",o.toggleOptions),p(),f("ngModel",o.size),s("p-options",o.sizeOptions)}},dependencies:[R,I,H,L,j,Y,_,K,X,Z,Q],encapsulation:2})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-button-group-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Button Group Labs"),e(),n(4,"a",2),c("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-button-group-labs/sample-po-button-group-labs.component.html"),e(),n(13,"pre",7),t(14,`<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="buttons" [p-toggle]="toggle" [p-size]="size"> </po-button-group>
</div>

<hr />

<form #fButtons="ngForm">
  <div class="po-row">
    <po-input class="po-lg-4 po-md-6" name="buttonLabel" [(ngModel)]="button.label" p-label="Button label"> </po-input>

    <po-input
      class="po-lg-4 po-md-6"
      name="buttonAction"
      [(ngModel)]="button.action"
      p-label="Button action"
      p-required
    >
    </po-input>

    <po-input class="po-lg-4 po-md-6" name="buttonTooltip" [(ngModel)]="button.tooltip" p-label="Button tooltip">
    </po-input>

    <po-radio-group
      class="po-lg-12"
      name="buttonIcon"
      [(ngModel)]="button.icon"
      p-columns="4"
      p-label="Button Icon"
      [p-options]="iconsOptions"
    >
    </po-radio-group>

    <po-switch class="po-lg-4 po-md-6" name="buttonDisabled" [(ngModel)]="button.disabled" p-label="Button disabled">
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-2 po-md-4"
      p-label="Add button"
      [p-disabled]="fButtons.invalid"
      (p-click)="addButton(); fButtons.reset()"
    >
    </po-button>
  </div>
</form>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-select
      class="po-lg-4 po-md-6"
      name="toggle"
      [(ngModel)]="toggle"
      p-label="Toggle"
      [p-options]="toggleOptions"
    ></po-select>

    <po-radio-group
      class="po-lg-12"
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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); fButtons.reset(); restore()">
    </po-button>
  </div>
</form>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-button-group-labs/sample-po-button-group-labs.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import {
  PoButtonGroupItem,
  PoButtonGroupToggle,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-labs',
  templateUrl: './sample-po-button-group-labs.component.html',
  standalone: false
})
export class SamplePoButtonGroupLabsComponent implements OnInit {
  button: any;
  buttons: Array<PoButtonGroupItem>;
  size: string;
  toggle: PoButtonGroupToggle;

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'fa fa-podcast', value: 'fa fa-podcast' },
    { label: 'fa fa-calculator', value: 'fa fa-calculator' }
  ];

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  readonly toggleOptions: Array<PoSelectOption> = [
    { label: 'none', value: PoButtonGroupToggle.None },
    { label: 'single', value: PoButtonGroupToggle.Single },
    { label: 'multiple', value: PoButtonGroupToggle.Multiple }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  action(button) {
    this.poNotification.success(button.action);
  }

  addButton() {
    this.buttons.push({
      icon: this.button.icon,
      label: this.button.label,
      action: this.action.bind(this, this.button),
      disabled: this.button.disabled,
      tooltip: this.button.tooltip
    });

    this.button = {};
  }

  restore() {
    this.size = 'medium';
    this.button = {};
    this.buttons = [];
  }
}
`),e()()()()(),n(21,"div",10),l(22,"sample-po-button-group-labs"),e(),l(23,"hr")),a&2&&(p(5),y("po-icon "+o.sampleCodeButtonIcon),p(),E(" ",o.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,fe,o.hideSampleCodeTabs)))},dependencies:[T,B,C,P,ae],encapsulation:2})}return i})();var re=(()=>{class i{poNotification;attendances=[{label:"Appointment",icon:"an an-calendar-dots",action:this.getPassword.bind(this)},{label:"Emergency",icon:"an an-syringe",action:this.getPassword.bind(this)},{label:"Exams",icon:"an an-flask",action:this.getPassword.bind(this)}];constructor(r){this.poNotification=r}getPassword(r){let a=this.randomPassword(),o=this.getTypeNotification(r.label);this.poNotification[o](`
      Type of attendance: ${r.label} -
      Your password: ${a}
    `)}getTypeNotification(r=""){switch(r){case"Emergency":return"error";case"Appointment":return"information";case"Exams":return"success"}}randomPassword(){return Math.random().toString().slice(2,5)}static \u0275fac=function(a){return new(a||i)(M(z))};static \u0275cmp=d({type:i,selectors:[["sample-po-button-group-attendance"]],standalone:!1,decls:8,vars:1,consts:[[1,"po-row"],[1,"po-md-12","po-font-title"],[1,"po-md-12","po-font-text","po-text-color-neutral-dark-40"],[1,"po-md-12",3,"p-buttons"]],template:function(a,o){a&1&&(n(0,"div",0)(1,"div",1),t(2,"Choose the type of attendance"),e(),n(3,"div",2),t(4,"Get your password"),e()(),l(5,"hr"),n(6,"div",0),l(7,"po-button-group",3),e()),a&2&&(p(7),s("p-buttons",o.attendances))},dependencies:[_],encapsulation:2})}return i})();var Ce=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-button-group-attendance-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Button Group - Attendance"),e(),n(4,"a",2),c("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.html"),e(),n(13,"pre",7),t(14,`<div class="po-row">
  <div class="po-md-12 po-font-title">Choose the type of attendance</div>
  <div class="po-md-12 po-font-text po-text-color-neutral-dark-40">Get your password</div>
</div>

<hr />

<div class="po-row">
  <po-button-group class="po-md-12" [p-buttons]="attendances"> </po-button-group>
</div>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-button-group-attendance/sample-po-button-group-attendance.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

import { PoButtonGroupItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-attendance',
  templateUrl: './sample-po-button-group-attendance.component.html',
  standalone: false
})
export class SamplePoButtonGroupAttendanceComponent {
  attendances: Array<PoButtonGroupItem> = [
    { label: 'Appointment', icon: 'an an-calendar-dots', action: this.getPassword.bind(this) },
    { label: 'Emergency', icon: 'an an-syringe', action: this.getPassword.bind(this) },
    { label: 'Exams', icon: 'an an-flask', action: this.getPassword.bind(this) }
  ];

  constructor(private poNotification: PoNotificationService) {}

  getPassword(attendance) {
    const password = this.randomPassword();
    const typeNotification = this.getTypeNotification(attendance.label);

    this.poNotification[typeNotification](\`
      Type of attendance: \${attendance.label} -
      Your password: \${password}
    \`);
  }

  getTypeNotification(label: string = ''): string {
    switch (label) {
      case 'Emergency':
        return 'error';
      case 'Appointment':
        return 'information';
      case 'Exams':
        return 'success';
    }
  }

  randomPassword() {
    return Math.random().toString().slice(2, 5);
  }
}
`),e()()()()(),n(21,"div",10),l(22,"sample-po-button-group-attendance"),e(),l(23,"hr")),a&2&&(p(5),y("po-icon "+o.sampleCodeButtonIcon),p(),E(" ",o.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,Ce,o.hideSampleCodeTabs)))},dependencies:[T,B,C,P,re],encapsulation:2})}return i})();var me=(()=>{class i{setBold;setItalic;setTextAlignment;setUnderline;textArea='"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';fontStyle=[{icon:"an an-text-b",action:()=>this.setBold=!this.setBold,tooltip:"Bold"},{icon:"an an-text-italic",action:()=>this.setItalic=!this.setItalic,tooltip:"Italic"},{icon:"an an-text-underline",action:()=>this.setUnderline=!this.setUnderline,tooltip:"Underline"}];textAlign=[{icon:"an an-text-align-left",selected:!0,action:()=>this.setTextAlignment="left",tooltip:"Left align"},{icon:"an an-text-align-center",action:()=>this.setTextAlignment="center",tooltip:"Center align"},{icon:"an an-text-align-right",action:()=>this.setTextAlignment="right",tooltip:"Right align"},{icon:"an an-text-align-justify",action:()=>this.setTextAlignment="justify",tooltip:"Justify"}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-button-group-post"]],standalone:!1,decls:12,vars:12,consts:[[1,"po-font-title","po-mb-2"],[1,"po-row"],[1,"po-md-4","po-lg-3"],["p-toggle","multiple",3,"p-buttons"],["p-toggle","single",3,"p-buttons"],["name","textArea","p-maxlength","400",1,"po-md-12",3,"ngModelChange","ngModel"],[1,"po-md-12","po-mt-3","po-font-text-large"]],template:function(a,o){a&1&&(n(0,"div",0),t(1,"Create New Post"),e(),n(2,"po-widget")(3,"div",1)(4,"div",2),l(5,"po-button-group",3),e(),n(6,"div",2),l(7,"po-button-group",4),e(),n(8,"po-textarea",5),v("ngModelChange",function(b){return x(o.textArea,b)||(o.textArea=b),b}),e(),l(9,"hr"),n(10,"div",6),t(11),e()()()),a&2&&(p(5),s("p-buttons",o.fontStyle),p(2),s("p-buttons",o.textAlign),p(),f("ngModel",o.textArea),p(2),W("font-weight",o.setBold?"bold":"normal")("font-style",o.setItalic?"italic":"normal")("text-decoration",o.setUnderline?"underline":"none")("text-align",o.setTextAlignment),p(),E(" ",o.textArea," "))},dependencies:[I,L,_,$,te],encapsulation:2})}return i})();var ye=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-button-group-post-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Button Group - Post"),e(),n(4,"a",2),c("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-button-group-post/sample-po-button-group-post.component.html"),e(),n(13,"pre",7),t(14,`<div class="po-font-title po-mb-2">Create New Post</div>
<po-widget>
  <div class="po-row">
    <div class="po-md-4 po-lg-3">
      <po-button-group p-toggle="multiple" [p-buttons]="fontStyle"> </po-button-group>
    </div>
    <div class="po-md-4 po-lg-3">
      <po-button-group p-toggle="single" [p-buttons]="textAlign"> </po-button-group>
    </div>
    <po-textarea class="po-md-12" name="textArea" [(ngModel)]="textArea" p-maxlength="400"> </po-textarea>
    <hr />
    <div
      class="po-md-12 po-mt-3 po-font-text-large"
      [style.font-weight]="setBold ? 'bold' : 'normal'"
      [style.font-style]="setItalic ? 'italic' : 'normal'"
      [style.text-decoration]="setUnderline ? 'underline' : 'none'"
      [style.text-align]="setTextAlignment"
    >
      { { textArea }}
    </div>
  </div>
</po-widget>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-button-group-post/sample-po-button-group-post.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

import { PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-group-post',
  templateUrl: './sample-po-button-group-post.component.html',
  standalone: false
})
export class SamplePoButtonGroupPostComponent {
  setBold: boolean;
  setItalic: boolean;
  setTextAlignment: string;
  setUnderline: boolean;
  textArea: string = '"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';

  fontStyle: Array<PoButtonGroupItem> = [
    { icon: 'an an-text-b', action: () => (this.setBold = !this.setBold), tooltip: 'Bold' },
    { icon: 'an an-text-italic', action: () => (this.setItalic = !this.setItalic), tooltip: 'Italic' },
    { icon: 'an an-text-underline', action: () => (this.setUnderline = !this.setUnderline), tooltip: 'Underline' }
  ];

  textAlign: Array<PoButtonGroupItem> = [
    {
      icon: 'an an-text-align-left',
      selected: true,
      action: () => (this.setTextAlignment = 'left'),
      tooltip: 'Left align'
    },
    { icon: 'an an-text-align-center', action: () => (this.setTextAlignment = 'center'), tooltip: 'Center align' },
    { icon: 'an an-text-align-right', action: () => (this.setTextAlignment = 'right'), tooltip: 'Right align' },
    { icon: 'an an-text-align-justify', action: () => (this.setTextAlignment = 'justify'), tooltip: 'Justify' }
  ];
}
`),e()()()()(),n(21,"div",10),l(22,"sample-po-button-group-post"),e(),l(23,"hr")),a&2&&(p(5),y("po-icon "+o.sampleCodeButtonIcon),p(),E(" ",o.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,ye,o.hideSampleCodeTabs)))},dependencies:[T,B,C,P,me],encapsulation:2})}return i})();var de=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["sample-po-button-group-doc"]],standalone:!1,decls:577,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoButtonGroupItem>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(a,o){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoButtonGroupModule } from '@po-ui/ng-components';"),e()(),n(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente po-button-group."),e()(),n(7,"h3",3),t(8,"Componente"),e(),n(9,"h4",4)(10,"code",5),t(11,"PoButtonGroupComponent"),e()(),n(12,"div",2)(13,"p"),t(14,"O componente "),n(15,"code"),t(16,"po-button-group"),e(),t(17,` \xE9 formado por um conjunto de bot\xF5es distribu\xEDdos horizontalmente.
Cada bot\xE3o do grupo \xE9 tratado de forma individual, recebendo assim um r\xF3tulo, uma a\xE7\xE3o bem como se dever\xE1 estar habilitado ou n\xE3o.`),e(),n(18,"p"),t(19,`Este componente al\xE9m de servir como um agrupador de bot\xF5es para a\xE7\xE3o, tamb\xE9m permite que sejam utilizados
para sele\xE7\xF5es multiplas e \xFAnicas.`),e(),n(20,"p"),t(21,`O grupo de bot\xF5es deve ser utilizado para organizar as a\xE7\xF5es de maneira uniforme e transmitir a ideia de que os bot\xF5es fazem
parte de um mesmo contexto.`),e(),n(22,"h4"),t(23,"Boas pr\xE1ticas"),e(),n(24,"ul")(25,"li"),t(26,"Evite usar o "),n(27,"code"),t(28,"po-button-group"),e(),t(29," com apenas 1 a\xE7\xE3o, para isso utilize o "),n(30,"code"),t(31,"po-button"),e(),t(32,"."),e(),n(33,"li"),t(34,"Procure utilizar no m\xE1ximo 3 a\xE7\xF5es para cada "),n(35,"code"),t(36,"po-button-group"),e(),t(37,"."),e()(),n(38,"blockquote")(39,"p"),t(40,"As recomenda\xE7\xF5es do "),n(41,"code"),t(42,"po-button"),e(),t(43," tamb\xE9m valem para o "),n(44,"code"),t(45,"po-button-group"),e(),t(46,"."),e()(),n(47,"h4"),t(48,"Tokens customiz\xE1veis"),e(),n(49,"p"),t(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),n(51,"blockquote")(52,"p"),t(53,"Para maiores informa\xE7\xF5es, acesse o guia "),n(54,"a",6),t(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(56,"."),e()(),n(57,"table")(58,"thead")(59,"tr")(60,"th"),t(61,"Propriedade"),e(),n(62,"th"),t(63,"Descri\xE7\xE3o"),e(),n(64,"th"),t(65,"Valor Padr\xE3o"),e()()(),n(66,"tbody")(67,"tr")(68,"td")(69,"strong"),t(70,"Default Values"),e()(),l(71,"td")(72,"td"),e(),n(73,"tr")(74,"td")(75,"code"),t(76,"--font-family"),e()(),n(77,"td"),t(78,"Fam\xEDlia tipogr\xE1fica usada"),e(),n(79,"td")(80,"code"),t(81,"var(--font-family-theme)"),e()()(),n(82,"tr")(83,"td")(84,"code"),t(85,"--font-size"),e()(),n(86,"td"),t(87,"Tamanho da fonte"),e(),n(88,"td")(89,"code"),t(90,"var(--font-size-default)"),e()()(),n(91,"tr")(92,"td")(93,"code"),t(94,"--font-weight"),e()(),n(95,"td"),t(96,"Peso da fonte"),e(),n(97,"td")(98,"code"),t(99,"var(--font-weight-bold)"),e()()(),n(100,"tr")(101,"td")(102,"code"),t(103,"--line-height"),e()(),n(104,"td"),t(105,"Tamanho da label"),e(),n(106,"td")(107,"code"),t(108,"var(--line-height-none)"),e()()(),n(109,"tr")(110,"td")(111,"code"),t(112,"--border-radius"),e()(),n(113,"td"),t(114,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),n(115,"td")(116,"code"),t(117,"var(--border-radius-md)"),e()()(),n(118,"tr")(119,"td")(120,"code"),t(121,"--border-width"),e()(),n(122,"td"),t(123,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),e(),n(124,"td")(125,"code"),t(126,"var(--border-width-md)"),e()()(),n(127,"tr")(128,"td")(129,"code"),t(130,"--padding"),e()(),n(131,"td"),t(132,"Preenchimento"),e(),n(133,"td")(134,"code"),t(135,"0 1em"),e()()(),n(136,"tr")(137,"td")(138,"code"),t(139,"--text-color"),e()(),n(140,"td"),t(141,"Cor do texto"),e(),n(142,"td")(143,"code"),t(144,"var(--color-neutral-light-00)"),e()()(),n(145,"tr")(146,"td")(147,"code"),t(148,"--color"),e()(),n(149,"td"),t(150,"Cor principal do bot\xE3o"),e(),n(151,"td")(152,"code"),t(153,"var(--color-action-default)"),e()()(),n(154,"tr")(155,"td")(156,"code"),t(157,"--background-color"),e()(),n(158,"td"),t(159,"Cor de background"),e(),n(160,"td")(161,"code"),t(162,"var(--color-transparent)"),e()()(),n(163,"tr")(164,"td")(165,"code"),t(166,"--shadow"),e()(),n(167,"td"),t(168,"Cont\xE9m o valor da sombra do elemento"),e(),n(169,"td")(170,"code"),t(171,"var(--shadow-none)"),e()()(),n(172,"tr")(173,"td")(174,"strong"),t(175,"Hover"),e()(),l(176,"td")(177,"td"),e(),n(178,"tr")(179,"td")(180,"code"),t(181,"--color-hover"),e()(),n(182,"td"),t(183,"Cor principal no estado hover"),e(),n(184,"td")(185,"code"),t(186,"var(--color-action-hover)"),e()()(),n(187,"tr")(188,"td")(189,"code"),t(190,"--background-hover"),e()(),n(191,"td"),t(192,"Cor de background no estado hover"),e(),n(193,"td")(194,"code"),t(195,"var(--color-brand-01-lighter)"),e()()(),n(196,"tr")(197,"td")(198,"code"),t(199,"--border-color-hover"),e()(),n(200,"td"),t(201,"Cor da borda no estado hover"),e(),n(202,"td")(203,"code"),t(204,"var(--color-brand-01-darkest)"),e()()(),n(205,"tr")(206,"td")(207,"strong"),t(208,"Focused"),e()(),l(209,"td")(210,"td"),e(),n(211,"tr")(212,"td")(213,"code"),t(214,"--outline-color-focused"),e()(),n(215,"td"),t(216,"Cor do outline do estado de focus"),e(),n(217,"td")(218,"code"),t(219,"var(--color-action-focus)"),e()()(),n(220,"tr")(221,"td")(222,"strong"),t(223,"Pressed"),e()(),l(224,"td")(225,"td"),e(),n(226,"tr")(227,"td")(228,"code"),t(229,"--color-pressed"),e()(),n(230,"td"),t(231,"Cor principal no estado de pressionado"),e(),n(232,"td")(233,"code"),t(234,"var(--color-action-pressed)"),e()()(),n(235,"tr")(236,"td")(237,"code"),t(238,"--background-pressed"),e()(),n(239,"td"),t(240,"Cor de background no estado de pressionado\xA0"),e(),n(241,"td")(242,"code"),t(243,"var(--color-brand-01-light)"),e()()(),n(244,"tr")(245,"td")(246,"strong"),t(247,"Disabled"),e()(),l(248,"td")(249,"td"),e(),n(250,"tr")(251,"td")(252,"code"),t(253,"--color-disabled"),e()(),n(254,"td"),t(255,"Cor principal no estado disabled"),e(),n(256,"td")(257,"code"),t(258,"var(--color-action-disabled)"),e()()(),n(259,"tr")(260,"td")(261,"code"),t(262,"--background-color-disabled"),e(),t(263," \xA0"),e(),n(264,"td"),t(265,"Cor de background no estado disabled"),e(),n(266,"td")(267,"code"),t(268,"var(--color-transparent)"),e()()()()()(),n(269,"div",7)(270,"h4",8),t(271,"Seletor"),e(),n(272,"pre",9),t(273,`<po-button-group
    p-buttons="Array<PoButtonGroupItem>"
    p-size="string"
    p-toggle="string" >
</po-button-group>
`),e()(),n(274,"h4",10),t(275,"Propriedades"),e(),n(276,"table",11)(277,"tr",12)(278,"th",13),t(279,"Nome"),e(),n(280,"th",13),t(281,"Tipo"),e(),n(282,"th",13),t(283,"Padr\xE3o"),e(),n(284,"th",13),t(285,"Descri\xE7\xE3o"),e()(),n(286,"tr",14)(287,"td",15)(288,"div",16)(289,"span",17),t(290," p-buttons"),l(291,"br"),e()()(),n(292,"td",18)(293,"code",19),t(294,"Array<PoButtonGroupItem>"),e()(),n(295,"td",20),t(296,"-"),e(),n(297,"td",21)(298,"p"),t(299,"Lista de bot\xF5es."),e()()(),n(300,"tr",14)(301,"td",15)(302,"div",16)(303,"span",17),t(304," p-size"),l(305,"br"),e()()(),n(306,"td",18)(307,"code",22),t(308,"string"),e()(),n(309,"td",20)(310,"p")(311,"code"),t(312,"medium"),e()()(),n(313,"td",21)(314,"em")(315,"strong"),t(316,"(opcional)"),e()(),n(317,"p"),t(318,"Define o tamanho do componente:"),e(),n(319,"ul")(320,"li")(321,"code"),t(322,"small"),e(),t(323,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),n(324,"li")(325,"code"),t(326,"medium"),e(),t(327,": altura de 44px."),e()(),n(328,"blockquote")(329,"p"),t(330,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(331,"code"),t(332,"medium"),e(),t(333,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(334,"a",23),t(335,"po-theme"),e(),t(336,"."),e()()()(),n(337,"tr",14)(338,"td",15)(339,"div",16)(340,"span",17),t(341," p-toggle"),l(342,"br"),e()()(),n(343,"td",18)(344,"code",22),t(345,"string"),e()(),n(346,"td",20)(347,"p")(348,"code"),t(349,"none"),e()()(),n(350,"td",21)(351,"em")(352,"strong"),t(353,"(opcional)"),e()(),n(354,"p"),t(355,"Define o modo de sele\xE7\xE3o dos bot\xF5es no componente conforme valores especificados no enum "),n(356,"code"),t(357,"PoButtonGroupToggle"),e(),t(358,":"),e(),n(359,"ul")(360,"li")(361,"code"),t(362,"multiple"),e(),t(363,": permite m\xFAltiplas sele\xE7\xF5es."),e(),n(364,"li")(365,"code"),t(366,"none"),e(),t(367,": desativa a funcionalidade de sele\xE7\xE3o."),e(),n(368,"li")(369,"code"),t(370,"single"),e(),t(371,": restringe a sele\xE7\xE3o a um \xFAnico bot\xE3o."),e()()()()(),n(372,"h3"),t(373,"Interfaces"),e(),n(374,"h4",24)(375,"code",5),t(376,"PoButtonGroupItem"),e()(),n(377,"div",2)(378,"p"),t(379,"Interface para os itens do "),n(380,"code"),t(381,"po-button-group"),e(),t(382,"."),e()(),n(383,"h4",10),t(384,"Propriedades"),e(),n(385,"table",11)(386,"tr",12)(387,"th",13),t(388,"Nome"),e(),n(389,"th",13),t(390,"Tipo"),e(),n(391,"th",13),t(392,"Descri\xE7\xE3o"),e()(),n(393,"tr",14)(394,"td",15)(395,"div",16)(396,"span",17),t(397," action"),l(398,"br"),e()()(),n(399,"td",18)(400,"code",25),t(401,"Function"),e()(),n(402,"td",21)(403,"p"),t(404,"A\xE7\xE3o executada ao clicar sobre o bot\xE3o."),e()()(),n(405,"tr",14)(406,"td",15)(407,"div",16)(408,"span",17),t(409," disabled"),l(410,"br"),e()()(),n(411,"td",18)(412,"code",26),t(413,"boolean"),e()(),n(414,"td",21)(415,"em")(416,"strong"),t(417,"(opcional)"),e()(),n(418,"p"),t(419,"Se verdadeiro, define o bot\xE3o como desabilitado."),e(),n(420,"blockquote")(421,"p"),t(422,"Por padr\xE3o esta propriedade \xE9 "),n(423,"code"),t(424,"false"),e(),t(425,"."),e()()()(),n(426,"tr",14)(427,"td",15)(428,"div",16)(429,"span",17),t(430," icon"),l(431,"br"),e()()(),n(432,"td",18)(433,"code",22),t(434,"string "),e(),n(435,"code",27),t(436," TemplateRef<void>"),e()(),n(437,"td",21)(438,"em")(439,"strong"),t(440,"(opcional)"),e()(),n(441,"p"),t(442,"\xCDcone exibido ao lado esquerdo do label do bot\xE3o."),e(),n(443,"p"),t(444,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(445,"a",28),t(446,"Biblioteca de \xEDcones"),e(),t(447,". conforme exemplo abaixo:"),e(),n(448,"pre")(449,"code"),t(450,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'an an-user' },
];
`),e()(),n(451,"p"),t(452,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(453,"em"),t(454,"Font Awesome"),e(),t(455,", da seguinte forma:"),e(),n(456,"pre")(457,"code"),t(458,`buttons: Array<PoButtonGroupItem> = [
 { label: 'Button 1', action: this.action.bind(this), icon: 'fa fa-podcast' },
];
`),e()(),n(459,"p"),t(460,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(461,"code"),t(462,"TemplateRef"),e(),t(463,", conforme exemplo abaixo:"),e(),n(464,"p"),t(465,"component.html:"),e(),n(466,"pre")(467,"code"),t(468,`<ng-template #iconTemplate>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),e()(),n(469,"p"),t(470,"component.ts:"),e(),n(471,"pre")(472,"code"),t(473,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;
buttons: Array<PoButtonGroupItem> = [];
...

this.buttons = [
  { label: 'Button 1', action: this.action.bind(this), icon: this.iconTemplate }
];
`),e()(),n(474,"blockquote")(475,"p"),t(476,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(477,"code"),t(478,"font-size: inherit"),e(),t(479," caso o \xEDcone utilizado n\xE3o aplique-o."),e()()()(),n(480,"tr",14)(481,"td",15)(482,"div",16)(483,"span",17),t(484," label"),l(485,"br"),e()()(),n(486,"td",18)(487,"code",22),t(488,"string"),e()(),n(489,"td",21)(490,"em")(491,"strong"),t(492,"(opcional)"),e()(),n(493,"p"),t(494,"Label do bot\xE3o."),e()()(),n(495,"tr",14)(496,"td",15)(497,"div",16)(498,"span",17),t(499," selected"),l(500,"br"),e()()(),n(501,"td",18)(502,"code",26),t(503,"boolean"),e()(),n(504,"td",21)(505,"em")(506,"strong"),t(507,"(opcional)"),e()(),n(508,"p"),t(509,"Define se o bot\xE3o est\xE1 selecionado. Utilizado juntamente \xE0 propriedade "),n(510,"code"),t(511,"p-toggle"),e(),t(512,"."),e()()(),n(513,"tr",14)(514,"td",15)(515,"div",16)(516,"span",17),t(517," tooltip"),l(518,"br"),e()()(),n(519,"td",18)(520,"code",22),t(521,"string"),e()(),n(522,"td",21)(523,"em")(524,"strong"),t(525,"(opcional)"),e()(),n(526,"p"),t(527,"Define a mensagem a ser exibida ao posicionar o "),n(528,"em"),t(529,"mouse"),e(),t(530," sobre o bot\xE3o."),e()()()(),n(531,"h3"),t(532,"Enums"),e(),n(533,"h4",4)(534,"code",5),t(535,"PoButtonGroupToggle"),e()(),n(536,"div",2)(537,"p"),t(538,"Tipos de sele\xE7\xE3o ("),n(539,"code"),t(540,"p-toggle"),e(),t(541,") dispon\xEDveis para o componente."),e()(),n(542,"h4",10),t(543,"Propriedades"),e(),n(544,"table",11)(545,"tr",12)(546,"th",13),t(547,"Nome"),e(),n(548,"th",13),t(549,"Descri\xE7\xE3o"),e()(),n(550,"tr",14)(551,"td",15)(552,"div",16)(553,"span",17),t(554," Multiple"),l(555,"br"),e()()(),n(556,"td",21)(557,"p"),t(558,"Sele\xE7\xE3o m\xFAltipla."),e()()(),n(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),t(563," None"),l(564,"br"),e()()(),n(565,"td",21)(566,"p"),t(567,"Sele\xE7\xE3o desabilitada."),e()()(),n(568,"tr",14)(569,"td",15)(570,"div",16)(571,"span",17),t(572," Single"),l(573,"br"),e()()(),n(574,"td",21)(575,"p"),t(576,"Sele\xE7\xE3o \xFAnica."),e()()()()())},dependencies:[B],encapsulation:2})}return i})();var ue=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||i)(M(U),M(J))};static \u0275cmp=d({type:i,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Button Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return o.changeTab("doc")}),l(3,"sample-po-button-group-doc"),e(),n(4,"po-tab",3),c("p-click",function(){return o.changeTab("web")}),l(5,"sample-po-button-group-basic-view")(6,"sample-po-button-group-labs-view")(7,"sample-po-button-group-attendance-view")(8,"sample-po-button-group-post-view"),e()()()),a&2&&(s("p-actions",o.actions),p(2),s("p-active",o.activeTab==="doc"),p(2),s("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[ee,C,P,ie,le,pe,se,de],encapsulation:2})}return i})();var _e=[{path:"",component:ue}],ce=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=D({type:i});static \u0275inj=k({imports:[V.forChild(_e),V]})}return i})();var it=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=D({type:i});static \u0275inj=k({imports:[ne,ce]})}return i})();export{it as DocPoButtonGroupModule};
