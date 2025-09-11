const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/all-components-nuwHfAv2.js","assets/video-xs9UHEUj.js","assets/form-CDHdIyhs.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const us="modulepreload",ps=function(n){return"/green-testbed/"+n},ot={},Pe=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){let f=function(g){return Promise.all(g.map(_=>Promise.resolve(_).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),h=l?.nonce||l?.getAttribute("nonce");r=f(t.map(g=>{if(g=ps(g),g in ot)return;ot[g]=!0;const _=g.endsWith(".css"),m=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${m}`))return;const w=document.createElement("link");if(w.rel=_?"stylesheet":us,_||(w.as="script"),w.crossOrigin="",w.href=g,h&&w.setAttribute("nonce",h),document.head.appendChild(w),_)return new Promise((B,G)=>{w.addEventListener("load",B),w.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${g}`)))})}))}function i(l){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=l,window.dispatchEvent(h),!h.defaultPrevented)throw l}return r.then(l=>{for(const h of l||[])h.status==="rejected"&&i(h.reason);return e().catch(i)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=globalThis,Ue=he.ShadowRoot&&(he.ShadyCSS===void 0||he.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ge=Symbol(),it=new WeakMap;let At=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ue&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=it.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&it.set(t,e))}return e}toString(){return this.cssText}};const M=n=>new At(typeof n=="string"?n:n+"",void 0,Ge),Le=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((s,r,i)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[i+1],n[0]);return new At(t,n,Ge)},ys=(n,e)=>{if(Ue)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),r=he.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,n.appendChild(s)}},at=Ue?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return M(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:gs,defineProperty:Ss,getOwnPropertyDescriptor:vs,getOwnPropertyNames:_s,getOwnPropertySymbols:ms,getPrototypeOf:bs}=Object,xe=globalThis,lt=xe.trustedTypes,Es=lt?lt.emptyScript:"",ws=xe.reactiveElementPolyfillSupport,oe=(n,e)=>n,Se={toAttribute(n,e){switch(e){case Boolean:n=n?Es:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Ie=(n,e)=>!gs(n,e),ct={attribute:!0,type:String,converter:Se,reflect:!1,useDefault:!1,hasChanged:Ie};Symbol.metadata??=Symbol("metadata"),xe.litPropertyMetadata??=new WeakMap;let J=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ct){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Ss(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:i}=vs(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get:r,set(l){const h=r?.call(this);i?.call(this,l),this.requestUpdate(e,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ct}static _$Ei(){if(this.hasOwnProperty(oe("elementProperties")))return;const e=bs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(oe("properties"))){const t=this.properties,s=[..._s(t),...ms(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(at(r))}else e!==void 0&&t.push(at(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ys(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const i=(s.converter?.toAttribute!==void 0?s.converter:Se).toAttribute(t,s.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const i=s.getPropertyOptions(r),l=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Se;this._$Em=r;const h=l.fromAttribute(t,i.type);this[r]=h??this._$Ej?.get(r)??h,this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){const r=this.constructor,i=this[e];if(s??=r.getPropertyOptions(e),!((s.hasChanged??Ie)(i,t)||s.useDefault&&s.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:i},l){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,l??t??this[e]),i!==!0||l!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,i]of s){const{wrapped:l}=i,h=this[r];l!==!0||this._$AL.has(r)||h===void 0||this.C(r,void 0,i,h)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[oe("elementProperties")]=new Map,J[oe("finalized")]=new Map,ws?.({ReactiveElement:J}),(xe.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je=globalThis,ve=je.trustedTypes,dt=ve?ve.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ct="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,Tt="?"+N,xs=`<${Tt}>`,F=document,ie=()=>F.createComment(""),ae=n=>n===null||typeof n!="object"&&typeof n!="function",Ne=Array.isArray,$s=n=>Ne(n)||typeof n?.[Symbol.iterator]=="function",ke=`[ 	
\f\r]`,se=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,ht=/>/g,V=RegExp(`>|${ke}(?:([^\\s"'>=/]+)(${ke}*=${ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,pt=/"/g,Bt=/^(?:script|style|textarea|title)$/i,As=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),Cs=As(1),Y=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),yt=new WeakMap,q=F.createTreeWalker(F,129);function Mt(n,e){if(!Ne(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return dt!==void 0?dt.createHTML(e):e}const Ts=(n,e)=>{const t=n.length-1,s=[];let r,i=e===2?"<svg>":e===3?"<math>":"",l=se;for(let h=0;h<t;h++){const f=n[h];let g,_,m=-1,w=0;for(;w<f.length&&(l.lastIndex=w,_=l.exec(f),_!==null);)w=l.lastIndex,l===se?_[1]==="!--"?l=ft:_[1]!==void 0?l=ht:_[2]!==void 0?(Bt.test(_[2])&&(r=RegExp("</"+_[2],"g")),l=V):_[3]!==void 0&&(l=V):l===V?_[0]===">"?(l=r??se,m=-1):_[1]===void 0?m=-2:(m=l.lastIndex-_[2].length,g=_[1],l=_[3]===void 0?V:_[3]==='"'?pt:ut):l===pt||l===ut?l=V:l===ft||l===ht?l=se:(l=V,r=void 0);const B=l===V&&n[h+1].startsWith("/>")?" ":"";i+=l===se?f+xs:m>=0?(s.push(g),f.slice(0,m)+Ct+f.slice(m)+N+B):f+N+(m===-2?h:B)}return[Mt(n,i+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class le{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let i=0,l=0;const h=e.length-1,f=this.parts,[g,_]=Ts(e,t);if(this.el=le.createElement(g,s),q.currentNode=this.el.content,t===2||t===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(r=q.nextNode())!==null&&f.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(const m of r.getAttributeNames())if(m.endsWith(Ct)){const w=_[l++],B=r.getAttribute(m).split(N),G=/([.?@])?(.*)/.exec(w);f.push({type:1,index:i,name:G[2],strings:B,ctor:G[1]==="."?Ms:G[1]==="?"?ks:G[1]==="@"?Ps:$e}),r.removeAttribute(m)}else m.startsWith(N)&&(f.push({type:6,index:i}),r.removeAttribute(m));if(Bt.test(r.tagName)){const m=r.textContent.split(N),w=m.length-1;if(w>0){r.textContent=ve?ve.emptyScript:"";for(let B=0;B<w;B++)r.append(m[B],ie()),q.nextNode(),f.push({type:2,index:++i});r.append(m[w],ie())}}}else if(r.nodeType===8)if(r.data===Tt)f.push({type:2,index:i});else{let m=-1;for(;(m=r.data.indexOf(N,m+1))!==-1;)f.push({type:7,index:i}),m+=N.length-1}i++}}static createElement(e,t){const s=F.createElement("template");return s.innerHTML=e,s}}function Q(n,e,t=n,s){if(e===Y)return e;let r=s!==void 0?t._$Co?.[s]:t._$Cl;const i=ae(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(n),r._$AT(n,t,s)),s!==void 0?(t._$Co??=[])[s]=r:t._$Cl=r),r!==void 0&&(e=Q(n,r._$AS(n,e.values),r,s)),e}class Bs{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=(e?.creationScope??F).importNode(t,!0);q.currentNode=r;let i=q.nextNode(),l=0,h=0,f=s[0];for(;f!==void 0;){if(l===f.index){let g;f.type===2?g=new K(i,i.nextSibling,this,e):f.type===1?g=new f.ctor(i,f.name,f.strings,this,e):f.type===6&&(g=new Os(i,this,e)),this._$AV.push(g),f=s[++h]}l!==f?.index&&(i=q.nextNode(),l++)}return q.currentNode=F,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),ae(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==Y&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):$s(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&ae(this._$AH)?this._$AA.nextSibling.data=e:this.T(F.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=le.createElement(Mt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(t);else{const i=new Bs(r,this),l=i.u(this.options);i.p(t),this.T(l),this._$AH=i}}_$AC(e){let t=yt.get(e.strings);return t===void 0&&yt.set(e.strings,t=new le(e)),t}k(e){Ne(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const i of e)r===t.length?t.push(s=new K(this.O(ie()),this.O(ie()),this,this.options)):s=t[r],s._$AI(i),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class $e{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,i){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=$}_$AI(e,t=this,s,r){const i=this.strings;let l=!1;if(i===void 0)e=Q(this,e,t,0),l=!ae(e)||e!==this._$AH&&e!==Y,l&&(this._$AH=e);else{const h=e;let f,g;for(e=i[0],f=0;f<i.length-1;f++)g=Q(this,h[s+f],t,f),g===Y&&(g=this._$AH[f]),l||=!ae(g)||g!==this._$AH[f],g===$?e=$:e!==$&&(e+=(g??"")+i[f+1]),this._$AH[f]=g}l&&!r&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ms extends $e{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}class ks extends $e{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$)}}class Ps extends $e{constructor(e,t,s,r,i){super(e,t,s,r,i),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??$)===Y)return;const s=this._$AH,r=e===$&&s!==$||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==$&&(s===$||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Os{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const cn={I:K},Ds=je.litHtmlPolyfillSupport;Ds?.(le,K),(je.litHtmlVersions??=[]).push("3.3.1");const Rs=(n,e,t)=>{const s=t?.renderBefore??e;let r=s._$litPart$;if(r===void 0){const i=t?.renderBefore??null;s._$litPart$=r=new K(e.insertBefore(ie(),i),i,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=globalThis;let X=class extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Rs(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}};X._$litElement$=!0,X.finalized=!0,He.litElementHydrateSupport?.({LitElement:X});const Us=He.litElementPolyfillSupport;Us?.({LitElement:X});(He.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=new WeakMap,St=n=>{if((t=>t.pattern!==void 0)(n))return n.pattern;let e=gt.get(n);return e===void 0&&gt.set(n,e=new URLPattern({pathname:n.path})),e};let Gs=class{constructor(e,t,s){this.routes=[],this.o=[],this.t={},this.i=r=>{if(r.routes===this)return;const i=r.routes;this.o.push(i),i.h=this,r.stopImmediatePropagation(),r.onDisconnect=()=>{this.o?.splice(this.o.indexOf(i)>>>0,1)};const l=vt(this.t);l!==void 0&&i.goto(l)},(this.l=e).addController(this),this.routes=[...t],this.fallback=s?.fallback}link(e){if(e?.startsWith("/"))return e;if(e?.startsWith("."))throw Error("Not implemented");return e??=this.u,(this.h?.link()??"")+e}async goto(e){let t;if(this.routes.length===0&&this.fallback===void 0)t=e,this.u="",this.t={0:t};else{const s=this.p(e);if(s===void 0)throw Error("No route found for "+e);const r=St(s).exec({pathname:e}),i=r?.pathname.groups??{};if(t=vt(i),typeof s.enter=="function"&&await s.enter(i)===!1)return;this.v=s,this.t=i,this.u=t===void 0?e:e.substring(0,e.length-t.length)}if(t!==void 0)for(const s of this.o)s.goto(t);this.l.requestUpdate()}outlet(){return this.v?.render?.(this.t)}get params(){return this.t}p(e){const t=this.routes.find(s=>St(s).test({pathname:e}));return t||this.fallback===void 0?t:this.fallback?{...this.fallback,path:"/*"}:void 0}hostConnected(){this.l.addEventListener(ce.eventName,this.i);const e=new ce(this);this.l.dispatchEvent(e),this._=e.onDisconnect}hostDisconnected(){this._?.(),this.h=void 0}};const vt=n=>{let e;for(const t of Object.keys(n))/\d+/.test(t)&&(e===void 0||t>e)&&(e=t);return e&&n[e]};class ce extends Event{constructor(e){super(ce.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=e}}ce.eventName="lit-routes-connected";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ls=location.origin||location.protocol+"//"+location.host;class Is extends Gs{constructor(){super(...arguments),this.m=e=>{const t=e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey;if(e.defaultPrevented||t)return;const s=e.composedPath().find(l=>l.tagName==="A");if(s===void 0||s.target!==""||s.hasAttribute("download")||s.getAttribute("rel")==="external")return;const r=s.href;if(r===""||r.startsWith("mailto:"))return;const i=window.location;s.origin===Ls&&(e.preventDefault(),r!==i.href&&(window.history.pushState({},"",r),this.goto(s.pathname)))},this.R=e=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.m),window.addEventListener("popstate",this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.m),window.removeEventListener("popstate",this.R)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const js=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ns={attribute:!0,type:String,converter:Se,reflect:!1,hasChanged:Ie},Hs=(n=Ns,e,t)=>{const{kind:s,metadata:r}=t;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),i.set(t.name,n),s==="accessor"){const{name:l}=t;return{set(h){const f=e.get.call(this);e.set.call(this,h),this.requestUpdate(l,f,n)},init(h){return h!==void 0&&this.C(l,void 0,n,h),h}}}if(s==="setter"){const{name:l}=t;return function(h){const f=this[l];e.call(this,h),this.requestUpdate(l,f,n)}}throw Error("Unsupported decorator location: "+s)};function We(n){return(e,t)=>typeof t=="object"?Hs(n,e,t):((s,r,i)=>{const l=r.hasOwnProperty(i);return r.constructor.createProperty(i,s),l?Object.getOwnPropertyDescriptor(r,i):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ws(n){return We({...n,state:!0,attribute:!1})}var Vs=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,kt=n=>{throw TypeError(n)},ee=(n,e,t,s)=>{for(var r=s>1?void 0:s?qs(e,t):e,i=n.length-1,l;i>=0;i--)(l=n[i])&&(r=(s?l(e,t,r):l(r))||r);return s&&r&&Vs(e,t,r),r},Ve=(n,e,t)=>e.has(n)||kt("Cannot "+t),y=(n,e,t)=>(Ve(n,e,"read from private field"),t?t.call(n):e.get(n)),C=(n,e,t)=>e.has(n)?kt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),H=(n,e,t,s)=>(Ve(n,e,"write to private field"),e.set(n,t),t),j=(n,e,t)=>(Ve(n,e,"access private method"),t);const O="-d59541";class qe{static get instance(){return globalThis.__gdsElementLookupTable?.[O]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[O]:new Map}),globalThis.__gdsElementLookupTable[O]}}const zs=(n,e)=>function(t){var s;return s=class extends t{constructor(){super(...arguments),this.gdsElementName=n}static define(){if(s.isDefined)return;const i=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?n:n+O;customElements.get(i)||(s.isDefined=!0,qe.instance.set(n,i),customElements.define(i,s),e?.dependsOn&&e.dependsOn.forEach(l=>l.define()))}},s.isDefined=!1,s},_t=new WeakMap;function Fs(n,...e){let t=_t.get(n);return t||(t=mt(n),t.raw=mt(n.raw),_t.set(n,t)),[t,...e]}const mt=n=>n.map(e=>{for(const[t,s]of qe.instance.entries())e=e.replace(new RegExp(`${t}(?![-a-z])`,"mg"),s);return e});function Zs(n){return(e,...t)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return n(e,...t);const[s,...r]=Fs(e,...t);return n(s,...r)}}const ne=Zs(Cs);function hn(n){return qe.instance.get(n)??n}var k,_e,U,me,z,P,R,be,I,Pt,re,Ot;class Js{constructor(e){C(this,I),C(this,k,!ze()),C(this,_e,!1),C(this,U,[]),C(this,me,[]),C(this,z,new Map),C(this,P,new Map),C(this,R,[]),C(this,be,[]),this.host=e,this.host.addController(this)}hostConnected(){j(this,I,Ot).call(this)}has(e){return y(this,k)?y(this,P).has(e):y(this,z).has(e)}inject(e,t){j(this,I,Pt).call(this,e,t),j(this,I,re).call(this)}clear(e){y(this,k)?this.host.updateComplete.then(()=>{y(this,P).get(e)?.remove(),y(this,P).delete(e)}):y(this,z).delete(e),j(this,I,re).call(this)}clearAll(){y(this,k)?this.host.updateComplete.then(()=>{y(this,P).forEach(e=>e.remove()),y(this,R).forEach(e=>e.remove()),y(this,P).clear(),H(this,R,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],y(this,z).clear(),H(this,U,[]))}clearInitial(){y(this,k)?this.host.updateComplete.then(()=>{y(this,R).forEach(e=>e.remove()),H(this,R,[])}):H(this,U,[]),j(this,I,re).call(this)}restoreInitial(){y(this,k)?y(this,be).forEach(e=>{y(this,R).push(e.cloneNode(!0))}):H(this,U,[...y(this,me)]),j(this,I,re).call(this)}}k=new WeakMap;_e=new WeakMap;U=new WeakMap;me=new WeakMap;z=new WeakMap;P=new WeakMap;R=new WeakMap;be=new WeakMap;I=new WeakSet;Pt=function(n,e){if(y(this,k)){let t=y(this,P).get(n);t||(t=document.createElement("style"),y(this,P).set(n,t)),t.textContent=e.cssText}else{if(!this.host.shadowRoot||!e.styleSheet)return;y(this,z).set(n,e.styleSheet)}};re=function(){if(y(this,k))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(n=>{n.remove()}),y(this,R).forEach(n=>{this.host.shadowRoot?.appendChild(n)}),y(this,P).forEach(n=>{this.host.shadowRoot?.appendChild(n)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...y(this,U),...Array.from(y(this,z).values())]}};Ot=function(){y(this,_e)||(y(this,k)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(n=>{y(this,R).push(n),y(this,be).push(n.cloneNode(!0))})}):this.host.shadowRoot&&y(this,U).length===0&&(H(this,U,[...this.host.shadowRoot.adoptedStyleSheets||[]]),H(this,me,[...y(this,U)])),H(this,_e,!0))};function ze(){try{return new CSSStyleSheet,!0}catch{return!1}}var bt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Et={};/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var wt;function Xs(){if(wt)return Et;wt=1;var n;return function(e){(function(t){var s=typeof bt=="object"?bt:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),r=i(e);typeof s.Reflect>"u"?s.Reflect=e:r=i(s.Reflect,r),t(r);function i(l,h){return function(f,g){typeof l[f]!="function"&&Object.defineProperty(l,f,{configurable:!0,writable:!0,value:g}),h&&h(f,g)}}})(function(t){var s=Object.prototype.hasOwnProperty,r=typeof Symbol=="function",i=r&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",l=r&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",h=typeof Object.create=="function",f={__proto__:[]}instanceof Array,g=!h&&!f,_={create:h?function(){return Me(Object.create(null))}:f?function(){return Me({__proto__:null})}:function(){return Me({})},has:g?function(o,a){return s.call(o,a)}:function(o,a){return a in o},get:g?function(o,a){return s.call(o,a)?o[a]:void 0}:function(o,a){return o[a]}},m=Object.getPrototypeOf(Function),w=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",B=!w&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:ds(),G=!w&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:fs(),Nt=!w&&typeof WeakMap=="function"?WeakMap:hs(),de=new Nt;function Ht(o,a,c,d){if(x(c)){if(!tt(o))throw new TypeError;if(!st(a))throw new TypeError;return Qt(o,a)}else{if(!tt(o))throw new TypeError;if(!T(a))throw new TypeError;if(!T(d)&&!x(d)&&!Z(d))throw new TypeError;return Z(d)&&(d=void 0),c=D(c),Kt(o,a,c,d)}}t("decorate",Ht);function Wt(o,a){function c(d,p){if(!T(d))throw new TypeError;if(!x(p)&&!os(p))throw new TypeError;Ye(o,a,d,p)}return c}t("metadata",Wt);function Vt(o,a,c,d){if(!T(c))throw new TypeError;return x(d)||(d=D(d)),Ye(o,a,c,d)}t("defineMetadata",Vt);function qt(o,a,c){if(!T(a))throw new TypeError;return x(c)||(c=D(c)),Ze(o,a,c)}t("hasMetadata",qt);function zt(o,a,c){if(!T(a))throw new TypeError;return x(c)||(c=D(c)),Te(o,a,c)}t("hasOwnMetadata",zt);function Ft(o,a,c){if(!T(a))throw new TypeError;return x(c)||(c=D(c)),Je(o,a,c)}t("getMetadata",Ft);function Zt(o,a,c){if(!T(a))throw new TypeError;return x(c)||(c=D(c)),Xe(o,a,c)}t("getOwnMetadata",Zt);function Jt(o,a){if(!T(o))throw new TypeError;return x(a)||(a=D(a)),Qe(o,a)}t("getMetadataKeys",Jt);function Xt(o,a){if(!T(o))throw new TypeError;return x(a)||(a=D(a)),Ke(o,a)}t("getOwnMetadataKeys",Xt);function Yt(o,a,c){if(!T(a))throw new TypeError;x(c)||(c=D(c));var d=te(a,c,!1);if(x(d)||!d.delete(o))return!1;if(d.size>0)return!0;var p=de.get(a);return p.delete(c),p.size>0||de.delete(a),!0}t("deleteMetadata",Yt);function Qt(o,a){for(var c=o.length-1;c>=0;--c){var d=o[c],p=d(a);if(!x(p)&&!Z(p)){if(!st(p))throw new TypeError;a=p}}return a}function Kt(o,a,c,d){for(var p=o.length-1;p>=0;--p){var A=o[p],S=A(a,c,d);if(!x(S)&&!Z(S)){if(!T(S))throw new TypeError;d=S}}return d}function te(o,a,c){var d=de.get(o);if(x(d)){if(!c)return;d=new B,de.set(o,d)}var p=d.get(a);if(x(p)){if(!c)return;p=new B,d.set(a,p)}return p}function Ze(o,a,c){var d=Te(o,a,c);if(d)return!0;var p=Be(a);return Z(p)?!1:Ze(o,p,c)}function Te(o,a,c){var d=te(a,c,!1);return x(d)?!1:ns(d.has(o))}function Je(o,a,c){var d=Te(o,a,c);if(d)return Xe(o,a,c);var p=Be(a);if(!Z(p))return Je(o,p,c)}function Xe(o,a,c){var d=te(a,c,!1);if(!x(d))return d.get(o)}function Ye(o,a,c,d){var p=te(c,d,!0);p.set(o,a)}function Qe(o,a){var c=Ke(o,a),d=Be(o);if(d===null)return c;var p=Qe(d,a);if(p.length<=0)return c;if(c.length<=0)return p;for(var A=new G,S=[],v=0,u=c;v<u.length;v++){var b=u[v],E=A.has(b);E||(A.add(b),S.push(b))}for(var L=0,rt=p;L<rt.length;L++){var b=rt[L],E=A.has(b);E||(A.add(b),S.push(b))}return S}function Ke(o,a){var c=[],d=te(o,a,!1);if(x(d))return c;for(var p=d.keys(),A=is(p),S=0;;){var v=ls(A);if(!v)return c.length=S,c;var u=as(v);try{c[S]=u}catch(b){try{cs(A)}finally{throw b}}S++}}function et(o){if(o===null)return 1;switch(typeof o){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return o===null?1:6;default:return 6}}function x(o){return o===void 0}function Z(o){return o===null}function es(o){return typeof o=="symbol"}function T(o){return typeof o=="object"?o!==null:typeof o=="function"}function ts(o,a){switch(et(o)){case 0:return o;case 1:return o;case 2:return o;case 3:return o;case 4:return o;case 5:return o}var c="string",d=nt(o,i);if(d!==void 0){var p=d.call(o,c);if(T(p))throw new TypeError;return p}return ss(o)}function ss(o,a){var c,d,p;{var A=o.toString;if(fe(A)){var d=A.call(o);if(!T(d))return d}var c=o.valueOf;if(fe(c)){var d=c.call(o);if(!T(d))return d}}throw new TypeError}function ns(o){return!!o}function rs(o){return""+o}function D(o){var a=ts(o);return es(a)?a:rs(a)}function tt(o){return Array.isArray?Array.isArray(o):o instanceof Object?o instanceof Array:Object.prototype.toString.call(o)==="[object Array]"}function fe(o){return typeof o=="function"}function st(o){return typeof o=="function"}function os(o){switch(et(o)){case 3:return!0;case 4:return!0;default:return!1}}function nt(o,a){var c=o[a];if(c!=null){if(!fe(c))throw new TypeError;return c}}function is(o){var a=nt(o,l);if(!fe(a))throw new TypeError;var c=a.call(o);if(!T(c))throw new TypeError;return c}function as(o){return o.value}function ls(o){var a=o.next();return a.done?!1:a}function cs(o){var a=o.return;a&&a.call(o)}function Be(o){var a=Object.getPrototypeOf(o);if(typeof o!="function"||o===m||a!==m)return a;var c=o.prototype,d=c&&Object.getPrototypeOf(c);if(d==null||d===Object.prototype)return a;var p=d.constructor;return typeof p!="function"||p===o?a:p}function ds(){var o={},a=[],c=function(){function S(v,u,b){this._index=0,this._keys=v,this._values=u,this._selector=b}return S.prototype["@@iterator"]=function(){return this},S.prototype[l]=function(){return this},S.prototype.next=function(){var v=this._index;if(v>=0&&v<this._keys.length){var u=this._selector(this._keys[v],this._values[v]);return v+1>=this._keys.length?(this._index=-1,this._keys=a,this._values=a):this._index++,{value:u,done:!1}}return{value:void 0,done:!0}},S.prototype.throw=function(v){throw this._index>=0&&(this._index=-1,this._keys=a,this._values=a),v},S.prototype.return=function(v){return this._index>=0&&(this._index=-1,this._keys=a,this._values=a),{value:v,done:!0}},S}();return function(){function S(){this._keys=[],this._values=[],this._cacheKey=o,this._cacheIndex=-2}return Object.defineProperty(S.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),S.prototype.has=function(v){return this._find(v,!1)>=0},S.prototype.get=function(v){var u=this._find(v,!1);return u>=0?this._values[u]:void 0},S.prototype.set=function(v,u){var b=this._find(v,!0);return this._values[b]=u,this},S.prototype.delete=function(v){var u=this._find(v,!1);if(u>=0){for(var b=this._keys.length,E=u+1;E<b;E++)this._keys[E-1]=this._keys[E],this._values[E-1]=this._values[E];return this._keys.length--,this._values.length--,v===this._cacheKey&&(this._cacheKey=o,this._cacheIndex=-2),!0}return!1},S.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=o,this._cacheIndex=-2},S.prototype.keys=function(){return new c(this._keys,this._values,d)},S.prototype.values=function(){return new c(this._keys,this._values,p)},S.prototype.entries=function(){return new c(this._keys,this._values,A)},S.prototype["@@iterator"]=function(){return this.entries()},S.prototype[l]=function(){return this.entries()},S.prototype._find=function(v,u){return this._cacheKey!==v&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=v)),this._cacheIndex<0&&u&&(this._cacheIndex=this._keys.length,this._keys.push(v),this._values.push(void 0)),this._cacheIndex},S}();function d(S,v){return S}function p(S,v){return v}function A(S,v){return[S,v]}}function fs(){return function(){function o(){this._map=new B}return Object.defineProperty(o.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),o.prototype.has=function(a){return this._map.has(a)},o.prototype.add=function(a){return this._map.set(a,a),this},o.prototype.delete=function(a){return this._map.delete(a)},o.prototype.clear=function(){this._map.clear()},o.prototype.keys=function(){return this._map.keys()},o.prototype.values=function(){return this._map.values()},o.prototype.entries=function(){return this._map.entries()},o.prototype["@@iterator"]=function(){return this.keys()},o.prototype[l]=function(){return this.keys()},o}()}function hs(){var o=16,a=_.create(),c=d();return function(){function u(){this._key=d()}return u.prototype.has=function(b){var E=p(b,!1);return E!==void 0?_.has(E,this._key):!1},u.prototype.get=function(b){var E=p(b,!1);return E!==void 0?_.get(E,this._key):void 0},u.prototype.set=function(b,E){var L=p(b,!0);return L[this._key]=E,this},u.prototype.delete=function(b){var E=p(b,!1);return E!==void 0?delete E[this._key]:!1},u.prototype.clear=function(){this._key=d()},u}();function d(){var u;do u="@@WeakMap@@"+v();while(_.has(a,u));return a[u]=!0,u}function p(u,b){if(!s.call(u,c)){if(!b)return;Object.defineProperty(u,c,{value:_.create()})}return u[c]}function A(u,b){for(var E=0;E<b;++E)u[E]=Math.random()*255|0;return u}function S(u){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(u)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(u)):A(new Uint8Array(u),u):A(new Array(u),u)}function v(){var u=S(o);u[6]=u[6]&79|64,u[8]=u[8]&191|128;for(var b="",E=0;E<o;++E){var L=u[E];(E===4||E===6||E===8)&&(b+="-"),L<16&&(b+="0"),b+=L.toString(16).toLowerCase()}return b}}function Me(o){return o.__=void 0,delete o.__,o}})}(n||(n={})),Et}Xs();function xt(n){return n.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join("")}class Ae extends X{constructor(){super(),this.semanticVersion="2.5.1",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new Js(this)}static define(){}connectedCallback(){super.connectedCallback(),this.setAttribute("gds-element",this.gdsElementName?.toString()||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(e,t){const s={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new Event(e,s)),this.dispatchEvent(new Event(xt(e),s))].every(r=>r!==!1)}dispatchCustomEvent(e,t={}){const s={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new CustomEvent(e,s)),this.dispatchEvent(new CustomEvent(xt(e),s))].every(r=>r!==!1)}}Ae.isDefined=!1;Ae.styleExpressionBaseSelector=":host";ee([Ws()],Ae.prototype,"_isUsingTransitionalStyles",2);const Dt=`/**
 * Do not edit directly, this file was auto-generated.
 */

  --gds-sys-state-hover-state-layer-opacity: 0.1;
  --gds-sys-motion-easing-ease-in: 0.64, 0, 0.78, 0;
  --gds-sys-motion-easing-ease-in-out: 0.83, 0, 0.17, 1;
  --gds-sys-motion-easing-ease-out: 0.22, 1, 0.36, 1;
  --gds-sys-motion-easing-linear: 0, 0, 1, 1;
  --gds-sys-motion-duration-fastest: .2s;
  --gds-sys-motion-duration-fast: .4s;
  --gds-sys-motion-duration-default: .5s;
  --gds-sys-motion-duration-slow: 1s;
  --gds-sys-motion-duration-slowest: 1.5s;
  --gds-sys-viewport-xs: 375;
  --gds-sys-viewport-s: 430;
  --gds-sys-viewport-m: 768;
  --gds-sys-viewport-l: 1024;
  --gds-sys-viewport-xl: 1440;
  --gds-sys-viewport-2xl: 2560;
  --gds-sys-viewport-3xl: 3840;
  --gds-sys-text-family: SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-weight-light: 300;
  --gds-sys-text-weight-regular: 400;
  --gds-sys-text-weight-book: 450;
  --gds-sys-text-weight-medium: 500;
  --gds-sys-text-weight-bold: 700;
  --gds-sys-text-heading-xl: 450 32px/44px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-l: 450 28px/40px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-m: 450 24px/32px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-s: 450 20px/28px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-xs: 450 16px/24px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-2xs: 450 14px/20px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-book-m: 450 16px/20px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-book-s: 450 14px/18px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-book-xs: 450 12px/16px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-regular-m: 400 16px/20px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-regular-s: 400 14px/18px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-regular-xs: 400 12px/16px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-book-l: 450 20px/26px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-book-m: 450 16px/24px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-book-s: 450 14px/20px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-regular-l: 400 20px/26px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-regular-m: 400 16px/24px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-regular-s: 400 14px/20px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-italic-l: italic 400 20px/26px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-italic-m: italic 400 16px/24px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-italic-s: italic 400 14px/20px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-2xl: 450 82px/90px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-xl: 450 64px/72px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-l: 450 48px/56px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-m: 450 36px/44px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-s: 450 32px/40px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-2xl: 450 32px/40px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-xl: 450 28px/36px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-l: 450 24px/32px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-m: 450 20px/28px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-s: 450 18px/26px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-xs: 450 16px/24px SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-space-0: 0px;
  --gds-sys-space-4xs: 1px;
  --gds-sys-space-3xs: 2px;
  --gds-sys-space-2xs: 4px;
  --gds-sys-space-xs: 8px;
  --gds-sys-space-s: 12px;
  --gds-sys-space-m: 16px;
  --gds-sys-space-l: 24px;
  --gds-sys-space-xl: 32px;
  --gds-sys-space-2xl: 40px;
  --gds-sys-space-3xl: 48px;
  --gds-sys-space-4xl: 64px;
  --gds-sys-space-5xl: 80px;
  --gds-sys-space-6xl: 96px;
  --gds-sys-space-7xl: 112px;
  --gds-sys-space-8xl: 120px;
  --gds-sys-space-max: 999px;
  --gds-sys-radius-none: 0px;
  --gds-sys-radius-2xs: 2px;
  --gds-sys-radius-xs: 4px;
  --gds-sys-radius-s: 8px;
  --gds-sys-radius-m: 16px;
  --gds-sys-radius-l: 24px;
  --gds-sys-radius-xl: 32px;
  --gds-sys-radius-2xl: 40px;
  --gds-sys-radius-max: 999px;`,ue=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: dark;
  --gds-sys-color-l1-neutral-01: #0a0b0b;
  --gds-sys-color-l1-neutral-02: #282a29;
  --gds-sys-color-l1-brand-01: #003824;
  --gds-sys-color-l1-inversed: #ffffff;
  --gds-sys-color-l2-neutral-01: #191a1a;
  --gds-sys-color-l2-neutral-02: #191a1a;
  --gds-sys-color-l2-neutral-03: #3b3f3e;
  --gds-sys-color-l2-brand-01: #003824;
  --gds-sys-color-l2-brand-02: #231d10;
  --gds-sys-color-l2-positive-01: #003d26;
  --gds-sys-color-l2-negative-01: #451207;
  --gds-sys-color-l2-warning-01: #482a05;
  --gds-sys-color-l2-information-01: #1e201f;
  --gds-sys-color-l2-notice-01: #00294d;
  --gds-sys-color-l3-brand-01: #d5d7d7;
  --gds-sys-color-l3-brand-02: #efe9dc;
  --gds-sys-color-l3-brand-03: #e7ddcb;
  --gds-sys-color-l3-neutral-01: #d5d7d7;
  --gds-sys-color-l3-neutral-02: #282a29;
  --gds-sys-color-l3-neutral-03: #3b3f3e;
  --gds-sys-color-l3-neutral-04: #3b3f3e;
  --gds-sys-color-l3-positive-01: #026436;
  --gds-sys-color-l3-positive-02: #015130;
  --gds-sys-color-l3-positive-03: #003d26;
  --gds-sys-color-l3-negative-01: #a22911;
  --gds-sys-color-l3-negative-02: #731d0c;
  --gds-sys-color-l3-negative-03: #5c170a;
  --gds-sys-color-l3-notice-01: #005fb3;
  --gds-sys-color-l3-notice-02: #004480;
  --gds-sys-color-l3-notice-03: #003666;
  --gds-sys-color-l3-warning-01: #f19e38;
  --gds-sys-color-l3-warning-02: #774508;
  --gds-sys-color-l3-warning-03: #5f3707;
  --gds-sys-color-l3-information-01: #d5d7d7;
  --gds-sys-color-l3-information-02: #313533;
  --gds-sys-color-l3-information-03: #595f5d;
  --gds-sys-color-l3-disabled-01: #595f5d;
  --gds-sys-color-l3-disabled-02: #595f5d;
  --gds-sys-color-l3-disabled-03: #818886;
  --gds-sys-color-border-interactive: #a0a6a4;
  --gds-sys-color-border-subtle-01: #595f5d;
  --gds-sys-color-border-subtle-02: #777e7c;
  --gds-sys-color-border-strong: #f7f8f7;
  --gds-sys-color-border-inverse: #ffffff;
  --gds-sys-color-border-information-01: #636967;
  --gds-sys-color-border-positive-01: #8ae58d;
  --gds-sys-color-border-negative-01: #f08975;
  --gds-sys-color-border-warning-01: #f5b970;
  --gds-sys-color-border-notice-01: #66b8ff;
  --gds-sys-color-border-information-02: rgba(99, 105, 103, 0.4);
  --gds-sys-color-border-positive-02: rgba(138, 229, 141, 0.4);
  --gds-sys-color-border-negative-02: rgba(240, 137, 117, 0.4);
  --gds-sys-color-border-warning-02: rgba(245, 185, 112, 0.4);
  --gds-sys-color-border-notice-02: rgba(102, 184, 255, 0.4);
  --gds-sys-color-content-neutral-01: #f7f8f7;
  --gds-sys-color-content-neutral-02: #abb0ae;
  --gds-sys-color-content-neutral-03: #0a0b0b;
  --gds-sys-color-content-neutral-04: #595f5d;
  --gds-sys-color-content-inversed: #f7f8f7;
  --gds-sys-color-content-brand-01: #003824;
  --gds-sys-color-content-brand-02: #d6c7a8;
  --gds-sys-color-content-positive-01: #8ae58d;
  --gds-sys-color-content-positive-02: #027839;
  --gds-sys-color-content-positive-03: #8ae58d;
  --gds-sys-color-content-negative-01: #f08975;
  --gds-sys-color-content-negative-02: #f5b0a3;
  --gds-sys-color-content-warning-01: #f5b970;
  --gds-sys-color-content-warning-02: #fce8cf;
  --gds-sys-color-content-notice-01: #66b8ff;
  --gds-sys-color-content-notice-02: #99cfff;
  --gds-sys-color-content-disabled-01: #cacecc;
  --gds-sys-color-content-disabled-02: #cacecc;
  --gds-sys-color-state-brand-01: #000000 20%;
  --gds-sys-color-state-brand-02: #000000 30%;
  --gds-sys-color-state-brand-03: #003824 30%;
  --gds-sys-color-state-brand-04: #003824 70%;
  --gds-sys-color-state-brand-05: #003824 50%;
  --gds-sys-color-state-brand-06: #003824 90%;
  --gds-sys-color-state-neutral-01: #000000 20%;
  --gds-sys-color-state-neutral-02: #000000 35%;
  --gds-sys-color-state-neutral-03: #ffffff 20%;
  --gds-sys-color-state-neutral-04: #ffffff 30%;
  --gds-sys-color-state-neutral-05: #ffffff 12%;
  --gds-sys-color-state-neutral-06: #ffffff 25%;
  --gds-sys-color-state-positive-01: #000000 12%;
  --gds-sys-color-state-positive-02: #000000 23%;
  --gds-sys-color-state-positive-03: #ffffff 8%;
  --gds-sys-color-state-positive-04: #ffffff 14%;
  --gds-sys-color-state-positive-05: #027839 30%;
  --gds-sys-color-state-positive-06: #027839 50%;
  --gds-sys-color-state-negative-01: #000000 15%;
  --gds-sys-color-state-negative-02: #000000 30%;
  --gds-sys-color-state-negative-03: #ffffff 8%;
  --gds-sys-color-state-negative-04: #ffffff 14%;
  --gds-sys-color-state-negative-05: #b92f13 30%;
  --gds-sys-color-state-negative-06: #b92f13 45%;
  --gds-sys-color-state-notice-01: #000000 12%;
  --gds-sys-color-state-notice-02: #000000 20%;
  --gds-sys-color-state-notice-03: #ffffff 6%;
  --gds-sys-color-state-notice-04: #ffffff 10%;
  --gds-sys-color-state-notice-05: #005fb3 40%;
  --gds-sys-color-state-notice-06: #005fb3 60%;
  --gds-sys-color-state-warning-01: #000000 6%;
  --gds-sys-color-state-warning-02: #000000 14%;
  --gds-sys-color-state-warning-03: #ffffff 8%;
  --gds-sys-color-state-warning-04: #ffffff 14%;
  --gds-sys-color-state-warning-05: #f19e38 12%;
  --gds-sys-color-state-warning-06: #f19e38 20%;`,Oe=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: light;
  --gds-sys-color-l1-neutral-01: #ffffff;
  --gds-sys-color-l1-neutral-02: #eaebeb;
  --gds-sys-color-l1-brand-01: #003824;
  --gds-sys-color-l1-inversed: #0a0b0b;
  --gds-sys-color-l2-neutral-01: #f7f8f7;
  --gds-sys-color-l2-neutral-02: #ffffff;
  --gds-sys-color-l2-neutral-03: #0a0b0b;
  --gds-sys-color-l2-brand-01: #003824;
  --gds-sys-color-l2-brand-02: #f8f6f1;
  --gds-sys-color-l2-positive-01: #f1f9f1;
  --gds-sys-color-l2-negative-01: #fef7f6;
  --gds-sys-color-l2-warning-01: #fef8f1;
  --gds-sys-color-l2-information-01: #f7f8f7;
  --gds-sys-color-l2-notice-01: #f5faff;
  --gds-sys-color-l3-brand-01: #003824;
  --gds-sys-color-l3-brand-02: #efe9dc;
  --gds-sys-color-l3-brand-03: #e7ddcb;
  --gds-sys-color-l3-neutral-01: #0a0b0b;
  --gds-sys-color-l3-neutral-02: #eaebeb;
  --gds-sys-color-l3-neutral-03: #d5d7d7;
  --gds-sys-color-l3-neutral-04: #ffffff;
  --gds-sys-color-l3-positive-01: #027839;
  --gds-sys-color-l3-positive-02: #dcefdc;
  --gds-sys-color-l3-positive-03: #cceacc;
  --gds-sys-color-l3-negative-01: #b92f13;
  --gds-sys-color-l3-negative-02: #fdebe8;
  --gds-sys-color-l3-negative-03: #fad8d1;
  --gds-sys-color-l3-notice-01: #005fb3;
  --gds-sys-color-l3-notice-02: #e6f3ff;
  --gds-sys-color-l3-notice-03: #cce7ff;
  --gds-sys-color-l3-warning-01: #8f530a;
  --gds-sys-color-l3-warning-02: #fce8cf;
  --gds-sys-color-l3-warning-03: #fadcb7;
  --gds-sys-color-l3-information-01: #0a0b0b;
  --gds-sys-color-l3-information-02: #eaebeb;
  --gds-sys-color-l3-information-03: #dfe1e1;
  --gds-sys-color-l3-disabled-01: #eff0f0;
  --gds-sys-color-l3-disabled-02: #a0a6a4;
  --gds-sys-color-l3-disabled-03: #eff0f0;
  --gds-sys-color-border-interactive: #777e7c;
  --gds-sys-color-border-subtle-01: #dfe1e1;
  --gds-sys-color-border-subtle-02: #eff0f0;
  --gds-sys-color-border-strong: #0a0b0b;
  --gds-sys-color-border-inverse: #ffffff;
  --gds-sys-color-border-information-01: #0a0b0b;
  --gds-sys-color-border-positive-01: #027839;
  --gds-sys-color-border-negative-01: #b92f13;
  --gds-sys-color-border-warning-01: #8f530a;
  --gds-sys-color-border-notice-01: #005fb3;
  --gds-sys-color-border-information-02: rgba(10, 11, 11, 0.4);
  --gds-sys-color-border-positive-02: rgba(2, 120, 57, 0.4);
  --gds-sys-color-border-negative-02: rgba(185, 47, 19, 0.4);
  --gds-sys-color-border-warning-02: rgba(143, 83, 10, 0.4);
  --gds-sys-color-border-notice-02: rgba(0, 95, 179, 0.4);
  --gds-sys-color-content-neutral-01: #0a0b0b;
  --gds-sys-color-content-neutral-02: #636967;
  --gds-sys-color-content-neutral-03: #ffffff;
  --gds-sys-color-content-neutral-04: #a0a6a4;
  --gds-sys-color-content-inversed: #ffffff;
  --gds-sys-color-content-brand-01: #003824;
  --gds-sys-color-content-brand-02: #685631;
  --gds-sys-color-content-positive-01: #027839;
  --gds-sys-color-content-positive-02: #eaf6ea;
  --gds-sys-color-content-positive-03: #026436;
  --gds-sys-color-content-negative-01: #b92f13;
  --gds-sys-color-content-negative-02: #fdebe8;
  --gds-sys-color-content-warning-01: #8f530a;
  --gds-sys-color-content-warning-02: #fce8cf;
  --gds-sys-color-content-notice-01: #005fb3;
  --gds-sys-color-content-notice-02: #e6f3ff;
  --gds-sys-color-content-disabled-01: #a0a6a4;
  --gds-sys-color-content-disabled-02: #f7f8f7;
  --gds-sys-color-state-brand-01: #ffffff 20%;
  --gds-sys-color-state-brand-02: #ffffff 35%;
  --gds-sys-color-state-brand-03: #003824 6%;
  --gds-sys-color-state-brand-04: #003824 14%;
  --gds-sys-color-state-brand-05: #003824 6%;
  --gds-sys-color-state-brand-06: #003824 14%;
  --gds-sys-color-state-neutral-01: #ffffff 20%;
  --gds-sys-color-state-neutral-02: #ffffff 35%;
  --gds-sys-color-state-neutral-03: #000000 6%;
  --gds-sys-color-state-neutral-04: #000000 14%;
  --gds-sys-color-state-neutral-05: #000000 6%;
  --gds-sys-color-state-neutral-06: #000000 14%;
  --gds-sys-color-state-positive-01: #ffffff 12%;
  --gds-sys-color-state-positive-02: #ffffff 23%;
  --gds-sys-color-state-positive-03: #027839 8%;
  --gds-sys-color-state-positive-04: #027839 16%;
  --gds-sys-color-state-positive-05: #027839 8%;
  --gds-sys-color-state-positive-06: #027839 16%;
  --gds-sys-color-state-negative-01: #ffffff 8%;
  --gds-sys-color-state-negative-02: #ffffff 16%;
  --gds-sys-color-state-negative-03: #b92f13 8%;
  --gds-sys-color-state-negative-04: #b92f13 16%;
  --gds-sys-color-state-negative-05: #b92f13 8%;
  --gds-sys-color-state-negative-06: #b92f13 16%;
  --gds-sys-color-state-notice-01: #ffffff 20%;
  --gds-sys-color-state-notice-02: #ffffff 35%;
  --gds-sys-color-state-notice-03: #005fb3 8%;
  --gds-sys-color-state-notice-04: #005fb3 16%;
  --gds-sys-color-state-notice-05: #005fb3 8%;
  --gds-sys-color-state-notice-06: #005fb3 16%;
  --gds-sys-color-state-warning-01: #ffffff 20%;
  --gds-sys-color-state-warning-02: #ffffff 35%;
  --gds-sys-color-state-warning-03: #8f530a 8%;
  --gds-sys-color-state-warning-04: #8f530a 16%;
  --gds-sys-color-state-warning-05: #8f530a 8%;
  --gds-sys-color-state-warning-06: #8f530a 16%;`,Rt=`/**
 * Do not edit directly, this file was auto-generated.
 */

  --gds-sys-shadow-s-01: 0px 0px 2px 0px #060D1314;
  --gds-sys-shadow-s-02: 0px 0px 0px 0px transparent;
  --gds-sys-shadow-m-01: 0px 4px 8px -2px #060D131a;
  --gds-sys-shadow-m-02: 0px 2px 4px -2px #060D130f;
  --gds-sys-shadow-l-01: 0px 20px 24px -4px #060D1314;
  --gds-sys-shadow-l-02: 0px 8px 8px -4px #060D1308;
  --gds-sys-shadow-xl-01: 0px 24px 48px -12px #060D132e;
  --gds-sys-shadow-xl-02: 0px 0px 0px 0px transparent;`;var Ys={};const Ce=typeof process<"u"&&Ys!==void 0,un=/iPad|iPhone|iPod/.test(Ce?"":navigator.userAgent);var De,Ee,we,Fe,pe,Ut,Gt;function Qs(){return Ce?[]:document.adoptedStyleSheets||[]}const Ks=class Lt{constructor(){C(this,pe),C(this,De,!ze()),C(this,Ee,new Map),C(this,we,new Map),C(this,Fe,Qs())}static get instance(){return globalThis.__gdsGlobalStylesRegistryScoped?.[O]||(globalThis.__gdsGlobalStylesRegistryScoped={...globalThis.__gdsGlobalStylesRegistryScoped,[O]:new Lt}),globalThis.__gdsGlobalStylesRegistryScoped[O]}injectGlobalStyles(e,t){if(y(this,De)){const s=Array.isArray(t)?t.map(r=>r.toString()).join(""):t.toString();j(this,pe,Ut).call(this,e,s)}else t.styleSheet&&j(this,pe,Gt).call(this,e,t.styleSheet)}};De=new WeakMap;Ee=new WeakMap;we=new WeakMap;Fe=new WeakMap;pe=new WeakSet;Ut=function(n,e){if(Ce)return;let t=y(this,we).get(n);t||(t=document.createElement("style"),y(this,we).set(n,t)),t.textContent=e,document.head.appendChild(t)};Gt=function(n,e){Ce||(y(this,Ee).set(n,e),document.adoptedStyleSheets=[...y(this,Fe),...Array.from(y(this,Ee).values())])};let en=Ks;const tn=[Le`
    :host {
      ${M(Dt)}
      ${M(Rt)}
    }
  `];en.instance.injectGlobalStyles("root-tokens",Le`
    :root,
    :root[gds-theme='light'] {
      ${M(Dt)}
      ${M(Rt)}
      ${M(Oe)}
    }
    :root[gds-theme='dark'] {
      ${M(ue)}
    }
  `);var ye,ge,Re;const sn=class It{constructor(){C(this,ye,new Map),C(this,ge,new Map),C(this,Re,!ze())}static get instance(){return globalThis.__gdsTransitionalStyles?.[O]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[O]:new It}),globalThis.__gdsTransitionalStyles[O]}apply(e,t){if(!e.shadowRoot)return;const s=y(this,ye).get(t);s&&(y(this,ge).set(t,e),this.applyToElement(t,s))}applyToElement(e,t){const s=y(this,ge).get(e);if(!s||!s.shadowRoot)return;const r=()=>{s._dynamicStylesController.clearInitial(),s._dynamicStylesController.inject("t-styles",M(t)),s._isUsingTransitionalStyles=!0},i=()=>{s._isUsingTransitionalStyles=!1,s._dynamicStylesController.clear("t-styles"),s._dynamicStylesController.restoreInitial()},l="[gds-element=gds-theme]";let h=s.getRootNode(),f=s.closest(l);for(;f===null&&h!==document;)f=h.host?.closest(l),h=h.host?.getRootNode();if(f){const g=f,_=()=>{g.designVersion==="2023"?i():r()};if(g.addEventListener("gds-design-version-changed",_),s.addEventListener("gds-element-disconnected",()=>g.removeEventListener("gds-design-version-changed",_)),g.designVersion==="2023"){i();return}}r()}register(e,t){let s=t;y(this,Re)&&(s=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${t}`),y(this,ye).set(e,s),this.applyToElement(e,s)}};ye=new WeakMap;ge=new WeakMap;Re=new WeakMap;let nn=sn;function jt(n,e){const t={waitUntilFirstUpdate:!1,...e};return(s,r,i)=>{const{update:l}=s,h=Array.isArray(n)?n:[n];s.update=function(f){h.forEach(g=>{const _=g;if(f.has(_)){const m=f.get(_),w=this[_];m!==w&&(!t.waitUntilFirstUpdate||this.hasUpdated)&&i.value?.call(this,m,w)}}),l.call(this,f)}}}let W=class extends Ae{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2023"}connectedCallback(){super.connectedCallback(),nn.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",M(`:host {${ue}}`))}render(){return ne`<slot></slot>`}_onColorSchemeChange(){switch(this.colorScheme){case"dark":this._dynamicStylesController.inject("color-scheme",M(`:host { ${ue}}`));break;case"light":this._dynamicStylesController.inject("color-scheme",M(`:host { ${Oe}}`));break;case"auto":default:this._dynamicStylesController.inject("color-scheme",M(`:host { ${Oe}} @media (prefers-color-scheme: dark) { :host { ${ue} } }`));break}this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};W.styles=[tn,Le`
      :host {
        display: contents;
        color: var(--gds-sys-color-content-neutral-01);
        font-family: var(--gds-sys-text-family);
      }
    `];ee([We({reflect:!0,attribute:"color-scheme"})],W.prototype,"colorScheme",2);ee([We({reflect:!0,attribute:"design-version"})],W.prototype,"designVersion",2);ee([jt("colorScheme")],W.prototype,"_onColorSchemeChange",1);ee([jt("designVersion")],W.prototype,"_onDesignVersionChange",1);W=ee([zs("gds-theme")],W);var rn=Object.getOwnPropertyDescriptor,on=(n,e,t,s)=>{for(var r=s>1?void 0:s?rn(e,t):e,i=n.length-1,l;i>=0;i--)(l=n[i])&&(r=l(r)||r);return r};W.define();globalThis.URLPattern||await Pe(()=>import("./index-DPyTNidZ.js"),[]);let $t=class extends X{constructor(){super(...arguments),this._router=new Is(this,[{path:"/",render:()=>ne`<h1>Green testbed</h1>`},{path:"/green-testbed/all-components",render:()=>ne`<all-components></all-components>`,enter:async n=>{await Pe(()=>import("./all-components-nuwHfAv2.js"),__vite__mapDeps([0,1]))}},{path:"/green-testbed/form",render:()=>ne`<form-view></form-view>`,enter:async n=>{await Pe(()=>import("./form-CDHdIyhs.js"),__vite__mapDeps([2,1]))}}])}createRenderRoot(){return this}render(){return ne`<gds-theme><main>${this._router.outlet()}</main></gds-theme>`}};$t=on([js("green-testbed-main")],$t);export{$ as E,Ae as G,Y as T,cn as Z,ee as _,Le as a,tn as b,Ce as c,C as d,j as e,y as f,zs as g,ne as h,X as i,H as j,nn as k,Ws as l,hn as m,We as n,en as o,un as p,W as q,M as r,js as t,jt as w,Cs as x};
