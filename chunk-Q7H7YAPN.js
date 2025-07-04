import{o as x,p as Me}from"./chunk-R3BKLGLC.js";import{Ab as v,Db as Fe,F as Z,Fa as ye,Ga as $,I as Ee,La as Ce,Pa as Pe,Wa as q,a as Y,ca as be,eb as _e,gb as we,ha as ve,ja as xe,nb as Ie,o as fe,p as ge,ua as z,za as w,zb as b}from"./chunk-TUTTJOS2.js";import{$a as T,Ac as X,Ba as C,Dc as de,Ea as n,Ec as ce,Fa as t,Ga as l,Ha as ae,Ia as oe,Ic as ue,Ka as J,L as H,La as u,M as R,Ma as W,Nc as he,Pc as Se,Q as ie,Qa as re,Rc as ne,T as h,Ta as D,Tb as se,U as S,Ua as O,Va as A,Xa as e,Za as g,ab as k,bb as L,cb as Q,eb as P,ha as s,ia as F,oa as f,pa as K,tc as N,ua as M,ub as _,vb as B,wb as le,wc as G,xc as U,ya as m,yc as pe,zc as me}from"./chunk-MIQUIDUB.js";var Te=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-basic"]],standalone:!1,decls:1,vars:0,template:function(r,i){r&1&&l(0,"po-search")},dependencies:[w],encapsulation:2})}return o})();var Je=o=>({"docs-sample-code-tabs":o}),ke=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Basic"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-basic/sample-po-search-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-search></po-search>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-basic/sample-po-search-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-search-basic"),t(),l(23,"hr")),r&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),g(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",P(4,Je,i.hideSampleCodeTabs)))},dependencies:[_,x,b,v,Te],encapsulation:2})}return o})();var Ue=["poSearch"];function Xe(o,y){if(o&1&&(ae(0),n(1,"div")(2,"strong"),e(3),t(),e(4),t(),oe()),o&2){let a=y.$implicit,r=W().$implicit;s(3),g("",a,": "),s(),g(" ",r[a]," \xA0 ")}}function Ye(o,y){if(o&1&&(n(0,"li"),M(1,Xe,5,2,"ng-container",7),t()),o&2){let a=y.$implicit,r=W();s(),m("ngForOf",r.changeFilter(a))}}var Le=(()=>{class o{http;poSearch;ariaLabel;customLiterals;literals;properties=[];search="";event="";service="https://po-sample-api.onrender.com/v1/heroes";items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=z.startsWith;searchMode="action";locateSummary;fieldKey;itemsModel;filterModel='["name"]';filterSelectModel;size="medium";propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"filterLocate",label:"Filter Locate"},{value:"showListbox",label:"Show Listbox"}];iconsOptions=[{label:"fa-search",value:"fa fa-search"},{label:"an-user",value:"an an-user"},{label:"an-magnifying-glass",value:"an an-magnifying-glass"}];filterModeOptions=[{label:"Starts With",value:z.startsWith},{label:"Contains",value:z.contains},{label:"Ends With",value:z.endsWith}];searchModeOptions=[{label:"Action",value:"action"},{label:"Trigger",value:"trigger"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];constructor(a){this.http=a}ngOnInit(){this.restore()}ngOnChanges(a){a.items&&(this.filteredItems=this.items)}changeFilter(a){return Object.keys(a)}onChangeService(){this.http.get(this.service).subscribe(a=>{let r=a.items;Array.isArray(r)&&r.length>0&&(this.items=r,this.filteredItems=r,this.fieldKeys=["name"])})}updateFilterKeys(a){this.fieldKeys=this.convertToArray(a)}updateFilterSelect(a){this.fieldSelect=this.convertToArray(a)}filter(a){this.filteredItems=a,this.event=a.length===0?"p-change-model":"p-filtered-items-change"}changeItems(a){try{let r=JSON.parse(a);Array.isArray(r)&&(this.filteredItems=r,this.items=r)}catch{}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??"")}catch{this.customLiterals=void 0}}changeEvent(a){setTimeout(()=>{this.event=a})}restore(){this.ariaLabel="",this.search="",this.event="",this.icon=void 0,this.customLiterals=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel='["name"]',this.filterSelectModel="",this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=z.startsWith,this.searchMode="action",this.literals=void 0,this.size="medium",this.cleanInput(),this.onChangeService()}cleanInput(){try{this.poSearch.clearSearch()}catch{}}convertToArray(a){try{return JSON.parse(a)}catch{return}}static \u0275fac=function(r){return new(r||o)(F(se))};static \u0275cmp=f({type:o,selectors:[["sample-po-search-labs"]],viewQuery:function(r,i){if(r&1&&D(Ue,7),r&2){let p;O(p=A())&&(i.poSearch=p.first)}},standalone:!1,features:[ie],decls:30,vars:33,consts:[["poSearch",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-blur","p-change-model","p-filtered-items-change","p-keydown","p-next-occurrence","p-previous-occurrence","p-aria-label","p-disabled","p-filter-keys","p-filter-type","p-filter-locate","p-filter-select","p-icon","p-items","p-literals","p-locate-summary","p-search-type","p-show-listbox","p-size"],[1,"po-md-12"],[3,"p-label"],[1,"sample-list-search","po-md-12","row"],[4,"ngFor","ngForOf"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","ariaLabel","p-label","Aria label",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","items","p-label","Items","p-help",'Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","searchMode","p-label","Search Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-label","Filter Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"search": "Search people"}',"p-label","Literals",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","Filter Keys","p-label","Filter Keys","p-help",'Ex.: ["cidade", "pais"]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","Filter Select","p-label","Filter Select","p-help",'Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=J();n(0,"div",2)(1,"po-search",3,0),u("p-blur",function(){return h(p),S(i.changeEvent("p-blur"))})("p-change-model",function(){return h(p),S(i.changeEvent("p-change-model"))})("p-filtered-items-change",function(){return h(p),S(i.changeEvent("p-filtered-items-change"))})("p-keydown",function(){return h(p),S(i.changeEvent("p-keydown"))})("p-next-occurrence",function(){return h(p),S(i.changeEvent("p-next-occurrence"))})("p-previous-occurrence",function(){return h(p),S(i.changeEvent("p-previous-occurrence"))}),t()(),l(3,"hr"),n(4,"div",2)(5,"po-accordion",4)(6,"po-accordion-item",5)(7,"po-widget",4)(8,"ul",6),M(9,Ye,2,1,"li",7),t()()()()(),l(10,"hr"),n(11,"div",2),l(12,"po-info",8)(13,"po-info",9),t(),l(14,"hr"),n(15,"form",null,1)(17,"po-input",10),L("ngModelChange",function(d){return h(p),k(i.ariaLabel,d)||(i.ariaLabel=d),S(d)}),t(),n(18,"po-input",11),L("ngModelChange",function(d){return h(p),k(i.itemsModel,d)||(i.itemsModel=d),S(d)}),u("p-change-model",function(d){return h(p),S(i.changeItems(d))}),t(),n(19,"po-checkbox-group",12),L("ngModelChange",function(d){return h(p),k(i.properties,d)||(i.properties=d),S(d)}),t(),n(20,"po-radio-group",13),L("ngModelChange",function(d){return h(p),k(i.icon,d)||(i.icon=d),S(d)}),t(),n(21,"po-radio-group",14),L("ngModelChange",function(d){return h(p),k(i.searchMode,d)||(i.searchMode=d),S(d)}),t(),n(22,"po-radio-group",15),L("ngModelChange",function(d){return h(p),k(i.filterMode,d)||(i.filterMode=d),S(d)}),t(),n(23,"po-radio-group",16),L("ngModelChange",function(d){return h(p),k(i.size,d)||(i.size=d),S(d)}),t(),n(24,"po-input",17),L("ngModelChange",function(d){return h(p),k(i.literals,d)||(i.literals=d),S(d)}),u("p-change",function(){return h(p),S(i.changeLiterals())}),t(),n(25,"po-input",18),L("ngModelChange",function(d){return h(p),k(i.filterModel,d)||(i.filterModel=d),S(d)}),u("p-change-model",function(d){return h(p),S(i.updateFilterKeys(d))}),t(),n(26,"po-input",19),L("ngModelChange",function(d){return h(p),k(i.filterSelectModel,d)||(i.filterSelectModel=d),S(d)}),u("p-change",function(d){return h(p),S(i.updateFilterSelect(d))}),t(),l(27,"po-divider"),n(28,"div",2)(29,"po-button",20),u("p-click",function(){return h(p),S(i.restore())}),t()()()}r&2&&(s(),m("p-aria-label",i.ariaLabel)("p-disabled",i.properties.includes("disabled"))("p-filter-keys",i.fieldKeys)("p-filter-type",i.filterMode)("p-filter-locate",i.properties.includes("filterLocate"))("p-filter-select",i.fieldSelect)("p-icon",i.icon)("p-items",i.items)("p-literals",i.customLiterals)("p-locate-summary",i.locateSummary)("p-search-type",i.searchMode)("p-show-listbox",i.properties.includes("showListbox"))("p-size",i.size),s(5),re("p-label","Itens encontrados: ",i.filteredItems==null?null:i.filteredItems.length,""),s(3),m("ngForOf",i.filteredItems),s(3),m("p-value",i.search),s(),m("p-value",i.event),s(4),T("ngModel",i.ariaLabel),s(),T("ngModel",i.itemsModel),s(),T("ngModel",i.properties),m("p-options",i.propertiesOptions),s(),T("ngModel",i.icon),m("p-options",i.iconsOptions),s(),T("ngModel",i.searchMode),m("p-options",i.searchModeOptions),s(),T("ngModel",i.filterMode),m("p-options",i.filterModeOptions),s(),T("ngModel",i.size),m("p-options",i.sizeOptions),s(),T("ngModel",i.literals),s(),T("ngModel",i.filterModel),s(),T("ngModel",i.filterSelectModel))},dependencies:[B,X,G,U,me,pe,ge,fe,Z,Y,ve,xe,$,q,Fe,w],styles:[".sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}"]})}return o})();var $e=o=>({"docs-sample-code-tabs":o}),De=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-labs-view"]],standalone:!1,decls:27,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Labs"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-labs/sample-po-search-labs.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    #poSearch
    class="po-md-12"
    [p-aria-label]="ariaLabel"
    [p-disabled]="properties.includes('disabled')"
    [p-filter-keys]="fieldKeys"
    [p-filter-type]="filterMode"
    [p-filter-locate]="properties.includes('filterLocate')"
    [p-filter-select]="fieldSelect"
    [p-icon]="icon"
    [p-items]="items"
    [p-literals]="customLiterals"
    [p-locate-summary]="locateSummary"
    [p-search-type]="searchMode"
    [p-show-listbox]="properties.includes('showListbox')"
    [p-size]="size"
    (p-blur)="changeEvent('p-blur')"
    (p-change-model)="changeEvent('p-change-model')"
    (p-filtered-items-change)="changeEvent('p-filtered-items-change')"
    (p-keydown)="changeEvent('p-keydown')"
    (p-next-occurrence)="changeEvent('p-next-occurrence')"
    (p-previous-occurrence)="changeEvent('p-previous-occurrence')"
  ></po-search>
