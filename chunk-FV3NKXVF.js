import{o as y,p as Ce}from"./chunk-JYNCG2Y6.js";import{Ab as _,Db as Z,F as j,Ga as I,I as me,La as Se,Oa as M,Pa as ge,Ra as he,Sa as Y,T as ue,Wa as X,c as se,ha as ce,ja as Ee,nb as xe,ta as be,vb as fe,xb as ve,zb as w}from"./chunk-HBOGTDFH.js";import{$a as S,Aa as ee,Ac as O,Ba as P,Dc as ae,Ea as n,Ec as le,Fa as t,Ga as o,Hc as re,Jb as oe,Ka as D,La as b,M as Q,Ma as H,Nc as pe,Pc as de,Rc as $,T as m,Ta as U,U as u,Ua as k,Va as V,Wa as L,Xa as e,Za as F,ab as g,bb as h,db as te,eb as v,ha as s,ia as T,kb as ne,lb as ie,oa as x,pa as G,ua as J,ub as C,wb as K,wc as R,xc as z,ya as E,yc as A,zc as B}from"./chunk-MIQUIDUB.js";var we=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","upload","p-label","PO Upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile"]],template:function(r,i){r&1&&o(0,"po-upload",0)},dependencies:[M],encapsulation:2})}return l})();var Be=l=>({"docs-sample-code-tabs":l}),_e=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Basic"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-basic/sample-po-upload-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-basic/sample-po-upload-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-basic"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",v(4,Be,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,we],encapsulation:2})}return l})();function je(l,ze){if(l&1&&(n(0,"div")(1,"po-widget",22)(2,"form",23),o(3,"po-input",24)(4,"po-select",25)(5,"po-select",26)(6,"po-switch",27)(7,"po-switch",28),t()()()),l&2){let p=H();s(2),E("formGroup",p.actionForm),s(2),E("p-options",p.iconOptions),s(),E("p-options",p.typeOptions)}}var Pe=(()=>{class l{fb;additionalHelpTooltip;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;actionForm;size;propertiesOptions=[{value:"autoupload",label:"Automatic upload"},{value:"directory",label:"Directory"},{value:"disabled",label:"Disabled"},{value:"disabledRemoveFile",label:"Disabled Remove File"},{value:"dragDrop",label:"Drag Drop"},{value:"requiredUrl",label:"required Url"},{value:"multiple",label:"Multiple upload"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"restrictionsInfo",label:"Hide Restrictions Info"},{value:"selectButton",label:"Hide Select Files Button"},{value:"sendButton",label:"Hide Send Files Button"},{value:"showCustomAction",label:"Add Custom Action to Progress"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];constructor(p){this.fb=p,this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(p=>{this.updateAction(p)})}updateAction(p){this.action=p}changeEvent(p){this.event=p}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onChangeHeaders(p){try{this.headers=JSON.parse(p)}catch{this.headers=void 0}}onChangeExtension(){let p=this.allowedExtensions.split(",").map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:p})}onChangeMaxFiles(p){this.restrictions=Object.assign({},this.restrictions,{maxFiles:p})}onChangeMaxSize(p){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(p)})}onChangeMinSize(p){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(p)})}restore(){this.additionalHelpTooltip="",this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals="",this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url="https://po-sample-api.onrender.com/v1/uploads/addFile",this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:"default",visible:!0}),this.action={label:"",type:"default"},this.size="medium"}getValueInBytes(p){return 1048576*p}static \u0275fac=function(r){return new(r||l)(T(re))};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-labs"]],standalone:!1,decls:28,vars:46,consts:[["fRestrictions","ngForm"],["name","upload",3,"ngModelChange","p-custom-action-click","p-error","p-keydown","p-success","p-upload","ngModel","p-additional-help-tooltip","p-auto-upload","p-directory","p-disabled","p-required-url","p-disabled-remove-file","p-drag-drop","p-drag-drop-height","p-form-field","p-help","p-hide-select-button","p-hide-restrictions-info","p-hide-send-button","p-label","p-literals","p-multiple","p-optional","p-required","p-show-required","p-restrictions","p-size","p-url","p-headers","p-custom-action"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","allowedExtensions","p-help","Digite as extens\xF5es permitidas separadas por v\xEDrgula","p-label","Allowed Extensions","p-placeholder",".png, .jpeg, .jpg",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","maxFiles","p-clean","","p-help","Requer p-multiple habilitado","p-label","Max Files",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","dragDropHeight","p-clean","","p-help","Altura da \xE1rea de arrastar e soltar","p-label","Drag Drop Height","p-min","160",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minSize","p-clean","","p-help","Em megabytes","p-label","Min File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","maxSize","p-clean","","p-help","Em megabytes","p-label","Max File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","formField","p-clean","","p-label","Form Field",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL","p-required","",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","headers","p-help",'Ex.: {"Authorization": "12312414"}',"p-label","Headers",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[4,"ngIf"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"]],template:function(r,i){if(r&1){let d=D();n(0,"po-upload",1),h("ngModelChange",function(a){return m(d),g(i.upload,a)||(i.upload=a),u(a)}),b("p-custom-action-click",function(){return m(d),u(i.changeEvent("p-custom-action-click"))})("p-error",function(){return m(d),u(i.changeEvent("p-error"))})("p-keydown",function(){return m(d),u(i.changeEvent("p-keydown"))})("p-success",function(){return m(d),u(i.changeEvent("p-success"))})("p-upload",function(){return m(d),u(i.changeEvent("p-upload"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3),ne(4,"json"),o(5,"po-info",4),t(),o(6,"hr"),n(7,"div",2)(8,"form",null,0)(10,"po-input",5),h("ngModelChange",function(a){return m(d),g(i.allowedExtensions,a)||(i.allowedExtensions=a),u(a)}),b("p-change",function(){return m(d),u(i.onChangeExtension())}),t(),n(11,"po-number",6),h("ngModelChange",function(a){return m(d),g(i.maxFiles,a)||(i.maxFiles=a),u(a)}),b("p-change",function(){return m(d),u(i.onChangeMaxFiles(i.maxFiles))}),t(),n(12,"po-number",7),h("ngModelChange",function(a){return m(d),g(i.dragDropHeight,a)||(i.dragDropHeight=a),u(a)}),t(),n(13,"po-number",8),h("ngModelChange",function(a){return m(d),g(i.minSize,a)||(i.minSize=a),u(a)}),b("p-change",function(){return m(d),u(i.onChangeMinSize(i.minSize))}),t(),n(14,"po-number",9),h("ngModelChange",function(a){return m(d),g(i.maxSize,a)||(i.maxSize=a),u(a)}),b("p-change",function(){return m(d),u(i.onChangeMaxSize(i.maxSize))}),t(),o(15,"hr"),n(16,"po-input",10),h("ngModelChange",function(a){return m(d),g(i.label,a)||(i.label=a),u(a)}),t(),n(17,"po-input",11),h("ngModelChange",function(a){return m(d),g(i.help,a)||(i.help=a),u(a)}),t(),n(18,"po-input",12),h("ngModelChange",function(a){return m(d),g(i.additionalHelpTooltip,a)||(i.additionalHelpTooltip=a),u(a)}),t(),n(19,"po-input",13),h("ngModelChange",function(a){return m(d),g(i.formField,a)||(i.formField=a),u(a)}),t(),n(20,"po-input",14),h("ngModelChange",function(a){return m(d),g(i.url,a)||(i.url=a),u(a)}),t(),n(21,"po-input",15),h("ngModelChange",function(a){return m(d),g(i.headersLabs,a)||(i.headersLabs=a),u(a)}),b("p-change",function(a){return m(d),u(i.onChangeHeaders(a))}),t(),n(22,"po-input",16),h("ngModelChange",function(a){return m(d),g(i.literals,a)||(i.literals=a),u(a)}),b("p-change",function(){return m(d),u(i.changeLiterals())}),t(),n(23,"po-checkbox-group",17),h("ngModelChange",function(a){return m(d),g(i.properties,a)||(i.properties=a),u(a)}),t(),J(24,je,8,3,"div",18),n(25,"po-radio-group",19),h("ngModelChange",function(a){return m(d),g(i.size,a)||(i.size=a),u(a)}),t(),n(26,"div",20)(27,"po-button",21),b("p-click",function(){return m(d),u(i.restore())}),t()()()()}r&2&&(S("ngModel",i.upload),E("p-additional-help-tooltip",i.additionalHelpTooltip)("p-auto-upload",i.properties.includes("autoupload"))("p-directory",i.properties.includes("directory"))("p-disabled",i.properties.includes("disabled"))("p-required-url",i.properties.includes("requiredUrl"))("p-disabled-remove-file",i.properties.includes("disabledRemoveFile"))("p-drag-drop",i.properties.includes("dragDrop"))("p-drag-drop-height",i.dragDropHeight)("p-form-field",i.formField)("p-help",i.help)("p-hide-select-button",i.properties.includes("selectButton"))("p-hide-restrictions-info",i.properties.includes("restrictionsInfo"))("p-hide-send-button",i.properties.includes("sendButton"))("p-label",i.label)("p-literals",i.customLiterals)("p-multiple",i.properties.includes("multiple"))("p-optional",i.properties.includes("optional"))("p-required",i.properties.includes("required"))("p-show-required",i.properties.includes("showRequired"))("p-restrictions",i.restrictions)("p-size",i.size)("p-url",i.url)("p-headers",i.headers)("p-custom-action",i.action),s(3),E("p-value",ie(4,44,i.upload)),s(2),E("p-value",i.event),s(5),S("ngModel",i.allowedExtensions),s(),S("ngModel",i.maxFiles),s(),S("ngModel",i.dragDropHeight),s(),S("ngModel",i.minSize),s(),S("ngModel",i.maxSize),s(2),S("ngModel",i.label),s(),S("ngModel",i.help),s(),S("ngModel",i.additionalHelpTooltip),s(),S("ngModel",i.formField),s(),S("ngModel",i.url),s(),S("ngModel",i.headersLabs),s(),S("ngModel",i.literals),s(),S("ngModel",i.properties),E("p-options",i.propertiesOptions),s(),E("ngIf",i.properties.includes("showCustomAction")),s(),S("ngModel",i.size),E("p-options",i.sizeOptions))},dependencies:[K,O,R,z,B,A,ae,le,j,ce,Ee,I,Se,he,M,be,X,Z,oe],encapsulation:2})}return l})();var Ne=l=>({"docs-sample-code-tabs":l}),Fe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Labs"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-labs/sample-po-upload-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  [(ngModel)]="upload"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-auto-upload]="properties.includes('autoupload')"
  [p-directory]="properties.includes('directory')"
  [p-disabled]="properties.includes('disabled')"
  [p-required-url]="properties.includes('requiredUrl')"
  [p-disabled-remove-file]="properties.includes('disabledRemoveFile')"
  [p-drag-drop]="properties.includes('dragDrop')"
  [p-drag-drop-height]="dragDropHeight"
  [p-form-field]="formField"
  [p-help]="help"
  [p-hide-select-button]="properties.includes('selectButton')"
  [p-hide-restrictions-info]="properties.includes('restrictionsInfo')"
  [p-hide-send-button]="properties.includes('sendButton')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-multiple]="properties.includes('multiple')"
  [p-optional]="properties.includes('optional')"
  [p-required]="properties.includes('required')"
  [p-show-required]="properties.includes('showRequired')"
  [p-restrictions]="restrictions"
  [p-size]="size"
  [p-url]="url"
  [p-headers]="headers"
  [p-custom-action]="action"
  (p-custom-action-click)="changeEvent('p-custom-action-click')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-success)="changeEvent('p-success')"
  (p-upload)="changeEvent('p-upload')"
