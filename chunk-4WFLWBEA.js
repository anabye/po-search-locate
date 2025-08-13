import{o as x,p as Fe}from"./chunk-MMZVQUBQ.js";import{Ab as v,Db as Me,F as Z,Fa as ye,Ga as $,I as Ee,La as Ce,Pa as Pe,Wa as A,a as Y,ca as be,eb as _e,gb as we,ha as ve,ja as xe,nb as Ie,o as fe,p as ge,ua as z,za as F,zb as b}from"./chunk-522XRIZO.js";import{Ac as me,Ba as C,Bc as X,Ec as de,Fa as n,Fc as ce,Ga as t,Ha as l,Ia as ae,Ja as oe,Jc as ue,L as H,La as J,M as R,Ma as u,Na as j,Oc as he,Q as ie,Qc as Se,Ra as re,Sc as ne,T as h,U as S,Ua as D,Ub as se,Va as O,Wa as V,Ya as e,_a as g,ab as P,bb as _,cb as w,db as Q,fb as I,ha as s,ia as k,oa as f,pa as K,ua as L,uc as N,vb as M,wb as B,xb as le,xc as G,ya as m,yc as U,zc as pe}from"./chunk-WFKG4FNY.js";var Te=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-basic"]],standalone:!1,decls:1,vars:0,template:function(r,i){r&1&&l(0,"po-search")},dependencies:[F],encapsulation:2})}return o})();var Je=o=>({"docs-sample-code-tabs":o}),ke=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Basic"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-basic/sample-po-search-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-search></po-search>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-basic/sample-po-search-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-search-basic"),t(),l(23,"hr")),r&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),g(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",I(4,Je,i.hideSampleCodeTabs)))},dependencies:[M,x,b,v,Te],encapsulation:2})}return o})();var Ue=["poSearch"];function Xe(o,y){if(o&1&&(ae(0),n(1,"div")(2,"strong"),e(3),t(),e(4),t(),oe()),o&2){let a=y.$implicit,r=j().$implicit;s(3),g("",a,": "),s(),g(" ",r[a]," \xA0 ")}}function Ye(o,y){if(o&1&&(n(0,"li"),L(1,Xe,5,2,"ng-container",7),t()),o&2){let a=y.$implicit,r=j();s(),m("ngForOf",r.changeFilter(a))}}var Le=(()=>{class o{http;poSearch;ariaLabel;customLiterals;literals;properties=[];search="";event="";service="https://po-sample-api.onrender.com/v1/heroes";items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=z.startsWith;searchMode="action";fieldKey;itemsModel;filterModel='["name"]';filterSelectModel;size="medium";customLocateSummary;locateSummary;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"showListbox",label:"Show Listbox"}];iconsOptions=[{label:"fa-search",value:"fa fa-search"},{label:"an-user",value:"an an-user"},{label:"an-magnifying-glass",value:"an an-magnifying-glass"}];filterModeOptions=[{label:"Starts With",value:z.startsWith},{label:"Contains",value:z.contains},{label:"Ends With",value:z.endsWith}];searchModeOptions=[{label:"Action",value:"action"},{label:"Trigger",value:"trigger"},{label:"Locate",value:"locate"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];constructor(a){this.http=a}ngOnInit(){this.restore()}ngOnChanges(a){a.items&&(this.filteredItems=this.items)}changeFilter(a){return Object.keys(a)}onChangeService(){this.http.get(this.service).subscribe(a=>{let r=a.items;Array.isArray(r)&&r.length>0&&(this.items=r,this.filteredItems=r,this.fieldKeys=["name"])})}updateFilterKeys(a){this.fieldKeys=this.convertToArray(a)}updateFilterSelect(a){this.fieldSelect=this.convertToArray(a)}filter(a){this.filteredItems=a,this.event=a.length===0?"p-change-model":"p-filtered-items-change"}changeItems(a){try{let r=JSON.parse(a);Array.isArray(r)&&(this.filteredItems=r,this.items=r)}catch{}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??"")}catch{this.customLiterals=void 0}}changeEvent(a){setTimeout(()=>{this.event=a})}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??"")}catch{this.customLocateSummary=void 0}}restore(){this.ariaLabel="",this.search="",this.event="",this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel='["name"]',this.filterSelectModel="",this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=z.startsWith,this.searchMode="action",this.literals=void 0,this.locateSummary=void 0,this.size="medium",this.cleanInput(),this.onChangeService()}cleanInput(){try{this.poSearch.clearSearch()}catch{}}convertToArray(a){try{return JSON.parse(a)}catch{return}}static \u0275fac=function(r){return new(r||o)(k(se))};static \u0275cmp=f({type:o,selectors:[["sample-po-search-labs"]],viewQuery:function(r,i){if(r&1&&D(Ue,7),r&2){let p;O(p=V())&&(i.poSearch=p.first)}},standalone:!1,features:[ie],decls:31,vars:33,consts:[["poSearch",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-blur","p-change-model","p-filtered-items-change","p-keydown","p-locate-next","p-locate-previous","p-aria-label","p-disabled","p-filter-keys","p-filter-type","p-filter-select","p-icon","p-items","p-literals","p-locate-summary","p-search-type","p-show-listbox","p-size"],[1,"po-md-12"],[3,"p-label"],[1,"sample-list-search","po-md-12","row"],[4,"ngFor","ngForOf"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","ariaLabel","p-label","Aria label",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","items","p-label","Items","p-help",'Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","searchMode","p-label","Search Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-label","Filter Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locateSummary","p-help",'{ "currentIndex": 1000, "total": 1000 }',"p-label","Locate Summary",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"search": "Search people"}',"p-label","Literals",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","Filter Keys","p-label","Filter Keys","p-help",'Ex.: ["cidade", "pais"]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","Filter Select","p-label","Filter Select","p-help",'Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=J();n(0,"div",2)(1,"po-search",3,0),u("p-blur",function(){return h(p),S(i.changeEvent("p-blur"))})("p-change-model",function(){return h(p),S(i.changeEvent("p-change-model"))})("p-filtered-items-change",function(){return h(p),S(i.changeEvent("p-filtered-items-change"))})("p-keydown",function(){return h(p),S(i.changeEvent("p-keydown"))})("p-locate-next",function(){return h(p),S(i.changeEvent("p-locate-next"))})("p-locate-previous",function(){return h(p),S(i.changeEvent("p-locate-previous"))}),t()(),l(3,"po-divider"),n(4,"div",2)(5,"po-accordion",4)(6,"po-accordion-item",5)(7,"po-widget",4)(8,"ul",6),L(9,Ye,2,1,"li",7),t()()()()(),l(10,"po-divider"),n(11,"div",2),l(12,"po-info",8)(13,"po-info",9),t(),l(14,"po-divider"),n(15,"form",null,1)(17,"po-input",10),w("ngModelChange",function(d){return h(p),_(i.ariaLabel,d)||(i.ariaLabel=d),S(d)}),t(),n(18,"po-input",11),w("ngModelChange",function(d){return h(p),_(i.itemsModel,d)||(i.itemsModel=d),S(d)}),u("p-change-model",function(d){return h(p),S(i.changeItems(d))}),t(),n(19,"po-checkbox-group",12),w("ngModelChange",function(d){return h(p),_(i.properties,d)||(i.properties=d),S(d)}),t(),n(20,"po-radio-group",13),w("ngModelChange",function(d){return h(p),_(i.icon,d)||(i.icon=d),S(d)}),t(),n(21,"po-radio-group",14),w("ngModelChange",function(d){return h(p),_(i.searchMode,d)||(i.searchMode=d),S(d)}),t(),n(22,"po-radio-group",15),w("ngModelChange",function(d){return h(p),_(i.filterMode,d)||(i.filterMode=d),S(d)}),t(),n(23,"po-radio-group",16),w("ngModelChange",function(d){return h(p),_(i.size,d)||(i.size=d),S(d)}),t(),n(24,"po-input",17),w("ngModelChange",function(d){return h(p),_(i.locateSummary,d)||(i.locateSummary=d),S(d)}),u("p-change",function(){return h(p),S(i.changeLocateSummary())}),t(),n(25,"po-input",18),w("ngModelChange",function(d){return h(p),_(i.literals,d)||(i.literals=d),S(d)}),u("p-change",function(){return h(p),S(i.changeLiterals())}),t(),n(26,"po-input",19),w("ngModelChange",function(d){return h(p),_(i.filterModel,d)||(i.filterModel=d),S(d)}),u("p-change-model",function(d){return h(p),S(i.updateFilterKeys(d))}),t(),n(27,"po-input",20),w("ngModelChange",function(d){return h(p),_(i.filterSelectModel,d)||(i.filterSelectModel=d),S(d)}),u("p-change",function(d){return h(p),S(i.updateFilterSelect(d))}),t(),l(28,"po-divider"),n(29,"div",2)(30,"po-button",21),u("p-click",function(){return h(p),S(i.restore())}),t()()()}r&2&&(s(),m("p-aria-label",i.ariaLabel)("p-disabled",i.properties.includes("disabled"))("p-filter-keys",i.fieldKeys)("p-filter-type",i.filterMode)("p-filter-select",i.fieldSelect)("p-icon",i.icon)("p-items",i.items)("p-literals",i.customLiterals)("p-locate-summary",i.customLocateSummary)("p-search-type",i.searchMode)("p-show-listbox",i.properties.includes("showListbox"))("p-size",i.size),s(5),re("p-label","Itens encontrados: ",i.filteredItems==null?null:i.filteredItems.length,""),s(3),m("ngForOf",i.filteredItems),s(3),m("p-value",i.search),s(),m("p-value",i.event),s(4),P("ngModel",i.ariaLabel),s(),P("ngModel",i.itemsModel),s(),P("ngModel",i.properties),m("p-options",i.propertiesOptions),s(),P("ngModel",i.icon),m("p-options",i.iconsOptions),s(),P("ngModel",i.searchMode),m("p-options",i.searchModeOptions),s(),P("ngModel",i.filterMode),m("p-options",i.filterModeOptions),s(),P("ngModel",i.size),m("p-options",i.sizeOptions),s(),P("ngModel",i.locateSummary),s(),P("ngModel",i.literals),s(),P("ngModel",i.filterModel),s(),P("ngModel",i.filterSelectModel))},dependencies:[B,X,G,U,me,pe,ge,fe,Z,Y,ve,xe,$,A,Me,F],styles:[".sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}"]})}return o})();var $e=o=>({"docs-sample-code-tabs":o}),De=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-labs-view"]],standalone:!1,decls:27,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Labs"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-labs/sample-po-search-labs.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    #poSearch
    class="po-md-12"
    [p-aria-label]="ariaLabel"
    [p-disabled]="properties.includes('disabled')"
    [p-filter-keys]="fieldKeys"
    [p-filter-type]="filterMode"
    [p-filter-select]="fieldSelect"
    [p-icon]="icon"
    [p-items]="items"
    [p-literals]="customLiterals"
    [p-locate-summary]="customLocateSummary"
    [p-search-type]="searchMode"
    [p-show-listbox]="properties.includes('showListbox')"
    [p-size]="size"
    (p-blur)="changeEvent('p-blur')"
    (p-change-model)="changeEvent('p-change-model')"
    (p-filtered-items-change)="changeEvent('p-filtered-items-change')"
    (p-keydown)="changeEvent('p-keydown')"
    (p-locate-next)="changeEvent('p-locate-next')"
    (p-locate-previous)="changeEvent('p-locate-previous')"
  ></po-search>
