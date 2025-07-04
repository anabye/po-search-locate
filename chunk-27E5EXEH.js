import{o as C,p as oe}from"./chunk-R3BKLGLC.js";import{Ab as x,F as X,Ga as ee,Za as te,a as K,ha as Z,ja as $,nb as L,o as S,p as P,zb as E}from"./chunk-TUTTJOS2.js";import{$a as T,Ba as A,Ea as o,Fa as e,Ga as r,Ka as N,La as u,M,Nc as U,Pc as J,Rc as q,T as h,Ta as R,U as g,Ua as W,Va as j,Wa as O,Xa as t,Za as f,ab as k,bb as _,eb as w,ha as d,ia as D,oa as s,pa as F,ua as z,ub as y,vb as Q,wc as G,ya as c,zc as Y}from"./chunk-MIQUIDUB.js";var ne=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-accordion-basic"]],standalone:!1,decls:7,vars:0,consts:[["p-label","PO Accordion 1"],[1,"po-text-color-neutral-dark-40"],["p-label","PO Accordion 2"]],template:function(i,a){i&1&&(o(0,"po-accordion")(1,"po-accordion-item",0)(2,"p",1),t(3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),e()(),o(4,"po-accordion-item",2)(5,"p",1),t(6," In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque "),e()()())},dependencies:[P,S],encapsulation:2})}return n})();var ue=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-accordion-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(r(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Accordion Basic"),e(),o(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-accordion-basic/sample-po-accordion-basic.component.html"),e(),o(13,"pre",7),t(14,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-accordion-basic/sample-po-accordion-basic.component.ts"),e(),o(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),e()()()()(),o(21,"div",10),r(22,"sample-po-accordion-basic"),e(),r(23,"hr")),i&2&&(d(5),A("po-icon "+a.sampleCodeButtonIcon),d(),f(" ",a.sampleCodeButtonLabel,""),d(),c("ngClass",w(4,ue,a.hideSampleCodeTabs)))},dependencies:[y,C,E,x,ne],encapsulation:2})}return n})();function he(n,H){if(n&1&&(o(0,"po-accordion-item",16),t(1),e()),n&2){let l=H.$implicit,i=H.index;c("p-label",l.label)("p-disabled",l.disabledItem)("p-label-tag",l.labelTag)("p-type-tag",l.typeTag),d(),f(" Accordion Item Content ",i," ")}}var ae=(()=>{class n{accordionFieldsForm=[{property:"label",required:!0,gridColumns:6},{property:"labelTag",label:"Label Tag",gridColumns:6}];propertiesAccordionOptions=[{value:"showManager",label:"Show Accordion Manager"},{value:"expandItems",label:"Allow Expand All Items"}];typeTagOptions=[{value:"success",label:"Success"},{value:"warning",label:"Warning"},{value:"danger",label:"Danger"},{value:"info",label:"Info"}];disabledOption=[{value:"disabled",label:"Disabled"}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];ngOnInit(){this.restore()}addAccordionItem(l){l.disabledItem=this.disabledItem.includes("disabled"),l.labelTag&&(l.typeTag=this.typeTag);let i=Object.assign({},l,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,i],this.disabledItem=[],this.typeTag=void 0}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals="",this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-accordion-labs"]],standalone:!1,decls:16,vars:14,consts:[["accordionForm",""],[3,"p-literals","p-show-manager-accordion","p-allow-expand-all-items"],[3,"p-label","p-disabled","p-label-tag","p-type-tag",4,"ngFor","ngForOf"],["p-label","ACCORDION"],[1,"po-row","po-mt-1","po-mb-1"],["name","literals","p-help",'Ex.: {"closeAllItems": "Fechar itens"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","propertiesAccordion","p-label","Properties Accordion",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","ACCORDION ITEM"],[3,"p-fields","p-value"],[1,"po-row","po-mt-2","po-mb-2"],["p-label","Type Tag",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],["p-label","Properties Accordion Item","name","disabledItem",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-row","po-mt-1"],["p-label","Add Accordion",1,"po-md-6",3,"p-click","p-disabled"],[1,"po-row","po-mt-2"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],[3,"p-label","p-disabled","p-label-tag","p-type-tag"]],template:function(i,a){if(i&1){let m=N();o(0,"po-accordion",1),z(1,he,2,5,"po-accordion-item",2),e(),r(2,"po-divider",3),o(3,"div",4)(4,"po-input",5),_("ngModelChange",function(p){return h(m),k(a.literals,p)||(a.literals=p),g(p)}),u("p-change",function(){return h(m),g(a.changeLiterals())}),e(),o(5,"po-checkbox-group",6),_("ngModelChange",function(p){return h(m),k(a.propertiesAccordion,p)||(a.propertiesAccordion=p),g(p)}),e()(),r(6,"po-divider",7)(7,"po-dynamic-form",8,0),o(9,"div",9)(10,"po-radio-group",10),_("ngModelChange",function(p){return h(m),k(a.typeTag,p)||(a.typeTag=p),g(p)}),e(),o(11,"po-checkbox-group",11),_("ngModelChange",function(p){return h(m),k(a.disabledItem,p)||(a.disabledItem=p),g(p)}),e()(),o(12,"div",12)(13,"po-button",13),u("p-click",function(){h(m);let p=O(8);return a.addAccordionItem(p.form.value),g(p.form.reset())}),e()(),o(14,"div",14)(15,"po-button",15),u("p-click",function(){return h(m),g(a.restore())}),e()()}if(i&2){let m=O(8);c("p-literals",a.customLiterals)("p-show-manager-accordion",a.propertiesAccordion.includes("showManager"))("p-allow-expand-all-items",a.propertiesAccordion.includes("expandItems")),d(),c("ngForOf",a.accordionItems),d(3),T("ngModel",a.literals),d(),T("ngModel",a.propertiesAccordion),c("p-options",a.propertiesAccordionOptions),d(2),c("p-fields",a.accordionFieldsForm)("p-value",a.accordionItems),d(3),c("p-options",a.typeTagOptions),T("ngModel",a.typeTag),d(),c("p-options",a.disabledOption),T("ngModel",a.disabledItem),d(2),c("p-disabled",m.form.invalid)}},dependencies:[Q,G,Y,P,S,X,K,te,Z,$,ee],encapsulation:2})}return n})();var fe=n=>({"docs-sample-code-tabs":n}),re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-accordion-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(r(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Accordion Labs"),e(),o(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-accordion-labs/sample-po-accordion-labs.component.html"),e(),o(13,"pre",7),t(14,`<po-accordion
  [p-literals]="customLiterals"
  [p-show-manager-accordion]="propertiesAccordion.includes('showManager')"
  [p-allow-expand-all-items]="propertiesAccordion.includes('expandItems')"
>
  <po-accordion-item
    *ngFor="let accordionItem of accordionItems; let i = index"
    [p-label]="accordionItem.label"
    [p-disabled]="accordionItem.disabledItem"
    [p-label-tag]="accordionItem.labelTag"
    [p-type-tag]="accordionItem.typeTag"
  >
    Accordion Item Content { { i }}
  </po-accordion-item>
</po-accordion>

<po-divider p-label="ACCORDION"></po-divider>
<div class="po-row po-mt-1 po-mb-1">
  <po-input
    class="po-md-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"closeAllItems": "Fechar itens"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>
  <po-checkbox-group
    class="po-md-6"
    name="propertiesAccordion"
    [(ngModel)]="propertiesAccordion"
    p-label="Properties Accordion"
    [p-options]="propertiesAccordionOptions"
  >
  </po-checkbox-group>
</div>

<po-divider p-label="ACCORDION ITEM"></po-divider>
<po-dynamic-form #accordionForm [p-fields]="accordionFieldsForm" [p-value]="accordionItems"> </po-dynamic-form>

<div class="po-row po-mt-2 po-mb-2">
  <po-radio-group class="po-md-6" p-label="Type Tag" [p-options]="typeTagOptions" [(ngModel)]="typeTag">
  </po-radio-group>
  <po-checkbox-group
    class="po-md-6"
    p-label="Properties Accordion Item"
    name="disabledItem"
    [p-options]="disabledOption"
    [(ngModel)]="disabledItem"
  >
  </po-checkbox-group>
</div>

<div class="po-row po-mt-1">
  <po-button
    class="po-md-6"
    p-label="Add Accordion"
    [p-disabled]="accordionForm.form.invalid"
    (p-click)="addAccordionItem(accordionForm.form.value); accordionForm.form.reset()"
  >
  </po-button>
</div>

<div class="po-row po-mt-2">
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-accordion-labs/sample-po-accordion-labs.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import {
  PoAccordionItemComponent,
  PoAccordionLiterals,
  PoCheckboxGroupOption,
  PoDynamicFormField,
  PoRadioGroupOption,
  PoTagType
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-accordion-labs',
  templateUrl: './sample-po-accordion-labs.component.html',
  standalone: false
})
export class SamplePoAccordionLabsComponent implements OnInit {
  accordionFieldsForm: Array<PoDynamicFormField> = [
    { property: 'label', required: true, gridColumns: 6 },
    { property: 'labelTag', label: 'Label Tag', gridColumns: 6 }
  ];

  propertiesAccordionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'showManager', label: 'Show Accordion Manager' },
    { value: 'expandItems', label: 'Allow Expand All Items' }
  ];

  typeTagOptions: Array<PoRadioGroupOption> = [
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'danger', label: 'Danger' },
    { value: 'info', label: 'Info' }
  ];

  disabledOption: Array<PoRadioGroupOption> = [{ value: 'disabled', label: 'Disabled' }];

  properties: Array<string> = [];
  propertiesAccordion: Array<string> = [];
  disabledItem: Array<string> = [];

  accordionItemIndex: number;
  customLiterals: PoAccordionLiterals;
  literals: string;
  typeTag: PoTagType;
  accordionItems: Array<PoAccordionItemComponent> = [];

  ngOnInit() {
    this.restore();
  }

  addAccordionItem(accordionItem: PoAccordionItemComponent) {
    accordionItem.disabledItem = this.disabledItem.includes('disabled');
    if (accordionItem.labelTag) {
      accordionItem.typeTag = this.typeTag;
    }
    const newAccordionItem = Object.assign({}, accordionItem, { value: this.accordionItems.length });

    this.accordionItems = [...this.accordionItems, newAccordionItem];
    this.disabledItem = [];
    this.typeTag = undefined;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.accordionItems = [];
    this.customLiterals = undefined;
    this.disabledItem = [];
    this.literals = '';
    this.properties = [];
    this.propertiesAccordion = [];
    this.typeTag = undefined;
  }
}
`),e()()()()(),o(21,"div",10),r(22,"sample-po-accordion-labs"),e(),r(23,"hr")),i&2&&(d(5),A("po-icon "+a.sampleCodeButtonIcon),d(),f(" ",a.sampleCodeButtonLabel,""),d(),c("ngClass",w(4,fe,a.hideSampleCodeTabs)))},dependencies:[y,C,E,x,ae],encapsulation:2})}return n})();var le=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand()}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-accordion-faq"]],viewQuery:function(i,a){if(i&1&&R(S,7),i&2){let m;W(m=j())&&(a.questionOne=m.first)}},standalone:!1,decls:22,vars:1,consts:[["questionOne",""],["p-title","Blood donation FAQs"],[1,"po-pb-2","po-text-color-neutral-dark-40"],[3,"p-show-manager-accordion"],["p-label","Who can donate?"],[1,"po-text-color-neutral-dark-40"],["p-label","How long does it take for the blood to be processed?","p-label-tag","Important!","p-type-tag","danger"],["p-label","How long does the body take to replenish donated blood?"],["p-label","Is donating blood safe?"],[1,"po-pt-2","po-text-color-neutral-dark-40"],["href","http://www.hemosc.org.br/perguntas-frequentes.html"]],template:function(i,a){i&1&&(o(0,"po-page-default",1)(1,"p",2),t(2,"You don't have to be afraid of being a blood donor!"),e(),o(3,"po-accordion",3)(4,"po-accordion-item",4,0)(6,"p",5),t(7," In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. "),e()(),o(8,"po-accordion-item",6)(9,"p",5),t(10," Blood is processed as soon as collected, preferably within 6 hours of donation. "),e()(),o(11,"po-accordion-item",7)(12,"p",5),t(13," Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. "),e()(),o(14,"po-accordion-item",8)(15,"p",5),t(16," Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. "),e()()(),o(17,"p",9),t(18," For more information, see the "),o(19,"a",10),t(20,"Hemosc FAQ"),e(),t(21,". "),e()()),i&2&&(d(3),c("p-show-manager-accordion",!0))},dependencies:[P,S,L],encapsulation:2})}return n})();var xe=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-accordion-faq-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(r(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Accordion - FAQs"),e(),o(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-accordion-faq/sample-po-accordion-faq.component.html"),e(),o(13,"pre",7),t(14,`<po-page-default p-title="Blood donation FAQs">
  <p class="po-pb-2 po-text-color-neutral-dark-40">You don't have to be afraid of being a blood donor!</p>

  <po-accordion [p-show-manager-accordion]="true">
    <po-accordion-item p-label="Who can donate?" #questionOne>
      <p class="po-text-color-neutral-dark-40">
        In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance
        with current legislation and a number of factors that take into account the risk that such a donation may pose
        to the health of the candidate himself and to the health of the individual receiving the donated blood.
      </p>
    </po-accordion-item>

    <po-accordion-item
      p-label="How long does it take for the blood to be processed?"
      p-label-tag="Important!"
      p-type-tag="danger"
    >
      <p class="po-text-color-neutral-dark-40">
        Blood is processed as soon as collected, preferably within 6 hours of donation.
      </p>
    </po-accordion-item>

    <po-accordion-item p-label="How long does the body take to replenish donated blood?">
      <p class="po-text-color-neutral-dark-40">
        Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of
        childbearing age.
      </p>
    </po-accordion-item>

    <po-accordion-item p-label="Is donating blood safe?">
      <p class="po-text-color-neutral-dark-40">
        Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there
        is a small risk that the donor may feel unwell during or shortly after the donation especially the first few
        times he or she donates, but the services are concerned about this, watching and making sure the donors feel
        nothing or feel feel so that they are well assisted until full recovery.
      </p>
    </po-accordion-item>
  </po-accordion>

  <p class="po-pt-2 po-text-color-neutral-dark-40">
    For more information, see the <a href="http://www.hemosc.org.br/perguntas-frequentes.html">Hemosc FAQ</a>.
  </p>
