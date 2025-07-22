import{o as Ee,p as Se}from"./chunk-JYNCG2Y6.js";import{A as I,Ab as D,B as C,Db as ue,F as ae,Fa as me,Ga as de,I as re,La as pe,Pa as se,Wa as ce,g as v,ja as le,nb as he,t as te,u as ne,v as ie,w as _,x as N,y as oe,z as M,zb as P}from"./chunk-HBOGTDFH.js";import{$a as L,Ac as K,Ba as V,Dc as X,Ea as t,Ec as Y,Fa as n,Ga as i,Ic as Z,Ka as O,La as E,M as A,Nc as $,Pc as ee,Rc as F,T as g,Ta as R,U as x,Ua as q,Va as z,Xa as e,Za as j,a as c,ab as k,b as u,bb as w,cb as B,eb as W,ha as m,ia as b,oa as S,pa as y,qb as G,tc as p,ub as U,wc as H,xc as Q,ya as d,zc as J}from"./chunk-MIQUIDUB.js";var Ae=["reactiveFormData"],be=(()=>{class r{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},ne),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},_),{info:u(c({},_.info),{base:"#0079b8"})}),neutral:c({},ie)},onRoot:u(c({},N.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},N.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},oe),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},M),{info:u(c({},M.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:u(c({},I.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},I.perComponent)}},active:te.light};constructor(l,a,o){this.cdr=l,this.fb=a,this.poTheme=o;let s=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),s?this.theme=s.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm(),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,!1),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?v.AAA:v.AA,this.changeA11yLevel(this.a11yLevel,!1),this.themeChangeListenerDefault=()=>{this.changeTheme(0,!1),this.theme=0},this.themeChangeListenerDark=()=>{this.changeTheme(1,!1),this.theme=1},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(v.AAA,!1),this.a11yLevel=v.AAA},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(v.AA,!1),this.a11yLevel=v.AA},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark)}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA)}changeA11yLevel(l,a=!0){this.poTheme.setCurrentThemeA11y(l),l==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),l===v.AA&&this.poTheme.setA11yDefaultSizeSmall(!0),a&&window.dispatchEvent(new Event("po-sample-change-a11y"))}changeTheme(l,a=!0){this.poTheme.setTheme(this.poThemeSample,l,this.a11yLevel),l===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),a&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",p.compose([p.required,p.minLength(5),p.maxLength(30)])],address:["",p.compose([p.required,p.minLength(5),p.maxLength(50)])],number:["",p.compose([p.required,p.min(1),p.max(99999)])],email:["",p.required],website:["",p.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(a){return new(a||r)(b(G),b(Z),b(C))};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs"]],viewQuery:function(a,o){if(a&1&&R(Ae,7),a&2){let s;q(s=z())&&(o.reactiveFormModal=s.first)}},standalone:!1,features:[B([C])],decls:24,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(a,o){if(a&1){let s=O();t(0,"po-widget",1)(1,"form",2),i(2,"po-input",3)(3,"po-email",4)(4,"po-input",5)(5,"po-number",6)(6,"po-url",7),t(7,"div",8)(8,"po-button",9),E("p-click",function(){return g(s),x(o.saveForm())}),n()()(),t(9,"po-modal",10,0)(11,"div",8),i(12,"po-info",11),n(),i(13,"hr"),t(14,"div",8),i(15,"po-info",12)(16,"po-info",13),n(),i(17,"hr"),t(18,"div",8),i(19,"po-info",14)(20,"po-info",15),n()()(),t(21,"div",16)(22,"po-radio-group",17),w("ngModelChange",function(h){return g(s),k(o.theme,h)||(o.theme=h),x(h)}),E("p-change",function(h){return g(s),x(o.changeTheme(h))}),n(),t(23,"po-radio-group",18),w("ngModelChange",function(h){return g(s),k(o.a11yLevel,h)||(o.a11yLevel=h),x(h)}),E("p-change",function(h){return g(s),x(o.changeA11yLevel(h))}),n()()}a&2&&(m(),d("formGroup",o.reactiveForm),m(7),d("p-disabled",!o.reactiveForm.valid),m(),d("p-primary-action",o.modalPrimaryAction),m(3),d("p-value",o.reactiveForm.controls.name.value),m(3),d("p-value",o.reactiveForm.controls.address.value),m(),d("p-value",o.reactiveForm.controls.number.value),m(3),d("p-value",o.reactiveForm.controls.email.value),m(),d("p-value",o.reactiveForm.controls.website.value),m(2),L("ngModel",o.theme),d("p-options",o.themeOptions),m(),L("ngModel",o.a11yLevel),d("p-options",o.a11yLevelOptions))},dependencies:[K,H,Q,J,X,Y,ae,le,me,de,pe,se,ce,re,ue],encapsulation:2})}return r})();var Ce=r=>({"docs-sample-code-tabs":r}),ge=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Theme Labs"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-widget p-title="Example">
  <form [formGroup]="reactiveForm">
    <po-input class="po-lg-6" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name"> </po-input>

    <po-email class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-input class="po-lg-4 po-md-8" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address">
    </po-input>

    <po-number class="po-lg-2 po-md-4" formControlName="number" p-label="Number" p-clean> </po-number>

    <po-url class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>

    <div class="po-row">
      <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
    </div>
  </form>

  <po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
    <div class="po-row">
      <po-info class="po-md-12" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>
    </div>

    <hr />

    <div class="po-row">
      <po-info class="po-md-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

      <po-info class="po-md-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
    </div>

    <hr />

    <div class="po-row">
      <po-info class="po-md-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

      <po-info class="po-md-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
    </div>
  </po-modal>
