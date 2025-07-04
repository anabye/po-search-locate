import{n as x,o as E,p as X}from"./chunk-R3BKLGLC.js";import{Ab as C,F as $,Ra as K,ha as J,nb as Q,zb as f}from"./chunk-TUTTJOS2.js";import{$a as P,Ac as z,Ba as b,Ea as e,Fa as t,Ga as r,Ka as H,La as c,M as V,Nc as U,Pc as G,R,Rc as A,S as N,T as M,U as _,Xa as o,Za as h,ab as T,bb as w,eb as S,ha as d,ia as q,oa as s,pa as F,ub as v,wc as B,xc as j,ya as p,yc as W,zc as L}from"./chunk-MIQUIDUB.js";var Y=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-code-editor-basic"]],standalone:!1,decls:1,vars:0,template:function(i,a){i&1&&r(0,"po-code-editor")},dependencies:[x],encapsulation:2})}return n})();var ce=n=>({"docs-sample-code-tabs":n}),Z=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-code-editor-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(r(0,"br"),e(1,"blockquote",0)(2,"label",1),o(3,"PO Code Editor Basic"),t(),e(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),r(5,"span"),o(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-code-editor-basic/sample-po-code-editor-basic.component.html"),t(),e(13,"pre",7),o(14,`<po-code-editor></po-code-editor>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-code-editor-basic/sample-po-code-editor-basic.component.ts"),t(),e(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-basic',
  templateUrl: './sample-po-code-editor-basic.component.html',
  standalone: false
})
export class SamplePoCodeEditorBasicComponent {}
`),t()()()()(),e(21,"div",10),r(22,"sample-po-code-editor-basic"),t(),r(23,"hr")),i&2&&(d(5),b("po-icon "+a.sampleCodeButtonIcon),d(),h(" ",a.sampleCodeButtonLabel,""),d(),p("ngClass",S(4,ce,a.hideSampleCodeTabs)))},dependencies:[v,E,f,C,Y],encapsulation:2})}return n})();var ee=(()=>{class n{codeEditor;language;properties;theme;languageOptions=[{label:"java",value:"java"},{label:"yaml",value:"yaml"},{label:"typescript",value:"typescript"}];propertiesOptions=[{value:"readonly",label:"Read Only"}];themeOptions=[{label:"vs",value:"vs"},{label:"vs-dark",value:"vs-dark"},{label:"hc-black",value:"hc-black"}];ngOnInit(){this.restore()}restore(){this.language="",this.theme="",this.properties=[],this.codeEditor=""}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-code-editor-labs"]],standalone:!1,decls:12,vars:10,consts:[["f","ngForm"],[1,"po-row"],["p-height","300",1,"po-md-12",3,"ngModelChange","ngModel","p-language","p-readonly","p-theme"],["name","language","p-label","Language",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","theme","p-label","Theme",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,a){if(i&1){let u=H();e(0,"div",1)(1,"po-code-editor",2),w("ngModelChange",function(m){return M(u),T(a.codeEditor,m)||(a.codeEditor=m),_(m)}),t()(),r(2,"hr"),e(3,"form",null,0)(5,"div",1)(6,"po-select",3),w("ngModelChange",function(m){return M(u),T(a.language,m)||(a.language=m),_(m)}),t(),e(7,"po-select",4),w("ngModelChange",function(m){return M(u),T(a.theme,m)||(a.theme=m),_(m)}),t()(),e(8,"div",1)(9,"po-checkbox-group",5),w("ngModelChange",function(m){return M(u),T(a.properties,m)||(a.properties=m),_(m)}),t()(),e(10,"div",1)(11,"po-button",6),c("p-click",function(){return M(u),_(a.restore())}),t()()()}i&2&&(d(),P("ngModel",a.codeEditor),p("p-language",a.language)("p-readonly",a.properties.includes("readonly"))("p-theme",a.theme),d(5),P("ngModel",a.language),p("p-options",a.languageOptions),d(),P("ngModel",a.theme),p("p-options",a.themeOptions),d(2),P("ngModel",a.properties),p("p-options",a.propertiesOptions))},dependencies:[z,B,j,L,W,$,J,K,x],encapsulation:2})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),te=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-code-editor-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(r(0,"br"),e(1,"blockquote",0)(2,"label",1),o(3,"PO Code Editor Labs"),t(),e(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),r(5,"span"),o(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-code-editor-labs/sample-po-code-editor-labs.component.html"),t(),e(13,"pre",7),o(14,`<div class="po-row">
  <po-code-editor
    class="po-md-12"
    [(ngModel)]="codeEditor"
    p-height="300"
    [p-language]="language"
    [p-readonly]="properties.includes('readonly')"
    [p-theme]="theme"
  >
  </po-code-editor>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-select class="po-md-6" name="language" [(ngModel)]="language" p-label="Language" [p-options]="languageOptions">
    </po-select>

    <po-select class="po-md-6" name="theme" [(ngModel)]="theme" p-label="Theme" [p-options]="themeOptions"> </po-select>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-code-editor-labs/sample-po-code-editor-labs.component.ts"),t(),e(19,"pre",9),o(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-code-editor-labs',
  templateUrl: './sample-po-code-editor-labs.component.html',
  standalone: false
})
export class SamplePoCodeEditorLabsComponent implements OnInit {
  codeEditor: string;
  language: string;
  properties: Array<string>;
  theme: string;

