import{o as D,p as re}from"./chunk-MMZVQUBQ.js";import{Ab as y,Db as le,F as ee,Ga as oe,Ra as ie,T as L,ga as T,ha as te,ja as ne,nb as ae,q as $,zb as x}from"./chunk-522XRIZO.js";import{Ac as J,Ba as _,Bc as K,Fa as t,Ga as e,Ha as l,Ia as z,Ja as q,La as R,M as A,Ma as g,Na as W,Oc as Q,Qc as Z,Sc as N,T as u,U as b,Xa as O,Ya as n,_a as S,ab as E,bb as h,cb as w,eb as H,fb as C,ha as d,ia as P,oa as c,pa as F,qb as j,ua as B,vb as M,xb as U,xc as G,ya as s,yc as Y,zc as X}from"./chunk-WFKG4FNY.js";var Ee=()=>({label:"How to install PO",url:"/guides/how-install"}),he=i=>[i],pe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-dropdown-basic"]],standalone:!1,decls:1,vars:4,consts:[["p-label","PO Dropdown",3,"p-actions"]],template:function(a,o){a&1&&l(0,"po-dropdown",0),a&2&&s("p-actions",C(2,he,H(1,Ee)))},dependencies:[T],encapsulation:2})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),de=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-dropdown-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Dropdown Basic"),e(),t(4,"a",2),g("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="[{ label: 'How to install PO', url: '/guides/how-install' }]">
</po-dropdown>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dropdown-basic',
  templateUrl: './sample-po-dropdown-basic.component.html',
  standalone: false
})
export class SamplePoDropdownBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-dropdown-basic"),e(),l(23,"hr")),a&2&&(d(5),_("po-icon "+o.sampleCodeButtonIcon),d(),S(" ",o.sampleCodeButtonLabel,""),d(),s("ngClass",C(4,ve,o.hideSampleCodeTabs)))},dependencies:[M,D,x,y,pe],encapsulation:2})}return i})();var se=(()=>{class i{poNotification;action;actions;label;properties;size;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertiesOptions=[{value:"disabled",label:"Disabled"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];constructor(r){this.poNotification=r}ngOnInit(){this.restore()}addAction(r){let a=Object.assign({},r);a.action=a.action?this.showAction.bind(this,a.action):void 0,this.actions.push(a),this.restoreActionForm()}restore(){this.actions=[],this.label="PO Dropdown",this.size="medium",this.properties=[],this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}showAction(r){this.poNotification.success(`Action clicked: ${r}`)}static \u0275fac=function(a){return new(a||i)(P(L))};static \u0275cmp=c({type:i,selectors:[["sample-po-dropdown-labs"]],standalone:!1,decls:22,vars:19,consts:[["formAction","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-offset-xl-5","po-offset-lg-5",3,"p-actions","p-disabled","p-label","p-size"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let m=R();t(0,"div",2),l(1,"po-dropdown",3),e(),l(2,"hr"),t(3,"form",null,0)(5,"po-input",4),w("ngModelChange",function(p){return u(m),h(o.action.action,p)||(o.action.action=p),b(p)}),e(),t(6,"po-input",5),w("ngModelChange",function(p){return u(m),h(o.action.label,p)||(o.action.label=p),b(p)}),e(),t(7,"po-input",6),w("ngModelChange",function(p){return u(m),h(o.action.url,p)||(o.action.url=p),b(p)}),e(),t(8,"po-select",7),w("ngModelChange",function(p){return u(m),h(o.action.type,p)||(o.action.type=p),b(p)}),e(),t(9,"po-select",8),w("ngModelChange",function(p){return u(m),h(o.action.icon,p)||(o.action.icon=p),b(p)}),e(),t(10,"po-checkbox-group",9),w("ngModelChange",function(p){return u(m),h(o.action,p)||(o.action=p),b(p)}),e(),t(11,"div",2)(12,"po-button",10),g("p-click",function(){return u(m),b(o.addAction(o.action))}),e()()(),l(13,"hr"),t(14,"form",null,1)(16,"div",2)(17,"po-input",11),w("ngModelChange",function(p){return u(m),h(o.label,p)||(o.label=p),b(p)}),e()(),t(18,"po-checkbox-group",12),w("ngModelChange",function(p){return u(m),h(o.properties,p)||(o.properties=p),b(p)}),e(),t(19,"po-radio-group",13),w("ngModelChange",function(p){return u(m),h(o.size,p)||(o.size=p),b(p)}),e(),t(20,"div",2)(21,"po-button",14),g("p-click",function(){return u(m),b(o.restore())}),e()()()}if(a&2){let m=O(4);d(),s("p-actions",o.actions)("p-disabled",o.properties.includes("disabled"))("p-label",o.label)("p-size",o.size),d(4),E("ngModel",o.action.action),d(),E("ngModel",o.action.label),d(),E("ngModel",o.action.url),d(),E("ngModel",o.action.type),s("p-options",o.typeOptions),d(),E("ngModel",o.action.icon),s("p-options",o.iconOptions),d(),E("ngModel",o.action),s("p-options",o.actionOptions),d(2),s("p-disabled",m.form.invalid),d(5),E("ngModel",o.label),d(),E("ngModel",o.properties),s("p-options",o.propertiesOptions),d(),E("ngModel",o.size),s("p-options",o.sizeOptions)}},dependencies:[K,G,Y,J,X,ee,T,te,ne,oe,ie],encapsulation:2})}return i})();var ye=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-dropdown-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Dropdown Labs"),e(),t(4,"a",2),g("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-dropdown
    class="po-offset-xl-5 po-offset-lg-5"
    [p-actions]="actions"
    [p-disabled]="properties.includes('disabled')"
    [p-label]="label"
    [p-size]="size"
  >
  </po-dropdown>
</div>

<hr />

<form #formAction="ngForm">
  <po-input class="po-md-6 po-lg-4" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action">
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required>
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

  <po-select class="po-md-6 po-lg-3" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
  </po-select>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-checkbox-group
    class="po-md-12"
    name="action"
    [(ngModel)]="action"
    p-columns="4"
    p-indeterminate
    p-label="Action properties"
    [p-options]="actionOptions"
  >
  </po-checkbox-group>

  <div class="po-row">
    <po-button
      class="po-md-4 po-lg-2"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label" p-required> </po-input>
  </div>
  <po-checkbox-group
    class="po-md-6"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-md-12 po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoSelectOption,
  PoDropdownAction,
  PoRadioGroupOption,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-labs',
  templateUrl: './sample-po-dropdown-labs.component.html',
  standalone: false
})
export class SamplePoDropdownLabsComponent implements OnInit {
  action: PoDropdownAction;
  actions: Array<PoDropdownAction>;
  label: string;
  properties: Array<string>;
  size: string;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'disabled', label: 'Disabled' }];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoDropdownAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions.push(newAction);

    this.restoreActionForm();
  }

  restore() {
    this.actions = [];
    this.label = 'PO Dropdown';
    this.size = 'medium';
    this.properties = [];
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-dropdown-labs"),e(),l(23,"hr")),a&2&&(d(5),_("po-icon "+o.sampleCodeButtonIcon),d(),S(" ",o.sampleCodeButtonLabel,""),d(),s("ngClass",C(4,ye,o.hideSampleCodeTabs)))},dependencies:[M,D,x,y,se],encapsulation:2})}return i})();function Pe(i,Se){if(i&1&&(z(0),t(1,"div",1),l(2,"po-avatar",4),t(3,"div",5)(4,"span",6),n(5),e(),t(6,"span",7),n(7),e(),t(8,"span",7),n(9),e()()(),t(10,"div",1),l(11,"po-dropdown",8),e(),q()),i&2){let r=W();d(2),s("p-src",r.userAvatar),d(3),S(" ",r.currentFriend.name," "),d(2),S(" ",r.currentFriend.mutualFriends," mutual friends "),d(2),S(" Resides in ",r.currentFriend.reside," "),d(2),s("p-actions",r.answers)}}function _e(i,Se){i&1&&(t(0,"div",1)(1,"span",9),n(2,"Congratulations Totver, no more requests!"),e()())}var ce=(()=>{class i{poNotification;currentFriend;userAvatar="https://lorempixel.com/144/144/";answers=[{label:"Confirm",action:this.notification.bind(this,"added","success")},{label:"Ignore",action:this.notification.bind(this,"ignored","warning")},{label:"Block",action:this.notification.bind(this,"blocked","information")}];newFriends=[{name:"Mr. Dev PO",mutualFriends:"7",reside:"Mountain View, CA"},{name:"Mr. AI PO",mutualFriends:"99+",reside:"New York City, NY"},{name:"Mr. UX PO",mutualFriends:"14",reside:"Los Angeles, CA"}];indexFriend=0;constructor(r){this.poNotification=r}ngOnInit(){this.setCurrentFriend(0)}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(r){this.currentFriend=this.newFriends[r]}static \u0275fac=function(a){return new(a||i)(P(L))};static \u0275cmp=c({type:i,selectors:[["sample-po-dropdown-social-network"]],standalone:!1,decls:5,vars:2,consts:[["noMoreRequest",""],[1,"po-row"],["p-title","Friend Request",1,"po-lg-6"],[4,"ngIf","ngIfElse"],["p-size","lg",1,"po-md-4",3,"p-src"],[1,"po-md-8"],[1,"po-sm-12","po-font-subtitle"],[1,"po-sm-12","po-font-text"],["p-label","Add as friend?",1,"po-lg-8","po-offset-md-4","po-offset-lg-4","po-offset-xl-4",3,"p-actions"],[1,"po-lg-8","po-font-subtitle"]],template:function(a,o){if(a&1&&(t(0,"div",1)(1,"po-widget",2),B(2,Pe,12,5,"ng-container",3)(3,_e,3,0,"ng-template",null,0,j),e()()),a&2){let m=O(4);d(2),s("ngIf",o.currentFriend)("ngIfElse",m)}},dependencies:[U,$,T,le],encapsulation:2})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-dropdown-social-network-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Dropdown - Social Network"),e(),t(4,"a",2),g("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-widget class="po-lg-6" p-title="Friend Request">
    <ng-container *ngIf="currentFriend; else noMoreRequest">
      <div class="po-row">
        <po-avatar class="po-md-4" p-size="lg" [p-src]="userAvatar"> </po-avatar>

        <div class="po-md-8">
          <span class="po-sm-12 po-font-subtitle">
            { { currentFriend.name }}
          </span>

          <span class="po-sm-12 po-font-text"> { { currentFriend.mutualFriends }} mutual friends </span>

          <span class="po-sm-12 po-font-text"> Resides in { { currentFriend.reside }} </span>
        </div>
      </div>

      <div class="po-row">
        <po-dropdown
          class="po-lg-8 po-offset-md-4 po-offset-lg-4 po-offset-xl-4"
          p-label="Add as friend?"
          [p-actions]="answers"
        >
        </po-dropdown>
      </div>
    </ng-container>

    <ng-template #noMoreRequest>
      <div class="po-row">
        <span class="po-lg-8 po-font-subtitle">Congratulations Totver, no more requests!</span>
      </div>
    </ng-template>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-social-network',
  templateUrl: './sample-po-dropdown-social-network.component.html',
  standalone: false
})
export class SamplePoDropdownSocialNetworkComponent implements OnInit {
  currentFriend: object;
  userAvatar: string = 'https://lorempixel.com/144/144/';

