import{o as y,p as pe}from"./chunk-MMZVQUBQ.js";import{Ab as f,Db as me,F as ne,Ga as le,Ra as re,Wa as F,e as R,f as M,ha as ie,ja as oe,m as O,nb as z,q as te,ta as ae,zb as v}from"./chunk-522XRIZO.js";import{Ac as K,Ba as w,Bc as X,Fa as e,Ga as n,Ha as i,La as V,M as I,Ma as b,Na as B,Oc as Z,Qa as $,Qc as ee,Ra as j,Sc as N,T as u,U as g,Ya as t,_a as _,ab as E,bb as S,cb as x,fb as k,ha as m,ia as W,oa as c,pa as A,ua as P,vb as D,wb as G,xb as U,xc as J,ya as d,yc as Q,zc as Y}from"./chunk-WFKG4FNY.js";var de=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-value","PO Tag"]],template:function(l,o){l&1&&i(0,"po-tag",0)},dependencies:[O],encapsulation:2})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Tag Basic"),n(),e(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-tag-basic/sample-po-tag-basic.component.html"),n(),e(13,"pre",7),t(14,`<po-tag p-value="PO Tag"> </po-tag>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-tag-basic/sample-po-tag-basic.component.ts"),n(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-tag-basic',
  templateUrl: './sample-po-tag-basic.component.html',
  standalone: false
})
export class SamplePoTagBasicComponent {}
`),n()()()()(),e(21,"div",10),i(22,"sample-po-tag-basic"),n(),i(23,"hr")),l&2&&(m(5),w("po-icon "+o.sampleCodeButtonIcon),m(),_(" ",o.sampleCodeButtonLabel,""),m(),d("ngClass",k(4,fe,o.hideSampleCodeTabs)))},dependencies:[D,y,v,f,de],encapsulation:2})}return a})();function Ce(a,T){if(a&1){let r=V();e(0,"po-select",14),x("ngModelChange",function(o){u(r);let s=B();return S(s.icon,o)||(s.icon=o),g(o)}),n()}if(a&2){let r=B();E("ngModel",r.icon),d("p-options",r.iconList)}}function ye(a,T){if(a&1){let r=V();e(0,"po-switch",15),x("ngModelChange",function(o){u(r);let s=B();return S(s.icon,o)||(s.icon=o),g(o)}),n()}if(a&2){let r=B();E("ngModel",r.icon)}}var ce=(()=>{class a{color;event;icon;textColor;label;orientation;type;value;properties;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"removable",label:"Removable"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];orientationOptions=[{label:"Horizontal",value:R.Horizontal},{label:"Vertical",value:R.Vertical}];typeOptions=[{label:"None",value:void 0},{label:"Info",value:M.Info},{label:"Danger",value:M.Danger},{label:"Success",value:M.Success},{label:"Warning",value:M.Warning},{label:"Neutral",value:M.Neutral}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}propertiesChange(r){let l=[...this.propertiesOptions];r.includes("removable")?(l[0]={value:"disabled",label:"Disabled",disabled:!1},this.propertiesOptions=l):(l[0]={value:"disabled",label:"Disabled",disabled:!0},this.propertiesOptions=l)}restore(){this.color=void 0,this.icon=void 0,this.label=void 0,this.orientation=void 0,this.value="PO Tag",this.type=void 0,this.event="",this.textColor=void 0,this.properties=[]}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-labs"]],standalone:!1,decls:21,vars:22,consts:[["f","ngForm"],[3,"p-click","p-color","p-disabled","p-removable","p-icon","p-text-color","p-label","p-orientation","p-type","p-value"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","color","p-clean","","p-label","Color","p-help","color-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","textColor","p-clean","","p-label","Text color","p-help","color-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["class","po-md-6 po-mt-2","name","icon","p-label","Icon",3,"ngModel","p-options","ngModelChange",4,"ngIf"],["name","properties","p-label","Properties",1,"po-md-6","po-mt-2",3,"ngModelChange","p-change","ngModel","p-options"],["class","po-md-6","name","icon","p-label","Icon",3,"ngModel","ngModelChange",4,"ngIf"],["name","orientation","p-columns","1","p-label","Orientation",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","type","p-columns","3","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,o){if(l&1){let s=V();e(0,"po-tag",1),b("p-click",function(){return u(s),g(o.changeEvent("p-click"))}),n(),i(1,"hr"),e(2,"div",2),i(3,"po-info",3),n(),i(4,"hr"),e(5,"form",null,0)(7,"div",2)(8,"po-input",4),x("ngModelChange",function(p){return u(s),S(o.label,p)||(o.label=p),g(p)}),n(),e(9,"po-input",5),x("ngModelChange",function(p){return u(s),S(o.value,p)||(o.value=p),g(p)}),n()(),e(10,"div",2)(11,"po-input",6),x("ngModelChange",function(p){return u(s),S(o.color,p)||(o.color=p),g(p)}),n(),e(12,"po-input",7),x("ngModelChange",function(p){return u(s),S(o.textColor,p)||(o.textColor=p),g(p)}),n(),P(13,Ce,1,2,"po-select",8),e(14,"po-checkbox-group",9),x("ngModelChange",function(p){return u(s),S(o.properties,p)||(o.properties=p),g(p)}),b("p-change",function(p){return u(s),g(o.propertiesChange(p))}),n(),P(15,ye,1,1,"po-switch",10),n(),e(16,"div",2)(17,"po-radio-group",11),x("ngModelChange",function(p){return u(s),S(o.orientation,p)||(o.orientation=p),g(p)}),n(),e(18,"po-radio-group",12),x("ngModelChange",function(p){return u(s),S(o.type,p)||(o.type=p),g(p)}),n()(),e(19,"div",2)(20,"po-button",13),b("p-click",function(){return u(s),g(o.restore())}),n()()()}l&2&&(d("p-color",o.color)("p-disabled",o.properties.includes("disabled"))("p-removable",o.properties.includes("removable"))("p-icon",o.icon)("p-text-color",o.textColor)("p-label",o.label)("p-orientation",o.orientation)("p-type",o.type)("p-value",o.value),m(3),d("p-value",o.event),m(5),E("ngModel",o.label),m(),E("ngModel",o.value),m(2),E("ngModel",o.color),m(),E("ngModel",o.textColor),m(),d("ngIf",!o.type),m(),E("ngModel",o.properties),d("p-options",o.propertiesOptions),m(),d("ngIf",o.type),m(2),E("ngModel",o.orientation),d("p-options",o.orientationOptions),m(),E("ngModel",o.type),d("p-options",o.typeOptions))},dependencies:[U,X,J,Q,K,Y,ne,ie,oe,le,re,ae,O,F],styles:[".sample-tag-color-circle[_ngcontent-%COMP%]{border-radius:10px;display:inline-block;height:16px;margin-right:4px;vertical-align:middle;width:16px}"]})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Tag Labs"),n(),e(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-tag-labs/sample-po-tag-labs.component.html"),n(),e(13,"pre",7),t(14,`<po-tag
  [p-color]="color"
  [p-disabled]="properties.includes('disabled')"
  [p-removable]="properties.includes('removable')"
  [p-icon]="icon"
  [p-text-color]="textColor"
  [p-label]="label"
  [p-orientation]="orientation"
  [p-type]="type"
  [p-value]="value"
  (p-click)="changeEvent('p-click')"
