(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabbar-myself-myself"],{"1c78":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={cStatusBar:n("7613").default,cPageHeader:n("8b38").default,unicloudDb:n("960d").default,cImage:n("2e58").default},c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("c-status-bar"),n("c-page-header",{attrs:{title:"我的",canBack:!1}}),n("unicloud-db",{attrs:{collection:"uni-id-users",getone:!0,field:"username,avatar",where:"_id == '"+t.uid+"'"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;void 0===a&&(a={});e.loading;var c=e.error;e.options;return[c?n("v-uni-view",[t._v(t._s(c.message))]):n("v-uni-view",{staticClass:"p-3 mt-2 flex justify-between"},[n("c-image",{staticClass:"avatar",attrs:{src:a.avatar,mode:"aspectFill"}}),n("v-uni-view",{staticClass:"flex flex-column justify-between desc"},[n("v-uni-text",{staticClass:"h2"},[t._v(t._s(a.username||"loading..."))]),n("v-uni-view",{staticClass:"flex justify-between mx-3 align-center text-center"},[n("v-uni-view",{staticClass:"flex flex-column"},[n("v-uni-text",{staticClass:"h3"},[t._v(t._s(t.followNum))]),n("v-uni-text",{staticClass:"secondary-color"},[t._v("关注")])],1),n("v-uni-view",{staticClass:"flex flex-column"},[n("v-uni-text",{staticClass:"h3"},[t._v(t._s(t.fansNum))]),n("v-uni-text",{staticClass:"secondary-color"},[t._v("粉丝")])],1)],1)],1)],1)]}}])}),n("v-uni-view",{staticClass:"iconfont"},t._l(t.actions,(function(e){return n("v-uni-view",{key:e.name,staticClass:"m-5 flex align-center",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go(e.type)}}},[n("v-uni-text",{staticClass:"h3",class:e.icon}),n("v-uni-text",{staticClass:"ml-5"},[t._v(t._s(e.name))])],1)})),1)],1)},i=[]},2855:function(t,e,n){var a=n("a0e2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var c=n("4f06").default;c("933a204a",a,!0,{sourceMap:!1,shadowMode:!1})},"5d4d":function(t,e,n){"use strict";var a=n("2855"),c=n.n(a);c.a},"666c":function(t,e,n){"use strict";var a=n("6b47"),c=n.n(a);c.a},"6b47":function(t,e,n){var a=n("ed37");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var c=n("4f06").default;c("2dc8f842",a,!0,{sourceMap:!1,shadowMode:!1})},"735d":function(t,e,n){"use strict";(function(t){var a=n("4ea4");n("99af"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var c=a(n("1da1")),i={onLoad:function(){this.count()},onPullDownRefresh:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.count();case 2:uni.stopPullDownRefresh();case 3:case"end":return e.stop()}}),e)})))()},data:function(){var e=t.getCurrentUserInfo(),n=e.uid;return{uid:n,fansNum:0,followNum:0,actions:[{name:"历史",type:"history",icon:"icon-lishi"},{name:"收藏",type:"collection",icon:"icon-shoucang1"},{name:"喜欢",type:"love",icon:"icon-like1"},{name:"设置",type:"setting",icon:"icon-shezhi"}]}},methods:{go:function(t){uni.navigateTo({url:"/pages/".concat(t,"/").concat(t)})},count:function(){return Promise.all([this.countFans(),this.countFollow()])},countFans:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$A.follow.countFans({author:t.uid});case 3:t.fansNum=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},countFollow:function(){var t=this;return(0,c.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$A.follow.countFollow({author:t.uid});case 3:t.followNum=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}};e.default=i}).call(this,n("a9ff")["default"])},"762a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{title:{type:String,default:""},canBack:{type:Boolean,default:!0}},methods:{back:function(){uni.navigateBack({delta:1})}}};e.default=a},"8b38":function(t,e,n){"use strict";n.r(e);var a=n("cf4e"),c=n("ba86");for(var i in c)"default"!==i&&function(t){n.d(e,t,(function(){return c[t]}))}(i);n("666c");var u,r=n("f0c5"),s=Object(r["a"])(c["default"],a["b"],a["c"],!1,null,"45fa1794",null,!1,a["a"],u);e["default"]=s.exports},a0e2:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".avatar[data-v-c2ec3bb4]{width:%?250?%;height:%?300?%;border-radius:%?10?% %?60?% %?60?% %?30?%}.desc[data-v-c2ec3bb4]{width:%?400?%}",""]),t.exports=e},ba86:function(t,e,n){"use strict";n.r(e);var a=n("762a"),c=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=c.a},cf4e:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page-header px-2 flex align-center justify-between"},[t.canBack?n("v-uni-view",{staticClass:"iconfont icon-arrowLeft-fill back-icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}}):t._e(),n("v-uni-view",{staticClass:"font-lg"},[t._v(t._s(t.title))]),t._t("default")],2)},i=[]},d14a:function(t,e,n){"use strict";n.r(e);var a=n("1c78"),c=n("f4cd");for(var i in c)"default"!==i&&function(t){n.d(e,t,(function(){return c[t]}))}(i);n("5d4d");var u,r=n("f0c5"),s=Object(r["a"])(c["default"],a["b"],a["c"],!1,null,"c2ec3bb4",null,!1,a["a"],u);e["default"]=s.exports},ed37:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".page-header[data-v-45fa1794]{height:%?100?%}.back-icon[data-v-45fa1794]{font-size:%?50?%}",""]),t.exports=e},f4cd:function(t,e,n){"use strict";n.r(e);var a=n("735d"),c=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=c.a}}]);