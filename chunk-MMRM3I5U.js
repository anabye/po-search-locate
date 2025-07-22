import{o as P,p as ae}from"./chunk-JYNCG2Y6.js";import{Ab as y,F as X,Ra as ne,T as Y,Wa as W,Z as $,_ as M,a as K,ja as ee,la as te,nb as I,zb as E}from"./chunk-HBOGTDFH.js";import{$a as g,Ac as U,Ba as T,Ea as e,Fa as t,Ga as l,Jb as Q,Ka as R,La as h,M as B,Nc as J,Pa as H,Pc as Z,Rc as N,T as S,U as v,Xa as n,Za as k,ab as C,bb as b,eb as x,ha as d,ia as _,kb as j,lb as q,oa as u,pa as L,ub as D,wc as O,xc as z,ya as r,yc as G,zc as V}from"./chunk-MIQUIDUB.js";var ie=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-calendar-basic"]],standalone:!1,decls:1,vars:0,template:function(o,a){o&1&&l(0,"po-calendar")},dependencies:[M],encapsulation:2})}return i})();var he=i=>({"docs-sample-code-tabs":i}),oe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-calendar-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,a){o&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Calendar Basic"),t(),e(4,"a",2),h("click",function(){return a.toggleSampleCodeTabs()}),l(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-calendar-basic/sample-po-calendar-basic.component.html"),t(),e(13,"pre",7),n(14,`<po-calendar></po-calendar>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-calendar-basic/sample-po-calendar-basic.component.ts"),t(),e(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-calendar-basic',
  templateUrl: './sample-po-calendar-basic.component.html',
  standalone: false
})
export class SamplePoCalendarBasicComponent {}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-calendar-basic"),t(),l(23,"hr")),o&2&&(d(5),T("po-icon "+a.sampleCodeButtonIcon),d(),k(" ",a.sampleCodeButtonLabel,""),d(),r("ngClass",x(4,he,a.hideSampleCodeTabs)))},dependencies:[D,P,E,y,ie],encapsulation:2})}return i})();var le=(()=>{class i{calendar;event;locale;maxDate;minDate;mode;localeOptions=[{label:"pt",value:"pt"},{label:"es",value:"es"},{label:"en",value:"en"},{label:"ru",value:"ru"}];calendarModeOptions=[{label:"Range",value:$.Range},{label:"Unset",value:null}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.calendar=void 0,this.event=void 0,this.locale=void 0,this.maxDate=void 0,this.minDate=void 0,this.mode=void 0}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-calendar-labs"]],standalone:!1,decls:18,vars:17,consts:[["f","ngForm"],[1,"po-md-8","po-p-2"],[3,"ngModelChange","p-change","ngModel","p-locale","p-min-date","p-max-date","p-mode"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","minDate","p-clean","","p-label","Min Date",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max Date",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"],["name","mode","p-label","Mode",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","locales","p-columns","4","p-help","Select a locale for the calendar","p-label","Locale",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,a){if(o&1){let c=R();e(0,"div",1)(1,"po-calendar",2),b("ngModelChange",function(m){return S(c),C(a.calendar,m)||(a.calendar=m),v(m)}),h("p-change",function(){return S(c),v(a.changeEvent("p-change"))}),t()(),l(2,"hr"),e(3,"div",3),l(4,"po-info",4),j(5,"json"),l(6,"po-info",5),t(),l(7,"hr"),e(8,"form",null,0)(10,"div",3)(11,"po-datepicker",6),b("ngModelChange",function(m){return S(c),C(a.minDate,m)||(a.minDate=m),v(m)}),t(),e(12,"po-datepicker",7),b("ngModelChange",function(m){return S(c),C(a.maxDate,m)||(a.maxDate=m),v(m)}),t(),e(13,"po-radio-group",8),b("ngModelChange",function(m){return S(c),C(a.mode,m)||(a.mode=m),v(m)}),t()(),e(14,"div",3)(15,"po-radio-group",9),b("ngModelChange",function(m){return S(c),C(a.locale,m)||(a.locale=m),v(m)}),t()(),e(16,"div",3)(17,"po-button",10),h("p-click",function(){return S(c),v(a.restore())}),t()()()}o&2&&(d(),g("ngModel",a.calendar),r("p-locale",a.locale)("p-min-date",a.minDate)("p-max-date",a.maxDate)("p-mode",a.mode),d(3),H("p-value",q(5,15,a.calendar)),d(2),r("p-value",a.event),d(5),g("ngModel",a.minDate),r("p-max-date",a.maxDate),d(),g("ngModel",a.maxDate),r("p-min-date",a.minDate),d(),g("ngModel",a.mode),r("p-options",a.calendarModeOptions),d(2),g("ngModel",a.locale),r("p-options",a.localeOptions))},dependencies:[U,O,z,V,G,X,M,ee,te,W,Q],encapsulation:2})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-calendar-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,a){o&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Calendar Labs"),t(),e(4,"a",2),h("click",function(){return a.toggleSampleCodeTabs()}),l(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-calendar-labs/sample-po-calendar-labs.component.html"),t(),e(13,"pre",7),n(14,`<div class="po-md-8 po-p-2">
  <po-calendar
    [(ngModel)]="calendar"
    [p-locale]="locale"
    [p-min-date]="minDate"
    [p-max-date]="maxDate"
    [p-mode]="mode"
    (p-change)="changeEvent('p-change')"
  >
  </po-calendar>
</div>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" p-value="{ { calendar | json }}"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-datepicker
      class="po-md-4"
      name="minDate"
      [(ngModel)]="minDate"
      p-clean
      p-label="Min Date"
      [p-max-date]="maxDate"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-4"
      name="maxDate"
      [(ngModel)]="maxDate"
      p-clean
      p-label="Max Date"
      [p-min-date]="minDate"
    >
    </po-datepicker>

    <po-radio-group class="po-md-4" name="mode" [(ngModel)]="mode" p-label="Mode" [p-options]="calendarModeOptions">
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="locales"
      [(ngModel)]="locale"
      p-columns="4"
      p-help="Select a locale for the calendar"
      p-label="Locale"
      [p-options]="localeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-calendar-labs/sample-po-calendar-labs.component.ts"),t(),e(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoRadioGroupOption, PoCalendarMode } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-calendar-labs',
  templateUrl: './sample-po-calendar-labs.component.html',
  standalone: false
})
export class SamplePoCalendarLabsComponent implements OnInit {
  calendar;
  event;
  locale: string;
  maxDate: string | Date;
  minDate: string | Date;
  mode: PoCalendarMode;

  readonly localeOptions: Array<PoRadioGroupOption> = [
    { label: 'pt', value: 'pt' },
    { label: 'es', value: 'es' },
    { label: 'en', value: 'en' },
    { label: 'ru', value: 'ru' }
  ];

  readonly calendarModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Range', value: PoCalendarMode.Range },
    { label: 'Unset', value: null }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.calendar = undefined;
    this.event = undefined;
    this.locale = undefined;
    this.maxDate = undefined;
    this.minDate = undefined;
    this.mode = undefined;
  }
}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-calendar-labs"),t(),l(23,"hr")),o&2&&(d(5),T("po-icon "+a.sampleCodeButtonIcon),d(),k(" ",a.sampleCodeButtonLabel,""),d(),r("ngClass",x(4,fe,a.hideSampleCodeTabs)))},dependencies:[D,P,E,y,le],encapsulation:2})}return i})();var de=(()=>{class i{poNotification;date;halfPriceTicketQuantity;tickets;pageActions=[{label:"Buy tickets",action:this.buyTickets.bind(this),disabled:this.isdisableBuy.bind(this)}];ticketsOptions=[{label:"0",value:0},{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4}];constructor(p){this.poNotification=p}buyTickets(){this.poNotification.success(`Tickets purchased to ${this.getDate(this.date)} successfully!`),this.date=void 0,this.tickets=void 0,this.halfPriceTicketQuantity=void 0}getDate(p){let o=p.substring(0,4),a=p.substring(5,7),c=p.substring(8,10);return`${a}/${c}/${o}`}isdisableBuy(){return!(this.date&&(this.tickets>0||this.halfPriceTicketQuantity>0))}static \u0275fac=function(o){return new(o||i)(_(Y))};static \u0275cmp=u({type:i,selectors:[["sample-po-calendar-ticket-sales"]],standalone:!1,decls:12,vars:6,consts:[["p-title","Tickets sales",3,"p-actions"],[1,"po-row"],[1,"po-lg-8","po-md-7"],["p-label","Prices",1,"po-md-12"],["p-label","Weekends and holidays","p-value","$ 20,00",1,"po-md-6"],["p-label","Working days","p-value","$ 10,00",1,"po-md-6"],["p-label","Quantity",1,"po-md-12"],["p-help","From 12 years","p-label","Adults",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-help","04 to 11 years","p-label","Children and older adults",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],[1,"po-lg-4","po-md-5"],["p-label","Select the date",1,"po-md-12"],["p-locale","en",3,"ngModelChange","ngModel"]],template:function(o,a){o&1&&(e(0,"po-page-default",0)(1,"div",1)(2,"div",2),l(3,"po-divider",3)(4,"po-info",4)(5,"po-info",5)(6,"po-divider",6),e(7,"po-select",7),b("ngModelChange",function(s){return C(a.tickets,s)||(a.tickets=s),s}),t(),e(8,"po-select",8),b("ngModelChange",function(s){return C(a.halfPriceTicketQuantity,s)||(a.halfPriceTicketQuantity=s),s}),t()(),e(9,"div",9),l(10,"po-divider",10),e(11,"po-calendar",11),b("ngModelChange",function(s){return C(a.date,s)||(a.date=s),s}),t()()()()),o&2&&(r("p-actions",a.pageActions),d(7),g("ngModel",a.tickets),r("p-options",a.ticketsOptions),d(),g("ngModel",a.halfPriceTicketQuantity),r("p-options",a.ticketsOptions),d(3),g("ngModel",a.date))},dependencies:[O,V,M,K,ne,W,I],encapsulation:2})}return i})();var Ee=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-calendar-ticket-sales-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,a){o&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Calendar - Ticket Sales"),t(),e(4,"a",2),h("click",function(){return a.toggleSampleCodeTabs()}),l(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-calendar-ticket-sales/sample-po-calendar-ticket-sales.component.html"),t(),e(13,"pre",7),n(14,`<po-page-default p-title="Tickets sales" [p-actions]="pageActions">
  <div class="po-row">
    <div class="po-lg-8 po-md-7">
      <po-divider class="po-md-12" p-label="Prices"></po-divider>

      <po-info class="po-md-6" p-label="Weekends and holidays" p-value="$ 20,00"> </po-info>

      <po-info class="po-md-6" p-label="Working days" p-value="$ 10,00"> </po-info>

      <po-divider class="po-md-12" p-label="Quantity"></po-divider>

      <po-select
        class="po-lg-6"
        [(ngModel)]="tickets"
        p-help="From 12 years"
        p-label="Adults"
        [p-options]="ticketsOptions"
      >
      </po-select>

      <po-select
        class="po-lg-6"
        [(ngModel)]="halfPriceTicketQuantity"
        p-help="04 to 11 years"
        p-label="Children and older adults"
        [p-options]="ticketsOptions"
      >
      </po-select>
    </div>

    <div class="po-lg-4 po-md-5">
      <po-divider class="po-md-12" p-label="Select the date"></po-divider>

      <po-calendar [(ngModel)]="date" p-locale="en"> </po-calendar>
    </div>
  </div>
</po-page-default>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-calendar-ticket-sales/sample-po-calendar-ticket-sales.component.ts"),t(),e(19,"pre",9),n(20,`import { Component } from '@angular/core';

import { PoNotificationService, PoPageAction, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-calendar-ticket-sales',
  templateUrl: './sample-po-calendar-ticket-sales.component.html',
  standalone: false
})
export class SamplePoCalendarTicketSalesComponent {
  date: string;
  halfPriceTicketQuantity: number;
  tickets: number;

