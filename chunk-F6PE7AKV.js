import{o as w,p as Pe}from"./chunk-R3BKLGLC.js";import{Ab as P,C as fe,Db as ne,F as K,Fa as ve,Ga as ee,I as Ee,Ra as Ce,Sa as ye,Wa as te,Za as xe,a as he,ca as $,la as be,nb as _e,ub as D,vb as L,xb as x,zb as _}from"./chunk-TUTTJOS2.js";import{$a as h,Ac as H,B as re,Ba as T,Ea as t,Fa as n,Ga as p,I as le,Ka as q,L as se,La as g,M as U,Ma as de,Nc as Se,O as me,Pc as ge,Rc as ie,T as u,Ta as F,Tb as ue,U as S,Ua as I,Va as V,Wa as v,Xa as e,Ya as ce,Za as y,a as oe,ab as f,bb as E,eb as k,ha as l,ia as M,l as ae,oa as b,pa as Y,qb as z,ua as B,ub as A,vb as X,wb as G,wc as J,xc as O,ya as d,yc as R,z as pe,zc as Z}from"./chunk-MIQUIDUB.js";var we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-stepper-basic"]],standalone:!1,decls:4,vars:1,consts:[[3,"p-align-center"],["p-label","Step 1"],["p-label","Step 2"],["p-label","Step 3"]],template:function(r,i){r&1&&(t(0,"po-stepper",0),p(1,"po-step",1)(2,"po-step",2)(3,"po-step",3),n()),r&2&&d("p-align-center",!1)},dependencies:[L,x],encapsulation:2})}return a})();var He=a=>({"docs-sample-code-tabs":a}),De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-stepper-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Stepper Basic"),n(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),p(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-stepper-basic/sample-po-stepper-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-stepper [p-align-center]="false">
  <po-step p-label="Step 1"></po-step>
  <po-step p-label="Step 2"></po-step>
  <po-step p-label="Step 3"></po-step>
</po-stepper>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-stepper-basic/sample-po-stepper-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html',
  standalone: false
})
export class SamplePoStepperBasicComponent {}
`),n()()()()(),t(21,"div",10),p(22,"sample-po-stepper-basic"),n(),p(23,"hr")),r&2&&(l(5),T("po-icon "+i.sampleCodeButtonIcon),l(),y(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",k(4,He,i.hideSampleCodeTabs)))},dependencies:[A,w,_,P,we],encapsulation:2})}return a})();function Qe(a,j){if(a&1&&(t(0,"po-step",9)(1,"h2"),e(2),n()()),a&2){let s=j.$implicit;d("p-label",s.label)("p-icon-default",s.iconDefault),l(2),y("Step Content ",s.label,"")}}var Te=(()=>{class a{changeDetector;event;properties={};stepItem={};steps=[];propertiesFields=[{divider:"Properties",property:"stepSize",label:"Step Size",type:"number",maxValue:64,minValue:24,gridLgColumns:2},{property:"orientation",options:[{value:"vertical",label:"Vertical",checked:!0},{value:"horizontal",label:"Horizontal"}],gridLgColumns:4},{label:"Align Steps Center",gridLgColumns:3,property:"alignCenter",type:"boolean"},{label:"Step icons",gridLgColumns:3,property:"stepIcons",type:"boolean"},{label:"Step Icon Active Custom",help:"Ex.: an an-pencil-simple-line",gridLgColumns:4,property:"iconActive"},{label:"Step Icon Done Custom",help:"Ex.: an an-check-fat",gridLgColumns:4,property:"iconDone"},{property:"disabledClick",label:"Disabled click",type:"boolean"}];stepItemFields=[{divider:"Step form",property:"label",label:"Step Label",gridMdColumns:6,gridXlColumns:6},{property:"iconDefault",label:"Step Icon Default Custom",help:"Ex.: an an-question",gridMdColumns:6,gridXlColumns:6}];constructor(s){this.changeDetector=s}ngOnInit(){this.restore()}addItem(s){this.steps=[...this.steps,oe({},s)],this.stepItem={},this.changeDetector.detectChanges()}changeStep(s){this.event=s,this.changeDetector.detectChanges()}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation="horizontal",this.properties.alignCenter=!1}static \u0275fac=function(r){return new(r||a)(M(z))};static \u0275cmp=b({type:a,selectors:[["sample-po-stepper-labs"]],standalone:!1,decls:16,vars:14,consts:[["stepForm","ngForm"],["propertiesForm","ngForm"],[3,"p-change-step","p-align-center","p-orientation","p-step-icons","p-step-size","p-step-icon-active","p-step-icon-done","p-disable-click"],[3,"p-label","p-icon-default",4,"ngFor","ngForOf"],["p-label","Event",3,"p-value"],[3,"p-group-form","p-fields","p-value"],[1,"po-row"],["p-label","Add Step",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],[3,"p-label","p-icon-default"]],template:function(r,i){if(r&1){let m=q();t(0,"po-container")(1,"po-stepper",2),g("p-change-step",function(){return u(m),S(i.changeStep("change"))}),B(2,Qe,3,3,"po-step",3),n(),p(3,"hr")(4,"po-info",4),t(5,"form",null,0),p(7,"po-dynamic-form",5),t(8,"div",6)(9,"po-button",7),g("p-click",function(){u(m);let o=v(6);return i.addItem(i.stepItem),S(o.reset())}),n()()(),t(10,"form",null,1),p(12,"po-dynamic-form",5)(13,"hr"),t(14,"div",6)(15,"po-button",8),g("p-click",function(){u(m);let o=v(6),Oe=v(11);return i.restore(),Oe.reset(),S(o.reset())}),n()()()()}if(r&2){let m=v(6);l(),d("p-align-center",i.properties.alignCenter)("p-orientation",i.properties.orientation)("p-step-icons",i.properties.stepIcons)("p-step-size",i.properties.stepSize)("p-step-icon-active",i.properties.iconActive)("p-step-icon-done",i.properties.iconDone)("p-disable-click",i.properties.disabledClick),l(),d("ngForOf",i.steps),l(2),d("p-value",i.event),l(3),d("p-fields",i.stepItemFields)("p-value",i.stepItem),l(2),d("p-disabled",m.invalid),l(3),d("p-fields",i.propertiesFields)("p-value",i.properties)}},dependencies:[X,H,O,R,K,$,xe,te,L,x],encapsulation:2})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),Fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-stepper-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Stepper Labs"),n(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),p(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-stepper-labs/sample-po-stepper-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-container>
  <po-stepper
    [p-align-center]="properties.alignCenter"
    [p-orientation]="properties.orientation"
    [p-step-icons]="properties.stepIcons"
    [p-step-size]="properties.stepSize"
    [p-step-icon-active]="properties.iconActive"
    [p-step-icon-done]="properties.iconDone"
    [p-disable-click]="properties.disabledClick"
    (p-change-step)="changeStep('change')"
  >
    <po-step *ngFor="let step of steps" [p-label]="step.label" [p-icon-default]="step.iconDefault">
      <h2>Step Content { { step.label }}</h2>
    </po-step>
  </po-stepper>

  <hr />

  <po-info p-label="Event" [p-value]="event"> </po-info>

  <form #stepForm="ngForm">
    <po-dynamic-form [p-group-form] [p-fields]="stepItemFields" [p-value]="stepItem"> </po-dynamic-form>

    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Step"
        [p-disabled]="stepForm.invalid"
        (p-click)="addItem(stepItem); stepForm.reset()"
      >
      </po-button>
    </div>
  </form>

  <form #propertiesForm="ngForm">
    <po-dynamic-form [p-group-form] [p-fields]="propertiesFields" [p-value]="properties"> </po-dynamic-form>
    <hr />
    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Sample Restore"
        (p-click)="restore(); propertiesForm.reset(); stepForm.reset()"
      >
      </po-button>
    </div>
  </form>
</po-container>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-stepper-labs/sample-po-stepper-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { PoDynamicFormField, PoStepperItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-stepper-labs',
  templateUrl: './sample-po-stepper-labs.component.html',
  standalone: false
})
export class SamplePoStepperLabsComponent implements OnInit {
  event: any;
  properties: any = {};
  stepItem: PoStepperItem = <any>{};
  steps: Array<PoStepperItem> = [];

  readonly propertiesFields: Array<PoDynamicFormField> = [
    {
      divider: 'Properties',
      property: 'stepSize',
      label: 'Step Size',
      type: 'number',
      maxValue: 64,
      minValue: 24,
      gridLgColumns: 2
    },
    {
      property: 'orientation',
      options: [
        { value: 'vertical', label: 'Vertical', checked: true },
        { value: 'horizontal', label: 'Horizontal' }
      ],
      gridLgColumns: 4
    },
    {
      label: 'Align Steps Center',
      gridLgColumns: 3,
      property: 'alignCenter',
      type: 'boolean'
    },
    {
      label: 'Step icons',
      gridLgColumns: 3,
      property: 'stepIcons',
      type: 'boolean'
    },
    {
      label: 'Step Icon Active Custom',
      help: 'Ex.: an an-pencil-simple-line',
      gridLgColumns: 4,
      property: 'iconActive'
    },
    {
      label: 'Step Icon Done Custom',
      help: 'Ex.: an an-check-fat',
      gridLgColumns: 4,
      property: 'iconDone'
    },
    {
      property: 'disabledClick',
      label: 'Disabled click',
      type: 'boolean'
    }
  ];

  readonly stepItemFields: Array<PoDynamicFormField> = [
    {
      divider: 'Step form',
      property: 'label',
      label: 'Step Label',
      gridMdColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'iconDefault',
      label: 'Step Icon Default Custom',
      help: 'Ex.: an an-question',
      gridMdColumns: 6,
      gridXlColumns: 6
    }
  ];

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.restore();
  }

  addItem(stepItem: PoStepperItem) {
    this.steps = [...this.steps, { ...stepItem }];
    this.stepItem = {};
    this.changeDetector.detectChanges();
  }

  changeStep(event) {
    this.event = event;

    this.changeDetector.detectChanges();
  }

  restore() {
    this.properties = {};
    this.steps = [];
    this.event = undefined;
    this.properties.orientation = 'horizontal';
    this.properties.alignCenter = false;
  }
}
`),n()()()()(),t(21,"div",10),p(22,"sample-po-stepper-labs"),n(),p(23,"hr")),r&2&&(l(5),T("po-icon "+i.sampleCodeButtonIcon),l(),y(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",k(4,Ye,i.hideSampleCodeTabs)))},dependencies:[A,w,_,P,Te],encapsulation:2})}return a})();var Ge=["addressForm"],Je=["paymentForm"],Ze=["personalForm"],Ke=["successData"];function $e(a,j){a&1&&p(0,"po-loading-overlay",52)}var Ie=(()=>{class a{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget="Confirm Purchase";currentActiveStep;document;isLoadingPayment=!1;name;nextLabelWidget="Next Step";previousLabelWidget="Previous Step";constructor(){this.address=this.getAddress()}canActiveFinishStep(s){return ae(s.form.valid).pipe(le(()=>this.isLoadingPayment=!0),pe(2e3),re(()=>this.isLoadingPayment=!1))}canActiveNextStep(s){return s.valid}onConfirmStep(s){this.successData.open(),this.resetForms(),this.address=this.getAddress(),s.first()}getAddress(){return{city:"Sao Paulo",code:"02511-000",country:"Brazil",number:"1000",reference:"",street:"Avenida Braz Leme"}}resetForms(){this.personalForm.reset(),this.paymentForm.reset()}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-stepper-sales"]],viewQuery:function(r,i){if(r&1&&(F(Ge,7),F(Je,7),F(Ze,7),F(Ke,7)),r&2){let m;I(m=V())&&(i.addressForm=m.first),I(m=V())&&(i.paymentForm=m.first),I(m=V())&&(i.personalForm=m.first),I(m=V())&&(i.successData=m.first)}},standalone:!1,decls:84,vars:29,consts:[["stepper",""],["personalForm","ngForm"],["addressForm","ngForm"],["paymentForm","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["successData",""],[1,"po-row"],["p-title","Product Detail",1,"po-md-9"],[1,"po-lg-4"],["src","../../../assets/graphics/shoe.gif","width","215","height","200"],[1,"po-lg-8"],[1,"po-font-title"],[1,"po-font-text-large-bold"],[1,"po-font-text"],["p-height","317","p-title","Price",1,"po-md-3"],[2,"position","relative"],["p-text","Loading",4,"ngIf"],["p-align-center","false","p-orientation","vertical","p-step-icons","","p-step-size","32"],["p-label","Personal",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-primary-label"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","birthday","p-format","dd/mm/yyyy","p-label","Birthday","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","document","p-label","Document","p-optional","",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Address",3,"p-can-active-next-step"],["p-height","380","p-title","Purchase",1,"po-md-12",3,"p-primary-action","p-secondary-action","p-primary-label","p-secondary-label"],["name","address.street","p-label","Street/House","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","number","p-label","Number","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","city","p-label","City","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","code","p-label","Postal Code","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","country","p-label","Country","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","reference","p-label","Reference","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Payment",3,"p-can-active-next-step"],["name","cardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","cardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","cardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Finish"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Document",1,"po-md-3",3,"p-value"],["p-label","Address",1,"po-md-3",3,"p-value"],["p-label","Number",1,"po-md-3",3,"p-value"],["p-label","City",1,"po-md-3",3,"p-value"],["p-label","Country",1,"po-md-3",3,"p-value"],["p-label","Product","p-value","Nike XYZ - Red/Gold Stripes",1,"po-md-4"],["p-label","Price","p-value","$2.500,00",1,"po-md-2"],["p-label","Discount","p-value","$500,00",1,"po-md-2"],["p-label","Tax","p-value","$160,00",1,"po-md-2"],["p-label","Final Price","p-value","$2.160,00",1,"po-md-2"],["p-title","Informations"],["src","../../../assets/graphics/check.jpg","width","350","height","350",1,"po-offset-md-6","po-offset-xl-3"],[1,"po-offset-md-8","po-offset-xl-3","po-font-title"],["p-text","Loading"]],template:function(r,i){if(r&1){let m=q();t(0,"div",8)(1,"po-widget",9)(2,"div",8)(3,"div",10),p(4,"img",11),n(),t(5,"div",12)(6,"p",13),e(7,"Nike XYZ - Red/Gold Stripes"),n(),t(8,"p",14),e(9,"Brand: Nike | Style: Modern | Men's"),n(),t(10,"p",15),e(11,"Width: 12.5 - COD: 001254648412319"),n(),p(12,"hr"),t(13,"p",15),e(14,"Price: $2.500,00 | Discount: $500,00 | Tax: $160,00"),n()()()(),t(15,"po-widget",16)(16,"p",15),e(17,"$2.500,00"),n(),t(18,"p",15),e(19,"$500,00(-)"),n(),t(20,"p",15),e(21,"$160,00(+)"),n(),p(22,"hr"),t(23,"p",14),e(24,"Total: $2.160,00"),n()()(),p(25,"hr"),t(26,"div",17),B(27,$e,1,0,"po-loading-overlay",18),t(28,"po-stepper",19,0)(30,"po-step",20)(31,"po-widget",21),g("p-primary-action",function(){u(m);let o=v(29);return S(o.next())}),t(32,"form",null,1)(34,"div",8)(35,"po-input",22),E("ngModelChange",function(o){return u(m),f(i.name,o)||(i.name=o),S(o)}),n(),t(36,"po-datepicker",23),E("ngModelChange",function(o){return u(m),f(i.birthday,o)||(i.birthday=o),S(o)}),n(),t(37,"po-input",24),E("ngModelChange",function(o){return u(m),f(i.document,o)||(i.document=o),S(o)}),n()()()()(),t(38,"po-step",25)(39,"po-widget",26),g("p-primary-action",function(){u(m);let o=v(29);return S(o.previous())})("p-secondary-action",function(){u(m);let o=v(29);return S(o.next())}),t(40,"form",null,2)(42,"div",8)(43,"po-input",27),E("ngModelChange",function(o){return u(m),f(i.address.street,o)||(i.address.street=o),S(o)}),n(),t(44,"po-input",28),E("ngModelChange",function(o){return u(m),f(i.address.number,o)||(i.address.number=o),S(o)}),n(),t(45,"po-input",29),E("ngModelChange",function(o){return u(m),f(i.address.city,o)||(i.address.city=o),S(o)}),n()(),t(46,"div",8)(47,"po-input",30),E("ngModelChange",function(o){return u(m),f(i.address.code,o)||(i.address.code=o),S(o)}),n(),t(48,"po-input",31),E("ngModelChange",function(o){return u(m),f(i.address.country,o)||(i.address.country=o),S(o)}),n(),t(49,"po-input",32),E("ngModelChange",function(o){return u(m),f(i.address.reference,o)||(i.address.reference=o),S(o)}),n()()()()(),t(50,"po-step",33)(51,"po-widget",26),g("p-primary-action",function(){u(m);let o=v(29);return S(o.previous())})("p-secondary-action",function(){u(m);let o=v(29);return S(o.next())}),t(52,"form",null,3)(54,"div",8)(55,"po-input",34,4),E("ngModelChange",function(o){return u(m),f(i.cardName,o)||(i.cardName=o),S(o)}),n(),t(57,"po-input",35,5),E("ngModelChange",function(o){return u(m),f(i.cardCode,o)||(i.cardCode=o),S(o)}),n(),t(59,"po-input",36,6),E("ngModelChange",function(o){return u(m),f(i.cardValid,o)||(i.cardValid=o),S(o)}),n()()()()(),t(61,"po-step",37)(62,"po-widget",26),g("p-primary-action",function(){u(m);let o=v(29);return S(o.previous())})("p-secondary-action",function(){u(m);let o=v(29);return S(i.onConfirmStep(o))}),t(63,"div",8),p(64,"po-info",38)(65,"po-info",39),n(),t(66,"div",8),p(67,"po-info",40)(68,"po-info",41)(69,"po-info",42)(70,"po-info",43),n(),p(71,"hr"),t(72,"div",8),p(73,"po-info",44)(74,"po-info",45)(75,"po-info",46)(76,"po-info",47)(77,"po-info",48),n()()()()(),t(78,"po-modal",49,7)(80,"div",8),p(81,"img",50),t(82,"p",51),e(83,"Success! ORDER NUMBER: 5767686678609-XPTOA"),n()()()}if(r&2){let m=v(33),c=v(41),o=v(53);l(27),d("ngIf",i.isLoadingPayment),l(3),d("p-can-active-next-step",i.canActiveNextStep.bind(i,m)),l(),d("p-primary-label",i.nextLabelWidget),l(4),h("ngModel",i.name),l(),h("ngModel",i.birthday),l(),h("ngModel",i.document),l(),d("p-can-active-next-step",i.canActiveNextStep.bind(i,c)),l(),d("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),l(4),h("ngModel",i.address.street),l(),h("ngModel",i.address.number),l(),h("ngModel",i.address.city),l(2),h("ngModel",i.address.code),l(),h("ngModel",i.address.country),l(),h("ngModel",i.address.reference),l(),d("p-can-active-next-step",i.canActiveFinishStep.bind(i,o)),l(),d("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.nextLabelWidget),l(4),h("ngModel",i.cardName),l(2),h("ngModel",i.cardCode),l(2),h("ngModel",i.cardValid),l(3),d("p-primary-label",i.previousLabelWidget)("p-secondary-label",i.confirmLabelWidget),l(2),d("p-value",i.name),l(),d("p-value",i.document),l(2),d("p-value",i.address.street),l(),d("p-value",i.address.number),l(),d("p-value",i.address.city),l(),d("p-value",i.address.country)}},dependencies:[G,H,J,O,Z,R,be,ee,te,fe,Ee,L,x,ne],encapsulation:2})}return a})();var tt=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-stepper-sales-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Stepper - Sales"),n(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),p(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-stepper-sales/sample-po-stepper-sales.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-md-9" p-title="Product Detail">
    <div class="po-row">
      <div class="po-lg-4">
        <img src="../../../assets/graphics/shoe.gif" width="215" height="200" />
      </div>
      <div class="po-lg-8">
        <p class="po-font-title">Nike XYZ - Red/Gold Stripes</p>
        <p class="po-font-text-large-bold">Brand: Nike | Style: Modern | Men's</p>
        <p class="po-font-text">Width: 12.5 - COD: 001254648412319</p>
        <hr />
        <p class="po-font-text">Price: $2.500,00 | Discount: $500,00 | Tax: $160,00</p>
      </div>
    </div>
  </po-widget>

  <po-widget class="po-md-3" p-height="317" p-title="Price">
    <p class="po-font-text">$2.500,00</p>
    <p class="po-font-text">$500,00(-)</p>
    <p class="po-font-text">$160,00(+)</p>
    <hr />
    <p class="po-font-text-large-bold">Total: $2.160,00</p>
  </po-widget>
</div>

<hr />

<div style="position: relative">
  <po-loading-overlay *ngIf="isLoadingPayment" p-text="Loading"> </po-loading-overlay>

  <po-stepper #stepper p-align-center="false" p-orientation="vertical" p-step-icons p-step-size="32">
    <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep.bind(this, personalForm)">
      <po-widget
        class="po-md-12"
        p-height="380"
        [p-primary-label]="nextLabelWidget"
        p-title="Purchase"
        (p-primary-action)="stepper.next()"
      >
        <form #personalForm="ngForm">
          <div class="po-row">
            <po-input class="po-md-6" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>
            <po-datepicker
              class="po-md-3"
              name="birthday"
              [(ngModel)]="birthday"
              p-format="dd/mm/yyyy"
              p-label="Birthday"
              p-optional
            >
            </po-datepicker>
            <po-input class="po-md-3" name="document" [(ngModel)]="document" p-label="Document" p-optional> </po-input>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Address" [p-can-active-next-step]="canActiveNextStep.bind(this, addressForm)">
      <po-widget
        class="po-md-12"
        p-height="380"
        p-title="Purchase"
        [p-primary-label]="previousLabelWidget"
        [p-secondary-label]="nextLabelWidget"
        (p-primary-action)="stepper.previous()"
        (p-secondary-action)="stepper.next()"
      >
        <form #addressForm="ngForm">
          <div class="po-row">
            <po-input
              class="po-md-6"
              name="address.street"
              [(ngModel)]="address.street"
              p-label="Street/House"
              p-required
            >
            </po-input>
            <po-input class="po-md-3" name="number" [(ngModel)]="address.number" p-label="Number" p-required>
            </po-input>
            <po-input class="po-md-3" name="city" [(ngModel)]="address.city" p-label="City" p-required> </po-input>
          </div>
          <div class="po-row">
            <po-input class="po-md-3" name="code" [(ngModel)]="address.code" p-label="Postal Code" p-required>
            </po-input>
            <po-input class="po-md-3" name="country" [(ngModel)]="address.country" p-label="Country" p-required>
            </po-input>
            <po-input class="po-md-6" name="reference" [(ngModel)]="address.reference" p-label="Reference" p-optional>
            </po-input>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Payment" [p-can-active-next-step]="canActiveFinishStep.bind(this, paymentForm)">
      <po-widget
        class="po-md-12"
        p-height="380"
        [p-primary-label]="previousLabelWidget"
        [p-secondary-label]="nextLabelWidget"
        p-title="Purchase"
        (p-primary-action)="stepper.previous()"
        (p-secondary-action)="stepper.next()"
      >
        <form #paymentForm="ngForm">
          <div class="po-row">
            <po-input
              #cardname
              class="po-lg-6"
              name="cardName"
              [(ngModel)]="cardName"
              p-clean
              p-label="Name"
              p-required
            >
            </po-input>

            <po-input
              #cardcode
              class="po-lg-4 po-md-9"
              name="cardCode"
              [(ngModel)]="cardCode"
              p-clean
              p-label="Code"
              p-mask="9999 9999 9999 9999"
              p-mask-format-model
              p-pattern="\\d{4} \\d{4} \\d{4} \\d{4}"
              p-required
            >
            </po-input>

            <po-input
              #carddate
              class="po-lg-2 po-md-3"
              name="cardValid"
              [(ngModel)]="cardValid"
              p-clean
              p-label="Expiration Date"
              p-mask="12/99"
              p-mask-format-model
              p-pattern="\\d{2}\\/\\d{2}"
              p-required
            >
            </po-input>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Finish">
      <po-widget
        class="po-md-12"
        p-height="380"
        [p-primary-label]="previousLabelWidget"
        [p-secondary-label]="confirmLabelWidget"
        p-title="Purchase"
        (p-primary-action)="stepper.previous()"
        (p-secondary-action)="onConfirmStep(stepper)"
      >
        <div class="po-row">
          <po-info class="po-md-3" p-label="Name" [p-value]="name"> </po-info>
          <po-info class="po-md-3" p-label="Document" [p-value]="document"> </po-info>
        </div>
        <div class="po-row">
          <po-info class="po-md-3" p-label="Address" [p-value]="address.street"> </po-info>
          <po-info class="po-md-3" p-label="Number" [p-value]="address.number"> </po-info>
          <po-info class="po-md-3" p-label="City" [p-value]="address.city"> </po-info>
          <po-info class="po-md-3" p-label="Country" [p-value]="address.country"> </po-info>
        </div>
        <hr />
        <div class="po-row">
          <po-info class="po-md-4" p-label="Product" p-value="Nike XYZ - Red/Gold Stripes"> </po-info>
          <po-info class="po-md-2" p-label="Price" p-value="$2.500,00"> </po-info>
          <po-info class="po-md-2" p-label="Discount" p-value="$500,00"> </po-info>
          <po-info class="po-md-2" p-label="Tax" p-value="$160,00"> </po-info>
          <po-info class="po-md-2" p-label="Final Price" p-value="$2.160,00"> </po-info>
        </div>
      </po-widget>
    </po-step>
  </po-stepper>
</div>

<po-modal #successData p-title="Informations">
  <div class="po-row">
    <img class="po-offset-md-6 po-offset-xl-3" src="../../../assets/graphics/check.jpg" width="350" height="350" />
    <p class="po-offset-md-8 po-offset-xl-3 po-font-title">Success! ORDER NUMBER: 5767686678609-XPTOA</p>
  </div>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-stepper-sales/sample-po-stepper-sales.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalComponent, PoStepComponent, PoStepperComponent } from '@po-ui/ng-components';
import { of } from 'rxjs';
import { delay, finalize, map, tap } from 'rxjs/operators';

@Component({
  selector: 'sample-po-stepper-sales',
  templateUrl: './sample-po-stepper-sales.component.html',
  standalone: false
})
export class SamplePoStepperSalesComponent {
  @ViewChild('addressForm', { static: true }) addressForm: NgForm;
  @ViewChild('paymentForm', { static: true }) paymentForm: NgForm;
  @ViewChild('personalForm', { static: true }) personalForm: NgForm;
  @ViewChild('successData', { static: true }) successData: PoModalComponent;

  address: any;
  birthday: string;
  cardCode: string;
  cardName: string;
  cardValid: string;
  confirmLabelWidget: string = 'Confirm Purchase';
  currentActiveStep: PoStepComponent;
  document: string;
  isLoadingPayment: boolean = false;
  name: string;
  nextLabelWidget: string = 'Next Step';
  previousLabelWidget: string = 'Previous Step';

  constructor() {
    this.address = this.getAddress();
  }

  canActiveFinishStep(paymentForm: NgForm) {
    return of(paymentForm.form.valid).pipe(
      tap(() => (this.isLoadingPayment = true)),
      delay(2000),
      finalize(() => (this.isLoadingPayment = false))
    );
  }

  canActiveNextStep(form: NgForm) {
    return form.valid;
  }

  onConfirmStep(stepper: PoStepperComponent) {
    this.successData.open();

    this.resetForms();
    this.address = this.getAddress();
    stepper.first();
  }

  private getAddress() {
    return {
      city: 'Sao Paulo',
      code: '02511-000',
      country: 'Brazil',
      number: '1000',
      reference: '',
      street: 'Avenida Braz Leme'
    };
  }

  private resetForms(): void {
    this.personalForm.reset();
    this.paymentForm.reset();
  }
}
`),n()()()()(),t(21,"div",10),p(22,"sample-po-stepper-sales"),n(),p(23,"hr")),r&2&&(l(5),T("po-icon "+i.sampleCodeButtonIcon),l(),y(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",k(4,tt,i.hideSampleCodeTabs)))},dependencies:[A,w,_,P,Ie],encapsulation:2})}return a})();var ke=(()=>{class a{http;url="https://po-sample-api.onrender.com/v1/sampleSelect";constructor(s){this.http=s}getCitiesByState(s){return this.http.get(`${this.url}/getCities/${s}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(r){return new(r||a)(me(ue))};static \u0275prov=se({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ot=["basicInformation"],at=["academicFormation"],pt=["professionalExperiences"];function rt(a,j){if(a&1&&(t(0,"div",24)(1,"po-widget",26)(2,"p"),e(3),n()()()),a&2){let s=j.$implicit;l(),d("p-title",s.title),l(2),ce(s.description)}}function lt(a,j){if(a&1&&(t(0,"div",4),p(1,"po-divider",24),B(2,rt,4,2,"div",25),n()),a&2){let s=de();l(2),d("ngForOf",s.professionalExperiences)}}var Ae=(()=>{class a{sampleService;changeDetector;basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;constructor(s,r){this.sampleService=s,this.changeDetector=r}ngAfterViewInit(){setTimeout(()=>this.activeStep())}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates()}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}activeStep(){this.stepper.active(2)}onChangeState(){this.getCitiesByState(this.basicInformation.state)}addProfessionalExperiences(s){let r={title:s.value.experienceTitle,description:s.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,r]}getBasicInformations(){return{name:"Maria Alice",email:"mariaalice@gmail.com",phone:"47988888888",state:"sp",city:1}}getHighSchool(){return{name:"Escola de Ensino B\xE1sico Dr Jorge Lacerda",city:"Joinville",conclusionYear:"2016"}}getUniversityEducation(){return{name:"Universidade Federal do Santa Catarina",city:"Florian\xF3polis",conclusionYear:"2020"}}getProfessionalExperiencies(){return[{title:"Analista de desenvolvimento de software na TOTVS",description:"Respons\xE1vel pelo desenvolvimento e manuten\xE7\xE3o de sistemas do segmento de manufatura. Do ano de 2019 \xE0 2020"}]}getCitiesByState(s){this.citiesSubscription=this.sampleService.getCitiesByState(s).subscribe(r=>{this.cityOptions=r.items,this.basicInformation.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(s=>{this.stateOptions=s.items,this.getCitiesByState(this.basicInformation.state)})}static \u0275fac=function(r){return new(r||a)(M(ke),M(z))};static \u0275cmp=b({type:a,selectors:[["sample-po-stepper-active"]],viewQuery:function(r,i){if(r&1&&(F(ot,7),F(at,7),F(pt,7),F(x,5)),r&2){let m;I(m=V())&&(i.basicInformationForm=m.first),I(m=V())&&(i.academicFormationForm=m.first),I(m=V())&&(i.professionalExperiencesForm=m.first),I(m=V())&&(i.stepper=m.first)}},standalone:!1,decls:32,vars:16,consts:[["basicInformationForm","ngForm"],["academicFormationForm","ngForm"],["professionalExperiencesForm","ngForm"],["p-label","Basic information"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phone","p-label","Phone","p-optional","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","city","p-label","City",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Academic formation"],["p-label","High school",1,"po-md-12"],["name","highSchoolName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","highSchoolCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","highSchoolPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","University education",1,"po-md-12"],["name","universityEducationName","p-clean","","p-label","Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","universityEducationCity","p-clean","","p-label","City",1,"po-md-3",3,"ngModelChange","ngModel"],["name","universityEducationPeriod","p-label","Period",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Professional experiences"],["name","experienceTitle","p-label","Professional position",1,"po-md-12",3,"ngModelChange","ngModel"],["name","experienceDescripton","p-label","Describe your responsibilities","p-rows","4",1,"po-md-12",3,"ngModelChange","ngModel"],["type","submit","p-label","Add professional experience",1,"po-md-4",3,"p-click"],["class","po-row",4,"ngIf"],[1,"po-md-12"],["class","po-md-12",4,"ngFor","ngForOf"],[1,"po-md-12",3,"p-title"]],template:function(r,i){if(r&1){let m=q();t(0,"po-container")(1,"po-stepper")(2,"po-step",3)(3,"form",null,0)(5,"div",4)(6,"po-input",5),E("ngModelChange",function(o){return u(m),f(i.basicInformation.name,o)||(i.basicInformation.name=o),S(o)}),n(),t(7,"po-email",6),E("ngModelChange",function(o){return u(m),f(i.basicInformation.email,o)||(i.basicInformation.email=o),S(o)}),n(),t(8,"po-input",7),E("ngModelChange",function(o){return u(m),f(i.basicInformation.phone,o)||(i.basicInformation.phone=o),S(o)}),n(),t(9,"po-select",8),E("ngModelChange",function(o){return u(m),f(i.basicInformation.state,o)||(i.basicInformation.state=o),S(o)}),g("p-change",function(){return u(m),S(i.onChangeState())}),n(),t(10,"po-select",9),E("ngModelChange",function(o){return u(m),f(i.basicInformation.city,o)||(i.basicInformation.city=o),S(o)}),n()()()(),t(11,"po-step",10)(12,"form",null,1)(14,"div",4),p(15,"po-divider",11),t(16,"po-input",12),E("ngModelChange",function(o){return u(m),f(i.highSchool.name,o)||(i.highSchool.name=o),S(o)}),n(),t(17,"po-input",13),E("ngModelChange",function(o){return u(m),f(i.highSchool.city,o)||(i.highSchool.city=o),S(o)}),n(),t(18,"po-input",14),E("ngModelChange",function(o){return u(m),f(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),S(o)}),n()(),t(19,"div",4),p(20,"po-divider",15),t(21,"po-input",16),E("ngModelChange",function(o){return u(m),f(i.universityEducation.name,o)||(i.universityEducation.name=o),S(o)}),n(),t(22,"po-input",17),E("ngModelChange",function(o){return u(m),f(i.universityEducation.city,o)||(i.universityEducation.city=o),S(o)}),n(),t(23,"po-input",18),E("ngModelChange",function(o){return u(m),f(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),S(o)}),n()()()(),t(24,"po-step",19)(25,"form",null,2)(27,"div",4)(28,"po-input",20),E("ngModelChange",function(o){return u(m),f(i.experienceTitle,o)||(i.experienceTitle=o),S(o)}),n(),t(29,"po-textarea",21),E("ngModelChange",function(o){return u(m),f(i.experienceDescripton,o)||(i.experienceDescripton=o),S(o)}),n(),t(30,"po-button",22),g("p-click",function(){u(m);let o=v(26);return i.addProfessionalExperiences(o),S(o.reset())}),n()()(),B(31,lt,3,1,"div",23),n()()()}r&2&&(l(6),h("ngModel",i.basicInformation.name),l(),h("ngModel",i.basicInformation.email),l(),h("ngModel",i.basicInformation.phone),l(),h("ngModel",i.basicInformation.state),d("p-options",i.stateOptions),l(),h("ngModel",i.basicInformation.city),d("p-options",i.cityOptions),l(6),h("ngModel",i.highSchool.name),l(),h("ngModel",i.highSchool.city),l(),h("ngModel",i.highSchool.conclusionYear),l(3),h("ngModel",i.universityEducation.name),l(),h("ngModel",i.universityEducation.city),l(),h("ngModel",i.universityEducation.conclusionYear),l(5),h("ngModel",i.experienceTitle),l(),h("ngModel",i.experienceDescripton),l(2),d("ngIf",i.professionalExperiences))},dependencies:[X,G,H,J,O,Z,R,K,$,he,ve,ee,Ce,ye,L,x,ne],encapsulation:2})}return a})();var mt=a=>({"docs-sample-code-tabs":a}),We=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-stepper-active-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Stepper - Active"),n(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),p(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-stepper-active/sample-po-stepper-active.component.html"),n(),t(13,"pre",7),e(14,`<po-container>
  <po-stepper>
    <po-step p-label="Basic information">
      <form #basicInformationForm="ngForm">
        <div class="po-row">
          <po-input class="po-md-6" name="name" [(ngModel)]="basicInformation.name" p-clean p-label="Name" p-required>
          </po-input>
          <po-email
            class="po-md-6"
            name="email"
            [(ngModel)]="basicInformation.email"
            p-clean
            p-label="Email"
            p-required
          >
          </po-email>
          <po-input class="po-md-4" name="phone" [(ngModel)]="basicInformation.phone" p-label="Phone" p-optional>
          </po-input>
          <po-select
            class="po-md-4"
            name="state"
            [(ngModel)]="basicInformation.state"
            p-label="State"
            [p-options]="stateOptions"
            (p-change)="onChangeState()"
          >
          </po-select>
          <po-select
            class="po-md-4"
            name="city"
            [(ngModel)]="basicInformation.city"
            p-label="City"
            [p-options]="cityOptions"
          >
          </po-select>
        </div>
      </form>
    </po-step>
    <po-step p-label="Academic formation">
      <form #academicFormationForm="ngForm">
        <div class="po-row">
          <po-divider class="po-md-12" p-label="High school"></po-divider>
          <po-input class="po-md-6" name="highSchoolName" [(ngModel)]="highSchool.name" p-clean p-label="Name">
          </po-input>
          <po-input class="po-md-3" name="highSchoolCity" [(ngModel)]="highSchool.city" p-clean p-label="City">
          </po-input>
          <po-input class="po-md-3" name="highSchoolPeriod" [(ngModel)]="highSchool.conclusionYear" p-label="Period">
          </po-input>
        </div>
        <div class="po-row">
          <po-divider class="po-md-12" p-label="University education"> </po-divider>
          <po-input
            class="po-md-6"
            name="universityEducationName"
            [(ngModel)]="universityEducation.name"
            p-clean
            p-label="Name"
          >
          </po-input>
          <po-input
            class="po-md-3"
            name="universityEducationCity"
            [(ngModel)]="universityEducation.city"
            p-clean
            p-label="City"
          >
          </po-input>
          <po-input
            class="po-md-3"
            name="universityEducationPeriod"
            [(ngModel)]="universityEducation.conclusionYear"
            p-label="Period"
          >
          </po-input>
        </div>
      </form>
    </po-step>
    <po-step p-label="Professional experiences">
      <form #professionalExperiencesForm="ngForm">
        <div class="po-row">
          <po-input
            class="po-md-12"
            name="experienceTitle"
            [(ngModel)]="experienceTitle"
            p-label="Professional position"
          ></po-input>
          <po-textarea
            class="po-md-12"
            name="experienceDescripton"
            [(ngModel)]="experienceDescripton"
            p-label="Describe your responsibilities"
            p-rows="4"
          ></po-textarea>
          <po-button
            class="po-md-4"
            type="submit"
            p-label="Add professional experience"
            (p-click)="addProfessionalExperiences(professionalExperiencesForm); professionalExperiencesForm.reset()"
          ></po-button>
        </div>
      </form>
      <div class="po-row" *ngIf="professionalExperiences">
        <po-divider class="po-md-12"> </po-divider>
        <div class="po-md-12" *ngFor="let experience of professionalExperiences">
          <po-widget class="po-md-12" [p-title]="experience.title">
            <p>{ { experience.description }}</p>
          </po-widget>
        </div>
      </div>
    </po-step>
  </po-stepper>
</po-container>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-stepper-active/sample-po-stepper-active.component.ts"),n(),t(19,"pre",9),e(20,`import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PoSelectOption, PoStepperComponent } from '@po-ui/ng-components';
import { SamplePoStepperActiveService } from './sample-po-stepper-active.service';

@Component({
  selector: 'sample-po-stepper-active',
  templateUrl: './sample-po-stepper-active.component.html',
  standalone: false
})
export class SamplePoStepperActiveComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('basicInformation', { static: true }) basicInformationForm: NgForm;
  @ViewChild('academicFormation', { static: true }) academicFormationForm: NgForm;
  @ViewChild('professionalExperiences', { static: true }) professionalExperiencesForm: NgForm;
  @ViewChild(PoStepperComponent) stepper: PoStepperComponent;

  cityOptions: Array<PoSelectOption> = [];
  stateOptions: Array<PoSelectOption> = [];
  basicInformation: any;
  highSchool: any;
  universityEducation: any;
  professionalExperiences: Array<any>;
  experienceTitle: string;
  experienceDescripton: string;
  overview: any;

  private citiesSubscription: Subscription;
  private statesSubscription: Subscription;

  constructor(
    public sampleService: SamplePoStepperActiveService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.activeStep());
  }

  ngOnInit(): void {
    this.basicInformation = this.getBasicInformations();
    this.highSchool = this.getHighSchool();
    this.universityEducation = this.getUniversityEducation();
    this.professionalExperiences = this.getProfessionalExperiencies();
    this.getStates();
  }

  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.statesSubscription?.unsubscribe();
  }

  activeStep() {
    this.stepper.active(2);
  }

  onChangeState() {
    this.getCitiesByState(this.basicInformation.state);
  }

  addProfessionalExperiences(form: NgForm) {
    const experience = {
      title: form.value['experienceTitle'],
      description: form.value['experienceDescripton']
    };
    this.professionalExperiences = [...this.professionalExperiences, experience];
  }

  private getBasicInformations() {
    return {
      name: 'Maria Alice',
      email: 'mariaalice@gmail.com',
      phone: '47988888888',
      state: 'sp',
      city: 1
    };
  }

  private getHighSchool() {
    return {
      name: 'Escola de Ensino B\xE1sico Dr Jorge Lacerda',
      city: 'Joinville',
      conclusionYear: '2016'
    };
  }

  private getUniversityEducation() {
    return {
      name: 'Universidade Federal do Santa Catarina',
      city: 'Florian\xF3polis',
      conclusionYear: '2020'
    };
  }

  private getProfessionalExperiencies() {
    return [
      {
        title: 'Analista de desenvolvimento de software na TOTVS',
        description:
          'Respons\xE1vel pelo desenvolvimento e manuten\xE7\xE3o de sistemas do segmento de manufatura. Do ano de 2019 \xE0 2020'
      }
    ];
  }

  private getCitiesByState(state: string) {
    this.citiesSubscription = this.sampleService
      .getCitiesByState(state)
      .subscribe((cities: { items: Array<PoSelectOption> }) => {
        this.cityOptions = cities.items;
        this.basicInformation.city = this.cityOptions[0].value as number;
      });
  }

  private getStates() {
    this.statesSubscription = this.sampleService.getStates().subscribe((states: { items: Array<PoSelectOption> }) => {
      this.stateOptions = states.items;
      this.getCitiesByState(this.basicInformation.state);
    });
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-stepper-active/sample-po-stepper-active.service.ts"),n(),t(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoStepperActiveService {
  private url: string = 'https://po-sample-api.onrender.com/v1/sampleSelect';

  constructor(private http: HttpClient) {}

  getCitiesByState(uf: string) {
    return this.http.get(\`\${this.url}/getCities/\${uf}\`);
  }

  getStates() {
    return this.http.get(\`\${this.url}/getStates\`);
  }
}
`),n()()()()(),t(25,"div",10),p(26,"sample-po-stepper-active"),n(),p(27,"hr")),r&2&&(l(5),T("po-icon "+i.sampleCodeButtonIcon),l(),y(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",k(4,mt,i.hideSampleCodeTabs)))},dependencies:[A,w,_,P,Ae],encapsulation:2})}return a})();var Le=(()=>{class a{changeDetector;currentStep;stepsWithStatus=[{label:"Step 1",status:D.Done},{label:"Step 2",status:D.Active},{label:"Step 3",status:D.Default},{label:"Step 4",status:D.Disabled}];constructor(s){this.changeDetector=s}ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges()}onChangeStatus(s){this.currentStep=s,this.stepsWithStatus.forEach(r=>{r.status===D.Active&&(r.status=D.Done)}),this.stepsWithStatus.forEach((r,i)=>{i>this.currentStep&&r.status===D.Active&&(r.status=D.Default)}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===D.Disabled&&(this.stepsWithStatus[this.currentStep].status=D.Default)}static \u0275fac=function(r){return new(r||a)(M(z))};static \u0275cmp=b({type:a,selectors:[["sample-po-stepper-steps"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-change-step","p-align-center","p-sequential","p-step","p-steps"]],template:function(r,i){r&1&&(t(0,"po-stepper",0),g("p-change-step",function(c){return i.onChangeStatus(c)}),n()),r&2&&d("p-align-center",!1)("p-sequential",!1)("p-step",i.currentStep)("p-steps",i.stepsWithStatus)},dependencies:[x],encapsulation:2})}return a})();var ut=a=>({"docs-sample-code-tabs":a}),Be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-stepper-steps-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Stepper - Steps"),n(),t(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),p(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-stepper-steps/sample-po-stepper-steps.component.html"),n(),t(13,"pre",7),e(14,`<po-stepper
  [p-align-center]="false"
  [p-sequential]="false"
  [p-step]="currentStep"
  [p-steps]="stepsWithStatus"
  (p-change-step)="onChangeStatus($event)"
>
</po-stepper>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-stepper-steps/sample-po-stepper-steps.component.ts"),n(),t(19,"pre",9),e(20,`import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { PoStepperItem, PoStepperStatus } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-stepper-steps',
  templateUrl: './sample-po-stepper-steps.component.html',
  standalone: false
})
export class SamplePoStepperStepsComponent implements AfterViewInit {
  currentStep: number;
  stepsWithStatus: Array<PoStepperItem> = [
    { label: 'Step 1', status: PoStepperStatus.Done },
    { label: 'Step 2', status: PoStepperStatus.Active },
    { label: 'Step 3', status: PoStepperStatus.Default },
    { label: 'Step 4', status: PoStepperStatus.Disabled }
  ];

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.currentStep = 2;
    this.changeDetector.detectChanges();
  }

  onChangeStatus(event: number): void {
    this.currentStep = event;

    this.stepsWithStatus.forEach(step => {
      if (step.status === PoStepperStatus.Active) {
        step.status = PoStepperStatus.Done;
      }
    });

    this.stepsWithStatus.forEach((step, index) => {
      if (index > this.currentStep && step.status === PoStepperStatus.Active) {
        step.status = PoStepperStatus.Default;
      }
    });
    if (
      this.currentStep < this.stepsWithStatus.length &&
      this.stepsWithStatus[this.currentStep].status === PoStepperStatus.Disabled
    ) {
      this.stepsWithStatus[this.currentStep].status = PoStepperStatus.Default;
    }
  }
}
`),n()()()()(),t(21,"div",10),p(22,"sample-po-stepper-steps"),n(),p(23,"hr")),r&2&&(l(5),T("po-icon "+i.sampleCodeButtonIcon),l(),y(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",k(4,ut,i.hideSampleCodeTabs)))},dependencies:[A,w,_,P,Le],encapsulation:2})}return a})();var Ne=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-stepper-doc"]],standalone:!1,decls:1008,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-step"],["href","/documentation/po-stepper#stepIconsProperty"],["href","https://angular.io/api/core/ViewChild"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],["pan","",1,"docs-api-property-type","number"],["id","stepIconsProperty"],["pan","",1,"docs-api-property-type","Array<PoStepperItem>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoStepperStatus"],["id","stepperOrientation"],["id","stepperStatus"]],template:function(r,i){r&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoStepperModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-stepper"),n()(),t(7,"h3",3),e(8,"Componente"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoStepperComponent"),n()(),t(12,"div",2)(13,"p"),e(14,"O "),t(15,"code"),e(16,"po-stepper"),n(),e(17,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),n(),t(18,"p"),e(19,"Existem duas formas de utiliza\xE7\xE3o:"),n(),t(20,"p"),e(21,"1 - Usando o componente "),t(22,"a",6)(23,"strong"),e(24,"po-step"),n()(),e(25," para renderizar e descrever os passos."),n(),t(26,"p"),e(27,"2 - Atrav\xE9s da propriedade "),t(28,"code"),e(29,"p-steps"),n(),e(30,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),t(31,"em"),e(32,"step"),n(),e(33," ativo."),n(),t(34,"p"),e(35,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),t(36,"em"),e(37,"steps"),n(),e(38,"."),n(),t(39,"p"),e(40,"Tamb\xE9m \xE9 poss\xEDvel navegar entre os "),t(41,"em"),e(42,"steps"),n(),e(43," atrav\xE9s do teclado utilizando a tecla "),t(44,"em"),e(45,"tab"),n(),e(46," e, para ativar o "),t(47,"em"),e(48,"step"),n(),e(49,` em foco basta
pressionar a tecla `),t(50,"em"),e(51,"enter"),n(),e(52,". Al\xE9m disso, \xE9 poss\xEDvel ativar a exibi\xE7\xE3o de \xEDcones no lugar de n\xFAmeros nos "),t(53,"em"),e(54,"steps"),n(),e(55,` atrav\xE9s da
propriedade `),t(56,"a",7)(57,"code"),e(58,"p-step-icons"),n()(),e(59,"."),n(),t(60,"h4"),e(61,"Utilizando os m\xE9todos do componente:"),n(),t(62,"p"),e(63,"Para acessar os m\xE9todos do componente \xE9 necess\xE1rio ter a refer\xEAncia do mesmo."),n(),t(64,"p"),e(65,"Por exemplo, utilizando um "),t(66,"a",8)(67,"strong"),e(68,"ViewChild"),n()(),e(69,":"),n(),t(70,"pre")(71,"code"),e(72,`@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;
`),n()(),t(73,"p"),e(74,"E para acessar o m\xE9todo:"),n(),t(75,"pre")(76,"code"),e(77,`poStepperComponent.next();
`),n()(),t(78,"h4"),e(79,"Boas pr\xE1ticas"),n(),t(80,"ul")(81,"li"),e(82,"Evite "),t(83,"code"),e(84,"labels"),n(),e(85," extensos que quebram o layout do "),t(86,"code"),e(87,"po-stepper"),n(),e(88,", use "),t(89,"code"),e(90,"labels"),n(),e(91," diretos, curtos e intuitivos."),n(),t(92,"li"),e(93,"Utilize apenas um "),t(94,"code"),e(95,"po-stepper"),n(),e(96," por p\xE1gina."),n()(),t(97,"h4"),e(98,"Tokens customiz\xE1veis"),n(),t(99,"p"),e(100,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),n(),t(101,"blockquote")(102,"p"),e(103,"Para maiores informa\xE7\xF5es, acesse o guia "),t(104,"a",9),e(105,"Personalizando o Tema Padr\xE3o com Tokens CSS"),n(),e(106,"."),n()(),t(107,"table")(108,"thead")(109,"tr")(110,"th"),e(111,"Propriedade"),n(),t(112,"th"),e(113,"Descri\xE7\xE3o"),n(),t(114,"th"),e(115,"Valor Padr\xE3o"),n()()(),t(116,"tbody")(117,"tr")(118,"td")(119,"strong"),e(120,"Label"),n()(),p(121,"td")(122,"td"),n(),t(123,"tr")(124,"td")(125,"code"),e(126,"--font-family"),n()(),t(127,"td"),e(128,"Fam\xEDlia tipogr\xE1fica usada"),n(),t(129,"td")(130,"code"),e(131,"var(--font-family-theme)"),n()()(),t(132,"tr")(133,"td")(134,"code"),e(135,"--font-size"),n()(),t(136,"td"),e(137,"Tamanho da fonte"),n(),t(138,"td")(139,"code"),e(140,"var(--font-size-default)"),n()()(),t(141,"tr")(142,"td")(143,"code"),e(144,"--font-weight"),n()(),t(145,"td"),e(146,"Peso da fonte"),n(),t(147,"td")(148,"code"),e(149,"var(--font-weight-normal)"),n()()(),t(150,"tr")(151,"td")(152,"strong"),e(153,"Step - Done"),n()(),p(154,"td")(155,"td"),n(),t(156,"tr")(157,"td")(158,"code"),e(159,"--text-color"),n()(),t(160,"td"),e(161,"Cor do texto no step conclu\xEDdo"),n(),t(162,"td")(163,"code"),e(164,"var(--color-neutral-dark-70)"),n()()(),t(165,"tr")(166,"td")(167,"code"),e(168,"--color-icon-done"),n()(),t(169,"td"),e(170,"Cor do \xEDcone no step conclu\xEDdo"),n(),t(171,"td")(172,"code"),e(173,"var(--color-neutral-dark-70)"),n()()(),t(174,"tr")(175,"td")(176,"code"),e(177,"--background-done"),n()(),t(178,"td"),e(179,"Cor de fundo no step conclu\xEDdo"),n(),t(180,"td")(181,"code"),e(182,"var(--color-neutral-light-00)"),n()()(),t(183,"tr")(184,"td")(185,"strong"),e(186,"Line - Done"),n()(),p(187,"td")(188,"td"),n(),t(189,"tr")(190,"td")(191,"code"),e(192,"--color-line-done"),n()(),t(193,"td"),e(194,"Cor da linha no step conclu\xEDdo"),n(),t(195,"td")(196,"code"),e(197,"var(--color-neutral-mid-40)"),n()()(),t(198,"tr")(199,"td")(200,"strong"),e(201,"Step - Current"),n()(),p(202,"td")(203,"td"),n(),t(204,"tr")(205,"td")(206,"code"),e(207,"--color-icon-current"),n()(),t(208,"td"),e(209,"Cor do \xEDcone no step atual"),n(),t(210,"td")(211,"code"),e(212,"var(--color-neutral-light-00)"),n()()(),t(213,"tr")(214,"td")(215,"code"),e(216,"--background-current"),n()(),t(217,"td"),e(218,"Cor de fundo no step atual"),n(),t(219,"td")(220,"code"),e(221,"var(--color-action-default)"),n()()(),t(222,"tr")(223,"td")(224,"code"),e(225,"--font-weight-current"),n()(),t(226,"td"),e(227,"Peso da fonte no step atual"),n(),t(228,"td")(229,"code"),e(230,"var(--font-weight-bold)"),n()()(),t(231,"tr")(232,"td")(233,"strong"),e(234,"Step - Next"),n()(),p(235,"td")(236,"td"),n(),t(237,"tr")(238,"td")(239,"code"),e(240,"--font-size-circle"),n()(),t(241,"td"),e(242,"Tamanho da fonte no c\xEDrculo do pr\xF3ximo step"),n(),t(243,"td")(244,"code"),e(245,"var(--font-size-sm)"),n()()(),t(246,"tr")(247,"td")(248,"code"),e(249,"--color-next"),n()(),t(250,"td"),e(251,"Cor do \xEDcone no pr\xF3ximo step"),n(),t(252,"td")(253,"code"),e(254,"var(--color-action-disabled)"),n()()(),t(255,"tr")(256,"td")(257,"code"),e(258,"--text-color-next"),n()(),t(259,"td"),e(260,"Cor do texto no pr\xF3ximo step"),n(),t(261,"td")(262,"code"),e(263,"var(--color-neutral-light-30)"),n()()(),t(264,"tr")(265,"td")(266,"strong"),e(267,"Focused"),n()(),p(268,"td")(269,"td"),n(),t(270,"tr")(271,"td")(272,"code"),e(273,"--outline-color-focused"),n()(),t(274,"td"),e(275,"Cor do outline do estado de focus"),n(),t(276,"td")(277,"code"),e(278,"var(--color-action-focus)"),n()()()()()(),t(279,"div",10)(280,"h4",11),e(281,"Seletor"),n(),t(282,"pre",12),e(283,`<po-stepper
    p-align-center="boolean"
    p-disable-click="boolean"
    p-step-icon-active="string | TemplateRef<void>"
    p-step-icon-done="string | TemplateRef<void>"
    (p-change-step)="EventEmitter"
    p-orientation="PoStepperOrientation"
    p-sequential="boolean"
    p-step="number"
    p-step-icons="boolean"
    p-step-size="number"
    p-steps="Array<PoStepperItem>" >
</po-stepper>
`),n()(),t(284,"h4",13),e(285,"Propriedades"),n(),t(286,"table",14)(287,"tr",15)(288,"th",16),e(289,"Nome"),n(),t(290,"th",16),e(291,"Tipo"),n(),t(292,"th",16),e(293,"Padr\xE3o"),n(),t(294,"th",16),e(295,"Descri\xE7\xE3o"),n()(),t(296,"tr",17)(297,"td",18)(298,"div",19)(299,"span",20),e(300," p-align-center"),p(301,"br"),n()()(),t(302,"td",21)(303,"code",22),e(304,"boolean"),n()(),t(305,"td",23)(306,"p")(307,"code"),e(308,"true"),n()()(),t(309,"td",24)(310,"em")(311,"strong"),e(312,"(opcional)"),n()(),t(313,"p"),e(314,"Define o alinhamento dos "),t(315,"em"),e(316,"steps"),n(),e(317," e "),t(318,"em"),e(319,"labels"),n(),e(320," no "),t(321,"em"),e(322,"stepper"),n(),e(323,", dependendo da orienta\xE7\xE3o."),n(),t(324,"ul")(325,"li"),e(326,"Quando "),t(327,"code"),e(328,"true"),n(),e(329,", ficam centralizados em ambas as orienta\xE7\xF5es (horizontal e vertical)."),n(),t(330,"li"),e(331,"Quando "),t(332,"code"),e(333,"false"),n(),e(334,", ficam alinhados \xE0 esquerda na orienta\xE7\xE3o horizontal e ao topo na orienta\xE7\xE3o vertical."),n()()()(),t(335,"tr",17)(336,"td",18)(337,"div",19)(338,"span",20),e(339," p-disable-click"),p(340,"br"),n()()(),t(341,"td",21)(342,"code",22),e(343,"boolean"),n()(),t(344,"td",23)(345,"p")(346,"code"),e(347,"false"),n()()(),t(348,"td",24)(349,"em")(350,"strong"),e(351,"(opcional)"),n()(),t(352,"p"),e(353,"Desabilita o clique nos steps."),n()()(),t(354,"tr",17)(355,"td",18)(356,"div",19)(357,"span",20),e(358," p-step-icon-active"),p(359,"br"),n()()(),t(360,"td",21)(361,"code",25),e(362,"string "),n(),t(363,"code",26),e(364," TemplateRef<void>"),n()(),t(365,"td",23)(366,"p")(367,"code"),e(368,"po-icon-edit"),n()()(),t(369,"td",24)(370,"em")(371,"strong"),e(372,"(opcional)"),n()(),t(373,"p"),e(374,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),t(375,"a",27),e(376,"Biblioteca de \xEDcones"),n(),e(377,"."),n(),t(378,"pre")(379,"code"),e(380,`<po-stepper p-step-icon-active="an an-pencil-simple-line">
   ...
</po-stepper>
`),n()(),t(381,"p"),e(382,"Para customizar o \xEDcone atrav\xE9s do "),t(383,"code"),e(384,"TemplateRef"),n(),e(385,", veja a documenta\xE7\xE3o da propriedade "),t(386,"code"),e(387,"p-step-icon-done"),n(),e(388,"."),n(),t(389,"blockquote")(390,"p"),e(391,"Deve-se usar "),t(392,"code"),e(393,"font-size: inherit"),n(),e(394," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),n()()()(),t(395,"tr",17)(396,"td",18)(397,"div",19)(398,"span",20),e(399," p-step-icon-done"),p(400,"br"),n()()(),t(401,"td",21)(402,"code",25),e(403,"string "),n(),t(404,"code",26),e(405," TemplateRef<void>"),n()(),t(406,"td",23)(407,"p")(408,"code"),e(409,"po-icon-ok"),n()()(),t(410,"td",24)(411,"em")(412,"strong"),e(413,"(opcional)"),n()(),t(414,"p"),e(415,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),t(416,"a",27),e(417,"Biblioteca de \xEDcones"),n()(),t(418,"pre")(419,"code"),e(420,`<po-stepper p-step-icon-done="an an-check-circle">
   ...
</po-stepper>
`),n()(),t(421,"p"),e(422,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(423,"code"),e(424,"TemplateRef"),n(),e(425,", conforme exemplo abaixo:"),n(),t(426,"pre")(427,"code"),e(428,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="an an-check-fat"></i>
</ng-template>
`),n()(),t(429,"blockquote")(430,"p"),e(431,"Deve-se usar "),t(432,"code"),e(433,"font-size: inherit"),n(),e(434," para ajustar \xEDcones que n\xE3o se ajustam automaticamente."),n()()()(),t(435,"tr",17)(436,"td",18)(437,"div",28)(438,"span",29),e(439," (p-change-step)"),p(440,"br"),n()()(),t(441,"td",21)(442,"code",30),e(443,"EventEmitter"),n()(),t(444,"td",23),e(445,"-"),n(),t(446,"td",24)(447,"p"),e(448,"A\xE7\xE3o que ser\xE1 executada quando o usu\xE1rio mudar o passo do "),t(449,"code"),e(450,"po-stepper"),n(),e(451,"."),n()()(),t(452,"tr",17)(453,"td",18)(454,"div",19)(455,"span",20),e(456," p-orientation"),p(457,"br"),n()()(),t(458,"td",21)(459,"code",31),e(460,"PoStepperOrientation"),n()(),t(461,"td",23)(462,"p")(463,"code"),e(464,"PoStepperOrientation.Horizontal"),n()()(),t(465,"td",24)(466,"em")(467,"strong"),e(468,"(opcional)"),n()(),t(469,"p"),e(470,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),t(471,"code"),e(472,"po-stepper"),n(),e(473,"."),n(),t(474,"blockquote")(475,"p"),e(476,"Veja os valores v\xE1lidos no "),t(477,"em"),e(478,"enum"),n(),t(479,"a",32),e(480,"PoStepperOrientation"),n(),e(481,"."),n()()()(),t(482,"tr",17)(483,"td",18)(484,"div",19)(485,"span",20),e(486," p-sequential"),p(487,"br"),n()()(),t(488,"td",21)(489,"code",22),e(490,"boolean"),n()(),t(491,"td",23)(492,"p")(493,"code"),e(494,"true"),n()()(),t(495,"td",24)(496,"em")(497,"strong"),e(498,"(opcional)"),n()(),t(499,"p"),e(500,"Define se o "),t(501,"code"),e(502,"po-stepper"),n(),e(503," ser\xE1 sequencial ou aleat\xF3rio."),n(),t(504,"blockquote")(505,"p"),e(506,"Ao utilizar o componente "),t(507,"a",6)(508,"strong"),e(509,"po-step"),n()(),e(510,", o valor desta propriedade sempre ser\xE1 verdadeiro."),n()()()(),t(511,"tr",17)(512,"td",18)(513,"div",19)(514,"span",20),e(515," p-step"),p(516,"br"),n()()(),t(517,"td",21)(518,"code",33),e(519,"number"),n()(),t(520,"td",23)(521,"p")(522,"code"),e(523,"1"),n()()(),t(524,"td",24)(525,"em")(526,"strong"),e(527,"(opcional)"),n()(),t(528,"p"),e(529,"Controla o passo atual do "),t(530,"code"),e(531,"po-stepper"),n(),e(532,"."),n(),t(533,"blockquote")(534,"p"),e(535,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),t(536,"a",6)(537,"strong"),e(538,"po-step"),n()(),e(539,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),t(540,"a",6)(541,"strong"),e(542,"po-step"),n()(),e(543,"."),n()()()(),t(544,"tr",17)(545,"td",18)(546,"div",19)(547,"span",20),e(548," p-step-icons"),p(549,"br"),n()()(),t(550,"td",21)(551,"code",22),e(552,"boolean"),n()(),t(553,"td",23)(554,"p")(555,"code"),e(556,"false"),n()()(),t(557,"td",24)(558,"em")(559,"strong"),e(560,"(opcional)"),n()(),t(561,"p"),p(562,"a",34),n(),t(563,"p"),e(564,"Habilita a exibi\xE7\xE3o de \xEDcone ao inv\xE9s de n\xFAmero no centro do c\xEDrculo dos "),t(565,"em"),e(566,"steps"),n(),e(567,"."),n()()(),t(568,"tr",17)(569,"td",18)(570,"div",19)(571,"span",20),e(572," p-step-size"),p(573,"br"),n()()(),t(574,"td",21)(575,"code",33),e(576,"number"),n()(),t(577,"td",23)(578,"p")(579,"code"),e(580,"24"),n()()(),t(581,"td",24)(582,"em")(583,"strong"),e(584,"(opcional)"),n()(),t(585,"p"),e(586,"Define o tamanho dos "),t(587,"em"),e(588,"steps"),n(),e(589," em "),t(590,"em"),e(591,"pixels"),n(),e(592,", possibilitando um maior destaque."),n(),t(593,"p"),e(594,"O valor informado deve ser entre "),t(595,"code"),e(596,"24"),n(),e(597," e "),t(598,"code"),e(599,"64"),n(),e(600,"."),n(),t(601,"blockquote")(602,"p"),e(603,"Valores que n\xE3o se enquadrarem a esta regra ser\xE3o ignorados, mantendo-se o valor "),t(604,"em"),e(605,"default"),n(),e(606,"."),n()()()(),t(607,"tr",17)(608,"td",18)(609,"div",19)(610,"span",20),e(611," p-steps"),p(612,"br"),n()()(),t(613,"td",21)(614,"code",35),e(615,"Array<PoStepperItem>"),n()(),t(616,"td",23),e(617,"-"),n(),t(618,"td",24)(619,"em")(620,"strong"),e(621,"(opcional)"),n()(),t(622,"p"),e(623,"Lista dos itens do stepper. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),n(),t(624,"blockquote")(625,"p"),e(626,"Ao utilizar esta propriedade e tamb\xE9m utilizar o componente "),t(627,"a",6)(628,"strong"),e(629,"po-step"),n()(),e(630,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),t(631,"a",6)(632,"strong"),e(633,"po-step"),n()(),e(634,"."),n()()()()(),t(635,"h3",13),e(636,"M\xE9todos"),n(),t(637,"table",36)(638,"tr",17)(639,"th",37)(640,"div",19)(641,"h4")(642,"span",20),e(643," active "),n()()()()(),t(644,"tr",24)(645,"td",24)(646,"p"),e(647,"Altera o status do "),t(648,"em"),e(649,"step"),n(),e(650," para ativo."),n(),t(651,"blockquote")(652,"p"),e(653,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),t(654,"a",6)(655,"strong"),e(656,"po-step"),n()(),e(657,"."),n()()()()(),t(658,"h5")(659,"b"),e(660,"Par\xE2metros"),n()(),t(661,"table",14)(662,"tr",15)(663,"th",16),e(664,"Nome"),n(),t(665,"th",16),e(666,"Tipo"),n(),t(667,"th",16),e(668,"Descri\xE7\xE3o"),n()(),t(669,"tr",17)(670,"td",18),e(671," index"),n(),t(672,"td",21)(673,"code",38),e(674," number "),n()(),t(675,"td",24)(676,"p"),e(677,"\xCDndice do "),t(678,"code"),e(679,"po-step"),n(),e(680," que se deseja ativar."),n()()()(),p(681,"br"),t(682,"table",36)(683,"tr",17)(684,"th",37)(685,"div",19)(686,"h4")(687,"span",20),e(688," first "),n()()()()(),t(689,"tr",24)(690,"td",24)(691,"p"),e(692,"Ativa o primeiro "),t(693,"em"),e(694,"step"),n(),e(695,"."),n(),t(696,"blockquote")(697,"p"),e(698,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),t(699,"a",6)(700,"strong"),e(701,"po-step"),n()(),e(702,"."),n()()()()(),p(703,"br"),t(704,"table",36)(705,"tr",17)(706,"th",37)(707,"div",19)(708,"h4")(709,"span",20),e(710," next "),n()()()()(),t(711,"tr",24)(712,"td",24)(713,"p"),e(714,"Ativa o pr\xF3ximo "),t(715,"em"),e(716,"step"),n(),e(717,"."),n(),t(718,"blockquote")(719,"p"),e(720,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),t(721,"a",6)(722,"strong"),e(723,"po-step"),n()(),e(724,"."),n()()()()(),p(725,"br"),t(726,"table",36)(727,"tr",17)(728,"th",37)(729,"div",19)(730,"h4")(731,"span",20),e(732," previous "),n()()()()(),t(733,"tr",24)(734,"td",24)(735,"p"),e(736,"Ativa o "),t(737,"em"),e(738,"step"),n(),e(739," anterior."),n(),t(740,"blockquote")(741,"p"),e(742,"Este m\xE9todo \xE9 valido apenas para as implementa\xE7\xF5es que utilizam o componente "),t(743,"a",6)(744,"strong"),e(745,"po-step"),n()(),e(746,"."),n()()()()(),p(747,"br"),t(748,"h3"),e(749,"Interfaces"),n(),t(750,"h4",39)(751,"code",5),e(752,"PoStepperItem"),n()(),t(753,"div",2)(754,"p"),e(755,"Interface para defini\xE7\xE3o dos "),t(756,"em"),e(757,"steps"),n(),e(758," do componente "),t(759,"code"),e(760,"po-stepper"),n(),e(761," quando utilizada a propriedade "),t(762,"code"),e(763,"p-steps"),n(),e(764,"."),n()(),t(765,"h4",13),e(766,"Propriedades"),n(),t(767,"table",14)(768,"tr",15)(769,"th",16),e(770,"Nome"),n(),t(771,"th",16),e(772,"Tipo"),n(),t(773,"th",16),e(774,"Descri\xE7\xE3o"),n()(),t(775,"tr",17)(776,"td",18)(777,"div",19)(778,"span",20),e(779," iconActive"),p(780,"br"),n()()(),t(781,"td",21)(782,"code",25),e(783,"string "),n(),t(784,"code",26),e(785," TemplateRef<void>"),n()(),t(786,"td",24)(787,"em")(788,"strong"),e(789,"(opcional)"),n()(),t(790,"p"),e(791,"Define o \xEDcone do "),t(792,"em"),e(793,"step"),n(),e(794," ativo."),n()()(),t(795,"tr",17)(796,"td",18)(797,"div",19)(798,"span",20),e(799," iconDefault"),p(800,"br"),n()()(),t(801,"td",21)(802,"code",25),e(803,"string "),n(),t(804,"code",26),e(805," TemplateRef<void>"),n()(),t(806,"td",24)(807,"em")(808,"strong"),e(809,"(opcional)"),n()(),t(810,"p"),e(811,"Define o \xEDcone do "),t(812,"em"),e(813,"step"),n(),e(814," default."),n()()(),t(815,"tr",17)(816,"td",18)(817,"div",19)(818,"span",20),e(819," iconDone"),p(820,"br"),n()()(),t(821,"td",21)(822,"code",25),e(823,"string "),n(),t(824,"code",26),e(825," TemplateRef<void>"),n()(),t(826,"td",24)(827,"em")(828,"strong"),e(829,"(opcional)"),n()(),t(830,"p"),e(831,"Define o \xEDcone do "),t(832,"em"),e(833,"step"),n(),e(834," conclu\xEDdo."),n()()(),t(835,"tr",17)(836,"td",18)(837,"div",19)(838,"span",20),e(839," id"),p(840,"br"),n()()(),t(841,"td",21)(842,"code",25),e(843,"string"),n()(),t(844,"td",24)(845,"em")(846,"strong"),e(847,"(opcional)"),n()(),t(848,"p"),e(849,"Identificador \xFAnico do step."),n()()(),t(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),e(854," label"),p(855,"br"),n()()(),t(856,"td",21)(857,"code",25),e(858,"string"),n()(),t(859,"td",24)(860,"em")(861,"strong"),e(862,"(opcional)"),n()(),t(863,"p"),e(864,"Texto do item do stepper."),n()()(),t(865,"tr",17)(866,"td",18)(867,"div",19)(868,"span",20),e(869," status"),p(870,"br"),n()()(),t(871,"td",21)(872,"code",40),e(873,"PoStepperStatus"),n()(),t(874,"td",24)(875,"em")(876,"strong"),e(877,"(opcional)"),n()(),t(878,"p"),e(879,"Define o estado de exibi\xE7\xE3o do "),t(880,"em"),e(881,"step"),n(),e(882,"."),n()()()(),t(883,"h3"),e(884,"Enums"),n(),t(885,"h4",4)(886,"code",5),e(887,"PoStepperOrientation"),n()(),t(888,"div",2)(889,"p"),p(890,"a",41),n(),t(891,"p")(892,"em"),e(893,"Enums"),n(),e(894," para defini\xE7\xE3o da orienta\xE7\xE3o do "),t(895,"code"),e(896,"po-stepper"),n(),e(897,"."),n()(),t(898,"h4",13),e(899,"Propriedades"),n(),t(900,"table",14)(901,"tr",15)(902,"th",16),e(903,"Nome"),n(),t(904,"th",16),e(905,"Descri\xE7\xE3o"),n()(),t(906,"tr",17)(907,"td",18)(908,"div",19)(909,"span",20),e(910," Horizontal"),p(911,"br"),n()()(),t(912,"td",24)(913,"p"),e(914,"Define a exibi\xE7\xE3o do componente na horizontal."),n()()(),t(915,"tr",17)(916,"td",18)(917,"div",19)(918,"span",20),e(919," Vertical"),p(920,"br"),n()()(),t(921,"td",24)(922,"p"),e(923,"Define a exibi\xE7\xE3o do componente na vertical."),n()()()(),t(924,"h4",4)(925,"code",5),e(926,"PoStepperStatus"),n()(),t(927,"div",2)(928,"p"),p(929,"a",42),n(),t(930,"p")(931,"em"),e(932,"Enums"),n(),e(933," para os status do "),t(934,"code"),e(935,"po-stepper"),n(),e(936," quando utilizada a propriedade "),t(937,"code"),e(938,"p-steps"),n(),e(939,"."),n()(),t(940,"h4",13),e(941,"Propriedades"),n(),t(942,"table",14)(943,"tr",15)(944,"th",16),e(945,"Nome"),n(),t(946,"th",16),e(947,"Descri\xE7\xE3o"),n()(),t(948,"tr",17)(949,"td",18)(950,"div",19)(951,"span",20),e(952," Active"),p(953,"br"),n()()(),t(954,"td",24)(955,"p"),e(956,"Define o estado do "),t(957,"em"),e(958,"step"),n(),e(959," como ativo."),n()()(),t(960,"tr",17)(961,"td",18)(962,"div",19)(963,"span",20),e(964," Default"),p(965,"br"),n()()(),t(966,"td",24)(967,"p"),e(968,"Define o estado do "),t(969,"em"),e(970,"step"),n(),e(971," como padr\xE3o."),n()()(),t(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),e(976," Disabled"),p(977,"br"),n()()(),t(978,"td",24)(979,"p"),e(980,"Define o estado do "),t(981,"em"),e(982,"step"),n(),e(983," como desabilitado."),n()()(),t(984,"tr",17)(985,"td",18)(986,"div",19)(987,"span",20),e(988," Done"),p(989,"br"),n()()(),t(990,"td",24)(991,"p"),e(992,"Define o estado do "),t(993,"em"),e(994,"step"),n(),e(995," como conclu\xEDdo."),n()()(),t(996,"tr",17)(997,"td",18)(998,"div",19)(999,"span",20),e(1e3," Error"),p(1001,"br"),n()()(),t(1002,"td",24)(1003,"p"),e(1004,"Define o estado do "),t(1005,"em"),e(1006,"step"),n(),e(1007," com erro."),n()()()()())},dependencies:[w],encapsulation:2})}return a})();var qe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,r){this.route=s,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let r=s.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(M(Se),M(ge))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:10,vars:4,consts:[["p-title","Stepper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return i.changeTab("doc")}),p(3,"sample-po-stepper-doc"),n(),t(4,"po-tab",3),g("p-click",function(){return i.changeTab("web")}),p(5,"sample-po-stepper-basic-view")(6,"sample-po-stepper-labs-view")(7,"sample-po-stepper-sales-view")(8,"sample-po-stepper-active-view")(9,"sample-po-stepper-steps-view"),n()()()),r&2&&(d("p-actions",i.actions),l(2),d("p-active",i.activeTab==="doc"),l(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[_e,_,P,De,Fe,Ve,We,Be,Ne],encapsulation:2})}return a})();var ht=[{path:"",component:qe}],ze=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=Y({type:a});static \u0275inj=U({imports:[ie.forChild(ht),ie]})}return a})();var en=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=Y({type:a});static \u0275inj=U({imports:[Pe,ze]})}return a})();export{en as DocPoStepperModule};
