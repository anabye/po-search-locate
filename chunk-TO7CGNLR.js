import{o as k,p as ae}from"./chunk-MMZVQUBQ.js";import{Ab as v,F as L,Ga as oe,I as H,U as A,Wa as ne,a as N,ja as ee,nb as ie,ta as te,zb as f}from"./chunk-522XRIZO.js";import{Ac as R,Ba as T,Bc as J,Fa as o,Ga as t,Ha as a,Kb as K,La as O,M,Ma as u,Oc as Z,Qc as $,Sc as V,T as h,U as b,Ua as q,Va as z,Wa as U,Xa as G,Ya as e,_a as w,ab as x,bb as S,cb as C,fb as P,ha as d,ia as F,lb as j,mb as Y,oa as s,pa as I,vb as y,xc as D,ya as c,yc as Q,zc as X}from"./chunk-WFKG4FNY.js";var le=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","checkbox","p-label","PO Checkbox"]],template:function(l,n){l&1&&a(0,"po-checkbox",0)},dependencies:[A],encapsulation:2})}return i})();var Ee=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Basic"),t(),o(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-checkbox-basic"),t(),a(23,"hr")),l&2&&(d(5),T("po-icon "+n.sampleCodeButtonIcon),d(),w(" ",n.sampleCodeButtonLabel,""),d(),c("ngClass",P(4,Ee,n.hideSampleCodeTabs)))},dependencies:[y,k,f,v,le],encapsulation:2})}return i})();var me=(()=>{class i{additionalHelpTooltip;checkbox;disabled;help;size;event;label;sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.additionalHelpTooltip="",this.checkbox=void 0,this.disabled=!1,this.event=void 0,this.help="",this.label=void 0,this.size="medium"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-labs"]],standalone:!1,decls:17,vars:16,consts:[["f","ngForm"],["name","checkbox",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-disabled","p-help","p-label","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let r=O();o(0,"po-checkbox",1),C("ngModelChange",function(p){return h(r),S(n.checkbox,p)||(n.checkbox=p),b(p)}),u("p-change",function(){return h(r),b(n.changeEvent("p-change"))})("p-keydown",function(){return h(r),b(n.changeEvent("p-keydown"))}),t(),a(1,"po-divider"),o(2,"div",2),a(3,"po-info",3),j(4,"json"),a(5,"po-info",4),t(),a(6,"po-divider"),o(7,"form",null,0)(9,"div",2)(10,"po-input",5),C("ngModelChange",function(p){return h(r),S(n.label,p)||(n.label=p),b(p)}),t(),o(11,"po-input",6),C("ngModelChange",function(p){return h(r),S(n.help,p)||(n.help=p),b(p)}),t(),o(12,"po-input",7),C("ngModelChange",function(p){return h(r),S(n.additionalHelpTooltip,p)||(n.additionalHelpTooltip=p),b(p)}),t(),o(13,"po-switch",8),C("ngModelChange",function(p){return h(r),S(n.disabled,p)||(n.disabled=p),b(p)}),t(),o(14,"po-radio-group",9),C("ngModelChange",function(p){return h(r),S(n.size,p)||(n.size=p),b(p)}),t()(),o(15,"div",2)(16,"po-button",10),u("p-click",function(){return h(r),b(n.restore())}),t()()()}l&2&&(x("ngModel",n.checkbox),c("p-additional-help-tooltip",n.additionalHelpTooltip)("p-disabled",n.disabled)("p-help",n.help)("p-label",n.label)("p-size",n.size),d(3),c("p-value",Y(4,14,n.checkbox)),d(2),c("p-value",n.event),d(5),x("ngModel",n.label),d(),x("ngModel",n.help),d(),x("ngModel",n.additionalHelpTooltip),d(),x("ngModel",n.disabled),d(),x("ngModel",n.size),c("p-options",n.sizeOptions))},dependencies:[J,D,Q,R,X,L,N,ee,oe,A,te,ne,K],encapsulation:2})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),de=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Labs"),t(),o(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox
  name="checkbox"
  [(ngModel)]="checkbox"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-disabled]="disabled"
  [p-help]="help"
  [p-label]="label"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-checkbox>

