import{r as F,o as P,cv as K,ar as L,B as l,at as T,au as I,d as $,u as B,cw as _,b as y,b9 as V,cx as A,aj as E,h as c,c as M,a as G}from"./index-8120eed9.js";const W=function(){var o=F(!1);return P(function(){o.value=K()}),o};var D=Symbol("rowContextKey"),U=function(r){T(D,r)},k=function(){return L(D,{gutter:l(function(){}),wrap:l(function(){}),supportFlexGap:l(function(){})})};I("top","middle","bottom","stretch");I("start","end","center","space-around","space-between");var q=function(){return{align:String,justify:String,prefixCls:String,gutter:{type:[Number,Array,Object],default:0},wrap:{type:Boolean,default:void 0}}},H=$({compatConfig:{MODE:3},name:"ARow",props:q(),setup:function(r,N){var m=N.slots,v=B("row",r),d=v.prefixCls,h=v.direction,j,x=F({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0,xxxl:!0}),w=W();P(function(){j=_.subscribe(function(e){var t=r.gutter||0;(!Array.isArray(t)&&y(t)==="object"||Array.isArray(t)&&(y(t[0])==="object"||y(t[1])==="object"))&&(x.value=e)})}),V(function(){_.unsubscribe(j)});var S=l(function(){var e=[0,0],t=r.gutter,n=t===void 0?0:t,s=Array.isArray(n)?n:[n,0];return s.forEach(function(i,b){if(y(i)==="object")for(var a=0;a<A.length;a++){var p=A[a];if(x.value[p]&&i[p]!==void 0){e[b]=i[p];break}}else e[b]=i||0}),e});U({gutter:S,supportFlexGap:w,wrap:l(function(){return r.wrap})});var R=l(function(){var e;return E(d.value,(e={},c(e,"".concat(d.value,"-no-wrap"),r.wrap===!1),c(e,"".concat(d.value,"-").concat(r.justify),r.justify),c(e,"".concat(d.value,"-").concat(r.align),r.align),c(e,"".concat(d.value,"-rtl"),h.value==="rtl"),e))}),O=l(function(){var e=S.value,t={},n=e[0]>0?"".concat(e[0]/-2,"px"):void 0,s=e[1]>0?"".concat(e[1]/-2,"px"):void 0;return n&&(t.marginLeft=n,t.marginRight=n),w.value?t.rowGap="".concat(e[1],"px"):s&&(t.marginTop=s,t.marginBottom=s),t});return function(){var e;return M("div",{class:R.value,style:O.value},[(e=m.default)===null||e===void 0?void 0:e.call(m)])}}});const Y=H;function J(o){return typeof o=="number"?"".concat(o," ").concat(o," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(o)?"0 0 ".concat(o):o}var Q=function(){return{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},xxxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}};const Z=$({compatConfig:{MODE:3},name:"ACol",props:Q(),setup:function(r,N){var m=N.slots,v=k(),d=v.gutter,h=v.supportFlexGap,j=v.wrap,x=B("col",r),w=x.prefixCls,S=x.direction,R=l(function(){var e,t=r.span,n=r.order,s=r.offset,i=r.push,b=r.pull,a=w.value,p={};return["xs","sm","md","lg","xl","xxl","xxxl"].forEach(function(g){var f,u={},C=r[g];typeof C=="number"?u.span=C:y(C)==="object"&&(u=C||{}),p=G(G({},p),{},(f={},c(f,"".concat(a,"-").concat(g,"-").concat(u.span),u.span!==void 0),c(f,"".concat(a,"-").concat(g,"-order-").concat(u.order),u.order||u.order===0),c(f,"".concat(a,"-").concat(g,"-offset-").concat(u.offset),u.offset||u.offset===0),c(f,"".concat(a,"-").concat(g,"-push-").concat(u.push),u.push||u.push===0),c(f,"".concat(a,"-").concat(g,"-pull-").concat(u.pull),u.pull||u.pull===0),c(f,"".concat(a,"-rtl"),S.value==="rtl"),f))}),E(a,(e={},c(e,"".concat(a,"-").concat(t),t!==void 0),c(e,"".concat(a,"-order-").concat(n),n),c(e,"".concat(a,"-offset-").concat(s),s),c(e,"".concat(a,"-push-").concat(i),i),c(e,"".concat(a,"-pull-").concat(b),b),e),p)}),O=l(function(){var e=r.flex,t=d.value,n={};if(t&&t[0]>0){var s="".concat(t[0]/2,"px");n.paddingLeft=s,n.paddingRight=s}if(t&&t[1]>0&&!h.value){var i="".concat(t[1]/2,"px");n.paddingTop=i,n.paddingBottom=i}return e&&(n.flex=J(e),j.value===!1&&!n.minWidth&&(n.minWidth=0)),n});return function(){var e;return M("div",{class:R.value,style:O.value},[(e=m.default)===null||e===void 0?void 0:e.call(m)])}}});export{Z as C,Y as R};
