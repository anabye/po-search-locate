import{o as S,p as x}from"./chunk-JYNCG2Y6.js";import{Ab as C,nb as h,zb as v}from"./chunk-HBOGTDFH.js";import{Ea as o,Fa as t,Ga as f,La as u,M as r,Nc as E,Pc as g,Rc as b,Xa as e,ha as s,ia as d,oa as p,pa as m,ya as c}from"./chunk-MIQUIDUB.js";var D=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=p({type:n,selectors:[["sample-po-table-cell-template-doc"]],standalone:!1,decls:66,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""]],template:function(a,l){a&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoTableModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-table"),t()(),o(7,"h3",3),e(8,"Componente"),t(),o(9,"h4",4)(10,"code",5),e(11,"PoTableCellTemplateDirective"),t()(),o(12,"div",2)(13,"p"),e(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),o(15,"p"),e(16,"Em seu uso, deve-se apenas adicionar a diretiva "),o(17,"strong"),e(18,"p-table-cell-template"),t(),e(19," \xE0 tag "),o(20,"code"),e(21,"ng-template"),t(),e(22,"."),t(),o(23,"p"),e(24,"Retorno:"),t(),o(25,"ul")(26,"li")(27,"code"),e(28,"column"),t(),e(29,": conte\xFAdo da coluna corrente."),t(),o(30,"li")(31,"code"),e(32,"row"),t(),e(33,": conte\xFAdo da linha corrente"),t()(),o(34,"p"),e(35,"Modo de uso:"),t(),o(36,"pre")(37,"code"),e(38,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-cell-template let-column="column" let-row="row">
     <div *ngIf="column.property === 'status' && row.status === 'CANCELED'">
       <h1 [style.background]="'red'">CANCELADA</h1>
       <span (click)="onClick()"><small>clique aqui</small></span>
     </div>
     <h1 *ngIf="column.property === 'status' && row.status === 'FINISHED'" [style.background]="'green'">FINALIZADA</h1>
     <h1 *ngIf="column.property === 'status' && row.status === 'OPENED'" [style.background]="'orange'">ABERTA</h1>
     <h1 *ngIf="column.property === 'status2'">Conte\xFAdo do status 2</h1>
     <h1 *ngIf="column.property === 'status3'">Conte\xFAdo do status 3</h1>
   </ng-template>
...
`),t()(),o(39,"blockquote")(40,"p"),e(41,"No exemplo acima, o usu\xE1rio tem como retorno "),o(42,"code"),e(43,"row"),t(),e(44," e a "),o(45,"code"),e(46,"column"),t(),e(47," corrente, neste caso ele tem total liberdade para manipular os objetos."),t()(),o(48,"p"),e(49,"Abaixo, a declara\xE7\xE3o dos dados de entrada do PO-TABLE para o uso da directiva."),t(),o(50,"pre")(51,"code"),e(52,`...
export class AppComponent {

   items = [{
     code: 1200,
     product: 'Rice',
     status: 'CANCELED',
     status2: '',
     status3: ''
     },{
     code: 1355,
     product: 'Bean',
     status: 'FINISHED',
     status2: '',
     status3: ''
     }];

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...
`),t()(),o(53,"blockquote")(54,"p"),e(55,"Observa\xE7\xE3o: Sempre adicionar o "),o(56,"strong"),e(57,"type"),t(),e(58," da coluna que deseja manipular com a directiva como "),o(59,"code"),e(60,"cellTemplate"),t()()()(),o(61,"div",6)(62,"h4",7),e(63,"Seletor"),t(),o(64,"pre",8),e(65,`<[p-table-cell-template] >
</[p-table-cell-template]>
`),t()()())},dependencies:[S],encapsulation:2})}return n})();var y=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:"merge"}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||n)(d(E),d(g))};static \u0275cmp=p({type:n,selectors:[["ng-component"]],standalone:!1,decls:5,vars:4,consts:[["p-title","Table Cell Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return l.changeTab("doc")}),f(3,"sample-po-table-cell-template-doc"),t(),o(4,"po-tab",3),u("p-click",function(){return l.changeTab("web")}),t()()()),a&2&&(c("p-actions",l.actions),s(2),c("p-active",l.activeTab==="doc"),s(2),c("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[h,v,C,D],encapsulation:2})}return n})();var I=[{path:"",component:y}],P=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=m({type:n});static \u0275inj=r({imports:[b.forChild(I),b]})}return n})();var W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=m({type:n});static \u0275inj=r({imports:[x,P]})}return n})();export{W as DocPoTableCellTemplateModule};
