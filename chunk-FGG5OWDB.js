import{o as E,p as ne}from"./chunk-R3BKLGLC.js";import{Ab as C,F as Q,Ga as $,La as ee,ca as X,ha as Y,ja as Z,nb as te,r as M,zb as v}from"./chunk-TUTTJOS2.js";import{$a as x,Ac as U,Ba as B,Ea as e,Fa as n,Ga as a,Ka as H,La as u,M as T,Nc as J,Pc as K,Rc as L,T as g,U as b,V as I,W as F,Xa as t,Za as S,ab as w,bb as P,eb as _,ha as r,ia as O,oa as m,pa as D,ua as N,ub as y,vb as R,wc as q,xa as W,xc as A,ya as d,yc as G,zc as j}from"./chunk-MIQUIDUB.js";var oe=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=m({type:i,selectors:[["sample-po-badge-basic"]],standalone:!1,decls:1,vars:0,template:function(l,o){l&1&&a(0,"po-badge")},dependencies:[M],encapsulation:2})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),ie=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=m({type:i,selectors:[["sample-po-badge-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Badge Basic"),n(),e(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-badge-basic/sample-po-badge-basic.component.html"),n(),e(13,"pre",7),t(14,`<po-badge></po-badge>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-badge-basic/sample-po-badge-basic.component.ts"),n(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),n()()()()(),e(21,"div",10),a(22,"sample-po-badge-basic"),n(),a(23,"hr")),l&2&&(r(5),B("po-icon "+o.sampleCodeButtonIcon),r(),S(" ",o.sampleCodeButtonLabel,""),r(),d("ngClass",_(4,ge,o.hideSampleCodeTabs)))},dependencies:[y,E,v,C,oe],encapsulation:2})}return i})();var ae=(()=>{class i{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:"showBorder",label:"Show Border"}];iconsOptions=[{label:"an-check",value:"an an-check"},{label:"an-check-circle",value:"an an-check-circle"},{label:"an an-check",value:"an an-check"},{label:"fa-minus",value:"fa fa-minus"},{label:"true (Enabled when status is settled)",value:"true",disabled:!0},{label:"None",value:"false"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];statusOptions=[{label:"Positive",value:"positive"},{label:"Negative",value:"negative"},{label:"Warning",value:"warning"},{label:"Disabled",value:"disabled"},{label:"None",value:"none"}];constructor(){}ngOnInit(){this.restore()}propertiesChange(p){this.properties=p}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=!1,p==="none"&&(this.iconsOptions[4].disabled=!0)}iconsChange(p){this.value=void 0,this.showIcon=p==="true"}restore(){this.size="medium",this.status=void 0,this.icon=void 0,this.color="color-07",this.value=void 0,this.showIcon=!1,this.iconsOptions[4].disabled=!0,this.properties=[]}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=m({type:i,selectors:[["sample-po-badge-labs"]],standalone:!1,decls:15,vars:17,consts:[["f","ngForm"],[1,"po-row"],[3,"p-color","p-icon","p-size","p-status","p-show-border","p-value"],["name","value","p-label","Value",1,"po-md-4",3,"ngModelChange","ngModel","p-min"],["name","color","p-label","Color","p-help","color-01, red, rgb(201, 53, 125), #753399",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","status","p-label","Status",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,o){if(l&1){let c=H();e(0,"div",1),a(1,"po-badge",2),n(),a(2,"hr"),e(3,"form",null,0)(5,"div",1)(6,"po-number",3),P("ngModelChange",function(s){return g(c),w(o.value,s)||(o.value=s),b(s)}),n(),e(7,"po-input",4),P("ngModelChange",function(s){return g(c),w(o.color,s)||(o.color=s),b(s)}),n()(),e(8,"div",1)(9,"po-checkbox-group",5),P("ngModelChange",function(s){return g(c),w(o.properties,s)||(o.properties=s),b(s)}),u("p-change",function(s){return g(c),b(o.propertiesChange(s))}),n(),e(10,"po-radio-group",6),P("ngModelChange",function(s){return g(c),w(o.status,s)||(o.status=s),b(s)}),u("p-change",function(s){return g(c),b(o.statusChange(s))}),n(),e(11,"po-radio-group",7),P("ngModelChange",function(s){return g(c),w(o.size,s)||(o.size=s),b(s)}),n(),e(12,"po-radio-group",8),P("ngModelChange",function(s){return g(c),w(o.icon,s)||(o.icon=s),b(s)}),u("p-change",function(s){return g(c),b(o.iconsChange(s))}),n()(),e(13,"div",1)(14,"po-button",9),u("p-click",function(){return g(c),b(o.restore())}),n()()()}l&2&&(r(),d("p-color",o.color)("p-icon",o.showIcon?!0:o.icon)("p-size",o.size)("p-status",o.status)("p-show-border",o.properties.includes("showBorder"))("p-value",o.value),r(5),x("ngModel",o.value),d("p-min",0),r(),x("ngModel",o.color),r(2),x("ngModel",o.properties),d("p-options",o.propertiesOptions),r(),x("ngModel",o.status),d("p-options",o.statusOptions),r(),x("ngModel",o.size),d("p-options",o.sizesOptions),r(),x("ngModel",o.icon),d("p-options",o.iconsOptions))},dependencies:[U,q,A,j,G,Q,Y,Z,$,ee,M],encapsulation:2})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=m({type:i,selectors:[["sample-po-badge-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Badge Labs"),n(),e(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-badge-labs/sample-po-badge-labs.component.html"),n(),e(13,"pre",7),t(14,`<div class="po-row">
  <po-badge
    [p-color]="color"
    [p-icon]="showIcon ? true : icon"
    [p-size]="size"
    [p-status]="status"
    [p-show-border]="properties.includes('showBorder')"
    [p-value]="value"
  ></po-badge>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-number class="po-md-4" name="value" [(ngModel)]="value" p-label="Value" [p-min]="0"> </po-number>
    <po-input
      class="po-md-4"
      name="color"
      [(ngModel)]="color"
      p-label="Color"
      p-help="color-01, red, rgb(201, 53, 125), #753399"
    ></po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="propertiesChange($event)"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-lg-12"
      name="status"
      [(ngModel)]="status"
      p-label="Status"
      [p-options]="statusOptions"
      (p-change)="statusChange($event)"
    >
    </po-radio-group>

    <po-radio-group class="po-lg-12" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizesOptions">
    </po-radio-group>

    <po-radio-group
      class="po-lg-12"
      name="icon"
      [(ngModel)]="icon"
      p-label="Icon"
      [p-options]="iconsOptions"
      (p-change)="iconsChange($event)"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-badge-labs/sample-po-badge-labs.component.ts"),n(),e(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';
import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-badge-labs',
  templateUrl: './sample-po-badge-labs.component.html',
  standalone: false
})
export class SamplePoBadgeLabsComponent implements OnInit {
  value: number;
  icon: string;
  size: string;
  status: any;
  properties: Array<string>;
  color: string;
  showIcon: boolean;

  propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'showBorder', label: 'Show Border' }];

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an-check', value: 'an an-check' },
    { label: 'an-check-circle', value: 'an an-check-circle' },
    { label: 'an an-check', value: 'an an-check' },
    { label: 'fa-minus', value: 'fa fa-minus' },
    { label: 'true (Enabled when status is settled)', value: 'true', disabled: true },
    { label: 'None', value: 'false' }
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  statusOptions: Array<PoRadioGroupOption> = [
    { label: 'Positive', value: 'positive' },
    { label: 'Negative', value: 'negative' },
    { label: 'Warning', value: 'warning' },
    { label: 'Disabled', value: 'disabled' },
    { label: 'None', value: 'none' }
  ];

  constructor() {}

  ngOnInit() {
    this.restore();
  }

  propertiesChange(event) {
    this.properties = event;
  }

  statusChange(event) {
    this.value = undefined;
    this.iconsOptions[4].disabled = false;

    if (event === 'none') {
      this.iconsOptions[4].disabled = true;
    }
  }

  iconsChange(event) {
    this.value = undefined;
    this.showIcon = event === 'true' ? true : false;
  }

  restore() {
    this.size = 'medium';
    this.status = undefined;
    this.icon = undefined;
    this.color = 'color-07';
    this.value = undefined;
    this.showIcon = false;
    this.iconsOptions[4].disabled = true;
    this.properties = [];
  }
}
`),n()()()()(),e(21,"div",10),a(22,"sample-po-badge-labs"),n(),a(23,"hr")),l&2&&(r(5),B("po-icon "+o.sampleCodeButtonIcon),r(),S(" ",o.sampleCodeButtonLabel,""),r(),d("ngClass",_(4,fe,o.hideSampleCodeTabs)))},dependencies:[y,E,v,C,ae],encapsulation:2})}return i})();function ve(i,ce){if(i&1&&(e(0,"div",2)(1,"po-container")(2,"div",3),I(),e(3,"svg",4),a(4,"circle",5)(5,"path",6),n(),F(),e(6,"p",7),t(7),a(8,"po-badge",8),n()()()()),i&2){let p=ce.$implicit;r(3),W("kind",p.status),r(4),S(" ",p.nome," "),r(),d("p-status",p.status==="online"?"positive":"negative")}}var pe=(()=>{class i{users=[{nome:"Leonardo da vinci",status:"online"},{nome:"Johann Pachelbel",status:"offline"},{nome:"Amadeus Mozart",status:"offline"}];static \u0275fac=function(l){return new(l||i)};static \u0275cmp=m({type:i,selectors:[["sample-po-badge-message"]],standalone:!1,decls:3,vars:1,consts:[[1,"po-row","po-mt-3"],["class","po-mb-1",4,"ngFor","ngForOf"],[1,"po-mb-1"],[1,"card"],["stroke-linecap","round","stroke-linejoin","round",1,"po-mr-1"],["cx","12","cy","12","r","11"],["d","m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9","fill","none"],[1,"po-mr-1","card-name-user","po-text-color-neutral-dark-40"],[1,"po-badge-wrap",3,"p-status"]],template:function(l,o){l&1&&(e(0,"div",0)(1,"div"),N(2,ve,9,3,"div",1),n()()),l&2&&(r(2),d("ngForOf",o.users))},dependencies:[R,X,M],styles:[".po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-12px;right:-12px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}"]})}return i})();var Ee=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=m({type:i,selectors:[["sample-po-badge-message-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Badge Message"),n(),e(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-badge-message/sample-po-badge-message.component.html"),n(),e(13,"pre",7),t(14,`<div class="po-row po-mt-3">
  <div>
    <div class="po-mb-1" *ngFor="let user of users">
      <po-container>
        <div class="card">
          <svg class="po-mr-1" [attr.kind]="user.status" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="11" />
            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
          </svg>
          <p class="po-mr-1 card-name-user po-text-color-neutral-dark-40">
            { { user.nome }}
            <po-badge class="po-badge-wrap" [p-status]="user.status === 'online' ? 'positive' : 'negative'"></po-badge>
          </p>
        </div>
      </po-container>
    </div>
  </div>
</div>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-badge-message/sample-po-badge-message.component.ts"),n(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-badge-message',
  templateUrl: './sample-po-badge-message.component.html',
  styleUrls: ['./sample-po-badge-message.component.css'],
  standalone: false
})
export class SamplePoBadgeMessageComponent {
  users: Array<any> = [
    {
      nome: 'Leonardo da vinci',
      status: 'online'
    },
    {
      nome: 'Johann Pachelbel',
      status: 'offline'
    },
    {
      nome: 'Amadeus Mozart',
      status: 'offline'
    }
  ];
}
`),n()()(),e(21,"po-tab",10)(22,"div")(23,"label",6),t(24,"sample-po-badge-message/sample-po-badge-message.component.css"),n(),e(25,"pre",11),t(26,`.po-badge-wrap {
  position: absolute;
  top: -12px;
  right: -12px;
}

svg {
  width: 1.5rem;
  height: 1.5rem;
  flex: none;
  stroke-width: 2;
  stroke-linecap: round;
}

svg[kind='online'] {
  stroke: #0ea5e9;
  fill: #e0f2fe;
}

svg[kind='offline'] {
  fill: white;
  stroke: #dc2626;
}

.card {
  display: flex;
  align-items: center;
  position: relative;
}
`),n()()()()(),e(27,"div",12),a(28,"sample-po-badge-message"),n(),a(29,"hr")),l&2&&(r(5),B("po-icon "+o.sampleCodeButtonIcon),r(),S(" ",o.sampleCodeButtonLabel,""),r(),d("ngClass",_(4,Ee,o.hideSampleCodeTabs)))},dependencies:[y,E,v,C,pe],encapsulation:2})}return i})();var re=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=m({type:i,selectors:[["sample-po-badge-doc"]],standalone:!1,decls:316,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","PoBadgeIcon"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBadgeSize"],["pan","",1,"docs-api-property-type","PoBadgeStatus"],["pan","",1,"docs-api-property-type","number"]],template:function(l,o){l&1&&(e(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoBadgeModule } from '@po-ui/ng-components';"),n()(),e(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente po-badge."),n()(),e(7,"h3",3),t(8,"Componente"),n(),e(9,"h4",4)(10,"code",5),t(11,"PoBadgeComponent"),n()(),e(12,"div",2)(13,"p"),t(14,"Utilizado para exibir a quantidade de notifica\xE7\xF5es. "),n()(),e(15,"div",6)(16,"h4",7),t(17,"Seletor"),n(),e(18,"pre",8),t(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),n()(),e(20,"h4",9),t(21,"Propriedades"),n(),e(22,"table",10)(23,"tr",11)(24,"th",12),t(25,"Nome"),n(),e(26,"th",12),t(27,"Tipo"),n(),e(28,"th",12),t(29,"Padr\xE3o"),n(),e(30,"th",12),t(31,"Descri\xE7\xE3o"),n()(),e(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),t(36," p-aria-label"),a(37,"br"),n()()(),e(38,"td",17)(39,"code",18),t(40,"string"),n()(),e(41,"td",19),t(42,"-"),n(),e(43,"td",20)(44,"p"),t(45,"Define um "),e(46,"code"),t(47,"aria-label"),n(),t(48," para o "),e(49,"code"),t(50,"po-badge"),n()()()(),e(51,"tr",13)(52,"td",14)(53,"div",15)(54,"span",16),t(55," p-color"),a(56,"br"),n()()(),e(57,"td",17)(58,"code",18),t(59,"string"),n()(),e(60,"td",19)(61,"p")(62,"code"),t(63,"color-07"),n()()(),e(64,"td",20)(65,"em")(66,"strong"),t(67,"(opcional)"),n()(),e(68,"p"),t(69,"Determina a cor do "),e(70,"code"),t(71,"po-badge"),n(),t(72,". As maneiras de customizar as cores s\xE3o:"),n(),e(73,"ul")(74,"li"),t(75,"Hexadeximal, por exemplo "),e(76,"code"),t(77,"#c64840"),n(),t(78,";"),n(),e(79,"li"),t(80,"RGB, como "),e(81,"code"),t(82,"rgb(0, 0, 165)"),n(),t(83,";"),n(),e(84,"li"),t(85,"O nome da cor, por exemplo "),e(86,"code"),t(87,"blue"),n(),t(88,";"),n(),e(89,"li"),t(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),e(91,"ul")(92,"li"),a(93,"span",21),e(94,"code"),t(95,"color-01"),n()(),e(96,"li"),a(97,"span",22),e(98,"code"),t(99,"color-02"),n()(),e(100,"li"),a(101,"span",23),e(102,"code"),t(103,"color-03"),n()(),e(104,"li"),a(105,"span",24),e(106,"code"),t(107,"color-04"),n()(),e(108,"li"),a(109,"span",25),e(110,"code"),t(111,"color-05"),n()(),e(112,"li"),a(113,"span",26),e(114,"code"),t(115,"color-06"),n()(),e(116,"li"),a(117,"span",27),e(118,"code"),t(119,"color-07"),n()(),e(120,"li"),a(121,"span",28),e(122,"code"),t(123,"color-08"),n()(),e(124,"li"),a(125,"span",29),e(126,"code"),t(127,"color-09"),n()(),e(128,"li"),a(129,"span",30),e(130,"code"),t(131,"color-10"),n()(),e(132,"li"),a(133,"span",31),e(134,"code"),t(135,"color-11"),n()(),e(136,"li"),a(137,"span",32),e(138,"code"),t(139,"color-12"),n()()()()()()(),e(140,"tr",13)(141,"td",14)(142,"div",15)(143,"span",16),t(144," p-icon"),a(145,"br"),n()()(),e(146,"td",17)(147,"code",33),t(148,"PoBadgeIcon"),n()(),e(149,"td",19),t(150,"-"),n(),e(151,"td",20)(152,"em")(153,"strong"),t(154,"(opcional)"),n()(),e(155,"p"),t(156,"\xCDcone exibido no "),e(157,"code"),t(158,"po-badge"),n(),t(159,"."),n(),e(160,"p"),t(161,"Para exibir icone do status atual declare a propriedade "),e(162,"code"),t(163,"p-icon"),n(),t(164,". conforme exemplo abaixo:"),n(),e(165,"pre")(166,"code"),t(167,`<po-badge [p-icon]="true"></po-badge>
`),n()(),e(168,"p"),t(169,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),e(170,"a",34),t(171,"Biblioteca de \xEDcones"),n(),t(172,". conforme exemplo abaixo:"),n(),e(173,"pre")(174,"code"),t(175,`<po-badge p-icon="an an-user"></po-badge>
`),n()(),e(176,"p"),t(177,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),e(178,"em"),t(179,"Font Awesome"),n(),t(180,", da seguinte forma:"),n(),e(181,"pre")(182,"code"),t(183,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),n()(),e(184,"p"),t(185,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),e(186,"code"),t(187,"TemplateRef"),n(),t(188,", conforme exemplo abaixo:"),n(),e(189,"pre")(190,"code"),t(191,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),n()()()(),e(192,"tr",13)(193,"td",14)(194,"div",15)(195,"span",16),t(196," p-show-border"),a(197,"br"),n()()(),e(198,"td",17)(199,"code",35),t(200,"boolean"),n()(),e(201,"td",19),t(202,"-"),n(),e(203,"td",20)(204,"p"),t(205,"Exibe uma borda para o "),e(206,"code"),t(207,"po-badge"),n()(),e(208,"blockquote")(209,"p"),t(210,"Pode personalizar cor da bordar com a propriedade "),e(211,"code"),t(212,"p-color-border"),n()()()()(),e(213,"tr",13)(214,"td",14)(215,"div",15)(216,"span",16),t(217," p-size"),a(218,"br"),n()()(),e(219,"td",17)(220,"code",36),t(221,"PoBadgeSize"),n()(),e(222,"td",19)(223,"p")(224,"code"),t(225,"medium"),n()()(),e(226,"td",20)(227,"p"),t(228,"Define o tamanho do "),e(229,"code"),t(230,"po-badge"),n()(),e(231,"p"),t(232,"Valores v\xE1lidos:"),n(),e(233,"ul")(234,"li")(235,"code"),t(236,"small"),n(),t(237,": o "),e(238,"code"),t(239,"po-badge"),n(),t(240," fica do tamanho padr\xE3o, com 8px de altura.;"),n(),e(241,"li")(242,"code"),t(243,"medium"),n(),t(244,": o "),e(245,"code"),t(246,"po-badge"),n(),t(247," fica do tamanho padr\xE3o, com 16px de altura.;"),n(),e(248,"li")(249,"code"),t(250,"large"),n(),t(251,": o "),e(252,"code"),t(253,"po-badge"),n(),t(254," fica do tamanho padr\xE3o, com 24px de altura.;"),n()()()(),e(255,"tr",13)(256,"td",14)(257,"div",15)(258,"span",16),t(259," p-status"),a(260,"br"),n()()(),e(261,"td",17)(262,"code",37),t(263,"PoBadgeStatus"),n()(),e(264,"td",19),t(265,"-"),n(),e(266,"td",20)(267,"p"),t(268,"Define o estado do "),e(269,"code"),t(270,"po-badge"),n()(),e(271,"p"),t(272,"Valores v\xE1lidos:"),n(),e(273,"ul")(274,"li")(275,"code"),t(276,"positive"),n(),t(277,": Define a cor do "),e(278,"code"),t(279,"po-badge"),n(),t(280," com a cor de feedback positivo.;"),n(),e(281,"li")(282,"code"),t(283,"negative"),n(),t(284,": Define a cor do "),e(285,"code"),t(286,"po-badge"),n(),t(287," com a cor de feedback negative.;"),n(),e(288,"li")(289,"code"),t(290,"warning"),n(),t(291,": Define a cor do "),e(292,"code"),t(293,"po-badge"),n(),t(294," com a cor de feedback warning.;"),n(),e(295,"li")(296,"code"),t(297,"disabled"),n(),t(298,": Define a cor do "),e(299,"code"),t(300,"po-badge"),n(),t(301," com a cor de feedback disabled;"),n()()()(),e(302,"tr",13)(303,"td",14)(304,"div",15)(305,"span",16),t(306," p-value"),a(307,"br"),n()()(),e(308,"td",17)(309,"code",38),t(310,"number"),n()(),e(311,"td",19),t(312,"-"),n(),e(313,"td",20)(314,"p"),t(315,"N\xFAmero exibido no componente, caso o mesmo seja maior que 9 o valor exibido ser\xE1 9+."),n()()()()())},dependencies:[E],encapsulation:2})}return i})();var de=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||i)(O(J),O(K))};static \u0275cmp=m({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Badge",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return o.changeTab("doc")}),a(3,"sample-po-badge-doc"),n(),e(4,"po-tab",3),u("p-click",function(){return o.changeTab("web")}),a(5,"sample-po-badge-basic-view")(6,"sample-po-badge-labs-view")(7,"sample-po-badge-message-view"),n()()()),l&2&&(d("p-actions",o.actions),r(2),d("p-active",o.activeTab==="doc"),r(2),d("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[te,v,C,ie,le,se,re],encapsulation:2})}return i})();var Pe=[{path:"",component:de}],me=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=D({type:i});static \u0275inj=T({imports:[L.forChild(Pe),L]})}return i})();var Qe=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=D({type:i});static \u0275inj=T({imports:[ne,me]})}return i})();export{Qe as DocPoBadgeModule};
