import{o as w,p as Be}from"./chunk-R3BKLGLC.js";import{Ab as x,Ba as ue,Ca as k,Db as ne,Ea as Fe,F as K,Fa as De,Ga as be,I as se,La as Ie,Ra as J,Sa as Ne,T as te,Wa as W,a as me,ha as Le,ja as qe,la as oe,nb as We,q as de,ta as ce,zb as y}from"./chunk-TUTTJOS2.js";import{$a as g,Ac as Q,Ba as P,Dc as Me,Ea as o,Eb as $,Ec as Te,Fa as e,Ga as l,Ha as X,Ia as Z,Ib as _e,Ic as ke,Ja as ve,Ka as B,L as Ce,La as S,M as le,Ma as pe,Nc as Oe,Pa as ye,Pc as Ve,Rc as Se,T as u,Ta as H,Tb as ee,U as b,Ua as A,Va as G,Wa as I,Xa as t,Ya as ae,Za as v,ab as h,bb as f,cb as xe,db as he,eb as M,fb as we,ha as m,ia as _,kb as z,lb as R,oa as E,pa as re,pb as fe,tc as Pe,ua as D,ub as T,wb as j,wc as L,xc as N,ya as s,yc as U,zc as q}from"./chunk-MIQUIDUB.js";var lt=()=>({value:"Option 1"}),rt=()=>({value:"Option 2"}),pt=(a,V)=>[a,V],He=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","combo","p-label","PO Combo",3,"p-options"]],template:function(r,n){r&1&&l(0,"po-combo",0),r&2&&s("p-options",we(3,pt,he(1,lt),he(2,rt)))},dependencies:[k],encapsulation:2})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Combo Basic"),e(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-combo-basic/sample-po-combo-basic.component.html"),e(),o(13,"pre",7),t(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-combo-basic/sample-po-combo-basic.component.ts"),e(),o(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-combo-basic"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,dt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,He],encapsulation:2})}return a})();var Ge=(()=>{class a{additionalHelpTooltip;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];iconsOptions=[{label:"an an-building-apartment",value:"an an-building-apartment"},{label:"an an-gas-pump",value:"an an-gas-pump"},{label:"fa fa-calculator",value:"fa fa-calculator"}];propertiesOptions=[{value:"changeOnEnter",label:"Change On Enter"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"disabledInitFilter",label:"Disabled Init Filter"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"sort",label:"Sort"},{value:"clean",label:"Clean"},{value:"disabledTabFilter",label:"Disabled Tab Filter"},{value:"errorLimit",label:"Limit Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0}}changeEvent(p){this.event=p}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.additionalHelpTooltip="",this.combo=void 0,this.comboOptionGroupSwitch=!1,this.customLiterals=void 0,this.event="",this.debounceTime=void 0,this.fieldLabel="",this.fieldValue="",this.filterMinlength=void 0,this.filterService="",this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals="",this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.selectedOptionsGroup=void 0,this.size="medium"}insertGroupIntoSelectInput(p){this.selectedOptionsGroup=p,this.optionsGroupList=[...this.optionsGroupList,{label:p,value:p}]}verifyOptionObject(p,r,n){let{label:d,value:c}=r;if(n){let i=p.findIndex(Ee=>Ee.label===n&&"options"in Ee);return i===-1?(this.insertGroupIntoSelectInput(n),[...p,{label:n,options:[{label:d,value:c}]}]):(p[i].options.push({label:d,value:c}),p)}return[...p,{label:d,value:c}]}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-labs"]],standalone:!1,decls:44,vars:59,consts:[["fOption","ngForm"],["f","ngForm"],["name","combo",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-change-on-enter","p-clean","p-debounce-time","p-disabled","p-disabled-init-filter","p-disabled-tab-filter","p-field-label","p-field-value","p-filter-minlength","p-filter-mode","p-filter-service","p-help","p-icon","p-label","p-literals","p-optional","p-options","p-placeholder","p-required","p-field-error-message","p-show-required","p-sort","p-size","p-error-limit","p-listbox-control-position"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po combo options group"],["name","comboOptionGroupSwitch","p-label","Combo options group",1,"po-lg-4","po-md-12",3,"ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po combo options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-columns","4","p-label","Icon",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter Mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","debounceTime","p-clean","","p-label","Debounce Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterMinlength","p-clean","","p-label","Filter Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let d=B();o(0,"po-combo",2),f("ngModelChange",function(i){return u(d),h(n.combo,i)||(n.combo=i),b(i)}),S("p-change",function(){return u(d),b(n.changeEvent("p-change"))})("p-keydown",function(){return u(d),b(n.changeEvent("p-keydown"))}),e(),l(1,"hr"),o(2,"div",3),l(3,"po-info",4)(4,"po-info",5),e(),l(5,"hr"),o(6,"form",null,0),l(8,"po-divider",6),o(9,"div",3)(10,"po-switch",7),f("ngModelChange",function(i){return u(d),h(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),b(i)}),e(),o(11,"po-select",8),f("ngModelChange",function(i){return u(d),h(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),b(i)}),S("p-change",function(){return u(d),b(n.optionsGroupSelection())}),e(),o(12,"po-input",9),f("ngModelChange",function(i){return u(d),h(n.optionsGroup,i)||(n.optionsGroup=i),b(i)}),e()(),l(13,"po-divider",10),o(14,"div",3)(15,"po-input",11),f("ngModelChange",function(i){return u(d),h(n.option.label,i)||(n.option.label=i),b(i)}),e(),o(16,"po-input",12),f("ngModelChange",function(i){return u(d),h(n.option.value,i)||(n.option.value=i),b(i)}),e()(),o(17,"div",3)(18,"po-button",13),S("p-click",function(){return u(d),b(n.addOption())}),e()()(),l(19,"hr"),o(20,"form",null,1)(22,"po-input",14),f("ngModelChange",function(i){return u(d),h(n.label,i)||(n.label=i),b(i)}),e(),o(23,"po-input",15),f("ngModelChange",function(i){return u(d),h(n.help,i)||(n.help=i),b(i)}),e(),o(24,"po-input",16),f("ngModelChange",function(i){return u(d),h(n.additionalHelpTooltip,i)||(n.additionalHelpTooltip=i),b(i)}),e(),o(25,"po-input",17),f("ngModelChange",function(i){return u(d),h(n.placeholder,i)||(n.placeholder=i),b(i)}),e(),o(26,"po-input",18),f("ngModelChange",function(i){return u(d),h(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),b(i)}),e(),o(27,"div",3)(28,"po-checkbox-group",19),f("ngModelChange",function(i){return u(d),h(n.properties,i)||(n.properties=i),b(i)}),e(),o(29,"po-radio-group",20),f("ngModelChange",function(i){return u(d),h(n.icon,i)||(n.icon=i),b(i)}),e(),o(30,"po-radio-group",21),f("ngModelChange",function(i){return u(d),h(n.filterMode,i)||(n.filterMode=i),b(i)}),e(),o(31,"po-radio-group",22),f("ngModelChange",function(i){return u(d),h(n.size,i)||(n.size=i),b(i)}),e(),o(32,"po-radio-group",23),f("ngModelChange",function(i){return u(d),h(n.listboxPosition,i)||(n.listboxPosition=i),b(i)}),e()(),o(33,"div",3)(34,"po-input",24),f("ngModelChange",function(i){return u(d),h(n.filterService,i)||(n.filterService=i),b(i)}),e(),o(35,"po-input",25),f("ngModelChange",function(i){return u(d),h(n.literals,i)||(n.literals=i),b(i)}),S("p-change",function(){return u(d),b(n.changeLiterals())}),e()(),o(36,"div",3)(37,"po-input",26),f("ngModelChange",function(i){return u(d),h(n.fieldValue,i)||(n.fieldValue=i),b(i)}),e(),o(38,"po-input",27),f("ngModelChange",function(i){return u(d),h(n.fieldLabel,i)||(n.fieldLabel=i),b(i)}),e()(),o(39,"div",3)(40,"po-number",28),f("ngModelChange",function(i){return u(d),h(n.debounceTime,i)||(n.debounceTime=i),b(i)}),e(),o(41,"po-number",29),f("ngModelChange",function(i){return u(d),h(n.filterMinlength,i)||(n.filterMinlength=i),b(i)}),e()(),o(42,"div",3)(43,"po-button",30),S("p-click",function(){return u(d),b(n.restore())}),e()()()}if(r&2){let d=I(7);g("ngModel",n.combo),s("p-additional-help-tooltip",n.additionalHelpTooltip)("p-change-on-enter",n.properties.includes("changeOnEnter"))("p-clean",n.properties.includes("clean"))("p-debounce-time",n.debounceTime)("p-disabled",n.properties.includes("disabled"))("p-disabled-init-filter",n.properties.includes("disableInitFilter"))("p-disabled-tab-filter",n.properties.includes("disabledTabFilter"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-minlength",n.filterMinlength)("p-filter-mode",n.filterMode)("p-filter-service",n.filterService)("p-help",n.help)("p-icon",n.icon)("p-label",n.label)("p-literals",n.customLiterals)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-sort",n.properties.includes("sort"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-listbox-control-position",n.listboxPosition),m(3),s("p-value",n.combo),m(),s("p-value",n.event),m(6),g("ngModel",n.comboOptionGroupSwitch),m(),g("ngModel",n.selectedOptionsGroup),s("p-disabled",!n.comboOptionGroupSwitch)("p-options",n.optionsGroupList),m(),g("ngModel",n.optionsGroup),s("p-disabled",!n.comboOptionGroupSwitch),m(3),g("ngModel",n.option.label),m(),g("ngModel",n.option.value),m(2),s("p-disabled",d.form.invalid),m(4),g("ngModel",n.label),m(),g("ngModel",n.help),m(),g("ngModel",n.additionalHelpTooltip),m(),g("ngModel",n.placeholder),m(),g("ngModel",n.fieldErrorMessage),m(2),g("ngModel",n.properties),s("p-options",n.propertiesOptions),m(),g("ngModel",n.icon),s("p-options",n.iconsOptions),m(),g("ngModel",n.filterMode),s("p-options",n.filterModeOptions),m(),g("ngModel",n.size),s("p-options",n.sizeOptions),m(),g("ngModel",n.listboxPosition),s("p-options",n.listboxPositionOptions),m(2),g("ngModel",n.filterService),m(),g("ngModel",n.literals),m(2),g("ngModel",n.fieldValue),m(),g("ngModel",n.fieldLabel),m(2),g("ngModel",n.debounceTime),m(),g("ngModel",n.filterMinlength)}},dependencies:[Q,L,N,q,U,K,me,Le,qe,k,be,Ie,J,ce,W],encapsulation:2})}return a})();var ut=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Combo Labs"),e(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-combo-labs/sample-po-combo-labs.component.html"),e(),o(13,"pre",7),t(14,`<po-combo
  class="po-md-12"
  name="combo"
  [(ngModel)]="combo"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-change-on-enter]="properties.includes('changeOnEnter')"
  [p-clean]="properties.includes('clean')"
  [p-debounce-time]="debounceTime"
  [p-disabled]="properties.includes('disabled')"
  [p-disabled-init-filter]="properties.includes('disableInitFilter')"
  [p-disabled-tab-filter]="properties.includes('disabledTabFilter')"
  [p-field-label]="fieldLabel"
  [p-field-value]="fieldValue"
  [p-filter-minlength]="filterMinlength"
  [p-filter-mode]="filterMode"
  [p-filter-service]="filterService"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-sort]="properties.includes('sort')"
  [p-size]="size"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-listbox-control-position]="listboxPosition"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-combo>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="combo"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #fOption="ngForm">
  <po-divider p-label="Po combo options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-4 po-md-12"
      name="comboOptionGroupSwitch"
      [(ngModel)]="comboOptionGroupSwitch"
      p-label="Combo options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!comboOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!comboOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po combo options"></po-divider>

  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help Tooltip"
  >
  </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="icon"
      [(ngModel)]="icon"
      p-columns="4"
      p-label="Icon"
      [p-options]="iconsOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="filterMode"
      [(ngModel)]="filterMode"
      p-columns="4"
      p-label="Filter Mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="listboxPosition"
      [(ngModel)]="listboxPosition"
      p-label="Listbox Position"
      [p-options]="listboxPositionOptions"
    ></po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="filterService"
      [(ngModel)]="filterService"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Filter Service"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

    <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" name="debounceTime" [(ngModel)]="debounceTime" p-clean p-label="Debounce Time">
    </po-number>

    <po-number class="po-md-6" name="filterMinlength" [(ngModel)]="filterMinlength" p-clean p-label="Filter Min Length">
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-combo-labs/sample-po-combo-labs.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoComboLiterals,
  PoComboOption,
  PoComboOptionGroup,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-labs',
  templateUrl: './sample-po-combo-labs.component.html',
  standalone: false
})
export class SamplePoComboLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  combo: string;
  comboOptionGroupSwitch: boolean;
  customLiterals: PoComboLiterals;
  debounceTime: number;
  event: string;

  fieldLabel: string;
  fieldValue: string;
  filterMinlength: number;
  filterMode: string;
  filterService: string;

  help: string;
  icon: string;
  label: string;
  literals: string;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption>;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;

  option: PoComboOption;
  options: Array<PoComboOption | PoComboOptionGroup>;
  selectedOptionsGroup: string;
  size: string;

  listboxPosition: string = 'bottom';

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly listboxPositionOptions: Array<any> = [
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-building-apartment', value: 'an an-building-apartment' },
    { label: 'an an-gas-pump', value: 'an an-gas-pump' },
    { label: 'fa fa-calculator', value: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'changeOnEnter', label: 'Change On Enter' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'disabledInitFilter', label: 'Disabled Init Filter' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'sort', label: 'Sort' },
    { value: 'clean', label: 'Clean' },
    { value: 'disabledTabFilter', label: 'Disabled Tab Filter' },
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.combo = undefined;
    this.comboOptionGroupSwitch = false;
    this.customLiterals = undefined;
    this.event = '';

    this.debounceTime = undefined;
    this.fieldLabel = '';
    this.fieldValue = '';
    this.filterMinlength = undefined;
    this.filterService = '';
    this.filterMode = undefined;

    this.help = undefined;
    this.label = undefined;
    this.literals = '';
    this.icon = undefined;

    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoComboOption | PoComboOptionGroup>,
    option: PoComboOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoComboOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoComboOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-combo-labs"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,ut,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Ge],encapsulation:2})}return a})();var ge=(()=>{class a{getcities(){return[{label:"S\xE3o Paulo",options:[{label:"S\xE3o Paulo",value:"sao paulo"},{label:"Campinas",value:"campinas"}]},{label:"Paran\xE1",options:[{label:"S\xE3o Jos\xE9 dos Pinhais",value:"sao jose dos pinhais"},{label:"Londrina",value:"londrina"},{label:"Maring\xE1",value:"maringa"}]},{label:"Santa Catarina",options:[{label:"Joinville",value:"joinville"},{label:"Florian\xF3polis",value:"florianopolis"},{label:"Itaja\xED",value:"itajai"}]}]}getMedicalSpecialty(){return[{specialty:"Allergist",specialtyValue:"allergist"},{specialty:"Cardiologist",specialtyValue:"cardiologist"},{specialty:"General practitioner",specialtyValue:"generalPractitioner"},{specialty:"Dermatologist",specialtyValue:"dermatologist"},{specialty:"Gynecologist",specialtyValue:"gynecologist"},{specialty:"Nutritionist",specialtyValue:"nutritionist"},{specialty:"Pediatrist",specialtyValue:"pediatrist"},{specialty:"Psychiatrist",specialtyValue:"psychiatrist"},{specialty:"Orthopaedist",specialtyValue:"orthopaedist"}]}static \u0275fac=function(r){return new(r||a)};static \u0275prov=Ce({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ht=["schedulingForm"];function ft(a,V){a&1&&ve(0)}function St(a,V){if(a&1&&(o(0,"div",5),l(1,"po-avatar",17),o(2,"p",18),t(3),e()()),a&2){let p=pe().$implicit,r=pe();m(),s("p-src",r.getStateByLabel(p.label)),m(2),ae(p.label)}}function Et(a,V){if(a&1&&(o(0,"div",18),t(1),e()),a&2){let p=pe().$implicit;m(),ae(p.label)}}function Ct(a,V){if(a&1&&D(0,ft,1,0,"ng-container",16)(1,St,4,2,"ng-template",null,1,fe)(3,Et,2,1,"ng-template",null,2,fe),a&2){let p=V.$implicit,r=I(2),n=I(4);s("ngIf",p.options)("ngIfThen",r)("ngIfElse",n)}}var Re=(()=>{class a{poNotification;schedulingService;form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:"Particular",value:"particular"},{label:"Health Insurance",value:"healthInsurance"}];constructor(p,r){this.poNotification=p,this.schedulingService=r}ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty()}confirmPreAppointment(p=""){this.poNotification.success(`Great ${p}, your pre-appointment was successfully received!`),this.form.reset()}getStateByLabel(p){return`https://thf.totvs.com.br/sample/api/static/assets/${{"S\xE3o Paulo":"sp","Santa Catarina":"sc",Paran\u00E1:"pr"}[p]}.png`}static \u0275fac=function(r){return new(r||a)(_(te),_(ge))};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-scheduling"]],viewQuery:function(r,n){if(r&1&&H(ht,7),r&2){let d;A(d=G())&&(n.form=d.first)}},standalone:!1,features:[xe([ge])],decls:20,vars:12,consts:[["schedulingForm","ngForm"],["OptionsGroupTitle",""],["optionsGroup",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-placeholder","example@domain.com","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","birthday","p-clean","","p-label","Birthday","p-placeholder","dd/mm/yyyy","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","phone","p-clean","","p-label","Phone number","p-mask","(99) 99999-9999","p-placeholder","(99) 99999-9999","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","city","p-icon","an an-map-trifold","p-label","Select a location","p-placeholder","Select a location","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-combo-option-template",""],["name","typeScheduling","p-label","Type scheduling","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","medicalSpecialty","p-icon","an an-flask","p-label","Medical Specialty/Exam","p-required","","p-sort","","p-field-label","specialty","p-field-value","specialtyValue",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","informations","p-help","Additional informations","p-label","Informations",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-label","Schedule","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],[4,"ngIf","ngIfThen","ngIfElse"],["p-size","xs",1,"po-sm-2","po-md-3","po-lg-1",2,"background-color","#fbfbfb",3,"p-src"],[1,"po-sm-10","po-md-9","po-lg-11"]],template:function(r,n){if(r&1){let d=B();o(0,"div",3)(1,"div",4),t(2,"Pre-appointment scheduling"),e()(),o(3,"form",null,0)(5,"div",5)(6,"po-input",6),f("ngModelChange",function(i){return u(d),h(n.name,i)||(n.name=i),b(i)}),e(),o(7,"po-email",7),f("ngModelChange",function(i){return u(d),h(n.email,i)||(n.email=i),b(i)}),e()(),o(8,"div",5)(9,"po-datepicker",8),f("ngModelChange",function(i){return u(d),h(n.birthday,i)||(n.birthday=i),b(i)}),e(),o(10,"po-input",9),f("ngModelChange",function(i){return u(d),h(n.phone,i)||(n.phone=i),b(i)}),e()(),o(11,"div",5)(12,"po-combo",10),f("ngModelChange",function(i){return u(d),h(n.city,i)||(n.city=i),b(i)}),D(13,Ct,5,3,"ng-template",11),e(),o(14,"po-select",12),f("ngModelChange",function(i){return u(d),h(n.typeScheduling,i)||(n.typeScheduling=i),b(i)}),e(),o(15,"po-combo",13),f("ngModelChange",function(i){return u(d),h(n.medicalSpecialty,i)||(n.medicalSpecialty=i),b(i)}),e()(),o(16,"div",5)(17,"po-textarea",14),f("ngModelChange",function(i){return u(d),h(n.informations,i)||(n.informations=i),b(i)}),e()(),o(18,"div",5)(19,"po-button",15),S("p-click",function(){return u(d),b(n.confirmPreAppointment(n.name))}),e()()()}if(r&2){let d=I(4);m(6),g("ngModel",n.name),m(),g("ngModel",n.email),m(2),g("ngModel",n.birthday),m(),g("ngModel",n.phone),m(2),g("ngModel",n.city),s("p-options",n.citiesOptions),m(2),g("ngModel",n.typeScheduling),s("p-options",n.typeSchedulings),m(),g("ngModel",n.medicalSpecialty),s("p-options",n.medicalSpecialtyOptions),m(2),g("ngModel",n.informations),m(2),s("p-disabled",d.invalid)}},dependencies:[j,Q,L,N,q,U,de,K,oe,k,ue,De,be,J,Ne],encapsulation:2})}return a})();var yt=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-scheduling-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Combo - Scheduling"),e(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.html"),e(),o(13,"pre",7),t(14,`<div class="po-text-center">
  <div class="po-font-title">Pre-appointment scheduling</div>
</div>

<form #schedulingForm="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>

    <po-email
      class="po-lg-6"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Email"
      p-placeholder="example@domain.com"
      p-required
    >
    </po-email>
  </div>

  <div class="po-row">
    <po-datepicker
      class="po-lg-6"
      name="birthday"
      [(ngModel)]="birthday"
      p-clean
      p-label="Birthday"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>

    <po-input
      class="po-lg-6"
      name="phone"
      [(ngModel)]="phone"
      p-clean
      p-label="Phone number"
      p-mask="(99) 99999-9999"
      p-placeholder="(99) 99999-9999"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-combo
      class="po-lg-6"
      name="city"
      [(ngModel)]="city"
      p-icon="an an-map-trifold"
      p-label="Select a location"
      p-placeholder="Select a location"
      p-required
      p-sort
      [p-options]="citiesOptions"
    >
      <ng-template p-combo-option-template let-option>
        <ng-container *ngIf="option.options; then OptionsGroupTitle; else optionsGroup"></ng-container>
        <ng-template #OptionsGroupTitle>
          <div class="po-row">
            <po-avatar
              class="po-sm-2 po-md-3 po-lg-1"
              p-size="xs"
              style="background-color: #fbfbfb"
              [p-src]="getStateByLabel(option.label)"
            >
            </po-avatar>
            <p class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</p>
          </div>
        </ng-template>
        <ng-template #optionsGroup>
          <div class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</div>
        </ng-template>
      </ng-template>
    </po-combo>

    <po-select
      class="po-lg-6"
      name="typeScheduling"
      [(ngModel)]="typeScheduling"
      p-label="Type scheduling"
      p-required
      p-sort
      [p-options]="typeSchedulings"
    >
    </po-select>

    <po-combo
      class="po-lg-6"
      name="medicalSpecialty"
      [(ngModel)]="medicalSpecialty"
      p-icon="an an-flask"
      p-label="Medical Specialty/Exam"
      p-required
      p-sort
      [p-options]="medicalSpecialtyOptions"
      p-field-label="specialty"
      p-field-value="specialtyValue"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-textarea
      class="po-sm-12"
      name="informations"
      [(ngModel)]="informations"
      p-help="Additional informations"
      p-label="Informations"
    >
    </po-textarea>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Schedule"
      p-kind="primary"
      [p-disabled]="schedulingForm.invalid"
      (p-click)="confirmPreAppointment(name)"
    >
    </po-button>
  </div>
</form>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoComboOption, PoComboOptionGroup, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';
import { SamplePoComboSchedulingService } from './sample-po-combo-scheduling.service';

@Component({
  selector: 'sample-po-combo-scheduling',
  templateUrl: './sample-po-combo-scheduling.component.html',
  providers: [SamplePoComboSchedulingService],
  standalone: false
})
export class SamplePoComboSchedulingComponent implements OnInit {
  @ViewChild('schedulingForm', { static: true }) form: NgForm;

  birthday: string;
  citiesOptions: Array<PoComboOptionGroup>;
  city: string;
  email: string;
  informations: string;
  medicalSpecialty: string;
  medicalSpecialtyOptions: Array<any>;
  name: string;
  phone: string;
  typeScheduling: string;

  readonly typeSchedulings: Array<PoSelectOption> = [
    { label: 'Particular', value: 'particular' },
    { label: 'Health Insurance', value: 'healthInsurance' }
  ];

  constructor(
    private poNotification: PoNotificationService,
    private schedulingService: SamplePoComboSchedulingService
  ) {}

  ngOnInit() {
    this.citiesOptions = this.schedulingService.getcities();
    this.medicalSpecialtyOptions = this.schedulingService.getMedicalSpecialty();
  }

  confirmPreAppointment(name: string = '') {
    this.poNotification.success(\`Great \${name}, your pre-appointment was successfully received!\`);

    this.form.reset();
  }

  getStateByLabel(state: string) {
    const stateByLabel = {
      ['S\xE3o Paulo']: 'sp',
      ['Santa Catarina']: 'sc',
      ['Paran\xE1']: 'pr'
    };

    return \`https://thf.totvs.com.br/sample/api/static/assets/\${stateByLabel[state]}.png\`;
  }
}
`),e(),o(21,"label",6),t(22,"sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts"),e(),o(23,"pre",9),t(24,`import { Injectable } from '@angular/core';

import { PoComboOptionGroup } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoComboSchedulingService {
  getcities(): Array<PoComboOptionGroup> {
    return [
      {
        label: 'S\xE3o Paulo',
        options: [
          { label: 'S\xE3o Paulo', value: 'sao paulo' },
          { label: 'Campinas', value: 'campinas' }
        ]
      },
      {
        label: 'Paran\xE1',
        options: [
          { label: 'S\xE3o Jos\xE9 dos Pinhais', value: 'sao jose dos pinhais' },
          { label: 'Londrina', value: 'londrina' },
          { label: 'Maring\xE1', value: 'maringa' }
        ]
      },
      {
        label: 'Santa Catarina',
        options: [
          { label: 'Joinville', value: 'joinville' },
          { label: 'Florian\xF3polis', value: 'florianopolis' },
          { label: 'Itaja\xED', value: 'itajai' }
        ]
      }
    ];
  }

  getMedicalSpecialty() {
    return [
      { specialty: 'Allergist', specialtyValue: 'allergist' },
      { specialty: 'Cardiologist', specialtyValue: 'cardiologist' },
      { specialty: 'General practitioner', specialtyValue: 'generalPractitioner' },
      { specialty: 'Dermatologist', specialtyValue: 'dermatologist' },
      { specialty: 'Gynecologist', specialtyValue: 'gynecologist' },
      { specialty: 'Nutritionist', specialtyValue: 'nutritionist' },
      { specialty: 'Pediatrist', specialtyValue: 'pediatrist' },
      { specialty: 'Psychiatrist', specialtyValue: 'psychiatrist' },
      { specialty: 'Orthopaedist', specialtyValue: 'orthopaedist' }
    ];
  }
}
`),e()()()()(),o(25,"div",10),l(26,"sample-po-combo-scheduling"),e(),l(27,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,yt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Re],encapsulation:2})}return a})();var wt=["transferForm"];function _t(a,V){if(a&1&&(o(0,"div",3),l(1,"po-avatar",15),o(2,"div",16)(3,"div",17),t(4),e(),o(5,"div",18),t(6),e()()()),a&2){let p=V.$implicit;m(4),ae(p.label),m(2),v("Account: ",p.value,"")}}var Ue=(()=>{class a{poNotification;form;poModal;contact;dateTransfer=new Date;typeAccount="Checking Account";value;cancelAction={label:"Cancel",action:()=>this.poModal.close()};confirmAction={label:"Confirm",action:()=>this.confirmTransfer()};typeAccounts=[{label:"Checking Account",value:"Checking Account"},{label:"Savings Account",value:"Savings Account"}];constructor(p){this.poNotification=p}confirmTransfer(){this.poModal.close(),this.poNotification.success("Successful Transfer"),this.formReset()}transfer(){this.poModal.open()}formReset(){this.form.reset({dateTransfer:new Date,typeAccount:"Checking Account"})}static \u0275fac=function(r){return new(r||a)(_(te))};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-transfer"]],viewQuery:function(r,n){if(r&1&&(H(wt,7),H(se,7)),r&2){let d;A(d=G())&&(n.form=d.first),A(d=G())&&(n.poModal=d.first)}},standalone:!1,decls:23,vars:14,consts:[["transferForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","typeAccount","p-label","From","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","contact","p-field-value","id","p-field-label","name","p-filter-service","https://po-sample-api.onrender.com/v1/people","p-icon","an an-user","p-label","To contact","p-placeholder","Select a contact","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-combo-option-template",""],["name","value","p-clean","","p-label","Value to transfer","p-placeholder","R$ 0,00","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dateTransfer","p-label","Date to transfer","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Transfer","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Do you confirm transfer?",3,"p-primary-action","p-secondary-action"],["p-label","From",1,"po-md-6",3,"p-value"],["p-label","To",1,"po-md-6",3,"p-value"],["p-label","Value",1,"po-md-6",3,"p-value"],["p-label","Date to transfer",1,"po-md-6",3,"p-value"],["p-size","sm",1,"po-sm-2","po-md-3","po-lg-1"],[1,"po-sm-10","po-md-9","po-lg-11"],[1,"po-font-text-large-bold"],[1,"po-font-text-smaller"]],template:function(r,n){if(r&1){let d=B();o(0,"div",1)(1,"div",2),t(2,"Banking Transfer"),e()(),o(3,"form",null,0)(5,"div",3)(6,"po-select",4),f("ngModelChange",function(i){return u(d),h(n.typeAccount,i)||(n.typeAccount=i),b(i)}),e(),o(7,"po-combo",5),f("ngModelChange",function(i){return u(d),h(n.contact,i)||(n.contact=i),b(i)}),D(8,_t,7,2,"ng-template",6),e()(),o(9,"div",3)(10,"po-decimal",7),f("ngModelChange",function(i){return u(d),h(n.value,i)||(n.value=i),b(i)}),e(),o(11,"po-datepicker",8),f("ngModelChange",function(i){return u(d),h(n.dateTransfer,i)||(n.dateTransfer=i),b(i)}),e()(),o(12,"div",3)(13,"po-button",9),S("p-click",function(){return u(d),b(n.transfer())}),e()()(),o(14,"po-modal",10)(15,"div",3),l(16,"po-info",11)(17,"po-info",12),e(),l(18,"po-divider"),o(19,"div",3),l(20,"po-info",13)(21,"po-info",14),z(22,"date"),e()()}if(r&2){let d=I(4);m(6),g("ngModel",n.typeAccount),s("p-options",n.typeAccounts),m(),g("ngModel",n.contact),m(3),g("ngModel",n.value),m(),g("ngModel",n.dateTransfer),m(2),s("p-disabled",d.invalid),m(),s("p-primary-action",n.confirmAction)("p-secondary-action",n.cancelAction),m(2),s("p-value",n.typeAccount),m(),s("p-value",n.contact),m(3),s("p-value",n.value),m(),ye("p-value",R(22,12,n.dateTransfer))}},dependencies:[Q,L,N,q,U,de,K,me,oe,k,ue,Fe,J,W,se,_e],encapsulation:2})}return a})();var Mt=a=>({"docs-sample-code-tabs":a}),Qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-transfer-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Combo - Banking Transfer"),e(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-combo-transfer/sample-po-combo-transfer.component.html"),e(),o(13,"pre",7),t(14,`<div class="po-text-center">
  <div class="po-font-title">Banking Transfer</div>
</div>

<form #transferForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6"
      name="typeAccount"
      [(ngModel)]="typeAccount"
      p-label="From"
      p-required
      [p-options]="typeAccounts"
    >
    </po-select>

    <po-combo
      class="po-md-6"
      name="contact"
      [(ngModel)]="contact"
      p-field-value="id"
      p-field-label="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-icon="an an-user"
      p-label="To contact"
      p-placeholder="Select a contact"
      p-required
    >
      <ng-template p-combo-option-template let-option>
        <div class="po-row">
          <po-avatar class="po-sm-2 po-md-3 po-lg-1" p-size="sm"></po-avatar>

          <div class="po-sm-10 po-md-9 po-lg-11">
            <div class="po-font-text-large-bold">{ { option.label }}</div>
            <div class="po-font-text-smaller">Account: { { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-combo>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="value"
      [(ngModel)]="value"
      p-clean
      p-label="Value to transfer"
      p-placeholder="R$ 0,00"
      p-required
    >
    </po-decimal>

    <po-datepicker
      class="po-md-6"
      name="dateTransfer"
      [(ngModel)]="dateTransfer"
      p-label="Date to transfer"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Transfer"
      p-kind="primary"
      [p-disabled]="transferForm.invalid"
      (p-click)="transfer()"
    >
    </po-button>
  </div>
</form>

<po-modal p-title="Do you confirm transfer?" [p-primary-action]="confirmAction" [p-secondary-action]="cancelAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From" [p-value]="typeAccount"> </po-info>

    <po-info class="po-md-6" p-label="To" [p-value]="contact"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-md-6" p-label="Value" [p-value]="value"> </po-info>

    <po-info class="po-md-6" p-label="Date to transfer" p-value="{ { dateTransfer | date }}"> </po-info>
  </div>
</po-modal>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-combo-transfer/sample-po-combo-transfer.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-transfer',
  templateUrl: './sample-po-combo-transfer.component.html',
  standalone: false
})
export class SamplePoComboTransferComponent {
  @ViewChild('transferForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  contact: any;
  dateTransfer: Date = new Date();
  typeAccount: string = 'Checking Account';
  value: number;

  cancelAction: PoModalAction = {
    label: 'Cancel',
    action: () => this.poModal.close()
  };

  confirmAction: PoModalAction = {
    label: 'Confirm',
    action: () => this.confirmTransfer()
  };

  readonly typeAccounts: Array<PoSelectOption> = [
    { label: 'Checking Account', value: 'Checking Account' },
    { label: 'Savings Account', value: 'Savings Account' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  confirmTransfer() {
    this.poModal.close();

    this.poNotification.success('Successful Transfer');

    this.formReset();
  }

  transfer() {
    this.poModal.open();
  }

  private formReset() {
    this.form.reset({
      dateTransfer: new Date(),
      typeAccount: 'Checking Account'
    });
  }
}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-combo-transfer"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,Mt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Ue],encapsulation:2})}return a})();function kt(a,V){if(a&1&&(X(0),o(1,"div",0),l(2,"po-info",4)(3,"po-info",5)(4,"po-info",6),e(),Z()),a&2){let p=V.ngIf;m(2),s("p-value",p.name),m(),s("p-value",p.nickname),m(),s("p-value",p.email)}}var Je=(()=>{class a{http;hero$;heroName;constructor(p){this.http=p}get knowMoreLabel(){return this.heroName?"Know more":void 0}knowMore(p){window.open(`http://google.com/search?q=${p}`,"_blank")}onChangeHero(p){this.hero$=this.getHero(p)}getHero(p){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${p}`)}static \u0275fac=function(r){return new(r||a)(_(ee))};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes"]],standalone:!1,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],["name","heroName","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"ngModelChange","p-change","ngModel"],[4,"ngIf"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"po-widget",1),S("p-primary-action",function(){return n.knowMore(n.heroName)}),o(2,"po-combo",2),f("ngModelChange",function(c){return h(n.heroName,c)||(n.heroName=c),c}),S("p-change",function(c){return n.onChangeHero(c)}),e(),D(3,kt,5,3,"ng-container",3),z(4,"async"),e()()),r&2&&(m(),s("p-primary-label",n.knowMoreLabel),m(),g("ngModel",n.heroName),m(),s("ngIf",R(4,3,n.hero$)))},dependencies:[j,L,q,k,W,ne,$],encapsulation:2})}return a})();var Vt=a=>({"docs-sample-code-tabs":a}),Ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Combo - Heroes"),e(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-combo-heroes/sample-po-combo-heroes.component.html"),e(),o(13,"pre",7),t(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore(heroName)">
    <po-combo
      name="heroName"
      [(ngModel)]="heroName"
      p-field-label="nickname"
      p-field-value="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Search a Hero"
      p-sort
      (p-change)="onChangeHero($event)"
    >
    </po-combo>

    <ng-container *ngIf="hero$ | async as hero">
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>

        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>

        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    </ng-container>
  </po-widget>
</div>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-combo-heroes/sample-po-combo-heroes.component.ts"),e(),o(19,"pre",9),t(20,`import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes',
  templateUrl: './sample-po-combo-heroes.component.html',
  standalone: false
})
export class SamplePoComboHeroesComponent {
  hero$: Observable<any>;
  heroName: string;

  constructor(private http: HttpClient) {}

  get knowMoreLabel() {
    return this.heroName ? 'Know more' : undefined;
  }

  knowMore(heroName: string) {
    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-combo-heroes"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,Vt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Je],encapsulation:2})}return a})();function qt(a,V){if(a&1&&(X(0),o(1,"div",0),l(2,"po-info",5)(3,"po-info",6)(4,"po-info",7),e(),Z()),a&2){let p=V.ngIf;m(2),s("p-value",p.name),m(),s("p-value",p.nickname),m(),s("p-value",p.email)}}var Xe=(()=>{class a{http;formBuilder;form;hero$;constructor(p,r){this.http=p,this.formBuilder=r}ngOnInit(){this.form=this.formBuilder.group({hero:[null,Pe.required]})}get knowMoreLabel(){return this.form.valid?"Know more":void 0}knowMore(){let p=this.form.get("hero").value;window.open(`http://google.com/search?q=${p}`,"_blank")}onChangeHero(p){this.hero$=this.getHero(p)}getHero(p){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${p}`)}static \u0275fac=function(r){return new(r||a)(_(ee),_(ke))};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes-reactive-form"]],standalone:!1,decls:6,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],[3,"formGroup"],["name","heroName","formControlName","hero","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"p-change"],[4,"ngIf"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"po-widget",1),S("p-primary-action",function(){return n.knowMore()}),o(2,"div",2)(3,"po-combo",3),S("p-change",function(c){return n.onChangeHero(c)}),e()(),D(4,qt,5,3,"ng-container",4),z(5,"async"),e()()),r&2&&(m(),s("p-primary-label",n.knowMoreLabel),m(),s("formGroup",n.form),m(2),s("ngIf",R(5,3,n.hero$)))},dependencies:[j,L,N,Me,Te,k,W,ne,$],encapsulation:2})}return a})();var Dt=a=>({"docs-sample-code-tabs":a}),Ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Combo - Heroes Reactive Form"),e(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html"),e(),o(13,"pre",7),t(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore()">
    <div [formGroup]="form">
      <po-combo
        name="heroName"
        formControlName="hero"
        p-field-label="nickname"
        p-field-value="name"
        p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
        p-label="Search a Hero"
        p-sort
        (p-change)="onChangeHero($event)"
      >
      </po-combo>
    </div>

    <ng-container *ngIf="hero$ | async as hero">
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>

        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>

        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    </ng-container>
  </po-widget>
</div>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts"),e(),o(19,"pre",9),t(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes-reactive-form',
  templateUrl: './sample-po-combo-heroes-reactive-form.component.html',
  standalone: false
})
export class SamplePoComboHeroesReactiveFormComponent implements OnInit {
  form: UntypedFormGroup;
  hero$: Observable<any>;

