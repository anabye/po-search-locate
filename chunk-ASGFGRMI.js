import{o as D,p as pe}from"./chunk-MMZVQUBQ.js";import{Aa as ne,Ab as w,Ca as ae,F as k,Ga as le,I as j,La as R,O as H,P,T as C,ja as ie,nb as re,ta as oe,zb as _}from"./chunk-522XRIZO.js";import{Ac as F,Ba as x,Bc as z,Fa as t,Ga as e,Ha as p,La as V,M as O,Ma as f,Mb as $,Oc as ee,Qc as te,Sc as Q,T as c,U as d,Ua as U,Va as J,Wa as K,Xa as X,Ya as i,_a as N,ab as E,bb as g,cb as S,db as B,fb as T,ha as s,ia as y,lb as Y,mb as Z,oa as b,pa as q,vb as M,xc as I,ya as u,yc as A,zc as W}from"./chunk-WFKG4FNY.js";var se=(()=>{class a{poNotification;constructor(l){this.poNotification=l}static \u0275fac=function(n){return new(n||a)(y(C))};static \u0275cmp=b({type:a,selectors:[["sample-po-notification-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-label","Open Notification",3,"p-click"]],template:function(n,o){n&1&&(t(0,"po-button",0),f("p-click",function(){return o.poNotification.success("PO Notification!")}),e())},dependencies:[k],encapsulation:2})}return a})();var Ce=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-notification-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Notification Basic"),e(),t(4,"a",2),f("click",function(){return o.toggleSampleCodeTabs()}),p(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-notification-basic/sample-po-notification-basic.component.html"),e(),t(13,"pre",7),i(14,`<po-button p-label="Open Notification" (p-click)="poNotification.success('PO Notification!')"> </po-button>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-notification-basic/sample-po-notification-basic.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-basic',
  templateUrl: './sample-po-notification-basic.component.html',
  standalone: false
})
export class SamplePoNotificationBasicComponent {
  constructor(public poNotification: PoNotificationService) {}
}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-notification-basic"),e(),p(23,"hr")),n&2&&(s(5),x("po-icon "+o.sampleCodeButtonIcon),s(),N(" ",o.sampleCodeButtonLabel,""),s(),u("ngClass",T(4,Ce,o.hideSampleCodeTabs)))},dependencies:[M,D,_,w,se],encapsulation:2})}return a})();var de=(()=>{class a{poNotification;poModal;action;actionLabel;message;orientation;sizeActions;type;duration;orientationOptions=[{label:"Top",value:H.Top},{label:"Bottom",value:H.Bottom}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Success",value:P.Success},{label:"Error",value:P.Error},{label:"Warning",value:P.Warning},{label:"Information",value:P.Information}];constructor(l){this.poNotification=l}ngOnInit(){this.restore()}restore(){this.message="PO Notification",this.type=void 0,this.orientation=void 0,this.action=!1,this.actionLabel="",this.duration=void 0,this.sizeActions="medium"}showNotification(){let l={message:this.message,orientation:this.orientation,action:void 0,actionLabel:this.actionLabel,duration:this.duration,sizeActions:this.sizeActions};switch(this.action&&(l.action=()=>this.poModal.open()),this.type){case P.Success:{this.poNotification.success(l);break}case P.Error:{this.poNotification.error(l);break}case P.Warning:{this.poNotification.warning(l);break}case P.Information:{this.poNotification.information(l);break}default:{this.poNotification.success(l);break}}}static \u0275fac=function(n){return new(n||a)(y(C))};static \u0275cmp=b({type:a,selectors:[["sample-po-notification-labs"]],viewQuery:function(n,o){if(n&1&&U(j,7),n&2){let m;J(m=K())&&(o.poModal=m.first)}},standalone:!1,features:[B([C])],decls:16,vars:10,consts:[["f","ngForm"],["p-label","Open Notification",3,"p-click"],[1,"po-row"],["name","type","p-columns","4","p-label","Type",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","orientation","p-label","Orientation",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","message","p-clean","","p-label","Message","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","duration","p-clean","","p-label","Duration",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","action","p-label","Action",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","actionLabel","p-clean","","p-label","Action Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-title","PO Notification"]],template:function(n,o){if(n&1){let m=V();t(0,"po-button",1),f("p-click",function(){return c(m),d(o.showNotification())}),e(),p(1,"hr"),t(2,"div",2)(3,"form",null,0)(5,"po-radio-group",3),S("ngModelChange",function(r){return c(m),g(o.type,r)||(o.type=r),d(r)}),e(),t(6,"po-radio-group",4),S("ngModelChange",function(r){return c(m),g(o.orientation,r)||(o.orientation=r),d(r)}),e(),t(7,"po-input",5),S("ngModelChange",function(r){return c(m),g(o.message,r)||(o.message=r),d(r)}),e(),t(8,"po-number",6),S("ngModelChange",function(r){return c(m),g(o.duration,r)||(o.duration=r),d(r)}),e(),t(9,"po-switch",7),S("ngModelChange",function(r){return c(m),g(o.action,r)||(o.action=r),d(r)}),e(),t(10,"po-input",8),S("ngModelChange",function(r){return c(m),g(o.actionLabel,r)||(o.actionLabel=r),d(r)}),e(),t(11,"po-radio-group",9),S("ngModelChange",function(r){return c(m),g(o.sizeActions,r)||(o.sizeActions=r),d(r)}),e(),t(12,"div",2)(13,"po-button",10),f("p-click",function(){return c(m),d(o.restore())}),e()()()(),t(14,"po-modal",11),i(15," Notification Action "),e()}n&2&&(s(5),E("ngModel",o.type),u("p-options",o.typeOptions),s(),E("ngModel",o.orientation),u("p-options",o.orientationOptions),s(),E("ngModel",o.message),s(),E("ngModel",o.duration),s(),E("ngModel",o.action),s(),E("ngModel",o.actionLabel),s(),E("ngModel",o.sizeActions),u("p-options",o.sizeActionsOptions))},dependencies:[z,I,A,F,W,k,ie,le,R,oe,j],encapsulation:2})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-notification-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Notification Labs"),e(),t(4,"a",2),f("click",function(){return o.toggleSampleCodeTabs()}),p(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-notification-labs/sample-po-notification-labs.component.html"),e(),t(13,"pre",7),i(14,`<po-button (p-click)="showNotification()" p-label="Open Notification"> </po-button>

<hr />

<div class="po-row">
  <form #f="ngForm">
    <po-radio-group
      class="po-md-12"
      name="type"
      [(ngModel)]="type"
      p-columns="4"
      p-label="Type"
      [p-options]="typeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="orientation"
      [(ngModel)]="orientation"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>

    <po-input class="po-md-6" name="message" [(ngModel)]="message" p-clean p-label="Message" p-required> </po-input>

    <po-number class="po-md-6 po-lg-3" name="duration" [(ngModel)]="duration" p-clean p-label="Duration"> </po-number>

    <po-switch class="po-md-6 po-lg-3" name="action" [(ngModel)]="action" p-label="Action"> </po-switch>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="actionLabel" p-clean p-label="Action Label"> </po-input>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="sizeActions"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeActionsOptions"
    >
    </po-radio-group>

    <div class="po-row">
      <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</div>

<po-modal p-title="PO Notification"> Notification Action </po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-notification-labs/sample-po-notification-labs.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import {
  PoModalComponent,
  PoNotification,
  PoNotificationService,
  PoRadioGroupOption,
  PoToasterOrientation,
  PoToasterType
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-labs',
  templateUrl: './sample-po-notification-labs.component.html',
  providers: [PoNotificationService],
  standalone: false
})
export class SamplePoNotificationLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  action: boolean;
  actionLabel: string;
  message: string;
  orientation: number;
  sizeActions: string;
  type: PoToasterType;
  duration: number;

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Top', value: PoToasterOrientation.Top },
    { label: 'Bottom', value: PoToasterOrientation.Bottom }
  ];

  public readonly sizeActionsOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'Success', value: PoToasterType.Success },
    { label: 'Error', value: PoToasterType.Error },
    { label: 'Warning', value: PoToasterType.Warning },
    { label: 'Information', value: PoToasterType.Information }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.message = 'PO Notification';
    this.type = undefined;
    this.orientation = undefined;
    this.action = false;
    this.actionLabel = '';
    this.duration = undefined;
    this.sizeActions = 'medium';
  }

  showNotification() {
    const poNotification: PoNotification = {
      message: this.message,
      orientation: this.orientation,
      action: undefined,
      actionLabel: this.actionLabel,
      duration: this.duration,
      sizeActions: this.sizeActions
    };

    if (this.action) {
      poNotification.action = () => this.poModal.open();
    }

    switch (this.type) {
      case PoToasterType.Success: {
        this.poNotification.success(poNotification);
        break;
      }
      case PoToasterType.Error: {
        this.poNotification.error(poNotification);
        break;
      }
      case PoToasterType.Warning: {
        this.poNotification.warning(poNotification);
        break;
      }
      case PoToasterType.Information: {
        this.poNotification.information(poNotification);
        break;
      }
      default: {
        this.poNotification.success(poNotification);
        break;
      }
    }
  }
}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-notification-labs"),e(),p(23,"hr")),n&2&&(s(5),x("po-icon "+o.sampleCodeButtonIcon),s(),N(" ",o.sampleCodeButtonLabel,""),s(),u("ngClass",T(4,Ne,o.hideSampleCodeTabs)))},dependencies:[M,D,_,w,de],encapsulation:2})}return a})();var fe=(()=>{class a{poNotification;name;price;product;quantity;stock;totalPrice;totalPriceSum=2500;columns=[{property:"productID",label:"Id"},{property:"productName",label:"Product"},{property:"quantity",label:"Quantity"},{property:"price",label:"Price",type:"currency",format:"BRL"},{property:"total",label:"Total Price",type:"currency",format:"BRL"}];products=[{productID:"004",productName:"Notebook",quantity:2,price:1250,total:2500}];productDetailsList=[{id:"001",price:50,stock:10},{id:"002",price:210,stock:5},{id:"003",price:998,stock:2},{id:"004",price:1250,stock:1}];productOptions=[{value:"001",label:"p-Shirt Blue"},{value:"002",label:"Clock"},{value:"003",label:"Cellphone"},{value:"004",label:"Notebook"}];constructor(l){this.poNotification=l}addCart(){if(this.checkQuantity(),this.productOptions&&this.quantity>0){let l=this.products.findIndex(n=>n.productID===this.product);l>=0?(this.products[l].quantity+=this.quantity,this.products[l].total+=this.totalPrice):this.products.push({productID:this.product,productName:this.name,quantity:this.quantity,price:this.price,total:this.totalPrice}),this.totalPriceSum+=this.totalPrice,this.poNotification.success("Order included successfully!"),this.stockUpdate(this.product,this.quantity),this.clearFields()}}checkProduct(){let l=this.productDetailsList.findIndex(n=>n.id===this.product);if(l>=0){let n=this.productDetailsList[l];this.price=n.price,this.stock=n.stock,this.name=this.productOptions[l].label}}checkQuantity(){this.quantity>this.stock?this.poNotification.error("Quantity not available in stock"):this.totalValue()}clearFields(){this.product="",this.price=0,this.quantity=0,this.stock=0,this.totalPrice=0}stockUpdate(l,n){let o=this.productDetailsList.find(m=>m.id===l);o.stock=o.stock-n}totalValue(){this.totalPrice=this.quantity*this.price}static \u0275fac=function(n){return new(n||a)(y(C))};static \u0275cmp=b({type:a,selectors:[["sample-po-notification-sales"]],standalone:!1,features:[B([C])],decls:17,vars:14,consts:[["f","ngForm"],[1,"po-row"],["name","product","p-label","Product","p-placeholder","Select a Product","p-required","",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","quantity","p-label","Quantity","p-min","0","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","p-change","ngModel","p-max"],["name","price","p-disabled","","p-label","Price","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","stock","p-disabled","","p-label","Stock","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","totalPrice","p-disabled","","p-label","Total Price","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Add To Cart",1,"po-md-3",3,"p-click","p-disabled"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"],[1,"po-pull-right","po-lg-12"],[1,"po-pull-right","po-font-subtitle"]],template:function(n,o){if(n&1){let m=V();t(0,"form",null,0)(2,"div",1)(3,"po-combo",2),S("ngModelChange",function(r){return c(m),g(o.product,r)||(o.product=r),d(r)}),f("p-change",function(){return c(m),d(o.checkProduct())}),e(),t(4,"po-number",3),S("ngModelChange",function(r){return c(m),g(o.quantity,r)||(o.quantity=r),d(r)}),f("p-change",function(){return c(m),d(o.checkQuantity())}),e(),t(5,"po-number",4),S("ngModelChange",function(r){return c(m),g(o.price,r)||(o.price=r),d(r)}),e(),t(6,"po-number",5),S("ngModelChange",function(r){return c(m),g(o.stock,r)||(o.stock=r),d(r)}),e(),t(7,"po-number",6),S("ngModelChange",function(r){return c(m),g(o.totalPrice,r)||(o.totalPrice=r),d(r)}),e()(),t(8,"div",1)(9,"po-button",7),f("p-click",function(){return c(m),d(o.addCart())}),e()()(),p(10,"hr")(11,"po-table",8),t(12,"div",1)(13,"div",9)(14,"span",10),i(15),Y(16,"currency"),e()()()}if(n&2){let m=X(1);s(3),E("ngModel",o.product),u("p-options",o.productOptions),s(),E("ngModel",o.quantity),u("p-max",o.stock),s(),E("ngModel",o.price),s(),E("ngModel",o.stock),s(),E("ngModel",o.totalPrice),s(2),u("p-disabled",m.form.invalid||o.stock===0),s(2),u("p-columns",o.columns)("p-items",o.products)("p-hide-table-search",!1),s(4),N("Total: R",Z(16,12,o.totalPriceSum)," ")}},dependencies:[z,I,A,F,W,k,ae,R,ne,$],encapsulation:2})}return a})();var xe=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-notification-sales-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(p(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Notification - Sales"),e(),t(4,"a",2),f("click",function(){return o.toggleSampleCodeTabs()}),p(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-notification-sales/sample-po-notification-sales.component.html"),e(),t(13,"pre",7),i(14,`<form #f="ngForm">
  <div class="po-row">
    <po-combo
      class="po-md-4"
      name="product"
      [(ngModel)]="product"
      p-label="Product"
      p-placeholder="Select a Product"
      p-required
      [p-options]="productOptions"
      (p-change)="checkProduct()"
    >
    </po-combo>

    <po-number
      class="po-md-2"
      name="quantity"
      [(ngModel)]="quantity"
      p-label="Quantity"
      p-min="0"
      p-placeholder="0"
      p-required
      [p-max]="stock"
      (p-change)="checkQuantity()"
    >
    </po-number>

    <po-number class="po-md-2" name="price" [(ngModel)]="price" p-disabled p-label="Price" p-placeholder="0" p-required>
    </po-number>

    <po-number class="po-md-2" name="stock" [(ngModel)]="stock" p-disabled p-label="Stock" p-placeholder="0" p-required>
    </po-number>

    <po-number
      class="po-md-2"
      name="totalPrice"
      [(ngModel)]="totalPrice"
      p-disabled
      p-label="Total Price"
      p-placeholder="0"
      p-required
    >
    </po-number>
  </div>
  <div class="po-row">
    <po-button class="po-md-3" p-label="Add To Cart" [p-disabled]="f.form.invalid || stock === 0" (p-click)="addCart()">
    </po-button>
  </div>
</form>

<hr />

<po-table p-striped="true" [p-columns]="columns" [p-items]="products" [p-hide-table-search]="false"> </po-table>

<div class="po-row">
  <div class="po-pull-right po-lg-12">
    <span class="po-pull-right po-font-subtitle">Total: R{ { totalPriceSum | currency }} </span>
  </div>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-notification-sales/sample-po-notification-sales.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';

import { PoComboOption, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-sales',
  templateUrl: './sample-po-notification-sales.component.html',
  providers: [PoNotificationService],
  standalone: false
})
export class SamplePoNotificationSalesComponent {
  name: string;
  price: number;
  product: string;
  quantity: number;
  stock: number;
  totalPrice: number;
  totalPriceSum = 2500;

