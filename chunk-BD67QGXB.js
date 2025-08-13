import{o as w,p as X}from"./chunk-MMZVQUBQ.js";import{Ab as x,F as Y,Ga as Q,Ra as J,_a as _,la as U,nb as K,zb as E}from"./chunk-522XRIZO.js";import{Ac as A,Ba as y,Bc as L,Fa as e,Ga as t,Ha as m,La as B,M as T,Ma as h,Oc as z,Qc as R,Sc as j,T as u,U as g,Ua as F,Va as O,Wa as N,Ya as o,_a as M,ab as f,bb as b,cb as C,fb as P,ha as p,ia as W,oa as c,pa as D,vb as I,xc as V,ya as s,yc as H,zc as q}from"./chunk-WFKG4FNY.js";var Z=(()=>{class n{srcImage="https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg";static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-image-basic"]],standalone:!1,decls:1,vars:1,consts:[["p-alt","teste de imagem","p-height","300",3,"p-src"]],template:function(a,i){a&1&&m(0,"po-image",0),a&2&&s("p-src",i.srcImage)},dependencies:[_],encapsulation:2})}return n})();var re=n=>({"docs-sample-code-tabs":n}),ee=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-image-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(m(0,"br"),e(1,"blockquote",0)(2,"label",1),o(3,"PO Image Basic"),t(),e(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),m(5,"span"),o(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-image-basic/sample-po-image-basic.component.html"),t(),e(13,"pre",7),o(14,`<po-image [p-src]="srcImage" p-alt="teste de imagem" p-height="300"> </po-image>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-image-basic/sample-po-image-basic.component.ts"),t(),e(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-image-basic',
  templateUrl: './sample-po-image-basic.component.html',
  standalone: false
})
export class SamplePoImageBasicComponent {
  srcImage = 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg';
}
`),t()()()()(),e(21,"div",10),m(22,"sample-po-image-basic"),t(),m(23,"hr")),a&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),M(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",P(4,re,i.hideSampleCodeTabs)))},dependencies:[I,w,E,x,Z],encapsulation:2})}return n})();var te=(()=>{class n{alt;height;src;ngOnInit(){this.restore()}restore(){this.alt=void 0,this.height="auto",this.src=void 0}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-image-labs"]],standalone:!1,decls:11,vars:6,consts:[["f","ngForm"],[3,"p-src","p-alt","p-height"],[1,"po-row"],["name","src","p-clean","","p-label","Source","p-help","Enter a url or path of the image that will be displayed",1,"po-md-6",3,"ngModelChange","ngModel"],["name","alt","p-clean","","p-label","Alternate","p-help","Alternative text for image description. Ex.: Po Ui logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let d=B();m(0,"po-image",1)(1,"hr"),e(2,"form",null,0)(4,"div",2)(5,"po-input",3),C("ngModelChange",function(l){return u(d),b(i.src,l)||(i.src=l),g(l)}),t(),e(6,"po-input",4),C("ngModelChange",function(l){return u(d),b(i.alt,l)||(i.alt=l),g(l)}),t(),e(7,"po-input",5),C("ngModelChange",function(l){return u(d),b(i.height,l)||(i.height=l),g(l)}),t()(),m(8,"hr"),e(9,"div",2)(10,"po-button",6),h("p-click",function(){return u(d),g(i.restore())}),t()()()}a&2&&(s("p-src",i.src)("p-alt",i.alt)("p-height",i.height),p(5),f("ngModel",i.src),p(),f("ngModel",i.alt),p(),f("ngModel",i.height))},dependencies:[L,V,H,A,q,Y,Q,_],encapsulation:2})}return n})();var ue=n=>({"docs-sample-code-tabs":n}),oe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-image-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(m(0,"br"),e(1,"blockquote",0)(2,"label",1),o(3,"PO Image Labs"),t(),e(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),m(5,"span"),o(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-image-labs/sample-po-image-labs.component.html"),t(),e(13,"pre",7),o(14,`<po-image [p-src]="src" [p-alt]="alt" [p-height]="height"> </po-image>

<hr />
<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="src"
      [(ngModel)]="src"
      p-clean
      p-label="Source"
      p-help="Enter a url or path of the image that will be displayed"
    ></po-input>
    <po-input
      class="po-md-6"
      name="alt"
      [(ngModel)]="alt"
      p-clean
      p-label="Alternate"
      p-help="Alternative text for image description. Ex.: Po Ui logo"
    ></po-input>
    <po-input class="po-md-6" name="height" [(ngModel)]="height" p-clean p-label="Height"></po-input>
  </div>
  <hr />
  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"></po-button>
  </div>
</form>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-image-labs/sample-po-image-labs.component.ts"),t(),e(19,"pre",9),o(20,`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-po-image-labs',
  templateUrl: './sample-po-image-labs.component.html',
  standalone: false
})
export class SamplePoImageLabsComponent implements OnInit {
  alt: string;
  height: string | number;
  src: string;

