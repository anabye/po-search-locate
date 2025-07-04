import{o as P,p as Z}from"./chunk-R3BKLGLC.js";import{Ab as f,Bb as Y,F as G,Ga as K,Pa as Q,Wa as X,ja as J,jb as w,nb as I,zb as g}from"./chunk-TUTTJOS2.js";import{$a as y,Ac as j,Ba as M,Ea as n,Fa as e,Ga as l,Ka as R,La as c,M as D,Nc as z,Pc as U,Rc as V,T as C,U as S,Wa as B,Xa as t,Za as v,ab as _,bb as k,db as H,eb as h,ha as m,ia as O,oa as d,pa as L,ub as E,wc as N,xc as W,ya as s,yc as q,zc as A}from"./chunk-MIQUIDUB.js";var se=()=>({label:"PO HTML Framework",link:"/",icon:"an an-house-line"}),re=o=>[o],$=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-menu-panel-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-menus"]],template:function(a,i){a&1&&l(0,"po-menu-panel",0),a&2&&s("p-menus",h(2,re,H(1,se)))},dependencies:[w],encapsulation:2})}return o})();var ue=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-menu-panel-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Menu Panel Basic"),e(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.html"),e(),n(13,"pre",7),t(14,`<po-menu-panel [p-menus]="[{ label: 'PO HTML Framework', link: '/', icon: 'an an-house-line' }]"></po-menu-panel>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-menu-panel-basic',
  templateUrl: './sample-po-menu-panel-basic.component.html',
  standalone: false
})
export class SamplePoMenuPanelBasicComponent {}
`),e()()()()(),n(21,"div",10),l(22,"sample-po-menu-panel-basic"),e(),l(23,"hr")),a&2&&(m(5),M("po-icon "+i.sampleCodeButtonIcon),m(),v(" ",i.sampleCodeButtonLabel,""),m(),s("ngClass",h(4,ue,i.hideSampleCodeTabs)))},dependencies:[E,P,g,f,$],encapsulation:2})}return o})();var te=(()=>{class o{menuItem={icon:void 0,label:void 0};menuItems;menuItemSelected;logo;iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-camera",value:"an an-camera"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"an an-chat",value:"an an-chat"},{label:"an an-package",value:"an an-package"}];ngOnInit(){this.restore()}addMenuItem(p){let a=Object.assign({},p,{action:this.onMenuItemSelected.bind(this)});this.menuItems=[...this.menuItems,a]}restore(){this.menuItems=[],this.menuItemSelected=void 0,this.logo=void 0}onMenuItemSelected(p){this.menuItemSelected=p.label}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-menu-panel-labs"]],standalone:!1,decls:18,vars:9,consts:[["fMenuPanel","ngForm"],[1,"po-wrapper-menu-panel"],[3,"p-menus","p-logo"],["p-title","PO Menu Panel"],[1,"po-row"],["p-label","Menu Item Selected",3,"p-value"],["name","logo","p-label","Logo","p-help","Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg",1,"po-md-12",3,"ngModelChange","ngModel"],["name","label","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","link","p-label","External link","p-placeholder","http://",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add",1,"po-xl-2","po-md-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-xl-3","po-md-5",3,"p-click"]],template:function(a,i){if(a&1){let u=R();n(0,"div",1),l(1,"po-menu-panel",2),n(2,"po-page-default",3)(3,"div",4),l(4,"po-info",5),e(),l(5,"hr"),n(6,"div",4)(7,"po-input",6),k("ngModelChange",function(r){return C(u),_(i.logo,r)||(i.logo=r),S(r)}),e()(),n(8,"form",null,0)(10,"div",4)(11,"po-input",7),k("ngModelChange",function(r){return C(u),_(i.menuItem.label,r)||(i.menuItem.label=r),S(r)}),e(),n(12,"po-url",8),k("ngModelChange",function(r){return C(u),_(i.menuItem.link,r)||(i.menuItem.link=r),S(r)}),e()(),n(13,"div",4)(14,"po-radio-group",9),k("ngModelChange",function(r){return C(u),_(i.menuItem.icon,r)||(i.menuItem.icon=r),S(r)}),e()(),n(15,"div",4)(16,"po-button",10),c("p-click",function(){C(u);let r=B(9);return i.addMenuItem(i.menuItem),S(r.reset())}),e(),n(17,"po-button",11),c("p-click",function(){C(u);let r=B(9);return i.restore(),S(r.reset())}),e()()()()()}if(a&2){let u=B(9);m(),s("p-menus",i.menuItems)("p-logo",i.logo),m(3),s("p-value",i.menuItemSelected),m(3),y("ngModel",i.logo),m(4),y("ngModel",i.menuItem.label),m(),y("ngModel",i.menuItem.link),m(2),y("ngModel",i.menuItem.icon),s("p-options",i.iconsOptions),m(2),s("p-disabled",u.invalid)}},dependencies:[j,N,W,A,q,G,J,K,Q,X,w,I],encapsulation:2})}return o})();var he=o=>({"docs-sample-code-tabs":o}),oe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-menu-panel-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Menu Panel Labs"),e(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.html"),e(),n(13,"pre",7),t(14,`<div class="po-wrapper-menu-panel">
  <po-menu-panel [p-menus]="menuItems" [p-logo]="logo"> </po-menu-panel>

  <po-page-default p-title="PO Menu Panel">
    <div class="po-row">
      <po-info p-label="Menu Item Selected" [p-value]="menuItemSelected"> </po-info>
    </div>

    <hr />

    <div class="po-row">
      <po-input
        class="po-md-12"
        name="logo"
        [(ngModel)]="logo"
        p-label="Logo"
        p-help="Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg"
      >
      </po-input>
    </div>

    <form #fMenuPanel="ngForm">
      <div class="po-row">
        <po-input class="po-md-6" name="label" [(ngModel)]="menuItem.label" p-label="Label" p-required> </po-input>

        <po-url class="po-md-6" name="link" [(ngModel)]="menuItem.link" p-label="External link" p-placeholder="http://">
        </po-url>
      </div>

      <div class="po-row">
        <po-radio-group
          class="po-lg-12"
          name="icon"
          [(ngModel)]="menuItem.icon"
          p-label="Icon"
          p-required
          [p-options]="iconsOptions"
        >
        </po-radio-group>
      </div>

      <div class="po-row">
        <po-button
          class="po-xl-2 po-md-4"
          [p-disabled]="fMenuPanel.invalid"
          p-label="Add"
          (p-click)="addMenuItem(menuItem); fMenuPanel.reset()"
        >
        </po-button>

        <po-button class="po-xl-3 po-md-5" p-label="Sample Restore" (p-click)="restore(); fMenuPanel.reset()">
        </po-button>
      </div>
    </form>
  </po-page-default>
