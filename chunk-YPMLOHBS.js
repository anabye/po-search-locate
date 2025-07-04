import{j as M,k as L,l as C,o as h,p as H}from"./chunk-R3BKLGLC.js";import{$a as A,Aa as I,Ab as S,Db as O,Za as B,nb as z,zb as b}from"./chunk-TUTTJOS2.js";import{Ba as v,Ea as n,Fa as t,Ga as a,Ka as k,La as p,M as x,Ma as E,Nc as q,Pc as V,Rc as j,T as D,U as T,Xa as e,Za as f,eb as P,ha as d,ia as J,oa as s,pa as g,ua as w,ub as y,ya as m}from"./chunk-MIQUIDUB.js";var R=(()=>{class i{breadcrumb={items:[{label:"Home",link:"/"},{label:"Pipelines",link:"/"},{label:"Background Process Scheduler"}]};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-page-job-scheduler-background-process"]],standalone:!1,decls:1,vars:1,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-title","Background Process Scheduler",3,"p-breadcrumb"]],template:function(o,l){o&1&&a(0,"po-page-job-scheduler",0),o&2&&m("p-breadcrumb",l.breadcrumb)},dependencies:[C],encapsulation:2})}return i})();var ee=i=>({"docs-sample-code-tabs":i}),N=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-page-job-scheduler-background-process-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Job Scheduler - Background Process"),t(),n(4,"a",2),p("click",function(){return l.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html"),t(),n(13,"pre",7),e(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-background-process',
  templateUrl: './sample-po-page-job-scheduler-background-process.component.html',
  standalone: false
})
export class SamplePoPageJobSchedulerBackgroundProcessComponent {
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Background Process Scheduler' }]
  };
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-page-job-scheduler-background-process"),t(),a(23,"hr")),o&2&&(d(5),v("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),m("ngClass",P(4,ee,l.hideSampleCodeTabs)))},dependencies:[y,h,b,S,R],encapsulation:2})}return i})();function ne(i,F){if(i&1){let r=k();n(0,"h1"),e(1,"Etapa 1"),t(),n(2,"po-dynamic-form",4),p("p-form",function(l){D(r);let c=E();return T(c.getFormExample(l))}),t()}if(i&2){let r=E();d(2),m("p-fields",r.parametersForm)}}function ie(i,F){if(i&1){let r=k();n(0,"po-table",5),p("p-selected",function(l){D(r);let c=E();return T(c.selectedItem(l))}),t()}if(i&2){let r=E();m("p-items",r.items)("p-selectable",!0)}}function oe(i,F){if(i&1&&(n(0,"po-widget",6),a(1,"po-dynamic-view",7),t()),i&2){let r=E();d(),m("p-fields",r.fieldsSummary)("p-value",r.valueSummary)}}var W=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:"version",label:"Vers\xE3o",required:!0,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:"version",label:"Vers\xE3o",gridColumns:6,gridSmColumns:12},{property:"selectedValue",label:"Valor selecionado na tabela",isArrayOrObject:!0,fieldLabel:"customer",gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:"Angeloni",driver:"Jos\xE9 Oliveira"},{code:1355,customer:"Giassi",driver:"Francisco Pereira"},{code:1496,customer:"Walmart",driver:"Pedro da Costa"},{code:1712,customer:"Carrefour",driver:"Jo\xE3o da Silva"}];getFormExample(r){this.dynamicForm=r}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version}}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-page-job-scheduler-directives"]],standalone:!1,decls:4,vars:5,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-orientation","horizontal",3,"p-step-execution-last"],["p-job-scheduler-parameters-template","","p-title","1",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-parameters-template","",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-summary-template",""],[3,"p-form","p-fields"],[3,"p-selected","p-items","p-selectable"],["p-title","Par\xE2metros"],[3,"p-fields","p-value"]],template:function(o,l){o&1&&(n(0,"po-page-job-scheduler",0),w(1,ne,3,1,"ng-template",1)(2,ie,1,2,"ng-template",2)(3,oe,2,2,"ng-template",3),t()),o&2&&(m("p-step-execution-last",!0),d(),m("p-disable-advance",l.dynamicForm==null?null:l.dynamicForm.form.invalid)("p-execution-parameter",l.dynamicForm==null?null:l.dynamicForm.form.value),d(),m("p-disable-advance",!l.selectedValue.select.length)("p-execution-parameter",l.selectedValue))},dependencies:[B,A,I,O,C,M,L],encapsulation:2})}return i})();var re=i=>({"docs-sample-code-tabs":i}),U=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-page-job-scheduler-directives-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Job Scheduler - Directives"),t(),n(4,"a",2),p("click",function(){return l.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html"),t(),n(13,"pre",7),e(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-orientation="horizontal"
  [p-step-execution-last]="true"
>
  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="dynamicForm?.form.invalid"
    [p-execution-parameter]="dynamicForm?.form.value"
    p-title="1"
  >
    <h1>Etapa 1</h1>
    <po-dynamic-form [p-fields]="parametersForm" (p-form)="getFormExample($event)"> </po-dynamic-form>
  </ng-template>

  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="!selectedValue.select.length"
    [p-execution-parameter]="selectedValue"
  >
    <po-table [p-items]="items" [p-selectable]="true" (p-selected)="selectedItem($event)"></po-table>
  </ng-template>
  <ng-template p-job-scheduler-summary-template>
    <po-widget p-title="Par\xE2metros">
      <po-dynamic-view [p-fields]="fieldsSummary" [p-value]="valueSummary"> </po-dynamic-view>
    </po-widget>
  </ng-template>
</po-page-job-scheduler>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoDynamicFormField, PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-directives',
  templateUrl: './sample-po-page-job-scheduler-directives.component.html',
  standalone: false
})
export class SamplePoPageJobSchedulerDirectivesComponent {
  dynamicForm!: NgForm;
  selectedValue = { select: [] };
  valueSummary;

