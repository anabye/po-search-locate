import{o as P,p as J}from"./chunk-MMZVQUBQ.js";import{Ab as E,F as j,Ga as U,La as G,Va as k,Wa as D,ja as A,nb as Q,zb as v}from"./chunk-522XRIZO.js";import{Ac as H,Ba as w,Bc as N,Fa as e,Ga as t,Ha as l,La as O,M as I,Ma as u,Oc as q,Qc as R,Sc as z,T as f,U as b,Ya as n,_a as _,ab as S,bb as h,cb as C,fb as M,ha as m,ia as V,oa as s,pa as y,vb as T,xc as B,ya as d,yc as F,zc as W}from"./chunk-WFKG4FNY.js";var K=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-info-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-label","PO Info","p-value","Value"]],template:function(a,i){a&1&&l(0,"po-info",0)},dependencies:[D],encapsulation:2})}return o})();var ae=o=>({"docs-sample-code-tabs":o}),Y=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-info-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Info Basic"),t(),e(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-info-basic/sample-po-info-basic.component.html"),t(),e(13,"pre",7),n(14,`<po-info p-label="PO Info" p-value="Value"> </po-info>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-info-basic/sample-po-info-basic.component.ts"),t(),e(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-info-basic',
  templateUrl: './sample-po-info-basic.component.html',
  standalone: false
})
export class SamplePoInfoBasicComponent {}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-info-basic"),t(),l(23,"hr")),a&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel,""),m(),d("ngClass",M(4,ae,i.hideSampleCodeTabs)))},dependencies:[T,P,v,E,K],encapsulation:2})}return o})();var Z=(()=>{class o{label;labelSize;orientation;url;value;orientationOptions=[{label:"Horizontal",value:k.Horizontal},{label:"Vertical",value:k.Vertical}];ngOnInit(){this.restore()}restore(){this.label="PO Info",this.labelSize=void 0,this.orientation=void 0,this.url=void 0,this.value=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-info-labs"]],standalone:!1,decls:13,vars:11,consts:[["f","ngForm"],[3,"p-label","p-label-size","p-orientation","p-url","p-value"],[1,"po-row"],["name","label","p-clean","","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","Url",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","labelSize","p-clean","","p-label","Label size","p-max","11","p-min","1",1,"po-lg-2","po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","Orientation",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let c=O();l(0,"po-info",1)(1,"hr"),e(2,"form",null,0)(4,"div",2)(5,"po-input",3),C("ngModelChange",function(r){return f(c),h(i.label,r)||(i.label=r),b(r)}),t(),e(6,"po-input",4),C("ngModelChange",function(r){return f(c),h(i.value,r)||(i.value=r),b(r)}),t()(),e(7,"div",2)(8,"po-input",5),C("ngModelChange",function(r){return f(c),h(i.url,r)||(i.url=r),b(r)}),t(),e(9,"po-number",6),C("ngModelChange",function(r){return f(c),h(i.labelSize,r)||(i.labelSize=r),b(r)}),t(),e(10,"po-radio-group",7),C("ngModelChange",function(r){return f(c),h(i.orientation,r)||(i.orientation=r),b(r)}),t()(),e(11,"div",2)(12,"po-button",8),u("p-click",function(){return f(c),b(i.restore())}),t()()()}a&2&&(d("p-label",i.label)("p-label-size",i.labelSize)("p-orientation",i.orientation)("p-url",i.url)("p-value",i.value),m(5),S("ngModel",i.label),m(),S("ngModel",i.value),m(2),S("ngModel",i.url),m(),S("ngModel",i.labelSize),m(),S("ngModel",i.orientation),d("p-options",i.orientationOptions))},dependencies:[N,B,F,H,W,j,A,U,G,D],encapsulation:2})}return o})();var re=o=>({"docs-sample-code-tabs":o}),$=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-info-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Info Labs"),t(),e(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-info-labs/sample-po-info-labs.component.html"),t(),e(13,"pre",7),n(14,`<po-info [p-label]="label" [p-label-size]="labelSize" [p-orientation]="orientation" [p-url]="url" [p-value]="value">
</po-info>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="value" [(ngModel)]="value" p-clean p-label="Value"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-4 po-md-6" name="url" [(ngModel)]="url" p-clean p-label="Url"> </po-input>

    <po-number
      class="po-lg-2 po-md-6"
      name="labelSize"
      [(ngModel)]="labelSize"
      p-clean
      p-label="Label size"
      p-max="11"
      p-min="1"
    >
    </po-number>

    <po-radio-group
      class="po-lg-6 po-md-12"
      name="orientation"
      [(ngModel)]="orientation"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-info-labs/sample-po-info-labs.component.ts"),t(),e(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoInfoOrientation, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-info-labs',
  templateUrl: './sample-po-info-labs.component.html',
  standalone: false
})
export class SamplePoInfoLabsComponent implements OnInit {
  label: string;
  labelSize: number;
  orientation: PoInfoOrientation;
  url: string;
  value: string;

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Horizontal', value: PoInfoOrientation.Horizontal },
    { label: 'Vertical', value: PoInfoOrientation.Vertical }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.label = 'PO Info';
    this.labelSize = undefined;
    this.orientation = undefined;
    this.url = undefined;
    this.value = undefined;
  }
}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-info-labs"),t(),l(23,"hr")),a&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel,""),m(),d("ngClass",M(4,re,i.hideSampleCodeTabs)))},dependencies:[T,P,v,E,Z],encapsulation:2})}return o})();var ee=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-info-doc"]],standalone:!1,decls:189,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["href","/guides/grid-system"],["pan","",1,"docs-api-property-type","PoInfoOrientation"]],template:function(a,i){a&1&&(e(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoInfoModule } from '@po-ui/ng-components';"),t()(),e(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente po-info."),t()(),e(7,"h3",3),n(8,"Componente"),t(),e(9,"h4",4)(10,"code",5),n(11,"PoInfoComponent"),t()(),e(12,"div",2)(13,"p"),n(14,` Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
valor na parte inferior. Facilita a exibi\xE7\xE3o de dados pois vem com layout padr\xE3o PO.`),t()(),e(15,"div",6)(16,"h4",7),n(17,"Seletor"),t(),e(18,"pre",8),n(19,`<po-info
    p-label="string"
    p-label-size="number"
    p-orientation="PoInfoOrientation"
    p-url="string"
    p-value="string" >
</po-info>
`),t()(),e(20,"h4",9),n(21,"Propriedades"),t(),e(22,"table",10)(23,"tr",11)(24,"th",12),n(25,"Nome"),t(),e(26,"th",12),n(27,"Tipo"),t(),e(28,"th",12),n(29,"Padr\xE3o"),t(),e(30,"th",12),n(31,"Descri\xE7\xE3o"),t()(),e(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),n(36," p-label"),l(37,"br"),t()()(),e(38,"td",17)(39,"code",18),n(40,"string"),t()(),e(41,"td",19),n(42,"-"),t(),e(43,"td",20)(44,"p"),n(45,"Valor do r\xF3tulo a ser exibido."),t()()(),e(46,"tr",13)(47,"td",14)(48,"div",15)(49,"span",16),n(50," p-label-size"),l(51,"br"),t()()(),e(52,"td",17)(53,"code",21),n(54,"number"),t()(),e(55,"td",19),n(56,"-"),t(),e(57,"td",20)(58,"em")(59,"strong"),n(60,"(opcional)"),t()(),e(61,"p"),n(62,"Quantidade de "),e(63,"a",22),n(64,"colunas"),t(),n(65," usadas para a exibi\xE7\xE3o da "),e(66,"code"),n(67,"p-label"),t(),n(68,` quando o componente for
utilizado na orienta\xE7\xE3o horizontal.`),t(),e(69,"p"),n(70,"Valores v\xE1lidos:"),t(),e(71,"ul")(72,"li")(73,"code"),n(74,"[1 .. 11]"),t()()(),e(75,"blockquote")(76,"p"),n(77,"A propriedade "),e(78,"code"),n(79,"p-value"),t(),n(80," recebe o n\xFAmero de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas."),t()()()(),e(81,"tr",13)(82,"td",14)(83,"div",15)(84,"span",16),n(85," p-orientation"),l(86,"br"),t()()(),e(87,"td",17)(88,"code",23),n(89,"PoInfoOrientation"),t()(),e(90,"td",19)(91,"p")(92,"code"),n(93,"vertical"),t()()(),e(94,"td",20)(95,"em")(96,"strong"),n(97,"(opcional)"),t()(),e(98,"p"),n(99,"Define o layout de exibi\xE7\xE3o."),t(),e(100,"blockquote")(101,"p"),n(102,"Quando definido na horizontal, pode-se utilizar a propriedade "),e(103,"code"),n(104,"p-label-size"),t(),n(105," para um maior controle das informa\xE7\xF5es exibidas."),t()()()(),e(106,"tr",13)(107,"td",14)(108,"div",15)(109,"span",16),n(110," p-url"),l(111,"br"),t()()(),e(112,"td",17)(113,"code",18),n(114,"string"),t()(),e(115,"td",19),n(116,"-"),t(),e(117,"td",20)(118,"em")(119,"strong"),n(120,"(opcional)"),t()(),e(121,"p"),n(122,"Ao informar uma URL, o conte\xFAdo ser\xE1 exibido na forma de um "),e(123,"em"),n(124,"link"),t(),n(125," e ao ser clicado ser\xE1 redirecionado para a URL informada."),t(),e(126,"blockquote")(127,"p"),n(128,"Caso informar "),e(129,"code"),n(130,"http://"),t(),n(131,` ser\xE1 aberto uma nova aba.
Caso informar um caminho relativo, exemplo: `),e(132,"code"),n(133,"/customers"),t(),n(134,", ser\xE1 aberto na aba atual."),t()()()(),e(135,"tr",13)(136,"td",14)(137,"div",15)(138,"span",16),n(139," p-value"),l(140,"br"),t()()(),e(141,"td",17)(142,"code",18),n(143,"string"),t()(),e(144,"td",19),n(145,"-"),t(),e(146,"td",20)(147,"em")(148,"strong"),n(149,"(opcional)"),t()(),e(150,"p"),n(151,"Valor do conte\xFAdo a ser exibido."),t()()()(),e(152,"h3"),n(153,"Enums"),t(),e(154,"h4",4)(155,"code",5),n(156,"PoInfoOrientation"),t()(),e(157,"div",2)(158,"p"),n(159,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),e(160,"code"),n(161,"po-info"),t(),n(162,"."),t()(),e(163,"h4",9),n(164,"Propriedades"),t(),e(165,"table",10)(166,"tr",11)(167,"th",12),n(168,"Nome"),t(),e(169,"th",12),n(170,"Descri\xE7\xE3o"),t()(),e(171,"tr",13)(172,"td",14)(173,"div",15)(174,"span",16),n(175," Horizontal"),l(176,"br"),t()()(),e(177,"td",20)(178,"p"),n(179,"O valor ser\xE1 exibido na horizontal, ao lado direito em rela\xE7\xE3o ao label."),t()()(),e(180,"tr",13)(181,"td",14)(182,"div",15)(183,"span",16),n(184," Vertical"),l(185,"br"),t()()(),e(186,"td",20)(187,"p"),n(188,"Exibe o valor na vertical, ou seja, abaixo do label."),t()()()()())},dependencies:[P],encapsulation:2})}return o})();var te=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(V(q),V(R))};static \u0275cmp=s({type:o,selectors:[["ng-component"]],standalone:!1,decls:7,vars:4,consts:[["p-title","Info",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-info-doc"),t(),e(4,"po-tab",3),u("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-info-basic-view")(6,"sample-po-info-labs-view"),t()()()),a&2&&(d("p-actions",i.actions),m(2),d("p-active",i.activeTab==="doc"),m(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[Q,v,E,Y,$,ee],encapsulation:2})}return o})();var de=[{path:"",component:te}],ne=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=y({type:o});static \u0275inj=I({imports:[z.forChild(de),z]})}return o})();var ze=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=y({type:o});static \u0275inj=I({imports:[J,ne]})}return o})();export{ze as DocPoInfoModule};