  constructor(
    private http: HttpClient,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      hero: [null, Validators.required]
    });
  }

  get knowMoreLabel() {
    return this.form.valid ? 'Know more' : undefined;
  }

  knowMore() {
    const heroName = this.form.get('hero').value;

    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-combo-heroes-reactive-form"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,Dt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Xe],encapsulation:2})}return a})();function Nt(a,V){if(a&1&&(X(0),o(1,"div",0),l(2,"po-info",4)(3,"po-info",5)(4,"po-info",6),e(),Z()),a&2){let p=V.ngIf;m(2),s("p-value",p.name),m(),s("p-value",p.nickname),m(),s("p-value",p.email)}}var $e=(()=>{class a{http;peopleName;people$;constructor(p){this.http=p}onChangePeople(p){this.people$=this.getPeople(p)}getPeople(p){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${p}`)}static \u0275fac=function(r){return new(r||a)(_(ee))};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-infinity-scroll"]],standalone:!1,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6"],["p-filter-service","https://po-sample-api.onrender.com/v1/people","p-label","People","name","people","p-field-label","name","p-field-value","id",3,"ngModelChange","p-change","ngModel","p-infinite-scroll"],[4,"ngIf"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"po-widget",1)(2,"po-combo",2),f("ngModelChange",function(c){return h(n.peopleName,c)||(n.peopleName=c),c}),S("p-change",function(c){return n.onChangePeople(c)}),e(),D(3,Nt,5,3,"ng-container",3),z(4,"async"),e()()),r&2&&(m(2),g("ngModel",n.peopleName),s("p-infinite-scroll",!0),m(),s("ngIf",R(4,3,n.people$)))},dependencies:[j,L,q,k,W,ne,$],encapsulation:2})}return a})();var Bt=a=>({"docs-sample-code-tabs":a}),et=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-infinity-scroll-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Combo - Inifity Scroll"),e(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html"),e(),o(13,"pre",7),t(14,`<div class="po-row">
  <po-widget class="po-lg-6">
    <po-combo
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-label="People"
      name="people"
      [(ngModel)]="peopleName"
      (p-change)="onChangePeople($event)"
      [p-infinite-scroll]="true"
      p-field-label="name"
      p-field-value="id"
    ></po-combo>

    <ng-container *ngIf="people$ | async as people">
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>

        <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>

        <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
      </div>
    </ng-container>
  </po-widget>
