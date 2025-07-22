import{o as w,p as Y}from"./chunk-JYNCG2Y6.js";import{Ab as C,F as z,Ga as K,La as Q,a as j,bb as G,ca as U,ha as J,nb as X,zb as v}from"./chunk-HBOGTDFH.js";import{$a as E,Ac as A,Ba as P,Ea as t,Fa as n,Ga as i,Ka as O,La as h,M as D,Nc as q,Pc as N,Rc as L,T as c,U as g,Wa as B,Xa as e,Za as y,ab as S,bb as f,eb as _,ha as p,ia as V,oa as u,pa as R,ub as T,wc as I,xc as F,ya as d,yc as W,zc as H}from"./chunk-MIQUIDUB.js";var Z=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-gauge-basic"]],standalone:!1,decls:1,vars:1,consts:[[3,"p-value"]],template:function(l,o){l&1&&i(0,"po-gauge",0),l&2&&d("p-value",50)},dependencies:[G],encapsulation:2})}return a})();var me=a=>({"docs-sample-code-tabs":a}),ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-gauge-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Gauge Basic"),n(),t(4,"a",2),h("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-gauge-basic/sample-po-gauge-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-gauge [p-value]="50"></po-gauge>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-gauge-basic/sample-po-gauge-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-gauge-basic',
  templateUrl: './sample-po-gauge-basic.component.html',
  standalone: false
})
export class SamplePoGaugeBasicComponent {}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-gauge-basic"),n(),i(23,"hr")),l&2&&(p(5),P("po-icon "+o.sampleCodeButtonIcon),p(),y(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,me,o.hideSampleCodeTabs)))},dependencies:[T,w,v,C,Z],encapsulation:2})}return a})();var te=(()=>{class a{description;subtitle;gaugeValue;height;options;optionsRanges={};properties;ranges=[];title;propertiesOptions=[{value:"showFromToLegend",label:"Show From To Legend"},{value:"showPointer",label:"Show Pointer"},{value:"showContainerGauge",label:"Show Container"},{value:"hideExpand",label:"Hide Expand"},{value:"hideTableDetails",label:"Hide Table Details"},{value:"hideExportCsv",label:"Hide Export Csv"},{value:"hideExportImage",label:"Hide Export Image"}];get isEmptyObject(){return Object.keys(this.optionsRanges).length===0}ngOnInit(){this.restore()}addRange(){this.ranges=[...this.ranges,this.optionsRanges],this.optionsRanges={}}restore(){this.description=void 0,this.gaugeValue=void 0,this.height=void 0,this.optionsRanges={},this.ranges=[],this.title=void 0,this.properties=["showPointer","showContainerGauge"],this.changeOptions()}changeOptions(){this.options={showFromToLegend:this.properties.includes("showFromToLegend"),pointer:this.properties.includes("showPointer"),showContainerGauge:this.properties.includes("showContainerGauge"),subtitleGauge:this.subtitle,header:{hideExpand:this.properties.includes("hideExpand"),hideTableDetails:this.properties.includes("hideTableDetails"),hideExportCsv:this.properties.includes("hideExportCsv"),hideExportImage:this.properties.includes("hideExportImage")}}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-gauge-labs"]],standalone:!1,decls:24,vars:20,consts:[["rangesForm","ngForm"],[3,"p-description","p-height","p-ranges","p-title","p-value","p-options","p-show-from-to-legend","p-show-pointer"],["p-label","Properties",1,"po-md-12"],[1,"row"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["name","gaugeValue","p-label","Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","description","p-label","Description",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Ranges",1,"po-md-12"],["name","from","p-label","from",1,"po-md-3",3,"ngModelChange","ngModel"],["name","from","p-label","to",1,"po-md-3",3,"ngModelChange","ngModel"],["name","label","p-label","label",1,"po-md-3",3,"ngModelChange","ngModel"],["name","color","p-label","color",1,"po-md-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Add Range",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-md-12"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,o){if(l&1){let s=O();i(0,"po-gauge",1)(1,"po-divider",2),t(2,"form")(3,"div",3)(4,"po-input",4),f("ngModelChange",function(r){return c(s),S(o.title,r)||(o.title=r),g(r)}),n(),t(5,"po-number",5),f("ngModelChange",function(r){return c(s),S(o.height,r)||(o.height=r),g(r)}),n(),t(6,"po-number",6),f("ngModelChange",function(r){return c(s),S(o.gaugeValue,r)||(o.gaugeValue=r),g(r)}),n(),t(7,"po-input",7),f("ngModelChange",function(r){return c(s),S(o.description,r)||(o.description=r),g(r)}),n(),t(8,"po-input",8),f("ngModelChange",function(r){return c(s),S(o.subtitle,r)||(o.subtitle=r),g(r)}),h("p-change",function(){return c(s),g(o.changeOptions())}),n()(),t(9,"form",null,0)(11,"div",9),i(12,"po-divider",10),t(13,"po-number",11),f("ngModelChange",function(r){return c(s),S(o.optionsRanges.from,r)||(o.optionsRanges.from=r),g(r)}),n(),t(14,"po-number",12),f("ngModelChange",function(r){return c(s),S(o.optionsRanges.to,r)||(o.optionsRanges.to=r),g(r)}),n(),t(15,"po-input",13),f("ngModelChange",function(r){return c(s),S(o.optionsRanges.label,r)||(o.optionsRanges.label=r),g(r)}),n(),t(16,"po-input",14),f("ngModelChange",function(r){return c(s),S(o.optionsRanges.color,r)||(o.optionsRanges.color=r),g(r)}),n()(),t(17,"div",9)(18,"po-checkbox-group",15),f("ngModelChange",function(r){return c(s),S(o.properties,r)||(o.properties=r),g(r)}),h("p-change",function(){return c(s),g(o.changeOptions())}),n()(),t(19,"div",9)(20,"po-button",16),h("p-click",function(){return c(s),g(o.addRange())}),n()()()(),t(21,"div",9),i(22,"po-divider",17),t(23,"po-button",18),h("p-click",function(){return c(s),g(o.restore())}),n()()}if(l&2){let s=B(10);d("p-description",o.description)("p-height",o.height)("p-ranges",o.ranges)("p-title",o.title)("p-value",o.gaugeValue)("p-options",o.options)("p-show-from-to-legend",o.properties.includes("showFromToLegend"))("p-show-pointer",o.properties.includes("showPointer")),p(4),E("ngModel",o.title),p(),E("ngModel",o.height),p(),E("ngModel",o.gaugeValue),p(),E("ngModel",o.description),p(),E("ngModel",o.subtitle),p(5),E("ngModel",o.optionsRanges.from),p(),E("ngModel",o.optionsRanges.to),p(),E("ngModel",o.optionsRanges.label),p(),E("ngModel",o.optionsRanges.color),p(2),E("ngModel",o.properties),d("p-options",o.propertiesOptions),p(2),d("p-disabled",s.invalid||o.isEmptyObject)}},dependencies:[A,I,F,H,W,z,j,J,K,Q,G],encapsulation:2})}return a})();var ue=a=>({"docs-sample-code-tabs":a}),ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-gauge-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Gauge Labs"),n(),t(4,"a",2),h("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-gauge-labs/sample-po-gauge-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-gauge
  [p-description]="description"
  [p-height]="height"
  [p-ranges]="ranges"
  [p-title]="title"
  [p-value]="gaugeValue"
  [p-options]="options"
  [p-show-from-to-legend]="properties.includes('showFromToLegend')"
  [p-show-pointer]="properties.includes('showPointer')"