  public readonly languageOptions: Array<PoSelectOption> = [
    { label: 'java', value: 'java' },
    { label: 'yaml', value: 'yaml' },
    { label: 'typescript', value: 'typescript' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'readonly', label: 'Read Only' }];

  public readonly themeOptions: Array<PoSelectOption> = [
    { label: 'vs', value: 'vs' },
    { label: 'vs-dark', value: 'vs-dark' },
    { label: 'hc-black', value: 'hc-black' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.language = '';
    this.theme = '';
    this.properties = [];
    this.codeEditor = '';
  }
}
`),t()()()()(),e(21,"div",10),r(22,"sample-po-code-editor-labs"),t(),r(23,"hr")),i&2&&(d(5),b("po-icon "+a.sampleCodeButtonIcon),d(),h(" ",a.sampleCodeButtonLabel,""),d(),p("ngClass",S(4,Ce,a.hideSampleCodeTabs)))},dependencies:[v,E,f,C,ee],encapsulation:2})}return n})();var oe=(()=>{class n{code=[`class Calc {
  sumValues(firstValue: any, secondValue: any): any {
    const result = firstValue + secondValue;
    return result;
  }
  subtractValues(firstValue: any, secondValue: any): any {
    const result = firstValue - secondValue;
    return result;
  }
}`,`class Calculator {

  sum(firstValue: number, secondValue: number): number {
    return firstValue + secondValue;
  }

  subtract(firstValue: number, secondValue: number): number {
    return firstValue - secondValue;
  }
}
`];static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-code-editor-diff"]],standalone:!1,decls:2,vars:1,consts:[[1,"po-row"],["p-height","300","p-language","typescript","p-show-diff","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(i,a){i&1&&(e(0,"div",0)(1,"po-code-editor",1),w("ngModelChange",function(y){return T(a.code,y)||(a.code=y),y}),t()()),i&2&&(d(),P("ngModel",a.code))},dependencies:[B,L,x],encapsulation:2})}return n})();var he=n=>({"docs-sample-code-tabs":n}),ne=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-code-editor-diff-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(r(0,"br"),e(1,"blockquote",0)(2,"label",1),o(3,"PO Code Editor - Diff"),t(),e(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),r(5,"span"),o(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-code-editor-diff/sample-po-code-editor-diff.component.html"),t(),e(13,"pre",7),o(14,`<div class="po-row">
  <po-code-editor class="po-md-12" [(ngModel)]="code" p-height="300" p-language="typescript" p-show-diff>
  </po-code-editor>
</div>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-code-editor-diff/sample-po-code-editor-diff.component.ts"),t(),e(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-diff',
  templateUrl: './sample-po-code-editor-diff.component.html',
  standalone: false
})
export class SamplePoCodeEditorDiffComponent {
  code = [
    \`class Calc {
  sumValues(firstValue: any, secondValue: any): any {
    const result = firstValue + secondValue;
    return result;
  }
  subtractValues(firstValue: any, secondValue: any): any {
    const result = firstValue - secondValue;
    return result;
  }
}\`,
    \`class Calculator {

  sum(firstValue: number, secondValue: number): number {
    return firstValue + secondValue;
  }

  subtract(firstValue: number, secondValue: number): number {
    return firstValue - secondValue;
  }
}
\`
  ];
}
`),t()()()()(),e(21,"div",10),r(22,"sample-po-code-editor-diff"),t(),r(23,"hr")),i&2&&(d(5),b("po-icon "+a.sampleCodeButtonIcon),d(),h(" ",a.sampleCodeButtonLabel,""),d(),p("ngClass",S(4,he,a.hideSampleCodeTabs)))},dependencies:[v,E,f,C,oe],encapsulation:2})}return n})();var ie=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-code-editor-terraform"]],standalone:!1,decls:2,vars:0,consts:[[1,"po-row"],["p-height","300","p-language","terraform",1,"po-md-12"]],template:function(i,a){i&1&&(e(0,"div",0),r(1,"po-code-editor",1),t())},dependencies:[x],encapsulation:2})}return n})();var xe=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-code-editor-terraform-view"]],standalone:!1,decls:32,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(r(0,"br"),e(1,"blockquote",0)(2,"label",1),o(3,"PO Code Editor - Terraform"),t(),e(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),r(5,"span"),o(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.html"),t(),e(13,"pre",7),o(14,`<div class="po-row">
  <po-code-editor class="po-md-12" p-height="300" p-language="terraform"> </po-code-editor>
</div>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.component.ts"),t(),e(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-terraform',
  templateUrl: './sample-po-code-editor-terraform.component.html',
  standalone: false
})
export class SamplePoCodeEditorTerraformComponent {}
`),t(),e(21,"label",6),o(22,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.constant.ts"),t(),e(23,"pre",9),o(24,`import { PoCodeEditorRegisterableSuggestion } from '@po-ui/ng-code-editor';
import { PoCodeEditorRegisterable } from '@po-ui/ng-code-editor';

