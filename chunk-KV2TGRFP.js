import{o as P,p as We}from"./chunk-JYNCG2Y6.js";import{Aa as y,Ab as T,Db as je,F as W,Ga as ae,I as O,K as oe,La as Re,Ra as Ne,Sa as He,T as ke,Wa as U,a as R,f as Ie,fa as Fe,ha as Oe,ja as Le,nb as ze,ta as qe,ua as X,va as K,wa as ue,xa as Ve,ya as Be,zb as C}from"./chunk-HBOGTDFH.js";import{$a as x,Ac as Ae,Ba as _,Ca as he,D as Ee,Ea as t,Fa as n,Ga as i,Hb as Te,Ka as B,L,La as E,Lb as Pe,M as Y,Ma as xe,Nc as Me,O as Se,Pa as ve,Pc as ie,Qa as ge,Ra as ee,Rc as ce,T as u,Ta as I,Tb as we,U as b,Ua as k,Va as F,Xa as e,Ya as pe,Za as D,a as G,ab as v,b as J,bb as g,cb as q,db as te,eb as f,ha as s,ia as w,kb as ne,lb as fe,mb as ye,oa as S,pa as Z,ua as $,ub as A,vb as Ce,wc as z,xc as _e,ya as c,yc as De,zc as j}from"./chunk-MIQUIDUB.js";var pt=()=>({table:"PO Table",angular:"PO-UI"}),ct=r=>[r],Ue=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-items"]],template:function(l,o){l&1&&i(0,"po-table",0),l&2&&c("p-items",f(2,ct,te(1,pt)))},dependencies:[y],encapsulation:2})}return r})();var bt=r=>({"docs-sample-code-tabs":r}),Qe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table Basic"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-basic/sample-po-table-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-basic/sample-po-table-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-basic"),n(),i(23,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,bt,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,Ue],encapsulation:2})}return r})();var le=(()=>{class r{colors=["color-01","color-02","color-03","color-04","color-05","color-06","color-07","color-08","color-09","color-10","color-11","color-12"];generateNewItem(a){return{text:`Text ${a}`,page:`Link ${a}`,link:"https://po-ui.io/",number:a,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:"Detail Information 1",date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:"Detail Information 2",date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${a}`,icon:this.generateRandomIcon(a),boolean:this.generateRandomBoolean()}}getColumns(){return{text:{property:"text",width:"30%"},number:{property:"number",type:"number"},date:{property:"date",type:"date"},time:{property:"time",type:"time"},dateTime:{property:"dateTime",label:"DateTime",type:"dateTime"},currency:{property:"currency",type:"currency",format:"USD"},link:{property:"page",label:"Link",type:"link"},icon:{property:"icon",type:"icon"},boolean:{property:"boolean",type:"boolean"},subtitle:{property:"subtitle",type:"subtitle",width:"10%",subtitles:[{value:"color-01",color:"color-01",label:"Color 1",content:"1"},{value:"color-02",color:"color-02",label:"Color 2",content:"2"},{value:"color-03",color:"color-03",label:"Color 3",content:"3"},{value:"color-04",color:"color-04",label:"Color 4",content:"4"},{value:"color-05",color:"color-05",label:"Color 5",content:"5"},{value:"color-06",color:"color-06",label:"Color 6",content:"6"},{value:"color-07",color:"color-07",label:"Color 7",content:"7"},{value:"color-08",color:"color-08",label:"Color 8",content:"8"},{value:"color-09",color:"color-09",label:"Color 9",content:"9"},{value:"color-10",color:"color-10",label:"Color 10",content:"10"},{value:"color-11",color:"color-11",label:"Color 11",content:"11"},{value:"color-12",color:"color-12",label:"Color 12",content:"12"}]},label:{property:"label",type:"label",width:"10%",labels:[{value:"color-01",color:"color-01",label:"Color 1"},{value:"color-02",color:"color-02",label:"Color 2"},{value:"color-03",color:"color-03",label:"Color 3"},{value:"color-04",color:"color-04",label:"Color 4"},{value:"color-05",color:"color-05",label:"Color 5"},{value:"color-06",color:"color-06",label:"Color 6"},{value:"color-07",color:"color-07",label:"Color 7"},{value:"color-08",color:"color-08",label:"Color 8"},{value:"color-09",color:"color-09",label:"Color 9"},{value:"color-10",color:"color-10",label:"Color 10"},{value:"color-11",color:"color-11",label:"Color 11"},{value:"color-12",color:"color-12",label:"Color 12"}]},color:{property:"color",width:"10%",color:this.changeColor},detail:{property:"detail",type:"detail",detail:{columns:[{property:"info",label:"Detail"},{property:"date",label:"Detail Date",type:"date",format:"dd-MM-yy"},{property:"time",label:"Detail Time",type:"time"},{property:"currency",label:"Detail Currency",type:"currency"}],typeHeader:"inline"}}}}changeColor(a,l){return a[l].slice(5,7).trim()%2===0?"color-08":"color-11"}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return(Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(a){let l=["an an-copy","an an-check","an an-camera","an an-plant","an an-building-apartment"],o=["an an-trash","an an-newspaper","an an-gas-pump","an an-chats","an an-bluetooth"],m=Math.floor(Math.random()*5);return[{value:`${a}`,icon:l[m],tooltip:l[m]},{value:`${a}`,icon:o[m],tooltip:o[m]}]}generateRandomTime(){let a=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59),m=a<10?"0"+a.toString():a.toString(),p=l<10?"0"+l.toString():l.toString(),d=o<10?"0"+o.toString():o.toString();return`${m}:${p}:${d}`}generateRandomDate(){let a=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),o=Math.floor(Math.random()*24)+2e3;return new Date(o,l,a)}static \u0275fac=function(l){return new(l||r)};static \u0275prov=L({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Je=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:"First Action"};actionTableSecond={action:this.openModal.bind(this),label:"Second Action"};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=["hideBatchActions","hideTableSearch"];selection;spacing=ue.Medium;filterType=X.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:"Actions",value:"actions"},{label:"Disable first action",value:"disableAction",disabled:!0},{label:"Single action",value:"singleAction"},{label:"First action visible",value:"visibleAction"}];selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Hide select all",value:"hideSelectAll",disabled:!0},{label:"Single select",value:"singleSelect",disabled:!0}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filterModeOptions=[{label:"Starts With",value:X.startsWith},{label:"Contains",value:X.contains},{label:"Ends With",value:X.endsWith}];columnsOptions=[{value:"text",label:"Text"},{value:"link",label:"Link"},{value:"number",label:"Number"},{value:"currency",label:"Currency"},{value:"date",label:"Date"},{value:"time",label:"Time"},{value:"dateTime",label:"DateTime"},{value:"subtitle",label:"Subtitle"},{value:"detail",label:"Detail"},{value:"label",label:"Label"},{value:"color",label:"Color"},{value:"icon",label:"Icon"},{value:"boolean",label:"Boolean"}];propertiesOptions=[{label:"Sort",value:"sort"},{label:"Striped",value:"striped"},{label:"Show more disabled",value:"showMoreDisabled"},{label:"Loading show more",value:"loadingShowMore"},{label:"Hide detail",value:"hideDetail"},{label:"Loading",value:"loading"},{label:"Auto collapse",value:"autoCollapse"},{label:"Hide columns manager",value:"hideColumnsManager"},{label:"Hide batch actions",value:"hideBatchActions"},{label:"Actions Right",value:"actionsRight"},{label:"Draggable",value:"draggable"},{label:"Hide action fixed columns",value:"fixed"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Virtual Scroll",value:"virtualScroll"}];typeHeaderOptions=[{label:"Inline",value:"inline"},{label:"None",value:"none"},{label:"Top",value:"top"}];typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];constructor(a){this.samplePoTableLabsService=a,this.columnsDefinition=this.samplePoTableLabsService?.getColumns()}ngOnInit(){this.restore()}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++}changeActionOptions(){let a=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!a,this.actionsDefinitionOptions[2].disabled=!a,this.actionsDefinitionOptions[3].disabled=!a,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=a?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction()}changeEvent(a){this.event=a}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/)}changeSelectionOptions(){let a=this.selection.includes("singleSelect"),l=this.selection.includes("selectable");this.selectionOptions[1].disabled=a||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction()}deleteItems(a){this.height&&(this.items=a)}disableAction(){return this.actionsDefinition.disableAction}openModal(a){this.currentItem=a.text,this.poModal.open()}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container="",this.customLiterals=void 0,this.height=void 0,this.componentsSize="medium",this.items=[],this.itemIndex=0,this.literals="",this.maxColumns=void 0,this.properties=["hideBatchActions","hideTableSearch"],this.selection=[],this.spacing=ue.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions()}showMore(){this.addItem()}updateColumns(){this.columns=[],this.columnsName.forEach(a=>{this.columns.push(this.columnsDefinition[a])})}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns()}static \u0275fac=function(l){return new(l||r)(w(le))};static \u0275cmp=S({type:r,selectors:[["sample-po-table-labs"]],viewQuery:function(l,o){if(l&1&&I(O,7),l&2){let m;k(m=F())&&(o.poModal=m.first)}},standalone:!1,features:[q([le])],decls:34,vars:51,consts:[["f","ngForm"],[3,"p-all-selected","p-all-unselected","p-collapsed","p-expanded","p-selected","p-show-more","p-unselected","p-delete-items","p-actions","p-actions-right","p-columns","p-container","p-height","p-filter-type","p-components-size","p-hide-detail","p-hide-columns-manager","p-hide-batch-actions","p-hide-table-search","p-hide-select-all","p-items","p-literals","p-filtered-columns","p-loading","p-max-columns","p-selectable","p-spacing","p-loading-show-more","p-show-more-disabled","p-single-select","p-sort","p-striped","p-virtual-scroll","p-auto-collapse","p-draggable","p-hide-action-fixed-columns"],[1,"po-row"],["p-label","Event",1,"po-md-12",3,"p-value"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["name","columnsName","p-label","Columns","p-columns","4",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-columns","3","name","typeHeader","p-label","Column detail typeHeader",1,"po-lg-9",3,"ngModelChange","ngModel","p-options"],["name","hideSelect","p-label","Column detail hideSelect",1,"po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties","p-columns","4",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","actionsDefinition","p-columns","4","p-indeterminate","","p-label","Actions",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","selection","p-columns","4","p-help","To enable 'hide select all' and 'single select' check 'selectable'.","p-label","Selection",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filteredColumns","p-help",'Ex.: "text, time"',"p-label","Filter Columns",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","height","p-clean","","p-help","Height of table","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxColumns","p-clean","","p-help","Max columns to be visible","p-label","Max Columns",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm","p-title","PO Table"],["p-label","Chosen Item:",3,"p-value"]],template:function(l,o){if(l&1){let m=B();t(0,"po-table",1),E("p-all-selected",function(){return u(m),b(o.changeEvent("p-all-selected"))})("p-all-unselected",function(){return u(m),b(o.changeEvent("p-all-unselected"))})("p-collapsed",function(){return u(m),b(o.changeEvent("p-collapsed"))})("p-expanded",function(){return u(m),b(o.changeEvent("p-expanded"))})("p-selected",function(){return u(m),b(o.changeEvent("p-selected"))})("p-show-more",function(){return u(m),b(o.showMore())})("p-unselected",function(){return u(m),b(o.changeEvent("p-unselected"))})("p-delete-items",function(d){return u(m),b(o.deleteItems(d))}),n(),i(1,"po-divider"),t(2,"div",2),i(3,"po-info",3),n(),i(4,"po-divider"),t(5,"div",2)(6,"po-button",4),E("p-click",function(){return u(m),b(o.addItem())}),n()(),i(7,"po-divider"),t(8,"form",null,0)(10,"div",2)(11,"po-checkbox-group",5),g("ngModelChange",function(d){return u(m),v(o.columnsName,d)||(o.columnsName=d),b(d)}),E("p-change",function(){return u(m),b(o.updateColumns())}),n()(),t(12,"div",2)(13,"po-radio-group",6),g("ngModelChange",function(d){return u(m),v(o.columnsDefinition.detail.detail.typeHeader,d)||(o.columnsDefinition.detail.detail.typeHeader=d),b(d)}),n(),t(14,"po-switch",7),g("ngModelChange",function(d){return u(m),v(o.columnsDefinition.detail.detail.hideSelect,d)||(o.columnsDefinition.detail.detail.hideSelect=d),b(d)}),n()(),t(15,"div",2)(16,"po-checkbox-group",8),g("ngModelChange",function(d){return u(m),v(o.properties,d)||(o.properties=d),b(d)}),n()(),t(17,"div",2)(18,"po-checkbox-group",9),g("ngModelChange",function(d){return u(m),v(o.actionsDefinition,d)||(o.actionsDefinition=d),b(d)}),E("p-change",function(){return u(m),b(o.changeActionOptions())}),n()(),t(19,"div",2)(20,"po-radio-group",10),g("ngModelChange",function(d){return u(m),v(o.spacing,d)||(o.spacing=d),b(d)}),n()(),t(21,"div",2)(22,"po-checkbox-group",11),g("ngModelChange",function(d){return u(m),v(o.selection,d)||(o.selection=d),b(d)}),E("p-change",function(){return u(m),b(o.changeSelectionOptions())}),n(),t(23,"po-radio-group",12),g("ngModelChange",function(d){return u(m),v(o.filterType,d)||(o.filterType=d),b(d)}),n(),t(24,"po-radio-group",13),g("ngModelChange",function(d){return u(m),v(o.componentsSize,d)||(o.componentsSize=d),b(d)}),n()(),t(25,"div",2)(26,"po-input",14),g("ngModelChange",function(d){return u(m),v(o.literals,d)||(o.literals=d),b(d)}),E("p-change",function(){return u(m),b(o.changeLiterals())}),n(),t(27,"po-input",15),g("ngModelChange",function(d){return u(m),v(o.filteredColumns,d)||(o.filteredColumns=d),b(d)}),E("p-change",function(){return u(m),b(o.changeFilteredColumns())}),n(),t(28,"po-number",16),g("ngModelChange",function(d){return u(m),v(o.height,d)||(o.height=d),b(d)}),n(),t(29,"po-number",17),g("ngModelChange",function(d){return u(m),v(o.maxColumns,d)||(o.maxColumns=d),b(d)}),n()(),t(30,"div",2)(31,"po-button",18),E("p-click",function(){return u(m),b(o.restore())}),n()()(),t(32,"po-modal",19),i(33,"po-info",20),n()}l&2&&(c("p-actions",o.actions)("p-actions-right",o.properties.includes("actionsRight"))("p-columns",o.columns)("p-container",o.container)("p-height",o.height)("p-filter-type",o.filterType)("p-components-size",o.componentsSize)("p-hide-detail",o.properties.includes("hideDetail"))("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-hide-batch-actions",o.properties.includes("hideBatchActions"))("p-hide-table-search",o.properties.includes("hideTableSearch"))("p-hide-select-all",o.selection.includes("hideSelectAll"))("p-items",o.items)("p-literals",o.customLiterals)("p-filtered-columns",o.filteredColumns)("p-loading",o.properties.includes("loading"))("p-max-columns",o.maxColumns)("p-selectable",o.selection.includes("selectable"))("p-spacing",o.spacing)("p-loading-show-more",o.properties.includes("loadingShowMore"))("p-show-more-disabled",o.properties.includes("showMoreDisabled"))("p-single-select",o.selection.includes("singleSelect"))("p-sort",o.properties.includes("sort"))("p-striped",o.properties.includes("striped"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-auto-collapse",o.properties.includes("autoCollapse"))("p-draggable",o.properties.includes("draggable"))("p-hide-action-fixed-columns",o.properties.includes("fixed")),s(3),c("p-value",o.event),s(8),x("ngModel",o.columnsName),c("p-options",o.columnsOptions),s(2),x("ngModel",o.columnsDefinition.detail.detail.typeHeader),c("p-options",o.typeHeaderOptions),s(),x("ngModel",o.columnsDefinition.detail.detail.hideSelect),s(2),x("ngModel",o.properties),c("p-options",o.propertiesOptions),s(2),x("ngModel",o.actionsDefinition),c("p-options",o.actionsDefinitionOptions),s(2),x("ngModel",o.spacing),c("p-options",o.typeSpacing),s(2),x("ngModel",o.selection),c("p-options",o.selectionOptions),s(),x("ngModel",o.filterType),c("p-options",o.filterModeOptions),s(),x("ngModel",o.componentsSize),c("p-options",o.componentsSizeOptions),s(2),x("ngModel",o.literals),s(),x("ngModel",o.filteredColumns),s(),x("ngModel",o.height),s(),x("ngModel",o.maxColumns),s(4),c("p-value",o.currentItem))},dependencies:[Ae,z,_e,j,De,W,R,Oe,Le,ae,Re,qe,U,O,y],encapsulation:2})}return r})();var xt=r=>({"docs-sample-code-tabs":r}),$e=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table Labs"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-labs/sample-po-table-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-table
  [p-actions]="actions"
  [p-actions-right]="properties.includes('actionsRight')"
  [p-columns]="columns"
  [p-container]="container"
  [p-height]="height"
  [p-filter-type]="filterType"
  [p-components-size]="componentsSize"
  [p-hide-detail]="properties.includes('hideDetail')"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-hide-batch-actions]="properties.includes('hideBatchActions')"
  [p-hide-table-search]="properties.includes('hideTableSearch')"
  [p-hide-select-all]="selection.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-filtered-columns]="filteredColumns"
  [p-loading]="properties.includes('loading')"
  [p-max-columns]="maxColumns"
  [p-selectable]="selection.includes('selectable')"
  [p-spacing]="spacing"
  [p-loading-show-more]="properties.includes('loadingShowMore')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  [p-single-select]="selection.includes('singleSelect')"
  [p-sort]="properties.includes('sort')"
  [p-striped]="properties.includes('striped')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-all-selected)="changeEvent('p-all-selected')"
  (p-all-unselected)="changeEvent('p-all-unselected')"
  (p-collapsed)="changeEvent('p-collapsed')"
  (p-expanded)="changeEvent('p-expanded')"
  (p-selected)="changeEvent('p-selected')"
  (p-show-more)="showMore()"
  (p-unselected)="changeEvent('p-unselected')"
  [p-auto-collapse]="properties.includes('autoCollapse')"
  (p-delete-items)="deleteItems($event)"
  [p-draggable]="properties.includes('draggable')"
  [p-hide-action-fixed-columns]="properties.includes('fixed')"
>
</po-table>

<po-divider></po-divider>

<div class="po-row">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()"> </po-button>
</div>

<po-divider></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="columnsName"
      [(ngModel)]="columnsName"
      p-label="Columns"
      p-columns="4"
      [p-options]="columnsOptions"
      (p-change)="updateColumns()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-9"
      p-columns="3"
      name="typeHeader"
      [(ngModel)]="columnsDefinition.detail.detail.typeHeader"
      p-label="Column detail typeHeader"
      [p-options]="typeHeaderOptions"
    >
    </po-radio-group>

    <po-switch
      class="po-lg-3"
      name="hideSelect"
      [(ngModel)]="columnsDefinition.detail.detail.hideSelect"
      p-label="Column detail hideSelect"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      p-columns="4"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="actionsDefinition"
      [(ngModel)]="actionsDefinition"
      p-columns="4"
      p-indeterminate
      p-label="Actions"
      [p-options]="actionsDefinitionOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="spacing"
      [(ngModel)]="spacing"
      p-columns="4"
      p-help="Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      p-label="Spacing"
      [p-options]="typeSpacing"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="selection"
      [(ngModel)]="selection"
      p-columns="4"
      p-help="To enable 'hide select all' and 'single select' check 'selectable'."
      p-label="Selection"
      [p-options]="selectionOptions"
      (p-change)="changeSelectionOptions()"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="filterMode"
      [(ngModel)]="filterType"
      p-columns="4"
      p-label="Filter mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="filteredColumns"
      [(ngModel)]="filteredColumns"
      p-help='Ex.: "text, time"'
      p-label="Filter Columns"
      (p-change)="changeFilteredColumns()"
    >
    </po-input>

    <po-number
      class="po-md-6 po-lg-3"
      name="height"
      [(ngModel)]="height"
      p-clean
      p-help="Height of table"
      p-label="Height"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxColumns"
      [(ngModel)]="maxColumns"
      p-clean
      p-help="Max columns to be visible"
      p-label="Max Columns"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>

<po-modal p-click-out="true" p-size="sm" p-title="PO Table">
  <po-info p-label="Chosen Item:" [p-value]="currentItem"> </po-info>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-labs/sample-po-table-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoModalComponent,
  PoRadioGroupOption,
  PoSearchFilterMode,
  PoTableAction,
  PoTableColumn,
  PoTableColumnSpacing,
  PoTableLiterals
} from '@po-ui/ng-components';

import { SamplePoTableLabsService } from './sample-po-table-labs.service';