  parametersForm: Array<PoDynamicFormField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      required: true,
      gridLgColumns: 12,
      gridXlColumns: 12
    }
  ];

  fieldsSummary: Array<PoDynamicViewField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      gridColumns: 6,
      gridSmColumns: 12
    },
    {
      property: 'selectedValue',
      label: 'Valor selecionado na tabela',
      isArrayOrObject: true,
      fieldLabel: 'customer',
      gridColumns: 6,
      gridSmColumns: 12
    }
  ];

  items: Array<any> = [
    {
      code: 1200,
      customer: 'Angeloni',
      driver: 'Jos\xE9 Oliveira'
    },
    {
      code: 1355,
      customer: 'Giassi',
      driver: 'Francisco Pereira'
    },
    {
      code: 1496,
      customer: 'Walmart',
      driver: 'Pedro da Costa'
    },
    {
      code: 1712,
      customer: 'Carrefour',
      driver: 'Jo\xE3o da Silva'
    }
  ];

  getFormExample(form: NgForm) {
    this.dynamicForm = form;
  }

  selectedItem(value: any) {
    this.selectedValue.select.push(value);

    this.valueSummary = {
      selectedValue: this.selectedValue.select,
      version: this.dynamicForm.form.value.version
    };
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-page-job-scheduler-directives"),t(),a(23,"hr")),o&2&&(d(5),v("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),m("ngClass",P(4,re,l.hideSampleCodeTabs)))},dependencies:[y,h,b,S,W],encapsulation:2})}return i})();var X=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-page-job-scheduler-doc"]],standalone:!1,decls:548,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","(model:","PoJobSchedulerInternal)","=>","PoJobSchedulerInternal"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],["href","/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","day:","number;","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","{","daysOfWeek:","Array<string>;","hour:","number;","minute:","number;","}"]],template:function(o,l){o&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';"),t()(),a(4,"div",2),n(5,"h3",3),e(6,"Componente"),t(),n(7,"h4",4)(8,"code",5),e(9,"PoPageJobSchedulerComponent"),t()(),n(10,"div",2)(11,"p"),e(12,"O "),n(13,"code"),e(14,"po-page-job-scheduler"),t(),e(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),t(),n(16,"p"),e(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),t(),n(18,"p"),e(19,"Veja mais sobre os padr\xF5es utilizados nas requisi\xE7\xF5es no "),n(20,"a",6),e(21,"Guia de implementa\xE7\xE3o de APIs"),t(),e(22,". "),t()(),n(23,"div",7)(24,"h4",8),e(25,"Seletor"),t(),n(26,"pre",9),e(27,`<po-page-job-scheduler
    p-before-send="(model: PoJobSchedulerInternal) => PoJobSchedulerInternal"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-error)="EventEmitter"
    p-parameters="Array<PoDynamicFormField>"
    p-service-api="string"
    p-step-execution-last="boolean"
    p-orientation="PoStepperOrientation"
    (p-success)="EventEmitter"
    p-title="string" >
