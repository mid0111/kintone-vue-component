(function(t){function e(e){for(var a,i,s=e[0],c=e[1],r=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&p.push(l[i][0]),l[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,r||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==l[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},l={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/kintone-vue-component/demo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var r=0;r<s.length;r++)e(s[r]);var u=c;o.push(["cd49","chunk-vendors"]),n()})({"034f":function(t,e,n){"use strict";var a=n("85ec"),l=n.n(a);l.a},"0f1e":function(t,e,n){"use strict";var a=n("9da4"),l=n.n(a);l.a},"1f51":function(t,e,n){},2681:function(t,e,n){},"31c6":function(t,e,n){"use strict";var a=n("1f51"),l=n.n(a);l.a},"452c":function(t,e,n){},"5ee1":function(t,e,n){"use strict";var a=n("2681"),l=n.n(a);l.a},"661b":function(t,e,n){"use strict";var a=n("8327"),l=n.n(a);l.a},8327:function(t,e,n){},"85ec":function(t,e,n){},8910:function(t,e,n){"use strict";var a=n("dd46"),l=n.n(a);l.a},"96f1":function(t,e,n){},"9da4":function(t,e,n){},a964:function(t,e,n){},b0a0:function(t,e,n){"use strict";var a=n("452c"),l=n.n(a);l.a},ba74:function(t,e,n){"use strict";var a=n("96f1"),l=n.n(a);l.a},bf73:function(t,e,n){"use strict";var a=n("ef70"),l=n.n(a);l.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Demo")]),n("navigation",{attrs:{components:t.components}}),n("div",{staticClass:"main-container"},[n("component-title",{attrs:{title:"k-button"}}),n("k-button-demo"),n("component-title",{attrs:{title:"k-dialog"}}),n("k-dialog-demo"),n("component-title",{attrs:{title:"k-dropdown"}}),n("k-dropdown-demo"),n("component-title",{attrs:{title:"k-text"}}),n("k-text-demo")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",t._l(t.components,(function(e,a){return n("li",{key:a},[n("a",{staticClass:"nav-link",attrs:{href:"#"+e}},[t._v(t._s(e))])])})),0)])},s=[],c=n("d4ec"),r=n("262e"),u=n("2caf"),d=n("9ab4"),p=n("60a3"),b=function(t){Object(r["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return n}(p["c"]);Object(d["a"])([Object(p["b"])()],b.prototype,"components",void 0),b=Object(d["a"])([p["a"]],b);var f=b,v=f,h=(n("ba74"),n("2877")),m=Object(h["a"])(v,i,s,!1,null,null,null),k=m.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-container"},[n("a",{staticClass:"title-link",attrs:{href:"/#"+t.title}},[n("h2",{attrs:{id:t.title}},[t._v(t._s(t.title))])])])},y=[],j=function(t){Object(r["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return n}(p["c"]);Object(d["a"])([Object(p["b"])()],j.prototype,"title",void 0),j=Object(d["a"])([p["a"]],j);var g=j,C=g,_=(n("bf73"),Object(h["a"])(C,O,y,!1,null,null,null)),x=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components"},[n("h3",[t._v("basic")]),n("div",{staticClass:"clearfix"},[n("k-button",{staticClass:"float-left mr-2",attrs:{text:"保存",type:"submit"},on:{click:t.onClick}}),n("k-button",{attrs:{text:"キャンセル"}})],1),n("h3",[t._v("disabled")]),n("k-button",{attrs:{text:"保存",type:"submit",disabled:""}})],1)},D=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"k-btn",class:[t.typeClass],attrs:{disabled:t.disabled},on:{click:function(e){return e.stopPropagation(),t.onClick(e)}}},[t._v(" "+t._s(t.text)+" ")])},S=[],E=n("bee2"),I=function(t){Object(r["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return Object(E["a"])(n,[{key:"onClick",value:function(){this.$emit("click")}},{key:"typeClass",get:function(){return"submit"===this.type?"submit":"normal"}}]),n}(p["c"]);Object(d["a"])([Object(p["b"])({default:""})],I.prototype,"text",void 0),Object(d["a"])([Object(p["b"])({default:"normal"})],I.prototype,"type",void 0),Object(d["a"])([Object(p["b"])({default:!1})],I.prototype,"disabled",void 0),I=Object(d["a"])([p["a"]],I);var K=I,P=K,q=(n("e720"),Object(h["a"])(P,$,S,!1,null,"5aa3b097",null)),B=q.exports,T={components:{KButton:B},methods:{onClick:function(){alert("クリック")}}},M=T,z=Object(h["a"])(M,w,D,!1,null,null,null),V=z.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components"},[n("h3",[t._v("basic")]),n("k-button",{attrs:{text:"ダイアログを開く"},on:{click:t.toggleDialogOpen}}),n("k-dialog",{attrs:{visible:t.showDialog},on:{close:t.toggleDialogOpen},scopedSlots:t._u([{key:"header",fn:function(){return[n("h3",{staticClass:"title"},[t._v("ダイアログタイトル")])]},proxy:!0},{key:"footer",fn:function(){return[n("k-button",{attrs:{text:"閉じる"},on:{click:t.toggleDialogOpen}})]},proxy:!0}])},[n("div",[t._v("コンテンツ")])])],1)},A=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"k-dialog-container",class:{hidden:t.hidden}},[n("div",{staticClass:"k-dialog-wrapper"},[n("div",{staticClass:"k-dialog-header"},[t._t("header"),n("span",{staticClass:"k-dialog-close-button"},[n("k-icon-button",{attrs:{type:"close"},on:{click:t.onClose}})],1)],2),n("div",{staticClass:"k-dialog-body"},[t._t("default")],2),n("div",{staticClass:"k-dialog-footer"},[t._t("footer")],2)])])},L=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"k-icon-btn",class:[t.sizeClass,t.typeClass,t.colorClass,t.shapeClass],attrs:{disabled:t.disabled},on:{click:function(e){return e.stopPropagation(),t.onClick(e)}}},[n("svg",[n("path",{attrs:{d:t.iconData}})])])},F=[],G=(n("c975"),n("94ed")),Q={props:{type:{type:String,default:null,required:!1},size:{type:String,default:null,required:!1},color:{type:String,default:null,required:!1},shape:{type:String,default:null,required:!1},disabled:{type:Boolean,default:!1,required:!1}},computed:{sizeClass:function(){var t="small"===this.size?"small":"large";return t},typeClass:function(){return"remove"===this.type&&"gray"===this.colorClass?"hover-danger":""},colorClass:function(){var t=["gray","blue","red","green","transparent"];return-1===t.indexOf(this.color)?"gray":this.color},shapeClass:function(){return"normal"===this.shape?"normal":"circle"},iconData:function(){var t=G["h"];switch(this.type){case"insert":break;case"remove":t=G["g"];break;case"close":t=G["e"];break;case"file":t=G["f"];break;case"right":t=G["d"];break;case"left":t=G["c"];break}return t}},methods:{onClick:function(){this.$emit("click")}}},R=Q,U=(n("8910"),Object(h["a"])(R,N,F,!1,null,"2758ffd2",null)),W=U.exports,X=function(t){Object(r["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return Object(E["a"])(n,[{key:"onClose",value:function(){this.$emit("close")}},{key:"hidden",get:function(){return!1===this.visible}}]),n}(p["c"]);Object(d["a"])([Object(p["b"])({default:!0})],X.prototype,"visible",void 0),X=Object(d["a"])([Object(p["a"])({components:{KIconButton:W}})],X);var Y=X,Z=Y,tt=(n("661b"),Object(h["a"])(Z,H,L,!1,null,"2efa915e",null)),et=tt.exports,nt={components:{KButton:B,KDialog:et},data:function(){return{showDialog:!1}},methods:{toggleDialogOpen:function(){this.showDialog=!this.showDialog}}},at=nt,lt=(n("e213"),Object(h["a"])(at,J,A,!1,null,"01405ea6",null)),ot=lt.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components"},[n("h3",[t._v("basic")]),n("k-dropdown",{attrs:{items:t.items},model:{value:t.selectedValue,callback:function(e){t.selectedValue=e},expression:"selectedValue"}})],1)},st=[],ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"k-dropdown-container"},[n("div",{staticClass:"k-dropdown-sub-container"},[n("div",{staticClass:"k-dropdown-outer",on:{click:t.toggleShowItems}},[n("div",{staticClass:"k-dropdown",class:{"k-dropdown-disable":t.disabled}},[n("div",{staticClass:"k-dropdown-selected"},[n("span",{staticClass:"k-dropdown-selected-name"},[n("span",{staticClass:"k-dropdown-selected-label"},[t._v(t._s(t.selected))]),n("span",{staticClass:"icon-arrow-down"},[n("svg",[n("path",{attrs:{d:t.mdiChevronDown}})])])])])])]),n("div",{staticClass:"k-list-outer",style:[t.displayStyle]},t._l(t.items,(function(e,a){return n("k-item",{key:a,attrs:{selected:t.value===e.value,label:e.label,value:e.value},on:{click:t.onClickItem}})})),1)])])},rt=[],ut=(n("4160"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"k-list-item",class:{"k-list-item-selected":t.selected},on:{click:t.onClick}},[n("span",{staticClass:"k-icon-check"},[n("svg",[n("path",{attrs:{d:t.mdiCheckBold}})])]),n("span",{staticClass:"k-list-item-label"},[t._v(t._s(t.label))])])}),dt=[],pt={props:{value:{type:String,default:null,required:!1},label:{type:String,default:null,required:!1},selected:{type:Boolean,default:!1,required:!1}},data:function(){return{mdiCheckBold:G["a"]}},methods:{onClick:function(){this.$emit("click",this.value)}}},bt=pt,ft=(n("5ee1"),Object(h["a"])(bt,ut,dt,!1,null,"499efff3",null)),vt=ft.exports,ht=function(t){Object(r["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.mdiChevronDown=G["b"],t.visibleItems=!1,t}return Object(E["a"])(n,[{key:"toggleShowItems",value:function(){this.visibleItems=!this.visibleItems}},{key:"onClickItem",value:function(t){this.$emit("input",t),this.visibleItems=!1}},{key:"selected",get:function(){var t=this,e=-1;return this.items&&this.items.forEach((function(n,a){n.value===t.value&&(e=a)})),-1===e?"":this.items[e].label}},{key:"displayStyle",get:function(){return this.visibleItems&&!this.disabled?{display:"block"}:{display:"none"}}}]),n}(p["c"]);Object(d["a"])([Object(p["b"])({default:function(){return[]}})],ht.prototype,"items",void 0),Object(d["a"])([Object(p["b"])({default:null})],ht.prototype,"value",void 0),Object(d["a"])([Object(p["b"])({default:!1})],ht.prototype,"disabled",void 0),ht=Object(d["a"])([Object(p["a"])({components:{KItem:vt}})],ht);var mt=ht,kt=mt,Ot=(n("0f1e"),Object(h["a"])(kt,ct,rt,!1,null,"8f5c0ca8",null)),yt=Ot.exports,jt=function(t){Object(r["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.items=[{label:"---",value:null},{label:"アイテム1",value:"アイテム1"},{label:"アイテム2",value:"アイテム2"},{label:"アイテム3",value:"アイテム3"}],t.selectedValue=null,t}return n}(p["c"]);jt=Object(d["a"])([Object(p["a"])({components:{KDropdown:yt}})],jt);var gt=jt,Ct=gt,_t=Object(h["a"])(Ct,it,st,!1,null,null,null),xt=_t.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components"},[n("h3",[t._v("basic")]),n("k-text",{attrs:{placeholder:"テキストを入力"},on:{change:t.onChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),n("h3",[t._v("disabled")]),n("k-text",{attrs:{placeholder:"テキストを入力",disabled:!0},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),n("h3",[t._v("width")]),n("k-text",{attrs:{placeholder:"テキストを入力",width:200},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},Dt=[],$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"k-input-outer"},[n("input",{staticClass:"k-input-text",style:{width:t.width+"px"},attrs:{type:"text",placeholder:t.placeholder,disabled:t.disabled},domProps:{value:t.value},on:{change:t.onChange}})])},St=[],Et=function(t){Object(r["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return Object(E["a"])(n,[{key:"onChange",value:function(t){t.target instanceof HTMLInputElement&&this.$emit("change",t.target.value)}}]),n}(p["c"]);Object(d["a"])([Object(p["b"])()],Et.prototype,"value",void 0),Object(d["a"])([Object(p["b"])()],Et.prototype,"placeholder",void 0),Object(d["a"])([Object(p["b"])({default:!1})],Et.prototype,"disabled",void 0),Object(d["a"])([Object(p["b"])({default:120})],Et.prototype,"width",void 0),Et=Object(d["a"])([p["a"]],Et);var It=Et,Kt=It,Pt=(n("31c6"),Object(h["a"])(Kt,$t,St,!1,null,"4dac33e1",null)),qt=Pt.exports,Bt={components:{KText:qt},data:function(){return{value:""}},methods:{onChange:function(t){alert("テキスト change: ",t)}}},Tt=Bt,Mt=Object(h["a"])(Tt,wt,Dt,!1,null,null,null),zt=Mt.exports,Vt={name:"App",components:{Navigation:k,ComponentTitle:x,KButtonDemo:V,KDialogDemo:ot,KDropdownDemo:xt,KTextDemo:zt},data:function(){return{components:["k-button","k-dialog","k-dropdown","k-text"]}}},Jt=Vt,At=(n("034f"),n("b0a0"),Object(h["a"])(Jt,l,o,!1,null,null,null)),Ht=At.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Ht)}}).$mount("#app")},dd46:function(t,e,n){},e213:function(t,e,n){"use strict";var a=n("a964"),l=n.n(a);l.a},e720:function(t,e,n){"use strict";var a=n("eb99"),l=n.n(a);l.a},eb99:function(t,e,n){},ef70:function(t,e,n){}});
//# sourceMappingURL=app.297e74c7.js.map