@Component({
  selector: 'sample-po-table-labs',
  templateUrl: './sample-po-table-labs.component.html',
  providers: [SamplePoTableLabsService],
  standalone: false
})
export class SamplePoTableLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  actions: Array<PoTableAction>;
  actionsDefinition: any;
  actionTableFirst: PoTableAction = {
    action: this.openModal.bind(this),
    disabled: this.disableAction.bind(this),
    label: 'First Action'
  };
  actionTableSecond: PoTableAction = { action: this.openModal.bind(this), label: 'Second Action' };

  columns: Array<PoTableColumn>;
  columnsDefinition: any;
  columnsName: Array<string>;
  componentsSize: string;
  container: string;
  currentItem: string;
  customLiterals: PoTableLiterals;
  event: string;
  height: number;
  items: Array<any>;
  itemIndex = 0;
  literals: string;
  maxColumns: number;
  properties: Array<string> = ['hideBatchActions', 'hideTableSearch'];
  selection: Array<string>;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;
  filterType: PoSearchFilterMode = PoSearchFilterMode.startsWith;
  filteredColumns: Array<string> = [];

  actionsDefinitionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Disable first action', value: 'disableAction', disabled: true },
    { label: 'Single action', value: 'singleAction' },
    { label: 'First action visible', value: 'visibleAction' }
  ];

  selectionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Selectable', value: 'selectable' },
    { label: 'Hide select all', value: 'hideSelectAll', disabled: true },
    { label: 'Single select', value: 'singleSelect', disabled: true }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: PoSearchFilterMode.startsWith },
    { label: 'Contains', value: PoSearchFilterMode.contains },
    { label: 'Ends With', value: PoSearchFilterMode.endsWith }
  ];

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'text', label: 'Text' },
    { value: 'link', label: 'Link' },
    { value: 'number', label: 'Number' },
    { value: 'currency', label: 'Currency' },
    { value: 'date', label: 'Date' },
    { value: 'time', label: 'Time' },
    { value: 'dateTime', label: 'DateTime' },
    { value: 'subtitle', label: 'Subtitle' },
    { value: 'detail', label: 'Detail' },
    { value: 'label', label: 'Label' },
    { value: 'color', label: 'Color' },
    { value: 'icon', label: 'Icon' },
    { value: 'boolean', label: 'Boolean' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Sort', value: 'sort' },
    { label: 'Striped', value: 'striped' },
    { label: 'Show more disabled', value: 'showMoreDisabled' },
    { label: 'Loading show more', value: 'loadingShowMore' },
    { label: 'Hide detail', value: 'hideDetail' },
    { label: 'Loading', value: 'loading' },
    { label: 'Auto collapse', value: 'autoCollapse' },
    { label: 'Hide columns manager', value: 'hideColumnsManager' },
    { label: 'Hide batch actions', value: 'hideBatchActions' },
    { label: 'Actions Right', value: 'actionsRight' },
    { label: 'Draggable', value: 'draggable' },
    { label: 'Hide action fixed columns', value: 'fixed' },
    { label: 'Hide Table Search', value: 'hideTableSearch' },
    { label: 'Virtual Scroll', value: 'virtualScroll' }
  ];

  public readonly typeHeaderOptions: Array<PoRadioGroupOption> = [
    { label: 'Inline', value: 'inline' },
    { label: 'None', value: 'none' },
    { label: 'Top', value: 'top' }
  ];

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'ExtraSmall', value: 'extraSmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  constructor(private samplePoTableLabsService: SamplePoTableLabsService) {
    this.columnsDefinition = this.samplePoTableLabsService?.getColumns();
  }

  ngOnInit() {
    this.restore();
  }

  addItem() {
    this.items = [...this.items, this.samplePoTableLabsService.generateNewItem(this.itemIndex)];
    this.itemIndex++;
  }

  changeActionOptions() {
    const actions = this.actionsDefinition.actions;

    this.actionsDefinitionOptions[1].disabled = !actions;
    this.actionsDefinitionOptions[2].disabled = !actions;
    this.actionsDefinitionOptions[3].disabled = !actions;

    this.actionsDefinitionOptions = [].concat(this.actionsDefinitionOptions);

    this.actions = actions
      ? this.actionsDefinition.singleAction
        ? [this.actionTableFirst]
        : [this.actionTableFirst, this.actionTableSecond]
      : [];
    this.actionTableFirst.visible = this.actionsDefinition.visibleAction;
    this.spacingSelectOrAction();
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

  changeFilteredColumns() {
    this.filteredColumns = this.filteredColumns.toString().split(/,\\s*/);
  }

  changeSelectionOptions() {
    const singleSelect = this.selection.includes('singleSelect');
    const selectable = this.selection.includes('selectable');

    this.selectionOptions[1].disabled = singleSelect || !selectable;
    this.selectionOptions[2].disabled = !selectable;

    this.selectionOptions = [].concat(this.selectionOptions);
    this.spacingSelectOrAction();
  }

  deleteItems(items: Array<any>) {
    if (this.height) {
      this.items = items;
    }
  }

  disableAction() {
    return this.actionsDefinition.disableAction;
  }

  openModal(row) {
    this.currentItem = row.text;
    this.poModal.open();
  }

  restore() {
    this.actionsDefinition = { visibleAction: null };
    this.actions = [];
    //this.columnsDefinition = this.samplePoTableLabsService.getColumns();
    this.columnsDefinition.detail.detail.typeHeader = undefined;
    this.columnsName = [];
    this.container = '';
    this.customLiterals = undefined;
    this.height = undefined;
    this.componentsSize = 'medium';
    this.items = [];
    this.itemIndex = 0;
    this.literals = '';
    this.maxColumns = undefined;
    this.properties = ['hideBatchActions', 'hideTableSearch'];
    this.selection = [];
    this.spacing = PoTableColumnSpacing.Medium;
    this.filteredColumns = [];

    this.updateColumns();
    this.changeActionOptions();
  }

  showMore() {
    this.addItem();
  }

  updateColumns() {
    this.columns = [];
    this.columnsName.forEach(column => {
      this.columns.push(this.columnsDefinition[column]);
    });
  }

  private spacingSelectOrAction() {
    if (this.columnsName.length > 0) {
      this.updateColumns();
    }
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-labs/sample-po-table-labs.service.ts"),n(),t(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableLabsService {
  private readonly colors = [
    'color-01',
    'color-02',
    'color-03',
    'color-04',
    'color-05',
    'color-06',
    'color-07',
    'color-08',
    'color-09',
    'color-10',
    'color-11',
    'color-12'
  ];

  generateNewItem(index: number) {
    return {
      text: \`Text \${index}\`,
      page: \`Link \${index}\`,
      link: 'https://po-ui.io/',
      number: index,
      date: this.generateRandomDate(),
      time: this.generateRandomTime(),
      dateTime: this.generateRandomDate(),
      currency: this.generateRandomNumber(),
      subtitle: this.generateRandomColor(),
      detail: [
        { info: \`Detail Information 1\`, date: new Date(), time: this.generateRandomTime(), currency: 1500.5 },
        { info: \`Detail Information 2\`, date: new Date(), time: this.generateRandomTime(), currency: 6511 }
      ],
      label: this.generateRandomColor(),
      color: \`Text \${index}\`,
      icon: this.generateRandomIcon(index),
      boolean: this.generateRandomBoolean()
    };
  }

  getColumns() {
    return {
      text: <PoTableColumn>{ property: 'text', width: '30%' },
      number: <PoTableColumn>{ property: 'number', type: 'number' },
      date: <PoTableColumn>{ property: 'date', type: 'date' },
      time: <PoTableColumn>{ property: 'time', type: 'time' },
      dateTime: <PoTableColumn>{ property: 'dateTime', label: 'DateTime', type: 'dateTime' },
      currency: <PoTableColumn>{ property: 'currency', type: 'currency', format: 'USD' },
      link: <PoTableColumn>{ property: 'page', label: 'Link', type: 'link' },
      icon: <PoTableColumn>{ property: 'icon', type: 'icon' },
      boolean: <PoTableColumn>{ property: 'boolean', type: 'boolean' },
      subtitle: <PoTableColumn>{
        property: 'subtitle',
        type: 'subtitle',
        width: '10%',
        subtitles: [
          { value: 'color-01', color: 'color-01', label: 'Color 1', content: '1' },
          { value: 'color-02', color: 'color-02', label: 'Color 2', content: '2' },
          { value: 'color-03', color: 'color-03', label: 'Color 3', content: '3' },
          { value: 'color-04', color: 'color-04', label: 'Color 4', content: '4' },
          { value: 'color-05', color: 'color-05', label: 'Color 5', content: '5' },
          { value: 'color-06', color: 'color-06', label: 'Color 6', content: '6' },
          { value: 'color-07', color: 'color-07', label: 'Color 7', content: '7' },
          { value: 'color-08', color: 'color-08', label: 'Color 8', content: '8' },
          { value: 'color-09', color: 'color-09', label: 'Color 9', content: '9' },
          { value: 'color-10', color: 'color-10', label: 'Color 10', content: '10' },
          { value: 'color-11', color: 'color-11', label: 'Color 11', content: '11' },
          { value: 'color-12', color: 'color-12', label: 'Color 12', content: '12' }
        ]
      },

      label: <PoTableColumn>{
        property: 'label',
        type: 'label',
        width: '10%',
        labels: [
          { value: 'color-01', color: 'color-01', label: 'Color 1' },
          { value: 'color-02', color: 'color-02', label: 'Color 2' },
          { value: 'color-03', color: 'color-03', label: 'Color 3' },
          { value: 'color-04', color: 'color-04', label: 'Color 4' },
          { value: 'color-05', color: 'color-05', label: 'Color 5' },
          { value: 'color-06', color: 'color-06', label: 'Color 6' },
          { value: 'color-07', color: 'color-07', label: 'Color 7' },
          { value: 'color-08', color: 'color-08', label: 'Color 8' },
          { value: 'color-09', color: 'color-09', label: 'Color 9' },
          { value: 'color-10', color: 'color-10', label: 'Color 10' },
          { value: 'color-11', color: 'color-11', label: 'Color 11' },
          { value: 'color-12', color: 'color-12', label: 'Color 12' }
        ]
      },

      color: <PoTableColumn>{ property: 'color', width: '10%', color: this.changeColor },

      detail: <PoTableColumn>{
        property: 'detail',
        type: 'detail',
        detail: {
          columns: [
            { property: 'info', label: 'Detail' },
            { property: 'date', label: 'Detail Date', type: 'date', format: 'dd-MM-yy' },
            { property: 'time', label: 'Detail Time', type: 'time' },
            { property: 'currency', label: 'Detail Currency', type: 'currency' }
          ],
          typeHeader: 'inline'
        }
      }
    };
  }

  private changeColor(row, column) {
    const number = row[column].slice(5, 7).trim();

    return number % 2 === 0 ? 'color-08' : 'color-11';
  }

  private generateRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  private generateRandomNumber() {
    return (Math.random() * 200 + 1).toFixed(3);
  }

  private generateRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  private generateRandomIcon(index: number) {
    const iconsOne = ['an an-copy', 'an an-check', 'an an-camera', 'an an-plant', 'an an-building-apartment'];
    const iconsTwo = ['an an-trash', 'an an-newspaper', 'an an-gas-pump', 'an an-chats', 'an an-bluetooth'];

    const randomIcon = Math.floor(Math.random() * 5);

    return [
      { value: \`\${index}\`, icon: iconsOne[randomIcon], tooltip: iconsOne[randomIcon] },
      { value: \`\${index}\`, icon: iconsTwo[randomIcon], tooltip: iconsTwo[randomIcon] }
    ];
  }

  private generateRandomTime() {
    const hour = Math.floor(Math.random() * 23);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const hourValid = hour < 10 ? '0' + hour.toString() : hour.toString();
    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return \`\${hourValid}:\${minutesValid}:\${secondsValid}\`;
  }

  private generateRandomDate() {
    const day = Math.floor(Math.random() * 28);
    const month = Math.floor(Math.random() * 12);
    const year = Math.floor(Math.random() * 24) + 2000;

    return new Date(year, month, day);
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-labs"),n(),i(27,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,xt,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,Je],encapsulation:2})}return r})();var gt=["table"],Xe=(()=>{class r{tableComponent;service="";key;value;sampleService="";params;filters=[];columns=[{property:"id"},{property:"name"}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(a,l){this.params=J(G({},this.params),{[a]:l}),this.setFilters(a,l),this.tableComponent.applyFilters(this.params),this.resetInputs()}changeService(a){this.sampleService=a}onChangeColumns(a){try{this.columns=JSON.parse(a)}catch{this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns]}}removeAllItems(){this.tableComponent.applyFilters({})}removeItem(a){delete this.params[a.removedDisclaimer.property],this.tableComponent.applyFilters(this.params)}resetInputs(){this.key=void 0,this.value=void 0}setFilters(a,l){let o=this.filters.find(m=>m.property===a);o?(this.filters.splice(this.filters.indexOf(o),1),o=Object.assign({},o)):o={property:a},o.value=l,o.label=`${a.charAt(0).toUpperCase()+a.slice(1)}: ${l}`,this.filters=[...this.filters,o]}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-with-api"]],viewQuery:function(l,o){if(l&1&&I(gt,5),l&2){let m;k(m=F())&&(o.tableComponent=m.first)}},standalone:!1,decls:16,vars:12,consts:[["table",""],[1,"po-row"],["p-label","URL API service","p-help","https://po-sample-api.onrender.com/v1/heroes",1,"po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Columns",1,"po-md-12"],["p-label","Columns","p-help","[{ property: 'name' }]",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-rows"],["p-label","Filters",1,"po-md-12"],["p-label","Key","p-help","Object key",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Value","p-help","Object value",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Filter",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-mt-1","po-md-12",3,"p-remove","p-remove-all","p-disclaimers"],[1,"po-mt-1","po-md-12",3,"p-columns","p-service-api","p-height","p-hide-table-search","p-infinite-scroll"]],template:function(l,o){if(l&1){let m=B();t(0,"div",1)(1,"po-input",2),g("ngModelChange",function(d){return u(m),v(o.service,d)||(o.service=d),b(d)}),E("p-change",function(){return u(m),b(o.changeService(o.service))}),n()(),t(2,"div",1),i(3,"po-divider",3),t(4,"po-textarea",4),g("ngModelChange",function(d){return u(m),v(o.stringColumns,d)||(o.stringColumns=d),b(d)}),E("p-change",function(d){return u(m),b(o.onChangeColumns(d))}),n()(),t(5,"div",1),i(6,"po-divider",5),t(7,"po-input",6),g("ngModelChange",function(d){return u(m),v(o.key,d)||(o.key=d),b(d)}),n(),t(8,"po-input",7),g("ngModelChange",function(d){return u(m),v(o.value,d)||(o.value=d),b(d)}),n()(),t(9,"div",1)(10,"po-button",8),E("p-click",function(){return u(m),b(o.addFilter(o.key,o.value))}),n()(),t(11,"div",1)(12,"po-disclaimer-group",9),E("p-remove",function(d){return u(m),b(o.removeItem(d))})("p-remove-all",function(){return u(m),b(o.removeAllItems())}),n()(),t(13,"div",1),i(14,"po-table",10,0),n()}l&2&&(s(),x("ngModel",o.service),s(3),x("ngModel",o.stringColumns),c("p-rows",5),s(3),x("ngModel",o.key),s(),x("ngModel",o.value),s(2),c("p-disabled",!o.key||!o.value),s(2),c("p-disclaimers",o.filters),s(2),c("p-columns",o.columns)("p-service-api",o.sampleService)("p-height",300)("p-hide-table-search",!1)("p-infinite-scroll",!0))},dependencies:[z,j,W,Fe,R,ae,He,y],encapsulation:2})}return r})();var yt=r=>({"docs-sample-code-tabs":r}),Ke=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-with-api-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table using API"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-with-api/sample-po-table-with-api.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row">
  <po-input
    class="po-md-12"
    p-label="URL API service"
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    [(ngModel)]="service"
    (p-change)="changeService(service)"
  >
  </po-input>
</div>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Columns"></po-divider>
  <po-textarea
    class="po-md-12"
    p-label="Columns"
    p-help="[{ property: 'name' }]"
    [(ngModel)]="stringColumns"
    [p-rows]="5"
    (p-change)="onChangeColumns($event)"
  >
  </po-textarea>
</div>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Filters"></po-divider>
  <po-input class="po-md-6" p-label="Key" p-help="Object key" [(ngModel)]="key"></po-input>
  <po-input class="po-md-6" p-label="Value" p-help="Object value" [(ngModel)]="value"></po-input>
</div>
<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Add Filter"
    (p-click)="addFilter(key, value)"
    [p-disabled]="!key || !value"
  ></po-button>
</div>
<div class="po-row">
  <po-disclaimer-group
    class="po-mt-1 po-md-12"
    [p-disclaimers]="filters"
    (p-remove)="removeItem($event)"
    (p-remove-all)="removeAllItems()"
  >
  </po-disclaimer-group>
</div>
<div class="po-row">
  <po-table
    class="po-mt-1 po-md-12"
    #table
    [p-columns]="columns"
    [p-service-api]="sampleService"
    [p-height]="300"
    [p-hide-table-search]="false"
    [p-infinite-scroll]="true"
  >
  </po-table>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-with-api/sample-po-table-with-api.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { PoDisclaimerGroupRemoveAction, PoDisclaimer, PoTableComponent, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-table-with-api',
  templateUrl: './sample-po-table-with-api.component.html',
  standalone: false
})
export class SamplePoTableWithApiComponent {
  @ViewChild('table') tableComponent: PoTableComponent;

  service = '';
  key: string;
  value: string;
  sampleService = '';
  params: {};
  filters: Array<PoDisclaimer> = [];
  columns: Array<PoTableColumn> = [{ property: 'id' }, { property: 'name' }];
  stringColumns: string = JSON.stringify(this.columns);

  private defaultColumns: Array<PoTableColumn> = [...this.columns];

  addFilter(property: string, value: any) {
    this.params = { ...this.params, [property]: value };

    this.setFilters(property, value);

    this.tableComponent.applyFilters(this.params);

    this.resetInputs();
  }

  changeService(service) {
    this.sampleService = service;
  }

  onChangeColumns(columns) {
    try {
      this.columns = JSON.parse(columns);
    } catch (e) {
      this.stringColumns = JSON.stringify(this.defaultColumns);
      this.columns = [...this.defaultColumns];
    }
  }

  removeAllItems() {
    this.tableComponent.applyFilters({});
  }

  removeItem(item: PoDisclaimerGroupRemoveAction) {
    delete this.params[item.removedDisclaimer.property];
    this.tableComponent.applyFilters(this.params);
  }

  private resetInputs() {
    this.key = undefined;
    this.value = undefined;
  }

  private setFilters(property: string, value: string) {
    let filter = this.filters.find(item => item.property === property);
    if (!filter) {
      filter = <any>{ property: property };
    } else {
      this.filters.splice(this.filters.indexOf(filter), 1);
      filter = Object.assign({}, filter);
    }

    filter.value = value;
    filter.label = \`\${property.charAt(0).toUpperCase() + property.slice(1)}: \${value}\`;

    this.filters = [...this.filters, filter];
  }
}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-with-api"),n(),i(23,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,yt,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,Xe],encapsulation:2})}return r})();var re=(()=>{class r{getColumns(){return[{property:"code",type:"number",width:"8%"},{property:"product"},{property:"customer"},{property:"exit_forecast",label:"Exit forecast",type:"dateTime"},{property:"time_since_purchase",label:"Time since purchase",type:"time",visible:!1},{property:"quantity",label:"Quantity (Tons)",type:"number",width:"15%",visible:!1},{property:"icms",label:"ICMS",type:"number",format:"1.2-5",visible:!1},{property:"status",type:"label",width:"8%",labels:[{value:"delivered",color:"blue",label:"Delivered"},{value:"transport",label:"Transport",type:Ie.Success},{value:"production",color:" #745678",label:"Production"},{value:"stock",color:"rgb(201, 53, 125)",label:"Stock",icon:"an an-package"}]}]}getItems(){return[{code:1200,product:"Rice",customer:"Angeloni",quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"delivered",license_plate:"MDJD9191",batch_product:18041822,driver:"Jos\xE9 Oliveira"},{code:1355,product:"Margarine",customer:"Giassi",quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"XXA5454",batch_product:18041821,driver:"Francisco Pereira"},{code:1496,product:"Wheat flour",customer:"Walmart",quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"QEW5779",batch_product:18041820,driver:"Pedro da Costa"},{code:1712,product:"Milk",customer:"Carrefour",quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"WWW1247",batch_product:18041819,driver:"Jo\xE3o da Silva"},{code:1881,product:"Oil",customer:"Carrefour",quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"XXI2312",batch_product:18041825,driver:"Antonio Lima"},{code:1551,product:"Cream cheese",customer:"Barbosa",quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"stock",license_plate:"XXI2359",batch_product:18041888,driver:"Vitoria Felix"}]}generateRandomDate(){let a=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59);return new Date(2018,10,23,a,l,o)}generateRandomTime(){let a=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59),o=a<10?"0"+a.toString():a.toString(),m=l<10?"0"+l.toString():l.toString();return`00:${o}:${m}`}static \u0275fac=function(l){return new(l||r)};static \u0275prov=L({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Pt(r,Q){if(r&1){let a=B();t(0,"po-widget",2)(1,"div",3)(2,"po-select",4),g("ngModelChange",function(o){let m=u(a).$implicit;return v(m.status,o)||(m.status=o),b(o)}),n()(),t(3,"div",3),i(4,"po-info",5)(5,"po-info",6)(6,"po-info",7),n()()}if(r&2){let a=Q.$implicit,l=xe();ge("p-title","Transport detail ",a.code,""),s(2),x("ngModel",a.status),c("p-options",l.statusOptions),s(2),c("p-value",a.batch_product),s(),c("p-value",a.driver),s(),c("p-value",a.license_plate)}}var Ye=(()=>{class r{transportService;columns;items;statusOptions=[{label:"Delivered",value:"delivered"},{label:"Transport",value:"transport"},{label:"Production",value:"production"}];constructor(a){this.transportService=a}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems()}isUndelivered(a,l){return a.status!=="delivered"}static \u0275fac=function(l){return new(l||r)(w(re))};static \u0275cmp=S({type:r,selectors:[["sample-po-table-transport"]],standalone:!1,features:[q([re])],decls:2,vars:9,consts:[["p-spacing","large",3,"p-auto-collapse","p-columns","p-hide-columns-manager","p-hide-table-search","p-items","p-sort","p-striped"],["p-table-row-template","",3,"p-table-row-template-arrow-direction","p-table-row-template-show"],[3,"p-title"],[1,"po-row"],["name","status","p-label","Transport status",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Batch of product","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","Driver","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","License plate","p-orientation","horizontal",1,"po-md-4",3,"p-value"]],template:function(l,o){l&1&&(t(0,"po-table",0),$(1,Pt,7,7,"ng-template",1),n()),l&2&&(c("p-auto-collapse",!0)("p-columns",o.columns)("p-hide-columns-manager",!0)("p-hide-table-search",!1)("p-items",o.items)("p-sort",!0)("p-striped",!0),s(),c("p-table-row-template-arrow-direction","right")("p-table-row-template-show",o.isUndelivered))},dependencies:[z,j,Ne,U,y,Be,je],encapsulation:2})}return r})();var _t=r=>({"docs-sample-code-tabs":r}),Ze=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-transport-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Transport"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-transport/sample-po-table-transport.component.html"),n(),t(13,"pre",7),e(14,`<po-table
  [p-auto-collapse]="true"
  [p-columns]="columns"
  [p-hide-columns-manager]="true"
  [p-hide-table-search]="false"
  [p-items]="items"
  [p-sort]="true"
  [p-striped]="true"
  p-spacing="large"
>
  <ng-template
    p-table-row-template
    let-rowItem
    let-i="rowIndex"
    [p-table-row-template-arrow-direction]="'right'"
    [p-table-row-template-show]="isUndelivered"
  >
    <po-widget p-title="Transport detail { { rowItem.code }}">
      <div class="po-row">
        <po-select
          class="po-md-6"
          name="status"
          [(ngModel)]="rowItem.status"
          p-label="Transport status"
          [p-options]="statusOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-info
          class="po-md-4"
          p-label="Batch of product"
          p-orientation="horizontal"
          [p-value]="rowItem.batch_product"
        >
        </po-info>

        <po-info class="po-md-4" p-label="Driver" p-orientation="horizontal" [p-value]="rowItem.driver"> </po-info>

        <po-info class="po-md-4" p-label="License plate" p-orientation="horizontal" [p-value]="rowItem.license_plate">
        </po-info>
      </div>
    </po-widget>
  </ng-template>
</po-table>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-transport/sample-po-table-transport.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoTableTransportService } from './sample-po-table-transport.service';

@Component({
  selector: 'sample-po-table-transport',
  templateUrl: 'sample-po-table-transport.component.html',
  providers: [SamplePoTableTransportService],
  standalone: false
})
export class SamplePoTableTransportComponent implements OnInit {
  columns: Array<PoTableColumn>;
  items: Array<any>;

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Delivered', value: 'delivered' },
    { label: 'Transport', value: 'transport' },
    { label: 'Production', value: 'production' }
  ];

  constructor(private transportService: SamplePoTableTransportService) {}

  ngOnInit() {
    this.columns = this.transportService.getColumns();
    this.items = this.transportService.getItems();
  }

  isUndelivered(row, index: number) {
    return row.status !== 'delivered';
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-transport/sample-po-table-transport.service.ts"),n(),t(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn, PoTagType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableTransportService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'code', type: 'number', width: '8%' },
      { property: 'product' },
      { property: 'customer' },
      { property: 'exit_forecast', label: 'Exit forecast', type: 'dateTime' },
      { property: 'time_since_purchase', label: 'Time since purchase', type: 'time', visible: false },
      { property: 'quantity', label: 'Quantity (Tons)', type: 'number', width: '15%', visible: false },
      { property: 'icms', label: 'ICMS', type: 'number', format: '1.2-5', visible: false },
      {
        property: 'status',
        type: 'label',
        width: '8%',
        labels: [
          { value: 'delivered', color: 'blue', label: 'Delivered' },
          { value: 'transport', label: 'Transport', type: PoTagType.Success },
          { value: 'production', color: ' #745678', label: 'Production' },
          { value: 'stock', color: 'rgb(201, 53, 125)', label: 'Stock', icon: 'an an-package' }
        ]
      }
    ];
  }

  getItems(): Array<any> {
    return [
      {
        code: 1200,
        product: 'Rice',
        customer: 'Angeloni',
        quantity: 3,
        icms: 1500,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'delivered',
        license_plate: 'MDJD9191',
        batch_product: 18041822,
        driver: 'Jos\xE9 Oliveira'
      },
      {
        code: 1355,
        product: 'Margarine',
        customer: 'Giassi',
        quantity: 1,
        icms: 50,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'transport',
        license_plate: 'XXA5454',
        batch_product: 18041821,
        driver: 'Francisco Pereira'
      },
      {
        code: 1496,
        product: 'Wheat flour',
        customer: 'Walmart',
        quantity: 5,
        icms: 2045,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'transport',
        license_plate: 'QEW5779',
        batch_product: 18041820,
        driver: 'Pedro da Costa'
      },
      {
        code: 1712,
        product: 'Milk',
        customer: 'Carrefour',
        quantity: 10,
        icms: 15005,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'production',
        license_plate: 'WWW1247',
        batch_product: 18041819,
        driver: 'Jo\xE3o da Silva'
      },
      {
        code: 1881,
        product: 'Oil',
        customer: 'Carrefour',
        quantity: 1,
        icms: 1110,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'production',
        license_plate: 'XXI2312',
        batch_product: 18041825,
        driver: 'Antonio Lima'
      },
      {
        code: 1551,
        product: 'Cream cheese',
        customer: 'Barbosa',
        quantity: 15,
        icms: 1119,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'stock',
        license_plate: 'XXI2359',
        batch_product: 18041888,
        driver: 'Vitoria Felix'
      }
    ];
  }

  private generateRandomDate() {
    const hour = Math.floor(Math.random() * 20);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    return new Date(2018, 10, 23, hour, minutes, seconds);
  }

  private generateRandomTime() {
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return \`00:\${minutesValid}:\${secondsValid}\`;
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-transport"),n(),i(27,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,_t,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,Ye],encapsulation:2})}return r})();var me=(()=>{class r{getColumns(){return[{property:"status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}]},{property:"country"},{property:"destination"},{property:"region",type:"subtitle",width:"180px",subtitles:[{value:"Alps",color:"color-01",label:"Alps",content:"AL"},{value:"Australasia",color:"color-02",label:"Australasia",content:"AU"},{value:"British Isle",color:"color-03",label:"British Isle",content:"BI"},{value:"Caucasus",color:"color-04",label:"Caucasus",content:"CA"},{value:"Danube",color:"color-05",label:"Danube",content:"DA"},{value:"East Asia",color:"color-06",label:"East Asia",content:"EA"},{value:"Latin America",color:"color-07",label:"Latin America",content:"LA"},{value:"Mediterranean",color:"color-08",label:"Mediterranean",content:"ME"},{value:"Nordics",color:"color-09",label:"Nordics",content:"NO"},{value:"North America",color:"color-10",label:"North America",content:"NA"},{value:"Southern Africa",color:"color-11",label:"Southern Africa",content:"SA"},{value:"Western Africa",color:"color-12",label:"Western Africa",content:"WA"}]},{property:"date",type:"date"},{property:"returnDate",label:"Return Date",type:"date"},{property:"value",type:"currency",format:"USD"},{property:"id",label:"Flight Number",type:"number"},{property:"onBoardService",label:"On Board Service",type:"boolean",boolean:{trueLabel:"Yes",falseLabel:"No"}},{property:"detail",label:"Details",type:"detail",detail:{columns:[{property:"package"},{property:"tour"},{property:"time",label:"Departure time",type:"time",format:"HH:mm"},{property:"distance",label:"Distance (Miles)",type:"number",format:"1.0-5"}],typeHeader:"top"}}]}getItems(){return[{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:!1,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"20:10:10",distance:"1000"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"09:15:19",distance:"2000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"07:10:20",distance:"3000"}]},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:!1,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"10:15:10",distance:"4800"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"22:15:10",distance:"11000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"10:15:10",distance:"1000"}]},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:!1,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:!1,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:!0,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48999,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:!1,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:!1,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:!1,airline:"Aero M\xE9xico",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"12:10:10",distance:"2200"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"11:10:10",distance:"1500"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"16:10:10",distance:"1800"}]},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:!0,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:!1,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:!0,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:!0,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:!1,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:!0,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:!1,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:!1,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:!0,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:!1,airline:"LATAM",status:"reserved",region:"Latin America"}]}static \u0275fac=function(l){return new(l||r)};static \u0275prov=L({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var et=(()=>{class r{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:"an an-currency-circle-dollar",label:"Apply Discount",disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:"an an-info",label:"Details"},{action:this.remove.bind(this),icon:"po-icon an an-trash",label:"Remove"}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(a,l,o){this.sampleAirfare=a,this.poNotification=l,this.poDialog=o}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems()}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem("initial-columns")){this.initialColumns=localStorage.getItem("initial-columns").split(",");let l=[...this.columns.map(o=>J(G({},o),{visible:this.initialColumns.includes(o.property)}))];l.sort(this.sortFunction),this.columns=l}}sortFunction(a,l){let o=localStorage.getItem("initial-columns").split(","),m=o.indexOf(a.property),p=o.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return-1;if(m>p)return 1}addToCart(){let a=this.poTable.getSelectedRows();a.length>0&&this.poDialog.confirm({title:"Add to cart",message:`Would you like to add ${a.length} items to cart?`,confirm:()=>this.confirmItems(a),cancel:()=>{}})}confirmItems(a){a.forEach(l=>{switch(l.status){case"available":this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case"reserved":this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case"closed":this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`);break}}),this.poTable.unselectRows()}collapseAll(){this.items.forEach((a,l)=>{a.detail&&(this.onCollapseDetail(),this.poTable.collapse(l))})}decreaseTotal(a){a.value&&(this.total-=a.value)}deleteItems(a){this.items=a}details(a){this.detail=a,this.poModal.open()}remove(a){this.poTable.removeItem(a)}discount(a){if(!a.disableDiscount){let l=J(G({},a),{value:a.value-a.value*.2,disableDiscount:!0});this.poTable.updateItem(a,l)}}expandAll(){this.totalExpanded=0,this.items.forEach((a,l)=>{a.detail&&(this.onExpandDetail(),this.poTable.expand(l))})}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded}onExpandDetail(){this.totalExpanded+=1}sumTotal(a){a.value&&(this.total+=a.value)}restoreColumn(){this.columns=this.columnsDefault}changeColumnVisible(a){localStorage.setItem("initial-columns",a)}getDescription(a){return`Airfare to ${a.destination} - ${a.initials}`}validateDiscount(a){return a.disableDiscount}static \u0275fac=function(l){return new(l||r)(w(me),w(ke),w(oe))};static \u0275cmp=S({type:r,selectors:[["sample-po-table-airfare"]],viewQuery:function(l,o){if(l&1&&(I(O,7),I(y,7)),l&2){let m;k(m=F())&&(o.poModal=m.first),k(m=F())&&(o.poTable=m.first)}},standalone:!1,features:[q([me,oe])],decls:16,vars:23,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-change-visible-columns","p-restore-column-manager","p-delete-items","p-container","p-height","p-hide-batch-actions","p-hide-table-search","p-selectable","p-sort","p-striped","p-actions","p-columns","p-items","p-max-columns","p-virtual-scroll"],["p-label","Total Value","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],["p-label","Expanded Itens","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],[1,"po-row"],["p-icon","an an-shopping-cart-simple","p-label","Add items to cart",1,"po-md-3",3,"p-click"],["p-label","Expand all detail",1,"po-md-3",3,"p-click"],["p-label","Collapse all detail",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm",3,"p-title"],["p-label","Airline",1,"po-sm-6",3,"p-value"],["p-label","Initials",1,"po-sm-2",3,"p-value"],["p-label","Class",1,"po-sm-4",3,"p-value"]],template:function(l,o){l&1&&(t(0,"div",0),e(1,"Choose one or more promotional airfares"),n(),i(2,"po-divider"),t(3,"po-table",1),E("p-collapsed",function(){return o.onCollapseDetail()})("p-expanded",function(){return o.onExpandDetail()})("p-selected",function(p){return o.sumTotal(p)})("p-unselected",function(p){return o.decreaseTotal(p)})("p-change-visible-columns",function(p){return o.changeColumnVisible(p)})("p-restore-column-manager",function(){return o.restoreColumn()})("p-delete-items",function(p){return o.deleteItems(p)}),n(),i(4,"po-divider")(5,"po-info",2),ne(6,"currency"),i(7,"po-info",3),t(8,"div",4)(9,"po-button",5),E("p-click",function(){return o.addToCart()}),n(),t(10,"po-button",6),E("p-click",function(){return o.expandAll()}),n(),t(11,"po-button",7),E("p-click",function(){return o.collapseAll()}),n()(),t(12,"po-modal",8),i(13,"po-info",9)(14,"po-info",10)(15,"po-info",11),n()),l&2&&(s(3),c("p-container",!0)("p-height",400)("p-hide-batch-actions",!1)("p-hide-table-search",!1)("p-selectable",!0)("p-sort",!0)("p-striped",!0)("p-actions",o.actions)("p-columns",o.columns)("p-items",o.items)("p-max-columns",7)("p-virtual-scroll",!1),s(2),ve("p-value",ye(6,20,o.total,"USD")),s(2),c("p-value",o.totalExpanded),s(5),ee("p-title","",o.detail==null?null:o.detail.destination," - ",o.detail==null?null:o.detail.country,""),s(),c("p-value",o.detail==null?null:o.detail.airline),s(),c("p-value",o.detail==null?null:o.detail.initials),s(),c("p-value",o.detail==null?null:o.detail.class))},dependencies:[W,R,U,O,y,Pe],encapsulation:2})}return r})();var It=r=>({"docs-sample-code-tabs":r}),tt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-airfare-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Airfare"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-airfare/sample-po-table-airfare.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

