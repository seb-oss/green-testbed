const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/all-components-YBiDzWZI.js","assets/video-D8uIHllm.js","assets/form-DGN8y5hE.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();const Cs="modulepreload",Ts=function(n){return"/green-testbed/"+n},ue={},It=function(t,e,s){let r=Promise.resolve();if(e&&e.length>0){let f=function(g){return Promise.all(g.map(u=>Promise.resolve(u).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),h=l?.nonce||l?.getAttribute("nonce");r=f(e.map(g=>{if(g=Ts(g),g in ue)return;ue[g]=!0;const u=g.endsWith(".css"),v=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${v}`))return;const x=document.createElement("link");if(x.rel=u?"stylesheet":Cs,u||(x.as="script"),x.crossOrigin="",x.href=g,h&&x.setAttribute("nonce",h),document.head.appendChild(x),u)return new Promise((T,H)=>{x.addEventListener("load",T),x.addEventListener("error",()=>H(new Error(`Unable to preload CSS for ${g}`)))})}))}function i(l){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=l,window.dispatchEvent(h),!h.defaultPrevented)throw l}return r.then(l=>{for(const h of l||[])h.status==="rejected"&&i(h.reason);return t().catch(i)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St=globalThis,qt=St.ShadowRoot&&(St.ShadyCSS===void 0||St.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ft=Symbol(),pe=new WeakMap;let Re=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Ft)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(qt&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=pe.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&pe.set(e,t))}return t}toString(){return this.cssText}};const O=n=>new Re(typeof n=="string"?n:n+"",void 0,Ft),kt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((s,r,i)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[i+1],n[0]);return new Re(e,n,Ft)},ks=(n,t)=>{if(qt)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),r=St.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,n.appendChild(s)}},ye=qt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return O(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ms,defineProperty:Bs,getOwnPropertyDescriptor:Ps,getOwnPropertyNames:Os,getOwnPropertySymbols:Ds,getPrototypeOf:Rs}=Object,Mt=globalThis,ge=Mt.trustedTypes,Us=ge?ge.emptyScript:"",Gs=Mt.reactiveElementPolyfillSupport,dt=(n,t)=>n,wt={toAttribute(n,t){switch(t){case Boolean:n=n?Us:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Zt=(n,t)=>!Ms(n,t),Se={attribute:!0,type:String,converter:wt,reflect:!1,useDefault:!1,hasChanged:Zt};Symbol.metadata??=Symbol("metadata"),Mt.litPropertyMetadata??=new WeakMap;let st=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Se){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Bs(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:i}=Ps(this.prototype,t)??{get(){return this[e]},set(l){this[e]=l}};return{get:r,set(l){const h=r?.call(this);i?.call(this,l),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Se}static _$Ei(){if(this.hasOwnProperty(dt("elementProperties")))return;const t=Rs(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(dt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(dt("properties"))){const e=this.properties,s=[...Os(e),...Ds(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(ye(r))}else t!==void 0&&e.push(ye(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ks(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const i=(s.converter?.toAttribute!==void 0?s.converter:wt).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const i=s.getPropertyOptions(r),l=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:wt;this._$Em=r;const h=l.fromAttribute(e,i.type);this[r]=h??this._$Ej?.get(r)??h,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const r=this.constructor,i=this[t];if(s??=r.getPropertyOptions(t),!((s.hasChanged??Zt)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:i},l){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,l??e??this[t]),i!==!0||l!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,i]of s){const{wrapped:l}=i,h=this[r];l!==!0||this._$AL.has(r)||h===void 0||this.C(r,void 0,i,h)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};st.elementStyles=[],st.shadowRootOptions={mode:"open"},st[dt("elementProperties")]=new Map,st[dt("finalized")]=new Map,Gs?.({ReactiveElement:st}),(Mt.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt=globalThis,$t=Jt.trustedTypes,ve=$t?$t.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ue="$lit$",q=`lit$${Math.random().toFixed(9).slice(2)}$`,Ge="?"+q,Ls=`<${Ge}>`,K=document,ft=()=>K.createComment(""),ht=n=>n===null||typeof n!="object"&&typeof n!="function",Xt=Array.isArray,js=n=>Xt(n)||typeof n?.[Symbol.iterator]=="function",Ut=`[ 	
\f\r]`,at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,_e=/>/g,X=RegExp(`>|${Ut}(?:([^\\s"'>=/]+)(${Ut}*=${Ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),be=/'/g,we=/"/g,Le=/^(?:script|style|textarea|title)$/i,Is=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),je=Is(1),tt=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),$e=new WeakMap,Y=K.createTreeWalker(K,129);function Ie(n,t){if(!Xt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ve!==void 0?ve.createHTML(t):t}const Ns=(n,t)=>{const e=n.length-1,s=[];let r,i=t===2?"<svg>":t===3?"<math>":"",l=at;for(let h=0;h<e;h++){const f=n[h];let g,u,v=-1,x=0;for(;x<f.length&&(l.lastIndex=x,u=l.exec(f),u!==null);)x=l.lastIndex,l===at?u[1]==="!--"?l=me:u[1]!==void 0?l=_e:u[2]!==void 0?(Le.test(u[2])&&(r=RegExp("</"+u[2],"g")),l=X):u[3]!==void 0&&(l=X):l===X?u[0]===">"?(l=r??at,v=-1):u[1]===void 0?v=-2:(v=l.lastIndex-u[2].length,g=u[1],l=u[3]===void 0?X:u[3]==='"'?we:be):l===we||l===be?l=X:l===me||l===_e?l=at:(l=X,r=void 0);const T=l===X&&n[h+1].startsWith("/>")?" ":"";i+=l===at?f+Ls:v>=0?(s.push(g),f.slice(0,v)+Ue+f.slice(v)+q+T):f+q+(v===-2?h:T)}return[Ie(n,i+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class ut{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,l=0;const h=t.length-1,f=this.parts,[g,u]=Ns(t,e);if(this.el=ut.createElement(g,s),Y.currentNode=this.el.content,e===2||e===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(r=Y.nextNode())!==null&&f.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(const v of r.getAttributeNames())if(v.endsWith(Ue)){const x=u[l++],T=r.getAttribute(v).split(q),H=/([.?@])?(.*)/.exec(x);f.push({type:1,index:i,name:H[2],strings:T,ctor:H[1]==="."?Ws:H[1]==="?"?Vs:H[1]==="@"?zs:Bt}),r.removeAttribute(v)}else v.startsWith(q)&&(f.push({type:6,index:i}),r.removeAttribute(v));if(Le.test(r.tagName)){const v=r.textContent.split(q),x=v.length-1;if(x>0){r.textContent=$t?$t.emptyScript:"";for(let T=0;T<x;T++)r.append(v[T],ft()),Y.nextNode(),f.push({type:2,index:++i});r.append(v[x],ft())}}}else if(r.nodeType===8)if(r.data===Ge)f.push({type:2,index:i});else{let v=-1;for(;(v=r.data.indexOf(q,v+1))!==-1;)f.push({type:7,index:i}),v+=q.length-1}i++}}static createElement(t,e){const s=K.createElement("template");return s.innerHTML=t,s}}function rt(n,t,e=n,s){if(t===tt)return t;let r=s!==void 0?e._$Co?.[s]:e._$Cl;const i=ht(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(n),r._$AT(n,e,s)),s!==void 0?(e._$Co??=[])[s]=r:e._$Cl=r),r!==void 0&&(t=rt(n,r._$AS(n,t.values),r,s)),t}class Hs{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??K).importNode(e,!0);Y.currentNode=r;let i=Y.nextNode(),l=0,h=0,f=s[0];for(;f!==void 0;){if(l===f.index){let g;f.type===2?g=new ot(i,i.nextSibling,this,t):f.type===1?g=new f.ctor(i,f.name,f.strings,this,t):f.type===6&&(g=new qs(i,this,t)),this._$AV.push(g),f=s[++h]}l!==f?.index&&(i=Y.nextNode(),l++)}return Y.currentNode=K,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=rt(this,t,e),ht(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==tt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):js(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==A&&ht(this._$AH)?this._$AA.nextSibling.data=t:this.T(K.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=ut.createElement(Ie(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{const i=new Hs(r,this),l=i.u(this.options);i.p(e),this.T(l),this._$AH=i}}_$AC(t){let e=$e.get(t.strings);return e===void 0&&$e.set(t.strings,e=new ut(t)),e}k(t){Xt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const i of t)r===e.length?e.push(s=new ot(this.O(ft()),this.O(ft()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Bt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A}_$AI(t,e=this,s,r){const i=this.strings;let l=!1;if(i===void 0)t=rt(this,t,e,0),l=!ht(t)||t!==this._$AH&&t!==tt,l&&(this._$AH=t);else{const h=t;let f,g;for(t=i[0],f=0;f<i.length-1;f++)g=rt(this,h[s+f],e,f),g===tt&&(g=this._$AH[f]),l||=!ht(g)||g!==this._$AH[f],g===A?t=A:t!==A&&(t+=(g??"")+i[f+1]),this._$AH[f]=g}l&&!r&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ws extends Bt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}class Vs extends Bt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A)}}class zs extends Bt{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=rt(this,t,e,0)??A)===tt)return;const s=this._$AH,r=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==A&&(s===A||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class qs{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){rt(this,t)}}const Gn={I:ot},Fs=Jt.litHtmlPolyfillSupport;Fs?.(ut,ot),(Jt.litHtmlVersions??=[]).push("3.3.1");const Zs=(n,t,e)=>{const s=e?.renderBefore??t;let r=s._$litPart$;if(r===void 0){const i=e?.renderBefore??null;s._$litPart$=r=new ot(t.insertBefore(ft(),i),i,void 0,e??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=globalThis;let nt=class extends st{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Zs(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return tt}};nt._$litElement$=!0,nt.finalized=!0,Yt.litElementHydrateSupport?.({LitElement:nt});const Js=Yt.litElementPolyfillSupport;Js?.({LitElement:nt});(Yt.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=new WeakMap,xe=n=>{if((e=>e.pattern!==void 0)(n))return n.pattern;let t=Ee.get(n);return t===void 0&&Ee.set(n,t=new URLPattern({pathname:n.path})),t};let Xs=class{constructor(t,e,s){this.routes=[],this.o=[],this.t={},this.i=r=>{if(r.routes===this)return;const i=r.routes;this.o.push(i),i.h=this,r.stopImmediatePropagation(),r.onDisconnect=()=>{this.o?.splice(this.o.indexOf(i)>>>0,1)};const l=Ae(this.t);l!==void 0&&i.goto(l)},(this.l=t).addController(this),this.routes=[...e],this.fallback=s?.fallback}link(t){if(t?.startsWith("/"))return t;if(t?.startsWith("."))throw Error("Not implemented");return t??=this.u,(this.h?.link()??"")+t}async goto(t){let e;if(this.routes.length===0&&this.fallback===void 0)e=t,this.u="",this.t={0:e};else{const s=this.p(t);if(s===void 0)throw Error("No route found for "+t);const r=xe(s).exec({pathname:t}),i=r?.pathname.groups??{};if(e=Ae(i),typeof s.enter=="function"&&await s.enter(i)===!1)return;this.v=s,this.t=i,this.u=e===void 0?t:t.substring(0,t.length-e.length)}if(e!==void 0)for(const s of this.o)s.goto(e);this.l.requestUpdate()}outlet(){return this.v?.render?.(this.t)}get params(){return this.t}p(t){const e=this.routes.find(s=>xe(s).test({pathname:t}));return e||this.fallback===void 0?e:this.fallback?{...this.fallback,path:"/*"}:void 0}hostConnected(){this.l.addEventListener(Nt.eventName,this.i);const t=new Nt(this);this.l.dispatchEvent(t),this._=t.onDisconnect}hostDisconnected(){this._?.(),this.h=void 0}};const Ae=n=>{let t;for(const e of Object.keys(n))/\d+/.test(e)&&(t===void 0||e>t)&&(t=e);return t&&n[t]};let Nt=class Ne extends Event{constructor(t){super(Ne.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}};Nt.eventName="lit-routes-connected";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ys=location.origin||location.protocol+"//"+location.host;let Qs=class extends Xs{constructor(){super(...arguments),this.m=t=>{const e=t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey;if(t.defaultPrevented||e)return;const s=t.composedPath().find(l=>l.tagName==="A");if(s===void 0||s.target!==""||s.hasAttribute("download")||s.getAttribute("rel")==="external")return;const r=s.href;if(r===""||r.startsWith("mailto:"))return;const i=window.location;s.origin===Ys&&(t.preventDefault(),r!==i.href&&(window.history.pushState({},"",r),this.goto(s.pathname)))},this.R=t=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.m),window.addEventListener("popstate",this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.m),window.removeEventListener("popstate",this.R)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ks=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tn={attribute:!0,type:String,converter:wt,reflect:!1,hasChanged:Zt},en=(n=tn,t,e)=>{const{kind:s,metadata:r}=e;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),i.set(e.name,n),s==="accessor"){const{name:l}=e;return{set(h){const f=t.get.call(this);t.set.call(this,h),this.requestUpdate(l,f,n)},init(h){return h!==void 0&&this.C(l,void 0,n,h),h}}}if(s==="setter"){const{name:l}=e;return function(h){const f=this[l];t.call(this,h),this.requestUpdate(l,f,n)}}throw Error("Unsupported decorator location: "+s)};function J(n){return(t,e)=>typeof e=="object"?en(n,t,e):((s,r,i)=>{const l=r.hasOwnProperty(i);return r.constructor.createProperty(i,s),l?Object.getOwnPropertyDescriptor(r,i):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function sn(n){return J({...n,state:!0,attribute:!1})}var nn=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,He=n=>{throw TypeError(n)},m=(n,t,e,s)=>{for(var r=s>1?void 0:s?rn(t,e):t,i=n.length-1,l;i>=0;i--)(l=n[i])&&(r=(s?l(t,e,r):l(r))||r);return s&&r&&nn(t,e,r),r},Qt=(n,t,e)=>t.has(n)||He("Cannot "+e),S=(n,t,e)=>(Qt(n,t,"read from private field"),e?e.call(n):t.get(n)),M=(n,t,e)=>t.has(n)?He("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),F=(n,t,e,s)=>(Qt(n,t,"write to private field"),t.set(n,e),e),z=(n,t,e)=>(Qt(n,t,"access private method"),e);const U="-733b2e";class Kt{static get instance(){return globalThis.__gdsElementLookupTable?.[U]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[U]:new Map}),globalThis.__gdsElementLookupTable[U]}}const We=(n,t)=>function(e){var s;return s=class extends e{constructor(){super(...arguments),this.gdsElementName=n}static define(){if(s.isDefined)return;const i=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?n:n+U;customElements.get(i)||(s.isDefined=!0,Kt.instance.set(n,i),customElements.define(i,s),t?.dependsOn&&t.dependsOn.forEach(l=>l.define()))}},s.isDefined=!1,s},Ce=new WeakMap;function on(n,...t){let e=Ce.get(n);return e||(e=Te(n),e.raw=Te(n.raw),Ce.set(n,e)),[e,...t]}const Te=n=>n.map(t=>{for(const[e,s]of Kt.instance.entries())t=t.replace(new RegExp(`${e}(?![-a-z])`,"mg"),s);return t});function an(n){return(t,...e)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return n(t,...e);const[s,...r]=on(t,...e);return n(s,...r)}}const lt=an(je);function Nn(n){return Kt.instance.get(n)??n}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ln={ATTRIBUTE:1,CHILD:2,ELEMENT:6},cn=n=>(...t)=>({_$litDirective$:n,values:t});class dn{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ht extends dn{constructor(t){if(super(t),this.it=A,t.type!==ln.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===A||t==null)return this._t=void 0,this.it=t;if(t===tt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Ht.directiveName="unsafeHTML",Ht.resultType=1;const fn=cn(Ht);var D,Et,j,xt,Q,R,L,At,V,Ve,ct,ze;class hn{constructor(t){M(this,V),M(this,D,!te()),M(this,Et,!1),M(this,j,[]),M(this,xt,[]),M(this,Q,new Map),M(this,R,new Map),M(this,L,[]),M(this,At,[]),this.host=t,this.host.addController(this)}hostConnected(){z(this,V,ze).call(this)}has(t){return S(this,D)?S(this,R).has(t):S(this,Q).has(t)}inject(t,e){z(this,V,Ve).call(this,t,e),z(this,V,ct).call(this)}clear(t){S(this,D)?this.host.updateComplete.then(()=>{S(this,R).get(t)?.remove(),S(this,R).delete(t)}):S(this,Q).delete(t),z(this,V,ct).call(this)}clearAll(){S(this,D)?this.host.updateComplete.then(()=>{S(this,R).forEach(t=>t.remove()),S(this,L).forEach(t=>t.remove()),S(this,R).clear(),F(this,L,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],S(this,Q).clear(),F(this,j,[]))}clearInitial(){S(this,D)?this.host.updateComplete.then(()=>{S(this,L).forEach(t=>t.remove()),F(this,L,[])}):F(this,j,[]),z(this,V,ct).call(this)}restoreInitial(){S(this,D)?S(this,At).forEach(t=>{S(this,L).push(t.cloneNode(!0))}):F(this,j,[...S(this,xt)]),z(this,V,ct).call(this)}}D=new WeakMap;Et=new WeakMap;j=new WeakMap;xt=new WeakMap;Q=new WeakMap;R=new WeakMap;L=new WeakMap;At=new WeakMap;V=new WeakSet;Ve=function(n,t){if(S(this,D)){let e=S(this,R).get(n);e||(e=document.createElement("style"),S(this,R).set(n,e)),e.textContent=t.cssText}else{if(!this.host.shadowRoot||!t.styleSheet)return;S(this,Q).set(n,t.styleSheet)}};ct=function(){if(S(this,D))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(n=>{n.remove()}),S(this,L).forEach(n=>{this.host.shadowRoot?.appendChild(n)}),S(this,R).forEach(n=>{this.host.shadowRoot?.appendChild(n)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...S(this,j),...Array.from(S(this,Q).values())]}};ze=function(){S(this,Et)||(S(this,D)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(n=>{S(this,L).push(n),S(this,At).push(n.cloneNode(!0))})}):this.host.shadowRoot&&S(this,j).length===0&&(F(this,j,[...this.host.shadowRoot.adoptedStyleSheets||[]]),F(this,xt,[...S(this,j)])),F(this,Et,!0))};function te(){try{return new CSSStyleSheet,!0}catch{return!1}}var ke=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Me={};/*! *****************************************************************************
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
***************************************************************************** */var Be;function un(){if(Be)return Me;Be=1;var n;return function(t){(function(e){var s=typeof ke=="object"?ke:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),r=i(t);typeof s.Reflect>"u"?s.Reflect=t:r=i(s.Reflect,r),e(r);function i(l,h){return function(f,g){typeof l[f]!="function"&&Object.defineProperty(l,f,{configurable:!0,writable:!0,value:g}),h&&h(f,g)}}})(function(e){var s=Object.prototype.hasOwnProperty,r=typeof Symbol=="function",i=r&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",l=r&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",h=typeof Object.create=="function",f={__proto__:[]}instanceof Array,g=!h&&!f,u={create:h?function(){return Rt(Object.create(null))}:f?function(){return Rt({__proto__:null})}:function(){return Rt({})},has:g?function(o,a){return s.call(o,a)}:function(o,a){return a in o},get:g?function(o,a){return s.call(o,a)?o[a]:void 0}:function(o,a){return o[a]}},v=Object.getPrototypeOf(Function),x=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",T=!x&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:Es(),H=!x&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:xs(),es=!x&&typeof WeakMap=="function"?WeakMap:As(),yt=new es;function ss(o,a,c,d){if(C(c)){if(!ce(o))throw new TypeError;if(!de(a))throw new TypeError;return hs(o,a)}else{if(!ce(o))throw new TypeError;if(!B(a))throw new TypeError;if(!B(d)&&!C(d)&&!et(d))throw new TypeError;return et(d)&&(d=void 0),c=G(c),us(o,a,c,d)}}e("decorate",ss);function ns(o,a){function c(d,y){if(!B(d))throw new TypeError;if(!C(y)&&!ms(y))throw new TypeError;oe(o,a,d,y)}return c}e("metadata",ns);function rs(o,a,c,d){if(!B(c))throw new TypeError;return C(d)||(d=G(d)),oe(o,a,c,d)}e("defineMetadata",rs);function os(o,a,c){if(!B(a))throw new TypeError;return C(c)||(c=G(c)),se(o,a,c)}e("hasMetadata",os);function is(o,a,c){if(!B(a))throw new TypeError;return C(c)||(c=G(c)),Ot(o,a,c)}e("hasOwnMetadata",is);function as(o,a,c){if(!B(a))throw new TypeError;return C(c)||(c=G(c)),ne(o,a,c)}e("getMetadata",as);function ls(o,a,c){if(!B(a))throw new TypeError;return C(c)||(c=G(c)),re(o,a,c)}e("getOwnMetadata",ls);function cs(o,a){if(!B(o))throw new TypeError;return C(a)||(a=G(a)),ie(o,a)}e("getMetadataKeys",cs);function ds(o,a){if(!B(o))throw new TypeError;return C(a)||(a=G(a)),ae(o,a)}e("getOwnMetadataKeys",ds);function fs(o,a,c){if(!B(a))throw new TypeError;C(c)||(c=G(c));var d=it(a,c,!1);if(C(d)||!d.delete(o))return!1;if(d.size>0)return!0;var y=yt.get(a);return y.delete(c),y.size>0||yt.delete(a),!0}e("deleteMetadata",fs);function hs(o,a){for(var c=o.length-1;c>=0;--c){var d=o[c],y=d(a);if(!C(y)&&!et(y)){if(!de(y))throw new TypeError;a=y}}return a}function us(o,a,c,d){for(var y=o.length-1;y>=0;--y){var k=o[y],_=k(a,c,d);if(!C(_)&&!et(_)){if(!B(_))throw new TypeError;d=_}}return d}function it(o,a,c){var d=yt.get(o);if(C(d)){if(!c)return;d=new T,yt.set(o,d)}var y=d.get(a);if(C(y)){if(!c)return;y=new T,d.set(a,y)}return y}function se(o,a,c){var d=Ot(o,a,c);if(d)return!0;var y=Dt(a);return et(y)?!1:se(o,y,c)}function Ot(o,a,c){var d=it(a,c,!1);return C(d)?!1:Ss(d.has(o))}function ne(o,a,c){var d=Ot(o,a,c);if(d)return re(o,a,c);var y=Dt(a);if(!et(y))return ne(o,y,c)}function re(o,a,c){var d=it(a,c,!1);if(!C(d))return d.get(o)}function oe(o,a,c,d){var y=it(c,d,!0);y.set(o,a)}function ie(o,a){var c=ae(o,a),d=Dt(o);if(d===null)return c;var y=ie(d,a);if(y.length<=0)return c;if(c.length<=0)return y;for(var k=new H,_=[],b=0,p=c;b<p.length;b++){var w=p[b],$=k.has(w);$||(k.add(w),_.push(w))}for(var W=0,he=y;W<he.length;W++){var w=he[W],$=k.has(w);$||(k.add(w),_.push(w))}return _}function ae(o,a){var c=[],d=it(o,a,!1);if(C(d))return c;for(var y=d.keys(),k=_s(y),_=0;;){var b=ws(k);if(!b)return c.length=_,c;var p=bs(b);try{c[_]=p}catch(w){try{$s(k)}finally{throw w}}_++}}function le(o){if(o===null)return 1;switch(typeof o){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return o===null?1:6;default:return 6}}function C(o){return o===void 0}function et(o){return o===null}function ps(o){return typeof o=="symbol"}function B(o){return typeof o=="object"?o!==null:typeof o=="function"}function ys(o,a){switch(le(o)){case 0:return o;case 1:return o;case 2:return o;case 3:return o;case 4:return o;case 5:return o}var c="string",d=fe(o,i);if(d!==void 0){var y=d.call(o,c);if(B(y))throw new TypeError;return y}return gs(o)}function gs(o,a){var c,d,y;{var k=o.toString;if(gt(k)){var d=k.call(o);if(!B(d))return d}var c=o.valueOf;if(gt(c)){var d=c.call(o);if(!B(d))return d}}throw new TypeError}function Ss(o){return!!o}function vs(o){return""+o}function G(o){var a=ys(o);return ps(a)?a:vs(a)}function ce(o){return Array.isArray?Array.isArray(o):o instanceof Object?o instanceof Array:Object.prototype.toString.call(o)==="[object Array]"}function gt(o){return typeof o=="function"}function de(o){return typeof o=="function"}function ms(o){switch(le(o)){case 3:return!0;case 4:return!0;default:return!1}}function fe(o,a){var c=o[a];if(c!=null){if(!gt(c))throw new TypeError;return c}}function _s(o){var a=fe(o,l);if(!gt(a))throw new TypeError;var c=a.call(o);if(!B(c))throw new TypeError;return c}function bs(o){return o.value}function ws(o){var a=o.next();return a.done?!1:a}function $s(o){var a=o.return;a&&a.call(o)}function Dt(o){var a=Object.getPrototypeOf(o);if(typeof o!="function"||o===v||a!==v)return a;var c=o.prototype,d=c&&Object.getPrototypeOf(c);if(d==null||d===Object.prototype)return a;var y=d.constructor;return typeof y!="function"||y===o?a:y}function Es(){var o={},a=[],c=function(){function _(b,p,w){this._index=0,this._keys=b,this._values=p,this._selector=w}return _.prototype["@@iterator"]=function(){return this},_.prototype[l]=function(){return this},_.prototype.next=function(){var b=this._index;if(b>=0&&b<this._keys.length){var p=this._selector(this._keys[b],this._values[b]);return b+1>=this._keys.length?(this._index=-1,this._keys=a,this._values=a):this._index++,{value:p,done:!1}}return{value:void 0,done:!0}},_.prototype.throw=function(b){throw this._index>=0&&(this._index=-1,this._keys=a,this._values=a),b},_.prototype.return=function(b){return this._index>=0&&(this._index=-1,this._keys=a,this._values=a),{value:b,done:!0}},_}();return function(){function _(){this._keys=[],this._values=[],this._cacheKey=o,this._cacheIndex=-2}return Object.defineProperty(_.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),_.prototype.has=function(b){return this._find(b,!1)>=0},_.prototype.get=function(b){var p=this._find(b,!1);return p>=0?this._values[p]:void 0},_.prototype.set=function(b,p){var w=this._find(b,!0);return this._values[w]=p,this},_.prototype.delete=function(b){var p=this._find(b,!1);if(p>=0){for(var w=this._keys.length,$=p+1;$<w;$++)this._keys[$-1]=this._keys[$],this._values[$-1]=this._values[$];return this._keys.length--,this._values.length--,b===this._cacheKey&&(this._cacheKey=o,this._cacheIndex=-2),!0}return!1},_.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=o,this._cacheIndex=-2},_.prototype.keys=function(){return new c(this._keys,this._values,d)},_.prototype.values=function(){return new c(this._keys,this._values,y)},_.prototype.entries=function(){return new c(this._keys,this._values,k)},_.prototype["@@iterator"]=function(){return this.entries()},_.prototype[l]=function(){return this.entries()},_.prototype._find=function(b,p){return this._cacheKey!==b&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=b)),this._cacheIndex<0&&p&&(this._cacheIndex=this._keys.length,this._keys.push(b),this._values.push(void 0)),this._cacheIndex},_}();function d(_,b){return _}function y(_,b){return b}function k(_,b){return[_,b]}}function xs(){return function(){function o(){this._map=new T}return Object.defineProperty(o.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),o.prototype.has=function(a){return this._map.has(a)},o.prototype.add=function(a){return this._map.set(a,a),this},o.prototype.delete=function(a){return this._map.delete(a)},o.prototype.clear=function(){this._map.clear()},o.prototype.keys=function(){return this._map.keys()},o.prototype.values=function(){return this._map.values()},o.prototype.entries=function(){return this._map.entries()},o.prototype["@@iterator"]=function(){return this.keys()},o.prototype[l]=function(){return this.keys()},o}()}function As(){var o=16,a=u.create(),c=d();return function(){function p(){this._key=d()}return p.prototype.has=function(w){var $=y(w,!1);return $!==void 0?u.has($,this._key):!1},p.prototype.get=function(w){var $=y(w,!1);return $!==void 0?u.get($,this._key):void 0},p.prototype.set=function(w,$){var W=y(w,!0);return W[this._key]=$,this},p.prototype.delete=function(w){var $=y(w,!1);return $!==void 0?delete $[this._key]:!1},p.prototype.clear=function(){this._key=d()},p}();function d(){var p;do p="@@WeakMap@@"+b();while(u.has(a,p));return a[p]=!0,p}function y(p,w){if(!s.call(p,c)){if(!w)return;Object.defineProperty(p,c,{value:u.create()})}return p[c]}function k(p,w){for(var $=0;$<w;++$)p[$]=Math.random()*255|0;return p}function _(p){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(p)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(p)):k(new Uint8Array(p),p):k(new Array(p),p)}function b(){var p=_(o);p[6]=p[6]&79|64,p[8]=p[8]&191|128;for(var w="",$=0;$<o;++$){var W=p[$];($===4||$===6||$===8)&&(w+="-"),W<16&&(w+="0"),w+=W.toString(16).toLowerCase()}return w}}function Rt(o){return o.__=void 0,delete o.__,o}})}(n||(n={})),Me}un();function Pe(n){return n.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}class pt extends nt{constructor(){super(),this.semanticVersion="2.5.2",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new hn(this)}static define(){}connectedCallback(){super.connectedCallback(),this.setAttribute("gds-element",this.gdsElementName?.toString()||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(t,e){const s={bubbles:!0,composed:!1,cancelable:!0,...e};return[this.dispatchEvent(new Event(t,s)),this.dispatchEvent(new Event(Pe(t),s))].every(r=>r!==!1)}dispatchCustomEvent(t,e={}){const s={bubbles:!0,composed:!1,cancelable:!0,...e};return[this.dispatchEvent(new CustomEvent(t,s)),this.dispatchEvent(new CustomEvent(Pe(t),s))].every(r=>r!==!1)}}pt.isDefined=!1;pt.styleExpressionBaseSelector=":host";m([sn()],pt.prototype,"_isUsingTransitionalStyles",2);const qe=`/**
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
  --gds-sys-radius-max: 999px;`,vt=`/**
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
  --gds-sys-color-state-warning-06: #f19e38 20%;`,Wt=`/**
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
  --gds-sys-color-state-warning-06: #8f530a 16%;`,Fe=`/**
 * Do not edit directly, this file was auto-generated.
 */

  --gds-sys-shadow-s-01: 0px 0px 2px 0px #060D1314;
  --gds-sys-shadow-s-02: 0px 0px 0px 0px transparent;
  --gds-sys-shadow-m-01: 0px 4px 8px -2px #060D131a;
  --gds-sys-shadow-m-02: 0px 2px 4px -2px #060D130f;
  --gds-sys-shadow-l-01: 0px 20px 24px -4px #060D1314;
  --gds-sys-shadow-l-02: 0px 8px 8px -4px #060D1308;
  --gds-sys-shadow-xl-01: 0px 24px 48px -12px #060D132e;
  --gds-sys-shadow-xl-02: 0px 0px 0px 0px transparent;`;var pn={};const Pt=typeof process<"u"&&pn!==void 0,Hn=/iPad|iPhone|iPod/.test(Pt?"":navigator.userAgent);var Vt,Ct,Tt,ee,mt,Ze,Je;function yn(){return Pt?[]:document.adoptedStyleSheets||[]}const gn=class Xe{constructor(){M(this,mt),M(this,Vt,!te()),M(this,Ct,new Map),M(this,Tt,new Map),M(this,ee,yn())}static get instance(){return globalThis.__gdsGlobalStylesRegistryScoped?.[U]||(globalThis.__gdsGlobalStylesRegistryScoped={...globalThis.__gdsGlobalStylesRegistryScoped,[U]:new Xe}),globalThis.__gdsGlobalStylesRegistryScoped[U]}injectGlobalStyles(t,e){if(S(this,Vt)){const s=Array.isArray(e)?e.map(r=>r.toString()).join(""):e.toString();z(this,mt,Ze).call(this,t,s)}else e.styleSheet&&z(this,mt,Je).call(this,t,e.styleSheet)}};Vt=new WeakMap;Ct=new WeakMap;Tt=new WeakMap;ee=new WeakMap;mt=new WeakSet;Ze=function(n,t){if(Pt)return;let e=S(this,Tt).get(n);e||(e=document.createElement("style"),S(this,Tt).set(n,e)),e.textContent=t,document.head.appendChild(e)};Je=function(n,t){Pt||(S(this,Ct).set(n,t),document.adoptedStyleSheets=[...S(this,ee),...Array.from(S(this,Ct).values())])};let Sn=gn;const Ye=[kt`
    :host {
      ${O(qe)}
      ${O(Fe)}
    }
  `];Sn.instance.injectGlobalStyles("root-tokens",kt`
    :root,
    :root[gds-theme='light'] {
      ${O(qe)}
      ${O(Fe)}
      ${O(Wt)}
    }
    :root[gds-theme='dark'] {
      ${O(vt)}
    }
  `);const vn={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},mn=/^([<|>]=?)?([0-9a-z]+)/,Qe=["{","}",";",":",","],Oe=[" ","/n"];function _n(n=""){const t=[];let e="";for(let s=0;s<n.length;s++){const r=n[s];if(Oe.includes(r)||(e+=r),Qe.includes(r)){t.push(e.slice(0,-1)),t.push(r),e="";continue}if(Oe.includes(r)||s===n.length-1){t.push(e),e="";continue}}return t.filter(s=>s!=="")}function bn(n){const t=[];let e={breakpoint:"-",values:[]};const s=()=>({sel:"",values:[]});let r=s();for(const i of n){if(!Qe.includes(i)){r.values.push(i);continue}if(i==="{"&&(e={breakpoint:r.values.join(","),values:[]},r=s()),i===";"&&(t.length===0&&t.push(e),r.values.length>0&&(e.values.push(r),r=s())),i===":"){const l=r.values.pop()??"";r.sel=l}e&&i==="}"&&(e.values.push(r),r=s(),t.push(e))}return r.values.length>0&&e.values.push(r),t.length===0&&t.push(e),t}function wn(n){return n.split(",").map(e=>{const s=e.trim().match(mn);if(!s)throw new Error(`Invalid breakpoint specifier: ${e}`);return{condition:s[1],value:s[2]}})}function $n(n,t,e,s=i=>i,r=(i,l)=>`${i}: ${l.join(" ")};`){let i="";for(const l of e){const g=`@media ${(l.breakpoint==="-"?[{condition:">=",value:"0"}]:wn(l.breakpoint)).map(u=>`(${u.condition?.includes("<")?"max-width":"min-width"}: ${vn[u.value]??u.value})`).join(" and ")} {${l.values.map(u=>{let v=n;u.sel.length>0&&(v=n===":host"?`:host(:${u.sel})`:`${n}:${u.sel}`);const x=r(t,u.values.map(s));return u.sel==="hover"?`@media (hover: hover) {${v}{${x}}}`:`${v}{${x}}`}).join("")}}`;i+=g}return i}const Gt=new Map;function E(n){return(t,e)=>{const s=n?.property??String(e),r=n?.valueTemplate,i=n?.styleTemplate,l=n?.cacheOverrideKey??"0";J({attribute:n?.attribute,noAccessor:!0})(t,e),Object.defineProperty(t,e,{get:function(){return this["__"+String(e)]},set:async function(h){if(!h)return;this["__"+String(e)]=h,await this.updateComplete;const f=n?.selector??this.constructor.styleExpressionBaseSelector,g=this.level??"0",u=f+s+h+g+l;if(Gt.has(u)){this._dynamicStylesController.inject(`sep_${String(e)}`,Gt.get(u));return}const v=bn(_n(h)),x=$n(f,s,v,r?.bind(this),i?.bind(this)),T=O(x);Gt.set(u,T),this._dynamicStylesController.inject(`sep_${String(e)}`,T)}})}}function En(n,t,e){if(n==="transparent"||n==="currentColor"||n==="inherit")return n;const[s,r]=n.split("/");let i;return e&&t==="background"?i=`var(--gds-sys-color-l${e}-${s})`:i=`var(--gds-sys-color-${t}-${s})`,r?`color-mix(in srgb, ${i} ${parseFloat(r)*100}%, transparent 0%)`:i}function xn(n){return{valueTemplate:function(t){return En(t,n,this.level)}}}const Lt={valueTemplate:n=>`var(--gds-sys-space-${n}, 0)`},Wn={valueTemplate:n=>`var(--gds-sys-radius-${n}, 0)`},P={valueTemplate:n=>`var(--gds-sys-space-${An(n)}, ${n})`},jt={valueTemplate:n=>{const e=(n.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${n})`:`calc(var(--gds-sys-space-${n.substring(1)}) * -1)`;return n==="auto"?"auto":e},styleTemplate:(n,t)=>{const e=h=>h==="auto"?"auto":`${h}`,s=e(t[0]),r=t.length>1?e(t[1]):s,i=t.length>2?e(t[2]):s,l=t.length>3?e(t[3]):r;return`${n}: ${s} ${r} ${i} ${l};`}};function An(n){return n.replace(/[^a-zA-Z0-9-]/g,"")}function Vn(n){class t extends n{}return m([E(P)],t.prototype,"width",2),m([E(P)],t.prototype,"min-width",2),m([E(P)],t.prototype,"max-width",2),m([E(P)],t.prototype,"inline-size",2),m([E(P)],t.prototype,"min-inline-size",2),m([E(P)],t.prototype,"max-inline-size",2),t}function zn(n){class t extends n{}return m([E(P)],t.prototype,"height",2),m([E(P)],t.prototype,"min-height",2),m([E(P)],t.prototype,"max-height",2),m([E(P)],t.prototype,"block-size",2),m([E(P)],t.prototype,"min-block-size",2),m([E(P)],t.prototype,"max-block-size",2),t}function Cn(n){class t extends n{}return m([E(jt)],t.prototype,"margin",2),m([E(jt)],t.prototype,"margin-inline",2),m([E(jt)],t.prototype,"margin-block",2),t}function qn(n){class t extends n{}return m([E(Lt)],t.prototype,"padding",2),m([E(Lt)],t.prototype,"padding-inline",2),m([E(Lt)],t.prototype,"padding-block",2),t}function Tn(n){class t extends n{}return m([E()],t.prototype,"align-self",2),m([E()],t.prototype,"justify-self",2),m([E()],t.prototype,"place-self",2),m([E()],t.prototype,"grid-column",2),m([E()],t.prototype,"grid-row",2),m([E()],t.prototype,"grid-area",2),m([E()],t.prototype,"flex",2),m([E()],t.prototype,"order",2),t}function Fn(n){class t extends n{}return m([E()],t.prototype,"position",2),m([E()],t.prototype,"transform",2),m([E()],t.prototype,"inset",2),t}const kn=kt`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
      height: 1lh;
      width: auto;
    }
  }
`;var Mn=kn;class N extends Cn(Tn(pt)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const e={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...e,"aria-label":this.label}:{...e,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([e,s])=>s!==void 0).map(([e,s])=>`${e}="${s}"`).join(`
      `)}render(){const t=this.svgAttributes;let e=this.svgContent||"";this.stroke&&(e=this.applyStroke(e));const s=`
      <svg ${this.generateAttributesString(t)}>
        ${e}
      </svg>
    `;return je`${fn(s)}`}}N.styles=[Ye,Mn];m([E({...P,property:"height",selector:"svg"})],N.prototype,"size",2);m([J({type:Boolean})],N.prototype,"solid",2);m([J({type:Number})],N.prototype,"stroke",2);m([J()],N.prototype,"level",2);m([E(xn("content"))],N.prototype,"color",2);m([J({type:String})],N.prototype,"label",2);N.define();var _t,bt,zt;const Bn=class Ke{constructor(){M(this,_t,new Map),M(this,bt,new Map),M(this,zt,!te())}static get instance(){return globalThis.__gdsTransitionalStyles?.[U]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[U]:new Ke}),globalThis.__gdsTransitionalStyles[U]}apply(t,e){if(!t.shadowRoot)return;const s=S(this,_t).get(e);s&&(S(this,bt).set(e,t),this.applyToElement(e,s))}applyToElement(t,e){const s=S(this,bt).get(t);if(!s||!s.shadowRoot)return;const r=()=>{s._dynamicStylesController.clearInitial(),s._dynamicStylesController.inject("t-styles",O(e)),s._isUsingTransitionalStyles=!0},i=()=>{s._isUsingTransitionalStyles=!1,s._dynamicStylesController.clear("t-styles"),s._dynamicStylesController.restoreInitial()},l="[gds-element=gds-theme]";let h=s.getRootNode(),f=s.closest(l);for(;f===null&&h!==document;)f=h.host?.closest(l),h=h.host?.getRootNode();if(f){const g=f,u=()=>{g.designVersion==="2023"?i():r()};if(g.addEventListener("gds-design-version-changed",u),s.addEventListener("gds-element-disconnected",()=>g.removeEventListener("gds-design-version-changed",u)),g.designVersion==="2023"){i();return}}r()}register(t,e){let s=e;S(this,zt)&&(s=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${e}`),S(this,_t).set(t,s),this.applyToElement(t,s)}};_t=new WeakMap;bt=new WeakMap;zt=new WeakMap;let Pn=Bn;function ts(n,t){const e={waitUntilFirstUpdate:!1,...t};return(s,r,i)=>{const{update:l}=s,h=Array.isArray(n)?n:[n];s.update=function(f){h.forEach(g=>{const u=g;if(f.has(u)){const v=f.get(u),x=this[u];v!==x&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&i.value?.call(this,v,x)}}),l.call(this,f)}}}let I=class extends N{};I._regularSVG='<path d="M6.75 12H17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';I._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 11.5858 6.33579 11.25 6.75 11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H6.75C6.33579 12.75 6 12.4142 6 12Z" fill="currentColor"/>';I._name="minus-small";I._width=24;I._height=24;I._viewBox="0 0 24 24";I=m([We("gds-icon-minus-small")],I);let Z=class extends pt{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2023"}connectedCallback(){super.connectedCallback(),Pn.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",O(`:host {${vt}}`))}render(){return lt`<slot></slot>`}_onColorSchemeChange(){switch(this.colorScheme){case"dark":this._dynamicStylesController.inject("color-scheme",O(`:host { ${vt}}`));break;case"light":this._dynamicStylesController.inject("color-scheme",O(`:host { ${Wt}}`));break;case"auto":default:this._dynamicStylesController.inject("color-scheme",O(`:host { ${Wt}} @media (prefers-color-scheme: dark) { :host { ${vt} } }`));break}this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};Z.styles=[Ye,kt`
      :host {
        display: contents;
        color: var(--gds-sys-color-content-neutral-01);
        font-family: var(--gds-sys-text-family);
      }
    `];m([J({reflect:!0,attribute:"color-scheme"})],Z.prototype,"colorScheme",2);m([J({reflect:!0,attribute:"design-version"})],Z.prototype,"designVersion",2);m([ts("colorScheme")],Z.prototype,"_onColorSchemeChange",1);m([ts("designVersion")],Z.prototype,"_onDesignVersionChange",1);Z=m([We("gds-theme")],Z);I.define();var On=Object.getOwnPropertyDescriptor,Dn=(n,t,e,s)=>{for(var r=s>1?void 0:s?On(t,e):t,i=n.length-1,l;i>=0;i--)(l=n[i])&&(r=l(r)||r);return r};Z.define();globalThis.URLPattern||await It(()=>import("./index-DPyTNidZ.js"),[]);let De=class extends nt{constructor(){super(...arguments),this._router=new Qs(this,[{path:"/",render:()=>lt`<h1>Green testbed</h1>`},{path:"/green-testbed/all-components",render:()=>lt`<all-components></all-components>`,enter:async n=>{await It(()=>import("./all-components-YBiDzWZI.js"),__vite__mapDeps([0,1]))}},{path:"/green-testbed/form",render:()=>lt`<form-view></form-view>`,enter:async n=>{await It(()=>import("./form-DGN8y5hE.js"),__vite__mapDeps([2,1]))}}])}createRenderRoot(){return this}render(){return lt`<gds-theme><main>${this._router.outlet()}</main></gds-theme>`}};De=Dn([Ks("green-testbed-main")],De);export{xn as A,En as B,Lt as C,Wn as D,sn as E,A as F,N as G,Nn as H,I,fn as J,Sn as K,Hn as L,O as M,Z as N,tt as T,Gn as Z,m as _,kt as a,dn as b,ln as c,Pt as d,cn as e,M as f,We as g,lt as h,nt as i,z as j,S as k,F as l,Pn as m,pt as n,Ye as o,J as p,Vn as q,zn as r,Cn as s,Ks as t,qn as u,Tn as v,ts as w,je as x,Fn as y,E as z};