</div>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts"),e(),o(19,"pre",9),t(20,`import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-infinity-scroll',
  templateUrl: './sample-po-combo-infinity-scroll.component.html',
  standalone: false
})
export class SamplePoComboInfinityScrollComponent {
  peopleName: string;
  people$: Observable<any>;

  constructor(private http: HttpClient) {}

  onChangePeople(peopleId: string) {
    this.people$ = this.getPeople(peopleId);
  }

  private getPeople(peopleId: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/people/\${peopleId}\`);
  }
}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-combo-infinity-scroll"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,Bt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,$e],encapsulation:2})}return a})();var At=["bookingForm"],Gt=["datepicker"],tt=(()=>{class a{poNotification;form;datepickerComponent;adults=1;category=!1;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];roomsOptions=[{label:"1 Room",value:1},{label:"2 Rooms",value:2},{label:"3 Rooms",value:3}];constructor(p){this.poNotification=p}booking(){this.poNotification.success("Hotel booked successfully"),this.formReset(),this.datepickerComponent.focus()}onChangeParams(p){this.filterParams=p?{category:"Luxo"}:{},this.hotel=void 0}formReset(){this.form.reset({adults:1,category:!1,children:0,rooms:1})}static \u0275fac=function(r){return new(r||a)(_(te))};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-hotels"]],viewQuery:function(r,n){if(r&1&&(H(At,7),H(Gt,7)),r&2){let d;A(d=G())&&(n.form=d.first),A(d=G())&&(n.datepickerComponent=d.first)}},standalone:!1,decls:18,vars:14,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"],["name","switch","p-label-off","No, thank you.","p-label-on","Yes, please.","p-label","Only Luxury Category",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","rooms","p-label","Rooms",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","hotel","p-debounce-time","500","p-disabled-init-filter","","p-filter-minlength","1","p-icon","an an-magnifying-glass","p-required","","p-field-label","name","p-field-value","value","p-label","Search a hotel","p-sort","","p-filter-service","https://po-sample-api.onrender.com/v1/hotels","p-listbox-control-position","top",1,"po-sm-12",3,"ngModelChange","ngModel","p-filter-params"],["p-label","Booking","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,n){if(r&1){let d=B();o(0,"div",2)(1,"div",3),t(2,"Booking a Hotel"),e()(),o(3,"form",null,0)(5,"div",4)(6,"po-datepicker",5,1),f("ngModelChange",function(i){return u(d),h(n.checkin,i)||(n.checkin=i),b(i)}),e(),o(8,"po-datepicker",6),f("ngModelChange",function(i){return u(d),h(n.checkout,i)||(n.checkout=i),b(i)}),e(),o(9,"po-switch",7),f("ngModelChange",function(i){return u(d),h(n.category,i)||(n.category=i),b(i)}),S("p-change",function(i){return u(d),b(n.onChangeParams(i))}),e()(),o(10,"div",4)(11,"po-select",8),f("ngModelChange",function(i){return u(d),h(n.rooms,i)||(n.rooms=i),b(i)}),e(),o(12,"po-select",9),f("ngModelChange",function(i){return u(d),h(n.children,i)||(n.children=i),b(i)}),e(),o(13,"po-select",10),f("ngModelChange",function(i){return u(d),h(n.adults,i)||(n.adults=i),b(i)}),e()(),o(14,"div",4)(15,"po-combo",11),f("ngModelChange",function(i){return u(d),h(n.hotel,i)||(n.hotel=i),b(i)}),e()(),o(16,"div",4)(17,"po-button",12),S("p-click",function(){return u(d),b(n.booking())}),e()()()}if(r&2){let d=I(4);m(6),g("ngModel",n.checkin),s("p-max-date",n.checkout),m(2),g("ngModel",n.checkout),s("p-min-date",n.checkin),m(),g("ngModel",n.category),m(2),g("ngModel",n.rooms),s("p-options",n.roomsOptions),m(),g("ngModel",n.children),s("p-options",n.childrenOptions),m(),g("ngModel",n.adults),s("p-options",n.adultsOptions),m(2),g("ngModel",n.hotel),s("p-filter-params",n.filterParams),m(2),s("p-disabled",d.invalid)}},dependencies:[Q,L,N,q,U,K,oe,k,J,ce],encapsulation:2})}return a})();var Rt=a=>({"docs-sample-code-tabs":a}),ot=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-hotels-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Combo - Booking Hotel"),e(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-combo-hotels/sample-po-combo-hotels.component.html"),e(),o(13,"pre",7),t(14,`<div class="po-text-center">
  <div class="po-font-title">Booking a Hotel</div>
</div>

<form #bookingForm="ngForm">
  <div class="po-row">
    <po-datepicker
      #datepicker
      class="po-md-4"
      name="checkin"
      [(ngModel)]="checkin"
      p-label="Check In"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-max-date]="checkout"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-4"
      name="checkout"
      [(ngModel)]="checkout"
      p-label="Check Out"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-min-date]="checkin"
    >
    </po-datepicker>

    <po-switch
      class="po-md-4"
      name="switch"
      [(ngModel)]="category"
      p-label-off="No, thank you."
      p-label-on="Yes, please."
      p-label="Only Luxury Category"
      (p-change)="onChangeParams($event)"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-select class="po-md-4" name="rooms" [(ngModel)]="rooms" p-label="Rooms" [p-options]="roomsOptions"> </po-select>

    <po-select class="po-md-4" name="children" [(ngModel)]="children" p-label="Children" [p-options]="childrenOptions">
    </po-select>

    <po-select class="po-md-4" name="adults" [(ngModel)]="adults" p-label="Adults" [p-options]="adultsOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-combo
      class="po-sm-12"
      name="hotel"
      [(ngModel)]="hotel"
      p-debounce-time="500"
      p-disabled-init-filter
      p-filter-minlength="1"
      p-icon="an an-magnifying-glass"
      p-required
      p-field-label="name"
      p-field-value="value"
      p-label="Search a hotel"
      p-sort
      p-filter-service="https://po-sample-api.onrender.com/v1/hotels"
      p-listbox-control-position="top"
      [p-filter-params]="filterParams"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Booking"
      p-kind="primary"
      [p-disabled]="bookingForm.invalid"
      (p-click)="booking()"
    >
    </po-button>
  </div>
