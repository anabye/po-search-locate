import{o as T,p as ee}from"./chunk-MMZVQUBQ.js";import{Ab as w,F as I,Ga as L,Ka as J,La as Q,Na as v,Qa as k,Sa as Y,Wa as _,a as K,ha as Z,ja as G,nb as $,zb as f}from"./chunk-522XRIZO.js";import{Ac as W,Ba as C,Bc as O,Fa as i,Ga as t,Ha as a,La as M,M as P,Ma as g,Oc as U,Qc as N,Sc as D,T as s,U as c,Ya as e,_a as y,ab as h,bb as x,cb as S,fb as H,ha as p,ia as j,oa as u,pa as R,vb as q,xc as B,ya as b,yc as z,zc as F}from"./chunk-WFKG4FNY.js";var te=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-rich-text-basic"]],standalone:!1,decls:1,vars:0,template:function(l,n){l&1&&a(0,"po-rich-text")},dependencies:[k],encapsulation:2})}return o})();var ce=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-rich-text-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Rich Text Basic"),t(),i(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-rich-text-basic/sample-po-rich-text-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-rich-text></po-rich-text>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-rich-text-basic/sample-po-rich-text-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-rich-text-basic',
  templateUrl: './sample-po-rich-text-basic.component.html',
  standalone: false
})
export class SamplePoRichTextBasicComponent {}
`),t()()()()(),i(21,"div",10),a(22,"sample-po-rich-text-basic"),t(),a(23,"hr")),l&2&&(p(5),C("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),b("ngClass",H(4,ce,n.hideSampleCodeTabs)))},dependencies:[q,T,f,w,te],encapsulation:2})}return o})();var oe=(()=>{class o{additionalHelpTooltip;errorMessage;event;help;height;label;placeholder;properties;richText;size;toolbarHideActions=[v.Link];toolbarHideActionsOptions=[{value:v.Align,label:"align"},{value:v.Color,label:"color"},{value:v.Format,label:"format"},{value:v.Link,label:"link"},{value:v.List,label:"list"},{value:v.Media,label:"media"}];propertiesOptions=[{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(A){this.event=A}restore(){this.additionalHelpTooltip="",this.errorMessage="",this.help="",this.label="",this.placeholder="",this.properties=[],this.richText="",this.size="medium"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-rich-text-labs"]],standalone:!1,decls:19,vars:28,consts:[["f","ngForm"],["name","richText",3,"ngModelChange","p-change","p-change-model","p-keydown","ngModel","p-additional-help-tooltip","p-error-message","p-height","p-help","p-label","p-optional","p-placeholder","p-readonly","p-required","p-hide-toolbar-actions","p-show-required","p-size","p-error-limit"],[1,"po-row"],["name","model","p-label","Model","p-readonly","","p-rows","8",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Properties"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorMessage","p-clean","","p-label","Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","multiselect","p-label","Hide Toolbar Actions ","p-placeholder","color",1,"po-md-6","po-lg-3",3,"ngModelChange","p-options","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=M();i(0,"po-rich-text",1),S("ngModelChange",function(r){return s(d),x(n.richText,r)||(n.richText=r),c(r)}),g("p-change",function(){return s(d),c(n.changeEvent("p-change"))})("p-change-model",function(){return s(d),c(n.changeEvent("p-change-model"))})("p-keydown",function(){return s(d),c(n.changeEvent("p-keydown"))}),t(),a(1,"po-divider"),i(2,"div",2)(3,"po-textarea",3),S("ngModelChange",function(r){return s(d),x(n.richText,r)||(n.richText=r),c(r)}),t(),a(4,"po-info",4),t(),a(5,"po-divider",5),i(6,"form",null,0)(8,"po-input",6),S("ngModelChange",function(r){return s(d),x(n.label,r)||(n.label=r),c(r)}),t(),i(9,"po-input",7),S("ngModelChange",function(r){return s(d),x(n.help,r)||(n.help=r),c(r)}),t(),i(10,"po-input",8),S("ngModelChange",function(r){return s(d),x(n.additionalHelpTooltip,r)||(n.additionalHelpTooltip=r),c(r)}),t(),i(11,"po-input",9),S("ngModelChange",function(r){return s(d),x(n.placeholder,r)||(n.placeholder=r),c(r)}),t(),i(12,"po-input",10),S("ngModelChange",function(r){return s(d),x(n.errorMessage,r)||(n.errorMessage=r),c(r)}),t(),i(13,"po-number",11),S("ngModelChange",function(r){return s(d),x(n.height,r)||(n.height=r),c(r)}),t(),i(14,"po-multiselect",12),S("ngModelChange",function(r){return s(d),x(n.toolbarHideActions,r)||(n.toolbarHideActions=r),c(r)}),t(),i(15,"po-checkbox-group",13),S("ngModelChange",function(r){return s(d),x(n.properties,r)||(n.properties=r),c(r)}),t(),i(16,"po-radio-group",14),S("ngModelChange",function(r){return s(d),x(n.size,r)||(n.size=r),c(r)}),t(),i(17,"div",2)(18,"po-button",15),g("p-click",function(){return s(d),c(n.restore())}),t()()()}l&2&&(h("ngModel",n.richText),b("p-additional-help-tooltip",n.additionalHelpTooltip)("p-error-message",n.errorMessage)("p-height",n.height)("p-help",n.help)("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-placeholder",n.placeholder)("p-readonly",n.properties.includes("readonly"))("p-required",n.properties.includes("required"))("p-hide-toolbar-actions",n.toolbarHideActions)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit")),p(3),h("ngModel",n.richText),p(),b("p-value",n.event),p(4),h("ngModel",n.label),p(),h("ngModel",n.help),p(),h("ngModel",n.additionalHelpTooltip),p(),h("ngModel",n.placeholder),p(),h("ngModel",n.errorMessage),p(),h("ngModel",n.height),p(),b("p-options",n.toolbarHideActionsOptions),h("ngModel",n.toolbarHideActions),p(),h("ngModel",n.properties),b("p-options",n.propertiesOptions),p(),h("ngModel",n.size),b("p-options",n.sizeOptions))},dependencies:[O,B,z,W,F,I,K,Z,G,L,J,Q,k,Y,_],encapsulation:2})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-rich-text-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Rich Text Labs"),t(),i(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-rich-text-labs/sample-po-rich-text-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-rich-text
  name="richText"
  [(ngModel)]="richText"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-error-message]="errorMessage"
  [p-height]="height"
  [p-help]="help"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-hide-toolbar-actions]="toolbarHideActions"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-rich-text>

<po-divider></po-divider>

<div class="po-row">
  <po-textarea class="po-lg-6 po-md-12" name="model" [(ngModel)]="richText" p-label="Model" p-readonly p-rows="8">
  </po-textarea>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help Tooltip"
  >
  </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorMessage" [(ngModel)]="errorMessage" p-clean p-label="Error Message"> </po-input>

  <po-number class="po-md-6 po-lg-3" name="height" [(ngModel)]="height" p-label="Height"> </po-number>

  <po-multiselect
    class="po-md-6 po-lg-3"
    name="multiselect"
    p-label="Hide Toolbar Actions "
    [p-options]="toolbarHideActionsOptions"
    [(ngModel)]="toolbarHideActions"
    p-placeholder="color"
  >
  </po-multiselect>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-rich-text-labs/sample-po-rich-text-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoMultiselectOption,
  PoRadioGroupOption,
  PoRichTextToolbarActions
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-rich-text-labs',
  templateUrl: './sample-po-rich-text-labs.component.html',
  standalone: false
})
export class SamplePoRichTextLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  errorMessage: string;
  event: string;
  help: string;
  height: number;
  label: string;
  placeholder: string;
  properties: Array<string>;
  richText: string;
  size: string;
  toolbarHideActions = [PoRichTextToolbarActions.Link];

  public readonly toolbarHideActionsOptions: Array<PoMultiselectOption> = [
    { value: PoRichTextToolbarActions.Align, label: 'align' },
    { value: PoRichTextToolbarActions.Color, label: 'color' },
    { value: PoRichTextToolbarActions.Format, label: 'format' },
    { value: PoRichTextToolbarActions.Link, label: 'link' },
    { value: PoRichTextToolbarActions.List, label: 'list' },
    { value: PoRichTextToolbarActions.Media, label: 'media' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.errorMessage = '';
    this.help = '';
    this.label = '';
    this.placeholder = '';
    this.properties = [];
    this.richText = '';
    this.size = 'medium';
  }
}
`),t()()()()(),i(21,"div",10),a(22,"sample-po-rich-text-labs"),t(),a(23,"hr")),l&2&&(p(5),C("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),b("ngClass",H(4,xe,n.hideSampleCodeTabs)))},dependencies:[q,T,f,w,oe],encapsulation:2})}return o})();var le=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY
3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAA
DNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADT
AAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAAxyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdod
CAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAA
AAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAA
AAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZ
Gl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHZpZ
XcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3Vyd
gAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrA
PAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECe
gKEAo4CmAKiAqwCtgLBAssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwB
P4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4Ig
giWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mD
UANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDyUPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTI
xNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRG
ncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jC
iM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEooijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0ML
UEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4y
DkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeR
iJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUFGbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U2
1UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9Z
ZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s
3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuWi
/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUeht
qImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKu
cK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTR
NPG1EnUy9VO1dHWVdbY11zX4Nhk2OjZbNnx2nba+9uA3AXcit0Q3ZbeHN6i3ynfr+A24L3hROHM4lPi2+Nj4+vkc+T85YTmDeaW5x/nqegy6LzpRunQ6lvq5etw6/vshu0R7ZzuKO607
0DvzPBY8OXxcvH/8ozzGfOn9DT0wvVQ9d72bfb794r4Gfio+Tj5x/pX+uf7d/wH/Jj9Kf26/kv+3P9t////2wCEAAIDAwMEAwQFBQQGBgYGBggIBwcICA0JCgkKCQ0TDA4MDA4MExEUE
Q8RFBEeGBUVGB4jHRwdIyolJSo1MjVFRVwBAgMDAwQDBAUFBAYGBgYGCAgHBwgIDQkKCQoJDRMMDgwMDgwTERQRDxEUER4YFRUYHiMdHB0jKiUlKjUyNUVFXP/AABEIAKAA8AMBIgACE
QEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqN
DU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9
PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqN
TY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19
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
ISc0tWSf//Z`;var re=(()=>{class o{recipe=`
    <div style="text-align: center;"><b>Quick Hummus Recipe</b></div>
    <div><br></div>
    <div style="text-align: start;">
    <div><b><u>Preparation Time:</u></b>&nbsp;less than 30 mins</div>
    <div><b><u>Serves</u></b>: 3 people</div>
    <div><b><u>Reference</u></b>:
      <a class="po-rich-text-link" href="http://en.wikipedia.org/wiki/hummus" target="_blank">Hummus Delicious Recipe</a>
    </div>
    </div>
    <div><br></div>
    <img src="${le}">
    <div style="text-align: start;"><br></div>
    <div style="text-align: start;"><u><b>Ingredients</b></u>&nbsp;<br></div>
    <div style="text-align: start;"><u><br></u></div>
    <div style="text-align: start;">
      <ul>
        <li><i>200g/7oz</i>&nbsp;canned&nbsp;<b>chickpeas</b></li>
        <li><i>2</i>&nbsp;<i>tbsp</i>&nbsp;<b>lemon juice</b>&nbsp;or more</li>
        <li><i>2</i>&nbsp;<b>garlic</b>&nbsp;cloves, crushed</li>
        <li><i>1</i>&nbsp;<i>tsp</i>&nbsp;ground&nbsp;<b>cumin&nbsp;</b></li>
        <li><i>pinch</i>&nbsp;<b>salt</b></li>
        <li><i>1</i>&nbsp;<i>tbsp</i>&nbsp;<b>tahini</b>&nbsp;(sesame seed paste)</li>
        <li><i>4</i>&nbsp;<i>tbsp</i>&nbsp;<b>water</b></li>
        <li><i>2</i>&nbsp;<i>tbsp</i>&nbsp;extra virgin&nbsp;<b>olive oil</b></li>
        <li><i>1</i>&nbsp;<i>tsp</i>&nbsp;<b>paprika</b></li>
        <li><i>4&nbsp;rounds</i>&nbsp;of&nbsp;<b>pitta bread</b></li>
      </ul>
    </div>
    <div style="text-align: justify;"><b><br></b></div>
    <div style="text-align: start;">
      <div style="text-align: justify;">
        <b>1.&nbsp;</b>Drain the chickpeas and rinse. Reserve a few whole chick peas for serving.
      </div>
      <div style="text-align: justify;"><br></div>
      <div style="text-align: justify;">
        <b>2.</b>&nbsp;Combine the chickpeas, lemon juice, garlic, cumin, salt, tahini, and water in a food processor,
        and blend to a creamy pur\xE9e.
      </div>
      <div style="text-align: justify;"><br></div>
      <div style="text-align: justify;">
        <b>3.&nbsp;</b>Add more lemon juice, garlic, cumin or salt to taste. Turn out into a dinner plate, and make
        smooth with the back of a spoon. Drizzle with extra virgin olive oil and scatter with the reserved chickpeas.
      </div>
      <div style="text-align: justify;"><br></div>
      <div style="text-align: justify;">
        <b>4.&nbsp;</b>Sprinkle with paprika and serve with pita bread, warmed in a moderate
        oven for three minutes, and cut into quarters.
      </div>
    </div>`;static \u0275fac=function(l){return new(l||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-rich-text-recipe"]],standalone:!1,decls:1,vars:1,consts:[["name","recipe","p-height","262",3,"ngModelChange","ngModel"]],template:function(l,n){l&1&&(i(0,"po-rich-text",0),S("ngModelChange",function(m){return x(n.recipe,m)||(n.recipe=m),m}),t()),l&2&&h("ngModel",n.recipe)},dependencies:[B,W,k],encapsulation:2})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-rich-text-recipe-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Rich Text Recipe"),t(),i(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-rich-text-recipe/sample-po-rich-text-recipe.component.html"),t(),i(13,"pre",7),e(14,`<po-rich-text name="recipe" [(ngModel)]="recipe" p-height="262"> </po-rich-text>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-rich-text-recipe/sample-po-rich-text-recipe-image-base-64.ts"),t(),i(19,"pre",9),e(20,`export default \`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY
3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAA
DNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADT
AAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAAxyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdod
CAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAA
AAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAA
AAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZ
Gl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHZpZ
XcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3Vyd
gAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrA
PAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECe
gKEAo4CmAKiAqwCtgLBAssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwB
P4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4Ig
giWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mD
UANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDyUPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTI
xNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRG
ncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jC
iM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEooijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0ML
UEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4y
DkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeR
iJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUFGbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U2
1UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9Z
ZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s
3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuWi
/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUeht
qImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKu
cK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTR
NPG1EnUy9VO1dHWVdbY11zX4Nhk2OjZbNnx2nba+9uA3AXcit0Q3ZbeHN6i3ynfr+A24L3hROHM4lPi2+Nj4+vkc+T85YTmDeaW5x/nqegy6LzpRunQ6lvq5etw6/vshu0R7ZzuKO607
0DvzPBY8OXxcvH/8ozzGfOn9DT0wvVQ9d72bfb794r4Gfio+Tj5x/pX+uf7d/wH/Jj9Kf26/kv+3P9t////2wCEAAIDAwMEAwQFBQQGBgYGBggIBwcICA0JCgkKCQ0TDA4MDA4MExEUE
Q8RFBEeGBUVGB4jHRwdIyolJSo1MjVFRVwBAgMDAwQDBAUFBAYGBgYGCAgHBwgIDQkKCQoJDRMMDgwMDgwTERQRDxEUER4YFRUYHiMdHB0jKiUlKjUyNUVFXP/AABEIAKAA8AMBIgACE
QEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqN
DU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9
PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqN
TY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19
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
ISc0tWSf//Z\`;
`),t(),i(21,"label",6),e(22,"sample-po-rich-text-recipe/sample-po-rich-text-recipe.component.ts"),t(),i(23,"pre",9),e(24,`import { Component } from '@angular/core';
import image from './sample-po-rich-text-recipe-image-base-64';

@Component({
  selector: 'sample-po-rich-text-recipe',
  templateUrl: './sample-po-rich-text-recipe.component.html',
  standalone: false
})
export class SamplePoRichTextRecipeComponent {
  recipe = \`
    <div style="text-align: center;"><b>Quick Hummus Recipe</b></div>
    <div><br></div>
    <div style="text-align: start;">
    <div><b><u>Preparation Time:</u></b>&nbsp;less than 30 mins</div>
    <div><b><u>Serves</u></b>: 3 people</div>
    <div><b><u>Reference</u></b>:
      <a class="po-rich-text-link" href="http://en.wikipedia.org/wiki/hummus" target="_blank">Hummus Delicious Recipe</a>
    </div>
    </div>
    <div><br></div>
    <img src="\${image}">
    <div style="text-align: start;"><br></div>
    <div style="text-align: start;"><u><b>Ingredients</b></u>&nbsp;<br></div>
    <div style="text-align: start;"><u><br></u></div>
    <div style="text-align: start;">
      <ul>
        <li><i>200g/7oz</i>&nbsp;canned&nbsp;<b>chickpeas</b></li>
        <li><i>2</i>&nbsp;<i>tbsp</i>&nbsp;<b>lemon juice</b>&nbsp;or more</li>
        <li><i>2</i>&nbsp;<b>garlic</b>&nbsp;cloves, crushed</li>
        <li><i>1</i>&nbsp;<i>tsp</i>&nbsp;ground&nbsp;<b>cumin&nbsp;</b></li>
        <li><i>pinch</i>&nbsp;<b>salt</b></li>
        <li><i>1</i>&nbsp;<i>tbsp</i>&nbsp;<b>tahini</b>&nbsp;(sesame seed paste)</li>
        <li><i>4</i>&nbsp;<i>tbsp</i>&nbsp;<b>water</b></li>
        <li><i>2</i>&nbsp;<i>tbsp</i>&nbsp;extra virgin&nbsp;<b>olive oil</b></li>
        <li><i>1</i>&nbsp;<i>tsp</i>&nbsp;<b>paprika</b></li>
        <li><i>4&nbsp;rounds</i>&nbsp;of&nbsp;<b>pitta bread</b></li>
      </ul>
    </div>
    <div style="text-align: justify;"><b><br></b></div>
    <div style="text-align: start;">
      <div style="text-align: justify;">
        <b>1.&nbsp;</b>Drain the chickpeas and rinse. Reserve a few whole chick peas for serving.
      </div>
      <div style="text-align: justify;"><br></div>
      <div style="text-align: justify;">
        <b>2.</b>&nbsp;Combine the chickpeas, lemon juice, garlic, cumin, salt, tahini, and water in a food processor,
        and blend to a creamy pur\xE9e.
      </div>
      <div style="text-align: justify;"><br></div>
      <div style="text-align: justify;">
        <b>3.&nbsp;</b>Add more lemon juice, garlic, cumin or salt to taste. Turn out into a dinner plate, and make
        smooth with the back of a spoon. Drizzle with extra virgin olive oil and scatter with the reserved chickpeas.
      </div>
      <div style="text-align: justify;"><br></div>
      <div style="text-align: justify;">
        <b>4.&nbsp;</b>Sprinkle with paprika and serve with pita bread, warmed in a moderate
        oven for three minutes, and cut into quarters.
      </div>
    </div>\`;
}
`),t()()()()(),i(25,"div",10),a(26,"sample-po-rich-text-recipe"),t(),a(27,"hr")),l&2&&(p(5),C("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),b("ngClass",H(4,Ee,n.hideSampleCodeTabs)))},dependencies:[q,T,f,w,re],encapsulation:2})}return o})();var Ae=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=u({type:o,selectors:[["sample-po-rich-text-doc"]],standalone:!1,decls:651,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-textarea"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","Array<PoRichTextToolbarActions>"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,n){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),i(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),i(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),i(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),i(16,"h3",3),e(17,"Componente"),t(),i(18,"h4",4)(19,"code",5),e(20,"PoRichTextComponent"),t()(),i(21,"div",2)(22,"p"),e(23,"O componente "),i(24,"code"),e(25,"po-rich-text"),t(),e(26," \xE9 um editor de textos enriquecidos."),t(),i(27,"p"),e(28,"Para edi\xE7\xE3o de texto simples sem formata\xE7\xE3o recomenda-se o uso do componente "),i(29,"a",6)(30,"strong"),e(31,"po-textarea"),t()(),e(32,"."),t(),i(33,"blockquote")(34,"p"),e(35,"No navegador Internet Explorer n\xE3o \xE9 poss\xEDvel alterar a cor do texto. "),t()()(),i(36,"div",7)(37,"h4",8),e(38,"Seletor"),t(),i(39,"pre",9),e(40,`<po-rich-text
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-disabled-text-align="boolean"
    p-error-limit="boolean"
    p-error-message="string"
    p-height="number"
    p-help="string"
    p-hide-toolbar-actions="Array<PoRichTextToolbarActions>"
    (p-keydown)="EventEmitter"
    p-label="string"
    name="string"
    p-optional="boolean"
    p-placeholder="string"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-rich-text>
`),t()(),i(41,"h4",10),e(42,"Propriedades"),t(),i(43,"table",11)(44,"tr",12)(45,"th",13),e(46,"Nome"),t(),i(47,"th",13),e(48,"Tipo"),t(),i(49,"th",13),e(50,"Padr\xE3o"),t(),i(51,"th",13),e(52,"Descri\xE7\xE3o"),t()(),i(53,"tr",14)(54,"td",15)(55,"div",16)(56,"span",17),e(57," (p-additional-help)"),a(58,"br"),t()()(),i(59,"td",18)(60,"code",19),e(61,"EventEmitter"),t()(),i(62,"td",20),e(63,"-"),t(),i(64,"td",21)(65,"em")(66,"strong"),e(67,"(opcional)"),t()(),i(68,"p"),e(69,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(70,"code"),e(71,"p-help"),t(),e(72,"."),t()()(),i(73,"tr",14)(74,"td",15)(75,"div",22)(76,"span",23),e(77," p-additional-help-tooltip"),a(78,"br"),t()()(),i(79,"td",18)(80,"code",24),e(81,"string"),t()(),i(82,"td",20),e(83,"-"),t(),i(84,"td",21)(85,"em")(86,"strong"),e(87,"(opcional)"),t()(),i(88,"p"),e(89,"Exibe um \xEDcone de ajuda adicional ao "),i(90,"code"),e(91,"p-help"),t(),e(92,`, com o texto desta propriedade no tooltip.
Se o evento `),i(93,"code"),e(94,"p-additional-help"),t(),e(95,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(96,"strong"),e(97,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(98,"blockquote")(99,"p"),e(100,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),i(101,"tr",14)(102,"td",15)(103,"div",22)(104,"span",23),e(105," p-append-in-body"),a(106,"br"),t()()(),i(107,"td",18)(108,"code",25),e(109,"boolean"),t()(),i(110,"td",20)(111,"p")(112,"code"),e(113,"false"),t()()(),i(114,"td",21)(115,"em")(116,"strong"),e(117,"(opcional)"),t()(),i(118,"p"),e(119,"Define que o tooltip ("),i(120,"code"),e(121,"p-additional-help-tooltip"),t(),e(122," e/ou "),i(123,"code"),e(124,"p-error-limit"),t(),e(125,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),i(126,"blockquote")(127,"p"),e(128,"Quando utilizado com "),i(129,"code"),e(130,"p-additional-help-tooltip"),t(),e(131,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(132,"tr",14)(133,"td",15)(134,"div",22)(135,"span",23),e(136," p-auto-focus"),a(137,"br"),t()()(),i(138,"td",18)(139,"code",25),e(140,"boolean"),t()(),i(141,"td",20)(142,"p")(143,"code"),e(144,"false"),t()()(),i(145,"td",21)(146,"em")(147,"strong"),e(148,"(opcional)"),t()(),i(149,"p"),e(150,"Aplica foco no elemento ao ser iniciado."),t(),i(151,"blockquote")(152,"p"),e(153,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(154,"tr",14)(155,"td",15)(156,"div",16)(157,"span",17),e(158," (p-change)"),a(159,"br"),t()()(),i(160,"td",18)(161,"code",19),e(162,"EventEmitter"),t()(),i(163,"td",20),e(164,"-"),t(),i(165,"td",21)(166,"em")(167,"strong"),e(168,"(opcional)"),t()(),i(169,"p"),e(170,"Evento disparado ao deixar o campo e que recebe como par\xE2metro o valor alterado."),t()()(),i(171,"tr",14)(172,"td",15)(173,"div",16)(174,"span",17),e(175," (p-change-model)"),a(176,"br"),t()()(),i(177,"td",18)(178,"code",19),e(179,"EventEmitter"),t()(),i(180,"td",20),e(181,"-"),t(),i(182,"td",21)(183,"em")(184,"strong"),e(185,"(opcional)"),t()(),i(186,"p"),e(187,"Evento disparado ao modificar valor do model e que recebe como par\xE2metro o valor alterado."),t()()(),i(188,"tr",14)(189,"td",15)(190,"div",22)(191,"span",23),e(192," p-disabled-text-align"),a(193,"br"),t()()(),i(194,"td",18)(195,"code",25),e(196,"boolean"),t()(),i(197,"td",20)(198,"p")(199,"code"),e(200,"false"),t()()(),i(201,"td",21)(202,"em")(203,"strong"),e(204,"(opcional)"),t()(),i(205,"p"),e(206,"Define se o alinhamento de texto ser\xE1 desabilitado."),t()()(),i(207,"tr",14)(208,"td",15)(209,"div",22)(210,"span",23),e(211," p-error-limit"),a(212,"br"),t()()(),i(213,"td",18)(214,"code",25),e(215,"boolean"),t()(),i(216,"td",20)(217,"p")(218,"code"),e(219,"false"),t()()(),i(220,"td",21)(221,"em")(222,"strong"),e(223,"(opcional)"),t()(),i(224,"p"),e(225,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(226,"blockquote")(227,"p"),e(228,"Caso essa propriedade seja definida como "),i(229,"code"),e(230,"true"),t(),e(231,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(232,"tr",14)(233,"td",15)(234,"div",22)(235,"span",23),e(236," p-error-message"),a(237,"br"),t()()(),i(238,"td",18)(239,"code",24),e(240,"string"),t()(),i(241,"td",20),e(242,"-"),t(),i(243,"td",21)(244,"em")(245,"strong"),e(246,"(opcional)"),t()(),i(247,"p"),e(248,"Mensagem que ser\xE1 apresentada quando a propriedade required estiver habilitada e o campo for limpo ap\xF3s algo ser digitado."),t()()(),i(249,"tr",14)(250,"td",15)(251,"div",22)(252,"span",23),e(253," p-height"),a(254,"br"),t()()(),i(255,"td",18)(256,"code",26),e(257,"number"),t()(),i(258,"td",20),e(259,"-"),t(),i(260,"td",21)(261,"em")(262,"strong"),e(263,"(opcional)"),t()(),i(264,"p"),e(265,"Define a altura da \xE1rea de edi\xE7\xE3o de texto."),t(),i(266,"blockquote")(267,"p"),e(268,"Altura m\xEDnima do componente \xE9 "),i(269,"code"),e(270,"94"),t(),e(271," e a altura m\xE1xima \xE9 "),i(272,"code"),e(273,"262"),t(),e(274,"."),t()()()(),i(275,"tr",14)(276,"td",15)(277,"div",22)(278,"span",23),e(279," p-help"),a(280,"br"),t()()(),i(281,"td",18)(282,"code",24),e(283,"string"),t()(),i(284,"td",20),e(285,"-"),t(),i(286,"td",21)(287,"em")(288,"strong"),e(289,"(opcional)"),t()(),i(290,"p"),e(291,"Texto de apoio do campo."),t()()(),i(292,"tr",14)(293,"td",15)(294,"div",22)(295,"span",23),e(296," p-hide-toolbar-actions"),a(297,"br"),t()()(),i(298,"td",18)(299,"code",27),e(300,"Array<PoRichTextToolbarActions>"),t()(),i(301,"td",20)(302,"p")(303,"code"),e(304,"[]"),t()()(),i(305,"td",21)(306,"em")(307,"strong"),e(308,"(opcional)"),t()(),i(309,"p"),e(310,"Define as a\xE7\xF5es da barra de ferramentas do "),i(311,"code"),e(312,"PoRichTextComponent"),t(),e(313,` que ser\xE3o ocultadas.
Aceita um \xFAnico valor do tipo `),i(314,"code"),e(315,"PoRichTextToolbarActions"),t(),e(316," ou uma lista de valores."),t(),i(317,"blockquote")(318,"p"),e(319,"Esta propriedade sobrep\xF5e a configura\xE7\xE3o da propriedade "),i(320,"code"),e(321,"p-disabled-text-align"),t(),e(322," quando for passada como "),i(323,"code"),e(324,"false"),t(),e(325,", caso sejam definidas simultaneamente."),t()()()(),i(326,"tr",14)(327,"td",15)(328,"div",16)(329,"span",17),e(330," (p-keydown)"),a(331,"br"),t()()(),i(332,"td",18)(333,"code",19),e(334,"EventEmitter"),t()(),i(335,"td",20),e(336,"-"),t(),i(337,"td",21)(338,"em")(339,"strong"),e(340,"(opcional)"),t()(),i(341,"p"),e(342,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(343,"code"),e(344,"KeyboardEvent"),t(),e(345," com informa\xE7\xF5es sobre a tecla."),t()()(),i(346,"tr",14)(347,"td",15)(348,"div",22)(349,"span",23),e(350," p-label"),a(351,"br"),t()()(),i(352,"td",18)(353,"code",24),e(354,"string"),t()(),i(355,"td",20),e(356,"-"),t(),i(357,"td",21)(358,"em")(359,"strong"),e(360,"(opcional)"),t()(),i(361,"p"),e(362,"R\xF3tulo do campo."),t()()(),i(363,"tr",14)(364,"td",15)(365,"div",22)(366,"span",23),e(367," name"),a(368,"br"),t()()(),i(369,"td",18)(370,"code",24),e(371,"string"),t()(),i(372,"td",20),e(373,"-"),t(),i(374,"td",21)(375,"p"),e(376,"Nome e identificador do campo."),t()()(),i(377,"tr",14)(378,"td",15)(379,"div",22)(380,"span",23),e(381," p-optional"),a(382,"br"),t()()(),i(383,"td",18)(384,"code",25),e(385,"boolean"),t()(),i(386,"td",20)(387,"p")(388,"code"),e(389,"false"),t()()(),i(390,"td",21)(391,"em")(392,"strong"),e(393,"(opcional)"),t()(),i(394,"p"),e(395,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(396,"blockquote")(397,"p"),e(398,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(399,"ul")(400,"li"),e(401,"O campo conter "),i(402,"code"),e(403,"p-required"),t(),e(404,";"),t(),i(405,"li"),e(406,"N\xE3o possuir "),i(407,"code"),e(408,"p-help"),t(),e(409," e/ou "),i(410,"code"),e(411,"p-label"),t(),e(412,"."),t()()()(),i(413,"tr",14)(414,"td",15)(415,"div",22)(416,"span",23),e(417," p-placeholder"),a(418,"br"),t()()(),i(419,"td",18)(420,"code",24),e(421,"string"),t()(),i(422,"td",20)(423,"p"),e(424,"''"),t()(),i(425,"td",21)(426,"em")(427,"strong"),e(428,"(opcional)"),t()(),i(429,"p"),e(430,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),i(431,"tr",14)(432,"td",15)(433,"div",22)(434,"span",23),e(435," p-readonly"),a(436,"br"),t()()(),i(437,"td",18)(438,"code",25),e(439,"boolean"),t()(),i(440,"td",20)(441,"p")(442,"code"),e(443,"false"),t()()(),i(444,"td",21)(445,"em")(446,"strong"),e(447,"(opcional)"),t()(),i(448,"p"),e(449,"Indica que o campo ser\xE1 somente leitura."),t()()(),i(450,"tr",14)(451,"td",15)(452,"div",22)(453,"span",23),e(454," p-required"),a(455,"br"),t()()(),i(456,"td",18)(457,"code",25),e(458,"boolean"),t()(),i(459,"td",20)(460,"p")(461,"code"),e(462,"false"),t()()(),i(463,"td",21)(464,"em")(465,"strong"),e(466,"(opcional)"),t()(),i(467,"p"),e(468,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),i(469,"tr",14)(470,"td",15)(471,"div",22)(472,"span",23),e(473," p-show-required"),a(474,"br"),t()()(),i(475,"td",18)(476,"code",25),e(477,"boolean"),t()(),i(478,"td",20),e(479,"-"),t(),i(480,"td",21)(481,"p"),e(482,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),i(483,"blockquote")(484,"p"),e(485,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(486,"ul")(487,"li"),e(488,"N\xE3o possuir "),i(489,"code"),e(490,"p-help"),t(),e(491," e/ou "),i(492,"code"),e(493,"p-label"),t(),e(494,"."),t()()()(),i(495,"tr",14)(496,"td",15)(497,"div",22)(498,"span",23),e(499," p-size"),a(500,"br"),t()()(),i(501,"td",18)(502,"code",24),e(503,"string"),t()(),i(504,"td",20)(505,"p")(506,"code"),e(507,"medium"),t()()(),i(508,"td",21)(509,"em")(510,"strong"),e(511,"(opcional)"),t()(),i(512,"p"),e(513,"Define o tamanho do componente:"),t(),i(514,"ul")(515,"li")(516,"code"),e(517,"small"),t(),e(518,": altura dos buttons como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(519,"li")(520,"code"),e(521,"medium"),t(),e(522,": altura dos buttons como 44px."),t()(),i(523,"blockquote")(524,"p"),e(525,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(526,"code"),e(527,"medium"),t(),e(528,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(529,"a",28),e(530,"po-theme"),t(),e(531,"."),t()()()()(),i(532,"h3",10),e(533,"M\xE9todos"),t(),i(534,"table",29)(535,"tr",14)(536,"th",30)(537,"div",22)(538,"h4")(539,"span",23),e(540," focus "),t()()()()(),i(541,"tr",21)(542,"td",21)(543,"p"),e(544,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(545,"p"),e(546,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(547,"pre")(548,"code"),e(549,`import { PoRichTextComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRichTextComponent, { static: true }) richText: PoRichTextComponent;

focusRichText() {
  this.richText.focus();
}
`),t()()()()(),a(550,"br"),i(551,"table",29)(552,"tr",14)(553,"th",30)(554,"div",22)(555,"h4")(556,"span",23),e(557," showAdditionalHelp "),t()()()()(),i(558,"tr",21)(559,"td",21)(560,"p"),e(561,"M\xE9todo que exibe "),i(562,"code"),e(563,"p-additionalHelpTooltip"),t(),e(564," ou executa a a\xE7\xE3o definida em "),i(565,"code"),e(566,"p-additionalHelp"),t(),e(567,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(568,"code"),e(569,"p-keydown"),t(),e(570,"."),t(),i(571,"pre")(572,"code"),e(573,`<po-rich-text
 #richtext
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, richtext)"
></po-rich-text>
`),t()(),i(574,"pre")(575,"code"),e(576,`...
onKeyDown(event: KeyboardEvent, inp: PoRichTextComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(577,"br"),i(578,"h3"),e(579,"Enums"),t(),i(580,"h4",4)(581,"code",5),e(582,"PoRichTextToolbarActions"),t()(),i(583,"div",2)(584,"p"),e(585,"Enumera\xE7\xE3o que define as a\xE7\xF5es dispon\xEDveis na barra de ferramentas do "),i(586,"code"),e(587,"PoRichTextComponent"),t(),e(588,`.
Cada a\xE7\xE3o corresponde a um conjunto de bot\xF5es ou funcionalidades que podem ser habilitados ou desabilitados
na barra de ferramentas do editor do rich-text.`),t()(),i(589,"h4",10),e(590,"Propriedades"),t(),i(591,"table",11)(592,"tr",12)(593,"th",13),e(594,"Nome"),t(),i(595,"th",13),e(596,"Descri\xE7\xE3o"),t()(),i(597,"tr",14)(598,"td",15)(599,"div",22)(600,"span",23),e(601," Color"),a(602,"br"),t()()(),i(603,"td",21)(604,"p"),e(605,"Seletor de cores, A\xE7\xE3o que permite que o usu\xE1rio altere a cor do texto selecionado."),t()()(),i(606,"tr",14)(607,"td",15)(608,"div",22)(609,"span",23),e(610," Align"),a(611,"br"),t()()(),i(612,"td",21)(613,"p"),e(614,"Alinhamento de texto, incluindo alinhamento \xE0 esquerda, centralizado, \xE0 direita e justificado."),t()()(),i(615,"tr",14)(616,"td",15)(617,"div",22)(618,"span",23),e(619," Format"),a(620,"br"),t()()(),i(621,"td",21)(622,"p"),e(623,"Formata\xE7\xE3o de texto, como aplicar negrito, it\xE1lico ou sublinhado ao texto selecionado."),t()()(),i(624,"tr",14)(625,"td",15)(626,"div",22)(627,"span",23),e(628," List"),a(629,"br"),t()()(),i(630,"td",21)(631,"p"),e(632,"Listas com marcadores (bullet points) ou listas numeradas."),t()()(),i(633,"tr",14)(634,"td",15)(635,"div",22)(636,"span",23),e(637," Link"),a(638,"br"),t()()(),i(639,"td",21)(640,"p"),e(641,"Links no conte\xFAdo, aplica partes do texto para serem clic\xE1veis e direcionem para URLs especificadas."),t()()(),i(642,"tr",14)(643,"td",15)(644,"div",22)(645,"span",23),e(646," Media"),a(647,"br"),t()()(),i(648,"td",21)(649,"p"),e(650,"M\xEDdias, como imagens, no conte\xFAdo do editor."),t()()()()())},dependencies:[T],encapsulation:2})}return o})();var de=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(A,l){this.route=A,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(A=>{let l=A.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(A){this.router.navigate([],{queryParams:{view:A},queryParamsHandling:"merge"}),this.activeTab=A}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(j(U),j(N))};static \u0275cmp=u({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Rich Text",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-rich-text-doc"),t(),i(4,"po-tab",3),g("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-rich-text-basic-view")(6,"sample-po-rich-text-labs-view")(7,"sample-po-rich-text-recipe-view"),t()()()),l&2&&(b("p-actions",n.actions),p(2),b("p-active",n.activeTab==="doc"),p(2),b("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[$,f,w,ne,ae,pe,Ae],encapsulation:2})}return o})();var we=[{path:"",component:de}],me=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=R({type:o});static \u0275inj=P({imports:[D.forChild(we),D]})}return o})();var Qe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=R({type:o});static \u0275inj=P({imports:[ee,me]})}return o})();export{Qe as DocPoRichTextModule};