>
</po-gauge>

<po-divider class="po-md-12" p-label="Properties"></po-divider>

<form>
  <div class="row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>
    <po-number class="po-md-6" name="height" [(ngModel)]="height" p-label="Height"> </po-number>
    <po-number class="po-md-6" name="gaugeValue" [(ngModel)]="gaugeValue" p-label="Value"> </po-number>
    <po-input class="po-md-6" name="description" [(ngModel)]="description" p-label="Description"> </po-input>
    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" (p-change)="changeOptions()" p-label="Subtitle">
    </po-input>
  </div>

  <form #rangesForm="ngForm">
    <div class="po-row">
      <po-divider class="po-md-12" p-label="Ranges"></po-divider>
      <po-number class="po-md-3" name="from" [(ngModel)]="optionsRanges.from" p-label="from"></po-number>
      <po-number class="po-md-3" name="from" [(ngModel)]="optionsRanges.to" p-label="to"></po-number>
      <po-input class="po-md-3" name="label" [(ngModel)]="optionsRanges.label" p-label="label"></po-input>
      <po-input class="po-md-3" name="color" [(ngModel)]="optionsRanges.color" p-label="color"></po-input>
    </div>
    <div class="po-row">
      <po-checkbox-group
        class="po-md-12"
        name="properties"
        [(ngModel)]="properties"
        p-columns="4"
        p-label="Properties"
        [p-options]="propertiesOptions"
        (p-change)="changeOptions()"
      >
      </po-checkbox-group>
    </div>
    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Range"
        [p-disabled]="rangesForm.invalid || isEmptyObject"
        (p-click)="addRange()"
      ></po-button>
    </div>
  </form>