  readonly pageActions: Array<PoPageAction> = [
    { label: 'Buy tickets', action: this.buyTickets.bind(this), disabled: this.isdisableBuy.bind(this) }
  ];

  readonly ticketsOptions: Array<PoSelectOption> = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 }
  ];

  constructor(private poNotification: PoNotificationService) {}

  private buyTickets() {
    this.poNotification.success(\`Tickets purchased to \${this.getDate(this.date)} successfully!\`);

    this.date = undefined;
    this.tickets = undefined;
    this.halfPriceTicketQuantity = undefined;
  }

  private getDate(date) {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    return \`\${month}/\${day}/\${year}\`;
  }

  private isdisableBuy(): boolean {
    return !(this.date && (this.tickets > 0 || this.halfPriceTicketQuantity > 0));
  }
}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-calendar-ticket-sales"),t(),l(23,"hr")),o&2&&(d(5),T("po-icon "+a.sampleCodeButtonIcon),d(),k(" ",a.sampleCodeButtonLabel,""),d(),r("ngClass",x(4,Ee,a.hideSampleCodeTabs)))},dependencies:[D,P,E,y,de],encapsulation:2})}return i})();var me=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-calendar-doc"]],standalone:!1,decls:261,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoCalendarMode"]],template:function(o,a){o&1&&(e(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoCalendarModule } from '@po-ui/ng-components';"),t()(),e(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente "),e(7,"code"),n(8,"po-calendar"),t(),n(9,"."),t()(),e(10,"h3",3),n(11,"Componente"),t(),e(12,"h4",4)(13,"code",5),n(14,"PoCalendarComponent"),t()(),e(15,"div",2)(16,"p"),n(17,"O "),e(18,"code"),n(19,"po-calendar"),t(),n(20,` \xE9 um componente para sele\xE7\xE3o de datas. Ele permite uma f\xE1cil navega\xE7\xE3o clicando nas setas
de direcionamento e nos `),e(21,"em"),n(22,"labels"),t(),n(23," do ano ou m\xEAs."),t(),e(24,"p"),n(25,"Este componente pode receber os seguintes formatos de data:"),t(),e(26,"ul")(27,"li")(28,"p")(29,"strong"),n(30,"Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm"),t()(),e(31,"pre")(32,"code"),n(33,`this.date = '2017-11-28T00:00:00-02:00';
`),t()()(),e(34,"li")(35,"p")(36,"strong"),n(37,"Data (E8601DAw.): yyyy-mm-dd"),t()(),e(38,"pre")(39,"code"),n(40,`this.date = '2017-11-28';
`),t()()(),e(41,"li")(42,"p")(43,"strong"),n(44,"JavaScript Date Object:"),t()(),e(45,"pre")(46,"code"),n(47,`this.date = new Date(2017, 10, 28);
`),t()()()(),e(48,"blockquote")(49,"p"),n(50,"Independentemente do formato utilizado, o componente trata o valor do "),e(51,"em"),n(52,"model"),t(),n(53,` internamente com o
formato `),e(54,"strong"),n(55,"Data (E8601DAw.): yyyy-mm-dd"),t(),n(56,"."),t()(),e(57,"p"),n(58,"Importante:"),t(),e(59,"ul")(60,"li"),n(61,"Caso seja definida uma data fora do range da data m\xEDnima e data m\xE1xima via "),e(62,"em"),n(63,"ngModel"),t(),n(64,` o componente mostrar\xE1
a data desabilitada por\xE9m o `),e(65,"em"),n(66,"model"),t(),n(67," n\xE3o ser\xE1 alterado."),t(),e(68,"li"),n(69,"Caso seja definida uma data inv\xE1lida a mesma n\xE3o ser\xE1 atribu\xEDda ao calend\xE1rio por\xE9m o "),e(70,"em"),n(71,"model"),t(),n(72," manter\xE1 a data inv\xE1lida."),t()()(),e(73,"div",6)(74,"h4",7),n(75,"Seletor"),t(),e(76,"pre",8),n(77,`<po-calendar
    (p-change)="EventEmitter"
    p-locale="string"
    p-max-date="any"
    p-min-date="any"
    p-mode="PoCalendarMode" >
</po-calendar>
`),t()(),e(78,"h4",9),n(79,"Propriedades"),t(),e(80,"table",10)(81,"tr",11)(82,"th",12),n(83,"Nome"),t(),e(84,"th",12),n(85,"Tipo"),t(),e(86,"th",12),n(87,"Padr\xE3o"),t(),e(88,"th",12),n(89,"Descri\xE7\xE3o"),t()(),e(90,"tr",13)(91,"td",14)(92,"div",15)(93,"span",16),n(94," (p-change)"),l(95,"br"),t()()(),e(96,"td",17)(97,"code",18),n(98,"EventEmitter"),t()(),e(99,"td",19),n(100,"-"),t(),e(101,"td",20)(102,"p"),n(103,"Evento disparado ao selecionar um dia do calend\xE1rio."),t()()(),e(104,"tr",13)(105,"td",14)(106,"div",21)(107,"span",22),n(108," p-locale"),l(109,"br"),t()()(),e(110,"td",17)(111,"code",23),n(112,"string"),t()(),e(113,"td",19),n(114,"-"),t(),e(115,"td",20)(116,"em")(117,"strong"),n(118,"(opcional)"),t()(),e(119,"p"),n(120,"Idioma do calend\xE1rio."),t(),e(121,"blockquote")(122,"p"),n(123,"O locale padr\xE3o sera recuperado com base no "),e(124,"a",24)(125,"code"),n(126,"PoI18nService"),t()(),n(127," ou "),e(128,"em"),n(129,"browser"),t(),n(130,"."),t()()()(),e(131,"tr",13)(132,"td",14)(133,"div",21)(134,"span",22),n(135," p-max-date"),l(136,"br"),t()()(),e(137,"td",17)(138,"code",25),n(139,"any"),t()(),e(140,"td",19),n(141,"-"),t(),e(142,"td",20)(143,"em")(144,"strong"),n(145,"(opcional)"),t()(),e(146,"p"),n(147,"Define a data m\xE1xima poss\xEDvel de ser selecionada."),t(),e(148,"p"),n(149,"Pode receber os seguintes formatos de data:"),t(),e(150,"ul")(151,"li")(152,"p")(153,"strong"),n(154,"Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm"),t()(),e(155,"pre")(156,"code"),n(157,`this.date = '2017-11-28T00:00:00-02:00';
`),t()()(),e(158,"li")(159,"p")(160,"strong"),n(161,"Data (E8601DAw.): yyyy-mm-dd"),t()(),e(162,"pre")(163,"code"),n(164,`this.date = '2017-11-28';
`),t()()(),e(165,"li")(166,"p")(167,"strong"),n(168,"JavaScript Date Object:"),t()(),e(169,"pre")(170,"code"),n(171,`this.date = new Date(2017, 10, 28);
`),t()()()()()(),e(172,"tr",13)(173,"td",14)(174,"div",21)(175,"span",22),n(176," p-min-date"),l(177,"br"),t()()(),e(178,"td",17)(179,"code",25),n(180,"any"),t()(),e(181,"td",19),n(182,"-"),t(),e(183,"td",20)(184,"em")(185,"strong"),n(186,"(opcional)"),t()(),e(187,"p"),n(188,"Define a data m\xEDnima poss\xEDvel de ser selecionada."),t(),e(189,"p"),n(190,"Pode receber os seguintes formatos de data:"),t(),e(191,"ul")(192,"li")(193,"p")(194,"strong"),n(195,"Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm"),t()(),e(196,"pre")(197,"code"),n(198,`this.date = '2017-11-28T00:00:00-02:00';
`),t()()(),e(199,"li")(200,"p")(201,"strong"),n(202,"Data (E8601DAw.): yyyy-mm-dd"),t()(),e(203,"pre")(204,"code"),n(205,`this.date = '2017-11-28';
`),t()()(),e(206,"li")(207,"p")(208,"strong"),n(209,"JavaScript Date Object:"),t()(),e(210,"pre")(211,"code"),n(212,`this.date = new Date(2017, 10, 28);
`),t()()()()()(),e(213,"tr",13)(214,"td",14)(215,"div",21)(216,"span",22),n(217," p-mode"),l(218,"br"),t()()(),e(219,"td",17)(220,"code",26),n(221,"PoCalendarMode"),t()(),e(222,"td",19),n(223,"-"),t(),e(224,"td",20)(225,"p"),n(226,"Propriedade que permite informar o modo de exibi\xE7\xE3o do calendar."),t(),e(227,"p"),n(228,"Implementa o enum "),e(229,"code"),n(230,"PoCalendarMode"),t(),n(231,"."),t()()()(),e(232,"h3"),n(233,"Enums"),t(),e(234,"h4",4)(235,"code",5),n(236,"PoCalendarMode"),t()(),e(237,"div",2)(238,"p")(239,"em"),n(240,"Enum"),t(),e(241,"code"),n(242,"PoCalendarMode"),t(),n(243," para especificar os modos de visualiza\xE7\xE3o do calend\xE1rio."),t()(),e(244,"h4",9),n(245,"Propriedades"),t(),e(246,"table",10)(247,"tr",11)(248,"th",12),n(249,"Nome"),t(),e(250,"th",12),n(251,"Descri\xE7\xE3o"),t()(),e(252,"tr",13)(253,"td",14)(254,"div",21)(255,"span",22),n(256," Range"),l(257,"br"),t()()(),e(258,"td",20)(259,"p"),n(260,"Define que o calend\xE1rio ser\xE1 exibido em modo faixa de sele\xE7\xE3o."),t()()()()())},dependencies:[P],encapsulation:2})}return i})();var se=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,o){this.route=p,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let o=p.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||i)(_(J),_(Z))};static \u0275cmp=u({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Calendar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,a){o&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return a.changeTab("doc")}),l(3,"sample-po-calendar-doc"),t(),e(4,"po-tab",3),h("p-click",function(){return a.changeTab("web")}),l(5,"sample-po-calendar-basic-view")(6,"sample-po-calendar-labs-view")(7,"sample-po-calendar-ticket-sales-view"),t()()()),o&2&&(r("p-actions",a.actions),d(2),r("p-active",a.activeTab==="doc"),d(2),r("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[I,E,y,oe,pe,re,me],encapsulation:2})}return i})();var Te=[{path:"",component:se}],ce=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=L({type:i});static \u0275inj=B({imports:[N.forChild(Te),N]})}return i})();var Ze=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=L({type:i});static \u0275inj=B({imports:[ae,ce]})}return i})();export{Ze as DocPoCalendarModule};