<po-divider></po-divider>

<po-table
  [p-container]="true"
  [p-height]="400"
  [p-hide-batch-actions]="false"
  [p-hide-table-search]="false"
  [p-selectable]="true"
  [p-sort]="true"
  [p-striped]="true"
  [p-actions]="actions"
  [p-columns]="columns"
  [p-items]="items"
  [p-max-columns]="7"
  [p-virtual-scroll]="false"
  (p-collapsed)="onCollapseDetail()"
  (p-expanded)="onExpandDetail()"
  (p-selected)="sumTotal($event)"
  (p-unselected)="decreaseTotal($event)"
  (p-change-visible-columns)="changeColumnVisible($event)"
  (p-restore-column-manager)="restoreColumn()"
  (p-delete-items)="deleteItems($event)"
>
</po-table>

<po-divider></po-divider>

<po-info
  class="po-md-6 po-mb-sm-2 po-mb-md-2 po-lb-lg-2"
  p-label="Total Value"
  p-orientation="horizontal"
  p-value="{ { total | currency: 'USD' }}"
>
</po-info>

<po-info
  class="po-md-6 po-mb-sm-2 po-mb-md-2 po-lb-lg-2"
  p-label="Expanded Itens"
  p-orientation="horizontal"
  [p-value]="totalExpanded"
>
</po-info>

<div class="po-row">
  <po-button class="po-md-3" p-icon="an an-shopping-cart-simple" p-label="Add items to cart" (p-click)="addToCart()">
  </po-button>
  <po-button class="po-md-3" p-label="Expand all detail" (p-click)="expandAll()"> </po-button>
  <po-button class="po-md-3" p-label="Collapse all detail" (p-click)="collapseAll()"> </po-button>
</div>

<po-modal p-click-out="true" p-size="sm" p-title="{ { detail?.destination }} - { { detail?.country }}">
  <po-info class="po-sm-6" p-label="Airline" [p-value]="detail?.airline"> </po-info>

  <po-info class="po-sm-2" p-label="Initials" [p-value]="detail?.initials"> </po-info>

  <po-info class="po-sm-4" p-label="Class" [p-value]="detail?.class"> </po-info>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-airfare/sample-po-table-airfare.component.ts"),n(),t(19,"pre",9),e(20,`import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';

import {
  PoDialogService,
  PoModalComponent,
  PoTableAction,
  PoTableColumn,
  PoTableComponent,
  PoNotificationService
} from '@po-ui/ng-components';

import { SamplePoTableAirfareService } from './sample-po-table-airfare.service';