</po-widget>

<div class="po-row po-mt-3">
  <po-radio-group
    class="po-md-6"
    name="theme"
    p-label="Theme Type"
    [(ngModel)]="theme"
    [p-options]="themeOptions"
    (p-change)="changeTheme($event)"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-6"
    name="a11ylevel"
    p-label="Acessibility Level"
    [(ngModel)]="a11yLevel"
    [p-options]="a11yLevelOptions"
    (p-change)="changeA11yLevel($event)"
  >
  </po-radio-group>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-theme-labs/sample-po-theme-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import {
  PoRadioGroupOption,
  PoThemeA11yEnum,
  PoThemeService,
  PoThemeTypeEnum,
  poThemeDefaultActions,
  poThemeDefaultActionsDark,
  poThemeDefaultDarkValues,
  poThemeDefaultFeedback,
  poThemeDefaultFeedbackDark,
  poThemeDefaultLightValues,
  poThemeDefaultNeutrals
} from '@po-ui/ng-components';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
@Component({
  selector: 'sample-po-theme-labs',
  templateUrl: './sample-po-theme-labs.component.html',
  providers: [PoThemeService],
  standalone: false
})
export class SamplePoThemeLabsComponent implements OnInit, OnDestroy {
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;

  a11yLevel: PoThemeA11yEnum;
  a11yLevelStorage = 'po-a11y-AAA';
  reactiveForm: UntypedFormGroup;
  theme: PoThemeTypeEnum = 0;
  themeStorage = 'po-theme-default';

  private a11yChangeListenerAAA: any;
  private a11yChangeListenerAA: any;
  private themeChangeListenerDark: any;
  private themeChangeListenerDefault: any;

  readonly a11yLevelOptions: Array<PoRadioGroupOption> = [
    { label: 'AA', value: 'AA' },
    { label: 'AAA', value: 'AAA' }
  ];

  readonly themeOptions: Array<PoRadioGroupOption> = [
    { label: 'Light', value: 0 },
    { label: 'Dark', value: 1 }
  ];

