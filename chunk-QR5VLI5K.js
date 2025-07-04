import{p as z}from"./chunk-R3BKLGLC.js";import{c as A,lb as q,nb as l}from"./chunk-TUTTJOS2.js";import{Ea as i,Fa as t,Ga as n,L as f,M as E,Oc as C,R as p,Rc as v,S as c,Tb as y,Xa as e,cb as P,ha as h,ia as g,oa as m,pa as x,ya as b}from"./chunk-MIQUIDUB.js";var S=(()=>{class a{constructor(){}getMenus(r){return new Array({label:"Guia de implementa\xE7\xE3o de APIs",link:"guides/api"},{label:"Compatibilidade com os navegadores",link:"guides/browser-support"},{label:"Deprecia\xE7\xF5es",link:"guides/deprecations"},{label:"Contribuindo para o PO UI",link:"guides/development-flow"},{label:"Primeiros passos",link:"guides/getting-started"},{label:"Guia de uso para Gr\xE1ficos",link:"guides/guide-charts"},{label:"Migra\xE7\xE3o do PO UI para V2",link:"guides/migration-poui-v2"},{label:"Migra\xE7\xE3o do PO UI",link:"guides/migration-poui"},{label:"Migra\xE7\xE3o do THF para o PO UI v1.x",link:"guides/migration-thf-to-po-ui"},{label:"Press Kit",link:"guides/press-kit"},{label:"Releases",link:"guides/releases"},{label:"Schematics",link:"guides/schematics"},{label:"Fundamentos do PO Sync",link:"guides/sync-fundamentals"},{label:"Come\xE7ando com o PO Sync",link:"guides/sync-get-started"},{label:"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI",link:"guides/theme-service"},{label:"Criando um tema para o PO UI",link:"guides/create-theme-customization"},{label:"Grid System",link:"guides/grid-system"},{label:"Espa\xE7amento",link:"guides/spacing"},{label:"Personalizando o Tema Padr\xE3o com Tokens CSS",link:"guides/theme-customization"},{label:"Tipografia",link:"guides/typography"})}static \u0275fac=function(o){return new(o||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var F=(()=>{class a{menuGuidesService;http;menus=[];constructor(r,o){this.menuGuidesService=r,this.http=o}ngOnInit(){this.http.get("./assets/json/api-list.json").subscribe(r=>{this.menus=this.menuGuidesService.getMenus(r).map(o=>(o.link=o.link.replace("guides/",""),o))},r=>console.error(r))}static \u0275fac=function(o){return new(o||a)(g(S),g(y))};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,features:[P([S])],decls:4,vars:1,consts:[["userMenu",""],[1,"po-wrapper"],["p-filter","",3,"p-menus"]],template:function(o,s){o&1&&(i(0,"div",1),n(1,"po-menu",2,0)(3,"router-outlet"),t()),o&2&&(h(),b("p-menus",s.menus))},dependencies:[q,C],encapsulation:2})}return a})();var T=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:225,vars:0,consts:[["p-title","Guia de implementa\xE7\xE3o de APIs",1,"guides","app-portal"],["href","guides/api#introduction"],["href","guides/api#responseMessage"],["href","guides/api#errorMessages"],["href","guides/api#successMessages"],["href","guides/api#successMessagesForCollections"],["href","guides/api#collections"],["href","guides/api#order"],["href","guides/api#filters"],["href","guides/api#pagination"],["id","introduction"],["id","responseMessage"],["id","errorMessages"],["id","successMessages"],["id","successMessagesForCollections"],["id","collections"],["id","order"],["id","filters"],["id","pagination"],["href","#successMessagesForCollections"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"h2"),e(2,"Conte\xFAdo"),t(),i(3,"ul")(4,"li")(5,"a",1),e(6,"Introdu\xE7\xE3o"),t()(),i(7,"li")(8,"a",2),e(9,"Formato das mensagens de resposta"),t(),i(10,"ul")(11,"li")(12,"a",3),e(13,"Mensagens de erro"),t()(),i(14,"li")(15,"a",4),e(16,"Mensagens de sucesso"),t()(),i(17,"li")(18,"a",5),e(19,"Mensagens de sucesso para cole\xE7\xF5es"),t()()()(),i(20,"li")(21,"a",6),e(22,"Formato das requisi\xE7\xF5es para cole\xE7\xF5es"),t(),i(23,"ul")(24,"li")(25,"a",7),e(26,"Ordena\xE7\xE3o"),t()(),i(27,"li")(28,"a",8),e(29,"Filtros"),t()(),i(30,"li")(31,"a",9),e(32,"Pagina\xE7\xE3o"),t()()()()(),i(33,"p"),n(34,"a",10),t(),i(35,"h2"),e(36,"Introdu\xE7\xE3o"),t(),i(37,"p"),e(38,"Este guia tem a finalidade de exibir os modelos de requisi\xE7\xF5es e respostas HTTP que o PO UI utiliza em seus componentes e "),i(39,"em"),e(40,"interceptors"),t(),e(41,"."),t(),i(42,"p"),n(43,"a",11),t(),i(44,"h2"),e(45,"Formato das mensagens de resposta"),t(),i(46,"p"),e(47,"Alguns componentes utilizam "),i(48,"code"),e(49,"endpoints"),t(),e(50," para poder buscar os itens. Para isso, \xE9 necess\xE1rio que o formato no qual estes itens ser\xE3o devolvidos seja padronizado, para uma comunica\xE7\xE3o mais efetiva. A seguir ser\xE3o apresentados o formato de mensagem de resposta esperado pelos "),i(51,"code"),e(52,"endpoints"),t(),e(53,"."),t(),i(54,"p"),n(55,"a",12),t(),i(56,"h3"),e(57,"Mensagens de erro"),t(),i(58,"p"),e(59,"Para todas as mensagens que representam um erro (c\xF3digos HTTP 4xx e 5xx) deve-se retornar obrigatoriamente os campos a seguir, caso deseje apresent\xE1-las:"),t(),i(60,"pre")(61,"code"),e(62,`{
    code: "C\xF3digo identificador do erro",
    message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
    detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
}
`),t()(),i(63,"p"),e(64,"Opcionalmente pode-se retornar os campos:"),t(),i(65,"ul")(66,"li")(67,"code"),e(68,"helpUrl"),t(),e(69,": link para a documenta\xE7\xE3o do erro;"),t(),i(70,"li")(71,"code"),e(72,"type"),t(),e(73,": pode ser informado os seguintes valores: "),i(74,"code"),e(75,"error"),t(),e(76,", "),i(77,"code"),e(78,"warning"),t(),e(79," e "),i(80,"code"),e(81,"information"),t(),e(82,";"),t(),i(83,"li")(84,"code"),e(85,"details"),t(),e(86,": lista de objetos de erro (recursiva) com mais detalhes sobre o erro principal."),t()(),i(87,"pre")(88,"code"),e(89,`{
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
`),t()(),i(90,"p"),n(91,"a",13),t(),i(92,"h3"),e(93,"Mensagens de sucesso"),t(),i(94,"p"),e(95,"Mensagens de sucesso (c\xF3digo HTTP 2xx) devem retornar diretamente a entidade que representa o objeto resultante da opera\xE7\xE3o do "),i(96,"em"),e(97,"endpoint"),t(),e(98,". Exemplo:"),t(),i(99,"pre")(100,"code"),e(101,`GET https://example.com.br/api/users/10

{
    id: 10,
    name: "John",
    surname: "Doe",
    age: 25,
    country: "US"
}
`),t()(),i(102,"p"),e(103,"Opcionalmente, o atributo "),i(104,"code"),e(105,"_messages"),t(),e(106," pode ser inclu\xEDdo no objeto retornado para fornecer alguma informa\xE7\xE3o complementar ao processamento realizado (mensagens de aviso, de neg\xF3cio, etc). "),t(),i(107,"p"),e(108,"O formato do objeto de mensagem segue o padr\xE3o anteriormente descrito, para mensagens de erro."),t(),i(109,"pre")(110,"code"),e(111,`GET https://example.com.br/api/users/10
 
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
`),t()(),i(112,"p"),n(113,"a",14),t(),i(114,"h4"),e(115,"Mensagens de sucesso para cole\xE7\xF5es"),t(),i(116,"p"),e(117,"Nos casos em que o resultado da opera\xE7\xE3o do "),i(118,"em"),e(119,"endpoint"),t(),e(120," representa uma cole\xE7\xE3o (lista de itens), os itens devem estar agrupados em um objeto com as propriedades "),i(121,"code"),e(122,"hasNext"),t(),e(123,", indicando se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o e "),i(124,"code"),e(125,"items"),t(),e(126," que representam a lista de itens retornados."),t(),i(127,"pre")(128,"code"),e(129,`{
  hasNext: true,
  items: [
    {},
    {},
    ...
  ]
}
`),t()(),i(130,"p"),e(131,"Para o retorno de cole\xE7\xF5es, tamb\xE9m \xE9 poss\xEDvel incluir o atributo "),i(132,"code"),e(133,"_messages"),t(),e(134,", conforme segue:"),t(),i(135,"pre")(136,"code"),e(137,`{
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
`),t()(),i(138,"p"),n(139,"a",15),t(),i(140,"h2"),e(141,"Formato das requisi\xE7\xF5es para as cole\xE7\xF5es"),t(),i(142,"p"),e(143,"Os "),i(144,"em"),e(145,"endpoints"),t(),e(146," tamb\xE9m podem receber par\xE2metros na requisi\xE7\xE3o que servem para especificar o tipo de resposta desejada, por exemplo: ordena\xE7\xE3o. A seguir, ser\xE3o apresentados os par\xE2metros que poder\xE3o ser enviados nessas requisi\xE7\xF5es."),t(),i(147,"p"),n(148,"a",16),t(),i(149,"h3"),e(150,"Ordena\xE7\xE3o"),t(),i(151,"p"),e(152,"Quando algum componente, como "),i(153,"code"),e(154,"po-lookup"),t(),e(155,", realizar alguma ordena\xE7\xE3o ser\xE1 enviado o par\xE2metro "),i(156,"code"),e(157,"order"),t(),e(158,", com as seguintes caracter\xEDsticas:"),t(),i(159,"ul")(160,"li"),e(161,"campos precedidos por um sinal de subtra\xE7\xE3o (-) devem ser ordenados de forma decrescente;"),t(),i(162,"li"),e(163,"campos que omitirem o sinal (subtra\xE7\xE3o) devem ser ordenados de forma crescente."),t()(),i(164,"p"),e(165,"Por exemplo, a seguinte requisi\xE7\xE3o deve retornar a lista de usu\xE1rios ordenados pelo nome de forma crescente e ent\xE3o pela idade de forma decrescente e pelo sobrenome de forma crescente:"),t(),i(166,"pre")(167,"code"),e(168,`GET https://example.com.br/api/users?order=name,-age,surname
`),t()(),i(169,"p"),n(170,"a",17),t(),i(171,"h3"),e(172,"Filtros"),t(),i(173,"p"),e(174,"Aos realizar um filtro ser\xE1 enviado um par\xE2metro no formato "),i(175,"code"),e(176,"property=value"),t(),e(177,":"),t(),i(178,"p")(179,"code"),e(180,"GET https://example.com.br/api/users?name=john&surname=doe"),t()(),i(181,"p"),n(182,"a",18),t(),i(183,"h3"),e(184,"Pagina\xE7\xE3o"),t(),i(185,"p"),e(186,"A pagina\xE7\xE3o \xE9 definida pelos par\xE2metros "),i(187,"code"),e(188,"page"),t(),e(189," e "),i(190,"code"),e(191,"pageSize"),t(),e(192,", respeitando as seguintes regras: "),t(),i(193,"ul")(194,"li"),e(195,"o valor do par\xE2metro "),i(196,"code"),e(197,"page"),t(),e(198," deve ser um valor num\xE9rico (maior que zero) representando a p\xE1gina solicitada;"),t(),i(199,"li"),e(200,"o valor do par\xE2metro "),i(201,"code"),e(202,"pageSize"),t(),e(203," deve ser um valor num\xE9rico (maior que zero) representando o total de registros retornados na consulta;"),t(),i(204,"li"),e(205,"os par\xE2metros de pagina\xE7\xE3o devem obedecer a sem\xE2ntica de multiplicador, ou seja, se o cliente solicitou "),i(206,"code"),e(207,"page=2"),t(),e(208," com um "),i(209,"code"),e(210,"pageSize=20"),t(),e(211," deve-se retornar os registros de 21 at\xE9 40;"),t(),i(212,"li"),e(213,"a resposta de uma requisi\xE7\xE3o com pagina\xE7\xE3o deve retornar um atributo indicando se existe uma pr\xF3xima p\xE1gina dispon\xEDvel conforme descrito na "),i(214,"a",19),e(215,"mensagem de sucesso de cole\xE7\xF5es"),t(),e(216," e esse atributo deve ter o nome "),i(217,"code"),e(218,"hasNext"),t(),e(219,"."),t()(),i(220,"p"),e(221,"Por exemplo, a seguinte requisi\xE7\xE3o deve retornar a quarta p\xE1gina de registros (dos registros 31 a 40 inclusive) de usu\xE1rios:"),t(),i(222,"p")(223,"code"),e(224,"GET https://example.com.br/api/users/?page=4&pageSize=10"),t()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var O=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:82,vars:0,consts:[["p-title","Compatibilidade com os navegadores",1,"guides","app-portal"],[1,"po-row"],[1,"po-xl-6","po-lg-8","po-md-10","po-sm-12"],[1,"po-table","po-text-color-neutral-dark-40"],[1,"po-table-header"],[1,"po-table-header-ellipsis"],[1,"po-table-row"],[1,"po-table-column"],["href","https://angular.io/guide/browser-support"],["href","https://angular.io/guide/deployment#local-development-in-older-browsers"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"p"),e(2,"Atualmente o PO est\xE1 homologado para os seguintes navegadores:"),t(),i(3,"div",1)(4,"div",2)(5,"table",3)(6,"thead")(7,"tr",4)(8,"th",5),e(9,"Navegadores"),t(),i(10,"th",5),e(11,"Vers\xF5es"),t()()(),i(12,"tbody")(13,"tr",6)(14,"th",7),e(15,"Chrome"),t(),i(16,"td",7),e(17,"vers\xF5es mais recentes (latest)"),t()(),i(18,"tr",6)(19,"th",7),e(20,"Firefox"),t(),i(21,"td",7),e(22,"vers\xF5es mais recentes (latest)"),t()(),i(23,"tr",6)(24,"th",7),e(25,"Edge"),t(),i(26,"td",7),e(27,"2 \xFAltimas vers\xF5es principais"),t()(),i(28,"tr",6)(29,"th",7),e(30,"Safari"),t(),i(31,"td",7),e(32,"2 \xFAltimas vers\xF5es principais"),t()(),i(33,"tr",6)(34,"th",7),e(35,"IOS"),t(),i(36,"td",7),e(37,"2 \xFAltimas vers\xF5es principais"),t()(),i(38,"tr",6)(39,"th",7),e(40,"Android"),t(),i(41,"td",7),e(42,"2 \xFAltimas vers\xF5es principais"),t()()()()()(),i(43,"blockquote")(44,"p"),e(45,`Nossa homologa\xE7\xE3o tem como base os navegadores que o Angular suporta nativamente. Para saber mais, acesse o guia
`),i(46,"a",8)(47,"em"),e(48,"Browser support"),t()(),e(49," do Angular."),t()(),i(50,"blockquote")(51,"p"),e(52,"Caso precise de algum "),i(53,"em"),e(54,"polyfill"),t(),e(55," em sua aplica\xE7\xE3o ou precisa de mais informa\xE7\xE3o sobre como funciona um "),i(56,"em"),e(57,"polyfill"),t(),e(58," acesse a documenta\xE7\xE3o "),i(59,"a",8)(60,"em"),e(61,"Browser support"),t()(),e(62," do Angular."),t()(),i(63,"h2"),e(64,"Executando a aplica\xE7\xE3o localmente"),t(),i(65,"p"),e(66,"A partir do Angular CLI v8, os comandos "),i(67,"em"),e(68,"ng serve"),t(),e(69,", "),i(70,"em"),e(71,"ng test"),t(),e(72," e "),i(73,"em"),e(74,"ng e2e"),t(),e(75," s\xE3o executados com ES2015, n\xE3o sendo suportado para navegadores como Internet Explorer."),t(),i(76,"p"),e(77,"Para conseguir executar a aplica\xE7\xE3o localmente no Internet Explorer, veja a documenta\xE7\xE3o"),n(78,"br"),i(79,"a",9),e(80,"Desenvolvendo localmente em navegadores antigos"),t(),e(81,"."),t()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var D=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:730,vars:0,consts:[["p-title","Deprecia\xE7\xF5es",1,"guides","app-portal"],["href","https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md"],[1,"po-row"],[1,"po-xl-6","po-lg-8","po-md-10","po-sm-12"],[1,"po-table","po-text-color-neutral-dark-40"],[1,"po-table-header"],[1,"po-table-header-ellipsis"],[1,"po-table-row"],[1,"po-table-column"],["href","documentation/po-tabs"],[1,"po-table-column",2,"text-align","center"],["href","documentation/po-tag"],["href","documentation/po-button"],["href","documentation/po-button-group"],["href","documentation/po-container"],["href","documentation/po-table"],["href","documentation/po-input"],["href","documentation/po-select"],["href","documentation/po-switch"],["href","documentation"],["href","https://animaliads.notion.site/Bot-o-fb3a921e8ba54bd38b39758c24613368"],["href","documentation/po-chart"],["href","documentation/po-gauge"],["href","documentation/po-navbar"],["href","documentation/po-page-list"],["href","documentation/po-page-login"],["href","documentation/po-sync"],["href","documentation/po-upload"],["href","documentation/po-lookup"],["href","documentation/po-http-interceptor"],["href","documentation/po-page-detail"],["href","documentation/po-page-edit"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"p"),e(2,"\xC0s vezes as mudan\xE7as s\xE3o necess\xE1rias para inovar e se manter atualizado, e para tornar essas transi\xE7\xF5es o mais f\xE1cil poss\xEDvel, assumimos o compromisso de minimizar o n\xFAmero de mudan\xE7as significativas e fornecer ferramentas de migra\xE7\xE3o, al\xE9m disso, seguimos uma pol\xEDtica de suspens\xE3o de uso para que voc\xEA tenha tempo h\xE1bil para atualizar suas aplica\xE7\xF5es com as funcionalidades mais recentes."),t(),i(3,"h2"),e(4,"Descontinuidade"),t(),i(5,"p"),e(6,"Anunciamos os recursos obsoletos no nosso "),i(7,"a",1),e(8,"CHANGELOG"),t(),e(9,". Esses recursos obsoletos aparecem na documenta\xE7\xE3o com uma marca\xE7\xE3o de "),i(10,"em")(11,"code"),e(12,"Deprecated"),t()(),e(13," e n\xE3o s\xE3o mais exemplificados nos "),i(14,"em"),e(15,"samples"),t(),e(16," do portal. Quando anunciamos uma suspens\xE3o de uso, sempre anunciamos tamb\xE9m um caminho de atualiza\xE7\xE3o recomendado. Neste documento teremos um resumo dessses recursos depreciados."),t(),i(17,"p"),e(18,"Quando um recurso \xE9 descontinuado ele ainda se mant\xE9m presente geralmente pelas pr\xF3ximas "),i(19,"code"),e(20,"duas"),t(),e(21," vers\xF5es principais. Depois disso esses recursos ser\xE3o removidos. Uma descontinua\xE7\xE3o pode ser anunciada em qualquer vers\xE3o, mas a sua remo\xE7\xE3o acontecer\xE1 apenas na vers\xE3o principal. At\xE9 um recurso depreciado ser removido, manteremos o suporte a problemas cr\xEDticos e de seguran\xE7a e tamb\xE9m temos ferramentas de migra\xE7\xE3o que geralmente automatizam a maior parte das atualiza\xE7\xF5es."),t(),i(22,"h2"),e(23,"\xCDndice"),t(),i(24,"p"),e(25,"A tabela a seguir lista todos os recursos depreciados, organizados pelo release em que ser\xE3o removidos. Cada item cont\xE9m um link para a se\xE7\xE3o que descreve o motivo da suspens\xE3o de uso e as op\xE7\xF5es de substitui\xE7\xE3o."),t(),i(26,"div",2)(27,"div",3)(28,"table",4)(29,"thead")(30,"tr",5)(31,"th",6),e(32,"\xC1rea"),t(),i(33,"th",6),e(34,"API ou Funcionalidade"),t(),i(35,"th",6),e(36,"Removida em"),t()()(),i(37,"tbody")(38,"tr",7)(39,"th",8)(40,"a",9),e(41,"PoTabs"),t()(),i(42,"td",8),e(43,"p-small"),t(),i(44,"td",10),e(45,"v18"),t()(),i(46,"tr",7)(47,"th",8)(48,"a",11),e(49,"PoTag"),t()(),i(50,"td",8),e(51,"p-inverse"),t(),i(52,"td",10),e(53,"v18"),t()(),i(54,"tr",7)(55,"th",8)(56,"a",12),e(57,"PoButton"),t()(),i(58,"td",8),e(59,"p-small"),t(),i(60,"td",10),e(61,"v17"),t()(),i(62,"tr",7)(63,"th",8)(64,"a",13),e(65,"PoButtonGroup"),t()(),i(66,"td",8),e(67,"p-small"),t(),i(68,"td",10),e(69,"v17"),t()(),i(70,"tr",7)(71,"th",8)(72,"a",14),e(73,"PoContainer"),t()(),i(74,"td",8),e(75,"p-no-shadow"),t(),i(76,"td",10),e(77,"v17"),t()(),i(78,"tr",7)(79,"th",8)(80,"a",15),e(81,"PoTable"),t()(),i(82,"td",8),e(83,"p-hide-text-overflow"),t(),i(84,"td",10),e(85,"v17"),t()()()()()(),i(86,"blockquote")(87,"p"),e(88,"Ver mais detalhes no nosso "),i(89,"a",1),e(90,"CHANGELOG"),t(),e(91," e na nossa documenta\xE7\xE3o das ferramentas de migra\xE7\xE3o que automatizam a maioria dos breaking changes."),t()(),i(92,"h2"),e(93,"Deprecia\xE7\xF5es"),t(),i(94,"p"),e(95,"Esta se\xE7\xE3o cont\xE9m uma lista completa de todos os recursos obsoletos com detalhes para ajud\xE1-lo a planejar sua migra\xE7\xE3o."),t(),i(96,"h3"),e(97,"PoButton"),t(),i(98,"div",2)(99,"div",3)(100,"table",4)(101,"thead")(102,"tr",5)(103,"th",6),e(104,"Recurso"),t(),i(105,"th",6),e(106,"Substitui\xE7\xE3o"),t(),i(107,"th",6),e(108,"An\xFAncio da Deprecia\xE7\xE3o"),t(),i(109,"th",6),e(110,"Removido em"),t()()(),i(111,"tbody")(112,"tr",7)(113,"th",8),e(114,"p-type"),t(),i(115,"td",8)(116,"a",12),e(117,"p-kind"),t()(),i(118,"td",10),e(119,"v6"),t(),i(120,"td",10),e(121,"v15"),t()()()()()(),i(122,"h4"),e(123,"Deprecia p-type default"),t(),i(124,"p"),e(125,"Indicamos o uso da propriedade "),i(126,"code"),e(127,"p-kind"),t(),e(128," secondary"),t(),i(129,"p"),e(130,"Antes:"),t(),i(131,"pre")(132,"code"),e(133,`// html
<po-button [p-type]="default" ...></po-button>
`),t()(),i(134,"p"),e(135,"Depois:"),t(),i(136,"pre")(137,"code"),e(138,`// html
<po-button p-kind="secondary" ...></po-button>
`),t()(),i(139,"h4"),e(140,"Deprecia p-type primary"),t(),i(141,"p"),e(142,"Indicamos o uso da propriedade "),i(143,"code"),e(144,"p-kind"),t(),e(145," primary"),t(),i(146,"p"),e(147,"Antes:"),t(),i(148,"pre")(149,"code"),e(150,`// html
<po-button [p-type]="primary" ...></po-button>
`),t()(),i(151,"p"),e(152,"Depois:"),t(),i(153,"pre")(154,"code"),e(155,`// html
<po-button p-kind="primary" ...></po-button>
`),t()(),i(156,"h4"),e(157,"Deprecia p-type link"),t(),i(158,"p"),e(159,"Indicamos o uso da propriedade "),i(160,"code"),e(161,"p-kind"),t(),e(162," tertiary"),t(),i(163,"p"),e(164,"Antes:"),t(),i(165,"pre")(166,"code"),e(167,`// html
<po-button [p-type]="link" ...></po-button>
`),t()(),i(168,"p"),e(169,"Depois:"),t(),i(170,"pre")(171,"code"),e(172,`// html
<po-button p-kind="tertiary" ...></po-button>
`),t()(),i(173,"h4"),e(174,"Deprecia p-type danger"),t(),i(175,"p"),e(176,"Indicamos o uso da propriedade "),i(177,"code"),e(178,"p-danger"),t(),e(179," true"),t(),i(180,"p"),e(181,"Antes:"),t(),i(182,"pre")(183,"code"),e(184,`// html
<po-button [p-type]="danger" ...></po-button>
`),t()(),i(185,"p"),e(186,"Depois:"),t(),i(187,"pre")(188,"code"),e(189,`// html
<po-button [p-danger]="true" ...></po-button>
`),t()(),i(190,"h3"),e(191,"HttpClientModule"),t(),i(192,"blockquote")(193,"p"),e(194,"O m\xF3dulo HttpClientModule foi removido do projeto n\xE3o sendo mais importado diretamente nos componentes que o utilizavam e por motivos de boas pr\xE1ticas \xE9 necess\xE1rio importar o HttpClientModule apenas no m\xF3dulo principal da aplica\xE7\xE3o."),t()(),i(195,"p"),e(196,"Exemplo:"),t(),i(197,"pre")(198,"code"),e(199,`// app.module.ts
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
`),t()(),i(200,"h2"),e(201,"Breaking Changes"),t(),i(202,"div",2)(203,"div",3)(204,"table",4)(205,"thead")(206,"tr",5)(207,"th",6),e(208,"\xC1rea"),t(),i(209,"th",6),e(210,"Funcionalidade"),t(),i(211,"th",6),e(212,"Substitui\xE7\xE3o"),t(),i(213,"th",6),e(214,"Removida em"),t()()(),i(215,"tbody")(216,"tr",7)(217,"th",8)(218,"a",9),e(219,"PoTabs"),t()(),i(220,"td",8),e(221,"p-small"),t(),i(222,"td",8),e(223,"-"),t(),i(224,"td",10),e(225,"v18"),t()(),i(226,"tr",7)(227,"th",8)(228,"a",11),e(229,"PoTag"),t()(),i(230,"td",8),e(231,"p-inverse"),t(),i(232,"td",8),e(233,"-"),t(),i(234,"td",10),e(235,"v18"),t()(),i(236,"tr",7)(237,"th",8)(238,"a",12),e(239,"PoButton"),t()(),i(240,"td",8),e(241,"p-small"),t(),i(242,"td",8),e(243,"-"),t(),i(244,"td",10),e(245,"v17"),t()(),i(246,"tr",7)(247,"th",8)(248,"a",13),e(249,"PoButtonGroup"),t()(),i(250,"td",8),e(251,"p-small"),t(),i(252,"td",8),e(253,"-"),t(),i(254,"td",10),e(255,"v17"),t()(),i(256,"tr",7)(257,"th",8)(258,"a",14),e(259,"PoContainer"),t()(),i(260,"td",8),e(261,"p-no-shadow"),t(),i(262,"td",8),e(263,"-"),t(),i(264,"td",10),e(265,"v17"),t()(),i(266,"tr",7)(267,"th",8)(268,"a",15),e(269,"PoTable"),t()(),i(270,"td",8),e(271,"p-hide-text-overflow"),t(),i(272,"td",8),e(273,"-"),t(),i(274,"td",10),e(275,"v17"),t()(),i(276,"tr",7)(277,"th",8)(278,"a",12),e(279,"PoButton"),t()(),i(280,"td",8),e(281,"p-type"),t(),i(282,"td",8),e(283,"-"),t(),i(284,"td",10),e(285,"v15"),t()(),i(286,"tr",7)(287,"th",8),e(288,"Build"),t(),i(289,"td",8),e(290,"HttpClientModule"),t(),i(291,"td",8),e(292,"-"),t(),i(293,"td",10),e(294,"v15"),t()(),i(295,"tr",7)(296,"th",8)(297,"a",16),e(298,"PoDynamicFormFields"),t()(),i(299,"td",8),e(300,"p-auto-focus"),t(),i(301,"td",8),e(302,"-"),t(),i(303,"td",10),e(304,"v14"),t()(),i(305,"tr",7)(306,"th",8)(307,"a",17),e(308,"PoSelect"),t()(),i(309,"td",8),e(310,"p-auto-focus"),t(),i(311,"td",8),e(312,"-"),t(),i(313,"td",10),e(314,"v14"),t()(),i(315,"tr",7)(316,"th",8)(317,"a",18),e(318,"PoSwitch"),t()(),i(319,"td",8),e(320,"p-auto-focus"),t(),i(321,"td",8),e(322,"-"),t(),i(323,"td",10),e(324,"v14"),t()(),i(325,"tr",7)(326,"th",8)(327,"a",12),e(328,"PoButton"),t()(),i(329,"td",8),e(330,"p-auto-focus"),t(),i(331,"td",8),e(332,"-"),t(),i(333,"td",10),e(334,"v14"),t()(),i(335,"tr",7)(336,"th",8)(337,"a",16),e(338,"PoSelectOptionTemplate"),t()(),i(339,"td",8),e(340,"-"),t(),i(341,"td",8),e(342,"PoComboOptionTemplate"),t(),i(343,"td",10),e(344,"v14"),t()(),i(345,"tr",7)(346,"th",8)(347,"a",19),e(348,"Components"),t()(),i(349,"td",8),e(350,"diminui\xE7\xE3o da altura em pequenas resolu\xE7\xF5es. "),i(351,"a",20),e(352,"Ver mais"),t()(),i(353,"td",8),e(354,"-"),t(),i(355,"td",10),e(356,"v14"),t()(),i(357,"tr",7)(358,"th",8)(359,"a",21),e(360,"PoChart"),t()(),i(361,"td",8),e(362,"PoChartGaugeSerie"),t(),i(363,"td",8)(364,"a",22),e(365,"PoGauge"),t()(),i(366,"td",10),e(367,"v6"),t()(),i(368,"tr",7)(369,"th",8)(370,"a",21),e(371,"PoChart"),t()(),i(372,"td",8),e(373,"PoChartSerie.category"),t(),i(374,"td",8),e(375,"PoChartSerie.label"),t(),i(376,"td",10),e(377,"v6"),t()(),i(378,"tr",7)(379,"th",8)(380,"a",21),e(381,"PoChart"),t()(),i(382,"td",8),e(383,"PoChartSerie.value"),t(),i(384,"td",8),e(385,"PoChartSerie.data"),t(),i(386,"td",10),e(387,"v6"),t()(),i(388,"tr",7)(389,"th",8)(390,"a",21),e(391,"PoChart"),t()(),i(392,"td",8),e(393,"PoChartType.Gauge"),t(),i(394,"td",8)(395,"a",22),e(396,"PoGauge"),t()(),i(397,"td",10),e(398,"v6"),t()(),i(399,"tr",7)(400,"th",8)(401,"a",23),e(402,"PoNavBar"),t()(),i(403,"td",8),e(404,"p-menu"),t(),i(405,"td",8),e(406,"-"),t(),i(407,"td",10),e(408,"v6"),t()(),i(409,"tr",7)(410,"th",8)(411,"a",21),e(412,"PoChart"),t()(),i(413,"td",8),e(414,"PoPieChartSeries"),t(),i(415,"td",8),e(416,"PoChartSerie"),t(),i(417,"td",10),e(418,"v5"),t()(),i(419,"tr",7)(420,"th",8)(421,"a",21),e(422,"PoChart"),t()(),i(423,"td",8),e(424,"PoDonutChartSeries"),t(),i(425,"td",8),e(426,"PoChartSerie"),t(),i(427,"td",10),e(428,"v5"),t()(),i(429,"tr",7)(430,"th",8)(431,"a",21),e(432,"PoChart"),t()(),i(433,"td",8),e(434,"PoBarChartSeries"),t(),i(435,"td",8),e(436,"PoChartSerie"),t(),i(437,"td",10),e(438,"v5"),t()(),i(439,"tr",7)(440,"th",8)(441,"a",21),e(442,"PoChart"),t()(),i(443,"td",8),e(444,"PoColumnChartSeries"),t(),i(445,"td",8),e(446,"PoChartSerie"),t(),i(447,"td",10),e(448,"v5"),t()(),i(449,"tr",7)(450,"th",8)(451,"a",21),e(452,"PoChart"),t()(),i(453,"td",8),e(454,"PoLineChartSeries"),t(),i(455,"td",8),e(456,"PoChartSerie"),t(),i(457,"td",10),e(458,"v5"),t()(),i(459,"tr",7)(460,"th",8)(461,"a",15),e(462,"PoTable"),t()(),i(463,"td",8),e(464,"p-single-select"),t(),i(465,"td",8),e(466,'[p-single-select]="false"'),t(),i(467,"td",10),e(468,"v5"),t()(),i(469,"tr",7)(470,"th",8)(471,"a",15),e(472,"PoTable"),t()(),i(473,"td",8),e(474,"p-hide-select-all"),t(),i(475,"td",8),e(476,'[p-hide-select-all]="false"'),t(),i(477,"td",10),e(478,"v5"),t()(),i(479,"tr",7)(480,"th",8)(481,"a",15),e(482,"PoTable"),t()(),i(483,"td",8),e(484,"p-striped"),t(),i(485,"td",8),e(486,'[p-striped]="false"'),t(),i(487,"td",10),e(488,"v5"),t()(),i(489,"tr",7)(490,"th",8)(491,"a",15),e(492,"PoTable"),t()(),i(493,"td",8),e(494,"p-show-more-disabled"),t(),i(495,"td",8),e(496,'[p-show-more-disabled]="false"'),t(),i(497,"td",10),e(498,"v5"),t()(),i(499,"tr",7)(500,"th",8)(501,"a",15),e(502,"PoTable"),t()(),i(503,"td",8),e(504,"p-sort"),t(),i(505,"td",8),e(506,'[p-sort]="false"'),t(),i(507,"td",10),e(508,"v5"),t()(),i(509,"tr",7)(510,"th",8)(511,"a",24),e(512,"PoPageList"),t()(),i(513,"td",8),e(514,"PoPageFilter.ngModel"),t(),i(515,"td",8),e(516,"-"),t(),i(517,"td",10),e(518,"v4"),t()(),i(519,"tr",7)(520,"th",8)(521,"a",24),e(522,"PoPageList"),t()(),i(523,"td",8),e(524,"PoPageFilter.action: string"),t(),i(525,"td",8),e(526,"PoPageFilter.action: Function"),t(),i(527,"td",10),e(528,"v4"),t()(),i(529,"tr",7)(530,"th",8)(531,"a",24),e(532,"PoPageList"),t()(),i(533,"td",8),e(534,"PoPageFilter.advancedAction: string"),t(),i(535,"td",8),e(536,"PoPageFilter.advancedAction: Function"),t(),i(537,"td",10),e(538,"v4"),t()(),i(539,"tr",7)(540,"th",8)(541,"a",25),e(542,"PoPageLogin"),t()(),i(543,"td",8),e(544,"PoPageLoginLiterals.title"),t(),i(545,"td",8),e(546,"p-product-name"),t(),i(547,"td",10),e(548,"v4"),t()(),i(549,"tr",7)(550,"th",8)(551,"a",21),e(552,"PoChart"),t()(),i(553,"td",8),e(554,"PoChartOptions.axis.axisXGridLines"),t(),i(555,"td",8),e(556,"PoChartOptions.axis.gridLines"),t(),i(557,"td",10),e(558,"v4"),t()(),i(559,"tr",7)(560,"th",8)(561,"a",26),e(562,"PoSync"),t()(),i(563,"td",8),e(564,"portinari_sync_date"),t(),i(565,"td",8),e(566,"po_sync_date"),t(),i(567,"td",10),e(568,"v3"),t()(),i(569,"tr",7)(570,"th",8)(571,"a",27),e(572,"PoUpload"),t()(),i(573,"td",8),e(574,"PoUploadLiterals.cancel"),t(),i(575,"td",8),e(576,"-"),t(),i(577,"td",10),e(578,"v3"),t()(),i(579,"tr",7)(580,"th",8)(581,"a",27),e(582,"PoUpload"),t()(),i(583,"td",8),e(584,"PoUploadLiterals.deleteFile"),t(),i(585,"td",8),e(586,"-"),t(),i(587,"td",10),e(588,"v3"),t()(),i(589,"tr",7)(590,"th",8)(591,"a",27),e(592,"PoUpload"),t()(),i(593,"td",8),e(594,"PoUploadLiterals.tryAgain"),t(),i(595,"td",8),e(596,"-"),t(),i(597,"td",10),e(598,"v3"),t()(),i(599,"tr",7)(600,"th",8)(601,"a",28),e(602,"PoLookup"),t()(),i(603,"td",8),e(604,"getFilteredData"),t(),i(605,"td",8),e(606,"getFilteredItems"),t(),i(607,"td",10),e(608,"v3"),t()(),i(609,"tr",7)(610,"th",8)(611,"a",15),e(612,"PoTable"),t()(),i(613,"td",8),e(614,"p-checkbox"),t(),i(615,"td",8),e(616,"p-selectable"),t(),i(617,"td",10),e(618,"v3"),t()(),i(619,"tr",7)(620,"th",8)(621,"a",16),e(622,"PoField"),t()(),i(623,"td",8),e(624,"p-focus"),t(),i(625,"td",8),e(626,"p-auto-focus"),t(),i(627,"td",10),e(628,"v2"),t()(),i(629,"tr",7)(630,"th",8),e(631,"Packages"),t(),i(632,"td",8),e(633,"@portinari/portinari-ui"),t(),i(634,"td",8),e(635,"@po-ui/ng-components"),t(),i(636,"td",10),e(637,"v2"),t()(),i(638,"tr",7)(639,"th",8),e(640,"Packages"),t(),i(641,"td",8),e(642,"@portinari/portinari-templates"),t(),i(643,"td",8),e(644,"@po-ui/ng-templates"),t(),i(645,"td",10),e(646,"v2"),t()(),i(647,"tr",7)(648,"th",8),e(649,"Packages"),t(),i(650,"td",8),e(651,"@portinari/portinari-code-editor"),t(),i(652,"td",8),e(653,"@po-ui/ng-code-editor"),t(),i(654,"td",10),e(655,"v2"),t()(),i(656,"tr",7)(657,"th",8),e(658,"Packages"),t(),i(659,"td",8),e(660,"@portinari/portinari-storage"),t(),i(661,"td",8),e(662,"@po-ui/ng-storage"),t(),i(663,"td",10),e(664,"v2"),t()(),i(665,"tr",7)(666,"th",8),e(667,"Packages"),t(),i(668,"td",8),e(669,"@portinari/portinari-sync"),t(),i(670,"td",8),e(671,"@po-ui/ng-sync"),t(),i(672,"td",10),e(673,"v2"),t()(),i(674,"tr",7)(675,"th",8)(676,"a",29),e(677,"PoHttpInterceptor"),t()(),i(678,"td",8),e(679,"X-Portinari-No-Message"),t(),i(680,"td",8),e(681,"X-PO-No-Message"),t(),i(682,"td",10),e(683,"v2"),t()(),i(684,"tr",7)(685,"th",8)(686,"a",29),e(687,"PoHttpInterceptor"),t()(),i(688,"td",8),e(689,"X-Portinari-SCREEN-LOCK"),t(),i(690,"td",8),e(691,"X-PO-SCREEN-LOCK"),t(),i(692,"td",10),e(693,"v2"),t()(),i(694,"tr",7)(695,"th",8)(696,"a",29),e(697,"PoHttpInterceptor"),t()(),i(698,"td",8),e(699,"X-Portinari-No-Count-Pending-Requests"),t(),i(700,"td",8),e(701,"X-PO-No-Count-Pending-Requests"),t(),i(702,"td",10),e(703,"v2"),t()(),i(704,"tr",7)(705,"th",8)(706,"a",30),e(707,"PoPageDetail"),t()(),i(708,"td",8),e(709,"reconhecimento das a\xE7\xF5es via fun\xE7\xF5es no typescript"),t(),i(710,"td",8),e(711,"utiliza\xE7\xE3o das propriedades p-back, p-edit e p-remove"),t(),i(712,"td",10),e(713,"v2"),t()(),i(714,"tr",7)(715,"th",8)(716,"a",31),e(717,"PoPageEdit"),t()(),i(718,"td",8),e(719,"reconhecimento das a\xE7\xF5es via fun\xE7\xF5es no typescript"),t(),i(720,"td",8),e(721,"utiliza\xE7\xE3o das propriedades p-save, p-save-new e p-cancel"),t(),i(722,"td",10),e(723,"v2"),t()()()()()(),i(724,"blockquote")(725,"p"),e(726,"Ver mais detalhes no nosso "),i(727,"a",1),e(728,"CHANGELOG"),t(),e(729," e na nossa documenta\xE7\xE3o das ferramentas de migra\xE7\xE3o que automatizam a maioria dos breaking changes."),t()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var M=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:418,vars:0,consts:[["p-title","Contribuindo para o PO UI",1,"guides","app-portal"],["href","guides/development-flow#code-of-conduct"],["href","guides/development-flow#flow"],["href","guides/development-flow#create-issue"],["href","guides/development-flow#code-reproduction"],["href","guides/development-flow#contribute"],["href","guides/development-flow#setup"],["href","guides/development-flow#modifying-components"],["href","guides/development-flow#preview-changes"],["href","guides/development-flow#tests"],["href","guides/development-flow#lint"],["href","guides/development-flow#po-style"],["href","guides/development-flow#build"],["href","guides/development-flow#pr"],["id","code-of-conduct"],["href","https://github.com/po-ui/po-angular/blob/master/CODE_OF_CONDUCT.md"],["id","flow"],[1,"card-list-item"],["id","create-issue"],[1,"po-row"],[1,"po-pl-md-5","po-pr-lg-5"],["src","./assets/graphics/contribute/bug.png",1,"card-list-icon"],[1,"po-font-subtitle","po-pb-1"],["href","https://github.com/po-ui/po-angular/issues/439"],["href","https://github.com/po-ui/po-angular/pulls"],["id","code-reproduction"],["src","./assets/graphics/contribute/ambiente_teste.png",1,"card-list-icon"],["href","https://stackblitz.com/edit/po-ui"],["id","contribute"],["src","./assets/graphics/contribute/colabore.png",1,"card-list-icon"],[1,"po-font-text"],["id","setup"],["src","./assets/graphics/contribute/setup.png",1,"card-list-icon"],[1,"po-text-color-neutral-dark-40"],["href","https://git-scm.com/book/en/v2"],["href","https://github.com/po-ui/po-angular"],["id","modifying-components"],["src","./assets/graphics/contribute/modificando.png",1,"card-list-icon"],["href","https://github.com/po-ui/po-angular/blob/master/STYLEGUIDE.md"],["href","https://github.com/po-ui/po-angular/blob/master/HOW_TO_DOCUMENT.md"],["id","preview-changes"],["src","./assets/graphics/contribute/rodando_local.png",1,"card-list-icon"],["id","tests"],["src","./assets/graphics/contribute/teste_unitario.png",1,"card-list-icon"],["id","lint"],["src","./assets/graphics/contribute/lint.png",1,"card-list-icon"],["id","po-style"],["src","./assets/graphics/contribute/css.png",1,"card-list-icon"],["href","https://github.com/po-ui/po-style"],["href","https://github.com/po-ui/po-style/blob/master/README.md"],["id","build"],["src","./assets/graphics/contribute/build.png",1,"card-list-icon"],["href","https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md#commits"],["id","pr"],[1,"po-pl-sm-5","po-pl-md-5","po-pr-lg-5"],["src","./assets/graphics/contribute/pr.png",1,"card-list-icon"],["href","https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork"],["href","https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md#pull-requests"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"h4"),e(2,"Obrigado pelo interesse em contribuir para a biblioteca PO UI!"),t(),i(3,"h2"),e(4,"Conte\xFAdo"),t(),i(5,"ul")(6,"li")(7,"a",1),e(8,"C\xF3digo de conduta"),t()(),i(9,"li")(10,"a",2),e(11,"Fluxo"),t(),i(12,"ul")(13,"li")(14,"a",3),e(15,"Criando "),i(16,"em"),e(17,"issue"),t(),e(18," no GitHub"),t()(),i(19,"li")(20,"a",4),e(21,"Criando reprodu\xE7\xE3o de c\xF3digo para nova "),i(22,"em"),e(23,"issue"),t()()(),i(24,"li")(25,"a",5),e(26,"Colaborando com o PO UI"),t()(),i(27,"li")(28,"a",6),e(29,"Setup Inicial"),t()(),i(30,"li")(31,"a",7),e(32,"Modificando Componentes"),t()(),i(33,"li")(34,"a",8),e(35,"Subindo as modifica\xE7\xF5es localmente"),t()(),i(36,"li")(37,"a",9),e(38,"Testes Unit\xE1rios"),t()(),i(39,"li")(40,"a",10),e(41,"ES Lint"),t()(),i(42,"li")(43,"a",11),e(44,"Po Style"),t()(),i(45,"li")(46,"a",12),e(47,"Build das modifica\xE7\xF5es"),t()(),i(48,"li")(49,"a",13),e(50,"Criando Pull Request"),t()()()()(),i(51,"p"),n(52,"a",14),t(),i(53,"h3"),e(54,"C\xF3digo de conduta"),t(),i(55,"p"),e(56,"Primeiramente, pedimos para que leiam com aten\xE7\xE3o nosso "),i(57,"a",15),e(58,"C\xF3digo de Conduta"),t(),e(59," para se inteirarem sobre nossas regras."),t(),i(60,"p"),n(61,"a",16),t(),i(62,"h2"),e(63,"Fluxo"),t(),i(64,"p"),e(65,"Este guia tem por objetivo definir as regras para cria\xE7\xE3o de "),i(66,"em"),e(67,"Issues"),t(),e(68," relacionadas \xE0 melhorias ou defeitos na biblioteca, assim como orientar no interesse em colaborar com o PO UI, definindo premissas para cria\xE7\xE3o de novas "),i(69,"em"),e(70,"Branchs"),t(),e(71,", "),i(72,"em"),e(73,"Pull Requests"),t(),e(74," e "),i(75,"em"),e(76,"Commits"),t(),e(77," no projeto PO UI. "),t(),i(78,"div")(79,"div",17),n(80,"a",18),i(81,"div",19)(82,"div",20),n(83,"img",21),i(84,"h3",22),e(85,"Criando uma "),i(86,"em"),e(87,"issue"),t(),e(88," no GitHub"),t(),i(89,"ul")(90,"li"),e(91,"Antes de tudo, se voc\xEA possui alguma quest\xE3o relacionada ao uso da biblioteca, bem como d\xFAvidas relacionadas a componentes, bibliotecas PO UI, por favor pergunte nos nossos "),i(92,"a",23),e(93,"canais de comunica\xE7\xE3o"),t(),e(94,"."),t(),i(95,"li"),e(96,"A lista de "),i(97,"em"),e(98,"issues"),t(),e(99," do reposit\xF3rio PO UI \xE9 de uso exclusivo para informe de "),i(100,"em"),e(101,"bugs"),t(),e(102," e requisi\xE7\xF5es de melhorias. "),i(103,"em"),e(104,"Issues"),t(),e(105," que n\xE3o se enquadrarem nisso ser\xE3o fechadas imediatamente."),t(),i(106,"li"),e(107,"Se voc\xEA tem uma nova "),i(108,"em"),e(109,"feature"),t(),e(110," para nos sugerir ou ent\xE3o deseja reportar um bug, por favor avalie se nas "),i(111,"a",24)(112,"em"),e(113,"Pull Requests"),t(),e(114," do PO UI"),t(),e(115," n\xE3o tem nenhuma submiss\xE3o anterior que resolva o problema, eliminando assim a eventual hip\xF3tese de duplicidade."),t(),i(116,"li"),e(117,"\xC9 requerido que voc\xEA descreva de maneira clara os passos necess\xE1rios para reproduzir a "),i(118,"em"),e(119,"issue"),t(),e(120," reportada. Entenda que, apesar de sermos sempre sol\xEDcitos e darmos o pronto-apoio em nossos canais, reproduzir erros sem evid\xEAncias diretas tomam um grande tempo da equipe."),t(),i(121,"li"),e(122,"As "),i(123,"em"),e(124,"issues"),t(),e(125," que n\xE3o tiverem uma descri\xE7\xE3o detalhada e um passo-a-passo para reprodu\xE7\xE3o ter\xE3o menor prioridade. Se em caso de solicita\xE7\xE3o do "),i(126,"em"),e(127,"core team"),t(),e(128," por maiores evid\xEAncias, o autor da "),i(129,"em"),e(130,"issue"),t(),e(131," ter\xE1 30 dias para resposta. Se neste per\xEDodo n\xE3o houver qualquer resposta, ent\xE3o a "),i(132,"em"),e(133,"issue"),t(),e(134," ser\xE1 fechada."),t()()()()(),i(135,"div",17),n(136,"a",25),i(137,"div",19)(138,"div",20),n(139,"img",26),i(140,"h3",22),e(141,"Criando reprodu\xE7\xE3o de c\xF3digo para nova "),i(142,"em"),e(143,"issue"),t()(),i(144,"ul")(145,"li"),e(146,"Crie uma nova aplica\xE7\xE3o em Angular incluindo o componente e o comportamento reportado para nossa an\xE1lise."),t(),i(147,"li"),e(148,"Adicione o m\xEDnimo de c\xF3digo necess\xE1rio para reprodu\xE7\xE3o do bug, facilitando assim a verifica\xE7\xE3o da situa\xE7\xE3o."),t(),i(149,"li"),e(150,"Publique a aplica\xE7\xE3o no GitHub e inclua o link ao criar a issue."),t(),i(151,"li"),e(152,"Pode-se tamb\xE9m usar o "),i(153,"a",27),e(154,"Stackblitz"),t(),e(155," para reproduzir o "),i(156,"em"),e(157,"bug"),t(),e(158," relatado na "),i(159,"em"),e(160,"issue"),t(),e(161,"."),t(),i(162,"li"),e(163,"Certifique-se de incluir os passos para reprodu\xE7\xE3o da issue. Estes passos devem ser claros e simples de seguir."),t()()()()(),i(164,"div",17),n(165,"a",28),i(166,"div",19)(167,"div",20),n(168,"img",29),i(169,"h3",22),e(170,"Colaborando com o PO UI"),t(),i(171,"p",30),e(172,"Mais uma vez agradecemos por dedicar seu tempo para contribuir com o PO UI! Antes de submeter uma "),i(173,"em"),e(174,"pull request"),t(),e(175,", pedimos pra que voc\xEA crie uma "),i(176,"em"),e(177,"issue"),t(),e(178," reportando uma eventual sugest\xE3o de melhoria, nova funcionalidade ou corre\xE7\xE3o de bug e nos deixe ciente de que deseja criar uma "),i(179,"em"),e(180,"pull request"),t(),e(181," para isso. Caso se trate de uma "),i(182,"em"),e(183,"issue"),t(),e(184," j\xE1 existente, por favor comente na "),i(185,"em"),e(186,"issue"),t(),e(187,". Isso nos ajuda a acompanhar as "),i(188,"em"),e(189,"pull requests"),t(),e(190," e tamb\xE9m evitar duplicidades."),t()()()(),i(191,"div",17),n(192,"a",31),i(193,"div",19)(194,"div",20),n(195,"img",32),i(196,"h3",22),e(197,"Setup Inicial"),t(),i(198,"blockquote",33),e(199,"Para seguir o guia \xE9 fundamental o conhecimento da "),i(200,"a",34),e(201,"ferramenta Git."),t()(),i(202,"ul")(203,"li"),e(204,"Para utilizar o PO UI, \xE9 pr\xE9-requisito ter o "),i(205,"code"),e(206,"Node.js"),t(),e(207," instalado (vers\xE3o 18.13.0 ou acima) e o seu gerenciador de pacote favorito na vers\xE3o mais atual."),t(),i(208,"li")(209,"p"),e(210,"\xC9 importante que tenha a vers\xE3o equivalente do Angular instalada. Instale-o via "),i(211,"code"),e(212,"npm"),t(),e(213," ou "),i(214,"code"),e(215,"yarn"),t(),e(216,":"),t(),i(217,"p"),e(218,"Instalando com npm:"),t(),i(219,"pre")(220,"code"),e(221,"npm i -g @angular/cli"),t()(),i(222,"p"),e(223,"Caso opte pelo yarn:"),t(),i(224,"pre")(225,"code"),e(226,"yarn global add @angular/cli"),t()()(),i(227,"li"),e(228,"Fa\xE7a um "),i(229,"a",35)(230,"em"),e(231,"fork"),t(),e(232," do reposit\xF3rio PO UI"),t(),e(233,". "),i(234,"blockquote"),e(235,"Membros do "),i(236,"em"),e(237,"Core Team"),t(),e(238," devem gerar uma nova "),i(239,"em"),e(240,"branch"),t(),e(241," ao inv\xE9s do "),i(242,"em"),e(243,"fork"),t(),e(244,"."),t()(),i(245,"li"),e(246,"Fa\xE7a "),i(247,"em"),e(248,"clone"),t(),e(249," do "),i(250,"em"),e(251,"fork"),t(),e(252," gerado."),t(),i(253,"li"),e(254,"Execute "),i(255,"code"),e(256,"npm install"),t(),e(257," para instalar as depend\xEAncias."),t()()()()(),i(258,"div",17),n(259,"a",36),i(260,"div",19)(261,"div",20),n(262,"img",37),i(263,"h3",22),e(264,"Modificando componentes"),t(),i(265,"ul")(266,"li"),e(267,"Localize o componente em "),i(268,"code"),e(269,"projects/<projeto>/src/lib"),t()(),i(270,"li"),e(271,"\xC9 muito importante que analise nossa documenta\xE7\xE3o sobre "),i(272,"a",38),e(273,"boas pr\xE1ticas"),t(),e(274," para entender a implementa\xE7\xE3o dos componentes PO UI."),t(),i(275,"li"),e(276,"Modifique a documenta\xE7\xE3o com base em nosso "),i(277,"a",39),e(278,"guia detalhado de documenta\xE7\xE3o"),t(),e(279,"."),t(),i(280,"li"),e(281,"Se as implementa\xE7\xF5es tamb\xE9m contemplarem estilo, note que dever\xE1 modific\xE1-las no reposit\xF3rio "),i(282,"a",11),e(283,"PO UI Style"),t(),e(284,"."),t(),i(285,"li"),e(286,"Fa\xE7a as implementa\xE7\xF5es desejadas, seja um novo componente, corre\xE7\xE3o ou melhoria, e "),i(287,"a",8),e(288,"verifique no portal"),t(),e(289," as modifica\xE7\xF5es realizadas tanto nos "),i(290,"em"),e(291,"samples"),t(),e(292," quanto na documenta\xE7\xE3o."),t()()()()(),i(293,"div",17),n(294,"a",40),i(295,"div",19)(296,"div",20),n(297,"img",41),i(298,"h3",22),e(299,"Subindo as modifica\xE7\xF5es localmente"),t(),i(300,"ul")(301,"li")(302,"p"),e(303,"As modifica\xE7\xF5es de c\xF3digo e documenta\xE7\xE3o realizadas podem ser conferidas executando os comandos:"),t(),i(304,"pre")(305,"code"),e(306,"npm run build:portal && ng serve portal"),t()()(),i(307,"li"),e(308,"O navegador exibir\xE1 o portal na url "),i(309,"code"),e(310,"http://localhost:4200/"),t(),e(311,"."),t(),i(312,"li"),e(313,"A partir disso, navegue at\xE9 o componente para verifica\xE7\xE3o das modifica\xE7\xF5es."),t(),i(314,"li"),e(315,"Pedimos para que atente para a inclus\xE3o da melhoria em nossos "),i(316,"em"),e(317,"samples"),t(),e(318,", em especial no sample "),i(319,"code"),e(320,"labs"),t(),e(321,". Na inviabilidade de usar os "),i(322,"em"),e(323,"samples"),t(),e(324," j\xE1 existentes, considere a necessidade de criar um novo "),i(325,"em"),e(326,"sample"),t(),e(327," de uso."),t()()()()(),i(328,"div",17),n(329,"a",42),i(330,"div",19)(331,"div",20),n(332,"img",43),i(333,"h3",22),e(334,"Testes Unit\xE1rios"),t(),i(335,"p"),e(336,"A cobertura de testes do PO UI \xE9 total. Isso significa que, obrigatoriamente, as modifica\xE7\xF5es devem ser totalmente testadas. Para tal, execute os testes nos arquivos "),i(337,"em"),e(338,".spec"),t(),e(339," contidos no mesmo diret\xF3rio do componente."),t(),i(340,"p"),e(341,"Para rodar os testes, rode o comando:"),t(),i(342,"pre")(343,"code"),e(344,"npm run test"),t()(),i(345,"p"),e(346,"A cobertura de testes pode ser avaliada no arquivo "),i(347,"code"),e(348,"index.html"),t(),e(349," existente no diret\xF3rio "),i(350,"code"),e(351,"./coverage"),t(),e(352,". "),t()()()(),i(353,"div",17),n(354,"a",44),i(355,"div",19)(356,"div",20),n(357,"img",45),i(358,"h3",22),e(359,"ESLint"),t(),i(360,"p"),e(361,"O PO UI utiliza o ESLint como linter padr\xE3o. Execute "),i(362,"code"),e(363,"ng lint"),t(),e(364," para fazer a checagem de c\xF3digo-fonte e verificar eventuais erros program\xE1ticos, estil\xEDsticos, constru\xE7\xF5es suspeitas, entre outros."),t()()()(),i(365,"div",17),n(366,"a",46),i(367,"div",19)(368,"div",20),n(369,"img",47),i(370,"h3",22),e(371,"PO Style"),t(),i(372,"p"),e(373,"As implementa\xE7\xF5es de estilo do PO UI s\xE3o armazenadas no "),i(374,"a",48),e(375,"reposit\xF3rio PO Style"),t(),e(376,"."),t(),i(377,"p"),e(378,"O desenvolvimento dos estilos \xE9 aberto para todos os desenvolvedores e agradecemos aos desenvolvedores que contribuem com melhorias e corre\xE7\xF5es de erros."),t(),i(379,"p"),e(380,"Para saber como voc\xEA pode pode participar na melhoria dos estilos, acesse o "),i(381,"a",49),e(382,"guia de implementa\xE7\xE3o de estilo"),t(),e(383,"."),t()()()(),i(384,"div",17),n(385,"a",50),i(386,"div",19)(387,"div",20),n(388,"img",51),i(389,"h3",22),e(390,"Build das modifica\xE7\xF5es"),t(),i(391,"p"),e(392,"Uma vez em que as modifica\xE7\xF5es desejadas forem concluidas e a documenta\xE7\xE3o esteja atualizada, execute os comandos abaixo para testagem no Portal PO UI."),t(),i(393,"pre")(394,"code"),e(395,`npm run build
npm run build:portal
ng serve portal`),t()(),i(396,"p"),e(397,"Revisadas as novas funcionalidades/corre\xE7\xF5es, \xE9 chegada a hora da gera\xE7\xE3o de commit. Confira as "),i(398,"a",52),e(399,"regras para cria\xE7\xE3o de commit"),t(),e(400,"."),t()()()(),i(401,"div",17),n(402,"a",53),i(403,"div",19)(404,"div",54),n(405,"img",55),i(406,"h3",22),e(407,"Criando Pull Request"),t(),i(408,"p"),e(409,"Crie uma nova pull request com a master branch como base. Confira "),i(410,"a",56),e(411,"como criar pull request a partir de um fork"),t(),e(412,"."),t(),i(413,"p"),e(414,"\xC9 importante que siga guia contendo as "),i(415,"a",57),e(416,"regras para gera\xE7\xE3o de Pull Requests"),t(),e(417,"."),t()()()()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var I=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:190,vars:0,consts:[["p-title","Primeiros passos",1,"guides","app-portal"],["href","https://cli.angular.io/"],[1,"language-json"],["href","http://localhost:4200"],[1,"po-text-center"],["src","./assets/graphics/app-running.png","width","660px"],["href","/documentation/po-page-login"],["href","/documentation/po-modal-password-recovery"],["href","/documentation/po-page-blocked-user"],["href","/documentation/po-page-dynamic-table"],["href","/documentation"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"h3"),e(2,"Pr\xE9-requisitos"),t(),i(3,"p"),e(4,"Para come\xE7ar a utilizar o "),i(5,"strong"),e(6,"PO UI"),t(),e(7," \xE9 pr\xE9-requisito ter o "),i(8,"code"),e(9,"Node.js"),t(),e(10," instalado (vers\xE3o 18.19.x ou acima) e o seu gerenciador de pacote favorito na vers\xE3o mais atual. Caso voc\xEA ainda n\xE3o tenha instalado o pacote "),i(11,"code"),e(12,"@angular/cli"),t(),e(13,", instale-o via "),i(14,"code"),e(15,"npm"),t(),e(16," ou "),i(17,"code"),e(18,"yarn"),t(),e(19,"."),t(),i(20,"p"),e(21,"Instalando com npm:"),t(),i(22,"pre")(23,"code"),e(24,`npm i -g @angular/cli@19
`),t()(),i(25,"p"),e(26,"Caso prefira instalar com o yarn:"),t(),i(27,"pre")(28,"code"),e(29,`yarn global add @angular/cli@19
`),t()(),i(30,"h3"),e(31,"Passo 1 - Crie o seu primeiro projeto"),t(),i(32,"blockquote")(33,"p"),e(34,"Caso voc\xEA j\xE1 tenha um projeto criado e deseje apenas incluir o "),i(35,"strong"),e(36,"Po"),t(),e(37,", pule esta etapa e v\xE1 para o "),i(38,"strong"),e(39,"Passo 1.1"),t(),e(40,"."),t()(),i(41,"p"),e(42,"O "),i(43,"a",1),e(44,"Angular CLI"),t(),e(45," se encarrega de construir toda estrutura inicial do projeto. Para isso, execute o seguinte comando:"),t(),i(46,"pre")(47,"code"),e(48,`ng new my-po-project --skip-install
`),t()(),i(49,"blockquote")(50,"p"),e(51,"O par\xE2metro "),i(52,"code"),e(53,"--skip-install"),t(),e(54," permite criar o projeto, contudo, n\xE3o instalar\xE1 as depend\xEAncias automaticamente."),t()(),i(55,"h4"),e(56,"Passo 1.1 - Instalando as depend\xEAncias"),t(),i(57,"p"),e(58,"Antes de executar a instala\xE7\xE3o ou inserir o "),i(59,"strong"),e(60,"Po"),t(),e(61," no seu projeto existente, \xE9 necess\xE1rio verificar as depend\xEAncias do seu projeto, algumas delas precisam estar de acordo com a vers\xE3o do "),i(62,"strong"),e(63,"Po"),t(),e(64," e Angular (elas podem ser encontradas no arquivo "),i(65,"code"),e(66,"package.json"),t(),e(67," localizado na raiz da aplica\xE7\xE3o)."),t(),i(68,"p"),e(69,"Veja abaixo a lista de depend\xEAncias e as vers\xF5es compat\xEDveis, elas devem ser conferidas e se necess\xE1rio, ajustadas no seu projeto."),t(),i(70,"pre")(71,"code",2),e(72,`  "dependencies": {
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
`),t()(),i(73,"p"),e(74,"Ap\xF3s verificar se estas depend\xEAncias do seu projeto est\xE3o com as vers\xF5es compat\xEDveis declaradas acima, acesse a pasta raiz do seu projeto e execute o comando abaixo:"),t(),i(75,"p"),e(76,"Instalando com npm:"),t(),i(77,"pre")(78,"code"),e(79,`npm install
`),t()(),i(80,"p"),e(81,"Caso prefira instalar com o yarn:"),t(),i(82,"pre")(83,"code"),e(84,`yarn install
`),t()(),i(85,"h3"),e(86,"Passo 2 - Adiconando o pacote @po-ui/ng-components"),t(),i(87,"p"),e(88,"Utilizando o comando "),i(89,"code"),e(90,"ng add"),t(),e(91," do "),i(92,"a",1),e(93,"Angular CLI"),t(),e(94,", vamos adicionar o "),i(95,"strong"),e(96,"Po"),t(),e(97," em seu projeto e o mesmo se encarregar\xE1 de configurar o tema, instalar o pacote e importar o m\xF3dulo do "),i(98,"strong"),e(99,"Po"),t(),e(100,". Al\xE9m de importar tamb\xE9m o modulo "),i(101,"strong"),e(102,"HttpClientModule"),t(),e(103,"."),t(),i(104,"p"),e(105,"Execute o comando abaixo na pasta raiz do seu projeto:"),t(),i(106,"pre")(107,"code"),e(108,`ng add @po-ui/ng-components
`),t()(),i(109,"blockquote")(110,"p"),e(111,"Ao executar o comando acima, ser\xE1 perguntado se deseja incluir uma estrutura inicial em seu projeto com menu lateral, p\xE1gina e toolbar, utilizando componentes do "),i(112,"strong"),e(113,"Po"),t(),e(114,", "),i(115,"strong"),e(116,"caso desejar, apenas informe: "),i(117,"code"),e(118,"Y"),t()(),e(119,"."),t()(),i(120,"h3"),e(121,"Passo 3 - Rode o seu projeto"),t(),i(122,"p"),e(123,"Agora basta executar mais um comando para subir a aplica\xE7\xE3o e ver o seu projeto rodando no "),i(124,"em"),e(125,"browser"),t(),e(126," ;)."),t(),i(127,"pre")(128,"code"),e(129,`ng serve
`),t()(),i(130,"p"),e(131,"Abra o "),i(132,"em"),e(133,"browser"),t(),e(134," e acesse a url "),i(135,"a",3),e(136,"http://localhost:4200"),t(),e(137,". Pronto! Se voc\xEA escolheu incluir uma estrutura inicial em seu projeto, ele deve estar parecido com essa imagem:"),t(),i(138,"p",4),n(139,"img",5),t(),n(140,"hr"),i(141,"h3"),e(142,"E agora?"),t(),i(143,"p"),e(144,"Agora \xE9 s\xF3 abrir seu "),i(145,"strong"),e(146,"editor / IDE"),t(),e(147," favorito e come\xE7ar a trabalhar no seu projeto."),t(),i(148,"p"),e(149,"Caso voc\xEA queira utilizar nossos componentes de templates, como o "),i(150,"strong")(151,"a",6),e(152,"po-page-login"),t()(),e(153,", "),i(154,"strong")(155,"a",7),e(156,"po-modal-password-recovery"),t()(),e(157,", "),i(158,"strong")(159,"a",8),e(160,"po-page-blocked-user"),t()(),e(161,", "),i(162,"strong")(163,"a",9),e(164,"po-page-dynamic-table"),t()(),e(165," entre outros, basta adicionar o pacote "),i(166,"code"),e(167,"@po-ui/ng-templates"),t(),e(168," executando o comando abaixo:"),t(),i(169,"pre")(170,"code"),e(171,`ng add @po-ui/ng-templates
`),t()(),i(172,"blockquote")(173,"p"),e(174,"Ao executar este comando, ser\xE1 instalado o pacote "),i(175,"code"),e(176,"@po-ui/ng-templates"),t(),e(177," e configurado o "),i(178,"code"),e(179,"PoTemplatesModules"),t(),e(180," no "),i(181,"code"),e(182,"app.module"),t(),e(183," somente se sua aplica\xE7\xE3o for configurada com m\xF3dulos."),t()(),i(184,"p"),e(185,"A partir dai o seu projeto est\xE1 preparado para receber outros componentes do "),i(186,"strong")(187,"a",10),e(188,"Po"),t()(),e(189,"! \\o/"),t()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var k=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:242,vars:0,consts:[["p-title","Guia de uso para Gr\xE1ficos",1,"guides","app-portal"],["href","guides/guide-charts#area"],["href","guides/guide-charts#bar"],["href","guides/guide-charts#column"],["href","guides/guide-charts#column-line"],["href","guides/guide-charts#gauge-semicircle"],["href","guides/guide-charts#line"],["href","guides/guide-charts#pie"],["href","guides/guide-charts#donut"],["href","guides/guide-charts#guide-colors"],["id","area"],["id","bar"],["id","column"],["id","column-line"],["id","gauge-semicircle"],["id","line"],["id","pie"],["id","donut"],["id","guide-colors"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"p"),e(2,"Este guia tem o objetivo de informar pr\xE1ticas de uso para cada tipo de gr\xE1fico do PO UI, o que devemos evitar ao utilizar determinado gr\xE1fico e tamb\xE9m as boas pr\xE1ticas relacionadas \xE0s cores nos gr\xE1ficos."),t(),i(3,"p"),e(4,"Gr\xE1ficos em geral t\xEAm a fun\xE7\xE3o de garantir que as pessoas de qualquer cultura ou pa\xEDs tenham entendimento claro para tomar as melhores decis\xF5es com base nas suas visualiza\xE7\xF5es."),t(),i(5,"h2"),e(6,"Conte\xFAdo"),t(),i(7,"ul")(8,"li")(9,"a",1),e(10,"Gr\xE1fico de \xE1rea"),t()(),i(11,"li")(12,"a",2),e(13,"Gr\xE1fico de barra"),t()(),i(14,"li")(15,"a",3),e(16,"Gr\xE1fico de coluna"),t()(),i(17,"li")(18,"a",4),e(19,"Gr\xE1fico de coluna com linha"),t()(),i(20,"li")(21,"a",5),e(22,"Gr\xE1fico de gauge semicircular"),t()(),i(23,"li")(24,"a",6),e(25,"Gr\xE1fico de linha"),t()(),i(26,"li")(27,"a",7),e(28,"Gr\xE1fico de pizza"),t()(),i(29,"li")(30,"a",8),e(31,"Gr\xE1fico de rosca"),t()(),i(32,"li")(33,"a",9),e(34,"Guia de cores"),t()()(),n(35,"br"),i(36,"p"),n(37,"a",10),t(),i(38,"h2"),e(39,"Gr\xE1fico de \xE1rea (Area Chart)"),t(),i(40,"p"),e(41,"O gr\xE1fico de \xE1rea combina o gr\xE1fico de linhas e o gr\xE1fico de barras para mostrar como os valores num\xE9ricos de um ou mais grupos mudam ao longo da progress\xE3o de uma segunda vari\xE1vel, normalmente a do tempo. Um gr\xE1fico de \xE1rea se distingue de um gr\xE1fico de linha pela adi\xE7\xE3o de sombreamento entre as linhas e uma linha de base, como em um gr\xE1fico de barras."),t(),i(42,"p"),e(43,"A vers\xE3o dispon\xEDvel no PO UI \xE9 o gr\xE1fico de \xE1rea de sobreposi\xE7\xE3o ou em ingl\xEAs, "),i(44,"em"),e(45,"overlapping area chart"),t(),e(46,"."),t(),i(47,"h4"),e(48,"Quando usar?"),t(),i(49,"ul")(50,"li"),e(51,"Para representar os totais acumulados usando n\xFAmeros ou porcentagens (gr\xE1ficos de \xE1rea empilhados, neste caso) ao longo do tempo;"),t(),i(52,"li"),e(53,"Mostrar tend\xEAncias ao longo do tempo entre os atributos relacionados."),t()(),n(54,"br"),i(55,"p"),n(56,"a",11),t(),i(57,"h2"),e(58,"Gr\xE1fico de barra (Bar Chart)"),t(),i(59,"p"),e(60,"O gr\xE1fico de barra \xE9 organizado de forma temporal ou por t\xF3picos ao longo do eixo vertical (y) e seus valores t\xEAm varia\xE7\xE3o ao longo do eixo vertical (x). \xC9 uma varia\xE7\xE3o direta da estrutura do gr\xE1fico de coluna."),t(),i(61,"h4"),e(62,"Quando usar?"),t(),i(63,"ul")(64,"li"),e(65,"Demonstrar as varia\xE7\xF5es de dados em um per\xEDodo de tempo;"),t(),i(66,"li"),e(67,"Ilustrar compara\xE7\xF5es entre t\xF3picos diretamente relacionados."),t()(),i(68,"h4"),e(69,"Boas pr\xE1ticas"),t(),i(70,"p"),e(71,"Prefira utilizar o gr\xE1fico de barra quando for necess\xE1rio muitos itens temporais ou de t\xF3picos."),t(),n(72,"br"),i(73,"p"),n(74,"a",12),t(),i(75,"h2"),e(76,"Gr\xE1fico de coluna (Column Chart)"),t(),i(77,"p"),e(78,"O gr\xE1fico de coluna \xE9 organizado de forma temporal ou por t\xF3picos ao longo do eixo horizontal (x) e seus valores t\xEAm varia\xE7\xE3o ao longo do eixo vertical (y)."),t(),i(79,"h4"),e(80,"Quando usar?"),t(),i(81,"ul")(82,"li"),e(83,"Demonstrar as varia\xE7\xF5es de dados em um per\xEDodo de tempo;"),t(),i(84,"li"),e(85,"Ilustrar compara\xE7\xF5es entre t\xF3picos diretamente relacionados."),t()(),i(86,"h4"),e(87,"Boas pr\xE1ticas"),t(),i(88,"p"),e(89,`Prefira utilizar o gr\xE1fico de barras caso seja necess\xE1rio muitos itens,
pois o gr\xE1fico de coluna cont\xE9m menos espa\xE7o para que sejam exibidos os r\xF3tulos no eixo horizontal.`),t(),n(90,"br"),i(91,"p"),n(92,"a",13),t(),i(93,"h2"),e(94,"Gr\xE1fico de pareto / coluna com linha (Column and Line Chart)"),t(),i(95,"p"),e(96,"O gr\xE1fico de pareto cont\xE9m colunas e um gr\xE1fico de linhas, onde os valores individuais s\xE3o representados em ordem decrescente por colunas e o total acumulado \xE9 representado pela linha."),t(),i(97,"h4"),e(98,"Quando usar?"),t(),i(99,"ul")(100,"li"),e(101,"Destacar o mais importante entre um conjunto de fatores, por exemplo:"),i(102,"ul")(103,"li"),e(104,"Sempre que uma equipe n\xE3o estiver certa sobre onde direcionar seus esfor\xE7os de melhoria deve usar uma an\xE1lise de pareto."),t()()()(),n(105,"br"),i(106,"p"),n(107,"a",14),t(),i(108,"h2"),e(109,"Gr\xE1fico de gauge semicircular (Semi Circle Gauge Chart)"),t(),i(110,"p"),e(111,"O gr\xE1fico de gauge semicircular \xE9 uma varia\xE7\xE3o direta do gauge tradicional."),t(),i(112,"h4"),e(113,"Quando usar?"),t(),i(114,"ul")(115,"li"),e(116,"Demonstrar c\xE1lculos de desempenho por um certo per\xEDodo (em andamento ou como hist\xF3rico), por exemplo: "),i(117,"ul")(118,"li"),e(119,"Desempenho de vendas de uma equipe em rela\xE7\xE3o a meta."),t()()()(),n(120,"br"),i(121,"p"),n(122,"a",15),t(),i(123,"h2"),e(124,"Gr\xE1fico de linha (Line Chart)"),t(),i(125,"p"),e(126,"O gr\xE1fico de linha pode exibir dados cont\xEDnuos ao longo de um per\xEDodo de tempo, definidos em rela\xE7\xE3o a uma escala comum. Os dados de categorias s\xE3o comumente distribu\xEDdos uniformemente ao longo do eixo horizontal e todos os dados de valores que tem varia\xE7\xE3o s\xE3o subdivididos igualmente ao longo do eixo vertical. "),t(),i(127,"h4"),e(128,"Quando usar?"),t(),i(129,"ul")(130,"li"),e(131,"Quando deseja exibir tend\xEAncias nos dados ao longo do tempo, por exemplo:"),i(132,"ul")(133,"li"),e(134,"Demonstrar a altera\xE7\xE3o no pre\xE7o das a\xE7\xF5es em um per\xEDodo de tempo;"),t(),i(135,"li"),e(136,"Quantidade de visitas em um site durante um m\xEAs."),t()()()(),i(137,"h4"),e(138,"Boas pr\xE1ticas"),t(),i(139,"ul")(140,"li"),e(141,"Ideal para demonstrar a frequ\xEAncia em que ocorrem os dados;"),t(),i(142,"li"),e(143,"N\xE3o \xE9 recomendado para caso de distribui\xE7\xE3o de dados, neste caso pode-se utilizar o gr\xE1fico de coluna."),t()(),n(144,"br"),i(145,"p"),n(146,"a",16),t(),i(147,"h2"),e(148,"Gr\xE1fico de pizza (Pie Chart)"),t(),i(149,"p"),e(150,"O gr\xE1fico de pizza ou torta \xE9 adequado para mostrar partes divididas de um todo, pois representa fatias que somadas comp\xF5em 100% da forma."),t(),i(151,"h4"),e(152,"Quando usar?"),t(),i(153,"ul")(154,"li"),e(155,"Para demonstrar propor\xE7\xF5es, por exemplo:"),i(156,"ul")(157,"li"),e(158,"Porcentagem de or\xE7amento gasto em diferentes departamentos;"),t(),i(159,"li"),e(160,"Respostas de pesquisa;"),t(),i(161,"li"),e(162,"Divis\xE3o de tempo em uma atividade."),t()()()(),i(163,"h4"),e(164,"Boas pr\xE1ticas"),t(),i(165,"ul")(166,"li"),e(167,"N\xE3o \xE9 recomendado para comparar dados;"),t(),i(168,"li"),e(169,"Evite gr\xE1ficos de pizza com mais de cinco partes, pois isso interfere diretamente no entendimento do gr\xE1fico ou visualiza\xE7\xE3o dos valores."),t()(),n(170,"br"),i(171,"p"),n(172,"a",17),t(),i(173,"h2"),e(174,"Gr\xE1fico de rosca (Donut Chart)"),t(),i(175,"p"),e(176,"O gr\xE1fico de rosca \xE9 adequado para mostrar partes de um todo, pois representa fatias que somadas comp\xF5em 100% de algo. \xC9 uma varia\xE7\xE3o visual do gr\xE1fico de pizza."),t(),i(177,"h4"),e(178,"Quando usar?"),t(),i(179,"ul")(180,"li"),e(181,"Para demonstrar propor\xE7\xF5es comparativas em porcentagem ou quantidade."),t()(),i(182,"h4"),e(183,"Boas pr\xE1ticas:"),t(),i(184,"p"),e(185,'O valor m\xEDnimo de visualiza\xE7\xE3o deve ser de 10% do total para demonstrar as informa\xE7\xF5es no gr\xE1fico, caso tenha mais de um item abaixo do valor de 10%, junte-os em uma sess\xE3o agrupada "Outros" e especifique o conte\xFAdo que o comp\xF5e na legenda.'),t(),n(186,"br"),i(187,"p"),n(188,"a",18),t(),i(189,"h2"),e(190,"Guia de cores"),t(),i(191,"h4"),e(192,"Boas pr\xE1ticas"),t(),i(193,"ul")(194,"li"),e(195,"Use uma \xFAnica cor para representar o mesmo tipo de dados. Por exemplo: para representar vendas m\xEAs a m\xEAs em um gr\xE1fico de barras, use uma \xFAnica cor. Outro exemplo: para comparar as vendas do ano passado com as do ano vigente em um gr\xE1fico agrupado, prefira utilizar uma cor diferente para cada ano;"),t(),i(196,"li"),e(197,"Certifique-se de que existe contraste suficiente entre as cores. Por exemplo: utilize cores com contraste para facilitar a assimila\xE7\xE3o do usu\xE1rio referente \xE0s informa\xE7\xF5es traduzidas no gr\xE1fico;"),t(),i(198,"li"),e(199,"Escolha cores adequadamente. Algumas cores se destacam mais do que outras, dando peso desnecess\xE1rio ou direcionamento errado aos dados."),t(),i(200,"li"),e(201,"Prefira utilizar uma \xFAnica cor com sombra vari\xE1vel ou um espectro entre duas cores an\xE1logas para mostrar intensidade;"),t(),i(202,"li"),e(203,"Destaque a informa\xE7\xE3o mais relevante com cores fortes e utilize a mesma com tons com menos contraste para complementar o gr\xE1fico."),t()(),i(204,"h4"),e(205,"Evite"),t(),i(206,"ul")(207,"li"),e(208,"N\xE3o use vermelho para n\xFAmeros positivos ou verde para n\xFAmeros negativos. Essas associa\xE7\xF5es de cores s\xE3o decisivas na interpreta\xE7\xE3o do usu\xE1rio;"),t(),i(209,"li"),e(210,"N\xE3o utilize combina\xE7\xF5es de cores de alto contraste, como vermelho e verde ou azul e amarelo (somente com direcionamento da marca);"),t(),i(211,"li"),e(212,"N\xE3o utilize cores com baixo contraste, como azul claro e cinza (somente com direcionamento da marca)."),t()(),i(213,"h4"),e(214,"Op\xE7\xF5es de combina\xE7\xE3o de cores"),t(),i(215,"p"),e(216,"Modelos de cores que podem combinar e facilitar a visualiza\xE7\xE3o dos gr\xE1ficos: "),t(),i(217,"ul")(218,"li")(219,"p"),e(220,"Cinza e azul:"),t(),i(221,"ul")(222,"li"),e(223,"Para informa\xE7\xF5es de atual e passado, mas aten\xE7\xE3o com o n\xEDvel do contraste para que sejam leg\xEDveis as diferen\xE7as entre os dados;"),t()()(),i(224,"li")(225,"p"),e(226,"Azul e laranja:"),t(),i(227,"ul")(228,"li"),e(229,"Azul para indica\xE7\xE3o de dados positivos e laranja para negativos;"),t()()(),i(230,"li")(231,"p"),e(232,"Verde e vermelho:"),t(),i(233,"ul")(234,"li"),e(235,"Verde sinaliza dados positivo e vermelho os negativos;"),t()()(),i(236,"li")(237,"p"),e(238,"Azul, cinza e verde:"),t(),i(239,"ul")(240,"li"),e(241,"Para uma composi\xE7\xE3o de tr\xEAs cores."),t()()()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var w=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:432,vars:0,consts:[["p-title","Migra\xE7\xE3o do PO UI para V2",1,"guides","app-portal"],["href","https://update.angular.io/"],["href","https://angular.io/cli/update"],["href","guides/migration-poui-v2#components"],["href","guides/migration-poui-v2#sync"],["id","components"],[1,"po-text-color-neutral-dark-40"],["href","http://po-ui.io/documentation/po-page-change-password"],["href","http://po-ui.io/documentation/po-button-group"],["href","http://po-ui.io/documentation/po-menu"],["href","http://po-ui.io/documentation/po-menu-panel"],["href","http://po-ui.io/documentation/po-navbar"],["href","http://po-ui.io/documentation/po-page-list"],["href","http://po-ui.io/documentation/po-page-default"],["href","http://po-ui.io/documentation/po-popup"],["href","http://po-ui.io/documentation/po-step"],["href","http://po-ui.io/documentation/po-table"],["href","http://po-ui.io/documentation/po-toolbar"],["id","sync"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"p"),e(2,"Este guia cont\xE9m informa\xE7\xF5es sobre a migra\xE7\xE3o do seu projeto para a vers\xE3o 2 do PO UI."),t(),i(3,"h2"),e(4,"Atualizando o projeto com Angular"),t(),i(5,"p"),e(6,`Antes de atualizar a vers\xE3o do PO UI, \xE9 importante que voc\xEA tenha atualizado o seu projeto para
o Angular 9, executando o comando abaixo:`),t(),i(7,"p")(8,"code"),e(9,"ng update @angular/cli@9 @angular/core@9"),t()(),i(10,"blockquote")(11,"p"),e(12,"Para realizar a migra\xE7\xE3o completa e avaliar se n\xE3o precisa fazer alguma altera\xE7\xE3o veja o "),i(13,"a",1)(14,"strong"),e(15,"Guia de Upgrade do Angular"),t()(),e(16,"."),t()(),i(17,"p"),e(18,`O nosso pacote anterior possu\xEDa depend\xEAncias que eram compat\xEDveis com a vers\xE3o 8 do Angular, portanto
pode ser preciso utilizar a `),i(19,"em"),e(20,"flag"),t(),i(21,"code"),e(22,"--force"),t(),e(23,` para que o Angular realize a migra\xE7\xE3o do seu projeto, ignorando a vers\xE3o das depend\xEAncias.
Para avaliar as `),i(24,"em"),e(25,"flags"),t(),e(26," dispon\xEDveis veja a "),i(27,"a",2)(28,"strong"),e(29,"documenta\xE7\xE3o do ng update"),t()(),e(30,"."),t(),i(31,"h2"),e(32,"Atualizando o PO UI"),t(),i(33,"p"),e(34,"Para facilitar a migra\xE7\xE3o do seu projeto para o PO UI v2, implementamos o "),i(35,"code"),e(36,"ng update"),t(),e(37," nos pacotes abaixo:"),t(),i(38,"ul")(39,"li")(40,"a",3)(41,"strong"),e(42,"@po-ui/ng-components"),t()()(),i(43,"li")(44,"a",4)(45,"strong"),e(46,"@po-ui/ng-sync"),t()()()(),i(47,"p"),e(48,"O "),i(49,"code"),e(50,"ng update"),t(),e(51," ajudar\xE1 nas altera\xE7\xF5es necess\xE1rias para seu projeto seguir atualizado, que s\xE3o elas:"),t(),i(52,"ul")(53,"li"),e(54,"Alterar maioria dos conte\xFAdos relacionados ao "),i(55,"strong"),e(56,"BREAKING CHANGES"),t(),e(57," e "),i(58,"strong"),e(59,"Deprecia\xE7\xF5es"),t(),e(60," no seu projeto;"),t(),i(61,"li"),e(62,"Atualizar as vers\xF5es dos pacotes "),i(63,"code"),e(64,"@po-ui"),t(),e(65,"."),t()(),i(66,"p"),e(67,"Mas \xE9 importante conhecer os "),i(68,"strong"),e(69,"BREAKING CHANGES"),t(),e(70," e "),i(71,"strong"),e(72,"Deprecia\xE7\xF5es"),t(),e(73," para realizar as altera\xE7\xF5es manualmente caso necess\xE1rio."),t(),i(74,"p"),n(75,"a",5),t(),i(76,"h3"),e(77,"ng update @po-ui/ng-components"),t(),i(78,"p"),e(79,"Para poder utilizar o comando e realizar a migra\xE7\xE3o, execute os comandos abaixo:"),t(),i(80,"p")(81,"code"),e(82,"npm i --save @po-ui/ng-components@2"),t()(),i(83,"p")(84,"code"),e(85,"ng update @po-ui/ng-components --from 1 --migrate-only"),t()(),i(86,"h4"),e(87,"Breaking Changes"),t(),i(88,"p"),e(89,"Nesta nova vers\xE3o o nome dos pacotes foram alterados, de acordo com a tabela abaixo:"),t(),i(90,"table")(91,"thead")(92,"tr")(93,"th",6),e(94,"Pacotes"),t(),i(95,"th",6),e(96,"Substitu\xEDdo por"),t()()(),i(97,"tbody")(98,"tr")(99,"td")(100,"code"),e(101,"@portinari/portinari-ui"),t()(),i(102,"td")(103,"code"),e(104,"@po-ui/ng-components"),t()()(),i(105,"tr")(106,"td")(107,"code"),e(108,"@portinari/portinari-templates"),t()(),i(109,"td")(110,"code"),e(111,"@po-ui/ng-templates"),t()()(),i(112,"tr")(113,"td")(114,"code"),e(115,"@portinari/portinari-code-editor"),t()(),i(116,"td")(117,"code"),e(118,"@po-ui/ng-code-editor"),t()()(),i(119,"tr")(120,"td")(121,"code"),e(122,"@portinari/tslint"),t()(),i(123,"td")(124,"code"),e(125,"@po-ui/ng-tslint"),t()()(),i(126,"tr")(127,"td")(128,"code"),e(129,"@portinari/style"),t()(),i(130,"td")(131,"code"),e(132,"@po-ui/style"),t()()()()(),i(133,"p"),e(134,"Tamb\xE9m foi realizado remo\xE7\xF5es das propriedades, onde passam a valer as novas defini\xE7\xF5es, veja a tabela abaixo:"),t(),i(135,"table")(136,"thead")(137,"tr")(138,"th",6),e(139,"Componentes"),t(),i(140,"th",6),e(141,"Anteriormente"),t(),i(142,"th",6),e(143,"Substitu\xEDdo por"),t()()(),i(144,"tbody")(145,"tr")(146,"td")(147,"code"),e(148,"PoFieldModule"),t()(),i(149,"td")(150,"code"),e(151,"[p-focus]"),t()(),i(152,"td")(153,"code"),e(154,"[p-auto-focus]"),t()()(),i(155,"tr")(156,"td")(157,"code"),e(158,"PoHttpResquestInterceptor"),t()(),i(159,"td")(160,"code"),e(161,"X-Portinari-Screen-Lock"),t()(),i(162,"td")(163,"code"),e(164,"X-PO-Screen-Lock"),t()()(),i(165,"tr")(166,"td")(167,"code"),e(168,"PoHttpResquestInterceptor"),t()(),i(169,"td")(170,"code"),e(171,"X-Portinari-No-Count-Pending-Requests"),t()(),i(172,"td")(173,"code"),e(174,"X-PO-No-Count-Pending-Requests"),t()()(),i(175,"tr")(176,"td")(177,"code"),e(178,"PoHttpInterceptor"),t()(),i(179,"td")(180,"code"),e(181,"X-Portinari-No-Message"),t()(),i(182,"td")(183,"code"),e(184,"X-PO-No-Message"),t()()(),i(185,"tr")(186,"td")(187,"code"),e(188,"PoPageEdit"),t()(),i(189,"td",6),e(190,"Possuir a a\xE7\xE3o "),i(191,"code"),e(192,"cancel() {}"),t(),e(193," no TS"),t(),i(194,"td")(195,"code"),e(196,"(p-cancel)"),t()()(),i(197,"tr")(198,"td")(199,"code"),e(200,"PoPageEdit"),t()(),i(201,"td",6),e(202,"Possuir a a\xE7\xE3o "),i(203,"code"),e(204,"save() {}"),t(),e(205," no TS"),t(),i(206,"td")(207,"code"),e(208,"(p-save)"),t()()(),i(209,"tr")(210,"td")(211,"code"),e(212,"PoPageEdit"),t()(),i(213,"td",6),e(214,"Possuir a a\xE7\xE3o "),i(215,"code"),e(216,"saveNew() {}"),t(),e(217," no TS"),t(),i(218,"td")(219,"code"),e(220,"(p-save-new)"),t()()(),i(221,"tr")(222,"td")(223,"code"),e(224,"PoPageDetail"),t()(),i(225,"td",6),e(226,"Possuir a a\xE7\xE3o "),i(227,"code"),e(228,"back() {}"),t(),e(229," no TS"),t(),i(230,"td")(231,"code"),e(232,"(p-back)"),t()()(),i(233,"tr")(234,"td")(235,"code"),e(236,"PoPageDetail"),t()(),i(237,"td",6),e(238,"Possuir a a\xE7\xE3o "),i(239,"code"),e(240,"edit() {}"),t(),e(241," no TS"),t(),i(242,"td")(243,"code"),e(244,"(p-edit)"),t()()(),i(245,"tr")(246,"td")(247,"code"),e(248,"PoPageDetail"),t()(),i(249,"td",6),e(250,"Possuir a a\xE7\xE3o "),i(251,"code"),e(252,"remove() {}"),t(),e(253," no TS"),t(),i(254,"td")(255,"code"),e(256,"(p-remove)"),t()()()()(),i(257,"h4"),e(258,"Deprecia\xE7\xE3o"),t(),i(259,"p"),e(260,"Nas vers\xF5es "),i(261,"code"),e(262,"1.x.x"),t(),e(263," era poss\xEDvel passar fun\xE7\xF5es para nossas propriedades sem informar o "),i(264,"code"),e(265,".bind(this)"),t(),e(266,`,
pois captur\xE1vamos o componente pai e consegu\xEDamos acessar o contexto corrente. Por\xE9m depreciamos este comportamento,
agora necessita passar a refer\xEAncia da fun\xE7\xE3o utilizando o `),i(267,"code"),e(268,".bind(this)"),t(),e(269," para que o mesmo execute a fun\xE7\xE3o no contexto invocado, tanto em fun\xE7\xF5es dentro de "),i(270,"em"),e(271,"arrays"),t(),e(272," quanto em fun\xE7\xF5es via "),i(273,"em"),e(274,"property bind"),t(),e(275,"."),t(),i(276,"p"),e(277,"Os componentes que sofrer\xE3o esta deprecia\xE7\xE3o, s\xE3o:"),t(),i(278,"ul")(279,"li")(280,"a",7)(281,"strong"),e(282,"PageChangePassword"),t()()(),i(283,"li")(284,"a",8)(285,"strong"),e(286,"ButtonGroup"),t()()(),i(287,"li")(288,"a",9)(289,"strong"),e(290,"Menu"),t()()(),i(291,"li")(292,"a",10)(293,"strong"),e(294,"MenuPanel"),t()()(),i(295,"li")(296,"a",11)(297,"strong"),e(298,"Navbar"),t()()(),i(299,"li")(300,"a",12)(301,"strong"),e(302,"PageList"),t()()(),i(303,"li")(304,"a",13)(305,"strong"),e(306,"PageDefault"),t()()(),i(307,"li")(308,"a",14)(309,"strong"),e(310,"Popup"),t()()(),i(311,"li")(312,"a",15)(313,"strong"),e(314,"Stepper"),t()()(),i(315,"li")(316,"a",16)(317,"strong"),e(318,"Table"),t()()(),i(319,"li")(320,"a",17)(321,"strong"),e(322,"Toolbar"),t()()()(),i(323,"p"),e(324,"Abaixo listamos dois exemplos comparativos com essas deprecia\xE7\xF5es em alguns componentes."),t(),i(325,"p"),e(326,"Exemplo via fun\xE7\xF5es dentro de arrays:"),t(),i(327,"ul")(328,"li"),e(329,"Antes:"),t()(),i(330,"pre")(331,"code"),e(332,`<po-page-default p-title="P\xE1gina" [p-actions]="actions">
   ...
</po-page-default>
`),t()(),i(333,"pre")(334,"code"),e(335,`export class ExampleFunction () {

  actions: Array<PoPageAction> = [
    { label: 'Adicionar', action: this.add }
  ]

  add() {
    ...
  }
}
`),t()(),i(336,"ul")(337,"li"),e(338,"Agora:"),t()(),i(339,"pre")(340,"code"),e(341,`<po-page-default p-title="P\xE1gina" [p-actions]="actions">
   ...
</po-page-default>
`),t()(),i(342,"pre")(343,"code"),e(344,`export class ExampleFunction () {

  actions: Array<PoPageAction> = [
    { label: 'Adicionar', action: this.add.bind(this) }
  ]

  add() {
    ...
  }
}
`),t()(),i(345,"p"),e(346,"Exemplo fun\xE7\xF5es via "),i(347,"em"),e(348,"property bind"),t()(),i(349,"ul")(350,"li"),e(351,"Antes:"),t()(),i(352,"pre")(353,"code"),e(354,`<po-stepper>
  <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep">
  </po-step>
</po-stepper>
`),t()(),i(355,"ul")(356,"li"),e(357,"Agora:"),t()(),i(358,"pre")(359,"code"),e(360,`<po-stepper>
  <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep.bind(this)">
  </po-step>
</po-stepper>
`),t()(),i(361,"p"),n(362,"a",18),t(),i(363,"h3"),e(364,"ng update @po-ui/ng-sync"),t(),i(365,"p"),e(366,"Para poder utilizar o comando e realizar a migra\xE7\xE3o, execute os comandos abaixo:"),t(),i(367,"p")(368,"code"),e(369,"npm i --save @po-ui/ng-sync@2"),t()(),i(370,"p")(371,"code"),e(372,"ng update @po-ui/ng-sync --from 1 --migrate-only"),t()(),i(373,"h4"),e(374,"Breaking Changes"),t(),i(375,"p"),e(376,"Nesta nova vers\xE3o o nome dos pacotes foram alterados, de acordo com a tabela abaixo:"),t(),i(377,"table")(378,"thead")(379,"tr")(380,"th",6),e(381,"Pacotes"),t(),i(382,"th",6),e(383,"Substitu\xEDdo por"),t()()(),i(384,"tbody")(385,"tr")(386,"td")(387,"code"),e(388,"@portinari/portinari-sync"),t()(),i(389,"td")(390,"code"),e(391,"@po-ui/ng-sync"),t()()(),i(392,"tr")(393,"td")(394,"code"),e(395,"@portinari/portinari-storage"),t()(),i(396,"td")(397,"code"),e(398,"@po-ui/ng-storage"),t()()(),i(399,"tr")(400,"td")(401,"code"),e(402,"@portinari/tslint"),t()(),i(403,"td")(404,"code"),e(405,"@po-ui/ng-tslint"),t()()()()(),i(406,"h4"),e(407,"Deprecia\xE7\xE3o"),t(),i(408,"p"),e(409,"Tamb\xE9m foi realizada uma deprecia\xE7\xE3o, onde ainda ser\xE1 aceito o modelo anterior, por\xE9m na vers\xE3o 3 ser\xE1 removido."),t(),i(410,"p"),e(411,"A deprecia\xE7\xE3o ocorreu no retorno do "),i(412,"code"),e(413,"Endpoint de sincroniza\xE7\xE3o"),t(),e(414,`, onde anteriomente deveria retornar a data da \xFAltima sincroniza\xE7\xE3o
na propriedade `),i(415,"code"),e(416,"portinari_sync_date"),t(),e(417,", que agora passa a ser "),i(418,"code"),e(419,"po_sync_date"),t(),e(420,", veja o antes e depois:"),t(),i(421,"pre")(422,"code"),e(423,`{
  "hasNext": false,
  "items": [],
  "portinari_sync_date": "2018-10-08T13:57:55.008Z"
}
`),t()(),i(424,"p"),e(425,"A propriedade "),i(426,"code"),e(427,"portinari_sync_date"),t(),e(428," foi depreciada e o nova propriedade \xE9:"),t(),i(429,"pre")(430,"code"),e(431,`{
  "hasNext": false,
  "items": [],
  "po_sync_date": "2018-10-08T13:57:55.008Z"
}
`),t()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var j=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:227,vars:0,consts:[["p-title","Migra\xE7\xE3o do PO UI",1,"guides","app-portal"],["href","guides/migration-poui-v2"],["href","https://github.com/po-ui/po-angular/wiki#vers%C3%B5es-angular-x-po-ui"],["href","https://update.angular.io/"],["href","https://angular.io/cli/update"],["href","guides/migration-poui#components"],["href","guides/migration-poui#sync"],["id","components"],[1,"language-json"],["href","https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md"],["id","sync"],["href","guides/deprecations"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"p"),e(2,"Este guia cont\xE9m informa\xE7\xF5es sobre a migra\xE7\xE3o do seu projeto para a vers\xE3o mais atualizada do PO UI."),t(),i(3,"blockquote")(4,"p"),e(5,"Caso voc\xEA n\xE3o estiver utilizando a vers\xE3o anterior da mais atualizada, \xE9 importante realizar a migra\xE7\xE3o para a mesma."),t()(),i(6,"blockquote")(7,"p"),e(8,"Se seu projeto estiver na v1, veja este Guia de Migra\xE7\xE3o do PO UI para "),i(9,"a",1)(10,"strong"),e(11,"V2"),t()(),e(12,"."),t()(),i(13,"h2"),e(14,"Atualizando o projeto com Angular"),t(),i(15,"p"),e(16,`Antes de atualizar a vers\xE3o do PO UI, \xE9 importante que voc\xEA tenha atualizado o seu projeto para
o Angular que o PO UI est\xE1 homologado, veja nossa
`),i(17,"a",2),e(18,"tabela de compatibilidade"),t(),e(19," em nosso Github Wiki."),t(),i(20,"blockquote")(21,"p"),e(22,`Caso o seu projeto esteja na vers\xE3o Angular@16:
Realize a instala\xE7\xE3o do pacote Schematics do Angular para o nosso script de atualiza\xE7\xE3o funcionar corretamente: `),t()(),i(23,"pre")(24,"code"),e(25,`npm install @angular-devkit/schematics --save-dev
`),t()(),i(26,"p"),e(27,"Para atualizar o Angular, execute o comando abaixo:"),t(),i(28,"pre")(29,"code"),e(30,`ng update @angular/cli@<version> @angular/core@<version> --force
`),t()(),i(31,"p"),e(32,"Por exemplo:"),t(),i(33,"pre")(34,"code"),e(35,`ng update @angular/cli@19 @angular/core@19 --force
`),t()(),i(36,"blockquote")(37,"p"),e(38,"Para realizar a migra\xE7\xE3o completa e avaliar se n\xE3o precisa fazer alguma altera\xE7\xE3o veja o "),i(39,"a",3)(40,"strong"),e(41,"Guia de Upgrade do Angular"),t()(),e(42,"."),t()(),i(43,"p"),e(44,`O nosso pacote possu\xEDa depend\xEAncias que eram compat\xEDveis com a vers\xE3o anterior do Angular, portanto
devemos utilizar a `),i(45,"em"),e(46,"flag"),t(),i(47,"code"),e(48,"--force"),t(),e(49,` para que o Angular realize a migra\xE7\xE3o do seu projeto, ignorando a vers\xE3o das depend\xEAncias.
Para avaliar as `),i(50,"em"),e(51,"flags"),t(),e(52," dispon\xEDveis veja a "),i(53,"a",4)(54,"strong"),e(55,"documenta\xE7\xE3o do ng update"),t()(),e(56,"."),t(),i(57,"h2"),e(58,"Atualizando o PO UI"),t(),i(59,"p"),e(60,"Para facilitar a migra\xE7\xE3o do seu projeto para o PO UI mais recente, implementamos o "),i(61,"code"),e(62,"ng update"),t(),e(63," nos pacotes abaixo:"),t(),i(64,"ul")(65,"li")(66,"a",5)(67,"strong"),e(68,"@po-ui/ng-components"),t()()(),i(69,"li")(70,"a",6)(71,"strong"),e(72,"@po-ui/ng-sync"),t()()()(),i(73,"p"),n(74,"a",7),t(),i(75,"h3"),e(76,"ng update @po-ui/ng-components"),t(),i(77,"p"),e(78,"Para realizar a migra\xE7\xE3o, devemos executar o comando "),i(79,"code"),e(80,"ng update"),t(),e(81,`, conforme exemplo abaixo. Mas antes verifique se comitou os arquivos alterados pela migra\xE7\xE3o do Angular, se preferir voc\xEA pode utilizar a
`),i(82,"em"),e(83,"flag"),t(),i(84,"code"),e(85,"--allow-dirty"),t(),e(86," em conjunto."),t(),i(87,"pre")(88,"code"),e(89,`ng update @po-ui/ng-components@<version> --allow-dirty --force
`),t()(),i(90,"p"),e(91,"Por exemplo:"),t(),i(92,"pre")(93,"code"),e(94,`ng update @po-ui/ng-components --allow-dirty --force
`),t()(),i(95,"blockquote")(96,"p"),e(97,"Caso ocorra um erro ao concluir o comando acima pode ser necess\xE1rio fazer uma instala\xE7\xE3o limpa no projeto apagando a pasta "),i(98,"code"),e(99,"node_modules"),t(),e(100," e o arquivo "),i(101,"code"),e(102,"package-lock.json"),t(),e(103," e executando o comando "),i(104,"code"),e(105,"npm i --legacy-peer-deps"),t(),e(106," antes de realizar o "),i(107,"code"),e(108,"ng update"),t(),e(109,"."),t()(),i(110,"blockquote")(111,"p"),e(112,"Caso sua aplica\xE7\xE3o seja configurada com m\xF3dulos, pode ser necess\xE1ria a inclus\xE3o da seguinte "),i(113,"code"),e(114,"devDependencies"),t(),e(115,":"),t()(),i(116,"pre")(117,"code",8),e(118,`  "devDependencies": {
    ...,
    "@angular-devkit/schematics": "~19.0.5",
    ...
  }
`),t()(),i(119,"p"),e(120,"O "),i(121,"code"),e(122,"ng update"),t(),e(123," ajudar\xE1 nas altera\xE7\xF5es necess\xE1rias para seu projeto seguir atualizado, que s\xE3o elas:"),t(),i(124,"ul")(125,"li"),e(126,"Caso houver "),i(127,"em"),e(128,"breaking changes"),t(),e(129,", ser\xE3o realizados as altera\xE7\xF5es poss\xEDveis, mas fique atento ao "),i(130,"a",9),e(131,"CHANGELOG"),t(),e(132,";"),t(),i(133,"li"),e(134,"Atualizar as vers\xF5es dos pacotes:"),i(135,"ul")(136,"li")(137,"code"),e(138,"@po-ui/ng-components"),t(),e(139,";"),t(),i(140,"li")(141,"code"),e(142,"@po-ui/ng-templates"),t(),e(143,";"),t(),i(144,"li")(145,"code"),e(146,"@po-ui/ng-code-editor"),t(),e(147,";"),t(),i(148,"li")(149,"code"),e(150,"@po-ui/ng-storage"),t(),e(151,";"),t(),i(152,"li")(153,"code"),e(154,"@po-ui/ng-sync"),t(),e(155,";"),t(),i(156,"li")(157,"code"),e(158,"@po-ui/style"),t(),e(159,";"),t()()()(),i(160,"p"),e(161,"Al\xE9m disso, ser\xE1 realizada uma pergunta para que o usu\xE1rio decida se quer utilizar a nova biblioteca de \xEDcones. Caso a escolha seja positiva, o processo de update ir\xE1 substituir classes de \xEDcones do po-ui pelas novas refer\xEAncias."),t(),i(162,"p"),n(163,"a",10),t(),i(164,"h3"),e(165,"ng update @po-ui/ng-sync"),t(),i(166,"blockquote")(167,"p"),e(168,"Caso voc\xEA tamb\xE9m utilize "),i(169,"code"),e(170,"@po-ui/ng-components"),t(),e(171," n\xE3o h\xE1 necessidade de executar o "),i(172,"em"),e(173,"ng update"),t(),e(174," do "),i(175,"code"),e(176,"@po-ui/ng-sync"),t(),e(177,"."),t()(),i(178,"p"),e(179,"Para realizar a migra\xE7\xE3o, devemos executar o comando "),i(180,"code"),e(181,"ng update"),t(),e(182,`, conforme exemplo abaixo. Mas antes verifique se comitou os arquivos alterados pela migra\xE7\xE3o do Angular, se preferir voc\xEA pode utilizar a
`),i(183,"em"),e(184,"flag"),t(),i(185,"code"),e(186,"--allow-dirty"),t(),e(187," em conjunto."),t(),i(188,"pre")(189,"code"),e(190,`ng update @po-ui/ng-sync@<version> --allow-dirty --force
`),t()(),i(191,"p"),e(192,"Por exemplo:"),t(),i(193,"pre")(194,"code"),e(195,`ng update @po-ui/ng-sync --allow-dirty --force
`),t()(),i(196,"p"),e(197,"O "),i(198,"code"),e(199,"ng update"),t(),e(200," ajudar\xE1 nas altera\xE7\xF5es necess\xE1rias para seu projeto, que ser\xE1 atualizar as vers\xF5es dos pacotes:"),t(),i(201,"ul")(202,"li")(203,"code"),e(204,"@po-ui/ng-sync"),t(),e(205,";"),t(),i(206,"li")(207,"code"),e(208,"@po-ui/ng-storage"),t(),e(209,";"),t()(),i(210,"h2"),e(211,"Deprecia\xE7\xF5es e Breaking Changes"),t(),i(212,"p"),e(213,"Possuimos uma documenta\xE7\xE3o que lista as deprecia\xE7\xF5es correntes e os "),i(214,"em"),e(215,"breaking changes"),t(),e(216,` j\xE1 realizados na biblioteca,
para consult\xE1-lo acesse o guia `),i(217,"a",11),e(218,"Deprecia\xE7\xF5es"),t()(),i(219,"p"),e(220,"Verifique tamb\xE9m nosso "),i(221,"a",9),e(222,"CHANGELOG"),t(),e(223,` para obter
mais detalhes dos `),i(224,"em"),e(225,"breaking changes"),t(),e(226," realizados."),t()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var G=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:63,vars:0,consts:[["p-title","Migra\xE7\xE3o do THF para o PO UI v1.x",1,"guides","app-portal"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"p"),e(2,"Para facilitar a migra\xE7\xE3o do seu projeto com o THF para o PO UI, disponibilizamos um pacote para fazer esta convers\xE3o. "),t(),i(3,"p"),e(4,"Este pacote, ir\xE1 passar pelos arquivos do seu projeto alterando as palavras-chaves do THF para a nova nomenclatura do PO UI."),t(),i(5,"h3"),e(6,"Antes de iniciar a migra\xE7\xE3o"),t(),i(7,"p"),e(8,"Antes de iniciar a migra\xE7\xE3o certifique-se que:"),t(),i(9,"ul")(10,"li"),e(11,"Este pacote de migra\xE7\xE3o \xE9 apenas para a migra\xE7\xE3o do "),i(12,"strong"),e(13,"THF vers\xE3o 4 ou superior para o PO UI vers\xE3o 1.x"),t(),e(14," que \xE9 compat\xEDvel com a vers\xE3o 8 do Angular. "),t(),i(15,"li"),e(16,"As depend\xEAncias do THF encontram-se na vers\xE3o 4 ou superior."),t(),i(17,"li"),e(18,"Todos os arquivos est\xE3o salvos."),t(),i(19,"li"),e(20,"Se as pastas e os arquivos possuem permiss\xE3o para terceiros alter\xE1-los."),t()(),i(21,"h3"),e(22,"Instala\xE7\xE3o do pacote de migra\xE7\xE3o"),t(),i(23,"p"),e(24,"Instale globalmente o pacote "),i(25,"code"),e(26,"po-migration"),t(),e(27," utilizando o npm, conforme o comando abaixo:"),t(),i(28,"pre")(29,"code"),e(30,`npm install -g po-migration
`),t()(),i(31,"h3"),e(32,"Migrando o seu projeto"),t(),i(33,"p"),e(34,"Ap\xF3s a instala\xE7\xE3o, navegue at\xE9 a pasta do projeto que voc\xEA deseja migrar para o PO UI."),t(),i(35,"p"),e(36,"Para iniciar a migra\xE7\xE3o, execute o comando:"),t(),i(37,"pre")(38,"code"),e(39,`po-migration start
`),t()(),i(40,"p"),e(41,"Este comando ir\xE1 utilizar um dicion\xE1rio de palavras-chaves do pr\xF3prio THF para realizar a migra\xE7\xE3o, ou seja, se tiver outra palavra que voc\xEA criou e que n\xE3o faz parte do THF, ele n\xE3o ir\xE1 alterar."),t(),i(42,"p"),e(43,"No entanto, caso voc\xEA queira alterar at\xE9 mesmo palavras criadas por voc\xEA, utilize o seguinte comando:"),t(),i(44,"pre")(45,"code"),e(46,`po-migration start --all
`),t()(),i(47,"p"),e(48,'Este comando atualiza todas as palavras do projeto que cont\xE9m "thf, t-, ou totvs".'),t(),i(49,"blockquote")(50,"p"),e(51,"Ao utilizar a op\xE7\xE3o "),i(52,"code"),e(53,"--all"),t(),e(54,` certifique-se que n\xE3o foi alterado nenhuma palavra que fa\xE7a parte
do caminho de algum arquivo, que voc\xEA possa ter colocado com o nome contendo algumas das palavras "thf, t-, ou totvs".`),t()(),i(55,"p"),e(56,"Veja a documenta\xE7\xE3o completa do pacote "),i(57,"code"),e(58,"po-migration"),t(),e(59," executando o comando:"),t(),i(60,"pre")(61,"code"),e(62,`po-migration --help
`),t()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var U=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:81,vars:0,consts:[["p-title","Press Kit",1,"guides","app-portal"],["href","https://creativecommons.org/licenses/by/4.0/"],[1,"docs-presskit-row","po-mb-5"],["src","./assets/po-logos/po_color_bg.svg","width","128","height","128","alt","Logo com segundo plano degrad\xEA"],[1,"po-ml-md-2"],["href","./assets/po-logos/po_color_bg.png","download",""],["href","./assets/po-logos/po_color_bg.svg","download",""],["src","./assets/po-logos/po_color.svg","width","128","height","128","alt","Logo degrad\xEA"],["href","./assets/po-logos/po_color.png","download",""],["href","./assets/po-logos/po_color.svg","download",""],["src","./assets/po-logos/po_black.svg","width","128","height","128","alt","Logo preto"],["href","./assets/po-logos/po_black.png","download",""],["href","./assets/po-logos/po_black.svg","download",""],["src","./assets/po-logos/po_inverse.svg","width","128","height","128","alt","Logo branco com segundo plano preto"],["href","./assets/po-logos/po_inverse.png","download",""],["href","./assets/po-logos/po_inverse.svg","download",""],["src","./assets/po-logos/po_white_mock_bg.png","width","128","height","128","alt","Logo branco com segundo plano transparente"],["href","./assets/po-logos/po_white.png","download",""],["href","./assets/po-logos/po_white.svg","download",""]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"h2"),e(2,"Logomarca"),t(),i(3,"p"),e(4,"A licen\xE7a para uso das varia\xE7\xF5es de logomarca do "),i(5,"strong"),e(6,"PO UI"),t(),e(7," \xE9 seguida de acordo com a "),i(8,"a",1),e(9,"CC BY 4.0"),t(),e(10,". Ou seja, pode-se utiliz\xE1-las como convier e para qualquer uso, como por exemplo na impress\xE3o em camisetas, divulga\xE7\xE3o em websites, etc."),t(),i(11,"div",2)(12,"div"),n(13,"img",3),t(),i(14,"div",4)(15,"h3"),e(16,"Vers\xE3o com segundo plano degrad\xEA"),t(),i(17,"p"),e(18,"Logo com segundo plano degrad\xEA (png) - "),i(19,"a",5),e(20,"Download"),t()(),i(21,"p"),e(22,"Logo com segundo plano degrad\xEA (svg) - "),i(23,"a",6),e(24,"Download"),t()()()(),i(25,"div",2)(26,"div"),n(27,"img",7),t(),i(28,"div",4)(29,"h3"),e(30,"Vers\xE3o do logo degrad\xEA"),t(),i(31,"p"),e(32,"Logo degrad\xEA (png) - "),i(33,"a",8),e(34,"Download"),t()(),i(35,"p"),e(36,"Logo degrad\xEA (svg) - "),i(37,"a",9),e(38,"Download"),t()()()(),i(39,"div",2)(40,"div"),n(41,"img",10),t(),i(42,"div",4)(43,"h3"),e(44,"Vers\xE3o do logo em preto"),t(),i(45,"p"),e(46,"Logo preto (png) - "),i(47,"a",11),e(48,"Download"),t()(),i(49,"p"),e(50,"Logo preto (svg) - "),i(51,"a",12),e(52,"Download"),t()()()(),i(53,"div",2)(54,"div"),n(55,"img",13),t(),i(56,"div",4)(57,"h3"),e(58,"Vers\xE3o branco com segundo plano preto"),t(),i(59,"p"),e(60,"Logo branco (png) - "),i(61,"a",14),e(62,"Download"),t()(),i(63,"p"),e(64,"Logo branco (svg) - "),i(65,"a",15),e(66,"Download"),t()()()(),i(67,"div",2)(68,"div"),n(69,"img",16),t(),i(70,"div",4)(71,"h3"),e(72,"Vers\xE3o branco com segundo plano transparente"),t(),i(73,"p"),e(74,"Logo branco (png) - "),i(75,"a",17),e(76,"Download"),t()(),i(77,"p"),e(78,"Logo branco (svg) - "),i(79,"a",18),e(80,"Download"),t()()()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var N=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:222,vars:0,consts:[["p-title","Releases",1,"guides","app-portal"],["href","https://semver.org/"],[1,"po-row"],[1,"po-xl-6","po-lg-8","po-md-10","po-sm-12"],[1,"po-table","po-text-color-neutral-dark-40"],[1,"po-table-header"],[1,"po-table-header-ellipsis"],[1,"po-table-row"],[1,"po-table-column"],["href","guides/migration-poui"],["href","guides/migration-poui-v2"],["href","guides/migration-thf-to-po-ui"],["href","https://github.com/po-ui/po-angular/issues/1184"],["href","https://www.npmjs.com/package/@po-ui/ng-components?activeTab=versions"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"p"),e(2,"Reconhecemos que voc\xEA precisa da estabilidade da estrutura PO UI. A estabilidade garante que os componentes, samples e tutoriais n\xE3o se tornem obsoletos inesperadamente. A estabilidade \xE9 essencial para um ecossistema com angular e PO UI prosperar."),t(),i(3,"p"),e(4,"Tamb\xE9m compartilhamos com voc\xEA o desejo de que o PO UI continue evoluindo. N\xF3s nos esfor\xE7amos para garantir que a biblioteca de componentes sobre a qual est\xE1 construindo sua aplica\xE7\xE3o continue melhorando e permitindo que voc\xEA se mantenha atualizado com o resto do ecossistema do Angular e com as necessidades do usu\xE1rio."),t(),i(5,"p"),e(6,"Este documento cont\xE9m as pr\xE1ticas que seguimos para fornecer a voc\xEA uma biblioteca de componentes de ponta, equilibrada e com estabilidade. N\xF3s nos esfor\xE7amos para garantir que as mudan\xE7as futuras sejam sempre introduzidas de forma previs\xEDvel. Queremos que todos que dependam do PO UI saibam quando e como os novos recursos ser\xE3o adicionados e estejam bem preparados quando os obsoletos s\xE3o removidos."),t(),i(7,"h2"),e(8,"Controle de Vers\xE3o PO UI"),t(),i(9,"p"),e(10,"Os n\xFAmeros de vers\xE3o do PO UI indicam o n\xEDvel de mudan\xE7as introduzidas pelo lan\xE7amento. Este uso de "),i(11,"a",1),e(12,"versionamento sem\xE2ntico"),t(),e(13," ajuda a entender o impacto potencial de atualizar para uma nova vers\xE3o."),t(),i(14,"p"),e(15,"N\xFAmeros de vers\xE3o PO UI tem tr\xEAs partes: "),i(16,"code"),e(17,"major.minor.patch"),t(),e(18,". Por exemplo, a vers\xE3o 4.16.1 indica a vers\xE3o principal 4, a vers\xE3o secund\xE1ria 2 e o n\xEDvel de patch 1."),t(),i(19,"p"),e(20,"O n\xFAmero da vers\xE3o principal \xE9 incrementado com base na vers\xE3o do Angular que ele atende."),t(),i(21,"ul")(22,"li")(23,"strong"),e(24,"As vers\xF5es principais"),t(),e(25," cont\xEAm os novos recursos disponibilizados pelo Angular, mas espera-se uma assist\xEAncia m\xEDnima do desenvolvedor durante a atualiza\xE7\xE3o. Ao atualizar para uma nova vers\xE3o principal, pode ser necess\xE1rio executar scripts de atualiza\xE7\xE3o, refatorar c\xF3digos, executar testes adicionais e aprender novas APIs."),t(),i(26,"li")(27,"strong"),e(28,"Vers\xF5es secund\xE1rias"),t(),e(29," cont\xE9m novos recursos menores. Vers\xF5es menores s\xE3o totalmente compat\xEDveis com vers\xF5es anteriores; nenhuma assist\xEAncia do desenvolvedor \xE9 esperada durante a atualiza\xE7\xE3o, mas voc\xEA pode opcionalmente modificar seus aplicativos e bibliotecas para come\xE7ar a usar novas APIs, recursos e capacidades que foram adicionados na vers\xE3o. S\xE3o incrementadas regularmente ao final de nossas sprints."),t(),i(30,"li")(31,"strong"),e(32,"Lan\xE7amentos de patch"),t(),e(33," s\xE3o lan\xE7amentos de corre\xE7\xE3o de bugs. Nenhuma ajuda do desenvolvedor \xE9 esperada durante a atualiza\xE7\xE3o."),t()(),i(34,"h2"),e(35,"Caminhos de atualiza\xE7\xE3o suportados"),t(),i(36,"p"),e(37,"Em alinhamento com o esquema de controle de vers\xE3o descrito acima, nos comprometemos a oferecer suporte aos seguintes caminhos de atualiza\xE7\xE3o:"),t(),i(38,"ul")(39,"li"),e(40,"Se voc\xEA estiver atualizando na "),i(41,"strong"),e(42,"vers\xE3o principal"),t(),e(43,", poder\xE1 pular todas as vers\xF5es intermedi\xE1rias e atualizar diretamente para a vers\xE3o de destino. Por exemplo, voc\xEA pode atualizar diretamente da vers\xE3o 4.0.0 para a 4.17.0."),t(),i(44,"li"),e(45,"Se voc\xEA estiver atualizando de "),i(46,"strong"),e(47,"uma vers\xE3o principal para outra"),t(),e(48,", recomendamos que "),i(49,"strong"),e(50,"n\xE3o ignore as vers\xF5es principais"),t(),e(51,". Siga as instru\xE7\xF5es para atualizar de forma incremental para a pr\xF3xima vers\xE3o principal, testando e validando em cada erapa. Por exemplo, se voc\xEA deseja atualizar da vers\xE3o 2.xx para a vers\xE3o 4.xx, recomendamos que voc\xEA atualize para a vers\xE3o 3.xx mais recente primeiro. Depois de atualizar com sucesso para a vers\xE3o 3.xx, voc\xEA pode atualizar para a 4.xx."),t()(),i(52,"p"),e(53,"Consulte abaixo nossos guias de migra\xE7\xE3o de vers\xE3o para obter mais informa\xE7\xF5es sobre como atualizar o PO UI para a vers\xE3o mais recente nos seus projetos Angular."),t(),i(54,"h3"),e(55,"Comparativo de vers\xF5es Angular x PO UI"),t(),i(56,"div",2)(57,"div",3)(58,"table",4)(59,"thead")(60,"tr",5)(61,"th",6),e(62,"Angular"),t(),i(63,"th",6),e(64,"PO UI"),t(),i(65,"th",6),e(66,"Migra\xE7\xE3o"),t()()(),i(67,"tbody")(68,"tr",7)(69,"td",8),e(70,"19.0.0"),t(),i(71,"td",8),e(72,"19.0.0"),t(),i(73,"td",8)(74,"a",9),e(75,"Migra\xE7\xE3o do PO UI"),t()()(),i(76,"tr",7)(77,"td",8),e(78,"18.0.0"),t(),i(79,"td",8),e(80,"18.0.0"),t(),i(81,"td",8)(82,"a",9),e(83,"Migra\xE7\xE3o do PO UI"),t()()(),i(84,"tr",7)(85,"td",8),e(86,"17.0.0"),t(),i(87,"td",8),e(88,"17.0.0"),t(),i(89,"td",8)(90,"a",9),e(91,"Migra\xE7\xE3o do PO UI"),t()()(),i(92,"tr",7)(93,"td",8),e(94,"16.0.0"),t(),i(95,"td",8),e(96,"16.0.0"),t(),i(97,"td",8)(98,"a",9),e(99,"Migra\xE7\xE3o do PO UI"),t()()(),i(100,"tr",7)(101,"td",8),e(102,"15.0.0"),t(),i(103,"td",8),e(104,"15.0.0"),t(),i(105,"td",8)(106,"a",9),e(107,"Migra\xE7\xE3o do PO UI"),t()()(),i(108,"tr",7)(109,"td",8),e(110,"14.0.0"),t(),i(111,"td",8),e(112,"14.0.0"),t(),i(113,"td",8)(114,"a",9),e(115,"Migra\xE7\xE3o do PO UI"),t()()(),i(116,"tr",7)(117,"td",8),e(118,"13.0.0"),t(),i(119,"td",8),e(120,"6.0.0"),t(),i(121,"td",8)(122,"a",9),e(123,"Migra\xE7\xE3o do PO UI"),t()()(),i(124,"tr",7)(125,"td",8),e(126,"12.0.0"),t(),i(127,"td",8),e(128,"5.0.0"),t(),i(129,"td",8)(130,"a",9),e(131,"Migra\xE7\xE3o do PO UI"),t()()(),i(132,"tr",7)(133,"td",8),e(134,"11.0.0"),t(),i(135,"td",8),e(136,"4.0.0"),t(),i(137,"td",8)(138,"a",9),e(139,"Migra\xE7\xE3o do PO UI"),t()()(),i(140,"tr",7)(141,"td",8),e(142,"10.0.0"),t(),i(143,"td",8),e(144,"3.0.0"),t(),i(145,"td",8)(146,"a",9),e(147,"Migra\xE7\xE3o do PO UI"),t()()(),i(148,"tr",7)(149,"td",8),e(150,"9.0.0"),t(),i(151,"td",8),e(152,"2.0.0"),t(),i(153,"td",8)(154,"a",10),e(155,"Migra\xE7\xE3o do PO UI para V2"),t()()(),i(156,"tr",7)(157,"td",8),e(158,"8.0.0"),t(),i(159,"td",8),e(160,"1.0.0"),t(),i(161,"td",8)(162,"a",11),e(163,"Migra\xE7\xE3o THF para PO UI v1.x"),t()()()()()()(),i(164,"blockquote")(165,"p"),e(166,"Conforme agenda de publica\xE7\xE3o de novas vers\xF5es est\xE1veis do Angular, n\xF3s atualizamos nossas vers\xF5es como de costume e aproveitaremos para fazer uma mudan\xE7a na nomenclatura das nossas vers\xF5es. A vers\xE3o "),i(167,"code"),e(168,"v7.x.x"),t(),e(169," foi lan\xE7ada como "),i(170,"strong")(171,"code"),e(172,"v14.x.x"),t()(),e(173,", assim "),i(174,"code"),e(175,"a vers\xE3o 14.x.x do PO UI tem compatibilidade com a v14 do Angular"),t(),e(176," e assim por diante. "),i(177,"a",12),e(178,"Mais informa\xE7\xF5es"),t(),e(179,"."),t()(),i(180,"h2"),e(181,"Vers\xF5es pr\xE9vias"),t(),i(182,"p"),e(183,"Permitimos que voc\xEA visualize o que est\xE1 por vir, fornecendo pr\xE9-lan\xE7amentos "),i(184,"code"),e(185,"next"),t(),e(186," ou Release Candidates ("),i(187,"code"),e(188,"rc"),t(),e(189,") para cada vers\xE3o principal:"),t(),i(190,"ul")(191,"li")(192,"strong"),e(193,"Next"),t(),e(194,": a vers\xE3o que est\xE1 em desenvolvimento, com testes ativos e com breaking changes a resolver. O pr\xF3ximo lan\xE7amento \xE9 indicado por uma tag de lan\xE7amento anexada ao identificador "),i(195,"code"),e(196,"-next"),t(),e(197,", como "),i(198,"code"),e(199,"17.0.0-next"),t(),e(200,"."),t(),i(201,"li")(202,"strong"),e(203,"Release Candidate"),t(),e(204,": um lan\xE7amento com recurso conclu\xEDdo, teste finalizado e sem breaking changes a resolver. Um candidato a lan\xE7amento \xE9 indicado por uma tag de lan\xE7amento anexada ao identificador "),i(205,"code"),e(206,"-rc"),t(),e(207,", como vers\xE3o "),i(208,"code"),e(209,"17.0.0-rc"),t(),e(210,"."),t()(),i(211,"p"),e(212,"A vers\xE3o mais recente "),i(213,"code"),e(214,"next"),t(),e(215," ou de pr\xE9-lan\xE7amento "),i(216,"code"),e(217,"rc"),t(),e(218," fica dispon\xEDvel no "),i(219,"a",13),e(220,"npm do projeto"),t(),e(221,"."),t()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var R=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:204,vars:0,consts:[["p-title","Schematics",1,"guides","app-portal"],["href","https://angular.io/cli"],[1,"po-row"],[1,"po-sm-12"],[1,"po-table","po-text-color-neutral-dark-40"],[1,"po-table-header"],[1,"po-table-header-ellipsis"],[1,"po-table-row"],[1,"po-table-column"],["href","/documentation/po-page-list"],["href","/documentation/po-page-default"],["href","/documentation/po-page-edit"],["href","/documentation/po-page-detail"],["href","/documentation/po-page-dynamic-table"],["href","/documentation/po-page-dynamic-detail"],["href","/documentation/po-page-dynamic-edit"],["href","/documentation/po-page-dynamic-search"],["href","/documentation/po-page-job-scheduler"],["href","/documentation/po-page-login"],["href","/documentation/po-page-change-password"],["href","/documentation/po-page-blocked-user"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"p"),e(2,"O PO cont\xE9m "),i(3,"em"),e(4,"schematics"),t(),e(5," do "),i(6,"a",1),e(7,"Angular CLI"),t(),e(8," em seu pacote, para facilitar o desenvolvimento de aplica\xE7\xF5es PO."),t(),i(9,"h2"),e(10,"Instalando"),t(),i(11,"p"),e(12,"Um vez que for instalado o pacotes, teremos dispon\xEDvel os "),i(13,"em"),e(14,"schematics"),t(),e(15," atrav\xE9s do Angular CLI."),t(),i(16,"h3"),e(17,"PO UI Components"),t(),i(18,"p"),e(19,`Caso esteja iniciando uma aplica\xE7\xE3o com PO, indica-se utilizar o comando abaixo,
no qual ser\xE1 instalado o pacote `),i(20,"code"),e(21,"@po-ui/ng-components"),t(),e(22," e realizadas algumas configura\xE7\xF5es, que ser\xE3o descritas em seguida:"),t(),i(23,"pre")(24,"code"),e(25,`ng add @po-ui/ng-components
`),t()(),i(26,"ul")(27,"li"),e(28,"Substitui o "),i(29,"code"),e(30,"AppComponent"),t(),e(31," com uma estrutura incial de um projeto, utilizando os components "),i(32,"code"),e(33,"po-page-default"),t(),e(34,", "),i(35,"code"),e(36,"po-toolbar"),t(),e(37,", e "),i(38,"code"),e(39,"po-menu"),t(),e(40,";"),t(),i(41,"li"),e(42,"Importa o m\xF3dulo do PO;"),t(),i(43,"li"),e(44,"Configura o tema do PO no projeto;"),t()(),i(45,"h3"),e(46,"PO UI Templates"),t(),i(47,"p"),e(48,`Para a utiliza\xE7\xE3o de componentes de template o processo para inclus\xE3o \xE9 semelhante.
Primeiramente, deve-se utilizar o comando abaixo, no qual ser\xE1 instalado o pacote `),i(49,"code"),e(50,"@po-ui/ng-templates"),t(),e(51,":"),t(),i(52,"pre")(53,"code"),e(54,`ng add @po-ui/ng-templates
`),t()(),i(55,"ul")(56,"li"),e(57,"Importa o m\xF3dulo do PO;"),t(),i(58,"li"),e(59,"Configura o tema do PO no projeto caso n\xE3o possua;"),t()(),i(60,"h2"),e(61,"Generate Schematics"),t(),i(62,"p"),e(63,"O "),i(64,"code"),e(65,"PO"),t(),e(66," vem com v\xE1rios "),i(67,"code"),e(68,"schematics"),t(),e(69," que podem ser usados \u200B\u200Bpara gerar componentes facilmente."),t(),i(70,"p"),e(71,"Para gerar o componente, execute o comando abaixo, onde "),i(72,"code"),e(73,"package"),t(),e(74," \xE9 o pacote e "),i(75,"code"),e(76,"schematic-name"),t(),e(77," o componente que deseja:"),t(),i(78,"pre")(79,"code"),e(80,`ng generate <package>:<schematic-name>
`),t()(),i(81,"blockquote")(82,"p"),e(83,"A lista de op\xE7\xF5es dispon\xEDveis que o CLI oferece para o "),i(84,"em"),e(85,"ng generate"),t(),e(86," \xE9 vista acrescentando "),i(87,"code"),e(88,"--help"),t(),e(89," no comando."),t()(),i(90,"h3"),e(91,"PO UI Components"),t(),i(92,"pre")(93,"code"),e(94,`ng generate @po-ui/ng-components:<schematic-name>
`),t()(),i(95,"div",2)(96,"div",3)(97,"table",4)(98,"thead")(99,"tr",5)(100,"th",6),e(101,"Nome"),t(),i(102,"th",6),e(103,"Descri\xE7\xE3o"),t()()(),i(104,"tbody")(105,"tr",7)(106,"td",8)(107,"a",9)(108,"strong"),e(109,"po-page-list"),t()()(),i(110,"td",8),e(111," Componente que deve ser utilizado como o container principal para as telas de listagem de dados, podendo ser apresentado como lista ou tabela. "),t()(),i(112,"tr",7)(113,"td",8)(114,"a",10)(115,"strong"),e(116,"po-page-default"),t()()(),i(117,"td",8),e(118,"Componente que deve ser utilizado como o container principal para as telas sem um template definido."),t()(),i(119,"tr",7)(120,"td",8)(121,"a",11)(122,"strong"),e(123,"po-page-edit"),t()()(),i(124,"td",8),e(125,"Componente que deve ser utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um registro."),t()(),i(126,"tr",7)(127,"td",8)(128,"a",12)(129,"strong"),e(130,"po-page-detail"),t()()(),i(131,"td",8),e(132,"Componente que deve ser utilizado como container principal para a tela de detalhamento de um registro."),t()()()()()(),i(133,"h3"),e(134,"Po UI Templates"),t(),i(135,"pre")(136,"code"),e(137,`ng generate @po-ui/ng-templates:<schematic-name>
`),t()(),i(138,"div",2)(139,"div",3)(140,"table",4)(141,"thead")(142,"tr",5)(143,"th",6),e(144,"Nome"),t(),i(145,"th",6),e(146,"Descri\xE7\xE3o"),t()()(),i(147,"tbody")(148,"tr",7)(149,"td",8)(150,"a",13)(151,"strong"),e(152,"po-page-dynamic-table"),t()()(),i(153,"td",8),e(154,"P\xE1gina que exibe uma lista de registros em uma tabela baseado em uma lista de fields, o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o. "),t()(),i(155,"tr",7)(156,"td",8)(157,"a",14)(158,"strong"),e(159,"po-page-dynamic-detail"),t()()(),i(160,"td",8),e(161,"P\xE1gina que serve para exibir registros em detalhes, o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o. "),t()(),i(162,"tr",7)(163,"td",8)(164,"a",15)(165,"strong"),e(166,"po-page-dynamic-edit"),t()()(),i(167,"td",8),e(168,"P\xE1gina que pode servir para editar ou criar novos registros, o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o. "),t()(),i(169,"tr",7)(170,"td",8)(171,"a",16)(172,"strong"),e(173,"po-page-dynamic-search"),t()()(),i(174,"td",8),e(175,"Componente com as a\xE7\xF5es de pesquisa j\xE1 definidas, bastando que o desenvolvedor implemente apenas a chamada para as APIs e exiba as informa\xE7\xF5es. "),t()(),i(176,"tr",7)(177,"td",8)(178,"a",17)(179,"strong"),e(180,"po-page-job-scheduler"),t()()(),i(181,"td",8),e(182,"P\xE1gina que serve para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler), como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios. Para utiliz\xE1-la, basta informar o servi\xE7o (endpoint) para consumo, sem a necessidade de criar componentes e tratamentos dos dados. "),t()(),i(183,"tr",7)(184,"td",8)(185,"a",18)(186,"strong"),e(187,"po-page-login"),t()()(),i(188,"td",8),e(189,"P\xE1gina utilizada como template para tela de login. Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio. Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque. "),t()(),i(190,"tr",7)(191,"td",8)(192,"a",19)(193,"strong"),e(194,"po-page-change-password"),t()()(),i(195,"td",8),e(196,"P\xE1gina utilizada como template para tela de cadastro ou altera\xE7\xE3o de senha. "),t()(),i(197,"tr",7)(198,"td",8)(199,"a",20)(200,"strong"),e(201,"po-page-blocked-user"),t()()(),i(202,"td",8),e(203,"P\xE1gina utilizada como template para tela de bloqueio de usu\xE1rio. "),t()()()()()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var _=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:1071,vars:0,consts:[["p-title","Fundamentos do PO Sync",1,"guides","app-portal"],["href","guides/sync-fundamentals#introduction"],["href","guides/sync-fundamentals#knowledge"],["href","guides/sync-fundamentals#schemas"],["href","guides/sync-fundamentals#create-schema"],["href","guides/sync-fundamentals#schematic"],["href","guides/sync-fundamentals#prepare-api"],["href","guides/sync-fundamentals#logical-deletion"],["href","guides/sync-fundamentals#sync-url"],["href","guides/sync-fundamentals#prepare"],["href","guides/sync-fundamentals#periodic"],["href","guides/sync-fundamentals#load-data"],["href","guides/sync-fundamentals#po-entity"],["href","guides/sync-fundamentals#find-data"],["href","guides/sync-fundamentals#save-and-remove"],["href","guides/sync-fundamentals#sync"],["href","guides/sync-fundamentals#advanced-techniques"],["href","guides/sync-fundamentals#on-sync"],["href","guides/sync-fundamentals#po-data-transform"],["href","guides/sync-fundamentals#get-responses"],["href","guides/sync-fundamentals#insert-http-command"],["href","guides/sync-fundamentals#custom-request-id"],["href","guides/sync-fundamentals#schemas-definition"],["href","guides/sync-fundamentals#po-conference"],["id","introduction"],[2,"text-align","center"],["src","./assets/graphics/po-sync/event-sourcing.jpg",1,"po-mt-2","po-mb-2",2,"max-width","100%"],["src","./assets/graphics/po-sync/sync-send.jpg",1,"po-mt-2","po-mb-2",2,"max-width","100%"],["src","./assets/graphics/po-sync/sync-get.jpg",1,"po-mt-2","po-mb-2",2,"max-width","100%"],["href","/documentation/po-sync"],["href","guides/sync-get-started"],["id","knowledge"],["href","http://es6-features.org"],["href","http://es6-features.org/#PromiseUsage"],["href","https://ionicframework.com/"],["href","http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html"],["href","https://rxjs-dev.firebaseapp.com/guide/overview"],["id","schemas"],["id","create-schema"],[1,"language-shell"],[1,"language-typescript"],["id","schematic"],["id","prepare-api"],["id","logical-deletion"],[1,"language-javascript"],["id","sync-url"],["href","https://po-sample-conference.onrender.com/conferences/diff/2018-10-08T13:23:31.893Z"],["href","https://po-ui.io/guides/api"],["id","prepare"],["id","periodic"],["id","load-data"],["id","po-entity"],["href","/documentation/po-entity"],["id","find-data"],["href","/documentation/po-query-builder"],["id","save-and-remove"],["id","sync"],["id","advanced-techniques"],["id","on-sync"],["id","po-data-transform"],["href","/documentation/po-data-transform"],["id","get-responses"],["href","/documentation/po-event-sourcing-error-response"],["id","insert-http-command"],["id","custom-request-id"],["id","schemas-definition"],["id","po-conference"],["href","https://github.com/ionic-team/ionic-conference-app"],["href","https://github.com/po-ui/po-sample-conference"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"h2"),e(2,"Conte\xFAdo"),t(),i(3,"ul")(4,"li")(5,"a",1),e(6,"Introdu\xE7\xE3o"),t()(),i(7,"li")(8,"a",2),e(9,"Conhecimentos necess\xE1rios"),t()(),i(10,"li")(11,"a",3)(12,"em"),e(13,"Schemas"),t()(),i(14,"ul")(15,"li")(16,"a",4),e(17,"Como criar um "),i(18,"em"),e(19,"schema"),t()()(),i(20,"li")(21,"a",5),e(22,"Schematic"),t()()()(),i(23,"li")(24,"a",6),e(25,"Preparando a API para a sincroniza\xE7\xE3o"),t(),i(26,"ul")(27,"li")(28,"a",7),e(29,"Exclus\xE3o l\xF3gica"),t()(),i(30,"li")(31,"a",8)(32,"em"),e(33,"Endpoint"),t(),e(34," de sincroniza\xE7\xE3o"),t()()()(),i(35,"li")(36,"a",9),e(37,"Preparando a aplica\xE7\xE3o"),t(),i(38,"ul")(39,"li")(40,"a",10),e(41,"Sincroniza\xE7\xE3o peri\xF3dica"),t()(),i(42,"li")(43,"a",11),e(44,"Carga inicial dos dados"),t()()()(),i(45,"li")(46,"a",12),e(47,"Manipulando os registros de um "),i(48,"em"),e(49,"schema"),t()(),i(50,"ul")(51,"li")(52,"a",13),e(53,"Buscando os registros"),t()(),i(54,"li")(55,"a",14),e(56,"Cria\xE7\xE3o, atualiza\xE7\xE3o e exclus\xE3o de um registro"),t()()()(),i(57,"li")(58,"a",15),e(59,"Sincroniza\xE7\xE3o manual"),t()(),i(60,"li")(61,"a",16),e(62,"T\xE9cnicas avan\xE7adas"),t(),i(63,"ul")(64,"li")(65,"a",17),e(66,"Notifica\xE7\xE3o p\xF3s-sincroniza\xE7\xE3o"),t()(),i(67,"li")(68,"a",18),e(69,"Adaptando a resposta da API para o padr\xE3o do PO UI"),t()(),i(70,"li")(71,"a",19),e(72,"Capturando respostas da sincroniza\xE7\xE3o"),t()(),i(73,"li")(74,"a",20),e(75,"Inserindo requisi\xE7\xF5es HTTP na fila de eventos"),t()(),i(76,"li")(77,"a",21),e(78,"Cria\xE7\xE3o de identificador customizado para eventos da fila"),t()(),i(79,"li")(80,"a",22),e(81,"Alterando as defini\xE7\xF5es dos "),i(82,"em"),e(83,"schemas"),t()()()()(),i(84,"li")(85,"a",23),e(86,"Aplicativo de demonstra\xE7\xE3o do PO Sync"),t()()(),i(87,"p"),n(88,"a",24),t(),i(89,"h2"),e(90,"Introdu\xE7\xE3o"),t(),i(91,"p"),e(92,`O PO Sync \xE9 uma biblioteca que possibilita armazenar dados na aplica\xE7\xE3o local mantendo a sincroniza\xE7\xE3o entre os dados locais e o servidor.
Permitindo que o usu\xE1rio utilize a aplica\xE7\xE3o tanto `),i(93,"em"),e(94,"online"),t(),e(95," quanto "),i(96,"em"),e(97,"offline"),t(),e(98,", com a mesma experi\xEAncia de uso."),t(),i(99,"h3"),e(100,"Como o PO Sync mant\xE9m os dados atualizados com o servidor?"),t(),i(101,"p"),e(102,`Todas as modifica\xE7\xF5es nos registros como criar, alterar e excluir acontecem primeiramente no armazenamento local.
Para cada modifica\xE7\xE3o feita em um registro tamb\xE9m \xE9 criado um evento. Este evento representa uma opera\xE7\xE3o, sendo
composto basicamente pelo tipo de opera\xE7\xE3o (cria\xE7\xE3o, altera\xE7\xE3o ou remo\xE7\xE3o) e o registro modificado.
Este evento \xE9 adicionado a uma fila de eventos que ser\xE1 consumida pelo processo de sincroniza\xE7\xE3o (atualiza\xE7\xE3o dos dados).
Este processo \xE9 demonstrado na figura a seguir:`),t(),i(103,"p",25),n(104,"img",26),t(),i(105,"p"),e(106,"\xC9 no processo de sincroniza\xE7\xE3o que os dados s\xE3o atualizados tanto da aplica\xE7\xE3o local para o servidor quanto do servidor para a aplica\xE7\xE3o local."),t(),i(107,"blockquote")(108,"p"),e(109,"A sincroniza\xE7\xE3o sempre acontece com a aplica\xE7\xE3o "),i(110,"em"),e(111,"online"),t(),e(112," e em segundo plano, permitindo que o usu\xE1rio continue utilizando a aplica\xE7\xE3o normalmente."),t()(),i(113,"h4"),e(114,"Como ocorre a sincroniza\xE7\xE3o?"),t(),i(115,"p"),e(116,"A sincroniza\xE7\xE3o dos dados acontece em duas etapas:"),t(),i(117,"p")(118,"strong"),e(119,"1)"),t(),e(120," Busca os itens da fila de eventos e envia os dados modificados da aplica\xE7\xE3o local para o servidor sequencialmente:"),t(),i(121,"p",25),n(122,"img",27),t(),i(123,"p")(124,"strong"),e(125,"2)"),t(),e(126," Busca os dados que foram modificados no servidor e atualiza na aplica\xE7\xE3o local:"),t(),i(127,"p",25),n(128,"img",28),t(),i(129,"p"),e(130,"Esta sincroniza\xE7\xE3o pode ser acionada (gatilho) das seguintes formas:"),t(),i(131,"ul")(132,"li")(133,"p"),e(134,"Reativa: toda vez que houver alguma mudan\xE7a no hardware do dispositivo, como na troca do tipo de rede 4G para WI-FI;"),t()(),i(135,"li")(136,"p")(137,"a",10),e(138,"Peri\xF3dica"),t(),e(139,": ser\xE1 acionada periodicamente baseada nos par\xE2metros de configura\xE7\xF5es do "),i(140,"a",29),e(141,"PoSyncConfig"),t(),e(142,";"),t()(),i(143,"li")(144,"p")(145,"a",15),e(146,"Manualmente"),t(),e(147,": ser\xE1 acionada na chamada manual do m\xE9todo "),i(148,"code"),e(149,"PoSyncService.sync()"),t(),e(150,"."),t()()(),i(151,"blockquote")(152,"p"),e(153,"Antes de continuar os pr\xF3ximos passos, siga as instru\xE7\xF5es do "),i(154,"a",30),e(155,"Come\xE7ando com o PO Sync"),t(),e(156,` para
saber como criar um novo projeto com Ionic 7 utilizando o PO Sync.`),t()(),i(157,"p"),n(158,"a",31),t(),i(159,"h2"),e(160,"Conhecimentos necess\xE1rios"),t(),i(161,"p"),e(162,"Para compreender o funcionamento do PO Sync e utiliz\xE1-lo \xE9 necess\xE1rio ter conhecimento t\xE9cnico em:"),t(),i(163,"ul")(164,"li")(165,"a",32),e(166,"JavaScript (ES6)"),t(),e(167,", em particular a utiliza\xE7\xE3o do padr\xE3o "),i(168,"a",33)(169,"em"),e(170,"Promises"),t()(),e(171,";"),t(),i(172,"li")(173,"a",34),e(174,"Ionic"),t(),e(175,";"),t(),i(176,"li")(177,"a",35),e(178,"Observable"),t(),e(179," do "),i(180,"a",36),e(181,"RxJS"),t(),e(182,";"),t(),i(183,"li"),e(184,"Protocolo de comunica\xE7\xE3o HTTP;"),t(),i(185,"li"),e(186,"Arquitetura REST."),t()(),i(187,"p"),n(188,"a",37),t(),i(189,"h2")(190,"em"),e(191,"Schemas"),t()(),i(192,"p"),e(193,"O PO Sync sincroniza os dados com base em um conjunto de "),i(194,"em"),e(195,"schemas"),t(),e(196,". Onde cada "),i(197,"em"),e(198,"schema"),t(),e(199,` representa um modelo de dados,
ou seja, a estrutura l\xF3gica e as caracter\xEDsticas de um conjunto de registros. Sendo semelhante a uma tabela
convencional de um banco de dados, como por exemplo uma tabela de clientes, produtos ou autom\xF3veis. No entanto os `),i(200,"em"),e(201,"schemas"),t(),e(202,`
n\xE3o possuem relacionamentos entre si como as tabelas convencionais.`),t(),i(203,"p"),n(204,"a",38),t(),i(205,"h3"),e(206,"Como criar um "),i(207,"em"),e(208,"schema"),t()(),i(209,"p"),e(210,"Cada "),i(211,"em"),e(212,"schema"),t(),e(213," deve implementar a interface "),i(214,"a",29),e(215,"PoSyncSchema"),t(),e(216,". Para criar um "),i(217,"em"),e(218,"schema"),t(),e(219,` que represente uma "Confer\xEAncia"
podemos fazer:`),t(),i(220,"pre")(221,"code",39),e(222,`ng generate @po-ui/ng-sync:schema --name=conference
`),t()(),i(223,"p"),e(224,"O comando ng generate do Angular CLI criar\xE1 um arquivo com uma estrutura semelhante a essa:"),t(),i(225,"pre")(226,"code",40),e(227,`import { PoSyncSchema } from '@po-ui/ng-sync';

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
`),t()(),i(228,"p"),e(229,"Nesta defini\xE7\xE3o de "),i(230,"em"),e(231,"schema"),t(),e(232," podem ser configurados os "),i(233,"em"),e(234,"endpoints"),t(),e(235,` para os m\xE9todos HTTP: GET, POST, DELETE e PATCH,
sendo somente o `),i(236,"em"),e(237,"endpoint"),t(),e(238,` do m\xE9todo GET obrigat\xF3rio. Caso os demais n\xE3o sejam informados, ser\xE1 utilizado o mesmo endere\xE7o
do `),i(239,"em"),e(240,"endpoint"),t(),e(241," do m\xE9todo GET para os outros m\xE9todos."),t(),i(242,"p"),e(243,"A propriedade "),i(244,"code"),e(245,"fields"),t(),e(246," da interface "),i(247,"a",29),e(248,"PoSyncSchema"),t(),e(249,` representa os campos que estar\xE3o no registro.
Por exemplo, para um `),i(250,"em"),e(251,"schema"),t(),e(252," do tipo Pessoa, poder\xEDamos ter os campos: nome, idade e endere\xE7o."),t(),i(253,"p"),e(254,`N\xE3o necessariamente precisam ser representados todos os campos retornados pela API, somente os necess\xE1rios para as
manipula\xE7\xF5es atrav\xE9s do PO Sync.`),t(),i(255,"p"),n(256,"a",41),t(),i(257,"h3"),e(258,"Schematic"),t(),i(259,"p"),e(260,"Voc\xEA pode utilizar um schematic para criar o arquivo com a estrutura b\xE1sica do schema."),t(),i(261,"p"),e(262,"Para isso utilize o comando"),t(),i(263,"pre")(264,"code",39),e(265,`ng generate @po-ui/ng-sync:schema
`),t()(),i(266,"p"),e(267,"Voc\xEA tamb\xE9m pode informar um caminho completo."),t(),i(268,"pre")(269,"code",39),e(270,`ng generate @po-ui/ng-sync:schema --name=conference/schema/conference
`),t()(),i(271,"p"),e(272,"Ou apenas o nome do schema que ele criar\xE1 o arquivo na pasta que o comando for executado."),t(),i(273,"pre")(274,"code",39),e(275,`ng generate @po-ui/ng-sync:schema --name=conference
`),t()(),i(276,"p"),n(277,"a",42),t(),i(278,"h2"),e(279,"Preparando a API para a sincroniza\xE7\xE3o"),t(),i(280,"p"),e(281,"Para que a sincroniza\xE7\xE3o aconte\xE7a corretamente \xE9 necess\xE1rio que a API tenha implementado a "),i(282,"a",7),e(283,"exclus\xE3o l\xF3gica"),t(),e(284," e um "),i(285,"a",8)(286,"em"),e(287,"endpoint"),t(),e(288," de sincroniza\xE7\xE3o"),t(),e(289,"."),t(),i(290,"p"),n(291,"a",43),t(),i(292,"h3"),e(293,"Exclus\xE3o l\xF3gica"),t(),i(294,"p"),e(295,`A exclus\xE3o dos registros na API dever\xE1 ser feita de forma l\xF3gica, ou seja, \xE9 necess\xE1rio que cada registro contenha um
campo que representa se aquele registro foi exclu\xEDdo, por exemplo:`),t(),i(296,"pre")(297,"code",44),e(298,`{
  "id": 1,
  "title": "PO conference 2018",
  "date": "2018-08-11T00:00:00Z",
  "location": "Av. Santos Dumont, 831 - Santo Ant\xF4nio, Joinville - SC",
  "description": "Conference organized by PO",
  // Campo informando se o registro foi exclu\xEDdo
  "isDeleted": false
}
`),t()(),i(299,"p"),e(300,"No registro acima o campo chamado "),i(301,"code"),e(302,"isDeleted"),t(),e(303," descreve se ele foi exclu\xEDdo ou n\xE3o."),t(),i(304,"p"),e(305,"Esta informa\xE7\xE3o do campo dever\xE1 ser fornecida ao PO Sync dentro da declara\xE7\xE3o de cada "),i(306,"em"),e(307,"schema"),t(),e(308,`, para isso temos a
propriedade `),i(309,"code"),e(310,"deletedField"),t(),e(311," na interface "),i(312,"a",29),e(313,"PoSyncSchema"),t(),e(314,", por exemplo:"),t(),i(315,"pre")(316,"code",40),e(317,`import { PoSyncSchema } from '@po-ui/ng-sync';

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
`),t()(),i(318,"h4"),e(319,"Porque exclus\xE3o l\xF3gica?"),t(),i(320,"p"),e(321,"A exclus\xE3o l\xF3gica \xE9 utilizada para que outras aplica\xE7\xF5es possam saber se um registro foi removido."),t(),i(322,"p"),e(323,"Imagine que dois aplicativos estejam manipulando o mesmo registro atrav\xE9s de um "),i(324,"em"),e(325,"endpoint"),t(),e(326,`. Um dos aplicativos remove
este registro, como o outro aplicativo saber\xE1 que este registro foi removido? Atrav\xE9s da exclus\xE3o l\xF3gica, o PO Sync
tem o controle dessa informa\xE7\xE3o.`),t(),i(327,"p"),n(328,"a",45),t(),i(329,"h3")(330,"em"),e(331,"Endpoint"),t(),e(332," de sincroniza\xE7\xE3o"),t(),i(333,"p"),e(334,"Sempre que houver uma sincroniza\xE7\xE3o, uma requisi\xE7\xE3o \xE9 feita neste "),i(335,"em"),e(336,"endpoint"),t(),e(337,` utilizando a data da \xFAltima sincroniza\xE7\xE3o
como refer\xEAncia (como par\xE2metro da URL). Ao receber esta data, o `),i(338,"em"),e(339,"endpoint"),t(),e(340,` deve retornar todos os registros que
tiveram a \xFAltima atualiza\xE7\xE3o maior ou igual a data que foi recebida como par\xE2metro, logo, somente os dados n\xE3o
sincronizados ser\xE3o retornados. Para cada um dos `),i(341,"em"),e(342,"schemas"),t(),e(343," \xE9 necess\xE1rio ter um "),i(344,"em"),e(345,"endpoint"),t(),e(346," de sincroniza\xE7\xE3o."),t(),i(347,"p"),e(348,`Abra o seu navegador e acesse a URL
`),i(349,"a",46),e(350,"https://po-sample-conference.onrender.com/conferences/diff/2018-10-08T13:23:31.893Z"),t(),e(351,"."),t(),i(352,"p"),e(353,"O "),i(354,"em"),e(355,"endpoint"),t(),e(356," de sincroniza\xE7\xE3o deve retornar uma resposta com a estrutura como a da URL acima, por exemplo:"),t(),i(357,"pre")(358,"code",44),e(359,`{
  "hasNext": false,
  "items": [],
  "po_sync_date": "2018-10-08T13:57:55.008Z"
}
`),t()(),i(360,"p"),e(361,"Onde:"),t(),i(362,"ul")(363,"li")(364,"code"),e(365,"hasNext"),t(),e(366,": Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t(),i(367,"li")(368,"code"),e(369,"items"),t(),e(370,": Lista de itens retornados."),t(),i(371,"li")(372,"code"),e(373,"po_sync_date"),t(),e(374,`: Data da \xFAltima sincroniza\xE7\xE3o. Ao realizar esta requisi\xE7\xE3o estamos solicitando uma
sincroniza\xE7\xE3o, ent\xE3o esta data deve ser a data em que o servidor est\xE1 devolvendo a resposta. Se na requisi\xE7\xE3o o `),i(375,"em"),e(376,"endpoint"),t(),e(377,`
n\xE3o enviar esta data, n\xE3o ser\xE1 poss\xEDvel fazer a pr\xF3xima sincroniza\xE7\xE3o, pois esta data ser\xE1 utilizada
para a pr\xF3xima URL de sincroniza\xE7\xE3o.`),t()(),i(378,"blockquote")(379,"p"),e(380,"Esta estrutura de resposta \xE9 padronizada pelo "),i(381,"a",47),e(382,"Guia de implementa\xE7\xE3o de APIs"),t(),e(383,"."),t()(),i(384,"blockquote")(385,"p")(386,"strong"),e(387,"Primeira sincroniza\xE7\xE3o:"),t(),e(388," como na primeira sincroniza\xE7\xE3o o PO Sync ainda n\xE3o recebeu nenhuma data dos "),i(389,"em"),e(390,"endpoints"),t(),e(391,`, a URL \xE9 montada com uma data muito
antiga, o que faz com que todos os dados sejam retornados na primeira sincroniza\xE7\xE3o.`),t()(),i(392,"p"),e(393,"A defini\xE7\xE3o deste "),i(394,"em"),e(395,"endpoint"),t(),e(396," deve ser feita na propriedade "),i(397,"code"),e(398,"diffUrlApi"),t(),e(399," da sua defini\xE7\xE3o do "),i(400,"em"),e(401,"schema"),t(),e(402,`, como no exemplo
abaixo:`),t(),i(403,"pre")(404,"code",40),e(405,`import { PoSyncSchema } from '@po-ui/ng-sync';

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
`),t()(),i(406,"p"),n(407,"a",48),t(),i(408,"h2"),e(409,"Preparando a aplica\xE7\xE3o"),t(),i(410,"p"),e(411,"Ap\xF3s ter criado os "),i(412,"em"),e(413,"schemas"),t(),e(414,` e preparado a API, \xE9 necess\xE1rio preparar a aplica\xE7\xE3o para utilizar o PO Sync passando para
ele os `),i(415,"em"),e(416,"schemas"),t(),e(417," e as configura\xE7\xF5es iniciais. Se voc\xEA seguiu o guia "),i(418,"a",30),e(419,"Come\xE7ando com o PO Sync"),t(),e(420,`,
dentro do arquivo `),i(421,"code"),e(422,"src/app/app.component.ts"),t(),e(423,", no m\xE9todo "),i(424,"code"),e(425,"initSync()"),t(),e(426," foi feita a seguinte implementa\xE7\xE3o:"),t(),i(427,"pre")(428,"code",40),e(429,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet
};
const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  this.poSync.sync();
  ...
});
`),t()(),i(430,"p"),e(431,"A vari\xE1vel "),i(432,"code"),e(433,"config"),t(),e(434," implementa a interface "),i(435,"a",29),e(436,"PoSyncConfig"),t(),e(437,` e representa as configura\xE7\xF5es iniciais de sincroniza\xE7\xE3o. Neste
exemplo, a propriedade `),i(438,"code"),e(439,"type"),t(),e(440,` descreve o tipo de conex\xE3o que ir\xE1 permitir que aconte\xE7a o sincronismo. Ao terminar de
preparar a aplica\xE7\xE3o os dados estar\xE3o dispon\xEDveis para serem sincronizados do servidor para a aplica\xE7\xE3o local. Por esta raz\xE3o,
ap\xF3s a conclus\xE3o da promessa deste m\xE9todo, o `),i(441,"code"),e(442,"poSync.sync()"),t(),e(443," pode ser chamado para sincronizar os dados."),t(),i(444,"p"),n(445,"a",49),t(),i(446,"h3"),e(447,"Sincroniza\xE7\xE3o peri\xF3dica"),t(),i(448,"p"),e(449,"Para que os dados sejam atualizados dentro de um per\xEDodo de tempo, modifique a constante "),i(450,"code"),e(451,"config"),t(),e(452,` do exemplo
anterior para ficar da seguinte forma:`),t(),i(453,"pre")(454,"code",40),e(455,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  // Linha adicionada
  period: 30
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  this.poSync.sync();
  ...
});
`),t()(),i(456,"p"),e(457,"Onde o valor da propriedade "),i(458,"code"),e(459,"period"),t(),e(460," define que o sincronismo dever\xE1 ser ativado a cada 30 segundos."),t(),i(461,"p"),n(462,"a",50),t(),i(463,"h3"),e(464,"Carga inicial dos dados"),t(),i(465,"p"),e(466,"Caso queira fazer a carga inicial dos dados que est\xE3o no servidor antes de fazer o primeiro sincronismo, o servi\xE7o "),i(467,"a",29),e(468,"PoSyncService"),t(),e(469,`
disponibiliza um m\xE9todo chamado `),i(470,"code"),e(471,"PoSyncService.loadData()"),t(),e(472,"."),t(),i(473,"blockquote")(474,"p")(475,"strong"),e(476,"Aten\xE7\xE3o:"),t(),e(477," este m\xE9todo deve ser chamado apenas uma vez para carregar os dados iniciais e antes do primeiro sincronismo."),t()(),i(478,"p"),e(479,"Para implementar a carga inicial no c\xF3digo anterior, basta substituir a linha onde estava "),i(480,"code"),e(481,"this.poSync.sync();"),t(),e(482,` pela
seguinte implementa\xE7\xE3o:`),t(),i(483,"pre")(484,"code",40),e(485,`const config: PoSyncConfig = {
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
`),t()(),i(486,"p"),e(487,"Onde "),i(488,"code"),e(489,"<condicao>"),t(),e(490,` deve ser substitu\xEDda por uma valida\xE7\xE3o que verifique se \xE9 a primeira vez em que os dados est\xE3o sendo
carregados na aplica\xE7\xE3o, como por exemplo na instala\xE7\xE3o do aplicativo.`),t(),i(491,"p"),n(492,"a",51),t(),i(493,"h2"),e(494,"Manipulando os registros de um "),i(495,"em"),e(496,"schema"),t()(),i(497,"p"),e(498,"Toda a manipula\xE7\xE3o dos registros de um "),i(499,"em"),e(500,"schema"),t(),e(501,` como salvar, remover e buscar \xE9 feita atrav\xE9s da inst\xE2ncia da classe
`),i(502,"a",52),e(503,"PoEntity"),t(),e(504," que pode ser obtida a partir do m\xE9todo "),i(505,"code"),e(506,"PoSyncService.getModel()"),t(),e(507,", por exemplo:"),t(),i(508,"pre")(509,"code",40),e(510,`this.conferenceModel = await this.poSync.getModel('conference');
`),t()(),i(511,"p"),e(512,'Onde o par\xE2metro "conference" representa o nome do '),i(513,"em"),e(514,"schema"),t(),e(515,` que se deseja manipular.
Este \xE9 o mesmo valor colocado na propriedade `),i(516,"code"),e(517,"name"),t(),e(518," da interface "),i(519,"a",29),e(520,"PoSyncSchema"),t(),e(521,"."),t(),i(522,"p"),e(523,"Agora com esta inst\xE2ncia podemos utilizar todos os m\xE9todos do "),i(524,"a",52),e(525,"PoEntity"),t(),e(526," para manipular os registros."),t(),i(527,"p"),n(528,"a",53),t(),i(529,"h3"),e(530,"Buscando os registros"),t(),i(531,"blockquote")(532,"p"),e(533,"A busca dos registros sempre \xE9 feita na aplica\xE7\xE3o local, pois a mesma \xE9 atualizada com o servidor atrav\xE9s do processo de sincroniza\xE7\xE3o."),t()(),i(534,"p"),e(535,"Com a inst\xE2ncia de "),i(536,"a",52),e(537,"PoEntity"),t(),e(538," armazenada na propriedade "),i(539,"code"),e(540,"this.conferenceModel"),t(),e(541,` podemos buscar
os registros com o `),i(542,"code"),e(543,"PoEntity.find()"),t(),e(544," da seguinte forma:"),t(),i(545,"pre")(546,"code",40),e(547,`this.conferences = await this.conferenceModel.find().exec();
`),t()(),i(548,"p"),e(549,"Podemos notar que ap\xF3s usar o m\xE9todo, foi necess\xE1rio concaten\xE1-lo com o m\xE9todo "),i(550,"code"),e(551,"PoQueryBuilder.exec()"),t(),e(552,`
para que a busca pudesse ser conclu\xEDda e os registros serem retornados.`),t(),i(553,"p"),e(554,"Isso acontece porque o m\xE9todo "),i(555,"code"),e(556,"PoEntity.find()"),t(),e(557," retorna uma inst\xE2ncia da classe "),i(558,"a",54),e(559,"PoQueryBuilder"),t(),e(560,` e todos os m\xE9todos
desta classe podem ser encadeados e no final chamar o m\xE9todo `),i(561,"code"),e(562,"PoQueryBuilder.exec()"),t(),e(563," para concluir a busca."),t(),i(564,"p"),e(565,"Por exemplo, para buscar os dados e orden\xE1-los pelo campo do "),i(566,"em"),e(567,"schema"),t(),e(568," chamado "),i(569,"code"),e(570,"title"),t(),e(571,", podemos fazer:"),t(),i(572,"pre")(573,"code",40),e(574,`this.conferences = await this.conferenceModel.find().sort('title').exec();
`),t()(),i(575,"p"),e(576,"E se quisermos retornar somente os campos "),i(577,"code"),e(578,"title"),t(),e(579," e "),i(580,"code"),e(581,"location"),t(),e(582,", podemos fazer:"),t(),i(583,"pre")(584,"code",40),e(585,`this.conferences = await this.conferenceModel.find().sort('title').select('title location').exec();
`),t()(),i(586,"blockquote")(587,"p"),e(588,"Para saber mais sobre os m\xE9todos para constru\xE7\xE3o de consultas, acesse "),i(589,"a",54),e(590,"PoQueryBuilder"),t(),e(591,"."),t()(),i(592,"p"),n(593,"a",55),t(),i(594,"h3"),e(595,"Cria\xE7\xE3o, atualiza\xE7\xE3o e exclus\xE3o de um registro"),t(),i(596,"p"),e(597,"Ainda com a inst\xE2ncia de "),i(598,"a",52),e(599,"PoEntity"),t(),e(600," podemos utilizar o m\xE9todo "),i(601,"code"),e(602,"PoEntity.save()"),t(),e(603,` para criar um
novo registro. Portanto para criar uma nova confer\xEAncia no nosso exemplo, podemos fazer:`),t(),i(604,"pre")(605,"code",40),e(606,`const conference = { title: 'BrasilJS', location: 'Barra Shopping Sul - Porto Alegre, RS - Brasil' };

this.conferenceModel.save(conference).then(() => {
  // Confer\xEAncia criada!
});
`),t()(),i(607,"p"),e(608,"E para atualizar a confer\xEAncia, \xE9 necess\xE1rio ter o registro buscado atrav\xE9s do "),i(609,"a",52),e(610,"PoEntity"),t(),e(611,`,
pois este registro dever\xE1 conter o `),i(612,"em"),e(613,"id"),t(),e(614," depois que for salvo."),t(),i(615,"p"),e(616,"Por exemplo, para buscarmos e atualizarmos a confer\xEAncia que criamos acima, podemos fazer:"),t(),i(617,"p")(618,"strong"),e(619,"1)"),t(),e(620,' Buscar a confer\xEAncia pelo t\xEDtulo "BrasilJS":'),t(),i(621,"pre")(622,"code",40),e(623,`const conferenceUpdated = await this.conferenceModel.find().filter({ title: 'BrasilJS' }).exec();
`),t()(),i(624,"p")(625,"strong"),e(626,"2)"),t(),e(627," Podemos atualizar a localiza\xE7\xE3o, por exemplo:"),t(),i(628,"pre")(629,"code",40),e(630,`conferenceUpdated.location = 'UFRGS - Porto Alegre, RS - Brasil';
`),t()(),i(631,"p")(632,"strong"),e(633,"3)"),t(),e(634," Utilizamos o m\xE9todo "),i(635,"code"),e(636,"PoEntity.save()"),t(),e(637," para efetuar a atualiza\xE7\xE3o:"),t(),i(638,"pre")(639,"code",40),e(640,`this.conferenceModel.save(conferenceUpdated).then(() => {
  // Confer\xEAncia atualizada!
});
`),t()(),i(641,"p"),e(642,"Para excluir um registro tamb\xE9m \xE9 necess\xE1rio busc\xE1-lo atrav\xE9s do "),i(643,"a",52),e(644,"PoEntity"),t(),e(645,`
como na atualiza\xE7\xE3o e ap\xF3s esta busca utilizar o m\xE9todo `),i(646,"code"),e(647,"PoEntity.remove()"),t(),e(648," para remover o registro, por exemplo:"),t(),i(649,"pre")(650,"code",40),e(651,`const conferenceRemove = await this.conferenceModel.find().filter({ title: 'BrasilJS' }).exec();

this.conferenceModel.remove(conferenceRemove).then(() => {
  // Confer\xEAncia removida!
});
`),t()(),i(652,"p"),n(653,"a",56),t(),i(654,"h2"),e(655,"Sincroniza\xE7\xE3o manual"),t(),i(656,"p"),e(657,`Existem casos onde o usu\xE1rio do aplicativo deseja ativar manualmente a sincroniza\xE7\xE3o, como por exemplo apertando um
bot\xE3o para atualizar os dados.`),t(),i(658,"p"),e(659,"Esta opera\xE7\xE3o pode ser feita atrav\xE9s do m\xE9todo "),i(660,"code"),e(661,"PoSyncService.sync()"),t(),e(662,". Por exemplo:"),t(),i(663,"pre")(664,"code",40),e(665,`this.poSync.sync().then(() => {
  // Sincroniza\xE7\xE3o conclu\xEDda
}).catch(() => {
  // Erro durante a sincroniza\xE7\xE3o
});
`),t()(),i(666,"p"),n(667,"a",57),t(),i(668,"h2"),e(669,"T\xE9cnicas avan\xE7adas"),t(),i(670,"p"),n(671,"a",58),t(),i(672,"h3"),e(673,"Notifica\xE7\xE3o p\xF3s-sincroniza\xE7\xE3o"),t(),i(674,"p"),e(675,`Em algumas situa\xE7\xF5es, \xE9 necess\xE1rio ser notificado sempre que uma sincroniza\xE7\xE3o acontecer para, por exemplo, atualizar a tela do usu\xE1rio com os dados sincronizados. Para isso, se inscreva atrav\xE9s do m\xE9todo
`),i(676,"code"),e(677,"PoSyncService.onSync()"),t(),e(678," que ir\xE1 notific\xE1-lo sempre que uma sincroniza\xE7\xE3o acontecer com sucesso."),t(),i(679,"p"),e(680,"Por exemplo, no guia "),i(681,"a",30),e(682,"Come\xE7ando com o PO Sync"),t(),e(683,` temos a utiliza\xE7\xE3o do m\xE9todo
`),i(684,"code"),e(685,"PoSyncService.onSync()"),t(),e(686," dentro do "),i(687,"code"),e(688,"constructor()"),t(),e(689,", localizado no arquivo "),i(690,"code"),e(691,"src/pages/home/home.ts"),t(),e(692,":"),t(),i(693,"pre")(694,"code",40),e(695,`constructor(public navCtrl: NavController, private poSync: PoSyncService) {
  // Deve chamar o m\xE9todo loadHomePage() sempre que acontecer uma sincroniza\xE7\xE3o
  this.poSync.onSync().subscribe(() => this.loadHomePage());
}

async loadHomePage() {
  this.conference = await this.poSync.getModel('conference').findOne().exec();
}
`),t()(),i(696,"blockquote")(697,"p"),e(698,"Para saber mais sobre este m\xE9todo acesse "),i(699,"a",29),e(700,"PoSyncService.onSync()"),t(),e(701,"."),t()(),i(702,"p"),n(703,"a",59),t(),i(704,"h3"),e(705,"Adaptando a resposta da API para o padr\xE3o do PO"),t(),i(706,"p"),e(707,"O PO Sync necessita que as APIs utilizem o padr\xE3o de respostas que est\xE1 no "),i(708,"a",47),e(709,"Guia de implementa\xE7\xE3o de APIs"),t(),e(710," que segue a seguinte estrutura:"),t(),i(711,"pre")(712,"code",44),e(713,`{
  "hasNext": boolean,
  "items": [],
  "po_sync_date": date
}
`),t()(),i(714,"p"),e(715,"No entanto, existem APIs que ainda n\xE3o seguem este padr\xE3o. Imagine que voc\xEA possua uma API que sempre retorne a seguinte estrutura:"),t(),i(716,"pre")(717,"code",40),e(718,`{
  "next": string,
  "data": [],
  "sync_date": date
}
`),t()(),i(719,"p"),e(720,"Onde:"),t(),i(721,"ul")(722,"li")(723,"code"),e(724,"next"),t(),e(725,": \xE9 a URL da pr\xF3xima p\xE1gina. Por exemplo: "),i(726,"code"),e(727,"https://<url>?page=3"),t(),e(728,";"),t(),i(729,"li")(730,"code"),e(731,"data"),t(),e(732,": lista de itens retornados;"),t(),i(733,"li")(734,"code"),e(735,"sync_date"),t(),e(736,": data da \xFAltima sincroniza\xE7\xE3o."),t()(),i(737,"p"),e(738,"E a API espera para pagina\xE7\xE3o os seguintes par\xE2metros na URL:"),t(),i(739,"ul")(740,"li")(741,"code"),e(742,"pageNumber"),t(),e(743,": indica o n\xFAmero da p\xE1gina;"),t(),i(744,"li")(745,"code"),e(746,"size"),t(),e(747,": quantidade de itens por p\xE1gina."),t()(),i(748,"p"),e(749,"Por exemplo:"),t(),i(750,"pre")(751,"code"),e(752,`http://<url>/?pageNumber=2&size=10
`),t()(),i(753,"p"),e(754,"\xC9 poss\xEDvel fazer a adapta\xE7\xE3o desta resposta utilizando a classe "),i(755,"a",60),e(756,"PoDataTransform"),t(),e(757,`.
Esta classe possui uma propriedade chamada `),i(758,"code"),e(759,"data"),t(),e(760," que representa a resposta que o "),i(761,"em"),e(762,"endpoint"),t(),e(763," retornou."),t(),i(764,"p"),e(765,"Para fazer a adapta\xE7\xE3o desta estrutura de resposta:"),t(),i(766,"p")(767,"strong"),e(768,"1)"),t(),e(769," Crie uma nova classe e a fa\xE7a herdar a classe "),i(770,"a",60),e(771,"PoDataTransform"),t(),e(772,":"),t(),i(773,"pre")(774,"code",40),e(775,`import { PoDataTransform } from '@po-ui/ng-sync';

class MyDataTransform extends PoDataTransform {
  ...
}
`),t()(),i(776,"p")(777,"strong"),e(778,"2)"),t(),e(779," Implemente os m\xE9todos da classe "),i(780,"a",60),e(781,"PoDataTransform"),t(),e(782,":"),t(),i(783,"pre")(784,"code",40),e(785,`import { PoDataTransform } from '@po-ui/ng-sync';

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
`),t()(),i(786,"p"),e(787,`Os primeiros quatro m\xE9todos representam os nomes que ir\xE3o corresponder a cada par\xE2metro. No nosso exemplo, a cole\xE7\xE3o de
registros n\xE3o est\xE1 em uma propriedade `),i(788,"code"),e(789,"items"),t(),e(790," conforme o padr\xE3o PO UI, mas sim em "),i(791,"code"),e(792,"data"),t(),e(793,`, ent\xE3o no m\xE9todo
`),i(794,"code"),e(795,"MyDataTransform.getItemsFieldName()"),t(),e(796," ser\xE1 retornado o valor "),i(797,"code"),e(798,"data"),t(),e(799,"."),t(),i(800,"p"),e(801,"O m\xE9todo "),i(802,"code"),e(803,"MyDataTransform.hasNext()"),t(),e(804," deve retornar um valor "),i(805,"em"),e(806,"booleano"),t(),e(807,` que determina se existe mais p\xE1ginas para serem
buscadas ou n\xE3o. No nosso exemplo podemos acessar a pr\xF3xima p\xE1gina com a propriedade `),i(808,"code"),e(809,"next"),t(),e(810,`.
Como temos acesso a resposta da API atrav\xE9s da propriedade `),i(811,"code"),e(812,"data"),t(),e(813,", podemos saber se existe uma pr\xF3xima p\xE1gina do seguinte modo:"),t(),i(814,"pre")(815,"code",40),e(816,`hasNext(): boolean {
  return !!this.data.next;
}
`),t()(),i(817,"p")(818,"strong"),e(819,"3)"),t(),e(820," Por fim, deve ser criado uma inst\xE2ncia desta classe "),i(821,"code"),e(822,"MyDataTransform"),t(),e(823," e inclu\xED-la na propriedade do objeto "),i(824,"code"),e(825,"PoSyncConfig"),t(),e(826,`
que \xE9 inserido no m\xE9todo `),i(827,"code"),e(828,"PoSyncService.prepare()"),t(),e(829,", da seguinte forma:"),t(),i(830,"pre")(831,"code",40),e(832,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  period: 30,
  // Inst\xE2ncia da classe MyDataTransform
  dataTransform: new MyDataTransform()
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  ...
});
`),t()(),i(833,"p"),e(834,"Com isto, todas as respostas dos "),i(835,"em"),e(836,"endpoints"),t(),e(837,` dos schemas ser\xE3o adaptados para seguir o padr\xE3o de API do PO UI esperado pelo
PO Sync.`),t(),i(838,"p"),n(839,"a",61),t(),i(840,"h3"),e(841,"Capturando respostas da sincroniza\xE7\xE3o"),t(),i(842,"p"),e(843,`Conforme os itens que est\xE3o na fila de eventos s\xE3o enviados para o servidor \xE9 poss\xEDvel fazer este monitoramento
atrav\xE9s da inscri\xE7\xE3o no m\xE9todo `),i(844,"code"),e(845,"PoSyncService.getResponses()"),t(),e(846,`.
A inscri\xE7\xE3o realizada atrav\xE9s do m\xE9todo `),i(847,"code"),e(848,".subscribe()"),t(),e(849,", retorna um objeto do tipo "),i(850,"code"),e(851,"PoSyncResponse"),t(),e(852,` que cont\xE9m as
informa\xE7\xF5es do item que foi consumido da fila de eventos. Exemplo de utiliza\xE7\xE3o:`),t(),i(853,"pre")(854,"code",40),e(855,`this.poSync.getResponses().subscribe(poSyncResponse => {
  // Foi consumido um item da fila de eventos.
});
`),t()(),i(856,"h4"),e(857,"Em que situa\xE7\xF5es este monitoramento pode ser \xFAtil?"),t(),i(858,"p"),e(859,`Este monitoramento \xE9 \xFAtil para saber se os itens conseguiram ser enviados para o servidor com sucesso. Caso um item
enviado n\xE3o tiver sucesso, o consumo da fila de eventos ser\xE1 suspenso e os demais itens n\xE3o ser\xE3o enviados para o
servidor enquanto este item que n\xE3o est\xE1 sendo enviado for resolvido.`),t(),i(860,"p"),e(861,"O consumo da fila de eventos pode ser suspenso em duas situa\xE7\xF5es:"),t(),i(862,"ul")(863,"li"),e(864,"Se o servidor rejeitar a requisi\xE7\xE3o com "),i(865,"em"),e(866,"status"),t(),e(867," diferente da classe de "),i(868,"em"),e(869,"status 2xx"),t(),e(870," (sucesso);"),t(),i(871,"li"),e(872,"Se um item da fila representa uma requisi\xE7\xE3o de altera\xE7\xE3o ou exclus\xE3o e o registro envolvido n\xE3o possuir "),i(873,"em"),e(874,"id"),t(),e(875,"."),t()(),i(876,"p"),e(877,"Para resolver este tipo de problema, uma solu\xE7\xE3o \xE9 remover este item da fila de eventos, isto pode ser feito da seguinte forma:"),t(),i(878,"pre")(879,"code",40),e(880,`// Monitora o consumo da fila de eventos
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
`),t()(),i(881,"blockquote")(882,"p"),e(883,"Saiba mais sobre "),i(884,"a",29),e(885,"PoSyncService.getResponses()"),t(),e(886,", "),i(887,"a",29),e(888,"PoSyncService.removeItemOfSync()"),t(),e(889,`
e `),i(890,"a",62),e(891,"PoEventSourcingErrorResponse"),t(),e(892,"."),t()(),i(893,"p"),n(894,"a",63),t(),i(895,"h3"),e(896,"Inserindo requisi\xE7\xF5es HTTP na fila de eventos"),t(),i(897,"p"),e(898,`A manipula\xE7\xE3o da fila de eventos \xE9 feita pelo PO Sync, mas existe a possibilidade de criar um evento na fila contendo uma
requisi\xE7\xE3o HTTP customizada. Isso pode ser feito atrav\xE9s da utiliza\xE7\xE3o do m\xE9todo `),i(899,"code"),e(900,"PoSyncService.insertHttpCommand()"),t(),e(901,`.
Este m\xE9todo recebe como primeiro par\xE2metro um objeto no formato `),i(902,"a",29),e(903,"PoHttpRequestData"),t(),e(904,` que cont\xE9m as informa\xE7\xF5es da requisi\xE7\xE3o.
Exemplo de utiliza\xE7\xE3o:`),t(),i(905,"pre")(906,"code",40),e(907,`const poHttpRequestData: PoHttpRequestData = {
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
`),t()(),i(908,"p"),e(909,"O m\xE9todo "),i(910,"code"),e(911,"PoSyncService.insertHttpCommand()"),t(),e(912," retorna uma promessa e no par\xE2metro do "),i(913,"em"),e(914,"callback"),t(),e(915,` da promessa \xE9 fornecido
o identificador daquele evento. Este identificador por ser armazenado e utilizado posteriormente em alguma valida\xE7\xE3o no m\xE9todo
`),i(916,"a",29),e(917,"PoSyncService.getResponses()"),t(),e(918,", por exemplo:"),t(),i(919,"pre")(920,"code",40),e(921,`this.poSync.getResponses().subscribe(poSyncResponse => {

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
`),t()(),i(922,"p"),e(923,"Tamb\xE9m \xE9 poss\xEDvel fazer o envio de arquivo (File) para o servidor utilizando o "),i(924,"code"),e(925,"Content-Type: multipart/form-data"),t(),e(926,". Para isso, deve ser informado no "),i(927,"code"),e(928,"body"),t(),e(929," o "),i(930,"code"),e(931,"rawFile"),t(),e(932,", conforme exemplo abaixo:"),t(),i(933,"pre")(934,"code",40),e(935,`public insertFileHttpCommand(file: File) {
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
`),t()(),i(936,"blockquote")(937,"p"),e(938,"Caso n\xE3o seja passado nenhum valor para a propriedade "),i(939,"code"),e(940,"formField"),t(),e(941," ser\xE1 aplicado o valor padr\xE3o "),i(942,"code"),e(943,"file"),t(),e(944,"."),t()(),i(945,"blockquote")(946,"p"),e(947,"Para o envio de arquivos recomendamos o uso priorit\xE1rio do "),i(948,"code"),e(949,"lokijs"),t(),e(950," nas configura\xE7\xF5es do "),i(951,"code"),e(952,"PoStorageModule"),t(),e(953,` por sua maior capacidade de armazenamento.
A configura\xE7\xE3o deve ser feita no `),i(954,"code"),e(955,"app.module.ts"),t(),e(956," da sua aplica\xE7\xE3o, por exemplo:"),t()(),i(957,"pre")(958,"code",40),e(959,`...
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
`),t()(),i(960,"p"),n(961,"a",64),t(),i(962,"h3"),e(963,"Cria\xE7\xE3o de identificador customizado para eventos da fila"),t(),i(964,"p"),e(965,`Para monitorar se um evento em espec\xEDfico foi enviado ou n\xE3o para o servidor \xE9 poss\xEDvel criar um identificador customizado
para ele e inseri-lo como par\xE2metro nos m\xE9todos `),i(966,"code"),e(967,"PoEntity.save()"),t(),e(968,", "),i(969,"code"),e(970,"PoEntity.remove()"),t(),e(971," ou "),i(972,"code"),e(973,"PoSync.insertHttpCommand"),t(),e(974,". Este identificador \xE9 retornado junto com o objeto "),i(975,"code"),e(976,"PoSyncResponse"),t(),e(977," do m\xE9todo "),i(978,"code"),e(979,"PoSync.getResponses()"),t(),e(980,", o que possibilita identificar se o evento foi enviado ou n\xE3o, da seguinte forma:"),t(),i(981,"p"),e(982,"Na cria\xE7\xE3o ou altera\xE7\xE3o de um registro:"),t(),i(983,"pre")(984,"code",40),e(985,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {

  if (poSyncResponse.customRequestId === customId) {
    // A cria\xE7\xE3o/altera\xE7\xE3o com o id-1234 foi processado no servidor
  }

});

const conferenceModel = this.poSync.getModel('conference');

const customId = 'id-1234';

// Inserido o identificador 'customId' no segundo par\xE2metro
conferenceModel.save(conference, customId).then(() => {});
`),t()(),i(986,"p"),e(987,"Na remo\xE7\xE3o de um registro:"),t(),i(988,"pre")(989,"code",40),e(990,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {

  if (poSyncResponse.customRequestId === customId) {
    // A remo\xE7\xE3o com o id-ABC foi processado no servidor
  }

});

const conferenceModel = this.poSync.getModel('conference');

const customId = 'id-ABC';

// Inserido o identificador 'customId' no segundo par\xE2metro
conferenceModel.remove(conference, customId).then(() => {});
`),t()(),i(991,"p"),e(992,"Ou na cria\xE7\xE3o de uma requisi\xE7\xE3o HTTP customizada:"),t(),i(993,"pre")(994,"code",40),e(995,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {
  
  if (poSyncResponse.customRequestId === customId) {
    // A requisi\xE7\xE3o HTTP com o id-XYZ foi processado no servidor
  }

});

const customId = 'id-XYZ';

// Inserido o identificador 'customId' no segundo par\xE2metro
this.poSync.insertHttpCommand(poHttpRequestData, customId).then(() => {});
`),t()(),i(996,"p"),n(997,"a",65),t(),i(998,"h3"),e(999,"Alterando as defini\xE7\xF5es dos "),i(1e3,"em"),e(1001,"schemas"),t()(),i(1002,"p"),e(1003,"Em algumas situa\xE7\xF5es, pode existir a necessidade de alterar a defini\xE7\xE3o do "),i(1004,"em"),e(1005,"schema"),t(),e(1006," que foi inserido como par\xE2metro dentro do m\xE9todo "),i(1007,"code"),e(1008,"PoSyncService.prepare()"),t(),e(1009,". Uma alternativa para fazer esta altera\xE7\xE3o \xE9:"),t(),i(1010,"p")(1011,"strong"),e(1012,"1)"),t(),e(1013," Chamar o m\xE9todo "),i(1014,"a",29)(1015,"code"),e(1016,"PoSynceService.destroy()"),t()(),e(1017,":"),t(),i(1018,"pre")(1019,"code",40),e(1020,`this.poSync.destroy().then(() => {
  // As defini\xE7\xF5es dos schemas, os itens da fila de eventos e todos os registros foram destru\xEDdos
});
`),t()(),i(1021,"blockquote")(1022,"p")(1023,"strong"),e(1024,"Aten\xE7\xE3o:"),t(),e(1025," ao utilizar o m\xE9todo "),i(1026,"code"),e(1027,"PoSynceService.destroy()"),t(),e(1028,`, todos os registros armazenados localmente
ser\xE3o removidos inclusive os itens que estiverem na fila de eventos esperando para sincronizar.`),t()(),i(1029,"p")(1030,"strong"),e(1031,"2)"),t(),e(1032," E ap\xF3s a conclus\xE3o da promessa do m\xE9todo "),i(1033,"code"),e(1034,"PoSynceService.destroy()"),t(),e(1035,` chamar o m\xE9todo
`),i(1036,"code"),e(1037,"PoSyncService.prepare()"),t(),e(1038," com a nova defini\xE7\xE3o:"),t(),i(1039,"pre")(1040,"code",40),e(1041,`// Schemas atualizados
const schemasUpdated = [...];

this.poSync.destroy()
  .then(() => this.poSync.prepare(schemasUpdated, config))
  .then(() => {
    // Defini\xE7\xF5es dos schemas atualizadas
  });
`),t()(),i(1042,"blockquote")(1043,"p")(1044,"strong"),e(1045,"Aten\xE7\xE3o:"),t(),e(1046," para que n\xE3o venham ocorrer erros em a\xE7\xF5es que dependem das defini\xE7\xF5es dos "),i(1047,"em"),e(1048,"schemas"),t(),e(1049,`, recomenda-se utilizar
o m\xE9todo `),i(1050,"code"),e(1051,"PoSyncService.prepare()"),t(),e(1052," logo ap\xF3s o m\xE9todo "),i(1053,"code"),e(1054,"PoSynceService.destroy()"),t(),e(1055,"."),t()(),i(1056,"p"),n(1057,"a",66),t(),i(1058,"h2"),e(1059,"Aplicativo de demonstra\xE7\xE3o do PO Sync"),t(),i(1060,"p"),e(1061,"PO Conference Application \xE9 um aplicativo de demonstra\xE7\xE3o do PO Sync baseado no "),i(1062,"a",67),e(1063,"Ionic Conference Application"),t(),e(1064,". Tendo como objetivo, demonstrar as funcionalidades do PO Sync de forma did\xE1tica."),t(),i(1065,"blockquote")(1066,"p"),e(1067,"Acesse o reposit\xF3rio do aplicativo "),i(1068,"a",68),e(1069,"neste link"),t(),e(1070,"."),t()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var L=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:347,vars:0,consts:[["p-title","Come\xE7ando com o PO Sync",1,"guides","app-portal"],["href","https://ionicframework.com/docs"],["href","/guides/sync-fundamentals"],["href","/documentation/po-sync"],["href","https://nodejs.org/en/"],["href","https://cli.angular.io/"],[1,"language-shell"],["href","https://ionicframework.com/docs/cli/"],[1,"language-json"],[1,"language-typescript"],[1,"language-html"],["href","https://github.com/ionic-team/ionicons/issues/1011"],["src","./assets/graphics/po-sync/app-get-started.gif","alt","Getting Started App"],["href","./guides/sync-fundamentals"],["href","./documentation/po-sync"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"p"),e(2,"Esse guia servir\xE1 para criar e configurar uma aplica\xE7\xE3o em "),i(3,"a",1),e(4,"Ionic 7"),t(),e(5," com o uso do PO Sync."),t(),i(6,"p"),e(7,`Para maiores detalhes sobre os servi\xE7os e m\xE9todos utilizados neste tutorial, consulte a documenta\xE7\xE3o de
`),i(8,"a",2),e(9,"Fundamentos do PO Sync"),t(),e(10," e a documenta\xE7\xE3o de refer\xEAncia de "),i(11,"a",3),e(12,"API do PO Sync"),t(),e(13,"."),t(),i(14,"h3"),e(15,"Pr\xE9-requisitos"),t(),i(16,"ul")(17,"li")(18,"a",4),e(19,"Node.js e NPM"),t()(),i(20,"li")(21,"a",5),e(22,"Angular CLI"),t(),e(23," (~19.0.0):"),i(24,"ul")(25,"li")(26,"pre")(27,"code",6),e(28,`npm install -g @angular/cli@19
`),t()()()()(),i(29,"li")(30,"a",7),e(31,"Ionic"),t(),e(32," (^7.2.0):"),i(33,"ul")(34,"li")(35,"pre")(36,"code",6),e(37,`npm install -g @ionic/cli@7
`),t()()()()()(),i(38,"blockquote")(39,"p"),e(40,"\xC9 importante ter conhecimento pr\xE9vio em Angular e Ionic para seguir esta documenta\xE7\xE3o e obter melhor entendimento do PO Sync."),t()(),i(41,"h3"),e(42,"Passo 1 - Criando o aplicativo"),t(),i(43,"p"),e(44,"Para a aplica\xE7\xE3o de exemplo usaremos o template "),i(45,"em"),e(46,"blank"),t(),e(47," do Ionic. Para isso, execute o seguinte comando:"),t(),i(48,"pre")(49,"code",6),e(50,`ionic start po-sync-getting-started blank --no-deps
`),t()(),i(51,"blockquote")(52,"p")(53,"code"),e(54,"--no-deps"),t(),e(55,": pula a instala\xE7\xE3o das depend\xEAncias do "),i(56,"code"),e(57,"package.json"),t(),e(58,"."),t()(),i(59,"p"),e(60,"Caso surja a quest\xE3o relacionada ao framework desejado, opte por "),i(61,"code"),e(62,"Angular"),t(),e(63,"."),t(),i(64,"h3"),e(65,"Passo 2 - Instalando as depend\xEAncias"),t(),i(66,"blockquote")(67,"p"),e(68,"\xC9 importante verificar se no passo anterior foram criados o arquivo "),i(69,"code"),e(70,"package-lock.json"),t(),e(71," e a pasta "),i(72,"code"),e(73,"node_modules"),t(),e(74,", caso tenham sido criados vai ser necess\xE1rio apagar ambos antes de prosseguir."),t()(),i(75,"p"),e(76,"\xC9 necess\xE1rio realizar alguns ajustes de compatibilidade do PO para o projeto criado."),t(),i(77,"p"),e(78,"Navegue at\xE9 a pasta do aplicativo:"),t(),i(79,"pre")(80,"code",6),e(81,`cd po-sync-getting-started
`),t()(),i(82,"p"),e(83,"Antes de executar a instala\xE7\xE3o, \xE9 necess\xE1rio que todas as depend\xEAncias do projeto estejam declaradas de acordo com a vers\xE3o do PO no arquivo "),i(84,"code"),e(85,"package.json"),t(),e(86,", localizado na raiz da aplica\xE7\xE3o:"),t(),i(87,"pre")(88,"code",8),e(89,`  ...
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
`),t()(),i(90,"blockquote")(91,"p"),e(92,"Ap\xF3s configurar seu arquivo, certifique-se de salvar as altera\xE7\xF5es realizadas."),t()(),i(93,"p"),e(94,"Execute o seguinte comando para instalar as depend\xEAncias:"),t(),i(95,"pre")(96,"code",6),e(97,`npm install
`),t()(),i(98,"p"),e(99,"Ap\xF3s realizar a instala\xE7\xE3o, execute o seguinte comando:"),t(),i(100,"pre")(101,"code",6),e(102,`ionic cap sync
`),t()(),i(103,"h3"),e(104,"Passo 3 - Instalando o po-sync"),t(),i(105,"p"),e(106,"Para instalar o "),i(107,"code"),e(108,"po-sync"),t(),e(109," no aplicativo execute o seguinte comando:"),t(),i(110,"pre")(111,"code",6),e(112,`ng add @po-ui/ng-sync
`),t()(),i(113,"h3"),e(114,"Passo 4 - Utilizando o po-sync"),t(),i(115,"h4"),e(116,"Passo 4.1 (NgModule) - Importando o "),i(117,"code"),e(118,"po-sync"),t(),e(119," e o "),i(120,"code"),e(121,"po-storage"),t()(),i(122,"p"),e(123,"No arquivo "),i(124,"code"),e(125,"src/app/app.module.ts"),t(),e(126,", adicione a importa\xE7\xE3o dos m\xF3dulos do "),i(127,"code"),e(128,"po-storage"),t(),e(129," e do "),i(130,"code"),e(131,"po-sync"),t(),e(132,": "),t(),i(133,"pre")(134,"code",9),e(135,`import { NgModule } from '@angular/core';
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
`),t()(),i(136,"h4"),e(137,"Passo 4.1 (Standalone) - Importando o "),i(138,"code"),e(139,"po-sync"),t(),e(140," e o "),i(141,"code"),e(142,"po-storage"),t()(),i(143,"p"),e(144,"No arquivo "),i(145,"code"),e(146,"src/main.ts"),t(),e(147,", adicione a importa\xE7\xE3o dos m\xF3dulos do "),i(148,"code"),e(149,"po-storage"),t(),e(150," e do "),i(151,"code"),e(152,"po-sync"),t(),e(153,": "),t(),i(154,"pre")(155,"code",9),e(156,`import { bootstrapApplication } from '@angular/platform-browser';
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
`),t()(),i(157,"h4"),e(158,"Passo 4.2 - Mapeando seu primeiro "),i(159,"em"),e(160,"schema"),t()(),i(161,"p"),e(162,"O "),i(163,"code"),e(164,"po-sync"),t(),e(165," utiliza a defini\xE7\xE3o de "),i(166,"code"),e(167,"schemas"),t(),e(168,", onde cada "),i(169,"code"),e(170,"schema"),t(),e(171," representa um modelo de dados armazenado no dispositivo."),t(),i(172,"p"),e(173,"Crie o arquivo "),i(174,"code"),e(175,"src/app/home/conference-schema.constants.ts"),t(),e(176," e adicione o conte\xFAdo abaixo:"),t(),i(177,"pre")(178,"code",9),e(179,`import { PoSyncSchema } from '@po-ui/ng-sync';

export const conferenceSchema: PoSyncSchema = {
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  deletedField: 'deleted',
  fields: [ 'id', 'title', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),t()(),i(180,"h3"),e(181,"Passo 5 - Configurando o m\xE9todo prepare"),t(),i(182,"p"),e(183,"Ap\xF3s ter o seu primeiro "),i(184,"em"),e(185,"schema"),t(),e(186," criado, configure o seu aplicativo utilizando o "),i(187,"code"),e(188,"po-sync"),t(),e(189," atrav\xE9s do m\xE9todo "),i(190,"code"),e(191,"PoSyncService.prepare()"),t(),e(192,"."),t(),i(193,"h4"),e(194,"Passo 5.1 (NgModule) - Alterando o "),i(195,"code"),e(196,"src/app/app.component.ts"),t()(),i(197,"p"),e(198,"Substitua o conte\xFAdo do arquivo pelo conte\xFAdo abaixo:"),t(),i(199,"pre")(200,"code",9),e(201,`import { Component } from '@angular/core';
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
`),t()(),i(202,"p"),e(203,"Ap\xF3s utilizar o m\xE9todo "),i(204,"code"),e(205,"PoSyncService.prepare()"),t(),e(206,", a aplica\xE7\xE3o estar\xE1 pronta para sincronizar os dados atrav\xE9s do m\xE9todo "),i(207,"code"),e(208,"PoSyncService.sync()"),t(),e(209,"."),t(),i(210,"h4"),e(211,"Passo 5.1 (Standalone) - Alterando o "),i(212,"code"),e(213,"src/app/app.component.ts"),t()(),i(214,"p"),e(215,"Substitua o conte\xFAdo do arquivo pelo conte\xFAdo abaixo:"),t(),i(216,"pre")(217,"code",9),e(218,`import { Component } from '@angular/core';
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
`),t()(),i(219,"h3"),e(220,"Passo 6 (NgModule) - Acessando os dados"),t(),i(221,"p"),e(222,"Localize o arquivo "),i(223,"code"),e(224,"src/app/home/home.page.ts"),t(),e(225," e fa\xE7a as seguintes altera\xE7\xF5es:"),t(),i(226,"pre")(227,"code",9),e(228,`import { Component } from '@angular/core';

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
`),t()(),i(229,"p"),e(230,"No construtor, foi realizado uma inscri\xE7\xE3o no m\xE9todo "),i(231,"code"),e(232,"PoSyncService.onSync()"),t(),e(233,", para quando ocorrer uma sincroniza\xE7\xE3o, o m\xE9todo "),i(234,"code"),e(235,"loadHomePage()"),t(),e(236," busque um registro do "),i(237,"em"),e(238,"schema"),t(),e(239,' "Conference".'),t(),i(240,"h3"),e(241,"Passo 6 (Standalone) - Acessando os dados"),t(),i(242,"p"),e(243,"Localize o arquivo "),i(244,"code"),e(245,"src/app/home/home.page.ts"),t(),e(246," e fa\xE7a as seguintes altera\xE7\xF5es:"),t(),i(247,"pre")(248,"code",9),e(249,`import { Component } from '@angular/core';
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
`),t()(),i(250,"h3"),e(251,"Passo 7 - Exibindo os dados em tela"),t(),i(252,"p"),e(253,"No arquivo "),i(254,"code"),e(255,"src/app/home/home.page.html"),t(),e(256," crie a seguinte estrutura:"),t(),i(257,"pre")(258,"code",10),e(259,`<ion-content class="ion-padding">
  <ion-button expand="full" (click)="loadHomePage()">Buscar informa\xE7\xF5es</ion-button>
  <ion-button expand="full" color="danger" (click)="clear()">Apagar informa\xE7\xF5es</ion-button>

  <ion-card *ngIf="conference">
    <ion-card-content>
      <ion-card-title>
        `),i(260,"span"),c(),e(261,"{{"),p(),t(),e(262," conference.title "),i(263,"span"),c(),e(264,"}}"),p(),t(),e(265,`
      </ion-card-title>
      <p>`),i(266,"span"),c(),e(267,"{{"),p(),t(),e(268," conference.description "),i(269,"span"),c(),e(270,"}}"),p(),t(),e(271,`</p>
      <p>`),i(272,"span"),c(),e(273,"{{"),p(),t(),e(274," conference.location "),i(275,"span"),c(),e(276,"}}"),p(),t(),e(277,`</p>
    </ion-card-content>
  </ion-card>
</ion-content>
`),t()(),i(278,"h3"),e(279,"Passo 8 - Executando o aplicativo"),t(),i(280,"p"),e(281,"Execute o comando "),i(282,"code"),e(283,"ionic serve"),t(),e(284," e verifique o funcionamento do aplicativo Ionic com "),i(285,"code"),e(286,"po-sync"),t(),e(287,"."),t(),i(288,"blockquote")(289,"p"),e(290,"Pode ocorrer o seguinte erro "),i(291,"code"),e(292,"TS2320: Interface 'HTMLIonIconElement' cannot simultaneously extend types 'IonIcon' and 'HTMLStencilElement'"),t(),e(293," por conta da vers\xE3o do TypeScript (5.2.x) conforme esta "),i(294,"a",11),e(295,"issue"),t(),e(296,", neste caso adicione no arquivo "),i(297,"strong"),e(298,"tsconfig.json"),t(),i(299,"code"),e(300,'"skipLibCheck": true'),t(),e(301,"."),t()(),i(302,"h4"),e(303,"Passo 8.1 - Entendendo o funcionamento do "),i(304,"code"),e(305,"po-sync"),t()(),i(306,"ul")(307,"li")(308,"p"),e(309,"O aplicativo sincroniza os dados que est\xE3o no servidor atrav\xE9s do m\xE9todo "),i(310,"code"),e(311,"PoSyncService.sync()"),t(),e(312,";"),t()(),i(313,"li")(314,"p"),e(315,"Durante esta sincroniza\xE7\xE3o \xE9 efetuada a busca dos registros utilizando a URL de GET, informada no "),i(316,"code"),e(317,"conference-schema.constants.ts"),t(),e(318,", e o retorno \xE9 salvo no dispositivo do cliente;"),t()(),i(319,"li")(320,"p"),e(321,"Com os dados salvos no dispositivo, \xE9 poss\xEDvel desabilitar o acesso \xE0 internet do aplicativo e ainda continuar acessando os dados atrav\xE9s do "),i(322,"code"),e(323,"po-sync"),t(),e(324,"."),t()()(),i(325,"p"),e(326,"Demonstra\xE7\xE3o do aplicativo acessando os dados "),i(327,"em"),e(328,"offline"),t(),e(329,":"),t(),i(330,"p"),n(331,"img",12),t(),i(332,"h3"),e(333,"Pr\xF3ximos passos"),t(),i(334,"ul")(335,"li")(336,"p"),e(337,"Leia sobre os principais "),i(338,"a",13),e(339,"fundamentos do PO Sync"),t(),e(340,"."),t()(),i(341,"li")(342,"p"),e(343,"Saiba mais sobre a "),i(344,"a",14),e(345,"API do PO Sync"),t(),e(346,"."),t()()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var B=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:298,vars:0,consts:[["p-title","Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI",1,"guides","app-portal"],[1,"po-row",2,"margin","20px 0"],[1,"po-lg-2","po-md-5","po-sm-12",2,"padding","10px"],[2,"text-align","center"],["p-icon","an an-palette",2,"font-size","24px"],["p-icon","an an-sun",2,"font-size","24px"],["p-icon","an an-moon",2,"font-size","24px"],["p-icon","an an-wheelchair-motion",2,"font-size","24px"],["p-icon","an an-wrench",2,"font-size","24px"],["p-icon","an an-lightning",2,"font-size","24px"],["href","guides/theme-service#introduction"],["href","guides/theme-service#whyUse"],["href","guides/theme-service#config"],["href","guides/theme-service#configModule"],["href","guides/theme-service#configStyle"],["href","guides/theme-service#configService"],["href","guides/theme-service#howToUse"],["href","guides/theme-service#howToUseBasic"],["href","guides/theme-service#howToUseComplete"],["href","guides/theme-service#applyTheme"],["href","guides/theme-service#applyThemeInitial"],["href","guides/theme-service#applyThemeDynamic"],["href","guides/theme-service#advanced"],["href","guides/theme-service#advancedOverride"],["href","guides/theme-service#advancedReset"],["href","guides/theme-service#advancedPersist"],["href","guides/theme-service#advancedSize"],["href","guides/theme-service#more"],["href","guides/theme-service#sampleStackblitz"],["id","introduction"],["id","whyUse"],["id","config"],["id","configModule"],[1,"language-typescript"],["id","configStyle"],[1,"language-json"],["id","configService"],["id","howToUse"],["id","howToUseBasic"],["id","howToUseComplete"],["id","applyTheme"],["id","applyThemeInitial"],["id","applyThemeDynamic"],["id","advanced"],["id","advancedOverride"],[1,"language-html"],[1,"language-css"],["id","advancedReset"],["id","advancedPersist"],["id","advancedSize"],["id","more"],["href","documentation/po-theme"],["href","https://doc.animaliads.io/"],["id","sampleStackblitz"],["href","https://stackblitz.com/edit/poui-theme-service","target","_blank","rel","noreferrer"],["src","https://developer.stackblitz.com/img/open_in_stackblitz.svg","alt","Open in StackBlitz"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"p"),e(2,"A partir da vers\xE3o 19.X.X, o PO-UI oferece um servi\xE7o completo para cria\xE7\xE3o e gest\xE3o de temas personalizados, permitindo controle total sobre cores, tipografia, acessibilidade e comportamentos espec\xEDficos de componente."),t(),i(3,"p"),e(4,"Principais Recursos:"),t(),i(5,"div",1)(6,"div",2)(7,"div",3),n(8,"po-icon",4),i(9,"p"),e(10,"Paletas de cores"),t()()(),i(11,"div",2)(12,"div",3)(13,"div"),n(14,"po-icon",5)(15,"po-icon",6),t(),i(16,"p"),e(17,"Temas light/dark"),t()()(),i(18,"div",2)(19,"div",3),n(20,"po-icon",7),i(21,"p"),e(22,"Acessibilidade (AA/AAA)"),t()()(),i(23,"div",2)(24,"div",3),n(25,"po-icon",8),i(26,"p"),e(27,"Sobrescrita de estilos"),t()()(),i(28,"div",2)(29,"div",3),n(30,"po-icon",9),i(31,"p"),e(32,"Aplica\xE7\xE3o din\xE2mica"),t()()()(),i(33,"h3"),e(34,"Conte\xFAdo"),t(),i(35,"ul")(36,"li")(37,"a",10),e(38,"Introdu\xE7\xE3o \xE0 Customiza\xE7\xE3o de Temas no PO UI"),t()(),i(39,"li")(40,"a",11),e(41,"Por Que Usar o PoThemeService?"),t()(),i(42,"li")(43,"a",12),e(44,"Configura\xE7\xE3o Inicial"),t(),i(45,"ul")(46,"li")(47,"a",13),e(48,"Importa\xE7\xE3o do M\xF3dulo"),t()(),i(49,"li")(50,"a",14),e(51,"Estilo PO-UI"),t()(),i(52,"li")(53,"a",15),e(54,"Inje\xE7\xE3o do Servi\xE7o"),t()()()(),i(55,"li")(56,"a",16),e(57,"Como Utilizar o Servi\xE7o de Tema"),t(),i(58,"ul")(59,"li")(60,"a",17),e(61,"Estrutura B\xE1sica"),t()(),i(62,"li")(63,"a",18),e(64,"Exemplo Completo"),t()()()(),i(65,"li")(66,"a",19),e(67,"Aplicando o Tema"),t(),i(68,"ul")(69,"li")(70,"a",20),e(71,"Aplica\xE7\xE3o Inicial"),t()(),i(72,"li")(73,"a",21),e(74,"Aplica\xE7\xE3o Din\xE2mica"),t()()()(),i(75,"li")(76,"a",22),e(77,"T\xE9cnicas Avan\xE7adas"),t(),i(78,"ul")(79,"li")(80,"a",23),e(81,"Sobrescrita de Vari\xE1veis"),t()(),i(82,"li")(83,"a",24),e(84,"Reset para Tema Padr\xE3o"),t()(),i(85,"li")(86,"a",25),e(87,"Persist\xEAncia de Tema"),t()(),i(88,"li")(89,"a",26),e(90,"Gerenciamento de Tamanhos"),t()()()(),i(91,"li")(92,"a",27),e(93,"Mais informa\xE7\xF5es"),t()(),i(94,"li")(95,"a",28),e(96,"Exemplo Completo no Stackblitz"),t()()(),i(97,"p"),n(98,"a",29),t(),i(99,"h3"),e(100,"Introdu\xE7\xE3o \xE0 Customiza\xE7\xE3o de Temas no PO UI"),t(),i(101,"p"),e(102,"O PO UI oferece um sistema robusto e flex\xEDvel para personaliza\xE7\xE3o visual de componentes, permitindo que desenvolvedores e designers criem experi\xEAncias \xFAnicas e alinhadas \xE0s necessidades espec\xEDficas de cada projeto. A customiza\xE7\xE3o vai al\xE9m da simples altera\xE7\xE3o de cores - \xE9 um sistema completo que abrange desde vari\xE1veis CSS globais at\xE9 a cria\xE7\xE3o de temas din\xE2micos com suporte a light/dark mode, acessibilidade avan\xE7ada e controle granular sobre cada componente."),t(),i(103,"p"),n(104,"a",30),t(),i(105,"h3"),e(106,"Por Que Usar o PoThemeService?"),t(),i(107,"p"),e(108,"O servi\xE7o de temas do PO UI (PoThemeService) \xE9 o cora\xE7\xE3o do sistema de customiza\xE7\xE3o, oferecendo:"),t(),i(109,"details")(110,"summary")(111,"strong"),e(112,"Aplica\xE7\xE3o Din\xE2mica de Temas"),t()(),i(113,"ul")(114,"li"),e(115,"Altera\xE7\xF5es em tempo real sem recarregar a aplica\xE7\xE3o"),t(),i(116,"li"),e(117,"Transi\xE7\xF5es suaves entre temas light/dark"),t()()(),i(118,"details")(119,"summary")(120,"strong"),e(121,"Gest\xE3o Centralizada"),t()(),i(122,"ul")(123,"li"),e(124,"Cria\xE7\xE3o e armazenamento de m\xFAltiplos temas"),t(),i(125,"li"),e(126,"Combina\xE7\xE3o de temas globais e customiza\xE7\xF5es locais"),t()()(),i(127,"details")(128,"summary")(129,"strong"),e(130,"Integra\xE7\xE3o com Estado da Aplica\xE7\xE3o"),t()(),i(131,"ul")(132,"li"),e(133,"Persist\xEAncia de prefer\xEAncias (localStorage)"),t(),i(134,"li"),e(135,"Sincroniza\xE7\xE3o com configura\xE7\xF5es do usu\xE1rio"),t()()(),i(136,"details")(137,"summary")(138,"strong"),e(139,"Controle de Acessibilidade"),t()(),i(140,"ul")(141,"li"),e(142,"Ativa\xE7\xE3o de n\xEDveis AA/AAA conforme requisitos"),t(),i(143,"li"),e(144,"Ajustes autom\xE1ticos de contrastes"),t()()(),i(145,"details")(146,"summary")(147,"strong"),e(148,"Sobrescrita Flex\xEDvel"),t()(),i(149,"ul")(150,"li"),e(151,"Hierarquia clara: Tema > Vari\xE1veis Globais > Estilos Locais"),t()()(),i(152,"p"),n(153,"a",31),t(),i(154,"h3"),e(155,"Configura\xE7\xE3o Inicial"),t(),i(156,"p"),n(157,"a",32),t(),i(158,"h4"),e(159,"Importa\xE7\xE3o do M\xF3dulo"),t(),i(160,"pre")(161,"code",33),e(162,`import { PoModule } from '@po-ui/ng-components';

@NgModule({
  imports: [
    PoThemeModule
  ]
})
export class AppModule { }
`),t()(),i(163,"p"),n(164,"a",34),t(),i(165,"h4"),e(166,"Estilo PO-UI"),t(),i(167,"p"),e(168,"Configurar o arquivo angular.json da seguinte maneira:"),t(),i(169,"pre")(170,"code",35),e(171,`"styles": [
  "node_modules/@po-ui/style/css/po-theme-default.min.css", 
  "src/styles.css"
]
`),t()(),i(172,"p"),n(173,"a",36),t(),i(174,"h4"),e(175,"Inje\xE7\xE3o do Servi\xE7o"),t(),i(176,"p"),e(177,"Inje\xE7\xE3o do Servi\xE7o no construtor do componente:"),t(),i(178,"pre")(179,"code",33),e(180,`import { PoThemeService } from '@po-ui/ng-components';

export class AppComponent {
  constructor(private poThemeService: PoThemeService) { }
}
`),t()(),i(181,"p"),n(182,"a",37),t(),i(183,"h3"),e(184,"Como Utilizar o Servi\xE7o de Tema"),t(),i(185,"p"),e(186,"Criando um Tema Personalizado"),t(),i(187,"p"),n(188,"a",38),t(),i(189,"h4"),e(190,"Estrutura B\xE1sica"),t(),i(191,"pre")(192,"code",33),e(193,`const meuTema: PoTheme = {
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
`),t()(),i(194,"p"),n(195,"a",39),t(),i(196,"h4"),e(197,"Exemplo Completo"),t(),i(198,"pre")(199,"code",33),e(200,`import { PoTheme, PoThemeTypeEnum } from '@po-ui/ng-components';

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
`),t()(),i(201,"p"),n(202,"a",40),t(),i(203,"h3"),e(204,"Aplicando o Tema"),t(),i(205,"p"),n(206,"a",41),t(),i(207,"h4"),e(208,"Aplica\xE7\xE3o Inicial"),t(),i(209,"pre")(210,"code",33),e(211,`ngOnInit() {
  this.poTheme.setTheme(meuTema, PoThemeTypeEnum.light, PoThemeA11yEnum.AAA);
}
`),t()(),i(212,"p"),n(213,"a",42),t(),i(214,"h4"),e(215,"Aplica\xE7\xE3o Din\xE2mica"),t(),i(216,"pre")(217,"code",33),e(218,`// Alternar entre light/dark mode
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
`),t()(),i(219,"p"),n(220,"a",43),t(),i(221,"h3"),e(222,"T\xE9cnicas Avan\xE7adas"),t(),i(223,"p"),n(224,"a",44),t(),i(225,"h4"),e(226,"Sobrescrita de Vari\xE1veis"),t(),i(227,"blockquote")(228,"p")(229,"strong"),e(230,"Recomenda\xE7\xE3o:"),t(),e(231," Utilize sempre o servi\xE7o "),i(232,"code"),e(233,"PoThemeService"),t(),e(234," para manipula\xE7\xE3o de temas. Reserve esta t\xE9cnica para casos extremos."),t()(),i(235,"p")(236,"strong"),e(237,"Quando usar?"),t()(),i(238,"ul")(239,"li"),e(240,"Necessidade de ajustes pontuais n\xE3o cobertos pelos tokens padr\xE3o "),t(),i(241,"li"),e(242,"Prototipagem r\xE1pida"),t()(),i(243,"p")(244,"strong"),e(245,"Implementa\xE7\xE3o:"),t()(),i(246,"pre")(247,"code",45),e(248,`<html class='override-theme'>
`),t()(),i(249,"pre")(250,"code",46),e(251,`/* styles.scss */
:root.override-theme {
  --color-brand-01-base: #FF0000;
}
`),t()(),i(252,"p"),n(253,"a",47),t(),i(254,"h4"),e(255,"Reset para Tema Padr\xE3o"),t(),i(256,"p"),e(257,"Restaura todos os valores para o tema base configurado:"),t(),i(258,"pre")(259,"code",33),e(260,`// Em qualquer componente/service:
resetarTema() {
  this.poThemeService.resetBaseTheme();
}
`),t()(),i(261,"p"),n(262,"a",48),t(),i(263,"h4"),e(264,"Persist\xEAncia de Tema"),t(),i(265,"p"),e(266,"Fluxo recomendado:"),t(),i(267,"pre")(268,"code",33),e(269,`ngOnInit() {
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
`),t()(),i(270,"p"),n(271,"a",49),t(),i(272,"h4"),e(273,"Gerenciamento de Tamanhos"),t(),i(274,"p"),e(275,"Padr\xE3o acess\xEDvel (AAA):"),t(),i(276,"pre")(277,"code",33),e(278,`  // Habilitar tamanhos para small
  this.themeService.setA11yDefaultSizeSmall(true);

  // Verificar configura\xE7\xE3o atual
  const currentSize = this.poThemeService.getDefaultSize();
`),t()(),i(279,"p"),n(280,"a",50),t(),i(281,"h4"),e(282,"Refer\xEAncias T\xE9cnicas"),t(),i(283,"ul")(284,"li")(285,"a",51),e(286,"PoThemeService API"),t(),e(287," - M\xE9todos completos do servi\xE7o"),t(),i(288,"li")(289,"a",52),e(290,"Animalia DS"),t(),e(291," - Base dos nossos tokens de design"),t()(),i(292,"p"),n(293,"a",53),t(),i(294,"h3"),e(295,"Exemplo Completo no Stackblitz"),t(),i(296,"a",54),n(297,"img",55),t()())},dependencies:[A,l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var H=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:149,vars:0,consts:[["p-title","Criando um tema para o PO UI",1,"guides","app-portal"],[1,"language-json"],["href","https://caniuse.com/#search=CSS%20Variables"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"p"),e(2,"Para cria\xE7\xE3o de novos temas vamos utilizar a ferramenta "),i(3,"strong"),e(4,"Po Theme Cli"),t()(),i(5,"h2"),e(6,"Instala\xE7\xE3o"),t(),i(7,"p"),e(8,"Fa\xE7a a instala\xE7\xE3o global da ferramenta:"),t(),i(9,"pre")(10,"code"),e(11,`npm install -g @po-ui/theme-cli
`),t()(),i(12,"p"),e(13,"Voc\xEA pode ver as op\xE7\xF5es dispon\xEDveis atrav\xE9s do comando:"),t(),i(14,"pre")(15,"code"),e(16,`po-theme -help
`),t()(),i(17,"h2"),e(18,"Iniciando um projeto para o novo tema customizado"),t(),i(19,"p"),e(20,"Navegue at\xE9 o diret\xF3rio que voc\xEA deseja e execute o comando:"),t(),i(21,"pre")(22,"code"),e(23,`po-theme new my-custom-po-theme
`),t()(),i(24,"p"),e(25,"Isso ir\xE1 gerar um novo diret\xF3rio com o nome "),i(26,"code"),e(27,"my-custom-po-theme"),t(),e(28,` e com os arquivos iniciais
para seu tema.`),t(),i(29,"p"),e(30,"Acesse o arquivo "),i(31,"code"),e(32,"src/po-theme-custom.css"),t(),e(33," e fa\xE7a as customiza\xE7\xF5es necess\xE1rias."),t(),i(34,"blockquote")(35,"p"),e(36,"Para customiza\xE7\xE3o das fontes voc\xEA deve colocar seus arquivos na pasta "),i(37,"code"),e(38,"src/assets/fonts"),t(),e(39,"."),t()(),i(40,"h2"),e(41,"Gerando build do tema customizado"),t(),i(42,"p"),e(43,`Para fazer o build e preparar o tema para publica\xE7\xE3o, voc\xEA deve executar o seguinte comando dentro da
pasta do projeto:`),t(),i(44,"pre")(45,"code"),e(46,`po-theme build
`),t()(),i(47,"blockquote")(48,"p"),e(49,"Caso queira atribuir um nome ao arquivo a ser gerado, deve-se utilizar o par\xE2metro "),i(50,"code"),e(51,"--name"),t(),e(52," informando o nome desejado."),t()(),i(53,"blockquote")(54,"p"),e(55,"Se voc\xEA estiver customizando as fontes do tema, voc\xEA deve usar o par\xE2metro "),i(56,"code"),e(57,"--fonts"),t(),e(58,"."),t()(),i(59,"p"),e(60,"Ap\xF3s a execu\xE7\xE3o do comando de "),i(61,"em"),e(62,"build"),t(),e(63,", ir\xE1 ser gerado uma pasta chamada "),i(64,"code"),e(65,"dist"),t(),e(66,` dentro do diret\xF3rio
do seu projeto.`),t(),i(67,"blockquote")(68,"p"),e(69,"Voc\xEA pode modificar seu "),i(70,"code"),e(71,"package.json"),t(),e(72,` adicionando informa\xE7\xF5es sobre o seu pacote, como name, version,
entre outras informa\xE7\xF5es importantes.`),t()(),i(73,"h3"),e(74,"Publicando o novo tema customizado"),t(),i(75,"p"),e(76,"Acesse a pasta "),i(77,"code"),e(78,"dist"),t(),e(79," e execute o seguinte comando:"),t(),i(80,"pre")(81,"code"),e(82,`npm publish
`),t()(),i(83,"h2"),e(84,"Utilizando o tema customizado"),t(),i(85,"p"),e(86,"Existem 3 formas de voc\xEA usar o tema customizado ap\xF3s a publica\xE7\xE3o."),t(),i(87,"p"),e(88,"Configure o arquivo "),i(89,"code"),e(90,"angular.json"),t(),e(91," da aplica\xE7\xE3o conforme for mais conveniente as suas necessidade."),t(),i(92,"h3"),e(93,'1 - Usar o arquivo "compilado" com todo o CSS.'),t(),i(94,"pre")(95,"code",1),e(96,`"styles": [
  "node_modules/my-custom-po-theme/css/po-theme-custom.min.css",
  "src/styles.css"
],
`),t()(),i(97,"p")(98,"strong"),e(99,"Pr\xF3s:"),t(),e(100," Modo mais simples de usar e atende aos browser suportados."),t(),i(101,"p")(102,"strong"),e(103,"Contras:"),t(),e(104,` O tema customizado deve ser sempre atualizado conforme o tema padr\xE3o for publicado, pois
pode ficar sem os novos estilos publicados.`),t(),i(105,"h3"),e(106,"2 - Usar o arquivo de vari\xE1veis do tema customizado + arquivo CSS do tema padr\xE3o"),t(),i(107,"pre")(108,"code",1),e(109,`"styles": [
  "node_modules/my-custom-po-theme/css/po-theme-custom-variables.min.css",
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),t()(),i(110,"blockquote")(111,"p"),e(112,"Aten\xE7\xE3o a ordem dos arquivos"),t()(),i(113,"p")(114,"strong"),e(115,"Pr\xF3s:"),t(),e(116,` Permite que o usu\xE1rio do tema customizado aplique customiza\xE7\xF5es em cima do tema customizado
na aplica\xE7\xE3o final.`),t(),i(117,"p")(118,"strong"),e(119,"Contras:"),t(),e(120,` O tema customizado deve ser sempre atualizado conforme o tema padr\xE3o for publicado e pode
ter incompatibilidade com `),i(121,"em"),e(122,"browsers"),t(),e(123," antigos que n\xE3o d\xE3o suporte a vari\xE1veis no CSS."),t(),i(124,"h3"),e(125,"3 - Usar o arquivo de vari\xE1veis do tema padr\xE3o + vari\xE1veis do tema customizado + arquivo CSS do tema padr\xE3o"),t(),i(126,"pre")(127,"code",1),e(128,`"styles": [
  "node_modules/@po-ui/style/css/po-theme-default-variables.min.css",
  "node_modules/my-custom-po-theme/css/po-theme-custom-variables.min.css",
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),t()(),i(129,"blockquote")(130,"p"),e(131,"Aten\xE7\xE3o a ordem dos arquivos"),t()(),i(132,"p")(133,"strong"),e(134,"Pr\xF3s:"),t(),e(135,` N\xE3o corre risco de perder novos estilos, permite que o usu\xE1rio do tema customizado aplique
customiza\xE7\xF5es em cima do tema customizado na aplica\xE7\xE3o final.`),t(),i(136,"p")(137,"strong"),e(138,"Contras:"),t(),e(139," Pode ter incompatibilidade com "),i(140,"em"),e(141,"browsers"),t(),e(142," antigos que n\xE3o d\xE3o suporte a vari\xE1veis no CSS."),t(),i(143,"blockquote")(144,"p"),e(145,"Aten\xE7\xE3o: Para saber quais browsers d\xE3o suporte a vari\xE1veis voc\xEA pode consultar a ferramenta "),i(146,"a",2),e(147,"Can I use"),t(),e(148,"."),t()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var V=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:402,vars:0,consts:[["p-title","Grid System",1,"guides","app-portal"],["href","https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout"],[1,"po-row","guides-grid-system-box"],[1,"po-xl-1","po-lg-1","po-md-1","po-sm-1"],[1,"language-html"],["href","/guides/how-install"],[1,"po-xl-6","po-lg-6","po-md-6","po-sm-6"],[1,"po-xl-8","po-lg-8","po-md-8","po-sm-8"],[1,"po-xl-4","po-lg-4","po-md-4","po-sm-4"],[1,"po-md-6"],[1,"po-lg-4"],[1,"po-xl-6","po-lg-6","po-md-12","po-sm-12"],[1,"guides-grid-system-containers"],[1,"po-visible-sm","po-sm-12"],[1,"po-visible-md","po-md-12"],[1,"po-visible-lg-12"],[1,"po-visible-xl-12"],[1,"po-hidden-sm","po-md-12","po-lg-12","po-xl-12"],[1,"po-hidden-md","po-sm-12","po-lg-12","po-xl-12"],[1,"po-hidden-lg","po-sm-12","po-md-12","po-xl-12"],[1,"po-hidden-xl","po-sm-12","po-md-12","po-lg-12"],[1,"po-xl-4","po-lg-4","po-md-6","po-sm-12"],[1,"po-offset-lg-4","po-offset-xl-4","po-xl-4","po-lg-4","po-md-6","po-sm-12"],[1,"po-offset-lg-3","po-offset-xl-3","po-xl-4","po-lg-4","po-md-6","po-sm-12"],[1,"po-xl-3","po-lg-3","po-md-6","po-sm-12"],[1,"language-css"],[1,"language-typescript"],[1,"po-row"],[1,"po-xl-6","po-lg-8","po-md-10","po-sm-12"],[1,"po-table","po-text-color-neutral-dark-40"],[1,"po-table-header"],[1,"po-table-header-ellipsis"],[1,"po-table-row"],[1,"po-table-column"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"p"),e(2,"O "),i(3,"a",1),e(4,"Grid System"),t(),e(5,` \xE9 uma estrutura
que permite combinar os elementos em linhas ou em colunas. Esta estrutura costuma seguir um padr\xE3o de configura\xE7\xE3o, determinando:`),t(),i(6,"ul")(7,"li"),e(8,"Um n\xFAmero m\xE1ximo de colunas que uma tela pode ser dividida."),t(),i(9,"li"),e(10,"Padr\xE3o na nomenclatura das classes que referem-se as colunas."),t(),i(11,"li"),e(12,"As colunas podem ser envolvidas por uma classe que delimita e representa a linha."),t(),i(13,"li"),e(14,`O somat\xF3rio dos n\xFAmeros das colunas de uma linha deve ser igual ao n\xFAmero m\xE1ximo de colunas. Por exemplo, supondo que o
n\xFAmero m\xE1ximo seja igual a 12 colunas, ent\xE3o: po-md-5 + po-md-7 = 12 colunas.`),t()(),i(15,"p"),e(16,`O Grid System do PO, trabalha com a divis\xE3o m\xE1xima da tela em 12 colunas, ou seja, o somat\xF3rio de todas as colunas dentro
de uma linha deve ser igual a 12. No exemplo abaixo, temos 12 colunas de tamanho igual a 1. Cada uma dessas colunas tem o
tamanho igual a 1/12 do seu elemento pai. `),t(),i(17,"div",2),n(18,"div",3)(19,"div",3)(20,"div",3)(21,"div",3)(22,"div",3)(23,"div",3)(24,"div",3)(25,"div",3)(26,"div",3)(27,"div",3)(28,"div",3)(29,"div",3),t(),i(30,"pre")(31,"code",4),e(32,`<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
`),t()(),i(33,"blockquote")(34,"p"),e(35,"Estas classes podem ser usadas instalando o "),i(36,"code"),e(37,"@po-ui/style"),t(),e(38," do "),i(39,"strong"),e(40,"PO"),t(),e(41,". Veja mais em "),i(42,"a",5),e(43,"Como instalar o PO"),t(),e(44,"."),t()(),i(45,"h2"),e(46,"Nomenclatura das classes e tamanhos das telas"),t(),i(47,"p"),e(48,"A nomenclatura das classes das colunas seguem o padr\xE3o: "),i(49,"code"),e(50,"po-<tamanho-tela>-<tamanho-coluna>"),t(),e(51,`, como por exemplo a classe
`),i(52,"code"),e(53,"po-md-6"),t(),e(54,` que representa uma coluna com tamanho m\xE9dio e que utiliza 6/12 da largura do elemento pai. Para os intervalos
de tamanhos, tem-se o padr\xE3o:`),t(),i(55,"ul")(56,"li")(57,"code"),e(58,"po-sm-*"),t(),e(59," para telas com tamanho m\xE1ximo de 480px."),t(),i(60,"li")(61,"code"),e(62,"po-md-*"),t(),e(63," para telas com tamanho entre 481px e 960px."),t(),i(64,"li")(65,"code"),e(66,"po-lg-*"),t(),e(67," para telas com tamanho entre 961px e 1366px."),t(),i(68,"li")(69,"code"),e(70,"po-xl-*"),t(),e(71," para telas com tamanho m\xEDnimo de 1367px."),t()(),i(72,"p"),e(73,`Para dividir a tela em duas colunas do mesmo tamanho, basta criar dois elementos com classes de tamanho 6, conforme o pr\xF3ximo
exemplo:`),t(),i(74,"div",2),n(75,"div",6)(76,"div",6),t(),i(77,"pre")(78,"code",4),e(79,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
</div>
`),t()(),i(80,"p"),e(81,"Outro exemplo para criar duas colunas, sendo uma com tamanho 8 e outra com tamanho 4:"),t(),i(82,"div",2),n(83,"div",7)(84,"div",8),t(),i(85,"pre")(86,"code",4),e(87,`<div class="po-xl-8 po-lg-8 po-md-8 po-sm-8"></div>
<div class="po-xl-4 po-lg-4 po-md-4 po-sm-4"></div>
`),t()(),i(88,"p"),e(89,"Ao definir apenas a classe "),i(90,"code"),e(91,"po-md-*"),t(),e(92,`, os tamanhos de tela menores que po-md assumem o tamanho de coluna igual a 12 e os
maiores o tamanho definido no `),i(93,"code"),e(94,"*"),t(),e(95,". Da mesma forma ocorre com a classe "),i(96,"code"),e(97,"po-lg-*"),t(),e(98,`, os tamanhos menores ficam igual a 12 e
os maiores igual ao tamanho do `),i(99,"code"),e(100,"*"),t(),e(101,"."),t(),i(102,"blockquote")(103,"p"),e(104,"Este comportamento limita-se apenas as classes "),i(105,"code"),e(106,"po-md-*"),t(),e(107," e "),i(108,"code"),e(109,"po-lg-*"),t(),e(110,"."),t()(),i(111,"p"),e(112,"O exemplo abaixo mostra este comportamento, para isso redimensione a tela do navegador."),t(),i(113,"div",2)(114,"div",9),e(115,"po-md-6"),t(),i(116,"div",9),e(117,"po-md-6"),t()(),i(118,"div",2)(119,"div",10),e(120,"po-lg-4"),t(),i(121,"div",10),e(122,"po-lg-4"),t(),i(123,"div",10),e(124,"po-lg-4"),t()(),i(125,"pre")(126,"code",4),e(127,`<div class="po-row">
  <div class="po-md-6">po-md-6</div>
  <div class="po-md-6">po-md-6</div>
</div>

<div class="po-row">
  <div class="po-lg-4">po-lg-4</div>
  <div class="po-lg-4">po-lg-4</div>
  <div class="po-lg-4">po-lg-4</div>
</div>
`),t()(),i(128,"blockquote")(129,"p"),e(130,"A classe para envolver as colunas \xE9 chamada de "),i(131,"code"),e(132,"po-row"),t(),e(133,`, sendo o seu uso opcional. Normalmente sendo utilizada para poder
organizar telas que cont\xE9m diversas linhas. `),t()(),i(134,"h2"),e(135,"Responsividade"),t(),i(136,"p"),e(137,`Para alterar a largura das colunas conforme o tamanho da tela, \xE9 necess\xE1rio determinar que tamanho estar\xE1 a coluna em cada
tamanho de tela. Supondo que se tenha uma tela com duas colunas do mesmo tamanho, conforme o exemplo abaixo:`),t(),i(138,"div",2),n(139,"div",6)(140,"div",6),t(),i(141,"pre")(142,"code",4),e(143,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
</div>
`),t()(),i(144,"p"),e(145,`No entanto, quando a tela diminui os elementos no interior da coluna podem n\xE3o ficar bem estruturados, ent\xE3o podemos determinar
que quando a tela estiver pequena estas duas colunas ter\xE3o a largura total do seu elemento pai, da seguinte forma:`),t(),i(146,"div",2),n(147,"div",11)(148,"div",11),t(),i(149,"pre")(150,"code",4),e(151,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-12 po-sm-12"></div>
  <div class="po-xl-6 po-lg-6 po-md-12 po-sm-12"></div>
</div>
`),t()(),i(152,"p"),e(153,`Se a tela for redimensionada, as colunas ir\xE3o mudar de tamanho. Desta mesma forma, pode-se determinar e estruturar diversos
tamanhos de colunas para cada tamanho de tela.`),t(),i(154,"blockquote")(155,"p"),e(156,"Consulte o Style Guide do PO UI, para saber o n\xFAmero m\xE1ximo de colunas por tamanho de tela."),t()(),i(157,"h2"),e(158,"Classes visible e hidden"),t(),i(159,"p"),e(160,"Para poder deixar um determinado tamanho vis\xEDvel ou n\xE3o, existem dispon\xEDveis as classes "),i(161,"code"),e(162,"po-visible-[tamanho]"),t(),e(163," e "),i(164,"code"),e(165,"po-hidden-[tamanho]"),t(),e(166,"."),t(),i(167,"h3"),e(168,"po-visible-[tamanho]"),t(),i(169,"p"),e(170,"Esta classe determina que o elemento ser\xE1 vis\xEDvel na tela quando estiver em determinado tamanho. Ao fazer essa declara\xE7\xE3o, o elemento assume a propriedade "),i(171,"code"),e(172,"display: block"),t(),e(173," e os demais tamanhos ficar\xE3o invis\xEDveis "),i(174,"code"),e(175,"(display: none)"),t(),e(176,". Existem duas formas de descrever a classe po-visible. Uma forma seria a defini\xE7\xE3o de visibilidade separado da defini\xE7\xE3o do tamanho, como "),i(177,"code"),e(178,"po-visible-sm po-sm-6"),t(),e(179,". Outra forma seria a op\xE7\xE3o de utilizar a defini\xE7\xE3o junto com a declara\xE7\xE3o do tamanho, como: "),i(180,"code"),e(181,"po-visible-sm-6"),t(),e(182,"."),t(),i(183,"p"),e(184,"Abaixo tem-se um exemplo onde s\xF3 ir\xE1 aparecer a "),i(185,"code"),e(186,"<div>"),t(),e(187," quando atingir o tamanho especificado no po-visible. "),t(),i(188,"blockquote")(189,"p"),e(190,"Para isso, redimensione a tela do seu navegador."),t()(),i(191,"div",12)(192,"div",13),e(193,"Vis\xEDvel no tamanho 'sm'"),t(),i(194,"div",14),e(195,"Vis\xEDvel no tamanho 'md'"),t(),i(196,"div",15),e(197,"Vis\xEDvel no tamanho 'lg'"),t(),i(198,"div",16),e(199,"Vis\xEDvel no tamanho 'xl'"),t()(),i(200,"pre")(201,"code",4),e(202,`<div class="po-visible-sm po-sm-12">Vis\xEDvel no tamanho 'sm'</div>
<div class="po-visible-md po-md-12">Vis\xEDvel no tamanho 'md'</div>
<div class="po-visible-lg-12">Vis\xEDvel no tamanho 'lg'</div>
<div class="po-visible-xl-12">Vis\xEDvel no tamanho 'xl'</div>
`),t()(),i(203,"blockquote")(204,"p"),e(205,"Aten\xE7\xE3o: ao utilizar esta classe, o elemento recebe a propriedade "),i(206,"code"),e(207,"display"),t(),e(208," com o valor "),i(209,"code"),e(210,"block"),t(),e(211,". "),t()(),i(212,"h3"),e(213,"po-hidden-[tamanho]"),t(),i(214,"p"),e(215,"Ao utilizar esta classe, o elemento ficar\xE1 invis\xEDvel "),i(216,"code"),e(217,"(display: none)"),t(),e(218," ao atingir o tamanho especificado. Por exemplo, as "),i(219,"code"),e(220,"<div>"),t(),e(221," abaixo ir\xE3o desaparecer quando atingir o tamanho especificado no po-hidden. "),t(),i(222,"blockquote")(223,"p"),e(224,"Para isso, redimensione a tela do seu navegador."),t()(),i(225,"div",12)(226,"div",17),e(227,"Ficar\xE1 invis\xEDvel no tamanho 'sm'"),t(),i(228,"div",18),e(229,"Ficar\xE1 invis\xEDvel no tamanho 'md'"),t(),i(230,"div",19),e(231,"Ficar\xE1 invis\xEDvel no tamanho 'lg'"),t(),i(232,"div",20),e(233,"Ficar\xE1 invis\xEDvel no tamanho 'xl'"),t()(),i(234,"pre")(235,"code",4),e(236,`<div class="po-hidden-sm po-md-12 po-lg-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'sm'</div>
<div class="po-hidden-md po-sm-12 po-lg-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'md'</div>
<div class="po-hidden-lg po-sm-12 po-md-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'lg'</div>
<div class="po-hidden-xl po-sm-12 po-md-12 po-lg-12">Ficar\xE1 invis\xEDvel no tamanho 'xl'</div>
`),t()(),i(237,"h2"),e(238,"Deslocamento de colunas (po-offset)"),t(),i(239,"p"),e(240,"\xC9 poss\xEDvel fazer o deslocamento das colunas para a direita utilizando a classe "),i(241,"code"),e(242,"po-offset-[ sm | md | lg | xl ]-[tamanho]"),t(),e(243,`.
Quando esta classe \xE9 definida em um elemento, o mesmo receber\xE1 uma margem \xE0 esquerda quando atingir o tamanho de tela indicado,
como o `),i(244,"code"),e(245,"sm"),t(),e(246," ou "),i(247,"code"),e(248,"md"),t(),e(249,`. A quantidade de deslocamento \xE9 definida por n\xFAmero de colunas, assim como no tamanho. Ent\xE3o, para ter
um deslocamento com tamanho 2 no tamanho de tela `),i(250,"code"),e(251,"sm"),t(),e(252,", basta escrever: "),i(253,"code"),e(254,"po-offset-sm-2"),t(),e(255,"."),t(),i(256,"p"),e(257,"No exemplo abaixo, tem-se duas linhas e ambas utilizam o deslocamento para a direita quando atingirem o tamanho "),i(258,"code"),e(259,"lg"),t(),e(260," e "),i(261,"code"),e(262,"xl"),t(),e(263,`.
A primeira linha tem um deslocamento igual \xE0 4 na segunda coluna. E a segunda linha tem um deslocamento igual \xE0 3 na primeira
coluna.`),t(),i(264,"div",2)(265,"div",21),e(266,"Tamanho 4 e sem offset"),t(),i(267,"div",22),e(268,"Tamanho 4 e offset 4"),t()(),i(269,"div",2)(270,"div",23),e(271,"Tamanho 4 e offset 3"),t(),i(272,"div",24),e(273,"Tamanho 3 e sem offset"),t()(),i(274,"pre")(275,"code",4),e(276,`<div class="po-row">
  <div class="po-xl-4 po-lg-4  po-md-6 po-sm-12">Tamanho 4 e sem offset</div>
  <div class="po-offset-lg-4 po-offset-xl-4 po-xl-4 po-lg-4 po-md-6 po-sm-12">Tamanho 4 e offset 4</div>
</div>

<div class="po-row">
  <div class="po-offset-lg-3 po-offset-xl-3 po-xl-4 po-lg-4 po-md-6 po-sm-12">Tamanho 4 e offset 3</div>
  <div class="po-xl-3 po-lg-3 po-md-6 po-sm-12">Tamanho 3 e sem offset</div>
</div>
`),t()(),i(277,"blockquote")(278,"p"),e(279,"O n\xFAmero de colunas para o deslocamento n\xE3o necessita ser igual ao tamanho do elemento. Por exemplo: "),i(280,"code"),e(281,"po-offset-lg-3 po-lg-4"),t(),e(282,"."),t()(),i(283,"blockquote")(284,"p"),e(285,"\xC9 importante lembrar que o somat\xF3rio de colunas com po-offset e os tamanhos dos elementos deve ser menor ou igual a 12."),t()(),i(286,"blockquote")(287,"p"),e(288,"Os tamanhos de deslocamentos do po-offset variam de 1 a 11, n\xE3o incluindo o espa\xE7amento igual a 12."),t()(),i(289,"h2"),e(290,"Customiza\xE7\xE3o dos breakpoints"),t(),i(291,"p"),e(292,"Atualmente, os navegadores n\xE3o interpretam a leitura de vari\xE1veis em regras de breakpoint como por exemplo:"),t(),i(293,"p")(294,"code"),e(295,"@media (min-width: var(--variavel-customizavel))"),t()(),i(296,"p"),e(297,"Por\xE9m, disponibilizamos os tokens de breakpoint no formato "),i(298,"code"),e(299,"var(--nome-da-variavel)"),t(),e(300," junto as regras de media query permitindo ao desenvolvedor realizar a customiza\xE7\xE3o dos breakpoints em tempo de execu\xE7\xE3o atrav\xE9s do servi\xE7o "),i(301,"code"),e(302,"PoMediaQueryService"),t(),e(303,"."),t(),i(304,"h3"),e(305,"Tokens de breakpoint customiz\xE1veis:"),t(),i(306,"ul")(307,"li")(308,"code"),e(309,"--gridSystemSmMaxWidth"),t(),e(310,": 480px (valor padr\xE3o)"),t(),i(311,"li")(312,"code"),e(313,"--gridSystemMdMinWidth"),t(),e(314,": 481px (valor padr\xE3o)"),t(),i(315,"li")(316,"code"),e(317,"--gridSystemMdMaxWidth"),t(),e(318,": 960px (valor padr\xE3o)"),t(),i(319,"li")(320,"code"),e(321,"--gridSystemLgMinWidth"),t(),e(322,": 961px (valor padr\xE3o)"),t(),i(323,"li")(324,"code"),e(325,"--gridSystemLgMaxWidth"),t(),e(326,": 1366px (valor padr\xE3o)"),t(),i(327,"li")(328,"code"),e(329,"--gridSystemXlMinWidth"),t(),e(330,": 1367px (valor padr\xE3o)"),t(),i(331,"li")(332,"code"),e(333,"--gridSystemPullMaxWidth"),t(),e(334,": 480px (valor padr\xE3o)"),t(),i(335,"li")(336,"code"),e(337,"--gidSystemOffsetMaxWidth"),t(),e(338,": 480px (valor padr\xE3o)"),t()(),i(339,"p"),e(340,"Nos arquivos de "),i(341,"code"),e(342,"grid-system"),t(),e(343," do "),i(344,"code"),e(345,"po-style"),t(),e(346,", a regra de breakpoint est\xE1 escrita conforme modelo:"),t(),i(347,"pre")(348,"code",25),e(349,`@media (min-width: var(--gridSystemMdMinWidth)) and (max-width: var(--gridSystemMdMaxWidth)){...}
`),t()(),i(350,"p"),e(351,"No exemplo acima est\xE1 demonstrado o formato da regra de breakpoint para "),i(352,"code"),e(353,"gridsystem-md"),t(),e(354,"."),t(),i(355,"p"),e(356,"Para o desenvolvedor customizar a regra do grid-system acima, poder\xE1 utilizar o servi\xE7o PoMediaQueryService na inicializa\xE7\xE3o do seu app, informando a regra e os respectivos valores, conforme o exemplo abaixo:"),t(),i(357,"pre")(358,"code",26),e(359,`const tokens: PoMediaQueryTokens =  {
 *     sm: {
 *      gridSystemSmMaxWidth: '1023px'
 *      },
 *     md: {
 *      gridSystemMdMinWidth: '1024px',
 *      gridSystemMdMaxWidth: '1366px'
 *     },
 *     lg: {
 *      gridSystemLgMinWidth: '1367px',
 *      gridSystemLgMaxWidth: '9999px'
 *     }
 *    };

this.styleService.updateTokens(tokensMediaQueries);
`),t()(),i(360,"p"),e(361,"A seguir segue a rela\xE7\xE3o das regras de breakpoints do grid-system caso necessite customiz\xE1-las:"),t(),i(362,"div",27)(363,"div",28)(364,"table",29)(365,"thead")(366,"tr",30)(367,"th",31),e(368,"Grid-System"),t(),i(369,"th",31),e(370,"Regra de breakpoint"),t()()(),i(371,"tbody")(372,"tr",32)(373,"td",33),e(374,"po-grid-system-sm"),t(),i(375,"td",33),e(376,"(max-width: var(--gridSystemSmMaxWidth))"),t()(),i(377,"tr",32)(378,"td",33),e(379,"po-grid-system-md"),t(),i(380,"td",33),e(381,"(min-width: var(--gridSystemMdMinWidth)) and (max-width: var(--gridSystemMdMaxWidth))"),t()(),i(382,"tr",32)(383,"td",33),e(384,"po-grid-system-lg"),t(),i(385,"td",33),e(386,"(min-width: var(--gridSystemLgMinWidth)) and (max-width: var(--gridSystemLgMaxWidth))"),t()(),i(387,"tr",32)(388,"td",33),e(389,"po-grid-system-xl"),t(),i(390,"td",33),e(391,"(min-width: var(--gridSystemXlMinWidth))"),t()(),i(392,"tr",32)(393,"td",33),e(394,"po-grid-system-pull"),t(),i(395,"td",33),e(396,"(max-width: var(--gridSystemPullMaxWidth))"),t()(),i(397,"tr",32)(398,"td",33),e(399,"po-grid-system-offset"),t(),i(400,"td",33),e(401,"(min-width: var(--gridSystemOffsetMaxWidth)) and (max-width: var(--gridSystemOffsetMaxWidth))"),t()()()()()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var W=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:287,vars:0,consts:[["p-title","Espa\xE7amento",1,"guides","app-portal"],["href","/guides/how-install"],[1,"guides-spacing-sample-container","po-mt-1","po-mb-1"],[1,"guides-spacing"],[1,"po-m-5"],[1,"po-ml-5"],[1,"po-ml-md-5"],[1,"po-ml-lg-5"],[1,"po-ml-5","po-mr-5"],[1,"po-ml-md-5","po-ml-xl-0"],[1,"language-html"],["href","https://www.w3schools.com/cssref/pr_margin.asp"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"p"),e(2,"O PO conta com um set de classes CSS utilit\xE1rias para modifica\xE7\xE3o do espa\xE7amento entre elementos HTML."),t(),i(3,"h2"),e(4,"Como funciona"),t(),i(5,"p"),e(6,"Na composi\xE7\xE3o de telas \xE9 eventual o ajuste do espa\xE7amento entre os elementos adjacentes envolvidos. Exemplos disso s\xE3o vistos quando trabalha-se responsivamente um grupo de elementos, como "),i(7,"em"),e(8,"widgets"),t(),e(9," (po-widget) ou linhas de um "),i(10,"em"),e(11,"grid system"),t(),e(12," (po-row)."),t(),i(13,"p"),e(14,"H\xE1 cinco dimens\xF5es dispon\xEDveis para defini\xE7\xE3o de "),i(15,"strong"),e(16,"margin"),t(),e(17," e tamb\xE9m para "),i(18,"strong"),e(19,"padding"),t(),e(20,". A unidade de medida utilizada para elas no CSS \xE9 a REM. Basicamente, a REM sempre ter\xE1 o valor do contexto do ROOT, ou seja, o valor de font-size definido em "),i(21,"em"),e(22,"body"),t(),e(23,". Considerando que "),i(24,"code"),e(25,"font-family: 16px"),t(),e(26," \xE9 o padr\xE3o no PO, ent\xE3o "),i(27,"code"),e(28,"margin: 1rem"),t(),e(29," tamb\xE9m equivale a 16px. As variantes das classes de margem e padding v\xE3o de 0.5rem (8px) a 2.5rem (40px)."),t(),i(30,"h2"),e(31,"Defini\xE7\xF5es"),t(),i(32,"p"),e(33,"Os nomes das classes usam o formato: "),t(),i(34,"ul")(35,"li")(36,"code"),e(37,"po-<propriedade>-<tamanho-espa\xE7amento>"),t(),e(38," para defini\xE7\xE3o em todos os lados do elemento. Por exemplo: "),i(39,"code"),e(40,"po-m-1"),t(),e(41,"; "),t(),i(42,"li")(43,"code"),e(44,"po-<propriedade><lado>-<tamanho-espa\xE7amento>"),t(),e(45," para apenas um dos lados. Por exemplo: "),i(46,"code"),e(47,"po-ml-1"),t(),e(48,";"),t(),i(49,"li")(50,"code"),e(51,"po-<propriedade><lado>-<tamanho-tela>-<tamanho-espa\xE7amento>"),t(),e(52," para tamanhos espec\xEDficos de telas. Por exemplo: "),i(53,"code"),e(54,"po-ml-md-1"),t(),e(55,"."),t()(),i(56,"p"),e(57,"As defini\xE7\xF5es de propridades s\xE3o:"),t(),i(58,"ul")(59,"li")(60,"code"),e(61,"m"),t(),e(62," - para classes de ajuste de "),i(63,"code"),e(64,"margin"),t(),e(65,";"),t(),i(66,"li")(67,"code"),e(68,"p"),t(),e(69," - para classes de ajuste de "),i(70,"code"),e(71,"padding"),t(),e(72,"."),t()(),i(73,"p"),e(74,"As defini\xE7\xF5es de lados s\xE3o:"),t(),i(75,"ul")(76,"li")(77,"code"),e(78,"t"),t(),e(79," - para ajustes de "),i(80,"code"),e(81,"margin-top"),t(),e(82," ou "),i(83,"code"),e(84,"padding-top"),t(),e(85,";"),t(),i(86,"li")(87,"code"),e(88,"r"),t(),e(89," - para ajustes de "),i(90,"code"),e(91,"margin-right"),t(),e(92," ou "),i(93,"code"),e(94,"padding-right"),t(),e(95,";"),t(),i(96,"li")(97,"code"),e(98,"b"),t(),e(99," - para ajustes de "),i(100,"code"),e(101,"margin-bottom"),t(),e(102," ou "),i(103,"code"),e(104,"padding-bottom"),t(),e(105,";"),t(),i(106,"li")(107,"code"),e(108,"l"),t(),e(109," - para ajustes de "),i(110,"code"),e(111,"margin-left"),t(),e(112," ou "),i(113,"code"),e(114,"padding-left"),t(),e(115,";"),t(),i(116,"li")(117,"em"),e(118,"Para todos os lados basta ignorar essa defini\xE7\xE3o"),t(),e(119,";"),t()(),i(120,"p"),e(121,"As defini\xE7\xF5es de tamanho de tela s\xE3o:"),t(),i(122,"ul")(123,"li")(124,"code"),e(125,"sm"),t(),e(126," - para telas com tamanho m\xE1ximo de "),i(127,"code"),e(128,"480px"),t(),e(129,";"),t(),i(130,"li")(131,"code"),e(132,"md"),t(),e(133," - para telas com tamanho a partir de "),i(134,"code"),e(135,"481px"),t(),e(136,";"),t(),i(137,"li")(138,"code"),e(139,"lg"),t(),e(140," - para telas com tamanho a partir de "),i(141,"code"),e(142,"961px"),t(),e(143,";"),t(),i(144,"li")(145,"code"),e(146,"xl"),t(),e(147," - para telas com tamanho a partir de "),i(148,"code"),e(149,"1367px"),t(),e(150,"."),t()(),i(151,"p"),e(152,"As defini\xE7\xF5es de tamanhos dispon\xEDveis s\xE3o:"),t(),i(153,"ul")(154,"li")(155,"code"),e(156,"0"),t(),e(157," - "),i(158,"code"),e(159,"margin"),t(),e(160," ou "),i(161,"code"),e(162,"padding"),t(),e(163," com valor igual a "),i(164,"code"),e(165,"0"),t(),e(166,"; "),t(),i(167,"li")(168,"code"),e(169,"1"),t(),e(170," - "),i(171,"code"),e(172,"margin"),t(),e(173," ou "),i(174,"code"),e(175,"padding"),t(),e(176," com valor igual a "),i(177,"code"),e(178,"8px"),t(),e(179,"; "),t(),i(180,"li")(181,"code"),e(182,"2"),t(),e(183," - "),i(184,"code"),e(185,"margin"),t(),e(186," ou "),i(187,"code"),e(188,"padding"),t(),e(189," com valor igual a "),i(190,"code"),e(191,"16px"),t(),e(192,"; "),t(),i(193,"li")(194,"code"),e(195,"3"),t(),e(196," - "),i(197,"code"),e(198,"margin"),t(),e(199," ou "),i(200,"code"),e(201,"padding"),t(),e(202," com valor igual a "),i(203,"code"),e(204,"24px"),t(),e(205,"; "),t(),i(206,"li")(207,"code"),e(208,"4"),t(),e(209," - "),i(210,"code"),e(211,"margin"),t(),e(212," ou "),i(213,"code"),e(214,"padding"),t(),e(215," com valor igual a "),i(216,"code"),e(217,"32px"),t(),e(218,"; "),t(),i(219,"li")(220,"code"),e(221,"5"),t(),e(222," - "),i(223,"code"),e(224,"margin"),t(),e(225," ou "),i(226,"code"),e(227,"padding"),t(),e(228," com valor igual a "),i(229,"code"),e(230,"40px"),t(),e(231,";"),t()(),i(232,"blockquote")(233,"p"),e(234,"Estas classes podem ser usadas instalando o "),i(235,"code"),e(236,"@po-ui/style"),t(),e(237," do "),i(238,"strong"),e(239,"PO"),t(),e(240,". Veja mais em "),i(241,"a",1),e(242,"Como instalar o PO"),t(),e(243,"."),t()(),i(244,"h2"),e(245,"Exemplos"),t(),i(246,"p"),e(247,"Alguns exemplos de aplica\xE7\xE3o das classes:"),t(),i(248,"div",2)(249,"div",3)(250,"div",4),e(251,"po-m-5"),t()()(),i(252,"div",2)(253,"div",3)(254,"div",5),e(255,"po-ml-5"),t()()(),i(256,"div",2)(257,"div",3)(258,"div",6),e(259,"po-ml-md-5"),t()()(),i(260,"div",2)(261,"div",3)(262,"div",7),e(263,"po-ml-lg-5"),t()()(),i(264,"div",2)(265,"div",3)(266,"div",8),e(267,"po-ml-5 po-mr-5"),t()()(),i(268,"div",2)(269,"div",3)(270,"div",9),e(271,"po-ml-md-5 po-ml-xl-0"),t()()(),i(272,"pre")(273,"code",10),e(274,`<div class="po-m-5">po-m-5</div>
<div class="po-ml-5">po-ml-5</div>
<div class="po-ml-md-5">po-ml-md-5</div>
<div class="po-ml-lg-5">po-ml-lg-5</div>
<div class="po-ml-5 po-mr-5">po-ml-5 po-mr-5</div>
<div class="po-ml-md-5 po-ml-xl-0">po-ml-md-5 po-ml-xl-0</div>
`),t()(),i(275,"blockquote")(276,"p"),e(277,"Quando duas margens verticais entrarem em contato entre si, ocorrer\xE1 um "),i(278,"a",11),e(279,"colapso de margem"),t(),e(280,". Se uma margem for maior que a outra, esta sobrescrever\xE1 o valor da menor, sobrando apenas a defini\xE7\xE3o de margem com maior valor."),t()(),i(281,"blockquote")(282,"p"),e(283,"\xC9 considerada uma boa pr\xE1tica de CSS trabalhar, sempre que poss\xEDvel, apenas com defini\xE7\xF5es de "),i(284,"code"),e(285,"margin-bottom"),t(),e(286," para espa\xE7amento entre elementos adjacentes."),t()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var Q=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:122,vars:0,consts:[["p-title","Personalizando o Tema Padr\xE3o com Tokens CSS",1,"guides","app-portal"],["href","guides/theme-service"],[1,"language-json"],[1,"language-css"],["src","./assets/graphics/theme/button-green-and-black.png","alt","Componente Button com a cor preta."],["src","./assets/graphics/theme/components-custom-colors.png","alt",`Exemplo dos componentes com as cores customizadas. Um bot\xE3o azul, o componentes Tabs est\xE1 com t\xEDtulo
verde e o scroll da p\xE1gina na cor vermelha.`],["href","https://doc.animaliads.io/docs/components/button/#live-demo"],["href","https://caniuse.com/#search=CSS%20Variables"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"blockquote")(2,"p")(3,"strong"),e(4,"\u26A0\uFE0F Atualiza\xE7\xE3o Importante para Vers\xF5es 18+"),t(),n(5,"br"),e(6,"A partir da vers\xE3o 18.X.X do PO-UI, recomendamos "),i(7,"strong"),e(8,"fortemente"),t(),e(9," a utiliza\xE7\xE3o do "),i(10,"code"),e(11,"PoThemeService"),t(),e(12," para todas as customiza\xE7\xF5es de temas, incluindo:"),t(),i(13,"ul")(14,"li"),e(15,"Tokens globais (cores, tipografia, espa\xE7amentos) "),t(),i(16,"li"),e(17,"Estilos espec\xEDficos por componente "),t(),i(18,"li"),e(19,"Gerenciamento de dark/light mode "),t(),i(20,"li"),e(21,"Controle de acessibilidade (AA/AAA)"),t()(),i(22,"p")(23,"strong"),e(24,"Benef\xEDcios:"),t(),n(25,"br"),e(26,"\u2705 Maior consist\xEAncia visual"),n(27,"br"),e(28,"\u2705 Manuten\xE7\xE3o simplificada"),n(29,"br"),e(30,"\u2705 Transi\xE7\xF5es suaves entre temas"),n(31,"br"),e(32,"\u2705 Suporte integrado a acessibilidade "),t(),i(33,"p"),e(34,"\u{1F4DA} "),i(35,"a",1),e(36,"Guia completo de Customiza\xE7\xE3o de Temas"),t()()(),i(37,"p"),e(38,"A partir da vers\xE3o 1.9.0, o "),i(39,"strong"),e(40,"PO UI"),t(),e(41," oferece a flexibilidade de personaliza\xE7\xE3o do tema padr\xE3o. Voc\xEA pode ajustar v\xE1rias propriedades como as cores, fonte, tamanho da fonte entre outros. Para isso, basta modificar os valores das vari\xE1veis utilizadas no CSS do tema padr\xE3o."),t(),i(42,"h3"),e(43,"Como o tema do PO UI funciona"),t(),i(44,"p"),e(45,`Se voc\xEA j\xE1 tem uma aplica\xE7\xE3o que est\xE1 usando o tema padr\xE3o do PO UI, voc\xEA deve ter seu arquivo
`),i(46,"code"),e(47,"angular.json"),t(),e(48," configurado da seguinte maneira."),t(),i(49,"pre")(50,"code",2),e(51,`"styles": [
  // Arquivo com o tema do PO UI com as vari\xE1veis "compiladas"
  "node_modules/@po-ui/style/css/po-theme-default.min.css", 
  "src/styles.css"
],
`),t()(),i(52,"p"),e(53,"Essa configura\xE7\xE3o usa o arquivo CSS minificado e "),i(54,"em"),e(55,'"compilado"'),t(),e(56,`, ou seja, as vari\xE1veis do CSS foram
substitu\xEDdas pelos valores hexadecimais correspondentes das cores usadas (entre outras coisas). Na pr\xE1tica e resumidamente falando, o que aconteceu com esse arquivo foi o seguinte:`),t(),i(57,"pre")(58,"code",3),e(59,`/* Isso "compilando" ... */
po-button {
  --color: var(--color-action-default);
  --background-color: var(--color-transparent);
}

/* ... vira isso. */
.po-button{background-color: transparent;color: #753399;}
`),t()(),i(60,"h3"),e(61,"Configurando sua aplica\xE7\xE3o para permitir personaliza\xE7\xE3o abrangente"),t(),i(62,"p"),e(63,"Para possibilitar uma personaliza\xE7\xE3o abrangente, o "),i(64,"em"),e(65,"package"),t(),i(66,"code"),e(67,"@po-ui/style"),t(),e(68," agora disponibiliza os arquivos contendo as vari\xE1veis CSS, bem como o arquivo de estilo sem a "),i(69,"em"),e(70,'"compila\xE7\xE3o"'),t(),e(71," das vari\xE1veis. Isso permite n\xE3o apenas a modifica\xE7\xE3o das cores, mas tamb\xE9m de outras propriedades via tokens. Para realizar essa configura\xE7\xE3o em seu projeto, \xE9 necess\xE1rio carregar esses novos arquivos, substituindo o arquivo anterior que restringia a modifica\xE7\xE3o abrangente das cores."),t(),i(72,"pre")(73,"code",2),e(74,`"styles": [
  // Arquivo de vari\xE1veis (tema padr\xE3o)
  "node_modules/@po-ui/style/css/po-theme-default-variables.min.css",
  // Arquivo com os estilos sem as vari\xE1veis "compiladas"
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),t()(),i(75,"blockquote")(76,"p"),e(77,"S\xF3 isso n\xE3o vai fazer diferen\xE7a no seu projeto, as cores padr\xF5es ainda ser\xE3o mantidas."),t()(),i(78,"h3"),e(79,"Customizando Estilos no Seu Projeto"),t(),i(80,"p"),e(81,`Para personalizar os estilos no seu projeto Angular, voc\xEA pode criar um novo arquivo CSS ou editar um existente e
adicionar as seguintes linhas de c\xF3digo:`),t(),i(82,"pre")(83,"code",3),e(84,`po-button {
    --color: rgb(43, 215, 60);
    --border-radius: 12px;
    --font-size: 16px;
    --background-color: black;
}
`),t()(),i(85,"p"),e(86,"S\xF3 com isso j\xE1 conseguimos dar uma nova cara para os nossos bot\xF5es."),t(),i(87,"p"),n(88,"img",4),t(),i(89,"p"),e(90,"Caso voc\xEA queira customizar todas as cores \xE9 poss\xEDvel usar algumas das vari\xE1veis globais:"),t(),i(91,"pre")(92,"code",3),e(93,`:root {
  --color-brand-01-base: red;
  --color-brand-02-base: green;
  --color-brand-03-base: blue;
}
`),t()(),i(94,"p"),n(95,"img",5),t(),i(96,"p"),e(97,"Com essas personaliza\xE7\xF5es, voc\xEA ter\xE1 controle n\xE3o apenas sobre as cores, mas tamb\xE9m sobre outros aspectos visuais dos componentes e templates em sua aplica\xE7\xE3o que utilizam o PO UI."),t(),i(98,"blockquote")(99,"p"),e(100,"Para descobrir quais vari\xE1veis voc\xEA pode personalizar, consulte o arquivo "),i(101,"code"),e(102,"po-theme-default-variables.css"),t(),e(103," na pasta "),i(104,"code"),e(105,"node_modules/@po-ui/style/css"),t(),e(106,`, L\xE1, voc\xEA
encontrar\xE1 uma lista completa de todas as vari\xE1veis utilizadas pelo tema padr\xE3o. Voc\xEA tamb\xE9m pode consultar a documenta\xE7\xE3o de cada componente no pr\xF3prio portal.`),t()(),i(107,"blockquote")(108,"p"),e(109,"Para customiza\xE7\xE3o do componenete "),i(110,"code"),e(111,"po-button"),t(),e(112," verificar "),i(113,"a",6),e(114,"vari\xE1veis customizaveis"),t(),e(115," na aba de customiza\xE7\xE3o."),t()(),i(116,"blockquote")(117,"p"),e(118,"Aten\xE7\xE3o: Para saber quais browsers d\xE3o suporte a vari\xE1veis voc\xEA pode consultar a ferramenta "),i(119,"a",7),e(120,"Can I use"),t(),e(121,"."),t()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var X=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:378,vars:0,consts:[["p-title","Tipografia",1,"guides","app-portal"],[1,"language-html"],[1,"po-font-text"],[1,"po-row"],[1,"po-md-8","po-lg-6","po-offset-md-2","po-offset-lg-3","po-offset-xl-3","po-shadow-card"],[1,"po-font-display"],[1,"po-sm-6"],[1,"po-font-text-large-bold"],[1,"po-font-large"],[1,"po-md-12","po-text-center"],[1,"po-font-title"],[1,"po-font-subtitle"],[1,"po-font-text-large"],[1,"po-font-text-bold"],[1,"po-font-text-uppercase"],[1,"po-font-text-small"],[1,"po-font-text-small-bold"],[1,"po-font-text-smaller"]],template:function(o,s){o&1&&(i(0,"po-page-default",0)(1,"p"),e(2,"O PO disponibiliza as fontes usadas pelos componentes, essas fontes foram disponibilizadas no Style Guide pela equipe de UX."),t(),i(3,"h3"),e(4,"Como Usar?"),t(),i(5,"pre")(6,"code",1),e(7,`<font class="po-font-text">Texto usado pelo PO</font>
`),t()(),i(8,"p")(9,"font",2),e(10,"Texto usado pelo PO"),t()(),i(11,"h3"),e(12,"Tipos Dispon\xEDveis"),t(),i(13,"div",3)(14,"div",4)(15,"div",3)(16,"font",5),e(17,"Display"),t()(),n(18,"hr"),i(19,"div",3)(20,"div",6)(21,"font",7),e(22,"Typeface:"),t()(),i(23,"div",6)(24,"font",8),e(25,"NunitoSans-ExtraLight"),t()()(),i(26,"div",3)(27,"div",6)(28,"font",7),e(29,"Font-size:"),t()(),i(30,"div",6)(31,"font",8),e(32,"50"),t()()(),i(33,"div",3)(34,"div",6)(35,"font",7),e(36,"Line-height:"),t()(),i(37,"div",6)(38,"font",8),e(39,"64"),t()()(),i(40,"div",3)(41,"div",9)(42,"font",7),e(43,".po-font-display"),t()()()()(),n(44,"br"),i(45,"div",3)(46,"div",4)(47,"div",3)(48,"font",10),e(49,"Title"),t()(),n(50,"hr"),i(51,"div",3)(52,"div",6)(53,"font",7),e(54,"Typeface:"),t()(),i(55,"div",6)(56,"font",8),e(57,"NunitoSans-ExtraLight"),t()()(),i(58,"div",3)(59,"div",6)(60,"font",7),e(61,"Font-size:"),t()(),i(62,"div",6)(63,"font",8),e(64,"34"),t()()(),i(65,"div",3)(66,"div",6)(67,"font",7),e(68,"Line-height:"),t()(),i(69,"div",6)(70,"font",8),e(71,"48"),t()()(),i(72,"div",3)(73,"div",9)(74,"font",7),e(75,".po-font-title"),t()()()()(),n(76,"br"),i(77,"div",3)(78,"div",4)(79,"div",3)(80,"font",11),e(81,"Subtitle"),t()(),n(82,"hr"),i(83,"div",3)(84,"div",6)(85,"font",7),e(86,"Typeface:"),t()(),i(87,"div",6)(88,"font",8),e(89,"NunitoSans"),t()()(),i(90,"div",3)(91,"div",6)(92,"font",7),e(93,"Font-size:"),t()(),i(94,"div",6)(95,"font",8),e(96,"24"),t()()(),i(97,"div",3)(98,"div",6)(99,"font",7),e(100,"Line-height:"),t()(),i(101,"div",6)(102,"font",8),e(103,"32"),t()()(),i(104,"div",3)(105,"div",9)(106,"font",7),e(107,".po-font-subtitle"),t()()()()(),n(108,"br"),i(109,"div",3)(110,"div",4)(111,"div",3)(112,"font",12),e(113,"Text Large"),t()(),n(114,"hr"),i(115,"div",3)(116,"div",6)(117,"font",7),e(118,"Typeface:"),t()(),i(119,"div",6)(120,"font",8),e(121,"NunitoSans"),t()()(),i(122,"div",3)(123,"div",6)(124,"font",7),e(125,"Font-size:"),t()(),i(126,"div",6)(127,"font",8),e(128,"16"),t()()(),i(129,"div",3)(130,"div",6)(131,"font",7),e(132,"Line-height:"),t()(),i(133,"div",6)(134,"font",8),e(135,"24"),t()()(),i(136,"div",3)(137,"div",9)(138,"font",7),e(139,".po-font-text-large"),t()()()()(),n(140,"br"),i(141,"div",3)(142,"div",4)(143,"div",3)(144,"font",7),e(145,"Text Large Bold"),t()(),n(146,"hr"),i(147,"div",3)(148,"div",6)(149,"font",7),e(150,"Typeface:"),t()(),i(151,"div",6)(152,"font",8),e(153,"NunitoSans-Bold"),t()()(),i(154,"div",3)(155,"div",6)(156,"font",7),e(157,"Font-size:"),t()(),i(158,"div",6)(159,"font",8),e(160,"16"),t()()(),i(161,"div",3)(162,"div",6)(163,"font",7),e(164,"Line-height:"),t()(),i(165,"div",6)(166,"font",8),e(167,"24"),t()()(),i(168,"div",3)(169,"div",9)(170,"font",7),e(171,".po-font-text-large-bold"),t()()()()(),n(172,"br"),i(173,"div",3)(174,"div",4)(175,"div",3)(176,"font",2),e(177,"Text"),t()(),n(178,"hr"),i(179,"div",3)(180,"div",6)(181,"font",7),e(182,"Typeface:"),t()(),i(183,"div",6)(184,"font",8),e(185,"NunitoSans"),t()()(),i(186,"div",3)(187,"div",6)(188,"font",7),e(189,"Font-size:"),t()(),i(190,"div",6)(191,"font",8),e(192,"14"),t()()(),i(193,"div",3)(194,"div",6)(195,"font",7),e(196,"Line-height:"),t()(),i(197,"div",6)(198,"font",8),e(199,"24"),t()()(),i(200,"div",3)(201,"div",9)(202,"font",7),e(203,".po-font-text"),t()()()()(),n(204,"br"),i(205,"div",3)(206,"div",4)(207,"div",3)(208,"font",13),e(209,"Text Bold"),t()(),n(210,"hr"),i(211,"div",3)(212,"div",6)(213,"font",7),e(214,"Typeface:"),t()(),i(215,"div",6)(216,"font",8),e(217,"NunitoSans-Bold"),t()()(),i(218,"div",3)(219,"div",6)(220,"font",7),e(221,"Font-size:"),t()(),i(222,"div",6)(223,"font",8),e(224,"14"),t()()(),i(225,"div",3)(226,"div",6)(227,"font",7),e(228,"Line-height:"),t()(),i(229,"div",6)(230,"font",8),e(231,"24"),t()()(),i(232,"div",3)(233,"div",9)(234,"font",7),e(235,".po-font-text-bold"),t()()()()(),n(236,"br"),i(237,"div",3)(238,"div",4)(239,"div",3)(240,"font",14),e(241,"Text Uppercase"),t()(),n(242,"hr"),i(243,"div",3)(244,"div",6)(245,"font",7),e(246,"Typeface:"),t()(),i(247,"div",6)(248,"font",8),e(249,"NunitoSans-Bold"),t()()(),i(250,"div",3)(251,"div",6)(252,"font",7),e(253,"Font-size:"),t()(),i(254,"div",6)(255,"font",8),e(256,"14"),t()()(),i(257,"div",3)(258,"div",6)(259,"font",7),e(260,"Line-height:"),t()(),i(261,"div",6)(262,"font",8),e(263,"24"),t()()(),i(264,"div",3)(265,"div",6)(266,"font",7),e(267,"Transform:"),t()(),i(268,"div",6)(269,"font",8),e(270,"Uppercase"),t()()(),i(271,"div",3)(272,"div",9)(273,"font",7),e(274,".po-font-text-uppercase"),t()()()()(),n(275,"br"),i(276,"div",3)(277,"div",4)(278,"div",3)(279,"font",15),e(280,"Text Small"),t()(),n(281,"hr"),i(282,"div",3)(283,"div",6)(284,"font",7),e(285,"Typeface:"),t()(),i(286,"div",6)(287,"font",8),e(288,"NunitoSans"),t()()(),i(289,"div",3)(290,"div",6)(291,"font",7),e(292,"Font-size:"),t()(),i(293,"div",6)(294,"font",8),e(295,"12"),t()()(),i(296,"div",3)(297,"div",6)(298,"font",7),e(299,"Line-height:"),t()(),i(300,"div",6)(301,"font",8),e(302,"16"),t()()(),i(303,"div",3)(304,"div",9)(305,"font",7),e(306,".po-font-text-small"),t()()()()(),n(307,"br"),i(308,"div",3)(309,"div",4)(310,"div",3)(311,"font",16),e(312,"Text Small Bold"),t()(),n(313,"hr"),i(314,"div",3)(315,"div",6)(316,"font",7),e(317,"Typeface:"),t()(),i(318,"div",6)(319,"font",8),e(320,"NunitoSans-Bold"),t()()(),i(321,"div",3)(322,"div",6)(323,"font",7),e(324,"Font-size:"),t()(),i(325,"div",6)(326,"font",8),e(327,"12"),t()()(),i(328,"div",3)(329,"div",6)(330,"font",7),e(331,"Line-height:"),t()(),i(332,"div",6)(333,"font",8),e(334,"16"),t()()(),i(335,"div",3)(336,"div",9)(337,"font",7),e(338,".po-font-text-small-bold"),t()()()()(),n(339,"br"),i(340,"div",3)(341,"div",4)(342,"div",3)(343,"font",17),e(344,"Text Smaller"),t()(),n(345,"hr"),i(346,"div",3)(347,"div",6)(348,"font",7),e(349,"Typeface:"),t()(),i(350,"div",6)(351,"font",8),e(352,"NunitoSans-Bold"),t()()(),i(353,"div",3)(354,"div",6)(355,"font",7),e(356,"Font-size:"),t()(),i(357,"div",6)(358,"font",8),e(359,"10"),t()()(),i(360,"div",3)(361,"div",6)(362,"font",7),e(363,"Line-height:"),t()(),i(364,"div",6)(365,"font",8),e(366,"16"),t()()(),i(367,"div",3)(368,"div",6)(369,"font",7),e(370,"Transform:"),t()(),i(371,"div",6)(372,"font",8),e(373,"Uppercase"),t()()(),i(374,"div",3)(375,"div",9)(376,"font",7),e(377,".po-font-text-smaller"),t()()()()()())},dependencies:[l],styles:["ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}"]})}return a})();var Z=[{path:"",component:F,children:[{path:"api",component:T},{path:"browser-support",component:O},{path:"deprecations",component:D},{path:"development-flow",component:M},{path:"getting-started",component:I},{path:"guide-charts",component:k},{path:"migration-poui-v2",component:w},{path:"migration-poui",component:j},{path:"migration-thf-to-po-ui",component:G},{path:"press-kit",component:U},{path:"releases",component:N},{path:"schematics",component:R},{path:"sync-fundamentals",component:_},{path:"sync-get-started",component:L},{path:"theme-service",component:B},{path:"create-theme-customization",component:H},{path:"grid-system",component:V},{path:"spacing",component:W},{path:"theme-customization",component:Q},{path:"typography",component:X},{path:"",pathMatch:"full",redirectTo:"getting-started"}]}],J=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=x({type:a});static \u0275inj=E({imports:[v.forChild(Z),v]})}return a})();var wt=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=x({type:a});static \u0275inj=E({imports:[z,J]})}return a})();export{wt as GuideModule};
