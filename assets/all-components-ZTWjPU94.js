import{f as Ul,u as Zl,r as na,a as ne,i as D,h as w,g as $,T as zs,E as pe,x as be,V as Xn,Z as Ql,t as Xl}from"./index-Dpn2lPeO.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jl={attribute:!0,type:String,converter:Zl,reflect:!1,hasChanged:Ul},Kl=(e=Jl,t,s)=>{const{kind:n,metadata:i}=s;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(s.name,e),n==="accessor"){const{name:l}=s;return{set(h){const u=t.get.call(this);t.set.call(this,h),this.requestUpdate(l,u,e)},init(h){return h!==void 0&&this.P(l,void 0,e),h}}}if(n==="setter"){const{name:l}=s;return function(h){const u=this[l];t.call(this,h),this.requestUpdate(l,u,e)}}throw Error("Unsupported decorator location: "+n)};function d(e){return(t,s)=>typeof s=="object"?Kl(e,t,s):((n,i,r)=>{const l=i.hasOwnProperty(r);return i.constructor.createProperty(r,l?{...n,wrapped:!0}:n),l?Object.getOwnPropertyDescriptor(i,r):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function de(e){return d({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Q(e,t){return(s,n,i)=>{const r=l=>l.renderRoot?.querySelector(e)??null;return Zi(s,n,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ed;function td(e){return(t,s)=>Zi(t,s,{get(){return(this.renderRoot??(ed??=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zt(e){return(t,s)=>Zi(t,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}var sd=Object.defineProperty,nd=Object.getOwnPropertyDescriptor,o=(e,t,s,n)=>{for(var i=n>1?void 0:n?nd(t,s):t,r=e.length-1,l;r>=0;r--)(l=e[r])&&(i=(n?l(t,s,i):l(i))||i);return n&&i&&sd(t,s,i),i},Qi=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},a=(e,t,s)=>(Qi(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},G=(e,t,s,n)=>(Qi(e,t,"write to private field"),t.set(e,s),s),x=(e,t,s)=>(Qi(e,t,"access private method"),s),Fe,yn,it,bn,It,Ie,ot,mn,no,oa,Kt,bs,oo,ia;class od{constructor(t){c(this,no),c(this,Kt),c(this,oo),c(this,Fe,!Xi()),c(this,yn,!1),c(this,it,[]),c(this,bn,[]),c(this,It,new Map),c(this,Ie,new Map),c(this,ot,[]),c(this,mn,[]),this.host=t,this.host.addController(this)}hostConnected(){x(this,oo,ia).call(this)}has(t){return a(this,Fe)?a(this,Ie).has(t):a(this,It).has(t)}inject(t,s){x(this,no,oa).call(this,t,s),x(this,Kt,bs).call(this)}clear(t){a(this,Fe)?this.host.updateComplete.then(()=>{a(this,Ie).get(t)?.remove(),a(this,Ie).delete(t)}):a(this,It).delete(t),x(this,Kt,bs).call(this)}clearAll(){a(this,Fe)?this.host.updateComplete.then(()=>{a(this,Ie).forEach(t=>t.remove()),a(this,ot).forEach(t=>t.remove()),a(this,Ie).clear(),G(this,ot,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],a(this,It).clear(),G(this,it,[]))}clearInitial(){a(this,Fe)?this.host.updateComplete.then(()=>{a(this,ot).forEach(t=>t.remove()),G(this,ot,[])}):G(this,it,[]),x(this,Kt,bs).call(this)}restoreInitial(){a(this,Fe)?a(this,mn).forEach(t=>{a(this,ot).push(t.cloneNode(!0))}):G(this,it,[...a(this,bn)]),x(this,Kt,bs).call(this)}}Fe=new WeakMap;yn=new WeakMap;it=new WeakMap;bn=new WeakMap;It=new WeakMap;Ie=new WeakMap;ot=new WeakMap;mn=new WeakMap;no=new WeakSet;oa=function(e,t){if(a(this,Fe)){let s=a(this,Ie).get(e);s||(s=document.createElement("style"),a(this,Ie).set(e,s)),s.textContent=t.cssText}else{if(!this.host.shadowRoot||!t.styleSheet)return;a(this,It).set(e,t.styleSheet)}};Kt=new WeakSet;bs=function(){if(a(this,Fe))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(e=>{e.remove()}),a(this,ot).forEach(e=>{this.host.shadowRoot?.appendChild(e)}),a(this,Ie).forEach(e=>{this.host.shadowRoot?.appendChild(e)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...a(this,it),...Array.from(a(this,It).values())]}};oo=new WeakSet;ia=function(){a(this,yn)||(a(this,Fe)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(e=>{a(this,ot).push(e),a(this,mn).push(e.cloneNode(!0))})}):this.host.shadowRoot&&a(this,it).length===0&&(G(this,it,[...this.host.shadowRoot.adoptedStyleSheets||[]]),G(this,bn,[...a(this,it)])),G(this,yn,!0))};function Xi(){try{return new CSSStyleSheet,!0}catch{return!1}}var Rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Br={};/*! *****************************************************************************
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
***************************************************************************** */var Fr;function id(){if(Fr)return Br;Fr=1;var e;return function(t){(function(s){var n=typeof Rr=="object"?Rr:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),i=r(t);typeof n.Reflect>"u"?n.Reflect=t:i=r(n.Reflect,i),s(i);function r(l,h){return function(u,g){typeof l[u]!="function"&&Object.defineProperty(l,u,{configurable:!0,writable:!0,value:g}),h&&h(u,g)}}})(function(s){var n=Object.prototype.hasOwnProperty,i=typeof Symbol=="function",r=i&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",l=i&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",h=typeof Object.create=="function",u={__proto__:[]}instanceof Array,g=!h&&!u,b={create:h?function(){return Qn(Object.create(null))}:u?function(){return Qn({__proto__:null})}:function(){return Qn({})},has:g?function(p,f){return n.call(p,f)}:function(p,f){return f in p},get:g?function(p,f){return n.call(p,f)?p[f]:void 0}:function(p,f){return p[f]}},y=Object.getPrototypeOf(Function),k=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",_=!k&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:Yl(),S=!k&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:jl(),T=!k&&typeof WeakMap=="function"?WeakMap:ql(),B=new T;function V(p,f,v,C){if(se(v)){if(!Lr(p))throw new TypeError;if(!Wr(f))throw new TypeError;return Ns(p,f)}else{if(!Lr(p))throw new TypeError;if(!ue(f))throw new TypeError;if(!ue(C)&&!se(C)&&!Jt(C))throw new TypeError;return Jt(C)&&(C=void 0),v=et(v),Hs(p,f,v,C)}}s("decorate",V);function j(p,f){function v(C,E){if(!ue(C))throw new TypeError;if(!se(E)&&!Il(E))throw new TypeError;Se(p,f,C,E)}return v}s("metadata",j);function K(p,f,v,C){if(!ue(v))throw new TypeError;return se(C)||(C=et(C)),Se(p,f,v,C)}s("defineMetadata",K);function he(p,f,v){if(!ue(f))throw new TypeError;return se(v)||(v=et(v)),Be(p,f,v)}s("hasMetadata",he);function te(p,f,v){if(!ue(f))throw new TypeError;return se(v)||(v=et(v)),Xt(p,f,v)}s("hasOwnMetadata",te);function yt(p,f,v){if(!ue(f))throw new TypeError;return se(v)||(v=et(v)),mt(p,f,v)}s("getMetadata",yt);function Un(p,f,v){if(!ue(f))throw new TypeError;return se(v)||(v=et(v)),Ke(p,f,v)}s("getOwnMetadata",Un);function fs(p,f){if(!ue(p))throw new TypeError;return se(f)||(f=et(f)),Me(p,f)}s("getMetadataKeys",fs);function Qt(p,f){if(!ue(p))throw new TypeError;return se(f)||(f=et(f)),Gs(p,f)}s("getOwnMetadataKeys",Qt);function Lt(p,f,v){if(!ue(f))throw new TypeError;se(v)||(v=et(v));var C=bt(f,v,!1);if(se(C)||!C.delete(p))return!1;if(C.size>0)return!0;var E=B.get(f);return E.delete(v),E.size>0||B.delete(f),!0}s("deleteMetadata",Lt);function Ns(p,f){for(var v=p.length-1;v>=0;--v){var C=p[v],E=C(f);if(!se(E)&&!Jt(E)){if(!Wr(E))throw new TypeError;f=E}}return f}function Hs(p,f,v,C){for(var E=p.length-1;E>=0;--E){var re=p[E],z=re(f,v,C);if(!se(z)&&!Jt(z)){if(!ue(z))throw new TypeError;C=z}}return C}function bt(p,f,v){var C=B.get(p);if(se(C)){if(!v)return;C=new _,B.set(p,C)}var E=C.get(f);if(se(E)){if(!v)return;E=new _,C.set(f,E)}return E}function Be(p,f,v){var C=Xt(p,f,v);if(C)return!0;var E=Zn(f);return Jt(E)?!1:Be(p,E,v)}function Xt(p,f,v){var C=bt(f,v,!1);return se(C)?!1:Bl(C.has(p))}function mt(p,f,v){var C=Xt(p,f,v);if(C)return Ke(p,f,v);var E=Zn(f);if(!Jt(E))return mt(p,E,v)}function Ke(p,f,v){var C=bt(f,v,!1);if(!se(C))return C.get(p)}function Se(p,f,v,C){var E=bt(v,C,!0);E.set(p,f)}function Me(p,f){var v=Gs(p,f),C=Zn(p);if(C===null)return v;var E=Me(C,f);if(E.length<=0)return v;if(v.length<=0)return E;for(var re=new S,z=[],L=0,M=v;L<M.length;L++){var F=M[L],I=re.has(F);I||(re.add(F),z.push(F))}for(var vt=0,Vr=E;vt<Vr.length;vt++){var F=Vr[vt],I=re.has(F);I||(re.add(F),z.push(F))}return z}function Gs(p,f){var v=[],C=bt(p,f,!1);if(se(C))return v;for(var E=C.keys(),re=Pl(E),z=0;;){var L=Hl(re);if(!L)return v.length=z,v;var M=Nl(L);try{v[z]=M}catch(F){try{Gl(re)}finally{throw F}}z++}}function Dr(p){if(p===null)return 1;switch(typeof p){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return p===null?1:6;default:return 6}}function se(p){return p===void 0}function Jt(p){return p===null}function Ol(p){return typeof p=="symbol"}function ue(p){return typeof p=="object"?p!==null:typeof p=="function"}function Vl(p,f){switch(Dr(p)){case 0:return p;case 1:return p;case 2:return p;case 3:return p;case 4:return p;case 5:return p}var v="string",C=Or(p,r);if(C!==void 0){var E=C.call(p,v);if(ue(E))throw new TypeError;return E}return Rl(p)}function Rl(p,f){var v,C,E;{var re=p.toString;if(Ys(re)){var C=re.call(p);if(!ue(C))return C}var v=p.valueOf;if(Ys(v)){var C=v.call(p);if(!ue(C))return C}}throw new TypeError}function Bl(p){return!!p}function Fl(p){return""+p}function et(p){var f=Vl(p);return Ol(f)?f:Fl(f)}function Lr(p){return Array.isArray?Array.isArray(p):p instanceof Object?p instanceof Array:Object.prototype.toString.call(p)==="[object Array]"}function Ys(p){return typeof p=="function"}function Wr(p){return typeof p=="function"}function Il(p){switch(Dr(p)){case 3:return!0;case 4:return!0;default:return!1}}function Or(p,f){var v=p[f];if(v!=null){if(!Ys(v))throw new TypeError;return v}}function Pl(p){var f=Or(p,l);if(!Ys(f))throw new TypeError;var v=f.call(p);if(!ue(v))throw new TypeError;return v}function Nl(p){return p.value}function Hl(p){var f=p.next();return f.done?!1:f}function Gl(p){var f=p.return;f&&f.call(p)}function Zn(p){var f=Object.getPrototypeOf(p);if(typeof p!="function"||p===y||f!==y)return f;var v=p.prototype,C=v&&Object.getPrototypeOf(v);if(C==null||C===Object.prototype)return f;var E=C.constructor;return typeof E!="function"||E===p?f:E}function Yl(){var p={},f=[],v=function(){function z(L,M,F){this._index=0,this._keys=L,this._values=M,this._selector=F}return z.prototype["@@iterator"]=function(){return this},z.prototype[l]=function(){return this},z.prototype.next=function(){var L=this._index;if(L>=0&&L<this._keys.length){var M=this._selector(this._keys[L],this._values[L]);return L+1>=this._keys.length?(this._index=-1,this._keys=f,this._values=f):this._index++,{value:M,done:!1}}return{value:void 0,done:!0}},z.prototype.throw=function(L){throw this._index>=0&&(this._index=-1,this._keys=f,this._values=f),L},z.prototype.return=function(L){return this._index>=0&&(this._index=-1,this._keys=f,this._values=f),{value:L,done:!0}},z}();return function(){function z(){this._keys=[],this._values=[],this._cacheKey=p,this._cacheIndex=-2}return Object.defineProperty(z.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),z.prototype.has=function(L){return this._find(L,!1)>=0},z.prototype.get=function(L){var M=this._find(L,!1);return M>=0?this._values[M]:void 0},z.prototype.set=function(L,M){var F=this._find(L,!0);return this._values[F]=M,this},z.prototype.delete=function(L){var M=this._find(L,!1);if(M>=0){for(var F=this._keys.length,I=M+1;I<F;I++)this._keys[I-1]=this._keys[I],this._values[I-1]=this._values[I];return this._keys.length--,this._values.length--,L===this._cacheKey&&(this._cacheKey=p,this._cacheIndex=-2),!0}return!1},z.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=p,this._cacheIndex=-2},z.prototype.keys=function(){return new v(this._keys,this._values,C)},z.prototype.values=function(){return new v(this._keys,this._values,E)},z.prototype.entries=function(){return new v(this._keys,this._values,re)},z.prototype["@@iterator"]=function(){return this.entries()},z.prototype[l]=function(){return this.entries()},z.prototype._find=function(L,M){return this._cacheKey!==L&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=L)),this._cacheIndex<0&&M&&(this._cacheIndex=this._keys.length,this._keys.push(L),this._values.push(void 0)),this._cacheIndex},z}();function C(z,L){return z}function E(z,L){return L}function re(z,L){return[z,L]}}function jl(){return function(){function p(){this._map=new _}return Object.defineProperty(p.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),p.prototype.has=function(f){return this._map.has(f)},p.prototype.add=function(f){return this._map.set(f,f),this},p.prototype.delete=function(f){return this._map.delete(f)},p.prototype.clear=function(){this._map.clear()},p.prototype.keys=function(){return this._map.keys()},p.prototype.values=function(){return this._map.values()},p.prototype.entries=function(){return this._map.entries()},p.prototype["@@iterator"]=function(){return this.keys()},p.prototype[l]=function(){return this.keys()},p}()}function ql(){var p=16,f=b.create(),v=C();return function(){function M(){this._key=C()}return M.prototype.has=function(F){var I=E(F,!1);return I!==void 0?b.has(I,this._key):!1},M.prototype.get=function(F){var I=E(F,!1);return I!==void 0?b.get(I,this._key):void 0},M.prototype.set=function(F,I){var vt=E(F,!0);return vt[this._key]=I,this},M.prototype.delete=function(F){var I=E(F,!1);return I!==void 0?delete I[this._key]:!1},M.prototype.clear=function(){this._key=C()},M}();function C(){var M;do M="@@WeakMap@@"+L();while(b.has(f,M));return f[M]=!0,M}function E(M,F){if(!n.call(M,v)){if(!F)return;Object.defineProperty(M,v,{value:b.create()})}return M[v]}function re(M,F){for(var I=0;I<F;++I)M[I]=Math.random()*255|0;return M}function z(M){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(M)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(M)):re(new Uint8Array(M),M):re(new Array(M),M)}function L(){var M=z(p);M[6]=M[6]&79|64,M[8]=M[8]&191|128;for(var F="",I=0;I<p;++I){var vt=M[I];(I===4||I===6||I===8)&&(F+="-"),vt<16&&(F+="0"),F+=vt.toString(16).toLowerCase()}return F}}function Qn(p){return p.__=void 0,delete p.__,p}})}(e||(e={})),Br}id();function Ir(e){return e.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}class R extends na{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new od(this)}static define(){}connectedCallback(){super.connectedCallback(),this.setAttribute("gds-element",this.gdsElementName?.toString()||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(t,s){const n={bubbles:!0,composed:!1,cancelable:!0,...s};return[this.dispatchEvent(new Event(t,n)),this.dispatchEvent(new Event(Ir(t),n))].every(i=>i!==!1)}dispatchCustomEvent(t,s={}){const n={bubbles:!0,composed:!1,cancelable:!0,...s};return[this.dispatchEvent(new CustomEvent(t,n)),this.dispatchEvent(new CustomEvent(Ir(t),n))].every(i=>i!==!1)}}R.isDefined=!1;R.styleExpressionBaseSelector=":host";o([de()],R.prototype,"_isUsingTransitionalStyles",2);const ra=`/**
 * Do not edit directly, this file was auto-generated.
 */

  --gds-sys-state-hover-state-layer-opacity: 0.10;
  --gds-sys-motion-easing-ease-in: cubic-bezier(0.64, 0, 0.78, 0);
  --gds-sys-motion-easing-ease-in-out: cubic-bezier(0.83, 0, 0.17, 1);
  --gds-sys-motion-easing-ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --gds-sys-motion-easing-linear: cubic-bezier(0, 0, 1, 1);
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
  --gds-sys-viewport-2-xl: 2560;
  --gds-sys-viewport-3-xl: 3840;
  --gds-sys-text-size-heading-xl: 32px;
  --gds-sys-text-size-heading-l: 28px;
  --gds-sys-text-size-heading-m: 24px;
  --gds-sys-text-size-heading-s: 20px;
  --gds-sys-text-size-heading-xs: 16px;
  --gds-sys-text-size-heading-2xs: 14px;
  --gds-sys-text-size-heading-2xl: 14px;
  --gds-sys-text-size-detail-m: 16px;
  --gds-sys-text-size-detail-s: 14px;
  --gds-sys-text-size-detail-xs: 12px;
  --gds-sys-text-size-body-l: 20px;
  --gds-sys-text-size-body-m: 16px;
  --gds-sys-text-size-body-s: 14px;
  --gds-sys-text-size-display-2xl: 82px;
  --gds-sys-text-size-display-xl: 64px;
  --gds-sys-text-size-display-l: 48px;
  --gds-sys-text-size-display-m: 36px;
  --gds-sys-text-size-display-s: 32px;
  --gds-sys-text-size-preamble-2xl: 32px;
  --gds-sys-text-size-preamble-xl: 28px;
  --gds-sys-text-size-preamble-l: 24px;
  --gds-sys-text-size-preamble-m: 20px;
  --gds-sys-text-size-preamble-s: 18px;
  --gds-sys-text-size-preamble-xs: 16px;
  --gds-sys-text-line-height-heading-xl: 44px;
  --gds-sys-text-line-height-heading-l: 40px;
  --gds-sys-text-line-height-heading-m: 32px;
  --gds-sys-text-line-height-heading-s: 28px;
  --gds-sys-text-line-height-heading-xs: 24px;
  --gds-sys-text-line-height-heading-2xs: 20px;
  --gds-sys-text-line-height-detail-m: 20px;
  --gds-sys-text-line-height-detail-s: 18px;
  --gds-sys-text-line-height-detail-xs: 16px;
  --gds-sys-text-line-height-body-l: 26px;
  --gds-sys-text-line-height-body-m: 24px;
  --gds-sys-text-line-height-body-s: 20px;
  --gds-sys-text-line-height-display-2xl: 90px;
  --gds-sys-text-line-height-display-xl: 72px;
  --gds-sys-text-line-height-display-l: 56px;
  --gds-sys-text-line-height-display-m: 44px;
  --gds-sys-text-line-height-display-s: 40px;
  --gds-sys-text-line-height-preamble-2xl: 40px;
  --gds-sys-text-line-height-preamble-xl: 36px;
  --gds-sys-text-line-height-preamble-l: 32px;
  --gds-sys-text-line-height-preamble-m: 28px;
  --gds-sys-text-line-height-preamble-s: 26px;
  --gds-sys-text-line-height-preamble-xs: 24px;
  --gds-sys-text-weight-light: 300;
  --gds-sys-text-weight-regular: 400;
  --gds-sys-text-weight-book: 450;
  --gds-sys-text-weight-medium: 500;
  --gds-sys-text-weight-bold: 700;
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
  --gds-sys-space-max: 999px;`,io=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: dark;
  --gds-sys-color-l1-background-primary: #0e0e0e;
  --gds-sys-color-l1-background-tertiary: #d7d7d7;
  --gds-sys-color-l1-background-secondary: #131313;
  --gds-sys-color-l1-content-positive: #54b561;
  --gds-sys-color-l1-content-negative: #a63e2a;
  --gds-sys-color-l1-content-primary: #d7d7d7;
  --gds-sys-color-l1-content-secondary: #ababab;
  --gds-sys-color-l1-content-tertiary: #1b1b1b;
  --gds-sys-color-l2-background-primary: #242424;
  --gds-sys-color-l2-background-secondary: #242424;
  --gds-sys-color-l2-background-tertiary: #d7d7d7;
  --gds-sys-color-l2-background-positive: #1d3f22;
  --gds-sys-color-l2-background-negative: #4a1c13;
  --gds-sys-color-l2-background-notice: #152c41;
  --gds-sys-color-l2-background-warning: #4c3212;
  --gds-sys-color-l2-background-information: #353535;
  --gds-sys-color-l2-background-copper-01: #f2efeb;
  --gds-sys-color-l2-background-copper-02: #332a18;
  --gds-sys-color-l2-background-purple-01: #f3eff7;
  --gds-sys-color-l2-background-purple-02: #372b40;
  --gds-sys-color-l2-background-green-01: #ecf6ed;
  --gds-sys-color-l2-background-green-02: #1d3f22;
  --gds-sys-color-l2-background-blue-01: #eaf0f7;
  --gds-sys-color-l2-background-blue-02: #152c41;
  --gds-sys-color-l2-content-primary: #d7d7d7;
  --gds-sys-color-l2-content-secondary: #ababab;
  --gds-sys-color-l2-content-tertiary: #1b1b1b;
  --gds-sys-color-l2-content-positive: #54b561;
  --gds-sys-color-l2-content-negative: #ee8375;
  --gds-sys-color-l2-content-warning: #f3b274;
  --gds-sys-color-l2-content-notice: #78a3d5;
  --gds-sys-color-l2-content-information: #d7d7d7;
  --gds-sys-color-l2-content-copper-01: #1b1b1b;
  --gds-sys-color-l2-content-copper-02: #ffffff;
  --gds-sys-color-l2-content-purple-01: #1b1b1b;
  --gds-sys-color-l2-content-purple-02: #ffffff;
  --gds-sys-color-l2-content-green-01: #1b1b1b;
  --gds-sys-color-l2-content-green-02: #ffffff;
  --gds-sys-color-l2-content-blue-01: #1b1b1b;
  --gds-sys-color-l2-content-blue-02: #ffffff;
  --gds-sys-color-l2-border-primary: #353535;
  --gds-sys-color-l2-border-secondary: #5e5e5e;
  --gds-sys-color-l2-border-tertiary: #2c2c2c;
  --gds-sys-color-l2-border-quarternary: #d7d7d7;
  --gds-sys-color-l2-border-inversed: #1b1b1b;
  --gds-sys-color-l3-background-primary: #d7d7d7;
  --gds-sys-color-l3-background-secondary: #353535;
  --gds-sys-color-l3-background-tertiary: #424242;
  --gds-sys-color-l3-background-quarternary: #0e0e0e;
  --gds-sys-color-l3-background-positive: #54b561;
  --gds-sys-color-l3-background-positive-secondary: #25512b;
  --gds-sys-color-l3-background-positive-badge: #306938;
  --gds-sys-color-l3-background-negative: #c04831;
  --gds-sys-color-l3-background-negative-secondary: #602418;
  --gds-sys-color-l3-background-negative-badge: #4a1c13;
  --gds-sys-color-l3-background-notice: #78a3d5;
  --gds-sys-color-l3-background-notice-secondary: #1a3853;
  --gds-sys-color-l3-background-notice-badge: #214769;
  --gds-sys-color-l3-background-warning: #f3b274;
  --gds-sys-color-l3-background-warning-secondary: #624017;
  --gds-sys-color-l3-background-warning-badge: #744c1b;
  --gds-sys-color-l3-background-information: #d7d7d7;
  --gds-sys-color-l3-background-information-secondary: #424242;
  --gds-sys-color-l3-background-information-badge: #616161;
  --gds-sys-color-l3-background-buy: #3571a6;
  --gds-sys-color-l3-background-copper-01: #e4ded5;
  --gds-sys-color-l3-background-copper-02: #42361f;
  --gds-sys-color-l3-background-purple-01: #e7deee;
  --gds-sys-color-l3-background-purple-02: #473752;
  --gds-sys-color-l3-background-green-01: #d7edd9;
  --gds-sys-color-l3-background-green-02: #25512b;
  --gds-sys-color-l3-background-blue-01: #d3dfef;
  --gds-sys-color-l3-background-blue-02: #1a3853;
  --gds-sys-color-l3-background-disabled: #181818;
  --gds-sys-color-l3-background-disabled-secondary: #1b1b1b;
  --gds-sys-color-l3-content-primary: #1b1b1b;
  --gds-sys-color-l3-content-secondary: #ababab;
  --gds-sys-color-l3-content-tertiary: #d7d7d7;
  --gds-sys-color-l3-content-notice: #78a3d5;
  --gds-sys-color-l3-content-warning: #f3b274;
  --gds-sys-color-l3-content-information: #d7d7d7;
  --gds-sys-color-l3-content-buy: #ffffff;
  --gds-sys-color-l3-content-copper-01: #1b1b1b;
  --gds-sys-color-l3-content-copper-02: #ffffff;
  --gds-sys-color-l3-content-purple-01: #1b1b1b;
  --gds-sys-color-l3-content-purple-02: #ffffff;
  --gds-sys-color-l3-content-green-01: #1b1b1b;
  --gds-sys-color-l3-content-green-02: #ffffff;
  --gds-sys-color-l3-content-blue-01: #1b1b1b;
  --gds-sys-color-l3-content-blue-02: #ffffff;
  --gds-sys-color-l3-content-disabled: #5e5e5e;
  --gds-sys-color-l3-content-positive: #54b561;
  --gds-sys-color-l3-content-negative: #ee8375;
  --gds-sys-color-l3-border-primary: #d7d7d7;
  --gds-sys-color-l3-border-secondary: #ababab;
  --gds-sys-color-l3-border-tertiary: #1b1b1b;
  --gds-sys-color-l3-border-negative: #ee8375;
  --gds-sys-color-l3-states-dark-hover: #ffffff 15%;
  --gds-sys-color-l3-states-dark-pressed: #ffffff 25%;
  --gds-sys-color-l3-states-light-hover: #d7d7d7 10%;
  --gds-sys-color-l3-states-light-pressed: #d7d7d7 20%;
  --gds-sys-color-l3-states-positive-hover: #54b561 10%;
  --gds-sys-color-l3-states-positive-pressed: #54b561 20%;
  --gds-sys-color-l3-states-negative-hover: #ee8375 10%;
  --gds-sys-color-l3-states-negative-pressed: #ee8375 20%;`,aa=`/**
 * Do not edit directly, this file was auto-generated.
 */


  color-scheme: light;
  --gds-sys-color-l1-background-primary: #ffffff;
  --gds-sys-color-l1-background-tertiary: #1b1b1b;
  --gds-sys-color-l1-background-secondary: #eeeeee;
  --gds-sys-color-l1-content-positive: #35723d;
  --gds-sys-color-l1-content-negative: #a63e2a;
  --gds-sys-color-l1-content-primary: #1b1b1b;
  --gds-sys-color-l1-content-secondary: #5e5e5e;
  --gds-sys-color-l1-content-tertiary: #ffffff;
  --gds-sys-color-l2-background-primary: #f3f3f3;
  --gds-sys-color-l2-background-secondary: #ffffff;
  --gds-sys-color-l2-background-tertiary: #242424;
  --gds-sys-color-l2-background-positive: #ecf6ed;
  --gds-sys-color-l2-background-negative: #fcecea;
  --gds-sys-color-l2-background-notice: #eaf0f7;
  --gds-sys-color-l2-background-warning: #fcecbc;
  --gds-sys-color-l2-background-information: #e2e2e2;
  --gds-sys-color-l2-background-copper-01: #f2efeb;
  --gds-sys-color-l2-background-copper-02: #332a18;
  --gds-sys-color-l2-background-purple-01: #f3eff7;
  --gds-sys-color-l2-background-purple-02: #372b40;
  --gds-sys-color-l2-background-green-01: #ecf6ed;
  --gds-sys-color-l2-background-green-02: #1d3f22;
  --gds-sys-color-l2-background-blue-01: #eaf0f7;
  --gds-sys-color-l2-background-blue-02: #152c41;
  --gds-sys-color-l2-content-primary: #1b1b1b;
  --gds-sys-color-l2-content-secondary: #5e5e5e;
  --gds-sys-color-l2-content-tertiary: #ffffff;
  --gds-sys-color-l2-content-positive: #35723d;
  --gds-sys-color-l2-content-negative: #a63e2a;
  --gds-sys-color-l2-content-warning: #65581e;
  --gds-sys-color-l2-content-notice: #005fac;
  --gds-sys-color-l2-content-information: #1b1b1b;
  --gds-sys-color-l2-content-copper-01: #1b1b1b;
  --gds-sys-color-l2-content-copper-02: #ffffff;
  --gds-sys-color-l2-content-purple-01: #1b1b1b;
  --gds-sys-color-l2-content-purple-02: #ffffff;
  --gds-sys-color-l2-content-green-01: #1b1b1b;
  --gds-sys-color-l2-content-green-02: #ffffff;
  --gds-sys-color-l2-content-blue-01: #1b1b1b;
  --gds-sys-color-l2-content-blue-02: #ffffff;
  --gds-sys-color-l2-border-primary: #d7d7d7;
  --gds-sys-color-l2-border-secondary: #6f6f6f;
  --gds-sys-color-l2-border-tertiary: #f9f9f9;
  --gds-sys-color-l2-border-quarternary: #1b1b1b;
  --gds-sys-color-l2-border-inversed: #ffffff;
  --gds-sys-color-l3-background-primary: #003824;
  --gds-sys-color-l3-background-secondary: #e2e2e2;
  --gds-sys-color-l3-background-tertiary: #d7d7d7;
  --gds-sys-color-l3-background-quarternary: #ffffff;
  --gds-sys-color-l3-background-positive: #35723d;
  --gds-sys-color-l3-background-positive-secondary: #d7edd9;
  --gds-sys-color-l3-background-positive-badge: #d7edd9;
  --gds-sys-color-l3-background-negative: #a63e2a;
  --gds-sys-color-l3-background-negative-secondary: #fcecea;
  --gds-sys-color-l3-background-negative-badge: #f8d6d3;
  --gds-sys-color-l3-background-notice: #005fac;
  --gds-sys-color-l3-background-notice-secondary: #d3dfef;
  --gds-sys-color-l3-background-notice-badge: #d3dfef;
  --gds-sys-color-l3-background-warning: #65581e;
  --gds-sys-color-l3-background-warning-secondary: #fadf7b;
  --gds-sys-color-l3-background-warning-badge: #fadf7b;
  --gds-sys-color-l3-background-information: #1b1b1b;
  --gds-sys-color-l3-background-information-secondary: #d7d7d7;
  --gds-sys-color-l3-background-information-badge: #d7d7d7;
  --gds-sys-color-l3-background-buy: #2e6290;
  --gds-sys-color-l3-background-copper-01: #e4ded5;
  --gds-sys-color-l3-background-copper-02: #42361f;
  --gds-sys-color-l3-background-purple-01: #e7deee;
  --gds-sys-color-l3-background-purple-02: #473752;
  --gds-sys-color-l3-background-green-01: #d7edd9;
  --gds-sys-color-l3-background-green-02: #25512b;
  --gds-sys-color-l3-background-blue-01: #d3dfef;
  --gds-sys-color-l3-background-blue-02: #1a3853;
  --gds-sys-color-l3-background-disabled: #f9f9f9;
  --gds-sys-color-l3-background-disabled-secondary: #f3f3f3;
  --gds-sys-color-l3-content-primary: #ffffff;
  --gds-sys-color-l3-content-secondary: #5e5e5e;
  --gds-sys-color-l3-content-tertiary: #1b1b1b;
  --gds-sys-color-l3-content-notice: #005fac;
  --gds-sys-color-l3-content-warning: #65581e;
  --gds-sys-color-l3-content-information: #1b1b1b;
  --gds-sys-color-l3-content-buy: #ffffff;
  --gds-sys-color-l3-content-copper-01: #1b1b1b;
  --gds-sys-color-l3-content-copper-02: #ffffff;
  --gds-sys-color-l3-content-purple-01: #1b1b1b;
  --gds-sys-color-l3-content-purple-02: #ffffff;
  --gds-sys-color-l3-content-green-01: #1b1b1b;
  --gds-sys-color-l3-content-green-02: #ffffff;
  --gds-sys-color-l3-content-blue-01: #1b1b1b;
  --gds-sys-color-l3-content-blue-02: #ffffff;
  --gds-sys-color-l3-content-disabled: #ababab;
  --gds-sys-color-l3-content-positive: #35723d;
  --gds-sys-color-l3-content-negative: #a63e2a;
  --gds-sys-color-l3-border-primary: #1b1b1b;
  --gds-sys-color-l3-border-secondary: #6f6f6f;
  --gds-sys-color-l3-border-tertiary: #d7d7d7;
  --gds-sys-color-l3-border-negative: #a63e2a;
  --gds-sys-color-l3-states-dark-hover: #ffffff 15%;
  --gds-sys-color-l3-states-dark-pressed: #ffffff 25%;
  --gds-sys-color-l3-states-light-hover: #1b1b1b 10%;
  --gds-sys-color-l3-states-light-pressed: #1b1b1b 20%;
  --gds-sys-color-l3-states-positive-hover: #35723d 10%;
  --gds-sys-color-l3-states-positive-pressed: #35723d 20%;
  --gds-sys-color-l3-states-negative-hover: #a63e2a 10%;
  --gds-sys-color-l3-states-negative-pressed: #a63e2a 20%;`,la=`/**
 * Do not edit directly, this file was auto-generated.
 */

--gds-sys-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
--gds-sys-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
--gds-sys-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
--gds-sys-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03);
--gds-sys-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03);
`;var rd={};const Vn=typeof process<"u"&&rd!==void 0,ad=/iPad|iPhone|iPod/.test(navigator.userAgent);var ro,vn,xn,Ji,ao,da,lo,ca;function ld(){return Vn?[]:document.adoptedStyleSheets||[]}const dd=class ha{constructor(){c(this,ao),c(this,lo),c(this,ro,!Xi()),c(this,vn,new Map),c(this,xn,new Map),c(this,Ji,ld())}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new ha),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(t,s){if(a(this,ro)){const n=Array.isArray(s)?s.map(i=>i.toString()).join(""):s.toString();x(this,ao,da).call(this,t,n)}else s.styleSheet&&x(this,lo,ca).call(this,t,s.styleSheet)}};ro=new WeakMap;vn=new WeakMap;xn=new WeakMap;Ji=new WeakMap;ao=new WeakSet;da=function(e,t){if(Vn)return;let s=a(this,xn).get(e);s||(s=document.createElement("style"),a(this,xn).set(e,s)),s.textContent=t,document.head.appendChild(s)};lo=new WeakSet;ca=function(e,t){Vn||(a(this,vn).set(e,t),document.adoptedStyleSheets=[...a(this,Ji),...Array.from(a(this,vn).values())])};let ua=dd;const Y=[D`
    :host {
      ${ne(ra)}
      ${ne(la)}
    }
  `];ua.instance.injectGlobalStyles("root-tokens",D`
    :root,
    :root[gds-theme='light'] {
      ${ne(ra)}
      ${ne(la)}
      ${ne(aa)}
    }
    :root[gds-theme='dark'] {
      ${ne(io)}
    }
  `);const cd={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},hd=/^([<|>]=?)?([0-9a-z]+)/,pa=["{","}",";",":",","],Pr=[" ","/n"];function ud(e=""){const t=[];let s="";for(let n=0;n<e.length;n++){const i=e[n];if(Pr.includes(i)||(s+=i),pa.includes(i)){t.push(s.slice(0,-1)),t.push(i),s="";continue}if(Pr.includes(i)||n===e.length-1){t.push(s),s="";continue}}return t.filter(n=>n!=="")}function pd(e){const t=[];let s={breakpoint:"-",values:[]};const n=()=>({sel:"",values:[]});let i=n();for(const r of e){if(!pa.includes(r)){i.values.push(r);continue}if(r==="{"&&(s={breakpoint:i.values.join(","),values:[]},i=n()),r===";"&&(t.length===0&&t.push(s),i.values.length>0&&(s.values.push(i),i=n())),r===":"){const l=i.values.pop()??"";i.sel=l}s&&r==="}"&&(s.values.push(i),i=n(),t.push(s))}return i.values.length>0&&s.values.push(i),t.length===0&&t.push(s),t}function gd(e){return e.split(",").map(s=>{const n=s.trim().match(hd);if(!n)throw new Error(`Invalid breakpoint specifier: ${s}`);return{condition:n[1],value:n[2]}})}function fd(e,t,s,n=r=>r,i=(r,l)=>`${r}: ${l.join(" ")};`){let r="";for(const l of s){const g=`@media ${(l.breakpoint==="-"?[{condition:">=",value:"0"}]:gd(l.breakpoint)).map(b=>`(${b.condition?.includes("<")?"max-width":"min-width"}: ${cd[b.value]??b.value})`).join(" and ")} {${l.values.map(b=>{let y=e;b.sel.length>0&&(y=e===":host"?`:host(:${b.sel})`:`${e}:${b.sel}`);const k=i(t,b.values.map(n));return b.sel==="hover"?`@media (hover: hover) {${y}{${k}}}`:`${y}{${k}}`}).join("")}}`;r+=g}return r}const Jn=new Map;function m(e){return(t,s)=>{const n=e?.property??String(s),i=e?.valueTemplate,r=e?.styleTemplate,l=e?.cacheOverrideKey??"0";d({attribute:e?.attribute,noAccessor:!0})(t,s),Object.defineProperty(t,s,{get:function(){return this["__"+String(s)]},set:async function(h){if(!h)return;this["__"+String(s)]=h,await this.updateComplete;const u=e?.selector??this.constructor.styleExpressionBaseSelector,g=this.level??"0",b=u+n+h+g+l;if(Jn.has(b)){this._dynamicStylesController.inject(`sep_${String(s)}`,Jn.get(b));return}const y=pd(ud(h)),k=fd(u,n,y,i?.bind(this),r?.bind(this)),_=ne(k);Jn.set(b,_),this._dynamicStylesController.inject(`sep_${String(s)}`,_)}})}}function ga(e,t,s){if(e==="transparent"||e==="currentColor"||e==="inherit")return e;const[n,i]=e.split("/"),r=`var(--gds-sys-color-l${s}-${t}-${n})`;return i?`color-mix(in srgb, ${r} ${parseFloat(i)*100}%, transparent 0%)`:r}function Bs(e){return{valueTemplate:function(t){return ga(t,e,this.level)}}}const Nt={valueTemplate:e=>`var(--gds-sys-space-${e}, 0)`},me={valueTemplate:e=>`var(--gds-sys-space-${yd(e)}, ${e})`},Kn={valueTemplate:e=>{const s=(e.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${e})`:`calc(var(--gds-sys-space-${e.substring(1)}) * -1)`;return e==="auto"?"auto":s},styleTemplate:(e,t)=>{const s=h=>h==="auto"?"auto":`${h}`,n=s(t[0]),i=t.length>1?s(t[1]):n,r=t.length>2?s(t[2]):n,l=t.length>3?s(t[3]):i;return`${e}: ${n} ${i} ${r} ${l};`}};function yd(e){return e.replace(/[^a-zA-Z0-9-]/g,"")}function we(e){class t extends e{}return o([m(me)],t.prototype,"width",2),o([m(me)],t.prototype,"min-width",2),o([m(me)],t.prototype,"max-width",2),o([m(me)],t.prototype,"inline-size",2),o([m(me)],t.prototype,"min-inline-size",2),o([m(me)],t.prototype,"max-inline-size",2),t}function Rn(e){class t extends e{}return o([m(me)],t.prototype,"height",2),o([m(me)],t.prototype,"min-height",2),o([m(me)],t.prototype,"max-height",2),o([m(me)],t.prototype,"block-size",2),o([m(me)],t.prototype,"min-block-size",2),o([m(me)],t.prototype,"max-block-size",2),t}function $e(e){class t extends e{}return o([m(Kn)],t.prototype,"margin",2),o([m(Kn)],t.prototype,"margin-inline",2),o([m(Kn)],t.prototype,"margin-block",2),t}function bd(e){class t extends e{}return o([m(Nt)],t.prototype,"padding",2),o([m(Nt)],t.prototype,"padding-inline",2),o([m(Nt)],t.prototype,"padding-block",2),t}function _e(e){class t extends e{}return o([m()],t.prototype,"align-self",2),o([m()],t.prototype,"justify-self",2),o([m()],t.prototype,"place-self",2),o([m()],t.prototype,"grid-column",2),o([m()],t.prototype,"grid-row",2),o([m()],t.prototype,"grid-area",2),o([m()],t.prototype,"flex",2),o([m()],t.prototype,"order",2),t}function Bn(e){class t extends e{}return o([m()],t.prototype,"position",2),o([m()],t.prototype,"transform",2),o([m()],t.prototype,"inset",2),t}const md=D`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-l2-border-primary);
  }
  :host(:focus-visible) {
    outline-color: color-mix(in srgb, currentcolor, #000 100%);
    outline-offset: var(--gds-sys-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-sys-space-3xs);
  }
`;var vd=md;let W=class extends we(Rn($e(bd(_e(Bn(R)))))){constructor(){super(...arguments),this.level="2"}render(){return w`<slot></slot>`}};W.styles=[Y,vd];o([m()],W.prototype,"display",2);o([d()],W.prototype,"level",2);o([m(Bs("content"))],W.prototype,"color",2);o([m(Bs("background"))],W.prototype,"background",2);o([m({styleTemplate:function(e,t){const s=this,[n,i=s["border-style"]||"solid",r=s["border-color"]||"primary"]=t,l=`var(--gds-sys-space-${n})`,h=ga(r,"border",s.level);return`border: ${l} ${i} ${h};`}})],W.prototype,"border",2);o([m(Bs("border"))],W.prototype,"border-color",2);o([m(Nt)],W.prototype,"border-width",2);o([m()],W.prototype,"border-style",2);o([m(Nt)],W.prototype,"border-radius",2);o([m({valueTemplate:e=>`var(--gds-sys-shadow-${e})`})],W.prototype,"box-shadow",2);o([m()],W.prototype,"opacity",2);o([m()],W.prototype,"overflow",2);o([m()],W.prototype,"box-sizing",2);o([m()],W.prototype,"z-index",2);o([m({styleTemplate:(e,t)=>{const s=t[0],n=`font-size: var(--gds-sys-text-size-${s});`,i=`line-height: var(--gds-sys-text-line-height-${s});`;return n+i}})],W.prototype,"font-size",2);o([m({valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],W.prototype,"font-weight",2);o([m()],W.prototype,"text-align",2);o([m()],W.prototype,"text-wrap",2);o([m()],W.prototype,"overflow-wrap",2);o([m()],W.prototype,"white-space",2);o([m({...Nt,styleTemplate:(e,t)=>{const s=t[0],n=t[1]||s;return`gap: ${s} ${n};`},cacheOverrideKey:"flex"})],W.prototype,"gap",2);o([m()],W.prototype,"align-items",2);o([m()],W.prototype,"align-content",2);o([m()],W.prototype,"justify-content",2);o([m()],W.prototype,"justify-items",2);o([m()],W.prototype,"flex-direction",2);o([m()],W.prototype,"flex-wrap",2);o([m()],W.prototype,"place-items",2);o([m()],W.prototype,"place-content",2);W=o([$("gds-div")],W);const xd=D`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-l2-border-primary);
  }
`;var wd=xd;let rt=class extends W{render(){return w`<slot></slot>`}};rt.styles=[Y,wd];rt=o([$("gds-flex")],rt);const _d=D`
  :host {
    display: inline-block;
  }

  slot[name='lead']::slotted(*) {
    line-height: var(--gds-sys-space-m);
  }

  :host([notification]) slot[name='trail']::slotted(*) {
    line-height: var(--gds-sys-space-s);
  }

  :host([notification]) slot[name='lead']::slotted(*) {
    line-height: var(--gds-sys-space-s);
  }
`;var kd=_d,co,fa,ho,ya,Ki,ba,uo,ma;let Ee=class extends we($e(_e(R))){constructor(){super(...arguments),c(this,co),c(this,ho),c(this,Ki),c(this,uo),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){const e=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",t=this.disabled?"disabled":this.notification?"primary":this.variant,s=this.size==="small"||this.notification?"2xs":"xs",n=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return w`<gds-flex
      level="3"
      background=${e}
      color=${t}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${s}"
      border-radius="${this.notification||this.rounded?"max":"2xs"}"
      block-size="${n}"
      width="100%"
      font-size="${this.size==="small"||this.notification?"detail-xs":"detail-s"}"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${x(this,co,fa).call(this)} ${x(this,ho,ya).call(this)}
      ${x(this,uo,ma).call(this)}
    </gds-flex>`}};co=new WeakSet;fa=function(){if(this.size!=="small"||!this.notification)return w`<slot name="lead"></slot>`};ho=new WeakSet;ya=function(){return w`<slot @slotchange=${x(this,Ki,ba)}></slot>`};Ki=new WeakSet;ba=function(e){const s=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=s.length>0&&s.some(n=>n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE&&n.textContent?.trim()!=="")};uo=new WeakSet;ma=function(){return w`<slot name="trail"></slot>`};Ee.styles=[Y,kd];o([d()],Ee.prototype,"variant",2);o([d({type:String})],Ee.prototype,"size",2);o([d({attribute:"disabled",type:Boolean,reflect:!0})],Ee.prototype,"disabled",2);o([d({attribute:"notification",type:Boolean,reflect:!0})],Ee.prototype,"notification",2);o([d({attribute:"rounded",type:Boolean,reflect:!0})],Ee.prototype,"rounded",2);o([de()],Ee.prototype,"mainSlotOccupied",2);Ee=o([$("gds-badge",{dependsOn:[rt]})],Ee);Ee.define();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fs={ATTRIBUTE:1,CHILD:2,ELEMENT:6},hs=e=>(...t)=>({_$litDirective$:e,values:t});let Is=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=hs(class extends Is{constructor(e){if(super(e),e.type!==Fs.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const s=e.element.classList;for(const n of this.st)n in t||(s.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(s.add(n),this.st.add(n)):(s.remove(n),this.st.delete(n)))}return zs}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=e=>e??pe;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(e,t,s){return e?t(e):s?.(e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const er=Symbol.for(""),Cd=e=>{if(e?.r===er)return e?._$litStatic$},$d=e=>({_$litStatic$:e,r:er}),wn=(e,...t)=>({_$litStatic$:t.reduce((s,n,i)=>s+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[i+1],e[0]),r:er}),Nr=new Map,Sd=e=>(t,...s)=>{const n=s.length;let i,r;const l=[],h=[];let u,g=0,b=!1;for(;g<n;){for(u=t[g];g<n&&(r=s[g],(i=Cd(r))!==void 0);)u+=i+t[++g],b=!0;g!==n&&h.push(r),l.push(u),g++}if(g===n&&l.push(t[n]),b){const y=l.join("$$lit$$");(t=Nr.get(y))===void 0&&(l.raw=l,Nr.set(y,t=l)),s=h}return e(t,...s)},us=Sd(be),Md=`:host {
  --gds-ripple-motion-name: ripple;
  --gds-ripple-motion: var(--gds-ripple-motion-name) 1.25s
    cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal none running;
  border-radius: var(--gds-sys-space-max);
  contain: strict;
  display: grid;
  place-content: center;
  height: 100%;
  inset: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

div {
  background-color: currentColor;
  border-radius: var(--gds-sys-space-max);
  display: flex;
  height: 100%;
  left: calc((-50% + var(--gds-ripple-left)) / 4);
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  will-change: transform;
}

div.gds-ripple-effect {
  animation: var(--gds-ripple-motion);
}

@keyframes ripple {
  from {
    opacity: 0.2;
    transform: scale(0.6, 1);
  }
  to {
    opacity: 0;
    transform: scale(1.25);
  }
}
@media (prefers-reduced-motion: reduce) {
  :host {
    --gds-ripple-motion-name: none !important;
  }
}`;let Ds=class extends R{constructor(){super(...arguments),this.onmousedown=e=>{const s=e.target.getBoundingClientRect(),n=this._rippleEl;n&&(n.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-s.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-s.left}px`),setTimeout(()=>{n.classList.add("gds-ripple-effect")},20))}}render(){return be`<div></div>`}};Ds.styles=[Y,ne(Md)];o([Q("div")],Ds.prototype,"_rippleEl",2);Ds=o([$("gds-ripple")],Ds);var qs,Us,po;const Ed=class va{constructor(){c(this,qs,new Map),c(this,Us,new Map),c(this,po,!Xi())}static get instance(){return globalThis.__gdsTransitionalStyles?.[Xn]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[Xn]:new va}),globalThis.__gdsTransitionalStyles[Xn]}apply(t,s){if(!t.shadowRoot)return;const n=a(this,qs).get(s);n&&(a(this,Us).set(s,t),this.applyToElement(s,n))}applyToElement(t,s){const n=a(this,Us).get(t);if(!n||!n.shadowRoot)return;const i=()=>{n._dynamicStylesController.clearInitial(),n._dynamicStylesController.inject("t-styles",ne(s)),n._isUsingTransitionalStyles=!0},r=()=>{n._isUsingTransitionalStyles=!1,n._dynamicStylesController.clear("t-styles"),n._dynamicStylesController.restoreInitial()},l="[gds-element=gds-theme]";let h=n.getRootNode(),u=n.closest(l);for(;u===null&&h!==document;)u=h.host?.closest(l),h=h.host?.getRootNode();if(u){const g=u,b=()=>{g.designVersion==="2023"?r():i()};if(g.addEventListener("gds-design-version-changed",b),n.addEventListener("gds-element-disconnected",()=>g.removeEventListener("gds-design-version-changed",b)),g.designVersion==="2023"){r();return}}i()}register(t,s){let n=s;a(this,po)&&(n=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${s}`),a(this,qs).set(t,n),this.applyToElement(t,n)}};qs=new WeakMap;Us=new WeakMap;po=new WeakMap;let ge=Ed;function U(e,t){const s={waitUntilFirstUpdate:!1,...t};return(n,i,r)=>{const{update:l}=n,h=Array.isArray(e)?e:[e];n.update=function(u){h.forEach(g=>{const b=g;if(u.has(b)){const y=u.get(b),k=this[b];y!==k&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&r.value?.call(this,y,k)}}),l.call(this,u)}}}function tr(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,n)=>{let i;const r=t.connectedCallback,l=t.disconnectedCallback;t.connectedCallback=function(){r?.call(this);const h=(u,g)=>{n.value?.call(this)};i=new MutationObserver(h),i.observe(this,e)},t.disconnectedCallback=function(){l?.call(this),i.disconnect()}}}function Td(e){return(t,s,n)=>{if(Vn)return;const i=window.matchMedia(e),r=t.connectedCallback,l=t.disconnectedCallback;t.connectedCallback=function(){r?.call(this);const h=u=>{n.value?.call(this,u.matches)};i.addEventListener("change",h),this.disconnectedCallback=function(){l?.call(this),i.removeEventListener("change",h)},n.value?.call(this,i.matches)}}}class Ad extends Is{constructor(t){if(super(t),t.type!==Fs.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return pe}update(t,[s]){const n=t.element,i=t.options?.host;Array.from(i.attributes).forEach(r=>{s(r)&&n.setAttribute(r.name.replace("gds-",""),r.value)})}}const zd=hs(Ad),Hr=new WeakMap;function Dd(e){return(t,...s)=>{let n=Hr.get(t);return n||(n=t.map(i=>i.replace(/\n[\s]+</gm,"<")),n.raw=t.raw,Hr.set(t,n)),e(n,...s)}}var ae;class fe extends R{constructor(){super(),c(this,ae,void 0),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{G(this,ae,this.attachInternals())}catch{G(this,ae,{form:this.closest("form"),setFormValue:s=>{this.value=s},setValidity:(s,n)=>{a(this,ae).validity=s,this.errorMessage=n||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0})}}set invalid(t){const s=this.invalid;a(this,ae).setValidity({...a(this,ae).validity,customError:t,valid:!t},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",s),a(this,ae).checkValidity()}get invalid(){return!a(this,ae).validity.valid}get value(){return this._internalValue}set value(t){this._internalValue=t,a(this,ae).setFormValue(t)}get form(){return a(this,ae).form}get validity(){return a(this,ae).validity}get validationMessage(){return a(this,ae).validationMessage}get willValidate(){return a(this,ae).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const s=this.invalid,n=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=n[1]||this.errorMessage,a(this,ae).setValidity(n[0],n[1],this._getValidityAnchor()),s!==this.invalid&&(this.requestUpdate("invalid",s),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),a(this,ae).checkValidity()}reportValidity(){return a(this,ae).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(t){t?.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(t){this.checkValidity(),this.validity.valid||t.preventDefault()}}ae=new WeakMap;fe.formAssociated=!0;o([d({attribute:!1})],fe.prototype,"validator",2);o([d({type:Boolean})],fe.prototype,"required",2);o([d({attribute:"error-message"})],fe.prototype,"errorMessage",2);o([d({type:Boolean,reflect:!0})],fe.prototype,"invalid",1);o([d()],fe.prototype,"label",2);o([d()],fe.prototype,"value",1);o([d({reflect:!0})],fe.prototype,"name",2);o([d({type:Boolean,reflect:!0})],fe.prototype,"disabled",2);o([U("value",{waitUntilFirstUpdate:!0})],fe.prototype,"__handleValueChange",1);const Ld=`@layer tokens, core, a11y, ranks, sizes, variants, disabled;

@layer a11y {
  @media (prefers-reduced-motion: reduce) {
    .button {
      transition: none;
    }
  }
}

@layer core {
  :host {
    display: inline-flex;
    max-width: 100%;
  }

  .button {
    --_block-size: var(--gds-sys-space-3xl);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    block-size: var(--_block-size);
    background-color: var(--gds-sys-color-l3-background-primary);
    color: var(--gds-sys-color-l3-content-primary);
    border-radius: var(--gds-sys-space-max);
    font-family: inherit;
    font-size: var(--gds-sys-text-size-detail-m);
    line-height: var(--gds-sys-text-line-height-detail-m);
    font-weight: var(--gds-sys-text-weight-book);
    gap: var(--gds-sys-space-s);
    outline-color: transparent;
    outline-offset: var(--gds-sys-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-sys-space-3xs);
    padding-block: var(--gds-sys-space-s);
    padding-inline: var(--gds-sys-space-l);
    position: relative;
    text-decoration: none;
    transition-property: color, border-colorm, background;
    transition-duration: 0.2s;
    flex: 1;

    &:focus {
      outline-color: var(--gds-sys-color-l3-content-tertiary);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-background-primary),
          var(--gds-sys-color-l3-states-dark-hover)
        );
      }
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l3-background-primary),
        var(--gds-sys-color-l3-states-dark-pressed)
      );
    }

    &:not(.circle) slot:not([name]) {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

.button.circle {
  aspect-ratio: 1 / 1;
  padding: 0;
  min-block-size: var(--_block-size);
  min-inline-size: var(--_block-size);
}

.button:disabled {
  pointer-events: none;
  background-color: var(--gds-sys-color-l3-background-disabled);
  color: var(--gds-sys-color-l3-content-disabled);
}

@layer ranks {
  :host([rank*='secondary']) .button {
    background-color: var(--gds-sys-color-l3-background-secondary);
    color: var(--gds-sys-color-l3-content-tertiary);

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-background-secondary),
          var(--gds-sys-color-l3-states-light-hover)
        );
      }
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l3-background-secondary),
        var(--gds-sys-color-l3-states-light-pressed)
      );
    }
  }

  :host([rank*='tertiary']) .button {
    background-color: transparent;
    color: var(--gds-sys-color-l3-content-tertiary);

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-l3-states-light-hover)
        );
      }
    }

    &:active {
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-sys-color-l3-states-light-pressed)
      );
    }
  }
}

