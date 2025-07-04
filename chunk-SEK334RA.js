import{o as S,p as _}from"./chunk-R3BKLGLC.js";import{$a as f,Ab as x,nb as v,zb as E}from"./chunk-TUTTJOS2.js";import{Ba as y,Ea as t,Fa as i,Ga as n,L as j,La as c,M as D,Nc as z,O as M,P as q,Pb as H,Pc as B,Rc as A,Tb as I,Xa as e,Za as b,cb as L,db as V,eb as u,ha as m,ia as T,o as F,oa as d,pa as w,ub as g,ya as p}from"./chunk-MIQUIDUB.js";var $=()=>({property:"name"}),ee=o=>[o],te=()=>({name:"Jhon"}),N=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-basic"]],standalone:!1,decls:1,vars:6,consts:[[3,"p-fields","p-value"]],template:function(a,l){a&1&&n(0,"po-dynamic-view",0),a&2&&p("p-fields",u(3,ee,V(2,$)))("p-value",V(5,te))},dependencies:[f],encapsulation:2})}return o})();var ne=o=>({"docs-sample-code-tabs":o}),R=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(n(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic View Basic"),i(),t(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),n(5,"span"),e(6),i()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html"),i(),t(13,"pre",7),e(14,`<po-dynamic-view [p-fields]="[{ property: 'name' }]" [p-value]="{ name: 'Jhon' }"> </po-dynamic-view>
`),i()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts"),i(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-view-basic',
  templateUrl: './sample-po-dynamic-view-basic.component.html',
  standalone: false
})
export class SamplePoDynamicViewBasicComponent {}
`),i()()()()(),t(21,"div",10),n(22,"sample-po-dynamic-view-basic"),i(),n(23,"hr")),a&2&&(m(5),y("po-icon "+l.sampleCodeButtonIcon),m(),b(" ",l.sampleCodeButtonLabel,""),m(),p("ngClass",u(4,ne,l.hideSampleCodeTabs)))},dependencies:[g,S,E,x,N],encapsulation:2})}return o})();var G=(()=>{class o{fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:!0,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:!0,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",divider:"ADDITIONAL DATA",tag:!0,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]},{property:"hobbies",label:"Hobbies",gridColumns:12,divider:"Additional Information"}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1",hobbies:`Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.
Pr\xE1tica de corrida ao ar livre.
Jogos de tabuleiro e videogames.
Culin\xE1ria, especialmente cozinha italiana.`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-employee"]],standalone:!1,decls:2,vars:3,consts:[["p-title","Employee"],[3,"p-fields","p-value","p-text-wrap"]],template:function(a,l){a&1&&(t(0,"po-page-default",0),n(1,"po-dynamic-view",1),i()),a&2&&(m(),p("p-fields",l.fields)("p-value",l.employee)("p-text-wrap",!0))},dependencies:[f,v],encapsulation:2})}return o})();var le=o=>({"docs-sample-code-tabs":o}),J=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-employee-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(n(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic View - Employee"),i(),t(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),n(5,"span"),e(6),i()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html"),i(),t(13,"pre",7),e(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee" [p-text-wrap]="true"> </po-dynamic-view>
</po-page-default>
`),i()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts"),i(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dynamic-view-employee',
  templateUrl: './sample-po-dynamic-view-employee.component.html',
  standalone: false
})
export class SamplePoDynamicViewEmployeeComponent {
  fields: Array<PoDynamicViewField> = [
    { property: 'name', divider: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', divider: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'city', label: 'City', divider: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    {
      property: 'marriedStatus',
      options: [{ label: 'MARRIED', value: '1' }],
      label: 'Marital status',
      divider: 'ADDITIONAL DATA',
      tag: true,
      color: '#C596E7'
    },
    {
      property: 'children',
      options: [
        { label: 'yes ', value: '1' },
        { label: 'no', value: '2' }
      ]
    },
    {
      property: 'hobbies',
      label: 'Hobbies',
      gridColumns: 12,
      divider: 'Additional Information'
    }
  ];

  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'S\xE3o Paulo',
    wage: 8000.5,
    availability: 'Available',
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    marriedStatus: '1',
    children: '1',
    hobbies:
      'Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.\\n' +
      'Pr\xE1tica de corrida ao ar livre.\\n' +
      'Jogos de tabuleiro e videogames.\\n' +
      'Culin\xE1ria, especialmente cozinha italiana.'
  };
}
`),i()()()()(),t(21,"div",10),n(22,"sample-po-dynamic-view-employee"),i(),n(23,"hr")),a&2&&(m(5),y("po-icon "+l.sampleCodeButtonIcon),m(),b(" ",l.sampleCodeButtonLabel,""),m(),p("ngClass",u(4,le,l.hideSampleCodeTabs)))},dependencies:[g,S,E,x,G],encapsulation:2})}return o})();var O=(()=>{class o{httpClient;headers=new H({"X-PO-No-Message":"true"});url;filterParams;constructor(r){this.httpClient=r}getObjectByValue(r,a){return this.httpClient.get(this.url,{headers:this.headers,params:this.filterParams}).pipe(F(l=>"items"in l?l.items:l))}setConfig(r,a){this.url=r,this.filterParams=a}static \u0275fac=function(a){return new(a||o)(M(I))};static \u0275prov=j({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var W=(()=>{class o{employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"A",wage:8000.5,availability:"Available",cities:[{city:"S\xE3o Paulo",id:"SP"},{city:"Joinville",id:"SC"},{city:"Belo Horizonte",id:"MG"}],admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",profile:"admin",image:"https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg"};fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:!0,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:!0,color:"#C596E7",icon:"an an-check"},{property:"cities",isArrayOrObject:!0,fieldLabel:"city",fieldValue:"id",concatLabelValue:!0},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"image",divider:"Image",image:!0,alt:"image",height:"250"}];_newService=q(O);ngOnInit(){this._newService.setConfig("https://po-sample-api.onrender.com/v1/hotels",{id:1485976673002})}customEmployeeData(){return{value:{cpf:this.checkProfile(),rg:this.checkProfile(),wage:this.checkProfile()},fields:[{property:"name",divider:"Personal data by load customization",order:1},{property:"cpf",tag:!0,color:"color-07",order:2},{property:"rg",tag:!0,color:"color-07",order:3},{property:"wage",type:"string",tag:!0,color:"color-07"},{property:"genre",visible:!1},{property:"job",tag:!1},{searchService:this._newService,fieldLabel:"address_city",property:"city"}]}}checkProfile(){if(this.employee.profile==="admin")return"confidential"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-employee-on-load"]],standalone:!1,features:[L([O])],decls:2,vars:3,consts:[["p-title","Employee on Load"],[3,"p-fields","p-load","p-value"]],template:function(a,l){a&1&&(t(0,"po-page-default",0),n(1,"po-dynamic-view",1),i()),a&2&&(m(),p("p-fields",l.fields)("p-load",l.customEmployeeData.bind(l))("p-value",l.employee))},dependencies:[f,v],encapsulation:2})}return o})();var de=o=>({"docs-sample-code-tabs":o}),U=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-employee-on-load-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(n(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic View - Employee on load"),i(),t(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),n(5,"span"),e(6),i()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html"),i(),t(13,"pre",7),e(14,`<po-page-default p-title="Employee on Load">
  <po-dynamic-view [p-fields]="fields" [p-load]="customEmployeeData.bind(this)" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),i()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts"),i(),t(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import { PoDynamicViewField } from '@po-ui/ng-components';
import { SamplePoDynamicViewEmployeeOnLoadService } from './sample-po-dynamic-view-employee-on-load.service';

@Component({
  selector: 'sample-po-dynamic-view-employee-on-load',
  templateUrl: './sample-po-dynamic-view-employee-on-load.component.html',
  providers: [SamplePoDynamicViewEmployeeOnLoadService],
  standalone: false
})
export class SamplePoDynamicViewEmployeeOnLoadComponent implements OnInit {
  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'A',
    wage: 8000.5,
    availability: 'Available',
    cities: [
      {
        city: 'S\xE3o Paulo',
        id: 'SP'
      },
      {
        city: 'Joinville',
        id: 'SC'
      },
      {
        city: 'Belo Horizonte',
        id: 'MG'
      }
    ],
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    profile: 'admin',
    image: 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg'
  };

  fields: Array<PoDynamicViewField> = [
    { property: 'name', divider: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', divider: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'cities', isArrayOrObject: true, fieldLabel: 'city', fieldValue: 'id', concatLabelValue: true },
    { property: 'city', label: 'City', divider: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    { property: 'image', divider: 'Image', image: true, alt: 'image', height: '250' }
  ];

  private _newService = inject(SamplePoDynamicViewEmployeeOnLoadService);

  ngOnInit(): void {
    this._newService.setConfig('https://po-sample-api.onrender.com/v1/hotels', { id: 1485976673002 });
  }

  customEmployeeData() {
    return {
      value: {
        cpf: this.checkProfile(),
        rg: this.checkProfile(),
        wage: this.checkProfile()
      },
      fields: [
        { property: 'name', divider: 'Personal data by load customization', order: 1 },
        { property: 'cpf', tag: true, color: 'color-07', order: 2 },
        { property: 'rg', tag: true, color: 'color-07', order: 3 },
        { property: 'wage', type: 'string', tag: true, color: 'color-07' },
        { property: 'genre', visible: false },
        { property: 'job', tag: false },
        {
          searchService: this._newService,
          fieldLabel: 'address_city',
          property: 'city'
        }
      ]
    };
  }

  private checkProfile(): string {
    if (this.employee.profile === 'admin') {
      return 'confidential';
    }
  }
}
`),i(),t(21,"label",6),e(22,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.service.ts"),i(),t(23,"pre",9),e(24,`import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamplePoDynamicViewEmployeeOnLoadService {
  readonly headers: HttpHeaders = new HttpHeaders({
    'X-PO-No-Message': 'true'
  });

  url: string;
  filterParams;

  constructor(private httpClient: HttpClient) {}

  getObjectByValue(value: string | Array<any>, filterParams?: any): Observable<Array<any> | { [key: string]: any }> {
    return this.httpClient
      .get(this.url, {
        headers: this.headers,
        params: this.filterParams
      })
      .pipe(map((response: any) => ('items' in response ? response.items : response)));
  }

  setConfig(url: string, filterParams) {
    this.url = url;
    this.filterParams = filterParams;
  }
}
`),i()()()()(),t(25,"div",10),n(26,"sample-po-dynamic-view-employee-on-load"),i(),n(27,"hr")),a&2&&(m(5),y("po-icon "+l.sampleCodeButtonIcon),m(),b(" ",l.sampleCodeButtonLabel,""),m(),p("ngClass",u(4,de,l.hideSampleCodeTabs)))},dependencies:[g,S,E,x,W],encapsulation:2})}return o})();var Z=(()=>{class o{fields=[{property:"name",container:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",container:"Work Data"},{property:"job",tag:!0,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:!0,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",container:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",container:"ADDITIONAL DATA",tag:!0,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1"};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-container"]],standalone:!1,decls:2,vars:2,consts:[["p-title","Employee"],[3,"p-fields","p-value"]],template:function(a,l){a&1&&(t(0,"po-page-default",0),n(1,"po-dynamic-view",1),i()),a&2&&(m(),p("p-fields",l.fields)("p-value",l.employee))},dependencies:[f,v],encapsulation:2})}return o})();var ce=o=>({"docs-sample-code-tabs":o}),X=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-container-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(n(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic View - Employee on load"),i(),t(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),n(5,"span"),e(6),i()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.html"),i(),t(13,"pre",7),e(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),i()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.ts"),i(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dynamic-view-container',
  templateUrl: './sample-po-dynamic-view-container.component.html',
  standalone: false
})
export class SamplePoDynamicViewContainerComponent {
  fields: Array<PoDynamicViewField> = [
    { property: 'name', container: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', container: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'city', label: 'City', container: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    {
      property: 'marriedStatus',
      options: [{ label: 'MARRIED', value: '1' }],
      label: 'Marital status',
      container: 'ADDITIONAL DATA',
      tag: true,
      color: '#C596E7'
    },
    {
      property: 'children',
      options: [
        { label: 'yes ', value: '1' },
        { label: 'no', value: '2' }
      ]
    }
  ];

  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'S\xE3o Paulo',
    wage: 8000.5,
    availability: 'Available',
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    marriedStatus: '1',
    children: '1'
  };
}
`),i()()()()(),t(21,"div",10),n(22,"sample-po-dynamic-view-container"),i(),n(23,"hr")),a&2&&(m(5),y("po-icon "+l.sampleCodeButtonIcon),m(),b(" ",l.sampleCodeButtonLabel,""),m(),p("ngClass",u(4,ce,l.hideSampleCodeTabs)))},dependencies:[g,S,E,x,Z],encapsulation:2})}return o})();var Q=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-doc"]],standalone:!1,decls:1531,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoDynamicViewField[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","object"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<string>"],["href","https://angular.io/api/common/CurrencyPipe"],["href","https://angular.io/api/common/DatePipe"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<{","label:","string;","value:","string"],["pan","",1,"docs-api-property-type","number;","}>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoDynamicViewRequest"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"]],template:function(a,l){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),i()(),n(4,"div",2),t(5,"h3",3),e(6,"Componente"),i(),t(7,"h4",4)(8,"code",5),e(9,"PoDynamicViewComponent"),i()(),t(10,"div",2)(11,"p"),e(12,"Componente para listar dados dinamicamente a partir de uma lista de objetos."),i(),t(13,"blockquote")(14,"p"),e(15,"Por padr\xE3o esse componente cria "),t(16,"code"),e(17,"po-info"),i(),e(18," para exibi\xE7\xE3o, \xE9 poss\xEDvel criar "),t(19,"code"),e(20,"po-tag"),i(),e(21," passando a propriedade { tag: true }. "),i()()(),t(22,"div",6)(23,"h4",7),e(24,"Seletor"),i(),t(25,"pre",8),e(26,`<po-dynamic-view
    p-fields="PoDynamicViewField[]"
    p-load="string | Function"
    p-show-all-value="boolean"
    p-text-wrap="boolean"
    p-value="object" >