  ngOnInit(): void {
    this.restore();
  }

  restore() {
    this.alt = undefined;
    this.height = 'auto';
    this.src = undefined;
  }
}
`),t()()()()(),e(21,"div",10),m(22,"sample-po-image-labs"),t(),m(23,"hr")),a&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),M(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",P(4,ue,i.hideSampleCodeTabs)))},dependencies:[I,w,E,x,te],encapsulation:2})}return n})();var he=["bookingForm"],fe=["datepicker"],ie=(()=>{class n{form;datepickerComponent;adults=1;checkin;checkout;children=0;hotel;destinations="https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];travelOptions=[{label:"Nova york",value:"https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},{label:"B\xE9lgica",value:"https://images.unsplash.com/photo-1547057951-61fcf322bb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"},{label:"Madrid",value:"https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}];constructor(){}restore(){this.adults=1,this.children=0,this.checkin=void 0,this.checkout=void 0,this.destinations="https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-image-travel"]],viewQuery:function(a,i){if(a&1&&(F(he,7),F(fe,7)),a&2){let d;O(d=N())&&(i.form=d.first),O(d=N())&&(i.datepickerComponent=d.first)}},standalone:!1,decls:17,vars:11,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],[1,"po-md-3"],["p-height","150",3,"p-src"],[1,"po-md-9"],["name","destinations","p-label","Destinos",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"]],template:function(a,i){if(a&1){let d=B();e(0,"div",2)(1,"div",3),o(2,"Choosing a trip"),t()(),e(3,"div",4)(4,"div",5),m(5,"po-image",6),t(),e(6,"div",7)(7,"form",null,0)(9,"div",4)(10,"po-select",8),C("ngModelChange",function(l){return u(d),b(i.destinations,l)||(i.destinations=l),g(l)}),t(),e(11,"po-select",9),C("ngModelChange",function(l){return u(d),b(i.children,l)||(i.children=l),g(l)}),t(),e(12,"po-select",10),C("ngModelChange",function(l){return u(d),b(i.adults,l)||(i.adults=l),g(l)}),t()(),e(13,"div",4)(14,"po-datepicker",11,1),C("ngModelChange",function(l){return u(d),b(i.checkin,l)||(i.checkin=l),g(l)}),t(),e(16,"po-datepicker",12),C("ngModelChange",function(l){return u(d),b(i.checkout,l)||(i.checkout=l),g(l)}),t()()()()()}a&2&&(p(5),s("p-src",i.destinations),p(5),f("ngModel",i.destinations),s("p-options",i.travelOptions),p(),f("ngModel",i.children),s("p-options",i.childrenOptions),p(),f("ngModel",i.adults),s("p-options",i.adultsOptions),p(2),f("ngModel",i.checkin),s("p-max-date",i.checkout),p(2),f("ngModel",i.checkout),s("p-min-date",i.checkin))},dependencies:[L,V,H,A,q,U,J,_],encapsulation:2})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),ne=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-image-travel-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(m(0,"br"),e(1,"blockquote",0)(2,"label",1),o(3,"PO Image Travel"),t(),e(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),m(5,"span"),o(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-image-travel/sample-po-image-travel.component.html"),t(),e(13,"pre",7),o(14,`<div class="po-text-center">
  <div class="po-font-title">Choosing a trip</div>