  readonly columns: Array<PoTableColumn> = [
    { property: 'productID', label: 'Id' },
    { property: 'productName', label: 'Product' },
    { property: 'quantity', label: 'Quantity' },
    { property: 'price', label: 'Price', type: 'currency', format: 'BRL' },
    { property: 'total', label: 'Total Price', type: 'currency', format: 'BRL' }
  ];

  products: Array<any> = [{ productID: '004', productName: 'Notebook', quantity: 2, price: 1250, total: 2500 }];

  productDetailsList: Array<any> = [
    { id: '001', price: 50, stock: 10 },
    { id: '002', price: 210, stock: 5 },
    { id: '003', price: 998, stock: 2 },
    { id: '004', price: 1250, stock: 1 }
  ];

  readonly productOptions: Array<PoComboOption> = [
    { value: '001', label: 'p-Shirt Blue' },
    { value: '002', label: 'Clock' },
    { value: '003', label: 'Cellphone' },
    { value: '004', label: 'Notebook' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  addCart() {
    this.checkQuantity();

    if (this.productOptions && this.quantity > 0) {
      const itemIndex = this.products.findIndex(item => item.productID === this.product);

      if (itemIndex >= 0) {
        this.products[itemIndex].quantity += this.quantity;
        this.products[itemIndex].total += this.totalPrice;
      } else {
        this.products.push({
          productID: this.product,
          productName: this.name,
          quantity: this.quantity,
          price: this.price,
          total: this.totalPrice
        });
      }

      this.totalPriceSum += this.totalPrice;
      this.poNotification.success('Order included successfully!');
      this.stockUpdate(this.product, this.quantity);
      this.clearFields();
    }
  }

  checkProduct() {
    const selectedProductIndex = this.productDetailsList.findIndex(product => product.id === this.product);

    if (selectedProductIndex >= 0) {
      const productDetails = this.productDetailsList[selectedProductIndex];
      this.price = productDetails.price;
      this.stock = productDetails.stock;
      this.name = this.productOptions[selectedProductIndex].label;
    }
  }

  checkQuantity() {
    if (this.quantity > this.stock) {
      this.poNotification.error('Quantity not available in stock');
    } else {
      this.totalValue();
    }
  }

  clearFields() {
    this.product = '';
    this.price = 0;
    this.quantity = 0;
    this.stock = 0;
    this.totalPrice = 0;
  }

  stockUpdate(selectedProduct: string, qtd: number) {
    const item = this.productDetailsList.find(product => product.id === selectedProduct);
    item.stock = item.stock - qtd;
  }

  totalValue() {
    this.totalPrice = this.quantity * this.price;
  }
}
`),e()()()()(),t(21,"div",10),p(22,"sample-po-notification-sales"),e(),p(23,"hr")),n&2&&(s(5),x("po-icon "+o.sampleCodeButtonIcon),s(),N(" ",o.sampleCodeButtonLabel,""),s(),u("ngClass",T(4,xe,o.hideSampleCodeTabs)))},dependencies:[M,D,_,w,fe],encapsulation:2})}return a})();var be=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-notification-doc"]],standalone:!1,decls:408,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoNotification"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoToasterMode"],["pan","",1,"docs-api-property-type","PoToasterOrientation"],["pan","",1,"docs-api-property-type","boolean"],["href","https://po-ui.io/documentation/po-theme"]],template:function(n,o){n&1&&(t(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoNotificationModule } from '@po-ui/ng-components';"),e()(),p(4,"div",2),t(5,"h3",3),i(6,"Services"),e(),t(7,"h4",4)(8,"code",5),i(9,"PoNotificationService"),e()(),t(10,"div",2)(11,"p"),i(12,"Servi\xE7o respons\xE1vel por emitir as notifica\xE7\xF5es em uma p\xE1gina. S\xE3o disponibilizados os m\xE9todos de:"),e(),t(13,"ul")(14,"li"),i(15,"success,"),e(),t(16,"li"),i(17,"warning,"),e(),t(18,"li"),i(19,"error,"),e(),t(20,"li"),i(21,"information."),e()(),t(22,"p"),i(23,"Cada um destes m\xE9todos recebe como par\xE2metro o objeto "),t(24,"code"),i(25,"PoNotification"),e(),i(26,` que cont\xE9m os dados da mensagem e o
objeto ViewContainerRef que \xE9 a representa\xE7\xE3o do container do componente onde ser\xE1 criada a notifica\xE7\xE3o.`),e(),t(27,"p"),i(28,`Estas notifica\xE7\xF5es ser\xE3o exibidas durante 9 segundos por padr\xE3o, podendo ser alterada conforme necessidade.
Ap\xF3s este tempo a mesma \xE9 removida automaticamente.`),e(),t(29,"p"),i(30,"Notifica\xE7\xF5es com a\xE7\xE3o ou notifica\xE7\xF5es de "),t(31,"code"),i(32,"erro"),e(),i(33," permanecer\xE3o em tela at\xE9 o usu\xE1rio fecha-l\xE1 ou clicar na a\xE7\xE3o."),e(),t(34,"p"),i(35,"O servi\xE7o possui um limite de at\xE9 5 notifica\xE7\xF5es por vez, a partir do sexto a primeira notifica\xE7\xE3o ser\xE1 removida dando lugar a nova. "),e()(),t(36,"h3",6),i(37,"M\xE9todos"),e(),t(38,"table",7)(39,"tr",8)(40,"th",9)(41,"div",10)(42,"h4")(43,"span",11),i(44," success "),e()()()()(),t(45,"tr",12)(46,"td",12)(47,"p"),i(48,"Emite uma notifica\xE7\xE3o de sucesso."),e()()()(),t(49,"h5")(50,"b"),i(51,"Par\xE2metros"),e()(),t(52,"table",13)(53,"tr",14)(54,"th",15),i(55,"Nome"),e(),t(56,"th",15),i(57,"Tipo"),e(),t(58,"th",15),i(59,"Descri\xE7\xE3o"),e()(),t(60,"tr",8)(61,"td",16),i(62," notification"),e(),t(63,"td",17)(64,"code",18),i(65," PoNotification "),e(),t(66,"code",19),i(67," string "),e()(),t(68,"td",12)(69,"p"),i(70,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o."),e()()()(),p(71,"br"),t(72,"table",7)(73,"tr",8)(74,"th",9)(75,"div",10)(76,"h4")(77,"span",11),i(78," warning "),e()()()()(),t(79,"tr",12)(80,"td",12)(81,"p"),i(82,"Emite uma notifica\xE7\xE3o de aten\xE7\xE3o."),e()()()(),t(83,"h5")(84,"b"),i(85,"Par\xE2metros"),e()(),t(86,"table",13)(87,"tr",14)(88,"th",15),i(89,"Nome"),e(),t(90,"th",15),i(91,"Tipo"),e(),t(92,"th",15),i(93,"Descri\xE7\xE3o"),e()(),t(94,"tr",8)(95,"td",16),i(96," notification"),e(),t(97,"td",17)(98,"code",18),i(99," PoNotification "),e(),t(100,"code",19),i(101," string "),e()(),t(102,"td",12)(103,"p"),i(104,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),e()()()(),p(105,"br"),t(106,"table",7)(107,"tr",8)(108,"th",9)(109,"div",10)(110,"h4")(111,"span",11),i(112," error "),e()()()()(),t(113,"tr",12)(114,"td",12)(115,"p"),i(116,"Emite uma notifica\xE7\xE3o de erro."),e()()()(),t(117,"h5")(118,"b"),i(119,"Par\xE2metros"),e()(),t(120,"table",13)(121,"tr",14)(122,"th",15),i(123,"Nome"),e(),t(124,"th",15),i(125,"Tipo"),e(),t(126,"th",15),i(127,"Descri\xE7\xE3o"),e()(),t(128,"tr",8)(129,"td",16),i(130," notification"),e(),t(131,"td",17)(132,"code",18),i(133," PoNotification "),e(),t(134,"code",19),i(135," string "),e()(),t(136,"td",12)(137,"p"),i(138,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),e()()()(),p(139,"br"),t(140,"table",7)(141,"tr",8)(142,"th",9)(143,"div",10)(144,"h4")(145,"span",11),i(146," information "),e()()()()(),t(147,"tr",12)(148,"td",12)(149,"p"),i(150,"Emite uma notifica\xE7\xE3o de informa\xE7\xE3o."),e()()()(),t(151,"h5")(152,"b"),i(153,"Par\xE2metros"),e()(),t(154,"table",13)(155,"tr",14)(156,"th",15),i(157,"Nome"),e(),t(158,"th",15),i(159,"Tipo"),e(),t(160,"th",15),i(161,"Descri\xE7\xE3o"),e()(),t(162,"tr",8)(163,"td",16),i(164," notification"),e(),t(165,"td",17)(166,"code",18),i(167," PoNotification "),e(),t(168,"code",19),i(169," string "),e()(),t(170,"td",12)(171,"p"),i(172,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),e()()()(),p(173,"br"),t(174,"table",7)(175,"tr",8)(176,"th",9)(177,"div",10)(178,"h4")(179,"span",11),i(180," setDefaultDuration "),e()()()()(),t(181,"tr",12)(182,"td",12)(183,"p"),i(184,"Define em milissegundos a dura\xE7\xE3o padr\xE3o para as notifica\xE7\xF5es."),e(),t(185,"blockquote")(186,"p"),i(187,"Padr\xE3o 9 segundos."),e()()()()(),t(188,"h5")(189,"b"),i(190,"Par\xE2metros"),e()(),t(191,"table",13)(192,"tr",14)(193,"th",15),i(194,"Nome"),e(),t(195,"th",15),i(196,"Tipo"),e(),t(197,"th",15),i(198,"Descri\xE7\xE3o"),e()(),t(199,"tr",8)(200,"td",16),i(201," defaultDuration"),e(),t(202,"td",17)(203,"code",20),i(204," number "),e()(),t(205,"td",12)(206,"p"),i(207,"Dura\xE7\xE3o em milisegundos"),e()()()(),p(208,"br"),t(209,"h3"),i(210,"Interfaces"),e(),t(211,"h4",21)(212,"code",5),i(213,"PoNotification"),e()(),t(214,"div",2)(215,"p"),i(216,"Interface para uso do servi\xE7o PoNotification."),e()(),t(217,"h4",6),i(218,"Propriedades"),e(),t(219,"table",13)(220,"tr",14)(221,"th",15),i(222,"Nome"),e(),t(223,"th",15),i(224,"Tipo"),e(),t(225,"th",15),i(226,"Descri\xE7\xE3o"),e()(),t(227,"tr",8)(228,"td",16)(229,"div",10)(230,"span",11),i(231," action"),p(232,"br"),e()()(),t(233,"td",17)(234,"code",22),i(235,"Function"),e()(),t(236,"td",12)(237,"em")(238,"strong"),i(239,"(opcional)"),e()(),t(240,"p"),i(241,"A\xE7\xE3o para a notifica\xE7\xE3o."),e(),t(242,"p"),i(243,"Ao utilizar esta propriedade em conjunto com a "),t(244,"code"),i(245,"actionLabel"),e(),i(246,`,
a notifica\xE7\xE3o ficar\xE1 fixa na p\xE1gina at\xE9 usu\xE1rio fech\xE1-la ou clicar nesta a\xE7\xE3o.`),e(),t(247,"p"),i(248,"Caso n\xE3o informar a propriedade "),t(249,"code"),i(250,"actionLabel"),e(),i(251,' a a\xE7\xE3o ser\xE1 atribuida ao \xEDcone de "Fechar" da notifica\xE7\xE3o.'),e()()(),t(252,"tr",8)(253,"td",16)(254,"div",10)(255,"span",11),i(256," actionLabel"),p(257,"br"),e()()(),t(258,"td",17)(259,"code",19),i(260,"string"),e()(),t(261,"td",12)(262,"em")(263,"strong"),i(264,"(opcional)"),e()(),t(265,"p"),i(266,"Label do bot\xE3o quando houver uma a\xE7\xE3o definida."),e()()(),t(267,"tr",8)(268,"td",16)(269,"div",10)(270,"span",11),i(271," duration"),p(272,"br"),e()()(),t(273,"td",17)(274,"code",23),i(275,"number"),e()(),t(276,"td",12)(277,"em")(278,"strong"),i(279,"(opcional)"),e()(),t(280,"p"),i(281,"Define em milissegundos o tempo de dura\xE7\xE3o que a notifica\xE7\xE3o ficar\xE1 dispon\xEDvel em tela. O padr\xE3o \xE9 9000 milissegundos."),e(),t(282,"blockquote")(283,"p"),i(284,"Caso a notifica\xE7\xE3o tenha uma a\xE7\xE3o ou seja uma notifica\xE7\xE3o de "),t(285,"code"),i(286,"erro"),e(),i(287,", a propriedade ser\xE1 ignorada."),e()()()(),t(288,"tr",8)(289,"td",16)(290,"div",10)(291,"span",11),i(292," message"),p(293,"br"),e()()(),t(294,"td",17)(295,"code",19),i(296,"string"),e()(),t(297,"td",12)(298,"p"),i(299,"Mensagem a ser exibida na notifica\xE7\xE3o."),e()()(),t(300,"tr",8)(301,"td",16)(302,"div",10)(303,"span",11),i(304," mode"),p(305,"br"),e()()(),t(306,"td",17)(307,"code",24),i(308,"PoToasterMode"),e()(),t(309,"td",12)(310,"em")(311,"strong"),i(312,"(opcional)"),e()(),t(313,"p"),i(314,"Define o Modo/Tipo do Toaster."),e()()(),t(315,"tr",8)(316,"td",16)(317,"div",10)(318,"span",11),i(319," orientation"),p(320,"br"),e()()(),t(321,"td",17)(322,"code",25),i(323,"PoToasterOrientation"),e()(),t(324,"td",12)(325,"em")(326,"strong"),i(327,"(opcional)"),e()(),t(328,"p"),i(329,"Posi\xE7\xE3o da notifica\xE7\xE3o na p\xE1gina que pode ser "),t(330,"code"),i(331,"Top"),e(),i(332," (topo) ou "),t(333,"code"),i(334,"Bottom"),e(),i(335,"(rodap\xE9). A posi\xE7\xE3o padr\xE3o \xE9 "),t(336,"code"),i(337,"bottom"),e(),i(338,"."),e()()(),t(339,"tr",8)(340,"td",16)(341,"div",10)(342,"span",11),i(343," showClose"),p(344,"br"),e()()(),t(345,"td",17)(346,"code",26),i(347,"boolean"),e()(),t(348,"td",12)(349,"em")(350,"strong"),i(351,"(opcional)"),e()(),t(352,"p"),i(353,"Exibe o bot\xE3o de fechar a notifica\xE7\xE3o."),e(),t(354,"blockquote")(355,"p"),i(356,"Caso a notifica\xE7\xE3o seja do modo "),t(357,"code"),i(358,"default"),e(),i(359,", a propriedade ser\xE1 ignorada."),e()()()(),t(360,"tr",8)(361,"td",16)(362,"div",10)(363,"span",11),i(364," sizeActions"),p(365,"br"),e()()(),t(366,"td",17)(367,"code",19),i(368,"string"),e()(),t(369,"td",12)(370,"em")(371,"strong"),i(372,"(opcional)"),e()(),t(373,"p"),i(374,"Define o tamanho das a\xE7\xF5es:"),e(),t(375,"ul")(376,"li")(377,"code"),i(378,"small"),e(),i(379,": aplica a medida small de cada a\xE7\xE3o (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(380,"li")(381,"code"),i(382,"medium"),e(),i(383,": aplica a medida medium de cada a\xE7\xE3o."),e()(),t(384,"blockquote")(385,"p"),i(386,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(387,"code"),i(388,"medium"),e(),i(389,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(390,"a",27),i(391,"po-theme"),e(),i(392,"."),e()()()(),t(393,"tr",8)(394,"td",16)(395,"div",10)(396,"span",11),i(397," supportMessage"),p(398,"br"),e()()(),t(399,"td",17)(400,"code",19),i(401,"string"),e()(),t(402,"td",12)(403,"em")(404,"strong"),i(405,"(opcional)"),e()(),t(406,"p"),i(407,"Mensagem de suporte a ser exibida na notifica\xE7\xE3o."),e()()()()())},encapsulation:2})}return a})();var Ee=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,n){this.route=l,this.router=n}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let n=l.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(n){return new(n||a)(y(ee),y(te))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Notification",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,o){n&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),f("p-click",function(){return o.changeTab("doc")}),p(3,"sample-po-notification-doc"),e(),t(4,"po-tab",3),f("p-click",function(){return o.changeTab("web")}),p(5,"sample-po-notification-basic-view")(6,"sample-po-notification-labs-view")(7,"sample-po-notification-sales-view"),e()()()),n&2&&(u("p-actions",o.actions),s(2),u("p-active",o.activeTab==="doc"),s(2),u("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[re,_,w,ce,ue,he,be],encapsulation:2})}return a})();var ke=[{path:"",component:Ee}],ge=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=q({type:a});static \u0275inj=O({imports:[Q.forChild(ke),Q]})}return a})();var it=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=q({type:a});static \u0275inj=O({imports:[pe,ge]})}return a})();export{it as DocPoNotificationModule};
