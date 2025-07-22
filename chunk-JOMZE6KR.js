import{o as L,p as Ee}from"./chunk-JYNCG2Y6.js";import{$ as W,Aa as se,Ab as T,Db as he,F as ae,Ga as pe,K as Y,La as me,Ra as ce,Wa as ue,a as oe,aa as x,ba as D,ca as F,ha as re,ja as le,nb as ge,ta as de,zb as w}from"./chunk-HBOGTDFH.js";import{$a as E,Ac as te,Ba as M,Ea as t,Fa as n,Ga as a,Ka as O,La as h,M as z,Ma as _,Nc as ne,Pc as ie,Rc as j,T as m,U as c,Xa as e,Za as V,a as C,ab as b,b as v,bb as S,cb as U,db as G,eb as y,fb as J,ha as p,ia as q,oa as f,pa as Z,ua as H,ub as k,wb as X,wc as Q,xc as K,ya as g,yc as $,zc as ee}from"./chunk-MIQUIDUB.js";var De=()=>({label:"Angular",data:100}),Ae=()=>({label:"React",data:10}),Ge=(r,R)=>[r,R],be=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-basic"]],standalone:!1,decls:1,vars:6,consts:[[3,"p-series"]],template:function(s,i){s&1&&a(0,"po-chart",0),s&2&&g("p-series",J(3,Ge,G(1,De),G(2,Ae)))},dependencies:[D],encapsulation:2})}return r})();var Re=r=>({"docs-sample-code-tabs":r}),Se=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(s,i){s&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Chart Basic"),n(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-basic/sample-po-chart-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-chart
  [p-series]="[
    { label: 'Angular', data: 100 },
    { label: 'React', data: 10 }
  ]"
