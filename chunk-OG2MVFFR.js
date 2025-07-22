import{o as g,p as J}from"./chunk-JYNCG2Y6.js";import{Ab as b,F as M,Hb as j,T as N,Za as C,nb as X,zb as S}from"./chunk-HBOGTDFH.js";import{Ba as y,Ea as n,Fa as t,Ga as i,Ka as w,L as D,La as c,M as P,Nc as _,Pc as K,Rc as V,T as q,Ta as B,U as k,Ua as R,Va as H,Wa as v,Xa as e,Za as f,cb as A,db as U,eb as x,ha as d,ia as E,oa as s,pa as T,ub as h,ya as p}from"./chunk-MIQUIDUB.js";var ae=()=>({property:"name",required:!0,showRequired:!0}),re=o=>[o],W=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,l){a&1&&i(0,"po-dynamic-form",0),a&2&&p("p-fields",x(2,re,U(1,ae)))},dependencies:[C],encapsulation:2})}return o})();var me=o=>({"docs-sample-code-tabs":o}),Y=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form Basic"),t(),n(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-dynamic-form-basic"),t(),i(23,"hr")),a&2&&(d(5),y("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",x(4,me,l.hideSampleCodeTabs)))},dependencies:[h,g,S,b,W],encapsulation:2})}return o})();var z=(()=>{class o{getCity(r){switch(r){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(r){let a={property:"cpf",visible:!0},l={property:"cnpj",visible:!0};return{fields:[r.isJuridicPerson?l:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Q=(()=>{class o{poNotification;registerService;person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:!0,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:j.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];constructor(r,a){this.poNotification=r,this.registerService=a}ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(r){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onLoadFields(r){return this.registerService.getUserDocument(r)}static \u0275fac=function(a){return new(a||o)(E(N),E(z))};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-register"]],standalone:!1,features:[A([z])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,l){if(a&1){let m=w();i(0,"po-dynamic-form",1,0)(2,"br"),n(3,"div",2)(4,"po-button",3),c("p-click",function(){q(m);let O=v(1);return l.poNotification.success("Data saved successfully!"),k(O.form.reset())}),t()()}if(a&2){let m=v(1);p("p-fields",l.fields)("p-load",l.onLoadFields.bind(l))("p-validate",l.onChangeFields.bind(l))("p-validate-fields",l.validateFields)("p-value",l.person),d(4),p("p-disabled",m==null?null:m.form.invalid)}},dependencies:[M,C],encapsulation:2})}return o})();var ce=o=>({"docs-sample-code-tabs":o}),Z=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Register"),t(),n(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  ForceBooleanComponentEnum
} from '@po-ui/ng-components';
import { PoDynamicFormRegisterService } from './sample-po-dynamic-form-register.service';

@Component({
  selector: 'sample-po-dynamic-form-register',
  templateUrl: './sample-po-dynamic-form-register.component.html',
  providers: [PoDynamicFormRegisterService],
  standalone: false
})
export class SamplePoDynamicFormRegisterComponent implements OnInit {
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password'
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', divider: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      divider: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      divider: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile'
    }
  ];

  constructor(
    public poNotification: PoNotificationService,
    private registerService: PoDynamicFormRegisterService
  ) {}

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormRegisterService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-register"),t(),i(27,"hr")),a&2&&(d(5),y("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",x(4,ce,l.hideSampleCodeTabs)))},dependencies:[h,g,S,b,Q],encapsulation:2})}return o})();var L=(()=>{class o{getCity(r){switch(r){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(r){let a={property:"cpf",visible:!0},l={property:"cnpj",visible:!0};return{fields:[r.isJuridicPerson?l:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var xe=["dynamicForm"],$=(()=>{class o{poNotification;registerService;dynamicForm;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthday")},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required.",keydown:this.onKeyDown.bind(this,"secretKey")},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:!0,gridColumns:5,gridSmColumns:12,help:"Enter or select a valid date range.",additionalHelpTooltip:"Ensure the start date is earlier than or equal to the end date.",keydown:this.onKeyDown.bind(this,"vacation")},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0,listboxControlPosition:"top"},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0,listboxControlPosition:"top"},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0,listboxControlPosition:"top"},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:j.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile",customAction:{icon:"an an-download",visible:!0},customActionClick:r=>{console.log("Iniciar download para o arquivo:",r.name)}}];constructor(r,a){this.poNotification=r,this.registerService=a}ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(r){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onKeyDown(r,a){a.code==="F9"&&this.dynamicForm.showAdditionalHelp(r)}onLoadFields(r){return this.registerService.getUserDocument(r)}static \u0275fac=function(a){return new(a||o)(E(N),E(L))};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-container"]],viewQuery:function(a,l){if(a&1&&B(xe,7),a&2){let m;R(m=H())&&(l.dynamicForm=m.first)}},standalone:!1,features:[A([L])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,l){if(a&1){let m=w();i(0,"po-dynamic-form",1,0)(2,"br"),n(3,"div",2)(4,"po-button",3),c("p-click",function(){q(m);let O=v(1);return l.poNotification.success("Data saved successfully!"),k(O.form.reset())}),t()()}if(a&2){let m=v(1);p("p-fields",l.fields)("p-load",l.onLoadFields.bind(l))("p-validate",l.onChangeFields.bind(l))("p-validate-fields",l.validateFields)("p-value",l.person),d(4),p("p-disabled",m==null?null:m.form.invalid)}},dependencies:[M,C],encapsulation:2})}return o})();var be=o=>({"docs-sample-code-tabs":o}),ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Container"),t(),n(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ForceBooleanComponentEnum,
  PoDynamicFormComponent,
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  PoUploadFile
} from '@po-ui/ng-components';
import { PoDynamicFormContainerService } from './sample-po-dynamic-form-container.service';

@Component({
  selector: 'sample-po-dynamic-form-container',
  templateUrl: './sample-po-dynamic-form-container.component.html',
  providers: [PoDynamicFormContainerService],
  standalone: false
})
export class SamplePoDynamicFormContainerComponent implements OnInit {
  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      container: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1,
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthday')
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password',
      help: 'Password must include a combination of letters and numbers.',
      additionalHelpTooltip: 'At least 5 alphabetic and 3 numeric characters are required.',
      keydown: this.onKeyDown.bind(this, 'secretKey')
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', container: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      container: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12,
      help: 'Enter or select a valid date range.',
      additionalHelpTooltip: 'Ensure the start date is earlier than or equal to the end date.',
      keydown: this.onKeyDown.bind(this, 'vacation')
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      container: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile',
      customAction: { icon: 'an an-download', visible: true },
      customActionClick: (file: PoUploadFile) => {
        console.log('Iniciar download para o arquivo:', file.name);
      }
    }
  ];

  constructor(
    public poNotification: PoNotificationService,
    private registerService: PoDynamicFormContainerService
  ) {}

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicForm.showAdditionalHelp(property);
    }
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormContainerService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-container"),t(),i(27,"hr")),a&2&&(d(5),y("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",x(4,be,l.hideSampleCodeTabs)))},dependencies:[h,g,S,b,$],encapsulation:2})}return o})();var te=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:!1,decls:4375,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,l){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2),n(5,"h3",3),e(6,"Componente"),t(),n(7,"h4",4)(8,"code",5),e(9,"PoDynamicFormComponent"),t()(),n(10,"div",2)(11,"p"),e(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),t(),n(13,"p"),e(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),t()(),n(15,"div",6)(16,"h4",7),e(17,"Seletor"),t(),n(18,"pre",8),e(19,`<po-dynamic-form
    p-auto-focus="string"
    p-components-size="string"
    p-fields="Array<PoDynamicFormField>"
    (p-form)="EventEmitter"
    p-group-form="boolean"
    p-load="string | Function"
    p-validate="string | Function"
    p-validate-fields="Array<string>"
    p-validate-on-input="boolean"
    p-value="any" >
</po-dynamic-form>
`),t()(),n(20,"h4",9),e(21,"Propriedades"),t(),n(22,"table",10)(23,"tr",11)(24,"th",12),e(25,"Nome"),t(),n(26,"th",12),e(27,"Tipo"),t(),n(28,"th",12),e(29,"Padr\xE3o"),t(),n(30,"th",12),e(31,"Descri\xE7\xE3o"),t()(),n(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),e(36," p-auto-focus"),i(37,"br"),t()()(),n(38,"td",17)(39,"code",18),e(40,"string"),t()(),n(41,"td",19),e(42,"-"),t(),n(43,"td",20)(44,"em")(45,"strong"),e(46,"(opcional)"),t()(),n(47,"p"),e(48,"Nome da propriedade, atribu\xEDda ao "),n(49,"code"),e(50,"PoDynamicFormField.property"),t(),e(51,", que iniciar\xE1 o campo com foco."),t()()(),n(52,"tr",13)(53,"td",14)(54,"div",15)(55,"span",16),e(56," p-components-size"),i(57,"br"),t()()(),n(58,"td",17)(59,"code",18),e(60,"string"),t()(),n(61,"td",19)(62,"p")(63,"code"),e(64,"medium"),t()()(),n(65,"td",20)(66,"em")(67,"strong"),e(68,"(opcional)"),t()(),n(69,"p"),e(70,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),n(71,"ul")(72,"li")(73,"code"),e(74,"small"),t(),e(75,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(76,"li")(77,"code"),e(78,"medium"),t(),e(79,": aplica a medida medium de cada componente."),t()(),n(80,"blockquote")(81,"p"),e(82,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(83,"code"),e(84,"medium"),t(),e(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(86,"a",21),e(87,"po-theme"),t(),e(88,"."),t()()()(),n(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),e(93," p-fields"),i(94,"br"),t()()(),n(95,"td",17)(96,"code",22),e(97,"Array<PoDynamicFormField>"),t()(),n(98,"td",19)(99,"p")(100,"code"),e(101,"[]"),t()()(),n(102,"td",20)(103,"p"),e(104,"Cole\xE7\xE3o de objetos que implementam a interface "),n(105,"code"),e(106,"PoDynamicFormField"),t(),e(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),t(),n(108,"blockquote")(109,"p"),e(110,"Ex: "),n(111,"code"),e(112,"[ { property: 'name' } ]"),t()()(),n(113,"p"),e(114,"Regras de tipagem e cria\xE7\xE3o dos componentes:"),t(),n(115,"ul")(116,"li"),e(117,"Caso o "),n(118,"em"),e(119,"type"),t(),e(120," informado seja "),n(121,"em"),e(122,"boolean"),t(),e(123," o componente criado ser\xE1 o "),n(124,"code"),e(125,"po-switch"),t(),e(126,"."),t(),n(127,"li"),e(128,"Caso o "),n(129,"em"),e(130,"type"),t(),e(131," informado seja "),n(132,"em"),e(133,"currency"),t(),e(134," e n\xE3o seja informado um "),n(135,"em"),e(136,"mask"),t(),e(137," ou "),n(138,"em"),e(139,"pattern"),t(),e(140," o componente criado ser\xE1 o "),n(141,"code"),e(142,"po-decimal"),t(),e(143,`,
caso seja informado um `),n(144,"em"),e(145,"mask"),t(),e(146," ou "),n(147,"em"),e(148,"pattern"),t(),e(149," o componente criado ser\xE1 o "),n(150,"code"),e(151,"po-input"),t(),e(152,"."),t(),n(153,"li"),e(154,"Caso o "),n(155,"em"),e(156,"type"),t(),e(157," informado seja "),n(158,"em"),e(159,"number"),t(),e(160," e n\xE3o seja informado um "),n(161,"em"),e(162,"mask"),t(),e(163," ou "),n(164,"em"),e(165,"pattern"),t(),e(166," o componente criado ser\xE1 o "),n(167,"code"),e(168,"po-number"),t(),e(169,`, caso seja
informado um `),n(170,"em"),e(171,"mask"),t(),e(172," ou "),n(173,"em"),e(174,"pattern"),t(),e(175," o componente criado ser\xE1 o "),n(176,"code"),e(177,"po-input"),t(),e(178,"."),t(),n(179,"li"),e(180,"Caso a lista possua a propriedade "),n(181,"code"),e(182,"options"),t(),e(183," e a mesma possua at\xE9 3 itens o componente criado ser\xE1 o "),n(184,"code"),e(185,"po-radio-group"),t(),e(186,`
ou `),n(187,"code"),e(188,"po-checkbox-group"),t(),e(189," se informar a propriedade "),n(190,"code"),e(191,"optionsMulti"),t(),e(192,"."),t(),n(193,"li"),e(194,"Caso a mesma possua 3 ou mais itens, ser\xE1 criado o componente "),n(195,"code"),e(196,"po-select"),t(),e(197," ou, "),n(198,"code"),e(199,"po-multiselect"),t(),e(200," se a propriedade "),n(201,"code"),e(202,"optionsMulti"),t(),e(203,`
for verdadeira.`),t(),n(204,"li"),e(205,"Caso o "),n(206,"em"),e(207,"type"),t(),e(208," informado seja "),n(209,"em"),e(210,"date"),t(),e(211," ou "),n(212,"em"),e(213,"datetime"),t(),e(214," o componente criado ser\xE1 o "),n(215,"code"),e(216,"po-datepicker"),t(),e(217,"."),t(),n(218,"li"),e(219,"Caso seja informado a propriedade "),n(220,"code"),e(221,"optionsService"),t(),e(222," o componente criado ser\xE1 o "),n(223,"code"),e(224,"po-combo"),t(),e(225,"."),t(),n(226,"li"),e(227,"Caso o "),n(228,"em"),e(229,"type"),t(),e(230," informado seja "),n(231,"em"),e(232,"time"),t(),e(233," o componente criado ser\xE1 um "),n(234,"code"),e(235,"po-input"),t(),e(236," podendo receber um "),n(237,"em"),e(238,"mask"),t(),e(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),n(240,"em"),e(241,"mask"),t(),e(242," o componente ser\xE1 criado com a m\xE1scara '99:99' por padr\xE3o."),t(),n(243,"li"),e(244,"Caso a lista possua a propriedade "),n(245,"code"),e(246,"rows"),t(),e(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),n(248,"code"),e(249,"po-textarea"),t(),e(250,", caso o valor da propriedade "),n(251,"code"),e(252,"rows"),t(),e(253," seja menor que 3 o componente criado ser\xE1 o "),n(254,"code"),e(255,"po-input"),t(),e(256,"."),t(),n(257,"li"),e(258,"Caso seja informada a propriedade "),n(259,"code"),e(260,"secret"),t(),e(261," o componente criado ser\xE1 o "),n(262,"code"),e(263,"po-password"),t(),e(264,"."),t(),n(265,"li"),e(266,"Caso o "),n(267,"em"),e(268,"type"),t(),e(269," informado seja "),n(270,"em"),e(271,"string"),t(),e(272," o componente criado ser\xE1 o "),n(273,"code"),e(274,"po-input"),t(),e(275,"."),n(276,"blockquote")(277,"p"),e(278,"Ao alterar o valor das "),n(279,"code"),e(280,"properties"),t(),e(281,", visibilidade e/ou agrupamentos via container, os "),n(282,"code"),e(283,"fields"),t(),e(284," que utilizam servi\xE7o podem refazer as chamadas para as API's."),t()()()()()(),n(285,"tr",13)(286,"td",14)(287,"div",23)(288,"span",24),e(289," (p-form)"),i(290,"br"),t()()(),n(291,"td",17)(292,"code",25),e(293,"EventEmitter"),t()(),n(294,"td",19),e(295,"-"),t(),n(296,"td",20)(297,"em")(298,"strong"),e(299,"(opcional)"),t()(),n(300,"p"),e(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),t(),n(302,"p"),e(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),n(304,"em"),e(305,"template reference"),t(),e(306," e atrav\xE9s do "),n(307,"em"),e(308,"output"),t(),e(309,", veja os exemplos abaixo:"),t(),n(310,"blockquote")(311,"p")(312,"em"),e(313,"template reference"),t()()(),n(314,"pre")(315,"code",26),e(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),t()(),n(317,"blockquote")(318,"p")(319,"em"),e(320,"Output"),t()()(),n(321,"pre")(322,"code",26),e(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),t()(),n(324,"pre")(325,"code",27),e(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),t()(),n(327,"blockquote")(328,"p"),e(329,"Caso a propriedade "),n(330,"code"),e(331,"p-group-form"),t(),e(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),t()()()(),n(333,"tr",13)(334,"td",14)(335,"div",15)(336,"span",16),e(337," p-group-form"),i(338,"br"),t()()(),n(339,"td",17)(340,"code",28),e(341,"boolean"),t()(),n(342,"td",19),e(343,"-"),t(),n(344,"td",20)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),n(348,"p"),e(349,"Ao informar esta propriedade, o componente passar\xE1 a utilizar o formul\xE1rio pai para criar os "),n(350,"code"),e(351,"FormControl"),t(),e(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),t(),n(353,"pre")(354,"code",26),e(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),t()()()(),n(356,"tr",13)(357,"td",14)(358,"div",15)(359,"span",16),e(360," p-load"),i(361,"br"),t()()(),n(362,"td",17)(363,"code",18),e(364,"string "),t(),n(365,"code",29),e(366," Function"),t()(),n(367,"td",19),e(368,"-"),t(),n(369,"td",20)(370,"em")(371,"strong"),e(372,"(opcional)"),t()(),n(373,"p"),e(374,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),t(),n(375,"p"),e(376,"A propriedade aceita os seguintes tipos:"),t(),n(377,"ul")(378,"li")(379,"code"),e(380,"string"),t(),e(381,": "),n(382,"em"),e(383,"Endpoint"),t(),e(384," usado pelo componente para requisi\xE7\xE3o via "),n(385,"code"),e(386,"POST"),t(),e(387,"."),t(),n(388,"li")(389,"code"),e(390,"function"),t(),e(391,": M\xE9todo que ser\xE1 executado."),t()(),n(392,"p"),e(393,"Ao ser executado, ir\xE1 receber como par\xE2metro o objeto informado no "),n(394,"code"),e(395,"p-value"),t(),e(396,"."),t(),n(397,"p"),e(398,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(399,"a",30),e(400,"PoDynamicFormLoad"),t(),e(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),t(),n(402,"p"),e(403,"Por exemplo:"),t(),n(404,"pre")(405,"code"),e(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),t()(),n(407,"p"),e(408,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(409,"code"),e(410,"bind"),t(),e(411,", por exemplo:"),t(),n(412,"pre")(413,"code"),e(414,`[p-load]="onLoadFields.bind(this)"
`),t()()()(),n(415,"tr",13)(416,"td",14)(417,"div",15)(418,"span",16),e(419," p-validate"),i(420,"br"),t()()(),n(421,"td",17)(422,"code",18),e(423,"string "),t(),n(424,"code",29),e(425," Function"),t()(),n(426,"td",19),e(427,"-"),t(),n(428,"td",20)(429,"em")(430,"strong"),e(431,"(opcional)"),t()(),n(432,"p"),e(433,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(434,"strong"),e(435,"mudan\xE7as do formul\xE1rio"),t(),e(436,"."),t(),n(437,"p"),e(438,"A propriedade aceita os seguintes tipos:"),t(),n(439,"ul")(440,"li")(441,"code"),e(442,"string"),t(),e(443,": "),n(444,"em"),e(445,"Endpoint"),t(),e(446," usado pelo componente para requisi\xE7\xE3o via "),n(447,"code"),e(448,"POST"),t(),e(449,"."),t(),n(450,"li")(451,"code"),e(452,"function"),t(),e(453,": M\xE9todo que ser\xE1 executado."),t()(),n(454,"p"),e(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),n(456,"code"),e(457,"PoDynamicFormFieldChanged"),t()(),n(458,"p"),e(459,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(460,"a",31),e(461,"PoDynamicFormValidation"),t(),e(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),t(),n(463,"pre")(464,"code"),e(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),t()(),n(466,"p"),e(467,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(468,"code"),e(469,"bind"),t(),e(470,", por exemplo:"),t(),n(471,"pre")(472,"code"),e(473,`[p-validate]="this.myFunction.bind(this)"
`),t()(),n(474,"blockquote")(475,"p"),e(476,"Se houver uma lista de campos para valida\xE7\xE3o definida em "),n(477,"code"),e(478,"p-validate-fields"),t(),e(479,", a propriedade "),n(480,"code"),e(481,"validate"),t(),e(482," s\xF3 receber\xE1 o disparo para os campos equivalentes."),t()()()(),n(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),e(487," p-validate-fields"),i(488,"br"),t()()(),n(489,"td",17)(490,"code",32),e(491,"Array<string>"),t()(),n(492,"td",19),e(493,"-"),t(),n(494,"td",20)(495,"em")(496,"strong"),e(497,"(opcional)"),t()(),n(498,"p"),e(499,"Lista que define os campos que ir\xE3o disparar o validate do form."),t()()(),n(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),e(504," p-validate-on-input"),i(505,"br"),t()()(),n(506,"td",17)(507,"code",28),e(508,"boolean"),t()(),n(509,"td",19),e(510,"-"),t(),n(511,"td",20)(512,"em")(513,"strong"),e(514,"(opcional)"),t()(),n(515,"p"),e(516,"Ao informar esta propriedade, o componente passar\xE1 a emitir o valor a cada caractere digitado."),t(),n(517,"p"),e(518,"Pode ser aplicado nos seguintes componentes:"),t(),n(519,"ul")(520,"li"),e(521,"po-input"),t(),n(522,"li"),e(523,"po-number"),t(),n(524,"li"),e(525,"po-decimal"),t(),n(526,"li"),e(527,"po-textarea"),t(),n(528,"li"),e(529,"po-password"),t()(),n(530,"p"),e(531,"Deve informar os campos que deseja receber as emiss\xF5es na propriedade "),n(532,"code"),e(533,"p-validate-fields"),t(),e(534,"."),t()()(),n(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),e(539," p-value"),i(540,"br"),t()()(),n(541,"td",17)(542,"code",33),e(543,"any"),t()(),n(544,"td",19),e(545,"-"),t(),n(546,"td",20)(547,"p"),e(548,"Objeto que ser\xE1 utilizado como valor para exibir as informa\xE7\xF5es, ser\xE1 recuperado e preenchido atrav\xE9s do atributo "),n(549,"em"),e(550,"property"),t(),e(551,`
dos objetos contidos na propridade `),n(552,"code"),e(553,"p-fields"),t(),e(554,"."),t(),n(555,"p"),e(556,"Pode iniciar com valor ou apenas com um objeto vazio que ser\xE1 preenchido conforme descrito acima."),t(),n(557,"blockquote")(558,"p"),e(559,"Ex: "),n(560,"code"),e(561,"{ name: 'po' }"),t()()()()()(),n(562,"h3",9),e(563,"M\xE9todos"),t(),n(564,"table",34)(565,"tr",13)(566,"th",35)(567,"div",15)(568,"h4")(569,"span",16),e(570," focus "),t()()()()(),n(571,"tr",20)(572,"td",20)(573,"p"),e(574,"Fun\xE7\xE3o que atribui foco ao campo desejado."),t(),n(575,"p"),e(576,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a inst\xE2ncia do "),n(577,"code"),e(578,"dynamic form"),t(),e(579,", como por exemplo:"),t(),n(580,"pre")(581,"code",26),e(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),t()(),n(583,"pre")(584,"code",36),e(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),t()()()()(),n(586,"h5")(587,"b"),e(588,"Par\xE2metros"),t()(),n(589,"table",10)(590,"tr",11)(591,"th",12),e(592,"Nome"),t(),n(593,"th",12),e(594,"Tipo"),t(),n(595,"th",12),e(596,"Descri\xE7\xE3o"),t()(),n(597,"tr",13)(598,"td",14),e(599," property"),t(),n(600,"td",17)(601,"code",37),e(602," string "),t()(),n(603,"td",20)(604,"p"),e(605,"Nome da propriedade atribu\xEDda ao "),n(606,"code"),e(607,"PoDynamicFormField.property"),t(),e(608,"."),t()()()(),i(609,"br"),n(610,"table",34)(611,"tr",13)(612,"th",35)(613,"div",15)(614,"h4")(615,"span",16),e(616," showAdditionalHelp "),t()()()()(),n(617,"tr",20)(618,"td",20)(619,"p"),e(620,"M\xE9todo que exibe "),n(621,"code"),e(622,"additionalHelpTooltip"),t(),e(623," ou executa a a\xE7\xE3o definida em "),n(624,"code"),e(625,"additionalHelp"),t(),e(626,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(627,"code"),e(628,"keydown"),t(),e(629,"."),t(),n(630,"pre")(631,"code"),e(632,`import { PoDynamicModule } from '@po-ui/ng-components';
...
@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   additionalHelpTooltip: 'Mensagem de ajuda complementar.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicForm.showAdditionalHelp(property);
 }
}
`),t()()()()(),n(633,"h5")(634,"b"),e(635,"Par\xE2metros"),t()(),n(636,"table",10)(637,"tr",11)(638,"th",12),e(639,"Nome"),t(),n(640,"th",12),e(641,"Tipo"),t(),n(642,"th",12),e(643,"Descri\xE7\xE3o"),t()(),n(644,"tr",13)(645,"td",14),e(646," property"),t(),n(647,"td",17)(648,"code",37),e(649," string "),t()(),n(650,"td",20)(651,"p"),e(652,"Identificador da coluna."),t()()()(),i(653,"br"),n(654,"h3"),e(655,"Interfaces"),t(),n(656,"h4",38)(657,"code",5),e(658,"PoDynamicFormField"),t()(),n(659,"div",2)(660,"p"),e(661," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),t()(),n(662,"h4",9),e(663,"Propriedades"),t(),n(664,"table",10)(665,"tr",11)(666,"th",12),e(667,"Nome"),t(),n(668,"th",12),e(669,"Tipo"),t(),n(670,"th",12),e(671,"Descri\xE7\xE3o"),t()(),n(672,"tr",13)(673,"td",14)(674,"div",15)(675,"span",16),e(676," additionalHelp"),i(677,"br"),t()()(),n(678,"td",17)(679,"code",29),e(680,"Function"),t()(),n(681,"td",20)(682,"em")(683,"strong"),e(684,"(opcional)"),t()(),n(685,"p"),e(686,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(687,"code"),e(688,"p-help"),t(),e(689,"."),t()()(),n(690,"tr",13)(691,"td",14)(692,"div",15)(693,"span",16),e(694," additionalHelpTooltip"),i(695,"br"),t()()(),n(696,"td",17)(697,"code",18),e(698,"string"),t()(),n(699,"td",20)(700,"em")(701,"strong"),e(702,"(opcional)"),t()(),n(703,"p"),e(704,"Exibe um \xEDcone de ajuda adicional ao "),n(705,"code"),e(706,"p-help"),t(),e(707,`, com o texto desta propriedade no tooltip.
Se o evento `),n(708,"code"),e(709,"p-additional-help"),t(),e(710,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(711,"strong"),e(712,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()()()(),n(713,"tr",13)(714,"td",14)(715,"div",15)(716,"span",16),e(717," advancedFilters"),i(718,"br"),t()()(),n(719,"td",17)(720,"code",39),e(721,"Array<PoLookupAdvancedFilter>"),t()(),n(722,"td",20)(723,"em")(724,"strong"),e(725,"(opcional)"),t()(),n(726,"p"),e(727,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),n(728,"blockquote")(729,"p"),e(730,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),n(731,"p"),e(732,"Exemplo de URL com busca avan\xE7ada:"),t(),n(733,"p")(734,"code"),e(735,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),n(736,"p"),e(737,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),n(738,"p")(739,"code"),e(740,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),n(741,"tr",13)(742,"td",14)(743,"div",15)(744,"span",16),e(745," appendBox"),i(746,"br"),t()()(),n(747,"td",17)(748,"code",28),e(749,"boolean"),t()(),n(750,"td",20)(751,"em")(752,"strong"),e(753,"(opcional)"),t()(),n(754,"p"),e(755,"Define que o "),n(756,"code"),e(757,"listbox"),t(),e(758," e/ou tooltip ("),n(759,"code"),e(760,"p-additional-help-tooltip"),t(),e(761," e/ou "),n(762,"code"),e(763,"p-error-limit"),t(),e(764,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),n(765,"blockquote")(766,"p"),e(767,"Quando utilizado com "),n(768,"code"),e(769,"p-additional-help-tooltip"),t(),e(770,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(771,"tr",13)(772,"td",14)(773,"div",15)(774,"span",16),e(775," autoHeight"),i(776,"br"),t()()(),n(777,"td",17)(778,"code",28),e(779,"boolean"),t()(),n(780,"td",20)(781,"em")(782,"strong"),e(783,"(opcional)"),t()(),n(784,"p"),e(785,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),n(786,"p")(787,"strong"),e(788,"Componentes compat\xEDveis:"),t(),n(789,"code"),e(790,"po-multiselect"),t(),e(791,", "),n(792,"code"),e(793,"po-lookup"),t(),e(794,"."),t()()(),n(795,"tr",13)(796,"td",14)(797,"div",15)(798,"span",16),e(799," autoUpload"),i(800,"br"),t()()(),n(801,"td",17)(802,"code",28),e(803,"boolean"),t()(),n(804,"td",20)(805,"em")(806,"strong"),e(807,"(opcional)"),t()(),n(808,"p"),e(809,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(810,"p")(811,"strong"),e(812,"Componente compat\xEDvel"),t(),e(813,": "),n(814,"code"),e(815,"po-upload"),t()()()(),n(816,"tr",13)(817,"td",14)(818,"div",15)(819,"span",16),e(820," booleanFalse"),i(821,"br"),t()()(),n(822,"td",17)(823,"code",18),e(824,"string"),t()(),n(825,"td",20)(826,"em")(827,"strong"),e(828,"(opcional)"),t()(),n(829,"p"),e(830,"Texto exibido quando o valor do componente for "),n(831,"em"),e(832,"false"),t(),e(833,"."),t()()(),n(834,"tr",13)(835,"td",14)(836,"div",15)(837,"span",16),e(838," booleanTrue"),i(839,"br"),t()()(),n(840,"td",17)(841,"code",18),e(842,"string"),t()(),n(843,"td",20)(844,"em")(845,"strong"),e(846,"(opcional)"),t()(),n(847,"p"),e(848,"Texto exibido quando o valor do componente for "),n(849,"em"),e(850,"true"),t(),e(851,"."),t()()(),n(852,"tr",13)(853,"td",14)(854,"div",15)(855,"span",16),e(856," changeOnEnter"),i(857,"br"),t()()(),n(858,"td",17)(859,"code",28),e(860,"boolean"),t()(),n(861,"td",20)(862,"em")(863,"strong"),e(864,"(opcional)"),t()(),n(865,"p"),e(866,"Indica que o evento "),n(867,"code"),e(868,"p-change"),t(),e(869,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),n(870,"code"),e(871,"po-combo"),t(),e(872,"."),t()()(),n(873,"tr",13)(874,"td",14)(875,"div",15)(876,"span",16),e(877," changeVisibleColumns"),i(878,"br"),t()()(),n(879,"td",17)(880,"code",29),e(881,"Function"),t()(),n(882,"td",20)(883,"em")(884,"strong"),e(885,"(opcional)"),t()(),n(886,"p"),e(887,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),n(888,"p"),e(889,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(890,"p")(891,"strong"),e(892,"Componentes compat\xEDveis"),t(),e(893,": "),n(894,"code"),e(895,"po-lookup"),t()()()(),n(896,"tr",13)(897,"td",14)(898,"div",15)(899,"span",16),e(900," clean"),i(901,"br"),t()()(),n(902,"td",17)(903,"code",28),e(904,"boolean"),t()(),n(905,"td",20)(906,"em")(907,"strong"),e(908,"(opcional)"),t()(),n(909,"p"),e(910,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),n(911,"p")(912,"strong"),e(913,"Componentes compat\xEDveis:"),t(),n(914,"code"),e(915,"po-datepicker"),t(),e(916,", "),n(917,"code"),e(918,"po-datepicker-range"),t(),e(919,", "),n(920,"code"),e(921,"po-input"),t(),e(922,", "),n(923,"code"),e(924,"po-number"),t(),e(925,", "),n(926,"code"),e(927,"po-decimal"),t(),e(928,", "),n(929,"code"),e(930,"po-combo"),t(),e(931,", "),n(932,"code"),e(933,"po-lookup"),t(),e(934,", "),n(935,"code"),e(936,"po-password"),t()()()(),n(937,"tr",13)(938,"td",14)(939,"div",15)(940,"span",16),e(941," columnRestoreManager"),i(942,"br"),t()()(),n(943,"td",17)(944,"code",29),e(945,"Function"),t()(),n(946,"td",20)(947,"em")(948,"strong"),e(949,"(opcional)"),t()(),n(950,"p"),e(951,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),n(952,"p"),e(953,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(954,"p")(955,"strong"),e(956,"Componentes compat\xEDveis"),t(),e(957,": "),n(958,"code"),e(959,"po-lookup"),t()()()(),n(960,"tr",13)(961,"td",14)(962,"div",15)(963,"span",16),e(964," columns"),i(965,"br"),t()()(),n(966,"td",17)(967,"code",40),e(968,"Array<PoLookupColumn> "),t(),n(969,"code",41),e(970," number"),t()(),n(971,"td",20)(972,"em")(973,"strong"),e(974,"(opcional)"),t()(),n(975,"p"),e(976,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),n(977,"code"),e(978,"searchService"),t(),e(979,`,
essa propriedade deve receber um array de objetos que implementam a interface `),n(980,"a",42)(981,"code"),e(982,"PoLookupColumn"),t()(),e(983,"."),t(),n(984,"blockquote")(985,"p"),e(986,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),n(987,"em"),e(988,"label"),t(),e(989," e "),n(990,"em"),e(991,"value"),t(),e(992,` para valores
de tela e do model respectivamente.`),t()(),n(993,"p")(994,"strong"),e(995,"Componentes compat\xEDveis:"),t(),n(996,"code"),e(997,"po-radio-group"),t(),e(998,", "),n(999,"code"),e(1e3,"po-lookup"),t(),e(1001,", "),n(1002,"code"),e(1003,"po-checkbox-group"),t(),e(1004,"."),t()()(),n(1005,"tr",13)(1006,"td",14)(1007,"div",15)(1008,"span",16),e(1009," container"),i(1010,"br"),t()()(),n(1011,"td",17)(1012,"code",18),e(1013,"string"),t()(),n(1014,"td",20)(1015,"em")(1016,"strong"),e(1017,"(opcional)"),t()(),n(1018,"p"),e(1019,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),n(1020,"p"),e(1021,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),n(1022,"tr",13)(1023,"td",14)(1024,"div",15)(1025,"span",16),e(1026," customAction"),i(1027,"br"),t()()(),n(1028,"td",17)(1029,"code",43),e(1030,"PoProgressAction"),t()(),n(1031,"td",20)(1032,"em")(1033,"strong"),e(1034,"(opcional)"),t()(),n(1035,"p"),e(1036,"Define uma a\xE7\xE3o personalizada no componente "),n(1037,"code"),e(1038,"po-upload"),t(),e(1039,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(1040,"p")(1041,"strong"),e(1042,"Componente compat\xEDvel"),t(),e(1043,": "),n(1044,"code"),e(1045,"po-upload"),t(),e(1046,","),t(),n(1047,"p")(1048,"strong"),e(1049,"Exemplo de configura\xE7\xE3o"),t(),e(1050,":"),t(),n(1051,"pre")(1052,"code",44),e(1053,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),n(1054,"tr",13)(1055,"td",14)(1056,"div",15)(1057,"span",16),e(1058," customActionClick"),i(1059,"br"),t()()(),n(1060,"td",17)(1061,"code",45),e(1062,"(file: PoUploadFile) => void"),t()(),n(1063,"td",20)(1064,"em")(1065,"strong"),e(1066,"(opcional)"),t()(),n(1067,"p"),e(1068,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(1069,"code"),e(1070,"p-custom-action"),t(),e(1071,"."),t(),n(1072,"p")(1073,"strong"),e(1074,"Componente compat\xEDvel"),t(),e(1075,": "),n(1076,"code"),e(1077,"po-upload"),t(),e(1078,","),t(),n(1079,"p"),e(1080,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(1081,"p")(1082,"strong"),e(1083,"Par\xE2metro do evento"),t(),e(1084,":"),t(),n(1085,"ul")(1086,"li")(1087,"code"),e(1088,"file"),t(),e(1089,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),n(1090,"code"),e(1091,"PoUploadFile"),t(),e(1092," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),n(1093,"p")(1094,"strong"),e(1095,"Exemplo de uso"),t(),e(1096,":"),t(),n(1097,"pre")(1098,"code",44),e(1099,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),n(1100,"tr",13)(1101,"td",14)(1102,"div",15)(1103,"span",16),e(1104," debounceTime"),i(1105,"br"),t()()(),n(1106,"td",17)(1107,"code",41),e(1108,"number"),t()(),n(1109,"td",20)(1110,"em")(1111,"strong"),e(1112,"(opcional)"),t()(),n(1113,"p"),e(1114,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),n(1115,"code"),e(1116,"p-filter-service"),t(),e(1117,")."),t(),n(1118,"p")(1119,"strong"),e(1120,"Componentes compat\xEDveis:"),t(),n(1121,"code"),e(1122,"po-combo"),t(),e(1123,", "),n(1124,"code"),e(1125,"po-multiselect"),t(),e(1126,"."),t()()(),n(1127,"tr",13)(1128,"td",14)(1129,"div",15)(1130,"span",16),e(1131," decimalsLength"),i(1132,"br"),t()()(),n(1133,"td",17)(1134,"code",41),e(1135,"number"),t()(),n(1136,"td",20)(1137,"em")(1138,"strong"),e(1139,"(opcional)"),t()(),n(1140,"p"),e(1141,"Quantidade m\xE1xima de casas decimais."),t(),n(1142,"blockquote")(1143,"p"),e(1144,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(1145,"code"),e(1146,"type"),t(),e(1147," for "),n(1148,"em"),e(1149,"currency"),t(),e(1150," ou "),n(1151,"em"),e(1152,"decimal"),t(),e(1153,"."),t()()()(),n(1154,"tr",13)(1155,"td",14)(1156,"div",15)(1157,"span",16),e(1158," directory"),i(1159,"br"),t()()(),n(1160,"td",17)(1161,"code",28),e(1162,"boolean"),t()(),n(1163,"td",20)(1164,"em")(1165,"strong"),e(1166,"(opcional)"),t()(),n(1167,"p"),e(1168,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(1169,"blockquote")(1170,"p"),e(1171,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(1172,"blockquote")(1173,"p"),e(1174,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(1175,"strong"),e(1176,"Internet Explorer"),t(),e(1177,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),n(1178,"p")(1179,"strong"),e(1180,"Componente compat\xEDvel"),t(),e(1181,": "),n(1182,"code"),e(1183,"po-upload"),t()()()(),n(1184,"tr",13)(1185,"td",14)(1186,"div",15)(1187,"span",16),e(1188," disabled"),i(1189,"br"),t()()(),n(1190,"td",17)(1191,"code",28),e(1192,"boolean"),t()(),n(1193,"td",20)(1194,"em")(1195,"strong"),e(1196,"(opcional)"),t()(),n(1197,"p"),e(1198,"Desabilita o campo caso informar o valor "),n(1199,"em"),e(1200,"true"),t(),e(1201,"."),t()()(),n(1202,"tr",13)(1203,"td",14)(1204,"div",15)(1205,"span",16),e(1206," disabledInitFilter"),i(1207,"br"),t()()(),n(1208,"td",17)(1209,"code",28),e(1210,"boolean"),t()(),n(1211,"td",20)(1212,"em")(1213,"strong"),e(1214,"(opcional)"),t()(),n(1215,"p"),e(1216,"Desabilita o filtro inicial no servi\xE7o do "),n(1217,"code"),e(1218,"po-combo"),t(),e(1219,", que \xE9 executado no primeiro clique no campo."),t()()(),n(1220,"tr",13)(1221,"td",14)(1222,"div",15)(1223,"span",16),e(1224," disabledTabFilter"),i(1225,"br"),t()()(),n(1226,"td",17)(1227,"code",28),e(1228,"boolean"),t()(),n(1229,"td",20)(1230,"em")(1231,"strong"),e(1232,"(opcional)"),t()(),n(1233,"p"),e(1234,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),n(1235,"code"),e(1236,"po-combo"),t(),e(1237,"."),t()()(),n(1238,"tr",13)(1239,"td",14)(1240,"div",15)(1241,"span",16),e(1242," divider"),i(1243,"br"),t()()(),n(1244,"td",17)(1245,"code",18),e(1246,"string"),t()(),n(1247,"td",20)(1248,"em")(1249,"strong"),e(1250,"(opcional)"),t()(),n(1251,"p"),e(1252,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),n(1253,"tr",13)(1254,"td",14)(1255,"div",15)(1256,"span",16),e(1257," dragDrop"),i(1258,"br"),t()()(),n(1259,"td",17)(1260,"code",28),e(1261,"boolean"),t()(),n(1262,"td",20)(1263,"em")(1264,"strong"),e(1265,"(opcional)"),t()(),n(1266,"p"),e(1267,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(1268,"blockquote")(1269,"p"),e(1270,"Recomendamos utilizar apenas um "),n(1271,"code"),e(1272,"po-upload"),t(),e(1273," com esta funcionalidade por tela."),t()(),n(1274,"p")(1275,"strong"),e(1276,"Componente compat\xEDvel"),t(),e(1277,": "),n(1278,"code"),e(1279,"po-upload"),t()()()(),n(1280,"tr",13)(1281,"td",14)(1282,"div",15)(1283,"span",16),e(1284," dragDropHeight"),i(1285,"br"),t()()(),n(1286,"td",17)(1287,"code",41),e(1288,"number"),t()(),n(1289,"td",20)(1290,"em")(1291,"strong"),e(1292,"(opcional)"),t()(),n(1293,"p"),e(1294,"Define em "),n(1295,"em"),e(1296,"pixels"),t(),e(1297," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(1298,"code"),e(1299,"160px"),t(),e(1300,"."),t(),n(1301,"blockquote")(1302,"p"),e(1303,"Esta propriedade funciona somente se a propriedade "),n(1304,"code"),e(1305,"p-drag-drop"),t(),e(1306," estiver habilitada."),t()(),n(1307,"p")(1308,"strong"),e(1309,"Componente compat\xEDvel"),t(),e(1310,": "),n(1311,"code"),e(1312,"po-upload"),t()()()(),n(1313,"tr",13)(1314,"td",14)(1315,"div",15)(1316,"span",16),e(1317," errorAsyncFunction"),i(1318,"br"),t()()(),n(1319,"td",17)(1320,"code",46),e(1321,"(value) => Observable<boolean>"),t()(),n(1322,"td",20)(1323,"em")(1324,"strong"),e(1325,"(opcional)"),t()(),n(1326,"p"),e(1327,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1328,"code"),e(1329,"change"),t(),e(1330," ou "),n(1331,"code"),e(1332,"change-model"),t(),e(1333,", dependendo do valor da propriedade "),n(1334,"code"),e(1335,"triggerMode"),t(),e(1336,"."),t(),n(1337,"blockquote")(1338,"p"),e(1339,"Retorna "),n(1340,"code"),e(1341,"Observable com o valor true"),t(),e(1342," para sinalizar o erro "),n(1343,"code"),e(1344,"false"),t(),e(1345," para indicar que n\xE3o h\xE1 erro."),t()(),n(1346,"p")(1347,"strong"),e(1348,"Componente compat\xEDvel"),t(),e(1349,": "),n(1350,"code"),e(1351,"po-datepicker"),t()()()(),n(1352,"tr",13)(1353,"td",14)(1354,"div",15)(1355,"span",16),e(1356," errorAsyncProperties"),i(1357,"br"),t()()(),n(1358,"td",17)(1359,"code",47),e(1360,"ErrorAsyncProperties"),t()(),n(1361,"td",20)(1362,"em")(1363,"strong"),e(1364,"(opcional)"),t()(),n(1365,"p"),e(1366,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),n(1367,"p")(1368,"strong"),e(1369,"Componentes compat\xEDveis:"),t(),n(1370,"code"),e(1371,"po-input"),t(),e(1372,", "),n(1373,"code"),e(1374,"po-number"),t(),e(1375,", "),n(1376,"code"),e(1377,"po-decimal"),t(),e(1378,", "),n(1379,"code"),e(1380,"po-password"),t(),e(1381,"."),t()()(),n(1382,"tr",13)(1383,"td",14)(1384,"div",15)(1385,"span",16),e(1386," errorLimit"),i(1387,"br"),t()()(),n(1388,"td",17)(1389,"code",28),e(1390,"boolean"),t()(),n(1391,"td",20)(1392,"em")(1393,"strong"),e(1394,"(opcional)"),t()(),n(1395,"p"),e(1396,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(1397,"blockquote")(1398,"p"),e(1399,"Caso essa propriedade seja definida como "),n(1400,"code"),e(1401,"true"),t(),e(1402,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),n(1403,"p")(1404,"strong"),e(1405,"Componentes compat\xEDveis:"),t(),n(1406,"code"),e(1407,"po-checkbox-group"),t(),e(1408,", "),n(1409,"code"),e(1410,"po-combo"),t(),e(1411,", "),n(1412,"code"),e(1413,"po-datepicker"),t(),e(1414,", "),n(1415,"code"),e(1416,"po-datepicker-range"),t(),e(1417,", "),n(1418,"code"),e(1419,"po-decimal"),t(),e(1420,", "),n(1421,"code"),e(1422,"po-input"),t(),e(1423,", "),n(1424,"code"),e(1425,"po-lookup"),t(),e(1426,", "),n(1427,"code"),e(1428,"po-multiselect"),t(),e(1429,", "),n(1430,"code"),e(1431,"po-number"),t(),e(1432,", "),n(1433,"code"),e(1434,"po-password"),t(),e(1435,", "),n(1436,"code"),e(1437,"po-radio-group"),t(),e(1438,", "),n(1439,"code"),e(1440,"po-select"),t(),e(1441,", "),n(1442,"code"),e(1443,"po-switch"),t(),e(1444,", "),n(1445,"code"),e(1446,"po-textarea"),t(),e(1447,"."),t()()(),n(1448,"tr",13)(1449,"td",14)(1450,"div",15)(1451,"span",16),e(1452," errorMessage"),i(1453,"br"),t()()(),n(1454,"td",17)(1455,"code",18),e(1456,"string"),t()(),n(1457,"td",20)(1458,"em")(1459,"strong"),e(1460,"(opcional)"),t()(),n(1461,"p"),e(1462,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),n(1463,"p"),e(1464,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),n(1465,"ul")(1466,"li"),e(1467,"pattern;"),t(),n(1468,"li"),e(1469,"minValue;"),t(),n(1470,"li"),e(1471,"maxValue;"),t(),n(1472,"li"),e(1473,"required;"),t()(),n(1474,"blockquote")(1475,"p"),e(1476,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),n(1477,"code"),e(1478,"po-datepicker"),t(),e(1479,", "),n(1480,"code"),e(1481,"po-input"),t(),e(1482,", "),n(1483,"code"),e(1484,"po-number"),t(),e(1485,", "),n(1486,"code"),e(1487,"po-decimal"),t(),e(1488,", "),n(1489,"code"),e(1490,"po-password"),t(),e(1491,`, \xE9 necess\xE1rio que a propriedade
`),n(1492,"code"),e(1493,"requiredFieldErrorMessage"),t(),e(1494," esteja como "),n(1495,"code"),e(1496,"true"),t(),e(1497,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),n(1498,"code"),e(1499,"po-datepicker-range"),t(),e(1500,", "),n(1501,"code"),e(1502,"po-select"),t(),e(1503,", "),n(1504,"code"),e(1505,"po-checkbox-group"),t(),e(1506,", "),n(1507,"code"),e(1508,"po-radio-group"),t(),e(1509,", "),n(1510,"code"),e(1511,"po-multiselect"),t(),e(1512,", "),n(1513,"code"),e(1514,"po-combo"),t(),e(1515,`,
`),n(1516,"code"),e(1517,"po-lookup"),t(),e(1518," e "),n(1519,"code"),e(1520,"po-textarea"),t(),e(1521," n\xE3o \xE9 necess\xE1rio passar a propriedade "),n(1522,"code"),e(1523,"requiredFieldErrorMessage"),t(),e(1524,"."),t()(),n(1525,"p")(1526,"strong"),e(1527,"Componentes compat\xEDveis:"),t(),n(1528,"code"),e(1529,"po-checkbox-group"),t(),e(1530,", "),n(1531,"code"),e(1532,"po-combo"),t(),e(1533,", "),n(1534,"code"),e(1535,"po-datepicker"),t(),e(1536,", "),n(1537,"code"),e(1538,"po-datepicker-range"),t(),e(1539,", "),n(1540,"code"),e(1541,"po-decimal"),t(),e(1542,", "),n(1543,"code"),e(1544,"po-input"),t(),e(1545,", "),n(1546,"code"),e(1547,"po-lookup"),t(),e(1548,", "),n(1549,"code"),e(1550,"po-multiselect"),t(),e(1551,", "),n(1552,"code"),e(1553,"po-number"),t(),e(1554,", "),n(1555,"code"),e(1556,"po-password"),t(),e(1557,", "),n(1558,"code"),e(1559,"po-radio-group"),t(),e(1560,", "),n(1561,"code"),e(1562,"po-select"),t(),e(1563,", "),n(1564,"code"),e(1565,"po-switch"),t(),e(1566,", "),n(1567,"code"),e(1568,"po-textarea"),t(),e(1569,"."),t()()(),n(1570,"tr",13)(1571,"td",14)(1572,"div",15)(1573,"span",16),e(1574," fieldLabel"),i(1575,"br"),t()()(),n(1576,"td",17)(1577,"code",18),e(1578,"string"),t()(),n(1579,"td",20)(1580,"em")(1581,"strong"),e(1582,"(opcional)"),t()(),n(1583,"p"),e(1584,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),n(1585,"p"),e(1586,"O valor padr\xE3o \xE9: "),n(1587,"code"),e(1588,"label"),t(),e(1589,"."),t(),n(1590,"blockquote")(1591,"p"),e(1592,"Esta propriedade pode ser utilizada em conjunto com: "),n(1593,"code"),e(1594,"options"),t(),e(1595,", "),n(1596,"code"),e(1597,"optionsService"),t(),e(1598," e "),n(1599,"code"),e(1600,"searchService"),t(),e(1601,"."),t()()()(),n(1602,"tr",13)(1603,"td",14)(1604,"div",15)(1605,"span",16),e(1606," fieldValue"),i(1607,"br"),t()()(),n(1608,"td",17)(1609,"code",18),e(1610,"string"),t()(),n(1611,"td",20)(1612,"em")(1613,"strong"),e(1614,"(opcional)"),t()(),n(1615,"p"),e(1616,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),n(1617,"p"),e(1618,"O valor padr\xE3o \xE9: "),n(1619,"code"),e(1620,"value"),t(),e(1621,"."),t(),n(1622,"blockquote")(1623,"p"),e(1624,"Esta propriedade pode ser utilizada em conjunto com: "),n(1625,"code"),e(1626,"options"),t(),e(1627,", "),n(1628,"code"),e(1629,"optionsService"),t(),e(1630," e "),n(1631,"code"),e(1632,"searchService"),t(),e(1633,"."),t()()()(),n(1634,"tr",13)(1635,"td",14)(1636,"div",15)(1637,"span",16),e(1638," filterMinlength"),i(1639,"br"),t()()(),n(1640,"td",17)(1641,"code",41),e(1642,"number"),t()(),n(1643,"td",20)(1644,"em")(1645,"strong"),e(1646,"(opcional)"),t()(),n(1647,"p"),e(1648,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),n(1649,"code"),e(1650,"po-combo"),t(),e(1651,"."),t()()(),n(1652,"tr",13)(1653,"td",14)(1654,"div",15)(1655,"span",16),e(1656," filterMode"),i(1657,"br"),t()()(),n(1658,"td",17)(1659,"code",48),e(1660,"PoMultiselectFilterMode"),t()(),n(1661,"td",20)(1662,"em")(1663,"strong"),e(1664,"(opcional)"),t()(),n(1665,"p"),e(1666,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),n(1667,"code"),e(1668,"startsWith"),t(),e(1669,", "),n(1670,"code"),e(1671,"contains"),t(),e(1672," ou "),n(1673,"code"),e(1674,"endsWith"),t(),e(1675,"."),t(),n(1676,"blockquote")(1677,"p"),e(1678,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),n(1679,"p")(1680,"strong"),e(1681,"Componentes compat\xEDveis:"),t(),n(1682,"code"),e(1683,"po-multiselect"),t(),e(1684,"."),t()()(),n(1685,"tr",13)(1686,"td",14)(1687,"div",15)(1688,"span",16),e(1689," forceBooleanComponentType"),i(1690,"br"),t()()(),n(1691,"td",17)(1692,"code",49),e(1693,"ForceBooleanComponentEnum"),t()(),n(1694,"td",20)(1695,"em")(1696,"strong"),e(1697,"(opcional)"),t()(),n(1698,"p"),e(1699,"Valores aceitos:"),t(),n(1700,"ul")(1701,"li"),e(1702,"ForceBooleanComponentEnum.switch"),t(),n(1703,"li"),e(1704,"ForceBooleanComponentEnum.checkbox"),t()()()(),n(1705,"tr",13)(1706,"td",14)(1707,"div",15)(1708,"span",16),e(1709," forceOptionsComponentType"),i(1710,"br"),t()()(),n(1711,"td",17)(1712,"code",50),e(1713,"ForceOptionComponentEnum"),t()(),n(1714,"td",20)(1715,"em")(1716,"strong"),e(1717,"(opcional)"),t()(),n(1718,"p"),e(1719,"pode ser utilizada em conjunto com a propriedade "),n(1720,"code"),e(1721,"options"),t(),e(1722," for\xE7ando o componente a renderizar um "),n(1723,"code"),e(1724,"po-select"),t(),e(1725," ou "),n(1726,"code"),e(1727,"po-radio-group"),t(),e(1728,"."),t(),n(1729,"p"),e(1730,"Valores aceitos:"),t(),n(1731,"ul")(1732,"li"),e(1733,"ForceOptionComponentEnum.radioGroup"),t(),n(1734,"li"),e(1735,"ForceOptionComponentEnum.select"),t()(),n(1736,"blockquote")(1737,"p"),e(1738,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),n(1739,"code"),e(1740,"optionsMulti"),t(),e(1741," e "),n(1742,"code"),e(1743,"optionsService"),t(),e(1744,"."),t()()()(),n(1745,"tr",13)(1746,"td",14)(1747,"div",15)(1748,"span",16),e(1749," formField"),i(1750,"br"),t()()(),n(1751,"td",17)(1752,"code",18),e(1753,"string"),t()(),n(1754,"td",20)(1755,"em")(1756,"strong"),e(1757,"(opcional)"),t()(),n(1758,"p"),e(1759,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(1760,"code"),e(1761,"url"),t(),e(1762,"."),t(),n(1763,"blockquote")(1764,"p"),e(1765,"O valor default \xE9 "),n(1766,"code"),e(1767,"files"),t()()(),n(1768,"p")(1769,"strong"),e(1770,"Componente compat\xEDvel"),t(),e(1771,": "),n(1772,"code"),e(1773,"po-upload"),t()()()(),n(1774,"tr",13)(1775,"td",14)(1776,"div",15)(1777,"span",16),e(1778," format"),i(1779,"br"),t()()(),n(1780,"td",17)(1781,"code",18),e(1782,"string "),t(),n(1783,"code",32),e(1784," Array<string>"),t()(),n(1785,"td",20)(1786,"em")(1787,"strong"),e(1788,"(opcional)"),t()(),n(1789,"p"),e(1790,"Formato de exibi\xE7\xE3o no campo."),t(),n(1791,"p"),e(1792,"Ao utilizar esta propriedade com o "),n(1793,"code"),e(1794,"type"),t(),n(1795,"em"),e(1796,"PoDynamicFieldType.Date"),t(),e(1797," ou "),n(1798,"em"),e(1799,"PoDynamicFieldType.DateTime"),t(),e(1800,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),n(1801,"p"),e(1802,"Valores v\xE1lidos:"),t(),n(1803,"ul")(1804,"li"),e(1805,"dd/mm/yyyy"),t(),n(1806,"li"),e(1807,"mm/dd/yyyy"),t(),n(1808,"li"),e(1809,"yyyy/mm/dd"),t()(),n(1810,"p"),e(1811,"Tamb\xE9m pode-se utilizar em conjunto com "),n(1812,"code"),e(1813,"searchService"),t(),e(1814,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),n(1815,"tr",13)(1816,"td",14)(1817,"div",15)(1818,"span",16),e(1819," formatModel"),i(1820,"br"),t()()(),n(1821,"td",17)(1822,"code",28),e(1823,"boolean"),t()(),n(1824,"td",20)(1825,"em")(1826,"strong"),e(1827,"(opcional)"),t()(),n(1828,"p"),e(1829,"Indica se o "),n(1830,"code"),e(1831,"model"),t(),e(1832," receber\xE1 o valor formatado pelas propriedades "),n(1833,"code"),e(1834,"p-label-on"),t(),e(1835," e "),n(1836,"code"),e(1837,"p-label-off"),t(),e(1838,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),n(1839,"p"),e(1840,"O valor padr\xE3o \xE9: "),n(1841,"code"),e(1842,"false"),t(),e(1843,"."),t(),n(1844,"blockquote")(1845,"p"),e(1846,"Esta propriedade est\xE1 disponivel apenas para o "),n(1847,"code"),e(1848,"swicth"),t(),e(1849,"."),t()()()(),n(1850,"tr",13)(1851,"td",14)(1852,"div",15)(1853,"span",16),e(1854," gridColumns"),i(1855,"br"),t()()(),n(1856,"td",17)(1857,"code",41),e(1858,"number"),t()(),n(1859,"td",20)(1860,"em")(1861,"strong"),e(1862,"(opcional)"),t()(),n(1863,"p"),e(1864,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),n(1865,"p"),e(1866,"Deve ser usado o sistema de "),n(1867,"strong"),e(1868,"grid"),t(),e(1869," do PO (1 ... 12 colunas)."),t(),n(1870,"blockquote")(1871,"p"),e(1872,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(1873,"tr",13)(1874,"td",14)(1875,"div",15)(1876,"span",16),e(1877," gridLgColumns"),i(1878,"br"),t()()(),n(1879,"td",17)(1880,"code",41),e(1881,"number"),t()(),n(1882,"td",20)(1883,"em")(1884,"strong"),e(1885,"(opcional)"),t()(),n(1886,"p"),e(1887,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(1888,"p"),e(1889,"Deve ser usado o sistema de "),n(1890,"strong"),e(1891,"grid"),t(),e(1892," do PO (1 ... 12 colunas)."),t(),n(1893,"blockquote")(1894,"p"),e(1895,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1896,"code"),e(1897,"gridColumns"),t(),e(1898,"."),t()()()(),n(1899,"tr",13)(1900,"td",14)(1901,"div",15)(1902,"span",16),e(1903," gridLgPull"),i(1904,"br"),t()()(),n(1905,"td",17)(1906,"code",41),e(1907,"number"),t()(),n(1908,"td",20)(1909,"em")(1910,"strong"),e(1911,"(opcional)"),t()(),n(1912,"p"),e(1913,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),n(1914,"p"),e(1915,"Deve ser usado o sistema de "),n(1916,"strong"),e(1917,"grid"),t(),e(1918," do PO (1 ... 11 colunas)."),t(),n(1919,"blockquote")(1920,"p"),e(1921,"Esta propriedade n\xE3o funciona com a propriedade "),n(1922,"code"),e(1923,"gridColumns"),t(),e(1924,". Deve-se especificar o tamanho da tela."),t()()()(),n(1925,"tr",13)(1926,"td",14)(1927,"div",15)(1928,"span",16),e(1929," gridMdColumns"),i(1930,"br"),t()()(),n(1931,"td",17)(1932,"code",41),e(1933,"number"),t()(),n(1934,"td",20)(1935,"em")(1936,"strong"),e(1937,"(opcional)"),t()(),n(1938,"p"),e(1939,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(1940,"p"),e(1941,"Deve ser usado o sistema de "),n(1942,"strong"),e(1943,"grid"),t(),e(1944," do PO (1 ... 12 colunas)."),t(),n(1945,"blockquote")(1946,"p"),e(1947,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1948,"code"),e(1949,"gridColumns"),t(),e(1950,"."),t()()()(),n(1951,"tr",13)(1952,"td",14)(1953,"div",15)(1954,"span",16),e(1955," gridMdPull"),i(1956,"br"),t()()(),n(1957,"td",17)(1958,"code",41),e(1959,"number"),t()(),n(1960,"td",20)(1961,"em")(1962,"strong"),e(1963,"(opcional)"),t()(),n(1964,"p"),e(1965,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),n(1966,"p"),e(1967,"Deve ser usado o sistema de "),n(1968,"strong"),e(1969,"grid"),t(),e(1970," do PO (1 ... 11 colunas)."),t(),n(1971,"blockquote")(1972,"p"),e(1973,"Esta propriedade n\xE3o funciona com a propriedade "),n(1974,"code"),e(1975,"gridColumns"),t(),e(1976,". Deve-se especificar o tamanho da tela."),t()()()(),n(1977,"tr",13)(1978,"td",14)(1979,"div",15)(1980,"span",16),e(1981," gridSmColumns"),i(1982,"br"),t()()(),n(1983,"td",17)(1984,"code",41),e(1985,"number"),t()(),n(1986,"td",20)(1987,"em")(1988,"strong"),e(1989,"(opcional)"),t()(),n(1990,"p"),e(1991,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(1992,"p"),e(1993,"Deve ser usado o sistema de "),n(1994,"strong"),e(1995,"grid"),t(),e(1996," do PO (1 ... 12 colunas)."),t(),n(1997,"blockquote")(1998,"p"),e(1999,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2e3,"code"),e(2001,"gridColumns"),t(),e(2002,"."),t()()()(),n(2003,"tr",13)(2004,"td",14)(2005,"div",15)(2006,"span",16),e(2007," gridSmPull"),i(2008,"br"),t()()(),n(2009,"td",17)(2010,"code",41),e(2011,"number"),t()(),n(2012,"td",20)(2013,"em")(2014,"strong"),e(2015,"(opcional)"),t()(),n(2016,"p"),e(2017,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),n(2018,"p"),e(2019,"Deve ser usado o sistema de "),n(2020,"strong"),e(2021,"grid"),t(),e(2022," do PO (1 ... 11 colunas)."),t(),n(2023,"blockquote")(2024,"p"),e(2025,"Esta propriedade n\xE3o funciona com a propriedade "),n(2026,"code"),e(2027,"gridColumns"),t(),e(2028,". Deve-se especificar o tamanho da tela."),t()()()(),n(2029,"tr",13)(2030,"td",14)(2031,"div",15)(2032,"span",16),e(2033," gridXlColumns"),i(2034,"br"),t()()(),n(2035,"td",17)(2036,"code",41),e(2037,"number"),t()(),n(2038,"td",20)(2039,"em")(2040,"strong"),e(2041,"(opcional)"),t()(),n(2042,"p"),e(2043,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2044,"p"),e(2045,"Deve ser usado o sistema de "),n(2046,"strong"),e(2047,"grid"),t(),e(2048," do PO (1 ... 12 colunas)."),t(),n(2049,"blockquote")(2050,"p"),e(2051,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2052,"code"),e(2053,"gridColumns"),t(),e(2054,"."),t()()()(),n(2055,"tr",13)(2056,"td",14)(2057,"div",15)(2058,"span",16),e(2059," gridXlPull"),i(2060,"br"),t()()(),n(2061,"td",17)(2062,"code",41),e(2063,"number"),t()(),n(2064,"td",20)(2065,"em")(2066,"strong"),e(2067,"(opcional)"),t()(),n(2068,"p"),e(2069,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),n(2070,"p"),e(2071,"Deve ser usado o sistema de "),n(2072,"strong"),e(2073,"grid"),t(),e(2074," do PO (1 ... 11 colunas)."),t(),n(2075,"blockquote")(2076,"p"),e(2077,"Esta propriedade n\xE3o funciona com a propriedade "),n(2078,"code"),e(2079,"gridColumns"),t(),e(2080,". Deve-se especificar o tamanho da tela."),t()()()(),n(2081,"tr",13)(2082,"td",14)(2083,"div",15)(2084,"span",16),e(2085," headers"),i(2086,"br"),t()()(),n(2087,"td",17)(2088,"code",51),e(2089,"{ [name: string]: string "),t(),n(2090,"code",52),e(2091,` Array<string>;
}`),t()(),n(2092,"td",20)(2093,"em")(2094,"strong"),e(2095,"(opcional)"),t()(),n(2096,"p"),e(2097,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),n(2098,"p")(2099,"strong"),e(2100,"Componente compat\xEDvel"),t(),e(2101,": "),n(2102,"code"),e(2103,"po-upload"),t()()()(),n(2104,"tr",13)(2105,"td",14)(2106,"div",15)(2107,"span",16),e(2108," help"),i(2109,"br"),t()()(),n(2110,"td",17)(2111,"code",18),e(2112,"string"),t()(),n(2113,"td",20)(2114,"em")(2115,"strong"),e(2116,"(opcional)"),t()(),n(2117,"p"),e(2118,"Texto de ajuda."),t()()(),n(2119,"tr",13)(2120,"td",14)(2121,"div",15)(2122,"span",16),e(2123," hideLabelStatus"),i(2124,"br"),t()()(),n(2125,"td",17)(2126,"code",28),e(2127,"boolean"),t()(),n(2128,"td",20)(2129,"em")(2130,"strong"),e(2131,"(opcional)"),t()(),n(2132,"p"),e(2133,"Indica se o status do "),n(2134,"code"),e(2135,"model"),t(),e(2136," ser\xE1 escondido visualmente ao lado do switch"),t()()(),n(2137,"tr",13)(2138,"td",14)(2139,"div",15)(2140,"span",16),e(2141," hidePasswordPeek"),i(2142,"br"),t()()(),n(2143,"td",17)(2144,"code",28),e(2145,"boolean"),t()(),n(2146,"td",20)(2147,"em")(2148,"strong"),e(2149,"(opcional)"),t()(),n(2150,"p"),e(2151,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),n(2152,"code"),e(2153,"po-password"),t(),e(2154,"."),t()()(),n(2155,"tr",13)(2156,"td",14)(2157,"div",15)(2158,"span",16),e(2159," hideRestrictionsInfo"),i(2160,"br"),t()()(),n(2161,"td",17)(2162,"code",28),e(2163,"boolean"),t()(),n(2164,"td",20)(2165,"em")(2166,"strong"),e(2167,"(opcional)"),t()(),n(2168,"p"),e(2169,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),n(2170,"p")(2171,"strong"),e(2172,"Componente compat\xEDvel"),t(),e(2173,": "),n(2174,"code"),e(2175,"po-upload"),t()()()(),n(2176,"tr",13)(2177,"td",14)(2178,"div",15)(2179,"span",16),e(2180," hideSearch"),i(2181,"br"),t()()(),n(2182,"td",17)(2183,"code",28),e(2184,"boolean"),t()(),n(2185,"td",20)(2186,"em")(2187,"strong"),e(2188,"(opcional)"),t()(),n(2189,"p"),e(2190,"Esconde o campo de pesquisa existente dentro do dropdown do "),n(2191,"code"),e(2192,"po-multiselect"),t(),e(2193,"."),t()()(),n(2194,"tr",13)(2195,"td",14)(2196,"div",15)(2197,"span",16),e(2198," hideSelectAll"),i(2199,"br"),t()()(),n(2200,"td",17)(2201,"code",28),e(2202,"boolean"),t()(),n(2203,"td",20)(2204,"em")(2205,"strong"),e(2206,"(opcional)"),t()(),n(2207,"p"),e(2208,'Indica se o campo "Selecionar todos" do '),n(2209,"code"),e(2210,"po-multiselect"),t(),e(2211," ser\xE1 escondido."),t()()(),n(2212,"tr",13)(2213,"td",14)(2214,"div",15)(2215,"span",16),e(2216," hideSelectButton"),i(2217,"br"),t()()(),n(2218,"td",17)(2219,"code",28),e(2220,"boolean"),t()(),n(2221,"td",20)(2222,"em")(2223,"strong"),e(2224,"(opcional)"),t()(),n(2225,"p"),e(2226,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(2227,"blockquote")(2228,"p"),e(2229,"Caso o valor definido seja "),n(2230,"code"),e(2231,"true"),t(),e(2232,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2233,"code"),e(2234,"selectFiles()"),t(),e(2235," para sele\xE7\xE3o de arquivos."),t()(),n(2236,"p")(2237,"strong"),e(2238,"Componente compat\xEDvel"),t(),e(2239,": "),n(2240,"code"),e(2241,"po-upload"),t()()()(),n(2242,"tr",13)(2243,"td",14)(2244,"div",15)(2245,"span",16),e(2246," hideSendButton"),i(2247,"br"),t()()(),n(2248,"td",17)(2249,"code",28),e(2250,"boolean"),t()(),n(2251,"td",20)(2252,"em")(2253,"strong"),e(2254,"(opcional)"),t()(),n(2255,"p"),e(2256,"Omite o bot\xE3o de envio de arquivos."),t(),n(2257,"blockquote")(2258,"p"),e(2259,"Caso o valor definido seja "),n(2260,"code"),e(2261,"true"),t(),e(2262,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2263,"code"),e(2264,"sendFiles()"),t(),e(2265," para envio do(s) arquivo(s) selecionado(s)."),t()(),n(2266,"p")(2267,"strong"),e(2268,"Componente compat\xEDvel"),t(),e(2269,": "),n(2270,"code"),e(2271,"po-upload"),t()()()(),n(2272,"tr",13)(2273,"td",14)(2274,"div",15)(2275,"span",16),e(2276," icon"),i(2277,"br"),t()()(),n(2278,"td",17)(2279,"code",18),e(2280,"string "),t(),n(2281,"code",53),e(2282," TemplateRef<void>"),t()(),n(2283,"td",20)(2284,"em")(2285,"strong"),e(2286,"(opcional)"),t()(),n(2287,"p"),e(2288,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(2289,"blockquote")(2290,"p"),e(2291,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),n(2292,"ul")(2293,"li"),e(2294,"Input;"),t(),n(2295,"li"),e(2296,"Number;"),t(),n(2297,"li"),e(2298,"Decimal;"),t(),n(2299,"li"),e(2300,"Combo;"),t(),n(2301,"li"),e(2302,"Password;"),t()(),n(2303,"blockquote")(2304,"p"),e(2305,"Veja a disponibilidade de \xEDcones em "),n(2306,"a",54),e(2307,"biblioteca de \xEDcones"),t(),e(2308,"."),t()()()(),n(2309,"tr",13)(2310,"td",14)(2311,"div",15)(2312,"span",16),e(2313," infiniteScroll"),i(2314,"br"),t()()(),n(2315,"td",17)(2316,"code",28),e(2317,"boolean"),t()(),n(2318,"td",20)(2319,"em")(2320,"strong"),e(2321,"(opcional)"),t()(),n(2322,"p"),e(2323,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),n(2324,"p")(2325,"strong"),e(2326,"Componentes compat\xEDveis:"),t(),n(2327,"code"),e(2328,"po-combo"),t(),e(2329,", "),n(2330,"code"),e(2331,"po-lookup"),t(),e(2332,"."),t()()(),n(2333,"tr",13)(2334,"td",14)(2335,"div",15)(2336,"span",16),e(2337," infiniteScrollDistance"),i(2338,"br"),t()()(),n(2339,"td",17)(2340,"code",41),e(2341,"number"),t()(),n(2342,"td",20)(2343,"em")(2344,"strong"),e(2345,"(opcional)"),t()(),n(2346,"p"),e(2347,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),n(2348,"strong"),e(2349,"Exemplos"),t(),n(2350,"code"),e(2351,"{ infiniteScrollDistance: 80 }"),t(),e(2352,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),n(2353,"p")(2354,"strong"),e(2355,"Componente compat\xEDvel:"),t(),n(2356,"code"),e(2357,"po-combo"),t(),e(2358,"."),t()()(),n(2359,"tr",13)(2360,"td",14)(2361,"div",15)(2362,"span",16),e(2363," invalidValue"),i(2364,"br"),t()()(),n(2365,"td",17)(2366,"code",28),e(2367,"boolean"),t()(),n(2368,"td",20)(2369,"em")(2370,"strong"),e(2371,"(opcional)"),t()(),n(2372,"p"),e(2373,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),n(2374,"code"),e(2375,"p-field-error-message"),t(),e(2376,"."),t(),n(2377,"blockquote")(2378,"p"),e(2379,"Caso essa propriedade seja definida como "),n(2380,"code"),e(2381,"true"),t(),e(2382,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),n(2383,"p")(2384,"strong"),e(2385,"Componente compat\xEDvel"),t(),e(2386,": "),n(2387,"code"),e(2388,"po-switch"),t()()()(),n(2389,"tr",13)(2390,"td",14)(2391,"div",15)(2392,"span",16),e(2393," isoFormat"),i(2394,"br"),t()()(),n(2395,"td",17)(2396,"code",55),e(2397,"PoDatepickerIsoFormat"),t()(),n(2398,"td",20)(2399,"em")(2400,"strong"),e(2401,"(opcional)"),t()(),n(2402,"p"),e(2403,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),n(2404,"blockquote")(2405,"p"),e(2406,"Veja os valores v\xE1lidos no "),n(2407,"code"),e(2408,"enumPoDatepickerIsoFormat"),t(),e(2409,"."),t()(),n(2410,"p")(2411,"strong"),e(2412,"Componente compat\xEDvel:"),t(),e(2413," po-datepicker"),t()()(),n(2414,"tr",13)(2415,"td",14)(2416,"div",15)(2417,"span",16),e(2418," key"),i(2419,"br"),t()()(),n(2420,"td",17)(2421,"code",28),e(2422,"boolean"),t()(),n(2423,"td",20)(2424,"em")(2425,"strong"),e(2426,"(opcional)"),t()(),n(2427,"p"),e(2428,"Identificador"),t()()(),n(2429,"tr",13)(2430,"td",14)(2431,"div",15)(2432,"span",16),e(2433," keydown"),i(2434,"br"),t()()(),n(2435,"td",17)(2436,"code",29),e(2437,"Function"),t()(),n(2438,"td",20)(2439,"em")(2440,"strong"),e(2441,"(opcional)"),t()(),n(2442,"p"),e(2443,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(2444,"code"),e(2445,"KeyboardEvent"),t(),e(2446," com informa\xE7\xF5es sobre a tecla."),t()()(),n(2447,"tr",13)(2448,"td",14)(2449,"div",15)(2450,"span",16),e(2451," label"),i(2452,"br"),t()()(),n(2453,"td",17)(2454,"code",18),e(2455,"string"),t()(),n(2456,"td",20)(2457,"em")(2458,"strong"),e(2459,"(opcional)"),t()(),n(2460,"p"),e(2461,"R\xF3tulo do campo exibido."),t(),n(2462,"p"),e(2463,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(2464,"code"),e(2465,"label"),t(),e(2466," o valor da propriedade "),n(2467,"code"),e(2468,"property"),t(),e(2469," com a primeira letra em mai\xFAsculo."),t()()(),n(2470,"tr",13)(2471,"td",14)(2472,"div",15)(2473,"span",16),e(2474," labelPosition"),i(2475,"br"),t()()(),n(2476,"td",17)(2477,"code",56),e(2478,"PoSwitchLabelPosition"),t()(),n(2479,"td",20)(2480,"em")(2481,"strong"),e(2482,"(opcional)"),t()(),n(2483,"p"),e(2484,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),n(2485,"blockquote")(2486,"p"),e(2487,"Por padr\xE3o exibe \xE0 direita."),t()()()(),n(2488,"tr",13)(2489,"td",14)(2490,"div",15)(2491,"span",16),e(2492," listboxControlPosition"),i(2493,"br"),t()()(),n(2494,"td",17)(2495,"code",57),e(2496,"'top' "),t(),n(2497,"code",58),e(2498," 'bottom'"),t()(),n(2499,"td",20)(2500,"em")(2501,"strong"),e(2502,"(opcional)"),t()(),n(2503,"p"),e(2504,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),n(2505,"code"),e(2506,"listbox"),t(),e(2507," em rela\xE7\xE3o ao campo ("),n(2508,"code"),e(2509,"top"),t(),e(2510," ou "),n(2511,"code"),e(2512,"bottom"),t(),e(2513,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),n(2514,"p")(2515,"strong"),e(2516,"Componentes compat\xEDveis:"),t(),n(2517,"code"),e(2518,"po-multiselect"),t(),e(2519,", "),n(2520,"code"),e(2521,"po-combo"),t(),e(2522,"."),t()()(),n(2523,"tr",13)(2524,"td",14)(2525,"div",15)(2526,"span",16),e(2527," literals"),i(2528,"br"),t()()(),n(2529,"td",17)(2530,"code",59),e(2531,"PoLookupLiterals "),t(),n(2532,"code",60),e(2533," PoMultiselectLiterals "),t(),n(2534,"code",61),e(2535," PoComboLiterals "),t(),n(2536,"code",62),e(2537," PoDatepickerRangeLiterals "),t(),n(2538,"code",63),e(2539," PoUploadLiterals"),t()(),n(2540,"td",20)(2541,"em")(2542,"strong"),e(2543,"(opcional)"),t()(),n(2544,"p"),e(2545,"Objeto com as literais usadas para os seguintes componentes: "),n(2546,"code"),e(2547,"po-lookup"),t(),e(2548,", "),n(2549,"code"),e(2550,"po-multiselect"),t(),e(2551,", "),n(2552,"code"),e(2553,"po-combo"),t(),e(2554," e "),n(2555,"code"),e(2556,"po-datepicker-range"),t(),e(2557,"."),t(),n(2558,"blockquote")(2559,"p"),e(2560,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),n(2561,"p")(2562,"strong"),e(2563,"Componentes compat\xEDveis:"),t(),n(2564,"code"),e(2565,"po-lookup"),t(),e(2566,", "),n(2567,"code"),e(2568,"po-multiselect"),t(),e(2569,", "),n(2570,"code"),e(2571,"po-combo"),t(),e(2572,", "),n(2573,"code"),e(2574,"po-datepicker-range"),t()()()(),n(2575,"tr",13)(2576,"td",14)(2577,"div",15)(2578,"span",16),e(2579," locale"),i(2580,"br"),t()()(),n(2581,"td",17)(2582,"code",18),e(2583,"string"),t()(),n(2584,"td",20)(2585,"em")(2586,"strong"),e(2587,"(opcional)"),t()(),n(2588,"p"),e(2589,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),n(2590,"a",64)(2591,"code"),e(2592,"I18n"),t()()(),n(2593,"p"),e(2594,`Exemplo de utiliza\xE7\xE3o:
`),n(2595,"code"),e(2596,"[ { property: 'birthday', locale: 'en', type: 'date' }, { property: 'wage', locale: 'ru', type: 'currency' } ];"),t()(),n(2597,"blockquote")(2598,"p"),e(2599,"Para ver quais linguagens suportadas acesse "),n(2600,"a",64)(2601,"code"),e(2602,"I18n"),t()(),e(2603,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),n(2604,"tr",13)(2605,"td",14)(2606,"div",15)(2607,"span",16),e(2608," mask"),i(2609,"br"),t()()(),n(2610,"td",17)(2611,"code",18),e(2612,"string"),t()(),n(2613,"td",20)(2614,"em")(2615,"strong"),e(2616,"(opcional)"),t()(),n(2617,"p"),e(2618,"M\xE1scara para o campo."),t(),n(2619,"p")(2620,"strong"),e(2621,"Componentes compat\xEDveis:"),t(),n(2622,"code"),e(2623,"po-input"),t(),e(2624,"."),t(),n(2625,"blockquote")(2626,"p"),e(2627,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2628,"code"),e(2629,"type: time"),t(),e(2630,"."),t()()()(),n(2631,"tr",13)(2632,"td",14)(2633,"div",15)(2634,"span",16),e(2635," maskFormatModel"),i(2636,"br"),t()()(),n(2637,"td",17)(2638,"code",28),e(2639,"boolean"),t()(),n(2640,"td",20)(2641,"em")(2642,"strong"),e(2643,"(opcional)"),t()(),n(2644,"p"),e(2645,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),n(2646,"code"),e(2647,"false"),t(),e(2648,"."),t(),n(2649,"p")(2650,"strong"),e(2651,"Componentes compat\xEDveis:"),t(),n(2652,"code"),e(2653,"po-input"),t(),e(2654,"."),t(),n(2655,"blockquote")(2656,"p"),e(2657,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2658,"code"),e(2659,"type: time"),t(),e(2660,"."),t()()()(),n(2661,"tr",13)(2662,"td",14)(2663,"div",15)(2664,"span",16),e(2665," maxLength"),i(2666,"br"),t()()(),n(2667,"td",17)(2668,"code",41),e(2669,"number"),t()(),n(2670,"td",20)(2671,"em")(2672,"strong"),e(2673,"(opcional)"),t()(),n(2674,"p"),e(2675,"Tamanho m\xE1ximo de caracteres."),t(),n(2676,"p")(2677,"strong"),e(2678,"Componentes compat\xEDveis:"),t(),n(2679,"code"),e(2680,"po-input"),t(),e(2681,", "),n(2682,"code"),e(2683,"po-number"),t(),e(2684,", "),n(2685,"code"),e(2686,"po-decimal"),t(),e(2687,", "),n(2688,"code"),e(2689,"po-textarea"),t(),e(2690,", "),n(2691,"code"),e(2692,"po-password"),t(),e(2693,"."),t()()(),n(2694,"tr",13)(2695,"td",14)(2696,"div",15)(2697,"span",16),e(2698," maxValue"),i(2699,"br"),t()()(),n(2700,"td",17)(2701,"code",18),e(2702,"string "),t(),n(2703,"code",41),e(2704," number"),t()(),n(2705,"td",20)(2706,"em")(2707,"strong"),e(2708,"(opcional)"),t()(),n(2709,"p"),e(2710,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2711,"em"),e(2712,"number"),t(),e(2713,", "),n(2714,"em"),e(2715,"date"),t(),e(2716," ou "),n(2717,"em"),e(2718,"dateTime"),t(),e(2719,"."),t(),n(2720,"p")(2721,"strong"),e(2722,"Componentes compat\xEDveis:"),t(),n(2723,"code"),e(2724,"po-datepicker"),t(),e(2725,", "),n(2726,"code"),e(2727,"po-datepicker-range"),t(),e(2728,", "),n(2729,"code"),e(2730,"po-number"),t(),e(2731,", "),n(2732,"code"),e(2733,"po-decimal"),t()()()(),n(2734,"tr",13)(2735,"td",14)(2736,"div",15)(2737,"span",16),e(2738," minLength"),i(2739,"br"),t()()(),n(2740,"td",17)(2741,"code",41),e(2742,"number"),t()(),n(2743,"td",20)(2744,"em")(2745,"strong"),e(2746,"(opcional)"),t()(),n(2747,"p"),e(2748,"Tamanho m\xEDnimo de caracteres."),t(),n(2749,"p")(2750,"strong"),e(2751,"Componentes compat\xEDveis:"),t(),n(2752,"code"),e(2753,"po-input"),t(),e(2754,", "),n(2755,"code"),e(2756,"po-number"),t(),e(2757,", "),n(2758,"code"),e(2759,"po-decimal"),t(),e(2760,", "),n(2761,"code"),e(2762,"po-textarea"),t(),e(2763,", "),n(2764,"code"),e(2765,"po-password"),t(),e(2766,"."),t()()(),n(2767,"tr",13)(2768,"td",14)(2769,"div",15)(2770,"span",16),e(2771," minValue"),i(2772,"br"),t()()(),n(2773,"td",17)(2774,"code",18),e(2775,"string "),t(),n(2776,"code",41),e(2777," number"),t()(),n(2778,"td",20)(2779,"em")(2780,"strong"),e(2781,"(opcional)"),t()(),n(2782,"p"),e(2783,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2784,"em"),e(2785,"number"),t(),e(2786,", "),n(2787,"em"),e(2788,"date"),t(),e(2789," ou "),n(2790,"em"),e(2791,"dateTime"),t(),e(2792,"."),t(),n(2793,"p")(2794,"strong"),e(2795,"Componentes compat\xEDveis:"),t(),n(2796,"code"),e(2797,"po-datepicker"),t(),e(2798,", "),n(2799,"code"),e(2800,"po-datepicker-range"),t(),e(2801,", "),n(2802,"code"),e(2803,"po-number"),t(),e(2804,", "),n(2805,"code"),e(2806,"po-decimal"),t()()()(),n(2807,"tr",13)(2808,"td",14)(2809,"div",15)(2810,"span",16),e(2811," multiple"),i(2812,"br"),t()()(),n(2813,"td",17)(2814,"code",28),e(2815,"boolean"),t()(),n(2816,"td",20)(2817,"em")(2818,"strong"),e(2819,"(opcional)"),t()(),n(2820,"p"),e(2821,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(2822,"p")(2823,"strong"),e(2824,"Componente compat\xEDvel:"),t(),n(2825,"code"),e(2826,"po-lookup"),t(),e(2827,", "),n(2828,"code"),e(2829,"po-upload"),t()()()(),n(2830,"tr",13)(2831,"td",14)(2832,"div",15)(2833,"span",16),e(2834," noAutocomplete"),i(2835,"br"),t()()(),n(2836,"td",17)(2837,"code",28),e(2838,"boolean"),t()(),n(2839,"td",20)(2840,"em")(2841,"strong"),e(2842,"(opcional)"),t()(),n(2843,"p"),e(2844,"Define a propriedade nativa "),n(2845,"code"),e(2846,"autocomplete"),t(),e(2847," do campo como off."),t(),n(2848,"p")(2849,"strong"),e(2850,"Componentes compat\xEDveis:"),t(),n(2851,"code"),e(2852,"po-datepicker"),t(),e(2853,", "),n(2854,"code"),e(2855,"po-datepicker-range"),t(),e(2856,", "),n(2857,"code"),e(2858,"po-input"),t(),e(2859,", "),n(2860,"code"),e(2861,"po-number"),t(),e(2862,", "),n(2863,"code"),e(2864,"po-decimal"),t(),e(2865,", "),n(2866,"code"),e(2867,"po-lookup"),t(),e(2868,", "),n(2869,"code"),e(2870,"po-password"),t()()()(),n(2871,"tr",13)(2872,"td",14)(2873,"div",15)(2874,"span",16),e(2875," offsetColumns"),i(2876,"br"),t()()(),n(2877,"td",17)(2878,"code",41),e(2879,"number"),t()(),n(2880,"td",20)(2881,"em")(2882,"strong"),e(2883,"(opcional)"),t()(),n(2884,"p"),e(2885,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),n(2886,"p"),e(2887,"Deve ser usado o sistema de "),n(2888,"strong"),e(2889,"grid"),t(),e(2890," do PO (1 ... 12 colunas)."),t(),n(2891,"blockquote")(2892,"p"),e(2893,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(2894,"tr",13)(2895,"td",14)(2896,"div",15)(2897,"span",16),e(2898," offsetLgColumns"),i(2899,"br"),t()()(),n(2900,"td",17)(2901,"code",41),e(2902,"number"),t()(),n(2903,"td",20)(2904,"em")(2905,"strong"),e(2906,"(opcional)"),t()(),n(2907,"p"),e(2908,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(2909,"p"),e(2910,"Deve ser usado o sistema de "),n(2911,"strong"),e(2912,"grid"),t(),e(2913," do PO (1 ... 12 colunas)."),t(),n(2914,"blockquote")(2915,"p"),e(2916,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2917,"code"),e(2918,"offsetColumns"),t(),e(2919,"."),t()()()(),n(2920,"tr",13)(2921,"td",14)(2922,"div",15)(2923,"span",16),e(2924," offsetMdColumns"),i(2925,"br"),t()()(),n(2926,"td",17)(2927,"code",41),e(2928,"number"),t()(),n(2929,"td",20)(2930,"em")(2931,"strong"),e(2932,"(opcional)"),t()(),n(2933,"p"),e(2934,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(2935,"p"),e(2936,"Deve ser usado o sistema de "),n(2937,"strong"),e(2938,"grid"),t(),e(2939," do PO (1 ... 12 colunas)."),t(),n(2940,"blockquote")(2941,"p"),e(2942,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2943,"code"),e(2944,"offsetColumns"),t(),e(2945,"."),t()()()(),n(2946,"tr",13)(2947,"td",14)(2948,"div",15)(2949,"span",16),e(2950," offsetSmColumns"),i(2951,"br"),t()()(),n(2952,"td",17)(2953,"code",41),e(2954,"number"),t()(),n(2955,"td",20)(2956,"em")(2957,"strong"),e(2958,"(opcional)"),t()(),n(2959,"p"),e(2960,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(2961,"p"),e(2962,"Deve ser usado o sistema de "),n(2963,"strong"),e(2964,"grid"),t(),e(2965," do PO (1 ... 12 colunas)."),t(),n(2966,"blockquote")(2967,"p"),e(2968,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2969,"code"),e(2970,"offsetColumns"),t(),e(2971,"."),t()()()(),n(2972,"tr",13)(2973,"td",14)(2974,"div",15)(2975,"span",16),e(2976," offsetXlColumns"),i(2977,"br"),t()()(),n(2978,"td",17)(2979,"code",41),e(2980,"number"),t()(),n(2981,"td",20)(2982,"em")(2983,"strong"),e(2984,"(opcional)"),t()(),n(2985,"p"),e(2986,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2987,"p"),e(2988,"Deve ser usado o sistema de "),n(2989,"strong"),e(2990,"grid"),t(),e(2991," do PO (1 ... 12 colunas)."),t(),n(2992,"blockquote")(2993,"p"),e(2994,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2995,"code"),e(2996,"offsetColumns"),t(),e(2997,"."),t()()()(),n(2998,"tr",13)(2999,"td",14)(3e3,"div",15)(3001,"span",16),e(3002," onError"),i(3003,"br"),t()()(),n(3004,"td",17)(3005,"code",29),e(3006,"Function"),t()(),n(3007,"td",20)(3008,"em")(3009,"strong"),e(3010,"(opcional)"),t()(),n(3011,"p"),e(3012,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(3013,"blockquote")(3014,"p"),e(3015,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3016,"code"),e(3017,"HttpErrorResponse"),t(),e(3018,"."),t()(),n(3019,"p")(3020,"strong"),e(3021,"Componente compat\xEDvel"),t(),e(3022,": "),n(3023,"code"),e(3024,"po-upload"),t()()()(),n(3025,"tr",13)(3026,"td",14)(3027,"div",15)(3028,"span",16),e(3029," onSuccess"),i(3030,"br"),t()()(),n(3031,"td",17)(3032,"code",29),e(3033,"Function"),t()(),n(3034,"td",20)(3035,"em")(3036,"strong"),e(3037,"(opcional)"),t()(),n(3038,"p"),e(3039,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(3040,"blockquote")(3041,"p"),e(3042,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3043,"code"),e(3044,"HttpResponse"),t(),e(3045,"."),t()(),n(3046,"p")(3047,"strong"),e(3048,"Componente compat\xEDvel"),t(),e(3049,": "),n(3050,"code"),e(3051,"po-upload"),t()()()(),n(3052,"tr",13)(3053,"td",14)(3054,"div",15)(3055,"span",16),e(3056," onUpload"),i(3057,"br"),t()()(),n(3058,"td",17)(3059,"code",29),e(3060,"Function"),t()(),n(3061,"td",20)(3062,"em")(3063,"strong"),e(3064,"(opcional)"),t()(),n(3065,"p"),e(3066,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(3067,"pre")(3068,"code"),e(3069,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(3070,"p")(3071,"strong"),e(3072,"Componente compat\xEDvel"),t(),e(3073,": "),n(3074,"code"),e(3075,"po-upload"),t()()()(),n(3076,"tr",13)(3077,"td",14)(3078,"div",15)(3079,"span",16),e(3080," optional"),i(3081,"br"),t()()(),n(3082,"td",17)(3083,"code",28),e(3084,"boolean"),t()(),n(3085,"td",20)(3086,"em")(3087,"strong"),e(3088,"(opcional)"),t()(),n(3089,"p"),e(3090,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(3091,"blockquote")(3092,"p"),e(3093,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),n(3094,"ul")(3095,"li"),e(3096,"O campo for "),n(3097,"code"),e(3098,"required"),t(),e(3099,", ou;"),t(),n(3100,"li"),e(3101,"N\xE3o possuir "),n(3102,"code"),e(3103,"help"),t(),e(3104," e "),n(3105,"code"),e(3106,"label"),t(),e(3107,"."),t()()()(),n(3108,"tr",13)(3109,"td",14)(3110,"div",15)(3111,"span",16),e(3112," options"),i(3113,"br"),t()()(),n(3114,"td",17)(3115,"code",32),e(3116,"Array<string> "),t(),n(3117,"code",65),e(3118," Array<PoSelectOption> "),t(),n(3119,"code",66),e(3120," Array<PoMultiselectOption> "),t(),n(3121,"code",67),e(3122," Array<PoCheckboxGroupOption> "),t(),n(3123,"code",68),e(3124," Array<any>"),t()(),n(3125,"td",20)(3126,"em")(3127,"strong"),e(3128,"(opcional)"),t()(),n(3129,"p"),e(3130,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),n(3131,"p")(3132,"strong"),e(3133,"Componentes compat\xEDveis:"),t(),n(3134,"code"),e(3135,"po-select"),t(),e(3136,", "),n(3137,"code"),e(3138,"po-radio-group"),t(),e(3139,", "),n(3140,"code"),e(3141,"po-checkbox-group"),t(),e(3142,", "),n(3143,"code"),e(3144,"po-multiselect"),t(),e(3145,"."),t()()(),n(3146,"tr",13)(3147,"td",14)(3148,"div",15)(3149,"span",16),e(3150," optionsMulti"),i(3151,"br"),t()()(),n(3152,"td",17)(3153,"code",28),e(3154,"boolean"),t()(),n(3155,"td",20)(3156,"em")(3157,"strong"),e(3158,"(opcional)"),t()(),n(3159,"p"),e(3160,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),n(3161,"tr",13)(3162,"td",14)(3163,"div",15)(3164,"span",16),e(3165," optionsService"),i(3166,"br"),t()()(),n(3167,"td",17)(3168,"code",18),e(3169,"string "),t(),n(3170,"code",69),e(3171," PoComboFilter "),t(),n(3172,"code",70),e(3173," PoMultiselectFilter"),t()(),n(3174,"td",20)(3175,"em")(3176,"strong"),e(3177,"(opcional)"),t()(),n(3178,"p"),e(3179,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),n(3180,"strong"),e(3181,"Importante"),t()(),n(3182,"blockquote")(3183,"p"),e(3184,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),n(3185,"a",71),e(3186,"guia de API do PO UI"),t(),e(3187,"."),t()()()(),n(3188,"tr",13)(3189,"td",14)(3190,"div",15)(3191,"span",16),e(3192," order"),i(3193,"br"),t()()(),n(3194,"td",17)(3195,"code",41),e(3196,"number"),t()(),n(3197,"td",20)(3198,"em")(3199,"strong"),e(3200,"(opcional)"),t()(),n(3201,"p"),e(3202,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),n(3203,"p"),e(3204,"Exemplo de utiliza\xE7\xE3o:"),t(),n(3205,"p")(3206,"code"),e(3207,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),n(3208,"p"),e(3209,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),n(3210,"code"),e(3211,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),n(3212,"p"),e(3213,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),n(3214,"p"),e(3215,"Campos sem "),n(3216,"code"),e(3217,"order"),t(),e(3218,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),n(3219,"tr",13)(3220,"td",14)(3221,"div",15)(3222,"span",16),e(3223," params"),i(3224,"br"),t()()(),n(3225,"td",17)(3226,"code",33),e(3227,"any"),t()(),n(3228,"td",20)(3229,"em")(3230,"strong"),e(3231,"(opcional)"),t()(),n(3232,"p"),e(3233,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),n(3234,"code"),e(3235,"po-lookup"),t(),e(3236,` e
`),n(3237,"code"),e(3238,"po-combo"),t(),e(3239,"."),t(),n(3240,"p"),e(3241,"Por exemplo, para o par\xE2metro "),n(3242,"code"),e(3243,"{ age: 23 }"),t(),e(3244," a URL da requisi\xE7\xE3o ficaria:"),t(),n(3245,"p")(3246,"code"),e(3247,"url + ?age=23&filter=Peter"),t()()()(),n(3248,"tr",13)(3249,"td",14)(3250,"div",15)(3251,"span",16),e(3252," pattern"),i(3253,"br"),t()()(),n(3254,"td",17)(3255,"code",18),e(3256,"string"),t()(),n(3257,"td",20)(3258,"em")(3259,"strong"),e(3260,"(opcional)"),t()(),n(3261,"p"),e(3262,"Regex para valida\xE7\xE3o do campo."),t(),n(3263,"p")(3264,"strong"),e(3265,"Componentes compat\xEDveis:"),t(),n(3266,"code"),e(3267,"po-input"),t(),e(3268,", "),n(3269,"code"),e(3270,"po-password"),t(),e(3271,"."),t()()(),n(3272,"tr",13)(3273,"td",14)(3274,"div",15)(3275,"span",16),e(3276," placeholder"),i(3277,"br"),t()()(),n(3278,"td",17)(3279,"code",18),e(3280,"string"),t()(),n(3281,"td",20)(3282,"em")(3283,"strong"),e(3284,"(opcional)"),t()(),n(3285,"p"),e(3286,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),n(3287,"tr",13)(3288,"td",14)(3289,"div",15)(3290,"span",16),e(3291," placeholderSearch"),i(3292,"br"),t()()(),n(3293,"td",17)(3294,"code",18),e(3295,"string"),t()(),n(3296,"td",20)(3297,"em")(3298,"strong"),e(3299,"(opcional)"),t()(),n(3300,"p"),e(3301,"Placeholder do campo de pesquisa do "),n(3302,"code"),e(3303,"po-multiselect"),t(),e(3304,"."),t(),n(3305,"blockquote")(3306,"p"),e(3307,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),n(3308,"tr",13)(3309,"td",14)(3310,"div",15)(3311,"span",16),e(3312," property"),i(3313,"br"),t()()(),n(3314,"td",17)(3315,"code",18),e(3316,"string"),t()(),n(3317,"td",20)(3318,"p"),e(3319,"Nome de refer\xEAncia do campo."),t()()(),n(3320,"tr",13)(3321,"td",14)(3322,"div",15)(3323,"span",16),e(3324," range"),i(3325,"br"),t()()(),n(3326,"td",17)(3327,"code",28),e(3328,"boolean"),t()(),n(3329,"td",20)(3330,"em")(3331,"strong"),e(3332,"(opcional)"),t()(),n(3333,"p"),e(3334,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),n(3335,"blockquote")(3336,"p"),e(3337,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),n(3338,"tr",13)(3339,"td",14)(3340,"div",15)(3341,"span",16),e(3342," readonly"),i(3343,"br"),t()()(),n(3344,"td",17)(3345,"code",28),e(3346,"boolean"),t()(),n(3347,"td",20)(3348,"em")(3349,"strong"),e(3350,"(opcional)"),t()(),n(3351,"p"),e(3352,"Indica que o campo ser\xE1 somente leitura."),t(),n(3353,"p")(3354,"strong"),e(3355,"Componentes compat\xEDveis:"),t(),n(3356,"code"),e(3357,"po-datepicker"),t(),e(3358,", "),n(3359,"code"),e(3360,"po-datepicker-range"),t(),e(3361,", "),n(3362,"code"),e(3363,"po-input"),t(),e(3364,", "),n(3365,"code"),e(3366,"po-number"),t(),e(3367,", "),n(3368,"code"),e(3369,"po-decimal"),t(),e(3370,", "),n(3371,"code"),e(3372,"po-select"),t(),e(3373,", "),n(3374,"code"),e(3375,"po-textarea"),t(),e(3376,", "),n(3377,"code"),e(3378,"po-password"),t()()()(),n(3379,"tr",13)(3380,"td",14)(3381,"div",15)(3382,"span",16),e(3383," removeInitialFilter"),i(3384,"br"),t()()(),n(3385,"td",17)(3386,"code",28),e(3387,"boolean"),t()(),n(3388,"td",20)(3389,"em")(3390,"strong"),e(3391,"(opcional)"),t()(),n(3392,"p"),e(3393,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),n(3394,"blockquote")(3395,"p"),e(3396,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),n(3397,"p")(3398,"strong"),e(3399,"Componente compat\xEDvel"),t(),e(3400,": "),n(3401,"code"),e(3402,"po-combo"),t()()()(),n(3403,"tr",13)(3404,"td",14)(3405,"div",15)(3406,"span",16),e(3407," required"),i(3408,"br"),t()()(),n(3409,"td",17)(3410,"code",28),e(3411,"boolean"),t()(),n(3412,"td",20)(3413,"em")(3414,"strong"),e(3415,"(opcional)"),t()(),n(3416,"p"),e(3417,"Define a obrigatoriedade do campo."),t()()(),n(3418,"tr",13)(3419,"td",14)(3420,"div",15)(3421,"span",16),e(3422," requiredFieldErrorMessage"),i(3423,"br"),t()()(),n(3424,"td",17)(3425,"code",28),e(3426,"boolean"),t()(),n(3427,"td",20)(3428,"em")(3429,"strong"),e(3430,"(opcional)"),t()(),n(3431,"p"),e(3432,"Exibe a mensagem setada na propriedade "),n(3433,"code"),e(3434,"errorMessage"),t(),e(3435," se o campo estiver vazio e for requerido."),t(),n(3436,"blockquote")(3437,"p"),e(3438,"Necess\xE1rio que a propriedade "),n(3439,"code"),e(3440,"required"),t(),e(3441," esteja habilitada."),t()(),n(3442,"p")(3443,"strong"),e(3444,"Componentes compat\xEDveis:"),t(),n(3445,"code"),e(3446,"po-datepicker"),t(),e(3447,", "),n(3448,"code"),e(3449,"po-input"),t(),e(3450,", "),n(3451,"code"),e(3452,"po-number"),t(),e(3453,", "),n(3454,"code"),e(3455,"po-decimal"),t(),e(3456,", "),n(3457,"code"),e(3458,"po-password"),t(),e(3459,"."),t()()(),n(3460,"tr",13)(3461,"td",14)(3462,"div",15)(3463,"span",16),e(3464," restrictions"),i(3465,"br"),t()()(),n(3466,"td",17)(3467,"code",72),e(3468,"PoUploadFileRestrictions"),t()(),n(3469,"td",20)(3470,"em")(3471,"strong"),e(3472,"(opcional)"),t()(),n(3473,"p"),e(3474,"Objeto que segue a defini\xE7\xE3o da interface "),n(3475,"code"),e(3476,"PoUploadFileRestrictions"),t(),e(3477,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),n(3478,"p")(3479,"strong"),e(3480,"Componente compat\xEDvel"),t(),e(3481,": "),n(3482,"code"),e(3483,"po-upload"),t()()()(),n(3484,"tr",13)(3485,"td",14)(3486,"div",15)(3487,"span",16),e(3488," rows"),i(3489,"br"),t()()(),n(3490,"td",17)(3491,"code",41),e(3492,"number"),t()(),n(3493,"td",20)(3494,"em")(3495,"strong"),e(3496,"(opcional)"),t()(),n(3497,"p"),e(3498,"Quantidade de linhas exibidas no "),n(3499,"code"),e(3500,"po-textarea"),t(),e(3501,"."),t()()(),n(3502,"tr",13)(3503,"td",14)(3504,"div",15)(3505,"span",16),e(3506," searchService"),i(3507,"br"),t()()(),n(3508,"td",17)(3509,"code",18),e(3510,"string "),t(),n(3511,"code",73),e(3512," PoLookupFilter"),t()(),n(3513,"td",20)(3514,"em")(3515,"strong"),e(3516,"(opcional)"),t()(),n(3517,"p"),e(3518,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),n(3519,"code"),e(3520,"columns"),t(),e(3521,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),n(3522,"strong"),e(3523,"Importante:"),t()(),n(3524,"blockquote")(3525,"p"),e(3526,"Caso utilizar a propriedade "),n(3527,"code"),e(3528,"optionsService"),t(),e(3529,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),n(3530,"a",71),e(3531,"guia de API do PO UI"),t(),e(3532,"."),t()()()(),n(3533,"tr",13)(3534,"td",14)(3535,"div",15)(3536,"span",16),e(3537," secret"),i(3538,"br"),t()()(),n(3539,"td",17)(3540,"code",28),e(3541,"boolean"),t()(),n(3542,"td",20)(3543,"em")(3544,"strong"),e(3545,"(opcional)"),t()(),n(3546,"p"),e(3547,"Esconde a informa\xE7\xE3o estilo "),n(3548,"em"),e(3549,"password"),t(),e(3550,", pode ser utilizado quando o tipo de dado for "),n(3551,"em"),e(3552,"string"),t(),e(3553,"."),t()()(),n(3554,"tr",13)(3555,"td",14)(3556,"div",15)(3557,"span",16),e(3558," showRequired"),i(3559,"br"),t()()(),n(3560,"td",17)(3561,"code",28),e(3562,"boolean"),t()(),n(3563,"td",20)(3564,"em")(3565,"strong"),e(3566,"(opcional)"),t()(),n(3567,"p"),e(3568,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(3569,"blockquote")(3570,"p"),e(3571,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(3572,"ul")(3573,"li"),e(3574,"N\xE3o possuir "),n(3575,"code"),e(3576,"p-help"),t(),e(3577," e/ou "),n(3578,"code"),e(3579,"p-label"),t(),e(3580,"."),t()()()(),n(3581,"tr",13)(3582,"td",14)(3583,"div",15)(3584,"span",16),e(3585," size"),i(3586,"br"),t()()(),n(3587,"td",17)(3588,"code",18),e(3589,"string"),t()(),n(3590,"td",20)(3591,"em")(3592,"strong"),e(3593,"(opcional)"),t()(),n(3594,"p"),e(3595,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),n(3596,"ul")(3597,"li")(3598,"code"),e(3599,"small"),t(),e(3600,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(3601,"li")(3602,"code"),e(3603,"medium"),t(),e(3604,": aplica a medida medium de cada componente."),t(),n(3605,"li")(3606,"code"),e(3607,"large"),t(),e(3608,": aplica a medida large de cada componente (dispon\xEDvel para "),n(3609,"code"),e(3610,"po-checkbox"),t(),e(3611," e "),n(3612,"code"),e(3613,"po-radio-group"),t(),e(3614,")."),n(3615,"blockquote")(3616,"p"),e(3617,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(3618,"code"),e(3619,"medium"),t(),e(3620,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(3621,"a",21),e(3622,"po-theme"),t(),e(3623,"."),t()()()()()(),n(3624,"tr",13)(3625,"td",14)(3626,"div",15)(3627,"span",16),e(3628," sort"),i(3629,"br"),t()()(),n(3630,"td",17)(3631,"code",28),e(3632,"boolean"),t()(),n(3633,"td",20)(3634,"em")(3635,"strong"),e(3636,"(opcional)"),t()(),n(3637,"p"),e(3638,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),n(3639,"p")(3640,"strong"),e(3641,"Componentes compat\xEDveis:"),t(),n(3642,"code"),e(3643,"po-combo"),t(),e(3644,", po-multiselect"),t()()(),n(3645,"tr",13)(3646,"td",14)(3647,"div",15)(3648,"span",16),e(3649," step"),i(3650,"br"),t()()(),n(3651,"td",17)(3652,"code",41),e(3653,"number"),t()(),n(3654,"td",20)(3655,"em")(3656,"strong"),e(3657,"(opcional)"),t()(),n(3658,"p"),e(3659,"Intervalo utilizado no "),n(3660,"code"),e(3661,"po-number"),t(),e(3662,"."),t()()(),n(3663,"tr",13)(3664,"td",14)(3665,"div",15)(3666,"span",16),e(3667," thousandMaxlength"),i(3668,"br"),t()()(),n(3669,"td",17)(3670,"code",41),e(3671,"number"),t()(),n(3672,"td",20)(3673,"em")(3674,"strong"),e(3675,"(opcional)"),t()(),n(3676,"p"),e(3677,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),n(3678,"blockquote")(3679,"p"),e(3680,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(3681,"code"),e(3682,"type"),t(),e(3683," for "),n(3684,"em"),e(3685,"currency"),t(),e(3686," ou "),n(3687,"em"),e(3688,"decimal"),t(),e(3689,"."),t()()()(),n(3690,"tr",13)(3691,"td",14)(3692,"div",15)(3693,"span",16),e(3694," type"),i(3695,"br"),t()()(),n(3696,"td",17)(3697,"code",18),e(3698,"string "),t(),n(3699,"code",74),e(3700," PoDynamicFieldType"),t()(),n(3701,"td",20)(3702,"em")(3703,"strong"),e(3704,"(opcional)"),t()(),n(3705,"p"),e(3706,"Tipo do valor campo."),t(),n(3707,"p"),e(3708,"Valores v\xE1lidos:"),t(),n(3709,"ul")(3710,"li")(3711,"code"),e(3712,"boolean"),t(),e(3713,": Valores "),n(3714,"em"),e(3715,"booleanos"),t(),e(3716,"."),t(),n(3717,"li")(3718,"code"),e(3719,"currency"),t(),e(3720,": Valores monet\xE1rios."),t(),n(3721,"li")(3722,"code"),e(3723,"decimal"),t(),e(3724,": Valores decimais."),t(),n(3725,"li")(3726,"code"),e(3727,"date"),t(),e(3728,": Valores de datas."),n(3729,"ul")(3730,"li"),e(3731,"Aceita os tipos "),n(3732,"strong"),e(3733,"string"),t(),e(3734," e "),n(3735,"strong"),e(3736,"Date"),t(),e(3737,` padr\xE3o do Javascript,
por exemplo: `),n(3738,"code"),e(3739,"'2017-11-28'"),t(),e(3740," ou "),n(3741,"code"),e(3742,"new Date(2017, 10, 28)"),t(),e(3743,"."),t()()(),n(3744,"li")(3745,"code"),e(3746,"dateTime"),t(),e(3747,": Valor de data com hor\xE1rio."),n(3748,"ul")(3749,"li"),e(3750,"Aceita o tipo "),n(3751,"em"),e(3752,"string"),t(),e(3753," no formato "),n(3754,"strong"),e(3755,"ISO-8601"),t(),e(3756," extendido "),n(3757,"strong"),e(3758,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(3759,`
e o tipo `),n(3760,"strong"),e(3761,"Date"),t(),e(3762," padr\xE3o do Javascript, por exemplo: "),n(3763,"code"),e(3764,"'2017-11-28T00:00:00-02:00'"),t(),e(3765," ou "),n(3766,"code"),e(3767,"new Date(2017, 10, 28)"),t(),e(3768,"."),t()()(),n(3769,"li")(3770,"code"),e(3771,"number"),t(),e(3772,": Valores num\xE9ricos."),t(),n(3773,"li")(3774,"code"),e(3775,"string"),t(),e(3776,": Textos."),t(),n(3777,"li")(3778,"code"),e(3779,"time"),t(),e(3780,": Valor do hor\xE1rio."),n(3781,"ul")(3782,"li"),e(3783,"Aceita o tipo "),n(3784,"strong"),e(3785,"string"),t(),e(3786," nos formatos "),n(3787,"strong"),e(3788,"'HH:mm:ss'"),t(),e(3789," ou "),n(3790,"strong"),e(3791,"'HH:mm:ss.ffffff'"),t(),e(3792,", por exemplo: "),n(3793,"code"),e(3794,"'23:12:45'"),t(),e(3795,"."),t()()()()()(),n(3796,"tr",13)(3797,"td",14)(3798,"div",15)(3799,"span",16),e(3800," url"),i(3801,"br"),t()()(),n(3802,"td",17)(3803,"code",18),e(3804,"string"),t()(),n(3805,"td",20)(3806,"em")(3807,"strong"),e(3808,"(opcional)"),t()(),n(3809,"p"),e(3810,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),n(3811,"p")(3812,"strong"),e(3813,"Componente compat\xEDvel"),t(),e(3814,": "),n(3815,"code"),e(3816,"po-upload"),t()()()(),n(3817,"tr",13)(3818,"td",14)(3819,"div",15)(3820,"span",16),e(3821," validate"),i(3822,"br"),t()()(),n(3823,"td",17)(3824,"code",18),e(3825,"string "),t(),n(3826,"code",29),e(3827," Function"),t()(),n(3828,"td",20)(3829,"em")(3830,"strong"),e(3831,"(opcional)"),t()(),n(3832,"p"),e(3833,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(3834,"strong"),e(3835,"mudan\xE7as do campo"),t(),e(3836,"."),t(),n(3837,"ul")(3838,"li"),e(3839,"A propriedade aceita os seguintes tipos:"),t()(),n(3840,"ul")(3841,"li")(3842,"strong"),e(3843,"String"),t(),e(3844,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),n(3845,"code"),e(3846,"POST"),t(),e(3847,"."),t(),n(3848,"li")(3849,"strong"),e(3850,"Function"),t(),e(3851,": M\xE9todo que ser\xE1 executado."),t()(),n(3852,"p"),e(3853,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),n(3854,"code"),e(3855,"PoDynamicFormFieldChanged"),t(),e(3856,":"),t(),n(3857,"p")(3858,"code"),e(3859,"{ property: 'property name', value: 'new value' }"),t()(),n(3860,"p"),e(3861,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(3862,"a",75),e(3863,"PoDynamicFormFieldValidation"),t(),e(3864,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),n(3865,"pre")(3866,"code"),e(3867,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),n(3868,"p"),e(3869,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(3870,"code"),e(3871,"bind"),t(),e(3872,`, por exemplo:
`),n(3873,"code"),e(3874,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),n(3875,"tr",13)(3876,"td",14)(3877,"div",15)(3878,"span",16),e(3879," visible"),i(3880,"br"),t()()(),n(3881,"td",17)(3882,"code",28),e(3883,"boolean"),t()(),n(3884,"td",20)(3885,"em")(3886,"strong"),e(3887,"(opcional)"),t()(),n(3888,"p"),e(3889,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),n(3890,"h4",38)(3891,"code",5),e(3892,"PoDynamicFormLoad"),t()(),n(3893,"div",2)(3894,"p"),i(3895,"a",76),t(),n(3896,"p"),e(3897,"Estrutura de retorno no carregamento do formul\xE1rio."),t()(),n(3898,"h4",9),e(3899,"Propriedades"),t(),n(3900,"table",10)(3901,"tr",11)(3902,"th",12),e(3903,"Nome"),t(),n(3904,"th",12),e(3905,"Tipo"),t(),n(3906,"th",12),e(3907,"Descri\xE7\xE3o"),t()(),n(3908,"tr",13)(3909,"td",14)(3910,"div",15)(3911,"span",16),e(3912," fields"),i(3913,"br"),t()()(),n(3914,"td",17)(3915,"code",22),e(3916,"Array<PoDynamicFormField>"),t()(),n(3917,"td",20)(3918,"em")(3919,"strong"),e(3920,"(opcional)"),t()(),n(3921,"p"),e(3922,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(3923,"blockquote")(3924,"p"),e(3925,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),t()()()(),n(3926,"tr",13)(3927,"td",14)(3928,"div",15)(3929,"span",16),e(3930," focus"),i(3931,"br"),t()()(),n(3932,"td",17)(3933,"code",18),e(3934,"string"),t()(),n(3935,"td",20)(3936,"em")(3937,"strong"),e(3938,"(opcional)"),t()(),n(3939,"p"),e(3940,"Nome do campo que receber\xE1 o foco."),t(),n(3941,"p"),e(3942,"Exemplo:"),t(),n(3943,"pre")(3944,"code"),e(3945,`focus: 'name'
`),t()()()(),n(3946,"tr",13)(3947,"td",14)(3948,"div",15)(3949,"span",16),e(3950," value"),i(3951,"br"),t()()(),n(3952,"td",17)(3953,"code",33),e(3954,"any"),t()(),n(3955,"td",20)(3956,"em")(3957,"strong"),e(3958,"(opcional)"),t()(),n(3959,"p"),e(3960,"Objeto contendo os novos valores."),t(),n(3961,"p"),e(3962,"Exemplo:"),t(),n(3963,"pre")(3964,"code"),e(3965,`{
  name: 'new name',
  age: 10
}
`),t()(),n(3966,"blockquote")(3967,"p"),e(3968,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(3969,"h4",38)(3970,"code",5),e(3971,"PoDynamicFormFieldChanged"),t()(),n(3972,"div",2)(3973,"p"),e(3974,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),t()(),n(3975,"h4",9),e(3976,"Propriedades"),t(),n(3977,"table",10)(3978,"tr",11)(3979,"th",12),e(3980,"Nome"),t(),n(3981,"th",12),e(3982,"Tipo"),t(),n(3983,"th",12),e(3984,"Descri\xE7\xE3o"),t()(),n(3985,"tr",13)(3986,"td",14)(3987,"div",15)(3988,"span",16),e(3989," property"),i(3990,"br"),t()()(),n(3991,"td",17)(3992,"code",18),e(3993,"string"),t()(),n(3994,"td",20)(3995,"p"),e(3996,"Valor da propriedade do campo."),t()()(),n(3997,"tr",13)(3998,"td",14)(3999,"div",15)(4e3,"span",16),e(4001," value"),i(4002,"br"),t()()(),n(4003,"td",17)(4004,"code",33),e(4005,"any"),t()(),n(4006,"td",20)(4007,"p"),e(4008,"Novo valor do campo."),t()()()(),n(4009,"h4",38)(4010,"code",5),e(4011,"PoDynamicFormFieldValidation"),t()(),n(4012,"div",2)(4013,"p"),i(4014,"a",77),t(),n(4015,"p"),e(4016,"Estrutura de retorno da valida\xE7\xE3o de um campo."),t()(),n(4017,"h4",9),e(4018,"Propriedades"),t(),n(4019,"table",10)(4020,"tr",11)(4021,"th",12),e(4022,"Nome"),t(),n(4023,"th",12),e(4024,"Tipo"),t(),n(4025,"th",12),e(4026,"Descri\xE7\xE3o"),t()(),n(4027,"tr",13)(4028,"td",14)(4029,"div",15)(4030,"span",16),e(4031," field"),i(4032,"br"),t()()(),n(4033,"td",17)(4034,"code",78),e(4035,"PoDynamicFormField"),t()(),n(4036,"td",20)(4037,"em")(4038,"strong"),e(4039,"(opcional)"),t()(),n(4040,"p"),e(4041,"Novas defini\xE7\xF5es das propriedades do campo."),t(),n(4042,"blockquote")(4043,"p"),e(4044,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),t()()()(),n(4045,"tr",13)(4046,"td",14)(4047,"div",15)(4048,"span",16),e(4049," focus"),i(4050,"br"),t()()(),n(4051,"td",17)(4052,"code",28),e(4053,"boolean"),t()(),n(4054,"td",20)(4055,"em")(4056,"strong"),e(4057,"(opcional)"),t()(),n(4058,"p"),e(4059,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),t()()(),n(4060,"tr",13)(4061,"td",14)(4062,"div",15)(4063,"span",16),e(4064," value"),i(4065,"br"),t()()(),n(4066,"td",17)(4067,"code",33),e(4068,"any"),t()(),n(4069,"td",20)(4070,"em")(4071,"strong"),e(4072,"(opcional)"),t()(),n(4073,"p"),e(4074,"Novo valor do campo"),t()()()(),n(4075,"h4",38)(4076,"code",5),e(4077,"PoDynamicFormValidation"),t()(),n(4078,"div",2)(4079,"p"),i(4080,"a",79),t(),n(4081,"p"),e(4082,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),t()(),n(4083,"h4",9),e(4084,"Propriedades"),t(),n(4085,"table",10)(4086,"tr",11)(4087,"th",12),e(4088,"Nome"),t(),n(4089,"th",12),e(4090,"Tipo"),t(),n(4091,"th",12),e(4092,"Descri\xE7\xE3o"),t()(),n(4093,"tr",13)(4094,"td",14)(4095,"div",15)(4096,"span",16),e(4097," fields"),i(4098,"br"),t()()(),n(4099,"td",17)(4100,"code",22),e(4101,"Array<PoDynamicFormField>"),t()(),n(4102,"td",20)(4103,"em")(4104,"strong"),e(4105,"(opcional)"),t()(),n(4106,"p"),e(4107,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(4108,"blockquote")(4109,"p"),e(4110,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),t()()()(),n(4111,"tr",13)(4112,"td",14)(4113,"div",15)(4114,"span",16),e(4115," focus"),i(4116,"br"),t()()(),n(4117,"td",17)(4118,"code",18),e(4119,"string"),t()(),n(4120,"td",20)(4121,"em")(4122,"strong"),e(4123,"(opcional)"),t()(),n(4124,"p"),e(4125,"Nome do campo que receber\xE1 o foco."),t(),n(4126,"p"),e(4127,"Exemplo:"),t(),n(4128,"pre")(4129,"code"),e(4130,`focus: 'name'
`),t()()()(),n(4131,"tr",13)(4132,"td",14)(4133,"div",15)(4134,"span",16),e(4135," value"),i(4136,"br"),t()()(),n(4137,"td",17)(4138,"code",33),e(4139,"any"),t()(),n(4140,"td",20)(4141,"em")(4142,"strong"),e(4143,"(opcional)"),t()(),n(4144,"p"),e(4145,"Objeto contendo os novos valores."),t(),n(4146,"p"),e(4147,"Exemplo:"),t(),n(4148,"pre")(4149,"code"),e(4150,`{
  name: 'new name',
  age: 10
}
`),t()(),n(4151,"blockquote")(4152,"p"),e(4153,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(4154,"h4",38)(4155,"code",5),e(4156,"ErrorAsyncProperties"),t()(),n(4157,"div",2)(4158,"p"),e(4159,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(4160,"h4",9),e(4161,"Propriedades"),t(),n(4162,"table",10)(4163,"tr",11)(4164,"th",12),e(4165,"Nome"),t(),n(4166,"th",12),e(4167,"Tipo"),t(),n(4168,"th",12),e(4169,"Descri\xE7\xE3o"),t()(),n(4170,"tr",13)(4171,"td",14)(4172,"div",15)(4173,"span",16),e(4174," errorAsync"),i(4175,"br"),t()()(),n(4176,"td",17)(4177,"code",46),e(4178,"(value) => Observable<boolean>"),t()(),n(4179,"td",20)(4180,"p"),e(4181,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(4182,"code"),e(4183,"change"),t(),e(4184," ou "),n(4185,"code"),e(4186,"change-model"),t(),e(4187,", dependendo do valor da propriedade "),n(4188,"code"),e(4189,"triggerMode"),t(),e(4190,"."),t()()(),n(4191,"tr",13)(4192,"td",14)(4193,"div",15)(4194,"span",16),e(4195," triggerMode"),i(4196,"br"),t()()(),n(4197,"td",17)(4198,"code",80),e(4199,"'change' "),t(),n(4200,"code",81),e(4201," 'changeModel'"),t()(),n(4202,"td",20)(4203,"em")(4204,"strong"),e(4205,"(opcional)"),t()(),n(4206,"p"),e(4207,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(4208,"code"),e(4209,"change"),t(),e(4210," ou "),n(4211,"code"),e(4212,"change-model"),t(),e(4213,"."),t()()()(),n(4214,"h3"),e(4215,"Enums"),t(),n(4216,"h4",4)(4217,"code",5),e(4218,"ForceBooleanComponentEnum"),t()(),n(4219,"div",2)(4220,"p"),e(4221,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(4222,"h4",9),e(4223,"Propriedades"),t(),n(4224,"table",10)(4225,"tr",11)(4226,"th",12),e(4227,"Nome"),t(),n(4228,"th",12),e(4229,"Descri\xE7\xE3o"),t()(),n(4230,"tr",13)(4231,"td",14)(4232,"div",15)(4233,"span",16),e(4234," switch"),i(4235,"br"),t()()(),n(4236,"td",20)(4237,"p"),e(4238,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),t()()(),n(4239,"tr",13)(4240,"td",14)(4241,"div",15)(4242,"span",16),e(4243," checkbox"),i(4244,"br"),t()()(),n(4245,"td",20)(4246,"p"),e(4247,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),t()()()(),n(4248,"h4",4)(4249,"code",5),e(4250,"ForceOptionComponentEnum"),t()(),n(4251,"div",2)(4252,"p"),e(4253,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(4254,"h4",9),e(4255,"Propriedades"),t(),n(4256,"table",10)(4257,"tr",11)(4258,"th",12),e(4259,"Nome"),t(),n(4260,"th",12),e(4261,"Descri\xE7\xE3o"),t()(),n(4262,"tr",13)(4263,"td",14)(4264,"div",15)(4265,"span",16),e(4266," radioGroup"),i(4267,"br"),t()()(),n(4268,"td",20)(4269,"p"),e(4270,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),t()()(),n(4271,"tr",13)(4272,"td",14)(4273,"div",15)(4274,"span",16),e(4275," select"),i(4276,"br"),t()()(),n(4277,"td",20)(4278,"p"),e(4279,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),t()()()(),n(4280,"h4",4)(4281,"code",5),e(4282,"PoDynamicFieldType"),t()(),n(4283,"div",2)(4284,"p"),e(4285,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),t()(),n(4286,"h4",9),e(4287,"Propriedades"),t(),n(4288,"table",10)(4289,"tr",11)(4290,"th",12),e(4291,"Nome"),t(),n(4292,"th",12),e(4293,"Descri\xE7\xE3o"),t()(),n(4294,"tr",13)(4295,"td",14)(4296,"div",15)(4297,"span",16),e(4298," Boolean"),i(4299,"br"),t()()(),n(4300,"td",20)(4301,"p"),e(4302,"Valor booleano."),t()()(),n(4303,"tr",13)(4304,"td",14)(4305,"div",15)(4306,"span",16),e(4307," Currency"),i(4308,"br"),t()()(),n(4309,"td",20)(4310,"p"),e(4311,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(4312,"tr",13)(4313,"td",14)(4314,"div",15)(4315,"span",16),e(4316," Decimal"),i(4317,"br"),t()()(),n(4318,"td",20)(4319,"p"),e(4320,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(4321,"tr",13)(4322,"td",14)(4323,"div",15)(4324,"span",16),e(4325," Date"),i(4326,"br"),t()()(),n(4327,"td",20)(4328,"p"),e(4329,"Valor para data."),t()()(),n(4330,"tr",13)(4331,"td",14)(4332,"div",15)(4333,"span",16),e(4334," DateTime"),i(4335,"br"),t()()(),n(4336,"td",20)(4337,"p"),e(4338,"Valor para data e hora."),t()()(),n(4339,"tr",13)(4340,"td",14)(4341,"div",15)(4342,"span",16),e(4343," Time"),i(4344,"br"),t()()(),n(4345,"td",20)(4346,"p"),e(4347,"Utilizado para informar/exibir hora."),t()()(),n(4348,"tr",13)(4349,"td",14)(4350,"div",15)(4351,"span",16),e(4352," Number"),i(4353,"br"),t()()(),n(4354,"td",20)(4355,"p"),e(4356,"Valor num\xE9rico."),t()()(),n(4357,"tr",13)(4358,"td",14)(4359,"div",15)(4360,"span",16),e(4361," String"),i(4362,"br"),t()()(),n(4363,"td",20)(4364,"p"),e(4365,"Texto."),t()()(),n(4366,"tr",13)(4367,"td",14)(4368,"div",15)(4369,"span",16),e(4370," Upload"),i(4371,"br"),t()()(),n(4372,"td",20)(4373,"p"),e(4374,"Utilizado para fazer uploads de arquivos."),t()()()()())},dependencies:[g],encapsulation:2})}return o})();var ne=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(E(_),E(K))};static \u0275cmp=s({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return l.changeTab("doc")}),i(3,"sample-po-dynamic-form-doc"),t(),n(4,"po-tab",3),c("p-click",function(){return l.changeTab("web")}),i(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),t()()()),a&2&&(p("p-actions",l.actions),d(2),p("p-active",l.activeTab==="doc"),d(2),p("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[X,S,b,Y,Z,ee,te],encapsulation:2})}return o})();var ve=[{path:"",component:ne}],ie=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[V.forChild(ve),V]})}return o})();var We=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[J,ie]})}return o})();export{We as DocPoDynamicFormModule};