declare const monaco: any;

/** Defini\xE7\xE3o da lista de sugest\xF5es para o autocomplete.
 *
 * > A fun\xE7\xE3o \`provideCompletionItems\` precisa ser exportada para ser compat\xEDvel com AOT.
 *
 * Documenta\xE7\xE3o: https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-languages
 */
export function provideCompletionItems() {
  const suggestions: Array<PoCodeEditorRegisterableSuggestion> = [
    {
      label: 'terraform',
      insertText: '#terraform language'
    },
    {
      label: 'server',
      insertText: 'server \${1:ip}'
    }
  ];

  return { suggestions };
}

/** Definindo propriedades de uma nova sintaxe. */
export const customRegister: PoCodeEditorRegisterable = {
  language: 'terraform',
  options: {
    ignoreCase: false,
    keywords: ['resource', 'provider', 'variable', 'output', 'module', 'true', 'false'],
    operators: ['{', '}', '(', ')', '[', ']', '?', ':'],
    symbols: new RegExp('[=><!~?:&|+\\\\-*\\\\/\\\\^%]+'),
    escapes: new RegExp(\`\\\\\\\\(?:[abfnrtv\\\\\\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})\`),
    tokenizer: {
      root: [
        [\`[a-z_$][\\\\w$]*\`, { cases: { '@keywords': 'keyword', '@default': 'identifier' } }],
        { include: '@whitespace' },
        [\`\\\\d*\\\\.\\\\d+([eE][\\\\-+]?\\\\d+)?\`, 'number.float'],
        [\`0[x][0-9a-fA-F]+\`, 'number.hex'],
        [\`\\\\d+\`, 'number'],
        [\`[;,.]\`, 'delimiter'],
        [\`\\"([^\\"\\\\\\\\]|\\\\\\\\.)*$\`, 'string.invalid'],
        [\`\\"\`, { token: 'string.quote', bracket: '@open', next: '@string' }],
        [\`'[^\\\\\\\\']'\`, 'string'],
        [\`'\`, 'string.invalid']
      ],
      comment: [
        [\`[^\\\\/*]+\`, 'comment'],
        [\`[\\\\/*]\`, 'comment'],
        [\`[\\\\#.*]\`, 'comment']
      ],
      string: [
        [\`[^\\\\\\\\\\"\\\\$]+\`, 'string'],
        [\`\\\\$\`, 'string.interpolated', '@interpolated'],
        [\`\\\\\\\\.\`, 'string.escape.invalid'],
        [\`\\"\`, { token: 'string.quote', bracket: '@close', next: '@pop' }]
      ],
      whitespace: [
        [\`[ \\\\t\\\\r\\\\n]+\`, 'white'],
        [\`\\\\/\\\\/.*$\`, 'comment'],
        [\`\\\\#.*$\`, 'comment']
      ],
      interpolated: [
        [\`[{]\`, { token: 'string.escape.curly', switchTo: '@interpolated_compound' }],
        ['', '', '@pop']
      ]
    }
  },
  suggestions: { provideCompletionItems: provideCompletionItems }
};
`),t(),e(25,"label",6),o(26,"sample-po-code-editor-terraform/sample-po-code-editor-terraform.module.ts"),t(),e(27,"pre",9),o(28,`/**
 * Exemplo de configura\xE7\xE3o de um m\xF3dulo com forRegister.
 */

// import { NgModule } from '@angular/core';
// import { PoCodeEditorModule } from '@po-ui/ng-code-editor';
//
//
// @NgModule({
//   imports: [
//     PoModule,
//     PoCodeEditorModule.forRegister(customRegister)
//   ],
//   declarations: [
//   ],
//   exports: [],
//   providers: []
// })
// export class SamplePoCodeEditorRegisterModule { }
`),t()()()()(),e(29,"div",10),r(30,"sample-po-code-editor-terraform"),t(),r(31,"hr")),i&2&&(d(5),b("po-icon "+a.sampleCodeButtonIcon),d(),h(" ",a.sampleCodeButtonLabel,""),d(),p("ngClass",S(4,xe,a.hideSampleCodeTabs)))},dependencies:[v,E,f,C,ie],encapsulation:2})}return n})();var re=(()=>{class n{language="html";suggestions=[{label:"po",insertText:"PO UI"},{label:"ng",insertText:"Angular"},{label:"po-btn",insertText:'<po-button p-label="${1:label}"></po-button>'},{label:"po-inp",insertText:'<po-input name="${1:name}" [(ngModel)]="${2:model}"></po-input>'}];static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-code-editor-suggestion"]],standalone:!1,decls:1,vars:2,consts:[[3,"p-suggestions","p-language"]],template:function(i,a){i&1&&r(0,"po-code-editor",0),i&2&&p("p-suggestions",a.suggestions)("p-language",a.language)},dependencies:[x],encapsulation:2})}return n})();var Te=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-code-editor-suggestion-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(r(0,"br"),e(1,"blockquote",0)(2,"label",1),o(3,"PO Code Editor Suggestion"),t(),e(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),r(5,"span"),o(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.html"),t(),e(13,"pre",7),o(14,`<po-code-editor [p-suggestions]="suggestions" [p-language]="language"> </po-code-editor>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-code-editor-suggestion/sample-po-code-editor-suggestion.component.ts"),t(),e(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-code-editor-suggestion',
  templateUrl: './sample-po-code-editor-suggestion.component.html',
  standalone: false
})
export class SamplePoCodeEditorSuggestionComponent {
  language = 'html';
  suggestions = [
    { label: 'po', insertText: 'PO UI' },
    { label: 'ng', insertText: 'Angular' },
    { label: 'po-btn', insertText: '<po-button p-label="\${1:label}"></po-button>' },
    { label: 'po-inp', insertText: '<po-input name="\${1:name}" [(ngModel)]="\${2:model}"></po-input>' }
  ];
}
`),t()()()()(),e(21,"div",10),r(22,"sample-po-code-editor-suggestion"),t(),r(23,"hr")),i&2&&(d(5),b("po-icon "+a.sampleCodeButtonIcon),d(),h(" ",a.sampleCodeButtonLabel,""),d(),p("ngClass",S(4,Te,a.hideSampleCodeTabs)))},dependencies:[v,E,f,C,re],encapsulation:2})}return n})();var de=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-code-editor-doc"]],standalone:!1,decls:297,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-shell"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://microsoft.github.io/monaco-editor/"],["href","https://po-ui.io/documentation/po-code-editor-register?view=doc"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoCodeEditorRegisterableSuggestion>"],[1,"docs-api-h4","docs-api-class-name"]],template:function(i,a){i&1&&(e(0,"div",0)(1,"p",1)(2,"code"),o(3,"import { PoCodeEditorModule } from '@po-ui/ng-code-editor';"),t()(),e(4,"div",2)(5,"p"),o(6,"M\xF3dulo do componente po-code-editor."),t()(),e(7,"h3",3),o(8,"Componente"),t(),e(9,"h4",4)(10,"code",5),o(11,"PoCodeEditorComponent"),t()(),e(12,"div",2)(13,"p"),o(14,"O "),e(15,"code"),o(16,"po-code-editor"),t(),o(17," \xE9 um componente para edi\xE7\xE3o de c\xF3digo fonte baseado no Monaco Editor da Microsoft."),t(),e(18,"p"),o(19,`Sendo assim, algumas configura\xE7\xF5es presentes no Monaco podem ser utilizadas aqui, como a escolha da linguagem
(utilizando o highlight syntax espec\xEDfico), escolha do tema e op\xE7\xE3o de diff, al\xE9m de ser muito similar ao Visual
Studio Code, com autocomplete e fechamento autom\xE1tico de brackets.`),t(),e(20,"p"),o(21,`Este componente pode ser usado em qualquer situa\xE7\xE3o que necessite de adi\xE7\xE3o de c\xF3digos, como por exemplo, criar
receitas utilizando Terraform para gerenciar topologias.
\xC9 importante ressaltar que este n\xE3o \xE9 um componente para edi\xE7\xE3o de textos comuns.`),t(),e(22,"p"),o(23,`O [(ngModel)] deve ser usado para manipular o conte\xFAdo do po-code-editor, ou seja, tanto para incluir um conte\xFAdo quanto
para recuperar o conte\xFAdo do po-code-editor, utiliza-se uma vari\xE1vel passada por [(ngModel)].`),t(),e(24,"h4"),o(25,"Adicionando o pacote @po-ui/ng-code-editor"),t(),e(26,"p"),o(27,"Para instalar o pacote "),e(28,"code"),o(29,"po-code-editor"),t(),o(30," em sua aplica\xE7\xE3o execute:"),t(),e(31,"pre")(32,"code",6),o(33,`ng add @po-ui/ng-code-editor
`),t()(),e(34,"p"),o(35,"O comando "),e(36,"code"),o(37,"ng add"),t(),o(38," do "),e(39,"code"),o(40,"Angular CLI"),t(),o(41,":"),t(),e(42,"ul")(43,"li"),o(44,"inclui o "),e(45,"code"),o(46,"po-code-editor"),t(),o(47," no seu projeto;"),t(),e(48,"li"),o(49,"adiciona o m\xF3dulo "),e(50,"code"),o(51,"PoCodeEditorModule"),t(),o(52,":;"),t()(),e(53,"pre")(54,"code"),o(55,`// app.module.ts
...
import { PoModule } from '@po-ui/ng-components';
import { PoCodeEditorModule } from '@po-ui/ng-code-editor';
...
@NgModule({
  imports: [
    ...
    PoModule,
    PoCodeEditorModule
  ],
  ...
})
export class AppModule { }
`),t()(),e(56,"ul")(57,"li"),o(58,"adiciona o tema PO UI e tamb\xE9m o "),e(59,"em"),o(60,"asset"),t(),o(61," do Monaco no arquivo "),e(62,"code"),o(63,"angular.json"),t(),o(64,", conforme abaixo:"),t()(),e(65,"pre"),N(),o(66,`...
"assets": [
   { "glob": "**/*", "input": "node_modules/monaco-editor/min", "output": "/assets/monaco/" }
 ],
