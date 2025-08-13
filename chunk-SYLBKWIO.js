import{o as P,p as ne}from"./chunk-MMZVQUBQ.js";import{Ab as x,Ca as Z,F as T,Ga as $,H as J,I as C,Ra as ee,Sa as te,T as K,ha as G,ja as X,nb as oe,zb as v}from"./chunk-522XRIZO.js";import{Ac as R,Ba as _,Bc as H,Fa as o,Ga as e,Ha as r,La as w,M as z,Ma as g,Oc as U,Qc as Y,Sc as j,T as c,U as u,Ua as L,Va as V,Wa as F,Xa as W,Ya as t,_a as M,ab as S,bb as E,cb as f,fb as A,ha as d,ia as O,oa as h,pa as B,vb as k,xc as q,ya as s,yc as N,zc as I}from"./chunk-WFKG4FNY.js";var ie=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=h({type:i,selectors:[["sample-po-modal-basic"]],standalone:!1,decls:4,vars:0,consts:[["modal",""],["p-title","PO Modal"],["p-label","Open modal",3,"p-click"]],template:function(l,n){if(l&1){let p=w();o(0,"po-modal",1,0),t(2," We are TOTVERS!!! "),e(),o(3,"po-button",2),g("p-click",function(){c(p);let a=W(1);return u(a.open())}),e()}},dependencies:[T,C],encapsulation:2})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=h({type:i,selectors:[["sample-po-modal-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Modal Basic"),e(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-modal-basic/sample-po-modal-basic.component.html"),e(),o(13,"pre",7),t(14,`<po-modal #modal p-title="PO Modal"> We are TOTVERS!!! </po-modal>

<po-button p-label="Open modal" (p-click)="modal.open()"> </po-button>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-modal-basic/sample-po-modal-basic.component.ts"),e(),o(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-modal-basic',
  templateUrl: './sample-po-modal-basic.component.html',
  standalone: false
})
export class SamplePoModalBasicComponent {}
`),e()()()()(),o(21,"div",10),r(22,"sample-po-modal-basic"),e(),r(23,"hr")),l&2&&(d(5),_("po-icon "+n.sampleCodeButtonIcon),d(),M(" ",n.sampleCodeButtonLabel,""),d(),s("ngClass",A(4,ge,n.hideSampleCodeTabs)))},dependencies:[k,P,v,x,ie],encapsulation:2})}return i})();var re=(()=>{class i{poModal;componentsSize;content;size;title;icon;primaryAction={action:()=>{this.poModal.close()},label:"Confirm"};primaryActionLabel;primaryActionProperties;primaryActionOptions=[{value:"danger",label:"Danger"},{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];secondaryAction={action:()=>{this.poModal.close()},label:"Cancel"};secondaryActionLabel;secondaryActionProperties;secondaryActionOptions=[{value:"disabled",label:"Disabled"},{value:"loading",label:"Loading"},{value:"danger",label:"Danger"}];propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];properties;sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];openModal(){this.primaryAction.disabled=this.primaryActionProperties.includes("disabled"),this.primaryAction.label=this.primaryActionLabel,this.primaryAction.loading=this.primaryActionProperties.includes("loading"),this.primaryAction.danger=this.primaryActionProperties.includes("danger"),this.secondaryAction.disabled=this.secondaryActionProperties.includes("disabled"),this.secondaryAction.label=this.secondaryActionLabel,this.secondaryAction.loading=this.secondaryActionProperties.includes("loading"),this.secondaryAction.danger=this.secondaryActionProperties.includes("danger"),this.poModal.open()}ngOnInit(){this.restore()}restore(){this.size=void 0,this.content=void 0,this.title="PO Modal",this.properties=[],this.primaryActionLabel=void 0,this.primaryActionProperties=[],this.secondaryActionLabel=void 0,this.secondaryActionProperties=[],this.componentsSize="medium",this.icon=void 0}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=h({type:i,selectors:[["sample-po-modal-labs"]],viewQuery:function(l,n){if(l&1&&L(C,7),l&2){let p;V(p=F())&&(n.poModal=p.first)}},standalone:!1,decls:19,vars:26,consts:[["f","ngForm"],[3,"p-click-out","p-components-size","p-hide-close","p-primary-action","p-secondary-action","p-size","p-title","p-icon"],["p-label","Open Modal",3,"p-click","p-disabled"],[1,"po-row"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","Content","p-clean","","p-label","Content","p-maxlength","200",1,"po-md-6",3,"ngModelChange","ngModel"],["name","primaryActionLabel","p-clean","","p-label","Primary action label","p-maxlength","30",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","primaryActionProperties","p-columns","3","p-label","Primary Action Properties",1,"po-md-12","po-lg-9",3,"ngModelChange","ngModel","p-options"],["name","secondaryActionLabel","p-clean","","p-label","Secondary action label","p-maxlength","100",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","secondaryActionProperties","p-columns","3","p-label","Secondary Action Properties",1,"po-md-12","po-lg-9",3,"ngModelChange","ngModel","p-options"],["name","Size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let p=w();o(0,"po-modal",1),t(1),e(),o(2,"po-button",2),g("p-click",function(){return c(p),u(n.openModal())}),e(),r(3,"hr"),o(4,"form",null,0)(6,"div",3)(7,"po-input",4),f("ngModelChange",function(a){return c(p),E(n.title,a)||(n.title=a),u(a)}),e(),o(8,"po-select",5),f("ngModelChange",function(a){return c(p),E(n.icon,a)||(n.icon=a),u(a)}),e(),o(9,"po-input",6),f("ngModelChange",function(a){return c(p),E(n.content,a)||(n.content=a),u(a)}),e(),o(10,"po-input",7),f("ngModelChange",function(a){return c(p),E(n.primaryActionLabel,a)||(n.primaryActionLabel=a),u(a)}),e(),o(11,"po-checkbox-group",8),f("ngModelChange",function(a){return c(p),E(n.primaryActionProperties,a)||(n.primaryActionProperties=a),u(a)}),e(),o(12,"po-input",9),f("ngModelChange",function(a){return c(p),E(n.secondaryActionLabel,a)||(n.secondaryActionLabel=a),u(a)}),e(),o(13,"po-checkbox-group",10),f("ngModelChange",function(a){return c(p),E(n.secondaryActionProperties,a)||(n.secondaryActionProperties=a),u(a)}),e(),o(14,"po-radio-group",11),f("ngModelChange",function(a){return c(p),E(n.size,a)||(n.size=a),u(a)}),e(),o(15,"po-checkbox-group",12),f("ngModelChange",function(a){return c(p),E(n.properties,a)||(n.properties=a),u(a)}),e(),o(16,"po-radio-group",13),f("ngModelChange",function(a){return c(p),E(n.componentsSize,a)||(n.componentsSize=a),u(a)}),e()(),o(17,"div",3)(18,"po-button",14),g("p-click",function(){return c(p),u(n.restore())}),e()()()}if(l&2){let p=W(5);s("p-click-out",n.properties.includes("click-out"))("p-components-size",n.componentsSize)("p-hide-close",n.properties.includes("hide-close"))("p-primary-action",n.primaryAction)("p-secondary-action",n.secondaryActionLabel?n.secondaryAction:null)("p-size",n.size)("p-title",n.title)("p-icon",n.icon),d(),M(" ",n.content,`
`),d(),s("p-disabled",p.form.invalid),d(5),S("ngModel",n.title),d(),S("ngModel",n.icon),s("p-options",n.iconOptions),d(),S("ngModel",n.content),d(),S("ngModel",n.primaryActionLabel),d(),S("ngModel",n.primaryActionProperties),s("p-options",n.primaryActionOptions),d(),S("ngModel",n.secondaryActionLabel),d(),S("ngModel",n.secondaryActionProperties),s("p-options",n.secondaryActionOptions),d(),S("ngModel",n.size),s("p-options",n.sizeOptions),d(),S("ngModel",n.properties),s("p-options",n.propertiesOptions),d(),S("ngModel",n.componentsSize),s("p-options",n.componentsSizeOptions)}},dependencies:[H,q,N,R,I,T,G,X,$,ee,C],encapsulation:2})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=h({type:i,selectors:[["sample-po-modal-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Modal Labs"),e(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-modal-labs/sample-po-modal-labs.component.html"),e(),o(13,"pre",7),t(14,`<po-modal
  [p-click-out]="properties.includes('click-out')"
  [p-components-size]="componentsSize"
  [p-hide-close]="properties.includes('hide-close')"
  [p-primary-action]="primaryAction"
  [p-secondary-action]="secondaryActionLabel ? secondaryAction : null"
  [p-size]="size"
  [p-title]="title"
  [p-icon]="icon"
>
  { { content }}
</po-modal>

<po-button p-label="Open Modal" [p-disabled]="f.form.invalid" (p-click)="openModal()"> </po-button>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6 po-lg-3" name="Title" [(ngModel)]="title" p-clean p-label="Title" p-required> </po-input>

    <po-select
      class="po-md-6 po-lg-3"
      name="icon"
      [(ngModel)]="icon"
      p-label="Icon"
      [p-options]="iconOptions"
    ></po-select>

    <po-input class="po-md-6" name="Content" [(ngModel)]="content" p-clean p-label="Content" p-maxlength="200">
    </po-input>

    <po-input
      class="po-md-6 po-lg-3"
      name="primaryActionLabel"
      [(ngModel)]="primaryActionLabel"
      p-clean
      p-label="Primary action label"
      p-maxlength="30"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12 po-lg-9"
      name="primaryActionProperties"
      [(ngModel)]="primaryActionProperties"
      p-columns="3"
      p-label="Primary Action Properties"
      [p-options]="primaryActionOptions"
    >
    </po-checkbox-group>

    <po-input
      class="po-md-6 po-lg-3"
      name="secondaryActionLabel"
      [(ngModel)]="secondaryActionLabel"
      p-clean
      p-label="Secondary action label"
      p-maxlength="100"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12 po-lg-9"
      name="secondaryActionProperties"
      [(ngModel)]="secondaryActionProperties"
      p-columns="3"
      p-label="Secondary Action Properties"
      [p-options]="secondaryActionOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="Size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-checkbox-group
      class="po-md-12 po-lg-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12 po-lg-6"
      name="componentsSize"
      [(ngModel)]="componentsSize"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-modal-labs/sample-po-modal-labs.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoModalAction,
  PoModalComponent,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-modal-labs',
  templateUrl: './sample-po-modal-labs.component.html',
  standalone: false
})
export class SamplePoModalLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  componentsSize: string;
  content;
  size;
  title;
  icon: string;

  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Confirm'
  };

  primaryActionLabel: string;
  primaryActionProperties: Array<string>;
  primaryActionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'danger', label: 'Danger' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  secondaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancel'
  };

  secondaryActionLabel: string;
  secondaryActionProperties: Array<string>;
  secondaryActionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' },
    { value: 'danger', label: 'Danger' }
  ];

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'click-out', label: 'Click Out' },
    { value: 'hide-close', label: 'Hide Close' }
  ];

  properties: Array<string>;

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra large', value: 'xl' },
    { label: 'Automatic', value: 'auto' }
  ];

  openModal() {
    this.primaryAction.disabled = this.primaryActionProperties.includes('disabled');
    this.primaryAction.label = this.primaryActionLabel;
    this.primaryAction.loading = this.primaryActionProperties.includes('loading');
    this.primaryAction.danger = this.primaryActionProperties.includes('danger');

    this.secondaryAction.disabled = this.secondaryActionProperties.includes('disabled');
    this.secondaryAction.label = this.secondaryActionLabel;
    this.secondaryAction.loading = this.secondaryActionProperties.includes('loading');
    this.secondaryAction.danger = this.secondaryActionProperties.includes('danger');

    this.poModal.open();
  }

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.size = undefined;
    this.content = undefined;
    this.title = 'PO Modal';
    this.properties = [];
    this.primaryActionLabel = undefined;
    this.primaryActionProperties = [];
    this.secondaryActionLabel = undefined;
    this.secondaryActionProperties = [];
    this.componentsSize = 'medium';
    this.icon = undefined;
  }
}
`),e()()()()(),o(21,"div",10),r(22,"sample-po-modal-labs"),e(),r(23,"hr")),l&2&&(d(5),_("po-icon "+n.sampleCodeButtonIcon),d(),M(" ",n.sampleCodeButtonLabel,""),d(),s("ngClass",A(4,fe,n.hideSampleCodeTabs)))},dependencies:[k,P,v,x,re],encapsulation:2})}return i})();var ye=["optionsForm"],de=(()=>{class i{poNotification;form;poModal;accompaniment="";fruits;orderDetail="";close={action:()=>{this.closeModal()},label:"Close",danger:!0};confirm={action:()=>{this.proccessOrder()},label:"Confirm"};accompanimentOptions=[{value:"chocolate",label:"Chocolate"},{value:"hazeinut",label:"Hazelnut"},{value:"milk",label:"Milk"}];fruitsOptions=[{value:"orange",label:"Orange"},{value:"apple",label:"Apple"},{value:"pineapple",label:"Pineapple"},{value:"graple",label:"Grape"},{value:"strawberry",label:"Strawberry"}];constructor(m){this.poNotification=m}closeModal(){this.form.reset(),this.poModal.close()}confirmFruits(){this.proccessOrder()}restore(){this.form.reset()}openQuestionnaire(){this.poModal.open()}proccessOrder(){this.form.invalid?this.poNotification.warning("Choose the items to confirm the order."):(this.confirm.loading=!0,setTimeout(()=>{this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`),this.confirm.loading=!1,this.closeModal()},700))}static \u0275fac=function(l){return new(l||i)(O(K))};static \u0275cmp=h({type:i,selectors:[["sample-po-modal-fruits-salad"]],viewQuery:function(l,n){if(l&1&&(L(ye,7),L(C,7)),l&2){let p;V(p=F())&&(n.form=p.first),V(p=F())&&(n.poModal=p.first)}},standalone:!1,decls:14,vars:8,consts:[["optionsForm","ngForm"],["p-title","Options",3,"p-primary-action","p-secondary-action"],[1,"po-row"],["name","checkboxGroup","p-label","Fruits:","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","accompaniment","p-label","Accompaniment:","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","orderDetail","p-label","Details:","p-rows","8",1,"po-md-12",3,"ngModelChange","ngModel"],[3,"p-disabled-align"],["p-danger","true","p-label","Close",3,"p-click"],["p-label","Clear",3,"p-click"],["p-kind","primary","p-label","Confirm",3,"p-click"],["p-label","Buy fruits salad",3,"p-click"]],template:function(l,n){if(l&1){let p=w();o(0,"po-modal",1)(1,"form",null,0)(3,"div",2)(4,"po-checkbox-group",3),f("ngModelChange",function(a){return c(p),E(n.fruits,a)||(n.fruits=a),u(a)}),e()(),o(5,"div",2)(6,"po-combo",4),f("ngModelChange",function(a){return c(p),E(n.accompaniment,a)||(n.accompaniment=a),u(a)}),e()(),o(7,"div",2)(8,"po-textarea",5),f("ngModelChange",function(a){return c(p),E(n.orderDetail,a)||(n.orderDetail=a),u(a)}),e()()(),o(9,"po-modal-footer",6)(10,"po-button",7),g("p-click",function(){return c(p),u(n.closeModal())}),e(),o(11,"po-button",8),g("p-click",function(){return c(p),u(n.restore())}),e(),o(12,"po-button",9),g("p-click",function(){return c(p),u(n.confirmFruits())}),e()()(),o(13,"po-button",10),g("p-click",function(){return c(p),u(n.openQuestionnaire())}),e()}l&2&&(s("p-primary-action",n.confirm)("p-secondary-action",n.close),d(4),S("ngModel",n.fruits),s("p-options",n.fruitsOptions),d(2),S("ngModel",n.accompaniment),s("p-options",n.accompanimentOptions),d(2),S("ngModel",n.orderDetail),d(),s("p-disabled-align",!1))},dependencies:[H,q,N,R,I,T,G,Z,te,C,J],encapsulation:2})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=h({type:i,selectors:[["sample-po-modal-fruits-salad-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Modal - Fruits Salad"),e(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html"),e(),o(13,"pre",7),t(14,`<po-modal p-title="Options" [p-primary-action]="confirm" [p-secondary-action]="close">
  <form #optionsForm="ngForm">
    <div class="po-row">
      <po-checkbox-group
        class="po-md-12"
        name="checkboxGroup"
        [(ngModel)]="fruits"
        p-label="Fruits:"
        p-required
        [p-options]="fruitsOptions"
      >
      </po-checkbox-group>
    </div>

    <div class="po-row">
      <po-combo
        class="po-md-12"
        name="accompaniment"
        [(ngModel)]="accompaniment"
        p-label="Accompaniment:"
        p-required
        [p-options]="accompanimentOptions"
      >
      </po-combo>
    </div>

    <div class="po-row">
      <po-textarea class="po-md-12" name="orderDetail" [(ngModel)]="orderDetail" p-label="Details:" p-rows="8">
      </po-textarea>
    </div>
  </form>

  <po-modal-footer [p-disabled-align]="false">
    <po-button p-danger="true" p-label="Close" (p-click)="closeModal()"> </po-button>
    <po-button p-label="Clear" (p-click)="restore()"> </po-button>
    <po-button p-kind="primary" p-label="Confirm" (p-click)="confirmFruits()"> </po-button>
  </po-modal-footer>
</po-modal>

<po-button p-label="Buy fruits salad" (p-click)="openQuestionnaire()"> </po-button>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoCheckboxGroupOption, PoComboOption } from '@po-ui/ng-components';

import { PoModalAction } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-modal-fruits-salad',
  templateUrl: './sample-po-modal-fruits-salad.component.html',
  standalone: false
})
export class SamplePoModalFruitsSaladComponent {
  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  accompaniment: string = '';
  fruits: Array<string>;
  orderDetail: string = '';

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Close',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      this.proccessOrder();
    },
    label: 'Confirm'
  };

  public readonly accompanimentOptions: Array<PoComboOption> = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'hazeinut', label: 'Hazelnut' },
    { value: 'milk', label: 'Milk' }
  ];

  public readonly fruitsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'orange', label: 'Orange' },
    { value: 'apple', label: 'Apple' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'graple', label: 'Grape' },
    { value: 'strawberry', label: 'Strawberry' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  closeModal() {
    this.form.reset();
    this.poModal.close();
  }

  confirmFruits() {
    this.proccessOrder();
  }

  restore() {
    this.form.reset();
  }

  openQuestionnaire() {
    this.poModal.open();
  }

  private proccessOrder() {
    if (this.form.invalid) {
      const orderInvalidMessage = 'Choose the items to confirm the order.';
      this.poNotification.warning(orderInvalidMessage);
    } else {
      this.confirm.loading = true;

      setTimeout(() => {
        this.poNotification.success(\`Your order confirmed: \${this.fruits}, with accompaniment: \${this.accompaniment}.\`);
        this.confirm.loading = false;
        this.closeModal();
      }, 700);
    }
  }
}
`),e()()()()(),o(21,"div",10),r(22,"sample-po-modal-fruits-salad"),e(),r(23,"hr")),l&2&&(d(5),_("po-icon "+n.sampleCodeButtonIcon),d(),M(" ",n.sampleCodeButtonLabel,""),d(),s("ngClass",A(4,ve,n.hideSampleCodeTabs)))},dependencies:[k,P,v,x,de],encapsulation:2})}return i})();var se=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=h({type:i,selectors:[["sample-po-modal-doc"]],standalone:!1,decls:559,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-modal-footer"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoModalAction"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(l,n){l&1&&(o(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoModalModule } from '@po-ui/ng-components';"),e()(),o(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente po-modal"),e()(),o(7,"h3",3),t(8,"Componente"),e(),o(9,"h4",4)(10,"code",5),t(11,"PoModalComponent"),e()(),o(12,"div",2)(13,"p"),t(14,"O componente "),o(15,"code"),t(16,"po-modal"),e(),t(17," \xE9 utilizado para incluir conte\xFAdos r\xE1pidos e informativos."),e(),o(18,"p"),t(19,"No cabe\xE7alho do componente \xE9 poss\xEDvel definir um t\xEDtulo e como tamb\xE9m permite ocultar o \xEDcone de fechamento da modal."),e(),o(20,"p"),t(21,"Em seu corpo \xE9 poss\xEDvel definir um conte\xFAdo informativo, podendo utilizar componentes como por exemplo "),o(22,"code"),t(23,"po-chart"),e(),t(24,`,
`),o(25,"code"),t(26,"po-table"),e(),t(27," e os demais componentes do PO."),e(),o(28,"p"),t(29,`No rodap\xE9 encontram-se os bot\xF5es de a\xE7\xE3o prim\xE1ria e secund\xE1ria, no qual permitem definir uma a\xE7\xE3o e um r\xF3tulo, bem como
definir um estado de carregando e / ou desabilitado e / ou definir o bot\xE3o com o tipo `),o(30,"em"),t(31,"danger"),e(),t(32,`. Tamb\xE9m \xE9 poss\xEDvel utilizar
o componente `),o(33,"a",6)(34,"code"),t(35,"PoModalFooter"),e()(),t(36,"."),e(),o(37,"blockquote")(38,"p"),t(39,"\xC9 poss\xEDvel fechar a modal atrav\xE9s da tecla "),o(40,"em"),t(41,"ESC"),e(),t(42,", quando a propriedade "),o(43,"code"),t(44,"p-hide-close"),e(),t(45," n\xE3o estiver habilitada."),e()(),o(46,"h4"),t(47,"Tokens customiz\xE1veis"),e(),o(48,"p"),t(49,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),o(50,"blockquote")(51,"p"),t(52,"Para maiores informa\xE7\xF5es, acesse o guia "),o(53,"a",7),t(54,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(55,"."),e()(),o(56,"table")(57,"thead")(58,"tr")(59,"th"),t(60,"Propriedade"),e(),o(61,"th"),t(62,"Descri\xE7\xE3o"),e(),o(63,"th"),t(64,"Valor Padr\xE3o"),e()()(),o(65,"tbody")(66,"tr")(67,"td")(68,"strong"),t(69,"Default Values"),e()(),r(70,"td")(71,"td"),e(),o(72,"tr")(73,"td")(74,"code"),t(75,"--border-radius"),e(),t(76," \xA0"),e(),o(77,"td"),t(78,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),o(79,"td")(80,"code"),t(81,"var(--border-radius-md)"),e()()(),o(82,"tr")(83,"td")(84,"code"),t(85,"--border-width"),e(),t(86," \xA0"),e(),o(87,"td"),t(88,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),e(),o(89,"td")(90,"code"),t(91,"var(--border-width-sm)"),e()()(),o(92,"tr")(93,"td")(94,"code"),t(95,"--border-color"),e(),t(96," \xA0"),e(),o(97,"td"),t(98,"Cor da borda"),e(),o(99,"td")(100,"code"),t(101,"var(--color-neutral-light-20)"),e()()(),o(102,"tr")(103,"td")(104,"code"),t(105,"--background"),e(),t(106," \xA0"),e(),o(107,"td"),t(108,"Cor de background"),e(),o(109,"td")(110,"code"),t(111,"var(--color-neutral-light-00)"),e()()(),o(112,"tr")(113,"td")(114,"code"),t(115,"--shadow"),e(),t(116," \xA0"),e(),o(117,"td"),t(118,"Cont\xE9m o valor da sombra do elemento"),e(),o(119,"td")(120,"code"),t(121,"var(--shadow-md)"),e()()(),o(122,"tr")(123,"td")(124,"code"),t(125,"--color-overlay"),e(),t(126," \xA0"),e(),o(127,"td"),t(128,"Cor da camada visual tempor\xE1ria"),e(),o(129,"td")(130,"code"),t(131,"var(--color-neutral-dark-80)"),e()()(),o(132,"tr")(133,"td")(134,"code"),t(135,"--opacity-overlay"),e(),t(136," \xA0"),e(),o(137,"td"),t(138,"Opacidade da camada visual tempor\xE1ria \xA0"),e(),o(139,"td")(140,"code"),t(141,"0.7"),e()()(),o(142,"tr")(143,"td")(144,"code"),t(145,"--color-divider"),e(),t(146," \xA0"),e(),o(147,"td"),t(148,"Cor das divis\xF5es do modal"),e(),o(149,"td")(150,"code"),t(151,"var(--color-neutral-light-20)"),e()()(),o(152,"tr")(153,"td")(154,"code"),t(155,"--padding-header"),e(),t(156," \xA0"),e(),o(157,"td"),t(158,"Padding do header do modal"),e(),o(159,"td")(160,"code"),t(161,"var(--spacing-sm) var(--spacing-md)"),e()()(),o(162,"tr")(163,"td")(164,"code"),t(165,"--padding-body"),e(),t(166," \xA0"),e(),o(167,"td"),t(168,"Padding do corpo do modal"),e(),o(169,"td")(170,"code"),t(171,"var(--spacing-md) var(--spacing-2xl) var(--spacing-2xl) var(--spacing-md) "),e()()()()()(),o(172,"div",8)(173,"h4",9),t(174,"Seletor"),e(),o(175,"pre",10),t(176,`<po-modal
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-hide-close="boolean"
    p-icon="string | TemplateRef<void>"
    p-primary-action="PoModalAction"
    p-secondary-action="PoModalAction"
    p-size="string"
    p-title="string" >
</po-modal>
`),e()(),o(177,"h4",11),t(178,"Propriedades"),e(),o(179,"table",12)(180,"tr",13)(181,"th",14),t(182,"Nome"),e(),o(183,"th",14),t(184,"Tipo"),e(),o(185,"th",14),t(186,"Padr\xE3o"),e(),o(187,"th",14),t(188,"Descri\xE7\xE3o"),e()(),o(189,"tr",15)(190,"td",16)(191,"div",17)(192,"span",18),t(193,"p-click-out"),r(194,"br"),e()()(),o(195,"td",19)(196,"code",20),t(197,"boolean"),e()(),o(198,"td",21),t(199,"-"),e(),o(200,"td",22)(201,"em")(202,"strong"),t(203,"(opcional)"),e()(),o(204,"p"),t(205,`Define o fechamento da modal ao clicar fora da mesma.
Informe o valor `),o(206,"code"),t(207,"true"),e(),t(208," para ativar o fechamento ao clicar fora da modal."),e()()(),o(209,"tr",15)(210,"td",16)(211,"div",23)(212,"span",24),t(213," (p-close)"),r(214,"br"),e()()(),o(215,"td",19)(216,"code",25),t(217,"EventEmitter"),e()(),o(218,"td",21),t(219,"-"),e(),o(220,"td",22)(221,"p"),t(222,"Evento disparado ao fechar o modal."),e()()(),o(223,"tr",15)(224,"td",16)(225,"div",17)(226,"span",18),t(227," p-components-size"),r(228,"br"),e()()(),o(229,"td",19)(230,"code",26),t(231,"string"),e()(),o(232,"td",21)(233,"p")(234,"code"),t(235,"medium"),e()()(),o(236,"td",22)(237,"em")(238,"strong"),t(239,"(opcional)"),e()(),o(240,"p"),t(241,"Define o tamanho dos componentes de formul\xE1rio no modal:"),e(),o(242,"ul")(243,"li")(244,"code"),t(245,"small"),e(),t(246,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),o(247,"li")(248,"code"),t(249,"medium"),e(),t(250,": aplica a medida medium de cada componente."),e()(),o(251,"blockquote")(252,"p"),t(253,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(254,"code"),t(255,"medium"),e(),t(256,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(257,"a",27),t(258,"po-theme"),e(),t(259,"."),e()()()(),o(260,"tr",15)(261,"td",16)(262,"div",17)(263,"span",18),t(264," p-hide-close"),r(265,"br"),e()()(),o(266,"td",19)(267,"code",20),t(268,"boolean"),e()(),o(269,"td",21)(270,"p")(271,"code"),t(272,"false"),e()()(),o(273,"td",22)(274,"em")(275,"strong"),t(276,"(opcional)"),e()(),o(277,"p"),t(278,"Oculta o \xEDcone de fechar do cabe\xE7alho da modal."),e(),o(279,"blockquote")(280,"p"),t(281,"Caso a propriedade estiver habilitada, n\xE3o ser\xE1 poss\xEDvel fechar a modal atrav\xE9s da tecla "),o(282,"em"),t(283,"ESC"),e(),t(284,"."),e()()()(),o(285,"tr",15)(286,"td",16)(287,"div",17)(288,"span",18),t(289," p-icon"),r(290,"br"),e()()(),o(291,"td",19)(292,"code",26),t(293,"string "),e(),o(294,"code",28),t(295," TemplateRef<void>"),e()(),o(296,"td",21),t(297,"-"),e(),o(298,"td",22)(299,"em")(300,"strong"),t(301,"(opcional)"),e()(),o(302,"p"),t(303,"\xCDcone exibido ao lado esquerdo do label do tit\xFAlo da modal."),e(),o(304,"p"),t(305,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),o(306,"a",29),t(307,"Biblioteca de \xEDcones"),e(),t(308,". conforme exemplo abaixo:"),e(),o(309,"pre")(310,"code"),t(311,`<po-modal p-icon="an an-user" p-title="PO Modal"></po-modal>
`),e()(),o(312,"p"),t(313,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),o(314,"em"),t(315,"Font Awesome"),e(),t(316,", da seguinte forma:"),e(),o(317,"pre")(318,"code"),t(319,`<po-modal p-icon="fa fa-podcast" p-title="PO Modal"></po-modal>
`),e()(),o(320,"p"),t(321,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),o(322,"code"),t(323,"TemplateRef"),e(),t(324,", conforme exemplo abaixo:"),e(),o(325,"pre")(326,"code"),t(327,`<po-modal [p-icon]="template" p-title="PO Modal"></po-modal>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),e()()()(),o(328,"tr",15)(329,"td",16)(330,"div",17)(331,"span",18),t(332," p-primary-action"),r(333,"br"),e()()(),o(334,"td",19)(335,"code",30),t(336,"PoModalAction"),e()(),o(337,"td",21),t(338,"-"),e(),o(339,"td",22)(340,"em")(341,"strong"),t(342,"(opcional)"),e()(),o(343,"p"),t(344,"Deve ser definido um objeto que implementa a interface "),o(345,"code"),t(346,"PoModalAction"),e(),t(347,` contendo a label e a fun\xE7\xE3o da primeira a\xE7\xE3o.
Caso esta propriedade n\xE3o seja definida ou esteja incompleta, automaticamente ser\xE1 adicionado um bot\xE3o de a\xE7\xE3o com
a fun\xE7\xE3o de fechar a modal.`),e()()(),o(348,"tr",15)(349,"td",16)(350,"div",17)(351,"span",18),t(352," p-secondary-action"),r(353,"br"),e()()(),o(354,"td",19)(355,"code",30),t(356,"PoModalAction"),e()(),o(357,"td",21),t(358,"-"),e(),o(359,"td",22)(360,"em")(361,"strong"),t(362,"(opcional)"),e()(),o(363,"p"),t(364,"Deve ser definido um objeto que implementa a interface "),o(365,"code"),t(366,"PoModalAction"),e(),t(367," contendo a label e a fun\xE7\xE3o da segunda a\xE7\xE3o."),e()()(),o(368,"tr",15)(369,"td",16)(370,"div",17)(371,"span",18),t(372," p-size"),r(373,"br"),e()()(),o(374,"td",19)(375,"code",26),t(376,"string"),e()(),o(377,"td",21),t(378,"-"),e(),o(379,"td",22)(380,"p"),t(381,"Define o tamanho da modal."),e(),o(382,"p"),t(383,"Valores v\xE1lidos:"),e(),o(384,"ul")(385,"li")(386,"code"),t(387,"sm"),e(),t(388," (pequeno)"),e(),o(389,"li")(390,"code"),t(391,"md"),e(),t(392," (m\xE9dio)"),e(),o(393,"li")(394,"code"),t(395,"lg"),e(),t(396," (grande)"),e(),o(397,"li")(398,"code"),t(399,"xl"),e(),t(400," (extra grande)"),e(),o(401,"li")(402,"code"),t(403,"auto"),e(),t(404," (autom\xE1tico)"),e()(),o(405,"blockquote")(406,"p"),t(407,"Quando informado "),o(408,"code"),t(409,"auto"),e(),t(410,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),o(411,"code"),t(412,"md"),e(),t(413,"."),e()()()(),o(414,"tr",15)(415,"td",16)(416,"div",17)(417,"span",18),t(418," p-title"),r(419,"br"),e()()(),o(420,"td",19)(421,"code",26),t(422,"string"),e()(),o(423,"td",21),t(424,"-"),e(),o(425,"td",22)(426,"p"),t(427,"T\xEDtulo da modal."),e()()()(),o(428,"h3",11),t(429,"M\xE9todos"),e(),o(430,"table",31)(431,"tr",15)(432,"th",32)(433,"div",17)(434,"h4")(435,"span",18),t(436," close "),e()()()()(),o(437,"tr",22)(438,"td",22)(439,"p"),t(440,"Fun\xE7\xE3o para fechar a modal."),e()()()(),r(441,"br"),o(442,"table",31)(443,"tr",15)(444,"th",32)(445,"div",17)(446,"h4")(447,"span",18),t(448," open "),e()()()()(),o(449,"tr",22)(450,"td",22)(451,"p"),t(452,"Fun\xE7\xE3o para abrir a modal."),e()()()(),r(453,"br"),o(454,"h3"),t(455,"Interfaces"),e(),o(456,"h4",33)(457,"code",5),t(458,"PoModalAction"),e()(),o(459,"div",2)(460,"p"),t(461,"Interface que define os bot\xF5es de a\xE7\xE3o do componente "),o(462,"code"),t(463,"po-modal"),e(),t(464,"."),e()(),o(465,"h4",11),t(466,"Propriedades"),e(),o(467,"table",12)(468,"tr",13)(469,"th",14),t(470,"Nome"),e(),o(471,"th",14),t(472,"Tipo"),e(),o(473,"th",14),t(474,"Descri\xE7\xE3o"),e()(),o(475,"tr",15)(476,"td",16)(477,"div",17)(478,"span",18),t(479," action"),r(480,"br"),e()()(),o(481,"td",19)(482,"code",34),t(483,"Function"),e()(),o(484,"td",22)(485,"p"),t(486,"Fun\xE7\xE3o que ser\xE1 executada ao clicar sobre o bot\xE3o."),e()()(),o(487,"tr",15)(488,"td",16)(489,"div",17)(490,"span",18),t(491," danger"),r(492,"br"),e()()(),o(493,"td",19)(494,"code",20),t(495,"boolean"),e()(),o(496,"td",22)(497,"em")(498,"strong"),t(499,"(opcional)"),e()(),o(500,"p"),t(501,"Define a propriedade "),o(502,"code"),t(503,"p-danger"),e(),t(504," do bot\xE3o."),e(),o(505,"blockquote")(506,"p"),t(507,"Caso a propriedade esteja definida como "),o(508,"code"),t(509,"true"),e(),t(510," em ambos os bot\xF5es, apenas o bot\xE3o prim\xE1rio receber\xE1 o "),o(511,"code"),t(512,"p-danger"),e(),t(513," como "),o(514,"code"),t(515,"true"),e(),t(516,"."),e()()()(),o(517,"tr",15)(518,"td",16)(519,"div",17)(520,"span",18),t(521," disabled"),r(522,"br"),e()()(),o(523,"td",19)(524,"code",20),t(525,"boolean"),e()(),o(526,"td",22)(527,"em")(528,"strong"),t(529,"(opcional)"),e()(),o(530,"p"),t(531,"Desabilita o bot\xE3o impossibilitando que sua a\xE7\xE3o seja executada."),e()()(),o(532,"tr",15)(533,"td",16)(534,"div",17)(535,"span",18),t(536," label"),r(537,"br"),e()()(),o(538,"td",19)(539,"code",26),t(540,"string"),e()(),o(541,"td",22)(542,"p"),t(543,"R\xF3tulo do bot\xE3o."),e()()(),o(544,"tr",15)(545,"td",16)(546,"div",17)(547,"span",18),t(548," loading"),r(549,"br"),e()()(),o(550,"td",19)(551,"code",20),t(552,"boolean"),e()(),o(553,"td",22)(554,"em")(555,"strong"),t(556,"(opcional)"),e()(),o(557,"p"),t(558,"Habilita um estado de carregamento ao bot\xE3o, desabilitando-o e exibindo um \xEDcone de carregamento \xE0 esquerda de seu r\xF3tulo."),e()()()()())},dependencies:[P],encapsulation:2})}return i})();var ce=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||i)(O(U),O(Y))};static \u0275cmp=h({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Modal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return n.changeTab("doc")}),r(3,"sample-po-modal-doc"),e(),o(4,"po-tab",3),g("p-click",function(){return n.changeTab("web")}),r(5,"sample-po-modal-basic-view")(6,"sample-po-modal-labs-view")(7,"sample-po-modal-fruits-salad-view"),e()()()),l&2&&(s("p-actions",n.actions),d(2),s("p-active",n.activeTab==="doc"),d(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[oe,v,x,le,pe,me,se],encapsulation:2})}return i})();var _e=[{path:"",component:ce}],ue=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=B({type:i});static \u0275inj=z({imports:[j.forChild(_e),j]})}return i})();var Ze=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=B({type:i});static \u0275inj=z({imports:[ne,ue]})}return i})();export{Ze as DocPoModalModule};
