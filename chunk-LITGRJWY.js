import{o as h,p as B}from"./chunk-R3BKLGLC.js";import{Ab as f,cb as P,nb as D,zb as v}from"./chunk-TUTTJOS2.js";import{Ba as x,Ea as e,Fa as t,Ga as r,La as p,M as u,Nc as A,Pc as R,Rc as S,Xa as i,Za as y,eb as w,ha as s,ia as b,oa as d,pa as E,ub as C,ya as m}from"./chunk-MIQUIDUB.js";var G=(()=>{class n{rowActions={beforeSave:this.onBeforeSave.bind(this),afterSave:this.onAfterSave.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),beforeInsert:this.onBeforeInsert.bind(this)};columns=[{property:"id",label:"C\xF3digo",align:"right",readonly:!0,freeze:!0,width:120},{property:"name",label:"Nome",width:"200px",required:!0},{property:"occupation",label:"Cargo",width:150},{property:"email",label:"E-mail",width:100,required:!0},{property:"status",label:"Status",align:"center",width:80},{property:"lastActivity",label:"\xDAltima atividade",align:"center",width:140}];data=[{id:629131,name:"Jhonatas Silvano",occupation:"Developer",email:"jhonatas.silvano@po-ui.com.br",status:"Active",lastActivity:"2018-12-12"},{id:78492341,name:"Rafael Gon\xE7alvez",occupation:"Engineer",email:"rafael.goncalvez@po-ui.com.br",status:"Active",lastActivity:"2018-12-10"},{id:986434,name:"Nicoli Pereira",occupation:"Developer",email:"nicoli.pereira@po-ui.com.br",status:"Active",lastActivity:"2018-12-12"},{id:4235652,name:"Mauricio Jo\xE3o Mendez",occupation:"Developer",email:"mauricio.joao@po-ui.com.br",status:"Active",lastActivity:"2018-11-23"},{id:629131,name:"Leandro Oliveira",occupation:"Engineer",email:"leandro.oliveira@po-ui.com.br",status:"Active",lastActivity:"2018-11-30"}];onBeforeSave(a,o){return a.occupation!=="Engineer"}onAfterSave(a){}onBeforeRemove(a){return!0}onAfterRemove(a){}onBeforeInsert(a){return!0}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-grid-basic"]],standalone:!1,decls:1,vars:3,consts:[[3,"p-row-actions","p-data","p-columns"]],template:function(o,l){o&1&&r(0,"po-grid",0),o&2&&m("p-row-actions",l.rowActions)("p-data",l.data)("p-columns",l.columns)},dependencies:[P],encapsulation:2})}return n})();var _=n=>({"docs-sample-code-tabs":n}),M=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-grid-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(r(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Grid Basic"),t(),e(4,"a",2),p("click",function(){return l.toggleSampleCodeTabs()}),r(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-grid-basic/sample-po-grid-basic.component.html"),t(),e(13,"pre",7),i(14,`<po-grid [p-row-actions]="rowActions" [p-data]="data" [p-columns]="columns"> </po-grid>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-grid-basic/sample-po-grid-basic.component.ts"),t(),e(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-grid-basic',
  templateUrl: './sample-po-grid-basic.component.html',
  standalone: false
})
export class SamplePoGridBasicComponent {
  rowActions = {
    beforeSave: this.onBeforeSave.bind(this),
    afterSave: this.onAfterSave.bind(this),
    beforeRemove: this.onBeforeRemove.bind(this),
    afterRemove: this.onAfterRemove.bind(this),
    beforeInsert: this.onBeforeInsert.bind(this)
  };

  columns = [
    { property: 'id', label: 'C\xF3digo', align: 'right', readonly: true, freeze: true, width: 120 },
    { property: 'name', label: 'Nome', width: '200px', required: true },
    { property: 'occupation', label: 'Cargo', width: 150 },
    { property: 'email', label: 'E-mail', width: 100, required: true },
    { property: 'status', label: 'Status', align: 'center', width: 80 },
    { property: 'lastActivity', label: '\xDAltima atividade', align: 'center', width: 140 }
  ];

