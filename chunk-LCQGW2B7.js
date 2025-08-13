import{o as M,p as Me}from"./chunk-MMZVQUBQ.js";import{Aa as fe,Ab as C,F as k,Ga as ve,I as Z,Ja as ye,Ka as T,Ra as ee,Wa as D,ca as ge,ha as Ee,ja as j,la as $,m as Se,nb as Ce,zb as y}from"./chunk-522XRIZO.js";import{Ac as O,Ba as x,Bc as H,Ec as de,Fa as t,Fc as ce,Ga as e,Ha as l,Jb as Y,Jc as ue,L as le,La as I,M as Q,Ma as u,O as ae,Oc as be,Qc as he,Sc as oe,T as b,U as h,Ub as me,Xa as F,Ya as i,Za as pe,_a as P,a as G,ab as g,bb as E,cb as f,db as re,fb as _,ha as p,ia as q,lb as N,o as ie,oa as S,ob as W,pa as K,ua as ne,uc as R,vb as w,xb as se,xc as A,ya as m,yc as z,zc as X}from"./chunk-WFKG4FNY.js";var xe=(()=>{class o{options=[{value:"poMultiselect1",label:"PO Multiselect 1"},{value:"poMultiselect2",label:"PO Multiselect 2"}];static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-basic"]],standalone:!1,decls:1,vars:1,consts:[["name","multiselect","p-label","PO Multiselect",3,"p-options"]],template:function(a,n){a&1&&l(0,"po-multiselect",0),a&2&&m("p-options",n.options)},dependencies:[T],encapsulation:2})}return o})();var He=o=>({"docs-sample-code-tabs":o}),Pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Multiselect Basic"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.html"),e(),t(13,"pre",7),i(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';

import { PoMultiselectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-basic',
  templateUrl: './sample-po-multiselect-basic.component.html',
  standalone: false
})
export class SamplePoMultiselectBasicComponent {
  options: Array<PoMultiselectOption> = [
    { value: 'poMultiselect1', label: 'PO Multiselect 1' },
    { value: 'poMultiselect2', label: 'PO Multiselect 2' }
  ];
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-basic"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,He,n.hideSampleCodeTabs)))},dependencies:[w,M,y,C,xe],encapsulation:2})}return o})();var _e=(()=>{class o{additionalHelpTooltip;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];propertiesOptions=[{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"hideSearch",label:"Hide Search"},{value:"autoHeight",label:"Auto Height"},{value:"sort",label:"Sort"},{value:"hideSelectAll",label:"Hide Select All"},{value:"errorLimit",label:"Limit Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,G({},this.option)],this.option={label:void 0,value:void 0}}changeEvent(s){this.event=s}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.additionalHelpTooltip="",this.customLiterals=void 0,this.help="",this.filterMode=void 0,this.label=void 0,this.literals="",this.placeholder="",this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage="",this.filterService="",this.fieldLabel="",this.fieldValue="",this.option={label:void 0,value:void 0},this.options=[],this.event="",this.multiselect=[],this.size="medium"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-labs"]],standalone:!1,decls:33,vars:48,consts:[["fOption","ngForm"],["f","ngForm"],[1,"po-row"],["name","PO Multiselect",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-auto-height","p-disabled","p-field-label","p-field-value","p-filter-service","p-filter-mode","p-help","p-hide-search","p-hide-select-all","p-label","p-literals","p-optional","p-options","p-placeholder","p-placeholder-search","p-required","p-field-error-message","p-show-required","p-size","p-sort","p-listbox-control-position","p-error-limit"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholderSearch","p-clean","","p-label","Placeholder Search",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-disabled","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,n){if(a&1){let c=I();t(0,"div",2)(1,"po-multiselect",3),f("ngModelChange",function(r){return b(c),E(n.multiselect,r)||(n.multiselect=r),h(r)}),u("p-change",function(){return b(c),h(n.changeEvent("p-change"))})("p-keydown",function(){return b(c),h(n.changeEvent("p-keydown"))}),e()(),l(2,"hr"),t(3,"div",2),l(4,"po-info",4)(5,"po-info",5),e(),l(6,"hr"),t(7,"form",null,0)(9,"div",2)(10,"po-input",6),f("ngModelChange",function(r){return b(c),E(n.option.label,r)||(n.option.label=r),h(r)}),e(),t(11,"po-input",7),f("ngModelChange",function(r){return b(c),E(n.option.value,r)||(n.option.value=r),h(r)}),e()(),t(12,"div",2)(13,"po-button",8),u("p-click",function(){return b(c),h(n.addOption())}),e()()(),l(14,"hr"),t(15,"form",null,1)(17,"po-input",9),f("ngModelChange",function(r){return b(c),E(n.label,r)||(n.label=r),h(r)}),e(),t(18,"po-input",10),f("ngModelChange",function(r){return b(c),E(n.help,r)||(n.help=r),h(r)}),e(),t(19,"po-input",11),f("ngModelChange",function(r){return b(c),E(n.additionalHelpTooltip,r)||(n.additionalHelpTooltip=r),h(r)}),e(),t(20,"po-input",12),f("ngModelChange",function(r){return b(c),E(n.placeholder,r)||(n.placeholder=r),h(r)}),e(),t(21,"po-input",13),f("ngModelChange",function(r){return b(c),E(n.placeholderSearch,r)||(n.placeholderSearch=r),h(r)}),e(),t(22,"po-input",14),f("ngModelChange",function(r){return b(c),E(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),h(r)}),e(),t(23,"po-input",15),f("ngModelChange",function(r){return b(c),E(n.literals,r)||(n.literals=r),h(r)}),u("p-change",function(){return b(c),h(n.changeLiterals())}),e(),t(24,"po-input",16),f("ngModelChange",function(r){return b(c),E(n.filterService,r)||(n.filterService=r),h(r)}),e(),t(25,"po-input",17),f("ngModelChange",function(r){return b(c),E(n.fieldValue,r)||(n.fieldValue=r),h(r)}),e(),t(26,"po-input",18),f("ngModelChange",function(r){return b(c),E(n.fieldLabel,r)||(n.fieldLabel=r),h(r)}),e(),t(27,"po-checkbox-group",19),f("ngModelChange",function(r){return b(c),E(n.properties,r)||(n.properties=r),h(r)}),e(),t(28,"po-radio-group",20),f("ngModelChange",function(r){return b(c),E(n.filterMode,r)||(n.filterMode=r),h(r)}),e(),t(29,"po-radio-group",21),f("ngModelChange",function(r){return b(c),E(n.size,r)||(n.size=r),h(r)}),e(),t(30,"po-radio-group",22),f("ngModelChange",function(r){return b(c),E(n.listboxPosition,r)||(n.listboxPosition=r),h(r)}),e(),t(31,"div",2)(32,"po-button",23),u("p-click",function(){return b(c),h(n.restore())}),e()()()}if(a&2){let c=F(8);p(),g("ngModel",n.multiselect),m("p-additional-help-tooltip",n.additionalHelpTooltip)("p-auto-height",n.properties.includes("autoHeight"))("p-disabled",n.properties.includes("disabled"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-service",n.filterService)("p-filter-mode",n.filterMode)("p-help",n.help)("p-hide-search",n.properties.includes("hideSearch"))("p-hide-select-all",n.properties.includes("hideSelectAll"))("p-label",n.label)("p-literals",n.customLiterals)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-placeholder-search",n.placeholderSearch)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-sort",n.properties.includes("sort"))("p-listbox-control-position",n.listboxPosition)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit")),p(3),m("p-value",n.multiselect),p(),m("p-value",n.event),p(5),g("ngModel",n.option.label),p(),g("ngModel",n.option.value),p(2),m("p-disabled",c.form.invalid),p(4),g("ngModel",n.label),p(),g("ngModel",n.help),p(),g("ngModel",n.additionalHelpTooltip),p(),g("ngModel",n.placeholder),p(),g("ngModel",n.placeholderSearch),p(),g("ngModel",n.fieldErrorMessage),p(),g("ngModel",n.literals),p(),g("ngModel",n.filterService),p(),g("ngModel",n.fieldValue),p(),g("ngModel",n.fieldLabel),p(),g("ngModel",n.properties),m("p-options",n.propertiesOptions),p(),g("ngModel",n.filterMode),m("p-disabled",n.properties.includes("hideSearch"))("p-options",n.filterModeOptions),p(),g("ngModel",n.size),m("p-options",n.sizeOptions),p(),g("ngModel",n.listboxPosition),m("p-options",n.listboxPositionOptions)}},dependencies:[H,A,z,O,X,k,Ee,j,ve,T,D],encapsulation:2})}return o})();var Je=o=>({"docs-sample-code-tabs":o}),we=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Multiselect Labs"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.html"),e(),t(13,"pre",7),i(14,`<div class="po-row">
  <po-multiselect
    class="po-md-12"
    name="PO Multiselect"
    [(ngModel)]="multiselect"
    [p-additional-help-tooltip]="additionalHelpTooltip"
    [p-auto-height]="properties.includes('autoHeight')"
    [p-disabled]="properties.includes('disabled')"
    [p-field-label]="fieldLabel"
    [p-field-value]="fieldValue"
    [p-filter-service]="filterService"
    [p-filter-mode]="filterMode"
    [p-help]="help"
    [p-hide-search]="properties.includes('hideSearch')"
    [p-hide-select-all]="properties.includes('hideSelectAll')"
    [p-label]="label"
    [p-literals]="customLiterals"
    [p-optional]="properties.includes('optional')"
    [p-options]="options"
    [p-placeholder]="placeholder"
    [p-placeholder-search]="placeholderSearch"
    [p-required]="properties.includes('required')"
    [p-field-error-message]="fieldErrorMessage"
    [p-show-required]="properties.includes('showRequired')"
    [p-size]="size"
    [p-sort]="properties.includes('sort')"
    [p-listbox-control-position]="listboxPosition"
    (p-change)="changeEvent('p-change')"
    (p-keydown)="changeEvent('p-keydown')"
    [p-error-limit]="properties?.includes('errorLimit')"
  >
  </po-multiselect>
