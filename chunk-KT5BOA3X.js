import{o as S,p as Y}from"./chunk-MMZVQUBQ.js";import{Ab as f,Db as X,F as G,Ga as K,I as U,a as $,ja as J,nb as Q,q as y,zb as C}from"./chunk-522XRIZO.js";import{Ac as q,Ba as E,Bc as W,Fa as a,Ga as e,Ha as l,La as M,M as T,Ma as d,Oc as R,Qc as j,Sc as L,T as b,U as h,Xa as O,Ya as t,_a as u,ab as B,bb as D,cb as z,ea as I,fb as x,ha as r,ia as k,oa as s,pa as A,vb as P,xc as F,ya as m,yc as N,zc as H}from"./chunk-WFKG4FNY.js";var Z=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-avatar-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-src","https://po-ui.io/assets/graphics/logo-po.png"]],template:function(o,i){o&1&&l(0,"po-avatar",0)},dependencies:[y],encapsulation:2})}return n})();var me=n=>({"docs-sample-code-tabs":n}),te=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-avatar-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),a(1,"blockquote",0)(2,"label",1),t(3,"PO Avatar Basic"),e(),a(4,"a",2),d("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),a(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-avatar-basic/sample-po-avatar-basic.component.html"),e(),a(13,"pre",7),t(14,`<po-avatar p-src="https://po-ui.io/assets/graphics/logo-po.png"> </po-avatar>
`),e()()(),a(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-avatar-basic/sample-po-avatar-basic.component.ts"),e(),a(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-basic',
  templateUrl: './sample-po-avatar-basic.component.html',
  standalone: false
})
export class SamplePoAvatarBasicComponent {}
`),e()()()()(),a(21,"div",10),l(22,"sample-po-avatar-basic"),e(),l(23,"hr")),o&2&&(r(5),E("po-icon "+i.sampleCodeButtonIcon),r(),u(" ",i.sampleCodeButtonLabel,""),r(),m("ngClass",x(4,me,i.hideSampleCodeTabs)))},dependencies:[P,S,C,f,Z],encapsulation:2})}return n})();var ae=(()=>{class n{src;size;sizeOptions=[{label:"Extra Large (144x144)",value:"xl"},{label:"Large (96x96)",value:"lg"},{label:"Medium (64x64)",value:"md"},{label:"Small (32x32)",value:"sm"},{label:"Extra small (24x24)",value:"xs"}];ngOnInit(){this.restore()}restore(){this.src="http://lorempixel.com/144/144/cats",this.size=void 0}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-avatar-labs"]],standalone:!1,decls:9,vars:5,consts:[["f","ngForm"],[3,"p-size","p-src"],["p-label","Properties"],[1,"po-row"],["name","sizes","p-help","Select a size for the avatar","p-label","Size",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","src","p-clear","","p-help","Enter a url or path of the image that will be displayed","p-label","Source",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,i){if(o&1){let c=M();l(0,"po-avatar",1)(1,"po-divider",2),a(2,"form",null,0)(4,"div",3)(5,"po-radio-group",4),z("ngModelChange",function(v){return b(c),D(i.size,v)||(i.size=v),h(v)}),e(),a(6,"po-input",5),z("ngModelChange",function(v){return b(c),D(i.src,v)||(i.src=v),h(v)}),e()(),a(7,"div",3)(8,"po-button",6),d("p-click",function(){return b(c),h(i.restore())}),e()()()}o&2&&(m("p-size",i.size)("p-src",i.src),r(5),B("ngModel",i.size),m("p-options",i.sizeOptions),r(),B("ngModel",i.src))},dependencies:[W,F,N,q,H,y,G,$,J,K],encapsulation:2})}return n})();var ue=n=>({"docs-sample-code-tabs":n}),ne=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-avatar-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),a(1,"blockquote",0)(2,"label",1),t(3,"PO Avatar Labs"),e(),a(4,"a",2),d("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),a(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-avatar-labs/sample-po-avatar-labs.component.html"),e(),a(13,"pre",7),t(14,`<po-avatar [p-size]="size" [p-src]="src"> </po-avatar>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-6"
      name="sizes"
      [(ngModel)]="size"
      p-help="Select a size for the avatar"
      p-label="Size"
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-input
      class="po-lg-6"
      name="src"
      [(ngModel)]="src"
      p-clear
      p-help="Enter a url or path of the image that will be displayed"
      p-label="Source"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),a(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-avatar-labs/sample-po-avatar-labs.component.ts"),e(),a(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-avatar-labs',
  templateUrl: './sample-po-avatar-labs.component.html',
  standalone: false
})
export class SamplePoAvatarLabsComponent implements OnInit {
  src: string;
  size: string;

  sizeOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Extra Large (144x144)', value: 'xl' },
    { label: 'Large (96x96)', value: 'lg' },
    { label: 'Medium (64x64)', value: 'md' },
    { label: 'Small (32x32)', value: 'sm' },
    { label: 'Extra small (24x24)', value: 'xs' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.src = 'http://lorempixel.com/144/144/cats';
    this.size = undefined;
  }
}
`),e()()()()(),a(21,"div",10),l(22,"sample-po-avatar-labs"),e(),l(23,"hr")),o&2&&(r(5),E("po-icon "+i.sampleCodeButtonIcon),r(),u(" ",i.sampleCodeButtonLabel,""),r(),m("ngClass",x(4,ue,i.hideSampleCodeTabs)))},dependencies:[P,S,C,f,ae],encapsulation:2})}return n})();var oe=(()=>{class n{avatar="http://lorempixel.com/300/300/cats/";contact={name:"Mr. Dev PO",email:"dev.po@po-ui.com",phone:"47912012015"};callContact(p){window.open(`tel:${p}`,"_self")}sendContact(p){window.open(`mailto:${p}`,"_self")}formatPhoneNumber(p){return`(${p.substring(0,2)}) ${p.substring(2,7)}-${p.substring(7)}`}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-avatar-business-card"]],standalone:!1,decls:19,vars:5,consts:[["modal",""],[1,"po-row"],["p-height","250","p-title","Business Card","p-primary-label","Call","p-secondary-label","Send e-mail",1,"po-sm-12","po-md-8","po-lg-6",3,"p-primary-action","p-secondary-action"],["p-size","lg",1,"po-md-4",3,"p-click","p-src"],[1,"po-md-8"],["p-title","Profile Image"],[1,"sample-center-image",3,"src"]],template:function(o,i){if(o&1){let c=M();a(0,"div",1)(1,"po-widget",2),d("p-primary-action",function(){return b(c),h(i.callContact(i.contact.phone))})("p-secondary-action",function(){return b(c),h(i.sendContact(i.contact.email))}),a(2,"po-avatar",3),d("p-click",function(){b(c);let v=O(17);return h(v.open())}),e(),a(3,"div",4)(4,"p")(5,"strong"),t(6,"Name:"),e(),t(7),e(),a(8,"p")(9,"strong"),t(10,"Phone:"),e(),t(11),e(),a(12,"p")(13,"strong"),t(14,"E-mail:"),e(),t(15),e()()()(),a(16,"po-modal",5,0),l(18,"img",6),e()}o&2&&(r(2),m("p-src",i.avatar),r(5),u(" ",i.contact.name,""),r(4),u(" ",i.formatPhoneNumber(i.contact.phone),""),r(4),u(" ",i.contact.email,""),r(3),m("src",i.avatar,I))},dependencies:[y,U,X],styles:[".sample-center-image[_ngcontent-%COMP%]{display:block;margin:0 auto}"]})}return n})();var be=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-avatar-business-card-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),a(1,"blockquote",0)(2,"label",1),t(3,"PO Avatar - Business Card"),e(),a(4,"a",2),d("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),a(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.html"),e(),a(13,"pre",7),t(14,`<div class="po-row">
  <po-widget
    class="po-sm-12 po-md-8 po-lg-6"
    p-height="250"
    p-title="Business Card"
    p-primary-label="Call"
    p-secondary-label="Send e-mail"
    (p-primary-action)="callContact(contact.phone)"
    (p-secondary-action)="sendContact(contact.email)"
  >
    <po-avatar class="po-md-4" p-size="lg" [p-src]="avatar" (p-click)="modal.open()"> </po-avatar>

    <div class="po-md-8">
      <p><strong>Name:</strong> { { contact.name }}</p>
      <p><strong>Phone:</strong> { { formatPhoneNumber(contact.phone) }}</p>
      <p><strong>E-mail:</strong> { { contact.email }}</p>
    </div>
  </po-widget>
</div>

<po-modal #modal p-title="Profile Image">
  <img [src]="avatar" class="sample-center-image" />
</po-modal>
`),e()()(),a(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts"),e(),a(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-business-card',
  styles: [
    \`
      .sample-center-image {
        display: block;
        margin: 0 auto;
      }
    \`
  ],
  templateUrl: './sample-po-avatar-business-card.component.html',
  standalone: false
})
export class SamplePoAvatarBusinessCardComponent {
  avatar = 'http://lorempixel.com/300/300/cats/';

  contact = {
    name: 'Mr. Dev PO',
    email: 'dev.po@po-ui.com',
    phone: '47912012015'
  };

  callContact(phone) {
    window.open(\`tel:\${phone}\`, '_self');
  }

  sendContact(email) {
    window.open(\`mailto:\${email}\`, '_self');
  }

  formatPhoneNumber(phone) {
    return \`(\${phone.substring(0, 2)}) \${phone.substring(2, 7)}-\${phone.substring(7)}\`;
  }
}
`),e()()()()(),a(21,"div",10),l(22,"sample-po-avatar-business-card"),e(),l(23,"hr")),o&2&&(r(5),E("po-icon "+i.sampleCodeButtonIcon),r(),u(" ",i.sampleCodeButtonLabel,""),r(),m("ngClass",x(4,be,i.hideSampleCodeTabs)))},dependencies:[P,S,C,f,oe],encapsulation:2})}return n})();var pe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-avatar-doc"]],standalone:!1,decls:151,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","'eager'"],["pan","",1,"docs-api-property-type","'lazy'"],["pan","",1,"docs-api-property-type","string"]],template:function(o,i){o&1&&(a(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoAvatarModule } from '@po-ui/ng-components';"),e()(),a(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente po-avatar."),e()(),a(7,"h3",3),t(8,"Componente"),e(),a(9,"h4",4)(10,"code",5),t(11,"PoAvatarComponent"),e()(),a(12,"div",2)(13,"p"),t(14,"O componente "),a(15,"code"),t(16,"po-avatar"),e(),t(17,` \xE9 um container para imagens em miniatura, possui um formato redondo e cinco op\xE7\xF5es de
tamanho, pode ser utilizado para mostrar a foto do perfil de um usu\xE1rio, entre outras possibilidades.`),e(),a(18,"p"),t(19,"Al\xE9m de poder ser utilizado separadamente, \xE9 poss\xEDvel usar o "),a(20,"code"),t(21,"po-avatar"),e(),t(22,` juntamente com outros componentes e criar
layouts ricos e bem interessantes para os usu\xE1rios, como por exemplo, uma lista de itens ou produtos. `),e()(),a(23,"div",6)(24,"h4",7),t(25,"Seletor"),e(),a(26,"pre",8),t(27,`<po-avatar
    (p-click)="EventEmitter"
    p-loading="'eager' | 'lazy'"
    p-size="string"
    p-src="string" >
</po-avatar>
`),e()(),a(28,"h4",9),t(29,"Propriedades"),e(),a(30,"table",10)(31,"tr",11)(32,"th",12),t(33,"Nome"),e(),a(34,"th",12),t(35,"Tipo"),e(),a(36,"th",12),t(37,"Padr\xE3o"),e(),a(38,"th",12),t(39,"Descri\xE7\xE3o"),e()(),a(40,"tr",13)(41,"td",14)(42,"div",15)(43,"span",16),t(44," (p-click)"),l(45,"br"),e()()(),a(46,"td",17)(47,"code",18),t(48,"EventEmitter"),e()(),a(49,"td",19),t(50,"-"),e(),a(51,"td",20)(52,"p"),t(53,"Evento disparado ao clicar na imagem do "),a(54,"em"),t(55,"avatar"),e(),t(56,"."),e()()(),a(57,"tr",13)(58,"td",14)(59,"div",21)(60,"span",22),t(61," p-loading"),l(62,"br"),e()()(),a(63,"td",17)(64,"code",23),t(65,"'eager' "),e(),a(66,"code",24),t(67," 'lazy'"),e()(),a(68,"td",19)(69,"p")(70,"code"),t(71,"eager"),e()()(),a(72,"td",20)(73,"em")(74,"strong"),t(75,"(opcional)"),e()(),a(76,"p"),t(77,"Indica como o navegador deve carregar a imagem."),e(),a(78,"p"),t(79,"Valores v\xE1lidos:"),e(),a(80,"ul")(81,"li")(82,"code"),t(83,"eager"),e(),t(84," (a imagem \xE9 carregada imediatamente, independente de estar vis\xEDvel ou n\xE3o)"),e(),a(85,"li")(86,"code"),t(87,"lazy"),e(),t(88," (a imagem s\xF3 \xE9 carregada quando estiver pr\xF3xima de ser renderizada)"),e()()()(),a(89,"tr",13)(90,"td",14)(91,"div",21)(92,"span",22),t(93," p-size"),l(94,"br"),e()()(),a(95,"td",17)(96,"code",25),t(97,"string"),e()(),a(98,"td",19)(99,"p")(100,"code"),t(101,"md"),e()()(),a(102,"td",20)(103,"em")(104,"strong"),t(105,"(opcional)"),e()(),a(106,"p"),t(107,"Tamanho de exibi\xE7\xE3o do componente."),e(),a(108,"p"),t(109,"Valores v\xE1lidos:"),e(),a(110,"ul")(111,"li")(112,"code"),t(113,"xs"),e(),t(114," (24x24)"),e(),a(115,"li")(116,"code"),t(117,"sm"),e(),t(118," (32x32)"),e(),a(119,"li")(120,"code"),t(121,"md"),e(),t(122," (64x64)"),e(),a(123,"li")(124,"code"),t(125,"lg"),e(),t(126," (96x96)"),e(),a(127,"li")(128,"code"),t(129,"xl"),e(),t(130," (144x144)"),e()()()(),a(131,"tr",13)(132,"td",14)(133,"div",21)(134,"span",22),t(135," p-src"),l(136,"br"),e()()(),a(137,"td",17)(138,"code",25),t(139,"string"),e()(),a(140,"td",19),t(141,"-"),e(),a(142,"td",20)(143,"p"),t(144,"Fonte da imagem que pode ser um caminho local ("),a(145,"code"),t(146,"./assets/images/logo-black-small.png"),e(),t(147,`)
ou um servidor externo (`),a(148,"code"),t(149,"https://po-ui.io/assets/images/logo-black-small.png"),e(),t(150,")."),e()()()()())},dependencies:[S],encapsulation:2})}return n})();var le=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,o){this.route=p,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let o=p.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||n)(k(R),k(j))};static \u0275cmp=s({type:n,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Avatar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(a(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),d("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-avatar-doc"),e(),a(4,"po-tab",3),d("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-avatar-basic-view")(6,"sample-po-avatar-labs-view")(7,"sample-po-avatar-business-card-view"),e()()()),o&2&&(m("p-actions",i.actions),r(2),m("p-active",i.activeTab==="doc"),r(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[Q,C,f,te,ne,ie,pe],encapsulation:2})}return n})();var fe=[{path:"",component:le}],re=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=A({type:n});static \u0275inj=T({imports:[L.forChild(fe),L]})}return n})();var je=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=A({type:n});static \u0275inj=T({imports:[Y,re]})}return n})();export{je as DocPoAvatarModule};
