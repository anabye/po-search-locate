import{o as Ee,p as Se}from"./chunk-MMZVQUBQ.js";import{A as I,Ab as D,B as C,Db as ue,F as oe,Fa as me,Ga as de,I as re,La as pe,Pa as se,Wa as ce,g as v,ja as le,nb as he,t as te,u as ne,v as ie,w as _,x as N,y as ae,z as M,zb as P}from"./chunk-522XRIZO.js";import{Ac as J,Ba as V,Bc as K,Ec as X,Fa as t,Fc as Y,Ga as n,Ha as i,Jc as Z,La as O,M as A,Ma as E,Oc as $,Qc as ee,Sc as F,T as g,U as x,Ua as R,Va as q,Wa as z,Ya as e,_a as j,a as c,ab as L,b as u,bb as k,cb as w,db as B,fb as W,ha as m,ia as b,oa as S,pa as y,rb as G,uc as p,vb as U,xc as H,ya as d,yc as Q}from"./chunk-WFKG4FNY.js";var Ae=["reactiveFormData"],be=(()=>{class r{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},ne),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},_),{info:u(c({},_.info),{base:"#0079b8"})}),neutral:c({},ie)},onRoot:u(c({},N.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},N.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},ae),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},M),{info:u(c({},M.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:u(c({},I.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},I.perComponent)}},active:te.light};constructor(l,o,a){this.cdr=l,this.fb=o,this.poTheme=a;let s=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),s?this.theme=s.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm(),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,!1),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?v.AAA:v.AA,this.changeA11yLevel(this.a11yLevel,!1),this.themeChangeListenerDefault=()=>{this.changeTheme(0,!1),this.theme=0},this.themeChangeListenerDark=()=>{this.changeTheme(1,!1),this.theme=1},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(v.AAA,!1),this.a11yLevel=v.AAA},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(v.AA,!1),this.a11yLevel=v.AA},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark)}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA)}changeA11yLevel(l,o=!0){this.poTheme.setCurrentThemeA11y(l),l==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),l===v.AA&&this.poTheme.setA11yDefaultSizeSmall(!0),o&&window.dispatchEvent(new Event("po-sample-change-a11y"))}changeTheme(l,o=!0){this.poTheme.setTheme(this.poThemeSample,l,this.a11yLevel),l===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),o&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",p.compose([p.required,p.minLength(5),p.maxLength(30)])],address:["",p.compose([p.required,p.minLength(5),p.maxLength(50)])],number:["",p.compose([p.required,p.min(1),p.max(99999)])],email:["",p.required],website:["",p.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(o){return new(o||r)(b(G),b(Z),b(C))};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs"]],viewQuery:function(o,a){if(o&1&&R(Ae,7),o&2){let s;q(s=z())&&(a.reactiveFormModal=s.first)}},standalone:!1,features:[B([C])],decls:24,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(o,a){if(o&1){let s=O();t(0,"po-widget",1)(1,"form",2),i(2,"po-input",3)(3,"po-email",4)(4,"po-input",5)(5,"po-number",6)(6,"po-url",7),t(7,"div",8)(8,"po-button",9),E("p-click",function(){return g(s),x(a.saveForm())}),n()()(),t(9,"po-modal",10,0)(11,"div",8),i(12,"po-info",11),n(),i(13,"hr"),t(14,"div",8),i(15,"po-info",12)(16,"po-info",13),n(),i(17,"hr"),t(18,"div",8),i(19,"po-info",14)(20,"po-info",15),n()()(),t(21,"div",16)(22,"po-radio-group",17),w("ngModelChange",function(h){return g(s),k(a.theme,h)||(a.theme=h),x(h)}),E("p-change",function(h){return g(s),x(a.changeTheme(h))}),n(),t(23,"po-radio-group",18),w("ngModelChange",function(h){return g(s),k(a.a11yLevel,h)||(a.a11yLevel=h),x(h)}),E("p-change",function(h){return g(s),x(a.changeA11yLevel(h))}),n()()}o&2&&(m(),d("formGroup",a.reactiveForm),m(7),d("p-disabled",!a.reactiveForm.valid),m(),d("p-primary-action",a.modalPrimaryAction),m(3),d("p-value",a.reactiveForm.controls.name.value),m(3),d("p-value",a.reactiveForm.controls.address.value),m(),d("p-value",a.reactiveForm.controls.number.value),m(3),d("p-value",a.reactiveForm.controls.email.value),m(),d("p-value",a.reactiveForm.controls.website.value),m(2),L("ngModel",a.theme),d("p-options",a.themeOptions),m(),L("ngModel",a.a11yLevel),d("p-options",a.a11yLevelOptions))},dependencies:[K,H,Q,J,X,Y,oe,le,me,de,pe,se,ce,re,ue],encapsulation:2})}return r})();var Ce=r=>({"docs-sample-code-tabs":r}),ge=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,a){o&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Theme Labs"),n(),t(4,"a",2),E("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-widget p-title="Example">
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
`),n()()()()(),t(21,"div",10),i(22,"sample-po-theme-labs"),n(),i(23,"hr")),o&2&&(m(5),V("po-icon "+a.sampleCodeButtonIcon),m(),j(" ",a.sampleCodeButtonLabel,""),m(),d("ngClass",W(4,Ce,a.hideSampleCodeTabs)))},dependencies:[U,Ee,P,D,be],encapsulation:2})}return r})();var xe=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-doc"]],standalone:!1,decls:1074,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/theme-service"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoThemeColorCategorical"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(o,a){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoThemeModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo respons\xE1vel por fornecer servi\xE7os relacionados ao tema PO."),n()(),t(7,"h3",3),e(8,"Services"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoThemeService"),n()(),t(12,"div",2)(13,"p"),e(14,"O "),t(15,"code"),e(16,"PoThemeService"),n(),e(17," possibilita a personaliza\xE7\xE3o das cores do tema padr\xE3o do "),t(18,"code"),e(19,"PO-UI"),n(),e(20,", permitindo a altera\xE7\xE3o dos valores das vari\xE1veis de estilo usadas no CSS padr\xE3o."),n(),t(21,"blockquote")(22,"p"),e(23,"Para saber mais sobre como customizar o tema padr\xE3o verifique o item "),t(24,"a",6),e(25,"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI"),n(),e(26," na aba "),t(27,"code"),e(28,"Guias"),n(),e(29,"."),n()(),t(30,"blockquote")(31,"p"),e(32,"Obs.: N\xE3o est\xE1 documentado aqui e n\xE3o indicamos a customiza\xE7\xE3o das cores de 'feedback' por motivos de acessibilidade e usabilidade."),n()()(),t(33,"h3",7),e(34,"M\xE9todos"),n(),t(35,"table",8)(36,"tr",9)(37,"th",10)(38,"div",11)(39,"h4")(40,"span",12),e(41," setTheme "),n()()()()(),t(42,"tr",13)(43,"td",13)(44,"p"),e(45,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),n(),t(46,"p"),e(47,"Este m\xE9todo configura o tema do componente com base no objeto "),t(48,"code"),e(49,"themeConfig"),n(),e(50," fornecido, no "),t(51,"code"),e(52,"themeType"),n(),e(53," e no "),t(54,"code"),e(55,"a11yLevel"),n(),e(56,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),n()()()(),t(57,"h5")(58,"b"),e(59,"Par\xE2metros"),n()(),t(60,"table",14)(61,"tr",15)(62,"th",16),e(63,"Nome"),n(),t(64,"th",16),e(65,"Tipo"),n(),t(66,"th",16),e(67,"Descri\xE7\xE3o"),n()(),t(68,"tr",9)(69,"td",17),e(70," themeConfig"),n(),t(71,"td",18)(72,"code",19),e(73," PoTheme "),n()(),t(74,"td",13)(75,"p"),e(76,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),n()()(),t(77,"tr",9)(78,"td",17),e(79," themeType"),n(),t(80,"td",18)(81,"code",19),e(82," PoThemeTypeEnum "),n()(),t(83,"td",13)(84,"p"),e(85,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),n()()(),t(86,"tr",9)(87,"td",17),e(88," a11yLevel"),n(),t(89,"td",18)(90,"code",19),e(91," PoThemeA11yEnum "),n()(),t(92,"td",13)(93,"p"),e(94,"(Opcional) N\xEDvel de acessibilidade dos componentes, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),n()()(),t(95,"tr",9)(96,"td",17),e(97," persistPreference"),n(),t(98,"td",18)(99,"code",19),e(100," boolean "),n()(),t(101,"td",13)(102,"p"),e(103,"(Opcional) Define se a prefer\xEAncia de tema deve ser salva no localStorage para persist\xEAncia. "),t(104,"code"),e(105,"true"),n(),e(106," para salvar, "),t(107,"code"),e(108,"false"),n(),e(109," para n\xE3o salvar."),n()()()(),i(110,"br"),t(111,"table",8)(112,"tr",9)(113,"th",10)(114,"div",11)(115,"h4")(116,"span",12),e(117," getA11yLevel "),n()()()()(),t(118,"tr",13)(119,"td",13)(120,"p"),e(121,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),t(122,"code"),e(123,"AAA"),n(),e(124," como padr\xE3o."),n()()()(),t(125,"h5")(126,"b"),e(127,"Retorno"),n()(),t(128,"table",14)(129,"tr",15)(130,"th",16),e(131,"Tipo"),n(),t(132,"th",16),e(133,"Descri\xE7\xE3o"),n()(),t(134,"tr",9)(135,"td",18)(136,"code",19),e(137,"PoThemeA11yEnum"),n()(),t(138,"td",13)(139,"p"),e(140,"O n\xEDvel de acessibilidade, que pode ser "),t(141,"code"),e(142,"AA"),n(),e(143," ou "),t(144,"code"),e(145,"AAA"),n(),e(146,"."),n()()()(),i(147,"br"),t(148,"table",8)(149,"tr",9)(150,"th",10)(151,"div",11)(152,"h4")(153,"span",12),e(154," setA11yDefaultSizeSmall "),n()()()()(),t(155,"tr",13)(156,"td",13)(157,"p"),e(158,"Define o tamanho "),t(159,"code"),e(160,"small"),n(),e(161,` como padr\xE3o para componentes de formul\xE1rio que n\xE3o possuem um tamanho definido.
Essa configura\xE7\xE3o \xE9 aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),t(162,"code"),e(163,"AA"),n(),e(164,`.
Caso contr\xE1rio, o tamanho padr\xE3o ser\xE1 `),t(165,"code"),e(166,"medium"),n(),e(167,"."),n(),t(168,"blockquote")(169,"p"),e(170,"Para garantir que o tamanho "),t(171,"code"),e(172,"small"),n(),e(173,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),t(174,"strong"),e(175,"junto com o n\xEDvel de acessibilidade "),t(176,"code"),e(177,"AA"),n(),e(178," na inicializa\xE7\xE3o da aplica\xE7\xE3o"),n(),e(179,`.
Se for aplicada em tempo de execu\xE7\xE3o, ser\xE1 necess\xE1rio recarregar a aplica\xE7\xE3o (`),t(180,"code"),e(181,"reload"),n(),e(182,`)
para que os estilos sejam aplicados corretamente.`),n()()()()(),t(183,"h5")(184,"b"),e(185,"Par\xE2metros"),n()(),t(186,"table",14)(187,"tr",15)(188,"th",16),e(189,"Nome"),n(),t(190,"th",16),e(191,"Tipo"),n(),t(192,"th",16),e(193,"Descri\xE7\xE3o"),n()(),t(194,"tr",9)(195,"td",17),e(196," enable"),n(),t(197,"td",18)(198,"code",19),e(199," boolean "),n()(),t(200,"td",13)(201,"p"),e(202,"Habilita ou desabilita o tamanho "),t(203,"code"),e(204,"small"),n(),e(205," globalmente."),n()()()(),i(206,"br"),t(207,"table",8)(208,"tr",9)(209,"th",10)(210,"div",11)(211,"h4")(212,"span",12),e(213," persistThemeActive "),n()()()()(),t(214,"tr",13)(215,"td",13)(216,"p"),e(217,"Persiste e define o tema do aplicativo com base nos dados armazenados."),n(),t(218,"p"),e(219,"Este m\xE9todo recupera os dados do tema armazenados e os aplica ao aplicativo."),n()()()(),t(220,"h5")(221,"b"),e(222,"Retorno"),n()(),t(223,"table",14)(224,"tr",15)(225,"th",16),e(226,"Tipo"),n(),t(227,"th",16),e(228,"Descri\xE7\xE3o"),n()(),t(229,"tr",9)(230,"td",18)(231,"code",19),e(232,"PoTheme"),n()(),t(233,"td",13)(234,"p"),e(235,"Recupera o tema armazenado."),n()()()(),i(236,"br"),t(237,"table",8)(238,"tr",9)(239,"th",10)(240,"div",11)(241,"h4")(242,"span",12),e(243," changeCurrentThemeType "),n()()()()(),t(244,"tr",13)(245,"td",13)(246,"p"),e(247,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),n(),t(248,"p"),e(249,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),n()()()(),t(250,"h5")(251,"b"),e(252,"Par\xE2metros"),n()(),t(253,"table",14)(254,"tr",15)(255,"th",16),e(256,"Nome"),n(),t(257,"th",16),e(258,"Tipo"),n(),t(259,"th",16),e(260,"Descri\xE7\xE3o"),n()(),t(261,"tr",9)(262,"td",17),e(263," themeType"),n(),t(264,"td",18)(265,"code",19),e(266," PoThemeTypeEnum "),n()(),t(267,"td",13)(268,"p"),e(269,"O tipo de tema a ser aplicado, light ou dark."),n()()()(),i(270,"br"),t(271,"table",8)(272,"tr",9)(273,"th",10)(274,"div",11)(275,"h4")(276,"span",12),e(277," cleanThemeActive "),n()()()()(),t(278,"tr",13)(279,"td",13)(280,"p"),e(281,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),n()()()(),t(282,"h5")(283,"b"),e(284,"Par\xE2metros"),n()(),t(285,"table",14)(286,"tr",15)(287,"th",16),e(288,"Nome"),n(),t(289,"th",16),e(290,"Tipo"),n(),t(291,"th",16),e(292,"Descri\xE7\xE3o"),n()(),t(293,"tr",9)(294,"td",17),e(295," persistPreference"),n(),t(296,"td",18)(297,"code",19),e(298," boolean "),n()(),t(299,"td",13)(300,"p"),e(301,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),t(302,"code"),e(303,"true"),n(),e(304," para remover, "),t(305,"code"),e(306,"false"),n(),e(307," para manter."),n()()()(),i(308,"br"),t(309,"table",8)(310,"tr",9)(311,"th",10)(312,"div",11)(313,"h4")(314,"span",12),e(315," getThemeActive "),n()()()()(),t(316,"tr",13)(317,"td",13)(318,"p"),e(319,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),t(320,"code"),e(321,"localStorage"),n(),e(322,"."),n()()()(),t(323,"h5")(324,"b"),e(325,"Retorno"),n()(),t(326,"table",14)(327,"tr",15)(328,"th",16),e(329,"Tipo"),n(),t(330,"th",16),e(331,"Descri\xE7\xE3o"),n()(),t(332,"tr",9)(333,"td",18)(334,"code",19),e(335,"PoTheme"),n()(),t(336,"td",13)(337,"p"),e(338,"Tema ativo."),n()()()(),i(339,"br"),t(340,"table",8)(341,"tr",9)(342,"th",10)(343,"div",11)(344,"h4")(345,"span",12),e(346," setDefaultTheme "),n()()()()(),t(347,"tr",13)(348,"td",13)(349,"p"),e(350,'Define o tema atual como o tema "PoUI Padr\xE3o".'),n()()()(),t(351,"h5")(352,"b"),e(353,"Par\xE2metros"),n()(),t(354,"table",14)(355,"tr",15)(356,"th",16),e(357,"Nome"),n(),t(358,"th",16),e(359,"Tipo"),n(),t(360,"th",16),e(361,"Descri\xE7\xE3o"),n()(),t(362,"tr",9)(363,"td",17),e(364," type"),n(),t(365,"td",18)(366,"code",19),e(367," PoThemeTypeEnum "),n()(),t(368,"td",13)(369,"p"),e(370,"O tipo de Tema a ser aplicado, light / dark."),n()()()(),i(371,"br"),t(372,"table",8)(373,"tr",9)(374,"th",10)(375,"div",11)(376,"h4")(377,"span",12),e(378," setThemeType "),n()()()()(),t(379,"tr",13)(380,"td",13)(381,"p"),e(382,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),n()()()(),t(383,"h5")(384,"b"),e(385,"Par\xE2metros"),n()(),t(386,"table",14)(387,"tr",15)(388,"th",16),e(389,"Nome"),n(),t(390,"th",16),e(391,"Tipo"),n(),t(392,"th",16),e(393,"Descri\xE7\xE3o"),n()(),t(394,"tr",9)(395,"td",17),e(396," theme"),n(),t(397,"td",18)(398,"code",19),e(399," PoTheme "),n()(),t(400,"td",13)(401,"p"),e(402,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(403,"tr",9)(404,"td",17),e(405," themeType"),n(),t(406,"td",18)(407,"code",19),e(408," PoThemeTypeEnum "),n()(),t(409,"td",13)(410,"p"),e(411,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(412,"br"),t(413,"table",8)(414,"tr",9)(415,"th",10)(416,"div",11)(417,"h4")(418,"span",12),e(419," setCurrentThemeType "),n()()()()(),t(420,"tr",13)(421,"td",13)(422,"p"),e(423,"Define o tipo (light/dark) para um tema j\xE1 ativo."),n()()()(),t(424,"h5")(425,"b"),e(426,"Par\xE2metros"),n()(),t(427,"table",14)(428,"tr",15)(429,"th",16),e(430,"Nome"),n(),t(431,"th",16),e(432,"Tipo"),n(),t(433,"th",16),e(434,"Descri\xE7\xE3o"),n()(),t(435,"tr",9)(436,"td",17),e(437," themeType"),n(),t(438,"td",18)(439,"code",19),e(440," PoThemeTypeEnum "),n()(),t(441,"td",13)(442,"p"),e(443,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(444,"br"),t(445,"table",8)(446,"tr",9)(447,"th",10)(448,"div",11)(449,"h4")(450,"span",12),e(451," setThemeA11y "),n()()()()(),t(452,"tr",13)(453,"td",13)(454,"p"),e(455,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),n()()()(),t(456,"h5")(457,"b"),e(458,"Par\xE2metros"),n()(),t(459,"table",14)(460,"tr",15)(461,"th",16),e(462,"Nome"),n(),t(463,"th",16),e(464,"Tipo"),n(),t(465,"th",16),e(466,"Descri\xE7\xE3o"),n()(),t(467,"tr",9)(468,"td",17),e(469," theme"),n(),t(470,"td",18)(471,"code",19),e(472," PoTheme "),n()(),t(473,"td",13)(474,"p"),e(475,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(476,"tr",9)(477,"td",17),e(478," a11y"),n(),t(479,"td",18)(480,"code",19),e(481," PoThemeA11yEnum "),n()(),t(482,"td",13)(483,"p"),e(484,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(485,"br"),t(486,"table",8)(487,"tr",9)(488,"th",10)(489,"div",11)(490,"h4")(491,"span",12),e(492," setCurrentThemeA11y "),n()()()()(),t(493,"tr",13)(494,"td",13)(495,"p"),e(496,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),n()()()(),t(497,"h5")(498,"b"),e(499,"Par\xE2metros"),n()(),t(500,"table",14)(501,"tr",15)(502,"th",16),e(503,"Nome"),n(),t(504,"th",16),e(505,"Tipo"),n(),t(506,"th",16),e(507,"Descri\xE7\xE3o"),n()(),t(508,"tr",9)(509,"td",17),e(510," a11y"),n(),t(511,"td",18)(512,"code",19),e(513," PoThemeA11yEnum "),n()(),t(514,"td",13)(515,"p"),e(516,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(517,"br"),t(518,"h3"),e(519,"Interfaces"),n(),t(520,"h4",20)(521,"code",5),e(522,"PoThemeColor"),n()(),t(523,"div",2)(524,"p"),e(525,"Interface para representar as cores do tema."),n()(),t(526,"h4",7),e(527,"Propriedades"),n(),t(528,"table",14)(529,"tr",15)(530,"th",16),e(531,"Nome"),n(),t(532,"th",16),e(533,"Tipo"),n(),t(534,"th",16),e(535,"Descri\xE7\xE3o"),n()(),t(536,"tr",9)(537,"td",17)(538,"div",11)(539,"span",12),e(540," action"),i(541,"br"),n()()(),t(542,"td",18)(543,"code",21),e(544,"PoThemeColorAction"),n()(),t(545,"td",13)(546,"em")(547,"strong"),e(548,"(opcional)"),n()(),t(549,"p"),e(550,"Cores da Action a serem aplicadas."),n(),t(551,"p"),e(552,"Exemplo de uso:"),n(),t(553,"pre")(554,"code",22),e(555,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(556,"tr",9)(557,"td",17)(558,"div",11)(559,"span",12),e(560," brand"),i(561,"br"),n()()(),t(562,"td",18)(563,"code",23),e(564,"poThemeColorBrand"),n()(),t(565,"td",13)(566,"em")(567,"strong"),e(568,"(opcional)"),n()(),t(569,"p"),e(570,"Cores da Brand a serem aplicadas."),n(),t(571,"p"),e(572,"Exemplo de uso:"),n(),t(573,"pre")(574,"code",24),e(575,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),n()()()(),t(576,"tr",9)(577,"td",17)(578,"div",11)(579,"span",12),e(580," categorical"),i(581,"br"),n()()(),t(582,"td",18)(583,"code",25),e(584,"PoThemeColorCategorical"),n()(),t(585,"td",13)(586,"em")(587,"strong"),e(588,"(opcional)"),n()(),t(589,"p"),e(590,"Cores da Categorical a serem aplicadas."),n(),t(591,"p"),e(592,"Exemplo de uso:"),n(),t(593,"pre")(594,"code",24),e(595,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(596,"tr",9)(597,"td",17)(598,"div",11)(599,"span",12),e(600," categorical-overlay"),i(601,"br"),n()()(),t(602,"td",18)(603,"code",25),e(604,"PoThemeColorCategorical"),n()(),t(605,"td",13)(606,"em")(607,"strong"),e(608,"(opcional)"),n()(),t(609,"p"),e(610,"Cores da Categorical a serem aplicadas."),n(),t(611,"p"),e(612,"Exemplo de uso:"),n(),t(613,"pre")(614,"code",24),e(615,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(616,"tr",9)(617,"td",17)(618,"div",11)(619,"span",12),e(620," neutral"),i(621,"br"),n()()(),t(622,"td",18)(623,"code",26),e(624,"PoThemeColorNeutral"),n()(),t(625,"td",13)(626,"em")(627,"strong"),e(628,"(opcional)"),n()(),t(629,"p"),e(630,"Cores Neutrals a serem aplicadas."),n(),t(631,"p"),e(632,"Exemplo de uso:"),n(),t(633,"pre")(634,"code",24),e(635,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),n()()()()(),t(636,"h4",20)(637,"code",5),e(638,"PoThemeColorAction"),n()(),t(639,"div",2)(640,"p"),e(641,"Interface para as cores de a\xE7\xE3o do tema."),n()(),t(642,"h4",7),e(643,"Propriedades"),n(),t(644,"table",14)(645,"tr",15)(646,"th",16),e(647,"Nome"),n(),t(648,"th",16),e(649,"Tipo"),n(),t(650,"th",16),e(651,"Descri\xE7\xE3o"),n()(),t(652,"tr",9)(653,"td",17)(654,"div",11)(655,"span",12),e(656," default"),i(657,"br"),n()()(),t(658,"td",18)(659,"code",27),e(660,"string"),n()(),t(661,"td",13)(662,"em")(663,"strong"),e(664,"(opcional)"),n()(),t(665,"p"),e(666,"Cores da Action 'Default'."),n(),t(667,"p"),e(668,"Exemplo de uso:"),n(),t(669,"pre")(670,"code",24),e(671,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),n()()()(),t(672,"tr",9)(673,"td",17)(674,"div",11)(675,"span",12),e(676," disabled"),i(677,"br"),n()()(),t(678,"td",18)(679,"code",27),e(680,"string"),n()(),t(681,"td",13)(682,"em")(683,"strong"),e(684,"(opcional)"),n()(),t(685,"p"),e(686,"Cores da Action de 'disabled'."),n(),t(687,"p"),e(688,"Exemplo de uso:"),n(),t(689,"pre")(690,"code",24),e(691,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),n()()()(),t(692,"tr",9)(693,"td",17)(694,"div",11)(695,"span",12),e(696," focus"),i(697,"br"),n()()(),t(698,"td",18)(699,"code",27),e(700,"string"),n()(),t(701,"td",13)(702,"em")(703,"strong"),e(704,"(opcional)"),n()(),t(705,"p"),e(706,"Cores da Action para 'focus'."),n(),t(707,"p"),e(708,"Exemplo de uso:"),n(),t(709,"pre")(710,"code",24),e(711,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(712,"tr",9)(713,"td",17)(714,"div",11)(715,"span",12),e(716," hover"),i(717,"br"),n()()(),t(718,"td",18)(719,"code",27),e(720,"string"),n()(),t(721,"td",13)(722,"em")(723,"strong"),e(724,"(opcional)"),n()(),t(725,"p"),e(726,"Cores da Action para 'hover'."),n(),t(727,"p"),e(728,"Exemplo de uso:"),n(),t(729,"pre")(730,"code",24),e(731,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),n()()()(),t(732,"tr",9)(733,"td",17)(734,"div",11)(735,"span",12),e(736," pressed"),i(737,"br"),n()()(),t(738,"td",18)(739,"code",27),e(740,"string"),n()(),t(741,"td",13)(742,"em")(743,"strong"),e(744,"(opcional)"),n()(),t(745,"p"),e(746,"Cores da Action para 'pressed'."),n(),t(747,"p"),e(748,"Exemplo de uso:"),n(),t(749,"pre")(750,"code",24),e(751,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),n()()()()(),t(752,"h4",20)(753,"code",5),e(754,"PoThemeColorNeutral"),n()(),t(755,"div",2)(756,"p"),e(757,"Interface para as cores neutras do tema."),n()(),t(758,"h4",7),e(759,"Propriedades"),n(),t(760,"table",14)(761,"tr",15)(762,"th",16),e(763,"Nome"),n(),t(764,"th",16),e(765,"Tipo"),n(),t(766,"th",16),e(767,"Descri\xE7\xE3o"),n()(),t(768,"tr",9)(769,"td",17)(770,"div",11)(771,"span",12),e(772," dark"),i(773,"br"),n()()(),t(774,"td",18)(775,"code",28),e(776,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),n()(),t(777,"td",13)(778,"em")(779,"strong"),e(780,"(opcional)"),n()(),t(781,"p"),e(782,"Cores Neutrals do tipo 'dark'."),n(),t(783,"p"),e(784,"Exemplo de uso:"),n(),t(785,"pre")(786,"code",24),e(787,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),n()()()(),t(788,"tr",9)(789,"td",17)(790,"div",11)(791,"span",12),e(792," light"),i(793,"br"),n()()(),t(794,"td",18)(795,"code",29),e(796,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),n()(),t(797,"td",13)(798,"em")(799,"strong"),e(800,"(opcional)"),n()(),t(801,"p"),e(802,"Cores Neutrals do tipo 'light'."),n(),t(803,"p"),e(804,"Exemplo de uso:"),n(),t(805,"pre")(806,"code",24),e(807,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),n()()()(),t(808,"tr",9)(809,"td",17)(810,"div",11)(811,"span",12),e(812," mid"),i(813,"br"),n()()(),t(814,"td",18)(815,"code",30),e(816,`{ '40'?: string; '60'?: string;
}`),n()(),t(817,"td",13)(818,"em")(819,"strong"),e(820,"(opcional)"),n()(),t(821,"p"),e(822,"Cores Neutrals do tipo 'mid'."),n(),t(823,"p"),e(824,"Exemplo de uso:"),n(),t(825,"pre")(826,"code",24),e(827,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),n()()()()(),t(828,"h4",20)(829,"code",5),e(830,"PoThemeTokens"),n()(),t(831,"div",2)(832,"p"),e(833,"Interface para o tema da aplica\xE7\xE3o."),n()(),t(834,"h4",20)(835,"code",5),e(836,"PoThemeToken"),n()(),t(837,"div",2)(838,"p"),e(839,"Interface para os tokens do Tema."),n()(),t(840,"h4",7),e(841,"Propriedades"),n(),t(842,"table",14)(843,"tr",15)(844,"th",16),e(845,"Nome"),n(),t(846,"th",16),e(847,"Tipo"),n(),t(848,"th",16),e(849,"Descri\xE7\xE3o"),n()(),t(850,"tr",9)(851,"td",17)(852,"div",11)(853,"span",12),e(854," color"),i(855,"br"),n()()(),t(856,"td",18)(857,"code",31),e(858,"PoThemeColor"),n()(),t(859,"td",13)(860,"em")(861,"strong"),e(862,"(opcional)"),n()(),t(863,"p"),e(864,"Tokens do tipo 'color'"),n()()(),t(865,"tr",9)(866,"td",17)(867,"div",11)(868,"span",12),e(869," onRoot"),i(870,"br"),n()()(),t(871,"td",18)(872,"code",32),e(873,"DynamicProperties"),n()(),t(874,"td",13)(875,"em")(876,"strong"),e(877,"(opcional)"),n()(),t(878,"p"),e(879,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),t(880,"code"),e(881,":root"),n()(),t(882,"p"),e(883,"Exemplo de uso:"),n(),t(884,"pre")(885,"code",24),e(886,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),n()()()(),t(887,"tr",9)(888,"td",17)(889,"div",11)(890,"span",12),e(891," perComponent"),i(892,"br"),n()()(),t(893,"td",18)(894,"code",32),e(895,"DynamicProperties"),n()(),t(896,"td",13)(897,"em")(898,"strong"),e(899,"(opcional)"),n()(),t(900,"p"),e(901,"Tokens do tipo 'perComponent'"),n(),t(902,"p"),e(903,"Exemplo de uso:"),n(),t(904,"pre")(905,"code",24),e(906,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),n()()()()(),t(907,"h4",20)(908,"code",5),e(909,"PoTheme"),n()(),t(910,"div",2)(911,"p"),e(912,"Interface para o m\xE9todo "),t(913,"code"),e(914,"setTheme()"),n(),e(915,"."),n()(),t(916,"h4",7),e(917,"Propriedades"),n(),t(918,"table",14)(919,"tr",15)(920,"th",16),e(921,"Nome"),n(),t(922,"th",16),e(923,"Tipo"),n(),t(924,"th",16),e(925,"Descri\xE7\xE3o"),n()(),t(926,"tr",9)(927,"td",17)(928,"div",11)(929,"span",12),e(930," active"),i(931,"br"),n()()(),t(932,"td",18)(933,"code",33),e(934,"PoThemeTypeEnum "),n(),t(935,"code",34),e(936," PoThemeActive"),n()(),t(937,"td",13)(938,"em")(939,"strong"),e(940,"(opcional)"),n()(),t(941,"p"),e(942,"Tipo e n\xEDvel de acessibilidade de tema ativo"),n()()(),t(943,"tr",9)(944,"td",17)(945,"div",11)(946,"span",12),e(947," name"),i(948,"br"),n()()(),t(949,"td",18)(950,"code",27),e(951,"string"),n()(),t(952,"td",13)(953,"p"),e(954,`Nome para o tema:
Ex.: default, totvs, sunset...`),n()()(),t(955,"tr",9)(956,"td",17)(957,"div",11)(958,"span",12),e(959," type"),i(960,"br"),n()()(),t(961,"td",18)(962,"code",35),e(963,"PoThemeType "),n(),t(964,"code",36),e(965," Array<PoThemeType>"),n()(),t(966,"td",13)(967,"p"),e(968,"Tipo de tema:"),n(),t(969,"ul")(970,"li"),e(971,"light"),n(),t(972,"li"),e(973,"dark"),n()()()()(),t(974,"h3"),e(975,"Enums"),n(),t(976,"h4",4)(977,"code",5),e(978,"PoThemeA11yEnum"),n()(),t(979,"div",2)(980,"p"),e(981,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),n(),t(982,"pre")(983,"code"),e(984,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),n()()(),t(985,"h4",7),e(986,"Propriedades"),n(),t(987,"table",14)(988,"tr",15)(989,"th",16),e(990,"Nome"),n(),t(991,"th",16),e(992,"Descri\xE7\xE3o"),n()(),t(993,"tr",9)(994,"td",17)(995,"div",11)(996,"span",12),e(997," AA"),i(998,"br"),n()()(),t(999,"td",13)(1e3,"p"),e(1001,"N\xEDvel de acessibilidade AA."),n(),t(1002,"ul")(1003,"li"),e(1004,"Define a espessura do "),t(1005,"code"),e(1006,"outline"),n(),e(1007," para "),t(1008,"strong"),e(1009,"2px"),n(),e(1010,"."),n(),t(1011,"li"),e(1012,"Disponibiliza o tamanho "),t(1013,"code"),e(1014,"small"),n(),e(1015,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),n()()()(),t(1016,"tr",9)(1017,"td",17)(1018,"div",11)(1019,"span",12),e(1020," AAA"),i(1021,"br"),n()()(),t(1022,"td",13)(1023,"p"),e(1024,"N\xEDvel de acessibilidade AAA."),n(),t(1025,"ul")(1026,"li"),e(1027,"Define a espessura do "),t(1028,"code"),e(1029,"outline"),n(),e(1030," para "),t(1031,"strong"),e(1032,"4px"),n(),e(1033,"."),n(),t(1034,"li"),e(1035,"N\xE3o disponibiliza o tamanho "),t(1036,"code"),e(1037,"small"),n(),e(1038," para componentes de formul\xE1rio."),n()()()()(),t(1039,"h4",4)(1040,"code",5),e(1041,"PoThemeTypeEnum"),n()(),t(1042,"div",2)(1043,"p"),e(1044,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),n(),t(1045,"pre")(1046,"code"),e(1047,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),n()()(),t(1048,"h4",7),e(1049,"Propriedades"),n(),t(1050,"table",14)(1051,"tr",15)(1052,"th",16),e(1053,"Nome"),n(),t(1054,"th",16),e(1055,"Descri\xE7\xE3o"),n()(),t(1056,"tr",9)(1057,"td",17)(1058,"div",11)(1059,"span",12),e(1060," light"),i(1061,"br"),n()()(),t(1062,"td",13)(1063,"p"),e(1064,"Define o tema como claro."),n()()(),t(1065,"tr",9)(1066,"td",17)(1067,"div",11)(1068,"span",12),e(1069," dark"),i(1070,"br"),n()()(),t(1071,"td",13)(1072,"p"),e(1073,"Define o tema como escuro."),n()()()()())},encapsulation:2})}return r})();var fe=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||r)(b($),b(ee))};static \u0275cmp=S({type:r,selectors:[["ng-component"]],standalone:!1,decls:6,vars:4,consts:[["p-title","Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,a){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return a.changeTab("doc")}),i(3,"sample-po-theme-doc"),n(),t(4,"po-tab",3),E("p-click",function(){return a.changeTab("web")}),i(5,"sample-po-theme-labs-view"),n()()()),o&2&&(d("p-actions",a.actions),m(2),d("p-active",a.activeTab==="doc"),m(2),d("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[he,P,D,ge,xe],encapsulation:2})}return r})();var Le=[{path:"",component:fe}],Te=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[F.forChild(Le),F]})}return r})();var Xe=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[Se,Te]})}return r})();export{Xe as DocPoThemeModule};