>
</po-chart>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-basic/sample-po-chart-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-chart-basic"),n(),a(23,"hr")),s&2&&(p(5),M("po-icon "+i.sampleCodeButtonIcon),p(),V(" ",i.sampleCodeButtonLabel,""),p(),g("ngClass",y(4,Re,i.hideSampleCodeTabs)))},dependencies:[k,L,w,T,be],encapsulation:2})}return r})();var We=()=>({value:"fillPoints",label:"fillPoints"}),B=r=>[r],Fe=()=>({label:"legend",value:"legend"}),Ne=()=>({label:"roseType",value:"roseType"}),Ie=()=>({label:"showFromToLegend",value:"showFromToLegend"}),qe=()=>({label:"pointer",value:"pointer"}),He=()=>({label:"stacked",value:"stacked"}),ze=()=>({value:"fixed",label:"Fixed"});function Ze(r,R){if(r&1){let d=O();t(0,"po-checkbox-group",52),S("ngModelChange",function(i){m(d);let l=_();return b(l.selectedValuesDataLabel,i)||(l.selectedValuesDataLabel=i),c(i)}),h("p-change",function(){m(d);let i=_();return c(i.changeDataLabelOptions())}),n()}if(r&2){let d=_();g("p-options",y(3,B,G(2,ze))),E("ngModel",d.selectedValuesDataLabel)}}function Ye(r,R){if(r&1){let d=O();t(0,"po-number",53),S("ngModelChange",function(i){m(d);let l=_();return b(l.valueGauge,i)||(l.valueGauge=i),c(i)}),h("p-change",function(i){m(d);let l=_();return c(l.changeValueGauge(i))}),n()}if(r&2){let d=_();E("ngModel",d.valueGauge)}}function je(r,R){if(r&1){let d=O();t(0,"po-input",54),S("ngModelChange",function(i){m(d);let l=_();return b(l.data,i)||(l.data=i),c(i)}),n()}if(r&2){let d=_();E("ngModel",d.data)}}function Ue(r,R){if(r&1){let d=O();t(0,"po-input",55),S("ngModelChange",function(i){m(d);let l=_();return b(l.stackGroupName,i)||(l.stackGroupName=i),c(i)}),n()}if(r&2){let d=_();E("ngModel",d.stackGroupName)}}function Je(r,R){if(r&1){let d=O();t(0,"po-number",56),S("ngModelChange",function(i){m(d);let l=_();return b(l.fromGauge,i)||(l.fromGauge=i),c(i)}),n()}if(r&2){let d=_();E("ngModel",d.fromGauge)}}function Xe(r,R){if(r&1){let d=O();t(0,"po-number",57),S("ngModelChange",function(i){m(d);let l=_();return b(l.toGauge,i)||(l.toGauge=i),c(i)}),n()}if(r&2){let d=_();E("ngModel",d.toGauge)}}var xe=(()=>{class r{color;stackGroupName;data;label;tooltip;type;serieType;valueGauge;fromGauge;toGauge;allCategories=[];categories;event;height;series;title;dataLabel;isTypeGauge=!1;disabledTooltip=!1;disabledType=!1;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0};selectedValuesDataLabel=[];selectedValuesAxis=[];selectedValuesHeader=[];selectedValuesDataZoom=[];selectedValuesFillPoints=[];selectedRoseType=[];selectedFromToLegend=[];selectedPointer=[];selectedStacked=[];selectedValuesLegend=["legend"];selectedLegendVerticalPosition="bottom";selectedLegendPosition="center";selectedRendererOption="canvas";optionsAxis=[{value:"showXAxis",label:"showXAxis"},{value:"showYAxis",label:"showYAxis"},{value:"showAxisDetails",label:"showAxisDetails"}];optionsHeader=[{value:"hideTableDetails",label:"hideTableDetails"},{value:"hideExpand",label:"hideExpand"},{value:"hideExportCsv",label:"hideExportCsv"},{value:"hideExportImage",label:"hideExportImage"}];optionsDataZoom=[{value:"dataZoom",label:"dataZoom"},{value:"bottomDataZoom",label:"bottomDataZoom"}];optionsLegendVerticalPosition=[{value:"top",label:"top"},{value:"bottom",label:"bottom"}];optionsLegendPosition=[{value:"left",label:"left"},{value:"center",label:"center"},{value:"right",label:"right"}];optionsRendererOption=[{value:"canvas",label:"canvas"},{value:"svg",label:"svg"}];typeOptions=[{label:"Line",value:x.Line},{label:"Area",value:x.Area},{label:"Bar",value:x.Bar},{label:"Column",value:x.Column},{label:"Donut",value:x.Donut},{label:"Pie",value:x.Pie},{label:"Gauge",value:x.Gauge}];labelTypeOptions=[{label:"Number",value:W.Number},{label:"Currency",value:W.Currency}];changeDataLabelOptions(){this.dataLabel=v(C({},this.dataLabel),{fixed:this.selectedValuesDataLabel.includes("fixed")})}changeAxisOptions(){let d={showXAxis:this.selectedValuesAxis.includes("showXAxis"),showYAxis:this.selectedValuesAxis.includes("showYAxis"),showAxisDetails:this.selectedValuesAxis.includes("showAxisDetails")};this.options=v(C({},this.options),{axis:d})}changeHeaderOptions(){let d={hideExpand:this.selectedValuesHeader.includes("hideExpand"),hideExportCsv:this.selectedValuesHeader.includes("hideExportCsv"),hideExportImage:this.selectedValuesHeader.includes("hideExportImage"),hideTableDetails:this.selectedValuesHeader.includes("hideTableDetails")};this.options=v(C({},this.options),{header:d})}changeDataZoomOptions(){this.options=v(C({},this.options),{dataZoom:this.selectedValuesDataZoom.includes("dataZoom"),bottomDataZoom:this.selectedValuesDataZoom.includes("bottomDataZoom")}),this.options=C({},this.options)}changeFillPointsOptions(){this.options=v(C({},this.options),{fillPoints:this.selectedValuesFillPoints.includes("fillPoints")})}changeLegendOptions(){this.options=v(C({},this.options),{legend:this.selectedValuesLegend.includes("legend")})}changeRoseTypeOptions(){this.options=v(C({},this.options),{roseType:this.selectedRoseType.includes("roseType")})}changeShowFromToLegend(){this.options=v(C({},this.options),{showFromToLegend:this.selectedFromToLegend.includes("showFromToLegend")})}changePointer(){this.options=v(C({},this.options),{pointer:this.selectedPointer.includes("pointer")})}changeStacked(){this.options=v(C({},this.options),{stacked:this.selectedStacked.includes("stacked")})}changeLegendVerticalPosition(){this.options=v(C({},this.options),{legendVerticalPosition:this.selectedLegendVerticalPosition})}changeLegendPosition(){this.options=v(C({},this.options),{legendPosition:this.selectedLegendPosition})}changeRendererOption(){this.options=v(C({},this.options),{rendererOption:this.selectedRendererOption})}changeType(d){d===x.Gauge&&(this.isTypeGauge=!0,this.changeSwitchGauge(!0))}changeSwitchGauge(d){this.restore(!0),this.disabledTooltip=d,this.disabledType=d,d?(this.serieType=x.Gauge,this.type=x.Gauge):(this.serieType=void 0,this.type=void 0)}changeValueGauge(d){this.series?.length===1&&!this.toGauge&&(this.series[0].data=d,this.series=[...this.series])}ngOnInit(){this.restore()}addOptions(d){this.options=C(C({},this.options),d?C({},d):{})}addCategories(){this.allCategories=this.convertToArray(this.categories)}addData(){let d=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data),s=this.serieType??this.type,i=this.color,l=this.stackGroupName;this.isTypeGauge&&!this.series?.length&&!this.toGauge&&(d=this.valueGauge),this.series=[...this.series,v(C({label:this.label,data:d,tooltip:this.tooltip},i?{color:i}:{}),{type:s,stackGroupName:l,from:this.fromGauge,to:this.toGauge})],this.label=void 0,this.color=void 0,this.data=void 0,this.tooltip=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.stackGroupName=void 0,this.isTypeGauge||(this.type=void 0)}isTypeGrid(){return this.type===x.Line||this.type===x.Area||this.type===x.Column||this.type===x.Bar}changeEvent(d,s){this.event=`${d}: ${JSON.stringify(s)}`}restore(d=!1){this.color=void 0,this.data=void 0,this.label=void 0,this.tooltip=void 0,this.type=void 0,this.serieType=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.valueGauge=void 0,this.allCategories=[],this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.disabledTooltip=!1,this.disabledType=!1,this.dataLabel={fixed:!1},this.options=v(C({},this.options),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0}),this.selectedValuesDataLabel=[],this.selectedValuesAxis=[],this.selectedValuesHeader=[],this.selectedValuesDataZoom=[],this.selectedValuesFillPoints=[],this.selectedValuesLegend=[],this.selectedRoseType=[],d||(this.selectedFromToLegend=[],this.selectedPointer=[],this.isTypeGauge=!1)}convertToArray(d){try{return JSON.parse(d)}catch{return}}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-labs"]],standalone:!1,decls:63,vars:90,consts:[["chartSeries","ngForm"],[3,"p-series-click","p-series-hover","p-categories","p-height","p-data-label","p-options","p-series","p-title","p-type","p-value-gauge-multiple"],["p-label","Events",1,"po-md-12"],[1,"po-row"],["p-label","Event",3,"p-value"],["p-label","Properties",1,"po-md-12"],["name","type","p-columns","3","p-label","Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","height","p-label","Height",1,"po-md-3",3,"ngModelChange","ngModel"],["name","title","p-label","Title",1,"po-md-3",3,"ngModelChange","ngModel"],["class","po-md-3","name","dataLabel","p-label","DataLabel",3,"p-options","ngModel","ngModelChange","p-change",4,"ngIf"],["p-label","Chart series",1,"po-md-12"],["name","switch","p-label","Gauge Type",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["class","po-md-4","p-label","Value Gauge","name","valueGauge",3,"ngModel","ngModelChange","p-change",4,"ngIf"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["class","po-md-4","name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25",3,"ngModel","ngModelChange",4,"ngIf"],["name","serieType","p-help","Serie Type","p-label","Type",1,"po-md-4",3,"ngModelChange","ngModel","p-disabled","p-options"],["name","tooltip","p-label","Tooltip","p-help","Custom Tooltip",1,"po-md-4",3,"ngModelChange","p-disabled","ngModel"],["name","color","p-label","Color","p-help","Custom Color",1,"po-md-4",3,"ngModelChange","ngModel"],["class","po-md-4","name","stackGroupName","p-label","Stack Group Name","p-help","Custom Group Name",3,"ngModel","ngModelChange",4,"ngIf"],["class","po-md-4","p-label","From","name","from",3,"ngModel","ngModelChange",4,"ngIf"],["class","po-md-4","p-label","To","name","from",3,"ngModel","ngModelChange",4,"ngIf"],["p-label","Add Serie",1,"po-md-4",3,"p-click"],[1,"po-md-12"],["name","categories","p-label","Categories","p-help",'Example: ["Jan", "Feb", "Mar", "Apr"]',1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["p-label","Chart options",1,"po-md-12"],["name","minRange","p-label","minRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","maxRange","p-label","maxRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","gridLines","p-label","gridLines",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","labelType","p-label","labelType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","paddingBottom","p-label","paddingBottom",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","paddingLeft","p-label","paddingLeft",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","paddingRight","p-label","paddingRight",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","rotateLegend","p-label","rotateLegend",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","innerRadius","p-label","innerRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","borderRadius","p-label","borderRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","firstColumnName","p-label","firstColumnName",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","textCenterGraph","p-label","textCenterGraph",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","descriptionChart","p-label","descriptionChart",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","subtitleGauge","p-label","subtitleGauge",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","headerGroup","p-label","Header",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","axisGroup","p-label","Axis",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","dataZoomGroup","p-label","DataZoom",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","fillPoints","p-label","FillPoints",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","legend","p-label","Legend",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","roseType","p-label","RoseType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","showFromToLegend","p-label","ShowFromToLegend",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","pointer","p-label","Pointer",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","stacked","p-label","Stacked",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendVerticalPosition","p-label","LegendVerticalPosition",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendPosition","p-label","LegendPosition",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioRendererOption","p-label","RendererOption",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["p-label","Sample Restore",1,"po-md-4",3,"p-click"],["name","dataLabel","p-label","DataLabel",1,"po-md-3",3,"ngModelChange","p-change","p-options","ngModel"],["p-label","Value Gauge","name","valueGauge",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25",1,"po-md-4",3,"ngModelChange","ngModel"],["name","stackGroupName","p-label","Stack Group Name","p-help","Custom Group Name",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","From","name","from",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","To","name","from",1,"po-md-4",3,"ngModelChange","ngModel"]],template:function(s,i){if(s&1){let l=O();t(0,"po-chart",1),h("p-series-click",function(o){return m(l),c(i.changeEvent("p-series-click",o))})("p-series-hover",function(o){return m(l),c(i.changeEvent("p-series-hover",o))}),n(),a(1,"po-divider",2),t(2,"div",3),a(3,"po-info",4),n(),a(4,"po-divider",5),t(5,"form")(6,"po-select",6),S("ngModelChange",function(o){return m(l),b(i.type,o)||(i.type=o),c(o)}),h("p-change",function(o){return m(l),c(i.changeType(o))}),n(),t(7,"po-number",7),S("ngModelChange",function(o){return m(l),b(i.height,o)||(i.height=o),c(o)}),n(),t(8,"po-input",8),S("ngModelChange",function(o){return m(l),b(i.title,o)||(i.title=o),c(o)}),n(),H(9,Ze,1,5,"po-checkbox-group",9),n(),a(10,"po-divider",10),t(11,"form",null,0)(13,"div",3)(14,"po-switch",11),S("ngModelChange",function(o){return m(l),b(i.isTypeGauge,o)||(i.isTypeGauge=o),c(o)}),h("p-change",function(o){return m(l),c(i.changeSwitchGauge(o))}),n(),H(15,Ye,1,1,"po-number",12),n(),t(16,"div",3)(17,"po-input",13),S("ngModelChange",function(o){return m(l),b(i.label,o)||(i.label=o),c(o)}),n(),H(18,je,1,1,"po-input",14),t(19,"po-select",15),S("ngModelChange",function(o){return m(l),b(i.serieType,o)||(i.serieType=o),c(o)}),n(),t(20,"po-input",16),S("ngModelChange",function(o){return m(l),b(i.tooltip,o)||(i.tooltip=o),c(o)}),n(),t(21,"po-input",17),S("ngModelChange",function(o){return m(l),b(i.color,o)||(i.color=o),c(o)}),n(),H(22,Ue,1,1,"po-input",18)(23,Je,1,1,"po-number",19)(24,Xe,1,1,"po-number",20),t(25,"div",3)(26,"po-button",21),h("p-click",function(){return m(l),c(i.addData())}),n()()()(),t(27,"div",3),a(28,"po-divider",22),t(29,"po-input",23),S("ngModelChange",function(o){return m(l),b(i.categories,o)||(i.categories=o),c(o)}),h("p-blur",function(){return m(l),c(i.addCategories())}),n()(),t(30,"form")(31,"div",3),a(32,"po-divider",24),t(33,"po-number",25),S("ngModelChange",function(o){return m(l),b(i.options.axis.minRange,o)||(i.options.axis.minRange=o),c(o)}),h("p-blur",function(){return m(l),c(i.addOptions())}),n(),t(34,"po-number",26),S("ngModelChange",function(o){return m(l),b(i.options.axis.maxRange,o)||(i.options.axis.maxRange=o),c(o)}),h("p-blur",function(){return m(l),c(i.addOptions())}),n(),t(35,"po-number",27),S("ngModelChange",function(o){return m(l),b(i.options.axis.gridLines,o)||(i.options.axis.gridLines=o),c(o)}),h("p-blur",function(){return m(l),c(i.addOptions())}),n(),t(36,"po-select",28),S("ngModelChange",function(o){return m(l),b(i.options.axis.labelType,o)||(i.options.axis.labelType=o),c(o)}),h("p-change",function(){return m(l),c(i.addOptions())}),n(),t(37,"po-number",29),S("ngModelChange",function(o){return m(l),b(i.options.axis.paddingBottom,o)||(i.options.axis.paddingBottom=o),c(o)}),h("p-blur",function(){return m(l),c(i.addOptions())}),n(),t(38,"po-number",30),S("ngModelChange",function(o){return m(l),b(i.options.axis.paddingLeft,o)||(i.options.axis.paddingLeft=o),c(o)}),h("p-blur",function(){return m(l),c(i.addOptions())}),n(),t(39,"po-number",31),S("ngModelChange",function(o){return m(l),b(i.options.axis.paddingRight,o)||(i.options.axis.paddingRight=o),c(o)}),h("p-blur",function(){return m(l),c(i.addOptions())}),n(),t(40,"po-number",32),S("ngModelChange",function(o){return m(l),b(i.options.axis.rotateLegend,o)||(i.options.axis.rotateLegend=o),c(o)}),h("p-blur",function(){return m(l),c(i.addOptions())}),n(),t(41,"po-number",33),S("ngModelChange",function(o){return m(l),b(i.options.innerRadius,o)||(i.options.innerRadius=o),c(o)}),h("p-blur",function(){return m(l),c(i.addOptions())}),n(),t(42,"po-number",34),S("ngModelChange",function(o){return m(l),b(i.options.borderRadius,o)||(i.options.borderRadius=o),c(o)}),h("p-blur",function(){return m(l),c(i.addOptions())}),n(),t(43,"po-input",35),S("ngModelChange",function(o){return m(l),b(i.options.firstColumnName,o)||(i.options.firstColumnName=o),c(o)}),h("p-blur",function(){return m(l),c(i.addOptions())}),n(),t(44,"po-input",36),S("ngModelChange",function(o){return m(l),b(i.options.textCenterGraph,o)||(i.options.textCenterGraph=o),c(o)}),h("p-blur",function(){return m(l),c(i.addOptions())}),n(),t(45,"po-input",37),S("ngModelChange",function(o){return m(l),b(i.options.descriptionChart,o)||(i.options.descriptionChart=o),c(o)}),h("p-blur",function(){return m(l),c(i.addOptions())}),n(),t(46,"po-input",38),S("ngModelChange",function(o){return m(l),b(i.options.subtitleGauge,o)||(i.options.subtitleGauge=o),c(o)}),h("p-blur",function(){return m(l),c(i.addOptions())}),n()(),t(47,"div",3)(48,"po-checkbox-group",39),S("ngModelChange",function(o){return m(l),b(i.selectedValuesHeader,o)||(i.selectedValuesHeader=o),c(o)}),h("p-change",function(){return m(l),c(i.changeHeaderOptions())}),n(),t(49,"po-checkbox-group",40),S("ngModelChange",function(o){return m(l),b(i.selectedValuesAxis,o)||(i.selectedValuesAxis=o),c(o)}),h("p-change",function(){return m(l),c(i.changeAxisOptions())}),n(),t(50,"po-checkbox-group",41),S("ngModelChange",function(o){return m(l),b(i.selectedValuesDataZoom,o)||(i.selectedValuesDataZoom=o),c(o)}),h("p-change",function(){return m(l),c(i.changeDataZoomOptions())}),n(),t(51,"po-checkbox-group",42),S("ngModelChange",function(o){return m(l),b(i.selectedValuesFillPoints,o)||(i.selectedValuesFillPoints=o),c(o)}),h("p-change",function(){return m(l),c(i.changeFillPointsOptions())}),n(),t(52,"po-checkbox-group",43),S("ngModelChange",function(o){return m(l),b(i.selectedValuesLegend,o)||(i.selectedValuesLegend=o),c(o)}),h("p-change",function(){return m(l),c(i.changeLegendOptions())}),n(),t(53,"po-checkbox-group",44),S("ngModelChange",function(o){return m(l),b(i.selectedRoseType,o)||(i.selectedRoseType=o),c(o)}),h("p-change",function(){return m(l),c(i.changeRoseTypeOptions())}),n(),t(54,"po-checkbox-group",45),S("ngModelChange",function(o){return m(l),b(i.selectedFromToLegend,o)||(i.selectedFromToLegend=o),c(o)}),h("p-change",function(){return m(l),c(i.changeShowFromToLegend())}),n(),t(55,"po-checkbox-group",46),S("ngModelChange",function(o){return m(l),b(i.selectedPointer,o)||(i.selectedPointer=o),c(o)}),h("p-change",function(){return m(l),c(i.changePointer())}),n(),t(56,"po-checkbox-group",47),S("ngModelChange",function(o){return m(l),b(i.selectedStacked,o)||(i.selectedStacked=o),c(o)}),h("p-change",function(){return m(l),c(i.changeStacked())}),n(),t(57,"po-radio-group",48),S("ngModelChange",function(o){return m(l),b(i.selectedLegendVerticalPosition,o)||(i.selectedLegendVerticalPosition=o),c(o)}),h("p-change",function(){return m(l),c(i.changeLegendVerticalPosition())}),n(),t(58,"po-radio-group",49),S("ngModelChange",function(o){return m(l),b(i.selectedLegendPosition,o)||(i.selectedLegendPosition=o),c(o)}),h("p-change",function(){return m(l),c(i.changeLegendPosition())}),n(),t(59,"po-radio-group",50),S("ngModelChange",function(o){return m(l),b(i.selectedRendererOption,o)||(i.selectedRendererOption=o),c(o)}),h("p-change",function(){return m(l),c(i.changeRendererOption())}),n()(),a(60,"po-divider",22),t(61,"div",3)(62,"po-button",51),h("p-click",function(){return m(l),c(i.restore())}),n()()()}s&2&&(g("p-categories",i.allCategories)("p-height",i.height)("p-data-label",i.dataLabel)("p-options",i.options)("p-series",i.series)("p-title",i.title)("p-type",i.type)("p-value-gauge-multiple",i.valueGauge),p(3),g("p-value",i.event),p(3),E("ngModel",i.type),g("p-disabled",i.disabledType)("p-options",i.typeOptions),p(),E("ngModel",i.height),p(),E("ngModel",i.title),p(),g("ngIf",i.isTypeGrid()),p(5),E("ngModel",i.isTypeGauge),p(),g("ngIf",i.isTypeGauge),p(2),E("ngModel",i.label),p(),g("ngIf",!i.isTypeGauge),p(),E("ngModel",i.serieType),g("p-disabled",i.disabledType)("p-options",i.typeOptions),p(),g("p-disabled",i.disabledTooltip),E("ngModel",i.tooltip),p(),E("ngModel",i.color),p(),g("ngIf",i.type==="bar"||i.serieType==="bar"||i.type==="column"||i.serieType==="column"),p(),g("ngIf",i.isTypeGauge),p(),g("ngIf",i.isTypeGauge),p(5),E("ngModel",i.categories),p(4),E("ngModel",i.options.axis.minRange),p(),E("ngModel",i.options.axis.maxRange),p(),E("ngModel",i.options.axis.gridLines),p(),g("p-options",i.labelTypeOptions),E("ngModel",i.options.axis.labelType),p(),E("ngModel",i.options.axis.paddingBottom),p(),E("ngModel",i.options.axis.paddingLeft),p(),E("ngModel",i.options.axis.paddingRight),p(),E("ngModel",i.options.axis.rotateLegend),p(),E("ngModel",i.options.innerRadius),p(),E("ngModel",i.options.borderRadius),p(),E("ngModel",i.options.firstColumnName),p(),E("ngModel",i.options.textCenterGraph),p(),E("ngModel",i.options.descriptionChart),p(),E("ngModel",i.options.subtitleGauge),p(2),g("p-columns",2)("p-options",i.optionsHeader),E("ngModel",i.selectedValuesHeader),p(),g("p-columns",2)("p-options",i.optionsAxis),E("ngModel",i.selectedValuesAxis),p(),g("p-columns",2)("p-options",i.optionsDataZoom),E("ngModel",i.selectedValuesDataZoom),p(),g("p-columns",1)("p-options",y(73,B,G(72,We))),E("ngModel",i.selectedValuesFillPoints),p(),g("p-options",y(76,B,G(75,Fe))),E("ngModel",i.selectedValuesLegend),p(),g("p-options",y(79,B,G(78,Ne))),E("ngModel",i.selectedRoseType),p(),g("p-options",y(82,B,G(81,Ie))),E("ngModel",i.selectedFromToLegend),p(),g("p-options",y(85,B,G(84,qe))),E("ngModel",i.selectedPointer),p(),g("p-options",y(88,B,G(87,He))),E("ngModel",i.selectedStacked),p(),g("p-options",i.optionsLegendVerticalPosition),E("ngModel",i.selectedLegendVerticalPosition),p(),g("p-options",i.optionsLegendPosition),E("ngModel",i.selectedLegendPosition),p(),g("p-options",i.optionsRendererOption),E("ngModel",i.selectedRendererOption))},dependencies:[X,te,Q,K,ee,$,ae,D,oe,re,le,pe,me,ce,de,ue],encapsulation:2})}return r})();var Ke=r=>({"docs-sample-code-tabs":r}),fe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(s,i){s&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Chart Labs"),n(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-labs/sample-po-chart-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-chart
  [p-categories]="allCategories"
  [p-height]="height"
  [p-data-label]="dataLabel"
  [p-options]="options"
  [p-series]="series"
  [p-title]="title"
  [p-type]="type"
  [p-value-gauge-multiple]="valueGauge"
  (p-series-click)="changeEvent('p-series-click', $event)"
  (p-series-hover)="changeEvent('p-series-hover', $event)"
>
</po-chart>

<po-divider class="po-md-12" p-label="Events"></po-divider>

<div class="po-row">
  <po-info p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider class="po-md-12" p-label="Properties"></po-divider>

<form>
  <po-select
    class="po-md-3"
    name="type"
    [(ngModel)]="type"
    p-columns="3"
    p-label="Type"
    [p-disabled]="disabledType"
    [p-options]="typeOptions"
    (p-change)="changeType($event)"
  >
  </po-select>

  <po-number class="po-md-3" name="height" p-label="Height" [(ngModel)]="height"> </po-number>

  <po-input class="po-md-3" name="title" p-label="Title" [(ngModel)]="title"> </po-input>

  <po-checkbox-group
    *ngIf="isTypeGrid()"
    class="po-md-3"
    name="dataLabel"
    p-label="DataLabel"
    [p-options]="[{ value: 'fixed', label: 'Fixed' }]"
    [(ngModel)]="selectedValuesDataLabel"
    (p-change)="changeDataLabelOptions()"
  >
  </po-checkbox-group>
</form>

<po-divider class="po-md-12" p-label="Chart series"></po-divider>

<form #chartSeries="ngForm">
  <div class="po-row">
    <po-switch
      class="po-md-4"
      name="switch"
      p-label="Gauge Type"
      [(ngModel)]="isTypeGauge"
      (p-change)="changeSwitchGauge($event)"
    >
    </po-switch>

    <po-number
      *ngIf="isTypeGauge"
      class="po-md-4"
      p-label="Value Gauge"
      name="valueGauge"
      [(ngModel)]="valueGauge"
      (p-change)="changeValueGauge($event)"
    ></po-number>
  </div>
  <div class="po-row">
    <po-input class="po-md-4" name="label" p-label="Label" [(ngModel)]="label"></po-input>

    <po-input
      *ngIf="!isTypeGauge"
      class="po-md-4"
      name="data"
      p-label="Data"
      p-help="Example: [25, 58, 83, 66] or 25"
      [(ngModel)]="data"
    >
    </po-input>

    <po-select
      class="po-md-4"
      name="serieType"
      [(ngModel)]="serieType"
      p-help="Serie Type"
      p-label="Type"
      [p-disabled]="disabledType"
      [p-options]="typeOptions"
    >
    </po-select>

    <po-input
      class="po-md-4"
      name="tooltip"
      p-label="Tooltip"
      p-help="Custom Tooltip"
      [p-disabled]="disabledTooltip"
      [(ngModel)]="tooltip"
    ></po-input>

    <po-input class="po-md-4" name="color" p-label="Color" p-help="Custom Color" [(ngModel)]="color"></po-input>

    <po-input
      *ngIf="type === 'bar' || serieType === 'bar' || type === 'column' || serieType === 'column'"
      class="po-md-4"
      name="stackGroupName"
      p-label="Stack Group Name"
      p-help="Custom Group Name"
      [(ngModel)]="stackGroupName"
    ></po-input>

    <po-number *ngIf="isTypeGauge" class="po-md-4" p-label="From" name="from" [(ngModel)]="fromGauge"></po-number>

    <po-number *ngIf="isTypeGauge" class="po-md-4" p-label="To" name="from" [(ngModel)]="toGauge"></po-number>

    <div class="po-row">
      <po-button class="po-md-4" p-label="Add Serie" (p-click)="addData()"> </po-button>
    </div>
  </div>
</form>
<div class="po-row">
  <po-divider class="po-md-12"></po-divider>
  <po-input
    class="po-md-4"
    name="categories"
    p-label="Categories"
    p-help='Example: ["Jan", "Feb", "Mar", "Apr"]'
    [(ngModel)]="categories"
    (p-blur)="addCategories()"
  >
  </po-input>
</div>
<form>
  <div class="po-row">
    <po-divider class="po-md-12" p-label="Chart options"></po-divider>

    <po-number
      class="po-md-4"
      name="minRange"
      p-label="minRange"
      [(ngModel)]="options.axis.minRange"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="maxRange"
      p-label="maxRange"
      [(ngModel)]="options.axis.maxRange"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="gridLines"
      p-label="gridLines"
      [(ngModel)]="options.axis.gridLines"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-select
      class="po-md-4"
      name="labelType"
      p-label="labelType"
      [p-options]="labelTypeOptions"
      [(ngModel)]="options.axis.labelType"
      (p-change)="addOptions()"
    >
    </po-select>

    <po-number
      class="po-md-4"
      name="paddingBottom"
      p-label="paddingBottom"
      [(ngModel)]="options.axis.paddingBottom"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="paddingLeft"
      p-label="paddingLeft"
      [(ngModel)]="options.axis.paddingLeft"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="paddingRight"
      p-label="paddingRight"
      [(ngModel)]="options.axis.paddingRight"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="rotateLegend"
      p-label="rotateLegend"
      [(ngModel)]="options.axis.rotateLegend"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="innerRadius"
      p-label="innerRadius"
      [(ngModel)]="options.innerRadius"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="borderRadius"
      p-label="borderRadius"
      [(ngModel)]="options.borderRadius"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-input
      class="po-md-4"
      name="firstColumnName"
      p-label="firstColumnName"
      [(ngModel)]="options.firstColumnName"
      (p-blur)="addOptions()"
    >
    </po-input>

    <po-input
      class="po-md-4"
      name="textCenterGraph"
      p-label="textCenterGraph"
      [(ngModel)]="options.textCenterGraph"
      (p-blur)="addOptions()"
    >
    </po-input>

    <po-input
      class="po-md-4"
      name="descriptionChart"
      p-label="descriptionChart"
      [(ngModel)]="options.descriptionChart"
      (p-blur)="addOptions()"
    ></po-input>

    <po-input
      class="po-md-4"
      name="subtitleGauge"
      p-label="subtitleGauge"
      [(ngModel)]="options.subtitleGauge"
      (p-blur)="addOptions()"
    >
    </po-input>
  </div>
  <div class="po-row">
    <po-checkbox-group
      class="po-md-4"
      name="headerGroup"
      p-label="Header"
      [p-columns]="2"
      [p-options]="optionsHeader"
      [(ngModel)]="selectedValuesHeader"
      (p-change)="changeHeaderOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="axisGroup"
      p-label="Axis"
      [p-columns]="2"
      [p-options]="optionsAxis"
      [(ngModel)]="selectedValuesAxis"
      (p-change)="changeAxisOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="dataZoomGroup"
      p-label="DataZoom"
      [p-columns]="2"
      [p-options]="optionsDataZoom"
      [(ngModel)]="selectedValuesDataZoom"
      (p-change)="changeDataZoomOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="fillPoints"
      p-label="FillPoints"
      [p-columns]="1"
      [p-options]="[{ value: 'fillPoints', label: 'fillPoints' }]"
      [(ngModel)]="selectedValuesFillPoints"
      (p-change)="changeFillPointsOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="legend"
      p-label="Legend"
      [p-options]="[{ label: 'legend', value: 'legend' }]"
      [(ngModel)]="selectedValuesLegend"
      (p-change)="changeLegendOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="roseType"
      p-label="RoseType"
      [p-options]="[{ label: 'roseType', value: 'roseType' }]"
      [(ngModel)]="selectedRoseType"
      (p-change)="changeRoseTypeOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="showFromToLegend"
      p-label="ShowFromToLegend"
      [p-options]="[{ label: 'showFromToLegend', value: 'showFromToLegend' }]"
      [(ngModel)]="selectedFromToLegend"
      (p-change)="changeShowFromToLegend()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="pointer"
      p-label="Pointer"
      [p-options]="[{ label: 'pointer', value: 'pointer' }]"
      [(ngModel)]="selectedPointer"
      (p-change)="changePointer()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="stacked"
      p-label="Stacked"
      [p-options]="[{ label: 'stacked', value: 'stacked' }]"
      [(ngModel)]="selectedStacked"
      (p-change)="changeStacked()"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-4"
      name="radioLegendVerticalPosition"
      p-label="LegendVerticalPosition"
      [p-options]="optionsLegendVerticalPosition"
      [(ngModel)]="selectedLegendVerticalPosition"
      (p-change)="changeLegendVerticalPosition()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="radioLegendPosition"
      p-label="LegendPosition"
      [p-options]="optionsLegendPosition"
      [(ngModel)]="selectedLegendPosition"
      (p-change)="changeLegendPosition()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="radioRendererOption"
      p-label="RendererOption"
      [p-options]="optionsRendererOption"
      [(ngModel)]="selectedRendererOption"
      (p-change)="changeRendererOption()"
    >
    </po-radio-group>
  </div>

  <po-divider class="po-md-12"></po-divider>
  <div class="po-row">
    <po-button class="po-md-4" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-labs/sample-po-chart-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoChartSerie,
  PoChartType,
  PoSelectOption,
  PoChartOptions,
  PoChartDataLabel,
  PoChartLabelFormat
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-labs',
  templateUrl: './sample-po-chart-labs.component.html',
  standalone: false
})
export class SamplePoChartLabsComponent implements OnInit {
  color: string;
  stackGroupName: string;
  data;
  label: string;
  tooltip: string;
  type: PoChartType;
  serieType: PoChartType;
  valueGauge: number;
  fromGauge: number;
  toGauge: number;
  allCategories: Array<string> = [];
  categories: string;
  event: string;
  height: number;
  series: Array<PoChartSerie>;
  title: string;
  dataLabel: PoChartDataLabel;
  isTypeGauge = false;
  disabledTooltip = false;
  disabledType = false;
  options: PoChartOptions = {
    axis: {
      minRange: undefined,
      maxRange: undefined,
      gridLines: undefined,
      labelType: undefined,
      paddingBottom: undefined,
      paddingLeft: undefined,
      paddingRight: undefined,
      rotateLegend: undefined,
      showXAxis: undefined,
      showYAxis: undefined,
      showAxisDetails: undefined
    },
    header: {
      hideExpand: undefined,
      hideExportCsv: undefined,
      hideExportImage: undefined,
      hideTableDetails: undefined
    },
    dataZoom: undefined,
    fillPoints: undefined,
    firstColumnName: undefined,
    innerRadius: undefined,
    borderRadius: undefined,
    textCenterGraph: undefined,
    descriptionChart: undefined,
    subtitleGauge: undefined,
    legend: undefined,
    legendPosition: undefined,
    legendVerticalPosition: undefined,
    bottomDataZoom: undefined,
    rendererOption: undefined,
    pointer: undefined,
    stacked: undefined,
    roseType: undefined,
    showFromToLegend: undefined
  };