  data = [
    {
      id: 629131,
      name: 'Jhonatas Silvano',
      occupation: 'Developer',
      email: 'jhonatas.silvano@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-12-12'
    },
    {
      id: 78492341,
      name: 'Rafael Gon\xE7alvez',
      occupation: 'Engineer',
      email: 'rafael.goncalvez@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-12-10'
    },
    {
      id: 986434,
      name: 'Nicoli Pereira',
      occupation: 'Developer',
      email: 'nicoli.pereira@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-12-12'
    },
    {
      id: 4235652,
      name: 'Mauricio Jo\xE3o Mendez',
      occupation: 'Developer',
      email: 'mauricio.joao@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-11-23'
    },
    {
      id: 629131,
      name: 'Leandro Oliveira',
      occupation: 'Engineer',
      email: 'leandro.oliveira@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-11-30'
    }
  ];

  onBeforeSave(row: any, old: any) {
    return row.occupation !== 'Engineer';
  }

  onAfterSave(row) {
    // console.log('onAfterSave(new): ', row);
  }

  onBeforeRemove(row) {
    // console.log('onBeforeRemove: ', row);

    return true;
  }

  onAfterRemove(row) {
    // console.log('onAfterRemove: ', row);
  }

  onBeforeInsert(row) {
    // console.log('onBeforeInsert: ', row);

    return true;
  }
}
`),t()()()()(),e(21,"div",10),r(22,"sample-po-grid-basic"),t(),r(23,"hr")),o&2&&(s(5),x("po-icon "+l.sampleCodeButtonIcon),s(),y(" ",l.sampleCodeButtonLabel,""),s(),m("ngClass",w(4,_,l.hideSampleCodeTabs)))},dependencies:[C,h,v,f,G],encapsulation:2})}return n})();var I=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-grid-doc"]],standalone:!1,decls:217,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoGridRowActions"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","()","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","(updatedRow:","any,","originalRow:","any)","=>","boolean"]],template:function(o,l){o&1&&(e(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoGridModule } from '@po-ui/ng-components';"),t()(),e(4,"div",2)(5,"p"),i(6,"M\xF3dulo do componente po-grid."),t()(),e(7,"h3",3),i(8,"Componente"),t(),e(9,"h4",4)(10,"code",5),i(11,"PoGridComponent"),t()(),e(12,"div",2)(13,"blockquote")(14,"p"),i(15,"Componente em desenvolvimento, podendo haver BREAKING CHANGES nas pr\xF3ximas vers\xF5es."),t()(),e(16,"p"),i(17,"Componente grid."),t(),e(18,"p"),i(19,"A\xE7\xF5es / atalhos:"),t(),e(20,"ul")(21,"li"),i(22,"ARROW-UP: Navega para celula superior / Na ultima linha adiciona uma linha em branco no grid;"),t(),e(23,"li"),i(24,"ARROW-DOWN: Navega para celula inferior;"),t(),e(25,"li"),i(26,"ARROW-RIGHT: Navega para celula direita;"),t(),e(27,"li"),i(28,"ARROW-LEFT: Navega para celula esquerda;"),t(),e(29,"li"),i(30,"TAB: Navega para pr\xF3xima celula;"),t(),e(31,"li"),i(32,"SHIFT+TAB: Navega para celula anterior;"),t(),e(33,"li"),i(34,"CTRL+DEL: Remove linha;"),t(),e(35,"li"),i(36,"DEL/BACKSPACE: Limpa celula;"),t(),e(37,"li"),i(38,"ENTER: Edita linha com valor atual/Confirma edi\xE7\xE3o da celula;"),t(),e(39,"li"),i(40,"DOUBLE-CLICK: Edita linha com valor atual;"),t(),e(41,"li"),i(42,"ESC: Cancela edi\xE7\xE3o da celula / Cancela inser\xE7\xE3o de linhas em branco;"),t(),e(43,"li"),i(44,"A..Z/0..9: Inicia edi\xE7\xE3o com valor em branco."),t()()(),e(45,"div",6)(46,"h4",7),i(47,"Seletor"),t(),e(48,"pre",8),i(49,`<po-grid
    p-columns="Array<any>"
    p-data="Array<any>"
    p-row-actions="PoGridRowActions" >
