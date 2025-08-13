import{p as C}from"./chunk-MMZVQUBQ.js";import{Ab as I,nb as h,zb as P}from"./chunk-522XRIZO.js";import{Fa as t,Ga as n,Ha as i,M as m,Ma as S,Oc as v,Qc as b,R as u,S as c,Sc as g,Ya as e,ha as E,ia as x,oa as d,pa as s,ya as p}from"./chunk-WFKG4FNY.js";var D=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-i18n-doc"]],standalone:!1,decls:898,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],["href","documentation/po-i18n#poI18nConfig"],["id","i18n-config"],["href","http://10.0.0.1:3000/api/translations/crm"],["href","http://10.0.0.1:3000/api/translations/general"],["href","http://10.0.0.1:3000/api/translations/crm?language=pt-br"],["href","http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text"],["href","documentation/po-i18n#setLanguage"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-i18n#i18n-config"],["href","https://angular.io/guide/observables"],[1,"language-typescript"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],["id","get-language"],["href","documentation/po-i18n#poI18nConfigDefault"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],["href","/documentation/po-i18n#get-language"],["id","setLanguage"],[1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["id","poI18nConfigContext"],["id","poI18nConfigDefault"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["id","poI18nConfig"],["pan","",1,"docs-api-property-type","PoI18nConfigContext"],["pan","",1,"docs-api-property-type","PoI18nConfigDefault"],["pan","",1,"docs-api-property-type","Array<string>"],["id","poI18nLanguage"],["href","https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"],["id","PoNumberSeparator"],["id","PoDateSeparator"]],template:function(a,l){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoI18nModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do servi\xE7o "),t(7,"code"),e(8,"PoI18nService"),n(),e(9," para controle de idiomas com PO."),n(),t(10,"p"),e(11,"Para utiliza\xE7\xE3o do servi\xE7o de idiomas "),t(12,"code"),e(13,"PoI18nService"),n(),e(14,`, deve-se importar este m\xF3dulo mesmo j\xE1 havendo importado
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
definida outra configura\xE7\xE3o do `),t(136,"code"),e(137,"PoI18nModule"),n(),e(138,", deve-se atentar os seguintes detalhes:"),n(),t(139,"ul")(140,"li"),e(141,"N\xE3o defina outra "),t(142,"em"),e(143,"default language"),n(),e(144,` para este m\xF3dulo. Caso for definida, ser\xE1 sobreposta para
toda a aplica\xE7\xE3o;`),n(),t(145,"li"),e(146,"Caso precise de m\xF3dulos carregados via "),t(147,"em"),e(148,"lazy loading"),n(),e(149,` com linguagens diferentes, utilize o
m\xE9todo `),t(150,"a",9)(151,"code"),e(152,"setLanguage()"),n()(),e(153," disponibilizado pelo "),t(154,"code"),e(155,"PoI18nService"),n(),e(156,`
para definir a linguagem da aplica\xE7\xE3o e dos m\xF3dulos com as linguagens diferentes.`),n()()(),t(157,"h3",10),e(158,"Services"),n(),t(159,"h4",11)(160,"code",12),e(161,"PoI18nService"),n()(),t(162,"div",2)(163,"p"),e(164,"O servi\xE7o "),t(165,"code"),e(166,"PoI18nService"),n(),e(167," possibilita utilizar m\xFAltiplos idiomas e contextos na aplica\xE7\xE3o."),n(),t(168,"blockquote")(169,"p"),e(170,`Antes da utiliza\xE7\xE3o do servi\xE7o, \xE9 necess\xE1rio realizar a
`),t(171,"a",13),e(172,"importa\xE7\xE3o e configura\xE7\xE3o do m\xF3dulo "),t(173,"code"),e(174,"PoI18nModule"),n()(),e(175,"."),n()(),t(176,"p")(177,"strong"),e(178,"Utiliza\xE7\xE3o do servi\xE7o "),t(179,"code"),e(180,"PoI18nService"),n(),e(181,":"),n()(),t(182,"p"),e(183,`Para utilizar o servi\xE7o basta import\xE1-lo nos componentes que necessitarem de literais e fazer a inje\xE7\xE3o de
depend\xEAncia no construtor:`),n(),t(184,"pre")(185,"code"),e(186,`import { PoI18nService } from '@po-ui/ng-components';
...
constructor(private poI18nService: PoI18nService) { }
...
`),n()(),t(187,"p"),e(188,"Por fim realizar a busca pelas literais, inscrevendo-se no "),t(189,"a",14),e(190,"Observable"),n(),e(191,` pelo
m\xE9todo `),t(192,"code"),e(193,"getLiterals()"),n(),e(194,"."),n(),t(195,"blockquote")(196,"p"),e(197,"O m\xE9todo "),t(198,"code"),e(199,"getLiterals()"),n(),e(200," pode receber um objeto do tipo da interface "),t(201,"code"),e(202,"PoI18nLiterals"),n(),e(203,` como par\xE2metro,
por\xE9m, nenhuma das propriedades s\xE3o obrigat\xF3rias. Caso nenhum par\xE2metro seja passado, ser\xE3o buscadas
todas as literais do contexto definido com padr\xE3o, no idioma definido como padr\xE3o.`),n()(),t(204,"ul")(205,"li")(206,"h2"),e(207,"Altera\xE7\xF5es a partir da vers\xE3o 19"),n()()(),t(208,"p"),e(209,`A partir da vers\xE3o 19, para evitar conflitos com bibliotecas de terceiros que tamb\xE9m utilizam i18n,
\xE9 necess\xE1rio passar explicitamente o contexto ao chamar `),t(210,"code"),e(211,"getLiterals"),n(),e(212,`, garantindo a correta exibi\xE7\xE3o das literais.
Caso `),t(213,"code"),e(214,"getLiterals"),n(),e(215," seja chamado sem par\xE2metros, o retorno pode vir das configura\xE7\xF5es da biblioteca de terceiros."),n(),t(216,"p")(217,"strong"),e(218,"Exemplo de chamada com contexto expl\xEDcito:"),n()(),t(219,"pre")(220,"code",15),e(221,`poI18nService.getLiterals({ context: 'general' }).subscribe(literals => console.log(literals));
`),n()(),t(222,"p")(223,"strong"),e(224,"Cen\xE1rio de Contextos Iguais:"),n(),e(225,`
Caso tanto a aplica\xE7\xE3o quanto uma biblioteca de terceiros utilizem o mesmo nome de contexto,
o PO UI far\xE1 um merge das literais, priorizando os valores definidos na aplica\xE7\xE3o cliente.`),n(),t(226,"p")(227,"strong"),e(228,"Recomenda\xE7\xF5es:"),n()(),t(229,"ul")(230,"li"),e(231,"Sempre informar o contexto ao chamar "),t(232,"code"),e(233,"getLiterals"),n(),e(234," para evitar conflitos de literais."),n(),t(235,"li"),e(236,"Caso a aplica\xE7\xE3o utilize "),t(237,"code"),e(238,"lazy loading"),n(),e(239,", utilizar "),t(240,"code"),e(241,"setLanguage()"),n(),e(242," para garantir a correta configura\xE7\xE3o de idioma."),n()(),t(243,"p"),e(244,"Exemplos de requisi\xE7\xE3o:"),n(),t(245,"pre")(246,"code"),e(247,`literals = {};
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
`),n()(),t(248,"p"),e(249,`Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
seguinte c\xF3digo:`),n(),t(250,"pre"),c(),e(251,`{{ literals?.add }}
{{ literals?.remove }}
`),u(),n(),t(252,"p"),e(253,"Caso as literais contenham vari\xE1veis que precisem ser substitu\xEDdas, pode-se utilizar o "),t(254,"em"),e(255,"pipe"),n(),t(256,"code"),e(257,"poI18n"),n(),e(258,`.
\xC9 poss\xEDvel informar propriedades do componente como `),t(259,"code"),e(260,"name"),n(),e(261," e "),t(262,"code"),e(263,"nickname"),n(),e(264,` ou
informar o valor diretamente com "" ou n\xFAmero, conforme o exemplo abaixo:`),n(),t(265,"pre"),c(),e(266,`{{ literals?.people | poI18n:[120] }}
{{ literals?.greeting | poI18n:[name, nickname] }}
{{ literals?.greeting | poI18n:["Brad", "Green"] }}
`),u(),n(),t(267,"blockquote")(268,"p"),e(269,"\xC9 importante o uso do operador "),t(270,"code"),e(271,"?"),n(),e(272," (Elvis) para evitar erros enquanto as literais n\xE3o forem carregadas."),n()(),t(273,"h3"),e(274,"Teste unit\xE1rio"),n(),t(275,"p"),e(276,"Abaixo segue um exemplo de "),t(277,"em"),e(278,"setup"),n(),e(279," inicial de teste unit\xE1rio do "),t(280,"em"),e(281,"AppComponent"),n(),e(282," que utiliza o "),t(283,"code"),e(284,"PoI18nService"),n(),e(285,":"),n(),t(286,"blockquote")(287,"p"),e(288,"Aten\xE7\xE3o: n\xE3o declarar o "),t(289,"code"),e(290,"PoI18nService"),n(),e(291,` no providers do TestBed pois a biblioteca realiza a inje\xE7\xE3o de depend\xEAncia de forma din\xE2mica.
Se o servi\xE7o for declarado o teste n\xE3o far\xE1 a inje\xE7\xE3o e o teste apresentar\xE1 erros.`),n()(),t(292,"pre")(293,"code"),e(294,`import { async, TestBed } from '@angular/core/testing';
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
`),n()()(),t(295,"h3",16),e(296,"M\xE9todos"),n(),t(297,"table",17)(298,"tr",18)(299,"th",19)(300,"div",20)(301,"h4")(302,"span",21),e(303," getLanguage "),n()()()()(),t(304,"tr",22)(305,"td",22)(306,"p"),i(307,"a",23),e(308,`
M\xE9todo que retorna o idioma padr\xE3o ativo.`),n(),t(309,"p"),e(310,"A busca deste idioma pelo m\xE9todo ser\xE1 feita na seguinte ordem:"),n(),t(311,"p"),e(312," 1 - o idioma que foi armazenado no "),t(313,"em"),e(314,"localStorage"),n(),e(315,", atrav\xE9s do m\xE9todo "),t(316,"a",9)(317,"code"),e(318,"setLanguage()"),n()(),e(319,"."),n(),t(320,"p"),e(321," 2 - o valor inserido no m\xF3dulo do i18n atrav\xE9s do par\xE2metro "),t(322,"code"),e(323,"config"),n(),e(324,`, sendo o idioma inserido na propriedade
`),t(325,"code"),e(326,"language"),n(),e(327," da interface "),t(328,"a",24)(329,"code"),e(330,"PoI18nConfigDefault"),n()(),e(331,"."),n(),t(332,"p"),e(333," 3 - o idioma do navegador utilizado."),n(),t(334,"blockquote")(335,"p"),e(336,"Caso o idioma do navegador n\xE3o seja suportado pelo PO ("),t(337,"code"),e(338,"pt"),n(),e(339,", "),t(340,"code"),e(341,"en"),n(),e(342,", "),t(343,"code"),e(344,"es"),n(),e(345," ou "),t(346,"code"),e(347,"ru"),n(),e(348,"), ser\xE1 retornado valor "),t(349,"code"),e(350,"pt"),n(),e(351,"."),n()()()()(),t(352,"h5")(353,"b"),e(354,"Retorno"),n()(),t(355,"table",25)(356,"tr",26)(357,"th",27),e(358,"Tipo"),n(),t(359,"th",27),e(360,"Descri\xE7\xE3o"),n()(),t(361,"tr",18)(362,"td",28)(363,"code",29),e(364,"string"),n()(),t(365,"td",22)(366,"p"),e(367,"sigla do idioma padr\xE3o."),n()()()(),i(368,"br"),t(369,"table",17)(370,"tr",18)(371,"th",19)(372,"div",20)(373,"h4")(374,"span",21),e(375," getShortLanguage "),n()()()()(),t(376,"tr",22)(377,"td",22)(378,"p"),e(379,`M\xE9todo que retorna o idioma padr\xE3o ativo, com somente a abrevia\xE7\xE3o do idioma (duas primeiras letras).
Por exemplo: "pt" ou "es".`),n(),t(380,"p"),e(381,"A busca deste idioma \xE9 baseada no m\xE9todo "),t(382,"a",30)(383,"strong"),e(384,"getLanguage()"),n()(),e(385,"."),n()()()(),t(386,"h5")(387,"b"),e(388,"Retorno"),n()(),t(389,"table",25)(390,"tr",26)(391,"th",27),e(392,"Tipo"),n(),t(393,"th",27),e(394,"Descri\xE7\xE3o"),n()(),t(395,"tr",18)(396,"td",28)(397,"code",29),e(398,"string"),n()(),t(399,"td",22)(400,"p"),e(401,"sigla do idioma padr\xE3o."),n()()()(),i(402,"br"),t(403,"table",17)(404,"tr",18)(405,"th",19)(406,"div",20)(407,"h4")(408,"span",21),e(409," setLanguage "),n()()()()(),t(410,"tr",22)(411,"td",22)(412,"p"),i(413,"a",31),e(414,`
M\xE9todo para alterar o idioma padr\xE3o do m\xF3dulo do i18n.`),n(),t(415,"p"),e(416,`Ao utilizar este m\xE9todo, o idioma ficar\xE1 gravado no armazenamento local do navegador, que ser\xE1 utilizado pelo
servi\xE7o do `),t(417,"code"),e(418,"i18n"),n(),e(419," para buscar as literais no idioma padr\xE3o."),n()()()(),t(420,"h5")(421,"b"),e(422,"Par\xE2metros"),n()(),t(423,"table",25)(424,"tr",26)(425,"th",27),e(426,"Nome"),n(),t(427,"th",27),e(428,"Tipo"),n(),t(429,"th",27),e(430,"Descri\xE7\xE3o"),n()(),t(431,"tr",18)(432,"td",32),e(433," language"),n(),t(434,"td",28)(435,"code",29),e(436," string "),n()(),t(437,"td",22)(438,"p"),e(439,"Sigla do idioma."),n(),t(440,"p"),e(441,`Esta sigla deve ser composta por duas letras representando o idioma,
podendo ser adicionado outras duas letras representando o pa\xEDs, por exemplo: `),t(442,"code"),e(443,"pt"),n(),e(444,", "),t(445,"code"),e(446,"pt-BR"),n(),e(447,", "),t(448,"code"),e(449,"pt-br"),n(),e(450,", "),t(451,"code"),e(452,"en"),n(),e(453," ou "),t(454,"code"),e(455,"en-US"),n(),e(456,"."),n(),t(457,"blockquote")(458,"p"),e(459,"Caso seja informado um valor diferente deste padr\xE3o, o mesmo ser\xE1 ignorado."),n()()()(),t(460,"tr",18)(461,"td",32),e(462," reload"),n(),t(463,"td",28)(464,"code",29),e(465," boolean "),n()(),t(466,"td",22)(467,"p"),e(468,"Indica se a p\xE1gina atual poder\xE1 ser recarregada ap\xF3s a altera\xE7\xE3o do idioma."),n(),t(469,"p"),e(470,"Este recurso pode ser \xFAtil para os usu\xE1rios que utilizam o m\xE9todo "),t(471,"code"),e(472,"getLiterals()"),n(),e(473,` do servi\xE7o do i18n para poder
buscar novamente as literais no novo idioma configurado.`),n()()()(),i(474,"br"),t(475,"h3"),e(476,"Interfaces"),n(),t(477,"h4",33)(478,"code",12),e(479,"PoI18nConfigContext"),n()(),t(480,"div",2)(481,"p"),i(482,"a",34),n(),t(483,"p"),e(484,"Interface para a configura\xE7\xE3o dos contextos do m\xF3dulo "),t(485,"code"),e(486,"PoI18nModule"),n(),e(487,"."),n()(),t(488,"h4",33)(489,"code",12),e(490,"PoI18nConfigDefault"),n()(),t(491,"div",2)(492,"p"),i(493,"a",35),n(),t(494,"p"),e(495,"Interface para a configura\xE7\xE3o padr\xE3o do m\xF3dulo PoI18nModule."),n()(),t(496,"h4",16),e(497,"Propriedades"),n(),t(498,"table",25)(499,"tr",26)(500,"th",27),e(501,"Nome"),n(),t(502,"th",27),e(503,"Tipo"),n(),t(504,"th",27),e(505,"Descri\xE7\xE3o"),n()(),t(506,"tr",18)(507,"td",32)(508,"div",20)(509,"span",21),e(510," cache"),i(511,"br"),n()()(),t(512,"td",28)(513,"code",36),e(514,"boolean"),n()(),t(515,"td",22)(516,"em")(517,"strong"),e(518,"(opcional)"),n()(),t(519,"p"),e(520,`Define se as literais buscadas no servi\xE7o dever\xE3o ser armazenadas no cache do
navegador, lembrando que cada navegador possui sua pr\xF3pria limita\xE7\xE3o de cache.`),n(),t(521,"p"),e(522,`Para contextos com grande quantidade de literais, recomenda-se o uso de constantes ao inv\xE9s de servi\xE7os, desta forma
n\xE3o ser\xE1 usado o cache do navegador.`),n(),t(523,"p"),e(524,"Por padr\xE3o n\xE3o utiliza."),n()()(),t(525,"tr",18)(526,"td",32)(527,"div",20)(528,"span",21),e(529," context"),i(530,"br"),n()()(),t(531,"td",28)(532,"code",37),e(533,"string"),n()(),t(534,"td",22)(535,"em")(536,"strong"),e(537,"(opcional)"),n()(),t(538,"p"),e(539,"Define o contexto que ser\xE1 buscado por padr\xE3o pelo servi\xE7o."),n(),t(540,"blockquote")(541,"p"),e(542,"Caso n\xE3o seja especificado ser\xE1 usado o primeiro contexto da lista de contextos."),n()()()(),t(543,"tr",18)(544,"td",32)(545,"div",20)(546,"span",21),e(547," language"),i(548,"br"),n()()(),t(549,"td",28)(550,"code",37),e(551,"string"),n()(),t(552,"td",22)(553,"em")(554,"strong"),e(555,"(opcional)"),n()(),t(556,"p"),e(557,"Idioma que ser\xE1 buscado por padr\xE3o pelo servi\xE7o."),n(),t(558,"p"),e(559,`Esta defini\xE7\xE3o somente ser\xE1 utilizada se n\xE3o tiver sido definido o idioma atrav\xE9s do m\xE9todo
`),t(560,"a",9)(561,"code"),e(562,"setLanguage()"),n()(),e(563,`. Caso nenhum dos dois tenha sido configurado, ser\xE1 utilizado
o idioma do navegador.`),n()()()(),t(564,"h4",33)(565,"code",12),e(566,"PoI18nConfig"),n()(),t(567,"div",2)(568,"p"),i(569,"a",38),n(),t(570,"p"),e(571,"Interface para a configura\xE7\xE3o do m\xF3dulo "),t(572,"code"),e(573,"PoI18nModule"),n(),e(574,"."),n()(),t(575,"h4",16),e(576,"Propriedades"),n(),t(577,"table",25)(578,"tr",26)(579,"th",27),e(580,"Nome"),n(),t(581,"th",27),e(582,"Tipo"),n(),t(583,"th",27),e(584,"Descri\xE7\xE3o"),n()(),t(585,"tr",18)(586,"td",32)(587,"div",20)(588,"span",21),e(589," contexts"),i(590,"br"),n()()(),t(591,"td",28)(592,"code",39),e(593,"PoI18nConfigContext"),n()(),t(594,"td",22)(595,"p"),e(596,`Deve ser atribu\xEDdo a esta propriedade um objeto que contenha os contextos com os
idiomas suportados e suas respectivas tradu\xE7\xF5es literais,
como tamb\xE9m informar a propriedade `),t(597,"code"),e(598,"url"),n(),e(599," onde pode ser informado o servi\xE7o que retorne as literais traduzidas."),n(),t(600,"p"),e(601,`Portanto podemos utilizar constantes, onde devemos informar o nome do contexto recebendo um objeto com os
idiomas suportados e o arquivo de literais, por exemplo:`),n(),t(602,"pre")(603,"code"),e(604,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn
 }
...
`),n()(),t(605,"p"),e(606,"E como informado, podemos utilizar a propriedade "),t(607,"code"),e(608,"url"),n(),e(609,` que deve receber a URL do servi\xE7o que
retorne as literais traduzidas, por exemplo:`),n(),t(610,"pre")(611,"code"),e(612,`hcm: {
  url: 'http://localhost:3000/api/translations/hcm/'
}
`),n()(),t(613,"p"),e(614,`Ao optar por utilizar um servi\xE7o, dever\xE1 ser definida a URL espec\xEDfica do contexto,
como nos exemplos abaixo:`),n(),t(615,"pre")(616,"code"),e(617,`http://server:port/api/translations/crm
http://server:port/api/translations/general
`),n()(),t(618,"p"),e(619,"Os idiomas e literais ser\xE3o automaticamente buscados com par\xE2metros na pr\xF3pria URL:"),n(),t(620,"ul")(621,"li")(622,"code"),e(623,"language"),n(),e(624,`: o idioma ser\xE1 sempre passado por par\xE2metro, sendo recomendado a utiliza\xE7\xE3o do padr\xE3o suportado
pelos navegadores (`),t(625,"code"),e(626,"pt-br"),n(),e(627,", "),t(628,"code"),e(629,"en-us"),n(),e(630,");"),n(),t(631,"li")(632,"code"),e(633,"literals"),n(),e(634,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),n()(),t(635,"p"),e(636,"Exemplos de requisi\xE7\xE3o:"),n(),t(637,"pre")(638,"code"),e(639,`http://server:port/api/translations/crm?language=pt-br
http://server:port/api/translations/crm?language=pt-br&literals=add,remove,text
`),n()(),t(640,"blockquote")(641,"p"),e(642,"Sempre que o idioma solicitado n\xE3o for encontrado, ser\xE1 buscado por "),t(643,"code"),e(644,"pt-br"),n(),e(645,"."),n()(),t(646,"p"),e(647,`Existe tamb\xE9m a possibilidade de utilizar ambos, onde ser\xE1 feito a busca das literais nas constantes e depois efetua
a busca no servi\xE7o, com isso as constantes podem servir como `),t(648,"em"),e(649,"backup"),n(),e(650," caso o servi\xE7o esteja indispon\xEDvel, por exemplo:"),n(),t(651,"pre")(652,"code"),e(653,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn,
   url: 'http://localhost:3000/api/translations/hcm/'
 }