</po-dynamic-view>
`),i()(),t(27,"h4",9),e(28,"Propriedades"),i(),t(29,"table",10)(30,"tr",11)(31,"th",12),e(32,"Nome"),i(),t(33,"th",12),e(34,"Tipo"),i(),t(35,"th",12),e(36,"Padr\xE3o"),i(),t(37,"th",12),e(38,"Descri\xE7\xE3o"),i()(),t(39,"tr",13)(40,"td",14)(41,"div",15)(42,"span",16),e(43," p-fields"),n(44,"br"),i()()(),t(45,"td",17)(46,"code",18),e(47,"PoDynamicViewField[]"),i()(),t(48,"td",19)(49,"p")(50,"code"),e(51,"[]"),i()()(),t(52,"td",20)(53,"em")(54,"strong"),e(55,"(opcional)"),i()(),t(56,"p"),e(57,"Lista de objetos que implementam a interface "),t(58,"code"),e(59,"PoDynamicView"),i(),e(60,"."),i(),t(61,"blockquote")(62,"p"),e(63,"Ex: "),t(64,"code"),e(65,"[ { property: 'age' } ]"),i()()(),t(66,"p"),e(67,"Regras de tipagem e formata\xE7\xE3o dos valores exibidos:"),i(),t(68,"ul")(69,"li"),e(70,"Caso o "),t(71,"em"),e(72,"type"),i(),e(73," informado seja "),t(74,"em"),e(75,"currency"),i(),e(76," e n\xE3o seja informado o "),t(77,"em"),e(78,"format"),i(),e(79,` o mesmo recebe "'BRL', 'symbol', '1.2-2'"
como formato padr\xE3o.`),i(),t(80,"li"),e(81,"Caso o "),t(82,"em"),e(83,"type"),i(),e(84," informado seja "),t(85,"em"),e(86,"date"),i(),e(87," e n\xE3o seja informado o "),t(88,"em"),e(89,"format"),i(),e(90," o mesmo recebe 'dd/MM/yyyy' como formato padr\xE3o."),i(),t(91,"li"),e(92,"Caso o "),t(93,"em"),e(94,"type"),i(),e(95," informado seja "),t(96,"em"),e(97,"dateTime"),i(),e(98," e n\xE3o seja informado o "),t(99,"em"),e(100,"format"),i(),e(101," o mesmo recebe 'dd/MM/yyyy HH:mm:ss' como formato padr\xE3o."),i(),t(102,"li"),e(103,"Caso o "),t(104,"em"),e(105,"type"),i(),e(106," informado seja "),t(107,"em"),e(108,"number"),i(),e(109," e n\xE3o seja informado o "),t(110,"em"),e(111,"format"),i(),e(112," o mesmo n\xE3o ser\xE1 formatado."),i(),t(113,"li"),e(114,"Caso o "),t(115,"em"),e(116,"type"),i(),e(117," informado seja "),t(118,"em"),e(119,"time"),i(),e(120," e n\xE3o seja informado o "),t(121,"em"),e(122,"format"),i(),e(123," o mesmo recebe 'HH:mm:ss.ffffff' como formato padr\xE3o."),i()(),t(124,"blockquote")(125,"p"),e(126,"As propriedades informadas ser\xE3o exibidas mesmo n\xE3o contendo valor de refer\xEAncia no objeto da propriedade "),t(127,"code"),e(128,"p-value"),i(),e(129,"."),i()()()(),t(130,"tr",13)(131,"td",14)(132,"div",15)(133,"span",16),e(134," p-load"),n(135,"br"),i()()(),t(136,"td",17)(137,"code",21),e(138,"string "),i(),t(139,"code",22),e(140," Function"),i()(),t(141,"td",19),e(142,"-"),i(),t(143,"td",20)(144,"em")(145,"strong"),e(146,"(opcional)"),i()(),t(147,"p"),e(148,"Possibilita executar uma fun\xE7\xE3o quando o componente \xE9 inicializado."),i(),t(149,"p"),e(150,"A propriedade aceita os seguintes tipos:"),i(),t(151,"ul")(152,"li")(153,"strong"),e(154,"String"),i(),e(155,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),t(156,"code"),e(157,"POST"),i(),e(158,"."),i(),t(159,"li")(160,"strong"),e(161,"Function"),i(),e(162,": M\xE9todo que ser\xE1 executado na inicializa\xE7\xE3o do componente."),i()(),t(163,"p"),e(164,"Para os dois tipos de utiliza\xE7\xE3o da propriedade espera-se o seguinte retorno:"),i(),t(165,"pre")(166,"code"),e(167,`{
  value: {
    cnpj: '**************', // altera valor do campo
    updated: (new Date()).toString() // atribui valor ao campo novo
  },
  fields: [
    { property: 'updated', tag: true } // inclui campo novo
  ]
}
`),i()(),t(168,"blockquote")(169,"p")(170,"strong"),e(171,"value"),i(),e(172,": any = atribui novo valor do model."),i()(),t(173,"blockquote")(174,"p")(175,"strong"),e(176,"fields"),i(),e(177,": "),t(178,"code"),e(179,"Array<PoDynamicViewField>"),i(),e(180,` = Lista de campos que deseja alterar as propriedades,
caso enviar um campo a mais ser\xE1 criado um novo campo.`),i()(),t(181,"ul")(182,"li"),e(183,"Para esconder/remover campos precisa informar no field a propriedade "),t(184,"code"),e(185,"visible = false"),i(),e(186,"."),i()()()(),t(187,"tr",13)(188,"td",14)(189,"div",15)(190,"span",16),e(191," p-show-all-value"),n(192,"br"),i()()(),t(193,"td",17)(194,"code",23),e(195,"boolean"),i()(),t(196,"td",19)(197,"p")(198,"code"),e(199,"false"),i()()(),t(200,"td",20)(201,"em")(202,"strong"),e(203,"(opcional)"),i()(),t(204,"p"),e(205,"Indica se exibir\xE1 todas as informa\xE7\xF5es contidas dentro do objeto informado na propriedade "),t(206,"code"),e(207,"p-value"),i(),e(208,"."),i()()(),t(209,"tr",13)(210,"td",14)(211,"div",15)(212,"span",16),e(213," p-text-wrap"),n(214,"br"),i()()(),t(215,"td",17)(216,"code",23),e(217,"boolean"),i()(),t(218,"td",19)(219,"p")(220,"code"),e(221,"false"),i()()(),t(222,"td",20)(223,"em")(224,"strong"),e(225,"(opcional)"),i()(),t(226,"p"),e(227,"Permite a quebra de linha no texto do "),t(228,"code"),e(229,"p-value"),i(),e(230,", aplicando-a onde h\xE1 "),t(231,"code"),e(232,"\\n"),i(),e(233,"."),i(),t(234,"pre")(235,"code"),e(236,`<po-dynamic-view
  [p-value]="{ description: 'Primeira linha\\nSegunda linha' }"
  [p-text-wrap]="true"