"styles": [
   "./node_modules/@po-ui/style/css/po-theme-default.min.css"
]
...
`),R(),t()(),e(67,"div",7)(68,"h4",8),o(69,"Seletor"),t(),e(70,"pre",9),o(71,`<po-code-editor
    p-height="string"
    p-language="string"
    p-readonly="boolean"
    p-show-diff="boolean"
    p-suggestions="Array<PoCodeEditorRegisterableSuggestion>"
    p-theme="string" >
</po-code-editor>
`),t()(),e(72,"h4",10),o(73,"Propriedades"),t(),e(74,"table",11)(75,"tr",12)(76,"th",13),o(77,"Nome"),t(),e(78,"th",13),o(79,"Tipo"),t(),e(80,"th",13),o(81,"Padr\xE3o"),t(),e(82,"th",13),o(83,"Descri\xE7\xE3o"),t()(),e(84,"tr",14)(85,"td",15)(86,"div",16)(87,"span",17),o(88," p-height"),r(89,"br"),t()()(),e(90,"td",18)(91,"code",19),o(92,"string"),t()(),e(93,"td",20),o(94,"-"),t(),e(95,"td",21)(96,"em")(97,"strong"),o(98,"(opcional)"),t()(),e(99,"p"),o(100,`Define a altura do componente em pixels do po-code-editor.
Esta propriedade n\xE3o poder\xE1 ser alterada ap\xF3s o componente ter sido iniciado.
A altura m\xEDnima \xE9 150 pixels.`),t()()(),e(101,"tr",14)(102,"td",15)(103,"div",16)(104,"span",17),o(105," p-language"),r(106,"br"),t()()(),e(107,"td",18)(108,"code",19),o(109,"string"),t()(),e(110,"td",20)(111,"p")(112,"code"),o(113,"plainText"),t()()(),e(114,"td",21)(115,"em")(116,"strong"),o(117,"(opcional)"),t()(),e(118,"p"),o(119,`Linguagem na qual ser\xE1 apresentado o c\xF3digo fonte.
Para saber quais s\xE3o as linguagens compat\xEDveis, consulte a documenta\xE7\xE3o oficial do
`),e(120,"a",22)(121,"strong"),o(122,"Monaco Editor"),t()(),o(123,"."),t(),e(124,"p"),o(125,`Tamb\xE9m \xE9 poss\xEDvel adicionar uma nova linguagem personalizada utilizando o servi\xE7o:
`),e(126,"a",23)(127,"strong"),o(128,"po-code-editor-register"),t()(),o(129,"."),t()()(),e(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),o(134," p-readonly"),r(135,"br"),t()()(),e(136,"td",18)(137,"code",24),o(138,"boolean"),t()(),e(139,"td",20)(140,"p")(141,"code"),o(142,"false"),t()()(),e(143,"td",21)(144,"em")(145,"strong"),o(146,"(opcional)"),t()(),e(147,"p"),o(148,"Indica se o editor ser\xE1 aberto em modo de leitura."),t(),e(149,"p"),o(150,"Neste caso, n\xE3o \xE9 poss\xEDvel editar o c\xF3digo inserido."),t(),e(151,"p"),o(152,"Obs: Esta propriedade n\xE3o refletir\xE1 efeito se alterada ap\xF3s o carregamento do componente."),t()()(),e(153,"tr",14)(154,"td",15)(155,"div",16)(156,"span",17),o(157," p-show-diff"),r(158,"br"),t()()(),e(159,"td",18)(160,"code",24),o(161,"boolean"),t()(),e(162,"td",20)(163,"p")(164,"code"),o(165,"false"),t()()(),e(166,"td",21)(167,"em")(168,"strong"),o(169,"(opcional)"),t()(),e(170,"p"),o(171,"Indica se o editor ser\xE1 aberto em modo de compara\xE7\xE3o."),t(),e(172,"p"),o(173,`Caso esteja habilitada esta op\xE7\xE3o, ent\xE3o o [(ngModel)] dever\xE1 ser passado como um array, cuja primeira op\xE7\xE3o deve
conter uma string com o c\xF3digo original e na segunda posi\xE7\xE3o uma string c\xF3digo modificado para efeito de
compara\xE7\xE3o. Neste caso, o usu\xE1rio conseguir\xE1 editar apenas o c\xF3digo modificado e isso refletir\xE1 na segunda posi\xE7\xE3o
do array consequentemente.`),t(),e(174,"p"),o(175,"Obs: Esta propriedade n\xE3o refletir\xE1 efeito se alterada ap\xF3s o carregamento do componente."),t()()(),e(176,"tr",14)(177,"td",15)(178,"div",16)(179,"span",17),o(180," p-suggestions"),r(181,"br"),t()()(),e(182,"td",18)(183,"code",25),o(184,"Array<PoCodeEditorRegisterableSuggestion>"),t()(),e(185,"td",20),o(186,"-"),t(),e(187,"td",21)(188,"em")(189,"strong"),o(190,"(opcional)"),t()(),e(191,"p"),o(192,"Lista de sugest\xF5es usadas pelo autocomplete dentro do editor."),t(),e(193,"p"),o(194,"Para visualizar a lista de sugest\xF5es use o comando "),e(195,"code"),o(196,"CTRL + SPACE"),t(),o(197,"."),t(),e(198,"p"),o(199,`Caso o editor esteja usando uma linguagem que j\xE1 tenha uma lista de sugest\xF5es predefinida, o valor passado ser\xE1 adicionado
a lista preexistente, aumentando as op\xE7\xF5es para o usu\xE1rio.`),t(),e(200,"p"),o(201,`Caso tenha mais de um editor da mesma linguagem na aplica\xE7\xE3o, as sugest\xF5es ser\xE3o adicionadas para que todos os editores da mesma linguagem
tenham as mesmas sugest\xF5es.`),t(),e(202,"pre")(203,"code"),o(204,`<po-code-editor
  [p-suggestions]="[{ label: 'po', insertText: 'Portinari UI' }, { label: 'ng', insertText: 'Angular' }]">
