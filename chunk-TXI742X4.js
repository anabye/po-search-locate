import{p as v}from"./chunk-MMZVQUBQ.js";import{Ab as M,nb as f,zb as h}from"./chunk-522XRIZO.js";import{Fa as i,Ga as t,Ha as r,M as m,Ma as x,Oc as E,Qc as y,Sc as S,Ya as e,ha as c,ia as u,oa as s,pa as l,ya as p}from"./chunk-WFKG4FNY.js";var b=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-media-query-doc"]],standalone:!1,decls:274,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","'gridSystemLgMinWidth':","string;","'gridSystemLgMaxWidth':","string;","}"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","{","'gridSystemMdMinWidth':","string;","'gridSystemMdMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemOffsetMinWidth':","string;","'gridSystemOffsetMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemPullMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemSmMaxWidth':","string;","}"],["pan","",1,"docs-api-property-type","{","'gridSystemXlMinWidth':","string;","}"]],template:function(a,d){a&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoMediaQueryModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,"M\xF3dulo do servi\xE7o "),i(7,"code"),e(8,"po-media-query"),t(),e(9,"."),t()(),i(10,"h3",3),e(11,"Services"),t(),i(12,"h4",4)(13,"code",5),e(14,"PoMediaQueryService"),t()(),i(15,"div",2)(16,"p"),e(17,"O PoMediaQueryService \xE9 um servi\xE7o que atualiza dinamicamente regras de media query dentro de folhas de estilo do DOM."),t(),i(18,"p"),e(19,"Ele utiliza as regras de media queries que cont\xEAm tokens CSS (definidos como var(--nome-da-variavel)) e as replica, aplicando os novos valores fornecidos, facilitando a adapta\xE7\xE3o dos estilos com base nas condi\xE7\xF5es das media queries."),t(),i(20,"p"),e(21,"Exemplo de uso:"),t(),i(22,"p"),e(23,`Neste exemplo, estamos alterando os valores dos breakpoints para o grid system, que determina como o layout deve se comportar em diferentes larguras de tela. Utilizando o PoMediaQueryService, definimos os limites para tr\xEAs tamanhos de tela: pequeno (sm), m\xE9dio (md), e grande (lg), e aplicamos esses valores dinamicamente para garantir que o layout responda adequadamente \xE0s mudan\xE7as no tamanho da janela.
Isso permite que o grid system do PO UI seja personalizado para se ajustar \xE0s necessidades do seu projeto.`),t(),i(24,"pre")(25,"code"),e(26,`import { PoMediaQueryService } from './po-media-query.service';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent {

 // Definindo tokens personalizados para os breakpoints do grid system
 constructor(private poMediaQueryService: PoMediaQueryService) {}

 ngOnInit() {
   const tokens: PoMediaQueryTokens =  {
    sm: {
     gridSystemSmMaxWidth: '1024px' // Limite m\xE1ximo para telas pequenas (at\xE9 1024px)
     },
    md: {
     gridSystemMdMinWidth: '1025px', // Limite m\xEDnimo para telas m\xE9dias (a partir de 1025px)
     gridSystemMdMaxWidth: '1366px' // Limite m\xE1ximo para telas m\xE9dias (at\xE9 1366px)
    },
    lg: {
     gridSystemLgMinWidth: '1367px', // Limite m\xEDnimo para telas grandes (a partir de 1367px)
     gridSystemLgMaxWidth: '1465px' // Limite m\xE1ximo para telas grandes (at\xE9 1465px)
    },
    xl: {
     gridSystemXlMinWidth: '1466px' // Limite m\xEDnimo para telas extra grandes (a partir de 1466px)
    }
   };

   // Atualiza os tokens de media queries com os novos valores
   this.poMediaQueryService.updateTokens(tokens);
 }
}
`),t()()(),i(27,"h3",6),e(28,"M\xE9todos"),t(),i(29,"table",7)(30,"tr",8)(31,"th",9)(32,"div",10)(33,"h4")(34,"span",11),e(35," updateTokens "),t()()()()(),i(36,"tr",12)(37,"td",12)(38,"p"),e(39,`M\xE9todo que replica as regras baseando-se pelos tokens de media query dentro das folhas de estilo do documento, permitindo a modifica\xE7\xE3o din\xE2mica
dos valores CSS correspondentes aos tokens fornecidos.`),t()()()(),i(40,"h5")(41,"b"),e(42,"Par\xE2metros"),t()(),i(43,"table",13)(44,"tr",14)(45,"th",15),e(46,"Nome"),t(),i(47,"th",15),e(48,"Tipo"),t(),i(49,"th",15),e(50,"Descri\xE7\xE3o"),t()(),i(51,"tr",8)(52,"td",16),e(53," tokens"),t(),i(54,"td",17)(55,"code",18),e(56," PoMediaQueryTokens "),t()(),i(57,"td",12)(58,"p"),e(59,`Objeto contendo os tokens que devem ser atualizados. Cada propriedade corresponde a uma vari\xE1vel CSS que ser\xE1
dinamicamente modificada dentro das regras de media query.`),t()()()(),r(60,"br"),i(61,"h3"),e(62,"Interfaces"),t(),i(63,"h4",19)(64,"code",5),e(65,"PoMediaQueryTokens"),t()(),i(66,"div",2)(67,"p"),e(68,`Interface que define os tokens CSS utilizados em regras de media queries.
Cada chave representa uma vari\xE1vel CSS que pode ser dinamicamente modificada.`),t(),i(69,"blockquote")(70,"p"),e(71,"Os tipos de valores aceitos para cada token s\xE3o: "),i(72,"code"),e(73,"pixels"),t(),e(74," , "),i(75,"code"),e(76,"em"),t(),e(77," e "),i(78,"code"),e(79,"rem"),t(),e(80,"."),t()()(),i(81,"h4",6),e(82,"Propriedades"),t(),i(83,"table",13)(84,"tr",14)(85,"th",15),e(86,"Nome"),t(),i(87,"th",15),e(88,"Tipo"),t(),i(89,"th",15),e(90,"Descri\xE7\xE3o"),t()(),i(91,"tr",8)(92,"td",16)(93,"div",10)(94,"span",11),e(95," lg"),r(96,"br"),t()()(),i(97,"td",17)(98,"code",20),e(99,`{ 'gridSystemLgMinWidth': string; 'gridSystemLgMaxWidth': string;
}`),t()(),i(100,"td",12)(101,"em")(102,"strong"),e(103,"(opcional)"),t()(),i(104,"p"),e(105,"Define a regra para lg."),t(),i(106,"p")(107,"code"),e(108,"gridSystemLgMinWidth"),t(),e(109," define a largura m\xEDnima para o grid no tamanho pequeno ("),i(110,"code"),e(111,"lg"),t(),e(112,")."),t(),i(113,"p")(114,"code"),e(115,"gridSystemLgMaxWidth"),t(),e(116," define a largura m\xE1xima para o grid no tamanho pequeno ("),i(117,"code"),e(118,"lg"),t(),e(119,")."),t(),i(120,"p"),e(121,"Exemplo de uso:"),t(),i(122,"pre")(123,"code",21),e(124,`const tokens: PoMediaQueryTokens =  {
 lg: {
   gridSystemLgMinWidth: '961px',
   gridSystemLgMaxnWidth: '1366px'
 }
};
`),t()()()(),i(125,"tr",8)(126,"td",16)(127,"div",10)(128,"span",11),e(129," md"),r(130,"br"),t()()(),i(131,"td",17)(132,"code",22),e(133,`{ 'gridSystemMdMinWidth': string; 'gridSystemMdMaxWidth': string;
}`),t()(),i(134,"td",12)(135,"em")(136,"strong"),e(137,"(opcional)"),t()(),i(138,"p"),e(139,"Define a regra para md."),t(),i(140,"p")(141,"code"),e(142,"gridSystemMdMinWidth"),t(),e(143," define a largura m\xEDnima para o grid no tamanho pequeno ("),i(144,"code"),e(145,"md"),t(),e(146,")."),t(),i(147,"p")(148,"code"),e(149,"gridSystemMdMaxWidth"),t(),e(150," define a largura m\xE1xima para o grid no tamanho pequeno ("),i(151,"code"),e(152,"md"),t(),e(153,")."),t(),i(154,"p"),e(155,"Exemplo de uso:"),t(),i(156,"pre")(157,"code",21),e(158,`const tokens: PoMediaQueryTokens =  {
 md: {
   gridSystemMdMinWidth: '481px',
   gridSystemMdMaxWidth: '960px'
 }
};
`),t()()()(),i(159,"tr",8)(160,"td",16)(161,"div",10)(162,"span",11),e(163," offset"),r(164,"br"),t()()(),i(165,"td",17)(166,"code",23),e(167,`{ 'gridSystemOffsetMinWidth': string; 'gridSystemOffsetMaxWidth': string;
}`),t()(),i(168,"td",12)(169,"em")(170,"strong"),e(171,"(opcional)"),t()(),i(172,"p"),e(173,"Define a regra offset."),t(),i(174,"p")(175,"code"),e(176,"gridSystemOffsetMinWidth"),t(),e(177," define a largura m\xEDnima para o grid no tamanho pequeno ("),i(178,"code"),e(179,"offset"),t(),e(180,")."),t(),i(181,"p")(182,"code"),e(183,"gridSystemOffsetMaxWidth"),t(),e(184," define a largura m\xE1xima para o grid no tamanho pequeno ("),i(185,"code"),e(186,"offset"),t(),e(187,")."),t(),i(188,"p"),e(189,"Exemplo de uso:"),t(),i(190,"pre")(191,"code",21),e(192,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemOffsetMinWidth: '361px',
   gridSystemOffsetMaxWidth: '480px'
 }
};
`),t()()()(),i(193,"tr",8)(194,"td",16)(195,"div",10)(196,"span",11),e(197," pull"),r(198,"br"),t()()(),i(199,"td",17)(200,"code",24),e(201,`{ 'gridSystemPullMaxWidth': string;
}`),t()(),i(202,"td",12)(203,"em")(204,"strong"),e(205,"(opcional)"),t()(),i(206,"p"),e(207,"Define a regra pull."),t(),i(208,"p")(209,"code"),e(210,"gridSystemPullMaxWidth"),t(),e(211," define a largura m\xE1xima para o grid no tamanho pequeno ("),i(212,"code"),e(213,"pull"),t(),e(214,")."),t(),i(215,"p"),e(216,"Exemplo de uso:"),t(),i(217,"pre")(218,"code",21),e(219,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemPullMaxWidth: '480px'
 }
};
`),t()()()(),i(220,"tr",8)(221,"td",16)(222,"div",10)(223,"span",11),e(224," sm"),r(225,"br"),t()()(),i(226,"td",17)(227,"code",25),e(228,`{ 'gridSystemSmMaxWidth': string;
}`),t()(),i(229,"td",12)(230,"em")(231,"strong"),e(232,"(opcional)"),t()(),i(233,"p"),e(234,"Define a regra para sm."),t(),i(235,"p")(236,"code"),e(237,"gridSystemSmMaxWidth"),t(),e(238," define a largura m\xE1xima para o grid no tamanho pequeno ("),i(239,"code"),e(240,"sm"),t(),e(241,")."),t(),i(242,"p"),e(243,"Exemplo de uso:"),t(),i(244,"pre")(245,"code",21),e(246,`const tokens: PoMediaQueryTokens =  {
 sm: {
   gridSystemSmMaxWidth: '480px'
 }
};
`),t()()()(),i(247,"tr",8)(248,"td",16)(249,"div",10)(250,"span",11),e(251," xl"),r(252,"br"),t()()(),i(253,"td",17)(254,"code",26),e(255,`{ 'gridSystemXlMinWidth': string;
}`),t()(),i(256,"td",12)(257,"em")(258,"strong"),e(259,"(opcional)"),t()(),i(260,"p"),e(261,"Define a regra xl."),t(),i(262,"p")(263,"code"),e(264,"gridSystemXlMinWidth"),t(),e(265," define a largura m\xEDnima para o grid no tamanho pequeno ("),i(266,"code"),e(267,"pull"),t(),e(268,")."),t(),i(269,"p"),e(270,"Exemplo de uso:"),t(),i(271,"pre")(272,"code",21),e(273,`const tokens: PoMediaQueryTokens =  {
 offset: {
   gridSystemXlMinWidth: '1367px'
 }
};
`),t()()()()()())},encapsulation:2})}return n})();var P=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,a){this.route=o,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let a=o.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||n)(u(E),u(y))};static \u0275cmp=s({type:n,selectors:[["ng-component"]],standalone:!1,decls:5,vars:4,consts:[["p-title","Media Query",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,d){a&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return d.changeTab("doc")}),r(3,"sample-po-media-query-doc"),t(),i(4,"po-tab",3),x("p-click",function(){return d.changeTab("web")}),t()()()),a&2&&(p("p-actions",d.actions),c(2),p("p-active",d.activeTab==="doc"),c(2),p("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"))},dependencies:[f,h,M,b],encapsulation:2})}return n})();var q=[{path:"",component:P}],W=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=l({type:n});static \u0275inj=m({imports:[S.forChild(q),S]})}return n})();var R=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=l({type:n});static \u0275inj=m({imports:[v,W]})}return n})();export{R as DocPoMediaQueryModule};