  selectedValuesDataLabel: Array<string> = [];
  selectedValuesAxis: Array<string> = [];
  selectedValuesHeader: Array<string> = [];
  selectedValuesDataZoom: Array<string> = [];
  selectedValuesFillPoints: Array<string> = [];
  selectedRoseType: Array<string> = [];
  selectedFromToLegend: Array<string> = [];
  selectedPointer: Array<string> = [];
  selectedStacked: Array<string> = [];
  selectedValuesLegend: Array<string> = ['legend'];
  selectedLegendVerticalPosition: PoChartOptions['legendVerticalPosition'] = 'bottom';
  selectedLegendPosition: PoChartOptions['legendPosition'] = 'center';
  selectedRendererOption: PoChartOptions['rendererOption'] = 'canvas';

  optionsAxis = [
    { value: 'showXAxis', label: 'showXAxis' },
    { value: 'showYAxis', label: 'showYAxis' },
    { value: 'showAxisDetails', label: 'showAxisDetails' }
  ];

  optionsHeader = [
    { value: 'hideTableDetails', label: 'hideTableDetails' },
    { value: 'hideExpand', label: 'hideExpand' },
    { value: 'hideExportCsv', label: 'hideExportCsv' },
    { value: 'hideExportImage', label: 'hideExportImage' }
  ];

  optionsDataZoom = [
    { value: 'dataZoom', label: 'dataZoom' },
    { value: 'bottomDataZoom', label: 'bottomDataZoom' }
  ];

  optionsLegendVerticalPosition = [
    { value: 'top', label: 'top' },
    { value: 'bottom', label: 'bottom' }
  ];

  optionsLegendPosition = [
    { value: 'left', label: 'left' },
    { value: 'center', label: 'center' },
    { value: 'right', label: 'right' }
  ];

  optionsRendererOption = [
    { value: 'canvas', label: 'canvas' },
    { value: 'svg', label: 'svg' }
  ];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Line', value: PoChartType.Line },
    { label: 'Area', value: PoChartType.Area },
    { label: 'Bar', value: PoChartType.Bar },
    { label: 'Column', value: PoChartType.Column },
    { label: 'Donut', value: PoChartType.Donut },
    { label: 'Pie', value: PoChartType.Pie },
    { label: 'Gauge', value: PoChartType.Gauge }
  ];

  readonly labelTypeOptions: Array<PoSelectOption> = [
    { label: 'Number', value: PoChartLabelFormat.Number },
    { label: 'Currency', value: PoChartLabelFormat.Currency }
  ];

  changeDataLabelOptions() {
    this.dataLabel = {
      ...this.dataLabel,
      fixed: this.selectedValuesDataLabel.includes('fixed')
    };
  }

  changeAxisOptions() {
    const newAxis = {
      showXAxis: this.selectedValuesAxis.includes('showXAxis'),
      showYAxis: this.selectedValuesAxis.includes('showYAxis'),
      showAxisDetails: this.selectedValuesAxis.includes('showAxisDetails')
    };

    this.options = {
      ...this.options,
      axis: newAxis
    };
  }

  changeHeaderOptions() {
    const newHeader = {
      hideExpand: this.selectedValuesHeader.includes('hideExpand'),
      hideExportCsv: this.selectedValuesHeader.includes('hideExportCsv'),
      hideExportImage: this.selectedValuesHeader.includes('hideExportImage'),
      hideTableDetails: this.selectedValuesHeader.includes('hideTableDetails')
    };

    this.options = {
      ...this.options,
      header: newHeader
    };
  }

  changeDataZoomOptions() {
    this.options = {
      ...this.options,
      dataZoom: this.selectedValuesDataZoom.includes('dataZoom'),
      bottomDataZoom: this.selectedValuesDataZoom.includes('bottomDataZoom')
    };

    this.options = { ...this.options };
  }

  changeFillPointsOptions() {
    this.options = {
      ...this.options,
      fillPoints: this.selectedValuesFillPoints.includes('fillPoints')
    };
  }

  changeLegendOptions() {
    this.options = {
      ...this.options,
      legend: this.selectedValuesLegend.includes('legend')
    };
  }

  changeRoseTypeOptions() {
    this.options = {
      ...this.options,
      roseType: this.selectedRoseType.includes('roseType')
    };
  }

  changeShowFromToLegend() {
    this.options = {
      ...this.options,
      showFromToLegend: this.selectedFromToLegend.includes('showFromToLegend')
    };
  }

  changePointer() {
    this.options = {
      ...this.options,
      pointer: this.selectedPointer.includes('pointer')
    };
  }

  changeStacked() {
    this.options = {
      ...this.options,
      stacked: this.selectedStacked.includes('stacked')
    };
  }

  changeLegendVerticalPosition() {
    this.options = {
      ...this.options,
      legendVerticalPosition: this.selectedLegendVerticalPosition
    };
  }

  changeLegendPosition() {
    this.options = {
      ...this.options,
      legendPosition: this.selectedLegendPosition
    };
  }

  changeRendererOption() {
    this.options = {
      ...this.options,
      rendererOption: this.selectedRendererOption
    };
  }

  changeType(event) {
    if (event === PoChartType.Gauge) {
      this.isTypeGauge = true;
      this.changeSwitchGauge(true);
    }
  }

  changeSwitchGauge(event) {
    this.restore(true);
    this.disabledTooltip = event;
    this.disabledType = event;
    if (event) {
      this.serieType = PoChartType.Gauge;
      this.type = PoChartType.Gauge;
    } else {
      this.serieType = undefined;
      this.type = undefined;
    }
  }

  changeValueGauge(event) {
    if (this.series?.length === 1 && !this.toGauge) {
      this.series[0].data = event;
      this.series = [...this.series];
    }
  }

  ngOnInit() {
    this.restore();
  }

  addOptions(actionOptions?: PoChartOptions) {
    this.options = { ...this.options, ...(actionOptions ? { ...actionOptions } : {}) };
  }

  addCategories() {
    this.allCategories = this.convertToArray(this.categories);
  }

  addData() {
    let data = isNaN(this.data) ? this.convertToArray(this.data) : Math.floor(this.data);
    const type = this.serieType ?? this.type;
    const color = this.color;
    const stackGroupName = this.stackGroupName;
    if (this.isTypeGauge && !this.series?.length && !this.toGauge) {
      data = this.valueGauge;
    }

    this.series = [
      ...this.series,
      {
        label: this.label,
        data,
        tooltip: this.tooltip,
        ...(color ? { color } : {}),
        type,
        stackGroupName,
        from: this.fromGauge,
        to: this.toGauge
      }
    ];

    this.label = undefined;
    this.color = undefined;
    this.data = undefined;
    this.tooltip = undefined;
    this.fromGauge = undefined;
    this.toGauge = undefined;
    this.stackGroupName = undefined;
    if (!this.isTypeGauge) {
      this.type = undefined;
    }
  }

  isTypeGrid(): boolean {
    return (
      this.type === PoChartType.Line ||
      this.type === PoChartType.Area ||
      this.type === PoChartType.Column ||
      this.type === PoChartType.Bar
    );
  }

  changeEvent(eventName: string, serieEvent: PoChartSerie): void {
    this.event = \`\${eventName}: \${JSON.stringify(serieEvent)}\`;
  }

  restore(fromGauge = false) {
    this.color = undefined;
    this.data = undefined;
    this.label = undefined;
    this.tooltip = undefined;
    this.type = undefined;
    this.serieType = undefined;
    this.fromGauge = undefined;
    this.toGauge = undefined;
    this.valueGauge = undefined;
    this.allCategories = [];
    this.categories = undefined;
    this.event = undefined;
    this.height = undefined;
    this.series = [];
    this.title = undefined;
    this.disabledTooltip = false;
    this.disabledType = false;
    this.dataLabel = {
      fixed: false
    };
    this.options = {
      ...this.options,
      axis: {
        minRange: undefined,
        maxRange: undefined,
        gridLines: undefined,
        labelType: undefined,
        paddingBottom: undefined,
        paddingLeft: undefined,
        paddingRight: undefined,
        rotateLegend: undefined,
        showXAxis: undefined,
        showYAxis: undefined,
        showAxisDetails: undefined
      },
      header: {
        hideExpand: undefined,
        hideExportCsv: undefined,
        hideExportImage: undefined,
        hideTableDetails: undefined
      },
      dataZoom: undefined,
      fillPoints: undefined,
      firstColumnName: undefined,
      innerRadius: undefined,
      borderRadius: undefined,
      textCenterGraph: undefined,
      descriptionChart: undefined,
      subtitleGauge: undefined,
      legend: undefined,
      legendPosition: undefined,
      legendVerticalPosition: undefined,
      bottomDataZoom: undefined,
      rendererOption: undefined,
      pointer: undefined,
      stacked: undefined,
      roseType: undefined,
      showFromToLegend: undefined
    };
    this.selectedValuesDataLabel = [];
    this.selectedValuesAxis = [];
    this.selectedValuesHeader = [];
    this.selectedValuesDataZoom = [];
    this.selectedValuesFillPoints = [];
    this.selectedValuesLegend = [];
    this.selectedRoseType = [];

    if (!fromGauge) {
      this.selectedFromToLegend = [];
      this.selectedPointer = [];
      this.isTypeGauge = false;
    }
  }

  private convertToArray(value: string): Array<any> {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-chart-labs"),n(),a(23,"hr")),s&2&&(p(5),M("po-icon "+i.sampleCodeButtonIcon),p(),V(" ",i.sampleCodeButtonLabel,""),p(),g("ngClass",y(4,Ke,i.hideSampleCodeTabs)))},dependencies:[k,L,w,T,xe],encapsulation:2})}return r})();var Ce=(()=>{class r{poAlert;participationByCountryInWorldExportsType=x.Line;evolutionOfCoffeeAndSomeCompetitorsType=x.Column;coffeConsumingChartType=x.Donut;consumptionPerCapitaType=x.Bar;categories=["2010","2011","2012","2013","2014","2015"];chartAreaCategories=["Jan-18","Jul-18","Jan-19","Jul-19","Jan-20","Jul-20","Jan-21"];categoriesColumn=["coffee","chocolate","tea"];consumptionPerCapitaItems=["Water","Fruit Juice","Coffee","Cola drinks","Pils","Tea","Red Wine","Prosecco","Sodas","Beer 0% A.","Wheat Beer","Milk Shakes"];chartAreaSeries=[{label:"Starbucks",data:[550,497,532,550,530,565,572],type:x.Area},{label:"Green Mntn Coffee Roaster",data:[420,511,493,525,522,510,567],type:x.Area},{label:"Dunkin Brands Group",data:[312,542,497,610,542,661,674],type:x.Area},{label:"Coffee Arabica Price",data:[550,612,525,373,342,297,282],type:x.Line}];coffeeConsumption=[{label:"Finland",data:9.6,tooltip:"Finland (Europe)"},{label:"Norway",data:7.2,tooltip:"Norway (Europe)"},{label:"Netherlands",data:6.7,tooltip:"Netherlands (Europe)"},{label:"Slovenia",data:6.1,tooltip:"Slovenia (Europe)"},{label:"Austria",data:5.5,tooltip:"Austria (Europe)"}];consumptionPerCapita=[{label:"2018",data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:"2020",data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,25,29,33,33],color:"color-10"},{label:"Vietnam",data:[15,17,23,19,22,18]},{label:"Colombia",data:[8,7,6,9,10,11]},{label:"India",data:[5,6,5,4,5,5]},{label:"Indonesia",data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:x.Column},{label:"2017",data:[93,52,18],type:x.Column},{label:"2020",data:[95,21,-17],type:x.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:x.Line,color:"color-10"}];coffeeProduction=[{label:"Brazil",data:1796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}];items=[{position:"1",company:"Tim Hortons",location:"Hamilton, Ontario, Canada",foundation:"1964"},{position:"2",company:"Bewley\u2019s",location:"Dublin, Ireland",foundation:"1840"},{position:"3",company:"Lavazza Coffee",location:"Italy",foundation:"1895"},{position:"4",company:"Peet\u2019s Tea and Coffee",location:"Emeryville, California, US",foundation:"1966"},{position:"5",company:"Tully\u2019s Coffee",location:"Seattle, Washington, US",foundation:"1992"},{position:"6",company:"Costa Coffee",location:"Dunstable, England",foundation:"1971"},{position:"7",company:"McCafe",location:"Oak Brook, Illinois, United States",foundation:"1993"},{position:"8",company:"Starbucks Coffee",location:"Seattle, Washington, US",foundation:"1971"},{position:"9",company:"Dunkin\u2019 Donuts",location:"Quincy, Massachusetts, US",foundation:"1950"},{position:"10",company:"Coffee Beanery",location:"Flushing, Michigan, US",foundation:"1976"}];coffeeProductionOptions={roseType:!0,borderRadius:8};consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:W.Number,rotateLegend:45},legendVerticalPosition:"top"};chartAreaOptions={axis:{maxRange:700,gridLines:8},fillPoints:!0};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:W.Number},dataZoom:!0};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7,showXAxis:!0}};constructor(d){this.poAlert=d}searchMore(d){window.open(`http://google.com/search?q=coffee+producing+${d.label}`,"_blank")}showMeTheDates(d){this.poAlert.alert({title:"Statistic",message:`${d.label} consuming ${d.data}kg per capita!`,ok:()=>{}})}static \u0275fac=function(s){return new(s||r)(q(Y))};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-coffee-ranking"]],standalone:!1,features:[U([Y])],decls:28,vars:21,consts:[[1,"po-row"],[1,"po-md-12","po-lg-6"],["p-title","Participation by country in world exports - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series","p-type"],["p-title","Evolution of coffee and some competitors - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series"],["p-title","Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %",1,"po-md-12","po-mt-2",3,"p-height","p-categories","p-series","p-type","p-options"],[1,"po-md-12"],["p-title","Top 5 coffee producing countries (in tons)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-options","p-series"],["p-title","Top 5 Coffee Consuming Countries (in kg per capita)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-series","p-type"],["p-title","While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)",1,"po-md-6","po-mt-2",3,"p-options","p-categories","p-series"],[1,"po-md-6","po-mt-2"],["p-height","198"],[1,"po-font-title","po-text-center","po-pt-5"],[1,"po-text-center"],[1,"po-lg-12","po-mt-2"],[1,"po-font-text-bold"],["p-container","shadow",3,"p-items","p-hide-table-search"]],template:function(s,i){s&1&&(t(0,"div",0)(1,"div",1)(2,"div",0),a(3,"po-chart",2)(4,"po-chart",3),n()(),t(5,"div",1),a(6,"po-chart",4),n(),t(7,"div",5)(8,"po-chart",6),h("p-series-click",function(u){return i.searchMore(u)}),n(),t(9,"po-chart",7),h("p-series-click",function(u){return i.showMeTheDates(u)}),n()(),t(10,"div",0),a(11,"po-chart",8),t(12,"div",9)(13,"po-widget",10)(14,"div",11),e(15,"66 billion"),n(),t(16,"div",12),e(17,"cups of coffee are consumed per year in U.S."),n()(),t(18,"po-widget",10)(19,"div",11),e(20,"2nd most"),n(),t(21,"div",12),e(22,"traded commodity in the world second to Oil."),n()()()()(),t(23,"div",0)(24,"po-container",13)(25,"div",14),e(26,"Top 10 Largest Coffee Chains in the World"),n(),a(27,"po-table",15),n()()),s&2&&(p(3),g("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType),p(),g("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.evolutionOfCoffeeAndSomeCompetitors),p(2),g("p-height",816)("p-categories",i.consumptionPerCapitaItems)("p-series",i.consumptionPerCapita)("p-type",i.consumptionPerCapitaType)("p-options",i.consumptionPerCapitaOptions),p(2),g("p-options",i.coffeeProductionOptions)("p-series",i.coffeeProduction),p(),g("p-series",i.coffeeConsumption)("p-type",i.coffeConsumingChartType),p(2),g("p-options",i.chartAreaOptions)("p-categories",i.chartAreaCategories)("p-series",i.chartAreaSeries),p(16),g("p-items",i.items)("p-hide-table-search",!1))},dependencies:[D,F,se,he],encapsulation:2})}return r})();var tt=r=>({"docs-sample-code-tabs":r}),ye=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-coffee-ranking-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(s,i){s&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - Coffee Ranking"),n(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row">
  <div class="po-md-12 po-lg-6">
    <div class="po-row">
      <po-chart
        class="po-md-12 po-mt-2"
        p-title="Participation by country in world exports - %"
        [p-options]="options"
        [p-categories]="categories"
        [p-series]="participationByCountryInWorldExports"
        [p-type]="participationByCountryInWorldExportsType"
      >
      </po-chart>

      <po-chart
        class="po-md-12 po-mt-2"
        p-title="Evolution of coffee and some competitors - %"
        [p-options]="optionsColumn"
        [p-categories]="categoriesColumn"
        [p-series]="evolutionOfCoffeeAndSomeCompetitors"
      >
      </po-chart>
    </div>
  </div>

  <div class="po-md-12 po-lg-6">
    <po-chart
      class="po-md-12 po-mt-2"
      p-title="Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %"
      [p-height]="816"
      [p-categories]="consumptionPerCapitaItems"
      [p-series]="consumptionPerCapita"
      [p-type]="consumptionPerCapitaType"
      [p-options]="consumptionPerCapitaOptions"
    >
    </po-chart>
  </div>

  <div class="po-md-12">
    <po-chart
      class="po-lg-6 po-mt-2"
      p-title="Top 5 coffee producing countries (in tons)"
      [p-options]="coffeeProductionOptions"
      [p-series]="coffeeProduction"
      (p-series-click)="searchMore($event)"
    >
    </po-chart>

    <po-chart
      class="po-lg-6 po-mt-2"
      p-title="Top 5 Coffee Consuming Countries (in kg per capita)"
      [p-series]="coffeeConsumption"
      [p-type]="coffeConsumingChartType"
      (p-series-click)="showMeTheDates($event)"
    >
    </po-chart>
  </div>

  <div class="po-row">
    <po-chart
      class="po-md-6 po-mt-2"
      p-title="While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)"
      [p-options]="chartAreaOptions"
      [p-categories]="chartAreaCategories"
      [p-series]="chartAreaSeries"
    >
    </po-chart>

    <div class="po-md-6 po-mt-2">
      <po-widget p-height="198">
        <div class="po-font-title po-text-center po-pt-5">66 billion</div>
        <div class="po-text-center">cups of coffee are consumed per year in U.S.</div>
      </po-widget>

      <po-widget p-height="198">
        <div class="po-font-title po-text-center po-pt-5">2nd most</div>
        <div class="po-text-center">traded commodity in the world second to Oil.</div>
      </po-widget>
    </div>
  </div>
</div>

<div class="po-row">
  <po-container class="po-lg-12 po-mt-2">
    <div class="po-font-text-bold">Top 10 Largest Coffee Chains in the World</div>

    <po-table p-container="shadow" [p-items]="items" [p-hide-table-search]="false"> </po-table>
  </po-container>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoChartType, PoChartOptions, PoChartSerie, PoDialogService, PoChartLabelFormat } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-coffee-ranking',
  templateUrl: './sample-po-chart-coffee-ranking.component.html',
  providers: [PoDialogService],
  standalone: false
})
export class SamplePoChartCoffeeRankingComponent {
  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  evolutionOfCoffeeAndSomeCompetitorsType: PoChartType = PoChartType.Column;
  coffeConsumingChartType: PoChartType = PoChartType.Donut;
  consumptionPerCapitaType: PoChartType = PoChartType.Bar;

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  chartAreaCategories: Array<string> = ['Jan-18', 'Jul-18', 'Jan-19', 'Jul-19', 'Jan-20', 'Jul-20', 'Jan-21'];