</po-grid>
`),t()(),e(50,"h4",9),i(51,"Propriedades"),t(),e(52,"table",10)(53,"tr",11)(54,"th",12),i(55,"Nome"),t(),e(56,"th",12),i(57,"Tipo"),t(),e(58,"th",12),i(59,"Padr\xE3o"),t(),e(60,"th",12),i(61,"Descri\xE7\xE3o"),t()(),e(62,"tr",13)(63,"td",14)(64,"div",15)(65,"span",16),i(66," p-columns"),r(67,"br"),t()()(),e(68,"td",17)(69,"code",18),i(70,"Array<any>"),t()(),e(71,"td",19),i(72,"-"),t(),e(73,"td",20)(74,"p"),i(75,"Colunas exibidas no grid."),t()()(),e(76,"tr",13)(77,"td",14)(78,"div",15)(79,"span",16),i(80," p-data"),r(81,"br"),t()()(),e(82,"td",17)(83,"code",18),i(84,"Array<any>"),t()(),e(85,"td",19),i(86,"-"),t(),e(87,"td",20)(88,"p"),i(89,"Lista com os dados que ser\xE3o exibidos no grid."),t()()(),e(90,"tr",13)(91,"td",14)(92,"div",15)(93,"span",16),i(94," p-row-actions"),r(95,"br"),t()()(),e(96,"td",17)(97,"code",21),i(98,"PoGridRowActions"),t()(),e(99,"td",19),i(100,"-"),t(),e(101,"td",20)(102,"p"),i(103,"A\xE7\xF5es disparadas quando uma linha do grid \xE9 manipulada."),t()()()(),e(104,"h3"),i(105,"Interfaces"),t(),e(106,"h4",22)(107,"code",5),i(108,"PoGridRowActions"),t()(),e(109,"div",2)(110,"p"),i(111,"A\xE7\xF5es executadas durante a manipula\xE7\xE3o das linhas do grid."),t()(),e(112,"h4",9),i(113,"Propriedades"),t(),e(114,"table",10)(115,"tr",11)(116,"th",12),i(117,"Nome"),t(),e(118,"th",12),i(119,"Tipo"),t(),e(120,"th",12),i(121,"Descri\xE7\xE3o"),t()(),e(122,"tr",13)(123,"td",14)(124,"div",15)(125,"span",16),i(126," afterRemove"),r(127,"br"),t()()(),e(128,"td",17)(129,"code",23),i(130,"() => void"),t()(),e(131,"td",20)(132,"em")(133,"strong"),i(134,"(opcional)"),t()(),e(135,"p"),i(136,"M\xE9todo executado ap\xF3s uma linha do grid ser removida."),t()()(),e(137,"tr",13)(138,"td",14)(139,"div",15)(140,"span",16),i(141," afterSave"),r(142,"br"),t()()(),e(143,"td",17)(144,"code",24),i(145,"(row: any) => void"),t()(),e(146,"td",20)(147,"em")(148,"strong"),i(149,"(opcional)"),t()(),e(150,"p"),i(151,"M\xE9todo executado ap\xF3s uma linha do grid ser salva, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados."),t()()(),e(152,"tr",13)(153,"td",14)(154,"div",15)(155,"span",16),i(156," beforeInsert"),r(157,"br"),t()()(),e(158,"td",17)(159,"code",25),i(160,"(row: any) => boolean"),t()(),e(161,"td",20)(162,"em")(163,"strong"),i(164,"(opcional)"),t()(),e(165,"p"),i(166,"M\xE9todo executado antes de uma nova linha ser inserida no grid, se o m\xE9todo retornar algo diferente de "),e(167,"code"),i(168,"true"),t(),i(169,` a a\xE7\xE3o
ser\xE1 cancelada e a linha n\xE3o ser\xE1 inserida.`),t(),e(170,"p"),i(171,`Ao ser executado o m\xE9todo ir\xE1 receber a refer\xEAncia do objeto que ser\xE1 inserido, dessa forma \xE9 poss\xEDvel informar valores
para esse objeto.`),t(),e(172,"pre")(173,"code"),i(174,`rowActions: PoGridRowActions = {
  beforeInsert: this.onBeforeInsert.bind(this);
  ...
};

