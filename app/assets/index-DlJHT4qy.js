var Pp=Object.defineProperty;var Vl=n=>{throw TypeError(n)};var Rp=(n,e,t)=>e in n?Pp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ie=(n,e,t)=>Rp(n,typeof e!="symbol"?e+"":e,t),ho=(n,e,t)=>e.has(n)||Vl("Cannot "+t);var p=(n,e,t)=>(ho(n,e,"read from private field"),t?t.call(n):e.get(n)),re=(n,e,t)=>e.has(n)?Vl("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),B=(n,e,t,i)=>(ho(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t),N=(n,e,t)=>(ho(n,e,"access private method"),t);var Ms=(n,e,t,i)=>({set _(s){B(n,e,s,t)},get _(){return p(n,e,i)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Z={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return Wl(this.context.count)},getNextContextId(){return Wl(this.context.count++)}};function Wl(n){const e=String(n),t=e.length-1;return Z.context.id+(t?String.fromCharCode(96+t):"")+e}function Fi(n){Z.context=n}const Np=(n,e)=>n===e,Pt=Symbol("solid-proxy"),Op=typeof Proxy=="function",jo=Symbol("solid-track"),nr={equals:Np};let ed=sd;const Jt=1,ir=2,td={owned:null,cleanups:null,context:null,owner:null},fo={};var he=null;let oi=null,Lp=null,me=null,ze=null,bt=null,jr=0;function ai(n,e){const t=me,i=he,s=n.length===0,r=e===void 0?i:e,o=s?td:{owned:null,cleanups:null,context:r?r.context:null,owner:r},a=s?n:()=>n(()=>ot(()=>ns(o)));he=o,me=null;try{return Bt(a,!0)}finally{me=t,he=i}}function T(n,e){e=e?Object.assign({},nr,e):nr;const t={value:n,observers:null,observerSlots:null,comparator:e.equals||void 0},i=s=>(typeof s=="function"&&(s=s(t.value)),id(t,s));return[nd.bind(t),i]}function Hl(n,e,t){const i=zr(n,e,!0,Jt);Si(i)}function R(n,e,t){const i=zr(n,e,!1,Jt);Si(i)}function It(n,e,t){ed=Bp;const i=zr(n,e,!1,Jt),s=yi&&ws(yi);s&&(i.suspense=s),(!t||!t.render)&&(i.user=!0),bt?bt.push(i):Si(i)}function Y(n,e,t){t=t?Object.assign({},nr,t):nr;const i=zr(n,e,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=t.equals||void 0,Si(i),nd.bind(i)}function Dp(n){return n&&typeof n=="object"&&"then"in n}function ct(n,e,t){let i,s,r;arguments.length===2&&typeof e=="object"||arguments.length===1?(i=!0,s=n,r=e||{}):(i=n,s=e,r={});let o=null,a=fo,l=null,c=!1,u=!1,d="initialValue"in r,h=typeof i=="function"&&Y(i);const f=new Set,[g,v]=(r.storage||T)(r.initialValue),[y,w]=T(void 0),[I,S]=T(void 0,{equals:!1}),[C,$]=T(d?"ready":"unresolved");Z.context&&(l=Z.getNextContextId(),r.ssrLoadFrom==="initial"?a=r.initialValue:Z.load&&Z.has(l)&&(a=Z.load(l)));function k(P,D,F,L){return o===P&&(o=null,L!==void 0&&(d=!0),(P===a||D===a)&&r.onHydrated&&queueMicrotask(()=>r.onHydrated(L,{value:D})),a=fo,M(D,F)),D}function M(P,D){Bt(()=>{D===void 0&&v(()=>P),$(D!==void 0?"errored":d?"ready":"unresolved"),w(D);for(const F of f.keys())F.decrement();f.clear()},!1)}function U(){const P=yi&&ws(yi),D=g(),F=y();if(F!==void 0&&!o)throw F;return me&&!me.user&&P&&Hl(()=>{I(),o&&(P.resolved&&oi&&c?oi.promises.add(o):f.has(P)||(P.increment(),f.add(P)))}),D}function E(P=!0){if(P!==!1&&u)return;u=!1;const D=h?h():i;if(c=oi,D==null||D===!1){k(o,ot(g));return}const F=a!==fo?a:ot(()=>s(D,{value:g(),refetching:P}));return Dp(F)?(o=F,"value"in F?(F.status==="success"?k(o,F.value,void 0,D):k(o,void 0,Go(F.value),D),F):(u=!0,queueMicrotask(()=>u=!1),Bt(()=>{$(d?"refreshing":"pending"),S()},!1),F.then(L=>k(F,L,void 0,D),L=>k(F,void 0,Go(L),D)))):(k(o,F,void 0,D),F)}return Object.defineProperties(U,{state:{get:()=>C()},error:{get:()=>y()},loading:{get(){const P=C();return P==="pending"||P==="refreshing"}},latest:{get(){if(!d)return U();const P=y();if(P&&!o)throw P;return g()}}}),h?Hl(()=>E(!1)):E(!1),[U,{refetch:E,mutate:v}]}function Mp(n){return Bt(n,!1)}function ot(n){if(me===null)return n();const e=me;me=null;try{return n()}finally{me=e}}function qi(n,e,t){const i=Array.isArray(n);let s,r=t&&t.defer;return o=>{let a;if(i){a=Array(n.length);for(let c=0;c<n.length;c++)a[c]=n[c]()}else a=n();if(r)return r=!1,o;const l=ot(()=>e(a,s,o));return s=a,l}}function Tn(n){It(()=>ot(n))}function Ze(n){return he===null||(he.cleanups===null?he.cleanups=[n]:he.cleanups.push(n)),n}function Bo(){return me}function zo(){return he}function Up(n,e){const t=he,i=me;he=n,me=null;try{return Bt(e,!0)}catch(s){Oa(s)}finally{he=t,me=i}}function Fp(n){bt.push.apply(bt,n),n.length=0}function Br(n,e){const t=Symbol("context");return{id:t,Provider:zp(t),defaultValue:n}}function ws(n){let e;return he&&he.context&&(e=he.context[n.id])!==void 0?e:n.defaultValue}function Vp(n){const e=Y(n),t=Y(()=>qo(e()));return t.toArray=()=>{const i=t();return Array.isArray(i)?i:i!=null?[i]:[]},t}let yi;function Wp(){return yi||(yi=Br())}function nd(){if(this.sources&&this.state)if(this.state===Jt)Si(this);else{const n=ze;ze=null,Bt(()=>rr(this),!1),ze=n}if(me){const n=this.observers?this.observers.length:0;me.sources?(me.sources.push(this),me.sourceSlots.push(n)):(me.sources=[this],me.sourceSlots=[n]),this.observers?(this.observers.push(me),this.observerSlots.push(me.sources.length-1)):(this.observers=[me],this.observerSlots=[me.sources.length-1])}return this.value}function id(n,e,t){let i=n.value;return(!n.comparator||!n.comparator(i,e))&&(n.value=e,n.observers&&n.observers.length&&Bt(()=>{for(let s=0;s<n.observers.length;s+=1){const r=n.observers[s],o=oi&&oi.running;o&&oi.disposed.has(r),(o?!r.tState:!r.state)&&(r.pure?ze.push(r):bt.push(r),r.observers&&rd(r)),o||(r.state=Jt)}if(ze.length>1e6)throw ze=[],new Error},!1)),e}function Si(n){if(!n.fn)return;ns(n);const e=jr;Hp(n,n.value,e)}function Hp(n,e,t){let i;const s=he,r=me;me=he=n;try{i=n.fn(e)}catch(o){return n.pure&&(n.state=Jt,n.owned&&n.owned.forEach(ns),n.owned=null),n.updatedAt=t+1,Oa(o)}finally{me=r,he=s}(!n.updatedAt||n.updatedAt<=t)&&(n.updatedAt!=null&&"observers"in n?id(n,i):n.value=i,n.updatedAt=t)}function zr(n,e,t,i=Jt,s){const r={fn:n,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:he,context:he?he.context:null,pure:t};return he===null||he!==td&&(he.owned?he.owned.push(r):he.owned=[r]),r}function sr(n){if(n.state===0)return;if(n.state===ir)return rr(n);if(n.suspense&&ot(n.suspense.inFallback))return n.suspense.effects.push(n);const e=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<jr);)n.state&&e.push(n);for(let t=e.length-1;t>=0;t--)if(n=e[t],n.state===Jt)Si(n);else if(n.state===ir){const i=ze;ze=null,Bt(()=>rr(n,e[0]),!1),ze=i}}function Bt(n,e){if(ze)return n();let t=!1;e||(ze=[]),bt?t=!0:bt=[],jr++;try{const i=n();return jp(t),i}catch(i){t||(bt=null),ze=null,Oa(i)}}function jp(n){if(ze&&(sd(ze),ze=null),n)return;const e=bt;bt=null,e.length&&Bt(()=>ed(e),!1)}function sd(n){for(let e=0;e<n.length;e++)sr(n[e])}function Bp(n){let e,t=0;for(e=0;e<n.length;e++){const i=n[e];i.user?n[t++]=i:sr(i)}if(Z.context){if(Z.count){Z.effects||(Z.effects=[]),Z.effects.push(...n.slice(0,t));return}Fi()}for(Z.effects&&(Z.done||!Z.count)&&(n=[...Z.effects,...n],t+=Z.effects.length,delete Z.effects),e=0;e<t;e++)sr(n[e])}function rr(n,e){n.state=0;for(let t=0;t<n.sources.length;t+=1){const i=n.sources[t];if(i.sources){const s=i.state;s===Jt?i!==e&&(!i.updatedAt||i.updatedAt<jr)&&sr(i):s===ir&&rr(i,e)}}}function rd(n){for(let e=0;e<n.observers.length;e+=1){const t=n.observers[e];t.state||(t.state=ir,t.pure?ze.push(t):bt.push(t),t.observers&&rd(t))}}function ns(n){let e;if(n.sources)for(;n.sources.length;){const t=n.sources.pop(),i=n.sourceSlots.pop(),s=t.observers;if(s&&s.length){const r=s.pop(),o=t.observerSlots.pop();i<s.length&&(r.sourceSlots[o]=i,s[i]=r,t.observerSlots[i]=o)}}if(n.tOwned){for(e=n.tOwned.length-1;e>=0;e--)ns(n.tOwned[e]);delete n.tOwned}if(n.owned){for(e=n.owned.length-1;e>=0;e--)ns(n.owned[e]);n.owned=null}if(n.cleanups){for(e=n.cleanups.length-1;e>=0;e--)n.cleanups[e]();n.cleanups=null}n.state=0}function Go(n){return n instanceof Error?n:new Error(typeof n=="string"?n:"Unknown error",{cause:n})}function Oa(n,e=he){throw Go(n)}function qo(n){if(typeof n=="function"&&!n.length)return qo(n());if(Array.isArray(n)){const e=[];for(let t=0;t<n.length;t++){const i=qo(n[t]);Array.isArray(i)?e.push.apply(e,i):e.push(i)}return e}return n}function zp(n,e){return function(i){let s;return R(()=>s=ot(()=>(he.context={...he.context,[n]:i.value},Vp(()=>i.children))),void 0),s}}const Gp=Symbol("fallback");function jl(n){for(let e=0;e<n.length;e++)n[e]()}function qp(n,e,t={}){let i=[],s=[],r=[],o=0,a=e.length>1?[]:null;return Ze(()=>jl(r)),()=>{let l=n()||[],c=l.length,u,d;return l[jo],ot(()=>{let f,g,v,y,w,I,S,C,$;if(c===0)o!==0&&(jl(r),r=[],i=[],s=[],o=0,a&&(a=[])),t.fallback&&(i=[Gp],s[0]=ai(k=>(r[0]=k,t.fallback())),o=1);else if(o===0){for(s=new Array(c),d=0;d<c;d++)i[d]=l[d],s[d]=ai(h);o=c}else{for(v=new Array(c),y=new Array(c),a&&(w=new Array(c)),I=0,S=Math.min(o,c);I<S&&i[I]===l[I];I++);for(S=o-1,C=c-1;S>=I&&C>=I&&i[S]===l[C];S--,C--)v[C]=s[S],y[C]=r[S],a&&(w[C]=a[S]);for(f=new Map,g=new Array(C+1),d=C;d>=I;d--)$=l[d],u=f.get($),g[d]=u===void 0?-1:u,f.set($,d);for(u=I;u<=S;u++)$=i[u],d=f.get($),d!==void 0&&d!==-1?(v[d]=s[u],y[d]=r[u],a&&(w[d]=a[u]),d=g[d],f.set($,d)):r[u]();for(d=I;d<c;d++)d in v?(s[d]=v[d],r[d]=y[d],a&&(a[d]=w[d],a[d](d))):s[d]=ai(h);s=s.slice(0,o=c),i=l.slice(0)}return s});function h(f){if(r[d]=f,a){const[g,v]=T(d);return a[d]=v,e(l[d],g)}return e(l[d])}}}function m(n,e){return ot(()=>n(e||{}))}function Us(){return!0}const Kp={get(n,e,t){return e===Pt?t:n.get(e)},has(n,e){return e===Pt?!0:n.has(e)},set:Us,deleteProperty:Us,getOwnPropertyDescriptor(n,e){return{configurable:!0,enumerable:!0,get(){return n.get(e)},set:Us,deleteProperty:Us}},ownKeys(n){return n.keys()}};function po(n){return(n=typeof n=="function"?n():n)?n:{}}function Yp(){for(let n=0,e=this.length;n<e;++n){const t=this[n]();if(t!==void 0)return t}}function Qp(...n){let e=!1;for(let o=0;o<n.length;o++){const a=n[o];e=e||!!a&&Pt in a,n[o]=typeof a=="function"?(e=!0,Y(a)):a}if(Op&&e)return new Proxy({get(o){for(let a=n.length-1;a>=0;a--){const l=po(n[a])[o];if(l!==void 0)return l}},has(o){for(let a=n.length-1;a>=0;a--)if(o in po(n[a]))return!0;return!1},keys(){const o=[];for(let a=0;a<n.length;a++)o.push(...Object.keys(po(n[a])));return[...new Set(o)]}},Kp);const t={},i=Object.create(null);for(let o=n.length-1;o>=0;o--){const a=n[o];if(!a)continue;const l=Object.getOwnPropertyNames(a);for(let c=l.length-1;c>=0;c--){const u=l[c];if(u==="__proto__"||u==="constructor")continue;const d=Object.getOwnPropertyDescriptor(a,u);if(!i[u])i[u]=d.get?{enumerable:!0,configurable:!0,get:Yp.bind(t[u]=[d.get.bind(a)])}:d.value!==void 0?d:void 0;else{const h=t[u];h&&(d.get?h.push(d.get.bind(a)):d.value!==void 0&&h.push(()=>d.value))}}}const s={},r=Object.keys(i);for(let o=r.length-1;o>=0;o--){const a=r[o],l=i[a];l&&l.get?Object.defineProperty(s,a,l):s[a]=l?l.value:void 0}return s}let Jp=0;function Xp(){return Z.context?Z.getNextContextId():`cl-${Jp++}`}const Zp=n=>`Stale read from <${n}>.`;function xe(n){const e="fallback"in n&&{fallback:()=>n.fallback};return Y(qp(()=>n.each,n.children,e||void 0))}function O(n){const e=n.keyed,t=Y(()=>n.when,void 0,{equals:(i,s)=>e?i===s:!i==!s});return Y(()=>{const i=t();if(i){const s=n.children;return typeof s=="function"&&s.length>0?ot(()=>s(e?i:()=>{if(!ot(t))throw Zp("Show");return n.when})):s}return n.fallback},void 0,void 0)}const eg=Br();function od(n){let e=0,t,i,s,r,o;const[a,l]=T(!1),c=Wp(),u={increment:()=>{++e===1&&l(!0)},decrement:()=>{--e===0&&l(!1)},inFallback:a,effects:[],resolved:!1},d=zo();if(Z.context&&Z.load){const g=Z.getContextId();let v=Z.load(g);if(v&&(typeof v!="object"||v.status!=="success"?s=v:Z.gather(g)),s&&s!=="$$f"){const[y,w]=T(void 0,{equals:!1});r=y,s.then(()=>{if(Z.done)return w();Z.gather(g),Fi(i),w(),Fi()},I=>{o=I,w()})}}const h=ws(eg);h&&(t=h.register(u.inFallback));let f;return Ze(()=>f&&f()),m(c.Provider,{value:u,get children(){return Y(()=>{if(o)throw o;if(i=Z.context,r)return r(),r=void 0;i&&s==="$$f"&&Fi();const g=Y(()=>n.children);return Y(v=>{const y=u.inFallback(),{showContent:w=!0,showFallback:I=!0}=t?t():{};if((!y||s&&s!=="$$f")&&w)return u.resolved=!0,f&&f(),f=i=s=void 0,Fp(u.effects),g();if(I)return f?v:ai(S=>(f=S,i&&(Fi({id:i.id+"F",count:0}),i=void 0),n.fallback),d)})})}})}const tg=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],ng=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...tg]),ig=new Set(["innerHTML","textContent","innerText","children"]),sg=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),rg=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function og(n,e){const t=rg[n];return typeof t=="object"?t[e]?t.$:void 0:t}const ag=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]);function lg(n,e,t){let i=t.length,s=e.length,r=i,o=0,a=0,l=e[s-1].nextSibling,c=null;for(;o<s||a<r;){if(e[o]===t[a]){o++,a++;continue}for(;e[s-1]===t[r-1];)s--,r--;if(s===o){const u=r<i?a?t[a-1].nextSibling:t[r-a]:l;for(;a<r;)n.insertBefore(t[a++],u)}else if(r===a)for(;o<s;)(!c||!c.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[r-1]&&t[a]===e[s-1]){const u=e[--s].nextSibling;n.insertBefore(t[a++],e[o++].nextSibling),n.insertBefore(t[--r],u),e[s]=t[r]}else{if(!c){c=new Map;let d=a;for(;d<r;)c.set(t[d],d++)}const u=c.get(e[o]);if(u!=null)if(a<u&&u<r){let d=o,h=1,f;for(;++d<s&&d<r&&!((f=c.get(e[d]))==null||f!==u+h);)h++;if(h>u-a){const g=e[o];for(;a<u;)n.insertBefore(t[a++],g)}else n.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const Bl="_$DX_DELEGATE";function cg(n,e,t,i={}){let s;return ai(r=>{s=r,e===document?n():_(e,n(),e.firstChild?null:void 0,t)},i.owner),()=>{s(),e.textContent=""}}function b(n,e,t){let i;const s=()=>{const o=document.createElement("template");return o.innerHTML=n,t?o.content.firstChild.firstChild:o.content.firstChild},r=e?()=>ot(()=>document.importNode(i||(i=s()),!0)):()=>(i||(i=s())).cloneNode(!0);return r.cloneNode=r,r}function le(n,e=window.document){const t=e[Bl]||(e[Bl]=new Set);for(let i=0,s=n.length;i<s;i++){const r=n[i];t.has(r)||(t.add(r),e.addEventListener(r,pg))}}function j(n,e,t){bs(n)||(t==null?n.removeAttribute(e):n.setAttribute(e,t))}function ug(n,e,t){bs(n)||(t?n.setAttribute(e,""):n.removeAttribute(e))}function W(n,e){bs(n)||(e==null?n.removeAttribute("class"):n.className=e)}function or(n,e,t,i){if(i)Array.isArray(t)?(n[`$$${e}`]=t[0],n[`$$${e}Data`]=t[1]):n[`$$${e}`]=t;else if(Array.isArray(t)){const s=t[0];n.addEventListener(e,t[0]=r=>s.call(n,t[1],r))}else n.addEventListener(e,t,typeof t!="function"&&t)}function dg(n,e,t={}){const i=Object.keys(e||{}),s=Object.keys(t);let r,o;for(r=0,o=s.length;r<o;r++){const a=s[r];!a||a==="undefined"||e[a]||(Gl(n,a,!1),delete t[a])}for(r=0,o=i.length;r<o;r++){const a=i[r],l=!!e[a];!a||a==="undefined"||t[a]===l||!l||(Gl(n,a,!0),t[a]=l)}return t}function ad(n,e,t){if(!e)return t?j(n,"style"):e;const i=n.style;if(typeof e=="string")return i.cssText=e;typeof t=="string"&&(i.cssText=t=void 0),t||(t={}),e||(e={});let s,r;for(r in t)e[r]==null&&i.removeProperty(r),delete t[r];for(r in e)s=e[r],s!==t[r]&&(i.setProperty(r,s),t[r]=s);return t}function zl(n,e={},t,i){const s={};return R(()=>s.children=is(n,e.children,s.children)),R(()=>typeof e.ref=="function"&&Qe(e.ref,n)),R(()=>hg(n,e,t,!0,s,!0)),s}function Qe(n,e,t){return ot(()=>n(e,t))}function _(n,e,t,i){if(t!==void 0&&!i&&(i=[]),typeof e!="function")return is(n,e,i,t);R(s=>is(n,e(),s,t),i)}function hg(n,e,t,i,s={},r=!1){e||(e={});for(const o in s)if(!(o in e)){if(o==="children")continue;s[o]=ql(n,o,null,s[o],t,r,e)}for(const o in e){if(o==="children")continue;const a=e[o];s[o]=ql(n,o,a,s[o],t,r,e)}}function bs(n){return!!Z.context&&!Z.done&&(!n||n.isConnected)}function fg(n){return n.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function Gl(n,e,t){const i=e.trim().split(/\s+/);for(let s=0,r=i.length;s<r;s++)n.classList.toggle(i[s],t)}function ql(n,e,t,i,s,r,o){let a,l,c,u,d;if(e==="style")return ad(n,t,i);if(e==="classList")return dg(n,t,i);if(t===i)return i;if(e==="ref")r||t(n);else if(e.slice(0,3)==="on:"){const h=e.slice(3);i&&n.removeEventListener(h,i,typeof i!="function"&&i),t&&n.addEventListener(h,t,typeof t!="function"&&t)}else if(e.slice(0,10)==="oncapture:"){const h=e.slice(10);i&&n.removeEventListener(h,i,!0),t&&n.addEventListener(h,t,!0)}else if(e.slice(0,2)==="on"){const h=e.slice(2).toLowerCase(),f=ag.has(h);if(!f&&i){const g=Array.isArray(i)?i[0]:i;n.removeEventListener(h,g)}(f||t)&&(or(n,h,t,f),f&&le([h]))}else if(e.slice(0,5)==="attr:")j(n,e.slice(5),t);else if(e.slice(0,5)==="bool:")ug(n,e.slice(5),t);else if((d=e.slice(0,5)==="prop:")||(c=ig.has(e))||(u=og(e,n.tagName))||(l=ng.has(e))||(a=n.nodeName.includes("-")||"is"in o)){if(d)e=e.slice(5),l=!0;else if(bs(n))return t;e==="class"||e==="className"?W(n,t):a&&!l&&!c?n[fg(e)]=t:n[u||e]=t}else j(n,sg[e]||e,t);return t}function pg(n){if(Z.registry&&Z.events&&Z.events.find(([l,c])=>c===n))return;let e=n.target;const t=`$$${n.type}`,i=n.target,s=n.currentTarget,r=l=>Object.defineProperty(n,"target",{configurable:!0,value:l}),o=()=>{const l=e[t];if(l&&!e.disabled){const c=e[`${t}Data`];if(c!==void 0?l.call(e,c,n):l.call(e,n),n.cancelBubble)return}return e.host&&typeof e.host!="string"&&!e.host._$host&&e.contains(n.target)&&r(e.host),!0},a=()=>{for(;o()&&(e=e._$host||e.parentNode||e.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}}),Z.registry&&!Z.done&&(Z.done=_$HY.done=!0),n.composedPath){const l=n.composedPath();r(l[0]);for(let c=0;c<l.length-2&&(e=l[c],!!o());c++){if(e._$host){e=e._$host,a();break}if(e.parentNode===s)break}}else a();r(i)}function is(n,e,t,i,s){const r=bs(n);if(r){!t&&(t=[...n.childNodes]);let l=[];for(let c=0;c<t.length;c++){const u=t[c];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():l.push(u)}t=l}for(;typeof t=="function";)t=t();if(e===t)return t;const o=typeof e,a=i!==void 0;if(n=a&&t[0]&&t[0].parentNode||n,o==="string"||o==="number"){if(r||o==="number"&&(e=e.toString(),e===t))return t;if(a){let l=t[0];l&&l.nodeType===3?l.data!==e&&(l.data=e):l=document.createTextNode(e),t=qn(n,t,i,l)}else t!==""&&typeof t=="string"?t=n.firstChild.data=e:t=n.textContent=e}else if(e==null||o==="boolean"){if(r)return t;t=qn(n,t,i)}else{if(o==="function")return R(()=>{let l=e();for(;typeof l=="function";)l=l();t=is(n,l,t,i)}),()=>t;if(Array.isArray(e)){const l=[],c=t&&Array.isArray(t);if(Ko(l,e,t,s))return R(()=>t=is(n,l,t,i,!0)),()=>t;if(r){if(!l.length)return t;if(i===void 0)return t=[...n.childNodes];let u=l[0];if(u.parentNode!==n)return t;const d=[u];for(;(u=u.nextSibling)!==i;)d.push(u);return t=d}if(l.length===0){if(t=qn(n,t,i),a)return t}else c?t.length===0?Kl(n,l,i):lg(n,t,l):(t&&qn(n),Kl(n,l));t=l}else if(e.nodeType){if(r&&e.parentNode)return t=a?[e]:e;if(Array.isArray(t)){if(a)return t=qn(n,t,i,e);qn(n,t,null,e)}else t==null||t===""||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);t=e}}return t}function Ko(n,e,t,i){let s=!1;for(let r=0,o=e.length;r<o;r++){let a=e[r],l=t&&t[n.length],c;if(!(a==null||a===!0||a===!1))if((c=typeof a)=="object"&&a.nodeType)n.push(a);else if(Array.isArray(a))s=Ko(n,a,l)||s;else if(c==="function")if(i){for(;typeof a=="function";)a=a();s=Ko(n,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||s}else n.push(a),s=!0;else{const u=String(a);l&&l.nodeType===3&&l.data===u?n.push(l):n.push(document.createTextNode(u))}}return s}function Kl(n,e,t=null){for(let i=0,s=e.length;i<s;i++)n.insertBefore(e[i],t)}function qn(n,e,t,i){if(t===void 0)return n.textContent="";const s=i||document.createTextNode("");if(e.length){let r=!1;for(let o=e.length-1;o>=0;o--){const a=e[o];if(s!==a){const l=a.parentNode===n;!r&&!o?l?n.replaceChild(s,a):n.insertBefore(s,t):l&&a.remove()}else r=!0}}else n.insertBefore(s,t);return[s]}const gg="http://www.w3.org/2000/svg";function mg(n,e=!1){return e?document.createElementNS(gg,n):document.createElement(n)}function Wn(n){const{useShadow:e}=n,t=document.createTextNode(""),i=()=>n.mount||document.body,s=zo();let r,o=!!Z.context;return It(()=>{o&&(zo().user=o=!1),r||(r=Up(s,()=>Y(()=>n.children)));const a=i();if(a instanceof HTMLHeadElement){const[l,c]=T(!1),u=()=>c(!0);ai(d=>_(a,()=>l()?d():r(),null)),Ze(u)}else{const l=mg(n.isSVG?"g":"div",n.isSVG),c=e&&l.attachShadow?l.attachShadow({mode:"open"}):l;Object.defineProperty(l,"_$host",{get(){return t.parentNode},configurable:!0}),_(c,r),a.appendChild(l),n.ref&&n.ref(l),Ze(()=>a.removeChild(l))}},void 0,{render:!o}),t}const ld=Br(),_g=["title","meta"],Yl=[],Ql=["name","http-equiv","content","charset","media"].concat(["property"]),Jl=(n,e)=>{const t=Object.fromEntries(Object.entries(n.props).filter(([i])=>e.includes(i)).sort());return(Object.hasOwn(t,"name")||Object.hasOwn(t,"property"))&&(t.name=t.name||t.property,delete t.property),n.tag+JSON.stringify(t)};function vg(){if(!Z.context){const t=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(t,i=>i.parentNode.removeChild(i))}const n=new Map;function e(t){if(t.ref)return t.ref;let i=document.querySelector(`[data-sm="${t.id}"]`);return i?(i.tagName.toLowerCase()!==t.tag&&(i.parentNode&&i.parentNode.removeChild(i),i=document.createElement(t.tag)),i.removeAttribute("data-sm")):i=document.createElement(t.tag),i}return{addTag(t){if(_g.indexOf(t.tag)!==-1){const r=t.tag==="title"?Yl:Ql,o=Jl(t,r);n.has(o)||n.set(o,[]);let a=n.get(o),l=a.length;a=[...a,t],n.set(o,a);let c=e(t);t.ref=c,zl(c,t.props);let u=null;for(var i=l-1;i>=0;i--)if(a[i]!=null){u=a[i];break}return c.parentNode!=document.head&&document.head.appendChild(c),u&&u.ref&&u.ref.parentNode&&document.head.removeChild(u.ref),l}let s=e(t);return t.ref=s,zl(s,t.props),s.parentNode!=document.head&&document.head.appendChild(s),-1},removeTag(t,i){const s=t.tag==="title"?Yl:Ql,r=Jl(t,s);if(t.ref){const o=n.get(r);if(o){if(t.ref.parentNode){t.ref.parentNode.removeChild(t.ref);for(let a=i-1;a>=0;a--)o[a]!=null&&document.head.appendChild(o[a].ref)}o[i]=null,n.set(r,o)}else t.ref.parentNode&&t.ref.parentNode.removeChild(t.ref)}}}}const yg=n=>{const e=vg();return m(ld.Provider,{value:e,get children(){return n.children}})},wg=(n,e,t)=>(bg({tag:n,props:e,setting:t,id:Xp(),get name(){return e.name||e.property}}),null);function bg(n){const e=ws(ld);if(!e)throw new Error("<MetaProvider /> should be in the tree");R(()=>{const t=e.addTag(n);Ze(()=>e.removeTag(n,t))})}const Ig=n=>wg("meta",n);var Xl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(n,e){if(!n)throw ki(e)},ki=function(n){return new Error("Firebase Database ("+cd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Cg=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},La={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(t[u],t[d],t[h],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ud(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new Tg;const h=r<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),d!==64){const g=c<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dd=function(n){const e=ud(n);return La.encodeByteArray(e,!0)},ar=function(n){return dd(n).replace(/\./g,"")},ss=function(n){try{return La.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n){return hd(void 0,n)}function hd(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Sg(t)||(n[t]=hd(n[t],e[t]));return n}function Sg(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=()=>kg().__FIREBASE_DEFAULTS__,Ag=()=>{if(typeof process>"u"||typeof Xl>"u")return;const n=Xl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$g=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ss(n[1]);return e&&JSON.parse(e)},Da=()=>{try{return xg()||Ag()||$g()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},fd=n=>{var e,t;return(t=(e=Da())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Pg=n=>{const e=fd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},pd=()=>{var n;return(n=Da())===null||n===void 0?void 0:n.config},gd=n=>{var e;return(e=Da())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ar(JSON.stringify(t)),ar(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function md(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _d(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ua(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ng(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vd(){return cd.NODE_ADMIN===!0}function Og(){try{return typeof indexedDB=="object"}catch{return!1}}function Lg(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="FirebaseError";class at extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Dg,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,En.prototype.create)}}class En{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Mg(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new at(s,a,i)}}function Mg(n,e){return n.replace(Ug,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Ug=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n){return JSON.parse(n)}function Me(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=rs(ss(r[0])||""),t=rs(ss(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Fg=function(n){const e=yd(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Vg=function(n){const e=yd(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function wi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Yo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function lr(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function cr(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Zl(r)&&Zl(o)){if(!cr(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Zl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Vi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Wi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function wd(n,e){const t=new Hg(n,e);return t.subscribe.bind(t)}class Hg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");jg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=go),s.error===void 0&&(s.error=go),s.complete===void 0&&(s.complete=go);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function go(){}function bd(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,x(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},qr=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(n){return n&&n._delegate?n._delegate:n}class zt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ma;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qg(e))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=An){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=An){return this.instances.has(e)}getOptions(e=An){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Gg(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=An){return this.component?this.component.multipleInstances?e:An:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gg(n){return n===An?void 0:n}function qg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ce||(ce={}));const Yg={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Qg=ce.INFO,Jg={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Xg=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Jg[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kr{constructor(e){this.name=e,this._logLevel=Qg,this._logHandler=Xg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Zg=(n,e)=>e.some(t=>n instanceof t);let ec,tc;function em(){return ec||(ec=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tm(){return tc||(tc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Id=new WeakMap,Qo=new WeakMap,Cd=new WeakMap,mo=new WeakMap,Fa=new WeakMap;function nm(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(_n(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Id.set(t,n)}).catch(()=>{}),Fa.set(e,n),e}function im(n){if(Qo.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Qo.set(n,e)}let Jo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Cd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _n(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sm(n){Jo=n(Jo)}function rm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(_o(this),e,...t);return Cd.set(i,e.sort?e.sort():[e]),_n(i)}:tm().includes(n)?function(...e){return n.apply(_o(this),e),_n(Id.get(this))}:function(...e){return _n(n.apply(_o(this),e))}}function om(n){return typeof n=="function"?rm(n):(n instanceof IDBTransaction&&im(n),Zg(n,em())?new Proxy(n,Jo):n)}function _n(n){if(n instanceof IDBRequest)return nm(n);if(mo.has(n))return mo.get(n);const e=om(n);return e!==n&&(mo.set(n,e),Fa.set(e,n)),e}const _o=n=>Fa.get(n);function am(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=_n(o);return i&&o.addEventListener("upgradeneeded",l=>{i(_n(o.result),l.oldVersion,l.newVersion,_n(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const lm=["get","getKey","getAll","getAllKeys","count"],cm=["put","add","delete","clear"],vo=new Map;function nc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(vo.get(e))return vo.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=cm.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||lm.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return vo.set(e,r),r}sm(n=>({...n,get:(e,t,i)=>nc(e,t)||n.get(e,t,i),has:(e,t)=>!!nc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dm(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function dm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xo="@firebase/app",ic="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new Kr("@firebase/app"),hm="@firebase/app-compat",fm="@firebase/analytics-compat",pm="@firebase/analytics",gm="@firebase/app-check-compat",mm="@firebase/app-check",_m="@firebase/auth",vm="@firebase/auth-compat",ym="@firebase/database",wm="@firebase/data-connect",bm="@firebase/database-compat",Im="@firebase/functions",Cm="@firebase/functions-compat",Tm="@firebase/installations",Em="@firebase/installations-compat",Sm="@firebase/messaging",km="@firebase/messaging-compat",xm="@firebase/performance",Am="@firebase/performance-compat",$m="@firebase/remote-config",Pm="@firebase/remote-config-compat",Rm="@firebase/storage",Nm="@firebase/storage-compat",Om="@firebase/firestore",Lm="@firebase/vertexai-preview",Dm="@firebase/firestore-compat",Mm="firebase",Um="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="[DEFAULT]",Fm={[Xo]:"fire-core",[hm]:"fire-core-compat",[pm]:"fire-analytics",[fm]:"fire-analytics-compat",[mm]:"fire-app-check",[gm]:"fire-app-check-compat",[_m]:"fire-auth",[vm]:"fire-auth-compat",[ym]:"fire-rtdb",[wm]:"fire-data-connect",[bm]:"fire-rtdb-compat",[Im]:"fire-fn",[Cm]:"fire-fn-compat",[Tm]:"fire-iid",[Em]:"fire-iid-compat",[Sm]:"fire-fcm",[km]:"fire-fcm-compat",[xm]:"fire-perf",[Am]:"fire-perf-compat",[$m]:"fire-rc",[Pm]:"fire-rc-compat",[Rm]:"fire-gcs",[Nm]:"fire-gcs-compat",[Om]:"fire-fst",[Dm]:"fire-fst-compat",[Lm]:"fire-vertex","fire-js":"fire-js",[Mm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new Map,Vm=new Map,ea=new Map;function sc(n,e){try{n.container.addComponent(e)}catch(t){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function wn(n){const e=n.name;if(ea.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;ea.set(e,n);for(const t of ur.values())sc(t,n);for(const t of Vm.values())sc(t,n);return!0}function Va(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ye(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vn=new En("app","Firebase",Wm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=Um;function Td(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Zo,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw vn.create("bad-app-name",{appName:String(s)});if(t||(t=pd()),!t)throw vn.create("no-options");const r=ur.get(s);if(r){if(cr(t,r.options)&&cr(i,r.config))return r;throw vn.create("duplicate-app",{appName:s})}const o=new Kg(s);for(const l of ea.values())o.addComponent(l);const a=new Hm(t,i,o);return ur.set(s,a),a}function Ed(n=Zo){const e=ur.get(n);if(!e&&n===Zo&&pd())return Td();if(!e)throw vn.create("no-app",{appName:n});return e}function kt(n,e,t){var i;let s=(i=Fm[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(a.join(" "));return}wn(new zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="firebase-heartbeat-database",Bm=1,os="firebase-heartbeat-store";let yo=null;function Sd(){return yo||(yo=am(jm,Bm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(os)}catch(t){console.warn(t)}}}}).catch(n=>{throw vn.create("idb-open",{originalErrorMessage:n.message})})),yo}async function zm(n){try{const t=(await Sd()).transaction(os),i=await t.objectStore(os).get(kd(n));return await t.done,i}catch(e){if(e instanceof at)Gt.warn(e.message);else{const t=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(t.message)}}}async function rc(n,e){try{const i=(await Sd()).transaction(os,"readwrite");await i.objectStore(os).put(e,kd(n)),await i.done}catch(t){if(t instanceof at)Gt.warn(t.message);else{const i=vn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Gt.warn(i.message)}}}function kd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=1024,qm=30*24*60*60*1e3;class Km{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Qm(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=oc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=qm}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Gt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=oc(),{heartbeatsToSend:i,unsentEntries:s}=Ym(this._heartbeatsCache.heartbeats),r=ar(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Gt.warn(t),""}}}function oc(){return new Date().toISOString().substring(0,10)}function Ym(n,e=Gm){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),ac(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ac(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Qm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Og()?Lg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return rc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return rc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ac(n){return ar(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(n){wn(new zt("platform-logger",e=>new um(e),"PRIVATE")),wn(new zt("heartbeat",e=>new Km(e),"PRIVATE")),kt(Xo,ic,n),kt(Xo,ic,"esm2017"),kt("fire-js","")}Jm("");var Xm="firebase",Zm="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt(Xm,Zm,"app");var lc={};const cc="@firebase/database",uc="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xd="";function e_(n){xd=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:rs(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new t_(e)}}catch{}return new n_},Rn=Ad("localStorage"),i_=Ad("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Kr("@firebase/database"),s_=function(){let n=1;return function(){return n++}}(),$d=function(n){const e=Bg(n),t=new Wg;t.update(e);const i=t.digest();return La.encodeByteArray(i)},Is=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Is.apply(null,i):typeof i=="object"?e+=Me(i):e+=i,e+=" "}return e};let Ki=null,dc=!0;const r_=function(n,e){x(!e,"Can't turn on custom loggers persistently."),li.logLevel=ce.VERBOSE,Ki=li.log.bind(li)},je=function(...n){if(dc===!0&&(dc=!1,Ki===null&&i_.get("logging_enabled")===!0&&r_()),Ki){const e=Is.apply(null,n);Ki(e)}},Cs=function(n){return function(...e){je(n,...e)}},ta=function(...n){const e="FIREBASE INTERNAL ERROR: "+Is(...n);li.error(e)},qt=function(...n){const e=`FIREBASE FATAL ERROR: ${Is(...n)}`;throw li.error(e),new Error(e)},rt=function(...n){const e="FIREBASE WARNING: "+Is(...n);li.warn(e)},o_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&rt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},a_=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},bi="[MIN_NAME]",Dn="[MAX_NAME]",xi=function(n,e){if(n===e)return 0;if(n===bi||e===Dn)return-1;if(e===bi||n===Dn)return 1;{const t=hc(n),i=hc(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},l_=function(n,e){return n===e?0:n<e?-1:1},Li=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Me(e))},Wa=function(n){if(typeof n!="object"||n===null)return Me(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Me(e[i]),t+=":",t+=Wa(n[e[i]]);return t+="}",t},Rd=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function et(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Nd=function(n){x(!Pd(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},c_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},u_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function d_(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const h_=new RegExp("^-?(0*)\\d{1,10}$"),f_=-2147483648,p_=2147483647,hc=function(n){if(h_.test(n)){const e=Number(n);if(e>=f_&&e<=p_)return e}return null},Ts=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw rt("Exception was thrown by user callback.",t),e},Math.floor(0))}},g_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Yi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){rt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',rt(e)}}class Bs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="5",Od="v",Ld="s",Dd="r",Md="f",Ud=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fd="ls",Vd="p",na="ac",Wd="websocket",Hd="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Rn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Rn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function v_(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Bd(n,e,t){x(typeof e=="string","typeof type must == string"),x(typeof t=="object","typeof params must == object");let i;if(e===Wd)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Hd)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);v_(n)&&(t.ns=n.namespace);const s=[];return et(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.counters_={}}incrementCounter(e,t=1){Xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Eg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo={},bo={};function ja(n){const e=n.toString();return wo[e]||(wo[e]=new y_),wo[e]}function w_(n,e){const t=n.toString();return bo[t]||(bo[t]=e()),bo[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ts(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="start",I_="close",C_="pLPCommand",T_="pRTLPCB",zd="id",Gd="pw",qd="ser",E_="cb",S_="seg",k_="ts",x_="d",A_="dframe",Kd=1870,Yd=30,$_=Kd-Yd,P_=25e3,R_=3e4;class ni{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cs(e),this.stats_=ja(t),this.urlFn=l=>(this.appCheckToken&&(l[na]=this.appCheckToken),Bd(t,Hd,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new b_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(R_)),a_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ba((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===fc)this.id=a,this.password=l;else if(o===I_)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[fc]="t",i[qd]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[E_]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Od]=Ha,this.transportSessionId&&(i[Ld]=this.transportSessionId),this.lastSessionId&&(i[Fd]=this.lastSessionId),this.applicationId&&(i[Vd]=this.applicationId),this.appCheckToken&&(i[na]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ud.test(location.hostname)&&(i[Dd]=Md);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ni.forceAllow_=!0}static forceDisallow(){ni.forceDisallow_=!0}static isAvailable(){return ni.forceAllow_?!0:!ni.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!c_()&&!u_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Me(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=dd(t),s=Rd(i,$_);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[A_]="t",i[zd]=e,i[Gd]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Me(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ba{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=s_(),window[C_+this.uniqueCallbackIdentifier]=e,window[T_+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ba.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){je("frame writing exception"),a.stack&&je(a.stack),je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||je("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[zd]=this.myID,e[Gd]=this.myPW,e[qd]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Yd+i.length<=Kd;){const o=this.pendingSegs.shift();i=i+"&"+S_+s+"="+o.seg+"&"+k_+s+"="+o.ts+"&"+x_+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(P_)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=16384,O_=45e3;let dr=null;typeof MozWebSocket<"u"?dr=MozWebSocket:typeof WebSocket<"u"&&(dr=WebSocket);class vt{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cs(this.connId),this.stats_=ja(t),this.connURL=vt.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Od]=Ha,typeof location<"u"&&location.hostname&&Ud.test(location.hostname)&&(o[Dd]=Md),t&&(o[Ld]=t),i&&(o[Fd]=i),s&&(o[na]=s),r&&(o[Vd]=r),Bd(e,Wd,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Rn.set("previous_websocket_failure",!0);try{let i;vd(),this.mySock=new dr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&dr!==null&&!vt.forceDisallow_}static previouslyFailed(){return Rn.isInMemoryStorage||Rn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Rn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=rs(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Me(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Rd(t,N_);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(O_))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vt.responsesRequiredToBeHealthy=2;vt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ni,vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=vt&&vt.isAvailable();let i=t&&!vt.previouslyFailed();if(e.webSocketOnly&&(t||rt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[vt];else{const s=this.transports_=[];for(const r of as.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);as.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}as.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=6e4,D_=5e3,M_=10*1024,U_=100*1024,Io="t",pc="d",F_="s",gc="r",V_="e",mc="o",_c="a",vc="n",yc="p",W_="h";class H_{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cs("c:"+this.id+":"),this.transportManager_=new as(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Yi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>U_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>M_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Io in e){const t=e[Io];t===_c?this.upgradeIfSecondaryHealthy_():t===gc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===mc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Li("t",e),i=Li("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_c,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Li("t",e),i=Li("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Li(Io,e);if(pc in e){const i=e[pc];if(t===W_){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===vc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===F_?this.onConnectionShutdown_(i):t===gc?this.onReset_(i):t===V_?ta("Server Error: "+i):t===mc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ta("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ha!==i&&rt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Yi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(L_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Yi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(D_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Rn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jd=class{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Jd{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hr}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=32,bc=768;class pe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ae(){return new pe("")}function te(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function bn(n){return n.pieces_.length-n.pieceNum_}function _e(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new pe(n.pieces_,e)}function Xd(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function j_(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Zd(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function eh(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new pe(e,0)}function Re(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof pe)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new pe(t,0)}function ne(n){return n.pieceNum_>=n.pieces_.length}function Je(n,e){const t=te(n),i=te(e);if(t===null)return e;if(t===i)return Je(_e(n),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function za(n,e){if(bn(n)!==bn(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function yt(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(bn(n)>bn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class B_{constructor(e,t){this.errorPrefix_=t,this.parts_=Zd(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=qr(this.parts_[i]);th(this)}}function z_(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=qr(e),th(n)}function G_(n){const e=n.parts_.pop();n.byteLength_-=qr(e),n.parts_.length>0&&(n.byteLength_-=1)}function th(n){if(n.byteLength_>bc)throw new Error(n.errorPrefix_+"has a key path longer than "+bc+" bytes ("+n.byteLength_+").");if(n.parts_.length>wc)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+wc+") or object contains a cycle "+$n(n))}function $n(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends Jd{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ga}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=1e3,q_=60*5*1e3,Ic=30*1e3,K_=1.3,Y_=3e4,Q_="server_kill",Cc=3;class Ht extends Qd{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ht.nextPersistentConnectionId_++,this.log_=Cs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Di,this.maxReconnectDelay_=q_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!vd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ga.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Me(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Ma,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ht.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Xt(e,"w")){const i=wi(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();rt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Vg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ic)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Fg(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ta("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Y_&&(this.reconnectDelay_=Di),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*K_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ht.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new H_(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{rt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Q_)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&rt(d),l())}}}interrupt(e){je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yo(this.interruptReasons_)&&(this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Wa(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new pe(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){je("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cc&&(this.reconnectDelay_=Ic,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){je("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+xd.replace(/\./g,"-")]=1,Gr()?e["framework.cordova"]=1:Ua()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hr.getInstance().currentlyOnline();return Yo(this.interruptReasons_)&&e}}Ht.nextPersistentConnectionId_=0;Ht.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ee(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new ee(bi,e),s=new ee(bi,t);return this.compare(i,s)!==0}minPost(){return ee.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;class nh extends Yr{static get __EMPTY_NODE(){return Fs}static set __EMPTY_NODE(e){Fs=e}compare(e,t){return xi(e.name,t.name)}isDefinedOn(e){throw ki("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ee.MIN}maxPost(){return new ee(Dn,Fs)}makePost(e,t){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,Fs)}toString(){return".key"}}const ci=new nh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??De.RED,this.left=s??Xe.EMPTY_NODE,this.right=r??Xe.EMPTY_NODE}copy(e,t,i,s,r){return new De(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class J_{copy(e,t,i,s,r){return this}insert(e,t,i){return new De(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xe{constructor(e,t=Xe.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Xe(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new Xe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vs(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vs(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vs(this.root_,null,this.comparator_,!0,e)}}Xe.EMPTY_NODE=new J_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(n,e){return xi(n.name,e.name)}function qa(n,e){return xi(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ia;function Z_(n){ia=n}const ih=function(n){return typeof n=="number"?"number:"+Nd(n):"string:"+n},sh=function(n){if(n.isLeafNode()){const e=n.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xt(e,".sv"),"Priority must be a string or number.")}else x(n===ia||n.isEmpty(),"priority of unexpected type.");x(n===ia||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc;class Le{constructor(e,t=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sh(this.priorityNode_)}static set __childrenNodeConstructor(e){Tc=e}static get __childrenNodeConstructor(){return Tc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:te(e)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=te(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(x(i!==".priority"||bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ih(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Nd(this.value_):e+=this.value_,this.lazyHash_=$d(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Le.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=Le.VALUE_TYPE_ORDER.indexOf(t),r=Le.VALUE_TYPE_ORDER.indexOf(i);return x(s>=0,"Unknown leaf type: "+t),x(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rh,oh;function ev(n){rh=n}function tv(n){oh=n}class nv extends Yr{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?xi(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(Dn,new Le("[PRIORITY-POST]",oh))}makePost(e,t){const i=rh(e);return new ee(t,new Le("[PRIORITY-POST]",i))}toString(){return".priority"}}const Te=new nv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=Math.log(2);class sv{constructor(e){const t=r=>parseInt(Math.log(r)/iv,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fr=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=n[l],h=t?t(d):d,new De(h,d.node,De.BLACK,null,null);{const f=parseInt(u/2,10)+l,g=s(l,f),v=s(f+1,c);return d=n[f],h=t?t(d):d,new De(h,d.node,De.BLACK,g,v)}},r=function(l){let c=null,u=null,d=n.length;const h=function(g,v){const y=d-g,w=d;d-=g;const I=s(y+1,w),S=n[y],C=t?t(S):S;f(new De(C,S.node,v,null,I))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),y=Math.pow(2,l.count-(g+1));v?h(y,De.BLACK):(h(y,De.BLACK),h(y,De.RED))}return u},o=new sv(n.length),a=r(o);return new Xe(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co;const Kn={};class Ut{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return x(Kn&&Te,"ChildrenNode.ts has not been loaded"),Co=Co||new Ut({".priority":Kn},{".priority":Te}),Co}get(e){const t=wi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Xe?t:null}hasIndex(e){return Xt(this.indexSet_,e.toString())}addIndex(e,t){x(e!==ci,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(ee.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=fr(i,e.getCompare()):a=Kn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ut(u,c)}addToIndexes(e,t){const i=lr(this.indexes_,(s,r)=>{const o=wi(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),s===Kn)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),fr(a,o.getCompare())}else return Kn;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new Ut(i,this.indexSet_)}removeFromIndexes(e,t){const i=lr(this.indexes_,s=>{if(s===Kn)return s;{const r=t.get(e.name);return r?s.remove(new ee(e.name,r)):s}});return new Ut(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi;class G{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&sh(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Mi||(Mi=new G(new Xe(qa),null,Ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mi}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Mi:t}}getChild(e){const t=te(e);return t===null?this:this.getImmediateChild(t).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(x(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new ee(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Mi:this.priorityNode_;return new G(s,o,r)}}updateChild(e,t){const i=te(e);if(i===null)return t;{x(te(e)!==".priority"||bn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(_e(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(Te,(o,a)=>{t[o]=a.val(e),i++,r&&G.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ih(this.getPriority().val())+":"),this.forEachChild(Te,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":$d(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new ee(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ee(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ee(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ee.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Es?-1:0}withIndex(e){if(e===ci||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ci||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(Te),s=t.getIterator(Te);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ci?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rv extends G{constructor(){super(new Xe(qa),G.EMPTY_NODE,Ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const Es=new rv;Object.defineProperties(ee,{MIN:{value:new ee(bi,G.EMPTY_NODE)},MAX:{value:new ee(Dn,Es)}});nh.__EMPTY_NODE=G.EMPTY_NODE;Le.__childrenNodeConstructor=G;Z_(Es);tv(Es);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=!0;function Be(n,e=null){if(n===null)return G.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Le(t,Be(e))}if(!(n instanceof Array)&&ov){const t=[];let i=!1;if(et(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Be(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new ee(o,l)))}}),t.length===0)return G.EMPTY_NODE;const r=fr(t,X_,o=>o.name,qa);if(i){const o=fr(t,Te.getCompare());return new G(r,Be(e),new Ut({".priority":o},{".priority":Te}))}else return new G(r,Be(e),Ut.Default)}else{let t=G.EMPTY_NODE;return et(n,(i,s)=>{if(Xt(n,i)&&i.substring(0,1)!=="."){const r=Be(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(Be(e))}}ev(Be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av extends Yr{constructor(e){super(),this.indexPath_=e,x(!ne(e)&&te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?xi(e.name,t.name):r}makePost(e,t){const i=Be(e),s=G.EMPTY_NODE.updateChild(this.indexPath_,i);return new ee(t,s)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,Es);return new ee(Dn,e)}toString(){return Zd(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv extends Yr{compare(e,t){const i=e.node.compareTo(t.node);return i===0?xi(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,t){const i=Be(e);return new ee(t,i)}toString(){return".value"}}const cv=new lv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(n){return{type:"value",snapshotNode:n}}function Ii(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ls(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function cs(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function uv(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(ls(t,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ii(t,i)):o.trackChildChange(cs(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Te,(s,r)=>{t.hasChild(s)||i.trackChildChange(ls(s,r))}),t.isLeafNode()||t.forEachChild(Te,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(cs(s,r,o))}else i.trackChildChange(Ii(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.indexedFilter_=new Ka(e.getIndex()),this.index_=e.getIndex(),this.startPost_=us.getStartPost_(e),this.endPost_=us.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new ee(t,i))||(i=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=G.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(G.EMPTY_NODE);const r=this;return t.forEachChild(Te,(o,a)=>{r.matches(new ee(o,a))||(s=s.updateImmediateChild(o,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new us(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new ee(t,i))||(i=G.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=G.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(G.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new ee(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(cs(t,i,d)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(ls(t,d));const v=a.updateImmediateChild(t,G.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Ii(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ls(c.name,c.node)),r.trackChildChange(Ii(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,G.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bi}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new Ya;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hv(n){return n.loadsAllData()?new Ka(n.getIndex()):n.hasLimit()?new dv(n):new us(n)}function Ec(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Te?t="$priority":n.index_===cv?t="$value":n.index_===ci?t="$key":(x(n.index_ instanceof av,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Me(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Me(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Me(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Me(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Me(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Sc(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Te&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Qd{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Cs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=pr.getListenId_(e,i),a={};this.listens_[o]=a;const l=Ec(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),wi(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,t){const i=pr.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Ec(e._queryParams),i=e._path.toString(),s=new Ma;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Zt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=rs(a.responseText)}catch{rt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&rt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(){return{value:null,children:new Map}}function lh(n,e,t){if(ne(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=te(e);n.children.has(i)||n.children.set(i,gr());const s=n.children.get(i);e=_e(e),lh(s,e,t)}}function sa(n,e,t){n.value!==null?t(e,n.value):pv(n,(i,s)=>{const r=new pe(e.toString()+"/"+i);sa(s,r,t)})}function pv(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&et(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=10*1e3,mv=30*1e3,_v=5*60*1e3;class vv{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new gv(e);const i=kc+(mv-kc)*Math.random();Yi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;et(e,(s,r)=>{r>0&&Xt(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Yi(this.reportStats_.bind(this),Math.floor(Math.random()*2*_v))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wt||(wt={}));function ch(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qa(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ja(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=wt.ACK_USER_WRITE,this.source=ch()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new pe(e));return new mr(ae(),t,this.revert)}}else return x(te(this.path)===e,"operationForChild called for unrelated child."),new mr(_e(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.source=e,this.path=t,this.type=wt.LISTEN_COMPLETE}operationForChild(e){return ne(this.path)?new ds(this.source,ae()):new ds(this.source,_e(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=wt.OVERWRITE}operationForChild(e){return ne(this.path)?new Mn(this.source,ae(),this.snap.getImmediateChild(e)):new Mn(this.source,_e(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=wt.MERGE}operationForChild(e){if(ne(this.path)){const t=this.children.subtree(new pe(e));return t.isEmpty()?null:t.value?new Mn(this.source,ae(),t.value):new hs(this.source,ae(),t)}else return x(te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hs(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const t=te(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wv(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(uv(o.childName,o.snapshotNode))}),Ui(n,s,"child_removed",e,i,t),Ui(n,s,"child_added",e,i,t),Ui(n,s,"child_moved",r,i,t),Ui(n,s,"child_changed",e,i,t),Ui(n,s,"value",e,i,t),s}function Ui(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Iv(n,a,l)),o.forEach(a=>{const l=bv(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function bv(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Iv(n,e,t){if(e.childName==null||t.childName==null)throw ki("Should only compare child_ events.");const i=new ee(e.childName,e.snapshotNode),s=new ee(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n,e){return{eventCache:n,serverCache:e}}function Qi(n,e,t,i){return Qr(new Un(e,t,i),n.serverCache)}function uh(n,e,t,i){return Qr(n.eventCache,new Un(e,t,i))}function ra(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Fn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let To;const Cv=()=>(To||(To=new Xe(l_)),To);class be{constructor(e,t=Cv()){this.value=e,this.children=t}static fromObject(e){let t=new be(null);return et(e,(i,s)=>{t=t.set(new pe(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ae(),value:this.value};if(ne(e))return null;{const i=te(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(_e(e),t);return r!=null?{path:Re(new pe(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const t=te(e),i=this.children.get(t);return i!==null?i.subtree(_e(e)):new be(null)}}set(e,t){if(ne(e))return new be(t,this.children);{const i=te(e),r=(this.children.get(i)||new be(null)).set(_e(e),t),o=this.children.insert(i,r);return new be(this.value,o)}}remove(e){if(ne(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const t=te(e),i=this.children.get(t);if(i){const s=i.remove(_e(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new be(null):new be(this.value,r)}else return this}}get(e){if(ne(e))return this.value;{const t=te(e),i=this.children.get(t);return i?i.get(_e(e)):null}}setTree(e,t){if(ne(e))return t;{const i=te(e),r=(this.children.get(i)||new be(null)).setTree(_e(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new be(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Re(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,ae(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(ne(e))return null;{const r=te(e),o=this.children.get(r);return o?o.findOnPath_(_e(e),Re(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ae(),t)}foreachOnPath_(e,t,i){if(ne(e))return this;{this.value&&i(t,this.value);const s=te(e),r=this.children.get(s);return r?r.foreachOnPath_(_e(e),Re(t,s),i):new be(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Re(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.writeTree_=e}static empty(){return new Ct(new be(null))}}function Ji(n,e,t){if(ne(e))return new Ct(new be(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Je(s,e);return r=r.updateChild(o,t),new Ct(n.writeTree_.set(s,r))}else{const s=new be(t),r=n.writeTree_.setTree(e,s);return new Ct(r)}}}function xc(n,e,t){let i=n;return et(t,(s,r)=>{i=Ji(i,Re(e,s),r)}),i}function Ac(n,e){if(ne(e))return Ct.empty();{const t=n.writeTree_.setTree(e,new be(null));return new Ct(t)}}function oa(n,e){return Hn(n,e)!=null}function Hn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Je(t.path,e)):null}function $c(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Te,(i,s)=>{e.push(new ee(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ee(i,s.value))}),e}function yn(n,e){if(ne(e))return n;{const t=Hn(n,e);return t!=null?new Ct(new be(t)):new Ct(n.writeTree_.subtree(e))}}function aa(n){return n.writeTree_.isEmpty()}function Ci(n,e){return dh(ae(),n.writeTree_,e)}function dh(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=dh(Re(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Re(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(n,e){return gh(e,n)}function Tv(n,e,t,i,s){x(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Ji(n.visibleWrites,e,t)),n.lastWriteId=i}function Ev(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Sv(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);x(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&kv(a,i.path)?s=!1:yt(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return xv(n),!0;if(i.snap)n.visibleWrites=Ac(n.visibleWrites,i.path);else{const a=i.children;et(a,l=>{n.visibleWrites=Ac(n.visibleWrites,Re(i.path,l))})}return!0}else return!1}function kv(n,e){if(n.snap)return yt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&yt(Re(n.path,t),e))return!0;return!1}function xv(n){n.visibleWrites=hh(n.allWrites,Av,ae()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Av(n){return n.visible}function hh(n,e,t){let i=Ct.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)yt(t,o)?(a=Je(t,o),i=Ji(i,a,r.snap)):yt(o,t)&&(a=Je(o,t),i=Ji(i,ae(),r.snap.getChild(a)));else if(r.children){if(yt(t,o))a=Je(t,o),i=xc(i,a,r.children);else if(yt(o,t))if(a=Je(o,t),ne(a))i=xc(i,ae(),r.children);else{const l=wi(r.children,te(a));if(l){const c=l.getChild(_e(a));i=Ji(i,ae(),c)}}}else throw ki("WriteRecord should have .snap or .children")}}return i}function fh(n,e,t,i,s){if(!i&&!s){const r=Hn(n.visibleWrites,e);if(r!=null)return r;{const o=yn(n.visibleWrites,e);if(aa(o))return t;if(t==null&&!oa(o,ae()))return null;{const a=t||G.EMPTY_NODE;return Ci(o,a)}}}else{const r=yn(n.visibleWrites,e);if(!s&&aa(r))return t;if(!s&&t==null&&!oa(r,ae()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(yt(c.path,e)||yt(e,c.path))},a=hh(n.allWrites,o,e),l=t||G.EMPTY_NODE;return Ci(a,l)}}}function $v(n,e,t){let i=G.EMPTY_NODE;const s=Hn(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Te,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=yn(n.visibleWrites,e);return t.forEachChild(Te,(o,a)=>{const l=Ci(yn(r,new pe(o)),a);i=i.updateImmediateChild(o,l)}),$c(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=yn(n.visibleWrites,e);return $c(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Pv(n,e,t,i,s){x(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Re(e,t);if(oa(n.visibleWrites,r))return null;{const o=yn(n.visibleWrites,r);return aa(o)?s.getChild(t):Ci(o,s.getChild(t))}}function Rv(n,e,t,i){const s=Re(e,t),r=Hn(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=yn(n.visibleWrites,s);return Ci(o,i.getNode().getImmediateChild(t))}else return null}function Nv(n,e){return Hn(n.visibleWrites,e)}function Ov(n,e,t,i,s,r,o){let a;const l=yn(n.visibleWrites,e),c=Hn(l,ae());if(c!=null)a=c;else if(t!=null)a=Ci(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<s;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function Lv(){return{visibleWrites:Ct.empty(),allWrites:[],lastWriteId:-1}}function _r(n,e,t,i){return fh(n.writeTree,n.treePath,e,t,i)}function Za(n,e){return $v(n.writeTree,n.treePath,e)}function Pc(n,e,t,i){return Pv(n.writeTree,n.treePath,e,t,i)}function vr(n,e){return Nv(n.writeTree,Re(n.treePath,e))}function Dv(n,e,t,i,s,r){return Ov(n.writeTree,n.treePath,e,t,i,s,r)}function el(n,e,t){return Rv(n.writeTree,n.treePath,e,t)}function ph(n,e){return gh(Re(n.treePath,e),n.writeTree)}function gh(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;x(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),x(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,cs(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,ls(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Ii(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,cs(i,e.snapshotNode,s.oldSnap));else throw ki("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const mh=new Uv;class tl{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Un(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return el(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fn(this.viewCache_),r=Dv(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(n){return{filter:n}}function Vv(n,e){x(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Wv(n,e,t,i,s){const r=new Mv;let o,a;if(t.type===wt.OVERWRITE){const c=t;c.source.fromUser?o=la(n,e,c.path,c.snap,i,s,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ne(c.path),o=yr(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===wt.MERGE){const c=t;c.source.fromUser?o=jv(n,e,c.path,c.children,i,s,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ca(n,e,c.path,c.children,i,s,a,r))}else if(t.type===wt.ACK_USER_WRITE){const c=t;c.revert?o=Gv(n,e,c.path,i,s,r):o=Bv(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===wt.LISTEN_COMPLETE)o=zv(n,e,t.path,i,r);else throw ki("Unknown operation type: "+t.type);const l=r.getChanges();return Hv(e,o,l),{viewCache:o,changes:l}}function Hv(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ra(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(ah(ra(e)))}}function _h(n,e,t,i,s,r){const o=e.eventCache;if(vr(i,t)!=null)return e;{let a,l;if(ne(t))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Fn(e),u=c instanceof G?c:G.EMPTY_NODE,d=Za(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=_r(i,Fn(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=te(t);if(c===".priority"){x(bn(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Pc(i,t,u,l);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=_e(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Pc(i,t,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=el(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return Qi(e,a,o.isFullyInitialized()||ne(t),n.filter.filtersNodes())}}function yr(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(ne(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=te(t);if(!l.isCompleteForPath(t)&&bn(t)>1)return e;const g=_e(t),y=l.getNode().getImmediateChild(f).updateChild(g,i);f===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),f,y,g,mh,null)}const d=uh(e,c,l.isFullyInitialized()||ne(t),u.filtersNodes()),h=new tl(s,d,r);return _h(n,d,t,s,h,a)}function la(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new tl(s,e,r);if(ne(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Qi(e,c,!0,n.filter.filtersNodes());else{const d=te(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Qi(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=_e(t),f=a.getNode().getImmediateChild(d);let g;if(ne(h))g=i;else{const v=u.getCompleteChild(d);v!=null?Xd(h)===".priority"&&v.getChild(eh(h)).isEmpty()?g=v:g=v.updateChild(h,i):g=G.EMPTY_NODE}if(f.equals(g))l=e;else{const v=n.filter.updateChild(a.getNode(),d,g,h,u,o);l=Qi(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Rc(n,e){return n.eventCache.isCompleteForChild(e)}function jv(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=Re(t,l);Rc(e,te(u))&&(a=la(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=Re(t,l);Rc(e,te(u))||(a=la(n,a,u,c,s,r,o))}),a}function Nc(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ca(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ne(t)?c=i:c=new be(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),g=Nc(n,f,h);l=yr(n,l,new pe(d),g,s,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const g=e.serverCache.getNode().getImmediateChild(d),v=Nc(n,g,h);l=yr(n,l,new pe(d),v,s,r,o,a)}}),l}function Bv(n,e,t,i,s,r,o){if(vr(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(ne(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return yr(n,e,t,l.getNode().getChild(t),s,r,a,o);if(ne(t)){let c=new be(null);return l.getNode().forEachChild(ci,(u,d)=>{c=c.set(new pe(u),d)}),ca(n,e,t,c,s,r,a,o)}else return e}else{let c=new be(null);return i.foreach((u,d)=>{const h=Re(t,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),ca(n,e,t,c,s,r,a,o)}}function zv(n,e,t,i,s){const r=e.serverCache,o=uh(e,r.getNode(),r.isFullyInitialized()||ne(t),r.isFiltered());return _h(n,o,t,i,mh,s)}function Gv(n,e,t,i,s,r){let o;if(vr(i,t)!=null)return e;{const a=new tl(i,e,s),l=e.eventCache.getNode();let c;if(ne(t)||te(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=_r(i,Fn(e));else{const d=e.serverCache.getNode();x(d instanceof G,"serverChildren would be complete if leaf node"),u=Za(i,d)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=te(t);let d=el(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=n.filter.updateChild(l,u,d,_e(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,G.EMPTY_NODE,_e(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=_r(i,Fn(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||vr(i,ae())!=null,Qi(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Ka(i.getIndex()),r=hv(i);this.processor_=Fv(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(G.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(G.EMPTY_NODE,a.getNode(),null),u=new Un(l,o.isFullyInitialized(),s.filtersNodes()),d=new Un(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Qr(d,u),this.eventGenerator_=new yv(this.query_)}get query(){return this.query_}}function Kv(n){return n.viewCache_.serverCache.getNode()}function Yv(n,e){const t=Fn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ne(e)&&!t.getImmediateChild(te(e)).isEmpty())?t.getChild(e):null}function Oc(n){return n.eventRegistrations_.length===0}function Qv(n,e){n.eventRegistrations_.push(e)}function Lc(n,e,t){const i=[];if(t){x(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Dc(n,e,t,i){e.type===wt.MERGE&&e.source.queryId!==null&&(x(Fn(n.viewCache_),"We should always have a full cache before handling merges"),x(ra(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Wv(n.processor_,s,e,t,i);return Vv(n.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,vh(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Jv(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Te,(r,o)=>{i.push(Ii(r,o))}),t.isFullyInitialized()&&i.push(ah(t.getNode())),vh(n,i,t.getNode(),e)}function vh(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return wv(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr;class Xv{constructor(){this.views=new Map}}function Zv(n){x(!wr,"__referenceConstructor has already been defined"),wr=n}function ey(){return x(wr,"Reference.ts has not been loaded"),wr}function ty(n){return n.views.size===0}function nl(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return x(r!=null,"SyncTree gave us an op for an invalid query."),Dc(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Dc(o,e,t,i));return r}}function ny(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=_r(t,s?i:null),l=!1;a?l=!0:i instanceof G?(a=Za(t,i),l=!1):(a=G.EMPTY_NODE,l=!1);const c=Qr(new Un(a,l,!1),new Un(i,s,!1));return new qv(e,c)}return o}function iy(n,e,t,i,s,r){const o=ny(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Qv(o,t),Jv(o,t)}function sy(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=In(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Lc(c,t,i)),Oc(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Lc(l,t,i)),Oc(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!In(n)&&r.push(new(ey())(e._repo,e._path)),{removed:r,events:o}}function yh(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ui(n,e){let t=null;for(const i of n.views.values())t=t||Yv(i,e);return t}function wh(n,e){if(e._queryParams.loadsAllData())return Jr(n);{const i=e._queryIdentifier;return n.views.get(i)}}function bh(n,e){return wh(n,e)!=null}function In(n){return Jr(n)!=null}function Jr(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br;function ry(n){x(!br,"__referenceConstructor has already been defined"),br=n}function oy(){return x(br,"Reference.ts has not been loaded"),br}let ay=1;class Mc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=Lv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ly(n,e,t,i,s){return Tv(n.pendingWriteTree_,e,t,i,s),s?Ss(n,new Mn(ch(),e,t)):[]}function ii(n,e,t=!1){const i=Ev(n.pendingWriteTree_,e);if(Sv(n.pendingWriteTree_,e)){let r=new be(null);return i.snap!=null?r=r.set(ae(),!0):et(i.children,o=>{r=r.set(new pe(o),!0)}),Ss(n,new mr(i.path,r,t))}else return[]}function Xr(n,e,t){return Ss(n,new Mn(Qa(),e,t))}function cy(n,e,t){const i=be.fromObject(t);return Ss(n,new hs(Qa(),e,i))}function uy(n,e){return Ss(n,new ds(Qa(),e))}function dy(n,e,t){const i=il(n,t);if(i){const s=sl(i),r=s.path,o=s.queryId,a=Je(r,e),l=new ds(Ja(o),a);return rl(n,r,l)}else return[]}function ua(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||bh(o,e))){const l=sy(o,e,t,i);ty(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(h,f)=>In(f));if(u&&!d){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=py(h);for(let g=0;g<f.length;++g){const v=f[g],y=v.query,w=Eh(n,v);n.listenProvider_.startListening(Xi(y),Ir(n,y),w.hashFn,w.onComplete)}}}!d&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(Xi(e),null):c.forEach(h=>{const f=n.queryToTagMap.get(Zr(h));n.listenProvider_.stopListening(Xi(h),f)}))}gy(n,c)}return a}function hy(n,e,t,i){const s=il(n,i);if(s!=null){const r=sl(s),o=r.path,a=r.queryId,l=Je(o,e),c=new Mn(Ja(a),l,t);return rl(n,o,c)}else return[]}function fy(n,e,t,i){const s=il(n,i);if(s){const r=sl(s),o=r.path,a=r.queryId,l=Je(o,e),c=be.fromObject(t),u=new hs(Ja(a),l,c);return rl(n,o,u)}else return[]}function Uc(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,f)=>{const g=Je(h,s);r=r||ui(f,g),o=o||In(f)});let a=n.syncPointTree_.get(s);a?(o=o||In(a),r=r||ui(a,ae())):(a=new Xv,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=G.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,g)=>{const v=ui(g,ae());v&&(r=r.updateImmediateChild(f,v))}));const c=bh(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Zr(e);x(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=my();n.queryToTagMap.set(h,f),n.tagToQueryMap.set(f,h)}const u=Xa(n.pendingWriteTree_,s);let d=iy(a,e,t,u,r,l);if(!c&&!o&&!i){const h=wh(a,e);d=d.concat(_y(n,e,h))}return d}function Ih(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Je(o,e),c=ui(a,l);if(c)return c});return fh(s,e,r,t,!0)}function Ss(n,e){return Ch(e,n.syncPointTree_,null,Xa(n.pendingWriteTree_,ae()))}function Ch(n,e,t,i){if(ne(n.path))return Th(n,e,t,i);{const s=e.get(ae());t==null&&s!=null&&(t=ui(s,ae()));let r=[];const o=te(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=ph(i,o);r=r.concat(Ch(a,l,c,u))}return s&&(r=r.concat(nl(s,n,i,t))),r}}function Th(n,e,t,i){const s=e.get(ae());t==null&&s!=null&&(t=ui(s,ae()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=ph(i,o),u=n.operationForChild(o);u&&(r=r.concat(Th(u,a,l,c)))}),s&&(r=r.concat(nl(s,n,i,t))),r}function Eh(n,e){const t=e.query,i=Ir(n,t);return{hashFn:()=>(Kv(e)||G.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?dy(n,t._path,i):uy(n,t._path);{const r=d_(s,t);return ua(n,t,null,r)}}}}function Ir(n,e){const t=Zr(e);return n.queryToTagMap.get(t)}function Zr(n){return n._path.toString()+"$"+n._queryIdentifier}function il(n,e){return n.tagToQueryMap.get(e)}function sl(n){const e=n.indexOf("$");return x(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new pe(n.substr(0,e))}}function rl(n,e,t){const i=n.syncPointTree_.get(e);x(i,"Missing sync point for query tag that we're tracking");const s=Xa(n.pendingWriteTree_,e);return nl(i,t,s,null)}function py(n){return n.fold((e,t,i)=>{if(t&&In(t))return[Jr(t)];{let s=[];return t&&(s=yh(t)),et(i,(r,o)=>{s=s.concat(o)}),s}})}function Xi(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(oy())(n._repo,n._path):n}function gy(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Zr(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function my(){return ay++}function _y(n,e,t){const i=e._path,s=Ir(n,e),r=Eh(n,t),o=n.listenProvider_.startListening(Xi(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)x(!In(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!ne(c)&&u&&In(u))return[Jr(u).query];{let h=[];return u&&(h=h.concat(yh(u).map(f=>f.query))),et(d,(f,g)=>{h=h.concat(g)}),h}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Xi(u),Ir(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ol(t)}node(){return this.node_}}class al{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Re(this.path_,e);return new al(this.syncTree_,t)}node(){return Ih(this.syncTree_,this.path_)}}const vy=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Fc=function(n,e,t){if(!n||typeof n!="object")return n;if(x(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return yy(n[".sv"],e,t);if(typeof n[".sv"]=="object")return wy(n[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},yy=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:x(!1,"Unexpected server value: "+n)}},wy=function(n,e,t){n.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&x(!1,"Unexpected increment value: "+i);const s=e.node();if(x(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},by=function(n,e,t,i){return ll(e,new al(t,n),i)},Iy=function(n,e,t){return ll(n,new ol(e),t)};function ll(n,e,t){const i=n.getPriority().val(),s=Fc(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Fc(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Le(a,Be(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Le(s))),o.forEachChild(Te,(a,l)=>{const c=ll(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function ul(n,e){let t=e instanceof pe?e:new pe(e),i=n,s=te(t);for(;s!==null;){const r=wi(i.node.children,s)||{children:{},childCount:0};i=new cl(s,i,r),t=_e(t),s=te(t)}return i}function Ai(n){return n.node.value}function Sh(n,e){n.node.value=e,da(n)}function kh(n){return n.node.childCount>0}function Cy(n){return Ai(n)===void 0&&!kh(n)}function eo(n,e){et(n.node.children,(t,i)=>{e(new cl(t,n,i))})}function xh(n,e,t,i){t&&!i&&e(n),eo(n,s=>{xh(s,e,!0,i)}),t&&i&&e(n)}function Ty(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ks(n){return new pe(n.parent===null?n.name:ks(n.parent)+"/"+n.name)}function da(n){n.parent!==null&&Ey(n.parent,n.name,n)}function Ey(n,e,t){const i=Cy(t),s=Xt(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,da(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,da(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=/[\[\].#$\/\u0000-\u001F\u007F]/,ky=/[\[\].#$\u0000-\u001F\u007F]/,Eo=10*1024*1024,Ah=function(n){return typeof n=="string"&&n.length!==0&&!Sy.test(n)},$h=function(n){return typeof n=="string"&&n.length!==0&&!ky.test(n)},xy=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$h(n)},Ph=function(n,e,t){const i=t instanceof pe?new B_(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+$n(i));if(typeof e=="function")throw new Error(n+"contains a function "+$n(i)+" with contents = "+e.toString());if(Pd(e))throw new Error(n+"contains "+e.toString()+" "+$n(i));if(typeof e=="string"&&e.length>Eo/3&&qr(e)>Eo)throw new Error(n+"contains a string greater than "+Eo+" utf8 bytes "+$n(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(et(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ah(o)))throw new Error(n+" contains an invalid key ("+o+") "+$n(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);z_(i,o),Ph(n,a,i),G_(i)}),s&&r)throw new Error(n+' contains ".value" child '+$n(i)+" in addition to actual children.")}},Rh=function(n,e,t,i){if(!$h(t))throw new Error(bd(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ay=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Rh(n,e,t)},$y=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ah(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!xy(t))throw new Error(bd(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Nh(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!za(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Oh(n,e,t){Nh(n,t),Lh(n,i=>za(i,e))}function jn(n,e,t){Nh(n,t),Lh(n,i=>yt(i,e)||yt(e,i))}function Lh(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Ry(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Ry(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Ki&&je("event: "+t.toString()),Ts(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="repo_interrupt",Oy=25;class Ly{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Py,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gr(),this.transactionQueueTree_=new cl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Dy(n,e,t){if(n.stats_=ja(n.repoInfo_),n.forceRestClient_||g_())n.server_=new pr(n.repoInfo_,(i,s,r,o)=>{Vc(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Wc(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ht(n.repoInfo_,e,(i,s,r,o)=>{Vc(n,i,s,r,o)},i=>{Wc(n,i)},i=>{Uy(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=w_(n.repoInfo_,()=>new vv(n.stats_,n.server_)),n.infoData_=new fv,n.infoSyncTree_=new Mc({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Xr(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),dl(n,"connected",!1),n.serverSyncTree_=new Mc({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);jn(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function My(n){const t=n.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Dh(n){return vy({timestamp:My(n)})}function Vc(n,e,t,i,s){n.dataUpdateCount++;const r=new pe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=lr(t,c=>Be(c));o=fy(n.serverSyncTree_,r,l,s)}else{const l=Be(t);o=hy(n.serverSyncTree_,r,l,s)}else if(i){const l=lr(t,c=>Be(c));o=cy(n.serverSyncTree_,r,l)}else{const l=Be(t);o=Xr(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=fl(n,r)),jn(n.eventQueue_,a,o)}function Wc(n,e){dl(n,"connected",e),e===!1&&Vy(n)}function Uy(n,e){et(e,(t,i)=>{dl(n,t,i)})}function dl(n,e,t){const i=new pe("/.info/"+e),s=Be(t);n.infoData_.updateSnapshot(i,s);const r=Xr(n.infoSyncTree_,i,s);jn(n.eventQueue_,i,r)}function Fy(n){return n.nextWriteId_++}function Vy(n){Mh(n,"onDisconnectEvents");const e=Dh(n),t=gr();sa(n.onDisconnect_,ae(),(s,r)=>{const o=by(s,r,n.serverSyncTree_,e);lh(t,s,o)});let i=[];sa(t,ae(),(s,r)=>{i=i.concat(Xr(n.serverSyncTree_,s,r));const o=Gy(n,s);fl(n,o)}),n.onDisconnect_=gr(),jn(n.eventQueue_,ae(),i)}function Wy(n,e,t){let i;te(e._path)===".info"?i=Uc(n.infoSyncTree_,e,t):i=Uc(n.serverSyncTree_,e,t),Oh(n.eventQueue_,e._path,i)}function Hy(n,e,t){let i;te(e._path)===".info"?i=ua(n.infoSyncTree_,e,t):i=ua(n.serverSyncTree_,e,t),Oh(n.eventQueue_,e._path,i)}function jy(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Ny)}function Mh(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),je(t,...e)}function Uh(n,e,t){return Ih(n.serverSyncTree_,e,t)||G.EMPTY_NODE}function hl(n,e=n.transactionQueueTree_){if(e||to(n,e),Ai(e)){const t=Vh(n,e);x(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&By(n,ks(e),t)}else kh(e)&&eo(e,t=>{hl(n,t)})}function By(n,e,t){const i=t.map(c=>c.currentWriteId),s=Uh(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Je(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Mh(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat(ii(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();to(n,ul(n.transactionQueueTree_,e)),hl(n,n.transactionQueueTree_),jn(n.eventQueue_,e,u);for(let h=0;h<d.length;h++)Ts(d[h])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{rt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}fl(n,e)}},o)}function fl(n,e){const t=Fh(n,e),i=ks(t),s=Vh(n,t);return zy(n,s,i),i}function zy(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Je(t,l.path);let u=!1,d;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(ii(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Oy)u=!0,d="maxretry",s=s.concat(ii(n.serverSyncTree_,l.currentWriteId,!0));else{const h=Uh(n,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){Ph("transaction failed: Data returned ",f,l.path);let g=Be(f);typeof f=="object"&&f!=null&&Xt(f,".priority")||(g=g.updatePriority(h.getPriority()));const y=l.currentWriteId,w=Dh(n),I=Iy(g,h,w);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=I,l.currentWriteId=Fy(n),o.splice(o.indexOf(y),1),s=s.concat(ly(n.serverSyncTree_,l.path,I,l.currentWriteId,l.applyLocally)),s=s.concat(ii(n.serverSyncTree_,y,!0))}else u=!0,d="nodata",s=s.concat(ii(n.serverSyncTree_,l.currentWriteId,!0))}jn(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}to(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Ts(i[a]);hl(n,n.transactionQueueTree_)}function Fh(n,e){let t,i=n.transactionQueueTree_;for(t=te(e);t!==null&&Ai(i)===void 0;)i=ul(i,t),e=_e(e),t=te(e);return i}function Vh(n,e){const t=[];return Wh(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Wh(n,e,t){const i=Ai(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);eo(e,s=>{Wh(n,s,t)})}function to(n,e){const t=Ai(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Sh(e,t.length>0?t:void 0)}eo(e,i=>{to(n,i)})}function Gy(n,e){const t=ks(Fh(n,e)),i=ul(n.transactionQueueTree_,e);return Ty(i,s=>{So(n,s)}),So(n,i),xh(i,s=>{So(n,s)}),t}function So(n,e){const t=Ai(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(x(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(ii(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Sh(e,void 0):t.length=r+1,jn(n.eventQueue_,ks(e),s);for(let o=0;o<i.length;o++)Ts(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Ky(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):rt(`Invalid query segment '${t}' in query '${n}'`)}return e}const Hc=function(n,e){const t=Yy(n),i=t.namespace;t.domain==="firebase.com"&&qt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||o_();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new jd(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new pe(t.pathString)}},Yy=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(s=qy(n.substring(u,d)));const h=Ky(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Me(this.snapshot.exportVal())}}class Jy{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return ne(this._path)?null:Xd(this._path)}get ref(){return new Sn(this._repo,this._path)}get _queryIdentifier(){const e=Sc(this._queryParams),t=Wa(e);return t==="{}"?"default":t}get _queryObject(){return Sc(this._queryParams)}isEqual(e){if(e=Ue(e),!(e instanceof pl))return!1;const t=this._repo===e._repo,i=za(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+j_(this._path)}}class Sn extends pl{constructor(e,t){super(e,t,new Ya,!1)}get parent(){const e=eh(this._path);return e===null?null:new Sn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Cr{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new pe(e),i=ha(this.ref,e);return new Cr(this._node.getChild(t),i,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Cr(s,ha(this.ref,i),Te)))}hasChild(e){const t=new pe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Zy(n,e){return n=Ue(n),n._checkNotDeleted("ref"),e!==void 0?ha(n._root,e):n._root}function ha(n,e){return n=Ue(n),te(n._path)===null?Ay("child","path",e):Rh("child","path",e),new Sn(n._repo,Re(n._path,e))}class gl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Qy("value",this,new Cr(e.snapshotNode,new Sn(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Jy(this,e,t):null}matches(e){return e instanceof gl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function ew(n,e,t,i,s){const r=new Xy(t,void 0),o=new gl(r);return Wy(n._repo,n,o),()=>Hy(n._repo,n,o)}function tw(n,e,t,i){return ew(n,"value",e)}Zv(Sn);ry(Sn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="FIREBASE_DATABASE_EMULATOR_HOST",fa={};let iw=!1;function sw(n,e,t,i){n.repoInfo_=new jd(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function rw(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Hc(r,s),a=o.repoInfo,l;typeof process<"u"&&lc&&(l=lc[nw]),l?(r=`http://${l}?ns=${a.namespace}`,o=Hc(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new __(n.name,n.options,e);$y("Invalid Firebase Database URL",o),ne(o.path)||qt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=aw(a,n,c,new m_(n.name,t));return new lw(u,n)}function ow(n,e){const t=fa[e];(!t||t[n.key]!==n)&&qt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),jy(n),delete t[n.key]}function aw(n,e,t,i){let s=fa[e.name];s||(s={},fa[e.name]=s);let r=s[n.toURLString()];return r&&qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ly(n,iw,t,i),s[n.toURLString()]=r,r}class lw{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Dy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Sn(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ow(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&qt("Cannot call "+e+" on a deleted database.")}}function cw(n=Ed(),e){const t=Va(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Pg("database");i&&uw(t,...i)}return t}function uw(n,e,t,i={}){n=Ue(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&qt("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Bs(Bs.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Rg(i.mockUserToken,n.app.options.projectId);r=new Bs(o)}sw(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(n){e_(en),wn(new zt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return rw(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),kt(cc,uc,n),kt(cc,uc,"esm2017")}Ht.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ht.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};dw();function $i(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Hh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hw=Hh,jh=new En("auth","Firebase",Hh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Kr("@firebase/auth");function fw(n,...e){Tr.logLevel<=ce.WARN&&Tr.warn(`Auth (${en}): ${n}`,...e)}function zs(n,...e){Tr.logLevel<=ce.ERROR&&Tr.error(`Auth (${en}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n,...e){throw ml(n,...e)}function xt(n,...e){return ml(n,...e)}function Bh(n,e,t){const i=Object.assign(Object.assign({},hw()),{[e]:t});return new En("auth","Firebase",i).create(e,{appName:n.name})}function jt(n){return Bh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ml(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return jh.create(n,...e)}function z(n,e,...t){if(!n)throw ml(e,...t)}function Ft(n){const e="INTERNAL ASSERTION FAILED: "+n;throw zs(e),new Error(e)}function Kt(n,e){n||Ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function pw(){return jc()==="http:"||jc()==="https:"}function jc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pw()||_d()||"connection"in navigator)?navigator.onLine:!0}function mw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Kt(t>e,"Short delay should be less than long delay!"),this.isMobile=Gr()||Ua()}get(){return gw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n,e){Kt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zh=class{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=new xs(3e4,6e4);function tn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function nn(n,e,t,i,s={}){return Gh(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Zt(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},r);return md()||(c.referrerPolicy="no-referrer"),zh.fetch()(qh(n,n.config.apiHost,t,a),c)})}async function Gh(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},_w),e);try{const s=new ww(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ws(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ws(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ws(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ws(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Bh(n,u,c);Tt(n,u)}}catch(s){if(s instanceof at)throw s;Tt(n,"network-request-failed",{message:String(s)})}}async function As(n,e,t,i,s={}){const r=await nn(n,e,t,i,s);return"mfaPendingCredential"in r&&Tt(n,"multi-factor-auth-required",{_serverResponse:r}),r}function qh(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?_l(n.config,s):`${n.config.apiScheme}://${s}`}function yw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}let ww=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(xt(this.auth,"network-request-failed")),vw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function Ws(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=xt(n,e,i);return s.customData._tokenResponse=t,s}function Bc(n){return n!==void 0&&n.enterprise!==void 0}class bw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return yw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Iw(n,e){return nn(n,"GET","/v2/recaptchaConfig",tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(n,e){return nn(n,"POST","/v1/accounts:delete",e)}async function Kh(n,e){return nn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tw(n,e=!1){const t=Ue(n),i=await t.getIdToken(e),s=vl(i);z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Zi(ko(s.auth_time)),issuedAtTime:Zi(ko(s.iat)),expirationTime:Zi(ko(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ko(n){return Number(n)*1e3}function vl(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return zs("JWT malformed, contained fewer than 3 sections"),null;try{const s=ss(t);return s?JSON.parse(s):(zs("Failed to decode base64 JWT payload"),null)}catch(s){return zs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zc(n){const e=vl(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof at&&Ew(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Ew({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sw=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zi(this.lastLoginAt),this.creationTime=Zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(n){var e;const t=n.auth,i=await n.getIdToken(),s=await fs(n,Kh(t,{idToken:i}));z(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Yh(r.providerUserInfo):[],a=xw(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ga(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function kw(n){const e=Ue(n);await Er(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xw(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Yh(n){return n.map(e=>{var{providerId:t}=e,i=$i(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(n,e){const t=await Gh(n,{},async()=>{const i=Zt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=qh(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zh.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $w(n,e){return nn(n,"POST","/v2/accounts:revokeToken",tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo=class ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=zc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Aw(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new ma;return i&&(z(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(z(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ma,this.toJSON())}_performRefresh(){return Ft("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}let Sr=class Hi{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=$i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ga(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await fs(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Tw(this,e)}reload(){return kw(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Hi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Er(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ye(this.auth.app))return Promise.reject(jt(this.auth));const e=await this.getIdToken();return await fs(this,Cw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=t.createdAt)!==null&&c!==void 0?c:void 0,I=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:C,isAnonymous:$,providerData:k,stsTokenManager:M}=t;z(S&&M,e,"internal-error");const U=xo.fromJSON(this.name,M);z(typeof S=="string",e,"internal-error"),sn(d,e.name),sn(h,e.name),z(typeof C=="boolean",e,"internal-error"),z(typeof $=="boolean",e,"internal-error"),sn(f,e.name),sn(g,e.name),sn(v,e.name),sn(y,e.name),sn(w,e.name),sn(I,e.name);const E=new Hi({uid:S,auth:e,email:h,emailVerified:C,displayName:d,isAnonymous:$,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:U,createdAt:w,lastLoginAt:I});return k&&Array.isArray(k)&&(E.providerData=k.map(P=>Object.assign({},P))),y&&(E._redirectEventId=y),E}static async _fromIdTokenResponse(e,t,i=!1){const s=new xo;s.updateFromServerResponse(t);const r=new Hi({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Er(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];z(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Yh(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new xo;a.updateFromIdToken(i);const l=new Hi({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new ga(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new Map;function Vt(n){Kt(n instanceof Function,"Expected a class definition");let e=Gc.get(n);return e?(Kt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Gc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qh=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Qh.type="NONE";const qc=Qh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(n,e,t){return`firebase:${n}:${e}:${t}`}let Kc=class qs{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Gs(this.userKey,s.apiKey,r),this.fullPersistenceKey=Gs("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new qs(Vt(qc),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Vt(qc);const o=Gs(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const d=Sr._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new qs(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new qs(r,e,i))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ef(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nf(e))return"Blackberry";if(sf(e))return"Webos";if(Xh(e))return"Safari";if((e.includes("chrome/")||Zh(e))&&!e.includes("edge/"))return"Chrome";if(tf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Jh(n=Ce()){return/firefox\//i.test(n)}function Xh(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zh(n=Ce()){return/crios\//i.test(n)}function ef(n=Ce()){return/iemobile/i.test(n)}function tf(n=Ce()){return/android/i.test(n)}function nf(n=Ce()){return/blackberry/i.test(n)}function sf(n=Ce()){return/webos/i.test(n)}function yl(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Pw(n=Ce()){var e;return yl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rw(){return Ng()&&document.documentMode===10}function rf(n=Ce()){return yl(n)||tf(n)||sf(n)||nf(n)||/windows phone/i.test(n)||ef(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(n,e=[]){let t;switch(n){case"Browser":t=Yc(Ce());break;case"Worker":t=`${Yc(Ce())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${en}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nw=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ow(n,e={}){return nn(n,"GET","/v2/passwordPolicy",tn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=6;let Dw=class{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Lw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mw=class{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qc(this),this.idTokenSubscription=new Qc(this),this.beforeStateQueue=new Nw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vt(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Kc.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Kh(this,{idToken:e}),i=await Sr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ye(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Er(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ye(this.app))return Promise.reject(jt(this));const t=e?Ue(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ye(this.app)?Promise.reject(jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ye(this.app)?Promise.reject(jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ow(this),t=new Dw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new En("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await $w(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await Kc.create(this,[Vt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=of(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&fw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}};function kn(n){return Ue(n)}let Qc=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=wd(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Uw(n){no=n}function af(n){return no.loadJS(n)}function Fw(){return no.recaptchaEnterpriseScript}function Vw(){return no.gapiScript}function Ww(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Hw="recaptcha-enterprise",jw="NO_RECAPTCHA";class Bw{constructor(e){this.type=Hw,this.auth=kn(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Iw(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new bw(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;Bc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(jw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&Bc(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Fw();l.length!==0&&(l+=a),af(l).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Jc(n,e,t,i=!1){const s=new Bw(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function kr(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Jc(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Jc(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(n,e){const t=Va(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(cr(r,e??{}))return s;Tt(s,"already-initialized")}return t.initialize({options:e})}function Gw(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Vt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function qw(n,e,t){const i=kn(n);z(i._canInitEmulator,i,"emulator-config-failed"),z(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=lf(e),{host:o,port:a}=Kw(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),Yw()}function lf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Kw(n){const e=lf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Xc(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Xc(o)}}}function Xc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Yw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,t){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}};async function Qw(n,e){return nn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(n,e){return As(n,"POST","/v1/accounts:signInWithPassword",tn(n,e))}async function cf(n,e){return nn(n,"POST","/v1/accounts:sendOobCode",tn(n,e))}async function Xw(n,e){return cf(n,e)}async function Zw(n,e){return cf(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(n,e){return As(n,"POST","/v1/accounts:signInWithEmailLink",tn(n,e))}async function tb(n,e){return As(n,"POST","/v1/accounts:signInWithEmailLink",tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends wl{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ps(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ps(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kr(e,t,"signInWithPassword",Jw);case"emailLink":return eb(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kr(e,i,"signUpPassword",Qw);case"emailLink":return tb(e,{idToken:t,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(n,e){return As(n,"POST","/v1/accounts:signInWithIdp",tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb="http://localhost";let io=class _a extends wl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _a(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=$i(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new _a(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return di(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,di(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,di(e,t)}buildRequest(){const e={requestUri:nb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zt(t)}return e}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sb(n){const e=Vi(Wi(n)).link,t=e?Vi(Wi(e)).deep_link_id:null,i=Vi(Wi(n)).deep_link_id;return(i?Vi(Wi(i)).link:null)||i||t||e||n}class bl{constructor(e){var t,i,s,r,o,a;const l=Vi(Wi(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=ib((s=l.mode)!==null&&s!==void 0?s:null);z(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=sb(e);try{return new bl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.providerId=Pi.PROVIDER_ID}static credential(e,t){return ps._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=bl.parseLink(t);return z(i,"argument-error"),ps._fromEmailAndCode(e,i.code,i.tenantId)}}Pi.PROVIDER_ID="password";Pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uf=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s=class extends uf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let df=class Qn extends $s{constructor(){super("facebook.com")}static credential(e){return io._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}};df.FACEBOOK_SIGN_IN_METHOD="facebook.com";df.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Il=class Jn extends $s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return io._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Jn.credential(t,i)}catch{return null}}};Il.GOOGLE_SIGN_IN_METHOD="google.com";Il.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hf=class Xn extends $s{constructor(){super("github.com")}static credential(e){return io._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}};hf.GITHUB_SIGN_IN_METHOD="github.com";hf.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ff=class Zn extends $s{constructor(){super("twitter.com")}static credential(e,t){return io._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Zn.credential(t,i)}catch{return null}}};ff.TWITTER_SIGN_IN_METHOD="twitter.com";ff.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rb(n,e){return As(n,"POST","/v1/accounts:signUp",tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Sr._fromIdTokenResponse(e,i,s),o=Zc(i);return new Vn({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Zc(i);return new Vn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Zc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends at{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,xr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new xr(e,t,i,s)}}function pf(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?xr._fromErrorAndOperation(n,r,e,i):r})}async function ob(n,e,t=!1){const i=await fs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Vn._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(n,e,t=!1){const{auth:i}=n;if(Ye(i.app))return Promise.reject(jt(i));const s="reauthenticate";try{const r=await fs(n,pf(i,s,e,n),t);z(r.idToken,i,"internal-error");const o=vl(r.idToken);z(o,i,"internal-error");const{sub:a}=o;return z(n.uid===a,i,"user-mismatch"),Vn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Tt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gf(n,e,t=!1){if(Ye(n.app))return Promise.reject(jt(n));const i="signIn",s=await pf(n,i,e),r=await Vn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function va(n,e){return gf(kn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mf(n){const e=kn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function lb(n,e,t){const i=kn(n);await kr(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Zw)}async function cb(n,e,t){if(Ye(n.app))return Promise.reject(jt(n));const i=kn(n),o=await kr(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rb).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&mf(n),l}),a=await Vn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function ub(n,e,t){return Ye(n.app)?Promise.reject(jt(n)):va(Ue(n),Pi.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&mf(n),i})}async function db(n,e){const t=Ue(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:r}=await Xw(t.auth,s);r!==n.email&&await n.reload()}function hb(n,e,t,i){return Ue(n).onIdTokenChanged(e,t,i)}function fb(n,e,t){return Ue(n).beforeAuthStateChanged(e,t)}function pb(n,e,t,i){return Ue(n).onAuthStateChanged(e,t,i)}function Cl(n){return Ue(n).signOut()}const Ar="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ar,"1"),this.storage.removeItem(Ar),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=1e3,mb=10;class vf extends _f{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Rw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mb):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},gb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vf.type="LOCAL";const _b=vf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf extends _f{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yf.type="SESSION";const wf=yf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new so(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await vb(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}so.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Tl("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return window}function wb(n){At().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function bb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ib(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Cb(){return bf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="firebaseLocalStorageDb",Tb=1,$r="firebaseLocalStorage",Cf="fbase_key";class Ps{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ro(n,e){return n.transaction([$r],e?"readwrite":"readonly").objectStore($r)}function Eb(){const n=indexedDB.deleteDatabase(If);return new Ps(n).toPromise()}function ya(){const n=indexedDB.open(If,Tb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore($r,{keyPath:Cf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains($r)?e(i):(i.close(),await Eb(),e(await ya()))})})}async function eu(n,e,t){const i=ro(n,!0).put({[Cf]:e,value:t});return new Ps(i).toPromise()}async function Sb(n,e){const t=ro(n,!1).get(e),i=await new Ps(t).toPromise();return i===void 0?null:i.value}function tu(n,e){const t=ro(n,!0).delete(e);return new Ps(t).toPromise()}const kb=800,xb=3;class Tf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ya(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>xb)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=so._getInstance(Cb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await bb(),!this.activeServiceWorker)return;this.sender=new yb(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ib()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ya();return await eu(e,Ar,"1"),await tu(e,Ar),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>eu(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Sb(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ro(s,!1).getAll();return new Ps(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tf.type="LOCAL";const Ab=Tf;new xs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(n,e){return e?Vt(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends wl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,t){return di(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pb(n){return gf(n.auth,new El(n),n.bypassAuthState)}function Rb(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),ab(t,new El(n),n.bypassAuthState)}async function Nb(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),ob(t,new El(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pb;case"linkViaPopup":case"linkViaRedirect":return Nb;case"reauthViaPopup":case"reauthViaRedirect":return Rb;default:Tt(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=new xs(2e3,1e4);class si extends Ef{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=Tl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ob.get())};e()}}si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb="pendingRedirect",Ks=new Map;class Db extends Ef{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ks.get(this.auth._key());if(!e){try{const i=await Mb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ks.set(this.auth._key(),e)}return this.bypassAuthState||Ks.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mb(n,e){const t=Vb(e),i=Fb(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Ub(n,e){Ks.set(n._key(),e)}function Fb(n){return Vt(n._redirectPersistence)}function Vb(n){return Gs(Lb,n.config.apiKey,n.name)}async function Wb(n,e,t=!1){if(Ye(n.app))return Promise.reject(jt(n));const i=kn(n),s=$b(i,e),o=await new Db(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=10*60*1e3;class jb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Sf(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(xt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hb&&this.cachedEventUids.clear(),this.cachedEventUids.has(nu(e))}saveEventToCache(e){this.cachedEventUids.add(nu(e)),this.lastProcessedEventTime=Date.now()}}function nu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Sf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zb(n,e={}){return nn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qb=/^https?/;async function Kb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zb(n);for(const t of e)try{if(Yb(t))return}catch{}Tt(n,"unauthorized-domain")}function Yb(n){const e=pa(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!qb.test(t))return!1;if(Gb.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=new xs(3e4,6e4);function iu(){const n=At().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Jb(n){return new Promise((e,t)=>{var i,s,r;function o(){iu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iu(),t(xt(n,"network-request-failed"))},timeout:Qb.get()})}if(!((s=(i=At().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=At().gapi)===null||r===void 0)&&r.load)o();else{const a=Ww("iframefcb");return At()[a]=()=>{gapi.load?o():t(xt(n,"network-request-failed"))},af(`${Vw()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Ys=null,e})}let Ys=null;function Xb(n){return Ys=Ys||Jb(n),Ys}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=new xs(5e3,15e3),eI="__/auth/iframe",tI="emulator/auth/iframe",nI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sI(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_l(e,tI):`https://${n.config.authDomain}/${eI}`,i={apiKey:e.apiKey,appName:n.name,v:en},s=iI.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Zt(i).slice(1)}`}async function rI(n){const e=await Xb(n),t=At().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:sI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nI,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=xt(n,"network-request-failed"),a=At().setTimeout(()=>{r(o)},Zb.get());function l(){At().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aI=500,lI=600,cI="_blank",uI="http://localhost";class su{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dI(n,e,t,i=aI,s=lI){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},oI),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Ce().toLowerCase();t&&(a=Zh(c)?cI:t),Jh(c)&&(e=e||uI,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,g])=>`${h}${f}=${g},`,"");if(Pw(c)&&a!=="_self")return hI(e||"",a),new su(null);const d=window.open(e||"",a,u);z(d,n,"popup-blocked");try{d.focus()}catch{}return new su(d)}function hI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="__/auth/handler",pI="emulator/auth/handler",gI=encodeURIComponent("fac");async function ru(n,e,t,i,s,r){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:en,eventId:s};if(e instanceof uf){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Yo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof $s){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${gI}=${encodeURIComponent(l)}`:"";return`${mI(n)}?${Zt(a).slice(1)}${c}`}function mI({config:n}){return n.emulator?_l(n,pI):`https://${n.authDomain}/${fI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao="webStorageSupport";class _I{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wf,this._completeRedirectFn=Wb,this._overrideRedirectResult=Ub}async _openPopup(e,t,i,s){var r;Kt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ru(e,t,i,pa(),s);return dI(e,o,Tl())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await ru(e,t,i,pa(),s);return wb(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Kt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await rI(e),i=new jb(e);return t.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ao,{type:Ao},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Ao];o!==void 0&&t(!!o),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rf()||Xh()||yl()}}const vI=_I;var ou="@firebase/auth",au="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yI=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bI(n){wn(new zt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:of(n)},c=new Mw(i,s,r,l);return Gw(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),wn(new zt("auth-internal",e=>{const t=kn(e.getProvider("auth").getImmediate());return(i=>new yI(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(ou,au,wI(n)),kt(ou,au,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=5*60,CI=gd("authIdTokenMaxAge")||II;let lu=null;const TI=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>CI)return;const s=t==null?void 0:t.token;lu!==s&&(lu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function EI(n=Ed()){const e=Va(n,"auth");if(e.isInitialized())return e.getImmediate();const t=zw(n,{popupRedirectResolver:vI,persistence:[Ab,_b,wf]}),i=gd("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=TI(r.toString());fb(t,o,()=>o(t.currentUser)),hb(t,a=>o(a))}}const s=fd("auth");return s&&qw(t,`http://${s}`),t}function SI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Uw({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=xt("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",SI().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bI("Browser");const kf=n=>typeof n=="object"&&n!==null,cu=n=>kf(n)&&!(n instanceof RegExp)&&!(n instanceof Error)&&!(n instanceof Date),kI=Symbol("mapObjectSkip"),wa=(n,e,t,i=new WeakMap)=>{if(t={deep:!1,target:{},...t},i.has(n))return i.get(n);i.set(n,t.target);const{target:s}=t;delete t.target;const r=o=>o.map(a=>cu(a)?wa(a,e,t,i):a);if(Array.isArray(n))return r(n);for(const[o,a]of Object.entries(n)){const l=e(o,a,n);if(l===kI)continue;let[c,u,{shouldRecurse:d=!0}={}]=l;c!=="__proto__"&&(t.deep&&d&&cu(u)&&(u=Array.isArray(u)?r(u):wa(u,e,t,i)),s[c]=u)}return s};function uu(n,e,t){if(!kf(n))throw new TypeError(`Expected an object, got \`${n}\` (${typeof n})`);return wa(n,e,t)}const xI=/[\p{Lu}]/u,AI=/[\p{Ll}]/u,du=/^[\p{Lu}](?![\p{Lu}])/gu,xf=/([\p{Alpha}\p{N}_]|$)/u,Sl=/[_.\- ]+/,$I=new RegExp("^"+Sl.source),hu=new RegExp(Sl.source+xf.source,"gu"),fu=new RegExp("\\d+"+xf.source,"gu"),PI=(n,e,t,i)=>{let s=!1,r=!1,o=!1,a=!1;for(let l=0;l<n.length;l++){const c=n[l];a=l>2?n[l-3]==="-":!0,s&&xI.test(c)?(n=n.slice(0,l)+"-"+n.slice(l),s=!1,o=r,r=!0,l++):r&&o&&AI.test(c)&&(!a||i)?(n=n.slice(0,l-1)+"-"+n.slice(l-1),o=r,r=!1,s=!0):(s=e(c)===c&&t(c)!==c,o=r,r=t(c)===c&&e(c)!==c)}return n},RI=(n,e)=>(du.lastIndex=0,n.replaceAll(du,t=>e(t))),NI=(n,e)=>(hu.lastIndex=0,fu.lastIndex=0,n.replaceAll(fu,(t,i,s)=>["_","-"].includes(n.charAt(s+t.length))?t:e(t)).replaceAll(hu,(t,i)=>e(i)));function OI(n,e){if(!(typeof n=="string"||Array.isArray(n)))throw new TypeError("Expected the input to be `string | string[]`");if(e={pascalCase:!1,preserveConsecutiveUppercase:!1,...e},Array.isArray(n)?n=n.map(r=>r.trim()).filter(r=>r.length).join("-"):n=n.trim(),n.length===0)return"";const t=e.locale===!1?r=>r.toLowerCase():r=>r.toLocaleLowerCase(e.locale),i=e.locale===!1?r=>r.toUpperCase():r=>r.toLocaleUpperCase(e.locale);return n.length===1?Sl.test(n)?"":e.pascalCase?i(n):t(n):(n!==t(n)&&(n=PI(n,t,i,e.preserveConsecutiveUppercase)),n=n.replace($I,""),n=e.preserveConsecutiveUppercase?RI(n,t):t(n),e.pascalCase&&(n=i(n.charAt(0))+n.slice(1)),NI(n,i))}class LI extends Map{constructor(e={}){if(super(),!(e.maxSize&&e.maxSize>0))throw new TypeError("`maxSize` must be a number greater than 0");if(typeof e.maxAge=="number"&&e.maxAge===0)throw new TypeError("`maxAge` must be a number greater than 0");this.maxSize=e.maxSize,this.maxAge=e.maxAge||Number.POSITIVE_INFINITY,this.onEviction=e.onEviction,this.cache=new Map,this.oldCache=new Map,this._size=0}_emitEvictions(e){if(typeof this.onEviction=="function")for(const[t,i]of e)this.onEviction(t,i.value)}_deleteIfExpired(e,t){return typeof t.expiry=="number"&&t.expiry<=Date.now()?(typeof this.onEviction=="function"&&this.onEviction(e,t.value),this.delete(e)):!1}_getOrDeleteIfExpired(e,t){if(this._deleteIfExpired(e,t)===!1)return t.value}_getItemValue(e,t){return t.expiry?this._getOrDeleteIfExpired(e,t):t.value}_peek(e,t){const i=t.get(e);return this._getItemValue(e,i)}_set(e,t){this.cache.set(e,t),this._size++,this._size>=this.maxSize&&(this._size=0,this._emitEvictions(this.oldCache),this.oldCache=this.cache,this.cache=new Map)}_moveToRecent(e,t){this.oldCache.delete(e),this._set(e,t)}*_entriesAscending(){for(const e of this.oldCache){const[t,i]=e;this.cache.has(t)||this._deleteIfExpired(t,i)===!1&&(yield e)}for(const e of this.cache){const[t,i]=e;this._deleteIfExpired(t,i)===!1&&(yield e)}}get(e){if(this.cache.has(e)){const t=this.cache.get(e);return this._getItemValue(e,t)}if(this.oldCache.has(e)){const t=this.oldCache.get(e);if(this._deleteIfExpired(e,t)===!1)return this._moveToRecent(e,t),t.value}}set(e,t,{maxAge:i=this.maxAge}={}){const s=typeof i=="number"&&i!==Number.POSITIVE_INFINITY?Date.now()+i:void 0;return this.cache.has(e)?this.cache.set(e,{value:t,expiry:s}):this._set(e,{value:t,expiry:s}),this}has(e){return this.cache.has(e)?!this._deleteIfExpired(e,this.cache.get(e)):this.oldCache.has(e)?!this._deleteIfExpired(e,this.oldCache.get(e)):!1}peek(e){if(this.cache.has(e))return this._peek(e,this.cache);if(this.oldCache.has(e))return this._peek(e,this.oldCache)}delete(e){const t=this.cache.delete(e);return t&&this._size--,this.oldCache.delete(e)||t}clear(){this.cache.clear(),this.oldCache.clear(),this._size=0}resize(e){if(!(e&&e>0))throw new TypeError("`maxSize` must be a number greater than 0");const t=[...this._entriesAscending()],i=t.length-e;i<0?(this.cache=new Map(t),this.oldCache=new Map,this._size=t.length):(i>0&&this._emitEvictions(t.slice(0,i)),this.oldCache=new Map(t.slice(i)),this.cache=new Map,this._size=0),this.maxSize=e}*keys(){for(const[e]of this)yield e}*values(){for(const[,e]of this)yield e}*[Symbol.iterator](){for(const e of this.cache){const[t,i]=e;this._deleteIfExpired(t,i)===!1&&(yield[t,i.value])}for(const e of this.oldCache){const[t,i]=e;this.cache.has(t)||this._deleteIfExpired(t,i)===!1&&(yield[t,i.value])}}*entriesDescending(){let e=[...this.cache];for(let t=e.length-1;t>=0;--t){const i=e[t],[s,r]=i;this._deleteIfExpired(s,r)===!1&&(yield[s,r.value])}e=[...this.oldCache];for(let t=e.length-1;t>=0;--t){const i=e[t],[s,r]=i;this.cache.has(s)||this._deleteIfExpired(s,r)===!1&&(yield[s,r.value])}}*entriesAscending(){for(const[e,t]of this._entriesAscending())yield[e,t.value]}get size(){if(!this._size)return this.oldCache.size;let e=0;for(const t of this.oldCache.keys())this.cache.has(t)||e++;return Math.min(this._size+e,this.maxSize)}entries(){return this.entriesAscending()}forEach(e,t=this){for(const[i,s]of this.entriesAscending())e.call(t,s,i,this)}get[Symbol.toStringTag](){return JSON.stringify([...this.entriesAscending()])}}const DI=(n,e)=>n.some(t=>typeof t=="string"?t===e:(t.lastIndex=0,t.test(e))),$o=new LI({maxSize:1e5}),pu=n=>typeof n=="object"&&n!==null&&!(n instanceof RegExp)&&!(n instanceof Error)&&!(n instanceof Date),gu=(n,e={})=>{if(!pu(n))return n;const{exclude:t,pascalCase:i=!1,stopPaths:s,deep:r=!1,preserveConsecutiveUppercase:o=!1}=e,a=new Set(s),l=c=>(u,d)=>{if(r&&pu(d)){const h=c===void 0?u:`${c}.${u}`;a.has(h)||(d=uu(d,l(h)))}if(!(t&&DI(t,u))){const h=i?`${u}_`:u;if($o.has(h))u=$o.get(h);else{const f=OI(u,{pascalCase:i,locale:!1,preserveConsecutiveUppercase:o});u.length<100&&$o.set(h,f),u=f}}return[u,d]};return uu(n,l(void 0))};function MI(n,e){return Array.isArray(n)?Object.keys(n).map(t=>gu(n[t],e)):gu(n,e)}const UI="modulepreload",FI=function(n){return"/"+n},mu={},_u=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=FI(l),l in mu)return;mu[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":UI,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((h,f)=>{d.addEventListener("load",h),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};function kl(n){let e=5381;for(let t=0;t<n.length;t++)e=e*33^n.charCodeAt(t);return e>>>0}function VI(n){const e=n.split(" ");if(e.length===1){const t=e[0];return t.length>=2?t.slice(0,2).toUpperCase():t.toUpperCase()}if(e.length>=2){const t=e[0].charAt(0).toUpperCase(),i=e[1].charAt(0).toUpperCase();return t+i}return""}function xl(n,e=!1){const t=e?["TokyoNight1","TokyoNight11","TokyoNight3","TokyoNight4","TokyoNight5","TokyoNight7","TokyoNight8","TokyoNight2"]:["TokyoNight1","TokyoNight2","TokyoNight3","TokyoNight4","TokyoNight5","TokyoNight6","TokyoNight7","TokyoNight8","TokyoNight9","TokyoNight10","TokyoNight11"],i=n%t.length;return t[i]}function ji(n){return n.type==="Vote"?"$$sys$$Voted":n.type==="Comment"?"$$sys$$Commented":n.type==="Annotation"?"$$sys$$Draw":n.type==="Tag"?n.name:""}function WI(n){return n.startsWith("$$sys$$")?n.slice(7):n}function Af(n){return`iconTagMenu_${n.startsWith("$$sys$$")?n.slice(7):"Saved"}`}function $f(n){return n.startsWith("$$sys$$")}function Pf(n){if(!n)return"";const e=n,t=new Date(e);if(isNaN(t.getTime()))return console.warn(`Cannot recognize the time in ${n}`),"";const s=Math.floor((new Date().getTime()-t.getTime())/(1e3*60));if(s<60)return`${s} min ago`;const r=Math.floor(s/60);if(r<24)return`${r}h ago`;const o=Math.floor(r/24);if(o<7)return`${o}d ago`;const a=Math.floor(o/7);if(a<4)return`${a}wk ago`;const l=Math.floor(o/30);return l<12?`${l}mo ago`:`${Math.floor(o/365)}y ago`}function HI(n){return n+(jI(n)?". ":" ")}function jI(n){if(n.length===0)return!1;const e=n.charAt(n.length-1);return/[a-zA-Z0-9]/.test(e)}function vu(n){return Pf(n)}function Rf(n){let e=n;return e=e.replace(/<b>/g,""),e=e.replace(/<\/b>/g,""),e}String.prototype.hashCode=function(){var n=0,e,t;if(this.length===0)return n;for(e=0;e<this.length;e++)t=this.charCodeAt(e),n=(n<<5)-n+t,n|=0;return n};function BI(n){return new Promise(e=>setTimeout(e,n))}function zI(n){const e=/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;return n.replace(e,"")}function GI(n){const e=/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,t=[];let i;for(;(i=e.exec(n))!==null;){const s=i[2];t.push(s)}return t}function qI(n,e){if(n.length!==e.length)return!1;const t=[...n].sort(),i=[...e].sort();return t.every((s,r)=>s===i[r])}const Nf=()=>({name:"wawa",id:"",interests:["AI"],searchHistory:[],bio:"",photo:""}),KI={paperId:"1234",tag:{name:"dummy",type:"Tag"},createdAt:"2000-08-12T11:29:08.357992Z"},Of=()=>({id:"",arxivId:"",title:"",authorNames:[],abstract:null,updated:"",categories:[],pdfLink:"",citationCount:0,keywords:[],payload:null,firstIndexedTime:null,audio:null,institutes:null,tweetFresh:null,tweetHeadline:null,imagePath:null});function Al(n){var e,t;return!((t=(e=n.payload)==null?void 0:e.publicationVenue)!=null&&t.name)||n.payload.publicationVenue.name==="arXiv.org"?null:n.payload.publicationVenue.name}function Lf(n){return n.audio?"https://d2irtorupa9e8g.cloudfront.net/paper_tweet_audios/"+n.audio.name:""}function Df(n){return{title:n.title,audioUrl:Lf(n),paper:n}}function YI(n,e,t){return{id:crypto.randomUUID(),paperId:e,userId:Q.user.id,content:n,createdAt:new Date().toISOString(),parentId:t,userName:Q.user.name,userPhoto:Q.user.photo,voteCount:0}}function QI(n){return n.replace(/\.\d+Z$/,"Z")}function JI(n,e,t=!1,i=!1){const s=e.split(".")[0];if(!s||s.length!==4)return console.warn(`Fails to get date for the paper: time: ${n??""}, arxiv id: ${e}`),null;if(n){const l=QI(n),c=new Date(l);if(!isNaN(c.getTime())&&(!i||s>="2406")){if(t)return c.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});const d=Math.abs(new Date().getTime()-c.getTime()),h=Math.floor(d/(1e3*60*60*24));return h>=30?c.toLocaleDateString("en-US",{year:"numeric",month:"short"}):h>=21?"3wk":h>=14?"2wk":h>=7?"1wk":h===0?"Today":`${h}d`}}const r=(parseInt(s,10)>=50?"19":"20")+s.slice(0,2),o=s.slice(2,4),a=new Date(`${r}-${o}-01`).toLocaleString("en-US",{month:"short"});return a?`${a} ${r}`:(console.warn(`Fails to get date for the paper: time: ${n??""}, arxiv id: ${e}`),null)}const ba=Symbol("store-raw"),hi=Symbol("store-node"),Lt=Symbol("store-has"),Mf=Symbol("store-self");function Uf(n){let e=n[Pt];if(!e&&(Object.defineProperty(n,Pt,{value:e=new Proxy(n,eC)}),!Array.isArray(n))){const t=Object.keys(n),i=Object.getOwnPropertyDescriptors(n);for(let s=0,r=t.length;s<r;s++){const o=t[s];i[o].get&&Object.defineProperty(n,o,{enumerable:i[o].enumerable,get:i[o].get.bind(e)})}}return e}function Pr(n){let e;return n!=null&&typeof n=="object"&&(n[Pt]||!(e=Object.getPrototypeOf(n))||e===Object.prototype||Array.isArray(n))}function gs(n,e=new Set){let t,i,s,r;if(t=n!=null&&n[ba])return t;if(!Pr(n)||e.has(n))return n;if(Array.isArray(n)){Object.isFrozen(n)?n=n.slice(0):e.add(n);for(let o=0,a=n.length;o<a;o++)s=n[o],(i=gs(s,e))!==s&&(n[o]=i)}else{Object.isFrozen(n)?n=Object.assign({},n):e.add(n);const o=Object.keys(n),a=Object.getOwnPropertyDescriptors(n);for(let l=0,c=o.length;l<c;l++)r=o[l],!a[r].get&&(s=n[r],(i=gs(s,e))!==s&&(n[r]=i))}return n}function Rr(n,e){let t=n[e];return t||Object.defineProperty(n,e,{value:t=Object.create(null)}),t}function ms(n,e,t){if(n[e])return n[e];const[i,s]=T(t,{equals:!1,internal:!0});return i.$=s,n[e]=i}function XI(n,e){const t=Reflect.getOwnPropertyDescriptor(n,e);return!t||t.get||!t.configurable||e===Pt||e===hi||(delete t.value,delete t.writable,t.get=()=>n[Pt][e]),t}function Ff(n){Bo()&&ms(Rr(n,hi),Mf)()}function ZI(n){return Ff(n),Reflect.ownKeys(n)}const eC={get(n,e,t){if(e===ba)return n;if(e===Pt)return t;if(e===jo)return Ff(n),t;const i=Rr(n,hi),s=i[e];let r=s?s():n[e];if(e===hi||e===Lt||e==="__proto__")return r;if(!s){const o=Object.getOwnPropertyDescriptor(n,e);Bo()&&(typeof r!="function"||n.hasOwnProperty(e))&&!(o&&o.get)&&(r=ms(i,e,r)())}return Pr(r)?Uf(r):r},has(n,e){return e===ba||e===Pt||e===jo||e===hi||e===Lt||e==="__proto__"?!0:(Bo()&&ms(Rr(n,Lt),e)(),e in n)},set(){return!0},deleteProperty(){return!0},ownKeys:ZI,getOwnPropertyDescriptor:XI};function Nr(n,e,t,i=!1){if(!i&&n[e]===t)return;const s=n[e],r=n.length;t===void 0?(delete n[e],n[Lt]&&n[Lt][e]&&s!==void 0&&n[Lt][e].$()):(n[e]=t,n[Lt]&&n[Lt][e]&&s===void 0&&n[Lt][e].$());let o=Rr(n,hi),a;if((a=ms(o,e,s))&&a.$(()=>t),Array.isArray(n)&&n.length!==r){for(let l=n.length;l<r;l++)(a=o[l])&&a.$();(a=ms(o,"length",r))&&a.$(n.length)}(a=o[Mf])&&a.$()}function Vf(n,e){const t=Object.keys(e);for(let i=0;i<t.length;i+=1){const s=t[i];Nr(n,s,e[s])}}function tC(n,e){if(typeof e=="function"&&(e=e(n)),e=gs(e),Array.isArray(e)){if(n===e)return;let t=0,i=e.length;for(;t<i;t++){const s=e[t];n[t]!==s&&Nr(n,t,s)}Nr(n,"length",i)}else Vf(n,e)}function Bi(n,e,t=[]){let i,s=n;if(e.length>1){i=e.shift();const o=typeof i,a=Array.isArray(n);if(Array.isArray(i)){for(let l=0;l<i.length;l++)Bi(n,[i[l]].concat(e),t);return}else if(a&&o==="function"){for(let l=0;l<n.length;l++)i(n[l],l)&&Bi(n,[l].concat(e),t);return}else if(a&&o==="object"){const{from:l=0,to:c=n.length-1,by:u=1}=i;for(let d=l;d<=c;d+=u)Bi(n,[d].concat(e),t);return}else if(e.length>1){Bi(n[i],e,[i].concat(t));return}s=n[i],t=[i].concat(t)}let r=e[0];typeof r=="function"&&(r=r(s,t),r===s)||i===void 0&&r==null||(r=gs(r),i===void 0||Pr(s)&&Pr(r)&&!Array.isArray(r)?Vf(s,r):Nr(n,i,r))}function _s(...[n,e]){const t=gs(n||{}),i=Array.isArray(t),s=Uf(t);function r(...o){Mp(()=>{i&&o.length===1?tC(t,o[0]):Bi(t,o)})}return[s,r]}var nC=b('<img src=frog.gif alt="Draggable GIF"class="w-14 h-14 frog-init-position z-30 cursor-pointer touch-none p-2">');const iC=()=>{const[n,e]=T({x:0,y:0}),[t,i]=T({x:0,y:0}),[s,r]=T(!1),[o,a]=T({x:0,y:0}),l=10;Tn(()=>{e({x:window.innerWidth-72,y:window.innerHeight-144})});const c=h=>{h.preventDefault();let f,g;h instanceof MouseEvent?(f=h.clientX,g=h.clientY):(f=h.touches[0].clientX,g=h.touches[0].clientY),a({x:f-n().x,y:g-n().y}),i({x:f-o().x,y:g-o().y}),window.addEventListener("mousemove",u,{passive:!1}),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("mouseup",d,{passive:!1}),window.addEventListener("touchend",d,{passive:!1}),r(!0)},u=h=>{if(!s())return;h.preventDefault();let f,g;h instanceof MouseEvent?(f=h.clientX,g=h.clientY):(f=h.touches[0].clientX,g=h.touches[0].clientY),e({x:f-o().x,y:g-o().y})},d=h=>{if(!s())return;r(!1),h.preventDefault();const{x:f,y:g}=n(),{x:v,y}=t();Math.pow(f-v,2)+Math.pow(g-y,2)<100&&Pe("showIcon",!1),e(w=>({x:Math.max(l,Math.min(w.x,window.innerWidth-l-56)),y:Math.max(l,Math.min(w.y,window.innerHeight-l-56))})),window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",d),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)};return Ze(()=>{window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",d),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)}),(()=>{var h=nC();return h.$$touchstart=c,h.$$mousedown=c,j(h,"draggable",!1),h.style.setProperty("position","absolute"),R(f=>{var g=`${n().y}px`,v=`${n().x}px`;return g!==f.e&&((f.e=g)!=null?h.style.setProperty("top",g):h.style.removeProperty("top")),v!==f.t&&((f.t=v)!=null?h.style.setProperty("left",v):h.style.removeProperty("left")),f},{e:void 0,t:void 0}),h})()};le(["mousedown","touchstart"]);var sC=b("<audio>"),rC=b("<audio controls>"),oC=b('<div><div class="w-fit flex leading-none items-center justify-start py-0.5 px-1.5 mb-0.5 rounded-full text-white text-custom-13 bg-black bg-opacity-30 "><img src=/buttonListWhite.svg class="w-2.5 mr-1"><div class=line-clamp-1></div></div><div class="line-clamp-2 leading-none">'),aC=b('<div class="controller-bottom-space z-30 flex justify-between bg-frogGreenColor bg-opacity-95 h-16 w-screen font-sf-rounded font-regular text-custom-13 px-1.5 py-2"><div></div><div class="flex space-x-1 ml-1"><button><div><img src=/buttonPrevious.svg class=w-2.3></div></button><button><div><img src=/buttonNext.svg class=w-2.3></div></button><button><div><img class=w-2.5></div></button><button><div class=controller-button><img src=/frog_static.png class=w-3>'),lC=b('<div class="font-medium select-none">Tap an audio to learn on the go!');function cC(){return{title:"",audioUrl:"",paper:Of()}}function Or(n,e,t=!1){var i,s,r;if(Pe("queuePos",V.queue.findIndex(o=>o.audioUrl===n.audioUrl)),Pe("currentAudio",n),t&&V.audioRef){V.audioRef.currentTime=0,(i=V.audioRef)==null||i.play(),Pe("isPlaying",!0);return}e?((s=V.audioRef)==null||s.play(),Pe("isPlaying",!0)):((r=V.audioRef)==null||r.pause(),Pe("isPlaying",!1))}function uC(){const[n,e]=T(!1),[t,i]=T(!1),[s,r]=T(!1),[o,a]=T(!1),[l,c]=T(!1);It(()=>{const g=V.audioRef;g&&g.addEventListener("ended",u)});const u=async()=>{var g,v;if(V.transitAudioRef&&(V.transitAudioRef.currentTime=0,V.transitAudioRef.play()),await BI(1300),V.queuePos<V.queue.length-1){const y=V.queue[V.queuePos+1];Pe("currentAudio",y),Pe("isPlaying",!0),(g=V.audioRef)==null||g.play(),Pe("queuePos",V.queuePos+1)}else Pe("isPlaying",!1),(v=V.audioRef)==null||v.pause()},d=()=>V.queuePos+1>=V.queue.length,h=()=>V.queuePos<1,f=()=>!V.currentAudio.audioUrl;return Ze(()=>{const g=V.audioRef;g&&g&&g.removeEventListener("ended",u)}),m(Wn,{get children(){return[(()=>{var g=sC();return Qe(v=>Pe("audioRef",v),g),R(()=>j(g,"src",V.currentAudio.audioUrl)),g})(),(()=>{var g=rC();return Qe(v=>Pe("transitAudioRef",v),g),j(g,"src",`${Rs}/transition_xylophone.mp3`),g})(),m(O,{get when(){return!V.showIcon},get fallback(){return m(iC,{})},get children(){var g=aC(),v=g.firstChild,y=v.nextSibling,w=y.firstChild,I=w.firstChild,S=w.nextSibling,C=S.firstChild,$=S.nextSibling,k=$.firstChild,M=k.firstChild,U=$.nextSibling;return v.$$touchend=()=>e(!1),v.$$touchstart=()=>e(!0),_(v,m(O,{get when(){return V.currentAudio.audioUrl},get fallback(){return lC()},get children(){var E=oC(),P=E.firstChild,D=P.firstChild,F=D.nextSibling,L=P.nextSibling;return E.$$click=()=>{V.currentAudio.paper.id!==""&&(se("detailPaper",null),se("detailPaper",V.currentAudio.paper))},_(F,()=>V.playlistTitle),_(L,()=>Rf(V.currentAudio.title)),R(()=>W(E,`flex-col justify-start font-medium space-y-1 select-none ${V.currentAudio.paper.id===""?"":"cursor-pointer"}`)),E}})),w.$$touchend=()=>i(!1),w.$$touchstart=()=>i(!0),w.$$click=()=>{if(V.queuePos-1<0)return;const E=V.queue[V.queuePos-1];E&&Or(E,!0)},S.$$touchend=()=>r(!1),S.$$touchstart=()=>r(!0),S.$$click=()=>{if(V.queuePos+1>=V.queue.length)return;const E=V.queue[V.queuePos+1];E&&Or(E,!0)},$.$$touchend=()=>a(!1),$.$$touchstart=()=>a(!0),$.$$click=()=>{var E,P;V.isPlaying?(E=V.audioRef)==null||E.pause():(P=V.audioRef)==null||P.play(),Pe("isPlaying",!V.isPlaying)},U.$$touchend=()=>c(!1),U.$$touchstart=()=>c(!0),U.$$click=()=>{Pe("showIcon",!0)},R(E=>{var P=`${V.currentAudio.paper.id!==""&&n()?"opacity-40":""}`,D=`${t()?"opacity-40":""}`,F=h(),L=`controller-button ${h()?"opacity-40":""}`,J=`${s()?"opacity-40":""}`,H=d(),X=`controller-button ${d()?"opacity-40":""}`,Ge=`${o()?"opacity-40":""}`,de=f(),Fe=`controller-button ${f()?"opacity-40":""}`,Ot=V.isPlaying?"/buttonPause.svg":"/buttonPlay.svg",Ae=`${l()?"opacity-40":""}`;return P!==E.e&&W(v,E.e=P),D!==E.t&&W(w,E.t=D),F!==E.a&&(w.disabled=E.a=F),L!==E.o&&W(I,E.o=L),J!==E.i&&W(S,E.i=J),H!==E.n&&(S.disabled=E.n=H),X!==E.s&&W(C,E.s=X),Ge!==E.h&&W($,E.h=Ge),de!==E.r&&($.disabled=E.r=de),Fe!==E.d&&W(k,E.d=Fe),Ot!==E.l&&j(M,"src",E.l=Ot),Ae!==E.u&&W(U,E.u=Ae),E},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),g}})]}})}le(["touchstart","touchend","click"]);function rn(n,e,t,i){if(t==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)}function Po(n,e,t,i,s){if(typeof e=="function"?n!==e||!s:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(n,t),t}var ei,zi,ti;function dC(n,e=!1){return window.__TAURI_INTERNALS__.transformCallback(n,e)}class Wf{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,ei.set(this,()=>{}),zi.set(this,0),ti.set(this,{}),this.id=dC(({message:e,id:t})=>{if(t===rn(this,zi,"f")){Po(this,zi,t+1),rn(this,ei,"f").call(this,e);const i=Object.keys(rn(this,ti,"f"));if(i.length>0){let s=t+1;for(const r of i.sort())if(parseInt(r)===s){const o=rn(this,ti,"f")[r];delete rn(this,ti,"f")[r],rn(this,ei,"f").call(this,o),s+=1}else break;Po(this,zi,s)}}else rn(this,ti,"f")[t.toString()]=e})}set onmessage(e){Po(this,ei,e)}get onmessage(){return rn(this,ei,"f")}toJSON(){return`__CHANNEL__:${this.id}`}}ei=new WeakMap,zi=new WeakMap,ti=new WeakMap;class hC{constructor(e,t,i){this.plugin=e,this.event=t,this.channelId=i}async unregister(){return Yt(`plugin:${this.plugin}|remove_listener`,{event:this.event,channelId:this.channelId})}}async function fC(n,e,t){const i=new Wf;return i.onmessage=t,Yt(`plugin:${n}|registerListener`,{event:e,handler:i}).then(()=>new hC(n,e,i.id))}async function Yt(n,e={},t){return window.__TAURI_INTERNALS__.invoke(n,e,t)}function pC(){return window.__TAURI_OS_PLUGIN_INTERNALS__.platform}const gC="v2.1_a";let Ia;try{Ia=pC()}catch{Ia="web"}let Hf=fetch,oo=window.open;Ia!=="web"&&(_u(()=>import("./index-CYWMbU9s.js"),[]).then(n=>{Hf=n.fetch}),_u(()=>Promise.resolve().then(()=>KT),void 0).then(n=>{oo=n.open}));const yu=n=>{n?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},mC=()=>{const n=window.matchMedia("(prefers-color-scheme: dark)").matches;yu(n),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{yu(e.matches)})};mC();const[ie,_C]=T(window.matchMedia("(prefers-color-scheme: dark)").matches),wu=["Home","Search","Collection","User"],Rs="https://d2irtorupa9e8g.cloudfront.net",jf="6677-8899",[vC,yC]=T(!1),[Q,ke]=_s({user:Nf(),tags:[],sessionTags:[]}),[ge,se]=_s({popupMessage:"",showUserLogin:!1,showInterestSelection:!1,detailPaper:null,activeTab:"Home"}),[wC,Bf]=T(""),[Dt,$l]=T("Home");window.androidBackCallback=function(){return ge.detailPaper!=null?(se("detailPaper",null),!1):ge.showInterestSelection?(se("showInterestSelection",!1),!1):ge.showUserLogin?(se("showUserLogin",!1),!1):(Dt()!=="Home"&&$l("Home"),!1)};let zf=null;function Pl(n){zf=n}function Cn(){return Q.user.id!=""}function Gf(n){const e=Q.tags;return e?e.some(t=>t.paperId===n&&t.tag.type==="Vote"):!1}function bC(n){const e=Q.tags;return e?e.some(t=>t.paperId===n&&t.tag.type==="Tag"):!1}function bu(n,e){return Q.tags.some(t=>t.paperId===n&&t.tag.type==="Tag"&&t.tag.name===e)}function Ro(){const n=new Set(Q.tags.filter(e=>e.tag.type==="Tag").map(e=>e.tag.name));return Array.from(n)}function qf(n){ke("tags",Q.tags.length,{paperId:n,tag:{name:"vote",type:"Vote"},createdAt:new Date().toISOString()}),ke("sessionTags",Q.sessionTags.length,{paperId:n,sessionTag:{name:"vote",type:"Vote"},createdAt:new Date().toISOString()}),VC(n)}function Kf(n){ke("tags",e=>e.paperId===n&&e.tag.type==="Vote","tag","type",void 0),ke("sessionTags",Q.sessionTags.length,{paperId:n,sessionTag:{name:"unvote",type:"Unvote"},createdAt:new Date().toISOString()}),FC(n)}function IC(n,e){const t={name:e,type:"Tag"};ke("tags",Q.tags.length,{paperId:n,tag:t,createdAt:new Date().toISOString()}),ke("sessionTags",Q.sessionTags.length,{paperId:n,sessionTag:t,createdAt:new Date().toISOString()}),HC(n,t)}function CC(n,e){ke("tags",t=>t.paperId===n&&t.tag.name===e&&t.tag.type==="Tag","tag","type",void 0),ke("sessionTags",Q.sessionTags.length,{paperId:n,sessionTag:{name:e,type:"Untag"},createdAt:new Date().toISOString()}),jC(n,e)}function TC(n){const e={name:"comment",type:"Comment"};ke("tags",Q.tags.length,{paperId:n.paperId,tag:e,createdAt:n.createdAt}),ke("sessionTags",Q.sessionTags.length,{paperId:n.paperId,sessionTag:e,createdAt:n.createdAt}),UC(n.id,n.paperId,n.parentId,n.content)}function EC(){Pl(jf),ke("user",Nf()),ke("tags",[]),ke("sessionTags",[])}function SC(){return{isPlaying:!1,currentAudio:cC(),queue:[],queuePos:0,playlistTitle:"",showIcon:!0,iconInitX:window.innerWidth-48,iconInitY:window.innerHeight-105}}const[V,Pe]=_s(SC()),Iu="https://d2irtorupa9e8g.cloudfront.net/app_launch_audios/today.mp3";let Ns;Ns=console.log.bind(window.console);function Yf(){V.showIcon&&Pe("showIcon",!1)}function Ti(){V.showIcon||Pe("showIcon",!0)}function No(n){let e=0,t;for(t of Q.sessionTags)t.paperId===n&&t.sessionTag.type==="Vote"&&e++,t.paperId===n&&t.sessionTag.type==="Unvote"&&e--;return e}function Hs(n){let e=0,t;for(t of Q.sessionTags)t.paperId===n&&t.sessionTag.type==="Comment"&&e++;return e}function Cu(n,e){Pe("queue",[]),se("popupMessage",n),setTimeout(()=>{se("popupMessage","")},e)}const Yn=typeof performance=="object"&&performance&&typeof performance.now=="function"?performance:Date,Qf=new Set,Ca=typeof process=="object"&&process?process:{},Jf=(n,e,t,i)=>{typeof Ca.emitWarning=="function"?Ca.emitWarning(n,e,t,i):console.error(`[${t}] ${e}: ${n}`)};let Lr=globalThis.AbortController,Tu=globalThis.AbortSignal;var Ju;if(typeof Lr>"u"){Tu=class{constructor(){Ie(this,"onabort");Ie(this,"_onabort",[]);Ie(this,"reason");Ie(this,"aborted",!1)}addEventListener(i,s){this._onabort.push(s)}},Lr=class{constructor(){Ie(this,"signal",new Tu);e()}abort(i){var s,r;if(!this.signal.aborted){this.signal.reason=i,this.signal.aborted=!0;for(const o of this.signal._onabort)o(i);(r=(s=this.signal).onabort)==null||r.call(s,i)}}};let n=((Ju=Ca.env)==null?void 0:Ju.LRU_CACHE_IGNORE_AC_WARNING)!=="1";const e=()=>{n&&(n=!1,Jf("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.","NO_ABORT_CONTROLLER","ENOTSUP",e))}}const kC=n=>!Qf.has(n),an=n=>n&&n===Math.floor(n)&&n>0&&isFinite(n),Xf=n=>an(n)?n<=Math.pow(2,8)?Uint8Array:n<=Math.pow(2,16)?Uint16Array:n<=Math.pow(2,32)?Uint32Array:n<=Number.MAX_SAFE_INTEGER?Qs:null:null;class Qs extends Array{constructor(e){super(e),this.fill(0)}}var gi;const Pn=class Pn{constructor(e,t){Ie(this,"heap");Ie(this,"length");if(!p(Pn,gi))throw new TypeError("instantiate Stack using Stack.create(n)");this.heap=new t(e),this.length=0}static create(e){const t=Xf(e);if(!t)return[];B(Pn,gi,!0);const i=new Pn(e,t);return B(Pn,gi,!1),i}push(e){this.heap[this.length++]=e}pop(){return this.heap[--this.length]}};gi=new WeakMap,re(Pn,gi,!1);let Ta=Pn;var Xu,Zu,ut,tt,dt,ht,mi,_i,$e,ft,Se,we,q,qe,nt,He,Ne,pt,Oe,gt,mt,it,_t,gn,Ke,A,Sa,On,Mt,vs,st,Zf,Ln,vi,ys,ln,cn,ka,Js,Xs,ye,xa,Gi,un,Aa;const Ml=class Ml{constructor(e){re(this,A);re(this,ut);re(this,tt);re(this,dt);re(this,ht);re(this,mi);re(this,_i);Ie(this,"ttl");Ie(this,"ttlResolution");Ie(this,"ttlAutopurge");Ie(this,"updateAgeOnGet");Ie(this,"updateAgeOnHas");Ie(this,"allowStale");Ie(this,"noDisposeOnSet");Ie(this,"noUpdateTTL");Ie(this,"maxEntrySize");Ie(this,"sizeCalculation");Ie(this,"noDeleteOnFetchRejection");Ie(this,"noDeleteOnStaleGet");Ie(this,"allowStaleOnFetchAbort");Ie(this,"allowStaleOnFetchRejection");Ie(this,"ignoreFetchAbort");re(this,$e);re(this,ft);re(this,Se);re(this,we);re(this,q);re(this,qe);re(this,nt);re(this,He);re(this,Ne);re(this,pt);re(this,Oe);re(this,gt);re(this,mt);re(this,it);re(this,_t);re(this,gn);re(this,Ke);re(this,On,()=>{});re(this,Mt,()=>{});re(this,vs,()=>{});re(this,st,()=>!1);re(this,Ln,e=>{});re(this,vi,(e,t,i)=>{});re(this,ys,(e,t,i,s)=>{if(i||s)throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");return 0});Ie(this,Xu,"LRUCache");const{max:t=0,ttl:i,ttlResolution:s=1,ttlAutopurge:r,updateAgeOnGet:o,updateAgeOnHas:a,allowStale:l,dispose:c,disposeAfter:u,noDisposeOnSet:d,noUpdateTTL:h,maxSize:f=0,maxEntrySize:g=0,sizeCalculation:v,fetchMethod:y,memoMethod:w,noDeleteOnFetchRejection:I,noDeleteOnStaleGet:S,allowStaleOnFetchRejection:C,allowStaleOnFetchAbort:$,ignoreFetchAbort:k}=e;if(t!==0&&!an(t))throw new TypeError("max option must be a nonnegative integer");const M=t?Xf(t):Array;if(!M)throw new Error("invalid max value: "+t);if(B(this,ut,t),B(this,tt,f),this.maxEntrySize=g||p(this,tt),this.sizeCalculation=v,this.sizeCalculation){if(!p(this,tt)&&!this.maxEntrySize)throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");if(typeof this.sizeCalculation!="function")throw new TypeError("sizeCalculation set to non-function")}if(w!==void 0&&typeof w!="function")throw new TypeError("memoMethod must be a function if defined");if(B(this,_i,w),y!==void 0&&typeof y!="function")throw new TypeError("fetchMethod must be a function if specified");if(B(this,mi,y),B(this,gn,!!y),B(this,Se,new Map),B(this,we,new Array(t).fill(void 0)),B(this,q,new Array(t).fill(void 0)),B(this,qe,new M(t)),B(this,nt,new M(t)),B(this,He,0),B(this,Ne,0),B(this,pt,Ta.create(t)),B(this,$e,0),B(this,ft,0),typeof c=="function"&&B(this,dt,c),typeof u=="function"?(B(this,ht,u),B(this,Oe,[])):(B(this,ht,void 0),B(this,Oe,void 0)),B(this,_t,!!p(this,dt)),B(this,Ke,!!p(this,ht)),this.noDisposeOnSet=!!d,this.noUpdateTTL=!!h,this.noDeleteOnFetchRejection=!!I,this.allowStaleOnFetchRejection=!!C,this.allowStaleOnFetchAbort=!!$,this.ignoreFetchAbort=!!k,this.maxEntrySize!==0){if(p(this,tt)!==0&&!an(p(this,tt)))throw new TypeError("maxSize must be a positive integer if specified");if(!an(this.maxEntrySize))throw new TypeError("maxEntrySize must be a positive integer if specified");N(this,A,Zf).call(this)}if(this.allowStale=!!l,this.noDeleteOnStaleGet=!!S,this.updateAgeOnGet=!!o,this.updateAgeOnHas=!!a,this.ttlResolution=an(s)||s===0?s:1,this.ttlAutopurge=!!r,this.ttl=i||0,this.ttl){if(!an(this.ttl))throw new TypeError("ttl must be a positive integer if specified");N(this,A,Sa).call(this)}if(p(this,ut)===0&&this.ttl===0&&p(this,tt)===0)throw new TypeError("At least one of max, maxSize, or ttl is required");if(!this.ttlAutopurge&&!p(this,ut)&&!p(this,tt)){const U="LRU_CACHE_UNBOUNDED";kC(U)&&(Qf.add(U),Jf("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.","UnboundedCacheWarning",U,Ml))}}static unsafeExposeInternals(e){return{starts:p(e,mt),ttls:p(e,it),sizes:p(e,gt),keyMap:p(e,Se),keyList:p(e,we),valList:p(e,q),next:p(e,qe),prev:p(e,nt),get head(){return p(e,He)},get tail(){return p(e,Ne)},free:p(e,pt),isBackgroundFetch:t=>{var i;return N(i=e,A,ye).call(i,t)},backgroundFetch:(t,i,s,r)=>{var o;return N(o=e,A,Xs).call(o,t,i,s,r)},moveToTail:t=>{var i;return N(i=e,A,Gi).call(i,t)},indexes:t=>{var i;return N(i=e,A,ln).call(i,t)},rindexes:t=>{var i;return N(i=e,A,cn).call(i,t)},isStale:t=>{var i;return p(i=e,st).call(i,t)}}}get max(){return p(this,ut)}get maxSize(){return p(this,tt)}get calculatedSize(){return p(this,ft)}get size(){return p(this,$e)}get fetchMethod(){return p(this,mi)}get memoMethod(){return p(this,_i)}get dispose(){return p(this,dt)}get disposeAfter(){return p(this,ht)}getRemainingTTL(e){return p(this,Se).has(e)?1/0:0}*entries(){for(const e of N(this,A,ln).call(this))p(this,q)[e]!==void 0&&p(this,we)[e]!==void 0&&!N(this,A,ye).call(this,p(this,q)[e])&&(yield[p(this,we)[e],p(this,q)[e]])}*rentries(){for(const e of N(this,A,cn).call(this))p(this,q)[e]!==void 0&&p(this,we)[e]!==void 0&&!N(this,A,ye).call(this,p(this,q)[e])&&(yield[p(this,we)[e],p(this,q)[e]])}*keys(){for(const e of N(this,A,ln).call(this)){const t=p(this,we)[e];t!==void 0&&!N(this,A,ye).call(this,p(this,q)[e])&&(yield t)}}*rkeys(){for(const e of N(this,A,cn).call(this)){const t=p(this,we)[e];t!==void 0&&!N(this,A,ye).call(this,p(this,q)[e])&&(yield t)}}*values(){for(const e of N(this,A,ln).call(this))p(this,q)[e]!==void 0&&!N(this,A,ye).call(this,p(this,q)[e])&&(yield p(this,q)[e])}*rvalues(){for(const e of N(this,A,cn).call(this))p(this,q)[e]!==void 0&&!N(this,A,ye).call(this,p(this,q)[e])&&(yield p(this,q)[e])}[(Zu=Symbol.iterator,Xu=Symbol.toStringTag,Zu)](){return this.entries()}find(e,t={}){for(const i of N(this,A,ln).call(this)){const s=p(this,q)[i],r=N(this,A,ye).call(this,s)?s.__staleWhileFetching:s;if(r!==void 0&&e(r,p(this,we)[i],this))return this.get(p(this,we)[i],t)}}forEach(e,t=this){for(const i of N(this,A,ln).call(this)){const s=p(this,q)[i],r=N(this,A,ye).call(this,s)?s.__staleWhileFetching:s;r!==void 0&&e.call(t,r,p(this,we)[i],this)}}rforEach(e,t=this){for(const i of N(this,A,cn).call(this)){const s=p(this,q)[i],r=N(this,A,ye).call(this,s)?s.__staleWhileFetching:s;r!==void 0&&e.call(t,r,p(this,we)[i],this)}}purgeStale(){let e=!1;for(const t of N(this,A,cn).call(this,{allowStale:!0}))p(this,st).call(this,t)&&(N(this,A,un).call(this,p(this,we)[t],"expire"),e=!0);return e}info(e){const t=p(this,Se).get(e);if(t===void 0)return;const i=p(this,q)[t],s=N(this,A,ye).call(this,i)?i.__staleWhileFetching:i;if(s===void 0)return;const r={value:s};if(p(this,it)&&p(this,mt)){const o=p(this,it)[t],a=p(this,mt)[t];if(o&&a){const l=o-(Yn.now()-a);r.ttl=l,r.start=Date.now()}}return p(this,gt)&&(r.size=p(this,gt)[t]),r}dump(){const e=[];for(const t of N(this,A,ln).call(this,{allowStale:!0})){const i=p(this,we)[t],s=p(this,q)[t],r=N(this,A,ye).call(this,s)?s.__staleWhileFetching:s;if(r===void 0||i===void 0)continue;const o={value:r};if(p(this,it)&&p(this,mt)){o.ttl=p(this,it)[t];const a=Yn.now()-p(this,mt)[t];o.start=Math.floor(Date.now()-a)}p(this,gt)&&(o.size=p(this,gt)[t]),e.unshift([i,o])}return e}load(e){this.clear();for(const[t,i]of e){if(i.start){const s=Date.now()-i.start;i.start=Yn.now()-s}this.set(t,i.value,i)}}set(e,t,i={}){var h,f,g,v,y;if(t===void 0)return this.delete(e),this;const{ttl:s=this.ttl,start:r,noDisposeOnSet:o=this.noDisposeOnSet,sizeCalculation:a=this.sizeCalculation,status:l}=i;let{noUpdateTTL:c=this.noUpdateTTL}=i;const u=p(this,ys).call(this,e,t,i.size||0,a);if(this.maxEntrySize&&u>this.maxEntrySize)return l&&(l.set="miss",l.maxEntrySizeExceeded=!0),N(this,A,un).call(this,e,"set"),this;let d=p(this,$e)===0?void 0:p(this,Se).get(e);if(d===void 0)d=p(this,$e)===0?p(this,Ne):p(this,pt).length!==0?p(this,pt).pop():p(this,$e)===p(this,ut)?N(this,A,Js).call(this,!1):p(this,$e),p(this,we)[d]=e,p(this,q)[d]=t,p(this,Se).set(e,d),p(this,qe)[p(this,Ne)]=d,p(this,nt)[d]=p(this,Ne),B(this,Ne,d),Ms(this,$e)._++,p(this,vi).call(this,d,u,l),l&&(l.set="add"),c=!1;else{N(this,A,Gi).call(this,d);const w=p(this,q)[d];if(t!==w){if(p(this,gn)&&N(this,A,ye).call(this,w)){w.__abortController.abort(new Error("replaced"));const{__staleWhileFetching:I}=w;I!==void 0&&!o&&(p(this,_t)&&((h=p(this,dt))==null||h.call(this,I,e,"set")),p(this,Ke)&&((f=p(this,Oe))==null||f.push([I,e,"set"])))}else o||(p(this,_t)&&((g=p(this,dt))==null||g.call(this,w,e,"set")),p(this,Ke)&&((v=p(this,Oe))==null||v.push([w,e,"set"])));if(p(this,Ln).call(this,d),p(this,vi).call(this,d,u,l),p(this,q)[d]=t,l){l.set="replace";const I=w&&N(this,A,ye).call(this,w)?w.__staleWhileFetching:w;I!==void 0&&(l.oldValue=I)}}else l&&(l.set="update")}if(s!==0&&!p(this,it)&&N(this,A,Sa).call(this),p(this,it)&&(c||p(this,vs).call(this,d,s,r),l&&p(this,Mt).call(this,l,d)),!o&&p(this,Ke)&&p(this,Oe)){const w=p(this,Oe);let I;for(;I=w==null?void 0:w.shift();)(y=p(this,ht))==null||y.call(this,...I)}return this}pop(){var e;try{for(;p(this,$e);){const t=p(this,q)[p(this,He)];if(N(this,A,Js).call(this,!0),N(this,A,ye).call(this,t)){if(t.__staleWhileFetching)return t.__staleWhileFetching}else if(t!==void 0)return t}}finally{if(p(this,Ke)&&p(this,Oe)){const t=p(this,Oe);let i;for(;i=t==null?void 0:t.shift();)(e=p(this,ht))==null||e.call(this,...i)}}}has(e,t={}){const{updateAgeOnHas:i=this.updateAgeOnHas,status:s}=t,r=p(this,Se).get(e);if(r!==void 0){const o=p(this,q)[r];if(N(this,A,ye).call(this,o)&&o.__staleWhileFetching===void 0)return!1;if(p(this,st).call(this,r))s&&(s.has="stale",p(this,Mt).call(this,s,r));else return i&&p(this,On).call(this,r),s&&(s.has="hit",p(this,Mt).call(this,s,r)),!0}else s&&(s.has="miss");return!1}peek(e,t={}){const{allowStale:i=this.allowStale}=t,s=p(this,Se).get(e);if(s===void 0||!i&&p(this,st).call(this,s))return;const r=p(this,q)[s];return N(this,A,ye).call(this,r)?r.__staleWhileFetching:r}async fetch(e,t={}){const{allowStale:i=this.allowStale,updateAgeOnGet:s=this.updateAgeOnGet,noDeleteOnStaleGet:r=this.noDeleteOnStaleGet,ttl:o=this.ttl,noDisposeOnSet:a=this.noDisposeOnSet,size:l=0,sizeCalculation:c=this.sizeCalculation,noUpdateTTL:u=this.noUpdateTTL,noDeleteOnFetchRejection:d=this.noDeleteOnFetchRejection,allowStaleOnFetchRejection:h=this.allowStaleOnFetchRejection,ignoreFetchAbort:f=this.ignoreFetchAbort,allowStaleOnFetchAbort:g=this.allowStaleOnFetchAbort,context:v,forceRefresh:y=!1,status:w,signal:I}=t;if(!p(this,gn))return w&&(w.fetch="get"),this.get(e,{allowStale:i,updateAgeOnGet:s,noDeleteOnStaleGet:r,status:w});const S={allowStale:i,updateAgeOnGet:s,noDeleteOnStaleGet:r,ttl:o,noDisposeOnSet:a,size:l,sizeCalculation:c,noUpdateTTL:u,noDeleteOnFetchRejection:d,allowStaleOnFetchRejection:h,allowStaleOnFetchAbort:g,ignoreFetchAbort:f,status:w,signal:I};let C=p(this,Se).get(e);if(C===void 0){w&&(w.fetch="miss");const $=N(this,A,Xs).call(this,e,C,S,v);return $.__returned=$}else{const $=p(this,q)[C];if(N(this,A,ye).call(this,$)){const P=i&&$.__staleWhileFetching!==void 0;return w&&(w.fetch="inflight",P&&(w.returnedStale=!0)),P?$.__staleWhileFetching:$.__returned=$}const k=p(this,st).call(this,C);if(!y&&!k)return w&&(w.fetch="hit"),N(this,A,Gi).call(this,C),s&&p(this,On).call(this,C),w&&p(this,Mt).call(this,w,C),$;const M=N(this,A,Xs).call(this,e,C,S,v),E=M.__staleWhileFetching!==void 0&&i;return w&&(w.fetch=k?"stale":"refresh",E&&k&&(w.returnedStale=!0)),E?M.__staleWhileFetching:M.__returned=M}}async forceFetch(e,t={}){const i=await this.fetch(e,t);if(i===void 0)throw new Error("fetch() returned undefined");return i}memo(e,t={}){const i=p(this,_i);if(!i)throw new Error("no memoMethod provided to constructor");const{context:s,forceRefresh:r,...o}=t,a=this.get(e,o);if(!r&&a!==void 0)return a;const l=i(e,a,{options:o,context:s});return this.set(e,l,o),l}get(e,t={}){const{allowStale:i=this.allowStale,updateAgeOnGet:s=this.updateAgeOnGet,noDeleteOnStaleGet:r=this.noDeleteOnStaleGet,status:o}=t,a=p(this,Se).get(e);if(a!==void 0){const l=p(this,q)[a],c=N(this,A,ye).call(this,l);return o&&p(this,Mt).call(this,o,a),p(this,st).call(this,a)?(o&&(o.get="stale"),c?(o&&i&&l.__staleWhileFetching!==void 0&&(o.returnedStale=!0),i?l.__staleWhileFetching:void 0):(r||N(this,A,un).call(this,e,"expire"),o&&i&&(o.returnedStale=!0),i?l:void 0)):(o&&(o.get="hit"),c?l.__staleWhileFetching:(N(this,A,Gi).call(this,a),s&&p(this,On).call(this,a),l))}else o&&(o.get="miss")}delete(e){return N(this,A,un).call(this,e,"delete")}clear(){return N(this,A,Aa).call(this,"delete")}};ut=new WeakMap,tt=new WeakMap,dt=new WeakMap,ht=new WeakMap,mi=new WeakMap,_i=new WeakMap,$e=new WeakMap,ft=new WeakMap,Se=new WeakMap,we=new WeakMap,q=new WeakMap,qe=new WeakMap,nt=new WeakMap,He=new WeakMap,Ne=new WeakMap,pt=new WeakMap,Oe=new WeakMap,gt=new WeakMap,mt=new WeakMap,it=new WeakMap,_t=new WeakMap,gn=new WeakMap,Ke=new WeakMap,A=new WeakSet,Sa=function(){const e=new Qs(p(this,ut)),t=new Qs(p(this,ut));B(this,it,e),B(this,mt,t),B(this,vs,(r,o,a=Yn.now())=>{if(t[r]=o!==0?a:0,e[r]=o,o!==0&&this.ttlAutopurge){const l=setTimeout(()=>{p(this,st).call(this,r)&&N(this,A,un).call(this,p(this,we)[r],"expire")},o+1);l.unref&&l.unref()}}),B(this,On,r=>{t[r]=e[r]!==0?Yn.now():0}),B(this,Mt,(r,o)=>{if(e[o]){const a=e[o],l=t[o];if(!a||!l)return;r.ttl=a,r.start=l,r.now=i||s();const c=r.now-l;r.remainingTTL=a-c}});let i=0;const s=()=>{const r=Yn.now();if(this.ttlResolution>0){i=r;const o=setTimeout(()=>i=0,this.ttlResolution);o.unref&&o.unref()}return r};this.getRemainingTTL=r=>{const o=p(this,Se).get(r);if(o===void 0)return 0;const a=e[o],l=t[o];if(!a||!l)return 1/0;const c=(i||s())-l;return a-c},B(this,st,r=>{const o=t[r],a=e[r];return!!a&&!!o&&(i||s())-o>a})},On=new WeakMap,Mt=new WeakMap,vs=new WeakMap,st=new WeakMap,Zf=function(){const e=new Qs(p(this,ut));B(this,ft,0),B(this,gt,e),B(this,Ln,t=>{B(this,ft,p(this,ft)-e[t]),e[t]=0}),B(this,ys,(t,i,s,r)=>{if(N(this,A,ye).call(this,i))return 0;if(!an(s))if(r){if(typeof r!="function")throw new TypeError("sizeCalculation must be a function");if(s=r(i,t),!an(s))throw new TypeError("sizeCalculation return invalid (expect positive integer)")}else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");return s}),B(this,vi,(t,i,s)=>{if(e[t]=i,p(this,tt)){const r=p(this,tt)-e[t];for(;p(this,ft)>r;)N(this,A,Js).call(this,!0)}B(this,ft,p(this,ft)+e[t]),s&&(s.entrySize=i,s.totalCalculatedSize=p(this,ft))})},Ln=new WeakMap,vi=new WeakMap,ys=new WeakMap,ln=function*({allowStale:e=this.allowStale}={}){if(p(this,$e))for(let t=p(this,Ne);!(!N(this,A,ka).call(this,t)||((e||!p(this,st).call(this,t))&&(yield t),t===p(this,He)));)t=p(this,nt)[t]},cn=function*({allowStale:e=this.allowStale}={}){if(p(this,$e))for(let t=p(this,He);!(!N(this,A,ka).call(this,t)||((e||!p(this,st).call(this,t))&&(yield t),t===p(this,Ne)));)t=p(this,qe)[t]},ka=function(e){return e!==void 0&&p(this,Se).get(p(this,we)[e])===e},Js=function(e){var r,o;const t=p(this,He),i=p(this,we)[t],s=p(this,q)[t];return p(this,gn)&&N(this,A,ye).call(this,s)?s.__abortController.abort(new Error("evicted")):(p(this,_t)||p(this,Ke))&&(p(this,_t)&&((r=p(this,dt))==null||r.call(this,s,i,"evict")),p(this,Ke)&&((o=p(this,Oe))==null||o.push([s,i,"evict"]))),p(this,Ln).call(this,t),e&&(p(this,we)[t]=void 0,p(this,q)[t]=void 0,p(this,pt).push(t)),p(this,$e)===1?(B(this,He,B(this,Ne,0)),p(this,pt).length=0):B(this,He,p(this,qe)[t]),p(this,Se).delete(i),Ms(this,$e)._--,t},Xs=function(e,t,i,s){const r=t===void 0?void 0:p(this,q)[t];if(N(this,A,ye).call(this,r))return r;const o=new Lr,{signal:a}=i;a==null||a.addEventListener("abort",()=>o.abort(a.reason),{signal:o.signal});const l={signal:o.signal,options:i,context:s},c=(v,y=!1)=>{const{aborted:w}=o.signal,I=i.ignoreFetchAbort&&v!==void 0;if(i.status&&(w&&!y?(i.status.fetchAborted=!0,i.status.fetchError=o.signal.reason,I&&(i.status.fetchAbortIgnored=!0)):i.status.fetchResolved=!0),w&&!I&&!y)return d(o.signal.reason);const S=f;return p(this,q)[t]===f&&(v===void 0?S.__staleWhileFetching?p(this,q)[t]=S.__staleWhileFetching:N(this,A,un).call(this,e,"fetch"):(i.status&&(i.status.fetchUpdated=!0),this.set(e,v,l.options))),v},u=v=>(i.status&&(i.status.fetchRejected=!0,i.status.fetchError=v),d(v)),d=v=>{const{aborted:y}=o.signal,w=y&&i.allowStaleOnFetchAbort,I=w||i.allowStaleOnFetchRejection,S=I||i.noDeleteOnFetchRejection,C=f;if(p(this,q)[t]===f&&(!S||C.__staleWhileFetching===void 0?N(this,A,un).call(this,e,"fetch"):w||(p(this,q)[t]=C.__staleWhileFetching)),I)return i.status&&C.__staleWhileFetching!==void 0&&(i.status.returnedStale=!0),C.__staleWhileFetching;if(C.__returned===C)throw v},h=(v,y)=>{var I;const w=(I=p(this,mi))==null?void 0:I.call(this,e,r,l);w&&w instanceof Promise&&w.then(S=>v(S===void 0?void 0:S),y),o.signal.addEventListener("abort",()=>{(!i.ignoreFetchAbort||i.allowStaleOnFetchAbort)&&(v(void 0),i.allowStaleOnFetchAbort&&(v=S=>c(S,!0)))})};i.status&&(i.status.fetchDispatched=!0);const f=new Promise(h).then(c,u),g=Object.assign(f,{__abortController:o,__staleWhileFetching:r,__returned:void 0});return t===void 0?(this.set(e,g,{...l.options,status:void 0}),t=p(this,Se).get(e)):p(this,q)[t]=g,g},ye=function(e){if(!p(this,gn))return!1;const t=e;return!!t&&t instanceof Promise&&t.hasOwnProperty("__staleWhileFetching")&&t.__abortController instanceof Lr},xa=function(e,t){p(this,nt)[t]=e,p(this,qe)[e]=t},Gi=function(e){e!==p(this,Ne)&&(e===p(this,He)?B(this,He,p(this,qe)[e]):N(this,A,xa).call(this,p(this,nt)[e],p(this,qe)[e]),N(this,A,xa).call(this,p(this,Ne),e),B(this,Ne,e))},un=function(e,t){var s,r,o,a;let i=!1;if(p(this,$e)!==0){const l=p(this,Se).get(e);if(l!==void 0)if(i=!0,p(this,$e)===1)N(this,A,Aa).call(this,t);else{p(this,Ln).call(this,l);const c=p(this,q)[l];if(N(this,A,ye).call(this,c)?c.__abortController.abort(new Error("deleted")):(p(this,_t)||p(this,Ke))&&(p(this,_t)&&((s=p(this,dt))==null||s.call(this,c,e,t)),p(this,Ke)&&((r=p(this,Oe))==null||r.push([c,e,t]))),p(this,Se).delete(e),p(this,we)[l]=void 0,p(this,q)[l]=void 0,l===p(this,Ne))B(this,Ne,p(this,nt)[l]);else if(l===p(this,He))B(this,He,p(this,qe)[l]);else{const u=p(this,nt)[l];p(this,qe)[u]=p(this,qe)[l];const d=p(this,qe)[l];p(this,nt)[d]=p(this,nt)[l]}Ms(this,$e)._--,p(this,pt).push(l)}}if(p(this,Ke)&&((o=p(this,Oe))!=null&&o.length)){const l=p(this,Oe);let c;for(;c=l==null?void 0:l.shift();)(a=p(this,ht))==null||a.call(this,...c)}return i},Aa=function(e){var t,i,s;for(const r of N(this,A,cn).call(this,{allowStale:!0})){const o=p(this,q)[r];if(N(this,A,ye).call(this,o))o.__abortController.abort(new Error("deleted"));else{const a=p(this,we)[r];p(this,_t)&&((t=p(this,dt))==null||t.call(this,o,a,e)),p(this,Ke)&&((i=p(this,Oe))==null||i.push([o,a,e]))}}if(p(this,Se).clear(),p(this,q).fill(void 0),p(this,we).fill(void 0),p(this,it)&&p(this,mt)&&(p(this,it).fill(0),p(this,mt).fill(0)),p(this,gt)&&p(this,gt).fill(0),B(this,He,0),B(this,Ne,0),p(this,pt).length=0,B(this,ft,0),B(this,$e,0),p(this,Ke)&&p(this,Oe)){const r=p(this,Oe);let o;for(;o=r==null?void 0:r.shift();)(s=p(this,ht))==null||s.call(this,...o)}};let Ea=Ml;const Oo=new Ea({max:500,ttl:1e3*60*30}),xC="https://gooseread.com/api/rpc",AC=["recommend_paper","is_paper_fresh_recommendation"];async function Os(n,e){let t;e?t={method:n,params:e}:t={method:n};const i={"Content-Type":"application/json",id_token:zf||jf},r=JSON.stringify({requestBody:t,headers:i}).hashCode();if(Oo.has(r))return Oo.get(r);try{const o=await Hf(xC,{method:"POST",headers:i,body:JSON.stringify(t)});if(!o.ok)throw new Error(`Network Error: ${o.statusText}`);const a=await o.json(),c=MI(a,{deep:!0});if(c.error){if(Ns(`RPC Error: ${c.error}`),c.error==="ExpiredIdToken")return await zT(),await Os(n,e);throw new Error(`RPC Error: ${c.error}`)}return AC.includes(n)||Oo.set(r,c.result),c.result}catch(o){throw o instanceof TypeError&&o.message.includes("NetworkError")?new Error("Not connected to the internet"):new Error(`Error: ${o.message}`)}}async function Rl(n,e){return await Os(n,e)}async function Nt(n,e,t){try{return await Os(n,t)}catch(i){return Ns("Error occurred: ",i),e}}async function Bn(n,e){try{const t=await Os(n,e);if(t!=="ok")throw new Error(`RPC Error: ${t}`)}catch(t){Ns("Error occurred: ",t)}}function $C(n){return Nt("is_paper_fresh_recommendation",!0,{paper_id:n})}function PC(n){return Nt("get_paper_abstract","",{paper_id:n})}function RC(n){return Nt("get_papers",[],{paper_ids:n})}async function Eu(n,e){return await Rl("recommend_paper",{recency:n,batch:e})}function NC(n,e){return Rl("search_paper",{query:n,batch:e})}async function OC(n,e){return await Rl("get_similar_papers",{paper_id:n,batch:e})}function LC(){return Os("get_user_with_tags")}function $a(n,e,t,i){return Bn("update_user",{name:n,bio:e,photo:t,interests:i})}function DC(n){return Nt("get_hydrated_paper_comments",[],{paper_id:n})}function MC(n){return Nt("get_paper_comment_count",0,{paper_id:n})}function UC(n,e,t,i){return Bn("add_comment",{comment_id:n,paper_id:e,parent_id:t,content:i})}function FC(n){return Bn("unvote_paper",{paper_id:n})}function VC(n){return Bn("vote_paper",{paper_id:n})}function WC(n){return Nt("get_paper_vote_count",0,{paper_id:n})}function HC(n,e){return Bn("add_user_paper_tag",{paper_id:n,tag:e})}function jC(n,e){return Bn("delete_user_paper_tag",{paper_id:n,tag_name:e})}function BC(){return Nt("get_top_searched_words",[])}function zC(){return Nt("get_top_recommendation_interests",[])}function GC(){return Nt("get_all_user_icons",["wawa"])}function qC(n){return Nt("get_system_notification","",{app_version:n})}function KC(n){return Bn("update_user_interests",{interests:n,sync:!0})}const We=[];for(let n=0;n<256;++n)We.push((n+256).toString(16).slice(1));function YC(n,e=0){return(We[n[e+0]]+We[n[e+1]]+We[n[e+2]]+We[n[e+3]]+"-"+We[n[e+4]]+We[n[e+5]]+"-"+We[n[e+6]]+We[n[e+7]]+"-"+We[n[e+8]]+We[n[e+9]]+"-"+We[n[e+10]]+We[n[e+11]]+We[n[e+12]]+We[n[e+13]]+We[n[e+14]]+We[n[e+15]]).toLowerCase()}let Lo;const QC=new Uint8Array(16);function JC(){if(!Lo){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Lo=crypto.getRandomValues.bind(crypto)}return Lo(QC)}const XC=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Su={randomUUID:XC};function ZC(n,e,t){if(Su.randomUUID&&!e&&!n)return Su.randomUUID();n=n||{};const i=n.random||(n.rng||JC)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,YC(i)}function ep(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eT=ep,tp=new En("auth","Firebase",ep());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Kr("@firebase/auth");function tT(n,...e){Dr.logLevel<=ce.WARN&&Dr.warn(`Auth (${en}): ${n}`,...e)}function Zs(n,...e){Dr.logLevel<=ce.ERROR&&Dr.error(`Auth (${en}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n,...e){throw Nl(n,...e)}function np(n,...e){return Nl(n,...e)}function ip(n,e,t){const i=Object.assign(Object.assign({},eT()),{[e]:t});return new En("auth","Firebase",i).create(e,{appName:n.name})}function er(n){return ip(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nl(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return tp.create(n,...e)}function oe(n,e,...t){if(!n)throw Nl(e,...t)}function Wt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Zs(e),new Error(e)}function Ur(n,e){n||Wt(e)}function nT(){return ku()==="http:"||ku()==="https:"}function ku(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nT()||_d()||"connection"in navigator)?navigator.onLine:!0}function sT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ur(t>e,"Short delay should be less than long delay!"),this.isMobile=Gr()||Ua()}get(){return iT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(n,e){Ur(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=new rT(3e4,6e4);function Ol(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ls(n,e,t,i,s={}){return rp(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Zt(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},r);return md()||(c.referrerPolicy="no-referrer"),sp.fetch()(op(n,n.config.apiHost,t,a),c)})}async function rp(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},aT),e);try{const s=new uT(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw js(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw js(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw js(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw js(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ip(n,u,c);Mr(n,u)}}catch(s){if(s instanceof at)throw s;Mr(n,"network-request-failed",{message:String(s)})}}async function cT(n,e,t,i,s={}){const r=await Ls(n,e,t,i,s);return"mfaPendingCredential"in r&&Mr(n,"multi-factor-auth-required",{_serverResponse:r}),r}function op(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?oT(n.config,s):`${n.config.apiScheme}://${s}`}class uT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(np(this.auth,"network-request-failed")),lT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function js(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=np(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dT(n,e){return Ls(n,"POST","/v1/accounts:delete",e)}async function ap(n,e){return Ls(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hT(n,e=!1){const t=Ue(n),i=await t.getIdToken(e),s=lp(i);oe(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:es(Do(s.auth_time)),issuedAtTime:es(Do(s.iat)),expirationTime:es(Do(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Do(n){return Number(n)*1e3}function lp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Zs("JWT malformed, contained fewer than 3 sections"),null;try{const s=ss(t);return s?JSON.parse(s):(Zs("Failed to decode base64 JWT payload"),null)}catch(s){return Zs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function xu(n){const e=lp(n);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof at&&fT(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function fT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=es(this.lastLoginAt),this.creationTime=es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Pa(n,ap(t,{idToken:i}));oe(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?cp(r.providerUserInfo):[],a=mT(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ra(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function gT(n){const e=Ue(n);await Fr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mT(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function cp(n){return n.map(e=>{var{providerId:t}=e,i=$i(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _T(n,e){const t=await rp(n,{},async()=>{const i=Zt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=op(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sp.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function vT(n,e){return Ls(n,"POST","/v2/accounts:revokeToken",Ol(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const t=xu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await _T(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new fi;return i&&(oe(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(oe(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(n,e){oe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=$i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ra(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Pa(this,this.stsTokenManager.getToken(this.auth,e));return oe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return hT(this,e)}reload(){return gT(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Fr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ye(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await Pa(this,dT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=t.createdAt)!==null&&c!==void 0?c:void 0,I=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:C,isAnonymous:$,providerData:k,stsTokenManager:M}=t;oe(S&&M,e,"internal-error");const U=fi.fromJSON(this.name,M);oe(typeof S=="string",e,"internal-error"),on(d,e.name),on(h,e.name),oe(typeof C=="boolean",e,"internal-error"),oe(typeof $=="boolean",e,"internal-error"),on(f,e.name),on(g,e.name),on(v,e.name),on(y,e.name),on(w,e.name),on(I,e.name);const E=new mn({uid:S,auth:e,email:h,emailVerified:C,displayName:d,isAnonymous:$,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:U,createdAt:w,lastLoginAt:I});return k&&Array.isArray(k)&&(E.providerData=k.map(P=>Object.assign({},P))),y&&(E._redirectEventId=y),E}static async _fromIdTokenResponse(e,t,i=!1){const s=new fi;s.updateFromServerResponse(t);const r=new mn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Fr(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];oe(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?cp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new fi;a.updateFromIdToken(i);const l=new mn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Ra(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new Map;function Nn(n){Ur(n instanceof Function,"Expected a class definition");let e=Au.get(n);return e?(Ur(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Au.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}up.type="NONE";const $u=up;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n,e,t){return`firebase:${n}:${e}:${t}`}class pi{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Mo(this.userKey,s.apiKey,r),this.fullPersistenceKey=Mo("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new pi(Nn($u),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Nn($u);const o=Mo(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const d=mn._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new pi(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new pi(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(IT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(TT(e))return"Blackberry";if(ET(e))return"Webos";if(wT(e))return"Safari";if((e.includes("chrome/")||bT(e))&&!e.includes("edge/"))return"Chrome";if(CT(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function yT(n=Ce()){return/firefox\//i.test(n)}function wT(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bT(n=Ce()){return/crios\//i.test(n)}function IT(n=Ce()){return/iemobile/i.test(n)}function CT(n=Ce()){return/android/i.test(n)}function TT(n=Ce()){return/blackberry/i.test(n)}function ET(n=Ce()){return/webos/i.test(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(n,e=[]){let t;switch(n){case"Browser":t=Pu(Ce());break;case"Worker":t=`${Pu(Ce())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${en}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT(n,e={}){return Ls(n,"GET","/v2/passwordPolicy",Ol(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=6;class AT{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:xT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ru(this),this.idTokenSubscription=new Ru(this),this.beforeStateQueue=new ST(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Nn(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ap(this,{idToken:e}),i=await mn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ye(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ye(this.app))return Promise.reject(er(this));const t=e?Ue(e):null;return t&&oe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ye(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ye(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kT(this),t=new AT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new En("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await vT(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Nn(e)||this._popupRedirectResolver;oe(t,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[Nn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&tT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function PT(n){return Ue(n)}class Ru{constructor(e){this.auth=e,this.observer=null,this.addObserver=wd(t=>this.observer=t)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function RT(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Nn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,t){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(n,e){return cT(n,"POST","/v1/accounts:signInWithIdp",Ol(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="http://localhost";class Qt extends NT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Mr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=$i(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Qt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Uo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Uo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Uo(e,t)}buildRequest(){const e={requestUri:OT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends LT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ts extends Ds{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return oe("providerId"in t&&"signInMethod"in t,"argument-error"),Qt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return oe(e.idToken||e.accessToken,"argument-error"),Qt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ts.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ts.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:a}=e;if(!i&&!s&&!t&&!r||!a)return null;try{return new ts(a)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Ds{constructor(){super("facebook.com")}static credential(e){return Qt._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qt._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return hn.credential(t,i)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Ds{constructor(){super("github.com")}static credential(e){return Qt._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Ds{constructor(){super("twitter.com")}static credential(e,t){return Qt._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return pn.credential(t,i)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";var Nu="@firebase/auth",Ou="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UT(n){wn(new zt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dp(n)},c=new $T(i,s,r,l);return RT(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),wn(new zt("auth-internal",e=>{const t=PT(e.getProvider("auth").getImmediate());return(i=>new DT(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(Nu,Ou,MT(n)),kt(Nu,Ou,"esm2017")}UT("WebExtension");const FT={apiKey:"AIzaSyD-a4Eag3eYgHqWApQEkKRHnSQr79fkphM",authDomain:"haoyuan80s.firebaseapp.com",projectId:"haoyuan80s",storageBucket:"haoyuan80s.appspot.com",messagingSenderId:"552287887623",appId:"1:552287887623:web:f646a7d73dbfbf90e125a2"},hp=Td(FT),Rt=EI(hp),VT=cw(hp);async function WT(n,e){try{if(!(await ub(Rt,n,e)).user.emailVerified)return await Cl(Rt),"Email not verified. Please check your inbox and verify your email."}catch(t){return t instanceof at?t.code.replace("auth/",""):String(t)}return""}async function HT(n){try{await lb(Rt,n)}catch(e){return e instanceof at?e.code.replace("auth/",""):String(e)}return""}async function jT(n,e){try{const t=await cb(Rt,n,e);return await db(t.user),""}catch(t){return t instanceof at?t.code.replace("auth/",""):String(t)}}function Lu(){Cl(Rt)}function BT(){pb(Rt,async n=>{if(n){if(!n.emailVerified){await Cl(Rt);return}let e=await n.getIdToken();Pl(e);const{user:t,tags:i}=await LC();ke("user",t),ke("tags",i),ge.showUserLogin&&se("showUserLogin",!1)}else EC();yC(!0)})}async function zT(){var e;let n=await((e=Rt.currentUser)==null?void 0:e.getIdToken(!0));n?Pl(n):Ns("refreshIdToken: no idToken")}const GT="https://ribbitribbit.co";function qT(){const n=ZC();oo(`${GT}/auth?id=${n}&backurl=r2-multi://`),tw(Zy(VT,`onetime-uuid/${n}`),e=>{const t=e.val();if(t){const{type:i,accessToken:s,idToken:r}=JSON.parse(t);if(i==="apple"){const a=new ts("apple.com").credential({idToken:r,rawNonce:"W2?S<("});va(Rt,a).catch(l=>{const c=l.code,u=l.message;console.error(c,u)})}if(i==="google"){const o=Il.credential(null,s);va(Rt,o).catch(a=>{const l=a.code,c=a.message;console.error(l,c)})}}})}class tr{constructor(){this.eventListeners=Object.create(null)}addListener(e,t){return this.on(e,t)}removeListener(e,t){return this.off(e,t)}on(e,t){return e in this.eventListeners?this.eventListeners[e].push(t):this.eventListeners[e]=[t],this}once(e,t){const i=s=>{this.removeListener(e,i),t(s)};return this.addListener(e,i)}off(e,t){return e in this.eventListeners&&(this.eventListeners[e]=this.eventListeners[e].filter(i=>i!==t)),this}removeAllListeners(e){return e?delete this.eventListeners[e]:this.eventListeners=Object.create(null),this}emit(e,t){if(e in this.eventListeners){const i=this.eventListeners[e];for(const s of i)s(t);return!0}return!1}listenerCount(e){return e in this.eventListeners?this.eventListeners[e].length:0}prependListener(e,t){return e in this.eventListeners?this.eventListeners[e].unshift(t):this.eventListeners[e]=[t],this}prependOnceListener(e,t){const i=s=>{this.removeListener(e,i),t(s)};return this.prependListener(e,i)}}class fp{constructor(e){this.pid=e}async write(e){await Yt("plugin:shell|stdin_write",{pid:this.pid,buffer:e})}async kill(){await Yt("plugin:shell|kill",{cmd:"killChild",pid:this.pid})}}class Vr extends tr{constructor(e,t=[],i){super(),this.stdout=new tr,this.stderr=new tr,this.program=e,this.args=typeof t=="string"?[t]:t,this.options=i??{}}static create(e,t=[],i){return new Vr(e,t,i)}static sidecar(e,t=[],i){const s=new Vr(e,t,i);return s.options.sidecar=!0,s}async spawn(){const e=this.program,t=this.args,i=this.options;typeof t=="object"&&Object.freeze(t);const s=new Wf;return s.onmessage=r=>{switch(r.event){case"Error":this.emit("error",r.payload);break;case"Terminated":this.emit("close",r.payload);break;case"Stdout":this.stdout.emit("data",r.payload);break;case"Stderr":this.stderr.emit("data",r.payload);break}},await Yt("plugin:shell|spawn",{program:e,args:t,options:i,onEvent:s}).then(r=>new fp(r))}async execute(){const e=this.program,t=this.args,i=this.options;return typeof t=="object"&&Object.freeze(t),await Yt("plugin:shell|execute",{program:e,args:t,options:i})}}async function ri(n,e){await Yt("plugin:shell|open",{path:n,with:e})}const KT=Object.freeze(Object.defineProperty({__proto__:null,Child:fp,Command:Vr,EventEmitter:tr,open:ri},Symbol.toStringTag,{value:"Module"}));var YT=b('<div class="fixed inset-0 flex justify-center z-50 items-center font-sf-rounded font-regular text-black bg-black bg-opacity-60 rounded-t-xl"><div class="background-grey5 py-4 px-5 text-custom-15 theme-primary-text rounded-3xl w-[90vw] max-w-[400px] shadow-[0px_1px_3px_rgba(0,0,2,0.5)]"><p class=""></p><div class="flex justify-end gap-2 mt-3"><button></button><button>');function pp(n){const[e,t]=T("");return m(Wn,{get children(){var i=YT(),s=i.firstChild,r=s.firstChild,o=r.nextSibling,a=o.firstChild,l=a.nextSibling;return _(r,()=>n.message),a.$$touchend=()=>t(""),a.$$touchstart=()=>t("no"),or(a,"click",n.onCancel,!0),_(a,()=>n.no_text),l.$$touchend=()=>t(""),l.$$touchstart=()=>t("yes"),or(l,"click",n.onConfirm,!0),_(l,()=>n.yes_text),R(c=>{var u=`py-1 px-3 min-w-18 rounded-full font-medium border-custom18 border-ColorPrimaryText dark:border-ColorPrimaryText_dm leading-none ${e()==="no"?"opacity-40":""}`,d=`py-1 px-3 min-w-18 rounded-full bg-ColorInterestTagOnBackground dark:bg-ColorInterestTagOnBackground_dm border-ColorInterestTagOnBorder dark:border-ColorInterestTagOnBorder_dm font-medium border-custom18 leading-none theme-primary-text-opposite ${e()==="yes"?"opacity-40":""}`;return u!==c.e&&W(a,c.e=u),d!==c.t&&W(l,c.t=d),c},{e:void 0,t:void 0}),i}})}le(["click","touchstart","touchend"]);var QT=b('<div class="flex items-center overflow-x-auto whitespace-nowrap no-scrollbar">');function $t(n){let e;const[t,i]=T(!1);let s,r;const o=c=>{i(!0),e.classList.add("cursor-grabbing"),s=c.pageX-e.offsetLeft,r=e.scrollLeft,window.addEventListener("mousemove",l),window.addEventListener("mouseup",a)},a=()=>{i(!1),e.classList.remove("cursor-grabbing"),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",a)},l=c=>{if(!t())return;c.preventDefault();const d=(c.pageX-e.offsetLeft-s)*2;e.scrollLeft=r-d};return Ze(()=>{window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",a)}),(()=>{var c=QT();c.$$mousedown=o;var u=e;return typeof u=="function"?Qe(u,c):e=c,_(c,()=>n.children),c})()}le(["mousedown"]);var JT=b('<div class="py-2.5 w-full mx-auto"><div class=sheet-bar>'),XT=b("<div id=sheet-view><div>");function Wr(n){const[e,t]=T(!1),[i,s]=T(0),[r,o]=T(0),a=h=>{t(!0);let f=0;"clientX"in h?f=h.clientY:h.touches&&(f=h.touches[0].clientY),s(f)},l=h=>{if(!e())return;let f=0;"clientX"in h?f=h.clientY:h.touches&&h.touches.length>0&&(f=h.touches[0].clientY),o(f)},c=h=>{if(!e())return;let f=0;"clientX"in h?(f=h.clientY,f-i()>10&&n.setIsOpen(!1)):h.touches&&h.touches.length>0?(f=h.touches[0].clientY,f-i()>10&&n.setIsOpen(!1)):r()-i()>10&&n.setIsOpen(!1),s(0),o(0),t(!1)},[u,d]=T(!1);return It(qi(n.isOpen,()=>{n.isOpen()&&d(!0)},{defer:!0})),m(Wn,{get children(){return m(O,{get when(){return u()},get children(){var h=XT(),f=h.firstChild;return h.$$click=()=>{n.setIsOpen(!1)},f.addEventListener("animationend",g=>{g.animationName==="slideDown"&&(d(!1),n.setIsOpen(!1))}),f.$$touchend=c,f.$$touchmove=l,f.$$mouseup=c,f.$$mousemove=l,f.$$click=g=>g.stopPropagation(),_(f,m(O,{get when(){return n.hasSheetBar},get children(){var g=JT();return g.$$touchstart=a,g.$$mousedown=a,g.$$click=()=>n.setIsOpen(!1),g}}),null),_(f,()=>n.children,null),R(g=>{var v=`fixed inset-0 bg-black bg-opacity-60 ${n.isOpen()?"h-screen":"h-0"} ${n.classZ}`,y=`select-none fixed bottom-0 left-0 rounded-t-xl right-0 ${n.backgroundStyle} ${n.classH} transition-transform duration-200 ${n.isOpen()?"animate-slideUp":"animate-slideDown"}`;return v!==g.e&&W(h,g.e=v),y!==g.t&&W(f,g.t=y),g},{e:void 0,t:void 0}),h}})}})}le(["click","mousemove","mouseup","touchmove","touchend","mousedown","touchstart"]);var ZT=b("<div>");function Ei(n){const e=Qp({height_class:String},n);let t;const[i,s]=T(!1);let r,o;const a=u=>{s(!0),t.classList.add("cursor-grabbing"),r=u.pageY-t.offsetTop,o=t.scrollTop,window.addEventListener("mousemove",c),window.addEventListener("mouseup",l)},l=()=>{s(!1),t.classList.remove("cursor-grabbing"),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",l)},c=u=>{if(!i())return;u.preventDefault();const h=(u.pageY-t.offsetTop-r)*2;t.scrollTop=o-h};return Ze(()=>{window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",l)}),(()=>{var u=ZT();u.$$mousedown=a;var d=t;return typeof d=="function"?Qe(d,u):t=u,_(u,()=>e.children),R(()=>W(u,`flex flex-col ${e.height_class} items-center overflow-y-auto whitespace-nowrap no-scrollbar`)),u})()}le(["mousedown"]);var eE=b("<div>");function gp(n){const e="bg-"+xl(kl(n.interest+"3")),t=VI(n.interest);return(()=>{var i=eE();return W(i,`rounded-full ${e} text-white font-semibold w-4 h-4 flex text-[10px] items-center justify-center select-none`),_(i,t),i})()}var tE=b('<div><div class="flex gap-1.5 items-center font-sf-rounded font-medium leading-none whitespace-nowrap"><p class=select-none>');function Hr(n){return(()=>{var e=tE(),t=e.firstChild,i=t.firstChild;return _(t,m(gp,{get interest(){return n.interest}}),i),_(i,()=>n.interest),e})()}var nE=b('<div class="flex-col space-y-2 py-1 text-custom-16">'),iE=b('<div class="background-sheet theme-primary-text rounded-lg w-full screen-bottom-safe-space"><div class="flex flex-col px-1.5 justify-between h-[60vh] max-h-[300px] font-sf-rounded font-medium text-custom-16 w-full"><div class=""><button><img class="w-[16px] my-1 mx-2"><p class=leading-none>Terms of Service</p></button><button><img class="w-[16px] my-1 mx-2"><p class=leading-none>Visit website RibbitRibbit.co</p></button><button><img src=/iconSpotify.png class="w-[16px] my-1 mx-2"><p class=leading-none>Listen on Spotify</p></button><button><img src=/iconApplePodcast.png class="w-[16px] my-1 mx-2"><p class=leading-none>Listen on Apple Podcasts</p></button></div><div class=""><button><img class="w-[16px] my-1 mx-2"><p class=leading-none>Sign out</p></button><button><img class="w-[16px] my-1 mx-2"><p class="theme-tertiary-text leading-none">Delete account</p></button><div>'),sE=b('<div class="flex space-x-2 my-6 px-1">'),rE=b('<div class="background-sheet px-3 w-full flex-col space-y-4 screen-bottom-safe-space">'),oE=b('<img src=/buttonSelectedFillYellow.svg class="w-4 h-4">'),aE=b('<div class="relative w-[100px] h-[100px] bg-white rounded-md"><img loading=lazy class="w-full h-full rounded-md object-cover shadow-[0px_0.5px_1.5px_rgba(0,0,0,0.5)]"alt="User profile"><button>',!0,!1),lE=b('<div class="flex-col justify-start"><div class="flex justify-start gap-4"><div class="relative w-[100px] h-[100px]"><img loading=lazy class="w-full h-full rounded-md object-cover shadow-[0px_0.5px_1.5px_rgba(0,0,0,0.5)] bg-white"alt="User profile"><button class="absolute bottom-0.5 right-0.5 w-6 h-6 bg-white bg-opacity-50 rounded-full flex items-center justify-center text-black text-xs focus:outline-none cursor-pointer"><img src=/buttonEdit.svg class="w-[16px] h-[16px]"></button></div><div class="flex-col flex-grow"><p class="font-sf-rounded font-semibold text-custom-17"></p><p class="font-sf-rounded font-regular text-custom-16"></p></div><div><button><img class="w-[22px] h-[22px] rounded-md my-1 mr-1"></button></div></div><div class="local-title py-1 mt-5 mb-1"> Profile </div><div class="flex-col px-1.5 py-1 card-container border-black overflow-hidden"><div class="flex font-sf-rounded text-custom-16 mt-1.5 mb-1.5 items-center"><div class="font-regular w-20 select-none">Name</div><div class="flex-grow font-medium"><input class="input-text px-2"type=text></div></div><div class="flex font-sf-rounded text-custom-16 pt-1 pb-2 items-center"><div class="font-regular w-20 select-none">Bio</div><div class="flex-grow font-medium"><input class="input-text px-2"type=text></div></div><div class="flex items-start font-sf-rounded text-custom-16 py-1"><div class="font-regular w-20 select-none">Interests</div><div class="flex flex-grow"></div><button class="py-1 cursor-pointer"><img class="w-[18px] h-[18px]">',!0,!1),cE=b('<div><div class="screen-top-safe-space px-2 pb-4 overflow-hidden">'),uE=b('<div class=message-tertiary><div>Please<button class="underline text-blue-500 px-1">log in</button>to manage your account');function dE(n){return m(Ei,{height_class:"max-h-[30vh]",get children(){var e=nE();return _(e,m(xe,{get each(){return n.interests},children:t=>m(Hr,{interest:t})})),e}})}function hE(n){const[e,t]=T(!1),[i,s]=T("");function r(){Lu(),t(!1),n.dismiss()}function o(){t(!1)}return(()=>{var a=iE(),l=a.firstChild,c=l.firstChild,u=c.firstChild,d=u.firstChild,h=u.nextSibling,f=h.firstChild,g=h.nextSibling,v=g.nextSibling,y=c.nextSibling,w=y.firstChild,I=w.firstChild,S=w.nextSibling,C=S.firstChild,$=S.nextSibling;return a.$$click=k=>k.stopPropagation(),u.$$touchend=()=>s(""),u.$$touchstart=()=>s("privacy"),u.$$click=()=>ri("https://ribbitribbit.co/privacy"),h.$$touchend=()=>s(""),h.$$touchstart=()=>s("web"),h.$$click=()=>ri("https://ribbitribbit.co"),g.$$touchend=()=>s(""),g.$$touchstart=()=>s("spotify"),g.$$click=()=>ri("https://open.spotify.com/show/0YhT3crdRlM0s7bUskVPBK"),v.$$touchend=()=>s(""),v.$$touchstart=()=>s("applepodcast"),v.$$click=()=>ri("https://podcasts.apple.com/us/podcast/ribbit-ribbit/id1756448619"),w.$$touchend=()=>s(""),w.$$touchstart=()=>s("logout"),w.$$click=()=>{Lu(),n.dismiss()},S.$$touchend=()=>s(""),S.$$touchstart=()=>s("deleteaccount"),S.$$click=()=>{t(!0)},_($,(()=>{var k=Y(()=>!!e());return()=>k()&&m(pp,{message:"All your preferences will vanish and there's no going back... Are you sure?",yes_text:"Delete",no_text:"Cancel",onConfirm:r,onCancel:o})})()),R(k=>{var M=`flex items-center w-full py-2 ${i()==="privacy"?"background-grey5 rounded-full":""}`,U=`/iconLock${ie()?"_dm":""}.png`,E=`flex items-center w-full py-2 ${i()==="web"?"background-grey5 rounded-full":""}`,P=`/iconGlobe${ie()?"_dm":""}.svg`,D=`flex items-center w-full py-2 ${i()==="spotify"?"background-grey5 rounded-full":""}`,F=`flex items-center w-full py-2 ${i()==="applepodcast"?"background-grey5 rounded-full":""}`,L=`flex items-center w-full py-2 ${i()==="logout"?"background-grey5 rounded-full":""}`,J=`/iconSignout${ie()?"_dm":""}.png`,H=`flex items-center w-full py-2 text-tertiaryTextColor ${i()==="deleteaccount"?"background-grey5 rounded-full":""}`,X=`/iconTrash${ie()?"_dm":""}.svg`;return M!==k.e&&W(u,k.e=M),U!==k.t&&j(d,"src",k.t=U),E!==k.a&&W(h,k.a=E),P!==k.o&&j(f,"src",k.o=P),D!==k.i&&W(g,k.i=D),F!==k.n&&W(v,k.n=F),L!==k.s&&W(w,k.s=L),J!==k.h&&j(I,"src",k.h=J),H!==k.r&&W(S,k.r=H),X!==k.d&&j(C,"src",k.d=X),k},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0}),a})()}function fE(){const[n]=ct(GC),[e,t]=T(""),i=()=>n()?n():[];return(()=>{var s=rE();return s.$$click=r=>r.stopPropagation(),_(s,m($t,{get children(){var r=sE();return _(r,m(xe,{get each(){return i()},children:o=>(()=>{var a=aE(),l=a.firstChild,c=l.nextSibling;return j(l,"src",`${Rs}/user_icons/${o}.png`),c.$$touchend=()=>{t("")},c.$$touchstart=()=>{t(o)},c.$$click=()=>{ke("user","photo",o),$a(void 0,void 0,o)},_(c,m(O,{get when(){return Q.user.photo===o},get children(){return oE()}})),R(()=>W(c,`absolute bottom-0 w-full h-full bg-black ${Q.user.photo===o?"bg-opacity-60":e()==o?"bg-opacity-20":"bg-opacity-0"} rounded-md flex items-center justify-center focus:outline-none`)),a})()})),r}})),s})()}function pE(){const[n,e]=T(!1),[t,i]=T(!1),s=o=>{const a=o.currentTarget.value.trim();a!==""?(ke("user","name",a),$a(a)):o.currentTarget.value=Q.user.name},r=o=>{const a=o.currentTarget.value.trim();ke("user","bio",a),$a(void 0,a)};return(()=>{var o=cE(),a=o.firstChild;return _(a,m(O,{get when(){return Cn()},get fallback(){return(()=>{var l=uE(),c=l.firstChild,u=c.firstChild,d=u.nextSibling;return d.$$click=()=>{se("showUserLogin",!0)},l})()},get children(){var l=lE(),c=l.firstChild,u=c.firstChild,d=u.firstChild,h=d.nextSibling,f=u.nextSibling,g=f.firstChild,v=g.nextSibling,y=f.nextSibling,w=y.firstChild,I=w.firstChild,S=c.nextSibling,C=S.nextSibling,$=C.firstChild,k=$.firstChild,M=k.nextSibling,U=M.firstChild,E=$.nextSibling,P=E.firstChild,D=P.nextSibling,F=D.firstChild,L=E.nextSibling,J=L.firstChild,H=J.nextSibling,X=H.nextSibling,Ge=X.firstChild;return h.$$click=()=>{i(!0)},_(g,()=>Q.user.name),_(v,()=>Q.user.bio),w.$$click=()=>{Ti(),e(!0)},U.$$keydown=de=>{de.key==="Enter"&&s(de)},U.addEventListener("blur",s),F.$$keydown=de=>{de.key==="Enter"&&r(de)},F.addEventListener("blur",r),_(H,m(dE,{get interests(){return Q.user.interests}})),X.$$click=()=>{Ti(),se("showInterestSelection",!0)},R(de=>{var Fe=`${Rs}/user_icons/${Q.user.photo??"crab_padded"}.png`,Ot=`/buttonGear${ie()?"_dm":""}.svg`,Ae=Q.user.name,xn=Q.user.bio,Et=`/buttonEdit${ie()?"_dm":""}.svg`;return Fe!==de.e&&j(d,"src",de.e=Fe),Ot!==de.t&&j(I,"src",de.t=Ot),Ae!==de.a&&j(U,"placeholder",de.a=Ae),xn!==de.o&&j(F,"placeholder",de.o=xn),Et!==de.i&&j(Ge,"src",de.i=Et),de},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),R(()=>U.value=Q.user.name),R(()=>F.value=Q.user.bio),l}})),_(o,m(Wr,{isOpen:n,setIsOpen:e,backgroundStyle:"background-sheet",classH:"h-fit",classZ:"z-40",hasSheetBar:!0,hasCloseButton:!1,get children(){return m(hE,{dismiss:()=>e(!1)})}}),null),_(o,m(Wr,{isOpen:t,setIsOpen:i,backgroundStyle:"background-sheet",classH:"h-fit",classZ:"z-40",hasSheetBar:!0,hasCloseButton:!1,get children(){return m(fE,{})}}),null),o})()}le(["click","touchstart","touchend","keydown"]);var gE=b('<div class="toggle-height flex items-center justify-center flex-row font-sf-rounded text-custom-15"><div class="relative flex h-full toggle-off-background toggle-off-border rounded-full cursor-pointer text-custom-14 font-medium items-center border-custom18 mr-1.5"><div></div><div>1d</div><div>1mo</div></div><div class="flex items-center"></div><button class="text-custom-20 font-semibold toggle-off-background toggle-off-border border-custom18 leading-none w-7 toggle-height rounded-full focus:outline-none pb-0.5 ml-2 mr-6 cursor-pointer">+'),mE=b("<button>");function _E(n){const[e,t]=T("");return m($t,{get children(){var i=gE(),s=i.firstChild,r=s.firstChild,o=r.nextSibling,a=o.nextSibling,l=s.nextSibling,c=l.nextSibling;return s.$$click=()=>{n.setSelectedRecency(n.selectedRecency==="Fresh"?"Recent":"Fresh")},_(l,m(xe,{get each(){return Q.user.interests},children:(u,d)=>(()=>{var h=mE();return h.$$click=()=>n.setSelectedInterest(n.selectedInterest===u?null:u),h.$$touchend=()=>t(""),h.$$touchstart=()=>t(u),_(h,m(Hr,{interest:u})),R(f=>{var g=d(),v=`toggle-height px-1 rounded-full border-custom18 mr-1.5 ${n.selectedInterest===u?"toggle-on-background toggle-on-border theme-primary-text-opposite":"toggle-off-background toggle-off-border "+(e()===u?"opacity-40":"")}`;return g!==f.e&&j(h,"data-index",f.e=g),v!==f.t&&W(h,f.t=v),f},{e:void 0,t:void 0}),h})()})),c.$$click=()=>{Cn()?(Ti(),se("showInterestSelection",!0)):se("showUserLogin",!0)},R(u=>{var d=`absolute w-1/2 h-full toggle-on-background rounded-full transition-transform ${n.selectedRecency==="Fresh"?"transform translate-x-0":"transform translate-x-full"}`,h=`w-8 flex-1 text-center z-10 ${n.selectedRecency==="Fresh"?"theme-primary-text-opposite":"theme-primary-text"}`,f=`w-8 flex-1 text-center z-10 ${n.selectedRecency==="Recent"?"theme-primary-text-opposite":"theme-primary-text"}`;return d!==u.e&&W(r,u.e=d),h!==u.t&&W(o,u.t=h),f!==u.a&&W(a,u.a=f),u},{e:void 0,t:void 0,a:void 0}),i}})}le(["click","touchstart","touchend"]);var vE=b('<div class="flex-col items-start justify-start font-medium space-y-2 pt-3">'),yE=b("<div class=w-fit>"),wE=b('<div class="flex flex-col h-fit rounded-t-xl screen-bottom-safe-space font-sf-rounded font-regular text-custom-16 w-full transition-transform duration-300 ease-in-out background-sheet theme-primary-text"><div class=px-3><div class="flex justify-between items-start pt-1"><div class="local-title leading-none pt-5">Save paper with tag:</div><button class="flex items-center justify-center text-3xl font-sf-rounded font-medium rounded-full flex-no-shrink leading-none">&times;</button></div><div class="flex items-center pt-4 background-sheet space-x-3"><input type=text placeholder="Add new tag..."class="input-text px-3 py-1.5 dark:bg-ColorCommentBox_dm"><button class="flex items-center justify-center pb-0.5 w-5 h-5 text-custom-18 font-sf-rounded font-semibold rounded-full flex-no-shrink leading-none theme-primary-text-opposite bg-black dark:bg-white"> +'),bE=b('<div class="h-[280px] message-tertiary my-4">No existing tag.'),IE=b('<div class="flex items-center"><input type=checkbox class="mr-2 w-4 h-4"><label>');function CE(n){const[e,t]=T([]),[i,s]=T(""),[r,o]=T([]),[a,l]=T(!1);Tn(()=>{t(Ro()),o(Ro().filter(h=>bu(n.paper_id,h)))});const c=()=>{const h=i().trim();h&&!e().includes(h)&&(t([...e(),h]),o([...r(),h]),s(""))},u=()=>{const h=Ro().filter(f=>bu(n.paper_id,f));for(const f of h.filter(g=>!r().includes(g)))CC(n.paper_id,f);for(const f of r().filter(g=>!h.includes(g)))IC(n.paper_id,f);n.onDismiss()},d=h=>{r().includes(h)?o(r().filter(f=>f!==h)):o([...r(),h])};return Ze(()=>{u()}),(()=>{var h=wE(),f=h.firstChild,g=f.firstChild,v=g.firstChild,y=v.nextSibling,w=g.nextSibling,I=w.firstChild,S=I.nextSibling;return f.$$click=C=>C.stopPropagation(),y.$$click=()=>n.onDismiss(),_(f,m(O,{get when(){return e().length>0},get fallback(){return bE()},get children(){var C=yE();return _(C,m(Ei,{height_class:"h-[280px] pr-20",get children(){var $=vE();return _($,m(xe,{get each(){return e().slice().sort()},children:k=>(()=>{var M=IE(),U=M.firstChild,E=U.nextSibling;return U.addEventListener("change",()=>d(k)),j(U,"id",k),j(E,"for",k),_(E,k),R(()=>U.checked=r().includes(k)),M})()})),$}})),C}}),w),w.$$click=C=>C.stopPropagation(),I.addEventListener("blur",()=>l(!1)),I.addEventListener("focus",()=>l(!0)),I.$$input=C=>s(C.currentTarget.value),S.$$click=C=>{C.stopPropagation(),c()},R(C=>(C=a()?"translateY(-350px)":"translateY(0)")!=null?h.style.setProperty("transform",C):h.style.removeProperty("transform")),R(()=>I.value=i()),h})()}le(["click","input"]);var TE=b('<div class="ml-1 font-medium text-custom-16 select-none">Save'),EE=b('<button><div class="flex leading-none items-center"><div class=""><img>');function Ll(n){const[e,t]=T(!1),i=()=>bC(n.paperId);return[(()=>{var s=EE(),r=s.firstChild,o=r.firstChild,a=o.firstChild;return s.$$click=()=>{Cn()?(Ti(),t(!0)):se("showUserLogin",!0)},_(r,m(O,{get when(){return n.hasTextLabel},get children(){return TE()}}),null),R(l=>{var c=`${n.hasTextLabel?"/buttonPaperSave":"/buttonCardSave"}${i()?"On":"Off"}${ie()?"_dm":""}.svg`,u=`${n.hasTextLabel?"w-5 h-5":"card-button-size"}`;return c!==l.e&&j(a,"src",l.e=c),u!==l.t&&W(a,l.t=u),l},{e:void 0,t:void 0}),s})(),m(Wr,{isOpen:e,setIsOpen:t,backgroundStyle:"background-sheet",classH:"h-fit",classZ:"z-40",hasSheetBar:!1,hasCloseButton:!1,get children(){return m(CE,{get paper_id(){return n.paperId},onDismiss:()=>{t(!1)}})}})]}le(["click"]);var SE=b("<button><img class=card-button-size>");function mp(n){const e=()=>Gf(n.paperId),t=()=>{Cn()?e()?Kf(n.paperId):qf(n.paperId):se("showUserLogin",!0)};return m(od,{get children(){var i=SE(),s=i.firstChild;return i.$$click=t,R(()=>j(s,"src",`${e()?ie()?"/buttonCardVoteOn_dm.svg":"/buttonCardVoteOn.svg":ie()?"/buttonCardVoteOff_dm.svg":"/buttonCardVoteOff.svg"}`)),i}})}le(["click"]);var kE=b("<button><img>");function xE(n){const e=Tp(),[t,i]=T(!1),[s,r]=T(!1);return It(()=>{V.currentAudio.audioUrl===Lf(n.paper)?(r(!0),i(V.isPlaying)):(r(!1),i(!1))}),(()=>{var o=kE(),a=o.firstChild;return o.$$click=()=>{V.currentAudio.audioUrl===""&&Yf(),e.setAudioPos({recency:e.selectedRecency(),selectedInterest:e.selectedInterest()}),e.loadAudioQueue(),Or(Df(n.paper),!t())},R(l=>{var c=s()?t()?"/buttonIsAudioOn.gif":"/buttonPlayingGreen.svg":ie()?"/buttonCardSpeaker_dm.svg":"/buttonCardSpeaker.svg",u=s()&&t()?"h-4.8 w-4.8":"card-button-size";return c!==l.e&&j(a,"src",l.e=c),u!==l.t&&W(a,l.t=u),l},{e:void 0,t:void 0}),o})()}le(["click"]);var AE=b('<div class=relative><div class=relative><div><span class=font-medium></span><span class="dark:text-grayCustom text-grayCustom"></span></div><div class="absolute bottom-0 left-0 right-0 flex justify-end items-center gap-0"style=height:1.2em;><div class="px-0 mx-0"></div><button class="bg-ColorCardBackground dark:bg-ColorCardBackground_dm px-0 ml-0 text-custom-13 underline select-none"style=height:100%;>');function $E(n){const[e,t]=T(!1);return(()=>{var i=AE(),s=i.firstChild,r=s.firstChild,o=r.firstChild,a=o.nextSibling,l=r.nextSibling,c=l.firstChild,u=c.nextSibling;return _(o,()=>n.primary_text),_(a,()=>n.secondary_text),u.$$click=()=>t(!e()),_(u,()=>e()?"less":"more"),R(d=>{var h=`leading-[1.28] ${e()?"":"line-clamp-5"} overflow-hidden`,f=`width: 100%; height: 1.2em; background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(${ie()?"28":"255"}, ${ie()?"28":"255"}, ${ie()?"30":"255"}, ${e()?0:1}));`;return h!==d.e&&W(r,d.e=h),d.t=ad(c,f,d.t),d},{e:void 0,t:void 0}),i})()}le(["click"]);var PE=b("<div class=h-2>"),RE=b('<img alt="Paper Image"loading=lazy class="w-[88px] h-[88px] rounded-md object-cover mr-2 shadow-[0px_0.5px_1.5px_rgba(0,0,0,0.5)]">',!0,!1),NE=b('<div class="flex items-start mt-2 mb-2 font-sf-rounded font-regular text-custom-14 leading-none">'),OE=b("<div class=h-1>");function _p(n){return m(O,{get when(){return Y(()=>!!n.paper.tweetFresh)()&&n.paper.tweetFresh.trim()!==""},get children(){return[PE(),(()=>{var e=NE();return _(e,m(O,{get when(){return Y(()=>!!n.paper.imagePath)()&&n.paper.imagePath.trim()!==""},get children(){var t=RE();return R(()=>j(t,"src",`${Rs}/${n.paper.imagePath??""}`)),t}}),null),_(e,m($E,{get primary_text(){return HI(n.paper.tweetHeadline??"")},get secondary_text(){return n.paper.tweetFresh??""}}),null),e})(),OE()]}})}var LE=b("<div>");function ao(n){return(()=>{var e=LE();return _(e,()=>Rf(n.paper.title)),R(()=>W(e,`flex leading-extra-tight items-center card-title ${n.allowSelect?"":"select-none"}`)),e})()}var DE=b('<div class="flex space-x-0.5 pt-1">'),ME=b("<div class=mx-2>");function UE(n){return(()=>{var e=ME();return _(e,m($t,{get children(){var t=DE();return _(t,m(xe,{get each(){return n.interests},children:i=>m(gp,{interest:i})})),t}})),e})()}var FE=b('<button class=flex-shrink-0><img alt=Collapse class="w-4 h-4 ml-1">'),VE=b('<span class="px-1 underline cursor-pointer">+<!> authors,'),WE=b("<div class=card-meta-item><img alt=author-icon class=card-icon-image>");function lo(n){const[e,t]=T(!1);return(()=>{var i=WE(),s=i.firstChild;return _(i,m(O,{get when(){return n.authors.length>3},get fallback(){return m($t,{get children(){return n.authors.join(", ")}})},get children(){return[m(O,{get when(){return e()},get children(){return[m($t,{get children(){return n.authors.join(", ")}}),(()=>{var r=FE(),o=r.firstChild;return r.$$click=()=>t(!1),R(()=>j(o,"src",`${ie()?"/buttonMinus_dm.svg":"/buttonMinus.svg"}`)),r})()]}}),m(O,{get when(){return!e()},get children(){return m($t,{get children(){return[Y(()=>n.authors[0]),",",(()=>{var r=VE(),o=r.firstChild,a=o.nextSibling;return a.nextSibling,r.$$click=()=>t(!0),_(r,()=>n.authors.length-2,a),r})(),Y(()=>n.authors[n.authors.length-1])]}})}})]}}),null),R(()=>j(s,"src",`${ie()?"/buttonAuthor_dm.png":"/buttonAuthor.png"}`)),i})()}le(["click"]);var HE=b("<div class=card-meta-item><img class=card-icon-image>");function co(n){return m(O,{get when(){return Y(()=>!!n.institutes)()&&n.institutes.trim()!==""},get children(){var e=HE(),t=e.firstChild;return _(e,m($t,{get children(){var i;return((i=n.institutes)==null?void 0:i.split(";").join(", "))??""}}),null),R(()=>j(t,"src",`${ie()?"/buttonInstitute_dm.svg":"/buttonInstitute.svg"}`)),e}})}var jE=b("<div class=card-meta-item><img class=card-icon-image>");function Dl(n){return m(O,{get when(){return n.publication},get children(){var e=jE(),t=e.firstChild;return _(e,m($t,{get children(){return n.publication??""}}),null),R(()=>j(t,"src",`${ie()?"/buttonJournal_dm.svg":"/buttonJournal.svg"}`)),e}})}var BE=b("<div class=card-meta-item><img class=card-icon-image>"),zE=b('<button class="flex items-center justify-center h-keywordHeight keyword-tag select-none">');function vp(n){return m(O,{get when(){return n.values.length>0},get children(){var e=BE(),t=e.firstChild;return _(e,m($t,{get children(){return m(xe,{get each(){return n.values},children:i=>(()=>{var s=zE();return s.$$click=()=>{Bf(i),ge.detailPaper&&se("detailPaper",null),$l("Search")},_(s,i),s})()})}}),null),R(()=>j(t,"src",`${ie()?"/buttonTopics_dm.svg":"/buttonTopics.svg"}`)),e}})}le(["click"]);var Du=b("<img alt=Calendar class=card-icon-image>"),GE=b("<span class=select-none>On ArXiv since "),qE=b("<div class=mx-1.5>∙"),KE=b('<button class="flex items-center space-x-0"><img alt="ArXiv ID"class=card-icon-image><span class=underline>'),YE=b("<span class=select-none>"),QE=b('<div class="flex card-meta-item">'),JE=b('<div class="px-1.5 select-none">∙'),Fo=b("<img class=card-icon-image>"),XE=b("<p class=select-none> votes"),Mu=b('<div class="mx-1.5 select-none">∙'),ZE=b("<p class=select-none> comments"),eS=b("<p class=select-none> cited"),tS=b('<div class="card-meta-item w-full overflow-hidden leading-none"><div class=flex>'),nS=b('<div class="flex overflow-x-auto no-scrollbar"><div class=flex-shrink-0></div><div class=flex-shrink-0>'),yp=b('<div class="flex overflow-x-auto no-scrollbar leading-none"><div class=flex-shrink-0>');function wp(n){const{showSpecificDates:e,firstIndexedTime:t,arxivId:i}=n,s=()=>JI(t,i,e,!0);return(()=>{var r=QE();return _(r,m(O,{when:e,get children(){return[m(O,{get when(){return s()},get children(){return[(()=>{var o=Du();return R(()=>j(o,"src",`${ie()?"/buttonCalendar_dm.svg":"/buttonCalendar.svg"}`)),o})(),(()=>{var o=GE();return o.firstChild,_(o,s,null),o})()]}}),qE(),(()=>{var o=KE(),a=o.firstChild,l=a.nextSibling;return o.$$click=()=>ri(`https://arxiv.org/abs/${i}`),_(l,i),R(()=>j(a,"src",`${ie()?"/buttonID_dm.svg":"/buttonID.svg"}`)),o})()]}}),null),_(r,m(O,{when:!e,get children(){return m(O,{get when(){return s()},get children(){return[(()=>{var o=Du();return R(()=>j(o,"src",`${ie()?"/buttonCalendar_dm.svg":"/buttonCalendar.svg"}`)),o})(),(()=>{var o=YE();return _(o,s),o})()]}})}}),null),r})()}function bp(n){const[e]=ct(async()=>await WC(n.id)),[t]=ct(async()=>await MC(n.id));return m(od,{get children(){var i=tS(),s=i.firstChild;return _(i,m(O,{get when(){return Y(()=>!!n.hasInitialDot)()&&((e()??0)+No(n.id)>0||(t()??0)+Hs(n.id)>0||n.citationCount>0)},get children(){return JE()}}),s),_(s,m(O,{get when(){return(e()??0)+No(n.id)>0},get children(){return[(()=>{var r=Fo();return R(()=>j(r,"src",`${ie()?"/buttonVote_dm.svg":"/buttonVote.svg"}`)),r})(),(()=>{var r=XE(),o=r.firstChild;return _(r,()=>(e()??0)+No(n.id),o),r})(),m(O,{get when(){return(t()??0)+Hs(n.id)>0||n.citationCount>0},get children(){return Mu()}})]}}),null),_(s,m(O,{get when(){return(t()??0)+Hs(n.id)>0},get children(){return[(()=>{var r=Fo();return R(()=>j(r,"src",`${ie()?"/buttonComment_dm.svg":"/buttonComment.svg"}`)),r})(),(()=>{var r=ZE(),o=r.firstChild;return _(r,()=>(t()??0)+Hs(n.id),o),r})(),m(O,{get when(){return n.citationCount>0},get children(){return Mu()}})]}}),null),_(s,m(O,{get when(){return n.citationCount>0},get children(){return[(()=>{var r=Fo();return R(()=>j(r,"src",`${ie()?"/buttonCitation_dm.svg":"/buttonCitation.svg"}`)),r})(),(()=>{var r=eS(),o=r.firstChild;return _(r,()=>n.citationCount,o),r})()]}}),null),i}})}function Ip(n){return(()=>{var e=nS(),t=e.firstChild,i=t.nextSibling;return _(t,m(wp,{showSpecificDates:!1,get firstIndexedTime(){return n.paper.firstIndexedTime},get arxivId(){return n.paper.arxivId}})),_(i,m(bp,{hasInitialDot:!0,get id(){return n.paper.id},get citationCount(){return n.paper.citationCount}})),e})()}function iS(n){return(()=>{var e=yp(),t=e.firstChild;return _(t,m(bp,{hasInitialDot:!1,get id(){return n.paper.id},get citationCount(){return n.paper.citationCount}})),e})()}function sS(n){return(()=>{var e=yp(),t=e.firstChild;return _(t,m(wp,{showSpecificDates:!0,get firstIndexedTime(){return n.paper.firstIndexedTime},get arxivId(){return n.paper.arxivId}})),e})()}le(["click"]);var rS=b('<div><div></div><div><div class="mx-2 space-y-0"><div></div><div class="text-ColorSubprimaryText dark:text-ColorSubprimaryText_dm"></div></div><div class=card-buttons-container>');function Uu(n){const[e,t]=T(!1);return(()=>{var i=rS(),s=i.firstChild,r=s.nextSibling,o=r.firstChild,a=o.firstChild,l=a.nextSibling,c=o.nextSibling;return Qe(u=>u,i),s.$$click=()=>{se("detailPaper",null),se("detailPaper",n.paperWithInterests.paper)},s.$$touchend=()=>t(!1),s.$$touchstart=()=>t(!0),_(s,m(UE,{get interests(){return n.paperWithInterests.interests}})),a.$$click=()=>{se("detailPaper",null),se("detailPaper",n.paperWithInterests.paper)},a.$$touchend=()=>t(!1),a.$$touchstart=()=>t(!0),_(a,m(ao,{get paper(){return n.paperWithInterests.paper},allowSelect:!1})),_(l,m(lo,{get authors(){return n.paperWithInterests.paper.authorNames}}),null),_(l,m(co,{get institutes(){return n.paperWithInterests.paper.institutes}}),null),_(l,m(Dl,{get publication(){return Al(n.paperWithInterests.paper)}}),null),_(l,m(Ip,{get paper(){return n.paperWithInterests.paper}}),null),_(o,m(vp,{get values(){return n.paperWithInterests.paper.keywords}}),null),_(o,m(_p,{get paper(){return n.paperWithInterests.paper}}),null),_(c,m(Ll,{get paperId(){return n.paperWithInterests.paper.id},hasTextLabel:!1}),null),_(c,m(mp,{get paperId(){return n.paperWithInterests.paper.id}}),null),_(c,m(xE,{get paper(){return n.paperWithInterests.paper}}),null),R(()=>W(i,`card-container mx-1 my-2 ${e()?"opacity-60":""}`)),i})()}le(["touchstart","touchend","click"]);var oS=b("<img>"),aS=b('<div class="flex justify-between items-center leading-none"><div class="flex-col space-y-0 leading-none"><p class=local-title> <!> </p><p class="pt-0.5 local-subtitle"> </p></div><button><div class="relative w-12 h-12"><img src=/buttonPlayRecommendation.svg class=w-12>');function Fu(n){const e=Tp(),[t,i]=T(!1);return(()=>{var s=aS(),r=s.firstChild,o=r.firstChild,a=o.firstChild,l=a.nextSibling;l.nextSibling;var c=o.nextSibling;c.firstChild;var u=r.nextSibling,d=u.firstChild;return d.firstChild,_(o,()=>e.selectedRecency()=="Fresh"?"Today's Picks":"Monthly Highlights",l),_(c,()=>e.selectedRecency()=="Fresh"?"Picked for you from today's arXiv release":"Top picks for you from last 30 days' arXiv releases",null),u.$$click=()=>{Yf(),e.loadAudioQueue(),e.setAudioPos({recency:e.selectedRecency(),selectedInterest:e.selectedInterest()}),Or({title:`${e.selectedRecency()==="Fresh"?"Tune in for today's picks just for you!":"Tune in for monthly highlights just for you!"}`,audioUrl:Iu,paper:Of()},!0,!0)},u.$$touchend=()=>i(!1),u.$$touchstart=()=>i(!0),_(d,m(O,{get when(){var h;return Y(()=>V.currentAudio.audioUrl===Iu)()&&((h=n.audioPos())==null?void 0:h.recency)===e.selectedRecency()},get children(){var h=oS();return R(f=>{var g=V.isPlaying?"/buttonIsAudioOn.gif":"/buttonPlayingGreen.svg",v=V.isPlaying?"h-3 w-3 absolute top-0.5 right-0.5":"h-2 w-2 absolute top-1 right-1";return g!==f.e&&j(h,"src",f.e=g),v!==f.t&&W(h,f.t=v),f},{e:void 0,t:void 0}),h}}),null),R(()=>W(u,`${ie()?"bg-ColorInterestTagOffBackground_dm":"bg-ColorInterestTagOffBackground"} ${t()?"opacity-40":""} rounded-md shadow-[0px_1px_2px_rgba(0,0,0,0.6)] m-1`)),s})()}le(["touchstart","touchend","click"]);var lS=b('<div class="flex space-x-4 p-2"><div class="rounded-lg background-grey5 h-24 w-24 animate-flash"></div><div class="flex-1 space-y-4 py-1"><div class="h-4 background-grey5 rounded w-3/4 animate-flash"></div><div class=space-y-2><div class="h-4 background-grey5 rounded animate-flash"></div><div class="h-4 background-grey5 rounded w-5/6 animate-flash">');function Na(){return m(xe,{get each(){return Array.from({length:20})},children:()=>lS()})}var cS=b('<div class="flex items-center justify-center w-[50px] h-[50px] rounded-full theme-app-background shadow-[0px_1px_2px_rgba(0,0,0,0.6)]"><img src=/blinking_squares.gif class="background-sheet w-[20px]">'),uS=b('<div class="z-10 fixed top-1/4 flex justify-center w-full transition-transform duration-200 animate-slideDown opacity-95">'),dS=b('<button><img alt="Locate Audio Button"class="w-7.5 h-7.5">'),Vu=b('<div class="px-1 py-2">'),Wu=b("<div class=vertical-scroll-bottom-space>"),hS=b('<div class="screen-top-safe-space mx-0 px-1 pb-2 h-full w-full font-sf-rounded fixed"><div class="mb-2 px-1"></div><div class="overflow-y-scroll box-border w-full h-full no-scrollbar"></div><div class="overflow-y-scroll box-border w-full h-full no-scrollbar">'),fS=b('<div class="flex items-center justify-center px-3 py-1 font-sf-rounded font-regular text-custom-15 rounded-full background-secondarytext theme-primary-text-opposite shadow-[0px_1px_2px_rgba(0,0,0,0.6)]">'),Hu=b('<p class="message-tertiary items-start">No paper found :&#40;'),ju=b("<div>");const Cp=Br();function pS(){const[n,e]=T(!0),[t]=ct(()=>gC,K=>qC(K));let[i,s]=T("Fresh");const[r,o]=T(null),[a,l]=T(null),[c,u]=T(0),[d,h]=T(0),[f,g]=T(!1);let v,y;function w(){u(0),h(0),o(null)}It(qi(()=>[Q.user.interests],()=>{w(),v&&(v.scrollTop=0),y&&(y.scrollTop=0),V.queue.length>0&&Cu("Your selected interests have changed! Tap a paper from the new recommendation list to start listening! 🏠🎧 ",8e3)},{defer:!0})),It(qi(()=>[Dt()],()=>{Dt()==="Home"&&e(!0)})),It(qi(()=>[r(),i()],()=>{v&&(v.scrollTop=0),y&&(y.scrollTop=0)},{defer:!0}));const[I,S]=T(!1),[C,$]=T(!1),[k,{refetch:M}]=ct(()=>({interests:Q.user.interests.filter(()=>!0),batch:c()}),async({batch:K})=>{let ue=[];try{ue=await Eu("Fresh",K)}catch{return S(!0),[[],K]}return[ue,K]}),U=Y(K=>{const[ue,fe]=k()||[[],0];return fe===0?ue:K.concat(ue)},[]),[E,{refetch:P}]=ct(()=>({interests:Q.user.interests,batch:d()}),async({batch:K})=>{let ue=[];try{ue=await Eu("Recent",K)}catch{return $(!0),[[],K]}return[ue,K]}),D=Y(K=>{const[ue,fe]=E()||[[],0];return fe===0?ue:K.concat(ue)},[]),F=()=>{if(v&&i()==="Fresh"&&!I()){const{scrollTop:K,scrollHeight:ue,clientHeight:fe}=v;fe>0&&K+fe+300>=ue&&k.state==="ready"&&u(Ee=>Ee+1)}},L=()=>{if(y&&i()==="Recent"&&!C()){const{scrollTop:K,scrollHeight:ue,clientHeight:fe}=y;fe>0&&K+fe+300>=ue&&E.state==="ready"&&h(Ee=>Ee+1)}};Tn(()=>{setInterval(F,500),setInterval(L,500),v.addEventListener("scroll",F),y.addEventListener("scroll",L)}),Ze(()=>{v.removeEventListener("scroll",F),y.removeEventListener("scroll",L)});const J=()=>U().filter(K=>r()?K.interests.includes(r()):!0),H=()=>D().filter(K=>r()?K.interests.includes(r()):!0),X=()=>{const K=i()==="Fresh"?J():H();Pe("playlistTitle",`${i()==="Fresh"?"Today's Picks":"Monthly Highlights"}${r()?` ⋅ ${r()}`:""}`),Pe("queue",K.map(ue=>Df(ue.paper)))};let[Ge,de]=_s([]),[Fe,Ot]=_s([]);function Ae(){const K=a();if(!K)return;const{recency:ue,selectedInterest:fe}=K;s(ue),o(fe);const Ee=V.queuePos;if(Ee>=0){const St=ue==="Fresh"?Ge.at(Ee):Fe.at(Ee);St==null||St.scrollIntoView({behavior:"smooth"})}else{const St=ue==="Fresh"?v:y;St==null||St.scrollTo({top:0,behavior:"smooth"})}}const xn={selectedRecency:i,selectedInterest:r,loadAudioQueue:X,setAudioPos:l},[Et,Ri]=T(!1),[Ni,zn]=T(""),kp=200;let Oi=null;const xp=K=>{Et()||K.touches[0].clientY>window.innerHeight/3||(Oi=K.touches[0].clientY,zn("Refreshing"))};async function uo(K){const fe=1e3-(Date.now()-K);fe>0&&await new Promise(Ee=>setTimeout(Ee,fe)),zn("All caught up!"),setTimeout(()=>{Ri(!1),Oi=null,zn("")},1e3)}const Ap=async K=>{if(!Oi||Et())return;const fe=K.touches[0].clientY-Oi;if(fe>0&&fe>=kp){Ri(!0);const Ee=Date.now();if(U().length===0){uo(Ee);return}if(await $C(U()[0].paper.id)){uo(Ee);return}await w(),await M(),await P(),uo(Ee),v&&(v.scrollTop=0),y&&(y.scrollTop=0),Cu("Your recommendation are updated! Tap a paper to start listening! 🏠🎧 ",8e3)}},$p=()=>{Et()||(Oi=null)};return m(Cp.Provider,{value:xn,get children(){var K=hS(),ue=K.firstChild,fe=ue.nextSibling,Ee=fe.nextSibling;K.$$touchend=$p,K.$$touchmove=Ap,K.$$touchstart=xp,_(K,m(O,{get when(){return Et()},get children(){var ve=uS();return _(ve,m(O,{get when(){return Ni()==="Refreshing"},get fallback(){return(()=>{var lt=fS();return _(lt,Ni),lt})()},get children(){return cS()}})),ve}}),ue),_(K,m(O,{get when(){return a()&&V.queue.length>0},get children(){var ve=dS(),lt=ve.firstChild;return ve.$$touchend=()=>g(!1),ve.$$touchstart=()=>g(!0),ve.$$click=Ae,R(Ve=>{var Gn=`audio-locating-button-position z-10 w-12 h-12 flex items-center justify-center ${f()?"opacity-40":"opacity-80"} bg-white dark:bg-grey5_dm rounded-full shadow-[0px_1px_2px_rgba(0,0,0,0.6)] focus:outline-none`,Fl=`/buttonLocateAudio${ie()?"_dm":""}.svg`;return Gn!==Ve.e&&W(ve,Ve.e=Gn),Fl!==Ve.t&&j(lt,"src",Ve.t=Fl),Ve},{e:void 0,t:void 0}),ve}}),ue),_(K,m(O,{get when(){return Y(()=>!!(n()&&t()))()&&t()!==""},get children(){return m(pp,{get message(){return zI(t().split("&&&")[0])},yes_text:"Upgrade now!",no_text:"Later",onConfirm:()=>{oo(GI(t().split("&&&")[0])[0]),e(!1)},onCancel:()=>e(!1)})}}),ue),_(ue,m(_E,{get selectedRecency(){return i()},setSelectedRecency:s,get selectedInterest(){return r()},setSelectedInterest:o}));var St=v;typeof St=="function"?Qe(St,fe):v=fe,_(fe,m(O,{get when(){return r()===null},get children(){var ve=Vu();return _(ve,m(Fu,{audioPos:()=>a()})),ve}}),null),_(fe,m(O,{get when(){return!(c()===0&&k.loading)},get fallback(){return Y(()=>!!k.loading)()?m(Na,{}):Hu()},get children(){return[m(xe,{get each(){return J()},children:(ve,lt)=>(()=>{var Ve=ju();return Qe(Gn=>{de(lt(),Gn)},Ve),_(Ve,m(Uu,{paperWithInterests:ve,loadAudioQueue:X})),Ve})()}),Wu()]}}),null);var Ul=y;return typeof Ul=="function"?Qe(Ul,Ee):y=Ee,_(Ee,m(O,{get when(){return r()===null},get children(){var ve=Vu();return _(ve,m(Fu,{audioPos:()=>a()})),ve}}),null),_(Ee,m(O,{get when(){return!(d()===0&&E.loading)},get fallback(){return Y(()=>!!E.loading)()?m(Na,{}):Hu()},get children(){return[m(xe,{get each(){return H()},children:(ve,lt)=>(()=>{var Ve=ju();return Qe(Gn=>{Ot(lt(),Gn)},Ve),_(Ve,m(Uu,{paperWithInterests:ve,loadAudioQueue:X})),Ve})()}),Wu()]}}),null),R(ve=>{var lt=i()==="Fresh"?"block":"none",Ve=i()==="Recent"?"block":"none";return lt!==ve.e&&((ve.e=lt)!=null?fe.style.setProperty("display",lt):fe.style.removeProperty("display")),Ve!==ve.t&&((ve.t=Ve)!=null?Ee.style.setProperty("display",Ve):Ee.style.removeProperty("display")),ve},{e:void 0,t:void 0}),K}})}function Tp(){const n=ws(Cp);if(!n)throw new Error("useAudioContext must be used within a AudioContext.Provider");return n}le(["touchstart","touchmove","touchend","click"]);var gS=b("<div class=vertical-scroll-bottom-space>"),mS=b('<div class="overflow-y-scroll box-border w-full h-full no-scrollbar">');function Ep(n){let e;const[t,i]=T(0),[s,r]=T(!1),[o]=ct(()=>{const c=n.query();if(c)return{searchQuery:c,batch:t()}},async({searchQuery:c,batch:u})=>{let d;try{d=await n.batchFetcher([c,u])}catch{return r(!0),[[],-1]}return[d,u]}),a=()=>{if(e&&!s()){const{scrollTop:c,scrollHeight:u,clientHeight:d}=e;d>0&&c+d+300>=u&&o.state==="ready"&&i(h=>h+1)}};Tn(()=>{e==null||e.addEventListener("scroll",a)}),Ze(()=>{e==null||e.removeEventListener("scroll",a)});const l=Y(c=>{const[u,d]=o()||[[],0];return d===0?u:c.concat(u)},[]);return It(qi(()=>n.query(),()=>{e.scrollTop=0,i(0)},{defer:!0})),(()=>{var c=mS();return Qe(u=>{e=u},c),_(c,m(O,{get when(){return!(o.loading&&t()===0)},get fallback(){return m(Na,{})},get children(){return[m(xe,{get each(){return l()},children:u=>n.render(u)}),gS()]}})),c})()}var _S=b('<div><div class=h-1></div><div class="mx-2 space-y-0"><div></div><div class="text-ColorSubprimaryText dark:text-ColorSubprimaryText_dm"></div></div><div class=card-buttons-container>');function Sp(n){const[e,t]=T(!1);return(()=>{var i=_S(),s=i.firstChild,r=s.nextSibling,o=r.firstChild,a=o.nextSibling,l=r.nextSibling;return o.$$click=()=>{se("detailPaper",null),se("detailPaper",n.paper)},o.$$touchend=()=>t(!1),o.$$touchstart=()=>t(!0),_(o,m(ao,{get paper(){return n.paper},allowSelect:!1})),_(a,m(lo,{get authors(){return n.paper.authorNames}}),null),_(a,m(co,{get institutes(){return n.paper.institutes}}),null),_(a,m(Dl,{get publication(){return Al(n.paper)}}),null),_(a,m(Ip,{get paper(){return n.paper}}),null),_(r,m(vp,{get values(){return n.paper.keywords}}),null),_(r,m(_p,{get paper(){return n.paper}}),null),_(l,m(Ll,{get paperId(){return n.paper.id},hasTextLabel:!1}),null),_(l,m(mp,{get paperId(){return n.paper.id}}),null),R(()=>W(i,`card-container mx-1 my-2 ${e()?"opacity-60":""}`)),i})()}le(["touchstart","touchend","click"]);var vS=b('<button class="flex items-center justify-center text-custom-16 w-4 h-4 pb-0.5 px-1 font-sf-rounded font-medium rounded-full flex-no-shrink leading-none bg-secondaryTextColor dark:bg-secondaryTextColor_dm text-grey5 dark:text-grey5_dm">&times;'),yS=b('<div class="flex-col h-screen screen-top-safe-space mx-auto px-1 pb-2 font-sf-rounded font-regular text-custom-15"><div class="flex items-center mx-1 px-2 background-grey5 rounded-full leading-none text-custom-16 mb-2"><img class=w-3.5><form class=w-full><input placeholder="Paper name, author, topics..."class="input-text py-2 w-full">'),Bu=b('<div class="w-full flex-col items-start justify-start space-y-2"><div class=vertical-scroll-bottom-space>'),wS=b('<div class="flex search-srp-box-height border-black border-custom18 rounded-xl px-2 py-1 mx-1 mt-4 font-regular overflow-y-hidden card-background"><div class="h-full flex-col w-1/2 pr-1.5 justify-start items-start"><div class="flex items-center leading-none py-2.5"><div class="font-semibold text-custom-16 leading-none select-none">Your Recent Search</div><img class="w-3.5 h-3.5 ml-1.5"></div></div><div class="h-full flex-col w-1/2 pr-0.5 justify-start items-start"><div class="flex items-center leading-none py-2.5"><div class="font-semibold text-custom-16 select-none">Trending Topics</div><img class="w-3.5 h-3.5 ml-1.5">'),zu=b("<div class=theme-tertiary-text>Not found :&#40;"),Gu=b('<button><div class="flex w-full text-custom-16"><div class="w-1.5 h-1.5 bg-frogYellowColor text-frogYellowColor mr-0.5 select-none">`</div><div class="line-clamp-2 select-none">');function bS(){let n;const[e,t]=T(""),[i,s]=T(!1),[r,o]=T(""),[a,l]=T(""),[c,u]=T(""),[d]=ct(BC),h=()=>{var y,w;if(!d())return[];const v=c();return v.trim()===""?(y=d())==null?void 0:y.slice(0,20):(w=d())==null?void 0:w.filter(I=>I.toLowerCase().includes(v.trim().toLowerCase())).slice(0,20)},f=()=>{if(Q.user.searchHistory.length===0)return[];const v=c();return v.trim()===""?Q.user.searchHistory.slice(0,20):Q.user.searchHistory.filter(y=>y.toLowerCase().includes(v.trim().toLowerCase())).slice(0,20)},g=v=>{const y=v.trim();y!==""&&(n.blur(),t(y),u(y),s(!0),ke("user","searchHistory",[y,...Q.user.searchHistory.filter(w=>w!==y)]))};return It(()=>{const v=wC();v&&(g(v),Bf(""))}),(()=>{var v=yS(),y=v.firstChild,w=y.firstChild,I=w.nextSibling,S=I.firstChild;return I.addEventListener("submit",C=>{C.preventDefault(),g(c())}),S.$$input=C=>{u(C.currentTarget.value)},S.addEventListener("focus",()=>s(!1)),Qe(C=>n=C,S),_(y,m(O,{get when(){return!i()},get children(){var C=vS();return C.$$click=()=>{u(""),n.focus()},C}}),null),_(v,m(O,{get when(){return i()},get fallback(){return(()=>{var C=wS(),$=C.firstChild,k=$.firstChild,M=k.firstChild,U=M.nextSibling,E=$.nextSibling,P=E.firstChild,D=P.firstChild,F=D.nextSibling;return _($,m(O,{get when(){return Y(()=>!!h())()&&h().length>0},get fallback(){return zu()},get children(){return m(Ei,{height_class:"h-full",get children(){var L=Bu(),J=L.firstChild;return _(L,m(xe,{get each(){return f()},children:H=>(()=>{var X=Gu(),Ge=X.firstChild,de=Ge.firstChild,Fe=de.nextSibling;return X.$$touchend=()=>{o("")},X.$$touchstart=()=>{o(H)},X.$$click=()=>{g(H)},_(Fe,H),R(()=>W(X,`flex w-full whitespace-normal text-left leading-none py-1.5 ${r()===H?"background-grey5 rounded-full":""}`)),X})()}),J),L}})}}),null),_(E,m(O,{get when(){return Y(()=>!!h())()&&h().length>0},get fallback(){return zu()},get children(){return m(Ei,{height_class:"h-full",get children(){var L=Bu(),J=L.firstChild;return _(L,m(xe,{get each(){return h()},children:H=>(()=>{var X=Gu(),Ge=X.firstChild,de=Ge.firstChild,Fe=de.nextSibling;return X.$$touchend=()=>{l("")},X.$$touchstart=()=>{l(H)},X.$$click=()=>{g(H)},_(Fe,H),R(()=>W(X,`flex w-full whitespace-normal text-left leading-none py-1.5 ${a()===H?"background-grey5 rounded-full":""}`)),X})()}),J),L}})}}),null),R(L=>{var J=`/iconClock${ie()?"_dm":""}.svg`,H=`/iconBarChart${ie()?"_dm":""}.svg`;return J!==L.e&&j(U,"src",L.e=J),H!==L.t&&j(F,"src",L.t=H),L},{e:void 0,t:void 0}),C})()},get children(){return m(Ep,{query:e,batchFetcher:([C,$])=>NC(C,$),render:C=>m(Sp,{paper:C})})}}),null),R(()=>j(w,"src",`/iconSearchGlass${ie()?"_dm":""}.svg`)),R(()=>S.value=c()),v})()}le(["input","click","touchstart","touchend"]);var IS=b('<div class="fixed shadow-[0px_-1px_2px_rgba(0,0,0,0.1)] screen-bottom-safe-space-for-footer inset-x-0 bottom-0 flex justify-evenly theme-app-background items-center z-10">'),CS=b("<button><img>");function TS(n){const e=()=>wu.reduce((t,i)=>(t[i]={on:`/icon_${i.toLowerCase()}_on${ie()?"_dm":""}.svg`,off:`/icon_${i.toLowerCase()}_off.svg`},t),{});return m(Wn,{get children(){var t=IS();return _(t,m(xe,{each:wu,children:i=>(()=>{var s=CS(),r=s.firstChild;return s.$$click=()=>{n.setActiveTab(i),se("activeTab",i)},j(r,"alt",i),r.style.setProperty("height","3rem"),R(()=>j(r,"src",n.activeTab===i?e()[i].on:e()[i].off)),s})()})),t}})}le(["click"]);var ES=b('<div class="flex-col w-full items-start font-medium space-y-0">'),SS=b('<div class="card-container py-1 px-1">'),kS=b('<div><div class=flex-grow></div><button class="flex items-center justify-center pb-0.5 w-5 h-5 text-custom-18 font-sf-rounded font-semibold rounded-full flex-no-shrink leading-none theme-primary-text-opposite bg-black dark:bg-white"> &times;'),xS=b('<div class="flex-col items-start justify-start w-full font-medium space-y-0 py-1 px-1">'),AS=b('<div><div class=flex-grow></div><button class="flex items-center justify-center pb-0.5 w-5 h-5 text-custom-18 font-sf-rounded font-semibold rounded-full flex-no-shrink leading-none theme-primary-text-opposite bg-black dark:bg-white"> +'),$S=b('<div class="theme-app-background theme-primary-text rounded-lg h-[86vh] w-full select-none"><div class=px-2><div class="flex items-center justify-between"><div class="local-title py-2">Your interests (<!>)</div><div class=message-warning-text></div></div><div class=text-custom-16></div><div class="flex space-x-3 mb-1 mt-4 pr-2"><input class="input-text w-full flex-grow font-sf-rounded font-regular text-custom-15 rounded-full px-2.5 py-2 focus:outline-none theme-secondary-placeholder theme-primary-text"type=text placeholder="Type your interest or select from below"><button><div class="flex items-center justify-center pb-0.5 w-5 h-5 text-custom-18 font-sf-rounded font-semibold rounded-full flex-no-shrink leading-none theme-primary-text-opposite bg-black dark:bg-white">+</div></button></div><div class=text-custom-16>'),PS=b("<p class=message-tertiary>Loading...");function RS(){const[n,e]=T([]),[t,i]=T(""),[s]=ct(zC),[r,o]=T(""),a=()=>n().map(d=>d.toLowerCase()),l=()=>{const d=s();if(!d)return[];const h=t();return d.filter(f=>f.toLowerCase().includes(h.toLowerCase())&&!a().includes(f.toLowerCase())).slice(0,50)};Tn(()=>{e(Q.user.interests)}),Ze(async()=>{qI(Q.user.interests,n())||(await KC(n()),ke("user","interests",n()))});function c(d){const[h,f]=T("");return(()=>{var g=SS();return _(g,m(Ei,{height_class:"h-[30vh]",get children(){var v=ES();return _(v,m(xe,{get each(){return d.interests},children:y=>(()=>{var w=kS(),I=w.firstChild,S=I.nextSibling;return w.$$touchend=()=>f(""),w.$$touchstart=()=>f(y),_(I,m(Hr,{interest:y})),S.$$click=()=>{e(n().filter(C=>C!=y))},R(()=>W(w,`flex items-center py-2 px-1 ${h()==y?"background-grey5 rounded-full":""}`)),w})()})),v}})),g})()}function u(d){const[h,f]=T("");return m(Ei,{height_class:"max-h-[40vh]",get children(){var g=xS();return _(g,m(xe,{get each(){return d.interests},children:v=>(()=>{var y=AS(),w=y.firstChild,I=w.nextSibling;return y.$$touchend=()=>f(""),y.$$touchstart=()=>f(v),_(w,m(Hr,{interest:v})),I.$$click=()=>{e([...n(),v])},R(()=>W(y,`flex items-center py-2 px-1 ${h()==v?"background-grey5 rounded-full":""}`)),y})()})),g}})}return(()=>{var d=$S(),h=d.firstChild,f=h.firstChild,g=f.firstChild,v=g.firstChild,y=v.nextSibling;y.nextSibling;var w=g.nextSibling,I=f.nextSibling,S=I.nextSibling,C=S.firstChild,$=C.nextSibling,k=$.firstChild,M=S.nextSibling;return d.$$click=U=>U.stopPropagation(),_(g,()=>n().length,y),_(w,r),_(I,m(c,{get interests(){return n()}})),C.$$input=U=>i(U.currentTarget.value),k.$$click=()=>{t().trim()!=""&&(a().includes(t().trim().toLowerCase())?(o("Already on the list!"),setTimeout(()=>{o("")},2e3)):(e([...n(),t().trim()]),i("")))},_(M,m(O,{get when(){return l()},get fallback(){return PS()},get children(){return m(u,{get interests(){return l()}})}})),R(()=>C.value=t()),d})()}le(["touchstart","touchend","click","input"]);var Vo=b("<div class=message-tertiary>Loading..."),Wo=b("<div class=message-warning>"),NS=b('<form class="card-background theme-primary-text flex flex-col space-y-2.5 h-[60vh] max-h-[360px] min-h-[250px] w-[90vw] max-w-[400px] rounded-xl py-audo p-3 font-sf-rounded sf-medium text-custom-16"><p class="local-title py-1">Sign In</p><div class="flex-col space-y-2.5 text-custom-16"><input type=text placeholder=Email class="input-text py-2 font-regular"><input type=password placeholder=Password class="input-text py-2 font-regular"></div><button type=submit class="bg-frogGreenColor text-black py-2 rounded-md border-custom18 border-black font-medium">Sign In</button><div class="flex justify-between text-custom-15 font-medium"><button class=text-frogGreenColor>Forgot Password?</button><div>New user?<button class="text-frogGreenColor text-custom-15 pl-1">Sign Up'),OS=b('<form class="card-background theme-primary-text flex flex-col space-y-2.5 h-[60vh] max-h-[360px] min-h-[250px] w-[90vw] max-w-[400px] rounded-xl py-audo p-3 font-sf-rounded sf-medium text-custom-16"><p class="local-title py-1">Reset Password</p><div class="flex-col space-y-2.5 text-custom-16"><input type=text placeholder=Email class="input-text py-2 font-regular"></div><button type=submit class="bg-frogGreenColor text-black py-2 rounded-md border-custom18 border-black font-medium">Reset Password</button><div class="flex justify-start text-custom-15 font-medium"><div>Go back to<button class="text-frogGreenColor text-custom-15 pl-1">Sign In'),LS=b('<form class="card-background theme-primary-text flex flex-col space-y-2.5 h-[60vh] max-h-[360px] min-h-[250px] w-[90vw] max-w-[400px] rounded-xl py-audo p-3 font-sf-rounded sf-medium text-custom-16"><p class="local-title py-1">Create Account</p><div class="flex-col space-y-2.5 text-custom-16"><input type=text placeholder=Email class="input-text py-2 font-regular"><input type=password placeholder="Password (at least 6 characters)"class="input-text py-2 font-regular"><input type=password placeholder="Repeat password"class="input-text py-2 font-regular"></div><button type=submit class="bg-frogGreenColor text-black py-2 rounded-md border-custom18 border-black font-medium">Sign Up</button><div class="flex justify-start text-custom-15 font-medium"><div>Go back to<button class="text-frogGreenColor text-custom-15 pl-1">Sign In'),Ho=b('<div class="absolute inset-0 flex items-center justify-center">'),DS=b('<div class="flex flex-col justify-center items-center space-y-2.5 h-screen"><div><img class=w-[80px] src=/AppLaunchFrog.gif alt="App launch gif"></div><button class=sign-in-buttons><p class="text-white font-sf-rounded font-medium text-custom-15">Sign in with email</p><img class=w-[18px] src=/iconEnvelope.svg alt="Email Sign In"></button><button class=sign-in-buttons><p class="text-white font-sf-rounded font-medium text-custom-15">Sign in with</p><img class=w-[18px] src=/iconGoogleLogo.png alt="Google / Apple Sign In"><p class="text-white font-sf-rounded font-medium text-custom-15">/</p><img class=w-[18px] src=/iconAppleLogo.png alt="Google / Apple Sign In"></button><button class="font-sf-rounded font-medium text-custom-15 text-frogGreenColor py-1"><p>Continue as guest'),MS=b('<div class="fixed inset-0 flex justify-center bg-black bg-opacity-80 items-center z-40">');function US(){const[n,e]=T(!1),[t,i]=T(!1),[s,r]=T(!1);function o(){const[c,u]=T(""),[d,h]=T(""),[f,g]=T(""),[v,y]=T(!1);async function w(I){I.preventDefault(),y(!0),g("");const S=await WT(c(),d());y(!1),S?g(S):e(!1)}return(()=>{var I=NS(),S=I.firstChild,C=S.nextSibling,$=C.firstChild,k=$.nextSibling,M=C.nextSibling,U=M.nextSibling,E=U.firstChild,P=E.nextSibling,D=P.firstChild,F=D.nextSibling;return I.addEventListener("submit",w),I.$$click=L=>L.stopPropagation(),$.$$input=L=>u(L.currentTarget.value),k.$$input=L=>h(L.currentTarget.value),E.$$click=()=>{e(!1),i(!0)},F.$$click=()=>{e(!1),r(!0)},_(I,m(O,{get when(){return v()},get children(){return Vo()}}),null),_(I,m(O,{get when(){return f()},get children(){var L=Wo();return _(L,f),L}}),null),R(L=>{var J=v(),H=v(),X=v();return J!==L.e&&(M.disabled=L.e=J),H!==L.t&&(E.disabled=L.t=H),X!==L.a&&(F.disabled=L.a=X),L},{e:void 0,t:void 0,a:void 0}),I})()}function a(){const[c,u]=T(""),[d,h]=T(""),[f,g]=T(!1);async function v(y){y.preventDefault(),g(!0),h("");const w=await HT(c());g(!1),h(w||`If there's an account associated with ${c()}, we've sent a reset link to it. Check your inbox and spam folder :)`)}return(()=>{var y=OS(),w=y.firstChild,I=w.nextSibling,S=I.firstChild,C=I.nextSibling,$=C.nextSibling,k=$.firstChild,M=k.firstChild,U=M.nextSibling;return y.addEventListener("submit",v),y.$$click=E=>E.stopPropagation(),S.$$input=E=>u(E.currentTarget.value),U.$$click=()=>{i(!1),e(!0)},_(y,m(O,{get when(){return f()},get children(){return Vo()}}),null),_(y,m(O,{get when(){return d()},get children(){var E=Wo();return _(E,d),E}}),null),R(E=>{var P=f(),D=f();return P!==E.e&&(C.disabled=E.e=P),D!==E.t&&(U.disabled=E.t=D),E},{e:void 0,t:void 0}),y})()}function l(){const[c,u]=T(""),[d,h]=T(""),[f,g]=T(""),[v,y]=T(""),[w,I]=T(!1);async function S(C){if(C.preventDefault(),d()!=f()){y("Your passwords didn’t match :(");return}I(!0),y("");const $=await jT(c(),d());I(!1),y($||`Almost there! We've sent a magic link to ${c()}. Click it to complete your sign-up.`)}return(()=>{var C=LS(),$=C.firstChild,k=$.nextSibling,M=k.firstChild,U=M.nextSibling,E=U.nextSibling,P=k.nextSibling,D=P.nextSibling,F=D.firstChild,L=F.firstChild,J=L.nextSibling;return C.addEventListener("submit",S),C.$$click=H=>H.stopPropagation(),M.$$input=H=>u(H.currentTarget.value),U.$$input=H=>h(H.currentTarget.value),E.$$input=H=>g(H.currentTarget.value),J.$$click=()=>{r(!1),e(!0)},_(C,m(O,{get when(){return w()},get children(){return Vo()}}),null),_(C,m(O,{get when(){return v()},get children(){var H=Wo();return _(H,v),H}}),null),R(H=>{var X=w(),Ge=w();return X!==H.e&&(P.disabled=H.e=X),Ge!==H.t&&(J.disabled=H.t=Ge),H},{e:void 0,t:void 0}),C})()}return m(Wn,{get children(){var c=MS();return c.$$click=()=>se("showUserLogin",!1),_(c,m(O,{get when(){return n()},get children(){var u=Ho();return _(u,m(o,{})),u}}),null),_(c,m(O,{get when(){return t()},get children(){var u=Ho();return _(u,m(a,{})),u}}),null),_(c,m(O,{get when(){return s()},get children(){var u=Ho();return _(u,m(l,{})),u}}),null),_(c,m(O,{get when(){return Y(()=>!n()&&!s())()&&!t()},get children(){var u=DS(),d=u.firstChild,h=d.nextSibling,f=h.nextSibling,g=f.nextSibling;return d.$$click=v=>v.stopPropagation(),h.$$click=v=>{v.stopPropagation(),e(!0)},or(f,"click",qT,!0),g.$$click=()=>se("showUserLogin",!1),u}}),null),c}})}le(["click","input"]);var FS=b('<div class="fixed bottom-0 w-full theme-app-background theme-primary-text screen-bottom-safe-space-for-footer leading-none"><div class="fixed shadow-[0px_-1px_2px_rgba(0,0,0,0.1)] w-full h-[480px] bottom-0 px-2 pt-3 theme-app-background transition-transform duration-300 ease-in-out"><div class="background-grey5 rounded-md flex-col justify-between w-full"><div class="flex flex-grow px-0"><textarea class="custom-scrollbar input-text px-1 py-1.5 text-custom-15 resize-none font-regular theme-secondary-placeholder"></textarea></div><div class="flex justify-end space-x-1 text-custom-15 font-medium pt-2 pb-1 pr-1 "><button><div class="justify-center leading-none w-16 py-0.5 border-custom18 border-ColorPrimaryText dark:border-ColorPrimaryText_dm rounded-full">Send</div></button><button><div class="justify-center leading-none w-16 py-0.5 border-custom18 border-ColorPrimaryText dark:border-ColorPrimaryText_dm rounded-full">Cancel'),VS=b('<div class="mt-2 px-2 font-sf-rounded font-regular text-custom-14 pdv-abstract-box-height overflow-y-auto no-scrollbar">'),WS=b("<div>"),HS=b('<p class="message-tertiary items-start font-medium pt-3">No comment yet.'),jS=b('<div class="p-1 mb-2 card-container"><div class=-mb-1>'),BS=b('<span class="font-semibold mr-1 select-none">·'),zS=b("<span class=select-none>"),GS=b('<div><div class="flex items-center leading-none mr-1.5"><img loading=lazy class="w-4 h-4 rounded-md"></div><div class="flex-1 leading-none"><div class="flex items-center mb-1 pt-0.5"><span class="font-regular mr-1 select-none"></span></div><p class="leading-snug mb-1 font-medium select-none text-ColorSubprimaryText dark:text-ColorSubprimaryText_dm">',!0,!1);function qS(n){const[e,t]=T("");let i;return Tn(()=>{i==null||i.focus()}),(()=>{var s=FS(),r=s.firstChild,o=r.firstChild,a=o.firstChild,l=a.firstChild,c=a.nextSibling,u=c.firstChild,d=u.nextSibling;l.$$input=f=>t(f.currentTarget.value);var h=i;return typeof h=="function"?Qe(h,l):i=l,u.$$click=()=>{let f=YI(e(),ge.detailPaper.id,n.parentId);TC(f),t(""),n.appendCommentFunc(f),n.switchToCommentView(),n.turnOffCommentBox()},d.$$click=()=>{n.turnOffCommentBox()},R(f=>{var g=n.placeholder,v=`${e().trim().length===0?"opacity-30":""}`,y=e().trim().length===0;return g!==f.e&&j(l,"placeholder",f.e=g),v!==f.t&&W(u,f.t=v),y!==f.a&&(u.disabled=f.a=y),f},{e:void 0,t:void 0,a:void 0}),R(()=>l.value=e()),s})()}function KS(n){const[e,t]=T(""),[i]=ct(()=>{var y;return(y=ge.detailPaper)==null?void 0:y.id},y=>y?DC(y):[]),[s,r]=T([]);It(()=>{const y=i();y&&r(y)});const o=y=>{r(w=>[...w,y])},a=Y(()=>{var w;const y={};return(w=s())==null||w.forEach(I=>{const S=I.parentId??"root";y[S]||(y[S]=[]),y[S].push(I.id)}),y}),l=Y(()=>{var y;return(y=s())==null?void 0:y.reduce((w,I)=>(w[I.id]=I,w),{})}),[c,u]=T(""),[d,h]=T(""),f=Y(()=>{const y=[],w=new Set,I=(C,$)=>{var U;w.add(C);const k=(U=l())==null?void 0:U[C];k&&y.push([$,k]);const M=a()[C];if(M)for(const E of M)w.has(E)||I(E,$+1)},S=a().root;if(S)for(const C of S)w.has(C)||I(C,0);return y}),g=y=>{const w=[];let I=[];for(const[S,C]of y)S===0&&I.length>0?(w.push(I),I=[[S,C]]):I.push([S,C]);return I.length>0&&w.push(I),w},v=Y(()=>{const y=f();return g(y)});return(()=>{var y=WS();return _(y,m(O,{get when(){return n.showCommentList},get children(){return m(O,{get when(){return Object.keys(a()).length>0},get fallback(){return HS()},get children(){var w=VS();return _(w,m(xe,{get each(){return v()},children:I=>(()=>{var S=jS(),C=S.firstChild;return _(C,m(xe,{each:I,children:([$,k])=>(()=>{var M=GS(),U=M.firstChild,E=U.firstChild,P=U.nextSibling,D=P.firstChild,F=D.firstChild,L=D.nextSibling;return M.$$touchend=()=>{t("")},M.$$touchstart=()=>{t(k.id)},M.$$click=()=>{Cn()?(u(k.id),h(k.userName),Ti(),n.setShowCommentBox(!0)):se("showUserLogin",!0)},_(F,()=>k.userName),_(D,m(O,{get when(){return vu(k.createdAt)},get children(){return[BS(),(()=>{var J=zS();return _(J,()=>vu(k.createdAt)),J})()]}}),null),_(L,()=>k.content),R(J=>{var H=`flex items-start ml-${$*5} ${e()===k.id?"opacity-40":""}`,X=`${Rs}/user_icons/${k.userPhoto??"crab_padded"}.png`;return H!==J.e&&W(M,J.e=H),X!==J.t&&j(E,"src",J.t=X),J},{e:void 0,t:void 0}),M})()})),S})()})),w}})}}),null),_(y,(()=>{var w=Y(()=>!!n.showCommentBox);return()=>w()&&m(qS,{get placeholder(){return Y(()=>c()==="")()?":) Say something...":`Reply to @${d()}`},turnOffCommentBox:()=>{u(""),h(""),n.setShowCommentBox(!1)},get switchToCommentView(){return n.switchToCommentView},appendCommentFunc:o,get parentId(){return Y(()=>c()==="")()?null:c()}})})(),null),y})()}le(["input","click","touchstart","touchend"]);var YS=b('<div class="flex-col mx-2 mt-2 pdv-abstract-box-height font-regular theme-secondary-text overflow-y-scroll no-scrollbar card-container px-2.5 py-1.5 text-custom-15 leading-snug text-ColorSubprimaryText dark:text-ColorSubprimaryText_dm"><div class=h-20>'),QS=b('<div class="px-1 overflow-y-auto">'),JS=b('<div class="fixed bottom-0 w-full pt-2 theme-app-background theme-primary-text screen-bottom-safe-space"><div class="flex items-center w-full text-custom-16 font-regular space-x-0.5 pl-2 pr-2"><div class="flex flex-grow mr-1"><div class="input-text theme-secondary-text text-custom-15 pl-2">:&#41; Say something...</div></div><div></div><div><button><div class="flex items-center leading-none space-x-1"><img class="w-5 h-5"><span class=select-none>Vote</span></div></button></div><div><img class="w-5 h-5"><div class=select-none>PDF'),XS=b('<div class="fixed theme-primary-text inset-0 flex justify-center z-20 flex-col items-start font-sf-rounded font-regular text-custom-16 h-screen max-h-screen"><div class="screen-top-safe-space bg-frogYellowColor dark:bg-frogNavyColor h-fit w-full"><div class="flex justify-start items-center px-3"><button><img class="w-4 h-4"></button></div><div class=h-full><div class="bg-frogYellowColor dark:bg-frogNavyColor px-3 py-2"><div class=text-custom-17></div><div class=theme-primary-text></div></div></div></div><div class="theme-app-background pb-2 w-full h-full overflow-hidden"><div class="flex flex-col h-full"><div class="flex justify-center items-center font-regular text-custom-15"><div class="w-full mt-2.5 leading-none background-grey5 dark:bg-ColorCardBackground_dm mx-2 mb-0.5 text-center rounded-md px-0.5">'),ZS=b("<button>"),e0=b("<p class=message-tertiary>Loading..."),t0=b("<p class=message-tertiary>Abstract not found :p"),n0=b("<p>");function i0(){const[n,e]=T("Abstract"),[t]=ct(()=>{var f;return(f=ge.detailPaper)==null?void 0:f.id},f=>PC(f)),i=Y(()=>Gf(ge.detailPaper.id)),s=()=>{Cn()?i()?Kf(ge.detailPaper.id):qf(ge.detailPaper.id):se("showUserLogin",!0)},[r,o]=T(!1),[a,l]=T(!1),[c,u]=T(!1),[d,h]=T(!1);return m(Wn,{get children(){var f=XS(),g=f.firstChild,v=g.firstChild,y=v.firstChild,w=y.firstChild,I=v.nextSibling,S=I.firstChild,C=S.firstChild,$=C.nextSibling,k=g.nextSibling,M=k.firstChild,U=M.firstChild,E=U.firstChild;return y.$$click=()=>se("detailPaper",null),Qe(P=>P,I),_(C,m(ao,{get paper(){return ge.detailPaper},allowSelect:!0})),_($,m(lo,{get authors(){return ge.detailPaper.authorNames}}),null),_($,m(co,{get institutes(){return ge.detailPaper.institutes}}),null),_($,m(Dl,{get publication(){return Al(ge.detailPaper)}}),null),_($,m(sS,{get paper(){return ge.detailPaper}}),null),_($,m(iS,{get paper(){return ge.detailPaper}}),null),_(E,()=>["Abstract","Comments","Similar Papers"].map(P=>(()=>{var D=ZS();return D.$$click=()=>e(P),_(D,P),R(()=>W(D,`rounded-md py-1.5 my-0.5 w-1/3 transition-colors select-none ${n()===P?" background-sheet theme-primary-text font-semibold shadow-[0px_1px_1px_rgba(0,0,0,0.3)]":"theme-secondary-text"}`)),D})())),_(M,m(O,{get when(){return n()==="Abstract"},get children(){var P=YS(),D=P.firstChild;return _(P,(()=>{var F=Y(()=>!!t.loading);return()=>F()&&e0()})(),D),_(P,(()=>{var F=Y(()=>!!t.error);return()=>F()&&t0()})(),D),_(P,(()=>{var F=Y(()=>!!t());return()=>F()&&(()=>{var L=n0();return _(L,t),L})()})(),D),P}}),null),_(M,m(O,{get when(){return n()==="Similar Papers"&&ge.detailPaper},get children(){var P=QS();return _(P,m(Ep,{query:()=>ge.detailPaper.id,batchFetcher:([D,F])=>OC(D,F),render:D=>m(Sp,{paper:D})})),P}}),null),_(M,m(KS,{get showCommentList(){return n()==="Comments"},get showCommentBox(){return r()},setShowCommentBox:o,switchToCommentView:()=>e("Comments")}),null),_(M,m(O,{get when(){return!r()},get children(){var P=JS(),D=P.firstChild,F=D.firstChild,L=F.firstChild,J=F.nextSibling,H=J.nextSibling,X=H.firstChild,Ge=X.firstChild,de=Ge.firstChild,Fe=H.nextSibling,Ot=Fe.firstChild;return L.$$click=()=>{Cn()?(Ti(),o(!0)):se("showUserLogin",!0)},J.$$touchend=()=>l(!1),J.$$touchstart=()=>l(!0),_(J,m(Ll,{get paperId(){return ge.detailPaper.id},hasTextLabel:!0})),H.$$touchend=()=>u(!1),H.$$touchstart=()=>u(!0),X.$$click=s,Fe.$$click=()=>oo(`https://arxiv.org/pdf/${ge.detailPaper.arxivId}`),Fe.$$touchend=()=>h(!1),Fe.$$touchstart=()=>h(!0),R(Ae=>{var xn=`flex-shrink-0 flex items-center leading-none px-1 py-1 rounded-full ${a()?"opacity-40":""}`,Et=`flex-shrink-0 flex items-center leading-none px-1 py-1 rounded-full font-medium ${c()?"opacity-40":""}`,Ri=`${i()?"/buttonPaperVoteOn":"/buttonPaperVoteOff"}${ie()?"_dm":""}.svg`,Ni=`flex-shrink-0 flex items-center space-x-1 leading-none px-1 py-1 font-medium rounded-full ${d()?"opacity-40":""}`,zn=`/buttonPDF${ie()?"_dm":""}.svg`;return xn!==Ae.e&&W(J,Ae.e=xn),Et!==Ae.t&&W(H,Ae.t=Et),Ri!==Ae.a&&j(de,"src",Ae.a=Ri),Ni!==Ae.o&&W(Fe,Ae.o=Ni),zn!==Ae.i&&j(Ot,"src",Ae.i=zn),Ae},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),P}}),null),R(()=>j(w,"src",`/buttonGoBack${ie()?"_dm":""}.svg`)),f}})}le(["click","touchstart","touchend"]);var s0=b('<div class="flex leading-none items-center justify-between mx-2 pt-1"><div class="flex space-x-1 leading-none"></div><div class="text-custom-13 text-secondaryTextColor dark:text-secondaryTextColor_dm select-none"> '),r0=b('<img class="w-4 h-4">'),qu=b("<div>");function o0(n){return(()=>{var e=s0(),t=e.firstChild,i=t.nextSibling;return i.firstChild,_(t,m(xe,{get each(){return n.tags},children:s=>(()=>{var r=qu();return _(r,m(O,{get when(){return $f(ji(s.tag))},get fallback(){return(()=>{var o=qu();return _(o,()=>ji(s.tag)),R(()=>W(o,`leading-none select-none px-1 py-0.5 font-medium text-white text-custom-12 bg-${xl(kl(ji(s.tag)))} rounded-lg`)),o})()},get children(){var o=r0();return R(()=>j(o,"src",`/${Af(ji(s.tag))}Off${ie()?"_dm":""}.svg`)),o}})),r})()})),_(i,()=>`Visited ${Pf(n.time)}`,null),e})()}var a0=b('<div><div></div><div class=h-0.5></div><div class="mx-2 pb-1 space-y-0"><div></div><div class="text-ColorSubprimaryText dark:text-ColorSubprimaryText_dm">');function l0(n){const[e,t]=T(!1);return(()=>{var i=a0(),s=i.firstChild,r=s.nextSibling,o=r.nextSibling,a=o.firstChild,l=a.nextSibling;return s.$$click=()=>{se("detailPaper",null),se("detailPaper",n.paper)},s.$$touchend=()=>t(!1),s.$$touchstart=()=>t(!0),_(s,m(o0,{get tags(){return n.tags},get time(){return n.time}})),a.$$click=()=>{se("detailPaper",null),se("detailPaper",n.paper)},a.$$touchend=()=>t(!1),a.$$touchstart=()=>t(!0),_(a,m(ao,{get paper(){return n.paper},allowSelect:!1})),_(l,m(lo,{get authors(){return n.paper.authorNames}}),null),_(l,m(co,{get institutes(){return n.paper.institutes}}),null),R(()=>W(i,`card-container mx-1 my-2 ${e()?"opacity-60":""}`)),i})()}le(["touchstart","touchend","click"]);var c0=b('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=currentColor><path d="M12 0l3.09 7.26L24 9.27l-6 5.73L19.18 24 12 19.77 4.82 24 6 15l-6-5.73 8.91-2.01L12 0z">');function u0(n){const e=n.size||"24",t=n.colorClass||"text-black";return(()=>{var i=c0();return j(i,"width",e),j(i,"height",e),j(i,"class",`inline-block ${t}`),i})()}var d0=b('<div class="flex space-x-1.5 font-sf-rounded font-medium mb-4 mx-1 text-custom-15">'),h0=b(`<div class="flex-col h-[calc(100vh-175px)] overflow-y-scroll box-border w-full no-scrollbar"><div class="flex-col space-y-0.5 leading-none mt-2 mb-4 h-12 mx-1"><p class=local-title>Your Interactions</p><p class=local-subtitle>Papers you've saved, voted, commented, or PDF-annotated</p></div><div class=vertical-scroll-bottom-space>`),f0=b('<div class="flex flex-col px-1 pb-2 screen-top-safe-space font-sf-rounded overflow-hidden">'),p0=b('<div class=message-tertiary><div>Please<button class="underline text-blue-500 px-1">log in</button>to manage your collection'),g0=b('<div class="w-4 h-4 ml-1 mr-0.5"><img>'),m0=b('<button><div><span class="pr-1 select-none">'),_0=b(`<div><div class="flex-col space-y-0.5 leading-none mt-2 mb-4 h-12 mx-1"><p class=local-title>Your Interactions</p><p class=local-subtitle>Papers you've saved, voted, commented, or PDF-annotated</p></div><div class="message-tertiary items-start font-medium">No record yet.`);function v0(){const[n,e]=T(""),t=Y(()=>Q.tags.filter(l=>l.tag.type).reduce((l,c)=>{const{tag:u,paperId:d}=c,h=ji(u);return h!==""&&u&&(l.has(h)?l.get(h).push(d):l.set(h,[d])),l},new Map)),i=Y(()=>Q.tags.filter(l=>l.tag.type).reduce((l,c)=>{const{paperId:u}=c;return l.has(u)?l.get(u).push(c):l.set(u,[c]),l},new Map)),[s]=ct(()=>Q.tags.filter(l=>l.tag.type),async l=>{const c=l.map(u=>u.paperId);return await RC(c)}),r=Y(()=>s.loading||s.error||!s()?[]:s().filter(l=>{var c;return t().has(o())?((c=t().get(o()))==null?void 0:c.includes(l.id))??!1:!0}).map(l=>({paper:l,tag:(i().get(l.id)??[]).reduce((c,u)=>c.createdAt>u.createdAt?c:u,KI)})).sort((l,c)=>l.tag.createdAt>c.tag.createdAt?-1:1).map(l=>{var c;return[l.paper,((c=l.tag)==null?void 0:c.createdAt)||""]})),[o,a]=T("");return(()=>{var l=f0();return _(l,m(O,{get when(){return Cn()},get fallback(){return(()=>{var c=p0(),u=c.firstChild,d=u.firstChild,h=d.nextSibling;return h.$$click=()=>{se("showUserLogin",!0)},c})()},get children(){return[m($t,{get children(){var c=d0();return _(c,m(xe,{get each(){return Array.from(t().keys()).sort()},children:(u,d)=>(()=>{var h=m0(),f=h.firstChild,g=f.firstChild;return h.$$touchend=()=>e(""),h.$$touchstart=()=>e(u),h.$$click=()=>a(o()===u?"":u),_(f,m(O,{get when(){return $f(u)},get fallback(){return m(u0,{get colorClass(){return`text-${xl(kl(u))} leading-none mr-0.5 ml-1 mb-0.5`},size:"15"})},get children(){var v=g0(),y=v.firstChild;return R(()=>j(y,"src",`/${Af(u)}${o()===u?"On":"Off"}${ie()?"_dm":""}.svg`)),v}}),g),_(g,()=>WI(u)),R(v=>{var y=d(),w=`${o()===u?"toggle-on-background toggle-on-border theme-primary-text-opposite":"toggle-off-background toggle-off-border "+(n()===u?"opacity-40":"")} flex items-center justify-center rounded-full border-custom18 leading-none space-x-0.5 toggle-height`;return y!==v.e&&j(h,"data-index",v.e=y),w!==v.t&&W(f,v.t=w),v},{e:void 0,t:void 0}),h})()})),c}}),m(O,{get when(){return r().length>0},get fallback(){return _0()},get children(){var c=h0(),u=c.firstChild,d=u.nextSibling;return _(c,m(xe,{get each(){return r()},children:([h,f])=>m(l0,{paper:h,get tags(){return i().get(h.id)??[]},time:f})}),d),c}})]}})),l})()}le(["click","touchstart","touchend"]);var y0=b('<div class="z-40 fixed top-1/3 flex justify-center w-full opacity-95"><div class="flex flex-col w-[80vw] leading-extra-tight items-center justify-center px-6 py-3 font-sf-rounded font-regular text-custom-14 rounded-full background-secondarytext theme-primary-text-opposite shadow-[0px_1px_2px_rgba(0,0,0,0.6)]"><div></div><div class="w-full leading-none flex justify-end font-semibold px-2 underline cursor-pointer">OK');function w0(){return m(Wn,{get children(){var n=y0(),e=n.firstChild,t=e.firstChild,i=t.nextSibling;return _(t,()=>ge.popupMessage),i.$$click=()=>se("popupMessage",""),n}})}le(["click"]);var Ku;(function(n){n.Year="year",n.Month="month",n.TwoWeeks="twoWeeks",n.Week="week",n.Day="day",n.Hour="hour",n.Minute="minute",n.Second="second"})(Ku||(Ku={}));var Yu;(function(n){n[n.None=0]="None",n[n.Min=1]="Min",n[n.Low=2]="Low",n[n.Default=3]="Default",n[n.High=4]="High"})(Yu||(Yu={}));var Qu;(function(n){n[n.Secret=-1]="Secret",n[n.Private=0]="Private",n[n.Public=1]="Public"})(Qu||(Qu={}));async function b0(){return window.Notification.permission!=="default"?await Promise.resolve(window.Notification.permission==="granted"):await Yt("plugin:notification|is_permission_granted")}async function I0(){return await window.Notification.requestPermission()}function C0(n){typeof n=="string"?new window.Notification(n):new window.Notification(n.title,n)}async function T0(n){await Yt("plugin:notification|register_action_types",{types:n})}async function E0(n){return await fC("notification","notification",n)}var S0=b("<div><div>a</div><div>a</div><div>a</div><div>a</div><div>a</div><div>a</div><div></div><button>NNNN");function k0(){const[n,e]=T(0);Tn(async()=>{let i=await b0();i||(i=await I0()==="granted"),await T0([{id:"messages",actions:[{id:"reply",title:"Reply",input:!0,inputButtonTitle:"Send",inputPlaceholder:"Type your reply..."},{id:"mark-read",title:"Mark as Read",foreground:!1}]}]),E0(s=>{console.log("XXXXXXX",s)})});function t(){e(n()+1),C0({id:1,actionTypeId:"reply",title:`New Message: ${n()}`,body:"You have a new message You have a new message You have a new message You have a new message",ongoing:!0})}return(()=>{var i=S0(),s=i.firstChild,r=s.nextSibling,o=r.nextSibling,a=o.nextSibling,l=a.nextSibling,c=l.nextSibling,u=c.nextSibling,d=u.nextSibling;return _(u,n),d.$$click=()=>{t()},i})()}le(["click"]);var x0=b('<div class="h-screen overscroll-none relative theme-app-background theme-primary-text font-sf-rounded"><div></div><div></div><div></div><div><div></div></div><div>'),A0=b('<div class="flex flex-col justify-start items-center h-screen w-screen theme-app-background"><img class="w-[80px] top-1/2 fixed"src=/AppLaunchFrog.gif alt="App launch gif">');BT();function $0(){const[n,e]=T(!1),t=s=>_C(!!s.matches),i=window.matchMedia("(prefers-color-scheme: dark)");return i.addEventListener("change",t),Tn(()=>{setTimeout(()=>e(!0),1e3)}),Ze(()=>i.removeEventListener("change",t)),[m(yg,{get children(){return m(Ig,{name:"viewport",content:"width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no viewport-fit=cover"})}}),m(O,{get when(){return Y(()=>!!vC())()&&n()},get fallback(){return A0()},get children(){return[(()=>{var s=x0(),r=s.firstChild,o=r.nextSibling,a=o.nextSibling,l=a.nextSibling,c=l.firstChild,u=l.nextSibling;return _(r,m(pS,{})),_(o,m(bS,{})),_(a,m(pE,{})),_(c,m(v0,{})),_(u,m(k0,{})),R(d=>{var h=`absolute inset-0 overscroll-y-none ${Dt()==="Home"?"block":"hidden"}`,f=`absolute inset-0  ${Dt()==="Search"?"block":"hidden"}`,g=`absolute inset-0  ${Dt()==="User"?"block":"hidden"}`,v=`absolute inset-0  ${Dt()==="Collection"?"block":"hidden"}`,y=`absolute inset-0  ${Dt()==="Dev"?"block":"hidden"}`;return h!==d.e&&W(r,d.e=h),f!==d.t&&W(o,d.t=f),g!==d.a&&W(a,d.a=g),v!==d.o&&W(l,d.o=v),y!==d.i&&W(u,d.i=y),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),s})(),m(TS,{get activeTab(){return Dt()},setActiveTab:$l}),m(O,{get when(){return ge.showUserLogin},get children(){return m(US,{})}}),m(Wr,{isOpen:()=>ge.showInterestSelection,setIsOpen:s=>{se("showInterestSelection",s)},backgroundStyle:" bg-ColorSheetBackground dark:bg-ColorAppBackground_dm ",classH:"h-fit",classZ:"z-40",hasSheetBar:!0,hasCloseButton:!1,get children(){return m(RS,{})}}),m(O,{get when(){return ge.detailPaper},get children(){return m(i0,{})}}),m(O,{get when(){return ge.popupMessage!==""},get children(){return m(w0,{})}}),m(uC,{})]}})]}cg(()=>m($0,{}),document.getElementById("root"));export{Yt as i};
