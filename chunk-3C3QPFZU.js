import{o as h,p as X}from"./chunk-R3BKLGLC.js";import{Ab as v,F as z,Ga as A,Ra as J,Wa as G,a as E,m as j,nb as K,ob as Q,zb as b}from"./chunk-TUTTJOS2.js";import{$a as _,Ac as R,Ba as g,Ea as t,Fa as e,Ga as l,Ka as W,La as s,M as w,Nc as q,Pc as M,Rc as V,T,U as x,Xa as i,Za as S,ab as B,bb as L,eb as C,ha as p,ia as y,oa as d,pa as k,ub as D,wc as F,xc as U,ya as r,yc as O,zc as H}from"./chunk-MIQUIDUB.js";var Y=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-divider-basic"]],standalone:!1,decls:1,vars:0,template:function(a,n){a&1&&l(0,"po-divider")},dependencies:[E],encapsulation:2})}return o})();var re=o=>({"docs-sample-code-tabs":o}),$=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-divider-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Divider Basic"),e(),t(4,"a",2),s("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-divider-basic/sample-po-divider-basic.component.html"),e(),t(13,"pre",7),i(14,`<po-divider></po-divider>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-divider-basic/sample-po-divider-basic.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-divider-basic',
  templateUrl: './sample-po-divider-basic.component.html',
  standalone: false
})
export class SamplePoDividerBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-divider-basic"),e(),l(23,"hr")),a&2&&(p(5),g("po-icon "+n.sampleCodeButtonIcon),p(),S(" ",n.sampleCodeButtonLabel,""),p(),r("ngClass",C(4,re,n.hideSampleCodeTabs)))},dependencies:[D,h,b,v,Y],encapsulation:2})}return o})();var ee=(()=>{class o{borderWidth;label;borderWidthList=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];ngOnInit(){this.restore()}restore(){this.label=void 0,this.borderWidth=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-divider-labs"]],standalone:!1,decls:8,vars:5,consts:[["f","ngForm"],[3,"p-label","p-border-width"],[1,"po-row"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","borderWidth","p-label","Border width",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,n){if(a&1){let u=W();l(0,"po-divider",1),t(1,"form",null,0)(3,"div",2)(4,"po-input",3),L("ngModelChange",function(f){return T(u),B(n.label,f)||(n.label=f),x(f)}),e(),t(5,"po-select",4),L("ngModelChange",function(f){return T(u),B(n.borderWidth,f)||(n.borderWidth=f),x(f)}),e()(),t(6,"div",2)(7,"po-button",5),s("p-click",function(){return T(u),x(n.restore())}),e()()()}a&2&&(r("p-label",n.label)("p-border-width",n.borderWidth),p(4),_("ngModel",n.label),p(),_("ngModel",n.borderWidth),r("p-options",n.borderWidthList))},dependencies:[R,F,U,H,O,z,E,A,J],encapsulation:2})}return o})();var se=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-divider-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Divider Labs"),e(),t(4,"a",2),s("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-divider-labs/sample-po-divider-labs.component.html"),e(),t(13,"pre",7),i(14,`<po-divider [p-label]="label" [p-border-width]="borderWidth"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>
    <po-select
      class="po-md-6"
      name="borderWidth"
      [(ngModel)]="borderWidth"
      p-label="Border width"
      [p-options]="borderWidthList"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-divider-labs/sample-po-divider-labs.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-divider-labs',
  templateUrl: './sample-po-divider-labs.component.html',
  standalone: false
})
export class SamplePoDividerLabsComponent implements OnInit {
  borderWidth: string;
  label: string;

