import{o as A,p as P}from"./chunk-R3BKLGLC.js";import{Ab as h,nb as v,zb as g}from"./chunk-TUTTJOS2.js";import{Ea as i,Fa as t,Ga as r,La as E,M as d,Nc as b,Pc as f,Rc as x,Xa as e,ha as s,ia as u,oa as l,pa as p,ya as c}from"./chunk-MIQUIDUB.js";var y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["sample-po-accordion-item-doc"]],standalone:!1,decls:227,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(n,m){n&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoAccordionModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente "),i(7,"code"),e(8,"po-accordion"),t(),e(9,"."),t(),i(10,"blockquote")(11,"p"),e(12,"Para o correto funcionamento do componente "),i(13,"code"),e(14,"po-accordion"),t(),e(15,", deve ser importado o m\xF3dulo "),i(16,"code"),e(17,"BrowserAnimationsModule"),t(),e(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),t()(),i(19,"p"),e(20,"M\xF3dulo da aplica\xE7\xE3o:"),t(),i(21,"pre")(22,"code"),e(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),t()(),i(24,"p"),e(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),t(),i(26,"pre")(27,"code"),e(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),t()()(),i(29,"h3",3),e(30,"Componente"),t(),i(31,"h4",4)(32,"code",5),e(33,"PoAccordionItemComponent"),t()(),i(34,"div",2)(35,"p"),e(36,"Componente utilizado para renderizar os itens do "),i(37,"code"),e(38,"po-accordion"),t(),e(39,"."),t(),i(40,"p"),e(41,"O componente "),i(42,"code"),e(43,"po-accordion"),t(),e(44,` j\xE1 faz o controle de abertura e fechamento dos itens automaticamente,
mas caso houver a necessidade de abrir algum dos `),i(45,"code"),e(46,"po-accordion-item"),t(),e(47," via Typescript, pode ser feita da seguinte forma:"),t(),i(48,"pre")(49,"code"),e(50,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1" #item1>
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),t()(),i(51,"p"),e(52,"e no typescript pode-se utilizar o "),i(53,"code"),e(54,"@ViewChild"),t(),e(55,":"),t(),i(56,"pre")(57,"code"),e(58,`@ViewChild(PoAccordionItemComponent, { static: true }) item1: PoAccordionItemComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapse()
  this.item1.expand();
}
`),t()()(),i(59,"div",6)(60,"h4",7),e(61,"Seletor"),t(),i(62,"pre",8),e(63,`<po-accordion-item
    (p-collapse)="EventEmitter"
    p-disabled="boolean"
    (p-expand)="EventEmitter"
    p-label="string"
    p-label-tag="string"
    p-type-tag="PoTagType" >