>
</po-tag>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="value" [(ngModel)]="value" p-clean p-label="Value" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="color"
      [(ngModel)]="color"
      p-clean
      p-label="Color"
      p-help="color-01, red, rgb(201, 53, 125), #753399"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="textColor"
      [(ngModel)]="textColor"
      p-clean
      p-label="Text color"
      p-help="color-01, red, rgb(201, 53, 125), #753399"
    >
    </po-input>

    <po-select
      *ngIf="!type"
      class="po-md-6 po-mt-2"
      name="icon"
      [(ngModel)]="icon"
      p-label="Icon"
      [p-options]="iconList"
    >
    </po-select>

    <po-checkbox-group
      class="po-md-6 po-mt-2"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="propertiesChange($event)"
    >
    </po-checkbox-group>

    <po-switch *ngIf="type" class="po-md-6" name="icon" [(ngModel)]="icon" p-label="Icon"> </po-switch>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-4"
      name="orientation"
      [(ngModel)]="orientation"
      p-columns="1"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="type"
      [(ngModel)]="type"
      p-columns="3"
      p-label="Type"
      [p-options]="typeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-tag-labs/sample-po-tag-labs.component.ts"),n(),e(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import {
  PoRadioGroupOption,
  PoSelectOption,
  PoTagOrientation,
  PoTagType,
  PoCheckboxGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tag-labs',
  templateUrl: './sample-po-tag-labs.component.html',
  styles: [
    \`
      .sample-tag-color-circle {
        border-radius: 10px;
        display: inline-block;
        height: 16px;
        margin-right: 4px;
        vertical-align: middle;
        width: 16px;
      }
    \`
  ],
  standalone: false
})
export class SamplePoTagLabsComponent implements OnInit {
  color: string;
  event: string;
  icon: boolean | string;
  textColor: string;
  label: string;
  orientation: PoTagOrientation;
  type: PoTagType;
  value: string;
  properties: Array<string>;

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'removable', label: 'Removable' }
  ];

  public readonly iconList: Array<PoSelectOption> = [
    { label: 'an an-bluetooth', value: 'an an-bluetooth' },
    { label: 'an an-heart', value: 'an an-heart' },
    { label: 'an an-lightbulb', value: 'an an-lightbulb' },
    { label: 'an an-star', value: 'an an-star' },
    { label: 'an an-gear', value: 'an an-gear' },
    { label: 'an an-globe', value: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Horizontal', value: PoTagOrientation.Horizontal },
    { label: 'Vertical', value: PoTagOrientation.Vertical }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'None', value: undefined },
    { label: 'Info', value: PoTagType.Info },
    { label: 'Danger', value: PoTagType.Danger },
    { label: 'Success', value: PoTagType.Success },
    { label: 'Warning', value: PoTagType.Warning },
    { label: 'Neutral', value: PoTagType.Neutral }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  propertiesChange(event) {
    const value = [...this.propertiesOptions];

    if (event.includes('removable')) {
      value[0] = { value: 'disabled', label: 'Disabled', disabled: false };
      this.propertiesOptions = value;
    } else {
      value[0] = { value: 'disabled', label: 'Disabled', disabled: true };
      this.propertiesOptions = value;
    }
  }

  restore() {
    this.color = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.orientation = undefined;
    this.value = 'PO Tag';
    this.type = undefined;
    this.event = '';
    this.textColor = undefined;
    this.properties = [];
  }
}
`),n()()()()(),e(21,"div",10),i(22,"sample-po-tag-labs"),n(),i(23,"hr")),l&2&&(m(5),w("po-icon "+o.sampleCodeButtonIcon),m(),_(" ",o.sampleCodeButtonLabel,""),m(),d("ngClass",k(4,Pe,o.hideSampleCodeTabs)))},dependencies:[D,y,v,f,ce],encapsulation:2})}return a})();function _e(a,T){if(a&1&&i(0,"po-tag",15),a&2){let r=T.$implicit;d("p-label",r.label)("p-type",r.type)("p-value",r.value)}}function ke(a,T){if(a&1&&(e(0,"po-widget",18)(1,"div",3),i(2,"po-info",19)(3,"po-tag",20),n()()),a&2){let r=T.$implicit;m(2),d("p-label",r.label)("p-value",r.value),m(),d("p-type",r.type)("p-value",r.text)}}function De(a,T){if(a&1&&(e(0,"po-tab",16),P(1,ke,4,4,"po-widget",17),n()),a&2){let r=T.$implicit;$("p-label",r.month),m(),d("ngForOf",r.details)}}var ge=(()=>{class a{investiments=[{label:"Stocks",type:"danger",value:"Low -3.50%"},{label:"Treasury bills",type:"success",value:"Growing +2.25%"},{label:"Real estate",type:"warning",value:"Risk -0.02%"},{label:"Mutual fund",type:"success",value:"Growing +3.00%"}];items=[{month:"June",details:[{label:"Automatic Payment",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Credit Card",value:"$ 230",type:"danger",text:"Expense"},{label:"Personal Loan",value:"$ 150",type:"warning",text:"Future"}]},{month:"July",details:[{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Car insurance",value:"$ 40",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 200",type:"success",text:"Income"},{label:"Bank statement",value:"$ 5",type:"info",text:"Document"},{label:"Deposit",value:"$ 70",type:"success",text:"Income"}]},{month:"August",details:[{label:"Student Loan",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 50",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Automatic Payment",value:"$ 230",type:"warning",text:"Future"},{label:"Credit Card",value:"$ 150",type:"warning",text:"Future"}]}];advantages=[{title:"Platinum Card:",description:"best card in the market. You earn points and have concierge service and cultural advice."},{title:"Exclusive agencies:",description:"environments designed to offer comfort and privacy."},{title:"Unique experience",description:"with exclusivity background in travel, culture, entertainment and much more."},{title:"Progressive discounts",description:"on service packages, according to the volume of investments."},{title:"Free tax:",description:"withdrawals and Transfers Between Unlimited Accounts."}];userData={name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png"};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-bank-account"]],standalone:!1,decls:18,vars:6,consts:[["p-title","Bank Statement"],[1,"po-mt-1","po-lg-7"],["p-title","User information",1,"po-md-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Name",3,"p-value"],["p-value","Premium Account"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-title","My Investiments",1,"po-md-12","po-sm-mt-1","po-mt-1","po-lg-mt-1"],["class","po-md-6 po-lg-3",3,"p-label","p-type","p-value",4,"ngFor","ngForOf"],["p-title","Last three month operations",1,"po-mt-1","po-lg-5"],["p-active","",3,"p-label",4,"ngFor","ngForOf"],[1,"po-md-6","po-lg-3",3,"p-label","p-type","p-value"],["p-active","",3,"p-label"],["class","po-lg-12 po-sm-mb-1 po-mb-1 po-lg-mb-1",4,"ngFor","ngForOf"],[1,"po-lg-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],["p-label-size","6","p-orientation","horizontal",1,"po-lg-9","po-md-8",3,"p-label","p-value"],["p-icon","","p-orientation","horizontal",1,"po-lg-3","po-md-4",3,"p-type","p-value"]],template:function(l,o){l&1&&(e(0,"po-page-default",0)(1,"div",1)(2,"po-widget",2)(3,"div",3)(4,"div",4),i(5,"po-avatar",5),n(),e(6,"div",6)(7,"div",7),i(8,"po-info",8)(9,"po-tag",9),n(),e(10,"div",7),i(11,"po-info",10),n()()()(),e(12,"po-widget",11)(13,"div",3),P(14,_e,1,3,"po-tag",12),n()()(),e(15,"po-widget",13)(16,"po-tabs"),P(17,De,2,2,"po-tab",14),n()()()),l&2&&(m(5),j("p-src","assets/graphics/",o.userData.photo,""),m(3),d("p-value",o.userData.name),m(3),d("p-value",o.userData.email),m(3),d("ngForOf",o.investiments),m(3),d("ngForOf",o.items))},dependencies:[G,te,O,F,z,v,f,me],encapsulation:2})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-bank-account-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Tag - Bank Account"),n(),e(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.html"),n(),e(13,"pre",7),t(14,`<po-page-default p-title="Bank Statement">
  <div class="po-mt-1 po-lg-7">
    <po-widget class="po-md-12 po-sm-mb-1 po-mb-1 po-lg-mb-1" p-title="User information">
      <div class="po-row">
        <div class="po-md-5 po-lg-4">
          <po-avatar p-size="xl" p-src="assets/graphics/{ { userData.photo }}"></po-avatar>
        </div>
        <div class="po-md-7 po-lg-8">
          <div class="po-mb-2">
            <po-info p-label="Name" [p-value]="userData.name"> </po-info>
            <po-tag p-value="Premium Account"> </po-tag>
          </div>
          <div class="po-mb-2">
            <po-info class="po-mt-5" p-label="Email" [p-value]="userData.email"> </po-info>
          </div>
        </div>
      </div>
    </po-widget>

    <po-widget class="po-md-12 po-sm-mt-1 po-mt-1 po-lg-mt-1" p-title="My Investiments">
      <div class="po-row">
        <po-tag
          *ngFor="let investiment of investiments"
          class="po-md-6 po-lg-3"
          [p-label]="investiment.label"
          [p-type]="investiment.type"
          [p-value]="investiment.value"
        >
        </po-tag>
      </div>
    </po-widget>
  </div>
  <po-widget p-title="Last three month operations" class="po-mt-1 po-lg-5">
    <po-tabs>
      <po-tab *ngFor="let item of items" p-active p-label="{ { item.month }}">
        <po-widget class="po-lg-12 po-sm-mb-1 po-mb-1 po-lg-mb-1" *ngFor="let item of item.details">
          <div class="po-row">
            <po-info
              class="po-lg-9 po-md-8"
              p-label-size="6"
              p-orientation="horizontal"
              [p-label]="item.label"
              [p-value]="item.value"
            >
            </po-info>
            <po-tag
              class="po-lg-3 po-md-4"
              p-icon
              p-orientation="horizontal"
              [p-type]="item.type"
              [p-value]="item.text"
            >
            </po-tag>
          </div>
        </po-widget>
      </po-tab>
    </po-tabs>
  </po-widget>
</po-page-default>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts"),n(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-tag-bank-account',
  templateUrl: './sample-po-tag-bank-account.component.html',
  standalone: false
})
export class SamplePoTagBankAccountComponent {
  investiments = [
    { label: 'Stocks', type: 'danger', value: 'Low -3.50%' },
    { label: 'Treasury bills', type: 'success', value: 'Growing +2.25%' },
    { label: 'Real estate', type: 'warning', value: 'Risk -0.02%' },
    { label: 'Mutual fund', type: 'success', value: 'Growing +3.00%' }
  ];

  items = [
    {
      month: 'June',
      details: [
        { label: 'Automatic Payment', value: '$ 250', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 500', type: 'success', text: 'Income' },
        { label: 'Bank receipt', value: '$ 10', type: 'info', text: 'Document' },
        { label: 'Credit Card', value: '$ 230', type: 'danger', text: 'Expense' },
        { label: 'Personal Loan', value: '$ 150', type: 'warning', text: 'Future' }
      ]
    },
    {
      month: 'July',
      details: [
        { label: 'Deposit', value: '$ 500', type: 'success', text: 'Income' },
        { label: 'Car insurance', value: '$ 40', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 200', type: 'success', text: 'Income' },
        { label: 'Bank statement', value: '$ 5', type: 'info', text: 'Document' },
        { label: 'Deposit', value: '$ 70', type: 'success', text: 'Income' }
      ]
    },
    {
      month: 'August',
      details: [
        { label: 'Student Loan', value: '$ 250', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 50', type: 'success', text: 'Income' },
        { label: 'Bank receipt', value: '$ 10', type: 'info', text: 'Document' },
        { label: 'Automatic Payment', value: '$ 230', type: 'warning', text: 'Future' },
        { label: 'Credit Card', value: '$ 150', type: 'warning', text: 'Future' }
      ]
    }
  ];

  advantages = [
    {
      title: 'Platinum Card:',
      description: 'best card in the market. You earn points and have concierge service and cultural advice.'
    },
    { title: 'Exclusive agencies:', description: 'environments designed to offer comfort and privacy.' },
    {
      title: 'Unique experience',
      description: 'with exclusivity background in travel, culture, entertainment and much more.'
    },
    { title: 'Progressive discounts', description: 'on service packages, according to the volume of investments.' },
    { title: 'Free tax:', description: 'withdrawals and Transfers Between Unlimited Accounts.' }
  ];

  userData = {
    'name': 'Natasha Romanova',
    'email': 'natasha.romanova@po-ui.com.br',
    'photo': 'avatar2.png'
  };
}
`),n()()()()(),e(21,"div",10),i(22,"sample-po-tag-bank-account"),n(),i(23,"hr")),l&2&&(m(5),w("po-icon "+o.sampleCodeButtonIcon),m(),_(" ",o.sampleCodeButtonLabel,""),m(),d("ngClass",k(4,Oe,o.hideSampleCodeTabs)))},dependencies:[D,y,v,f,ge],encapsulation:2})}return a})();var Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-doc"]],standalone:!1,decls:1003,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoTagOrientation"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"]],template:function(l,o){l&1&&(e(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoTagModule } from '@po-ui/ng-components';"),n()(),e(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente "),e(7,"code"),t(8,"po-tag"),n(),t(9,"."),n()(),e(10,"h3",3),t(11,"Componente"),n(),e(12,"h4",4)(13,"code",5),t(14,"PoTagComponent"),n()(),e(15,"div",2)(16,"p"),t(17,`Este componente permite exibir um valor em forma de um marcador colorido, sendo poss\xEDvel definir uma legenda e realizar customiza\xE7\xF5es
na cor, iconografia e tipo.`),n(),e(18,"p"),t(19,"Al\xE9m disso, \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada tanto ao "),e(20,"em"),t(21,"click"),n(),t(22," quanto atrav\xE9s das teclas "),e(23,"em"),t(24,"enter/space"),n(),t(25,` enquanto navega
utilizando a tecla `),e(26,"em"),t(27,"tab"),n(),t(28,"."),n(),e(29,"p"),t(30,"Seu uso \xE9 recomendado para informa\xE7\xF5es que necessitem de destaque em forma de marca\xE7\xE3o."),n(),e(31,"h4"),t(32,"Tokens customiz\xE1veis"),n(),e(33,"p"),t(34,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),n(),e(35,"blockquote")(36,"p"),t(37,"Para maiores informa\xE7\xF5es, acesse o guia "),e(38,"a",6),t(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),n(),t(40,"."),n()(),e(41,"table")(42,"thead")(43,"tr")(44,"th"),t(45,"Propriedade"),n(),e(46,"th"),t(47,"Descri\xE7\xE3o"),n(),e(48,"th"),t(49,"Valor Padr\xE3o"),n()()(),e(50,"tbody")(51,"tr")(52,"td")(53,"strong"),t(54,"Default Values"),n()(),i(55,"td")(56,"td"),n(),e(57,"tr")(58,"td")(59,"code"),t(60,"--font-family"),n()(),e(61,"td"),t(62,"Fam\xEDlia tipogr\xE1fica usada"),n(),e(63,"td")(64,"code"),t(65,"var(--font-family-theme)"),n()()(),e(66,"tr")(67,"td")(68,"code"),t(69,"--font-size"),n()(),e(70,"td"),t(71,"Tamanho da fonte"),n(),e(72,"td")(73,"code"),t(74,"var(--font-size-sm)"),n()()(),e(75,"tr")(76,"td")(77,"code"),t(78,"--line-height"),n()(),e(79,"td"),t(80,"Tamanho da label"),n(),e(81,"td")(82,"code"),t(83,"var(---line-height-sm)"),n()()(),e(84,"tr")(85,"td")(86,"code"),t(87,"--border-radius"),n()(),e(88,"td"),t(89,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),n(),e(90,"td")(91,"code"),t(92,"var(--border-radius-pill)"),n()()(),e(93,"tr")(94,"td")(95,"strong"),t(96,"Neutral"),n()(),i(97,"td")(98,"td"),n(),e(99,"tr")(100,"td")(101,"code"),t(102,"--color-neutral"),n()(),e(103,"td"),t(104,"Cor principal no estado neutral"),n(),e(105,"td")(106,"code"),t(107,"var(--color-neutral-light-10)"),n()()(),e(108,"tr")(109,"td")(110,"code"),t(111,"--text-color-positive"),n()(),e(112,"td"),t(113,"Cor do texto no estado neutral"),n(),e(114,"td")(115,"code"),t(116,"var(--color-neutral-dark-80)"),n()()(),e(117,"tr")(118,"td")(119,"strong"),t(120,"Positive"),n()(),i(121,"td")(122,"td"),n(),e(123,"tr")(124,"td")(125,"code"),t(126,"--color-positive"),n()(),e(127,"td"),t(128,"Cor principal no estado positive"),n(),e(129,"td")(130,"code"),t(131,"var(--color-feedback-positive-lightest)"),n()()(),e(132,"tr")(133,"td")(134,"code"),t(135,"--text-color-positive"),n()(),e(136,"td"),t(137,"Cor do texto no estado positive"),n(),e(138,"td")(139,"code"),t(140,"var(--color-feedback-positive-dark)"),n()()(),e(141,"tr")(142,"td")(143,"strong"),t(144,"Negative"),n()(),i(145,"td")(146,"td"),n(),e(147,"tr")(148,"td")(149,"code"),t(150,"--color-negative"),n()(),e(151,"td"),t(152,"Cor principal no estado danger"),n(),e(153,"td")(154,"code"),t(155,"var(--color-feedback-negative-lightest)"),n()()(),e(156,"tr")(157,"td")(158,"code"),t(159,"--text-color-negative"),n()(),e(160,"td"),t(161,"Cor do texto no estado danger"),n(),e(162,"td")(163,"code"),t(164,"var(--color-feedback-negative-darker)"),n()()(),e(165,"tr")(166,"td")(167,"strong"),t(168,"Warning"),n()(),i(169,"td")(170,"td"),n(),e(171,"tr")(172,"td")(173,"code"),t(174,"--color-tag-warning"),n()(),e(175,"td"),t(176,"Cor principal no estado warning"),n(),e(177,"td")(178,"code"),t(179,"var(--color-feedback-warning-lightest)"),n()()(),e(180,"tr")(181,"td")(182,"code"),t(183,"--text-color-warning"),n()(),e(184,"td"),t(185,"Cor do texto no estado warning"),n(),e(186,"td")(187,"code"),t(188,"var(--color-feedback-warning-darkest)"),n()()(),e(189,"tr")(190,"td")(191,"strong"),t(192,"Info"),n()(),i(193,"td")(194,"td"),n(),e(195,"tr")(196,"td")(197,"code"),t(198,"--color-info"),n()(),e(199,"td"),t(200,"Cor principal no estado info"),n(),e(201,"td")(202,"code"),t(203,"var(--color-feedback-info-lightest)"),n()()(),e(204,"tr")(205,"td")(206,"code"),t(207,"--text-color-info"),n()(),e(208,"td"),t(209,"Cor do texto no estado info"),n(),e(210,"td")(211,"code"),t(212,"var(--color-feedback-info-dark)"),n()()(),e(213,"tr")(214,"td")(215,"strong"),t(216,"Removable"),n()(),i(217,"td")(218,"td"),n(),e(219,"tr")(220,"td")(221,"code"),t(222,"--color"),n()(),e(223,"td"),t(224,"Cor principal quando removable"),n(),e(225,"td")(226,"code"),t(227,"var(--color-brand-01-lightest)"),n()()(),e(228,"tr")(229,"td")(230,"code"),t(231,"--border-color"),n()(),e(232,"td"),t(233,"Cor de borda quando removable \xA0"),n(),e(234,"td")(235,"code"),t(236,"var(--color-brand-01-lighter)"),n()()(),e(237,"tr")(238,"td")(239,"code"),t(240,"--color-icon"),n()(),e(241,"td"),t(242,"Cor do \xEDcone quando removable \xA0"),n(),e(243,"td")(244,"code"),t(245,"var(--color-action-default)"),n()()(),e(246,"tr")(247,"td")(248,"code"),t(249,"--text-color"),n()(),e(250,"td"),t(251,"Cor do texto quando removable \xA0"),n(),e(252,"td")(253,"code"),t(254,"var(--color-neutral-dark-80)"),n()()(),e(255,"tr")(256,"td")(257,"code"),t(258,"--color-hover"),n()(),e(259,"td"),t(260,"Cor do hover no estado removable \xA0"),n(),e(261,"td")(262,"code"),t(263,"var(--color-brand-01-lighter)"),n()()(),e(264,"tr")(265,"td")(266,"strong"),t(267,"Focused"),n()(),i(268,"td")(269,"td"),n(),e(270,"tr")(271,"td")(272,"code"),t(273,"--outline-color-focused"),n()(),e(274,"td"),t(275,"Cor do outline do estado de focus"),n(),e(276,"td")(277,"code"),t(278,"var(--color-action-focus)"),n()()(),e(279,"tr")(280,"td")(281,"strong"),t(282,"Disabled"),n()(),i(283,"td")(284,"td"),n(),e(285,"tr")(286,"td")(287,"code"),t(288,"--color-disabled"),n()(),e(289,"td"),t(290,"Cor principal no estado disabled"),n(),e(291,"td")(292,"code"),t(293,"var(--color-neutral-light-20)"),n()()(),e(294,"tr")(295,"td")(296,"code"),t(297,"--border-color-disabled"),n()(),e(298,"td"),t(299,"Cor da borda no estado disabled \xA0"),n(),e(300,"td")(301,"code"),t(302,"var(--color-action-disabled)"),n()()(),e(303,"tr")(304,"td")(305,"code"),t(306,"--color-icon-disabled"),n()(),e(307,"td"),t(308,"Cor do icone no estado disabled \xA0"),n(),e(309,"td")(310,"code"),t(311,"var(--color-action-disabled)"),n()()(),e(312,"tr")(313,"td")(314,"code"),t(315,"--text-color-disabled"),n()(),e(316,"td"),t(317,"Cor do texto no estado disabled \xA0"),n(),e(318,"td")(319,"code"),t(320,"var(--color-neutral-mid-60)"),n()()()()()(),e(321,"div",7)(322,"h4",8),t(323,"Seletor"),n(),e(324,"pre",9),t(325,`<po-tag
    (p-click)="EventEmitter"
    p-color="string"
    p-disabled="boolean"
    p-icon="string | boolean | TemplateRef<void>"
    p-label="string"
    p-literals="PoTagLiterals"
    p-orientation="PoTagOrientation"
    p-removable="boolean"
    (p-close)="EventEmitter"
    p-text-color="string"
    p-type="PoTagType"
    p-value="string" >
</po-tag>
`),n()(),e(326,"h4",10),t(327,"Propriedades"),n(),e(328,"table",11)(329,"tr",12)(330,"th",13),t(331,"Nome"),n(),e(332,"th",13),t(333,"Tipo"),n(),e(334,"th",13),t(335,"Padr\xE3o"),n(),e(336,"th",13),t(337,"Descri\xE7\xE3o"),n()(),e(338,"tr",14)(339,"td",15)(340,"div",16)(341,"span",17),t(342," (p-click)"),i(343,"br"),n()()(),e(344,"td",18)(345,"code",19),t(346,"EventEmitter"),n()(),e(347,"td",20),t(348,"-"),n(),e(349,"td",21)(350,"em")(351,"strong"),t(352,"(opcional)"),n()(),e(353,"p"),t(354,"A\xE7\xE3o que ser\xE1 executada ao clicar sobre o "),e(355,"code"),t(356,"po-tag"),n(),t(357," e que receber\xE1 como par\xE2metro um objeto contendo o seu valor e tipo."),n(),e(358,"p"),t(359,"O evento de click s\xF3 funciona se a tag n\xE3o for remov\xEDvel."),n()()(),e(360,"tr",14)(361,"td",15)(362,"div",22)(363,"span",23),t(364," p-color"),i(365,"br"),n()()(),e(366,"td",18)(367,"code",24),t(368,"string"),n()(),e(369,"td",20),t(370,"-"),n(),e(371,"td",21)(372,"em")(373,"strong"),t(374,"(opcional)"),n()(),e(375,"p"),t(376,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),n(),e(377,"ul")(378,"li")(379,"p"),t(380,"Hexadeximal, por exemplo "),e(381,"code"),t(382,"#c64840"),n(),t(383,";"),n()(),e(384,"li")(385,"p"),t(386,"RGB, como "),e(387,"code"),t(388,"rgb(0, 0, 165)"),n(),t(389,";"),n()(),e(390,"li")(391,"p"),t(392,"O nome da cor, por exemplo "),e(393,"code"),t(394,"blue"),n(),t(395,";"),n()(),e(396,"li")(397,"p"),t(398,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),n(),e(399,"ul")(400,"li"),i(401,"span",25),e(402,"code"),t(403,"color-01"),n()(),e(404,"li"),i(405,"span",26),e(406,"code"),t(407,"color-02"),n()(),e(408,"li"),i(409,"span",27),e(410,"code"),t(411,"color-03"),n()(),e(412,"li"),i(413,"span",28),e(414,"code"),t(415,"color-04"),n()(),e(416,"li"),i(417,"span",29),e(418,"code"),t(419,"color-05"),n()(),e(420,"li"),i(421,"span",30),e(422,"code"),t(423,"color-06"),n()(),e(424,"li"),i(425,"span",31),e(426,"code"),t(427,"color-07"),n()(),e(428,"li"),i(429,"span",32),e(430,"code"),t(431,"color-08"),n()(),e(432,"li"),i(433,"span",33),e(434,"code"),t(435,"color-09"),n()(),e(436,"li"),i(437,"span",34),e(438,"code"),t(439,"color-10"),n()(),e(440,"li"),i(441,"span",35),e(442,"code"),t(443,"color-11"),n()(),e(444,"li"),i(445,"span",36),e(446,"code"),t(447,"color-12"),n()()()(),e(448,"li")(449,"p"),t(450,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),n()()(),e(451,"blockquote")(452,"p")(453,"strong"),t(454,"Aten\xE7\xE3o:"),n(),t(455," A propriedade "),e(456,"code"),t(457,"p-type"),n(),t(458," sobrep\xF5e esta defini\xE7\xE3o."),n()()()(),e(459,"tr",14)(460,"td",15)(461,"div",22)(462,"span",23),t(463," p-disabled"),i(464,"br"),n()()(),e(465,"td",18)(466,"code",37),t(467,"boolean"),n()(),e(468,"td",20)(469,"p")(470,"code"),t(471,"false"),n()()(),e(472,"td",21)(473,"em")(474,"strong"),t(475,"(opcional)"),n()(),e(476,"p"),t(477,"Desabilita o "),e(478,"code"),t(479,"po-tag"),n(),t(480," e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),n(),e(481,"blockquote")(482,"p"),t(483,"A propriedade "),e(484,"code"),t(485,"p-disabled"),n(),t(486," somente ter\xE1 efeito caso a propriedade "),e(487,"code"),t(488,"p-removable"),n(),t(489," esteja definida como "),e(490,"code"),t(491,"true"),n(),t(492,"."),n()()()(),e(493,"tr",14)(494,"td",15)(495,"div",22)(496,"span",23),t(497," p-icon"),i(498,"br"),n()()(),e(499,"td",18)(500,"code",24),t(501,"string "),n(),e(502,"code",37),t(503," boolean "),n(),e(504,"code",38),t(505," TemplateRef<void>"),n()(),e(506,"td",20)(507,"p")(508,"code"),t(509,"false"),n()()(),e(510,"td",21)(511,"em")(512,"strong"),t(513,"(opcional)"),n()(),e(514,"p"),t(515,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),e(516,"em"),t(517,"tag"),n(),t(518,"."),n(),e(519,"p"),t(520,"Quando "),e(521,"code"),t(522,"p-type"),n(),t(523," estiver definida, basta informar um valor igual a "),e(524,"code"),t(525,"true"),n(),t(526," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),n(),e(527,"ul")(528,"li"),i(529,"span",39),t(530," - "),e(531,"code"),t(532,"success"),n()(),e(533,"li"),i(534,"span",40),t(535," - "),e(536,"code"),t(537,"warning"),n()(),e(538,"li"),i(539,"span",41),t(540," - "),e(541,"code"),t(542,"danger"),n()(),e(543,"li"),i(544,"span",42),t(545," - "),e(546,"code"),t(547,"info"),n()()(),e(548,"p"),t(549,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),e(550,"a",43),t(551,"Biblioteca de \xEDcones"),n(),t(552,". conforme exemplo abaixo:"),n(),e(553,"pre")(554,"code"),t(555,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),n()(),e(556,"p"),t(557,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),e(558,"em"),t(559,"Font Awesome"),n(),t(560,", da seguinte forma:"),n(),e(561,"pre")(562,"code"),t(563,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),n()(),e(564,"p"),t(565,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),e(566,"code"),t(567,"TemplateRef"),n(),t(568,", conforme exemplo abaixo:"),n(),e(569,"pre")(570,"code"),t(571,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),n()(),e(572,"blockquote")(573,"p"),t(574,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),e(575,"code"),t(576,"font-size: inherit"),n(),t(577," caso o \xEDcone utilizado n\xE3o aplique-o."),n()()()(),e(578,"tr",14)(579,"td",15)(580,"div",22)(581,"span",23),t(582," p-label"),i(583,"br"),n()()(),e(584,"td",18)(585,"code",24),t(586,"string"),n()(),e(587,"td",20),t(588,"-"),n(),e(589,"td",21)(590,"em")(591,"strong"),t(592,"(opcional)"),n()(),e(593,"p"),t(594,"Define uma legenda que ser\xE1 exibida acima ou ao lado da "),e(595,"em"),t(596,"tag"),n(),t(597,", de acordo com a "),e(598,"code"),t(599,"p-orientation"),n(),t(600,"."),n()()(),e(601,"tr",14)(602,"td",15)(603,"div",22)(604,"span",23),t(605," p-literals"),i(606,"br"),n()()(),e(607,"td",18)(608,"code",44),t(609,"PoTagLiterals"),n()(),e(610,"td",20),t(611,"-"),n(),e(612,"td",21)(613,"em")(614,"strong"),t(615,"(opcional)"),n()(),e(616,"p"),t(617,"Objeto com as literais usadas no "),e(618,"code"),t(619,"po-tag"),n(),t(620,"."),n(),e(621,"p"),t(622,"Para utilizar, basta passar a literal customizada:"),n(),e(623,"pre")(624,"code"),t(625,`const customLiterals: PoTagLiterals = {
  remove: 'Remover itens'
};
`),n()(),e(626,"p"),t(627,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),n(),e(628,"pre")(629,"code"),t(630,`<po-tag
  [p-literals]="customLiterals">
</po-tag>
`),n()(),e(631,"blockquote")(632,"p"),t(633,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),e(634,"a",45)(635,"code"),t(636,"PoI18nService"),n()(),t(637," ou do browser."),n()()()(),e(638,"tr",14)(639,"td",15)(640,"div",22)(641,"span",23),t(642," p-orientation"),i(643,"br"),n()()(),e(644,"td",18)(645,"code",46),t(646,"PoTagOrientation"),n()(),e(647,"td",20)(648,"p")(649,"code"),t(650,"vertical"),n()()(),e(651,"td",21)(652,"em")(653,"strong"),t(654,"(opcional)"),n()(),e(655,"p"),t(656,"Define o "),e(657,"em"),t(658,"layout"),n(),t(659," de exibi\xE7\xE3o."),n()()(),e(660,"tr",14)(661,"td",15)(662,"div",22)(663,"span",23),t(664," p-removable"),i(665,"br"),n()()(),e(666,"td",18)(667,"code",37),t(668,"boolean"),n()(),e(669,"td",20)(670,"p")(671,"code"),t(672,"false"),n()()(),e(673,"td",21)(674,"em")(675,"strong"),t(676,"(opcional)"),n()(),e(677,"p"),t(678,"Habilita a op\xE7\xE3o de remover a tag"),n()()(),e(679,"tr",14)(680,"td",15)(681,"div",16)(682,"span",17),t(683," (p-close)"),i(684,"br"),n()()(),e(685,"td",18)(686,"code",19),t(687,"EventEmitter"),n()(),e(688,"td",20),t(689,"-"),n(),e(690,"td",21)(691,"em")(692,"strong"),t(693,"(opcional)"),n()(),e(694,"p"),t(695,"A\xE7\xE3o que sera executada quando clicar sobre o \xEDcone de remover no "),e(696,"code"),t(697,"po-tag"),n()()()(),e(698,"tr",14)(699,"td",15)(700,"div",22)(701,"span",23),t(702," p-text-color"),i(703,"br"),n()()(),e(704,"td",18)(705,"code",24),t(706,"string"),n()(),e(707,"td",20),t(708,"-"),n(),e(709,"td",21)(710,"em")(711,"strong"),t(712,"(opcional)"),n()(),e(713,"p"),t(714,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),n(),e(715,"ul")(716,"li")(717,"p"),t(718,"Hexadeximal, por exemplo "),e(719,"code"),t(720,"#c64840"),n(),t(721,";"),n()(),e(722,"li")(723,"p"),t(724,"RGB, como "),e(725,"code"),t(726,"rgb(0, 0, 165)"),n(),t(727,";"),n()(),e(728,"li")(729,"p"),t(730,"O nome da cor, por exemplo "),e(731,"code"),t(732,"blue"),n(),t(733,";"),n()(),e(734,"li")(735,"p"),t(736,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),n(),e(737,"ul")(738,"li"),i(739,"span",25),e(740,"code"),t(741,"color-01"),n()(),e(742,"li"),i(743,"span",26),e(744,"code"),t(745,"color-02"),n()(),e(746,"li"),i(747,"span",27),e(748,"code"),t(749,"color-03"),n()(),e(750,"li"),i(751,"span",28),e(752,"code"),t(753,"color-04"),n()(),e(754,"li"),i(755,"span",29),e(756,"code"),t(757,"color-05"),n()(),e(758,"li"),i(759,"span",30),e(760,"code"),t(761,"color-06"),n()(),e(762,"li"),i(763,"span",31),e(764,"code"),t(765,"color-07"),n()(),e(766,"li"),i(767,"span",32),e(768,"code"),t(769,"color-08"),n()(),e(770,"li"),i(771,"span",33),e(772,"code"),t(773,"color-09"),n()(),e(774,"li"),i(775,"span",34),e(776,"code"),t(777,"color-10"),n()(),e(778,"li"),i(779,"span",35),e(780,"code"),t(781,"color-11"),n()(),e(782,"li"),i(783,"span",36),e(784,"code"),t(785,"color-12"),n()()()(),e(786,"li")(787,"p"),t(788,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),n()()(),e(789,"blockquote")(790,"p")(791,"strong"),t(792,"Aten\xE7\xE3o:"),n(),t(793," A propriedade "),e(794,"code"),t(795,"p-type"),n(),t(796," sobrep\xF5e esta defini\xE7\xE3o."),n()()()(),e(797,"tr",14)(798,"td",15)(799,"div",22)(800,"span",23),t(801," p-type"),i(802,"br"),n()()(),e(803,"td",18)(804,"code",47),t(805,"PoTagType"),n()(),e(806,"td",20)(807,"p")(808,"code"),t(809,"info"),n()()(),e(810,"td",21)(811,"em")(812,"strong"),t(813,"(opcional)"),n()(),e(814,"p"),t(815,"Define o tipo da "),e(816,"em"),t(817,"tag"),n(),t(818,"."),n(),e(819,"p"),t(820,"Valores v\xE1lidos:"),n(),e(821,"ul")(822,"li")(823,"code"),t(824,"success"),n(),t(825,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),n(),e(826,"li")(827,"code"),t(828,"warning"),n(),t(829,": cor amarela que representa aviso ou advert\xEAncia."),n(),e(830,"li")(831,"code"),t(832,"danger"),n(),t(833,": cor vermelha para erro ou aviso cr\xEDtico."),n(),e(834,"li")(835,"code"),t(836,"info"),n(),t(837,": cor azul claro que caracteriza conte\xFAdo informativo."),n(),e(838,"li")(839,"code"),t(840,"neutral"),n(),t(841,": cor cinza claro para uso geral."),n()(),e(842,"blockquote")(843,"p"),t(844,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),e(845,"code"),t(846,"p-color"),n(),t(847," e "),e(848,"code"),t(849,"p-icon"),n(),t(850," somente ser\xE1 exibido caso seja "),e(851,"code"),t(852,"true"),n(),t(853,"."),n()()()(),e(854,"tr",14)(855,"td",15)(856,"div",22)(857,"span",23),t(858," p-value"),i(859,"br"),n()()(),e(860,"td",18)(861,"code",24),t(862,"string"),n()(),e(863,"td",20),t(864,"-"),n(),e(865,"td",21)(866,"p"),t(867,"Texto da tag."),n()()()(),e(868,"h3"),t(869,"Interfaces"),n(),e(870,"h4",48)(871,"code",5),t(872,"PoTagLiterals"),n()(),e(873,"div",2)(874,"p"),t(875,"Interface para defini\xE7\xE3o das literais usadas no "),e(876,"code"),t(877,"po-tag"),n(),t(878,"."),n()(),e(879,"h4",10),t(880,"Propriedades"),n(),e(881,"table",11)(882,"tr",12)(883,"th",13),t(884,"Nome"),n(),e(885,"th",13),t(886,"Tipo"),n(),e(887,"th",13),t(888,"Descri\xE7\xE3o"),n()(),e(889,"tr",14)(890,"td",15)(891,"div",22)(892,"span",23),t(893," remove"),i(894,"br"),n()()(),e(895,"td",18)(896,"code",24),t(897,"string"),n()(),e(898,"td",21)(899,"em")(900,"strong"),t(901,"(opcional)"),n()(),e(902,"p"),t(903,"Texto exibido no tooltip indicando remo\xE7\xE3o da tag."),n()()()(),e(904,"h3"),t(905,"Enums"),n(),e(906,"h4",4)(907,"code",5),t(908,"PoTagOrientation"),n()(),e(909,"div",2)(910,"p"),t(911,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),e(912,"code"),t(913,"po-tag"),n(),t(914,"."),n()(),e(915,"h4",10),t(916,"Propriedades"),n(),e(917,"table",11)(918,"tr",12)(919,"th",13),t(920,"Nome"),n(),e(921,"th",13),t(922,"Descri\xE7\xE3o"),n()(),e(923,"tr",14)(924,"td",15)(925,"div",22)(926,"span",23),t(927," Horizontal"),i(928,"br"),n()()(),e(929,"td",21)(930,"p"),t(931,"A tag ser\xE1 exibida na horizontal, ao lado direito em rela\xE7\xE3o ao label."),n()()(),e(932,"tr",14)(933,"td",15)(934,"div",22)(935,"span",23),t(936," Vertical"),i(937,"br"),n()()(),e(938,"td",21)(939,"p"),t(940,"Exibe a tag na vertical, ou seja, abaixo do label."),n()()()(),e(941,"h4",4)(942,"code",5),t(943,"PoTagType"),n()(),e(944,"div",2)(945,"p"),t(946,"Define os tipos dispon\xEDveis para o "),e(947,"code"),t(948,"po-tag"),n(),t(949,"."),n()(),e(950,"h4",10),t(951,"Propriedades"),n(),e(952,"table",11)(953,"tr",12)(954,"th",13),t(955,"Nome"),n(),e(956,"th",13),t(957,"Descri\xE7\xE3o"),n()(),e(958,"tr",14)(959,"td",15)(960,"div",22)(961,"span",23),t(962," Danger"),i(963,"br"),n()()(),e(964,"td",21)(965,"p"),t(966,"Erro, perigo, problema ou aviso cr\xEDtico."),n()()(),e(967,"tr",14)(968,"td",15)(969,"div",22)(970,"span",23),t(971," Info"),i(972,"br"),n()()(),e(973,"td",21)(974,"p"),t(975,"Informativo ou explicativo."),n()()(),e(976,"tr",14)(977,"td",15)(978,"div",22)(979,"span",23),t(980," Success"),i(981,"br"),n()()(),e(982,"td",21)(983,"p"),t(984,"Confirma\xE7\xE3o, resultados positivos ou \xEAxito."),n()()(),e(985,"tr",14)(986,"td",15)(987,"div",22)(988,"span",23),t(989," Warning"),i(990,"br"),n()()(),e(991,"td",21)(992,"p"),t(993,"Aviso ou advert\xEAncia."),n()()(),e(994,"tr",14)(995,"td",15)(996,"div",22)(997,"span",23),t(998," Neutral"),i(999,"br"),n()()(),e(1e3,"td",21)(1001,"p"),t(1002,"De uso geral, quando os tipos Info, Warning, Success e Danger n\xE3o atendem a necessidade."),n()()()()())},dependencies:[y],encapsulation:2})}return a})();var Se=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(W(Z),W(ee))};static \u0275cmp=c({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Tag",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return o.changeTab("doc")}),i(3,"sample-po-tag-doc"),n(),e(4,"po-tab",3),b("p-click",function(){return o.changeTab("web")}),i(5,"sample-po-tag-basic-view")(6,"sample-po-tag-labs-view")(7,"sample-po-tag-bank-account-view"),n()()()),l&2&&(d("p-actions",o.actions),m(2),d("p-active",o.activeTab==="doc"),m(2),d("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[z,v,f,se,ue,be,Ee],encapsulation:2})}return a})();var Ie=[{path:"",component:Se}],xe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=A({type:a});static \u0275inj=I({imports:[N.forChild(Ie),N]})}return a})();var lt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=A({type:a});static \u0275inj=I({imports:[pe,xe]})}return a})();export{lt as DocPoTagModule};