</po-page-job-scheduler>
`),t()(),n(28,"h4",10),e(29,"Propriedades"),t(),n(30,"table",11)(31,"tr",12)(32,"th",13),e(33,"Nome"),t(),n(34,"th",13),e(35,"Tipo"),t(),n(36,"th",13),e(37,"Padr\xE3o"),t(),n(38,"th",13),e(39,"Descri\xE7\xE3o"),t()(),n(40,"tr",14)(41,"td",15)(42,"div",16)(43,"span",17),e(44," p-before-send"),a(45,"br"),t()()(),n(46,"td",18)(47,"code",19),e(48,"(model: PoJobSchedulerInternal) => PoJobSchedulerInternal"),t()(),n(49,"td",20),e(50,"-"),t(),n(51,"td",21)(52,"em")(53,"strong"),e(54,"(opcional)"),t()(),n(55,"p"),e(56,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),t(),n(57,"blockquote")(58,"p"),e(59,"Deve retornar um objeto do tipo "),n(60,"code"),e(61,"PoPageJobScheduler"),t(),e(62," para ser adicionado ao model do PoPageJobScheduler."),t()(),n(63,"blockquote")(64,"p"),e(65,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o model do PoPageJobScheduler de interface "),n(66,"code"),e(67,"PoJobSchedulerInternal"),t(),e(68,"."),t()(),n(69,"p"),e(70,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),n(71,"code"),e(72,"PoPageJobScheduler"),t(),e(73,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),n(74,"code"),e(75,"bind"),t(),e(76,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),n(77,"code"),e(78,"beforeSend"),t(),e(79,":"),t(),n(80,"pre")(81,"code"),e(82,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),t()()()(),n(83,"tr",14)(84,"td",15)(85,"div",16)(86,"span",17),e(87," p-breadcrumb"),a(88,"br"),t()()(),n(89,"td",18)(90,"code",22),e(91,"PoBreadcrumb"),t()(),n(92,"td",20),e(93,"-"),t(),n(94,"td",21)(95,"em")(96,"strong"),e(97,"(opcional)"),t()(),n(98,"p"),e(99,"Objeto com as propriedades do breadcrumb."),t()()(),n(100,"tr",14)(101,"td",15)(102,"div",16)(103,"span",17),e(104," p-components-size"),a(105,"br"),t()()(),n(106,"td",18)(107,"code",23),e(108,"string"),t()(),n(109,"td",20)(110,"p")(111,"code"),e(112,"medium"),t()()(),n(113,"td",21)(114,"em")(115,"strong"),e(116,"(opcional)"),t()(),n(117,"p"),e(118,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),n(119,"ul")(120,"li")(121,"code"),e(122,"small"),t(),e(123,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(124,"li")(125,"code"),e(126,"medium"),t(),e(127,": aplica a medida medium de cada componente."),t()(),n(128,"blockquote")(129,"p"),e(130,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(131,"code"),e(132,"medium"),t(),e(133,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(134,"a",24),e(135,"po-theme"),t(),e(136,"."),t()()()(),n(137,"tr",14)(138,"td",15)(139,"div",25)(140,"span",26),e(141," (p-error)"),a(142,"br"),t()()(),n(143,"td",18)(144,"code",27),e(145,"EventEmitter"),t()(),n(146,"td",20),e(147,"-"),t(),n(148,"td",21)(149,"em")(150,"strong"),e(151,"(opcional)"),t()(),n(152,"p"),e(153,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),t()()(),n(154,"tr",14)(155,"td",15)(156,"div",16)(157,"span",17),e(158," p-parameters"),a(159,"br"),t()()(),n(160,"td",18)(161,"code",28),e(162,"Array<PoDynamicFormField>"),t()(),n(163,"td",20),e(164,"-"),t(),n(165,"td",21)(166,"p"),e(167,"Par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),t(),n(168,"p"),e(169,"Ao utilizar esta propriedade, o componente n\xE3o buscar\xE1 automaticamente os par\xE2metros da API e o campo para preenchimento do processo n\xE3o ser\xE1 exibido."),t()()(),n(170,"tr",14)(171,"td",15)(172,"div",16)(173,"span",17),e(174," p-service-api"),a(175,"br"),t()()(),n(176,"td",18)(177,"code",23),e(178,"string"),t()(),n(179,"td",20),e(180,"-"),t(),n(181,"td",21)(182,"p"),e(183,"Endpoint usado pelo componente para busca dos processos e par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),t(),n(184,"h4"),e(185,"Processos"),t(),n(186,"p"),e(187,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),n(188,"code"),e(189,"GET"),t(),e(190," para o endpoint "),n(191,"code"),e(192,"{service-api}/processes"),t(),e(193,`, para buscar
essa lista de processos.`),t(),n(194,"p"),e(195,"Este endpoint "),n(196,"code"),e(197,"{service-api}/processes"),t(),e(198," deve retornar uma lista de objetos que seguem a defini\xE7\xE3o de dados abaixo:"),t(),n(199,"pre")(200,"code"),e(201,`GET {service-api}/processes
`),t()(),n(202,"pre")(203,"code"),e(204,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),t()(),n(205,"p"),e(206,"Desta forma ser\xE1 renderizado um componente para selecionar o processo e/ou filtr\xE1-los."),t(),n(207,"p"),e(208,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),n(209,"code"),e(210,"search"),t(),e(211,". Da seguinte forma:"),t(),n(212,"pre")(213,"code"),e(214,`GET {service-api}/processes?search=relatorio
`),t()(),n(215,"blockquote")(216,"p"),e(217,"Veja mais sobre pagina\xE7\xE3o e filtros no "),n(218,"a",6),e(219,"Guia de implementa\xE7\xE3o de APIs"),t(),e(220,`.
Caso seja informada a propriedade `),n(221,"code"),e(222,"p-parameters"),t(),e(223," n\xE3o ser\xE3o realizadas as requisi\xE7\xF5es de processos e nem de parametros automaticamente."),t()(),n(224,"p"),e(225,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),n(226,"code"),e(227,"{service-api}/processes"),t(),e(228,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),n(229,"strong"),e(230,"identificador do processo - "),n(231,"code"),e(232,"processID"),t()(),e(233," e ao salvar ser\xE1 enviado um "),n(234,"code"),e(235,"POST"),t(),e(236," para o endpoint difinido "),n(237,"code"),e(238,"serviceApi"),t(),e(239," conforme abaixo:"),t(),n(240,"pre")(241,"code"),e(242,`POST {service-api}
`),t()(),n(243,"p")(244,"em"),e(245,"Request payload"),t(),e(246," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),n(247,"code"),e(248,"PoJobScheduler"),t(),e(249,":"),t(),n(250,"pre")(251,"code"),e(252,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),t()(),n(253,"p"),e(254,"Caso seja necess\xE1rio informar par\xE2metros e adicionar configura\xE7\xF5es no processo selecionado, ser\xE1 realizado um "),n(255,"code"),e(256,"GET"),t(),e(257,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),n(258,"a",29),e(259,"PoDynamicFormField"),t(),e(260,". Por\xE9m, caso utilizar a propriedade "),n(261,"code"),e(262,"p-parameters"),t(),e(263,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),t(),n(264,"pre")(265,"code"),e(266,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),t()(),n(267,"h4"),e(268,"Salvar e Atualizar"),t(),n(269,"p"),e(270,"Para salvar o agendamento, ser\xE1 feita uma requisi\xE7\xE3o de cria\xE7\xE3o, passando os valores preenchidos pelo usu\xE1rio via "),n(271,"em"),e(272,"payload"),t(),e(273,`.
Abaixo uma requisi\xE7\xE3o `),n(274,"code"),e(275,"POST"),t(),e(276," disparada, onde as propriedades do "),n(277,"em"),e(278,"Job Scheduler"),t(),e(279," foram preenchidas:"),t(),n(280,"pre")(281,"code"),e(282,`POST {service-api}
`),t()(),n(283,"p")(284,"em"),e(285,"Request payload"),t(),e(286," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),n(287,"code"),e(288,"PoJobScheduler"),t(),e(289,":"),t(),n(290,"pre")(291,"code"),e(292,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),t()(),n(293,"p"),e(294,"Caso queira que o componente carregue um agendamento j\xE1 existente, deve ser inclu\xEDdo um par\xE2metro na rota chamado "),n(295,"code"),e(296,"id"),t(),e(297,"."),t(),n(298,"p"),e(299,"Exemplo de configura\xE7\xE3o de rota:"),t(),n(300,"pre")(301,"code"),e(302,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),t()(),n(303,"p"),e(304,"Baseado nisso, na inicializa\xE7\xE3o do template ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),t(),n(305,"pre")(306,"code"),e(307,`GET {service-api}/{id}
`),t()(),n(308,"p"),e(309,"Ao atualizar o agendamento, ser\xE1 disparado um "),n(310,"code"),e(311,"PUT"),t(),e(312,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),n(313,"code"),e(314,"PUT"),t(),e(315," disparada, onde a propriedade "),n(316,"em"),e(317,"recurrent"),t(),e(318," e "),n(319,"em"),e(320,"daily"),t(),e(321," foram atualizadas:"),t(),n(322,"pre")(323,"code"),e(324,`PUT {service-api}/{id}
`),t()(),n(325,"p")(326,"em"),e(327,"Request payload"),t(),e(328," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),n(329,"code"),e(330,"PoJobScheduler"),t(),e(331,":"),t(),n(332,"pre")(333,"code"),e(334,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),t()()()(),n(335,"tr",14)(336,"td",15)(337,"div",16)(338,"span",17),e(339," p-step-execution-last"),a(340,"br"),t()()(),n(341,"td",18)(342,"code",30),e(343,"boolean"),t()(),n(344,"td",20),e(345,"-"),t(),n(346,"td",21)(347,"em")(348,"strong"),e(349,"(opcional)"),t()(),n(350,"p"),e(351,"Define se o step "),n(352,"code"),e(353,"Agendamento"),t(),e(354," deve ser exibido como o \xFAltimo na sequ\xEAncia de steps"),t(),n(355,"blockquote")(356,"p"),e(357,"Aplic\xE1vel apenas quando utilizado "),n(358,"code"),e(359,"PoJobSchedulerParametersTemplateDirective"),t()()()()(),n(360,"tr",14)(361,"td",15)(362,"div",16)(363,"span",17),e(364," p-orientation"),a(365,"br"),t()()(),n(366,"td",18)(367,"code",31),e(368,"PoStepperOrientation"),t()(),n(369,"td",20),e(370,"-"),t(),n(371,"td",21)(372,"em")(373,"strong"),e(374,"(opcional)"),t()(),n(375,"p"),e(376,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),n(377,"code"),e(378,"po-stepper"),t(),e(379,"."),t(),n(380,"blockquote")(381,"p"),e(382,"Quando n\xE3o utilizada, segue o comportamento com base nas dimens\xF5es da tela."),t()(),n(383,"blockquote")(384,"p"),e(385,"Veja os valores v\xE1lidos no "),n(386,"em"),e(387,"enum"),t(),n(388,"a",32),e(389,"PoStepperOrientation"),t(),e(390,"."),t()()()(),n(391,"tr",14)(392,"td",15)(393,"div",25)(394,"span",26),e(395," (p-success)"),a(396,"br"),t()()(),n(397,"td",18)(398,"code",27),e(399,"EventEmitter"),t()(),n(400,"td",20),e(401,"-"),t(),n(402,"td",21)(403,"em")(404,"strong"),e(405,"(opcional)"),t()(),n(406,"p"),e(407,"Evento disparado ao concluir o processo de agendamento com sucesso."),t()()(),n(408,"tr",14)(409,"td",15)(410,"div",16)(411,"span",17),e(412," p-title"),a(413,"br"),t()()(),n(414,"td",18)(415,"code",23),e(416,"string"),t()(),n(417,"td",20),e(418,"-"),t(),n(419,"td",21)(420,"p"),e(421,"T\xEDtulo da p\xE1gina."),t()()()(),n(422,"h3"),e(423,"Interfaces"),t(),n(424,"h4",33)(425,"code",5),e(426,"PoJobScheduler"),t()(),n(427,"div",2)(428,"p"),e(429,"Estrutura do "),n(430,"em"),e(431,"payload"),t(),e(432," enviado nas requisi\xE7\xF5es para salvar e/ou atualizar as tarefas do "),n(433,"em"),e(434,"Job Scheduler"),t(),e(435,"."),t()(),n(436,"h4",10),e(437,"Propriedades"),t(),n(438,"table",11)(439,"tr",12)(440,"th",13),e(441,"Nome"),t(),n(442,"th",13),e(443,"Tipo"),t(),n(444,"th",13),e(445,"Descri\xE7\xE3o"),t()(),n(446,"tr",14)(447,"td",15)(448,"div",16)(449,"span",17),e(450," daily"),a(451,"br"),t()()(),n(452,"td",18)(453,"code",34),e(454,`{ hour: number; minute: number;
}`),t()(),n(455,"td",21)(456,"em")(457,"strong"),e(458,"(opcional)"),t()(),n(459,"p"),e(460,"Define uma repeti\xE7\xE3o di\xE1ria."),t()()(),n(461,"tr",14)(462,"td",15)(463,"div",16)(464,"span",17),e(465," executionParameter"),a(466,"br"),t()()(),n(467,"td",18)(468,"code",35),e(469,"object"),t()(),n(470,"td",21)(471,"em")(472,"strong"),e(473,"(opcional)"),t()(),n(474,"p"),e(475,"Objeto contendo os nomes das propriedades dos par\xE2metros e os valores preenchidos pelo usu\xE1rio."),t()()(),n(476,"tr",14)(477,"td",15)(478,"div",16)(479,"span",17),e(480," firstExecution"),a(481,"br"),t()()(),n(482,"td",18)(483,"code",23),e(484,"string"),t()(),n(485,"td",21)(486,"em")(487,"strong"),e(488,"(opcional)"),t()(),n(489,"p"),e(490,"Data da primeira execu\xE7\xE3o."),t()()(),n(491,"tr",14)(492,"td",15)(493,"div",16)(494,"span",17),e(495," monthly"),a(496,"br"),t()()(),n(497,"td",18)(498,"code",36),e(499,`{ day: number; hour: number; minute: number;
}`),t()(),n(500,"td",21)(501,"em")(502,"strong"),e(503,"(opcional)"),t()(),n(504,"p"),e(505,"Define uma repeti\xE7\xE3o mensal."),t()()(),n(506,"tr",14)(507,"td",15)(508,"div",16)(509,"span",17),e(510," processID"),a(511,"br"),t()()(),n(512,"td",18)(513,"code",23),e(514,"string"),t()(),n(515,"td",21)(516,"p"),e(517,"Identificador do processo."),t()()(),n(518,"tr",14)(519,"td",15)(520,"div",16)(521,"span",17),e(522," recurrent"),a(523,"br"),t()()(),n(524,"td",18)(525,"code",30),e(526,"boolean"),t()(),n(527,"td",21)(528,"em")(529,"strong"),e(530,"(opcional)"),t()(),n(531,"p"),e(532,"Permite uma execu\xE7\xE3o recorrente."),t()()(),n(533,"tr",14)(534,"td",15)(535,"div",16)(536,"span",17),e(537," weekly"),a(538,"br"),t()()(),n(539,"td",18)(540,"code",37),e(541,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),t()(),n(542,"td",21)(543,"em")(544,"strong"),e(545,"(opcional)"),t()(),n(546,"p"),e(547,"Define uma repeti\xE7\xE3o semanal."),t()()()()())},dependencies:[h],encapsulation:2})}return i})();var $=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||i)(J(q),J(V))};static \u0275cmp=s({type:i,selectors:[["ng-component"]],standalone:!1,decls:7,vars:4,consts:[["p-title","Page Job Scheduler",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),p("p-click",function(){return l.changeTab("doc")}),a(3,"sample-po-page-job-scheduler-doc"),t(),n(4,"po-tab",3),p("p-click",function(){return l.changeTab("web")}),a(5,"sample-po-page-job-scheduler-background-process-view")(6,"sample-po-page-job-scheduler-directives-view"),t()()()),o&2&&(m("p-actions",l.actions),d(2),m("p-active",l.activeTab==="doc"),d(2),m("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[z,b,S,N,U,X],encapsulation:2})}return i})();var de=[{path:"",component:$}],Q=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=g({type:i});static \u0275inj=x({imports:[j.forChild(de),j]})}return i})();var je=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=g({type:i});static \u0275inj=x({imports:[H,Q]})}return i})();export{je as DocPoPageJobSchedulerModule};