...
`),n()(),t(654,"blockquote")(655,"p"),e(656,"Caso a constante contenha alguma literal que o servi\xE7o n\xE3o possua ser\xE1 utilizado a literal da constante."),n()()()(),t(657,"tr",18)(658,"td",32)(659,"div",20)(660,"span",21),e(661," default"),i(662,"br"),n()()(),t(663,"td",28)(664,"code",40),e(665,"PoI18nConfigDefault"),n()(),t(666,"td",22)(667,"em")(668,"strong"),e(669,"(opcional)"),n()(),t(670,"p"),e(671,"Configura\xE7\xF5es padr\xF5es."),n()()()(),t(672,"h4",33)(673,"code",12),e(674,"PoI18nLiterals"),n()(),t(675,"div",2)(676,"p"),e(677,"Interface para o m\xE9todo "),t(678,"code"),e(679,"getLiterals()"),n(),e(680," do servi\xE7o PoI18nService."),n()(),t(681,"h4",16),e(682,"Propriedades"),n(),t(683,"table",25)(684,"tr",26)(685,"th",27),e(686,"Nome"),n(),t(687,"th",27),e(688,"Tipo"),n(),t(689,"th",27),e(690,"Descri\xE7\xE3o"),n()(),t(691,"tr",18)(692,"td",32)(693,"div",20)(694,"span",21),e(695," context"),i(696,"br"),n()()(),t(697,"td",28)(698,"code",37),e(699,"string"),n()(),t(700,"td",22)(701,"em")(702,"strong"),e(703,"(opcional)"),n()(),t(704,"p"),e(705,"Contexto utilizado na busca das literais."),n()()(),t(706,"tr",18)(707,"td",32)(708,"div",20)(709,"span",21),e(710," language"),i(711,"br"),n()()(),t(712,"td",28)(713,"code",37),e(714,"string"),n()(),t(715,"td",22)(716,"em")(717,"strong"),e(718,"(opcional)"),n()(),t(719,"p"),e(720,"Idioma a ser buscado."),n()()(),t(721,"tr",18)(722,"td",32)(723,"div",20)(724,"span",21),e(725," literals"),i(726,"br"),n()()(),t(727,"td",28)(728,"code",41),e(729,"Array<string>"),n()(),t(730,"td",22)(731,"em")(732,"strong"),e(733,"(opcional)"),n()(),t(734,"p"),e(735,"Lista das literais."),n()()()(),t(736,"h4",33)(737,"code",12),e(738,"PoLanguage"),n()(),t(739,"div",2)(740,"p"),i(741,"a",42),n(),t(742,"p"),e(743,"Interface para descri\xE7\xE3o das linguagens dispon\xEDveis no sistema."),n()(),t(744,"h4",16),e(745,"Propriedades"),n(),t(746,"table",25)(747,"tr",26)(748,"th",27),e(749,"Nome"),n(),t(750,"th",27),e(751,"Tipo"),n(),t(752,"th",27),e(753,"Descri\xE7\xE3o"),n()(),t(754,"tr",18)(755,"td",32)(756,"div",20)(757,"span",21),e(758," description"),i(759,"br"),n()()(),t(760,"td",28)(761,"code",37),e(762,"string"),n()(),t(763,"td",22)(764,"em")(765,"strong"),e(766,"(opcional)"),n()(),t(767,"p"),e(768,"Descri\xE7\xE3o do idioma"),n()()(),t(769,"tr",18)(770,"td",32)(771,"div",20)(772,"span",21),e(773," language"),i(774,"br"),n()()(),t(775,"td",28)(776,"code",37),e(777,"string"),n()(),t(778,"td",22)(779,"em")(780,"strong"),e(781,"(opcional)"),n()(),t(782,"p"),e(783,"C\xF3digo do idioma "),t(784,"a",43),e(785,"ISO 639-1"),n()(),t(786,"blockquote")(787,"p"),e(788,"Exemplo: 'pt','en'"),n()()()()(),t(789,"h4",33)(790,"code",12),e(791,"PoNumberSeparator"),n()(),t(792,"div",2)(793,"p"),i(794,"a",44),n(),t(795,"p"),e(796,"Interface para os separadores num\xE9ricos das linguagens dispon\xEDveis no sistema."),n()(),t(797,"h4",16),e(798,"Propriedades"),n(),t(799,"table",25)(800,"tr",26)(801,"th",27),e(802,"Nome"),n(),t(803,"th",27),e(804,"Tipo"),n(),t(805,"th",27),e(806,"Descri\xE7\xE3o"),n()(),t(807,"tr",18)(808,"td",32)(809,"div",20)(810,"span",21),e(811," language"),i(812,"br"),n()()(),t(813,"td",28)(814,"code",37),e(815,"string"),n()(),t(816,"td",22)(817,"em")(818,"strong"),e(819,"(opcional)"),n()(),t(820,"p"),e(821,"C\xF3digo do idioma "),t(822,"a",43),e(823,"ISO 639-1"),n()(),t(824,"blockquote")(825,"p"),e(826,"Exemplo: 'pt','en'"),n()()()(),t(827,"tr",18)(828,"td",32)(829,"div",20)(830,"span",21),e(831," separator"),i(832,"br"),n()()(),t(833,"td",28)(834,"code",37),e(835,"string"),n()(),t(836,"td",22)(837,"em")(838,"strong"),e(839,"(opcional)"),n()(),t(840,"p"),e(841,"Separador num\xE9rico"),n()()()(),t(842,"h4",33)(843,"code",12),e(844,"PoDateSeparator"),n()(),t(845,"div",2)(846,"p"),i(847,"a",45),n(),t(848,"p"),e(849,"Interface para o separador de data das linguagens dispon\xEDveis no sistema."),n()(),t(850,"h4",16),e(851,"Propriedades"),n(),t(852,"table",25)(853,"tr",26)(854,"th",27),e(855,"Nome"),n(),t(856,"th",27),e(857,"Tipo"),n(),t(858,"th",27),e(859,"Descri\xE7\xE3o"),n()(),t(860,"tr",18)(861,"td",32)(862,"div",20)(863,"span",21),e(864," locale"),i(865,"br"),n()()(),t(866,"td",28)(867,"code",37),e(868,"string"),n()(),t(869,"td",22)(870,"em")(871,"strong"),e(872,"(opcional)"),n()(),t(873,"p"),e(874,"C\xF3digo do locale "),t(875,"a",43),e(876,"ISO 639-1"),n()(),t(877,"blockquote")(878,"p"),e(879,"Exemplo: 'pt','en'"),n()()()(),t(880,"tr",18)(881,"td",32)(882,"div",20)(883,"span",21),e(884," separator"),i(885,"br"),n()()(),t(886,"td",28)(887,"code",37),e(888,"string"),n()(),t(889,"td",22)(890,"em")(891,"strong"),e(892,"(opcional)"),n()(),t(893,"p"),e(894,"Separador de data"),n(),t(895,"blockquote")(896,"p"),e(897,"Exemplo: '/','.','-'"),n()()()()()())},encapsulation:2})}return o})();var q=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(x(v),x(b))};static \u0275cmp=d({type:o,selectors:[["ng-component"]],standalone:!1,decls:5,vars:4,consts:[["p-title","I18n",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return l.changeTab("doc")}),i(3,"sample-po-i18n-doc"),n(),t(4,"po-tab",3),S("p-click",function(){return l.changeTab("web")}),n()()()),a&2&&(p("p-actions",l.actions),E(2),p("p-active",l.activeTab==="doc"),E(2),p("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[h,P,I,D],encapsulation:2})}return o})();var T=[{path:"",component:q}],z=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=s({type:o});static \u0275inj=m({imports:[g.forChild(T),g]})}return o})();var H=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=s({type:o});static \u0275inj=m({imports:[C,z]})}return o})();export{H as DocPoI18nModule};