</div>

<po-divider />
<div class="po-row">
  <po-accordion class="po-md-12">
    <po-accordion-item p-label="Itens encontrados: { { filteredItems?.length }}">
      <po-widget class="po-md-12">
        <ul class="sample-list-search po-md-12 row">
          <li *ngFor="let item of filteredItems">
            <ng-container *ngFor="let key of changeFilter(item)">
              <div>
                <strong>{ { key }}: </strong> { { item[key] }} &nbsp;
              </div>
            </ng-container>
          </li>
        </ul>
      </po-widget>
    </po-accordion-item>
  </po-accordion>
</div>
<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="search"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<!-- Properties -->
<form #f="ngForm">
  <po-input class="po-lg-6" name="ariaLabel" p-label="Aria label" [(ngModel)]="ariaLabel"></po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="items"
    [(ngModel)]="itemsModel"
    p-label="Items"
    p-help='Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]'
    (p-change-model)="changeItems($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-6 po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group class="po-lg-6 po-md-12" name="icon" [(ngModel)]="icon" p-label="Icon" [p-options]="iconsOptions">
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="searchMode"
    [(ngModel)]="searchMode"
    p-label="Search Mode"
    [p-options]="searchModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="filterMode"
    [(ngModel)]="filterMode"
    p-label="Filter Mode"
    [p-options]="filterModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-input
    class="po-lg-6 po-md-12"
    name="locateSummary"
    [(ngModel)]="locateSummary"
    p-help='{ "currentIndex": 1000, "total": 1000 }'
    p-label="Locate Summary"
    (p-change)="changeLocateSummary()"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"search": "Search people"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="Filter Keys"
    [(ngModel)]="filterModel"
    p-label="Filter Keys"
    p-help='Ex.: ["cidade", "pais"]'
    (p-change-model)="updateFilterKeys($event)"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="Filter Select"
    [(ngModel)]="filterSelectModel"
    p-label="Filter Select"
    p-help='Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]'
    (p-change)="updateFilterSelect($event)"
  >
  </po-input>

  <po-divider />

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-labs/sample-po-search-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSearchComponent,
  PoSearchFilterMode,
  PoSearchLiterals
} from '@po-ui/ng-components';
import { PoSearchLocateSummary } from '@po-ui/ng-components/lib/components/po-search/interfaces/po-search-locate-summary.interface';