></po-dynamic-view>
`),i()(),t(237,"p"),e(238,"Sa\xEDda:"),i(),t(239,"pre")(240,"code"),e(241,`Primeira linha
Segunda linha
`),i()()()(),t(242,"tr",13)(243,"td",14)(244,"div",15)(245,"span",16),e(246," p-value"),n(247,"br"),i()()(),t(248,"td",17)(249,"code",24),e(250,"object"),i()(),t(251,"td",19),e(252,"-"),i(),t(253,"td",20)(254,"p"),e(255,"Objeto que ser\xE1 utilizado para exibir as informa\xE7\xF5es din\xE2micas, o valor ser\xE1 recuperado atrav\xE9s do atributo "),t(256,"em"),e(257,"property"),i(),e(258,`
dos objetos contidos na propridade `),t(259,"code"),e(260,"p-fields"),i(),e(261,"."),i(),t(262,"blockquote")(263,"p"),e(264,"Ex: "),t(265,"code"),e(266,"{ age: '35' }"),i()()()()()(),t(267,"h3"),e(268,"Interfaces"),i(),t(269,"h4",25)(270,"code",5),e(271,"PoDynamicViewRequest"),i()(),t(272,"div",2)(273,"p"),e(274,"Define o tipo de busca customizada para um campo em espec\xEDfico."),i()(),t(275,"h4",9),e(276,"M\xE9todos"),i(),t(277,"table",26)(278,"tr",13)(279,"th",27)(280,"div",15)(281,"h4")(282,"span",16),e(283," getObjectByValue "),i()()()()(),t(284,"tr",20)(285,"td",20)(286,"p"),e(287,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),i()()()(),t(288,"h5")(289,"b"),e(290,"Par\xE2metros"),i()(),t(291,"table",10)(292,"tr",11)(293,"th",12),e(294,"Nome"),i(),t(295,"th",12),e(296,"Tipo"),i(),t(297,"th",12),e(298,"Descri\xE7\xE3o"),i()(),t(299,"tr",13)(300,"td",14),e(301," value"),i(),t(302,"td",17)(303,"code",21),e(304," string "),i(),t(305,"code",28),e(306," Array<any> "),i()(),t(307,"td",20)(308,"p"),e(309,"Valor \xFAnico a ser buscado na fonte de dados."),i()()(),t(310,"tr",13)(311,"td",14),e(312," filterParams"),i(),t(313,"td",17)(314,"code",29),e(315," any "),i()(),t(316,"td",20)(317,"p"),e(318,"Valor opcional para informar filtros customizados."),i()()()(),n(319,"br"),t(320,"h4",25)(321,"code",5),e(322,"PoDynamicViewField"),i()(),t(323,"div",2)(324,"p"),e(325," Interface para defini\xE7\xE3o das propriedades dos campos de visualiza\xE7\xE3o que ser\xE3o criados dinamicamente."),i()(),t(326,"h4",9),e(327,"Propriedades"),i(),t(328,"table",10)(329,"tr",11)(330,"th",12),e(331,"Nome"),i(),t(332,"th",12),e(333,"Tipo"),i(),t(334,"th",12),e(335,"Descri\xE7\xE3o"),i()(),t(336,"tr",13)(337,"td",14)(338,"div",15)(339,"span",16),e(340," alt"),n(341,"br"),i()()(),t(342,"td",17)(343,"code",21),e(344,"string"),i()(),t(345,"td",20)(346,"em")(347,"strong"),e(348,"(opcional)"),i()(),t(349,"p"),e(350,"Defini o texto alternativo descrevendo a imagem."),i(),t(351,"p"),e(352,"Exemplo de utiliza\xE7\xE3o:"),i(),t(353,"pre")(354,"code"),e(355,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),i()(),t(356,"p")(357,"strong"),e(358,"Componentes compat\xEDveis:"),i(),t(359,"code"),e(360,"po-image"),i(),e(361,"."),i()()(),t(362,"tr",13)(363,"td",14)(364,"div",15)(365,"span",16),e(366," booleanFalse"),n(367,"br"),i()()(),t(368,"td",17)(369,"code",21),e(370,"string"),i()(),t(371,"td",20)(372,"em")(373,"strong"),e(374,"(opcional)"),i()(),t(375,"p"),e(376,"Texto exibido quando o valor do componente for "),t(377,"em"),e(378,"false"),i(),e(379,"."),i()()(),t(380,"tr",13)(381,"td",14)(382,"div",15)(383,"span",16),e(384," booleanTrue"),n(385,"br"),i()()(),t(386,"td",17)(387,"code",21),e(388,"string"),i()(),t(389,"td",20)(390,"em")(391,"strong"),e(392,"(opcional)"),i()(),t(393,"p"),e(394,"Texto exibido quando o valor do componente for "),t(395,"em"),e(396,"true"),i(),e(397,"."),i()()(),t(398,"tr",13)(399,"td",14)(400,"div",15)(401,"span",16),e(402," color"),n(403,"br"),i()()(),t(404,"td",17)(405,"code",21),e(406,"string"),i()(),t(407,"td",20)(408,"em")(409,"strong"),e(410,"(opcional)"),i()(),t(411,"p"),e(412,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),i(),t(413,"ul")(414,"li"),e(415,"Hexadeximal, por exemplo "),t(416,"code"),e(417,"#c64840"),i(),e(418,";"),i(),t(419,"li"),e(420,"RGB, como "),t(421,"code"),e(422,"rgb(0, 0, 165)"),i(),e(423,";"),i(),t(424,"li"),e(425,"O nome da cor, por exemplo "),t(426,"code"),e(427,"blue"),i(),e(428,";"),i(),t(429,"li"),e(430,"Usando uma das cores do tema do PO:"),i(),t(431,"li"),e(432,"Valores v\xE1lidos:"),t(433,"ul")(434,"li"),n(435,"span",30),t(436,"code"),e(437,"color-01"),i()(),t(438,"li"),n(439,"span",31),t(440,"code"),e(441,"color-02"),i()(),t(442,"li"),n(443,"span",32),t(444,"code"),e(445,"color-03"),i()(),t(446,"li"),n(447,"span",33),t(448,"code"),e(449,"color-04"),i()(),t(450,"li"),n(451,"span",34),t(452,"code"),e(453,"color-05"),i()(),t(454,"li"),n(455,"span",35),t(456,"code"),e(457,"color-06"),i()(),t(458,"li"),n(459,"span",36),t(460,"code"),e(461,"color-07"),i()(),t(462,"li"),n(463,"span",37),t(464,"code"),e(465,"color-08"),i()(),t(466,"li"),n(467,"span",38),t(468,"code"),e(469,"color-09"),i()(),t(470,"li"),n(471,"span",39),t(472,"code"),e(473,"color-10"),i()(),t(474,"li"),n(475,"span",40),t(476,"code"),e(477,"color-11"),i()(),t(478,"li"),n(479,"span",41),t(480,"code"),e(481,"color-12"),i()()()()()()(),t(482,"tr",13)(483,"td",14)(484,"div",15)(485,"span",16),e(486," concatLabelValue"),n(487,"br"),i()()(),t(488,"td",17)(489,"code",23),e(490,"boolean"),i()(),t(491,"td",20)(492,"em")(493,"strong"),e(494,"(opcional)"),i()(),t(495,"p"),e(496,"Permite que seja exibido em tela, de forma concatenada as propriedades "),t(497,"code"),e(498,"fieldLabel"),i(),e(499," + "),t(500,"code"),e(501,"fieldValue"),i(),e(502,`.
A ordem sempre ser\xE1 `),t(503,"code"),e(504,"fieldLabel"),i(),e(505," e depois "),t(506,"code"),e(507,"fieldValue"),i(),e(508,", n\xE3o sendo poss\xEDvel alterar."),i(),t(509,"blockquote")(510,"p"),e(511,"Propriedade funciona corretamente caso as propriedades "),t(512,"code"),e(513,"fieldLabel"),i(),e(514," e "),t(515,"code"),e(516,"fielValue"),i(),e(517," sejam v\xE1lidas."),i()()()(),t(518,"tr",13)(519,"td",14)(520,"div",15)(521,"span",16),e(522," container"),n(523,"br"),i()()(),t(524,"td",17)(525,"code",21),e(526,"string"),i()(),t(527,"td",20)(528,"em")(529,"strong"),e(530,"(opcional)"),i()(),t(531,"p"),e(532,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),i(),t(533,"p"),e(534,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),i()()(),t(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),e(539," divider"),n(540,"br"),i()()(),t(541,"td",17)(542,"code",21),e(543,"string"),i()(),t(544,"td",20)(545,"em")(546,"strong"),e(547,"(opcional)"),i()(),t(548,"p"),e(549,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),i()()(),t(550,"tr",13)(551,"td",14)(552,"div",15)(553,"span",16),e(554," fieldLabel"),n(555,"br"),i()()(),t(556,"td",17)(557,"code",21),e(558,"string"),i()(),t(559,"td",20)(560,"em")(561,"strong"),e(562,"(opcional)"),i()(),t(563,"p"),e(564,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),i(),t(565,"p"),e(566,"O valor padr\xE3o \xE9: "),t(567,"code"),e(568,"label"),i(),e(569,"."),i()()(),t(570,"tr",13)(571,"td",14)(572,"div",15)(573,"span",16),e(574," fieldValue"),n(575,"br"),i()()(),t(576,"td",17)(577,"code",21),e(578,"string"),i()(),t(579,"td",20)(580,"em")(581,"strong"),e(582,"(opcional)"),i()(),t(583,"p"),e(584,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),i(),t(585,"p"),e(586,"O valor padr\xE3o \xE9: "),t(587,"code"),e(588,"value"),i(),e(589,"."),i()()(),t(590,"tr",13)(591,"td",14)(592,"div",15)(593,"span",16),e(594," format"),n(595,"br"),i()()(),t(596,"td",17)(597,"code",21),e(598,"string "),i(),t(599,"code",42),e(600," Array<string>"),i()(),t(601,"td",20)(602,"em")(603,"strong"),e(604,"(opcional)"),i()(),t(605,"p"),e(606,"Define o formato de exibi\xE7\xE3o para o valor de um campo."),i(),t(607,"ul")(608,"li")(609,"p"),e(610,"Quando "),t(611,"code"),e(612,"format"),i(),e(613," \xE9 uma "),t(614,"code"),e(615,"string"),i(),e(616,", o formato aplicado depende da propriedade "),t(617,"strong"),e(618,"type"),i(),e(619," segue como usar cada tipo:"),i(),t(620,"ul")(621,"li")(622,"code"),e(623,"currency"),i(),e(624,": Utiliza c\xF3digos de moeda definidos pelo "),t(625,"a",43),e(626,"CurrencyPipe"),i(),e(627,`.
Exemplos: Use 'BRL' para Real Brasileiro e 'USD' para D\xF3lar Americano.`),i(),t(628,"li")(629,"code"),e(630,"date"),i(),e(631,": Adota formatos de data especificados pelo "),t(632,"a",44),e(633,"DatePipe"),i(),e(634,`.
Suporta formatos personalizados, como dia (dd), m\xEAs (MM) e ano (yyyy ou yy).
Formato padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),i(),t(635,"li")(636,"code"),e(637,"time"),i(),e(638,`: Aceita formatos de tempo, incluindo hora (HH), minutos (mm), segundos (ss) e opcionalmente
milisegundos (f-ffffff). Formato padr\xE3o \xE9 'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff'.`),i(),t(639,"li")(640,"code"),e(641,"number"),i(),e(642,": Usa especifica\xE7\xF5es do "),t(643,"a",45),e(644,"DecimalPipe"),i(),e(645,` para formata\xE7\xE3o num\xE9rica.
Na aus\xEAncia de um formato espec\xEDfico, o n\xFAmero \xE9 exibido como fornecido.
Exemplo: Entrada `),t(646,"code"),e(647,"50"),i(),e(648,", formato "),t(649,"code"),e(650,"'1.2-5'"),i(),e(651,", resulta em "),t(652,"code"),e(653,"50.00"),i(),e(654,"."),i()()(),t(655,"li")(656,"p"),e(657,"Quando "),t(658,"code"),e(659,"format"),i(),e(660," \xE9 um "),t(661,"code"),e(662,"Array<string>"),i(),e(663,":"),i(),t(664,"ul")(665,"li"),e(666,"Cada elemento do array representa uma propriedade do objeto."),i(),t(667,"li"),e(668,"Os valores dessas propriedades s\xE3o concatenados, separados pelo padr\xE3o ' - '."),i(),t(669,"li"),e(670,"Exemplo: Para "),t(671,"code"),e(672,'format: ["id", "name"]'),i(),e(673," e um objeto "),t(674,"code"),e(675,"{ id: 1, name: 'Carlos Diego' }"),i(),e(676,`,
o resultado ser\xE1 `),t(677,"code"),e(678,"'1 - Carlos Diego'"),i(),e(679,"."),i()()()()()(),t(680,"tr",13)(681,"td",14)(682,"div",15)(683,"span",16),e(684," gridColumns"),n(685,"br"),i()()(),t(686,"td",17)(687,"code",46),e(688,"number"),i()(),t(689,"td",20)(690,"em")(691,"strong"),e(692,"(opcional)"),i()(),t(693,"p"),e(694,"Tamanho de exibi\xE7\xE3o do campo em telas."),i(),t(695,"p"),e(696,"Deve ser usado o sistema de "),t(697,"strong"),e(698,"grid"),i(),e(699," do PO (1 ... 12 colunas)."),i(),t(700,"blockquote")(701,"p"),e(702,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),i()()()(),t(703,"tr",13)(704,"td",14)(705,"div",15)(706,"span",16),e(707," gridLgColumns"),n(708,"br"),i()()(),t(709,"td",17)(710,"code",46),e(711,"number"),i()(),t(712,"td",20)(713,"em")(714,"strong"),e(715,"(opcional)"),i()(),t(716,"p"),e(717,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),i(),t(718,"p"),e(719,"Deve ser usado o sistema de "),t(720,"strong"),e(721,"grid"),i(),e(722," do PO (1 ... 12 colunas)."),i(),t(723,"blockquote")(724,"p"),e(725,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(726,"code"),e(727,"gridColumns"),i(),e(728,"."),i()()()(),t(729,"tr",13)(730,"td",14)(731,"div",15)(732,"span",16),e(733," gridLgPull"),n(734,"br"),i()()(),t(735,"td",17)(736,"code",46),e(737,"number"),i()(),t(738,"td",20)(739,"em")(740,"strong"),e(741,"(opcional)"),i()(),t(742,"p"),e(743,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),i(),t(744,"p"),e(745,"Deve ser usado o sistema de "),t(746,"strong"),e(747,"grid"),i(),e(748," do PO (1 ... 11 colunas)."),i(),t(749,"blockquote")(750,"p"),e(751,"Esta propriedade n\xE3o funciona com a propriedade "),t(752,"code"),e(753,"gridColumns"),i(),e(754,". Deve-se especificar o tamanho da tela."),i()()()(),t(755,"tr",13)(756,"td",14)(757,"div",15)(758,"span",16),e(759," gridMdColumns"),n(760,"br"),i()()(),t(761,"td",17)(762,"code",46),e(763,"number"),i()(),t(764,"td",20)(765,"em")(766,"strong"),e(767,"(opcional)"),i()(),t(768,"p"),e(769,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),i(),t(770,"p"),e(771,"Deve ser usado o sistema de "),t(772,"strong"),e(773,"grid"),i(),e(774," do PO (1 ... 12 colunas)."),i(),t(775,"blockquote")(776,"p"),e(777,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(778,"code"),e(779,"gridColumns"),i(),e(780,"."),i()()()(),t(781,"tr",13)(782,"td",14)(783,"div",15)(784,"span",16),e(785," gridMdPull"),n(786,"br"),i()()(),t(787,"td",17)(788,"code",46),e(789,"number"),i()(),t(790,"td",20)(791,"em")(792,"strong"),e(793,"(opcional)"),i()(),t(794,"p"),e(795,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),i(),t(796,"p"),e(797,"Deve ser usado o sistema de "),t(798,"strong"),e(799,"grid"),i(),e(800," do PO (1 ... 11 colunas)."),i(),t(801,"blockquote")(802,"p"),e(803,"Esta propriedade n\xE3o funciona com a propriedade "),t(804,"code"),e(805,"gridColumns"),i(),e(806,". Deve-se especificar o tamanho da tela."),i()()()(),t(807,"tr",13)(808,"td",14)(809,"div",15)(810,"span",16),e(811," gridSmColumns"),n(812,"br"),i()()(),t(813,"td",17)(814,"code",46),e(815,"number"),i()(),t(816,"td",20)(817,"em")(818,"strong"),e(819,"(opcional)"),i()(),t(820,"p"),e(821,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),i(),t(822,"p"),e(823,"Deve ser usado o sistema de "),t(824,"strong"),e(825,"grid"),i(),e(826," do PO (1 ... 12 colunas)."),i(),t(827,"blockquote")(828,"p"),e(829,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(830,"code"),e(831,"gridColumns"),i(),e(832,"."),i()()()(),t(833,"tr",13)(834,"td",14)(835,"div",15)(836,"span",16),e(837," gridSmPull"),n(838,"br"),i()()(),t(839,"td",17)(840,"code",46),e(841,"number"),i()(),t(842,"td",20)(843,"em")(844,"strong"),e(845,"(opcional)"),i()(),t(846,"p"),e(847,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),i(),t(848,"p"),e(849,"Deve ser usado o sistema de "),t(850,"strong"),e(851,"grid"),i(),e(852," do PO (1 ... 11 colunas)."),i(),t(853,"blockquote")(854,"p"),e(855,"Esta propriedade n\xE3o funciona com a propriedade "),t(856,"code"),e(857,"gridColumns"),i(),e(858,". Deve-se especificar o tamanho da tela."),i()()()(),t(859,"tr",13)(860,"td",14)(861,"div",15)(862,"span",16),e(863," gridXlColumns"),n(864,"br"),i()()(),t(865,"td",17)(866,"code",46),e(867,"number"),i()(),t(868,"td",20)(869,"em")(870,"strong"),e(871,"(opcional)"),i()(),t(872,"p"),e(873,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),i(),t(874,"p"),e(875,"Deve ser usado o sistema de "),t(876,"strong"),e(877,"grid"),i(),e(878," do PO (1 ... 12 colunas)."),i(),t(879,"blockquote")(880,"p"),e(881,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(882,"code"),e(883,"gridColumns"),i(),e(884,"."),i()()()(),t(885,"tr",13)(886,"td",14)(887,"div",15)(888,"span",16),e(889," gridXlPull"),n(890,"br"),i()()(),t(891,"td",17)(892,"code",46),e(893,"number"),i()(),t(894,"td",20)(895,"em")(896,"strong"),e(897,"(opcional)"),i()(),t(898,"p"),e(899,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),i(),t(900,"p"),e(901,"Deve ser usado o sistema de "),t(902,"strong"),e(903,"grid"),i(),e(904," do PO (1 ... 11 colunas)."),i(),t(905,"blockquote")(906,"p"),e(907,"Esta propriedade n\xE3o funciona com a propriedade "),t(908,"code"),e(909,"gridColumns"),i(),e(910,". Deve-se especificar o tamanho da tela."),i()()()(),t(911,"tr",13)(912,"td",14)(913,"div",15)(914,"span",16),e(915," height"),n(916,"br"),i()()(),t(917,"td",17)(918,"code",21),e(919,"string"),i()(),t(920,"td",20)(921,"em")(922,"strong"),e(923,"(opcional)"),i()(),t(924,"p"),e(925,"Defini o texto alternativo descrevendo a imagem."),i(),t(926,"p"),e(927,"Exemplo de utiliza\xE7\xE3o:"),i(),t(928,"pre")(929,"code"),e(930,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'number'},
];
`),i()(),t(931,"p")(932,"strong"),e(933,"Componentes compat\xEDveis:"),i(),t(934,"code"),e(935,"po-image"),i(),e(936,"."),i()()(),t(937,"tr",13)(938,"td",14)(939,"div",15)(940,"span",16),e(941," icon"),n(942,"br"),i()()(),t(943,"td",17)(944,"code",21),e(945,"string"),i()(),t(946,"td",20)(947,"em")(948,"strong"),e(949,"(opcional)"),i()(),t(950,"p"),e(951,"Define um \xEDcone que ser\xE1 exibido ao lado do valor para o campo do tipo "),t(952,"em"),e(953,"tag"),i(),e(954,"."),i(),t(955,"blockquote")(956,"p"),e(957,"Veja os valores v\xE1lidos na "),t(958,"a",47),e(959,"biblioteca de \xEDcones"),i(),e(960,"."),i()()()(),t(961,"tr",13)(962,"td",14)(963,"div",15)(964,"span",16),e(965," image"),n(966,"br"),i()()(),t(967,"td",17)(968,"code",23),e(969,"boolean"),i()(),t(970,"td",20)(971,"em")(972,"strong"),e(973,"(opcional)"),i()(),t(974,"p"),e(975,"Possibilita a utiliza\xE7\xE3o de imagem."),i(),t(976,"p"),e(977,"Exemplo de utiliza\xE7\xE3o:"),i(),t(978,"pre")(979,"code"),e(980,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),i()(),t(981,"ul")(982,"li"),e(983,"@default "),t(984,"code"),e(985,"false"),i()()(),t(986,"p")(987,"strong"),e(988,"Componentes compat\xEDveis:"),i(),t(989,"code"),e(990,"po-image"),i(),e(991,"."),i()()(),t(992,"tr",13)(993,"td",14)(994,"div",15)(995,"span",16),e(996," isArrayOrObject"),n(997,"br"),i()()(),t(998,"td",17)(999,"code",23),e(1e3,"boolean"),i()(),t(1001,"td",20)(1002,"em")(1003,"strong"),e(1004,"(opcional)"),i()(),t(1005,"p"),e(1006,"Define que a propriedade "),t(1007,"code"),e(1008,"property"),i(),e(1009," \xE9 uma lista ou um objeto."),i(),t(1010,"blockquote")(1011,"p"),e(1012,"Por padr\xE3o, espera-se que a lista ou o objeto esteja com as propriedades "),t(1013,"code"),e(1014,"label"),i(),e(1015," e "),t(1016,"code"),e(1017,"value"),i(),e(1018,`.
Caso estejam com nomes diferentes, deve-se usar as propriedades `),t(1019,"code"),e(1020,"fieldLabel"),i(),e(1021," e "),t(1022,"code"),e(1023,"fieldValue"),i(),e(1024,`.
\xC9 ignorada caso a propriedade `),t(1025,"code"),e(1026,"searchService"),i(),e(1027," esteja sendo utilizada."),i()()()(),t(1028,"tr",13)(1029,"td",14)(1030,"div",15)(1031,"span",16),e(1032," key"),n(1033,"br"),i()()(),t(1034,"td",17)(1035,"code",23),e(1036,"boolean"),i()(),t(1037,"td",20)(1038,"em")(1039,"strong"),e(1040,"(opcional)"),i()(),t(1041,"p"),e(1042,"Identificador"),i()()(),t(1043,"tr",13)(1044,"td",14)(1045,"div",15)(1046,"span",16),e(1047," label"),n(1048,"br"),i()()(),t(1049,"td",17)(1050,"code",21),e(1051,"string"),i()(),t(1052,"td",20)(1053,"em")(1054,"strong"),e(1055,"(opcional)"),i()(),t(1056,"p"),e(1057,"R\xF3tulo do campo exibido."),i(),t(1058,"p"),e(1059,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),t(1060,"code"),e(1061,"label"),i(),e(1062," o valor da propriedade "),t(1063,"code"),e(1064,"property"),i(),e(1065," com a primeira letra em mai\xFAsculo."),i()()(),t(1066,"tr",13)(1067,"td",14)(1068,"div",15)(1069,"span",16),e(1070," offsetColumns"),n(1071,"br"),i()()(),t(1072,"td",17)(1073,"code",46),e(1074,"number"),i()(),t(1075,"td",20)(1076,"em")(1077,"strong"),e(1078,"(opcional)"),i()(),t(1079,"p"),e(1080,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),i(),t(1081,"p"),e(1082,"Deve ser usado o sistema de "),t(1083,"strong"),e(1084,"grid"),i(),e(1085," do PO (1 ... 12 colunas)."),i(),t(1086,"blockquote")(1087,"p"),e(1088,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),i()()()(),t(1089,"tr",13)(1090,"td",14)(1091,"div",15)(1092,"span",16),e(1093," offsetLgColumns"),n(1094,"br"),i()()(),t(1095,"td",17)(1096,"code",46),e(1097,"number"),i()(),t(1098,"td",20)(1099,"em")(1100,"strong"),e(1101,"(opcional)"),i()(),t(1102,"p"),e(1103,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),i(),t(1104,"p"),e(1105,"Deve ser usado o sistema de "),t(1106,"strong"),e(1107,"grid"),i(),e(1108," do PO (1 ... 12 colunas)."),i(),t(1109,"blockquote")(1110,"p"),e(1111,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(1112,"code"),e(1113,"offsetColumns"),i(),e(1114,"."),i()()()(),t(1115,"tr",13)(1116,"td",14)(1117,"div",15)(1118,"span",16),e(1119," offsetMdColumns"),n(1120,"br"),i()()(),t(1121,"td",17)(1122,"code",46),e(1123,"number"),i()(),t(1124,"td",20)(1125,"em")(1126,"strong"),e(1127,"(opcional)"),i()(),t(1128,"p"),e(1129,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),i(),t(1130,"p"),e(1131,"Deve ser usado o sistema de "),t(1132,"strong"),e(1133,"grid"),i(),e(1134," do PO (1 ... 12 colunas)."),i(),t(1135,"blockquote")(1136,"p"),e(1137,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(1138,"code"),e(1139,"offsetColumns"),i(),e(1140,"."),i()()()(),t(1141,"tr",13)(1142,"td",14)(1143,"div",15)(1144,"span",16),e(1145," offsetSmColumns"),n(1146,"br"),i()()(),t(1147,"td",17)(1148,"code",46),e(1149,"number"),i()(),t(1150,"td",20)(1151,"em")(1152,"strong"),e(1153,"(opcional)"),i()(),t(1154,"p"),e(1155,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),i(),t(1156,"p"),e(1157,"Deve ser usado o sistema de "),t(1158,"strong"),e(1159,"grid"),i(),e(1160," do PO (1 ... 12 colunas)."),i(),t(1161,"blockquote")(1162,"p"),e(1163,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(1164,"code"),e(1165,"offsetColumns"),i(),e(1166,"."),i()()()(),t(1167,"tr",13)(1168,"td",14)(1169,"div",15)(1170,"span",16),e(1171," offsetXlColumns"),n(1172,"br"),i()()(),t(1173,"td",17)(1174,"code",46),e(1175,"number"),i()(),t(1176,"td",20)(1177,"em")(1178,"strong"),e(1179,"(opcional)"),i()(),t(1180,"p"),e(1181,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),i(),t(1182,"p"),e(1183,"Deve ser usado o sistema de "),t(1184,"strong"),e(1185,"grid"),i(),e(1186," do PO (1 ... 12 colunas)."),i(),t(1187,"blockquote")(1188,"p"),e(1189,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),t(1190,"code"),e(1191,"offsetColumns"),i(),e(1192,"."),i()()()(),t(1193,"tr",13)(1194,"td",14)(1195,"div",15)(1196,"span",16),e(1197," options"),n(1198,"br"),i()()(),t(1199,"td",17)(1200,"code",48),e(1201,"Array<{ label: string; value: string "),i(),t(1202,"code",49),e(1203,` number;
}>`),i()(),t(1204,"td",20)(1205,"em")(1206,"strong"),e(1207,"(opcional)"),i()(),t(1208,"p"),e(1209,`Lista de op\xE7\xF5es que podem ser vinculadas \xE0 propriedade p-value.
Quando uma op\xE7\xE3o de valor \xE9 passada, sua propriedade label ser\xE1 atribu\xEDda \xE0 propriedade p-value.`),i(),t(1210,"p"),e(1211,"Exemplo de utiliza\xE7\xE3o:"),i(),t(1212,"pre")(1213,"code"),e(1214,`fields = [
  {
    property: 'name', options: [
      {label: 'Anna', value: '1'},
      {label: 'Jhon', value: '2'},
      {label: 'Mark', value: '3'}
    ]
  }
];
`),i()(),t(1215,"pre")(1216,"code"),e(1217,`<!-- Passando o valor 2 referente ao Jhon -->
<po-dynamic-view [p-fields]="fields" [p-value]="{ name: '2' }"> </po-dynamic-view>
`),i()()()(),t(1218,"tr",13)(1219,"td",14)(1220,"div",15)(1221,"span",16),e(1222," optionsMulti"),n(1223,"br"),i()()(),t(1224,"td",17)(1225,"code",23),e(1226,"boolean"),i()(),t(1227,"td",20)(1228,"em")(1229,"strong"),e(1230,"(opcional)"),i()(),t(1231,"p"),e(1232,`Habilita a visualiza\xE7\xE3o de m\xFAltiplos itens.
\xDAtil para exibir dados em formatos semelhantes aos componentes que suportam sele\xE7\xE3o m\xFAltipla.`),i()()(),t(1233,"tr",13)(1234,"td",14)(1235,"div",15)(1236,"span",16),e(1237," optionsService"),n(1238,"br"),i()()(),t(1239,"td",17)(1240,"code",21),e(1241,"string "),i(),t(1242,"code",50),e(1243," PoComboFilter "),i(),t(1244,"code",51),e(1245," PoMultiselectFilter"),i()(),t(1246,"td",20)(1247,"em")(1248,"strong"),e(1249,"(opcional)"),i()(),t(1250,"p"),e(1251,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),t(1252,"strong"),e(1253,"Importante"),i()(),t(1254,"blockquote")(1255,"p"),e(1256,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),t(1257,"a",52),e(1258,"guia de API do PO UI"),i(),e(1259,"."),i()()()(),t(1260,"tr",13)(1261,"td",14)(1262,"div",15)(1263,"span",16),e(1264," order"),n(1265,"br"),i()()(),t(1266,"td",17)(1267,"code",46),e(1268,"number"),i()(),t(1269,"td",20)(1270,"em")(1271,"strong"),e(1272,"(opcional)"),i()(),t(1273,"p"),e(1274,"Informa a ordem de exibi\xE7\xE3o do campo."),i(),t(1275,"p"),e(1276,"Exemplo de utiliza\xE7\xE3o:"),i(),t(1277,"pre")(1278,"code"),e(1279,`[
  { property: 'test 1', order: 2 },
  { property: 'test 2', order: 1 },
  { property: 'test 3' },
  { property: 'test 4', order: 3 }
];
`),i()(),t(1280,"p"),e(1281,"Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:"),i(),t(1282,"pre")(1283,"code"),e(1284,`[
  { property: 'test 2', order: 1 },
  { property: 'test 1', order: 2 },
  { property: 'test 4', order: 3 },
  { property: 'test 3' }
];
`),i()(),t(1285,"p"),e(1286,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),i(),t(1287,"p"),e(1288,"Campos sem "),t(1289,"code"),e(1290,"order"),i(),e(1291,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),i()()(),t(1292,"tr",13)(1293,"td",14)(1294,"div",15)(1295,"span",16),e(1296," params"),n(1297,"br"),i()()(),t(1298,"td",17)(1299,"code",53),e(1300,"any"),i()(),t(1301,"td",20)(1302,"em")(1303,"strong"),e(1304,"(opcional)"),i()(),t(1305,"p"),e(1306,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca "),t(1307,"code"),e(1308,"searchService"),i(),e(1309," ou "),t(1310,"code"),e(1311,"optionsService"),i(),e(1312,`
utilizadas pelos campos que dependem de servi\xE7os para carregar seus dados.`),i(),t(1313,"p"),e(1314,"Por exemplo, para o par\xE2metro "),t(1315,"code"),e(1316,"{ age: 23 }"),i(),e(1317," a URL da requisi\xE7\xE3o ficaria:"),i(),t(1318,"p")(1319,"code"),e(1320,"url + /1?age=23"),i()()()(),t(1321,"tr",13)(1322,"td",14)(1323,"div",15)(1324,"span",16),e(1325," property"),n(1326,"br"),i()()(),t(1327,"td",17)(1328,"code",21),e(1329,"string"),i()(),t(1330,"td",20)(1331,"p"),e(1332,"Nome de refer\xEAncia do campo."),i()()(),t(1333,"tr",13)(1334,"td",14)(1335,"div",15)(1336,"span",16),e(1337," searchService"),n(1338,"br"),i()()(),t(1339,"td",17)(1340,"code",21),e(1341,"string "),i(),t(1342,"code",54),e(1343," PoDynamicViewRequest"),i()(),t(1344,"td",20)(1345,"em")(1346,"strong"),e(1347,"(opcional)"),i()(),t(1348,"p"),e(1349,`Servi\xE7o customizado para um campo em espec\xEDfico.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoDynamicViewRequest.
`),t(1350,"strong"),e(1351,"Importante:"),i()(),t(1352,"blockquote")(1353,"p"),e(1354,"A propriedade "),t(1355,"code"),e(1356,"property"),i(),e(1357,` deve receber um valor v\xE1lido independente de sua utiliza\xE7\xE3o para
execu\xE7\xE3o correta.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),t(1358,"a",52),e(1359,"guia de API do PO UI"),i(),e(1360,"."),i()()()(),t(1361,"tr",13)(1362,"td",14)(1363,"div",15)(1364,"span",16),e(1365," tag"),n(1366,"br"),i()()(),t(1367,"td",17)(1368,"code",23),e(1369,"boolean"),i()(),t(1370,"td",20)(1371,"em")(1372,"strong"),e(1373,"(opcional)"),i()(),t(1374,"p"),e(1375,"Indica se o campo ser\xE1 um "),t(1376,"code"),e(1377,"po-tag"),i(),e(1378,"."),i()()(),t(1379,"tr",13)(1380,"td",14)(1381,"div",15)(1382,"span",16),e(1383," textColor"),n(1384,"br"),i()()(),t(1385,"td",17)(1386,"code",21),e(1387,"string"),i()(),t(1388,"td",20)(1389,"em")(1390,"strong"),e(1391,"(opcional)"),i()(),t(1392,"p"),e(1393,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),i(),t(1394,"ul")(1395,"li"),e(1396,"Hexadeximal, por exemplo "),t(1397,"code"),e(1398,"#c64840"),i(),e(1399,";"),i(),t(1400,"li"),e(1401,"RGB, como "),t(1402,"code"),e(1403,"rgb(0, 0, 165)"),i(),e(1404,";"),i(),t(1405,"li"),e(1406,"O nome da cor, por exemplo "),t(1407,"code"),e(1408,"blue"),i(),e(1409,";"),i()()()(),t(1410,"tr",13)(1411,"td",14)(1412,"div",15)(1413,"span",16),e(1414," type"),n(1415,"br"),i()()(),t(1416,"td",17)(1417,"code",21),e(1418,"string "),i(),t(1419,"code",55),e(1420," PoDynamicFieldType"),i()(),t(1421,"td",20)(1422,"em")(1423,"strong"),e(1424,"(opcional)"),i()(),t(1425,"p"),e(1426,"Tipo do valor campo."),i(),t(1427,"p"),e(1428,"Valores v\xE1lidos:"),i(),t(1429,"ul")(1430,"li")(1431,"code"),e(1432,"boolean"),i(),e(1433,": Valores "),t(1434,"em"),e(1435,"booleanos"),i(),e(1436,"."),i(),t(1437,"li")(1438,"code"),e(1439,"currency"),i(),e(1440,": Valores monet\xE1rios."),i(),t(1441,"li")(1442,"code"),e(1443,"decimal"),i(),e(1444,": Valores decimais."),i(),t(1445,"li")(1446,"code"),e(1447,"date"),i(),e(1448,": Valores de datas."),t(1449,"ul")(1450,"li"),e(1451,"Aceita os tipos "),t(1452,"strong"),e(1453,"string"),i(),e(1454," e "),t(1455,"strong"),e(1456,"Date"),i(),e(1457,` padr\xE3o do Javascript,
por exemplo: `),t(1458,"code"),e(1459,"'2017-11-28'"),i(),e(1460," ou "),t(1461,"code"),e(1462,"new Date(2017, 10, 28)"),i(),e(1463,"."),i()()(),t(1464,"li")(1465,"code"),e(1466,"dateTime"),i(),e(1467,": Valor de data com hor\xE1rio."),t(1468,"ul")(1469,"li"),e(1470,"Aceita o tipo "),t(1471,"em"),e(1472,"string"),i(),e(1473," no formato "),t(1474,"strong"),e(1475,"ISO-8601"),i(),e(1476," extendido "),t(1477,"strong"),e(1478,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),i(),e(1479,`
e o tipo `),t(1480,"strong"),e(1481,"Date"),i(),e(1482," padr\xE3o do Javascript, por exemplo: "),t(1483,"code"),e(1484,"'2017-11-28T00:00:00-02:00'"),i(),e(1485," ou "),t(1486,"code"),e(1487,"new Date(2017, 10, 28)"),i(),e(1488,"."),i()()(),t(1489,"li")(1490,"code"),e(1491,"number"),i(),e(1492,": Valores num\xE9ricos."),i(),t(1493,"li")(1494,"code"),e(1495,"string"),i(),e(1496,": Textos."),i(),t(1497,"li")(1498,"code"),e(1499,"time"),i(),e(1500,": Valor do hor\xE1rio."),t(1501,"ul")(1502,"li"),e(1503,"Aceita o tipo "),t(1504,"strong"),e(1505,"string"),i(),e(1506," nos formatos "),t(1507,"strong"),e(1508,"'HH:mm:ss'"),i(),e(1509," ou "),t(1510,"strong"),e(1511,"'HH:mm:ss.ffffff'"),i(),e(1512,", por exemplo: "),t(1513,"code"),e(1514,"'23:12:45'"),i(),e(1515,"."),i()()()()()(),t(1516,"tr",13)(1517,"td",14)(1518,"div",15)(1519,"span",16),e(1520," visible"),n(1521,"br"),i()()(),t(1522,"td",17)(1523,"code",23),e(1524,"boolean"),i()(),t(1525,"td",20)(1526,"em")(1527,"strong"),e(1528,"(opcional)"),i()(),t(1529,"p"),e(1530,"Indica se o campo ser\xE1 vis\xEDvel."),i()()()()())},dependencies:[S],encapsulation:2})}return o})();var K=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(T(z),T(B))};static \u0275cmp=d({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Dynamic View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return l.changeTab("doc")}),n(3,"sample-po-dynamic-view-doc"),i(),t(4,"po-tab",3),c("p-click",function(){return l.changeTab("web")}),n(5,"sample-po-dynamic-view-basic-view")(6,"sample-po-dynamic-view-employee-view")(7,"sample-po-dynamic-view-employee-on-load-view")(8,"sample-po-dynamic-view-container-view"),i()()()),a&2&&(p("p-actions",l.actions),m(2),p("p-active",l.activeTab==="doc"),m(2),p("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[v,E,x,R,J,U,X,Q],encapsulation:2})}return o})();var xe=[{path:"",component:K}],Y=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=w({type:o});static \u0275inj=D({imports:[A.forChild(xe),A]})}return o})();var Qe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=w({type:o});static \u0275inj=D({imports:[_,Y]})}return o})();export{Qe as DocPoDynamicViewModule};