</div>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import { PoMenuPanelItem, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-menu-panel-labs',
  templateUrl: './sample-po-menu-panel-labs.component.html',
  standalone: false
})
export class SamplePoMenuPanelLabsComponent implements OnInit {
  menuItem: PoMenuPanelItem = { icon: undefined, label: undefined };
  menuItems: Array<PoMenuPanelItem>;
  menuItemSelected: string;
  logo: string;

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-camera', value: 'an an-camera' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'an an-chat', value: 'an an-chat' },
    { label: 'an an-package', value: 'an an-package' }
  ];

  ngOnInit(): void {
    this.restore();
  }

  addMenuItem(menuItem: PoMenuPanelItem) {
    const newMenuItem = Object.assign({}, menuItem, { action: this.onMenuItemSelected.bind(this) });

    this.menuItems = [...this.menuItems, newMenuItem];
  }

  restore() {
    this.menuItems = [];
    this.menuItemSelected = undefined;
    this.logo = undefined;
  }

  private onMenuItemSelected(menu: PoMenuPanelItem) {
    this.menuItemSelected = menu.label;
  }
}
`),e()()()()(),n(21,"div",10),l(22,"sample-po-menu-panel-labs"),e(),l(23,"hr")),a&2&&(m(5),M("po-icon "+i.sampleCodeButtonIcon),m(),v(" ",i.sampleCodeButtonLabel,""),m(),s("ngClass",h(4,he,i.hideSampleCodeTabs)))},dependencies:[E,P,g,f,te],encapsulation:2})}return o})();var ae=(()=>{class o{title="Customers";menuItems=[{label:"Home",action:this.changeTitle.bind(this),icon:"an an-house-line"},{label:"Customers",action:this.changeTitle.bind(this),icon:"an an-user"},{label:"New Sale",action:this.changeTitle.bind(this),icon:"an an-money"},{label:"Reports",action:this.changeTitle.bind(this),icon:"an an-newspaper"},{label:"Settings",action:this.changeTitle.bind(this),icon:"an an-gear"}];changeTitle(p){this.title=p.label}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-menu-panel-customer"]],standalone:!1,decls:4,vars:2,consts:[[1,"po-wrapper-menu-panel"],["p-title","PO - Customers"],["p-logo","https://po-ui.io/assets/po-logos/po_color_bg.svg",3,"p-menus"],[3,"p-title"]],template:function(a,i){a&1&&(n(0,"div",0),l(1,"po-toolbar",1)(2,"po-menu-panel",2)(3,"po-page-default",3),e()),a&2&&(m(2),s("p-menus",i.menuItems),m(),s("p-title",i.title))},dependencies:[w,I,Y],encapsulation:2})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),ie=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-menu-panel-customer-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Menu Panel - Customers"),e(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.html"),e(),n(13,"pre",7),t(14,`<div class="po-wrapper-menu-panel">
  <po-toolbar p-title="PO - Customers"></po-toolbar>

  <po-menu-panel [p-menus]="menuItems" p-logo="https://po-ui.io/assets/po-logos/po_color_bg.svg"></po-menu-panel>

  <po-page-default [p-title]="title"></po-page-default>