@layer sizes {
  :host([size='xs']) .button {
    --_block-size: var(--gds-sys-space-l);
    font-size: var(--gds-sys-text-size-detail-s);
    line-height: var(--gds-sys-text-line-height-detail-s);
    padding-inline: var(--gds-sys-space-m);
  }

  :host([size='small']) .button {
    --_block-size: var(--gds-sys-space-xl);
    font-size: var(--gds-sys-text-size-detail-s);
    line-height: var(--gds-sys-text-line-height-detail-s);
    padding-inline: var(--gds-sys-space-m);
  }

  :host([size='medium']) .button {
    --_block-size: var(--gds-sys-space-2xl);
    font-size: var(--gds-sys-text-size-detail-m);
    line-height: var(--gds-sys-text-line-height-detail-m);
  }
}

@layer variants {
  .positive {
    background-color: var(--gds-sys-color-l3-background-positive);

    &:focus {
      outline-color: var(--gds-sys-color-l3-content-positive);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-background-positive),
          var(--gds-sys-color-l3-states-dark-hover)
        );
      }
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l3-background-positive),
        var(--gds-sys-color-l3-states-dark-pressed)
      );
    }

    &.secondary {
      background-color: var(--gds-sys-color-l3-background-positive-secondary);
      color: var(--gds-sys-color-l3-content-positive);

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-background-positive-secondary),
            var(--gds-sys-color-l3-states-positive-hover)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-background-positive-secondary),
          var(--gds-sys-color-l3-states-positive-pressed)
        );
      }
    }

    &.tertiary {
      background-color: transparent;
      color: var(--gds-sys-color-l3-content-positive);

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-l3-states-positive-hover)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-l3-states-positive-pressed)
        );
      }
    }
  }

  .negative {
    background-color: var(--gds-sys-color-l3-background-negative);

    &:focus {
      outline-color: var(--gds-sys-color-l3-content-negative);
      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-background-negative),
          var(--gds-sys-color-l3-states-dark-hover)
        );
      }
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l3-background-negative),
        var(--gds-sys-color-l3-states-dark-pressed)
      );
    }

    &.secondary {
      background-color: var(--gds-sys-color-l3-background-negative-secondary);
      color: var(--gds-sys-color-l3-content-negative);

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-background-negative-secondary),
            var(--gds-sys-color-l3-states-negative-hover)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-background-negative-secondary),
          var(--gds-sys-color-l3-states-negative-pressed)
        );
      }
    }

    &.tertiary {
      background-color: transparent;
      color: var(--gds-sys-color-l3-content-negative);

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-l3-states-negative-hover)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-l3-states-negative-pressed)
        );
      }
    }
  }
}
`;var ms,tt,xt,go,xa,fo,yo;const Wd=["aria-label","aria-haspopup","aria-expanded"],Od=Dd(w);class ce extends fe{constructor(){super(...arguments),c(this,tt),c(this,go),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",c(this,ms,!1),c(this,fo,()=>{const t=this._mainSlot?.assignedElements()??[];G(this,ms,t.length===1&&t.some(s=>s.tagName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),c(this,yo,t=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:t}),this.form&&!a(this,tt,xt)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),ge.instance.apply(this,"gds-button")}focus(t){this._getValidityAnchor()?.focus(t)}render(){const t={button:!0,circle:a(this,ms),icon:a(this,ms),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",positive:this.variant==="positive",negative:this.variant==="negative",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},s=a(this,tt,xt)?wn`a`:wn`button`;return us`
      <${s}
        class=${Ve(t)}
        type="${N(a(this,tt,xt)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||pe}
        href=${N(a(this,tt,xt)?this.href:void 0)}
        target=${N(a(this,tt,xt)?this.target:void 0)}
        rel=${N(a(this,tt,xt)?this.rel||a(this,go,xa):void 0)}
        download=${N(a(this,tt,xt)?this.download:void 0)}
        part="_button"
        @click="${a(this,yo)}"
        ${zd(n=>n.name.startsWith("gds-aria")||n.name==="gds-role"||Wd.includes(n.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${a(this,fo)}></slot>
        <slot name="trail"></slot>
        ${H(!this._isUsingTransitionalStyles,()=>Od`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${s}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}}ms=new WeakMap;tt=new WeakSet;xt=function(){return this.href.length>0};go=new WeakSet;xa=function(){return this.target==="_blank"?"noreferrer noopener":void 0};fo=new WeakMap;yo=new WeakMap;ce.styles=[Y,ne(Ld)];ce.shadowRootOptions={mode:"open",delegatesFocus:!0};o([d({type:Boolean,reflect:!0})],ce.prototype,"disabled",2);o([m({selector:".button"})],ce.prototype,"justify-content",2);o([d({reflect:!0})],ce.prototype,"type",2);o([d({reflect:!0})],ce.prototype,"rank",2);o([d({reflect:!0})],ce.prototype,"variant",2);o([d({reflect:!0})],ce.prototype,"size",2);o([d()],ce.prototype,"label",2);o([d()],ce.prototype,"href",2);o([d()],ce.prototype,"target",2);o([d()],ce.prototype,"rel",2);o([d()],ce.prototype,"download",2);o([Q("slot:not([name])")],ce.prototype,"_mainSlot",2);o([Q(".button")],ce.prototype,"_button",2);o([tr({attributes:!0,childList:!1,subtree:!1,characterData:!1})],ce.prototype,"_attributeChanged",1);let Ne=class extends we($e(_e(ce))){};Ne=o([$("gds-button",{dependsOn:[Ds]})],Ne);Ne.define();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gr="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vd=(e,...t)=>({strTag:!0,strings:e,values:t}),Rd=Vd,Bd=e=>typeof e!="string"&&"strTag"in e,Fd=(e,t,s)=>{let n=e[0];for(let i=1;i<e.length;i++)n+=t[i-1],n+=e[i];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Id=e=>Bd(e)?Fd(e.strings,e.values):e;let A=Id;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Pd{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(Gr,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Gr,this.__litLocalizeEventHandler)}}const Nd=e=>e.addController(new Pd(e)),Hd=Nd;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=()=>(e,t)=>(e.addInitializer(Hd),e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Gd{constructor(){this.settled=!1,this.promise=new Promise((t,s)=>{this._resolve=t,this._reject=s})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let e=0;e<256;e++)(e>>4&15).toString(16)+(e&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Yd=new Gd;Yd.resolve();function bo(e){"@babel/helpers - typeof";return bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bo(e)}function Dt(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function ie(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function oe(e){ie(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||bo(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Pt(e,t){ie(2,arguments);var s=oe(e),n=Dt(t);return isNaN(n)?new Date(NaN):(n&&s.setDate(s.getDate()+n),s)}function wa(e,t){ie(2,arguments);var s=oe(e),n=Dt(t);if(isNaN(n))return new Date(NaN);if(!n)return s;var i=s.getDate(),r=new Date(s.getTime());r.setMonth(s.getMonth()+n+1,0);var l=r.getDate();return i>=l?r:(s.setFullYear(r.getFullYear(),r.getMonth(),i),s)}var jd={};function sr(){return jd}function is(e,t){var s,n,i,r,l,h,u,g;ie(1,arguments);var b=sr(),y=Dt((s=(n=(i=(r=t?.weekStartsOn)!==null&&r!==void 0?r:t==null||(l=t.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&i!==void 0?i:b.weekStartsOn)!==null&&n!==void 0?n:(u=b.locale)===null||u===void 0||(g=u.options)===null||g===void 0?void 0:g.weekStartsOn)!==null&&s!==void 0?s:0);if(!(y>=0&&y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var k=oe(e),_=k.getDay(),S=(_<y?7:0)+_-y;return k.setDate(k.getDate()-S),k.setHours(0,0,0,0),k}function Yr(e){ie(1,arguments);var t=oe(e);return t.setHours(0,0,0,0),t}function qd(e,t){ie(2,arguments);var s=Dt(t),n=s*7;return Pt(e,n)}function wt(e,t){ie(2,arguments);var s=Yr(e),n=Yr(t);return s.getTime()===n.getTime()}function Ud(e){ie(1,arguments);var t=oe(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(23,59,59,999),t}function Zd(e,t){var s;ie(1,arguments);var n=e||{},i=oe(n.start),r=oe(n.end),l=r.getTime();if(!(i.getTime()<=l))throw new RangeError("Invalid interval");var h=[],u=i;u.setHours(0,0,0,0);var g=Number((s=void 0)!==null&&s!==void 0?s:1);if(g<1||isNaN(g))throw new RangeError("`options.step` must be a number greater than 1");for(;u.getTime()<=l;)h.push(oe(u)),u.setDate(u.getDate()+g),u.setHours(0,0,0,0);return h}function Qd(e,t){ie(1,arguments);var s=e||{},n=oe(s.start),i=oe(s.end),r=i.getTime();if(!(n.getTime()<=r))throw new RangeError("Invalid interval");var l=is(n,t),h=is(i,t);l.setHours(15),h.setHours(15),r=h.getTime();for(var u=[],g=l;g.getTime()<=r;)g.setHours(0),u.push(oe(g)),g=qd(g,1),g.setHours(15);return u}function Xd(e){ie(1,arguments);var t=oe(e);return t.setDate(1),t.setHours(0,0,0,0),t}function Jd(e,t){var s,n,i,r,l,h;ie(1,arguments);var u=oe(e),g=u.getFullYear(),b=sr(),y=Dt((s=(n=(i=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&i!==void 0?i:b.firstWeekContainsDate)!==null&&n!==void 0?n:(l=b.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var k=new Date(0);k.setFullYear(g+1,0,y),k.setHours(0,0,0,0);var _=is(k,t),S=new Date(0);S.setFullYear(g,0,y),S.setHours(0,0,0,0);var T=is(S,t);return u.getTime()>=_.getTime()?g+1:u.getTime()>=T.getTime()?g:g-1}function Kd(e,t){var s,n,i,r,l,h;ie(1,arguments);var u=sr(),g=Dt((s=(n=(i=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&i!==void 0?i:u.firstWeekContainsDate)!==null&&n!==void 0?n:(l=u.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&s!==void 0?s:1),b=Jd(e,t),y=new Date(0);y.setFullYear(b,0,g),y.setHours(0,0,0,0);var k=is(y,t);return k}var ec=6048e5;function tc(e,t){ie(1,arguments);var s=oe(e),n=is(s,t).getTime()-Kd(s,t).getTime();return Math.round(n/ec)+1}function sc(e){ie(1,arguments);var t=oe(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(0,0,0,0),t}function nc(e,t){ie(2,arguments);var s=oe(e),n=oe(t);return s.getFullYear()===n.getFullYear()&&s.getMonth()===n.getMonth()}function oc(e,t){ie(2,arguments);var s=oe(e),n=Dt(t);return s.setHours(n),s}function ic(e,t){ie(2,arguments);var s=Dt(t);return wa(e,-s)}const rc=D`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-sys-space-2xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;
    }

    thead {
      box-shadow: 0 var(--gds-sys-space-4xs) 0 0
        var(--gds-sys-color-l2-border-primary);
      th {
        height: var(--gds-sys-space-2xl);
        width: var(--gds-sys-space-2xl);
        box-sizing: border-box;
        text-align: center;
        font-weight: normal;
      }
    }

    tbody {
      td {
        position: relative;
        height: var(--gds-sys-space-3xl);
        width: var(--gds-sys-space-3xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-sys-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-sys-space-2xs);
        transition: background 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-sys-space-3xs);

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          background: var(--gds-sys-color-l2-background-tertiary);
          cursor: pointer;
          color: var(--gds-sys-color-l2-content-tertiary);
        }

        &.today {
          border-color: var(--gds-sys-color-l2-background-tertiary);
        }

        &.disabled {
          color: var(--gds-sys-color-l3-content-disabled);
          cursor: not-allowed;
        }

        &:active:not(.disabled) {
          scale: 0.96;
        }

        &:focus-visible {
          outline-color: var(--gds-sys-color-l2-content-primary);
          outline-width: var(--gds-sys-space-3xs);
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-2xs);
        height: var(--gds-sys-space-2xs);
        border-radius: var(--gds-sys-space-max);
        background-color: var(--_color, currentColor);
        inset: var(--gds-sys-space-2xs) var(--gds-sys-space-2xs) auto auto;
      }
    }
  }
`;var ac=rc;function lc(e,t){const s=Xd(e),n=Ud(e),i=Qd({start:s,end:n},{weekStartsOn:1});for(;i.length<6;)i.push(Pt(i[i.length-1],7));return be`${t(i.map(r=>({days:Zd({start:r,end:Pt(r,6)})})))}`}var _n,nr,mo,_a;let X=class extends R{constructor(){super(...arguments),c(this,_n),c(this,mo),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=e=>e.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=sc(new Date(this.focusedYear,e,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),s.setMonth(e),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){return this.shadowRoot?.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),ge.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",x(this,mo,_a)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){super.focus(),this._elFocusedCell?.focus()}render(){const e=new Date;return be`<table role="grid" aria-label="${N(this.label)}">
      ${H(!this.hideDayNames,()=>be`<thead role="rowgroup">
            <tr role="row">
              ${H(this.showWeekNumbers,()=>be`<th></th>`)}
              <th>${A("Mon")}</th>
              <th>${A("Tue")}</th>
              <th>${A("Wed")}</th>
              <th>${A("Thu")}</th>
              <th>${A("Fri")}</th>
              <th>${A("Sat")}</th>
              <th>${A("Sun")}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${lc(this.focusedDate,t=>be`
            ${t.map(s=>be`
                <tr role="row">
                  ${H(this.showWeekNumbers,()=>be`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${tc(s.days[0])}
                      </td>`)}
                  ${s.days.map(n=>{const i=this.customizedDates&&this.customizedDates.find(y=>wt(y.date,n)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(y=>wt(y,n))),...i},l=!nc(this.focusedDate,n),h=(n<this.min||n>this.max)&&!wt(n,this.min)&&!wt(n,this.max),u=n.getDay()===0||n.getDay()===6,g=r.disabled||l||h||this.disabledWeekends&&u;return this.hideExtraneousDays&&l?be`<td inert></td>`:be`
                          <td
                            role="${N(g?void 0:"gridcell")}"
                            class="${Ve({"custom-date":!!i,disabled:!!g,today:wt(e,n)})}"
                            ?disabled=${g}
                            tabindex="${wt(this.focusedDate,n)?0:-1}"
                            aria-selected="${this.value&&wt(this.value,n)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(n)}"
                            @click=${()=>g?null:x(this,_n,nr).call(this,n)}
                            id="dateCell-${n.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${r?r?.color:""}"
                              >${n.getDate()}</span
                            >

                            ${H(r.indicator,()=>be`<span
                                  class="indicator-${r?.indicator}"
                                  style="--_color: ${r?.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};_n=new WeakSet;nr=function(e){const t=oc(e,12);this.value=t,this.dispatchCustomEvent("change",{detail:t,bubbles:!1,composed:!1})};mo=new WeakSet;_a=function(e){let t=!1,s=new Date(this.focusedDate);e.key==="ArrowLeft"?(s=Pt(this.focusedDate,-1),t=!0):e.key==="ArrowRight"?(s=Pt(this.focusedDate,1),t=!0):e.key==="ArrowUp"?(s=Pt(this.focusedDate,-7),t=!0):e.key==="ArrowDown"?(s=Pt(this.focusedDate,7),t=!0):e.key==="Enter"||e.key===" "?(this._elFocusedCell?.hasAttribute("disabled")||x(this,_n,nr).call(this,this.focusedDate),t=!0):e.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):e.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):e.key==="PageUp"?(s=ic(this.focusedDate,1),t=!0):e.key==="PageDown"&&(s=wa(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus()}))};X.styles=[Y,ac];X.shadowRootOptions={mode:"open",delegatesFocus:!0};o([d()],X.prototype,"value",2);o([d({type:Date})],X.prototype,"min",2);o([d({type:Date})],X.prototype,"max",2);o([d()],X.prototype,"focusedDate",2);o([d({type:Boolean,attribute:"disabled-weekends"})],X.prototype,"disabledWeekends",2);o([d({type:Array,attribute:"disabled-dates"})],X.prototype,"disabledDates",2);o([d({type:Number})],X.prototype,"focusedMonth",1);o([d({type:Number})],X.prototype,"focusedYear",1);o([d({type:Boolean})],X.prototype,"showWeekNumbers",2);o([d({type:Boolean})],X.prototype,"hideExtraneousDays",2);o([d({type:Boolean})],X.prototype,"hideDayNames",2);o([d({attribute:!1})],X.prototype,"customizedDates",2);o([d()],X.prototype,"label",2);o([d({attribute:!1})],X.prototype,"dateLabelTemplate",2);o([de()],X.prototype,"_currentLocale",2);o([Q('td[tabindex="0"]')],X.prototype,"_elFocusedCell",2);o([U("value")],X.prototype,"_valueChanged",1);X=o([$("gds-calendar"),Re()],X);X.define();let Mt=class extends W{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return w`<slot></slot>`}};Mt.styles=[Y,D`
      :host {
        box-sizing: border-box;
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
        border-width: var(--gds-sys-space-4xs);
        border-style: solid;
        display: flex;
        flex-direction: column;
      }
    `];o([m({property:"box-shadow",valueTemplate:e=>`var(--gds-sys-shadow-${e})`})],Mt.prototype,"shadow",2);o([m({styleTemplate:function(e,t){return`
      --_border-color: var(--gds-sys-color-l${this.level}-background-${t});
      --_background-color: var(--gds-sys-color-l${this.level}-background-${t});
      --_color: var(--gds-sys-color-l${this.level}-content-${t});
      `}})],Mt.prototype,"variant",2);Mt=o([$("gds-card")],Mt);Mt.define();let vo=class extends W{};vo=o([$("gds-container")],vo);vo.define();const ka=e=>{class t extends e{constructor(){super(...arguments),this.onblur=n=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:n.relatedTarget}))},this.onfocus=n=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:n.relatedTarget}))}}focus(n){this.setAttribute("tabindex","0"),super.focus(n)}}return t},dc=D`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-l2-border-primary);
    }

    :host div {
      display: flex;
      align-items: center;
      user-select: none;
      padding-inline: var(--gds-sys-space-m);
      padding-block: var(--gds-sys-space-m);
      cursor: pointer;
      font-size: var(--gds-sys-text-size-label-input-large);
      font-weight: var(--gds-sys-text-weight-regular);
      line-height: var(--gds-sys-text-line-height-label-input-large);
      gap: 1ch;
      max-width: 100%;
      box-sizing: border-box;
      position: relative;

      &::before {
        content: ' ';
        display: flex;
        inset: var(--gds-sys-space-2xs);
        position: absolute;
        border: var(--gds-sys-space-3xs) solid currentColor;
        border-radius: var(--gds-sys-space-xs);
        opacity: 0;
        visitility: hidden;
        pointer-events: none;
      }
    }

    :host([highlighted]) {
      background-color: var(--gds-sys-color-l2-background-tertiary);
      color: var(--gds-sys-color-l2-content-tertiary);
    }

    :host(:hover:not([highlighted])) div {
      background-color: var(--gds-sys-color-l3-background-secondary);
    }

    :host(:focus-visible) {
      outline: none;

      div::before {
        inset: var(--gds-sys-space-2xs);
        opacity: 1;
        visivility: visible;
      }
    }

    :host([inert]) {
      display: none;
    }

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1lh;
      width: 1lh;
      box-sizing: border-box;
      position: relative;
      aspect-ratio: 1/1;
      border-radius: var(--gds-sys-space-2xs);
      border: var(--gds-sys-space-3xs) solid currentColor;
      padding: var(--gds-sys-space-3xs);

      &.checked {
        background-color: currentColor;

        gds-icon-checkmark {
          &::part(icon) {
            color: var(--gds-sys-color-l2-content-tertiary);
            stroke-width: var(--gds-sys-space-2xs);
          }
        }
      }
    }
  }
`;var Ca=dc,xo;let rs=class extends ka(R){constructor(){super(...arguments),c(this,xo,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",a(this,xo)),ge.instance.apply(this,"gds-option")}render(){return w`<div><slot></slot></div>`}};xo=new WeakMap;rs.styles=[Ca];rs=o([$("gds-menu-item")],rs);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:cc}=Ql,hc=e=>e===null||typeof e!="object"&&typeof e!="function",uc=e=>e.strings===void 0,jr=()=>document.createComment(""),ys=(e,t,s)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(s===void 0){const r=n.insertBefore(jr(),i),l=n.insertBefore(jr(),i);s=new cc(r,l,e,e.options)}else{const r=s._$AB.nextSibling,l=s._$AM,h=l!==e;if(h){let u;s._$AQ?.(e),s._$AM=e,s._$AP!==void 0&&(u=e._$AU)!==l._$AU&&s._$AP(u)}if(r!==i||h){let u=s._$AA;for(;u!==r;){const g=u.nextSibling;n.insertBefore(u,i),u=g}}}return s},Wt=(e,t,s=e)=>(e._$AI(t,s),e),pc={},gc=(e,t=pc)=>e._$AH=t,fc=e=>e._$AH,eo=e=>{e._$AP?.(!1,!0);let t=e._$AA;const s=e._$AB.nextSibling;for(;t!==s;){const n=t.nextSibling;t.remove(),t=n}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ts=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(t,!1),Ts(n,t);return!0},kn=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},$a=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),mc(t)}};function yc(e){this._$AN!==void 0?(kn(this),this._$AM=e,$a(this)):this._$AM=e}function bc(e,t=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let r=s;r<n.length;r++)Ts(n[r],!1),kn(n[r]);else n!=null&&(Ts(n,!1),kn(n));else Ts(this,e)}const mc=e=>{e.type==Fs.CHILD&&(e._$AP??=bc,e._$AQ??=yc)};class Sa extends Is{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),$a(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(Ts(this,t),kn(this))}setValue(t){if(uc(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ma=()=>new vc;let vc=class{};const to=new WeakMap,Ea=hs(class extends Sa{render(e){return pe}update(e,[t]){const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),pe}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let s=to.get(t);s===void 0&&(s=new WeakMap,to.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return typeof this.Y=="function"?to.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Zs;class Ta{constructor(t){c(this,Zs,s=>{const n=s.target;if(!this.host.navigableItems.includes(n))return;let i=!1;if(s.key==="ArrowDown"){const r=this.host.navigableItems.indexOf(n)+1;this.host.navigableItems[r]?.focus(),i=!0}else if(s.key==="ArrowUp"){const r=this.host.navigableItems.indexOf(n)-1;this.host.navigableItems[r]?.focus(),i=!0}else if(s.key==="Home")this.host.navigableItems[0]?.focus(),i=!0;else if(s.key==="End")this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),i=!0;else{const r=s.key.toLowerCase();if(r.length!==1)return;const l=r>="a"&&r<="z",h=r>="0"&&r<="9";(l||h)&&(this.host.navigableItems.find(g=>g.textContent?.trim().toLowerCase()?.startsWith(r))?.focus(),i=!0)}i&&(s.preventDefault(),s.stopPropagation())}),(this.host=t).addController(this)}hostConnected(){this.host.addEventListener("keydown",a(this,Zs))}hostDisconnected(){this.host.removeEventListener("keydown",a(this,Zs))}}Zs=new WeakMap;function Aa(e){let t=e;for(;t.assignedElements().length>0&&t.assignedElements()[0].nodeName==="SLOT";)t=t.assignedElements()[0];return t}var vs;let wo=class extends R{constructor(){super(),c(this,vs,Ma()),new Ta(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),ge.instance.apply(this,"gds-listbox")}get navigableItems(){return a(this,vs).value?Aa(a(this,vs).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){this.navigableItems[0]?.focus()}render(){return w`<slot ${Ea(a(this,vs))}></slot>`}};vs=new WeakMap;wo=o([$("gds-menu",{dependsOn:[rs]})],wo);const Cn=Math.min,Ht=Math.max,$n=Math.round,js=Math.floor,Pe=e=>({x:e,y:e}),xc={left:"right",right:"left",bottom:"top",top:"bottom"},wc={start:"end",end:"start"};function qr(e,t,s){return Ht(e,Cn(t,s))}function Fn(e,t){return typeof e=="function"?e(t):e}function Yt(e){return e.split("-")[0]}function In(e){return e.split("-")[1]}function za(e){return e==="x"?"y":"x"}function Da(e){return e==="y"?"height":"width"}function as(e){return["top","bottom"].includes(Yt(e))?"y":"x"}function La(e){return za(as(e))}function _c(e,t,s){s===void 0&&(s=!1);const n=In(e),i=La(e),r=Da(i);let l=i==="x"?n===(s?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(l=Sn(l)),[l,Sn(l)]}function kc(e){const t=Sn(e);return[_o(e),t,_o(t)]}function _o(e){return e.replace(/start|end/g,t=>wc[t])}function Cc(e,t,s){const n=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return s?t?i:n:t?n:i;case"left":case"right":return t?r:l;default:return[]}}function $c(e,t,s,n){const i=In(e);let r=Cc(Yt(e),s==="start",n);return i&&(r=r.map(l=>l+"-"+i),t&&(r=r.concat(r.map(_o)))),r}function Sn(e){return e.replace(/left|right|bottom|top/g,t=>xc[t])}function Sc(e){return{top:0,right:0,bottom:0,left:0,...e}}function Mc(e){return typeof e!="number"?Sc(e):{top:e,right:e,bottom:e,left:e}}function Mn(e){const{x:t,y:s,width:n,height:i}=e;return{width:n,height:i,top:s,left:t,right:t+n,bottom:s+i,x:t,y:s}}function Ur(e,t,s){let{reference:n,floating:i}=e;const r=as(t),l=La(t),h=Da(l),u=Yt(t),g=r==="y",b=n.x+n.width/2-i.width/2,y=n.y+n.height/2-i.height/2,k=n[h]/2-i[h]/2;let _;switch(u){case"top":_={x:b,y:n.y-i.height};break;case"bottom":_={x:b,y:n.y+n.height};break;case"right":_={x:n.x+n.width,y};break;case"left":_={x:n.x-i.width,y};break;default:_={x:n.x,y:n.y}}switch(In(t)){case"start":_[l]-=k*(s&&g?-1:1);break;case"end":_[l]+=k*(s&&g?-1:1);break}return _}const Ec=async(e,t,s)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:l}=s,h=r.filter(Boolean),u=await(l.isRTL==null?void 0:l.isRTL(t));let g=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:b,y}=Ur(g,n,u),k=n,_={},S=0;for(let T=0;T<h.length;T++){const{name:B,fn:V}=h[T],{x:j,y:K,data:he,reset:te}=await V({x:b,y,initialPlacement:n,placement:k,strategy:i,middlewareData:_,rects:g,platform:l,elements:{reference:e,floating:t}});b=j??b,y=K??y,_={..._,[B]:{..._[B],...he}},te&&S<=50&&(S++,typeof te=="object"&&(te.placement&&(k=te.placement),te.rects&&(g=te.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:i}):te.rects),{x:b,y}=Ur(g,k,u)),T=-1)}return{x:b,y,placement:k,strategy:i,middlewareData:_}};async function Wa(e,t){var s;t===void 0&&(t={});const{x:n,y:i,platform:r,rects:l,elements:h,strategy:u}=e,{boundary:g="clippingAncestors",rootBoundary:b="viewport",elementContext:y="floating",altBoundary:k=!1,padding:_=0}=Fn(t,e),S=Mc(_),B=h[k?y==="floating"?"reference":"floating":y],V=Mn(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(B)))==null||s?B:B.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(h.floating)),boundary:g,rootBoundary:b,strategy:u})),j=y==="floating"?{x:n,y:i,width:l.floating.width,height:l.floating.height}:l.reference,K=await(r.getOffsetParent==null?void 0:r.getOffsetParent(h.floating)),he=await(r.isElement==null?void 0:r.isElement(K))?await(r.getScale==null?void 0:r.getScale(K))||{x:1,y:1}:{x:1,y:1},te=Mn(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:h,rect:j,offsetParent:K,strategy:u}):j);return{top:(V.top-te.top+S.top)/he.y,bottom:(te.bottom-V.bottom+S.bottom)/he.y,left:(V.left-te.left+S.left)/he.x,right:(te.right-V.right+S.right)/he.x}}const Tc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,n;const{placement:i,middlewareData:r,rects:l,initialPlacement:h,platform:u,elements:g}=t,{mainAxis:b=!0,crossAxis:y=!0,fallbackPlacements:k,fallbackStrategy:_="bestFit",fallbackAxisSideDirection:S="none",flipAlignment:T=!0,...B}=Fn(e,t);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const V=Yt(i),j=as(h),K=Yt(h)===h,he=await(u.isRTL==null?void 0:u.isRTL(g.floating)),te=k||(K||!T?[Sn(h)]:kc(h)),yt=S!=="none";!k&&yt&&te.push(...$c(h,T,S,he));const Un=[h,...te],fs=await Wa(t,B),Qt=[];let Lt=((n=r.flip)==null?void 0:n.overflows)||[];if(b&&Qt.push(fs[V]),y){const Be=_c(i,l,he);Qt.push(fs[Be[0]],fs[Be[1]])}if(Lt=[...Lt,{placement:i,overflows:Qt}],!Qt.every(Be=>Be<=0)){var Ns,Hs;const Be=(((Ns=r.flip)==null?void 0:Ns.index)||0)+1,Xt=Un[Be];if(Xt)return{data:{index:Be,overflows:Lt},reset:{placement:Xt}};let mt=(Hs=Lt.filter(Ke=>Ke.overflows[0]<=0).sort((Ke,Se)=>Ke.overflows[1]-Se.overflows[1])[0])==null?void 0:Hs.placement;if(!mt)switch(_){case"bestFit":{var bt;const Ke=(bt=Lt.filter(Se=>{if(yt){const Me=as(Se.placement);return Me===j||Me==="y"}return!0}).map(Se=>[Se.placement,Se.overflows.filter(Me=>Me>0).reduce((Me,Gs)=>Me+Gs,0)]).sort((Se,Me)=>Se[1]-Me[1])[0])==null?void 0:bt[0];Ke&&(mt=Ke);break}case"initialPlacement":mt=h;break}if(i!==mt)return{reset:{placement:mt}}}return{}}}};async function Ac(e,t){const{placement:s,platform:n,elements:i}=e,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),l=Yt(s),h=In(s),u=as(s)==="y",g=["left","top"].includes(l)?-1:1,b=r&&u?-1:1,y=Fn(t,e);let{mainAxis:k,crossAxis:_,alignmentAxis:S}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:y.mainAxis||0,crossAxis:y.crossAxis||0,alignmentAxis:y.alignmentAxis};return h&&typeof S=="number"&&(_=h==="end"?S*-1:S),u?{x:_*b,y:k*g}:{x:k*g,y:_*b}}const zc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var s,n;const{x:i,y:r,placement:l,middlewareData:h}=t,u=await Ac(t,e);return l===((s=h.offset)==null?void 0:s.placement)&&(n=h.arrow)!=null&&n.alignmentOffset?{}:{x:i+u.x,y:r+u.y,data:{...u,placement:l}}}}},Dc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:n,placement:i}=t,{mainAxis:r=!0,crossAxis:l=!1,limiter:h={fn:B=>{let{x:V,y:j}=B;return{x:V,y:j}}},...u}=Fn(e,t),g={x:s,y:n},b=await Wa(t,u),y=as(Yt(i)),k=za(y);let _=g[k],S=g[y];if(r){const B=k==="y"?"top":"left",V=k==="y"?"bottom":"right",j=_+b[B],K=_-b[V];_=qr(j,_,K)}if(l){const B=y==="y"?"top":"left",V=y==="y"?"bottom":"right",j=S+b[B],K=S-b[V];S=qr(j,S,K)}const T=h.fn({...t,[k]:_,[y]:S});return{...T,data:{x:T.x-s,y:T.y-n,enabled:{[k]:r,[y]:l}}}}}};function Pn(){return typeof window<"u"}function ps(e){return Oa(e)?(e.nodeName||"").toLowerCase():"#document"}function ve(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Je(e){var t;return(t=(Oa(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Oa(e){return Pn()?e instanceof Node||e instanceof ve(e).Node:!1}function Te(e){return Pn()?e instanceof Element||e instanceof ve(e).Element:!1}function He(e){return Pn()?e instanceof HTMLElement||e instanceof ve(e).HTMLElement:!1}function Zr(e){return!Pn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ve(e).ShadowRoot}function Ps(e){const{overflow:t,overflowX:s,overflowY:n,display:i}=Ae(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+s)&&!["inline","contents"].includes(i)}function Lc(e){return["table","td","th"].includes(ps(e))}function Nn(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function or(e){const t=ir(),s=Te(e)?Ae(e):e;return s.transform!=="none"||s.perspective!=="none"||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(s.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(s.contain||"").includes(n))}function Wc(e){let t=Et(e);for(;He(t)&&!ls(t);){if(or(t))return t;if(Nn(t))return null;t=Et(t)}return null}function ir(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ls(e){return["html","body","#document"].includes(ps(e))}function Ae(e){return ve(e).getComputedStyle(e)}function Hn(e){return Te(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Et(e){if(ps(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Zr(e)&&e.host||Je(e);return Zr(t)?t.host:t}function Va(e){const t=Et(e);return ls(t)?e.ownerDocument?e.ownerDocument.body:e.body:He(t)&&Ps(t)?t:Va(t)}function Ls(e,t,s){var n;t===void 0&&(t=[]),s===void 0&&(s=!0);const i=Va(e),r=i===((n=e.ownerDocument)==null?void 0:n.body),l=ve(i);if(r){const h=ko(l);return t.concat(l,l.visualViewport||[],Ps(i)?i:[],h&&s?Ls(h):[])}return t.concat(i,Ls(i,[],s))}function ko(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ra(e){const t=Ae(e);let s=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=He(e),r=i?e.offsetWidth:s,l=i?e.offsetHeight:n,h=$n(s)!==r||$n(n)!==l;return h&&(s=r,n=l),{width:s,height:n,$:h}}function rr(e){return Te(e)?e:e.contextElement}function os(e){const t=rr(e);if(!He(t))return Pe(1);const s=t.getBoundingClientRect(),{width:n,height:i,$:r}=Ra(t);let l=(r?$n(s.width):s.width)/n,h=(r?$n(s.height):s.height)/i;return(!l||!Number.isFinite(l))&&(l=1),(!h||!Number.isFinite(h))&&(h=1),{x:l,y:h}}const Oc=Pe(0);function Ba(e){const t=ve(e);return!ir()||!t.visualViewport?Oc:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Vc(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==ve(e)?!1:t}function jt(e,t,s,n){t===void 0&&(t=!1),s===void 0&&(s=!1);const i=e.getBoundingClientRect(),r=rr(e);let l=Pe(1);t&&(n?Te(n)&&(l=os(n)):l=os(e));const h=Vc(r,s,n)?Ba(r):Pe(0);let u=(i.left+h.x)/l.x,g=(i.top+h.y)/l.y,b=i.width/l.x,y=i.height/l.y;if(r){const k=ve(r),_=n&&Te(n)?ve(n):n;let S=k,T=ko(S);for(;T&&n&&_!==S;){const B=os(T),V=T.getBoundingClientRect(),j=Ae(T),K=V.left+(T.clientLeft+parseFloat(j.paddingLeft))*B.x,he=V.top+(T.clientTop+parseFloat(j.paddingTop))*B.y;u*=B.x,g*=B.y,b*=B.x,y*=B.y,u+=K,g+=he,S=ve(T),T=ko(S)}}return Mn({width:b,height:y,x:u,y:g})}function ar(e,t){const s=Hn(e).scrollLeft;return t?t.left+s:jt(Je(e)).left+s}function Fa(e,t,s){s===void 0&&(s=!1);const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-(s?0:ar(e,n)),r=n.top+t.scrollTop;return{x:i,y:r}}function Rc(e){let{elements:t,rect:s,offsetParent:n,strategy:i}=e;const r=i==="fixed",l=Je(n),h=t?Nn(t.floating):!1;if(n===l||h&&r)return s;let u={scrollLeft:0,scrollTop:0},g=Pe(1);const b=Pe(0),y=He(n);if((y||!y&&!r)&&((ps(n)!=="body"||Ps(l))&&(u=Hn(n)),He(n))){const _=jt(n);g=os(n),b.x=_.x+n.clientLeft,b.y=_.y+n.clientTop}const k=l&&!y&&!r?Fa(l,u,!0):Pe(0);return{width:s.width*g.x,height:s.height*g.y,x:s.x*g.x-u.scrollLeft*g.x+b.x+k.x,y:s.y*g.y-u.scrollTop*g.y+b.y+k.y}}function Bc(e){return Array.from(e.getClientRects())}function Fc(e){const t=Je(e),s=Hn(e),n=e.ownerDocument.body,i=Ht(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=Ht(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let l=-s.scrollLeft+ar(e);const h=-s.scrollTop;return Ae(n).direction==="rtl"&&(l+=Ht(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:l,y:h}}function Ic(e,t){const s=ve(e),n=Je(e),i=s.visualViewport;let r=n.clientWidth,l=n.clientHeight,h=0,u=0;if(i){r=i.width,l=i.height;const g=ir();(!g||g&&t==="fixed")&&(h=i.offsetLeft,u=i.offsetTop)}return{width:r,height:l,x:h,y:u}}function Pc(e,t){const s=jt(e,!0,t==="fixed"),n=s.top+e.clientTop,i=s.left+e.clientLeft,r=He(e)?os(e):Pe(1),l=e.clientWidth*r.x,h=e.clientHeight*r.y,u=i*r.x,g=n*r.y;return{width:l,height:h,x:u,y:g}}function Qr(e,t,s){let n;if(t==="viewport")n=Ic(e,s);else if(t==="document")n=Fc(Je(e));else if(Te(t))n=Pc(t,s);else{const i=Ba(e);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Mn(n)}function Ia(e,t){const s=Et(e);return s===t||!Te(s)||ls(s)?!1:Ae(s).position==="fixed"||Ia(s,t)}function Nc(e,t){const s=t.get(e);if(s)return s;let n=Ls(e,[],!1).filter(h=>Te(h)&&ps(h)!=="body"),i=null;const r=Ae(e).position==="fixed";let l=r?Et(e):e;for(;Te(l)&&!ls(l);){const h=Ae(l),u=or(l);!u&&h.position==="fixed"&&(i=null),(r?!u&&!i:!u&&h.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Ps(l)&&!u&&Ia(e,l))?n=n.filter(b=>b!==l):i=h,l=Et(l)}return t.set(e,n),n}function Hc(e){let{element:t,boundary:s,rootBoundary:n,strategy:i}=e;const l=[...s==="clippingAncestors"?Nn(t)?[]:Nc(t,this._c):[].concat(s),n],h=l[0],u=l.reduce((g,b)=>{const y=Qr(t,b,i);return g.top=Ht(y.top,g.top),g.right=Cn(y.right,g.right),g.bottom=Cn(y.bottom,g.bottom),g.left=Ht(y.left,g.left),g},Qr(t,h,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Gc(e){const{width:t,height:s}=Ra(e);return{width:t,height:s}}function Yc(e,t,s){const n=He(t),i=Je(t),r=s==="fixed",l=jt(e,!0,r,t);let h={scrollLeft:0,scrollTop:0};const u=Pe(0);if(n||!n&&!r)if((ps(t)!=="body"||Ps(i))&&(h=Hn(t)),n){const k=jt(t,!0,r,t);u.x=k.x+t.clientLeft,u.y=k.y+t.clientTop}else i&&(u.x=ar(i));const g=i&&!n&&!r?Fa(i,h):Pe(0),b=l.left+h.scrollLeft-u.x-g.x,y=l.top+h.scrollTop-u.y-g.y;return{x:b,y,width:l.width,height:l.height}}function so(e){return Ae(e).position==="static"}function Xr(e,t){if(!He(e)||Ae(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return Je(e)===s&&(s=s.ownerDocument.body),s}function Pa(e,t){const s=ve(e);if(Nn(e))return s;if(!He(e)){let i=Et(e);for(;i&&!ls(i);){if(Te(i)&&!so(i))return i;i=Et(i)}return s}let n=Xr(e,t);for(;n&&Lc(n)&&so(n);)n=Xr(n,t);return n&&ls(n)&&so(n)&&!or(n)?s:n||Wc(e)||s}const jc=async function(e){const t=this.getOffsetParent||Pa,s=this.getDimensions,n=await s(e.floating);return{reference:Yc(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function qc(e){return Ae(e).direction==="rtl"}const Uc={convertOffsetParentRelativeRectToViewportRelativeRect:Rc,getDocumentElement:Je,getClippingRect:Hc,getOffsetParent:Pa,getElementRects:jc,getClientRects:Bc,getDimensions:Gc,getScale:os,isElement:Te,isRTL:qc};function Zc(e,t){let s=null,n;const i=Je(e);function r(){var h;clearTimeout(n),(h=s)==null||h.disconnect(),s=null}function l(h,u){h===void 0&&(h=!1),u===void 0&&(u=1),r();const{left:g,top:b,width:y,height:k}=e.getBoundingClientRect();if(h||t(),!y||!k)return;const _=js(b),S=js(i.clientWidth-(g+y)),T=js(i.clientHeight-(b+k)),B=js(g),j={rootMargin:-_+"px "+-S+"px "+-T+"px "+-B+"px",threshold:Ht(0,Cn(1,u))||1};let K=!0;function he(te){const yt=te[0].intersectionRatio;if(yt!==u){if(!K)return l();yt?l(!1,yt):n=setTimeout(()=>{l(!1,1e-7)},1e3)}K=!1}try{s=new IntersectionObserver(he,{...j,root:i.ownerDocument})}catch{s=new IntersectionObserver(he,j)}s.observe(e)}return l(!0),r}function Qc(e,t,s,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:h=typeof IntersectionObserver=="function",animationFrame:u=!1}=n,g=rr(e),b=i||r?[...g?Ls(g):[],...Ls(t)]:[];b.forEach(V=>{i&&V.addEventListener("scroll",s,{passive:!0}),r&&V.addEventListener("resize",s)});const y=g&&h?Zc(g,s):null;let k=-1,_=null;l&&(_=new ResizeObserver(V=>{let[j]=V;j&&j.target===g&&_&&(_.unobserve(t),cancelAnimationFrame(k),k=requestAnimationFrame(()=>{var K;(K=_)==null||K.observe(t)})),s()}),g&&!u&&_.observe(g),_.observe(t));let S,T=u?jt(e):null;u&&B();function B(){const V=jt(e);T&&(V.x!==T.x||V.y!==T.y||V.width!==T.width||V.height!==T.height)&&s(),T=V,S=requestAnimationFrame(B)}return s(),()=>{var V;b.forEach(j=>{i&&j.removeEventListener("scroll",s),r&&j.removeEventListener("resize",s)}),y?.(),(V=_)==null||V.disconnect(),_=null,u&&cancelAnimationFrame(S)}}const Na=zc,Xc=Dc,Jc=Tc,Kc=(e,t,s)=>{const n=new Map,i={platform:Uc,...s},r={...i.platform,_c:n};return Ec(e,t,{...i,platform:r})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Co extends Is{constructor(t){if(super(t),this.it=pe,t.type!==Fs.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===pe||t==null)return this._t=void 0,this.it=t;if(t===zs)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}Co.directiveName="unsafeHTML",Co.resultType=1;const Ha=hs(Co),eh=D`
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
`;var th=eh;class ee extends $e(_e(R)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.box=!1,this.label=""}get svgAttributes(){const t=this.constructor,s={fill:"none",xmlns:"http://www.w3.org/2000/svg",...this.size===void 0&&{width:this.width||t._width,height:this.width||t._height}||{},viewBox:this.box||t._viewBox,part:"icon"};return this.label?{...s,"aria-label":this.label}:{...s,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([s,n])=>n!==void 0).map(([s,n])=>`${s}="${n}"`).join(`
      `)}render(){const t=this.svgAttributes;let s=this.svgContent||"";this.stroke&&(s=this.applyStroke(s));const n=`
      <svg ${this.generateAttributesString(t)}>
        ${s}
      </svg>
    `;return be`${Ha(n)}`}}ee.styles=[Y,th];o([m({...me,property:"height",selector:"svg"})],ee.prototype,"size",2);o([d({type:Number})],ee.prototype,"width",2);o([d({type:Number})],ee.prototype,"height",2);o([d({type:Boolean})],ee.prototype,"solid",2);o([d({type:Number})],ee.prototype,"stroke",2);o([d()],ee.prototype,"level",2);o([m(Bs("content"))],ee.prototype,"color",2);o([d({type:String})],ee.prototype,"box",2);o([d({type:String})],ee.prototype,"label",2);ee.define();let Ge=class extends ee{};Ge._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';Ge._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>';Ge._name="cross-small";Ge._width=24;Ge._height=24;Ge._viewBox="0 0 24 24";Ge=o([$("gds-icon-cross-small")],Ge);const sh=D`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;
    }

    :host > div:not([hidden]) {
      display: contents;
    }

    :host([open]) dialog {
      opacity: 1;
      box-sizing: border-box;
      /*transform: translate3d(0, 0, 0);*/
      visibility: visible;
    }

    dialog {
      display: flex;
      flex-direction: column;
      inset: auto;
      position: fixed;
      overflow: hidden;
      padding: 0px;
      box-sizing: border-box;
      right: 0;
      margin: 0;
      box-shadow:
        0 0 0 1px rgba(0, 0, 0, 0.2),
        0 1rem 28px rgba(0, 0, 0, 0.15);
      border-width: 0;
      border-radius: 0.5rem;
    }

    :host([nonmodal]) dialog {
      z-index: 1;
    }

    @media (max-width: 767px) {
      dialog.use-modal-in-mobile {
        border-radius: 1rem 1rem 0 0;
        transition: all 200ms ease;
        min-width: 100vw;
        position: fixed;
        bottom: 0;
        left: 0;

        max-height: 50svh;
        padding-bottom: 0;

        transform: translateY(0);
        @starting-style {
          transform: translateY(100%);
        }

        &::backdrop {
          background-color: rgba(0, 0, 0, 0.3);
          display: block;
          position: fixed;
          opacity: 1;
          transition: opacity 200ms ease;
          @starting-style {
            opacity: 0;
          }
        }
      }
    }

    @media (min-width: 768px) {
      header {
        display: none;
      }
    }

    header {
      display: none;
    }

    @media (min-width: 768px) {
      dialog:not(.has-backdrop)::backdrop {
        background-color: transparent;
        display: block;
        position: fixed;
      }
    }
  }
`;var nh=sh,$o,Ga,Gt,En,_t,xs,kt,So,Qs,Mo,Eo,Ya,To,ja,Xs,Ao,Gn,Yn,Js,Ks,ws;let O=class extends R{constructor(){super(...arguments),c(this,$o),c(this,Qs),c(this,Eo),c(this,To),c(this,Xs),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.autofocus=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>`${window.innerHeight-16}px`,this.nonmodal=!1,this.floatingUIMiddleware=O.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,c(this,Gt,void 0),c(this,En,!1),c(this,_t,void 0),c(this,xs,()=>{a(this,kt).call(this,"cancel")&&(this.open=!1)}),c(this,kt,e=>{const t=e==="show";return this.dispatchCustomEvent("gds-ui-state",{detail:{open:t,reason:e},bubbles:!1,composed:!1,cancelable:!0})}),c(this,So,e=>{e.stopPropagation(),e.preventDefault(),a(this,kt).call(this,"close")&&(this.open=!1,setTimeout(()=>this._trigger?.focus(),250))}),c(this,Gn,e=>{(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),this.open=!0,a(this,kt).call(this,"show")),e.key==="Escape"&&this.open&&a(this,xs).call(this)}),c(this,Yn,e=>{e.preventDefault(),a(this,kt).call(this,this.open?"close":"show")&&(this.open=!this.open)}),c(this,Js,()=>{const e=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then(()=>{e?.focus()})}),c(this,Ks,e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const i=s.getBoundingClientRect();!(i.top<=t.clientY&&t.clientY<=i.top+i.height&&i.left<=t.clientX&&t.clientX<=i.left+i.width)&&a(this,kt).call(this,"close")&&(this.open=!1)}}),c(this,ws,()=>{this.open&&a(this,kt).call(this,"close")&&(this.open=!1)})}_handleTriggerRefChanged(){this.triggerRef?.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){this.anchorRef?.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){x(this,Qs,Mo).call(this),x(this,To,ja).call(this)}_handleAnchorChanged(){x(this,Xs,Ao).call(this)}connectedCallback(){super.connectedCallback(),ge.instance.apply(this,"gds-popover"),x(this,Qs,Mo).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{e.key==="Escape"&&this.open&&(a(this,xs).call(this),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{const t=e.target;t!==this&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1)}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),x(this,Eo,Ya).call(this),window.removeEventListener("scroll",a(this,ws))}render(){return w`<slot
        name="trigger"
        @slotchange=${x(this,$o,Ga)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${Ve({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&a(this,xs).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${a(this,So)}
              class="close"
              label="${A("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></gds-icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const e=(this.nonmodal?a(this,_t):this._elDialog)||document;this.updateComplete.then(()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?this._elDialog?.setAttribute("open","true"):this._elDialog?.showModal(),this.autofocus&&(a(this,Js).call(this),setTimeout(()=>a(this,Js).call(this),250)),requestAnimationFrame(()=>{a(this,_t)&&(a(this,_t).show=!0)}),setTimeout(()=>e.addEventListener("click",a(this,Ks)),0),window.addEventListener("scroll",a(this,ws),{passive:!0})):(this._elDialog?.close(),e.removeEventListener("click",a(this,Ks)),window.removeEventListener("scroll",a(this,ws)),a(this,_t)&&(a(this,_t).show=!1))})}_handleBackdropChange(){const e=this.parentElement?.getRootNode();!this.backdrop||!e||G(this,_t,e.querySelector(this.backdrop))}_handleMobileLayout(e){var t;G(this,En,e),e&&!this.disableMobileStyles?((t=a(this,Gt))==null||t.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("minWidth"),this.updateComplete.then(()=>{this.open&&this._elDialog?.showModal()})):this.updateComplete.then(()=>{x(this,Xs,Ao).call(this)})}};$o=new WeakSet;Ga=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};Gt=new WeakMap;En=new WeakMap;_t=new WeakMap;xs=new WeakMap;kt=new WeakMap;So=new WeakMap;Qs=new WeakSet;Mo=function(){this._trigger?.addEventListener("keydown",a(this,Gn)),this._trigger?.addEventListener("click",a(this,Yn))};Eo=new WeakSet;Ya=function(){var e;this._trigger?.removeEventListener("keydown",a(this,Gn)),this._trigger?.removeEventListener("click",a(this,Yn)),(e=a(this,Gt))==null||e.call(this)};To=new WeakSet;ja=function(){if(this._trigger){this._trigger?.setAttribute("aria-expanded",String(this.open));const e=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||e.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const s=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";this._trigger.getAttribute(s)===null&&this._trigger.setAttribute(s,this.popupRole)}};Xs=new WeakSet;Ao=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;!e||!t||a(this,En)&&!this.disableMobileStyles||(a(this,Gt)&&a(this,Gt).call(this),G(this,Gt,Qc(e,t,()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),Kc(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:s,y:n})=>Object.assign(t.style,{left:`${s}px`,top:`${n}px`}))})))};Gn=new WeakMap;Yn=new WeakMap;Js=new WeakMap;Ks=new WeakMap;ws=new WeakMap;O.styles=ne(nh);O.DefaultMiddleware=[Na(8),Xc({crossAxis:!0,padding:8})];o([d({type:Boolean,reflect:!0})],O.prototype,"open",2);o([d({attribute:"popup-role"})],O.prototype,"popupRole",2);o([d({attribute:!1})],O.prototype,"triggerRef",2);o([d({attribute:!1})],O.prototype,"anchorRef",2);o([d()],O.prototype,"label",2);o([d()],O.prototype,"placement",2);o([d({type:Boolean})],O.prototype,"disableMobileStyles",2);o([d({type:Boolean})],O.prototype,"autofocus",2);o([d({attribute:!1})],O.prototype,"calcMinWidth",2);o([d({attribute:!1})],O.prototype,"calcMaxWidth",2);o([d({attribute:!1})],O.prototype,"calcMinHeight",2);o([d({attribute:!1})],O.prototype,"calcMaxHeight",2);o([d({type:Boolean,reflect:!0})],O.prototype,"nonmodal",2);o([d()],O.prototype,"backdrop",2);o([d({attribute:!1})],O.prototype,"floatingUIMiddleware",2);o([de()],O.prototype,"_trigger",2);o([de()],O.prototype,"_anchor",2);o([de()],O.prototype,"_isVirtKbVisible",2);o([Q("slot:not([name])")],O.prototype,"_elDefaultSlot",2);o([Q('slot[name="trigger"]')],O.prototype,"_elTriggerSlot",2);o([Q("dialog")],O.prototype,"_elDialog",2);o([U("triggerRef")],O.prototype,"_handleTriggerRefChanged",1);o([U("anchorRef")],O.prototype,"_handleAnchorRefChanged",1);o([U("_trigger")],O.prototype,"_handleTriggerChanged",1);o([U("_anchor")],O.prototype,"_handleAnchorChanged",1);o([U("open")],O.prototype,"_handleOpenChange",1);o([U("backdrop")],O.prototype,"_handleBackdropChange",1);o([Td("(max-width: 576px)")],O.prototype,"_handleMobileLayout",1);O=o([$("gds-popover",{dependsOn:[Ge]}),Re()],O);const oh=D`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: inline-block;
    }
    button {
      display: flex;
      border-width: 0;
      background-color: #ededed;
      border-radius: calc(1px * infinity);
      padding: 0.4rem 0.8rem;
      font-family: inherit;
      cursor: pointer;
      align-items: center;
      gap: 0.5rem;
    }

    button:hover {
      background-color: #dcdcdc;
    }
  }