  categoriesColumn: Array<string> = ['coffee', 'chocolate', 'tea'];

  consumptionPerCapitaItems: Array<string> = [
    'Water',
    'Fruit Juice',
    'Coffee',
    'Cola drinks',
    'Pils',
    'Tea',
    'Red Wine',
    'Prosecco',
    'Sodas',
    'Beer 0% A.',
    'Wheat Beer',
    'Milk Shakes'
  ];

  chartAreaSeries: Array<PoChartSerie> = [
    { label: 'Starbucks', data: [550, 497, 532, 550, 530, 565, 572], type: PoChartType.Area },
    { label: 'Green Mntn Coffee Roaster', data: [420, 511, 493, 525, 522, 510, 567], type: PoChartType.Area },
    { label: 'Dunkin Brands Group', data: [312, 542, 497, 610, 542, 661, 674], type: PoChartType.Area },
    {
      label: 'Coffee Arabica Price',
      data: [550, 612, 525, 373, 342, 297, 282],
      type: PoChartType.Line
    }
  ];

  coffeeConsumption: Array<PoChartSerie> = [
    { label: 'Finland', data: 9.6, tooltip: 'Finland (Europe)' },
    { label: 'Norway', data: 7.2, tooltip: 'Norway (Europe)' },
    { label: 'Netherlands', data: 6.7, tooltip: 'Netherlands (Europe)' },
    { label: 'Slovenia', data: 6.1, tooltip: 'Slovenia (Europe)' },
    { label: 'Austria', data: 5.5, tooltip: 'Austria (Europe)' }
  ];