>
</po-upload>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="upload | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<div class="po-row">
  <form #fRestrictions="ngForm">
    <po-input
      class="po-md-6"
      name="allowedExtensions"
      [(ngModel)]="allowedExtensions"
      p-help="Digite as extens\xF5es permitidas separadas por v\xEDrgula"
      p-label="Allowed Extensions"
      p-placeholder=".png, .jpeg, .jpg"
      (p-change)="onChangeExtension()"
    >
    </po-input>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxFiles"
      [(ngModel)]="maxFiles"
      p-clean
      p-help="Requer p-multiple habilitado"
      p-label="Max Files"
      (p-change)="onChangeMaxFiles(maxFiles)"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="dragDropHeight"
      [(ngModel)]="dragDropHeight"
      p-clean
      p-help="Altura da \xE1rea de arrastar e soltar"
      p-label="Drag Drop Height"
      p-min="160"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="minSize"
      [(ngModel)]="minSize"
      p-clean
      p-help="Em megabytes"
      p-label="Min File Size"
      (p-change)="onChangeMinSize(minSize)"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxSize"
      [(ngModel)]="maxSize"
      p-clean
      p-help="Em megabytes"
      p-label="Max File Size"
      (p-change)="onChangeMaxSize(maxSize)"
    >
    </po-number>

    <hr />

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

    <po-input class="po-md-6" name="formField" [(ngModel)]="formField" p-clean p-label="Form Field"> </po-input>

    <po-input class="po-md-12 po-lg-6" name="url" [(ngModel)]="url" p-clean p-label="URL" p-required> </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="headers"
      [(ngModel)]="headersLabs"
      p-help='Ex.: {"Authorization": "12312414"}'
      p-label="Headers"
      (p-change)="onChangeHeaders($event)"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-help="Select any options"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <div *ngIf="properties.includes('showCustomAction')">
      <po-widget p-title="Action Button">
        <form [formGroup]="actionForm" class="po-row">
          <po-input class="po-md-6 po-lg-4" formControlName="label" p-label="Label" />
          <po-select class="po-md-6 po-lg-3" formControlName="icon" p-label="Icon" [p-options]="iconOptions" />
          <po-select class="po-md-6 po-lg-3" formControlName="type" p-label="Type" [p-options]="typeOptions" />
          <po-switch class="po-md-3 po-lg-2" formControlName="disabled" p-label="Disabled" />
          <po-switch class="po-md-3 po-lg-2" formControlName="visible" p-label="Visible" />
        </form>
      </po-widget>
    </div>

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

    <div class="po-row po-mt-1">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-labs/sample-po-upload-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoProgressAction,
  PoSelectOption,
  PoRadioGroupOption,
  PoUploadFileRestrictions,
  PoUploadLiterals
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-labs',
  templateUrl: './sample-po-upload-labs.component.html',
  standalone: false
})
export class SamplePoUploadLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  allowedExtensions: string;
  customLiterals: PoUploadLiterals;
  dragDropHeight: number;
  event: string;
  formField: string;
  help: string;
  label: string;
  literals: string;
  maxFiles: number;
  maxSize: number;
  minSize: number;
  properties: Array<string>;
  restrictions: PoUploadFileRestrictions;
  upload: Array<any>;
  url: string;
  headers: { [name: string]: string | Array<string> };
  headersLabs: string;
  action: PoProgressAction;
  actionForm: FormGroup;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoupload', label: 'Automatic upload' },
    { value: 'directory', label: 'Directory' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'disabledRemoveFile', label: 'Disabled Remove File' },
    { value: 'dragDrop', label: 'Drag Drop' },
    { value: 'requiredUrl', label: 'required Url' },
    { value: 'multiple', label: 'Multiple upload' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'restrictionsInfo', label: 'Hide Restrictions Info' },
    { value: 'selectButton', label: 'Hide Select Files Button' },
    { value: 'sendButton', label: 'Hide Send Files Button' },
    { value: 'showCustomAction', label: 'Add Custom Action to Progress' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-download', label: 'an an-download' },
    { value: 'an an-Server', label: 'an an-Server' },
    { value: 'an an-upload', label: 'an an-upload' },
    { value: 'an an-share', label: 'an an-share' }
  ];

  constructor(private fb: FormBuilder) {
    this.initializeActionForm();
  }

  initializeActionForm() {
    this.actionForm = this.fb.group({
      label: [''],
      icon: [''],
      type: ['default'],
      visible: [true],
      disabled: [false]
    });
  }

  ngOnInit() {
    this.restore();
    this.actionForm.valueChanges.subscribe(formValue => {
      this.updateAction(formValue);
    });
  }

  updateAction(formValue: any) {
    this.action = formValue;
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onChangeHeaders(headers) {
    try {
      this.headers = JSON.parse(headers);
    } catch {
      this.headers = undefined;
    }
  }
  onChangeExtension() {
    const allowedExtensions = this.allowedExtensions.split(',').map(allowedExtension => allowedExtension.trim());
    this.restrictions = Object.assign({}, this.restrictions, { allowedExtensions });
  }

  onChangeMaxFiles(maxFiles: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFiles });
  }

  onChangeMaxSize(maxSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFileSize: this.getValueInBytes(maxSize) });
  }

  onChangeMinSize(minSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { minFileSize: this.getValueInBytes(minSize) });
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.allowedExtensions = undefined;
    this.customLiterals = undefined;
    this.dragDropHeight = undefined;
    this.event = undefined;
    this.formField = undefined;
    this.label = undefined;
    this.help = undefined;
    this.literals = '';
    this.maxFiles = undefined;
    this.maxSize = undefined;
    this.minSize = undefined;
    this.properties = [];
    this.restrictions = {};
    this.upload = undefined;
    this.url = 'https://po-sample-api.onrender.com/v1/uploads/addFile';
    this.headers = undefined;
    this.headersLabs = undefined;
    this.actionForm.reset({ type: 'default', visible: true });
    this.action = { label: '', type: 'default' };
    this.size = 'medium';
  }

  private getValueInBytes(value: number) {
    return 1048576 * value;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-labs"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",v(4,Ne,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Pe],encapsulation:2})}return l})();var We=["formOpportunity"],Qe=()=>({maxFileSize:"204800"}),Me=(()=>{class l{poNotification;formOpportunity;biograph;linkedin;name;resume;uploadedResume;constructor(p){this.poNotification=p}ngOnInit(){this.uploadedResume=!1}apply(){this.formOpportunity.reset(),this.uploadedResume=!1,this.poNotification.success("You were applied successfully")}resumeUploadError(){this.uploadedResume=!1}resumeUploadSuccess(){this.uploadedResume=!0}static \u0275fac=function(r){return new(r||l)(T(ue))};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-resume"]],viewQuery:function(r,i){if(r&1&&U(We,7),r&2){let d;k(d=V())&&(i.formOpportunity=d.first)}},standalone:!1,decls:12,vars:7,consts:[["formOpportunity","ngForm"],[1,"po-row"],["name","name","p-clean","","p-label","Full Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","biograph","p-label","Biograph","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","linkedin","p-clean","","p-label","LinkedIn URL",1,"po-md-12",3,"ngModelChange","ngModel"],["name","resume","p-label","Resume","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-md-12",3,"ngModelChange","p-error","p-success","ngModel","p-restrictions"],["p-label","Apply",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let d=D();n(0,"form",null,0)(2,"div",1)(3,"po-input",2),h("ngModelChange",function(a){return m(d),g(i.name,a)||(i.name=a),u(a)}),t()(),n(4,"div",1)(5,"po-textarea",3),h("ngModelChange",function(a){return m(d),g(i.biograph,a)||(i.biograph=a),u(a)}),t()(),n(6,"div",1)(7,"po-url",4),h("ngModelChange",function(a){return m(d),g(i.linkedin,a)||(i.linkedin=a),u(a)}),t()(),n(8,"div",1)(9,"po-upload",5),h("ngModelChange",function(a){return m(d),g(i.resume,a)||(i.resume=a),u(a)}),b("p-error",function(){return m(d),u(i.resumeUploadError())})("p-success",function(){return m(d),u(i.resumeUploadSuccess())}),t()(),n(10,"div",1)(11,"po-button",6),b("p-click",function(){return m(d),u(i.apply())}),t()()()}if(r&2){let d=L(1);s(3),S("ngModel",i.name),s(2),S("ngModel",i.biograph),s(2),S("ngModel",i.linkedin),s(2),S("ngModel",i.resume),E("p-restrictions",te(6,Qe)),s(2),E("p-disabled",d.invalid||!i.uploadedResume)}},dependencies:[O,R,z,B,A,j,I,Y,M,ge],encapsulation:2})}return l})();var Je=l=>({"docs-sample-code-tabs":l}),qe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-resume-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Resume"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-resume/sample-po-upload-resume.component.html"),t(),n(13,"pre",7),e(14,`<form #formOpportunity="ngForm">
  <div class="po-row">
    <po-input class="po-md-12" name="name" [(ngModel)]="name" p-clean p-label="Full Name" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" name="biograph" [(ngModel)]="biograph" p-label="Biograph" p-required> </po-textarea>
  </div>

  <div class="po-row">
    <po-url class="po-md-12" name="linkedin" [(ngModel)]="linkedin" p-clean p-label="LinkedIn URL"> </po-url>
  </div>

  <div class="po-row">
    <po-upload
      class="po-md-12"
      name="resume"
      [(ngModel)]="resume"
      p-label="Resume"
      p-required
      p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
      [p-restrictions]="{ maxFileSize: '204800' }"
      (p-error)="resumeUploadError()"
      (p-success)="resumeUploadSuccess()"
    >
    </po-upload>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4"
      p-label="Apply"
      [p-disabled]="formOpportunity.invalid || !uploadedResume"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-resume/sample-po-upload-resume.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-resume',
  templateUrl: 'sample-po-upload-resume.component.html',
  standalone: false
})
export class SamplePoUploadResumeComponent implements OnInit {
  @ViewChild('formOpportunity', { static: true }) formOpportunity: UntypedFormControl;

  biograph: string;
  linkedin: string;
  name: string;
  resume: string;
  uploadedResume: boolean;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.uploadedResume = false;
  }

  apply() {
    this.formOpportunity.reset();
    this.uploadedResume = false;

    this.poNotification.success('You were applied successfully');
  }

  resumeUploadError() {
    this.uploadedResume = false;
  }

  resumeUploadSuccess() {
    this.uploadedResume = true;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-resume"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",v(4,Je,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Me],encapsulation:2})}return l})();var Ye=["upload"],Xe=["stepper"],Ze=["submitForm"],$e=["sucessData"],et=l=>({"po-invisible":l});function tt(l,ze){if(l&1){let p=D();n(0,"div",8)(1,"div",9)(2,"p",11),e(3,"Confirm informations"),t()(),o(4,"po-info",29)(5,"po-info",30)(6,"po-info",31),n(7,"po-button",32),b("p-click",function(){m(p);let i=H();return u(i.confirmSubmit())}),t()()}if(l&2){let p=H();s(4),E("p-value",p.project[0].name||"N/D"),s(),E("p-value",p.title||"N/D"),s(),E("p-value",p.description||"N/D")}}var Te=(()=>{class l{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close()},label:"Return"};description;project=[];restrictions={allowedExtensions:[".zip",".7z",".tar",".wim"]};title;ngOnInit(){this.newSubmit()}canSubmitProject(){return!!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first()}submitProject(){this.upload.sendFiles(),this.stepper.next()}newSubmit(){this.project=[],this.title=void 0,this.description=void 0}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-rs"]],viewQuery:function(r,i){if(r&1&&(U(Ye,7),U(Xe,7),U(Ze,7),U($e,7)),r&2){let d;k(d=V())&&(i.upload=d.first),k(d=V())&&(i.stepper=d.first),k(d=V())&&(i.submitForm=d.first),k(d=V())&&(i.sucessData=d.first)}},standalone:!1,decls:47,vars:15,consts:[["stepper",""],["submitForm","ngForm"],["upload",""],["sucessData",""],[1,"po-row"],["p-orientation","vertical","p-step-icons","","p-step-size","42",1,"po-lg-10","po-offset-lg-2","po-offset-xl-2"],["p-label","Welcome"],["p-title","Realize & Show",1,"po-lg-8","po-mt-2"],[1,"tht-row"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-text-large"],["p-label","Yes!","p-kind","primary",1,"po-sm-12","po-mt-2",3,"p-click"],["p-label","Submit",3,"p-can-active-next-step"],[1,"po-lg-10"],[1,"po-font-subtitle"],[1,"po-font-text-small-bold"],[1,"po-font-title","po-lg-2"],["p-icon","an an-cloud-arrow-up",1,"po-clickable",3,"click"],["p-icon","an an-fill an-x-circle",1,"po-clickable",3,"click","ngClass"],[1,"po-sm-12","po-mt-3","po-font-text-bold"],["name","project","p-hide-select-button","","p-hide-send-button","","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-sm-12",3,"ngModelChange","ngModel","p-restrictions"],["name","title","p-label","Title","p-placeholder","Be creative","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","description","p-label","Description","p-maxlength","140","p-placeholder","Resume on few words","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["p-label","Done",1,"po-sm-12","po-mt-2",3,"p-click","p-disabled"],["p-label","Confirm"],["class","tht-row",4,"ngIf"],["p-title","Confirmation",3,"p-primary-action"],[1,"po-sm-12","po-font-title"],["p-label","File name",1,"po-md-4",3,"p-value"],["p-label","Title",1,"po-md-4",3,"p-value"],["p-label","Description",1,"po-md-4",3,"p-value"],["p-label","Confirm",1,"po-sm-12","po-mt-2","po-mb-2",3,"p-click"]],template:function(r,i){if(r&1){let d=D();n(0,"div",4)(1,"po-stepper",5,0)(3,"po-step",6)(4,"po-widget",7)(5,"div",8)(6,"div",9)(7,"h1",10),e(8,"Welcome, TOTVER!"),t(),n(9,"p",11),e(10,"Let's submit your project?"),t()()(),n(11,"div",8)(12,"po-button",12),b("p-click",function(){m(d);let a=L(2);return u(a.next())}),t()()()(),n(13,"po-step",13)(14,"po-widget",7)(15,"form",null,1)(17,"div",4)(18,"div",14)(19,"div",4)(20,"p",15),e(21,"Please, select your project:"),t()(),n(22,"div",4)(23,"p",16),e(24,"*Upload a zip file containing your project."),t()()(),n(25,"div",17)(26,"po-icon",18),b("click",function(){m(d);let a=L(32);return u(a.selectFiles())}),t(),n(27,"po-icon",19),b("click",function(){m(d);let a=L(32);return u(a.clear())}),t()()(),n(28,"div",4)(29,"label",20),e(30,"Attached"),t(),n(31,"po-upload",21,2),h("ngModelChange",function(a){return m(d),g(i.project,a)||(i.project=a),u(a)}),t()(),n(33,"div",4)(34,"po-input",22),h("ngModelChange",function(a){return m(d),g(i.title,a)||(i.title=a),u(a)}),t()(),n(35,"div",4)(36,"po-textarea",23),h("ngModelChange",function(a){return m(d),g(i.description,a)||(i.description=a),u(a)}),t()(),n(37,"div",8)(38,"po-button",24),b("p-click",function(){return m(d),u(i.submitProject())}),t()()()()(),n(39,"po-step",25)(40,"po-widget",7),J(41,tt,8,3,"div",26),t()()()(),n(42,"po-modal",27,3)(44,"div",4)(45,"p",28),e(46,"Project successfully submited!"),t()()()}r&2&&(s(13),E("p-can-active-next-step",i.canSubmitProject.bind(i)),s(14),E("ngClass",v(13,et,i.project.length<1)),s(2),ee("po-invisible",i.project.length<1),s(2),S("ngModel",i.project),E("p-restrictions",i.restrictions),s(3),S("ngModel",i.title),E("p-disabled",i.project.length<1),s(2),S("ngModel",i.description),E("p-disabled",i.project.length<1),s(2),E("p-disabled",i.canSubmitProject()),s(3),E("ngIf",i.canSubmitProject()),s(),E("p-primary-action",i.confirm))},dependencies:[C,K,O,R,z,B,A,j,I,Y,M,se,X,me,fe,ve,Z],encapsulation:2})}return l})();var it=l=>({"docs-sample-code-tabs":l}),De=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-rs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Realize & Show"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-rs/sample-po-upload-rs.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-stepper
    #stepper
    class="po-lg-10 po-offset-lg-2 po-offset-xl-2"
    p-orientation="vertical"
    p-step-icons
    p-step-size="42"
  >
    <po-step p-label="Welcome">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <div class="tht-row">
          <div class="po-sm-12">
            <h1 class="po-font-title">Welcome, TOTVER!</h1>
            <p class="po-font-text-large">Let's submit your project?</p>
          </div>
        </div>

        <div class="tht-row">
          <po-button class="po-sm-12 po-mt-2" p-label="Yes!" p-kind="primary" (p-click)="stepper.next()"> </po-button>
        </div>
      </po-widget>
    </po-step>

    <po-step p-label="Submit" [p-can-active-next-step]="canSubmitProject.bind(this)">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <form #submitForm="ngForm">
          <div class="po-row">
            <div class="po-lg-10">
              <div class="po-row">
                <p class="po-font-subtitle">Please, select your project:</p>
              </div>

              <div class="po-row">
                <p class="po-font-text-small-bold">*Upload a zip file containing your project.</p>
              </div>
            </div>

            <div class="po-font-title po-lg-2">
              <po-icon p-icon="an an-cloud-arrow-up" class="po-clickable" (click)="upload.selectFiles()"></po-icon>
              <po-icon
                p-icon="an an-fill an-x-circle"
                class="po-clickable"
                [ngClass]="{ 'po-invisible': project.length < 1 }"
                (click)="upload.clear()"
              ></po-icon>
            </div>
          </div>

          <div class="po-row">
            <label class="po-sm-12 po-mt-3 po-font-text-bold" [class.po-invisible]="project.length < 1">Attached</label>
            <po-upload
              #upload
              class="po-sm-12"
              name="project"
              [(ngModel)]="project"
              p-hide-select-button
              p-hide-send-button
              p-required
              p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
              [p-restrictions]="restrictions"
            >
            </po-upload>
          </div>

          <div class="po-row">
            <po-input
              class="po-sm-12"
              name="title"
              [(ngModel)]="title"
              p-label="Title"
              p-placeholder="Be creative"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-textarea
              class="po-sm-12"
              name="description"
              [(ngModel)]="description"
              p-label="Description"
              p-maxlength="140"
              p-placeholder="Resume on few words"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-textarea>
          </div>

          <div class="tht-row">
            <po-button
              class="po-sm-12 po-mt-2"
              p-label="Done"
              [p-disabled]="canSubmitProject()"
              (p-click)="submitProject()"
            >
            </po-button>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Confirm">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <div class="tht-row" *ngIf="canSubmitProject()">
          <div class="po-sm-12">
            <p class="po-font-text-large">Confirm informations</p>
          </div>

          <po-info class="po-md-4" p-label="File name" [p-value]="project[0].name || 'N/D'"> </po-info>

          <po-info class="po-md-4" p-label="Title" [p-value]="title || 'N/D'"> </po-info>

          <po-info class="po-md-4" p-label="Description" [p-value]="description || 'N/D'"> </po-info>

          <po-button class="po-sm-12 po-mt-2 po-mb-2" p-label="Confirm" (p-click)="confirmSubmit()"> </po-button>
        </div>
      </po-widget>
    </po-step>
  </po-stepper>
</div>

<po-modal #sucessData p-title="Confirmation" [p-primary-action]="confirm">
  <div class="po-row">
    <p class="po-sm-12 po-font-title">Project successfully submited!</p>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-rs/sample-po-upload-rs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoStepperComponent, PoUploadComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-rs',
  templateUrl: 'sample-po-upload-rs.component.html',
  standalone: false
})
export class SamplePoUploadRsComponent implements OnInit {
  @ViewChild('upload', { static: true }) upload: PoUploadComponent;
  @ViewChild('stepper', { static: true }) stepper: PoStepperComponent;
  @ViewChild('submitForm', { static: true }) submitForm: NgForm;
  @ViewChild('sucessData', { static: true }) sucessData: PoModalComponent;

