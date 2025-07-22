import{o as v,p as pe}from"./chunk-JYNCG2Y6.js";import{Ab as C,F as A,Ga as ae,I as G,T as le,a as D,nb as se,sb as Q,tb as w,zb as f}from"./chunk-HBOGTDFH.js";import{$a as T,Ac as ie,Ba as x,Ea as e,Fa as t,Ga as s,Ka as k,La as u,M as z,Ma as W,Nc as ne,Pc as oe,Rc as K,T as h,Ta as q,U as g,Ua as O,Va as U,Wa as B,Xa as i,Ya as V,Za as b,_a as R,ab as I,bb as M,db as X,eb as E,ha as p,ia as F,oa as c,pa as N,ua as H,ub as y,wc as Z,xc as $,ya as d,yc as ee,za as L,zc as te}from"./chunk-MIQUIDUB.js";var ye=()=>["/assets/graphics/landscape-01.jpeg","/assets/graphics/landscape-02.jpeg"],me=(()=>{class n{static \u0275fac=function(l){return new(l||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-slide-basic"]],standalone:!1,decls:1,vars:2,consts:[[3,"p-slides"]],template:function(l,o){l&1&&s(0,"po-slide",0),l&2&&d("p-slides",X(1,ye))},dependencies:[w],encapsulation:2})}return n})();var Pe=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-slide-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(s(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Slide Basic"),t(),e(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),s(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-slide-basic/sample-po-slide-basic.component.html"),t(),e(13,"pre",7),i(14,`<po-slide [p-slides]="['/assets/graphics/landscape-01.jpeg', '/assets/graphics/landscape-02.jpeg']"> </po-slide>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-slide-basic/sample-po-slide-basic.component.ts"),t(),e(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-slide-basic',
  templateUrl: './sample-po-slide-basic.component.html',
  standalone: false
})
export class SamplePoSlideBasicComponent {}
`),t()()()()(),e(21,"div",10),s(22,"sample-po-slide-basic"),t(),s(23,"hr")),l&2&&(p(5),x("po-icon "+o.sampleCodeButtonIcon),p(),b(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",E(4,Pe,o.hideSampleCodeTabs)))},dependencies:[y,v,f,C,me],encapsulation:2})}return n})();var re=(()=>{class n{poNotification;height;interval;slideItem;slideItems;constructor(a){this.poNotification=a}ngOnInit(){this.restore()}addSlide(){let a=Object.assign({},this.slideItem);a.action=a.action?this.showAction.bind(this,a.action):void 0,this.slideItems=[...this.slideItems,a],this.restoreSlideItemForm()}restore(){this.interval=void 0,this.height=void 0,this.slideItems=[],this.restoreSlideItemForm()}restoreSlideItemForm(){this.slideItem={action:void 0,alt:void 0,image:void 0,link:void 0}}showAction(a){this.poNotification.success(`Slide clicked: ${a}`)}static \u0275fac=function(l){return new(l||n)(F(le))};static \u0275cmp=c({type:n,selectors:[["sample-po-slide-labs"]],standalone:!1,decls:19,vars:10,consts:[["slideItemForm","ngForm"],["slidePropertiesForm","ngForm"],[3,"p-height","p-interval","p-slides"],["p-label","Slide Item"],[1,"po-row"],["name","slideAction","p-clean","","p-label","Slide action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideAlt","p-clean","","p-label","Slide alt",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideImage","p-clean","","p-help","Ex.: https://lorempixel.com/1024/768/","p-label","Slide image","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","slideLink","p-clean","","p-help","Ex.: https://po-ui.io/home","p-label","Slide link",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add slide",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Properties"],["name","interval","p-clean","","p-help","Ex.: 7000","p-label","Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-help","Ex.: 300","p-label","Height",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,o){if(l&1){let m=k();s(0,"po-slide",2)(1,"po-divider",3),e(2,"form",null,0)(4,"div",4)(5,"po-input",5),M("ngModelChange",function(r){return h(m),I(o.slideItem.action,r)||(o.slideItem.action=r),g(r)}),t(),e(6,"po-input",6),M("ngModelChange",function(r){return h(m),I(o.slideItem.alt,r)||(o.slideItem.alt=r),g(r)}),t(),e(7,"po-input",7),M("ngModelChange",function(r){return h(m),I(o.slideItem.image,r)||(o.slideItem.image=r),g(r)}),t(),e(8,"po-input",8),M("ngModelChange",function(r){return h(m),I(o.slideItem.link,r)||(o.slideItem.link=r),g(r)}),t()(),e(9,"div",4)(10,"po-button",9),u("p-click",function(){return h(m),g(o.addSlide())}),t()()(),s(11,"po-divider",10),e(12,"form",null,1)(14,"div",4)(15,"po-input",11),M("ngModelChange",function(r){return h(m),I(o.interval,r)||(o.interval=r),g(r)}),t(),e(16,"po-input",12),M("ngModelChange",function(r){return h(m),I(o.height,r)||(o.height=r),g(r)}),t()(),e(17,"div",4)(18,"po-button",13),u("p-click",function(){h(m);let r=B(3),Ee=B(13);return r.reset(),Ee.reset(),g(o.restore())}),t()()()}if(l&2){let m=B(3);d("p-height",o.height)("p-interval",o.interval)("p-slides",o.slideItems),p(5),T("ngModel",o.slideItem.action),p(),T("ngModel",o.slideItem.alt),p(),T("ngModel",o.slideItem.image),p(),T("ngModel",o.slideItem.link),p(2),d("p-disabled",m.invalid),p(5),T("ngModel",o.interval),p(),T("ngModel",o.height)}},dependencies:[ie,Z,$,te,ee,A,D,ae,w],encapsulation:2})}return n})();var Te=n=>({"docs-sample-code-tabs":n}),ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-slide-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(s(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Slide Labs"),t(),e(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),s(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-slide-labs/sample-po-slide-labs.component.html"),t(),e(13,"pre",7),i(14,`<po-slide [p-height]="height" [p-interval]="interval" [p-slides]="slideItems"> </po-slide>

<po-divider p-label="Slide Item"></po-divider>

<form #slideItemForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="slideAction" [(ngModel)]="slideItem.action" p-clean p-label="Slide action">
    </po-input>

    <po-input class="po-md-6" name="slideAlt" [(ngModel)]="slideItem.alt" p-clean p-label="Slide alt"> </po-input>

    <po-input
      class="po-md-6"
      name="slideImage"
      [(ngModel)]="slideItem.image"
      p-clean
      p-help="Ex.: https://lorempixel.com/1024/768/"
      p-label="Slide image"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="slideLink"
      [(ngModel)]="slideItem.link"
      p-clean
      p-help="Ex.: https://po-ui.io/home"
      p-label="Slide link"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Add slide" [p-disabled]="slideItemForm.invalid" (p-click)="addSlide()">
    </po-button>
  </div>
</form>

<po-divider p-label="Properties"></po-divider>

<form #slidePropertiesForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="interval" [(ngModel)]="interval" p-clean p-help="Ex.: 7000" p-label="Interval">
    </po-input>

    <po-input class="po-md-6" name="height" [(ngModel)]="height" p-clean p-help="Ex.: 300" p-label="Height"> </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Sample Restore"
      (p-click)="slideItemForm.reset(); slidePropertiesForm.reset(); restore()"
    >
    </po-button>
  </div>
</form>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-slide-labs/sample-po-slide-labs.component.ts"),t(),e(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoSlideItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-slide-labs',
  templateUrl: './sample-po-slide-labs.component.html',
  standalone: false
})
export class SamplePoSlideLabsComponent implements OnInit {
  height: number;
  interval: number;
  slideItem: PoSlideItem;
  slideItems: Array<PoSlideItem>;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  addSlide() {
    const item: PoSlideItem = Object.assign({}, this.slideItem);
    item.action = item.action ? this.showAction.bind(this, item.action) : undefined;
    this.slideItems = [...this.slideItems, item];
    this.restoreSlideItemForm();
  }

  restore() {
    this.interval = undefined;
    this.height = undefined;
    this.slideItems = [];
    this.restoreSlideItemForm();
  }

  restoreSlideItemForm() {
    this.slideItem = { action: undefined, alt: undefined, image: undefined, link: undefined };
  }

  private showAction(action: string) {
    this.poNotification.success(\`Slide clicked: \${action}\`);
  }
}
`),t()()()()(),e(21,"div",10),s(22,"sample-po-slide-labs"),t(),s(23,"hr")),l&2&&(p(5),x("po-icon "+o.sampleCodeButtonIcon),p(),b(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",E(4,Te,o.hideSampleCodeTabs)))},dependencies:[y,v,f,C,re],encapsulation:2})}return n})();function Me(n,J){if(n&1){let a=k();e(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),i(4),t(),e(5,"div",6),i(6),t(),s(7,"po-divider"),e(8,"div",7),i(9),t(),e(10,"po-button",8),u("p-click",function(){let o=h(a).$implicit,m=W();return g(m.redirectLink(o.link))}),t()()()()}if(n&2){let a=J.$implicit;L("background-image","url("+a.imagem+")")("background-size","cover")("height",100,"%"),p(2),L("background","white"),p(2),R("",a.date," by ",a.author,""),p(2),V(a.title),p(3),V(a.description)}}var ue=(()=>{class n{sampleItems=[{title:"The Iceberg Method",description:"How could you ever take 20 minutes to just breathe?",date:"December 11, 2016",author:"Patrick Buggy",link:"https://bit.ly/2OVCypl",imagem:"/assets/graphics/landscape-01.jpeg"},{title:"What Meditation Isn\u2019t",description:"Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly",date:"August 17, 2018",author:"Seizan Egyo",link:"https://bit.ly/2UercLM",imagem:"/assets/graphics/landscape-02.jpeg"},{title:"Get out of your mental cocoon",description:"You Can\u2019t Change without Transforming Your World",date:"January 22, 2019",author:"Gustavo Razzetti",link:"https://bit.ly/2Tbc16b",imagem:"/assets/graphics/landscape-03.jpeg"}];redirectLink(a){window.open(a,"_blank")}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-slide-useful-articles"]],standalone:!1,decls:2,vars:1,consts:[["p-height","450",3,"p-slides"],["p-slide-content-template",""],[1,"sample-background-image"],[1,"po-row"],[1,"po-offset-sm-1","po-offset-md-1","po-offset-lg-1","po-offset-xl-1","po-lg-5","po-sm-10","po-mt-4","po-mb-4","po-p-5"],[1,"po-font-text"],[1,"po-font-display"],[1,"po-font-text-large-bold","po-mb-3"],["p-label","Read More",3,"p-click"]],template:function(l,o){l&1&&(e(0,"po-slide",0),H(1,Me,11,12,"ng-template",1),t()),l&2&&d("p-slides",o.sampleItems)},dependencies:[A,D,w,Q],encapsulation:2})}return n})();var Be=n=>({"docs-sample-code-tabs":n}),he=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-slide-useful-articles-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(s(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Slide - Useful articles"),t(),e(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),s(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.html"),t(),e(13,"pre",7),i(14,`<po-slide p-height="450" [p-slides]="sampleItems">
  <ng-template p-slide-content-template let-item>
    <div
      class="sample-background-image"
      [style.background-image]="'url(' + item.imagem + ')'"
      [style.backgroundSize]="'cover'"
      [style.height.%]="100"
    >
      <div class="po-row">
        <div
          class="po-offset-sm-1 po-offset-md-1 po-offset-lg-1 po-offset-xl-1 po-lg-5 po-sm-10 po-mt-4 po-mb-4 po-p-5"
          [style.background]="'white'"
        >
          <div class="po-font-text">{ { item.date }} by { { item.author }}</div>
          <div class="po-font-display">{ { item.title }}</div>
          <po-divider></po-divider>
          <div class="po-font-text-large-bold po-mb-3">{ { item.description }}</div>
          <po-button p-label="Read More" (p-click)="redirectLink(item.link)"></po-button>
        </div>
      </div>
    </div>
  </ng-template>
</po-slide>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-slide-useful-articles/sample-po-slide-useful-articles.component.ts"),t(),e(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-slide-useful-articles',
  templateUrl: './sample-po-slide-useful-articles.component.html',
  standalone: false
})
export class SamplePoSlideUsefulArticlesComponent {
  sampleItems: Array<any> = [
    {
      title: 'The Iceberg Method',
      description: 'How could you ever take 20 minutes to just breathe?',
      date: 'December 11, 2016',
      author: 'Patrick Buggy',
      link: 'https://bit.ly/2OVCypl',
      imagem: '/assets/graphics/landscape-01.jpeg'
    },
    {
      title: 'What Meditation Isn\u2019t',
      description: 'Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly',
      date: 'August 17, 2018',
      author: 'Seizan Egyo',
      link: 'https://bit.ly/2UercLM',
      imagem: '/assets/graphics/landscape-02.jpeg'
    },
    {
      title: 'Get out of your mental cocoon',
      description: 'You Can\u2019t Change without Transforming Your World',
      date: 'January 22, 2019',
      author: 'Gustavo Razzetti',
      link: 'https://bit.ly/2Tbc16b',
      imagem: '/assets/graphics/landscape-03.jpeg'
    }
  ];

  redirectLink(link: string) {
    window.open(link, '_blank');
  }
}
`),t()()()()(),e(21,"div",10),s(22,"sample-po-slide-useful-articles"),t(),s(23,"hr")),l&2&&(p(5),x("po-icon "+o.sampleCodeButtonIcon),p(),b(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",E(4,Be,o.hideSampleCodeTabs)))},dependencies:[y,v,f,C,ue],encapsulation:2})}return n})();var ge=(()=>{class n{modal;landscapes=[{image:"/assets/graphics/landscape-01.jpeg",alt:"On the road",action:this.aboutLandscape.bind(this)},{image:"/assets/graphics/landscape-02.jpeg",alt:"Birds flying over trees",action:this.aboutLandscape.bind(this)},{image:"/assets/graphics/landscape-03.jpeg",alt:"That`s a great sea",action:this.aboutLandscape.bind(this)}];modalText;aboutLandscape(a){this.modalText=a.alt,this.modal.open()}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-slide-landscapes"]],viewQuery:function(l,o){if(l&1&&q(G,7),l&2){let m;O(m=U())&&(o.modal=m.first)}},standalone:!1,decls:3,vars:2,consts:[["p-interval","0",3,"p-slides"],["p-title","Landscape detail"]],template:function(l,o){l&1&&(s(0,"po-slide",0),e(1,"po-modal",1),i(2),t()),l&2&&(d("p-slides",o.landscapes),p(2),b(" ",o.modalText,`
`))},dependencies:[G,w],encapsulation:2})}return n})();var Ae=n=>({"docs-sample-code-tabs":n}),Se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-slide-landscapes-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(s(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Slide - Landscapes"),t(),e(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),s(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-slide-landscapes/sample-po-slide-landscapes.component.html"),t(),e(13,"pre",7),i(14,`<po-slide p-interval="0" [p-slides]="landscapes"> </po-slide>

<po-modal p-title="Landscape detail">
  { { modalText }}
</po-modal>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-slide-landscapes/sample-po-slide-landscapes.component.ts"),t(),e(19,"pre",9),i(20,`import { Component, ViewChild } from '@angular/core';

import { PoModalComponent, PoSlideItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-slide-landscapes',
  templateUrl: './sample-po-slide-landscapes.component.html',
  standalone: false
})
export class SamplePoSlideLandscapesComponent {
  @ViewChild(PoModalComponent, { static: true }) modal: PoModalComponent;

  landscapes: Array<PoSlideItem> = [
    { image: '/assets/graphics/landscape-01.jpeg', alt: 'On the road', action: this.aboutLandscape.bind(this) },
    {
      image: '/assets/graphics/landscape-02.jpeg',
      alt: 'Birds flying over trees',
      action: this.aboutLandscape.bind(this)
    },
    { image: '/assets/graphics/landscape-03.jpeg', alt: 'That\`s a great sea', action: this.aboutLandscape.bind(this) }
  ];

  modalText: string;

  aboutLandscape(item: PoSlideItem) {
    this.modalText = item.alt;
    this.modal.open();
  }
}
`),t()()()()(),e(21,"div",10),s(22,"sample-po-slide-landscapes"),t(),s(23,"hr")),l&2&&(p(5),x("po-icon "+o.sampleCodeButtonIcon),p(),b(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",E(4,Ae,o.hideSampleCodeTabs)))},dependencies:[y,v,f,C,ge],encapsulation:2})}return n})();var je=["slideComponent"];function ze(n,J){if(n&1){let a=k();e(0,"div",6)(1,"div",3)(2,"div",7)(3,"div",8),i(4),t(),e(5,"div",9),i(6),t(),s(7,"po-divider"),e(8,"div",10),i(9),t(),e(10,"po-button",11),u("p-click",function(){let o=h(a).$implicit,m=W();return g(m.redirectLink(o.link))}),t()()()()}if(n&2){let a=J.$implicit;L("background-image","url("+a.imagem+")")("background-size","cover")("height",100,"%"),p(2),L("background","white"),p(2),R("",a.date," by ",a.author,""),p(2),V(a.title),p(3),V(a.description)}}var be=(()=>{class n{slideComponent;nextLabel="Next";sampleItems=[{title:"The Iceberg Method",description:"How could you ever take 20 minutes to just breathe?",date:"December 11, 2016",author:"Patrick Buggy",link:"https://bit.ly/2OVCypl",imagem:"/assets/graphics/landscape-01.jpeg"},{title:"What Meditation Isn\u2019t",description:"Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly",date:"August 17, 2018",author:"Seizan Egyo",link:"https://bit.ly/2UercLM",imagem:"/assets/graphics/landscape-02.jpeg"},{title:"Get out of your mental cocoon",description:"You Can\u2019t Change without Transforming Your World",date:"January 22, 2019",author:"Gustavo Razzetti",link:"https://bit.ly/2Tbc16b",imagem:"/assets/graphics/landscape-03.jpeg"}];redirectLink(a){window.open(a,"_blank")}nextBtn(){this.slideComponent.next()}previousBtn(){this.slideComponent.previous()}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-slide-external-controls"]],viewQuery:function(l,o){if(l&1&&q(je,7),l&2){let m;O(m=U())&&(o.slideComponent=m.first)}},standalone:!1,decls:6,vars:3,consts:[["slideComponent",""],["p-height","450","p-interval","0","p-hide-arrows","",3,"p-slides"],["p-slide-content-template",""],[1,"po-row"],["p-label","Previous",1,"po-xl-4","po-lg-4","po-md-6","po-sm-6",3,"p-click","p-disabled"],["p-label","Next",1,"po-offset-lg-4","po-offset-xl-4","po-xl-4","po-lg-4","po-md-6","po-sm-6",3,"p-click","p-disabled"],[1,"sample-background-image"],[1,"po-offset-sm-1","po-offset-md-1","po-offset-lg-1","po-offset-xl-1","po-lg-5","po-sm-10","po-mt-4","po-mb-4","po-p-5"],[1,"po-font-text"],[1,"po-font-display"],[1,"po-font-text-large-bold","po-mb-3"],["p-label","Read More",3,"p-click"]],template:function(l,o){if(l&1){let m=k();e(0,"po-slide",1,0),H(2,ze,11,12,"ng-template",2),t(),e(3,"div",3)(4,"po-button",4),u("p-click",function(){return h(m),g(o.previousBtn())}),t(),e(5,"po-button",5),u("p-click",function(){return h(m),g(o.nextBtn())}),t()()}if(l&2){let m=B(1);d("p-slides",o.sampleItems),p(4),d("p-disabled",m.getCurrentSlideIndex()===0),p(),d("p-disabled",m.getCurrentSlideIndex()===o.sampleItems.length-1)}},dependencies:[A,D,w,Q],encapsulation:2})}return n})();var He=n=>({"docs-sample-code-tabs":n}),fe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-slide-external-controls-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(s(0,"br"),e(1,"blockquote",0)(2,"label",1),i(3,"PO Slide - External Controls"),t(),e(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),s(5,"span"),i(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-slide-external-controls/sample-po-slide-external-controls.component.html"),t(),e(13,"pre",7),i(14,`<po-slide #slideComponent p-height="450" [p-slides]="sampleItems" p-interval="0" p-hide-arrows>
  <ng-template p-slide-content-template let-item>
    <div
      class="sample-background-image"
      [style.background-image]="'url(' + item.imagem + ')'"
      [style.backgroundSize]="'cover'"
      [style.height.%]="100"
    >
      <div class="po-row">
        <div
          class="po-offset-sm-1 po-offset-md-1 po-offset-lg-1 po-offset-xl-1 po-lg-5 po-sm-10 po-mt-4 po-mb-4 po-p-5"
          [style.background]="'white'"
        >
          <div class="po-font-text">{ { item.date }} by { { item.author }}</div>
          <div class="po-font-display">{ { item.title }}</div>
          <po-divider></po-divider>
          <div class="po-font-text-large-bold po-mb-3">{ { item.description }}</div>
          <po-button p-label="Read More" (p-click)="redirectLink(item.link)"></po-button>
        </div>
      </div>
    </div>
  </ng-template>
</po-slide>

<div class="po-row">
  <po-button
    class="po-xl-4 po-lg-4 po-md-6 po-sm-6"
    p-label="Previous"
    (p-click)="previousBtn()"
    [p-disabled]="slideComponent.getCurrentSlideIndex() === 0"
  >
  </po-button>
  <po-button
    class="po-offset-lg-4 po-offset-xl-4 po-xl-4 po-lg-4 po-md-6 po-sm-6"
    p-label="Next"
    (p-click)="nextBtn()"
    [p-disabled]="slideComponent.getCurrentSlideIndex() === sampleItems.length - 1"
  >
  </po-button>
</div>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-slide-external-controls/sample-po-slide-external-controls.component.ts"),t(),e(19,"pre",9),i(20,`import { Component, OnChanges, ViewChild } from '@angular/core';

import { PoSlideComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-slide-external-controls',
  templateUrl: './sample-po-slide-external-controls.component.html',
  standalone: false
})
export class SamplePoSlideExternalControlsComponent {
  @ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