<po-divider></po-divider>

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkbox | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

    <po-input
      class="po-md-6"
      name="additionalHelpTooltip"
      [(ngModel)]="additionalHelpTooltip"
      p-clean
      p-label="Additional Help Tooltip"
    >
    </po-input>

    <po-switch class="po-sm-3" name="disabled" [(ngModel)]="disabled" p-label="Disabled"> </po-switch>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
@Component({
  selector: 'sample-po-checkbox-labs',
  templateUrl: './sample-po-checkbox-labs.component.html',
  standalone: false
})
export class SamplePoCheckboxLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  checkbox: boolean | null;
  disabled: boolean;
  help: string;
  size: string;
  event: string;
  label: string;

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.checkbox = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.label = undefined;
    this.size = 'medium';
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-checkbox-labs"),t(),a(23,"hr")),l&2&&(d(5),T("po-icon "+n.sampleCodeButtonIcon),d(),w(" ",n.sampleCodeButtonLabel,""),d(),c("ngClass",P(4,ge,n.hideSampleCodeTabs)))},dependencies:[y,k,f,v,me],encapsulation:2})}return i})();var re=(()=>{class i{modalTerm;acceptance=!1;primaryAction={action:()=>{this.modalTerm.close()},disabled:!0,label:"Confirm"};static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-acceptance-term"]],viewQuery:function(l,n){if(l&1&&q(H,7),l&2){let r;z(r=U())&&(n.modalTerm=r.first)}},standalone:!1,decls:23,vars:2,consts:[["modalTerm",""],["p-label","View term",3,"p-click"],["p-title","Acceptance Term",3,"p-primary-action"],[1,"po-row"],[1,"po-sm-12"],[1,"po-font-text-large-bold"],[1,"po-row","po-p-1"],["name","acceptance","p-label","I have read and agree to the terms of service and privacy",3,"ngModelChange","p-change","ngModel"]],template:function(l,n){if(l&1){let r=O();o(0,"po-button",1),u("p-click",function(){h(r);let p=G(2);return b(p.open())}),t(),o(1,"po-modal",2,0)(3,"div",3)(4,"div",4)(5,"h3",5),e(6,"MIT License"),t()(),o(7,"div",4)(8,"h4"),e(9,"Copyright (c) 2019 PO UI"),t()(),a(10,"po-divider",4),o(11,"div",4)(12,"p"),e(13,' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: '),t(),a(14,"br"),o(15,"p"),e(16," The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. "),t(),a(17,"br"),o(18,"p"),e(19,' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. '),t()()(),a(20,"po-divider"),o(21,"div",6)(22,"po-checkbox",7),C("ngModelChange",function(p){return h(r),S(n.acceptance,p)||(n.acceptance=p),b(p)}),u("p-change",function(){return h(r),b(n.primaryAction.disabled=!n.acceptance)}),t()()()}l&2&&(d(),c("p-primary-action",n.primaryAction),d(21),x("ngModel",n.acceptance))},dependencies:[D,R,L,N,A,H],encapsulation:2})}return i})();var ke=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-acceptance-term-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox - Acceptance Term"),t(),o(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html"),t(),o(13,"pre",7),e(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

<po-modal #modalTerm p-title="Acceptance Term" [p-primary-action]="primaryAction">
  <div class="po-row">
    <div class="po-sm-12">
      <h3 class="po-font-text-large-bold">MIT License</h3>
    </div>

    <div class="po-sm-12">
      <h4>Copyright (c) 2019 PO UI</h4>
    </div>

    <po-divider class="po-sm-12"></po-divider>

    <div class="po-sm-12">
      <p>
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
        documentation files (the "Software"), to deal in the Software without restriction, including without limitation
        the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
        to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      </p>
      <br />
      <p>
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of
        the Software.
      </p>
      <br />
      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
        THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
        CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
        DEALINGS IN THE SOFTWARE.
      </p>
    </div>
  </div>

  <po-divider></po-divider>

  <div class="po-row po-p-1">
    <po-checkbox
      name="acceptance"
      [(ngModel)]="acceptance"
      p-label="I have read and agree to the terms of service and privacy"
      (p-change)="primaryAction.disabled = !acceptance"
    >
    </po-checkbox>
  </div>
</po-modal>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-acceptance-term',
  templateUrl: './sample-po-checkbox-acceptance-term.component.html',
  standalone: false
})
export class SamplePoCheckboxAcceptanceTermComponent {
  @ViewChild(PoModalComponent, { static: true }) modalTerm: PoModalComponent;