  consumptionPerCapita: Array<PoChartSerie> = [
    { label: '2018', data: [86.5, 51.3, 44.6, 39.5, 27.6, 27.3, 25.4, 21.5, 20.8, 15.9, 15.4, 14.4] },
    { label: '2020', data: [86.1, 52.1, 47.3, 37.8, 29.8, 28.5, 24.9, 22.5, 21.1, 14.5, 15.5, 15.5] }
  ];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    { label: 'Brazil', data: [35, 32, 25, 29, 33, 33], color: 'color-10' },
    { label: 'Vietnam', data: [15, 17, 23, 19, 22, 18] },
    { label: 'Colombia', data: [8, 7, 6, 9, 10, 11] },
    { label: 'India', data: [5, 6, 5, 4, 5, 5] },
    { label: 'Indonesia', data: [7, 6, 10, 10, 4, 6] }
  ];

  evolutionOfCoffeeAndSomeCompetitors: Array<PoChartSerie> = [
    { label: '2014', data: [91, 40, 42], type: PoChartType.Column },
    { label: '2017', data: [93, 52, 18], type: PoChartType.Column },
    { label: '2020', data: [95, 21, -17], type: PoChartType.Column },
    { label: 'Coffee consumption in Brazil', data: [34, 27, 79], type: PoChartType.Line, color: 'color-10' }
  ];

  coffeeProduction: Array<PoChartSerie> = [
    { label: 'Brazil', data: 1796, tooltip: 'Brazil (South America)', color: 'color-10' },
    { label: 'Vietnam', data: 1076, tooltip: 'Vietnam (Asia)' },
    { label: 'Colombia', data: 688, tooltip: 'Colombia (South America)' },
    { label: 'Indonesia', data: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { label: 'Peru', data: 273, tooltip: 'Peru (South America)' }
  ];

  items: Array<any> = [
    { position: '1', company: 'Tim Hortons', location: 'Hamilton, Ontario, Canada', foundation: '1964' },
    { position: '2', company: 'Bewley\u2019s', location: 'Dublin, Ireland', foundation: '1840' },
    { position: '3', company: 'Lavazza Coffee', location: 'Italy', foundation: '1895' },
    { position: '4', company: 'Peet\u2019s Tea and Coffee', location: 'Emeryville, California, US', foundation: '1966' },
    { position: '5', company: 'Tully\u2019s Coffee', location: 'Seattle, Washington, US', foundation: '1992' },
    { position: '6', company: 'Costa Coffee', location: 'Dunstable, England', foundation: '1971' },
    { position: '7', company: 'McCafe', location: 'Oak Brook, Illinois, United States', foundation: '1993' },
    { position: '8', company: 'Starbucks Coffee', location: 'Seattle, Washington, US', foundation: '1971' },
    { position: '9', company: 'Dunkin\u2019 Donuts', location: 'Quincy, Massachusetts, US', foundation: '1950' },
    { position: '10', company: 'Coffee Beanery', location: 'Flushing, Michigan, US', foundation: '1976' }
  ];

  coffeeProductionOptions: PoChartOptions = {
    roseType: true,
    borderRadius: 8
  };

  consumptionPerCapitaOptions: PoChartOptions = {
    axis: {
      maxRange: 100,
      gridLines: 2,
      labelType: PoChartLabelFormat.Number,
      rotateLegend: 45
    },
    legendVerticalPosition: 'top'
  };

  chartAreaOptions: PoChartOptions = {
    axis: {
      maxRange: 700,
      gridLines: 8
    },
    fillPoints: true
  };

  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5,
      labelType: PoChartLabelFormat.Number
    },
    dataZoom: true
  };

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7,
      showXAxis: true
    }
  };

  constructor(private poAlert: PoDialogService) {}

  searchMore(event: any) {
    window.open(\`http://google.com/search?q=coffee+producing+\${event.label}\`, '_blank');
  }

  showMeTheDates(event: any) {
    this.poAlert.alert({
      title: 'Statistic',
      message: \`\${event.label} consuming \${event.data}kg per capita!\`,
      ok: () => {}
    });
  }
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-chart-coffee-ranking"),n(),a(23,"hr")),s&2&&(p(5),M("po-icon "+i.sampleCodeButtonIcon),p(),V(" ",i.sampleCodeButtonLabel,""),p(),g("ngClass",y(4,tt,i.hideSampleCodeTabs)))},dependencies:[k,L,w,T,Ce],encapsulation:2})}return r})();var ve=(()=>{class r{typeBar=x.Bar;optionsColumn={axis:{minRange:-20,gridLines:7}};categoriesColumn=["North Region","Central Region","South Region"];seriesColumn=[{label:"Year 2014",data:[51,40,42],stackGroupName:"group1"},{label:"Year 2017",data:[53,52,18]},{label:"Year 2020",data:[55,21,-17],stackGroupName:"group1"},{label:"Year 2023",data:[35,27,23],stackGroupName:"group2"},{label:"Year 2026",data:[45,34,17],stackGroupName:"group2"},{label:"Year 2029",data:[23,63,56],stackGroupName:"group1"}];optionsBar={stacked:!0};categoriesBar=["North Region","Central Region","South Region","Southeast Region","Northeast Region"];seriesBar=[{label:"Year 2014",data:[199,340,247,236,222]},{label:"Year 2017",data:[221,252,225,241,225]},{label:"Year 2020",data:[229,213,196,212,237]},{label:"Year 2023",data:[240,237,230,223,231]},{label:"Year 2026",data:[235,270,239,255,242]}];static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-stacked"]],standalone:!1,decls:6,vars:9,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],["p-title","Average Temperature by Region",1,"po-lg-6",3,"p-height","p-options","p-categories","p-series"],["p-title","Energy Consumption by Region",1,"po-lg-6",3,"p-type","p-height","p-options","p-categories","p-series"]],template:function(s,i){s&1&&(t(0,"po-container")(1,"div",0),e(2,"Energy and Climate Analysis"),n(),t(3,"div",1),a(4,"po-chart",2)(5,"po-chart",3),n()()),s&2&&(p(4),g("p-height",500)("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.seriesColumn),p(),g("p-type",i.typeBar)("p-height",500)("p-options",i.optionsBar)("p-categories",i.categoriesBar)("p-series",i.seriesBar))},dependencies:[D,F],encapsulation:2})}return r})();var ot=r=>({"docs-sample-code-tabs":r}),_e=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-stacked-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(s,i){s&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - Stacked"),n(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-stacked/sample-po-chart-stacked.component.html"),n(),t(13,"pre",7),e(14,`<po-container>
  <div class="po-font-title po-mb-3">Energy and Climate Analysis</div>
  <div class="po-row">
    <po-chart
      class="po-lg-6"
      p-title="Average Temperature by Region"
      [p-height]="500"
      [p-options]="optionsColumn"
      [p-categories]="categoriesColumn"
      [p-series]="seriesColumn"
    >
    </po-chart>

    <po-chart
      class="po-lg-6"
      p-title="Energy Consumption by Region"
      [p-type]="typeBar"
      [p-height]="500"
      [p-options]="optionsBar"
      [p-categories]="categoriesBar"
      [p-series]="seriesBar"
    >
    </po-chart>
  </div>
</po-container>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-stacked/sample-po-chart-stacked.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-stacked',
  templateUrl: './sample-po-chart-stacked.component.html',
  standalone: false
})
export class SamplePoChartStackedComponent {
  typeBar = PoChartType.Bar;

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      gridLines: 7
    }
  };

  categoriesColumn: Array<string> = ['North Region', 'Central Region', 'South Region'];

  seriesColumn: Array<PoChartSerie> = [
    { label: 'Year 2014', data: [51, 40, 42], stackGroupName: 'group1' },
    { label: 'Year 2017', data: [53, 52, 18] },
    { label: 'Year 2020', data: [55, 21, -17], stackGroupName: 'group1' },
    { label: 'Year 2023', data: [35, 27, 23], stackGroupName: 'group2' },
    { label: 'Year 2026', data: [45, 34, 17], stackGroupName: 'group2' },
    { label: 'Year 2029', data: [23, 63, 56], stackGroupName: 'group1' }
  ];

  optionsBar: PoChartOptions = {
    stacked: true
  };

  categoriesBar: Array<string> = [
    'North Region',
    'Central Region',
    'South Region',
    'Southeast Region',
    'Northeast Region'
  ];

  seriesBar: Array<PoChartSerie> = [
    { label: 'Year 2014', data: [199, 340, 247, 236, 222] },
    { label: 'Year 2017', data: [221, 252, 225, 241, 225] },
    { label: 'Year 2020', data: [229, 213, 196, 212, 237] },
    { label: 'Year 2023', data: [240, 237, 230, 223, 231] },
    { label: 'Year 2026', data: [235, 270, 239, 255, 242] }
  ];
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-chart-stacked"),n(),a(23,"hr")),s&2&&(p(5),M("po-icon "+i.sampleCodeButtonIcon),p(),V(" ",i.sampleCodeButtonLabel,""),p(),g("ngClass",y(4,ot,i.hideSampleCodeTabs)))},dependencies:[k,L,w,T,ve],encapsulation:2})}return r})();var Pe=(()=>{class r{type=x.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:!0};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-summary"]],standalone:!1,decls:8,vars:7,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],[1,"po-lg-6"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"],["p-title","Sales performance",3,"p-type","p-options","p-value-gauge-multiple","p-series"]],template:function(s,i){s&1&&(t(0,"po-container")(1,"div",0),e(2,"Sales Performance"),n(),t(3,"div",1)(4,"div",2),a(5,"po-chart",3),n(),t(6,"div",2),a(7,"po-chart",4),n()()()),s&2&&(p(5),g("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover),p(2),g("p-type",i.type)("p-options",i.optionsRange)("p-value-gauge-multiple",50)("p-series",i.salesRanges))},dependencies:[D,F],encapsulation:2})}return r})();var lt=r=>({"docs-sample-code-tabs":r}),we=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-summary-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(s,i){s&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - Summary"),n(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-summary/sample-po-chart-summary.component.html"),n(),t(13,"pre",7),e(14,`<po-container>
  <div class="po-font-title po-mb-3">Sales Performance</div>
  <div class="po-row">
    <div class="po-lg-6">
      <po-chart
        p-title="Employee turnover rate"
        p-value="25"
        [p-type]="type"
        [p-options]="optionsSingle"
        [p-series]="turnover"
      ></po-chart>
    </div>
    <div class="po-lg-6">
      <po-chart
        p-title="Sales performance"
        [p-type]="type"
        [p-options]="optionsRange"
        [p-value-gauge-multiple]="50"
        [p-series]="salesRanges"
      ></po-chart>
    </div>
  </div>
</po-container>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-summary/sample-po-chart-summary.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-summary',
  templateUrl: './sample-po-chart-summary.component.html',
  standalone: false
})
export class SamplePoChartSummaryComponent {
  type = PoChartType.Gauge;
  optionsSingle: PoChartOptions = {
    descriptionChart: '25% of turnover'
  };

  optionsRange: PoChartOptions = {
    descriptionChart: 'The sales increased in 82% in the first bimester of 2020',
    showFromToLegend: true
  };

  turnover: Array<PoChartSerie> = [{ data: 25, label: 'Low rate' }];

  salesRanges: Array<PoChartSerie> = [
    { from: 0, to: 50, label: 'Sales reduction' },
    { from: 50, to: 75, label: 'Average sales' },
    { from: 75, to: 100, label: 'Sales soared' }
  ];
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-chart-summary"),n(),a(23,"hr")),s&2&&(p(5),M("po-icon "+i.sampleCodeButtonIcon),p(),V(" ",i.sampleCodeButtonLabel,""),p(),g("ngClass",y(4,lt,i.hideSampleCodeTabs)))},dependencies:[k,L,w,T,Pe],encapsulation:2})}return r})();var Te=(()=>{class r{participationByCountryInWorldExportsType=x.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:!0};categories=["2010","2011","2012","2013","2014","2015"];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,27,29,33,33]},{label:"Vietnam",data:[15,17,18,19,22,18]},{label:"Colombia",data:[8,7,6,9,10,11]}];static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-world-exports"]],standalone:!1,decls:2,vars:5,consts:[[1,"po-row"],["p-title","Participation by country in world exports - %",1,"po-md-12",3,"p-options","p-categories","p-series","p-type","p-data-label"]],template:function(s,i){s&1&&(t(0,"div",0),a(1,"po-chart",1),n()),s&2&&(p(),g("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType)("p-data-label",i.dataLabel))},dependencies:[D],encapsulation:2})}return r})();var pt=r=>({"docs-sample-code-tabs":r}),Le=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-world-exports-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(s,i){s&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - World Exports"),n(),t(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row">
  <po-chart
    class="po-md-12"
    p-title="Participation by country in world exports - %"
    [p-options]="options"
    [p-categories]="categories"
    [p-series]="participationByCountryInWorldExports"
    [p-type]="participationByCountryInWorldExportsType"
    [p-data-label]="dataLabel"
  >
  </po-chart>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-world-exports',
  templateUrl: './sample-po-chart-world-exports.component.html',
  standalone: false
})
export class SamplePoChartWorldExportsComponent {
  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5
    }
  };
  dataLabel = { fixed: true };

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    { label: 'Brazil', data: [35, 32, 27, 29, 33, 33] },
    { label: 'Vietnam', data: [15, 17, 18, 19, 22, 18] },
    { label: 'Colombia', data: [8, 7, 6, 9, 10, 11] }
  ];
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-chart-world-exports"),n(),a(23,"hr")),s&2&&(p(5),M("po-icon "+i.sampleCodeButtonIcon),p(),V(" ",i.sampleCodeButtonLabel,""),p(),g("ngClass",y(4,pt,i.hideSampleCodeTabs)))},dependencies:[k,L,w,T,Te],encapsulation:2})}return r})();var Me=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-doc"]],standalone:!1,decls:2380,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/guide-charts"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<string>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoChartDataLabel"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoChartLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoChartOptions"],["pan","",1,"docs-api-property-type","Array<PoChartSerie>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoChartType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoChartLabelFormat"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoChartAxisOptions"],["pan","",1,"docs-api-property-type","PoChartHeaderOptions"],["pan","",1,"docs-api-property-type","'left'"],["pan","",1,"docs-api-property-type","'center'"],["pan","",1,"docs-api-property-type","'right'"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","'canvas'"],["pan","",1,"docs-api-property-type","'svg'"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<number>"],["href","https://angular.io/api/common/DecimalPipe"],["href","https://angular.dev/api/core/DEFAULT_CURRENCY_CODE"],["href","https://angular.dev/api/core/LOCALE_ID"]],template:function(s,i){s&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoChartModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente "),t(7,"code"),e(8,"po-chart"),n(),e(9,"."),n()(),t(10,"h3",3),e(11,"Componente"),n(),t(12,"h4",4)(13,"code",5),e(14,"PoChartComponent"),n()(),t(15,"div",2)(16,"p"),e(17,"O "),t(18,"code"),e(19,"po-chart"),n(),e(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),n(),t(21,"p"),e(22,"Atrav\xE9s de suas principais propriedades \xE9 poss\xEDvel definir atributos, tais como tipo de gr\xE1fico, altura, t\xEDtulo, cores customizadas, op\xE7\xF5es para os eixos, entre outros."),n(),t(23,"p"),e(24,"O componente permite utilizar em conjunto s\xE9ries do tipo linha e coluna."),n(),t(25,"p"),e(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),t(27,"em"),e(28,"mouse"),n(),e(29," sobre o elemento."),n(),t(30,"h4"),e(31,"Guia de uso para Gr\xE1ficos"),n(),t(32,"blockquote")(33,"p"),e(34,"Veja nosso "),t(35,"a",6),e(36,"guia de uso para gr\xE1ficos"),n(),e(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores.`),n()(),t(38,"h4"),e(39,"Tokens customiz\xE1veis"),n(),t(40,"p"),e(41,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),n(),t(42,"blockquote")(43,"p"),e(44,"Para maiores informa\xE7\xF5es, acesse o guia "),t(45,"a",7),e(46,"Personalizando o Tema Padr\xE3o com Tokens CSS"),n(),e(47,"."),n()(),t(48,"table")(49,"thead")(50,"tr")(51,"th"),e(52,"Propriedade"),n(),t(53,"th"),e(54,"Descri\xE7\xE3o"),n(),t(55,"th"),e(56,"Valor Padr\xE3o"),n()()(),t(57,"tbody")(58,"tr")(59,"td")(60,"strong"),e(61,"Chart (po-chart)"),n()(),a(62,"td")(63,"td"),n(),t(64,"tr")(65,"td")(66,"code"),e(67,"--background-color-grid"),n()(),t(68,"td"),e(69,"Cor de background dos gr\xE1ficos"),n(),t(70,"td")(71,"code"),e(72,"var(--color-neutral-light-00)"),n()()(),t(73,"tr")(74,"td")(75,"code"),e(76,"--color-description-chart"),n()(),t(77,"td"),e(78,"Cor da descri\xE7\xE3o dos gr\xE1ficos"),n(),t(79,"td")(80,"code"),e(81,"var(--color-neutral-dark-70)"),n()()(),t(82,"tr")(83,"td")(84,"code"),e(85,"--font-family-description-chart"),n()(),t(86,"td"),e(87,"Fonte da descri\xE7\xE3o dos gr\xE1ficos"),n(),t(88,"td")(89,"code"),e(90,"var(--font-family-theme)"),n()()(),t(91,"tr")(92,"td")(93,"code"),e(94,"--font-size-description-chart"),n()(),t(95,"td"),e(96,"Tamanho da fonte da descri\xE7\xE3o dos gr\xE1ficos"),n(),t(97,"td")(98,"code"),e(99,"var(--font-size-sm)"),n()()(),t(100,"tr")(101,"td")(102,"code"),e(103,"--font-weight-description-chart"),n()(),t(104,"td"),e(105,"Peso da fonte da descri\xE7\xE3o dos gr\xE1ficos"),n(),t(106,"td")(107,"code"),e(108,"var(--font-weight-normal)"),n()()(),t(109,"tr")(110,"td")(111,"strong"),e(112,"Header (po-chart .po-chart-header )"),n()(),a(113,"td")(114,"td"),n(),t(115,"tr")(116,"td")(117,"code"),e(118,"--background-color"),n()(),t(119,"td"),e(120,"Cor de background do cabe\xE7alho"),n(),t(121,"td")(122,"code"),e(123,"var(--color-neutral-light-00)"),n()()(),t(124,"tr")(125,"td")(126,"code"),e(127,"--color"),n()(),t(128,"td"),e(129,"Cor da fonte do cabe\xE7alho"),n(),t(130,"td")(131,"code"),e(132,"var(--color-neutral-dark-70)"),n()()(),t(133,"tr")(134,"td")(135,"code"),e(136,"--font-family"),n()(),t(137,"td"),e(138,"Fam\xEDlia tipogr\xE1fica usada"),n(),t(139,"td")(140,"code"),e(141,"var(--font-family-theme)"),n()()(),t(142,"tr")(143,"td")(144,"code"),e(145,"--font-size-title"),n()(),t(146,"td"),e(147,"Tamanho da fonte"),n(),t(148,"td")(149,"code"),e(150,"var(--font-size-default)"),n()()(),t(151,"tr")(152,"td")(153,"code"),e(154,"--font-size-icons"),n()(),t(155,"td"),e(156,"Tamanho dos \xEDcones"),n(),t(157,"td")(158,"code"),e(159,"var(--font-size-md)"),n()()(),t(160,"tr")(161,"td")(162,"code"),e(163,"--font-weight"),n()(),t(164,"td"),e(165,"Peso da fonte"),n(),t(166,"td")(167,"code"),e(168,"var(--font-weight-bold)"),n()()(),t(169,"tr")(170,"td")(171,"strong"),e(172,"Chart (po-chart .po-chart)"),n()(),a(173,"td")(174,"td"),n(),t(175,"tr")(176,"td")(177,"code"),e(178,"--color-grid"),n()(),t(179,"td"),e(180,"Cor da linha dos gr\xE1ficos que possuem eixo"),n(),t(181,"td")(182,"code"),e(183,"var(--color-neutral-light-20)"),n()()(),t(184,"tr")(185,"td")(186,"code"),e(187,"--font-family-grid"),n()(),t(188,"td"),e(189,"Fam\xEDlia tipogr\xE1fica usada nos valores dos eixos"),n(),t(190,"td")(191,"code"),e(192,"var(--font-family-theme)"),n()()(),t(193,"tr")(194,"td")(195,"code"),e(196,"--font-size-grid"),n()(),t(197,"td"),e(198,"Tamanho da fonte usada nos valores dos eixos"),n(),t(199,"td")(200,"code"),e(201,"var(--font-size-xs)"),n()()(),t(202,"tr")(203,"td")(204,"code"),e(205,"--font-weight-grid"),n()(),t(206,"td"),e(207,"Peso da fonte usada nos valores dos eixos"),n(),t(208,"td")(209,"code"),e(210,"var(--font-weight-normal)"),n()()(),t(211,"tr")(212,"td")(213,"code"),e(214,"--color-legend"),n()(),t(215,"td"),e(216,"Cor da fonte da legenda"),n(),t(217,"td")(218,"code"),e(219,"var(--color-neutral-dark-70)"),n()()(),t(220,"tr")(221,"td")(222,"code"),e(223,"--border-radius-bar"),n()(),t(224,"td"),e(225,"Tamanho da borda nos graficos "),t(226,"code"),e(227,"Bar"),n(),e(228," e "),t(229,"code"),e(230,"Column"),n()(),t(231,"td")(232,"code"),e(233,"var(--border-radius-none)"),n()()(),t(234,"tr")(235,"td")(236,"code"),e(237,"--border-color"),n()(),t(238,"td"),e(239,"Cor da borda do gr\xE1fico nos Gr\xE1ficos "),t(240,"code"),e(241,"Donut"),n(),e(242," e "),t(243,"code"),e(244,"Pie"),n()(),t(245,"td")(246,"code"),e(247,"var(--color-neutral-light-00)"),n()()(),t(248,"tr")(249,"td")(250,"code"),e(251,"--color-hightlight-value"),n()(),t(252,"td"),e(253,"Cor do valor de destaque nos Gr\xE1ficos "),t(254,"code"),e(255,"Donut"),n(),e(256," e "),t(257,"code"),e(258,"Gauge"),n()(),t(259,"td")(260,"code"),e(261,"var(--color-neutral-dark-70)"),n()()(),t(262,"tr")(263,"td")(264,"code"),e(265,"--font-family-hightlight-value"),n()(),t(266,"td"),e(267,"Fam\xEDlia tipogr\xE1fica do valor de destaque nos Gr\xE1ficos "),t(268,"code"),e(269,"Donut"),n(),e(270," e "),t(271,"code"),e(272,"Gauge"),n()(),t(273,"td")(274,"code"),e(275,"var(--font-family-theme)"),n()()(),t(276,"tr")(277,"td")(278,"code"),e(279,"--font-weight-hightlight-value"),n()(),t(280,"td"),e(281,"Peso da fonte do valor de destaque nos Gr\xE1ficos "),t(282,"code"),e(283,"Donut"),n(),e(284," e "),t(285,"code"),e(286,"Gauge"),n()(),t(287,"td")(288,"code"),e(289,"var(--font-weight-bold)"),n()()(),t(290,"tr")(291,"td")(292,"code"),e(293,"--color-base-gauge"),n()(),t(294,"td"),e(295,"Cor da base do gr\xE1fico "),t(296,"code"),e(297,"Gauge"),n()(),t(298,"td")(299,"code"),e(300,"var(--color-neutral-light-20)"),n()()(),t(301,"tr")(302,"td")(303,"code"),e(304,"--color-gauge-pointer-color"),n()(),t(305,"td"),e(306,"Cor do ponteiro do gr\xE1fico "),t(307,"code"),e(308,"Gauge"),n()(),t(309,"td")(310,"code"),e(311,"var(--color-neutral-dark-70)"),n()()(),t(312,"tr")(313,"td")(314,"code"),e(315,"--color-chart-line-point-fill"),n()(),t(316,"td"),e(317,"Cor de dentro do c\xEDrculo dos gr\xE1ficos "),t(318,"code"),e(319,"Line"),n(),e(320," e "),t(321,"code"),e(322,"Area"),n()(),t(323,"td")(324,"code"),e(325,"var(--color-neutral-light-00)"),n()()(),t(326,"tr")(327,"td")(328,"strong"),e(329,"Wrapper (.po-chart-container-gauge)"),n()(),a(330,"td")(331,"td"),n(),t(332,"tr")(333,"td")(334,"code"),e(335,"--background-color-container-gauge"),n()(),t(336,"td"),e(337,"Cor de background do container do gauge"),n(),t(338,"td")(339,"code"),e(340,"var(--color-neutral-light-00)"),n()()()()()(),t(341,"div",8)(342,"h4",9),e(343,"Seletor"),n(),t(344,"pre",10),e(345,`<po-chart
    p-categories="Array<string>"
    p-custom-actions="Array<PoPopupAction>"
    p-data-label="PoChartDataLabel"
    p-height="number"
    p-literals="PoChartLiterals"
    p-options="PoChartOptions"
    p-series="Array<PoChartSerie>"
    (p-series-click)="EventEmitter"
    (p-series-hover)="EventEmitter"
    p-title="string"
    p-type="PoChartType"
    p-value-gauge-multiple="number" >
</po-chart>
`),n()(),t(346,"h4",11),e(347,"Propriedades"),n(),t(348,"table",12)(349,"tr",13)(350,"th",14),e(351,"Nome"),n(),t(352,"th",14),e(353,"Tipo"),n(),t(354,"th",14),e(355,"Padr\xE3o"),n(),t(356,"th",14),e(357,"Descri\xE7\xE3o"),n()(),t(358,"tr",15)(359,"td",16)(360,"div",17)(361,"span",18),e(362," p-categories"),a(363,"br"),n()()(),t(364,"td",19)(365,"code",20),e(366,"Array<string>"),n()(),t(367,"td",21),e(368,"-"),n(),t(369,"td",22)(370,"em")(371,"strong"),e(372,"(opcional)"),n()(),t(373,"p"),e(374,"Define os nomes das categorias que ser\xE3o plotadas no eixo X do gr\xE1fico caso seja do tipo "),t(375,"code"),e(376,"bar"),n(),e(377,", ou ent\xE3o nos eixos Y do grid de gr\xE1ficos dos tipos "),t(378,"code"),e(379,"area"),n(),e(380,", "),t(381,"code"),e(382,"columnn"),n(),e(383," e "),t(384,"code"),e(385,"line"),n(),e(386,"."),n(),t(387,"blockquote")(388,"p"),e(389,"Gr\xE1ficos do tipo "),t(390,"code"),e(391,"bar"),n(),e(392," dimensionam a \xE1rea do gr\xE1fico de acordo com a largura do maior texto de categorias. No entanto, \xE9 uma boa pr\xE1tica optar por palavras curtas para que a leitura do gr\xE1fico n\xE3o seja prejudicada."),n()(),t(393,"blockquote")(394,"p"),e(395,"Caso n\xE3o seja especificado um valor para a categoria, ser\xE1 plotado um h\xEDfen na categoria referente a cada s\xE9rie."),n()()()(),t(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),e(400," p-custom-actions"),a(401,"br"),n()()(),t(402,"td",19)(403,"code",23),e(404,"Array<PoPopupAction>"),n()(),t(405,"td",21),e(406,"-"),n(),t(407,"td",22)(408,"em")(409,"strong"),e(410,"(opcional)"),n()(),t(411,"p"),e(412,"Essa propriedade permite que o desenvolvedor adicione a\xE7\xF5es customizadas no popup do header, oferecendo mais flexibilidade e controle sobre as intera\xE7\xF5es do componente."),n()()(),t(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),e(417," p-data-label"),a(418,"br"),n()()(),t(419,"td",19)(420,"code",24),e(421,"PoChartDataLabel"),n()(),t(422,"td",21),e(423,"-"),n(),t(424,"td",22)(425,"em")(426,"strong"),e(427,"(opcional)"),n()(),t(428,"p"),e(429,"Permite configurar as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no gr\xE1fico."),n(),t(430,"p"),e(431,"Essa configura\xE7\xE3o possibilita fixar os valores das s\xE9ries diretamente no gr\xE1fico, alterando o comportamento visual:"),n(),t(432,"ul")(433,"li"),e(434,"Os valores das s\xE9ries permanecem vis\xEDveis, sem a necessidade de hover."),n(),t(435,"li"),e(436,"O "),t(437,"em"),e(438,"tooltip"),n(),e(439," n\xE3o ser\xE1 exibido."),n(),t(440,"li"),e(441,"Os marcadores ("),t(442,"em"),e(443,"bullets"),n(),e(444,") ter\xE3o seu estilo ajustado."),n(),t(445,"li"),e(446,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),n()(),t(447,"blockquote")(448,"p"),e(449,"Dispon\xEDvel apenas para gr\xE1ficos do tipo "),t(450,"code"),e(451,"line"),n(),e(452,"."),n()(),t(453,"h4"),e(454,"Exemplo de utiliza\xE7\xE3o:"),n(),t(455,"pre")(456,"code",25),e(457,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),n()()()(),t(458,"tr",15)(459,"td",16)(460,"div",17)(461,"span",18),e(462," p-height"),a(463,"br"),n()()(),t(464,"td",19)(465,"code",26),e(466,"number"),n()(),t(467,"td",21)(468,"p")(469,"code"),e(470,"400"),n()()(),t(471,"td",22)(472,"em")(473,"strong"),e(474,"(opcional)"),n()(),t(475,"p"),e(476,"Define a altura do gr\xE1fico em px."),n(),t(477,"blockquote")(478,"p"),e(479,"No caso do tipo "),t(480,"code"),e(481,"Gauge"),n(),e(482,", o valor padr\xE3o \xE9 "),t(483,"code"),e(484,"300"),n(),e(485," e esse \xE9 seu valor minimo aceito. Nos outros tipos, o valor m\xEDnimo aceito nesta propriedade \xE9 200."),n()()()(),t(486,"tr",15)(487,"td",16)(488,"div",17)(489,"span",18),e(490," p-literals"),a(491,"br"),n()()(),t(492,"td",19)(493,"code",27),e(494,"PoChartLiterals"),n()(),t(495,"td",21),e(496,"-"),n(),t(497,"td",22)(498,"em")(499,"strong"),e(500,"(opcional)"),n()(),t(501,"p"),e(502,"Objeto com as literais usadas no "),t(503,"code"),e(504,"po-chart"),n(),e(505,"."),n(),t(506,"p"),e(507,"Para utilizar basta passar a literal que deseja customizar:"),n(),t(508,"pre")(509,"code"),e(510,`const customLiterals: PoChartLiterals = {
  downloadCSV: 'Obter CSV',
};
`),n()(),t(511,"p"),e(512,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),n(),t(513,"pre")(514,"code"),e(515,`<po-chart
  [p-literals]="customLiterals">
</po-chart>
`),n()(),t(516,"blockquote")(517,"p"),e(518,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(519,"a",28)(520,"code"),e(521,"PoI18nService"),n()(),e(522," ou do browser."),n()()()(),t(523,"tr",15)(524,"td",16)(525,"div",17)(526,"span",18),e(527," p-options"),a(528,"br"),n()()(),t(529,"td",19)(530,"code",29),e(531,"PoChartOptions"),n()(),t(532,"td",21),e(533,"-"),n(),t(534,"td",22)(535,"em")(536,"strong"),e(537,"(opcional)"),n()(),t(538,"p"),e(539,"Objeto com as configura\xE7\xF5es usadas no "),t(540,"code"),e(541,"po-chart"),n(),e(542,"."),n(),t(543,"p"),e(544,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),t(545,"em"),e(546,"axis"),n(),e(547,") para os gr\xE1ficos dos tipos "),t(548,"code"),e(549,"area"),n(),e(550,", "),t(551,"code"),e(552,"line"),n(),e(553,", "),t(554,"code"),e(555,"column"),n(),e(556," e "),t(557,"code"),e(558,"bar"),n(),e(559," da seguinte forma:"),n(),t(560,"pre")(561,"code"),e(562,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),n()()()(),t(563,"tr",15)(564,"td",16)(565,"div",17)(566,"span",18),e(567," p-series"),a(568,"br"),n()()(),t(569,"td",19)(570,"code",30),e(571,"Array<PoChartSerie>"),n()(),t(572,"td",21),e(573,"-"),n(),t(574,"td",22)(575,"p"),e(576,"Define os elementos do gr\xE1fico que ser\xE3o criados dinamicamente."),n()()(),t(577,"tr",15)(578,"td",16)(579,"div",31)(580,"span",32),e(581," (p-series-click)"),a(582,"br"),n()()(),t(583,"td",19)(584,"code",33),e(585,"EventEmitter"),n()(),t(586,"td",21),e(587,"-"),n(),t(588,"td",22)(589,"em")(590,"strong"),e(591,"(opcional)"),n()(),t(592,"p"),e(593,"Evento executado quando o usu\xE1rio clicar sobre um elemento do gr\xE1fico."),n(),t(594,"p"),e(595,"O evento emitir\xE1 o seguinte par\xE2metro:"),n(),t(596,"ul")(597,"li")(598,"em"),e(599,"donut"),n(),e(600," e "),t(601,"em"),e(602,"pie"),n(),e(603,": um objeto contendo a categoria e valor da s\xE9rie."),n(),t(604,"li")(605,"em"),e(606,"area"),n(),e(607,", "),t(608,"em"),e(609,"line"),n(),e(610,", "),t(611,"em"),e(612,"column"),n(),e(613," e "),t(614,"em"),e(615,"bar"),n(),e(616,": um objeto contendo o nome da s\xE9rie, valor e categoria do eixo do gr\xE1fico."),n()()()(),t(617,"tr",15)(618,"td",16)(619,"div",31)(620,"span",32),e(621," (p-series-hover)"),a(622,"br"),n()()(),t(623,"td",19)(624,"code",33),e(625,"EventEmitter"),n()(),t(626,"td",21),e(627,"-"),n(),t(628,"td",22)(629,"em")(630,"strong"),e(631,"(opcional)"),n()(),t(632,"p"),e(633,"Evento executado quando o usu\xE1rio passar o "),t(634,"em"),e(635,"mouse"),n(),e(636," sobre um elemento do gr\xE1fico."),n(),t(637,"p"),e(638,"O evento emitir\xE1 o seguinte par\xE2metro de acordo com o tipo de gr\xE1fico:"),n(),t(639,"ul")(640,"li")(641,"em"),e(642,"donut"),n(),e(643," e "),t(644,"em"),e(645,"pie"),n(),e(646,": um objeto contendo a categoria e valor da s\xE9rie."),n(),t(647,"li")(648,"em"),e(649,"area"),n(),e(650,", "),t(651,"em"),e(652,"line"),n(),e(653,", "),t(654,"em"),e(655,"column"),n(),e(656," e "),t(657,"em"),e(658,"bar"),n(),e(659,": um objeto contendo a categoria, valor da s\xE9rie e categoria do eixo do gr\xE1fico."),n()()()(),t(660,"tr",15)(661,"td",16)(662,"div",17)(663,"span",18),e(664," p-title"),a(665,"br"),n()()(),t(666,"td",19)(667,"code",34),e(668,"string"),n()(),t(669,"td",21),e(670,"-"),n(),t(671,"td",22)(672,"em")(673,"strong"),e(674,"(opcional)"),n()(),t(675,"p"),e(676,"Define o t\xEDtulo do gr\xE1fico."),n()()(),t(677,"tr",15)(678,"td",16)(679,"div",17)(680,"span",18),e(681," p-type"),a(682,"br"),n()()(),t(683,"td",19)(684,"code",35),e(685,"PoChartType"),n()(),t(686,"td",21),e(687,"-"),n(),t(688,"td",22)(689,"em")(690,"strong"),e(691,"(opcional)"),n()(),t(692,"p"),e(693,"Define o tipo de gr\xE1fico."),n(),t(694,"p"),e(695,"\xC9 poss\xEDvel tamb\xE9m combinar gr\xE1ficos dos tipos linha e coluna. Para isso, opte pela declara\xE7\xE3o de "),t(696,"code"),e(697,"type"),n(),e(698," conforme a interface "),t(699,"code"),e(700,"PoChartSerie"),n(),e(701,"."),n(),t(702,"blockquote")(703,"p"),e(704,"Note que, se houver declara\xE7\xE3o de tipo de gr\xE1fico tanto em "),t(705,"code"),e(706,"p-type"),n(),e(707," quanto em "),t(708,"code"),e(709,"PochartSerie.type"),n(),e(710,", o valor "),t(711,"code"),e(712,"{ type }"),n(),e(713," da primeira s\xE9rie anular\xE1 o valor definido em "),t(714,"code"),e(715,"p-type"),n(),e(716,"."),n()(),t(717,"p"),e(718,"Se n\xE3o passado valor, o padr\xE3o ser\xE1 relativo \xE0 primeira s\xE9rie passada em "),t(719,"code"),e(720,"p-series"),n(),e(721,":"),n(),t(722,"ul")(723,"li"),e(724,"Se "),t(725,"code"),e(726,"p-series = [{ data: [1,2,3] }]"),n(),e(727,": ser\xE1 "),t(728,"code"),e(729,"PoChartType.Column"),n(),e(730,"."),n(),t(731,"li"),e(732,"Se "),t(733,"code"),e(734,"p-series = [{ data: 1 }]"),n(),e(735,": ser\xE1 "),t(736,"code"),e(737,"PoChartType.Pie"),n(),e(738,"."),n()(),t(739,"blockquote")(740,"p"),e(741,"Veja os valores v\xE1lidos no "),t(742,"em"),e(743,"enum"),n(),t(744,"code"),e(745,"PoChartType"),n(),e(746,"."),n()()()(),t(747,"tr",15)(748,"td",16)(749,"div",17)(750,"span",18),e(751," p-value-gauge-multiple"),a(752,"br"),n()()(),t(753,"td",19)(754,"code",26),e(755,"number"),n()(),t(756,"td",21),e(757,"-"),n(),t(758,"td",22)(759,"em")(760,"strong"),e(761,"(opcional)"),n()(),t(762,"p"),e(763,"Define o valor do gr\xE1fico do tipo "),t(764,"code"),e(765,"Gauge"),n(),e(766," quando utliza as propriedades "),t(767,"code"),e(768,"From"),n(),t(769,"code"),e(770,"To"),n(),e(771,"."),n()()()(),t(772,"h3"),e(773,"Interfaces"),n(),t(774,"h4",36)(775,"code",5),e(776,"PoChartAxisOptions"),n()(),t(777,"div",2)(778,"p")(779,"em"),e(780,"Interface"),n(),e(781," que define os eixos do grid."),n()(),t(782,"h4",11),e(783,"Propriedades"),n(),t(784,"table",12)(785,"tr",13)(786,"th",14),e(787,"Nome"),n(),t(788,"th",14),e(789,"Tipo"),n(),t(790,"th",14),e(791,"Descri\xE7\xE3o"),n()(),t(792,"tr",15)(793,"td",16)(794,"div",17)(795,"span",18),e(796," gridLines"),a(797,"br"),n()()(),t(798,"td",19)(799,"code",26),e(800,"number"),n()(),t(801,"td",22)(802,"em")(803,"strong"),e(804,"(opcional)"),n()(),t(805,"p"),e(806,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),t(807,"code"),e(808,"Area"),n(),e(809,", "),t(810,"code"),e(811,"Line"),n(),e(812," e "),t(813,"code"),e(814,"Column"),n(),e(815,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),t(816,"code"),e(817,"Bar"),n(),e(818,", tratar\xE1 as linhas verticais (eixo Y)."),n(),t(819,"p"),e(820,"A propriedade cont\xE9m as seguintes diretrizes para seu correto funcionamento:"),n(),t(821,"ul")(822,"li"),e(823,"Quantidade padr\xE3o de linhas: '5';"),n(),t(824,"li"),e(825,"Quantidade m\xEDnima permitida: '2';"),n()()()(),t(826,"tr",15)(827,"td",16)(828,"div",17)(829,"span",18),e(830," labelType"),a(831,"br"),n()()(),t(832,"td",19)(833,"code",37),e(834,"PoChartLabelFormat"),n()(),t(835,"td",22)(836,"em")(837,"strong"),e(838,"(opcional)"),n()(),t(839,"p"),e(840,"Define o tipo do label e a formata\xE7\xE3o exibida no eixo de valor."),n()()(),t(841,"tr",15)(842,"td",16)(843,"div",17)(844,"span",18),e(845," maxRange"),a(846,"br"),n()()(),t(847,"td",19)(848,"code",26),e(849,"number"),n()(),t(850,"td",22)(851,"em")(852,"strong"),e(853,"(opcional)"),n()(),t(854,"p"),e(855,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.`),n(),t(856,"blockquote")(857,"p"),e(858,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),n()()()(),t(859,"tr",15)(860,"td",16)(861,"div",17)(862,"span",18),e(863," minRange"),a(864,"br"),n()()(),t(865,"td",19)(866,"code",26),e(867,"number"),n()(),t(868,"td",22)(869,"em")(870,"strong"),e(871,"(opcional)"),n()(),t(872,"p"),e(873,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.`),n(),t(874,"blockquote")(875,"p"),e(876,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),n()()()(),t(877,"tr",15)(878,"td",16)(879,"div",17)(880,"span",18),e(881," paddingBottom"),a(882,"br"),n()()(),t(883,"td",19)(884,"code",26),e(885,"number"),n()(),t(886,"td",22)(887,"em")(888,"strong"),e(889,"(opcional)"),n()(),t(890,"p"),e(891,"Permite aumentar ou diminuir o espa\xE7o inferior do gr\xE1fico."),n()()(),t(892,"tr",15)(893,"td",16)(894,"div",17)(895,"span",18),e(896," paddingLeft"),a(897,"br"),n()()(),t(898,"td",19)(899,"code",26),e(900,"number"),n()(),t(901,"td",22)(902,"em")(903,"strong"),e(904,"(opcional)"),n()(),t(905,"p"),e(906,"Permite aumentar ou diminuir o espa\xE7o esquerdo do gr\xE1fico."),n()()(),t(907,"tr",15)(908,"td",16)(909,"div",17)(910,"span",18),e(911," paddingRight"),a(912,"br"),n()()(),t(913,"td",19)(914,"code",26),e(915,"number"),n()(),t(916,"td",22)(917,"em")(918,"strong"),e(919,"(opcional)"),n()(),t(920,"p"),e(921,"Permite aumentar ou diminuir o espa\xE7o direito do gr\xE1fico."),n()()(),t(922,"tr",15)(923,"td",16)(924,"div",17)(925,"span",18),e(926," rotateLegend"),a(927,"br"),n()()(),t(928,"td",19)(929,"code",26),e(930,"number"),n()(),t(931,"td",22)(932,"em")(933,"strong"),e(934,"(opcional)"),n()(),t(935,"p"),e(936,`Define o \xE2ngulo de rota\xE7\xE3o da legenda do gr\xE1fico.
Aceita valores entre -90 e 90 graus, onde:`),n(),t(937,"ul")(938,"li"),e(939,"Valores negativos giram a legenda para a esquerda."),n(),t(940,"li"),e(941,"Valores positivos giram a legenda para a direita."),n()(),t(942,"p"),e(943,"Se n\xE3o for definido, a legenda ser\xE1 exibida sem rota\xE7\xE3o."),n()()(),t(944,"tr",15)(945,"td",16)(946,"div",17)(947,"span",18),e(948," showAxisDetails"),a(949,"br"),n()()(),t(950,"td",19)(951,"code",38),e(952,"boolean"),n()(),t(953,"td",22)(954,"em")(955,"strong"),e(956,"(opcional)"),n()(),t(957,"p"),e(958,"Exibe a linha de detalhes que acompanha o mouse"),n()()(),t(959,"tr",15)(960,"td",16)(961,"div",17)(962,"span",18),e(963," showXAxis"),a(964,"br"),n()()(),t(965,"td",19)(966,"code",38),e(967,"boolean"),n()(),t(968,"td",22)(969,"em")(970,"strong"),e(971,"(opcional)"),n()(),t(972,"p"),e(973,"Exibe a linha do eixo X"),n()()(),t(974,"tr",15)(975,"td",16)(976,"div",17)(977,"span",18),e(978," showYAxis"),a(979,"br"),n()()(),t(980,"td",19)(981,"code",38),e(982,"boolean"),n()(),t(983,"td",22)(984,"em")(985,"strong"),e(986,"(opcional)"),n()(),t(987,"p"),e(988,"Exibe a linha do eixo Y"),n()()()(),t(989,"h4",36)(990,"code",5),e(991,"PoChartHeaderOptions"),n()(),t(992,"div",2)(993,"p")(994,"em"),e(995,"Interface"),n(),e(996," para configura\xE7\xE3o das a\xE7\xF5es dispon\xEDveis no cabe\xE7alho."),n()(),t(997,"h4",11),e(998,"Propriedades"),n(),t(999,"table",12)(1e3,"tr",13)(1001,"th",14),e(1002,"Nome"),n(),t(1003,"th",14),e(1004,"Tipo"),n(),t(1005,"th",14),e(1006,"Descri\xE7\xE3o"),n()(),t(1007,"tr",15)(1008,"td",16)(1009,"div",17)(1010,"span",18),e(1011," hideExpand"),a(1012,"br"),n()()(),t(1013,"td",19)(1014,"code",38),e(1015,"boolean"),n()(),t(1016,"td",22)(1017,"em")(1018,"strong"),e(1019,"(opcional)"),n()(),t(1020,"p"),e(1021,"Define se o bot\xE3o respons\xE1vel por expandir o gr\xE1fico deve ser ocultado."),n()()(),t(1022,"tr",15)(1023,"td",16)(1024,"div",17)(1025,"span",18),e(1026," hideExportCsv"),a(1027,"br"),n()()(),t(1028,"td",19)(1029,"code",38),e(1030,"boolean"),n()(),t(1031,"td",22)(1032,"em")(1033,"strong"),e(1034,"(opcional)"),n()(),t(1035,"p"),e(1036,"Define se a op\xE7\xE3o de exporta\xE7\xE3o do gr\xE1fico em formato CSV deve ser ocultada."),n()()(),t(1037,"tr",15)(1038,"td",16)(1039,"div",17)(1040,"span",18),e(1041," hideExportImage"),a(1042,"br"),n()()(),t(1043,"td",19)(1044,"code",38),e(1045,"boolean"),n()(),t(1046,"td",22)(1047,"em")(1048,"strong"),e(1049,"(opcional)"),n()(),t(1050,"p"),e(1051,"Define se a op\xE7\xE3o de exporta\xE7\xE3o do gr\xE1fico nos formatos JPG e PNG deve ser ocultada."),n()()(),t(1052,"tr",15)(1053,"td",16)(1054,"div",17)(1055,"span",18),e(1056," hideTableDetails"),a(1057,"br"),n()()(),t(1058,"td",19)(1059,"code",38),e(1060,"boolean"),n()(),t(1061,"td",22)(1062,"em")(1063,"strong"),e(1064,"(opcional)"),n()(),t(1065,"p"),e(1066,"Define se o bot\xE3o respons\xE1vel por exibir os detalhes do gr\xE1fico em formato de tabela deve ser ocultado."),n()()()(),t(1067,"h4",36)(1068,"code",5),e(1069,"PoChartLiterals"),n()(),t(1070,"div",2)(1071,"p"),e(1072,"Interface para defini\xE7\xE3o dos literais usadas no "),t(1073,"code"),e(1074,"po-chart"),n(),e(1075,"."),n()(),t(1076,"h4",11),e(1077,"Propriedades"),n(),t(1078,"table",12)(1079,"tr",13)(1080,"th",14),e(1081,"Nome"),n(),t(1082,"th",14),e(1083,"Tipo"),n(),t(1084,"th",14),e(1085,"Descri\xE7\xE3o"),n()(),t(1086,"tr",15)(1087,"td",16)(1088,"div",17)(1089,"span",18),e(1090," category"),a(1091,"br"),n()()(),t(1092,"td",19)(1093,"code",34),e(1094,"string"),n()(),t(1095,"td",22)(1096,"em")(1097,"strong"),e(1098,"(opcional)"),n()(),t(1099,"p"),e(1100,"Texto da primeira coluna da tabela no gr\xE1fico do tipo "),t(1101,"code"),e(1102,"Bar"),n(),e(1103,"."),n()()(),t(1104,"tr",15)(1105,"td",16)(1106,"div",17)(1107,"span",18),e(1108," downloadCSV"),a(1109,"br"),n()()(),t(1110,"td",19)(1111,"code",34),e(1112,"string"),n()(),t(1113,"td",22)(1114,"em")(1115,"strong"),e(1116,"(opcional)"),n()(),t(1117,"p"),e(1118,"Texto exibido para a a\xE7\xE3o de download de dados em formato CSV."),n()()(),t(1119,"tr",15)(1120,"td",16)(1121,"div",17)(1122,"span",18),e(1123," exportCSV"),a(1124,"br"),n()()(),t(1125,"td",19)(1126,"code",34),e(1127,"string"),n()(),t(1128,"td",22)(1129,"em")(1130,"strong"),e(1131,"(opcional)"),n()(),t(1132,"p"),e(1133,"Texto do bot\xE3o para exportar o gr\xE1fico em CSV."),n()()(),t(1134,"tr",15)(1135,"td",16)(1136,"div",17)(1137,"span",18),e(1138," exportJPG"),a(1139,"br"),n()()(),t(1140,"td",19)(1141,"code",34),e(1142,"string"),n()(),t(1143,"td",22)(1144,"em")(1145,"strong"),e(1146,"(opcional)"),n()(),t(1147,"p"),e(1148,"Texto do bot\xE3o para exportar o gr\xE1fico como imagem JPG."),n()()(),t(1149,"tr",15)(1150,"td",16)(1151,"div",17)(1152,"span",18),e(1153," exportPNG"),a(1154,"br"),n()()(),t(1155,"td",19)(1156,"code",34),e(1157,"string"),n()(),t(1158,"td",22)(1159,"em")(1160,"strong"),e(1161,"(opcional)"),n()(),t(1162,"p"),e(1163,"Texto do bot\xE3o para exportar o gr\xE1fico como imagem PNG."),n()()(),t(1164,"tr",15)(1165,"td",16)(1166,"div",17)(1167,"span",18),e(1168," item"),a(1169,"br"),n()()(),t(1170,"td",19)(1171,"code",34),e(1172,"string"),n()(),t(1173,"td",22)(1174,"em")(1175,"strong"),e(1176,"(opcional)"),n()(),t(1177,"p"),e(1178,"Texto dos t\xEDtulos das colunas "),t(1179,"code"),e(1180,"Gauge"),n(),e(1181," e n\xE3o possui label."),n()()(),t(1182,"tr",15)(1183,"td",16)(1184,"div",17)(1185,"span",18),e(1186," serie"),a(1187,"br"),n()()(),t(1188,"td",19)(1189,"code",34),e(1190,"string"),n()(),t(1191,"td",22)(1192,"em")(1193,"strong"),e(1194,"(opcional)"),n()(),t(1195,"p"),e(1196,"Texto da primeira coluna da tabela em todos os gr\xE1ficos com exce\xE7\xE3o do "),t(1197,"code"),e(1198,"Bar"),n(),e(1199," e "),t(1200,"code"),e(1201,"Gauge"),n(),e(1202,"."),n()()(),t(1203,"tr",15)(1204,"td",16)(1205,"div",17)(1206,"span",18),e(1207," value"),a(1208,"br"),n()()(),t(1209,"td",19)(1210,"code",34),e(1211,"string"),n()(),t(1212,"td",22)(1213,"em")(1214,"strong"),e(1215,"(opcional)"),n()(),t(1216,"p"),e(1217,"Texto da primeira coluna da tabela quando o gr\xE1fico \xE9 do tipo "),t(1218,"code"),e(1219,"Gauge"),n(),e(1220,"."),n()()()(),t(1221,"h4",36)(1222,"code",5),e(1223,"PoChartOptions"),n()(),t(1224,"div",2)(1225,"p")(1226,"em"),e(1227,"Interface"),n(),e(1228," para configura\xE7\xF5es dos elementos do gr\xE1fico."),n()(),t(1229,"h4",11),e(1230,"Propriedades"),n(),t(1231,"table",12)(1232,"tr",13)(1233,"th",14),e(1234,"Nome"),n(),t(1235,"th",14),e(1236,"Tipo"),n(),t(1237,"th",14),e(1238,"Descri\xE7\xE3o"),n()(),t(1239,"tr",15)(1240,"td",16)(1241,"div",17)(1242,"span",18),e(1243," axis"),a(1244,"br"),n()()(),t(1245,"td",19)(1246,"code",39),e(1247,"PoChartAxisOptions"),n()(),t(1248,"td",22)(1249,"em")(1250,"strong"),e(1251,"(opcional)"),n()(),t(1252,"p"),e(1253,"Define um objeto do tipo "),t(1254,"code"),e(1255,"PoChartAxisOptions"),n(),e(1256," para configura\xE7\xE3o dos eixos."),n()()(),t(1257,"tr",15)(1258,"td",16)(1259,"div",17)(1260,"span",18),e(1261," borderRadius"),a(1262,"br"),n()()(),t(1263,"td",19)(1264,"code",26),e(1265,"number"),n()(),t(1266,"td",22)(1267,"em")(1268,"strong"),e(1269,"(opcional)"),n()(),t(1270,"p"),e(1271,"Define borda entre os itens do gr\xE1fico. V\xE1lido para os gr\xE1ficos "),t(1272,"code"),e(1273,"Donut"),n(),e(1274,", "),t(1275,"code"),e(1276,"Pie"),n(),e(1277,"."),n(),t(1278,"blockquote")(1279,"p"),e(1280,"Valores v\xE1lidos entre 0 e 100,"),n()()()(),t(1281,"tr",15)(1282,"td",16)(1283,"div",17)(1284,"span",18),e(1285," bottomDataZoom"),a(1286,"br"),n()()(),t(1287,"td",19)(1288,"code",38),e(1289,"boolean "),n(),t(1290,"code",26),e(1291," number"),n()(),t(1292,"td",22)(1293,"em")(1294,"strong"),e(1295,"(opcional)"),n()(),t(1296,"p"),e(1297,"Define a dist\xE2ncia inferior do componente DataZoom."),n(),t(1298,"p"),e(1299,"Esta propriedade aceita os seguintes valores:"),n(),t(1300,"ul")(1301,"li")(1302,"p")(1303,"code"),e(1304,"false"),n(),e(1305," (padr\xE3o): n\xE3o aplica ajustes."),n()(),t(1306,"li")(1307,"p")(1308,"code"),e(1309,"true"),n(),e(1310,": aplica um valor autom\xE1tico com base no posicionamento da legenda:"),n(),t(1311,"ul")(1312,"li")(1313,"code"),e(1314,"8"),n(),e(1315," pixels quando o DataZoom estiver habilitado e n\xE3o houver legenda, ou quando a legenda estiver posicionada no topo."),n(),t(1316,"li")(1317,"code"),e(1318,"32"),n(),e(1319," pixels quando o DataZoom estiver habilitado e a legenda estiver posicionada na parte inferior."),n()()(),t(1320,"li")(1321,"p")(1322,"code"),e(1323,"number"),n(),e(1324,": aplica o valor num\xE9rico informado como dist\xE2ncia inferior. Este valor tem prioridade sobre a configura\xE7\xE3o booleana."),n()()(),t(1325,"blockquote")(1326,"p"),e(1327,"Esta configura\xE7\xE3o \xE9 considerada apenas quando o DataZoom estiver habilitado ("),t(1328,"code"),e(1329,"dataZoom: true"),n(),e(1330,")."),n()()()(),t(1331,"tr",15)(1332,"td",16)(1333,"div",17)(1334,"span",18),e(1335," dataZoom"),a(1336,"br"),n()()(),t(1337,"td",19)(1338,"code",38),e(1339,"boolean"),n()(),t(1340,"td",22)(1341,"em")(1342,"strong"),e(1343,"(opcional)"),n()(),t(1344,"p"),e(1345,"Permite aplicar zoom ao gr\xE1fico com o scroll do mouse;"),n()()(),t(1346,"tr",15)(1347,"td",16)(1348,"div",17)(1349,"span",18),e(1350," descriptionChart"),a(1351,"br"),n()()(),t(1352,"td",19)(1353,"code",34),e(1354,"string"),n()(),t(1355,"td",22)(1356,"em")(1357,"strong"),e(1358,"(opcional)"),n()(),t(1359,"p"),e(1360,"Define a descri\xE7\xE3o do gr\xE1fico exibido acima do gr\xE1fico."),n()()(),t(1361,"tr",15)(1362,"td",16)(1363,"div",17)(1364,"span",18),e(1365," fillPoints"),a(1366,"br"),n()()(),t(1367,"td",19)(1368,"code",38),e(1369,"boolean"),n()(),t(1370,"td",22)(1371,"em")(1372,"strong"),e(1373,"(opcional)"),n()(),t(1374,"p"),e(1375,`Define se os pontos do gr\xE1fico ser\xE3o preenchidos.
Quando true, os pontos s\xE3o totalmente coloridos. Quando false, apenas a borda dos pontos ser\xE1 exibida, mantendo o interior transparente.`),n(),t(1376,"blockquote")(1377,"p"),e(1378,"Esta propriedade \xE9 utiliz\xE1vel para os gr\xE1ficos dos tipos "),t(1379,"code"),e(1380,"Area"),n(),e(1381," e "),t(1382,"code"),e(1383,"Line"),n(),e(1384,"."),n()()()(),t(1385,"tr",15)(1386,"td",16)(1387,"div",17)(1388,"span",18),e(1389," firstColumnName"),a(1390,"br"),n()()(),t(1391,"td",19)(1392,"code",34),e(1393,"string"),n()(),t(1394,"td",22)(1395,"em")(1396,"strong"),e(1397,"(opcional)"),n()(),t(1398,"p"),e(1399,"Valor que permite customizar o nome da "),t(1400,"code"),e(1401,"TH"),n(),e(1402," da primeira coluna da tabela descritiva."),n()()(),t(1403,"tr",15)(1404,"td",16)(1405,"div",17)(1406,"span",18),e(1407," header"),a(1408,"br"),n()()(),t(1409,"td",19)(1410,"code",40),e(1411,"PoChartHeaderOptions"),n()(),t(1412,"td",22)(1413,"em")(1414,"strong"),e(1415,"(opcional)"),n()(),t(1416,"p"),e(1417,"Define um objeto do tipo "),t(1418,"code"),e(1419,"PoChartHeaderOptions"),n(),e(1420," para configurar a exibi\xE7\xE3o de bot\xF5es no cabe\xE7alho do gr\xE1fico."),n()()(),t(1421,"tr",15)(1422,"td",16)(1423,"div",17)(1424,"span",18),e(1425," innerRadius"),a(1426,"br"),n()()(),t(1427,"td",19)(1428,"code",26),e(1429,"number"),n()(),t(1430,"td",22)(1431,"em")(1432,"strong"),e(1433,"(opcional)"),n()(),t(1434,"p"),e(1435,"Define o di\xE2metro, em valor percentual entre "),t(1436,"code"),e(1437,"0"),n(),e(1438," e "),t(1439,"code"),e(1440,"100"),n(),e(1441,", da \xE1rea central para gr\xE1ficos do tipo "),t(1442,"code"),e(1443,"donut"),n(),e(1444,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),t(1445,"code"),e(1446,"40px"),n(),e(1447,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),n()()(),t(1448,"tr",15)(1449,"td",16)(1450,"div",17)(1451,"span",18),e(1452," legend"),a(1453,"br"),n()()(),t(1454,"td",19)(1455,"code",38),e(1456,"boolean"),n()(),t(1457,"td",22)(1458,"em")(1459,"strong"),e(1460,"(opcional)"),n()(),t(1461,"p"),e(1462,"Define a exibi\xE7\xE3o da legenda do gr\xE1fico. Valor padr\xE3o \xE9 "),t(1463,"code"),e(1464,"true"),n()()()(),t(1465,"tr",15)(1466,"td",16)(1467,"div",17)(1468,"span",18),e(1469," legendPosition"),a(1470,"br"),n()()(),t(1471,"td",19)(1472,"code",41),e(1473,"'left' "),n(),t(1474,"code",42),e(1475," 'center' "),n(),t(1476,"code",43),e(1477," 'right'"),n()(),t(1478,"td",22)(1479,"em")(1480,"strong"),e(1481,"(opcional)"),n()(),t(1482,"p"),e(1483,"Define o alinhamento horizontal da legenda."),n(),t(1484,"blockquote")(1485,"p"),e(1486,"Propriedade inv\xE1lida para o gr\xE1fico do tipo "),t(1487,"code"),e(1488,"Gauge"),n(),e(1489,"."),n()()()(),t(1490,"tr",15)(1491,"td",16)(1492,"div",17)(1493,"span",18),e(1494," legendVerticalPosition"),a(1495,"br"),n()()(),t(1496,"td",19)(1497,"code",44),e(1498,"'top' "),n(),t(1499,"code",45),e(1500," 'bottom'"),n()(),t(1501,"td",22)(1502,"em")(1503,"strong"),e(1504,"(opcional)"),n()(),t(1505,"p"),e(1506,"Define a posi\xE7\xE3o vertical da legenda no gr\xE1fico."),n(),t(1507,"blockquote")(1508,"p"),e(1509,"Quando utilizada com o valor "),t(1510,"code"),e(1511,"top"),n(),e(1512,", recomenda-se configurar tamb\xE9m a propriedade "),t(1513,"code"),e(1514,"bottomDataZoom"),n(),e(1515," caso o "),t(1516,"code"),e(1517,"dataZoom"),n(),e(1518,` esteja habilitado, para evitar sobreposi\xE7\xE3o entre os elementos.
Propriedade inv\xE1lida para o gr\xE1fico do tipo `),t(1519,"code"),e(1520,"Gauge"),n(),e(1521,"."),n()()()(),t(1522,"tr",15)(1523,"td",16)(1524,"div",17)(1525,"span",18),e(1526," pointer"),a(1527,"br"),n()()(),t(1528,"td",19)(1529,"code",38),e(1530,"boolean"),n()(),t(1531,"td",22)(1532,"em")(1533,"strong"),e(1534,"(opcional)"),n()(),t(1535,"p"),e(1536,"Define a exibi\xE7\xE3o do ponteiro."),n(),t(1537,"blockquote")(1538,"p"),e(1539,"V\xE1lido para gr\xE1fico do tipo "),t(1540,"code"),e(1541,"Gauge"),n(),e(1542,"."),n()()()(),t(1543,"tr",15)(1544,"td",16)(1545,"div",17)(1546,"span",18),e(1547," rendererOption"),a(1548,"br"),n()()(),t(1549,"td",19)(1550,"code",46),e(1551,"'canvas' "),n(),t(1552,"code",47),e(1553," 'svg'"),n()(),t(1554,"td",22)(1555,"em")(1556,"strong"),e(1557,"(opcional)"),n()(),t(1558,"p"),e(1559,"Define como o gr\xE1fico ser\xE1 renderizado."),n(),t(1560,"blockquote")(1561,"p"),e(1562,"Recomenda-se n\xE3o modificar o valor da propriedade "),t(1563,"code"),e(1564,"rendererOption"),n(),e(1565," ap\xF3s a inicializa\xE7\xE3o da aplica\xE7\xE3o, uma vez que tal altera\xE7\xE3o pode ocasionar comportamentos inconsistentes na renderiza\xE7\xE3o do gr\xE1fico."),n()()()(),t(1566,"tr",15)(1567,"td",16)(1568,"div",17)(1569,"span",18),e(1570," roseType"),a(1571,"br"),n()()(),t(1572,"td",19)(1573,"code",38),e(1574,"boolean"),n()(),t(1575,"td",22)(1576,"em")(1577,"strong"),e(1578,"(opcional)"),n()(),t(1579,"p"),e(1580,"Transforma os gr\xE1ficos do tipo "),t(1581,"code"),e(1582,"Donut"),n(),e(1583," ou "),t(1584,"code"),e(1585,"Pie"),n(),e(1586," num gr\xE1fico de \xE1rea polar."),n(),t(1587,"blockquote")(1588,"p"),e(1589,"V\xE1lido para os gr\xE1ficos "),t(1590,"code"),e(1591,"Donut"),n(),e(1592," e "),t(1593,"code"),e(1594,"Pie"),n(),e(1595,"."),n()()()(),t(1596,"tr",15)(1597,"td",16)(1598,"div",17)(1599,"span",18),e(1600," showContainerGauge"),a(1601,"br"),n()()(),t(1602,"td",19)(1603,"code",38),e(1604,"boolean"),n()(),t(1605,"td",22)(1606,"em")(1607,"strong"),e(1608,"(opcional)"),n()(),t(1609,"p"),e(1610,"Esconde a estiliza\xE7\xE3o do container em volta do gr\xE1fico."),n(),t(1611,"blockquote")(1612,"p"),e(1613,"V\xE1lido para gr\xE1fico do tipo "),t(1614,"code"),e(1615,"Gauge"),n(),e(1616,"."),n()()()(),t(1617,"tr",15)(1618,"td",16)(1619,"div",17)(1620,"span",18),e(1621," showFromToLegend"),a(1622,"br"),n()()(),t(1623,"td",19)(1624,"code",38),e(1625,"boolean"),n()(),t(1626,"td",22)(1627,"em")(1628,"strong"),e(1629,"(opcional)"),n()(),t(1630,"p"),e(1631,"Exibe os valores das propriedades "),t(1632,"code"),e(1633,"from"),n(),e(1634," e "),t(1635,"code"),e(1636,"to"),n(),e(1637," no gr\xE1fico do no texto da legenda entre par\xEAnteses."),n(),t(1638,"blockquote")(1639,"p"),e(1640,"V\xE1lido para gr\xE1fico do tipo "),t(1641,"code"),e(1642,"Gauge"),n(),e(1643,"."),n()()()(),t(1644,"tr",15)(1645,"td",16)(1646,"div",17)(1647,"span",18),e(1648," stacked"),a(1649,"br"),n()()(),t(1650,"td",19)(1651,"code",38),e(1652,"boolean"),n()(),t(1653,"td",22)(1654,"em")(1655,"strong"),e(1656,"(opcional)"),n()(),t(1657,"p"),e(1658,"Agrupa todas as s\xE9ries numa \xFAnica coluna ou barra por categoria. Essa propriedade sobrescreve a propriedade "),t(1659,"code"),e(1660,"stackGroupName"),n(),e(1661," da interface "),t(1662,"code"),e(1663,"PoChartSerie"),n()(),t(1664,"blockquote")(1665,"p"),e(1666,"V\xE1lido para gr\xE1fico do tipo "),t(1667,"code"),e(1668,"Column"),n(),e(1669," e "),t(1670,"code"),e(1671,"Bar"),n(),e(1672,"."),n()(),t(1673,"blockquote")(1674,"p"),e(1675,"Essa propriedade habilita a propriedade "),t(1676,"code"),e(1677,"p-data-label"),n(),e(1678," por padr\xE3o, podendo ser desabilitada passando "),t(1679,"code"),e(1680,"[p-data-label]={ fixed: false }"),n(),e(1681,"."),n()()()(),t(1682,"tr",15)(1683,"td",16)(1684,"div",17)(1685,"span",18),e(1686," subtitleGauge"),a(1687,"br"),n()()(),t(1688,"td",19)(1689,"code",34),e(1690,"string"),n()(),t(1691,"td",22)(1692,"em")(1693,"strong"),e(1694,"(opcional)"),n()(),t(1695,"p"),e(1696,"Define um subt\xEDtulo para o Gauge. Indicamos um subt\xEDtulo pequeno, com uma quantidade m\xE1xima de 32 caracteres na altura padr\xE3o."),n(),t(1697,"blockquote")(1698,"p"),e(1699,"V\xE1lido para gr\xE1fico do tipo "),t(1700,"code"),e(1701,"Gauge"),n(),e(1702,"."),n()()()(),t(1703,"tr",15)(1704,"td",16)(1705,"div",17)(1706,"span",18),e(1707," textCenterGraph"),a(1708,"br"),n()()(),t(1709,"td",19)(1710,"code",34),e(1711,"string"),n()(),t(1712,"td",22)(1713,"em")(1714,"strong"),e(1715,"(opcional)"),n()(),t(1716,"p"),e(1717,"Aplica texto centralizado customizado nos gr\xE1ficos de "),t(1718,"code"),e(1719,"Donut"),n(),e(1720,"."),n()()()(),t(1721,"h4",36)(1722,"code",5),e(1723,"PoChartDataLabel"),n()(),t(1724,"div",2)(1725,"p"),e(1726,"Interface que define as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no "),t(1727,"code"),e(1728,"po-chart"),n(),e(1729,"."),n(),t(1730,"blockquote")(1731,"p"),e(1732,"Aplic\xE1vel apenas para gr\xE1ficos do tipo "),t(1733,"code"),e(1734,"line"),n(),e(1735,"."),n()()(),t(1736,"h4",11),e(1737,"Propriedades"),n(),t(1738,"table",12)(1739,"tr",13)(1740,"th",14),e(1741,"Nome"),n(),t(1742,"th",14),e(1743,"Tipo"),n(),t(1744,"th",14),e(1745,"Descri\xE7\xE3o"),n()(),t(1746,"tr",15)(1747,"td",16)(1748,"div",17)(1749,"span",18),e(1750," fixed"),a(1751,"br"),n()()(),t(1752,"td",19)(1753,"code",38),e(1754,"boolean"),n()(),t(1755,"td",22)(1756,"em")(1757,"strong"),e(1758,"(opcional)"),n()(),t(1759,"p"),e(1760,"Indica se o texto associado aos pontos da s\xE9rie deve permanecer fixo na exibi\xE7\xE3o do gr\xE1fico."),n(),t(1761,"ul")(1762,"li"),e(1763,"Quando definido como "),t(1764,"code"),e(1765,"true"),n(),e(1766,":"),t(1767,"ul")(1768,"li"),e(1769,"O "),t(1770,"em"),e(1771,"tooltip"),n(),e(1772," n\xE3o ser\xE1 exibido."),n(),t(1773,"li"),e(1774,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),n()()()(),t(1775,"blockquote")(1776,"p"),e(1777,"Dispon\xEDvel para os tipo de gr\xE1fico "),t(1778,"code"),e(1779,"PoChartType.Line"),n(),e(1780,", "),t(1781,"code"),e(1782,"PoChartType.Area"),n(),e(1783,", "),t(1784,"code"),e(1785,"PoChartType.Column"),n(),e(1786," e "),t(1787,"code"),e(1788,"PoChartType.Bar"),n(),e(1789,"."),n()()()()(),t(1790,"h4",36)(1791,"code",5),e(1792,"PoChartSerie"),n()(),t(1793,"div",2)(1794,"p"),e(1795,"Interface das series din\xE2micas do "),t(1796,"code"),e(1797,"po-chart"),n(),e(1798," que possibilita desenhar gr\xE1ficos dos tipos "),t(1799,"code"),e(1800,"area"),n(),e(1801,", "),t(1802,"code"),e(1803,"bar"),n(),e(1804,", "),t(1805,"code"),e(1806,"column"),n(),e(1807,", "),t(1808,"code"),e(1809,"line"),n(),e(1810,", "),t(1811,"code"),e(1812,"donut"),n(),e(1813," e "),t(1814,"code"),e(1815,"pie"),n()()(),t(1816,"h4",11),e(1817,"Propriedades"),n(),t(1818,"table",12)(1819,"tr",13)(1820,"th",14),e(1821,"Nome"),n(),t(1822,"th",14),e(1823,"Tipo"),n(),t(1824,"th",14),e(1825,"Descri\xE7\xE3o"),n()(),t(1826,"tr",15)(1827,"td",16)(1828,"div",17)(1829,"span",18),e(1830," color"),a(1831,"br"),n()()(),t(1832,"td",19)(1833,"code",34),e(1834,"string"),n()(),t(1835,"td",22)(1836,"em")(1837,"strong"),e(1838,"(opcional)"),n()(),t(1839,"p"),e(1840,"Determina a cor da s\xE9rie. As maneiras de customizar o "),t(1841,"em"),e(1842,"preset"),n(),e(1843," padr\xE3o de cores s\xE3o:"),n(),t(1844,"ul")(1845,"li"),e(1846,"Hexadeximal, por exemplo "),t(1847,"code"),e(1848,"#c64840"),n(),e(1849,";"),n(),t(1850,"li"),e(1851,"RGB, como "),t(1852,"code"),e(1853,"rgb(0, 0, 165)"),n()(),t(1854,"li"),e(1855,"O nome da cor, por exemplo "),t(1856,"code"),e(1857,"blue"),n(),e(1858,";"),n(),t(1859,"li"),e(1860,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),t(1861,"ul")(1862,"li"),a(1863,"span",48),t(1864,"code"),e(1865,"color-01"),n()(),t(1866,"li"),a(1867,"span",49),t(1868,"code"),e(1869,"color-02"),n()(),t(1870,"li"),a(1871,"span",50),t(1872,"code"),e(1873,"color-03"),n()(),t(1874,"li"),a(1875,"span",51),t(1876,"code"),e(1877,"color-04"),n()(),t(1878,"li"),a(1879,"span",52),t(1880,"code"),e(1881,"color-05"),n()(),t(1882,"li"),a(1883,"span",53),t(1884,"code"),e(1885,"color-06"),n()(),t(1886,"li"),a(1887,"span",54),t(1888,"code"),e(1889,"color-07"),n()(),t(1890,"li"),a(1891,"span",55),t(1892,"code"),e(1893,"color-08"),n()(),t(1894,"li"),a(1895,"span",56),t(1896,"code"),e(1897,"color-09"),n()(),t(1898,"li"),a(1899,"span",57),t(1900,"code"),e(1901,"color-10"),n()(),t(1902,"li"),a(1903,"span",58),t(1904,"code"),e(1905,"color-11"),n()(),t(1906,"li"),a(1907,"span",59),t(1908,"code"),e(1909,"color-12"),n()()()()(),t(1910,"ul")(1911,"li"),e(1912,"A partir da 13\xB0 s\xE9rie o valor da cor ser\xE1 preta caso n\xE3o seja enviada uma cor customizada."),n()()()(),t(1913,"tr",15)(1914,"td",16)(1915,"div",17)(1916,"span",18),e(1917," data"),a(1918,"br"),n()()(),t(1919,"td",19)(1920,"code",26),e(1921,"number "),n(),t(1922,"code",60),e(1923," Array<number>"),n()(),t(1924,"td",22)(1925,"em")(1926,"strong"),e(1927,"(opcional)"),n()(),t(1928,"p"),e(1929,"Define a lista de valores para a s\xE9rie. Os tipos esperados s\xE3o de acordo com o tipo de gr\xE1fico:"),n(),t(1930,"ul")(1931,"li"),e(1932,"Para gr\xE1ficos dos tipos "),t(1933,"code"),e(1934,"donut"),n(),e(1935," e "),t(1936,"code"),e(1937,"pie"),n(),e(1938,", espera-se "),t(1939,"em"),e(1940,"number"),n(),e(1941,";"),n(),t(1942,"li"),e(1943,"Para gr\xE1ficos dos tipos "),t(1944,"code"),e(1945,"area"),n(),e(1946,", "),t(1947,"code"),e(1948,"bar"),n(),e(1949,", "),t(1950,"code"),e(1951,"column"),n(),e(1952," e "),t(1953,"code"),e(1954,"line"),n(),e(1955,", espera-se um "),t(1956,"em"),e(1957,"array"),n(),e(1958," de "),t(1959,"code"),e(1960,"data"),n(),e(1961,"."),n()(),t(1962,"blockquote")(1963,"p"),e(1964,"Se passado valor "),t(1965,"code"),e(1966,"null"),n(),e(1967," em determinado item da lista, a itera\xE7\xE3o ir\xE1 ignor\xE1-lo."),n()()()(),t(1968,"tr",15)(1969,"td",16)(1970,"div",17)(1971,"span",18),e(1972," from"),a(1973,"br"),n()()(),t(1974,"td",19)(1975,"code",26),e(1976,"number"),n()(),t(1977,"td",22)(1978,"em")(1979,"strong"),e(1980,"(opcional)"),n()(),t(1981,"p"),e(1982,"Alcance inicial da cor."),n(),t(1983,"blockquote")(1984,"p"),e(1985,"Propriedade v\xE1lida para gr\xE1fico do tipo "),t(1986,"code"),e(1987,"Gauge"),n(),e(1988,"."),n()()()(),t(1989,"tr",15)(1990,"td",16)(1991,"div",17)(1992,"span",18),e(1993," label"),a(1994,"br"),n()()(),t(1995,"td",19)(1996,"code",34),e(1997,"string"),n()(),t(1998,"td",22)(1999,"em")(2e3,"strong"),e(2001,"(opcional)"),n()(),t(2002,"p"),e(2003,"R\xF3tulo refer\xEAncia da s\xE9rie;."),n()()(),t(2004,"tr",15)(2005,"td",16)(2006,"div",17)(2007,"span",18),e(2008," stackGroupName"),a(2009,"br"),n()()(),t(2010,"td",19)(2011,"code",34),e(2012,"string"),n()(),t(2013,"td",22)(2014,"em")(2015,"strong"),e(2016,"(opcional)"),n()(),t(2017,"p"),e(2018,"Agrupa as s\xE9ries em barras ou colunas que receberem o mesmo "),t(2019,"code"),e(2020,"stackGroupName"),n(),e(2021,". Exemplo:"),n(),t(2022,"ul")(2023,"li"),e(2024,"Serie A: "),t(2025,"code"),e(2026,"{ data: 500, stackGroupName: 'group1' ... }"),n(),e(2027,";"),n(),t(2028,"li"),e(2029,"S\xE9rie B: "),t(2030,"code"),e(2031,"{ data: 200, stackGroupName: 'group1' ... }"),n(),e(2032,"."),n(),t(2033,"li"),e(2034,"S\xE9rie C: "),t(2035,"code"),e(2036,"{ data: 100, stackGroupName: 'group2' ... }"),n(),e(2037,"."),n(),t(2038,"li"),e(2039,"S\xE9rie D: "),t(2040,"code"),e(2041,"{ data: 400, stackGroupName: 'group2' ... }"),n(),e(2042,"."),n()(),t(2043,"p"),e(2044,"Nesse caso ser\xE1 criado duas barras ou colunas com duas series agrupadas em cada uma por categoria."),n(),t(2045,"blockquote")(2046,"p"),e(2047,"V\xE1lido para gr\xE1fico do tipo "),t(2048,"code"),e(2049,"Column"),n(),e(2050," e "),t(2051,"code"),e(2052,"Bar"),n(),e(2053,". Essa propriedade \xE9 ignorada caso a propriedade "),t(2054,"code"),e(2055,"stacked"),n(),e(2056," da interface "),t(2057,"code"),e(2058,"PoChartOptions"),n(),e(2059," esteja como "),t(2060,"code"),e(2061,"true"),n(),e(2062,"."),n()(),t(2063,"blockquote")(2064,"p"),e(2065,"Essa propriedade habilita a propriedade "),t(2066,"code"),e(2067,"p-data-label"),n(),e(2068," por padr\xE3o, podendo ser desabilitada passando "),t(2069,"code"),e(2070,"[p-data-label]={ fixed: false }"),n(),e(2071,"."),n()()()(),t(2072,"tr",15)(2073,"td",16)(2074,"div",17)(2075,"span",18),e(2076," to"),a(2077,"br"),n()()(),t(2078,"td",19)(2079,"code",26),e(2080,"number"),n()(),t(2081,"td",22)(2082,"em")(2083,"strong"),e(2084,"(opcional)"),n()(),t(2085,"p"),e(2086,"Alcance final da cor."),n(),t(2087,"blockquote")(2088,"p"),e(2089,"Propriedade v\xE1lida para gr\xE1fico do tipo "),t(2090,"code"),e(2091,"Gauge"),n(),e(2092,"."),n()()()(),t(2093,"tr",15)(2094,"td",16)(2095,"div",17)(2096,"span",18),e(2097," tooltip"),a(2098,"br"),n()()(),t(2099,"td",19)(2100,"code",34),e(2101,"string"),n()(),t(2102,"td",22)(2103,"em")(2104,"strong"),e(2105,"(opcional)"),n()(),t(2106,"p"),e(2107,"Define o texto que ser\xE1 exibido ao passar o mouse por cima das s\xE9ries do "),t(2108,"em"),e(2109,"chart"),n(),e(2110,"."),n(),t(2111,"blockquote")(2112,"p"),e(2113,"Caso n\xE3o seja informado um valor para o "),t(2114,"em"),e(2115,"tooltip"),n(),e(2116,", ser\xE1 exibido da seguinte forma:"),n()(),t(2117,"ul")(2118,"li")(2119,"code"),e(2120,"donut"),n(),e(2121,": "),t(2122,"code"),e(2123,"label"),n(),e(2124,": valor proporcional ao total em porcentagem."),n(),t(2125,"li")(2126,"code"),e(2127,"area"),n(),e(2128,", "),t(2129,"code"),e(2130,"bar"),n(),e(2131,", "),t(2132,"code"),e(2133,"column"),n(),e(2134,", "),t(2135,"code"),e(2136,"line"),n(),e(2137," e "),t(2138,"code"),e(2139,"pie"),n(),e(2140,": "),t(2141,"code"),e(2142,"label"),n(),e(2143,": "),t(2144,"code"),e(2145,"data"),n(),e(2146,"."),n()()()(),t(2147,"tr",15)(2148,"td",16)(2149,"div",17)(2150,"span",18),e(2151," type"),a(2152,"br"),n()()(),t(2153,"td",19)(2154,"code",35),e(2155,"PoChartType"),n()(),t(2156,"td",22)(2157,"em")(2158,"strong"),e(2159,"(opcional)"),n()(),t(2160,"p"),e(2161,"Define em qual tipo de gr\xE1fico que ser\xE1 exibida a s\xE9rie. \xC9 poss\xEDvel combinar s\xE9ries dos tipos "),t(2162,"code"),e(2163,"column"),n(),e(2164," e "),t(2165,"code"),e(2166,"line"),n(),e(2167," no mesmo gr\xE1fico. Para isso, basta criar as s\xE9ries com as configura\xE7\xF5es:"),n(),t(2168,"ul")(2169,"li"),e(2170,"Serie A: "),t(2171,"code"),e(2172,"{ type: ChartType.Column, data: ... }"),n(),e(2173,";"),n(),t(2174,"li"),e(2175,"S\xE9rie B: "),t(2176,"code"),e(2177,"{ type: ChartType.Line, data: ... }"),n(),e(2178,"."),n()(),t(2179,"p"),e(2180,"Se tanto "),t(2181,"code"),e(2182,"p-type"),n(),e(2183," quanto "),t(2184,"code"),e(2185,"{ type }"),n(),e(2186," forem ignorados, o padr\xE3o gerado pelo componente ser\xE1:"),n(),t(2187,"ul")(2188,"li")(2189,"code"),e(2190,"column"),n(),e(2191,": se "),t(2192,"code"),e(2193,"data"),n(),e(2194," receber "),t(2195,"code"),e(2196,"Array<number>"),n(),e(2197,";"),n(),t(2198,"li")(2199,"code"),e(2200,"pie"),n(),e(2201,": se "),t(2202,"code"),e(2203,"data"),n(),e(2204," for "),t(2205,"em"),e(2206,"number"),n(),e(2207,"."),n()(),t(2208,"blockquote")(2209,"p"),e(2210,"Se utilizada a propriedade "),t(2211,"code"),e(2212,"p-type"),n(),e(2213,", dispensa-se a defini\xE7\xE3o desta propriedade. Por\xE9m, se houver declara\xE7\xE3o para ambas, o valor "),t(2214,"code"),e(2215,"{type}"),n(),e(2216," da primeira s\xE9rie sobrescrever\xE1 o valor definido em "),t(2217,"code"),e(2218,"p-type"),n(),e(2219,"."),n()(),t(2220,"blockquote")(2221,"p"),e(2222,"O componente s\xF3 exibir\xE1 as s\xE9ries que tiverem o mesmo "),t(2223,"code"),e(2224,"type"),n(),e(2225," definido, exceto para mesclagem para tipos "),t(2226,"code"),e(2227,"column"),n(),e(2228," e "),t(2229,"code"),e(2230,"line"),n(),e(2231,"."),n()()()()(),t(2232,"h3"),e(2233,"Enums"),n(),t(2234,"h4",4)(2235,"code",5),e(2236,"PoChartLabelFormat"),n()(),t(2237,"div",2)(2238,"p")(2239,"em"),e(2240,"Enum"),n(),t(2241,"code"),e(2242,"PoChartLabelFormat"),n(),e(2243," para especifica\xE7\xE3o dos tipos de formata\xE7\xE3o do eixo de valor no gr\xE1fico."),n()(),t(2244,"h4",11),e(2245,"Propriedades"),n(),t(2246,"table",12)(2247,"tr",13)(2248,"th",14),e(2249,"Nome"),n(),t(2250,"th",14),e(2251,"Descri\xE7\xE3o"),n()(),t(2252,"tr",15)(2253,"td",16)(2254,"div",17)(2255,"span",18),e(2256," Number"),a(2257,"br"),n()()(),t(2258,"td",22)(2259,"p"),e(2260,"Os valores ser\xE3o exibidos no formato num\xE9rico com duas casas decimais. Equivalente ao formato "),t(2261,"code"),e(2262,"'1.2-2'"),n(),e(2263," da "),t(2264,"a",61),e(2265,"DecimalPipe"),n(),e(2266,"."),n()()(),t(2267,"tr",15)(2268,"td",16)(2269,"div",17)(2270,"span",18),e(2271," Currency"),a(2272,"br"),n()()(),t(2273,"td",22)(2274,"p"),e(2275,"Os valores ser\xE3o exibidos com o s\xEDmbolo monet\xE1rio de acordo com a formata\xE7\xE3o padr\xE3o da aplica\xE7\xE3o, isto \xE9, o valor do token "),t(2276,"a",62),e(2277,"DEFAULT_CURRENCY_CODE"),n(),e(2278,". Para adequar ao padr\xE3o num\xE9rico brasileiro, \xE9 necess\xE1rio configurar o "),t(2279,"a",63),e(2280,"LOCALE_ID"),n(),e(2281," da aplica\xE7\xE3o. A configura\xE7\xE3o pode ser feita da seguinte forma:"),n(),t(2282,"pre")(2283,"code"),e(2284,`import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
})
export class AppModule { }
`),n()()()()(),t(2285,"h4",4)(2286,"code",5),e(2287,"PoChartType"),n()(),t(2288,"div",2)(2289,"p")(2290,"em"),e(2291,"Enum"),n(),t(2292,"code"),e(2293,"PoChartType"),n(),e(2294," para especifica\xE7\xE3o dos tipos de gr\xE1ficos."),n()(),t(2295,"h4",11),e(2296,"Propriedades"),n(),t(2297,"table",12)(2298,"tr",13)(2299,"th",14),e(2300,"Nome"),n(),t(2301,"th",14),e(2302,"Descri\xE7\xE3o"),n()(),t(2303,"tr",15)(2304,"td",16)(2305,"div",17)(2306,"span",18),e(2307," Area"),a(2308,"br"),n()()(),t(2309,"td",22)(2310,"p"),e(2311,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),n()()(),t(2312,"tr",15)(2313,"td",16)(2314,"div",17)(2315,"span",18),e(2316," Donut"),a(2317,"br"),n()()(),t(2318,"td",22)(2319,"p"),e(2320,"Exibe os dados em formato de rosca, dividindo em partes proporcionais."),n()()(),t(2321,"tr",15)(2322,"td",16)(2323,"div",17)(2324,"span",18),e(2325," Pie"),a(2326,"br"),n()()(),t(2327,"td",22)(2328,"p"),e(2329,"Exibe os dados em formato circular, dividindo proporcionalmente em fatias."),n()()(),t(2330,"tr",15)(2331,"td",16)(2332,"div",17)(2333,"span",18),e(2334," Line"),a(2335,"br"),n()()(),t(2336,"td",22)(2337,"p"),e(2338,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),t(2339,"code"),e(2340,"column"),n(),e(2341," e "),t(2342,"code"),e(2343,"area"),n(),e(2344,", definindo-se o tipo atrav\xE9s da propriedade "),t(2345,"code"),e(2346,"PoChartSerie.type"),n(),e(2347,"."),n()()(),t(2348,"tr",15)(2349,"td",16)(2350,"div",17)(2351,"span",18),e(2352," Column"),a(2353,"br"),n()()(),t(2354,"td",22)(2355,"p"),e(2356,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),n()()(),t(2357,"tr",15)(2358,"td",16)(2359,"div",17)(2360,"span",18),e(2361," Bar"),a(2362,"br"),n()()(),t(2363,"td",22)(2364,"p"),e(2365,"Gr\xE1fico que exibe os dados em forma de barras horizontais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo de s\xE9ries e categorias."),n()()(),t(2366,"tr",15)(2367,"td",16)(2368,"div",17)(2369,"span",18),e(2370," Gauge"),a(2371,"br"),n()()(),t(2372,"td",22)(2373,"p"),e(2374,"Gr\xE1fico que prov\xEA a representa\xE7\xE3o de um valor atrav\xE9s de um arco. Possui dois tipos de tratamentos:"),n(),t(2375,"ul")(2376,"li"),e(2377,"\xC9 poss\xEDvel demonstrar um dado percentual simples em conjunto com uma descri\xE7\xE3o resumida em seu interior;"),n(),t(2378,"li"),e(2379,"Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado."),n()()()()()())},dependencies:[L],encapsulation:2})}return r})();var Ve=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,s){this.route=d,this.router=s}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let s=d.view;this.activeTab=s||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(s){return new(s||r)(q(ne),q(ie))};static \u0275cmp=f({type:r,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Chart",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(s,i){s&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-chart-doc"),n(),t(4,"po-tab",3),h("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-chart-basic-view")(6,"sample-po-chart-labs-view")(7,"sample-po-chart-coffee-ranking-view")(8,"sample-po-chart-stacked-view")(9,"sample-po-chart-summary-view")(10,"sample-po-chart-world-exports-view"),n()()()),s&2&&(g("p-actions",i.actions),p(2),g("p-active",i.activeTab==="doc"),p(2),g("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ge,w,T,Se,fe,ye,_e,we,Le,Me],encapsulation:2})}return r})();var ut=[{path:"",component:Ve}],ke=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=Z({type:r});static \u0275inj=z({imports:[j.forChild(ut),j]})}return r})();var nn=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=Z({type:r});static \u0275inj=z({imports:[Ee,ke]})}return r})();export{nn as DocPoChartModule};
