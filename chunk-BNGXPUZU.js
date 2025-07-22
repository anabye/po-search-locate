import{o as x,p as Se}from"./chunk-JYNCG2Y6.js";import{Ab as y,F as W,Ga as A,I as de,Ra as M,Wa as D,a as re,ha as me,ja as R,nb as ue,q as se,ta as ce,zb as C}from"./chunk-HBOGTDFH.js";import{$a as g,Ac as N,Ba as _,Ea as t,Fa as e,Ga as l,Ka as F,L as Z,La as E,M as I,Nc as le,O as $,Pc as pe,Qa as te,Rc as Y,T as u,Tb as ae,U as S,Wa as G,Xa as n,Ya as U,Za as w,ab as b,bb as h,cb as ne,db as K,eb as P,fb as ie,ha as s,ia as L,oa as v,pa as q,qb as oe,ua as ee,ub as T,wc as V,xc as B,ya as c,yc as z,zc as k}from"./chunk-MIQUIDUB.js";var Te=()=>({label:"Option 1",value:"1"}),Me=()=>({label:"Option 2",value:"2"}),Oe=(a,J)=>[a,J],ge=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","select","p-label","PO Select",3,"p-options"]],template:function(p,i){p&1&&l(0,"po-select",0),p&2&&c("p-options",ie(3,Oe,K(1,Te),K(2,Me)))},dependencies:[M],encapsulation:2})}return a})();var Ve=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Select Basic"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-select-basic/sample-po-select-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-select-basic/sample-po-select-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-select-basic"),e(),l(23,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,Ve,i.hideSampleCodeTabs)))},dependencies:[T,x,C,y,ge],encapsulation:2})}return a})();var Ee=(()=>{class a{cdr;additionalHelpTooltip;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"readonly",label:"Read Only"},{value:"errorLimit",label:"Limit Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];constructor(r){this.cdr=r}ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges()}changeEvent(r){this.event=r}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.additionalHelpTooltip="",this.event="",this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.select="",this.selectOptionGroupSwitch=!1,this.selectedOptionsGroup=void 0,this.size="medium"}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0)}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}]}verifyOptionObject(r,p,i){let{label:m,value:d}=p;if(i){let o=r.findIndex(X=>X.label===i&&"options"in X);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:m,value:d}]}]):(r[o].options.push({label:m,value:d}),r)}return[...r,{label:m,value:d}]}static \u0275fac=function(p){return new(p||a)(L(oe))};static \u0275cmp=v({type:a,selectors:[["sample-po-select-labs"]],standalone:!1,decls:33,vars:34,consts:[["fOption","ngForm"],["f","ngForm"],["name","select",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-additional-help-tooltip","p-disabled","p-help","p-label","p-options","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po select options group"],["name","selectOptionGroupSwitch","p-label","Select options group",1,"po-lg-2","po-md-12",3,"p-change","ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po select options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-lg-3","po-md-6"],["p-label","Sample Restore",3,"p-click"]],template:function(p,i){if(p&1){let m=F();t(0,"po-select",2),h("ngModelChange",function(o){return u(m),b(i.select,o)||(i.select=o),S(o)}),E("p-blur",function(){return u(m),S(i.changeEvent("p-blur"))})("p-change",function(){return u(m),S(i.changeEvent("p-change"))})("p-change-model",function(){return u(m),S(i.changeEvent("p-change-model"))})("p-enter",function(){return u(m),S(i.changeEvent("p-enter"))})("p-keydown",function(){return u(m),S(i.changeEvent("p-keydown"))}),e(),l(1,"hr"),t(2,"div",3),l(3,"po-info",4)(4,"po-info",5),e(),l(5,"hr"),t(6,"form",null,0),l(8,"po-divider",6),t(9,"div",3)(10,"po-switch",7),E("p-change",function(o){return u(m),S(i.restoreSwitch(o))}),h("ngModelChange",function(o){return u(m),b(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),S(o)}),e(),t(11,"po-select",8),h("ngModelChange",function(o){return u(m),b(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),S(o)}),E("p-change",function(){return u(m),S(i.optionsGroupSelection())}),e(),t(12,"po-input",9),h("ngModelChange",function(o){return u(m),b(i.optionsGroup,o)||(i.optionsGroup=o),S(o)}),e()(),l(13,"po-divider",10),t(14,"div",3)(15,"po-input",11),h("ngModelChange",function(o){return u(m),b(i.option.label,o)||(i.option.label=o),S(o)}),e(),t(16,"po-input",12),h("ngModelChange",function(o){return u(m),b(i.option.value,o)||(i.option.value=o),S(o)}),e()(),t(17,"div",3)(18,"po-button",13),E("p-click",function(){return u(m),S(i.addOption())}),e()()(),l(19,"hr"),t(20,"form",null,1)(22,"po-input",14),h("ngModelChange",function(o){return u(m),b(i.label,o)||(i.label=o),S(o)}),e(),t(23,"po-input",15),h("ngModelChange",function(o){return u(m),b(i.help,o)||(i.help=o),S(o)}),e(),t(24,"po-input",16),h("ngModelChange",function(o){return u(m),b(i.additionalHelpTooltip,o)||(i.additionalHelpTooltip=o),S(o)}),e(),t(25,"po-input",17),h("ngModelChange",function(o){return u(m),b(i.placeholder,o)||(i.placeholder=o),S(o)}),e(),t(26,"po-input",18),h("ngModelChange",function(o){return u(m),b(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),S(o)}),e(),t(27,"po-checkbox-group",19),h("ngModelChange",function(o){return u(m),b(i.properties,o)||(i.properties=o),S(o)}),e(),t(28,"po-radio-group",20),h("ngModelChange",function(o){return u(m),b(i.size,o)||(i.size=o),S(o)}),e(),t(29,"div",3)(30,"div",21)(31,"po-button",22),E("p-click",function(){return u(m),S(i.restore())}),e()()(),l(32,"form"),e()}if(p&2){let m=G(7);g("ngModel",i.select),c("p-additional-help-tooltip",i.additionalHelpTooltip)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-options",i.options)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),s(3),c("p-value",i.select),s(),c("p-value",i.event),s(6),g("ngModel",i.selectOptionGroupSwitch),s(),g("ngModel",i.selectedOptionsGroup),c("p-disabled",!i.selectOptionGroupSwitch)("p-options",i.optionsGroupList),s(),g("ngModel",i.optionsGroup),c("p-disabled",!i.selectOptionGroupSwitch),s(3),g("ngModel",i.option.label),s(),g("ngModel",i.option.value),s(2),c("p-disabled",m.invalid),s(4),g("ngModel",i.label),s(),g("ngModel",i.help),s(),g("ngModel",i.additionalHelpTooltip),s(),g("ngModel",i.placeholder),s(),g("ngModel",i.fieldErrorMessage),s(),g("ngModel",i.properties),c("p-options",i.propertiesOptions),s(),g("ngModel",i.size),c("p-options",i.sizeOptions)}},dependencies:[N,V,B,k,z,W,re,me,R,A,M,ce,D],encapsulation:2})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Select Labs"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-select-labs/sample-po-select-labs.component.html"),e(),t(13,"pre",7),n(14,`<po-select
  class="po-md-12"
  name="select"
  [(ngModel)]="select"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-options]="options"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-select>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="select"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #fOption="ngForm">
  <po-divider p-label="Po select options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-2 po-md-12"
      name="selectOptionGroupSwitch"
      (p-change)="restoreSwitch($event)"
      [(ngModel)]="selectOptionGroupSwitch"
      p-label="Select options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!selectOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!selectOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po select options"></po-divider>
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-4" p-label="Add Option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help Tooltip"
  >
  </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

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
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <div class="po-lg-3 po-md-6">
      <po-button p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </div>
  <form></form>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-select-labs/sample-po-select-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-labs',
  templateUrl: './sample-po-select-labs.component.html',
  standalone: false
})
export class SamplePoSelectLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  event: string;
  help: string;
  label: string;
  option: PoSelectOption;
  options: Array<PoSelectOption | PoSelectOptionGroup>;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption> = [];
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  select: string;
  selectedOptionsGroup: string;
  selectOptionGroupSwitch: boolean;
  size: string;

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
    this.cdr.detectChanges();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.select = '';
    this.selectOptionGroupSwitch = false;
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  restoreSwitch(event: boolean) {
    if (!event) {
      this.selectedOptionsGroup = undefined;
      this.optionsGroup = undefined;
    }
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoSelectOption | PoSelectOptionGroup>,
    option: PoSelectOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoSelectOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoSelectOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-select-labs"),e(),l(23,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,Ge,i.hideSampleCodeTabs)))},dependencies:[T,x,C,y,Ee],encapsulation:2})}return a})();var H=(()=>{class a{http;url="https://po-sample-api.onrender.com/v1/sampleSelect";constructor(r){this.http=r}getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(p){return new(p||a)($(ae))};static \u0275prov=Z({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Fe(a,J){if(a&1&&(t(0,"div",17),l(1,"po-avatar",18),t(2,"div",19)(3,"div",20),n(4),e(),t(5,"div",21),n(6),e()()()),a&2){let r=J.$implicit;s(),te("p-src","https://po-sample-api.onrender.com/v1/sampleSelect/",r.value,".png"),s(3),U(r.label),s(2),U(r.value)}}var fe=(()=>{class a{sampleService;address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:"CPF",value:"CPF"},{label:"CNPJ",value:"CNPJ"}];citiesSubscription;statesSubscription;constructor(r){this.sampleService=r}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType)}changeType(r){r==="CPF"?(this.documentLabel="CPF Number",this.mask="999.999.999-99",this.minLength=14,this.nameLabel="Client Name"):(this.documentLabel="CNPJ Number",this.mask="99.999.999/9999-99",this.minLength=18,this.nameLabel="Company Name"),this.address="",this.document="",this.name=""}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType="CPF"}onChangeState(){this.getCitiesByState(this.state)}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:""}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:""}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state="sp",this.getCitiesByState(this.state)})}static \u0275fac=function(p){return new(p||a)(L(H))};static \u0275cmp=v({type:a,selectors:[["sample-po-select-customer-registration"]],standalone:!1,features:[ne([H])],decls:27,vars:22,consts:[["f","ngForm"],["modal",""],[1,"po-row"],["name","documentType","p-label","Document type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","document","p-mask-format-model","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label","p-mask","p-minlength"],["name","name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label"],["name","address","p-label","Address",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["p-select-option-template",""],["name","city","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Send Informations",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Informations"],["p-label","Document type",1,"po-md-6",3,"p-value"],[1,"po-md-6",3,"p-label","p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","State",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"],[1,"sample-select-option-template-container"],["p-size","xs",3,"p-src"],[1,"sample-select-option-template-margin"],[1,"sample-select-option-template-label"],[1,"sample-select-option-template-value"]],template:function(p,i){if(p&1){let m=F();t(0,"form",null,0)(2,"div",2)(3,"po-radio-group",3),h("ngModelChange",function(o){return u(m),b(i.documentType,o)||(i.documentType=o),S(o)}),E("p-change",function(o){return u(m),S(i.changeType(o))}),e(),t(4,"po-input",4),h("ngModelChange",function(o){return u(m),b(i.document,o)||(i.document=o),S(o)}),e()(),t(5,"div",2)(6,"po-input",5),h("ngModelChange",function(o){return u(m),b(i.name,o)||(i.name=o),S(o)}),e(),t(7,"po-input",6),h("ngModelChange",function(o){return u(m),b(i.address,o)||(i.address=o),S(o)}),e()(),t(8,"div",2)(9,"po-select",7),h("ngModelChange",function(o){return u(m),b(i.state,o)||(i.state=o),S(o)}),E("p-change",function(){return u(m),S(i.onChangeState())}),ee(10,Fe,7,4,"ng-template",8),e(),t(11,"po-select",9),h("ngModelChange",function(o){return u(m),b(i.city,o)||(i.city=o),S(o)}),e()(),t(12,"div",2)(13,"po-button",10),E("p-click",function(){u(m);let o=G(15);return S(o.open())}),e()()(),t(14,"po-modal",11,1)(16,"div",2),l(17,"po-info",12)(18,"po-info",13),e(),l(19,"hr"),t(20,"div",2),l(21,"po-info",13)(22,"po-info",14),e(),l(23,"hr"),t(24,"div",2),l(25,"po-info",15)(26,"po-info",16),e()()}if(p&2){let m=G(1);s(3),g("ngModel",i.documentType),c("p-options",i.options),s(),g("ngModel",i.document),c("p-label",i.documentLabel)("p-mask",i.mask)("p-minlength",i.minLength),s(2),g("ngModel",i.name),c("p-label",i.nameLabel),s(),g("ngModel",i.address),s(2),g("ngModel",i.state),c("p-options",i.stateOptions),s(2),g("ngModel",i.city),c("p-options",i.cityOptions),s(2),c("p-disabled",m.invalid),s(4),c("p-value",i.documentType),s(),c("p-label",i.documentLabel)("p-value",i.document),s(3),c("p-label",i.nameLabel)("p-value",i.name),s(),c("p-value",i.address),s(3),c("p-value",i.getStateByValue(i.state)),s(),c("p-value",i.getCityByValue(i.city))}},dependencies:[N,V,B,k,z,se,W,R,A,M,D,de],styles:[".sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}"]})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-customer-registration-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Select - Customer registration"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.html"),e(),t(13,"pre",7),n(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="documentType"
      [(ngModel)]="documentType"
      p-label="Document type"
      [p-options]="options"
      (p-change)="changeType($event)"
    >
    </po-radio-group>

    <po-input
      class="po-md-6"
      name="document"
      [(ngModel)]="document"
      p-mask-format-model
      p-required
      [p-label]="documentLabel"
      [p-mask]="mask"
      [p-minlength]="minLength"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="name" [(ngModel)]="name" p-required [p-label]="nameLabel"> </po-input>

    <po-input class="po-md-6" name="address" [(ngModel)]="address" p-label="Address"> </po-input>
  </div>

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      [p-options]="stateOptions"
      (p-change)="onChangeState()"
    >
      <ng-template p-select-option-template let-option>
        <div class="sample-select-option-template-container">
          <po-avatar p-size="xs" p-src="https://po-sample-api.onrender.com/v1/sampleSelect/{ { option.value }}.png">
          </po-avatar>

          <div class="sample-select-option-template-margin">
            <div class="sample-select-option-template-label">{ { option.label }}</div>
            <div class="sample-select-option-template-value">{ { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-select>

    <po-select class="po-md-6" name="city" [(ngModel)]="city" p-label="City" [p-options]="cityOptions"> </po-select>
  </div>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Send Informations" [p-disabled]="f.invalid" (p-click)="modal.open()">
    </po-button>
  </div>
</form>

<po-modal #modal p-title="Informations">
  <div class="po-row">
    <po-info class="po-md-6" p-label="Document type" [p-value]="documentType"> </po-info>

    <po-info class="po-md-6" [p-label]="documentLabel" [p-value]="document"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-6" [p-label]="nameLabel" [p-value]="name"> </po-info>

    <po-info class="po-md-6" p-label="Address" [p-value]="address"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-6" p-label="State" [p-value]="getStateByValue(state)"> </po-info>

    <po-info class="po-md-6" p-label="City" [p-value]="getCityByValue(city)"> </po-info>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

import { SamplePoSelectCustomerRegistrationService } from './sample-po-select-customer-registration.service';

@Component({
  selector: 'sample-po-select-customer-registration',
  templateUrl: './sample-po-select-customer-registration.component.html',
  providers: [SamplePoSelectCustomerRegistrationService],
  styles: [
    \`
      .sample-select-option-template-container {
        display: inline-flex;
        align-items: flex-start;
        width: 100%;
      }

      .sample-select-option-template-margin {
        margin: 5px;
      }

      .sample-select-option-template-label {
        font-size: 16px;
      }

      .sample-select-option-template-value {
        font-size: 12px;
        text-transform: uppercase;
      }
    \`
  ],
  standalone: false
})
export class SamplePoSelectCustomerRegistrationComponent implements OnDestroy, OnInit {
  address: string;
  city: number;
  cityOptions: Array<PoSelectOption>;
  document: string;
  documentLabel;
  documentType: string;
  mask: string;
  minLength: number;
  name: string;
  nameLabel: string;
  state: string;
  stateOptions: Array<PoSelectOption>;

  readonly options: Array<PoRadioGroupOption> = [
    { label: 'CPF', value: 'CPF' },
    { label: 'CNPJ', value: 'CNPJ' }
  ];

  private citiesSubscription: Subscription;
  private statesSubscription: Subscription;

  constructor(private sampleService: SamplePoSelectCustomerRegistrationService) {}

  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.statesSubscription?.unsubscribe();
  }

  ngOnInit() {
    this.initialize();
    this.getStates();
    this.changeType(this.documentType);
  }

  changeType(documentType) {
    if (documentType === 'CPF') {
      this.documentLabel = 'CPF Number';
      this.mask = '999.999.999-99';
      this.minLength = 14;
      this.nameLabel = 'Client Name';
    } else {
      this.documentLabel = 'CNPJ Number';
      this.mask = '99.999.999/9999-99';
      this.minLength = 18;
      this.nameLabel = 'Company Name';
    }

    this.address = '';
    this.document = '';
    this.name = '';
  }

  initialize() {
    this.cityOptions = [];
    this.stateOptions = [];
    this.documentType = 'CPF';
  }

  onChangeState() {
    this.getCitiesByState(this.state);
  }

  getCityByValue(cityValue: number) {
    const cityLabel = this.cityOptions.find(city => city.value === cityValue);
    return cityLabel ? cityLabel.label : '';
  }

  getStateByValue(stateValue: string) {
    const stateLabel = this.stateOptions.find(state => state.value === stateValue);
    return stateLabel ? stateLabel.label : '';
  }

  private getCitiesByState(state: string) {
    this.citiesSubscription = this.sampleService
      .getCitiesByState(state)
      .subscribe((cities: { items: Array<PoSelectOption> }) => {
        this.cityOptions = cities.items;
        this.city = this.cityOptions[0].value as number;
      });
  }

  private getStates() {
    this.statesSubscription = this.sampleService.getStates().subscribe((states: { items: Array<PoSelectOption> }) => {
      this.stateOptions = states.items;
      this.state = 'sp';

      this.getCitiesByState(this.state);
    });
  }
}
`),e(),t(21,"label",6),n(22,"sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts"),e(),t(23,"pre",9),n(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSelectCustomerRegistrationService {
  private url: string = 'https://po-sample-api.onrender.com/v1/sampleSelect';

  constructor(private http: HttpClient) {}

  getCitiesByState(uf: string) {
    return this.http.get(\`\${this.url}/getCities/\${uf}\`);
  }

  getStates() {
    return this.http.get(\`\${this.url}/getStates\`);
  }
}
`),e()()()()(),t(25,"div",10),l(26,"sample-po-select-customer-registration"),e(),l(27,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,ze,i.hideSampleCodeTabs)))},dependencies:[T,x,C,y,fe],encapsulation:2})}return a})();var ye=(()=>{class a{select;fieldLabel="nomeFantasia";fieldValue="cnpj";empresas=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];labels=[{label:"Dados",options:[{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"email",value:"email"}]},{label:"Cidade",options:[{label:"origem",value:"origem"}]}];values=[{label:"codigo",value:"codigo"},{label:"cnpj",value:"cnpj"},{label:"id",value:"id"},{label:"data",value:"data"}];onChange(r){this.select=void 0}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-companies"]],standalone:!1,decls:5,vars:9,consts:[["name","select","p-label","PO Select",3,"ngModelChange","ngModel","p-field-value","p-field-label","p-options"],["p-label","Model","name","selectInfo",3,"p-valueChange","p-value"],[1,"po-row"],["name","fieldLabel","p-label","p-field-label",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"],["name","selectValue","p-label","p-field-value",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"]],template:function(p,i){p&1&&(t(0,"po-select",0),h("ngModelChange",function(d){return b(i.select,d)||(i.select=d),d}),e(),t(1,"po-info",1),h("p-valueChange",function(d){return b(i.select,d)||(i.select=d),d}),e(),t(2,"div",2)(3,"po-select",3),E("p-change",function(d){return i.onChange(d)}),h("ngModelChange",function(d){return b(i.fieldLabel,d)||(i.fieldLabel=d),d}),e(),t(4,"po-select",4),E("p-change",function(d){return i.onChange(d)}),h("ngModelChange",function(d){return b(i.fieldValue,d)||(i.fieldValue=d),d}),e()()),p&2&&(g("ngModel",i.select),c("p-field-value",i.fieldValue)("p-field-label",i.fieldLabel)("p-options",i.empresas),s(),g("p-value",i.select),s(2),c("p-options",i.labels),g("ngModel",i.fieldLabel),s(),c("p-options",i.values),g("ngModel",i.fieldValue))},dependencies:[V,k,M,D],encapsulation:2})}return a})();var Re=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-companies-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Select Companies"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-select-companies/sample-po-select-companies.component.html"),e(),t(13,"pre",7),n(14,`<po-select
  name="select"
  p-label="PO Select"
  [(ngModel)]="select"
  [p-field-value]="fieldValue"
  [p-field-label]="fieldLabel"
  [p-options]="empresas"
>
</po-select>

<po-info p-label="Model" name="selectInfo" [(p-value)]="select"> </po-info>

<div class="po-row">
  <po-select
    class="po-md-6"
    name="fieldLabel"
    p-label="p-field-label"
    [p-options]="labels"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldLabel"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="selectValue"
    p-label="p-field-value"
    [p-options]="values"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldValue"
  >
  </po-select>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-select-companies/sample-po-select-companies.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

import { PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-companies',
  templateUrl: './sample-po-select-companies.component.html',
  standalone: false
})
export class SamplePoSelectCompaniesComponent {
  select: Array<string>;
  fieldLabel = 'nomeFantasia';
  fieldValue = 'cnpj';

  empresas: Array<any> = [
    {
      codigo: '1',
      nomeFantasia: 'TOTVS SA',
      razaoSocial: 'TOTVS LTDA',
      label: 'TOTVS COMPANY',
      cnpj: '01.234.567/0000-01',
      value: '100',
      id: '10',
      email: 'totvscompany@sample.com',
      data: '10/03/2015',
      origem: 'S\xE3o Paulo'
    },
    {
      codigo: '2',
      nomeFantasia: 'INSTITUTO TOTVS DE ENSINO SA',
      razaoSocial: 'INST TOTVS DE ENSINO LTDA',
      label: 'INST TOTVS',
      cnpj: '02.345.678/0000-02',
      value: '200',
      id: '20',
      email: 'insttotvs@sample.com',
      data: '10/10/2020',
      origem: 'Joinville'
    },
    {
      codigo: '3',
      nomeFantasia: 'TOTVS ENTERPRISE SA',
      razaoSocial: 'TOTVS ENTERPRISE LTDA ',
      label: 'ENT TOTVS',
      cnpj: '03.456.789/0000-03',
      value: '300',
      id: '30',
      email: 'enttotvs@sample.com',
      data: '10/01/2022',
      origem: 'Curitiba'
    }
  ];

  readonly labels: Array<PoSelectOptionGroup> = [
    {
      label: 'Dados',
      options: [
        { label: 'nomeFantasia', value: 'nomeFantasia' },
        { label: 'razaoSocial', value: 'razaoSocial' },
        { label: 'email', value: 'email' }
      ]
    },
    {
      label: 'Cidade',
      options: [{ label: 'origem', value: 'origem' }]
    }
  ];

  readonly values: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'id', value: 'id' },
    { label: 'data', value: 'data' }
  ];

  onChange(event) {
    this.select = undefined;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-select-companies"),e(),l(23,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,Re,i.hideSampleCodeTabs)))},dependencies:[T,x,C,y,ye],encapsulation:2})}return a})();var _e=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-doc"]],standalone:!1,decls:877,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo-option-template"],["href","/documentation/po-select-option-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-html"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","number"]],template:function(p,i){p&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),t(7,"blockquote")(8,"p"),n(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),n(11,"FormsModule"),e(),n(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),n(14,"ReactiveFormsModule"),e(),n(15,", ambos nativos do Angular."),e()()(),t(16,"h3",3),n(17,"Componente"),e(),t(18,"h4",4)(19,"code",5),n(20,"PoSelectComponent"),e()(),t(21,"div",2)(22,"p"),n(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),e(),t(24,"blockquote")(25,"p"),n(26,"Ao passar um valor para o "),t(27,"em"),n(28,"model"),e(),n(29," que n\xE3o est\xE1 na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),t(30,"code"),n(31,"undefined"),e(),n(32,"."),e()(),t(33,"p"),n(34,"Tamb\xE9m existe a possibilidade de utilizar um "),t(35,"em"),n(36,"template"),e(),n(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),t(38,"strong")(39,"a",6),n(40,"p-combo-option-template"),e()(),n(41,"."),e(),t(42,"blockquote")(43,"p"),n(44,"Obs: o template "),t(45,"strong")(46,"a",7),n(47,"p-select-option-template"),e()(),n(48," ser\xE1 depreciado na vers\xE3o 14.x.x."),e()(),t(49,"h4"),n(50,"Tokens customiz\xE1veis"),e(),t(51,"p"),n(52,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(53,"blockquote")(54,"p"),n(55,"Para maiores informa\xE7\xF5es, acesse o guia "),t(56,"a",8),n(57,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(58,"."),e()(),t(59,"table")(60,"thead")(61,"tr")(62,"th"),n(63,"Propriedade"),e(),t(64,"th"),n(65,"Descri\xE7\xE3o"),e(),t(66,"th"),n(67,"Valor Padr\xE3o"),e()()(),t(68,"tbody")(69,"tr")(70,"td")(71,"strong"),n(72,"Default Values"),e()(),l(73,"td")(74,"td"),e(),t(75,"tr")(76,"td")(77,"code"),n(78,"--font-family"),e()(),t(79,"td"),n(80,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(81,"td")(82,"code"),n(83,"var(--font-family-theme)"),e()()(),t(84,"tr")(85,"td")(86,"code"),n(87,"--font-size"),e()(),t(88,"td"),n(89,"Tamanho da fonte"),e(),t(90,"td")(91,"code"),n(92,"var(--font-size-default)"),e()()(),t(93,"tr")(94,"td")(95,"code"),n(96,"--text-color-empty"),e()(),t(97,"td"),n(98,"Cor do placeholder"),e(),t(99,"td")(100,"code"),n(101,"var(--color-neutral-light-30)"),e()()(),t(102,"tr")(103,"td")(104,"code"),n(105,"--color"),e()(),t(106,"td"),n(107,"Cor da borda"),e(),t(108,"td")(109,"code"),n(110,"var(--color-neutral-dark-70)"),e()()(),t(111,"tr")(112,"td")(113,"code"),n(114,"--background"),e()(),t(115,"td"),n(116,"Cor de background"),e(),t(117,"td")(118,"code"),n(119,"var(--color-neutral-light-05)"),e()()(),t(120,"tr")(121,"td")(122,"code"),n(123,"--text-color"),e()(),t(124,"td"),n(125,"Cor do texto"),e(),t(126,"td")(127,"code"),n(128,"var(--color-neutral-dark-90)"),e()()(),t(129,"tr")(130,"td")(131,"code"),n(132,"--padding-horizontal"),e()(),t(133,"td"),n(134,"Preenchimento horizontal"),e(),t(135,"td")(136,"code"),n(137,"0.5em"),e()()(),t(138,"tr")(139,"td")(140,"code"),n(141,"--padding-vertical"),e()(),t(142,"td"),n(143,"Preenchimento vertical"),e(),t(144,"td")(145,"code"),n(146,"0.7em"),e()()(),t(147,"tr")(148,"td")(149,"strong"),n(150,"Hover"),e()(),l(151,"td")(152,"td"),e(),t(153,"tr")(154,"td")(155,"code"),n(156,"--color-hover"),e()(),t(157,"td"),n(158,"Cor principal no estado hover"),e(),t(159,"td")(160,"code"),n(161,"var(--color-brand-01-dark)"),e()()(),t(162,"tr")(163,"td")(164,"code"),n(165,"--background-hover"),e()(),t(166,"td"),n(167,"Cor de background no estado hover"),e(),t(168,"td")(169,"code"),n(170,"var(--color-brand-01-lighter)"),e()()(),t(171,"tr")(172,"td")(173,"strong"),n(174,"Focused"),e()(),l(175,"td")(176,"td"),e(),t(177,"tr")(178,"td")(179,"code"),n(180,"--outline-color-focused"),e()(),t(181,"td"),n(182,"Cor do outline do estado de focus"),e(),t(183,"td")(184,"code"),n(185,"var(--color-action-focus)"),e()()(),t(186,"tr")(187,"td")(188,"code"),n(189,"--color-focused"),e()(),t(190,"td"),n(191,"Cor da borda no estado de focus"),e(),t(192,"td")(193,"code"),n(194,"var(--color-action-default)"),e()()(),t(195,"tr")(196,"td")(197,"strong"),n(198,"Disabled"),e()(),l(199,"td")(200,"td"),e(),t(201,"tr")(202,"td")(203,"code"),n(204,"--color-disabled"),e()(),t(205,"td"),n(206,"Cor principal no estado disabled"),e(),t(207,"td")(208,"code"),n(209,"var(--color-neutral-light-30)"),e()()(),t(210,"tr")(211,"td")(212,"code"),n(213,"--background-color-disabled"),e(),n(214,"\xA0"),e(),t(215,"td"),n(216,"Cor de background no estado disabled"),e(),t(217,"td")(218,"code"),n(219,"var(--color-neutral-light-20)"),e()()()()()(),t(220,"div",9)(221,"h4",10),n(222,"Seletor"),e(),t(223,"pre",11),n(224,`<po-select
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="any[]"
    p-placeholder="string"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-select>
`),e()(),t(225,"h4",12),n(226,"Propriedades"),e(),t(227,"table",13)(228,"tr",14)(229,"th",15),n(230,"Nome"),e(),t(231,"th",15),n(232,"Tipo"),e(),t(233,"th",15),n(234,"Padr\xE3o"),e(),t(235,"th",15),n(236,"Descri\xE7\xE3o"),e()(),t(237,"tr",16)(238,"td",17)(239,"div",18)(240,"span",19),n(241," (p-additional-help)"),l(242,"br"),e()()(),t(243,"td",20)(244,"code",21),n(245,"EventEmitter"),e()(),t(246,"td",22),n(247,"-"),e(),t(248,"td",23)(249,"em")(250,"strong"),n(251,"(opcional)"),e()(),t(252,"p"),n(253,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),t(254,"code"),n(255,"p-help"),e(),n(256,"."),e()()(),t(257,"tr",16)(258,"td",17)(259,"div",24)(260,"span",25),n(261," p-additional-help-tooltip"),l(262,"br"),e()()(),t(263,"td",20)(264,"code",26),n(265,"string"),e()(),t(266,"td",22),n(267,"-"),e(),t(268,"td",23)(269,"em")(270,"strong"),n(271,"(opcional)"),e()(),t(272,"p"),n(273,"Exibe um \xEDcone de ajuda adicional ao "),t(274,"code"),n(275,"p-help"),e(),n(276,`, com o texto desta propriedade no tooltip.
Se o evento `),t(277,"code"),n(278,"p-additional-help"),e(),n(279,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),t(280,"strong"),n(281,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),e()(),t(282,"blockquote")(283,"p"),n(284,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),e()()()(),t(285,"tr",16)(286,"td",17)(287,"div",24)(288,"span",25),n(289," p-append-in-body"),l(290,"br"),e()()(),t(291,"td",20)(292,"code",27),n(293,"boolean"),e()(),t(294,"td",22)(295,"p")(296,"code"),n(297,"false"),e()()(),t(298,"td",23)(299,"em")(300,"strong"),n(301,"(opcional)"),e()(),t(302,"p"),n(303,"Define que o tooltip ("),t(304,"code"),n(305,"p-additional-help-tooltip"),e(),n(306," e/ou "),t(307,"code"),n(308,"p-error-limit"),e(),n(309,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),e(),t(310,"blockquote")(311,"p"),n(312,"Quando utilizado com "),t(313,"code"),n(314,"p-additional-help-tooltip"),e(),n(315,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),e()()()(),t(316,"tr",16)(317,"td",17)(318,"div",18)(319,"span",19),n(320," (p-blur)"),l(321,"br"),e()()(),t(322,"td",20)(323,"code",21),n(324,"EventEmitter"),e()(),t(325,"td",22),n(326,"-"),e(),t(327,"td",23)(328,"em")(329,"strong"),n(330,"(opcional)"),e()(),t(331,"p"),n(332,"Evento disparado ao sair do campo."),e()()(),t(333,"tr",16)(334,"td",17)(335,"div",18)(336,"span",19),n(337," (p-change)"),l(338,"br"),e()()(),t(339,"td",20)(340,"code",21),n(341,"EventEmitter"),e()(),t(342,"td",22),n(343,"-"),e(),t(344,"td",23)(345,"em")(346,"strong"),n(347,"(opcional)"),e()(),t(348,"p"),n(349,"Evento disparado ao alterar valor do campo."),e()()(),t(350,"tr",16)(351,"td",17)(352,"div",24)(353,"span",25),n(354," p-disabled"),l(355,"br"),e()()(),t(356,"td",20)(357,"code",27),n(358,"boolean"),e()(),t(359,"td",22)(360,"p")(361,"code"),n(362,"false"),e()()(),t(363,"td",23)(364,"em")(365,"strong"),n(366,"(opcional)"),e()(),t(367,"p"),n(368,"Indica se o campo ser\xE1 desabilitado."),e()()(),t(369,"tr",16)(370,"td",17)(371,"div",24)(372,"span",25),n(373," p-error-limit"),l(374,"br"),e()()(),t(375,"td",20)(376,"code",27),n(377,"boolean"),e()(),t(378,"td",22)(379,"p")(380,"code"),n(381,"false"),e()()(),t(382,"td",23)(383,"em")(384,"strong"),n(385,"(opcional)"),e()(),t(386,"p"),n(387,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),e(),t(388,"blockquote")(389,"p"),n(390,"Caso essa propriedade seja definida como "),t(391,"code"),n(392,"true"),e(),n(393,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),e()()()(),t(394,"tr",16)(395,"td",17)(396,"div",24)(397,"span",25),n(398," p-field-error-message"),l(399,"br"),e()()(),t(400,"td",20)(401,"code",26),n(402,"string"),e()(),t(403,"td",22),n(404,"-"),e(),t(405,"td",23)(406,"em")(407,"strong"),n(408,"(opcional)"),e()(),t(409,"p"),n(410,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),e(),t(411,"blockquote")(412,"p"),n(413,"Necess\xE1rio que a propriedade "),t(414,"code"),n(415,"p-required"),e(),n(416," esteja habilitada."),e()()()(),t(417,"tr",16)(418,"td",17)(419,"div",24)(420,"span",25),n(421," p-field-label"),l(422,"br"),e()()(),t(423,"td",20)(424,"code",26),n(425,"string"),e()(),t(426,"td",22)(427,"p")(428,"code"),n(429,"label"),e()()(),t(430,"td",23)(431,"em")(432,"strong"),n(433,"(opcional)"),e()(),t(434,"p"),n(435,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(436,"code"),n(437,"p-options"),e(),n(438,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),e()()(),t(439,"tr",16)(440,"td",17)(441,"div",24)(442,"span",25),n(443," p-field-value"),l(444,"br"),e()()(),t(445,"td",20)(446,"code",26),n(447,"string"),e()(),t(448,"td",22)(449,"p")(450,"code"),n(451,"value"),e()()(),t(452,"td",23)(453,"em")(454,"strong"),n(455,"(opcional)"),e()(),t(456,"p"),n(457,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(458,"code"),n(459,"p-options"),e(),n(460,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),e()()(),t(461,"tr",16)(462,"td",17)(463,"div",24)(464,"span",25),n(465," p-help"),l(466,"br"),e()()(),t(467,"td",20)(468,"code",26),n(469,"string"),e()(),t(470,"td",22),n(471,"-"),e(),t(472,"td",23)(473,"p"),n(474,"Texto de apoio para o campo."),e()()(),t(475,"tr",16)(476,"td",17)(477,"div",18)(478,"span",19),n(479," (p-keydown)"),l(480,"br"),e()()(),t(481,"td",20)(482,"code",21),n(483,"EventEmitter"),e()(),t(484,"td",22),n(485,"-"),e(),t(486,"td",23)(487,"em")(488,"strong"),n(489,"(opcional)"),e()(),t(490,"p"),n(491,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),t(492,"code"),n(493,"KeyboardEvent"),e(),n(494," com informa\xE7\xF5es sobre a tecla."),e()()(),t(495,"tr",16)(496,"td",17)(497,"div",24)(498,"span",25),n(499," p-label"),l(500,"br"),e()()(),t(501,"td",20)(502,"code",26),n(503,"string"),e()(),t(504,"td",22),n(505,"-"),e(),t(506,"td",23)(507,"p"),n(508,"R\xF3tulo exibido pelo componente."),e()()(),t(509,"tr",16)(510,"td",17)(511,"div",24)(512,"span",25),n(513," name"),l(514,"br"),e()()(),t(515,"td",20)(516,"code",26),n(517,"string"),e()(),t(518,"td",22),n(519,"-"),e(),t(520,"td",23)(521,"p"),n(522,"Nome do componente."),e()()(),t(523,"tr",16)(524,"td",17)(525,"div",18)(526,"span",19),n(527," (ngModelChange)"),l(528,"br"),e()()(),t(529,"td",20)(530,"code",21),n(531,"EventEmitter"),e()(),t(532,"td",22),n(533,"-"),e(),t(534,"td",23)(535,"em")(536,"strong"),n(537,"(opcional)"),e()(),t(538,"p"),n(539,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),e(),t(540,"p"),n(541,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),t(542,"code"),n(543,"strictTemplates"),e(),n(544,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),e(),t(545,"pre")(546,"code"),n(547,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),e()()()(),t(548,"tr",16)(549,"td",17)(550,"div",24)(551,"span",25),n(552," p-optional"),l(553,"br"),e()()(),t(554,"td",20)(555,"code",27),n(556,"boolean"),e()(),t(557,"td",22)(558,"p")(559,"code"),n(560,"false"),e()()(),t(561,"td",23)(562,"em")(563,"strong"),n(564,"(opcional)"),e()(),t(565,"p"),n(566,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e(),t(567,"blockquote")(568,"p"),n(569,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(570,"ul")(571,"li"),n(572,"O campo conter "),t(573,"code"),n(574,"p-required"),e(),n(575,";"),e(),t(576,"li"),n(577,"N\xE3o possuir "),t(578,"code"),n(579,"p-help"),e(),n(580," e/ou "),t(581,"code"),n(582,"p-label"),e(),n(583,"."),e()()()(),t(584,"tr",16)(585,"td",17)(586,"div",24)(587,"span",25),n(588," p-options"),l(589,"br"),e()()(),t(590,"td",20)(591,"code",28),n(592,"any[]"),e()(),t(593,"td",22),n(594,"-"),e(),t(595,"td",23)(596,"p"),n(597,"Nesta propriedade deve ser definido uma cole\xE7\xE3o de objetos que implementam a interface "),t(598,"code"),n(599,"PoSelectOption"),e(),n(600,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),t(601,"code"),n(602,"PoSelectOptionGroup"),e(),n(603,"."),e(),t(604,"p"),n(605,"Caso esta lista estiver vazia, o model ser\xE1 "),t(606,"code"),n(607,"undefined"),e(),n(608,"."),e(),t(609,"blockquote")(610,"p"),n(611,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),e()(),t(612,"pre")(613,"code"),n(614,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),e()(),t(615,"blockquote")(616,"p"),n(617,"Para cole\xE7\xE3o de objetos dentro de grupos distintos ser\xE1 exibido a label e op\xE7\xF5es somente se a propriedade "),t(618,"code"),n(619,"options"),e(),n(620," possua valores. Sendo assim, a estrutura seguiria dessa forma:"),e()(),t(621,"pre")(622,"code"),n(623,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),e()(),t(624,"p"),n(625,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),e()()(),t(626,"tr",16)(627,"td",17)(628,"div",24)(629,"span",25),n(630," p-placeholder"),l(631,"br"),e()()(),t(632,"td",20)(633,"code",26),n(634,"string"),e()(),t(635,"td",22),n(636,"-"),e(),t(637,"td",23)(638,"em")(639,"strong"),n(640,"(opcional)"),e()(),t(641,"p"),n(642,"Mensagem que aparecer\xE1 enquanto nenhuma op\xE7\xE3o estiver selecionada."),e()()(),t(643,"tr",16)(644,"td",17)(645,"div",24)(646,"span",25),n(647," p-readonly"),l(648,"br"),e()()(),t(649,"td",20)(650,"code",27),n(651,"boolean"),e()(),t(652,"td",22)(653,"p")(654,"code"),n(655,"false"),e()()(),t(656,"td",23)(657,"em")(658,"strong"),n(659,"(opcional)"),e()(),t(660,"p"),n(661,"Indica que o campo ser\xE1 somente para leitura."),e()()(),t(662,"tr",16)(663,"td",17)(664,"div",24)(665,"span",25),n(666," p-required"),l(667,"br"),e()()(),t(668,"td",20)(669,"code",27),n(670,"boolean"),e()(),t(671,"td",22)(672,"p")(673,"code"),n(674,"false"),e()()(),t(675,"td",23)(676,"em")(677,"strong"),n(678,"(opcional)"),e()(),t(679,"p"),n(680,"Define que o campo ser\xE1 obrigat\xF3rio."),e()()(),t(681,"tr",16)(682,"td",17)(683,"div",24)(684,"span",25),n(685," p-show-required"),l(686,"br"),e()()(),t(687,"td",20)(688,"code",27),n(689,"boolean"),e()(),t(690,"td",22),n(691,"-"),e(),t(692,"td",23)(693,"p"),n(694,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e(),t(695,"blockquote")(696,"p"),n(697,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(698,"ul")(699,"li"),n(700,"N\xE3o possuir "),t(701,"code"),n(702,"p-help"),e(),n(703," e/ou "),t(704,"code"),n(705,"p-label"),e(),n(706,"."),e()()()(),t(707,"tr",16)(708,"td",17)(709,"div",24)(710,"span",25),n(711," p-size"),l(712,"br"),e()()(),t(713,"td",20)(714,"code",26),n(715,"string"),e()(),t(716,"td",22)(717,"p")(718,"code"),n(719,"medium"),e()()(),t(720,"td",23)(721,"em")(722,"strong"),n(723,"(opcional)"),e()(),t(724,"p"),n(725,"Define o tamanho do componente:"),e(),t(726,"ul")(727,"li")(728,"code"),n(729,"small"),e(),n(730,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(731,"li")(732,"code"),n(733,"medium"),e(),n(734,": altura do input como 44px."),e()(),t(735,"blockquote")(736,"p"),n(737,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(738,"code"),n(739,"medium"),e(),n(740,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(741,"a",29),n(742,"po-theme"),e(),n(743,"."),e()()()()(),t(744,"h3",12),n(745,"M\xE9todos"),e(),t(746,"table",30)(747,"tr",16)(748,"th",31)(749,"div",24)(750,"h4")(751,"span",25),n(752," focus "),e()()()()(),t(753,"tr",23)(754,"td",23)(755,"p"),n(756,"Fun\xE7\xE3o que atribui foco ao componente."),e(),t(757,"p"),n(758,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(759,"pre")(760,"code"),n(761,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),e()()()()(),l(762,"br"),t(763,"table",30)(764,"tr",16)(765,"th",31)(766,"div",24)(767,"h4")(768,"span",25),n(769," showAdditionalHelp "),e()()()()(),t(770,"tr",23)(771,"td",23)(772,"p"),n(773,"M\xE9todo que exibe "),t(774,"code"),n(775,"p-additionalHelpTooltip"),e(),n(776," ou executa a a\xE7\xE3o definida em "),t(777,"code"),n(778,"p-additionalHelp"),e(),n(779,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),t(780,"code"),n(781,"p-keydown"),e(),n(782,"."),e(),t(783,"pre")(784,"code",32),n(785,`<po-select
 #select
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),e()(),t(786,"pre")(787,"code",33),n(788,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),e()()()()(),l(789,"br"),t(790,"h3"),n(791,"Interfaces"),e(),t(792,"h4",34)(793,"code",5),n(794,"PoSelectOptionGroup"),e()(),t(795,"div",2)(796,"p"),n(797,"Interface da cole\xE7\xF5es de itens em grupo, utilizando uma label para o grupo e as op\xE7\xF5es do tipo "),t(798,"code"),n(799,"PoSelectOption"),e(),n(800,"."),e()(),t(801,"h4",12),n(802,"Propriedades"),e(),t(803,"table",13)(804,"tr",14)(805,"th",15),n(806,"Nome"),e(),t(807,"th",15),n(808,"Tipo"),e(),t(809,"th",15),n(810,"Descri\xE7\xE3o"),e()(),t(811,"tr",16)(812,"td",17)(813,"div",24)(814,"span",25),n(815," label"),l(816,"br"),e()()(),t(817,"td",20)(818,"code",26),n(819,"string"),e()(),t(820,"td",23)(821,"p"),n(822,"Label para denominar o nome do grupo."),e()()(),t(823,"tr",16)(824,"td",17)(825,"div",24)(826,"span",25),n(827," options"),l(828,"br"),e()()(),t(829,"td",20)(830,"code",35),n(831,"Array<PoSelectOption>"),e()(),t(832,"td",23)(833,"p"),n(834,"Lista com as op\xE7\xF5es dispon\xEDveis em cada grupo."),e()()()(),t(835,"h4",34)(836,"code",5),n(837,"PoSelectOption"),e()(),t(838,"div",2)(839,"p"),n(840,"Interface da cole\xE7\xF5es de itens que deve ser informado no componente po-select"),e()(),t(841,"h4",12),n(842,"Propriedades"),e(),t(843,"table",13)(844,"tr",14)(845,"th",15),n(846,"Nome"),e(),t(847,"th",15),n(848,"Tipo"),e(),t(849,"th",15),n(850,"Descri\xE7\xE3o"),e()(),t(851,"tr",16)(852,"td",17)(853,"div",24)(854,"span",25),n(855," label"),l(856,"br"),e()()(),t(857,"td",20)(858,"code",26),n(859,"string"),e()(),t(860,"td",23)(861,"p"),n(862,"Label a ser utilizada nos itens da lista."),e()()(),t(863,"tr",16)(864,"td",17)(865,"div",24)(866,"span",25),n(867," value"),l(868,"br"),e()()(),t(869,"td",20)(870,"code",26),n(871,"string "),e(),t(872,"code",36),n(873," number"),e()(),t(874,"td",23)(875,"p"),n(876,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),e()()()()())},dependencies:[x],encapsulation:2})}return a})();var we=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(L(le),L(pe))};static \u0275cmp=v({type:a,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Select",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,i){p&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-select-doc"),e(),t(4,"po-tab",3),E("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-select-basic-view")(6,"sample-po-select-labs-view")(7,"sample-po-select-customer-registration-view")(8,"sample-po-select-companies-view"),e()()()),p&2&&(c("p-actions",i.actions),s(2),c("p-active",i.activeTab==="doc"),s(2),c("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ue,C,y,be,ve,Ce,xe,_e],encapsulation:2})}return a})();var He=[{path:"",component:we}],Pe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=q({type:a});static \u0275inj=I({imports:[Y.forChild(He),Y]})}return a})();var Ct=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=q({type:a});static \u0275inj=I({imports:[Se,Pe]})}return a})();export{Ct as DocPoSelectModule};