  nextLabel: string = 'Next';
  sampleItems: Array<any> = [
    {
      title: 'The Iceberg Method',
      description: 'How could you ever take 20 minutes to just breathe?',
      date: 'December 11, 2016',
      author: 'Patrick Buggy',
      link: 'https://bit.ly/2OVCypl',
      imagem: '/assets/graphics/landscape-01.jpeg'
    },
    {
      title: 'What Meditation Isn\u2019t',
      description: 'Meditating won\u2019t solve your problems \u2014 but it will help you face them honestly',
      date: 'August 17, 2018',
      author: 'Seizan Egyo',
      link: 'https://bit.ly/2UercLM',
      imagem: '/assets/graphics/landscape-02.jpeg'
    },
    {
      title: 'Get out of your mental cocoon',
      description: 'You Can\u2019t Change without Transforming Your World',
      date: 'January 22, 2019',
      author: 'Gustavo Razzetti',
      link: 'https://bit.ly/2Tbc16b',
      imagem: '/assets/graphics/landscape-03.jpeg'
    }
  ];

  redirectLink(link: string) {
    window.open(link, '_blank');
  }

  nextBtn() {
    this.slideComponent.next();
  }

  previousBtn() {
    this.slideComponent.previous();
  }
}
`),t()()()()(),e(21,"div",10),s(22,"sample-po-slide-external-controls"),t(),s(23,"hr")),l&2&&(p(5),x("po-icon "+o.sampleCodeButtonIcon),p(),b(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",E(4,He,o.hideSampleCodeTabs)))},dependencies:[y,v,f,C,be],encapsulation:2})}return n})();var Ce=(()=>{class n{static \u0275fac=function(l){return new(l||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-slide-doc"]],standalone:!1,decls:298,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-slide-content-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoSlideItem"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","any>"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(l,o){l&1&&(e(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoSlideModule } from '@po-ui/ng-components';"),t()(),e(4,"div",2)(5,"p"),i(6,"M\xF3dulo do componente "),e(7,"code"),i(8,"po-slide"),t(),i(9,"."),t(),e(10,"blockquote")(11,"p"),i(12,"Para o correto funcionamento do componente "),e(13,"code"),i(14,"po-slide"),t(),i(15,", deve ser importado o m\xF3dulo "),e(16,"code"),i(17,"BrowserAnimationsModule"),t(),i(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),t()(),e(19,"p"),i(20,"M\xF3dulo da aplica\xE7\xE3o:"),t(),e(21,"pre")(22,"code"),i(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
`),t()(),e(24,"p"),i(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),t(),e(26,"pre")(27,"code"),i(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),t()()(),e(29,"h3",3),i(30,"Componente"),t(),e(31,"h4",4)(32,"code",5),i(33,"PoSlideComponent"),t()(),e(34,"div",2)(35,"p"),i(36,`Componente de slide para visualiza\xE7\xE3o e controle de elementos de forma c\xEDclica. Exibe um conjunto de imagens ou dados que permitem
customizar sua visualiza\xE7\xE3o utilizando a diretiva `),e(37,"strong")(38,"a",6),i(39,"p-slide-content-template"),t()(),i(40,"."),t(),e(41,"h4"),i(42,"Boas pr\xE1ticas:"),t(),e(43,"ul")(44,"li"),i(45,"Utilizar imagens no slide, mesmo quando possui conte\xFAdo personalizado."),t(),e(46,"li"),i(47,"Evitar utilizar apenas um slide isolado, utilize pelo menos dois."),t(),e(48,"li"),i(49,"Evitar utilizar mais de 5 slides, pois a ideia do componente \xE9 destacar apenas informa\xE7\xF5es importantes."),t()()(),e(50,"div",7)(51,"h4",8),i(52,"Seletor"),t(),e(53,"pre",9),i(54,`<po-slide
    p-height="number"
    p-hide-arrows="boolean"
    p-interval="number"
    p-slides="Array<PoSlideItem | string | any>" >
</po-slide>
`),t()(),e(55,"h4",10),i(56,"Propriedades"),t(),e(57,"table",11)(58,"tr",12)(59,"th",13),i(60,"Nome"),t(),e(61,"th",13),i(62,"Tipo"),t(),e(63,"th",13),i(64,"Padr\xE3o"),t(),e(65,"th",13),i(66,"Descri\xE7\xE3o"),t()(),e(67,"tr",14)(68,"td",15)(69,"div",16)(70,"span",17),i(71," p-height"),s(72,"br"),t()()(),e(73,"td",18)(74,"code",19),i(75,"number"),t()(),e(76,"td",20)(77,"p")(78,"code"),i(79,"336"),t()()(),e(80,"td",21)(81,"em")(82,"strong"),i(83,"(opcional)"),t()(),e(84,"p"),i(85,"Altura do po-slide, caso seja slide com template customizado, n\xE3o assume o valor "),e(86,"code"),i(87,"default"),t(),i(88,"."),t()()(),e(89,"tr",14)(90,"td",15)(91,"div",16)(92,"span",17),i(93," p-hide-arrows"),s(94,"br"),t()()(),e(95,"td",18)(96,"code",22),i(97,"boolean"),t()(),e(98,"td",20)(99,"p")(100,"code"),i(101,"false"),t()()(),e(102,"td",21)(103,"em")(104,"strong"),i(105,"(opcional)"),t()(),e(106,"p"),i(107,"Define a exibi\xE7\xE3o das setas de navega\xE7\xE3o."),t()()(),e(108,"tr",14)(109,"td",15)(110,"div",16)(111,"span",17),i(112," p-interval"),s(113,"br"),t()()(),e(114,"td",18)(115,"code",19),i(116,"number"),t()(),e(117,"td",20)(118,"p")(119,"code"),i(120,"4000"),t()()(),e(121,"td",21)(122,"em")(123,"strong"),i(124,"(opcional)"),t()(),e(125,"p"),i(126,"Valor em milissegundos que define o tempo de troca dos slides, caso o valor seja menor que "),e(127,"code"),i(128,"1000"),t(),i(129," os slides n\xE3o trocam automaticamente."),t()()(),e(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),i(134," p-slides"),s(135,"br"),t()()(),e(136,"td",18)(137,"code",23),i(138,"Array<PoSlideItem "),t(),e(139,"code",24),i(140," string "),t(),e(141,"code",25),i(142," any>"),t()(),e(143,"td",20),i(144,"-"),t(),e(145,"td",21)(146,"p"),i(147,"Array de imagens ou dados para o slide, pode ser de tr\xEAs formas:"),t(),e(148,"ul")(149,"li"),i(150,"Array implementando objetos da interface "),e(151,"code"),i(152,"PoSlideItem"),t(),i(153,":"),e(154,"pre")(155,"code"),i(156,`[{ image: '/assets/image-1', action: 'imageClick.bind(this)'}, { image: '/assets/image-2' }]
`),t()()(),e(157,"li"),i(158,"Array de "),e(159,"code"),i(160,"strings"),t(),i(161," com os caminhos das imagens:"),e(162,"pre")(163,"code"),i(164,`['/assets/image-1', '/assets/image-2' ]
`),t()()(),e(165,"li"),i(166,"Array com lista de itens (para utilizar template):"),e(167,"pre")(168,"code"),i(169,`[{ label: '1', img: '/assets/image-1' }, { label: '2', img: '/assets/image-1' }]
`),t()()()(),e(170,"blockquote")(171,"p"),i(172,"As setas de navega\xE7\xE3o e o controle com c\xEDrculos apenas ser\xE3o renderizados caso possua mais de um slide."),t()()()()(),e(173,"h3",10),i(174,"M\xE9todos"),t(),e(175,"table",26)(176,"tr",14)(177,"th",27)(178,"div",16)(179,"h4")(180,"span",17),i(181," getCurrentSlideIndex "),t()()()()(),e(182,"tr",21)(183,"td",21)(184,"p"),i(185,"M\xE9todo que retorna o index do slide atual"),t(),e(186,"pre")(187,"code"),i(188,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;
 myFunction() {
   let currentIndex = this.slideComponent.getCurrentSlideIndex();
}
`),t()()()()(),s(189,"br"),e(190,"table",26)(191,"tr",14)(192,"th",27)(193,"div",16)(194,"h4")(195,"span",17),i(196," next "),t()()()()(),e(197,"tr",21)(198,"td",21)(199,"p"),i(200,"M\xE9todo para chamar o pr\xF3ximo slide."),t(),e(201,"pre")(202,"code"),i(203,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.next();
}
`),t()()()()(),s(204,"br"),e(205,"table",26)(206,"tr",14)(207,"th",27)(208,"div",16)(209,"h4")(210,"span",17),i(211," previous "),t()()()()(),e(212,"tr",21)(213,"td",21)(214,"p"),i(215,"M\xE9todo para chamar o slide anterior."),t(),e(216,"pre")(217,"code"),i(218,`@ViewChild('slideComponent', { static: true }) slideComponent: PoSlideComponent;

myFunction() {
 this.slideComponent.previous();
}
`),t()()()()(),s(219,"br"),e(220,"h3"),i(221,"Interfaces"),t(),e(222,"h4",28)(223,"code",5),i(224,"PoSlideItem"),t()(),e(225,"div",2)(226,"p"),i(227,"Interface que define cada objeto do "),e(228,"code"),i(229,"PoSlideItem"),t(),i(230,"."),t()(),e(231,"h4",10),i(232,"Propriedades"),t(),e(233,"table",11)(234,"tr",12)(235,"th",13),i(236,"Nome"),t(),e(237,"th",13),i(238,"Tipo"),t(),e(239,"th",13),i(240,"Descri\xE7\xE3o"),t()(),e(241,"tr",14)(242,"td",15)(243,"div",16)(244,"span",17),i(245," action"),s(246,"br"),t()()(),e(247,"td",18)(248,"code",29),i(249,"Function"),t()(),e(250,"td",21)(251,"em")(252,"strong"),i(253,"(opcional)"),t()(),e(254,"p"),i(255,"A\xE7\xE3o executada ao clicar no slide caso n\xE3o tenha link definido."),t()()(),e(256,"tr",14)(257,"td",15)(258,"div",16)(259,"span",17),i(260," alt"),s(261,"br"),t()()(),e(262,"td",18)(263,"code",24),i(264,"string"),t()(),e(265,"td",21)(266,"em")(267,"strong"),i(268,"(opcional)"),t()(),e(269,"p"),i(270,"Texto que aparece quando a imagem n\xE3o \xE9 encontrada."),t()()(),e(271,"tr",14)(272,"td",15)(273,"div",16)(274,"span",17),i(275," image"),s(276,"br"),t()()(),e(277,"td",18)(278,"code",24),i(279,"string"),t()(),e(280,"td",21)(281,"p"),i(282,"Define o caminho da imagem."),t()()(),e(283,"tr",14)(284,"td",15)(285,"div",16)(286,"span",17),i(287," link"),s(288,"br"),t()()(),e(289,"td",18)(290,"code",24),i(291,"string"),t()(),e(292,"td",21)(293,"em")(294,"strong"),i(295,"(opcional)"),t()(),e(296,"p"),i(297,"Link interno ou externo que ser\xE1 aberto ao clicar no slide."),t()()()()())},dependencies:[v],encapsulation:2})}return n})();var ve=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||n)(F(ne),F(oe))};static \u0275cmp=c({type:n,selectors:[["ng-component"]],standalone:!1,decls:10,vars:4,consts:[["p-title","Slide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return o.changeTab("doc")}),s(3,"sample-po-slide-doc"),t(),e(4,"po-tab",3),u("p-click",function(){return o.changeTab("web")}),s(5,"sample-po-slide-basic-view")(6,"sample-po-slide-labs-view")(7,"sample-po-slide-useful-articles-view")(8,"sample-po-slide-landscapes-view")(9,"sample-po-slide-external-controls-view"),t()()()),l&2&&(d("p-actions",o.actions),p(2),d("p-active",o.activeTab==="doc"),p(2),d("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[se,f,C,de,ce,he,Se,fe,Ce],encapsulation:2})}return n})();var Oe=[{path:"",component:ve}],xe=(()=>{class n{static \u0275fac=function(l){return new(l||n)};static \u0275mod=N({type:n});static \u0275inj=z({imports:[K.forChild(Oe),K]})}return n})();var yt=(()=>{class n{static \u0275fac=function(l){return new(l||n)};static \u0275mod=N({type:n});static \u0275inj=z({imports:[pe,xe]})}return n})();export{yt as DocPoSlideModule};