`;var ih=oh;const rh=D`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-sys-color-l3-content-secondary);
      background-color: var(--gds-sys-color-l3-background-secondary);
      font-size: var(--gds-sys-text-size-label-input-medium);
      line-height: var(--gds-sys-text-line-height-label-input-medium);
      padding-inline: var(--gds-sys-space-m);
      padding-block: var(--gds-sys-space-xs);
    }
  }
`;var ah=rh;let Tn=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>ge.instance.apply(this,"gds-menu-heading"))}render(){return be`<slot></slot>`}};Tn.styles=ah;Tn=o([$("gds-menu-heading")],Tn);var zo,Do,qa;let ze=class extends $e(_e(R)){constructor(){super(...arguments),c(this,Do),this.open=!1,this.buttonLabel=A("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",c(this,zo,()=>w`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${this.elTriggerBtn}
      .anchorRef=${this.elTriggerBtn}
      .label=${this.label}
      .placement=${this.placement}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${x(this,Do,qa)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),ge.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return w`<button
        id="trigger"
        class="icon border-0 small ${Ve({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${()=>this.open=!0}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:pe}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"
              fill="#353531"
            />
          </svg>
        </slot>
      </button>
      ${H(this.open,a(this,zo))}`}};zo=new WeakMap;Do=new WeakSet;qa=function(){this.open=!1};ze.styles=[Y,ih];ze.shadowRootOptions={mode:"open",delegatesFocus:!0};o([d({type:Boolean,reflect:!0})],ze.prototype,"open",2);o([d({attribute:"button-label"})],ze.prototype,"buttonLabel",2);o([d({attribute:"show-label",type:Boolean})],ze.prototype,"showLabel",2);o([d()],ze.prototype,"label",2);o([d()],ze.prototype,"placement",2);o([zt("#trigger")],ze.prototype,"elTriggerBtn",2);ze=o([$("gds-context-menu",{dependsOn:[rs,wo,O]}),Re()],ze);ze.define();rs.define();Tn.define();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*lh(e,t){const s=typeof t=="function";if(e!==void 0){let n=-1;for(const i of e)n>-1&&(yield s?t(n):t),n++,yield i}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*dh(e,t){if(e!==void 0){let s=0;for(const n of e)yield t(n,s++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jr=(e,t,s)=>{const n=new Map;for(let i=t;i<=s;i++)n.set(e[i],i);return n},ch=hs(class extends Is{constructor(e){if(super(e),e.type!==Fs.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let n;s===void 0?s=t:t!==void 0&&(n=t);const i=[],r=[];let l=0;for(const h of e)i[l]=n?n(h,l):l,r[l]=s(h,l),l++;return{values:r,keys:i}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,n]){const i=fc(e),{values:r,keys:l}=this.dt(t,s,n);if(!Array.isArray(i))return this.ut=l,r;const h=this.ut??=[],u=[];let g,b,y=0,k=i.length-1,_=0,S=r.length-1;for(;y<=k&&_<=S;)if(i[y]===null)y++;else if(i[k]===null)k--;else if(h[y]===l[_])u[_]=Wt(i[y],r[_]),y++,_++;else if(h[k]===l[S])u[S]=Wt(i[k],r[S]),k--,S--;else if(h[y]===l[S])u[S]=Wt(i[y],r[S]),ys(e,u[S+1],i[y]),y++,S--;else if(h[k]===l[_])u[_]=Wt(i[k],r[_]),ys(e,i[y],i[k]),k--,_++;else if(g===void 0&&(g=Jr(l,_,S),b=Jr(h,y,k)),g.has(h[y]))if(g.has(h[k])){const T=b.get(l[_]),B=T!==void 0?i[T]:null;if(B===null){const V=ys(e,i[y]);Wt(V,r[_]),u[_]=V}else u[_]=Wt(B,r[_]),ys(e,i[y],B),i[T]=null;_++}else eo(i[k]),k--;else eo(i[y]),y++;for(;_<=S;){const T=ys(e,u[S+1]);Wt(T,r[_]),u[_++]=T}for(;y<=k;){const T=i[y++];T!==null&&eo(T)}return this.ut=l,gc(e,u),zs}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class hh{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class uh{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(t=>this.q=t)}resume(){this.q?.(),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kr=e=>!hc(e)&&typeof e.then=="function",ea=1073741823;class ph extends Sa{constructor(){super(...arguments),this._$Cwt=ea,this._$Cbt=[],this._$CK=new hh(this),this._$CX=new uh}render(...t){return t.find(s=>!Kr(s))??zs}update(t,s){const n=this._$Cbt;let i=n.length;this._$Cbt=s;const r=this._$CK,l=this._$CX;this.isConnected||this.disconnected();for(let h=0;h<s.length&&!(h>this._$Cwt);h++){const u=s[h];if(!Kr(u))return this._$Cwt=h,u;h<i&&u===n[h]||(this._$Cwt=ea,i=0,Promise.resolve(u).then(async g=>{for(;l.get();)await l.get();const b=r.deref();if(b!==void 0){const y=b._$Cbt.indexOf(u);y>-1&&y<b._$Cwt&&(b._$Cwt=y,b.setValue(g))}}))}return zs}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const gh=hs(ph),fh=D`
  @layer base, a11y;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .field {
        transition: none;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    .field {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
      gap: var(--gds-sys-space-xs);
      padding-block: var(--gds-sys-space-xs);
      padding-inline: var(--gds-sys-space-m) var(--gds-sys-space-s);
      min-block-size: var(--gds-sys-space-3xl);
      block-size: var(--gds-sys-space-3xl);
      outline-style: solid;
      outline-width: 0;
      border-radius: var(--gds-sys-space-xs);
      background: var(--gds-sys-color-l3-background-secondary);
      color: var(--gds-sys-color-l3-content-tertiary);
      border: var(--gds-sys-space-4xs) solid
        var(--gds-sys-color-l3-border-secondary);
      cursor: text;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: background-color;

      .right {
        display: contents;
      }

      .right.as-flex {
        display: flex;
        position: absolute;
        gap: var(--gds-sys-space-xs);
        right: var(--gds-sys-space-s);
        top: var(--gds-sys-space-xs);
        block-size: max-content;
      }
    }

    .field.lead-slot-occupied {
      padding-inline-start: var(--gds-sys-space-s);
    }

    .field.action-slot-occupied:not(.trail-slot-occupied) {
      padding-inline-end: var(--gds-sys-space-s);

      &.small {
        padding-inline-end: var(--gds-sys-space-xs);
      }
    }

    .field:focus-within {
      outline-width: var(--gds-sys-space-3xs);
      outline-offset: var(--gds-sys-space-3xs);
      outline-color: currentColor;
      border-color: currentColor;
    }

    .field.small {
      gap: var(--gds-sys-space-2xs);
      padding: calc(var(--gds-sys-space-xs) - 1px) var(--gds-sys-space-xs);
      min-block-size: var(--gds-sys-space-xl);
      block-size: var(--gds-sys-space-xl);
    }

    .field.multiline {
      align-items: flex-start;
      padding: var(--gds-sys-space-s);
      padding-inline-start: var(--gds-sys-space-m);
      height: max-content;
    }

    .field.disabled {
      background: var(--gds-sys-color-l3-background-disabled);
      color: var(--gds-sys-color-l3-content-disabled);
      border-color: transparent;
      pointer-events: none;
    }

    .field.invalid {
      background: var(--gds-sys-color-l3-background-negative-secondary);
      border-color: var(--gds-sys-color-l3-border-negative);
      color: var(--gds-sys-color-l3-content-negative);
    }

    slot:not([name])::slotted(*) {
      color: currentColor;
    }

    .main-slot-wrap {
      display: flex;
      gap: var(--gds-sys-space-xs);
      flex: 1;
    }

    .main-slot-wrap.multiline {
      height: max-content;
    }

    @media (hover: hover) {
      .field:hover {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-background-secondary),
          var(--gds-sys-color-l3-states-light-hover)
        );
      }

      .field.invalid:hover {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-background-negative-secondary),
          var(--gds-sys-color-l3-states-negative-hover)
        );
      }
    }

    slot[name='lead']::slotted([gds-element^='gds-icon-']) {
      align-items: center;
      justify-content: center;
      display: flex;
      inline-size: var(--gds-sys-space-l);
      block-size: var(--gds-sys-space-l);
    }

    .multiline slot[name='action']::slotted([gds-element]) {
      margin-top: -4px;
    }
  }
`;var gs,Lo,Ua,lr,Za,dr,Qa,cr,Xa,hr,Ja;let ye=class extends R{constructor(){super(),c(this,Lo),c(this,lr),c(this,dr),c(this,cr),c(this,hr),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,c(this,gs,(e,t)=>{const n=t.target.assignedNodes({flatten:!0}),i=n.length>0&&n.some(r=>r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&r.textContent?.trim()!=="");e==="lead"?this._leadSlotOccupied=i:e==="trail"?this._trailSlotOccupied=i:e==="action"&&(this._actionSlotOccupied=i)})}connectedCallback(){super.connectedCallback(),ge.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return w`
      <div class="field ${Ve(e)}" part="_base">
        ${x(this,Lo,Ua).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};gs=new WeakMap;Lo=new WeakSet;Ua=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return w`
      ${x(this,lr,Za).call(this)} ${x(this,dr,Qa).call(this)}
      <div class="${Ve(e)}">
        ${x(this,cr,Xa).call(this)} ${x(this,hr,Ja).call(this)}
      </div>
    `};lr=new WeakSet;Za=function(){return w` <slot
      name="lead"
      @slotchange=${e=>a(this,gs).call(this,"lead",e)}
    ></slot>`};dr=new WeakSet;Qa=function(){return w`<div
      class="main-slot-wrap ${Ve({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>a(this,gs).call(this,"main",e)}
      ></slot>
    </div>`};cr=new WeakSet;Xa=function(){return w`
      <slot
        name="action"
        @slotchange=${e=>a(this,gs).call(this,"action",e)}
      ></slot>
    `};hr=new WeakSet;Ja=function(){return w`
      <slot
        name="trail"
        @slotchange=${e=>a(this,gs).call(this,"trail",e)}
      ></slot>
    `};ye.styles=[fh];o([d()],ye.prototype,"size",2);o([d({type:Boolean})],ye.prototype,"multiline",2);o([d({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);o([d({type:Boolean})],ye.prototype,"invalid",2);o([Q("slot:not([name])")],ye.prototype,"_mainSlotElement",2);o([de()],ye.prototype,"_leadSlotOccupied",2);o([de()],ye.prototype,"_trailSlotOccupied",2);o([de()],ye.prototype,"_actionSlotOccupied",2);o([U("disabled")],ye.prototype,"_handleDisabledChange",1);ye=o([$("gds-field-base"),Re()],ye);let at=class extends ee{};at._regularSVG='<path d="M12 2.75L12.6457 2.36845C12.5108 2.1401 12.2652 2 12 2C11.7348 2 11.4892 2.1401 11.3543 2.36845L12 2.75ZM2.25 19.25L1.60431 18.8685C1.4673 19.1003 1.46512 19.3878 1.59859 19.6217C1.73207 19.8556 1.9807 20 2.25 20V19.25ZM21.75 19.25V20C22.0193 20 22.2679 19.8556 22.4014 19.6217C22.5349 19.3878 22.5327 19.1003 22.3957 18.8685L21.75 19.25ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75H11.25ZM12.75 15.74C12.75 15.3258 12.4142 14.99 12 14.99C11.5858 14.99 11.25 15.3258 11.25 15.74H12.75ZM12 2.75L11.3543 2.36845L1.60431 18.8685L2.25 19.25L2.89569 19.6315L12.6457 3.13155L12 2.75ZM2.25 19.25V20H21.75V19.25V18.5H2.25V19.25ZM21.75 19.25L22.3957 18.8685L12.6457 2.36845L12 2.75L11.3543 3.13155L21.1043 19.6315L21.75 19.25ZM12 9.75H11.25V13.25H12H12.75V9.75H12ZM12.25 15.75H11.5C11.5 15.4739 11.7239 15.25 12 15.25V16V16.75C12.5523 16.75 13 16.3023 13 15.75H12.25ZM12 16V15.25C12.2761 15.25 12.5 15.4739 12.5 15.75H11.75H11C11 16.3023 11.4477 16.75 12 16.75V16ZM11.75 15.75H12.5C12.5 16.0261 12.2761 16.25 12 16.25V15.5V14.75C11.4477 14.75 11 15.1977 11 15.75H11.75ZM12 15.5V16.25C11.7239 16.25 11.5 16.0261 11.5 15.75H12.25H13C13 15.1977 12.5523 14.75 12 14.75V15.5ZM12 15.75H12.75V15.74H12H11.25V15.75H12Z" fill="currentColor"/>';at._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5108 2.1401 12.6457 2.36845L22.3957 18.8685C22.5327 19.1003 22.5349 19.3878 22.4014 19.6217C22.2679 19.8556 22.0193 20 21.75 20H2.25C1.9807 20 1.73207 19.8556 1.59859 19.6217C1.46512 19.3878 1.4673 19.1003 1.60431 18.8685L11.3543 2.36845C11.4892 2.1401 11.7348 2 12 2ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z" fill="currentColor"/>';at._name="triangle-exclamation";at._width=24;at._height=24;at._viewBox="0 0 24 24";at=o([$("gds-icon-triangle-exclamation")],at);const yh=D`
  @layer base, reset, transitional-styles;
  @layer base {
    :host(.visually-hidden) {
      position: absolute;
      clip: rect(0 0 0 0);
      width: 0px;
      height: 0px;
      overflow: hidden;
    }

    :host > *:not(style) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--gds-sys-space-xl);
    }

    .error-message {
      display: flex;
      align-items: flex-start;
      gap: var(--gds-sys-space-xs);
      margin-top: var(--gds-sys-space-2xs);
      font-weight: var(--gds-sys-text-weight-book);
      font-size: var(--gds-sys-text-size-detail-s);
      color: var(--gds-sys-color-l3-content-negative);
    }

    [gds-element^='gds-icon'] {
      width: 18px;
      height: 18px;
    }

    :host(.size-small) {
      & .error-message {
        font-size: var(--gds-sys-text-size-detail-xs);
        line-height: var(--gds-sys-text-line-height-detail-s);
        gap: var(--gds-sys-space-2xs);
      }
      & [gds-element^='gds-icon'] {
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-right: 2px;
      }
    }
  }
`;var Wo,Ka;let lt=class extends R{constructor(){super(...arguments),c(this,Wo)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter)}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return w`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${H(this.errorMessage,()=>w`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${H(Number.isInteger(this.charCounter),()=>x(this,Wo,Ka).call(this,this.charCounter))}
      </div>
    </div>`}};Wo=new WeakSet;Ka=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",w`<gds-badge variant="${t}">${e}</gds-badge>`};lt.styles=[yh];o([d({type:Number})],lt.prototype,"charCounter",2);o([d()],lt.prototype,"errorMessage",2);o([U("charCounter"),U("errorMessage")],lt.prototype,"_handleVisibilityChange",1);lt=o([$("gds-form-control-footer",{dependsOn:[Ee,at]})],lt);let dt=class extends ee{};dt._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7.375C12.3452 7.375 12.625 7.65482 12.625 8C12.625 8.34518 12.3452 8.625 12 8.625C11.6548 8.625 11.375 8.34518 11.375 8C11.375 7.65482 11.6548 7.375 12 7.375Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>';dt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>';dt._name="circle-info";dt._width=24;dt._height=24;dt._viewBox="0 0 24 24";dt=o([$("gds-icon-circle-info")],dt);const bh=D`
  @layer base, reset, transitional-styles;
  @layer base {
    #label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: var(--gds-sys-text-line-height-detail-m);
      color: var(--gds-sys-color-l2-content-primary);

      & > div {
        display: flex;
        flex-direction: column;
      }
    }

    ::slotted(label) {
      font-weight: var(--gds-sys-text-weight-book);
    }

    :host(.size-small) {
      & slot[name='supporting-text'],
      & ::slotted(label) {
        font-size: var(--gds-sys-text-size-detail-s);
        line-height: var(--gds-sys-text-line-height-detail-s);
      }
    }

    #extended-supporting-text {
      opacity: 1;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: all;
      font-size: var(--gds-sys-text-size-body-s);
      line-height: var(--gds-sys-text-line-height-body-s);
      border-radius: var(--gds-sys-space-xs);
      background-color: var(--gds-sys-color-l3-background-secondary);
      color: var(--gds-sys-color-l3-content-tertiary);
      max-height: var(--_max-height);

      &[aria-hidden='false'] {
        margin: var(--gds-sys-space-2xs) 0 0 0;
        padding: var(--gds-sys-space-s) var(--gds-sys-space-m);
      }

      &[aria-hidden='true'] {
        max-height: 0;
        opacity: 0;
        translate: 0 2px;
        padding: 0 var(--gds-sys-space-m);
        margin: 0;
        overflow: hidden;
      }
    }
  }
`;var ur,el,Oo,Vo,en,Ro,tl;let ct=class extends R{constructor(){super(...arguments),c(this,ur),c(this,Ro),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,c(this,Oo,()=>w`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${A("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${a(this,Vo)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),c(this,Vo,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this._extendedSupportingText?.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText})}),c(this,en,()=>{this.showExtendedSupportingText&&this._extendedSupportingText?.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`)})}render(){return w`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${H(this._hasExtendedSupportingText,a(this,Oo))}
      </div>

      ${x(this,Ro,tl).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",a(this,en))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",a(this,en))}};ur=new WeakSet;el=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};Oo=new WeakMap;Vo=new WeakMap;en=new WeakMap;Ro=new WeakSet;tl=function(){return w`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${x(this,ur,el)}
        ></slot>
      </div>
    `};ct.styles=[bh];o([d({type:Boolean,reflect:!0})],ct.prototype,"showExtendedSupportingText",2);o([de()],ct.prototype,"_hasExtendedSupportingText",2);o([Q("#extended-supporting-text")],ct.prototype,"_extendedSupportingText",2);ct=o([$("gds-form-control-header",{dependsOn:[Ne,Mt,dt]}),Re()],ct);const mh=D`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var vh=mh;let De=class extends ee{};De._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';De._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7425 2.99442C22.2979 3.40452 22.4156 4.18717 22.0055 4.74251L10.0055 20.9925C9.80427 21.2651 9.501 21.4442 9.16518 21.489C8.82936 21.5338 8.48974 21.4403 8.22411 21.23L2.22411 16.48C1.68284 16.0515 1.59143 15.2654 2.01993 14.7241C2.44844 14.1828 3.2346 14.0914 3.77587 14.5199L8.76235 18.4675L19.9944 3.2574C20.4045 2.70206 21.1872 2.58432 21.7425 2.99442Z" fill="currentColor"/>';De._name="checkmark";De._width=24;De._height=24;De._viewBox="0 0 24 24";De=o([$("gds-icon-checkmark")],De);var _s,tn,Bo;let Ye=class extends ka(R){constructor(){super(),c(this,tn),c(this,_s,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",x(this,tn,Bo)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),x(this,tn,Bo).call(this,e))})}get hidden(){return a(this,_s)}set hidden(e){const t=e.toString();G(this,_s,t==="true"),a(this,_s)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),ge.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){const e=this.parentElement?.multiple,t=w`
      <span class="checkbox ${Ve({checked:this.selected})}">
        ${this.selected?w`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),w`<div>${H(e,()=>t)} <slot></slot></div>`}};_s=new WeakMap;tn=new WeakSet;Bo=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};Ye.styles=[Y,Ca];o([d()],Ye.prototype,"value",2);o([d({type:Boolean,reflect:!0})],Ye.prototype,"hidden",1);o([d({attribute:"aria-selected",reflect:!0})],Ye.prototype,"selected",2);o([d({type:Boolean,reflect:!0})],Ye.prototype,"isPlaceholder",2);o([U("isPlaceholder")],Ye.prototype,"_handlePlaceholderStatusChange",1);Ye=o([$("gds-option",{dependsOn:[De]})],Ye);var ks,Fo;let qt=class extends R{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,c(this,ks,Ma()),c(this,Fo,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new Ta(this)}get navigableItems(){return this.visibleOptionElements}get options(){return a(this,ks).value?Aa(a(this,ks).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),ge.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",a(this,Fo))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return w`<slot ${Ea(a(this,ks))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};ks=new WeakMap;Fo=new WeakMap;qt.styles=vh;o([d({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],qt.prototype,"multiple",2);o([d()],qt.prototype,"compareWith",2);o([U("multiple")],qt.prototype,"_rerenderOptions",1);qt=o([$("gds-listbox",{dependsOn:[Ye]})],qt);var jn=D`
  * {
    box-sizing: border-box;
  }

  :host {
    display: flex;
    flex-direction: column;
    width: 100%;
    contain: layout;
    isolation: isolate;
    gap: var(--gds-sys-space-xs);
  }

  :host([size='small']) {
    gap: var(--gds-sys-space-2xs);
  }

  :host([size='small']) .native-control {
    font-size: var(--gds-sys-text-size-detail-s);
    line-height: var(--gds-sys-text-line-height-detail-s);
  }

  :host([disabled]) {
    color: var(--gds-sys-color-l3-content-disabled);
    pointer-events: none;
  }

  .native-control {
    appearance: none;
    background-color: transparent;
    border: 0;
    font-family: inherit;
    margin: unset;
    outline: none;
    overflow: hidden;
    padding: unset;
    width: 100%;
    font-size: var(--gds-sys-text-size-detail-m);
    line-height: var(--gds-sys-text-line-height-detail-m);
    color: currentColor;
    text-align: left;
  }

  :host([size='small']) slot[name='lead']::slotted(*) {
    line-height: 18px;
    width: var(--gds-sys-space-m);
  }

  :host([size='small']) slot[name='lead']::slotted(*) {
    min-width: var(--gds-sys-space-m);
    max-width: var(--gds-sys-space-m);
    display: flex;
  }

  slot[name='lead']::slotted(*) {
    min-width: var(--gds-sys-space-l);
    display: flex;
  }
`;let ht=class extends ee{};ht._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';ht._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>';ht._name="chevron-bottom";ht._width=24;ht._height=24;ht._viewBox="0 0 24 24";ht=o([$("gds-icon-chevron-bottom")],ht);const xh=D`
  @layer base, reset;

  @layer base {
    :host {
      isolation: auto;
      contain: none;
    }

    #field::part(_base) {
      cursor: pointer;
    }

    button#trigger {
      flex: 0 1 100%;
      cursor: pointer;

      /* This prevents overflow when the text is too long */
      display: grid;
    }

    #trigger:focus {
      outline: none;
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    input[type='text'] {
      border-radius: var(--gds-sys-space-xs);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-size: inherit;
      line-height: inherit;
      border: none;
      outline: none;
      color: var(--gds-sys-color-l3-content-disabled);
      border-color: var(--gds-sys-color-l3-border-tertiary);
      border-width: 0 0 var(--gds-sys-space-4xs) 0;
      border-style: solid;
      width: 100%;
      padding: var(--gds-sys-space-m);
      font-weight: var(--gds-sys-text-weight-regular);
      flex: 1;
      box-sizing: border-box;
      font-family: inherit;

      &:focus {
        border-color: var(--gds-sys-color-l3-border-secondary);
        color: var(--gds-sys-color-l3-content-tertiary);
      }

      &::placeholder {
        font-family: inherit;
        font-weight: var(--gds-sys-text-weight-book);
        color: var(--gds-sys-color-l3-content-disabled);
      }
    }

    [aria-expanded='true'] [slot='trail'] {
      transform: scaleY(-1);
    }
  }
`;var wh=xh,Ot,Io,sl,Po,No,Ho,$t,Go,sn,Yo,jo,qo,Uo,nl,An,zn,Zo,ol,Qo,il,ds,qn;let Z=class extends fe{constructor(){super(...arguments),c(this,Io),c(this,Uo),c(this,Zo),c(this,Qo),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,c(this,Ot,void 0),c(this,Po,()=>w`
      <input
        id="trigger"
        role="combobox"
        class="native-control"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        placeholder="${this.placeholder?.innerHTML}"
        name="trigger"
        aria-label="${this.label} ${this.displayValue}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
        .value=${this.value}
        @click=${e=>{e.stopImmediatePropagation()}}
        @input=${e=>{this.value=e.target.value,a(this,An).call(this),a(this,sn).call(this,e),a(this,$t).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{e.key==="ArrowDown"&&(e.preventDefault(),a(this,$t).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(t=>t.focus())),e.key==="Enter"&&a(this,zn).call(this)}}
      />
    `),c(this,No,()=>w`
      <button
        id="trigger"
        role="combobox"
        class="native-control"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        name="trigger"
        aria-label="${this.label} ${this.displayValue}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
      >
        <slot name="trigger">
          <span>${Ha(this.displayValue)}</span>
        </slot>
      </button>
    `),c(this,Ho,e=>{if(this.combobox){const s=e.getBoundingClientRect(),i=window.innerHeight-s.bottom,r=s.top;let l=Math.min(r,this.maxHeight);return i>r&&(l=Math.min(i,this.maxHeight)),`${l-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),c(this,$t,(e,t)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1})),c(this,Go,e=>{a(this,$t).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),c(this,sn,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const s=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!s.value)return;this.options.filter(i=>!this.searchFilter(s.value,i)).forEach(i=>i.hidden=!0)}),c(this,Yo,e=>{this._elListbox?.then(t=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),t.focus();return}})}),c(this,jo,e=>{if(e.key==="Tab"&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),c(this,qo,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),c(this,An,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),c(this,zn,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),c(this,ds,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&a(this,$t).call(this,!1,"close")&&(this.open=!1)}),c(this,qn,e=>{e.key==="Tab"&&!this.searchable&&a(this,$t).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())})}get type(){return"gds-dropdown"}get options(){return a(this,Ot)?Array.from(a(this,Ot)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(a(this,Ot))return Array.from(a(this,Ot)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){let e;return Array.isArray(this.value)?this.value.length>2?e=A(Rd`${this.value.length} selected`):e=this.value.reduce((t,s)=>t+this.options.find(n=>n.value===s)?.innerText+", ","").slice(0,-2):e=this.options.find(t=>t.selected)?.innerText,e||this.placeholder?.innerText||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}render(){return w`
      ${H(!this.plain&&!this.hideLabel,()=>w`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${H(this.supportingText.length>0,()=>w`<span slot="supporting-text" id="supporting-text">
                  ${this.supportingText}
                </span>`)}
            <slot
              id="extended-supporting-text"
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
            <!-- @deprecated: use 'supporting-text' slot instead. Remove in 2.0 release. -->
            <slot id="sub-label" name="sub-label" slot="supporting-text"></slot>
          </gds-form-control-header>
        `)}
      <gds-popover
        .autofocus=${!this.combobox}
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${a(this,Ho)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[Na(8),Jc()]:O.DefaultMiddleware}
        @gds-ui-state=${a(this,Go)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.combobox&&!this.multiple?a(this,Po).call(this):a(this,No).call(this)}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${H(this.searchable,()=>w`<input
              id="searchinput"
              type="text"
              aria-label="${A("Filter available options")}"
              placeholder="${A("Search")}"
              @keydown=${a(this,Yo)}
              @input=${a(this,sn)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${N(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${x(this,Uo,nl)}"
          @gds-focus="${a(this,qo)}"
          @keydown=${a(this,jo)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${H(x(this,Io,sl).call(this),()=>w`
          <gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){if(this.requestUpdate(),G(this,Ot,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:!this.combobox&&!this.placeholder&&this.options.find(e=>this.compareWith(e.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?x(this,Zo,ol).call(this):(x(this,Qo,il).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t?.scrollIntoView({block:"center"})})}};Ot=new WeakMap;Io=new WeakSet;sl=function(){return!this.plain};Po=new WeakMap;No=new WeakMap;Ho=new WeakMap;$t=new WeakMap;Go=new WeakMap;sn=new WeakMap;Yo=new WeakMap;jo=new WeakMap;qo=new WeakMap;Uo=new WeakSet;nl=function(){this._elListbox.then(e=>{this.multiple?this.value=e.selection.map(t=>t.value):(this.value=e.selection[0]?.value,a(this,$t).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0))),a(this,An).call(this),a(this,zn).call(this)})};An=new WeakMap;zn=new WeakMap;Zo=new WeakSet;ol=function(){this.addEventListener("blur",a(this,ds)),this.addEventListener("gds-blur",a(this,ds)),this.addEventListener("keydown",a(this,qn))};Qo=new WeakSet;il=function(){this.removeEventListener("blur",a(this,ds)),this.removeEventListener("gds-blur",a(this,ds)),this.removeEventListener("keydown",a(this,qn))};ds=new WeakMap;qn=new WeakMap;Z.styles=[Y,jn,wh];o([d({attribute:"supporting-text"})],Z.prototype,"supportingText",2);o([d({type:Boolean,reflect:!0})],Z.prototype,"open",2);o([d({type:Boolean,reflect:!0})],Z.prototype,"searchable",2);o([d({type:Boolean,reflect:!0})],Z.prototype,"multiple",2);o([d({type:Boolean,reflect:!0})],Z.prototype,"combobox",2);o([d()],Z.prototype,"compareWith",2);o([d()],Z.prototype,"searchFilter",2);o([d({type:Boolean,attribute:"sync-popover-width"})],Z.prototype,"syncPopoverWidth",2);o([d({type:Number,attribute:"max-height"})],Z.prototype,"maxHeight",2);o([d()],Z.prototype,"size",2);o([d({type:Boolean,attribute:"hide-label"})],Z.prototype,"hideLabel",2);o([d({type:Boolean})],Z.prototype,"plain",2);o([d({type:Boolean})],Z.prototype,"disableMobileStyles",2);o([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],Z.prototype,"showExtendedSupportingText",2);o([Q("#trigger")],Z.prototype,"_elTriggerBtn",2);o([zt("#listbox")],Z.prototype,"_elListbox",2);o([Q("#searchinput")],Z.prototype,"_elSearchInput",2);o([tr({attributes:!0,childList:!0,subtree:!0,characterData:!0})],Z.prototype,"_handleLightDOMChange",1);o([U("value")],Z.prototype,"_handleValueChange",1);o([U("open")],Z.prototype,"_handleOpenChange",1);Z=o([$("gds-dropdown",{dependsOn:[ct,lt,ye,qt,O,De,ht]}),Re()],Z);const pr={fromAttribute(e){return new Date(e)},toAttribute(e){return e.toISOString()}},_h={fromAttribute(e){return e.split(",").map(t=>new Date(t.trim()))},toAttribute(e){return JSON.stringify(e.map(t=>t.toISOString()))}},kh={fromAttribute(e){return e.split(",")},toAttribute(e){return Array.isArray(e)?e.join(","):e}};let ut=class extends ee{};ut._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';ut._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>';ut._name="calendar";ut._width=24;ut._height=24;ut._viewBox="0 0 24 24";ut=o([$("gds-icon-calendar")],ut);let pt=class extends ee{};pt._regularSVG='<path d="M7.75 4.75H3.75V9.25M7.75 4.75H16.25M7.75 4.75V2.75M16.25 4.75H20.25V9.25M16.25 4.75V2.75M11.25 20.25H3.75V9.25M3.75 9.25H20.25M20.25 9.25V11.25M17.75 14.75V18M17.75 18V21.25M17.75 18H14.5M17.75 18H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';pt._solidSVG='<path d="M8.5 2.75C8.5 2.33579 8.16421 2 7.75 2C7.33579 2 7 2.33579 7 2.75V4H3.75C3.33579 4 3 4.33579 3 4.75V20.25C3 20.6642 3.33579 21 3.75 21H11.25C11.6642 21 12 20.6642 12 20.25C12 19.8358 11.6642 19.5 11.25 19.5H4.5V10H19.5V11.25C19.5 11.6642 19.8358 12 20.25 12C20.6642 12 21 11.6642 21 11.25V4.75C21 4.33579 20.6642 4 20.25 4H17V2.75C17 2.33579 16.6642 2 16.25 2C15.8358 2 15.5 2.33579 15.5 2.75V4H8.5V2.75Z" fill="currentColor"/><path d="M18.5 14.75C18.5 14.3358 18.1642 14 17.75 14C17.3358 14 17 14.3358 17 14.75V17.25H14.5C14.0858 17.25 13.75 17.5858 13.75 18C13.75 18.4142 14.0858 18.75 14.5 18.75H17V21.25C17 21.6642 17.3358 22 17.75 22C18.1642 22 18.5 21.6642 18.5 21.25V18.75H21C21.4142 18.75 21.75 18.4142 21.75 18C21.75 17.5858 21.4142 17.25 21 17.25H18.5V14.75Z" fill="currentColor"/>';pt._name="calender-add";pt._width=24;pt._height=24;pt._viewBox="0 0 24 24";pt=o([$("gds-icon-calender-add")],pt);let je=class extends ee{};je._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';je._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>';je._name="chevron-left";je._width=24;je._height=24;je._viewBox="0 0 24 24";je=o([$("gds-icon-chevron-left")],je);let qe=class extends ee{};qe._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';qe._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>';qe._name="chevron-right";qe._width=24;qe._height=24;qe._viewBox="0 0 24 24";qe=o([$("gds-icon-chevron-right")],qe);var nt,nn,on,rn,an,Xo,Jo,Ko,ei,rl,es,Cs,ln,ti,ts,$s,Ss,dn;let Le=class extends R{constructor(){super(...arguments),c(this,ei),c(this,es),c(this,ln),c(this,ts),c(this,Ss),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=x(this,ln,ti).call(this,this.value,this.length),c(this,nt,""),c(this,nn,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=x(this,ts,$s).call(this,e+1),x(this,es,Cs).call(this)}),c(this,on,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=x(this,ts,$s).call(this,e-1),x(this,es,Cs).call(this)}),c(this,rn,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),c(this,an,()=>{x(this,Ss,dn).call(this)}),c(this,Xo,()=>{a(this,nt)!==""&&(x(this,Ss,dn).call(this),this.value=x(this,ts,$s).call(this,parseInt(this.value.toString())),x(this,es,Cs).call(this))}),c(this,Jo,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?a(this,on).call(this):a(this,nn).call(this)}),c(this,Ko,e=>{let t=!1;if(e.key==="ArrowUp")a(this,nn).call(this),t=!0;else if(e.key==="ArrowDown")a(this,on).call(this),t=!0;else{const s=parseInt(e.key);isNaN(s)||(a(this,nt).length<this.length&&(G(this,nt,a(this,nt)+s.toString()),this.value=parseInt(a(this,nt))),a(this,nt).length===this.length&&(this.value=x(this,ts,$s).call(this,this.value),x(this,Ss,dn).call(this),x(this,ei,rl).call(this),x(this,es,Cs).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",a(this,Jo)),this.addEventListener("keydown",a(this,Ko)),this.addEventListener("blur",a(this,Xo)),this.addEventListener("focus",a(this,an)),this.addEventListener("click",a(this,rn)),this.addEventListener("mousedown",a(this,rn))}focus(e){super.focus(e),a(this,an).call(this)}render(){return w`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=x(this,ln,ti).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};nt=new WeakMap;nn=new WeakMap;on=new WeakMap;rn=new WeakMap;an=new WeakMap;Xo=new WeakMap;Jo=new WeakMap;Ko=new WeakMap;ei=new WeakSet;rl=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof Le){e.focus();break}e=e.nextElementSibling}};es=new WeakSet;Cs=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};ln=new WeakSet;ti=function(e,t){return String(e).padStart(t,"0")};ts=new WeakSet;$s=function(e){return Math.max(this.min,Math.min(this.max,e))};Ss=new WeakSet;dn=function(){G(this,nt,"")};Le.formAssociated=!0;o([d({type:Number})],Le.prototype,"value",2);o([d({type:Number})],Le.prototype,"length",2);o([d({type:Number,attribute:"aria-valuemin"})],Le.prototype,"min",2);o([d({type:Number,attribute:"aria-valuemax"})],Le.prototype,"max",2);o([de()],Le.prototype,"displayValue",2);o([U("value")],Le.prototype,"_refreshDisplayValue",1);Le=o([$("gds-date-part-spinner")],Le);const Ch=D`
  @layer base, reset;

  @layer base {
    ::part(_button) {
      outline-offset: -1px;
    }

    .spinners {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      inline-size: 11ch;
      gap: var(--gds-sys-space-4xs);
      font-size: var(--gds-sys-text-size-detail-s);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    :host([size='small']) .spinners {
      font-size: var(--gds-sys-text-size-detail-s);
      line-height: var(--gds-sys-text-line-height-detail-s);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      /* border-radius: var(--gds-sys-space-2xs); */
      outline: none;
      padding-block: var(--gds-sys-space-3xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;

      &:focus {
        background-color: var(--gds-sys-color-l2-background-tertiary);
        color: var(--gds-sys-color-l2-content-tertiary);
      }
    }
  }
`;var Ms,si,al,ni,ll,Ws,Dn,oi,dl,ii,cl,cn,ri,Ct,Vt,Rt,ss,hl,ai,li,di,ci,hi,ui,pi,gi,fi,Ln,yi,bi,hn,mi,vi,st,xi,ul,gr,pl;let P=class extends fe{constructor(){super(),c(this,si),c(this,ni),c(this,Ws),c(this,oi),c(this,ii),c(this,cn),c(this,Ct),c(this,Rt),c(this,hn),c(this,xi),c(this,gr),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=x(this,hn,mi).call(this,"y-m-d"),c(this,Ms,void 0),c(this,hl,e=>{this._elTrigger.then(t=>{e.relatedTarget?.parentElement!==e.target&&document.getSelection()?.removeAllRanges()})}),c(this,ai,e=>{this._elTrigger.then(t=>{document.getSelection()?.removeAllRanges();const s=new Range;s.setStart(t.firstChild,0),s.setEnd(t.lastChild,4),document.getSelection()?.addRange(s)})}),c(this,li,e=>{this._elFieldAsync.then(t=>{e.currentTarget===t&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),c(this,di,e=>{this._elFieldAsync.then(t=>{if(e.currentTarget!==t)return;e.preventDefault();const s=e.clipboardData?.getData("text/plain");if(!s)return;let n=new Date("-");const i="Invalid Date",r=s.split(this._dateFormatLayout.delimiter);if(r.length===3){const l=this._dateFormatLayout.layout,h=parseInt(r[l.findIndex(b=>b.token==="y")]),u=parseInt(r[l.findIndex(b=>b.token==="m")])-1,g=parseInt(r[l.findIndex(b=>b.token==="d")]);!isNaN(h)&&!isNaN(u)&&!isNaN(g)&&(n=new Date(`${h}-${u+1}-${g}`))}n.toString()===i&&(n=new Date(s),n.toString()===i)||(this.value=n,x(this,Ct,Vt).call(this))})}),c(this,ci,e=>{this._elSpinners[0]?.focus()}),c(this,hi,e=>{e.stopPropagation(),this.value=new Date(e.detail),this.open=!1,x(this,Ct,Vt).call(this),x(this,Rt,ss).call(this)}),c(this,ui,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),c(this,pi,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),c(this,gi,e=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),c(this,fi,e=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),c(this,Ln,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),x(this,Rt,ss).call(this)}),c(this,yi,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;if(!t){this.value=void 0,x(this,Ct,Vt).call(this);return}!wt(t||new Date(0),a(this,Ms)||new Date(0))&&(this.value=new Date(t),x(this,Ct,Vt).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=a(this,Ms),x(this,Rt,ss).call(this))}}),c(this,bi,e=>{const t=Array.from(this._elSpinners).findIndex(s=>s===e.target);if(e.key==="ArrowRight"){const s=this._elSpinners[t+1];s&&s.focus()}if(e.key==="ArrowLeft"){const s=this._elSpinners[t-1];s&&s.focus()}}),c(this,vi,(e,t)=>{a(this,st)[t]=e;const s=new Date;s.setFullYear(parseInt(a(this,st).year)),s.setMonth(parseInt(a(this,st).month)-1),s.setDate(parseInt(a(this,st).day)),s.setHours(12,0,0,0),s.toString()!=="Invalid Date"&&(this.value=s,x(this,Ct,Vt).call(this),x(this,Rt,ss).call(this))}),c(this,st,{year:"yyyy",month:"mm",day:"dd"}),Le.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(e){super.value=e}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=x(this,hn,mi).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),ge.instance.apply(this,"gds-datepicker")}focus(e){this._getValidityAnchor()?.focus(e)}render(){return w`
      ${H(!this.plain,()=>w`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${H(this.supportingText.length>0,()=>w`<span slot="supporting-text" id="supporting-text">
                  ${this.supportingText}
                </span>`)}
            <slot
              id="supporting-text-slot"
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
            <!-- @deprecated: use 'supporting-text' slot instead. Remove in 2.0 release. -->
            <slot
              id="sub-label-slot"
              name="sub-label"
              slot="supporting-text"
            ></slot>
          </gds-form-control-header>`)}
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${a(this,ci)}
        @copy=${a(this,li)}
        @paste=${a(this,di)}
        id="field"
      >
        <div class="spinners">
          ${lh(dh(this._dateFormatLayout.layout,(e,t)=>w`<gds-date-part-spinner
                  id="spinner-${t}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${a(this,st)[e.name]}
                  aria-valuemin=${x(this,ii,cl).call(this,e.name)}
                  aria-valuemax=${x(this,cn,ri).call(this,e.name)}
                  aria-label=${x(this,oi,dl).call(this,e.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${x(this,cn,ri).call(this,e.name).toString().length}
                  @keydown=${a(this,bi)}
                  @change=${s=>a(this,vi).call(this,s.detail.value,e.name)}
                  @focus=${a(this,ai)}
                  @touchend=${s=>{this.open=!0,s.preventDefault()}}
                ></gds-date-part-spinner>`),w`<span class="separator"
              >${this._dateFormatLayout.delimiter}</span
            >`)}
        </div>
        <gds-button
          id="calendar-button"
          slot="action"
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant=${this.invalid?"negative":""}
          aria-label="${A("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          ${H(this.size==="small",()=>w`<gds-icon-calender-add
                height="16"
                stroke="2"
              ></gds-icon-calender-add>`,()=>w`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${H(x(this,si,al).call(this),()=>w`<gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            </slot>
          </gds-form-control-footer>`)}

      <gds-popover
        autofocus
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elFieldAsync}
        .open=${this.open}
        @gds-ui-state=${a(this,yi)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{e.target?.id==="calendar-popover"&&this._elCalendar.then(s=>s.focus())}}
      >
        <gds-div overflow="auto">
          <gds-flex
            align-items="center"
            justify-content="space-between"
            gap="s"
            padding="m m 0 m"
          >
            <gds-button
              @click=${a(this,fi)}
              aria-label=${A("Previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${a(this,ui)}
              .maxHeight=${300}
              label="${A("Month")}"
              size="small"
              class="month"
              hide-label
            >
              <gds-option value="0">${A("January")}</gds-option>
              <gds-option value="1">${A("February")}</gds-option>
              <gds-option value="2">${A("March")}</gds-option>
              <gds-option value="3">${A("April")}</gds-option>
              <gds-option value="4">${A("May")}</gds-option>
              <gds-option value="5">${A("June")}</gds-option>
              <gds-option value="6">${A("July")}</gds-option>
              <gds-option value="7">${A("August")}</gds-option>
              <gds-option value="8">${A("September")}</gds-option>
              <gds-option value="9">${A("October")}</gds-option>
              <gds-option value="10">${A("November")}</gds-option>
              <gds-option value="11">${A("December")}</gds-option>
            </gds-dropdown>
            <gds-dropdown
              .value=${this._focusedYear.toString()}
              @change=${a(this,pi)}
              .maxHeight=${300}
              label="${A("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${ch(a(this,xi,ul),e=>e,e=>w`<gds-option value=${e}>${e}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${a(this,gi)}
              aria-label=${A("Next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${a(this,hi)}
            @gds-date-focused=${a(this,Ln)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${H(this.clearable||!this.hideTodayButton,()=>w`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="0 m m m"
              >
                ${H(this.clearable,()=>w` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,x(this,Rt,ss).call(this),x(this,Ct,Vt).call(this)}}
                    >
                      ${A("Clear")}
                    </gds-button>`)}
                ${gh(x(this,ni,ll).call(this),pe)}
                ${H(!this.hideTodayButton,()=>w` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),x(this,Ws,Dn).call(this,new Date)}}
                    >
                      ${A("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){G(this,st,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");G(this,st,{year:t,month:s,day:n})}_handleOpenChange(){this.open&&(G(this,Ms,this.value),this._elCalendar.then(e=>e.focus()))}};Ms=new WeakMap;si=new WeakSet;al=function(){return!this.plain};ni=new WeakSet;ll=async function(){const e=await this.getFocusedDate();let t="",s;return e&&e>this.max?(t=A("Last available date"),s=n=>{n.stopPropagation(),x(this,Ws,Dn).call(this,this.max)}):e&&e<this.min&&(t=A("First available date"),s=n=>{n.stopPropagation(),x(this,Ws,Dn).call(this,this.min)}),w`${H(t.length>0,()=>w`<gds-button rank="tertiary" size="small" @click=${s}>
          ${t}
        </gds-button>`,()=>pe)}`};Ws=new WeakSet;Dn=function(e){const t=new Date(e);this._elCalendar.then(s=>s.focusedDate=t).then(a(this,Ln))};oi=new WeakSet;dl=function(e){return`${{year:A("Year"),month:A("Month"),day:A("Day")}[e]} ${this.label}`};ii=new WeakSet;cl=function(e){return{year:1900,month:1,day:1}[e]};cn=new WeakSet;ri=function(e){return{year:9999,month:12,day:31}[e]};Ct=new WeakSet;Vt=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};Rt=new WeakSet;ss=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};hl=new WeakMap;ai=new WeakMap;li=new WeakMap;di=new WeakMap;ci=new WeakMap;hi=new WeakMap;ui=new WeakMap;pi=new WeakMap;gi=new WeakMap;fi=new WeakMap;Ln=new WeakMap;yi=new WeakMap;bi=new WeakMap;hn=new WeakSet;mi=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),n=s.findIndex(u=>u==="y"),i=s.findIndex(u=>u==="m"),r=s.findIndex(u=>u==="d");if(n===-1||i===-1||r===-1)throw new Error("Invalid date format for <gds-datepicker>");const h=[n,i,r].sort((u,g)=>u-g).map(u=>s[u]).map(u=>({token:u,name:u==="y"?"year":u==="m"?"month":"day"}));return{delimiter:t,layout:h}};vi=new WeakMap;st=new WeakMap;xi=new WeakSet;ul=function(){const e=this.min.getFullYear(),t=this.max.getFullYear(),s=a(this,gr,pl),n=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield n);for(let i=e;i<=t;i++)yield i}}};gr=new WeakSet;pl=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};P.styles=[Y,jn,Ch];o([d({converter:pr})],P.prototype,"value",1);o([d({converter:pr})],P.prototype,"min",2);o([d({converter:pr})],P.prototype,"max",2);o([d({type:Boolean})],P.prototype,"open",2);o([d({attribute:"supporting-text"})],P.prototype,"supportingText",2);o([d({type:String})],P.prototype,"size",2);o([d({type:Boolean})],P.prototype,"plain",2);o([d({type:Boolean,attribute:"show-week-numbers"})],P.prototype,"showWeekNumbers",2);o([d({type:Boolean,attribute:"hide-label"})],P.prototype,"hideLabel",2);o([d({type:Boolean,attribute:"clearable"})],P.prototype,"clearable",2);o([d({type:Boolean,attribute:"hide-today-button"})],P.prototype,"hideTodayButton",2);o([d()],P.prototype,"dateformat",1);o([d({type:Boolean,attribute:"disabled-weekends"})],P.prototype,"disabledWeekends",2);o([d({converter:_h,attribute:"disabled-dates"})],P.prototype,"disabledDates",2);o([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],P.prototype,"showExtendedSupportingText",2);o([zt("#calendar-button")],P.prototype,"test_calendarButton",2);o([Q("#clear-button")],P.prototype,"test_clearButton",2);o([Q("#today-button")],P.prototype,"test_todayButton",2);o([de()],P.prototype,"_focusedMonth",2);o([de()],P.prototype,"_focusedYear",2);o([de()],P.prototype,"_dateFormatLayout",2);o([zt("#calendar")],P.prototype,"_elCalendar",2);o([zt("#calendar-button")],P.prototype,"_elTrigger",2);o([zt("#field")],P.prototype,"_elFieldAsync",2);o([td("[role=spinbutton]")],P.prototype,"_elSpinners",2);o([Q("#field")],P.prototype,"_elField",2);o([U("value")],P.prototype,"_handleValueChange",1);o([U("open")],P.prototype,"_handleOpenChange",1);P=o([Re()],P);let wi=class extends we($e(_e(P))){};wi=o([$("gds-datepicker",{dependsOn:[rt,Ne,Z,X,O,ut,pt,je,qe]})],wi);wi.define();const $h=D`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;
    }

    dialog {
      transition: 0.3s;
      background: transparent;
      padding: 0;
      border-width: 0;
      overflow: visible;
      max-width: 100vw;
      max-height: 100vh;
      display: flex;

      @starting-style {
        opacity: 0;
        transform: translateY(-16px);
        &::backdrop {
          opacity: 0;
        }
      }

      &::backdrop {
        transition: 0.3s;
        background: rgba(100, 100, 100, 0.4);
      }
    }

    dialog > * {
      flex-grow: 1;
    }

    dialog.default {
      width: 400px;
      max-height: 400px;
    }

    dialog.slide-out {
      --_in: var(--gds-sys-space-l);
      width: 600px;
      height: auto;
      inset: 0 0 0 auto;
      @starting-style {
        transform: translateX(96px);
      }
      @media (min-width: 648px) {
        inset: var(--_in) var(--_in) var(--_in) auto;
      }
    }

    dialog:focus {
      outline: none;
    }

    .card {
      flex-direction: column;
    }

    slot[name='footer'] > *,
    slot[name='footer']::slotted(*) {
      flex: 1;
    }

    h2 {
      margin: 0;
      padding: 0;
      font-size: var(--gds-sys-text-size-heading-s);
      font-weight: 400;
    }
  }
`,_i=new Set;function Sh(){ua.instance.injectGlobalStyles("dialog-scroll-lock",D`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function Mh(e){if(_i.add(e),!document.documentElement.classList.contains("gds-scroll-lock")){const t=Eh()+Th();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),t<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${t}px`)}}function ta(e){_i.delete(e),_i.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function Eh(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Th(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}var Bt,ki,un,Ci,pn,$i,gl,fr,Es;Sh();let We=class extends we(Rn(R)){constructor(){super(...arguments),c(this,$i),this.open=!1,this.variant="default",c(this,Bt,void 0),c(this,ki,e=>{const s=e.target.returnValue;if(s!=="prop-change"){if(!a(this,un).call(this,s))return;this.close(s||"native-close");return}this.close(s||"native-close")}),c(this,un,e=>(this.dispatchCustomEvent("gds-close",{detail:e}),a(this,pn).call(this,e))),c(this,Ci,e=>(this.dispatchCustomEvent("gds-show",{detail:e}),a(this,pn).call(this,e))),c(this,pn,e=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:e,open:this.open}})),c(this,fr,e=>{this.show("slotted-trigger")}),c(this,Es,e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const i=s.getBoundingClientRect(),r=i.top<=t.clientY&&t.clientY<=i.top+i.height&&i.left<=t.clientX&&t.clientX<=i.left+i.width,l="click-outside";!r&&a(this,un).call(this,l)&&this.close(l)}})}show(e){this.open=!0,e&&a(this,Ci).call(this,e)}close(e){G(this,Bt,e),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),ta(this)}render(){return w`<slot
        name="trigger"
        @slotchange=${x(this,$i,gl)}
      ></slot>
      ${H(this.open,()=>w`<dialog
            @close=${a(this,ki)}
            class=${this.variant}
            aria-describedby="heading"
          >
            <gds-card
              class="card"
              display="flex"
              variant="secondary"
              box-shadow="xl"
              padding="l"
              gap="l"
              border-radius="s"
            >
              <gds-flex
                justify-content="space-between"
                background-color="secondary"
              >
                <h2 id="heading">${this.heading}</h2>
                <gds-button
                  id="close-btn"
                  rank="secondary"
                  size="small"
                  label=${A("Close")}
                  @click=${()=>this.close("btn-close")}
                  ><gds-icon-cross-small></gds-icon-cross-small
                ></gds-button>
              </gds-flex>
              <gds-div id="content" overflow="auto" flex="1">
                <slot></slot>
              </gds-div>
              <gds-flex
                class="footer"
                justify-content="center"
                gap="s"
                padding="s 0 0 0"
              >
                <slot name="footer">
                  <gds-button
                    value="cancel"
                    @click=${()=>this.close("btn-cancel")}
                    rank="secondary"
                    >${A("Cancel")}</gds-button
                  >
                  <gds-button value="ok" @click=${()=>this.close("btn-ok")}
                    >Ok</gds-button
                  >
                </slot>
              </gds-flex>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){this.open?(G(this,Bt,void 0),this.updateComplete.then(()=>{this._elDialog?.showModal(),Mh(this),document.removeEventListener("click",a(this,Es)),requestAnimationFrame(()=>document.addEventListener("click",a(this,Es))),ad&&this._elDialog?.focus()})):(G(this,Bt,a(this,Bt)||"prop-change"),this._elDialog?.close(a(this,Bt)),ta(this),document.removeEventListener("click",a(this,Es)),this.requestUpdate("open"))}};Bt=new WeakMap;ki=new WeakMap;un=new WeakMap;Ci=new WeakMap;pn=new WeakMap;$i=new WeakSet;gl=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const e=this._elTriggerSlot.assignedElements()[0];e?.addEventListener("click",a(this,fr)),e?.setAttribute("aria-haspopup","dialog")}};fr=new WeakMap;Es=new WeakMap;We.styles=[$h];We.styleExpressionBaseSelector="dialog";o([d({type:Boolean,reflect:!0})],We.prototype,"open",2);o([d()],We.prototype,"heading",2);o([d()],We.prototype,"variant",2);o([Q("dialog")],We.prototype,"_elDialog",2);o([Q('slot[name="trigger"]')],We.prototype,"_elTriggerSlot",2);o([U("open")],We.prototype,"_handleOpenChange",1);We=o([$("gds-dialog",{dependsOn:[Ne,Mt,W,rt,Ge]}),Re()],We);We.define();const Ah=D`
  :host {
    display: block;
  }

  hr {
    border-radius: 200px;
    background: currentColor;
    font-size: 0;
    border: 0;
    height: 1px;
    width: 100%;
    margin-top: calc((var(--_size, 0) / 2) - (1px / 2));
    margin-bottom: calc((var(--_size, 0) / 2) - (1px / 2));
  }
`;var zh=Ah;let gt=class extends R{constructor(){super(...arguments),this.level="2",this.role=null}render(){return w`<hr role=${this.role||pe} />`}};gt.styles=[Y,zh];o([d()],gt.prototype,"level",2);o([m(Bs("border"))],gt.prototype,"color",2);o([m({property:"--_size",valueTemplate:e=>`var(--gds-sys-space-${e})`})],gt.prototype,"size",2);o([m()],gt.prototype,"opacity",2);o([d()],gt.prototype,"role",2);gt=o([$("gds-divider")],gt);gt.define();Z.define();Ye.define();const Dh=D`
  :host {
    display: flex;
    z-index: 1050;
    position: fixed;
    inset: auto var(--gds-sys-space-3xl) var(--gds-sys-space-3xl) auto;
  }
  .button {
    box-shadow: var(--gds-shadow-m);
    block-size: calc(var(--_block-size) + var(--gds-sys-space-xs));
    width: max-content;
  }
`;var Lh=Dh;let Si=class extends Bn(Ne){connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",Lh)}};Si=o([$("gds-fab")],Si);Si.define();function yr(){return(e,t,s)=>{const n=e.connectedCallback,i=e.disconnectedCallback;e.connectedCallback=function(){n?.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{s.value?.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){i?.call(this),this.__resizeObservers[t].disconnect()}}}const Wh=D`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`;let Ut=class extends R{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),ge.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return w`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${Ve(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};Ut.styles=[Wh];o([d({reflect:!0,type:Boolean})],Ut.prototype,"selected",2);o([d()],Ut.prototype,"value",2);Ut=o([$("gds-filter-chip",{dependsOn:[Ne,De]})],Ut);const Oh=D`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: inline-block;
      max-width: 100%;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .collapse {
      overflow: auto;
      scroll-snap-type: both mandatory;
      overscroll-behavior-x: contain;
      flex-wrap: nowrap;
      padding-bottom: 0.5rem;
      scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
      scrollbar-width: thin;
    }

    ::slotted(*) {
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }
`;var Mi,Ei,gn,Ti,fl,Ai,yl;let ke=class extends fe{constructor(){super(...arguments),c(this,Ti),c(this,Ai),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,c(this,Mi,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),c(this,Ei,3),c(this,gn,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return w`<div
      class="chips ${Ve(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${a(this,Mi)}
        @slotchange=${x(this,Ai,yl)}
        role="none"
      ></slot>
    </div>`}focus(e){this.chips[0]?.focus(e)}_getValidityAnchor(){return this.shadowRoot?.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=x(this,Ti,fl).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*a(this,Ei)&&(this._collapsed=!0,G(this,gn,s)),s>a(this,gn)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})}))}};Mi=new WeakMap;Ei=new WeakMap;gn=new WeakMap;Ti=new WeakSet;fl=function(){return this.chips[0]?.offsetHeight||0};Ai=new WeakSet;yl=function(){const e=this.chips.find(t=>t.selected)?.value;e&&(this.value=e)};ke.styles=[Oh];o([d({converter:kh})],ke.prototype,"value",1);o([d({type:Boolean})],ke.prototype,"multiple",2);o([d()],ke.prototype,"label",2);o([d({type:Boolean,attribute:"row-collapse"})],ke.prototype,"rowCollapse",2);o([de()],ke.prototype,"_collapsed",2);o([Q("slot")],ke.prototype,"_elSlot",2);o([yr()],ke.prototype,"_handleResize",1);o([U("value")],ke.prototype,"_updateSelectedFromValue",1);ke=o([$("gds-filter-chips",{dependsOn:[Ut]})],ke);ke.define();Ut.define();rt.define();const Vh=D`
  :host {
    --_c: 12;
    --_grid-col: repeat(var(--_c), 1fr);
    width: 100%;
    display: grid;
    grid-template-columns: var(--_grid-col);
    grid-column-gap: var(--_gap-column, 0px);
    grid-row-gap: var(--_gap-row, 0px);
  }

  :host([auto-columns]) {
    --_col-count: var(--_c, 0);
    --_gap-count: calc(var(--_col-count) - 1);
    --_total-gap-width: calc(var(--_gap-count) * var(--_gap-column, 0px));
    --_col-width-max: calc(
      (100% - var(--_total-gap-width)) / var(--_col-count)
    );
    grid-template-columns: repeat(
      auto-fill,
      minmax(max(var(--_col-width), var(--_col-width-max)), 1fr)
    );
  }
`;var Rh=Vh;let Zt=class extends W{render(){return w`<slot></slot>`}};Zt.styles=[Y,Rh];o([m({property:"--_c"})],Zt.prototype,"columns",2);o([m({...Nt,styleTemplate:(e,t)=>{const s=t[0];return`--_gap-column: ${t[1]||s}; --_gap-row: ${s};`}})],Zt.prototype,"gap",2);o([m({property:"--_col-width",valueTemplate:e=>`${isNaN(e)?e:`${e}px`}`})],Zt.prototype,"auto-columns",2);Zt=o([$("gds-grid")],Zt);Zt.define();let Wn=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return w`<slot></slot>`}};Wn=o([$("gds-list-item")],Wn);let On=class extends R{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),ge.instance.apply(this,"gds-grouped-list")}render(){return w`${H(this.label,()=>w`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};o([d()],On.prototype,"label",2);On=o([$("gds-grouped-list",{dependsOn:[Wn]})],On);On.define();Wn.define();let ft=class extends ee{};ft._regularSVG='<path d="M19.25 9.25V17.25M15.25 17.25V9.25M4.75 9.25V17.25M8.75 17.25V9.25M2.75 7.17308L12 2.5L21.25 7.17308V9.25H2.75V7.17308ZM2.75 20.25H21.25L20.25 17.25H3.75L2.75 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>';ft._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3382 1.83058C12.1255 1.72314 11.8745 1.72314 11.6618 1.83058L2.41181 6.50365C2.15926 6.63125 2.00001 6.89012 2.00001 7.17308V9.25C2.00001 9.66421 2.33579 10 2.75001 10H4.00001V16.5H3.75001C3.42718 16.5 3.14058 16.7066 3.03849 17.0128L2.03849 20.0128C1.96226 20.2415 2.00061 20.493 2.14157 20.6885C2.28254 20.8841 2.50892 21 2.75001 21H21.25C21.4911 21 21.7175 20.8841 21.8584 20.6885C21.9994 20.493 22.0378 20.2415 21.9615 20.0128L20.9615 17.0128C20.8594 16.7066 20.5728 16.5 20.25 16.5H20V10H21.25C21.6642 10 22 9.66421 22 9.25V7.17308C22 6.89012 21.8408 6.63125 21.5882 6.50365L12.3382 1.83058ZM16 10H18.5V16.5H16V10ZM8.00001 16.5H5.50001V10H8.00001V16.5ZM9.50001 16.5V10H14.5V16.5H9.50001Z" fill="currentColor"/>';ft._name="bank";ft._width=24;ft._height=24;ft._viewBox="0 0 24 24";ft=o([$("gds-icon-bank")],ft);ft.define();const Bh=D`
  :host {
    display: block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  img {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;var Fh=Bh;let Ue=class extends Bn(we(Rn(R))){render(){return w`<img src="${this.src}" alt="${this.alt}" />`}};Ue.styles=[Y,Fh];o([m()],Ue.prototype,"aspect-ratio",2);o([m({property:"border-radius",valueTemplate:e=>`var(--gds-sys-space-${e})`})],Ue.prototype,"border-radius",2);o([m({selector:"img"})],Ue.prototype,"object-fit",2);o([m({selector:"img"})],Ue.prototype,"object-position",2);o([d()],Ue.prototype,"src",2);o([d()],Ue.prototype,"alt",2);Ue=o([$("gds-img")],Ue);Ue.define();let Ze=class extends ee{};Ze._regularSVG='<path d="M4.75 4.75L19.25 19.25M19.25 4.75L4.75 19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';Ze._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.11612 4.11612C4.60427 3.62796 5.39573 3.62796 5.88388 4.11612L12 10.2322L18.1161 4.11612C18.6043 3.62796 19.3957 3.62796 19.8839 4.11612C20.372 4.60427 20.372 5.39573 19.8839 5.88388L13.7678 12L19.8839 18.1161C20.372 18.6043 20.372 19.3957 19.8839 19.8839C19.3957 20.372 18.6043 20.372 18.1161 19.8839L12 13.7678L5.88388 19.8839C5.39573 20.372 4.60427 20.372 4.11612 19.8839C3.62796 19.3957 3.62796 18.6043 4.11612 18.1161L10.2322 12L4.11612 5.88388C3.62796 5.39573 3.62796 4.60427 4.11612 4.11612Z" fill="currentColor"/>';Ze._name="cross-large";Ze._width=24;Ze._height=24;Ze._viewBox="0 0 24 24";Ze=o([$("gds-icon-cross-large")],Ze);const Ih=D``;var zi,bl,br,mr,Di,vr,Li,ml,xr,vl,wr,xl,_r,wl,kr,_l,Wi,kl;let J=class extends fe{constructor(){super(),c(this,zi),c(this,Li),c(this,xr),c(this,wr),c(this,_r),c(this,kr),c(this,Wi),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autofocus=!1,this.spellcheck=!0,c(this,br,e=>{const t=e.target;this.value=t.value}),c(this,mr,e=>{const t=e.target;this.value=t.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),c(this,Di,()=>{this.elInputAsync.then(e=>e.focus())}),c(this,vr,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}focus(e){this._getValidityAnchor()?.focus(e)}render(){return w`
      ${H(!this.plain,()=>w`<gds-form-control-header class="size-${this.size}">
            <label for="input" slot="label">${this.label}</label>
            <span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>
            <slot
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
          </gds-form-control-header>`)}
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${a(this,Di)}
        id="field"
      >
        ${x(this,Li,ml).call(this)}
      </gds-field-base>
      ${H(x(this,zi,bl).call(this),()=>w` <gds-form-control-footer
            class="size-${this.size}"
            .charCounter=${a(this,Wi,kl)?this.maxlength-(this.value?.length||0):void 0}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_getValidityAnchor(){return this.elInput}};zi=new WeakSet;bl=function(){return!this.plain};br=new WeakMap;mr=new WeakMap;Di=new WeakMap;vr=new WeakMap;Li=new WeakSet;ml=function(){return[x(this,xr,vl).call(this),x(this,_r,wl).call(this),x(this,kr,_l).call(this),x(this,wr,xl).call(this)].map(t=>w`${t}`)};xr=new WeakSet;vl=function(){return w` <slot slot="lead" name="lead"></slot> `};wr=new WeakSet;xl=function(){return w`<slot slot="trail" name="trail"></slot>`};_r=new WeakSet;wl=function(){return w`
      <input
        class="native-control"
        @input=${a(this,br)}
        @change=${a(this,mr)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-label=${this.plain&&this.label||pe}
        placeholder=" "
        type=${this.type}
        min=${N(this.min)}
        max=${N(this.max)}
        step=${N(this.step)}
        autocapitalize=${N(this.autocapitalize)}
        autocomplete=${N(this.autocomplete)}
        autocorrect=${N(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${N(this.enterkeyhint)}
        inputmode=${N(this.inputmode)}
        ?required=${this.required}
      />
    `};kr=new WeakSet;_l=function(){return this.clearable&&(this.value?.length||0)>0?w`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${A("Clear input")}"
        @click=${a(this,vr)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-large />
      </gds-button>`:pe};Wi=new WeakSet;kl=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};J.styles=[Y,jn,Ih];o([d({attribute:"supporting-text"})],J.prototype,"supportingText",2);o([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],J.prototype,"showExtendedSupportingText",2);o([d({type:Boolean})],J.prototype,"clearable",2);o([d({type:Number})],J.prototype,"maxlength",2);o([d({type:String})],J.prototype,"size",2);o([d({type:Boolean})],J.prototype,"plain",2);o([d({reflect:!0})],J.prototype,"type",2);o([d()],J.prototype,"min",2);o([d()],J.prototype,"max",2);o([d()],J.prototype,"step",2);o([d()],J.prototype,"autocapitalize",2);o([d()],J.prototype,"autocorrect",2);o([d()],J.prototype,"autocomplete",2);o([d({type:Boolean})],J.prototype,"autofocus",2);o([d()],J.prototype,"enterkeyhint",2);o([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],J.prototype,"spellcheck",2);o([d()],J.prototype,"inputmode",2);o([zt("input")],J.prototype,"elInputAsync",2);o([Q("input")],J.prototype,"elInput",2);J=o([Re()],J);let Oi=class extends we($e(_e(J))){};Oi=o([$("gds-input",{dependsOn:[ct,lt,ye,rt,Ne,Ze]})],Oi);Oi.define();const Ph=D`
  @layer core, link;

  @layer core {
    :host {
      display: inline-block;
      white-space: normal;
    }
  }

  @layer link {
    a {
      display: flex;
      align-items: center;
      gap: 1ch;
      text-decoration: none;
      text-underline-offset: 0.2lh;
      color: currentColor;
      outline-offset: 4px;
      outline-color: currentColor;
      font-weight: var(--gds-sys-text-weight-book);
      transition: all 0.2s ease-in-out;

      &:hover {
        text-decoration: underline;
        text-underline-offset: 0.16lh;

        &:active {
          text-underline-offset: 0.08lh;
        }
      }
    }
  }
`;var Nh=Ph,Vi,Cl;let Oe=class extends $e(we(_e(R))){constructor(){super(...arguments),c(this,Vi),this.href="",this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return us`
      <a
        href=${N(this.href)}
        target=${N(this.target)}
        rel=${N(this.rel||a(this,Vi,Cl))}
        download=${N(this.download)}
        aria-label=${this.label||pe}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};Vi=new WeakSet;Cl=function(){return this.target==="_blank"?"noreferrer noopener":void 0};Oe.styles=[Y,ne(Nh)];Oe.shadowRootOptions={mode:"open",delegatesFocus:!0};o([d()],Oe.prototype,"href",2);o([d()],Oe.prototype,"target",2);o([d()],Oe.prototype,"rel",2);o([d()],Oe.prototype,"label",2);o([d()],Oe.prototype,"download",2);o([m({valueTemplate:e=>e,selector:"a"})],Oe.prototype,"text-decoration",2);Oe=o([$("gds-link")],Oe);Oe.define();const Hh=D`
  :host {
    isolation: isolate;
  }

  [part='mask'] {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
  }

  [part='content'] {
    z-index: 1;
    position: absolute;
    inset: 0;
  }
`;var Gh=Hh;let Qe=class extends rt{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.inset="0"}render(){return us`<div part="mask"></div>
      <div part="content"><slot></slot></div>`}};Qe.styles=[Y,Gh];o([m({selector:'[part="mask"]',valueTemplate:e=>{const[t]=e.split("/");return`linear-gradient(to ${t}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`}})],Qe.prototype,"mask-image",2);o([m({valueTemplate:e=>e,selector:'[part="mask"]'})],Qe.prototype,"mask-size",2);o([m({valueTemplate:e=>e,selector:'[part="mask"]'})],Qe.prototype,"mask-repeat",2);o([m({valueTemplate:e=>e,selector:'[part="mask"]'})],Qe.prototype,"mask-position",2);o([m({selector:'[part="mask"]',valueTemplate:function(e){const[t,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-background-${t}) ${parseFloat(s)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-background-${t})`}})],Qe.prototype,"background-color",2);o([m({valueTemplate:e=>e,selector:'[part="mask"]'})],Qe.prototype,"backdrop-filter",2);Qe=o([$("gds-mask")],Qe);Qe.define();const Yh=D`
  @layer tokens, core, a11y, disabled, variants, sizes, sets;

  @layer tokens {
    :host {
      --_gap: var(--gds-sys-space-xs);

      --_padding-inline: var(--gds-sys-space-m);
      --_padding-block: var(--gds-sys-space-xs);

      --_color-bg: transparent;
      --_color-text: var(--gds-sys-color-l3-content-tertiary);
      --_color-border: transparent;

      --_font-size: 1rem;
      --_font-weight: 400;
      --_line-height: 1.25;

      display: inline-block;
      isolation: isolate;
      max-width: 100%;
      height: 100%;
    }
  }

  @layer core {
    .button {
      align-items: center;

      background-color: var(--_color-bg);

      border-color: var(--_color-border);
      border-style: none;
      border-bottom-style: solid;
      border-bottom-width: 2px;

      box-sizing: border-box;
      color: var(--_color-text);
      color-scheme: dark light;
      cursor: pointer;

      display: inline-flex;
      gap: var(--_gap);
      height: 100%;

      inline-size: 100%;
      justify-content: space-between;
      justify-items: center;
      outline-color: transparent;
      outline-offset: -2px;
      outline-style: solid;
      outline-width: 2px;
      padding-block: var(--_padding-block);
      padding-inline: var(--_padding-inline);
      position: relative;
      font-family: inherit;
      font-size: var(--_font-size);
      font-weight: var(--_font-weight);
      line-height: var(--_line-height);
      transition-property: color, border-color;
      transition: all 0.4s;

      &:focus-visible {
        outline-color: currentColor;
        border-radius: 6px;
        overflow: visible;
        border-color: transparent;
      }

      &:hover,
      &.selected:hover,
      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-l3-states-light-hover)
        );
        --_color-border: var(--gds-sys-color-l3-border-secondary);
      }

      &.selected {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-l3-states-light-hover)
        );
        --_color-border: var(--gds-sys-color-l3-border-primary);
      }

      slot:not([name]) {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .compact {
      display: flex;
      flex-direction: column;
      --_padding-inline: var(--gds-sys-space-s);
      --_gap: 1px;
      font-size: 0.875rem;
      height: 56px;
      justify-content: center;

      & > slot[name] {
        order: 0;
      }
      & > slot:not([name]) {
        order: 1;
      }
    }

    a {
      text-decoration: none;
    }
  }

  :disabled {
    border-color: var(--_color-bg);
    color: var(--gds-sys-color-l3-content-disabled);
    pointer-events: none;
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .button {
        transition: none;
      }
    }
  }
`;var jh=Yh,Ft,ns,Ri,$l;let xe=class extends we(_e(R)){constructor(){super(),c(this,Ft),c(this,Ri),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const e={button:!0,selected:this.selected,compact:this.compact},t=a(this,Ft,ns)?wn`a`:wn`button`;return us`
      <${t}
        class="${Ve(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${N(a(this,Ft,ns)?this.href:void 0)}
        target=${N(a(this,Ft,ns)?this.target:void 0)}
        rel=${N(a(this,Ft,ns)?this.rel||a(this,Ri,$l):void 0)}
        download=${N(a(this,Ft,ns)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${t}>
    `}};Ft=new WeakSet;ns=function(){return this.href.length>0};Ri=new WeakSet;$l=function(){return this.target==="_blank"?"noreferrer noopener":void 0};xe.styles=[Y,ne(jh)];xe.shadowRootOptions={mode:"open",delegatesFocus:!0};o([d({type:Boolean,reflect:!0})],xe.prototype,"disabled",2);o([d()],xe.prototype,"label",2);o([d()],xe.prototype,"href",2);o([d()],xe.prototype,"target",2);o([d()],xe.prototype,"rel",2);o([d()],xe.prototype,"download",2);o([d({type:Boolean,reflect:!0})],xe.prototype,"compact",2);o([d({type:Boolean,reflect:!0})],xe.prototype,"selected",2);xe=o([$("gds-menu-button")],xe);xe.define();O.define();let Os=class extends R{constructor(){super(...arguments),this.show=!1}render(){return w``}};Os.styles=D`
    :host {
      display: none;
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 100%;
    }

    :host([show]) {
      display: block;
    }
  `;o([d({type:Boolean,reflect:!0})],Os.prototype,"show",2);Os=o([$("gds-backdrop")],Os);Os.define();const Sl=D`
  @layer defaults {
    a:link {
      color: currentColor;
      text-underline-offset: 0.1lh;
      font-weight: var(--gds-sys-text-weight-book);
    }

    a:visited {
      color: currentColor;
    }

    h1 {
      font-size: var(--gds-sys-text-size-heading-xl);
      line-height: var(--gds-sys-text-line-height-heading-xl);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h2 {
      font-size: var(--gds-sys-text-size-heading-l);
      line-height: var(--gds-sys-text-line-height-heading-l);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h3 {
      font-size: var(--gds-sys-text-size-heading-m);
      line-height: var(--gds-sys-text-line-height-heading-m);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h4 {
      font-size: var(--gds-sys-text-size-heading-s);
      line-height: var(--gds-sys-text-line-height-heading-s);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h5 {
      font-size: var(--gds-sys-text-size-heading-xs);
      line-height: var(--gds-sys-text-line-height-heading-xs);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h6 {
      font-size: var(--gds-sys-text-size-heading-2xs);
      line-height: var(--gds-sys-text-line-height-heading-2xs);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    p,
    li {
      font-size: var(--gds-sys-text-size-body-m);
      line-height: var(--gds-sys-text-line-height-body-m);
    }

    strong {
      font-weight: var(--gds-sys-text-weight-medium);
    }
  }
`,qh=D`
  :host {
    font-size: var(--gds-sys-text-size-body-m);
    line-height: var(--gds-sys-text-line-height-body-m);
    --default-border: 1px solid
      color-mix(in srgb, currentColor, transparent 80%);
    letter-spacing: 0.0125rem;
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: var(--gds-sys-space-2xl);
    margin-bottom: var(--gds-sys-space-xs);
  }

  :is(h1, h2, h3, h4, h5, h6):first-child {
    margin-top: unset;
  }

  h1 + h2 {
    margin-top: 0;
  }

  h2 + h3 {
    margin-top: 0;
  }

  h3 + h4 {
    margin-top: 0;
  }

  h4 + h5 {
    margin-top: 0;
  }

  h4 + h5 {
    margin-top: 0;
  }

  h5 + h6 {
    margin-top: 0;
  }

  p {
    margin: 0;
    margin-bottom: var(--gds-sys-space-xs);
    max-width: 80ch;
  }

  blockquote {
    margin: unset;
    margin-block: 2lh;
    border-left: 0.2rem solid currentColor;
    padding-left: 2ch;
    max-width: 40ch;
  }

  hr {
    border: none;
    border-top: var(--default-border);
    margin: var(--gds-sys-space-xl) 0;
  }

  s {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-underline-offset: -0.22lh;
  }

  mark {
    color: currentColor;
    background-color: color-mix(in srgb, currentColor, transparent 80%);
  }

  /*
  * lists
  * -----------------------------------------------------------
  */
  ul,
  ol {
    padding-inline-start: 2ch;
    margin: unset;
    margin-bottom: 1lh;
    max-width: 80ch;
  }

  ol {
    list-style-type: none;
    counter-reset: ordered-list;
    margin: unset;
    padding: unset;
  }

  ol li {
    padding-left: 3.6ch;
    position: relative;
  }

  ol li:before {
    counter-increment: ordered-list;
    content: counter(ordered-list) '.';
    left: 0.2rem;
    position: absolute;
  }

  ol:not(:has(li:nth-child(10))) li {
    padding-left: 2.4ch;
  }

  ol:has(li:nth-child(10)) li:nth-child(-n + 9):before {
    left: 1.4ch;
  }

  li {
    padding: 0 0 0.3lh 0;
  }

  ul li:last-child {
    padding: 0;
  }

  ul li::marker {
    content: '– ';
  }

  /*
  * figure and image
  * -----------------------------------------------------------
  */
  img {
    display: block;
    border-radius: var(--gds-sys-space-xs);
  }

  figure {
    margin: 0;
    padding: 0;
    margin-top: var(--gds-sys-space-xl);
  }

  figcaption {
    font-size: smaller;
    margin-block-start: var(--gds-sys-space-xs);
  }

  /*
  * table
  * -----------------------------------------------------------
  */
  table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    border: var(--default-border);
    border-radius: var(--gds-sys-space-s);
    margin-top: var(--gds-sys-space-xl);
  }

  th {
    font-weight: var(--gds-sys-text-weight-book);
    text-align: left;
    border-bottom: var(--default-border);
    border-left: transparent;
    border-right: transparent;
    color: currentColor;
  }

  th:not(:last-child) {
    border-right: var(--default-border);
  }

  th,
  td {
    padding: 0.3lh 2ch;
  }
  td:not(:last-child) {
    border-right: var(--default-border);
  }
  tr:nth-child(even) td {
    background: color-mix(in srgb, currentColor, transparent 95%);
  }

  /*
  * Details
  * -----------------------------------------------------------
  */
  details {
    border-top: solid var(--gds-sys-space-4xs)
      color-mix(in srgb, currentColor, transparent 90%);
    font-size: var(--gds-sys-text-size-body-m);
    line-height: var(--gds-sys-text-line-height-body-m);
  }

  summary {
    font-weight: var(--gds-sys-text-weight-regular);
    list-style: none;
    padding: 0.4lh 0.2ch;
    font-size: var(--gds-sys-text-size-body-l);
    line-height: var(--gds-sys-text-line-height-body-l);
    color: currentColor;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
    outline-offset: var(--gds-sys-space-2xs);
    outline-color: currentColor;
    padding-inline: var(--gds-sys-space-m);
  }

  details summary::-webkit-details-marker {
    display: none;
  }

  summary:focus-visible {
    border-radius: var(--gds-sys-space-2xs);
  }

  details:hover summary {
    background: color-mix(in srgb, currentColor, transparent 95%);
  }

  summary::after {
    content: '+';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    font-weight: var(--gds-sys-text-weight-regular);
    font-size: var(--gds-sys-text-size-body-l);
  }

  details[open] summary::after {
    content: '-';
  }

  details[open] {
    border-bottom: var(--gds-sys-space-4xs) solid
      color-mix(in srgb, currentColor, transparent 95%);
    padding-bottom: 0.4lh;
    background: color-mix(in srgb, currentColor, transparent 95%);
  }

  details[open] > *:not(summary) {
    margin-left: var(--gds-sys-space-m);
  }

  details[open] summary {
    margin-bottom: 0.4lh;
  }

  details[open] + details {
    border: none;
  }

  details:last-of-type {
    border-bottom: var(--gds-sys-space-4xs) solid
      color-mix(in srgb, currentColor, transparent 90%);
    margin-bottom: var(--gds-sys-space-xl);
  }

  a {
    color: currentColor;
    text-decoration-color: currentColor;
  }

  /*
  * Iframe
  */
  iframe {
    border: var(--gds-sys-space-4xs) solid
      var(--gds-sys-color-l2-border-primary);
    border-radius: var(--gds-sys-space-xs);
    min-width: 100%;
    margin-bottom: var(--gds-sys-space-l);
  }
`;let cs=class extends _e($e(R)){constructor(){super(...arguments),this.captureMode="clone"}querySelectorAll(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):new NodeList}querySelector(e){return this.shadowRoot?this.shadowRoot.querySelector(e):null}get innerHTML(){return this.shadowRoot?.innerHTML||""}set innerHTML(e){this.shadowRoot&&(this.shadowRoot.innerHTML=e)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){if(!this.shadowRoot||this.childNodes.length===0)return;if(this.captureMode==="move"){this.shadowRoot.replaceChildren(...Array.from(this.childNodes));return}const e=Array.from(this.childNodes).map(t=>t.cloneNode(!0));this.shadowRoot.replaceChildren(...e)}};cs.styles=[Y,Sl,qh];o([d()],cs.prototype,"captureMode",2);o([tr({childList:!0,subtree:!0,attributes:!0,characterData:!0})],cs.prototype,"_captureDOM",1);cs=o([$("gds-rich-text")],cs);cs.define();const Uh=`@layer base {
  :host {
    display: flex;
    z-index: 1;
  }

  button {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    background: transparent;
    border-radius: var(--gds-sys-space-max);
    border-width: 0;
    color: var(--gds-sys-color-l3-content-tertiary);
    cursor: pointer;
    flex-grow: 1;
    flex-shrink: 0;
    font-family: inherit;
    font-size: inherit;
    overflow: hidden;
    padding: 0 1rem;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    transition:
      background-color 0.2s,
      border-color 0.2s,
      color 0.2s,
      outline-color 422ms;

    outline-width: var(--gds-size-3xs);
    outline-style: solid;
    outline-offset: -2px;
    outline-color: transparent;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  @media (pointer: fine) {
    :host(:not([selected])) button:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l3-states-light-hover),
        transparent
      );

      &:disabled {
        background-color: transparent;
      }
    }
  }

  button:focus-visible {
    outline-color: color-mix(
      in srgb,
      transparent,
      var(--gds-sys-color-l3-content-tertiary) 100%
    );
  }
}
`;let Tt=class extends we(R){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),ge.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return w`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};Tt.styles=[...Y,ne(Uh)];o([d({type:Boolean,reflect:!0})],Tt.prototype,"selected",2);o([d()],Tt.prototype,"value",2);o([d({type:Boolean,reflect:!0})],Tt.prototype,"disabled",2);Tt=o([$("gds-segment")],Tt);const Zh=`@layer base {
  :host {
    background-color: var(--gds-sys-color-l3-background-secondary);
    border: 0.25rem solid transparent;
    border-radius: var(--gds-sys-space-max);
    box-sizing: border-box;
    contain: layout;
    display: inline-flex;
    height: 3rem;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  :host([size='small']) {
    height: 2.5rem;
  }

  #track {
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    scroll-snap-type: inline mandatory;
    overscroll-behavior-x: contain;
    scroll-behavior: smooth;
    overflow-x: scroll;
    gap: 0.25rem;
    position: relative;
    scrollbar-width: none;
  }

  #track::-webkit-scrollbar {
    display: none;
  }

  #btn-prev,
  #btn-next {
    box-sizing: border-box;
    align-items: center;
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    aspect-ratio: 1;
    border-radius: var(--gds-sys-space-max);
    border-width: 0;
    background-color: var(--gds-sys-color-l3-background-secondary);
    color: var(--gds-sys-color-l3-content-tertiary);
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    height: 100%;
    justify-content: center;
    width: 2.5rem;
    transition: 0.2s;
    z-index: 2;
    position: absolute;

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-background-secondary),
          var(--gds-sys-color-l3-states-light-hover)
        );
      }
    }
  }
  #btn-prev {
    margin: 0 0.25rem 0 0;
  }
  #btn-next {
    margin: 0 0 0 0.25rem;
    right: 0;
  }

  #btn-prev[aria-hidden='true'],
  #btn-next[aria-hidden='true'] {
    opacity: 0;
    width: 0;
    margin: 0;
    padding: 0;
  }

  :host([size='small']) #btn-prev,
  :host([size='small']) #btn-next {
    width: 2rem;
  }

  ::slotted(*) {
    flex-grow: 1;
    flex-shrink: 0;
    z-index: 1;
    scroll-margin: 0 2.75rem;
    scroll-snap-align: start;
  }

  #indicator {
    background-color: var(--gds-sys-color-l3-background-quarternary);
    border-radius: var(--gds-sys-space-max);
    height: 100%;
    left: 0;
    position: absolute;
    z-index: 0;
    transition:
      transform 0.2s,
      width 0.2s;
    z-index: 0;
  }
}
`;var St,Bi,Ml,Fi,Ii,Pi,As,fn,Ni,Hi;const Qh=(e,t)=>{let s;return()=>{clearTimeout(s),s=setTimeout(e,t)}};let Ce=class extends _e(we($e(R))){constructor(){super(...arguments),c(this,Bi),this.size="medium",c(this,St,void 0),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,c(this,Fi,()=>{const e=this.segments.filter((t,s,n)=>n[s+1]?.isVisible&&!t.isVisible)[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),c(this,Ii,()=>{const e=this.segments.filter((t,s,n)=>n[s-1]?.isVisible&&!t.isVisible).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),c(this,Pi,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),c(this,As,Qh(a(this,Pi),50)),c(this,fn,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,s=e.offsetLeft;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),c(this,Ni,e=>{const t=this.segments.find(s=>s===e.target||s.contains(e.target));t&&(this.segments.forEach(s=>s.selected=!1),t.selected=!0,G(this,St,t.value),a(this,fn).call(this),this.dispatchCustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0}))}),c(this,Hi,()=>{a(this,St)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===a(this,St));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return a(this,St)}set value(e){G(this,St,e),a(this,Hi).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),ge.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{a(this,As).call(this)})})}render(){return w`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${a(this,Fi)}
        aria-label=${A("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${a(this,Ni)}
          @slotchange=${x(this,Bi,Ml)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${a(this,Ii)}
        aria-label=${A("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{a(this,As).call(this),a(this,fn).call(this)})}};St=new WeakMap;Bi=new WeakSet;Ml=function(){const e=this.segments.find(t=>t.selected)?.value;e&&G(this,St,e),this.intersectionObserver?.disconnect(),this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(s=>{const n=s.target;n._isVisible=s.intersectionRatio>.99,a(this,As).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(t=>{this.intersectionObserver?.observe(t)})};Fi=new WeakMap;Ii=new WeakMap;Pi=new WeakMap;As=new WeakMap;fn=new WeakMap;Ni=new WeakMap;Hi=new WeakMap;Ce.styles=[Y,ne(Zh)];o([d({reflect:!0})],Ce.prototype,"size",2);o([d()],Ce.prototype,"value",1);o([Q("slot")],Ce.prototype,"_elSlot",2);o([Q("#indicator")],Ce.prototype,"_elIndicator",2);o([Q("#track")],Ce.prototype,"_elTrack",2);o([de()],Ce.prototype,"_showPrevButton",2);o([de()],Ce.prototype,"_showNextButton",2);o([yr(),U("value")],Ce.prototype,"_recalculateMinWidth",1);Ce=o([$("gds-segmented-control",{dependsOn:[Tt,je,qe]}),Re()],Ce);Ce.define();Tt.define();const Xh=D`
  :host {
    display: inline-block;
  }

  [part='signal'] {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 6px;
    height: 6px;
    border-radius: var(--gds-sys-space-max);
    background-color: currentColor;
    transition: all 0.4s;

    &::before {
      display: flex;
      position: absolute;
      content: '';
      inset: -4px;
      border-radius: inherit;
      background-color: color-mix(in srgb, currentColor, transparent 80%);
      animation: signal 3s ease-in-out infinite;
    }
  }

  @keyframes signal {
    0% {
      transform: scale(2);
      opacity: 0;
    }
    60% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }
`;var Jh=Xh;let Vs=class extends R{render(){return us`<div part="signal"></div>`}};Vs.styles=[Y,Jh];o([m({valueTemplate:e=>`var(--gds-color-${e})`,selector:'[part="signal"]'})],Vs.prototype,"color",2);Vs=o([$("gds-signal")],Vs);Vs.define();let Rs=class extends R{render(){return w``}};Rs.styles=[Y];o([m({property:"height",valueTemplate:e=>`var(--gds-sys-space-${e})`})],Rs.prototype,"size",2);Rs=o([$("gds-spacer")],Rs);Rs.define();const Kh=D`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var eu=Kh;let Xe=class extends W{constructor(){super(...arguments),this.tag="span"}render(){const e=$d(encodeURI(this.tag));return us`<${e} tag><slot></slot></${e}>`}};Xe.styles=[Y,Sl,eu];o([d({type:String})],Xe.prototype,"tag",2);o([m({selector:"[tag]",styleTemplate:(e,t)=>{const s=t[0],n=`font-size: var(--gds-sys-text-size-${s});`,i=`line-height: var(--gds-sys-text-line-height-${s});`;return n+i}})],Xe.prototype,"font-size",2);o([m({selector:"[tag]",valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],Xe.prototype,"font-weight",2);o([m()],Xe.prototype,"text-transform",2);o([m({selector:"[tag]"})],Xe.prototype,"text-decoration",2);o([m({selector:"[tag]",styleTemplate:(e,t)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${t[0]};
      -webkit-box-orient: vertical;`})],Xe.prototype,"lines",2);Xe=o([$("gds-text")],Xe);Xe.define();const tu=D`
  textarea {
    height: calc(1lh * var(--_lines));
    min-height: calc(1lh * 4);
    max-height: calc(1lh * 20);
    overflow: auto;
    min-width: 20ch;
    padding-inline-end: calc(
      var(--gds-sys-space-xs) + var(--padding-inline-end)
    );

    &.resize-manual {
      resize: vertical;
    }

    &.resize-auto {
      resize: none;
    }

    &.resize-false {
      resize: none;
    }
  }
`;var Gi,El,Cr,$r,Sr,Yi,Mr,ji,Tl,Er,Al,Tr,zl,Ar,Dl,zr,Ll,qi,Wl;let q=class extends fe{constructor(){super(),c(this,Gi),c(this,ji),c(this,Er),c(this,Tr),c(this,Ar),c(this,zr),c(this,qi),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.showExtendedSupportingText=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.autocapitalize="off",this.autofocus=!1,this.spellcheck=!0,this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},c(this,Cr,e=>{const t=e.target;this.value=t.value}),c(this,$r,e=>{const t=e.target;this.value=t.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),c(this,Sr,e=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),c(this,Yi,()=>{this.elTextareaAsync.then(e=>e.focus())}),c(this,Mr,()=>{this.value="",this.elTextareaAsync.then(e=>{if(this.resizable==="manual")e.style.height="";else if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString()),e.style.height=""}}),this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}focus(e){this._getValidityAnchor()?.focus(e)}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{const e=this.fieldBase?.shadowRoot;if(!e)return;const t=e.querySelector(".right");if(t){const s=t.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${s.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return w`
      ${H(!this.plain,()=>w`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label for="input" slot="label">${this.label}</label>
            <span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>
            <slot
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
          </gds-form-control-header>`)}

      <gds-field-base
        id="field"
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${a(this,Yi)}
        multiline
      >
        ${x(this,ji,Tl).call(this)}
      </gds-field-base>

      ${H(x(this,Gi,El).call(this),()=>w`<gds-form-control-footer
            id="footer"
            class="size-${this.size}"
            .charCounter=${a(this,qi,Wl)?this.maxlength-(this.value?.length||0):void 0}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(e.value===""){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=getComputedStyle(e),s=parseFloat(t.lineHeight),n=e.scrollHeight,i=Math.ceil(n/s),r=this._initialRows??this._defaultRows;this.rows=Math.max(r,i),e.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(e=>{this.resizable==="false"&&e.style.setProperty("--_lines",this.rows.toString())})}};Gi=new WeakSet;El=function(){return!this.plain};Cr=new WeakMap;$r=new WeakMap;Sr=new WeakMap;Yi=new WeakMap;Mr=new WeakMap;ji=new WeakSet;Tl=function(){return[x(this,Er,Al).call(this),x(this,Ar,Dl).call(this),x(this,zr,Ll).call(this),x(this,Tr,zl).call(this)].map(t=>w`${t}`)};Er=new WeakSet;Al=function(){return w`<slot slot="lead" name="lead"></slot>`};Tr=new WeakSet;zl=function(){return w`<slot slot="trail" name="trail"></slot>`};Ar=new WeakSet;Dl=function(){return w`
      <textarea
        @input=${a(this,Cr)}
        @change=${a(this,$r)}
        @paste=${a(this,Sr)}
        .value=${this.value}
        id="input"
        class="native-control resize-${this.resizable}"
        aria-label=${this.plain&&this.label||pe}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-errormessage="footer"
        placeholder=" "
        autocapitalize=${N(this.autocapitalize)}
        autocomplete=${N(this.autocomplete)}
        autocorrect=${N(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${N(this.enterkeyhint)}
        inputmode=${N(this.inputmode)}
        wrap=${N(this.wrap)}
        ?required=${this.required}
      ></textarea>
    `};zr=new WeakSet;Ll=function(){return this.clearable&&(this.value?.length||0)>0?w`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${A("Clear input")}"
          @click=${a(this,Mr)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:pe};qi=new WeakSet;Wl=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};q.styles=[Y,jn,tu];o([m({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],q.prototype,"rows",2);o([d({attribute:"supporting-text"})],q.prototype,"supportingText",2);o([d({type:Boolean})],q.prototype,"clearable",2);o([d({type:String})],q.prototype,"resizable",2);o([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],q.prototype,"showExtendedSupportingText",2);o([d({type:Number})],q.prototype,"maxlength",2);o([d({type:String})],q.prototype,"size",2);o([d({type:Boolean})],q.prototype,"plain",2);o([d()],q.prototype,"autocapitalize",2);o([d()],q.prototype,"autocorrect",2);o([d()],q.prototype,"autocomplete",2);o([d({type:Boolean})],q.prototype,"autofocus",2);o([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],q.prototype,"spellcheck",2);o([d()],q.prototype,"wrap",2);o([d()],q.prototype,"enterkeyhint",2);o([d()],q.prototype,"inputmode",2);o([zt("textarea")],q.prototype,"elTextareaAsync",2);o([Q("textarea")],q.prototype,"elTextarea",2);o([Q("gds-field-base")],q.prototype,"fieldBase",2);o([yr()],q.prototype,"_handleResize",1);o([U("value")],q.prototype,"_setAutoHeight",1);o([U("rows")],q.prototype,"_handleRowsChange",1);q=o([Re()],q);let Ui=class extends _e(we($e(q))){};Ui=o([$("gds-textarea",{dependsOn:[ct,lt,Ne,ye,Ze]})],Ui);Ui.define();let At=class extends R{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2016"}connectedCallback(){super.connectedCallback(),ge.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",ne(`:host {${io}}`))}render(){return w`<slot></slot>`}_onColorSchemeChange(){this.colorScheme==="dark"?this._dynamicStylesController.inject("color-scheme",ne(`:host { ${io}}`)):this._dynamicStylesController.inject("color-scheme",ne(`:host { ${aa}}`)),this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};At.styles=[Y,D`
      :host {
        display: contents;
      }
    `];o([d({reflect:!0,attribute:"color-scheme"})],At.prototype,"colorScheme",2);o([d({reflect:!0,attribute:"design-version"})],At.prototype,"designVersion",2);o([U("colorScheme")],At.prototype,"_onColorSchemeChange",1);o([U("designVersion")],At.prototype,"_onDesignVersionChange",1);At=o([$("gds-theme")],At);At.define();const su=D`
  :host {
    display: block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  video {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;var nu=su;let le=class extends we(Rn($e(_e(Bn(R))))){applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return w`<video></video>`}firstUpdated(){this.applyVideoSettings()}};le.styles=[Y,nu];o([m()],le.prototype,"aspect-ratio",2);o([m({selector:"video"})],le.prototype,"object-position",2);o([m()],le.prototype,"opacity",2);o([m({selector:"video"})],le.prototype,"object-fit",2);o([m({selector:"video"})],le.prototype,"pointer-events",2);o([m({valueTemplate:e=>`var(--gds-sys-space-${e})`})],le.prototype,"border-radius",2);o([d()],le.prototype,"src",2);o([d()],le.prototype,"poster",2);o([d({type:Boolean})],le.prototype,"muted",2);o([d({type:Boolean})],le.prototype,"playsinline",2);o([d({type:Boolean})],le.prototype,"autoplay",2);o([d({type:Boolean})],le.prototype,"loop",2);o([Q("video")],le.prototype,"videoElement",2);le=o([$("gds-video")],le);le.define();var ou=Object.getOwnPropertyDescriptor,iu=(e,t,s,n)=>{for(var i=n>1?void 0:n?ou(t,s):t,r=e.length-1,l;r>=0;r--)(l=e[r])&&(i=l(i)||i);return i};let sa=class extends na{createRenderRoot(){return this}render(){return w`<gds-flex flex-direction="column" gap="xl" max-width="800px">
      <gds-badge>Badge</gds-badge>

      <gds-button>Button</gds-button>

      <gds-calendar .value=${new Date("2024-01-01")}></gds-calendar>

      <gds-card>Card</gds-card>

      <gds-container>Container</gds-container>

      <gds-context-menu>
        <gds-menu-item>Action 1</gds-menu-item>
        <gds-menu-item>Action 2</gds-menu-item>
      </gds-context-menu>

      <gds-datepicker></gds-datepicker>

      <gds-dialog>
        <gds-button slot="trigger">Open Dialog</gds-button>
        Dialog content
      </gds-dialog>

      <gds-divider></gds-divider>

      <gds-dropdown>
        <gds-option value="1701-D-1">Enterprise 1701-D</gds-option>
        <gds-option value="falcon-1">Millenium Falcon</gds-option>
      </gds-dropdown>

      <gds-fab inset="auto 40px 40px auto">Fab</gds-fab>

      <gds-filter-chips>
        <gds-filter-chip value="1">Item 1</gds-filter-chip>
        <gds-filter-chip value="2">Item 2</gds-filter-chip>
      </gds-filter-chips>

      <gds-grid>Grid</gds-grid>

      <gds-grouped-list>
        <gds-list-item>Item 1</gds-list-item>
        <gds-list-item>Item 2</gds-list-item>
      </gds-grouped-list>

      <gds-icon-bank></gds-icon-bank>

      <gds-img
        width="100px"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAC4BJREFUeF7tnVdoFd0Wx9dREx9MYgtqBPUpJ6IiXhQRCygoVgRBFAVRFBEbWLDliuXBR1EMYsGCPSoIotgbYsUginzBxJbod5PojcGbBEuuei5rJ3PKtL12mznhOiCYzNqr/H9r7z1zyiRSUlISy83NhczMTPhzhKdAU1MT1NbWQqSioiKG/4lGo5CdnR1eRpzIMQCI+NlwDQyV5ohr/wU/sYaGBigvLwecGJGqqqpYVlYW+0UKFL4fQxWG7TbYwi0YqH1jY2MzkLy8PEg+kc4zJWxcOuPbNa+urk4AwUDqUDjdFWzzCWgXfGJuWjuA6IEioMP/qalX47sC+QPFbJckw8jKzk65UPEEogpFeQFQdqAoqlJ878G8LcEXiCoURUkAQEkV6fCmovJgYMJcIOFDwQzEr+vJNHSpz/FDgUEGQoOiqzKylAEY6qmJCkMICA1KABqlawgPdiIwhIH8gSLWDaIw6EBs9GUCxUuRWgV4g3jnxYTUYS2jEVZRY79TpybjGlBAFwFTakppYycDw0qedJWVWmlCSm5gA6o7XVq/MRBMCHFzfK4mHJ9KQJT2FJJ+NiPSGL6KFDcUG3skVRj0PYRTo45E7CFkBOGjMGfhrkFzFSK1SMwQ96JMQNEvn4g0hOgt7nTWrg0IZflSlkPSgeQwAhEdb1ekhtEKhAKFVGUrMdI5MxSusvhqSSVqso35KQtbSNWIUTh1ap8hVmXSCTMH6U1HrTZ/9saAqC1f6QvEJAxtl71+zE0XILzWKAzwrkVfAxmdIXqWLzEF9UmTGrehoRHKy8uEPrsWz0UgKS1AKPFa80wxn3tCQS1AqD1svjBqJnS7eM4FUcjOMv+pzkCBqG30dBHlLJ3zPIwGqq6xfVCOVAxljfJxFEahpLqSjIKeGUZvDFOK94CXzlCCy80pTgBLlhsRPe8diHY95ZZTLwzxpcQwEI+Ekn7d2NAAZfZP3csorWGMNAxx3T2zNQyEppK0EK7u5dTxzUHOJa14m1VaAAn76ktvQ0hxiA/yAWK+LewRwhBGNqYpdUKZIX7FyAok05fGYinQCgUITzwRoWRrF4nBy1fqvEfiaQnE9J6iDEO2CwjkpIEkcjKXnbJwLgKY8EnQmWwiDYQcQdFQp4AJXwWQnZ2lmJn4cErragBCCSOWvImrL51gxaoRs9YAhBJQHZqKoI6x6ulQipayCQiIVG6OQQ2NDVBeVg5RgfcmVEDqyVrMS6sCInr11dpgYH3iQNJgulOEpthQezfIksWBUKvwstNUHRP8VTlE850PzOHC0JSDqhRu41OBBJCozhBuwnNh6FJRZyFJOQU/Q3QJ0uInGQA+usnMeyuG1HfRIjAg7u8bxiDieAKWePEWFKyP/MwvYhiimbY2q66uSX0akDbPATqSAiKZnxcgXeACmyGS9fsPiwGwe5OWt4DR2PEQNmpgXYpS43nYpQcQSTFC3dQVhfcanh5AJIrzu5pqPvcKotF8sWdISjaGePregVolEMqlLcVGXEjREeKEPYGIuxJNlnLn6MxCRGgRWyub8OpuzqBVzRBL4IJoFPBJbJRDBgrFL/dqw/+Btp7DjQPR1XEqwnqN1ZWbOsCEBwP3Ifqv1HUIqgJUp+A8X8ZnCC8B3vnkj5raHxjJG2s/rx+K/jmW1kBol69iouiHItoWdvvU/NMWiEnh+L7FIKdIrDA0fpVVXVUV65GXR0CtGI0QAU2cgmnYl2wuZPcl0wpIzRCTSfG7l0iVYBZkLEI66XcfErhA7MVJ8a87U8WN2wl0sNQMcU1IIKjb+EBgtORoT1VfbEURTN+pU9PjCUL1I9y5SQN4Och0u0w++maITHQtfx5DMrDLMDIUfSEdnkIFEoQAorMriJwYBY/EQgMSWOES3RxmbilARLtJtFbLv0zBpnOz39wlvzUc5J9/CvxzWTIwRMHrsjedq1uTBbpkmS5QF4hkP0HnbByIyjJlQmC6z0T/ukIxtIYaB+L+2hRdFnlLvYoZmSkuKZoD0hLMSCHylJRGBlGLOSBpdtOnRELmjl4yoDEgQXSTkafJElY6qzbyhy0IPi1+RoDogiFQh0s/io0Ws9b/iHFjQHTB8Ht5wXc1EFJWyNgRVmutLd61zhATCSar4CqfmqaSK31imHvNfkn5J6wNSGpi+KV83798rixEOjnQ2YhaXjoRTii5SeL/D7nVJQnrvvFVniHCMCQLdwxLN36276rIviCpBCQ0GLqgGvCjqok0ENXABrSQvjDTnYuKNlJAVAKmFq933dHqzcMZNYbsRY4wEH0w+H1JLZ7vKRwLEa2sWoWAiAQIRwKAuro6aGxshN69eztSeP36NXTp0oX9sx8fP36E79+/Q58+fYQm8Y8fP+DNmzfQr18/V5+fP3+Gb9++Ob6u/fXrV3j//j3k5+dD27Zt42PJQBgMj0dZuIkv0t0itjzQixYtYkBOnDgRN8XCx40bx76hi8e8efPg4MGD0KZNG/j58ydMnz4dzp8/z84NHDgQbt++7Qqt2WFqtqdOnQKMWV9fH49n9zlgwADYtWsXDBkyhH3ncdu2bbBx40Zmjz9jvMGDB7OfSUDUZoZOub1xFBcXw7lz5+Ds2bMwe/bsFCBTp06Fmpoadh67efTo0bB3714m5M6dO2HTpk1w8+ZNyM3NhQkTJsCgQYPg9OnTvuwfPXoER44cicf5T319/FbYzSdC+WdhIfukJMY/fPgwTJw4EVatWgU3btyAv//1N2S0y+ADIcHQqLmsq3Xr1kFFRQXcuXMHxo4dGxfq06dP0L17d7h+/Tr7PR4zZsxggO7evQv9+/dnM2Tr1q3s3J49e2DJkiVs6Zs7dy5bwoqKdrFXHhYvXsyWHxTz+PHjcPHiRXj58iW8e/cuZYZ4+cSYCODt27fw8OFDFu/FixdsVt66dQvGjBnjD4QEg7eGBHx+5syZ0K5dOwYE4T588ABGjBgBX758gY4dO7JsNm/eDDt27GCiZ2RkwKVLl1i34oHdissbCo17zpQpU+DMmTOAe8WcOXPg8ePHMHTo0HhVONPWrl0bB4LLlZ9PhN2rVy8oKipiyxXuJR06dIADBw7AggULvIGow5DtdQpBb9/JQNATrvG4hP3+/RsikebX17DD58+fD5WVlWwG3L9/H4YPH87OvXqF32+PwpMnT9iav3TpUjh27Bg7V1hYCOvXr09J0A4E9ys/n9OmTYOFCxfC5MmT4xs9zmD0u3LlSncg6jAoonrZqIG0A3nQMkNqa2uha9euLOju3bvh0KFDbNlo374929Bxn8Hj+fPnbA/B2dO5c2ewljzsZvSRmZnpC6Spqcnd5z8GQd3nOpg1axZbJrds2RJ/DEhOTg5b/hCSY1NPJxgWGhFEdiDWkpC81OBe8OvXL9i/fz+MHDkSsGtXr17NhD5VXAxr16yBDx8+sJ+XL1/ONm/UZfv27WwPSD7sMwTP2X3iBceaFp8IoqSkhAFAn/fu3YNJkyax/Q9nVgqQcGGozKrEWPsegosUrvk9evRgwl65coUtYSdPnmTdumHDBjZbEBhuuriOo6D79u1jtri3oHilpaVsr8AZhJuwdbgB8fN5+fJlBuDq1atQUFDAgD99+hRKS/+CnJyOCSBZWVnyT9LRoyXRC84XPNzfb0EguKxY6z5aoph4BYPLDx7Lli1jmyoeeP+AAuE+gsewYcPg2rVr7P6kb9++MH78eDh69Cj7edSoUcz+2bNnbOPGA8Fh9yffh3j5xGUvFovBihUr2H0JHt26dYMLFy6wm0Pcu/AeKlJRURHD9ZH88C+idE6zGEAsIvHelcii5Z4cLlFlZWXQs2dP6NSpk8MIN3i8UcQrIMpByajyfSW0iaT6tMbhHoWvDiB0vNiwVie8F4qUlJTE8D/2DSslMWxIqzkpGVtNLDqG41smDWq6Ydv9t6kJ/l1bC/8Djxr7UwWKnWoAAAAASUVORK5CYII="
        alt="Placeholder image"
      ></gds-img>

      <gds-input label="Input"></gds-input>

      <gds-link href="https://www.sebgroup.com">Link</gds-link>

      <gds-mask
        mask-image="top"
        background-color="tertiary/0.9"
        z-index="2"
        inset="50% 0 0 0"
        >masked</gds-mask
      >

      <gds-menu-button>Menu button</gds-menu-button>

      <gds-popover>
        <gds-button slot="trigger">Open Popover</gds-button>
        Popover content
      </gds-popover>

      <gds-rich-text>
        <p>Rich text</p>
      </gds-rich-text>

      <gds-segmented-control>
        <gds-segment value="1">Item 1</gds-segment>
        <gds-segment value="2">Item 2</gds-segment>
      </gds-segmented-control>

      <gds-signal></gds-signal>

      <gds-spacer></gds-spacer>

      <gds-text>Text</gds-text>

      <gds-textarea label="Textarea"></gds-textarea>

      <gds-theme></gds-theme>

      <gds-video></gds-video>
    </gds-flex>`}};sa=iu([Xl("all-components")],sa);export{sa as AllComponents};