  acceptance: boolean = false;

  primaryAction: PoModalAction = {
    action: () => {
      this.modalTerm.close();
    },
    disabled: true,
    label: 'Confirm'
  };
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-checkbox-acceptance-term"),t(),a(23,"hr")),l&2&&(d(5),T("po-icon "+n.sampleCodeButtonIcon),d(),w(" ",n.sampleCodeButtonLabel,""),d(),c("ngClass",P(4,ke,n.hideSampleCodeTabs)))},dependencies:[y,k,f,v,re],encapsulation:2})}return i})();var se=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-doc"]],standalone:!1,decls:530,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,n){l&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),o(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),o(16,"h3",3),e(17,"Componente"),t(),o(18,"h4",4)(19,"code",5),e(20,"PoCheckboxComponent"),t()(),o(21,"div",2)(22,"p"),e(23,"O componente "),o(24,"code"),e(25,"po-checkbox"),t(),e(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),o(27,"em"),e(28,"click"),t(),e(29," do "),o(30,"em"),e(31,"mouse"),t(),e(32," quanto por meio da tecla "),o(33,"em"),e(34,"space"),t(),e(35," quando estiver com foco."),t(),o(36,"p"),e(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),t(),o(38,"blockquote")(39,"p"),e(40,"O "),o(41,"em"),e(42,"model"),t(),e(43," deste componente aceitar\xE1 valores igual \xE0 "),o(44,"code"),e(45,"true"),t(),e(46,", "),o(47,"code"),e(48,"false"),t(),e(49," ou "),o(50,"code"),e(51,"null"),t(),e(52," para quando for indeterminado/mixed."),t()(),o(53,"p")(54,"strong"),e(55,"Acessibilidade tratada no componente:"),t()(),o(56,"p"),e(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),o(58,"ul")(59,"li"),e(60,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),o(61,"a",6),e(62,"WCAG 4.1.2: Name, Role, Value"),t()(),o(63,"li"),e(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),o(65,"a",7),e(66,"WCAG 2.4.12: Focus Appearance"),t()(),o(67,"li"),e(68,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o componente do seu estado marcado e desmarcado. "),o(69,"a",8),e(70,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),t()()(),o(71,"h4"),e(72,"Tokens customiz\xE1veis"),t(),o(73,"p"),e(74,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),o(75,"blockquote")(76,"p"),e(77,"Para maiores informa\xE7\xF5es, acesse o guia "),o(78,"a",9),e(79,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(80,"."),t()(),o(81,"table")(82,"thead")(83,"tr")(84,"th"),e(85,"Propriedade"),t(),o(86,"th"),e(87,"Descri\xE7\xE3o"),t(),o(88,"th"),e(89,"Valor Padr\xE3o"),t()()(),o(90,"tbody")(91,"tr")(92,"td")(93,"strong"),e(94,"Default Values"),t()(),a(95,"td")(96,"td"),t(),o(97,"tr")(98,"td")(99,"code"),e(100,"--border-color"),t()(),o(101,"td"),e(102,"Cor da borda"),t(),o(103,"td")(104,"code"),e(105,"var(--color-neutral-dark-70)"),t()()(),o(106,"tr")(107,"td")(108,"code"),e(109,"--color-unchecked"),t()(),o(110,"td"),e(111,"Cor quando n\xE3o selecionado"),t(),o(112,"td")(113,"code"),e(114,"var(--color-neutral-light-00)"),t()()(),o(115,"tr")(116,"td")(117,"code"),e(118,"--color-checked"),t()(),o(119,"td"),e(120,"Cor quando selecionado"),t(),o(121,"td")(122,"code"),e(123,"var(--color-action-default)"),t()()(),o(124,"tr")(125,"td")(126,"strong"),e(127,"Hover"),t()(),a(128,"td")(129,"td"),t(),o(130,"tr")(131,"td")(132,"code"),e(133,"--color-hover"),t()(),o(134,"td"),e(135,"Cor principal no estado hover"),t(),o(136,"td")(137,"code"),e(138,"var(--color-action-hover)"),t()()(),o(139,"tr")(140,"td")(141,"code"),e(142,"--shadow-color-hover"),t()(),o(143,"td"),e(144,"Cor da sombra no estado hover"),t(),o(145,"td")(146,"code"),e(147,"var(--color-brand-01-lighter)"),t()()(),o(148,"tr")(149,"td")(150,"strong"),e(151,"Focused"),t()(),a(152,"td")(153,"td"),t(),o(154,"tr")(155,"td")(156,"code"),e(157,"--outline-color-focused"),t()(),o(158,"td"),e(159,"Cor do outline do estado de focus"),t(),o(160,"td")(161,"code"),e(162,"var(--color-action-focus)"),t()()(),o(163,"tr")(164,"td")(165,"strong"),e(166,"Disabled"),t()(),a(167,"td")(168,"td"),t(),o(169,"tr")(170,"td")(171,"code"),e(172,"--color-unchecked-disabled"),t(),e(173," \xA0"),t(),o(174,"td"),e(175,"Cor pricipal quando n\xE3o selecionado no estado disabled\xA0"),t(),o(176,"td")(177,"code"),e(178,"var(--color-action-disabled)"),t()()(),o(179,"tr")(180,"td")(181,"code"),e(182,"--color-checked-disabled"),t(),e(183," \xA0"),t(),o(184,"td"),e(185,"Cor pricipal quando selecionado no estado disabled"),t(),o(186,"td")(187,"code"),e(188,"var(--color-neutral-dark-70)"),t()()()()()(),o(189,"div",10)(190,"h4",11),e(191,"Seletor"),t(),o(192,"pre",12),e(193,`<po-checkbox
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-disabled="boolean"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    name="string"
    p-size="string" >
</po-checkbox>
`),t()(),o(194,"h4",13),e(195,"Propriedades"),t(),o(196,"table",14)(197,"tr",15)(198,"th",16),e(199,"Nome"),t(),o(200,"th",16),e(201,"Tipo"),t(),o(202,"th",16),e(203,"Padr\xE3o"),t(),o(204,"th",16),e(205,"Descri\xE7\xE3o"),t()(),o(206,"tr",17)(207,"td",18)(208,"div",19)(209,"span",20),e(210," (p-additional-help)"),a(211,"br"),t()()(),o(212,"td",21)(213,"code",22),e(214,"EventEmitter"),t()(),o(215,"td",23),e(216,"-"),t(),o(217,"td",24)(218,"em")(219,"strong"),e(220,"(opcional)"),t()(),o(221,"p"),e(222,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),o(223,"code"),e(224,"p-help"),t(),e(225,"."),t()()(),o(226,"tr",17)(227,"td",18)(228,"div",25)(229,"span",26),e(230," p-additional-help-tooltip"),a(231,"br"),t()()(),o(232,"td",21)(233,"code",27),e(234,"string"),t()(),o(235,"td",23),e(236,"-"),t(),o(237,"td",24)(238,"em")(239,"strong"),e(240,"(opcional)"),t()(),o(241,"p"),e(242,"Exibe um \xEDcone de ajuda adicional ao "),o(243,"code"),e(244,"p-help"),t(),e(245,`, com o texto desta propriedade no tooltip.
Se o evento `),o(246,"code"),e(247,"p-additional-help"),t(),e(248,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),o(249,"strong"),e(250,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),o(251,"blockquote")(252,"p"),e(253,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),o(254,"tr",17)(255,"td",18)(256,"div",25)(257,"span",26),e(258," p-append-in-body"),a(259,"br"),t()()(),o(260,"td",21)(261,"code",28),e(262,"boolean"),t()(),o(263,"td",23)(264,"p")(265,"code"),e(266,"false"),t()()(),o(267,"td",24)(268,"em")(269,"strong"),e(270,"(opcional)"),t()(),o(271,"p"),e(272,"Define que o tooltip ("),o(273,"code"),e(274,"p-additional-help-tooltip"),t(),e(275,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),o(276,"blockquote")(277,"p"),e(278,"Quando utilizado com "),o(279,"code"),e(280,"p-additional-help-tooltip"),t(),e(281,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),o(282,"tr",17)(283,"td",18)(284,"div",25)(285,"span",26),e(286," p-auto-focus"),a(287,"br"),t()()(),o(288,"td",21)(289,"code",28),e(290,"boolean"),t()(),o(291,"td",23)(292,"p")(293,"code"),e(294,"false"),t()()(),o(295,"td",24)(296,"em")(297,"strong"),e(298,"(opcional)"),t()(),o(299,"p"),e(300,"Aplica foco no elemento ao ser iniciado."),t(),o(301,"blockquote")(302,"p"),e(303,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(304,"tr",17)(305,"td",18)(306,"div",19)(307,"span",20),e(308," (p-blur)"),a(309,"br"),t()()(),o(310,"td",21)(311,"code",22),e(312,"EventEmitter"),t()(),o(313,"td",23),e(314,"-"),t(),o(315,"td",24)(316,"em")(317,"strong"),e(318,"(opcional)"),t()(),o(319,"p"),e(320,"Evento disparado ao sair do campo."),t()()(),o(321,"tr",17)(322,"td",18)(323,"div",19)(324,"span",20),e(325," (p-change)"),a(326,"br"),t()()(),o(327,"td",21)(328,"code",22),e(329,"EventEmitter"),t()(),o(330,"td",23),e(331,"-"),t(),o(332,"td",24)(333,"em")(334,"strong"),e(335,"(opcional)"),t()(),o(336,"p"),e(337,"Evento disparado quando o valor do "),o(338,"em"),e(339,"checkbox"),t(),e(340," for alterado."),t()()(),o(341,"tr",17)(342,"td",18)(343,"div",25)(344,"span",26),e(345," p-disabled"),a(346,"br"),t()()(),o(347,"td",21)(348,"code",28),e(349,"boolean"),t()(),o(350,"td",23)(351,"p")(352,"code"),e(353,"false"),t()()(),o(354,"td",24)(355,"em")(356,"strong"),e(357,"(opcional)"),t()(),o(358,"p"),e(359,"Define o estado do "),o(360,"em"),e(361,"checkbox"),t(),e(362," como desabilitado."),t()()(),o(363,"tr",17)(364,"td",18)(365,"div",25)(366,"span",26),e(367," p-help"),a(368,"br"),t()()(),o(369,"td",21)(370,"code",27),e(371,"string"),t()(),o(372,"td",23),e(373,"-"),t(),o(374,"td",24)(375,"em")(376,"strong"),e(377,"(opcional)"),t()(),o(378,"p"),e(379,"Texto de apoio do campo"),t()()(),o(380,"tr",17)(381,"td",18)(382,"div",19)(383,"span",20),e(384," (p-keydown)"),a(385,"br"),t()()(),o(386,"td",21)(387,"code",22),e(388,"EventEmitter"),t()(),o(389,"td",23),e(390,"-"),t(),o(391,"td",24)(392,"em")(393,"strong"),e(394,"(opcional)"),t()(),o(395,"p"),e(396,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(397,"code"),e(398,"KeyboardEvent"),t(),e(399," com informa\xE7\xF5es sobre a tecla."),t()()(),o(400,"tr",17)(401,"td",18)(402,"div",25)(403,"span",26),e(404," p-label"),a(405,"br"),t()()(),o(406,"td",21)(407,"code",27),e(408,"string"),t()(),o(409,"td",23),e(410,"-"),t(),o(411,"td",24)(412,"em")(413,"strong"),e(414,"(opcional)"),t()(),o(415,"p"),e(416,"Texto de exibi\xE7\xE3o do "),o(417,"em"),e(418,"checkbox"),t(),e(419,"."),t()()(),o(420,"tr",17)(421,"td",18)(422,"div",25)(423,"span",26),e(424," name"),a(425,"br"),t()()(),o(426,"td",21)(427,"code",27),e(428,"string"),t()(),o(429,"td",23),e(430,"-"),t(),o(431,"td",24)(432,"p"),e(433,"Define o nome do "),o(434,"em"),e(435,"checkbox"),t(),e(436,"."),t()()(),o(437,"tr",17)(438,"td",18)(439,"div",25)(440,"span",26),e(441," p-size"),a(442,"br"),t()()(),o(443,"td",21)(444,"code",27),e(445,"string"),t()(),o(446,"td",23)(447,"p")(448,"code"),e(449,"medium"),t()()(),o(450,"td",24)(451,"em")(452,"strong"),e(453,"(opcional)"),t()(),o(454,"p"),e(455,"Define o tamanho da caixa de sele\xE7\xE3o do componente:"),t(),o(456,"ul")(457,"li")(458,"code"),e(459,"small"),t(),e(460,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(461,"li")(462,"code"),e(463,"medium"),t(),e(464,": 24x24."),t(),o(465,"li")(466,"code"),e(467,"large"),t(),e(468,": 32x32."),t()(),o(469,"blockquote")(470,"p"),e(471,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(472,"code"),e(473,"medium"),t(),e(474,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(475,"a",29),e(476,"po-theme"),t(),e(477,"."),t()()()()(),o(478,"h3",13),e(479,"M\xE9todos"),t(),o(480,"table",30)(481,"tr",17)(482,"th",31)(483,"div",25)(484,"h4")(485,"span",26),e(486," focus "),t()()()()(),o(487,"tr",24)(488,"td",24)(489,"p"),e(490,"Fun\xE7\xE3o que atribui foco ao "),o(491,"em"),e(492,"checkbox"),t(),e(493,"."),t(),o(494,"p"),e(495,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a refer\xEAncia do componente no DOM atrav\xE9s do "),o(496,"code"),e(497,"ViewChild"),t(),e(498,", como por exemplo:"),t(),o(499,"pre")(500,"code"),e(501,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),t()()()()(),a(502,"br"),o(503,"table",30)(504,"tr",17)(505,"th",31)(506,"div",25)(507,"h4")(508,"span",26),e(509," showAdditionalHelp "),t()()()()(),o(510,"tr",24)(511,"td",24)(512,"p"),e(513,"M\xE9todo que exibe "),o(514,"code"),e(515,"p-additionalHelpTooltip"),t(),e(516," ou executa a a\xE7\xE3o definida em "),o(517,"code"),e(518,"p-additionalHelp"),t(),e(519,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),o(520,"code"),e(521,"p-keydown"),t(),e(522,"."),t(),o(523,"pre")(524,"code"),e(525,`<po-checkbox
 #checkbox
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),t()(),o(526,"pre")(527,"code"),e(528,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(529,"br"),t())},dependencies:[k],encapsulation:2})}return i})();var ue=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||i)(F(Z),F($))};static \u0275cmp=s({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Checkbox",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-checkbox-doc"),t(),o(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-checkbox-basic-view")(6,"sample-po-checkbox-labs-view")(7,"sample-po-checkbox-acceptance-term-view"),t()()()),l&2&&(c("p-actions",n.actions),d(2),c("p-active",n.activeTab==="doc"),d(2),c("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ie,f,v,pe,de,ce,se],encapsulation:2})}return i})();var Pe=[{path:"",component:ue}],he=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=I({type:i});static \u0275inj=M({imports:[V.forChild(Pe),V]})}return i})();var Je=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=I({type:i});static \u0275inj=M({imports:[ae,he]})}return i})();export{Je as DocPoCheckboxModule};
