import{f as Gd,u as Yd,r as Va,a as oe,i as A,h as v,g as $,T as Vs,E as ge,x as xe,V as co,Z as jd,t as Ud}from"./index-BIN5EO55.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qd={attribute:!0,type:String,converter:Yd,reflect:!1,hasChanged:Gd},Zd=(e=qd,t,s)=>{const{kind:n,metadata:i}=s;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(s.name,e),n==="accessor"){const{name:d}=s;return{set(h){const u=t.get.call(this);t.set.call(this,h),this.requestUpdate(d,u,e)},init(h){return h!==void 0&&this.P(d,void 0,e),h}}}if(n==="setter"){const{name:d}=s;return function(h){const u=this[d];t.call(this,h),this.requestUpdate(d,u,e)}}throw Error("Unsupported decorator location: "+n)};function l(e){return(t,s)=>typeof s=="object"?Zd(e,t,s):((n,i,r)=>{const d=i.hasOwnProperty(r);return i.constructor.createProperty(r,d?{...n,wrapped:!0}:n),d?Object.getOwnPropertyDescriptor(i,r):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function re(e){return l({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fr=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Z(e,t){return(s,n,i)=>{const r=d=>d.renderRoot?.querySelector(e)??null;return fr(s,n,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qd;function Jd(e){return(t,s)=>fr(t,s,{get(){return(this.renderRoot??(Qd??=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rt(e){return(t,s)=>fr(t,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}var Xd=Object.defineProperty,Kd=Object.getOwnPropertyDescriptor,o=(e,t,s,n)=>{for(var i=n>1?void 0:n?Kd(t,s):t,r=e.length-1,d;r>=0;r--)(d=e[r])&&(i=(n?d(t,s,i):d(i))||i);return n&&i&&Xd(t,s,i),i},yr=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},a=(e,t,s)=>(yr(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},j=(e,t,s,n)=>(yr(e,t,"write to private field"),t.set(e,s),s),f=(e,t,s)=>(yr(e,t,"access private method"),s),Ye,Cn,ct,$n,Yt,je,dt,Sn,yo,Ba,is,ks,bo,Fa;class ec{constructor(t){c(this,yo),c(this,is),c(this,bo),c(this,Ye,!br()),c(this,Cn,!1),c(this,ct,[]),c(this,$n,[]),c(this,Yt,new Map),c(this,je,new Map),c(this,dt,[]),c(this,Sn,[]),this.host=t,this.host.addController(this)}hostConnected(){f(this,bo,Fa).call(this)}has(t){return a(this,Ye)?a(this,je).has(t):a(this,Yt).has(t)}inject(t,s){f(this,yo,Ba).call(this,t,s),f(this,is,ks).call(this)}clear(t){a(this,Ye)?this.host.updateComplete.then(()=>{a(this,je).get(t)?.remove(),a(this,je).delete(t)}):a(this,Yt).delete(t),f(this,is,ks).call(this)}clearAll(){a(this,Ye)?this.host.updateComplete.then(()=>{a(this,je).forEach(t=>t.remove()),a(this,dt).forEach(t=>t.remove()),a(this,je).clear(),j(this,dt,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],a(this,Yt).clear(),j(this,ct,[]))}clearInitial(){a(this,Ye)?this.host.updateComplete.then(()=>{a(this,dt).forEach(t=>t.remove()),j(this,dt,[])}):j(this,ct,[]),f(this,is,ks).call(this)}restoreInitial(){a(this,Ye)?a(this,Sn).forEach(t=>{a(this,dt).push(t.cloneNode(!0))}):j(this,ct,[...a(this,$n)]),f(this,is,ks).call(this)}}Ye=new WeakMap;Cn=new WeakMap;ct=new WeakMap;$n=new WeakMap;Yt=new WeakMap;je=new WeakMap;dt=new WeakMap;Sn=new WeakMap;yo=new WeakSet;Ba=function(e,t){if(a(this,Ye)){let s=a(this,je).get(e);s||(s=document.createElement("style"),a(this,je).set(e,s)),s.textContent=t.cssText}else{if(!this.host.shadowRoot||!t.styleSheet)return;a(this,Yt).set(e,t.styleSheet)}};is=new WeakSet;ks=function(){if(a(this,Ye))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(e=>{e.remove()}),a(this,dt).forEach(e=>{this.host.shadowRoot?.appendChild(e)}),a(this,je).forEach(e=>{this.host.shadowRoot?.appendChild(e)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...a(this,ct),...Array.from(a(this,Yt).values())]}};bo=new WeakSet;Fa=function(){a(this,Cn)||(a(this,Ye)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(e=>{a(this,dt).push(e),a(this,Sn).push(e.cloneNode(!0))})}):this.host.shadowRoot&&a(this,ct).length===0&&(j(this,ct,[...this.host.shadowRoot.adoptedStyleSheets||[]]),j(this,$n,[...a(this,ct)])),j(this,Cn,!0))};function br(){try{return new CSSStyleSheet,!0}catch{return!1}}var ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},va={};/*! *****************************************************************************
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
***************************************************************************** */var ma;function tc(){if(ma)return va;ma=1;var e;return function(t){(function(s){var n=typeof ba=="object"?ba:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),i=r(t);typeof n.Reflect>"u"?n.Reflect=t:i=r(n.Reflect,i),s(i);function r(d,h){return function(u,g){typeof d[u]!="function"&&Object.defineProperty(d,u,{configurable:!0,writable:!0,value:g}),h&&h(u,g)}}})(function(s){var n=Object.prototype.hasOwnProperty,i=typeof Symbol=="function",r=i&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",d=i&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",h=typeof Object.create=="function",u={__proto__:[]}instanceof Array,g=!h&&!u,m={create:h?function(){return lo(Object.create(null))}:u?function(){return lo({__proto__:null})}:function(){return lo({})},has:g?function(p,y){return n.call(p,y)}:function(p,y){return y in p},get:g?function(p,y){return n.call(p,y)?p[y]:void 0}:function(p,y){return p[y]}},b=Object.getPrototypeOf(Function),k=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",_=!k&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:Pd(),S=!k&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:Nd(),T=!k&&typeof WeakMap=="function"?WeakMap:Hd(),B=new T;function V(p,y,w,C){if(se(w)){if(!pa(p))throw new TypeError;if(!ga(y))throw new TypeError;return qs(p,y)}else{if(!pa(p))throw new TypeError;if(!pe(y))throw new TypeError;if(!pe(C)&&!se(C)&&!os(C))throw new TypeError;return os(C)&&(C=void 0),w=it(w),Zs(p,y,w,C)}}s("decorate",V);function U(p,y){function w(C,E){if(!pe(C))throw new TypeError;if(!se(E)&&!Rd(E))throw new TypeError;Te(p,y,C,E)}return w}s("metadata",U);function ee(p,y,w,C){if(!pe(w))throw new TypeError;return se(C)||(C=it(C)),Te(p,y,w,C)}s("defineMetadata",ee);function ue(p,y,w){if(!pe(y))throw new TypeError;return se(w)||(w=it(w)),Ge(p,y,w)}s("hasMetadata",ue);function te(p,y,w){if(!pe(y))throw new TypeError;return se(w)||(w=it(w)),ns(p,y,w)}s("hasOwnMetadata",te);function wt(p,y,w){if(!pe(y))throw new TypeError;return se(w)||(w=it(w)),kt(p,y,w)}s("getMetadata",wt);function ro(p,y,w){if(!pe(y))throw new TypeError;return se(w)||(w=it(w)),ot(p,y,w)}s("getOwnMetadata",ro);function ws(p,y){if(!pe(p))throw new TypeError;return se(y)||(y=it(y)),Ae(p,y)}s("getMetadataKeys",ws);function ss(p,y){if(!pe(p))throw new TypeError;return se(y)||(y=it(y)),Qs(p,y)}s("getOwnMetadataKeys",ss);function Bt(p,y,w){if(!pe(y))throw new TypeError;se(w)||(w=it(w));var C=_t(y,w,!1);if(se(C)||!C.delete(p))return!1;if(C.size>0)return!0;var E=B.get(y);return E.delete(w),E.size>0||B.delete(y),!0}s("deleteMetadata",Bt);function qs(p,y){for(var w=p.length-1;w>=0;--w){var C=p[w],E=C(y);if(!se(E)&&!os(E)){if(!ga(E))throw new TypeError;y=E}}return y}function Zs(p,y,w,C){for(var E=p.length-1;E>=0;--E){var le=p[E],D=le(y,w,C);if(!se(D)&&!os(D)){if(!pe(D))throw new TypeError;C=D}}return C}function _t(p,y,w){var C=B.get(p);if(se(C)){if(!w)return;C=new _,B.set(p,C)}var E=C.get(y);if(se(E)){if(!w)return;E=new _,C.set(y,E)}return E}function Ge(p,y,w){var C=ns(p,y,w);if(C)return!0;var E=ao(y);return os(E)?!1:Ge(p,E,w)}function ns(p,y,w){var C=_t(y,w,!1);return se(C)?!1:Wd(C.has(p))}function kt(p,y,w){var C=ns(p,y,w);if(C)return ot(p,y,w);var E=ao(y);if(!os(E))return kt(p,E,w)}function ot(p,y,w){var C=_t(y,w,!1);if(!se(C))return C.get(p)}function Te(p,y,w,C){var E=_t(w,C,!0);E.set(p,y)}function Ae(p,y){var w=Qs(p,y),C=ao(p);if(C===null)return w;var E=Ae(C,y);if(E.length<=0)return w;if(w.length<=0)return E;for(var le=new S,D=[],L=0,M=w;L<M.length;L++){var F=M[L],I=le.has(F);I||(le.add(F),D.push(F))}for(var Ct=0,ya=E;Ct<ya.length;Ct++){var F=ya[Ct],I=le.has(F);I||(le.add(F),D.push(F))}return D}function Qs(p,y){var w=[],C=_t(p,y,!1);if(se(C))return w;for(var E=C.keys(),le=Vd(E),D=0;;){var L=Fd(le);if(!L)return w.length=D,w;var M=Bd(L);try{w[D]=M}catch(F){try{Id(le)}finally{throw F}}D++}}function ua(p){if(p===null)return 1;switch(typeof p){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return p===null?1:6;default:return 6}}function se(p){return p===void 0}function os(p){return p===null}function zd(p){return typeof p=="symbol"}function pe(p){return typeof p=="object"?p!==null:typeof p=="function"}function Dd(p,y){switch(ua(p)){case 0:return p;case 1:return p;case 2:return p;case 3:return p;case 4:return p;case 5:return p}var w="string",C=fa(p,r);if(C!==void 0){var E=C.call(p,w);if(pe(E))throw new TypeError;return E}return Ld(p)}function Ld(p,y){var w,C,E;{var le=p.toString;if(Js(le)){var C=le.call(p);if(!pe(C))return C}var w=p.valueOf;if(Js(w)){var C=w.call(p);if(!pe(C))return C}}throw new TypeError}function Wd(p){return!!p}function Od(p){return""+p}function it(p){var y=Dd(p);return zd(y)?y:Od(y)}function pa(p){return Array.isArray?Array.isArray(p):p instanceof Object?p instanceof Array:Object.prototype.toString.call(p)==="[object Array]"}function Js(p){return typeof p=="function"}function ga(p){return typeof p=="function"}function Rd(p){switch(ua(p)){case 3:return!0;case 4:return!0;default:return!1}}function fa(p,y){var w=p[y];if(w!=null){if(!Js(w))throw new TypeError;return w}}function Vd(p){var y=fa(p,d);if(!Js(y))throw new TypeError;var w=y.call(p);if(!pe(w))throw new TypeError;return w}function Bd(p){return p.value}function Fd(p){var y=p.next();return y.done?!1:y}function Id(p){var y=p.return;y&&y.call(p)}function ao(p){var y=Object.getPrototypeOf(p);if(typeof p!="function"||p===b||y!==b)return y;var w=p.prototype,C=w&&Object.getPrototypeOf(w);if(C==null||C===Object.prototype)return y;var E=C.constructor;return typeof E!="function"||E===p?y:E}function Pd(){var p={},y=[],w=function(){function D(L,M,F){this._index=0,this._keys=L,this._values=M,this._selector=F}return D.prototype["@@iterator"]=function(){return this},D.prototype[d]=function(){return this},D.prototype.next=function(){var L=this._index;if(L>=0&&L<this._keys.length){var M=this._selector(this._keys[L],this._values[L]);return L+1>=this._keys.length?(this._index=-1,this._keys=y,this._values=y):this._index++,{value:M,done:!1}}return{value:void 0,done:!0}},D.prototype.throw=function(L){throw this._index>=0&&(this._index=-1,this._keys=y,this._values=y),L},D.prototype.return=function(L){return this._index>=0&&(this._index=-1,this._keys=y,this._values=y),{value:L,done:!0}},D}();return function(){function D(){this._keys=[],this._values=[],this._cacheKey=p,this._cacheIndex=-2}return Object.defineProperty(D.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),D.prototype.has=function(L){return this._find(L,!1)>=0},D.prototype.get=function(L){var M=this._find(L,!1);return M>=0?this._values[M]:void 0},D.prototype.set=function(L,M){var F=this._find(L,!0);return this._values[F]=M,this},D.prototype.delete=function(L){var M=this._find(L,!1);if(M>=0){for(var F=this._keys.length,I=M+1;I<F;I++)this._keys[I-1]=this._keys[I],this._values[I-1]=this._values[I];return this._keys.length--,this._values.length--,L===this._cacheKey&&(this._cacheKey=p,this._cacheIndex=-2),!0}return!1},D.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=p,this._cacheIndex=-2},D.prototype.keys=function(){return new w(this._keys,this._values,C)},D.prototype.values=function(){return new w(this._keys,this._values,E)},D.prototype.entries=function(){return new w(this._keys,this._values,le)},D.prototype["@@iterator"]=function(){return this.entries()},D.prototype[d]=function(){return this.entries()},D.prototype._find=function(L,M){return this._cacheKey!==L&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=L)),this._cacheIndex<0&&M&&(this._cacheIndex=this._keys.length,this._keys.push(L),this._values.push(void 0)),this._cacheIndex},D}();function C(D,L){return D}function E(D,L){return L}function le(D,L){return[D,L]}}function Nd(){return function(){function p(){this._map=new _}return Object.defineProperty(p.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),p.prototype.has=function(y){return this._map.has(y)},p.prototype.add=function(y){return this._map.set(y,y),this},p.prototype.delete=function(y){return this._map.delete(y)},p.prototype.clear=function(){this._map.clear()},p.prototype.keys=function(){return this._map.keys()},p.prototype.values=function(){return this._map.values()},p.prototype.entries=function(){return this._map.entries()},p.prototype["@@iterator"]=function(){return this.keys()},p.prototype[d]=function(){return this.keys()},p}()}function Hd(){var p=16,y=m.create(),w=C();return function(){function M(){this._key=C()}return M.prototype.has=function(F){var I=E(F,!1);return I!==void 0?m.has(I,this._key):!1},M.prototype.get=function(F){var I=E(F,!1);return I!==void 0?m.get(I,this._key):void 0},M.prototype.set=function(F,I){var Ct=E(F,!0);return Ct[this._key]=I,this},M.prototype.delete=function(F){var I=E(F,!1);return I!==void 0?delete I[this._key]:!1},M.prototype.clear=function(){this._key=C()},M}();function C(){var M;do M="@@WeakMap@@"+L();while(m.has(y,M));return y[M]=!0,M}function E(M,F){if(!n.call(M,w)){if(!F)return;Object.defineProperty(M,w,{value:m.create()})}return M[w]}function le(M,F){for(var I=0;I<F;++I)M[I]=Math.random()*255|0;return M}function D(M){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(M)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(M)):le(new Uint8Array(M),M):le(new Array(M),M)}function L(){var M=D(p);M[6]=M[6]&79|64,M[8]=M[8]&191|128;for(var F="",I=0;I<p;++I){var Ct=M[I];(I===4||I===6||I===8)&&(F+="-"),Ct<16&&(F+="0"),F+=Ct.toString(16).toLowerCase()}return F}}function lo(p){return p.__=void 0,delete p.__,p}})}(e||(e={})),va}tc();function xa(e){return e.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}class R extends Va{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new ec(this)}static define(){}connectedCallback(){super.connectedCallback(),this.setAttribute("gds-element",this.gdsElementName?.toString()||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(t,s){const n={bubbles:!0,composed:!1,cancelable:!0,...s};return[this.dispatchEvent(new Event(t,n)),this.dispatchEvent(new Event(xa(t),n))].every(i=>i!==!1)}dispatchCustomEvent(t,s={}){const n={bubbles:!0,composed:!1,cancelable:!0,...s};return[this.dispatchEvent(new CustomEvent(t,n)),this.dispatchEvent(new CustomEvent(xa(t),n))].every(i=>i!==!1)}}R.isDefined=!1;R.styleExpressionBaseSelector=":host";o([re()],R.prototype,"_isUsingTransitionalStyles",2);const Ia=`/**
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
  --gds-sys-space-max: 999px;`,vo=`/**
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
  --gds-sys-color-l3-states-negative-pressed: #ee8375 20%;`,Pa=`/**
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
  --gds-sys-color-l3-states-negative-pressed: #a63e2a 20%;`,Na=`/**
 * Do not edit directly, this file was auto-generated.
 */

--gds-sys-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
--gds-sys-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
--gds-sys-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
--gds-sys-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03);
--gds-sys-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03);
`;var sc={};const Un=typeof process<"u"&&sc!==void 0,nc=/iPad|iPhone|iPod/.test(navigator.userAgent);var mo,Mn,En,vr,xo,Ha,wo,Ga;function oc(){return Un?[]:document.adoptedStyleSheets||[]}const ic=class Ya{constructor(){c(this,xo),c(this,wo),c(this,mo,!br()),c(this,Mn,new Map),c(this,En,new Map),c(this,vr,oc())}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new Ya),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(t,s){if(a(this,mo)){const n=Array.isArray(s)?s.map(i=>i.toString()).join(""):s.toString();f(this,xo,Ha).call(this,t,n)}else s.styleSheet&&f(this,wo,Ga).call(this,t,s.styleSheet)}};mo=new WeakMap;Mn=new WeakMap;En=new WeakMap;vr=new WeakMap;xo=new WeakSet;Ha=function(e,t){if(Un)return;let s=a(this,En).get(e);s||(s=document.createElement("style"),a(this,En).set(e,s)),s.textContent=t,document.head.appendChild(s)};wo=new WeakSet;Ga=function(e,t){Un||(a(this,Mn).set(e,t),document.adoptedStyleSheets=[...a(this,vr),...Array.from(a(this,Mn).values())])};let ja=ic;const G=[A`
    :host {
      ${oe(Ia)}
      ${oe(Na)}
    }
  `];ja.instance.injectGlobalStyles("root-tokens",A`
    :root,
    :root[gds-theme='light'] {
      ${oe(Ia)}
      ${oe(Na)}
      ${oe(Pa)}
    }
    :root[gds-theme='dark'] {
      ${oe(vo)}
    }
  `);const rc={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},ac=/^([<|>]=?)?([0-9a-z]+)/,Ua=["{","}",";",":",","],wa=[" ","/n"];function lc(e=""){const t=[];let s="";for(let n=0;n<e.length;n++){const i=e[n];if(wa.includes(i)||(s+=i),Ua.includes(i)){t.push(s.slice(0,-1)),t.push(i),s="";continue}if(wa.includes(i)||n===e.length-1){t.push(s),s="";continue}}return t.filter(n=>n!=="")}function dc(e){const t=[];let s={breakpoint:"-",values:[]};const n=()=>({sel:"",values:[]});let i=n();for(const r of e){if(!Ua.includes(r)){i.values.push(r);continue}if(r==="{"&&(s={breakpoint:i.values.join(","),values:[]},i=n()),r===";"&&(t.length===0&&t.push(s),i.values.length>0&&(s.values.push(i),i=n())),r===":"){const d=i.values.pop()??"";i.sel=d}s&&r==="}"&&(s.values.push(i),i=n(),t.push(s))}return i.values.length>0&&s.values.push(i),t.length===0&&t.push(s),t}function cc(e){return e.split(",").map(s=>{const n=s.trim().match(ac);if(!n)throw new Error(`Invalid breakpoint specifier: ${s}`);return{condition:n[1],value:n[2]}})}function hc(e,t,s,n=r=>r,i=(r,d)=>`${r}: ${d.join(" ")};`){let r="";for(const d of s){const g=`@media ${(d.breakpoint==="-"?[{condition:">=",value:"0"}]:cc(d.breakpoint)).map(m=>`(${m.condition?.includes("<")?"max-width":"min-width"}: ${rc[m.value]??m.value})`).join(" and ")} {${d.values.map(m=>{let b=e;m.sel.length>0&&(b=e===":host"?`:host(:${m.sel})`:`${e}:${m.sel}`);const k=i(t,m.values.map(n));return m.sel==="hover"?`@media (hover: hover) {${b}{${k}}}`:`${b}{${k}}`}).join("")}}`;r+=g}return r}const ho=new Map;function x(e){return(t,s)=>{const n=e?.property??String(s),i=e?.valueTemplate,r=e?.styleTemplate,d=e?.cacheOverrideKey??"0";l({attribute:e?.attribute,noAccessor:!0})(t,s),Object.defineProperty(t,s,{get:function(){return this["__"+String(s)]},set:async function(h){if(!h)return;this["__"+String(s)]=h,await this.updateComplete;const u=e?.selector??this.constructor.styleExpressionBaseSelector,g=this.level??"0",m=u+n+h+g+d;if(ho.has(m)){this._dynamicStylesController.inject(`sep_${String(s)}`,ho.get(m));return}const b=dc(lc(h)),k=hc(u,n,b,i?.bind(this),r?.bind(this)),_=oe(k);ho.set(m,_),this._dynamicStylesController.inject(`sep_${String(s)}`,_)}})}}function qa(e,t,s){if(e==="transparent"||e==="currentColor"||e==="inherit")return e;const[n,i]=e.split("/"),r=`var(--gds-sys-color-l${s}-${t}-${n})`;return i?`color-mix(in srgb, ${r} ${parseFloat(i)*100}%, transparent 0%)`:r}function Gs(e){return{valueTemplate:function(t){return qa(t,e,this.level)}}}const Ut={valueTemplate:e=>`var(--gds-sys-space-${e}, 0)`},ke={valueTemplate:e=>`var(--gds-sys-space-${uc(e)}, ${e})`},uo={valueTemplate:e=>{const s=(e.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${e})`:`calc(var(--gds-sys-space-${e.substring(1)}) * -1)`;return e==="auto"?"auto":s},styleTemplate:(e,t)=>{const s=h=>h==="auto"?"auto":`${h}`,n=s(t[0]),i=t.length>1?s(t[1]):n,r=t.length>2?s(t[2]):n,d=t.length>3?s(t[3]):i;return`${e}: ${n} ${i} ${r} ${d};`}};function uc(e){return e.replace(/[^a-zA-Z0-9-]/g,"")}function be(e){class t extends e{}return o([x(ke)],t.prototype,"width",2),o([x(ke)],t.prototype,"min-width",2),o([x(ke)],t.prototype,"max-width",2),o([x(ke)],t.prototype,"inline-size",2),o([x(ke)],t.prototype,"min-inline-size",2),o([x(ke)],t.prototype,"max-inline-size",2),t}function qn(e){class t extends e{}return o([x(ke)],t.prototype,"height",2),o([x(ke)],t.prototype,"min-height",2),o([x(ke)],t.prototype,"max-height",2),o([x(ke)],t.prototype,"block-size",2),o([x(ke)],t.prototype,"min-block-size",2),o([x(ke)],t.prototype,"max-block-size",2),t}function we(e){class t extends e{}return o([x(uo)],t.prototype,"margin",2),o([x(uo)],t.prototype,"margin-inline",2),o([x(uo)],t.prototype,"margin-block",2),t}function pc(e){class t extends e{}return o([x(Ut)],t.prototype,"padding",2),o([x(Ut)],t.prototype,"padding-inline",2),o([x(Ut)],t.prototype,"padding-block",2),t}function ve(e){class t extends e{}return o([x()],t.prototype,"align-self",2),o([x()],t.prototype,"justify-self",2),o([x()],t.prototype,"place-self",2),o([x()],t.prototype,"grid-column",2),o([x()],t.prototype,"grid-row",2),o([x()],t.prototype,"grid-area",2),o([x()],t.prototype,"flex",2),o([x()],t.prototype,"order",2),t}function mr(e){class t extends e{}return o([x()],t.prototype,"position",2),o([x()],t.prototype,"transform",2),o([x()],t.prototype,"inset",2),t}const gc=A`
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
`;var fc=gc;let W=class extends be(qn(we(pc(ve(mr(R)))))){constructor(){super(...arguments),this.level="2"}render(){return v`<slot></slot>`}};W.styles=[G,fc];o([x()],W.prototype,"display",2);o([l()],W.prototype,"level",2);o([x(Gs("content"))],W.prototype,"color",2);o([x(Gs("background"))],W.prototype,"background",2);o([x({styleTemplate:function(e,t){const s=this,[n,i=s["border-style"]||"solid",r=s["border-color"]||"primary"]=t,d=`var(--gds-sys-space-${n})`,h=qa(r,"border",s.level);return`border: ${d} ${i} ${h};`}})],W.prototype,"border",2);o([x(Gs("border"))],W.prototype,"border-color",2);o([x(Ut)],W.prototype,"border-width",2);o([x()],W.prototype,"border-style",2);o([x(Ut)],W.prototype,"border-radius",2);o([x({valueTemplate:e=>`var(--gds-sys-shadow-${e})`})],W.prototype,"box-shadow",2);o([x()],W.prototype,"opacity",2);o([x()],W.prototype,"overflow",2);o([x()],W.prototype,"box-sizing",2);o([x()],W.prototype,"z-index",2);o([x({styleTemplate:(e,t)=>{const s=t[0],n=`font-size: var(--gds-sys-text-size-${s});`,i=`line-height: var(--gds-sys-text-line-height-${s});`;return n+i}})],W.prototype,"font-size",2);o([x({valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],W.prototype,"font-weight",2);o([x()],W.prototype,"text-align",2);o([x()],W.prototype,"text-wrap",2);o([x()],W.prototype,"overflow-wrap",2);o([x()],W.prototype,"white-space",2);o([x({...Ut,styleTemplate:(e,t)=>{const s=t[0],n=t[1]||s;return`gap: ${s} ${n};`},cacheOverrideKey:"flex"})],W.prototype,"gap",2);o([x()],W.prototype,"align-items",2);o([x()],W.prototype,"align-content",2);o([x()],W.prototype,"justify-content",2);o([x()],W.prototype,"justify-items",2);o([x()],W.prototype,"flex-direction",2);o([x()],W.prototype,"flex-wrap",2);o([x()],W.prototype,"place-items",2);o([x()],W.prototype,"place-content",2);W=o([$("gds-div")],W);const yc=A`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-l2-border-primary);
  }
`;var bc=yc;let ht=class extends W{render(){return v`<slot></slot>`}};ht.styles=[G,bc];ht=o([$("gds-flex")],ht);const vc=A`
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
`;var mc=vc,_o,Za,ko,Qa,xr,Ja,Co,Xa;let ze=class extends be(we(ve(R))){constructor(){super(...arguments),c(this,_o),c(this,ko),c(this,xr),c(this,Co),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){const e=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",t=this.disabled?"disabled":this.notification?"primary":this.variant,s=this.size==="small"||this.notification?"2xs":"xs",n=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return v`<gds-flex
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
      ${f(this,_o,Za).call(this)} ${f(this,ko,Qa).call(this)}
      ${f(this,Co,Xa).call(this)}
    </gds-flex>`}};_o=new WeakSet;Za=function(){if(this.size!=="small"||!this.notification)return v`<slot name="lead"></slot>`};ko=new WeakSet;Qa=function(){return v`<slot @slotchange=${f(this,xr,Ja)}></slot>`};xr=new WeakSet;Ja=function(e){const s=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=s.length>0&&s.some(n=>n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE&&n.textContent?.trim()!=="")};Co=new WeakSet;Xa=function(){return v`<slot name="trail"></slot>`};ze.styles=[G,mc];o([l()],ze.prototype,"variant",2);o([l({type:String})],ze.prototype,"size",2);o([l({attribute:"disabled",type:Boolean,reflect:!0})],ze.prototype,"disabled",2);o([l({attribute:"notification",type:Boolean,reflect:!0})],ze.prototype,"notification",2);o([l({attribute:"rounded",type:Boolean,reflect:!0})],ze.prototype,"rounded",2);o([re()],ze.prototype,"mainSlotOccupied",2);ze=o([$("gds-badge",{dependsOn:[ht]})],ze);ze.define();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ys={ATTRIBUTE:1,CHILD:2,ELEMENT:6},bs=e=>(...t)=>({_$litDirective$:e,values:t});let js=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=bs(class extends js{constructor(e){if(super(e),e.type!==Ys.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const s=e.element.classList;for(const n of this.st)n in t||(s.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(s.add(n),this.st.add(n)):(s.remove(n),this.st.delete(n)))}return Vs}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=e=>e??ge;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(e,t,s){return e?t(e):s?.(e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wr=Symbol.for(""),xc=e=>{if(e?.r===wr)return e?._$litStatic$},wc=e=>({_$litStatic$:e,r:wr}),Tn=(e,...t)=>({_$litStatic$:t.reduce((s,n,i)=>s+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[i+1],e[0]),r:wr}),_a=new Map,_c=e=>(t,...s)=>{const n=s.length;let i,r;const d=[],h=[];let u,g=0,m=!1;for(;g<n;){for(u=t[g];g<n&&(r=s[g],(i=xc(r))!==void 0);)u+=i+t[++g],m=!0;g!==n&&h.push(r),d.push(u),g++}if(g===n&&d.push(t[n]),m){const b=d.join("$$lit$$");(t=_a.get(b))===void 0&&(d.raw=d,_a.set(b,t=d)),s=h}return e(t,...s)},vs=_c(xe),kc=`:host {
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
}`;let Bs=class extends R{constructor(){super(...arguments),this.onmousedown=e=>{const s=e.target.getBoundingClientRect(),n=this._rippleEl;n&&(n.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-s.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-s.left}px`),setTimeout(()=>{n.classList.add("gds-ripple-effect")},20))}}render(){return xe`<div></div>`}};Bs.styles=[G,oe(kc)];o([Z("div")],Bs.prototype,"_rippleEl",2);Bs=o([$("gds-ripple")],Bs);var Ks,en,$o;const Cc=class Ka{constructor(){c(this,Ks,new Map),c(this,en,new Map),c(this,$o,!br())}static get instance(){return globalThis.__gdsTransitionalStyles?.[co]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[co]:new Ka}),globalThis.__gdsTransitionalStyles[co]}apply(t,s){if(!t.shadowRoot)return;const n=a(this,Ks).get(s);n&&(a(this,en).set(s,t),this.applyToElement(s,n))}applyToElement(t,s){const n=a(this,en).get(t);if(!n||!n.shadowRoot)return;const i=()=>{n._dynamicStylesController.clearInitial(),n._dynamicStylesController.inject("t-styles",oe(s)),n._isUsingTransitionalStyles=!0},r=()=>{n._isUsingTransitionalStyles=!1,n._dynamicStylesController.clear("t-styles"),n._dynamicStylesController.restoreInitial()},d="[gds-element=gds-theme]";let h=n.getRootNode(),u=n.closest(d);for(;u===null&&h!==document;)u=h.host?.closest(d),h=h.host?.getRootNode();if(u){const g=u,m=()=>{g.designVersion==="2023"?r():i()};if(g.addEventListener("gds-design-version-changed",m),n.addEventListener("gds-element-disconnected",()=>g.removeEventListener("gds-design-version-changed",m)),g.designVersion==="2023"){r();return}}i()}register(t,s){let n=s;a(this,$o)&&(n=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${s}`),a(this,Ks).set(t,n),this.applyToElement(t,n)}};Ks=new WeakMap;en=new WeakMap;$o=new WeakMap;let fe=Cc;function Y(e,t){const s={waitUntilFirstUpdate:!1,...t};return(n,i,r)=>{const{update:d}=n,h=Array.isArray(e)?e:[e];n.update=function(u){h.forEach(g=>{const m=g;if(u.has(m)){const b=u.get(m),k=this[m];b!==k&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&r.value?.call(this,b,k)}}),d.call(this,u)}}}function Zn(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,n)=>{let i;const r=t.connectedCallback,d=t.disconnectedCallback;t.connectedCallback=function(){r?.call(this);const h=(u,g)=>{n.value?.call(this)};i=new MutationObserver(h),i.observe(this,e)},t.disconnectedCallback=function(){d?.call(this),i.disconnect()}}}function $c(e){return(t,s,n)=>{if(Un)return;const i=window.matchMedia(e),r=t.connectedCallback,d=t.disconnectedCallback;t.connectedCallback=function(){r?.call(this);const h=u=>{n.value?.call(this,u.matches)};i.addEventListener("change",h),this.disconnectedCallback=function(){d?.call(this),i.removeEventListener("change",h)},n.value?.call(this,i.matches)}}}class Sc extends js{constructor(t){if(super(t),t.type!==Ys.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return ge}update(t,[s]){const n=t.element,i=t.options?.host;Array.from(i.attributes).forEach(r=>{s(r)&&n.setAttribute(r.name.replace("gds-",""),r.value)})}}const Mc=bs(Sc),ka=new WeakMap;function Ec(e){return(t,...s)=>{let n=ka.get(t);return n||(n=t.map(i=>i.replace(/\n[\s]+</gm,"<")),n.raw=t.raw,ka.set(t,n)),e(n,...s)}}var de;class ne extends R{constructor(){super(),c(this,de,void 0),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{j(this,de,this.attachInternals())}catch{j(this,de,{form:this.closest("form"),setFormValue:s=>{this.value=s},setValidity:(s,n)=>{a(this,de).validity=s,this.errorMessage=n||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0})}}set invalid(t){const s=this.invalid;a(this,de).setValidity({...a(this,de).validity,customError:t,valid:!t},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",s),a(this,de).checkValidity()}get invalid(){return!a(this,de).validity.valid}get value(){return this._internalValue}set value(t){this._internalValue=t,a(this,de).setFormValue(t)}get form(){return a(this,de).form}get validity(){return a(this,de).validity}get validationMessage(){return a(this,de).validationMessage}get willValidate(){return a(this,de).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const s=this.invalid,n=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=n[1]||this.errorMessage,a(this,de).setValidity(n[0],n[1],this._getValidityAnchor()),s!==this.invalid&&(this.requestUpdate("invalid",s),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),a(this,de).checkValidity()}reportValidity(){return a(this,de).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(t){t?.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(t){this.checkValidity(),this.validity.valid||t.preventDefault()}}de=new WeakMap;ne.formAssociated=!0;o([l({attribute:!1})],ne.prototype,"validator",2);o([l({type:Boolean})],ne.prototype,"required",2);o([l({attribute:"error-message"})],ne.prototype,"errorMessage",2);o([l({type:Boolean,reflect:!0})],ne.prototype,"invalid",1);o([l()],ne.prototype,"label",2);o([l()],ne.prototype,"value",1);o([l({reflect:!0})],ne.prototype,"name",2);o([l({type:Boolean,reflect:!0})],ne.prototype,"disabled",2);o([Y("value",{waitUntilFirstUpdate:!0})],ne.prototype,"__handleValueChange",1);const Tc=`@layer tokens, core, a11y, ranks, sizes, variants, disabled;

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
`;var Cs,rt,$t,So,el,Mo,Eo;const Ac=["aria-label","aria-haspopup","aria-expanded"],zc=Ec(v);class he extends ne{constructor(){super(...arguments),c(this,rt),c(this,So),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",c(this,Cs,!1),c(this,Mo,()=>{const t=this._mainSlot?.assignedElements()??[];j(this,Cs,t.length===1&&t.some(s=>s.tagName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),c(this,Eo,t=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:t}),this.form&&!a(this,rt,$t)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),fe.instance.apply(this,"gds-button")}focus(t){this._getValidityAnchor()?.focus(t)}render(){const t={button:!0,circle:a(this,Cs),icon:a(this,Cs),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",positive:this.variant==="positive",negative:this.variant==="negative",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},s=a(this,rt,$t)?Tn`a`:Tn`button`;return vs`
      <${s}
        class=${me(t)}
        type="${N(a(this,rt,$t)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||ge}
        href=${N(a(this,rt,$t)?this.href:void 0)}
        target=${N(a(this,rt,$t)?this.target:void 0)}
        rel=${N(a(this,rt,$t)?this.rel||a(this,So,el):void 0)}
        download=${N(a(this,rt,$t)?this.download:void 0)}
        part="_button"
        @click="${a(this,Eo)}"
        ${Mc(n=>n.name.startsWith("gds-aria")||n.name==="gds-role"||Ac.includes(n.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${a(this,Mo)}></slot>
        <slot name="trail"></slot>
        ${H(!this._isUsingTransitionalStyles,()=>zc`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${s}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}}Cs=new WeakMap;rt=new WeakSet;$t=function(){return this.href.length>0};So=new WeakSet;el=function(){return this.target==="_blank"?"noreferrer noopener":void 0};Mo=new WeakMap;Eo=new WeakMap;he.styles=[G,oe(Tc)];he.shadowRootOptions={mode:"open",delegatesFocus:!0};o([l({type:Boolean,reflect:!0})],he.prototype,"disabled",2);o([x({selector:".button"})],he.prototype,"justify-content",2);o([l({reflect:!0})],he.prototype,"type",2);o([l({reflect:!0})],he.prototype,"rank",2);o([l({reflect:!0})],he.prototype,"variant",2);o([l({reflect:!0})],he.prototype,"size",2);o([l()],he.prototype,"label",2);o([l()],he.prototype,"href",2);o([l()],he.prototype,"target",2);o([l()],he.prototype,"rel",2);o([l()],he.prototype,"download",2);o([Z("slot:not([name])")],he.prototype,"_mainSlot",2);o([Z(".button")],he.prototype,"_button",2);o([Zn({attributes:!0,childList:!1,subtree:!1,characterData:!1})],he.prototype,"_attributeChanged",1);let ut=class extends be(we(ve(he))){};ut=o([$("gds-button",{dependsOn:[Bs]})],ut);ut.define();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ca="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dc=(e,...t)=>({strTag:!0,strings:e,values:t}),Lc=Dc,Wc=e=>typeof e!="string"&&"strTag"in e,Oc=(e,t,s)=>{let n=e[0];for(let i=1;i<e.length;i++)n+=t[i-1],n+=e[i];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rc=e=>Wc(e)?Oc(e.strings,e.values):e;let z=Rc;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vc{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(Ca,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Ca,this.__litLocalizeEventHandler)}}const Bc=e=>e.addController(new Vc(e)),Fc=Bc;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=()=>(e,t)=>(e.addInitializer(Fc),e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ic{constructor(){this.settled=!1,this.promise=new Promise((t,s)=>{this._resolve=t,this._reject=s})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let e=0;e<256;e++)(e>>4&15).toString(16)+(e&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pc=new Ic;Pc.resolve();function To(e){"@babel/helpers - typeof";return To=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},To(e)}function Vt(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function ae(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function ie(e){ae(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||To(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function jt(e,t){ae(2,arguments);var s=ie(e),n=Vt(t);return isNaN(n)?new Date(NaN):(n&&s.setDate(s.getDate()+n),s)}function tl(e,t){ae(2,arguments);var s=ie(e),n=Vt(t);if(isNaN(n))return new Date(NaN);if(!n)return s;var i=s.getDate(),r=new Date(s.getTime());r.setMonth(s.getMonth()+n+1,0);var d=r.getDate();return i>=d?r:(s.setFullYear(r.getFullYear(),r.getMonth(),i),s)}var Nc={};function _r(){return Nc}function hs(e,t){var s,n,i,r,d,h,u,g;ae(1,arguments);var m=_r(),b=Vt((s=(n=(i=(r=t?.weekStartsOn)!==null&&r!==void 0?r:t==null||(d=t.locale)===null||d===void 0||(h=d.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&i!==void 0?i:m.weekStartsOn)!==null&&n!==void 0?n:(u=m.locale)===null||u===void 0||(g=u.options)===null||g===void 0?void 0:g.weekStartsOn)!==null&&s!==void 0?s:0);if(!(b>=0&&b<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var k=ie(e),_=k.getDay(),S=(_<b?7:0)+_-b;return k.setDate(k.getDate()-S),k.setHours(0,0,0,0),k}function $a(e){ae(1,arguments);var t=ie(e);return t.setHours(0,0,0,0),t}function Hc(e,t){ae(2,arguments);var s=Vt(t),n=s*7;return jt(e,n)}function St(e,t){ae(2,arguments);var s=$a(e),n=$a(t);return s.getTime()===n.getTime()}function Gc(e){ae(1,arguments);var t=ie(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(23,59,59,999),t}function Yc(e,t){var s;ae(1,arguments);var n=e||{},i=ie(n.start),r=ie(n.end),d=r.getTime();if(!(i.getTime()<=d))throw new RangeError("Invalid interval");var h=[],u=i;u.setHours(0,0,0,0);var g=Number((s=void 0)!==null&&s!==void 0?s:1);if(g<1||isNaN(g))throw new RangeError("`options.step` must be a number greater than 1");for(;u.getTime()<=d;)h.push(ie(u)),u.setDate(u.getDate()+g),u.setHours(0,0,0,0);return h}function jc(e,t){ae(1,arguments);var s=e||{},n=ie(s.start),i=ie(s.end),r=i.getTime();if(!(n.getTime()<=r))throw new RangeError("Invalid interval");var d=hs(n,t),h=hs(i,t);d.setHours(15),h.setHours(15),r=h.getTime();for(var u=[],g=d;g.getTime()<=r;)g.setHours(0),u.push(ie(g)),g=Hc(g,1),g.setHours(15);return u}function Uc(e){ae(1,arguments);var t=ie(e);return t.setDate(1),t.setHours(0,0,0,0),t}function qc(e,t){var s,n,i,r,d,h;ae(1,arguments);var u=ie(e),g=u.getFullYear(),m=_r(),b=Vt((s=(n=(i=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&i!==void 0?i:m.firstWeekContainsDate)!==null&&n!==void 0?n:(d=m.locale)===null||d===void 0||(h=d.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var k=new Date(0);k.setFullYear(g+1,0,b),k.setHours(0,0,0,0);var _=hs(k,t),S=new Date(0);S.setFullYear(g,0,b),S.setHours(0,0,0,0);var T=hs(S,t);return u.getTime()>=_.getTime()?g+1:u.getTime()>=T.getTime()?g:g-1}function Zc(e,t){var s,n,i,r,d,h;ae(1,arguments);var u=_r(),g=Vt((s=(n=(i=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&i!==void 0?i:u.firstWeekContainsDate)!==null&&n!==void 0?n:(d=u.locale)===null||d===void 0||(h=d.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&s!==void 0?s:1),m=qc(e,t),b=new Date(0);b.setFullYear(m,0,g),b.setHours(0,0,0,0);var k=hs(b,t);return k}var Qc=6048e5;function Jc(e,t){ae(1,arguments);var s=ie(e),n=hs(s,t).getTime()-Zc(s,t).getTime();return Math.round(n/Qc)+1}function Xc(e){ae(1,arguments);var t=ie(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(0,0,0,0),t}function Kc(e,t){ae(2,arguments);var s=ie(e),n=ie(t);return s.getFullYear()===n.getFullYear()&&s.getMonth()===n.getMonth()}function eh(e,t){ae(2,arguments);var s=ie(e),n=Vt(t);return s.setHours(n),s}function th(e,t){ae(2,arguments);var s=Vt(t);return tl(e,-s)}const sh=A`
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
`;var nh=sh;function oh(e,t){const s=Uc(e),n=Gc(e),i=jc({start:s,end:n},{weekStartsOn:1});for(;i.length<6;)i.push(jt(i[i.length-1],7));return xe`${t(i.map(r=>({days:Yc({start:r,end:jt(r,6)})})))}`}var An,kr,Ao,sl;let J=class extends R{constructor(){super(...arguments),c(this,An),c(this,Ao),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=e=>e.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=Xc(new Date(this.focusedYear,e,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),s.setMonth(e),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){return this.shadowRoot?.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),fe.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",f(this,Ao,sl)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){super.focus(),this._elFocusedCell?.focus()}render(){const e=new Date;return xe`<table role="grid" aria-label="${N(this.label)}">
      ${H(!this.hideDayNames,()=>xe`<thead role="rowgroup">
            <tr role="row">
              ${H(this.showWeekNumbers,()=>xe`<th></th>`)}
              <th>${z("Mon")}</th>
              <th>${z("Tue")}</th>
              <th>${z("Wed")}</th>
              <th>${z("Thu")}</th>
              <th>${z("Fri")}</th>
              <th>${z("Sat")}</th>
              <th>${z("Sun")}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${oh(this.focusedDate,t=>xe`
            ${t.map(s=>xe`
                <tr role="row">
                  ${H(this.showWeekNumbers,()=>xe`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${Jc(s.days[0])}
                      </td>`)}
                  ${s.days.map(n=>{const i=this.customizedDates&&this.customizedDates.find(b=>St(b.date,n)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(b=>St(b,n))),...i},d=!Kc(this.focusedDate,n),h=(n<this.min||n>this.max)&&!St(n,this.min)&&!St(n,this.max),u=n.getDay()===0||n.getDay()===6,g=r.disabled||d||h||this.disabledWeekends&&u;return this.hideExtraneousDays&&d?xe`<td inert></td>`:xe`
                          <td
                            role="${N(g?void 0:"gridcell")}"
                            class="${me({"custom-date":!!i,disabled:!!g,today:St(e,n)})}"
                            ?disabled=${g}
                            tabindex="${St(this.focusedDate,n)?0:-1}"
                            aria-selected="${this.value&&St(this.value,n)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(n)}"
                            @click=${()=>g?null:f(this,An,kr).call(this,n)}
                            id="dateCell-${n.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${r?r?.color:""}"
                              >${n.getDate()}</span
                            >

                            ${H(r.indicator,()=>xe`<span
                                  class="indicator-${r?.indicator}"
                                  style="--_color: ${r?.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};An=new WeakSet;kr=function(e){const t=eh(e,12);this.value=t,this.dispatchCustomEvent("change",{detail:t,bubbles:!1,composed:!1})};Ao=new WeakSet;sl=function(e){let t=!1,s=new Date(this.focusedDate);e.key==="ArrowLeft"?(s=jt(this.focusedDate,-1),t=!0):e.key==="ArrowRight"?(s=jt(this.focusedDate,1),t=!0):e.key==="ArrowUp"?(s=jt(this.focusedDate,-7),t=!0):e.key==="ArrowDown"?(s=jt(this.focusedDate,7),t=!0):e.key==="Enter"||e.key===" "?(this._elFocusedCell?.hasAttribute("disabled")||f(this,An,kr).call(this,this.focusedDate),t=!0):e.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):e.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):e.key==="PageUp"?(s=th(this.focusedDate,1),t=!0):e.key==="PageDown"&&(s=tl(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus()}))};J.styles=[G,nh];J.shadowRootOptions={mode:"open",delegatesFocus:!0};o([l()],J.prototype,"value",2);o([l({type:Date})],J.prototype,"min",2);o([l({type:Date})],J.prototype,"max",2);o([l()],J.prototype,"focusedDate",2);o([l({type:Boolean,attribute:"disabled-weekends"})],J.prototype,"disabledWeekends",2);o([l({type:Array,attribute:"disabled-dates"})],J.prototype,"disabledDates",2);o([l({type:Number})],J.prototype,"focusedMonth",1);o([l({type:Number})],J.prototype,"focusedYear",1);o([l({type:Boolean})],J.prototype,"showWeekNumbers",2);o([l({type:Boolean})],J.prototype,"hideExtraneousDays",2);o([l({type:Boolean})],J.prototype,"hideDayNames",2);o([l({attribute:!1})],J.prototype,"customizedDates",2);o([l()],J.prototype,"label",2);o([l({attribute:!1})],J.prototype,"dateLabelTemplate",2);o([re()],J.prototype,"_currentLocale",2);o([Z('td[tabindex="0"]')],J.prototype,"_elFocusedCell",2);o([Y("value")],J.prototype,"_valueChanged",1);J=o([$("gds-calendar"),_e()],J);J.define();let Dt=class extends W{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return v`<slot></slot>`}};Dt.styles=[G,A`
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
    `];o([x({property:"box-shadow",valueTemplate:e=>`var(--gds-sys-shadow-${e})`})],Dt.prototype,"shadow",2);o([x({styleTemplate:function(e,t){return`
      --_border-color: var(--gds-sys-color-l${this.level}-background-${t});
      --_background-color: var(--gds-sys-color-l${this.level}-background-${t});
      --_color: var(--gds-sys-color-l${this.level}-content-${t});
      `}})],Dt.prototype,"variant",2);Dt=o([$("gds-card")],Dt);Dt.define();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let zo=class extends js{constructor(t){if(super(t),this.it=ge,t.type!==Ys.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ge||t==null)return this._t=void 0,this.it=t;if(t===Vs)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};zo.directiveName="unsafeHTML",zo.resultType=1;const nl=bs(zo),ih=A`
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
`;var rh=ih;class K extends we(ve(R)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.box=!1,this.label=""}get svgAttributes(){const t=this.constructor,s={fill:"none",xmlns:"http://www.w3.org/2000/svg",...this.size===void 0&&{width:this.width||t._width,height:this.width||t._height}||{},viewBox:this.box||t._viewBox,part:"icon"};return this.label?{...s,"aria-label":this.label}:{...s,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([s,n])=>n!==void 0).map(([s,n])=>`${s}="${n}"`).join(`
      `)}render(){const t=this.svgAttributes;let s=this.svgContent||"";this.stroke&&(s=this.applyStroke(s));const n=`
      <svg ${this.generateAttributesString(t)}>
        ${s}
      </svg>
    `;return xe`${nl(n)}`}}K.styles=[G,rh];o([x({...ke,property:"height",selector:"svg"})],K.prototype,"size",2);o([l({type:Number})],K.prototype,"width",2);o([l({type:Number})],K.prototype,"height",2);o([l({type:Boolean})],K.prototype,"solid",2);o([l({type:Number})],K.prototype,"stroke",2);o([l()],K.prototype,"level",2);o([x(Gs("content"))],K.prototype,"color",2);o([l({type:String})],K.prototype,"box",2);o([l({type:String})],K.prototype,"label",2);K.define();let pt=class extends K{};pt._regularSVG='<path d="M12 2.75L12.6457 2.36845C12.5108 2.1401 12.2652 2 12 2C11.7348 2 11.4892 2.1401 11.3543 2.36845L12 2.75ZM2.25 19.25L1.60431 18.8685C1.4673 19.1003 1.46512 19.3878 1.59859 19.6217C1.73207 19.8556 1.9807 20 2.25 20V19.25ZM21.75 19.25V20C22.0193 20 22.2679 19.8556 22.4014 19.6217C22.5349 19.3878 22.5327 19.1003 22.3957 18.8685L21.75 19.25ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75H11.25ZM12.75 15.74C12.75 15.3258 12.4142 14.99 12 14.99C11.5858 14.99 11.25 15.3258 11.25 15.74H12.75ZM12 2.75L11.3543 2.36845L1.60431 18.8685L2.25 19.25L2.89569 19.6315L12.6457 3.13155L12 2.75ZM2.25 19.25V20H21.75V19.25V18.5H2.25V19.25ZM21.75 19.25L22.3957 18.8685L12.6457 2.36845L12 2.75L11.3543 3.13155L21.1043 19.6315L21.75 19.25ZM12 9.75H11.25V13.25H12H12.75V9.75H12ZM12.25 15.75H11.5C11.5 15.4739 11.7239 15.25 12 15.25V16V16.75C12.5523 16.75 13 16.3023 13 15.75H12.25ZM12 16V15.25C12.2761 15.25 12.5 15.4739 12.5 15.75H11.75H11C11 16.3023 11.4477 16.75 12 16.75V16ZM11.75 15.75H12.5C12.5 16.0261 12.2761 16.25 12 16.25V15.5V14.75C11.4477 14.75 11 15.1977 11 15.75H11.75ZM12 15.5V16.25C11.7239 16.25 11.5 16.0261 11.5 15.75H12.25H13C13 15.1977 12.5523 14.75 12 14.75V15.5ZM12 15.75H12.75V15.74H12H11.25V15.75H12Z" fill="currentColor"/>';pt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5108 2.1401 12.6457 2.36845L22.3957 18.8685C22.5327 19.1003 22.5349 19.3878 22.4014 19.6217C22.2679 19.8556 22.0193 20 21.75 20H2.25C1.9807 20 1.73207 19.8556 1.59859 19.6217C1.46512 19.3878 1.4673 19.1003 1.60431 18.8685L11.3543 2.36845C11.4892 2.1401 11.7348 2 12 2ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z" fill="currentColor"/>';pt._name="triangle-exclamation";pt._width=24;pt._height=24;pt._viewBox="0 0 24 24";pt=o([$("gds-icon-triangle-exclamation")],pt);const ah=A`
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
`;var Do,ol;let De=class extends R{constructor(){super(...arguments),c(this,Do)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter)}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return v`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${H(this.errorMessage,()=>v`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${H(Number.isInteger(this.charCounter),()=>f(this,Do,ol).call(this,this.charCounter))}
      </div>
    </div>`}};Do=new WeakSet;ol=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",v`<gds-badge variant="${t}">${e}</gds-badge>`};De.styles=[ah];o([l({type:Number})],De.prototype,"charCounter",2);o([l()],De.prototype,"errorMessage",2);o([Y("charCounter"),Y("errorMessage")],De.prototype,"_handleVisibilityChange",1);De=o([$("gds-form-control-footer",{dependsOn:[ze,pt]})],De);let gt=class extends K{};gt._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7.375C12.3452 7.375 12.625 7.65482 12.625 8C12.625 8.34518 12.3452 8.625 12 8.625C11.6548 8.625 11.375 8.34518 11.375 8C11.375 7.65482 11.6548 7.375 12 7.375Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>';gt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>';gt._name="circle-info";gt._width=24;gt._height=24;gt._viewBox="0 0 24 24";gt=o([$("gds-icon-circle-info")],gt);const lh=A`
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
`;var Cr,il,Lo,Wo,tn,Oo,rl;let Le=class extends R{constructor(){super(...arguments),c(this,Cr),c(this,Oo),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,c(this,Lo,()=>v`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${z("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${a(this,Wo)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),c(this,Wo,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this._extendedSupportingText?.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText})}),c(this,tn,()=>{this.showExtendedSupportingText&&this._extendedSupportingText?.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`)})}render(){return v`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${H(this._hasExtendedSupportingText,a(this,Lo))}
      </div>

      ${f(this,Oo,rl).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",a(this,tn))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",a(this,tn))}};Cr=new WeakSet;il=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};Lo=new WeakMap;Wo=new WeakMap;tn=new WeakMap;Oo=new WeakSet;rl=function(){return v`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${f(this,Cr,il)}
        ></slot>
      </div>
    `};Le.styles=[lh];o([l({type:Boolean,reflect:!0})],Le.prototype,"showExtendedSupportingText",2);o([re()],Le.prototype,"_hasExtendedSupportingText",2);o([Z("#extended-supporting-text")],Le.prototype,"_extendedSupportingText",2);Le=o([$("gds-form-control-header",{dependsOn:[ut,Dt,gt]}),_e()],Le);const dh=A`
  :host {
    /* Font Sizes */
    --_font-size-label: var(--gds-sys-text-size-detail-m);
    --_line-height-label: var(--gds-sys-text-line-height-detail-m);
    --_font-size-supporting-text: var(--gds-sys-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-sys-text-line-height-detail-s);
    font-size: var(--_font-size-label);
    line-height: var(--_line-height-label);

    /* Color */
    --_checkbox-label-color: var(--gds-sys-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --_checkbox-label-color: var(--gds-sys-color-l3-content-negative);
  }

  :host([size='small']) {
    --_font-size-label: var(--gds-sys-text-size-detail-s);
    --_line-height-label: var(--gds-sys-text-line-height-detail-s);
    --_font-size-supporting-text: var(--gds-sys-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-sys-text-line-height-detail-s);
  }

  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }

  .content {
    display: flex;
    position: relative;
    max-width: max-content;
    color: var(--_checkbox-label-color);
  }

  .direction-row .content {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gds-sys-space-l);
  }

  .direction-column .content {
    flex-direction: column;
    gap: var(--gds-sys-space-xs);
  }
`;var Ro,Vo,al,$r,ll,Sr,dl,Mr,cl,zn,Er,Tr,hl,Ar,ul;let We=class extends ne{constructor(){super(...arguments),c(this,Vo),c(this,$r),c(this,Sr),c(this,Mr),c(this,zn),c(this,Tr),c(this,Ar),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,c(this,Ro,()=>{this.checkboxes.forEach(e=>{e.invalid=this.invalid})})}get value(){return this._internalValue||[]}set value(e){this._internalValue=e}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this.checkboxes.pop()}_handleValueChange(){this.checkboxes.forEach(e=>{e.checked=this.value.includes(e.value)||!1})}focus(){this.checkboxes[0]?.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",a(this,Ro))}render(){const e={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return v`<div
      role="group"
      id="checkboxgroup"
      class=${me(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${f(this,Vo,al).call(this)}
    </div>`}_syncOnDOMChange(){f(this,zn,Er).call(this)}};Ro=new WeakMap;Vo=new WeakSet;al=function(){return[f(this,$r,ll).call(this),f(this,Sr,dl).call(this),f(this,Ar,ul).call(this)].map(t=>v`${t}`)};$r=new WeakSet;ll=function(){if(this.label)return v`<gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};Sr=new WeakSet;dl=function(){return v`<div class="content">
      <slot @input=${f(this,Mr,cl)}></slot>
    </div>`};Mr=new WeakSet;cl=function(e){e&&e.stopPropagation(),f(this,zn,Er).call(this),f(this,Tr,hl).call(this)};zn=new WeakSet;Er=function(){const e=this.checkboxes.filter(t=>t.checked).map(t=>t.value);JSON.stringify(e)!==JSON.stringify(this.value)&&(this.value=e)};Tr=new WeakSet;hl=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};Ar=new WeakSet;ul=function(){return v`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};We.styles=[dh];o([l()],We.prototype,"size",2);o([l()],We.prototype,"direction",2);o([l({attribute:"supporting-text"})],We.prototype,"supportingText",2);o([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],We.prototype,"showExtendedSupportingText",2);o([l({type:Array})],We.prototype,"value",1);o([Y("value",{waitUntilFirstUpdate:!0})],We.prototype,"_handleValueChange",1);o([Zn({attributes:!0,childList:!0,subtree:!0,characterData:!0})],We.prototype,"_syncOnDOMChange",1);We=o([_e()],We);let Bo=class extends ve(we(be(We))){};Bo=o([$("gds-checkbox-group",{dependsOn:[Le,De]})],Bo);Bo.define();const ch=A`
  @layer base, a11y;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .field-label {
        transition: none;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    .container {
      display: flex;
      gap: var(--gds-sys-space-s);
    }

    .label {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    slot[name='label']::slotted(*) {
      font-weight: var(--gds-sys-text-weight-book);
      cursor: inherit;
    }

    slot[name='supporting-text']::slotted(*) {
      font-size: var(--_font-size-supporting-text);
      line-height: var(--_line-height-supporting-text);
      font-weight: var(--gds-sys-text-weight-regular);
    }
  }
`;let Qt=class extends R{constructor(){super(),this.label="",this.supportingText=""}render(){const e={label:!0,"has-supporting-text":!!this.supportingText};return v`
      <div class="container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${me(e)}">
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
      </div>
    `}};Qt.styles=[G,ch];o([l()],Qt.prototype,"label",2);o([l({attribute:"supporting-text"})],Qt.prototype,"supportingText",2);Qt=o([$("gds-toggle-control-base"),_e()],Qt);var pl=A`
  .rbcb {
    --_toggle-size: var(--gds-sys-space-m);
    --_toggle-radius: var(--gds-sys-space-2xs);
    --_perimeter-size: var(--gds-sys-space-xl);
    --_toggle-border-width-checked: var(--gds-sys-space-s);

    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-background-secondary),
      var(--gds-sys-color-l3-states-light-hover)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-background-secondary),
      var(--gds-sys-color-l3-states-light-pressed)
    );

    /* -- */

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--_toggle-size);
    height: var(--_toggle-size);
    margin-block-start: calc(var(--gds-sys-space-4xs) * 2);
    cursor: pointer;
  }

  .rbcb--radio {
    --_toggle-radius: var(--gds-sys-space-max);
    --_toggle-border-width-checked: var(--gds-sys-space-2xs);
  }

  .rbcb__toggle {
    width: var(--_toggle-size);
    height: var(--_toggle-size);
    border-radius: var(--_toggle-radius);
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
      var(--gds-sys-color-l3-border-secondary);
    background-color: var(--gds-sys-color-l3-content-primary);
    box-sizing: border-box;
    transition-property: box-shadow;
    transition-duration: 248ms;
    will-change: box-shadow;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rbcb__icon {
    line-height: 10px;
    transition: scale 150ms;
    will-change: scale;
    scale: 1;
    color: var(--gds-sys-color-l3-content-primary);
    @starting-style {
      scale: 0.2;
    }
  }

  .rbcb__perimeter {
    display: flex;
    box-sizing: border-box;
    backface-visibility: hidden;
    transition-property: background-color, scale, outline-color;
    transition-duration: 248ms;
    outline-style: solid;
    outline-offset: calc(-1 * var(--gds-sys-space-3xs));
    outline-width: 0;
    outline-color: var(--gds-sys-color-l3-content-tertiary);
    border-radius: calc(var(--_toggle-radius) + 4px);
    min-width: var(--_perimeter-size);
    min-height: var(--_perimeter-size);
    position: absolute;
    left: calc(* 1 - calc((var(--_perimeter-size) - var(--_toggle-size)) / 2));
    top: calc(* 1 - calc((var(--_perimeter-size) - var(--_toggle-size)) / 2));
    scale: 0.8;
  }

  /**
   * Modifiers
   */

  .--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-l3-border-primary);
  }

  .--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-l3-border-primary);
  }

  .--invalid.--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
      var(--gds-sys-color-l3-border-negative);
  }

  .--disabled {
    cursor: default;
  }

  .--disabled .rbcb__toggle {
    box-shadow: none;
    background-color: var(--gds-sys-color-l3-content-disabled);
  }

  .--invalid .rbcb__toggle {
    background-color: var(--gds-sys-color-l3-background-negative-secondary);
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
      var(--gds-sys-color-l3-border-negative);
  }

  .--invalid.--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
      var(--gds-sys-color-l3-border-negative);
  }

  .--invalid .rbcb__perimeter {
    outline-color: var(--gds-sys-color-l3-border-negative);
    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-background-negative-secondary),
      var(--gds-sys-color-l3-states-negative-hover)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-background-negative-secondary),
      var(--gds-sys-color-l3-states-negative-pressed)
    );
  }

  .--invalid .rbcb__icon {
    color: var(--gds-sys-color-l3-content-negative);
  }

  :host(:focus-visible) .rbcb__perimeter,
  :host(:focus-within) .rbcb__perimeter {
    outline-width: var(--gds-sys-space-3xs);
    scale: 1;
  }

  @media (hover: hover) {
    .rbcb:hover:not(.--disabled) .rbcb__perimeter,
    :host(:hover) .rbcb:not(.--disabled) .rbcb__perimeter {
      background-color: var(--_perimeter-bg-mix);
      scale: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .rbcb__toggle {
      transition: none;
    }
  }

  .rbcb:active:not(.--disabled) .rbcb__perimeter,
  :host(:active) .rbcb:not(.--disabled) .rbcb__perimeter {
    background-color: var(--_perimeter-bg-mix-active);
  }

  :host(:active:not(:focus-visible)) .rbcb:active .rbcb__perimeter,
  :host(:active:not(:focus-visible)) .rbcb__perimeter {
    scale: 0.96;
  }
`;const hh=e=>gl({...e,type:"checkbox"}),uh=e=>gl({...e,type:"radio"}),gl=e=>{const{type:t,checked:s,indeterminate:n,disabled:i,invalid:r}=e;return v`
    <div class="rbcb ${me({"rbcb--checkbox":t==="checkbox","rbcb--radio":t==="radio","--checked":s,"--indeterminate":n,"--disabled":i,"--invalid":r})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${H(t==="checkbox",()=>v`
            ${H(n,()=>v`<gds-icon-minus-small
                  class="rbcb__icon"
                  stroke="4"
                ></gds-icon-minus-small>`,()=>H(s,()=>v`<gds-icon-checkmark
                      class="rbcb__icon"
                      stroke="4"
                    ></gds-icon-checkmark>`))}
          `)}
      </div>
    </div>
  `};let Se=class extends K{};Se._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Se._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7425 2.99442C22.2979 3.40452 22.4156 4.18717 22.0055 4.74251L10.0055 20.9925C9.80427 21.2651 9.501 21.4442 9.16518 21.489C8.82936 21.5338 8.48974 21.4403 8.22411 21.23L2.22411 16.48C1.68284 16.0515 1.59143 15.2654 2.01993 14.7241C2.44844 14.1828 3.2346 14.0914 3.77587 14.5199L8.76235 18.4675L19.9944 3.2574C20.4045 2.70206 21.1872 2.58432 21.7425 2.99442Z" fill="currentColor"/>';Se._name="checkmark";Se._width=24;Se._height=24;Se._viewBox="0 0 24 24";Se=o([$("gds-icon-checkmark")],Se);const fl=e=>{class t extends e{constructor(){super(...arguments),this.onblur=n=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:n.relatedTarget}))},this.onfocus=n=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:n.relatedTarget}))}}focus(n){this.setAttribute("tabindex","0"),super.focus(n)}}return t},ph=A`
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
`;var yl=ph,$s,sn,Fo;let qe=class extends fl(R){constructor(){super(),c(this,sn),c(this,$s,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",f(this,sn,Fo)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),f(this,sn,Fo).call(this,e))})}get hidden(){return a(this,$s)}set hidden(e){const t=e.toString();j(this,$s,t==="true"),a(this,$s)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),fe.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){const e=this.parentElement?.multiple,t=v`
      <span class="checkbox ${me({checked:this.selected})}">
        ${this.selected?v`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),v`<div>${H(e,()=>t)} <slot></slot></div>`}};$s=new WeakMap;sn=new WeakSet;Fo=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};qe.styles=[G,yl];o([l()],qe.prototype,"value",2);o([l({type:Boolean,reflect:!0})],qe.prototype,"hidden",1);o([l({attribute:"aria-selected",reflect:!0})],qe.prototype,"selected",2);o([l({type:Boolean,reflect:!0})],qe.prototype,"isPlaceholder",2);o([Y("isPlaceholder")],qe.prototype,"_handlePlaceholderStatusChange",1);qe=o([$("gds-option",{dependsOn:[Se]})],qe);const gh=A`
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
`;var fh=gh;let Dn=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>fe.instance.apply(this,"gds-menu-heading"))}render(){return xe`<slot></slot>`}};Dn.styles=fh;Dn=o([$("gds-menu-heading")],Dn);var Io;let us=class extends fl(R){constructor(){super(...arguments),c(this,Io,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",a(this,Io)),fe.instance.apply(this,"gds-option")}render(){return v`<div><slot></slot></div>`}};Io=new WeakMap;us.styles=[yl];us=o([$("gds-menu-item")],us);let Ze=class extends K{};Ze._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Ze._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>';Ze._name="chevron-left";Ze._width=24;Ze._height=24;Ze._viewBox="0 0 24 24";Ze=o([$("gds-icon-chevron-left")],Ze);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:yh}=jd,bh=e=>e===null||typeof e!="object"&&typeof e!="function",vh=e=>e.strings===void 0,Sa=()=>document.createComment(""),_s=(e,t,s)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(s===void 0){const r=n.insertBefore(Sa(),i),d=n.insertBefore(Sa(),i);s=new yh(r,d,e,e.options)}else{const r=s._$AB.nextSibling,d=s._$AM,h=d!==e;if(h){let u;s._$AQ?.(e),s._$AM=e,s._$AP!==void 0&&(u=e._$AU)!==d._$AU&&s._$AP(u)}if(r!==i||h){let u=s._$AA;for(;u!==r;){const g=u.nextSibling;n.insertBefore(u,i),u=g}}}return s},Ft=(e,t,s=e)=>(e._$AI(t,s),e),mh={},xh=(e,t=mh)=>e._$AH=t,wh=e=>e._$AH,po=e=>{e._$AP?.(!1,!0);let t=e._$AA;const s=e._$AB.nextSibling;for(;t!==s;){const n=t.nextSibling;t.remove(),t=n}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Os=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(t,!1),Os(n,t);return!0},Ln=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},bl=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Ch(t)}};function _h(e){this._$AN!==void 0?(Ln(this),this._$AM=e,bl(this)):this._$AM=e}function kh(e,t=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let r=s;r<n.length;r++)Os(n[r],!1),Ln(n[r]);else n!=null&&(Os(n,!1),Ln(n));else Os(this,e)}const Ch=e=>{e.type==Ys.CHILD&&(e._$AP??=kh,e._$AQ??=_h)};class vl extends js{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),bl(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(Os(this,t),Ln(this))}setValue(t){if(vh(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ml=()=>new $h;let $h=class{};const go=new WeakMap,xl=bs(class extends vl{render(e){return ge}update(e,[t]){const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),ge}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let s=go.get(t);s===void 0&&(s=new WeakMap,go.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return typeof this.Y=="function"?go.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Wn=Math.min,qt=Math.max,On=Math.round,Xs=Math.floor,Ue=e=>({x:e,y:e}),Sh={left:"right",right:"left",bottom:"top",top:"bottom"},Mh={start:"end",end:"start"};function Ma(e,t,s){return qt(e,Wn(t,s))}function Qn(e,t){return typeof e=="function"?e(t):e}function Jt(e){return e.split("-")[0]}function Jn(e){return e.split("-")[1]}function wl(e){return e==="x"?"y":"x"}function _l(e){return e==="y"?"height":"width"}function ps(e){return["top","bottom"].includes(Jt(e))?"y":"x"}function kl(e){return wl(ps(e))}function Eh(e,t,s){s===void 0&&(s=!1);const n=Jn(e),i=kl(e),r=_l(i);let d=i==="x"?n===(s?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(d=Rn(d)),[d,Rn(d)]}function Th(e){const t=Rn(e);return[Po(e),t,Po(t)]}function Po(e){return e.replace(/start|end/g,t=>Mh[t])}function Ah(e,t,s){const n=["left","right"],i=["right","left"],r=["top","bottom"],d=["bottom","top"];switch(e){case"top":case"bottom":return s?t?i:n:t?n:i;case"left":case"right":return t?r:d;default:return[]}}function zh(e,t,s,n){const i=Jn(e);let r=Ah(Jt(e),s==="start",n);return i&&(r=r.map(d=>d+"-"+i),t&&(r=r.concat(r.map(Po)))),r}function Rn(e){return e.replace(/left|right|bottom|top/g,t=>Sh[t])}function Dh(e){return{top:0,right:0,bottom:0,left:0,...e}}function Lh(e){return typeof e!="number"?Dh(e):{top:e,right:e,bottom:e,left:e}}function Vn(e){const{x:t,y:s,width:n,height:i}=e;return{width:n,height:i,top:s,left:t,right:t+n,bottom:s+i,x:t,y:s}}function Ea(e,t,s){let{reference:n,floating:i}=e;const r=ps(t),d=kl(t),h=_l(d),u=Jt(t),g=r==="y",m=n.x+n.width/2-i.width/2,b=n.y+n.height/2-i.height/2,k=n[h]/2-i[h]/2;let _;switch(u){case"top":_={x:m,y:n.y-i.height};break;case"bottom":_={x:m,y:n.y+n.height};break;case"right":_={x:n.x+n.width,y:b};break;case"left":_={x:n.x-i.width,y:b};break;default:_={x:n.x,y:n.y}}switch(Jn(t)){case"start":_[d]-=k*(s&&g?-1:1);break;case"end":_[d]+=k*(s&&g?-1:1);break}return _}const Wh=async(e,t,s)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:d}=s,h=r.filter(Boolean),u=await(d.isRTL==null?void 0:d.isRTL(t));let g=await d.getElementRects({reference:e,floating:t,strategy:i}),{x:m,y:b}=Ea(g,n,u),k=n,_={},S=0;for(let T=0;T<h.length;T++){const{name:B,fn:V}=h[T],{x:U,y:ee,data:ue,reset:te}=await V({x:m,y:b,initialPlacement:n,placement:k,strategy:i,middlewareData:_,rects:g,platform:d,elements:{reference:e,floating:t}});m=U??m,b=ee??b,_={..._,[B]:{..._[B],...ue}},te&&S<=50&&(S++,typeof te=="object"&&(te.placement&&(k=te.placement),te.rects&&(g=te.rects===!0?await d.getElementRects({reference:e,floating:t,strategy:i}):te.rects),{x:m,y:b}=Ea(g,k,u)),T=-1)}return{x:m,y:b,placement:k,strategy:i,middlewareData:_}};async function Cl(e,t){var s;t===void 0&&(t={});const{x:n,y:i,platform:r,rects:d,elements:h,strategy:u}=e,{boundary:g="clippingAncestors",rootBoundary:m="viewport",elementContext:b="floating",altBoundary:k=!1,padding:_=0}=Qn(t,e),S=Lh(_),B=h[k?b==="floating"?"reference":"floating":b],V=Vn(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(B)))==null||s?B:B.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(h.floating)),boundary:g,rootBoundary:m,strategy:u})),U=b==="floating"?{x:n,y:i,width:d.floating.width,height:d.floating.height}:d.reference,ee=await(r.getOffsetParent==null?void 0:r.getOffsetParent(h.floating)),ue=await(r.isElement==null?void 0:r.isElement(ee))?await(r.getScale==null?void 0:r.getScale(ee))||{x:1,y:1}:{x:1,y:1},te=Vn(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:h,rect:U,offsetParent:ee,strategy:u}):U);return{top:(V.top-te.top+S.top)/ue.y,bottom:(te.bottom-V.bottom+S.bottom)/ue.y,left:(V.left-te.left+S.left)/ue.x,right:(te.right-V.right+S.right)/ue.x}}const Oh=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,n;const{placement:i,middlewareData:r,rects:d,initialPlacement:h,platform:u,elements:g}=t,{mainAxis:m=!0,crossAxis:b=!0,fallbackPlacements:k,fallbackStrategy:_="bestFit",fallbackAxisSideDirection:S="none",flipAlignment:T=!0,...B}=Qn(e,t);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const V=Jt(i),U=ps(h),ee=Jt(h)===h,ue=await(u.isRTL==null?void 0:u.isRTL(g.floating)),te=k||(ee||!T?[Rn(h)]:Th(h)),wt=S!=="none";!k&&wt&&te.push(...zh(h,T,S,ue));const ro=[h,...te],ws=await Cl(t,B),ss=[];let Bt=((n=r.flip)==null?void 0:n.overflows)||[];if(m&&ss.push(ws[V]),b){const Ge=Eh(i,d,ue);ss.push(ws[Ge[0]],ws[Ge[1]])}if(Bt=[...Bt,{placement:i,overflows:ss}],!ss.every(Ge=>Ge<=0)){var qs,Zs;const Ge=(((qs=r.flip)==null?void 0:qs.index)||0)+1,ns=ro[Ge];if(ns)return{data:{index:Ge,overflows:Bt},reset:{placement:ns}};let kt=(Zs=Bt.filter(ot=>ot.overflows[0]<=0).sort((ot,Te)=>ot.overflows[1]-Te.overflows[1])[0])==null?void 0:Zs.placement;if(!kt)switch(_){case"bestFit":{var _t;const ot=(_t=Bt.filter(Te=>{if(wt){const Ae=ps(Te.placement);return Ae===U||Ae==="y"}return!0}).map(Te=>[Te.placement,Te.overflows.filter(Ae=>Ae>0).reduce((Ae,Qs)=>Ae+Qs,0)]).sort((Te,Ae)=>Te[1]-Ae[1])[0])==null?void 0:_t[0];ot&&(kt=ot);break}case"initialPlacement":kt=h;break}if(i!==kt)return{reset:{placement:kt}}}return{}}}};async function Rh(e,t){const{placement:s,platform:n,elements:i}=e,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),d=Jt(s),h=Jn(s),u=ps(s)==="y",g=["left","top"].includes(d)?-1:1,m=r&&u?-1:1,b=Qn(t,e);let{mainAxis:k,crossAxis:_,alignmentAxis:S}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:b.mainAxis||0,crossAxis:b.crossAxis||0,alignmentAxis:b.alignmentAxis};return h&&typeof S=="number"&&(_=h==="end"?S*-1:S),u?{x:_*m,y:k*g}:{x:k*g,y:_*m}}const Vh=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var s,n;const{x:i,y:r,placement:d,middlewareData:h}=t,u=await Rh(t,e);return d===((s=h.offset)==null?void 0:s.placement)&&(n=h.arrow)!=null&&n.alignmentOffset?{}:{x:i+u.x,y:r+u.y,data:{...u,placement:d}}}}},Bh=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:n,placement:i}=t,{mainAxis:r=!0,crossAxis:d=!1,limiter:h={fn:B=>{let{x:V,y:U}=B;return{x:V,y:U}}},...u}=Qn(e,t),g={x:s,y:n},m=await Cl(t,u),b=ps(Jt(i)),k=wl(b);let _=g[k],S=g[b];if(r){const B=k==="y"?"top":"left",V=k==="y"?"bottom":"right",U=_+m[B],ee=_-m[V];_=Ma(U,_,ee)}if(d){const B=b==="y"?"top":"left",V=b==="y"?"bottom":"right",U=S+m[B],ee=S-m[V];S=Ma(U,S,ee)}const T=h.fn({...t,[k]:_,[b]:S});return{...T,data:{x:T.x-s,y:T.y-n,enabled:{[k]:r,[b]:d}}}}}};function Xn(){return typeof window<"u"}function ms(e){return $l(e)?(e.nodeName||"").toLowerCase():"#document"}function Ce(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function nt(e){var t;return(t=($l(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function $l(e){return Xn()?e instanceof Node||e instanceof Ce(e).Node:!1}function Oe(e){return Xn()?e instanceof Element||e instanceof Ce(e).Element:!1}function Qe(e){return Xn()?e instanceof HTMLElement||e instanceof Ce(e).HTMLElement:!1}function Ta(e){return!Xn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ce(e).ShadowRoot}function Us(e){const{overflow:t,overflowX:s,overflowY:n,display:i}=Re(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+s)&&!["inline","contents"].includes(i)}function Fh(e){return["table","td","th"].includes(ms(e))}function Kn(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function zr(e){const t=Dr(),s=Oe(e)?Re(e):e;return s.transform!=="none"||s.perspective!=="none"||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(s.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(s.contain||"").includes(n))}function Ih(e){let t=Lt(e);for(;Qe(t)&&!gs(t);){if(zr(t))return t;if(Kn(t))return null;t=Lt(t)}return null}function Dr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function gs(e){return["html","body","#document"].includes(ms(e))}function Re(e){return Ce(e).getComputedStyle(e)}function eo(e){return Oe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Lt(e){if(ms(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ta(e)&&e.host||nt(e);return Ta(t)?t.host:t}function Sl(e){const t=Lt(e);return gs(t)?e.ownerDocument?e.ownerDocument.body:e.body:Qe(t)&&Us(t)?t:Sl(t)}function Fs(e,t,s){var n;t===void 0&&(t=[]),s===void 0&&(s=!0);const i=Sl(e),r=i===((n=e.ownerDocument)==null?void 0:n.body),d=Ce(i);if(r){const h=No(d);return t.concat(d,d.visualViewport||[],Us(i)?i:[],h&&s?Fs(h):[])}return t.concat(i,Fs(i,[],s))}function No(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ml(e){const t=Re(e);let s=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=Qe(e),r=i?e.offsetWidth:s,d=i?e.offsetHeight:n,h=On(s)!==r||On(n)!==d;return h&&(s=r,n=d),{width:s,height:n,$:h}}function Lr(e){return Oe(e)?e:e.contextElement}function cs(e){const t=Lr(e);if(!Qe(t))return Ue(1);const s=t.getBoundingClientRect(),{width:n,height:i,$:r}=Ml(t);let d=(r?On(s.width):s.width)/n,h=(r?On(s.height):s.height)/i;return(!d||!Number.isFinite(d))&&(d=1),(!h||!Number.isFinite(h))&&(h=1),{x:d,y:h}}const Ph=Ue(0);function El(e){const t=Ce(e);return!Dr()||!t.visualViewport?Ph:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Nh(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==Ce(e)?!1:t}function Xt(e,t,s,n){t===void 0&&(t=!1),s===void 0&&(s=!1);const i=e.getBoundingClientRect(),r=Lr(e);let d=Ue(1);t&&(n?Oe(n)&&(d=cs(n)):d=cs(e));const h=Nh(r,s,n)?El(r):Ue(0);let u=(i.left+h.x)/d.x,g=(i.top+h.y)/d.y,m=i.width/d.x,b=i.height/d.y;if(r){const k=Ce(r),_=n&&Oe(n)?Ce(n):n;let S=k,T=No(S);for(;T&&n&&_!==S;){const B=cs(T),V=T.getBoundingClientRect(),U=Re(T),ee=V.left+(T.clientLeft+parseFloat(U.paddingLeft))*B.x,ue=V.top+(T.clientTop+parseFloat(U.paddingTop))*B.y;u*=B.x,g*=B.y,m*=B.x,b*=B.y,u+=ee,g+=ue,S=Ce(T),T=No(S)}}return Vn({width:m,height:b,x:u,y:g})}function Wr(e,t){const s=eo(e).scrollLeft;return t?t.left+s:Xt(nt(e)).left+s}function Tl(e,t,s){s===void 0&&(s=!1);const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-(s?0:Wr(e,n)),r=n.top+t.scrollTop;return{x:i,y:r}}function Hh(e){let{elements:t,rect:s,offsetParent:n,strategy:i}=e;const r=i==="fixed",d=nt(n),h=t?Kn(t.floating):!1;if(n===d||h&&r)return s;let u={scrollLeft:0,scrollTop:0},g=Ue(1);const m=Ue(0),b=Qe(n);if((b||!b&&!r)&&((ms(n)!=="body"||Us(d))&&(u=eo(n)),Qe(n))){const _=Xt(n);g=cs(n),m.x=_.x+n.clientLeft,m.y=_.y+n.clientTop}const k=d&&!b&&!r?Tl(d,u,!0):Ue(0);return{width:s.width*g.x,height:s.height*g.y,x:s.x*g.x-u.scrollLeft*g.x+m.x+k.x,y:s.y*g.y-u.scrollTop*g.y+m.y+k.y}}function Gh(e){return Array.from(e.getClientRects())}function Yh(e){const t=nt(e),s=eo(e),n=e.ownerDocument.body,i=qt(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=qt(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let d=-s.scrollLeft+Wr(e);const h=-s.scrollTop;return Re(n).direction==="rtl"&&(d+=qt(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:d,y:h}}function jh(e,t){const s=Ce(e),n=nt(e),i=s.visualViewport;let r=n.clientWidth,d=n.clientHeight,h=0,u=0;if(i){r=i.width,d=i.height;const g=Dr();(!g||g&&t==="fixed")&&(h=i.offsetLeft,u=i.offsetTop)}return{width:r,height:d,x:h,y:u}}function Uh(e,t){const s=Xt(e,!0,t==="fixed"),n=s.top+e.clientTop,i=s.left+e.clientLeft,r=Qe(e)?cs(e):Ue(1),d=e.clientWidth*r.x,h=e.clientHeight*r.y,u=i*r.x,g=n*r.y;return{width:d,height:h,x:u,y:g}}function Aa(e,t,s){let n;if(t==="viewport")n=jh(e,s);else if(t==="document")n=Yh(nt(e));else if(Oe(t))n=Uh(t,s);else{const i=El(e);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Vn(n)}function Al(e,t){const s=Lt(e);return s===t||!Oe(s)||gs(s)?!1:Re(s).position==="fixed"||Al(s,t)}function qh(e,t){const s=t.get(e);if(s)return s;let n=Fs(e,[],!1).filter(h=>Oe(h)&&ms(h)!=="body"),i=null;const r=Re(e).position==="fixed";let d=r?Lt(e):e;for(;Oe(d)&&!gs(d);){const h=Re(d),u=zr(d);!u&&h.position==="fixed"&&(i=null),(r?!u&&!i:!u&&h.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Us(d)&&!u&&Al(e,d))?n=n.filter(m=>m!==d):i=h,d=Lt(d)}return t.set(e,n),n}function Zh(e){let{element:t,boundary:s,rootBoundary:n,strategy:i}=e;const d=[...s==="clippingAncestors"?Kn(t)?[]:qh(t,this._c):[].concat(s),n],h=d[0],u=d.reduce((g,m)=>{const b=Aa(t,m,i);return g.top=qt(b.top,g.top),g.right=Wn(b.right,g.right),g.bottom=Wn(b.bottom,g.bottom),g.left=qt(b.left,g.left),g},Aa(t,h,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Qh(e){const{width:t,height:s}=Ml(e);return{width:t,height:s}}function Jh(e,t,s){const n=Qe(t),i=nt(t),r=s==="fixed",d=Xt(e,!0,r,t);let h={scrollLeft:0,scrollTop:0};const u=Ue(0);if(n||!n&&!r)if((ms(t)!=="body"||Us(i))&&(h=eo(t)),n){const k=Xt(t,!0,r,t);u.x=k.x+t.clientLeft,u.y=k.y+t.clientTop}else i&&(u.x=Wr(i));const g=i&&!n&&!r?Tl(i,h):Ue(0),m=d.left+h.scrollLeft-u.x-g.x,b=d.top+h.scrollTop-u.y-g.y;return{x:m,y:b,width:d.width,height:d.height}}function fo(e){return Re(e).position==="static"}function za(e,t){if(!Qe(e)||Re(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return nt(e)===s&&(s=s.ownerDocument.body),s}function zl(e,t){const s=Ce(e);if(Kn(e))return s;if(!Qe(e)){let i=Lt(e);for(;i&&!gs(i);){if(Oe(i)&&!fo(i))return i;i=Lt(i)}return s}let n=za(e,t);for(;n&&Fh(n)&&fo(n);)n=za(n,t);return n&&gs(n)&&fo(n)&&!zr(n)?s:n||Ih(e)||s}const Xh=async function(e){const t=this.getOffsetParent||zl,s=this.getDimensions,n=await s(e.floating);return{reference:Jh(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Kh(e){return Re(e).direction==="rtl"}const eu={convertOffsetParentRelativeRectToViewportRelativeRect:Hh,getDocumentElement:nt,getClippingRect:Zh,getOffsetParent:zl,getElementRects:Xh,getClientRects:Gh,getDimensions:Qh,getScale:cs,isElement:Oe,isRTL:Kh};function tu(e,t){let s=null,n;const i=nt(e);function r(){var h;clearTimeout(n),(h=s)==null||h.disconnect(),s=null}function d(h,u){h===void 0&&(h=!1),u===void 0&&(u=1),r();const{left:g,top:m,width:b,height:k}=e.getBoundingClientRect();if(h||t(),!b||!k)return;const _=Xs(m),S=Xs(i.clientWidth-(g+b)),T=Xs(i.clientHeight-(m+k)),B=Xs(g),U={rootMargin:-_+"px "+-S+"px "+-T+"px "+-B+"px",threshold:qt(0,Wn(1,u))||1};let ee=!0;function ue(te){const wt=te[0].intersectionRatio;if(wt!==u){if(!ee)return d();wt?d(!1,wt):n=setTimeout(()=>{d(!1,1e-7)},1e3)}ee=!1}try{s=new IntersectionObserver(ue,{...U,root:i.ownerDocument})}catch{s=new IntersectionObserver(ue,U)}s.observe(e)}return d(!0),r}function su(e,t,s,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:h=typeof IntersectionObserver=="function",animationFrame:u=!1}=n,g=Lr(e),m=i||r?[...g?Fs(g):[],...Fs(t)]:[];m.forEach(V=>{i&&V.addEventListener("scroll",s,{passive:!0}),r&&V.addEventListener("resize",s)});const b=g&&h?tu(g,s):null;let k=-1,_=null;d&&(_=new ResizeObserver(V=>{let[U]=V;U&&U.target===g&&_&&(_.unobserve(t),cancelAnimationFrame(k),k=requestAnimationFrame(()=>{var ee;(ee=_)==null||ee.observe(t)})),s()}),g&&!u&&_.observe(g),_.observe(t));let S,T=u?Xt(e):null;u&&B();function B(){const V=Xt(e);T&&(V.x!==T.x||V.y!==T.y||V.width!==T.width||V.height!==T.height)&&s(),T=V,S=requestAnimationFrame(B)}return s(),()=>{var V;m.forEach(U=>{i&&U.removeEventListener("scroll",s),r&&U.removeEventListener("resize",s)}),b?.(),(V=_)==null||V.disconnect(),_=null,u&&cancelAnimationFrame(S)}}const Dl=Vh,nu=Bh,ou=Oh,iu=(e,t,s)=>{const n=new Map,i={platform:eu,...s},r={...i.platform,_c:n};return Wh(e,t,{...i,platform:r})};let Ho=class extends W{};Ho=o([$("gds-container")],Ho);var nn;class Ll{constructor(t){c(this,nn,s=>{const n=s.target;if(!this.host.navigableItems.includes(n))return;let i=!1;if(s.key==="ArrowDown"){const r=this.host.navigableItems.indexOf(n)+1;this.host.navigableItems[r]?.focus(),i=!0}else if(s.key==="ArrowUp"){const r=this.host.navigableItems.indexOf(n)-1;this.host.navigableItems[r]?.focus(),i=!0}else if(s.key==="Home")this.host.navigableItems[0]?.focus(),i=!0;else if(s.key==="End")this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),i=!0;else{const r=s.key.toLowerCase();if(r.length!==1)return;const d=r>="a"&&r<="z",h=r>="0"&&r<="9";(d||h)&&(this.host.navigableItems.find(g=>g.textContent?.trim().toLowerCase()?.startsWith(r))?.focus(),i=!0)}i&&(s.preventDefault(),s.stopPropagation())}),(this.host=t).addController(this)}hostConnected(){this.host.addEventListener("keydown",a(this,nn))}hostDisconnected(){this.host.removeEventListener("keydown",a(this,nn))}}nn=new WeakMap;function Wl(e){let t=e;for(;t.assignedElements().length>0&&t.assignedElements()[0].nodeName==="SLOT";)t=t.assignedElements()[0];return t}var Ss;let Go=class extends R{constructor(){super(),c(this,Ss,ml()),new Ll(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),fe.instance.apply(this,"gds-listbox")}get navigableItems(){return a(this,Ss).value?Wl(a(this,Ss).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){this.navigableItems[0]?.focus()}render(){return v`<slot ${xl(a(this,Ss))}></slot>`}};Ss=new WeakMap;Go=o([$("gds-menu",{dependsOn:[us]})],Go);let Je=class extends K{};Je._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';Je._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>';Je._name="cross-small";Je._width=24;Je._height=24;Je._viewBox="0 0 24 24";Je=o([$("gds-icon-cross-small")],Je);const ru=A`
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
`;var au=ru,Yo,Ol,Zt,Bn,Mt,Ms,Et,jo,on,Uo,qo,Rl,Zo,Vl,rn,Qo,to,so,an,ln,Es;let O=class extends R{constructor(){super(...arguments),c(this,Yo),c(this,on),c(this,qo),c(this,Zo),c(this,rn),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.autofocus=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>`${window.innerHeight-16}px`,this.nonmodal=!1,this.floatingUIMiddleware=O.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,c(this,Zt,void 0),c(this,Bn,!1),c(this,Mt,void 0),c(this,Ms,()=>{a(this,Et).call(this,"cancel")&&(this.open=!1)}),c(this,Et,e=>{const t=e==="show";return this.dispatchCustomEvent("gds-ui-state",{detail:{open:t,reason:e},bubbles:!1,composed:!1,cancelable:!0})}),c(this,jo,e=>{e.stopPropagation(),e.preventDefault(),a(this,Et).call(this,"close")&&(this.open=!1,setTimeout(()=>this._trigger?.focus(),250))}),c(this,to,e=>{(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),this.open=!0,a(this,Et).call(this,"show")),e.key==="Escape"&&this.open&&a(this,Ms).call(this)}),c(this,so,e=>{e.preventDefault(),a(this,Et).call(this,this.open?"close":"show")&&(this.open=!this.open)}),c(this,an,()=>{const e=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then(()=>{e?.focus()})}),c(this,ln,e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const i=s.getBoundingClientRect();!(i.top<=t.clientY&&t.clientY<=i.top+i.height&&i.left<=t.clientX&&t.clientX<=i.left+i.width)&&a(this,Et).call(this,"close")&&(this.open=!1)}}),c(this,Es,()=>{this.open&&a(this,Et).call(this,"close")&&(this.open=!1)})}_handleTriggerRefChanged(){this.triggerRef?.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){this.anchorRef?.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){f(this,on,Uo).call(this),f(this,Zo,Vl).call(this)}_handleAnchorChanged(){f(this,rn,Qo).call(this)}connectedCallback(){super.connectedCallback(),fe.instance.apply(this,"gds-popover"),f(this,on,Uo).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{e.key==="Escape"&&this.open&&(a(this,Ms).call(this),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{const t=e.target;t!==this&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1)}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),f(this,qo,Rl).call(this),window.removeEventListener("scroll",a(this,Es))}render(){return v`<slot
        name="trigger"
        @slotchange=${f(this,Yo,Ol)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${me({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&a(this,Ms).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${a(this,jo)}
              class="close"
              label="${z("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></gds-icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const e=(this.nonmodal?a(this,Mt):this._elDialog)||document;this.updateComplete.then(()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?this._elDialog?.setAttribute("open","true"):this._elDialog?.showModal(),this.autofocus&&(a(this,an).call(this),setTimeout(()=>a(this,an).call(this),250)),requestAnimationFrame(()=>{a(this,Mt)&&(a(this,Mt).show=!0)}),setTimeout(()=>e.addEventListener("click",a(this,ln)),0),window.addEventListener("scroll",a(this,Es),{passive:!0})):(this._elDialog?.close(),e.removeEventListener("click",a(this,ln)),window.removeEventListener("scroll",a(this,Es)),a(this,Mt)&&(a(this,Mt).show=!1))})}_handleBackdropChange(){const e=this.parentElement?.getRootNode();!this.backdrop||!e||j(this,Mt,e.querySelector(this.backdrop))}_handleMobileLayout(e){var t;j(this,Bn,e),e&&!this.disableMobileStyles?((t=a(this,Zt))==null||t.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("minWidth"),this.updateComplete.then(()=>{this.open&&this._elDialog?.showModal()})):this.updateComplete.then(()=>{f(this,rn,Qo).call(this)})}};Yo=new WeakSet;Ol=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};Zt=new WeakMap;Bn=new WeakMap;Mt=new WeakMap;Ms=new WeakMap;Et=new WeakMap;jo=new WeakMap;on=new WeakSet;Uo=function(){this._trigger?.addEventListener("keydown",a(this,to)),this._trigger?.addEventListener("click",a(this,so))};qo=new WeakSet;Rl=function(){var e;this._trigger?.removeEventListener("keydown",a(this,to)),this._trigger?.removeEventListener("click",a(this,so)),(e=a(this,Zt))==null||e.call(this)};Zo=new WeakSet;Vl=function(){if(this._trigger){this._trigger?.setAttribute("aria-expanded",String(this.open));const e=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||e.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const s=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";this._trigger.getAttribute(s)===null&&this._trigger.setAttribute(s,this.popupRole)}};rn=new WeakSet;Qo=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;!e||!t||a(this,Bn)&&!this.disableMobileStyles||(a(this,Zt)&&a(this,Zt).call(this),j(this,Zt,su(e,t,()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),iu(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:s,y:n})=>Object.assign(t.style,{left:`${s}px`,top:`${n}px`}))})))};to=new WeakMap;so=new WeakMap;an=new WeakMap;ln=new WeakMap;Es=new WeakMap;O.styles=oe(au);O.DefaultMiddleware=[Dl(8),nu({crossAxis:!0,padding:8})];o([l({type:Boolean,reflect:!0})],O.prototype,"open",2);o([l({attribute:"popup-role"})],O.prototype,"popupRole",2);o([l({attribute:!1})],O.prototype,"triggerRef",2);o([l({attribute:!1})],O.prototype,"anchorRef",2);o([l()],O.prototype,"label",2);o([l()],O.prototype,"placement",2);o([l({type:Boolean})],O.prototype,"disableMobileStyles",2);o([l({type:Boolean})],O.prototype,"autofocus",2);o([l({attribute:!1})],O.prototype,"calcMinWidth",2);o([l({attribute:!1})],O.prototype,"calcMaxWidth",2);o([l({attribute:!1})],O.prototype,"calcMinHeight",2);o([l({attribute:!1})],O.prototype,"calcMaxHeight",2);o([l({type:Boolean,reflect:!0})],O.prototype,"nonmodal",2);o([l()],O.prototype,"backdrop",2);o([l({attribute:!1})],O.prototype,"floatingUIMiddleware",2);o([re()],O.prototype,"_trigger",2);o([re()],O.prototype,"_anchor",2);o([re()],O.prototype,"_isVirtKbVisible",2);o([Z("slot:not([name])")],O.prototype,"_elDefaultSlot",2);o([Z('slot[name="trigger"]')],O.prototype,"_elTriggerSlot",2);o([Z("dialog")],O.prototype,"_elDialog",2);o([Y("triggerRef")],O.prototype,"_handleTriggerRefChanged",1);o([Y("anchorRef")],O.prototype,"_handleAnchorRefChanged",1);o([Y("_trigger")],O.prototype,"_handleTriggerChanged",1);o([Y("_anchor")],O.prototype,"_handleAnchorChanged",1);o([Y("open")],O.prototype,"_handleOpenChange",1);o([Y("backdrop")],O.prototype,"_handleBackdropChange",1);o([$c("(max-width: 576px)")],O.prototype,"_handleMobileLayout",1);O=o([$("gds-popover",{dependsOn:[Je]}),_e()],O);const lu=A`
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
`;var du=lu,Jo,Xo,Bl;let Ve=class extends we(ve(R)){constructor(){super(...arguments),c(this,Xo),this.open=!1,this.buttonLabel=z("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",c(this,Jo,()=>v`<gds-popover
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
        @gds-menu-item-click=${f(this,Xo,Bl)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),fe.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return v`<button
        id="trigger"
        class="icon border-0 small ${me({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${()=>this.open=!0}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:ge}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"
              fill="#353531"
            />
          </svg>
        </slot>
      </button>
      ${H(this.open,a(this,Jo))}`}};Jo=new WeakMap;Xo=new WeakSet;Bl=function(){this.open=!1};Ve.styles=[G,du];Ve.shadowRootOptions={mode:"open",delegatesFocus:!0};o([l({type:Boolean,reflect:!0})],Ve.prototype,"open",2);o([l({attribute:"button-label"})],Ve.prototype,"buttonLabel",2);o([l({attribute:"show-label",type:Boolean})],Ve.prototype,"showLabel",2);o([l()],Ve.prototype,"label",2);o([l()],Ve.prototype,"placement",2);o([Rt("#trigger")],Ve.prototype,"elTriggerBtn",2);Ve=o([$("gds-context-menu",{dependsOn:[us,Go,O]}),_e()],Ve);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*cu(e,t){const s=typeof t=="function";if(e!==void 0){let n=-1;for(const i of e)n>-1&&(yield s?t(n):t),n++,yield i}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*hu(e,t){if(e!==void 0){let s=0;for(const n of e)yield t(n,s++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Da=(e,t,s)=>{const n=new Map;for(let i=t;i<=s;i++)n.set(e[i],i);return n},uu=bs(class extends js{constructor(e){if(super(e),e.type!==Ys.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let n;s===void 0?s=t:t!==void 0&&(n=t);const i=[],r=[];let d=0;for(const h of e)i[d]=n?n(h,d):d,r[d]=s(h,d),d++;return{values:r,keys:i}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,n]){const i=wh(e),{values:r,keys:d}=this.dt(t,s,n);if(!Array.isArray(i))return this.ut=d,r;const h=this.ut??=[],u=[];let g,m,b=0,k=i.length-1,_=0,S=r.length-1;for(;b<=k&&_<=S;)if(i[b]===null)b++;else if(i[k]===null)k--;else if(h[b]===d[_])u[_]=Ft(i[b],r[_]),b++,_++;else if(h[k]===d[S])u[S]=Ft(i[k],r[S]),k--,S--;else if(h[b]===d[S])u[S]=Ft(i[b],r[S]),_s(e,u[S+1],i[b]),b++,S--;else if(h[k]===d[_])u[_]=Ft(i[k],r[_]),_s(e,i[b],i[k]),k--,_++;else if(g===void 0&&(g=Da(d,_,S),m=Da(h,b,k)),g.has(h[b]))if(g.has(h[k])){const T=m.get(d[_]),B=T!==void 0?i[T]:null;if(B===null){const V=_s(e,i[b]);Ft(V,r[_]),u[_]=V}else u[_]=Ft(B,r[_]),_s(e,i[b],B),i[T]=null;_++}else po(i[k]),k--;else po(i[b]),b++;for(;_<=S;){const T=_s(e,u[S+1]);Ft(T,r[_]),u[_++]=T}for(;b<=k;){const T=i[b++];T!==null&&po(T)}return this.ut=d,xh(e,u),Vs}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pu{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class gu{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(t=>this.q=t)}resume(){this.q?.(),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const La=e=>!bh(e)&&typeof e.then=="function",Wa=1073741823;class fu extends vl{constructor(){super(...arguments),this._$Cwt=Wa,this._$Cbt=[],this._$CK=new pu(this),this._$CX=new gu}render(...t){return t.find(s=>!La(s))??Vs}update(t,s){const n=this._$Cbt;let i=n.length;this._$Cbt=s;const r=this._$CK,d=this._$CX;this.isConnected||this.disconnected();for(let h=0;h<s.length&&!(h>this._$Cwt);h++){const u=s[h];if(!La(u))return this._$Cwt=h,u;h<i&&u===n[h]||(this._$Cwt=Wa,i=0,Promise.resolve(u).then(async g=>{for(;d.get();)await d.get();const m=r.deref();if(m!==void 0){const b=m._$Cbt.indexOf(u);b>-1&&b<m._$Cwt&&(m._$Cwt=b,m.setValue(g))}}))}return Vs}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const yu=bs(fu),bu=A`
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
`;var xs,Ko,Fl,Or,Il,Rr,Pl,Vr,Nl,Br,Hl;let ye=class extends R{constructor(){super(),c(this,Ko),c(this,Or),c(this,Rr),c(this,Vr),c(this,Br),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,c(this,xs,(e,t)=>{const n=t.target.assignedNodes({flatten:!0}),i=n.length>0&&n.some(r=>r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&r.textContent?.trim()!=="");e==="lead"?this._leadSlotOccupied=i:e==="trail"?this._trailSlotOccupied=i:e==="action"&&(this._actionSlotOccupied=i)})}connectedCallback(){super.connectedCallback(),fe.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return v`
      <div class="field ${me(e)}" part="_base">
        ${f(this,Ko,Fl).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};xs=new WeakMap;Ko=new WeakSet;Fl=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return v`
      ${f(this,Or,Il).call(this)} ${f(this,Rr,Pl).call(this)}
      <div class="${me(e)}">
        ${f(this,Vr,Nl).call(this)} ${f(this,Br,Hl).call(this)}
      </div>
    `};Or=new WeakSet;Il=function(){return v` <slot
      name="lead"
      @slotchange=${e=>a(this,xs).call(this,"lead",e)}
    ></slot>`};Rr=new WeakSet;Pl=function(){return v`<div
      class="main-slot-wrap ${me({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>a(this,xs).call(this,"main",e)}
      ></slot>
    </div>`};Vr=new WeakSet;Nl=function(){return v`
      <slot
        name="action"
        @slotchange=${e=>a(this,xs).call(this,"action",e)}
      ></slot>
    `};Br=new WeakSet;Hl=function(){return v`
      <slot
        name="trail"
        @slotchange=${e=>a(this,xs).call(this,"trail",e)}
      ></slot>
    `};ye.styles=[bu];o([l()],ye.prototype,"size",2);o([l({type:Boolean})],ye.prototype,"multiline",2);o([l({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);o([l({type:Boolean})],ye.prototype,"invalid",2);o([Z("slot:not([name])")],ye.prototype,"_mainSlotElement",2);o([re()],ye.prototype,"_leadSlotOccupied",2);o([re()],ye.prototype,"_trailSlotOccupied",2);o([re()],ye.prototype,"_actionSlotOccupied",2);o([Y("disabled")],ye.prototype,"_handleDisabledChange",1);ye=o([$("gds-field-base"),_e()],ye);const vu=A`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var mu=vu,Ts,ei;let Kt=class extends R{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,c(this,Ts,ml()),c(this,ei,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new Ll(this)}get navigableItems(){return this.visibleOptionElements}get options(){return a(this,Ts).value?Wl(a(this,Ts).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),fe.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",a(this,ei))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return v`<slot ${xl(a(this,Ts))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};Ts=new WeakMap;ei=new WeakMap;Kt.styles=mu;o([l({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],Kt.prototype,"multiple",2);o([l()],Kt.prototype,"compareWith",2);o([Y("multiple")],Kt.prototype,"_rerenderOptions",1);Kt=o([$("gds-listbox",{dependsOn:[qe]})],Kt);var no=A`
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
`;let ft=class extends K{};ft._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';ft._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>';ft._name="chevron-bottom";ft._width=24;ft._height=24;ft._viewBox="0 0 24 24";ft=o([$("gds-icon-chevron-bottom")],ft);const xu=A`
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
`;var wu=xu,It,ti,Gl,si,ni,oi,At,ii,dn,ri,ai,li,di,Yl,Fn,In,ci,jl,hi,Ul,fs,oo;let Q=class extends ne{constructor(){super(...arguments),c(this,ti),c(this,di),c(this,ci),c(this,hi),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,c(this,It,void 0),c(this,si,()=>v`
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
        @input=${e=>{this.value=e.target.value,a(this,Fn).call(this),a(this,dn).call(this,e),a(this,At).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{e.key==="ArrowDown"&&(e.preventDefault(),a(this,At).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(t=>t.focus())),e.key==="Enter"&&a(this,In).call(this)}}
      />
    `),c(this,ni,()=>v`
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
          <span>${nl(this.displayValue)}</span>
        </slot>
      </button>
    `),c(this,oi,e=>{if(this.combobox){const s=e.getBoundingClientRect(),i=window.innerHeight-s.bottom,r=s.top;let d=Math.min(r,this.maxHeight);return i>r&&(d=Math.min(i,this.maxHeight)),`${d-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),c(this,At,(e,t)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1})),c(this,ii,e=>{a(this,At).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),c(this,dn,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const s=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!s.value)return;this.options.filter(i=>!this.searchFilter(s.value,i)).forEach(i=>i.hidden=!0)}),c(this,ri,e=>{this._elListbox?.then(t=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),t.focus();return}})}),c(this,ai,e=>{if(e.key==="Tab"&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),c(this,li,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),c(this,Fn,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),c(this,In,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),c(this,fs,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&a(this,At).call(this,!1,"close")&&(this.open=!1)}),c(this,oo,e=>{e.key==="Tab"&&!this.searchable&&a(this,At).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())})}get type(){return"gds-dropdown"}get options(){return a(this,It)?Array.from(a(this,It)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(a(this,It))return Array.from(a(this,It)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){let e;return Array.isArray(this.value)?this.value.length>2?e=z(Lc`${this.value.length} selected`):e=this.value.reduce((t,s)=>t+this.options.find(n=>n.value===s)?.innerText+", ","").slice(0,-2):e=this.options.find(t=>t.selected)?.innerText,e||this.placeholder?.innerText||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}render(){return v`
      ${H(!this.plain&&!this.hideLabel,()=>v`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${H(this.supportingText.length>0,()=>v`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${a(this,oi)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[Dl(8),ou()]:O.DefaultMiddleware}
        @gds-ui-state=${a(this,ii)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.combobox&&!this.multiple?a(this,si).call(this):a(this,ni).call(this)}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${H(this.searchable,()=>v`<input
              id="searchinput"
              type="text"
              aria-label="${z("Filter available options")}"
              placeholder="${z("Search")}"
              @keydown=${a(this,ri)}
              @input=${a(this,dn)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${N(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${f(this,di,Yl)}"
          @gds-focus="${a(this,li)}"
          @keydown=${a(this,ai)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${H(f(this,ti,Gl).call(this),()=>v`
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
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){if(this.requestUpdate(),j(this,It,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:!this.combobox&&!this.placeholder&&this.options.find(e=>this.compareWith(e.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?f(this,ci,jl).call(this):(f(this,hi,Ul).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t?.scrollIntoView({block:"center"})})}};It=new WeakMap;ti=new WeakSet;Gl=function(){return!this.plain};si=new WeakMap;ni=new WeakMap;oi=new WeakMap;At=new WeakMap;ii=new WeakMap;dn=new WeakMap;ri=new WeakMap;ai=new WeakMap;li=new WeakMap;di=new WeakSet;Yl=function(){this._elListbox.then(e=>{this.multiple?this.value=e.selection.map(t=>t.value):(this.value=e.selection[0]?.value,a(this,At).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0))),a(this,Fn).call(this),a(this,In).call(this)})};Fn=new WeakMap;In=new WeakMap;ci=new WeakSet;jl=function(){this.addEventListener("blur",a(this,fs)),this.addEventListener("gds-blur",a(this,fs)),this.addEventListener("keydown",a(this,oo))};hi=new WeakSet;Ul=function(){this.removeEventListener("blur",a(this,fs)),this.removeEventListener("gds-blur",a(this,fs)),this.removeEventListener("keydown",a(this,oo))};fs=new WeakMap;oo=new WeakMap;Q.styles=[G,no,wu];o([l({attribute:"supporting-text"})],Q.prototype,"supportingText",2);o([l({type:Boolean,reflect:!0})],Q.prototype,"open",2);o([l({type:Boolean,reflect:!0})],Q.prototype,"searchable",2);o([l({type:Boolean,reflect:!0})],Q.prototype,"multiple",2);o([l({type:Boolean,reflect:!0})],Q.prototype,"combobox",2);o([l()],Q.prototype,"compareWith",2);o([l()],Q.prototype,"searchFilter",2);o([l({type:Boolean,attribute:"sync-popover-width"})],Q.prototype,"syncPopoverWidth",2);o([l({type:Number,attribute:"max-height"})],Q.prototype,"maxHeight",2);o([l()],Q.prototype,"size",2);o([l({type:Boolean,attribute:"hide-label"})],Q.prototype,"hideLabel",2);o([l({type:Boolean})],Q.prototype,"plain",2);o([l({type:Boolean})],Q.prototype,"disableMobileStyles",2);o([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],Q.prototype,"showExtendedSupportingText",2);o([Z("#trigger")],Q.prototype,"_elTriggerBtn",2);o([Rt("#listbox")],Q.prototype,"_elListbox",2);o([Z("#searchinput")],Q.prototype,"_elSearchInput",2);o([Zn({attributes:!0,childList:!0,subtree:!0,characterData:!0})],Q.prototype,"_handleLightDOMChange",1);o([Y("value")],Q.prototype,"_handleValueChange",1);o([Y("open")],Q.prototype,"_handleOpenChange",1);Q=o([$("gds-dropdown",{dependsOn:[Le,De,ye,Kt,O,Se,ft]}),_e()],Q);const Fr={fromAttribute(e){return new Date(e)},toAttribute(e){return e.toISOString()}},_u={fromAttribute(e){return e.split(",").map(t=>new Date(t.trim()))},toAttribute(e){return JSON.stringify(e.map(t=>t.toISOString()))}},ku={fromAttribute(e){return e.split(",")},toAttribute(e){return Array.isArray(e)?e.join(","):e}};let yt=class extends K{};yt._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';yt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>';yt._name="calendar";yt._width=24;yt._height=24;yt._viewBox="0 0 24 24";yt=o([$("gds-icon-calendar")],yt);let bt=class extends K{};bt._regularSVG='<path d="M7.75 4.75H3.75V9.25M7.75 4.75H16.25M7.75 4.75V2.75M16.25 4.75H20.25V9.25M16.25 4.75V2.75M11.25 20.25H3.75V9.25M3.75 9.25H20.25M20.25 9.25V11.25M17.75 14.75V18M17.75 18V21.25M17.75 18H14.5M17.75 18H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';bt._solidSVG='<path d="M8.5 2.75C8.5 2.33579 8.16421 2 7.75 2C7.33579 2 7 2.33579 7 2.75V4H3.75C3.33579 4 3 4.33579 3 4.75V20.25C3 20.6642 3.33579 21 3.75 21H11.25C11.6642 21 12 20.6642 12 20.25C12 19.8358 11.6642 19.5 11.25 19.5H4.5V10H19.5V11.25C19.5 11.6642 19.8358 12 20.25 12C20.6642 12 21 11.6642 21 11.25V4.75C21 4.33579 20.6642 4 20.25 4H17V2.75C17 2.33579 16.6642 2 16.25 2C15.8358 2 15.5 2.33579 15.5 2.75V4H8.5V2.75Z" fill="currentColor"/><path d="M18.5 14.75C18.5 14.3358 18.1642 14 17.75 14C17.3358 14 17 14.3358 17 14.75V17.25H14.5C14.0858 17.25 13.75 17.5858 13.75 18C13.75 18.4142 14.0858 18.75 14.5 18.75H17V21.25C17 21.6642 17.3358 22 17.75 22C18.1642 22 18.5 21.6642 18.5 21.25V18.75H21C21.4142 18.75 21.75 18.4142 21.75 18C21.75 17.5858 21.4142 17.25 21 17.25H18.5V14.75Z" fill="currentColor"/>';bt._name="calender-add";bt._width=24;bt._height=24;bt._viewBox="0 0 24 24";bt=o([$("gds-icon-calender-add")],bt);let Xe=class extends K{};Xe._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Xe._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>';Xe._name="chevron-right";Xe._width=24;Xe._height=24;Xe._viewBox="0 0 24 24";Xe=o([$("gds-icon-chevron-right")],Xe);var lt,cn,hn,un,pn,ui,pi,gi,fi,ql,rs,As,gn,yi,as,zs,Ds,fn;let Be=class extends R{constructor(){super(...arguments),c(this,fi),c(this,rs),c(this,gn),c(this,as),c(this,Ds),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=f(this,gn,yi).call(this,this.value,this.length),c(this,lt,""),c(this,cn,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=f(this,as,zs).call(this,e+1),f(this,rs,As).call(this)}),c(this,hn,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=f(this,as,zs).call(this,e-1),f(this,rs,As).call(this)}),c(this,un,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),c(this,pn,()=>{f(this,Ds,fn).call(this)}),c(this,ui,()=>{a(this,lt)!==""&&(f(this,Ds,fn).call(this),this.value=f(this,as,zs).call(this,parseInt(this.value.toString())),f(this,rs,As).call(this))}),c(this,pi,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?a(this,hn).call(this):a(this,cn).call(this)}),c(this,gi,e=>{let t=!1;if(e.key==="ArrowUp")a(this,cn).call(this),t=!0;else if(e.key==="ArrowDown")a(this,hn).call(this),t=!0;else{const s=parseInt(e.key);isNaN(s)||(a(this,lt).length<this.length&&(j(this,lt,a(this,lt)+s.toString()),this.value=parseInt(a(this,lt))),a(this,lt).length===this.length&&(this.value=f(this,as,zs).call(this,this.value),f(this,Ds,fn).call(this),f(this,fi,ql).call(this),f(this,rs,As).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",a(this,pi)),this.addEventListener("keydown",a(this,gi)),this.addEventListener("blur",a(this,ui)),this.addEventListener("focus",a(this,pn)),this.addEventListener("click",a(this,un)),this.addEventListener("mousedown",a(this,un))}focus(e){super.focus(e),a(this,pn).call(this)}render(){return v`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=f(this,gn,yi).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};lt=new WeakMap;cn=new WeakMap;hn=new WeakMap;un=new WeakMap;pn=new WeakMap;ui=new WeakMap;pi=new WeakMap;gi=new WeakMap;fi=new WeakSet;ql=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof Be){e.focus();break}e=e.nextElementSibling}};rs=new WeakSet;As=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};gn=new WeakSet;yi=function(e,t){return String(e).padStart(t,"0")};as=new WeakSet;zs=function(e){return Math.max(this.min,Math.min(this.max,e))};Ds=new WeakSet;fn=function(){j(this,lt,"")};Be.formAssociated=!0;o([l({type:Number})],Be.prototype,"value",2);o([l({type:Number})],Be.prototype,"length",2);o([l({type:Number,attribute:"aria-valuemin"})],Be.prototype,"min",2);o([l({type:Number,attribute:"aria-valuemax"})],Be.prototype,"max",2);o([re()],Be.prototype,"displayValue",2);o([Y("value")],Be.prototype,"_refreshDisplayValue",1);Be=o([$("gds-date-part-spinner")],Be);const Cu=A`
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
`;var Ls,bi,Zl,vi,Ql,Is,Pn,mi,Jl,xi,Xl,yn,wi,Tt,Pt,Nt,ls,Kl,_i,ki,Ci,$i,Si,Mi,Ei,Ti,Ai,Nn,zi,Di,bn,Li,Wi,at,Oi,ed,Ir,td;let P=class extends ne{constructor(){super(),c(this,bi),c(this,vi),c(this,Is),c(this,mi),c(this,xi),c(this,yn),c(this,Tt),c(this,Nt),c(this,bn),c(this,Oi),c(this,Ir),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=f(this,bn,Li).call(this,"y-m-d"),c(this,Ls,void 0),c(this,Kl,e=>{this._elTrigger.then(t=>{e.relatedTarget?.parentElement!==e.target&&document.getSelection()?.removeAllRanges()})}),c(this,_i,e=>{this._elTrigger.then(t=>{document.getSelection()?.removeAllRanges();const s=new Range;s.setStart(t.firstChild,0),s.setEnd(t.lastChild,4),document.getSelection()?.addRange(s)})}),c(this,ki,e=>{this._elFieldAsync.then(t=>{e.currentTarget===t&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),c(this,Ci,e=>{this._elFieldAsync.then(t=>{if(e.currentTarget!==t)return;e.preventDefault();const s=e.clipboardData?.getData("text/plain");if(!s)return;let n=new Date("-");const i="Invalid Date",r=s.split(this._dateFormatLayout.delimiter);if(r.length===3){const d=this._dateFormatLayout.layout,h=parseInt(r[d.findIndex(m=>m.token==="y")]),u=parseInt(r[d.findIndex(m=>m.token==="m")])-1,g=parseInt(r[d.findIndex(m=>m.token==="d")]);!isNaN(h)&&!isNaN(u)&&!isNaN(g)&&(n=new Date(`${h}-${u+1}-${g}`))}n.toString()===i&&(n=new Date(s),n.toString()===i)||(this.value=n,f(this,Tt,Pt).call(this))})}),c(this,$i,e=>{this._elSpinners[0]?.focus()}),c(this,Si,e=>{e.stopPropagation(),this.value=new Date(e.detail),this.open=!1,f(this,Tt,Pt).call(this),f(this,Nt,ls).call(this)}),c(this,Mi,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),c(this,Ei,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),c(this,Ti,e=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),c(this,Ai,e=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),c(this,Nn,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),f(this,Nt,ls).call(this)}),c(this,zi,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;if(!t){this.value=void 0,f(this,Tt,Pt).call(this);return}!St(t||new Date(0),a(this,Ls)||new Date(0))&&(this.value=new Date(t),f(this,Tt,Pt).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=a(this,Ls),f(this,Nt,ls).call(this))}}),c(this,Di,e=>{const t=Array.from(this._elSpinners).findIndex(s=>s===e.target);if(e.key==="ArrowRight"){const s=this._elSpinners[t+1];s&&s.focus()}if(e.key==="ArrowLeft"){const s=this._elSpinners[t-1];s&&s.focus()}}),c(this,Wi,(e,t)=>{a(this,at)[t]=e;const s=new Date;s.setFullYear(parseInt(a(this,at).year)),s.setMonth(parseInt(a(this,at).month)-1),s.setDate(parseInt(a(this,at).day)),s.setHours(12,0,0,0),s.toString()!=="Invalid Date"&&(this.value=s,f(this,Tt,Pt).call(this),f(this,Nt,ls).call(this))}),c(this,at,{year:"yyyy",month:"mm",day:"dd"}),Be.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(e){super.value=e}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=f(this,bn,Li).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),fe.instance.apply(this,"gds-datepicker")}focus(e){this._getValidityAnchor()?.focus(e)}render(){return v`
      ${H(!this.plain,()=>v`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${H(this.supportingText.length>0,()=>v`<span slot="supporting-text" id="supporting-text">
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
        @click=${a(this,$i)}
        @copy=${a(this,ki)}
        @paste=${a(this,Ci)}
        id="field"
      >
        <div class="spinners">
          ${cu(hu(this._dateFormatLayout.layout,(e,t)=>v`<gds-date-part-spinner
                  id="spinner-${t}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${a(this,at)[e.name]}
                  aria-valuemin=${f(this,xi,Xl).call(this,e.name)}
                  aria-valuemax=${f(this,yn,wi).call(this,e.name)}
                  aria-label=${f(this,mi,Jl).call(this,e.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${f(this,yn,wi).call(this,e.name).toString().length}
                  @keydown=${a(this,Di)}
                  @change=${s=>a(this,Wi).call(this,s.detail.value,e.name)}
                  @focus=${a(this,_i)}
                  @touchend=${s=>{this.open=!0,s.preventDefault()}}
                ></gds-date-part-spinner>`),v`<span class="separator"
              >${this._dateFormatLayout.delimiter}</span
            >`)}
        </div>
        <gds-button
          id="calendar-button"
          slot="action"
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant=${this.invalid?"negative":""}
          aria-label="${z("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          ${H(this.size==="small",()=>v`<gds-icon-calender-add
                height="16"
                stroke="2"
              ></gds-icon-calender-add>`,()=>v`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${H(f(this,bi,Zl).call(this),()=>v`<gds-form-control-footer
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
        @gds-ui-state=${a(this,zi)}
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
              @click=${a(this,Ai)}
              aria-label=${z("Previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${a(this,Mi)}
              .maxHeight=${300}
              label="${z("Month")}"
              size="small"
              class="month"
              hide-label
            >
              <gds-option value="0">${z("January")}</gds-option>
              <gds-option value="1">${z("February")}</gds-option>
              <gds-option value="2">${z("March")}</gds-option>
              <gds-option value="3">${z("April")}</gds-option>
              <gds-option value="4">${z("May")}</gds-option>
              <gds-option value="5">${z("June")}</gds-option>
              <gds-option value="6">${z("July")}</gds-option>
              <gds-option value="7">${z("August")}</gds-option>
              <gds-option value="8">${z("September")}</gds-option>
              <gds-option value="9">${z("October")}</gds-option>
              <gds-option value="10">${z("November")}</gds-option>
              <gds-option value="11">${z("December")}</gds-option>
            </gds-dropdown>
            <gds-dropdown
              .value=${this._focusedYear.toString()}
              @change=${a(this,Ei)}
              .maxHeight=${300}
              label="${z("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${uu(a(this,Oi,ed),e=>e,e=>v`<gds-option value=${e}>${e}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${a(this,Ti)}
              aria-label=${z("Next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${a(this,Si)}
            @gds-date-focused=${a(this,Nn)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${H(this.clearable||!this.hideTodayButton,()=>v`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="0 m m m"
              >
                ${H(this.clearable,()=>v` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,f(this,Nt,ls).call(this),f(this,Tt,Pt).call(this)}}
                    >
                      ${z("Clear")}
                    </gds-button>`)}
                ${yu(f(this,vi,Ql).call(this),ge)}
                ${H(!this.hideTodayButton,()=>v` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),f(this,Is,Pn).call(this,new Date)}}
                    >
                      ${z("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){j(this,at,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");j(this,at,{year:t,month:s,day:n})}_handleOpenChange(){this.open&&(j(this,Ls,this.value),this._elCalendar.then(e=>e.focus()))}};Ls=new WeakMap;bi=new WeakSet;Zl=function(){return!this.plain};vi=new WeakSet;Ql=async function(){const e=await this.getFocusedDate();let t="",s;return e&&e>this.max?(t=z("Last available date"),s=n=>{n.stopPropagation(),f(this,Is,Pn).call(this,this.max)}):e&&e<this.min&&(t=z("First available date"),s=n=>{n.stopPropagation(),f(this,Is,Pn).call(this,this.min)}),v`${H(t.length>0,()=>v`<gds-button rank="tertiary" size="small" @click=${s}>
          ${t}
        </gds-button>`,()=>ge)}`};Is=new WeakSet;Pn=function(e){const t=new Date(e);this._elCalendar.then(s=>s.focusedDate=t).then(a(this,Nn))};mi=new WeakSet;Jl=function(e){return`${{year:z("Year"),month:z("Month"),day:z("Day")}[e]} ${this.label}`};xi=new WeakSet;Xl=function(e){return{year:1900,month:1,day:1}[e]};yn=new WeakSet;wi=function(e){return{year:9999,month:12,day:31}[e]};Tt=new WeakSet;Pt=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};Nt=new WeakSet;ls=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};Kl=new WeakMap;_i=new WeakMap;ki=new WeakMap;Ci=new WeakMap;$i=new WeakMap;Si=new WeakMap;Mi=new WeakMap;Ei=new WeakMap;Ti=new WeakMap;Ai=new WeakMap;Nn=new WeakMap;zi=new WeakMap;Di=new WeakMap;bn=new WeakSet;Li=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),n=s.findIndex(u=>u==="y"),i=s.findIndex(u=>u==="m"),r=s.findIndex(u=>u==="d");if(n===-1||i===-1||r===-1)throw new Error("Invalid date format for <gds-datepicker>");const h=[n,i,r].sort((u,g)=>u-g).map(u=>s[u]).map(u=>({token:u,name:u==="y"?"year":u==="m"?"month":"day"}));return{delimiter:t,layout:h}};Wi=new WeakMap;at=new WeakMap;Oi=new WeakSet;ed=function(){const e=this.min.getFullYear(),t=this.max.getFullYear(),s=a(this,Ir,td),n=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield n);for(let i=e;i<=t;i++)yield i}}};Ir=new WeakSet;td=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};P.styles=[G,no,Cu];o([l({converter:Fr})],P.prototype,"value",1);o([l({converter:Fr})],P.prototype,"min",2);o([l({converter:Fr})],P.prototype,"max",2);o([l({type:Boolean})],P.prototype,"open",2);o([l({attribute:"supporting-text"})],P.prototype,"supportingText",2);o([l({type:String})],P.prototype,"size",2);o([l({type:Boolean})],P.prototype,"plain",2);o([l({type:Boolean,attribute:"show-week-numbers"})],P.prototype,"showWeekNumbers",2);o([l({type:Boolean,attribute:"hide-label"})],P.prototype,"hideLabel",2);o([l({type:Boolean,attribute:"clearable"})],P.prototype,"clearable",2);o([l({type:Boolean,attribute:"hide-today-button"})],P.prototype,"hideTodayButton",2);o([l()],P.prototype,"dateformat",1);o([l({type:Boolean,attribute:"disabled-weekends"})],P.prototype,"disabledWeekends",2);o([l({converter:_u,attribute:"disabled-dates"})],P.prototype,"disabledDates",2);o([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],P.prototype,"showExtendedSupportingText",2);o([Rt("#calendar-button")],P.prototype,"test_calendarButton",2);o([Z("#clear-button")],P.prototype,"test_clearButton",2);o([Z("#today-button")],P.prototype,"test_todayButton",2);o([re()],P.prototype,"_focusedMonth",2);o([re()],P.prototype,"_focusedYear",2);o([re()],P.prototype,"_dateFormatLayout",2);o([Rt("#calendar")],P.prototype,"_elCalendar",2);o([Rt("#calendar-button")],P.prototype,"_elTrigger",2);o([Rt("#field")],P.prototype,"_elFieldAsync",2);o([Jd("[role=spinbutton]")],P.prototype,"_elSpinners",2);o([Z("#field")],P.prototype,"_elField",2);o([Y("value")],P.prototype,"_handleValueChange",1);o([Y("open")],P.prototype,"_handleOpenChange",1);P=o([_e()],P);let Ri=class extends be(we(ve(P))){};Ri=o([$("gds-datepicker",{dependsOn:[ht,ut,Q,J,O,yt,bt,Ze,Xe]})],Ri);const $u=A`
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
`,Vi=new Set;function Su(){ja.instance.injectGlobalStyles("dialog-scroll-lock",A`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function Mu(e){if(Vi.add(e),!document.documentElement.classList.contains("gds-scroll-lock")){const t=Eu()+Tu();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),t<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${t}px`)}}function Oa(e){Vi.delete(e),Vi.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function Eu(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Tu(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}var Ht,Bi,vn,Fi,mn,Ii,sd,Pr,Ws;Su();let Fe=class extends be(qn(R)){constructor(){super(...arguments),c(this,Ii),this.open=!1,this.variant="default",c(this,Ht,void 0),c(this,Bi,e=>{const s=e.target.returnValue;if(s!=="prop-change"){if(!a(this,vn).call(this,s))return;this.close(s||"native-close");return}this.close(s||"native-close")}),c(this,vn,e=>(this.dispatchCustomEvent("gds-close",{detail:e}),a(this,mn).call(this,e))),c(this,Fi,e=>(this.dispatchCustomEvent("gds-show",{detail:e}),a(this,mn).call(this,e))),c(this,mn,e=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:e,open:this.open}})),c(this,Pr,e=>{this.show("slotted-trigger")}),c(this,Ws,e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const i=s.getBoundingClientRect(),r=i.top<=t.clientY&&t.clientY<=i.top+i.height&&i.left<=t.clientX&&t.clientX<=i.left+i.width,d="click-outside";!r&&a(this,vn).call(this,d)&&this.close(d)}})}show(e){this.open=!0,e&&a(this,Fi).call(this,e)}close(e){j(this,Ht,e),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),Oa(this)}render(){return v`<slot
        name="trigger"
        @slotchange=${f(this,Ii,sd)}
      ></slot>
      ${H(this.open,()=>v`<dialog
            @close=${a(this,Bi)}
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
                  label=${z("Close")}
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
                    >${z("Cancel")}</gds-button
                  >
                  <gds-button value="ok" @click=${()=>this.close("btn-ok")}
                    >Ok</gds-button
                  >
                </slot>
              </gds-flex>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){this.open?(j(this,Ht,void 0),this.updateComplete.then(()=>{this._elDialog?.showModal(),Mu(this),document.removeEventListener("click",a(this,Ws)),requestAnimationFrame(()=>document.addEventListener("click",a(this,Ws))),nc&&this._elDialog?.focus()})):(j(this,Ht,a(this,Ht)||"prop-change"),this._elDialog?.close(a(this,Ht)),Oa(this),document.removeEventListener("click",a(this,Ws)),this.requestUpdate("open"))}};Ht=new WeakMap;Bi=new WeakMap;vn=new WeakMap;Fi=new WeakMap;mn=new WeakMap;Ii=new WeakSet;sd=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const e=this._elTriggerSlot.assignedElements()[0];e?.addEventListener("click",a(this,Pr)),e?.setAttribute("aria-haspopup","dialog")}};Pr=new WeakMap;Ws=new WeakMap;Fe.styles=[$u];Fe.styleExpressionBaseSelector="dialog";o([l({type:Boolean,reflect:!0})],Fe.prototype,"open",2);o([l()],Fe.prototype,"heading",2);o([l()],Fe.prototype,"variant",2);o([Z("dialog")],Fe.prototype,"_elDialog",2);o([Z('slot[name="trigger"]')],Fe.prototype,"_elTriggerSlot",2);o([Y("open")],Fe.prototype,"_handleOpenChange",1);Fe=o([$("gds-dialog",{dependsOn:[ut,Dt,W,ht,Je]}),_e()],Fe);const Au=A`
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
`;var zu=Au;let vt=class extends R{constructor(){super(...arguments),this.level="2",this.role=null}render(){return v`<hr role=${this.role||ge} />`}};vt.styles=[G,zu];o([l()],vt.prototype,"level",2);o([x(Gs("border"))],vt.prototype,"color",2);o([x({property:"--_size",valueTemplate:e=>`var(--gds-sys-space-${e})`})],vt.prototype,"size",2);o([x()],vt.prototype,"opacity",2);o([l()],vt.prototype,"role",2);vt=o([$("gds-divider")],vt);function Nr(){return(e,t,s)=>{const n=e.connectedCallback,i=e.disconnectedCallback;e.connectedCallback=function(){n?.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{s.value?.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){i?.call(this),this.__resizeObservers[t].disconnect()}}}const Du=A`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`;let es=class extends R{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),fe.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return v`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${me(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};es.styles=[Du];o([l({reflect:!0,type:Boolean})],es.prototype,"selected",2);o([l()],es.prototype,"value",2);es=o([$("gds-filter-chip",{dependsOn:[ut,Se]})],es);const Lu=A`
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
`;var Pi,Ni,xn,Hi,nd,Gi,od;let Me=class extends ne{constructor(){super(...arguments),c(this,Hi),c(this,Gi),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,c(this,Pi,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),c(this,Ni,3),c(this,xn,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return v`<div
      class="chips ${me(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${a(this,Pi)}
        @slotchange=${f(this,Gi,od)}
        role="none"
      ></slot>
    </div>`}focus(e){this.chips[0]?.focus(e)}_getValidityAnchor(){return this.shadowRoot?.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=f(this,Hi,nd).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*a(this,Ni)&&(this._collapsed=!0,j(this,xn,s)),s>a(this,xn)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})}))}};Pi=new WeakMap;Ni=new WeakMap;xn=new WeakMap;Hi=new WeakSet;nd=function(){return this.chips[0]?.offsetHeight||0};Gi=new WeakSet;od=function(){const e=this.chips.find(t=>t.selected)?.value;e&&(this.value=e)};Me.styles=[Lu];o([l({converter:ku})],Me.prototype,"value",1);o([l({type:Boolean})],Me.prototype,"multiple",2);o([l()],Me.prototype,"label",2);o([l({type:Boolean,attribute:"row-collapse"})],Me.prototype,"rowCollapse",2);o([re()],Me.prototype,"_collapsed",2);o([Z("slot")],Me.prototype,"_elSlot",2);o([Nr()],Me.prototype,"_handleResize",1);o([Y("value")],Me.prototype,"_updateSelectedFromValue",1);Me=o([$("gds-filter-chips",{dependsOn:[es]})],Me);const Wu=A`
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
`;var Ou=Wu;let ts=class extends W{render(){return v`<slot></slot>`}};ts.styles=[G,Ou];o([x({property:"--_c"})],ts.prototype,"columns",2);o([x({...Ut,styleTemplate:(e,t)=>{const s=t[0];return`--_gap-column: ${t[1]||s}; --_gap-row: ${s};`}})],ts.prototype,"gap",2);o([x({property:"--_col-width",valueTemplate:e=>`${isNaN(e)?e:`${e}px`}`})],ts.prototype,"auto-columns",2);ts=o([$("gds-grid")],ts);let Hn=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return v`<slot></slot>`}};Hn=o([$("gds-list-item")],Hn);let Gn=class extends R{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),fe.instance.apply(this,"gds-grouped-list")}render(){return v`${H(this.label,()=>v`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};o([l()],Gn.prototype,"label",2);Gn=o([$("gds-grouped-list",{dependsOn:[Hn]})],Gn);let mt=class extends K{};mt._regularSVG='<path d="M19.25 9.25V17.25M15.25 17.25V9.25M4.75 9.25V17.25M8.75 17.25V9.25M2.75 7.17308L12 2.5L21.25 7.17308V9.25H2.75V7.17308ZM2.75 20.25H21.25L20.25 17.25H3.75L2.75 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>';mt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3382 1.83058C12.1255 1.72314 11.8745 1.72314 11.6618 1.83058L2.41181 6.50365C2.15926 6.63125 2.00001 6.89012 2.00001 7.17308V9.25C2.00001 9.66421 2.33579 10 2.75001 10H4.00001V16.5H3.75001C3.42718 16.5 3.14058 16.7066 3.03849 17.0128L2.03849 20.0128C1.96226 20.2415 2.00061 20.493 2.14157 20.6885C2.28254 20.8841 2.50892 21 2.75001 21H21.25C21.4911 21 21.7175 20.8841 21.8584 20.6885C21.9994 20.493 22.0378 20.2415 21.9615 20.0128L20.9615 17.0128C20.8594 16.7066 20.5728 16.5 20.25 16.5H20V10H21.25C21.6642 10 22 9.66421 22 9.25V7.17308C22 6.89012 21.8408 6.63125 21.5882 6.50365L12.3382 1.83058ZM16 10H18.5V16.5H16V10ZM8.00001 16.5H5.50001V10H8.00001V16.5ZM9.50001 16.5V10H14.5V16.5H9.50001Z" fill="currentColor"/>';mt._name="bank";mt._width=24;mt._height=24;mt._viewBox="0 0 24 24";mt=o([$("gds-icon-bank")],mt);let Ke=class extends K{};Ke._regularSVG='<path d="M4.75 4.75L19.25 19.25M19.25 4.75L4.75 19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';Ke._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.11612 4.11612C4.60427 3.62796 5.39573 3.62796 5.88388 4.11612L12 10.2322L18.1161 4.11612C18.6043 3.62796 19.3957 3.62796 19.8839 4.11612C20.372 4.60427 20.372 5.39573 19.8839 5.88388L13.7678 12L19.8839 18.1161C20.372 18.6043 20.372 19.3957 19.8839 19.8839C19.3957 20.372 18.6043 20.372 18.1161 19.8839L12 13.7678L5.88388 19.8839C5.39573 20.372 4.60427 20.372 4.11612 19.8839C3.62796 19.3957 3.62796 18.6043 4.11612 18.1161L10.2322 12L4.11612 5.88388C3.62796 5.39573 3.62796 4.60427 4.11612 4.11612Z" fill="currentColor"/>';Ke._name="cross-large";Ke._width=24;Ke._height=24;Ke._viewBox="0 0 24 24";Ke=o([$("gds-icon-cross-large")],Ke);let xt=class extends K{};xt._regularSVG='<path d="M6.75 12H17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';xt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 11.5858 6.33579 11.25 6.75 11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H6.75C6.33579 12.75 6 12.4142 6 12Z" fill="currentColor"/>';xt._name="minus-small";xt._width=24;xt._height=24;xt._viewBox="0 0 24 24";xt=o([$("gds-icon-minus-small")],xt);const Ru=A`
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
`;var Vu=Ru;let et=class extends mr(be(qn(R))){render(){return v`<img src="${this.src}" alt="${this.alt}" />`}};et.styles=[G,Vu];o([x()],et.prototype,"aspect-ratio",2);o([x({property:"border-radius",valueTemplate:e=>`var(--gds-sys-space-${e})`})],et.prototype,"border-radius",2);o([x({selector:"img"})],et.prototype,"object-fit",2);o([x({selector:"img"})],et.prototype,"object-position",2);o([l()],et.prototype,"src",2);o([l()],et.prototype,"alt",2);et=o([$("gds-img")],et);const Bu=A``;var Yi,id,Hr,Gr,ji,Yr,Ui,rd,jr,ad,Ur,ld,qr,dd,Zr,cd,qi,hd;let X=class extends ne{constructor(){super(),c(this,Yi),c(this,Ui),c(this,jr),c(this,Ur),c(this,qr),c(this,Zr),c(this,qi),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autofocus=!1,this.spellcheck=!0,c(this,Hr,e=>{const t=e.target;this.value=t.value}),c(this,Gr,e=>{const t=e.target;this.value=t.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),c(this,ji,()=>{this.elInputAsync.then(e=>e.focus())}),c(this,Yr,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}focus(e){this._getValidityAnchor()?.focus(e)}render(){return v`
      ${H(!this.plain,()=>v`<gds-form-control-header class="size-${this.size}">
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
        @click=${a(this,ji)}
        id="field"
      >
        ${f(this,Ui,rd).call(this)}
      </gds-field-base>
      ${H(f(this,Yi,id).call(this),()=>v` <gds-form-control-footer
            class="size-${this.size}"
            .charCounter=${a(this,qi,hd)?this.maxlength-(this.value?.length||0):void 0}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_getValidityAnchor(){return this.elInput}};Yi=new WeakSet;id=function(){return!this.plain};Hr=new WeakMap;Gr=new WeakMap;ji=new WeakMap;Yr=new WeakMap;Ui=new WeakSet;rd=function(){return[f(this,jr,ad).call(this),f(this,qr,dd).call(this),f(this,Zr,cd).call(this),f(this,Ur,ld).call(this)].map(t=>v`${t}`)};jr=new WeakSet;ad=function(){return v` <slot slot="lead" name="lead"></slot> `};Ur=new WeakSet;ld=function(){return v`<slot slot="trail" name="trail"></slot>`};qr=new WeakSet;dd=function(){return v`
      <input
        class="native-control"
        @input=${a(this,Hr)}
        @change=${a(this,Gr)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-label=${this.plain&&this.label||ge}
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
    `};Zr=new WeakSet;cd=function(){return this.clearable&&(this.value?.length||0)>0?v`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${z("Clear input")}"
        @click=${a(this,Yr)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-large />
      </gds-button>`:ge};qi=new WeakSet;hd=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};X.styles=[G,no,Bu];o([l({attribute:"supporting-text"})],X.prototype,"supportingText",2);o([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],X.prototype,"showExtendedSupportingText",2);o([l({type:Boolean})],X.prototype,"clearable",2);o([l({type:Number})],X.prototype,"maxlength",2);o([l({type:String})],X.prototype,"size",2);o([l({type:Boolean})],X.prototype,"plain",2);o([l({reflect:!0})],X.prototype,"type",2);o([l()],X.prototype,"min",2);o([l()],X.prototype,"max",2);o([l()],X.prototype,"step",2);o([l()],X.prototype,"autocapitalize",2);o([l()],X.prototype,"autocorrect",2);o([l()],X.prototype,"autocomplete",2);o([l({type:Boolean})],X.prototype,"autofocus",2);o([l()],X.prototype,"enterkeyhint",2);o([l({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],X.prototype,"spellcheck",2);o([l()],X.prototype,"inputmode",2);o([Rt("input")],X.prototype,"elInputAsync",2);o([Z("input")],X.prototype,"elInput",2);X=o([_e()],X);let Zi=class extends be(we(ve(X))){};Zi=o([$("gds-input",{dependsOn:[Le,De,ye,ht,ut,Ke]})],Zi);const Fu=A`
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
`;var Iu=Fu,Qi,ud;let Ie=class extends we(be(ve(R))){constructor(){super(...arguments),c(this,Qi),this.href="",this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return vs`
      <a
        href=${N(this.href)}
        target=${N(this.target)}
        rel=${N(this.rel||a(this,Qi,ud))}
        download=${N(this.download)}
        aria-label=${this.label||ge}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};Qi=new WeakSet;ud=function(){return this.target==="_blank"?"noreferrer noopener":void 0};Ie.styles=[G,oe(Iu)];Ie.shadowRootOptions={mode:"open",delegatesFocus:!0};o([l()],Ie.prototype,"href",2);o([l()],Ie.prototype,"target",2);o([l()],Ie.prototype,"rel",2);o([l()],Ie.prototype,"label",2);o([l()],Ie.prototype,"download",2);o([x({valueTemplate:e=>e,selector:"a"})],Ie.prototype,"text-decoration",2);Ie=o([$("gds-link")],Ie);const Pu=A`
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
`;var Nu=Pu;let tt=class extends ht{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.inset="0"}render(){return vs`<div part="mask"></div>
      <div part="content"><slot></slot></div>`}};tt.styles=[G,Nu];o([x({selector:'[part="mask"]',valueTemplate:e=>{const[t]=e.split("/");return`linear-gradient(to ${t}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`}})],tt.prototype,"mask-image",2);o([x({valueTemplate:e=>e,selector:'[part="mask"]'})],tt.prototype,"mask-size",2);o([x({valueTemplate:e=>e,selector:'[part="mask"]'})],tt.prototype,"mask-repeat",2);o([x({valueTemplate:e=>e,selector:'[part="mask"]'})],tt.prototype,"mask-position",2);o([x({selector:'[part="mask"]',valueTemplate:function(e){const[t,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-background-${t}) ${parseFloat(s)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-background-${t})`}})],tt.prototype,"background-color",2);o([x({valueTemplate:e=>e,selector:'[part="mask"]'})],tt.prototype,"backdrop-filter",2);tt=o([$("gds-mask")],tt);const Hu=A`
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
`;var Gu=Hu,Gt,ds,Ji,pd;let $e=class extends be(ve(R)){constructor(){super(),c(this,Gt),c(this,Ji),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const e={button:!0,selected:this.selected,compact:this.compact},t=a(this,Gt,ds)?Tn`a`:Tn`button`;return vs`
      <${t}
        class="${me(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${N(a(this,Gt,ds)?this.href:void 0)}
        target=${N(a(this,Gt,ds)?this.target:void 0)}
        rel=${N(a(this,Gt,ds)?this.rel||a(this,Ji,pd):void 0)}
        download=${N(a(this,Gt,ds)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${t}>
    `}};Gt=new WeakSet;ds=function(){return this.href.length>0};Ji=new WeakSet;pd=function(){return this.target==="_blank"?"noreferrer noopener":void 0};$e.styles=[G,oe(Gu)];$e.shadowRootOptions={mode:"open",delegatesFocus:!0};o([l({type:Boolean,reflect:!0})],$e.prototype,"disabled",2);o([l()],$e.prototype,"label",2);o([l()],$e.prototype,"href",2);o([l()],$e.prototype,"target",2);o([l()],$e.prototype,"rel",2);o([l()],$e.prototype,"download",2);o([l({type:Boolean,reflect:!0})],$e.prototype,"compact",2);o([l({type:Boolean,reflect:!0})],$e.prototype,"selected",2);$e=o([$("gds-menu-button")],$e);const Yu=A`
  :host {
    /* Font Sizes */
    --_font-size-label: var(--gds-sys-text-size-detail-m);
    --_line-height-label: var(--gds-sys-text-line-height-detail-m);
    --_font-size-supporting-text: var(--gds-sys-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-sys-text-line-height-detail-s);
    font-size: var(--_font-size-label);
    line-height: var(--_line-height-label);

    /* Color */
    --_radio-label-color: var(--gds-sys-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --_radio-label-color: var(--gds-sys-color-l3-content-negative);
  }

  :host([size='small']) {
    --_font-size-label: var(--gds-sys-text-size-detail-s);
    --_line-height-label: var(--gds-sys-text-line-height-detail-s);
    --_font-size-supporting-text: var(--gds-sys-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-sys-text-line-height-detail-s);
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }

  .content {
    display: flex;
    position: relative;
    max-width: max-content;
    color: var(--_radio-label-color);
  }

  .direction-row .content {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gds-sys-space-l);
  }

  .direction-column .content {
    flex-direction: column;
    gap: var(--gds-sys-space-xs);
  }
`;var wn,Xi,Qr,gd,io,Jr,Xr,fd,Kr,yd,Yn,Ki,er,bd,ea,vd,ta,md,sa,xd;let Pe=class extends ne{constructor(){super(...arguments),c(this,wn),c(this,Qr),c(this,io),c(this,Xr),c(this,Kr),c(this,Yn),c(this,er),c(this,ea),c(this,ta),c(this,sa),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0,this.updateComplete.then(()=>{this._syncRadioStates(),f(this,wn,Xi).call(this)}),this.addEventListener("invalid",this._syncRadioStates)}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}focus(e){this._getValidityAnchor()?.focus(e)}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected&&(this._syncRadioStates(),this.updateComplete.then(()=>{f(this,wn,Xi).call(this)}))}_syncRadioStates(){this._isConnected&&this.radios.forEach(e=>{e.checked=e.value===this.value,e.size=this.size,e.invalid=this.invalid})}render(){const e={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return v`<div
      role="radiogroup"
      id="radiogroup"
      class=${me(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${f(this,er,bd).call(this)}
    </div>`}};wn=new WeakSet;Xi=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(t=>t.checked);e?(e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter(t=>!t.checked).forEach(t=>t.setAttribute("tabindex","-1"))};Qr=new WeakSet;gd=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(s=>s.checked),t=e||this.radios[0];t&&(t.focus(),e||(this.radios.forEach(s=>s.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))};io=new WeakSet;Jr=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{composed:!0,bubbles:!0})),this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};Xr=new WeakSet;fd=function(e){e.stopPropagation();const t=e.target;this.value=t.value,this._syncRadioStates(),f(this,io,Jr).call(this)};Kr=new WeakSet;yd=function(e){if(!this._isConnected)return;const t=this.radios.filter(n=>!n.disabled);if(t.length===0)return;let s=t.findIndex(n=>document.activeElement===n);switch(s===-1&&(s=t.findIndex(n=>n.checked),s===-1&&(s=0)),e.key){case"ArrowDown":case"ArrowRight":{e.preventDefault();const n=(s+1)%t.length;f(this,Yn,Ki).call(this,t[n]);break}case"ArrowUp":case"ArrowLeft":{e.preventDefault();const n=(s-1+t.length)%t.length;f(this,Yn,Ki).call(this,t[n]);break}default:return}};Yn=new WeakSet;Ki=function(e){!this._contentElement||!this._isConnected||(this.radios.forEach(t=>t.setAttribute("tabindex","-1")),e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),e.checked=!0,e.focus(),this.value=e.value,this._syncRadioStates(),f(this,io,Jr).call(this))};er=new WeakSet;bd=function(){return[f(this,ea,vd).call(this),f(this,ta,md).call(this),f(this,sa,xd).call(this)].map(t=>v`${t}`)};ea=new WeakSet;vd=function(){if(this.label)return v` <gds-form-control-header
        class="size-${this.size}"
        .showExtendedSupportingText="${this.showExtendedSupportingText}"
      >
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};ta=new WeakSet;md=function(){return v` <div
      class="content"
      @keydown=${f(this,Kr,yd)}
      @focus=${f(this,Qr,gd)}
    >
      <slot @input=${f(this,Xr,fd)}></slot>
    </div>`};sa=new WeakSet;xd=function(){return v` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};Pe.styles=[G,Yu];o([l()],Pe.prototype,"size",2);o([l()],Pe.prototype,"direction",2);o([l({attribute:"supporting-text"})],Pe.prototype,"supportingText",2);o([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],Pe.prototype,"showExtendedSupportingText",2);o([Z(".content")],Pe.prototype,"_contentElement",2);o([Y("value")],Pe.prototype,"_handleValueChange",1);o([Y("invalid")],Pe.prototype,"_syncRadioStates",1);Pe=o([_e()],Pe);let tr=class extends ve(we(be(Pe))){};tr=o([$("gds-radio-group",{dependsOn:[Le,De]})],tr);const ju=A`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-sys-color-l3-content-disabled);
    cursor: default;
  }

  :host(:focus) {
    outline: none;
  }
`;var _n,sr;let Ne=class extends R{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,c(this,_n,e=>{this.disabled||!this.value||!this.label||(e.preventDefault(),this.checked=!0,this.focus(),this.dispatchStandardEvent("input",{bubbles:!0}))}),c(this,sr,e=>{this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.checked=!0,this.dispatchStandardEvent("input",{bubbles:!0}))}),this.addEventListener("keydown",a(this,sr)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",a(this,_n))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}updated(e){super.updated(e),(e.has("checked")||e.has("disabled")||e.has("invalid"))&&this._updateAriaState()}render(){return v`
      <gds-toggle-control-base type="radio">
        <label slot="label" @click=${a(this,_n)}> ${this.label} </label>
        <span slot="supporting-text"> ${this.supportingText} </span>
        ${uh({checked:this.checked,disabled:this.disabled,indeterminate:!1,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}};_n=new WeakMap;sr=new WeakMap;Ne.styles=[pl,ju];o([l()],Ne.prototype,"label",2);o([l({attribute:"supporting-text"})],Ne.prototype,"supportingText",2);o([l()],Ne.prototype,"value",2);o([l({type:Boolean,reflect:!0})],Ne.prototype,"checked",2);o([l({type:Boolean,reflect:!0})],Ne.prototype,"disabled",2);o([l({type:Boolean})],Ne.prototype,"invalid",2);o([re()],Ne.prototype,"_isFocused",2);Ne=o([$("gds-radio",{dependsOn:[Qt]})],Ne);const Uu=`@layer base {
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
`;let Wt=class extends be(R){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),fe.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return v`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};Wt.styles=[...G,oe(Uu)];o([l({type:Boolean,reflect:!0})],Wt.prototype,"selected",2);o([l()],Wt.prototype,"value",2);o([l({type:Boolean,reflect:!0})],Wt.prototype,"disabled",2);Wt=o([$("gds-segment")],Wt);const qu=`@layer base {
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
`;var zt,nr,wd,or,ir,rr,Rs,kn,ar,lr;const Zu=(e,t)=>{let s;return()=>{clearTimeout(s),s=setTimeout(e,t)}};let Ee=class extends ve(be(we(R))){constructor(){super(...arguments),c(this,nr),this.size="medium",c(this,zt,void 0),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,c(this,or,()=>{const e=this.segments.filter((t,s,n)=>n[s+1]?.isVisible&&!t.isVisible)[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),c(this,ir,()=>{const e=this.segments.filter((t,s,n)=>n[s-1]?.isVisible&&!t.isVisible).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),c(this,rr,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),c(this,Rs,Zu(a(this,rr),50)),c(this,kn,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,s=e.offsetLeft;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),c(this,ar,e=>{const t=this.segments.find(s=>s===e.target||s.contains(e.target));t&&(this.segments.forEach(s=>s.selected=!1),t.selected=!0,j(this,zt,t.value),a(this,kn).call(this),this.dispatchCustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0}))}),c(this,lr,()=>{a(this,zt)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===a(this,zt));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return a(this,zt)}set value(e){j(this,zt,e),a(this,lr).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),fe.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{a(this,Rs).call(this)})})}render(){return v`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${a(this,or)}
        aria-label=${z("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${a(this,ar)}
          @slotchange=${f(this,nr,wd)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${a(this,ir)}
        aria-label=${z("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{a(this,Rs).call(this),a(this,kn).call(this)})}};zt=new WeakMap;nr=new WeakSet;wd=function(){const e=this.segments.find(t=>t.selected)?.value;e&&j(this,zt,e),this.intersectionObserver?.disconnect(),this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(s=>{const n=s.target;n._isVisible=s.intersectionRatio>.99,a(this,Rs).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(t=>{this.intersectionObserver?.observe(t)})};or=new WeakMap;ir=new WeakMap;rr=new WeakMap;Rs=new WeakMap;kn=new WeakMap;ar=new WeakMap;lr=new WeakMap;Ee.styles=[G,oe(qu)];o([l({reflect:!0})],Ee.prototype,"size",2);o([l()],Ee.prototype,"value",1);o([Z("slot")],Ee.prototype,"_elSlot",2);o([Z("#indicator")],Ee.prototype,"_elIndicator",2);o([Z("#track")],Ee.prototype,"_elTrack",2);o([re()],Ee.prototype,"_showPrevButton",2);o([re()],Ee.prototype,"_showNextButton",2);o([Nr(),Y("value")],Ee.prototype,"_recalculateMinWidth",1);Ee=o([$("gds-segmented-control",{dependsOn:[Wt,Ze,Xe]}),_e()],Ee);const Qu=A`
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
`;var Ju=Qu;let Ps=class extends R{render(){return vs`<div part="signal"></div>`}};Ps.styles=[G,Ju];o([x({valueTemplate:e=>`var(--gds-color-${e})`,selector:'[part="signal"]'})],Ps.prototype,"color",2);Ps=o([$("gds-signal")],Ps);let Ns=class extends R{render(){return v``}};Ns.styles=[G];o([x({property:"height",valueTemplate:e=>`var(--gds-sys-space-${e})`})],Ns.prototype,"size",2);Ns=o([$("gds-spacer")],Ns);const _d=A`
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
`,Xu=A`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var Ku=Xu;let st=class extends W{constructor(){super(...arguments),this.tag="span"}render(){const e=wc(encodeURI(this.tag));return vs`<${e} tag><slot></slot></${e}>`}};st.styles=[G,_d,Ku];o([l({type:String})],st.prototype,"tag",2);o([x({selector:"[tag]",styleTemplate:(e,t)=>{const s=t[0],n=`font-size: var(--gds-sys-text-size-${s});`,i=`line-height: var(--gds-sys-text-line-height-${s});`;return n+i}})],st.prototype,"font-size",2);o([x({selector:"[tag]",valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],st.prototype,"font-weight",2);o([x()],st.prototype,"text-transform",2);o([x({selector:"[tag]"})],st.prototype,"text-decoration",2);o([x({selector:"[tag]",styleTemplate:(e,t)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${t[0]};
      -webkit-box-orient: vertical;`})],st.prototype,"lines",2);st=o([$("gds-text")],st);const ep=A`
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
`;var dr,kd,na,oa,ia,cr,ra,hr,Cd,aa,$d,la,Sd,da,Md,ca,Ed,ur,Td;let q=class extends ne{constructor(){super(),c(this,dr),c(this,hr),c(this,aa),c(this,la),c(this,da),c(this,ca),c(this,ur),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.showExtendedSupportingText=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.autocapitalize="off",this.autofocus=!1,this.spellcheck=!0,this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},c(this,na,e=>{const t=e.target;this.value=t.value}),c(this,oa,e=>{const t=e.target;this.value=t.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),c(this,ia,e=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),c(this,cr,()=>{this.elTextareaAsync.then(e=>e.focus())}),c(this,ra,()=>{this.value="",this.elTextareaAsync.then(e=>{if(this.resizable==="manual")e.style.height="";else if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString()),e.style.height=""}}),this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}focus(e){this._getValidityAnchor()?.focus(e)}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{const e=this.fieldBase?.shadowRoot;if(!e)return;const t=e.querySelector(".right");if(t){const s=t.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${s.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return v`
      ${H(!this.plain,()=>v`<gds-form-control-header
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
        @click=${a(this,cr)}
        multiline
      >
        ${f(this,hr,Cd).call(this)}
      </gds-field-base>

      ${H(f(this,dr,kd).call(this),()=>v`<gds-form-control-footer
            id="footer"
            class="size-${this.size}"
            .charCounter=${a(this,ur,Td)?this.maxlength-(this.value?.length||0):void 0}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(e.value===""){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=getComputedStyle(e),s=parseFloat(t.lineHeight),n=e.scrollHeight,i=Math.ceil(n/s),r=this._initialRows??this._defaultRows;this.rows=Math.max(r,i),e.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(e=>{this.resizable==="false"&&e.style.setProperty("--_lines",this.rows.toString())})}};dr=new WeakSet;kd=function(){return!this.plain};na=new WeakMap;oa=new WeakMap;ia=new WeakMap;cr=new WeakMap;ra=new WeakMap;hr=new WeakSet;Cd=function(){return[f(this,aa,$d).call(this),f(this,da,Md).call(this),f(this,ca,Ed).call(this),f(this,la,Sd).call(this)].map(t=>v`${t}`)};aa=new WeakSet;$d=function(){return v`<slot slot="lead" name="lead"></slot>`};la=new WeakSet;Sd=function(){return v`<slot slot="trail" name="trail"></slot>`};da=new WeakSet;Md=function(){return v`
      <textarea
        @input=${a(this,na)}
        @change=${a(this,oa)}
        @paste=${a(this,ia)}
        .value=${this.value}
        id="input"
        class="native-control resize-${this.resizable}"
        aria-label=${this.plain&&this.label||ge}
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
    `};ca=new WeakSet;Ed=function(){return this.clearable&&(this.value?.length||0)>0?v`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${z("Clear input")}"
          @click=${a(this,ra)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:ge};ur=new WeakSet;Td=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};q.styles=[G,no,ep];o([x({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],q.prototype,"rows",2);o([l({attribute:"supporting-text"})],q.prototype,"supportingText",2);o([l({type:Boolean})],q.prototype,"clearable",2);o([l({type:String})],q.prototype,"resizable",2);o([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],q.prototype,"showExtendedSupportingText",2);o([l({type:Number})],q.prototype,"maxlength",2);o([l({type:String})],q.prototype,"size",2);o([l({type:Boolean})],q.prototype,"plain",2);o([l()],q.prototype,"autocapitalize",2);o([l()],q.prototype,"autocorrect",2);o([l()],q.prototype,"autocomplete",2);o([l({type:Boolean})],q.prototype,"autofocus",2);o([l({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],q.prototype,"spellcheck",2);o([l()],q.prototype,"wrap",2);o([l()],q.prototype,"enterkeyhint",2);o([l()],q.prototype,"inputmode",2);o([Rt("textarea")],q.prototype,"elTextareaAsync",2);o([Z("textarea")],q.prototype,"elTextarea",2);o([Z("gds-field-base")],q.prototype,"fieldBase",2);o([Nr()],q.prototype,"_handleResize",1);o([Y("value")],q.prototype,"_setAutoHeight",1);o([Y("rows")],q.prototype,"_handleRowsChange",1);q=o([_e()],q);let pr=class extends ve(be(we(q))){};pr=o([$("gds-textarea",{dependsOn:[Le,De,ut,ye,Ke]})],pr);let Ot=class extends R{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2016"}connectedCallback(){super.connectedCallback(),fe.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",oe(`:host {${vo}}`))}render(){return v`<slot></slot>`}_onColorSchemeChange(){this.colorScheme==="dark"?this._dynamicStylesController.inject("color-scheme",oe(`:host { ${vo}}`)):this._dynamicStylesController.inject("color-scheme",oe(`:host { ${Pa}}`)),this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};Ot.styles=[G,A`
      :host {
        display: contents;
      }
    `];o([l({reflect:!0,attribute:"color-scheme"})],Ot.prototype,"colorScheme",2);o([l({reflect:!0,attribute:"design-version"})],Ot.prototype,"designVersion",2);o([Y("colorScheme")],Ot.prototype,"_onColorSchemeChange",1);o([Y("designVersion")],Ot.prototype,"_onDesignVersionChange",1);Ot=o([$("gds-theme")],Ot);const tp=A`
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
`;var sp=tp;let ce=class extends be(qn(we(ve(mr(R))))){applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return v`<video></video>`}firstUpdated(){this.applyVideoSettings()}};ce.styles=[G,sp];o([x()],ce.prototype,"aspect-ratio",2);o([x({selector:"video"})],ce.prototype,"object-position",2);o([x()],ce.prototype,"opacity",2);o([x({selector:"video"})],ce.prototype,"object-fit",2);o([x({selector:"video"})],ce.prototype,"pointer-events",2);o([x({valueTemplate:e=>`var(--gds-sys-space-${e})`})],ce.prototype,"border-radius",2);o([l()],ce.prototype,"src",2);o([l()],ce.prototype,"poster",2);o([l({type:Boolean})],ce.prototype,"muted",2);o([l({type:Boolean})],ce.prototype,"playsinline",2);o([l({type:Boolean})],ce.prototype,"autoplay",2);o([l({type:Boolean})],ce.prototype,"loop",2);o([Z("video")],ce.prototype,"videoElement",2);ce=o([$("gds-video")],ce);const np=A`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-sys-color-l3-content-disabled);
    cursor: default;
  }

  :host(:invalid) {
    color: var(--gds-sys-color-l3-content-negative);
  }

  :host(:focus) {
    outline: none;
  }

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }
`;var gr,Ad,jn,ha;let He=class extends ne{constructor(){super(...arguments),c(this,gr),c(this,jn),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1}get value(){return this._internalValue||""}set value(e){this._internalValue=e}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}render(){return v`
      <input
        type="checkbox"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        ?indeterminate=${this.indeterminate}
        aria-invalid=${this.invalid}
        aria-describedby=${N(this.supportingText?"supporting-text":"")}
        id="checkbox-input"
        @change=${()=>{this.checked=this._elCheckbox.checked,f(this,jn,ha).call(this)}}
      />
      <gds-toggle-control-base type="checkbox" @click=${f(this,gr,Ad)}>
        <label for="checkbox-input" slot="label"> ${this.label} </label>
        <span
          slot="supporting-text"
          class="supporting-text"
          id="supporting-text"
        >
          ${this.supportingText}
        </span>
        ${hh({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}_getValidityAnchor(){return this._elCheckbox||this}formResetCallback(){this.checked=!1}};gr=new WeakSet;Ad=function(e){this.disabled||e.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,f(this,jn,ha).call(this))};jn=new WeakSet;ha=function(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};He.styles=[G,pl,np];o([l()],He.prototype,"label",2);o([l({attribute:"supporting-text"})],He.prototype,"supportingText",2);o([l({type:Boolean})],He.prototype,"checked",2);o([l({type:Boolean,reflect:!0})],He.prototype,"indeterminate",2);o([l({type:Boolean,reflect:!0})],He.prototype,"disabled",2);o([Z('input[type="checkbox"]')],He.prototype,"_elCheckbox",2);o([Y("indeterminate")],He.prototype,"_handleIndeterminateChange",1);He=o([$("gds-checkbox",{dependsOn:[Qt,Se,xt]})],He);He.define();Ho.define();Ve.define();us.define();Dn.define();Ri.define();Fe.define();vt.define();Q.define();qe.define();Me.define();es.define();ht.define();ts.define();Gn.define();Hn.define();mt.define();et.define();Zi.define();Ie.define();tt.define();$e.define();O.define();let Hs=class extends R{constructor(){super(...arguments),this.show=!1}render(){return v``}};Hs.styles=A`
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
  `;o([l({type:Boolean,reflect:!0})],Hs.prototype,"show",2);Hs=o([$("gds-backdrop")],Hs);Hs.define();Ne.define();tr.define();const op=A`
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
`;let ys=class extends ve(we(R)){constructor(){super(...arguments),this.captureMode="clone"}querySelectorAll(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):new NodeList}querySelector(e){return this.shadowRoot?this.shadowRoot.querySelector(e):null}get innerHTML(){return this.shadowRoot?.innerHTML||""}set innerHTML(e){this.shadowRoot&&(this.shadowRoot.innerHTML=e)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){if(!this.shadowRoot||this.childNodes.length===0)return;if(this.captureMode==="move"){this.shadowRoot.replaceChildren(...Array.from(this.childNodes));return}const e=Array.from(this.childNodes).map(t=>t.cloneNode(!0));this.shadowRoot.replaceChildren(...e)}};ys.styles=[G,_d,op];o([l()],ys.prototype,"captureMode",2);o([Zn({childList:!0,subtree:!0,attributes:!0,characterData:!0})],ys.prototype,"_captureDOM",1);ys=o([$("gds-rich-text")],ys);ys.define();Ee.define();Wt.define();Ps.define();Ns.define();st.define();pr.define();Ot.define();ce.define();var ip=Object.getOwnPropertyDescriptor,rp=(e,t,s,n)=>{for(var i=n>1?void 0:n?ip(t,s):t,r=e.length-1,d;r>=0;r--)(d=e[r])&&(i=d(i)||i);return i};let Ra=class extends Va{createRenderRoot(){return this}render(){return v`<gds-flex flex-direction="column" gap="xl" max-width="800px">
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

      <gds-checkbox-group>
        <gds-checkbox
          label="Checkbox Option 1"
          supporting-text="Supporting text"
          value="1"
        ></gds-checkbox>
        <gds-checkbox
          label="Checkbox Option 2"
          supporting-text="Supporting text"
          value="2"
          checked
        ></gds-checkbox>
        <gds-checkbox
          label="Checkbox Option 3"
          supporting-text="Supporting text"
          value="3"
          indeterminate
        ></gds-checkbox
      ></gds-checkbox-group>

      <gds-radio-group value="2">
        <gds-radio
          label="Radio Option 1"
          supporting-text="Supporting text"
          value="1"
        ></gds-radio>
        <gds-radio
          label="Radio Option 2"
          supporting-text="Supporting text"
          value="2"
        ></gds-radio>
        <gds-radio
          label="Radio Option 3"
          supporting-text="Supporting text"
          value="3"
        ></gds-radio
      ></gds-radio-group>
    </gds-flex>`}};Ra=rp([Ud("all-components")],Ra);export{Ra as AllComponents};
