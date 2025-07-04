import{p as C}from"./chunk-R3BKLGLC.js";import{Ab as I,nb as h,zb as P}from"./chunk-TUTTJOS2.js";import{Ea as t,Fa as n,Ga as i,La as S,M as m,Nc as v,Pc as b,R as u,Rc as g,S as c,Xa as e,ha as E,ia as x,oa as d,pa as s,ya as p}from"./chunk-MIQUIDUB.js";var D=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-i18n-doc"]],standalone:!1,decls:850,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],["href","documentation/po-i18n#poI18nConfig"],["id","i18n-config"],["href","http://10.0.0.1:3000/api/translations/crm"],["href","http://10.0.0.1:3000/api/translations/general"],["href","http://10.0.0.1:3000/api/translations/crm?language=pt-br"],["href","http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text"],["href","documentation/po-i18n#setLanguage"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-i18n#i18n-config"],["href","https://angular.io/guide/observables"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],["id","get-language"],["href","documentation/po-i18n#poI18nConfigDefault"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],["href","/documentation/po-i18n#get-language"],["id","setLanguage"],[1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["id","poI18nConfigDefault"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["id","poI18nConfig"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","PoI18nConfigDefault"],["pan","",1,"docs-api-property-type","Array<string>"],["id","poI18nLanguage"],["href","https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"],["id","PoNumberSeparator"],["id","PoDateSeparator"]],template:function(a,l){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoI18nModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do servi\xE7o "),t(7,"code"),e(8,"PoI18nService"),n(),e(9," para controle de idiomas com PO."),n(),t(10,"p"),e(11,"Para utiliza\xE7\xE3o do servi\xE7o de idiomas "),t(12,"code"),e(13,"PoI18nService"),n(),e(14,`, deve-se importar este m\xF3dulo mesmo j\xE1 havendo importado
o m\xF3dulo `),t(15,"code"),e(16,"PoModule"),n(),e(17,". Na importa\xE7\xE3o deve ser invocado o m\xE9todo "),t(18,"code"),e(19,"config"),n(),e(20,`, informando um objeto que deve implementar
a interface `),t(21,"a",3)(22,"code"),e(23,"PoI18nConfig"),n()(),e(24," para configura\xE7\xE3o."),n(),t(25,"p"),i(26,"a",4),t(27,"strong"),e(28,"Exemplo de configura\xE7\xE3o do m\xF3dulo do i18n:"),n()(),t(29,"pre")(30,"code"),e(31,`import { PoI18nConfig } from '@po-ui/ng-components';

import { generalEn } from './i18n/general-en';
import { generalPt } from './i18n/general-pt';

const i18nConfig: PoI18nConfig = {
  default: {
    language: 'pt-BR',
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': generalPt,
      'en-US': generalEn
    },
    hcm: {
      url: 'http://10.1.1.1/api/translations/hcm/'
    }
  }
};

@NgModule({
  declarations: [],
  imports: [
    PoModule,
    PoI18nModule.config(i18nConfig)
  ],
  bootstrap: [AppComponent]
})
`),n()(),t(32,"p"),e(33,`Para cada contexto \xE9 poss\xEDvel definir a origem das literais, que podem ser de um servi\xE7o REST ou
de um objeto. Exemplo:`),n(),t(34,"p"),e(35,"Arquivo general-pt.ts"),n(),t(36,"pre")(37,"code"),e(38,`export const generalPt = {
 add: 'Adicionar',
 greeting: 'Prazer, {0} {1}',
 people: '{0} Pessoas,
 remove: 'Remover'
}
`),n()(),t(39,"p"),e(40,"Arquivo general-en.ts"),n(),t(41,"pre")(42,"code"),e(43,`export const generalEn = {
 add: 'Add',
 greeting: 'Nice to meet you, {0} {1}',
 people: '{0} People,
 remove: 'Remove'
}
`),n()(),t(44,"p")(45,"strong"),e(46,"Exemplo de configura\xE7\xE3o de contextos usando constantes externas:"),n()(),t(47,"pre")(48,"code"),e(49,`import { PoI18nConfig } from '@po-ui/ng-components';

import { generalEn } from './i18n/general-en';
import { generalPt } from './i18n/general-pt';