</form>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-combo-hotels/sample-po-combo-hotels.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoDatepickerComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-hotels',
  templateUrl: './sample-po-combo-hotels.component.html',
  standalone: false
})
export class SamplePoComboHotelsComponent {
  @ViewChild('bookingForm', { static: true }) form: NgForm;
  @ViewChild('datepicker', { static: true }) datepickerComponent: PoDatepickerComponent;

  adults: number = 1;
  category: boolean = false;
  checkin: Date;
  checkout: Date;
  children: number = 0;
  hotel: string;
  rooms: number = 1;
  filterParams = {};

  readonly adultsOptions: Array<PoSelectOption> = [
    { label: '1 Adult', value: 1 },
    { label: '2 Adults', value: 2 },
    { label: '3 Adults', value: 3 },
    { label: '4 Adults', value: 4 }
  ];

  readonly childrenOptions: Array<PoSelectOption> = [
    { label: 'No Child', value: 0 },
    { label: '1 Child', value: 1 },
    { label: '2 Children', value: 2 }
  ];

  readonly roomsOptions: Array<PoSelectOption> = [
    { label: '1 Room', value: 1 },
    { label: '2 Rooms', value: 2 },
    { label: '3 Rooms', value: 3 }
  ];

  constructor(private poNotification: PoNotificationService) {}

