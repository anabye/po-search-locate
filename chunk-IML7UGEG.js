import{o as B,p as W}from"./chunk-JYNCG2Y6.js";import{Ab as C,F as k,Fb as X,Ga as O,Wa as F,nb as N,ta as T,zb as v}from"./chunk-HBOGTDFH.js";import{$a as q,Ba as R,Ea as e,Fa as t,Ga as p,La as m,M as g,Nc as D,Pc as M,Rc as E,Tb as y,Xa as n,Za as H,ab as P,bb as S,eb as I,ha as s,ia as b,oa as u,pa as f,rc as L,ub as w,wc as _,ya as c,zc as x}from"./chunk-MIQUIDUB.js";var z=(()=>{class o{http;httpRequestInterceptor;countPendingRequestHeaderParam=!1;screenLockHeaderParam=!1;pendingRequests=0;url="";subscription;apiSubscription;constructor(r,i){this.http=r,this.httpRequestInterceptor=i}ngOnDestroy(){this.subscription.unsubscribe(),this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.subscription=this.httpRequestInterceptor.getCountPendingRequests().subscribe(r=>{this.pendingRequests=r})}getRequest(){let r={"X-PO-No-Count-Pending-Requests":this.countPendingRequestHeaderParam.toString(),"X-PO-Screen-Lock":this.screenLockHeaderParam.toString()};this.apiSubscription=this.http.get(this.url,{headers:r}).subscribe(()=>{})}static \u0275fac=function(i){return new(i||o)(b(y),b(X))};static \u0275cmp=u({type:o,selectors:[["sample-po-http-request-interceptor-labs"]],standalone:!1,decls:9,vars:5,consts:[[1,"po-row"],["p-label","Pending Requests",1,"po-lg-12",3,"p-value"],["name","url","p-help","https://po-sample-api.onrender.com/v1/people","p-label","URL","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","countPendingRequestHeaderParam","p-help","Enable/disable the sent param in header of request","p-label","X-PO-No-Count-Pending-Requests","p-label-off","Disable","p-label-on","Enable","ngDefaultControl","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","screenLockHeaderParam","p-help","Enable/disable the sent param in header of request","p-label","X-PO-Screen-Lock","p-label-off","Disable","p-label-on","Enable","ngDefaultControl","",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Get request",1,"po-md-4",3,"p-click","p-disabled"]],template:function(i,a){i&1&&(e(0,"div",0),p(1,"po-info",1),t(),e(2,"div",0)(3,"po-input",2),S("ngModelChange",function(l){return P(a.url,l)||(a.url=l),l}),t()(),e(4,"div",0)(5,"po-switch",3),S("ngModelChange",function(l){return P(a.countPendingRequestHeaderParam,l)||(a.countPendingRequestHeaderParam=l),l}),t(),e(6,"po-switch",4),S("ngModelChange",function(l){return P(a.screenLockHeaderParam,l)||(a.screenLockHeaderParam=l),l}),t()(),e(7,"div",0)(8,"po-button",5),m("p-click",function(){return a.getRequest()}),t()()),i&2&&(s(),c("p-value",a.pendingRequests),s(2),q("ngModel",a.url),s(2),q("ngModel",a.countPendingRequestHeaderParam),s(),q("ngModel",a.screenLockHeaderParam),s(2),c("p-disabled",!a.url))},dependencies:[L,_,x,k,O,T,F],encapsulation:2})}return o})();var K=o=>({"docs-sample-code-tabs":o}),V=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-http-request-interceptor-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(p(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Http Request Interceptor Labs"),t(),e(4,"a",2),m("click",function(){return a.toggleSampleCodeTabs()}),p(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-http-request-interceptor-labs.component.html"),t(),e(13,"pre",7),n(14,`<div class="po-row">
  <po-info class="po-lg-12" p-label="Pending Requests" [p-value]="pendingRequests"> </po-info>
</div>

<div class="po-row">
  <po-input
    class="po-lg-6"
    name="url"
    [(ngModel)]="url"
    p-help="https://po-sample-api.onrender.com/v1/people"
    p-label="URL"
    p-required
  >
  </po-input>
</div>

<div class="po-row">
  <po-switch
    class="po-lg-6"
    name="countPendingRequestHeaderParam"
    [(ngModel)]="countPendingRequestHeaderParam"
    p-help="Enable/disable the sent param in header of request"
    p-label="X-PO-No-Count-Pending-Requests"
    p-label-off="Disable"
    p-label-on="Enable"
    ngDefaultControl
  >
  </po-switch>

  <po-switch
    class="po-lg-6"
    name="screenLockHeaderParam"
    [(ngModel)]="screenLockHeaderParam"
    p-help="Enable/disable the sent param in header of request"
    p-label="X-PO-Screen-Lock"
    p-label-off="Disable"
    p-label-on="Enable"
    ngDefaultControl
  >
  </po-switch>
</div>

<div class="po-row">
  <po-button class="po-md-4" p-label="Get request" [p-disabled]="!url" (p-click)="getRequest()"> </po-button>
</div>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-http-request-interceptor-labs.component.ts"),t(),e(19,"pre",9),n(20,`import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subscription } from 'rxjs';

import { PoHttpRequestInterceptorService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-http-request-interceptor-labs',
  templateUrl: './sample-po-http-request-interceptor-labs.component.html',
  standalone: false
})
export class SamplePoHttpRequestInterceptorLabsComponent implements OnInit, OnDestroy {
  countPendingRequestHeaderParam = false;
  screenLockHeaderParam = false;

  pendingRequests: number = 0;
  url: string = '';

  private subscription: Subscription;
  private apiSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private httpRequestInterceptor: PoHttpRequestInterceptorService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.httpRequestInterceptor.getCountPendingRequests().subscribe(data => {
      this.pendingRequests = data;
    });
  }

  getRequest() {
    const headers = {
      'X-PO-No-Count-Pending-Requests': this.countPendingRequestHeaderParam.toString(),
      'X-PO-Screen-Lock': this.screenLockHeaderParam.toString()
    };

    this.apiSubscription = this.http.get(this.url, { headers: headers }).subscribe(() => {});
  }
}
`),t()()()()(),e(21,"div",10),p(22,"sample-po-http-request-interceptor-labs"),t(),p(23,"hr")),i&2&&(s(5),R("po-icon "+a.sampleCodeButtonIcon),s(),H(" ",a.sampleCodeButtonLabel,""),s(),c("ngClass",I(4,K,a.hideSampleCodeTabs)))},dependencies:[w,B,v,C,z],encapsulation:2})}return o})();var A=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-http-request-interceptor-doc"]],standalone:!1,decls:67,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"]],template:function(i,a){i&1&&(e(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoHttpRequestModule } from '@po-ui/ng-components';"),t()(),p(4,"div",2),e(5,"h3",3),n(6,"Services"),t(),e(7,"h4",4)(8,"code",5),n(9,"PoHttpRequestInterceptorService"),t()(),e(10,"div",2)(11,"p"),n(12,"O servi\xE7o PO Http Request Interceptor realiza a contabiliza\xE7\xE3o de requisi\xE7\xF5es pendentes na aplica\xE7\xE3o."),t(),e(13,"p"),n(14,`Existe a possibilidade de n\xE3o efetuar a contabiliza\xE7\xE3o das requisi\xE7\xF5es pendentes, utilizando o par\xE2metro
`),e(15,"code"),n(16,"X-PO-No-Count-Pending-Requests"),t(),n(17,". Para isso deve ser informado no cabe\xE7alho da requisi\xE7\xE3o com o valor "),e(18,"code"),n(19,"'true'"),t(),n(20,`,
por exemplo:`),t(),e(21,"pre")(22,"code"),n(23,`...
 const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),t()(),e(24,"p"),n(25,"Para obter a quantidade de requisi\xE7\xF5es pendentes, deve inscrever-se no m\xE9todo "),e(26,"code"),n(27,"getCountPendingRequests"),t(),n(28,` do
servi\xE7o `),e(29,"code"),n(30,"PoHttpRequestInterceptorService"),t(),n(31,", com isso, ao realizar requisi\xE7\xF5es utilizando "),e(32,"code"),n(33,"HttpClient"),t(),n(34,`,
ser\xE1 retornado a quantidade de requisi\xE7\xF5es pendentes.`),t(),e(35,"p"),n(36,"Tamb\xE9m existe a possibildade de travar a tela e mostrar uma imagem de "),e(37,"em"),n(38,"loading"),t(),n(39,` durante o processamento de uma requisi\xE7\xE3o
deve-se passar o par\xE2metro `),e(40,"code"),n(41,"X-PO-Screen-Lock"),t(),n(42," no cabe\xE7alho da requisi\xE7\xE3o com valor "),e(43,"code"),n(44,"'true'"),t(),n(45,"."),t(),e(46,"p"),n(47,"por exemplo:"),t(),e(48,"pre")(49,"code"),n(50,`...
 const headers = { 'X-PO-Screen-Lock': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),t()(),e(51,"blockquote")(52,"p"),n(53,"Ap\xF3s a valida\xE7\xE3o no interceptor, o par\xE2metro ser\xE1 removido do cabe\xE7alho da requisi\xE7\xE3o."),t()(),e(54,"p"),n(55,"Ao importar o m\xF3dulo "),e(56,"code"),n(57,"PoModule"),t(),n(58," na aplica\xE7\xE3o, o "),e(59,"code"),n(60,"po-http-request-interceptor"),t(),n(61,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),t(),e(62,"p"),n(63,"Segue abaixo um exemplo de uso:"),t(),e(64,"pre")(65,"code"),n(66,`import { HttpClient } from '@angular/common/http';

...

@Injectable({
 providedIn: 'root'
})
export class CustomersService {

 headers = { 'X-PO-No-Count-Pending-Requests': true, 'X-PO-Screen-Lock': 'true' }
 pendingRequests: number = 0;
 subscription: Subscription;

 constructor(
   private http: HttpClient,
   private httpRequestInterceptor: PoHttpRequestInterceptorService) { }

 ngOnDestroy(): void {
   this.subscription.unsubscribe();
 }

 ngOnInit(): void {
   this.subscription = this.httpRequestInterceptor.getCountPendingRequests().subscribe(data => {
     this.pendingRequests = data;
   });
 }

 getCustomers() {
   return this.http.get(\`/customers/1\`, { headers: headers });
 }

 ...

}
`),t()()()())},encapsulation:2})}return o})();var U=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(i){return new(i||o)(b(D),b(M))};static \u0275cmp=u({type:o,selectors:[["ng-component"]],standalone:!1,decls:6,vars:4,consts:[["p-title","Http Request Interceptor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,a){i&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),m("p-click",function(){return a.changeTab("doc")}),p(3,"sample-po-http-request-interceptor-doc"),t(),e(4,"po-tab",3),m("p-click",function(){return a.changeTab("web")}),p(5,"sample-po-http-request-interceptor-labs-view"),t()()()),i&2&&(c("p-actions",a.actions),s(2),c("p-active",a.activeTab==="doc"),s(2),c("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[N,v,C,V,A],encapsulation:2})}return o})();var Z=[{path:"",component:U}],G=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=f({type:o});static \u0275inj=g({imports:[E.forChild(Z),E]})}return o})();var qe=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=f({type:o});static \u0275inj=g({imports:[W,G]})}return o})();export{qe as DocPoHttpRequestInterceptorModule};