const i18nConfig: PoI18nConfig = {
  contexts: {
    general: {
      'pt-BR': generalPt, // constantes em arquivos separados
      'en-US': generalEn // constantes em arquivos separados
    },
    crm: {
      url: 'http://10.0.0.1:3000/api/translations/crm'
    }
  },
  default: {}
}
`),n()(),t(50,"p")(51,"strong"),e(52,"Exemplo de configura\xE7\xE3o de um contexto utilizando servi\xE7o:"),n()(),t(53,"p"),e(54,`Ao optar por utilizar um servi\xE7o para configura\xE7\xE3o de contexto, dever\xE1 ser definida a URL
espec\xEDfica do contexto, como nos exemplos abaixo:`),n(),t(55,"ul")(56,"li")(57,"a",5),e(58,"http://10.0.0.1:3000/api/translations/crm"),n()(),t(59,"li")(60,"a",6),e(61,"http://10.0.0.1:3000/api/translations/general"),n()()(),t(62,"p"),e(63,"Os idiomas e literais ser\xE3o automaticamente buscados com par\xE2metros na pr\xF3pria URL:"),n(),t(64,"ul")(65,"li")(66,"strong"),e(67,"language"),n(),e(68,`: o idioma ser\xE1 sempre passado por par\xE2metro e \xE9 recomendado utilizar uma das linguagens
suportadas pelo PO (`),t(69,"code"),e(70,"pt-br"),n(),e(71,", "),t(72,"code"),e(73,"en-us"),n(),e(74,", "),t(75,"code"),e(76,"es-es"),n(),e(77," ou "),t(78,"code"),e(79,"ru"),n(),e(80,")."),n(),t(81,"li")(82,"strong"),e(83,"literals"),n(),e(84,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),n()(),t(85,"p"),e(86,"Exemplos de requisi\xE7\xE3o:"),n(),t(87,"ul")(88,"li")(89,"a",7),e(90,"http://10.0.0.1:3000/api/translations/crm?language=pt-br"),n()(),t(91,"li")(92,"a",8),e(93,"http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text"),n()()(),t(94,"blockquote")(95,"p"),e(96,"Sempre que o idioma solicitado n\xE3o for encontrado, ser\xE1 buscado por "),t(97,"code"),e(98,"pt-br"),n(),e(99,"."),n()(),t(100,"p"),e(101,"Al\xE9m dos contextos, \xE9 poss\xEDvel definir as configura\xE7\xF5es "),t(102,"em"),e(103,"default"),n(),e(104,` do sistema na configura\xE7\xE3o do
m\xF3dulo utilizando a interface `),t(105,"a",3)(106,"code"),e(107,"PoI18nConfig"),n()(),e(108,":"),n(),t(109,"p")(110,"strong"),e(111,"Exemplo de padr\xF5es definidos:"),n()(),t(112,"pre")(113,"code"),e(114,`const i18nConfig: PoI18nConfig = {
  contexts: {
    general: { }
  },
  default: {
   language: 'pt-BR',
   context: 'general',
   cache: true
  }
}
`),n()(),t(115,"p")(116,"strong"),e(117,"Importante:"),n()(),t(118,"p"),e(119,"Recomenda-se que as defini\xE7\xF5es "),t(120,"em"),e(121,"default"),n(),e(122,` sejam realizadas apenas uma vez na aplica\xE7\xE3o,
preferencialmente no m\xF3dulo `),t(123,"code"),e(124,"AppModule"),n(),e(125,"."),n(),t(126,"p")(127,"strong"),e(128,"i18n com "),t(129,"em"),e(130,"Lazy loading"),n()()(),t(131,"p"),e(132,"Para aplica\xE7\xF5es que utilizem a abordagem de m\xF3dulos com carregamento "),t(133,"em"),e(134,"lazy loading"),n(),e(135,`, caso seja
definida outra configura\xE7\xE3o do `),t(136,"code"),e(137,"PoI18nModule"),n(),e(138,", deve-se atentar os seguintes detalhes:"),n(),t(139,"ul")(140,"li"),e(141,"Caso existam literais comuns na aplica\xE7\xE3o, estas devem ser reimportadas;"),n(),t(142,"li"),e(143,"N\xE3o defina outra "),t(144,"em"),e(145,"default language"),n(),e(146,` para este m\xF3dulo. Caso for definida, ser\xE1 sobreposta para
toda a aplica\xE7\xE3o;`),n(),t(147,"li"),e(148,"Caso precise de m\xF3dulos carregados via "),t(149,"em"),e(150,"lazy loading"),n(),e(151,` com linguagens diferentes, utilize o
m\xE9todo `),t(152,"a",9)(153,"code"),e(154,"setLanguage()"),n()(),e(155," disponibilizado pelo "),t(156,"code"),e(157,"PoI18nService"),n(),e(158,`
para definir a linguagem da aplica\xE7\xE3o e dos m\xF3dulos com as linguagens diferentes.`),n()()(),t(159,"h3",10),e(160,"Services"),n(),t(161,"h4",11)(162,"code",12),e(163,"PoI18nService"),n()(),t(164,"div",2)(165,"p"),e(166,"O servi\xE7o "),t(167,"code"),e(168,"PoI18nService"),n(),e(169," possibilita utilizar m\xFAltiplos idiomas e contextos na aplica\xE7\xE3o."),n(),t(170,"blockquote")(171,"p"),e(172,`Antes da utiliza\xE7\xE3o do servi\xE7o, \xE9 necess\xE1rio realizar a
`),t(173,"a",13),e(174,"importa\xE7\xE3o e configura\xE7\xE3o do m\xF3dulo "),t(175,"code"),e(176,"PoI18nModule"),n()(),e(177,"."),n()(),t(178,"p")(179,"strong"),e(180,"Utiliza\xE7\xE3o do servi\xE7o "),t(181,"code"),e(182,"PoI18nService"),n(),e(183,":"),n()(),t(184,"p"),e(185,`Para utilizar o servi\xE7o basta import\xE1-lo nos componentes que necessitarem de literais e fazer a inje\xE7\xE3o de
depend\xEAncia no construtor:`),n(),t(186,"pre")(187,"code"),e(188,`import { PoI18nService } from '@po-ui/ng-components';
...
constructor(private poI18nService: PoI18nService) { }
...
`),n()(),t(189,"p"),e(190,"Por fim realizar a busca pelas literais, inscrevendo-se no "),t(191,"a",14),e(192,"Observable"),n(),e(193,` pelo
m\xE9todo `),t(194,"code"),e(195,"getLiterals()"),n(),e(196,"."),n(),t(197,"blockquote")(198,"p"),e(199,"O m\xE9todo "),t(200,"code"),e(201,"getLiterals()"),n(),e(202," pode receber um objeto do tipo da interface "),t(203,"code"),e(204,"PoI18nLiterals"),n(),e(205,` como par\xE2metro,
por\xE9m, nenhuma das propriedades s\xE3o obrigat\xF3rias. Caso nenhum par\xE2metro seja passado, ser\xE3o buscadas
todas as literais do contexto definido com padr\xE3o, no idioma definido como padr\xE3o.`),n()(),t(206,"p"),e(207,"Exemplos de requisi\xE7\xE3o:"),n(),t(208,"pre")(209,"code"),e(210,`literals = {};
literalsEn = {};
literalsCrm = {};

constructor(private poI18nService: PoI18nService) {
  poI18nService.getLiterals()
    .subscribe((literals) => {
      this.literals = literals;
    });

  poI18nService.getLiterals({context: 'crm', literals: ['add', 'remove']})
    .subscribe((literals) => {
      this.literalsCrm = literals;
    });

  poI18nService.getLiterals({language: 'en-us'})
    .subscribe((literals) => {
      this.literalsEn = literals;
    });
}
`),n()(),t(211,"p"),e(212,`Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
seguinte c\xF3digo:`),n(),t(213,"pre"),c(),e(214,`{{ literals?.add }}
{{ literals?.remove }}
`),u(),n(),t(215,"p"),e(216,"Caso as literais contenham vari\xE1veis que precisem ser substitu\xEDdas, pode-se utilizar o "),t(217,"em"),e(218,"pipe"),n(),t(219,"code"),e(220,"poI18n"),n(),e(221,`.
\xC9 poss\xEDvel informar propriedades do componente como `),t(222,"code"),e(223,"name"),n(),e(224," e "),t(225,"code"),e(226,"nickname"),n(),e(227,` ou
informar o valor diretamente com "" ou n\xFAmero, conforme o exemplo abaixo:`),n(),t(228,"pre"),c(),e(229,`{{ literals?.people | poI18n:[120] }}
{{ literals?.greeting | poI18n:[name, nickname] }}
{{ literals?.greeting | poI18n:["Brad", "Green"] }}
`),u(),n(),t(230,"blockquote")(231,"p"),e(232,"\xC9 importante o uso do operador "),t(233,"code"),e(234,"?"),n(),e(235," (Elvis) para evitar erros enquanto as literais n\xE3o forem carregadas."),n()(),t(236,"h3"),e(237,"Teste unit\xE1rio"),n(),t(238,"p"),e(239,"Abaixo segue um exemplo de "),t(240,"em"),e(241,"setup"),n(),e(242," inicial de teste unit\xE1rio do "),t(243,"em"),e(244,"AppComponent"),n(),e(245," que utiliza o "),t(246,"code"),e(247,"PoI18nService"),n(),e(248,":"),n(),t(249,"blockquote")(250,"p"),e(251,"Aten\xE7\xE3o: n\xE3o declarar o "),t(252,"code"),e(253,"PoI18nService"),n(),e(254,` no providers do TestBed pois a biblioteca realiza a inje\xE7\xE3o de depend\xEAncia de forma din\xE2mica.
Se o servi\xE7o for declarado o teste n\xE3o far\xE1 a inje\xE7\xE3o e o teste apresentar\xE1 erros.`),n()(),t(255,"pre")(256,"code"),e(257,`import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PoI18nModule } from '@po-ui/ng-components';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const anotherPT = {
    text: 'texto',
    add: 'adicionar',
    remove: 'remover'
  };

  const generalPT = {
    text: 'texto',
    add: 'adicionar',
    remove: 'remover'
  };

  const config = {
    default: {
      language: 'pt-BR',
      context: 'general',
      cache: false
    },
    contexts: {
      general: {
        'pt-br': generalPT
      },
      another: {
        'pt-br': anotherPT
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule,
        PoI18nModule.config(config)
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));

});
`),n()()(),t(258,"h3",15),e(259,"M\xE9todos"),n(),t(260,"table",16)(261,"tr",17)(262,"th",18)(263,"div",19)(264,"h4")(265,"span",20),e(266," getLanguage "),n()()()()(),t(267,"tr",21)(268,"td",21)(269,"p"),i(270,"a",22),e(271,`
M\xE9todo que retorna o idioma padr\xE3o ativo.`),n(),t(272,"p"),e(273,"A busca deste idioma pelo m\xE9todo ser\xE1 feita na seguinte ordem:"),n(),t(274,"p"),e(275," 1 - o idioma que foi armazenado no "),t(276,"em"),e(277,"localStorage"),n(),e(278,", atrav\xE9s do m\xE9todo "),t(279,"a",9)(280,"code"),e(281,"setLanguage()"),n()(),e(282,"."),n(),t(283,"p"),e(284," 2 - o valor inserido no m\xF3dulo do i18n atrav\xE9s do par\xE2metro "),t(285,"code"),e(286,"config"),n(),e(287,`, sendo o idioma inserido na propriedade
`),t(288,"code"),e(289,"language"),n(),e(290," da interface "),t(291,"a",23)(292,"code"),e(293,"PoI18nConfigDefault"),n()(),e(294,"."),n(),t(295,"p"),e(296," 3 - o idioma do navegador utilizado."),n(),t(297,"blockquote")(298,"p"),e(299,"Caso o idioma do navegador n\xE3o seja suportado pelo PO ("),t(300,"code"),e(301,"pt"),n(),e(302,", "),t(303,"code"),e(304,"en"),n(),e(305,", "),t(306,"code"),e(307,"es"),n(),e(308," ou "),t(309,"code"),e(310,"ru"),n(),e(311,"), ser\xE1 retornado valor "),t(312,"code"),e(313,"pt"),n(),e(314,"."),n()()()()(),t(315,"h5")(316,"b"),e(317,"Retorno"),n()(),t(318,"table",24)(319,"tr",25)(320,"th",26),e(321,"Tipo"),n(),t(322,"th",26),e(323,"Descri\xE7\xE3o"),n()(),t(324,"tr",17)(325,"td",27)(326,"code",28),e(327,"string"),n()(),t(328,"td",21)(329,"p"),e(330,"sigla do idioma padr\xE3o."),n()()()(),i(331,"br"),t(332,"table",16)(333,"tr",17)(334,"th",18)(335,"div",19)(336,"h4")(337,"span",20),e(338," getShortLanguage "),n()()()()(),t(339,"tr",21)(340,"td",21)(341,"p"),e(342,`M\xE9todo que retorna o idioma padr\xE3o ativo, com somente a abrevia\xE7\xE3o do idioma (duas primeiras letras).
Por exemplo: "pt" ou "es".`),n(),t(343,"p"),e(344,"A busca deste idioma \xE9 baseada no m\xE9todo "),t(345,"a",29)(346,"strong"),e(347,"getLanguage()"),n()(),e(348,"."),n()()()(),t(349,"h5")(350,"b"),e(351,"Retorno"),n()(),t(352,"table",24)(353,"tr",25)(354,"th",26),e(355,"Tipo"),n(),t(356,"th",26),e(357,"Descri\xE7\xE3o"),n()(),t(358,"tr",17)(359,"td",27)(360,"code",28),e(361,"string"),n()(),t(362,"td",21)(363,"p"),e(364,"sigla do idioma padr\xE3o."),n()()()(),i(365,"br"),t(366,"table",16)(367,"tr",17)(368,"th",18)(369,"div",19)(370,"h4")(371,"span",20),e(372," setLanguage "),n()()()()(),t(373,"tr",21)(374,"td",21)(375,"p"),i(376,"a",30),e(377,`
M\xE9todo para alterar o idioma padr\xE3o do m\xF3dulo do i18n.`),n(),t(378,"p"),e(379,`Ao utilizar este m\xE9todo, o idioma ficar\xE1 gravado no armazenamento local do navegador, que ser\xE1 utilizado pelo
servi\xE7o do `),t(380,"code"),e(381,"i18n"),n(),e(382," para buscar as literais no idioma padr\xE3o."),n()()()(),t(383,"h5")(384,"b"),e(385,"Par\xE2metros"),n()(),t(386,"table",24)(387,"tr",25)(388,"th",26),e(389,"Nome"),n(),t(390,"th",26),e(391,"Tipo"),n(),t(392,"th",26),e(393,"Descri\xE7\xE3o"),n()(),t(394,"tr",17)(395,"td",31),e(396," language"),n(),t(397,"td",27)(398,"code",28),e(399," string "),n()(),t(400,"td",21)(401,"p"),e(402,"Sigla do idioma."),n(),t(403,"p"),e(404,`Esta sigla deve ser composta por duas letras representando o idioma,
podendo ser adicionado outras duas letras representando o pa\xEDs, por exemplo: `),t(405,"code"),e(406,"pt"),n(),e(407,", "),t(408,"code"),e(409,"pt-BR"),n(),e(410,", "),t(411,"code"),e(412,"pt-br"),n(),e(413,", "),t(414,"code"),e(415,"en"),n(),e(416," ou "),t(417,"code"),e(418,"en-US"),n(),e(419,"."),n(),t(420,"blockquote")(421,"p"),e(422,"Caso seja informado um valor diferente deste padr\xE3o, o mesmo ser\xE1 ignorado."),n()()()(),t(423,"tr",17)(424,"td",31),e(425," reload"),n(),t(426,"td",27)(427,"code",28),e(428," boolean "),n()(),t(429,"td",21)(430,"p"),e(431,"Indica se a p\xE1gina atual poder\xE1 ser recarregada ap\xF3s a altera\xE7\xE3o do idioma."),n(),t(432,"p"),e(433,"Este recurso pode ser \xFAtil para os usu\xE1rios que utilizam o m\xE9todo "),t(434,"code"),e(435,"getLiterals()"),n(),e(436,` do servi\xE7o do i18n para poder
buscar novamente as literais no novo idioma configurado.`),n()()()(),i(437,"br"),t(438,"h3"),e(439,"Interfaces"),n(),t(440,"h4",32)(441,"code",12),e(442,"PoI18nConfigDefault"),n()(),t(443,"div",2)(444,"p"),i(445,"a",33),n(),t(446,"p"),e(447,"Interface para a configura\xE7\xE3o padr\xE3o do m\xF3dulo PoI18nModule."),n()(),t(448,"h4",15),e(449,"Propriedades"),n(),t(450,"table",24)(451,"tr",25)(452,"th",26),e(453,"Nome"),n(),t(454,"th",26),e(455,"Tipo"),n(),t(456,"th",26),e(457,"Descri\xE7\xE3o"),n()(),t(458,"tr",17)(459,"td",31)(460,"div",19)(461,"span",20),e(462," cache"),i(463,"br"),n()()(),t(464,"td",27)(465,"code",34),e(466,"boolean"),n()(),t(467,"td",21)(468,"em")(469,"strong"),e(470,"(opcional)"),n()(),t(471,"p"),e(472,`Define se as literais buscadas no servi\xE7o dever\xE3o ser armazenadas no cache do
navegador, lembrando que cada navegador possui sua pr\xF3pria limita\xE7\xE3o de cache.`),n(),t(473,"p"),e(474,`Para contextos com grande quantidade de literais, recomenda-se o uso de constantes ao inv\xE9s de servi\xE7os, desta forma
n\xE3o ser\xE1 usado o cache do navegador.`),n(),t(475,"p"),e(476,"Por padr\xE3o n\xE3o utiliza."),n()()(),t(477,"tr",17)(478,"td",31)(479,"div",19)(480,"span",20),e(481," context"),i(482,"br"),n()()(),t(483,"td",27)(484,"code",35),e(485,"string"),n()(),t(486,"td",21)(487,"em")(488,"strong"),e(489,"(opcional)"),n()(),t(490,"p"),e(491,"Define o contexto que ser\xE1 buscado por padr\xE3o pelo servi\xE7o."),n(),t(492,"blockquote")(493,"p"),e(494,"Caso n\xE3o seja especificado ser\xE1 usado o primeiro contexto da lista de contextos."),n()()()(),t(495,"tr",17)(496,"td",31)(497,"div",19)(498,"span",20),e(499," language"),i(500,"br"),n()()(),t(501,"td",27)(502,"code",35),e(503,"string"),n()(),t(504,"td",21)(505,"em")(506,"strong"),e(507,"(opcional)"),n()(),t(508,"p"),e(509,"Idioma que ser\xE1 buscado por padr\xE3o pelo servi\xE7o."),n(),t(510,"p"),e(511,`Esta defini\xE7\xE3o somente ser\xE1 utilizada se n\xE3o tiver sido definido o idioma atrav\xE9s do m\xE9todo
`),t(512,"a",9)(513,"code"),e(514,"setLanguage()"),n()(),e(515,`. Caso nenhum dos dois tenha sido configurado, ser\xE1 utilizado
o idioma do navegador.`),n()()()(),t(516,"h4",32)(517,"code",12),e(518,"PoI18nConfig"),n()(),t(519,"div",2)(520,"p"),i(521,"a",36),n(),t(522,"p"),e(523,"Interface para a configura\xE7\xE3o do m\xF3dulo "),t(524,"code"),e(525,"PoI18nModule"),n(),e(526,"."),n()(),t(527,"h4",15),e(528,"Propriedades"),n(),t(529,"table",24)(530,"tr",25)(531,"th",26),e(532,"Nome"),n(),t(533,"th",26),e(534,"Tipo"),n(),t(535,"th",26),e(536,"Descri\xE7\xE3o"),n()(),t(537,"tr",17)(538,"td",31)(539,"div",19)(540,"span",20),e(541," contexts"),i(542,"br"),n()()(),t(543,"td",27)(544,"code",37),e(545,"object"),n()(),t(546,"td",21)(547,"p"),e(548,`Deve ser atribu\xEDdo a esta propriedade um objeto que contenha os contextos com os
idiomas suportados e suas respectivas tradu\xE7\xF5es literais,
como tamb\xE9m informar a propriedade `),t(549,"code"),e(550,"url"),n(),e(551," onde pode ser informado o servi\xE7o que retorne as literais traduzidas."),n(),t(552,"p"),e(553,`Portanto podemos utilizar constantes, onde devemos informar o nome do contexto recebendo um objeto com os
idiomas suportados e o arquivo de literais, por exemplo:`),n(),t(554,"pre")(555,"code"),e(556,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn
 }
...
`),n()(),t(557,"p"),e(558,"E como informado, podemos utilizar a propriedade "),t(559,"code"),e(560,"url"),n(),e(561,` que deve receber a URL do servi\xE7o que
retorne as literais traduzidas, por exemplo:`),n(),t(562,"pre")(563,"code"),e(564,`hcm: {
  url: 'http://localhost:3000/api/translations/hcm/'
}
`),n()(),t(565,"p"),e(566,`Ao optar por utilizar um servi\xE7o, dever\xE1 ser definida a URL espec\xEDfica do contexto,
como nos exemplos abaixo:`),n(),t(567,"pre")(568,"code"),e(569,`http://server:port/api/translations/crm
http://server:port/api/translations/general
`),n()(),t(570,"p"),e(571,"Os idiomas e literais ser\xE3o automaticamente buscados com par\xE2metros na pr\xF3pria URL:"),n(),t(572,"ul")(573,"li")(574,"code"),e(575,"language"),n(),e(576,`: o idioma ser\xE1 sempre passado por par\xE2metro, sendo recomendado a utiliza\xE7\xE3o do padr\xE3o suportado
pelos navegadores (`),t(577,"code"),e(578,"pt-br"),n(),e(579,", "),t(580,"code"),e(581,"en-us"),n(),e(582,");"),n(),t(583,"li")(584,"code"),e(585,"literals"),n(),e(586,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),n()(),t(587,"p"),e(588,"Exemplos de requisi\xE7\xE3o:"),n(),t(589,"pre")(590,"code"),e(591,`http://server:port/api/translations/crm?language=pt-br
http://server:port/api/translations/crm?language=pt-br&literals=add,remove,text
`),n()(),t(592,"blockquote")(593,"p"),e(594,"Sempre que o idioma solicitado n\xE3o for encontrado, ser\xE1 buscado por "),t(595,"code"),e(596,"pt-br"),n(),e(597,"."),n()(),t(598,"p"),e(599,`Existe tamb\xE9m a possibilidade de utilizar ambos, onde ser\xE1 feito a busca das literais nas constantes e depois efetua
a busca no servi\xE7o, com isso as constantes podem servir como `),t(600,"em"),e(601,"backup"),n(),e(602," caso o servi\xE7o esteja indispon\xEDvel, por exemplo:"),n(),t(603,"pre")(604,"code"),e(605,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn,
   url: 'http://localhost:3000/api/translations/hcm/'
 }
