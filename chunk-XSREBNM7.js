import{o as w,p as oe}from"./chunk-JYNCG2Y6.js";import{Aa as te,Ab as y,Ca as ie,F as Z,Ga as V,Wa as ne,fa as T,ha as $,nb as ae,ta as ee,zb as P}from"./chunk-HBOGTDFH.js";import{$a as b,Ac as Q,Ba as D,Ea as i,Fa as t,Ga as r,Ka as q,L as H,La as u,M as F,Nc as X,O as j,Pc as Y,Rc as W,T as S,Tb as U,U as v,Wa as I,Xa as e,Za as x,ab as g,bb as f,cb as R,db as z,eb as E,ha as m,ia as M,o as N,oa as h,pa as k,ub as _,wc as L,xc as J,ya as c,yc as K,zc as B}from"./chunk-MIQUIDUB.js";var fe=()=>({value:"disclaimer"}),Se=a=>[a],le=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-disclaimer-group-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-disclaimers"]],template:function(o,n){o&1&&r(0,"po-disclaimer-group",0),o&2&&c("p-disclaimers",E(2,Se,z(1,fe)))},dependencies:[T],encapsulation:2})}return a})();var Ce=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-disclaimer-group-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(r(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Disclaimer Group Basic"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-disclaimer-group [p-disclaimers]="[{ value: 'disclaimer' }]"></po-disclaimer-group>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-disclaimer-group-basic/sample-po-disclaimer-group-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-disclaimer-group-basic',
  templateUrl: './sample-po-disclaimer-group-basic.component.html',
  standalone: false
})
export class SamplePoDisclaimerGroupBasicComponent {}
`),t()()()()(),i(21,"div",10),r(22,"sample-po-disclaimer-group-basic"),t(),r(23,"hr")),o&2&&(m(5),D("po-icon "+n.sampleCodeButtonIcon),m(),x(" ",n.sampleCodeButtonLabel,""),m(),c("ngClass",E(4,Ce,n.hideSampleCodeTabs)))},dependencies:[_,w,P,y,le],encapsulation:2})}return a})();var me=(()=>{class a{disclaimer;disclaimers;event;properties=[];title;propertiesOptions=[{value:"hideRemoveAll",label:"Hide remove all"}];ngOnInit(){this.restore()}addDisclaimer(){this.disclaimers=[...this.disclaimers,this.disclaimer],this.disclaimer={value:void 0}}changeEvent(l){this.event=l}restore(){this.disclaimer={value:void 0},this.disclaimers=[],this.event=""}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-disclaimer-group-labs"]],standalone:!1,decls:23,vars:12,consts:[["disclaimerForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change","p-disclaimers","p-hide-remove-all","p-title"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","disclaimerLabel","p-label","Disclaimer Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-label","Disclaimer Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-label","Disclaimer Property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer Hide Close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Disclaimer",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,n){if(o&1){let s=q();i(0,"po-disclaimer-group",2),u("p-change",function(){return S(s),v(n.changeEvent("p-change"))}),t(),r(1,"hr"),i(2,"div",3),r(3,"po-info",4),t(),r(4,"hr"),i(5,"form",null,0)(7,"div",3)(8,"po-input",5),f("ngModelChange",function(d){return S(s),g(n.disclaimer.label,d)||(n.disclaimer.label=d),v(d)}),t(),i(9,"po-input",6),f("ngModelChange",function(d){return S(s),g(n.disclaimer.value,d)||(n.disclaimer.value=d),v(d)}),t()(),i(10,"div",3)(11,"po-input",7),f("ngModelChange",function(d){return S(s),g(n.disclaimer.property,d)||(n.disclaimer.property=d),v(d)}),t(),i(12,"po-switch",8),f("ngModelChange",function(d){return S(s),g(n.disclaimer.hideClose,d)||(n.disclaimer.hideClose=d),v(d)}),t()(),i(13,"div",3)(14,"po-button",9),u("p-click",function(){return S(s),v(n.addDisclaimer())}),t()()(),r(15,"hr"),i(16,"form",null,1)(18,"div",3)(19,"po-input",10),f("ngModelChange",function(d){return S(s),g(n.title,d)||(n.title=d),v(d)}),t(),i(20,"po-checkbox-group",11),f("ngModelChange",function(d){return S(s),g(n.properties,d)||(n.properties=d),v(d)}),t()(),i(21,"div",3)(22,"po-button",12),u("p-click",function(){S(s);let d=I(6),ge=I(17);return d.reset(),ge.reset(),v(n.restore())}),t()()()}if(o&2){let s=I(6);c("p-disclaimers",n.disclaimers)("p-hide-remove-all",n.properties==null?null:n.properties.includes("hideRemoveAll"))("p-title",n.title),m(3),c("p-value",n.event),m(5),b("ngModel",n.disclaimer.label),m(),b("ngModel",n.disclaimer.value),m(2),b("ngModel",n.disclaimer.property),m(),b("ngModel",n.disclaimer.hideClose),m(2),c("p-disabled",s.invalid),m(5),b("ngModel",n.title),m(),b("ngModel",n.properties),c("p-options",n.propertiesOptions)}},dependencies:[Q,L,J,B,K,Z,T,$,V,ee,ne],encapsulation:2})}return a})();var we=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-disclaimer-group-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(r(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Disclaimer Group Labs"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-disclaimer-group
  [p-disclaimers]="disclaimers"
  [p-hide-remove-all]="properties?.includes('hideRemoveAll')"
  [p-title]="title"
  (p-change)="changeEvent('p-change')"
>
</po-disclaimer-group>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<hr />

<form #disclaimerForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerLabel" [(ngModel)]="disclaimer.label" p-label="Disclaimer Label">
    </po-input>

    <po-input
      class="po-md-6"
      name="disclaimerValue"
      [(ngModel)]="disclaimer.value"
      p-label="Disclaimer Value"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerProperty" [(ngModel)]="disclaimer.property" p-label="Disclaimer Property">
    </po-input>

    <po-switch
      class="po-md-6"
      name="disclaimerHideClose"
      [(ngModel)]="disclaimer.hideClose"
      p-label="Disclaimer Hide Close"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-3"
      p-label="Add Disclaimer"
      [p-disabled]="disclaimerForm.invalid"
      (p-click)="addDisclaimer()"
    >
    </po-button>
  </div>
</form>

<hr />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-clean p-label="Title"> </po-input>

    <po-checkbox-group
      class="po-md-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Sample Restore"
      (p-click)="disclaimerForm.reset(); propertiesForm.reset(); restore()"
    >
    </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-disclaimer-group-labs/sample-po-disclaimer-group-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoDisclaimer } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-disclaimer-group-labs',
  templateUrl: './sample-po-disclaimer-group-labs.component.html',
  standalone: false
})
export class SamplePoDisclaimerGroupLabsComponent implements OnInit {
  disclaimer: PoDisclaimer;
  disclaimers: Array<PoDisclaimer>;
  event: string;
  properties: Array<string> = [];
  title: string;

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'hideRemoveAll', label: 'Hide remove all' }];

  ngOnInit() {
    this.restore();
  }

  addDisclaimer() {
    this.disclaimers = [...this.disclaimers, this.disclaimer];

    this.disclaimer = { value: undefined };
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.disclaimer = { value: undefined };
    this.disclaimers = [];

    this.event = '';
  }
}
`),t()()()()(),i(21,"div",10),r(22,"sample-po-disclaimer-group-labs"),t(),r(23,"hr")),o&2&&(m(5),D("po-icon "+n.sampleCodeButtonIcon),m(),x(" ",n.sampleCodeButtonLabel,""),m(),c("ngClass",E(4,we,n.hideSampleCodeTabs)))},dependencies:[_,w,P,y,me],encapsulation:2})}return a})();var O=(()=>{class a{http;constructor(l){this.http=l}getClimates(){return[{value:"arid",label:"Arid"},{value:"frozen",label:"Frozen"},{value:"murky",label:"Murky"},{value:"temperate",label:"Temperate"},{value:"tropical",label:"Tropical"}]}getColumns(){return[{property:"name",label:"Planet Name"},{property:"climate",label:"Climate"},{property:"terrain",label:"Terrain"},{property:"surface_water",label:"Surface Water"},{property:"gravity",label:"Gravity"},{property:"population",label:"Population",type:"number"}]}getItems(){return this.http.get("https://swapi.dev/api/planets/").pipe(N(l=>l.results))}getTerrains(){return[{value:"barren",label:"Barren"},{value:"cityscape",label:"Cityscape"},{value:"desert",label:"Desert"},{value:"forests",label:"Forests"},{value:"gas giant",label:"Gas giant"},{value:"grasslands",label:"Grasslands"},{value:"grassy hills",label:"Grassy hills"},{value:"ice caves",label:"Ice caves"},{value:"jungles",label:"Jungles"},{value:"lakes",label:"Lakes"},{value:"mountain ranges",label:"Mountain ranges"},{value:"mountains",label:"Mountains"},{value:"ocean",label:"Ocean"},{value:"rainforests",label:"Rainforests"},{value:"rock",label:"Rock"},{value:"swamp",label:"Swamp"},{value:"tundra",label:"Tundra"}]}static \u0275fac=function(o){return new(o||a)(j(U))};static \u0275prov=H({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var de=(()=>{class a{disclaimerGroupSwPlanetsService;climate;columns;filteredItems=[];filters=[];items;name;terrain;climates;terrains;constructor(l){this.disclaimerGroupSwPlanetsService=l}ngOnInit(){this.disclaimerGroupSwPlanetsService.getItems().subscribe(l=>{this.items=l,this.filteredItems=[...this.items]}),this.columns=this.disclaimerGroupSwPlanetsService.getColumns(),this.climates=this.disclaimerGroupSwPlanetsService.getClimates(),this.terrains=this.disclaimerGroupSwPlanetsService.getTerrains()}addFilter(l,o){let n=this.filters.find(s=>s.property===o);n?(this.filters.splice(this.filters.indexOf(n),1),n=Object.assign({},n)):n={property:o},n.value=l,n.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,n]}changeFilters(l){l.length?this.filter(l):this.resetFilters(),this.clearFieldsIfNoFilter("name","terrain","climate")}clearFieldsIfNoFilter(...l){let o=s=>!this.filters.some(p=>p.property===s);l.filter(s=>this[s]&&o(s)).forEach(s=>this[s]=void 0)}filter(l){let o=(s,p)=>p[s.property].toLocaleLowerCase().includes(s.value.toLocaleLowerCase()),n=s=>l.every(p=>o(p,s));this.filteredItems=this.items.filter(n)}resetFilters(){this.filteredItems=[...this.items||[]]}static \u0275fac=function(o){return new(o||a)(M(O))};static \u0275cmp=h({type:a,selectors:[["sample-po-disclaimer-group-sw-planets"]],standalone:!1,features:[R([O])],decls:8,vars:9,consts:[[1,"po-row"],["name","name","p-help","Contains planet name","p-label","Planet Name",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","climate","p-help","Planet climate","p-label","Climate",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","terrain","p-help","Planet terrain","p-label","Terrain",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],[3,"p-change","p-disclaimers"],[1,"po-md-12",3,"p-columns","p-items","p-hide-table-search"]],template:function(o,n){o&1&&(i(0,"div",0)(1,"po-input",1),f("ngModelChange",function(p){return g(n.name,p)||(n.name=p),p}),u("p-change",function(){return n.addFilter(n.name,"name")}),t(),i(2,"po-combo",2),f("ngModelChange",function(p){return g(n.climate,p)||(n.climate=p),p}),u("p-change",function(){return n.addFilter(n.climate,"climate")}),t(),i(3,"po-combo",3),f("ngModelChange",function(p){return g(n.terrain,p)||(n.terrain=p),p}),u("p-change",function(){return n.addFilter(n.terrain,"terrain")}),t(),i(4,"po-disclaimer-group",4),u("p-change",function(){return n.changeFilters(n.filters)}),t()(),r(5,"hr"),i(6,"div",0),r(7,"po-table",5),t()),o&2&&(m(),b("ngModel",n.name),m(),b("ngModel",n.climate),c("p-options",n.climates),m(),b("ngModel",n.terrain),c("p-options",n.terrains),m(),c("p-disclaimers",n.filters),m(3),c("p-columns",n.columns)("p-items",n.filteredItems)("p-hide-table-search",!1))},dependencies:[L,B,T,ie,V,te],encapsulation:2})}return a})();var Te=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-disclaimer-group-sw-planets-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,n){o&1&&(r(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Disclaimer Group - Star Wars Planets"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-input
    class="po-md-4"
    name="name"
    [(ngModel)]="name"
    p-help="Contains planet name"
    p-label="Planet Name"
    (p-change)="addFilter(name, 'name')"
  >
  </po-input>

  <po-combo
    class="po-md-4"
    name="climate"
    [(ngModel)]="climate"
    p-help="Planet climate"
    p-label="Climate"
    [p-options]="climates"
    (p-change)="addFilter(climate, 'climate')"
  >
  </po-combo>

  <po-combo
    class="po-md-4"
    [(ngModel)]="terrain"
    name="terrain"
    p-help="Planet terrain"
    p-label="Terrain"
    [p-options]="terrains"
    (p-change)="addFilter(terrain, 'terrain')"
  >
  </po-combo>

  <po-disclaimer-group [p-disclaimers]="filters" (p-change)="changeFilters(filters)"> </po-disclaimer-group>
</div>

<hr />

<div class="po-row">
  <po-table class="po-md-12" [p-columns]="columns" [p-items]="filteredItems" [p-hide-table-search]="false"> </po-table>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoComboOption, PoDisclaimer, PoTableColumn } from '@po-ui/ng-components';

import { SamplePoDisclaimerGroupSwPlanetsService } from './sample-po-disclaimer-group-sw-planets.service';

@Component({
  selector: 'sample-po-disclaimer-group-sw-planets',
  templateUrl: './sample-po-disclaimer-group-sw-planets.component.html',
  providers: [SamplePoDisclaimerGroupSwPlanetsService],
  standalone: false
})
export class SamplePoDisclaimerGroupSwPlanetsComponent implements OnInit {
  climate: string;
  columns: Array<PoTableColumn>;
  filteredItems: Array<any> = [];
  filters: Array<PoDisclaimer> = [];
  items: Array<any>;
  name: string;
  terrain: string;

  public climates: Array<PoComboOption>;
  public terrains: Array<PoComboOption>;

  constructor(public disclaimerGroupSwPlanetsService: SamplePoDisclaimerGroupSwPlanetsService) {}

  ngOnInit() {
    this.disclaimerGroupSwPlanetsService.getItems().subscribe(items => {
      this.items = items;
      this.filteredItems = [...this.items];
    });
    this.columns = this.disclaimerGroupSwPlanetsService.getColumns();
    this.climates = this.disclaimerGroupSwPlanetsService.getClimates();
    this.terrains = this.disclaimerGroupSwPlanetsService.getTerrains();
  }

  addFilter(value: any, property: string) {
    let filter = this.filters.find(item => item.property === property);

    if (!filter) {
      filter = <any>{ property: property };
    } else {
      this.filters.splice(this.filters.indexOf(filter), 1);
      filter = Object.assign({}, filter);
    }

    filter.value = value;
    filter.label = \`\${property.charAt(0).toUpperCase() + property.slice(1)}: \${value}\`;
    this.filters = [...this.filters, filter];
  }

  changeFilters(filters: Array<PoDisclaimer>) {
    filters.length ? this.filter(filters) : this.resetFilters();
    this.clearFieldsIfNoFilter('name', 'terrain', 'climate');
  }

  private clearFieldsIfNoFilter(...fields: Array<string>) {
    const fieldHaveNoFilter = field => !this.filters.some(filter => filter.property === field);

    const fieldsWithoutFilter = fields.filter(field => this[field] && fieldHaveNoFilter(field));

    fieldsWithoutFilter.forEach(field => (this[field] = undefined));
  }

  private filter(filters: Array<PoDisclaimer>) {
    const filterCondition = (filter, item) =>
      item[filter.property].toLocaleLowerCase().includes(filter.value.toLocaleLowerCase());
    const filterItems = item => filters.every(filter => filterCondition(filter, item));

    this.filteredItems = this.items.filter(filterItems);
  }

  private resetFilters() {
    this.filteredItems = [...(this.items || [])];
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-disclaimer-group-sw-planets/sample-po-disclaimer-group-sw-planets.service.ts"),t(),i(23,"pre",9),e(24,`import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoComboOption, PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoDisclaimerGroupSwPlanetsService {
  constructor(private http: HttpClient) {}

  getClimates(): Array<PoComboOption> {
    return [
      { value: 'arid', label: 'Arid' },
      { value: 'frozen', label: 'Frozen' },
      { value: 'murky', label: 'Murky' },
      { value: 'temperate', label: 'Temperate' },
      { value: 'tropical', label: 'Tropical' }
    ];
  }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'name', label: 'Planet Name' },
      { property: 'climate', label: 'Climate' },
      { property: 'terrain', label: 'Terrain' },
      { property: 'surface_water', label: 'Surface Water' },
      { property: 'gravity', label: 'Gravity' },
      { property: 'population', label: 'Population', type: 'number' }
    ];
  }

  getItems(): Observable<Array<any>> {
    return this.http.get('https://swapi.dev/api/planets/').pipe(map((response: any) => response.results));
  }

  getTerrains(): Array<PoComboOption> {
    return [
      { value: 'barren', label: 'Barren' },
      { value: 'cityscape', label: 'Cityscape' },
      { value: 'desert', label: 'Desert' },
      { value: 'forests', label: 'Forests' },
      { value: 'gas giant', label: 'Gas giant' },
      { value: 'grasslands', label: 'Grasslands' },
      { value: 'grassy hills', label: 'Grassy hills' },
      { value: 'ice caves', label: 'Ice caves' },
      { value: 'jungles', label: 'Jungles' },
      { value: 'lakes', label: 'Lakes' },
      { value: 'mountain ranges', label: 'Mountain ranges' },
      { value: 'mountains', label: 'Mountains' },
      { value: 'ocean', label: 'Ocean' },
      { value: 'rainforests', label: 'Rainforests' },
      { value: 'rock', label: 'Rock' },
      { value: 'swamp', label: 'Swamp' },
      { value: 'tundra', label: 'Tundra' }
    ];
  }
}
`),t()()()()(),i(25,"div",10),r(26,"sample-po-disclaimer-group-sw-planets"),t(),r(27,"hr")),o&2&&(m(5),D("po-icon "+n.sampleCodeButtonIcon),m(),x(" ",n.sampleCodeButtonLabel,""),m(),c("ngClass",E(4,Te,n.hideSampleCodeTabs)))},dependencies:[_,w,P,y,de],encapsulation:2})}return a})();var ue=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-disclaimer-group-doc"]],standalone:!1,decls:369,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-list"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoDisclaimer[]"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"]],template:function(o,n){o&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoDisclaimerGroupModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-disclaimer-group."),t()(),i(7,"h3",3),e(8,"Componente"),t(),i(9,"h4",4)(10,"code",5),e(11,"PoDisclaimerGroupComponent"),t()(),i(12,"div",2)(13,"p"),e(14,"O componente "),i(15,"code"),e(16,"po-disclaimer-group"),t(),e(17," \xE9 recomendado para manipular palavras-chave de filtros aplicados em uma pesquisa."),t(),i(18,"p"),e(19,"\xC0 partir de dois "),i(20,"em"),e(21,"disclaimers"),t(),e(22," com o bot\xE3o "),i(23,"strong"),e(24,"fechar"),t(),e(25,` habilitado, o componente renderiza de forma autom\xE1tica um novo e destacado
`),i(26,"em"),e(27,"disclaimer"),t(),e(28," que possibilita "),i(29,"strong"),e(30,"remover todos"),t(),e(31,", mas que tamb\xE9m pode ser desabilitado."),t(),i(32,"p"),e(33,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),i(34,"em"),e(35,"disclaimers"),t(),e(36," atrav\xE9s do teclado utilizando a tecla "),i(37,"em"),e(38,"tab"),t(),e(39," e, para remo\xE7\xE3o do "),i(40,"em"),e(41,"disclaimer"),t(),e(42,` selecionado,
basta pressionar a tecla `),i(43,"em"),e(44,"enter"),t(),e(45,". Esta funcionalidade n\xE3o se aplica caso a propriedade "),i(46,"code"),e(47,"hideClose"),t(),e(48," estiver habilitada."),t(),i(49,"blockquote")(50,"p"),e(51,"Veja a integra\xE7\xE3o destas funcionalidade no componente "),i(52,"a",6),e(53,"po-page-list"),t(),e(54,". "),t()()(),i(55,"div",7)(56,"h4",8),e(57,"Seletor"),t(),i(58,"pre",9),e(59,`<po-disclaimer-group
    (p-change)="EventEmitter"
    p-disclaimers="PoDisclaimer[]"
    p-hide-remove-all="boolean"
    (p-remove)="EventEmitter"
    (p-remove-all)="EventEmitter"
    p-title="string" >
</po-disclaimer-group>
`),t()(),i(60,"h4",10),e(61,"Propriedades"),t(),i(62,"table",11)(63,"tr",12)(64,"th",13),e(65,"Nome"),t(),i(66,"th",13),e(67,"Tipo"),t(),i(68,"th",13),e(69,"Padr\xE3o"),t(),i(70,"th",13),e(71,"Descri\xE7\xE3o"),t()(),i(72,"tr",14)(73,"td",15)(74,"div",16)(75,"span",17),e(76," (p-change)"),r(77,"br"),t()()(),i(78,"td",18)(79,"code",19),e(80,"EventEmitter"),t()(),i(81,"td",20),e(82,"-"),t(),i(83,"td",21)(84,"em")(85,"strong"),e(86,"(opcional)"),t()(),i(87,"p"),e(88,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),i(89,"em"),e(90,"disclaimers"),t(),e(91," for modificada."),t()()(),i(92,"tr",14)(93,"td",15)(94,"div",22)(95,"span",23),e(96," p-disclaimers"),r(97,"br"),t()()(),i(98,"td",18)(99,"code",24),e(100,"PoDisclaimer[]"),t()(),i(101,"td",20),e(102,"-"),t(),i(103,"td",21)(104,"p"),e(105,"Lista de "),i(106,"em"),e(107,"disclaimers"),t(),e(108,"."),t(),i(109,"p"),e(110,"Para que a lista de "),i(111,"em"),e(112,"disclaimers"),t(),e(113," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),i(114,"code"),e(115,"PoDisclaimer"),t(),e(116,"."),t(),i(117,"p"),e(118,"Exemplo adicionando um "),i(119,"em"),e(120,"disclaimer"),t(),e(121," no array:"),t(),i(122,"pre")(123,"code"),e(124,`this.disclaimers = [...this.disclaimers, disclaimer];
`),t()(),i(125,"p"),e(126,"ou"),t(),i(127,"pre")(128,"code"),e(129,`this.disclaimers = this.disclaimers.concat(disclaimer);
`),t()()()(),i(130,"tr",14)(131,"td",15)(132,"div",22)(133,"span",23),e(134," p-hide-remove-all"),r(135,"br"),t()()(),i(136,"td",18)(137,"code",25),e(138,"boolean"),t()(),i(139,"td",20)(140,"p")(141,"code"),e(142,"false"),t()()(),i(143,"td",21)(144,"em")(145,"strong"),e(146,"(opcional)"),t()(),i(147,"p"),e(148,"Oculta o bot\xE3o para remover todos os "),i(149,"em"),e(150,"disclaimers"),t(),e(151," do grupo."),t(),i(152,"blockquote")(153,"p"),e(154,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),i(155,"em"),e(156,"disclaimers"),t(),e(157," com a op\xE7\xE3o "),i(158,"code"),e(159,"hideClose"),t(),e(160," habilitada."),t()()()(),i(161,"tr",14)(162,"td",15)(163,"div",16)(164,"span",17),e(165," (p-remove)"),r(166,"br"),t()()(),i(167,"td",18)(168,"code",19),e(169,"EventEmitter"),t()(),i(170,"td",20),e(171,"-"),t(),i(172,"td",21)(173,"em")(174,"strong"),e(175,"(opcional)"),t()(),i(176,"p"),e(177,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),i(178,"em"),e(179,"disclaimer"),t(),e(180," for removido da lista de "),i(181,"em"),e(182,"disclaimers"),t(),e(183," pelo usu\xE1rio."),t(),i(184,"p"),e(185,"Recebe como par\xE2metro um objeto conforme a interface "),i(186,"code"),e(187,"PoDisclaimerGroupRemoveAction"),t(),e(188,"."),t()()(),i(189,"tr",14)(190,"td",15)(191,"div",16)(192,"span",17),e(193," (p-remove-all)"),r(194,"br"),t()()(),i(195,"td",18)(196,"code",19),e(197,"EventEmitter"),t()(),i(198,"td",20),e(199,"-"),t(),i(200,"td",21)(201,"em")(202,"strong"),e(203,"(opcional)"),t()(),i(204,"p"),e(205,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),i(206,"em"),e(207,"disclaimers"),t(),e(208," forem removidos da lista de "),i(209,"em"),e(210,"disclaimers"),t(),e(211,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),t(),i(212,"p"),e(213,"Recebe como par\xE2metro uma lista contendo todos os "),i(214,"code"),e(215,"disclaimers"),t(),e(216," removidos."),t()()(),i(217,"tr",14)(218,"td",15)(219,"div",22)(220,"span",23),e(221," p-title"),r(222,"br"),t()()(),i(223,"td",18)(224,"code",26),e(225,"string"),t()(),i(226,"td",20),e(227,"-"),t(),i(228,"td",21)(229,"em")(230,"strong"),e(231,"(opcional)"),t()(),i(232,"p"),e(233,"T\xEDtulo do grupo de "),i(234,"em"),e(235,"disclaimers"),t(),e(236,"."),t()()()(),i(237,"h3"),e(238,"Interfaces"),t(),i(239,"h4",27)(240,"code",5),e(241,"PoDisclaimer"),t()(),i(242,"div",2)(243,"p"),e(244,"Interface que representa o objeto "),i(245,"code"),e(246,"po-disclaimer"),t(),e(247,"."),t()(),i(248,"h4",10),e(249,"Propriedades"),t(),i(250,"table",11)(251,"tr",12)(252,"th",13),e(253,"Nome"),t(),i(254,"th",13),e(255,"Tipo"),t(),i(256,"th",13),e(257,"Descri\xE7\xE3o"),t()(),i(258,"tr",14)(259,"td",15)(260,"div",22)(261,"span",23),e(262," hideClose"),r(263,"br"),t()()(),i(264,"td",18)(265,"code",25),e(266,"boolean"),t()(),i(267,"td",21)(268,"em")(269,"strong"),e(270,"(opcional)"),t()(),i(271,"p"),e(272,"Se verdadeiro, oculta o bot\xE3o para fechar o "),i(273,"em"),e(274,"disclaimer"),t(),e(275,"."),t()()(),i(276,"tr",14)(277,"td",15)(278,"div",22)(279,"span",23),e(280," label"),r(281,"br"),t()()(),i(282,"td",18)(283,"code",26),e(284,"string"),t()(),i(285,"td",21)(286,"em")(287,"strong"),e(288,"(opcional)"),t()(),i(289,"p"),e(290,"Texto de exibi\xE7\xE3o do objeto."),t()()(),i(291,"tr",14)(292,"td",15)(293,"div",22)(294,"span",23),e(295," property"),r(296,"br"),t()()(),i(297,"td",18)(298,"code",26),e(299,"string"),t()(),i(300,"td",21)(301,"em")(302,"strong"),e(303,"(opcional)"),t()(),i(304,"p"),e(305,"Nome da propriedade vinculada ao objeto "),i(306,"em"),e(307,"disclaimer"),t(),e(308,"."),t()()(),i(309,"tr",14)(310,"td",15)(311,"div",22)(312,"span",23),e(313," value"),r(314,"br"),t()()(),i(315,"td",18)(316,"code",28),e(317,"any"),t()(),i(318,"td",21)(319,"p"),e(320,"Valor do objeto."),t()()()(),i(321,"h4",27)(322,"code",5),e(323,"PoDisclaimerGroupRemoveAction"),t()(),i(324,"div",2)(325,"p"),e(326,"Estrutura do objeto representando o estado dos "),i(327,"em"),e(328,"disclaimers"),t(),e(329," ap\xF3s a remo\xE7\xE3o."),t()(),i(330,"h4",10),e(331,"Propriedades"),t(),i(332,"table",11)(333,"tr",12)(334,"th",13),e(335,"Nome"),t(),i(336,"th",13),e(337,"Tipo"),t(),i(338,"th",13),e(339,"Descri\xE7\xE3o"),t()(),i(340,"tr",14)(341,"td",15)(342,"div",22)(343,"span",23),e(344," currentDisclaimers"),r(345,"br"),t()()(),i(346,"td",18)(347,"code",29),e(348,"Array<PoDisclaimer>"),t()(),i(349,"td",21)(350,"p"),e(351,"Lista com os "),i(352,"em"),e(353,"disclaimers"),t(),e(354," atuais (restantes)."),t()()(),i(355,"tr",14)(356,"td",15)(357,"div",22)(358,"span",23),e(359," removedDisclaimer"),r(360,"br"),t()()(),i(361,"td",18)(362,"code",30),e(363,"PoDisclaimer"),t()(),i(364,"td",21)(365,"p")(366,"em"),e(367,"Disclaimer"),t(),e(368," que foi removido."),t()()()()())},dependencies:[w],encapsulation:2})}return a})();var he=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||a)(M(X),M(Y))};static \u0275cmp=h({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Disclaimer Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,n){o&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),r(3,"sample-po-disclaimer-group-doc"),t(),i(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),r(5,"sample-po-disclaimer-group-basic-view")(6,"sample-po-disclaimer-group-labs-view")(7,"sample-po-disclaimer-group-sw-planets-view"),t()()()),o&2&&(c("p-actions",n.actions),m(2),c("p-active",n.activeTab==="doc"),m(2),c("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ae,P,y,se,pe,ce,ue],encapsulation:2})}return a})();var Fe=[{path:"",component:he}],be=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=k({type:a});static \u0275inj=F({imports:[W.forChild(Fe),W]})}return a})();var at=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=k({type:a});static \u0275inj=F({imports:[oe,be]})}return a})();export{at as DocPoDisclaimerGroupModule};