</form>

<div class="po-row">
  <po-divider class="po-md-12"></po-divider>
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"></po-button>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-gauge-labs/sample-po-gauge-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoGaugeOptions, PoGaugeRanges } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-gauge-labs',
  templateUrl: './sample-po-gauge-labs.component.html',
  standalone: false
})
export class SamplePoGaugeLabsComponent implements OnInit {
  description: string;
  subtitle: string;
  gaugeValue: number;
  height: number;
  options: PoGaugeOptions;
  optionsRanges: PoGaugeRanges = {};
  properties: Array<string>;
  ranges: Array<PoGaugeRanges> = [];
  title: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'showFromToLegend', label: 'Show From To Legend' },
    { value: 'showPointer', label: 'Show Pointer' },
    { value: 'showContainerGauge', label: 'Show Container' },
    { value: 'hideExpand', label: 'Hide Expand' },
    { value: 'hideTableDetails', label: 'Hide Table Details' },
    { value: 'hideExportCsv', label: 'Hide Export Csv' },
    { value: 'hideExportImage', label: 'Hide Export Image' }
  ];

  get isEmptyObject() {
    return Object.keys(this.optionsRanges).length === 0;
  }

  ngOnInit() {
    this.restore();
  }

  addRange() {
    this.ranges = [...this.ranges, this.optionsRanges];
    this.optionsRanges = {};
  }

  restore() {
    this.description = undefined;
    this.gaugeValue = undefined;
    this.height = undefined;
    this.optionsRanges = {};
    this.ranges = [];
    this.title = undefined;
    this.properties = ['showPointer', 'showContainerGauge'];
    this.changeOptions();
  }

  changeOptions() {
    this.options = {
      showFromToLegend: this.properties.includes('showFromToLegend'),
      pointer: this.properties.includes('showPointer'),
      showContainerGauge: this.properties.includes('showContainerGauge'),
      subtitleGauge: this.subtitle,
      header: {
        hideExpand: this.properties.includes('hideExpand'),
        hideTableDetails: this.properties.includes('hideTableDetails'),
        hideExportCsv: this.properties.includes('hideExportCsv'),
        hideExportImage: this.properties.includes('hideExportImage')
      }
    };
  }
}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-gauge-labs"),n(),i(23,"hr")),l&2&&(p(5),P("po-icon "+o.sampleCodeButtonIcon),p(),y(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,ue,o.hideSampleCodeTabs)))},dependencies:[T,w,v,C,te],encapsulation:2})}return a})();var oe=(()=>{class a{salesRanges=[{from:0,to:50,label:"Sales reduction",color:"#c64840"},{from:50,to:75,label:"Average sales",color:"#ea9b3e"},{from:75,to:100,label:"Sales soared",color:"#00b28e"}];turnoverRanges=[{from:0,to:50,label:"Low rate",color:"#00b28e"},{from:50,to:75,label:"Average rate",color:"#ea9b3e"},{from:75,to:100,label:"High rate",color:"#c64840"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-gauge-summary"]],standalone:!1,decls:8,vars:4,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],[1,"po-md-6"],["p-title","Employee turnover rate","p-value","25","p-description","25% of turnover",3,"p-show-from-to-legend","p-ranges"],["p-title","Sales performance","p-value","82","p-description","The sales increased in 82% in the first bimester of 2020",3,"p-show-from-to-legend","p-ranges"]],template:function(l,o){l&1&&(t(0,"po-container")(1,"div",0),e(2,"Sales Performance"),n(),t(3,"div",1)(4,"div",2),i(5,"po-gauge",3),n(),t(6,"div",2),i(7,"po-gauge",4),n()()()),l&2&&(p(5),d("p-show-from-to-legend",!0)("p-ranges",o.turnoverRanges),p(2),d("p-show-from-to-legend",!0)("p-ranges",o.salesRanges))},dependencies:[U,G],encapsulation:2})}return a})();var he=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-gauge-summary-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Gauge Summary"),n(),t(4,"a",2),h("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-gauge-summary/sample-po-gauge-summary.component.html"),n(),t(13,"pre",7),e(14,`<po-container>
  <div class="po-font-title po-mb-3">Sales Performance</div>
  <div class="po-row">
    <div class="po-md-6">
      <po-gauge
        p-title="Employee turnover rate"
        p-value="25"
        p-description="25% of turnover"
        [p-show-from-to-legend]="true"
        [p-ranges]="turnoverRanges"
      ></po-gauge>
    </div>
    <div class="po-md-6">
      <po-gauge
        p-title="Sales performance"
        p-value="82"
        p-description="The sales increased in 82% in the first bimester of 2020"
        [p-show-from-to-legend]="true"
        [p-ranges]="salesRanges"
      ></po-gauge>
    </div>
  </div>
