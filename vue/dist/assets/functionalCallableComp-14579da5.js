import{c as o,A as g,cE as i,cp as b,W as w,ad as c,db as y,dc as h,af as x,cl as O,a9 as S,x as r,dd as F,az as I,v as M,r as m,ae as v,q as k,R as D,de as _}from"./index-bad76dd7.js";function R(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"};const V=P;function p(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable}))),n.forEach(function(l){j(t,l,a[l])})}return t}function j(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d=function(e,a){var n=p({},e,a.attrs);return o(g,p({},n,{icon:V}),null)};d.displayName="DownloadOutlined";d.inheritAttrs=!1;const C=d,E=async t=>(await i.value.get("/files",{params:{folder_path:t}})).data,T=async t=>(await i.value.post("/delete_files",{file_paths:t})).data,U=async(t,e,a)=>(await i.value.post("/move_files",{file_paths:t,dest:e,create_dest_folder:a})).data,A=async(t,e,a)=>(await i.value.post("/copy_files",{file_paths:t,dest:e,create_dest_folder:a})).data,N=async t=>{await i.value.post("/mkdirs",{dest_folder:t})},H=t=>{const e=m("");return new Promise(a=>{c.confirm({title:r("inputFolderName"),content:()=>o(v,{value:e.value,"onUpdate:value":n=>e.value=n},null),async onOk(){if(!e.value)return;const n=k(t,e.value);await N(n),a()}})})},W=()=>o("p",{style:{background:"var(--zp-secondary-background)",padding:"8px",borderLeft:"4px solid var(--primary-color)"}},[D("Tips: "),r("multiSelectTips")]),$=(t,e)=>{const a=b(),n=w(),l=s=>{var u;return!!((u=a.tagMap.get(t.fullpath))!=null&&u.some(f=>f.id===s))};c.confirm({width:"80vw",title:t.name,icon:null,content:()=>o("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},[o("video",{style:{maxHeight:y?"80vh":"60vh",maxWidth:"100%",minWidth:"70%"},src:h(t),controls:!0,autoplay:!0},null),o("div",{style:{marginTop:"4px"}},[n.conf.all_custom_tags.map(s=>o("div",{key:s.id,onClick:()=>e==null?void 0:e(s.id),style:{background:l(s.id)?a.getColor(s.name):"var(--zp-primary-background)",color:l(s.id)?"white":a.getColor(s.name),margin:"2px",padding:"2px 16px","border-radius":"4px",display:"inline-block",cursor:"pointer","font-weight":"bold",transition:".5s all ease",border:`2px solid ${a.getColor(s.name)}`,"user-select":"none"}},[s.name]))]),o("div",{class:"actions",style:{marginTop:"16px"}},[o(x,{onClick:()=>O([S(t,!0)])},{icon:o(C,null,null),default:r("download")})])]),maskClosable:!0,wrapClassName:"hidden-antd-btns-modal"})},B=()=>{c.confirm({title:r("confirmRebuildImageIndex"),onOk:async()=>{await F(),I.emit("searchIndexExpired"),M.success(r("rebuildComplete"))}})},q=t=>{const e=m(t.split(/[\\/]/).pop()??"");return new Promise(a=>{c.confirm({title:r("rename"),content:()=>o(v,{value:e.value,"onUpdate:value":n=>e.value=n},null),async onOk(){if(!e.value)return;const n=await _({path:t,name:e.value});a(n.new_path)}})})};export{W as M,B as a,q as b,A as c,T as d,$ as e,E as g,R as l,U as m,H as o};
