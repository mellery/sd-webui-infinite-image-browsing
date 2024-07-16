import{c as o,A as g,cM as i,cq as b,X as w,ae as c,df as y,dg as h,ag as x,cj as O,aa as S,x as l,dh as F,az as I,v as M,r as m,af as v,q as _,S as k,di as D}from"./index-1961a2a7.js";var j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"};const P=j;function p(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.forEach(function(r){V(a,r,t[r])})}return a}function V(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var d=function(e,t){var n=p({},e,t.attrs);return o(g,p({},n,{icon:P}),null)};d.displayName="DownloadOutlined";d.inheritAttrs=!1;const C=d,R=async a=>(await i.value.get("/files",{params:{folder_path:a}})).data,T=async a=>(await i.value.post("/delete_files",{file_paths:a})).data,U=async(a,e,t)=>(await i.value.post("/move_files",{file_paths:a,dest:e,create_dest_folder:t})).data,A=async(a,e,t)=>(await i.value.post("/copy_files",{file_paths:a,dest:e,create_dest_folder:t})).data,N=async a=>{await i.value.post("/mkdirs",{dest_folder:a})},E=async a=>(await i.value.post("/batch_get_files_info",{paths:a})).data,H=a=>{const e=m("");return new Promise(t=>{c.confirm({title:l("inputFolderName"),content:()=>o(v,{value:e.value,"onUpdate:value":n=>e.value=n},null),async onOk(){if(!e.value)return;const n=_(a,e.value);await N(n),t()}})})},$=()=>o("p",{style:{background:"var(--zp-secondary-background)",padding:"8px",borderLeft:"4px solid var(--primary-color)"}},[k("Tips: "),l("multiSelectTips")]),q=(a,e)=>{const t=b(),n=w(),r=s=>{var u;return!!((u=t.tagMap.get(a.fullpath))!=null&&u.some(f=>f.id===s))};c.confirm({width:"80vw",title:a.name,icon:null,content:()=>o("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},[o("video",{style:{maxHeight:y?"80vh":"60vh",maxWidth:"100%",minWidth:"70%"},src:h(a),controls:!0,autoplay:!0},null),o("div",{style:{marginTop:"4px"}},[n.conf.all_custom_tags.map(s=>o("div",{key:s.id,onClick:()=>e==null?void 0:e(s.id),style:{background:r(s.id)?t.getColor(s.name):"var(--zp-primary-background)",color:r(s.id)?"white":t.getColor(s.name),margin:"2px",padding:"2px 16px","border-radius":"4px",display:"inline-block",cursor:"pointer","font-weight":"bold",transition:".5s all ease",border:`2px solid ${t.getColor(s.name)}`,"user-select":"none"}},[s.name]))]),o("div",{class:"actions",style:{marginTop:"16px"}},[o(x,{onClick:()=>O([S(a,!0)])},{icon:o(C,null,null),default:l("download")})])]),maskClosable:!0,wrapClassName:"hidden-antd-btns-modal"})},B=()=>{c.confirm({title:l("confirmRebuildImageIndex"),onOk:async()=>{await F(),I.emit("searchIndexExpired"),M.success(l("rebuildComplete"))}})},G=a=>{const e=m(a.split(/[\\/]/).pop()??"");return new Promise(t=>{c.confirm({title:l("rename"),content:()=>o(v,{value:e.value,"onUpdate:value":n=>e.value=n},null),async onOk(){if(!e.value)return;const n=await D({path:a,name:e.value});t(n.new_path)}})})};export{$ as M,B as a,G as b,A as c,T as d,E as e,q as f,R as g,U as m,H as o};
