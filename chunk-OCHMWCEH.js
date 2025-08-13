import{o as w,p as ee}from"./chunk-MMZVQUBQ.js";import{Ab as v,F as z,Ga as Z,ha as J,ja as K,nb as $,qa as X,ra as D,ta as Y,zb as x}from"./chunk-522XRIZO.js";import{Ac as O,Ba as _,Bc as U,Fa as i,Ga as t,Ha as p,La as y,M as L,Ma as u,Oc as Q,Qc as A,Sc as I,T as s,U as c,Ua as q,Va as H,Wa as R,Xa as M,Ya as e,_a as P,ab as b,bb as f,cb as E,fb as k,ha as r,ia as B,oa as S,pa as W,vb as T,xc as F,ya as h,yc as j,zc as G}from"./chunk-WFKG4FNY.js";var te=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-slide-basic"]],standalone:!1,decls:5,vars:0,consts:[["pageSlide",""],["p-title","Po Page Slide Title"],[1,"po-row"],["p-label","View Page Slide",1,"po-sm-3",3,"p-click"]],template:function(l,n){if(l&1){let d=y();i(0,"po-page-slide",1,0),e(2," Hello World! "),t(),i(3,"div",2)(4,"po-button",3),u("p-click",function(){s(d);let a=M(1);return c(a.open())}),t()()}},dependencies:[z,D],encapsulation:2})}return o})();var ce=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-slide-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(p(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page Slide Basic"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),p(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),t()()()()(),i(21,"div",10),p(22,"sample-po-page-slide-basic"),t(),p(23,"hr")),l&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),P(" ",n.sampleCodeButtonLabel,""),r(),h("ngClass",k(4,ce,n.hideSampleCodeTabs)))},dependencies:[T,w,x,v,te],encapsulation:2})}return o})();var Se=["poPageSlide"],oe=(()=>{class o{poPageSlide;componentsSize;hideClose=!1;title;subtitle;content;size;properties;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];ngOnInit(){this.restore()}openPage(){this.poPageSlide.open()}restore(){this.componentsSize="medium",this.hideClose=!1,this.title="",this.subtitle="",this.content="",this.size="md",this.properties=[]}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-slide-labs"]],viewQuery:function(l,n){if(l&1&&q(Se,5),l&2){let d;H(d=R())&&(n.poPageSlide=d.first)}},standalone:!1,decls:15,vars:17,consts:[["poPageSlide",""],["f","ngForm"],[3,"p-click-out","p-components-size","p-hide-close","p-size","p-subtitle","p-title"],["p-label","Open Page Slide",3,"p-click","p-disabled"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Subtitle","p-clean","","p-label","Subtitle","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Content","p-clean","","p-label","Content","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","Size","p-columns","4","p-label","Size","p-optional","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=y();i(0,"po-page-slide",2,0),e(2),t(),i(3,"po-button",3),u("p-click",function(){return s(d),c(n.openPage())}),t(),p(4,"hr"),i(5,"form",null,1)(7,"po-input",4),E("ngModelChange",function(a){return s(d),f(n.title,a)||(n.title=a),c(a)}),t(),i(8,"po-input",5),E("ngModelChange",function(a){return s(d),f(n.subtitle,a)||(n.subtitle=a),c(a)}),t(),i(9,"po-input",6),E("ngModelChange",function(a){return s(d),f(n.content,a)||(n.content=a),c(a)}),t(),i(10,"po-checkbox-group",7),E("ngModelChange",function(a){return s(d),f(n.properties,a)||(n.properties=a),c(a)}),t(),i(11,"po-radio-group",8),E("ngModelChange",function(a){return s(d),f(n.size,a)||(n.size=a),c(a)}),t(),i(12,"po-radio-group",9),E("ngModelChange",function(a){return s(d),f(n.componentsSize,a)||(n.componentsSize=a),c(a)}),t(),i(13,"div",10)(14,"po-button",11),u("p-click",function(){return s(d),c(n.restore())}),t()()()}if(l&2){let d=M(6);h("p-click-out",n.properties.includes("click-out"))("p-components-size",n.componentsSize)("p-hide-close",n.properties.includes("hide-close"))("p-size",n.size)("p-subtitle",n.subtitle)("p-title",n.title),r(2),P(" ",n.content,`
`),r(),h("p-disabled",d.form.invalid),r(4),b("ngModel",n.title),r(),b("ngModel",n.subtitle),r(),b("ngModel",n.content),r(),b("ngModel",n.properties),h("p-options",n.propertiesOptions),r(),b("ngModel",n.size),h("p-options",n.sizeOptions),r(),b("ngModel",n.componentsSize),h("p-options",n.componentsSizeOptions)}},dependencies:[U,F,j,O,G,z,J,K,Z,D],encapsulation:2})}return o})();var be=o=>({"docs-sample-code-tabs":o}),ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-slide-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(p(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page Slide Labs"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),p(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-page-slide
  [p-click-out]="properties.includes('click-out')"
  [p-components-size]="componentsSize"
  [p-hide-close]="properties.includes('hide-close')"
  [p-size]="size"
  [p-subtitle]="subtitle"
  [p-title]="title"
  #poPageSlide
>
  { { content }}
</po-page-slide>

<po-button p-label="Open Page Slide" [p-disabled]="f.form.invalid" (p-click)="openPage()"></po-button>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="Title" [(ngModel)]="title" p-clean p-label="Title" p-required></po-input>
  <po-input class="po-md-6" name="Subtitle" [(ngModel)]="subtitle" p-clean p-label="Subtitle" p-optional></po-input>
  <po-input class="po-md-6" name="Content" [(ngModel)]="content" p-clean p-label="Content" p-required></po-input>

  <po-checkbox-group
    class="po-md-12 po-lg-6"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  ></po-checkbox-group>

  <po-radio-group
    class="po-md-12"
    name="Size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    [p-options]="sizeOptions"
    p-optional
  ></po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="componentsSize"
    p-columns="4"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"></po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { PoCheckboxGroupOption, PoPageSlideComponent, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-slide-labs',
  templateUrl: './sample-po-page-slide-labs.component.html',
  standalone: false
})
export class SamplePoPageSlideLabsComponent implements OnInit {
  @ViewChild('poPageSlide')
  private readonly poPageSlide: PoPageSlideComponent;

  public componentsSize: string;
  public hideClose = false;
  public title: string;
  public subtitle: string;
  public content: string;
  public size: string;
  public properties: Array<string>;

  public componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public propertiesOptions: Array<PoCheckboxGroupOption> = [
    {
      value: 'click-out',
      label: 'Click Out'
    },
    {
      value: 'hide-close',
      label: 'Hide Close'
    }
  ];

  public sizeOptions: Array<PoRadioGroupOption> = [
    {
      label: 'Small',
      value: 'sm'
    },
    {
      label: 'Medium',
      value: 'md'
    },
    {
      label: 'Large',
      value: 'lg'
    },
    {
      label: 'Extra large',
      value: 'xl'
    },
    {
      label: 'Automatic',
      value: 'auto'
    }
  ];

  ngOnInit() {
    this.restore();
  }

  public openPage() {
    this.poPageSlide.open();
  }

  public restore() {
    this.componentsSize = 'medium';
    this.hideClose = false;
    this.title = '';
    this.subtitle = '';
    this.content = '';
    this.size = 'md';
    this.properties = [];
  }
}
`),t()()()()(),i(21,"div",10),p(22,"sample-po-page-slide-labs"),t(),p(23,"hr")),l&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),P(" ",n.sampleCodeButtonLabel,""),r(),h("ngClass",k(4,be,n.hideSampleCodeTabs)))},dependencies:[T,w,x,v,oe],encapsulation:2})}return o})();var le=(()=>{class o{router;bluetooth=!0;locked=!1;microphone=!0;notification=!0;favorited=!1;localization=!0;constructor(m){this.router=m}openPageSlideFooterDocumentation(){this.router.navigate(["documentation","po-page-slide-footer"])}static \u0275fac=function(l){return new(l||o)(B(A))};static \u0275cmp=S({type:o,selectors:[["sample-po-page-slide-configuration"]],standalone:!1,decls:54,vars:6,consts:[["pageSlide",""],["p-title","Configuration","p-size","sm"],[1,"po-row","po-mb-2"],["p-label-off","Bluetooth","p-label-on","Bluetooth","name","bluetooth",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Unlocked","p-label-on","Locked","name","locked",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Microphone","p-label-on","Microphone","name","microphone",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Notification","p-label-on","Notification","name","notification",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Localization","p-label-on","Localization","name","localization",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Not favorited","p-label-on","Favorited","name","favorited",1,"po-sm-6",3,"ngModelChange","ngModel"],[1,"po-font-title"],[1,"po-m-2"],[1,"po-font-subtitle","po-mb-1"],[1,"po-ml-2"],["href","http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern","target","_blank","rel","noopener"],["p-label","Check footer",3,"p-click"],[1,"po-row"],["p-label","Open Configuration",1,"po-sm-3",3,"p-click"]],template:function(l,n){if(l&1){let d=y();i(0,"po-page-slide",1,0)(2,"div",2)(3,"po-switch",3),E("ngModelChange",function(a){return s(d),f(n.bluetooth,a)||(n.bluetooth=a),c(a)}),t(),i(4,"po-switch",4),E("ngModelChange",function(a){return s(d),f(n.locked,a)||(n.locked=a),c(a)}),t()(),i(5,"div",2)(6,"po-switch",5),E("ngModelChange",function(a){return s(d),f(n.microphone,a)||(n.microphone=a),c(a)}),t(),i(7,"po-switch",6),E("ngModelChange",function(a){return s(d),f(n.notification,a)||(n.notification=a),c(a)}),t()(),i(8,"div",2)(9,"po-switch",7),E("ngModelChange",function(a){return s(d),f(n.localization,a)||(n.localization=a),c(a)}),t(),i(10,"po-switch",8),E("ngModelChange",function(a){return s(d),f(n.favorited,a)||(n.favorited=a),c(a)}),t()(),p(11,"hr"),i(12,"h2",9),e(13,"About Page Slide"),t(),i(14,"section",10)(15,"h3",11),e(16,"Usage"),t(),i(17,"ul",12)(18,"li"),e(19,"To reveal additional navigation controls"),t(),i(20,"li"),e(21,"In TV or mobile space since controls and/or space is limited"),t(),i(22,"li"),e(23,"To expose a configuration panel (similar to the Module Configure Pattern)"),t(),i(24,"li"),e(25," To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) "),t()()(),i(26,"section",10)(27,"h3",11),e(28,"Challenges"),t(),i(29,"ul",12)(30,"li"),e(31,"Discoverability"),t(),i(32,"li"),e(33,"Losing context with the rest of the page"),t(),i(34,"li"),e(35,"Make the disruption work for you"),t()()(),i(36,"section",10)(37,"h3",11),e(38,"Recommendations"),t(),i(39,"ul",12)(40,"li"),e(41,"Use it sparingly only for major context switches"),t(),i(42,"li"),e(43,"Make the animation fast. No reason to wow the user with your ability to scroll"),t(),i(44,"li"),e(45,"Make the activation/deactivation dead simple"),t()()(),i(46,"p"),e(47," For more information visit "),i(48,"a",13),e(49,"Designing Web Interfaces: Page Slide"),t()(),i(50,"po-page-slide-footer")(51,"po-button",14),u("p-click",function(){return s(d),c(n.openPageSlideFooterDocumentation())}),t()()(),i(52,"div",15)(53,"po-button",16),u("p-click",function(){s(d);let a=M(1);return c(a.open())}),t()()}l&2&&(r(3),b("ngModel",n.bluetooth),r(),b("ngModel",n.locked),r(2),b("ngModel",n.microphone),r(),b("ngModel",n.notification),r(2),b("ngModel",n.localization),r(),b("ngModel",n.favorited))},dependencies:[F,O,z,Y,D,X],encapsulation:2})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-slide-configuration-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(p(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page Slide - Configuration"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),p(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html"),t(),i(13,"pre",7),e(14,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Bluetooth"
      p-label-on="Bluetooth"
      name="bluetooth"
      [(ngModel)]="bluetooth"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Unlocked"
      p-label-on="Locked"
      name="locked"
      [(ngModel)]="locked"
    ></po-switch>
  </div>

  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Microphone"
      p-label-on="Microphone"
      name="microphone"
      [(ngModel)]="microphone"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Notification"
      p-label-on="Notification"
      name="notification"
      [(ngModel)]="notification"
    ></po-switch>
  </div>

  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Localization"
      p-label-on="Localization"
      name="localization"
      [(ngModel)]="localization"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Not favorited"
      p-label-on="Favorited"
      name="favorited"
      [(ngModel)]="favorited"
    ></po-switch>
  </div>

  <hr />

  <h2 class="po-font-title">About Page Slide</h2>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Usage</h3>
    <ul class="po-ml-2">
      <li>To reveal additional navigation controls</li>
      <li>In TV or mobile space since controls and/or space is limited</li>
      <li>To expose a configuration panel (similar to the Module Configure Pattern)</li>
      <li>
        To a lesser extent to reveal help or contextual information (the partial hiding of the related content might
        make it a poor choice for this)
      </li>
    </ul>
  </section>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Challenges</h3>
    <ul class="po-ml-2">
      <li>Discoverability</li>
      <li>Losing context with the rest of the page</li>
      <li>Make the disruption work for you</li>
    </ul>
  </section>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Recommendations</h3>
    <ul class="po-ml-2">
      <li>Use it sparingly only for major context switches</li>
      <li>Make the animation fast. No reason to wow the user with your ability to scroll</li>
      <li>Make the activation/deactivation dead simple</li>
    </ul>
  </section>

  <p>
    For more information visit
    <a href="http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern" target="_blank" rel="noopener"
      >Designing Web Interfaces: Page Slide</a
    >
  </p>
  <po-page-slide-footer>
    <po-button p-label="Check footer" (p-click)="openPageSlideFooterDocumentation()"> </po-button>
  </po-page-slide-footer>
</po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="Open Configuration" (p-click)="pageSlide.open()"></po-button>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sample-po-page-slide-configuration',
  templateUrl: './sample-po-page-slide-configuration.component.html',
  standalone: false
})
export class SamplePoPageSlideConfigurationComponent {
  public bluetooth = true;
  public locked = false;
  public microphone = true;
  public notification = true;
  public favorited = false;
  public localization = true;

  constructor(private router: Router) {}

  openPageSlideFooterDocumentation() {
    this.router.navigate(['documentation', 'po-page-slide-footer']);
  }
}
`),t()()()()(),i(21,"div",10),p(22,"sample-po-page-slide-configuration"),t(),p(23,"hr")),l&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),P(" ",n.sampleCodeButtonLabel,""),r(),h("ngClass",k(4,Pe,n.hideSampleCodeTabs)))},dependencies:[T,w,x,v,le],encapsulation:2})}return o})();var re=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-slide-doc"]],standalone:!1,decls:538,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","/documentation/po-page-slide-footer"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"]],template:function(l,n){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),t()(),i(7,"h3",3),e(8,"Componente"),t(),i(9,"h4",4)(10,"code",5),e(11,"PoPageSlideComponent"),t()(),i(12,"div",2)(13,"p"),e(14,"O componente "),i(15,"code"),e(16,"po-page-slide"),t(),e(17,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),t(),i(18,"p"),e(19,"Este componente \xE9 ativado a partir do m\xE9todo "),i(20,"code"),e(21,"#open()"),t(),e(22,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),i(23,"code"),e(24,"#close()"),t(),e(25,"."),t(),i(26,"blockquote")(27,"p"),e(28,"Para o correto funcionamento do componente "),i(29,"code"),e(30,"po-page-slide"),t(),e(31,`, deve ser
importado o m\xF3dulo `),i(32,"code"),e(33,"BrowserAnimationsModule"),t(),e(34,` no m\xF3dulo principal da sua
aplica\xE7\xE3o.`),t()(),i(35,"p"),e(36,"M\xF3dulo da aplica\xE7\xE3o:"),t(),i(37,"pre")(38,"code"),e(39,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
`),t()(),i(40,"p"),e(41,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),t(),i(42,"pre")(43,"code"),e(44,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),t()(),i(45,"p"),e(46," Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do "),i(47,"a",6),e(48,"Grid System"),t(),e(49,"."),t(),i(50,"p"),e(51,"No rodap\xE9 \xE9 poss\xEDvel utilizar o componente "),i(52,"a",7)(53,"code"),e(54,"PoPageSlideFooter"),t()(),e(55," para customiza\xE7\xE3o do template."),t(),i(56,"ul")(57,"li")(58,"h4"),e(59,"Tokens customiz\xE1veis"),t()()(),i(60,"p"),e(61,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(62,"blockquote")(63,"p"),e(64,"Para maiores informa\xE7\xF5es, acesse o guia "),i(65,"a",8),e(66,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(67,"."),t()(),i(68,"table")(69,"thead")(70,"tr")(71,"th"),e(72,"Propriedade"),t(),i(73,"th"),e(74,"Descri\xE7\xE3o"),t(),i(75,"th"),e(76,"Valor Padr\xE3o"),t()()(),i(77,"tbody")(78,"tr")(79,"td")(80,"code"),e(81,"--font-family"),t()(),i(82,"td"),e(83,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(84,"td")(85,"code"),e(86,"var(--font-family-theme)"),t()()(),i(87,"tr")(88,"td")(89,"code"),e(90,"--font-weight"),t()(),i(91,"td"),e(92,"Peso da fonte"),t(),i(93,"td")(94,"code"),e(95,"var(--font-weight-bold)"),t()()(),i(96,"tr")(97,"td")(98,"code"),e(99,"--padding-header"),t()(),i(100,"td"),e(101,"Espa\xE7amento do header"),t(),i(102,"td")(103,"code"),e(104,"var(--spacing-md)"),t()()(),i(105,"tr")(106,"td")(107,"code"),e(108,"--padding-body"),t()(),i(109,"td"),e(110,"Espa\xE7amento do conte\xFAdo"),t(),i(111,"td")(112,"code"),e(113,"var(--line-height-none)"),t()()(),i(114,"tr")(115,"td")(116,"code"),e(117,"--padding-footer"),t()(),i(118,"td"),e(119,"Espa\xE7amento do footer"),t(),i(120,"td")(121,"code"),e(122,"var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)"),t()()(),i(123,"tr")(124,"td")(125,"strong"),e(126,"Default Values"),t()(),p(127,"td")(128,"td"),t(),i(129,"tr")(130,"td")(131,"code"),e(132,"--color-overlay"),t()(),i(133,"td"),e(134,"Cor do overlay"),t(),i(135,"td")(136,"code"),e(137,"var(--color-neutral-dark-80)"),t()()(),i(138,"tr")(139,"td")(140,"code"),e(141,"--opacity-overlay"),t()(),i(142,"td"),e(143,"Cor da opacidade do overlay"),t(),i(144,"td")(145,"code"),e(146,"0.7"),t()()(),i(147,"tr")(148,"td")(149,"code"),e(150,"--background-color"),t()(),i(151,"td"),e(152,"Cor de background"),t(),i(153,"td")(154,"code"),e(155,"var(--color-neutral-light-00)"),t()()(),i(156,"tr")(157,"td")(158,"code"),e(159,"--border-color"),t()(),i(160,"td"),e(161,"Cor da borda"),t(),i(162,"td")(163,"code"),e(164,"var(--color-neutral-light-20)"),t()()(),i(165,"tr")(166,"td")(167,"code"),e(168,"--color-title"),t()(),i(169,"td"),e(170,"Cor do titulo do header"),t(),i(171,"td")(172,"code"),e(173,"var(--color-neutral-dark-95)"),t()()(),i(174,"tr")(175,"td")(176,"code"),e(177,"--border-radius"),t()(),i(178,"td"),e(179,"Radius da borda"),t(),i(180,"td")(181,"code"),e(182,"var(--border-radius-md) 0 0 var(--border-radius-md)"),t()()(),i(183,"tr")(184,"td")(185,"code"),e(186,"--transition-duration"),t()(),i(187,"td"),e(188,"Dura\xE7\xE3o da transi\xE7\xE3o"),t(),i(189,"td")(190,"code"),e(191,"var(--duration-extra-fast)"),t()()(),i(192,"tr")(193,"td")(194,"code"),e(195,"--transition-timing"),t()(),i(196,"td"),e(197,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),t(),i(198,"td")(199,"code"),e(200,"var(--duration-extra-slow) var(--timing-standart)"),t()()(),i(201,"tr")(202,"td")(203,"code"),e(204,"--page-slide-width-sm"),t()(),i(205,"td"),e(206,"Tamanho da largura do componente no tamanho "),i(207,"code"),e(208,"small"),t()(),i(209,"td")(210,"code"),e(211,"40%"),t()()(),i(212,"tr")(213,"td")(214,"code"),e(215,"--page-slide-width-md"),t()(),i(216,"td"),e(217,"Tamanho da largura do componente no tamanho "),i(218,"code"),e(219,"medium"),t()(),i(220,"td")(221,"code"),e(222,"50%"),t()()(),i(223,"tr")(224,"td")(225,"code"),e(226,"--page-slide-width-lg"),t()(),i(227,"td"),e(228,"Tamanho da largura do componente no tamanho "),i(229,"code"),e(230,"large"),t()(),i(231,"td")(232,"code"),e(233,"60%"),t()()(),i(234,"tr")(235,"td")(236,"code"),e(237,"--page-slide-width-xl"),t()(),i(238,"td"),e(239,"Tamanho da largura do componente no tamanho "),i(240,"code"),e(241,"extra large"),t()(),i(242,"td")(243,"code"),e(244,"70%"),t()()(),i(245,"tr")(246,"td")(247,"code"),e(248,"--page-slide-min-width-auto"),t()(),i(249,"td"),e(250,"Tamanho da largura m\xEDnima do componente no tamanho "),i(251,"code"),e(252,"auto"),t()(),i(253,"td")(254,"code"),e(255,"40%"),t()()(),i(256,"tr")(257,"td")(258,"code"),e(259,"--page-slide-max-width-auto"),t()(),i(260,"td"),e(261,"Tamanho da largura m\xE1xima do componente no tamanho "),i(262,"code"),e(263,"auto"),t()(),i(264,"td")(265,"code"),e(266,"90%"),t()()()()()(),i(267,"div",9)(268,"h4",10),e(269,"Seletor"),t(),i(270,"pre",11),e(271,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="string"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),t()(),i(272,"h4",12),e(273,"Propriedades"),t(),i(274,"table",13)(275,"tr",14)(276,"th",15),e(277,"Nome"),t(),i(278,"th",15),e(279,"Tipo"),t(),i(280,"th",15),e(281,"Padr\xE3o"),t(),i(282,"th",15),e(283,"Descri\xE7\xE3o"),t()(),i(284,"tr",16)(285,"td",17)(286,"div",18)(287,"span",19),e(288," p-click-out"),p(289,"br"),t()()(),i(290,"td",20)(291,"code",21),e(292,"boolean"),t()(),i(293,"td",22)(294,"p")(295,"code"),e(296,"false"),t()()(),i(297,"td",23)(298,"em")(299,"strong"),e(300,"(opcional)"),t()(),i(301,"p"),e(302,"Define se permite o encerramento da p\xE1gina ao clicar fora da mesma."),t()()(),i(303,"tr",16)(304,"td",17)(305,"div",24)(306,"span",25),e(307," (p-close)"),p(308,"br"),t()()(),i(309,"td",20)(310,"code",26),e(311,"EventEmitter"),t()(),i(312,"td",22),e(313,"-"),t(),i(314,"td",23)(315,"em")(316,"strong"),e(317,"(opcional)"),t()(),i(318,"p"),e(319,"Evento executado ao fechar o page slide."),t()()(),i(320,"tr",16)(321,"td",17)(322,"div",18)(323,"span",19),e(324," p-components-size"),p(325,"br"),t()()(),i(326,"td",20)(327,"code",27),e(328,"string"),t()(),i(329,"td",22)(330,"p")(331,"code"),e(332,"medium"),t()()(),i(333,"td",23)(334,"em")(335,"strong"),e(336,"(opcional)"),t()(),i(337,"p"),e(338,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),i(339,"ul")(340,"li")(341,"code"),e(342,"small"),t(),e(343,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(344,"li")(345,"code"),e(346,"medium"),t(),e(347,": aplica a medida medium de cada componente."),t()(),i(348,"blockquote")(349,"p"),e(350,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(351,"code"),e(352,"medium"),t(),e(353,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(354,"a",28),e(355,"po-theme"),t(),e(356,"."),t()()()(),i(357,"tr",16)(358,"td",17)(359,"div",18)(360,"span",19),e(361," p-flexible-width"),p(362,"br"),t()()(),i(363,"td",20)(364,"code",21),e(365,"boolean"),t()(),i(366,"td",22)(367,"p")(368,"code"),e(369,"false"),t()()(),i(370,"td",23)(371,"em")(372,"strong"),e(373,"(opcional)"),t()(),i(374,"p"),e(375,"Permite a expans\xE3o din\xE2mica da largura do "),i(376,"code"),e(377,"po-page-slide"),t(),e(378," quando "),i(379,"code"),e(380,"p-size"),t(),e(381," for "),i(382,"code"),e(383,"auto"),t(),e(384,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),i(385,"code"),e(386,"po-table"),t(),e(387," dentro do "),i(388,"code"),e(389,"po-page-slide"),t()()()(),i(390,"tr",16)(391,"td",17)(392,"div",18)(393,"span",19),e(394," p-hide-close"),p(395,"br"),t()()(),i(396,"td",20)(397,"code",21),e(398,"boolean"),t()(),i(399,"td",22)(400,"p")(401,"code"),e(402,"false"),t()()(),i(403,"td",23)(404,"em")(405,"strong"),e(406,"(opcional)"),t()(),i(407,"p"),e(408,"Oculta o bot\xE3o de encerramento da p\xE1gina."),t(),i(409,"p"),e(410,"Esta op\xE7\xE3o s\xF3 \xE9 poss\xEDvel se a propriedade "),i(411,"code"),e(412,"p-click-out"),t(),e(413," estiver habilitada."),t()()(),i(414,"tr",16)(415,"td",17)(416,"div",18)(417,"span",19),e(418," p-size"),p(419,"br"),t()()(),i(420,"td",20)(421,"code",27),e(422,"string"),t()(),i(423,"td",22)(424,"p")(425,"code"),e(426,"md"),t()()(),i(427,"td",23)(428,"em")(429,"strong"),e(430,"(opcional)"),t()(),i(431,"p"),e(432,"Define o tamanho da p\xE1gina."),t(),i(433,"p"),e(434,"Valores v\xE1lidos:"),t(),i(435,"ul")(436,"li")(437,"code"),e(438,"sm"),t(),e(439," (pequeno)"),t(),i(440,"li")(441,"code"),e(442,"md"),t(),e(443," (m\xE9dio)"),t(),i(444,"li")(445,"code"),e(446,"lg"),t(),e(447," (grande)"),t(),i(448,"li")(449,"code"),e(450,"xl"),t(),e(451," (extra-grande)"),t(),i(452,"li")(453,"code"),e(454,"auto"),t(),e(455," (autom\xE1tico)"),t()(),i(456,"blockquote")(457,"p"),e(458,"Todas as op\xE7\xF5es de tamanho, exceto "),i(459,"code"),e(460,"auto"),t(),e(461,", possuem uma largura m\xE1xima de "),i(462,"strong"),e(463,"768px"),t(),e(464,"."),t()()()(),i(465,"tr",16)(466,"td",17)(467,"div",18)(468,"span",19),e(469," p-subtitle"),p(470,"br"),t()()(),i(471,"td",20)(472,"code",27),e(473,"string"),t()(),i(474,"td",22),e(475,"-"),t(),i(476,"td",23)(477,"em")(478,"strong"),e(479,"(opcional)"),t()(),i(480,"p"),e(481,"Subt\xEDtulo da p\xE1gina."),t()()(),i(482,"tr",16)(483,"td",17)(484,"div",18)(485,"span",19),e(486," p-title"),p(487,"br"),t()()(),i(488,"td",20)(489,"code",27),e(490,"string"),t()(),i(491,"td",22),e(492,"-"),t(),i(493,"td",23)(494,"p"),e(495,"T\xEDtulo da p\xE1gina."),t()()()(),i(496,"h3",12),e(497,"M\xE9todos"),t(),i(498,"table",29)(499,"tr",16)(500,"th",30)(501,"div",18)(502,"h4")(503,"span",19),e(504," open "),t()()()()(),i(505,"tr",23)(506,"td",23)(507,"p"),e(508,"Ativa a visualiza\xE7\xE3o da p\xE1gina."),t(),i(509,"p"),e(510,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),i(511,"code"),e(512,"ViewChild"),t(),e(513," da seguinte forma:"),t(),i(514,"pre")(515,"code",31),e(516,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}
`),t()()()()(),p(517,"br"),i(518,"table",29)(519,"tr",16)(520,"th",30)(521,"div",18)(522,"h4")(523,"span",19),e(524," close "),t()()()()(),i(525,"tr",23)(526,"td",23)(527,"p"),e(528,"Encerra a visualiza\xE7\xE3o da p\xE1gina."),t(),i(529,"p"),e(530,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),i(531,"code"),e(532,"ViewChild"),t(),e(533," da seguinte forma:"),t(),i(534,"pre")(535,"code",31),e(536,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}
`),t()()()()(),p(537,"br"),t())},dependencies:[w],encapsulation:2})}return o})();var de=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(B(Q),B(A))};static \u0275cmp=S({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Slide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),p(3,"sample-po-page-slide-doc"),t(),i(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),p(5,"sample-po-page-slide-basic-view")(6,"sample-po-page-slide-labs-view")(7,"sample-po-page-slide-configuration-view"),t()()()),l&2&&(h("p-actions",n.actions),r(2),h("p-active",n.activeTab==="doc"),r(2),h("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[$,x,v,ne,ae,pe,re],encapsulation:2})}return o})();var we=[{path:"",component:de}],me=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=W({type:o});static \u0275inj=L({imports:[I.forChild(we),I]})}return o})();var Qe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=W({type:o});static \u0275inj=L({imports:[ee,me]})}return o})();export{Qe as DocPoPageSlideModule};