</div>

<hr />
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
<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="search"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<hr />

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

  <po-divider></po-divider>

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
  searchMode: 'action' | 'trigger' = 'action';
  locateSummary?: PoSearchLocateSummary;
  fieldKey?: any;
  itemsModel?: any;
  filterModel: any = '["name"]';
  filterSelectModel?: any;
  size: string = 'medium';

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'filterLocate', label: 'Filter Locate' },
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
    { label: 'Trigger', value: 'trigger' }
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

  restore(): void {
    this.ariaLabel = '';
    this.search = '';
    this.event = '';
    this.icon = undefined;
    this.customLiterals = undefined;
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
`),t(),n(21,"label",6),e(22,"sample-po-search-labs/sample-po-search-labs.service.ts"),t(),l(23,"pre",9),t()()()(),n(24,"div",10),l(25,"sample-po-search-labs"),t(),l(26,"hr")),r&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),g(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",P(4,$e,i.hideSampleCodeTabs)))},dependencies:[_,x,b,v,Le],encapsulation:2})}return o})();var ee=(()=>{class o{getItems(){return[{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(r){return new(r||o)};static \u0275prov=H({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function nt(o,y){if(o&1&&(n(0,"div",0),l(1,"po-info",5)(2,"po-info",6)(3,"po-info",7),t()),o&2){let a=y.$implicit;s(),m("p-value",a.name),s(),m("p-value",a.nickname),s(),m("p-value",a.email)}}function it(o,y){o&1&&l(0,"div")}function at(o,y){if(o&1&&(n(0,"li",8),e(1),M(2,it,1,0,"div",9),t(),n(3,"li",8),e(4),t()),o&2){let a=y.$implicit,r=W();s(),g(" Nickname: ",a.nickname," "),s(),m("ngIf",r.compareObjects(a)),s(2),g("Email: ",a.email,"")}}var Oe=(()=>{class o{service;items;filterKeys=["name","nickname","email"];peopleFiltered=[];constructor(a){this.service=a}ngOnInit(){this.items=this.service.getItems()}filtered(a){this.peopleFiltered=a,a.length===4&&(this.peopleFiltered=[])}compareObjects(a){return!!this.peopleFiltered.includes(a)}static \u0275fac=function(r){return new(r||o)(F(ee))};static \u0275cmp=f({type:o,selectors:[["sample-po-search-find-people"]],standalone:!1,features:[Q([ee])],decls:7,vars:4,consts:[[1,"po-row"],["p-aria-label","Po Search",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["class","po-row",4,"ngFor","ngForOf"],["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"],[1,"po-md-12","po-text-color-neutral-dark-40"],[4,"ngIf"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"po-search",1),u("p-filtered-items-change",function(c){return i.filtered(c)}),t()(),l(2,"hr"),M(3,nt,4,3,"div",2),l(4,"hr"),n(5,"po-list-view",3),M(6,at,5,3,"ng-template",4),t()),r&2&&(s(),m("p-items",i.items)("p-filter-keys",i.filterKeys),s(2),m("ngForOf",i.peopleFiltered),s(2),m("p-items",i.items))},dependencies:[B,le,q,we,_e,w],styles:["li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}","li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}"]})}return o})();var rt=o=>({"docs-sample-code-tabs":o}),Ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-find-people-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Find People"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-find-people/sample-po-search-find-people.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),n(25,"div",10),l(26,"sample-po-search-find-people"),t(),l(27,"hr")),r&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),g(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",P(4,rt,i.hideSampleCodeTabs)))},dependencies:[_,x,b,v,Oe],encapsulation:2})}return o})();var te=(()=>{class o{getItems(){return[{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(r){return new(r||o)};static \u0275prov=H({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function pt(o,y){if(o&1&&(n(0,"div",0),l(1,"hr")(2,"po-info",3)(3,"po-info",4)(4,"po-info",5),t()),o&2){let a=y.$implicit;s(2),m("p-value",a.name),s(),m("p-value",a.nickname),s(),m("p-value",a.email)}}var qe=(()=>{class o{service;items;filterKeys=["name","nickname","email"];peopleFiltered=[];constructor(a){this.service=a}ngOnInit(){this.items=this.service.getItems()}filtered(a){this.peopleFiltered=a,a.length===4&&(this.peopleFiltered=[])}compareObjects(a){return!!this.peopleFiltered.includes(a)}static \u0275fac=function(r){return new(r||o)(F(te))};static \u0275cmp=f({type:o,selectors:[["sample-po-search-listbox"]],standalone:!1,features:[Q([te])],decls:3,vars:3,consts:[[1,"po-row"],["p-aria-label","Po Search","p-show-listbox","true","p-search-type","trigger",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["class","po-row",4,"ngFor","ngForOf"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"po-search",1),u("p-filtered-items-change",function(c){return i.filtered(c)}),t()(),M(2,pt,5,3,"div",2)),r&2&&(s(),m("p-items",i.items)("p-filter-keys",i.filterKeys),s(),m("ngForOf",i.peopleFiltered))},dependencies:[B,q,w],encapsulation:2})}return o})();var dt=o=>({"docs-sample-code-tabs":o}),Ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-listbox-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search With Listbox"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-listbox/sample-po-search-listbox.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),n(25,"div",10),l(26,"sample-po-search-listbox"),t(),l(27,"hr")),r&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),g(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",P(4,dt,i.hideSampleCodeTabs)))},dependencies:[_,x,b,v,qe],encapsulation:2})}return o})();function ut(o,y){if(o&1&&(n(0,"div",0)(1,"po-container",3),l(2,"po-info",4)(3,"po-info",5)(4,"po-info",6)(5,"po-info",7),t()()),o&2){let a=y.$implicit;s(2),m("p-value",a.name),s(),m("p-value",a.gender),s(),m("p-value",a.planet),s(),m("p-value",a.father)}}var Be=(()=>{class o{items;filteredItems=[];filterSelect=[{label:"Personal",value:["name","gender"]},{label:"Planet",value:["planet"]},{label:"Family",value:"father"}];ngOnInit(){this.items=[{name:"Anakin Skywalker",gender:"male",planet:"Tatooine",father:"Darth Sidious"},{name:"Luke Skywalker",gender:"male",planet:"Tatooine",father:"Anakin Skywalker"},{name:"Leia Organa",gender:"female",planet:"Alderaan",father:"Anakin Skywalker"},{name:"Han Solo",gender:"male",planet:"Corellia",father:"Ovan"}]}filtered(a){this.filteredItems=a}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-filter-select"]],standalone:!1,decls:3,vars:3,consts:[[1,"po-row"],["p-aria-label","Po Search","p-search-type","trigger","p-show-listbox","true","p-disabled","false",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-select"],["class","po-row",4,"ngFor","ngForOf"],[1,"po-row","po-mt-2"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Gender",1,"po-md-3",3,"p-value"],["p-label","Planet",1,"po-md-3",3,"p-value"],["p-label","Father",1,"po-md-3",3,"p-value"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"po-search",1),u("p-filtered-items-change",function(c){return i.filtered(c)}),t()(),M(2,ut,6,4,"div",2)),r&2&&(s(),m("p-items",i.items)("p-filter-select",i.filterSelect),s(),m("ngForOf",i.filteredItems))},dependencies:[B,be,q,w],encapsulation:2})}return o})();var St=o=>({"docs-sample-code-tabs":o}),Ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-filter-select-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search With Filter Select + Listbox"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-filter-select/sample-po-search-filter-select.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),n(21,"div",10),l(22,"sample-po-search-filter-select"),t(),l(23,"hr")),r&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),g(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",P(4,St,i.hideSampleCodeTabs)))},dependencies:[_,x,b,v,Be],encapsulation:2})}return o})();var gt=["nameInput"],Et=["cpfInput"],bt=["addressInput"],vt=["numberInput"],xt=["emailInput"],yt=["websiteInput"],Ct=["reactiveFormData"],ze=(()=>{class o{fb;nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;currentIndexHighlight=-1;highlightEnabled=!1;locateSummary={currentIndex:0,total:0};filterType=z.endsWith;searchLiterals={search:"Buscar campos"};modalPrimaryAction={label:"Close",action:()=>this.reactiveFormModal.close()};constructor(a){this.fb=a,this.createForm()}ngAfterViewInit(){this.filterTargets=[{label:"Customer name",index:0,focus:()=>this.nameInput.focus()},{label:"CPF",index:1,focus:()=>this.cpfInput.focus()},{label:"Address",index:2,focus:()=>this.addressInput.focus()},{label:"Number",index:3,focus:()=>this.numberInput.focus()},{label:"Email",index:4,focus:()=>this.emailInput.focus()},{label:"Website",index:5,focus:()=>this.websiteInput.focus()}]}createForm(){this.reactiveForm=this.fb.group({name:["",[N.required,N.minLength(5)]],cpf:["",N.required],address:["",N.required],number:["",N.required],email:["",N.required],website:["",N.required]})}updateSearchTerm(a){let r=a.toLowerCase();this.filteredIndexes=this.filterTargets.map((i,p)=>({i:p,t:i})).filter(({t:i})=>r&&i.label.toLowerCase().startsWith(r)).map(({i})=>i),r&&this.filteredIndexes.length>0?(this.currentIndex=0,this.highlightEnabled=!0,this.highlightCurrent()):(this.currentIndex=-1,this.clearHighlight()),this.updateSummary()}onSearchKeydown(a){a.key==="ArrowDown"?(this.highlightEnabled=!0,this.goToNextOccurrence(),a.preventDefault()):a.key==="ArrowUp"?(this.highlightEnabled=!0,this.goToPreviousOccurrence(),a.preventDefault()):a.key==="Enter"&&(this.focusCurrent(),this.highlightEnabled=!1,this.clearHighlight(),a.preventDefault())}onNextOccurrenceClick(){this.goToNextOccurrence(),this.focusCurrent(),this.clearHighlight()}onPreviousOccurrenceClick(){this.goToPreviousOccurrence(),this.focusCurrent(),this.clearHighlight()}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.highlightCurrent(),this.updateSummary())}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.highlightCurrent(),this.updateSummary())}updateSummary(){let a=this.filteredIndexes.length,r=a===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:r,total:a}}highlightCurrent(){if(!this.highlightEnabled)return;let a=this.filteredIndexes[this.currentIndex];this.currentIndexHighlight=a??-1,a!==void 0&&this.highlightField(a)}highlightField(a){this.filterTargets.forEach(i=>{let p=this.getInputElementByIndex(i.index);p&&(p.style.outline="",p.style.outlineOffset="",p.style.borderRadius="")});let r=this.getInputElementByIndex(a);r&&(r.style.outline="2px solid purple",r.style.outlineOffset="2px",r.style.borderRadius="4px")}clearHighlight(){this.highlightEnabled=!1,this.currentIndexHighlight=-1,this.filterTargets.forEach(a=>{let r=this.getInputElementByIndex(a.index);r&&(r.style.outline="",r.style.outlineOffset="",r.style.borderRadius="")})}focusCurrent(){let a=this.filteredIndexes[this.currentIndex];a!==void 0&&(document.activeElement?.blur(),this.filterTargets[a].focus())}getInputElementByIndex(a){switch(a){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open()}onSearchBlur(){this.clearHighlight()}static \u0275fac=function(r){return new(r||o)(F(ue))};static \u0275cmp=f({type:o,selectors:[["sample-po-search-fields-locate"]],viewQuery:function(r,i){if(r&1&&(D(gt,7),D(Et,7),D(bt,7),D(vt,7),D(xt,7),D(yt,7),D(Ct,7)),r&2){let p;O(p=A())&&(i.nameInput=p.first),O(p=A())&&(i.cpfInput=p.first),O(p=A())&&(i.addressInput=p.first),O(p=A())&&(i.numberInput=p.first),O(p=A())&&(i.emailInput=p.first),O(p=A())&&(i.websiteInput=p.first),O(p=A())&&(i.reactiveFormModal=p.first)}},standalone:!1,decls:33,vars:12,consts:[["nameInput",""],["cpfInput",""],["addressInput",""],["numberInput",""],["emailInput",""],["websiteInput",""],["reactiveFormData",""],[3,"p-blur","p-change-model","p-keydown","p-next-occurrence","p-previous-occurrence","p-filter-locate","p-literals","p-locate-summary"],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-9"],["formControlName","cpf","p-label","CPF","p-mask","999.999.999-99","p-clean","",1,"po-lg-3"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-lg-6",3,"p-value"],["p-label","CPF",1,"po-lg-6",3,"p-value"],["p-label","Address",1,"po-lg-6",3,"p-value"],["p-label","Number",1,"po-lg-6",3,"p-value"],["p-label","Email",1,"po-lg-6",3,"p-value"],["p-label","Website",1,"po-lg-6",3,"p-value"]],template:function(r,i){if(r&1){let p=J();n(0,"po-search",7),u("p-blur",function(){return h(p),S(i.onSearchBlur())})("p-change-model",function(d){return h(p),S(i.updateSearchTerm(d))})("p-keydown",function(d){return h(p),S(i.onSearchKeydown(d))})("p-next-occurrence",function(){return h(p),S(i.onNextOccurrenceClick())})("p-previous-occurrence",function(){return h(p),S(i.onPreviousOccurrenceClick())}),t(),l(1,"po-divider"),n(2,"form",8)(3,"div",9),l(4,"po-input",10,0)(6,"po-input",11,1),t(),n(8,"div",9),l(9,"po-input",12,2)(11,"po-number",13,3),t(),n(13,"div",9),l(14,"po-email",14,4)(16,"po-url",15,5),t(),n(18,"div",9)(19,"po-button",16),u("p-click",function(){return h(p),S(i.saveForm())}),t()()(),n(20,"po-modal",17,6)(22,"div",9),l(23,"po-info",18)(24,"po-info",19),t(),l(25,"po-divider"),n(26,"div",9),l(27,"po-info",20)(28,"po-info",21),t(),l(29,"po-divider"),n(30,"div",9),l(31,"po-info",22)(32,"po-info",23),t()()}r&2&&(m("p-filter-locate",!0)("p-literals",i.searchLiterals)("p-locate-summary",i.locateSummary),s(2),m("formGroup",i.reactiveForm),s(17),m("p-disabled",!i.reactiveForm.valid),s(),m("p-primary-action",i.modalPrimaryAction),s(3),m("p-value",i.reactiveForm.controls.name.value),s(),m("p-value",i.reactiveForm.controls.cpf.value),s(3),m("p-value",i.reactiveForm.controls.address.value),s(),m("p-value",i.reactiveForm.controls.number.value),s(3),m("p-value",i.reactiveForm.controls.email.value),s(),m("p-value",i.reactiveForm.controls.website.value))},dependencies:[X,G,U,de,ce,Z,Y,ye,$,Ce,Pe,q,Ee,w],encapsulation:2})}return o})();var _t=o=>({"docs-sample-code-tabs":o}),je=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-fields-locate-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Form Fields with Locate"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.html"),t(),n(13,"pre",7),e(14,`<po-search
  [p-filter-locate]="true"
  [p-literals]="searchLiterals"
  [p-locate-summary]="locateSummary"
  (p-blur)="onSearchBlur()"
  (p-change-model)="updateSearchTerm($event)"
  (p-keydown)="onSearchKeydown($event)"
  (p-next-occurrence)="onNextOccurrenceClick()"
  (p-previous-occurrence)="onPreviousOccurrenceClick()"
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
`),t()()()()(),n(21,"div",10),l(22,"sample-po-search-fields-locate"),t(),l(23,"hr")),r&2&&(s(5),C("po-icon "+i.sampleCodeButtonIcon),s(),g(" ",i.sampleCodeButtonLabel,""),s(),m("ngClass",P(4,_t,i.hideSampleCodeTabs)))},dependencies:[_,x,b,v,ze],encapsulation:2})}return o})();var We=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-search-doc"]],standalone:!1,decls:1248,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoSearchFilterSelect[]"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoSearchLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoSearchLocateSummary"],[1,"language-ts"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","searchMode"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoSearchModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-search."),t()(),n(7,"h3",3),e(8,"Componente"),t(),n(9,"h4",4)(10,"code",5),e(11,"PoSearchComponent"),t()(),n(12,"div",2)(13,"p"),e(14,"O componente search, tamb\xE9m conhecido como barra de pesquisa, \xE9 utilizado para ajudar os usu\xE1rios a localizar um determinado conte\xFAdo."),t(),n(15,"p"),e(16,"Normalmente localizado no canto superior direito, junto com o \xEDcone de lupa, uma vez que este \xEDcone \xE9 amplamente reconhecido."),t(),n(17,"h4"),e(18,"Boas pr\xE1ticas"),t(),n(19,"p"),e(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),t(),n(21,"ul")(22,"li"),e(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),t(),n(24,"li"),e(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),t(),n(26,"li"),e(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),t(),n(28,"li"),e(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),t(),n(30,"li"),e(31,"Quando apropriado, destaque os termos da busca nos resultados."),t(),n(32,"li"),e(33,"A entrada do campo de pesquisa deve caber em uma linha. N\xE3o use entradas de pesquisa de v\xE1rias linhas."),t(),n(34,"li"),e(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),t(),n(36,"li"),e(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),t()(),n(38,"h4"),e(39,"Acessibilidade tratada no componente"),t(),n(40,"p"),e(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),t(),n(42,"ul")(43,"li"),e(44,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),t(),n(45,"li"),e(46,"Altera\xE7\xE3o entre os estados precisa ser indicada por mais de um elemento al\xE9m da cor (1.4.1: Use of Color);"),t()(),n(47,"h4"),e(48,"Tokens customiz\xE1veis"),t(),n(49,"p"),e(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(51,"blockquote")(52,"p"),e(53,"Para maiores informa\xE7\xF5es, acesse o guia "),n(54,"a",6),e(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(56,"."),t()(),n(57,"table")(58,"thead")(59,"tr")(60,"th"),e(61,"Propriedade"),t(),n(62,"th"),e(63,"Descri\xE7\xE3o"),t(),n(64,"th"),e(65,"Valor Padr\xE3o"),t()()(),n(66,"tbody")(67,"tr")(68,"td")(69,"strong"),e(70,"Default Values"),t()(),l(71,"td")(72,"td"),t(),n(73,"tr")(74,"td")(75,"code"),e(76,"--font-family"),t()(),n(77,"td"),e(78,"Fam\xEDlia tipogr\xE1fica do campo"),t(),n(79,"td")(80,"code"),e(81,"var(--font-family-theme)"),t()()(),n(82,"tr")(83,"td")(84,"code"),e(85,"--font-size"),t()(),n(86,"td"),e(87,"Tamanho da fonte do campo"),t(),n(88,"td")(89,"code"),e(90,"var(--font-size-default)"),t()()(),n(91,"tr")(92,"td")(93,"code"),e(94,"--text-color-placeholder"),t()(),n(95,"td"),e(96,"Cor do texto no placeholder"),t(),n(97,"td")(98,"code"),e(99,"var(--color-neutral-light-30)"),t()()(),n(100,"tr")(101,"td")(102,"code"),e(103,"--color"),t()(),n(104,"td"),e(105,"Cor das bordas"),t(),n(106,"td")(107,"code"),e(108,"var(--color-neutral-dark-70)"),t()()(),n(109,"tr")(110,"td")(111,"code"),e(112,"--border-radius"),t()(),n(113,"td"),e(114,"Raio das bordas"),t(),n(115,"td")(116,"code"),e(117,"var(--border-radius-md)"),t()()(),n(118,"tr")(119,"td")(120,"code"),e(121,"--background"),t()(),n(122,"td"),e(123,"Cor de background"),t(),n(124,"td")(125,"code"),e(126,"var(--color-neutral-light-05)"),t()()(),n(127,"tr")(128,"td")(129,"code"),e(130,"--text-color"),t()(),n(131,"td"),e(132,"Cor do texto edit\xE1vel"),t(),n(133,"td")(134,"code"),e(135,"var(--color-neutral-dark-90)"),t()()(),n(136,"tr")(137,"td")(138,"code"),e(139,"--color-clear"),t()(),n(140,"td"),e(141,"Cor do \xEDcone close"),t(),n(142,"td")(143,"code"),e(144,"var(--color-action-default)"),t()()(),n(145,"tr")(146,"td")(147,"code"),e(148,"--color-controls"),t()(),n(149,"td"),e(150,"Cor dos \xEDcones de controle do tipo locate"),t(),n(151,"td")(152,"code"),e(153,"var(--color-action-default)"),t()()(),n(154,"tr")(155,"td")(156,"strong"),e(157,"Icon"),t()(),l(158,"td")(159,"td"),t(),n(160,"tr")(161,"td")(162,"code"),e(163,"--color-icon-read"),t()(),n(164,"td"),e(165,"Cor do \xEDcone de busca no modo action"),t(),n(166,"td")(167,"code"),e(168,"var(--color-neutral-dark-70)"),t()()(),n(169,"tr")(170,"td")(171,"code"),e(172,"--color-icon"),t()(),n(173,"td"),e(174,"Cor do \xEDcone de busca no modo trigger"),t(),n(175,"td")(176,"code"),e(177,"var(--color-action-default)"),t()()(),n(178,"tr")(179,"td")(180,"strong"),e(181,"Hover"),t()(),l(182,"td")(183,"td"),t(),n(184,"tr")(185,"td")(186,"code"),e(187,"--color-hover"),t()(),n(188,"td"),e(189,"Cor das bordas no estado hover"),t(),n(190,"td")(191,"code"),e(192,"var(--color-action-hover)"),t()()(),n(193,"tr")(194,"td")(195,"code"),e(196,"--background-hover"),t()(),n(197,"td"),e(198,"Cor de background no estado hover"),t(),n(199,"td")(200,"code"),e(201,"var(--color-brand-01-lightest)"),t()()(),n(202,"tr")(203,"td")(204,"strong"),e(205,"Focused"),t()(),l(206,"td")(207,"td"),t(),n(208,"tr")(209,"td")(210,"code"),e(211,"--color-focused"),t()(),n(212,"td"),e(213,"Cor das bordas no estado de focus"),t(),n(214,"td")(215,"code"),e(216,"var(--color-action-default)"),t()()(),n(217,"tr")(218,"td")(219,"code"),e(220,"--outline-color-focused"),t()(),n(221,"td"),e(222,"Cor do outline no estado de focus"),t(),n(223,"td")(224,"code"),e(225,"var(--color-action-focus)"),t()()(),n(226,"tr")(227,"td")(228,"strong"),e(229,"Disabled"),t()(),l(230,"td")(231,"td"),t(),n(232,"tr")(233,"td")(234,"code"),e(235,"--color-disabled"),t()(),n(236,"td"),e(237,"Cor principal no estado disabled"),t(),n(238,"td")(239,"code"),e(240,"var(--color-action-disabled)"),t()()(),n(241,"tr")(242,"td")(243,"code"),e(244,"--background-disabled"),t()(),n(245,"td"),e(246,"Cor de background no estado disabled"),t(),n(247,"td")(248,"code"),e(249,"var(--color-neutral-light-20)"),t()()()()()(),n(250,"div",7)(251,"h4",8),e(252,"Seletor"),t(),n(253,"pre",9),e(254,`<po-search
    p-aria-label="string"
    (p-blur)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-disabled="boolean"
    (p-filter)="EventEmitter"
    p-filter-keys="Array<any>"
    p-filter-locate="boolean"
    p-filter-select="PoSearchFilterSelect[]"
    p-filter-type="PoSearchFilterMode"
    (p-filtered-items-change)="EventEmitter"
    p-icon="string | TemplateRef<void>"
    p-items="Array<any>"
    (p-keydown)="EventEmitter"
    (p-listbox-onclick)="EventEmitter"
    p-literals="PoSearchLiterals"
    p-locate-summary="PoSearchLocateSummary"
    (p-next-occurrence)="EventEmitter"
    (p-previous-occurrence)="EventEmitter"
    p-show-listbox="boolean"
    p-size="string"
    p-search-type="searchMode" >
</po-search>
`),t()(),n(255,"h4",10),e(256,"Propriedades"),t(),n(257,"table",11)(258,"tr",12)(259,"th",13),e(260,"Nome"),t(),n(261,"th",13),e(262,"Tipo"),t(),n(263,"th",13),e(264,"Padr\xE3o"),t(),n(265,"th",13),e(266,"Descri\xE7\xE3o"),t()(),n(267,"tr",14)(268,"td",15)(269,"div",16)(270,"span",17),e(271," p-aria-label"),l(272,"br"),t()()(),n(273,"td",18)(274,"code",19),e(275,"string"),t()(),n(276,"td",20),e(277,"-"),t(),n(278,"td",21)(279,"em")(280,"strong"),e(281,"(opcional)"),t()(),n(282,"p"),e(283,"Define um aria-label para o po-search."),t(),n(284,"blockquote")(285,"p"),e(286,"Devido o componente n\xE3o possuir uma label assim como outros campos de texto, o "),n(287,"code"),e(288,"aria-label"),t(),e(289,` \xE9 utilizado para
acessibilidade.`),t()()()(),n(290,"tr",14)(291,"td",15)(292,"div",22)(293,"span",23),e(294," (p-blur)"),l(295,"br"),t()()(),n(296,"td",18)(297,"code",24),e(298,"EventEmitter"),t()(),n(299,"td",20),e(300,"-"),t(),n(301,"td",21)(302,"em")(303,"strong"),e(304,"(opcional)"),t()(),n(305,"p"),e(306,"Evento disparado ao sair do campo."),t()()(),n(307,"tr",14)(308,"td",15)(309,"div",22)(310,"span",23),e(311," (p-change-model)"),l(312,"br"),t()()(),n(313,"td",18)(314,"code",24),e(315,"EventEmitter"),t()(),n(316,"td",20),e(317,"-"),t(),n(318,"td",21)(319,"em")(320,"strong"),e(321,"(opcional)"),t()(),n(322,"p"),e(323,"Evento disparado ao alterar valor do model."),t()()(),n(324,"tr",14)(325,"td",15)(326,"div",16)(327,"span",17),e(328," p-disabled"),l(329,"br"),t()()(),n(330,"td",18)(331,"code",25),e(332,"boolean"),t()(),n(333,"td",20)(334,"p")(335,"code"),e(336,"false"),t()()(),n(337,"td",21)(338,"em")(339,"strong"),e(340,"(opcional)"),t()(),n(341,"p"),e(342,"Desabilita o po-search e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),t()()(),n(343,"tr",14)(344,"td",15)(345,"div",22)(346,"span",23),e(347," (p-filter)"),l(348,"br"),t()()(),n(349,"td",18)(350,"code",24),e(351,"EventEmitter"),t()(),n(352,"td",20),e(353,"-"),t(),n(354,"td",21)(355,"em")(356,"strong"),e(357,"(opcional)"),t()(),n(358,"p"),e(359,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es nos filtros."),t(),n(360,"blockquote")(361,"p"),e(362,"Incompat\xEDvel com a propriedade "),n(363,"code"),e(364,"p-filter-locate"),t(),e(365,"."),t()()()(),n(366,"tr",14)(367,"td",15)(368,"div",16)(369,"span",17),e(370," p-filter-keys"),l(371,"br"),t()()(),n(372,"td",18)(373,"code",26),e(374,"Array<any>"),t()(),n(375,"td",20),e(376,"-"),t(),n(377,"td",21)(378,"p"),e(379,"Define os nomes das propriedades do objeto que ser\xE3o utilizados para busca em "),n(380,"code"),e(381,"p-items"),t(),e(382,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),t(),n(383,"pre")(384,"code",27),e(385,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),t()(),n(386,"blockquote")(387,"p"),e(388,"Esta propriedade \xE9 ignorada quando utilizado com "),n(389,"code"),e(390,"p-filter-select"),t(),e(391,` e incompat\xEDvel com a propriedade
`),n(392,"code"),e(393,"p-filter-locate"),t(),e(394,"."),t()()()(),n(395,"tr",14)(396,"td",15)(397,"div",16)(398,"span",17),e(399," p-filter-locate"),l(400,"br"),t()()(),n(401,"td",18)(402,"code",25),e(403,"boolean"),t()(),n(404,"td",20)(405,"p")(406,"code"),e(407,"false"),t()()(),n(408,"td",21)(409,"em")(410,"strong"),e(411,"(opcional)"),t()(),n(412,"p"),e(413,"Ativa o modo de localiza\xE7\xE3o naveg\xE1vel, onde o filtro e a navega\xE7\xE3o entre os resultados fica sob responsabilidade do desenvolvedor. Exibe contador e bot\xF5es para navegar entre as ocorr\xEAncias encontradas."),t(),n(414,"blockquote")(415,"p"),e(416,"Ao ser habilitada, as propriedades "),n(417,"code"),e(418,"p-items"),t(),e(419,", "),n(420,"code"),e(421,"p-filter-keys"),t(),e(422,", "),n(423,"code"),e(424,"p-filter-select"),t(),e(425,", "),n(426,"code"),e(427,"p-filter"),t(),e(428,", "),n(429,"code"),e(430,"p-show-listbox"),t(),e(431,`, e
`),n(432,"code"),e(433,"p-filtered-items-change"),t(),e(434," s\xE3o ignoradas."),t(),n(435,"p"),e(436,"Propriedades e outputs para auxiliar no controle da navega\xE7\xE3o: "),n(437,"code"),e(438,"p-locate-summary"),t(),e(439,", "),n(440,"code"),e(441,"p-change-model"),t(),e(442,`,
`),n(443,"code"),e(444,"p-next-occurrence"),t(),e(445,", "),n(446,"code"),e(447,"p-previous-occurrence"),t(),e(448,", "),n(449,"code"),e(450,"p-keydown"),t(),e(451," e "),n(452,"code"),e(453,"p-blur"),t(),e(454,"."),t()()()(),n(455,"tr",14)(456,"td",15)(457,"div",16)(458,"span",17),e(459," p-filter-select"),l(460,"br"),t()()(),n(461,"td",18)(462,"code",28),e(463,"PoSearchFilterSelect[]"),t()(),n(464,"td",20),e(465,"-"),t(),n(466,"td",21)(467,"p"),e(468,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),n(469,"code"),e(470,"p-items"),t(),e(471,". Automaticamente adiciona a op\xE7\xE3o "),n(472,"strong"),e(473,"Todos"),t(),e(474,", com um mapeamento de todas as op\xE7\xF5es passadas."),t(),n(475,"p"),e(476,"Exemplo de uso:"),t(),n(477,"pre")(478,"code",27),e(479,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),t()(),n(480,"blockquote")(481,"p"),e(482,"Ao ser habilitada, a propriedade "),n(483,"code"),e(484,"p-filter-keys"),t(),e(485,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),n(486,"code"),e(487,"p-filter-locate"),t(),e(488,"."),t()()()(),n(489,"tr",14)(490,"td",15)(491,"div",16)(492,"span",17),e(493," p-filter-type"),l(494,"br"),t()()(),n(495,"td",18)(496,"code",29),e(497,"PoSearchFilterMode"),t()(),n(498,"td",20)(499,"p")(500,"code"),e(501,"startsWith"),t()()(),n(502,"td",21)(503,"em")(504,"strong"),e(505,"(opcional)"),t()(),n(506,"p"),e(507,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),n(508,"strong"),e(509,"PoSearchFilterMode"),t(),e(510,"."),t(),n(511,"blockquote")(512,"p"),e(513,"Incompat\xEDvel com a propriedade "),n(514,"code"),e(515,"p-filter-locate"),t(),e(516,"."),t()()()(),n(517,"tr",14)(518,"td",15)(519,"div",22)(520,"span",23),e(521," (p-filtered-items-change)"),l(522,"br"),t()()(),n(523,"td",18)(524,"code",24),e(525,"EventEmitter"),t()(),n(526,"td",20),e(527,"-"),t(),n(528,"td",21)(529,"em")(530,"strong"),e(531,"(opcional)"),t()(),n(532,"p"),e(533,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no input."),t(),n(534,"blockquote")(535,"p"),e(536,"Incompat\xEDvel com a propriedade "),n(537,"code"),e(538,"p-filter-locate"),t(),e(539,"."),t()()()(),n(540,"tr",14)(541,"td",15)(542,"div",16)(543,"span",17),e(544," p-icon"),l(545,"br"),t()()(),n(546,"td",18)(547,"code",19),e(548,"string "),t(),n(549,"code",30),e(550," TemplateRef<void>"),t()(),n(551,"td",20),e(552,"-"),t(),n(553,"td",21)(554,"em")(555,"strong"),e(556,"(opcional)"),t()(),n(557,"p"),e(558,"Permite customizar o \xEDcone de busca que acompanha o campo."),t(),n(559,"p"),e(560,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(561,"a",31),e(562,"Biblioteca de \xEDcones PO UI"),t(),e(563,", conforme exemplo:"),t(),n(564,"pre")(565,"code"),e(566,`<po-search p-icon="an an-user"></po-search>
`),t()(),n(567,"p"),e(568,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(569,"em"),e(570,"Font Awesome"),t(),e(571,`, desde que a biblioteca
esteja carregada no projeto.
Por exemplo:`),t(),n(572,"pre")(573,"code"),e(574,`<po-search p-icon="fa fa-podcast"></po-search>
`),t()(),n(575,"p"),e(576,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(577,"code"),e(578,"TemplateRef"),t(),e(579,", conforme exemplo abaixo:"),t(),n(580,"pre")(581,"code"),e(582,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),t()()()(),n(583,"tr",14)(584,"td",15)(585,"div",16)(586,"span",17),e(587," p-items"),l(588,"br"),t()()(),n(589,"td",18)(590,"code",26),e(591,"Array<any>"),t()(),n(592,"td",20),e(593,"-"),t(),n(594,"td",21)(595,"em")(596,"strong"),e(597,"(opcional)"),t()(),n(598,"p"),e(599,"Lista de itens que ser\xE3o utilizados para pesquisa."),t(),n(600,"blockquote")(601,"p"),e(602,"Incompat\xEDvel com a propriedade "),n(603,"code"),e(604,"p-filter-locate"),t(),e(605,"."),t()()()(),n(606,"tr",14)(607,"td",15)(608,"div",22)(609,"span",23),e(610," (p-keydown)"),l(611,"br"),t()()(),n(612,"td",18)(613,"code",24),e(614,"EventEmitter"),t()(),n(615,"td",20),e(616,"-"),t(),n(617,"td",21)(618,"em")(619,"strong"),e(620,"(opcional)"),t()(),n(621,"p"),e(622,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(623,"code"),e(624,"KeyboardEvent"),t(),e(625," com informa\xE7\xF5es sobre a tecla."),t()()(),n(626,"tr",14)(627,"td",15)(628,"div",22)(629,"span",23),e(630," (p-listbox-onclick)"),l(631,"br"),t()()(),n(632,"td",18)(633,"code",24),e(634,"EventEmitter"),t()(),n(635,"td",20),e(636,"-"),t(),n(637,"td",21)(638,"em")(639,"strong"),e(640,"(opcional)"),t()(),n(641,"p"),e(642,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver click no listbox."),t(),n(643,"blockquote")(644,"p"),e(645,"Incompat\xEDvel com a propriedade "),n(646,"code"),e(647,"p-filter-locate"),t(),e(648,"."),t()()()(),n(649,"tr",14)(650,"td",15)(651,"div",16)(652,"span",17),e(653," p-literals"),l(654,"br"),t()()(),n(655,"td",18)(656,"code",32),e(657,"PoSearchLiterals"),t()(),n(658,"td",20),e(659,"-"),t(),n(660,"td",21)(661,"em")(662,"strong"),e(663,"(opcional)"),t()(),n(664,"p"),e(665,"Objeto com as literais usadas no "),n(666,"code"),e(667,"po-search"),t(),e(668,", permitindo personalizar os textos exibidos no componente."),t(),n(669,"p"),e(670,"Para utilizar basta passar a literal que deseja customizar:"),t(),n(671,"pre")(672,"code"),e(673,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),t()(),n(674,"p"),e(675,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),t(),n(676,"pre")(677,"code"),e(678,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),t()(),n(679,"blockquote")(680,"p"),e(681,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),n(682,"a",33)(683,"code"),e(684,"PoI18nService"),t()(),e(685,` ou
do browser.`),t()()()(),n(686,"tr",14)(687,"td",15)(688,"div",16)(689,"span",17),e(690," p-locate-summary"),l(691,"br"),t()()(),n(692,"td",18)(693,"code",34),e(694,"PoSearchLocateSummary"),t()(),n(695,"td",20),e(696,"-"),t(),n(697,"td",21)(698,"em")(699,"strong"),e(700,"(opcional)"),t()(),n(701,"p"),e(702,"Define os valores do contador exibido ao usar "),n(703,"code"),e(704,"p-filter-locate"),t(),e(705,`, indicando a posi\xE7\xE3o atual e o total de ocorr\xEAncias
encontradas.
Exemplo de uso:`),t(),n(706,"pre")(707,"code",35),e(708,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 }; // Exibe: "1 / 5"
`),t()(),n(709,"blockquote")(710,"p"),e(711,"Compat\xEDvel com a propriedade "),n(712,"code"),e(713,"p-filter-locate"),t(),e(714,"."),t()()()(),n(715,"tr",14)(716,"td",15)(717,"div",22)(718,"span",23),e(719," (p-next-occurrence)"),l(720,"br"),t()()(),n(721,"td",18)(722,"code",24),e(723,"EventEmitter"),t()(),n(724,"td",20),e(725,"-"),t(),n(726,"td",21)(727,"em")(728,"strong"),e(729,"(opcional)"),t()(),n(730,"p"),e(731,'Evento disparado ao clicar no controle "Pr\xF3ximo resultado".'),t(),n(732,"blockquote")(733,"p"),e(734,"Compat\xEDvel com a propriedade "),n(735,"code"),e(736,"p-filter-locate"),t(),e(737,"."),t()()()(),n(738,"tr",14)(739,"td",15)(740,"div",22)(741,"span",23),e(742," (p-previous-occurrence)"),l(743,"br"),t()()(),n(744,"td",18)(745,"code",24),e(746,"EventEmitter"),t()(),n(747,"td",20),e(748,"-"),t(),n(749,"td",21)(750,"em")(751,"strong"),e(752,"(opcional)"),t()(),n(753,"p"),e(754,'Evento disparado ao clicar no controle "Resultado anterior".'),t(),n(755,"blockquote")(756,"p"),e(757,"Compat\xEDvel com a propriedade "),n(758,"code"),e(759,"p-filter-locate"),t(),e(760,"."),t()()()(),n(761,"tr",14)(762,"td",15)(763,"div",16)(764,"span",17),e(765," p-show-listbox"),l(766,"br"),t()()(),n(767,"td",18)(768,"code",25),e(769,"boolean"),t()(),n(770,"td",20)(771,"p")(772,"code"),e(773,"false"),t()()(),n(774,"td",21)(775,"em")(776,"strong"),e(777,"(opcional)"),t()(),n(778,"p"),e(779,"Exibe uma lista (auto-complete) com as op\xE7\xF5es definidas em "),n(780,"code"),e(781,"p-filter-keys"),t(),e(782," ou "),n(783,"code"),e(784,"p-filter-select"),t(),e(785,` enquanto realiza
uma busca, respeitando o `),n(786,"code"),e(787,"p-filter-type"),t(),e(788," como modo de pesquisa."),t(),n(789,"blockquote")(790,"p"),e(791,"Incompat\xEDvel com a propriedade "),n(792,"code"),e(793,"p-filter-locate"),t(),e(794,"."),t()()()(),n(795,"tr",14)(796,"td",15)(797,"div",16)(798,"span",17),e(799," p-size"),l(800,"br"),t()()(),n(801,"td",18)(802,"code",19),e(803,"string"),t()(),n(804,"td",20)(805,"p")(806,"code"),e(807,"medium"),t()()(),n(808,"td",21)(809,"em")(810,"strong"),e(811,"(opcional)"),t()(),n(812,"p"),e(813,"Define o tamanho do componente:"),t(),n(814,"ul")(815,"li")(816,"code"),e(817,"small"),t(),e(818,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(819,"li")(820,"code"),e(821,"medium"),t(),e(822,": altura do input como 44px."),t()(),n(823,"blockquote")(824,"p"),e(825,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(826,"code"),e(827,"medium"),t(),e(828,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(829,"a",36),e(830,"po-theme"),t(),e(831,"."),t()()()(),n(832,"tr",14)(833,"td",15)(834,"div",16)(835,"span",17),e(836," p-search-type"),l(837,"br"),t()()(),n(838,"td",18)(839,"code",37),e(840,"searchMode"),t()(),n(841,"td",20)(842,"p")(843,"code"),e(844,"action"),t()()(),n(845,"td",21)(846,"em")(847,"strong"),e(848,"(opcional)"),t()(),n(849,"p"),e(850,"Determina a forma de realizar a pesquisa no componente. Valores aceitos:"),t(),n(851,"ul")(852,"li")(853,"code"),e(854,"action"),t(),e(855,": Realiza a busca a cada caractere digitado."),t(),n(856,"li")(857,"code"),e(858,"trigger"),t(),e(859,": Realiza a busca ao pressionar "),n(860,"code"),e(861,"enter"),t(),e(862," ou clicar no \xEDcone de busca."),t()(),n(863,"blockquote")(864,"p"),e(865,"Incompat\xEDvel com a propriedade "),n(866,"code"),e(867,"p-filter-locate"),t(),e(868,"."),t()()()()(),n(869,"h3"),e(870,"Interfaces"),t(),n(871,"h4",38)(872,"code",5),e(873,"PoSearchFilterSelect"),t()(),n(874,"div",2)(875,"p"),e(876,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas no dropdown do "),n(877,"code"),e(878,"po-search"),t(),e(879,", ao usar a propriedade "),n(880,"code"),e(881,"p-filter-select"),t(),e(882,"."),t()(),n(883,"h4",10),e(884,"Propriedades"),t(),n(885,"table",11)(886,"tr",12)(887,"th",13),e(888,"Nome"),t(),n(889,"th",13),e(890,"Tipo"),t(),n(891,"th",13),e(892,"Descri\xE7\xE3o"),t()(),n(893,"tr",14)(894,"td",15)(895,"div",16)(896,"span",17),e(897," label"),l(898,"br"),t()()(),n(899,"td",18)(900,"code",19),e(901,"string"),t()(),n(902,"td",21)(903,"p"),e(904,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),t()()(),n(905,"tr",14)(906,"td",15)(907,"div",16)(908,"span",17),e(909," value"),l(910,"br"),t()()(),n(911,"td",18)(912,"code",39),e(913,"Array<string> "),t(),n(914,"code",19),e(915," string"),t()(),n(916,"td",21)(917,"p"),e(918,"Valores que ser\xE3o atribu\xEDdos ao "),n(919,"code"),e(920,"p-filter-keys"),t()()()()(),n(921,"h4",38)(922,"code",5),e(923,"PoSearchLocateSummary"),t()(),n(924,"div",2)(925,"p"),e(926,"Interface que define o resumo de localiza\xE7\xE3o do filtro "),n(927,"code"),e(928,"p-filter-locate"),t(),e(929,"."),t()(),n(930,"h4",10),e(931,"Propriedades"),t(),n(932,"table",11)(933,"tr",12)(934,"th",13),e(935,"Nome"),t(),n(936,"th",13),e(937,"Tipo"),t(),n(938,"th",13),e(939,"Descri\xE7\xE3o"),t()(),n(940,"tr",14)(941,"td",15)(942,"div",16)(943,"span",17),e(944," currentIndex"),l(945,"br"),t()()(),n(946,"td",18)(947,"code",40),e(948,"number"),t()(),n(949,"td",21)(950,"p"),e(951,"\xCDndice atual da ocorr\xEAncia localizada."),t()()(),n(952,"tr",14)(953,"td",15)(954,"div",16)(955,"span",17),e(956," total"),l(957,"br"),t()()(),n(958,"td",18)(959,"code",40),e(960,"number"),t()(),n(961,"td",21)(962,"p"),e(963,"Total de ocorr\xEAncias encontradas."),t()()()(),n(964,"h4",38)(965,"code",5),e(966,"PoSearchOption"),t()(),n(967,"div",2)(968,"p"),e(969,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista ao procurar do "),n(970,"code"),e(971,"po-search"),t(),e(972,"."),t()(),n(973,"h4",10),e(974,"Propriedades"),t(),n(975,"table",11)(976,"tr",12)(977,"th",13),e(978,"Nome"),t(),n(979,"th",13),e(980,"Tipo"),t(),n(981,"th",13),e(982,"Descri\xE7\xE3o"),t()(),n(983,"tr",14)(984,"td",15)(985,"div",16)(986,"span",17),e(987," label"),l(988,"br"),t()()(),n(989,"td",18)(990,"code",19),e(991,"string"),t()(),n(992,"td",21)(993,"em")(994,"strong"),e(995,"(opcional)"),t()(),n(996,"p"),e(997,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),t(),n(998,"blockquote")(999,"p"),e(1e3,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),n(1001,"code"),e(1002,"value"),t(),e(1003,"."),t()()()(),n(1004,"tr",14)(1005,"td",15)(1006,"div",16)(1007,"span",17),e(1008," value"),l(1009,"br"),t()()(),n(1010,"td",18)(1011,"code",19),e(1012,"string "),t(),n(1013,"code",40),e(1014," number"),t()(),n(1015,"td",21)(1016,"p"),e(1017,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),n(1018,"em"),e(1019,"model"),t(),e(1020,"."),t()()()(),n(1021,"h4",38)(1022,"code",5),e(1023,"PoSearchLiterals"),t()(),n(1024,"div",2)(1025,"p"),e(1026,"Interface para defini\xE7\xE3o das literais usadas no "),n(1027,"code"),e(1028,"po-search"),t(),e(1029,"."),t()(),n(1030,"h4",10),e(1031,"Propriedades"),t(),n(1032,"table",11)(1033,"tr",12)(1034,"th",13),e(1035,"Nome"),t(),n(1036,"th",13),e(1037,"Tipo"),t(),n(1038,"th",13),e(1039,"Descri\xE7\xE3o"),t()(),n(1040,"tr",14)(1041,"td",15)(1042,"div",16)(1043,"span",17),e(1044," all"),l(1045,"br"),t()()(),n(1046,"td",18)(1047,"code",19),e(1048,"string"),t()(),n(1049,"td",21)(1050,"em")(1051,"strong"),e(1052,"(opcional)"),t()(),n(1053,"p"),e(1054,"Texto exibido no dropdown de tipo de filtro, representando todos os tipos dispon\xEDveis."),t(),n(1055,"blockquote")(1056,"p"),e(1057,"Exibido apenas quando a propriedade "),n(1058,"code"),e(1059,"p-filter-select"),t(),e(1060," estiver habilitada."),t()()()(),n(1061,"tr",14)(1062,"td",15)(1063,"div",16)(1064,"span",17),e(1065," clean"),l(1066,"br"),t()()(),n(1067,"td",18)(1068,"code",19),e(1069,"string"),t()(),n(1070,"td",21)(1071,"em")(1072,"strong"),e(1073,"(opcional)"),t()(),n(1074,"p"),e(1075,"Texto alternativo (aria-label) para o bot\xE3o de limpar o campo de busca, usado por leitores de tela."),t()()(),n(1076,"tr",14)(1077,"td",15)(1078,"div",16)(1079,"span",17),e(1080," next"),l(1081,"br"),t()()(),n(1082,"td",18)(1083,"code",19),e(1084,"string"),t()(),n(1085,"td",21)(1086,"em")(1087,"strong"),e(1088,"(opcional)"),t()(),n(1089,"p"),e(1090,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o pr\xF3ximo resultado da busca."),t(),n(1091,"blockquote")(1092,"p"),e(1093,"Exibido apenas quando a propriedade "),n(1094,"code"),e(1095,"p-filter-locate"),t(),e(1096," estiver habilitada."),t()()()(),n(1097,"tr",14)(1098,"td",15)(1099,"div",16)(1100,"span",17),e(1101," none"),l(1102,"br"),t()()(),n(1103,"td",18)(1104,"code",19),e(1105,"string"),t()(),n(1106,"td",21)(1107,"em")(1108,"strong"),e(1109,"(opcional)"),t()(),n(1110,"p"),e(1111,"Texto alternativo (aria-label) para quando nenhum resultado for encontrado."),t()()(),n(1112,"tr",14)(1113,"td",15)(1114,"div",16)(1115,"span",17),e(1116," of"),l(1117,"br"),t()()(),n(1118,"td",18)(1119,"code",19),e(1120,"string"),t()(),n(1121,"td",21)(1122,"em")(1123,"strong"),e(1124,"(opcional)"),t()(),n(1125,"p"),e(1126,'Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").'),t(),n(1127,"blockquote")(1128,"p"),e(1129,"Exibido apenas quando a propriedade "),n(1130,"code"),e(1131,"p-filter-locate"),t(),e(1132," estiver habilitada."),t()()()(),n(1133,"tr",14)(1134,"td",15)(1135,"div",16)(1136,"span",17),e(1137," previous"),l(1138,"br"),t()()(),n(1139,"td",18)(1140,"code",19),e(1141,"string"),t()(),n(1142,"td",21)(1143,"em")(1144,"strong"),e(1145,"(opcional)"),t()(),n(1146,"p"),e(1147,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o resultado anterior da busca."),t(),n(1148,"blockquote")(1149,"p"),e(1150,"Exibido apenas quando a propriedade "),n(1151,"code"),e(1152,"p-filter-locate"),t(),e(1153," estiver habilitada."),t()()()(),n(1154,"tr",14)(1155,"td",15)(1156,"div",16)(1157,"span",17),e(1158," result"),l(1159,"br"),t()()(),n(1160,"td",18)(1161,"code",19),e(1162,"string"),t()(),n(1163,"td",21)(1164,"em")(1165,"strong"),e(1166,"(opcional)"),t()(),n(1167,"p"),e(1168,'Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.'),t(),n(1169,"blockquote")(1170,"p"),e(1171,"Exibido apenas quando a propriedade "),n(1172,"code"),e(1173,"p-filter-locate"),t(),e(1174," estiver habilitada."),t()()()(),n(1175,"tr",14)(1176,"td",15)(1177,"div",16)(1178,"span",17),e(1179," search"),l(1180,"br"),t()()(),n(1181,"td",18)(1182,"code",19),e(1183,"string"),t()(),n(1184,"td",21)(1185,"em")(1186,"strong"),e(1187,"(opcional)"),t()(),n(1188,"p"),e(1189,"Texto exibido como "),n(1190,"em"),e(1191,"placeholder"),t(),e(1192," no campo de busca."),t()()()(),n(1193,"h3"),e(1194,"Enums"),t(),n(1195,"h4",4)(1196,"code",5),e(1197,"PoSearchFilterMode"),t()(),n(1198,"div",2)(1199,"p"),e(1200,"Define o tipo de busca usado no "),n(1201,"code"),e(1202,"po-search"),t(),e(1203,"."),t()(),n(1204,"h4",10),e(1205,"Propriedades"),t(),n(1206,"table",11)(1207,"tr",12)(1208,"th",13),e(1209,"Nome"),t(),n(1210,"th",13),e(1211,"Descri\xE7\xE3o"),t()(),n(1212,"tr",14)(1213,"td",15)(1214,"div",16)(1215,"span",17),e(1216," startsWith"),l(1217,"br"),t()()(),n(1218,"td",21)(1219,"p"),e(1220,"Verifica se o texto "),n(1221,"em"),e(1222,"inicia"),t(),e(1223," com o valor pesquisado."),t()()(),n(1224,"tr",14)(1225,"td",15)(1226,"div",16)(1227,"span",17),e(1228," contains"),l(1229,"br"),t()()(),n(1230,"td",21)(1231,"p"),e(1232,"Verifica se o texto "),n(1233,"em"),e(1234,"cont\xE9m"),t(),e(1235," o valor pesquisado."),t()()(),n(1236,"tr",14)(1237,"td",15)(1238,"div",16)(1239,"span",17),e(1240," endsWith"),l(1241,"br"),t()()(),n(1242,"td",21)(1243,"p"),e(1244,"Verifica se o texto "),n(1245,"em"),e(1246,"finaliza"),t(),e(1247," com o valor pesquisado."),t()()()()())},dependencies:[x],encapsulation:2})}return o})();var He=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,r){this.route=a,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let r=a.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||o)(F(he),F(Se))};static \u0275cmp=f({type:o,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Search",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-search-doc"),t(),n(4,"po-tab",3),u("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-search-basic-view")(6,"sample-po-search-labs-view")(7,"sample-po-search-find-people-view")(8,"sample-po-search-listbox-view")(9,"sample-po-search-filter-select-view")(10,"sample-po-search-fields-locate-view"),t()()()),r&2&&(m("p-actions",i.actions),s(2),m("p-active",i.activeTab==="doc"),s(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[Ie,b,v,ke,De,Ae,Ve,Ne,je,We],encapsulation:2})}return o})();var Ft=[{path:"",component:He}],Re=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=K({type:o});static \u0275inj=R({imports:[ne.forChild(Ft),ne]})}return o})();var gn=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=K({type:o});static \u0275inj=R({imports:[Me,Re]})}return o})();export{gn as DocPoSearchModule};
