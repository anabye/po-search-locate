import{o as h,p as C}from"./chunk-JYNCG2Y6.js";import{Ab as S,nb as b,zb as w}from"./chunk-HBOGTDFH.js";import{Ea as t,Fa as i,Ga as d,La as E,M as p,Nc as x,Pc as g,Rc as v,Xa as e,ha as c,ia as u,oa as m,pa as l,ya as s}from"./chunk-MIQUIDUB.js";var D=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=m({type:o,selectors:[["sample-po-list-view-content-template-doc"]],standalone:!1,decls:115,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(item)","=>","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoListViewModule } from '@po-ui/ng-components';"),i()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente "),t(7,"code"),e(8,"po-list-view"),i(),e(9,"."),i(),t(10,"blockquote")(11,"p"),e(12,"Para o correto funcionamento do componente "),t(13,"code"),e(14,"po-list-view"),i(),e(15,", deve ser importado o m\xF3dulo "),t(16,"code"),e(17,"BrowserAnimationsModule"),i(),e(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),i()(),t(19,"p"),e(20,"M\xF3dulo da aplica\xE7\xE3o:"),i(),t(21,"pre")(22,"code"),e(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
`),i()(),t(24,"p"),e(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),i(),t(26,"pre")(27,"code"),e(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),i()()(),t(29,"h3",3),e(30,"Componente"),i(),t(31,"h4",4)(32,"code",5),e(33,"PoListViewContentTemplateDirective"),i()(),t(34,"div",2)(35,"p"),e(36,"Esta diretiva permite que sejam apresentadas informa\xE7\xF5es essenciais de cada item."),i(),t(37,"p"),e(38,"Deve-se utilizar como par\xE2metro a refer\xEAncia do item e/ou \xEDndice, sendo por padr\xE3o o item."),i(),t(39,"ul")(40,"li"),e(41,"Item: "),t(42,"code"),e(43,"item"),i(),e(44," determina o item da linha corrente."),i(),t(45,"li"),e(46,"\xCDndice: "),t(47,"code"),e(48,"index"),i(),e(49," determina o \xEDndice da linha corrente."),i()(),t(50,"p"),e(51,"Esta diretiva pode ser usada de duas formas: expl\xEDcita ou "),t(52,"em"),e(53,"syntax sugar"),i(),e(54,". Veja a seguir ambos, respectivamente:"),i(),t(55,"pre")(56,"code"),e(57,`...
<po-list-view
  p-property-title="name"
  [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

  <ng-template p-list-view-content-template let-item let-code="index">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Code" [p-value]="code"></po-info>
      <po-info class="po-md-6" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>

</po-list-view>

...
`),i()(),t(58,"pre")(59,"code"),e(60,`...
<po-list-view
   p-property-title="name"
   [p-items]="[{id: 1, name: "Register", email: register@po-ui.com}]">

   <div *p-list-view-content-template="let item, let i=index" class="po-row">
     <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
   </div>
</po-list-view>
...
`),i()(),t(61,"p"),e(62,"A diretiva "),t(63,"strong"),e(64,"p-list-view-content-template"),i(),e(65,`, possibilita tamb\xE9m alterar o t\xEDtulo dos itens. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz a altera\xE7\xE3o, \xE0 propriedade `),t(66,"code"),e(67,"p-title"),i(),e(68,`,
a mesma deve retornar um valor do tipo `),t(69,"em"),e(70,"string"),i(),e(71,". Veja o exemplo a seguir:"),i(),t(72,"pre")(73,"code"),e(74,`...
@Component({
   selector: 'app-root',
   template: \`
     ...
     <po-list-view
       [p-items]="items">
       <ng-template p-list-view-content-template let-item [p-title]="customTitle">
         <div class="po-row">
           <po-info class="po-md-12" p-label="Customer" [p-value]="item.customer"></po-info>
         </div>
       </ng-template>
     ...
   \`
})
export class AppComponent {
   public items = [{
     code: 1200,
     product: 'Rice',
     customer: 'Supermarket 1',
   }, {
     code: 1355,
     product: 'Bean',
     customer: 'Supermarket 2'
   }];

   customTitle(item) {
     return \`\${item.code} - \${item.product}\`;
   }
}
`),i()()(),t(75,"div",6)(76,"h4",7),e(77,"Seletor"),i(),t(78,"pre",8),e(79,`<[p-list-view-content-template]
    p-title="(item) => string" >
</[p-list-view-content-template]>
`),i()(),t(80,"h4",9),e(81,"Propriedades"),i(),t(82,"table",10)(83,"tr",11)(84,"th",12),e(85,"Nome"),i(),t(86,"th",12),e(87,"Tipo"),i(),t(88,"th",12),e(89,"Padr\xE3o"),i(),t(90,"th",12),e(91,"Descri\xE7\xE3o"),i()(),t(92,"tr",13)(93,"td",14)(94,"div",15)(95,"span",16),e(96," p-title"),d(97,"br"),i()()(),t(98,"td",17)(99,"code",18),e(100,"(item) => string"),i()(),t(101,"td",19),e(102,"-"),i(),t(103,"td",20)(104,"em")(105,"strong"),e(106,"(opcional)"),i()(),t(107,"p"),e(108,"Fun\xE7\xE3o que deve retornar um valor do tipo "),t(109,"code"),e(110,"string"),i(),e(111,", que ser\xE1 utilizado como o t\xEDtulo de cada item da lista."),i(),t(112,"blockquote")(113,"p"),e(114,"Por par\xE2metro ser\xE1 enviado o item corrente, onde poder\xE1 utiliz\xE1-lo para recuperar dados sobre o mesmo."),i()()()()()())},dependencies:[h],encapsulation:2})}return o})();var P=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(n){return new(n||o)(u(x),u(g))};static \u0275cmp=m({type:o,selectors:[["ng-component"]],standalone:!1,decls:5,vars:4,consts:[["p-title","List View Content Template",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,r){n&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return r.changeTab("doc")}),d(3,"sample-po-list-view-content-template-doc"),i(),t(4,"po-tab",3),E("p-click",function(){return r.changeTab("web")}),i()()()),n&2&&(s("p-actions",r.actions),c(2),s("p-active",r.activeTab==="doc"),c(2),s("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"))},dependencies:[b,w,S,D],encapsulation:2})}return o})();var L=[{path:"",component:P}],T=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=l({type:o});static \u0275inj=p({imports:[v.forChild(L),v]})}return o})();var W=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=l({type:o});static \u0275inj=p({imports:[C,T]})}return o})();export{W as DocPoListViewContentTemplateModule};
