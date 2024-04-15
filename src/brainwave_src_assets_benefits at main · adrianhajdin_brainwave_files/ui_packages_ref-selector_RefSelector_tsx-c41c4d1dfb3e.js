"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_ref-selector_RefSelector_tsx"],{46037:(e,t,r)=>{r.d(t,{W:()=>SearchIndex,r:()=>n});var n,a=r(56363),i=r(43786);let{getItem:s,setItem:c,removeItem:o}=(0,a.Z)("localStorage",{throwQuotaErrorsOnSet:!0});!function(e){e.Branch="branch",e.Tag="tag"}(n||(n={}));let SearchIndex=class SearchIndex{render(){this.selector.render()}async fetchData(){try{if(!this.isLoading||this.fetchInProgress)return;if(!this.bootstrapFromLocalStorage()){this.fetchInProgress=!0,this.fetchFailed=!1;let e=await fetch(`${this.refEndpoint}?type=${this.refType}`,{headers:{Accept:"application/json"}});await this.processResponse(e)}this.isLoading=!1,this.fetchInProgress=!1,this.render()}catch(e){this.fetchInProgress=!1,this.fetchFailed=!0}}async processResponse(e){if(this.emitStats(e),!e.ok){this.fetchFailed=!0;return}let t=e.clone(),r=await e.json();this.knownItems=r.refs,this.cacheKey=r.cacheKey,this.flushToLocalStorage(await t.text())}emitStats(e){if(!e.ok){(0,i.b)({incrementKey:"REF_SELECTOR_BOOT_FAILED"},!0);return}switch(e.status){case 200:(0,i.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_UNCACHED_HTTP"});break;case 304:(0,i.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_HTTP_CACHE"});break;default:(0,i.b)({incrementKey:"REF_SELECTOR_UNEXPECTED_RESPONSE"})}}search(e){let t;if(this.searchTerm=e,""===e){this.currentSearchResult=this.knownItems;return}let r=[],n=[];for(let a of(this.exactMatchFound=!1,this.knownItems))if(!((t=a.indexOf(e))<0)){if(0===t){e===a?(n.unshift(a),this.exactMatchFound=!0):n.push(a);continue}r.push(a)}this.currentSearchResult=[...n,...r]}bootstrapFromLocalStorage(){let e=s(this.localStorageKey);if(!e)return!1;let t=JSON.parse(e);return t.cacheKey===this.cacheKey&&"refs"in t?(this.knownItems=t.refs,this.isLoading=!1,(0,i.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_LOCALSTORAGE"}),!0):(o(this.localStorageKey),!1)}async flushToLocalStorage(e){try{c(this.localStorageKey,e)}catch(t){if(t.message.toLowerCase().includes("quota")){this.clearSiblingLocalStorage(),(0,i.b)({incrementKey:"REF_SELECTOR_LOCALSTORAGE_OVERFLOWED"});try{c(this.localStorageKey,e)}catch(e){e.message.toLowerCase().includes("quota")&&(0,i.b)({incrementKey:"REF_SELECTOR_LOCALSTORAGE_GAVE_UP"})}}else throw t}}clearSiblingLocalStorage(){for(let e of Object.keys(localStorage))e.startsWith(SearchIndex.LocalStoragePrefix)&&o(e)}clearLocalStorage(){o(this.localStorageKey)}get localStorageKey(){return`${SearchIndex.LocalStoragePrefix}:${this.nameWithOwner}:${this.refType}`}constructor(e,t,r,n,a){this.knownItems=[],this.currentSearchResult=[],this.exactMatchFound=!1,this.searchTerm="",this.isLoading=!0,this.fetchInProgress=!1,this.fetchFailed=!1,this.refType=e,this.selector=t,this.refEndpoint=r,this.cacheKey=n,this.nameWithOwner=a}};SearchIndex.LocalStoragePrefix="ref-selector"},15631:(e,t,r)=>{r.d(t,{D:()=>s});var n=r(67294),a=r(22877),i=r(18);function s(e,t,r=[]){let s=(0,n.useCallback)(e,r),c=function(){let e=(0,n.useContext)(i.kb);return e}(),o=(0,n.useRef)(c===i.i$.ClientRender),[l,h]=(0,n.useState)(()=>c===i.i$.ClientRender?s():t),d=(0,n.useCallback)(()=>{h(s)},[s]);return(0,a.g)(()=>{o.current||h(s),o.current=!1},[s,...r]),[l,d]}},87623:(e,t,r)=>{function n(e,t={}){!function(e){let t=new URL(e,window.location.origin);if(t.origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let r={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:r})}function a(e,t){let r=t?.headers??{},a={...r,Accept:"application/json","Content-Type":"application/json"},i=t?.body?JSON.stringify(t.body):void 0;return n(e,{...t,body:i,headers:a})}r.d(t,{Q:()=>n,v:()=>a})},63984:(e,t,r)=>{r.d(t,{H:()=>o});var n,a=r(85893),i=r(42483),s=r(67294),c=r(78720);function o({items:e,itemHeight:t,sx:r,renderItem:n,makeKey:i}){let o=(0,s.useRef)(null),d=(0,s.useCallback)(()=>t,[t]),u=(0,c.o)({parentRef:o,size:e.length,estimateSize:d});return(0,a.jsx)(l,{ref:o,sx:r,virtualizer:u,children:u.virtualItems.map(t=>(0,a.jsx)(h,{virtualRow:t,children:n(e[t.index])},i(e[t.index])))})}let l=s.forwardRef(function({children:e,sx:t,virtualizer:r},n){return(0,a.jsx)(i.Z,{ref:n,sx:t,children:(0,a.jsx)(i.Z,{sx:{height:r.totalSize,width:"100%",position:"relative"},children:e})})});function h({children:e,virtualRow:t}){return(0,a.jsx)(i.Z,{sx:{position:"absolute",top:0,left:0,width:"100%",height:`${t.size}px`,transform:`translateY(${t.start}px)`},children:e})}try{o.displayName||(o.displayName="FixedSizeVirtualList")}catch{}try{(n=VirtualListContainerInner).displayName||(n.displayName="VirtualListContainerInner")}catch{}try{h.displayName||(h.displayName="ItemContainer")}catch{}},83822:(e,t,r)=>{r.d(t,{h:()=>i});var n=r(85893),a=r(42483);function i({text:e,search:t,hideOverflow:r=!1,overflowWidth:i=0}){let s=function(e,t){if(!t)return[e];let r=e.toLowerCase().split(t.toLowerCase());if(r.length<2)return[e];let n=0,a=[];for(let i of r)a.push(e.substring(n,n+i.length)),n+=i.length,a.push(e.substring(n,n+t.length)),n+=t.length;return a}(e,t),c=s.map((e,t)=>t%2==1?(0,n.jsx)("strong",{className:"color-fg-default",children:e},t):e),o=i?`${i}px`:void 0;return(0,n.jsx)(a.Z,{sx:{maxWidth:o,overflow:r?"hidden":"visible",textOverflow:"ellipsis",whiteSpace:"nowrap",color:t.length?"fg.muted":"fg.default"},children:c})}try{i.displayName||(i.displayName="HighlightedText")}catch{}},44355:(e,t,r)=>{r.d(t,{ox:()=>J,cq:()=>X,li:()=>Y,Z7:()=>U});var n=r(85893),a=r(31147),i=r(88216),s=r(51461),c=r(22326),o=r(85529),l=r(52516),h=r(42483),d=r(75308),u=r(50919),f=r(51526),x=r(74121),m=r(98833),p=r(97011),y=r(67294),g=r(71207),b=r(15631),S=r(74390),j=r(73935);function C({isOpen:e,onDismiss:t,onConfirm:r}){let[a]=(0,b.D)(()=>document.body,null,[g.n4?.body]);return a?(0,j.createPortal)((0,n.jsxs)(S.Z,{isOpen:e,onDismiss:t,children:[(0,n.jsx)(S.Z.Header,{children:"Create branch"}),(0,n.jsxs)(h.Z,{sx:{p:3},children:[(0,n.jsx)(p.Z,{children:"A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?"}),(0,n.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"flex-end",mt:3},children:[(0,n.jsx)(i.r,{onClick:t,children:"Cancel"}),(0,n.jsx)(i.r,{variant:"danger",onClick:r,sx:{ml:2},children:"Create"})]})]})]}),document.body):null}try{C.displayName||(C.displayName="CheckTagNameDialog")}catch{}var w=r(87623);async function R(e,t){let r=new FormData;r.set("value",t);let n=await (0,w.Q)(e,{method:"POST",body:r,headers:{Accept:"application/json"}});return!!n.ok&&!!await n.text()}async function T(e,t,r){let n=new FormData;n.set("name",t),n.set("branch",r);let a=await (0,w.Q)(e,{method:"POST",body:n,headers:{Accept:"application/json"}});if(a.ok)return{success:!0,name:(await a.json()).name};try{let{error:e}=await a.json();if(e)return{success:!1,error:e};throw Error("Unknown response from create branch API")}catch{return{success:!1,error:"Something went wrong."}}}var k=r(2708),L=r(48542);function N(e){let{hotKey:t,onOpenChange:r,size:a,currentCommitish:s,refType:c,children:l,preventClosing:d,inputRef:u,overlayOpen:f,onOverlayChange:x,focusTrapEnabled:m=!0,buttonClassName:g,allowResizing:b,useFocusZone:S}=e,j=e.idEnding?`-${e.idEnding}`:`-${Date.now()}`,C=(0,y.useRef)(`branch-picker${j}`),w=(0,y.useCallback)(e=>{x(e),r?.(e)},[r,x]),R=(0,y.useMemo)(()=>m?{initialFocusRef:u}:{initialFocusRef:u,disabled:!0},[m,u]);return(0,n.jsx)(k.w,{open:f,overlayProps:{role:"dialog",width:"medium"},onOpen:()=>w(!0),onClose:()=>!d&&w(!1),renderAnchor:e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.r,{...e,"data-hotkey":t,size:a,sx:{svg:{color:"fg.muted"},display:"flex",minWidth:b?0:void 0,"> span":{width:"inherit"}},trailingVisual:o.TriangleDownIcon,"aria-label":`${s} ${c}`,"data-testid":"anchor-button",id:C.current,className:g,children:(0,n.jsxs)(h.Z,{sx:{display:"flex",width:"100%"},children:[(0,n.jsx)(h.Z,{sx:{mr:1,color:"fg.muted"},children:"tag"===c?(0,n.jsx)(o.TagIcon,{size:"small"}):(0,n.jsx)(o.GitBranchIcon,{size:"small"})}),(0,n.jsx)(h.Z,{sx:{fontSize:1,minWidth:0,maxWidth:b?void 0:125,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},className:"ref-selector-button-text-container",children:(0,n.jsxs)(p.Z,{sx:{minWidth:0},children:["\xa0",s]})})]})}),(0,n.jsx)("button",{hidden:!0,"data-hotkey":t,onClick:()=>w(!0),"data-hotkey-scope":"read-only-cursor-text-area"})]}),focusTrapSettings:R,focusZoneSettings:S?{bindKeys:L.Qw.ArrowAll|L.Qw.Tab}:{disabled:!0},children:(0,n.jsx)(h.Z,{"data-testid":"overlay-content","aria-labelledby":C.current,id:"selectPanel",children:l})})}try{N.displayName||(N.displayName="RefSelectorAnchoredOverlay")}catch{}function E({text:e,onClick:t,href:r,sx:a}){let i=(0,n.jsx)(h.Z,{sx:{...a},children:e}),s={sx:{minWidth:0}};return r?(0,n.jsx)(l.S.LinkItem,{role:"link",href:r,onClick:()=>t?.(),...s,children:i}):(0,n.jsx)(l.S.Item,{role:"button",onSelect:()=>t?.(),...s,children:i})}try{E.displayName||(E.displayName="RefSelectorFooter")}catch{}var v=r(63984),O=r(63309),F=r(83822);let I=y.memo(function({isCurrent:e,isDefault:t,href:r,gitRef:a,filterText:i,ariaPosInSet:s,ariaSetSize:c,onSelect:o,onClick:h}){let d=(0,n.jsx)(Z,{gitRef:a,isDefault:t,isCurrent:e,filterText:i}),u={"aria-checked":e,"aria-posinset":s,"aria-setsize":c,sx:{minWidth:0},onSelect:()=>o?.(a),onClick:()=>h?.(a)};return r?(0,n.jsx)(l.S.LinkItem,{href:r,role:"menuitemradio",...u,children:d}):(0,n.jsx)(l.S.Item,{...u,children:d})}),Z=y.memo(function({isCurrent:e,isDefault:t,gitRef:r,filterText:a,showLeadingVisual:i=!0}){return(0,n.jsxs)(h.Z,{style:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsxs)(h.Z,{style:{display:"flex",minWidth:0,alignItems:"flex-end"},children:[i&&(0,n.jsx)(m.Z,{icon:o.CheckIcon,"aria-hidden":!0,sx:{pr:1,visibility:e?void 0:"hidden"}}),(0,n.jsx)(F.h,{hideOverflow:!0,search:a,text:r},r)]}),t&&(0,n.jsx)(O.Z,{children:"default"})]})});try{I.displayName||(I.displayName="RefItem")}catch{}try{Z.displayName||(Z.displayName="RefItemContent")}catch{}function _(e){return e.refs.length>20?(0,n.jsx)(D,{...e}):(0,n.jsx)(A,{...e})}function A({refs:e,defaultBranch:t,currentCommitish:r,getHref:a,filterText:i,onSelectItem:s}){return(0,n.jsx)(h.Z,{sx:{maxHeight:330,overflowY:"auto"},children:e.map(c=>(0,n.jsx)(I,{href:a?.(c),isCurrent:r===c,isDefault:t===c,filterText:i,gitRef:c,onSelect:s,onClick:s,ariaPosInSet:e.indexOf(c)+1,ariaSetSize:e.length},c))})}function D({refs:e,defaultBranch:t,currentCommitish:r,getHref:a,filterText:i,onSelectItem:s}){return(0,n.jsx)(v.H,{items:e,itemHeight:32,sx:{maxHeight:330,overflowY:"auto"},makeKey:e=>e,renderItem:c=>(0,n.jsx)(I,{href:a?.(c),isCurrent:r===c,isDefault:t===c,filterText:i,gitRef:c,onSelect:s,onClick:s,ariaPosInSet:e.indexOf(c)+1,ariaSetSize:e.length},c)})}try{_.displayName||(_.displayName="RefsList")}catch{}try{A.displayName||(A.displayName="FullRefsList")}catch{}try{D.displayName||(D.displayName="VirtualRefsList")}catch{}var B=r(46037);function P(e,t,r,n,a){return new B.W("branch"===n?B.r.Branch:B.r.Tag,a,(0,c.FL)({owner:t,repo:r,action:"refs"}),e,`${t}/${r}`)}function W(e,t){let r=e.fetchFailed?"failed":e.isLoading?"loading":"loaded",n=e.currentSearchResult,a=e.refType===B.r.Branch&&t&&e.searchTerm.length>0&&!e.exactMatchFound;return{status:r,refs:n,showCreateAction:a,searchIndex:e}}function K(e){let t=(0,y.useRef)();return t.current||(t.current=e()),t}function $(e){let{cacheKey:t,owner:r,repo:a,canCreate:i,types:s,hotKey:o,onOpenChange:l,size:h,getHref:d,onBeforeCreate:u,onRefTypeChanged:f,currentCommitish:x,onCreateError:m,onSelectItem:p,closeOnSelect:g,selectedRefType:b,customFooterItemProps:S,buttonClassName:j,allowResizing:w,idEnding:k,useFocusZone:L}=e,[E,v]=(0,y.useState)(""),O=(0,y.useRef)(null),F=(0,y.useRef)(null),[I,Z]=(0,y.useState)(!1),[_,A]=(0,y.useState)(!0),[D,B]=(0,y.useState)(!1),[$,H]=(0,y.useState)(b??(s??U)[0]),V=function(e,t,r,n,a,i){let[s,c]=(0,y.useState)({status:"uninitialized",refs:[],showCreateAction:!1,searchIndex:null}),o=(0,y.useRef)({render:()=>{c(W(h.current,i))}}),l=(0,y.useRef)({render:()=>{c(W(d.current,i))}}),h=K(()=>P(e,t,r,"branch",o.current)),d=K(()=>P(e,t,r,"tag",l.current));return(0,y.useEffect)(()=>{let a=`${t}/${r}`;h.current.nameWithOwner!==a&&(h.current=P(e,t,r,"branch",o.current)),d.current.nameWithOwner!==a&&(d.current=P(e,t,r,"tag",l.current)),async function(){let e="branch"===n?h.current:d.current;e.render(),await e.fetchData(),e.search(""),e.render()}()},[e,t,r,n,h,d]),(0,y.useEffect)(()=>{let e="branch"===n?h.current:d.current;e.search(a),e.render()},[a,n,h,d]),s}(t,r,a,$,E,i),M=(0,c.FL)({owner:r,repo:a,action:"branches"}),G=(0,c.dQ)({owner:r,repo:a}),Q=(0,y.useCallback)(async()=>{u?.(E);let e=await T(M,E,x);e.success?d&&(V.searchIndex?.clearLocalStorage(),window.location.href=d(e.name)):m?.(e.error)},[u,E,M,x,d,m,V.searchIndex]),q=(0,y.useCallback)(async()=>{if(await R(G,E)){B(!0),A(!1);return}B(!1),A(!1),Q()},[G,E,Q,B]),X=(0,y.useCallback)(e=>{H(e),f?.(e)},[H,f]);function Y(){Z(!1)}let J=(0,y.useCallback)((e,t)=>{p?.(e,t),Y()},[p]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N,{refType:$,currentCommitish:x,focusTrapEnabled:_,preventClosing:D,size:h,onOpenChange:l,hotKey:o,inputRef:O,overlayOpen:I,onOverlayChange:Z,buttonClassName:j,allowResizing:w,idEnding:k,useFocusZone:L,children:(0,n.jsx)(z,{filterText:E,onFilterChange:v,refType:$,selectedRefType:$,onRefTypeChange:X,refsState:V,onCreateError:e.onCreateError,showTagWarningDialog:D,setShowTagWarningDialog:B,onCreateBranch:q,inputRef:O,createButtonRef:F,onSelectItem:J,closeOnSelect:g,closeRefSelector:Y,customFooterItemProps:S,...e})}),D&&(0,n.jsx)(C,{isOpen:D,onDismiss:()=>{B(!1),F.current?.focus()},onConfirm:Q})]})}function z({canCreate:e,currentCommitish:t,defaultBranch:r,filterText:a,getHref:i,hideShowAll:s,onSelectItem:c,closeOnSelect:f,closeRefSelector:x,onFilterChange:m,onRefTypeChange:p,owner:y,selectedRefType:g,refsState:b,refType:S,repo:j,types:C,onCreateBranch:w,inputRef:R,createButtonRef:T,customFooterItemProps:k,viewAllJustify:L}){var N;let{refs:v,showCreateAction:O,status:F}=b;return(0,n.jsxs)(l.S,{showDividers:!0,children:[(0,n.jsxs)(h.Z,{sx:{borderBottom:"1px solid",borderColor:"border.subtle",pb:2},children:[(0,n.jsxs)(h.Z,{sx:{display:"flex",pb:2,px:2,justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(d.Z,{as:"h5",sx:{pl:2,fontSize:"inherit"},children:(N=C??U).includes("branch")&&N.includes("tag")?"Switch branches/tags":N.includes("branch")?"Switch branches":N.includes("tag")?"Switch tags":void 0}),(0,n.jsx)(u.h,{"aria-label":"Cancel",variant:"invisible",icon:o.XIcon,sx:{color:"fg.muted"},onClick:x})]}),(0,n.jsx)(H,{defaultText:a,refType:S,canCreate:e,onFilterChange:m,ref:R})]}),(0,n.jsxs)(h.Z,{sx:{pt:2,pb:O&&0===v.length?0:2},children:[(C??U).length>1&&(0,n.jsx)(h.Z,{sx:{px:2,pb:2},children:(0,n.jsx)(Y,{refType:S,onRefTypeChanged:p,sx:{mx:-2,borderBottom:"1px solid",borderColor:"border.muted","> nav":{borderBottom:"none"}}})}),"loading"===F||"uninitialized"===F?(0,n.jsx)(M,{refType:S}):"failed"===F?(0,n.jsx)(J,{refType:S}):0!==v.length||O?(0,n.jsx)(_,{filterText:a,refs:v,defaultBranch:"branch"===S?r:"",currentCommitish:S===g?t:"",getHref:i,onSelectItem:e=>{c?.(e,S),f&&x()}}):(0,n.jsx)(G,{})]}),O&&(0,n.jsxs)(n.Fragment,{children:[v.length>0&&(0,n.jsx)(l.S.Divider,{sx:{marginTop:0,backgroundColor:"border.subtle"}}),(0,n.jsx)(q,{currentCommitish:t,newRefName:a,onCreateBranch:w,createButtonRef:T})]}),(!s||k)&&(0,n.jsx)(l.S.Divider,{sx:{marginTop:O?2:0,backgroundColor:"border.subtle"}}),!s&&(0,n.jsx)(Q,{justify:L,refType:S,owner:y,repo:j,onClick:x}),k&&(0,n.jsx)(E,{...k,onClick:function(){k?.onClick?.(),x()}})]})}let H=(0,y.forwardRef)(V);function V({refType:e,canCreate:t,onFilterChange:r,defaultText:a},i){return(0,n.jsx)(h.Z,{sx:{px:2},children:(0,n.jsx)(f.Z,{leadingVisual:o.SearchIcon,value:a,sx:{width:"100%"},placeholder:"tag"===e?"Find a tag...":t?"Find or create a branch...":"Find a branch...",ref:i,onInput:e=>{let t=e.target;t instanceof HTMLInputElement&&r(t.value)}})})}function M({refType:e}){return(0,n.jsx)(h.Z,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,n.jsx)(x.Z,{size:"medium","aria-label":`Loading ${"branch"===e?"branches":"tags"}...`})})}function G(){return(0,n.jsx)(h.Z,{sx:{p:3,display:"flex",justifyContent:"center"},children:"Nothing to show"})}function Q({refType:e,owner:t,repo:r,onClick:a,justify:i="start"}){let s="branch"===e?"branches":"tags";return(0,n.jsx)(l.S.LinkItem,{role:"link",href:(0,c.FL)({owner:t,repo:r,action:s}),onClick:a,sx:{display:"flex",justifyContent:"center"},children:(0,n.jsxs)(h.Z,{sx:{display:"flex",justifyContent:i},children:["View all ",s]})})}function q({currentCommitish:e,newRefName:t,onCreateBranch:r,createButtonRef:a}){return(0,n.jsxs)(l.S.Item,{role:"button",onSelect:r,ref:a,children:[(0,n.jsx)(m.Z,{icon:o.GitBranchIcon,sx:{mr:2,color:"fg.muted"}}),(0,n.jsx)(p.Z,{children:"Create branch\xa0"}),(0,n.jsx)(p.Z,{sx:{fontWeight:600,fontFamily:"monospace"},children:t}),(0,n.jsx)(p.Z,{children:"\xa0from\xa0"}),(0,n.jsx)(p.Z,{sx:{fontWeight:600,fontFamily:"monospace"},children:e})]})}try{$.displayName||($.displayName="RefSelectorV1")}catch{}try{z.displayName||(z.displayName="RefSelectorActionList")}catch{}try{H.displayName||(H.displayName="RefTextFilter")}catch{}try{V.displayName||(V.displayName="RefTextFilterWithRef")}catch{}try{M.displayName||(M.displayName="Loading")}catch{}try{G.displayName||(G.displayName="RefsZeroState")}catch{}try{Q.displayName||(Q.displayName="ViewAllRefsAction")}catch{}try{q.displayName||(q.displayName="CreateRefAction")}catch{}let U=["branch","tag"];function X(e){return(0,n.jsx)($,{...e})}function Y({refType:e,onRefTypeChanged:t,sx:r}){return(0,n.jsxs)(a.Z,{sx:{pl:2,...r},"aria-label":"Ref type",children:[(0,n.jsx)(a.Z.Link,{as:i.r,id:"branch-button","aria-controls":"branches",selected:"branch"===e,onClick:()=>t("branch"),sx:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:"Branches"}),(0,n.jsx)(a.Z.Link,{as:i.r,id:"tag-button","aria-controls":"tags",selected:"tag"===e,onClick:()=>t("tag"),sx:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:"Tags"})]})}function J({refType:e}){return(0,n.jsxs)(s.Z,{variant:"danger",children:["Could not load ","branch"===e?"branches":"tags"]})}try{X.displayName||(X.displayName="RefSelector")}catch{}try{Y.displayName||(Y.displayName="RefTypeTabs")}catch{}try{J.displayName||(J.displayName="LoadingFailed")}catch{}}}]);
//# sourceMappingURL=ui_packages_ref-selector_RefSelector_tsx-f2ba66857bb3.js.map