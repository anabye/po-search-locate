import{o as x,p as C}from"./chunk-R3BKLGLC.js";import{Ab as S,nb as g,zb as h}from"./chunk-TUTTJOS2.js";import{Ea as t,Fa as o,Ga as c,La as b,M as r,Nc as f,Pc as T,Rc as E,Xa as e,ha as d,ia as u,oa as p,pa as m,ya as s}from"./chunk-MIQUIDUB.js";var y=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=p({type:n,selectors:[["sample-po-table-column-template-doc"]],standalone:!1,decls:94,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(a,l){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoTableModule } from '@po-ui/ng-components';"),o()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-table"),o()(),t(7,"h3",3),e(8,"Componente"),o(),t(9,"h4",4)(10,"code",5),e(11,"PoTableColumnTemplateDirective"),o()(),t(12,"div",2)(13,"p"),e(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),o(),t(15,"p"),e(16,`Em seu uso, deve-se utilizar como par\xE2metro de entrada o input [p-property], o qual \xE9 respons\xE1vel por informar ao PO-TABLE qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),o(),t(17,"p"),e(18,"Retorno:"),o(),t(19,"ul")(20,"li"),e(21,"value: valor referente ao conte\xFAdo da linha corrente."),o()(),t(22,"p"),e(23,"Modo de uso:"),o(),t(24,"pre")(25,"code",6),e(26,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template p-table-column-template [p-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),o()(),t(27,"blockquote")(28,"p"),e(29,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),t(30,"code"),e(31,"status"),o(),e(32," ter\xE3o o conte\xFAdo alterado para "),t(33,"code"),e(34,"<h1>${value}</h1>"),o(),e(35,`,
sendo que `),t(36,"code"),e(37,"value"),o(),e(38," refere-se ao conte\xFAdo da linha."),o()(),t(39,"pre")(40,"code",6),e(41,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template  p-table-column-template [p-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),o()(),t(42,"blockquote")(43,"p"),e(44,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),o()(),t(45,"p"),e(46,"Abaixo, a declara\xE7\xE3o dos dados de entrada do PO-TABLE para o uso da directiva."),o(),t(47,"pre")(48,"code",7),e(49,`...
export class AppComponent {

   targetProperty= 'status';

   items = [{
     code: 1200,
     product: 'Rice',
     status: 'CANCELED'
     },{
     code: 1355,
     product: 'Bean',
     status: 'FINISHED'
   }];

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...
`),o()(),t(50,"blockquote")(51,"p"),e(52,"Observa\xE7\xE3o: Sempre adicionar o "),t(53,"strong"),e(54,"type"),o(),e(55," da coluna que deseja manipular com a directiva como "),t(56,"code"),e(57,"columnTemplate"),o()()()(),t(58,"div",8)(59,"h4",9),e(60,"Seletor"),o(),t(61,"pre",10),e(62,`<[p-table-column-template]
    p-property="string" >
</[p-table-column-template]>
`),o()(),t(63,"h4",11),e(64,"Propriedades"),o(),t(65,"table",12)(66,"tr",13)(67,"th",14),e(68,"Nome"),o(),t(69,"th",14),e(70,"Tipo"),o(),t(71,"th",14),e(72,"Padr\xE3o"),o(),t(73,"th",14),e(74,"Descri\xE7\xE3o"),o()(),t(75,"tr",15)(76,"td",16)(77,"div",17)(78,"span",18),e(79," p-property"),c(80,"br"),o()()(),t(81,"td",19)(82,"code",20),e(83,"string"),o()(),t(84,"td",21),e(85,"-"),o(),t(86,"td",22)(87,"em")(88,"strong"),e(89,"(opcional)"),o()(),t(90,"p"),e(91,"Vari\xE1vel respons\xE1vel por armazenar a property da coluna da tabela que ser\xE1 adicionado o template."),o(),t(92,"p"),e(93,"Caso n\xE3o seja informada esta propriedade, ser\xE3o apresentados normalmente os dados da coluna."),o()()()()())},dependencies:[x],encapsulation:2})}return n})();var D=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:"merge"}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||n)(u(f),u(T))};static \u0275cmp=p({type:n,selectors:[["ng-component"]],standalone:!1,decls:5,vars:4,consts:[["p-title","Table Column Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return l.changeTab("doc")}),c(3,"sample-po-table-column-template-doc"),o(),t(4,"po-tab",3),b("p-click",function(){return l.changeTab("web")}),o()()()),a&2&&(s("p-actions",l.actions),d(2),s("p-active",l.activeTab==="doc"),d(2),s("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[g,h,S,y],encapsulation:2})}return n})();var q=[{path:"",component:D}],P=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=m({type:n});static \u0275inj=r({imports:[E.forChild(q),E]})}return n})();var W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=m({type:n});static \u0275inj=r({imports:[C,P]})}return n})();export{W as DocPoTableColumnTemplateModule};