  confirm: PoModalAction = {
    action: () => {
      this.sucessData.close();
    },
    label: 'Return'
  };

  description: string;
  project: Array<any> = [];
  restrictions = { allowedExtensions: ['.zip', '.7z', '.tar', '.wim'] };
  title: string;

  ngOnInit() {
    this.newSubmit();
  }

  canSubmitProject() {
    return !!(this.project && this.project.length) && this.title && this.description;
  }

  confirmSubmit() {
    this.sucessData.open();
    this.newSubmit();
    this.stepper.first();
  }

  submitProject() {
    this.upload.sendFiles();
    this.stepper.next();
  }

  private newSubmit() {
    this.project = [];
    this.title = undefined;
    this.description = undefined;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-rs"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",v(4,it,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Te],encapsulation:2})}return l})();var Ue=(()=>{class l{customAction={icon:"an an-download",type:"default",visible:!1};uploadSuccess(){this.customAction.visible=!0}onCustomActionClick(p){if(!p.rawFile){console.error("Arquivo inv\xE1lido ou n\xE3o encontrado.");return}this.downloadFile(p.rawFile)}downloadFile(p){let r=URL.createObjectURL(p),i=document.createElement("a");i.href=r,i.download=p.name,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-download"]],standalone:!1,decls:1,vars:2,consts:[["name","upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-custom-action-click","p-success","p-custom-action","p-multiple"]],template:function(r,i){r&1&&(n(0,"po-upload",0),b("p-custom-action-click",function(c){return i.onCustomActionClick(c)})("p-success",function(){return i.uploadSuccess()}),t()),r&2&&E("p-custom-action",i.customAction)("p-multiple",!0)},dependencies:[M],encapsulation:2})}return l})();var lt=l=>({"docs-sample-code-tabs":l}),ke=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-download-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - with Download Button"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-download/sample-po-upload-download.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-download/sample-po-upload-download.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-download',
  templateUrl: 'sample-po-upload-download.component.html',
  standalone: false
})
export class SamplePoUploadDownloadComponent {
  customAction: PoProgressAction = {
    icon: 'an an-download',
    type: 'default',
    visible: false
  };

  uploadSuccess() {
    this.customAction.visible = true;
  }

  onCustomActionClick(file: { rawFile: File }) {
    if (!file.rawFile) {
      console.error('Arquivo inv\xE1lido ou n\xE3o encontrado.');
      return;
    }

    this.downloadFile(file.rawFile);
  }

  downloadFile(rawFile: File) {
    // Cria uma URL tempor\xE1ria para o arquivo
    const url = URL.createObjectURL(rawFile);

    // Cria um link <a> tempor\xE1rio para iniciar o download
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = rawFile.name; // Define o nome do arquivo para o download
    anchor.style.display = 'none';

    // Adiciona o link ao DOM, aciona o clique e remove o link
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Libera a mem\xF3ria utilizada pela URL tempor\xE1ria
    URL.revokeObjectURL(url);
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-download"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",v(4,lt,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Ue],encapsulation:2})}return l})();var Ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-doc"]],standalone:!1,decls:1589,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoUploadComponent"),t()(),n(21,"div",2)(22,"p"),e(23,"O componente "),n(24,"code"),e(25,"po-upload"),t(),e(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),t(),n(27,"ul")(28,"li"),e(29,"M\xFAltipla sele\xE7\xE3o, onde o usu\xE1rio pode enviar mais de um arquivo ao servidor."),t(),n(30,"li"),e(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),t(),n(32,"li"),e(33,"Restri\xE7\xF5es de formatos de arquivo e tamanho."),t(),n(34,"li"),e(35,"Fun\xE7\xE3o de sucesso que ser\xE1 disparada quando os arquivos forem enviados com sucesso."),t(),n(36,"li"),e(37,"Fun\xE7\xE3o de erro que ser\xE1 disparada quando houver erro no envio dos arquivos."),t(),n(38,"li"),e(39,"Permite habilitar uma \xE1rea onde os arquivos podem ser arrastados."),t()()(),n(40,"div",6)(41,"h4",7),e(42,"Seletor"),t(),n(43,"pre",8),e(44,`<po-upload
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-upload="boolean"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-directory="boolean"
    p-disabled="boolean"
    p-disabled-remove-file="boolean"
    p-drag-drop="boolean"
    p-drag-drop-height="number"
    p-restrictions="PoUploadFileRestrictions"
    p-form-field="string"
    p-headers="{
    [name: string]: string | Array<string>;
}"
    p-help="string"
    p-hide-restrictions-info="boolean"
    p-hide-select-button="boolean"
    p-hide-send-button="boolean"
    p-multiple="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-literals="PoUploadLiterals"
    name="string"
    (ng-model-change)="EventEmitter"
    (p-error)="EventEmitter"
    (p-success)="EventEmitter"
    (p-upload)="EventEmitter"
    p-optional="boolean"
    p-required="boolean"
    p-required-url="boolean"
    p-show-required="boolean"
    p-size="string"
    p-url="string" >
</po-upload>
`),t()(),n(45,"h4",9),e(46,"Propriedades"),t(),n(47,"table",10)(48,"tr",11)(49,"th",12),e(50,"Nome"),t(),n(51,"th",12),e(52,"Tipo"),t(),n(53,"th",12),e(54,"Padr\xE3o"),t(),n(55,"th",12),e(56,"Descri\xE7\xE3o"),t()(),n(57,"tr",13)(58,"td",14)(59,"div",15)(60,"span",16),e(61," (p-additional-help)"),o(62,"br"),t()()(),n(63,"td",17)(64,"code",18),e(65,"EventEmitter"),t()(),n(66,"td",19),e(67,"-"),t(),n(68,"td",20)(69,"em")(70,"strong"),e(71,"(opcional)"),t()(),n(72,"p"),e(73,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(74,"code"),e(75,"p-help"),t(),e(76,"."),t()()(),n(77,"tr",13)(78,"td",14)(79,"div",21)(80,"span",22),e(81," p-additional-help-tooltip"),o(82,"br"),t()()(),n(83,"td",17)(84,"code",23),e(85,"string"),t()(),n(86,"td",19),e(87,"-"),t(),n(88,"td",20)(89,"em")(90,"strong"),e(91,"(opcional)"),t()(),n(92,"p"),e(93,"Exibe um \xEDcone de ajuda adicional ao "),n(94,"code"),e(95,"p-help"),t(),e(96,`, com o texto desta propriedade no tooltip.
Se o evento `),n(97,"code"),e(98,"p-additional-help"),t(),e(99,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(100,"strong"),e(101,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(102,"blockquote")(103,"p"),e(104,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),n(105,"tr",13)(106,"td",14)(107,"div",21)(108,"span",22),e(109," p-append-in-body"),o(110,"br"),t()()(),n(111,"td",17)(112,"code",24),e(113,"boolean"),t()(),n(114,"td",19)(115,"p")(116,"code"),e(117,"false"),t()()(),n(118,"td",20)(119,"em")(120,"strong"),e(121,"(opcional)"),t()(),n(122,"p"),e(123,"Define que o tooltip ("),n(124,"code"),e(125,"p-additional-help-tooltip"),t(),e(126,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(127,"blockquote")(128,"p"),e(129,"Quando utilizado com "),n(130,"code"),e(131,"p-additional-help-tooltip"),t(),e(132,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(133,"tr",13)(134,"td",14)(135,"div",21)(136,"span",22),e(137," p-auto-focus"),o(138,"br"),t()()(),n(139,"td",17)(140,"code",24),e(141,"boolean"),t()(),n(142,"td",19)(143,"p")(144,"code"),e(145,"false"),t()()(),n(146,"td",20)(147,"em")(148,"strong"),e(149,"(opcional)"),t()(),n(150,"p"),e(151,"Aplica foco no elemento ao ser iniciado."),t(),n(152,"blockquote")(153,"p"),e(154,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(155,"tr",13)(156,"td",14)(157,"div",21)(158,"span",22),e(159," p-auto-upload"),o(160,"br"),t()()(),n(161,"td",17)(162,"code",24),e(163,"boolean"),t()(),n(164,"td",19)(165,"p")(166,"code"),e(167,"false"),t()()(),n(168,"td",20)(169,"em")(170,"strong"),e(171,"(opcional)"),t()(),n(172,"p"),e(173,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(174,"blockquote")(175,"p"),e(176,"Esta propriedade funciona somente se a propriedade "),n(177,"code"),e(178,"p-url"),t(),e(179," tiver um valor atribu\xEDdo."),t()()()(),n(180,"tr",13)(181,"td",14)(182,"div",21)(183,"span",22),e(184," p-custom-action"),o(185,"br"),t()()(),n(186,"td",17)(187,"code",25),e(188,"PoProgressAction"),t()(),n(189,"td",19),e(190,"-"),t(),n(191,"td",20)(192,"em")(193,"strong"),e(194,"(opcional)"),t()(),n(195,"p"),e(196,"Define uma a\xE7\xE3o personalizada no componente "),n(197,"code"),e(198,"po-upload"),t(),e(199,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(200,"p"),e(201,"A a\xE7\xE3o deve implementar a interface "),n(202,"strong"),e(203,"PoProgressAction"),t(),e(204,", permitindo configurar propriedades como:"),t(),n(205,"ul")(206,"li")(207,"code"),e(208,"label"),t(),e(209,": Texto do bot\xE3o."),t(),n(210,"li")(211,"code"),e(212,"icon"),t(),e(213,": \xCDcone a ser exibido no bot\xE3o."),t(),n(214,"li")(215,"code"),e(216,"type"),t(),e(217,": Tipo de bot\xE3o (ex.: "),n(218,"code"),e(219,"danger"),t(),e(220," ou "),n(221,"code"),e(222,"default"),t(),e(223,")."),t(),n(224,"li")(225,"code"),e(226,"disabled"),t(),e(227,": Indica se o bot\xE3o deve estar desabilitado."),t(),n(228,"li")(229,"code"),e(230,"visible"),t(),e(231,": Indica se o bot\xE3o deve estar vis\xEDvel."),t()(),n(232,"p")(233,"strong"),e(234,"Exemplo de uso:"),t()(),n(235,"pre")(236,"code",26),e(237,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),t()(),n(238,"pre")(239,"code",27),e(240,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),t()()()(),n(241,"tr",13)(242,"td",14)(243,"div",15)(244,"span",16),e(245," (p-custom-action-click)"),o(246,"br"),t()()(),n(247,"td",17)(248,"code",18),e(249,"EventEmitter"),t()(),n(250,"td",19),e(251,"-"),t(),n(252,"td",20)(253,"em")(254,"strong"),e(255,"(opcional)"),t()(),n(256,"p"),e(257,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(258,"code"),e(259,"p-custom-action"),t(),e(260,"."),t(),n(261,"p"),e(262,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(263,"p")(264,"strong"),e(265,"Exemplo de uso:"),t()(),n(266,"pre")(267,"code",26),e(268,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),t()(),n(269,"pre")(270,"code",27),e(271,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
  // L\xF3gica para download do arquivo
  this.downloadFile(file);
}

downloadFile(file: PoUploadFile) {
  // Exemplo de download
  console.log(\`Iniciando o download do arquivo: \${file.name}\`);
}
`),t()()()(),n(272,"tr",13)(273,"td",14)(274,"div",21)(275,"span",22),e(276," p-directory"),o(277,"br"),t()()(),n(278,"td",17)(279,"code",24),e(280,"boolean"),t()(),n(281,"td",19)(282,"p")(283,"code"),e(284,"false"),t()()(),n(285,"td",20)(286,"em")(287,"strong"),e(288,"(opcional)"),t()(),n(289,"p"),e(290,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(291,"blockquote")(292,"p"),e(293,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(294,"blockquote")(295,"p"),e(296,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(297,"strong"),e(298,"Internet Explorer"),t(),e(299,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()()()(),n(300,"tr",13)(301,"td",14)(302,"div",21)(303,"span",22),e(304," p-disabled"),o(305,"br"),t()()(),n(306,"td",17)(307,"code",24),e(308,"boolean"),t()(),n(309,"td",19),e(310,"-"),t(),n(311,"td",20)(312,"em")(313,"strong"),e(314,"(opcional)"),t()(),n(315,"p"),e(316,"Indica que o campo ser\xE1 desabilitado."),t()()(),n(317,"tr",13)(318,"td",14)(319,"div",21)(320,"span",22),e(321," p-disabled-remove-file"),o(322,"br"),t()()(),n(323,"td",17)(324,"code",24),e(325,"boolean"),t()(),n(326,"td",19)(327,"p")(328,"code"),e(329,"false"),t()()(),n(330,"td",20)(331,"em")(332,"strong"),e(333,"(opcional)"),t()(),n(334,"p"),e(335,"Desabilita bot\xE3o de remover o(s) arquivo(s) selecionado(s)."),t()()(),n(336,"tr",13)(337,"td",14)(338,"div",21)(339,"span",22),e(340," p-drag-drop"),o(341,"br"),t()()(),n(342,"td",17)(343,"code",24),e(344,"boolean"),t()(),n(345,"td",19)(346,"p")(347,"code"),e(348,"false"),t()()(),n(349,"td",20)(350,"em")(351,"strong"),e(352,"(opcional)"),t()(),n(353,"p"),e(354,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(355,"blockquote")(356,"p"),e(357,"Recomendamos utilizar apenas um "),n(358,"code"),e(359,"po-upload"),t(),e(360," com esta funcionalidade por tela."),t()()()(),n(361,"tr",13)(362,"td",14)(363,"div",21)(364,"span",22),e(365," p-drag-drop-height"),o(366,"br"),t()()(),n(367,"td",17)(368,"code",28),e(369,"number"),t()(),n(370,"td",19)(371,"p")(372,"code"),e(373,"320"),t()()(),n(374,"td",20)(375,"em")(376,"strong"),e(377,"(opcional)"),t()(),n(378,"p"),e(379,"Define em "),n(380,"em"),e(381,"pixels"),t(),e(382," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(383,"code"),e(384,"160px"),t(),e(385,"."),t(),n(386,"blockquote")(387,"p"),e(388,"Esta propriedade funciona somente se a propriedade "),n(389,"code"),e(390,"p-drag-drop"),t(),e(391," estiver habilitada."),t()()()(),n(392,"tr",13)(393,"td",14)(394,"div",21)(395,"span",22),e(396," p-restrictions"),o(397,"br"),t()()(),n(398,"td",17)(399,"code",29),e(400,"PoUploadFileRestrictions"),t()(),n(401,"td",19),e(402,"-"),t(),n(403,"td",20)(404,"em")(405,"strong"),e(406,"(opcional)"),t()(),n(407,"p"),e(408,"Objeto que segue a defini\xE7\xE3o da interface "),n(409,"code"),e(410,"PoUploadFileRestrictions"),t(),e(411,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t()()(),n(412,"tr",13)(413,"td",14)(414,"div",21)(415,"span",22),e(416," p-form-field"),o(417,"br"),t()()(),n(418,"td",17)(419,"code",23),e(420,"string"),t()(),n(421,"td",19)(422,"p")(423,"code"),e(424,"files"),t()()(),n(425,"td",20)(426,"em")(427,"strong"),e(428,"(opcional)"),t()(),n(429,"p"),e(430,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(431,"code"),e(432,"p-url"),t(),e(433,"."),t()()(),n(434,"tr",13)(435,"td",14)(436,"div",21)(437,"span",22),e(438," p-headers"),o(439,"br"),t()()(),n(440,"td",17)(441,"code",30),e(442,"{ [name: string]: string "),t(),n(443,"code",31),e(444,` Array<string>;
}`),t()(),n(445,"td",19),e(446,"-"),t(),n(447,"td",20)(448,"p"),e(449,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t()()(),n(450,"tr",13)(451,"td",14)(452,"div",21)(453,"span",22),e(454," p-help"),o(455,"br"),t()()(),n(456,"td",17)(457,"code",23),e(458,"string"),t()(),n(459,"td",19),e(460,"-"),t(),n(461,"td",20)(462,"em")(463,"strong"),e(464,"(opcional)"),t()(),n(465,"p"),e(466,"Texto de apoio para o campo."),t()()(),n(467,"tr",13)(468,"td",14)(469,"div",21)(470,"span",22),e(471," p-hide-restrictions-info"),o(472,"br"),t()()(),n(473,"td",17)(474,"code",24),e(475,"boolean"),t()(),n(476,"td",19)(477,"p")(478,"code"),e(479,"false"),t()()(),n(480,"td",20)(481,"em")(482,"strong"),e(483,"(opcional)"),t()(),n(484,"p"),e(485,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t()()(),n(486,"tr",13)(487,"td",14)(488,"div",21)(489,"span",22),e(490," p-hide-select-button"),o(491,"br"),t()()(),n(492,"td",17)(493,"code",24),e(494,"boolean"),t()(),n(495,"td",19)(496,"p")(497,"code"),e(498,"false"),t()()(),n(499,"td",20)(500,"em")(501,"strong"),e(502,"(opcional)"),t()(),n(503,"p"),e(504,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(505,"blockquote")(506,"p"),e(507,"Caso o valor definido seja "),n(508,"code"),e(509,"true"),t(),e(510,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(511,"code"),e(512,"selectFiles()"),t(),e(513," para sele\xE7\xE3o de arquivos."),t()()()(),n(514,"tr",13)(515,"td",14)(516,"div",21)(517,"span",22),e(518," p-hide-send-button"),o(519,"br"),t()()(),n(520,"td",17)(521,"code",24),e(522,"boolean"),t()(),n(523,"td",19)(524,"p")(525,"code"),e(526,"false"),t()()(),n(527,"td",20)(528,"em")(529,"strong"),e(530,"(opcional)"),t()(),n(531,"p"),e(532,"Omite o bot\xE3o de envio de arquivos."),t(),n(533,"blockquote")(534,"p"),e(535,"Caso o valor definido seja "),n(536,"code"),e(537,"true"),t(),e(538,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(539,"code"),e(540,"sendFiles()"),t(),e(541," para envio do(s) arquivo(s) selecionado(s)."),t()()()(),n(542,"tr",13)(543,"td",14)(544,"div",21)(545,"span",22),e(546," p-multiple"),o(547,"br"),t()()(),n(548,"td",17)(549,"code",24),e(550,"boolean"),t()(),n(551,"td",19),e(552,"-"),t(),n(553,"td",20)(554,"em")(555,"strong"),e(556,"(opcional)"),t()(),n(557,"p"),e(558,"Define se pode selecionar mais de um arquivo."),t(),n(559,"blockquote")(560,"p"),e(561,"Se utilizada a "),n(562,"code"),e(563,"p-directory"),t(),e(564,", habilita-se automaticamente esta propriedade."),t()()()(),n(565,"tr",13)(566,"td",14)(567,"div",15)(568,"span",16),e(569," (p-keydown)"),o(570,"br"),t()()(),n(571,"td",17)(572,"code",18),e(573,"EventEmitter"),t()(),n(574,"td",19),e(575,"-"),t(),n(576,"td",20)(577,"em")(578,"strong"),e(579,"(opcional)"),t()(),n(580,"p"),e(581,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(582,"code"),e(583,"KeyboardEvent"),t(),e(584," com informa\xE7\xF5es sobre a tecla."),t()()(),n(585,"tr",13)(586,"td",14)(587,"div",21)(588,"span",22),e(589," p-label"),o(590,"br"),t()()(),n(591,"td",17)(592,"code",23),e(593,"string"),t()(),n(594,"td",19),e(595,"-"),t(),n(596,"td",20)(597,"em")(598,"strong"),e(599,"(opcional)"),t()(),n(600,"p"),e(601,"R\xF3tulo do campo."),t()()(),n(602,"tr",13)(603,"td",14)(604,"div",21)(605,"span",22),e(606," p-literals"),o(607,"br"),t()()(),n(608,"td",17)(609,"code",32),e(610,"PoUploadLiterals"),t()(),n(611,"td",19),e(612,"-"),t(),n(613,"td",20)(614,"em")(615,"strong"),e(616,"(opcional)"),t()(),n(617,"p"),e(618,"Objeto com as literais usadas no "),n(619,"code"),e(620,"po-upload"),t(),e(621,"."),t(),n(622,"p"),e(623,"Existem duas maneiras de customizar o componente:"),t(),n(624,"ul")(625,"li"),e(626,"passando um objeto implementando a interface "),n(627,"code"),e(628,"PoUploadLiterals"),t(),e(629," com todas as literais dispon\xEDveis;"),t(),n(630,"li"),e(631,"passando apenas as literais que deseja customizar:"),n(632,"pre")(633,"code"),e(634,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),t()()()(),n(635,"p"),e(636,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),t(),n(637,"pre")(638,"code"),e(639,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),t()(),n(640,"blockquote")(641,"p"),e(642,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),n(643,"em"),e(644,"browser"),t(),e(645," (pt, en, es, ru)."),t()()()(),n(646,"tr",13)(647,"td",14)(648,"div",21)(649,"span",22),e(650," name"),o(651,"br"),t()()(),n(652,"td",17)(653,"code",23),e(654,"string"),t()(),n(655,"td",19),e(656,"-"),t(),n(657,"td",20)(658,"p"),e(659,"Define o valor do atributo "),n(660,"code"),e(661,"name"),t(),e(662," do componente."),t()()(),n(663,"tr",13)(664,"td",14)(665,"div",15)(666,"span",16),e(667," (ngModelChange)"),o(668,"br"),t()()(),n(669,"td",17)(670,"code",18),e(671,"EventEmitter"),t()(),n(672,"td",19),e(673,"-"),t(),n(674,"td",20)(675,"em")(676,"strong"),e(677,"(opcional)"),t()(),n(678,"p"),e(679,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da "),n(680,"em"),e(681,"tag"),t(),n(682,"code"),e(683,"form"),t(),e(684,"."),t(),n(685,"p"),e(686,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),n(687,"code"),e(688,"strictTemplates"),t(),e(689,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),n(690,"pre")(691,"code"),e(692,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),t()()()(),n(693,"tr",13)(694,"td",14)(695,"div",15)(696,"span",16),e(697," (p-error)"),o(698,"br"),t()()(),n(699,"td",17)(700,"code",18),e(701,"EventEmitter"),t()(),n(702,"td",19),e(703,"-"),t(),n(704,"td",20)(705,"em")(706,"strong"),e(707,"(opcional)"),t()(),n(708,"p"),e(709,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(710,"blockquote")(711,"p"),e(712,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(713,"code"),e(714,"HttpErrorResponse"),t(),e(715,"."),t()()()(),n(716,"tr",13)(717,"td",14)(718,"div",15)(719,"span",16),e(720," (p-success)"),o(721,"br"),t()()(),n(722,"td",17)(723,"code",18),e(724,"EventEmitter"),t()(),n(725,"td",19),e(726,"-"),t(),n(727,"td",20)(728,"em")(729,"strong"),e(730,"(opcional)"),t()(),n(731,"p"),e(732,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(733,"blockquote")(734,"p"),e(735,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(736,"code"),e(737,"HttpResponse"),t(),e(738,"."),t()()()(),n(739,"tr",13)(740,"td",14)(741,"div",15)(742,"span",16),e(743," (p-upload)"),o(744,"br"),t()()(),n(745,"td",17)(746,"code",18),e(747,"EventEmitter"),t()(),n(748,"td",19),e(749,"-"),t(),n(750,"td",20)(751,"em")(752,"strong"),e(753,"(opcional)"),t()(),n(754,"p"),e(755,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(756,"blockquote")(757,"p"),e(758,"data, nesta propriedade pode ser informado algum dado"),t()(),n(759,"pre")(760,"code"),e(761,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(762,"blockquote")(763,"p"),e(764,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),n(765,"code"),e(766,"data"),t(),e(767,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),t()(),n(768,"pre")(769,"code"),e(770,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),t()()()(),n(771,"tr",13)(772,"td",14)(773,"div",21)(774,"span",22),e(775," p-optional"),o(776,"br"),t()()(),n(777,"td",17)(778,"code",24),e(779,"boolean"),t()(),n(780,"td",19)(781,"p")(782,"code"),e(783,"false"),t()()(),n(784,"td",20)(785,"em")(786,"strong"),e(787,"(opcional)"),t()(),n(788,"p"),e(789,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(790,"blockquote")(791,"p"),e(792,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(793,"ul")(794,"li"),e(795,"O campo conter "),n(796,"code"),e(797,"p-required"),t(),e(798,";"),t(),n(799,"li"),e(800,"N\xE3o possuir "),n(801,"code"),e(802,"p-help"),t(),e(803," e/ou "),n(804,"code"),e(805,"p-label"),t(),e(806,"."),t()()()(),n(807,"tr",13)(808,"td",14)(809,"div",21)(810,"span",22),e(811," p-required"),o(812,"br"),t()()(),n(813,"td",17)(814,"code",24),e(815,"boolean"),t()(),n(816,"td",19)(817,"p")(818,"code"),e(819,"false"),t()()(),n(820,"td",20)(821,"em")(822,"strong"),e(823,"(opcional)"),t()(),n(824,"p"),e(825,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(826,"tr",13)(827,"td",14)(828,"div",21)(829,"span",22),e(830," p-required-url"),o(831,"br"),t()()(),n(832,"td",17)(833,"code",24),e(834,"boolean"),t()(),n(835,"td",19)(836,"p")(837,"code"),e(838,"true"),t()()(),n(839,"td",20)(840,"em")(841,"strong"),e(842,"(opcional)"),t()(),n(843,"p"),e(844,"Define se a propriedade "),n(845,"code"),e(846,"p-url"),t(),e(847," \xE9 obrigat\xF3ria."),t(),n(848,"p"),e(849,"Caso a propriedade seja definida como "),n(850,"code"),e(851,"false"),t(),e(852,":"),t(),n(853,"ul")(854,"li"),e(855,'o bot\xE3o de "Selecionar arquivo" ficar\xE1 habilitado mesmo sem a propriedade '),n(856,"code"),e(857,"p-url"),t(),e(858," definida."),t(),n(859,"li"),e(860,'o bot\xE3o "Iniciar envio" ficar\xE1 oculto at\xE9 que a propriedade '),n(861,"code"),e(862,"p-url"),t(),e(863," seja definida."),t()(),n(864,"blockquote")(865,"p"),e(866,"Se utilizada com a propriedade "),n(867,"code"),e(868,"p-auto-upload"),t(),e(869," definida como "),n(870,"code"),e(871,"true"),t(),e(872," ser\xE1 necess\xE1rio definir a propriedade "),n(873,"code"),e(874,"p-url"),t(),e(875,"."),t()()()(),n(876,"tr",13)(877,"td",14)(878,"div",21)(879,"span",22),e(880," p-show-required"),o(881,"br"),t()()(),n(882,"td",17)(883,"code",24),e(884,"boolean"),t()(),n(885,"td",19),e(886,"-"),t(),n(887,"td",20)(888,"p"),e(889,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(890,"blockquote")(891,"p"),e(892,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(893,"ul")(894,"li"),e(895,"N\xE3o possuir "),n(896,"code"),e(897,"p-help"),t(),e(898," e/ou "),n(899,"code"),e(900,"p-label"),t(),e(901,"."),t()()()(),n(902,"tr",13)(903,"td",14)(904,"div",21)(905,"span",22),e(906," p-size"),o(907,"br"),t()()(),n(908,"td",17)(909,"code",23),e(910,"string"),t()(),n(911,"td",19)(912,"p")(913,"code"),e(914,"medium"),t()()(),n(915,"td",20)(916,"em")(917,"strong"),e(918,"(opcional)"),t()(),n(919,"p"),e(920,"Define o tamanho e as a\xE7\xF5es do componente:"),t(),n(921,"ul")(922,"li")(923,"code"),e(924,"small"),t(),e(925,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(926,"li")(927,"code"),e(928,"medium"),t(),e(929,": altura do button como 44px."),t()(),n(930,"blockquote")(931,"p"),e(932,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(933,"code"),e(934,"medium"),t(),e(935,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(936,"a",33),e(937,"po-theme"),t(),e(938,"."),t()()()(),n(939,"tr",13)(940,"td",14)(941,"div",21)(942,"span",22),e(943," p-url"),o(944,"br"),t()()(),n(945,"td",17)(946,"code",23),e(947,"string"),t()(),n(948,"td",19),e(949,"-"),t(),n(950,"td",20)(951,"p"),e(952,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t()()()(),n(953,"h3",9),e(954,"M\xE9todos"),t(),n(955,"table",34)(956,"tr",13)(957,"th",35)(958,"div",21)(959,"h4")(960,"span",22),e(961," clear "),t()()()()(),n(962,"tr",20)(963,"td",20)(964,"p"),e(965,"M\xE9todo respons\xE1vel por "),n(966,"strong"),e(967,"limpar"),t(),e(968," o(s) arquivo(s) selecionado(s)."),t()()()(),o(969,"br"),n(970,"table",34)(971,"tr",13)(972,"th",35)(973,"div",21)(974,"h4")(975,"span",22),e(976," focus "),t()()()()(),n(977,"tr",20)(978,"td",20)(979,"p"),e(980,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(981,"p"),e(982,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(983,"pre")(984,"code"),e(985,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),t()()()()(),o(986,"br"),n(987,"table",34)(988,"tr",13)(989,"th",35)(990,"div",21)(991,"h4")(992,"span",22),e(993," selectFiles "),t()()()()(),n(994,"tr",20)(995,"td",20)(996,"p"),e(997,"M\xE9todo respons\xE1vel por "),n(998,"strong"),e(999,"abrir"),t(),e(1e3," a janela para sele\xE7\xE3o de arquivo(s)."),t()()()(),o(1001,"br"),n(1002,"table",34)(1003,"tr",13)(1004,"th",35)(1005,"div",21)(1006,"h4")(1007,"span",22),e(1008," sendFiles "),t()()()()(),n(1009,"tr",20)(1010,"td",20)(1011,"p"),e(1012,"M\xE9todo respons\xE1vel por "),n(1013,"strong"),e(1014,"enviar"),t(),e(1015," o(s) arquivo(s) selecionado(s)."),t()()()(),o(1016,"br"),n(1017,"table",34)(1018,"tr",13)(1019,"th",35)(1020,"div",21)(1021,"h4")(1022,"span",22),e(1023," showAdditionalHelp "),t()()()()(),n(1024,"tr",20)(1025,"td",20)(1026,"p"),e(1027,"M\xE9todo que exibe "),n(1028,"code"),e(1029,"p-additionalHelpTooltip"),t(),e(1030," ou executa a a\xE7\xE3o definida em "),n(1031,"code"),e(1032,"p-additionalHelp"),t(),e(1033,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1034,"code"),e(1035,"p-keydown"),t(),e(1036,"."),t(),n(1037,"pre")(1038,"code"),e(1039,`<po-upload
 #upload
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),t()(),n(1040,"pre")(1041,"code"),e(1042,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1043,"br"),n(1044,"h3"),e(1045,"Interfaces"),t(),n(1046,"h4",36)(1047,"code",5),e(1048,"PoUploadFileRestrictions"),t()(),n(1049,"div",2)(1050,"p"),e(1051,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),t()(),n(1052,"h4",9),e(1053,"Propriedades"),t(),n(1054,"table",10)(1055,"tr",11)(1056,"th",12),e(1057,"Nome"),t(),n(1058,"th",12),e(1059,"Tipo"),t(),n(1060,"th",12),e(1061,"Descri\xE7\xE3o"),t()(),n(1062,"tr",13)(1063,"td",14)(1064,"div",21)(1065,"span",22),e(1066," allowedExtensions"),o(1067,"br"),t()()(),n(1068,"td",17)(1069,"code",37),e(1070,"Array<string>"),t()(),n(1071,"td",20)(1072,"em")(1073,"strong"),e(1074,"(opcional)"),t()(),n(1075,"p"),e(1076,"Extens\xF5es permitidas de arquivos que ser\xE3o enviados ao servidor, devendo ser informada uma cole\xE7\xE3o de extens\xF5es, por exemplo:"),t(),n(1077,"pre")(1078,"code"),e(1079,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),t()()()(),n(1080,"tr",13)(1081,"td",14)(1082,"div",21)(1083,"span",22),e(1084," maxFileSize"),o(1085,"br"),t()()(),n(1086,"td",17)(1087,"code",28),e(1088,"number"),t()(),n(1089,"td",20)(1090,"em")(1091,"strong"),e(1092,"(opcional)"),t()(),n(1093,"p"),e(1094,"Tamanho m\xE1ximo do arquivo a ser enviado ao servidor."),t(),n(1095,"p"),e(1096,"Deve ser informado um valor em "),n(1097,"em"),e(1098,"bytes"),t(),e(1099,", por exemplo: "),n(1100,"code"),e(1101,"31457280"),t(),e(1102," (30MB)."),t(),n(1103,"blockquote")(1104,"p"),e(1105,"Por padr\xE3o o valor \xE9 "),n(1106,"code"),e(1107,"30 MB"),t(),e(1108,"."),t()()()(),n(1109,"tr",13)(1110,"td",14)(1111,"div",21)(1112,"span",22),e(1113," maxFiles"),o(1114,"br"),t()()(),n(1115,"td",17)(1116,"code",28),e(1117,"number"),t()(),n(1118,"td",20)(1119,"em")(1120,"strong"),e(1121,"(opcional)"),t()(),n(1122,"p"),e(1123,"Quantidade m\xE1xima de arquivos para o "),n(1124,"em"),e(1125,"upload"),t(),e(1126,"."),t(),n(1127,"blockquote")(1128,"p"),e(1129,"Esta propriedade ser\xE1 v\xE1lida somente se a propriedade "),n(1130,"code"),e(1131,"p-multiple"),t(),e(1132," estiver habilitada e seu valor for maior do que zero."),t()()()(),n(1133,"tr",13)(1134,"td",14)(1135,"div",21)(1136,"span",22),e(1137," minFileSize"),o(1138,"br"),t()()(),n(1139,"td",17)(1140,"code",28),e(1141,"number"),t()(),n(1142,"td",20)(1143,"em")(1144,"strong"),e(1145,"(opcional)"),t()(),n(1146,"p"),e(1147,"Tamanho m\xEDnimo em "),n(1148,"em"),e(1149,"bytes"),t(),e(1150," do arquivo que ser\xE1 enviado ao servidor."),t(),n(1151,"blockquote")(1152,"p"),e(1153,"Por padr\xE3o o valor \xE9 "),n(1154,"code"),e(1155,"0"),t(),e(1156,"."),t()()()()(),n(1157,"h4",36)(1158,"code",5),e(1159,"PoUploadLiterals"),t()(),n(1160,"div",2)(1161,"p"),e(1162,"Interface para defini\xE7\xE3o das literais usadas no "),n(1163,"code"),e(1164,"po-upload"),t(),e(1165,"."),t()(),n(1166,"h4",9),e(1167,"Propriedades"),t(),n(1168,"table",10)(1169,"tr",11)(1170,"th",12),e(1171,"Nome"),t(),n(1172,"th",12),e(1173,"Tipo"),t(),n(1174,"th",12),e(1175,"Descri\xE7\xE3o"),t()(),n(1176,"tr",13)(1177,"td",14)(1178,"div",21)(1179,"span",22),e(1180," dragFilesHere"),o(1181,"br"),t()()(),n(1182,"td",17)(1183,"code",23),e(1184,"string"),t()(),n(1185,"td",20)(1186,"em")(1187,"strong"),e(1188,"(opcional)"),t()(),n(1189,"p"),e(1190,"Texto indicativo para a \xE1rea onde os arquivos devem ser arrastados quando utilizada a propriedade "),n(1191,"code"),e(1192,"p-drag-drop"),t(),e(1193,"."),t()()(),n(1194,"tr",13)(1195,"td",14)(1196,"div",21)(1197,"span",22),e(1198," dragFoldersHere"),o(1199,"br"),t()()(),n(1200,"td",17)(1201,"code",23),e(1202,"string"),t()(),n(1203,"td",20)(1204,"em")(1205,"strong"),e(1206,"(opcional)"),t()(),n(1207,"p"),e(1208,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser arrastados quando utilizada a propriedade "),n(1209,"code"),e(1210,"p-drag-drop"),t(),e(1211,"."),t()()(),n(1212,"tr",13)(1213,"td",14)(1214,"div",21)(1215,"span",22),e(1216," dropFilesHere"),o(1217,"br"),t()()(),n(1218,"td",17)(1219,"code",23),e(1220,"string"),t()(),n(1221,"td",20)(1222,"em")(1223,"strong"),e(1224,"(opcional)"),t()(),n(1225,"p"),e(1226,"Texto indicativo para a \xE1rea onde os arquivos devem ser soltos quando utilizada a propriedade "),n(1227,"code"),e(1228,"p-drag-drop"),t()()()(),n(1229,"tr",13)(1230,"td",14)(1231,"div",21)(1232,"span",22),e(1233," dropFoldersHere"),o(1234,"br"),t()()(),n(1235,"td",17)(1236,"code",23),e(1237,"string"),t()(),n(1238,"td",20)(1239,"em")(1240,"strong"),e(1241,"(opcional)"),t()(),n(1242,"p"),e(1243,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser soltos quando utilizada a propriedade "),n(1244,"code"),e(1245,"p-drag-drop"),t(),e(1246,"."),t()()(),n(1247,"tr",13)(1248,"td",14)(1249,"div",21)(1250,"span",22),e(1251," errorOccurred"),o(1252,"br"),t()()(),n(1253,"td",17)(1254,"code",23),e(1255,"string"),t()(),n(1256,"td",20)(1257,"em")(1258,"strong"),e(1259,"(opcional)"),t()(),n(1260,"p"),e(1261,"Texto a ser exibido quando ocorrer erro no envio do arquivo."),t()()(),n(1262,"tr",13)(1263,"td",14)(1264,"div",21)(1265,"span",22),e(1266," files"),o(1267,"br"),t()()(),n(1268,"td",17)(1269,"code",23),e(1270,"string"),t()(),n(1271,"td",20)(1272,"em")(1273,"strong"),e(1274,"(opcional)"),t()(),n(1275,"p"),e(1276,"Par\xE2metro "),n(1277,"em"),e(1278,"files"),t(),e(1279," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),n(1280,"em"),e(1281,"dragDrop"),t(),e(1282,"."),t()()(),n(1283,"tr",13)(1284,"td",14)(1285,"div",21)(1286,"span",22),e(1287," folders"),o(1288,"br"),t()()(),n(1289,"td",17)(1290,"code",23),e(1291,"string"),t()(),n(1292,"td",20)(1293,"em")(1294,"strong"),e(1295,"(opcional)"),t()(),n(1296,"p"),e(1297,"Par\xE2metro "),n(1298,"em"),e(1299,"folders"),t(),e(1300," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),n(1301,"em"),e(1302,"dragDrop"),t(),e(1303,"."),t()()(),n(1304,"tr",13)(1305,"td",14)(1306,"div",21)(1307,"span",22),e(1308," invalidDropArea"),o(1309,"br"),t()()(),n(1310,"td",17)(1311,"code",23),e(1312,"string"),t()(),n(1313,"td",20)(1314,"em")(1315,"strong"),e(1316,"(opcional)"),t()(),n(1317,"p"),e(1318,"Texto exibido caso o usu\xE1rio arrastar um arquivo para um local inv\xE1lido ao utilizar a op\xE7\xE3o de "),n(1319,"em"),e(1320,"dragDrop"),t(),e(1321,"."),t()()(),n(1322,"tr",13)(1323,"td",14)(1324,"div",21)(1325,"span",22),e(1326," selectFile"),o(1327,"br"),t()()(),n(1328,"td",17)(1329,"code",23),e(1330,"string"),t()(),n(1331,"td",20)(1332,"em")(1333,"strong"),e(1334,"(opcional)"),t()(),n(1335,"p"),e(1336,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos."),t()()(),n(1337,"tr",13)(1338,"td",14)(1339,"div",21)(1340,"span",22),e(1341," selectFiles"),o(1342,"br"),t()()(),n(1343,"td",17)(1344,"code",23),e(1345,"string"),t()(),n(1346,"td",20)(1347,"em")(1348,"strong"),e(1349,"(opcional)"),t()(),n(1350,"p"),e(1351,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),n(1352,"code"),e(1353,"p-multiple"),t(),e(1354,"."),t()()(),n(1355,"tr",13)(1356,"td",14)(1357,"div",21)(1358,"span",22),e(1359," selectFilesOnComputer"),o(1360,"br"),t()()(),n(1361,"td",17)(1362,"code",23),e(1363,"string"),t()(),n(1364,"td",20)(1365,"em")(1366,"strong"),e(1367,"(opcional)"),t()(),n(1368,"p"),e(1369,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),n(1370,"em"),e(1371,"dragDrop"),t(),e(1372,"."),t()()(),n(1373,"tr",13)(1374,"td",14)(1375,"div",21)(1376,"span",22),e(1377," selectFolder"),o(1378,"br"),t()()(),n(1379,"td",17)(1380,"code",23),e(1381,"string"),t()(),n(1382,"td",20)(1383,"em")(1384,"strong"),e(1385,"(opcional)"),t()(),n(1386,"p"),e(1387,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),n(1388,"code"),e(1389,"p-directory"),t(),e(1390,"."),t()()(),n(1391,"tr",13)(1392,"td",14)(1393,"div",21)(1394,"span",22),e(1395," selectFolderOnComputer"),o(1396,"br"),t()()(),n(1397,"td",17)(1398,"code",23),e(1399,"string"),t()(),n(1400,"td",20)(1401,"em")(1402,"strong"),e(1403,"(opcional)"),t()(),n(1404,"p"),e(1405,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),n(1406,"em"),e(1407,"dragDrop"),t(),e(1408,"."),t()()(),n(1409,"tr",13)(1410,"td",14)(1411,"div",21)(1412,"span",22),e(1413," sentWithSuccess"),o(1414,"br"),t()()(),n(1415,"td",17)(1416,"code",23),e(1417,"string"),t()(),n(1418,"td",20)(1419,"em")(1420,"strong"),e(1421,"(opcional)"),t()(),n(1422,"p"),e(1423,"Texto a ser exibido quando o envio do arquivo for realizado com sucesso."),t()()(),n(1424,"tr",13)(1425,"td",14)(1426,"div",21)(1427,"span",22),e(1428," startSending"),o(1429,"br"),t()()(),n(1430,"td",17)(1431,"code",23),e(1432,"string"),t()(),n(1433,"td",20)(1434,"em")(1435,"strong"),e(1436,"(opcional)"),t()(),n(1437,"p"),e(1438,"Texto exibido no label do bot\xE3o para iniciar o envio dos arquivos."),t()()()(),n(1439,"h4",36)(1440,"code",5),e(1441,"PoProgressAction"),t()(),n(1442,"div",2)(1443,"p"),e(1444,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),t()(),n(1445,"h4",9),e(1446,"Propriedades"),t(),n(1447,"table",10)(1448,"tr",11)(1449,"th",12),e(1450,"Nome"),t(),n(1451,"th",12),e(1452,"Tipo"),t(),n(1453,"th",12),e(1454,"Descri\xE7\xE3o"),t()(),n(1455,"tr",13)(1456,"td",14)(1457,"div",21)(1458,"span",22),e(1459," disabled"),o(1460,"br"),t()()(),n(1461,"td",17)(1462,"code",24),e(1463,"boolean "),t(),n(1464,"code",38),e(1465," Function"),t()(),n(1466,"td",20)(1467,"em")(1468,"strong"),e(1469,"(opcional)"),t()(),n(1470,"p"),e(1471,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),n(1472,"p"),e(1473,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),n(1474,"tr",13)(1475,"td",14)(1476,"div",21)(1477,"span",22),e(1478," icon"),o(1479,"br"),t()()(),n(1480,"td",17)(1481,"code",23),e(1482,"string "),t(),n(1483,"code",39),e(1484," TemplateRef<void>"),t()(),n(1485,"td",20)(1486,"em")(1487,"strong"),e(1488,"(opcional)"),t()(),n(1489,"p"),e(1490,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),n(1491,"p"),e(1492,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(1493,"a",40),e(1494,"Biblioteca de \xEDcones"),t(),e(1495,". conforme exemplo abaixo:"),t(),n(1496,"pre")(1497,"code"),e(1498,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),t()(),n(1499,"p"),e(1500,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),n(1501,"pre")(1502,"code"),e(1503,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),t()(),n(1504,"p"),e(1505,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(1506,"code"),e(1507,"TemplateRef"),t(),e(1508,`, conforme exemplo abaixo:
component.html:`),t(),n(1509,"pre")(1510,"code"),e(1511,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),t()(),n(1512,"p"),e(1513,"component.ts:"),t(),n(1514,"pre")(1515,"code"),e(1516,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),t()()()(),n(1517,"tr",13)(1518,"td",14)(1519,"div",21)(1520,"span",22),e(1521," label"),o(1522,"br"),t()()(),n(1523,"td",17)(1524,"code",23),e(1525,"string"),t()(),n(1526,"td",20)(1527,"em")(1528,"strong"),e(1529,"(opcional)"),t()(),n(1530,"p"),e(1531,"R\xF3tulo da a\xE7\xE3o."),t()()(),n(1532,"tr",13)(1533,"td",14)(1534,"div",21)(1535,"span",22),e(1536," type"),o(1537,"br"),t()()(),n(1538,"td",17)(1539,"code",23),e(1540,"string"),t()(),n(1541,"td",20)(1542,"em")(1543,"strong"),e(1544,"(opcional)"),t()(),n(1545,"p"),e(1546,"Define a cor do item, sendo "),n(1547,"code"),e(1548,"default"),t(),e(1549," o padr\xE3o."),t(),n(1550,"p"),e(1551,"Valores v\xE1lidos:"),t(),n(1552,"ul")(1553,"li")(1554,"code"),e(1555,"default"),t()(),n(1556,"li")(1557,"code"),e(1558,"danger"),t(),e(1559," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),n(1560,"tr",13)(1561,"td",14)(1562,"div",21)(1563,"span",22),e(1564," visible"),o(1565,"br"),t()()(),n(1566,"td",17)(1567,"code",24),e(1568,"boolean "),t(),n(1569,"code",38),e(1570," Function"),t()(),n(1571,"td",20)(1572,"em")(1573,"strong"),e(1574,"(opcional)"),t()(),n(1575,"p"),e(1576,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),n(1577,"blockquote")(1578,"p"),e(1579,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),n(1580,"p"),e(1581,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),n(1582,"ul")(1583,"li")(1584,"p"),e(1585,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),n(1586,"li")(1587,"p"),e(1588,"Informar diretamente um valor booleano."),t()()()()()()())},dependencies:[y],encapsulation:2})}return l})();var Le=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(T(pe),T(de))};static \u0275cmp=x({type:l,selectors:[["ng-component"]],standalone:!1,decls:10,vars:4,consts:[["p-title","Upload",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-upload-doc"),t(),n(4,"po-tab",3),b("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-upload-basic-view")(6,"sample-po-upload-labs-view")(7,"sample-po-upload-resume-view")(8,"sample-po-upload-rs-view")(9,"sample-po-upload-download-view"),t()()()),r&2&&(E("p-actions",i.actions),s(2),E("p-active",i.activeTab==="doc"),s(2),E("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[xe,w,_,_e,Fe,qe,De,ke,Ve],encapsulation:2})}return l})();var dt=[{path:"",component:Le}],Re=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=G({type:l});static \u0275inj=Q({imports:[$.forChild(dt),$]})}return l})();var jt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=G({type:l});static \u0275inj=Q({imports:[Ce,Re]})}return l})();export{jt as DocPoUploadModule};