</div>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

import { PoMenuPanelItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-menu-panel-customer',
  templateUrl: './sample-po-menu-panel-customer.component.html',
  standalone: false
})
export class SamplePoMenuPanelCustomerComponent {
  title: string = 'Customers';

  public readonly menuItems: Array<PoMenuPanelItem> = [
    { label: 'Home', action: this.changeTitle.bind(this), icon: 'an an-house-line' },
    { label: 'Customers', action: this.changeTitle.bind(this), icon: 'an an-user' },
    { label: 'New Sale', action: this.changeTitle.bind(this), icon: 'an an-money' },
    { label: 'Reports', action: this.changeTitle.bind(this), icon: 'an an-newspaper' },
    { label: 'Settings', action: this.changeTitle.bind(this), icon: 'an an-gear' }
  ];

  changeTitle(menu: PoMenuPanelItem) {
    this.title = menu.label;
  }
}
`),e()()()()(),n(21,"div",10),l(22,"sample-po-menu-panel-customer"),e(),l(23,"hr")),a&2&&(m(5),M("po-icon "+i.sampleCodeButtonIcon),m(),v(" ",i.sampleCodeButtonLabel,""),m(),s("ngClass",h(4,Pe,i.hideSampleCodeTabs)))},dependencies:[E,P,g,f,ae],encapsulation:2})}return o})();var le=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-menu-panel-doc"]],standalone:!1,decls:195,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoMenuPanelItem[]"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","https://po-ui.io/icons"]],template:function(a,i){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoMenuPanelModule } from '@po-ui/ng-components';"),e()(),n(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente po-menu-panel."),e()(),n(7,"h3",3),t(8,"Componente"),e(),n(9,"h4",4)(10,"code",5),t(11,"PoMenuPanelComponent"),e()(),n(12,"div",2)(13,"p"),t(14,`Este \xE9 um componente de menu lateral composto apenas por \xEDcones e com um n\xEDvel, utilizado para navega\xE7\xE3o
em p\xE1ginas internas, externas da aplica\xE7\xE3o ou aciona uma a\xE7\xE3o.`),e(),n(15,"p"),t(16,"O componente "),n(17,"code"),t(18,"po-menu-panel"),e(),t(19," recebe uma lista de objetos do tipo "),n(20,"code"),t(21,"MenuPanelItem"),e(),t(22,` com as informa\xE7\xF5es dos
itens de menu como textos, links para redirecionamento, a\xE7\xF5es e \xEDcones. Para o menu funcionar corretamente \xE9 necess\xE1rio importar o `),n(23,"code"),t(24,"RouterModule"),e(),t(25," e "),n(26,"code"),t(27,"Routes"),e(),t(28," do m\xF3dulo principal de sua aplica\xE7\xE3o:"),e(),n(29,"pre")(30,"code"),t(31,`import { RouterModule, Routes } from '@angular/router';

...