</po-page-default>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-accordion-faq/sample-po-accordion-faq.component.ts"),e(),o(19,"pre",9),t(20,`import { AfterContentInit, Component, ViewChild } from '@angular/core';

import { PoAccordionItemComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-accordion-faq',
  templateUrl: './sample-po-accordion-faq.component.html',
  standalone: false
})
export class SamplePoAccordionFaqComponent implements AfterContentInit {
  @ViewChild(PoAccordionItemComponent, { static: true }) questionOne: PoAccordionItemComponent;

  ngAfterContentInit() {
    this.questionOne.expand();
  }
}
`),e()()()()(),o(21,"div",10),r(22,"sample-po-accordion-faq"),e(),r(23,"hr")),i&2&&(d(5),A("po-icon "+a.sampleCodeButtonIcon),d(),f(" ",a.sampleCodeButtonLabel,""),d(),c("ngClass",w(4,xe,a.hideSampleCodeTabs)))},dependencies:[y,C,E,x,le],encapsulation:2})}return n})();var ce=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-accordion-doc"]],standalone:!1,decls:514,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-accordion-item"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoAccordionLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","string"]],template:function(i,a){i&1&&(o(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoAccordionModule } from '@po-ui/ng-components';"),e()(),o(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente "),o(7,"code"),t(8,"po-accordion"),e(),t(9,"."),e(),o(10,"blockquote")(11,"p"),t(12,"Para o correto funcionamento do componente "),o(13,"code"),t(14,"po-accordion"),e(),t(15,", deve ser importado o m\xF3dulo "),o(16,"code"),t(17,"BrowserAnimationsModule"),e(),t(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),e()(),o(19,"p"),t(20,"M\xF3dulo da aplica\xE7\xE3o:"),e(),o(21,"pre")(22,"code"),t(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
`),e()(),o(24,"p"),t(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),e(),o(26,"pre")(27,"code"),t(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),e()()(),o(29,"h3",3),t(30,"Componente"),e(),o(31,"h4",4)(32,"code",5),t(33,"PoAccordionComponent"),e()(),o(34,"div",2)(35,"p"),t(36,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),e(),o(37,"p"),t(38,"Para utiliz\xE1-lo, \xE9 necess\xE1rio envolver cada item no componente "),o(39,"a",6)(40,"code"),t(41,"po-accordion-item"),e()(),t(42,`,
como no exemplo abaixo:`),e(),o(43,"pre")(44,"code"),t(45,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),e()(),o(46,"p"),t(47,"e no typescript pode-se utilizar o "),o(48,"code"),t(49,"@ViewChild"),e(),t(50,":"),e(),o(51,"pre")(52,"code"),t(53,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),e()(),o(54,"p"),t(55,"O componente j\xE1 faz o controle de abertura e fechamento dos itens automaticamente."),e(),o(56,"p"),t(57,"Caso houver a necessidade de abrir algum dos "),o(58,"code"),t(59,"po-accordion-item"),e(),t(60,` via Typescript
acesse a `),o(61,"a",6),t(62,"documenta\xE7\xE3o do PoAccordionItem"),e(),t(63,"."),e(),o(64,"h4"),t(65,"Tokens customiz\xE1veis"),e(),o(66,"p"),t(67,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),o(68,"blockquote")(69,"p"),t(70,"Para maiores informa\xE7\xF5es, acesse o guia "),o(71,"a",7),t(72,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(73,"."),e()(),o(74,"table")(75,"thead")(76,"tr")(77,"th"),t(78,"Propriedade"),e(),o(79,"th"),t(80,"Descri\xE7\xE3o"),e(),o(81,"th"),t(82,"Valor Padr\xE3o"),e()()(),o(83,"tbody")(84,"tr")(85,"td")(86,"strong"),t(87,"Default Values"),e()(),r(88,"td")(89,"td"),e(),o(90,"tr")(91,"td")(92,"code"),t(93,"--font-family"),e()(),o(94,"td"),t(95,"Fam\xEDlia tipogr\xE1fica usada"),e(),o(96,"td")(97,"code"),t(98,"var(--font-family-theme)"),e()()(),o(99,"tr")(100,"td")(101,"code"),t(102,"--font-size"),e()(),o(103,"td"),t(104,"Tamanho da fonte"),e(),o(105,"td")(106,"code"),t(107,"var(--font-size-default)"),e()()(),o(108,"tr")(109,"td")(110,"code"),t(111,"--color"),e()(),o(112,"td"),t(113,"Cor principal do accordion"),e(),o(114,"td")(115,"code"),t(116,"var(--color-action-default)"),e()()(),o(117,"tr")(118,"td")(119,"code"),t(120,"--background-color"),e()(),o(121,"td"),t(122,"Cor de background"),e(),o(123,"td")(124,"code"),t(125,"var(--color-neutral-light-00)"),e()()(),o(126,"tr")(127,"td")(128,"code"),t(129,"--font-weight"),e()(),o(130,"td"),t(131,"Peso da fonte"),e(),o(132,"td")(133,"code"),t(134,"var(--font-weight-bold)"),e()()(),o(135,"tr")(136,"td")(137,"strong"),t(138,"Hover"),e()(),r(139,"td")(140,"td"),e(),o(141,"tr")(142,"td")(143,"code"),t(144,"--color-hover"),e()(),o(145,"td"),t(146,"Cor principal no estado hover"),e(),o(147,"td")(148,"code"),t(149,"var(--color-action-hover)"),e()()(),o(150,"tr")(151,"td")(152,"code"),t(153,"--background-hover"),e()(),o(154,"td"),t(155,"Cor de background no estado hover"),e(),o(156,"td")(157,"code"),t(158,"var(--color-brand-01-lightest)"),e()()(),o(159,"tr")(160,"td")(161,"strong"),t(162,"Focused"),e()(),r(163,"td")(164,"td"),e(),o(165,"tr")(166,"td")(167,"code"),t(168,"--color-focused"),e()(),o(169,"td"),t(170,"Cor principal no estado de focus"),e(),o(171,"td")(172,"code"),t(173,"var(--color-action-focus)"),e()()(),o(174,"tr")(175,"td")(176,"code"),t(177,"--outline-color-focused"),e(),t(178," \xA0"),e(),o(179,"td"),t(180,"Cor do outline do estado de focus"),e(),o(181,"td")(182,"code"),t(183,"var(--color-action-focus)"),e()()(),o(184,"tr")(185,"td")(186,"strong"),t(187,"Disabled"),e()(),r(188,"td")(189,"td"),e(),o(190,"tr")(191,"td")(192,"code"),t(193,"--color-disabled"),e()(),o(194,"td"),t(195,"Cor principal no estado disabled"),e(),o(196,"td")(197,"code"),t(198,"var(--color-neutral-mid-60)"),e()()(),o(199,"tr")(200,"td")(201,"code"),t(202,"--background-disabled"),e(),t(203," \xA0"),e(),o(204,"td"),t(205,"Cor de background no estado disabled"),e(),o(206,"td")(207,"code"),t(208,"var(--color-neutral-light-10)"),e()()(),o(209,"tr")(210,"td")(211,"strong"),t(212,"po-accordion-manager"),e()(),r(213,"td")(214,"td"),e(),o(215,"tr")(216,"td")(217,"code"),t(218,"--background-color"),e()(),o(219,"td"),t(220,"Cor de background"),e(),o(221,"td")(222,"code"),t(223,"var(--color-neutral-mid-60)"),e()()(),o(224,"tr")(225,"td")(226,"code"),t(227,"--color"),e()(),o(228,"td"),t(229,"Cor principal do accordion manager"),e(),o(230,"td")(231,"code"),t(232,"var(--color-neutral-light-10)"),e()()(),o(233,"tr")(234,"td")(235,"code"),t(236,"--font-family"),e()(),o(237,"td"),t(238,"Fam\xEDlia tipogr\xE1fica usada"),e(),o(239,"td")(240,"code"),t(241,"var(--color-neutral-light-10)"),e()()(),o(242,"tr")(243,"td")(244,"code"),t(245,"--font-size"),e()(),o(246,"td"),t(247,"Tamanho da fonte"),e(),o(248,"td")(249,"code"),t(250,"var(--color-neutral-light-10)"),e()()(),o(251,"tr")(252,"td")(253,"code"),t(254,"--font-weight"),e()(),o(255,"td"),t(256,"Peso da fonte"),e(),o(257,"td")(258,"code"),t(259,"var(--color-neutral-light-10)"),e()()(),o(260,"tr")(261,"td")(262,"strong"),t(263,"Pressed"),e()(),r(264,"td")(265,"td"),e(),o(266,"tr")(267,"td")(268,"code"),t(269,"--background-pressed"),e(),t(270," \xA0"),e(),o(271,"td"),t(272,"Cor de background no estado de pressionado\xA0"),e(),o(273,"td")(274,"code"),t(275,"var(--color-brand-01-lighter)"),e()()(),o(276,"tr")(277,"td")(278,"code"),t(279,"--color-pressed"),e()(),o(280,"td"),t(281,"Cor principal no estado de pressionado"),e(),o(282,"td")(283,"code"),t(284,"var(--color-action-pressed)"),e()()()()()(),o(285,"div",8)(286,"h4",9),t(287,"Seletor"),e(),o(288,"pre",10),t(289,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean" >
</po-accordion>
`),e()(),o(290,"h4",11),t(291,"Propriedades"),e(),o(292,"table",12)(293,"tr",13)(294,"th",14),t(295,"Nome"),e(),o(296,"th",14),t(297,"Tipo"),e(),o(298,"th",14),t(299,"Padr\xE3o"),e(),o(300,"th",14),t(301,"Descri\xE7\xE3o"),e()(),o(302,"tr",15)(303,"td",16)(304,"div",17)(305,"span",18),t(306," p-allow-expand-all-items"),r(307,"br"),e()()(),o(308,"td",19)(309,"code",20),t(310,"boolean"),e()(),o(311,"td",21)(312,"p")(313,"code"),t(314,"false"),e()()(),o(315,"td",22)(316,"em")(317,"strong"),t(318,"(opcional)"),e()(),o(319,"p"),t(320,"Permite expandir mais de um "),o(321,"code"),t(322,"<po-accordion-item></po-accordion-item>"),e(),t(323,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),o(324,"code"),t(325,"p-show-manager-accordion"),e(),t(326," esteja como "),o(327,"code"),t(328,"true"),e(),t(329,"."),e()()(),o(330,"tr",15)(331,"td",16)(332,"div",23)(333,"span",24),t(334," (p-collapse-all)"),r(335,"br"),e()()(),o(336,"td",19)(337,"code",25),t(338,"EventEmitter"),e()(),o(339,"td",21),t(340,"-"),e(),o(341,"td",22)(342,"em")(343,"strong"),t(344,"(opcional)"),e()(),o(345,"p"),t(346,"Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente."),e()()(),o(347,"tr",15)(348,"td",16)(349,"div",23)(350,"span",24),t(351," (p-expand-all)"),r(352,"br"),e()()(),o(353,"td",19)(354,"code",25),t(355,"EventEmitter"),e()(),o(356,"td",21),t(357,"-"),e(),o(358,"td",22)(359,"em")(360,"strong"),t(361,"(opcional)"),e()(),o(362,"p"),t(363,"Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente."),e()()(),o(364,"tr",15)(365,"td",16)(366,"div",17)(367,"span",18),t(368," p-literals"),r(369,"br"),e()()(),o(370,"td",19)(371,"code",26),t(372,"PoAccordionLiterals"),e()(),o(373,"td",21),t(374,"-"),e(),o(375,"td",22)(376,"em")(377,"strong"),t(378,"(opcional)"),e()(),o(379,"p"),t(380,"Objeto com as literais usadas no "),o(381,"code"),t(382,"po-accordion"),e(),t(383,"."),e(),o(384,"p"),t(385,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),o(386,"pre")(387,"code"),t(388,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),e()(),o(389,"p"),t(390,"Ou passando apenas as literais que deseja customizar:"),e(),o(391,"pre")(392,"code"),t(393,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),e()(),o(394,"p"),t(395,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),o(396,"pre")(397,"code"),t(398,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),e()(),o(399,"blockquote")(400,"p"),t(401,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),o(402,"a",27)(403,"code"),t(404,"PoI18nService"),e()(),t(405," ou do browser."),e()()()(),o(406,"tr",15)(407,"td",16)(408,"div",17)(409,"span",18),t(410," p-show-manager-accordion"),r(411,"br"),e()()(),o(412,"td",19)(413,"code",20),t(414,"boolean"),e()(),o(415,"td",21)(416,"p")(417,"code"),t(418,"false"),e()()(),o(419,"td",22)(420,"em")(421,"strong"),t(422,"(opcional)"),e()(),o(423,"p"),t(424,"Exibe o Gerenciador de Accordion."),e()()()(),o(425,"h3",11),t(426,"M\xE9todos"),e(),o(427,"table",28)(428,"tr",15)(429,"th",29)(430,"div",17)(431,"h4")(432,"span",18),t(433," collapseAllItems "),e()()()()(),o(434,"tr",22)(435,"td",22)(436,"p"),t(437,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),o(438,"code"),t(439,"p-show-manager-accordion"),e(),t(440," estiver como "),o(441,"code"),t(442,"true"),e(),t(443,"."),e()()()(),r(444,"br"),o(445,"table",28)(446,"tr",15)(447,"th",29)(448,"div",17)(449,"h4")(450,"span",18),t(451," expandAllItems "),e()()()()(),o(452,"tr",22)(453,"td",22)(454,"p"),t(455,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),o(456,"code"),t(457,"p-show-manager-accordion"),e(),t(458," estiver como "),o(459,"code"),t(460,"true"),e(),t(461,"."),e()()()(),r(462,"br"),o(463,"h3"),t(464,"Interfaces"),e(),o(465,"h4",30)(466,"code",5),t(467,"PoAccordionLiterals"),e()(),o(468,"div",2)(469,"p"),t(470,"Interface para defini\xE7\xE3o das literais usadas no "),o(471,"code"),t(472,"po-accordion"),e(),t(473,"."),e()(),o(474,"h4",11),t(475,"Propriedades"),e(),o(476,"table",12)(477,"tr",13)(478,"th",14),t(479,"Nome"),e(),o(480,"th",14),t(481,"Tipo"),e(),o(482,"th",14),t(483,"Descri\xE7\xE3o"),e()(),o(484,"tr",15)(485,"td",16)(486,"div",17)(487,"span",18),t(488," closeAllItems"),r(489,"br"),e()()(),o(490,"td",19)(491,"code",31),t(492,"string"),e()(),o(493,"td",22)(494,"em")(495,"strong"),t(496,"(opcional)"),e()(),o(497,"p"),t(498,"Label do gerenciador de Accordion para colapsar todos os itens"),e()()(),o(499,"tr",15)(500,"td",16)(501,"div",17)(502,"span",18),t(503," expandAllItems"),r(504,"br"),e()()(),o(505,"td",19)(506,"code",31),t(507,"string"),e()(),o(508,"td",22)(509,"em")(510,"strong"),t(511,"(opcional)"),e()(),o(512,"p"),t(513,"Label do gerenciador de Accordion para expandir todos os itens."),e()()()()())},dependencies:[C],encapsulation:2})}return n})();var pe=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,i){this.route=l,this.router=i}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(i){return new(i||n)(D(U),D(J))};static \u0275cmp=s({type:n,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Accordion",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,a){i&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return a.changeTab("doc")}),r(3,"sample-po-accordion-doc"),e(),o(4,"po-tab",3),u("p-click",function(){return a.changeTab("web")}),r(5,"sample-po-accordion-basic-view")(6,"sample-po-accordion-labs-view")(7,"sample-po-accordion-faq-view"),e()()()),i&2&&(c("p-actions",a.actions),d(2),c("p-active",a.activeTab==="doc"),d(2),c("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[L,E,x,ie,re,de,ce],encapsulation:2})}return n})();var Ae=[{path:"",component:pe}],me=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=F({type:n});static \u0275inj=M({imports:[q.forChild(Ae),q]})}return n})();var Je=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=F({type:n});static \u0275inj=M({imports:[oe,me]})}return n})();export{Je as DocPoAccordionModule};