</div>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="multiselect"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<hr />

<form #fOption="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-4 po-lg-2" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
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
    name="placeholderSearch"
    [(ngModel)]="placeholderSearch"
    p-clean
    p-label="Placeholder Search"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Filter Service"
  >
  </po-input>

  <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

  <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>

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
    name="filterMode"
    [(ngModel)]="filterMode"
    p-columns="4"
    p-label="Filter mode"
    [p-disabled]="properties.includes('hideSearch')"
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

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoMultiselectLiterals,
  PoMultiselectOption,
  PoRadioGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-labs',
  templateUrl: './sample-po-multiselect-labs.component.html',
  standalone: false
})
export class SamplePoMultiselectLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  customLiterals: PoMultiselectLiterals;
  event: string;
  filterMode: string;
  help: string;
  label: string;
  literals: string;
  multiselect: Array<string>;
  option: PoMultiselectOption;
  options: Array<PoMultiselectOption>;
  placeholder: string;
  placeholderSearch: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  filterService: string;
  fieldLabel: string;
  fieldValue: string;
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

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'hideSearch', label: 'Hide Search' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'sort', label: 'Sort' },
    { value: 'hideSelectAll', label: 'Hide Select All' },
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
    this.options = [...this.options, { ...this.option }];
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

  restore() {
    this.additionalHelpTooltip = '';
    this.customLiterals = undefined;
    this.help = '';
    this.filterMode = undefined;
    this.label = undefined;
    this.literals = '';
    this.placeholder = '';
    this.placeholderSearch = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.filterService = '';
    this.fieldLabel = '';
    this.fieldValue = '';

    this.option = { label: undefined, value: undefined };
    this.options = [];

    this.event = '';
    this.multiselect = [];
    this.size = 'medium';
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-labs"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Je,n.hideSampleCodeTabs)))},dependencies:[w,M,y,C,_e],encapsulation:2})}return o})();var Te=(()=>{class o{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.clean()}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[]}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(", ")}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-vacation"]],standalone:!1,decls:26,vars:20,consts:[["f","ngForm"],["modalEmployeesVacation",""],[1,"po-row"],["name","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","days","p-help","Maximum of days that employs can choose","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","employeesVacations","p-label","Select your employees for collective vacations","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,n){if(a&1){let c=I();t(0,"form",null,0)(2,"h3"),i(3,"Collective vacations"),e(),l(4,"hr"),t(5,"div",2)(6,"po-datepicker",3),f("ngModelChange",function(r){return b(c),E(n.initialPeriod,r)||(n.initialPeriod=r),h(r)}),e(),t(7,"po-datepicker",4),f("ngModelChange",function(r){return b(c),E(n.finalPeriod,r)||(n.finalPeriod=r),h(r)}),e()(),t(8,"div",2)(9,"po-radio-group",5),f("ngModelChange",function(r){return b(c),E(n.days,r)||(n.days=r),h(r)}),e()(),t(10,"div",2)(11,"po-multiselect",6),f("ngModelChange",function(r){return b(c),E(n.employeesVacations,r)||(n.employeesVacations=r),h(r)}),e()(),t(12,"div",2)(13,"po-button",7),u("p-click",function(){b(c);let r=F(16);return n.updateNameEmployeesVacations(),h(r.open())}),e(),t(14,"po-button",8),u("p-click",function(){return b(c),h(n.clean())}),e()()(),t(15,"po-modal",9,1)(17,"div",2),l(18,"po-info",10),N(19,"date"),l(20,"po-info",11),N(21,"date"),l(22,"po-info",12),e(),l(23,"hr"),t(24,"div",2),l(25,"po-info",13),e()()}if(a&2){let c=F(1);p(6),g("ngModel",n.initialPeriod),p(),g("ngModel",n.finalPeriod),m("p-min-date",n.initialPeriod),p(2),g("ngModel",n.days),m("p-options",n.daysOptions),p(2),g("ngModel",n.employeesVacations),m("p-options",n.employees),p(2),m("p-disabled",c.form.invalid),p(5),m("p-value",W(19,12,n.initialPeriod,"longDate","+0000")),p(2),m("p-value",W(21,16,n.finalPeriod,"longDate","+0000")),p(2),m("p-value",n.days),p(3),m("p-value",n.nameEmployeesVacations)}},dependencies:[H,A,z,O,X,k,j,$,T,D,Z,Y],encapsulation:2})}return o})();var Qe=o=>({"docs-sample-code-tabs":o}),Ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-vacation-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Multiselect - Vacation"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html"),e(),t(13,"pre",7),i(14,`<form #f="ngForm">
  <h3>Collective vacations</h3>

  <hr />

  <div class="po-row">
    <po-datepicker class="po-md-6" name="initialPeriod" [(ngModel)]="initialPeriod" p-label="Initial period" p-required>
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      [(ngModel)]="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="initialPeriod"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="days"
      [(ngModel)]="days"
      p-help="Maximum of days that employs can choose"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-12"
      name="employeesVacations"
      [(ngModel)]="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-options]="employees"
      p-required
    >
    </po-multiselect>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="f.form.invalid"
      (p-click)="updateNameEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation',
  templateUrl: './sample-po-multiselect-vacation.component.html',
  standalone: false
})
export class SamplePoMultiselectVacationComponent implements OnInit {
  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.clean();
  }

  clean() {
    this.days = 20;
    this.initialPeriod = undefined;
    this.finalPeriod = undefined;
    this.employeesVacations = [];
  }

  updateNameEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) => this.employeesVacations.includes(<string>employee.value))
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-vacation"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Qe,n.hideSampleCodeTabs)))},dependencies:[w,M,y,C,Te],encapsulation:2})}return o})();var Ae=(()=>{class o{formBuilder;days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"112333",label:"Jane"},{value:"989898",label:"John"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];constructor(s){this.formBuilder=s}ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,R.required],finalPeriod:[null,R.required],days:[null,R.required],employeesVacations:[null,R.required]}),this.clean()}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0})}getRangeFinalPeriod(){return this.formCollectiveVacations.get("initialPeriod").value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get("employeesVacations").value.includes(s.value)).map(s=>s.label).join(", "),this.initialPeriod=this.formCollectiveVacations.get("initialPeriod").value,this.finalPeriod=this.formCollectiveVacations.get("finalPeriod").value,this.days=this.formCollectiveVacations.get("days").value}static \u0275fac=function(a){return new(a||o)(q(ue))};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-vacation-reactive-form"]],standalone:!1,decls:24,vars:20,consts:[["modalEmployeesVacation",""],[3,"formGroup"],[1,"po-row"],["name","initialPeriod","formControlName","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6"],["name","finalPeriod","formControlName","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"p-min-date"],["name","employeesVacations","formControlName","employeesVacations","p-label","Select your employees for collective vacations",1,"po-md-4",3,"p-auto-height","p-options","p-required"],["name","days","formControlName","days","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-8",3,"p-options","p-columns"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,n){if(a&1){let c=I();t(0,"form",1)(1,"h3"),i(2,"Collective vacations"),e(),l(3,"hr"),t(4,"div",2),l(5,"po-datepicker",3)(6,"po-datepicker",4),e(),t(7,"div",2),l(8,"po-multiselect",5)(9,"po-radio-group",6),e(),t(10,"div",2)(11,"po-button",7),u("p-click",function(){b(c);let r=F(14);return n.updateEmployeesVacations(),h(r.open())}),e(),t(12,"po-button",8),u("p-click",function(){return b(c),h(n.clean())}),e()()(),t(13,"po-modal",9,0)(15,"div",2),l(16,"po-info",10),N(17,"date"),l(18,"po-info",11),N(19,"date"),l(20,"po-info",12),e(),l(21,"hr"),t(22,"div",2),l(23,"po-info",13),e()()}a&2&&(m("formGroup",n.formCollectiveVacations),p(6),m("p-min-date",n.getRangeFinalPeriod()),p(2),m("p-auto-height",!0)("p-options",n.employees)("p-required",!0),p(),m("p-options",n.daysOptions)("p-columns",3),p(2),m("p-disabled",n.formCollectiveVacations.invalid),p(5),m("p-value",W(17,12,n.initialPeriod,"longDate","+0000")),p(2),m("p-value",W(19,16,n.finalPeriod,"longDate","+0000")),p(2),m("p-value",n.days),p(3),m("p-value",n.nameEmployeesVacations))},dependencies:[H,A,z,de,ce,k,j,$,T,D,Z,Y],encapsulation:2})}return o})();var Xe=o=>({"docs-sample-code-tabs":o}),Oe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-vacation-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Multiselect - Vacation Reactive Form"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html"),e(),t(13,"pre",7),i(14,`<form [formGroup]="formCollectiveVacations">
  <h3>Collective vacations</h3>

  <hr />

  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="initialPeriod"
      formControlName="initialPeriod"
      p-label="Initial period"
      p-required
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      formControlName="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="getRangeFinalPeriod()"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-4"
      name="employeesVacations"
      formControlName="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-auto-height]="true"
      [p-options]="employees"
      [p-required]="true"
    >
    </po-multiselect>

    <po-radio-group
      class="po-lg-8"
      name="days"
      formControlName="days"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
      [p-columns]="3"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="formCollectiveVacations.invalid"
      (p-click)="updateEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation-reactive-form',
  templateUrl: './sample-po-multiselect-vacation-reactive-form.component.html',
  standalone: false
})
export class SamplePoMultiselectVacationReactiveFormComponent implements OnInit {
  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  formCollectiveVacations: UntypedFormGroup;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '112333', label: 'Jane' },
    { value: '989898', label: 'John' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.formCollectiveVacations = this.formBuilder.group({
      initialPeriod: [null, Validators.required],
      finalPeriod: [null, Validators.required],
      days: [null, Validators.required],
      employeesVacations: [null, Validators.required]
    });

    this.clean();
  }

  clean() {
    this.formCollectiveVacations.patchValue({
      days: 20,
      initialPeriod: undefined,
      finalPeriod: undefined,
      employeesVacations: undefined
    });
  }

  getRangeFinalPeriod() {
    return this.formCollectiveVacations.get('initialPeriod').value;
  }

  updateEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) =>
        this.formCollectiveVacations.get('employeesVacations').value.includes(<string>employee.value)
      )
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
    this.initialPeriod = this.formCollectiveVacations.get('initialPeriod').value;
    this.finalPeriod = this.formCollectiveVacations.get('finalPeriod').value;
    this.days = this.formCollectiveVacations.get('days').value;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-vacation-reactive-form"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Xe,n.hideSampleCodeTabs)))},dependencies:[w,M,y,C,Ae],encapsulation:2})}return o})();function $e(o,U){o&1&&l(0,"po-tag",14),o&2&&m("p-icon",!0)}function et(o,U){o&1&&l(0,"po-tag",15),o&2&&m("p-icon",!0)}function tt(o,U){o&1&&l(0,"po-tag",16),o&2&&m("p-icon",!0)}function it(o,U){if(o&1&&(t(0,"div",0)(1,"div",7)(2,"div",8),i(3),e()(),t(4,"div",9)(5,"div",10),ne(6,$e,1,1,"po-tag",11)(7,et,1,1,"po-tag",12)(8,tt,1,1,"po-tag",13),e()()()),o&2){let s=U.$implicit;p(3),pe(s.label),p(3),m("ngIf",s.admin),p(),m("ngIf",s.access),p(),m("ngIf",!s.admin&&!s.access)}}var Le=(()=>{class o{employee;typeAccess;typeAccessMap={admin:{admin:!0,access:!0},access:{admin:!1,access:!0},noAccess:{admin:!1,access:!1}};options=[{value:"Anna M.",label:"Anna M.",admin:!1,access:!0},{value:"Jhon T.",label:"Jhon T.",admin:!0,access:!0},{value:"Marie J.",label:"Marie J.",admin:!1,access:!1}];employees=[{label:"Anna M.",value:"Anna M."},{label:"Jhon T.",value:"Jhon T."},{label:"Marie J.",value:"Marie J."}];typeAccessValue=[{label:"Admin e acesso padr\xE3o",value:"admin"},{label:"Acesso padr\xE3o",value:"access"},{label:"Sem acesso",value:"noAccess"}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?G({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-template"]],standalone:!1,decls:7,vars:7,consts:[[1,"po-row"],["name","employee","p-label","Employee",1,"po-md-5",3,"ngModelChange","p-options","ngModel"],["name","typeOfAccess","p-label","Type of access",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-md-1","containerButton"],["p-label","Alterar acesso",3,"p-click","p-disabled"],["name","multiselect","p-label","PO Multiselect",1,"po-md-12",3,"p-options","p-hide-select-all"],["p-multiselect-option-template",""],[1,"po-md-2","containerFlex"],[1,"po-font-text-large-bold"],[1,"po-md-10"],[1,"containerFlexTag"],["p-value","Admin","p-type","success",3,"p-icon",4,"ngIf"],["p-value","Normal","p-type","info",3,"p-icon",4,"ngIf"],["p-value","Sem acesso","p-type","danger",3,"p-icon",4,"ngIf"],["p-value","Admin","p-type","success",3,"p-icon"],["p-value","Normal","p-type","info",3,"p-icon"],["p-value","Sem acesso","p-type","danger",3,"p-icon"]],template:function(a,n){a&1&&(t(0,"div",0)(1,"po-select",1),f("ngModelChange",function(d){return E(n.employee,d)||(n.employee=d),d}),e(),t(2,"po-select",2),f("ngModelChange",function(d){return E(n.typeAccess,d)||(n.typeAccess=d),d}),e(),t(3,"div",3)(4,"po-button",4),u("p-click",function(){return n.changeAccess()}),e()(),t(5,"po-multiselect",5),ne(6,it,9,4,"ng-template",6),e()()),a&2&&(p(),m("p-options",n.employees),g("ngModel",n.employee),p(),m("p-options",n.typeAccessValue),g("ngModel",n.typeAccess),p(2),m("p-disabled",!n.employee||!n.typeAccess),p(),m("p-options",n.options)("p-hide-select-all",!0))},dependencies:[se,A,O,k,ye,T,ee,Se],styles:[".containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}"]})}return o})();var ot=o=>({"docs-sample-code-tabs":o}),ke=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-template-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Multiselect - Template"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-multiselect-template/sample-po-multiselect-template.component.html"),e(),t(13,"pre",7),i(14,`<div class="po-row">
  <po-select class="po-md-5" name="employee" p-label="Employee" [p-options]="employees" [(ngModel)]="employee">
  </po-select>

  <po-select
    class="po-md-6"
    name="typeOfAccess"
    p-label="Type of access"
    [p-options]="typeAccessValue"
    [(ngModel)]="typeAccess"
  >
  </po-select>

  <div class="po-md-1 containerButton">
    <po-button p-label="Alterar acesso" [p-disabled]="!employee || !typeAccess" (p-click)="changeAccess()"> </po-button>
  </div>

  <po-multiselect
    class="po-md-12"
    name="multiselect"
    p-label="PO Multiselect"
    [p-options]="options"
    [p-hide-select-all]="true"
  >
    <ng-template p-multiselect-option-template let-option>
      <div class="po-row">
        <div class="po-md-2 containerFlex">
          <div class="po-font-text-large-bold">{ { option.label }}</div>
        </div>

        <div class="po-md-10">
          <div class="containerFlexTag">
            <po-tag *ngIf="option.admin" p-value="Admin" p-type="success" [p-icon]="true"> </po-tag>
            <po-tag *ngIf="option.access" p-value="Normal" p-type="info" [p-icon]="true"> </po-tag>
            <po-tag *ngIf="!option.admin && !option.access" p-value="Sem acesso" p-type="danger" [p-icon]="true">
            </po-tag>
          </div>
        </div>
      </div>
    </ng-template>
  </po-multiselect>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-multiselect-template/sample-po-multiselect-template.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';
import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-template',
  templateUrl: './sample-po-multiselect-template.component.html',
  styles: [
    \`
      .containerFlex {
        display: flex;
        align-items: center;
      }

      .containerFlexTag {
        display: flex;
        gap: 2px;
        flex-direction: column;
      }

      .containerButton {
        display: flex;
        align-items: flex-end;
        padding: 8px;
      }
    \`
  ],
  standalone: false
})
export class SamplePoMultiselectTemplateComponent {
  employee;
  typeAccess;
  typeAccessMap = {
    admin: { admin: true, access: true },
    access: { admin: false, access: true },
    noAccess: { admin: false, access: false }
  };

  options = [
    { value: 'Anna M.', label: 'Anna M.', admin: false, access: true },
    { value: 'Jhon T.', label: 'Jhon T.', admin: true, access: true },
    { value: 'Marie J.', label: 'Marie J.', admin: false, access: false }
  ];

  readonly employees: Array<PoSelectOption> = [
    { label: 'Anna M.', value: 'Anna M.' },
    { label: 'Jhon T.', value: 'Jhon T.' },
    { label: 'Marie J.', value: 'Marie J.' }
  ];

  readonly typeAccessValue: Array<PoSelectOption> = [
    { label: 'Admin e acesso padr\xE3o', value: 'admin' },
    { label: 'Acesso padr\xE3o', value: 'access' },
    { label: 'Sem acesso', value: 'noAccess' }
  ];

  changeAccess() {
    const newOptions = [...this.options].map(opt => {
      if (opt.value === this.employee) {
        return {
          value: opt.value,
          label: opt.label,
          ...this.typeAccessMap[this.typeAccess]
        };
      }
      return opt;
    });

    this.options = newOptions;
    this.employee = undefined;
    this.typeAccess = undefined;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-template"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,ot,n.hideSampleCodeTabs)))},dependencies:[w,M,y,C,Le],encapsulation:2})}return o})();var te=(()=>{class o{http;constructor(s){this.http=s}getFilteredData({value:s}){let a={filter:s};return this.http.get("https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10",{params:a}).pipe(ie(n=>n.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(ie(a=>a.items))}static \u0275fac=function(a){return new(a||o)(ae(me))};static \u0275prov=le({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var De=(()=>{class o{samplePoMultiselectHeroesService;debounce=500;filterService;heroes;multiselect=["1495831666871","1405833068599"];columns=[{property:"value",label:"id"},{property:"label",label:"Name",type:"link",action:s=>{this.openLink(s)}}];constructor(s){this.samplePoMultiselectHeroesService=s,this.filterService=s}changeOptions(s){this.heroes=[...s]}openLink(s){window.open(`http://google.com/search?q=${s}`,"_blank")}static \u0275fac=function(a){return new(a||o)(q(te))};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-heroes"]],standalone:!1,features:[re([te])],decls:4,vars:9,consts:[[1,"po-row"],["name","multiselect","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-filter-service","p-debounce-time"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-hide-table-search"]],template:function(a,n){a&1&&(t(0,"div",0)(1,"po-multiselect",1),f("ngModelChange",function(d){return E(n.multiselect,d)||(n.multiselect=d),d}),u("p-change",function(d){return n.changeOptions(d)}),e(),t(2,"po-container",2),l(3,"po-table",3),e()()),a&2&&(p(),g("ngModel",n.multiselect),m("p-filter-service",n.filterService)("p-debounce-time",n.debounce),p(2),m("p-columns",n.columns)("p-items",n.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-hide-table-search",!1))},dependencies:[A,O,ge,T,fe],encapsulation:2})}return o})();var rt=o=>({"docs-sample-code-tabs":o}),qe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-heroes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Multiselect - Heroes - using API"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html"),e(),t(13,"pre",7),i(14,`<div class="po-row">
  <po-multiselect
    class="po-md-6"
    name="multiselect"
    [(ngModel)]="multiselect"
    p-label="Search a Hero"
    [p-filter-service]="filterService"
    [p-debounce-time]="debounce"
    (p-change)="changeOptions($event)"
  >
  </po-multiselect>

  <po-container class="po-md-6 po-mt-4">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </po-container>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';
import { PoTableColumn, PoMultiselectFilter } from '@po-ui/ng-components';

import { SamplePoMultiselectHeroesService } from './sample-po-multiselect-heroes.service';

@Component({
  selector: 'sample-po-multiselect-heroes',
  templateUrl: './sample-po-multiselect-heroes.component.html',
  providers: [SamplePoMultiselectHeroesService],
  standalone: false
})
export class SamplePoMultiselectHeroesComponent {
  debounce = 500;
  filterService: PoMultiselectFilter;
  heroes: Array<any>;
  multiselect: Array<string> = ['1495831666871', '1405833068599'];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name',
      type: 'link',
      action: value => {
        this.openLink(value);
      }
    }
  ];

  constructor(public samplePoMultiselectHeroesService: SamplePoMultiselectHeroesService) {
    this.filterService = samplePoMultiselectHeroesService;
  }

  changeOptions(event): void {
    this.heroes = [...event];
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),e(),t(21,"label",6),i(22,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts"),e(),t(23,"pre",9),i(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMultiselectFilter, PoMultiselectOption } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoMultiselectHeroesService implements PoMultiselectFilter {
  constructor(private http: HttpClient) {}

  getFilteredData({ value }): Observable<Array<PoMultiselectOption>> {
    const params = { filter: value };

    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10\`, { params })
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }

  getObjectsByValues(value: Array<string | number>): Observable<Array<PoMultiselectOption>> {
    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes/?value=\${value.toString()}\`)
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }
}
`),e()()()()(),t(25,"div",10),l(26,"sample-po-multiselect-heroes"),e(),l(27,"hr")),a&2&&(p(5),x("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,rt,n.hideSampleCodeTabs)))},dependencies:[w,M,y,C,De],encapsulation:2})}return o})();var Fe=(()=>{class o{company;fieldLabel="razaoSocial";fieldValue="cnpj";options=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];optionsSelect=[{label:"codigo",value:"codigo"},{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"label",value:"label"},{label:"cnpj",value:"cnpj"},{label:"value",value:"value"},{label:"id",value:"id"},{label:"email",value:"email"},{label:"data",value:"data"},{label:"origem",value:"origem"}];onChange(s){this.company=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-any-array"]],standalone:!1,decls:9,vars:9,consts:[[1,"po-row"],[1,"po-md-6"],["name","label","p-label","Select Field Label",3,"ngModelChange","p-change","p-options","ngModel"],["name","label","p-label","Select Field Value",3,"ngModelChange","p-change","p-options","ngModel"],["name","multiselect","p-label","Select your Company","p-listbox-control-position","top",1,"po-md-12",3,"ngModelChange","p-options","p-field-value","p-field-label","ngModel"],["p-label","Model",1,"po-md-12",3,"p-value"]],template:function(a,n){a&1&&(t(0,"div",0)(1,"div",1)(2,"po-select",2),f("ngModelChange",function(d){return E(n.fieldLabel,d)||(n.fieldLabel=d),d}),u("p-change",function(d){return n.onChange(d)}),e(),t(3,"po-select",3),f("ngModelChange",function(d){return E(n.fieldValue,d)||(n.fieldValue=d),d}),u("p-change",function(d){return n.onChange(d)}),e()(),t(4,"div",1)(5,"div",0)(6,"po-multiselect",4),f("ngModelChange",function(d){return E(n.company,d)||(n.company=d),d}),e()(),t(7,"div",0),l(8,"po-info",5),e()()()),a&2&&(p(2),m("p-options",n.optionsSelect),g("ngModel",n.fieldLabel),p(),m("p-options",n.optionsSelect),g("ngModel",n.fieldValue),p(3),m("p-options",n.options)("p-field-value",n.fieldValue)("p-field-label",n.fieldLabel),g("ngModel",n.company),p(2),m("p-value",n.company))},dependencies:[A,O,T,ee,D],encapsulation:2})}return o})();var dt=o=>({"docs-sample-code-tabs":o}),Be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-any-array-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Multiselect - Array Any"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html"),e(),t(13,"pre",7),i(14,`<div class="po-row">
  <div class="po-md-6">
    <po-select
      name="label"
      p-label="Select Field Label"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldLabel"
      (p-change)="onChange($event)"
    >
    </po-select>
    <po-select
      name="label"
      p-label="Select Field Value"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldValue"
      (p-change)="onChange($event)"
    >
    </po-select>
  </div>
  <div class="po-md-6">
    <div class="po-row">
      <po-multiselect
        class="po-md-12"
        name="multiselect"
        p-label="Select your Company"
        p-listbox-control-position="top"
        [p-options]="options"
        [p-field-value]="fieldValue"
        [p-field-label]="fieldLabel"
        [(ngModel)]="company"
      >
      </po-multiselect>
    </div>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Model" [p-value]="company"> </po-info>
    </div>
  </div>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-any-array',
  templateUrl: './sample-po-multiselect-any-array.component.html',
  standalone: false
})
export class SamplePoMultiselectAnyArrayComponent {
  company;
  fieldLabel = 'razaoSocial';
  fieldValue = 'cnpj';

  public readonly options: Array<any> = [
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

  public readonly optionsSelect: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'nomeFantasia', value: 'nomeFantasia' },
    { label: 'razaoSocial', value: 'razaoSocial' },
    { label: 'label', value: 'label' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'value', value: 'value' },
    { label: 'id', value: 'id' },
    { label: 'email', value: 'email' },
    { label: 'data', value: 'data' },
    { label: 'origem', value: 'origem' }
  ];

  onChange(event) {
    this.company = undefined;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-any-array"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,dt,n.hideSampleCodeTabs)))},dependencies:[w,M,y,C,Fe],encapsulation:2})}return o})();var Ie=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-doc"]],standalone:!1,decls:1322,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption"],["pan","",1,"docs-api-property-type","any>"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","property:","string,","value:","string","}"],["pan","",1,"docs-api-property-type","Array<string"],["pan","",1,"docs-api-property-type","number>"]],template:function(a,n){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),i(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),t(7,"blockquote")(8,"p"),i(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),i(11,"FormsModule"),e(),i(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),i(14,"ReactiveFormsModule"),e(),i(15,", ambos nativos do Angular."),e()()(),t(16,"h3",3),i(17,"Componente"),e(),t(18,"h4",4)(19,"code",5),i(20,"PoMultiselectComponent"),e()(),t(21,"div",2)(22,"p"),i(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),e(),t(24,"p"),i(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),e(),t(26,"p"),i(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),e(),t(28,"p"),i(29,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),t(30,"code"),i(31,"p-filter-service"),e(),i(32,"."),e(),t(33,"h4"),i(34,"Boas pr\xE1ticas"),e(),t(35,"ul")(36,"li"),i(37,"Caso a lista apresente menos de 5 itens, considere utilizar outro componente;"),e(),t(38,"li"),i(39,"N\xE3o utilize o multiselect caso o usu\xE1rio possa selecionar apenas uma op\xE7\xE3o. Para esse caso, opte por utilizar po-radio ou po-select;"),e()(),t(40,"h4"),i(41,"Acessibilidade tratada no componente"),e(),t(42,"p"),i(43,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),e(),t(44,"ul")(45,"li"),i(46,"Quando em foco, o multiselect abre o listbox usando as teclas de Espa\xE7o ou Enter do teclado."),e(),t(47,"li"),i(48,"Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox."),e(),t(49,"li"),i(50,"Utilize a tecla Esc do teclado para fechar o listbox."),e(),t(51,"li"),i(52,"Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles."),e(),t(53,"li"),i(54,"Quando em foco e havendo um item ou mais j\xE1 selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox."),e()(),t(55,"h4"),i(56,"Tokens customiz\xE1veis"),e(),t(57,"p"),i(58,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(59,"blockquote")(60,"p"),i(61,"Para maiores informa\xE7\xF5es, acesse o guia "),t(62,"a",6),i(63,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),i(64,"."),e()(),t(65,"table")(66,"thead")(67,"tr")(68,"th"),i(69,"Propriedade"),e(),t(70,"th"),i(71,"Descri\xE7\xE3o"),e(),t(72,"th"),i(73,"Valor Padr\xE3o"),e()()(),t(74,"tbody")(75,"tr")(76,"td")(77,"strong"),i(78,"Default Values"),e()(),l(79,"td")(80,"td"),e(),t(81,"tr")(82,"td")(83,"code"),i(84,"--font-family"),e()(),t(85,"td"),i(86,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(87,"td")(88,"code"),i(89,"var(--font-family-theme)"),e()()(),t(90,"tr")(91,"td")(92,"code"),i(93,"--font-size"),e()(),t(94,"td"),i(95,"Tamanho da fonte"),e(),t(96,"td")(97,"code"),i(98,"var(--font-size-default)"),e()()(),t(99,"tr")(100,"td")(101,"code"),i(102,"--text-color-placeholder"),e(),i(103," \xA0"),e(),t(104,"td"),i(105,"Cor do texto do placeholder"),e(),t(106,"td")(107,"code"),i(108,"var(--color-action-disabled)"),e()()(),t(109,"tr")(110,"td")(111,"code"),i(112,"--color"),e()(),t(113,"td"),i(114,"Cor principal do multiselect"),e(),t(115,"td")(116,"code"),i(117,"var(--color-neutral-dark-70)"),e()()(),t(118,"tr")(119,"td")(120,"code"),i(121,"--background"),e()(),t(122,"td"),i(123,"Cor de background"),e(),t(124,"td")(125,"code"),i(126,"var(--color-neutral-light-05)"),e()()(),t(127,"tr")(128,"td")(129,"strong"),i(130,"Hover"),e()(),l(131,"td")(132,"td"),e(),t(133,"tr")(134,"td")(135,"code"),i(136,"--color-hover"),e()(),t(137,"td"),i(138,"Cor principal no estado hover"),e(),t(139,"td")(140,"code"),i(141,"var(--color-action-hover)"),e()()(),t(142,"tr")(143,"td")(144,"code"),i(145,"--background-hover"),e()(),t(146,"td"),i(147,"Cor de background no estado hover"),e(),t(148,"td")(149,"code"),i(150,"var(--color-brand-01-lighter)"),e()()(),t(151,"tr")(152,"td")(153,"strong"),i(154,"Focused"),e()(),l(155,"td")(156,"td"),e(),t(157,"tr")(158,"td")(159,"code"),i(160,"--color-focused"),e()(),t(161,"td"),i(162,"Cor principal no estado de focus"),e(),t(163,"td")(164,"code"),i(165,"var(--color-action-default)"),e()()(),t(166,"tr")(167,"td")(168,"code"),i(169,"--outline-color-focused"),e(),i(170," \xA0"),e(),t(171,"td"),i(172,"Cor do outline do estado de focus"),e(),t(173,"td")(174,"code"),i(175,"var(--color-action-focus)"),e()()(),t(176,"tr")(177,"td")(178,"strong"),i(179,"Disabled"),e()(),l(180,"td")(181,"td"),e(),t(182,"tr")(183,"td")(184,"code"),i(185,"--color-disabled"),e()(),t(186,"td"),i(187,"Cor principal no estado disabled"),e(),t(188,"td")(189,"code"),i(190,"var(--color-action-disabled)"),e()()(),t(191,"tr")(192,"td")(193,"code"),i(194,"--background-disabled"),e(),i(195," \xA0"),e(),t(196,"td"),i(197,"Cor de background no estado disabled \xA0"),e(),t(198,"td")(199,"code"),i(200,"var(--color-neutral-light-20)"),e()()(),t(201,"tr")(202,"td")(203,"strong"),i(204,"Error"),e()(),l(205,"td")(206,"td"),e(),t(207,"tr")(208,"td")(209,"code"),i(210,"--color-error"),e()(),t(211,"td"),i(212,"Cor principal no estado error"),e(),t(213,"td")(214,"code"),i(215,"var(--color-feedback-negative-base)"),e()()()()()(),t(216,"div",7)(217,"h4",8),i(218,"Seletor"),e(),t(219,"pre",9),i(220,`<po-multiselect
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-debounce-time="number"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-mode="PoMultiselectFilterMode"
    p-filter-service="string | PoMultiselectFilter"
    p-help="string"
    p-hide-search="boolean"
    p-hide-select-all="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoMultiselectLiterals"
    name="string"
    p-optional="boolean"
    p-options="Array<PoMultiselectOption | any>"
    p-placeholder="string"
    p-placeholder-search="string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-multiselect>
`),e()(),t(221,"h4",10),i(222,"Propriedades"),e(),t(223,"table",11)(224,"tr",12)(225,"th",13),i(226,"Nome"),e(),t(227,"th",13),i(228,"Tipo"),e(),t(229,"th",13),i(230,"Padr\xE3o"),e(),t(231,"th",13),i(232,"Descri\xE7\xE3o"),e()(),t(233,"tr",14)(234,"td",15)(235,"div",16)(236,"span",17),i(237," (p-additional-help)"),l(238,"br"),e()()(),t(239,"td",18)(240,"code",19),i(241,"EventEmitter"),e()(),t(242,"td",20),i(243,"-"),e(),t(244,"td",21)(245,"em")(246,"strong"),i(247,"(opcional)"),e()(),t(248,"p"),i(249,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),t(250,"code"),i(251,"p-help"),e(),i(252,"."),e()()(),t(253,"tr",14)(254,"td",15)(255,"div",22)(256,"span",23),i(257," p-additional-help-tooltip"),l(258,"br"),e()()(),t(259,"td",18)(260,"code",24),i(261,"string"),e()(),t(262,"td",20),i(263,"-"),e(),t(264,"td",21)(265,"em")(266,"strong"),i(267,"(opcional)"),e()(),t(268,"p"),i(269,"Exibe um \xEDcone de ajuda adicional ao "),t(270,"code"),i(271,"p-help"),e(),i(272,`, com o texto desta propriedade no tooltip.
Se o evento `),t(273,"code"),i(274,"p-additional-help"),e(),i(275,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),t(276,"strong"),i(277,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),e()(),t(278,"blockquote")(279,"p"),i(280,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),e()()()(),t(281,"tr",14)(282,"td",15)(283,"div",22)(284,"span",23),i(285," p-append-in-body"),l(286,"br"),e()()(),t(287,"td",18)(288,"code",25),i(289,"boolean"),e()(),t(290,"td",20)(291,"p")(292,"code"),i(293,"false"),e()()(),t(294,"td",21)(295,"em")(296,"strong"),i(297,"(opcional)"),e()(),t(298,"p"),i(299,"Define que o "),t(300,"code"),i(301,"listbox"),e(),i(302," e/ou tooltip ("),t(303,"code"),i(304,"p-additional-help-tooltip"),e(),i(305," e/ou "),t(306,"code"),i(307,"p-error-limit"),e(),i(308,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),e(),t(309,"blockquote")(310,"p"),i(311,"Quando utilizado com "),t(312,"code"),i(313,"p-additional-help-tooltip"),e(),i(314,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),e()()()(),t(315,"tr",14)(316,"td",15)(317,"div",22)(318,"span",23),i(319," p-auto-focus"),l(320,"br"),e()()(),t(321,"td",18)(322,"code",25),i(323,"boolean"),e()(),t(324,"td",20)(325,"p")(326,"code"),i(327,"false"),e()()(),t(328,"td",21)(329,"em")(330,"strong"),i(331,"(opcional)"),e()(),t(332,"p"),i(333,"Aplica foco no elemento ao ser iniciado."),e(),t(334,"blockquote")(335,"p"),i(336,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),e()()()(),t(337,"tr",14)(338,"td",15)(339,"div",22)(340,"span",23),i(341," p-auto-height"),l(342,"br"),e()()(),t(343,"td",18)(344,"code",25),i(345,"boolean"),e()(),t(346,"td",20)(347,"p")(348,"code"),i(349,"false"),e()()(),t(350,"td",21)(351,"em")(352,"strong"),i(353,"(opcional)"),e()(),t(354,"p"),i(355,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),e(),t(356,"blockquote")(357,"p"),i(358,"O valor padr\xE3o ser\xE1 "),t(359,"code"),i(360,"true"),e(),i(361," quando houver servi\xE7o ("),t(362,"code"),i(363,"p-filter-service"),e(),i(364,")."),e()()()(),t(365,"tr",14)(366,"td",15)(367,"div",16)(368,"span",17),i(369," (p-blur)"),l(370,"br"),e()()(),t(371,"td",18)(372,"code",19),i(373,"EventEmitter"),e()(),t(374,"td",20),i(375,"-"),e(),t(376,"td",21)(377,"em")(378,"strong"),i(379,"(opcional)"),e()(),t(380,"p"),i(381,"Evento disparado ao sair do campo."),e()()(),t(382,"tr",14)(383,"td",15)(384,"div",16)(385,"span",17),i(386," (p-change)"),l(387,"br"),e()()(),t(388,"td",18)(389,"code",19),i(390,"EventEmitter"),e()(),t(391,"td",20),i(392,"-"),e(),t(393,"td",21)(394,"em")(395,"strong"),i(396,"(opcional)"),e()(),t(397,"p"),i(398,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel."),e()()(),t(399,"tr",14)(400,"td",15)(401,"div",22)(402,"span",23),i(403," p-debounce-time"),l(404,"br"),e()()(),t(405,"td",18)(406,"code",26),i(407,"number"),e()(),t(408,"td",20)(409,"p")(410,"code"),i(411,"400"),e()()(),t(412,"td",21)(413,"em")(414,"strong"),i(415,"(opcional)"),e()(),t(416,"p"),i(417,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla."),e(),t(418,"blockquote")(419,"p"),i(420,"Ser\xE1 utilizada apenas quando houver servi\xE7o ("),t(421,"code"),i(422,"p-filter-service"),e(),i(423,") e somente ser\xE1 aceito valor maior do que "),t(424,"em"),i(425,"zero"),e(),i(426,"."),e()()()(),t(427,"tr",14)(428,"td",15)(429,"div",22)(430,"span",23),i(431," p-disabled"),l(432,"br"),e()()(),t(433,"td",18)(434,"code",25),i(435,"boolean"),e()(),t(436,"td",20)(437,"p")(438,"code"),i(439,"false"),e()()(),t(440,"td",21)(441,"em")(442,"strong"),i(443,"(opcional)"),e()(),t(444,"p"),i(445,"Indica que o campo ser\xE1 desabilitado."),e()()(),t(446,"tr",14)(447,"td",15)(448,"div",22)(449,"span",23),i(450," p-error-limit"),l(451,"br"),e()()(),t(452,"td",18)(453,"code",25),i(454,"boolean"),e()(),t(455,"td",20)(456,"p")(457,"code"),i(458,"false"),e()()(),t(459,"td",21)(460,"em")(461,"strong"),i(462,"(opcional)"),e()(),t(463,"p"),i(464,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),e(),t(465,"blockquote")(466,"p"),i(467,"Caso essa propriedade seja definida como "),t(468,"code"),i(469,"true"),e(),i(470,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),e()()()(),t(471,"tr",14)(472,"td",15)(473,"div",22)(474,"span",23),i(475," p-field-error-message"),l(476,"br"),e()()(),t(477,"td",18)(478,"code",24),i(479,"string"),e()(),t(480,"td",20),i(481,"-"),e(),t(482,"td",21)(483,"em")(484,"strong"),i(485,"(opcional)"),e()(),t(486,"p"),i(487,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),e(),t(488,"blockquote")(489,"p"),i(490,"Necess\xE1rio que a propriedade "),t(491,"code"),i(492,"p-required"),e(),i(493," esteja habilitada."),e()()()(),t(494,"tr",14)(495,"td",15)(496,"div",22)(497,"span",23),i(498," p-field-label"),l(499,"br"),e()()(),t(500,"td",18)(501,"code",24),i(502,"string"),e()(),t(503,"td",20)(504,"p")(505,"code"),i(506,"label"),e()()(),t(507,"td",21)(508,"em")(509,"strong"),i(510,"(opcional)"),e()(),t(511,"p"),i(512,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(513,"code"),i(514,"p-options"),e(),i(515,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),e(),t(516,"p"),i(517,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),t(518,"code"),i(519,"PoMultiSelectOption"),e(),i(520,"."),e()()(),t(521,"tr",14)(522,"td",15)(523,"div",22)(524,"span",23),i(525," p-field-value"),l(526,"br"),e()()(),t(527,"td",18)(528,"code",24),i(529,"string"),e()(),t(530,"td",20)(531,"p")(532,"code"),i(533,"value"),e()()(),t(534,"td",21)(535,"em")(536,"strong"),i(537,"(opcional)"),e()(),t(538,"p"),i(539,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(540,"code"),i(541,"p-options"),e(),i(542,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),e(),t(543,"p"),i(544,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),t(545,"code"),i(546,"PoMultiSelectOption"),e(),i(547,"."),e()()(),t(548,"tr",14)(549,"td",15)(550,"div",22)(551,"span",23),i(552," p-filter-mode"),l(553,"br"),e()()(),t(554,"td",18)(555,"code",27),i(556,"PoMultiselectFilterMode"),e()(),t(557,"td",20)(558,"p")(559,"code"),i(560,"startsWith"),e()()(),t(561,"td",21)(562,"em")(563,"strong"),i(564,"(opcional)"),e()(),t(565,"p"),i(566,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),e()()(),t(567,"tr",14)(568,"td",15)(569,"div",22)(570,"span",23),i(571," p-filter-service"),l(572,"br"),e()()(),t(573,"td",18)(574,"code",24),i(575,"string "),e(),t(576,"code",28),i(577," PoMultiselectFilter"),e()(),t(578,"td",20),i(579,"-"),e(),t(580,"td",21)(581,"em")(582,"strong"),i(583,"(opcional)"),e()(),t(584,"p"),i(585,"Nesta propriedade pode ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de itens no componente."),e(),t(586,"p"),i(587,"Tamb\xE9m existe a possibilidade de informar um servi\xE7o implementando a interface "),t(588,"code"),i(589,"PoMultiselectFilter"),e(),i(590,"."),e(),t(591,"p"),i(592,"Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o "),t(593,"a",29),i(594,"API PO UI"),e(),i(595," e utilizar as propriedades "),t(596,"code"),i(597,"p-field-label"),e(),i(598," e "),t(599,"code"),i(600,"p-field-value"),e(),i(601," para a constru\xE7\xE3o da lista de itens."),e(),t(602,"p"),i(603,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),e(),t(604,"pre")(605,"code"),i(606,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),e()(),t(607,"p"),i(608,"E caso iniciar o campo com valor, os itens ser\xE3o buscados da seguinte forma:"),e(),t(609,"pre")(610,"code"),i(611,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),e()()()(),t(612,"tr",14)(613,"td",15)(614,"div",22)(615,"span",23),i(616," p-help"),l(617,"br"),e()()(),t(618,"td",18)(619,"code",24),i(620,"string"),e()(),t(621,"td",20),i(622,"-"),e(),t(623,"td",21)(624,"em")(625,"strong"),i(626,"(opcional)"),e()(),t(627,"p"),i(628,"Texto de apoio para o campo."),e()()(),t(629,"tr",14)(630,"td",15)(631,"div",22)(632,"span",23),i(633," p-hide-search"),l(634,"br"),e()()(),t(635,"td",18)(636,"code",25),i(637,"boolean"),e()(),t(638,"td",20)(639,"p")(640,"code"),i(641,"false"),e()()(),t(642,"td",21)(643,"em")(644,"strong"),i(645,"(opcional)"),e()(),t(646,"p"),i(647,"Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect."),e()()(),t(648,"tr",14)(649,"td",15)(650,"div",22)(651,"span",23),i(652," p-hide-select-all"),l(653,"br"),e()()(),t(654,"td",18)(655,"code",25),i(656,"boolean"),e()(),t(657,"td",20)(658,"p")(659,"code"),i(660,"false"),e()()(),t(661,"td",21)(662,"em")(663,"strong"),i(664,"(opcional)"),e()(),t(665,"p"),i(666,'Indica se o campo "Selecionar todos" ser\xE1 escondido.'),e()()(),t(667,"tr",14)(668,"td",15)(669,"div",16)(670,"span",17),i(671," (p-keydown)"),l(672,"br"),e()()(),t(673,"td",18)(674,"code",19),i(675,"EventEmitter"),e()(),t(676,"td",20),i(677,"-"),e(),t(678,"td",21)(679,"em")(680,"strong"),i(681,"(opcional)"),e()(),t(682,"p"),i(683,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),t(684,"code"),i(685,"KeyboardEvent"),e(),i(686," com informa\xE7\xF5es sobre a tecla."),e()()(),t(687,"tr",14)(688,"td",15)(689,"div",22)(690,"span",23),i(691," p-label"),l(692,"br"),e()()(),t(693,"td",18)(694,"code",24),i(695,"string"),e()(),t(696,"td",20),i(697,"-"),e(),t(698,"td",21)(699,"em")(700,"strong"),i(701,"(opcional)"),e()(),t(702,"p"),i(703,"Label no componente."),e()()(),t(704,"tr",14)(705,"td",15)(706,"div",22)(707,"span",23),i(708," p-listbox-control-position"),l(709,"br"),e()()(),t(710,"td",18)(711,"code",30),i(712,"'top' "),e(),t(713,"code",31),i(714," 'bottom'"),e()(),t(715,"td",20)(716,"p")(717,"code"),i(718,"bottom"),e()()(),t(719,"td",21)(720,"em")(721,"strong"),i(722,"(opcional)"),e()(),t(723,"p"),i(724,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),t(725,"code"),i(726,"listbox"),e(),i(727," em rela\xE7\xE3o ao campo ("),t(728,"code"),i(729,"top"),e(),i(730," ou "),t(731,"code"),i(732,"bottom"),e(),i(733,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),e()()(),t(734,"tr",14)(735,"td",15)(736,"div",22)(737,"span",23),i(738," p-literals"),l(739,"br"),e()()(),t(740,"td",18)(741,"code",32),i(742,"PoMultiselectLiterals"),e()(),t(743,"td",20),i(744,"-"),e(),t(745,"td",21)(746,"em")(747,"strong"),i(748,"(opcional)"),e()(),t(749,"p"),i(750,"Objeto com as literais usadas no "),t(751,"code"),i(752,"po-multiselect"),e(),i(753,"."),e(),t(754,"p"),i(755,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),t(756,"pre")(757,"code"),i(758,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),e()(),t(759,"p"),i(760,"Ou passando apenas as literais que deseja customizar:"),e(),t(761,"pre")(762,"code"),i(763,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),e()(),t(764,"p"),i(765,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),e(),t(766,"pre")(767,"code"),i(768,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),e()(),t(769,"blockquote")(770,"p"),i(771,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(772,"a",33)(773,"code"),i(774,"PoI18nService"),e()(),i(775," ou do browser."),e()()()(),t(776,"tr",14)(777,"td",15)(778,"div",22)(779,"span",23),i(780," name"),l(781,"br"),e()()(),t(782,"td",18)(783,"code",24),i(784,"string"),e()(),t(785,"td",20),i(786,"-"),e(),t(787,"td",21)(788,"p"),i(789,"Nome do componente."),e()()(),t(790,"tr",14)(791,"td",15)(792,"div",22)(793,"span",23),i(794," p-optional"),l(795,"br"),e()()(),t(796,"td",18)(797,"code",25),i(798,"boolean"),e()(),t(799,"td",20)(800,"p")(801,"code"),i(802,"false"),e()()(),t(803,"td",21)(804,"em")(805,"strong"),i(806,"(opcional)"),e()(),t(807,"p"),i(808,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e(),t(809,"blockquote")(810,"p"),i(811,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(812,"ul")(813,"li"),i(814,"O campo conter "),t(815,"code"),i(816,"p-required"),e(),i(817,";"),e(),t(818,"li"),i(819,"N\xE3o possuir "),t(820,"code"),i(821,"p-help"),e(),i(822," e/ou "),t(823,"code"),i(824,"p-label"),e(),i(825,"."),e()()()(),t(826,"tr",14)(827,"td",15)(828,"div",22)(829,"span",23),i(830," p-options"),l(831,"br"),e()()(),t(832,"td",18)(833,"code",34),i(834,"Array<PoMultiselectOption "),e(),t(835,"code",35),i(836," any>"),e()(),t(837,"td",20),i(838,"-"),e(),t(839,"td",21)(840,"p"),i(841,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),e(),t(842,"blockquote")(843,"p"),i(844,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),e()(),t(845,"pre")(846,"code"),i(847,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),e()(),t(848,"blockquote")(849,"p"),i(850,"A lista pode ser definida utilizando um array com o valor representando "),t(851,"code"),i(852,"value"),e(),i(853," e "),t(854,"code"),i(855,"label"),e(),i(856," das seguintes formas:"),e()(),t(857,"pre")(858,"code"),i(859,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),e()(),t(860,"pre")(861,"code"),i(862,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),e()(),t(863,"ul")(864,"li"),i(865,"Aconselha-se utilizar valores distintos no "),t(866,"code"),i(867,"label"),e(),i(868," e "),t(869,"code"),i(870,"value"),e(),i(871," dos itens."),e()()()(),t(872,"tr",14)(873,"td",15)(874,"div",22)(875,"span",23),i(876," p-placeholder"),l(877,"br"),e()()(),t(878,"td",18)(879,"code",24),i(880,"string"),e()(),t(881,"td",20),i(882,"-"),e(),t(883,"td",21)(884,"em")(885,"strong"),i(886,"(opcional)"),e()(),t(887,"p"),i(888,"Mensagem apresentada enquanto o campo estiver vazio."),e()()(),t(889,"tr",14)(890,"td",15)(891,"div",22)(892,"span",23),i(893," p-placeholder-search"),l(894,"br"),e()()(),t(895,"td",18)(896,"code",24),i(897,"string"),e()(),t(898,"td",20)(899,"p")(900,"code"),i(901,"Buscar"),e()()(),t(902,"td",21)(903,"em")(904,"strong"),i(905,"(opcional)"),e()(),t(906,"p"),i(907,"Placeholder do campo de pesquisa."),e(),t(908,"blockquote")(909,"p"),i(910,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),e()()()(),t(911,"tr",14)(912,"td",15)(913,"div",22)(914,"span",23),i(915," p-required"),l(916,"br"),e()()(),t(917,"td",18)(918,"code",25),i(919,"boolean"),e()(),t(920,"td",20)(921,"p")(922,"code"),i(923,"false"),e()()(),t(924,"td",21)(925,"em")(926,"strong"),i(927,"(opcional)"),e()(),t(928,"p"),i(929,"Define que o campo ser\xE1 obrigat\xF3rio."),e(),t(930,"blockquote")(931,"p"),i(932,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),t(933,"code"),i(934,"(p-disabled)"),e(),i(935,"."),e()()()(),t(936,"tr",14)(937,"td",15)(938,"div",22)(939,"span",23),i(940," p-show-required"),l(941,"br"),e()()(),t(942,"td",18)(943,"code",25),i(944,"boolean"),e()(),t(945,"td",20),i(946,"-"),e(),t(947,"td",21)(948,"p"),i(949,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e(),t(950,"blockquote")(951,"p"),i(952,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(953,"ul")(954,"li"),i(955,"N\xE3o possuir "),t(956,"code"),i(957,"p-help"),e(),i(958," e/ou "),t(959,"code"),i(960,"p-label"),e(),i(961,"."),e()()()(),t(962,"tr",14)(963,"td",15)(964,"div",22)(965,"span",23),i(966," p-size"),l(967,"br"),e()()(),t(968,"td",18)(969,"code",24),i(970,"string"),e()(),t(971,"td",20)(972,"p")(973,"code"),i(974,"medium"),e()()(),t(975,"td",21)(976,"em")(977,"strong"),i(978,"(opcional)"),e()(),t(979,"p"),i(980,"Define o tamanho do componente:"),e(),t(981,"ul")(982,"li")(983,"code"),i(984,"small"),e(),i(985,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(986,"li")(987,"code"),i(988,"medium"),e(),i(989,": altura do input como 44px."),e()(),t(990,"blockquote")(991,"p"),i(992,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(993,"code"),i(994,"medium"),e(),i(995,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(996,"a",36),i(997,"po-theme"),e(),i(998,"."),e()()()(),t(999,"tr",14)(1e3,"td",15)(1001,"div",22)(1002,"span",23),i(1003," p-sort"),l(1004,"br"),e()()(),t(1005,"td",18)(1006,"code",25),i(1007,"boolean"),e()(),t(1008,"td",20)(1009,"p")(1010,"code"),i(1011,"false"),e()()(),t(1012,"td",21)(1013,"em")(1014,"strong"),i(1015,"(opcional)"),e()(),t(1016,"p"),i(1017,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),e()()()(),t(1018,"h3",10),i(1019,"M\xE9todos"),e(),t(1020,"table",37)(1021,"tr",14)(1022,"th",38)(1023,"div",22)(1024,"h4")(1025,"span",23),i(1026," focus "),e()()()()(),t(1027,"tr",21)(1028,"td",21)(1029,"p"),i(1030,"Fun\xE7\xE3o que atribui foco ao componente."),e(),t(1031,"p"),i(1032,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(1033,"pre")(1034,"code"),i(1035,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),e()()()()(),l(1036,"br"),t(1037,"table",37)(1038,"tr",14)(1039,"th",38)(1040,"div",22)(1041,"h4")(1042,"span",23),i(1043," showAdditionalHelp "),e()()()()(),t(1044,"tr",21)(1045,"td",21)(1046,"p"),i(1047,"M\xE9todo que exibe "),t(1048,"code"),i(1049,"p-additionalHelpTooltip"),e(),i(1050," ou executa a a\xE7\xE3o definida em "),t(1051,"code"),i(1052,"p-additionalHelp"),e(),i(1053,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),t(1054,"code"),i(1055,"p-keydown"),e(),i(1056,"."),e(),t(1057,"pre")(1058,"code"),i(1059,`<po-multiselect
 #multiselect
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),e()(),t(1060,"pre")(1061,"code"),i(1062,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),e()()()()(),l(1063,"br"),t(1064,"h3"),i(1065,"Interfaces"),e(),t(1066,"h4",39)(1067,"code",5),i(1068,"PoMultiselectFilter"),e()(),t(1069,"div",2)(1070,"p"),i(1071,"Interface para os servi\xE7os que ser\xE3o utilizados no po-multiselect."),e()(),t(1072,"h4",10),i(1073,"M\xE9todos"),e(),t(1074,"table",37)(1075,"tr",14)(1076,"th",38)(1077,"div",22)(1078,"h4")(1079,"span",23),i(1080," getFilteredData "),e()()()()(),t(1081,"tr",21)(1082,"td",21)(1083,"p"),i(1084,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),t(1085,"code"),i(1086,"PoMultiselectOption"),e(),i(1087,", ser\xE1 informado por parametro o campo e o valor a ser pesquisado."),e()()()(),t(1088,"h5")(1089,"b"),i(1090,"Par\xE2metros"),e()(),t(1091,"table",11)(1092,"tr",12)(1093,"th",13),i(1094,"Nome"),e(),t(1095,"th",13),i(1096,"Tipo"),e(),t(1097,"th",13),i(1098,"Descri\xE7\xE3o"),e()(),t(1099,"tr",14)(1100,"td",15),i(1101," params"),e(),t(1102,"td",18)(1103,"code",40),i(1104," { property: string, value: string } "),e()(),t(1105,"td",21)(1106,"p"),i(1107,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),e()()()(),l(1108,"br"),t(1109,"table",37)(1110,"tr",14)(1111,"th",38)(1112,"div",22)(1113,"h4")(1114,"span",23),i(1115," getObjectsByValues "),e()()()()(),t(1116,"tr",21)(1117,"td",21)(1118,"p"),i(1119,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),t(1120,"code"),i(1121,"PoMultiselectOption"),e(),i(1122,", ser\xE1 informado por par\xE2metro valor a ser pesquisado."),e()()()(),t(1123,"h5")(1124,"b"),i(1125,"Par\xE2metros"),e()(),t(1126,"table",11)(1127,"tr",12)(1128,"th",13),i(1129,"Nome"),e(),t(1130,"th",13),i(1131,"Tipo"),e(),t(1132,"th",13),i(1133,"Descri\xE7\xE3o"),e()(),t(1134,"tr",14)(1135,"td",15),i(1136," values"),e(),t(1137,"td",18)(1138,"code",41),i(1139," Array<string "),e(),t(1140,"code",42),i(1141," number> "),e()(),t(1142,"td",21)(1143,"p"),i(1144,"Array com os valores a serem buscados."),e()()()(),l(1145,"br"),t(1146,"h4",39)(1147,"code",5),i(1148,"PoMultiselectLiterals"),e()(),t(1149,"div",2)(1150,"p"),i(1151,"Interface para defini\xE7\xE3o das literais usadas no "),t(1152,"code"),i(1153,"po-multiselect"),e(),i(1154,"."),e()(),t(1155,"h4",10),i(1156,"Propriedades"),e(),t(1157,"table",11)(1158,"tr",12)(1159,"th",13),i(1160,"Nome"),e(),t(1161,"th",13),i(1162,"Tipo"),e(),t(1163,"th",13),i(1164,"Descri\xE7\xE3o"),e()(),t(1165,"tr",14)(1166,"td",15)(1167,"div",22)(1168,"span",23),i(1169," noData"),l(1170,"br"),e()()(),t(1171,"td",18)(1172,"code",24),i(1173,"string"),e()(),t(1174,"td",21)(1175,"em")(1176,"strong"),i(1177,"(opcional)"),e()(),t(1178,"p"),i(1179,"Texto exibido quando n\xE3o houver dados encontrados na busca."),e()()(),t(1180,"tr",14)(1181,"td",15)(1182,"div",22)(1183,"span",23),i(1184," placeholderSearch"),l(1185,"br"),e()()(),t(1186,"td",18)(1187,"code",24),i(1188,"string"),e()(),t(1189,"td",21)(1190,"em")(1191,"strong"),i(1192,"(opcional)"),e()(),t(1193,"p"),i(1194,"Texto do "),t(1195,"em"),i(1196,"placeholder"),e(),i(1197," do campo de busca."),e()()(),t(1198,"tr",14)(1199,"td",15)(1200,"div",22)(1201,"span",23),i(1202," selectAll"),l(1203,"br"),e()()(),t(1204,"td",18)(1205,"code",24),i(1206,"string"),e()(),t(1207,"td",21)(1208,"em")(1209,"strong"),i(1210,"(opcional)"),e()(),t(1211,"p"),i(1212,"Texto exibido no bot\xE3o de selecionar todos."),e()()(),t(1213,"tr",14)(1214,"td",15)(1215,"div",22)(1216,"span",23),i(1217," selectItem"),l(1218,"br"),e()()(),t(1219,"td",18)(1220,"code",24),i(1221,"string"),e()(),t(1222,"td",21)(1223,"em")(1224,"strong"),i(1225,"(opcional)"),e()(),t(1226,"p"),i(1227,"Texto exibido na propriedade placeholder."),e()()()(),t(1228,"h4",39)(1229,"code",5),i(1230,"PoMultiselectOption"),e()(),t(1231,"div",2)(1232,"p"),i(1233,"Interface dos itens da cole\xE7\xE3o que ser\xE1 exibida no dropdown do po-multiselect."),e()(),t(1234,"h4",10),i(1235,"Propriedades"),e(),t(1236,"table",11)(1237,"tr",12)(1238,"th",13),i(1239,"Nome"),e(),t(1240,"th",13),i(1241,"Tipo"),e(),t(1242,"th",13),i(1243,"Descri\xE7\xE3o"),e()(),t(1244,"tr",14)(1245,"td",15)(1246,"div",22)(1247,"span",23),i(1248," label"),l(1249,"br"),e()()(),t(1250,"td",18)(1251,"code",24),i(1252,"string"),e()(),t(1253,"td",21)(1254,"p"),i(1255,"Label exibido nos itens da lista."),e()()(),t(1256,"tr",14)(1257,"td",15)(1258,"div",22)(1259,"span",23),i(1260," value"),l(1261,"br"),e()()(),t(1262,"td",18)(1263,"code",24),i(1264,"string "),e(),t(1265,"code",26),i(1266," number"),e()(),t(1267,"td",21)(1268,"p"),i(1269,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),e()()()(),t(1270,"h3"),i(1271,"Enums"),e(),t(1272,"h4",4)(1273,"code",5),i(1274,"PoMultiselectFilterMode"),e()(),t(1275,"div",2)(1276,"p"),i(1277,"Define o tipo de busca usado no po-multiselect."),e()(),t(1278,"h4",10),i(1279,"Propriedades"),e(),t(1280,"table",11)(1281,"tr",12)(1282,"th",13),i(1283,"Nome"),e(),t(1284,"th",13),i(1285,"Descri\xE7\xE3o"),e()(),t(1286,"tr",14)(1287,"td",15)(1288,"div",22)(1289,"span",23),i(1290," startsWith"),l(1291,"br"),e()()(),t(1292,"td",21)(1293,"p"),i(1294,"Verifica se o texto "),t(1295,"em"),i(1296,"inicia"),e(),i(1297," com o valor pesquisado."),e()()(),t(1298,"tr",14)(1299,"td",15)(1300,"div",22)(1301,"span",23),i(1302," contains"),l(1303,"br"),e()()(),t(1304,"td",21)(1305,"p"),i(1306,"Verifica se o texto "),t(1307,"em"),i(1308,"cont\xE9m"),e(),i(1309," o valor pesquisado."),e()()(),t(1310,"tr",14)(1311,"td",15)(1312,"div",22)(1313,"span",23),i(1314," endsWith"),l(1315,"br"),e()()(),t(1316,"td",21)(1317,"p"),i(1318,"Verifica se o texto "),t(1319,"em"),i(1320,"finaliza"),e(),i(1321," com o valor pesquisado."),e()()()()())},dependencies:[M],encapsulation:2})}return o})();var Ne=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(q(be),q(he))};static \u0275cmp=S({type:o,selectors:[["ng-component"]],standalone:!1,decls:12,vars:4,consts:[["p-title","Multiselect",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),l(3,"sample-po-multiselect-doc"),e(),t(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),l(5,"sample-po-multiselect-basic-view")(6,"sample-po-multiselect-labs-view")(7,"sample-po-multiselect-vacation-view")(8,"sample-po-multiselect-vacation-reactive-form-view")(9,"sample-po-multiselect-template-view")(10,"sample-po-multiselect-heroes-view")(11,"sample-po-multiselect-any-array-view"),e()()()),a&2&&(m("p-actions",n.actions),p(2),m("p-active",n.activeTab==="doc"),p(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[Ce,y,C,Pe,we,Ve,Oe,ke,qe,Be,Ie],encapsulation:2})}return o})();var bt=[{path:"",component:Ne}],We=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=K({type:o});static \u0275inj=Q({imports:[oe.forChild(bt),oe]})}return o})();var ai=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=K({type:o});static \u0275inj=Q({imports:[Me,We]})}return o})();export{ai as DocPoMultiselectModule};