@NgModule({
  imports: [
    RouterModule,
    Routes,
    ...
    PoModule,
    ...
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),e()(),n(32,"p"),t(33,"Al\xE9m disso \xE9 necess\xE1rio criar um m\xF3dulo configurando as rotas da aplica\xE7\xE3o."),e(),n(34,"pre")(35,"code"),t(36,`import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  {path: 'hello-world', component: HelloWorldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
`),e()()(),n(37,"div",6)(38,"h4",7),t(39,"Seletor"),e(),n(40,"pre",8),t(41,`<po-menu-panel
    p-logo="string"
    p-logo-alt="string"
    p-menus="PoMenuPanelItem[]" >
</po-menu-panel>
`),e()(),n(42,"h4",9),t(43,"Propriedades"),e(),n(44,"table",10)(45,"tr",11)(46,"th",12),t(47,"Nome"),e(),n(48,"th",12),t(49,"Tipo"),e(),n(50,"th",12),t(51,"Padr\xE3o"),e(),n(52,"th",12),t(53,"Descri\xE7\xE3o"),e()(),n(54,"tr",13)(55,"td",14)(56,"div",15)(57,"span",16),t(58," p-logo"),l(59,"br"),e()()(),n(60,"td",17)(61,"code",18),t(62,"string"),e()(),n(63,"td",19),t(64,"-"),e(),n(65,"td",20)(66,"em")(67,"strong"),t(68,"(opcional)"),e()(),n(69,"p"),t(70,"Caminho para a logomarca localizada na parte superior do menu."),e(),n(71,"blockquote")(72,"p")(73,"strong"),t(74,"Importante"),e(),t(75,`
Caso seja indefinida ser\xE1 aplicada a imagem default do PO UI.`),e()()()(),n(76,"tr",13)(77,"td",14)(78,"div",15)(79,"span",16),t(80," p-logo-alt"),l(81,"br"),e()()(),n(82,"td",17)(83,"code",18),t(84,"string"),e()(),n(85,"td",19)(86,"p")(87,"code"),t(88,"Logomarca in\xEDcio"),e()()(),n(89,"td",20)(90,"em")(91,"strong"),t(92,"(opcional)"),e()(),n(93,"p"),t(94,"Define o texto alternativo para a logomarca."),e(),n(95,"blockquote")(96,"p")(97,"strong"),t(98,"Importante"),e(),t(99,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),e()()()(),n(100,"tr",13)(101,"td",14)(102,"div",15)(103,"span",16),t(104," p-menus"),l(105,"br"),e()()(),n(106,"td",17)(107,"code",21),t(108,"PoMenuPanelItem[]"),e()(),n(109,"td",19),t(110,"-"),e(),n(111,"td",20)(112,"p"),t(113,"Lista dos itens do "),n(114,"code"),t(115,"po-menu-panel"),e(),t(116,". Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),e()()()(),n(117,"h3"),t(118,"Interfaces"),e(),n(119,"h4",22)(120,"code",5),t(121,"PoMenuPanelItem"),e()(),n(122,"div",2)(123,"p"),t(124,"Interface para os itens de menu do componente "),n(125,"code"),t(126,"po-menu-panel"),e(),t(127,"."),e()(),n(128,"h4",9),t(129,"Propriedades"),e(),n(130,"table",10)(131,"tr",11)(132,"th",12),t(133,"Nome"),e(),n(134,"th",12),t(135,"Tipo"),e(),n(136,"th",12),t(137,"Descri\xE7\xE3o"),e()(),n(138,"tr",13)(139,"td",14)(140,"div",15)(141,"span",16),t(142," action"),l(143,"br"),e()()(),n(144,"td",17)(145,"code",23),t(146,"Function"),e()(),n(147,"td",20)(148,"em")(149,"strong"),t(150,"(opcional)"),e()(),n(151,"p"),t(152,"A\xE7\xE3o personalizada para clique do item de menu."),e()()(),n(153,"tr",13)(154,"td",14)(155,"div",15)(156,"span",16),t(157," icon"),l(158,"br"),e()()(),n(159,"td",17)(160,"code",18),t(161,"string"),e()(),n(162,"td",20)(163,"p"),t(164,"\xCDcone para o item de menu, os "),n(165,"a",24),t(166,"\xEDcones aceitos"),e(),t(167," s\xE3o os definidos no guia de estilo da PO."),e()()(),n(168,"tr",13)(169,"td",14)(170,"div",15)(171,"span",16),t(172," label"),l(173,"br"),e()()(),n(174,"td",17)(175,"code",18),t(176,"string"),e()(),n(177,"td",20)(178,"p"),t(179,"Texto do item de menu."),e()()(),n(180,"tr",13)(181,"td",14)(182,"div",15)(183,"span",16),t(184," link"),l(185,"br"),e()()(),n(186,"td",17)(187,"code",18),t(188,"string"),e()(),n(189,"td",20)(190,"em")(191,"strong"),t(192,"(opcional)"),e()(),n(193,"p"),t(194,"Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo."),e()()()()())},dependencies:[P],encapsulation:2})}return o})();var pe=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(O(z),O(U))};static \u0275cmp=d({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Menu Panel",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-menu-panel-doc"),e(),n(4,"po-tab",3),c("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-menu-panel-basic-view")(6,"sample-po-menu-panel-labs-view")(7,"sample-po-menu-panel-customer-view"),e()()()),a&2&&(s("p-actions",i.actions),m(2),s("p-active",i.activeTab==="doc"),m(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[I,g,f,ne,oe,ie,le],encapsulation:2})}return o})();var Me=[{path:"",component:pe}],me=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=L({type:o});static \u0275inj=D({imports:[V.forChild(Me),V]})}return o})();var Ge=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=L({type:o});static \u0275inj=D({imports:[Z,me]})}return o})();export{Ge as DocPoMenuPanelModule};