...
`),n()(),t(606,"blockquote")(607,"p"),e(608,"Caso a constante contenha alguma literal que o servi\xE7o n\xE3o possua ser\xE1 utilizado a literal da constante."),n()()()(),t(609,"tr",17)(610,"td",31)(611,"div",19)(612,"span",20),e(613," default"),i(614,"br"),n()()(),t(615,"td",27)(616,"code",38),e(617,"PoI18nConfigDefault"),n()(),t(618,"td",21)(619,"em")(620,"strong"),e(621,"(opcional)"),n()(),t(622,"p"),e(623,"Configura\xE7\xF5es padr\xF5es."),n()()()(),t(624,"h4",32)(625,"code",12),e(626,"PoI18nLiterals"),n()(),t(627,"div",2)(628,"p"),e(629,"Interface para o m\xE9todo "),t(630,"code"),e(631,"getLiterals()"),n(),e(632," do servi\xE7o PoI18nService."),n()(),t(633,"h4",15),e(634,"Propriedades"),n(),t(635,"table",24)(636,"tr",25)(637,"th",26),e(638,"Nome"),n(),t(639,"th",26),e(640,"Tipo"),n(),t(641,"th",26),e(642,"Descri\xE7\xE3o"),n()(),t(643,"tr",17)(644,"td",31)(645,"div",19)(646,"span",20),e(647," context"),i(648,"br"),n()()(),t(649,"td",27)(650,"code",35),e(651,"string"),n()(),t(652,"td",21)(653,"em")(654,"strong"),e(655,"(opcional)"),n()(),t(656,"p"),e(657,"Contexto utilizado na busca das literais."),n()()(),t(658,"tr",17)(659,"td",31)(660,"div",19)(661,"span",20),e(662," language"),i(663,"br"),n()()(),t(664,"td",27)(665,"code",35),e(666,"string"),n()(),t(667,"td",21)(668,"em")(669,"strong"),e(670,"(opcional)"),n()(),t(671,"p"),e(672,"Idioma a ser buscado."),n()()(),t(673,"tr",17)(674,"td",31)(675,"div",19)(676,"span",20),e(677," literals"),i(678,"br"),n()()(),t(679,"td",27)(680,"code",39),e(681,"Array<string>"),n()(),t(682,"td",21)(683,"em")(684,"strong"),e(685,"(opcional)"),n()(),t(686,"p"),e(687,"Lista das literais."),n()()()(),t(688,"h4",32)(689,"code",12),e(690,"PoLanguage"),n()(),t(691,"div",2)(692,"p"),i(693,"a",40),n(),t(694,"p"),e(695,"Interface para descri\xE7\xE3o das linguagens dispon\xEDveis no sistema."),n()(),t(696,"h4",15),e(697,"Propriedades"),n(),t(698,"table",24)(699,"tr",25)(700,"th",26),e(701,"Nome"),n(),t(702,"th",26),e(703,"Tipo"),n(),t(704,"th",26),e(705,"Descri\xE7\xE3o"),n()(),t(706,"tr",17)(707,"td",31)(708,"div",19)(709,"span",20),e(710," description"),i(711,"br"),n()()(),t(712,"td",27)(713,"code",35),e(714,"string"),n()(),t(715,"td",21)(716,"em")(717,"strong"),e(718,"(opcional)"),n()(),t(719,"p"),e(720,"Descri\xE7\xE3o do idioma"),n()()(),t(721,"tr",17)(722,"td",31)(723,"div",19)(724,"span",20),e(725," language"),i(726,"br"),n()()(),t(727,"td",27)(728,"code",35),e(729,"string"),n()(),t(730,"td",21)(731,"em")(732,"strong"),e(733,"(opcional)"),n()(),t(734,"p"),e(735,"C\xF3digo do idioma "),t(736,"a",41),e(737,"ISO 639-1"),n()(),t(738,"blockquote")(739,"p"),e(740,"Exemplo: 'pt','en'"),n()()()()(),t(741,"h4",32)(742,"code",12),e(743,"PoNumberSeparator"),n()(),t(744,"div",2)(745,"p"),i(746,"a",42),n(),t(747,"p"),e(748,"Interface para os separadores num\xE9ricos das linguagens dispon\xEDveis no sistema."),n()(),t(749,"h4",15),e(750,"Propriedades"),n(),t(751,"table",24)(752,"tr",25)(753,"th",26),e(754,"Nome"),n(),t(755,"th",26),e(756,"Tipo"),n(),t(757,"th",26),e(758,"Descri\xE7\xE3o"),n()(),t(759,"tr",17)(760,"td",31)(761,"div",19)(762,"span",20),e(763," language"),i(764,"br"),n()()(),t(765,"td",27)(766,"code",35),e(767,"string"),n()(),t(768,"td",21)(769,"em")(770,"strong"),e(771,"(opcional)"),n()(),t(772,"p"),e(773,"C\xF3digo do idioma "),t(774,"a",41),e(775,"ISO 639-1"),n()(),t(776,"blockquote")(777,"p"),e(778,"Exemplo: 'pt','en'"),n()()()(),t(779,"tr",17)(780,"td",31)(781,"div",19)(782,"span",20),e(783," separator"),i(784,"br"),n()()(),t(785,"td",27)(786,"code",35),e(787,"string"),n()(),t(788,"td",21)(789,"em")(790,"strong"),e(791,"(opcional)"),n()(),t(792,"p"),e(793,"Separador num\xE9rico"),n()()()(),t(794,"h4",32)(795,"code",12),e(796,"PoDateSeparator"),n()(),t(797,"div",2)(798,"p"),i(799,"a",43),n(),t(800,"p"),e(801,"Interface para o separador de data das linguagens dispon\xEDveis no sistema."),n()(),t(802,"h4",15),e(803,"Propriedades"),n(),t(804,"table",24)(805,"tr",25)(806,"th",26),e(807,"Nome"),n(),t(808,"th",26),e(809,"Tipo"),n(),t(810,"th",26),e(811,"Descri\xE7\xE3o"),n()(),t(812,"tr",17)(813,"td",31)(814,"div",19)(815,"span",20),e(816," locale"),i(817,"br"),n()()(),t(818,"td",27)(819,"code",35),e(820,"string"),n()(),t(821,"td",21)(822,"em")(823,"strong"),e(824,"(opcional)"),n()(),t(825,"p"),e(826,"C\xF3digo do locale "),t(827,"a",41),e(828,"ISO 639-1"),n()(),t(829,"blockquote")(830,"p"),e(831,"Exemplo: 'pt','en'"),n()()()(),t(832,"tr",17)(833,"td",31)(834,"div",19)(835,"span",20),e(836," separator"),i(837,"br"),n()()(),t(838,"td",27)(839,"code",35),e(840,"string"),n()(),t(841,"td",21)(842,"em")(843,"strong"),e(844,"(opcional)"),n()(),t(845,"p"),e(846,"Separador de data"),n(),t(847,"blockquote")(848,"p"),e(849,"Exemplo: '/','.','-'"),n()()()()()())},encapsulation:2})}return o})();var q=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(x(v),x(b))};static \u0275cmp=d({type:o,selectors:[["ng-component"]],standalone:!1,decls:5,vars:4,consts:[["p-title","I18n",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return l.changeTab("doc")}),i(3,"sample-po-i18n-doc"),n(),t(4,"po-tab",3),S("p-click",function(){return l.changeTab("web")}),n()()()),a&2&&(p("p-actions",l.actions),E(2),p("p-active",l.activeTab==="doc"),E(2),p("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[h,P,I,D],encapsulation:2})}return o})();var T=[{path:"",component:q}],z=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=s({type:o});static \u0275inj=m({imports:[g.forChild(T),g]})}return o})();var H=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=s({type:o});static \u0275inj=m({imports:[C,z]})}return o})();export{H as DocPoI18nModule};
