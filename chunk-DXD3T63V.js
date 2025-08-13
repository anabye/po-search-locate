import{n as W,o as z,p as X}from"./chunk-MMZVQUBQ.js";import{Ab as w,F as V,ja as j,nb as B,zb as M}from"./chunk-522XRIZO.js";import{Ac as F,Ba as y,Bc as L,Fa as o,Ga as t,Ha as s,La as I,M as S,Ma as c,Oc as A,Qc as R,Sc as _,T as h,U as g,Ub as q,Ya as e,_a as H,ab as v,bb as P,cb as C,fb as T,ha as l,ia as E,oa as u,pa as x,vb as D,xc as O,ya as d,yc as N,zc as k}from"./chunk-WFKG4FNY.js";var G=(()=>{class n{http;headerParam;requestMessage;status;errorMessage=`{
    "code": "401",
    "message": "Not Authorized",
    "detailTitle": "Invalid credentials",
    "detailedMessage": "The request has not been applied because it lacks valid authentication credentials for the target resource.",
    "type": "error",
    "helpUrl": "",
    "details": [{
        "code": "406",
        "message": "Not Acceptable",
        "detailedMessage": "The target resource does not have a current representation that would be acceptable to the user agent",
        "type": "error"
    }]
}`;successMessage=`{
    "_messages": [
        {
            "code": "200",
            "message": "Ok",
            "detailedMessage": "The request has succeeded.",
            "type": "success",
            "helpUrl": "",
            "details": [{
              "code": "202",
              "message": "Accepted",
              "detailTitle": "Request was received",
              "detailedMessage": "The request has been accepted for processing, but the processing has not been completed.",
              "type": "warning"
            }]
        }
    ]
}`;statusOptions=[{label:"200 - Success",value:"200"},{label:"401 - Error",value:"401"}];headerParamOptions=[{label:"X-PO-No-Message",value:"No-Message"},{label:"X-PO-No-Error",value:"No-Error"}];apiSubscription;constructor(r){this.http=r}ngOnDestroy(){this.apiSubscription&&this.apiSubscription.unsubscribe()}ngOnInit(){this.restore()}changeOption(){this.requestMessage=this.status==="200"?this.successMessage:this.errorMessage}getParam(){return this.headerParam==="No-Message"?{"X-PO-No-Message":"true"}:this.headerParam==="No-Error"?{"X-PO-No-Error":"true"}:{}}processRequest(){let r=this.getParam(),a=JSON.parse(this.requestMessage),i={status:this.status||""};this.apiSubscription=this.http.post("https://po-sample-api.onrender.com/v1/messages",a,{headers:r,params:i}).subscribe()}restore(){this.headerParam=void 0,this.requestMessage=this.successMessage,this.status="200"}static \u0275fac=function(a){return new(a||n)(E(q))};static \u0275cmp=u({type:n,selectors:[["sample-po-http-interceptor-labs"]],standalone:!1,decls:15,vars:5,consts:[["requestForm","ngForm"],[1,"po-text-color-neutral-dark-40"],["p-height","330","p-theme","vs-dark",3,"ngModelChange","ngModel"],[1,"po-row"],["name","status","p-label","Http Status",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","headerParam","p-label","Disables Notifications",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Process Request",1,"po-md-3",3,"p-click"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let m=I();o(0,"h2"),e(1,"Process request with Http Interceptor"),t(),o(2,"p",1),e(3,"Edit response object by server with pattern expected by Http Interceptor:"),t(),o(4,"po-code-editor",2),C("ngModelChange",function(p){return h(m),P(i.requestMessage,p)||(i.requestMessage=p),g(p)}),t(),s(5,"hr"),o(6,"form",null,0)(8,"div",3)(9,"po-radio-group",4),C("ngModelChange",function(p){return h(m),P(i.status,p)||(i.status=p),g(p)}),c("p-change",function(){return h(m),g(i.changeOption())}),t(),o(10,"po-radio-group",5),C("ngModelChange",function(p){return h(m),P(i.headerParam,p)||(i.headerParam=p),g(p)}),t()(),o(11,"div",6)(12,"po-button",7),c("p-click",function(){return h(m),g(i.processRequest())}),t()(),o(13,"div",6)(14,"po-button",8),c("p-click",function(){return h(m),g(i.restore())}),t()()()}a&2&&(l(4),v("ngModel",i.requestMessage),l(5),v("ngModel",i.status),d("p-options",i.statusOptions),l(),v("ngModel",i.headerParam),d("p-options",i.headerParamOptions))},dependencies:[L,O,N,F,k,V,j,W],encapsulation:2})}return n})();var $=n=>({"docs-sample-code-tabs":n}),J=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=u({type:n,selectors:[["sample-po-http-interceptor-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(s(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Http Interceptor Labs"),t(),o(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),s(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-http-interceptor-labs.component.html"),t(),o(13,"pre",7),e(14,`<h2>Process request with Http Interceptor</h2>
<p class="po-text-color-neutral-dark-40">Edit response object by server with pattern expected by Http Interceptor:</p>

<po-code-editor [(ngModel)]="requestMessage" p-height="330" p-theme="vs-dark"> </po-code-editor>

<hr />

<form #requestForm="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="status"
      [(ngModel)]="status"
      p-label="Http Status"
      [p-options]="statusOptions"
      (p-change)="changeOption()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="headerParam"
      [(ngModel)]="headerParam"
      p-label="Disables Notifications"
      [p-options]="headerParamOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row po-mt-1">
    <po-button class="po-md-3" p-label="Process Request" (p-click)="processRequest()"> </po-button>
  </div>

  <div class="po-row po-mt-1">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-http-interceptor-labs.component.ts"),t(),o(19,"pre",9),e(20,`// import { PoRadioGroupOption } from './../../../../../../../dist/ng-components/lib/components/po-field/po-radio-group/po-radio-group-option.interface.d';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { PoRadioGroupOption } from '@po-ui/ng-components';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sample-po-http-interceptor-labs',
  templateUrl: './sample-po-http-interceptor-labs.component.html',
  standalone: false
})
export class SamplePoHttpInterceptorLabsComponent implements OnDestroy, OnInit {
  headerParam: string;
  requestMessage: string;
  status: string;

  errorMessage = \`{
    "code": "401",
    "message": "Not Authorized",
    "detailTitle": "Invalid credentials",
    "detailedMessage": "The request has not been applied because it lacks valid authentication credentials for the target resource.",
    "type": "error",
    "helpUrl": "",
    "details": [{
        "code": "406",
        "message": "Not Acceptable",
        "detailedMessage": "The target resource does not have a current representation that would be acceptable to the user agent",
        "type": "error"
    }]
}\`;

  successMessage = \`{
    "_messages": [
        {
            "code": "200",
            "message": "Ok",
            "detailedMessage": "The request has succeeded.",
            "type": "success",
            "helpUrl": "",
            "details": [{
              "code": "202",
              "message": "Accepted",
              "detailTitle": "Request was received",
              "detailedMessage": "The request has been accepted for processing, but the processing has not been completed.",
              "type": "warning"
            }]
        }
    ]
}\`;

  readonly statusOptions: Array<PoRadioGroupOption> = [
    { label: '200 - Success', value: '200' },
    { label: '401 - Error', value: '401' }
  ];

  readonly headerParamOptions: Array<PoRadioGroupOption> = [
    { label: 'X-PO-No-Message', value: 'No-Message' },
    { label: 'X-PO-No-Error', value: 'No-Error' }
  ];

  private apiSubscription: Subscription;

  constructor(private http: HttpClient) {}

  ngOnDestroy() {
    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.restore();
  }

  changeOption() {
    this.requestMessage = this.status === '200' ? this.successMessage : this.errorMessage;
  }

  getParam() {
    return this.headerParam === 'No-Message'
      ? { 'X-PO-No-Message': 'true' }
      : this.headerParam === 'No-Error'
        ? { 'X-PO-No-Error': 'true' }
        : {};
  }

  processRequest() {
    const headers = this.getParam();
    const body = JSON.parse(this.requestMessage);
    const params = { status: this.status || '' };

    this.apiSubscription = this.http
      .post(\`https://po-sample-api.onrender.com/v1/messages\`, body, { headers, params })
      .subscribe();
  }

  restore() {
    this.headerParam = undefined;
    this.requestMessage = this.successMessage;
    this.status = '200';
  }
}
`),t()()()()(),o(21,"div",10),s(22,"sample-po-http-interceptor-labs"),t(),s(23,"hr")),a&2&&(l(5),y("po-icon "+i.sampleCodeButtonIcon),l(),H(" ",i.sampleCodeButtonLabel,""),l(),d("ngClass",T(4,$,i.hideSampleCodeTabs)))},dependencies:[D,z,M,w,G],encapsulation:2})}return n})();var K=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=u({type:n,selectors:[["sample-po-http-interceptor-doc"]],standalone:!1,decls:166,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"]],template:function(a,i){a&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoHttpInterceptorModule } from '@po-ui/ng-components';"),t()(),s(4,"div",2),o(5,"h3",3),e(6,"Services"),t(),o(7,"h4",4)(8,"code",5),e(9,"PoHttpInterceptorService"),t()(),o(10,"div",2)(11,"p"),e(12,"O "),o(13,"em"),e(14,"interceptor"),t(),e(15," tem a finalidade de exibir notifica\xE7\xF5es com mensagens na tela, baseado nas respostas das requisi\xE7\xF5es HTTP."),t(),o(16,"p"),e(17,`Pode ser utilizado para dar feedback das a\xE7\xF5es do usu\xE1rio como, por exemplo: erro de autoriza\xE7\xE3o, mensagens de regras de neg\xF3cio,
atualiza\xE7\xF5es de registros, erro quando o servidor estiver indispon\xEDvel e entre outros.`),t(),o(18,"h2"),e(19,"Configura\xE7\xE3o"),t(),o(20,"p"),e(21,"Para o correto funcionamento do interceptor "),o(22,"code"),e(23,"po-http-interceptor"),t(),e(24,", deve ser importado o "),o(25,"code"),e(26,"BrowserAnimationsModule"),t(),e(27,` no
m\xF3dulo principal da sua aplica\xE7\xE3o. Al\xE9m disso, \xE9 necess\xE1rio configurar o `),o(28,"code"),e(29,"HttpClient"),t(),e(30,` para utilizar os interceptors
registrados no Dependency Injection (DI) por meio da fun\xE7\xE3o `),o(31,"code"),e(32,"provideHttpClient(withInterceptorsFromDi())"),t(),e(33,"."),t(),o(34,"p"),e(35,"M\xF3dulo da aplica\xE7\xE3o:"),t(),o(36,"pre")(37,"code"),e(38,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),t()(),o(39,"p"),e(40,"Ao importar o m\xF3dulo "),o(41,"code"),e(42,"PoModule"),t(),e(43," na aplica\xE7\xE3o, o "),o(44,"code"),e(45,"po-http-interceptor"),t(),e(46,` \xE9 automaticamente configurado sem a necessidade
de qualquer configura\xE7\xE3o extra.`),t(),o(47,"p"),e(48,"Ao realizar requisi\xE7\xF5es utilize o "),o(49,"code"),e(50,"HttpClient"),t(),e(51,", conforme exemplo abaixo:"),t(),o(52,"pre")(53,"code"),e(54,`import { HttpClient } from '@angular/common/http';

...

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('/api/users');
  }

  ...

}
`),t()(),o(55,"h2"),e(56,"Como usar"),t(),o(57,"p"),e(58,`Para exibir as notica\xE7\xF5es \xE9 necess\xE1rio informar a mensagem no retorno da requisi\xE7\xE3o. A estrutura da mensagem
\xE9 feita com base no status da resposta, conforme ser\xE1 apresentado nos pr\xF3ximos t\xF3picos.`),t(),o(59,"h3"),e(60,"Estrutura das mensagens"),t(),o(61,"h4"),e(62,"Mensagens de sucesso "),o(63,"code"),e(64,"2xx"),t()(),o(65,"p"),e(66,"Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade "),o(67,"code"),e(68,"_messages"),t(),e(69,` no objeto de retorno.
Por exemplo:`),t(),o(70,"pre")(71,"code"),e(72,`{
  "_messages": [
    {
      "type": "success" || "warning" || "error" || "information" (ser\xE1 exibido a \`tag\` apenas se esta propriedade possuir valor),
      "code": "t\xEDtulo ou c\xF3digo da mensagem",
      "message": "texto da mensagem",
      "detailedMessage": "detalhamento da mensagem"
    }
  ]
}
`),t()(),o(73,"h4"),e(74,"Mensagens de erro "),o(75,"code"),e(76,"4xx"),t(),e(77," ou "),o(78,"code"),e(79,"5xx"),t()(),o(80,"p"),e(81,"Ao retornar erro, o objeto n\xE3o necessita ter "),o(82,"code"),e(83,"_messages"),t(),e(84,", deve-se retornar o objeto diretamente:"),t(),o(85,"pre")(86,"code"),e(87,`{
   "code": "t\xEDtulo ou c\xF3digo da mensagem",
   "message": "texto da mensagem",
   "detailedMessage": "detalhamento da mensagem"
}
`),t()(),o(88,"p"),e(89,"Tamb\xE9m \xE9 poss\xEDvel informar as seguintes propriedades:"),t(),o(90,"ul")(91,"li")(92,"code"),e(93,"helpUrl"),t(),e(94,": link para a documenta\xE7\xE3o do erro;"),o(95,"ul")(96,"li"),e(97,'Caso for informado, ser\xE1 exibido uma a\xE7\xE3o de "Ajuda" na notifica\xE7\xE3o, para isso n\xE3o dever\xE1 ter a propriedade '),o(98,"code"),e(99,"detailedMessage"),t(),e(100,"."),t()()(),o(101,"li")(102,"code"),e(103,"type"),t(),e(104,": \xC9 poss\xEDvel informar "),o(105,"code"),e(106,"error"),t(),e(107,", "),o(108,"code"),e(109,"warning"),t(),e(110," e "),o(111,"code"),e(112,"information"),t(),e(113,", sendo "),o(114,"code"),e(115,"error"),t(),e(116," o valor padr\xE3o."),t(),o(117,"li")(118,"code"),e(119,"details"),t(),e(120,": Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal."),t(),o(121,"li")(122,"code"),e(123,"detailTitle"),t(),e(124,": caso for informado, ser\xE1 apresentado como t\xEDtulo dos detalhes substituindo o padr\xE3o "),o(125,"code"),e(126,"code - message"),t()()(),o(127,"blockquote")(128,"p"),e(129,"Veja o "),o(130,"a",6),e(131,"Guia de implementa\xE7\xE3o de APIs"),t(),e(132," para mais detalhes sobre a estrutura das mensagens."),t()(),o(133,"h3"),e(134,"Cabe\xE7alho"),t(),o(135,"p"),e(136,`\xC9 poss\xEDvel dispensar a notifica\xE7\xE3o para o usu\xE1rio utilizando no cabe\xE7alho da requisi\xE7\xE3o os par\xE2metros listados abaixo com o valor
igual a `),o(137,"code"),e(138,"true"),t(),e(139,":"),t(),o(140,"ul")(141,"li")(142,"p")(143,"code"),e(144,"X-PO-No-Message"),t(),e(145,": N\xE3o exibe notifica\xE7\xF5es de erro e/ou sucesso."),t()(),o(146,"li")(147,"p")(148,"code"),e(149,"X-PO-No-Error"),t(),e(150,": N\xE3o mostra notifica\xE7\xF5es de erro com c\xF3digos "),o(151,"code"),e(152,"4xx"),t(),e(153," e "),o(154,"code"),e(155,"5xx"),t(),e(156,"."),t()()(),o(157,"pre")(158,"code"),e(159,`...
 const headers = { 'X-PO-No-Message': 'true' };

 this.http.get(\`/customers/1\`, { headers: headers });
...
`),t()(),o(160,"blockquote")(161,"p"),e(162,"Ap\xF3s a valida\xE7\xE3o no "),o(163,"em"),e(164,"interceptor"),t(),e(165,", os par\xE2metros ser\xE3o removidos do cabe\xE7alho da requisi\xE7\xE3o. "),t()()()())},encapsulation:2})}return n})();var Q=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||n)(E(A),E(R))};static \u0275cmp=u({type:n,selectors:[["ng-component"]],standalone:!1,decls:6,vars:4,consts:[["p-title","Http Interceptor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return i.changeTab("doc")}),s(3,"sample-po-http-interceptor-doc"),t(),o(4,"po-tab",3),c("p-click",function(){return i.changeTab("web")}),s(5,"sample-po-http-interceptor-labs-view"),t()()()),a&2&&(d("p-actions",i.actions),l(2),d("p-active",i.activeTab==="doc"),l(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[B,M,w,J,K],encapsulation:2})}return n})();var oe=[{path:"",component:Q}],Y=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=x({type:n});static \u0275inj=S({imports:[_.forChild(oe),_]})}return n})();var Ce=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=x({type:n});static \u0275inj=S({imports:[X,Y]})}return n})();export{Ce as DocPoHttpInterceptorModule};