</po-accordion-item>
`),t()(),i(64,"h4",9),e(65,"Propriedades"),t(),i(66,"table",10)(67,"tr",11)(68,"th",12),e(69,"Nome"),t(),i(70,"th",12),e(71,"Tipo"),t(),i(72,"th",12),e(73,"Padr\xE3o"),t(),i(74,"th",12),e(75,"Descri\xE7\xE3o"),t()(),i(76,"tr",13)(77,"td",14)(78,"div",15)(79,"span",16),e(80," (p-collapse)"),r(81,"br"),t()()(),i(82,"td",17)(83,"code",18),e(84,"EventEmitter"),t()(),i(85,"td",19),e(86,"-"),t(),i(87,"td",20)(88,"p"),e(89,"Evento disparado ao retrair o item, seja manualmente ou programaticamente."),t()()(),i(90,"tr",13)(91,"td",14)(92,"div",21)(93,"span",22),e(94," p-disabled"),r(95,"br"),t()()(),i(96,"td",17)(97,"code",23),e(98,"boolean"),t()(),i(99,"td",19)(100,"p")(101,"code"),e(102,"false"),t()()(),i(103,"td",20)(104,"em")(105,"strong"),e(106,"(opcional)"),t()(),i(107,"p"),e(108,"Desabilita item."),t()()(),i(109,"tr",13)(110,"td",14)(111,"div",15)(112,"span",16),e(113," (p-expand)"),r(114,"br"),t()()(),i(115,"td",17)(116,"code",18),e(117,"EventEmitter"),t()(),i(118,"td",19),e(119,"-"),t(),i(120,"td",20)(121,"p"),e(122,"Evento disparado ao expandir o item, seja manualmente ou programaticamente."),t()()(),i(123,"tr",13)(124,"td",14)(125,"div",21)(126,"span",22),e(127," p-label"),r(128,"br"),t()()(),i(129,"td",17)(130,"code",24),e(131,"string"),t()(),i(132,"td",19),e(133,"-"),t(),i(134,"td",20)(135,"p"),e(136,"T\xEDtulo do item."),t()()(),i(137,"tr",13)(138,"td",14)(139,"div",21)(140,"span",22),e(141," p-label-tag"),r(142,"br"),t()()(),i(143,"td",17)(144,"code",24),e(145,"string"),t()(),i(146,"td",19),e(147,"-"),t(),i(148,"td",20)(149,"em")(150,"strong"),e(151,"(opcional)"),t()(),i(152,"p"),e(153,"Label da Tag."),t()()(),i(154,"tr",13)(155,"td",14)(156,"div",21)(157,"span",22),e(158," p-type-tag"),r(159,"br"),t()()(),i(160,"td",17)(161,"code",25),e(162,"PoTagType"),t()(),i(163,"td",19)(164,"p")(165,"code"),e(166,"info"),t()()(),i(167,"td",20)(168,"em")(169,"strong"),e(170,"(opcional)"),t()(),i(171,"p"),e(172,"Define o tipo da "),i(173,"em"),e(174,"tag"),t(),e(175," caso ela esteja sendo exibida."),t(),i(176,"p"),e(177,"Valores v\xE1lidos:"),t(),i(178,"ul")(179,"li")(180,"code"),e(181,"success"),t(),e(182,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),t(),i(183,"li")(184,"code"),e(185,"warning"),t(),e(186,": cor amarela que representa aviso ou advert\xEAncia."),t(),i(187,"li")(188,"code"),e(189,"danger"),t(),e(190,": cor vermelha para erro ou aviso cr\xEDtico."),t(),i(191,"li")(192,"code"),e(193,"info"),t(),e(194,": cor cinza escuro que caracteriza conte\xFAdo informativo."),t()()()()(),i(195,"h3",9),e(196,"M\xE9todos"),t(),i(197,"table",26)(198,"tr",13)(199,"th",27)(200,"div",21)(201,"h4")(202,"span",22),e(203," collapse "),t()()()()(),i(204,"tr",20)(205,"td",20)(206,"p"),e(207,"M\xE9todo para colapsar o "),i(208,"code"),e(209,"po-accordion-item"),t(),e(210,"."),t()()()(),r(211,"br"),i(212,"table",26)(213,"tr",13)(214,"th",27)(215,"div",21)(216,"h4")(217,"span",22),e(218," expand "),t()()()()(),i(219,"tr",20)(220,"td",20)(221,"p"),e(222,"M\xE9todo para expandir o "),i(223,"code"),e(224,"po-accordion-item"),t(),e(225,"."),t()()()(),r(226,"br"),t())},dependencies:[A],encapsulation:2})}return o})();var C=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(n){return new(n||o)(u(b),u(f))};static \u0275cmp=l({type:o,selectors:[["ng-component"]],standalone:!1,decls:5,vars:4,consts:[["p-title","Accordion Item",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,m){n&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return m.changeTab("doc")}),r(3,"sample-po-accordion-item-doc"),t(),i(4,"po-tab",3),E("p-click",function(){return m.changeTab("web")}),t()()()),n&2&&(c("p-actions",m.actions),s(2),c("p-active",m.activeTab==="doc"),s(2),c("p-hide",m.hidePoWebSample)("p-active",m.activeTab==="web"))},dependencies:[v,g,h,y],encapsulation:2})}return o})();var T=[{path:"",component:C}],D=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=p({type:o});static \u0275inj=d({imports:[x.forChild(T),x]})}return o})();var V=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=p({type:o});static \u0275inj=d({imports:[P,D]})}return o})();export{V as DocPoAccordionItemModule};