  booking() {
    this.poNotification.success('Hotel booked successfully');

    this.formReset();

    this.datepickerComponent.focus();
  }

  onChangeParams(isLuxury: boolean) {
    this.filterParams = isLuxury ? { category: 'Luxo' } : {};
    this.hotel = undefined;
  }

  private formReset() {
    this.form.reset({
      adults: 1,
      category: false,
      children: 0,
      rooms: 1
    });
  }
}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-combo-hotels"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,Rt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,tt],encapsulation:2})}return a})();var nt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-doc"]],standalone:!1,decls:1662,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoComboFilterMode"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoComboOption"],["pan","",1,"docs-api-property-type","PoComboOptionGroup"],["pan","",1,"docs-api-property-type","any>"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<PoComboOption>"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),o(4,"div",2)(5,"p"),t(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),o(7,"blockquote")(8,"p"),t(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),t(11,"FormsModule"),e(),t(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),t(14,"ReactiveFormsModule"),e(),t(15,", ambos nativos do Angular."),e()()(),o(16,"h3",3),t(17,"Componente"),e(),o(18,"h4",4)(19,"code",5),t(20,"PoComboComponent"),e()(),o(21,"div",2)(22,"p"),t(23,"O "),o(24,"code"),t(25,"po-combo"),e(),t(26," exibe uma lista de op\xE7\xF5es com f\xE1cil sele\xE7\xE3o e filtragem."),e(),o(27,"p"),t(28,"Al\xE9m da exibi\xE7\xE3o padr\xE3o, nele \xE9 poss\xEDvel listar as op\xF5es em agrupamentos."),e(),o(29,"p"),t(30,"\xC9 poss\xEDvel selecionar e navegar entre as op\xE7\xF5es da lista tanto atrav\xE9s do "),o(31,"em"),t(32,"mouse"),e(),t(33,` quanto do teclado. No teclado navegue com
as setas e pressione `),o(34,"em"),t(35,"Enter"),e(),t(36," na op\xE7\xE3o que desejar."),e(),o(37,"p"),t(38,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),o(39,"code"),t(40,"p-filter-service"),e(),t(41,"."),e(),o(42,"p"),t(43,"Em "),o(44,"code"),t(45,"p-filter-mode"),e(),t(46,", o filtro poder\xE1 ser configurado para buscar op\xF5es que correspondam ao in\xEDcio, fim ou que contenha o valor digitado."),e(),o(47,"p"),t(48,"O "),o(49,"code"),t(50,"po-combo"),e(),t(51," guarda o \xFAltimo valor caso o usu\xE1rio desista de uma busca, deixando o campo ou pressionando "),o(52,"em"),t(53,"Esc"),e(),t(54,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),o(55,"em"),t(56,"Enter"),e(),t(57,"."),e(),o(58,"p"),t(59,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),e(),o(60,"h4"),t(61,"Tokens customiz\xE1veis"),e(),o(62,"p"),t(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),o(64,"blockquote")(65,"p"),t(66,"Para maiores informa\xE7\xF5es, acesse o guia "),o(67,"a",6),t(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(69,"."),e()(),o(70,"table")(71,"thead")(72,"tr")(73,"th"),t(74,"Propriedade"),e(),o(75,"th"),t(76,"Descri\xE7\xE3o"),e(),o(77,"th"),t(78,"Valor Padr\xE3o"),e()()(),o(79,"tbody")(80,"tr")(81,"td")(82,"strong"),t(83,"Default Values"),e()(),l(84,"td")(85,"td"),e(),o(86,"tr")(87,"td")(88,"code"),t(89,"--font-family"),e()(),o(90,"td"),t(91,"Fam\xEDlia tipogr\xE1fica usada"),e(),o(92,"td")(93,"code"),t(94,"var(--font-family-theme)"),e()()(),o(95,"tr")(96,"td")(97,"code"),t(98,"--font-size"),e()(),o(99,"td"),t(100,"Tamanho da fonte"),e(),o(101,"td")(102,"code"),t(103,"var(--font-size-default)"),e()()(),o(104,"tr")(105,"td")(106,"code"),t(107,"--text-color"),e()(),o(108,"td"),t(109,"Cor do texto"),e(),o(110,"td")(111,"code"),t(112,"var(--color-neutral-dark-90)"),e()()(),o(113,"tr")(114,"td")(115,"code"),t(116,"--text-color-placeholder"),e()(),o(117,"td"),t(118,"Cor do texto no placeholder"),e(),o(119,"td")(120,"code"),t(121,"var(--color-neutral-light-30)"),e()()(),o(122,"tr")(123,"td")(124,"code"),t(125,"--color"),e()(),o(126,"td"),t(127,"Cor principal do Combo"),e(),o(128,"td")(129,"code"),t(130,"var(--color-neutral-dark-70)"),e()()(),o(131,"tr")(132,"td")(133,"code"),t(134,"--background"),e()(),o(135,"td"),t(136,"Cor de background"),e(),o(137,"td")(138,"code"),t(139,"var(--color-neutral-light-05)"),e()()(),o(140,"tr")(141,"td")(142,"code"),t(143,"--border-radius"),e()(),o(144,"td"),t(145,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),o(146,"td")(147,"code"),t(148,"var(--border-width-lg)"),e()()(),o(149,"tr")(150,"td")(151,"code"),t(152,"--min-width"),e()(),o(153,"td"),t(154,"Largura m\xEDnima do combo"),e(),o(155,"td")(156,"code"),t(157,"150px"),e()()(),o(158,"tr")(159,"td")(160,"strong"),t(161,"Hover"),e()(),l(162,"td")(163,"td"),e(),o(164,"tr")(165,"td")(166,"code"),t(167,"--color-hover"),e()(),o(168,"td"),t(169,"Cor principal no estado hover"),e(),o(170,"td")(171,"code"),t(172,"var(--color-action-hover)"),e()()(),o(173,"tr")(174,"td")(175,"code"),t(176,"--background-hover"),e()(),o(177,"td"),t(178,"Cor de background no estado hover"),e(),o(179,"td")(180,"code"),t(181,"var(--color-brand-01-lightest)"),e()()(),o(182,"tr")(183,"td")(184,"strong"),t(185,"Focused"),e()(),l(186,"td")(187,"td"),e(),o(188,"tr")(189,"td")(190,"code"),t(191,"--color-focused"),e()(),o(192,"td"),t(193,"Cor principal no estado de focus"),e(),o(194,"td")(195,"code"),t(196,"var(--color-action-default)"),e()()(),o(197,"tr")(198,"td")(199,"code"),t(200,"--outline-color-focused"),e()(),o(201,"td"),t(202,"Cor do outline do estado de focus"),e(),o(203,"td")(204,"code"),t(205,"var(--color-action-focus)"),e()()(),o(206,"tr")(207,"td")(208,"strong"),t(209,"Error"),e()(),l(210,"td")(211,"td"),e(),o(212,"tr")(213,"td")(214,"code"),t(215,"--color-error"),e()(),o(216,"td"),t(217,"Cor principal no estado de erro"),e(),o(218,"td")(219,"code"),t(220,"var(--color-feedback-negative-base)"),e()()(),o(221,"tr")(222,"td")(223,"strong"),t(224,"Disabled"),e()(),l(225,"td")(226,"td"),e(),o(227,"tr")(228,"td")(229,"code"),t(230,"--color-disabled"),e()(),o(231,"td"),t(232,"Cor principal no estado disabled"),e(),o(233,"td")(234,"code"),t(235,"var(--color-neutral-light-30)"),e()()(),o(236,"tr")(237,"td")(238,"code"),t(239,"--background-disabled"),e()(),o(240,"td"),t(241,"Cor de background no estado disabled"),e(),o(242,"td")(243,"code"),t(244,"var(--color-neutral-light-20)"),e()()(),o(245,"tr")(246,"td")(247,"strong"),t(248,"Suggestion"),e()(),l(249,"td")(250,"td"),e(),o(251,"tr")(252,"td")(253,"code"),t(254,"--text-color-suggestion"),e()(),o(255,"td"),t(256,"Cor do texto no estado suggestion"),e(),o(257,"td")(258,"code"),t(259,"var(--color-neutral-mid-60)"),e()()(),o(260,"tr")(261,"td")(262,"code"),t(263,"--background-suggestion"),e()(),o(264,"td"),t(265,"Cor do background no estado suggestion"),e(),o(266,"td")(267,"code"),t(268,"var(--color-brand-01-lightest)"),e()()()()()(),o(269,"div",7)(270,"h4",8),t(271,"Seletor"),e(),o(272,"pre",9),t(273,`<po-combo
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    p-cache="boolean"
    (p-change)="EventEmitter"
    p-change-on-enter="boolean"
    p-clean="boolean"
    p-debounce-time="number"
    p-disabled="boolean"
    p-disabled-init-filter="boolean"
    p-disabled-tab-filter="boolean"
    p-emit-object-value="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-minlength="number"
    p-filter-mode="PoComboFilterMode"
    p-filter-params="any"
    p-filter-service="PoComboFilter | string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    (p-input-change)="EventEmitter"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoComboLiterals"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="Array<PoComboOption | PoComboOptionGroup | any>"
    p-placeholder="string"
    p-remove-initial-filter="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-combo>
`),e()(),o(274,"h4",10),t(275,"Propriedades"),e(),o(276,"table",11)(277,"tr",12)(278,"th",13),t(279,"Nome"),e(),o(280,"th",13),t(281,"Tipo"),e(),o(282,"th",13),t(283,"Padr\xE3o"),e(),o(284,"th",13),t(285,"Descri\xE7\xE3o"),e()(),o(286,"tr",14)(287,"td",15)(288,"div",16)(289,"span",17),t(290," (p-additional-help)"),l(291,"br"),e()()(),o(292,"td",18)(293,"code",19),t(294,"EventEmitter"),e()(),o(295,"td",20),t(296,"-"),e(),o(297,"td",21)(298,"em")(299,"strong"),t(300,"(opcional)"),e()(),o(301,"p"),t(302,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),o(303,"code"),t(304,"p-help"),e(),t(305,"."),e()()(),o(306,"tr",14)(307,"td",15)(308,"div",22)(309,"span",23),t(310," p-additional-help-tooltip"),l(311,"br"),e()()(),o(312,"td",18)(313,"code",24),t(314,"string"),e()(),o(315,"td",20),t(316,"-"),e(),o(317,"td",21)(318,"em")(319,"strong"),t(320,"(opcional)"),e()(),o(321,"p"),t(322,"Exibe um \xEDcone de ajuda adicional ao "),o(323,"code"),t(324,"p-help"),e(),t(325,`, com o texto desta propriedade no tooltip.
Se o evento `),o(326,"code"),t(327,"p-additional-help"),e(),t(328,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),o(329,"strong"),t(330,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),e()(),o(331,"blockquote")(332,"p"),t(333,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),e()()()(),o(334,"tr",14)(335,"td",15)(336,"div",22)(337,"span",23),t(338," p-append-in-body"),l(339,"br"),e()()(),o(340,"td",18)(341,"code",25),t(342,"boolean"),e()(),o(343,"td",20)(344,"p")(345,"code"),t(346,"false"),e()()(),o(347,"td",21)(348,"em")(349,"strong"),t(350,"(opcional)"),e()(),o(351,"p"),t(352,"Define que o "),o(353,"code"),t(354,"listbox"),e(),t(355," e/ou tooltip ("),o(356,"code"),t(357,"p-additional-help-tooltip"),e(),t(358," e/ou "),o(359,"code"),t(360,"p-error-limit"),e(),t(361,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),e(),o(362,"blockquote")(363,"p"),t(364,`O uso dessa propriedade pode acarretar na perda sequencial da tabula\xE7\xE3o da p\xE1gina. Quando utilizado com
`),o(365,"code"),t(366,"p-additional-help-tooltip"),e(),t(367,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),e()()()(),o(368,"tr",14)(369,"td",15)(370,"div",22)(371,"span",23),t(372," p-auto-focus"),l(373,"br"),e()()(),o(374,"td",18)(375,"code",25),t(376,"boolean"),e()(),o(377,"td",20)(378,"p")(379,"code"),t(380,"false"),e()()(),o(381,"td",21)(382,"em")(383,"strong"),t(384,"(opcional)"),e()(),o(385,"p"),t(386,"Aplica foco no elemento ao ser iniciado."),e(),o(387,"blockquote")(388,"p"),t(389,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),e()()()(),o(390,"tr",14)(391,"td",15)(392,"div",16)(393,"span",17),t(394," (p-blur)"),l(395,"br"),e()()(),o(396,"td",18)(397,"code",19),t(398,"EventEmitter"),e()(),o(399,"td",20),t(400,"-"),e(),o(401,"td",21)(402,"em")(403,"strong"),t(404,"(opcional)"),e()(),o(405,"p"),t(406,"Evento disparado ao sair do campo."),e()()(),o(407,"tr",14)(408,"td",15)(409,"div",22)(410,"span",23),t(411," p-cache"),l(412,"br"),e()()(),o(413,"td",18)(414,"code",25),t(415,"boolean"),e()(),o(416,"td",20)(417,"p")(418,"code"),t(419,"true"),e()()(),o(420,"td",21)(421,"em")(422,"strong"),t(423,"(opcional)"),e()(),o(424,"p"),t(425,"Define se o componente ir\xE1 guardar o valor do model para evitar requisi\xE7\xF5es repetidas."),e(),o(426,"blockquote")(427,"p"),t(428,"Caso o valor seja "),o(429,"code"),t(430,"false"),e(),t(431,", o componente far\xE1 uma nova requisi\xE7\xE3o mesmo que o valor procurado seja o mesmo do model."),e()()()(),o(432,"tr",14)(433,"td",15)(434,"div",16)(435,"span",17),t(436," (p-change)"),l(437,"br"),e()()(),o(438,"td",18)(439,"code",19),t(440,"EventEmitter"),e()(),o(441,"td",20),t(442,"-"),e(),o(443,"td",21)(444,"em")(445,"strong"),t(446,"(opcional)"),e()(),o(447,"p"),t(448,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel. A fun\xE7\xE3o receber\xE1 como argumento o model modificado."),e(),o(449,"blockquote")(450,"p"),t(451,"Pode-se optar pelo recebimento do objeto selecionado ao inv\xE9s do model atrav\xE9s da propriedade "),o(452,"code"),t(453,"p-emit-object-value"),e(),t(454,"."),e()()()(),o(455,"tr",14)(456,"td",15)(457,"div",22)(458,"span",23),t(459," p-change-on-enter"),l(460,"br"),e()()(),o(461,"td",18)(462,"code",25),t(463,"boolean"),e()(),o(464,"td",20)(465,"p")(466,"code"),t(467,"false"),e()()(),o(468,"td",21)(469,"em")(470,"strong"),t(471,"(opcional)"),e()(),o(472,"p"),t(473,"Indica que o evento "),o(474,"code"),t(475,"p-change"),e(),t(476,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada.'),e()()(),o(477,"tr",14)(478,"td",15)(479,"div",22)(480,"span",23),t(481," p-clean"),l(482,"br"),e()()(),o(483,"td",18)(484,"code",25),t(485,"boolean"),e()(),o(486,"td",20),t(487,"-"),e(),o(488,"td",21)(489,"em")(490,"strong"),t(491,"(opcional)"),e()(),o(492,"p"),t(493,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),e()()(),o(494,"tr",14)(495,"td",15)(496,"div",22)(497,"span",23),t(498," p-debounce-time"),l(499,"br"),e()()(),o(500,"td",18)(501,"code",26),t(502,"number"),e()(),o(503,"td",20)(504,"p")(505,"code"),t(506,"400"),e()()(),o(507,"td",21)(508,"em")(509,"strong"),t(510,"(opcional)"),e()(),o(511,"p"),t(512,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),o(513,"code"),t(514,"p-filter-service"),e(),t(515,")."),e()()(),o(516,"tr",14)(517,"td",15)(518,"div",22)(519,"span",23),t(520," p-disabled"),l(521,"br"),e()()(),o(522,"td",18)(523,"code",25),t(524,"boolean"),e()(),o(525,"td",20)(526,"p")(527,"code"),t(528,"false"),e()()(),o(529,"td",21)(530,"em")(531,"strong"),t(532,"(opcional)"),e()(),o(533,"p"),t(534,"Indica que o campo ser\xE1 desabilitado."),e()()(),o(535,"tr",14)(536,"td",15)(537,"div",22)(538,"span",23),t(539," p-disabled-init-filter"),l(540,"br"),e()()(),o(541,"td",18)(542,"code",25),t(543,"boolean"),e()(),o(544,"td",20)(545,"p")(546,"code"),t(547,"false"),e()()(),o(548,"td",21)(549,"em")(550,"strong"),t(551,"(opcional)"),e()(),o(552,"p"),t(553,"Desabilita o filtro inicial no servi\xE7o, que \xE9 executado no primeiro clique no campo."),e()()(),o(554,"tr",14)(555,"td",15)(556,"div",22)(557,"span",23),t(558," p-disabled-tab-filter"),l(559,"br"),e()()(),o(560,"td",18)(561,"code",25),t(562,"boolean"),e()(),o(563,"td",20)(564,"p")(565,"code"),t(566,"false"),e()()(),o(567,"td",21)(568,"em")(569,"strong"),t(570,"(opcional)"),e()(),o(571,"p"),t(572,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB."),e()()(),o(573,"tr",14)(574,"td",15)(575,"div",22)(576,"span",23),t(577," p-emit-object-value"),l(578,"br"),e()()(),o(579,"td",18)(580,"code",25),t(581,"boolean"),e()(),o(582,"td",20)(583,"p")(584,"code"),t(585,"false"),e()()(),o(586,"td",21)(587,"em")(588,"strong"),t(589,"(opcional)"),e()(),o(590,"p"),t(591,"Se verdadeiro, o evento "),o(592,"code"),t(593,"p-change"),e(),t(594," receber\xE1 como argumento o "),o(595,"code"),t(596,"PoComboOption"),e(),t(597," referente \xE0 op\xE7\xE3o selecionada."),e()()(),o(598,"tr",14)(599,"td",15)(600,"div",22)(601,"span",23),t(602," p-error-limit"),l(603,"br"),e()()(),o(604,"td",18)(605,"code",25),t(606,"boolean"),e()(),o(607,"td",20)(608,"p")(609,"code"),t(610,"false"),e()()(),o(611,"td",21)(612,"em")(613,"strong"),t(614,"(opcional)"),e()(),o(615,"p"),t(616,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),e(),o(617,"blockquote")(618,"p"),t(619,"Caso essa propriedade seja definida como "),o(620,"code"),t(621,"true"),e(),t(622,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),e()()()(),o(623,"tr",14)(624,"td",15)(625,"div",22)(626,"span",23),t(627," p-field-error-message"),l(628,"br"),e()()(),o(629,"td",18)(630,"code",24),t(631,"string"),e()(),o(632,"td",20),t(633,"-"),e(),o(634,"td",21)(635,"em")(636,"strong"),t(637,"(opcional)"),e()(),o(638,"p"),t(639,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),e(),o(640,"blockquote")(641,"p"),t(642,"Necess\xE1rio que a propriedade "),o(643,"code"),t(644,"p-required"),e(),t(645," esteja habilitada."),e()()()(),o(646,"tr",14)(647,"td",15)(648,"div",22)(649,"span",23),t(650," p-field-label"),l(651,"br"),e()()(),o(652,"td",18)(653,"code",24),t(654,"string"),e()(),o(655,"td",20)(656,"p")(657,"code"),t(658,"label"),e()()(),o(659,"td",21)(660,"em")(661,"strong"),t(662,"(opcional)"),e()(),o(663,"p"),t(664,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),o(665,"code"),t(666,"p-options"),e(),t(667,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),e(),o(668,"p"),t(669,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),e()()(),o(670,"tr",14)(671,"td",15)(672,"div",22)(673,"span",23),t(674," p-field-value"),l(675,"br"),e()()(),o(676,"td",18)(677,"code",24),t(678,"string"),e()(),o(679,"td",20)(680,"p")(681,"code"),t(682,"value"),e()()(),o(683,"td",21)(684,"em")(685,"strong"),t(686,"(opcional)"),e()(),o(687,"p"),t(688,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),o(689,"code"),t(690,"p-options"),e(),t(691,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),e(),o(692,"p"),t(693,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),e()()(),o(694,"tr",14)(695,"td",15)(696,"div",22)(697,"span",23),t(698," p-filter-minlength"),l(699,"br"),e()()(),o(700,"td",18)(701,"code",26),t(702,"number"),e()(),o(703,"td",20)(704,"p")(705,"code"),t(706,"0"),e()()(),o(707,"td",21)(708,"em")(709,"strong"),t(710,"(opcional)"),e()(),o(711,"p"),t(712,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o."),e()()(),o(713,"tr",14)(714,"td",15)(715,"div",22)(716,"span",23),t(717," p-filter-mode"),l(718,"br"),e()()(),o(719,"td",18)(720,"code",27),t(721,"PoComboFilterMode"),e()(),o(722,"td",20)(723,"p")(724,"code"),t(725,"startsWith"),e()()(),o(726,"td",21)(727,"em")(728,"strong"),t(729,"(opcional)"),e()(),o(730,"p"),t(731,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),o(732,"code"),t(733,"startsWith"),e(),t(734,", "),o(735,"code"),t(736,"contains"),e(),t(737," ou "),o(738,"code"),t(739,"endsWith"),e(),t(740,"."),e(),o(741,"blockquote")(742,"p"),t(743,"Quando utilizar a propriedade "),o(744,"code"),t(745,"p-filter-service"),e(),t(746," esta propriedade ser\xE1 ignorada."),e()()()(),o(747,"tr",14)(748,"td",15)(749,"div",22)(750,"span",23),t(751," p-filter-params"),l(752,"br"),e()()(),o(753,"td",18)(754,"code",28),t(755,"any"),e()(),o(756,"td",20),t(757,"-"),e(),o(758,"td",21)(759,"em")(760,"strong"),t(761,"(opcional)"),e()(),o(762,"p"),t(763,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),o(764,"em"),t(765,"PoComboFilter"),e(),t(766,"."),e(),o(767,"blockquote")(768,"p"),t(769,"Caso a lista contenha agrupamentos, os mesmos s\xF3 ser\xE3o exibidos se houver no m\xEDnimo uma op\xE7\xE3o que corresponda \xE0 pesquisa."),e()()()(),o(770,"tr",14)(771,"td",15)(772,"div",22)(773,"span",23),t(774," p-filter-service"),l(775,"br"),e()()(),o(776,"td",18)(777,"code",29),t(778,"PoComboFilter "),e(),o(779,"code",24),t(780," string"),e()(),o(781,"td",20),t(782,"-"),e(),o(783,"td",21)(784,"em")(785,"strong"),t(786,"(opcional)"),e()(),o(787,"p"),t(788,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),e(),o(789,"p"),t(790,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),o(791,"code"),t(792,"p-field-label"),e(),t(793," e "),o(794,"code"),t(795,"p-field-value"),e(),t(796," para a constru\xE7\xE3o da lista de itens."),e(),o(797,"p"),t(798,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),e(),o(799,"pre")(800,"code"),t(801,`url + ?filter=Peter
`),e()(),o(802,"p"),t(803,"Se for definida a propriedade "),o(804,"code"),t(805,"p-filter-params"),e(),t(806,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),o(807,"code"),t(808,"{ age: 23 }"),e(),t(809," a URL ficaria:"),e(),o(810,"pre")(811,"code"),t(812,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),e()()()(),o(813,"tr",14)(814,"td",15)(815,"div",22)(816,"span",23),t(817," p-help"),l(818,"br"),e()()(),o(819,"td",18)(820,"code",24),t(821,"string"),e()(),o(822,"td",20),t(823,"-"),e(),o(824,"td",21)(825,"em")(826,"strong"),t(827,"(opcional)"),e()(),o(828,"p"),t(829,"Texto de apoio para o campo."),e()()(),o(830,"tr",14)(831,"td",15)(832,"div",22)(833,"span",23),t(834," p-icon"),l(835,"br"),e()()(),o(836,"td",18)(837,"code",24),t(838,"string "),e(),o(839,"code",30),t(840," TemplateRef<void>"),e()(),o(841,"td",20),t(842,"-"),e(),o(843,"td",21)(844,"em")(845,"strong"),t(846,"(opcional)"),e()(),o(847,"p"),t(848,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),e(),o(849,"p"),t(850,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),o(851,"a",31),t(852,"Biblioteca de \xEDcones"),e(),t(853,". conforme exemplo abaixo:"),e(),o(854,"pre")(855,"code"),t(856,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),e()(),o(857,"p"),t(858,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),o(859,"em"),t(860,"Font Awesome"),e(),t(861,", da seguinte forma:"),e(),o(862,"pre")(863,"code"),t(864,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),e()(),o(865,"p"),t(866,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),o(867,"code"),t(868,"TemplateRef"),e(),t(869,", conforme exemplo abaixo:"),e(),o(870,"pre")(871,"code"),t(872,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),e()(),o(873,"blockquote")(874,"p"),t(875,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),o(876,"code"),t(877,"font-size: inherit"),e(),t(878," caso o \xEDcone utilizado n\xE3o aplique-o."),e()()()(),o(879,"tr",14)(880,"td",15)(881,"div",22)(882,"span",23),t(883," p-infinite-scroll"),l(884,"br"),e()()(),o(885,"td",18)(886,"code",25),t(887,"boolean"),e()(),o(888,"td",20)(889,"p")(890,"code"),t(891,"false"),e()()(),o(892,"td",21)(893,"em")(894,"strong"),t(895,"(opcional)"),e()(),o(896,"p"),t(897,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),e()()(),o(898,"tr",14)(899,"td",15)(900,"div",22)(901,"span",23),t(902," p-infinite-scroll-distance"),l(903,"br"),e()()(),o(904,"td",18)(905,"code",26),t(906,"number"),e()(),o(907,"td",20),t(908,"-"),e(),o(909,"td",21)(910,"em")(911,"strong"),t(912,"(opcional)"),e()(),o(913,"p"),t(914,"Define o percentual necess\xE1rio para disparar o evento "),o(915,"code"),t(916,"show-more"),e(),t(917,", que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%."),e(),o(918,"p")(919,"strong"),t(920,"Exemplos"),e()(),o(921,"ul")(922,"li"),t(923,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o "),o(924,"code"),t(925,"show-more"),e(),t(926," ser\xE1 disparado."),e()()()(),o(927,"tr",14)(928,"td",15)(929,"div",16)(930,"span",17),t(931," (p-input-change)"),l(932,"br"),e()()(),o(933,"td",18)(934,"code",19),t(935,"EventEmitter"),e()(),o(936,"td",20),t(937,"-"),e(),o(938,"td",21)(939,"em")(940,"strong"),t(941,"(opcional)"),e()(),o(942,"p"),t(943,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no Search input. A fun\xE7\xE3o receber\xE1 como argumento o input modificado."),e()()(),o(944,"tr",14)(945,"td",15)(946,"div",16)(947,"span",17),t(948," (p-keydown)"),l(949,"br"),e()()(),o(950,"td",18)(951,"code",19),t(952,"EventEmitter"),e()(),o(953,"td",20),t(954,"-"),e(),o(955,"td",21)(956,"em")(957,"strong"),t(958,"(opcional)"),e()(),o(959,"p"),t(960,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(961,"code"),t(962,"KeyboardEvent"),e(),t(963," com informa\xE7\xF5es sobre a tecla."),e()()(),o(964,"tr",14)(965,"td",15)(966,"div",22)(967,"span",23),t(968," p-label"),l(969,"br"),e()()(),o(970,"td",18)(971,"code",24),t(972,"string"),e()(),o(973,"td",20),t(974,"-"),e(),o(975,"td",21)(976,"em")(977,"strong"),t(978,"(opcional)"),e()(),o(979,"p"),t(980,"Label no componente."),e()()(),o(981,"tr",14)(982,"td",15)(983,"div",22)(984,"span",23),t(985," p-listbox-control-position"),l(986,"br"),e()()(),o(987,"td",18)(988,"code",32),t(989,"'top' "),e(),o(990,"code",33),t(991," 'bottom'"),e()(),o(992,"td",20)(993,"p")(994,"code"),t(995,"bottom"),e()()(),o(996,"td",21)(997,"em")(998,"strong"),t(999,"(opcional)"),e()(),o(1e3,"p"),t(1001,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),o(1002,"code"),t(1003,"listbox"),e(),t(1004," em rela\xE7\xE3o ao campo ("),o(1005,"code"),t(1006,"top"),e(),t(1007," ou "),o(1008,"code"),t(1009,"bottom"),e(),t(1010,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),e()()(),o(1011,"tr",14)(1012,"td",15)(1013,"div",22)(1014,"span",23),t(1015," p-literals"),l(1016,"br"),e()()(),o(1017,"td",18)(1018,"code",34),t(1019,"PoComboLiterals"),e()(),o(1020,"td",20),t(1021,"-"),e(),o(1022,"td",21)(1023,"em")(1024,"strong"),t(1025,"(opcional)"),e()(),o(1026,"p"),t(1027,"Objeto com as literais usadas no "),o(1028,"code"),t(1029,"po-combo"),e(),t(1030,"."),e(),o(1031,"p"),t(1032,"Para utilizar basta passar a literal que deseja customizar:"),e(),o(1033,"pre")(1034,"code"),t(1035,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),e()(),o(1036,"p"),t(1037,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),e(),o(1038,"pre")(1039,"code"),t(1040,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),e()(),o(1041,"blockquote")(1042,"p"),t(1043,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),o(1044,"a",35)(1045,"code"),t(1046,"PoI18nService"),e()(),t(1047," ou do browser."),e()()()(),o(1048,"tr",14)(1049,"td",15)(1050,"div",22)(1051,"span",23),t(1052," name"),l(1053,"br"),e()()(),o(1054,"td",18)(1055,"code",24),t(1056,"string"),e()(),o(1057,"td",20),t(1058,"-"),e(),o(1059,"td",21)(1060,"p"),t(1061,"Nome do componente."),e()()(),o(1062,"tr",14)(1063,"td",15)(1064,"div",16)(1065,"span",17),t(1066," (ngModelChange)"),l(1067,"br"),e()()(),o(1068,"td",18)(1069,"code",19),t(1070,"EventEmitter"),e()(),o(1071,"td",20),t(1072,"-"),e(),o(1073,"td",21)(1074,"em")(1075,"strong"),t(1076,"(opcional)"),e()(),o(1077,"p"),t(1078,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),e(),o(1079,"p"),t(1080,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),o(1081,"code"),t(1082,"strictTemplates"),e(),t(1083,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),e(),o(1084,"pre")(1085,"code"),t(1086,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),e()()()(),o(1087,"tr",14)(1088,"td",15)(1089,"div",22)(1090,"span",23),t(1091," p-optional"),l(1092,"br"),e()()(),o(1093,"td",18)(1094,"code",25),t(1095,"boolean"),e()(),o(1096,"td",20)(1097,"p")(1098,"code"),t(1099,"false"),e()()(),o(1100,"td",21)(1101,"em")(1102,"strong"),t(1103,"(opcional)"),e()(),o(1104,"p"),t(1105,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e(),o(1106,"blockquote")(1107,"p"),t(1108,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),o(1109,"ul")(1110,"li"),t(1111,"O campo conter "),o(1112,"code"),t(1113,"p-required"),e(),t(1114,";"),e(),o(1115,"li"),t(1116,"N\xE3o possuir "),o(1117,"code"),t(1118,"p-help"),e(),t(1119," e/ou "),o(1120,"code"),t(1121,"p-label"),e(),t(1122,"."),e()()()(),o(1123,"tr",14)(1124,"td",15)(1125,"div",22)(1126,"span",23),t(1127," p-options"),l(1128,"br"),e()()(),o(1129,"td",18)(1130,"code",36),t(1131,"Array<PoComboOption "),e(),o(1132,"code",37),t(1133," PoComboOptionGroup "),e(),o(1134,"code",38),t(1135," any>"),e()(),o(1136,"td",20),t(1137,"-"),e(),o(1138,"td",21)(1139,"p"),t(1140,"Nesta propriedade define a lista de op\xE7\xF5es do "),o(1141,"code"),t(1142,"po-combo"),e(),t(1143,"."),e(),o(1144,"blockquote")(1145,"p"),t(1146,"A lista pode ser definida utilizando um array com o valor representando o "),o(1147,"code"),t(1148,"value"),e(),t(1149," e o "),o(1150,"code"),t(1151,"label"),e(),t(1152," das seguintes formas:"),e()(),o(1153,"pre")(1154,"code"),t(1155,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),e()(),o(1156,"pre")(1157,"code"),t(1158,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),e()(),o(1159,"ul")(1160,"li"),t(1161,"Aconselha-se utilizar valores distintos no "),o(1162,"code"),t(1163,"label"),e(),t(1164," e "),o(1165,"code"),t(1166,"value"),e(),t(1167," dos itens."),e()()()(),o(1168,"tr",14)(1169,"td",15)(1170,"div",22)(1171,"span",23),t(1172," p-placeholder"),l(1173,"br"),e()()(),o(1174,"td",18)(1175,"code",24),t(1176,"string"),e()(),o(1177,"td",20),t(1178,"-"),e(),o(1179,"td",21)(1180,"p"),t(1181,"Mensagem apresentada enquanto o campo estiver vazio."),e()()(),o(1182,"tr",14)(1183,"td",15)(1184,"div",22)(1185,"span",23),t(1186," p-remove-initial-filter"),l(1187,"br"),e()()(),o(1188,"td",18)(1189,"code",25),t(1190,"boolean"),e()(),o(1191,"td",20)(1192,"p")(1193,"code"),t(1194,"false"),e()()(),o(1195,"td",21)(1196,"em")(1197,"strong"),t(1198,"(opcional)"),e()(),o(1199,"p"),t(1200,"Define que o filtro no primeiro clique ser\xE1 removido."),e(),o(1201,"blockquote")(1202,"p"),t(1203,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),e()()()(),o(1204,"tr",14)(1205,"td",15)(1206,"div",22)(1207,"span",23),t(1208," p-required"),l(1209,"br"),e()()(),o(1210,"td",18)(1211,"code",25),t(1212,"boolean"),e()(),o(1213,"td",20)(1214,"p")(1215,"code"),t(1216,"false"),e()()(),o(1217,"td",21)(1218,"em")(1219,"strong"),t(1220,"(opcional)"),e()(),o(1221,"p"),t(1222,"Define que o campo ser\xE1 obrigat\xF3rio."),e()()(),o(1223,"tr",14)(1224,"td",15)(1225,"div",22)(1226,"span",23),t(1227," p-show-required"),l(1228,"br"),e()()(),o(1229,"td",18)(1230,"code",25),t(1231,"boolean"),e()(),o(1232,"td",20),t(1233,"-"),e(),o(1234,"td",21)(1235,"p"),t(1236,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e(),o(1237,"blockquote")(1238,"p"),t(1239,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),o(1240,"ul")(1241,"li"),t(1242,"N\xE3o possuir "),o(1243,"code"),t(1244,"p-help"),e(),t(1245," e/ou "),o(1246,"code"),t(1247,"p-label"),e(),t(1248,"."),e()()()(),o(1249,"tr",14)(1250,"td",15)(1251,"div",22)(1252,"span",23),t(1253," p-size"),l(1254,"br"),e()()(),o(1255,"td",18)(1256,"code",24),t(1257,"string"),e()(),o(1258,"td",20)(1259,"p")(1260,"code"),t(1261,"medium"),e()()(),o(1262,"td",21)(1263,"em")(1264,"strong"),t(1265,"(opcional)"),e()(),o(1266,"p"),t(1267,"Define o tamanho do componente:"),e(),o(1268,"ul")(1269,"li")(1270,"code"),t(1271,"small"),e(),t(1272,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),o(1273,"li")(1274,"code"),t(1275,"medium"),e(),t(1276,": altura do input como 44px."),e()(),o(1277,"blockquote")(1278,"p"),t(1279,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(1280,"code"),t(1281,"medium"),e(),t(1282,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(1283,"a",39),t(1284,"po-theme"),e(),t(1285,"."),e()()()(),o(1286,"tr",14)(1287,"td",15)(1288,"div",22)(1289,"span",23),t(1290," p-sort"),l(1291,"br"),e()()(),o(1292,"td",18)(1293,"code",25),t(1294,"boolean"),e()(),o(1295,"td",20),t(1296,"-"),e(),o(1297,"td",21)(1298,"p"),t(1299,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),e()()()(),o(1300,"h3",10),t(1301,"M\xE9todos"),e(),o(1302,"table",40)(1303,"tr",14)(1304,"th",41)(1305,"div",22)(1306,"h4")(1307,"span",23),t(1308," focus "),e()()()()(),o(1309,"tr",21)(1310,"td",21)(1311,"p"),t(1312,"Fun\xE7\xE3o que atribui foco ao componente."),e(),o(1313,"p"),t(1314,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),o(1315,"pre")(1316,"code"),t(1317,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),e()()()()(),l(1318,"br"),o(1319,"table",40)(1320,"tr",14)(1321,"th",41)(1322,"div",22)(1323,"h4")(1324,"span",23),t(1325," showAdditionalHelp "),e()()()()(),o(1326,"tr",21)(1327,"td",21)(1328,"p"),t(1329,"M\xE9todo que exibe "),o(1330,"code"),t(1331,"p-additionalHelpTooltip"),e(),t(1332," ou executa a a\xE7\xE3o definida em "),o(1333,"code"),t(1334,"p-additionalHelp"),e(),t(1335,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),o(1336,"code"),t(1337,"p-keydown"),e(),t(1338,"."),e(),o(1339,"pre")(1340,"code"),t(1341,`<po-combo
 #combo
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, combo)"
></po-combo>
`),e()(),o(1342,"pre")(1343,"code"),t(1344,`...
onKeyDown(event: KeyboardEvent, inp: PoComboComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),e()()()()(),l(1345,"br"),o(1346,"h3"),t(1347,"Interfaces"),e(),o(1348,"h4",42)(1349,"code",5),t(1350,"PoComboFilter"),e()(),o(1351,"div",2)(1352,"p"),t(1353,"Interface para os servi\xE7os que ser\xE3o utilizados no po-combo."),e()(),o(1354,"h4",10),t(1355,"M\xE9todos"),e(),o(1356,"table",40)(1357,"tr",14)(1358,"th",41)(1359,"div",22)(1360,"h4")(1361,"span",23),t(1362," getFilteredData "),e()()()()(),o(1363,"tr",21)(1364,"td",21)(1365,"p"),t(1366,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),e()()()(),o(1367,"h5")(1368,"b"),t(1369,"Par\xE2metros"),e()(),o(1370,"table",11)(1371,"tr",12)(1372,"th",13),t(1373,"Nome"),e(),o(1374,"th",13),t(1375,"Tipo"),e(),o(1376,"th",13),t(1377,"Descri\xE7\xE3o"),e()(),o(1378,"tr",14)(1379,"td",15),t(1380," params"),e(),o(1381,"td",18)(1382,"code",43),t(1383," any "),e()(),o(1384,"td",21)(1385,"p"),t(1386,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),e()()(),o(1387,"tr",14)(1388,"td",15),t(1389," filterParams"),e(),o(1390,"td",18)(1391,"code",43),t(1392," any "),e()(),o(1393,"td",21)(1394,"p"),t(1395,"Valor informado atrav\xE9s da propriedade "),o(1396,"code"),t(1397,"p-filter-params"),e(),t(1398,"."),e()()()(),l(1399,"br"),o(1400,"table",40)(1401,"tr",14)(1402,"th",41)(1403,"div",22)(1404,"h4")(1405,"span",23),t(1406," getObjectByValue "),e()()()()(),o(1407,"tr",21)(1408,"td",21)(1409,"p"),t(1410,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),e()()()(),o(1411,"h5")(1412,"b"),t(1413,"Par\xE2metros"),e()(),o(1414,"table",11)(1415,"tr",12)(1416,"th",13),t(1417,"Nome"),e(),o(1418,"th",13),t(1419,"Tipo"),e(),o(1420,"th",13),t(1421,"Descri\xE7\xE3o"),e()(),o(1422,"tr",14)(1423,"td",15),t(1424," value"),e(),o(1425,"td",18)(1426,"code",24),t(1427," string "),e(),o(1428,"code",26),t(1429," number "),e()(),o(1430,"td",21)(1431,"p"),t(1432,"Valor respons\xE1vel por realizar a busca de um \xFAnico objeto."),e()()(),o(1433,"tr",14)(1434,"td",15),t(1435," filterParams"),e(),o(1436,"td",18)(1437,"code",43),t(1438," any "),e()(),o(1439,"td",21)(1440,"p"),t(1441,"Valor informado atrav\xE9s da propriedade "),o(1442,"code"),t(1443,"p-filter-params"),e(),t(1444,"."),e()()()(),l(1445,"br"),o(1446,"h4",42)(1447,"code",5),t(1448,"PoComboLiterals"),e()(),o(1449,"div",2)(1450,"p"),t(1451,"Interface para defini\xE7\xE3o das literais usadas no "),o(1452,"code"),t(1453,"po-combo"),e(),t(1454,"."),e()(),o(1455,"h4",10),t(1456,"Propriedades"),e(),o(1457,"table",11)(1458,"tr",12)(1459,"th",13),t(1460,"Nome"),e(),o(1461,"th",13),t(1462,"Tipo"),e(),o(1463,"th",13),t(1464,"Descri\xE7\xE3o"),e()(),o(1465,"tr",14)(1466,"td",15)(1467,"div",22)(1468,"span",23),t(1469," chooseOption"),l(1470,"br"),e()()(),o(1471,"td",18)(1472,"code",24),t(1473,"string"),e()(),o(1474,"td",21)(1475,"em")(1476,"strong"),t(1477,"(opcional)"),e()(),o(1478,"p"),t(1479,"Texto exibido quando o combo estiver vazio."),e()()(),o(1480,"tr",14)(1481,"td",15)(1482,"div",22)(1483,"span",23),t(1484," clean"),l(1485,"br"),e()()(),o(1486,"td",18)(1487,"code",24),t(1488,"string"),e()(),o(1489,"td",21)(1490,"em")(1491,"strong"),t(1492,"(opcional)"),e()(),o(1493,"p"),t(1494,"Texto do aria-label do bot\xE3o de limpar"),e()()(),o(1495,"tr",14)(1496,"td",15)(1497,"div",22)(1498,"span",23),t(1499," noData"),l(1500,"br"),e()()(),o(1501,"td",18)(1502,"code",24),t(1503,"string"),e()(),o(1504,"td",21)(1505,"em")(1506,"strong"),t(1507,"(opcional)"),e()(),o(1508,"p"),t(1509,"Texto exibido quando n\xE3o houver itens na lista ou se, a pesquisa do filtro n\xE3o retornar nenhum item."),e()()()(),o(1510,"h4",42)(1511,"code",5),t(1512,"PoComboOptionGroup"),e()(),o(1513,"div",2)(1514,"p"),t(1515,"Interface dos agrupamentos da cole\xE7\xE3o que ser\xE1 exibida no dropdown do "),o(1516,"code"),t(1517,"po-combo"),e(),t(1518,"."),e()(),o(1519,"h4",10),t(1520,"Propriedades"),e(),o(1521,"table",11)(1522,"tr",12)(1523,"th",13),t(1524,"Nome"),e(),o(1525,"th",13),t(1526,"Tipo"),e(),o(1527,"th",13),t(1528,"Descri\xE7\xE3o"),e()(),o(1529,"tr",14)(1530,"td",15)(1531,"div",22)(1532,"span",23),t(1533," label"),l(1534,"br"),e()()(),o(1535,"td",18)(1536,"code",24),t(1537,"string"),e()(),o(1538,"td",21)(1539,"p"),t(1540,"T\xEDtulo para cada grupo de op\xE7\xF5es."),e()()(),o(1541,"tr",14)(1542,"td",15)(1543,"div",22)(1544,"span",23),t(1545," options"),l(1546,"br"),e()()(),o(1547,"td",18)(1548,"code",44),t(1549,"Array<PoComboOption>"),e()(),o(1550,"td",21)(1551,"p"),t(1552,"Lista de itens a serem exibidos."),e()()()(),o(1553,"h4",42)(1554,"code",5),t(1555,"PoComboOption"),e()(),o(1556,"div",2)(1557,"p"),t(1558,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista do "),o(1559,"code"),t(1560,"po-combo"),e(),t(1561,"."),e()(),o(1562,"h4",10),t(1563,"Propriedades"),e(),o(1564,"table",11)(1565,"tr",12)(1566,"th",13),t(1567,"Nome"),e(),o(1568,"th",13),t(1569,"Tipo"),e(),o(1570,"th",13),t(1571,"Descri\xE7\xE3o"),e()(),o(1572,"tr",14)(1573,"td",15)(1574,"div",22)(1575,"span",23),t(1576," label"),l(1577,"br"),e()()(),o(1578,"td",18)(1579,"code",24),t(1580,"string"),e()(),o(1581,"td",21)(1582,"em")(1583,"strong"),t(1584,"(opcional)"),e()(),o(1585,"p"),t(1586,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),e(),o(1587,"blockquote")(1588,"p"),t(1589,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),o(1590,"code"),t(1591,"value"),e(),t(1592,"."),e()()()(),o(1593,"tr",14)(1594,"td",15)(1595,"div",22)(1596,"span",23),t(1597," value"),l(1598,"br"),e()()(),o(1599,"td",18)(1600,"code",24),t(1601,"string "),e(),o(1602,"code",26),t(1603," number"),e()(),o(1604,"td",21)(1605,"p"),t(1606,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),o(1607,"em"),t(1608,"model"),e(),t(1609,"."),e()()()(),o(1610,"h3"),t(1611,"Enums"),e(),o(1612,"h4",4)(1613,"code",5),t(1614,"PoComboFilterMode"),e()(),o(1615,"div",2)(1616,"p"),t(1617,"Define o tipo de busca usado no po-combo."),e()(),o(1618,"h4",10),t(1619,"Propriedades"),e(),o(1620,"table",11)(1621,"tr",12)(1622,"th",13),t(1623,"Nome"),e(),o(1624,"th",13),t(1625,"Descri\xE7\xE3o"),e()(),o(1626,"tr",14)(1627,"td",15)(1628,"div",22)(1629,"span",23),t(1630," startsWith"),l(1631,"br"),e()()(),o(1632,"td",21)(1633,"p"),t(1634,"Verifica se o texto "),o(1635,"em"),t(1636,"inicia"),e(),t(1637," com o valor pesquisado. Caso n\xE3o seja especificado um tipo, ser\xE1 esse o utilizado."),e()()(),o(1638,"tr",14)(1639,"td",15)(1640,"div",22)(1641,"span",23),t(1642," contains"),l(1643,"br"),e()()(),o(1644,"td",21)(1645,"p"),t(1646,"Verifica se o texto "),o(1647,"em"),t(1648,"cont\xE9m"),e(),t(1649," o valor pesquisado."),e()()(),o(1650,"tr",14)(1651,"td",15)(1652,"div",22)(1653,"span",23),t(1654," endsWith"),l(1655,"br"),e()()(),o(1656,"td",21)(1657,"p"),t(1658,"Verifica se o texto "),o(1659,"em"),t(1660,"finaliza"),e(),t(1661," com o valor pesquisado."),e()()()()())},dependencies:[w],encapsulation:2})}return a})();var it=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(_(Oe),_(Ve))};static \u0275cmp=E({type:a,selectors:[["ng-component"]],standalone:!1,decls:13,vars:4,consts:[["p-title","Combo",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),l(3,"sample-po-combo-doc"),e(),o(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),l(5,"sample-po-combo-basic-view")(6,"sample-po-combo-labs-view")(7,"sample-po-combo-scheduling-view")(8,"sample-po-combo-transfer-view")(9,"sample-po-combo-heroes-view")(10,"sample-po-combo-heroes-reactive-form-view")(11,"sample-po-combo-infinity-scroll-view")(12,"sample-po-combo-hotels-view"),e()()()),r&2&&(s("p-actions",n.actions),m(2),s("p-active",n.activeTab==="doc"),m(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[We,y,x,Ae,ze,je,Qe,Ye,Ze,et,ot,nt],encapsulation:2})}return a})();var Qt=[{path:"",component:it}],at=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=re({type:a});static \u0275inj=le({imports:[Se.forChild(Qt),Se]})}return a})();var Ao=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=re({type:a});static \u0275inj=le({imports:[Be,at]})}return a})();export{Ao as DocPoComboModule};
