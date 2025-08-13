import{o as C,p as de}from"./chunk-MMZVQUBQ.js";import{Ab as P,Db as me,F,Ga as ae,La as re,Qa as le,Ra as se,T as te,Wa as pe,a as ee,ha as ne,ja as ie,ma as M,na as z,nb as L,oa as k,ta as oe,zb as x}from"./chunk-522XRIZO.js";import{Ac as O,Ba as w,Bc as J,Ec as K,Fa as n,Fc as X,Ga as t,Ha as a,Ic as Y,La as j,M as V,Ma as E,Na as H,Oc as Z,Qc as $,Sc as q,T as g,U as b,Ya as e,_a as _,ab as S,bb as f,cb as h,fb as D,ha as p,ia as y,oa as u,pa as I,ua as R,vb as T,xb as G,xc as B,ya as m,yc as U,zc as Q}from"./chunk-WFKG4FNY.js";var ce=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-progress-basic"]],standalone:!1,decls:1,vars:1,consts:[[3,"p-value"]],template:function(r,i){r&1&&a(0,"po-progress",0),r&2&&m("p-value",25)},dependencies:[k],encapsulation:2})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-progress-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Progress Basic"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-progress-basic/sample-po-progress-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-progress [p-value]="25"></po-progress>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-progress-basic/sample-po-progress-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-progress-basic',
  templateUrl: './sample-po-progress-basic.component.html',
  standalone: false
})
export class SamplePoProgressBasicComponent {}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-progress-basic"),t(),a(23,"hr")),r&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",D(4,Pe,i.hideSampleCodeTabs)))},dependencies:[T,C,x,P,ce],encapsulation:2})}return o})();function we(o,Ie){if(o&1&&(n(0,"div")(1,"po-widget",18)(2,"form",19),a(3,"po-input",20)(4,"po-select",21)(5,"po-select",22)(6,"po-switch",23)(7,"po-switch",24),t()()()),o&2){let l=H();p(2),m("formGroup",l.actionForm),p(2),m("p-options",l.iconOptions),p(),m("p-options",l.typeOptions)}}var ge=(()=>{class o{fb;poNotification;event;info;infoIcon;disabledCancel;indeterminate;showPercentage;status=M.Default;size=z.large;text;value;action;actionForm;showAction;properties;sizeActions;infoIconsOptions=[{label:"an an-warning-circle",value:"an an-warning-circle"},{label:"an an-check",value:"an an-check"},{label:"an an-user",value:"an an-user"},{label:"an an-cloud-slash",value:"an an-cloud-slash"}];statusOptions=[{label:"Default",value:M.Default},{label:"Success",value:M.Success},{label:"Error",value:M.Error}];sizeOptions=[{label:"Medium",value:z.medium},{label:"Large",value:z.large}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Visible",value:"visible"}];propertiesOptions=[{value:"disabledCancel",label:"Disabled cancel"},{value:"indeterminate",label:"Indeterminate"},{value:"showPercentage",label:"Show percentage"}];constructor(l,r){this.fb=l,this.poNotification=r,this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(l=>{this.updateAction(l)})}updateAction(l){this.action=l}onEvent(l){this.event=l}restore(){this.event=void 0,this.info=void 0,this.infoIcon=void 0,this.disabledCancel=!1,this.indeterminate=!1,this.showPercentage=!1,this.status=M.Default,this.text=void 0,this.value=void 0,this.size=z.large,this.actionForm.reset({type:"default",visible:!0}),this.action={label:"",type:"default"},this.showAction=!1,this.properties=[],this.sizeActions="medium"}static \u0275fac=function(r){return new(r||o)(y(Y),y(te))};static \u0275cmp=u({type:o,selectors:[["sample-po-progress-labs"]],standalone:!1,decls:19,vars:27,consts:[["progressBarPropertiesForm","ngForm"],[2,"display","grid","gap","16px"],[3,"p-custom-action-click","p-cancel","p-retry","p-disabled-cancel","p-indeterminate","p-show-percentage","p-info","p-info-icon","p-status","p-text","p-value","p-size","p-size-actions","p-custom-action"],["p-title","Events"],[3,"p-value"],["p-title","Properties"],["name","text","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value","p-max","100","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","Size","p-label","Size",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","Status","p-label","Status",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","infoIcon","p-label","Info icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","info","p-clean","","p-label","Info",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","sizeActions","p-columns","4","p-label","Size actions","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","addAction","p-label","Add Action Button",1,"po-md-3",3,"ngModelChange","ngModel"],[4,"ngIf"],[1,"po-row"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"]],template:function(r,i){if(r&1){let d=j();n(0,"div",1)(1,"po-progress",2),E("p-custom-action-click",function(){return g(d),b(i.onEvent("p-custom-action-click"))})("p-cancel",function(){return g(d),b(i.onEvent("p-cancel"))})("p-retry",function(){return g(d),b(i.onEvent("p-retry"))}),t(),n(2,"po-widget",3),a(3,"po-info",4),t(),n(4,"po-widget",5)(5,"form",null,0)(7,"po-input",6),h("ngModelChange",function(s){return g(d),f(i.text,s)||(i.text=s),b(s)}),t(),n(8,"po-number",7),h("ngModelChange",function(s){return g(d),f(i.value,s)||(i.value=s),b(s)}),t(),n(9,"po-select",8),h("ngModelChange",function(s){return g(d),f(i.size,s)||(i.size=s),b(s)}),t(),n(10,"po-select",9),h("ngModelChange",function(s){return g(d),f(i.status,s)||(i.status=s),b(s)}),t(),n(11,"po-select",10),h("ngModelChange",function(s){return g(d),f(i.infoIcon,s)||(i.infoIcon=s),b(s)}),t(),n(12,"po-input",11),h("ngModelChange",function(s){return g(d),f(i.info,s)||(i.info=s),b(s)}),t(),n(13,"po-checkbox-group",12),h("ngModelChange",function(s){return g(d),f(i.properties,s)||(i.properties=s),b(s)}),t(),n(14,"po-radio-group",13),h("ngModelChange",function(s){return g(d),f(i.sizeActions,s)||(i.sizeActions=s),b(s)}),t(),n(15,"po-switch",14),h("ngModelChange",function(s){return g(d),f(i.showAction,s)||(i.showAction=s),b(s)}),t()()(),R(16,we,8,3,"div",15),n(17,"div",16)(18,"po-button",17),E("p-click",function(){return g(d),b(i.restore())}),t()()()}r&2&&(p(),m("p-disabled-cancel",i.properties.includes("disabledCancel"))("p-indeterminate",i.properties.includes("indeterminate"))("p-show-percentage",i.properties.includes("showPercentage"))("p-info",i.info)("p-info-icon",i.infoIcon)("p-status",i.status)("p-text",i.text)("p-value",i.value)("p-size",i.size)("p-size-actions",i.sizeActions)("p-custom-action",i.action),p(2),m("p-value",i.event),p(4),S("ngModel",i.text),p(),S("ngModel",i.value),p(),S("ngModel",i.size),m("p-options",i.sizeOptions),p(),S("ngModel",i.status),m("p-options",i.statusOptions),p(),S("ngModel",i.infoIcon),m("p-options",i.infoIconsOptions),p(),S("ngModel",i.info),p(),S("ngModel",i.properties),m("p-options",i.propertiesOptions),p(),S("ngModel",i.sizeActions),m("p-options",i.sizeActionsOptions),p(),S("ngModel",i.showAction),p(),m("ngIf",i.showAction))},dependencies:[G,J,B,U,O,Q,K,X,F,ne,ie,ae,re,se,oe,pe,k,me],encapsulation:2})}return o})();var De=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-progress-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Progress Labs"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-progress-labs/sample-po-progress-labs.component.html"),t(),n(13,"pre",7),e(14,`<div style="display: grid; gap: 16px">
  <po-progress
    [p-disabled-cancel]="properties.includes('disabledCancel')"
    [p-indeterminate]="properties.includes('indeterminate')"
    [p-show-percentage]="properties.includes('showPercentage')"
    [p-info]="info"
    [p-info-icon]="infoIcon"
    [p-status]="status"
    [p-text]="text"
    [p-value]="value"
    [p-size]="size"
    [p-size-actions]="sizeActions"
    [p-custom-action]="action"
    (p-custom-action-click)="onEvent('p-custom-action-click')"
    (p-cancel)="onEvent('p-cancel')"
    (p-retry)="onEvent('p-retry')"
  />

  <po-widget p-title="Events">
    <po-info [p-value]="event" />
  </po-widget>

  <po-widget p-title="Properties">
    <form #progressBarPropertiesForm="ngForm">
      <po-input class="po-md-6" name="text" [(ngModel)]="text" p-clean p-label="Label" />
      <po-number
        class="po-md-6 po-lg-3"
        name="value"
        [(ngModel)]="value"
        p-clean
        p-label="Value"
        p-max="100"
        p-min="0"
      />
      <po-select class="po-md-6 po-lg-3" name="Size" p-label="Size" [(ngModel)]="size" [p-options]="sizeOptions" />
      <po-select
        class="po-md-6 po-lg-3"
        name="Status"
        p-label="Status"
        [(ngModel)]="status"
        [p-options]="statusOptions"
      />

      <po-select
        class="po-md-6 po-lg-3"
        name="infoIcon"
        [(ngModel)]="infoIcon"
        p-label="Info icon"
        [p-options]="infoIconsOptions"
      />
      <po-input class="po-md-6" name="info" [(ngModel)]="info" p-clean p-label="Info" />

      <po-checkbox-group
        class="po-md-12"
        name="properties"
        [(ngModel)]="properties"
        p-columns="4"
        p-help="Select any options"
        p-label="Properties"
        [p-options]="propertiesOptions"
      >
      </po-checkbox-group>

      <po-radio-group
        class="po-md-12"
        name="sizeActions"
        [(ngModel)]="sizeActions"
        p-columns="4"
        p-label="Size actions"
        p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
        [p-options]="sizeActionsOptions"
      >
      </po-radio-group>

      <po-switch class="po-md-3" name="addAction" [(ngModel)]="showAction" p-label="Add Action Button" />
    </form>
  </po-widget>

  <div *ngIf="showAction">
    <po-widget p-title="Action Button">
      <form [formGroup]="actionForm" class="po-row">
        <po-input class="po-md-6 po-lg-4" formControlName="label" p-label="Label" />
        <po-select class="po-md-6 po-lg-3" formControlName="icon" p-label="Icon" [p-options]="iconOptions" />
        <po-select class="po-md-6 po-lg-3" formControlName="type" p-label="Type" [p-options]="typeOptions" />
        <po-switch class="po-md-3 po-lg-2" formControlName="disabled" p-label="Disabled" />
        <po-switch class="po-md-3 po-lg-2" formControlName="visible" p-label="Visible" />
      </form>
    </po-widget>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-progress-labs/sample-po-progress-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoProgressStatus,
  PoRadioGroupOption,
  PoProgressSize,
  PoProgressAction,
  PoSelectOption,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-progress-labs',
  templateUrl: './sample-po-progress-labs.component.html',
  standalone: false
})
export class SamplePoProgressLabsComponent implements OnInit {
  event: any;
  info: string;
  infoIcon: string;
  disabledCancel: boolean;
  indeterminate: boolean;
  showPercentage: boolean;
  status: PoProgressStatus = PoProgressStatus.Default;
  size: PoProgressSize = PoProgressSize.large;
  text: string;
  value: number;
  action: PoProgressAction;
  actionForm: FormGroup;
  showAction: false;
  properties: Array<string>;
  sizeActions: string;

  infoIconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-warning-circle', value: 'an an-warning-circle' },
    { label: 'an an-check', value: 'an an-check' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'an an-cloud-slash', value: 'an an-cloud-slash' }
  ];

  statusOptions: Array<PoRadioGroupOption> = [
    { label: 'Default', value: PoProgressStatus.Default },
    { label: 'Success', value: PoProgressStatus.Success },
    { label: 'Error', value: PoProgressStatus.Error }
  ];

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'Medium', value: PoProgressSize.medium },
    { label: 'Large', value: PoProgressSize.large }
  ];

  sizeActionsOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-download', label: 'an an-download' },
    { value: 'an an-Server', label: 'an an-Server' },
    { value: 'an an-upload', label: 'an an-upload' },
    { value: 'an an-share', label: 'an an-share' }
  ];

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabledCancel', label: 'Disabled cancel' },
    { value: 'indeterminate', label: 'Indeterminate' },
    { value: 'showPercentage', label: 'Show percentage' }
  ];

  constructor(
    private fb: FormBuilder,
    private poNotification: PoNotificationService
  ) {
    this.initializeActionForm();
  }

  initializeActionForm() {
    this.actionForm = this.fb.group({
      label: [''],
      icon: [''],
      type: ['default'],
      visible: [true],
      disabled: [false]
    });
  }

  ngOnInit() {
    this.restore();
    this.actionForm.valueChanges.subscribe(formValue => {
      this.updateAction(formValue);
    });
  }

  updateAction(formValue: any) {
    this.action = formValue;
  }

  onEvent(event) {
    this.event = event;
  }

  restore() {
    this.event = undefined;
    this.info = undefined;
    this.infoIcon = undefined;
    this.disabledCancel = false;
    this.indeterminate = false;
    this.showPercentage = false;
    this.status = PoProgressStatus.Default;
    this.text = undefined;
    this.value = undefined;
    this.size = PoProgressSize.large;
    this.actionForm.reset({ type: 'default', visible: true });
    this.action = { label: '', type: 'default' };
    this.showAction = false;
    this.properties = [];
    this.sizeActions = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-progress-labs"),t(),a(23,"hr")),r&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",D(4,De,i.hideSampleCodeTabs)))},dependencies:[T,C,x,P,ge],encapsulation:2})}return o})();var Ee=(()=>{class o{buttonDisabled;progressBarValue=0;publication=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.`;get progressBarInfo(){return`${this.progressBarValue}/100`}finishEdition(){this.buttonDisabled=!0}updatePublication(){let l=setInterval(()=>{this.progressBarValue>=100?(clearInterval(l),this.finishEdition()):this.progressBarValue++},20)}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-progress-publication"]],standalone:!1,decls:7,vars:4,consts:[["p-title","Edit publication"],[1,"po-row"],[1,"po-md-9",3,"ngModelChange","ngModel"],[1,"po-md-9"],["p-text","Loading update",1,"po-md-9",3,"p-value","p-show-percentage"],["p-label","Update publication",3,"p-click","p-disabled"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"div",1)(2,"po-rich-text",2),h("ngModelChange",function(c){return f(i.publication,c)||(i.publication=c),c}),t(),a(3,"po-divider",3)(4,"po-progress",4),t(),n(5,"div",1)(6,"po-button",5),E("p-click",function(){return i.updatePublication()}),t()()()),r&2&&(p(2),S("ngModel",i.publication),p(2),m("p-value",i.progressBarValue)("p-show-percentage",!0),p(2),m("p-disabled",i.buttonDisabled))},dependencies:[B,O,F,ee,le,L,k],encapsulation:2})}return o})();var ke=o=>({"docs-sample-code-tabs":o}),Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-progress-publication-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Progress - Publication"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-progress-publication/sample-po-progress-publication.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default p-title="Edit publication">
  <div class="po-row">
    <po-rich-text class="po-md-9" [(ngModel)]="publication"></po-rich-text>

    <po-divider class="po-md-9"></po-divider>

    <po-progress class="po-md-9" p-text="Loading update" [p-value]="progressBarValue" [p-show-percentage]="true">
    </po-progress>
  </div>

  <div class="po-row">
    <po-button p-label="Update publication" [p-disabled]="buttonDisabled" (p-click)="updatePublication()"> </po-button>
  </div>
</po-page-default>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-progress-publication/sample-po-progress-publication.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-progress-publication',
  templateUrl: './sample-po-progress-publication.component.html',
  standalone: false
})
export class SamplePoProgressPublicationComponent {
  buttonDisabled: boolean;
  progressBarValue = 0;
  publication: string = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.\`;

  get progressBarInfo() {
    return \`\${this.progressBarValue}/100\`;
  }

  finishEdition() {
    this.buttonDisabled = true;
  }

  updatePublication() {
    const interval = setInterval(() => {
      if (this.progressBarValue >= 100) {
        clearInterval(interval);

        this.finishEdition();
      } else {
        this.progressBarValue++;
      }
    }, 20);
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-progress-publication"),t(),a(23,"hr")),r&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",D(4,ke,i.hideSampleCodeTabs)))},dependencies:[T,C,x,P,Ee],encapsulation:2})}return o})();var fe=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-progress-doc"]],standalone:!1,decls:749,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoProgressAction"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoProgressStatus"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","https://po-ui.io/icons"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoProgressModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente "),n(7,"code"),e(8,"po-progress"),t(),e(9,"."),t()(),n(10,"h3",3),e(11,"Componente"),t(),n(12,"h4",4)(13,"code",5),e(14,"PoProgressComponent"),t()(),n(15,"div",2)(16,"p"),e(17,"Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa."),t(),n(18,"p"),e(19,"Este componente pode ser utilizado no "),n(20,"em"),e(21,"upload"),t(),e(22," de arquivos, uma atualiza\xE7\xE3o no sistema ou o processamento de uma imagem."),t(),n(23,"h4"),e(24,"Tokens customiz\xE1veis"),t(),n(25,"p"),e(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(27,"blockquote")(28,"p"),e(29,"Para maiores informa\xE7\xF5es, acesse o guia "),n(30,"a",6),e(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(32,"."),t()(),n(33,"table")(34,"thead")(35,"tr")(36,"th"),e(37,"Propriedade"),t(),n(38,"th"),e(39,"Descri\xE7\xE3o"),t(),n(40,"th"),e(41,"Valor Padr\xE3o"),t()()(),n(42,"tbody")(43,"tr")(44,"td")(45,"strong"),e(46,"Default Values"),t()(),a(47,"td")(48,"td"),t(),n(49,"tr")(50,"td")(51,"code"),e(52,"--font-family"),t()(),n(53,"td"),e(54,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(55,"td")(56,"code"),e(57,"var(--font-family-theme)"),t()()(),n(58,"tr")(59,"td")(60,"code"),e(61,"--text-color"),t()(),n(62,"td"),e(63,"Cor do texto"),t(),n(64,"td")(65,"code"),e(66,"var(--color-neutral-dark-90)"),t()()(),n(67,"tr")(68,"td")(69,"strong"),e(70,"Error"),t()(),a(71,"td")(72,"td"),t(),n(73,"tr")(74,"td")(75,"code"),e(76,"--text-color-error"),t()(),n(77,"td"),e(78,"Cor do texto no estado error"),t(),n(79,"td")(80,"code"),e(81,"var(--color-feedback-negative-dark)"),t()()(),n(82,"tr")(83,"td")(84,"code"),e(85,"--color-icon-error"),t()(),n(86,"td"),e(87,"Cor do \xEDcone no estado error"),t(),n(88,"td")(89,"code"),e(90,"var(--color-feedback-negative-dark)"),t()()(),n(91,"tr")(92,"td")(93,"strong"),e(94,"po-progress-bar"),t()(),a(95,"td")(96,"td"),t(),n(97,"tr")(98,"td")(99,"code"),e(100,"--background-color-tray"),t()(),n(101,"td"),e(102,"Cor do background"),t(),n(103,"td")(104,"code"),e(105,"var(--color-brand-01-lightest)"),t()()(),n(106,"tr")(107,"td")(108,"code"),e(109,"--background-color-indicator"),t()(),n(110,"td"),e(111,"Cor do background do indicador"),t(),n(112,"td")(113,"code"),e(114,"var(--color-action-default)"),t()()()()()(),n(115,"div",7)(116,"h4",8),e(117,"Seletor"),t(),n(118,"pre",9),e(119,`<po-progress
    (p-cancel)="EventEmitter"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-disabled-cancel="boolean"
    p-indeterminate="boolean"
    p-info="string"
    p-info-icon="string | TemplateRef<void>"
    (p-retry)="EventEmitter"
    p-show-percentage="boolean"
    p-size="string"
    p-size-actions="string"
    p-status="PoProgressStatus"
    p-text="string"
    p-value="number" >
</po-progress>
`),t()(),n(120,"h4",10),e(121,"Propriedades"),t(),n(122,"table",11)(123,"tr",12)(124,"th",13),e(125,"Nome"),t(),n(126,"th",13),e(127,"Tipo"),t(),n(128,"th",13),e(129,"Padr\xE3o"),t(),n(130,"th",13),e(131,"Descri\xE7\xE3o"),t()(),n(132,"tr",14)(133,"td",15)(134,"div",16)(135,"span",17),e(136," (p-cancel)"),a(137,"br"),t()()(),n(138,"td",18)(139,"code",19),e(140,"EventEmitter"),t()(),n(141,"td",20),e(142,"-"),t(),n(143,"td",21)(144,"em")(145,"strong"),e(146,"(opcional)"),t()(),n(147,"p"),e(148,'Evento que ser\xE1 disparado ao clicar no \xEDcone de cancelamento ("x") na parte inferior da barra de progresso.'),t(),n(149,"p"),e(150,"Ao ser disparado, a fun\xE7\xE3o receber\xE1 como par\xE2metro o status atual da barra de progresso."),t(),n(151,"blockquote")(152,"p"),e(153,"Se nenhuma fun\xE7\xE3o for passada para o evento ou a barra de progresso estiver com o status "),n(154,"code"),e(155,"PoProgressStatus.Success"),t(),e(156,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),t()()()(),n(157,"tr",14)(158,"td",15)(159,"div",22)(160,"span",23),e(161," p-custom-action"),a(162,"br"),t()()(),n(163,"td",18)(164,"code",24),e(165,"PoProgressAction"),t()(),n(166,"td",20),e(167,"-"),t(),n(168,"td",21)(169,"em")(170,"strong"),e(171,"(opcional)"),t()(),n(172,"p"),e(173,"Permite definir uma a\xE7\xE3o personalizada no componente "),n(174,"code"),e(175,"po-progress"),t(),e(176,`, exibindo um bot\xE3o no canto inferior direito
da barra de progresso. A a\xE7\xE3o deve implementar a interface `),n(177,"strong"),e(178,"PoProgressAction"),t(),e(179,", possibilitando configurar:"),t(),n(180,"ul")(181,"li")(182,"strong")(183,"code"),e(184,"label"),t()(),e(185,": Texto exibido no bot\xE3o (opcional)."),t(),n(186,"li")(187,"strong")(188,"code"),e(189,"icon"),t()(),e(190,": \xCDcone exibido no bot\xE3o (opcional)."),t(),n(191,"li")(192,"strong")(193,"code"),e(194,"type"),t()(),e(195,": Tipo do bot\xE3o ("),n(196,"code"),e(197,"default"),t(),e(198," ou "),n(199,"code"),e(200,"danger"),t(),e(201,") para indicar a inten\xE7\xE3o da a\xE7\xE3o (opcional)."),t(),n(202,"li")(203,"strong")(204,"code"),e(205,"disabled"),t()(),e(206,": Indica se o bot\xE3o deve estar desabilitado (opcional)."),t(),n(207,"li")(208,"strong")(209,"code"),e(210,"visible"),t()(),e(211,": Determina se o bot\xE3o ser\xE1 exibido. Pode ser um valor booleano ou uma fun\xE7\xE3o que retorna um booleano (opcional)."),t()()()(),n(212,"tr",14)(213,"td",15)(214,"div",16)(215,"span",17),e(216," (p-custom-action-click)"),a(217,"br"),t()()(),n(218,"td",18)(219,"code",19),e(220,"EventEmitter"),t()(),n(221,"td",20),e(222,"-"),t(),n(223,"td",21)(224,"em")(225,"strong"),e(226,"(opcional)"),t()(),n(227,"p"),e(228,"Evento emitido quando o bot\xE3o definido em "),n(229,"code"),e(230,"p-custom-action"),t(),e(231,` \xE9 clicado. Este evento retorna informa\xE7\xF5es
relacionadas \xE0 barra de progresso ou ao arquivo/processo associado, permitindo executar a\xE7\xF5es espec\xEDficas.`),t()()(),n(232,"tr",14)(233,"td",15)(234,"div",22)(235,"span",23),e(236," p-disabled-cancel"),a(237,"br"),t()()(),n(238,"td",18)(239,"code",25),e(240,"boolean"),t()(),n(241,"td",20)(242,"p")(243,"code"),e(244,"false"),t()()(),n(245,"td",21)(246,"em")(247,"strong"),e(248,"(opcional)"),t()(),n(249,"p"),e(250,"Desabilita bot\xE3o de cancelamento na parte inferior da barra de progresso."),t(),n(251,"blockquote")(252,"p"),e(253,"Se nenhuma fun\xE7\xE3o for passada para o evento "),n(254,"code"),e(255,"(p-cancel)"),t(),e(256," ou a barra de progresso estiver com o status "),n(257,"code"),e(258,"PoProgressStatus.Success"),t(),e(259,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),t()()()(),n(260,"tr",14)(261,"td",15)(262,"div",22)(263,"span",23),e(264," p-indeterminate"),a(265,"br"),t()()(),n(266,"td",18)(267,"code",25),e(268,"boolean"),t()(),n(269,"td",20)(270,"p")(271,"code"),e(272,"false"),t()()(),n(273,"td",21)(274,"em")(275,"strong"),e(276,"(opcional)"),t()(),n(277,"p"),e(278,"Habilita o modo indeterminado na barra de progresso, que mostra uma anima\xE7\xE3o fixa sem um valor estabelecido."),t(),n(279,"p"),e(280,"Esta op\xE7\xE3o pode ser utilizada quando n\xE3o souber quanto tempo levar\xE1 para que um processo seja conclu\xEDdo."),t(),n(281,"blockquote")(282,"p"),e(283,"Caso esta propriedade e a "),n(284,"code"),e(285,"p-value"),t(),e(286," seja habilitada, a propriedade "),n(287,"code"),e(288,"p-value"),t(),e(289," ser\xE1 ignorada."),t()()()(),n(290,"tr",14)(291,"td",15)(292,"div",22)(293,"span",23),e(294," p-info"),a(295,"br"),t()()(),n(296,"td",18)(297,"code",26),e(298,"string"),t()(),n(299,"td",20),e(300,"-"),t(),n(301,"td",21)(302,"em")(303,"strong"),e(304,"(opcional)"),t()(),n(305,"p"),e(306,"Informa\xE7\xE3o adicional que aparecer\xE1 abaixo da barra de progresso ao lado direito."),t()()(),n(307,"tr",14)(308,"td",15)(309,"div",22)(310,"span",23),e(311," p-info-icon"),a(312,"br"),t()()(),n(313,"td",18)(314,"code",26),e(315,"string "),t(),n(316,"code",27),e(317," TemplateRef<void>"),t()(),n(318,"td",20),e(319,"-"),t(),n(320,"td",21)(321,"em")(322,"strong"),e(323,"(opcional)"),t()(),n(324,"p"),e(325,"\xCDcone que aparecer\xE1 ao lado do texto da propriedade "),n(326,"code"),e(327,"p-info"),t(),e(328,"."),t(),n(329,"p"),e(330,"Exemplo: "),n(331,"code"),e(332,"an an-check"),t(),e(333,"."),t()()(),n(334,"tr",14)(335,"td",15)(336,"div",16)(337,"span",17),e(338," (p-retry)"),a(339,"br"),t()()(),n(340,"td",18)(341,"code",19),e(342,"EventEmitter"),t()(),n(343,"td",20),e(344,"-"),t(),n(345,"td",21)(346,"em")(347,"strong"),e(348,"(opcional)"),t()(),n(349,"p"),e(350,"Evento que ser\xE1 disparado ao clicar no \xEDcone de tentar novamente na parte inferior da barra de progresso."),t(),n(351,"blockquote")(352,"p"),e(353,`o \xEDcone ser\xE1 exibido apenas se informar uma fun\xE7\xE3o neste evento e o status da barra de progresso for
`),n(354,"code"),e(355,"PoProgressStatus.Error"),t(),e(356,"."),t()()()(),n(357,"tr",14)(358,"td",15)(359,"div",22)(360,"span",23),e(361," p-show-percentage"),a(362,"br"),t()()(),n(363,"td",18)(364,"code",25),e(365,"boolean"),t()(),n(366,"td",20)(367,"p")(368,"code"),e(369,"false"),t()()(),n(370,"td",21)(371,"em")(372,"strong"),e(373,"(opcional)"),t()(),n(374,"p"),e(375,"Ativa a exibi\xE7\xE3o da porcentagem atual da barra de progresso."),t()()(),n(376,"tr",14)(377,"td",15)(378,"div",22)(379,"span",23),e(380," p-size"),a(381,"br"),t()()(),n(382,"td",18)(383,"code",26),e(384,"string"),t()(),n(385,"td",20)(386,"p")(387,"code"),e(388,"large"),t()()(),n(389,"td",21)(390,"em")(391,"strong"),e(392,"(opcional)"),t()(),n(393,"p"),e(394,"Define a expessura da barra de progresso."),t(),n(395,"p"),e(396,"Valores v\xE1lidos:"),t(),n(397,"ul")(398,"li"),e(399,"medium"),t(),n(400,"li"),e(401,"large"),t()()()(),n(402,"tr",14)(403,"td",15)(404,"div",22)(405,"span",23),e(406," p-size-actions"),a(407,"br"),t()()(),n(408,"td",18)(409,"code",26),e(410,"string"),t()(),n(411,"td",20)(412,"p")(413,"code"),e(414,"medium"),t()()(),n(415,"td",21)(416,"em")(417,"strong"),e(418,"(opcional)"),t()(),n(419,"p"),e(420,"Define o tamanho das a\xE7\xF5es no componente com excess\xE3o da barra de progresso que pode ser ajustada atrav\xE9s da propriedade "),n(421,"code"),e(422,"p-size"),t(),e(423,":"),t(),n(424,"ul")(425,"li")(426,"code"),e(427,"small"),t(),e(428,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(429,"li")(430,"code"),e(431,"medium"),t(),e(432,": aplica a medida medium de cada componente."),t()(),n(433,"blockquote")(434,"p"),e(435,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(436,"code"),e(437,"medium"),t(),e(438,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(439,"a",28),e(440,"po-theme"),t(),e(441,"."),t()()()(),n(442,"tr",14)(443,"td",15)(444,"div",22)(445,"span",23),e(446," p-status"),a(447,"br"),t()()(),n(448,"td",18)(449,"code",29),e(450,"PoProgressStatus"),t()(),n(451,"td",20)(452,"p")(453,"code"),e(454,"PoProgressStatus.Default"),t()()(),n(455,"td",21)(456,"em")(457,"strong"),e(458,"(opcional)"),t()(),n(459,"p"),e(460,`Status da barra de progresso que indicar\xE1 visualmente ao usu\xE1rio
o andamento, por exemplo, se a mesma foi conclu\xEDda com sucesso.`),t()()(),n(461,"tr",14)(462,"td",15)(463,"div",22)(464,"span",23),e(465," p-text"),a(466,"br"),t()()(),n(467,"td",18)(468,"code",26),e(469,"string"),t()(),n(470,"td",20),e(471,"-"),t(),n(472,"td",21)(473,"em")(474,"strong"),e(475,"(opcional)"),t()(),n(476,"p"),e(477,"Texto principal que aparecer\xE1 abaixo da barra de progresso no lado esquerdo."),t()()(),n(478,"tr",14)(479,"td",15)(480,"div",22)(481,"span",23),e(482," p-value"),a(483,"br"),t()()(),n(484,"td",18)(485,"code",30),e(486,"number"),t()(),n(487,"td",20)(488,"p")(489,"code"),e(490,"0"),t()()(),n(491,"td",21)(492,"em")(493,"strong"),e(494,"(opcional)"),t()(),n(495,"p"),e(496,"Valor que representar\xE1 o progresso."),t(),n(497,"blockquote")(498,"p"),e(499,"Os valores aceitos s\xE3o n\xFAmeros inteiros de "),n(500,"code"),e(501,"0"),t(),e(502," \xE0 "),n(503,"code"),e(504,"100"),t(),e(505,"."),t()()()()(),n(506,"h3"),e(507,"Interfaces"),t(),n(508,"h4",31)(509,"code",5),e(510,"PoProgressAction"),t()(),n(511,"div",2)(512,"p"),e(513,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),t()(),n(514,"h4",10),e(515,"Propriedades"),t(),n(516,"table",11)(517,"tr",12)(518,"th",13),e(519,"Nome"),t(),n(520,"th",13),e(521,"Tipo"),t(),n(522,"th",13),e(523,"Descri\xE7\xE3o"),t()(),n(524,"tr",14)(525,"td",15)(526,"div",22)(527,"span",23),e(528," disabled"),a(529,"br"),t()()(),n(530,"td",18)(531,"code",25),e(532,"boolean "),t(),n(533,"code",32),e(534," Function"),t()(),n(535,"td",21)(536,"em")(537,"strong"),e(538,"(opcional)"),t()(),n(539,"p"),e(540,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),n(541,"p"),e(542,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),n(543,"tr",14)(544,"td",15)(545,"div",22)(546,"span",23),e(547," icon"),a(548,"br"),t()()(),n(549,"td",18)(550,"code",26),e(551,"string "),t(),n(552,"code",27),e(553," TemplateRef<void>"),t()(),n(554,"td",21)(555,"em")(556,"strong"),e(557,"(opcional)"),t()(),n(558,"p"),e(559,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),n(560,"p"),e(561,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(562,"a",33),e(563,"Biblioteca de \xEDcones"),t(),e(564,". conforme exemplo abaixo:"),t(),n(565,"pre")(566,"code"),e(567,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),t()(),n(568,"p"),e(569,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),n(570,"pre")(571,"code"),e(572,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),t()(),n(573,"p"),e(574,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(575,"code"),e(576,"TemplateRef"),t(),e(577,`, conforme exemplo abaixo:
component.html:`),t(),n(578,"pre")(579,"code"),e(580,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),t()(),n(581,"p"),e(582,"component.ts:"),t(),n(583,"pre")(584,"code"),e(585,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),t()()()(),n(586,"tr",14)(587,"td",15)(588,"div",22)(589,"span",23),e(590," label"),a(591,"br"),t()()(),n(592,"td",18)(593,"code",26),e(594,"string"),t()(),n(595,"td",21)(596,"em")(597,"strong"),e(598,"(opcional)"),t()(),n(599,"p"),e(600,"R\xF3tulo da a\xE7\xE3o."),t()()(),n(601,"tr",14)(602,"td",15)(603,"div",22)(604,"span",23),e(605," type"),a(606,"br"),t()()(),n(607,"td",18)(608,"code",26),e(609,"string"),t()(),n(610,"td",21)(611,"em")(612,"strong"),e(613,"(opcional)"),t()(),n(614,"p"),e(615,"Define a cor do item, sendo "),n(616,"code"),e(617,"default"),t(),e(618," o padr\xE3o."),t(),n(619,"p"),e(620,"Valores v\xE1lidos:"),t(),n(621,"ul")(622,"li")(623,"code"),e(624,"default"),t()(),n(625,"li")(626,"code"),e(627,"danger"),t(),e(628," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),n(629,"tr",14)(630,"td",15)(631,"div",22)(632,"span",23),e(633," visible"),a(634,"br"),t()()(),n(635,"td",18)(636,"code",25),e(637,"boolean "),t(),n(638,"code",32),e(639," Function"),t()(),n(640,"td",21)(641,"em")(642,"strong"),e(643,"(opcional)"),t()(),n(644,"p"),e(645,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),n(646,"blockquote")(647,"p"),e(648,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),n(649,"p"),e(650,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),n(651,"ul")(652,"li")(653,"p"),e(654,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),n(655,"li")(656,"p"),e(657,"Informar diretamente um valor booleano."),t()()()()()(),n(658,"h3"),e(659,"Enums"),t(),n(660,"h4",4)(661,"code",5),e(662,"PoProgressSize"),t()(),n(663,"div",2)(664,"p"),e(665,"Enum para configurar a expessura ("),n(666,"code"),e(667,"p-size"),t(),e(668,") da barra de progresso do componente."),t()(),n(669,"h4",10),e(670,"Propriedades"),t(),n(671,"table",11)(672,"tr",12)(673,"th",13),e(674,"Nome"),t(),n(675,"th",13),e(676,"Descri\xE7\xE3o"),t()(),n(677,"tr",14)(678,"td",15)(679,"div",22)(680,"span",23),e(681," medium"),a(682,"br"),t()()(),n(683,"td",21)(684,"p"),e(685,"Tamanho m\xE9dio com 4px."),t()()(),n(686,"tr",14)(687,"td",15)(688,"div",22)(689,"span",23),e(690," large"),a(691,"br"),t()()(),n(692,"td",21)(693,"p"),e(694,"Tamanho grande com 8px."),t()()()(),n(695,"h4",4)(696,"code",5),e(697,"PoProgressStatus"),t()(),n(698,"div",2)(699,"p")(700,"em"),e(701,"Enum"),t(),n(702,"code"),e(703,"PoProgressStatus"),t(),e(704," para os status de barra de progresso."),t()(),n(705,"h4",10),e(706,"Propriedades"),t(),n(707,"table",11)(708,"tr",12)(709,"th",13),e(710,"Nome"),t(),n(711,"th",13),e(712,"Descri\xE7\xE3o"),t()(),n(713,"tr",14)(714,"td",15)(715,"div",22)(716,"span",23),e(717," Default"),a(718,"br"),t()()(),n(719,"td",21)(720,"p"),e(721,"Define o status "),n(722,"code"),e(723,"default"),t(),e(724," para a barra de progresso."),t()()(),n(725,"tr",14)(726,"td",15)(727,"div",22)(728,"span",23),e(729," Error"),a(730,"br"),t()()(),n(731,"td",21)(732,"p"),e(733,"Define o status de "),n(734,"code"),e(735,"error"),t(),e(736," para a barra de progresso."),t()()(),n(737,"tr",14)(738,"td",15)(739,"div",22)(740,"span",23),e(741," Success"),a(742,"br"),t()()(),n(743,"td",21)(744,"p"),e(745,"Define o status de "),n(746,"code"),e(747,"success"),t(),e(748," para a barra de progresso."),t()()()()())},dependencies:[C],encapsulation:2})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||o)(y(Z),y($))};static \u0275cmp=u({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Progress",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-progress-doc"),t(),n(4,"po-tab",3),E("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-progress-basic-view")(6,"sample-po-progress-labs-view")(7,"sample-po-progress-publication-view"),t()()()),r&2&&(m("p-actions",i.actions),p(2),m("p-active",i.activeTab==="doc"),p(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[L,x,P,ue,be,Se,fe],encapsulation:2})}return o})();var Ve=[{path:"",component:he}],ve=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=I({type:o});static \u0275inj=V({imports:[q.forChild(Ve),q]})}return o})();var at=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=I({type:o});static \u0275inj=V({imports:[de,ve]})}return o})();export{at as DocPoProgressModule};