  public readonly answers: Array<object> = [
    { label: 'Confirm', action: this.notification.bind(this, 'added', 'success') },
    { label: 'Ignore', action: this.notification.bind(this, 'ignored', 'warning') },
    { label: 'Block', action: this.notification.bind(this, 'blocked', 'information') }
  ];

  public readonly newFriends: Array<object> = [
    { name: 'Mr. Dev PO', mutualFriends: '7', reside: 'Mountain View, CA' },
    { name: 'Mr. AI PO', mutualFriends: '99+', reside: 'New York City, NY' },
    { name: 'Mr. UX PO', mutualFriends: '14', reside: 'Los Angeles, CA' }
  ];

  private indexFriend: number = 0;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.setCurrentFriend(0);
  }

  private notification(action: string, notificationType: string) {
    this.poNotification[notificationType](\`User \${action} successfully!\`);

    this.indexFriend++;
    this.setCurrentFriend(this.indexFriend);
  }

  private setCurrentFriend(index: number) {
    this.currentFriend = this.newFriends[index];
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-dropdown-social-network"),e(),l(23,"hr")),a&2&&(d(5),_("po-icon "+o.sampleCodeButtonIcon),d(),S(" ",o.sampleCodeButtonLabel,""),d(),s("ngClass",C(4,Te,o.hideSampleCodeTabs)))},dependencies:[M,D,x,y,ce],encapsulation:2})}return i})();var be=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-dropdown-doc"]],standalone:!1,decls:525,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/getting-started"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoDropdownAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(a,o){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoDropdownModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente po-dropdown."),e()(),t(7,"h3",3),n(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),n(11,"PoDropdownComponent"),e()(),t(12,"div",2)(13,"p"),n(14,"O componente "),t(15,"code"),n(16,"po-dropdown"),e(),n(17," pode ser utilizado como um agrupador de a\xE7\xF5es e / ou op\xE7\xF5es."),e(),t(18,"blockquote")(19,"p"),n(20,"Caso n\xE3o haja configura\xE7\xE3o de rotas em sua aplica\xE7\xE3o, se faz necess\xE1rio importar o "),t(21,"code"),n(22,"RouterModule"),e(),n(23,`
no m\xF3dulo principal para o correto funcionamento deste componente:`),e()(),t(24,"pre")(25,"code"),n(26,`import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ...
    RouterModule.forRoot([]),
    PoModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
`),e()(),t(27,"blockquote")(28,"p"),n(29,`Para maiores d\xFAvidas referente \xE0 configura\xE7\xE3o de rotas, acesse em nosso portal /Guias /Come\xE7ando
`),t(30,"a",6),n(31,"/Configurando as rotas do po-menu"),e(),n(32,"."),e()(),t(33,"h4"),n(34,"Tokens customiz\xE1veis"),e(),t(35,"p"),n(36,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(37,"blockquote")(38,"p"),n(39,"Para maiores informa\xE7\xF5es, acesse o guia "),t(40,"a",7),n(41,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(42,"."),e()(),t(43,"table")(44,"thead")(45,"tr")(46,"th"),n(47,"Propriedade"),e(),t(48,"th"),n(49,"Descri\xE7\xE3o"),e(),t(50,"th"),n(51,"Valor Padr\xE3o"),e()()(),t(52,"tbody")(53,"tr")(54,"td")(55,"strong"),n(56,"Default Values"),e()(),l(57,"td")(58,"td"),e(),t(59,"tr")(60,"td")(61,"code"),n(62,"--font-family"),e()(),t(63,"td"),n(64,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(65,"td")(66,"code"),n(67,"var(--font-family-theme)"),e()()(),t(68,"tr")(69,"td")(70,"code"),n(71,"--font-size"),e()(),t(72,"td"),n(73,"Tamanho da fonte"),e(),t(74,"td")(75,"code"),n(76,"var(--font-size-default)"),e()()(),t(77,"tr")(78,"td")(79,"code"),n(80,"--font-weight"),e()(),t(81,"td"),n(82,"Peso da fonte"),e(),t(83,"td")(84,"code"),n(85,"var(--font-weight-bold)"),e()()(),t(86,"tr")(87,"td")(88,"code"),n(89,"--line-height"),e()(),t(90,"td"),n(91,"Tamanho da label"),e(),t(92,"td")(93,"code"),n(94,"var(--line-height-none)"),e()()(),t(95,"tr")(96,"td")(97,"code"),n(98,"--color"),e()(),t(99,"td"),n(100,"Cor principal do dropdown"),e(),t(101,"td")(102,"code"),n(103,"var(--color-action-default)"),e()()(),t(104,"tr")(105,"td")(106,"code"),n(107,"--border-radius"),e()(),t(108,"td"),n(109,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(110,"td")(111,"code"),n(112,"var(--border-radius-md)"),e()()(),t(113,"tr")(114,"td")(115,"code"),n(116,"--border-width"),e()(),t(117,"td"),n(118,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),e(),t(119,"td")(120,"code"),n(121,"var(--border-width-md)"),e()()(),t(122,"tr")(123,"td")(124,"code"),n(125,"--padding"),e()(),t(126,"td"),n(127,"Preenchimento"),e(),t(128,"td")(129,"code"),n(130,"0 1em"),e()()(),t(131,"tr")(132,"td")(133,"strong"),n(134,"Hover"),e()(),l(135,"td")(136,"td"),e(),t(137,"tr")(138,"td")(139,"code"),n(140,"--color-hover"),e()(),t(141,"td"),n(142,"Cor principal no estado hover"),e(),t(143,"td")(144,"code"),n(145,"var(--color-brand-01-darkest)"),e()()(),t(146,"tr")(147,"td")(148,"code"),n(149,"--background-hover"),e()(),t(150,"td"),n(151,"Cor de background no estado hover"),e(),t(152,"td")(153,"code"),n(154,"var(--color-brand-01-lighter)"),e()()(),t(155,"tr")(156,"td")(157,"strong"),n(158,"Focused"),e()(),l(159,"td")(160,"td"),e(),t(161,"tr")(162,"td")(163,"code"),n(164,"--outline-color-focused"),e(),n(165," \xA0"),e(),t(166,"td"),n(167,"Cor do outline do estado de focus"),e(),t(168,"td")(169,"code"),n(170,"var(--color-action-focus)"),e()()(),t(171,"tr")(172,"td")(173,"strong"),n(174,"Pressed"),e()(),l(175,"td")(176,"td"),e(),t(177,"tr")(178,"td")(179,"code"),n(180,"--background-pressed"),e(),n(181," \xA0"),e(),t(182,"td"),n(183,"Cor de background no estado de pressionado\xA0"),e(),t(184,"td")(185,"code"),n(186,"var(--color-brand-01-light)"),e()()(),t(187,"tr")(188,"td")(189,"strong"),n(190,"Disabled"),e()(),l(191,"td")(192,"td"),e(),t(193,"tr")(194,"td")(195,"code"),n(196,"--color-disabled"),e()(),t(197,"td"),n(198,"Cor principal no estado disabled"),e(),t(199,"td")(200,"code"),n(201,"var(--color-action-disabled)"),e()()()()()(),t(202,"div",8)(203,"h4",9),n(204,"Seletor"),e(),t(205,"pre",10),n(206,`<po-dropdown
    p-actions="PoDropdownAction[]"
    p-disabled="boolean"
    p-label="string"
    p-size="string" >
</po-dropdown>
`),e()(),t(207,"h4",11),n(208,"Propriedades"),e(),t(209,"table",12)(210,"tr",13)(211,"th",14),n(212,"Nome"),e(),t(213,"th",14),n(214,"Tipo"),e(),t(215,"th",14),n(216,"Padr\xE3o"),e(),t(217,"th",14),n(218,"Descri\xE7\xE3o"),e()(),t(219,"tr",15)(220,"td",16)(221,"div",17)(222,"span",18),n(223," p-actions"),l(224,"br"),e()()(),t(225,"td",19)(226,"code",20),n(227,"PoDropdownAction[]"),e()(),t(228,"td",21),n(229,"-"),e(),t(230,"td",22)(231,"p"),n(232,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),e()()(),t(233,"tr",15)(234,"td",16)(235,"div",17)(236,"span",18),n(237," p-disabled"),l(238,"br"),e()()(),t(239,"td",19)(240,"code",23),n(241,"boolean"),e()(),t(242,"td",21)(243,"p")(244,"code"),n(245,"false"),e()()(),t(246,"td",22)(247,"em")(248,"strong"),n(249,"(opcional)"),e()(),t(250,"p"),n(251,"Desabilita o campo."),e()()(),t(252,"tr",15)(253,"td",16)(254,"div",17)(255,"span",18),n(256," p-label"),l(257,"br"),e()()(),t(258,"td",19)(259,"code",24),n(260,"string"),e()(),t(261,"td",21),n(262,"-"),e(),t(263,"td",22)(264,"p"),n(265,"Adiciona um r\xF3tulo ao "),t(266,"code"),n(267,"dropdown"),e(),n(268,"."),e()()(),t(269,"tr",15)(270,"td",16)(271,"div",17)(272,"span",18),n(273," p-size"),l(274,"br"),e()()(),t(275,"td",19)(276,"code",24),n(277,"string"),e()(),t(278,"td",21)(279,"p")(280,"code"),n(281,"medium"),e()()(),t(282,"td",22)(283,"em")(284,"strong"),n(285,"(opcional)"),e()(),t(286,"p"),n(287,"Define o tamanho do componente:"),e(),t(288,"ul")(289,"li")(290,"code"),n(291,"small"),e(),n(292,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(293,"li")(294,"code"),n(295,"medium"),e(),n(296,": altura do button como 44px."),e()(),t(297,"blockquote")(298,"p"),n(299,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(300,"code"),n(301,"medium"),e(),n(302,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(303,"a",25),n(304,"po-theme"),e(),n(305,"."),e()()()()(),t(306,"h3"),n(307,"Interfaces"),e(),t(308,"h4",26)(309,"code",5),n(310,"PoDropdownAction"),e()(),t(311,"div",2)(312,"p"),n(313,"Interface para lista de a\xE7\xF5es do componente. Interface do componente po-dropdown"),e()(),t(314,"h4",11),n(315,"Propriedades"),e(),t(316,"table",12)(317,"tr",13)(318,"th",14),n(319,"Nome"),e(),t(320,"th",14),n(321,"Tipo"),e(),t(322,"th",14),n(323,"Descri\xE7\xE3o"),e()(),t(324,"tr",15)(325,"td",16)(326,"div",17)(327,"span",18),n(328," action"),l(329,"br"),e()()(),t(330,"td",19)(331,"code",27),n(332,"Function"),e()(),t(333,"td",22)(334,"em")(335,"strong"),n(336,"(opcional)"),e()(),t(337,"p"),n(338,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),e(),t(339,"blockquote")(340,"p"),n(341,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),t(342,"em"),n(343,"bind"),e(),n(344,"."),e()(),t(345,"p"),n(346,"Exemplo: "),t(347,"code"),n(348,"action: this.myFunction.bind(this)"),e()()()(),t(349,"tr",15)(350,"td",16)(351,"div",17)(352,"span",18),n(353," disabled"),l(354,"br"),e()()(),t(355,"td",19)(356,"code",23),n(357,"boolean "),e(),t(358,"code",27),n(359," Function"),e()(),t(360,"td",22)(361,"em")(362,"strong"),n(363,"(opcional)"),e()(),t(364,"p"),n(365,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),e(),t(366,"p"),n(367,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),e()()(),t(368,"tr",15)(369,"td",16)(370,"div",17)(371,"span",18),n(372," icon"),l(373,"br"),e()()(),t(374,"td",19)(375,"code",24),n(376,"string "),e(),t(377,"code",28),n(378," TemplateRef<void>"),e()(),t(379,"td",22)(380,"em")(381,"strong"),n(382,"(opcional)"),e()(),t(383,"p"),n(384,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),e(),t(385,"p"),n(386,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(387,"a",29),n(388,"Biblioteca de \xEDcones"),e(),n(389,". conforme exemplo abaixo:"),e(),t(390,"pre")(391,"code"),n(392,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),e()(),t(393,"p"),n(394,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),e(),t(395,"pre")(396,"code"),n(397,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),e()(),t(398,"p"),n(399,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(400,"code"),n(401,"TemplateRef"),e(),n(402,`, conforme exemplo abaixo:
component.html:`),e(),t(403,"pre")(404,"code"),n(405,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),e()(),t(406,"p"),n(407,"component.ts:"),e(),t(408,"pre")(409,"code"),n(410,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),e()()()(),t(411,"tr",15)(412,"td",16)(413,"div",17)(414,"span",18),n(415," label"),l(416,"br"),e()()(),t(417,"td",19)(418,"code",24),n(419,"string"),e()(),t(420,"td",22)(421,"p"),n(422,"R\xF3tulo da a\xE7\xE3o."),e()()(),t(423,"tr",15)(424,"td",16)(425,"div",17)(426,"span",18),n(427," selected"),l(428,"br"),e()()(),t(429,"td",19)(430,"code",23),n(431,"boolean"),e()(),t(432,"td",22)(433,"em")(434,"strong"),n(435,"(opcional)"),e()(),t(436,"p"),n(437,"Define se a a\xE7\xE3o est\xE1 selecionada."),e()()(),t(438,"tr",15)(439,"td",16)(440,"div",17)(441,"span",18),n(442," separator"),l(443,"br"),e()()(),t(444,"td",19)(445,"code",23),n(446,"boolean"),e()(),t(447,"td",22)(448,"em")(449,"strong"),n(450,"(opcional)"),e()(),t(451,"p"),n(452,"Atribui uma linha separadora acima do item."),e()()(),t(453,"tr",15)(454,"td",16)(455,"div",17)(456,"span",18),n(457," type"),l(458,"br"),e()()(),t(459,"td",19)(460,"code",24),n(461,"string"),e()(),t(462,"td",22)(463,"em")(464,"strong"),n(465,"(opcional)"),e()(),t(466,"p"),n(467,"Define a cor do item, sendo "),t(468,"code"),n(469,"default"),e(),n(470," o padr\xE3o."),e(),t(471,"p"),n(472,"Valores v\xE1lidos:"),e(),t(473,"ul")(474,"li")(475,"code"),n(476,"default"),e()(),t(477,"li")(478,"code"),n(479,"danger"),e(),n(480," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),e()()()(),t(481,"tr",15)(482,"td",16)(483,"div",17)(484,"span",18),n(485," url"),l(486,"br"),e()()(),t(487,"td",19)(488,"code",24),n(489,"string"),e()(),t(490,"td",22)(491,"em")(492,"strong"),n(493,"(opcional)"),e()(),t(494,"p"),n(495,"URL utilizada no redirecionamento das p\xE1ginas."),e()()(),t(496,"tr",15)(497,"td",16)(498,"div",17)(499,"span",18),n(500," visible"),l(501,"br"),e()()(),t(502,"td",19)(503,"code",23),n(504,"boolean "),e(),t(505,"code",27),n(506," Function"),e()(),t(507,"td",22)(508,"em")(509,"strong"),n(510,"(opcional)"),e()(),t(511,"p"),n(512,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),e(),t(513,"blockquote")(514,"p"),n(515,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),e()(),t(516,"p"),n(517,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),e(),t(518,"ul")(519,"li")(520,"p"),n(521,"Fun\xE7\xE3o que deve retornar um booleano."),e()(),t(522,"li")(523,"p"),n(524,"Informar diretamente um valor booleano."),e()()()()()()())},dependencies:[D],encapsulation:2})}return i})();var ge=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||i)(P(Q),P(Z))};static \u0275cmp=c({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Dropdown",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return o.changeTab("doc")}),l(3,"sample-po-dropdown-doc"),e(),t(4,"po-tab",3),g("p-click",function(){return o.changeTab("web")}),l(5,"sample-po-dropdown-basic-view")(6,"sample-po-dropdown-labs-view")(7,"sample-po-dropdown-social-network-view"),e()()()),a&2&&(s("p-actions",o.actions),d(2),s("p-active",o.activeTab==="doc"),d(2),s("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[ae,x,y,de,me,ue,be],encapsulation:2})}return i})();var Fe=[{path:"",component:ge}],fe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=F({type:i});static \u0275inj=A({imports:[N.forChild(Fe),N]})}return i})();var ot=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=F({type:i});static \u0275inj=A({imports:[re,fe]})}return i})();export{ot as DocPoDropdownModule};