</div>

<div class="po-row">
  <div class="po-md-3">
    <po-image [p-src]="destinations" p-height="150"> </po-image>
  </div>

  <div class="po-md-9">
    <form #bookingForm="ngForm">
      <div class="po-row">
        <po-select
          class="po-md-4"
          name="destinations"
          [(ngModel)]="destinations"
          p-label="Destinos"
          [p-options]="travelOptions"
        >
        </po-select>

        <po-select
          class="po-md-4"
          name="children"
          [(ngModel)]="children"
          p-label="Children"
          [p-options]="childrenOptions"
        >
        </po-select>

        <po-select class="po-md-4" name="adults" [(ngModel)]="adults" p-label="Adults" [p-options]="adultsOptions">
        </po-select>
      </div>

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
      </div>
    </form>
  </div>
</div>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-image-travel/sample-po-image-travel.component.ts"),t(),e(19,"pre",9),o(20,`import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoDatepickerComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-image-travel',
  templateUrl: './sample-po-image-travel.component.html',
  standalone: false
})
export class SamplePoImageTravelComponent {
  @ViewChild('bookingForm', { static: true }) form: NgForm;
  @ViewChild('datepicker', { static: true }) datepickerComponent: PoDatepickerComponent;

  adults: number = 1;
  checkin: Date;
  checkout: Date;
  children: number = 0;
  hotel: string;
  destinations: string =
    'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
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