// Inicia a linha j\xE1 com as propriedades \`name\` e \`created\` preenchidas.
onBeforeInsert(row: any) {
  row.name = 'Fulano';
  row.created = '2018-20-12';
  ...

  return true;
}
`),t()()()(),e(175,"tr",13)(176,"td",14)(177,"div",15)(178,"span",16),i(179," beforeRemove"),r(180,"br"),t()()(),e(181,"td",17)(182,"code",25),i(183,"(row: any) => boolean"),t()(),e(184,"td",20)(185,"em")(186,"strong"),i(187,"(opcional)"),t()(),e(188,"p"),i(189,`M\xE9todo executado antes de uma linha ser removida do grid, ao ser executado, o m\xE9todo ir\xE1 receber uma c\xF3pia do objeto
com os dados da linha que ser\xE1 removida, se o m\xE9todo retornar algo diferente de `),e(190,"code"),i(191,"true"),t(),i(192,` a a\xE7\xE3o ser\xE1 cancelada e a linha
n\xE3o ser\xE1 removida.`),t()()(),e(193,"tr",13)(194,"td",14)(195,"div",15)(196,"span",16),i(197," beforeSave"),r(198,"br"),t()()(),e(199,"td",17)(200,"code",26),i(201,"(updatedRow: any, originalRow: any) => boolean"),t()(),e(202,"td",20)(203,"em")(204,"strong"),i(205,"(opcional)"),t()(),e(206,"p"),i(207,`M\xE9todo executado antes de uma linha ser atualizada, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados
e um objeto com uma c\xF3pia dos dados originais, se o m\xE9todo retornar algo diferente de `),e(208,"code"),i(209,"true"),t(),i(210,` a a\xE7\xE3o ser\xE1 cancelada e
a linha n\xE3o ser\xE1 atualizada permanecendo em edi\xE7\xE3o / inser\xE7\xE3o.`),t(),e(211,"blockquote")(212,"p"),i(213,`Caso n\xE3o seja permitido a atualiza\xE7\xE3o da linha, a sugest\xE3o \xE9 que seja apresentada uma mensagem ao usu\xE1rio informando
o motivo.`),t()(),e(214,"pre")(215,"code"),i(216,`rowActions: PoGridRowActions = {
  beforeSave: this.onBeforeSave.bind(this);
  ...
};

onBeforeSave(updatedRow: any, originalRow: any) {
  // Verifica se a propriedade \`name\` foi alterada.
  if (updatedRow.name !== originalRow.name) {
    return false;
  }

  // Verifica se \xE9 menor de idade
  if (updatedRow.age < 18) {
    return false;
  }
  ...

  updatedRow.updated = '2018-20-12';

  return true;
}
`),t()()()()()())},dependencies:[h],encapsulation:2})}return n})();var F=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||n)(b(A),b(R))};static \u0275cmp=d({type:n,selectors:[["ng-component"]],standalone:!1,decls:6,vars:4,consts:[["p-title","Grid",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),p("p-click",function(){return l.changeTab("doc")}),r(3,"sample-po-grid-doc"),t(),e(4,"po-tab",3),p("p-click",function(){return l.changeTab("web")}),r(5,"sample-po-grid-basic-view"),t()()()),o&2&&(m("p-actions",l.actions),s(2),m("p-active",l.activeTab==="doc"),s(2),m("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[D,v,f,M,I],encapsulation:2})}return n})();var z=[{path:"",component:F}],N=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=E({type:n});static \u0275inj=u({imports:[S.forChild(z),S]})}return n})();var oe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=E({type:n});static \u0275inj=u({imports:[B,N]})}return n})();export{oe as DocPoGridModule};