  readonly modalPrimaryAction: PoModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  poThemeSample = {
    name: 'po-theme',
    type: {
      light: {
        color: {
          brand: {
            '01': {
              lightest: '#f2eaf6',
              lighter: '#d9c2e5',
              light: '#bd94d1',
              base: '#753399',
              dark: '#5b1c7d',
              darker: '#400e58',
              darkest: '#260538'
            },
            '02': {
              base: '#b92f72'
            },
            '03': {
              base: '#ffd464'
            }
          },
          action: {
            ...poThemeDefaultActions,
            disabled: 'var(--color-neutral-mid-40)'
          },
          feedback: {
            ...poThemeDefaultFeedback,
            info: {
              ...poThemeDefaultFeedback.info,
              base: '#0079b8'
            }
          },
          neutral: {
            ...poThemeDefaultNeutrals
          }
        },
        onRoot: {
          ...poThemeDefaultLightValues.onRoot,
          '--color-page-background-color-page': 'var(--color-neutral-light-05)'
        },
        perComponent: {
          ...poThemeDefaultLightValues.perComponent
        }
      },
      dark: {
        color: {
          brand: {
            '01': {
              darkest: '#f2eaf6',
              darker: '#d9c2e5',
              dark: '#bd94d1',
              base: '#753399',
              light: '#5b1c7d',
              lighter: '#400e58',
              lightest: '#260538'
            },
            '02': {
              base: '#b92f72'
            },
            '03': {
              base: '#ffd464'
            }
          },
          action: {
            ...poThemeDefaultActionsDark,
            disabled: 'var(--color-neutral-mid-40)'
          },
          feedback: {
            ...poThemeDefaultFeedbackDark,
            info: {
              ...poThemeDefaultFeedbackDark.info,
              base: '#0079b8'
            }
          },
          neutral: {
            light: {
              '00': '#1c1c1c',
              '05': '#202020',
              '10': '#2b2b2b',
              '20': '#3b3b3b',
              '30': '#5a5a5a'
            },
            mid: {
              '40': '#7c7c7c',
              '60': '#a1a1a1'
            },
            dark: {
              '70': '#c1c1c1',
              '80': '#d9d9d9',
              '90': '#eeeeee',
              '95': '#fbfbfb'
            }
          }
        },
        onRoot: {
          ...poThemeDefaultDarkValues.onRoot,
          '--color-page-background-color-page': 'var(--color-neutral-light-05)'
        },
        perComponent: {
          ...poThemeDefaultDarkValues.perComponent
        }
      }
    },
    active: PoThemeTypeEnum.light
  };

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: UntypedFormBuilder,
    private poTheme: PoThemeService
  ) {
    const _poTheme = this.poTheme.applyTheme();
    this.a11yLevel = this.poTheme.getA11yLevel();

    if (!_poTheme) {
      this.poTheme.setTheme(this.poThemeSample, this.theme, this.a11yLevel);
      this.theme = this.poThemeSample.active;
    } else {
      this.theme = _poTheme.active || 0;
    }
    this.createReactiveForm();

    if (this.a11yLevel === 'AA') {
      this.poTheme.setA11yDefaultSizeSmall(true);
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('po-ui-theme')) {
      this.themeStorage = localStorage.getItem('po-ui-theme');
    }

    this.theme = this.themeStorage === 'po-theme-default' ? 0 : 1;
    this.changeTheme(this.theme, false);

    if (localStorage.getItem('po-ui-a11y')) {
      this.a11yLevelStorage = localStorage.getItem('po-ui-a11y');
    }

    this.a11yLevel = this.a11yLevelStorage === 'po-a11y-AAA' ? PoThemeA11yEnum.AAA : PoThemeA11yEnum.AA;
    this.changeA11yLevel(this.a11yLevel, false);

    this.themeChangeListenerDefault = () => {
      this.changeTheme(0, false);
      this.theme = 0;
    };

    this.themeChangeListenerDark = () => {
      this.changeTheme(1, false);
      this.theme = 1;
    };

    this.a11yChangeListenerAAA = () => {
      this.changeA11yLevel(PoThemeA11yEnum.AAA, false);
      this.a11yLevel = PoThemeA11yEnum.AAA;
    };

    this.a11yChangeListenerAA = () => {
      this.changeA11yLevel(PoThemeA11yEnum.AA, false);
      this.a11yLevel = PoThemeA11yEnum.AA;
    };

    window.addEventListener('po-a11y-AA', this.a11yChangeListenerAA);
    window.addEventListener('po-a11y-AAA', this.a11yChangeListenerAAA);
    window.addEventListener('po-theme-default', this.themeChangeListenerDefault);
    window.addEventListener('po-theme-dark', this.themeChangeListenerDark);
  }

  ngOnDestroy(): void {
    window.removeEventListener('po-theme-default', this.themeChangeListenerDefault);
    window.removeEventListener('po-theme-dark', this.themeChangeListenerDark);

    window.removeEventListener('po-a11y-AA', this.a11yChangeListenerAA);
    window.removeEventListener('po-a11y-AAA', this.a11yChangeListenerAAA);
  }

  changeA11yLevel(value: PoThemeA11yEnum, dispatchEvent = true) {
    this.poTheme.setCurrentThemeA11y(value);
    value === 'AA'
      ? localStorage.setItem('po-ui-a11y', 'po-a11y-AA')
      : localStorage.setItem('po-ui-a11y', 'po-a11y-AAA');

    if (value === PoThemeA11yEnum.AA) {
      this.poTheme.setA11yDefaultSizeSmall(true);
    }

    if (dispatchEvent) {
      window.dispatchEvent(new Event('po-sample-change-a11y'));
    }
  }

  changeTheme(value: number, dispatchEvent = true) {
    this.poTheme.setTheme(this.poThemeSample, value, this.a11yLevel);
    value === 1
      ? localStorage.setItem('po-ui-theme', 'po-theme-dark')
      : localStorage.setItem('po-ui-theme', 'po-theme-default');
    if (dispatchEvent) {
      window.dispatchEvent(new Event('po-sample-change-theme'));
    }

    if (this.a11yLevel === 'AA') {
      this.poTheme.setA11yDefaultSizeSmall(true);
    }
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-theme-labs"),n(),i(23,"hr")),a&2&&(m(5),V("po-icon "+o.sampleCodeButtonIcon),m(),j(" ",o.sampleCodeButtonLabel,""),m(),d("ngClass",W(4,Ce,o.hideSampleCodeTabs)))},dependencies:[U,Ee,P,D,be],encapsulation:2})}return r})();var xe=(()=>{class r{static \u0275fac=function(a){return new(a||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-doc"]],standalone:!1,decls:1059,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/theme-service"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoThemeColorCategorical"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(a,o){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoThemeModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo respons\xE1vel por fornecer servi\xE7os relacionados ao tema PO."),n()(),t(7,"h3",3),e(8,"Services"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoThemeService"),n()(),t(12,"div",2)(13,"p"),e(14,"O "),t(15,"code"),e(16,"PoThemeService"),n(),e(17," possibilita a personaliza\xE7\xE3o das cores do tema padr\xE3o do "),t(18,"code"),e(19,"PO-UI"),n(),e(20,", permitindo a altera\xE7\xE3o dos valores das vari\xE1veis de estilo usadas no CSS padr\xE3o."),n(),t(21,"blockquote")(22,"p"),e(23,"Para saber mais sobre como customizar o tema padr\xE3o verifique o item "),t(24,"a",6),e(25,"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI"),n(),e(26," na aba "),t(27,"code"),e(28,"Guias"),n(),e(29,"."),n()(),t(30,"blockquote")(31,"p"),e(32,"Obs.: N\xE3o est\xE1 documentado aqui e n\xE3o indicamos a customiza\xE7\xE3o das cores de 'feedback' por motivos de acessibilidade e usabilidade."),n()()(),t(33,"h3",7),e(34,"M\xE9todos"),n(),t(35,"table",8)(36,"tr",9)(37,"th",10)(38,"div",11)(39,"h4")(40,"span",12),e(41," setTheme "),n()()()()(),t(42,"tr",13)(43,"td",13)(44,"p"),e(45,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),n(),t(46,"p"),e(47,"Este m\xE9todo configura o tema do componente com base no objeto "),t(48,"code"),e(49,"themeConfig"),n(),e(50," fornecido, no "),t(51,"code"),e(52,"themeType"),n(),e(53," e no "),t(54,"code"),e(55,"a11yLevel"),n(),e(56,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),n()()()(),t(57,"h5")(58,"b"),e(59,"Par\xE2metros"),n()(),t(60,"table",14)(61,"tr",15)(62,"th",16),e(63,"Nome"),n(),t(64,"th",16),e(65,"Tipo"),n(),t(66,"th",16),e(67,"Descri\xE7\xE3o"),n()(),t(68,"tr",9)(69,"td",17),e(70," themeConfig"),n(),t(71,"td",18)(72,"code",19),e(73," PoTheme "),n()(),t(74,"td",13)(75,"p"),e(76,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),n()()(),t(77,"tr",9)(78,"td",17),e(79," themeType"),n(),t(80,"td",18)(81,"code",19),e(82," PoThemeTypeEnum "),n()(),t(83,"td",13)(84,"p"),e(85,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),n()()(),t(86,"tr",9)(87,"td",17),e(88," a11yLevel"),n(),t(89,"td",18)(90,"code",19),e(91," PoThemeA11yEnum "),n()(),t(92,"td",13)(93,"p"),e(94,"(Opcional) N\xEDvel de acessibilidade dos componentes, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),n()()(),t(95,"tr",9)(96,"td",17),e(97," persistPreference"),n(),t(98,"td",18)(99,"code",19),e(100," boolean "),n()(),t(101,"td",13)(102,"p"),e(103,"(Opcional) Define se a prefer\xEAncia de tema deve ser salva no localStorage para persist\xEAncia. "),t(104,"code"),e(105,"true"),n(),e(106," para salvar, "),t(107,"code"),e(108,"false"),n(),e(109," para n\xE3o salvar."),n()()()(),i(110,"br"),t(111,"table",8)(112,"tr",9)(113,"th",10)(114,"div",11)(115,"h4")(116,"span",12),e(117," getA11yLevel "),n()()()()(),t(118,"tr",13)(119,"td",13)(120,"p"),e(121,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),t(122,"code"),e(123,"AAA"),n(),e(124," como padr\xE3o."),n()()()(),t(125,"h5")(126,"b"),e(127,"Retorno"),n()(),t(128,"table",14)(129,"tr",15)(130,"th",16),e(131,"Tipo"),n(),t(132,"th",16),e(133,"Descri\xE7\xE3o"),n()(),t(134,"tr",9)(135,"td",18)(136,"code",19),e(137,"PoThemeA11yEnum"),n()(),t(138,"td",13)(139,"p"),e(140,"O n\xEDvel de acessibilidade, que pode ser "),t(141,"code"),e(142,"AA"),n(),e(143," ou "),t(144,"code"),e(145,"AAA"),n(),e(146,"."),n()()()(),i(147,"br"),t(148,"table",8)(149,"tr",9)(150,"th",10)(151,"div",11)(152,"h4")(153,"span",12),e(154," setA11yDefaultSizeSmall "),n()()()()(),t(155,"tr",13)(156,"td",13)(157,"p"),e(158,"Define o tamanho "),t(159,"code"),e(160,"small"),n(),e(161,` como padr\xE3o para componentes de formul\xE1rio que n\xE3o possuem um tamanho definido.
Essa configura\xE7\xE3o \xE9 aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),t(162,"code"),e(163,"AA"),n(),e(164,`.
Caso contr\xE1rio, o tamanho padr\xE3o ser\xE1 `),t(165,"code"),e(166,"medium"),n(),e(167,"."),n()()()(),t(168,"h5")(169,"b"),e(170,"Par\xE2metros"),n()(),t(171,"table",14)(172,"tr",15)(173,"th",16),e(174,"Nome"),n(),t(175,"th",16),e(176,"Tipo"),n(),t(177,"th",16),e(178,"Descri\xE7\xE3o"),n()(),t(179,"tr",9)(180,"td",17),e(181," enable"),n(),t(182,"td",18)(183,"code",19),e(184," boolean "),n()(),t(185,"td",13)(186,"p"),e(187,"Habilita ou desabilita o tamanho "),t(188,"code"),e(189,"small"),n(),e(190," globalmente."),n()()()(),i(191,"br"),t(192,"table",8)(193,"tr",9)(194,"th",10)(195,"div",11)(196,"h4")(197,"span",12),e(198," persistThemeActive "),n()()()()(),t(199,"tr",13)(200,"td",13)(201,"p"),e(202,"Persiste e define o tema do aplicativo com base nos dados armazenados."),n(),t(203,"p"),e(204,"Este m\xE9todo recupera os dados do tema armazenados e os aplica ao aplicativo."),n()()()(),t(205,"h5")(206,"b"),e(207,"Retorno"),n()(),t(208,"table",14)(209,"tr",15)(210,"th",16),e(211,"Tipo"),n(),t(212,"th",16),e(213,"Descri\xE7\xE3o"),n()(),t(214,"tr",9)(215,"td",18)(216,"code",19),e(217,"PoTheme"),n()(),t(218,"td",13)(219,"p"),e(220,"Recupera o tema armazenado."),n()()()(),i(221,"br"),t(222,"table",8)(223,"tr",9)(224,"th",10)(225,"div",11)(226,"h4")(227,"span",12),e(228," changeCurrentThemeType "),n()()()()(),t(229,"tr",13)(230,"td",13)(231,"p"),e(232,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),n(),t(233,"p"),e(234,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),n()()()(),t(235,"h5")(236,"b"),e(237,"Par\xE2metros"),n()(),t(238,"table",14)(239,"tr",15)(240,"th",16),e(241,"Nome"),n(),t(242,"th",16),e(243,"Tipo"),n(),t(244,"th",16),e(245,"Descri\xE7\xE3o"),n()(),t(246,"tr",9)(247,"td",17),e(248," themeType"),n(),t(249,"td",18)(250,"code",19),e(251," PoThemeTypeEnum "),n()(),t(252,"td",13)(253,"p"),e(254,"O tipo de tema a ser aplicado, light ou dark."),n()()()(),i(255,"br"),t(256,"table",8)(257,"tr",9)(258,"th",10)(259,"div",11)(260,"h4")(261,"span",12),e(262," cleanThemeActive "),n()()()()(),t(263,"tr",13)(264,"td",13)(265,"p"),e(266,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),n()()()(),t(267,"h5")(268,"b"),e(269,"Par\xE2metros"),n()(),t(270,"table",14)(271,"tr",15)(272,"th",16),e(273,"Nome"),n(),t(274,"th",16),e(275,"Tipo"),n(),t(276,"th",16),e(277,"Descri\xE7\xE3o"),n()(),t(278,"tr",9)(279,"td",17),e(280," persistPreference"),n(),t(281,"td",18)(282,"code",19),e(283," boolean "),n()(),t(284,"td",13)(285,"p"),e(286,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),t(287,"code"),e(288,"true"),n(),e(289," para remover, "),t(290,"code"),e(291,"false"),n(),e(292," para manter."),n()()()(),i(293,"br"),t(294,"table",8)(295,"tr",9)(296,"th",10)(297,"div",11)(298,"h4")(299,"span",12),e(300," getThemeActive "),n()()()()(),t(301,"tr",13)(302,"td",13)(303,"p"),e(304,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),t(305,"code"),e(306,"localStorage"),n(),e(307,"."),n()()()(),t(308,"h5")(309,"b"),e(310,"Retorno"),n()(),t(311,"table",14)(312,"tr",15)(313,"th",16),e(314,"Tipo"),n(),t(315,"th",16),e(316,"Descri\xE7\xE3o"),n()(),t(317,"tr",9)(318,"td",18)(319,"code",19),e(320,"PoTheme"),n()(),t(321,"td",13)(322,"p"),e(323,"Tema ativo."),n()()()(),i(324,"br"),t(325,"table",8)(326,"tr",9)(327,"th",10)(328,"div",11)(329,"h4")(330,"span",12),e(331," setDefaultTheme "),n()()()()(),t(332,"tr",13)(333,"td",13)(334,"p"),e(335,'Define o tema atual como o tema "PoUI Padr\xE3o".'),n()()()(),t(336,"h5")(337,"b"),e(338,"Par\xE2metros"),n()(),t(339,"table",14)(340,"tr",15)(341,"th",16),e(342,"Nome"),n(),t(343,"th",16),e(344,"Tipo"),n(),t(345,"th",16),e(346,"Descri\xE7\xE3o"),n()(),t(347,"tr",9)(348,"td",17),e(349," type"),n(),t(350,"td",18)(351,"code",19),e(352," PoThemeTypeEnum "),n()(),t(353,"td",13)(354,"p"),e(355,"O tipo de Tema a ser aplicado, light / dark."),n()()()(),i(356,"br"),t(357,"table",8)(358,"tr",9)(359,"th",10)(360,"div",11)(361,"h4")(362,"span",12),e(363," setThemeType "),n()()()()(),t(364,"tr",13)(365,"td",13)(366,"p"),e(367,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),n()()()(),t(368,"h5")(369,"b"),e(370,"Par\xE2metros"),n()(),t(371,"table",14)(372,"tr",15)(373,"th",16),e(374,"Nome"),n(),t(375,"th",16),e(376,"Tipo"),n(),t(377,"th",16),e(378,"Descri\xE7\xE3o"),n()(),t(379,"tr",9)(380,"td",17),e(381," theme"),n(),t(382,"td",18)(383,"code",19),e(384," PoTheme "),n()(),t(385,"td",13)(386,"p"),e(387,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(388,"tr",9)(389,"td",17),e(390," themeType"),n(),t(391,"td",18)(392,"code",19),e(393," PoThemeTypeEnum "),n()(),t(394,"td",13)(395,"p"),e(396,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(397,"br"),t(398,"table",8)(399,"tr",9)(400,"th",10)(401,"div",11)(402,"h4")(403,"span",12),e(404," setCurrentThemeType "),n()()()()(),t(405,"tr",13)(406,"td",13)(407,"p"),e(408,"Define o tipo (light/dark) para um tema j\xE1 ativo."),n()()()(),t(409,"h5")(410,"b"),e(411,"Par\xE2metros"),n()(),t(412,"table",14)(413,"tr",15)(414,"th",16),e(415,"Nome"),n(),t(416,"th",16),e(417,"Tipo"),n(),t(418,"th",16),e(419,"Descri\xE7\xE3o"),n()(),t(420,"tr",9)(421,"td",17),e(422," themeType"),n(),t(423,"td",18)(424,"code",19),e(425," PoThemeTypeEnum "),n()(),t(426,"td",13)(427,"p"),e(428,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(429,"br"),t(430,"table",8)(431,"tr",9)(432,"th",10)(433,"div",11)(434,"h4")(435,"span",12),e(436," setThemeA11y "),n()()()()(),t(437,"tr",13)(438,"td",13)(439,"p"),e(440,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),n()()()(),t(441,"h5")(442,"b"),e(443,"Par\xE2metros"),n()(),t(444,"table",14)(445,"tr",15)(446,"th",16),e(447,"Nome"),n(),t(448,"th",16),e(449,"Tipo"),n(),t(450,"th",16),e(451,"Descri\xE7\xE3o"),n()(),t(452,"tr",9)(453,"td",17),e(454," theme"),n(),t(455,"td",18)(456,"code",19),e(457," PoTheme "),n()(),t(458,"td",13)(459,"p"),e(460,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(461,"tr",9)(462,"td",17),e(463," a11y"),n(),t(464,"td",18)(465,"code",19),e(466," PoThemeA11yEnum "),n()(),t(467,"td",13)(468,"p"),e(469,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(470,"br"),t(471,"table",8)(472,"tr",9)(473,"th",10)(474,"div",11)(475,"h4")(476,"span",12),e(477," setCurrentThemeA11y "),n()()()()(),t(478,"tr",13)(479,"td",13)(480,"p"),e(481,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),n()()()(),t(482,"h5")(483,"b"),e(484,"Par\xE2metros"),n()(),t(485,"table",14)(486,"tr",15)(487,"th",16),e(488,"Nome"),n(),t(489,"th",16),e(490,"Tipo"),n(),t(491,"th",16),e(492,"Descri\xE7\xE3o"),n()(),t(493,"tr",9)(494,"td",17),e(495," a11y"),n(),t(496,"td",18)(497,"code",19),e(498," PoThemeA11yEnum "),n()(),t(499,"td",13)(500,"p"),e(501,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(502,"br"),t(503,"h3"),e(504,"Interfaces"),n(),t(505,"h4",20)(506,"code",5),e(507,"PoThemeColor"),n()(),t(508,"div",2)(509,"p"),e(510,"Interface para representar as cores do tema."),n()(),t(511,"h4",7),e(512,"Propriedades"),n(),t(513,"table",14)(514,"tr",15)(515,"th",16),e(516,"Nome"),n(),t(517,"th",16),e(518,"Tipo"),n(),t(519,"th",16),e(520,"Descri\xE7\xE3o"),n()(),t(521,"tr",9)(522,"td",17)(523,"div",11)(524,"span",12),e(525," action"),i(526,"br"),n()()(),t(527,"td",18)(528,"code",21),e(529,"PoThemeColorAction"),n()(),t(530,"td",13)(531,"em")(532,"strong"),e(533,"(opcional)"),n()(),t(534,"p"),e(535,"Cores da Action a serem aplicadas."),n(),t(536,"p"),e(537,"Exemplo de uso:"),n(),t(538,"pre")(539,"code",22),e(540,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(541,"tr",9)(542,"td",17)(543,"div",11)(544,"span",12),e(545," brand"),i(546,"br"),n()()(),t(547,"td",18)(548,"code",23),e(549,"poThemeColorBrand"),n()(),t(550,"td",13)(551,"em")(552,"strong"),e(553,"(opcional)"),n()(),t(554,"p"),e(555,"Cores da Brand a serem aplicadas."),n(),t(556,"p"),e(557,"Exemplo de uso:"),n(),t(558,"pre")(559,"code",24),e(560,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),n()()()(),t(561,"tr",9)(562,"td",17)(563,"div",11)(564,"span",12),e(565," categorical"),i(566,"br"),n()()(),t(567,"td",18)(568,"code",25),e(569,"PoThemeColorCategorical"),n()(),t(570,"td",13)(571,"em")(572,"strong"),e(573,"(opcional)"),n()(),t(574,"p"),e(575,"Cores da Categorical a serem aplicadas."),n(),t(576,"p"),e(577,"Exemplo de uso:"),n(),t(578,"pre")(579,"code",24),e(580,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(581,"tr",9)(582,"td",17)(583,"div",11)(584,"span",12),e(585," categorical-overlay"),i(586,"br"),n()()(),t(587,"td",18)(588,"code",25),e(589,"PoThemeColorCategorical"),n()(),t(590,"td",13)(591,"em")(592,"strong"),e(593,"(opcional)"),n()(),t(594,"p"),e(595,"Cores da Categorical a serem aplicadas."),n(),t(596,"p"),e(597,"Exemplo de uso:"),n(),t(598,"pre")(599,"code",24),e(600,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(601,"tr",9)(602,"td",17)(603,"div",11)(604,"span",12),e(605," neutral"),i(606,"br"),n()()(),t(607,"td",18)(608,"code",26),e(609,"PoThemeColorNeutral"),n()(),t(610,"td",13)(611,"em")(612,"strong"),e(613,"(opcional)"),n()(),t(614,"p"),e(615,"Cores Neutrals a serem aplicadas."),n(),t(616,"p"),e(617,"Exemplo de uso:"),n(),t(618,"pre")(619,"code",24),e(620,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),n()()()()(),t(621,"h4",20)(622,"code",5),e(623,"PoThemeColorAction"),n()(),t(624,"div",2)(625,"p"),e(626,"Interface para as cores de a\xE7\xE3o do tema."),n()(),t(627,"h4",7),e(628,"Propriedades"),n(),t(629,"table",14)(630,"tr",15)(631,"th",16),e(632,"Nome"),n(),t(633,"th",16),e(634,"Tipo"),n(),t(635,"th",16),e(636,"Descri\xE7\xE3o"),n()(),t(637,"tr",9)(638,"td",17)(639,"div",11)(640,"span",12),e(641," default"),i(642,"br"),n()()(),t(643,"td",18)(644,"code",27),e(645,"string"),n()(),t(646,"td",13)(647,"em")(648,"strong"),e(649,"(opcional)"),n()(),t(650,"p"),e(651,"Cores da Action 'Default'."),n(),t(652,"p"),e(653,"Exemplo de uso:"),n(),t(654,"pre")(655,"code",24),e(656,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),n()()()(),t(657,"tr",9)(658,"td",17)(659,"div",11)(660,"span",12),e(661," disabled"),i(662,"br"),n()()(),t(663,"td",18)(664,"code",27),e(665,"string"),n()(),t(666,"td",13)(667,"em")(668,"strong"),e(669,"(opcional)"),n()(),t(670,"p"),e(671,"Cores da Action de 'disabled'."),n(),t(672,"p"),e(673,"Exemplo de uso:"),n(),t(674,"pre")(675,"code",24),e(676,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),n()()()(),t(677,"tr",9)(678,"td",17)(679,"div",11)(680,"span",12),e(681," focus"),i(682,"br"),n()()(),t(683,"td",18)(684,"code",27),e(685,"string"),n()(),t(686,"td",13)(687,"em")(688,"strong"),e(689,"(opcional)"),n()(),t(690,"p"),e(691,"Cores da Action para 'focus'."),n(),t(692,"p"),e(693,"Exemplo de uso:"),n(),t(694,"pre")(695,"code",24),e(696,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(697,"tr",9)(698,"td",17)(699,"div",11)(700,"span",12),e(701," hover"),i(702,"br"),n()()(),t(703,"td",18)(704,"code",27),e(705,"string"),n()(),t(706,"td",13)(707,"em")(708,"strong"),e(709,"(opcional)"),n()(),t(710,"p"),e(711,"Cores da Action para 'hover'."),n(),t(712,"p"),e(713,"Exemplo de uso:"),n(),t(714,"pre")(715,"code",24),e(716,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),n()()()(),t(717,"tr",9)(718,"td",17)(719,"div",11)(720,"span",12),e(721," pressed"),i(722,"br"),n()()(),t(723,"td",18)(724,"code",27),e(725,"string"),n()(),t(726,"td",13)(727,"em")(728,"strong"),e(729,"(opcional)"),n()(),t(730,"p"),e(731,"Cores da Action para 'pressed'."),n(),t(732,"p"),e(733,"Exemplo de uso:"),n(),t(734,"pre")(735,"code",24),e(736,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),n()()()()(),t(737,"h4",20)(738,"code",5),e(739,"PoThemeColorNeutral"),n()(),t(740,"div",2)(741,"p"),e(742,"Interface para as cores neutras do tema."),n()(),t(743,"h4",7),e(744,"Propriedades"),n(),t(745,"table",14)(746,"tr",15)(747,"th",16),e(748,"Nome"),n(),t(749,"th",16),e(750,"Tipo"),n(),t(751,"th",16),e(752,"Descri\xE7\xE3o"),n()(),t(753,"tr",9)(754,"td",17)(755,"div",11)(756,"span",12),e(757," dark"),i(758,"br"),n()()(),t(759,"td",18)(760,"code",28),e(761,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),n()(),t(762,"td",13)(763,"em")(764,"strong"),e(765,"(opcional)"),n()(),t(766,"p"),e(767,"Cores Neutrals do tipo 'dark'."),n(),t(768,"p"),e(769,"Exemplo de uso:"),n(),t(770,"pre")(771,"code",24),e(772,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),n()()()(),t(773,"tr",9)(774,"td",17)(775,"div",11)(776,"span",12),e(777," light"),i(778,"br"),n()()(),t(779,"td",18)(780,"code",29),e(781,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),n()(),t(782,"td",13)(783,"em")(784,"strong"),e(785,"(opcional)"),n()(),t(786,"p"),e(787,"Cores Neutrals do tipo 'light'."),n(),t(788,"p"),e(789,"Exemplo de uso:"),n(),t(790,"pre")(791,"code",24),e(792,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),n()()()(),t(793,"tr",9)(794,"td",17)(795,"div",11)(796,"span",12),e(797," mid"),i(798,"br"),n()()(),t(799,"td",18)(800,"code",30),e(801,`{ '40'?: string; '60'?: string;
}`),n()(),t(802,"td",13)(803,"em")(804,"strong"),e(805,"(opcional)"),n()(),t(806,"p"),e(807,"Cores Neutrals do tipo 'mid'."),n(),t(808,"p"),e(809,"Exemplo de uso:"),n(),t(810,"pre")(811,"code",24),e(812,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),n()()()()(),t(813,"h4",20)(814,"code",5),e(815,"PoThemeTokens"),n()(),t(816,"div",2)(817,"p"),e(818,"Interface para o tema da aplica\xE7\xE3o."),n()(),t(819,"h4",20)(820,"code",5),e(821,"PoThemeToken"),n()(),t(822,"div",2)(823,"p"),e(824,"Interface para os tokens do Tema."),n()(),t(825,"h4",7),e(826,"Propriedades"),n(),t(827,"table",14)(828,"tr",15)(829,"th",16),e(830,"Nome"),n(),t(831,"th",16),e(832,"Tipo"),n(),t(833,"th",16),e(834,"Descri\xE7\xE3o"),n()(),t(835,"tr",9)(836,"td",17)(837,"div",11)(838,"span",12),e(839," color"),i(840,"br"),n()()(),t(841,"td",18)(842,"code",31),e(843,"PoThemeColor"),n()(),t(844,"td",13)(845,"em")(846,"strong"),e(847,"(opcional)"),n()(),t(848,"p"),e(849,"Tokens do tipo 'color'"),n()()(),t(850,"tr",9)(851,"td",17)(852,"div",11)(853,"span",12),e(854," onRoot"),i(855,"br"),n()()(),t(856,"td",18)(857,"code",32),e(858,"DynamicProperties"),n()(),t(859,"td",13)(860,"em")(861,"strong"),e(862,"(opcional)"),n()(),t(863,"p"),e(864,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),t(865,"code"),e(866,":root"),n()(),t(867,"p"),e(868,"Exemplo de uso:"),n(),t(869,"pre")(870,"code",24),e(871,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),n()()()(),t(872,"tr",9)(873,"td",17)(874,"div",11)(875,"span",12),e(876," perComponent"),i(877,"br"),n()()(),t(878,"td",18)(879,"code",32),e(880,"DynamicProperties"),n()(),t(881,"td",13)(882,"em")(883,"strong"),e(884,"(opcional)"),n()(),t(885,"p"),e(886,"Tokens do tipo 'perComponent'"),n(),t(887,"p"),e(888,"Exemplo de uso:"),n(),t(889,"pre")(890,"code",24),e(891,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),n()()()()(),t(892,"h4",20)(893,"code",5),e(894,"PoTheme"),n()(),t(895,"div",2)(896,"p"),e(897,"Interface para o m\xE9todo "),t(898,"code"),e(899,"setTheme()"),n(),e(900,"."),n()(),t(901,"h4",7),e(902,"Propriedades"),n(),t(903,"table",14)(904,"tr",15)(905,"th",16),e(906,"Nome"),n(),t(907,"th",16),e(908,"Tipo"),n(),t(909,"th",16),e(910,"Descri\xE7\xE3o"),n()(),t(911,"tr",9)(912,"td",17)(913,"div",11)(914,"span",12),e(915," active"),i(916,"br"),n()()(),t(917,"td",18)(918,"code",33),e(919,"PoThemeTypeEnum "),n(),t(920,"code",34),e(921," PoThemeActive"),n()(),t(922,"td",13)(923,"em")(924,"strong"),e(925,"(opcional)"),n()(),t(926,"p"),e(927,"Tipo e n\xEDvel de acessibilidade de tema ativo"),n()()(),t(928,"tr",9)(929,"td",17)(930,"div",11)(931,"span",12),e(932," name"),i(933,"br"),n()()(),t(934,"td",18)(935,"code",27),e(936,"string"),n()(),t(937,"td",13)(938,"p"),e(939,`Nome para o tema:
Ex.: default, totvs, sunset...`),n()()(),t(940,"tr",9)(941,"td",17)(942,"div",11)(943,"span",12),e(944," type"),i(945,"br"),n()()(),t(946,"td",18)(947,"code",35),e(948,"PoThemeType "),n(),t(949,"code",36),e(950," Array<PoThemeType>"),n()(),t(951,"td",13)(952,"p"),e(953,"Tipo de tema:"),n(),t(954,"ul")(955,"li"),e(956,"light"),n(),t(957,"li"),e(958,"dark"),n()()()()(),t(959,"h3"),e(960,"Enums"),n(),t(961,"h4",4)(962,"code",5),e(963,"PoThemeA11yEnum"),n()(),t(964,"div",2)(965,"p"),e(966,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),n(),t(967,"pre")(968,"code"),e(969,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),n()()(),t(970,"h4",7),e(971,"Propriedades"),n(),t(972,"table",14)(973,"tr",15)(974,"th",16),e(975,"Nome"),n(),t(976,"th",16),e(977,"Descri\xE7\xE3o"),n()(),t(978,"tr",9)(979,"td",17)(980,"div",11)(981,"span",12),e(982," AA"),i(983,"br"),n()()(),t(984,"td",13)(985,"p"),e(986,"N\xEDvel de acessibilidade AA."),n(),t(987,"ul")(988,"li"),e(989,"Define a espessura do "),t(990,"code"),e(991,"outline"),n(),e(992," para "),t(993,"strong"),e(994,"2px"),n(),e(995,"."),n(),t(996,"li"),e(997,"Disponibiliza o tamanho "),t(998,"code"),e(999,"small"),n(),e(1e3,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),n()()()(),t(1001,"tr",9)(1002,"td",17)(1003,"div",11)(1004,"span",12),e(1005," AAA"),i(1006,"br"),n()()(),t(1007,"td",13)(1008,"p"),e(1009,"N\xEDvel de acessibilidade AAA."),n(),t(1010,"ul")(1011,"li"),e(1012,"Define a espessura do "),t(1013,"code"),e(1014,"outline"),n(),e(1015," para "),t(1016,"strong"),e(1017,"4px"),n(),e(1018,"."),n(),t(1019,"li"),e(1020,"N\xE3o disponibiliza o tamanho "),t(1021,"code"),e(1022,"small"),n(),e(1023," para componentes de formul\xE1rio."),n()()()()(),t(1024,"h4",4)(1025,"code",5),e(1026,"PoThemeTypeEnum"),n()(),t(1027,"div",2)(1028,"p"),e(1029,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),n(),t(1030,"pre")(1031,"code"),e(1032,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),n()()(),t(1033,"h4",7),e(1034,"Propriedades"),n(),t(1035,"table",14)(1036,"tr",15)(1037,"th",16),e(1038,"Nome"),n(),t(1039,"th",16),e(1040,"Descri\xE7\xE3o"),n()(),t(1041,"tr",9)(1042,"td",17)(1043,"div",11)(1044,"span",12),e(1045," light"),i(1046,"br"),n()()(),t(1047,"td",13)(1048,"p"),e(1049,"Define o tema como claro."),n()()(),t(1050,"tr",9)(1051,"td",17)(1052,"div",11)(1053,"span",12),e(1054," dark"),i(1055,"br"),n()()(),t(1056,"td",13)(1057,"p"),e(1058,"Define o tema como escuro."),n()()()()())},encapsulation:2})}return r})();var fe=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||r)(b($),b(ee))};static \u0275cmp=S({type:r,selectors:[["ng-component"]],standalone:!1,decls:6,vars:4,consts:[["p-title","Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return o.changeTab("doc")}),i(3,"sample-po-theme-doc"),n(),t(4,"po-tab",3),E("p-click",function(){return o.changeTab("web")}),i(5,"sample-po-theme-labs-view"),n()()()),a&2&&(d("p-actions",o.actions),m(2),d("p-active",o.activeTab==="doc"),m(2),d("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[he,P,D,ge,xe],encapsulation:2})}return r})();var Le=[{path:"",component:fe}],Te=(()=>{class r{static \u0275fac=function(a){return new(a||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[F.forChild(Le),F]})}return r})();var Xe=(()=>{class r{static \u0275fac=function(a){return new(a||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[Se,Te]})}return r})();export{Xe as DocPoThemeModule};