  readonly travelOptions: Array<PoSelectOption> = [
    {
      label: 'Nova york',
      value:
        'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      label: 'B\xE9lgica',
      value:
        'https://images.unsplash.com/photo-1547057951-61fcf322bb1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      label: 'Madrid',
      value:
        'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }
  ];

  constructor() {}

  restore() {
    this.adults = 1;
    this.children = 0;
    this.checkin = undefined;
    this.checkout = undefined;
    this.destinations =
      'https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
  }
}
`),t()()()()(),e(21,"div",10),m(22,"sample-po-image-travel"),t(),m(23,"hr")),a&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),M(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",P(4,Ce,i.hideSampleCodeTabs)))},dependencies:[I,w,E,x,ie],encapsulation:2})}return n})();var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-image-doc"]],standalone:!1,decls:181,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoImageLoading"],["pan","",1,"docs-api-property-type","boolean"]],template:function(a,i){a&1&&(e(0,"div",0)(1,"p",1)(2,"code"),o(3,"import { PoImageModule } from '@po-ui/ng-components';"),t()(),e(4,"div",2)(5,"p"),o(6,"M\xF3dulo do componente po-image"),t()(),e(7,"h3",3),o(8,"Componente"),t(),e(9,"h4",4)(10,"code",5),o(11,"PoImageComponent"),t()(),e(12,"div",2)(13,"p"),o(14,"As imagens t\xEAm a fun\xE7\xE3o de traduzir visualmente ideias espec\xEDficas ou mensagens complexas, mostrar um produto ou contar uma hist\xF3ria, estabelecendo empatia e se conectando com os usu\xE1rios."),t(),e(15,"h4"),o(16,"Boas Pr\xE1ticas"),t(),e(17,"p"),o(18,"O componente image foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conte\xFAdo Web (WCAG) 2.1. Tamb\xE9m foram estruturadas padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia para os usu\xE1rios. Por isso, \xE9 muito importante que, ao aplicar esse componente, o propriet\xE1rio do conte\xFAdo leve em considera\xE7\xE3o alguns crit\xE9rios e pr\xE1ticas:"),t(),e(19,"h5"),o(20,"Uso"),t(),e(21,"ul")(22,"li"),o(23,"Ao utilizar imagens, mantenha uma coer\xEAncia entre elas no produto, de modo que compartilhem um mesmo estilo e inten\xE7\xE3o entre si."),t(),e(24,"li"),o(25,"Utilize imagens que expressem a mensagem e estilo do produto, respeitando as diretrizes e guia da marca."),t(),e(26,"li"),o(27,"Ao utilizar fotografias, \xE9 recomend\xE1vel o uso de propor\xE7\xF5es de aspecto padr\xE3o, como 1:1, 3:1, 3:2, 16:9."),t(),e(28,"li"),o(29,"Mantenha um ponto focal na imagem, pois isso influencia em como ela se comportar\xE1 em diferentes formatos. Isso tamb\xE9m ajuda a transmitir a mensagem de forma objetiva e consistente."),t()(),e(30,"h5"),o(31,"Imagem como plano de fundo"),t(),e(32,"ul")(33,"li"),o(34,"Avalie se \xE9 realmente necess\xE1rio o uso de imagem como plano de fundo e evite sempre que poss\xEDvel, pois pode ocasionar em um baixo contraste entre texto e imagem."),t(),e(35,"li"),o(36,"Caso utilize, redobre a aten\xE7\xE3o na escolha da imagem e certifique-se de que ela est\xE1 adequada para a leitura do texto e n\xE3o est\xE1 sendo apenas um ru\xEDdo."),t(),e(37,"li"),o(38,"Tenha especial aten\xE7\xE3o em telas menores. Embora seja poss\xEDvel posicionar o texto em uma \xE1rea mais vazia ou escurecida, o texto e imagem se ajustam aos diferentes espa\xE7os, de acordo com o dispositivo. Muitas vezes acaba resultando no comprometimento tanto da leitura do texto e quando na visualiza\xE7\xE3o da imagem."),t(),e(39,"li"),o(40,"Verifique a taxa de contraste do texto em rela\xE7\xE3o ao fundo. Deve ser suficiente para atender aos padr\xF5es de acessibilidade, sendo 4,5:1 para textos acima de 18pt ou bold e 7,1: 1 para textos menores que 18pt."),t(),e(41,"li"),o(42,"Se n\xE3o tiver controle sobre qual imagem ser\xE1 colocada por tr\xE1s do texto, o recomendado \xE9 n\xE3o utilizar nesse formato."),t()(),e(43,"h4"),o(44,"Acessibilidade tratada no componente"),t(),e(45,"p"),o(46,"As boas pr\xE1ticas de acessibilidade variam de acordo com tipo da imagem, que podem ser divididas em:"),t(),e(47,"ul")(48,"li"),o(49,"Imagem informativa simples, como por exemplo uma fotografia de um produto."),t(),e(50,"li"),o(51,"Imagem complexa, como um gr\xE1fico, infogr\xE1fico ou diagrama."),t(),e(52,"li"),o(53,"Imagem decorativa, como um plano de fundo ou uma fotografia que ilustra um assunto, mas n\xE3o \xE9 essencial para compreender a informa\xE7\xE3o."),t()()(),e(54,"div",6)(55,"h4",7),o(56,"Seletor"),t(),e(57,"pre",8),o(58,`<po-image
    p-alt="string"
    p-height="number"
    p-loading="PoImageLoading"
    p-priority="boolean"
    p-src="string" >
</po-image>
`),t()(),e(59,"h4",9),o(60,"Propriedades"),t(),e(61,"table",10)(62,"tr",11)(63,"th",12),o(64,"Nome"),t(),e(65,"th",12),o(66,"Tipo"),t(),e(67,"th",12),o(68,"Padr\xE3o"),t(),e(69,"th",12),o(70,"Descri\xE7\xE3o"),t()(),e(71,"tr",13)(72,"td",14)(73,"div",15)(74,"span",16),o(75," p-alt"),m(76,"br"),t()()(),e(77,"td",17)(78,"code",18),o(79,"string"),t()(),e(80,"td",19),o(81,"-"),t(),e(82,"td",20)(83,"em")(84,"strong"),o(85,"(opcional)"),t()(),e(86,"p"),o(87,"Defini o texto alternativo descrevendo a imagem."),t()()(),e(88,"tr",13)(89,"td",14)(90,"div",15)(91,"span",16),o(92," p-height"),m(93,"br"),t()()(),e(94,"td",17)(95,"code",21),o(96,"number"),t()(),e(97,"td",19),o(98,"-"),t(),e(99,"td",20)(100,"em")(101,"strong"),o(102,"(opcional)"),t()(),e(103,"p"),o(104,"Define a altura da imagem em "),e(105,"em"),o(106,"pixels"),t(),o(107,`. Caso n\xE3o seja definida,
atribui o tamanho da imagem`),t()()(),e(108,"tr",13)(109,"td",14)(110,"div",15)(111,"span",16),o(112," p-loading"),m(113,"br"),t()()(),e(114,"td",17)(115,"code",22),o(116,"PoImageLoading"),t()(),e(117,"td",19),o(118,"-"),t(),e(119,"td",20)(120,"em")(121,"strong"),o(122,"(opcional)"),t()(),e(123,"p"),o(124,"Defini o carregamento que pode ser dos tipo:"),t(),e(125,"p"),o(126,`\u2014 lazy
\u2014 eager
\u2014 auto`),t(),e(127,"blockquote")(128,"p"),o(129,"N\xE3o \xE9 permitido definir esta propriedade em conjunto com a propriedade "),e(130,"code"),o(131,"p-priority"),t(),o(132,"."),t()()()(),e(133,"tr",13)(134,"td",14)(135,"div",15)(136,"span",16),o(137," p-priority"),m(138,"br"),t()()(),e(139,"td",17)(140,"code",23),o(141,"boolean"),t()(),e(142,"td",19)(143,"p")(144,"code"),o(145,"false"),t()()(),e(146,"td",20)(147,"em")(148,"strong"),o(149,"(opcional)"),t()(),e(150,"p"),o(151,"Defini a prioridade de carregamento da imagem."),t(),e(152,"blockquote")(153,"p"),o(154,`Para as imagens com carregamento priorit\xE1tio ativo \xE9 necess\xE1rio incluir
uma tag link no head do arquivo index.html da sua aplica\xE7\xE3o.`),t()(),e(155,"pre")(156,"code"),o(157,`<link rel="preconnect" href="<url_base_da_imagem>">
`),t()()()(),e(158,"tr",13)(159,"td",14)(160,"div",15)(161,"span",16),o(162," p-src"),m(163,"br"),t()()(),e(164,"td",17)(165,"code",18),o(166,"string"),t()(),e(167,"td",19),o(168,"-"),t(),e(169,"td",20)(170,"em")(171,"strong"),o(172,"(opcional)"),t()(),e(173,"p"),o(174,"Fonte da imagem que pode ser um caminho local ("),e(175,"code"),o(176,"./assets/images/logo-black-small.png"),t(),o(177,`)
ou um servidor externo (`),e(178,"code"),o(179,"https://po-ui.io/assets/images/logo-black-small.png"),t(),o(180,")."),t()()()()())},dependencies:[w],encapsulation:2})}return n})();var le=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||n)(W(z),W(R))};static \u0275cmp=c({type:n,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Image",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return i.changeTab("doc")}),m(3,"sample-po-image-doc"),t(),e(4,"po-tab",3),h("p-click",function(){return i.changeTab("web")}),m(5,"sample-po-image-basic-view")(6,"sample-po-image-labs-view")(7,"sample-po-image-travel-view"),t()()()),a&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab==="doc"),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[K,E,x,ee,oe,ne,ae],encapsulation:2})}return n})();var Ee=[{path:"",component:le}],me=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=D({type:n});static \u0275inj=T({imports:[j.forChild(Ee),j]})}return n})();var Re=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=D({type:n});static \u0275inj=T({imports:[X,me]})}return n})();export{Re as DocPoImageModule};