@Component({
  selector: 'sample-po-table-airfare',
  templateUrl: './sample-po-table-airfare.component.html',
  providers: [SamplePoTableAirfareService, PoDialogService],
  standalone: false
})
export class SamplePoTableAirfareComponent implements AfterViewInit, OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent;

  actions: Array<PoTableAction> = [
    {
      action: this.discount.bind(this),
      icon: 'an an-currency-circle-dollar',
      label: 'Apply Discount',
      disabled: this.validateDiscount.bind(this)
    },
    { action: this.details.bind(this), icon: 'an an-info', label: 'Details' },
    { action: this.remove.bind(this), icon: 'po-icon an an-trash', label: 'Remove' }
  ];
  columns: Array<PoTableColumn>;
  columnsDefault: Array<PoTableColumn>;
  detail: any;
  items: Array<any>;
  total: number = 0;
  totalExpanded = 0;
  initialColumns: Array<any>;

  constructor(
    private sampleAirfare: SamplePoTableAirfareService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService
  ) {}

  ngOnInit(): void {
    this.columns = this.sampleAirfare.getColumns();
    this.items = this.sampleAirfare.getItems();
  }

  ngAfterViewInit(): void {
    this.columnsDefault = this.columns;
    if (localStorage.getItem('initial-columns')) {
      this.initialColumns = localStorage.getItem('initial-columns').split(',');

      const result = this.columns.map(el => ({
        ...el,
        visible: this.initialColumns.includes(el.property)
      }));

      const newColumn = [...result];
      newColumn.sort(this.sortFunction);
      this.columns = newColumn;
    }
  }

  sortFunction(a, b) {
    const teste = localStorage.getItem('initial-columns').split(',');
    const indexA = teste.indexOf(a['property']);
    const indexB = teste.indexOf(b['property']);
    if (indexA === -1) {
      return 1;
    }
    if (indexB === -1) {
      return -1;
    }
    if (indexA < indexB) {
      return -1;
    } else if (indexA > indexB) {
      return 1;
    }
  }

  addToCart() {
    const selectedItems = this.poTable.getSelectedRows();

    if (selectedItems.length > 0) {
      this.poDialog.confirm({
        title: 'Add to cart',
        message: \`Would you like to add \${selectedItems.length} items to cart?\`,
        confirm: () => this.confirmItems(selectedItems),
        cancel: () => {}
      });
    }
  }

  confirmItems(selectedItems: Array<any>) {
    selectedItems.forEach(item => {
      switch (item.status) {
        case 'available':
          this.poNotification.success(\`\${this.getDescription(item)} added succesfully\`);
          break;
        case 'reserved':
          this.poNotification.warning(
            \`\${this.getDescription(item)} added succesfully, verify your e-mail to complete reservation\`
          );
          break;
        case 'closed':
          this.poNotification.error(\`\${this.getDescription(item)} is closed and not available anymore\`);
          break;
      }
    });

    this.poTable.unselectRows();
  }

  collapseAll() {
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onCollapseDetail();
        this.poTable.collapse(index);
      }
    });
  }

  decreaseTotal(row: any) {
    if (row.value) {
      this.total -= row.value;
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
  }

  details(item) {
    this.detail = item;
    this.poModal.open();
  }

  remove(item: { [key: string]: any }) {
    this.poTable.removeItem(item);
  }

  discount(item) {
    if (!item.disableDiscount) {
      const updatedItem = { ...item, value: item.value - item.value * 0.2, disableDiscount: true };
      this.poTable.updateItem(item, updatedItem);
    }
  }

  expandAll() {
    this.totalExpanded = 0;
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onExpandDetail();
        this.poTable.expand(index);
      }
    });
  }

  onCollapseDetail() {
    this.totalExpanded -= 1;
    this.totalExpanded = this.totalExpanded < 0 ? 0 : this.totalExpanded;
  }

  onExpandDetail() {
    this.totalExpanded += 1;
  }

  sumTotal(row: any) {
    if (row.value) {
      this.total += row.value;
    }
  }

  restoreColumn() {
    this.columns = this.columnsDefault;
  }

  changeColumnVisible(event) {
    localStorage.setItem('initial-columns', event);
  }

  private getDescription(item: any) {
    return \`Airfare to \${item.destination} - \${item.initials}\`;
  }

  private validateDiscount(item) {
    return item.disableDiscount;
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-airfare/sample-po-table-airfare.service.ts"),n(),t(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn, PoTableDetail } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableAirfareService {
  getColumns(): Array<PoTableColumn> {
    const airfareDetail: PoTableDetail = {
      columns: [
        { property: 'package' },
        { property: 'tour' },
        { property: 'time', label: 'Departure time', type: 'time', format: 'HH:mm' },
        { property: 'distance', label: 'Distance (Miles)', type: 'number', format: '1.0-5' }
      ],
      typeHeader: 'top'
    };

    return [
      {
        property: 'status',
        type: 'label',
        labels: [
          { value: 'available', color: 'color-11', label: 'Available' },
          { value: 'reserved', color: 'color-08', label: 'Reserved' },
          { value: 'closed', color: 'color-07', label: 'Closed' }
        ]
      },
      { property: 'country' },
      { property: 'destination' },
      {
        property: 'region',
        type: 'subtitle',
        width: '180px',
        subtitles: [
          { value: 'Alps', color: 'color-01', label: 'Alps', content: 'AL' },
          { value: 'Australasia', color: 'color-02', label: 'Australasia', content: 'AU' },
          { value: 'British Isle', color: 'color-03', label: 'British Isle', content: 'BI' },
          { value: 'Caucasus', color: 'color-04', label: 'Caucasus', content: 'CA' },
          { value: 'Danube', color: 'color-05', label: 'Danube', content: 'DA' },
          { value: 'East Asia', color: 'color-06', label: 'East Asia', content: 'EA' },
          { value: 'Latin America', color: 'color-07', label: 'Latin America', content: 'LA' },
          { value: 'Mediterranean', color: 'color-08', label: 'Mediterranean', content: 'ME' },
          { value: 'Nordics', color: 'color-09', label: 'Nordics', content: 'NO' },
          { value: 'North America', color: 'color-10', label: 'North America', content: 'NA' },
          { value: 'Southern Africa', color: 'color-11', label: 'Southern Africa', content: 'SA' },
          { value: 'Western Africa', color: 'color-12', label: 'Western Africa', content: 'WA' }
        ]
      },
      { property: 'date', type: 'date' },
      { property: 'returnDate', label: 'Return Date', type: 'date' },
      { property: 'value', type: 'currency', format: 'USD' },
      { property: 'id', label: 'Flight Number', type: 'number' },
      {
        property: 'onBoardService',
        label: 'On Board Service',
        type: 'boolean',
        boolean: {
          trueLabel: 'Yes',
          falseLabel: 'No'
        }
      },
      { property: 'detail', label: 'Details', type: 'detail', detail: airfareDetail }
    ];
  }

  getItems() {
    return [
      {
        id: 11234,
        initials: 'BR',
        country: 'Brazil',
        value: 1000.0,
        date: '2018-10-09',
        returnDate: '2018-11-01',
        class: 'Economic',
        onBoardService: false,
        destination: 'Rio de Janeiro',
        airline: 'Azul',
        status: 'available',
        region: 'Latin America',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '20:10:10',
            distance: '1000'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '09:15:19',
            distance: '2000'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '07:10:20',
            distance: '3000'
          }
        ]
      },
      {
        id: 22467,
        initials: 'FR',
        country: 'France',
        value: 5000.0,
        date: '2019-12-13',
        returnDate: '2019-12-31',
        class: 'Economic',
        onBoardService: false,
        destination: 'Paris',
        airline: 'British Airways',
        status: 'closed',
        region: 'Alps',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '10:15:10',
            distance: '4800'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '22:15:10',
            distance: '11000'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '10:15:10',
            distance: '1000'
          }
        ]
      },
      {
        id: 40670,
        initials: 'SN',
        country: 'Senegal',
        value: 3200.0,
        date: '2017-11-22',
        returnDate: '2018-12-01',
        class: 'Economic',
        onBoardService: false,
        destination: 'Dakar',
        airline: 'Iberia',
        status: 'closed',
        region: 'Western Africa'
      },
      {
        id: 34679,
        initials: 'PT',
        country: 'Portugal',
        value: 5500.0,
        date: '2017-10-10',
        returnDate: '2018-10-20',
        class: 'Economic',
        onBoardService: false,
        destination: 'Lisbon',
        airline: 'Air Europa',
        status: 'closed',
        region: 'Mediterranean'
      },
      {
        id: 48999,
        initials: 'RU',
        country: 'Russia',
        value: 6700.0,
        date: '2019-01-17',
        returnDate: '2019-02-20',
        class: 'First Class',
        onBoardService: true,
        destination: 'Moscow',
        airline: 'Lufthansa',
        status: 'reserved',
        region: 'Caucasus'
      },
      {
        id: 48999,
        initials: 'US',
        country: 'United States',
        value: 2700.49,
        date: '2018-10-17',
        returnDate: '2018-10-29',
        class: 'Economic',
        onBoardService: false,
        destination: 'Los Angeles',
        airline: 'American Airlines',
        status: 'reserved',
        region: 'North America'
      },
      {
        id: 54563,
        initials: 'CL',
        country: 'Chile',
        value: 2000.0,
        date: '2018-10-20',
        returnDate: '2018-11-01',
        destination: 'Cusco',
        class: 'Economic',
        onBoardService: false,
        airline: 'LATAM',
        status: 'available',
        region: 'Latin America'
      },
      {
        id: 64568,
        initials: 'MX',
        country: 'Mexico',
        value: 2100.0,
        date: '2018-03-10',
        returnDate: '2018-05-09',
        destination: 'Mexico City',
        class: 'Economic',
        onBoardService: false,
        airline: 'Aero M\xE9xico',
        status: 'available',
        region: 'Latin America',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '12:10:10',
            distance: '2200'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '11:10:10',
            distance: '1500'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '16:10:10',
            distance: '1800'
          }
        ]
      },
      {
        id: 75456,
        initials: 'IE',
        country: 'Ireland',
        value: 6300.0,
        date: '2018-10-14',
        returnDate: '2018-10-30',
        destination: 'Cork',
        class: 'First Class',
        onBoardService: true,
        airline: 'Lufthansa',
        status: 'reserved',
        region: 'British Isle'
      },
      {
        id: 23445,
        initials: 'ZA',
        country: 'South Africa',
        value: 1900.0,
        date: '2018-12-10',
        returnDate: '2018-12-25',
        destination: 'Cape Town',
        class: 'Economic',
        onBoardService: false,
        airline: 'South African Airways',
        status: 'available',
        region: 'Southern Africa'
      },
      {
        id: 19238,
        initials: 'AU',
        country: 'Australia',
        value: 6300.0,
        date: '2018-10-14',
        returnDate: '2018-10-30',
        destination: 'Sydney',
        class: 'First Class',
        onBoardService: true,
        airline: 'Jetstar Airways',
        status: 'reserved',
        region: 'Australasia'
      },
      {
        id: 85456,
        initials: 'JP',
        country: 'Japan',
        value: 5900.0,
        date: '2018-10-25',
        returnDate: '2018-11-10',
        destination: 'Tokio',
        class: 'Executive',
        onBoardService: true,
        airline: 'Japan Airlines',
        status: 'available',
        region: 'East Asia'
      },
      {
        id: 94565,
        initials: 'CN',
        country: 'China',
        value: 2900.0,
        date: '2018-10-10',
        returnDate: '2018-10-25',
        destination: 'Beijing',
        class: 'Economic',
        onBoardService: false,
        airline: 'Malaysia Airlines',
        status: 'available',
        region: 'East Asia'
      },
      {
        id: 32330,
        initials: 'UK',
        country: 'England',
        value: 2090.5,
        date: '2018-10-07',
        returnDate: '2018-11-15',
        destination: 'London',
        class: 'Executive',
        onBoardService: true,
        airline: 'British Airways',
        status: 'available',
        region: 'British Isle'
      },
      {
        id: 14560,
        initials: 'CA',
        country: 'Canada',
        value: 2090.5,
        date: '2018-10-07',
        returnDate: '2018-10-20',
        destination: 'Quebec',
        class: 'Economic',
        onBoardService: false,
        airline: 'American Airlines',
        status: 'available',
        region: 'North America'
      },
      {
        id: 93800,
        initials: 'IS',
        country: 'Iceland',
        value: 6300.0,
        date: '2018-10-12',
        returnDate: '2018-10-27',
        destination: 'Reykjav\xEDk',
        class: 'Economic',
        onBoardService: false,
        airline: 'Star Alliance',
        status: 'available',
        region: 'Nordics'
      },
      {
        id: 34239,
        initials: 'DE',
        country: 'Germany',
        value: 3070.5,
        date: '2018-10-07',
        returnDate: '2018-10-20',
        destination: 'Berlin',
        class: 'Executive',
        onBoardService: true,
        airline: 'LATAM',
        status: 'available',
        region: 'Danube'
      },
      {
        id: 45611,
        initials: 'AR',
        country: 'Argentina',
        value: 3500.5,
        date: '2018-12-07',
        returnDate: '2018-12-29',
        destination: 'Ushuaia',
        class: 'Economic',
        onBoardService: false,
        airline: 'LATAM',
        status: 'reserved',
        region: 'Latin America'
      }
    ];
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-airfare"),n(),i(27,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,It,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,et],encapsulation:2})}return r})();var H=function(r){return r[r.Stable=0]="Stable",r[r.Experimental=1]="Experimental",r[r.RoadMap=2]="RoadMap",r}(H||{});var se=(()=>{class r{items=[{component:{favorite:["favorite","documentation"],name:"PO Select",description:"Display a list of items and allows selection",link:"/documentation/po-select",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Checkbox",description:"Group of square buttons that allows multiple items to be selected",link:"/documentation/po-checkbox-group",extra:"Best Practices",extras:["Short and objective texts for items","Use with short lists","For big lists use PO Multiselect"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Login",description:"Template for authentication",link:"/documentation/po-page-login",extra:"Features",extras:[],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Number",description:"Input that allows only numbers",link:"/documentation/po-number",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Dynamic Table",description:"Template for list resources with a table",link:"/documentation/po-page-dynamic-table",extra:"Features",extras:["6 defaults actions","Use Metadata to build your page","No code","Customization"],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Combo",description:"Display a list of items with filter and allows selection",link:"/documentation/po-combo",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Notification",description:"Show notification easily and quickly",link:"/documentation/po-notification",extra:"Features",extras:["4 types of notifications","Define time for your notifications","Use actions in your notification"],status:0,type:"service"}},{component:{favorite:["favorite","documentation"],name:"PO Multiselect",description:"Display a list of items and allows multiple selection",link:"/documentation/po-multiselect",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:[],name:"PO Grid",description:"Create a grid for edition",link:"/documentation/po-grid",extra:"Features",extras:[],status:2,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Input",description:"Input for general texts",link:"/documentation/po-input",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Textarea",description:"Larger input for big texts",link:"/documentation/po-textarea",extra:"Best Practices",extras:["Recommended to large texts like observations and details","For short texts use po-input"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Datepicker",description:"Input with calendar for dates",link:"/documentation/po-datepicker",extra:"Features",extras:["Multiple idioms ( pt, es , en)","Custom date formats","Period validation (start date and end date)"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Email",description:"Input that allows valid email texts (username@email.com)",link:"/documentation/po-email",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Url",description:"Input that expects a valid url as text (http://www.url.com)",link:"/documentation/po-url",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Password",description:"Input with bullet text to type passwords",link:"/documentation/po-password",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Login",description:"Input with a user icon that represents a login field",link:"/documentation/po-login",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Upload",description:"Upload file(s) with a loading bar",link:"/documentation/po-upload",extra:"Features",extras:["Multiple file selection","Automatic upload after click","File format and size restriction"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Avatar",description:"Creates a circle with a picture inside",link:"/documentation/po-avatar",extra:"Features",extras:["Multiple sizes","Default image"],status:0,type:"component"}}];getItems(a,l=!1){let o=[...this.items];return a&&a.column&&o.sort((m,p)=>this.sort(m,p,a)),l||(o.length=10),o}sort(a,l,o){let m=o.column.property,p=o.type;if(m.split(".").length>1){let d=m.split(".")[0],be=m.split(".")[1];return a[d][be]<l[d][be]?p===K.Ascending?-1:1:p===K.Ascending?1:-1}else return a[m]<l[m]?p===K.Ascending?-1:1:p===K.Ascending?1:-1}static \u0275fac=function(l){return new(l||r)};static \u0275prov=L({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Lt(r,Q){if(r&1&&(t(0,"div"),e(1),ne(2,"uppercase"),n()),r&2){let a=Q.$implicit;he("badge ",a,""),s(),pe(fe(2,4,a))}}function qt(r,Q){if(r&1&&(t(0,"ul")(1,"li",5),e(2),n(),i(3,"hr"),n()),r&2){let a=Q.$implicit;s(2),pe(a)}}var nt=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=!1;title;isLoading=!1;columns=[{property:"component.status",type:"label",label:"Status",width:"5%",labels:[{value:H.Stable,color:"color-11",label:"Stable",textColor:"white",tooltip:"Published component"},{value:H.Experimental,color:"color-08",label:"Experimental",textColor:"white",tooltip:"Component in homologation"},{value:H.RoadMap,color:"color-07",label:"Roadmap",textColor:"white",tooltip:"Component in roadmap"}]},{property:"component.name",label:"Name",type:"link"},{property:"component.type",label:"Type",type:"columnTemplate",width:"10%"},{property:"component.description",label:"Descri\xE7\xE3o",color:this.experimentalColor.bind(this)},{property:"component.extra",label:"Extras",width:"10%",type:"link",tooltip:"Additional details",action:(a,l)=>{this.extras(a,l)},disabled:this.canShowExtras.bind(this)},{property:"component.favorite",label:"Actions",type:"icon",sortable:!1,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:"an an-star",tooltip:"Favorite",value:"favorite"},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:"an an-arrow-square-out",tooltip:"Click to go to documentation",value:"documentation"}]}];constructor(a,l){this.sampleComponents=a,this.router=l}ngOnInit(){this.items=this.sampleComponents.getItems()}experimentalColor(a){return a?.component?.status===H.Experimental?"color-08":"color-11"}extras(a,l){this.title=a,this.extraInformation=l,this.poModal.open()}goToDocumentation(a){this.router.navigate([a?.component?.link])}showMore(a){this.isLoading=!0,this.showMoreDisabled=!0,setTimeout(()=>{this.items=this.getItems(a),this.isLoading=!1},4e3)}sort(a){this.items=this.getItems(a)}showAlert(a){alert(a)}canGoToDocumentation(a){return a?.component?.status!==H.Stable}canShowExtras(a){return a?.component?.status!==H.Stable||a?.component?.extras.length===0}favorite(a){a.component.isFavorite=!a.component.isFavorite}getItems(a){return this.sampleComponents.getItems(a,this.showMoreDisabled)}isFavorite(a){return a?.component?.isFavorite?"color-08":"color-11"}static \u0275fac=function(l){return new(l||r)(w(se),w(ie))};static \u0275cmp=S({type:r,selectors:[["sample-po-table-components"]],viewQuery:function(l,o){if(l&1&&I(O,7),l&2){let m;k(m=F())&&(o.poModal=m.first)}},standalone:!1,features:[q([se])],decls:7,vars:10,consts:[[1,"po-font-text-large","po-text-color-neutral-dark-40"],["p-container","shadow",3,"p-show-more","p-sort-by","p-loading-show-more","p-columns","p-items","p-show-more-disabled","p-sort"],["p-table-column-template","",3,"p-property"],["p-click-out","true","p-size","sm",3,"p-title"],[4,"ngFor","ngForOf"],[1,"po-font-text"]],template:function(l,o){l&1&&(t(0,"div",0),e(1,"PO UI Library"),n(),i(2,"hr"),t(3,"po-table",1),E("p-show-more",function(p){return o.showMore(p)})("p-sort-by",function(p){return o.sort(p)}),$(4,Lt,3,6,"ng-template",2),n(),t(5,"po-modal",3),$(6,qt,4,1,"ul",4),n()),l&2&&(s(3),c("p-loading-show-more",o.isLoading)("p-columns",o.columns)("p-items",o.items)("p-show-more-disabled",o.showMoreDisabled)("p-sort",!0),s(),c("p-property","component.type"),s(),ee("p-title","",o.title," - ",o.extraInformation==null?null:o.extraInformation.component,""),s(),c("ngForOf",o.extraInformation==null?null:o.extraInformation.extras))},dependencies:[Ce,O,y,Ve,Te],styles:[".badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}"]})}return r})();var Bt=r=>({"docs-sample-code-tabs":r}),it=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-components-view"]],standalone:!1,decls:38,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Po Field Components"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-components/sample-po-table-components.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

<hr />

<po-table
  p-container="shadow"
  [p-loading-show-more]="isLoading"
  [p-columns]="columns"
  [p-items]="items"
  [p-show-more-disabled]="showMoreDisabled"
  [p-sort]="true"
  (p-show-more)="showMore($event)"
  (p-sort-by)="sort($event)"
>
  <ng-template p-table-column-template [p-property]="'component.type'" let-value>
    <div class="badge { { value }}">{ { value | uppercase }}</div>
  </ng-template>
</po-table>

<po-modal p-click-out="true" p-size="sm" p-title="{ { title }} - { { extraInformation?.component }}">
  <ul *ngFor="let extra of extraInformation?.extras">
    <li class="po-font-text">{ { extra }}</li>
    <hr />
  </ul>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-components/sample-po-table-components.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoModalComponent, PoTableColumn, PoTableColumnLabel, PoTableColumnSort } from '@po-ui/ng-components';

import { SamplePoTableComponentStatus } from './sample-po-table-components.enum';
import { SamplePoTableComponentsService } from './sample-po-table-components.service';

@Component({
  selector: 'sample-po-table-components',
  templateUrl: './sample-po-table-components.component.html',
  styleUrls: ['./sample-po-table-components.component.css'],
  providers: [SamplePoTableComponentsService],
  standalone: false
})
export class SamplePoTableComponentsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  extraInformation: any;
  items: Array<any>;
  showMoreDisabled: boolean = false;
  title: any;
  isLoading: boolean = false;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'component.status',
      type: 'label',
      label: 'Status',
      width: '5%',
      labels: <Array<PoTableColumnLabel>>[
        {
          value: SamplePoTableComponentStatus.Stable,
          color: 'color-11',
          label: 'Stable',
          textColor: 'white',
          tooltip: 'Published component'
        },
        {
          value: SamplePoTableComponentStatus.Experimental,
          color: 'color-08',
          label: 'Experimental',
          textColor: 'white',
          tooltip: 'Component in homologation'
        },
        {
          value: SamplePoTableComponentStatus.RoadMap,
          color: 'color-07',
          label: 'Roadmap',
          textColor: 'white',
          tooltip: 'Component in roadmap'
        }
      ]
    },
    {
      property: 'component.name',
      label: 'Name',
      type: 'link'
    },
    { property: 'component.type', label: 'Type', type: 'columnTemplate', width: '10%' },
    { property: 'component.description', label: 'Descri\xE7\xE3o', color: this.experimentalColor.bind(this) },
    {
      property: 'component.extra',
      label: 'Extras',
      width: '10%',
      type: 'link',
      tooltip: 'Additional details',
      action: (value, row) => {
        this.extras(value, row);
      },
      disabled: this.canShowExtras.bind(this)
    },
    {
      property: 'component.favorite',
      label: 'Actions',
      type: 'icon',
      sortable: false,
      icons: [
        {
          action: this.favorite.bind(this),
          color: this.isFavorite.bind(this),
          icon: 'an an-star',
          tooltip: 'Favorite',
          value: 'favorite'
        },
        {
          action: this.goToDocumentation.bind(this),
          disabled: this.canGoToDocumentation.bind(this),
          icon: 'an an-arrow-square-out',
          tooltip: 'Click to go to documentation',
          value: 'documentation'
        }
      ]
    }
  ];

  constructor(
    public sampleComponents: SamplePoTableComponentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items = this.sampleComponents.getItems();
  }

  experimentalColor(row) {
    return row?.component?.status === SamplePoTableComponentStatus.Experimental ? 'color-08' : 'color-11';
  }

  extras(value, row) {
    this.title = value;
    this.extraInformation = row;

    this.poModal.open();
  }

  goToDocumentation(row) {
    this.router.navigate([row?.component?.link]);
  }

  showMore(sort: PoTableColumnSort) {
    this.isLoading = true;
    this.showMoreDisabled = true;
    setTimeout(() => {
      this.items = this.getItems(sort);
      this.isLoading = false;
    }, 4000);
  }

  sort(sort: PoTableColumnSort) {
    this.items = this.getItems(sort);
  }

  public showAlert(msg): void {
    alert(msg);
  }

  private canGoToDocumentation(row) {
    return row?.component?.status !== SamplePoTableComponentStatus.Stable;
  }

  private canShowExtras(row: any) {
    return row?.component?.status !== SamplePoTableComponentStatus.Stable || row?.component?.extras.length === 0;
  }

  private favorite(row) {
    row.component.isFavorite = !row.component.isFavorite;
  }

  private getItems(sort: PoTableColumnSort) {
    return this.sampleComponents.getItems(sort, this.showMoreDisabled);
  }

  private isFavorite(row) {
    return row?.component?.isFavorite ? 'color-08' : 'color-11';
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-components/sample-po-table-components.enum.ts"),n(),t(23,"pre",9),e(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),n(),t(25,"label",6),e(26,"sample-po-table-components/sample-po-table-components.service.ts"),n(),t(27,"pre",9),e(28,`import { Injectable } from '@angular/core';

import { PoTableColumnSort, PoTableColumnSortType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableComponentsService {
  readonly items = [
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Select',
        description: 'Display a list of items and allows selection',
        link: '/documentation/po-select',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Checkbox',
        description: 'Group of square buttons that allows multiple items to be selected',
        link: '/documentation/po-checkbox-group',
        extra: 'Best Practices',
        extras: ['Short and objective texts for items', 'Use with short lists', 'For big lists use PO Multiselect'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Login',
        description: 'Template for authentication',
        link: '/documentation/po-page-login',
        extra: 'Features',
        extras: [],
        status: 0,
        type: 'template'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Number',
        description: 'Input that allows only numbers',
        link: '/documentation/po-number',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Dynamic Table',
        description: 'Template for list resources with a table',
        link: '/documentation/po-page-dynamic-table',
        extra: 'Features',
        extras: ['6 defaults actions', 'Use Metadata to build your page', 'No code', 'Customization'],
        status: 0,
        type: 'template'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Combo',
        description: 'Display a list of items with filter and allows selection',
        link: '/documentation/po-combo',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Notification',
        description: 'Show notification easily and quickly',
        link: '/documentation/po-notification',
        extra: 'Features',
        extras: ['4 types of notifications', 'Define time for your notifications', 'Use actions in your notification'],
        status: 0,
        type: 'service'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Multiselect',
        description: 'Display a list of items and allows multiple selection',
        link: '/documentation/po-multiselect',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: [],
        name: 'PO Grid',
        description: 'Create a grid for edition',
        link: '/documentation/po-grid',
        extra: 'Features',
        extras: [],
        status: 2,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Input',
        description: 'Input for general texts',
        link: '/documentation/po-input',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Textarea',
        description: 'Larger input for big texts',
        link: '/documentation/po-textarea',
        extra: 'Best Practices',
        extras: ['Recommended to large texts like observations and details', 'For short texts use po-input'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Datepicker',
        description: 'Input with calendar for dates',
        link: '/documentation/po-datepicker',
        extra: 'Features',
        extras: [
          'Multiple idioms ( pt, es , en)',
          'Custom date formats',
          'Period validation (start date and end date)'
        ],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Email',
        description: 'Input that allows valid email texts (username@email.com)',
        link: '/documentation/po-email',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Url',
        description: 'Input that expects a valid url as text (http://www.url.com)',
        link: '/documentation/po-url',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Password',
        description: 'Input with bullet text to type passwords',
        link: '/documentation/po-password',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Login',
        description: 'Input with a user icon that represents a login field',
        link: '/documentation/po-login',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Upload',
        description: 'Upload file(s) with a loading bar',
        link: '/documentation/po-upload',
        extra: 'Features',
        extras: ['Multiple file selection', 'Automatic upload after click', 'File format and size restriction'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Avatar',
        description: 'Creates a circle with a picture inside',
        link: '/documentation/po-avatar',
        extra: 'Features',
        extras: ['Multiple sizes', 'Default image'],
        status: 0,
        type: 'component'
      }
    }
  ];

  getItems(sort?: PoTableColumnSort, loadAll: boolean = false): Array<any> {
    const result = [...this.items];

    if (sort && sort.column) {
      result.sort((value, valueToCompare) => this.sort(value, valueToCompare, sort));
    }

    if (!loadAll) {
      result.length = 10;
    }

    return result;
  }

  private sort(value: any, valueToCompare: any, sort: PoTableColumnSort) {
    const property = sort.column.property;
    const type = sort.type;

    if (property.split('.').length > 1) {
      const propertySplitedFirst = property.split('.')[0];
      const propertySplitedLast = property.split('.')[1];
      if (
        value[propertySplitedFirst][propertySplitedLast] < valueToCompare[propertySplitedFirst][propertySplitedLast]
      ) {
        return type === PoTableColumnSortType.Ascending ? -1 : 1;
      }
      return type === PoTableColumnSortType.Ascending ? 1 : -1;
    } else {
      if (value[property] < valueToCompare[property]) {
        return type === PoTableColumnSortType.Ascending ? -1 : 1;
      }
      return type === PoTableColumnSortType.Ascending ? 1 : -1;
    }
  }
}
`),n()()(),t(29,"po-tab",10)(30,"div")(31,"label",6),e(32,"sample-po-table-components/sample-po-table-components.component.css"),n(),t(33,"pre",11),e(34,`.badge {
  padding: 3px 10px;
  border-radius: 3px;
  color: #fff;
  width: 100px;
  text-align: center;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 10px;
}

.badge.component {
  background-color: #82b1ff;
}

.badge.service {
  background-color: #b39ddb;
}

.badge.template {
  background-color: #ffb515;
}
`),n()()()()(),t(35,"div",12),i(36,"sample-po-table-components"),n(),i(37,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,Bt,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,nt],encapsulation:2})}return r})();var de=(()=>{class r{http;constructor(a){this.http=a}getColumns(){return[{property:"id",label:"Id",type:"string",width:"90px"},{property:"label",label:"Name",type:"string",width:"90px"},{property:"email",label:"E-mail",type:"string",width:"120px"}]}getItems(){return this.http.get("https://po-sample-api.onrender.com/v1/heroes").pipe(Ee("items"))}static \u0275fac=function(l){return new(l||r)(Se(we))};static \u0275prov=L({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Ht=["POItemsOri"],zt=["POItemsSelected"],ot=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(a){this.service=a}ngOnInit(){this.getColumns(),this.getItems()}getColumns(){this.columns=this.service.getColumns()}getItems(){this.service.getItems().subscribe({next:a=>this.items=a,error:a=>console.error(a)})}changeOptions(a,l){if(l==="new")this.itemsSelected.push({id:a.id,label:a.label,email:a.email}),this.itemsSelected=[...this.itemsSelected];else{let o=this.itemsSelected.findIndex(m=>m.id===a.id);this.poItemsSelected.removeItem(o),this.itemsSelected=[...this.poItemsSelected.items]}}deleteItems(a){this.items=a,this.itemsSelected=[]}static \u0275fac=function(l){return new(l||r)(w(de))};static \u0275cmp=S({type:r,selectors:[["sample-po-table-heroes"]],viewQuery:function(l,o){if(l&1&&(I(Ht,7),I(zt,7)),l&2){let m;k(m=F())&&(o.poItemsOri=m.first),k(m=F())&&(o.poItemsSelected=m.first)}},standalone:!1,features:[q([de])],decls:11,vars:16,consts:[["POItemsOri",""],["POItemsSelected",""],[1,"po-row","po-pb-2"],[1,"po-md-6"],[1,"po-font-text-bold","po-text-color-neutral-dark-40"],["p-selectable","true","p-infinite-scroll-distance","80","p-height","300",3,"p-selected","p-unselected","p-delete-items","p-columns","p-infinite-scroll","p-hide-select-all","p-hide-table-search","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"],["p-height","300",3,"p-columns","p-hide-table-search","p-striped","p-infinite-scroll","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"]],template:function(l,o){if(l&1){let m=B();t(0,"div",2)(1,"div",3)(2,"div",4),e(3,"Choose one or more heroes for your team"),n(),t(4,"po-table",5,0),E("p-selected",function(d){return u(m),b(o.changeOptions(d,"new"))})("p-unselected",function(d){return u(m),b(o.changeOptions(d,"change"))})("p-delete-items",function(d){return u(m),b(o.deleteItems(d))}),n()(),t(6,"div",3)(7,"div",4),e(8,"Here your chosen heroes"),n(),i(9,"po-table",6,1),n()()}l&2&&(s(4),c("p-columns",o.columns)("p-infinite-scroll",!0)("p-hide-select-all",!0)("p-hide-table-search",!1)("p-items",o.items)("p-hide-action-fixed-columns",!0)("p-text-wrap",!0)("p-virtual-scroll",!1),s(5),c("p-columns",o.columns)("p-hide-table-search",!1)("p-striped",!0)("p-infinite-scroll",!0)("p-items",o.itemsSelected)("p-hide-action-fixed-columns",!0)("p-text-wrap",!0)("p-virtual-scroll",!1))},dependencies:[y],encapsulation:2})}return r})();var Wt=r=>({"docs-sample-code-tabs":r}),at=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-heroes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Heroes"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-heroes/sample-po-table-heroes.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row po-pb-2">
  <div class="po-md-6">
    <div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more heroes for your team</div>
    <po-table
      #POItemsOri
      [p-columns]="columns"
      [p-infinite-scroll]="true"
      p-selectable="true"
      [p-hide-select-all]="true"
      [p-hide-table-search]="false"
      p-infinite-scroll-distance="80"
      (p-selected)="changeOptions($event, 'new')"
      (p-unselected)="changeOptions($event, 'change')"
      p-height="300"
      [p-items]="items"
      (p-delete-items)="deleteItems($event)"
      [p-hide-action-fixed-columns]="true"
      [p-text-wrap]="true"
      [p-virtual-scroll]="false"
    >
    </po-table>
  </div>
  <div class="po-md-6">
    <div class="po-font-text-bold po-text-color-neutral-dark-40">Here your chosen heroes</div>
    <po-table
      #POItemsSelected
      [p-columns]="columns"
      [p-hide-table-search]="false"
      [p-striped]="true"
      [p-infinite-scroll]="true"
      p-height="300"
      [p-items]="itemsSelected"
      [p-hide-action-fixed-columns]="true"
      [p-text-wrap]="true"
      [p-virtual-scroll]="false"
    >
    </po-table>
  </div>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-heroes/sample-po-table-heroes.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild, OnInit } from '@angular/core';
import { PoTableColumn, PoTableComponent } from '@po-ui/ng-components';

import { SamplePoTableHeroesService } from './sample-po-table-heroes.service';

@Component({
  selector: 'sample-po-table-heroes',
  templateUrl: './sample-po-table-heroes.component.html',
  providers: [SamplePoTableHeroesService],
  standalone: false
})
export class SamplePoTableHeroesComponent implements OnInit {
  @ViewChild('POItemsOri', { static: true }) poItemsOri: PoTableComponent;
  @ViewChild('POItemsSelected', { static: true }) poItemsSelected: PoTableComponent;

  items: Array<any> = [];
  itemsSelected: Array<any> = [];
  columns: Array<PoTableColumn>;

  constructor(private service: SamplePoTableHeroesService) {}

  ngOnInit(): void {
    this.getColumns();
    this.getItems();
  }

  getColumns(): void {
    this.columns = this.service.getColumns();
  }

  getItems(): void {
    this.service.getItems().subscribe({
      next: res => (this.items = res),
      error: err => console.error(err)
    });
  }

  changeOptions(event, type): void {
    if (type === 'new') {
      this.itemsSelected.push({
        id: event.id,
        label: event.label,
        email: event.email
      });
      this.itemsSelected = [...this.itemsSelected];
    } else {
      const index = this.itemsSelected.findIndex(el => el.id === event.id);
      this.poItemsSelected.removeItem(index);
      this.itemsSelected = [...this.poItemsSelected.items];
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
    this.itemsSelected = [];
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-heroes/sample-po-table-heroes.service.ts"),n(),t(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableHeroesService {
  constructor(private http: HttpClient) {}
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'id', label: 'Id', type: 'string', width: '90px' },
      { property: 'label', label: 'Name', type: 'string', width: '90px' },
      { property: 'email', label: 'E-mail', type: 'string', width: '120px' }
    ];
  }

  getItems(): Observable<any> {
    return this.http.get('https://po-sample-api.onrender.com/v1/heroes').pipe(pluck('items'));
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-heroes"),n(),i(27,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,Wt,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,ot],encapsulation:2})}return r})();var Qt=()=>({code:"001",table:"PO Table",angular:"PO-UI"}),Gt=r=>[r],lt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-draggable"]],standalone:!1,decls:4,vars:7,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-items","p-draggable","p-hide-columns-manager","p-hide-table-search"]],template:function(l,o){l&1&&(t(0,"div",0),e(1,` Choose one column and drag to another horizontal position in the table and drop
`),n(),i(2,"po-divider")(3,"po-table",1)),l&2&&(s(3),c("p-items",f(5,Gt,te(4,Qt)))("p-draggable",!0)("p-hide-columns-manager",!0)("p-hide-table-search",!1))},dependencies:[R,y],encapsulation:2})}return r})();var $t=r=>({"docs-sample-code-tabs":r}),rt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-draggable-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table Drag and Drop"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-draggable/sample-po-table-draggable.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
  Choose one column and drag to another horizontal position in the table and drop
</div>

<po-divider></po-divider>

<po-table
  [p-items]="[{ code: '001', table: 'PO Table', angular: 'PO-UI' }]"
  [p-draggable]="true"
  [p-hide-columns-manager]="true"
  [p-hide-table-search]="false"
>
</po-table>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-draggable/sample-po-table-draggable.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-draggable"),n(),i(23,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,$t,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,lt],encapsulation:2})}return r})();var mt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-doc"]],standalone:!1,decls:4042,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-table-row-template"],["href","/documentation/po-table-column-template"],["href","/documentation/po-table-cell-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableAction[]"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoTableColumn[]"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoTableLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/guides/api"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","PoTableColumn"],["pan","",1,"docs-api-property-type","PoTableColumnSortType"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","PoTableDetail"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["id","tableColumnIcon"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["pan","",1,"docs-api-property-type","PoTagType"],["pan","",1,"docs-api-property-type","Array<PoTableDetailColumn>"]],template:function(l,o){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoTableModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-table"),n()(),t(7,"h3",3),e(8,"Componente"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoTableComponent"),n()(),t(12,"div",2)(13,"p"),e(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),n(),t(15,"p"),e(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),t(17,"strong"),e(18,"Carregar mais resultados"),n(),e(19,"."),n(),t(20,"blockquote")(21,"p"),e(22,"As linhas de detalhes podem tamb\xE9m ser customizadas atrav\xE9s do "),t(23,"a",6)(24,"code"),e(25,"p-table-row-template"),n()(),e(26,"."),n()(),t(27,"blockquote")(28,"p"),e(29,"As colunas podem ser customizadas atrav\xE9s dos templates "),t(30,"a",7)(31,"code"),e(32,"p-table-column-template"),n()(),e(33,`
e `),t(34,"a",8)(35,"code"),e(36,"p-table-cell-template"),n()(),e(37,"."),n()(),t(38,"p"),e(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),n(),t(40,"p"),e(41,"Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, ser\xE1 exibido um "),t(42,"em"),e(43,"scroll"),n(),e(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),n(),t(45,"h4"),e(46,"Tokens customiz\xE1veis"),n(),t(47,"p"),e(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),n(),t(49,"blockquote")(50,"p"),e(51,"Para maiores informa\xE7\xF5es, acesse o guia "),t(52,"a",9),e(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),n(),e(54,"."),n()(),t(55,"table")(56,"thead")(57,"tr")(58,"th"),e(59,"Propriedade"),n(),t(60,"th"),e(61,"Descri\xE7\xE3o"),n(),t(62,"th"),e(63,"Valor Padr\xE3o"),n()()(),t(64,"tbody")(65,"tr")(66,"td")(67,"strong"),e(68,"Default Values"),n()(),i(69,"td")(70,"td"),n(),t(71,"tr")(72,"td")(73,"code"),e(74,"--font-family"),n()(),t(75,"td"),e(76,"Fam\xEDlia tipogr\xE1fica usada"),n(),t(77,"td")(78,"code"),e(79,"var(--font-family-theme)"),n()()(),t(80,"tr")(81,"td")(82,"code"),e(83,"--background-color"),n()(),t(84,"td"),e(85,"Cor de background"),n(),t(86,"td")(87,"code"),e(88,"var(--color-neutral-light-00)"),n()()(),t(89,"tr")(90,"td")(91,"code"),e(92,"--color"),n()(),t(93,"td"),e(94,"Cor principal da table"),n(),t(95,"td")(96,"code"),e(97,"var(--color-neutral-dark-95)"),n()()(),t(98,"tr")(99,"td")(100,"code"),e(101,"--background-striped-color"),n()(),t(102,"td"),e(103,"Cor do background quando striped"),n(),t(104,"td")(105,"code"),e(106,"var(--color-neutral-light-05)"),n()()(),t(107,"tr")(108,"td")(109,"code"),e(110,"--color-line"),n()(),t(111,"td"),e(112,"Cor das linhas"),n(),t(113,"td")(114,"code"),e(115,"var(--color-neutral-mid-40)"),n()()(),t(116,"tr")(117,"td")(118,"strong"),e(119,"Hover"),n()(),i(120,"td")(121,"td"),n(),t(122,"tr")(123,"td")(124,"code"),e(125,"--color-hover"),n()(),t(126,"td"),e(127,"Cor principal no estado hover"),n(),t(128,"td")(129,"code"),e(130,"var(--color-action-hover)"),n()()(),t(131,"tr")(132,"td")(133,"code"),e(134,"--background-color-hover"),n()(),t(135,"td"),e(136,"Cor de background no estado hover"),n(),t(137,"td")(138,"code"),e(139,"var(--color-brand-01-lighter)"),n()()(),t(140,"tr")(141,"td")(142,"strong"),e(143,"Focused"),n()(),i(144,"td")(145,"td"),n(),t(146,"tr")(147,"td")(148,"code"),e(149,"--outline-color-focused"),n()(),t(150,"td"),e(151,"Cor do outline do estado de focus"),n(),t(152,"td")(153,"code"),e(154,"var(--color-action-focus)"),n()()(),t(155,"tr")(156,"td")(157,"strong"),e(158,"Disabled"),n()(),i(159,"td")(160,"td"),n(),t(161,"tr")(162,"td")(163,"code"),e(164,"--color-disabled"),n()(),t(165,"td"),e(166,"Cor principal no estado disabled"),n(),t(167,"td")(168,"code"),e(169,"var(--color-neutral-mid-40)"),n()()(),t(170,"tr")(171,"td")(172,"strong"),e(173,"Headline"),n()(),i(174,"td")(175,"td"),n(),t(176,"tr")(177,"td")(178,"code"),e(179,"--background-color-headline"),n(),e(180," \xA0"),n(),t(181,"td"),e(182,"Cor do cabe\xE7alho"),n(),t(183,"td")(184,"code"),e(185,"var(--color-neutral-light-10)"),n()()(),t(186,"tr")(187,"td")(188,"code"),e(189,"--font-weight-headline"),n()(),t(190,"td"),e(191,"Peso da fonte do cabe\xE7alho"),n(),t(192,"td")(193,"code"),e(194,"var(--font-weight-bold)"),n()()(),t(195,"tr")(196,"td")(197,"strong"),e(198,"Selected"),n()(),i(199,"td")(200,"td"),n(),t(201,"tr")(202,"td")(203,"code"),e(204,"--background-color-selected"),n(),e(205,"\xA0"),n(),t(206,"td"),e(207,"Cor de background no estado de selecionado"),n(),t(208,"td")(209,"code"),e(210,"var(--color-brand-01-lightest)"),n()()(),t(211,"tr")(212,"td")(213,"strong"),e(214,"Actived"),n()(),i(215,"td")(216,"td"),n(),t(217,"tr")(218,"td")(219,"code"),e(220,"--color-actived"),n()(),t(221,"td"),e(222,"Cor do texto no estado de selecionado"),n(),t(223,"td")(224,"code"),e(225,"var(--color-neutral-dark-90)"),n()()(),t(226,"tr")(227,"td")(228,"code"),e(229,"--background-color-actived"),n()(),t(230,"td"),e(231,"Cor de background no estado de selecionado"),n(),t(232,"td")(233,"code"),e(234,"var(--color-brand-01-light)"),n()()()()()(),t(235,"div",10)(236,"h4",11),e(237,"Seletor"),n(),t(238,"pre",12),e(239,`<po-table
    p-actions-right="boolean"
    p-actions="PoTableAction[]"
    (p-all-selected)="EventEmitter"
    (p-all-unselected)="EventEmitter"
    p-auto-collapse="boolean"
    (p-change-visible-columns)="EventEmitter"
    (p-collapsed)="EventEmitter"
    (p-restore-column-manager)="EventEmitter"
    p-columns="PoTableColumn[]"
    p-components-size="string"
    p-container="string"
    p-draggable="boolean"
    (p-delete-items)="EventEmitter"
    (p-expanded)="EventEmitter"
    p-filter-type="PoSearchFilterMode"
    p-filtered-columns="Array<string>"
    p-height="number"
    p-hide-action-fixed-columns="boolean"
    p-hide-batch-actions="boolean"
    p-hide-columns-manager="boolean"
    p-hide-detail="boolean"
    p-hide-select-all="boolean"
    p-hide-table-search="boolean"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    p-items="any[]"
    p-literals="PoTableLiterals"
    p-loading="boolean"
    p-loading-show-more="boolean"
    p-max-columns="number"
    p-param-delete-api="string"
    p-selectable="boolean"
    p-selectable-entire-line="boolean"
    (p-selected)="EventEmitter"
    p-service-api="string"
    p-service-delete="string"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    p-single-select="boolean"
    p-sort="boolean"
    (p-sort-by)="EventEmitter"
    p-spacing="string"
    p-striped="boolean"
    p-text-wrap="boolean"
    (p-unselected)="EventEmitter"
    p-virtual-scroll="boolean" >
</po-table>
`),n()(),t(240,"h4",13),e(241,"Propriedades"),n(),t(242,"table",14)(243,"tr",15)(244,"th",16),e(245,"Nome"),n(),t(246,"th",16),e(247,"Tipo"),n(),t(248,"th",16),e(249,"Padr\xE3o"),n(),t(250,"th",16),e(251,"Descri\xE7\xE3o"),n()(),t(252,"tr",17)(253,"td",18)(254,"div",19)(255,"span",20),e(256," p-actions-right"),i(257,"br"),n()()(),t(258,"td",21)(259,"code",22),e(260,"boolean"),n()(),t(261,"td",23)(262,"p")(263,"code"),e(264,"false"),n()()(),t(265,"td",24)(266,"em")(267,"strong"),e(268,"(opcional)"),n()(),t(269,"p"),e(270,"Define que a coluna de a\xE7\xF5es ficar\xE1 no lado direito da tabela."),n()()(),t(271,"tr",17)(272,"td",18)(273,"div",19)(274,"span",20),e(275," p-actions"),i(276,"br"),n()()(),t(277,"td",21)(278,"code",25),e(279,"PoTableAction[]"),n()(),t(280,"td",23),e(281,"-"),n(),t(282,"td",24)(283,"em")(284,"strong"),e(285,"(opcional)"),n()(),t(286,"p"),e(287,"Define uma lista de a\xE7\xF5es."),n(),t(288,"p"),e(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),t(290,"a",26)(291,"strong"),e(292,"an an-dots-three"),n()(),e(293," que listar\xE1 as a\xE7\xF5es ao ser clicado."),n(),t(294,"p")(295,"strong"),e(296,"A coluna de a\xE7\xF5es n\xE3o ser\xE1 exibida quando:"),n()(),t(297,"ul")(298,"li"),e(299,"a lista conter valores inv\xE1lidos ou indefinidos."),n(),t(300,"li"),e(301,"tenha uma \xFAnica a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),n()()()(),t(302,"tr",17)(303,"td",18)(304,"div",27)(305,"span",28),e(306," (p-all-selected)"),i(307,"br"),n()()(),t(308,"td",21)(309,"code",29),e(310,"EventEmitter"),n()(),t(311,"td",23),e(312,"-"),n(),t(313,"td",24)(314,"em")(315,"strong"),e(316,"(opcional)"),n()(),t(317,"p"),e(318,"Evento executado quando todas as linhas s\xE3o selecionadas por meio do "),t(319,"em"),e(320,"checkbox"),n(),e(321," que seleciona todas as linhas."),n()()(),t(322,"tr",17)(323,"td",18)(324,"div",27)(325,"span",28),e(326," (p-all-unselected)"),i(327,"br"),n()()(),t(328,"td",21)(329,"code",29),e(330,"EventEmitter"),n()(),t(331,"td",23),e(332,"-"),n(),t(333,"td",24)(334,"em")(335,"strong"),e(336,"(opcional)"),n()(),t(337,"p"),e(338,"Evento executado quando a sele\xE7\xE3o das linhas \xE9 desmarcada por meio do "),t(339,"em"),e(340,"checkbox"),n(),e(341," que seleciona todas as linhas."),n()()(),t(342,"tr",17)(343,"td",18)(344,"div",19)(345,"span",20),e(346," p-auto-collapse"),i(347,"br"),n()()(),t(348,"td",21)(349,"code",22),e(350,"boolean"),n()(),t(351,"td",23)(352,"p")(353,"code"),e(354,"false"),n()()(),t(355,"td",24)(356,"em")(357,"strong"),e(358,"(opcional)"),n()(),t(359,"p"),e(360,"Permite fechar um detalhe ou row template automaticamente, ao abrir outro item."),n()()(),t(361,"tr",17)(362,"td",18)(363,"div",27)(364,"span",28),e(365," (p-change-visible-columns)"),i(366,"br"),n()()(),t(367,"td",21)(368,"code",29),e(369,"EventEmitter"),n()(),t(370,"td",23),e(371,"-"),n(),t(372,"td",24)(373,"em")(374,"strong"),e(375,"(opcional)"),n()(),t(376,"p"),e(377,"Evento disparado ao fechar o page slide do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),n(),t(378,"p"),e(379,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),n()()(),t(380,"tr",17)(381,"td",18)(382,"div",27)(383,"span",28),e(384," (p-collapsed)"),i(385,"br"),n()()(),t(386,"td",21)(387,"code",29),e(388,"EventEmitter"),n()(),t(389,"td",23),e(390,"-"),n(),t(391,"td",24)(392,"em")(393,"strong"),e(394,"(opcional)"),n()(),t(395,"p"),e(396,"Evento executado ao colapsar uma linha do "),t(397,"code"),e(398,"po-table"),n(),e(399,"."),n(),t(400,"blockquote")(401,"p"),e(402,"Como par\xE2metro o componente envia o item colapsado."),n()()()(),t(403,"tr",17)(404,"td",18)(405,"div",27)(406,"span",28),e(407," (p-restore-column-manager)"),i(408,"br"),n()()(),t(409,"td",21)(410,"code",29),e(411,"EventEmitter"),n()(),t(412,"td",23),e(413,"-"),n(),t(414,"td",24)(415,"em")(416,"strong"),e(417,"(opcional)"),n()(),t(418,"p"),e(419,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),n(),t(420,"p"),e(421,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),n()()(),t(422,"tr",17)(423,"td",18)(424,"div",19)(425,"span",20),e(426," p-columns"),i(427,"br"),n()()(),t(428,"td",21)(429,"code",30),e(430,"PoTableColumn[]"),n()(),t(431,"td",23),e(432,"-"),n(),t(433,"td",24)(434,"em")(435,"strong"),e(436,"(opcional)"),n()(),t(437,"p"),e(438,"Lista das colunas da tabela, deve receber um "),t(439,"em"),e(440,"array"),n(),e(441," de objetos que implementam a interface "),t(442,"code"),e(443,"PoTableColumn"),n(),e(444,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),n(),t(445,"blockquote")(446,"p"),e(447,"Caso n\xE3o encontre valor, a mensagem 'Nenhuma defini\xE7\xE3o de colunas' ser\xE1 exibida."),n()()()(),t(448,"tr",17)(449,"td",18)(450,"div",19)(451,"span",20),e(452," p-components-size"),i(453,"br"),n()()(),t(454,"td",21)(455,"code",31),e(456,"string"),n()(),t(457,"td",23)(458,"p")(459,"code"),e(460,"medium"),n()()(),t(461,"td",24)(462,"em")(463,"strong"),e(464,"(opcional)"),n()(),t(465,"p"),e(466,"Define o tamanho dos componentes de formul\xE1rio no table:"),n(),t(467,"ul")(468,"li")(469,"code"),e(470,"small"),n(),e(471,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),n(),t(472,"li")(473,"code"),e(474,"medium"),n(),e(475,": aplica a medida medium de cada componente."),n()(),t(476,"blockquote")(477,"p"),e(478,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(479,"code"),e(480,"medium"),n(),e(481,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(482,"a",32),e(483,"po-theme"),n(),e(484,"."),n()()()(),t(485,"tr",17)(486,"td",18)(487,"div",19)(488,"span",20),e(489," p-container"),i(490,"br"),n()()(),t(491,"td",21)(492,"code",31),e(493,"string"),n()(),t(494,"td",23)(495,"p")(496,"code"),e(497,"border"),n()()(),t(498,"td",24)(499,"em")(500,"strong"),e(501,"(opcional)"),n()(),t(502,"p"),e(503,"Adiciona um contorno arredondado ao "),t(504,"code"),e(505,"po-table"),n(),e(506,", as op\xE7\xF5es s\xE3o:"),n(),t(507,"ul")(508,"li")(509,"code"),e(510,"border"),n(),e(511,": com bordas/linhas."),n(),t(512,"li")(513,"code"),e(514,"shadow"),n(),e(515,": com sombras."),n()()()(),t(516,"tr",17)(517,"td",18)(518,"div",19)(519,"span",20),e(520," p-draggable"),i(521,"br"),n()()(),t(522,"td",21)(523,"code",22),e(524,"boolean"),n()(),t(525,"td",23)(526,"p")(527,"code"),e(528,"false"),n()()(),t(529,"td",24)(530,"em")(531,"strong"),e(532,"(opcional)"),n()(),t(533,"p"),e(534,"Habilita o modo drag and drop para as colunas da tabela."),n()()(),t(535,"tr",17)(536,"td",18)(537,"div",27)(538,"span",28),e(539," (p-delete-items)"),i(540,"br"),n()()(),t(541,"td",21)(542,"code",29),e(543,"EventEmitter"),n()(),t(544,"td",23),e(545,"-"),n(),t(546,"td",24)(547,"em")(548,"strong"),e(549,"(opcional)"),n()(),t(550,"p"),e(551,"Evento executado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado."),n(),t(552,"pre")(553,"code"),e(554,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),n()(),t(555,"blockquote")(556,"p"),e(557,"Como par\xE2metro o componente envia a lista atualizada, sem os itens exclu\xEDdos."),n()()()(),t(558,"tr",17)(559,"td",18)(560,"div",27)(561,"span",28),e(562," (p-expanded)"),i(563,"br"),n()()(),t(564,"td",21)(565,"code",29),e(566,"EventEmitter"),n()(),t(567,"td",23),e(568,"-"),n(),t(569,"td",24)(570,"em")(571,"strong"),e(572,"(opcional)"),n()(),t(573,"p"),e(574,"Evento executado ao expandir uma linha do "),t(575,"code"),e(576,"po-table"),n(),e(577,"."),n(),t(578,"blockquote")(579,"p"),e(580,"Como par\xE2metro o componente envia o item expandido."),n()()()(),t(581,"tr",17)(582,"td",18)(583,"div",19)(584,"span",20),e(585," p-filter-type"),i(586,"br"),n()()(),t(587,"td",21)(588,"code",33),e(589,"PoSearchFilterMode"),n()(),t(590,"td",23)(591,"p")(592,"code"),e(593,"startsWith"),n()()(),t(594,"td",24)(595,"em")(596,"strong"),e(597,"(opcional)"),n()(),t(598,"p"),e(599,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),n(),t(600,"blockquote")(601,"p"),e(602,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),n()()()(),t(603,"tr",17)(604,"td",18)(605,"div",19)(606,"span",20),e(607," p-filtered-columns"),i(608,"br"),n()()(),t(609,"td",21)(610,"code",34),e(611,"Array<string>"),n()(),t(612,"td",23),e(613,"-"),n(),t(614,"td",24)(615,"em")(616,"strong"),e(617,"(opcional)"),n()(),t(618,"p"),e(619,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),n()()(),t(620,"tr",17)(621,"td",18)(622,"div",19)(623,"span",20),e(624," p-height"),i(625,"br"),n()()(),t(626,"td",21)(627,"code",35),e(628,"number"),n()(),t(629,"td",23),e(630,"-"),n(),t(631,"td",24)(632,"em")(633,"strong"),e(634,"(opcional)"),n()(),t(635,"p"),e(636,"Define a altura da tabela em "),t(637,"em"),e(638,"pixels"),n(),e(639," e fixa o cabe\xE7alho."),n(),t(640,"p"),e(641,"Ao utilizar essa propriedade ser\xE1 inserido o "),t(642,"code"),e(643,"virtual-scroll"),n(),e(644," na tabela melhorando a performance."),n()()(),t(645,"tr",17)(646,"td",18)(647,"div",19)(648,"span",20),e(649," p-hide-action-fixed-columns"),i(650,"br"),n()()(),t(651,"td",21)(652,"code",22),e(653,"boolean"),n()(),t(654,"td",23)(655,"p")(656,"code"),e(657,"false"),n()()(),t(658,"td",24)(659,"em")(660,"strong"),e(661,"(opcional)"),n()(),t(662,"p"),e(663,"Permite que as a\xE7\xF5es para fixar uma coluna da tabela sejam escondidas."),n()()(),t(664,"tr",17)(665,"td",18)(666,"div",19)(667,"span",20),e(668," p-hide-batch-actions"),i(669,"br"),n()()(),t(670,"td",21)(671,"code",22),e(672,"boolean"),n()(),t(673,"td",23)(674,"p")(675,"code"),e(676,"true"),n()()(),t(677,"td",24)(678,"em")(679,"strong"),e(680,"(opcional)"),n()(),t(681,"p"),e(682,"Permite que as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens, sejam escondidas."),n()()(),t(683,"tr",17)(684,"td",18)(685,"div",19)(686,"span",20),e(687," p-hide-columns-manager"),i(688,"br"),n()()(),t(689,"td",21)(690,"code",22),e(691,"boolean"),n()(),t(692,"td",23)(693,"p")(694,"code"),e(695,"false"),n()()(),t(696,"td",24)(697,"em")(698,"strong"),e(699,"(opcional)"),n()(),t(700,"p"),e(701,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),n()()(),t(702,"tr",17)(703,"td",18)(704,"div",19)(705,"span",20),e(706," p-hide-detail"),i(707,"br"),n()()(),t(708,"td",21)(709,"code",22),e(710,"boolean"),n()(),t(711,"td",23)(712,"p")(713,"code"),e(714,"false"),n()()(),t(715,"td",24)(716,"em")(717,"strong"),e(718,"(opcional)"),n()(),t(719,"p"),e(720,"Habilita a visualiza\xE7\xE3o da lista de detalhes de cada linha da coluna."),n()()(),t(721,"tr",17)(722,"td",18)(723,"div",19)(724,"span",20),e(725," p-hide-select-all"),i(726,"br"),n()()(),t(727,"td",21)(728,"code",22),e(729,"boolean"),n()(),t(730,"td",23)(731,"p")(732,"code"),e(733,"false"),n()()(),t(734,"td",24)(735,"p"),e(736,"Esconde o "),t(737,"em"),e(738,"checkbox"),n(),e(739," para sele\xE7\xE3o de todas as linhas."),n(),t(740,"blockquote")(741,"p"),e(742,"Sempre receber\xE1 "),t(743,"em"),e(744,"true"),n(),e(745," caso a sele\xE7\xE3o de apenas uma linha esteja ativa."),n()()()(),t(746,"tr",17)(747,"td",18)(748,"div",19)(749,"span",20),e(750," p-hide-table-search"),i(751,"br"),n()()(),t(752,"td",21)(753,"code",22),e(754,"boolean"),n()(),t(755,"td",23)(756,"p")(757,"code"),e(758,"true"),n()()(),t(759,"td",24)(760,"em")(761,"strong"),e(762,"(opcional)"),n()(),t(763,"p"),e(764,"Permite que o campo de pesquisa seja escondido."),n()()(),t(765,"tr",17)(766,"td",18)(767,"div",19)(768,"span",20),e(769," p-infinite-scroll"),i(770,"br"),n()()(),t(771,"td",21)(772,"code",22),e(773,"boolean"),n()(),t(774,"td",23)(775,"p")(776,"code"),e(777,"false"),n()()(),t(778,"td",24)(779,"em")(780,"strong"),e(781,"(opcional)"),n()(),t(782,"p"),e(783,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),t(784,"code"),e(785,"p-show-more"),n(),e(786,"."),n(),t(787,"p")(788,"strong"),e(789,"Regras de utiliza\xE7\xE3o:"),n()(),t(790,"ul")(791,"li"),e(792,"O scroll infinito s\xF3 funciona para tabelas que utilizam a propriedade "),t(793,"code"),e(794,"p-height"),n(),e(795," e que possuem o scroll j\xE1 na carga inicial dos dados."),n()()()(),t(796,"tr",17)(797,"td",18)(798,"div",19)(799,"span",20),e(800," p-infinite-scroll-distance"),i(801,"br"),n()()(),t(802,"td",21)(803,"code",35),e(804,"number"),n()(),t(805,"td",23),e(806,"-"),n(),t(807,"td",24)(808,"em")(809,"strong"),e(810,"(opcional)"),n()(),t(811,"p"),e(812,"Define o percentual necess\xE1rio para disparar o evento "),t(813,"code"),e(814,"p-show-more"),n(),e(815,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),n(),t(816,"p")(817,"strong"),e(818,"Exemplos:"),n()(),t(819,"ul")(820,"li"),e(821,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o "),t(822,"code"),e(823,"p-show-more"),n(),e(824," ser\xE1 disparado."),n()()()(),t(825,"tr",17)(826,"td",18)(827,"div",19)(828,"span",20),e(829," p-items"),i(830,"br"),n()()(),t(831,"td",21)(832,"code",36),e(833,"any[]"),n()(),t(834,"td",23),e(835,"-"),n(),t(836,"td",24)(837,"p"),e(838,"Lista de itens da tabela."),n(),t(839,"blockquote")(840,"p"),e(841,"Se falso, ser\xE1 inicializado como um "),t(842,"em"),e(843,"array"),n(),e(844," vazio."),n()()()(),t(845,"tr",17)(846,"td",18)(847,"div",19)(848,"span",20),e(849," p-literals"),i(850,"br"),n()()(),t(851,"td",21)(852,"code",37),e(853,"PoTableLiterals"),n()(),t(854,"td",23),e(855,"-"),n(),t(856,"td",24)(857,"em")(858,"strong"),e(859,"(opcional)"),n()(),t(860,"p"),e(861,"Objeto com as literais usadas no "),t(862,"code"),e(863,"po-table"),n(),e(864,"."),n(),t(865,"p"),e(866,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),n(),t(867,"pre")(868,"code"),e(869,`const customLiterals: PoTableLiterals = {
  noColumns: 'Nenhuma defini\xE7\xE3o de colunas',
  noData: 'Nenhum dado encontrado',
  noVisibleColumn: 'Nenhuma coluna vis\xEDvel',
  noItem: 'Nenhum item selecionado',
  oneItem: '1 item selecionado',
  multipleItems: 'itens selecionados',
  loadingData: 'Carregando',
  loadMoreData: 'Carregar mais resultados',
  seeCompleteSubtitle: 'Ver legenda completa',
  completeSubtitle: 'Legenda completa',
  columnsManager: 'Gerenciador de colunas',
  bodyDelete: 'Deseja realmente excluir esse item?',
  cancel: 'Cancelar',
  delete: 'Excluir',
  deleteSuccessful: 'Itens removidos com sucesso',
  deleteApiError: 'Ocorreu um erro inesperado, tente novamente mais tarde!',
};
`),n()(),t(870,"p"),e(871,"Ou passando apenas as literais que deseja customizar:"),n(),t(872,"pre")(873,"code"),e(874,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),n()(),t(875,"p"),e(876,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),n(),t(877,"pre")(878,"code"),e(879,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),n()(),t(880,"blockquote")(881,"p"),e(882,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(883,"a",38)(884,"code"),e(885,"PoI18nService"),n()(),e(886," ou do browser."),n()()()(),t(887,"tr",17)(888,"td",18)(889,"div",19)(890,"span",20),e(891," p-loading"),i(892,"br"),n()()(),t(893,"td",21)(894,"code",22),e(895,"boolean"),n()(),t(896,"td",23)(897,"p")(898,"code"),e(899,"false"),n()()(),t(900,"td",24)(901,"em")(902,"strong"),e(903,"(opcional)"),n()(),t(904,"p"),e(905,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados da "),t(906,"em"),e(907,"table"),n(),e(908,"."),n()()(),t(909,"tr",17)(910,"td",18)(911,"div",19)(912,"span",20),e(913," p-loading-show-more"),i(914,"br"),n()()(),t(915,"td",21)(916,"code",22),e(917,"boolean"),n()(),t(918,"td",23)(919,"p")(920,"code"),e(921,"false"),n()()(),t(922,"td",24)(923,"em")(924,"strong"),e(925,"(opcional)"),n()(),t(926,"p"),e(927,'Permite que seja adicionado o estado de carregamento no bot\xE3o "Carregar mais resultados".'),n()()(),t(928,"tr",17)(929,"td",18)(930,"div",19)(931,"span",20),e(932," p-max-columns"),i(933,"br"),n()()(),t(934,"td",21)(935,"code",35),e(936,"number"),n()(),t(937,"td",23),e(938,"-"),n(),t(939,"td",24)(940,"em")(941,"strong"),e(942,"(opcional)"),n()(),t(943,"p"),e(944,"Define uma quantidade m\xE1xima de colunas que ser\xE3o exibidas na tabela."),n(),t(945,"p"),e(946,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),n()()(),t(947,"tr",17)(948,"td",18)(949,"div",19)(950,"span",20),e(951," p-param-delete-api"),i(952,"br"),n()()(),t(953,"td",21)(954,"code",31),e(955,"string"),n()(),t(956,"td",23)(957,"p")(958,"code"),e(959,"id"),n()()(),t(960,"td",24)(961,"em")(962,"strong"),e(963,"(opcional)"),n()(),t(964,"p"),e(965,"Adiciona o par\xE2metro a ser enviado para a requisi\xE7\xE3o de DELETE."),n(),t(966,"p"),e(967,"\xC9 necess\xE1rio a utiliza\xE7\xE3o da propriedade "),t(968,"code"),e(969,"p-service-delete"),n(),e(970," em conjunto."),n()()(),t(971,"tr",17)(972,"td",18)(973,"div",19)(974,"span",20),e(975," p-selectable"),i(976,"br"),n()()(),t(977,"td",21)(978,"code",22),e(979,"boolean"),n()(),t(980,"td",23)(981,"p")(982,"code"),e(983,"false"),n()()(),t(984,"td",24)(985,"em")(986,"strong"),e(987,"(opcional)"),n()(),t(988,"p"),e(989,"Permite a sele\xE7\xE3o de linhas na tabela e, caso a propriedade "),t(990,"code"),e(991,"p-single-select"),n(),e(992,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),n(),t(993,"p")(994,"strong"),e(995,"Importante:"),n()(),t(996,"ul")(997,"li"),e(998,"As linhas de detalhe definidas em "),t(999,"code"),e(1e3,"PoTableDetail"),n(),e(1001," possuem comportamento independente da linha mestre;"),n(),t(1002,"li"),e(1003,"Cada linha possui por padr\xE3o a propriedade din\xE2mica "),t(1004,"code"),e(1005,"$selected"),n(),e(1006,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),t(1007,"code"),e(1008,"item.$selected"),n(),e(1009," ou "),t(1010,"code"),e(1011,"item['$selected']"),n(),e(1012,"."),n()()()(),t(1013,"tr",17)(1014,"td",18)(1015,"div",19)(1016,"span",20),e(1017," p-selectable-entire-line"),i(1018,"br"),n()()(),t(1019,"td",21)(1020,"code",22),e(1021,"boolean"),n()(),t(1022,"td",23)(1023,"p")(1024,"code"),e(1025,"true"),n()()(),t(1026,"td",24)(1027,"p"),e(1028,"Permite selecionar um item da tabela clicando na linha."),n(),t(1029,"blockquote")(1030,"p"),e(1031,"Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como "),t(1032,"code"),e(1033,"false"),n(),e(1034,"."),n()()()(),t(1035,"tr",17)(1036,"td",18)(1037,"div",27)(1038,"span",28),e(1039," (p-selected)"),i(1040,"br"),n()()(),t(1041,"td",21)(1042,"code",29),e(1043,"EventEmitter"),n()(),t(1044,"td",23),e(1045,"-"),n(),t(1046,"td",24)(1047,"em")(1048,"strong"),e(1049,"(opcional)"),n()(),t(1050,"p"),e(1051,"Evento executado ao selecionar uma linha do "),t(1052,"code"),e(1053,"po-table"),n(),e(1054,"."),n()()(),t(1055,"tr",17)(1056,"td",18)(1057,"div",19)(1058,"span",20),e(1059," p-service-api"),i(1060,"br"),n()()(),t(1061,"td",21)(1062,"code",31),e(1063,"string"),n()(),t(1064,"td",23),e(1065,"-"),n(),t(1066,"td",24)(1067,"em")(1068,"strong"),e(1069,"(opcional)"),n()(),t(1070,"p"),e(1071,"URL da API respons\xE1vel por retornar os registros."),n(),t(1072,"p"),e(1073,"Ao realizar a busca de mais registros via pagina\xE7\xE3o (Carregar mais resultados), ser\xE1 enviado os par\xE2metros "),t(1074,"code"),e(1075,"page"),n(),e(1076," e "),t(1077,"code"),e(1078,"pageSize"),n(),e(1079,", conforme abaixo:"),n(),t(1080,"pre")(1081,"code"),e(1082,`url + ?page=1&pageSize=10
`),n()(),t(1083,"p"),e(1084,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),t(1085,"code"),e(1086,"order"),n(),e(1087,", por exemplo:"),n(),t(1088,"ul")(1089,"li")(1090,"p"),e(1091,"Coluna decrescente:"),n(),t(1092,"pre")(1093,"code"),e(1094,`url + ?page=1&pageSize=10&order=-name
`),n()()(),t(1095,"li")(1096,"p"),e(1097,"Coluna ascendente:"),n(),t(1098,"pre")(1099,"code"),e(1100,`url + ?page=1&pageSize=10&order=name
`),n()()()(),t(1101,"blockquote")(1102,"p"),e(1103,"Esta URL deve retornar e receber os dados no padr\xE3o de "),t(1104,"a",39),e(1105,"API do PO UI"),n(),e(1106,"."),n()()()(),t(1107,"tr",17)(1108,"td",18)(1109,"div",19)(1110,"span",20),e(1111," p-service-delete"),i(1112,"br"),n()()(),t(1113,"td",21)(1114,"code",31),e(1115,"string"),n()(),t(1116,"td",23),e(1117,"-"),n(),t(1118,"td",24)(1119,"em")(1120,"strong"),e(1121,"(opcional)"),n()(),t(1122,"p"),e(1123,"URL da API respons\xE1vel por excluir os registros."),n(),t(1124,"p"),e(1125,"Ao selecionar o bot\xE3o de excluir itens, essa url ser\xE1 executada utilizando o par\xE2metro enviado na propriedade "),t(1126,"code"),e(1127,"p-param-delete-api"),n(),e(1128,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),t(1129,"code"),e(1130,"id"),n(),e(1131,"."),n(),t(1132,"blockquote")(1133,"p"),e(1134,"Esta URL deve retornar e receber os dados no padr\xE3o de "),t(1135,"a",39),e(1136,"API do PO UI"),n(),e(1137,"."),n()()()(),t(1138,"tr",17)(1139,"td",18)(1140,"div",27)(1141,"span",28),e(1142," (p-show-more)"),i(1143,"br"),n()()(),t(1144,"td",21)(1145,"code",29),e(1146,"EventEmitter"),n()(),t(1147,"td",23),e(1148,"-"),n(),t(1149,"td",24)(1150,"em")(1151,"strong"),e(1152,"(opcional)"),n()(),t(1153,"p"),e(1154,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),n(),t(1155,"p"),e(1156,"Recebe um objeto "),t(1157,"code"),e(1158,"{ column, type }"),n(),e(1159," onde:"),n(),t(1160,"ul")(1161,"li"),e(1162,"column ("),t(1163,"code"),e(1164,"PoTableColumn"),n(),e(1165,"): objeto da coluna que est\xE1 ordenada."),n(),t(1166,"li"),e(1167,"type ("),t(1168,"code"),e(1169,"PoTableColumnSortType"),n(),e(1170,"): tipo da ordena\xE7\xE3o."),n()()()(),t(1171,"tr",17)(1172,"td",18)(1173,"div",19)(1174,"span",20),e(1175," p-show-more-disabled"),i(1176,"br"),n()()(),t(1177,"td",21)(1178,"code",22),e(1179,"boolean"),n()(),t(1180,"td",23)(1181,"p")(1182,"code"),e(1183,"false"),n()()(),t(1184,"td",24)(1185,"p"),e(1186,'Se verdadeiro, torna habilitado o bot\xE3o "Carregar mais resultados".'),n()()(),t(1187,"tr",17)(1188,"td",18)(1189,"div",19)(1190,"span",20),e(1191," p-single-select"),i(1192,"br"),n()()(),t(1193,"td",21)(1194,"code",22),e(1195,"boolean"),n()(),t(1196,"td",23),e(1197,"-"),n(),t(1198,"td",24)(1199,"p"),e(1200,"Define que somente uma linha da tabela pode ser selecionada."),n(),t(1201,"blockquote")(1202,"p"),e(1203,"Esta defini\xE7\xE3o n\xE3o se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai."),n()()()(),t(1204,"tr",17)(1205,"td",18)(1206,"div",19)(1207,"span",20),e(1208," p-sort"),i(1209,"br"),n()()(),t(1210,"td",21)(1211,"code",22),e(1212,"boolean"),n()(),t(1213,"td",23)(1214,"p")(1215,"code"),e(1216,"false"),n()()(),t(1217,"td",24)(1218,"em")(1219,"strong"),e(1220,"(opcional)"),n()(),t(1221,"p"),e(1222,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),n()()(),t(1223,"tr",17)(1224,"td",18)(1225,"div",27)(1226,"span",28),e(1227," (p-sort-by)"),i(1228,"br"),n()()(),t(1229,"td",21)(1230,"code",29),e(1231,"EventEmitter"),n()(),t(1232,"td",23),e(1233,"-"),n(),t(1234,"td",24)(1235,"em")(1236,"strong"),e(1237,"(opcional)"),n()(),t(1238,"p"),e(1239,"Evento executado ao ordenar colunas da tabela."),n(),t(1240,"p"),e(1241,"Recebe um objeto "),t(1242,"code"),e(1243,"{ column, type }"),n(),e(1244," onde:"),n(),t(1245,"ul")(1246,"li"),e(1247,"column ("),t(1248,"code"),e(1249,"PoTableColumn"),n(),e(1250,"): objeto da coluna que foi clicada/ordenada."),n(),t(1251,"li"),e(1252,"type ("),t(1253,"code"),e(1254,"PoTableColumnSortType"),n(),e(1255,"): tipo da ordena\xE7\xE3o."),n()()()(),t(1256,"tr",17)(1257,"td",18)(1258,"div",19)(1259,"span",20),e(1260," p-spacing"),i(1261,"br"),n()()(),t(1262,"td",21)(1263,"code",31),e(1264,"string"),n()(),t(1265,"td",23)(1266,"p")(1267,"code"),e(1268,"medium"),n()()(),t(1269,"td",24)(1270,"em")(1271,"strong"),e(1272,"(opcional)"),n()(),t(1273,"p"),e(1274,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),t(1275,"strong"),e(1276,"PoTableColumnSpacing"),n(),e(1277,"."),n(),t(1278,"blockquote")(1279,"p"),e(1280,"Em n\xEDvel de acessibilidade "),t(1281,"strong"),e(1282,"AA"),n(),e(1283,", caso o valor de "),t(1284,"code"),e(1285,"p-spacing"),n(),e(1286," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),t(1287,"code"),e(1288,"extraSmall"),n(),e(1289,`
nos seguintes cen\xE1rios:`),n(),t(1290,"ul")(1291,"li"),e(1292,"Quando o valor de "),t(1293,"code"),e(1294,"p-components-size"),n(),e(1295," for "),t(1296,"code"),e(1297,"small"),n(),e(1298,";"),n(),t(1299,"li"),e(1300,"Quando o valor padr\xE3o dos componentes for configurado como "),t(1301,"code"),e(1302,"small"),n(),e(1303,` no
`),t(1304,"a",32),e(1305,"servi\xE7o de tema"),n(),e(1306,"."),n()()()()(),t(1307,"tr",17)(1308,"td",18)(1309,"div",19)(1310,"span",20),e(1311," p-striped"),i(1312,"br"),n()()(),t(1313,"td",21)(1314,"code",22),e(1315,"boolean"),n()(),t(1316,"td",23)(1317,"p")(1318,"code"),e(1319,"false"),n()()(),t(1320,"td",24)(1321,"p"),e(1322,"Habilita ou desabilita o estilo listrado da tabela ("),t(1323,"code"),e(1324,"striped"),n(),e(1325,")."),n(),t(1326,"blockquote")(1327,"p"),e(1328,"Recomendado para tabelas com maior n\xFAmero de dados, facilitando a sua visualiza\xE7\xE3o na tabela."),n()()()(),t(1329,"tr",17)(1330,"td",18)(1331,"div",19)(1332,"span",20),e(1333," p-text-wrap"),i(1334,"br"),n()()(),t(1335,"td",21)(1336,"code",22),e(1337,"boolean"),n()(),t(1338,"td",23)(1339,"p")(1340,"code"),e(1341,"false"),n()()(),t(1342,"td",24)(1343,"em")(1344,"strong"),e(1345,"(opcional)"),n()(),t(1346,"p"),e(1347,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),n(),t(1348,"blockquote")(1349,"p"),e(1350,"Incompat\xEDvel com "),t(1351,"code"),e(1352,"virtual-scroll"),n(),e(1353,", que requer altura fixa nas linhas."),n()()()(),t(1354,"tr",17)(1355,"td",18)(1356,"div",27)(1357,"span",28),e(1358," (p-unselected)"),i(1359,"br"),n()()(),t(1360,"td",21)(1361,"code",29),e(1362,"EventEmitter"),n()(),t(1363,"td",23),e(1364,"-"),n(),t(1365,"td",24)(1366,"em")(1367,"strong"),e(1368,"(opcional)"),n()(),t(1369,"p"),e(1370,"Evento executado ao desmarcar a sele\xE7\xE3o de uma linha do "),t(1371,"code"),e(1372,"po-table"),n(),e(1373,"."),n()()(),t(1374,"tr",17)(1375,"td",18)(1376,"div",19)(1377,"span",20),e(1378," p-virtual-scroll"),i(1379,"br"),n()()(),t(1380,"td",21)(1381,"code",22),e(1382,"boolean"),n()(),t(1383,"td",23)(1384,"p")(1385,"code"),e(1386,"true"),n()()(),t(1387,"td",24)(1388,"em")(1389,"strong"),e(1390,"(opcional)"),n()(),t(1391,"p"),e(1392,"Habilita o "),t(1393,"code"),e(1394,"virtual-scroll"),n(),e(1395,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),t(1396,"code"),e(1397,"p-height"),n(),e(1398,") para funcionar corretamente."),n(),t(1399,"blockquote")(1400,"p"),e(1401,"Incompat\xEDvel com "),t(1402,"code"),e(1403,"p-text-wrap"),n(),e(1404," e "),t(1405,"code"),e(1406,"master-detail"),n(),e(1407,", pois o "),t(1408,"code"),e(1409,"virtual-scroll"),n(),e(1410," exige altura fixa nas linhas."),n()()()()(),t(1411,"h3",13),e(1412,"M\xE9todos"),n(),t(1413,"table",40)(1414,"tr",17)(1415,"th",41)(1416,"div",19)(1417,"h4")(1418,"span",20),e(1419," applyFilters "),n()()()()(),t(1420,"tr",24)(1421,"td",24)(1422,"p"),e(1423,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza a tabela."),n(),t(1424,"p"),e(1425,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),n(),t(1426,"pre")(1427,"code"),e(1428,`url + ?page=1&pageSize=10
`),n()(),t(1429,"blockquote")(1430,"p"),e(1431,"Obs: os par\xE2metros "),t(1432,"code"),e(1433,"page"),n(),e(1434," e "),t(1435,"code"),e(1436,"pageSize"),n(),e(1437," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),n()(),t(1438,"p"),e(1439,"Caso sejam informados os par\xE2metros "),t(1440,"code"),e(1441,"{ name: 'JOHN', age: '23' }"),n(),e(1442,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),n(),t(1443,"pre")(1444,"code"),e(1445,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),n()()()()(),t(1446,"h5")(1447,"b"),e(1448,"Par\xE2metros"),n()(),t(1449,"table",14)(1450,"tr",15)(1451,"th",16),e(1452,"Nome"),n(),t(1453,"th",16),e(1454,"Tipo"),n(),t(1455,"th",16),e(1456,"Descri\xE7\xE3o"),n()(),t(1457,"tr",17)(1458,"td",18),e(1459," queryParams"),n(),t(1460,"td",21)(1461,"code",42),e(1462," { key: value } "),n()(),t(1463,"td",24)(1464,"p"),e(1465,"Formato do objeto a ser enviado."),n(),t(1466,"blockquote")(1467,"p"),e(1468,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),n()()()()(),i(1469,"br"),t(1470,"table",40)(1471,"tr",17)(1472,"th",41)(1473,"div",19)(1474,"h4")(1475,"span",20),e(1476," applyFixedColumns "),n()()()()(),t(1477,"tr",24)(1478,"td",24)(1479,"p"),e(1480,"Verifica se columns possuem a propriedade width."),n()()()(),i(1481,"br"),t(1482,"table",40)(1483,"tr",17)(1484,"th",41)(1485,"div",19)(1486,"h4")(1487,"span",20),e(1488," collapse "),n()()()()(),t(1489,"tr",24)(1490,"td",24)(1491,"p"),e(1492,"M\xE9todo que colapsa uma linha com detalhe quando executada."),n()()()(),t(1493,"h5")(1494,"b"),e(1495,"Par\xE2metros"),n()(),t(1496,"table",14)(1497,"tr",15)(1498,"th",16),e(1499,"Nome"),n(),t(1500,"th",16),e(1501,"Tipo"),n(),t(1502,"th",16),e(1503,"Descri\xE7\xE3o"),n()(),t(1504,"tr",17)(1505,"td",18),e(1506," rowIndex"),n(),t(1507,"td",21)(1508,"code",43),e(1509," number "),n()(),t(1510,"td",24)(1511,"p"),e(1512,"\xCDndice da linha que ser\xE1 colapsada."),n(),t(1513,"blockquote")(1514,"p"),e(1515,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),n()()()()(),i(1516,"br"),t(1517,"table",40)(1518,"tr",17)(1519,"th",41)(1520,"div",19)(1521,"h4")(1522,"span",20),e(1523," expand "),n()()()()(),t(1524,"tr",24)(1525,"td",24)(1526,"p"),e(1527,"M\xE9todo que expande uma linha com detalhe quando executada."),n()()()(),t(1528,"h5")(1529,"b"),e(1530,"Par\xE2metros"),n()(),t(1531,"table",14)(1532,"tr",15)(1533,"th",16),e(1534,"Nome"),n(),t(1535,"th",16),e(1536,"Tipo"),n(),t(1537,"th",16),e(1538,"Descri\xE7\xE3o"),n()(),t(1539,"tr",17)(1540,"td",18),e(1541," rowIndex"),n(),t(1542,"td",21)(1543,"code",43),e(1544," number "),n()(),t(1545,"td",24)(1546,"p"),e(1547,"\xCDndice da linha que ser\xE1 expandida."),n(),t(1548,"blockquote")(1549,"p"),e(1550,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),n()()()()(),i(1551,"br"),t(1552,"table",40)(1553,"tr",17)(1554,"th",41)(1555,"div",19)(1556,"h4")(1557,"span",20),e(1558," getSelectedRows "),n()()()()(),t(1559,"tr",24)(1560,"td",24)(1561,"p"),e(1562,"Retorna as linhas do "),t(1563,"code"),e(1564,"po-table"),n(),e(1565," que est\xE3o selecionadas."),n()()()(),i(1566,"br"),t(1567,"table",40)(1568,"tr",17)(1569,"th",41)(1570,"div",19)(1571,"h4")(1572,"span",20),e(1573," getUnselectedRows "),n()()()()(),t(1574,"tr",24)(1575,"td",24)(1576,"p"),e(1577,"Retorna as linhas do "),t(1578,"code"),e(1579,"po-table"),n(),e(1580," que n\xE3o est\xE3o selecionadas."),n()()()(),i(1581,"br"),t(1582,"table",40)(1583,"tr",17)(1584,"th",41)(1585,"div",19)(1586,"h4")(1587,"span",20),e(1588," unselectRows "),n()()()()(),t(1589,"tr",24)(1590,"td",24)(1591,"p"),e(1592,"Desmarca as linhas que est\xE3o selecionadas."),n()()()(),i(1593,"br"),t(1594,"table",40)(1595,"tr",17)(1596,"th",41)(1597,"div",19)(1598,"h4")(1599,"span",20),e(1600," unselectRowItem "),n()()()()(),t(1601,"tr",24)(1602,"td",24)(1603,"p"),e(1604,"Desmarca uma linha que est\xE1 selecionada."),n()()()(),i(1605,"br"),t(1606,"table",40)(1607,"tr",17)(1608,"th",41)(1609,"div",19)(1610,"h4")(1611,"span",20),e(1612," selectRowItem "),n()()()()(),t(1613,"tr",24)(1614,"td",24)(1615,"p"),e(1616,"Seleciona uma linha do 'po-table'."),n()()()(),i(1617,"br"),t(1618,"table",40)(1619,"tr",17)(1620,"th",41)(1621,"div",19)(1622,"h4")(1623,"span",20),e(1624," deleteItems "),n()()()()(),t(1625,"tr",24)(1626,"td",24)(1627,"p"),e(1628,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),t(1629,"code"),e(1630,"p-service-delete"),n(),e(1631,", ser\xE1 necess\xE1rio excluir 1 item por vez."),n(),t(1632,"p"),e(1633,"Ao utilizar "),t(1634,"code"),e(1635,"p-service-delete"),n(),e(1636," mas sem a propriedade "),t(1637,"code"),e(1638,"p-service-api"),n(),e(1639,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),n(),t(1640,"p"),e(1641,"Caso a tabela utilize "),t(1642,"code"),e(1643,"p-height"),n(),e(1644," e esteja sem servi\xE7o, \xE9 necess\xE1rio a reatribui\xE7\xE3o dos itens utilizando o evento "),t(1645,"code"),e(1646,"(p-delete-items)"),n(),e(1647,", por exemplo:"),n(),t(1648,"pre")(1649,"code"),e(1650,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),n()()()()(),i(1651,"br"),t(1652,"table",40)(1653,"tr",17)(1654,"th",41)(1655,"div",19)(1656,"h4")(1657,"span",20),e(1658," removeItem "),n()()()()(),t(1659,"tr",24)(1660,"td",24)(1661,"p"),e(1662,"M\xE9todo que remove um item da tabela."),n()()()(),t(1663,"h5")(1664,"b"),e(1665,"Par\xE2metros"),n()(),t(1666,"table",14)(1667,"tr",15)(1668,"th",16),e(1669,"Nome"),n(),t(1670,"th",16),e(1671,"Tipo"),n(),t(1672,"th",16),e(1673,"Descri\xE7\xE3o"),n()(),t(1674,"tr",17)(1675,"td",18),e(1676," item"),n(),t(1677,"td",21)(1678,"code",35),e(1679," number "),n(),t(1680,"code",42),e(1681," { key: value } "),n()(),t(1682,"td",24)(1683,"p"),e(1684,"\xCDndice da linha ou o item que ser\xE1 removido."),n(),t(1685,"blockquote")(1686,"p"),e(1687,"Ao remover o item, a linha que o representa ser\xE1 exclu\xEDda da tabela."),n()()()()(),i(1688,"br"),t(1689,"table",40)(1690,"tr",17)(1691,"th",41)(1692,"div",19)(1693,"h4")(1694,"span",20),e(1695," updateItem "),n()()()()(),t(1696,"tr",24)(1697,"td",24)(1698,"p"),e(1699,"M\xE9todo que atualiza um item da tabela."),n()()()(),t(1700,"h5")(1701,"b"),e(1702,"Par\xE2metros"),n()(),t(1703,"table",14)(1704,"tr",15)(1705,"th",16),e(1706,"Nome"),n(),t(1707,"th",16),e(1708,"Tipo"),n(),t(1709,"th",16),e(1710,"Descri\xE7\xE3o"),n()(),t(1711,"tr",17)(1712,"td",18),e(1713," item"),n(),t(1714,"td",21)(1715,"code",35),e(1716," number "),n(),t(1717,"code",42),e(1718," { key: value } "),n()(),t(1719,"td",24)(1720,"p"),e(1721,"\xCDndice da linha ou o item que ser\xE1 atualizado."),n()()(),t(1722,"tr",17)(1723,"td",18),e(1724," updatedItem"),n(),t(1725,"td",21)(1726,"code",42),e(1727," { key: value } "),n()(),t(1728,"td",24)(1729,"p"),e(1730,"Item que foi atualizado."),n(),t(1731,"blockquote")(1732,"p"),e(1733,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada na tabela."),n()()()()(),i(1734,"br"),t(1735,"h3"),e(1736,"Interfaces"),n(),t(1737,"h4",44)(1738,"code",5),e(1739,"PoTableAction"),n()(),t(1740,"div",2)(1741,"p"),e(1742,"Interface para lista de a\xE7\xF5es do componente. "),n()(),t(1743,"h4",13),e(1744,"Propriedades"),n(),t(1745,"table",14)(1746,"tr",15)(1747,"th",16),e(1748,"Nome"),n(),t(1749,"th",16),e(1750,"Tipo"),n(),t(1751,"th",16),e(1752,"Descri\xE7\xE3o"),n()(),t(1753,"tr",17)(1754,"td",18)(1755,"div",19)(1756,"span",20),e(1757," action"),i(1758,"br"),n()()(),t(1759,"td",21)(1760,"code",45),e(1761,"Function"),n()(),t(1762,"td",24)(1763,"em")(1764,"strong"),e(1765,"(opcional)"),n()(),t(1766,"p"),e(1767,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),n(),t(1768,"blockquote")(1769,"p"),e(1770,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),t(1771,"em"),e(1772,"bind"),n(),e(1773,"."),n()(),t(1774,"p"),e(1775,"Exemplo: "),t(1776,"code"),e(1777,"action: this.myFunction.bind(this)"),n()()()(),t(1778,"tr",17)(1779,"td",18)(1780,"div",19)(1781,"span",20),e(1782," disabled"),i(1783,"br"),n()()(),t(1784,"td",21)(1785,"code",22),e(1786,"boolean "),n(),t(1787,"code",45),e(1788," Function"),n()(),t(1789,"td",24)(1790,"em")(1791,"strong"),e(1792,"(opcional)"),n()(),t(1793,"p"),e(1794,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),n(),t(1795,"p"),e(1796,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),n()()(),t(1797,"tr",17)(1798,"td",18)(1799,"div",19)(1800,"span",20),e(1801," icon"),i(1802,"br"),n()()(),t(1803,"td",21)(1804,"code",31),e(1805,"string "),n(),t(1806,"code",46),e(1807," TemplateRef<void>"),n()(),t(1808,"td",24)(1809,"em")(1810,"strong"),e(1811,"(opcional)"),n()(),t(1812,"p"),e(1813,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),n(),t(1814,"p"),e(1815,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(1816,"a",26),e(1817,"Biblioteca de \xEDcones"),n(),e(1818,". conforme exemplo abaixo:"),n(),t(1819,"pre")(1820,"code"),e(1821,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),n()(),t(1822,"p"),e(1823,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),n(),t(1824,"pre")(1825,"code"),e(1826,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),n()(),t(1827,"p"),e(1828,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(1829,"code"),e(1830,"TemplateRef"),n(),e(1831,`, conforme exemplo abaixo:
component.html:`),n(),t(1832,"pre")(1833,"code"),e(1834,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),n()(),t(1835,"p"),e(1836,"component.ts:"),n(),t(1837,"pre")(1838,"code"),e(1839,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),n()()()(),t(1840,"tr",17)(1841,"td",18)(1842,"div",19)(1843,"span",20),e(1844," label"),i(1845,"br"),n()()(),t(1846,"td",21)(1847,"code",31),e(1848,"string"),n()(),t(1849,"td",24)(1850,"p"),e(1851,"R\xF3tulo da a\xE7\xE3o."),n()()(),t(1852,"tr",17)(1853,"td",18)(1854,"div",19)(1855,"span",20),e(1856," selected"),i(1857,"br"),n()()(),t(1858,"td",21)(1859,"code",22),e(1860,"boolean"),n()(),t(1861,"td",24)(1862,"em")(1863,"strong"),e(1864,"(opcional)"),n()(),t(1865,"p"),e(1866,"Define se a a\xE7\xE3o est\xE1 selecionada."),n()()(),t(1867,"tr",17)(1868,"td",18)(1869,"div",19)(1870,"span",20),e(1871," separator"),i(1872,"br"),n()()(),t(1873,"td",21)(1874,"code",22),e(1875,"boolean"),n()(),t(1876,"td",24)(1877,"em")(1878,"strong"),e(1879,"(opcional)"),n()(),t(1880,"p"),e(1881,"Atribui uma linha separadora acima do item."),n()()(),t(1882,"tr",17)(1883,"td",18)(1884,"div",19)(1885,"span",20),e(1886," type"),i(1887,"br"),n()()(),t(1888,"td",21)(1889,"code",31),e(1890,"string"),n()(),t(1891,"td",24)(1892,"em")(1893,"strong"),e(1894,"(opcional)"),n()(),t(1895,"p"),e(1896,"Define a cor do item, sendo "),t(1897,"code"),e(1898,"default"),n(),e(1899," o padr\xE3o."),n(),t(1900,"p"),e(1901,"Valores v\xE1lidos:"),n(),t(1902,"ul")(1903,"li")(1904,"code"),e(1905,"default"),n()(),t(1906,"li")(1907,"code"),e(1908,"danger"),n(),e(1909," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),n()()()(),t(1910,"tr",17)(1911,"td",18)(1912,"div",19)(1913,"span",20),e(1914," url"),i(1915,"br"),n()()(),t(1916,"td",21)(1917,"code",31),e(1918,"string"),n()(),t(1919,"td",24)(1920,"em")(1921,"strong"),e(1922,"(opcional)"),n()(),t(1923,"p"),e(1924,"URL utilizada no redirecionamento das p\xE1ginas."),n()()(),t(1925,"tr",17)(1926,"td",18)(1927,"div",19)(1928,"span",20),e(1929," visible"),i(1930,"br"),n()()(),t(1931,"td",21)(1932,"code",22),e(1933,"boolean "),n(),t(1934,"code",45),e(1935," Function"),n()(),t(1936,"td",24)(1937,"em")(1938,"strong"),e(1939,"(opcional)"),n()(),t(1940,"p"),e(1941,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),n(),t(1942,"blockquote")(1943,"p"),e(1944,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),n()(),t(1945,"p"),e(1946,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),n(),t(1947,"ul")(1948,"li")(1949,"p"),e(1950,"Fun\xE7\xE3o que deve retornar um booleano."),n()(),t(1951,"li")(1952,"p"),e(1953,"Informar diretamente um valor booleano."),n()()()()()(),t(1954,"h4",44)(1955,"code",5),e(1956,"PoTableBoolean"),n()(),t(1957,"div",2)(1958,"p"),e(1959,"Interface que define as colunas booleanas do "),t(1960,"code"),e(1961,"po-table"),n(),e(1962,"."),n()(),t(1963,"h4",13),e(1964,"Propriedades"),n(),t(1965,"table",14)(1966,"tr",15)(1967,"th",16),e(1968,"Nome"),n(),t(1969,"th",16),e(1970,"Tipo"),n(),t(1971,"th",16),e(1972,"Descri\xE7\xE3o"),n()(),t(1973,"tr",17)(1974,"td",18)(1975,"div",19)(1976,"span",20),e(1977," falseLabel"),i(1978,"br"),n()()(),t(1979,"td",21)(1980,"code",31),e(1981,"string"),n()(),t(1982,"td",24)(1983,"em")(1984,"strong"),e(1985,"(opcional)"),n()(),t(1986,"p"),e(1987,"Define o r\xF3tulo para valores "),t(1988,"code"),e(1989,"false"),n(),e(1990,"."),n()()(),t(1991,"tr",17)(1992,"td",18)(1993,"div",19)(1994,"span",20),e(1995," trueLabel"),i(1996,"br"),n()()(),t(1997,"td",21)(1998,"code",31),e(1999,"string"),n()(),t(2e3,"td",24)(2001,"em")(2002,"strong"),e(2003,"(opcional)"),n()(),t(2004,"p"),e(2005,"Define o r\xF3tulo para valores "),t(2006,"code"),e(2007,"true"),n(),e(2008,"."),n()()()(),t(2009,"h4",44)(2010,"code",5),e(2011,"PoTableColumnSort"),n()(),t(2012,"div",2)(2013,"p"),e(2014,"Interface para ordena\xE7\xE3o das colunas do componente table."),n()(),t(2015,"h4",13),e(2016,"Propriedades"),n(),t(2017,"table",14)(2018,"tr",15)(2019,"th",16),e(2020,"Nome"),n(),t(2021,"th",16),e(2022,"Tipo"),n(),t(2023,"th",16),e(2024,"Descri\xE7\xE3o"),n()(),t(2025,"tr",17)(2026,"td",18)(2027,"div",19)(2028,"span",20),e(2029," column"),i(2030,"br"),n()()(),t(2031,"td",21)(2032,"code",47),e(2033,"PoTableColumn"),n()(),t(2034,"td",24)(2035,"em")(2036,"strong"),e(2037,"(opcional)"),n()(),t(2038,"p"),e(2039,"Coluna pela qual a tabela est\xE1 ordenada."),n()()(),t(2040,"tr",17)(2041,"td",18)(2042,"div",19)(2043,"span",20),e(2044," type"),i(2045,"br"),n()()(),t(2046,"td",21)(2047,"code",48),e(2048,"PoTableColumnSortType"),n()(),t(2049,"td",24)(2050,"p"),e(2051,"Tipo da ordena\xE7\xE3o."),n()()()(),t(2052,"h4",44)(2053,"code",5),e(2054,"PoTableColumn"),n()(),t(2055,"div",2)(2056,"p"),e(2057,"Interface para configura\xE7\xE3o das colunas do "),t(2058,"code"),e(2059,"po-table"),n(),e(2060,"."),n(),t(2061,"p"),e(2062,"As defini\xE7\xF5es das colunas ser\xE3o aplicadas linha a linha."),n()(),t(2063,"h4",13),e(2064,"Propriedades"),n(),t(2065,"table",14)(2066,"tr",15)(2067,"th",16),e(2068,"Nome"),n(),t(2069,"th",16),e(2070,"Tipo"),n(),t(2071,"th",16),e(2072,"Descri\xE7\xE3o"),n()(),t(2073,"tr",17)(2074,"td",18)(2075,"div",19)(2076,"span",20),e(2077," action"),i(2078,"br"),n()()(),t(2079,"td",21)(2080,"code",45),e(2081,"Function"),n()(),t(2082,"td",24)(2083,"em")(2084,"strong"),e(2085,"(opcional)"),n()(),t(2086,"p"),e(2087,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),t(2088,"code"),e(2089,"link"),n(),e(2090," ou "),t(2091,"code"),e(2092,"icon"),n(),e(2093,"."),n(),t(2094,"blockquote")(2095,"p"),e(2096,"Quando for do tipo "),t(2097,"code"),e(2098,"link"),n(),e(2099,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),n()(),t(2100,"blockquote")(2101,"p"),e(2102,"Quando for do tipo "),t(2103,"code"),e(2104,"icon"),n(),e(2105," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),n()()()(),t(2106,"tr",17)(2107,"td",18)(2108,"div",19)(2109,"span",20),e(2110," boolean"),i(2111,"br"),n()()(),t(2112,"td",21)(2113,"code",49),e(2114,"PoTableBoolean"),n()(),t(2115,"td",24)(2116,"em")(2117,"strong"),e(2118,"(opcional)"),n()(),t(2119,"p"),e(2120,"Define um objeto do tipo "),t(2121,"code"),e(2122,"PoTableBoolean"),n(),e(2123," para as colunas do tipo "),t(2124,"em"),e(2125,"boolean"),n(),e(2126,". Por exemplo:"),n(),t(2127,"pre")(2128,"code"),e(2129,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),n()(),t(2130,"blockquote")(2131,"p"),e(2132,"Caso n\xE3o seja definido um objeto para colunas do tipo "),t(2133,"em"),e(2134,"boolean"),n(),e(2135,`,
esta exibir\xE1 por padr\xE3o `),t(2136,"code"),e(2137,"Sim"),n(),e(2138," e "),t(2139,"code"),e(2140,"N\xE3o"),n(),e(2141," de acordo com os valores "),t(2142,"em"),e(2143,"booleanos"),n(),e(2144,"."),n()()()(),t(2145,"tr",17)(2146,"td",18)(2147,"div",19)(2148,"span",20),e(2149," color"),i(2150,"br"),n()()(),t(2151,"td",21)(2152,"code",31),e(2153,"string "),n(),t(2154,"code",45),e(2155," Function"),n()(),t(2156,"td",24)(2157,"em")(2158,"strong"),e(2159,"(opcional)"),n()(),t(2160,"p"),e(2161,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),n(),t(2162,"p"),e(2163,"Valores v\xE1lidos:"),n(),t(2164,"ul")(2165,"li"),i(2166,"span",50),t(2167,"code"),e(2168,"color-01"),n()(),t(2169,"li"),i(2170,"span",51),t(2171,"code"),e(2172,"color-02"),n()(),t(2173,"li"),i(2174,"span",52),t(2175,"code"),e(2176,"color-03"),n()(),t(2177,"li"),i(2178,"span",53),t(2179,"code"),e(2180,"color-04"),n()(),t(2181,"li"),i(2182,"span",54),t(2183,"code"),e(2184,"color-05"),n()(),t(2185,"li"),i(2186,"span",55),t(2187,"code"),e(2188,"color-06"),n()(),t(2189,"li"),i(2190,"span",56),t(2191,"code"),e(2192,"color-07"),n()(),t(2193,"li"),i(2194,"span",57),t(2195,"code"),e(2196,"color-08"),n()(),t(2197,"li"),i(2198,"span",58),t(2199,"code"),e(2200,"color-09"),n()(),t(2201,"li"),i(2202,"span",59),t(2203,"code"),e(2204,"color-10"),n()(),t(2205,"li"),i(2206,"span",60),t(2207,"code"),e(2208,"color-11"),n()(),t(2209,"li"),i(2210,"span",61),t(2211,"code"),e(2212,"color-12"),n()()(),t(2213,"blockquote")(2214,"p"),e(2215,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),n()(),t(2216,"pre")(2217,"code"),e(2218,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),n()(),t(2219,"blockquote")(2220,"p"),e(2221,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),t(2222,"code"),e(2223,"icons"),n(),e(2224,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),n()(),t(2225,"pre")(2226,"code"),e(2227,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),n()()()(),t(2228,"tr",17)(2229,"td",18)(2230,"div",19)(2231,"span",20),e(2232," detail"),i(2233,"br"),n()()(),t(2234,"td",21)(2235,"code",62),e(2236,"PoTableDetail"),n()(),t(2237,"td",24)(2238,"em")(2239,"strong"),e(2240,"(opcional)"),n()(),t(2241,"p"),e(2242,"Define um objeto que segue a interface "),t(2243,"code"),e(2244,"PoTableDetail"),n(),e(2245,", para as colunas de detalhes. Por exemplo:"),n(),t(2246,"pre")(2247,"code"),e(2248,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),n()()()(),t(2249,"tr",17)(2250,"td",18)(2251,"div",19)(2252,"span",20),e(2253," disabled"),i(2254,"br"),n()()(),t(2255,"td",21)(2256,"code",45),e(2257,"Function"),n()(),t(2258,"td",24)(2259,"em")(2260,"strong"),e(2261,"(opcional)"),n()(),t(2262,"p"),e(2263,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),t(2264,"em"),e(2265,"link"),n(),e(2266," e sua a\xE7\xE3o."),n(),t(2267,"blockquote")(2268,"p"),e(2269,"Propriedade dispon\xEDvel nas colunas do tipo "),t(2270,"code"),e(2271,"link"),n(),e(2272,"."),n()()()(),t(2273,"tr",17)(2274,"td",18)(2275,"div",19)(2276,"span",20),e(2277," format"),i(2278,"br"),n()()(),t(2279,"td",21)(2280,"code",31),e(2281,"string"),n()(),t(2282,"td",24)(2283,"em")(2284,"strong"),e(2285,"(opcional)"),n()(),t(2286,"p"),e(2287,"Formato de exibi\xE7\xE3o do valor da coluna:"),n(),t(2288,"ul")(2289,"li"),e(2290,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),n(),t(2291,"li"),e(2292,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),n(),t(2293,"li"),e(2294,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),n(),t(2295,"li"),e(2296,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),t(2297,"a",63)(2298,"strong"),e(2299,"DecimalPipe"),n()(),e(2300," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:"),t(2301,"ul")(2302,"li"),e(2303,"Com o valor de entrada: "),t(2304,"code"),e(2305,"50"),n(),e(2306," e a valor para formata\xE7\xE3o: "),t(2307,"code"),e(2308,"'1.2-5'"),n(),e(2309," o resultado ser\xE1: "),t(2310,"code"),e(2311,"50.00"),n()()()()()()(),t(2312,"tr",17)(2313,"td",18)(2314,"div",19)(2315,"span",20),e(2316," icons"),i(2317,"br"),n()()(),t(2318,"td",21)(2319,"code",64),e(2320,"Array<PoTableColumnIcon>"),n()(),t(2321,"td",24)(2322,"em")(2323,"strong"),e(2324,"(opcional)"),n()(),t(2325,"p"),e(2326,"Define um "),t(2327,"em"),e(2328,"array"),n(),e(2329," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),t(2330,"code"),e(2331,"action"),n(),e(2332," e "),t(2333,"code"),e(2334,"color"),n(),e(2335,`
definidos na coluna, \xE0 partir do `),t(2336,"em"),e(2337,"value"),n(),e(2338," da "),t(2339,"a",65)(2340,"code"),e(2341,"PoTableColumnIcon"),n()(),e(2342,", por exemplo:"),n(),t(2343,"pre")(2344,"code"),e(2345,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),n()(),t(2346,"pre")(2347,"code"),e(2348,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),n()()()(),t(2349,"tr",17)(2350,"td",18)(2351,"div",19)(2352,"span",20),e(2353," label"),i(2354,"br"),n()()(),t(2355,"td",21)(2356,"code",31),e(2357,"string"),n()(),t(2358,"td",24)(2359,"em")(2360,"strong"),e(2361,"(opcional)"),n()(),t(2362,"p"),e(2363,"Texto para t\xEDtulo da coluna."),n(),t(2364,"p"),e(2365,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),t(2366,"em"),e(2367,"label"),n(),e(2368," o valor da propriedade "),t(2369,"em"),e(2370,"property"),n(),e(2371," com a primeira letra em mai\xFAsculo."),n()()(),t(2372,"tr",17)(2373,"td",18)(2374,"div",19)(2375,"span",20),e(2376," labels"),i(2377,"br"),n()()(),t(2378,"td",21)(2379,"code",66),e(2380,"Array<PoTableColumnLabel>"),n()(),t(2381,"td",24)(2382,"em")(2383,"strong"),e(2384,"(opcional)"),n()(),t(2385,"p"),e(2386,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),t(2387,"code"),e(2388,"PoTableColumnLabel"),n(),e(2389," na qual devem ser definidas os labels. Por exemplo:"),n(),t(2390,"pre")(2391,"code"),e(2392,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),n()()()(),t(2393,"tr",17)(2394,"td",18)(2395,"div",19)(2396,"span",20),e(2397," link"),i(2398,"br"),n()()(),t(2399,"td",21)(2400,"code",31),e(2401,"string"),n()(),t(2402,"td",24)(2403,"em")(2404,"strong"),e(2405,"(opcional)"),n()(),t(2406,"p"),e(2407,"Define o nome da propriedade que conter\xE1 o "),t(2408,"code"),e(2409,"link"),n(),e(2410," a ser redirecionado."),n()()(),t(2411,"tr",17)(2412,"td",18)(2413,"div",19)(2414,"span",20),e(2415," property"),i(2416,"br"),n()()(),t(2417,"td",21)(2418,"code",31),e(2419,"string"),n()(),t(2420,"td",24)(2421,"em")(2422,"strong"),e(2423,"(opcional)"),n()(),t(2424,"p"),e(2425,"Nome identificador da coluna. Tamb\xE9m permite objetos aninhados conforme exemplo abaixo."),n(),t(2426,"pre")(2427,"code"),e(2428,`{ property: 'address.street', label: 'Rua' }
`),n()()()(),t(2429,"tr",17)(2430,"td",18)(2431,"div",19)(2432,"span",20),e(2433," sortable"),i(2434,"br"),n()()(),t(2435,"td",21)(2436,"code",22),e(2437,"boolean"),n()(),t(2438,"td",24)(2439,"em")(2440,"strong"),e(2441,"(opcional)"),n()(),t(2442,"p"),e(2443,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),n()()(),t(2444,"tr",17)(2445,"td",18)(2446,"div",19)(2447,"span",20),e(2448," subtitles"),i(2449,"br"),n()()(),t(2450,"td",21)(2451,"code",67),e(2452,"Array<PoTableSubtitleColumn>"),n()(),t(2453,"td",24)(2454,"em")(2455,"strong"),e(2456,"(opcional)"),n()(),t(2457,"p"),e(2458,"Define um array de objetos para as colunas de legenda. Onde, "),t(2459,"code"),e(2460,"subtitles"),n(),e(2461,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),n(),t(2462,"pre")(2463,"code"),e(2464,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', content: '2' }
}
`),n()(),t(2465,"p"),e(2466,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),n()()(),t(2467,"tr",17)(2468,"td",18)(2469,"div",19)(2470,"span",20),e(2471," tooltip"),i(2472,"br"),n()()(),t(2473,"td",21)(2474,"code",31),e(2475,"string"),n()(),t(2476,"td",24)(2477,"em")(2478,"strong"),e(2479,"(opcional)"),n()(),t(2480,"p"),e(2481,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(2482,"em"),e(2483,"mouse"),n(),e(2484," sobre um texto."),n(),t(2485,"blockquote")(2486,"p"),e(2487,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),t(2488,"em"),e(2489,"link"),n(),e(2490,"."),n()(),t(2491,"blockquote")(2492,"p"),e(2493,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),t(2494,"em"),e(2495,"tooltip"),n(),e(2496," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),n()()()(),t(2497,"tr",17)(2498,"td",18)(2499,"div",19)(2500,"span",20),e(2501," type"),i(2502,"br"),n()()(),t(2503,"td",21)(2504,"code",31),e(2505,"string"),n()(),t(2506,"td",24)(2507,"em")(2508,"strong"),e(2509,"(opcional)"),n()(),t(2510,"p"),e(2511,"Tipo da coluna."),n(),t(2512,"p"),e(2513,"Valores v\xE1lidos:"),n(),t(2514,"ul")(2515,"li")(2516,"p")(2517,"code"),e(2518,"boolean"),n(),e(2519,": Exibir\xE1 por padr\xE3o "),t(2520,"code"),e(2521,"Sim"),n(),e(2522," e "),t(2523,"code"),e(2524,"N\xE3o"),n(),e(2525," de acordo com os valores "),t(2526,"em"),e(2527,"booleanos"),n(),e(2528,"."),n(),t(2529,"blockquote")(2530,"p"),e(2531,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),t(2532,"code"),e(2533,"boolean"),n(),e(2534," desta interface."),n()()(),t(2535,"li")(2536,"p")(2537,"code"),e(2538,"currency"),n(),e(2539,": valores monet\xE1rios."),n()(),t(2540,"li")(2541,"p")(2542,"code"),e(2543,"date"),n(),e(2544,": valor de datas."),n(),t(2545,"ul")(2546,"li"),e(2547,"Aceita os tipos "),t(2548,"em"),e(2549,"string"),n(),e(2550," e "),t(2551,"em"),e(2552,"Date"),n(),e(2553,` padr\xE3o do Javascript,
por exemplo: `),t(2554,"code"),e(2555,"'2017-11-28'"),n(),e(2556," ou "),t(2557,"code"),e(2558,"new Date(2017, 10, 28)"),n(),e(2559,"."),n()()(),t(2560,"li")(2561,"p")(2562,"code"),e(2563,"dateTime"),n(),e(2564,": valor de data com hor\xE1rio."),n(),t(2565,"ul")(2566,"li"),e(2567,"Aceita o tipo "),t(2568,"em"),e(2569,"string"),n(),e(2570," no formato "),t(2571,"strong"),e(2572,"ISO-8601"),n(),e(2573," extendido "),t(2574,"strong"),e(2575,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),n(),e(2576,`
e o tipo `),t(2577,"em"),e(2578,"Date"),n(),e(2579," padr\xE3o do Javascript, por exemplo: "),t(2580,"code"),e(2581,"'2017-11-28T00:00:00-02:00'"),n(),e(2582," ou "),t(2583,"code"),e(2584,"new Date(2017, 10, 28)"),n(),e(2585,"."),n()()(),t(2586,"li")(2587,"p")(2588,"code"),e(2589,"detail"),n(),e(2590,": array de objetos para o master-detail."),n(),t(2591,"ul")(2592,"li"),e(2593,"Incompat\xEDvel com "),t(2594,"code"),e(2595,"virtual-scroll"),n(),e(2596,", que requer altura fixa nas linhas."),n()()(),t(2597,"li")(2598,"p")(2599,"code"),e(2600,"icon"),n(),e(2601,": "),t(2602,"em"),e(2603,"array"),n(),e(2604," de "),t(2605,"em"),e(2606,"string"),n(),e(2607," ou objetos para a coluna de \xEDcones."),n()(),t(2608,"li")(2609,"p")(2610,"code"),e(2611,"label"),n(),e(2612,": texto com destaque."),n()(),t(2613,"li")(2614,"p")(2615,"code"),e(2616,"link"),n(),e(2617,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),n()(),t(2618,"li")(2619,"p")(2620,"code"),e(2621,"number"),n(),e(2622,": valores num\xE9ricos."),n()(),t(2623,"li")(2624,"p")(2625,"code"),e(2626,"string"),n(),e(2627,": textos."),n()(),t(2628,"li")(2629,"p")(2630,"code"),e(2631,"subtitle"),n(),e(2632,": array de objetos para a coluna de legenda."),n()(),t(2633,"li")(2634,"p")(2635,"code"),e(2636,"time"),n(),e(2637,": valor de hor\xE1rio."),n(),t(2638,"ul")(2639,"li"),e(2640,"Aceita o tipo "),t(2641,"em"),e(2642,"string"),n(),e(2643," nos formatos "),t(2644,"strong"),e(2645,"'HH:mm:ss'"),n(),e(2646," ou "),t(2647,"strong"),e(2648,"'HH:mm:ss.ffffff'"),n(),e(2649,", por exemplo: "),t(2650,"code"),e(2651,"'23:12:45'"),n(),e(2652,"."),n()()(),t(2653,"li")(2654,"p")(2655,"code"),e(2656,"cellTemplate"),n(),e(2657,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),t(2658,"a",8),e(2659,"PoTableCellTemplate"),n(),e(2660,"."),n()(),t(2661,"li")(2662,"p")(2663,"code"),e(2664,"columnTemplate"),n(),e(2665,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),t(2666,"a",7),e(2667,"PoTableColumnTemplate"),n(),e(2668,"."),n()()()()(),t(2669,"tr",17)(2670,"td",18)(2671,"div",19)(2672,"span",20),e(2673," visible"),i(2674,"br"),n()()(),t(2675,"td",21)(2676,"code",22),e(2677,"boolean"),n()(),t(2678,"td",24)(2679,"em")(2680,"strong"),e(2681,"(opcional)"),n()(),t(2682,"p"),e(2683,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),t(2684,"strong"),e(2685,"gerenciador de colunas"),n(),e(2686,"."),n(),t(2687,"blockquote")(2688,"p"),e(2689,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),t(2690,"code"),e(2691,"p-max-columns"),n(),e(2692,"."),n()()()(),t(2693,"tr",17)(2694,"td",18)(2695,"div",19)(2696,"span",20),e(2697," width"),i(2698,"br"),n()()(),t(2699,"td",21)(2700,"code",31),e(2701,"string"),n()(),t(2702,"td",24)(2703,"em")(2704,"strong"),e(2705,"(opcional)"),n()(),t(2706,"p"),e(2707,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),n(),t(2708,"ul")(2709,"li"),e(2710,"para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px"),n(),t(2711,"li"),e(2712,"para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px"),n()()()()(),t(2713,"h4",44)(2714,"code",5),e(2715,"PoTableLiterals"),n()(),t(2716,"div",2)(2717,"p"),e(2718,"Interface para defini\xE7\xE3o das literais usadas no "),t(2719,"code"),e(2720,"po-table"),n(),e(2721,"."),n()(),t(2722,"h4",13),e(2723,"Propriedades"),n(),t(2724,"table",14)(2725,"tr",15)(2726,"th",16),e(2727,"Nome"),n(),t(2728,"th",16),e(2729,"Tipo"),n(),t(2730,"th",16),e(2731,"Descri\xE7\xE3o"),n()(),t(2732,"tr",17)(2733,"td",18)(2734,"div",19)(2735,"span",20),e(2736," bodyDelete"),i(2737,"br"),n()()(),t(2738,"td",21)(2739,"code",31),e(2740,"string"),n()(),t(2741,"td",24)(2742,"em")(2743,"strong"),e(2744,"(opcional)"),n()(),t(2745,"p"),e(2746,"Texto no corpo do Modal de exclus\xE3o"),n()()(),t(2747,"tr",17)(2748,"td",18)(2749,"div",19)(2750,"span",20),e(2751," cancel"),i(2752,"br"),n()()(),t(2753,"td",21)(2754,"code",31),e(2755,"string"),n()(),t(2756,"td",24)(2757,"em")(2758,"strong"),e(2759,"(opcional)"),n()(),t(2760,"p"),e(2761,"Texto no Modal para cancelar a exclus\xE3o"),n()()(),t(2762,"tr",17)(2763,"td",18)(2764,"div",19)(2765,"span",20),e(2766," columnsManager"),i(2767,"br"),n()()(),t(2768,"td",21)(2769,"code",31),e(2770,"string"),n()(),t(2771,"td",24)(2772,"em")(2773,"strong"),e(2774,"(opcional)"),n()(),t(2775,"p"),e(2776,"Texto do "),t(2777,"strong"),e(2778,"Gerenciador de colunas"),n(),e(2779," localizado no canto superior direito da tabela."),n()()(),t(2780,"tr",17)(2781,"td",18)(2782,"div",19)(2783,"span",20),e(2784," completeSubtitle"),i(2785,"br"),n()()(),t(2786,"td",21)(2787,"code",31),e(2788,"string"),n()(),t(2789,"td",24)(2790,"em")(2791,"strong"),e(2792,"(opcional)"),n()(),t(2793,"p"),e(2794,"T\xEDtulo da modal 'Legenda completa' que aparece ao clicar no bot\xE3o 'Ver legenda completa'."),n()()(),t(2795,"tr",17)(2796,"td",18)(2797,"div",19)(2798,"span",20),e(2799," delete"),i(2800,"br"),n()()(),t(2801,"td",21)(2802,"code",31),e(2803,"string"),n()(),t(2804,"td",24)(2805,"em")(2806,"strong"),e(2807,"(opcional)"),n()(),t(2808,"p"),e(2809,"Texto no Modal para confirmar a exclus\xE3o"),n()()(),t(2810,"tr",17)(2811,"td",18)(2812,"div",19)(2813,"span",20),e(2814," deleteApiError"),i(2815,"br"),n()()(),t(2816,"td",21)(2817,"code",31),e(2818,"string"),n()(),t(2819,"td",24)(2820,"em")(2821,"strong"),e(2822,"(opcional)"),n()(),t(2823,"p"),e(2824,"Texto de notifica\xE7\xE3o de erro na requisi\xE7\xE3o Delete"),n()()(),t(2825,"tr",17)(2826,"td",18)(2827,"div",19)(2828,"span",20),e(2829," deleteSuccessful"),i(2830,"br"),n()()(),t(2831,"td",21)(2832,"code",31),e(2833,"string"),n()(),t(2834,"td",24)(2835,"em")(2836,"strong"),e(2837,"(opcional)"),n()(),t(2838,"p"),e(2839,"Texto de notifica\xE7\xE3o de remo\xE7\xE3o com sucesso"),n()()(),t(2840,"tr",17)(2841,"td",18)(2842,"div",19)(2843,"span",20),e(2844," loadMoreData"),i(2845,"br"),n()()(),t(2846,"td",21)(2847,"code",31),e(2848,"string"),n()(),t(2849,"td",24)(2850,"em")(2851,"strong"),e(2852,"(opcional)"),n()(),t(2853,"p"),e(2854,"Texto do bot\xE3o de "),t(2855,"strong"),e(2856,"Carregar mais resultados"),n(),e(2857," localizado no rodap\xE9 da tabela."),n()()(),t(2858,"tr",17)(2859,"td",18)(2860,"div",19)(2861,"span",20),e(2862," loadingData"),i(2863,"br"),n()()(),t(2864,"td",21)(2865,"code",31),e(2866,"string"),n()(),t(2867,"td",24)(2868,"em")(2869,"strong"),e(2870,"(opcional)"),n()(),t(2871,"p"),e(2872,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),n()()(),t(2873,"tr",17)(2874,"td",18)(2875,"div",19)(2876,"span",20),e(2877," multipleItems"),i(2878,"br"),n()()(),t(2879,"td",21)(2880,"code",31),e(2881,"string"),n()(),t(2882,"td",24)(2883,"em")(2884,"strong"),e(2885,"(opcional)"),n()(),t(2886,"p"),e(2887,"Texto exibido quando apenas 1 item for selecionado no checkbox."),n()()(),t(2888,"tr",17)(2889,"td",18)(2890,"div",19)(2891,"span",20),e(2892," noColumns"),i(2893,"br"),n()()(),t(2894,"td",21)(2895,"code",31),e(2896,"string"),n()(),t(2897,"td",24)(2898,"em")(2899,"strong"),e(2900,"(opcional)"),n()(),t(2901,"p"),e(2902,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),n()()(),t(2903,"tr",17)(2904,"td",18)(2905,"div",19)(2906,"span",20),e(2907," noData"),i(2908,"br"),n()()(),t(2909,"td",21)(2910,"code",31),e(2911,"string"),n()(),t(2912,"td",24)(2913,"em")(2914,"strong"),e(2915,"(opcional)"),n()(),t(2916,"p"),e(2917,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),n()()(),t(2918,"tr",17)(2919,"td",18)(2920,"div",19)(2921,"span",20),e(2922," noItem"),i(2923,"br"),n()()(),t(2924,"td",21)(2925,"code",31),e(2926,"string"),n()(),t(2927,"td",24)(2928,"em")(2929,"strong"),e(2930,"(opcional)"),n()(),t(2931,"p"),e(2932,"Texto exibido quando nenhum item for selecionado no checkbox."),n()()(),t(2933,"tr",17)(2934,"td",18)(2935,"div",19)(2936,"span",20),e(2937," noVisibleColumn"),i(2938,"br"),n()()(),t(2939,"td",21)(2940,"code",31),e(2941,"string"),n()(),t(2942,"td",24)(2943,"em")(2944,"strong"),e(2945,"(opcional)"),n()(),t(2946,"p"),e(2947,"Texto exibido quando n\xE3o existem colunas vis\xEDveis para a tabela."),n()()(),t(2948,"tr",17)(2949,"td",18)(2950,"div",19)(2951,"span",20),e(2952," oneItem"),i(2953,"br"),n()()(),t(2954,"td",21)(2955,"code",31),e(2956,"string"),n()(),t(2957,"td",24)(2958,"em")(2959,"strong"),e(2960,"(opcional)"),n()(),t(2961,"p"),e(2962,"Texto exibido quando apenas 1 item for selecionado no checkbox."),n()()(),t(2963,"tr",17)(2964,"td",18)(2965,"div",19)(2966,"span",20),e(2967," seeCompleteSubtitle"),i(2968,"br"),n()()(),t(2969,"td",21)(2970,"code",31),e(2971,"string"),n()(),t(2972,"td",24)(2973,"em")(2974,"strong"),e(2975,"(opcional)"),n()(),t(2976,"p"),e(2977,"Texto do bot\xE3o "),t(2978,"strong"),e(2979,"Ver legenda completa"),n(),e(2980," que aparece quando o rodap\xE9 de legendas \xE9 maior que a tabela."),n()()()(),t(2981,"h4",44)(2982,"code",5),e(2983,"PoTableColumnIcon"),n()(),t(2984,"div",2)(2985,"p"),i(2986,"a",68),n(),t(2987,"p"),e(2988,"Interface que define a coluna com \xEDcone(s) do "),t(2989,"code"),e(2990,"po-table"),n(),e(2991,"."),n()(),t(2992,"h4",13),e(2993,"Propriedades"),n(),t(2994,"table",14)(2995,"tr",15)(2996,"th",16),e(2997,"Nome"),n(),t(2998,"th",16),e(2999,"Tipo"),n(),t(3e3,"th",16),e(3001,"Descri\xE7\xE3o"),n()(),t(3002,"tr",17)(3003,"td",18)(3004,"div",19)(3005,"span",20),e(3006," action"),i(3007,"br"),n()()(),t(3008,"td",21)(3009,"code",45),e(3010,"Function"),n()(),t(3011,"td",24)(3012,"em")(3013,"strong"),e(3014,"(opcional)"),n()(),t(3015,"p"),e(3016,"Define a a\xE7\xE3o que ser\xE1 executada ao clicar no \xEDcone."),n()()(),t(3017,"tr",17)(3018,"td",18)(3019,"div",19)(3020,"span",20),e(3021," color"),i(3022,"br"),n()()(),t(3023,"td",21)(3024,"code",31),e(3025,"string "),n(),t(3026,"code",45),e(3027," Function"),n()(),t(3028,"td",24)(3029,"em")(3030,"strong"),e(3031,"(opcional)"),n()(),t(3032,"p"),e(3033,"Define a cor do \xEDcone."),n(),t(3034,"p"),e(3035,"Valores v\xE1lidos:"),n(),t(3036,"ul")(3037,"li"),i(3038,"span",50),t(3039,"code"),e(3040,"color-01"),n()(),t(3041,"li"),i(3042,"span",51),t(3043,"code"),e(3044,"color-02"),n()(),t(3045,"li"),i(3046,"span",52),t(3047,"code"),e(3048,"color-03"),n()(),t(3049,"li"),i(3050,"span",53),t(3051,"code"),e(3052,"color-04"),n()(),t(3053,"li"),i(3054,"span",54),t(3055,"code"),e(3056,"color-05"),n()(),t(3057,"li"),i(3058,"span",55),t(3059,"code"),e(3060,"color-06"),n()(),t(3061,"li"),i(3062,"span",56),t(3063,"code"),e(3064,"color-07"),n()(),t(3065,"li"),i(3066,"span",57),t(3067,"code"),e(3068,"color-08"),n()(),t(3069,"li"),i(3070,"span",58),t(3071,"code"),e(3072,"color-09"),n()(),t(3073,"li"),i(3074,"span",59),t(3075,"code"),e(3076,"color-10"),n()(),t(3077,"li"),i(3078,"span",60),t(3079,"code"),e(3080,"color-11"),n()(),t(3081,"li"),i(3082,"span",61),t(3083,"code"),e(3084,"color-12"),n()()()()(),t(3085,"tr",17)(3086,"td",18)(3087,"div",19)(3088,"span",20),e(3089," disabled"),i(3090,"br"),n()()(),t(3091,"td",21)(3092,"code",45),e(3093,"Function"),n()(),t(3094,"td",24)(3095,"em")(3096,"strong"),e(3097,"(opcional)"),n()(),t(3098,"p"),e(3099,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o \xEDcone e sua a\xE7\xE3o."),n()()(),t(3100,"tr",17)(3101,"td",18)(3102,"div",19)(3103,"span",20),e(3104," icon"),i(3105,"br"),n()()(),t(3106,"td",21)(3107,"code",31),e(3108,"string "),n(),t(3109,"code",46),e(3110," TemplateRef<void>"),n()(),t(3111,"td",24)(3112,"em")(3113,"strong"),e(3114,"(opcional)"),n()(),t(3115,"p"),e(3116,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(3117,"a",26),e(3118,"Biblioteca de \xEDcones"),n(),e(3119,". conforme exemplo abaixo:"),n(),t(3120,"pre")(3121,"code"),e(3122,`[ { icon: 'an an-plus' } ]
`),n()(),t(3123,"p"),e(3124,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),n(),t(3125,"pre")(3126,"code"),e(3127,`[ {  icon: 'fas fa-plus' } ]
`),n()(),t(3128,"p"),e(3129,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(3130,"code"),e(3131,"TemplateRef"),n(),e(3132,`, conforme exemplo abaixo:
`),t(3133,"code"),e(3134,"component.html"),n(),e(3135,":"),n(),t(3136,"pre")(3137,"code"),e(3138,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),n()(),t(3139,"p")(3140,"code"),e(3141,"component.ts"),n(),e(3142,":"),n(),t(3143,"pre")(3144,"code"),e(3145,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),n()(),t(3146,"blockquote")(3147,"p"),e(3148,"Caso esta propriedade n\xE3o seja definida, a mesma receber\xE1 o valor contido em "),t(3149,"code"),e(3150,"value"),n(),e(3151,"."),n()()()(),t(3152,"tr",17)(3153,"td",18)(3154,"div",19)(3155,"span",20),e(3156," tooltip"),i(3157,"br"),n()()(),t(3158,"td",21)(3159,"code",31),e(3160,"string"),n()(),t(3161,"td",24)(3162,"em")(3163,"strong"),e(3164,"(opcional)"),n()(),t(3165,"p"),e(3166,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(3167,"em"),e(3168,"mouse"),n(),e(3169," em cima do \xEDcone."),n()()(),t(3170,"tr",17)(3171,"td",18)(3172,"div",19)(3173,"span",20),e(3174," value"),i(3175,"br"),n()()(),t(3176,"td",21)(3177,"code",31),e(3178,"string"),n()(),t(3179,"td",24)(3180,"p"),e(3181,"Define o valor do \xEDcone que ser\xE1 exibido."),n()()()(),t(3182,"h4",44)(3183,"code",5),e(3184,"PoTableColumnLabel"),n()(),t(3185,"div",2)(3186,"p"),e(3187,"Interface para configura\xE7\xE3o das colunas de labels do "),t(3188,"code"),e(3189,"po-table"),n(),e(3190,"."),n()(),t(3191,"h4",13),e(3192,"Propriedades"),n(),t(3193,"table",14)(3194,"tr",15)(3195,"th",16),e(3196,"Nome"),n(),t(3197,"th",16),e(3198,"Tipo"),n(),t(3199,"th",16),e(3200,"Descri\xE7\xE3o"),n()(),t(3201,"tr",17)(3202,"td",18)(3203,"div",19)(3204,"span",20),e(3205," color"),i(3206,"br"),n()()(),t(3207,"td",21)(3208,"code",31),e(3209,"string"),n()(),t(3210,"td",24)(3211,"em")(3212,"strong"),e(3213,"(opcional)"),n()(),t(3214,"p"),e(3215,"Define a cor do label."),n(),t(3216,"p"),e(3217,"Valores v\xE1lidos:"),n(),t(3218,"ul")(3219,"li"),i(3220,"span",50),t(3221,"code"),e(3222,"color-01"),n()(),t(3223,"li"),i(3224,"span",51),t(3225,"code"),e(3226,"color-02"),n()(),t(3227,"li"),i(3228,"span",52),t(3229,"code"),e(3230,"color-03"),n()(),t(3231,"li"),i(3232,"span",53),t(3233,"code"),e(3234,"color-04"),n()(),t(3235,"li"),i(3236,"span",54),t(3237,"code"),e(3238,"color-05"),n()(),t(3239,"li"),i(3240,"span",55),t(3241,"code"),e(3242,"color-06"),n()(),t(3243,"li"),i(3244,"span",56),t(3245,"code"),e(3246,"color-07"),n()(),t(3247,"li"),i(3248,"span",57),t(3249,"code"),e(3250,"color-08"),n()(),t(3251,"li"),i(3252,"span",58),t(3253,"code"),e(3254,"color-09"),n()(),t(3255,"li"),i(3256,"span",59),t(3257,"code"),e(3258,"color-10"),n()(),t(3259,"li"),i(3260,"span",60),t(3261,"code"),e(3262,"color-11"),n()(),t(3263,"li"),i(3264,"span",61),t(3265,"code"),e(3266,"color-12"),n()()()()(),t(3267,"tr",17)(3268,"td",18)(3269,"div",19)(3270,"span",20),e(3271," icon"),i(3272,"br"),n()()(),t(3273,"td",21)(3274,"code",22),e(3275,"boolean "),n(),t(3276,"code",31),e(3277," string "),n(),t(3278,"code",46),e(3279," TemplateRef<void>"),n()(),t(3280,"td",24)(3281,"em")(3282,"strong"),e(3283,"(opcional)"),n()(),t(3284,"p"),e(3285,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),t(3286,"em"),e(3287,"tag"),n(),e(3288,"."),n(),t(3289,"p"),e(3290,"Quando "),t(3291,"code"),e(3292,"p-type"),n(),e(3293," estiver definida, basta informar um valor igual a "),t(3294,"code"),e(3295,"true"),n(),e(3296," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),n(),t(3297,"ul")(3298,"li"),i(3299,"span",69),e(3300," - "),t(3301,"code"),e(3302,"success"),n()(),t(3303,"li"),i(3304,"span",70),e(3305," - "),t(3306,"code"),e(3307,"warning"),n()(),t(3308,"li"),i(3309,"span",71),e(3310," - "),t(3311,"code"),e(3312,"danger"),n()(),t(3313,"li"),i(3314,"span",72),e(3315," - "),t(3316,"code"),e(3317,"info"),n()()(),t(3318,"p"),e(3319,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(3320,"a",26),e(3321,"Biblioteca de \xEDcones"),n(),e(3322,". conforme exemplo abaixo:"),n(),t(3323,"pre")(3324,"code"),e(3325,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),n()(),t(3326,"p"),e(3327,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),t(3328,"em"),e(3329,"Font Awesome"),n(),e(3330,", da seguinte forma:"),n(),t(3331,"pre")(3332,"code"),e(3333,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),n()(),t(3334,"p"),e(3335,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(3336,"code"),e(3337,"TemplateRef"),n(),e(3338,", conforme exemplo abaixo:"),n(),t(3339,"pre")(3340,"code"),e(3341,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),n()(),t(3342,"blockquote")(3343,"p"),e(3344,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),t(3345,"code"),e(3346,"font-size: inherit"),n(),e(3347," caso o \xEDcone utilizado n\xE3o aplique-o."),n()()()(),t(3348,"tr",17)(3349,"td",18)(3350,"div",19)(3351,"span",20),e(3352," label"),i(3353,"br"),n()()(),t(3354,"td",21)(3355,"code",31),e(3356,"string"),n()(),t(3357,"td",24)(3358,"p"),e(3359,"Texto que ser\xE1 exibido na coluna."),n()()(),t(3360,"tr",17)(3361,"td",18)(3362,"div",19)(3363,"span",20),e(3364," textColor"),i(3365,"br"),n()()(),t(3366,"td",21)(3367,"code",31),e(3368,"string"),n()(),t(3369,"td",24)(3370,"em")(3371,"strong"),e(3372,"(opcional)"),n()(),t(3373,"p"),e(3374,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),n(),t(3375,"ul")(3376,"li")(3377,"p"),e(3378,"Hexadeximal, por exemplo "),t(3379,"code"),e(3380,"#c64840"),n(),e(3381,";"),n()(),t(3382,"li")(3383,"p"),e(3384,"RGB, como "),t(3385,"code"),e(3386,"rgb(0, 0, 165)"),n(),e(3387,";"),n()(),t(3388,"li")(3389,"p"),e(3390,"O nome da cor, por exemplo "),t(3391,"code"),e(3392,"blue"),n(),e(3393,";"),n()(),t(3394,"li")(3395,"p"),e(3396,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),n(),t(3397,"ul")(3398,"li"),i(3399,"span",50),t(3400,"code"),e(3401,"color-01"),n()(),t(3402,"li"),i(3403,"span",51),t(3404,"code"),e(3405,"color-02"),n()(),t(3406,"li"),i(3407,"span",52),t(3408,"code"),e(3409,"color-03"),n()(),t(3410,"li"),i(3411,"span",53),t(3412,"code"),e(3413,"color-04"),n()(),t(3414,"li"),i(3415,"span",54),t(3416,"code"),e(3417,"color-05"),n()(),t(3418,"li"),i(3419,"span",55),t(3420,"code"),e(3421,"color-06"),n()(),t(3422,"li"),i(3423,"span",56),t(3424,"code"),e(3425,"color-07"),n()(),t(3426,"li"),i(3427,"span",57),t(3428,"code"),e(3429,"color-08"),n()(),t(3430,"li"),i(3431,"span",58),t(3432,"code"),e(3433,"color-09"),n()(),t(3434,"li"),i(3435,"span",59),t(3436,"code"),e(3437,"color-10"),n()(),t(3438,"li"),i(3439,"span",60),t(3440,"code"),e(3441,"color-11"),n()(),t(3442,"li"),i(3443,"span",61),t(3444,"code"),e(3445,"color-12"),n()()()(),t(3446,"li")(3447,"p"),e(3448,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),n()()(),t(3449,"blockquote")(3450,"p")(3451,"strong"),e(3452,"Aten\xE7\xE3o:"),n(),e(3453," A propriedade "),t(3454,"code"),e(3455,"p-type"),n(),e(3456," sobrep\xF5e esta defini\xE7\xE3o."),n()()()(),t(3457,"tr",17)(3458,"td",18)(3459,"div",19)(3460,"span",20),e(3461," tooltip"),i(3462,"br"),n()()(),t(3463,"td",21)(3464,"code",31),e(3465,"string"),n()(),t(3466,"td",24)(3467,"em")(3468,"strong"),e(3469,"(opcional)"),n()(),t(3470,"p"),e(3471,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(3472,"em"),e(3473,"mouse"),n(),e(3474," em cima do "),t(3475,"em"),e(3476,"label"),n(),e(3477,"."),n(),t(3478,"blockquote")(3479,"p"),e(3480,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),n()()()(),t(3481,"tr",17)(3482,"td",18)(3483,"div",19)(3484,"span",20),e(3485," type"),i(3486,"br"),n()()(),t(3487,"td",21)(3488,"code",73),e(3489,"PoTagType"),n()(),t(3490,"td",24)(3491,"em")(3492,"strong"),e(3493,"(opcional)"),n()(),t(3494,"p"),e(3495,"Define o tipo da "),t(3496,"em"),e(3497,"tag"),n(),e(3498,"."),n(),t(3499,"p"),e(3500,"Valores v\xE1lidos:"),n(),t(3501,"ul")(3502,"li")(3503,"code"),e(3504,"success"),n(),e(3505,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),n(),t(3506,"li")(3507,"code"),e(3508,"warning"),n(),e(3509,": cor amarela que representa aviso ou advert\xEAncia."),n(),t(3510,"li")(3511,"code"),e(3512,"danger"),n(),e(3513,": cor vermelha para erro ou aviso cr\xEDtico."),n(),t(3514,"li")(3515,"code"),e(3516,"info"),n(),e(3517,": cor cinza escuro que caracteriza conte\xFAdo informativo."),n()(),t(3518,"blockquote")(3519,"p"),e(3520,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),t(3521,"code"),e(3522,"p-color"),n(),e(3523," e "),t(3524,"code"),e(3525,"p-icon"),n(),e(3526," somente ser\xE1 exibido caso seja "),t(3527,"code"),e(3528,"true"),n(),e(3529,"."),n()()()(),t(3530,"tr",17)(3531,"td",18)(3532,"div",19)(3533,"span",20),e(3534," value"),i(3535,"br"),n()()(),t(3536,"td",21)(3537,"code",31),e(3538,"string "),n(),t(3539,"code",35),e(3540," number"),n()(),t(3541,"td",24)(3542,"p"),e(3543,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),n()()()(),t(3544,"h4",44)(3545,"code",5),e(3546,"PoTableDetailColumn"),n()(),t(3547,"div",2)(3548,"p"),e(3549,"Interface para configura\xE7\xE3o das colunas do "),t(3550,"code"),e(3551,"po-table-detail"),n(),e(3552,"."),n()(),t(3553,"h4",13),e(3554,"Propriedades"),n(),t(3555,"table",14)(3556,"tr",15)(3557,"th",16),e(3558,"Nome"),n(),t(3559,"th",16),e(3560,"Tipo"),n(),t(3561,"th",16),e(3562,"Descri\xE7\xE3o"),n()(),t(3563,"tr",17)(3564,"td",18)(3565,"div",19)(3566,"span",20),e(3567," format"),i(3568,"br"),n()()(),t(3569,"td",21)(3570,"code",31),e(3571,"string"),n()(),t(3572,"td",24)(3573,"em")(3574,"strong"),e(3575,"(opcional)"),n()(),t(3576,"p"),e(3577,"Formato de exibi\xE7\xE3o do valor da coluna:"),n(),t(3578,"ul")(3579,"li")(3580,"p"),e(3581,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),n()(),t(3582,"li")(3583,"p"),e(3584,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),n()(),t(3585,"li")(3586,"p"),e(3587,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),n()(),t(3588,"li")(3589,"p"),e(3590,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),t(3591,"a",63)(3592,"strong"),e(3593,"DecimalPipe"),n()(),e(3594," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:"),n(),t(3595,"ul")(3596,"li"),e(3597,"Valor de entrada: "),t(3598,"code"),e(3599,"50"),n(),e(3600," e valor para formata\xE7\xE3o: "),t(3601,"code"),e(3602,"'1.2-5'"),n(),e(3603," o resultado ser\xE1: "),t(3604,"code"),e(3605,"50.00"),n()()()()()()(),t(3606,"tr",17)(3607,"td",18)(3608,"div",19)(3609,"span",20),e(3610," label"),i(3611,"br"),n()()(),t(3612,"td",21)(3613,"code",31),e(3614,"string"),n()(),t(3615,"td",24)(3616,"em")(3617,"strong"),e(3618,"(opcional)"),n()(),t(3619,"p"),e(3620,"Texto para t\xEDtulo da coluna."),n()()(),t(3621,"tr",17)(3622,"td",18)(3623,"div",19)(3624,"span",20),e(3625," property"),i(3626,"br"),n()()(),t(3627,"td",21)(3628,"code",31),e(3629,"string"),n()(),t(3630,"td",24)(3631,"em")(3632,"strong"),e(3633,"(opcional)"),n()(),t(3634,"p"),e(3635,"Nome identificador da coluna."),n()()(),t(3636,"tr",17)(3637,"td",18)(3638,"div",19)(3639,"span",20),e(3640," type"),i(3641,"br"),n()()(),t(3642,"td",21)(3643,"code",31),e(3644,"string"),n()(),t(3645,"td",24)(3646,"em")(3647,"strong"),e(3648,"(opcional)"),n()(),t(3649,"p"),e(3650,"Tipo da coluna."),n(),t(3651,"p"),e(3652,"Valores v\xE1lidos:"),n(),t(3653,"ul")(3654,"li")(3655,"p")(3656,"code"),e(3657,"currency"),n(),e(3658,": valores monet\xE1rios."),n()(),t(3659,"li")(3660,"p")(3661,"code"),e(3662,"date"),n(),e(3663,": valor de datas."),n(),t(3664,"ul")(3665,"li"),e(3666,"Aceita os tipos "),t(3667,"em"),e(3668,"string"),n(),e(3669," e "),t(3670,"em"),e(3671,"Date"),n(),e(3672,` padr\xE3o do Javascript,
por exemplo: `),t(3673,"code"),e(3674,"'2017-11-28'"),n(),e(3675," ou "),t(3676,"code"),e(3677,"new Date(2017, 10, 28)"),n(),e(3678,"."),n()()(),t(3679,"li")(3680,"p")(3681,"code"),e(3682,"time"),n(),e(3683,": valor de hor\xE1rio."),n()(),t(3684,"li")(3685,"p")(3686,"code"),e(3687,"number"),n(),e(3688,": valores num\xE9ricos."),n()(),t(3689,"li")(3690,"p")(3691,"code"),e(3692,"dateTime"),n(),e(3693,": valor de data com hor\xE1rio."),n(),t(3694,"ul")(3695,"li"),e(3696,"Aceita o tipo "),t(3697,"em"),e(3698,"string"),n(),e(3699," no formato "),t(3700,"strong"),e(3701,"ISO-8601"),n(),e(3702," extendido "),t(3703,"strong"),e(3704,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),n(),e(3705,`
e o tipo `),t(3706,"em"),e(3707,"Date"),n(),e(3708," padr\xE3o do Javascript, por exemplo: "),t(3709,"code"),e(3710,"'2017-11-28T00:00:00-02:00'"),n(),e(3711," ou "),t(3712,"code"),e(3713,"new Date(2017, 10, 28)"),n(),e(3714,"."),n(),t(3715,"li"),e(3716,"Aceita o tipo "),t(3717,"em"),e(3718,"string"),n(),e(3719," nos formatos "),t(3720,"strong"),e(3721,"'HH:mm:ss'"),n(),e(3722," ou "),t(3723,"strong"),e(3724,"'HH:mm:ss.ffffff'"),n(),e(3725,", por exemplo: "),t(3726,"code"),e(3727,"'23:12:45'"),n(),e(3728,"."),n()()()()()()(),t(3729,"h4",44)(3730,"code",5),e(3731,"PoTableDetail"),n()(),t(3732,"div",2)(3733,"p"),e(3734,"Interface para configura\xE7\xE3o do "),t(3735,"em"),e(3736,"detail"),n(),e(3737," do componente "),t(3738,"code"),e(3739,"po-table"),n(),e(3740,"."),n()(),t(3741,"h4",13),e(3742,"Propriedades"),n(),t(3743,"table",14)(3744,"tr",15)(3745,"th",16),e(3746,"Nome"),n(),t(3747,"th",16),e(3748,"Tipo"),n(),t(3749,"th",16),e(3750,"Descri\xE7\xE3o"),n()(),t(3751,"tr",17)(3752,"td",18)(3753,"div",19)(3754,"span",20),e(3755," columns"),i(3756,"br"),n()()(),t(3757,"td",21)(3758,"code",74),e(3759,"Array<PoTableDetailColumn>"),n()(),t(3760,"td",24)(3761,"p"),e(3762,"Define uma lista do tipo "),t(3763,"code"),e(3764,"PoTableDetailColumn"),n(),e(3765," para as colunas do objet "),t(3766,"em"),e(3767,"detail"),n(),e(3768,". Por exemplo:"),n(),t(3769,"pre")(3770,"code"),e(3771,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),n()()()(),t(3772,"tr",17)(3773,"td",18)(3774,"div",19)(3775,"span",20),e(3776," hideSelect"),i(3777,"br"),n()()(),t(3778,"td",21)(3779,"code",22),e(3780,"boolean"),n()(),t(3781,"td",24)(3782,"em")(3783,"strong"),e(3784,"(opcional)"),n()(),t(3785,"p"),e(3786,"Define se o checkbox de sele\xE7\xE3o do detail ser\xE1 exibido. Valor padr\xE3o 'false'."),n()()(),t(3787,"tr",17)(3788,"td",18)(3789,"div",19)(3790,"span",20),e(3791," typeHeader"),i(3792,"br"),n()()(),t(3793,"td",21)(3794,"code",31),e(3795,"string"),n()(),t(3796,"td",24)(3797,"em")(3798,"strong"),e(3799,"(opcional)"),n()(),t(3800,"p"),e(3801,"Define o tipo de cabe\xE7alho para o conte\xFAdo do "),t(3802,"em"),e(3803,"detail"),n(),e(3804," ."),n(),t(3805,"p"),e(3806,"Valores v\xE1lidos:"),n(),t(3807,"ul")(3808,"li")(3809,"code"),e(3810,"inline"),n(),e(3811,": Atribui o cabe\xE7alho na mesma linha do "),t(3812,"em"),e(3813,"detail"),n(),e(3814,"."),n(),t(3815,"li")(3816,"code"),e(3817,"top"),n(),e(3818,": Atribui o cabe\xE7alho acima do "),t(3819,"em"),e(3820,"detail"),n(),e(3821,", id\xEAntico ao "),t(3822,"code"),e(3823,"po-table"),n(),e(3824,"."),n(),t(3825,"li")(3826,"code"),e(3827,"none"),n(),e(3828,": Remove o cabe\xE7alho do "),t(3829,"em"),e(3830,"detail"),n(),e(3831,"."),n()()()()(),t(3832,"h4",44)(3833,"code",5),e(3834,"PoTableSubtitleColumn"),n()(),t(3835,"div",2)(3836,"p"),e(3837,"Interface para configura\xE7\xE3o das colunas de legenda do Po-Table."),n()(),t(3838,"h4",13),e(3839,"Propriedades"),n(),t(3840,"table",14)(3841,"tr",15)(3842,"th",16),e(3843,"Nome"),n(),t(3844,"th",16),e(3845,"Tipo"),n(),t(3846,"th",16),e(3847,"Descri\xE7\xE3o"),n()(),t(3848,"tr",17)(3849,"td",18)(3850,"div",19)(3851,"span",20),e(3852," color"),i(3853,"br"),n()()(),t(3854,"td",21)(3855,"code",31),e(3856,"string"),n()(),t(3857,"td",24)(3858,"em")(3859,"strong"),e(3860,"(opcional)"),n()(),t(3861,"p"),e(3862,"Define a cor do "),t(3863,"em"),e(3864,"status"),n(),e(3865,"."),n(),t(3866,"p"),e(3867,"Valores v\xE1lidos:"),n(),t(3868,"ul")(3869,"li"),i(3870,"span",50),t(3871,"code"),e(3872,"color-01"),n()(),t(3873,"li"),i(3874,"span",51),t(3875,"code"),e(3876,"color-02"),n()(),t(3877,"li"),i(3878,"span",52),t(3879,"code"),e(3880,"color-03"),n()(),t(3881,"li"),i(3882,"span",53),t(3883,"code"),e(3884,"color-04"),n()(),t(3885,"li"),i(3886,"span",54),t(3887,"code"),e(3888,"color-05"),n()(),t(3889,"li"),i(3890,"span",55),t(3891,"code"),e(3892,"color-06"),n()(),t(3893,"li"),i(3894,"span",56),t(3895,"code"),e(3896,"color-07"),n()(),t(3897,"li"),i(3898,"span",57),t(3899,"code"),e(3900,"color-08"),n()(),t(3901,"li"),i(3902,"span",58),t(3903,"code"),e(3904,"color-09"),n()(),t(3905,"li"),i(3906,"span",59),t(3907,"code"),e(3908,"color-10"),n()(),t(3909,"li"),i(3910,"span",60),t(3911,"code"),e(3912,"color-11"),n()(),t(3913,"li"),i(3914,"span",61),t(3915,"code"),e(3916,"color-12"),n()()()()(),t(3917,"tr",17)(3918,"td",18)(3919,"div",19)(3920,"span",20),e(3921," content"),i(3922,"br"),n()()(),t(3923,"td",21)(3924,"code",31),e(3925,"string"),n()(),t(3926,"td",24)(3927,"p"),e(3928,"Conte\xFAdo que ser\xE1 exibido na coluna da tabela."),n()()(),t(3929,"tr",17)(3930,"td",18)(3931,"div",19)(3932,"span",20),e(3933," label"),i(3934,"br"),n()()(),t(3935,"td",21)(3936,"code",31),e(3937,"string"),n()(),t(3938,"td",24)(3939,"p"),e(3940,"Texto que ser\xE1 exibido no rodap\xE9 da tabela como legenda."),n()()(),t(3941,"tr",17)(3942,"td",18)(3943,"div",19)(3944,"span",20),e(3945," value"),i(3946,"br"),n()()(),t(3947,"td",21)(3948,"code",31),e(3949,"string "),n(),t(3950,"code",35),e(3951," number"),n()(),t(3952,"td",24)(3953,"p"),e(3954,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),n()()()(),t(3955,"h3"),e(3956,"Enums"),n(),t(3957,"h4",4)(3958,"code",5),e(3959,"PoTableColumnSortType"),n()(),t(3960,"div",2)(3961,"p"),e(3962,"Tipos de ordena\xE7\xE3o das colunas da tabela."),n()(),t(3963,"h4",13),e(3964,"Propriedades"),n(),t(3965,"table",14)(3966,"tr",15)(3967,"th",16),e(3968,"Nome"),n(),t(3969,"th",16),e(3970,"Descri\xE7\xE3o"),n()(),t(3971,"tr",17)(3972,"td",18)(3973,"div",19)(3974,"span",20),e(3975," Ascending"),i(3976,"br"),n()()(),t(3977,"td",24)(3978,"p"),e(3979,"Ordena\xE7\xE3o ascendente"),n()()(),t(3980,"tr",17)(3981,"td",18)(3982,"div",19)(3983,"span",20),e(3984," Descending"),i(3985,"br"),n()()(),t(3986,"td",24)(3987,"p"),e(3988,"Ordena\xE7\xE3o descendente"),n()()()(),t(3989,"h4",4)(3990,"code",5),e(3991,"PoTableColumnSpacing"),n()(),t(3992,"div",2)(3993,"p"),e(3994,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),t(3995,"strong"),e(3996,"p-spacing"),n(),e(3997,") do po-table."),n()(),t(3998,"h4",13),e(3999,"Propriedades"),n(),t(4e3,"table",14)(4001,"tr",15)(4002,"th",16),e(4003,"Nome"),n(),t(4004,"th",16),e(4005,"Descri\xE7\xE3o"),n()(),t(4006,"tr",17)(4007,"td",18)(4008,"div",19)(4009,"span",20),e(4010," ExtraSmall"),i(4011,"br"),n()()(),t(4012,"td",24)(4013,"p"),e(4014,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 1rem (horizontal)."),n()()(),t(4015,"tr",17)(4016,"td",18)(4017,"div",19)(4018,"span",20),e(4019," Small"),i(4020,"br"),n()()(),t(4021,"td",24)(4022,"p"),e(4023,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),n()()(),t(4024,"tr",17)(4025,"td",18)(4026,"div",19)(4027,"span",20),e(4028," Medium"),i(4029,"br"),n()()(),t(4030,"td",24)(4031,"p"),e(4032,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),n()()(),t(4033,"tr",17)(4034,"td",18)(4035,"div",19)(4036,"span",20),e(4037," Large"),i(4038,"br"),n()()(),t(4039,"td",24)(4040,"p"),e(4041,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),n()()()()())},dependencies:[P],encapsulation:2})}return r})();var st=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||r)(w(Me),w(ie))};static \u0275cmp=S({type:r,selectors:[["ng-component"]],standalone:!1,decls:13,vars:4,consts:[["p-title","Table",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return o.changeTab("doc")}),i(3,"sample-po-table-doc"),n(),t(4,"po-tab",3),E("p-click",function(){return o.changeTab("web")}),i(5,"sample-po-table-basic-view")(6,"sample-po-table-labs-view")(7,"sample-po-table-with-api-view")(8,"sample-po-table-transport-view")(9,"sample-po-table-airfare-view")(10,"sample-po-table-components-view")(11,"sample-po-table-heroes-view")(12,"sample-po-table-draggable-view"),n()()()),l&2&&(c("p-actions",o.actions),s(2),c("p-active",o.activeTab==="doc"),s(2),c("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[ze,C,T,Qe,$e,Ke,Ze,tt,it,at,rt,mt],encapsulation:2})}return r})();var Yt=[{path:"",component:st}],dt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=Z({type:r});static \u0275inj=Y({imports:[ce.forChild(Yt),ce]})}return r})();var oi=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=Z({type:r});static \u0275inj=Y({imports:[We,dt]})}return r})();export{oi as DocPoTableModule};
