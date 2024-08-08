import{u as $e,b as Fe}from"./QPage.b2ce7923.js";import{c as D,an as He,ao as Ve,r as S,a as v,h as y,V as be,a4 as ge,ap as De,g as j,d as ee,w as R,aq as Me,o as Qe,q as Z,ar as I,t as Ae,a3 as ze,as as Ie,at as Oe,au as Re,L as je,j as te,J as Ke,a8 as q,av as ie,k as E,aw as We,T as ae,aj as Ue}from"./index.ea3a4f47.js";import{u as Ne}from"./utils.a2b22fbd.js";import{r as se,j as Ge,e as Xe}from"./QCardSection.b0c042f9.js";import{b as Ye,a as Je,h as Ze}from"./scroll.3ca94129.js";var Tt=D({name:"QItem",props:{...$e,...He,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:l}){const{proxy:{$q:n}}=j(),o=Fe(e,n),{hasLink:c,linkAttrs:s,linkClass:u,linkTag:d,navigateOnClick:h}=Ve(),f=S(null),b=S(null),g=v(()=>e.clickable===!0||c.value===!0||e.tag==="label"),w=v(()=>e.disable!==!0&&g.value===!0),p=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?u.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(w.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),P=v(()=>{if(e.insetLevel===void 0)return null;const r=n.lang.rtl===!0?"Right":"Left";return{["padding"+r]:16+e.insetLevel*56+"px"}});function k(r){w.value===!0&&(b.value!==null&&(r.qKeyEvent!==!0&&document.activeElement===f.value?b.value.focus():document.activeElement===b.value&&f.value.focus()),h(r))}function L(r){if(w.value===!0&&be(r,[13,32])===!0){ge(r),r.qKeyEvent=!0;const $=new MouseEvent("click",r);$.qKeyEvent=!0,f.value.dispatchEvent($)}l("keyup",r)}function a(){const r=De(t.default,[]);return w.value===!0&&r.unshift(y("div",{class:"q-focus-helper",tabindex:-1,ref:b})),r}return()=>{const r={ref:f,class:p.value,style:P.value,role:"listitem",onClick:k,onKeyup:L};return w.value===!0?(r.tabindex=e.tabindex||"0",Object.assign(r,s.value)):g.value===!0&&(r["aria-disabled"]="true"),y(d.value,r,a())}}}),xt=D({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const l=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>y("div",{class:l.value},ee(t.default))}}),Pt=D({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const l=v(()=>parseInt(e.lines,10)),n=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),o=v(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>y("div",{style:o.value,class:n.value},ee(t.default))}});const et={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},tt=["beforeShow","show","beforeHide","hide"];function lt({showing:e,canShow:t,hideOnRouteChange:l,handleShow:n,handleHide:o,processOnMount:c}){const s=j(),{props:u,emit:d,proxy:h}=s;let f;function b(a){e.value===!0?p(a):g(a)}function g(a){if(u.disable===!0||a!==void 0&&a.qAnchorHandled===!0||t!==void 0&&t(a)!==!0)return;const r=u["onUpdate:modelValue"]!==void 0;r===!0&&(d("update:modelValue",!0),f=a,Z(()=>{f===a&&(f=void 0)})),(u.modelValue===null||r===!1)&&w(a)}function w(a){e.value!==!0&&(e.value=!0,d("beforeShow",a),n!==void 0?n(a):d("show",a))}function p(a){if(u.disable===!0)return;const r=u["onUpdate:modelValue"]!==void 0;r===!0&&(d("update:modelValue",!1),f=a,Z(()=>{f===a&&(f=void 0)})),(u.modelValue===null||r===!1)&&P(a)}function P(a){e.value!==!1&&(e.value=!1,d("beforeHide",a),o!==void 0?o(a):d("hide",a))}function k(a){u.disable===!0&&a===!0?u["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):a===!0!==e.value&&(a===!0?w:P)(f)}R(()=>u.modelValue,k),l!==void 0&&Me(s)===!0&&R(()=>h.$route.fullPath,()=>{l.value===!0&&e.value===!0&&p()}),c===!0&&Qe(()=>{k(u.modelValue)});const L={show:g,hide:p,toggle:b};return Object.assign(h,L),L}const O=[];function Lt(e){return O.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function nt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return I(e)}else if(e.__qPortal===!0){const l=I(e);return l!==void 0&&l.$options.name==="QPopupProxy"?(e.hide(t),l):e}e=I(e)}while(e!=null)}function Bt(e,t,l){for(;l!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(l--,e.$options.name==="QMenu"){e=nt(e,t);continue}e.hide(t)}e=I(e)}}const ot=D({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function it(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function at(e,t,l,n){const o=S(!1),c=S(!1);let s=null;const u={},d=n==="dialog"&&it(e);function h(b){if(b===!0){se(u),c.value=!0;return}c.value=!1,o.value===!1&&(d===!1&&s===null&&(s=Oe(!1,n)),o.value=!0,O.push(e.proxy),Ge(u))}function f(b){if(c.value=!1,b!==!0)return;se(u),o.value=!1;const g=O.indexOf(e.proxy);g!==-1&&O.splice(g,1),s!==null&&(Re(s),s=null)}return Ae(()=>{f(!0)}),e.proxy.__qPortal=!0,ze(e.proxy,"contentEl",()=>t.value),{showPortal:h,hidePortal:f,portalIsActive:o,portalIsAccessible:c,renderPortal:()=>d===!0?l():o.value===!0?[y(Ie,{to:s},y(ot,l))]:void 0}}const st={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function rt(e,t=()=>{},l=()=>{}){return{transitionProps:v(()=>{const n=`q-transition--${e.transitionShow||t()}`,o=`q-transition--${e.transitionHide||l()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:v(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function ut(){let e;const t=j();function l(){e=void 0}return je(l),te(l),{removeTick:l,registerTick(n){e=n,Z(()=>{e===n&&(Ke(t)===!1&&e(),e=void 0)})}}}const T=[];let C;function ct(e){C=e.keyCode===27}function dt(){C===!0&&(C=!1)}function ft(e){C===!0&&(C=!1,be(e,27)===!0&&T[T.length-1](e))}function we(e){window[e]("keydown",ct),window[e]("blur",dt),window[e]("keyup",ft),C=!1}function mt(e){q.is.desktop===!0&&(T.push(e),T.length===1&&we("addEventListener"))}function re(e){const t=T.indexOf(e);t!==-1&&(T.splice(t,1),T.length===0&&we("removeEventListener"))}const x=[];function ye(e){x[x.length-1](e)}function vt(e){q.is.desktop===!0&&(x.push(e),x.length===1&&document.body.addEventListener("focusin",ye))}function ue(e){const t=x.indexOf(e);t!==-1&&(x.splice(t,1),x.length===0&&document.body.removeEventListener("focusin",ye))}function ht(e,t,l){let n;function o(){n!==void 0&&(ie.remove(n),n=void 0)}return te(()=>{e.value===!0&&o()}),{removeFromHistory:o,addToHistory(){n={condition:()=>l.value===!0,handler:t},ie.add(n)}}}let H=0,X,Y,V,J=!1,ce,de,fe,_=null;function bt(e){gt(e)&&ge(e)}function gt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=We(e),l=e.shiftKey&&!e.deltaX,n=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),o=l||n?e.deltaY:e.deltaX;for(let c=0;c<t.length;c++){const s=t[c];if(Ze(s,n))return n?o<0&&s.scrollTop===0?!0:o>0&&s.scrollTop+s.clientHeight===s.scrollHeight:o<0&&s.scrollLeft===0?!0:o>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function me(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function A(e){J!==!0&&(J=!0,requestAnimationFrame(()=>{J=!1;const{height:t}=e.target,{clientHeight:l,scrollTop:n}=document.scrollingElement;(V===void 0||t!==window.innerHeight)&&(V=l-t,document.scrollingElement.scrollTop=n),n>V&&(document.scrollingElement.scrollTop-=Math.ceil((n-V)/8))}))}function ve(e){const t=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:o}=window.getComputedStyle(t);X=Ye(window),Y=Je(window),ce=t.style.left,de=t.style.top,fe=window.location.href,t.style.left=`-${X}px`,t.style.top=`-${Y}px`,o!=="hidden"&&(o==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,q.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",A,E.passiveCapture),window.visualViewport.addEventListener("scroll",A,E.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",me,E.passiveCapture))}q.is.desktop===!0&&q.is.mac===!0&&window[`${e}EventListener`]("wheel",bt,E.notPassive),e==="remove"&&(q.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",A,E.passiveCapture),window.visualViewport.removeEventListener("scroll",A,E.passiveCapture)):window.removeEventListener("scroll",me,E.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=ce,t.style.top=de,window.location.href===fe&&window.scrollTo(X,Y),V=void 0)}function wt(e){let t="add";if(e===!0){if(H++,_!==null){clearTimeout(_),_=null;return}if(H>1)return}else{if(H===0||(H--,H>0))return;if(t="remove",q.is.ios===!0&&q.is.nativeMobile===!0){_!==null&&clearTimeout(_),_=setTimeout(()=>{ve(t),_=null},100);return}}ve(t)}function yt(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,wt(t))}}}let z=0;const pt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},he={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Ct=D({name:"QDialog",inheritAttrs:!1,props:{...et,...st,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>["standard","top","bottom","left","right"].includes(e)}},emits:[...tt,"shake","click","escapeKey"],setup(e,{slots:t,emit:l,attrs:n}){const o=j(),c=S(null),s=S(!1),u=S(!1);let d=null,h=null,f,b;const g=v(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:w}=yt(),{registerTimeout:p}=Ne(),{registerTick:P,removeTick:k}=ut(),{transitionProps:L,transitionStyle:a}=rt(e,()=>he[e.position][0],()=>he[e.position][1]),r=v(()=>a.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:$,hidePortal:le,portalIsAccessible:pe,renderPortal:qe}=at(o,c,Ce,"dialog"),{hide:M}=lt({showing:s,hideOnRouteChange:g,handleShow:xe,handleHide:Pe,processOnMount:!0}),{addToHistory:ke,removeFromHistory:Ee}=ht(s,M,g),_e=v(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${pt[e.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),Q=v(()=>s.value===!0&&e.seamless!==!0),Se=v(()=>e.autoClose===!0?{onClick:Le}:{}),Te=v(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${Q.value===!0?"modal":"seamless"}`,n.class]);R(()=>e.maximized,i=>{s.value===!0&&U(i)}),R(Q,i=>{w(i),i===!0?(vt(N),mt(W)):(ue(N),re(W))});function xe(i){ke(),h=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,U(e.maximized),$(),u.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),P(F)):k(),p(()=>{if(o.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:m,bottom:B}=document.activeElement.getBoundingClientRect(),{innerHeight:oe}=window,G=window.visualViewport!==void 0?window.visualViewport.height:oe;m>0&&B>G/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-G,B>=oe?1/0:Math.ceil(document.scrollingElement.scrollTop+B-G/2))),document.activeElement.scrollIntoView()}b=!0,c.value.click(),b=!1}$(!0),u.value=!1,l("show",i)},e.transitionDuration)}function Pe(i){k(),Ee(),ne(!0),u.value=!0,le(),h!==null&&(((i&&i.type.indexOf("key")===0?h.closest('[tabindex]:not([tabindex^="-"])'):void 0)||h).focus(),h=null),p(()=>{le(!0),u.value=!1,l("hide",i)},e.transitionDuration)}function F(i){Xe(()=>{let m=c.value;if(m!==null){if(i!==void 0){const B=m.querySelector(i);if(B!==null){B.focus({preventScroll:!0});return}}m.contains(document.activeElement)!==!0&&(m=m.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||m.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||m.querySelector("[autofocus], [data-autofocus]")||m,m.focus({preventScroll:!0}))}})}function K(i){i&&typeof i.focus=="function"?i.focus({preventScroll:!0}):F(),l("shake");const m=c.value;m!==null&&(m.classList.remove("q-animate--scale"),m.classList.add("q-animate--scale"),d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,c.value!==null&&(m.classList.remove("q-animate--scale"),F())},170))}function W(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&K():(l("escapeKey"),M()))}function ne(i){d!==null&&(clearTimeout(d),d=null),(i===!0||s.value===!0)&&(U(!1),e.seamless!==!0&&(w(!1),ue(N),re(W))),i!==!0&&(h=null)}function U(i){i===!0?f!==!0&&(z<1&&document.body.classList.add("q-body--dialog"),z++,f=!0):f===!0&&(z<2&&document.body.classList.remove("q-body--dialog"),z--,f=!1)}function Le(i){b!==!0&&(M(i),l("click",i))}function Be(i){e.persistent!==!0&&e.noBackdropDismiss!==!0?M(i):e.noShake!==!0&&K()}function N(i){e.allowFocusOutside!==!0&&pe.value===!0&&Ue(c.value,i.target)!==!0&&F('[tabindex]:not([tabindex="-1"])')}Object.assign(o.proxy,{focus:F,shake:K,__updateRefocusTarget(i){h=i||null}}),te(ne);function Ce(){return y("div",{role:"dialog","aria-modal":Q.value===!0?"true":"false",...n,class:Te.value},[y(ae,{name:"q-transition--fade",appear:!0},()=>Q.value===!0?y("div",{class:"q-dialog__backdrop fixed-full",style:r.value,"aria-hidden":"true",tabindex:-1,onClick:Be}):null),y(ae,L.value,()=>s.value===!0?y("div",{ref:c,class:_e.value,style:a.value,tabindex:-1,...Se.value},ee(t.default)):null)])}return qe}});export{Ct as Q,st as a,tt as b,ut as c,rt as d,lt as e,at as f,vt as g,re as h,mt as i,nt as j,xt as k,Pt as l,Tt as m,Lt as n,Bt as o,O as p,ue as r,et as u};