</po-container>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-gauge-summary/sample-po-gauge-summary.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoGaugeRanges } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-gauge-summary',
  templateUrl: './sample-po-gauge-summary.component.html',
  standalone: false
})
export class SamplePoGaugeSummaryComponent {
  salesRanges: Array<PoGaugeRanges> = [
    { from: 0, to: 50, label: 'Sales reduction', color: '#c64840' },
    { from: 50, to: 75, label: 'Average sales', color: '#ea9b3e' },
    { from: 75, to: 100, label: 'Sales soared', color: '#00b28e' }
  ];

  turnoverRanges: Array<PoGaugeRanges> = [
    { from: 0, to: 50, label: 'Low rate', color: '#00b28e' },
    { from: 50, to: 75, label: 'Average rate', color: '#ea9b3e' },
    { from: 75, to: 100, label: 'High rate', color: '#c64840' }
  ];
}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-gauge-summary"),n(),i(23,"hr")),l&2&&(p(5),P("po-icon "+o.sampleCodeButtonIcon),p(),y(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",_(4,he,o.hideSampleCodeTabs)))},dependencies:[T,w,v,C,oe],encapsulation:2})}return a})();var ae=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-gauge-doc"]],standalone:!1,decls:583,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/guide-charts"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-class-deprecated-marker"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoGaugeOptions"],["pan","",1,"docs-api-property-type","Array<PoGaugeRanges>"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoChartHeaderOptions"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"]],template:function(l,o){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoGaugeModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-gauge."),n()(),t(7,"h3",3),e(8,"Componente"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoGaugeComponent"),n()(),t(12,"div",2)(13,"blockquote")(14,"p"),e(15,"ESSE COMPONENTE EST\xC1 DEPRECIADO E SER\xC1 REMOVIDO NA v22.x.x. Indicamos a utiliza\xE7\xE3o do "),t(16,"code"),e(17,"po-chart"),n(),e(18," com "),t(19,"code"),e(20,"type"),n(),e(21," Gauge."),n()(),t(22,"p"),e(23,"O componente "),t(24,"code"),e(25,"po-gauge"),n(),e(26,` prov\xEA a representa\xE7\xE3o de um valor atrav\xE9s de um arco. \xC9 muito comum, por exemplo, para demonstrar o desempenho ou progresso de algo.
O `),t(27,"code"),e(28,"po-gauge"),n(),e(29," possui dois tipos de tratamentos:"),n(),t(30,"ul")(31,"li"),e(32,"\xC9 poss\xEDvel demonstrar um dado percentual simples em conjunto com uma descri\xE7\xE3o resumida em seu interior;"),n(),t(33,"li"),e(34,"Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado."),n()(),t(35,"h4"),e(36,"Guia de uso para Gr\xE1ficos"),n(),t(37,"blockquote")(38,"p"),e(39,"Veja nosso "),t(40,"a",6),e(41,"guia de uso para gr\xE1ficos"),n(),e(42,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores. `),n()()(),t(43,"div",7)(44,"h4",8),e(45,"Seletor"),n(),t(46,"pre",9),e(47,`<po-gauge
    p-description="string"
    p-height="number"
    p-options="PoGaugeOptions"
    p-ranges="Array<PoGaugeRanges>"
    p-show-from-to-legend="boolean"
    p-show-pointer="boolean"
    p-title="string"
    p-value="number" >
</po-gauge>
`),n()(),t(48,"div",10),e(49,"Deprecated"),n(),t(50,"h4",11),e(51,"Propriedades"),n(),t(52,"table",12)(53,"tr",13)(54,"th",14),e(55,"Nome"),n(),t(56,"th",14),e(57,"Tipo"),n(),t(58,"th",14),e(59,"Padr\xE3o"),n(),t(60,"th",14),e(61,"Descri\xE7\xE3o"),n()(),t(62,"tr",15)(63,"td",16)(64,"div",17)(65,"span",18),e(66," p-description"),i(67,"br"),n()()(),t(68,"td",19)(69,"code",20),e(70,"string"),n()(),t(71,"td",21),e(72,"-"),n(),t(73,"td",22)(74,"em")(75,"strong"),e(76,"(opcional)"),n()(),t(77,"p"),e(78,`Define o texto que ser\xE1 exibido no gauge.
H\xE1 dois posicionamentos para ele:`),n(),t(79,"ul")(80,"li"),e(81,"Se houver defini\xE7\xE3o para "),t(82,"code"),e(83,"p-ranges"),n(),e(84,", o descritivo ser\xE1 exibido no topo do container, ficando acima do gauge;"),n(),t(85,"li"),e(86,"Na aus\xEAncia de "),t(87,"code"),e(88,"p-ranges"),n(),e(89,", ser\xE1 incorporado dentro do arco do gauge, e abaixo de "),t(90,"code"),e(91,"p-value"),n(),e(92,"."),n()(),t(93,"blockquote")(94,"p"),e(95,`Para uma melhor experi\xEAncia do usu\xE1rio, \xE9 recomendado um descritivo breve e com poucas palavras.
Indicamos a utiliza\xE7\xE3o da nova propriedade `),t(96,"code"),e(97,"descriptionChart"),n(),e(98," em "),t(99,"code"),e(100,"p-options"),n(),e(101,"."),n()()()(),t(102,"tr",15)(103,"td",16)(104,"div",17)(105,"span",18),e(106," p-height"),i(107,"br"),n()()(),t(108,"td",19)(109,"code",23),e(110,"number"),n()(),t(111,"td",21)(112,"p")(113,"code"),e(114,"300px"),n()()(),t(115,"td",22)(116,"em")(117,"strong"),e(118,"(opcional)"),n()(),t(119,"p"),e(120,"Define a altura do gauge."),n(),t(121,"p"),e(122,"O valor m\xEDnimo aceito \xE9 300px."),n()()(),t(123,"tr",15)(124,"td",16)(125,"div",17)(126,"span",18),e(127," p-options"),i(128,"br"),n()()(),t(129,"td",19)(130,"code",24),e(131,"PoGaugeOptions"),n()(),t(132,"td",21),e(133,"-"),n(),t(134,"td",22)(135,"em")(136,"strong"),e(137,"(opcional)"),n()(),t(138,"p"),e(139,"Objeto com as configura\xE7\xF5es usadas no "),t(140,"code"),e(141,"po-gauge"),n(),e(142,"."),n(),t(143,"p"),e(144,`\xC9 poss\xEDvel, por exemplo, esconder as funcionalidades do header,
ou habilitar uma legenda com `),t(145,"code"),e(146,"From"),n(),t(147,"code"),e(148,"To"),n(),e(149," da seguinte forma:"),n(),t(150,"pre")(151,"code"),e(152,`chartOptions: PoGaugeOptions = {
  showFromToLegend: true,
  header: {
    hideExpand: true,
  },
};
`),n()()()(),t(153,"tr",15)(154,"td",16)(155,"div",17)(156,"span",18),e(157," p-ranges"),i(158,"br"),n()()(),t(159,"td",19)(160,"code",25),e(161,"Array<PoGaugeRanges>"),n()(),t(162,"td",21),e(163,"-"),n(),t(164,"td",22)(165,"em")(166,"strong"),e(167,"(opcional)"),n()(),t(168,"p"),e(169,`Defini\xE7\xE3o para o alcance de cores. Ao adicionar pelo menos um item na lista,
incorpora-se o ponteiro que assinala o valor passado em `),t(170,"code"),e(171,"p-value"),n(),e(172,`.
Se o valor de `),t(173,"code"),e(174,"p-value"),n(),e(175," for inferior ao m\xEDnimo valor definido em "),t(176,"code"),e(177,"PoGaugeRanges.from"),n(),e(178,", o dom\xEDnio m\xEDnimo do gauge ser\xE1 "),t(179,"code"),e(180,"p-value"),n(),e(181,`.
A mesma regra prevalece para valores m\xE1ximos.`),n()()(),t(182,"tr",15)(183,"td",16)(184,"div",17)(185,"span",18),e(186," p-show-from-to-legend"),i(187,"br"),n()()(),t(188,"td",19)(189,"code",26),e(190,"boolean"),n()(),t(191,"td",21)(192,"p")(193,"code"),e(194,"false"),n()()(),t(195,"td",22)(196,"em")(197,"strong"),e(198,"(opcional)"),n()(),t(199,"p"),e(200,"Define a exibi\xE7\xE3o dos valores de "),t(201,"code"),e(202,"from"),n(),e(203," - "),t(204,"code"),e(205,"to"),n(),e(206," entre par\xEAnteses caso haja defini\xE7\xE3o de "),t(207,"code"),e(208,"p-ranges"),n(),e(209,"."),n()()(),t(210,"tr",15)(211,"td",16)(212,"div",17)(213,"span",18),e(214," p-show-pointer"),i(215,"br"),n()()(),t(216,"td",19)(217,"code",26),e(218,"boolean"),n()(),t(219,"td",21)(220,"p")(221,"code"),e(222,"true"),n()()(),t(223,"td",22)(224,"em")(225,"strong"),e(226,"(opcional)"),n()(),t(227,"p"),e(228,"Define a exibi\xE7\xE3o do ponteiro caso haja defini\xE7\xE3o de "),t(229,"code"),e(230,"p-ranges"),n(),e(231,"."),n()()(),t(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),e(236," p-title"),i(237,"br"),n()()(),t(238,"td",19)(239,"code",20),e(240,"string"),n()(),t(241,"td",21),e(242,"-"),n(),t(243,"td",22)(244,"em")(245,"strong"),e(246,"(opcional)"),n()(),t(247,"p"),e(248,"Define o t\xEDtulo do gauge."),n()()(),t(249,"tr",15)(250,"td",16)(251,"div",17)(252,"span",18),e(253," p-value"),i(254,"br"),n()()(),t(255,"td",19)(256,"code",23),e(257,"number"),n()(),t(258,"td",21),e(259,"-"),n(),t(260,"td",22)(261,"em")(262,"strong"),e(263,"(opcional)"),n()(),t(264,"p"),e(265,"Valor referente ao valor da s\xE9rie. Seu comportamento segue a seguintes regras:"),n(),t(266,"ul")(267,"li"),e(268,"Sem "),t(269,"code"),e(270,"p-ranges"),n(),e(271,": Os valores passados para "),t(272,"code"),e(273,"p-value"),n(),e(274," e "),t(275,"code"),e(276,"p-description"),n(),e(277,` ser\xE3o centralizados no interior do arco.
A base do valor ser\xE1 percentual tendo como base os alcances entre zero e 100%. Se passado um valor superior a 100,
A coloriza\xE7\xE3o do gauge ser\xE1 completa e o valor passado ser\xE1 exibido no interior do arco.`),n(),t(278,"li"),e(279,"Com "),t(280,"code"),e(281,"p-ranges"),n(),e(282,": A descri\xE7\xE3o ser\xE1 exibida acima do gauge e haver\xE1 um ponteiro marcando o valor passado em "),t(283,"code"),e(284,"p-value"),n(),e(285,`.
Considerando que o alcance em `),t(286,"code"),e(287,"ranges"),n(),e(288," \xE9 aberto, ent\xE3o a escala de "),t(289,"code"),e(290,"p-value"),n(),e(291,` ser\xE1 em rela\xE7\xE3o ao menor/maior alcance
absoluto definido em `),t(292,"code"),e(293,"p-ranges"),n(),e(294,`.
Se passado um `),t(295,"code"),e(296,"p-value"),n(),e(297," inferior em rela\xE7\xE3o ao m\xEDnimo valor definido em "),t(298,"code"),e(299,"p-ranges"),n(),e(300,", o dom\xEDnio m\xEDnimo do gauge partir\xE1 de "),t(301,"code"),e(302,"p-value"),n(),e(303,`.
A mesma regra prevalece para valores m\xE1ximos.`),n()()()()(),t(304,"h3"),e(305,"Interfaces"),n(),t(306,"h4",27)(307,"code",5),e(308,"PoGaugeOptions"),n()(),t(309,"div",2)(310,"p")(311,"em"),e(312,"Interface"),n(),e(313," para configura\xE7\xF5es dos elementos do gr\xE1fico."),n()(),t(314,"h4",11),e(315,"Propriedades"),n(),t(316,"table",12)(317,"tr",13)(318,"th",14),e(319,"Nome"),n(),t(320,"th",14),e(321,"Tipo"),n(),t(322,"th",14),e(323,"Descri\xE7\xE3o"),n()(),t(324,"tr",15)(325,"td",16)(326,"div",17)(327,"span",18),e(328," descriptionChart"),i(329,"br"),n()()(),t(330,"td",19)(331,"code",20),e(332,"string"),n()(),t(333,"td",22)(334,"em")(335,"strong"),e(336,"(opcional)"),n()(),t(337,"p"),e(338,"Define a descri\xE7\xE3o do gr\xE1fico exibido acima do gr\xE1fico."),n()()(),t(339,"tr",15)(340,"td",16)(341,"div",17)(342,"span",18),e(343," header"),i(344,"br"),n()()(),t(345,"td",19)(346,"code",28),e(347,"PoChartHeaderOptions"),n()(),t(348,"td",22)(349,"em")(350,"strong"),e(351,"(opcional)"),n()(),t(352,"p"),e(353,"Define um objeto do tipo "),t(354,"code"),e(355,"PoChartHeaderOptions"),n(),e(356," para configurar a exibi\xE7\xE3o de bot\xF5es no cabe\xE7alho do gr\xE1fico."),n()()(),t(357,"tr",15)(358,"td",16)(359,"div",17)(360,"span",18),e(361," pointer"),i(362,"br"),n()()(),t(363,"td",19)(364,"code",26),e(365,"boolean"),n()(),t(366,"td",22)(367,"em")(368,"strong"),e(369,"(opcional)"),n()(),t(370,"p"),e(371,"Define a exibi\xE7\xE3o do ponteiro."),n(),t(372,"blockquote")(373,"p"),e(374,"V\xE1lido para gr\xE1fico do tipo "),t(375,"code"),e(376,"Gauge"),n(),e(377,"."),n()()()(),t(378,"tr",15)(379,"td",16)(380,"div",17)(381,"span",18),e(382," showContainerGauge"),i(383,"br"),n()()(),t(384,"td",19)(385,"code",26),e(386,"boolean"),n()(),t(387,"td",22)(388,"em")(389,"strong"),e(390,"(opcional)"),n()(),t(391,"p"),e(392,"Esconde a estiliza\xE7\xE3o do container em volta do gr\xE1fico."),n()()(),t(393,"tr",15)(394,"td",16)(395,"div",17)(396,"span",18),e(397," showFromToLegend"),i(398,"br"),n()()(),t(399,"td",19)(400,"code",26),e(401,"boolean"),n()(),t(402,"td",22)(403,"em")(404,"strong"),e(405,"(opcional)"),n()(),t(406,"p"),e(407,"Exibe os valores das propriedades "),t(408,"code"),e(409,"from"),n(),e(410," e "),t(411,"code"),e(412,"to"),n(),e(413," no gr\xE1fico do no texto da legenda entre par\xEAnteses."),n(),t(414,"blockquote")(415,"p"),e(416,"V\xE1lido para gr\xE1fico do tipo "),t(417,"code"),e(418,"Gauge"),n(),e(419,"."),n()()()(),t(420,"tr",15)(421,"td",16)(422,"div",17)(423,"span",18),e(424," subtitleGauge"),i(425,"br"),n()()(),t(426,"td",19)(427,"code",20),e(428,"string"),n()(),t(429,"td",22)(430,"em")(431,"strong"),e(432,"(opcional)"),n()(),t(433,"p"),e(434,"Define um subt\xEDtulo para o Gauge. Indicamos um subt\xEDtulo pequeno, com uma quantidade m\xE1xima de 32 caracteres na altura padr\xE3o."),n()()()(),t(435,"h4",27)(436,"code",5),e(437,"PoGaugeRanges"),n()(),t(438,"div",2)(439,"p"),e(440,"Interface que define os alcances das cores do gauge."),n()(),t(441,"h4",11),e(442,"Propriedades"),n(),t(443,"table",12)(444,"tr",13)(445,"th",14),e(446,"Nome"),n(),t(447,"th",14),e(448,"Tipo"),n(),t(449,"th",14),e(450,"Descri\xE7\xE3o"),n()(),t(451,"tr",15)(452,"td",16)(453,"div",17)(454,"span",18),e(455," color"),i(456,"br"),n()()(),t(457,"td",19)(458,"code",20),e(459,"string"),n()(),t(460,"td",22)(461,"em")(462,"strong"),e(463,"(opcional)"),n()(),t(464,"p"),e(465,"Determina a cor do alcance. As maneiras de customizar o "),t(466,"em"),e(467,"preset"),n(),e(468," padr\xE3o de cores s\xE3o:"),n(),t(469,"ul")(470,"li"),e(471,"Hexadeximal, por exemplo "),t(472,"code"),e(473,"#c64840"),n(),e(474,";"),n(),t(475,"li"),e(476,"RGB, como "),t(477,"code"),e(478,"rgb(0, 0, 165)"),n()(),t(479,"li"),e(480,"O nome da cor, por exemplo "),t(481,"em"),e(482,"blue"),n(),e(483,");"),n(),t(484,"li"),e(485,"Usando uma das cores do tema do PO: Valores v\xE1lidos:"),t(486,"ul")(487,"li"),i(488,"span",29),t(489,"code"),e(490,"color-01"),n()(),t(491,"li"),i(492,"span",30),t(493,"code"),e(494,"color-02"),n()(),t(495,"li"),i(496,"span",31),t(497,"code"),e(498,"color-03"),n()(),t(499,"li"),i(500,"span",32),t(501,"code"),e(502,"color-04"),n()(),t(503,"li"),i(504,"span",33),t(505,"code"),e(506,"color-05"),n()(),t(507,"li"),i(508,"span",34),t(509,"code"),e(510,"color-06"),n()(),t(511,"li"),i(512,"span",35),t(513,"code"),e(514,"color-07"),n()(),t(515,"li"),i(516,"span",36),t(517,"code"),e(518,"color-08"),n()(),t(519,"li"),i(520,"span",37),t(521,"code"),e(522,"color-09"),n()(),t(523,"li"),i(524,"span",38),t(525,"code"),e(526,"color-10"),n()(),t(527,"li"),i(528,"span",39),t(529,"code"),e(530,"color-11"),n()(),t(531,"li"),i(532,"span",40),t(533,"code"),e(534,"color-12"),n()()()()()()(),t(535,"tr",15)(536,"td",16)(537,"div",17)(538,"span",18),e(539," from"),i(540,"br"),n()()(),t(541,"td",19)(542,"code",23),e(543,"number"),n()(),t(544,"td",22)(545,"em")(546,"strong"),e(547,"(opcional)"),n()(),t(548,"p"),e(549,"Alcance inicial da cor. O valor padr\xE3o \xE9 0."),n()()(),t(550,"tr",15)(551,"td",16)(552,"div",17)(553,"span",18),e(554," label"),i(555,"br"),n()()(),t(556,"td",19)(557,"code",20),e(558,"string"),n()(),t(559,"td",22)(560,"em")(561,"strong"),e(562,"(opcional)"),n()(),t(563,"p"),e(564,"O texto para a legenda do alcance."),n(),t(565,"blockquote")(566,"p"),e(567,"Se desejar ocultar a legenda basta ignorar esta propriedade."),n()()()(),t(568,"tr",15)(569,"td",16)(570,"div",17)(571,"span",18),e(572," to"),i(573,"br"),n()()(),t(574,"td",19)(575,"code",23),e(576,"number"),n()(),t(577,"td",22)(578,"em")(579,"strong"),e(580,"(opcional)"),n()(),t(581,"p"),e(582,"Alcance final da cor. O valor padr\xE3o \xE9 100."),n()()()()())},dependencies:[w],encapsulation:2})}return a})();var le=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(V(q),V(N))};static \u0275cmp=u({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Gauge",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return o.changeTab("doc")}),i(3,"sample-po-gauge-doc"),n(),t(4,"po-tab",3),h("p-click",function(){return o.changeTab("web")}),i(5,"sample-po-gauge-basic-view")(6,"sample-po-gauge-labs-view")(7,"sample-po-gauge-summary-view"),n()()()),l&2&&(d("p-actions",o.actions),p(2),d("p-active",o.activeTab==="doc"),p(2),d("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[X,v,C,ee,ne,ie,ae],encapsulation:2})}return a})();var Se=[{path:"",component:le}],re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=R({type:a});static \u0275inj=D({imports:[L.forChild(Se),L]})}return a})();var Ne=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=R({type:a});static \u0275inj=D({imports:[Y,re]})}return a})();export{Ne as DocPoGaugeModule};