@Component({
  selector: 'sample-po-search-labs',
  templateUrl: './sample-po-search-labs.component.html',
  styles: [
    \`
      .sample-list-search {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
      }

      .sample-list-search strong {
        text-transform: capitalize;
      }
    \`
  ],
  standalone: false
})
export class SamplePoSearchLabsComponent implements OnInit, OnChanges {
  @ViewChild('poSearch', { static: true }) poSearch!: PoSearchComponent;

  ariaLabel?: any;
  customLiterals?: PoSearchLiterals;
  literals?: string;
  properties: Array<string> = [];
  search: string = '';
  event: string = '';
  service: string = 'https://po-sample-api.onrender.com/v1/heroes';
  items: Array<any> = [];
  filteredItems: Array<any> = [];
  fieldKeys?: Array<any> = [];
  fieldSelect?: Array<any> = [];
  tooltip?: string;
  icon?: string;
  filterMode: PoSearchFilterMode = PoSearchFilterMode.startsWith;
  searchMode: 'action' | 'trigger' | 'locate' = 'action';
  fieldKey?: any;
  itemsModel?: any;
  filterModel: any = '["name"]';
  filterSelectModel?: any;
  size: string = 'medium';
  customLocateSummary?: PoSearchLocateSummary;
  locateSummary?: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'showListbox', label: 'Show Listbox' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'fa-search', value: 'fa fa-search' },
    { label: 'an-user', value: 'an an-user' },
    { label: 'an-magnifying-glass', value: 'an an-magnifying-glass' }
  ];

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: PoSearchFilterMode.startsWith },
    { label: 'Contains', value: PoSearchFilterMode.contains },
    { label: 'Ends With', value: PoSearchFilterMode.endsWith }
  ];

  public readonly searchModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Action', value: 'action' },
    { label: 'Trigger', value: 'trigger' },
    { label: 'Locate', value: 'locate' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  constructor(protected http: HttpClient) {}

  ngOnInit() {
    this.restore();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.filteredItems = this.items;
    }
  }

  changeFilter(item: any) {
    return Object.keys(item);
  }

  onChangeService() {
    this.http.get(this.service).subscribe((response: any) => {
      const items = response.items;
      if (Array.isArray(items) && items.length > 0) {
        this.items = items;
        this.filteredItems = items;
        this.fieldKeys = ['name'];
      }
    });
  }

  updateFilterKeys(event: string): void {
    this.fieldKeys = this.convertToArray(event);
  }

  updateFilterSelect(event: string): void {
    this.fieldSelect = this.convertToArray(event);
  }

  filter(event: Array<any>) {
    this.filteredItems = event;

    this.event = event.length === 0 ? 'p-change-model' : 'p-filtered-items-change';
  }

  changeItems(items: string): void {
    try {
      const newItems = JSON.parse(items);
      if (Array.isArray(newItems)) {
        this.filteredItems = newItems;
        this.items = newItems;
      }
    } catch {}
  }

  changeLiterals(): void {
    try {
      this.customLiterals = JSON.parse(this.literals ?? '');
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeEvent(event: string): void {
    setTimeout(() => {
      this.event = event;
    });
  }

  changeLocateSummary(): void {
    try {
      this.customLocateSummary = JSON.parse(this.locateSummary ?? '');
    } catch {
      this.customLocateSummary = undefined;
    }
  }

  restore(): void {
    this.ariaLabel = '';
    this.search = '';
    this.event = '';
    this.icon = undefined;
    this.customLiterals = undefined;
    this.customLocateSummary = undefined;
    this.properties = [];
    this.filteredItems = undefined;
    this.items = undefined;
    this.itemsModel = undefined;
    this.filterModel = '["name"]';
    this.filterSelectModel = '';
    this.fieldKeys = undefined;
    this.fieldSelect = undefined;
    this.filterMode = PoSearchFilterMode.startsWith;
    this.searchMode = 'action';
    this.literals = undefined;
    this.locateSummary = undefined;
    this.size = 'medium';
    this.cleanInput();
    this.onChangeService();
  }

  cleanInput(): void {
    try {
      this.poSearch.clearSearch();
    } catch {}
  }

  private convertToArray(value: string): Array<any> | undefined {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-search-labs/sample-po-search-labs.service.ts"),t(),l(23,"pre",9),t()()()(),n(24,"div",10),l(25,"sample-po-search-labs"),t(),l(26,"hr")),r&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),g(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",I(4,$e,i.hideSampleCodeTabs)))},dependencies:[M,x,b,v,Le],encapsulation:2})}return o})();var ee=(()=>{class o{getItems(){return[{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(r){return new(r||o)};static \u0275prov=H({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function nt(o,y){if(o&1&&(n(0,"div",0),l(1,"po-info",5)(2,"po-info",6)(3,"po-info",7),t()),o&2){let a=y.$implicit;s(),m("p-value",a.name),s(),m("p-value",a.nickname),s(),m("p-value",a.email)}}function it(o,y){o&1&&l(0,"div")}function at(o,y){if(o&1&&(n(0,"li",8),e(1),L(2,it,1,0,"div",9),t(),n(3,"li",8),e(4),t()),o&2){let a=y.$implicit,r=j();s(),g(" Nickname: ",a.nickname," "),s(),m("ngIf",r.compareObjects(a)),s(2),g("Email: ",a.email,"")}}var Oe=(()=>{class o{service;items;filterKeys=["name","nickname","email"];peopleFiltered=[];constructor(a){this.service=a}ngOnInit(){this.items=this.service.getItems()}filtered(a){this.peopleFiltered=a,a.length===4&&(this.peopleFiltered=[])}compareObjects(a){return!!this.peopleFiltered.includes(a)}static \u0275fac=function(r){return new(r||o)(k(ee))};static \u0275cmp=f({type:o,selectors:[["sample-po-search-find-people"]],standalone:!1,features:[Q([ee])],decls:7,vars:4,consts:[[1,"po-row"],["p-aria-label","Po Search",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["class","po-row",4,"ngFor","ngForOf"],["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"],[1,"po-md-12","po-text-color-neutral-dark-40"],[4,"ngIf"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"po-search",1),u("p-filtered-items-change",function(c){return i.filtered(c)}),t()(),l(2,"hr"),L(3,nt,4,3,"div",2),l(4,"hr"),n(5,"po-list-view",3),L(6,at,5,3,"ng-template",4),t()),r&2&&(s(),m("p-items",i.items)("p-filter-keys",i.filterKeys),s(2),m("ngForOf",i.peopleFiltered),s(2),m("p-items",i.items))},dependencies:[B,le,A,we,_e,F],styles:["li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}","li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}"]})}return o})();var rt=o=>({"docs-sample-code-tabs":o}),Ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-find-people-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Find People"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-find-people/sample-po-search-find-people.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    [p-filter-keys]="filterKeys"
    (p-filtered-items-change)="filtered($event)"
  ></po-search>
</div>

<hr />

<div class="po-row" *ngFor="let people of peopleFiltered">
  <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>

  <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>

  <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
</div>

<hr />

<po-list-view p-property-title="name" [p-items]="items">
  <ng-template p-list-view-content-template let-item>
    <li class="po-md-12 po-text-color-neutral-dark-40">
      Nickname: { { item.nickname }}
      <div *ngIf="compareObjects(item)"></div>
    </li>
    <li class="po-md-12 po-text-color-neutral-dark-40">Email: { { item.email }}</li>
  </ng-template>
</po-list-view>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-find-people/sample-po-search-find-people.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { SamplePoSearchFindPeopleService } from './sample-po-search-find-people.service';

@Component({
  selector: 'sample-po-search-find-people',
  templateUrl: './sample-po-search-find-people.component.html',
  styles: [
    \`
      li {
        list-style: none;
        display: flex;
        align-items: center;
      }
    \`,
    \`
      li div {
        width: 0.75em;
        height: 0.75em;
        border-radius: 50%;
        background-color: green;
        margin-left: 10px;
      }
    \`
  ],
  providers: [SamplePoSearchFindPeopleService],
  standalone: false
})
export class SamplePoSearchFindPeopleComponent implements OnInit {
  items: any;
  filterKeys: Array<string> = ['name', 'nickname', 'email'];
  peopleFiltered: Array<any> = [];

  constructor(private service: SamplePoSearchFindPeopleService) {}

  ngOnInit() {
    this.items = this.service.getItems();
  }

  filtered(event: Array<any>) {
    this.peopleFiltered = event;
    if (event.length === 4) {
      this.peopleFiltered = [];
    } else {
      try {
      } catch (error) {
        return undefined;
      }
    }
  }

  compareObjects(value: any) {
    return this.peopleFiltered.includes(value) ? true : false;
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-search-find-people/sample-po-search-find-people.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSearchFindPeopleService {
  getItems(): Array<any> {
    return [
      {
        'id': '0348093615904',
        'name': 'Leonardo Silveiras',
        'birthdate': '1995-07-15T00:00:00-00:00',
        'genre': 'male',
        'city': '4209102',
        'status': 'active',
        'nickname': 'leo.silveira',
        'email': 'leonardo.silveira@gmail.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'Joinville',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': []
      },
      {
        'id': '0648093812893',
        'name': 'Jo\xE3o Severino',
        'birthdate': '1995-10-07T00:00:00-00:00',
        'genre': 'male',
        'city': '4216206',
        'status': 'active',
        'nickname': 'jseverino',
        'email': 'jseverino@yahoo.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Francisco do Sul',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [{ 'id': 109481, 'name': 'Maria', 'age': '10', 'related': 'Daughter', 'birthdate': '2008-12-10' }]
      },
      {
        'id': '0748093840433',
        'name': 'Jos\xE9 Marcos Cardoso',
        'birthdate': '1986-08-01T00:00:00-00:00',
        'genre': 'male',
        'city': '4201307',
        'status': 'inactive',
        'nickname': 'jose',
        'email': 'jose@outlook.com',
        'nationality': 'Brazilian',
        'birthPlace': '3550308',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Inativo',
        'cityName': 'Araquari',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [
          { 'id': 109483, 'name': 'Pedro', 'age': '13', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109484, 'name': 'Paulo', 'age': '15', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109485, 'name': 'Jos\xE9', 'age': '19', 'related': 'Son', 'birthdate': '2008-12-10' }
        ]
      },
      {
        'id': '0848094890811',
        'name': 'Karlo Rodrigues',
        'birthdate': '1989-12-28T00:00:00-00:00',
        'genre': 'male',
        'city': '3550308',
        'status': 'active',
        'nickname': 'krodrigues',
        'email': 'krodrigues@uol.com.br',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Paulo',
        'state': 'S\xE3o Paulo',
        'uf': 'SP',
        'dependents': []
      }
    ];
  }
}
`),t()()()()(),n(25,"div",10),l(26,"sample-po-search-find-people"),t(),l(27,"hr")),r&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),g(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",I(4,rt,i.hideSampleCodeTabs)))},dependencies:[M,x,b,v,Oe],encapsulation:2})}return o})();var te=(()=>{class o{getItems(){return[{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(r){return new(r||o)};static \u0275prov=H({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function pt(o,y){if(o&1&&(n(0,"div",0),l(1,"hr")(2,"po-info",3)(3,"po-info",4)(4,"po-info",5),t()),o&2){let a=y.$implicit;s(2),m("p-value",a.name),s(),m("p-value",a.nickname),s(),m("p-value",a.email)}}var Ae=(()=>{class o{service;items;filterKeys=["name","nickname","email"];peopleFiltered=[];constructor(a){this.service=a}ngOnInit(){this.items=this.service.getItems()}filtered(a){this.peopleFiltered=a,a.length===4&&(this.peopleFiltered=[])}compareObjects(a){return!!this.peopleFiltered.includes(a)}static \u0275fac=function(r){return new(r||o)(k(te))};static \u0275cmp=f({type:o,selectors:[["sample-po-search-listbox"]],standalone:!1,features:[Q([te])],decls:3,vars:3,consts:[[1,"po-row"],["p-aria-label","Po Search","p-show-listbox","true","p-search-type","trigger",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["class","po-row",4,"ngFor","ngForOf"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"po-search",1),u("p-filtered-items-change",function(c){return i.filtered(c)}),t()(),L(2,pt,5,3,"div",2)),r&2&&(s(),m("p-items",i.items)("p-filter-keys",i.filterKeys),s(),m("ngForOf",i.peopleFiltered))},dependencies:[B,A,F],encapsulation:2})}return o})();var dt=o=>({"docs-sample-code-tabs":o}),qe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-listbox-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search With Listbox"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-listbox/sample-po-search-listbox.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    [p-filter-keys]="filterKeys"
    (p-filtered-items-change)="filtered($event)"
    p-show-listbox="true"
    p-search-type="trigger"
  ></po-search>
</div>

<div class="po-row" *ngFor="let people of peopleFiltered">
  <hr />
  <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
  <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
  <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-listbox/sample-po-search-listbox.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { SamplePoSearchListboxService } from './sample-po-search-listbox.service';

@Component({
  selector: 'sample-po-search-listbox',
  templateUrl: './sample-po-search-listbox.component.html',
  providers: [SamplePoSearchListboxService],
  standalone: false
})
export class SamplePoSearchListboxComponent implements OnInit {
  items: any;
  filterKeys: Array<string> = ['name', 'nickname', 'email'];
  peopleFiltered: Array<any> = [];

  constructor(private service: SamplePoSearchListboxService) {}

  ngOnInit() {
    this.items = this.service.getItems();
  }

  filtered(event: Array<any>) {
    this.peopleFiltered = event;
    if (event.length === 4) {
      this.peopleFiltered = [];
    } else {
      try {
      } catch (error) {
        return undefined;
      }
    }
  }

  compareObjects(value: any) {
    return this.peopleFiltered.includes(value) ? true : false;
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-search-listbox/sample-po-search-listbox.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSearchListboxService {
  getItems(): Array<any> {
    return [
      {
        'id': '0348093615904',
        'name': 'Leonardo Silveiras',
        'birthdate': '1995-07-15T00:00:00-00:00',
        'genre': 'male',
        'city': '4209102',
        'status': 'active',
        'nickname': 'leo.silveira',
        'email': 'leonardo.silveira@gmail.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'Joinville',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': []
      },
      {
        'id': '0648093812893',
        'name': 'Jo\xE3o Severino',
        'birthdate': '1995-10-07T00:00:00-00:00',
        'genre': 'male',
        'city': '4216206',
        'status': 'active',
        'nickname': 'jseverino',
        'email': 'jseverino@yahoo.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Francisco do Sul',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [{ 'id': 109481, 'name': 'Maria', 'age': '10', 'related': 'Daughter', 'birthdate': '2008-12-10' }]
      },
      {
        'id': '0748093840433',
        'name': 'Jos\xE9 Marcos Cardoso',
        'birthdate': '1986-08-01T00:00:00-00:00',
        'genre': 'male',
        'city': '4201307',
        'status': 'inactive',
        'nickname': 'jose',
        'email': 'jose@outlook.com',
        'nationality': 'Brazilian',
        'birthPlace': '3550308',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Inativo',
        'cityName': 'Araquari',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [
          { 'id': 109483, 'name': 'Pedro', 'age': '13', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109484, 'name': 'Paulo', 'age': '15', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109485, 'name': 'Jos\xE9', 'age': '19', 'related': 'Son', 'birthdate': '2008-12-10' }
        ]
      },
      {
        'id': '0848094890811',
        'name': 'Karlo Rodrigues',
        'birthdate': '1989-12-28T00:00:00-00:00',
        'genre': 'male',
        'city': '3550308',
        'status': 'active',
        'nickname': 'krodrigues',
        'email': 'krodrigues@uol.com.br',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Paulo',
        'state': 'S\xE3o Paulo',
        'uf': 'SP',
        'dependents': []
      }
    ];
  }
}
`),t()()()()(),n(25,"div",10),l(26,"sample-po-search-listbox"),t(),l(27,"hr")),r&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),g(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",I(4,dt,i.hideSampleCodeTabs)))},dependencies:[M,x,b,v,Ae],encapsulation:2})}return o})();function ut(o,y){if(o&1&&(n(0,"div",0)(1,"po-container",3),l(2,"po-info",4)(3,"po-info",5)(4,"po-info",6)(5,"po-info",7),t()()),o&2){let a=y.$implicit;s(2),m("p-value",a.name),s(),m("p-value",a.gender),s(),m("p-value",a.planet),s(),m("p-value",a.father)}}var Be=(()=>{class o{items;filteredItems=[];filterSelect=[{label:"Personal",value:["name","gender"]},{label:"Planet",value:["planet"]},{label:"Family",value:"father"}];ngOnInit(){this.items=[{name:"Anakin Skywalker",gender:"male",planet:"Tatooine",father:"Darth Sidious"},{name:"Luke Skywalker",gender:"male",planet:"Tatooine",father:"Anakin Skywalker"},{name:"Leia Organa",gender:"female",planet:"Alderaan",father:"Anakin Skywalker"},{name:"Han Solo",gender:"male",planet:"Corellia",father:"Ovan"}]}filtered(a){this.filteredItems=a}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-filter-select"]],standalone:!1,decls:3,vars:3,consts:[[1,"po-row"],["p-aria-label","Po Search","p-search-type","trigger","p-show-listbox","true","p-disabled","false",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-select"],["class","po-row",4,"ngFor","ngForOf"],[1,"po-row","po-mt-2"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Gender",1,"po-md-3",3,"p-value"],["p-label","Planet",1,"po-md-3",3,"p-value"],["p-label","Father",1,"po-md-3",3,"p-value"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"po-search",1),u("p-filtered-items-change",function(c){return i.filtered(c)}),t()(),L(2,ut,6,4,"div",2)),r&2&&(s(),m("p-items",i.items)("p-filter-select",i.filterSelect),s(),m("ngForOf",i.filteredItems))},dependencies:[B,be,A,F],encapsulation:2})}return o})();var St=o=>({"docs-sample-code-tabs":o}),Ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-filter-select-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search With Filter Select + Listbox"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-filter-select/sample-po-search-filter-select.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    (p-filtered-items-change)="filtered($event)"
    p-search-type="trigger"
    [p-filter-select]="filterSelect"
    p-show-listbox="true"
    p-disabled="false"
  ></po-search>
</div>

<div class="po-row" *ngFor="let people of filteredItems">
  <po-container class="po-row po-mt-2">
    <po-info class="po-md-3" p-label="Name" [p-value]="people.name"> </po-info>
    <po-info class="po-md-3" p-label="Gender" [p-value]="people.gender"> </po-info>
    <po-info class="po-md-3" p-label="Planet" [p-value]="people.planet"> </po-info>
    <po-info class="po-md-3" p-label="Father" [p-value]="people.father"> </po-info>
  </po-container>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-filter-select/sample-po-search-filter-select.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-po-search-filter-select',
  templateUrl: './sample-po-search-filter-select.component.html',
  standalone: false
})
export class SamplePoSearchFilterSelectComponent implements OnInit {
  items: any;
  filteredItems: Array<any> = [];
  filterSelect = [
    { label: 'Personal', value: ['name', 'gender'] },
    { label: 'Planet', value: ['planet'] },
    { label: 'Family', value: 'father' }
  ];

  ngOnInit() {
    this.items = [
      { name: 'Anakin Skywalker', gender: 'male', planet: 'Tatooine', father: 'Darth Sidious' },
      { name: 'Luke Skywalker', gender: 'male', planet: 'Tatooine', father: 'Anakin Skywalker' },
      { name: 'Leia Organa', gender: 'female', planet: 'Alderaan', father: 'Anakin Skywalker' },
      { name: 'Han Solo', gender: 'male', planet: 'Corellia', father: 'Ovan' }
    ];
  }

  filtered(event: Array<any>) {
    this.filteredItems = event;
  }
}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-search-filter-select"),t(),l(23,"hr")),r&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),g(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",I(4,St,i.hideSampleCodeTabs)))},dependencies:[M,x,b,v,Be],encapsulation:2})}return o})();var gt=["nameInput"],Et=["cpfInput"],bt=["addressInput"],vt=["numberInput"],xt=["emailInput"],yt=["websiteInput"],Ct=["reactiveFormData"],ze=(()=>{class o{fb;nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;currentIndexHighlight=-1;highlightEnabled=!1;locateSummary={currentIndex:0,total:0};filterType=z.endsWith;searchLiterals={search:"Buscar campos"};modalPrimaryAction={label:"Close",action:()=>this.reactiveFormModal.close()};constructor(a){this.fb=a,this.createForm()}ngAfterViewInit(){this.filterTargets=[{label:"Customer name",index:0,focus:()=>this.nameInput.focus()},{label:"CPF",index:1,focus:()=>this.cpfInput.focus()},{label:"Address",index:2,focus:()=>this.addressInput.focus()},{label:"Number",index:3,focus:()=>this.numberInput.focus()},{label:"Email",index:4,focus:()=>this.emailInput.focus()},{label:"Website",index:5,focus:()=>this.websiteInput.focus()}]}createForm(){this.reactiveForm=this.fb.group({name:["",[N.required,N.minLength(5)]],cpf:["",N.required],address:["",N.required],number:["",N.required],email:["",N.required],website:["",N.required]})}updateSearchTerm(a){let r=a.toLowerCase();this.filteredIndexes=this.filterTargets.map((i,p)=>({i:p,t:i})).filter(({t:i})=>r&&i.label.toLowerCase().startsWith(r)).map(({i})=>i),r&&this.filteredIndexes.length>0?(this.currentIndex=0,this.highlightEnabled=!0,this.highlightCurrent()):(this.currentIndex=-1,this.clearHighlight()),this.updateSummary()}onSearchKeydown(a){a.key==="ArrowDown"?(this.highlightEnabled=!0,this.goToNextOccurrence(),a.preventDefault()):a.key==="ArrowUp"?(this.highlightEnabled=!0,this.goToPreviousOccurrence(),a.preventDefault()):a.key==="Enter"&&(this.focusCurrent(),this.highlightEnabled=!1,this.clearHighlight(),a.preventDefault())}onNextOccurrenceClick(){this.goToNextOccurrence(),this.focusCurrent(),this.clearHighlight()}onPreviousOccurrenceClick(){this.goToPreviousOccurrence(),this.focusCurrent(),this.clearHighlight()}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.highlightCurrent(),this.updateSummary())}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.highlightCurrent(),this.updateSummary())}updateSummary(){let a=this.filteredIndexes.length,r=a===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:r,total:a}}highlightCurrent(){if(!this.highlightEnabled)return;let a=this.filteredIndexes[this.currentIndex];this.currentIndexHighlight=a??-1,a!==void 0&&this.highlightField(a)}highlightField(a){this.filterTargets.forEach(i=>{let p=this.getInputElementByIndex(i.index);p&&(p.style.outline="",p.style.outlineOffset="",p.style.borderRadius="")});let r=this.getInputElementByIndex(a);r&&(r.style.outline="2px solid purple",r.style.outlineOffset="2px",r.style.borderRadius="4px")}clearHighlight(){this.highlightEnabled=!1,this.currentIndexHighlight=-1,this.filterTargets.forEach(a=>{let r=this.getInputElementByIndex(a.index);r&&(r.style.outline="",r.style.outlineOffset="",r.style.borderRadius="")})}focusCurrent(){let a=this.filteredIndexes[this.currentIndex];a!==void 0&&(document.activeElement?.blur(),this.filterTargets[a].focus())}getInputElementByIndex(a){switch(a){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open()}onSearchBlur(){this.clearHighlight()}static \u0275fac=function(r){return new(r||o)(k(ue))};static \u0275cmp=f({type:o,selectors:[["sample-po-search-fields-locate"]],viewQuery:function(r,i){if(r&1&&(D(gt,7),D(Et,7),D(bt,7),D(vt,7),D(xt,7),D(yt,7),D(Ct,7)),r&2){let p;O(p=V())&&(i.nameInput=p.first),O(p=V())&&(i.cpfInput=p.first),O(p=V())&&(i.addressInput=p.first),O(p=V())&&(i.numberInput=p.first),O(p=V())&&(i.emailInput=p.first),O(p=V())&&(i.websiteInput=p.first),O(p=V())&&(i.reactiveFormModal=p.first)}},standalone:!1,decls:33,vars:11,consts:[["nameInput",""],["cpfInput",""],["addressInput",""],["numberInput",""],["emailInput",""],["websiteInput",""],["reactiveFormData",""],["p-search-type","locate",3,"p-blur","p-change-model","p-keydown","p-locate-next","p-locate-previous","p-literals","p-locate-summary"],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-9"],["formControlName","cpf","p-label","CPF","p-mask","999.999.999-99","p-clean","",1,"po-lg-3"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-lg-6",3,"p-value"],["p-label","CPF",1,"po-lg-6",3,"p-value"],["p-label","Address",1,"po-lg-6",3,"p-value"],["p-label","Number",1,"po-lg-6",3,"p-value"],["p-label","Email",1,"po-lg-6",3,"p-value"],["p-label","Website",1,"po-lg-6",3,"p-value"]],template:function(r,i){if(r&1){let p=J();n(0,"po-search",7),u("p-blur",function(){return h(p),S(i.onSearchBlur())})("p-change-model",function(d){return h(p),S(i.updateSearchTerm(d))})("p-keydown",function(d){return h(p),S(i.onSearchKeydown(d))})("p-locate-next",function(){return h(p),S(i.onNextOccurrenceClick())})("p-locate-previous",function(){return h(p),S(i.onPreviousOccurrenceClick())}),t(),l(1,"po-divider"),n(2,"form",8)(3,"div",9),l(4,"po-input",10,0)(6,"po-input",11,1),t(),n(8,"div",9),l(9,"po-input",12,2)(11,"po-number",13,3),t(),n(13,"div",9),l(14,"po-email",14,4)(16,"po-url",15,5),t(),n(18,"div",9)(19,"po-button",16),u("p-click",function(){return h(p),S(i.saveForm())}),t()()(),n(20,"po-modal",17,6)(22,"div",9),l(23,"po-info",18)(24,"po-info",19),t(),l(25,"po-divider"),n(26,"div",9),l(27,"po-info",20)(28,"po-info",21),t(),l(29,"po-divider"),n(30,"div",9),l(31,"po-info",22)(32,"po-info",23),t()()}r&2&&(m("p-literals",i.searchLiterals)("p-locate-summary",i.locateSummary),s(2),m("formGroup",i.reactiveForm),s(17),m("p-disabled",!i.reactiveForm.valid),s(),m("p-primary-action",i.modalPrimaryAction),s(3),m("p-value",i.reactiveForm.controls.name.value),s(),m("p-value",i.reactiveForm.controls.cpf.value),s(3),m("p-value",i.reactiveForm.controls.address.value),s(),m("p-value",i.reactiveForm.controls.number.value),s(3),m("p-value",i.reactiveForm.controls.email.value),s(),m("p-value",i.reactiveForm.controls.website.value))},dependencies:[X,G,U,de,ce,Z,Y,ye,$,Ce,Pe,A,Ee,F],encapsulation:2})}return o})();var _t=o=>({"docs-sample-code-tabs":o}),We=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-fields-locate-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Form Fields with Locate"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.html"),t(),n(13,"pre",7),e(14,`<po-search
  p-search-type="locate"
  [p-literals]="searchLiterals"
  [p-locate-summary]="locateSummary"
  (p-blur)="onSearchBlur()"
  (p-change-model)="updateSearchTerm($event)"
  (p-keydown)="onSearchKeydown($event)"
  (p-locate-next)="onNextOccurrenceClick()"
  (p-locate-previous)="onPreviousOccurrenceClick()"
>
</po-search>

<po-divider></po-divider>

<form [formGroup]="reactiveForm">
  <div class="po-row">
    <po-input #nameInput class="po-lg-9" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name">
    </po-input>

    <po-input #cpfInput class="po-lg-3" formControlName="cpf" p-label="CPF" p-mask="999.999.999-99" p-clean> </po-input>
  </div>

  <div class="po-row">
    <po-input #addressInput class="po-lg-9" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address">
    </po-input>

    <po-number #numberInput class="po-lg-3" formControlName="number" p-label="Number" p-clean> </po-number>
  </div>

  <div class="po-row">
    <po-email #emailInput class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-url #websiteInput class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
  </div>
</form>

<po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
  <div class="po-row">
    <po-info class="po-lg-6" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>

    <po-info class="po-lg-6" p-label="CPF" [p-value]="reactiveForm.controls.cpf.value"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-lg-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

    <po-info class="po-lg-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-lg-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

    <po-info class="po-lg-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts"),t(),n(19,"pre",9),e(20,`import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {
  PoEmailComponent,
  PoInputComponent,
  PoModalAction,
  PoModalComponent,
  PoNumberComponent,
  PoSearchFilterMode,
  PoSearchLiterals,
  PoUrlComponent
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-fields-locate',
  templateUrl: './sample-po-search-fields-locate.component.html',
  standalone: false
})
export class SamplePoSearchFieldsLocateComponent implements AfterViewInit {
  @ViewChild('nameInput', { static: true }) nameInput!: PoInputComponent;
  @ViewChild('cpfInput', { static: true }) cpfInput!: PoInputComponent;
  @ViewChild('addressInput', { static: true }) addressInput!: PoInputComponent;
  @ViewChild('numberInput', { static: true }) numberInput!: PoNumberComponent;
  @ViewChild('emailInput', { static: true }) emailInput!: PoEmailComponent;
  @ViewChild('websiteInput', { static: true }) websiteInput!: PoUrlComponent;
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal!: PoModalComponent;

  reactiveForm!: UntypedFormGroup;

  filterTargets: Array<{ label: string; index: number; focus: () => void }> = [];
  filteredIndexes: Array<number> = [];
  currentIndex: number = -1;
  currentIndexHighlight: number = -1;
  highlightEnabled: boolean = false;

  locateSummary: { currentIndex: number; total: number } = { currentIndex: 0, total: 0 };
  filterType: PoSearchFilterMode = PoSearchFilterMode.endsWith;
  searchLiterals: PoSearchLiterals = { search: 'Buscar campos' };
  modalPrimaryAction: PoModalAction = {
    label: 'Close',
    action: () => this.reactiveFormModal.close()
  };

  constructor(protected fb: UntypedFormBuilder) {
    this.createForm();
  }

  ngAfterViewInit() {
    this.filterTargets = [
      { label: 'Customer name', index: 0, focus: () => this.nameInput.focus() },
      { label: 'CPF', index: 1, focus: () => this.cpfInput.focus() },
      { label: 'Address', index: 2, focus: () => this.addressInput.focus() },
      { label: 'Number', index: 3, focus: () => this.numberInput.focus() },
      { label: 'Email', index: 4, focus: () => this.emailInput.focus() },
      { label: 'Website', index: 5, focus: () => this.websiteInput.focus() }
    ];
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      cpf: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  // Atualiza os campos filtrados conforme o termo digitado
  updateSearchTerm(term: string) {
    const value = term.toLowerCase();

    this.filteredIndexes = this.filterTargets
      .map((t, i) => ({ i, t }))
      .filter(({ t }) => value && t.label.toLowerCase().startsWith(value))
      .map(({ i }) => i);

    if (value && this.filteredIndexes.length > 0) {
      this.currentIndex = 0;
      this.highlightEnabled = true;
      this.highlightCurrent();
    } else {
      this.currentIndex = -1;
      this.clearHighlight();
    }

    this.updateSummary();
  }

  // Navega\xE7\xE3o por teclado
  onSearchKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.highlightEnabled = true;
      this.goToNextOccurrence();
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      this.highlightEnabled = true;
      this.goToPreviousOccurrence();
      event.preventDefault();
    } else if (event.key === 'Enter') {
      this.focusCurrent();
      this.highlightEnabled = false;
      this.clearHighlight();
      event.preventDefault();
    }
  }

  // Navega\xE7\xE3o pelos bot\xF5es
  onNextOccurrenceClick() {
    this.goToNextOccurrence();
    this.focusCurrent();
    this.clearHighlight();
  }

  onPreviousOccurrenceClick() {
    this.goToPreviousOccurrence();
    this.focusCurrent();
    this.clearHighlight();
  }

  goToNextOccurrence() {
    if (!this.filteredIndexes.length) return;

    this.currentIndex = (this.currentIndex + 1) % this.filteredIndexes.length;
    this.highlightCurrent();
    this.updateSummary();
  }

  goToPreviousOccurrence() {
    if (!this.filteredIndexes.length) return;

    this.currentIndex = this.currentIndex <= 0 ? this.filteredIndexes.length - 1 : this.currentIndex - 1;
    this.highlightCurrent();
    this.updateSummary();
  }

  updateSummary() {
    const total = this.filteredIndexes.length;
    const current = total === 0 || this.currentIndex === -1 ? 0 : this.currentIndex + 1;

    this.locateSummary = {
      currentIndex: current,
      total: total
    };
  }

  // Aplica o outline visual no campo destacado
  highlightCurrent() {
    if (!this.highlightEnabled) return;

    const index = this.filteredIndexes[this.currentIndex];
    this.currentIndexHighlight = index ?? -1;
    if (index !== undefined) {
      this.highlightField(index);
    }
  }

  highlightField(index: number) {
    // Remove outline de todos
    this.filterTargets.forEach(t => {
      const inputEl = this.getInputElementByIndex(t.index);
      if (inputEl) {
        inputEl.style.outline = '';
        inputEl.style.outlineOffset = '';
        inputEl.style.borderRadius = '';
      }
    });

    // Aplica outline no campo atual
    const el = this.getInputElementByIndex(index);
    if (el) {
      el.style.outline = '2px solid purple';
      el.style.outlineOffset = '2px';
      el.style.borderRadius = '4px';
    }
  }

  clearHighlight() {
    this.highlightEnabled = false;
    this.currentIndexHighlight = -1;
    // Remove outline de todos
    this.filterTargets.forEach(t => {
      const inputEl = this.getInputElementByIndex(t.index);
      if (inputEl) {
        inputEl.style.outline = '';
        inputEl.style.outlineOffset = '';
        inputEl.style.borderRadius = '';
      }
    });
  }

  // Foca o campo selecionado
  focusCurrent() {
    const index = this.filteredIndexes[this.currentIndex];
    if (index !== undefined) {
      (document.activeElement as HTMLElement)?.blur();
      this.filterTargets[index].focus();
    }
  }

  // Obt\xEAm o elemento real do campo
  getInputElementByIndex(index: number): HTMLElement | null {
    switch (index) {
      case 0:
        return this.nameInput?.inputEl?.nativeElement ?? null;
      case 1:
        return this.cpfInput?.inputEl?.nativeElement ?? null;
      case 2:
        return this.addressInput?.inputEl?.nativeElement ?? null;
      case 3:
        return this.numberInput?.inputEl?.nativeElement ?? null;
      case 4:
        return this.emailInput?.inputEl?.nativeElement ?? null;
      case 5:
        return this.websiteInput?.inputEl?.nativeElement ?? null;
      default:
        return null;
    }
  }

  saveForm() {
    this.reactiveFormModal.open();
  }

  onSearchBlur() {
    this.clearHighlight();
  }
}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-search-fields-locate"),t(),l(23,"hr")),r&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),g(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",I(4,_t,i.hideSampleCodeTabs)))},dependencies:[M,x,b,v,ze],encapsulation:2})}return o})();var je=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-doc"]],standalone:!1,decls:1234,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoSearchFilterSelect[]"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoSearchLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoSearchLocateSummary"],[1,"language-ts"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","searchMode"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoSearchModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-search."),t()(),n(7,"h3",3),e(8,"Componente"),t(),n(9,"h4",4)(10,"code",5),e(11,"PoSearchComponent"),t()(),n(12,"div",2)(13,"p"),e(14,"O componente search, tamb\xE9m conhecido como barra de pesquisa, \xE9 utilizado para ajudar os usu\xE1rios a localizar um determinado conte\xFAdo."),t(),n(15,"p"),e(16,"Normalmente localizado no canto superior direito, junto com o \xEDcone de lupa, uma vez que este \xEDcone \xE9 amplamente reconhecido."),t(),n(17,"h4"),e(18,"Boas pr\xE1ticas"),t(),n(19,"p"),e(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),t(),n(21,"ul")(22,"li"),e(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),t(),n(24,"li"),e(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),t(),n(26,"li"),e(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),t(),n(28,"li"),e(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),t(),n(30,"li"),e(31,"Quando apropriado, destaque os termos da busca nos resultados."),t(),n(32,"li"),e(33,"A entrada do campo de pesquisa deve caber em uma linha. N\xE3o use entradas de pesquisa de v\xE1rias linhas."),t(),n(34,"li"),e(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),t(),n(36,"li"),e(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),t()(),n(38,"h4"),e(39,"Acessibilidade tratada no componente"),t(),n(40,"p"),e(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),t(),n(42,"ul")(43,"li"),e(44,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),t(),n(45,"li"),e(46,"Altera\xE7\xE3o entre os estados precisa ser indicada por mais de um elemento al\xE9m da cor (1.4.1: Use of Color);"),t()(),n(47,"h4"),e(48,"Tokens customiz\xE1veis"),t(),n(49,"p"),e(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(51,"blockquote")(52,"p"),e(53,"Para maiores informa\xE7\xF5es, acesse o guia "),n(54,"a",6),e(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(56,"."),t()(),n(57,"table")(58,"thead")(59,"tr")(60,"th"),e(61,"Propriedade"),t(),n(62,"th"),e(63,"Descri\xE7\xE3o"),t(),n(64,"th"),e(65,"Valor Padr\xE3o"),t()()(),n(66,"tbody")(67,"tr")(68,"td")(69,"strong"),e(70,"Default Values"),t()(),l(71,"td")(72,"td"),t(),n(73,"tr")(74,"td")(75,"code"),e(76,"--font-family"),t()(),n(77,"td"),e(78,"Fam\xEDlia tipogr\xE1fica do campo"),t(),n(79,"td")(80,"code"),e(81,"var(--font-family-theme)"),t()()(),n(82,"tr")(83,"td")(84,"code"),e(85,"--font-size"),t()(),n(86,"td"),e(87,"Tamanho da fonte do campo"),t(),n(88,"td")(89,"code"),e(90,"var(--font-size-default)"),t()()(),n(91,"tr")(92,"td")(93,"code"),e(94,"--text-color-placeholder"),t()(),n(95,"td"),e(96,"Cor do texto no placeholder"),t(),n(97,"td")(98,"code"),e(99,"var(--color-neutral-light-30)"),t()()(),n(100,"tr")(101,"td")(102,"code"),e(103,"--color"),t()(),n(104,"td"),e(105,"Cor das bordas"),t(),n(106,"td")(107,"code"),e(108,"var(--color-neutral-dark-70)"),t()()(),n(109,"tr")(110,"td")(111,"code"),e(112,"--border-radius"),t()(),n(113,"td"),e(114,"Raio das bordas"),t(),n(115,"td")(116,"code"),e(117,"var(--border-radius-md)"),t()()(),n(118,"tr")(119,"td")(120,"code"),e(121,"--background"),t()(),n(122,"td"),e(123,"Cor de background"),t(),n(124,"td")(125,"code"),e(126,"var(--color-neutral-light-05)"),t()()(),n(127,"tr")(128,"td")(129,"code"),e(130,"--text-color"),t()(),n(131,"td"),e(132,"Cor do texto edit\xE1vel"),t(),n(133,"td")(134,"code"),e(135,"var(--color-neutral-dark-90)"),t()()(),n(136,"tr")(137,"td")(138,"code"),e(139,"--color-clear"),t()(),n(140,"td"),e(141,"Cor do \xEDcone close"),t(),n(142,"td")(143,"code"),e(144,"var(--color-action-default)"),t()()(),n(145,"tr")(146,"td")(147,"code"),e(148,"--color-controls"),t()(),n(149,"td"),e(150,"Cor dos \xEDcones de controle do mode location"),t(),n(151,"td")(152,"code"),e(153,"var(--color-action-default)"),t()()(),n(154,"tr")(155,"td")(156,"code"),e(157,"--transition-property"),t()(),n(158,"td"),e(159,"Atributo da transi\xE7\xE3o"),t(),n(160,"td")(161,"code"),e(162,"all"),t()()(),n(163,"tr")(164,"td")(165,"code"),e(166,"--transition-duration"),t()(),n(167,"td"),e(168,"Dura\xE7\xE3o da transi\xE7\xE3o"),t(),n(169,"td")(170,"code"),e(171,"var(--duration-extra-fast)"),t()()(),n(172,"tr")(173,"td")(174,"code"),e(175,"--transition-timing"),t()(),n(176,"td"),e(177,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),t(),n(178,"td")(179,"code"),e(180,"var(--timing-standart)"),t()()(),n(181,"tr")(182,"td")(183,"strong"),e(184,"Icon"),t()(),l(185,"td")(186,"td"),t(),n(187,"tr")(188,"td")(189,"code"),e(190,"--color-icon-read"),t()(),n(191,"td"),e(192,"Cor do \xEDcone de busca no modo action"),t(),n(193,"td")(194,"code"),e(195,"var(--color-neutral-dark-70)"),t()()(),n(196,"tr")(197,"td")(198,"code"),e(199,"--color-icon"),t()(),n(200,"td"),e(201,"Cor do \xEDcone de busca no modo trigger"),t(),n(202,"td")(203,"code"),e(204,"var(--color-action-default)"),t()()(),n(205,"tr")(206,"td")(207,"strong"),e(208,"Hover"),t()(),l(209,"td")(210,"td"),t(),n(211,"tr")(212,"td")(213,"code"),e(214,"--color-hover"),t()(),n(215,"td"),e(216,"Cor das bordas no estado hover"),t(),n(217,"td")(218,"code"),e(219,"var(--color-action-hover)"),t()()(),n(220,"tr")(221,"td")(222,"code"),e(223,"--background-hover"),t()(),n(224,"td"),e(225,"Cor de background no estado hover"),t(),n(226,"td")(227,"code"),e(228,"var(--color-brand-01-lightest)"),t()()(),n(229,"tr")(230,"td")(231,"strong"),e(232,"Focused"),t()(),l(233,"td")(234,"td"),t(),n(235,"tr")(236,"td")(237,"code"),e(238,"--color-focused"),t()(),n(239,"td"),e(240,"Cor das bordas no estado de focus"),t(),n(241,"td")(242,"code"),e(243,"var(--color-action-default)"),t()()(),n(244,"tr")(245,"td")(246,"code"),e(247,"--outline-color-focused"),t()(),n(248,"td"),e(249,"Cor do outline no estado de focus"),t(),n(250,"td")(251,"code"),e(252,"var(--color-action-focus)"),t()()(),n(253,"tr")(254,"td")(255,"strong"),e(256,"Disabled"),t()(),l(257,"td")(258,"td"),t(),n(259,"tr")(260,"td")(261,"code"),e(262,"--color-disabled"),t()(),n(263,"td"),e(264,"Cor principal no estado disabled"),t(),n(265,"td")(266,"code"),e(267,"var(--color-action-disabled)"),t()()(),n(268,"tr")(269,"td")(270,"code"),e(271,"--background-disabled"),t()(),n(272,"td"),e(273,"Cor de background no estado disabled"),t(),n(274,"td")(275,"code"),e(276,"var(--color-neutral-light-20)"),t()()()()()(),n(277,"div",7)(278,"h4",8),e(279,"Seletor"),t(),n(280,"pre",9),e(281,`<po-search
    p-aria-label="string"
    (p-blur)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-disabled="boolean"
    (p-filter)="EventEmitter"
    p-filter-keys="Array<any>"
    p-filter-select="PoSearchFilterSelect[]"
    p-filter-type="PoSearchFilterMode"
    (p-filtered-items-change)="EventEmitter"
    p-icon="string | TemplateRef<void>"
    p-items="Array<any>"
    (p-keydown)="EventEmitter"
    (p-listbox-onclick)="EventEmitter"
    p-literals="PoSearchLiterals"
    (p-locate-next)="EventEmitter"
    (p-locate-previous)="EventEmitter"
    p-locate-summary="PoSearchLocateSummary"
    p-show-listbox="boolean"
    p-size="string"
    p-search-type="searchMode" >
</po-search>
`),t()(),n(282,"h4",10),e(283,"Propriedades"),t(),n(284,"table",11)(285,"tr",12)(286,"th",13),e(287,"Nome"),t(),n(288,"th",13),e(289,"Tipo"),t(),n(290,"th",13),e(291,"Padr\xE3o"),t(),n(292,"th",13),e(293,"Descri\xE7\xE3o"),t()(),n(294,"tr",14)(295,"td",15)(296,"div",16)(297,"span",17),e(298," p-aria-label"),l(299,"br"),t()()(),n(300,"td",18)(301,"code",19),e(302,"string"),t()(),n(303,"td",20),e(304,"-"),t(),n(305,"td",21)(306,"em")(307,"strong"),e(308,"(opcional)"),t()(),n(309,"p"),e(310,"Define um aria-label para o po-search."),t(),n(311,"blockquote")(312,"p"),e(313,"Devido o componente n\xE3o possuir uma label assim como outros campos de texto, o "),n(314,"code"),e(315,"aria-label"),t(),e(316,` \xE9 utilizado para
acessibilidade.`),t()()()(),n(317,"tr",14)(318,"td",15)(319,"div",22)(320,"span",23),e(321," (p-blur)"),l(322,"br"),t()()(),n(323,"td",18)(324,"code",24),e(325,"EventEmitter"),t()(),n(326,"td",20),e(327,"-"),t(),n(328,"td",21)(329,"em")(330,"strong"),e(331,"(opcional)"),t()(),n(332,"p"),e(333,"Evento disparado ao sair do campo."),t()()(),n(334,"tr",14)(335,"td",15)(336,"div",22)(337,"span",23),e(338," (p-change-model)"),l(339,"br"),t()()(),n(340,"td",18)(341,"code",24),e(342,"EventEmitter"),t()(),n(343,"td",20),e(344,"-"),t(),n(345,"td",21)(346,"em")(347,"strong"),e(348,"(opcional)"),t()(),n(349,"p"),e(350,"Evento disparado ao alterar valor do model."),t()()(),n(351,"tr",14)(352,"td",15)(353,"div",16)(354,"span",17),e(355," p-disabled"),l(356,"br"),t()()(),n(357,"td",18)(358,"code",25),e(359,"boolean"),t()(),n(360,"td",20)(361,"p")(362,"code"),e(363,"false"),t()()(),n(364,"td",21)(365,"em")(366,"strong"),e(367,"(opcional)"),t()(),n(368,"p"),e(369,"Desabilita o po-search e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),t()()(),n(370,"tr",14)(371,"td",15)(372,"div",22)(373,"span",23),e(374," (p-filter)"),l(375,"br"),t()()(),n(376,"td",18)(377,"code",24),e(378,"EventEmitter"),t()(),n(379,"td",20),e(380,"-"),t(),n(381,"td",21)(382,"em")(383,"strong"),e(384,"(opcional)"),t()(),n(385,"p"),e(386,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es nos filtros."),t(),n(387,"blockquote")(388,"p"),e(389,"Incompat\xEDvel com a propriedade "),n(390,"code"),e(391,"p-search-type"),t(),e(392," do tipo "),n(393,"code"),e(394,"locate"),t(),e(395,"."),t()()()(),n(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),e(400," p-filter-keys"),l(401,"br"),t()()(),n(402,"td",18)(403,"code",26),e(404,"Array<any>"),t()(),n(405,"td",20),e(406,"-"),t(),n(407,"td",21)(408,"p"),e(409,"Define os nomes das propriedades do objeto que ser\xE3o utilizados para busca em "),n(410,"code"),e(411,"p-items"),t(),e(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),t(),n(413,"pre")(414,"code",27),e(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),t()(),n(416,"blockquote")(417,"p"),e(418,"Esta propriedade \xE9 ignorada quando utilizado com "),n(419,"code"),e(420,"p-filter-select"),t(),e(421,` e incompat\xEDvel com a propriedade
`),n(422,"code"),e(423,"p-search-type"),t(),e(424," do tipo "),n(425,"code"),e(426,"locate"),t(),e(427,"."),t()()()(),n(428,"tr",14)(429,"td",15)(430,"div",16)(431,"span",17),e(432," p-filter-select"),l(433,"br"),t()()(),n(434,"td",18)(435,"code",28),e(436,"PoSearchFilterSelect[]"),t()(),n(437,"td",20),e(438,"-"),t(),n(439,"td",21)(440,"p"),e(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),n(442,"code"),e(443,"p-items"),t(),e(444,". Automaticamente adiciona a op\xE7\xE3o "),n(445,"strong"),e(446,"Todos"),t(),e(447,", com um mapeamento de todas as op\xE7\xF5es passadas."),t(),n(448,"p"),e(449,"Exemplo de uso:"),t(),n(450,"pre")(451,"code",27),e(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),t()(),n(453,"blockquote")(454,"p"),e(455,"Ao ser habilitada, a propriedade "),n(456,"code"),e(457,"p-filter-keys"),t(),e(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),n(459,"code"),e(460,"p-search-type"),t(),e(461," do tipo "),n(462,"code"),e(463,"locate"),t(),e(464,"."),t()()()(),n(465,"tr",14)(466,"td",15)(467,"div",16)(468,"span",17),e(469," p-filter-type"),l(470,"br"),t()()(),n(471,"td",18)(472,"code",29),e(473,"PoSearchFilterMode"),t()(),n(474,"td",20)(475,"p")(476,"code"),e(477,"startsWith"),t()()(),n(478,"td",21)(479,"em")(480,"strong"),e(481,"(opcional)"),t()(),n(482,"p"),e(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),n(484,"strong"),e(485,"PoSearchFilterMode"),t(),e(486,"."),t(),n(487,"blockquote")(488,"p"),e(489,"Incompat\xEDvel com a propriedade "),n(490,"code"),e(491,"p-search-type"),t(),e(492," do tipo "),n(493,"code"),e(494,"locate"),t(),e(495,"."),t()()()(),n(496,"tr",14)(497,"td",15)(498,"div",22)(499,"span",23),e(500," (p-filtered-items-change)"),l(501,"br"),t()()(),n(502,"td",18)(503,"code",24),e(504,"EventEmitter"),t()(),n(505,"td",20),e(506,"-"),t(),n(507,"td",21)(508,"em")(509,"strong"),e(510,"(opcional)"),t()(),n(511,"p"),e(512,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no input."),t(),n(513,"blockquote")(514,"p"),e(515,"Incompat\xEDvel com a propriedade "),n(516,"code"),e(517,"p-search-type"),t(),e(518," do tipo "),n(519,"code"),e(520,"locate"),t(),e(521,"."),t()()()(),n(522,"tr",14)(523,"td",15)(524,"div",16)(525,"span",17),e(526," p-icon"),l(527,"br"),t()()(),n(528,"td",18)(529,"code",19),e(530,"string "),t(),n(531,"code",30),e(532," TemplateRef<void>"),t()(),n(533,"td",20),e(534,"-"),t(),n(535,"td",21)(536,"em")(537,"strong"),e(538,"(opcional)"),t()(),n(539,"p"),e(540,"Permite customizar o \xEDcone de busca que acompanha o campo."),t(),n(541,"p"),e(542,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(543,"a",31),e(544,"Biblioteca de \xEDcones PO UI"),t(),e(545,", conforme exemplo:"),t(),n(546,"pre")(547,"code"),e(548,`<po-search p-icon="an an-user"></po-search>
`),t()(),n(549,"p"),e(550,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(551,"em"),e(552,"Font Awesome"),t(),e(553,`, desde que a biblioteca
esteja carregada no projeto:`),t(),n(554,"pre")(555,"code"),e(556,`<po-search p-icon="fa fa-podcast"></po-search>
`),t()(),n(557,"p"),e(558,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(559,"code"),e(560,"TemplateRef"),t(),e(561,", conforme exemplo abaixo:"),t(),n(562,"pre")(563,"code"),e(564,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),t()()()(),n(565,"tr",14)(566,"td",15)(567,"div",16)(568,"span",17),e(569," p-items"),l(570,"br"),t()()(),n(571,"td",18)(572,"code",26),e(573,"Array<any>"),t()(),n(574,"td",20),e(575,"-"),t(),n(576,"td",21)(577,"em")(578,"strong"),e(579,"(opcional)"),t()(),n(580,"p"),e(581,"Lista de itens que ser\xE3o utilizados para pesquisa."),t(),n(582,"blockquote")(583,"p"),e(584,"Incompat\xEDvel com a propriedade "),n(585,"code"),e(586,"p-search-type"),t(),e(587," do tipo "),n(588,"code"),e(589,"locate"),t(),e(590,"."),t()()()(),n(591,"tr",14)(592,"td",15)(593,"div",22)(594,"span",23),e(595," (p-keydown)"),l(596,"br"),t()()(),n(597,"td",18)(598,"code",24),e(599,"EventEmitter"),t()(),n(600,"td",20),e(601,"-"),t(),n(602,"td",21)(603,"em")(604,"strong"),e(605,"(opcional)"),t()(),n(606,"p"),e(607,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(608,"code"),e(609,"KeyboardEvent"),t(),e(610," com informa\xE7\xF5es sobre a tecla."),t()()(),n(611,"tr",14)(612,"td",15)(613,"div",22)(614,"span",23),e(615," (p-listbox-onclick)"),l(616,"br"),t()()(),n(617,"td",18)(618,"code",24),e(619,"EventEmitter"),t()(),n(620,"td",20),e(621,"-"),t(),n(622,"td",21)(623,"em")(624,"strong"),e(625,"(opcional)"),t()(),n(626,"p"),e(627,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver click no listbox."),t(),n(628,"blockquote")(629,"p"),e(630,"Incompat\xEDvel com a propriedade "),n(631,"code"),e(632,"p-search-type"),t(),e(633," do tipo "),n(634,"code"),e(635,"locate"),t(),e(636,"."),t()()()(),n(637,"tr",14)(638,"td",15)(639,"div",16)(640,"span",17),e(641," p-literals"),l(642,"br"),t()()(),n(643,"td",18)(644,"code",32),e(645,"PoSearchLiterals"),t()(),n(646,"td",20),e(647,"-"),t(),n(648,"td",21)(649,"em")(650,"strong"),e(651,"(opcional)"),t()(),n(652,"p"),e(653,"Objeto com as literais usadas no "),n(654,"code"),e(655,"po-search"),t(),e(656,", permitindo personalizar os textos exibidos no componente."),t(),n(657,"p"),e(658,"Para utilizar basta passar a literal que deseja customizar:"),t(),n(659,"pre")(660,"code"),e(661,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),t()(),n(662,"p"),e(663,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),t(),n(664,"pre")(665,"code"),e(666,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),t()(),n(667,"blockquote")(668,"p"),e(669,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),n(670,"a",33)(671,"code"),e(672,"PoI18nService"),t()(),e(673,` ou
do browser.`),t()()()(),n(674,"tr",14)(675,"td",15)(676,"div",22)(677,"span",23),e(678," (p-locate-next)"),l(679,"br"),t()()(),n(680,"td",18)(681,"code",24),e(682,"EventEmitter"),t()(),n(683,"td",20),e(684,"-"),t(),n(685,"td",21)(686,"em")(687,"strong"),e(688,"(opcional)"),t()(),n(689,"p"),e(690,'Evento disparado ao clicar no controle "Pr\xF3ximo resultado".'),t(),n(691,"blockquote")(692,"p"),e(693,"Compat\xEDvel com a propriedade "),n(694,"code"),e(695,"p-search-type"),t(),e(696," do tipo "),n(697,"code"),e(698,"locate"),t(),e(699,"."),t()()()(),n(700,"tr",14)(701,"td",15)(702,"div",22)(703,"span",23),e(704," (p-locate-previous)"),l(705,"br"),t()()(),n(706,"td",18)(707,"code",24),e(708,"EventEmitter"),t()(),n(709,"td",20),e(710,"-"),t(),n(711,"td",21)(712,"em")(713,"strong"),e(714,"(opcional)"),t()(),n(715,"p"),e(716,'Evento disparado ao clicar no controle "Resultado anterior".'),t(),n(717,"blockquote")(718,"p"),e(719,"Compat\xEDvel com a propriedade "),n(720,"code"),e(721,"p-search-type"),t(),e(722," do tipo "),n(723,"code"),e(724,"locate"),t(),e(725,"."),t()()()(),n(726,"tr",14)(727,"td",15)(728,"div",16)(729,"span",17),e(730," p-locate-summary"),l(731,"br"),t()()(),n(732,"td",18)(733,"code",34),e(734,"PoSearchLocateSummary"),t()(),n(735,"td",20),e(736,"-"),t(),n(737,"td",21)(738,"em")(739,"strong"),e(740,"(opcional)"),t()(),n(741,"p"),e(742,"Define os valores do contador exibido ao usar a propriedade "),n(743,"code"),e(744,"p-search-type"),t(),e(745," do tipo "),n(746,"code"),e(747,"locate"),t(),e(748,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),t(),n(749,"pre")(750,"code",35),e(751,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 }; // Exibe: "1 / 5"
`),t()(),n(752,"blockquote")(753,"p"),e(754,"Compat\xEDvel com a propriedade "),n(755,"code"),e(756,"p-search-type"),t(),e(757," do tipo "),n(758,"code"),e(759,"locate"),t(),e(760,"."),t()()()(),n(761,"tr",14)(762,"td",15)(763,"div",16)(764,"span",17),e(765," p-show-listbox"),l(766,"br"),t()()(),n(767,"td",18)(768,"code",25),e(769,"boolean"),t()(),n(770,"td",20)(771,"p")(772,"code"),e(773,"false"),t()()(),n(774,"td",21)(775,"em")(776,"strong"),e(777,"(opcional)"),t()(),n(778,"p"),e(779,"Exibe uma lista (auto-complete) com as op\xE7\xF5es definidas em "),n(780,"code"),e(781,"p-filter-keys"),t(),e(782," ou "),n(783,"code"),e(784,"p-filter-select"),t(),e(785,` enquanto realiza
uma busca, respeitando o `),n(786,"code"),e(787,"p-filter-type"),t(),e(788," como modo de pesquisa."),t(),n(789,"blockquote")(790,"p"),e(791,"Incompat\xEDvel com a propriedade "),n(792,"code"),e(793,"p-search-type"),t(),e(794," do tipo "),n(795,"code"),e(796,"locate"),t(),e(797,"."),t()()()(),n(798,"tr",14)(799,"td",15)(800,"div",16)(801,"span",17),e(802," p-size"),l(803,"br"),t()()(),n(804,"td",18)(805,"code",19),e(806,"string"),t()(),n(807,"td",20)(808,"p")(809,"code"),e(810,"medium"),t()()(),n(811,"td",21)(812,"em")(813,"strong"),e(814,"(opcional)"),t()(),n(815,"p"),e(816,"Define o tamanho do componente:"),t(),n(817,"ul")(818,"li")(819,"code"),e(820,"small"),t(),e(821,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(822,"li")(823,"code"),e(824,"medium"),t(),e(825,": altura do input como 44px."),t()(),n(826,"blockquote")(827,"p"),e(828,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(829,"code"),e(830,"medium"),t(),e(831,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(832,"a",36),e(833,"po-theme"),t(),e(834,"."),t()()()(),n(835,"tr",14)(836,"td",15)(837,"div",16)(838,"span",17),e(839," p-search-type"),l(840,"br"),t()()(),n(841,"td",18)(842,"code",37),e(843,"searchMode"),t()(),n(844,"td",20)(845,"p")(846,"code"),e(847,"action"),t()()(),n(848,"td",21)(849,"em")(850,"strong"),e(851,"(opcional)"),t()(),n(852,"p"),e(853,"Determina a forma de realizar a pesquisa no componente. Valores aceitos:"),t(),n(854,"ul")(855,"li")(856,"code"),e(857,"action"),t(),e(858,": Realiza a busca a cada caractere digitado."),t(),n(859,"li")(860,"code"),e(861,"trigger"),t(),e(862,": Realiza a busca ao pressionar "),n(863,"code"),e(864,"enter"),t(),e(865," ou clicar no \xEDcone de busca."),t(),n(866,"li")(867,"code"),e(868,"locate"),t(),e(869,": Modo manual. Exibe bot\xF5es e contador, mas n\xE3o executa buscas \u2014 controle \xE9 do desenvolvedor."),t()()()()(),n(870,"h3"),e(871,"Interfaces"),t(),n(872,"h4",38)(873,"code",5),e(874,"PoSearchFilterSelect"),t()(),n(875,"div",2)(876,"p"),e(877,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas no dropdown do "),n(878,"code"),e(879,"po-search"),t(),e(880,", ao usar a propriedade "),n(881,"code"),e(882,"p-filter-select"),t(),e(883,"."),t()(),n(884,"h4",10),e(885,"Propriedades"),t(),n(886,"table",11)(887,"tr",12)(888,"th",13),e(889,"Nome"),t(),n(890,"th",13),e(891,"Tipo"),t(),n(892,"th",13),e(893,"Descri\xE7\xE3o"),t()(),n(894,"tr",14)(895,"td",15)(896,"div",16)(897,"span",17),e(898," label"),l(899,"br"),t()()(),n(900,"td",18)(901,"code",19),e(902,"string"),t()(),n(903,"td",21)(904,"p"),e(905,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),t()()(),n(906,"tr",14)(907,"td",15)(908,"div",16)(909,"span",17),e(910," value"),l(911,"br"),t()()(),n(912,"td",18)(913,"code",39),e(914,"Array<string> "),t(),n(915,"code",19),e(916," string"),t()(),n(917,"td",21)(918,"p"),e(919,"Valores que ser\xE3o atribu\xEDdos ao "),n(920,"code"),e(921,"p-filter-keys"),t()()()()(),n(922,"h4",38)(923,"code",5),e(924,"PoSearchLocateSummary"),t()(),n(925,"div",2)(926,"p"),e(927,"Interface que define o resumo de localiza\xE7\xE3o do filtro "),n(928,"code"),e(929,"p-filter-locate"),t(),e(930,"."),t()(),n(931,"h4",10),e(932,"Propriedades"),t(),n(933,"table",11)(934,"tr",12)(935,"th",13),e(936,"Nome"),t(),n(937,"th",13),e(938,"Tipo"),t(),n(939,"th",13),e(940,"Descri\xE7\xE3o"),t()(),n(941,"tr",14)(942,"td",15)(943,"div",16)(944,"span",17),e(945," currentIndex"),l(946,"br"),t()()(),n(947,"td",18)(948,"code",40),e(949,"number"),t()(),n(950,"td",21)(951,"p"),e(952,"\xCDndice atual da ocorr\xEAncia localizada."),t()()(),n(953,"tr",14)(954,"td",15)(955,"div",16)(956,"span",17),e(957," total"),l(958,"br"),t()()(),n(959,"td",18)(960,"code",40),e(961,"number"),t()(),n(962,"td",21)(963,"p"),e(964,"Total de ocorr\xEAncias encontradas."),t()()()(),n(965,"h4",38)(966,"code",5),e(967,"PoSearchOption"),t()(),n(968,"div",2)(969,"p"),e(970,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista ao procurar do "),n(971,"code"),e(972,"po-search"),t(),e(973,"."),t()(),n(974,"h4",10),e(975,"Propriedades"),t(),n(976,"table",11)(977,"tr",12)(978,"th",13),e(979,"Nome"),t(),n(980,"th",13),e(981,"Tipo"),t(),n(982,"th",13),e(983,"Descri\xE7\xE3o"),t()(),n(984,"tr",14)(985,"td",15)(986,"div",16)(987,"span",17),e(988," label"),l(989,"br"),t()()(),n(990,"td",18)(991,"code",19),e(992,"string"),t()(),n(993,"td",21)(994,"em")(995,"strong"),e(996,"(opcional)"),t()(),n(997,"p"),e(998,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),t(),n(999,"blockquote")(1e3,"p"),e(1001,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),n(1002,"code"),e(1003,"value"),t(),e(1004,"."),t()()()(),n(1005,"tr",14)(1006,"td",15)(1007,"div",16)(1008,"span",17),e(1009," value"),l(1010,"br"),t()()(),n(1011,"td",18)(1012,"code",19),e(1013,"string "),t(),n(1014,"code",40),e(1015," number"),t()(),n(1016,"td",21)(1017,"p"),e(1018,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),n(1019,"em"),e(1020,"model"),t(),e(1021,"."),t()()()(),n(1022,"h4",38)(1023,"code",5),e(1024,"PoSearchLiterals"),t()(),n(1025,"div",2)(1026,"p"),e(1027,"Interface para defini\xE7\xE3o das literais usadas no "),n(1028,"code"),e(1029,"po-search"),t(),e(1030,"."),t()(),n(1031,"h4",10),e(1032,"Propriedades"),t(),n(1033,"table",11)(1034,"tr",12)(1035,"th",13),e(1036,"Nome"),t(),n(1037,"th",13),e(1038,"Tipo"),t(),n(1039,"th",13),e(1040,"Descri\xE7\xE3o"),t()(),n(1041,"tr",14)(1042,"td",15)(1043,"div",16)(1044,"span",17),e(1045," all"),l(1046,"br"),t()()(),n(1047,"td",18)(1048,"code",19),e(1049,"string"),t()(),n(1050,"td",21)(1051,"em")(1052,"strong"),e(1053,"(opcional)"),t()(),n(1054,"p"),e(1055,"Texto exibido no dropdown de tipo de filtro, representando todos os tipos dispon\xEDveis."),t(),n(1056,"blockquote")(1057,"p"),e(1058,"Exibido apenas quando a propriedade "),n(1059,"code"),e(1060,"p-filter-select"),t(),e(1061," estiver habilitada."),t()()()(),n(1062,"tr",14)(1063,"td",15)(1064,"div",16)(1065,"span",17),e(1066," clean"),l(1067,"br"),t()()(),n(1068,"td",18)(1069,"code",19),e(1070,"string"),t()(),n(1071,"td",21)(1072,"em")(1073,"strong"),e(1074,"(opcional)"),t()(),n(1075,"p"),e(1076,"Texto alternativo (aria-label) para o bot\xE3o de limpar o campo de busca, usado por leitores de tela."),t()()(),n(1077,"tr",14)(1078,"td",15)(1079,"div",16)(1080,"span",17),e(1081," next"),l(1082,"br"),t()()(),n(1083,"td",18)(1084,"code",19),e(1085,"string"),t()(),n(1086,"td",21)(1087,"em")(1088,"strong"),e(1089,"(opcional)"),t()(),n(1090,"p"),e(1091,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o pr\xF3ximo resultado da busca."),t(),n(1092,"blockquote")(1093,"p"),e(1094,"Exibido apenas quando a propriedade "),n(1095,"code"),e(1096,"p-filter-locate"),t(),e(1097," estiver habilitada."),t()()()(),n(1098,"tr",14)(1099,"td",15)(1100,"div",16)(1101,"span",17),e(1102," of"),l(1103,"br"),t()()(),n(1104,"td",18)(1105,"code",19),e(1106,"string"),t()(),n(1107,"td",21)(1108,"em")(1109,"strong"),e(1110,"(opcional)"),t()(),n(1111,"p"),e(1112,'Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").'),t(),n(1113,"blockquote")(1114,"p"),e(1115,"Exibido apenas quando a propriedade "),n(1116,"code"),e(1117,"p-filter-locate"),t(),e(1118," estiver habilitada."),t()()()(),n(1119,"tr",14)(1120,"td",15)(1121,"div",16)(1122,"span",17),e(1123," previous"),l(1124,"br"),t()()(),n(1125,"td",18)(1126,"code",19),e(1127,"string"),t()(),n(1128,"td",21)(1129,"em")(1130,"strong"),e(1131,"(opcional)"),t()(),n(1132,"p"),e(1133,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o resultado anterior da busca."),t(),n(1134,"blockquote")(1135,"p"),e(1136,"Exibido apenas quando a propriedade "),n(1137,"code"),e(1138,"p-filter-locate"),t(),e(1139," estiver habilitada."),t()()()(),n(1140,"tr",14)(1141,"td",15)(1142,"div",16)(1143,"span",17),e(1144," result"),l(1145,"br"),t()()(),n(1146,"td",18)(1147,"code",19),e(1148,"string"),t()(),n(1149,"td",21)(1150,"em")(1151,"strong"),e(1152,"(opcional)"),t()(),n(1153,"p"),e(1154,'Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.'),t(),n(1155,"blockquote")(1156,"p"),e(1157,"Exibido apenas quando a propriedade "),n(1158,"code"),e(1159,"p-filter-locate"),t(),e(1160," estiver habilitada."),t()()()(),n(1161,"tr",14)(1162,"td",15)(1163,"div",16)(1164,"span",17),e(1165," search"),l(1166,"br"),t()()(),n(1167,"td",18)(1168,"code",19),e(1169,"string"),t()(),n(1170,"td",21)(1171,"em")(1172,"strong"),e(1173,"(opcional)"),t()(),n(1174,"p"),e(1175,"Texto exibido como "),n(1176,"em"),e(1177,"placeholder"),t(),e(1178," no campo de busca."),t()()()(),n(1179,"h3"),e(1180,"Enums"),t(),n(1181,"h4",4)(1182,"code",5),e(1183,"PoSearchFilterMode"),t()(),n(1184,"div",2)(1185,"p"),e(1186,"Define o tipo de busca usado no "),n(1187,"code"),e(1188,"po-search"),t(),e(1189,"."),t()(),n(1190,"h4",10),e(1191,"Propriedades"),t(),n(1192,"table",11)(1193,"tr",12)(1194,"th",13),e(1195,"Nome"),t(),n(1196,"th",13),e(1197,"Descri\xE7\xE3o"),t()(),n(1198,"tr",14)(1199,"td",15)(1200,"div",16)(1201,"span",17),e(1202," startsWith"),l(1203,"br"),t()()(),n(1204,"td",21)(1205,"p"),e(1206,"Verifica se o texto "),n(1207,"em"),e(1208,"inicia"),t(),e(1209," com o valor pesquisado."),t()()(),n(1210,"tr",14)(1211,"td",15)(1212,"div",16)(1213,"span",17),e(1214," contains"),l(1215,"br"),t()()(),n(1216,"td",21)(1217,"p"),e(1218,"Verifica se o texto "),n(1219,"em"),e(1220,"cont\xE9m"),t(),e(1221," o valor pesquisado."),t()()(),n(1222,"tr",14)(1223,"td",15)(1224,"div",16)(1225,"span",17),e(1226," endsWith"),l(1227,"br"),t()()(),n(1228,"td",21)(1229,"p"),e(1230,"Verifica se o texto "),n(1231,"em"),e(1232,"finaliza"),t(),e(1233," com o valor pesquisado."),t()()()()())},dependencies:[x],encapsulation:2})}return o})();var He=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,r){this.route=a,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let r=a.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||o)(k(he),k(Se))};static \u0275cmp=f({type:o,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Search",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-search-doc"),t(),n(4,"po-tab",3),u("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-search-basic-view")(6,"sample-po-search-labs-view")(7,"sample-po-search-find-people-view")(8,"sample-po-search-listbox-view")(9,"sample-po-search-filter-select-view")(10,"sample-po-search-fields-locate-view"),t()()()),r&2&&(m("p-actions",i.actions),s(2),m("p-active",i.activeTab==="doc"),s(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[Ie,b,v,ke,De,Ve,qe,Ne,We,je],encapsulation:2})}return o})();var Mt=[{path:"",component:He}],Re=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=K({type:o});static \u0275inj=R({imports:[ne.forChild(Mt),ne]})}return o})();var gn=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=K({type:o});static \u0275inj=R({imports:[Fe,Re]})}return o})();export{gn as DocPoSearchModule};
