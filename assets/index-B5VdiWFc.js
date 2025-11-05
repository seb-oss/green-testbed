const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/all-components-CdfIwW7d.js","assets/video-BNvL0TSc.js","assets/form-D90ACTN0.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const Cs="modulepreload",Ts=function(n){return"/green-testbed/"+n},ut={},Ne=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){let f=function(g){return Promise.all(g.map(y=>Promise.resolve(y).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),h=l?.nonce||l?.getAttribute("nonce");r=f(t.map(g=>{if(g=Ts(g),g in ut)return;ut[g]=!0;const y=g.endsWith(".css"),S=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${S}`))return;const x=document.createElement("link");if(x.rel=y?"stylesheet":Cs,y||(x.as="script"),x.crossOrigin="",x.href=g,h&&x.setAttribute("nonce",h),document.head.appendChild(x),y)return new Promise((M,D)=>{x.addEventListener("load",M),x.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${g}`)))})}))}function i(l){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=l,window.dispatchEvent(h),!h.defaultPrevented)throw l}return r.then(l=>{for(const h of l||[])h.status==="rejected"&&i(h.reason);return e().catch(i)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=globalThis,qe=me.ShadowRoot&&(me.ShadyCSS===void 0||me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fe=Symbol(),pt=new WeakMap;let Rt=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(qe&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=pt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&pt.set(t,e))}return e}toString(){return this.cssText}};const P=n=>new Rt(typeof n=="string"?n:n+"",void 0,Fe),Me=(n,...e)=>{const t=n.length===1?n[0]:e.reduce(((s,r,i)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[i+1]),n[0]);return new Rt(t,n,Fe)},ks=(n,e)=>{if(qe)n.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const s=document.createElement("style"),r=me.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,n.appendChild(s)}},yt=qe?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return P(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ms,defineProperty:Bs,getOwnPropertyDescriptor:Ps,getOwnPropertyNames:Os,getOwnPropertySymbols:Ds,getPrototypeOf:Rs}=Object,Be=globalThis,gt=Be.trustedTypes,Us=gt?gt.emptyScript:"",Gs=Be.reactiveElementPolyfillSupport,de=(n,e)=>n,we={toAttribute(n,e){switch(e){case Boolean:n=n?Us:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Ze=(n,e)=>!Ms(n,e),St={attribute:!0,type:String,converter:we,reflect:!1,useDefault:!1,hasChanged:Ze};Symbol.metadata??=Symbol("metadata"),Be.litPropertyMetadata??=new WeakMap;let se=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=St){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Bs(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){const{get:r,set:i}=Ps(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get:r,set(l){const h=r?.call(this);i?.call(this,l),this.requestUpdate(e,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??St}static _$Ei(){if(this.hasOwnProperty(de("elementProperties")))return;const e=Rs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(de("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(de("properties"))){const t=this.properties,s=[...Os(t),...Ds(t)];for(const r of s)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(yt(r))}else e!==void 0&&t.push(yt(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ks(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){const s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){const i=(s.converter?.toAttribute!==void 0?s.converter:we).toAttribute(t,s.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){const s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const i=s.getPropertyOptions(r),l=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:we;this._$Em=r;const h=l.fromAttribute(t,i.type);this[r]=h??this._$Ej?.get(r)??h,this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){const r=this.constructor,i=this[e];if(s??=r.getPropertyOptions(e),!((s.hasChanged??Ze)(i,t)||s.useDefault&&s.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:i},l){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,l??t??this[e]),i!==!0||l!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,i]of s){const{wrapped:l}=i,h=this[r];l!==!0||this._$AL.has(r)||h===void 0||this.C(r,void 0,i,h)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};se.elementStyles=[],se.shadowRootOptions={mode:"open"},se[de("elementProperties")]=new Map,se[de("finalized")]=new Map,Gs?.({ReactiveElement:se}),(Be.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=globalThis,$e=Je.trustedTypes,mt=$e?$e.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ut="$lit$",q=`lit$${Math.random().toFixed(9).slice(2)}$`,Gt="?"+q,Ls=`<${Gt}>`,K=document,he=()=>K.createComment(""),ue=n=>n===null||typeof n!="object"&&typeof n!="function",Xe=Array.isArray,js=n=>Xe(n)||typeof n?.[Symbol.iterator]=="function",Ge=`[ 	
\f\r]`,ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,_t=/>/g,X=RegExp(`>|${Ge}(?:([^\\s"'>=/]+)(${Ge}*=${Ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bt=/'/g,wt=/"/g,Lt=/^(?:script|style|textarea|title)$/i,Is=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),jt=Is(1),ee=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),$t=new WeakMap,Y=K.createTreeWalker(K,129);function It(n,e){if(!Xe(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return mt!==void 0?mt.createHTML(e):e}const Ns=(n,e)=>{const t=n.length-1,s=[];let r,i=e===2?"<svg>":e===3?"<math>":"",l=ae;for(let h=0;h<t;h++){const f=n[h];let g,y,S=-1,x=0;for(;x<f.length&&(l.lastIndex=x,y=l.exec(f),y!==null);)x=l.lastIndex,l===ae?y[1]==="!--"?l=vt:y[1]!==void 0?l=_t:y[2]!==void 0?(Lt.test(y[2])&&(r=RegExp("</"+y[2],"g")),l=X):y[3]!==void 0&&(l=X):l===X?y[0]===">"?(l=r??ae,S=-1):y[1]===void 0?S=-2:(S=l.lastIndex-y[2].length,g=y[1],l=y[3]===void 0?X:y[3]==='"'?wt:bt):l===wt||l===bt?l=X:l===vt||l===_t?l=ae:(l=X,r=void 0);const M=l===X&&n[h+1].startsWith("/>")?" ":"";i+=l===ae?f+Ls:S>=0?(s.push(g),f.slice(0,S)+Ut+f.slice(S)+q+M):f+q+(S===-2?h:M)}return[It(n,i+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class pe{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let i=0,l=0;const h=e.length-1,f=this.parts,[g,y]=Ns(e,t);if(this.el=pe.createElement(g,s),Y.currentNode=this.el.content,t===2||t===3){const S=this.el.content.firstChild;S.replaceWith(...S.childNodes)}for(;(r=Y.nextNode())!==null&&f.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(const S of r.getAttributeNames())if(S.endsWith(Ut)){const x=y[l++],M=r.getAttribute(S).split(q),D=/([.?@])?(.*)/.exec(x);f.push({type:1,index:i,name:D[2],strings:M,ctor:D[1]==="."?Ws:D[1]==="?"?zs:D[1]==="@"?Vs:Pe}),r.removeAttribute(S)}else S.startsWith(q)&&(f.push({type:6,index:i}),r.removeAttribute(S));if(Lt.test(r.tagName)){const S=r.textContent.split(q),x=S.length-1;if(x>0){r.textContent=$e?$e.emptyScript:"";for(let M=0;M<x;M++)r.append(S[M],he()),Y.nextNode(),f.push({type:2,index:++i});r.append(S[x],he())}}}else if(r.nodeType===8)if(r.data===Gt)f.push({type:2,index:i});else{let S=-1;for(;(S=r.data.indexOf(q,S+1))!==-1;)f.push({type:7,index:i}),S+=q.length-1}i++}}static createElement(e,t){const s=K.createElement("template");return s.innerHTML=e,s}}function re(n,e,t=n,s){if(e===ee)return e;let r=s!==void 0?t._$Co?.[s]:t._$Cl;const i=ue(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(n),r._$AT(n,t,s)),s!==void 0?(t._$Co??=[])[s]=r:t._$Cl=r),r!==void 0&&(e=re(n,r._$AS(n,e.values),r,s)),e}class Hs{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,r=(e?.creationScope??K).importNode(t,!0);Y.currentNode=r;let i=Y.nextNode(),l=0,h=0,f=s[0];for(;f!==void 0;){if(l===f.index){let g;f.type===2?g=new oe(i,i.nextSibling,this,e):f.type===1?g=new f.ctor(i,f.name,f.strings,this,e):f.type===6&&(g=new qs(i,this,e)),this._$AV.push(g),f=s[++h]}l!==f?.index&&(i=Y.nextNode(),l++)}return Y.currentNode=K,r}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class oe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,r){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=re(this,e,t),ue(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==ee&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):js(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&ue(this._$AH)?this._$AA.nextSibling.data=e:this.T(K.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=pe.createElement(It(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(t);else{const i=new Hs(r,this),l=i.u(this.options);i.p(t),this.T(l),this._$AH=i}}_$AC(e){let t=$t.get(e.strings);return t===void 0&&$t.set(e.strings,t=new pe(e)),t}k(e){Xe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const i of e)r===t.length?t.push(s=new oe(this.O(he()),this.O(he()),this,this.options)):s=t[r],s._$AI(i),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Pe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A}_$AI(e,t=this,s,r){const i=this.strings;let l=!1;if(i===void 0)e=re(this,e,t,0),l=!ue(e)||e!==this._$AH&&e!==ee,l&&(this._$AH=e);else{const h=e;let f,g;for(e=i[0],f=0;f<i.length-1;f++)g=re(this,h[s+f],t,f),g===ee&&(g=this._$AH[f]),l||=!ue(g)||g!==this._$AH[f],g===A?e=A:e!==A&&(e+=(g??"")+i[f+1]),this._$AH[f]=g}l&&!r&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ws extends Pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class zs extends Pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class Vs extends Pe{constructor(e,t,s,r,i){super(e,t,s,r,i),this.type=5}_$AI(e,t=this){if((e=re(this,e,t,0)??A)===ee)return;const s=this._$AH,r=e===A&&s!==A||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==A&&(s===A||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class qs{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){re(this,e)}}const Gn={I:oe},Fs=Je.litHtmlPolyfillSupport;Fs?.(pe,oe),(Je.litHtmlVersions??=[]).push("3.3.1");const Zs=(n,e,t)=>{const s=t?.renderBefore??e;let r=s._$litPart$;if(r===void 0){const i=t?.renderBefore??null;s._$litPart$=r=new oe(e.insertBefore(he(),i),i,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=globalThis;let ne=class extends se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zs(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ee}};ne._$litElement$=!0,ne.finalized=!0,Ye.litElementHydrateSupport?.({LitElement:ne});const Js=Ye.litElementPolyfillSupport;Js?.({LitElement:ne});(Ye.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=new WeakMap,xt=n=>{if((t=>t.pattern!==void 0)(n))return n.pattern;let e=Et.get(n);return e===void 0&&Et.set(n,e=new URLPattern({pathname:n.path})),e};let Xs=class{constructor(e,t,s){this.routes=[],this.o=[],this.t={},this.i=r=>{if(r.routes===this)return;const i=r.routes;this.o.push(i),i.h=this,r.stopImmediatePropagation(),r.onDisconnect=()=>{this.o?.splice(this.o.indexOf(i)>>>0,1)};const l=At(this.t);l!==void 0&&i.goto(l)},(this.l=e).addController(this),this.routes=[...t],this.fallback=s?.fallback}link(e){if(e?.startsWith("/"))return e;if(e?.startsWith("."))throw Error("Not implemented");return e??=this.u,(this.h?.link()??"")+e}async goto(e){let t;if(this.routes.length===0&&this.fallback===void 0)t=e,this.u="",this.t={0:t};else{const s=this.p(e);if(s===void 0)throw Error("No route found for "+e);const r=xt(s).exec({pathname:e}),i=r?.pathname.groups??{};if(t=At(i),typeof s.enter=="function"&&await s.enter(i)===!1)return;this.v=s,this.t=i,this.u=t===void 0?e:e.substring(0,e.length-t.length)}if(t!==void 0)for(const s of this.o)s.goto(t);this.l.requestUpdate()}outlet(){return this.v?.render?.(this.t)}get params(){return this.t}p(e){const t=this.routes.find((s=>xt(s).test({pathname:e})));return t||this.fallback===void 0?t:this.fallback?{...this.fallback,path:"/*"}:void 0}hostConnected(){this.l.addEventListener(He.eventName,this.i);const e=new He(this);this.l.dispatchEvent(e),this._=e.onDisconnect}hostDisconnected(){this._?.(),this.h=void 0}};const At=n=>{let e;for(const t of Object.keys(n))/\d+/.test(t)&&(e===void 0||t>e)&&(e=t);return e&&n[e]};let He=class Nt extends Event{constructor(e){super(Nt.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=e}};He.eventName="lit-routes-connected";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ys=location.origin||location.protocol+"//"+location.host;let Qs=class extends Xs{constructor(){super(...arguments),this.m=e=>{const t=e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey;if(e.defaultPrevented||t)return;const s=e.composedPath().find((l=>l.tagName==="A"));if(s===void 0||s.target!==""||s.hasAttribute("download")||s.getAttribute("rel")==="external")return;const r=s.href;if(r===""||r.startsWith("mailto:"))return;const i=window.location;s.origin===Ys&&(e.preventDefault(),r!==i.href&&(window.history.pushState({},"",r),this.goto(s.pathname)))},this.R=e=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.m),window.addEventListener("popstate",this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.m),window.removeEventListener("popstate",this.R)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ks=n=>(e,t)=>{t!==void 0?t.addInitializer((()=>{customElements.define(n,e)})):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const en={attribute:!0,type:String,converter:we,reflect:!1,hasChanged:Ze},tn=(n=en,e,t)=>{const{kind:s,metadata:r}=t;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),i.set(t.name,n),s==="accessor"){const{name:l}=t;return{set(h){const f=e.get.call(this);e.set.call(this,h),this.requestUpdate(l,f,n)},init(h){return h!==void 0&&this.C(l,void 0,n,h),h}}}if(s==="setter"){const{name:l}=t;return function(h){const f=this[l];e.call(this,h),this.requestUpdate(l,f,n)}}throw Error("Unsupported decorator location: "+s)};function J(n){return(e,t)=>typeof t=="object"?tn(n,e,t):((s,r,i)=>{const l=r.hasOwnProperty(i);return r.constructor.createProperty(i,s),l?Object.getOwnPropertyDescriptor(r,i):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function sn(n){return J({...n,state:!0,attribute:!1})}var nn=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,Ht=n=>{throw TypeError(n)},v=(n,e,t,s)=>{for(var r=s>1?void 0:s?rn(e,t):e,i=n.length-1,l;i>=0;i--)(l=n[i])&&(r=(s?l(e,t,r):l(r))||r);return s&&r&&nn(e,t,r),r},Qe=(n,e,t)=>e.has(n)||Ht("Cannot "+t),m=(n,e,t)=>(Qe(n,e,"read from private field"),t?t.call(n):e.get(n)),k=(n,e,t)=>e.has(n)?Ht("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),F=(n,e,t,s)=>(Qe(n,e,"write to private field"),e.set(n,t),t),V=(n,e,t)=>(Qe(n,e,"access private method"),t);const G="-86bbea";class Ke{static get instance(){return globalThis.__gdsElementLookupTable?.[G]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[G]:new Map}),globalThis.__gdsElementLookupTable[G]}}const Wt=(n,e)=>function(t){var s;return s=class extends t{constructor(){super(...arguments),this.gdsElementName=n}static define(){if(s.isDefined)return;const i=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?n:n+G;customElements.get(i)||(s.isDefined=!0,Ke.instance.set(n,i),customElements.define(i,s),e?.dependsOn&&e.dependsOn.forEach(l=>l.define()))}},s.isDefined=!1,s},Ct=new WeakMap;function on(n,...e){let t=Ct.get(n);return t||(t=Tt(n),t.raw=Tt(n.raw),Ct.set(n,t)),[t,...e]}const Tt=n=>n.map(e=>{for(const[t,s]of Ke.instance.entries())e=e.replace(new RegExp(`${t}(?![-a-z])`,"mg"),s);return e});function an(n){return(e,...t)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return n(e,...t);const[s,...r]=on(e,...t);return n(s,...r)}}const le=an(jt);function Nn(n){return Ke.instance.get(n)??n}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ln={ATTRIBUTE:1,CHILD:2,ELEMENT:6},cn=n=>(...e)=>({_$litDirective$:n,values:e});class dn{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class We extends dn{constructor(e){if(super(e),this.it=A,e.type!==ln.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===A||e==null)return this._t=void 0,this.it=e;if(e===ee)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}We.directiveName="unsafeHTML",We.resultType=1;const fn=cn(We);var R,Ee,I,xe,Q,U,j,Ae,z,zt,ce,Vt;class hn{constructor(e){k(this,z),k(this,R,!et()),k(this,Ee,!1),k(this,I,[]),k(this,xe,[]),k(this,Q,new Map),k(this,U,new Map),k(this,j,[]),k(this,Ae,[]),this.host=e,this.host.addController(this)}hostConnected(){V(this,z,Vt).call(this)}has(e){return m(this,R)?m(this,U).has(e):m(this,Q).has(e)}inject(e,t){V(this,z,zt).call(this,e,t),V(this,z,ce).call(this)}clear(e){m(this,R)?this.host.updateComplete.then(()=>{m(this,U).get(e)?.remove(),m(this,U).delete(e)}):m(this,Q).delete(e),V(this,z,ce).call(this)}clearAll(){m(this,R)?this.host.updateComplete.then(()=>{m(this,U).forEach(e=>e.remove()),m(this,j).forEach(e=>e.remove()),m(this,U).clear(),F(this,j,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],m(this,Q).clear(),F(this,I,[]))}clearInitial(){m(this,R)?this.host.updateComplete.then(()=>{m(this,j).forEach(e=>e.remove()),F(this,j,[])}):F(this,I,[]),V(this,z,ce).call(this)}restoreInitial(){m(this,R)?m(this,Ae).forEach(e=>{m(this,j).push(e.cloneNode(!0))}):F(this,I,[...m(this,xe)]),V(this,z,ce).call(this)}}R=new WeakMap;Ee=new WeakMap;I=new WeakMap;xe=new WeakMap;Q=new WeakMap;U=new WeakMap;j=new WeakMap;Ae=new WeakMap;z=new WeakSet;zt=function(n,e){if(m(this,R)){let t=m(this,U).get(n);t||(t=document.createElement("style"),m(this,U).set(n,t)),t.textContent=e.cssText}else{if(!this.host.shadowRoot||!e.styleSheet)return;m(this,Q).set(n,e.styleSheet)}};ce=function(){if(m(this,R))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(n=>{n.remove()}),m(this,j).forEach(n=>{this.host.shadowRoot?.appendChild(n)}),m(this,U).forEach(n=>{this.host.shadowRoot?.appendChild(n)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...m(this,I),...Array.from(m(this,Q).values())]}};Vt=function(){m(this,Ee)||(m(this,R)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(n=>{m(this,j).push(n),m(this,Ae).push(n.cloneNode(!0))})}):this.host.shadowRoot&&m(this,I).length===0&&(F(this,I,[...this.host.shadowRoot.adoptedStyleSheets||[]]),F(this,xe,[...m(this,I)])),F(this,Ee,!0))};function et(){try{return new CSSStyleSheet,!0}catch{return!1}}var kt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mt={};/*! *****************************************************************************
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
***************************************************************************** */var Bt;function un(){if(Bt)return Mt;Bt=1;var n;return(function(e){(function(t){var s=typeof kt=="object"?kt:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),r=i(e);typeof s.Reflect>"u"?s.Reflect=e:r=i(s.Reflect,r),t(r);function i(l,h){return function(f,g){typeof l[f]!="function"&&Object.defineProperty(l,f,{configurable:!0,writable:!0,value:g}),h&&h(f,g)}}})(function(t){var s=Object.prototype.hasOwnProperty,r=typeof Symbol=="function",i=r&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",l=r&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",h=typeof Object.create=="function",f={__proto__:[]}instanceof Array,g=!h&&!f,y={create:h?function(){return Ue(Object.create(null))}:f?function(){return Ue({__proto__:null})}:function(){return Ue({})},has:g?function(o,a){return s.call(o,a)}:function(o,a){return a in o},get:g?function(o,a){return s.call(o,a)?o[a]:void 0}:function(o,a){return o[a]}},S=Object.getPrototypeOf(Function),x=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",M=!x&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:Es(),D=!x&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:xs(),ts=!x&&typeof WeakMap=="function"?WeakMap:As(),ge=new ts;function ss(o,a,c,d){if(C(c)){if(!ct(o))throw new TypeError;if(!dt(a))throw new TypeError;return hs(o,a)}else{if(!ct(o))throw new TypeError;if(!B(a))throw new TypeError;if(!B(d)&&!C(d)&&!te(d))throw new TypeError;return te(d)&&(d=void 0),c=L(c),us(o,a,c,d)}}t("decorate",ss);function ns(o,a){function c(d,p){if(!B(d))throw new TypeError;if(!C(p)&&!vs(p))throw new TypeError;ot(o,a,d,p)}return c}t("metadata",ns);function rs(o,a,c,d){if(!B(c))throw new TypeError;return C(d)||(d=L(d)),ot(o,a,c,d)}t("defineMetadata",rs);function os(o,a,c){if(!B(a))throw new TypeError;return C(c)||(c=L(c)),st(o,a,c)}t("hasMetadata",os);function is(o,a,c){if(!B(a))throw new TypeError;return C(c)||(c=L(c)),De(o,a,c)}t("hasOwnMetadata",is);function as(o,a,c){if(!B(a))throw new TypeError;return C(c)||(c=L(c)),nt(o,a,c)}t("getMetadata",as);function ls(o,a,c){if(!B(a))throw new TypeError;return C(c)||(c=L(c)),rt(o,a,c)}t("getOwnMetadata",ls);function cs(o,a){if(!B(o))throw new TypeError;return C(a)||(a=L(a)),it(o,a)}t("getMetadataKeys",cs);function ds(o,a){if(!B(o))throw new TypeError;return C(a)||(a=L(a)),at(o,a)}t("getOwnMetadataKeys",ds);function fs(o,a,c){if(!B(a))throw new TypeError;C(c)||(c=L(c));var d=ie(a,c,!1);if(C(d)||!d.delete(o))return!1;if(d.size>0)return!0;var p=ge.get(a);return p.delete(c),p.size>0||ge.delete(a),!0}t("deleteMetadata",fs);function hs(o,a){for(var c=o.length-1;c>=0;--c){var d=o[c],p=d(a);if(!C(p)&&!te(p)){if(!dt(p))throw new TypeError;a=p}}return a}function us(o,a,c,d){for(var p=o.length-1;p>=0;--p){var T=o[p],_=T(a,c,d);if(!C(_)&&!te(_)){if(!B(_))throw new TypeError;d=_}}return d}function ie(o,a,c){var d=ge.get(o);if(C(d)){if(!c)return;d=new M,ge.set(o,d)}var p=d.get(a);if(C(p)){if(!c)return;p=new M,d.set(a,p)}return p}function st(o,a,c){var d=De(o,a,c);if(d)return!0;var p=Re(a);return te(p)?!1:st(o,p,c)}function De(o,a,c){var d=ie(a,c,!1);return C(d)?!1:Ss(d.has(o))}function nt(o,a,c){var d=De(o,a,c);if(d)return rt(o,a,c);var p=Re(a);if(!te(p))return nt(o,p,c)}function rt(o,a,c){var d=ie(a,c,!1);if(!C(d))return d.get(o)}function ot(o,a,c,d){var p=ie(c,d,!0);p.set(o,a)}function it(o,a){var c=at(o,a),d=Re(o);if(d===null)return c;var p=it(d,a);if(p.length<=0)return c;if(c.length<=0)return p;for(var T=new D,_=[],b=0,u=c;b<u.length;b++){var w=u[b],$=T.has(w);$||(T.add(w),_.push(w))}for(var W=0,ht=p;W<ht.length;W++){var w=ht[W],$=T.has(w);$||(T.add(w),_.push(w))}return _}function at(o,a){var c=[],d=ie(o,a,!1);if(C(d))return c;for(var p=d.keys(),T=_s(p),_=0;;){var b=ws(T);if(!b)return c.length=_,c;var u=bs(b);try{c[_]=u}catch(w){try{$s(T)}finally{throw w}}_++}}function lt(o){if(o===null)return 1;switch(typeof o){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return o===null?1:6;default:return 6}}function C(o){return o===void 0}function te(o){return o===null}function ps(o){return typeof o=="symbol"}function B(o){return typeof o=="object"?o!==null:typeof o=="function"}function ys(o,a){switch(lt(o)){case 0:return o;case 1:return o;case 2:return o;case 3:return o;case 4:return o;case 5:return o}var c="string",d=ft(o,i);if(d!==void 0){var p=d.call(o,c);if(B(p))throw new TypeError;return p}return gs(o)}function gs(o,a){var c,d,p;{var T=o.toString;if(Se(T)){var d=T.call(o);if(!B(d))return d}var c=o.valueOf;if(Se(c)){var d=c.call(o);if(!B(d))return d}}throw new TypeError}function Ss(o){return!!o}function ms(o){return""+o}function L(o){var a=ys(o);return ps(a)?a:ms(a)}function ct(o){return Array.isArray?Array.isArray(o):o instanceof Object?o instanceof Array:Object.prototype.toString.call(o)==="[object Array]"}function Se(o){return typeof o=="function"}function dt(o){return typeof o=="function"}function vs(o){switch(lt(o)){case 3:return!0;case 4:return!0;default:return!1}}function ft(o,a){var c=o[a];if(c!=null){if(!Se(c))throw new TypeError;return c}}function _s(o){var a=ft(o,l);if(!Se(a))throw new TypeError;var c=a.call(o);if(!B(c))throw new TypeError;return c}function bs(o){return o.value}function ws(o){var a=o.next();return a.done?!1:a}function $s(o){var a=o.return;a&&a.call(o)}function Re(o){var a=Object.getPrototypeOf(o);if(typeof o!="function"||o===S||a!==S)return a;var c=o.prototype,d=c&&Object.getPrototypeOf(c);if(d==null||d===Object.prototype)return a;var p=d.constructor;return typeof p!="function"||p===o?a:p}function Es(){var o={},a=[],c=(function(){function _(b,u,w){this._index=0,this._keys=b,this._values=u,this._selector=w}return _.prototype["@@iterator"]=function(){return this},_.prototype[l]=function(){return this},_.prototype.next=function(){var b=this._index;if(b>=0&&b<this._keys.length){var u=this._selector(this._keys[b],this._values[b]);return b+1>=this._keys.length?(this._index=-1,this._keys=a,this._values=a):this._index++,{value:u,done:!1}}return{value:void 0,done:!0}},_.prototype.throw=function(b){throw this._index>=0&&(this._index=-1,this._keys=a,this._values=a),b},_.prototype.return=function(b){return this._index>=0&&(this._index=-1,this._keys=a,this._values=a),{value:b,done:!0}},_})();return(function(){function _(){this._keys=[],this._values=[],this._cacheKey=o,this._cacheIndex=-2}return Object.defineProperty(_.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),_.prototype.has=function(b){return this._find(b,!1)>=0},_.prototype.get=function(b){var u=this._find(b,!1);return u>=0?this._values[u]:void 0},_.prototype.set=function(b,u){var w=this._find(b,!0);return this._values[w]=u,this},_.prototype.delete=function(b){var u=this._find(b,!1);if(u>=0){for(var w=this._keys.length,$=u+1;$<w;$++)this._keys[$-1]=this._keys[$],this._values[$-1]=this._values[$];return this._keys.length--,this._values.length--,b===this._cacheKey&&(this._cacheKey=o,this._cacheIndex=-2),!0}return!1},_.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=o,this._cacheIndex=-2},_.prototype.keys=function(){return new c(this._keys,this._values,d)},_.prototype.values=function(){return new c(this._keys,this._values,p)},_.prototype.entries=function(){return new c(this._keys,this._values,T)},_.prototype["@@iterator"]=function(){return this.entries()},_.prototype[l]=function(){return this.entries()},_.prototype._find=function(b,u){return this._cacheKey!==b&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=b)),this._cacheIndex<0&&u&&(this._cacheIndex=this._keys.length,this._keys.push(b),this._values.push(void 0)),this._cacheIndex},_})();function d(_,b){return _}function p(_,b){return b}function T(_,b){return[_,b]}}function xs(){return(function(){function o(){this._map=new M}return Object.defineProperty(o.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),o.prototype.has=function(a){return this._map.has(a)},o.prototype.add=function(a){return this._map.set(a,a),this},o.prototype.delete=function(a){return this._map.delete(a)},o.prototype.clear=function(){this._map.clear()},o.prototype.keys=function(){return this._map.keys()},o.prototype.values=function(){return this._map.values()},o.prototype.entries=function(){return this._map.entries()},o.prototype["@@iterator"]=function(){return this.keys()},o.prototype[l]=function(){return this.keys()},o})()}function As(){var o=16,a=y.create(),c=d();return(function(){function u(){this._key=d()}return u.prototype.has=function(w){var $=p(w,!1);return $!==void 0?y.has($,this._key):!1},u.prototype.get=function(w){var $=p(w,!1);return $!==void 0?y.get($,this._key):void 0},u.prototype.set=function(w,$){var W=p(w,!0);return W[this._key]=$,this},u.prototype.delete=function(w){var $=p(w,!1);return $!==void 0?delete $[this._key]:!1},u.prototype.clear=function(){this._key=d()},u})();function d(){var u;do u="@@WeakMap@@"+b();while(y.has(a,u));return a[u]=!0,u}function p(u,w){if(!s.call(u,c)){if(!w)return;Object.defineProperty(u,c,{value:y.create()})}return u[c]}function T(u,w){for(var $=0;$<w;++$)u[$]=Math.random()*255|0;return u}function _(u){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(u)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(u)):T(new Uint8Array(u),u):T(new Array(u),u)}function b(){var u=_(o);u[6]=u[6]&79|64,u[8]=u[8]&191|128;for(var w="",$=0;$<o;++$){var W=u[$];($===4||$===6||$===8)&&(w+="-"),W<16&&(w+="0"),w+=W.toString(16).toLowerCase()}return w}}function Ue(o){return o.__=void 0,delete o.__,o}})})(n||(n={})),Mt}un();function Pt(n){return n.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join("")}class ye extends ne{constructor(){super(),this.semanticVersion="2.14.0-rc.20251105101124262",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new hn(this)}static define(){}connectedCallback(){super.connectedCallback(),this.setAttribute("gds-element",this.gdsElementName?.toString()||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(e,t){const s={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new Event(e,s)),this.dispatchEvent(new Event(Pt(e),s))].every(r=>r!==!1)}dispatchCustomEvent(e,t={}){const s={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new CustomEvent(e,s)),this.dispatchEvent(new CustomEvent(Pt(e),s))].every(r=>r!==!1)}}ye.isDefined=!1;ye.styleExpressionBaseSelector=":host";v([sn()],ye.prototype,"_isUsingTransitionalStyles",2);const qt=`/**
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
  --gds-sys-viewport-0: 0;
  --gds-sys-viewport-2xs: 320;
  --gds-sys-viewport-xs: 425;
  --gds-sys-viewport-s: 768;
  --gds-sys-viewport-m: 1024;
  --gds-sys-viewport-l: 1280;
  --gds-sys-viewport-xl: 1440;
  --gds-sys-viewport-2xl: 2560;
  --gds-sys-viewport-3xl: 3840;
  --gds-sys-viewport-4xl: 4320;
  --gds-sys-viewport-5xl: 6016;
  --gds-sys-viewport-6xl: 7680;
  --gds-sys-text-family: SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-weight-light: 300;
  --gds-sys-text-weight-regular: 400;
  --gds-sys-text-weight-book: 450;
  --gds-sys-text-weight-medium: 500;
  --gds-sys-text-weight-bold: 700;
  --gds-sys-text-heading-xl: 450 2rem/2.75rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-l: 450 1.75rem/2.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-m: 450 1.5rem/2rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-s: 450 1.25rem/1.75rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-xs: 450 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-2xs: 450 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-book-m: 450 1rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-book-s: 450 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-book-xs: 450 0.75rem/1rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-regular-m: 400 1rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-regular-s: 400 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-regular-xs: 400 0.75rem/1rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-book-l: 450 1.25rem/1.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-book-m: 450 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-book-s: 450 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-regular-l: 400 1.25rem/1.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-regular-m: 400 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-regular-s: 400 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-italic-l: italic 400 1.25rem/1.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-italic-m: italic 400 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-italic-s: italic 400 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-2xl: 450 5.125rem/5.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-xl: 450 4rem/4.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-l: 450 3rem/3.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-m: 450 2.25rem/2.75rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-s: 450 2rem/2.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-2xl: 450 2rem/2.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-xl: 450 1.75rem/2.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-l: 450 1.5rem/2rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-m: 450 1.25rem/1.75rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-s: 450 1.125rem/1.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-xs: 450 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-space-0: 0px;
  --gds-sys-space-5xs: 1px;
  --gds-sys-space-4xs: 2px;
  --gds-sys-space-3xs: 4px;
  --gds-sys-space-2xs: 6px;
  --gds-sys-space-xs: 8px;
  --gds-sys-space-s: 12px;
  --gds-sys-space-m: 16px;
  --gds-sys-space-l: 20px;
  --gds-sys-space-xl: 24px;
  --gds-sys-space-2xl: 32px;
  --gds-sys-space-3xl: 40px;
  --gds-sys-space-4xl: 48px;
  --gds-sys-space-5xl: 64px;
  --gds-sys-space-6xl: 80px;
  --gds-sys-space-7xl: 96px;
  --gds-sys-space-8xl: 112px;
  --gds-sys-space-9xl: 120px;
  --gds-sys-space-max: 999px;
  --gds-sys-radius-0: 0px;
  --gds-sys-radius-none: 0px;
  --gds-sys-radius-5xs: 1px;
  --gds-sys-radius-4xs: 2px;
  --gds-sys-radius-3xs: 4px;
  --gds-sys-radius-2xs: 6px;
  --gds-sys-radius-xs: 8px;
  --gds-sys-radius-s: 12px;
  --gds-sys-radius-m: 16px;
  --gds-sys-radius-l: 20px;
  --gds-sys-radius-xl: 24px;
  --gds-sys-radius-2xl: 32px;
  --gds-sys-radius-3xl: 40px;
  --gds-sys-radius-4xl: 48px;
  --gds-sys-radius-5xl: 64px;
  --gds-sys-radius-max: 999px;`,fe=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: dark;
  --gds-sys-color-l1-neutral-01: #0a0b0b;
  --gds-sys-color-l1-neutral-02: #0a0b0b;
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
  --gds-sys-color-l3-neutral-05: #003824;
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
  --gds-sys-color-state-warning-06: #f19e38 20%;`,Ce=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: light;
  --gds-sys-color-l1-neutral-01: #ffffff;
  --gds-sys-color-l1-neutral-02: #f4f5f5;
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
  --gds-sys-color-l3-neutral-05: #ffffff;
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
  --gds-sys-color-state-warning-06: #8f530a 16%;`,Ft=`/**
 * Do not edit directly, this file was auto-generated.
 */

  --gds-sys-shadow-xs-01: 0px 1px 2px 0px rgba(10, 11, 10, 0.05);
  --gds-sys-shadow-xs-02: 0px 0px 0px 0px transparent;
  --gds-sys-shadow-s-01: 0px 1px 2px 0px rgba(10, 11, 10, 0.10);
  --gds-sys-shadow-s-02: 0px 1px 3px 0px rgba(10, 11, 10, 0.06);
  --gds-sys-shadow-m-01: 0px 2px 4px -2px rgba(10, 11, 10, 0.10);
  --gds-sys-shadow-m-02: 0px 4px 8px -2px rgba(10, 11, 10, 0.06);
  --gds-sys-shadow-l-01: 0px 4px 6px -2px rgba(10, 11, 10, 0.08);
  --gds-sys-shadow-l-02: 0px 12px 16px -4px rgba(10, 11, 10, 0.03);
  --gds-sys-shadow-xl-01: 0px 20px 24px -4px rgba(10, 11, 10, 0.08);
  --gds-sys-shadow-xl-02: 0px 0px 0px 0px rgba(10, 11, 10, 0.08);
  --gds-sys-shadow-2xl-01: 0px 24px 48px -12px rgba(10, 11, 10, 0.18);
  --gds-sys-shadow-2xl-02: 0px 0px 0px 0px transparent;`;var pn={};const Oe=typeof process<"u"&&pn!==void 0,Hn=/iPad|iPhone|iPod/.test(Oe?"":navigator.userAgent);var ze,Te,ke,tt,ve,Zt,Jt;function yn(){return Oe?[]:document.adoptedStyleSheets||[]}const gn=class Xt{constructor(){k(this,ve),k(this,ze,!et()),k(this,Te,new Map),k(this,ke,new Map),k(this,tt,yn())}static get instance(){return globalThis.__gdsGlobalStylesRegistryScoped?.[G]||(globalThis.__gdsGlobalStylesRegistryScoped={...globalThis.__gdsGlobalStylesRegistryScoped,[G]:new Xt}),globalThis.__gdsGlobalStylesRegistryScoped[G]}injectGlobalStyles(e,t){if(m(this,ze)){const s=Array.isArray(t)?t.map(r=>r.toString()).join(""):t.toString();V(this,ve,Zt).call(this,e,s)}else t.styleSheet&&V(this,ve,Jt).call(this,e,t.styleSheet)}};ze=new WeakMap;Te=new WeakMap;ke=new WeakMap;tt=new WeakMap;ve=new WeakSet;Zt=function(n,e){if(Oe)return;let t=m(this,ke).get(n);t||(t=document.createElement("style"),m(this,ke).set(n,t)),t.textContent=e,document.head.appendChild(t)};Jt=function(n,e){Oe||(m(this,Te).set(n,e),document.adoptedStyleSheets=[...m(this,tt),...Array.from(m(this,Te).values())])};let Sn=gn;const Yt=[Me`
    :host {
      ${P(qt)}
      ${P(Ft)}
    }
  `];Sn.instance.injectGlobalStyles("root-tokens",Me`
    :root {
      ${P(qt)}
      ${P(Ft)}
    }
    :root:not([gds-theme]),
    :root[gds-theme='light'] {
      ${P(Ce)}
    }
    :root[gds-theme='dark'] {
      ${P(fe)}
    }
    :root[gds-theme='auto'] {
      @media (prefers-color-scheme: dark) {
        ${P(fe)}
      }
      @media (prefers-color-scheme: light) {
        ${P(Ce)}
      }
    }
  `);const mn={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},vn=/^([<|>]=?)?([0-9a-z]+)/,Qt=["{","}",";",":",","],Ot=[" ","/n"];function _n(n=""){const e=[];let t="";for(let s=0;s<n.length;s++){const r=n[s];if(Ot.includes(r)||(t+=r),Qt.includes(r)){e.push(t.slice(0,-1)),e.push(r),t="";continue}if(Ot.includes(r)||s===n.length-1){e.push(t),t="";continue}}return e.filter(s=>s!=="")}function bn(n){const e=[];let t={breakpoint:"-",values:[]};const s=()=>({sel:"",values:[]});let r=s();for(const i of n){if(!Qt.includes(i)){r.values.push(i);continue}if(i==="{"&&(t={breakpoint:r.values.join(","),values:[]},r=s()),i===";"&&(e.length===0&&e.push(t),r.values.length>0&&(t.values.push(r),r=s())),i===":"){const l=r.values.pop()??"";r.sel=l}t&&i==="}"&&(t.values.push(r),r=s(),e.push(t))}return r.values.length>0&&t.values.push(r),e.length===0&&e.push(t),e}function wn(n){return n.split(",").map(t=>{const s=t.trim().match(vn);if(!s)throw new Error(`Invalid breakpoint specifier: ${t}`);return{condition:s[1],value:s[2]}})}function $n(n,e,t,s=i=>i,r=(i,l)=>`${i}: ${l.join(" ")};`){let i="";for(const l of t){const g=`@media ${(l.breakpoint==="-"?[{condition:">=",value:"0"}]:wn(l.breakpoint)).map(y=>`(${y.condition?.includes("<")?"max-width":"min-width"}: ${mn[y.value]??y.value})`).join(" and ")} {${l.values.map(y=>{let S=n;y.sel.length>0&&(S=n===":host"?`:host(:${y.sel})`:`${n}:${y.sel}`);const x=r(e,y.values.map(s));return y.sel==="hover"?`@media (hover: hover) {${S}{${x}}}`:`${S}{${x}}`}).join("")}}`;i+=g}return i}const Le=new Map;function E(n){return(e,t)=>{const s=n?.property??String(t),r=n?.valueTemplate,i=n?.styleTemplate,l=n?.cacheOverrideKey??"0",h=n?.attribute??String(t);J({attribute:h,reflect:n?.reflect,noAccessor:!0})(e,t),Object.defineProperty(e,t,{get:function(){return this["__"+String(t)]},set:async function(f){f=f?.toString().trim()??"",this["__"+String(t)]=f,n?.reflect&&(f?this.setAttribute(h,String(f)):this.removeAttribute(h)),await this.updateComplete;const g=n?.selector??this.constructor.styleExpressionBaseSelector,y=this.level??"0",S=g+s+f+y+l;if(Le.has(S)){this._dynamicStylesController.inject(`sep_${String(t)}`,Le.get(S));return}const x=bn(_n(f)),M=$n(g,s,x,r?.bind(this),i?.bind(this)),D=P(M);Le.set(S,D),this._dynamicStylesController.inject(`sep_${String(t)}`,D)}})}}function En(n,e,t){if(n==="transparent"||n==="currentColor"||n==="inherit")return n;const[s,r]=n.split("/");let i;return t&&e==="background"?i=`var(--gds-sys-color-l${t}-${s})`:i=`var(--gds-sys-color-${e}-${s})`,r?`color-mix(in srgb, ${i} ${parseFloat(r)*100}%, transparent 0%)`:i}function xn(n){return{valueTemplate:function(e){return En(e,n,this.level)}}}const je={valueTemplate:n=>`var(--gds-sys-space-${n}, 0)`},Wn={valueTemplate:n=>`var(--gds-sys-radius-${n}, 0)`},O={valueTemplate:n=>`var(--gds-sys-space-${An(n)}, ${n})`},Ie={valueTemplate:n=>{const t=(n.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${n})`:`calc(var(--gds-sys-space-${n.substring(1)}) * -1)`;return n==="auto"?"auto":t},styleTemplate:(n,e)=>{const t=h=>h==="auto"?"auto":`${h}`,s=t(e[0]),r=e.length>1?t(e[1]):s,i=e.length>2?t(e[2]):s,l=e.length>3?t(e[3]):r;return`${n}: ${s} ${r} ${i} ${l};`}};function An(n){return n.replace(/[^a-zA-Z0-9-]/g,"")}function zn(n){class e extends n{}return v([E(O)],e.prototype,"width",2),v([E(O)],e.prototype,"min-width",2),v([E(O)],e.prototype,"max-width",2),v([E(O)],e.prototype,"inline-size",2),v([E(O)],e.prototype,"min-inline-size",2),v([E(O)],e.prototype,"max-inline-size",2),e}function Vn(n){class e extends n{}return v([E(O)],e.prototype,"height",2),v([E(O)],e.prototype,"min-height",2),v([E(O)],e.prototype,"max-height",2),v([E(O)],e.prototype,"block-size",2),v([E(O)],e.prototype,"min-block-size",2),v([E(O)],e.prototype,"max-block-size",2),e}function Cn(n){class e extends n{}return v([E(Ie)],e.prototype,"margin",2),v([E(Ie)],e.prototype,"margin-inline",2),v([E(Ie)],e.prototype,"margin-block",2),e}function qn(n){class e extends n{}return v([E(je)],e.prototype,"padding",2),v([E(je)],e.prototype,"padding-inline",2),v([E(je)],e.prototype,"padding-block",2),e}function Tn(n){class e extends n{}return v([E()],e.prototype,"align-self",2),v([E()],e.prototype,"justify-self",2),v([E()],e.prototype,"place-self",2),v([E()],e.prototype,"grid-column",2),v([E()],e.prototype,"grid-row",2),v([E()],e.prototype,"grid-area",2),v([E()],e.prototype,"flex",2),v([E()],e.prototype,"order",2),e}function Fn(n){class e extends n{}return v([E()],e.prototype,"position",2),v([E()],e.prototype,"transform",2),v([E()],e.prototype,"inset",2),e}const kn=Me`
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
`;var Mn=kn;class H extends Cn(Tn(ye)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const t={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...t,"aria-label":this.label}:{...t,role:"presentation"}}get svgContent(){const e=this.constructor;return this.solid?e._solidSVG:e._regularSVG}applyStroke(e){return this.stroke?e.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):e}generateAttributesString(e){return Object.entries(e).filter(([t,s])=>s!==void 0).map(([t,s])=>`${t}="${s}"`).join(`
      `)}render(){const e=this.svgAttributes;let t=this.svgContent||"";this.stroke&&(t=this.applyStroke(t));const s=`
      <svg ${this.generateAttributesString(e)}>
        ${t}
      </svg>
    `;return jt`${fn(s)}`}}H.styles=[Yt,Mn];v([E({...O,property:"height",selector:"svg"})],H.prototype,"size",2);v([J({type:Boolean})],H.prototype,"solid",2);v([J({type:Number})],H.prototype,"stroke",2);v([J()],H.prototype,"level",2);v([E(xn("content"))],H.prototype,"color",2);v([J({type:String})],H.prototype,"label",2);H.define();var _e,be,Ve;const Bn=class Kt{constructor(){k(this,_e,new Map),k(this,be,new Map),k(this,Ve,!et())}static get instance(){return globalThis.__gdsTransitionalStyles?.[G]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[G]:new Kt}),globalThis.__gdsTransitionalStyles[G]}apply(e,t){if(!e.shadowRoot)return;const s=m(this,_e).get(t);s&&(m(this,be).set(t,e),this.applyToElement(t,s))}applyToElement(e,t){const s=m(this,be).get(e);if(!s||!s.shadowRoot)return;const r=()=>{s._dynamicStylesController.clearInitial(),s._dynamicStylesController.inject("t-styles",P(t)),s._isUsingTransitionalStyles=!0},i=()=>{s._isUsingTransitionalStyles=!1,s._dynamicStylesController.clear("t-styles"),s._dynamicStylesController.restoreInitial()},l="[gds-element=gds-theme]";let h=s.getRootNode(),f=s.closest(l);for(;f===null&&h!==document;)f=h.host?.closest(l),h=h.host?.getRootNode();if(f){const g=f,y=()=>{g.designVersion==="2023"?i():r()};if(g.addEventListener("gds-design-version-changed",y),s.addEventListener("gds-element-disconnected",()=>g.removeEventListener("gds-design-version-changed",y)),g.designVersion==="2023"){i();return}}r()}register(e,t){let s=t;m(this,Ve)&&(s=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${t}`),m(this,_e).set(e,s),this.applyToElement(e,s)}};_e=new WeakMap;be=new WeakMap;Ve=new WeakMap;let Pn=Bn;function es(n,e){const t={waitUntilFirstUpdate:!1,...e};return(s,r,i)=>{const{update:l}=s,h=Array.isArray(n)?n:[n];s.update=function(f){h.forEach(g=>{const y=g;if(f.has(y)){const S=f.get(y),x=this[y];S!==x&&(!t.waitUntilFirstUpdate||this.hasUpdated)&&i.value?.call(this,S,x)}}),l.call(this,f)}}}let N=class extends H{};N._regularSVG='<path d="M6.75 12H17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';N._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 11.5858 6.33579 11.25 6.75 11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H6.75C6.33579 12.75 6 12.4142 6 12Z" fill="currentColor"/>';N._name="minus-small";N._width=24;N._height=24;N._viewBox="0 0 24 24";N=v([Wt("gds-icon-minus-small")],N);let Z=class extends ye{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2023"}connectedCallback(){super.connectedCallback(),Pn.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",P(`:host {${fe}}`))}render(){return le`<slot></slot>`}_onColorSchemeChange(){switch(this.colorScheme){case"dark":this._dynamicStylesController.inject("color-scheme",P(`:host { ${fe}}`));break;case"light":default:this._dynamicStylesController.inject("color-scheme",P(`:host { ${Ce}}`));break;case"auto":this._dynamicStylesController.inject("color-scheme",P(`:host { ${Ce}} @media (prefers-color-scheme: dark) { :host { ${fe} } }`));break}this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};Z.styles=[Yt,Me`
      :host {
        display: contents;
        color: var(--gds-sys-color-content-neutral-01);
        font-family: var(--gds-sys-text-family);
      }
    `];v([J({reflect:!0,attribute:"color-scheme"})],Z.prototype,"colorScheme",2);v([J({reflect:!0,attribute:"design-version"})],Z.prototype,"designVersion",2);v([es("colorScheme")],Z.prototype,"_onColorSchemeChange",1);v([es("designVersion")],Z.prototype,"_onDesignVersionChange",1);Z=v([Wt("gds-theme")],Z);N.define();var On=Object.getOwnPropertyDescriptor,Dn=(n,e,t,s)=>{for(var r=s>1?void 0:s?On(e,t):e,i=n.length-1,l;i>=0;i--)(l=n[i])&&(r=l(r)||r);return r};Z.define();globalThis.URLPattern||await Ne(()=>import("./index-DPyTNidZ.js"),[]);let Dt=class extends ne{constructor(){super(...arguments),this._router=new Qs(this,[{path:"/",render:()=>le`<h1>Green testbed</h1>`},{path:"/green-testbed/all-components",render:()=>le`<all-components></all-components>`,enter:(async n=>{await Ne(()=>import("./all-components-CdfIwW7d.js"),__vite__mapDeps([0,1]))})},{path:"/green-testbed/form",render:()=>le`<form-view></form-view>`,enter:(async n=>{await Ne(()=>import("./form-D90ACTN0.js"),__vite__mapDeps([2,1]))})}])}createRenderRoot(){return this}render(){return le`<gds-theme><main>${this._router.outlet()}</main></gds-theme>`}};Dt=Dn([Ks("green-testbed-main")],Dt);export{xn as A,En as B,je as C,Wn as D,A as E,Nn as F,H as G,sn as H,P as I,N as J,fn as K,Sn as L,Hn as M,Z as N,ee as T,Gn as Z,v as _,Me as a,dn as b,ln as c,Oe as d,cn as e,k as f,Wt as g,le as h,ne as i,V as j,m as k,F as l,Pn as m,ye as n,Yt as o,J as p,zn as q,Cn as r,Tn as s,Ks as t,E as u,Vn as v,es as w,jt as x,qn as y,Fn as z};