</po-code-editor>
`),t()(),e(205,"p"),o(206,"Ao fornecer uma lista de sugest\xF5es \xE9 poss\xEDvel acelerar a escrita de scripts pelos usu\xE1rios."),t()()(),e(207,"tr",14)(208,"td",15)(209,"div",16)(210,"span",17),o(211," p-theme"),r(212,"br"),t()()(),e(213,"td",18)(214,"code",19),o(215,"string"),t()(),e(216,"td",20)(217,"p")(218,"code"),o(219,"vs"),t()()(),e(220,"td",21)(221,"em")(222,"strong"),o(223,"(opcional)"),t()(),e(224,"p"),o(225,"Define um tema para o editor."),t(),e(226,"p"),o(227,"Temas v\xE1lidos:"),t(),e(228,"ul")(229,"li")(230,"code"),o(231,"vs-dark"),t()(),e(232,"li")(233,"code"),o(234,"vs"),t()(),e(235,"li")(236,"code"),o(237,"hc-black"),t()()(),e(238,"p"),o(239,`\xC9 importante salientar que o tema ser\xE1 aplicados a todos os componentes po-code-editor existentes na tela,
ou seja, todas as inst\xE2ncias do componente receber\xE3o o \xFAltimo tema atribu\xEDdo ou o tema da \xFAltima inst\xE2ncia
criada.`),t()()()(),e(240,"h3"),o(241,"Interfaces"),t(),e(242,"h4",26)(243,"code",5),o(244,"PoCodeEditorRegisterableSuggestion"),t()(),e(245,"div",2)(246,"p"),o(247,"Interface para configura\xE7\xE3o da lista de sugest\xE3o do autocomplete do code editor."),t()(),e(248,"h4",10),o(249,"Propriedades"),t(),e(250,"table",11)(251,"tr",12)(252,"th",13),o(253,"Nome"),t(),e(254,"th",13),o(255,"Tipo"),t(),e(256,"th",13),o(257,"Descri\xE7\xE3o"),t()(),e(258,"tr",14)(259,"td",15)(260,"div",16)(261,"span",17),o(262," documentation"),r(263,"br"),t()()(),e(264,"td",18)(265,"code",19),o(266,"string"),t()(),e(267,"td",21)(268,"em")(269,"strong"),o(270,"(opcional)"),t()(),e(271,"p"),o(272,"Texto de ajuda que ser\xE1 exibido caso o usu\xE1rio deseje ver mais informa\xE7\xF5es sobre a sugest\xE3o."),t()()(),e(273,"tr",14)(274,"td",15)(275,"div",16)(276,"span",17),o(277," insertText"),r(278,"br"),t()()(),e(279,"td",18)(280,"code",19),o(281,"string"),t()(),e(282,"td",21)(283,"p"),o(284,"Texto que ser\xE1 inserido no editor ao selecionar a sugest\xE3o exibida pelo autocomplete."),t()()(),e(285,"tr",14)(286,"td",15)(287,"div",16)(288,"span",17),o(289," label"),r(290,"br"),t()()(),e(291,"td",18)(292,"code",19),o(293,"string"),t()(),e(294,"td",21)(295,"p"),o(296,"Texto que ser\xE1 exibido na lista de sugest\xF5es."),t()()()()())},dependencies:[E],encapsulation:2})}return n})();var se=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,i){this.route=l,this.router=i}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(i){return new(i||n)(q(U),q(G))};static \u0275cmp=s({type:n,selectors:[["ng-component"]],standalone:!1,decls:10,vars:4,consts:[["p-title","Code Editor",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,a){i&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return a.changeTab("doc")}),r(3,"sample-po-code-editor-doc"),t(),e(4,"po-tab",3),c("p-click",function(){return a.changeTab("web")}),r(5,"sample-po-code-editor-basic-view")(6,"sample-po-code-editor-labs-view")(7,"sample-po-code-editor-diff-view")(8,"sample-po-code-editor-terraform-view")(9,"sample-po-code-editor-suggestion-view"),t()()()),i&2&&(p("p-actions",a.actions),d(2),p("p-active",a.activeTab==="doc"),d(2),p("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[Q,f,C,Z,te,ne,ae,le,de],encapsulation:2})}return n})();var _e=[{path:"",component:se}],pe=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=F({type:n});static \u0275inj=V({imports:[A.forChild(_e),A]})}return n})();var rt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=F({type:n});static \u0275inj=V({imports:[X,pe]})}return n})();export{rt as DocPoCodeEditorModule};
