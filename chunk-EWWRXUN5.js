import{o as T,p as g}from"./chunk-MMZVQUBQ.js";import{Ab as f,nb as S,zb as v}from"./chunk-522XRIZO.js";import{Fa as t,Ga as i,Ha as l,M as m,Ma as E,Oc as w,Qc as h,Sc as b,Ya as e,ha as c,ia as u,oa as p,pa as d,ya as s}from"./chunk-WFKG4FNY.js";var D=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=p({type:o,selectors:[["sample-po-table-row-template-doc"]],standalone:!1,decls:174,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(row:","any,","index:","number)","=>","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableRowTemplateArrowDirection"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoTableModule } from '@po-ui/ng-components';"),i()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-table"),i()(),t(7,"h3",3),e(8,"Componente"),i(),t(9,"h4",4)(10,"code",5),e(11,"PoTableRowTemplateDirective"),i()(),t(12,"div",2)(13,"p"),e(14,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),i(),t(15,"blockquote")(16,"p"),e(17,"Quando utilizada, sobrep\xF5e as funcionalidade b\xE1sicas do "),t(18,"em"),e(19,"master-detail"),i(),e(20,"."),i()(),t(21,"p"),e(22,"Em seu uso, deve-se utilizar como par\xE2metro a refer\xEAncia da "),t(23,"em"),e(24,"linha"),i(),e(25," e/ou "),t(26,"em"),e(27,"\xEDndice"),i(),e(28,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),i(),t(29,"ul")(30,"li"),e(31,"Linha: "),t(32,"code"),e(33,"row"),i(),e(34," determina o item da linha corrente."),i(),t(35,"li"),e(36,"\xCDndice: "),t(37,"code"),e(38,"rowIndex"),i(),e(39," determina o \xEDndice da linha corrente."),i()(),t(40,"p"),e(41,"Esta diretiva comp\xF5e-se de dois meios para uso, de forma expl\xEDcita tal como em "),t(42,"em"),e(43,"syntax sugar"),i(),e(44,". Veja a seguir ambos, respectivamente:"),i(),t(45,"pre")(46,"code"),e(47,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),i()(),t(48,"pre")(49,"code"),e(50,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),i()(),t(51,"p"),e(52,"A diretiva "),t(53,"strong"),e(54,"p-table-row-template"),i(),e(55,", possibilita tamb\xE9m que determinada linha apresente ou n\xE3o seu "),t(56,"em"),e(57,"template"),i(),e(58,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),t(59,"code"),e(60,"p-table-row-template-show"),i(),e(61,`,
a mesma deve retornar um valor do tipo `),t(62,"em"),e(63,"boolean"),i(),e(64,". Veja o exemplo a seguir:"),i(),t(65,"pre")(66,"code"),e(67,`...
@Component({
   selector: 'app-root',
   templateUrl: \`
     ...
     <po-table
       [p-columns]="columns"
       [p-items]="items">
         <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isUndelivered">
           <detail-row [row]="rowItem"> </detail-row>
         </div>
     ...
   \`
})
export class AppComponent {
   public dataTable = [{
     code: 1200,
     product: 'Rice',
     costumer: 'Supermarket 1',
     quantity: 3,
     status: 'delivered',
     license_plate: 'MDJD9191',
     batch_product: 18041822,
     driver: 'Jos\xE9 Oliveira'
   }, {
     code: 1355,
     product: 'Bean',
     costumer: 'Supermarket 2',
     quantity: 1,
     status: 'transport',
     license_plate: 'XXA5454',
     batch_product: 18041821,
     driver: 'Francisco Pereira'
   }];

   isUndelivered(row, index: number) {
     return row.status !== 'delivered';
   }
}
`),i()(),t(68,"blockquote")(69,"p"),e(70,"No exemplo acima, somente ser\xE1 disponibilizado os detalhes de informa\xE7\xF5es nas linhas cujo o valor de "),t(71,"code"),e(72,"status"),i(),e(73,`
n\xE3o correspondam \xE0 `),t(74,"em"),e(75,"delivered"),i(),e(76,"."),i()()(),t(77,"div",6)(78,"h4",7),e(79,"Seletor"),i(),t(80,"pre",8),e(81,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),i()(),t(82,"h4",9),e(83,"Propriedades"),i(),t(84,"table",10)(85,"tr",11)(86,"th",12),e(87,"Nome"),i(),t(88,"th",12),e(89,"Tipo"),i(),t(90,"th",12),e(91,"Padr\xE3o"),i(),t(92,"th",12),e(93,"Descri\xE7\xE3o"),i()(),t(94,"tr",13)(95,"td",14)(96,"div",15)(97,"span",16),e(98," p-table-row-template-show"),l(99,"br"),i()()(),t(100,"td",17)(101,"code",18),e(102,"(row: any, index: number) => boolean"),i()(),t(103,"td",19)(104,"p")(105,"code"),e(106,"true"),i()()(),t(107,"td",20)(108,"em")(109,"strong"),e(110,"(opcional)"),i()(),t(111,"p"),e(112,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),i(),t(113,"p"),e(114,"Caso n\xE3o ser utilizado esta propriedade, ser\xE3o apresentados todos os detalhes das linhas."),i()()(),t(115,"tr",13)(116,"td",14)(117,"div",15)(118,"span",16),e(119," p-table-row-template-arrow-direction"),l(120,"br"),i()()(),t(121,"td",17)(122,"code",21),e(123,"PoTableRowTemplateArrowDirection"),i()(),t(124,"td",19)(125,"p")(126,"code"),e(127,"'LEFT'"),i()()(),t(128,"td",20)(129,"em")(130,"strong"),e(131,"(opcional)"),i()(),t(132,"p"),e(133,"Propriedade respons\xE1vel por informar a posi\xE7\xE3o do colapse que abrir\xE1 os detalhes da linha."),i()()()(),t(134,"h3"),e(135,"Enums"),i(),t(136,"h4",4)(137,"code",5),e(138,"PoTableRowTemplateArrowDirection"),i()(),t(139,"div",2)(140,"p"),e(141,"Define a posi\xE7\xE3o da arrow que expande o * row template* na tabela, ser\xE1 exibida na esquerda ou direita."),i()(),t(142,"h4",9),e(143,"Propriedades"),i(),t(144,"table",10)(145,"tr",11)(146,"th",12),e(147,"Nome"),i(),t(148,"th",12),e(149,"Descri\xE7\xE3o"),i()(),t(150,"tr",13)(151,"td",14)(152,"div",15)(153,"span",16),e(154," Left"),l(155,"br"),i()()(),t(156,"td",20)(157,"p"),e(158,"Posiciona a "),t(159,"em"),e(160,"arrow"),i(),e(161," na esquerda. (Padr\xE3o)"),i()()(),t(162,"tr",13)(163,"td",14)(164,"div",15)(165,"span",16),e(166," Right"),l(167,"br"),i()()(),t(168,"td",20)(169,"p"),e(170,"Posiciona a "),t(171,"em"),e(172,"arrow"),i(),e(173," na direita"),i()()()()())},dependencies:[T],encapsulation:2})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(n){return new(n||o)(u(w),u(h))};static \u0275cmp=p({type:o,selectors:[["ng-component"]],standalone:!1,decls:5,vars:4,consts:[["p-title","Table Row Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return r.changeTab("doc")}),l(3,"sample-po-table-row-template-doc"),i(),t(4,"po-tab",3),E("p-click",function(){return r.changeTab("web")}),i()()()),n&2&&(s("p-actions",r.actions),c(2),s("p-active",r.activeTab==="doc"),c(2),s("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"))},dependencies:[S,v,f,D],encapsulation:2})}return o})();var q=[{path:"",component:P}],y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=d({type:o});static \u0275inj=m({imports:[b.forChild(q),b]})}return o})();var U=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=d({type:o});static \u0275inj=m({imports:[g,y]})}return o})();export{U as DocPoTableRowTemplateModule};