  public readonly borderWidthList: Array<PoSelectOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.label = undefined;
    this.borderWidth = undefined;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-divider-labs"),e(),l(23,"hr")),a&2&&(p(5),g("po-icon "+n.sampleCodeButtonIcon),p(),S(" ",n.sampleCodeButtonLabel,""),p(),r("ngClass",C(4,se,n.hideSampleCodeTabs)))},dependencies:[D,h,b,v,ee],encapsulation:2})}return o})();var ie=(()=>{class o{router;birthDate="26/12/1978";email="john.doe@po-ui.com.br";fathersName="Mike Doe";genre="male";graduation="College Degree";mothersName="Jane Doe";name="John Doe";nationality="USA";nickname="Big John";placeOfBirth="Colorado";statusValue="Success";userId=122635;breadcrumb={items:[{label:"Home",link:"/"},{label:"User Detail"}]};constructor(m){this.router=m}static \u0275fac=function(a){return new(a||o)(y(M))};static \u0275cmp=d({type:o,selectors:[["sample-po-divider-user-detail"]],standalone:!1,decls:19,vars:13,consts:[["p-title","User Detail",3,"p-breadcrumb"],[1,"po-row","po-mb-4"],["p-label","Status",1,"po-md-12"],["p-icon","","p-label","Status","p-type","success",1,"po-md-4",3,"p-value"],["p-label","User ID",1,"po-md-4",3,"p-value"],["p-label","Personal data",1,"po-md-12"],["p-label","Name",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","Nickname",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","E-mail",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","Birthday",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","Genre",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","Nationality",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","Place of birth",1,"po-md-4",3,"p-value"],["p-label","Gratuation",1,"po-md-4",3,"p-value"],["p-label","Relationship",1,"po-md-12"],["p-label","Father's name",1,"po-md-4",3,"p-value"],["p-label","Mother's name",1,"po-md-4",3,"p-value"]],template:function(a,n){a&1&&(t(0,"po-page-detail",0)(1,"div",1),l(2,"po-divider",2)(3,"po-tag",3)(4,"po-info",4),e(),t(5,"div",1),l(6,"po-divider",5)(7,"po-info",6)(8,"po-info",7)(9,"po-info",8)(10,"po-info",9)(11,"po-info",10)(12,"po-info",11)(13,"po-info",12)(14,"po-info",13),e(),t(15,"div",1),l(16,"po-divider",14)(17,"po-info",15)(18,"po-info",16),e()()),a&2&&(r("p-breadcrumb",n.breadcrumb),p(3),r("p-value",n.statusValue),p(),r("p-value",n.userId),p(3),r("p-value",n.name),p(),r("p-value",n.nickname),p(),r("p-value",n.email),p(),r("p-value",n.birthDate),p(),r("p-value",n.genre),p(),r("p-value",n.nationality),p(),r("p-value",n.placeOfBirth),p(),r("p-value",n.graduation),p(3),r("p-value",n.fathersName),p(),r("p-value",n.mothersName))},dependencies:[E,j,G,Q],encapsulation:2})}return o})();var ve=o=>({"docs-sample-code-tabs":o}),oe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-divider-user-detail-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Divider - User Detail"),e(),t(4,"a",2),s("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-divider-user-detail/sample-po-divider-user-detail.component.html"),e(),t(13,"pre",7),i(14,`<po-page-detail p-title="User Detail" [p-breadcrumb]="breadcrumb">
  <div class="po-row po-mb-4">
    <po-divider class="po-md-12" p-label="Status"></po-divider>

    <po-tag class="po-md-4" p-icon p-label="Status" p-type="success" [p-value]="statusValue"> </po-tag>

    <po-info class="po-md-4" p-label="User ID" [p-value]="userId"> </po-info>
  </div>

  <div class="po-row po-mb-4">
    <po-divider class="po-md-12" p-label="Personal data"></po-divider>

    <po-info class="po-md-4 po-mb-md-2" p-label="Name" [p-value]="name"> </po-info>

    <po-info class="po-md-4 po-mb-md-2" p-label="Nickname" [p-value]="nickname"> </po-info>

    <po-info class="po-md-4 po-mb-md-2" p-label="E-mail" [p-value]="email"> </po-info>

    <po-info class="po-md-4 po-mb-md-2" p-label="Birthday" [p-value]="birthDate"> </po-info>

    <po-info class="po-md-4 po-mb-md-2" p-label="Genre" [p-value]="genre"> </po-info>

    <po-info class="po-md-4 po-mb-md-2" p-label="Nationality" [p-value]="nationality"> </po-info>

    <po-info class="po-md-4" p-label="Place of birth" [p-value]="placeOfBirth"> </po-info>

    <po-info class="po-md-4" p-label="Gratuation" [p-value]="graduation"> </po-info>
  </div>

  <div class="po-row po-mb-4">
    <po-divider class="po-md-12" p-label="Relationship"></po-divider>

    <po-info class="po-md-4" p-label="Father's name" [p-value]="fathersName"> </po-info>

    <po-info class="po-md-4" p-label="Mother's name" [p-value]="mothersName"> </po-info>
  </div>
</po-page-detail>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-divider-user-detail/sample-po-divider-user-detail.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-divider-user-detail',
  templateUrl: './sample-po-divider-user-detail.component.html',
  standalone: false
})
export class SamplePoDividerUserDetailComponent {
  birthDate: string = '26/12/1978';
  email: string = 'john.doe@po-ui.com.br';
  fathersName: string = 'Mike Doe';
  genre: string = 'male';
  graduation: string = 'College Degree';
  mothersName: string = 'Jane Doe';
  name: string = 'John Doe';
  nationality: string = 'USA';
  nickname: string = 'Big John';
  placeOfBirth: string = 'Colorado';
  statusValue: string = 'Success';
  userId: number = 122635;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'User Detail' }]
  };

  constructor(private router: Router) {}
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-divider-user-detail"),e(),l(23,"hr")),a&2&&(p(5),g("po-icon "+n.sampleCodeButtonIcon),p(),S(" ",n.sampleCodeButtonLabel,""),p(),r("ngClass",C(4,ve,n.hideSampleCodeTabs)))},dependencies:[D,h,b,v,ie],encapsulation:2})}return o})();var ne=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-divider-doc"]],standalone:!1,decls:170,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(a,n){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoDividerModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),i(6,"M\xF3dulo do componente po-divider."),e()(),t(7,"h3",3),i(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),i(11,"PoDividerComponent"),e()(),t(12,"div",2)(13,"p"),i(14,"Este componente apresenta uma linha demarcadora de blocos e pode conter um "),t(15,"em"),i(16,"label"),e(),i(17,`. Seu uso \xE9 indicado para defini\xE7\xE3o
e organiza\xE7\xE3o de informa\xE7\xF5es em uma tela e sua caracter\xEDstica \xE9 semelhante \xE0 tag `),t(18,"code"),i(19,"<hr>"),e(),i(20,"."),e(),t(21,"h4"),i(22,"Tokens customiz\xE1veis"),e(),t(23,"p"),i(24,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(25,"blockquote")(26,"p"),i(27,"Para maiores informa\xE7\xF5es, acesse o guia "),t(28,"a",6),i(29,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),i(30,"."),e()(),t(31,"table")(32,"thead")(33,"tr")(34,"th"),i(35,"Propriedade"),e(),t(36,"th"),i(37,"Descri\xE7\xE3o"),e(),t(38,"th"),i(39,"Valor Padr\xE3o"),e()()(),t(40,"tbody")(41,"tr")(42,"td")(43,"strong"),i(44,"Default Values"),e()(),l(45,"td")(46,"td"),e(),t(47,"tr")(48,"td")(49,"code"),i(50,"--color"),e()(),t(51,"td"),i(52,"Cor principla do divider\xA0"),e(),t(53,"td")(54,"code"),i(55,"var(--color-neutral-mid-40)"),e()()(),t(56,"tr")(57,"td")(58,"code"),i(59,"--stroke-linecap"),e()(),t(60,"td"),i(61,"Extremidade da linha\xA0"),e(),t(62,"td")(63,"code"),i(64,"round"),e()()()()()(),t(65,"div",7)(66,"h4",8),i(67,"Seletor"),e(),t(68,"pre",9),i(69,`<po-divider
    p-border-width="string"
    p-label="string" >
</po-divider>
`),e()(),t(70,"h4",10),i(71,"Propriedades"),e(),t(72,"table",11)(73,"tr",12)(74,"th",13),i(75,"Nome"),e(),t(76,"th",13),i(77,"Tipo"),e(),t(78,"th",13),i(79,"Padr\xE3o"),e(),t(80,"th",13),i(81,"Descri\xE7\xE3o"),e()(),t(82,"tr",14)(83,"td",15)(84,"div",16)(85,"span",17),i(86," p-border-width"),l(87,"br"),e()()(),t(88,"td",18)(89,"code",19),i(90,"string"),e()(),t(91,"td",20)(92,"p")(93,"code"),i(94,"small"),e()()(),t(95,"td",21)(96,"em")(97,"strong"),i(98,"(opcional)"),e()(),t(99,"p"),i(100,"Define a espessura da linha."),e(),t(101,"p"),i(102,"Valores v\xE1lidos:"),e(),t(103,"ul")(104,"li"),i(105,"small"),e(),t(106,"li"),i(107,"medium"),e(),t(108,"li"),i(109,"large"),e()()()(),t(110,"tr",14)(111,"td",15)(112,"div",16)(113,"span",17),i(114," p-label"),l(115,"br"),e()()(),t(116,"td",18)(117,"code",19),i(118,"string"),e()(),t(119,"td",20),i(120,"-"),e(),t(121,"td",21)(122,"em")(123,"strong"),i(124,"(opcional)"),e()(),t(125,"p"),i(126,"Valor do r\xF3tulo a ser exibido."),e()()()(),t(127,"h3"),i(128,"Enums"),e(),t(129,"h4",4)(130,"code",5),i(131,"PoDividerSize"),e()(),t(132,"div",2)(133,"p"),i(134,"Enum para defini\xE7\xE3o da espessura da linha."),e()(),t(135,"h4",10),i(136,"Propriedades"),e(),t(137,"table",11)(138,"tr",12)(139,"th",13),i(140,"Nome"),e(),t(141,"th",13),i(142,"Descri\xE7\xE3o"),e()(),t(143,"tr",14)(144,"td",15)(145,"div",16)(146,"span",17),i(147," small"),l(148,"br"),e()()(),t(149,"td",21)(150,"p"),i(151,"A espessura da linha fica com 1px."),e()()(),t(152,"tr",14)(153,"td",15)(154,"div",16)(155,"span",17),i(156," medium"),l(157,"br"),e()()(),t(158,"td",21)(159,"p"),i(160,"A espessura da linha fica com 2px."),e()()(),t(161,"tr",14)(162,"td",15)(163,"div",16)(164,"span",17),i(165," large"),l(166,"br"),e()()(),t(167,"td",21)(168,"p"),i(169,"A espessura da linha fica com 4px."),e()()()()())},dependencies:[h],encapsulation:2})}return o})();var ae=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(y(q),y(M))};static \u0275cmp=d({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Divider",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),s("p-click",function(){return n.changeTab("doc")}),l(3,"sample-po-divider-doc"),e(),t(4,"po-tab",3),s("p-click",function(){return n.changeTab("web")}),l(5,"sample-po-divider-basic-view")(6,"sample-po-divider-labs-view")(7,"sample-po-divider-user-detail-view"),e()()()),a&2&&(r("p-actions",n.actions),p(2),r("p-active",n.activeTab==="doc"),p(2),r("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[K,b,v,$,te,oe,ne],encapsulation:2})}return o})();var ge=[{path:"",component:ae}],le=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=k({type:o});static \u0275inj=w({imports:[V.forChild(ge),V]})}return o})();var qe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=k({type:o});static \u0275inj=w({imports:[X,le]})}return o})();export{qe as DocPoDividerModule};
