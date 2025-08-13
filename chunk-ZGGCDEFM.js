import{p as z}from"./chunk-MMZVQUBQ.js";import{c as C,lb as q,nb as l}from"./chunk-522XRIZO.js";import{Fa as t,Ga as n,Ha as i,L as h,M as E,Pc as A,R as p,S as c,Sc as f,Ub as y,Ya as e,db as b,ha as v,ia as g,oa as m,pa as x,ya as P}from"./chunk-WFKG4FNY.js";var S=(()=>{class a{constructor(){}getMenus(r){return new Array({label:"Guia de implementa\xE7\xE3o de APIs",link:"guides/api"},{label:"Compatibilidade com os navegadores",link:"guides/browser-support"},{label:"Deprecia\xE7\xF5es",link:"guides/deprecations"},{label:"Contribuindo para o PO UI",link:"guides/development-flow"},{label:"Primeiros passos",link:"guides/getting-started"},{label:"Guia de uso para Gr\xE1ficos",link:"guides/guide-charts"},{label:"Migra\xE7\xE3o do PO UI para V2",link:"guides/migration-poui-v2"},{label:"Migra\xE7\xE3o do PO UI",link:"guides/migration-poui"},{label:"Migra\xE7\xE3o do THF para o PO UI v1.x",link:"guides/migration-thf-to-po-ui"},{label:"Press Kit",link:"guides/press-kit"},{label:"Releases",link:"guides/releases"},{label:"Schematics",link:"guides/schematics"},{label:"Fundamentos do PO Sync",link:"guides/sync-fundamentals"},{label:"Come\xE7ando com o PO Sync",link:"guides/sync-get-started"},{label:"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI",link:"guides/theme-service"})}static \u0275fac=function(o){return new(o||a)};static \u0275prov=h({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var F=(()=>{class a{menuGuidesService;http;menus=[];constructor(r,o){this.menuGuidesService=r,this.http=o}ngOnInit(){this.http.get("./assets/json/api-list.json").subscribe(r=>{this.menus=this.menuGuidesService.getMenus(r).map(o=>(o.link=o.link.replace("guides/",""),o))},r=>console.error(r))}static \u0275fac=function(o){return new(o||a)(g(S),g(y))};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,features:[b([S])],decls:4,vars:1,consts:[["userMenu",""],[1,"po-wrapper"],["p-filter","",3,"p-menus"]],template:function(o,s){o&1&&(t(0,"div",1),i(1,"po-menu",2,0)(3,"router-outlet"),n()),o&2&&(v(),P("p-menus",s.menus))},dependencies:[q,A],encapsulation:2})}return a})();var I=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:225,vars:0,consts:[["p-title","Guia de implementa\xE7\xE3o de APIs",1,"guides","app-portal"],["href","guides/api#introduction"],["href","guides/api#responseMessage"],["href","guides/api#errorMessages"],["href","guides/api#successMessages"],["href","guides/api#successMessagesForCollections"],["href","guides/api#collections"],["href","guides/api#order"],["href","guides/api#filters"],["href","guides/api#pagination"],["id","introduction"],["id","responseMessage"],["id","errorMessages"],["id","successMessages"],["id","successMessagesForCollections"],["id","collections"],["id","order"],["id","filters"],["id","pagination"],["href","#successMessagesForCollections"]],template:function(o,s){o&1&&(t(0,"po-page-default",0)(1,"h2"),e(2,"Conte\xFAdo"),n(),t(3,"ul")(4,"li")(5,"a",1),e(6,"Introdu\xE7\xE3o"),n()(),t(7,"li")(8,"a",2),e(9,"Formato das mensagens de resposta"),n(),t(10,"ul")(11,"li")(12,"a",3),e(13,"Mensagens de erro"),n()(),t(14,"li")(15,"a",4),e(16,"Mensagens de sucesso"),n()(),t(17,"li")(18,"a",5),e(19,"Mensagens de sucesso para cole\xE7\xF5es"),n()()()(),t(20,"li")(21,"a",6),e(22,"Formato das requisi\xE7\xF5es para cole\xE7\xF5es"),n(),t(23,"ul")(24,"li")(25,"a",7),e(26,"Ordena\xE7\xE3o"),n()(),t(27,"li")(28,"a",8),e(29,"Filtros"),n()(),t(30,"li")(31,"a",9),e(32,"Pagina\xE7\xE3o"),n()()()()(),t(33,"p"),i(34,"a",10),n(),t(35,"h2"),e(36,"Introdu\xE7\xE3o"),n(),t(37,"p"),e(38,"Este guia tem a finalidade de exibir os modelos de requisi\xE7\xF5es e respostas HTTP que o PO UI utiliza em seus componentes e "),t(39,"em"),e(40,"interceptors"),n(),e(41,"."),n(),t(42,"p"),i(43,"a",11),n(),t(44,"h2"),e(45,"Formato das mensagens de resposta"),n(),t(46,"p"),e(47,"Alguns componentes utilizam "),t(48,"code"),e(49,"endpoints"),n(),e(50," para poder buscar os itens. Para isso, \xE9 necess\xE1rio que o formato no qual estes itens ser\xE3o devolvidos seja padronizado, para uma comunica\xE7\xE3o mais efetiva. A seguir ser\xE3o apresentados o formato de mensagem de resposta esperado pelos "),t(51,"code"),e(52,"endpoints"),n(),e(53,"."),n(),t(54,"p"),i(55,"a",12),n(),t(56,"h3"),e(57,"Mensagens de erro"),n(),t(58,"p"),e(59,"Para todas as mensagens que representam um erro (c\xF3digos HTTP 4xx e 5xx) deve-se retornar obrigatoriamente os campos a seguir, caso deseje apresent\xE1-las:"),n(),t(60,"pre")(61,"code"),e(62,`{
    code: "C\xF3digo identificador do erro",
    message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
    detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
}
`),n()(),t(63,"p"),e(64,"Opcionalmente pode-se retornar os campos:"),n(),t(65,"ul")(66,"li")(67,"code"),e(68,"helpUrl"),n(),e(69,": link para a documenta\xE7\xE3o do erro;"),n(),t(70,"li")(71,"code"),e(72,"type"),n(),e(73,": pode ser informado os seguintes valores: "),t(74,"code"),e(75,"error"),n(),e(76,", "),t(77,"code"),e(78,"warning"),n(),e(79," e "),t(80,"code"),e(81,"information"),n(),e(82,";"),n(),t(83,"li")(84,"code"),e(85,"details"),n(),e(86,": lista de objetos de erro (recursiva) com mais detalhes sobre o erro principal."),n()(),t(87,"pre")(88,"code"),e(89,`{
    code: "C\xF3digo identificador do erro",
    type: "error"
    message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
    detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro",
    helpUrl: "link para a documenta\xE7\xE3o do error",
    details [
        {
            code: "C\xF3digo identificador do erro",
            message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
            detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
        },
        {
            code: "C\xF3digo identificador do erro",
            message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
            detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
        },
        {
            code: "C\xF3digo identificador do erro",
            message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
            detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
        }
    ]
}
`),n()(),t(90,"p"),i(91,"a",13),n(),t(92,"h3"),e(93,"Mensagens de sucesso"),n(),t(94,"p"),e(95,"Mensagens de sucesso (c\xF3digo HTTP 2xx) devem retornar diretamente a entidade que representa o objeto resultante da opera\xE7\xE3o do "),t(96,"em"),e(97,"endpoint"),n(),e(98,". Exemplo:"),n(),t(99,"pre")(100,"code"),e(101,`GET https://example.com.br/api/users/10

{
    id: 10,
    name: "John",
    surname: "Doe",
    age: 25,
    country: "US"
}
`),n()(),t(102,"p"),e(103,"Opcionalmente, o atributo "),t(104,"code"),e(105,"_messages"),n(),e(106," pode ser inclu\xEDdo no objeto retornado para fornecer alguma informa\xE7\xE3o complementar ao processamento realizado (mensagens de aviso, de neg\xF3cio, etc). "),n(),t(107,"p"),e(108,"O formato do objeto de mensagem segue o padr\xE3o anteriormente descrito, para mensagens de erro."),n(),t(109,"pre")(110,"code"),e(111,`GET https://example.com.br/api/users/10
 
{
    id: 10,
    name: "John",
    surname: "Doe",
    age: 25,
    country: "US",
    _messages: [{
      code: "INFO",
      type: "information",
      message: "Esta \xE9 uma mensagem informativa",
      detailedMessage: "Mais detalhes sobre esta mensagem podem ser vistos aqui."
    }]
}
`),n()(),t(112,"p"),i(113,"a",14),n(),t(114,"h4"),e(115,"Mensagens de sucesso para cole\xE7\xF5es"),n(),t(116,"p"),e(117,"Nos casos em que o resultado da opera\xE7\xE3o do "),t(118,"em"),e(119,"endpoint"),n(),e(120," representa uma cole\xE7\xE3o (lista de itens), os itens devem estar agrupados em um objeto com as propriedades "),t(121,"code"),e(122,"hasNext"),n(),e(123,", indicando se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o e "),t(124,"code"),e(125,"items"),n(),e(126," que representam a lista de itens retornados."),n(),t(127,"pre")(128,"code"),e(129,`{
  hasNext: true,
  items: [
    {},
    {},
    ...
  ]
}
`),n()(),t(130,"p"),e(131,"Para o retorno de cole\xE7\xF5es, tamb\xE9m \xE9 poss\xEDvel incluir o atributo "),t(132,"code"),e(133,"_messages"),n(),e(134,", conforme segue:"),n(),t(135,"pre")(136,"code"),e(137,`{
  hasNext: true,
  items: [
    {},
    {},
    ...
  ],
  _messages: [{
    code: "INFO",
    type: "information",
    message: "Uma mensagem informativa.",
    detailedMessage: "Detalhes relativos a mensagem."
  }]
}
`),n()(),t(138,"p"),i(139,"a",15),n(),t(140,"h2"),e(141,"Formato das requisi\xE7\xF5es para as cole\xE7\xF5es"),n(),t(142,"p"),e(143,"Os "),t(144,"em"),e(145,"endpoints"),n(),e(146," tamb\xE9m podem receber par\xE2metros na requisi\xE7\xE3o que servem para especificar o tipo de resposta desejada, por exemplo: ordena\xE7\xE3o. A seguir, ser\xE3o apresentados os par\xE2metros que poder\xE3o ser enviados nessas requisi\xE7\xF5es."),n(),t(147,"p"),i(148,"a",16),n(),t(149,"h3"),e(150,"Ordena\xE7\xE3o"),n(),t(151,"p"),e(152,"Quando algum componente, como "),t(153,"code"),e(154,"po-lookup"),n(),e(155,", realizar alguma ordena\xE7\xE3o ser\xE1 enviado o par\xE2metro "),t(156,"code"),e(157,"order"),n(),e(158,", com as seguintes caracter\xEDsticas:"),n(),t(159,"ul")(160,"li"),e(161,"campos precedidos por um sinal de subtra\xE7\xE3o (-) devem ser ordenados de forma decrescente;"),n(),t(162,"li"),e(163,"campos que omitirem o sinal (subtra\xE7\xE3o) devem ser ordenados de forma crescente."),n()(),t(164,"p"),e(165,"Por exemplo, a seguinte requisi\xE7\xE3o deve retornar a lista de usu\xE1rios ordenados pelo nome de forma crescente e ent\xE3o pela idade de forma decrescente e pelo sobrenome de forma crescente:"),n(),t(166,"pre")(167,"code"),e(168,`GET https://example.com.br/api/users?order=name,-age,surname
`),n()(),t(169,"p"),i(170,"a",17),n(),t(171,"h3"),e(172,"Filtros"),n(),t(173,"p"),e(174,"Aos realizar um filtro ser\xE1 enviado um par\xE2metro no formato "),t(175,"code"),e(176,"property=value"),n(),e(177,":"),n(),t(178,"p")(179,"code"),e(180,"GET https://example.com.br/api/users?name=john&surname=doe"),n()(),t(181,"p"),i(182,"a",18),n(),t(183,"h3"),e(184,"Pagina\xE7\xE3o"),n(),t(185,"p"),e(186,"A pagina\xE7\xE3o \xE9 definida pelos par\xE2metros "),t(187,"code"),e(188,"page"),n(),e(189," e "),t(190,"code"),e(191,"pageSize"),n(),e(192,", respeitando as seguintes regras: "),n(),t(193,"ul")(194,"li"),e(195,"o valor do par\xE2metro "),t(196,"code"),e(197,"page"),n(),e(198," deve ser um valor num\xE9rico (maior que zero) representando a p\xE1gina solicitada;"),n(),t(199,"li"),e(200,"o valor do par\xE2metro "),t(201,"code"),e(202,"pageSize"),n(),e(203," deve ser um valor num\xE9rico (maior que zero) representando o total de registros retornados na consulta;"),n(),t(204,"li"),e(205,"os par\xE2metros de pagina\xE7\xE3o devem obedecer a sem\xE2ntica de multiplicador, ou seja, se o cliente solicitou "),t(206,"code"),e(207,"page=2"),n(),e(208," com um "),t(209,"code"),e(210,"pageSize=20"),n(),e(211," deve-se retornar os registros de 21 at\xE9 40;"),n(),t(212,"li"),e(213,"a resposta de uma requisi\xE7\xE3o com pagina\xE7\xE3o deve retornar um atributo indicando se existe uma pr\xF3xima p\xE1gina dispon\xEDvel conforme descrito na "),t(214,"a",19),e(215,"mensagem de sucesso de cole\xE7\xF5es"),n(),e(216," e esse atributo deve ter o nome "),t(217,"code"),e(218,"hasNext"),n(),e(219,"."),n()(),t(220,"p"),e(221,"Por exemplo, a seguinte requisi\xE7\xE3o deve retornar a quarta p\xE1gina de registros (dos registros 31 a 40 inclusive) de usu\xE1rios:"),n(),t(222,"p")(223,"code"),e(224,"GET https://example.com.br/api/users/?page=4&pageSize=10"),n()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var O=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:82,vars:0,consts:[["p-title","Compatibilidade com os navegadores",1,"guides","app-portal"],[1,"po-row"],[1,"po-xl-6","po-lg-8","po-md-10","po-sm-12"],[1,"po-table","po-text-color-neutral-dark-40"],[1,"po-table-header"],[1,"po-table-header-ellipsis"],[1,"po-table-row"],[1,"po-table-column"],["href","https://angular.io/guide/browser-support"],["href","https://angular.io/guide/deployment#local-development-in-older-browsers"]],template:function(o,s){o&1&&(t(0,"po-page-default",0)(1,"p"),e(2,"Atualmente o PO est\xE1 homologado para os seguintes navegadores:"),n(),t(3,"div",1)(4,"div",2)(5,"table",3)(6,"thead")(7,"tr",4)(8,"th",5),e(9,"Navegadores"),n(),t(10,"th",5),e(11,"Vers\xF5es"),n()()(),t(12,"tbody")(13,"tr",6)(14,"th",7),e(15,"Chrome"),n(),t(16,"td",7),e(17,"vers\xF5es mais recentes (latest)"),n()(),t(18,"tr",6)(19,"th",7),e(20,"Firefox"),n(),t(21,"td",7),e(22,"vers\xF5es mais recentes (latest)"),n()(),t(23,"tr",6)(24,"th",7),e(25,"Edge"),n(),t(26,"td",7),e(27,"2 \xFAltimas vers\xF5es principais"),n()(),t(28,"tr",6)(29,"th",7),e(30,"Safari"),n(),t(31,"td",7),e(32,"2 \xFAltimas vers\xF5es principais"),n()(),t(33,"tr",6)(34,"th",7),e(35,"IOS"),n(),t(36,"td",7),e(37,"2 \xFAltimas vers\xF5es principais"),n()(),t(38,"tr",6)(39,"th",7),e(40,"Android"),n(),t(41,"td",7),e(42,"2 \xFAltimas vers\xF5es principais"),n()()()()()(),t(43,"blockquote")(44,"p"),e(45,`Nossa homologa\xE7\xE3o tem como base os navegadores que o Angular suporta nativamente. Para saber mais, acesse o guia
`),t(46,"a",8)(47,"em"),e(48,"Browser support"),n()(),e(49," do Angular."),n()(),t(50,"blockquote")(51,"p"),e(52,"Caso precise de algum "),t(53,"em"),e(54,"polyfill"),n(),e(55," em sua aplica\xE7\xE3o ou precisa de mais informa\xE7\xE3o sobre como funciona um "),t(56,"em"),e(57,"polyfill"),n(),e(58," acesse a documenta\xE7\xE3o "),t(59,"a",8)(60,"em"),e(61,"Browser support"),n()(),e(62," do Angular."),n()(),t(63,"h2"),e(64,"Executando a aplica\xE7\xE3o localmente"),n(),t(65,"p"),e(66,"A partir do Angular CLI v8, os comandos "),t(67,"em"),e(68,"ng serve"),n(),e(69,", "),t(70,"em"),e(71,"ng test"),n(),e(72," e "),t(73,"em"),e(74,"ng e2e"),n(),e(75," s\xE3o executados com ES2015, n\xE3o sendo suportado para navegadores como Internet Explorer."),n(),t(76,"p"),e(77,"Para conseguir executar a aplica\xE7\xE3o localmente no Internet Explorer, veja a documenta\xE7\xE3o"),i(78,"br"),t(79,"a",9),e(80,"Desenvolvendo localmente em navegadores antigos"),n(),e(81,"."),n()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var T=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:730,vars:0,consts:[["p-title","Deprecia\xE7\xF5es",1,"guides","app-portal"],["href","https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md"],[1,"po-row"],[1,"po-xl-6","po-lg-8","po-md-10","po-sm-12"],[1,"po-table","po-text-color-neutral-dark-40"],[1,"po-table-header"],[1,"po-table-header-ellipsis"],[1,"po-table-row"],[1,"po-table-column"],["href","documentation/po-tabs"],[1,"po-table-column",2,"text-align","center"],["href","documentation/po-tag"],["href","documentation/po-button"],["href","documentation/po-button-group"],["href","documentation/po-container"],["href","documentation/po-table"],["href","documentation/po-input"],["href","documentation/po-select"],["href","documentation/po-switch"],["href","documentation"],["href","https://animaliads.notion.site/Bot-o-fb3a921e8ba54bd38b39758c24613368"],["href","documentation/po-chart"],["href","documentation/po-gauge"],["href","documentation/po-navbar"],["href","documentation/po-page-list"],["href","documentation/po-page-login"],["href","documentation/po-sync"],["href","documentation/po-upload"],["href","documentation/po-lookup"],["href","documentation/po-http-interceptor"],["href","documentation/po-page-detail"],["href","documentation/po-page-edit"]],template:function(o,s){o&1&&(t(0,"po-page-default",0)(1,"p"),e(2,"\xC0s vezes as mudan\xE7as s\xE3o necess\xE1rias para inovar e se manter atualizado, e para tornar essas transi\xE7\xF5es o mais f\xE1cil poss\xEDvel, assumimos o compromisso de minimizar o n\xFAmero de mudan\xE7as significativas e fornecer ferramentas de migra\xE7\xE3o, al\xE9m disso, seguimos uma pol\xEDtica de suspens\xE3o de uso para que voc\xEA tenha tempo h\xE1bil para atualizar suas aplica\xE7\xF5es com as funcionalidades mais recentes."),n(),t(3,"h2"),e(4,"Descontinuidade"),n(),t(5,"p"),e(6,"Anunciamos os recursos obsoletos no nosso "),t(7,"a",1),e(8,"CHANGELOG"),n(),e(9,". Esses recursos obsoletos aparecem na documenta\xE7\xE3o com uma marca\xE7\xE3o de "),t(10,"em")(11,"code"),e(12,"Deprecated"),n()(),e(13," e n\xE3o s\xE3o mais exemplificados nos "),t(14,"em"),e(15,"samples"),n(),e(16," do portal. Quando anunciamos uma suspens\xE3o de uso, sempre anunciamos tamb\xE9m um caminho de atualiza\xE7\xE3o recomendado. Neste documento teremos um resumo dessses recursos depreciados."),n(),t(17,"p"),e(18,"Quando um recurso \xE9 descontinuado ele ainda se mant\xE9m presente geralmente pelas pr\xF3ximas "),t(19,"code"),e(20,"duas"),n(),e(21," vers\xF5es principais. Depois disso esses recursos ser\xE3o removidos. Uma descontinua\xE7\xE3o pode ser anunciada em qualquer vers\xE3o, mas a sua remo\xE7\xE3o acontecer\xE1 apenas na vers\xE3o principal. At\xE9 um recurso depreciado ser removido, manteremos o suporte a problemas cr\xEDticos e de seguran\xE7a e tamb\xE9m temos ferramentas de migra\xE7\xE3o que geralmente automatizam a maior parte das atualiza\xE7\xF5es."),n(),t(22,"h2"),e(23,"\xCDndice"),n(),t(24,"p"),e(25,"A tabela a seguir lista todos os recursos depreciados, organizados pelo release em que ser\xE3o removidos. Cada item cont\xE9m um link para a se\xE7\xE3o que descreve o motivo da suspens\xE3o de uso e as op\xE7\xF5es de substitui\xE7\xE3o."),n(),t(26,"div",2)(27,"div",3)(28,"table",4)(29,"thead")(30,"tr",5)(31,"th",6),e(32,"\xC1rea"),n(),t(33,"th",6),e(34,"API ou Funcionalidade"),n(),t(35,"th",6),e(36,"Removida em"),n()()(),t(37,"tbody")(38,"tr",7)(39,"th",8)(40,"a",9),e(41,"PoTabs"),n()(),t(42,"td",8),e(43,"p-small"),n(),t(44,"td",10),e(45,"v18"),n()(),t(46,"tr",7)(47,"th",8)(48,"a",11),e(49,"PoTag"),n()(),t(50,"td",8),e(51,"p-inverse"),n(),t(52,"td",10),e(53,"v18"),n()(),t(54,"tr",7)(55,"th",8)(56,"a",12),e(57,"PoButton"),n()(),t(58,"td",8),e(59,"p-small"),n(),t(60,"td",10),e(61,"v17"),n()(),t(62,"tr",7)(63,"th",8)(64,"a",13),e(65,"PoButtonGroup"),n()(),t(66,"td",8),e(67,"p-small"),n(),t(68,"td",10),e(69,"v17"),n()(),t(70,"tr",7)(71,"th",8)(72,"a",14),e(73,"PoContainer"),n()(),t(74,"td",8),e(75,"p-no-shadow"),n(),t(76,"td",10),e(77,"v17"),n()(),t(78,"tr",7)(79,"th",8)(80,"a",15),e(81,"PoTable"),n()(),t(82,"td",8),e(83,"p-hide-text-overflow"),n(),t(84,"td",10),e(85,"v17"),n()()()()()(),t(86,"blockquote")(87,"p"),e(88,"Ver mais detalhes no nosso "),t(89,"a",1),e(90,"CHANGELOG"),n(),e(91," e na nossa documenta\xE7\xE3o das ferramentas de migra\xE7\xE3o que automatizam a maioria dos breaking changes."),n()(),t(92,"h2"),e(93,"Deprecia\xE7\xF5es"),n(),t(94,"p"),e(95,"Esta se\xE7\xE3o cont\xE9m uma lista completa de todos os recursos obsoletos com detalhes para ajud\xE1-lo a planejar sua migra\xE7\xE3o."),n(),t(96,"h3"),e(97,"PoButton"),n(),t(98,"div",2)(99,"div",3)(100,"table",4)(101,"thead")(102,"tr",5)(103,"th",6),e(104,"Recurso"),n(),t(105,"th",6),e(106,"Substitui\xE7\xE3o"),n(),t(107,"th",6),e(108,"An\xFAncio da Deprecia\xE7\xE3o"),n(),t(109,"th",6),e(110,"Removido em"),n()()(),t(111,"tbody")(112,"tr",7)(113,"th",8),e(114,"p-type"),n(),t(115,"td",8)(116,"a",12),e(117,"p-kind"),n()(),t(118,"td",10),e(119,"v6"),n(),t(120,"td",10),e(121,"v15"),n()()()()()(),t(122,"h4"),e(123,"Deprecia p-type default"),n(),t(124,"p"),e(125,"Indicamos o uso da propriedade "),t(126,"code"),e(127,"p-kind"),n(),e(128," secondary"),n(),t(129,"p"),e(130,"Antes:"),n(),t(131,"pre")(132,"code"),e(133,`// html
<po-button [p-type]="default" ...></po-button>
`),n()(),t(134,"p"),e(135,"Depois:"),n(),t(136,"pre")(137,"code"),e(138,`// html
<po-button p-kind="secondary" ...></po-button>
`),n()(),t(139,"h4"),e(140,"Deprecia p-type primary"),n(),t(141,"p"),e(142,"Indicamos o uso da propriedade "),t(143,"code"),e(144,"p-kind"),n(),e(145," primary"),n(),t(146,"p"),e(147,"Antes:"),n(),t(148,"pre")(149,"code"),e(150,`// html
<po-button [p-type]="primary" ...></po-button>
`),n()(),t(151,"p"),e(152,"Depois:"),n(),t(153,"pre")(154,"code"),e(155,`// html
<po-button p-kind="primary" ...></po-button>
`),n()(),t(156,"h4"),e(157,"Deprecia p-type link"),n(),t(158,"p"),e(159,"Indicamos o uso da propriedade "),t(160,"code"),e(161,"p-kind"),n(),e(162," tertiary"),n(),t(163,"p"),e(164,"Antes:"),n(),t(165,"pre")(166,"code"),e(167,`// html
<po-button [p-type]="link" ...></po-button>
`),n()(),t(168,"p"),e(169,"Depois:"),n(),t(170,"pre")(171,"code"),e(172,`// html
<po-button p-kind="tertiary" ...></po-button>
`),n()(),t(173,"h4"),e(174,"Deprecia p-type danger"),n(),t(175,"p"),e(176,"Indicamos o uso da propriedade "),t(177,"code"),e(178,"p-danger"),n(),e(179," true"),n(),t(180,"p"),e(181,"Antes:"),n(),t(182,"pre")(183,"code"),e(184,`// html
<po-button [p-type]="danger" ...></po-button>
`),n()(),t(185,"p"),e(186,"Depois:"),n(),t(187,"pre")(188,"code"),e(189,`// html
<po-button [p-danger]="true" ...></po-button>
`),n()(),t(190,"h3"),e(191,"HttpClientModule"),n(),t(192,"blockquote")(193,"p"),e(194,"O m\xF3dulo HttpClientModule foi removido do projeto n\xE3o sendo mais importado diretamente nos componentes que o utilizavam e por motivos de boas pr\xE1ticas \xE9 necess\xE1rio importar o HttpClientModule apenas no m\xF3dulo principal da aplica\xE7\xE3o."),n()(),t(195,"p"),e(196,"Exemplo:"),n(),t(197,"pre")(198,"code"),e(199,`// app.module.ts
...
import { HttpClientModule } from '@angular/common/http';
...

@NgModule({
  declarations: [
    ...
    AppComponent
    ...
  ],
  imports: [
    ...
    HttpClientModule,
    ...
  ],
  providers: [],
  bootstrap: [
    ...
    AppComponent
    ...
    ]
})
export class AppModule { }
`),n()(),t(200,"h2"),e(201,"Breaking Changes"),n(),t(202,"div",2)(203,"div",3)(204,"table",4)(205,"thead")(206,"tr",5)(207,"th",6),e(208,"\xC1rea"),n(),t(209,"th",6),e(210,"Funcionalidade"),n(),t(211,"th",6),e(212,"Substitui\xE7\xE3o"),n(),t(213,"th",6),e(214,"Removida em"),n()()(),t(215,"tbody")(216,"tr",7)(217,"th",8)(218,"a",9),e(219,"PoTabs"),n()(),t(220,"td",8),e(221,"p-small"),n(),t(222,"td",8),e(223,"-"),n(),t(224,"td",10),e(225,"v18"),n()(),t(226,"tr",7)(227,"th",8)(228,"a",11),e(229,"PoTag"),n()(),t(230,"td",8),e(231,"p-inverse"),n(),t(232,"td",8),e(233,"-"),n(),t(234,"td",10),e(235,"v18"),n()(),t(236,"tr",7)(237,"th",8)(238,"a",12),e(239,"PoButton"),n()(),t(240,"td",8),e(241,"p-small"),n(),t(242,"td",8),e(243,"-"),n(),t(244,"td",10),e(245,"v17"),n()(),t(246,"tr",7)(247,"th",8)(248,"a",13),e(249,"PoButtonGroup"),n()(),t(250,"td",8),e(251,"p-small"),n(),t(252,"td",8),e(253,"-"),n(),t(254,"td",10),e(255,"v17"),n()(),t(256,"tr",7)(257,"th",8)(258,"a",14),e(259,"PoContainer"),n()(),t(260,"td",8),e(261,"p-no-shadow"),n(),t(262,"td",8),e(263,"-"),n(),t(264,"td",10),e(265,"v17"),n()(),t(266,"tr",7)(267,"th",8)(268,"a",15),e(269,"PoTable"),n()(),t(270,"td",8),e(271,"p-hide-text-overflow"),n(),t(272,"td",8),e(273,"-"),n(),t(274,"td",10),e(275,"v17"),n()(),t(276,"tr",7)(277,"th",8)(278,"a",12),e(279,"PoButton"),n()(),t(280,"td",8),e(281,"p-type"),n(),t(282,"td",8),e(283,"-"),n(),t(284,"td",10),e(285,"v15"),n()(),t(286,"tr",7)(287,"th",8),e(288,"Build"),n(),t(289,"td",8),e(290,"HttpClientModule"),n(),t(291,"td",8),e(292,"-"),n(),t(293,"td",10),e(294,"v15"),n()(),t(295,"tr",7)(296,"th",8)(297,"a",16),e(298,"PoDynamicFormFields"),n()(),t(299,"td",8),e(300,"p-auto-focus"),n(),t(301,"td",8),e(302,"-"),n(),t(303,"td",10),e(304,"v14"),n()(),t(305,"tr",7)(306,"th",8)(307,"a",17),e(308,"PoSelect"),n()(),t(309,"td",8),e(310,"p-auto-focus"),n(),t(311,"td",8),e(312,"-"),n(),t(313,"td",10),e(314,"v14"),n()(),t(315,"tr",7)(316,"th",8)(317,"a",18),e(318,"PoSwitch"),n()(),t(319,"td",8),e(320,"p-auto-focus"),n(),t(321,"td",8),e(322,"-"),n(),t(323,"td",10),e(324,"v14"),n()(),t(325,"tr",7)(326,"th",8)(327,"a",12),e(328,"PoButton"),n()(),t(329,"td",8),e(330,"p-auto-focus"),n(),t(331,"td",8),e(332,"-"),n(),t(333,"td",10),e(334,"v14"),n()(),t(335,"tr",7)(336,"th",8)(337,"a",16),e(338,"PoSelectOptionTemplate"),n()(),t(339,"td",8),e(340,"-"),n(),t(341,"td",8),e(342,"PoComboOptionTemplate"),n(),t(343,"td",10),e(344,"v14"),n()(),t(345,"tr",7)(346,"th",8)(347,"a",19),e(348,"Components"),n()(),t(349,"td",8),e(350,"diminui\xE7\xE3o da altura em pequenas resolu\xE7\xF5es. "),t(351,"a",20),e(352,"Ver mais"),n()(),t(353,"td",8),e(354,"-"),n(),t(355,"td",10),e(356,"v14"),n()(),t(357,"tr",7)(358,"th",8)(359,"a",21),e(360,"PoChart"),n()(),t(361,"td",8),e(362,"PoChartGaugeSerie"),n(),t(363,"td",8)(364,"a",22),e(365,"PoGauge"),n()(),t(366,"td",10),e(367,"v6"),n()(),t(368,"tr",7)(369,"th",8)(370,"a",21),e(371,"PoChart"),n()(),t(372,"td",8),e(373,"PoChartSerie.category"),n(),t(374,"td",8),e(375,"PoChartSerie.label"),n(),t(376,"td",10),e(377,"v6"),n()(),t(378,"tr",7)(379,"th",8)(380,"a",21),e(381,"PoChart"),n()(),t(382,"td",8),e(383,"PoChartSerie.value"),n(),t(384,"td",8),e(385,"PoChartSerie.data"),n(),t(386,"td",10),e(387,"v6"),n()(),t(388,"tr",7)(389,"th",8)(390,"a",21),e(391,"PoChart"),n()(),t(392,"td",8),e(393,"PoChartType.Gauge"),n(),t(394,"td",8)(395,"a",22),e(396,"PoGauge"),n()(),t(397,"td",10),e(398,"v6"),n()(),t(399,"tr",7)(400,"th",8)(401,"a",23),e(402,"PoNavBar"),n()(),t(403,"td",8),e(404,"p-menu"),n(),t(405,"td",8),e(406,"-"),n(),t(407,"td",10),e(408,"v6"),n()(),t(409,"tr",7)(410,"th",8)(411,"a",21),e(412,"PoChart"),n()(),t(413,"td",8),e(414,"PoPieChartSeries"),n(),t(415,"td",8),e(416,"PoChartSerie"),n(),t(417,"td",10),e(418,"v5"),n()(),t(419,"tr",7)(420,"th",8)(421,"a",21),e(422,"PoChart"),n()(),t(423,"td",8),e(424,"PoDonutChartSeries"),n(),t(425,"td",8),e(426,"PoChartSerie"),n(),t(427,"td",10),e(428,"v5"),n()(),t(429,"tr",7)(430,"th",8)(431,"a",21),e(432,"PoChart"),n()(),t(433,"td",8),e(434,"PoBarChartSeries"),n(),t(435,"td",8),e(436,"PoChartSerie"),n(),t(437,"td",10),e(438,"v5"),n()(),t(439,"tr",7)(440,"th",8)(441,"a",21),e(442,"PoChart"),n()(),t(443,"td",8),e(444,"PoColumnChartSeries"),n(),t(445,"td",8),e(446,"PoChartSerie"),n(),t(447,"td",10),e(448,"v5"),n()(),t(449,"tr",7)(450,"th",8)(451,"a",21),e(452,"PoChart"),n()(),t(453,"td",8),e(454,"PoLineChartSeries"),n(),t(455,"td",8),e(456,"PoChartSerie"),n(),t(457,"td",10),e(458,"v5"),n()(),t(459,"tr",7)(460,"th",8)(461,"a",15),e(462,"PoTable"),n()(),t(463,"td",8),e(464,"p-single-select"),n(),t(465,"td",8),e(466,'[p-single-select]="false"'),n(),t(467,"td",10),e(468,"v5"),n()(),t(469,"tr",7)(470,"th",8)(471,"a",15),e(472,"PoTable"),n()(),t(473,"td",8),e(474,"p-hide-select-all"),n(),t(475,"td",8),e(476,'[p-hide-select-all]="false"'),n(),t(477,"td",10),e(478,"v5"),n()(),t(479,"tr",7)(480,"th",8)(481,"a",15),e(482,"PoTable"),n()(),t(483,"td",8),e(484,"p-striped"),n(),t(485,"td",8),e(486,'[p-striped]="false"'),n(),t(487,"td",10),e(488,"v5"),n()(),t(489,"tr",7)(490,"th",8)(491,"a",15),e(492,"PoTable"),n()(),t(493,"td",8),e(494,"p-show-more-disabled"),n(),t(495,"td",8),e(496,'[p-show-more-disabled]="false"'),n(),t(497,"td",10),e(498,"v5"),n()(),t(499,"tr",7)(500,"th",8)(501,"a",15),e(502,"PoTable"),n()(),t(503,"td",8),e(504,"p-sort"),n(),t(505,"td",8),e(506,'[p-sort]="false"'),n(),t(507,"td",10),e(508,"v5"),n()(),t(509,"tr",7)(510,"th",8)(511,"a",24),e(512,"PoPageList"),n()(),t(513,"td",8),e(514,"PoPageFilter.ngModel"),n(),t(515,"td",8),e(516,"-"),n(),t(517,"td",10),e(518,"v4"),n()(),t(519,"tr",7)(520,"th",8)(521,"a",24),e(522,"PoPageList"),n()(),t(523,"td",8),e(524,"PoPageFilter.action: string"),n(),t(525,"td",8),e(526,"PoPageFilter.action: Function"),n(),t(527,"td",10),e(528,"v4"),n()(),t(529,"tr",7)(530,"th",8)(531,"a",24),e(532,"PoPageList"),n()(),t(533,"td",8),e(534,"PoPageFilter.advancedAction: string"),n(),t(535,"td",8),e(536,"PoPageFilter.advancedAction: Function"),n(),t(537,"td",10),e(538,"v4"),n()(),t(539,"tr",7)(540,"th",8)(541,"a",25),e(542,"PoPageLogin"),n()(),t(543,"td",8),e(544,"PoPageLoginLiterals.title"),n(),t(545,"td",8),e(546,"p-product-name"),n(),t(547,"td",10),e(548,"v4"),n()(),t(549,"tr",7)(550,"th",8)(551,"a",21),e(552,"PoChart"),n()(),t(553,"td",8),e(554,"PoChartOptions.axis.axisXGridLines"),n(),t(555,"td",8),e(556,"PoChartOptions.axis.gridLines"),n(),t(557,"td",10),e(558,"v4"),n()(),t(559,"tr",7)(560,"th",8)(561,"a",26),e(562,"PoSync"),n()(),t(563,"td",8),e(564,"portinari_sync_date"),n(),t(565,"td",8),e(566,"po_sync_date"),n(),t(567,"td",10),e(568,"v3"),n()(),t(569,"tr",7)(570,"th",8)(571,"a",27),e(572,"PoUpload"),n()(),t(573,"td",8),e(574,"PoUploadLiterals.cancel"),n(),t(575,"td",8),e(576,"-"),n(),t(577,"td",10),e(578,"v3"),n()(),t(579,"tr",7)(580,"th",8)(581,"a",27),e(582,"PoUpload"),n()(),t(583,"td",8),e(584,"PoUploadLiterals.deleteFile"),n(),t(585,"td",8),e(586,"-"),n(),t(587,"td",10),e(588,"v3"),n()(),t(589,"tr",7)(590,"th",8)(591,"a",27),e(592,"PoUpload"),n()(),t(593,"td",8),e(594,"PoUploadLiterals.tryAgain"),n(),t(595,"td",8),e(596,"-"),n(),t(597,"td",10),e(598,"v3"),n()(),t(599,"tr",7)(600,"th",8)(601,"a",28),e(602,"PoLookup"),n()(),t(603,"td",8),e(604,"getFilteredData"),n(),t(605,"td",8),e(606,"getFilteredItems"),n(),t(607,"td",10),e(608,"v3"),n()(),t(609,"tr",7)(610,"th",8)(611,"a",15),e(612,"PoTable"),n()(),t(613,"td",8),e(614,"p-checkbox"),n(),t(615,"td",8),e(616,"p-selectable"),n(),t(617,"td",10),e(618,"v3"),n()(),t(619,"tr",7)(620,"th",8)(621,"a",16),e(622,"PoField"),n()(),t(623,"td",8),e(624,"p-focus"),n(),t(625,"td",8),e(626,"p-auto-focus"),n(),t(627,"td",10),e(628,"v2"),n()(),t(629,"tr",7)(630,"th",8),e(631,"Packages"),n(),t(632,"td",8),e(633,"@portinari/portinari-ui"),n(),t(634,"td",8),e(635,"@po-ui/ng-components"),n(),t(636,"td",10),e(637,"v2"),n()(),t(638,"tr",7)(639,"th",8),e(640,"Packages"),n(),t(641,"td",8),e(642,"@portinari/portinari-templates"),n(),t(643,"td",8),e(644,"@po-ui/ng-templates"),n(),t(645,"td",10),e(646,"v2"),n()(),t(647,"tr",7)(648,"th",8),e(649,"Packages"),n(),t(650,"td",8),e(651,"@portinari/portinari-code-editor"),n(),t(652,"td",8),e(653,"@po-ui/ng-code-editor"),n(),t(654,"td",10),e(655,"v2"),n()(),t(656,"tr",7)(657,"th",8),e(658,"Packages"),n(),t(659,"td",8),e(660,"@portinari/portinari-storage"),n(),t(661,"td",8),e(662,"@po-ui/ng-storage"),n(),t(663,"td",10),e(664,"v2"),n()(),t(665,"tr",7)(666,"th",8),e(667,"Packages"),n(),t(668,"td",8),e(669,"@portinari/portinari-sync"),n(),t(670,"td",8),e(671,"@po-ui/ng-sync"),n(),t(672,"td",10),e(673,"v2"),n()(),t(674,"tr",7)(675,"th",8)(676,"a",29),e(677,"PoHttpInterceptor"),n()(),t(678,"td",8),e(679,"X-Portinari-No-Message"),n(),t(680,"td",8),e(681,"X-PO-No-Message"),n(),t(682,"td",10),e(683,"v2"),n()(),t(684,"tr",7)(685,"th",8)(686,"a",29),e(687,"PoHttpInterceptor"),n()(),t(688,"td",8),e(689,"X-Portinari-SCREEN-LOCK"),n(),t(690,"td",8),e(691,"X-PO-SCREEN-LOCK"),n(),t(692,"td",10),e(693,"v2"),n()(),t(694,"tr",7)(695,"th",8)(696,"a",29),e(697,"PoHttpInterceptor"),n()(),t(698,"td",8),e(699,"X-Portinari-No-Count-Pending-Requests"),n(),t(700,"td",8),e(701,"X-PO-No-Count-Pending-Requests"),n(),t(702,"td",10),e(703,"v2"),n()(),t(704,"tr",7)(705,"th",8)(706,"a",30),e(707,"PoPageDetail"),n()(),t(708,"td",8),e(709,"reconhecimento das a\xE7\xF5es via fun\xE7\xF5es no typescript"),n(),t(710,"td",8),e(711,"utiliza\xE7\xE3o das propriedades p-back, p-edit e p-remove"),n(),t(712,"td",10),e(713,"v2"),n()(),t(714,"tr",7)(715,"th",8)(716,"a",31),e(717,"PoPageEdit"),n()(),t(718,"td",8),e(719,"reconhecimento das a\xE7\xF5es via fun\xE7\xF5es no typescript"),n(),t(720,"td",8),e(721,"utiliza\xE7\xE3o das propriedades p-save, p-save-new e p-cancel"),n(),t(722,"td",10),e(723,"v2"),n()()()()()(),t(724,"blockquote")(725,"p"),e(726,"Ver mais detalhes no nosso "),t(727,"a",1),e(728,"CHANGELOG"),n(),e(729," e na nossa documenta\xE7\xE3o das ferramentas de migra\xE7\xE3o que automatizam a maioria dos breaking changes."),n()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var D=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:418,vars:0,consts:[["p-title","Contribuindo para o PO UI",1,"guides","app-portal"],["href","guides/development-flow#code-of-conduct"],["href","guides/development-flow#flow"],["href","guides/development-flow#create-issue"],["href","guides/development-flow#code-reproduction"],["href","guides/development-flow#contribute"],["href","guides/development-flow#setup"],["href","guides/development-flow#modifying-components"],["href","guides/development-flow#preview-changes"],["href","guides/development-flow#tests"],["href","guides/development-flow#lint"],["href","guides/development-flow#po-style"],["href","guides/development-flow#build"],["href","guides/development-flow#pr"],["id","code-of-conduct"],["href","https://github.com/po-ui/po-angular/blob/master/CODE_OF_CONDUCT.md"],["id","flow"],[1,"card-list-item"],["id","create-issue"],[1,"po-row"],[1,"po-pl-md-5","po-pr-lg-5"],["src","./assets/graphics/contribute/bug.png",1,"card-list-icon"],[1,"po-font-subtitle","po-pb-1"],["href","https://github.com/po-ui/po-angular/issues/439"],["href","https://github.com/po-ui/po-angular/pulls"],["id","code-reproduction"],["src","./assets/graphics/contribute/ambiente_teste.png",1,"card-list-icon"],["href","https://stackblitz.com/edit/po-ui"],["id","contribute"],["src","./assets/graphics/contribute/colabore.png",1,"card-list-icon"],[1,"po-font-text"],["id","setup"],["src","./assets/graphics/contribute/setup.png",1,"card-list-icon"],[1,"po-text-color-neutral-dark-40"],["href","https://git-scm.com/book/en/v2"],["href","https://github.com/po-ui/po-angular"],["id","modifying-components"],["src","./assets/graphics/contribute/modificando.png",1,"card-list-icon"],["href","https://github.com/po-ui/po-angular/blob/master/STYLEGUIDE.md"],["href","https://github.com/po-ui/po-angular/blob/master/HOW_TO_DOCUMENT.md"],["id","preview-changes"],["src","./assets/graphics/contribute/rodando_local.png",1,"card-list-icon"],["id","tests"],["src","./assets/graphics/contribute/teste_unitario.png",1,"card-list-icon"],["id","lint"],["src","./assets/graphics/contribute/lint.png",1,"card-list-icon"],["id","po-style"],["src","./assets/graphics/contribute/css.png",1,"card-list-icon"],["href","https://github.com/po-ui/po-style"],["href","https://github.com/po-ui/po-style/blob/master/README.md"],["id","build"],["src","./assets/graphics/contribute/build.png",1,"card-list-icon"],["href","https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md#commits"],["id","pr"],[1,"po-pl-sm-5","po-pl-md-5","po-pr-lg-5"],["src","./assets/graphics/contribute/pr.png",1,"card-list-icon"],["href","https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork"],["href","https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md#pull-requests"]],template:function(o,s){o&1&&(t(0,"po-page-default",0)(1,"h4"),e(2,"Obrigado pelo interesse em contribuir para a biblioteca PO UI!"),n(),t(3,"h2"),e(4,"Conte\xFAdo"),n(),t(5,"ul")(6,"li")(7,"a",1),e(8,"C\xF3digo de conduta"),n()(),t(9,"li")(10,"a",2),e(11,"Fluxo"),n(),t(12,"ul")(13,"li")(14,"a",3),e(15,"Criando "),t(16,"em"),e(17,"issue"),n(),e(18," no GitHub"),n()(),t(19,"li")(20,"a",4),e(21,"Criando reprodu\xE7\xE3o de c\xF3digo para nova "),t(22,"em"),e(23,"issue"),n()()(),t(24,"li")(25,"a",5),e(26,"Colaborando com o PO UI"),n()(),t(27,"li")(28,"a",6),e(29,"Setup Inicial"),n()(),t(30,"li")(31,"a",7),e(32,"Modificando Componentes"),n()(),t(33,"li")(34,"a",8),e(35,"Subindo as modifica\xE7\xF5es localmente"),n()(),t(36,"li")(37,"a",9),e(38,"Testes Unit\xE1rios"),n()(),t(39,"li")(40,"a",10),e(41,"ES Lint"),n()(),t(42,"li")(43,"a",11),e(44,"Po Style"),n()(),t(45,"li")(46,"a",12),e(47,"Build das modifica\xE7\xF5es"),n()(),t(48,"li")(49,"a",13),e(50,"Criando Pull Request"),n()()()()(),t(51,"p"),i(52,"a",14),n(),t(53,"h3"),e(54,"C\xF3digo de conduta"),n(),t(55,"p"),e(56,"Primeiramente, pedimos para que leiam com aten\xE7\xE3o nosso "),t(57,"a",15),e(58,"C\xF3digo de Conduta"),n(),e(59," para se inteirarem sobre nossas regras."),n(),t(60,"p"),i(61,"a",16),n(),t(62,"h2"),e(63,"Fluxo"),n(),t(64,"p"),e(65,"Este guia tem por objetivo definir as regras para cria\xE7\xE3o de "),t(66,"em"),e(67,"Issues"),n(),e(68," relacionadas \xE0 melhorias ou defeitos na biblioteca, assim como orientar no interesse em colaborar com o PO UI, definindo premissas para cria\xE7\xE3o de novas "),t(69,"em"),e(70,"Branchs"),n(),e(71,", "),t(72,"em"),e(73,"Pull Requests"),n(),e(74," e "),t(75,"em"),e(76,"Commits"),n(),e(77," no projeto PO UI. "),n(),t(78,"div")(79,"div",17),i(80,"a",18),t(81,"div",19)(82,"div",20),i(83,"img",21),t(84,"h3",22),e(85,"Criando uma "),t(86,"em"),e(87,"issue"),n(),e(88," no GitHub"),n(),t(89,"ul")(90,"li"),e(91,"Antes de tudo, se voc\xEA possui alguma quest\xE3o relacionada ao uso da biblioteca, bem como d\xFAvidas relacionadas a componentes, bibliotecas PO UI, por favor pergunte nos nossos "),t(92,"a",23),e(93,"canais de comunica\xE7\xE3o"),n(),e(94,"."),n(),t(95,"li"),e(96,"A lista de "),t(97,"em"),e(98,"issues"),n(),e(99," do reposit\xF3rio PO UI \xE9 de uso exclusivo para informe de "),t(100,"em"),e(101,"bugs"),n(),e(102," e requisi\xE7\xF5es de melhorias. "),t(103,"em"),e(104,"Issues"),n(),e(105," que n\xE3o se enquadrarem nisso ser\xE3o fechadas imediatamente."),n(),t(106,"li"),e(107,"Se voc\xEA tem uma nova "),t(108,"em"),e(109,"feature"),n(),e(110," para nos sugerir ou ent\xE3o deseja reportar um bug, por favor avalie se nas "),t(111,"a",24)(112,"em"),e(113,"Pull Requests"),n(),e(114," do PO UI"),n(),e(115," n\xE3o tem nenhuma submiss\xE3o anterior que resolva o problema, eliminando assim a eventual hip\xF3tese de duplicidade."),n(),t(116,"li"),e(117,"\xC9 requerido que voc\xEA descreva de maneira clara os passos necess\xE1rios para reproduzir a "),t(118,"em"),e(119,"issue"),n(),e(120," reportada. Entenda que, apesar de sermos sempre sol\xEDcitos e darmos o pronto-apoio em nossos canais, reproduzir erros sem evid\xEAncias diretas tomam um grande tempo da equipe."),n(),t(121,"li"),e(122,"As "),t(123,"em"),e(124,"issues"),n(),e(125," que n\xE3o tiverem uma descri\xE7\xE3o detalhada e um passo-a-passo para reprodu\xE7\xE3o ter\xE3o menor prioridade. Se em caso de solicita\xE7\xE3o do "),t(126,"em"),e(127,"core team"),n(),e(128," por maiores evid\xEAncias, o autor da "),t(129,"em"),e(130,"issue"),n(),e(131," ter\xE1 30 dias para resposta. Se neste per\xEDodo n\xE3o houver qualquer resposta, ent\xE3o a "),t(132,"em"),e(133,"issue"),n(),e(134," ser\xE1 fechada."),n()()()()(),t(135,"div",17),i(136,"a",25),t(137,"div",19)(138,"div",20),i(139,"img",26),t(140,"h3",22),e(141,"Criando reprodu\xE7\xE3o de c\xF3digo para nova "),t(142,"em"),e(143,"issue"),n()(),t(144,"ul")(145,"li"),e(146,"Crie uma nova aplica\xE7\xE3o em Angular incluindo o componente e o comportamento reportado para nossa an\xE1lise."),n(),t(147,"li"),e(148,"Adicione o m\xEDnimo de c\xF3digo necess\xE1rio para reprodu\xE7\xE3o do bug, facilitando assim a verifica\xE7\xE3o da situa\xE7\xE3o."),n(),t(149,"li"),e(150,"Publique a aplica\xE7\xE3o no GitHub e inclua o link ao criar a issue."),n(),t(151,"li"),e(152,"Pode-se tamb\xE9m usar o "),t(153,"a",27),e(154,"Stackblitz"),n(),e(155," para reproduzir o "),t(156,"em"),e(157,"bug"),n(),e(158," relatado na "),t(159,"em"),e(160,"issue"),n(),e(161,"."),n(),t(162,"li"),e(163,"Certifique-se de incluir os passos para reprodu\xE7\xE3o da issue. Estes passos devem ser claros e simples de seguir."),n()()()()(),t(164,"div",17),i(165,"a",28),t(166,"div",19)(167,"div",20),i(168,"img",29),t(169,"h3",22),e(170,"Colaborando com o PO UI"),n(),t(171,"p",30),e(172,"Mais uma vez agradecemos por dedicar seu tempo para contribuir com o PO UI! Antes de submeter uma "),t(173,"em"),e(174,"pull request"),n(),e(175,", pedimos pra que voc\xEA crie uma "),t(176,"em"),e(177,"issue"),n(),e(178," reportando uma eventual sugest\xE3o de melhoria, nova funcionalidade ou corre\xE7\xE3o de bug e nos deixe ciente de que deseja criar uma "),t(179,"em"),e(180,"pull request"),n(),e(181," para isso. Caso se trate de uma "),t(182,"em"),e(183,"issue"),n(),e(184," j\xE1 existente, por favor comente na "),t(185,"em"),e(186,"issue"),n(),e(187,". Isso nos ajuda a acompanhar as "),t(188,"em"),e(189,"pull requests"),n(),e(190," e tamb\xE9m evitar duplicidades."),n()()()(),t(191,"div",17),i(192,"a",31),t(193,"div",19)(194,"div",20),i(195,"img",32),t(196,"h3",22),e(197,"Setup Inicial"),n(),t(198,"blockquote",33),e(199,"Para seguir o guia \xE9 fundamental o conhecimento da "),t(200,"a",34),e(201,"ferramenta Git."),n()(),t(202,"ul")(203,"li"),e(204,"Para utilizar o PO UI, \xE9 pr\xE9-requisito ter o "),t(205,"code"),e(206,"Node.js"),n(),e(207," instalado (vers\xE3o 18.13.0 ou acima) e o seu gerenciador de pacote favorito na vers\xE3o mais atual."),n(),t(208,"li")(209,"p"),e(210,"\xC9 importante que tenha a vers\xE3o equivalente do Angular instalada. Instale-o via "),t(211,"code"),e(212,"npm"),n(),e(213," ou "),t(214,"code"),e(215,"yarn"),n(),e(216,":"),n(),t(217,"p"),e(218,"Instalando com npm:"),n(),t(219,"pre")(220,"code"),e(221,"npm i -g @angular/cli"),n()(),t(222,"p"),e(223,"Caso opte pelo yarn:"),n(),t(224,"pre")(225,"code"),e(226,"yarn global add @angular/cli"),n()()(),t(227,"li"),e(228,"Fa\xE7a um "),t(229,"a",35)(230,"em"),e(231,"fork"),n(),e(232," do reposit\xF3rio PO UI"),n(),e(233,". "),t(234,"blockquote"),e(235,"Membros do "),t(236,"em"),e(237,"Core Team"),n(),e(238," devem gerar uma nova "),t(239,"em"),e(240,"branch"),n(),e(241," ao inv\xE9s do "),t(242,"em"),e(243,"fork"),n(),e(244,"."),n()(),t(245,"li"),e(246,"Fa\xE7a "),t(247,"em"),e(248,"clone"),n(),e(249," do "),t(250,"em"),e(251,"fork"),n(),e(252," gerado."),n(),t(253,"li"),e(254,"Execute "),t(255,"code"),e(256,"npm install"),n(),e(257," para instalar as depend\xEAncias."),n()()()()(),t(258,"div",17),i(259,"a",36),t(260,"div",19)(261,"div",20),i(262,"img",37),t(263,"h3",22),e(264,"Modificando componentes"),n(),t(265,"ul")(266,"li"),e(267,"Localize o componente em "),t(268,"code"),e(269,"projects/<projeto>/src/lib"),n()(),t(270,"li"),e(271,"\xC9 muito importante que analise nossa documenta\xE7\xE3o sobre "),t(272,"a",38),e(273,"boas pr\xE1ticas"),n(),e(274," para entender a implementa\xE7\xE3o dos componentes PO UI."),n(),t(275,"li"),e(276,"Modifique a documenta\xE7\xE3o com base em nosso "),t(277,"a",39),e(278,"guia detalhado de documenta\xE7\xE3o"),n(),e(279,"."),n(),t(280,"li"),e(281,"Se as implementa\xE7\xF5es tamb\xE9m contemplarem estilo, note que dever\xE1 modific\xE1-las no reposit\xF3rio "),t(282,"a",11),e(283,"PO UI Style"),n(),e(284,"."),n(),t(285,"li"),e(286,"Fa\xE7a as implementa\xE7\xF5es desejadas, seja um novo componente, corre\xE7\xE3o ou melhoria, e "),t(287,"a",8),e(288,"verifique no portal"),n(),e(289," as modifica\xE7\xF5es realizadas tanto nos "),t(290,"em"),e(291,"samples"),n(),e(292," quanto na documenta\xE7\xE3o."),n()()()()(),t(293,"div",17),i(294,"a",40),t(295,"div",19)(296,"div",20),i(297,"img",41),t(298,"h3",22),e(299,"Subindo as modifica\xE7\xF5es localmente"),n(),t(300,"ul")(301,"li")(302,"p"),e(303,"As modifica\xE7\xF5es de c\xF3digo e documenta\xE7\xE3o realizadas podem ser conferidas executando os comandos:"),n(),t(304,"pre")(305,"code"),e(306,"npm run build:portal && ng serve portal"),n()()(),t(307,"li"),e(308,"O navegador exibir\xE1 o portal na url "),t(309,"code"),e(310,"http://localhost:4200/"),n(),e(311,"."),n(),t(312,"li"),e(313,"A partir disso, navegue at\xE9 o componente para verifica\xE7\xE3o das modifica\xE7\xF5es."),n(),t(314,"li"),e(315,"Pedimos para que atente para a inclus\xE3o da melhoria em nossos "),t(316,"em"),e(317,"samples"),n(),e(318,", em especial no sample "),t(319,"code"),e(320,"labs"),n(),e(321,". Na inviabilidade de usar os "),t(322,"em"),e(323,"samples"),n(),e(324," j\xE1 existentes, considere a necessidade de criar um novo "),t(325,"em"),e(326,"sample"),n(),e(327," de uso."),n()()()()(),t(328,"div",17),i(329,"a",42),t(330,"div",19)(331,"div",20),i(332,"img",43),t(333,"h3",22),e(334,"Testes Unit\xE1rios"),n(),t(335,"p"),e(336,"A cobertura de testes do PO UI \xE9 total. Isso significa que, obrigatoriamente, as modifica\xE7\xF5es devem ser totalmente testadas. Para tal, execute os testes nos arquivos "),t(337,"em"),e(338,".spec"),n(),e(339," contidos no mesmo diret\xF3rio do componente."),n(),t(340,"p"),e(341,"Para rodar os testes, rode o comando:"),n(),t(342,"pre")(343,"code"),e(344,"npm run test"),n()(),t(345,"p"),e(346,"A cobertura de testes pode ser avaliada no arquivo "),t(347,"code"),e(348,"index.html"),n(),e(349," existente no diret\xF3rio "),t(350,"code"),e(351,"./coverage"),n(),e(352,". "),n()()()(),t(353,"div",17),i(354,"a",44),t(355,"div",19)(356,"div",20),i(357,"img",45),t(358,"h3",22),e(359,"ESLint"),n(),t(360,"p"),e(361,"O PO UI utiliza o ESLint como linter padr\xE3o. Execute "),t(362,"code"),e(363,"ng lint"),n(),e(364," para fazer a checagem de c\xF3digo-fonte e verificar eventuais erros program\xE1ticos, estil\xEDsticos, constru\xE7\xF5es suspeitas, entre outros."),n()()()(),t(365,"div",17),i(366,"a",46),t(367,"div",19)(368,"div",20),i(369,"img",47),t(370,"h3",22),e(371,"PO Style"),n(),t(372,"p"),e(373,"As implementa\xE7\xF5es de estilo do PO UI s\xE3o armazenadas no "),t(374,"a",48),e(375,"reposit\xF3rio PO Style"),n(),e(376,"."),n(),t(377,"p"),e(378,"O desenvolvimento dos estilos \xE9 aberto para todos os desenvolvedores e agradecemos aos desenvolvedores que contribuem com melhorias e corre\xE7\xF5es de erros."),n(),t(379,"p"),e(380,"Para saber como voc\xEA pode pode participar na melhoria dos estilos, acesse o "),t(381,"a",49),e(382,"guia de implementa\xE7\xE3o de estilo"),n(),e(383,"."),n()()()(),t(384,"div",17),i(385,"a",50),t(386,"div",19)(387,"div",20),i(388,"img",51),t(389,"h3",22),e(390,"Build das modifica\xE7\xF5es"),n(),t(391,"p"),e(392,"Uma vez em que as modifica\xE7\xF5es desejadas forem concluidas e a documenta\xE7\xE3o esteja atualizada, execute os comandos abaixo para testagem no Portal PO UI."),n(),t(393,"pre")(394,"code"),e(395,`npm run build
npm run build:portal
ng serve portal`),n()(),t(396,"p"),e(397,"Revisadas as novas funcionalidades/corre\xE7\xF5es, \xE9 chegada a hora da gera\xE7\xE3o de commit. Confira as "),t(398,"a",52),e(399,"regras para cria\xE7\xE3o de commit"),n(),e(400,"."),n()()()(),t(401,"div",17),i(402,"a",53),t(403,"div",19)(404,"div",54),i(405,"img",55),t(406,"h3",22),e(407,"Criando Pull Request"),n(),t(408,"p"),e(409,"Crie uma nova pull request com a master branch como base. Confira "),t(410,"a",56),e(411,"como criar pull request a partir de um fork"),n(),e(412,"."),n(),t(413,"p"),e(414,"\xC9 importante que siga guia contendo as "),t(415,"a",57),e(416,"regras para gera\xE7\xE3o de Pull Requests"),n(),e(417,"."),n()()()()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var M=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:190,vars:0,consts:[["p-title","Primeiros passos",1,"guides","app-portal"],["href","https://cli.angular.io/"],[1,"language-json"],["href","http://localhost:4200"],[1,"po-text-center"],["src","./assets/graphics/app-running.png","width","660px"],["href","/documentation/po-page-login"],["href","/documentation/po-modal-password-recovery"],["href","/documentation/po-page-blocked-user"],["href","/documentation/po-page-dynamic-table"],["href","/documentation"]],template:function(o,s){o&1&&(t(0,"po-page-default",0)(1,"h3"),e(2,"Pr\xE9-requisitos"),n(),t(3,"p"),e(4,"Para come\xE7ar a utilizar o "),t(5,"strong"),e(6,"PO UI"),n(),e(7," \xE9 pr\xE9-requisito ter o "),t(8,"code"),e(9,"Node.js"),n(),e(10," instalado (vers\xE3o 18.19.x ou acima) e o seu gerenciador de pacote favorito na vers\xE3o mais atual. Caso voc\xEA ainda n\xE3o tenha instalado o pacote "),t(11,"code"),e(12,"@angular/cli"),n(),e(13,", instale-o via "),t(14,"code"),e(15,"npm"),n(),e(16," ou "),t(17,"code"),e(18,"yarn"),n(),e(19,"."),n(),t(20,"p"),e(21,"Instalando com npm:"),n(),t(22,"pre")(23,"code"),e(24,`npm i -g @angular/cli@19
`),n()(),t(25,"p"),e(26,"Caso prefira instalar com o yarn:"),n(),t(27,"pre")(28,"code"),e(29,`yarn global add @angular/cli@19
`),n()(),t(30,"h3"),e(31,"Passo 1 - Crie o seu primeiro projeto"),n(),t(32,"blockquote")(33,"p"),e(34,"Caso voc\xEA j\xE1 tenha um projeto criado e deseje apenas incluir o "),t(35,"strong"),e(36,"Po"),n(),e(37,", pule esta etapa e v\xE1 para o "),t(38,"strong"),e(39,"Passo 1.1"),n(),e(40,"."),n()(),t(41,"p"),e(42,"O "),t(43,"a",1),e(44,"Angular CLI"),n(),e(45," se encarrega de construir toda estrutura inicial do projeto. Para isso, execute o seguinte comando:"),n(),t(46,"pre")(47,"code"),e(48,`ng new my-po-project --skip-install
`),n()(),t(49,"blockquote")(50,"p"),e(51,"O par\xE2metro "),t(52,"code"),e(53,"--skip-install"),n(),e(54," permite criar o projeto, contudo, n\xE3o instalar\xE1 as depend\xEAncias automaticamente."),n()(),t(55,"h4"),e(56,"Passo 1.1 - Instalando as depend\xEAncias"),n(),t(57,"p"),e(58,"Antes de executar a instala\xE7\xE3o ou inserir o "),t(59,"strong"),e(60,"Po"),n(),e(61," no seu projeto existente, \xE9 necess\xE1rio verificar as depend\xEAncias do seu projeto, algumas delas precisam estar de acordo com a vers\xE3o do "),t(62,"strong"),e(63,"Po"),n(),e(64," e Angular (elas podem ser encontradas no arquivo "),t(65,"code"),e(66,"package.json"),n(),e(67," localizado na raiz da aplica\xE7\xE3o)."),n(),t(68,"p"),e(69,"Veja abaixo a lista de depend\xEAncias e as vers\xF5es compat\xEDveis, elas devem ser conferidas e se necess\xE1rio, ajustadas no seu projeto."),n(),t(70,"pre")(71,"code",2),e(72,`  "dependencies": {
    "@angular/animations": "~19.0.0",
    "@angular/common": "~19.0.0",
    "@angular/compiler": "~19.0.0",
    "@angular/core": "~19.0.0",
    "@angular/forms": "~19.0.0",
    "@angular/platform-browser": "~19.0.0",
    "@angular/platform-browser-dynamic": "~19.0.0",
    "@angular/router": "~19.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.15.0"
    ...
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~19.2.3",
    "@angular-devkit/schematics": "~19.0.5",
    "@angular/cli": "~19.0.5",
    "@angular/compiler-cli": "~19.0.0",
    ...
    "typescript": "~5.6.2"
  }
`),n()(),t(73,"p"),e(74,"Ap\xF3s verificar se estas depend\xEAncias do seu projeto est\xE3o com as vers\xF5es compat\xEDveis declaradas acima, acesse a pasta raiz do seu projeto e execute o comando abaixo:"),n(),t(75,"p"),e(76,"Instalando com npm:"),n(),t(77,"pre")(78,"code"),e(79,`npm install
`),n()(),t(80,"p"),e(81,"Caso prefira instalar com o yarn:"),n(),t(82,"pre")(83,"code"),e(84,`yarn install
`),n()(),t(85,"h3"),e(86,"Passo 2 - Adiconando o pacote @po-ui/ng-components"),n(),t(87,"p"),e(88,"Utilizando o comando "),t(89,"code"),e(90,"ng add"),n(),e(91," do "),t(92,"a",1),e(93,"Angular CLI"),n(),e(94,", vamos adicionar o "),t(95,"strong"),e(96,"Po"),n(),e(97," em seu projeto e o mesmo se encarregar\xE1 de configurar o tema, instalar o pacote e importar o m\xF3dulo do "),t(98,"strong"),e(99,"Po"),n(),e(100,". Al\xE9m de importar tamb\xE9m o modulo "),t(101,"strong"),e(102,"HttpClientModule"),n(),e(103,"."),n(),t(104,"p"),e(105,"Execute o comando abaixo na pasta raiz do seu projeto:"),n(),t(106,"pre")(107,"code"),e(108,`ng add @po-ui/ng-components
`),n()(),t(109,"blockquote")(110,"p"),e(111,"Ao executar o comando acima, ser\xE1 perguntado se deseja incluir uma estrutura inicial em seu projeto com menu lateral, p\xE1gina e toolbar, utilizando componentes do "),t(112,"strong"),e(113,"Po"),n(),e(114,", "),t(115,"strong"),e(116,"caso desejar, apenas informe: "),t(117,"code"),e(118,"Y"),n()(),e(119,"."),n()(),t(120,"h3"),e(121,"Passo 3 - Rode o seu projeto"),n(),t(122,"p"),e(123,"Agora basta executar mais um comando para subir a aplica\xE7\xE3o e ver o seu projeto rodando no "),t(124,"em"),e(125,"browser"),n(),e(126," ;)."),n(),t(127,"pre")(128,"code"),e(129,`ng serve
`),n()(),t(130,"p"),e(131,"Abra o "),t(132,"em"),e(133,"browser"),n(),e(134," e acesse a url "),t(135,"a",3),e(136,"http://localhost:4200"),n(),e(137,". Pronto! Se voc\xEA escolheu incluir uma estrutura inicial em seu projeto, ele deve estar parecido com essa imagem:"),n(),t(138,"p",4),i(139,"img",5),n(),i(140,"hr"),t(141,"h3"),e(142,"E agora?"),n(),t(143,"p"),e(144,"Agora \xE9 s\xF3 abrir seu "),t(145,"strong"),e(146,"editor / IDE"),n(),e(147," favorito e come\xE7ar a trabalhar no seu projeto."),n(),t(148,"p"),e(149,"Caso voc\xEA queira utilizar nossos componentes de templates, como o "),t(150,"strong")(151,"a",6),e(152,"po-page-login"),n()(),e(153,", "),t(154,"strong")(155,"a",7),e(156,"po-modal-password-recovery"),n()(),e(157,", "),t(158,"strong")(159,"a",8),e(160,"po-page-blocked-user"),n()(),e(161,", "),t(162,"strong")(163,"a",9),e(164,"po-page-dynamic-table"),n()(),e(165," entre outros, basta adicionar o pacote "),t(166,"code"),e(167,"@po-ui/ng-templates"),n(),e(168," executando o comando abaixo:"),n(),t(169,"pre")(170,"code"),e(171,`ng add @po-ui/ng-templates
`),n()(),t(172,"blockquote")(173,"p"),e(174,"Ao executar este comando, ser\xE1 instalado o pacote "),t(175,"code"),e(176,"@po-ui/ng-templates"),n(),e(177," e configurado o "),t(178,"code"),e(179,"PoTemplatesModules"),n(),e(180," no "),t(181,"code"),e(182,"app.module"),n(),e(183," somente se sua aplica\xE7\xE3o for configurada com m\xF3dulos."),n()(),t(184,"p"),e(185,"A partir dai o seu projeto est\xE1 preparado para receber outros componentes do "),t(186,"strong")(187,"a",10),e(188,"Po"),n()(),e(189,"! \\o/"),n()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var w=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:242,vars:0,consts:[["p-title","Guia de uso para Gr\xE1ficos",1,"guides","app-portal"],["href","guides/guide-charts#area"],["href","guides/guide-charts#bar"],["href","guides/guide-charts#column"],["href","guides/guide-charts#column-line"],["href","guides/guide-charts#gauge-semicircle"],["href","guides/guide-charts#line"],["href","guides/guide-charts#pie"],["href","guides/guide-charts#donut"],["href","guides/guide-charts#guide-colors"],["id","area"],["id","bar"],["id","column"],["id","column-line"],["id","gauge-semicircle"],["id","line"],["id","pie"],["id","donut"],["id","guide-colors"]],template:function(o,s){o&1&&(t(0,"po-page-default",0)(1,"p"),e(2,"Este guia tem o objetivo de informar pr\xE1ticas de uso para cada tipo de gr\xE1fico do PO UI, o que devemos evitar ao utilizar determinado gr\xE1fico e tamb\xE9m as boas pr\xE1ticas relacionadas \xE0s cores nos gr\xE1ficos."),n(),t(3,"p"),e(4,"Gr\xE1ficos em geral t\xEAm a fun\xE7\xE3o de garantir que as pessoas de qualquer cultura ou pa\xEDs tenham entendimento claro para tomar as melhores decis\xF5es com base nas suas visualiza\xE7\xF5es."),n(),t(5,"h2"),e(6,"Conte\xFAdo"),n(),t(7,"ul")(8,"li")(9,"a",1),e(10,"Gr\xE1fico de \xE1rea"),n()(),t(11,"li")(12,"a",2),e(13,"Gr\xE1fico de barra"),n()(),t(14,"li")(15,"a",3),e(16,"Gr\xE1fico de coluna"),n()(),t(17,"li")(18,"a",4),e(19,"Gr\xE1fico de coluna com linha"),n()(),t(20,"li")(21,"a",5),e(22,"Gr\xE1fico de gauge semicircular"),n()(),t(23,"li")(24,"a",6),e(25,"Gr\xE1fico de linha"),n()(),t(26,"li")(27,"a",7),e(28,"Gr\xE1fico de pizza"),n()(),t(29,"li")(30,"a",8),e(31,"Gr\xE1fico de rosca"),n()(),t(32,"li")(33,"a",9),e(34,"Guia de cores"),n()()(),i(35,"br"),t(36,"p"),i(37,"a",10),n(),t(38,"h2"),e(39,"Gr\xE1fico de \xE1rea (Area Chart)"),n(),t(40,"p"),e(41,"O gr\xE1fico de \xE1rea combina o gr\xE1fico de linhas e o gr\xE1fico de barras para mostrar como os valores num\xE9ricos de um ou mais grupos mudam ao longo da progress\xE3o de uma segunda vari\xE1vel, normalmente a do tempo. Um gr\xE1fico de \xE1rea se distingue de um gr\xE1fico de linha pela adi\xE7\xE3o de sombreamento entre as linhas e uma linha de base, como em um gr\xE1fico de barras."),n(),t(42,"p"),e(43,"A vers\xE3o dispon\xEDvel no PO UI \xE9 o gr\xE1fico de \xE1rea de sobreposi\xE7\xE3o ou em ingl\xEAs, "),t(44,"em"),e(45,"overlapping area chart"),n(),e(46,"."),n(),t(47,"h4"),e(48,"Quando usar?"),n(),t(49,"ul")(50,"li"),e(51,"Para representar os totais acumulados usando n\xFAmeros ou porcentagens (gr\xE1ficos de \xE1rea empilhados, neste caso) ao longo do tempo;"),n(),t(52,"li"),e(53,"Mostrar tend\xEAncias ao longo do tempo entre os atributos relacionados."),n()(),i(54,"br"),t(55,"p"),i(56,"a",11),n(),t(57,"h2"),e(58,"Gr\xE1fico de barra (Bar Chart)"),n(),t(59,"p"),e(60,"O gr\xE1fico de barra \xE9 organizado de forma temporal ou por t\xF3picos ao longo do eixo vertical (y) e seus valores t\xEAm varia\xE7\xE3o ao longo do eixo vertical (x). \xC9 uma varia\xE7\xE3o direta da estrutura do gr\xE1fico de coluna."),n(),t(61,"h4"),e(62,"Quando usar?"),n(),t(63,"ul")(64,"li"),e(65,"Demonstrar as varia\xE7\xF5es de dados em um per\xEDodo de tempo;"),n(),t(66,"li"),e(67,"Ilustrar compara\xE7\xF5es entre t\xF3picos diretamente relacionados."),n()(),t(68,"h4"),e(69,"Boas pr\xE1ticas"),n(),t(70,"p"),e(71,"Prefira utilizar o gr\xE1fico de barra quando for necess\xE1rio muitos itens temporais ou de t\xF3picos."),n(),i(72,"br"),t(73,"p"),i(74,"a",12),n(),t(75,"h2"),e(76,"Gr\xE1fico de coluna (Column Chart)"),n(),t(77,"p"),e(78,"O gr\xE1fico de coluna \xE9 organizado de forma temporal ou por t\xF3picos ao longo do eixo horizontal (x) e seus valores t\xEAm varia\xE7\xE3o ao longo do eixo vertical (y)."),n(),t(79,"h4"),e(80,"Quando usar?"),n(),t(81,"ul")(82,"li"),e(83,"Demonstrar as varia\xE7\xF5es de dados em um per\xEDodo de tempo;"),n(),t(84,"li"),e(85,"Ilustrar compara\xE7\xF5es entre t\xF3picos diretamente relacionados."),n()(),t(86,"h4"),e(87,"Boas pr\xE1ticas"),n(),t(88,"p"),e(89,`Prefira utilizar o gr\xE1fico de barras caso seja necess\xE1rio muitos itens,
pois o gr\xE1fico de coluna cont\xE9m menos espa\xE7o para que sejam exibidos os r\xF3tulos no eixo horizontal.`),n(),i(90,"br"),t(91,"p"),i(92,"a",13),n(),t(93,"h2"),e(94,"Gr\xE1fico de pareto / coluna com linha (Column and Line Chart)"),n(),t(95,"p"),e(96,"O gr\xE1fico de pareto cont\xE9m colunas e um gr\xE1fico de linhas, onde os valores individuais s\xE3o representados em ordem decrescente por colunas e o total acumulado \xE9 representado pela linha."),n(),t(97,"h4"),e(98,"Quando usar?"),n(),t(99,"ul")(100,"li"),e(101,"Destacar o mais importante entre um conjunto de fatores, por exemplo:"),t(102,"ul")(103,"li"),e(104,"Sempre que uma equipe n\xE3o estiver certa sobre onde direcionar seus esfor\xE7os de melhoria deve usar uma an\xE1lise de pareto."),n()()()(),i(105,"br"),t(106,"p"),i(107,"a",14),n(),t(108,"h2"),e(109,"Gr\xE1fico de gauge semicircular (Semi Circle Gauge Chart)"),n(),t(110,"p"),e(111,"O gr\xE1fico de gauge semicircular \xE9 uma varia\xE7\xE3o direta do gauge tradicional."),n(),t(112,"h4"),e(113,"Quando usar?"),n(),t(114,"ul")(115,"li"),e(116,"Demonstrar c\xE1lculos de desempenho por um certo per\xEDodo (em andamento ou como hist\xF3rico), por exemplo: "),t(117,"ul")(118,"li"),e(119,"Desempenho de vendas de uma equipe em rela\xE7\xE3o a meta."),n()()()(),i(120,"br"),t(121,"p"),i(122,"a",15),n(),t(123,"h2"),e(124,"Gr\xE1fico de linha (Line Chart)"),n(),t(125,"p"),e(126,"O gr\xE1fico de linha pode exibir dados cont\xEDnuos ao longo de um per\xEDodo de tempo, definidos em rela\xE7\xE3o a uma escala comum. Os dados de categorias s\xE3o comumente distribu\xEDdos uniformemente ao longo do eixo horizontal e todos os dados de valores que tem varia\xE7\xE3o s\xE3o subdivididos igualmente ao longo do eixo vertical. "),n(),t(127,"h4"),e(128,"Quando usar?"),n(),t(129,"ul")(130,"li"),e(131,"Quando deseja exibir tend\xEAncias nos dados ao longo do tempo, por exemplo:"),t(132,"ul")(133,"li"),e(134,"Demonstrar a altera\xE7\xE3o no pre\xE7o das a\xE7\xF5es em um per\xEDodo de tempo;"),n(),t(135,"li"),e(136,"Quantidade de visitas em um site durante um m\xEAs."),n()()()(),t(137,"h4"),e(138,"Boas pr\xE1ticas"),n(),t(139,"ul")(140,"li"),e(141,"Ideal para demonstrar a frequ\xEAncia em que ocorrem os dados;"),n(),t(142,"li"),e(143,"N\xE3o \xE9 recomendado para caso de distribui\xE7\xE3o de dados, neste caso pode-se utilizar o gr\xE1fico de coluna."),n()(),i(144,"br"),t(145,"p"),i(146,"a",16),n(),t(147,"h2"),e(148,"Gr\xE1fico de pizza (Pie Chart)"),n(),t(149,"p"),e(150,"O gr\xE1fico de pizza ou torta \xE9 adequado para mostrar partes divididas de um todo, pois representa fatias que somadas comp\xF5em 100% da forma."),n(),t(151,"h4"),e(152,"Quando usar?"),n(),t(153,"ul")(154,"li"),e(155,"Para demonstrar propor\xE7\xF5es, por exemplo:"),t(156,"ul")(157,"li"),e(158,"Porcentagem de or\xE7amento gasto em diferentes departamentos;"),n(),t(159,"li"),e(160,"Respostas de pesquisa;"),n(),t(161,"li"),e(162,"Divis\xE3o de tempo em uma atividade."),n()()()(),t(163,"h4"),e(164,"Boas pr\xE1ticas"),n(),t(165,"ul")(166,"li"),e(167,"N\xE3o \xE9 recomendado para comparar dados;"),n(),t(168,"li"),e(169,"Evite gr\xE1ficos de pizza com mais de cinco partes, pois isso interfere diretamente no entendimento do gr\xE1fico ou visualiza\xE7\xE3o dos valores."),n()(),i(170,"br"),t(171,"p"),i(172,"a",17),n(),t(173,"h2"),e(174,"Gr\xE1fico de rosca (Donut Chart)"),n(),t(175,"p"),e(176,"O gr\xE1fico de rosca \xE9 adequado para mostrar partes de um todo, pois representa fatias que somadas comp\xF5em 100% de algo. \xC9 uma varia\xE7\xE3o visual do gr\xE1fico de pizza."),n(),t(177,"h4"),e(178,"Quando usar?"),n(),t(179,"ul")(180,"li"),e(181,"Para demonstrar propor\xE7\xF5es comparativas em porcentagem ou quantidade."),n()(),t(182,"h4"),e(183,"Boas pr\xE1ticas:"),n(),t(184,"p"),e(185,'O valor m\xEDnimo de visualiza\xE7\xE3o deve ser de 10% do total para demonstrar as informa\xE7\xF5es no gr\xE1fico, caso tenha mais de um item abaixo do valor de 10%, junte-os em uma sess\xE3o agrupada "Outros" e especifique o conte\xFAdo que o comp\xF5e na legenda.'),n(),i(186,"br"),t(187,"p"),i(188,"a",18),n(),t(189,"h2"),e(190,"Guia de cores"),n(),t(191,"h4"),e(192,"Boas pr\xE1ticas"),n(),t(193,"ul")(194,"li"),e(195,"Use uma \xFAnica cor para representar o mesmo tipo de dados. Por exemplo: para representar vendas m\xEAs a m\xEAs em um gr\xE1fico de barras, use uma \xFAnica cor. Outro exemplo: para comparar as vendas do ano passado com as do ano vigente em um gr\xE1fico agrupado, prefira utilizar uma cor diferente para cada ano;"),n(),t(196,"li"),e(197,"Certifique-se de que existe contraste suficiente entre as cores. Por exemplo: utilize cores com contraste para facilitar a assimila\xE7\xE3o do usu\xE1rio referente \xE0s informa\xE7\xF5es traduzidas no gr\xE1fico;"),n(),t(198,"li"),e(199,"Escolha cores adequadamente. Algumas cores se destacam mais do que outras, dando peso desnecess\xE1rio ou direcionamento errado aos dados."),n(),t(200,"li"),e(201,"Prefira utilizar uma \xFAnica cor com sombra vari\xE1vel ou um espectro entre duas cores an\xE1logas para mostrar intensidade;"),n(),t(202,"li"),e(203,"Destaque a informa\xE7\xE3o mais relevante com cores fortes e utilize a mesma com tons com menos contraste para complementar o gr\xE1fico."),n()(),t(204,"h4"),e(205,"Evite"),n(),t(206,"ul")(207,"li"),e(208,"N\xE3o use vermelho para n\xFAmeros positivos ou verde para n\xFAmeros negativos. Essas associa\xE7\xF5es de cores s\xE3o decisivas na interpreta\xE7\xE3o do usu\xE1rio;"),n(),t(209,"li"),e(210,"N\xE3o utilize combina\xE7\xF5es de cores de alto contraste, como vermelho e verde ou azul e amarelo (somente com direcionamento da marca);"),n(),t(211,"li"),e(212,"N\xE3o utilize cores com baixo contraste, como azul claro e cinza (somente com direcionamento da marca)."),n()(),t(213,"h4"),e(214,"Op\xE7\xF5es de combina\xE7\xE3o de cores"),n(),t(215,"p"),e(216,"Modelos de cores que podem combinar e facilitar a visualiza\xE7\xE3o dos gr\xE1ficos: "),n(),t(217,"ul")(218,"li")(219,"p"),e(220,"Cinza e azul:"),n(),t(221,"ul")(222,"li"),e(223,"Para informa\xE7\xF5es de atual e passado, mas aten\xE7\xE3o com o n\xEDvel do contraste para que sejam leg\xEDveis as diferen\xE7as entre os dados;"),n()()(),t(224,"li")(225,"p"),e(226,"Azul e laranja:"),n(),t(227,"ul")(228,"li"),e(229,"Azul para indica\xE7\xE3o de dados positivos e laranja para negativos;"),n()()(),t(230,"li")(231,"p"),e(232,"Verde e vermelho:"),n(),t(233,"ul")(234,"li"),e(235,"Verde sinaliza dados positivo e vermelho os negativos;"),n()()(),t(236,"li")(237,"p"),e(238,"Azul, cinza e verde:"),n(),t(239,"ul")(240,"li"),e(241,"Para uma composi\xE7\xE3o de tr\xEAs cores."),n()()()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var k=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:432,vars:0,consts:[["p-title","Migra\xE7\xE3o do PO UI para V2",1,"guides","app-portal"],["href","https://update.angular.io/"],["href","https://angular.io/cli/update"],["href","guides/migration-poui-v2#components"],["href","guides/migration-poui-v2#sync"],["id","components"],[1,"po-text-color-neutral-dark-40"],["href","http://po-ui.io/documentation/po-page-change-password"],["href","http://po-ui.io/documentation/po-button-group"],["href","http://po-ui.io/documentation/po-menu"],["href","http://po-ui.io/documentation/po-menu-panel"],["href","http://po-ui.io/documentation/po-navbar"],["href","http://po-ui.io/documentation/po-page-list"],["href","http://po-ui.io/documentation/po-page-default"],["href","http://po-ui.io/documentation/po-popup"],["href","http://po-ui.io/documentation/po-step"],["href","http://po-ui.io/documentation/po-table"],["href","http://po-ui.io/documentation/po-toolbar"],["id","sync"]],template:function(o,s){o&1&&(t(0,"po-page-default",0)(1,"p"),e(2,"Este guia cont\xE9m informa\xE7\xF5es sobre a migra\xE7\xE3o do seu projeto para a vers\xE3o 2 do PO UI."),n(),t(3,"h2"),e(4,"Atualizando o projeto com Angular"),n(),t(5,"p"),e(6,`Antes de atualizar a vers\xE3o do PO UI, \xE9 importante que voc\xEA tenha atualizado o seu projeto para
o Angular 9, executando o comando abaixo:`),n(),t(7,"p")(8,"code"),e(9,"ng update @angular/cli@9 @angular/core@9"),n()(),t(10,"blockquote")(11,"p"),e(12,"Para realizar a migra\xE7\xE3o completa e avaliar se n\xE3o precisa fazer alguma altera\xE7\xE3o veja o "),t(13,"a",1)(14,"strong"),e(15,"Guia de Upgrade do Angular"),n()(),e(16,"."),n()(),t(17,"p"),e(18,`O nosso pacote anterior possu\xEDa depend\xEAncias que eram compat\xEDveis com a vers\xE3o 8 do Angular, portanto
pode ser preciso utilizar a `),t(19,"em"),e(20,"flag"),n(),t(21,"code"),e(22,"--force"),n(),e(23,` para que o Angular realize a migra\xE7\xE3o do seu projeto, ignorando a vers\xE3o das depend\xEAncias.
Para avaliar as `),t(24,"em"),e(25,"flags"),n(),e(26," dispon\xEDveis veja a "),t(27,"a",2)(28,"strong"),e(29,"documenta\xE7\xE3o do ng update"),n()(),e(30,"."),n(),t(31,"h2"),e(32,"Atualizando o PO UI"),n(),t(33,"p"),e(34,"Para facilitar a migra\xE7\xE3o do seu projeto para o PO UI v2, implementamos o "),t(35,"code"),e(36,"ng update"),n(),e(37," nos pacotes abaixo:"),n(),t(38,"ul")(39,"li")(40,"a",3)(41,"strong"),e(42,"@po-ui/ng-components"),n()()(),t(43,"li")(44,"a",4)(45,"strong"),e(46,"@po-ui/ng-sync"),n()()()(),t(47,"p"),e(48,"O "),t(49,"code"),e(50,"ng update"),n(),e(51," ajudar\xE1 nas altera\xE7\xF5es necess\xE1rias para seu projeto seguir atualizado, que s\xE3o elas:"),n(),t(52,"ul")(53,"li"),e(54,"Alterar maioria dos conte\xFAdos relacionados ao "),t(55,"strong"),e(56,"BREAKING CHANGES"),n(),e(57," e "),t(58,"strong"),e(59,"Deprecia\xE7\xF5es"),n(),e(60," no seu projeto;"),n(),t(61,"li"),e(62,"Atualizar as vers\xF5es dos pacotes "),t(63,"code"),e(64,"@po-ui"),n(),e(65,"."),n()(),t(66,"p"),e(67,"Mas \xE9 importante conhecer os "),t(68,"strong"),e(69,"BREAKING CHANGES"),n(),e(70," e "),t(71,"strong"),e(72,"Deprecia\xE7\xF5es"),n(),e(73," para realizar as altera\xE7\xF5es manualmente caso necess\xE1rio."),n(),t(74,"p"),i(75,"a",5),n(),t(76,"h3"),e(77,"ng update @po-ui/ng-components"),n(),t(78,"p"),e(79,"Para poder utilizar o comando e realizar a migra\xE7\xE3o, execute os comandos abaixo:"),n(),t(80,"p")(81,"code"),e(82,"npm i --save @po-ui/ng-components@2"),n()(),t(83,"p")(84,"code"),e(85,"ng update @po-ui/ng-components --from 1 --migrate-only"),n()(),t(86,"h4"),e(87,"Breaking Changes"),n(),t(88,"p"),e(89,"Nesta nova vers\xE3o o nome dos pacotes foram alterados, de acordo com a tabela abaixo:"),n(),t(90,"table")(91,"thead")(92,"tr")(93,"th",6),e(94,"Pacotes"),n(),t(95,"th",6),e(96,"Substitu\xEDdo por"),n()()(),t(97,"tbody")(98,"tr")(99,"td")(100,"code"),e(101,"@portinari/portinari-ui"),n()(),t(102,"td")(103,"code"),e(104,"@po-ui/ng-components"),n()()(),t(105,"tr")(106,"td")(107,"code"),e(108,"@portinari/portinari-templates"),n()(),t(109,"td")(110,"code"),e(111,"@po-ui/ng-templates"),n()()(),t(112,"tr")(113,"td")(114,"code"),e(115,"@portinari/portinari-code-editor"),n()(),t(116,"td")(117,"code"),e(118,"@po-ui/ng-code-editor"),n()()(),t(119,"tr")(120,"td")(121,"code"),e(122,"@portinari/tslint"),n()(),t(123,"td")(124,"code"),e(125,"@po-ui/ng-tslint"),n()()(),t(126,"tr")(127,"td")(128,"code"),e(129,"@portinari/style"),n()(),t(130,"td")(131,"code"),e(132,"@po-ui/style"),n()()()()(),t(133,"p"),e(134,"Tamb\xE9m foi realizado remo\xE7\xF5es das propriedades, onde passam a valer as novas defini\xE7\xF5es, veja a tabela abaixo:"),n(),t(135,"table")(136,"thead")(137,"tr")(138,"th",6),e(139,"Componentes"),n(),t(140,"th",6),e(141,"Anteriormente"),n(),t(142,"th",6),e(143,"Substitu\xEDdo por"),n()()(),t(144,"tbody")(145,"tr")(146,"td")(147,"code"),e(148,"PoFieldModule"),n()(),t(149,"td")(150,"code"),e(151,"[p-focus]"),n()(),t(152,"td")(153,"code"),e(154,"[p-auto-focus]"),n()()(),t(155,"tr")(156,"td")(157,"code"),e(158,"PoHttpResquestInterceptor"),n()(),t(159,"td")(160,"code"),e(161,"X-Portinari-Screen-Lock"),n()(),t(162,"td")(163,"code"),e(164,"X-PO-Screen-Lock"),n()()(),t(165,"tr")(166,"td")(167,"code"),e(168,"PoHttpResquestInterceptor"),n()(),t(169,"td")(170,"code"),e(171,"X-Portinari-No-Count-Pending-Requests"),n()(),t(172,"td")(173,"code"),e(174,"X-PO-No-Count-Pending-Requests"),n()()(),t(175,"tr")(176,"td")(177,"code"),e(178,"PoHttpInterceptor"),n()(),t(179,"td")(180,"code"),e(181,"X-Portinari-No-Message"),n()(),t(182,"td")(183,"code"),e(184,"X-PO-No-Message"),n()()(),t(185,"tr")(186,"td")(187,"code"),e(188,"PoPageEdit"),n()(),t(189,"td",6),e(190,"Possuir a a\xE7\xE3o "),t(191,"code"),e(192,"cancel() {}"),n(),e(193," no TS"),n(),t(194,"td")(195,"code"),e(196,"(p-cancel)"),n()()(),t(197,"tr")(198,"td")(199,"code"),e(200,"PoPageEdit"),n()(),t(201,"td",6),e(202,"Possuir a a\xE7\xE3o "),t(203,"code"),e(204,"save() {}"),n(),e(205," no TS"),n(),t(206,"td")(207,"code"),e(208,"(p-save)"),n()()(),t(209,"tr")(210,"td")(211,"code"),e(212,"PoPageEdit"),n()(),t(213,"td",6),e(214,"Possuir a a\xE7\xE3o "),t(215,"code"),e(216,"saveNew() {}"),n(),e(217," no TS"),n(),t(218,"td")(219,"code"),e(220,"(p-save-new)"),n()()(),t(221,"tr")(222,"td")(223,"code"),e(224,"PoPageDetail"),n()(),t(225,"td",6),e(226,"Possuir a a\xE7\xE3o "),t(227,"code"),e(228,"back() {}"),n(),e(229," no TS"),n(),t(230,"td")(231,"code"),e(232,"(p-back)"),n()()(),t(233,"tr")(234,"td")(235,"code"),e(236,"PoPageDetail"),n()(),t(237,"td",6),e(238,"Possuir a a\xE7\xE3o "),t(239,"code"),e(240,"edit() {}"),n(),e(241," no TS"),n(),t(242,"td")(243,"code"),e(244,"(p-edit)"),n()()(),t(245,"tr")(246,"td")(247,"code"),e(248,"PoPageDetail"),n()(),t(249,"td",6),e(250,"Possuir a a\xE7\xE3o "),t(251,"code"),e(252,"remove() {}"),n(),e(253," no TS"),n(),t(254,"td")(255,"code"),e(256,"(p-remove)"),n()()()()(),t(257,"h4"),e(258,"Deprecia\xE7\xE3o"),n(),t(259,"p"),e(260,"Nas vers\xF5es "),t(261,"code"),e(262,"1.x.x"),n(),e(263," era poss\xEDvel passar fun\xE7\xF5es para nossas propriedades sem informar o "),t(264,"code"),e(265,".bind(this)"),n(),e(266,`,
pois captur\xE1vamos o componente pai e consegu\xEDamos acessar o contexto corrente. Por\xE9m depreciamos este comportamento,
agora necessita passar a refer\xEAncia da fun\xE7\xE3o utilizando o `),t(267,"code"),e(268,".bind(this)"),n(),e(269," para que o mesmo execute a fun\xE7\xE3o no contexto invocado, tanto em fun\xE7\xF5es dentro de "),t(270,"em"),e(271,"arrays"),n(),e(272," quanto em fun\xE7\xF5es via "),t(273,"em"),e(274,"property bind"),n(),e(275,"."),n(),t(276,"p"),e(277,"Os componentes que sofrer\xE3o esta deprecia\xE7\xE3o, s\xE3o:"),n(),t(278,"ul")(279,"li")(280,"a",7)(281,"strong"),e(282,"PageChangePassword"),n()()(),t(283,"li")(284,"a",8)(285,"strong"),e(286,"ButtonGroup"),n()()(),t(287,"li")(288,"a",9)(289,"strong"),e(290,"Menu"),n()()(),t(291,"li")(292,"a",10)(293,"strong"),e(294,"MenuPanel"),n()()(),t(295,"li")(296,"a",11)(297,"strong"),e(298,"Navbar"),n()()(),t(299,"li")(300,"a",12)(301,"strong"),e(302,"PageList"),n()()(),t(303,"li")(304,"a",13)(305,"strong"),e(306,"PageDefault"),n()()(),t(307,"li")(308,"a",14)(309,"strong"),e(310,"Popup"),n()()(),t(311,"li")(312,"a",15)(313,"strong"),e(314,"Stepper"),n()()(),t(315,"li")(316,"a",16)(317,"strong"),e(318,"Table"),n()()(),t(319,"li")(320,"a",17)(321,"strong"),e(322,"Toolbar"),n()()()(),t(323,"p"),e(324,"Abaixo listamos dois exemplos comparativos com essas deprecia\xE7\xF5es em alguns componentes."),n(),t(325,"p"),e(326,"Exemplo via fun\xE7\xF5es dentro de arrays:"),n(),t(327,"ul")(328,"li"),e(329,"Antes:"),n()(),t(330,"pre")(331,"code"),e(332,`<po-page-default p-title="P\xE1gina" [p-actions]="actions">
   ...
</po-page-default>
`),n()(),t(333,"pre")(334,"code"),e(335,`export class ExampleFunction () {

  actions: Array<PoPageAction> = [
    { label: 'Adicionar', action: this.add }
  ]

  add() {
    ...
  }
}
`),n()(),t(336,"ul")(337,"li"),e(338,"Agora:"),n()(),t(339,"pre")(340,"code"),e(341,`<po-page-default p-title="P\xE1gina" [p-actions]="actions">
   ...
</po-page-default>
`),n()(),t(342,"pre")(343,"code"),e(344,`export class ExampleFunction () {

  actions: Array<PoPageAction> = [
    { label: 'Adicionar', action: this.add.bind(this) }
  ]

  add() {
    ...
  }
}
`),n()(),t(345,"p"),e(346,"Exemplo fun\xE7\xF5es via "),t(347,"em"),e(348,"property bind"),n()(),t(349,"ul")(350,"li"),e(351,"Antes:"),n()(),t(352,"pre")(353,"code"),e(354,`<po-stepper>
  <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep">
  </po-step>
</po-stepper>
`),n()(),t(355,"ul")(356,"li"),e(357,"Agora:"),n()(),t(358,"pre")(359,"code"),e(360,`<po-stepper>
  <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep.bind(this)">
  </po-step>
</po-stepper>
`),n()(),t(361,"p"),i(362,"a",18),n(),t(363,"h3"),e(364,"ng update @po-ui/ng-sync"),n(),t(365,"p"),e(366,"Para poder utilizar o comando e realizar a migra\xE7\xE3o, execute os comandos abaixo:"),n(),t(367,"p")(368,"code"),e(369,"npm i --save @po-ui/ng-sync@2"),n()(),t(370,"p")(371,"code"),e(372,"ng update @po-ui/ng-sync --from 1 --migrate-only"),n()(),t(373,"h4"),e(374,"Breaking Changes"),n(),t(375,"p"),e(376,"Nesta nova vers\xE3o o nome dos pacotes foram alterados, de acordo com a tabela abaixo:"),n(),t(377,"table")(378,"thead")(379,"tr")(380,"th",6),e(381,"Pacotes"),n(),t(382,"th",6),e(383,"Substitu\xEDdo por"),n()()(),t(384,"tbody")(385,"tr")(386,"td")(387,"code"),e(388,"@portinari/portinari-sync"),n()(),t(389,"td")(390,"code"),e(391,"@po-ui/ng-sync"),n()()(),t(392,"tr")(393,"td")(394,"code"),e(395,"@portinari/portinari-storage"),n()(),t(396,"td")(397,"code"),e(398,"@po-ui/ng-storage"),n()()(),t(399,"tr")(400,"td")(401,"code"),e(402,"@portinari/tslint"),n()(),t(403,"td")(404,"code"),e(405,"@po-ui/ng-tslint"),n()()()()(),t(406,"h4"),e(407,"Deprecia\xE7\xE3o"),n(),t(408,"p"),e(409,"Tamb\xE9m foi realizada uma deprecia\xE7\xE3o, onde ainda ser\xE1 aceito o modelo anterior, por\xE9m na vers\xE3o 3 ser\xE1 removido."),n(),t(410,"p"),e(411,"A deprecia\xE7\xE3o ocorreu no retorno do "),t(412,"code"),e(413,"Endpoint de sincroniza\xE7\xE3o"),n(),e(414,`, onde anteriomente deveria retornar a data da \xFAltima sincroniza\xE7\xE3o
na propriedade `),t(415,"code"),e(416,"portinari_sync_date"),n(),e(417,", que agora passa a ser "),t(418,"code"),e(419,"po_sync_date"),n(),e(420,", veja o antes e depois:"),n(),t(421,"pre")(422,"code"),e(423,`{
  "hasNext": false,
  "items": [],
  "portinari_sync_date": "2018-10-08T13:57:55.008Z"
}
`),n()(),t(424,"p"),e(425,"A propriedade "),t(426,"code"),e(427,"portinari_sync_date"),n(),e(428," foi depreciada e o nova propriedade \xE9:"),n(),t(429,"pre")(430,"code"),e(431,`{
  "hasNext": false,
  "items": [],
  "po_sync_date": "2018-10-08T13:57:55.008Z"
}
`),n()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var j=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:227,vars:0,consts:[["p-title","Migra\xE7\xE3o do PO UI",1,"guides","app-portal"],["href","guides/migration-poui-v2"],["href","https://github.com/po-ui/po-angular/wiki#vers%C3%B5es-angular-x-po-ui"],["href","https://update.angular.io/"],["href","https://angular.io/cli/update"],["href","guides/migration-poui#components"],["href","guides/migration-poui#sync"],["id","components"],[1,"language-json"],["href","https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md"],["id","sync"],["href","guides/deprecations"]],template:function(o,s){o&1&&(t(0,"po-page-default",0)(1,"p"),e(2,"Este guia cont\xE9m informa\xE7\xF5es sobre a migra\xE7\xE3o do seu projeto para a vers\xE3o mais atualizada do PO UI."),n(),t(3,"blockquote")(4,"p"),e(5,"Caso voc\xEA n\xE3o estiver utilizando a vers\xE3o anterior da mais atualizada, \xE9 importante realizar a migra\xE7\xE3o para a mesma."),n()(),t(6,"blockquote")(7,"p"),e(8,"Se seu projeto estiver na v1, veja este Guia de Migra\xE7\xE3o do PO UI para "),t(9,"a",1)(10,"strong"),e(11,"V2"),n()(),e(12,"."),n()(),t(13,"h2"),e(14,"Atualizando o projeto com Angular"),n(),t(15,"p"),e(16,`Antes de atualizar a vers\xE3o do PO UI, \xE9 importante que voc\xEA tenha atualizado o seu projeto para
o Angular que o PO UI est\xE1 homologado, veja nossa
`),t(17,"a",2),e(18,"tabela de compatibilidade"),n(),e(19," em nosso Github Wiki."),n(),t(20,"blockquote")(21,"p"),e(22,`Caso o seu projeto esteja na vers\xE3o Angular@16:
Realize a instala\xE7\xE3o do pacote Schematics do Angular para o nosso script de atualiza\xE7\xE3o funcionar corretamente: `),n()(),t(23,"pre")(24,"code"),e(25,`npm install @angular-devkit/schematics --save-dev
`),n()(),t(26,"p"),e(27,"Para atualizar o Angular, execute o comando abaixo:"),n(),t(28,"pre")(29,"code"),e(30,`ng update @angular/cli@<version> @angular/core@<version> --force
`),n()(),t(31,"p"),e(32,"Por exemplo:"),n(),t(33,"pre")(34,"code"),e(35,`ng update @angular/cli@19 @angular/core@19 --force
`),n()(),t(36,"blockquote")(37,"p"),e(38,"Para realizar a migra\xE7\xE3o completa e avaliar se n\xE3o precisa fazer alguma altera\xE7\xE3o veja o "),t(39,"a",3)(40,"strong"),e(41,"Guia de Upgrade do Angular"),n()(),e(42,"."),n()(),t(43,"p"),e(44,`O nosso pacote possu\xEDa depend\xEAncias que eram compat\xEDveis com a vers\xE3o anterior do Angular, portanto
devemos utilizar a `),t(45,"em"),e(46,"flag"),n(),t(47,"code"),e(48,"--force"),n(),e(49,` para que o Angular realize a migra\xE7\xE3o do seu projeto, ignorando a vers\xE3o das depend\xEAncias.
Para avaliar as `),t(50,"em"),e(51,"flags"),n(),e(52," dispon\xEDveis veja a "),t(53,"a",4)(54,"strong"),e(55,"documenta\xE7\xE3o do ng update"),n()(),e(56,"."),n(),t(57,"h2"),e(58,"Atualizando o PO UI"),n(),t(59,"p"),e(60,"Para facilitar a migra\xE7\xE3o do seu projeto para o PO UI mais recente, implementamos o "),t(61,"code"),e(62,"ng update"),n(),e(63," nos pacotes abaixo:"),n(),t(64,"ul")(65,"li")(66,"a",5)(67,"strong"),e(68,"@po-ui/ng-components"),n()()(),t(69,"li")(70,"a",6)(71,"strong"),e(72,"@po-ui/ng-sync"),n()()()(),t(73,"p"),i(74,"a",7),n(),t(75,"h3"),e(76,"ng update @po-ui/ng-components"),n(),t(77,"p"),e(78,"Para realizar a migra\xE7\xE3o, devemos executar o comando "),t(79,"code"),e(80,"ng update"),n(),e(81,`, conforme exemplo abaixo. Mas antes verifique se comitou os arquivos alterados pela migra\xE7\xE3o do Angular, se preferir voc\xEA pode utilizar a
`),t(82,"em"),e(83,"flag"),n(),t(84,"code"),e(85,"--allow-dirty"),n(),e(86," em conjunto."),n(),t(87,"pre")(88,"code"),e(89,`ng update @po-ui/ng-components@<version> --allow-dirty --force
`),n()(),t(90,"p"),e(91,"Por exemplo:"),n(),t(92,"pre")(93,"code"),e(94,`ng update @po-ui/ng-components --allow-dirty --force
`),n()(),t(95,"blockquote")(96,"p"),e(97,"Caso ocorra um erro ao concluir o comando acima pode ser necess\xE1rio fazer uma instala\xE7\xE3o limpa no projeto apagando a pasta "),t(98,"code"),e(99,"node_modules"),n(),e(100," e o arquivo "),t(101,"code"),e(102,"package-lock.json"),n(),e(103," e executando o comando "),t(104,"code"),e(105,"npm i --legacy-peer-deps"),n(),e(106," antes de realizar o "),t(107,"code"),e(108,"ng update"),n(),e(109,"."),n()(),t(110,"blockquote")(111,"p"),e(112,"Caso sua aplica\xE7\xE3o seja configurada com m\xF3dulos, pode ser necess\xE1ria a inclus\xE3o da seguinte "),t(113,"code"),e(114,"devDependencies"),n(),e(115,":"),n()(),t(116,"pre")(117,"code",8),e(118,`  "devDependencies": {
    ...,
    "@angular-devkit/schematics": "~19.0.5",
    ...
  }
`),n()(),t(119,"p"),e(120,"O "),t(121,"code"),e(122,"ng update"),n(),e(123," ajudar\xE1 nas altera\xE7\xF5es necess\xE1rias para seu projeto seguir atualizado, que s\xE3o elas:"),n(),t(124,"ul")(125,"li"),e(126,"Caso houver "),t(127,"em"),e(128,"breaking changes"),n(),e(129,", ser\xE3o realizados as altera\xE7\xF5es poss\xEDveis, mas fique atento ao "),t(130,"a",9),e(131,"CHANGELOG"),n(),e(132,";"),n(),t(133,"li"),e(134,"Atualizar as vers\xF5es dos pacotes:"),t(135,"ul")(136,"li")(137,"code"),e(138,"@po-ui/ng-components"),n(),e(139,";"),n(),t(140,"li")(141,"code"),e(142,"@po-ui/ng-templates"),n(),e(143,";"),n(),t(144,"li")(145,"code"),e(146,"@po-ui/ng-code-editor"),n(),e(147,";"),n(),t(148,"li")(149,"code"),e(150,"@po-ui/ng-storage"),n(),e(151,";"),n(),t(152,"li")(153,"code"),e(154,"@po-ui/ng-sync"),n(),e(155,";"),n(),t(156,"li")(157,"code"),e(158,"@po-ui/style"),n(),e(159,";"),n()()()(),t(160,"p"),e(161,"Al\xE9m disso, ser\xE1 realizada uma pergunta para que o usu\xE1rio decida se quer utilizar a nova biblioteca de \xEDcones. Caso a escolha seja positiva, o processo de update ir\xE1 substituir classes de \xEDcones do po-ui pelas novas refer\xEAncias."),n(),t(162,"p"),i(163,"a",10),n(),t(164,"h3"),e(165,"ng update @po-ui/ng-sync"),n(),t(166,"blockquote")(167,"p"),e(168,"Caso voc\xEA tamb\xE9m utilize "),t(169,"code"),e(170,"@po-ui/ng-components"),n(),e(171," n\xE3o h\xE1 necessidade de executar o "),t(172,"em"),e(173,"ng update"),n(),e(174," do "),t(175,"code"),e(176,"@po-ui/ng-sync"),n(),e(177,"."),n()(),t(178,"p"),e(179,"Para realizar a migra\xE7\xE3o, devemos executar o comando "),t(180,"code"),e(181,"ng update"),n(),e(182,`, conforme exemplo abaixo. Mas antes verifique se comitou os arquivos alterados pela migra\xE7\xE3o do Angular, se preferir voc\xEA pode utilizar a
`),t(183,"em"),e(184,"flag"),n(),t(185,"code"),e(186,"--allow-dirty"),n(),e(187," em conjunto."),n(),t(188,"pre")(189,"code"),e(190,`ng update @po-ui/ng-sync@<version> --allow-dirty --force
`),n()(),t(191,"p"),e(192,"Por exemplo:"),n(),t(193,"pre")(194,"code"),e(195,`ng update @po-ui/ng-sync --allow-dirty --force
`),n()(),t(196,"p"),e(197,"O "),t(198,"code"),e(199,"ng update"),n(),e(200," ajudar\xE1 nas altera\xE7\xF5es necess\xE1rias para seu projeto, que ser\xE1 atualizar as vers\xF5es dos pacotes:"),n(),t(201,"ul")(202,"li")(203,"code"),e(204,"@po-ui/ng-sync"),n(),e(205,";"),n(),t(206,"li")(207,"code"),e(208,"@po-ui/ng-storage"),n(),e(209,";"),n()(),t(210,"h2"),e(211,"Deprecia\xE7\xF5es e Breaking Changes"),n(),t(212,"p"),e(213,"Possuimos uma documenta\xE7\xE3o que lista as deprecia\xE7\xF5es correntes e os "),t(214,"em"),e(215,"breaking changes"),n(),e(216,` j\xE1 realizados na biblioteca,
para consult\xE1-lo acesse o guia `),t(217,"a",11),e(218,"Deprecia\xE7\xF5es"),n()(),t(219,"p"),e(220,"Verifique tamb\xE9m nosso "),t(221,"a",9),e(222,"CHANGELOG"),n(),e(223,` para obter
mais detalhes dos `),t(224,"em"),e(225,"breaking changes"),n(),e(226," realizados."),n()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var G=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:63,vars:0,consts:[["p-title","Migra\xE7\xE3o do THF para o PO UI v1.x",1,"guides","app-portal"]],template:function(o,s){o&1&&(t(0,"po-page-default",0)(1,"p"),e(2,"Para facilitar a migra\xE7\xE3o do seu projeto com o THF para o PO UI, disponibilizamos um pacote para fazer esta convers\xE3o. "),n(),t(3,"p"),e(4,"Este pacote, ir\xE1 passar pelos arquivos do seu projeto alterando as palavras-chaves do THF para a nova nomenclatura do PO UI."),n(),t(5,"h3"),e(6,"Antes de iniciar a migra\xE7\xE3o"),n(),t(7,"p"),e(8,"Antes de iniciar a migra\xE7\xE3o certifique-se que:"),n(),t(9,"ul")(10,"li"),e(11,"Este pacote de migra\xE7\xE3o \xE9 apenas para a migra\xE7\xE3o do "),t(12,"strong"),e(13,"THF vers\xE3o 4 ou superior para o PO UI vers\xE3o 1.x"),n(),e(14," que \xE9 compat\xEDvel com a vers\xE3o 8 do Angular. "),n(),t(15,"li"),e(16,"As depend\xEAncias do THF encontram-se na vers\xE3o 4 ou superior."),n(),t(17,"li"),e(18,"Todos os arquivos est\xE3o salvos."),n(),t(19,"li"),e(20,"Se as pastas e os arquivos possuem permiss\xE3o para terceiros alter\xE1-los."),n()(),t(21,"h3"),e(22,"Instala\xE7\xE3o do pacote de migra\xE7\xE3o"),n(),t(23,"p"),e(24,"Instale globalmente o pacote "),t(25,"code"),e(26,"po-migration"),n(),e(27," utilizando o npm, conforme o comando abaixo:"),n(),t(28,"pre")(29,"code"),e(30,`npm install -g po-migration
`),n()(),t(31,"h3"),e(32,"Migrando o seu projeto"),n(),t(33,"p"),e(34,"Ap\xF3s a instala\xE7\xE3o, navegue at\xE9 a pasta do projeto que voc\xEA deseja migrar para o PO UI."),n(),t(35,"p"),e(36,"Para iniciar a migra\xE7\xE3o, execute o comando:"),n(),t(37,"pre")(38,"code"),e(39,`po-migration start
`),n()(),t(40,"p"),e(41,"Este comando ir\xE1 utilizar um dicion\xE1rio de palavras-chaves do pr\xF3prio THF para realizar a migra\xE7\xE3o, ou seja, se tiver outra palavra que voc\xEA criou e que n\xE3o faz parte do THF, ele n\xE3o ir\xE1 alterar."),n(),t(42,"p"),e(43,"No entanto, caso voc\xEA queira alterar at\xE9 mesmo palavras criadas por voc\xEA, utilize o seguinte comando:"),n(),t(44,"pre")(45,"code"),e(46,`po-migration start --all
`),n()(),t(47,"p"),e(48,'Este comando atualiza todas as palavras do projeto que cont\xE9m "thf, t-, ou totvs".'),n(),t(49,"blockquote")(50,"p"),e(51,"Ao utilizar a op\xE7\xE3o "),t(52,"code"),e(53,"--all"),n(),e(54,` certifique-se que n\xE3o foi alterado nenhuma palavra que fa\xE7a parte
do caminho de algum arquivo, que voc\xEA possa ter colocado com o nome contendo algumas das palavras "thf, t-, ou totvs".`),n()(),t(55,"p"),e(56,"Veja a documenta\xE7\xE3o completa do pacote "),t(57,"code"),e(58,"po-migration"),n(),e(59," executando o comando:"),n(),t(60,"pre")(61,"code"),e(62,`po-migration --help
`),n()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var U=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:81,vars:0,consts:[["p-title","Press Kit",1,"guides","app-portal"],["href","https://creativecommons.org/licenses/by/4.0/"],[1,"docs-presskit-row","po-mb-5"],["src","./assets/po-logos/po_color_bg.svg","width","128","height","128","alt","Logo com segundo plano degrad\xEA"],[1,"po-ml-md-2"],["href","./assets/po-logos/po_color_bg.png","download",""],["href","./assets/po-logos/po_color_bg.svg","download",""],["src","./assets/po-logos/po_color.svg","width","128","height","128","alt","Logo degrad\xEA"],["href","./assets/po-logos/po_color.png","download",""],["href","./assets/po-logos/po_color.svg","download",""],["src","./assets/po-logos/po_black.svg","width","128","height","128","alt","Logo preto"],["href","./assets/po-logos/po_black.png","download",""],["href","./assets/po-logos/po_black.svg","download",""],["src","./assets/po-logos/po_inverse.svg","width","128","height","128","alt","Logo branco com segundo plano preto"],["href","./assets/po-logos/po_inverse.png","download",""],["href","./assets/po-logos/po_inverse.svg","download",""],["src","./assets/po-logos/po_white_mock_bg.png","width","128","height","128","alt","Logo branco com segundo plano transparente"],["href","./assets/po-logos/po_white.png","download",""],["href","./assets/po-logos/po_white.svg","download",""]],template:function(o,s){o&1&&(t(0,"po-page-default",0)(1,"h2"),e(2,"Logomarca"),n(),t(3,"p"),e(4,"A licen\xE7a para uso das varia\xE7\xF5es de logomarca do "),t(5,"strong"),e(6,"PO UI"),n(),e(7," \xE9 seguida de acordo com a "),t(8,"a",1),e(9,"CC BY 4.0"),n(),e(10,". Ou seja, pode-se utiliz\xE1-las como convier e para qualquer uso, como por exemplo na impress\xE3o em camisetas, divulga\xE7\xE3o em websites, etc."),n(),t(11,"div",2)(12,"div"),i(13,"img",3),n(),t(14,"div",4)(15,"h3"),e(16,"Vers\xE3o com segundo plano degrad\xEA"),n(),t(17,"p"),e(18,"Logo com segundo plano degrad\xEA (png) - "),t(19,"a",5),e(20,"Download"),n()(),t(21,"p"),e(22,"Logo com segundo plano degrad\xEA (svg) - "),t(23,"a",6),e(24,"Download"),n()()()(),t(25,"div",2)(26,"div"),i(27,"img",7),n(),t(28,"div",4)(29,"h3"),e(30,"Vers\xE3o do logo degrad\xEA"),n(),t(31,"p"),e(32,"Logo degrad\xEA (png) - "),t(33,"a",8),e(34,"Download"),n()(),t(35,"p"),e(36,"Logo degrad\xEA (svg) - "),t(37,"a",9),e(38,"Download"),n()()()(),t(39,"div",2)(40,"div"),i(41,"img",10),n(),t(42,"div",4)(43,"h3"),e(44,"Vers\xE3o do logo em preto"),n(),t(45,"p"),e(46,"Logo preto (png) - "),t(47,"a",11),e(48,"Download"),n()(),t(49,"p"),e(50,"Logo preto (svg) - "),t(51,"a",12),e(52,"Download"),n()()()(),t(53,"div",2)(54,"div"),i(55,"img",13),n(),t(56,"div",4)(57,"h3"),e(58,"Vers\xE3o branco com segundo plano preto"),n(),t(59,"p"),e(60,"Logo branco (png) - "),t(61,"a",14),e(62,"Download"),n()(),t(63,"p"),e(64,"Logo branco (svg) - "),t(65,"a",15),e(66,"Download"),n()()()(),t(67,"div",2)(68,"div"),i(69,"img",16),n(),t(70,"div",4)(71,"h3"),e(72,"Vers\xE3o branco com segundo plano transparente"),n(),t(73,"p"),e(74,"Logo branco (png) - "),t(75,"a",17),e(76,"Download"),n()(),t(77,"p"),e(78,"Logo branco (svg) - "),t(79,"a",18),e(80,"Download"),n()()()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var R=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:222,vars:0,consts:[["p-title","Releases",1,"guides","app-portal"],["href","https://semver.org/"],[1,"po-row"],[1,"po-xl-6","po-lg-8","po-md-10","po-sm-12"],[1,"po-table","po-text-color-neutral-dark-40"],[1,"po-table-header"],[1,"po-table-header-ellipsis"],[1,"po-table-row"],[1,"po-table-column"],["href","guides/migration-poui"],["href","guides/migration-poui-v2"],["href","guides/migration-thf-to-po-ui"],["href","https://github.com/po-ui/po-angular/issues/1184"],["href","https://www.npmjs.com/package/@po-ui/ng-components?activeTab=versions"]],template:function(o,s){o&1&&(t(0,"po-page-default",0)(1,"p"),e(2,"Reconhecemos que voc\xEA precisa da estabilidade da estrutura PO UI. A estabilidade garante que os componentes, samples e tutoriais n\xE3o se tornem obsoletos inesperadamente. A estabilidade \xE9 essencial para um ecossistema com angular e PO UI prosperar."),n(),t(3,"p"),e(4,"Tamb\xE9m compartilhamos com voc\xEA o desejo de que o PO UI continue evoluindo. N\xF3s nos esfor\xE7amos para garantir que a biblioteca de componentes sobre a qual est\xE1 construindo sua aplica\xE7\xE3o continue melhorando e permitindo que voc\xEA se mantenha atualizado com o resto do ecossistema do Angular e com as necessidades do usu\xE1rio."),n(),t(5,"p"),e(6,"Este documento cont\xE9m as pr\xE1ticas que seguimos para fornecer a voc\xEA uma biblioteca de componentes de ponta, equilibrada e com estabilidade. N\xF3s nos esfor\xE7amos para garantir que as mudan\xE7as futuras sejam sempre introduzidas de forma previs\xEDvel. Queremos que todos que dependam do PO UI saibam quando e como os novos recursos ser\xE3o adicionados e estejam bem preparados quando os obsoletos s\xE3o removidos."),n(),t(7,"h2"),e(8,"Controle de Vers\xE3o PO UI"),n(),t(9,"p"),e(10,"Os n\xFAmeros de vers\xE3o do PO UI indicam o n\xEDvel de mudan\xE7as introduzidas pelo lan\xE7amento. Este uso de "),t(11,"a",1),e(12,"versionamento sem\xE2ntico"),n(),e(13," ajuda a entender o impacto potencial de atualizar para uma nova vers\xE3o."),n(),t(14,"p"),e(15,"N\xFAmeros de vers\xE3o PO UI tem tr\xEAs partes: "),t(16,"code"),e(17,"major.minor.patch"),n(),e(18,". Por exemplo, a vers\xE3o 4.16.1 indica a vers\xE3o principal 4, a vers\xE3o secund\xE1ria 2 e o n\xEDvel de patch 1."),n(),t(19,"p"),e(20,"O n\xFAmero da vers\xE3o principal \xE9 incrementado com base na vers\xE3o do Angular que ele atende."),n(),t(21,"ul")(22,"li")(23,"strong"),e(24,"As vers\xF5es principais"),n(),e(25," cont\xEAm os novos recursos disponibilizados pelo Angular, mas espera-se uma assist\xEAncia m\xEDnima do desenvolvedor durante a atualiza\xE7\xE3o. Ao atualizar para uma nova vers\xE3o principal, pode ser necess\xE1rio executar scripts de atualiza\xE7\xE3o, refatorar c\xF3digos, executar testes adicionais e aprender novas APIs."),n(),t(26,"li")(27,"strong"),e(28,"Vers\xF5es secund\xE1rias"),n(),e(29," cont\xE9m novos recursos menores. Vers\xF5es menores s\xE3o totalmente compat\xEDveis com vers\xF5es anteriores; nenhuma assist\xEAncia do desenvolvedor \xE9 esperada durante a atualiza\xE7\xE3o, mas voc\xEA pode opcionalmente modificar seus aplicativos e bibliotecas para come\xE7ar a usar novas APIs, recursos e capacidades que foram adicionados na vers\xE3o. S\xE3o incrementadas regularmente ao final de nossas sprints."),n(),t(30,"li")(31,"strong"),e(32,"Lan\xE7amentos de patch"),n(),e(33," s\xE3o lan\xE7amentos de corre\xE7\xE3o de bugs. Nenhuma ajuda do desenvolvedor \xE9 esperada durante a atualiza\xE7\xE3o."),n()(),t(34,"h2"),e(35,"Caminhos de atualiza\xE7\xE3o suportados"),n(),t(36,"p"),e(37,"Em alinhamento com o esquema de controle de vers\xE3o descrito acima, nos comprometemos a oferecer suporte aos seguintes caminhos de atualiza\xE7\xE3o:"),n(),t(38,"ul")(39,"li"),e(40,"Se voc\xEA estiver atualizando na "),t(41,"strong"),e(42,"vers\xE3o principal"),n(),e(43,", poder\xE1 pular todas as vers\xF5es intermedi\xE1rias e atualizar diretamente para a vers\xE3o de destino. Por exemplo, voc\xEA pode atualizar diretamente da vers\xE3o 4.0.0 para a 4.17.0."),n(),t(44,"li"),e(45,"Se voc\xEA estiver atualizando de "),t(46,"strong"),e(47,"uma vers\xE3o principal para outra"),n(),e(48,", recomendamos que "),t(49,"strong"),e(50,"n\xE3o ignore as vers\xF5es principais"),n(),e(51,". Siga as instru\xE7\xF5es para atualizar de forma incremental para a pr\xF3xima vers\xE3o principal, testando e validando em cada erapa. Por exemplo, se voc\xEA deseja atualizar da vers\xE3o 2.xx para a vers\xE3o 4.xx, recomendamos que voc\xEA atualize para a vers\xE3o 3.xx mais recente primeiro. Depois de atualizar com sucesso para a vers\xE3o 3.xx, voc\xEA pode atualizar para a 4.xx."),n()(),t(52,"p"),e(53,"Consulte abaixo nossos guias de migra\xE7\xE3o de vers\xE3o para obter mais informa\xE7\xF5es sobre como atualizar o PO UI para a vers\xE3o mais recente nos seus projetos Angular."),n(),t(54,"h3"),e(55,"Comparativo de vers\xF5es Angular x PO UI"),n(),t(56,"div",2)(57,"div",3)(58,"table",4)(59,"thead")(60,"tr",5)(61,"th",6),e(62,"Angular"),n(),t(63,"th",6),e(64,"PO UI"),n(),t(65,"th",6),e(66,"Migra\xE7\xE3o"),n()()(),t(67,"tbody")(68,"tr",7)(69,"td",8),e(70,"19.0.0"),n(),t(71,"td",8),e(72,"19.0.0"),n(),t(73,"td",8)(74,"a",9),e(75,"Migra\xE7\xE3o do PO UI"),n()()(),t(76,"tr",7)(77,"td",8),e(78,"18.0.0"),n(),t(79,"td",8),e(80,"18.0.0"),n(),t(81,"td",8)(82,"a",9),e(83,"Migra\xE7\xE3o do PO UI"),n()()(),t(84,"tr",7)(85,"td",8),e(86,"17.0.0"),n(),t(87,"td",8),e(88,"17.0.0"),n(),t(89,"td",8)(90,"a",9),e(91,"Migra\xE7\xE3o do PO UI"),n()()(),t(92,"tr",7)(93,"td",8),e(94,"16.0.0"),n(),t(95,"td",8),e(96,"16.0.0"),n(),t(97,"td",8)(98,"a",9),e(99,"Migra\xE7\xE3o do PO UI"),n()()(),t(100,"tr",7)(101,"td",8),e(102,"15.0.0"),n(),t(103,"td",8),e(104,"15.0.0"),n(),t(105,"td",8)(106,"a",9),e(107,"Migra\xE7\xE3o do PO UI"),n()()(),t(108,"tr",7)(109,"td",8),e(110,"14.0.0"),n(),t(111,"td",8),e(112,"14.0.0"),n(),t(113,"td",8)(114,"a",9),e(115,"Migra\xE7\xE3o do PO UI"),n()()(),t(116,"tr",7)(117,"td",8),e(118,"13.0.0"),n(),t(119,"td",8),e(120,"6.0.0"),n(),t(121,"td",8)(122,"a",9),e(123,"Migra\xE7\xE3o do PO UI"),n()()(),t(124,"tr",7)(125,"td",8),e(126,"12.0.0"),n(),t(127,"td",8),e(128,"5.0.0"),n(),t(129,"td",8)(130,"a",9),e(131,"Migra\xE7\xE3o do PO UI"),n()()(),t(132,"tr",7)(133,"td",8),e(134,"11.0.0"),n(),t(135,"td",8),e(136,"4.0.0"),n(),t(137,"td",8)(138,"a",9),e(139,"Migra\xE7\xE3o do PO UI"),n()()(),t(140,"tr",7)(141,"td",8),e(142,"10.0.0"),n(),t(143,"td",8),e(144,"3.0.0"),n(),t(145,"td",8)(146,"a",9),e(147,"Migra\xE7\xE3o do PO UI"),n()()(),t(148,"tr",7)(149,"td",8),e(150,"9.0.0"),n(),t(151,"td",8),e(152,"2.0.0"),n(),t(153,"td",8)(154,"a",10),e(155,"Migra\xE7\xE3o do PO UI para V2"),n()()(),t(156,"tr",7)(157,"td",8),e(158,"8.0.0"),n(),t(159,"td",8),e(160,"1.0.0"),n(),t(161,"td",8)(162,"a",11),e(163,"Migra\xE7\xE3o THF para PO UI v1.x"),n()()()()()()(),t(164,"blockquote")(165,"p"),e(166,"Conforme agenda de publica\xE7\xE3o de novas vers\xF5es est\xE1veis do Angular, n\xF3s atualizamos nossas vers\xF5es como de costume e aproveitaremos para fazer uma mudan\xE7a na nomenclatura das nossas vers\xF5es. A vers\xE3o "),t(167,"code"),e(168,"v7.x.x"),n(),e(169," foi lan\xE7ada como "),t(170,"strong")(171,"code"),e(172,"v14.x.x"),n()(),e(173,", assim "),t(174,"code"),e(175,"a vers\xE3o 14.x.x do PO UI tem compatibilidade com a v14 do Angular"),n(),e(176," e assim por diante. "),t(177,"a",12),e(178,"Mais informa\xE7\xF5es"),n(),e(179,"."),n()(),t(180,"h2"),e(181,"Vers\xF5es pr\xE9vias"),n(),t(182,"p"),e(183,"Permitimos que voc\xEA visualize o que est\xE1 por vir, fornecendo pr\xE9-lan\xE7amentos "),t(184,"code"),e(185,"next"),n(),e(186," ou Release Candidates ("),t(187,"code"),e(188,"rc"),n(),e(189,") para cada vers\xE3o principal:"),n(),t(190,"ul")(191,"li")(192,"strong"),e(193,"Next"),n(),e(194,": a vers\xE3o que est\xE1 em desenvolvimento, com testes ativos e com breaking changes a resolver. O pr\xF3ximo lan\xE7amento \xE9 indicado por uma tag de lan\xE7amento anexada ao identificador "),t(195,"code"),e(196,"-next"),n(),e(197,", como "),t(198,"code"),e(199,"17.0.0-next"),n(),e(200,"."),n(),t(201,"li")(202,"strong"),e(203,"Release Candidate"),n(),e(204,": um lan\xE7amento com recurso conclu\xEDdo, teste finalizado e sem breaking changes a resolver. Um candidato a lan\xE7amento \xE9 indicado por uma tag de lan\xE7amento anexada ao identificador "),t(205,"code"),e(206,"-rc"),n(),e(207,", como vers\xE3o "),t(208,"code"),e(209,"17.0.0-rc"),n(),e(210,"."),n()(),t(211,"p"),e(212,"A vers\xE3o mais recente "),t(213,"code"),e(214,"next"),n(),e(215," ou de pr\xE9-lan\xE7amento "),t(216,"code"),e(217,"rc"),n(),e(218," fica dispon\xEDvel no "),t(219,"a",13),e(220,"npm do projeto"),n(),e(221,"."),n()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var N=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:204,vars:0,consts:[["p-title","Schematics",1,"guides","app-portal"],["href","https://angular.io/cli"],[1,"po-row"],[1,"po-sm-12"],[1,"po-table","po-text-color-neutral-dark-40"],[1,"po-table-header"],[1,"po-table-header-ellipsis"],[1,"po-table-row"],[1,"po-table-column"],["href","/documentation/po-page-list"],["href","/documentation/po-page-default"],["href","/documentation/po-page-edit"],["href","/documentation/po-page-detail"],["href","/documentation/po-page-dynamic-table"],["href","/documentation/po-page-dynamic-detail"],["href","/documentation/po-page-dynamic-edit"],["href","/documentation/po-page-dynamic-search"],["href","/documentation/po-page-job-scheduler"],["href","/documentation/po-page-login"],["href","/documentation/po-page-change-password"],["href","/documentation/po-page-blocked-user"]],template:function(o,s){o&1&&(t(0,"po-page-default",0)(1,"p"),e(2,"O PO cont\xE9m "),t(3,"em"),e(4,"schematics"),n(),e(5," do "),t(6,"a",1),e(7,"Angular CLI"),n(),e(8," em seu pacote, para facilitar o desenvolvimento de aplica\xE7\xF5es PO."),n(),t(9,"h2"),e(10,"Instalando"),n(),t(11,"p"),e(12,"Um vez que for instalado o pacotes, teremos dispon\xEDvel os "),t(13,"em"),e(14,"schematics"),n(),e(15," atrav\xE9s do Angular CLI."),n(),t(16,"h3"),e(17,"PO UI Components"),n(),t(18,"p"),e(19,`Caso esteja iniciando uma aplica\xE7\xE3o com PO, indica-se utilizar o comando abaixo,
no qual ser\xE1 instalado o pacote `),t(20,"code"),e(21,"@po-ui/ng-components"),n(),e(22," e realizadas algumas configura\xE7\xF5es, que ser\xE3o descritas em seguida:"),n(),t(23,"pre")(24,"code"),e(25,`ng add @po-ui/ng-components
`),n()(),t(26,"ul")(27,"li"),e(28,"Substitui o "),t(29,"code"),e(30,"AppComponent"),n(),e(31," com uma estrutura incial de um projeto, utilizando os components "),t(32,"code"),e(33,"po-page-default"),n(),e(34,", "),t(35,"code"),e(36,"po-toolbar"),n(),e(37,", e "),t(38,"code"),e(39,"po-menu"),n(),e(40,";"),n(),t(41,"li"),e(42,"Importa o m\xF3dulo do PO;"),n(),t(43,"li"),e(44,"Configura o tema do PO no projeto;"),n()(),t(45,"h3"),e(46,"PO UI Templates"),n(),t(47,"p"),e(48,`Para a utiliza\xE7\xE3o de componentes de template o processo para inclus\xE3o \xE9 semelhante.
Primeiramente, deve-se utilizar o comando abaixo, no qual ser\xE1 instalado o pacote `),t(49,"code"),e(50,"@po-ui/ng-templates"),n(),e(51,":"),n(),t(52,"pre")(53,"code"),e(54,`ng add @po-ui/ng-templates
`),n()(),t(55,"ul")(56,"li"),e(57,"Importa o m\xF3dulo do PO;"),n(),t(58,"li"),e(59,"Configura o tema do PO no projeto caso n\xE3o possua;"),n()(),t(60,"h2"),e(61,"Generate Schematics"),n(),t(62,"p"),e(63,"O "),t(64,"code"),e(65,"PO"),n(),e(66," vem com v\xE1rios "),t(67,"code"),e(68,"schematics"),n(),e(69," que podem ser usados \u200B\u200Bpara gerar componentes facilmente."),n(),t(70,"p"),e(71,"Para gerar o componente, execute o comando abaixo, onde "),t(72,"code"),e(73,"package"),n(),e(74," \xE9 o pacote e "),t(75,"code"),e(76,"schematic-name"),n(),e(77," o componente que deseja:"),n(),t(78,"pre")(79,"code"),e(80,`ng generate <package>:<schematic-name>
`),n()(),t(81,"blockquote")(82,"p"),e(83,"A lista de op\xE7\xF5es dispon\xEDveis que o CLI oferece para o "),t(84,"em"),e(85,"ng generate"),n(),e(86," \xE9 vista acrescentando "),t(87,"code"),e(88,"--help"),n(),e(89," no comando."),n()(),t(90,"h3"),e(91,"PO UI Components"),n(),t(92,"pre")(93,"code"),e(94,`ng generate @po-ui/ng-components:<schematic-name>
`),n()(),t(95,"div",2)(96,"div",3)(97,"table",4)(98,"thead")(99,"tr",5)(100,"th",6),e(101,"Nome"),n(),t(102,"th",6),e(103,"Descri\xE7\xE3o"),n()()(),t(104,"tbody")(105,"tr",7)(106,"td",8)(107,"a",9)(108,"strong"),e(109,"po-page-list"),n()()(),t(110,"td",8),e(111," Componente que deve ser utilizado como o container principal para as telas de listagem de dados, podendo ser apresentado como lista ou tabela. "),n()(),t(112,"tr",7)(113,"td",8)(114,"a",10)(115,"strong"),e(116,"po-page-default"),n()()(),t(117,"td",8),e(118,"Componente que deve ser utilizado como o container principal para as telas sem um template definido."),n()(),t(119,"tr",7)(120,"td",8)(121,"a",11)(122,"strong"),e(123,"po-page-edit"),n()()(),t(124,"td",8),e(125,"Componente que deve ser utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um registro."),n()(),t(126,"tr",7)(127,"td",8)(128,"a",12)(129,"strong"),e(130,"po-page-detail"),n()()(),t(131,"td",8),e(132,"Componente que deve ser utilizado como container principal para a tela de detalhamento de um registro."),n()()()()()(),t(133,"h3"),e(134,"Po UI Templates"),n(),t(135,"pre")(136,"code"),e(137,`ng generate @po-ui/ng-templates:<schematic-name>
`),n()(),t(138,"div",2)(139,"div",3)(140,"table",4)(141,"thead")(142,"tr",5)(143,"th",6),e(144,"Nome"),n(),t(145,"th",6),e(146,"Descri\xE7\xE3o"),n()()(),t(147,"tbody")(148,"tr",7)(149,"td",8)(150,"a",13)(151,"strong"),e(152,"po-page-dynamic-table"),n()()(),t(153,"td",8),e(154,"P\xE1gina que exibe uma lista de registros em uma tabela baseado em uma lista de fields, o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o. "),n()(),t(155,"tr",7)(156,"td",8)(157,"a",14)(158,"strong"),e(159,"po-page-dynamic-detail"),n()()(),t(160,"td",8),e(161,"P\xE1gina que serve para exibir registros em detalhes, o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o. "),n()(),t(162,"tr",7)(163,"td",8)(164,"a",15)(165,"strong"),e(166,"po-page-dynamic-edit"),n()()(),t(167,"td",8),e(168,"P\xE1gina que pode servir para editar ou criar novos registros, o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o. "),n()(),t(169,"tr",7)(170,"td",8)(171,"a",16)(172,"strong"),e(173,"po-page-dynamic-search"),n()()(),t(174,"td",8),e(175,"Componente com as a\xE7\xF5es de pesquisa j\xE1 definidas, bastando que o desenvolvedor implemente apenas a chamada para as APIs e exiba as informa\xE7\xF5es. "),n()(),t(176,"tr",7)(177,"td",8)(178,"a",17)(179,"strong"),e(180,"po-page-job-scheduler"),n()()(),t(181,"td",8),e(182,"P\xE1gina que serve para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler), como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios. Para utiliz\xE1-la, basta informar o servi\xE7o (endpoint) para consumo, sem a necessidade de criar componentes e tratamentos dos dados. "),n()(),t(183,"tr",7)(184,"td",8)(185,"a",18)(186,"strong"),e(187,"po-page-login"),n()()(),t(188,"td",8),e(189,"P\xE1gina utilizada como template para tela de login. Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio. Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque. "),n()(),t(190,"tr",7)(191,"td",8)(192,"a",19)(193,"strong"),e(194,"po-page-change-password"),n()()(),t(195,"td",8),e(196,"P\xE1gina utilizada como template para tela de cadastro ou altera\xE7\xE3o de senha. "),n()(),t(197,"tr",7)(198,"td",8)(199,"a",20)(200,"strong"),e(201,"po-page-blocked-user"),n()()(),t(202,"td",8),e(203,"P\xE1gina utilizada como template para tela de bloqueio de usu\xE1rio. "),n()()()()()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var H=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:1071,vars:0,consts:[["p-title","Fundamentos do PO Sync",1,"guides","app-portal"],["href","guides/sync-fundamentals#introduction"],["href","guides/sync-fundamentals#knowledge"],["href","guides/sync-fundamentals#schemas"],["href","guides/sync-fundamentals#create-schema"],["href","guides/sync-fundamentals#schematic"],["href","guides/sync-fundamentals#prepare-api"],["href","guides/sync-fundamentals#logical-deletion"],["href","guides/sync-fundamentals#sync-url"],["href","guides/sync-fundamentals#prepare"],["href","guides/sync-fundamentals#periodic"],["href","guides/sync-fundamentals#load-data"],["href","guides/sync-fundamentals#po-entity"],["href","guides/sync-fundamentals#find-data"],["href","guides/sync-fundamentals#save-and-remove"],["href","guides/sync-fundamentals#sync"],["href","guides/sync-fundamentals#advanced-techniques"],["href","guides/sync-fundamentals#on-sync"],["href","guides/sync-fundamentals#po-data-transform"],["href","guides/sync-fundamentals#get-responses"],["href","guides/sync-fundamentals#insert-http-command"],["href","guides/sync-fundamentals#custom-request-id"],["href","guides/sync-fundamentals#schemas-definition"],["href","guides/sync-fundamentals#po-conference"],["id","introduction"],[2,"text-align","center"],["src","./assets/graphics/po-sync/event-sourcing.jpg",1,"po-mt-2","po-mb-2",2,"max-width","100%"],["src","./assets/graphics/po-sync/sync-send.jpg",1,"po-mt-2","po-mb-2",2,"max-width","100%"],["src","./assets/graphics/po-sync/sync-get.jpg",1,"po-mt-2","po-mb-2",2,"max-width","100%"],["href","/documentation/po-sync"],["href","guides/sync-get-started"],["id","knowledge"],["href","http://es6-features.org"],["href","http://es6-features.org/#PromiseUsage"],["href","https://ionicframework.com/"],["href","http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html"],["href","https://rxjs-dev.firebaseapp.com/guide/overview"],["id","schemas"],["id","create-schema"],[1,"language-shell"],[1,"language-typescript"],["id","schematic"],["id","prepare-api"],["id","logical-deletion"],[1,"language-javascript"],["id","sync-url"],["href","https://po-sample-conference.onrender.com/conferences/diff/2018-10-08T13:23:31.893Z"],["href","https://po-ui.io/guides/api"],["id","prepare"],["id","periodic"],["id","load-data"],["id","po-entity"],["href","/documentation/po-entity"],["id","find-data"],["href","/documentation/po-query-builder"],["id","save-and-remove"],["id","sync"],["id","advanced-techniques"],["id","on-sync"],["id","po-data-transform"],["href","/documentation/po-data-transform"],["id","get-responses"],["href","/documentation/po-event-sourcing-error-response"],["id","insert-http-command"],["id","custom-request-id"],["id","schemas-definition"],["id","po-conference"],["href","https://github.com/ionic-team/ionic-conference-app"],["href","https://github.com/po-ui/po-sample-conference"]],template:function(o,s){o&1&&(t(0,"po-page-default",0)(1,"h2"),e(2,"Conte\xFAdo"),n(),t(3,"ul")(4,"li")(5,"a",1),e(6,"Introdu\xE7\xE3o"),n()(),t(7,"li")(8,"a",2),e(9,"Conhecimentos necess\xE1rios"),n()(),t(10,"li")(11,"a",3)(12,"em"),e(13,"Schemas"),n()(),t(14,"ul")(15,"li")(16,"a",4),e(17,"Como criar um "),t(18,"em"),e(19,"schema"),n()()(),t(20,"li")(21,"a",5),e(22,"Schematic"),n()()()(),t(23,"li")(24,"a",6),e(25,"Preparando a API para a sincroniza\xE7\xE3o"),n(),t(26,"ul")(27,"li")(28,"a",7),e(29,"Exclus\xE3o l\xF3gica"),n()(),t(30,"li")(31,"a",8)(32,"em"),e(33,"Endpoint"),n(),e(34," de sincroniza\xE7\xE3o"),n()()()(),t(35,"li")(36,"a",9),e(37,"Preparando a aplica\xE7\xE3o"),n(),t(38,"ul")(39,"li")(40,"a",10),e(41,"Sincroniza\xE7\xE3o peri\xF3dica"),n()(),t(42,"li")(43,"a",11),e(44,"Carga inicial dos dados"),n()()()(),t(45,"li")(46,"a",12),e(47,"Manipulando os registros de um "),t(48,"em"),e(49,"schema"),n()(),t(50,"ul")(51,"li")(52,"a",13),e(53,"Buscando os registros"),n()(),t(54,"li")(55,"a",14),e(56,"Cria\xE7\xE3o, atualiza\xE7\xE3o e exclus\xE3o de um registro"),n()()()(),t(57,"li")(58,"a",15),e(59,"Sincroniza\xE7\xE3o manual"),n()(),t(60,"li")(61,"a",16),e(62,"T\xE9cnicas avan\xE7adas"),n(),t(63,"ul")(64,"li")(65,"a",17),e(66,"Notifica\xE7\xE3o p\xF3s-sincroniza\xE7\xE3o"),n()(),t(67,"li")(68,"a",18),e(69,"Adaptando a resposta da API para o padr\xE3o do PO UI"),n()(),t(70,"li")(71,"a",19),e(72,"Capturando respostas da sincroniza\xE7\xE3o"),n()(),t(73,"li")(74,"a",20),e(75,"Inserindo requisi\xE7\xF5es HTTP na fila de eventos"),n()(),t(76,"li")(77,"a",21),e(78,"Cria\xE7\xE3o de identificador customizado para eventos da fila"),n()(),t(79,"li")(80,"a",22),e(81,"Alterando as defini\xE7\xF5es dos "),t(82,"em"),e(83,"schemas"),n()()()()(),t(84,"li")(85,"a",23),e(86,"Aplicativo de demonstra\xE7\xE3o do PO Sync"),n()()(),t(87,"p"),i(88,"a",24),n(),t(89,"h2"),e(90,"Introdu\xE7\xE3o"),n(),t(91,"p"),e(92,`O PO Sync \xE9 uma biblioteca que possibilita armazenar dados na aplica\xE7\xE3o local mantendo a sincroniza\xE7\xE3o entre os dados locais e o servidor.
Permitindo que o usu\xE1rio utilize a aplica\xE7\xE3o tanto `),t(93,"em"),e(94,"online"),n(),e(95," quanto "),t(96,"em"),e(97,"offline"),n(),e(98,", com a mesma experi\xEAncia de uso."),n(),t(99,"h3"),e(100,"Como o PO Sync mant\xE9m os dados atualizados com o servidor?"),n(),t(101,"p"),e(102,`Todas as modifica\xE7\xF5es nos registros como criar, alterar e excluir acontecem primeiramente no armazenamento local.
Para cada modifica\xE7\xE3o feita em um registro tamb\xE9m \xE9 criado um evento. Este evento representa uma opera\xE7\xE3o, sendo
composto basicamente pelo tipo de opera\xE7\xE3o (cria\xE7\xE3o, altera\xE7\xE3o ou remo\xE7\xE3o) e o registro modificado.
Este evento \xE9 adicionado a uma fila de eventos que ser\xE1 consumida pelo processo de sincroniza\xE7\xE3o (atualiza\xE7\xE3o dos dados).
Este processo \xE9 demonstrado na figura a seguir:`),n(),t(103,"p",25),i(104,"img",26),n(),t(105,"p"),e(106,"\xC9 no processo de sincroniza\xE7\xE3o que os dados s\xE3o atualizados tanto da aplica\xE7\xE3o local para o servidor quanto do servidor para a aplica\xE7\xE3o local."),n(),t(107,"blockquote")(108,"p"),e(109,"A sincroniza\xE7\xE3o sempre acontece com a aplica\xE7\xE3o "),t(110,"em"),e(111,"online"),n(),e(112," e em segundo plano, permitindo que o usu\xE1rio continue utilizando a aplica\xE7\xE3o normalmente."),n()(),t(113,"h4"),e(114,"Como ocorre a sincroniza\xE7\xE3o?"),n(),t(115,"p"),e(116,"A sincroniza\xE7\xE3o dos dados acontece em duas etapas:"),n(),t(117,"p")(118,"strong"),e(119,"1)"),n(),e(120," Busca os itens da fila de eventos e envia os dados modificados da aplica\xE7\xE3o local para o servidor sequencialmente:"),n(),t(121,"p",25),i(122,"img",27),n(),t(123,"p")(124,"strong"),e(125,"2)"),n(),e(126," Busca os dados que foram modificados no servidor e atualiza na aplica\xE7\xE3o local:"),n(),t(127,"p",25),i(128,"img",28),n(),t(129,"p"),e(130,"Esta sincroniza\xE7\xE3o pode ser acionada (gatilho) das seguintes formas:"),n(),t(131,"ul")(132,"li")(133,"p"),e(134,"Reativa: toda vez que houver alguma mudan\xE7a no hardware do dispositivo, como na troca do tipo de rede 4G para WI-FI;"),n()(),t(135,"li")(136,"p")(137,"a",10),e(138,"Peri\xF3dica"),n(),e(139,": ser\xE1 acionada periodicamente baseada nos par\xE2metros de configura\xE7\xF5es do "),t(140,"a",29),e(141,"PoSyncConfig"),n(),e(142,";"),n()(),t(143,"li")(144,"p")(145,"a",15),e(146,"Manualmente"),n(),e(147,": ser\xE1 acionada na chamada manual do m\xE9todo "),t(148,"code"),e(149,"PoSyncService.sync()"),n(),e(150,"."),n()()(),t(151,"blockquote")(152,"p"),e(153,"Antes de continuar os pr\xF3ximos passos, siga as instru\xE7\xF5es do "),t(154,"a",30),e(155,"Come\xE7ando com o PO Sync"),n(),e(156,` para
saber como criar um novo projeto com Ionic 7 utilizando o PO Sync.`),n()(),t(157,"p"),i(158,"a",31),n(),t(159,"h2"),e(160,"Conhecimentos necess\xE1rios"),n(),t(161,"p"),e(162,"Para compreender o funcionamento do PO Sync e utiliz\xE1-lo \xE9 necess\xE1rio ter conhecimento t\xE9cnico em:"),n(),t(163,"ul")(164,"li")(165,"a",32),e(166,"JavaScript (ES6)"),n(),e(167,", em particular a utiliza\xE7\xE3o do padr\xE3o "),t(168,"a",33)(169,"em"),e(170,"Promises"),n()(),e(171,";"),n(),t(172,"li")(173,"a",34),e(174,"Ionic"),n(),e(175,";"),n(),t(176,"li")(177,"a",35),e(178,"Observable"),n(),e(179," do "),t(180,"a",36),e(181,"RxJS"),n(),e(182,";"),n(),t(183,"li"),e(184,"Protocolo de comunica\xE7\xE3o HTTP;"),n(),t(185,"li"),e(186,"Arquitetura REST."),n()(),t(187,"p"),i(188,"a",37),n(),t(189,"h2")(190,"em"),e(191,"Schemas"),n()(),t(192,"p"),e(193,"O PO Sync sincroniza os dados com base em um conjunto de "),t(194,"em"),e(195,"schemas"),n(),e(196,". Onde cada "),t(197,"em"),e(198,"schema"),n(),e(199,` representa um modelo de dados,
ou seja, a estrutura l\xF3gica e as caracter\xEDsticas de um conjunto de registros. Sendo semelhante a uma tabela
convencional de um banco de dados, como por exemplo uma tabela de clientes, produtos ou autom\xF3veis. No entanto os `),t(200,"em"),e(201,"schemas"),n(),e(202,`
n\xE3o possuem relacionamentos entre si como as tabelas convencionais.`),n(),t(203,"p"),i(204,"a",38),n(),t(205,"h3"),e(206,"Como criar um "),t(207,"em"),e(208,"schema"),n()(),t(209,"p"),e(210,"Cada "),t(211,"em"),e(212,"schema"),n(),e(213," deve implementar a interface "),t(214,"a",29),e(215,"PoSyncSchema"),n(),e(216,". Para criar um "),t(217,"em"),e(218,"schema"),n(),e(219,` que represente uma "Confer\xEAncia"
podemos fazer:`),n(),t(220,"pre")(221,"code",39),e(222,`ng generate @po-ui/ng-sync:schema --name=conference
`),n()(),t(223,"p"),e(224,"O comando ng generate do Angular CLI criar\xE1 um arquivo com uma estrutura semelhante a essa:"),n(),t(225,"pre")(226,"code",40),e(227,`import { PoSyncSchema } from '@po-ui/ng-sync';

const conferenceSchema: PoSyncSchema = {
  // Endpoint para o m\xE9todo GET
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  deletedField: 'isDeleted',
  fields: [ 'id', 'title', 'date', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),n()(),t(228,"p"),e(229,"Nesta defini\xE7\xE3o de "),t(230,"em"),e(231,"schema"),n(),e(232," podem ser configurados os "),t(233,"em"),e(234,"endpoints"),n(),e(235,` para os m\xE9todos HTTP: GET, POST, DELETE e PATCH,
sendo somente o `),t(236,"em"),e(237,"endpoint"),n(),e(238,` do m\xE9todo GET obrigat\xF3rio. Caso os demais n\xE3o sejam informados, ser\xE1 utilizado o mesmo endere\xE7o
do `),t(239,"em"),e(240,"endpoint"),n(),e(241," do m\xE9todo GET para os outros m\xE9todos."),n(),t(242,"p"),e(243,"A propriedade "),t(244,"code"),e(245,"fields"),n(),e(246," da interface "),t(247,"a",29),e(248,"PoSyncSchema"),n(),e(249,` representa os campos que estar\xE3o no registro.
Por exemplo, para um `),t(250,"em"),e(251,"schema"),n(),e(252," do tipo Pessoa, poder\xEDamos ter os campos: nome, idade e endere\xE7o."),n(),t(253,"p"),e(254,`N\xE3o necessariamente precisam ser representados todos os campos retornados pela API, somente os necess\xE1rios para as
manipula\xE7\xF5es atrav\xE9s do PO Sync.`),n(),t(255,"p"),i(256,"a",41),n(),t(257,"h3"),e(258,"Schematic"),n(),t(259,"p"),e(260,"Voc\xEA pode utilizar um schematic para criar o arquivo com a estrutura b\xE1sica do schema."),n(),t(261,"p"),e(262,"Para isso utilize o comando"),n(),t(263,"pre")(264,"code",39),e(265,`ng generate @po-ui/ng-sync:schema
`),n()(),t(266,"p"),e(267,"Voc\xEA tamb\xE9m pode informar um caminho completo."),n(),t(268,"pre")(269,"code",39),e(270,`ng generate @po-ui/ng-sync:schema --name=conference/schema/conference
`),n()(),t(271,"p"),e(272,"Ou apenas o nome do schema que ele criar\xE1 o arquivo na pasta que o comando for executado."),n(),t(273,"pre")(274,"code",39),e(275,`ng generate @po-ui/ng-sync:schema --name=conference
`),n()(),t(276,"p"),i(277,"a",42),n(),t(278,"h2"),e(279,"Preparando a API para a sincroniza\xE7\xE3o"),n(),t(280,"p"),e(281,"Para que a sincroniza\xE7\xE3o aconte\xE7a corretamente \xE9 necess\xE1rio que a API tenha implementado a "),t(282,"a",7),e(283,"exclus\xE3o l\xF3gica"),n(),e(284," e um "),t(285,"a",8)(286,"em"),e(287,"endpoint"),n(),e(288," de sincroniza\xE7\xE3o"),n(),e(289,"."),n(),t(290,"p"),i(291,"a",43),n(),t(292,"h3"),e(293,"Exclus\xE3o l\xF3gica"),n(),t(294,"p"),e(295,`A exclus\xE3o dos registros na API dever\xE1 ser feita de forma l\xF3gica, ou seja, \xE9 necess\xE1rio que cada registro contenha um
campo que representa se aquele registro foi exclu\xEDdo, por exemplo:`),n(),t(296,"pre")(297,"code",44),e(298,`{
  "id": 1,
  "title": "PO conference 2018",
  "date": "2018-08-11T00:00:00Z",
  "location": "Av. Santos Dumont, 831 - Santo Ant\xF4nio, Joinville - SC",
  "description": "Conference organized by PO",
  // Campo informando se o registro foi exclu\xEDdo
  "isDeleted": false
}
`),n()(),t(299,"p"),e(300,"No registro acima o campo chamado "),t(301,"code"),e(302,"isDeleted"),n(),e(303," descreve se ele foi exclu\xEDdo ou n\xE3o."),n(),t(304,"p"),e(305,"Esta informa\xE7\xE3o do campo dever\xE1 ser fornecida ao PO Sync dentro da declara\xE7\xE3o de cada "),t(306,"em"),e(307,"schema"),n(),e(308,`, para isso temos a
propriedade `),t(309,"code"),e(310,"deletedField"),n(),e(311," na interface "),t(312,"a",29),e(313,"PoSyncSchema"),n(),e(314,", por exemplo:"),n(),t(315,"pre")(316,"code",40),e(317,`import { PoSyncSchema } from '@po-ui/ng-sync';

const conferenceSchema: PoSyncSchema = {
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  // Defini\xE7\xE3o do nome do campo
  deletedField: 'isDeleted',
  fields: [ 'id', 'title', 'date', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),n()(),t(318,"h4"),e(319,"Porque exclus\xE3o l\xF3gica?"),n(),t(320,"p"),e(321,"A exclus\xE3o l\xF3gica \xE9 utilizada para que outras aplica\xE7\xF5es possam saber se um registro foi removido."),n(),t(322,"p"),e(323,"Imagine que dois aplicativos estejam manipulando o mesmo registro atrav\xE9s de um "),t(324,"em"),e(325,"endpoint"),n(),e(326,`. Um dos aplicativos remove
este registro, como o outro aplicativo saber\xE1 que este registro foi removido? Atrav\xE9s da exclus\xE3o l\xF3gica, o PO Sync
tem o controle dessa informa\xE7\xE3o.`),n(),t(327,"p"),i(328,"a",45),n(),t(329,"h3")(330,"em"),e(331,"Endpoint"),n(),e(332," de sincroniza\xE7\xE3o"),n(),t(333,"p"),e(334,"Sempre que houver uma sincroniza\xE7\xE3o, uma requisi\xE7\xE3o \xE9 feita neste "),t(335,"em"),e(336,"endpoint"),n(),e(337,` utilizando a data da \xFAltima sincroniza\xE7\xE3o
como refer\xEAncia (como par\xE2metro da URL). Ao receber esta data, o `),t(338,"em"),e(339,"endpoint"),n(),e(340,` deve retornar todos os registros que
tiveram a \xFAltima atualiza\xE7\xE3o maior ou igual a data que foi recebida como par\xE2metro, logo, somente os dados n\xE3o
sincronizados ser\xE3o retornados. Para cada um dos `),t(341,"em"),e(342,"schemas"),n(),e(343," \xE9 necess\xE1rio ter um "),t(344,"em"),e(345,"endpoint"),n(),e(346," de sincroniza\xE7\xE3o."),n(),t(347,"p"),e(348,`Abra o seu navegador e acesse a URL
`),t(349,"a",46),e(350,"https://po-sample-conference.onrender.com/conferences/diff/2018-10-08T13:23:31.893Z"),n(),e(351,"."),n(),t(352,"p"),e(353,"O "),t(354,"em"),e(355,"endpoint"),n(),e(356," de sincroniza\xE7\xE3o deve retornar uma resposta com a estrutura como a da URL acima, por exemplo:"),n(),t(357,"pre")(358,"code",44),e(359,`{
  "hasNext": false,
  "items": [],
  "po_sync_date": "2018-10-08T13:57:55.008Z"
}
`),n()(),t(360,"p"),e(361,"Onde:"),n(),t(362,"ul")(363,"li")(364,"code"),e(365,"hasNext"),n(),e(366,": Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),n(),t(367,"li")(368,"code"),e(369,"items"),n(),e(370,": Lista de itens retornados."),n(),t(371,"li")(372,"code"),e(373,"po_sync_date"),n(),e(374,`: Data da \xFAltima sincroniza\xE7\xE3o. Ao realizar esta requisi\xE7\xE3o estamos solicitando uma
sincroniza\xE7\xE3o, ent\xE3o esta data deve ser a data em que o servidor est\xE1 devolvendo a resposta. Se na requisi\xE7\xE3o o `),t(375,"em"),e(376,"endpoint"),n(),e(377,`
n\xE3o enviar esta data, n\xE3o ser\xE1 poss\xEDvel fazer a pr\xF3xima sincroniza\xE7\xE3o, pois esta data ser\xE1 utilizada
para a pr\xF3xima URL de sincroniza\xE7\xE3o.`),n()(),t(378,"blockquote")(379,"p"),e(380,"Esta estrutura de resposta \xE9 padronizada pelo "),t(381,"a",47),e(382,"Guia de implementa\xE7\xE3o de APIs"),n(),e(383,"."),n()(),t(384,"blockquote")(385,"p")(386,"strong"),e(387,"Primeira sincroniza\xE7\xE3o:"),n(),e(388," como na primeira sincroniza\xE7\xE3o o PO Sync ainda n\xE3o recebeu nenhuma data dos "),t(389,"em"),e(390,"endpoints"),n(),e(391,`, a URL \xE9 montada com uma data muito
antiga, o que faz com que todos os dados sejam retornados na primeira sincroniza\xE7\xE3o.`),n()(),t(392,"p"),e(393,"A defini\xE7\xE3o deste "),t(394,"em"),e(395,"endpoint"),n(),e(396," deve ser feita na propriedade "),t(397,"code"),e(398,"diffUrlApi"),n(),e(399," da sua defini\xE7\xE3o do "),t(400,"em"),e(401,"schema"),n(),e(402,`, como no exemplo
abaixo:`),n(),t(403,"pre")(404,"code",40),e(405,`import { PoSyncSchema } from '@po-ui/ng-sync';

const conferenceSchema: PoSyncSchema = {
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  // Defini\xE7\xE3o da URL de sincroniza\xE7\xE3o
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  deletedField: 'isDeleted',
  fields: [ 'id', 'title', 'date', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),n()(),t(406,"p"),i(407,"a",48),n(),t(408,"h2"),e(409,"Preparando a aplica\xE7\xE3o"),n(),t(410,"p"),e(411,"Ap\xF3s ter criado os "),t(412,"em"),e(413,"schemas"),n(),e(414,` e preparado a API, \xE9 necess\xE1rio preparar a aplica\xE7\xE3o para utilizar o PO Sync passando para
ele os `),t(415,"em"),e(416,"schemas"),n(),e(417," e as configura\xE7\xF5es iniciais. Se voc\xEA seguiu o guia "),t(418,"a",30),e(419,"Come\xE7ando com o PO Sync"),n(),e(420,`,
dentro do arquivo `),t(421,"code"),e(422,"src/app/app.component.ts"),n(),e(423,", no m\xE9todo "),t(424,"code"),e(425,"initSync()"),n(),e(426," foi feita a seguinte implementa\xE7\xE3o:"),n(),t(427,"pre")(428,"code",40),e(429,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet
};
const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  this.poSync.sync();
  ...
});
`),n()(),t(430,"p"),e(431,"A vari\xE1vel "),t(432,"code"),e(433,"config"),n(),e(434," implementa a interface "),t(435,"a",29),e(436,"PoSyncConfig"),n(),e(437,` e representa as configura\xE7\xF5es iniciais de sincroniza\xE7\xE3o. Neste
exemplo, a propriedade `),t(438,"code"),e(439,"type"),n(),e(440,` descreve o tipo de conex\xE3o que ir\xE1 permitir que aconte\xE7a o sincronismo. Ao terminar de
preparar a aplica\xE7\xE3o os dados estar\xE3o dispon\xEDveis para serem sincronizados do servidor para a aplica\xE7\xE3o local. Por esta raz\xE3o,
ap\xF3s a conclus\xE3o da promessa deste m\xE9todo, o `),t(441,"code"),e(442,"poSync.sync()"),n(),e(443," pode ser chamado para sincronizar os dados."),n(),t(444,"p"),i(445,"a",49),n(),t(446,"h3"),e(447,"Sincroniza\xE7\xE3o peri\xF3dica"),n(),t(448,"p"),e(449,"Para que os dados sejam atualizados dentro de um per\xEDodo de tempo, modifique a constante "),t(450,"code"),e(451,"config"),n(),e(452,` do exemplo
anterior para ficar da seguinte forma:`),n(),t(453,"pre")(454,"code",40),e(455,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  // Linha adicionada
  period: 30
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  this.poSync.sync();
  ...
});
`),n()(),t(456,"p"),e(457,"Onde o valor da propriedade "),t(458,"code"),e(459,"period"),n(),e(460," define que o sincronismo dever\xE1 ser ativado a cada 30 segundos."),n(),t(461,"p"),i(462,"a",50),n(),t(463,"h3"),e(464,"Carga inicial dos dados"),n(),t(465,"p"),e(466,"Caso queira fazer a carga inicial dos dados que est\xE3o no servidor antes de fazer o primeiro sincronismo, o servi\xE7o "),t(467,"a",29),e(468,"PoSyncService"),n(),e(469,`
disponibiliza um m\xE9todo chamado `),t(470,"code"),e(471,"PoSyncService.loadData()"),n(),e(472,"."),n(),t(473,"blockquote")(474,"p")(475,"strong"),e(476,"Aten\xE7\xE3o:"),n(),e(477," este m\xE9todo deve ser chamado apenas uma vez para carregar os dados iniciais e antes do primeiro sincronismo."),n()(),t(478,"p"),e(479,"Para implementar a carga inicial no c\xF3digo anterior, basta substituir a linha onde estava "),t(480,"code"),e(481,"this.poSync.sync();"),n(),e(482,` pela
seguinte implementa\xE7\xE3o:`),n(),t(483,"pre")(484,"code",40),e(485,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  period: 30
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  
  // Implementa\xE7\xE3o adicionada
  if(<condicao>) {
    this.poSync.loadData();
  }

});
`),n()(),t(486,"p"),e(487,"Onde "),t(488,"code"),e(489,"<condicao>"),n(),e(490,` deve ser substitu\xEDda por uma valida\xE7\xE3o que verifique se \xE9 a primeira vez em que os dados est\xE3o sendo
carregados na aplica\xE7\xE3o, como por exemplo na instala\xE7\xE3o do aplicativo.`),n(),t(491,"p"),i(492,"a",51),n(),t(493,"h2"),e(494,"Manipulando os registros de um "),t(495,"em"),e(496,"schema"),n()(),t(497,"p"),e(498,"Toda a manipula\xE7\xE3o dos registros de um "),t(499,"em"),e(500,"schema"),n(),e(501,` como salvar, remover e buscar \xE9 feita atrav\xE9s da inst\xE2ncia da classe
`),t(502,"a",52),e(503,"PoEntity"),n(),e(504," que pode ser obtida a partir do m\xE9todo "),t(505,"code"),e(506,"PoSyncService.getModel()"),n(),e(507,", por exemplo:"),n(),t(508,"pre")(509,"code",40),e(510,`this.conferenceModel = await this.poSync.getModel('conference');
`),n()(),t(511,"p"),e(512,'Onde o par\xE2metro "conference" representa o nome do '),t(513,"em"),e(514,"schema"),n(),e(515,` que se deseja manipular.
Este \xE9 o mesmo valor colocado na propriedade `),t(516,"code"),e(517,"name"),n(),e(518," da interface "),t(519,"a",29),e(520,"PoSyncSchema"),n(),e(521,"."),n(),t(522,"p"),e(523,"Agora com esta inst\xE2ncia podemos utilizar todos os m\xE9todos do "),t(524,"a",52),e(525,"PoEntity"),n(),e(526," para manipular os registros."),n(),t(527,"p"),i(528,"a",53),n(),t(529,"h3"),e(530,"Buscando os registros"),n(),t(531,"blockquote")(532,"p"),e(533,"A busca dos registros sempre \xE9 feita na aplica\xE7\xE3o local, pois a mesma \xE9 atualizada com o servidor atrav\xE9s do processo de sincroniza\xE7\xE3o."),n()(),t(534,"p"),e(535,"Com a inst\xE2ncia de "),t(536,"a",52),e(537,"PoEntity"),n(),e(538," armazenada na propriedade "),t(539,"code"),e(540,"this.conferenceModel"),n(),e(541,` podemos buscar
os registros com o `),t(542,"code"),e(543,"PoEntity.find()"),n(),e(544," da seguinte forma:"),n(),t(545,"pre")(546,"code",40),e(547,`this.conferences = await this.conferenceModel.find().exec();
`),n()(),t(548,"p"),e(549,"Podemos notar que ap\xF3s usar o m\xE9todo, foi necess\xE1rio concaten\xE1-lo com o m\xE9todo "),t(550,"code"),e(551,"PoQueryBuilder.exec()"),n(),e(552,`
para que a busca pudesse ser conclu\xEDda e os registros serem retornados.`),n(),t(553,"p"),e(554,"Isso acontece porque o m\xE9todo "),t(555,"code"),e(556,"PoEntity.find()"),n(),e(557," retorna uma inst\xE2ncia da classe "),t(558,"a",54),e(559,"PoQueryBuilder"),n(),e(560,` e todos os m\xE9todos
desta classe podem ser encadeados e no final chamar o m\xE9todo `),t(561,"code"),e(562,"PoQueryBuilder.exec()"),n(),e(563," para concluir a busca."),n(),t(564,"p"),e(565,"Por exemplo, para buscar os dados e orden\xE1-los pelo campo do "),t(566,"em"),e(567,"schema"),n(),e(568," chamado "),t(569,"code"),e(570,"title"),n(),e(571,", podemos fazer:"),n(),t(572,"pre")(573,"code",40),e(574,`this.conferences = await this.conferenceModel.find().sort('title').exec();
`),n()(),t(575,"p"),e(576,"E se quisermos retornar somente os campos "),t(577,"code"),e(578,"title"),n(),e(579," e "),t(580,"code"),e(581,"location"),n(),e(582,", podemos fazer:"),n(),t(583,"pre")(584,"code",40),e(585,`this.conferences = await this.conferenceModel.find().sort('title').select('title location').exec();
`),n()(),t(586,"blockquote")(587,"p"),e(588,"Para saber mais sobre os m\xE9todos para constru\xE7\xE3o de consultas, acesse "),t(589,"a",54),e(590,"PoQueryBuilder"),n(),e(591,"."),n()(),t(592,"p"),i(593,"a",55),n(),t(594,"h3"),e(595,"Cria\xE7\xE3o, atualiza\xE7\xE3o e exclus\xE3o de um registro"),n(),t(596,"p"),e(597,"Ainda com a inst\xE2ncia de "),t(598,"a",52),e(599,"PoEntity"),n(),e(600," podemos utilizar o m\xE9todo "),t(601,"code"),e(602,"PoEntity.save()"),n(),e(603,` para criar um
novo registro. Portanto para criar uma nova confer\xEAncia no nosso exemplo, podemos fazer:`),n(),t(604,"pre")(605,"code",40),e(606,`const conference = { title: 'BrasilJS', location: 'Barra Shopping Sul - Porto Alegre, RS - Brasil' };

this.conferenceModel.save(conference).then(() => {
  // Confer\xEAncia criada!
});
`),n()(),t(607,"p"),e(608,"E para atualizar a confer\xEAncia, \xE9 necess\xE1rio ter o registro buscado atrav\xE9s do "),t(609,"a",52),e(610,"PoEntity"),n(),e(611,`,
pois este registro dever\xE1 conter o `),t(612,"em"),e(613,"id"),n(),e(614," depois que for salvo."),n(),t(615,"p"),e(616,"Por exemplo, para buscarmos e atualizarmos a confer\xEAncia que criamos acima, podemos fazer:"),n(),t(617,"p")(618,"strong"),e(619,"1)"),n(),e(620,' Buscar a confer\xEAncia pelo t\xEDtulo "BrasilJS":'),n(),t(621,"pre")(622,"code",40),e(623,`const conferenceUpdated = await this.conferenceModel.find().filter({ title: 'BrasilJS' }).exec();
`),n()(),t(624,"p")(625,"strong"),e(626,"2)"),n(),e(627," Podemos atualizar a localiza\xE7\xE3o, por exemplo:"),n(),t(628,"pre")(629,"code",40),e(630,`conferenceUpdated.location = 'UFRGS - Porto Alegre, RS - Brasil';
`),n()(),t(631,"p")(632,"strong"),e(633,"3)"),n(),e(634," Utilizamos o m\xE9todo "),t(635,"code"),e(636,"PoEntity.save()"),n(),e(637," para efetuar a atualiza\xE7\xE3o:"),n(),t(638,"pre")(639,"code",40),e(640,`this.conferenceModel.save(conferenceUpdated).then(() => {
  // Confer\xEAncia atualizada!
});
`),n()(),t(641,"p"),e(642,"Para excluir um registro tamb\xE9m \xE9 necess\xE1rio busc\xE1-lo atrav\xE9s do "),t(643,"a",52),e(644,"PoEntity"),n(),e(645,`
como na atualiza\xE7\xE3o e ap\xF3s esta busca utilizar o m\xE9todo `),t(646,"code"),e(647,"PoEntity.remove()"),n(),e(648," para remover o registro, por exemplo:"),n(),t(649,"pre")(650,"code",40),e(651,`const conferenceRemove = await this.conferenceModel.find().filter({ title: 'BrasilJS' }).exec();

this.conferenceModel.remove(conferenceRemove).then(() => {
  // Confer\xEAncia removida!
});
`),n()(),t(652,"p"),i(653,"a",56),n(),t(654,"h2"),e(655,"Sincroniza\xE7\xE3o manual"),n(),t(656,"p"),e(657,`Existem casos onde o usu\xE1rio do aplicativo deseja ativar manualmente a sincroniza\xE7\xE3o, como por exemplo apertando um
bot\xE3o para atualizar os dados.`),n(),t(658,"p"),e(659,"Esta opera\xE7\xE3o pode ser feita atrav\xE9s do m\xE9todo "),t(660,"code"),e(661,"PoSyncService.sync()"),n(),e(662,". Por exemplo:"),n(),t(663,"pre")(664,"code",40),e(665,`this.poSync.sync().then(() => {
  // Sincroniza\xE7\xE3o conclu\xEDda
}).catch(() => {
  // Erro durante a sincroniza\xE7\xE3o
});
`),n()(),t(666,"p"),i(667,"a",57),n(),t(668,"h2"),e(669,"T\xE9cnicas avan\xE7adas"),n(),t(670,"p"),i(671,"a",58),n(),t(672,"h3"),e(673,"Notifica\xE7\xE3o p\xF3s-sincroniza\xE7\xE3o"),n(),t(674,"p"),e(675,`Em algumas situa\xE7\xF5es, \xE9 necess\xE1rio ser notificado sempre que uma sincroniza\xE7\xE3o acontecer para, por exemplo, atualizar a tela do usu\xE1rio com os dados sincronizados. Para isso, se inscreva atrav\xE9s do m\xE9todo
`),t(676,"code"),e(677,"PoSyncService.onSync()"),n(),e(678," que ir\xE1 notific\xE1-lo sempre que uma sincroniza\xE7\xE3o acontecer com sucesso."),n(),t(679,"p"),e(680,"Por exemplo, no guia "),t(681,"a",30),e(682,"Come\xE7ando com o PO Sync"),n(),e(683,` temos a utiliza\xE7\xE3o do m\xE9todo
`),t(684,"code"),e(685,"PoSyncService.onSync()"),n(),e(686," dentro do "),t(687,"code"),e(688,"constructor()"),n(),e(689,", localizado no arquivo "),t(690,"code"),e(691,"src/pages/home/home.ts"),n(),e(692,":"),n(),t(693,"pre")(694,"code",40),e(695,`constructor(public navCtrl: NavController, private poSync: PoSyncService) {
  // Deve chamar o m\xE9todo loadHomePage() sempre que acontecer uma sincroniza\xE7\xE3o
  this.poSync.onSync().subscribe(() => this.loadHomePage());
}

async loadHomePage() {
  this.conference = await this.poSync.getModel('conference').findOne().exec();
}
`),n()(),t(696,"blockquote")(697,"p"),e(698,"Para saber mais sobre este m\xE9todo acesse "),t(699,"a",29),e(700,"PoSyncService.onSync()"),n(),e(701,"."),n()(),t(702,"p"),i(703,"a",59),n(),t(704,"h3"),e(705,"Adaptando a resposta da API para o padr\xE3o do PO"),n(),t(706,"p"),e(707,"O PO Sync necessita que as APIs utilizem o padr\xE3o de respostas que est\xE1 no "),t(708,"a",47),e(709,"Guia de implementa\xE7\xE3o de APIs"),n(),e(710," que segue a seguinte estrutura:"),n(),t(711,"pre")(712,"code",44),e(713,`{
  "hasNext": boolean,
  "items": [],
  "po_sync_date": date
}
`),n()(),t(714,"p"),e(715,"No entanto, existem APIs que ainda n\xE3o seguem este padr\xE3o. Imagine que voc\xEA possua uma API que sempre retorne a seguinte estrutura:"),n(),t(716,"pre")(717,"code",40),e(718,`{
  "next": string,
  "data": [],
  "sync_date": date
}
`),n()(),t(719,"p"),e(720,"Onde:"),n(),t(721,"ul")(722,"li")(723,"code"),e(724,"next"),n(),e(725,": \xE9 a URL da pr\xF3xima p\xE1gina. Por exemplo: "),t(726,"code"),e(727,"https://<url>?page=3"),n(),e(728,";"),n(),t(729,"li")(730,"code"),e(731,"data"),n(),e(732,": lista de itens retornados;"),n(),t(733,"li")(734,"code"),e(735,"sync_date"),n(),e(736,": data da \xFAltima sincroniza\xE7\xE3o."),n()(),t(737,"p"),e(738,"E a API espera para pagina\xE7\xE3o os seguintes par\xE2metros na URL:"),n(),t(739,"ul")(740,"li")(741,"code"),e(742,"pageNumber"),n(),e(743,": indica o n\xFAmero da p\xE1gina;"),n(),t(744,"li")(745,"code"),e(746,"size"),n(),e(747,": quantidade de itens por p\xE1gina."),n()(),t(748,"p"),e(749,"Por exemplo:"),n(),t(750,"pre")(751,"code"),e(752,`http://<url>/?pageNumber=2&size=10
`),n()(),t(753,"p"),e(754,"\xC9 poss\xEDvel fazer a adapta\xE7\xE3o desta resposta utilizando a classe "),t(755,"a",60),e(756,"PoDataTransform"),n(),e(757,`.
Esta classe possui uma propriedade chamada `),t(758,"code"),e(759,"data"),n(),e(760," que representa a resposta que o "),t(761,"em"),e(762,"endpoint"),n(),e(763," retornou."),n(),t(764,"p"),e(765,"Para fazer a adapta\xE7\xE3o desta estrutura de resposta:"),n(),t(766,"p")(767,"strong"),e(768,"1)"),n(),e(769," Crie uma nova classe e a fa\xE7a herdar a classe "),t(770,"a",60),e(771,"PoDataTransform"),n(),e(772,":"),n(),t(773,"pre")(774,"code",40),e(775,`import { PoDataTransform } from '@po-ui/ng-sync';

class MyDataTransform extends PoDataTransform {
  ...
}
`),n()(),t(776,"p")(777,"strong"),e(778,"2)"),n(),e(779," Implemente os m\xE9todos da classe "),t(780,"a",60),e(781,"PoDataTransform"),n(),e(782,":"),n(),t(783,"pre")(784,"code",40),e(785,`import { PoDataTransform } from '@po-ui/ng-sync';

class MyDataTransform extends PoDataTransform {

  getDateFieldName(): string {
    return 'sync_date';
  }

  getItemsFieldName(): string {
    return 'data';
  }

  getPageParamName(): string {
    return 'pageNumber';
  }

  getPageSizeParamName(): string {
    return 'size';
  }

  hasNext(): boolean {
    return !!this.data.next;
  }

}
`),n()(),t(786,"p"),e(787,`Os primeiros quatro m\xE9todos representam os nomes que ir\xE3o corresponder a cada par\xE2metro. No nosso exemplo, a cole\xE7\xE3o de
registros n\xE3o est\xE1 em uma propriedade `),t(788,"code"),e(789,"items"),n(),e(790," conforme o padr\xE3o PO UI, mas sim em "),t(791,"code"),e(792,"data"),n(),e(793,`, ent\xE3o no m\xE9todo
`),t(794,"code"),e(795,"MyDataTransform.getItemsFieldName()"),n(),e(796," ser\xE1 retornado o valor "),t(797,"code"),e(798,"data"),n(),e(799,"."),n(),t(800,"p"),e(801,"O m\xE9todo "),t(802,"code"),e(803,"MyDataTransform.hasNext()"),n(),e(804," deve retornar um valor "),t(805,"em"),e(806,"booleano"),n(),e(807,` que determina se existe mais p\xE1ginas para serem
buscadas ou n\xE3o. No nosso exemplo podemos acessar a pr\xF3xima p\xE1gina com a propriedade `),t(808,"code"),e(809,"next"),n(),e(810,`.
Como temos acesso a resposta da API atrav\xE9s da propriedade `),t(811,"code"),e(812,"data"),n(),e(813,", podemos saber se existe uma pr\xF3xima p\xE1gina do seguinte modo:"),n(),t(814,"pre")(815,"code",40),e(816,`hasNext(): boolean {
  return !!this.data.next;
}
`),n()(),t(817,"p")(818,"strong"),e(819,"3)"),n(),e(820," Por fim, deve ser criado uma inst\xE2ncia desta classe "),t(821,"code"),e(822,"MyDataTransform"),n(),e(823," e inclu\xED-la na propriedade do objeto "),t(824,"code"),e(825,"PoSyncConfig"),n(),e(826,`
que \xE9 inserido no m\xE9todo `),t(827,"code"),e(828,"PoSyncService.prepare()"),n(),e(829,", da seguinte forma:"),n(),t(830,"pre")(831,"code",40),e(832,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  period: 30,
  // Inst\xE2ncia da classe MyDataTransform
  dataTransform: new MyDataTransform()
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  ...
});
`),n()(),t(833,"p"),e(834,"Com isto, todas as respostas dos "),t(835,"em"),e(836,"endpoints"),n(),e(837,` dos schemas ser\xE3o adaptados para seguir o padr\xE3o de API do PO UI esperado pelo
PO Sync.`),n(),t(838,"p"),i(839,"a",61),n(),t(840,"h3"),e(841,"Capturando respostas da sincroniza\xE7\xE3o"),n(),t(842,"p"),e(843,`Conforme os itens que est\xE3o na fila de eventos s\xE3o enviados para o servidor \xE9 poss\xEDvel fazer este monitoramento
atrav\xE9s da inscri\xE7\xE3o no m\xE9todo `),t(844,"code"),e(845,"PoSyncService.getResponses()"),n(),e(846,`.
A inscri\xE7\xE3o realizada atrav\xE9s do m\xE9todo `),t(847,"code"),e(848,".subscribe()"),n(),e(849,", retorna um objeto do tipo "),t(850,"code"),e(851,"PoSyncResponse"),n(),e(852,` que cont\xE9m as
informa\xE7\xF5es do item que foi consumido da fila de eventos. Exemplo de utiliza\xE7\xE3o:`),n(),t(853,"pre")(854,"code",40),e(855,`this.poSync.getResponses().subscribe(poSyncResponse => {
  // Foi consumido um item da fila de eventos.
});
`),n()(),t(856,"h4"),e(857,"Em que situa\xE7\xF5es este monitoramento pode ser \xFAtil?"),n(),t(858,"p"),e(859,`Este monitoramento \xE9 \xFAtil para saber se os itens conseguiram ser enviados para o servidor com sucesso. Caso um item
enviado n\xE3o tiver sucesso, o consumo da fila de eventos ser\xE1 suspenso e os demais itens n\xE3o ser\xE3o enviados para o
servidor enquanto este item que n\xE3o est\xE1 sendo enviado for resolvido.`),n(),t(860,"p"),e(861,"O consumo da fila de eventos pode ser suspenso em duas situa\xE7\xF5es:"),n(),t(862,"ul")(863,"li"),e(864,"Se o servidor rejeitar a requisi\xE7\xE3o com "),t(865,"em"),e(866,"status"),n(),e(867," diferente da classe de "),t(868,"em"),e(869,"status 2xx"),n(),e(870," (sucesso);"),n(),t(871,"li"),e(872,"Se um item da fila representa uma requisi\xE7\xE3o de altera\xE7\xE3o ou exclus\xE3o e o registro envolvido n\xE3o possuir "),t(873,"em"),e(874,"id"),n(),e(875,"."),n()(),t(876,"p"),e(877,"Para resolver este tipo de problema, uma solu\xE7\xE3o \xE9 remover este item da fila de eventos, isto pode ser feito da seguinte forma:"),n(),t(878,"pre")(879,"code",40),e(880,`// Monitora o consumo da fila de eventos
this.poSync.getResponses().subscribe(poSyncResponse => {

  // Verifica se o retorno do consumo da fila \xE9 um erro HTTP
  if (poSyncResponse.response instanceof HttpErrorResponse || poSyncResponse.response instanceof PoEventSourcingErrorResponse) {

    // Remove o item da fila de eventos
    this.poSync.removeItemOfSync(poSyncResponse.id).then(() => {
      // Sincroniza os itens novamente
      return this.poSync.resumeSync();
    });

  }

});
`),n()(),t(881,"blockquote")(882,"p"),e(883,"Saiba mais sobre "),t(884,"a",29),e(885,"PoSyncService.getResponses()"),n(),e(886,", "),t(887,"a",29),e(888,"PoSyncService.removeItemOfSync()"),n(),e(889,`
e `),t(890,"a",62),e(891,"PoEventSourcingErrorResponse"),n(),e(892,"."),n()(),t(893,"p"),i(894,"a",63),n(),t(895,"h3"),e(896,"Inserindo requisi\xE7\xF5es HTTP na fila de eventos"),n(),t(897,"p"),e(898,`A manipula\xE7\xE3o da fila de eventos \xE9 feita pelo PO Sync, mas existe a possibilidade de criar um evento na fila contendo uma
requisi\xE7\xE3o HTTP customizada. Isso pode ser feito atrav\xE9s da utiliza\xE7\xE3o do m\xE9todo `),t(899,"code"),e(900,"PoSyncService.insertHttpCommand()"),n(),e(901,`.
Este m\xE9todo recebe como primeiro par\xE2metro um objeto no formato `),t(902,"a",29),e(903,"PoHttpRequestData"),n(),e(904,` que cont\xE9m as informa\xE7\xF5es da requisi\xE7\xE3o.
Exemplo de utiliza\xE7\xE3o:`),n(),t(905,"pre")(906,"code",40),e(907,`const poHttpRequestData: PoHttpRequestData = {
  // URL que ser\xE1 enviada na requisi\xE7\xE3o
  url: 'http://<url>',

  // M\xE9todo HTTP que ser\xE1 utilizado
  method: PoHttpRequestType.POST,

  // Corpo da requisi\xE7\xE3o
  body: { record: 'example' }
};

this.poSync.insertHttpCommand(poHttpRequestData).then(commandId => {
  // Item adicionado na fila de eventos e retornado o ID do evento em "commandId"
});
`),n()(),t(908,"p"),e(909,"O m\xE9todo "),t(910,"code"),e(911,"PoSyncService.insertHttpCommand()"),n(),e(912," retorna uma promessa e no par\xE2metro do "),t(913,"em"),e(914,"callback"),n(),e(915,` da promessa \xE9 fornecido
o identificador daquele evento. Este identificador por ser armazenado e utilizado posteriormente em alguma valida\xE7\xE3o no m\xE9todo
`),t(916,"a",29),e(917,"PoSyncService.getResponses()"),n(),e(918,", por exemplo:"),n(),t(919,"pre")(920,"code",40),e(921,`this.poSync.getResponses().subscribe(poSyncResponse => {

  if(poSyncResponse.id === this.commandResponseId) {
    // \xC9 o evento de requisi\xE7\xE3o HTTP customizado
  }

});

const poHttpRequestData: PoHttpRequestData = {
  // URL que ser\xE1 enviada na requisi\xE7\xE3o
  url: 'http://<url>',

  // M\xE9todo HTTP que ser\xE1 utilizado
  method: PoHttpRequestType.POST,

  // Corpo da requisi\xE7\xE3o
  body: { record: 'example' }
};


this.poSync.insertHttpCommand(poHttpRequestData).then(commandId => {
  // Atribui\xE7\xE3o do identificador do evento a uma propriedade
  this.commandResponseId = commandId
});
`),n()(),t(922,"p"),e(923,"Tamb\xE9m \xE9 poss\xEDvel fazer o envio de arquivo (File) para o servidor utilizando o "),t(924,"code"),e(925,"Content-Type: multipart/form-data"),n(),e(926,". Para isso, deve ser informado no "),t(927,"code"),e(928,"body"),n(),e(929," o "),t(930,"code"),e(931,"rawFile"),n(),e(932,", conforme exemplo abaixo:"),n(),t(933,"pre")(934,"code",40),e(935,`public insertFileHttpCommand(file: File) {
  const requestData: PoHttpRequestData = {
    url: 'http://my-server/api/v1/upload';,
    method: PoHttpRequestType.POST,
    headers: Array<PoHttpHeaderOption> = [{ name: 'Authorization', value: 'Basic ' + btoa('13' + ':' + '13') }],
    body: file.rawFile,
    formField: 'files',
  };

  this.poSync.insertHttpCommand(requestData).then(commandId => {
    // Evento HTTP adicionado na fila de eventos e retornado o ID do evento em "commandId"
  });
}
`),n()(),t(936,"blockquote")(937,"p"),e(938,"Caso n\xE3o seja passado nenhum valor para a propriedade "),t(939,"code"),e(940,"formField"),n(),e(941," ser\xE1 aplicado o valor padr\xE3o "),t(942,"code"),e(943,"file"),n(),e(944,"."),n()(),t(945,"blockquote")(946,"p"),e(947,"Para o envio de arquivos recomendamos o uso priorit\xE1rio do "),t(948,"code"),e(949,"lokijs"),n(),e(950," nas configura\xE7\xF5es do "),t(951,"code"),e(952,"PoStorageModule"),n(),e(953,` por sua maior capacidade de armazenamento.
A configura\xE7\xE3o deve ser feita no `),t(954,"code"),e(955,"app.module.ts"),n(),e(956," da sua aplica\xE7\xE3o, por exemplo:"),n()(),t(957,"pre")(958,"code",40),e(959,`...
@NgModule({
  ...
  imports: [
    ...
    PoStorageModule.forRoot({ // import do m\xF3dulo Po Storage,
      name: 'mystorage',
      storeName: '_mystore',
      driverOrder: ['lokijs', 'indexeddb', 'localstorage', 'websql']
    }),
    PoSyncModule, // import do m\xF3dulo Po Sync
  ],
  ...
})
export class AppModule {}
`),n()(),t(960,"p"),i(961,"a",64),n(),t(962,"h3"),e(963,"Cria\xE7\xE3o de identificador customizado para eventos da fila"),n(),t(964,"p"),e(965,`Para monitorar se um evento em espec\xEDfico foi enviado ou n\xE3o para o servidor \xE9 poss\xEDvel criar um identificador customizado
para ele e inseri-lo como par\xE2metro nos m\xE9todos `),t(966,"code"),e(967,"PoEntity.save()"),n(),e(968,", "),t(969,"code"),e(970,"PoEntity.remove()"),n(),e(971," ou "),t(972,"code"),e(973,"PoSync.insertHttpCommand"),n(),e(974,". Este identificador \xE9 retornado junto com o objeto "),t(975,"code"),e(976,"PoSyncResponse"),n(),e(977," do m\xE9todo "),t(978,"code"),e(979,"PoSync.getResponses()"),n(),e(980,", o que possibilita identificar se o evento foi enviado ou n\xE3o, da seguinte forma:"),n(),t(981,"p"),e(982,"Na cria\xE7\xE3o ou altera\xE7\xE3o de um registro:"),n(),t(983,"pre")(984,"code",40),e(985,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {

  if (poSyncResponse.customRequestId === customId) {
    // A cria\xE7\xE3o/altera\xE7\xE3o com o id-1234 foi processado no servidor
  }

});

const conferenceModel = this.poSync.getModel('conference');

const customId = 'id-1234';

// Inserido o identificador 'customId' no segundo par\xE2metro
conferenceModel.save(conference, customId).then(() => {});
`),n()(),t(986,"p"),e(987,"Na remo\xE7\xE3o de um registro:"),n(),t(988,"pre")(989,"code",40),e(990,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {

  if (poSyncResponse.customRequestId === customId) {
    // A remo\xE7\xE3o com o id-ABC foi processado no servidor
  }

});

const conferenceModel = this.poSync.getModel('conference');

const customId = 'id-ABC';

// Inserido o identificador 'customId' no segundo par\xE2metro
conferenceModel.remove(conference, customId).then(() => {});
`),n()(),t(991,"p"),e(992,"Ou na cria\xE7\xE3o de uma requisi\xE7\xE3o HTTP customizada:"),n(),t(993,"pre")(994,"code",40),e(995,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {
  
  if (poSyncResponse.customRequestId === customId) {
    // A requisi\xE7\xE3o HTTP com o id-XYZ foi processado no servidor
  }

});

const customId = 'id-XYZ';

// Inserido o identificador 'customId' no segundo par\xE2metro
this.poSync.insertHttpCommand(poHttpRequestData, customId).then(() => {});
`),n()(),t(996,"p"),i(997,"a",65),n(),t(998,"h3"),e(999,"Alterando as defini\xE7\xF5es dos "),t(1e3,"em"),e(1001,"schemas"),n()(),t(1002,"p"),e(1003,"Em algumas situa\xE7\xF5es, pode existir a necessidade de alterar a defini\xE7\xE3o do "),t(1004,"em"),e(1005,"schema"),n(),e(1006," que foi inserido como par\xE2metro dentro do m\xE9todo "),t(1007,"code"),e(1008,"PoSyncService.prepare()"),n(),e(1009,". Uma alternativa para fazer esta altera\xE7\xE3o \xE9:"),n(),t(1010,"p")(1011,"strong"),e(1012,"1)"),n(),e(1013," Chamar o m\xE9todo "),t(1014,"a",29)(1015,"code"),e(1016,"PoSynceService.destroy()"),n()(),e(1017,":"),n(),t(1018,"pre")(1019,"code",40),e(1020,`this.poSync.destroy().then(() => {
  // As defini\xE7\xF5es dos schemas, os itens da fila de eventos e todos os registros foram destru\xEDdos
});
`),n()(),t(1021,"blockquote")(1022,"p")(1023,"strong"),e(1024,"Aten\xE7\xE3o:"),n(),e(1025," ao utilizar o m\xE9todo "),t(1026,"code"),e(1027,"PoSynceService.destroy()"),n(),e(1028,`, todos os registros armazenados localmente
ser\xE3o removidos inclusive os itens que estiverem na fila de eventos esperando para sincronizar.`),n()(),t(1029,"p")(1030,"strong"),e(1031,"2)"),n(),e(1032," E ap\xF3s a conclus\xE3o da promessa do m\xE9todo "),t(1033,"code"),e(1034,"PoSynceService.destroy()"),n(),e(1035,` chamar o m\xE9todo
`),t(1036,"code"),e(1037,"PoSyncService.prepare()"),n(),e(1038," com a nova defini\xE7\xE3o:"),n(),t(1039,"pre")(1040,"code",40),e(1041,`// Schemas atualizados
const schemasUpdated = [...];

this.poSync.destroy()
  .then(() => this.poSync.prepare(schemasUpdated, config))
  .then(() => {
    // Defini\xE7\xF5es dos schemas atualizadas
  });
`),n()(),t(1042,"blockquote")(1043,"p")(1044,"strong"),e(1045,"Aten\xE7\xE3o:"),n(),e(1046," para que n\xE3o venham ocorrer erros em a\xE7\xF5es que dependem das defini\xE7\xF5es dos "),t(1047,"em"),e(1048,"schemas"),n(),e(1049,`, recomenda-se utilizar
o m\xE9todo `),t(1050,"code"),e(1051,"PoSyncService.prepare()"),n(),e(1052," logo ap\xF3s o m\xE9todo "),t(1053,"code"),e(1054,"PoSynceService.destroy()"),n(),e(1055,"."),n()(),t(1056,"p"),i(1057,"a",66),n(),t(1058,"h2"),e(1059,"Aplicativo de demonstra\xE7\xE3o do PO Sync"),n(),t(1060,"p"),e(1061,"PO Conference Application \xE9 um aplicativo de demonstra\xE7\xE3o do PO Sync baseado no "),t(1062,"a",67),e(1063,"Ionic Conference Application"),n(),e(1064,". Tendo como objetivo, demonstrar as funcionalidades do PO Sync de forma did\xE1tica."),n(),t(1065,"blockquote")(1066,"p"),e(1067,"Acesse o reposit\xF3rio do aplicativo "),t(1068,"a",68),e(1069,"neste link"),n(),e(1070,"."),n()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var B=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:347,vars:0,consts:[["p-title","Come\xE7ando com o PO Sync",1,"guides","app-portal"],["href","https://ionicframework.com/docs"],["href","/guides/sync-fundamentals"],["href","/documentation/po-sync"],["href","https://nodejs.org/en/"],["href","https://cli.angular.io/"],[1,"language-shell"],["href","https://ionicframework.com/docs/cli/"],[1,"language-json"],[1,"language-typescript"],[1,"language-html"],["href","https://github.com/ionic-team/ionicons/issues/1011"],["src","./assets/graphics/po-sync/app-get-started.gif","alt","Getting Started App"],["href","./guides/sync-fundamentals"],["href","./documentation/po-sync"]],template:function(o,s){o&1&&(t(0,"po-page-default",0)(1,"p"),e(2,"Esse guia servir\xE1 para criar e configurar uma aplica\xE7\xE3o em "),t(3,"a",1),e(4,"Ionic 7"),n(),e(5," com o uso do PO Sync."),n(),t(6,"p"),e(7,`Para maiores detalhes sobre os servi\xE7os e m\xE9todos utilizados neste tutorial, consulte a documenta\xE7\xE3o de
`),t(8,"a",2),e(9,"Fundamentos do PO Sync"),n(),e(10," e a documenta\xE7\xE3o de refer\xEAncia de "),t(11,"a",3),e(12,"API do PO Sync"),n(),e(13,"."),n(),t(14,"h3"),e(15,"Pr\xE9-requisitos"),n(),t(16,"ul")(17,"li")(18,"a",4),e(19,"Node.js e NPM"),n()(),t(20,"li")(21,"a",5),e(22,"Angular CLI"),n(),e(23," (~19.0.0):"),t(24,"ul")(25,"li")(26,"pre")(27,"code",6),e(28,`npm install -g @angular/cli@19
`),n()()()()(),t(29,"li")(30,"a",7),e(31,"Ionic"),n(),e(32," (^7.2.0):"),t(33,"ul")(34,"li")(35,"pre")(36,"code",6),e(37,`npm install -g @ionic/cli@7
`),n()()()()()(),t(38,"blockquote")(39,"p"),e(40,"\xC9 importante ter conhecimento pr\xE9vio em Angular e Ionic para seguir esta documenta\xE7\xE3o e obter melhor entendimento do PO Sync."),n()(),t(41,"h3"),e(42,"Passo 1 - Criando o aplicativo"),n(),t(43,"p"),e(44,"Para a aplica\xE7\xE3o de exemplo usaremos o template "),t(45,"em"),e(46,"blank"),n(),e(47," do Ionic. Para isso, execute o seguinte comando:"),n(),t(48,"pre")(49,"code",6),e(50,`ionic start po-sync-getting-started blank --no-deps
`),n()(),t(51,"blockquote")(52,"p")(53,"code"),e(54,"--no-deps"),n(),e(55,": pula a instala\xE7\xE3o das depend\xEAncias do "),t(56,"code"),e(57,"package.json"),n(),e(58,"."),n()(),t(59,"p"),e(60,"Caso surja a quest\xE3o relacionada ao framework desejado, opte por "),t(61,"code"),e(62,"Angular"),n(),e(63,"."),n(),t(64,"h3"),e(65,"Passo 2 - Instalando as depend\xEAncias"),n(),t(66,"blockquote")(67,"p"),e(68,"\xC9 importante verificar se no passo anterior foram criados o arquivo "),t(69,"code"),e(70,"package-lock.json"),n(),e(71," e a pasta "),t(72,"code"),e(73,"node_modules"),n(),e(74,", caso tenham sido criados vai ser necess\xE1rio apagar ambos antes de prosseguir."),n()(),t(75,"p"),e(76,"\xC9 necess\xE1rio realizar alguns ajustes de compatibilidade do PO para o projeto criado."),n(),t(77,"p"),e(78,"Navegue at\xE9 a pasta do aplicativo:"),n(),t(79,"pre")(80,"code",6),e(81,`cd po-sync-getting-started
`),n()(),t(82,"p"),e(83,"Antes de executar a instala\xE7\xE3o, \xE9 necess\xE1rio que todas as depend\xEAncias do projeto estejam declaradas de acordo com a vers\xE3o do PO no arquivo "),t(84,"code"),e(85,"package.json"),n(),e(86,", localizado na raiz da aplica\xE7\xE3o:"),n(),t(87,"pre")(88,"code",8),e(89,`  ...
  "dependencies": {
    "@angular/animations": "~19.0.0",
    "@angular/common": "~19.0.0",
    "@angular/compiler": "~19.0.0",
    "@angular/core": "~19.0.0",
    "@angular/forms": "~19.0.0",
    "@angular/platform-browser": "~19.0.0",
    "@angular/platform-browser-dynamic": "~19.0.0",
    "@angular/router": "~19.0.0",
    "@angular/service-worker": "~19.0.0",
    "@ionic/angular": "^8.0.0",
    "@capacitor/network": "^6.0.1",
    "@capacitor/splash-screen": "^6.0.1",
    "@capacitor/status-bar": "6.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.15.0"
    ...
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~19.2.3",
    "@angular-devkit/schematics": "~19.0.5",
    "@angular/cli": "~19.0.5",
    "@angular/compiler-cli": "~19.0.0",
    "@angular/language-service": "~19.0.0",
    "@ionic/angular-toolkit": "^11.0.1",
    "typescript": "~5.6.2"
  },
  ...
`),n()(),t(90,"blockquote")(91,"p"),e(92,"Ap\xF3s configurar seu arquivo, certifique-se de salvar as altera\xE7\xF5es realizadas."),n()(),t(93,"p"),e(94,"Execute o seguinte comando para instalar as depend\xEAncias:"),n(),t(95,"pre")(96,"code",6),e(97,`npm install
`),n()(),t(98,"p"),e(99,"Ap\xF3s realizar a instala\xE7\xE3o, execute o seguinte comando:"),n(),t(100,"pre")(101,"code",6),e(102,`ionic cap sync
`),n()(),t(103,"h3"),e(104,"Passo 3 - Instalando o po-sync"),n(),t(105,"p"),e(106,"Para instalar o "),t(107,"code"),e(108,"po-sync"),n(),e(109," no aplicativo execute o seguinte comando:"),n(),t(110,"pre")(111,"code",6),e(112,`ng add @po-ui/ng-sync
`),n()(),t(113,"h3"),e(114,"Passo 4 - Utilizando o po-sync"),n(),t(115,"h4"),e(116,"Passo 4.1 (NgModule) - Importando o "),t(117,"code"),e(118,"po-sync"),n(),e(119," e o "),t(120,"code"),e(121,"po-storage"),n()(),t(122,"p"),e(123,"No arquivo "),t(124,"code"),e(125,"src/app/app.module.ts"),n(),e(126,", adicione a importa\xE7\xE3o dos m\xF3dulos do "),t(127,"code"),e(128,"po-storage"),n(),e(129," e do "),t(130,"code"),e(131,"po-sync"),n(),e(132,": "),n(),t(133,"pre")(134,"code",9),e(135,`import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { PoStorageModule } from '@po-ui/ng-storage';
import { PoSyncModule } from '@po-ui/ng-sync';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    PoStorageModule.forRoot(),
    PoSyncModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
`),n()(),t(136,"h4"),e(137,"Passo 4.1 (Standalone) - Importando o "),t(138,"code"),e(139,"po-sync"),n(),e(140," e o "),t(141,"code"),e(142,"po-storage"),n()(),t(143,"p"),e(144,"No arquivo "),t(145,"code"),e(146,"src/main.ts"),n(),e(147,", adicione a importa\xE7\xE3o dos m\xF3dulos do "),t(148,"code"),e(149,"po-storage"),n(),e(150," e do "),t(151,"code"),e(152,"po-sync"),n(),e(153,": "),n(),t(154,"pre")(155,"code",9),e(156,`import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { PoSyncModule } from '@po-ui/ng-sync';
import { PoStorageModule } from '@po-ui/ng-storage';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(PoSyncModule),
    importProvidersFrom(PoStorageModule.forRoot()),
  ],
});
`),n()(),t(157,"h4"),e(158,"Passo 4.2 - Mapeando seu primeiro "),t(159,"em"),e(160,"schema"),n()(),t(161,"p"),e(162,"O "),t(163,"code"),e(164,"po-sync"),n(),e(165," utiliza a defini\xE7\xE3o de "),t(166,"code"),e(167,"schemas"),n(),e(168,", onde cada "),t(169,"code"),e(170,"schema"),n(),e(171," representa um modelo de dados armazenado no dispositivo."),n(),t(172,"p"),e(173,"Crie o arquivo "),t(174,"code"),e(175,"src/app/home/conference-schema.constants.ts"),n(),e(176," e adicione o conte\xFAdo abaixo:"),n(),t(177,"pre")(178,"code",9),e(179,`import { PoSyncSchema } from '@po-ui/ng-sync';

export const conferenceSchema: PoSyncSchema = {
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  deletedField: 'deleted',
  fields: [ 'id', 'title', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),n()(),t(180,"h3"),e(181,"Passo 5 - Configurando o m\xE9todo prepare"),n(),t(182,"p"),e(183,"Ap\xF3s ter o seu primeiro "),t(184,"em"),e(185,"schema"),n(),e(186," criado, configure o seu aplicativo utilizando o "),t(187,"code"),e(188,"po-sync"),n(),e(189," atrav\xE9s do m\xE9todo "),t(190,"code"),e(191,"PoSyncService.prepare()"),n(),e(192,"."),n(),t(193,"h4"),e(194,"Passo 5.1 (NgModule) - Alterando o "),t(195,"code"),e(196,"src/app/app.component.ts"),n()(),t(197,"p"),e(198,"Substitua o conte\xFAdo do arquivo pelo conte\xFAdo abaixo:"),n(),t(199,"pre")(200,"code",9),e(201,`import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { PoNetworkType, PoSyncConfig, PoSyncService } from '@po-ui/ng-sync';
import { conferenceSchema } from './home/conference-schema.constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent {
  constructor(private platform: Platform, private poSync: PoSyncService) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: true });
    }
    await SplashScreen.hide();

    this.initSync();
  }

  initSync() {
    const config: PoSyncConfig = {
      type: PoNetworkType.wifi,
    };
    const schemas = [conferenceSchema];
    this.poSync.prepare(schemas, config).then(() => {
      this.poSync.sync();
    });
  }
}
`),n()(),t(202,"p"),e(203,"Ap\xF3s utilizar o m\xE9todo "),t(204,"code"),e(205,"PoSyncService.prepare()"),n(),e(206,", a aplica\xE7\xE3o estar\xE1 pronta para sincronizar os dados atrav\xE9s do m\xE9todo "),t(207,"code"),e(208,"PoSyncService.sync()"),n(),e(209,"."),n(),t(210,"h4"),e(211,"Passo 5.1 (Standalone) - Alterando o "),t(212,"code"),e(213,"src/app/app.component.ts"),n()(),t(214,"p"),e(215,"Substitua o conte\xFAdo do arquivo pelo conte\xFAdo abaixo:"),n(),t(216,"pre")(217,"code",9),e(218,`import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { PoNetworkType, PoSyncConfig, PoSyncService } from '@po-ui/ng-sync';

import { conferenceSchema } from './home/conference-schema.constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(
    private platform: Platform, private poSync: PoSyncService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: true });
    }
    await SplashScreen.hide();

    this.initSync();
  }

  initSync() {
    const config: PoSyncConfig = {
      type: PoNetworkType.wifi,
    };

    const schemas = [conferenceSchema];
    
    this.poSync.prepare(schemas, config).then(() => {
      this.poSync.sync();
    });
  }
}
`),n()(),t(219,"h3"),e(220,"Passo 6 (NgModule) - Acessando os dados"),n(),t(221,"p"),e(222,"Localize o arquivo "),t(223,"code"),e(224,"src/app/home/home.page.ts"),n(),e(225," e fa\xE7a as seguintes altera\xE7\xF5es:"),n(),t(226,"pre")(227,"code",9),e(228,`import { Component } from '@angular/core';

import { PoSyncService } from '@po-ui/ng-sync';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {

  conference: any;

  constructor(private poSync: PoSyncService) {
    this.poSync.onSync().subscribe(() => this.loadHomePage());
  }

  async loadHomePage() {
    this.conference = await this.poSync.getModel('conference').findOne().exec();
  }

  clear() {
    this.conference = null;
  }

}
`),n()(),t(229,"p"),e(230,"No construtor, foi realizado uma inscri\xE7\xE3o no m\xE9todo "),t(231,"code"),e(232,"PoSyncService.onSync()"),n(),e(233,", para quando ocorrer uma sincroniza\xE7\xE3o, o m\xE9todo "),t(234,"code"),e(235,"loadHomePage()"),n(),e(236," busque um registro do "),t(237,"em"),e(238,"schema"),n(),e(239,' "Conference".'),n(),t(240,"h3"),e(241,"Passo 6 (Standalone) - Acessando os dados"),n(),t(242,"p"),e(243,"Localize o arquivo "),t(244,"code"),e(245,"src/app/home/home.page.ts"),n(),e(246," e fa\xE7a as seguintes altera\xE7\xF5es:"),n(),t(247,"pre")(248,"code",9),e(249,`import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { PoSyncService } from '@po-ui/ng-sync';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, NgIf],
})
export class HomePage {
  conference: any;

  constructor(private poSync: PoSyncService) {
    this.poSync.onSync().subscribe(() => this.loadHomePage());
  }

  async loadHomePage() {
    this.conference = await this.poSync.getModel('conference').findOne().exec();
  }

  clear() {
    this.conference = null;
  }
}
`),n()(),t(250,"h3"),e(251,"Passo 7 - Exibindo os dados em tela"),n(),t(252,"p"),e(253,"No arquivo "),t(254,"code"),e(255,"src/app/home/home.page.html"),n(),e(256," crie a seguinte estrutura:"),n(),t(257,"pre")(258,"code",10),e(259,`<ion-content class="ion-padding">
  <ion-button expand="full" (click)="loadHomePage()">Buscar informa\xE7\xF5es</ion-button>
  <ion-button expand="full" color="danger" (click)="clear()">Apagar informa\xE7\xF5es</ion-button>

  <ion-card *ngIf="conference">
    <ion-card-content>
      <ion-card-title>
        `),t(260,"span"),c(),e(261,"{{"),p(),n(),e(262," conference.title "),t(263,"span"),c(),e(264,"}}"),p(),n(),e(265,`
      </ion-card-title>
      <p>`),t(266,"span"),c(),e(267,"{{"),p(),n(),e(268," conference.description "),t(269,"span"),c(),e(270,"}}"),p(),n(),e(271,`</p>
      <p>`),t(272,"span"),c(),e(273,"{{"),p(),n(),e(274," conference.location "),t(275,"span"),c(),e(276,"}}"),p(),n(),e(277,`</p>
    </ion-card-content>
  </ion-card>
</ion-content>
`),n()(),t(278,"h3"),e(279,"Passo 8 - Executando o aplicativo"),n(),t(280,"p"),e(281,"Execute o comando "),t(282,"code"),e(283,"ionic serve"),n(),e(284," e verifique o funcionamento do aplicativo Ionic com "),t(285,"code"),e(286,"po-sync"),n(),e(287,"."),n(),t(288,"blockquote")(289,"p"),e(290,"Pode ocorrer o seguinte erro "),t(291,"code"),e(292,"TS2320: Interface 'HTMLIonIconElement' cannot simultaneously extend types 'IonIcon' and 'HTMLStencilElement'"),n(),e(293," por conta da vers\xE3o do TypeScript (5.2.x) conforme esta "),t(294,"a",11),e(295,"issue"),n(),e(296,", neste caso adicione no arquivo "),t(297,"strong"),e(298,"tsconfig.json"),n(),t(299,"code"),e(300,'"skipLibCheck": true'),n(),e(301,"."),n()(),t(302,"h4"),e(303,"Passo 8.1 - Entendendo o funcionamento do "),t(304,"code"),e(305,"po-sync"),n()(),t(306,"ul")(307,"li")(308,"p"),e(309,"O aplicativo sincroniza os dados que est\xE3o no servidor atrav\xE9s do m\xE9todo "),t(310,"code"),e(311,"PoSyncService.sync()"),n(),e(312,";"),n()(),t(313,"li")(314,"p"),e(315,"Durante esta sincroniza\xE7\xE3o \xE9 efetuada a busca dos registros utilizando a URL de GET, informada no "),t(316,"code"),e(317,"conference-schema.constants.ts"),n(),e(318,", e o retorno \xE9 salvo no dispositivo do cliente;"),n()(),t(319,"li")(320,"p"),e(321,"Com os dados salvos no dispositivo, \xE9 poss\xEDvel desabilitar o acesso \xE0 internet do aplicativo e ainda continuar acessando os dados atrav\xE9s do "),t(322,"code"),e(323,"po-sync"),n(),e(324,"."),n()()(),t(325,"p"),e(326,"Demonstra\xE7\xE3o do aplicativo acessando os dados "),t(327,"em"),e(328,"offline"),n(),e(329,":"),n(),t(330,"p"),i(331,"img",12),n(),t(332,"h3"),e(333,"Pr\xF3ximos passos"),n(),t(334,"ul")(335,"li")(336,"p"),e(337,"Leia sobre os principais "),t(338,"a",13),e(339,"fundamentos do PO Sync"),n(),e(340,"."),n()(),t(341,"li")(342,"p"),e(343,"Saiba mais sobre a "),t(344,"a",14),e(345,"API do PO Sync"),n(),e(346,"."),n()()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var _=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:298,vars:0,consts:[["p-title","Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI",1,"guides","app-portal"],[1,"po-row",2,"margin","20px 0"],[1,"po-lg-2","po-md-5","po-sm-12",2,"padding","10px"],[2,"text-align","center"],["p-icon","an an-palette",2,"font-size","24px"],["p-icon","an an-sun",2,"font-size","24px"],["p-icon","an an-moon",2,"font-size","24px"],["p-icon","an an-wheelchair-motion",2,"font-size","24px"],["p-icon","an an-wrench",2,"font-size","24px"],["p-icon","an an-lightning",2,"font-size","24px"],["href","guides/theme-service#introduction"],["href","guides/theme-service#whyUse"],["href","guides/theme-service#config"],["href","guides/theme-service#configModule"],["href","guides/theme-service#configStyle"],["href","guides/theme-service#configService"],["href","guides/theme-service#howToUse"],["href","guides/theme-service#howToUseBasic"],["href","guides/theme-service#howToUseComplete"],["href","guides/theme-service#applyTheme"],["href","guides/theme-service#applyThemeInitial"],["href","guides/theme-service#applyThemeDynamic"],["href","guides/theme-service#advanced"],["href","guides/theme-service#advancedOverride"],["href","guides/theme-service#advancedReset"],["href","guides/theme-service#advancedPersist"],["href","guides/theme-service#advancedSize"],["href","guides/theme-service#more"],["href","guides/theme-service#sampleStackblitz"],["id","introduction"],["id","whyUse"],["id","config"],["id","configModule"],[1,"language-typescript"],["id","configStyle"],[1,"language-json"],["id","configService"],["id","howToUse"],["id","howToUseBasic"],["id","howToUseComplete"],["id","applyTheme"],["id","applyThemeInitial"],["id","applyThemeDynamic"],["id","advanced"],["id","advancedOverride"],[1,"language-html"],[1,"language-css"],["id","advancedReset"],["id","advancedPersist"],["id","advancedSize"],["id","more"],["href","documentation/po-theme"],["href","https://doc.animaliads.io/"],["id","sampleStackblitz"],["href","https://stackblitz.com/edit/poui-theme-service","target","_blank","rel","noreferrer"],["src","https://developer.stackblitz.com/img/open_in_stackblitz.svg","alt","Open in StackBlitz"]],template:function(o,s){o&1&&(t(0,"po-page-default",0)(1,"p"),e(2,"A partir da vers\xE3o 19.X.X, o PO-UI oferece um servi\xE7o completo para cria\xE7\xE3o e gest\xE3o de temas personalizados, permitindo controle total sobre cores, tipografia, acessibilidade e comportamentos espec\xEDficos de componente."),n(),t(3,"p"),e(4,"Principais Recursos:"),n(),t(5,"div",1)(6,"div",2)(7,"div",3),i(8,"po-icon",4),t(9,"p"),e(10,"Paletas de cores"),n()()(),t(11,"div",2)(12,"div",3)(13,"div"),i(14,"po-icon",5)(15,"po-icon",6),n(),t(16,"p"),e(17,"Temas light/dark"),n()()(),t(18,"div",2)(19,"div",3),i(20,"po-icon",7),t(21,"p"),e(22,"Acessibilidade (AA/AAA)"),n()()(),t(23,"div",2)(24,"div",3),i(25,"po-icon",8),t(26,"p"),e(27,"Sobrescrita de estilos"),n()()(),t(28,"div",2)(29,"div",3),i(30,"po-icon",9),t(31,"p"),e(32,"Aplica\xE7\xE3o din\xE2mica"),n()()()(),t(33,"h3"),e(34,"Conte\xFAdo"),n(),t(35,"ul")(36,"li")(37,"a",10),e(38,"Introdu\xE7\xE3o \xE0 Customiza\xE7\xE3o de Temas no PO UI"),n()(),t(39,"li")(40,"a",11),e(41,"Por Que Usar o PoThemeService?"),n()(),t(42,"li")(43,"a",12),e(44,"Configura\xE7\xE3o Inicial"),n(),t(45,"ul")(46,"li")(47,"a",13),e(48,"Importa\xE7\xE3o do M\xF3dulo"),n()(),t(49,"li")(50,"a",14),e(51,"Estilo PO-UI"),n()(),t(52,"li")(53,"a",15),e(54,"Inje\xE7\xE3o do Servi\xE7o"),n()()()(),t(55,"li")(56,"a",16),e(57,"Como Utilizar o Servi\xE7o de Tema"),n(),t(58,"ul")(59,"li")(60,"a",17),e(61,"Estrutura B\xE1sica"),n()(),t(62,"li")(63,"a",18),e(64,"Exemplo Completo"),n()()()(),t(65,"li")(66,"a",19),e(67,"Aplicando o Tema"),n(),t(68,"ul")(69,"li")(70,"a",20),e(71,"Aplica\xE7\xE3o Inicial"),n()(),t(72,"li")(73,"a",21),e(74,"Aplica\xE7\xE3o Din\xE2mica"),n()()()(),t(75,"li")(76,"a",22),e(77,"T\xE9cnicas Avan\xE7adas"),n(),t(78,"ul")(79,"li")(80,"a",23),e(81,"Sobrescrita de Vari\xE1veis"),n()(),t(82,"li")(83,"a",24),e(84,"Reset para Tema Padr\xE3o"),n()(),t(85,"li")(86,"a",25),e(87,"Persist\xEAncia de Tema"),n()(),t(88,"li")(89,"a",26),e(90,"Gerenciamento de Tamanhos"),n()()()(),t(91,"li")(92,"a",27),e(93,"Mais informa\xE7\xF5es"),n()(),t(94,"li")(95,"a",28),e(96,"Exemplo Completo no Stackblitz"),n()()(),t(97,"p"),i(98,"a",29),n(),t(99,"h3"),e(100,"Introdu\xE7\xE3o \xE0 Customiza\xE7\xE3o de Temas no PO UI"),n(),t(101,"p"),e(102,"O PO UI oferece um sistema robusto e flex\xEDvel para personaliza\xE7\xE3o visual de componentes, permitindo que desenvolvedores e designers criem experi\xEAncias \xFAnicas e alinhadas \xE0s necessidades espec\xEDficas de cada projeto. A customiza\xE7\xE3o vai al\xE9m da simples altera\xE7\xE3o de cores - \xE9 um sistema completo que abrange desde vari\xE1veis CSS globais at\xE9 a cria\xE7\xE3o de temas din\xE2micos com suporte a light/dark mode, acessibilidade avan\xE7ada e controle granular sobre cada componente."),n(),t(103,"p"),i(104,"a",30),n(),t(105,"h3"),e(106,"Por Que Usar o PoThemeService?"),n(),t(107,"p"),e(108,"O servi\xE7o de temas do PO UI (PoThemeService) \xE9 o cora\xE7\xE3o do sistema de customiza\xE7\xE3o, oferecendo:"),n(),t(109,"details")(110,"summary")(111,"strong"),e(112,"Aplica\xE7\xE3o Din\xE2mica de Temas"),n()(),t(113,"ul")(114,"li"),e(115,"Altera\xE7\xF5es em tempo real sem recarregar a aplica\xE7\xE3o"),n(),t(116,"li"),e(117,"Transi\xE7\xF5es suaves entre temas light/dark"),n()()(),t(118,"details")(119,"summary")(120,"strong"),e(121,"Gest\xE3o Centralizada"),n()(),t(122,"ul")(123,"li"),e(124,"Cria\xE7\xE3o e armazenamento de m\xFAltiplos temas"),n(),t(125,"li"),e(126,"Combina\xE7\xE3o de temas globais e customiza\xE7\xF5es locais"),n()()(),t(127,"details")(128,"summary")(129,"strong"),e(130,"Integra\xE7\xE3o com Estado da Aplica\xE7\xE3o"),n()(),t(131,"ul")(132,"li"),e(133,"Persist\xEAncia de prefer\xEAncias (localStorage)"),n(),t(134,"li"),e(135,"Sincroniza\xE7\xE3o com configura\xE7\xF5es do usu\xE1rio"),n()()(),t(136,"details")(137,"summary")(138,"strong"),e(139,"Controle de Acessibilidade"),n()(),t(140,"ul")(141,"li"),e(142,"Ativa\xE7\xE3o de n\xEDveis AA/AAA conforme requisitos"),n(),t(143,"li"),e(144,"Ajustes autom\xE1ticos de contrastes"),n()()(),t(145,"details")(146,"summary")(147,"strong"),e(148,"Sobrescrita Flex\xEDvel"),n()(),t(149,"ul")(150,"li"),e(151,"Hierarquia clara: Tema > Vari\xE1veis Globais > Estilos Locais"),n()()(),t(152,"p"),i(153,"a",31),n(),t(154,"h3"),e(155,"Configura\xE7\xE3o Inicial"),n(),t(156,"p"),i(157,"a",32),n(),t(158,"h4"),e(159,"Importa\xE7\xE3o do M\xF3dulo"),n(),t(160,"pre")(161,"code",33),e(162,`import { PoModule } from '@po-ui/ng-components';

@NgModule({
  imports: [
    PoThemeModule
  ]
})
export class AppModule { }
`),n()(),t(163,"p"),i(164,"a",34),n(),t(165,"h4"),e(166,"Estilo PO-UI"),n(),t(167,"p"),e(168,"Configurar o arquivo angular.json da seguinte maneira:"),n(),t(169,"pre")(170,"code",35),e(171,`"styles": [
  "node_modules/@po-ui/style/css/po-theme-default.min.css", 
  "src/styles.css"
]
`),n()(),t(172,"p"),i(173,"a",36),n(),t(174,"h4"),e(175,"Inje\xE7\xE3o do Servi\xE7o"),n(),t(176,"p"),e(177,"Inje\xE7\xE3o do Servi\xE7o no construtor do componente:"),n(),t(178,"pre")(179,"code",33),e(180,`import { PoThemeService } from '@po-ui/ng-components';

export class AppComponent {
  constructor(private poThemeService: PoThemeService) { }
}
`),n()(),t(181,"p"),i(182,"a",37),n(),t(183,"h3"),e(184,"Como Utilizar o Servi\xE7o de Tema"),n(),t(185,"p"),e(186,"Criando um Tema Personalizado"),n(),t(187,"p"),i(188,"a",38),n(),t(189,"h4"),e(190,"Estrutura B\xE1sica"),n(),t(191,"pre")(192,"code",33),e(193,`const meuTema: PoTheme = {
  name: 'meu-tema',
  type: [
    {
      light: { /* Configura\xE7\xF5es tema claro para A11y AAA*/ },
      dark: { /* Configura\xE7\xF5es tema escuro para A11y AAA*/ },
      a11y: PoThemeA11yEnum.AAA
    },
    {
      light: { /* Configura\xE7\xF5es tema claro para A11y AA*/ },
      dark: { /* Configura\xE7\xF5es tema escuro para A11y AA*/ },
      a11y: PoThemeA11yEnum.AA
    }
  ],
  active: { type: PoThemeTypeEnum.light, a11y: PoThemeA11yEnum.AAA }
};
`),n()(),t(194,"p"),i(195,"a",39),n(),t(196,"h4"),e(197,"Exemplo Completo"),n(),t(198,"pre")(199,"code",33),e(200,`import { PoTheme, PoThemeTypeEnum } from '@po-ui/ng-components';

export const corporateTheme: PoTheme = {
  name: 'corporate',
  type: [
    {
      light: {
        color: {
          brand: {
            '01': { 
              base: '#2A5C8D',
              light: '#4D7BA5',
              dark: '#1D4364'
            },
            '02': { base: '#FF6B35' },
            '03': { base: '#00CC66' }
          },
          neutral: { /* Tons de cinza */ },
          feedback: { /* Cores de feedback */ }
        },
        onRoot: {
          '--font-family': "'Inter', sans-serif",
          '--border-radius': '6px'
        },
        perComponent: {
          'po-button': {
            '--padding': '0.75rem 1.5rem',
            '--font-weight': '600'
          }
        }
      },
      dark: { /* Configura\xE7\xF5es dark mode */ },
      a11y: PoThemeA11yEnum.AAA
    },
    {
      light: { /* Configura\xE7\xF5es tema claro para A11y AA*/ },
      dark: { /* Configura\xE7\xF5es tema escuro para A11y AA*/ },
      a11y: PoThemeA11yEnum.AA
    }
  ],
  active: { type: PoThemeTypeEnum.light, a11y: PoThemeA11yEnum.AAA }
};
`),n()(),t(201,"p"),i(202,"a",40),n(),t(203,"h3"),e(204,"Aplicando o Tema"),n(),t(205,"p"),i(206,"a",41),n(),t(207,"h4"),e(208,"Aplica\xE7\xE3o Inicial"),n(),t(209,"pre")(210,"code",33),e(211,`ngOnInit() {
  this.poTheme.setTheme(meuTema, PoThemeTypeEnum.light, PoThemeA11yEnum.AAA);
}
`),n()(),t(212,"p"),i(213,"a",42),n(),t(214,"h4"),e(215,"Aplica\xE7\xE3o Din\xE2mica"),n(),t(216,"pre")(217,"code",33),e(218,`// Alternar entre light/dark mode
toggleTheme() {
  const newType = this.currentTheme === PoThemeTypeEnum.light 
    ? PoThemeTypeEnum.dark 
    : PoThemeTypeEnum.light;
  
  this.poTheme.changeCurrentThemeType(newType);
}

// Alterar n\xEDvel de acessibilidade
setAcessibilidade(nivel: PoThemeA11yEnum) {
  this.poTheme.setCurrentThemeA11y(nivel);
}
`),n()(),t(219,"p"),i(220,"a",43),n(),t(221,"h3"),e(222,"T\xE9cnicas Avan\xE7adas"),n(),t(223,"p"),i(224,"a",44),n(),t(225,"h4"),e(226,"Sobrescrita de Vari\xE1veis"),n(),t(227,"blockquote")(228,"p")(229,"strong"),e(230,"Recomenda\xE7\xE3o:"),n(),e(231," Utilize sempre o servi\xE7o "),t(232,"code"),e(233,"PoThemeService"),n(),e(234," para manipula\xE7\xE3o de temas. Reserve esta t\xE9cnica para casos extremos."),n()(),t(235,"p")(236,"strong"),e(237,"Quando usar?"),n()(),t(238,"ul")(239,"li"),e(240,"Necessidade de ajustes pontuais n\xE3o cobertos pelos tokens padr\xE3o "),n(),t(241,"li"),e(242,"Prototipagem r\xE1pida"),n()(),t(243,"p")(244,"strong"),e(245,"Implementa\xE7\xE3o:"),n()(),t(246,"pre")(247,"code",45),e(248,`<html class='override-theme'>
`),n()(),t(249,"pre")(250,"code",46),e(251,`/* styles.scss */
:root.override-theme {
  --color-brand-01-base: #FF0000;
}
`),n()(),t(252,"p"),i(253,"a",47),n(),t(254,"h4"),e(255,"Reset para Tema Padr\xE3o"),n(),t(256,"p"),e(257,"Restaura todos os valores para o tema base configurado:"),n(),t(258,"pre")(259,"code",33),e(260,`// Em qualquer componente/service:
resetarTema() {
  this.poThemeService.resetBaseTheme();
}
`),n()(),t(261,"p"),i(262,"a",48),n(),t(263,"h4"),e(264,"Persist\xEAncia de Tema"),n(),t(265,"p"),e(266,"Fluxo recomendado:"),n(),t(267,"pre")(268,"code",33),e(269,`ngOnInit() {
  this.initTheme();
}

private initTheme() {
  const savedTheme = this.poThemeService.getThemeActive();
  
  savedTheme 
    ? this.poThemeService.persistThemeActive()
    : this.themeService.setTheme(
        poThemeDefault,
        PoThemeTypeEnum.light,
        PoThemeA11yEnum.
      );
}
`),n()(),t(270,"p"),i(271,"a",49),n(),t(272,"h4"),e(273,"Gerenciamento de Tamanhos"),n(),t(274,"p"),e(275,"Padr\xE3o acess\xEDvel (AAA):"),n(),t(276,"pre")(277,"code",33),e(278,`  // Habilitar tamanhos para small
  this.themeService.setA11yDefaultSizeSmall(true);

  // Verificar configura\xE7\xE3o atual
  const currentSize = this.poThemeService.getDefaultSize();
`),n()(),t(279,"p"),i(280,"a",50),n(),t(281,"h4"),e(282,"Refer\xEAncias T\xE9cnicas"),n(),t(283,"ul")(284,"li")(285,"a",51),e(286,"PoThemeService API"),n(),e(287," - M\xE9todos completos do servi\xE7o"),n(),t(288,"li")(289,"a",52),e(290,"Animalia DS"),n(),e(291," - Base dos nossos tokens de design"),n()(),t(292,"p"),i(293,"a",53),n(),t(294,"h3"),e(295,"Exemplo Completo no Stackblitz"),n(),t(296,"a",54),i(297,"img",55),n()())},dependencies:[C,l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var Q=[{path:"",component:F,children:[{path:"api",component:I},{path:"browser-support",component:O},{path:"deprecations",component:T},{path:"development-flow",component:D},{path:"getting-started",component:M},{path:"guide-charts",component:w},{path:"migration-poui-v2",component:k},{path:"migration-poui",component:j},{path:"migration-thf-to-po-ui",component:G},{path:"press-kit",component:U},{path:"releases",component:R},{path:"schematics",component:N},{path:"sync-fundamentals",component:H},{path:"sync-get-started",component:B},{path:"theme-service",component:_},{path:"",pathMatch:"full",redirectTo:"getting-started"}]}],L=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=x({type:a});static \u0275inj=E({imports:[f.forChild(Q),f]})}return a})();var st=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=x({type:a});static \u0275inj=E({imports:[z,L]})}return a})();export{st as GuideModule};
