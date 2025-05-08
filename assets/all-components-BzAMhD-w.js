import{u as Gl,f as Yl,r as sa,i as D,a as ce,h as w,g as $,T as As,E as he,x as ye,V as Zn,Z as jl,t as Ul}from"./index-CpXvOzkr.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ql={attribute:!0,type:String,converter:Gl,reflect:!1,hasChanged:Yl},Zl=(e=ql,t,s)=>{const{kind:n,metadata:i}=s;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(s.name,e),n==="accessor"){const{name:l}=s;return{set(h){const u=t.get.call(this);t.set.call(this,h),this.requestUpdate(l,u,e)},init(h){return h!==void 0&&this.P(l,void 0,e),h}}}if(n==="setter"){const{name:l}=s;return function(h){const u=this[l];t.call(this,h),this.requestUpdate(l,u,e)}}throw Error("Unsupported decorator location: "+n)};function c(e){return(t,s)=>typeof s=="object"?Zl(e,t,s):((n,i,r)=>{const l=i.hasOwnProperty(r);return i.constructor.createProperty(r,l?{...n,wrapped:!0}:n),l?Object.getOwnPropertyDescriptor(i,r):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ie(e){return c({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(e,t){return(s,n,i)=>{const r=l=>l.renderRoot?.querySelector(e)??null;return ji(s,n,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ql;function Jl(e){return(t,s)=>ji(t,s,{get(){return(this.renderRoot??(Ql??=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Et(e){return(t,s)=>ji(t,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}var Xl=Object.defineProperty,Kl=Object.getOwnPropertyDescriptor,o=(e,t,s,n)=>{for(var i=n>1?void 0:n?Kl(t,s):t,r=e.length-1,l;r>=0;r--)(l=e[r])&&(i=(n?l(t,s,i):l(i))||i);return n&&i&&Xl(t,s,i),i},Ui=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},a=(e,t,s)=>(Ui(e,t,"read from private field"),s?s.call(e):t.get(e)),d=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},H=(e,t,s,n)=>(Ui(e,t,"write to private field"),t.set(e,s),s),x=(e,t,s)=>(Ui(e,t,"access private method"),s),Ie,un,ot,pn,Bt,Pe,nt,gn,to,na,Jt,vs,so,oa;class ed{constructor(t){d(this,to),d(this,Jt),d(this,so),d(this,Ie,!qi()),d(this,un,!1),d(this,ot,[]),d(this,pn,[]),d(this,Bt,new Map),d(this,Pe,new Map),d(this,nt,[]),d(this,gn,[]),this.host=t,this.host.addController(this)}hostConnected(){x(this,so,oa).call(this)}has(t){return a(this,Ie)?a(this,Pe).has(t):a(this,Bt).has(t)}inject(t,s){x(this,to,na).call(this,t,s),x(this,Jt,vs).call(this)}clear(t){a(this,Ie)?this.host.updateComplete.then(()=>{a(this,Pe).get(t)?.remove(),a(this,Pe).delete(t)}):a(this,Bt).delete(t),x(this,Jt,vs).call(this)}clearAll(){a(this,Ie)?this.host.updateComplete.then(()=>{a(this,Pe).forEach(t=>t.remove()),a(this,nt).forEach(t=>t.remove()),a(this,Pe).clear(),H(this,nt,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],a(this,Bt).clear(),H(this,ot,[]))}clearInitial(){a(this,Ie)?this.host.updateComplete.then(()=>{a(this,nt).forEach(t=>t.remove()),H(this,nt,[])}):H(this,ot,[]),x(this,Jt,vs).call(this)}restoreInitial(){a(this,Ie)?a(this,gn).forEach(t=>{a(this,nt).push(t.cloneNode(!0))}):H(this,ot,[...a(this,pn)]),x(this,Jt,vs).call(this)}}Ie=new WeakMap;un=new WeakMap;ot=new WeakMap;pn=new WeakMap;Bt=new WeakMap;Pe=new WeakMap;nt=new WeakMap;gn=new WeakMap;to=new WeakSet;na=function(e,t){if(a(this,Ie)){let s=a(this,Pe).get(e);s||(s=document.createElement("style"),a(this,Pe).set(e,s)),s.textContent=t.cssText}else{if(!this.host.shadowRoot||!t.styleSheet)return;a(this,Bt).set(e,t.styleSheet)}};Jt=new WeakSet;vs=function(){if(a(this,Ie))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(e=>{e.remove()}),a(this,nt).forEach(e=>{this.host.shadowRoot?.appendChild(e)}),a(this,Pe).forEach(e=>{this.host.shadowRoot?.appendChild(e)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...a(this,ot),...Array.from(a(this,Bt).values())]}};so=new WeakSet;oa=function(){a(this,un)||(a(this,Ie)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(e=>{a(this,nt).push(e),a(this,gn).push(e.cloneNode(!0))})}):this.host.shadowRoot&&a(this,ot).length===0&&(H(this,ot,[...this.host.shadowRoot.adoptedStyleSheets||[]]),H(this,pn,[...a(this,ot)])),H(this,un,!0))};function qi(){try{return new CSSStyleSheet,!0}catch{return!1}}var Br=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/*! *****************************************************************************
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
***************************************************************************** */var Fr;(function(e){(function(t){var s=typeof Br=="object"?Br:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),n=i(e);typeof s.Reflect>"u"?s.Reflect=e:n=i(s.Reflect,n),t(n);function i(r,l){return function(h,u){typeof r[h]!="function"&&Object.defineProperty(r,h,{configurable:!0,writable:!0,value:u}),l&&l(h,u)}}})(function(t){var s=Object.prototype.hasOwnProperty,n=typeof Symbol=="function",i=n&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",r=n&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",l=typeof Object.create=="function",h={__proto__:[]}instanceof Array,u=!l&&!h,g={create:l?function(){return qn(Object.create(null))}:h?function(){return qn({__proto__:null})}:function(){return qn({})},has:u?function(p,f){return s.call(p,f)}:function(p,f){return f in p},get:u?function(p,f){return s.call(p,f)?p[f]:void 0}:function(p,f){return p[f]}},v=Object.getPrototypeOf(Function),y=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",_=!y&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:Pl(),k=!y&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:Nl(),S=!y&&typeof WeakMap=="function"?WeakMap:Hl(),T=new S;function B(p,f,m,C){if(K(m)){if(!Wr(p))throw new TypeError;if(!Or(f))throw new TypeError;return At(p,f)}else{if(!Wr(p))throw new TypeError;if(!le(f))throw new TypeError;if(!le(C)&&!K(C)&&!Qt(C))throw new TypeError;return Qt(C)&&(C=void 0),m=Ke(m),Ps(p,f,m,C)}}t("decorate",B);function O(p,f){function m(C,M){if(!le(C))throw new TypeError;if(!K(M)&&!Vl(M))throw new TypeError;Xe(p,f,C,M)}return m}t("metadata",O);function Y(p,f,m,C){if(!le(m))throw new TypeError;return K(C)||(C=Ke(C)),Xe(p,f,m,C)}t("defineMetadata",Y);function Q(p,f,m){if(!le(f))throw new TypeError;return K(m)||(m=Ke(m)),fs(p,f,m)}t("hasMetadata",Q);function ae(p,f,m){if(!le(f))throw new TypeError;return K(m)||(m=Ke(m)),Se(p,f,m)}t("hasOwnMetadata",ae);function X(p,f,m){if(!le(f))throw new TypeError;return K(m)||(m=Ke(m)),ys(p,f,m)}t("getMetadata",X);function ft(p,f,m){if(!le(f))throw new TypeError;return K(m)||(m=Ke(m)),bt(p,f,m)}t("getOwnMetadata",ft);function jn(p,f){if(!le(p))throw new TypeError;return K(f)||(f=Ke(f)),Me(p,f)}t("getMetadataKeys",jn);function gs(p,f){if(!le(p))throw new TypeError;return K(f)||(f=Ke(f)),Ee(p,f)}t("getOwnMetadataKeys",gs);function Zt(p,f,m){if(!le(f))throw new TypeError;K(m)||(m=Ke(m));var C=yt(f,m,!1);if(K(C)||!C.delete(p))return!1;if(C.size>0)return!0;var M=T.get(f);return M.delete(m),M.size>0||T.delete(f),!0}t("deleteMetadata",Zt);function At(p,f){for(var m=p.length-1;m>=0;--m){var C=p[m],M=C(f);if(!K(M)&&!Qt(M)){if(!Or(M))throw new TypeError;f=M}}return f}function Ps(p,f,m,C){for(var M=p.length-1;M>=0;--M){var fe=p[M],z=fe(f,m,C);if(!K(z)&&!Qt(z)){if(!le(z))throw new TypeError;C=z}}return C}function yt(p,f,m){var C=T.get(p);if(K(C)){if(!m)return;C=new _,T.set(p,C)}var M=C.get(f);if(K(M)){if(!m)return;M=new _,C.set(f,M)}return M}function fs(p,f,m){var C=Se(p,f,m);if(C)return!0;var M=Un(f);return Qt(M)?!1:fs(p,M,m)}function Se(p,f,m){var C=yt(f,m,!1);return K(C)?!1:Wl(C.has(p))}function ys(p,f,m){var C=Se(p,f,m);if(C)return bt(p,f,m);var M=Un(f);if(!Qt(M))return ys(p,M,m)}function bt(p,f,m){var C=yt(f,m,!1);if(!K(C))return C.get(p)}function Xe(p,f,m,C){var M=yt(m,C,!0);M.set(p,f)}function Me(p,f){var m=Ee(p,f),C=Un(p);if(C===null)return m;var M=Me(C,f);if(M.length<=0)return m;if(m.length<=0)return M;for(var fe=new k,z=[],L=0,E=m;L<E.length;L++){var F=E[L],I=fe.has(F);I||(fe.add(F),z.push(F))}for(var vt=0,Rr=M;vt<Rr.length;vt++){var F=Rr[vt],I=fe.has(F);I||(fe.add(F),z.push(F))}return z}function Ee(p,f){var m=[],C=yt(p,f,!1);if(K(C))return m;for(var M=C.keys(),fe=Rl(M),z=0;;){var L=Fl(fe);if(!L)return m.length=z,m;var E=Bl(L);try{m[z]=E}catch(F){try{Il(fe)}finally{throw F}}z++}}function Ns(p){if(p===null)return 1;switch(typeof p){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return p===null?1:6;default:return 6}}function K(p){return p===void 0}function Qt(p){return p===null}function zl(p){return typeof p=="symbol"}function le(p){return typeof p=="object"?p!==null:typeof p=="function"}function Dl(p,f){switch(Ns(p)){case 0:return p;case 1:return p;case 2:return p;case 3:return p;case 4:return p;case 5:return p}var m="string",C=Vr(p,i);if(C!==void 0){var M=C.call(p,m);if(le(M))throw new TypeError;return M}return Ll(p)}function Ll(p,f){var m,C;{var M=p.toString;if(Hs(M)){var C=M.call(p);if(!le(C))return C}var m=p.valueOf;if(Hs(m)){var C=m.call(p);if(!le(C))return C}}throw new TypeError}function Wl(p){return!!p}function Ol(p){return""+p}function Ke(p){var f=Dl(p);return zl(f)?f:Ol(f)}function Wr(p){return Array.isArray?Array.isArray(p):p instanceof Object?p instanceof Array:Object.prototype.toString.call(p)==="[object Array]"}function Hs(p){return typeof p=="function"}function Or(p){return typeof p=="function"}function Vl(p){switch(Ns(p)){case 3:return!0;case 4:return!0;default:return!1}}function Vr(p,f){var m=p[f];if(m!=null){if(!Hs(m))throw new TypeError;return m}}function Rl(p){var f=Vr(p,r);if(!Hs(f))throw new TypeError;var m=f.call(p);if(!le(m))throw new TypeError;return m}function Bl(p){return p.value}function Fl(p){var f=p.next();return f.done?!1:f}function Il(p){var f=p.return;f&&f.call(p)}function Un(p){var f=Object.getPrototypeOf(p);if(typeof p!="function"||p===v||f!==v)return f;var m=p.prototype,C=m&&Object.getPrototypeOf(m);if(C==null||C===Object.prototype)return f;var M=C.constructor;return typeof M!="function"||M===p?f:M}function Pl(){var p={},f=[],m=function(){function z(L,E,F){this._index=0,this._keys=L,this._values=E,this._selector=F}return z.prototype["@@iterator"]=function(){return this},z.prototype[r]=function(){return this},z.prototype.next=function(){var L=this._index;if(L>=0&&L<this._keys.length){var E=this._selector(this._keys[L],this._values[L]);return L+1>=this._keys.length?(this._index=-1,this._keys=f,this._values=f):this._index++,{value:E,done:!1}}return{value:void 0,done:!0}},z.prototype.throw=function(L){throw this._index>=0&&(this._index=-1,this._keys=f,this._values=f),L},z.prototype.return=function(L){return this._index>=0&&(this._index=-1,this._keys=f,this._values=f),{value:L,done:!0}},z}();return function(){function z(){this._keys=[],this._values=[],this._cacheKey=p,this._cacheIndex=-2}return Object.defineProperty(z.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),z.prototype.has=function(L){return this._find(L,!1)>=0},z.prototype.get=function(L){var E=this._find(L,!1);return E>=0?this._values[E]:void 0},z.prototype.set=function(L,E){var F=this._find(L,!0);return this._values[F]=E,this},z.prototype.delete=function(L){var E=this._find(L,!1);if(E>=0){for(var F=this._keys.length,I=E+1;I<F;I++)this._keys[I-1]=this._keys[I],this._values[I-1]=this._values[I];return this._keys.length--,this._values.length--,L===this._cacheKey&&(this._cacheKey=p,this._cacheIndex=-2),!0}return!1},z.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=p,this._cacheIndex=-2},z.prototype.keys=function(){return new m(this._keys,this._values,C)},z.prototype.values=function(){return new m(this._keys,this._values,M)},z.prototype.entries=function(){return new m(this._keys,this._values,fe)},z.prototype["@@iterator"]=function(){return this.entries()},z.prototype[r]=function(){return this.entries()},z.prototype._find=function(L,E){return this._cacheKey!==L&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=L)),this._cacheIndex<0&&E&&(this._cacheIndex=this._keys.length,this._keys.push(L),this._values.push(void 0)),this._cacheIndex},z}();function C(z,L){return z}function M(z,L){return L}function fe(z,L){return[z,L]}}function Nl(){return function(){function p(){this._map=new _}return Object.defineProperty(p.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),p.prototype.has=function(f){return this._map.has(f)},p.prototype.add=function(f){return this._map.set(f,f),this},p.prototype.delete=function(f){return this._map.delete(f)},p.prototype.clear=function(){this._map.clear()},p.prototype.keys=function(){return this._map.keys()},p.prototype.values=function(){return this._map.values()},p.prototype.entries=function(){return this._map.entries()},p.prototype["@@iterator"]=function(){return this.keys()},p.prototype[r]=function(){return this.keys()},p}()}function Hl(){var p=16,f=g.create(),m=C();return function(){function E(){this._key=C()}return E.prototype.has=function(F){var I=M(F,!1);return I!==void 0?g.has(I,this._key):!1},E.prototype.get=function(F){var I=M(F,!1);return I!==void 0?g.get(I,this._key):void 0},E.prototype.set=function(F,I){var vt=M(F,!0);return vt[this._key]=I,this},E.prototype.delete=function(F){var I=M(F,!1);return I!==void 0?delete I[this._key]:!1},E.prototype.clear=function(){this._key=C()},E}();function C(){var E;do E="@@WeakMap@@"+L();while(g.has(f,E));return f[E]=!0,E}function M(E,F){if(!s.call(E,m)){if(!F)return;Object.defineProperty(E,m,{value:g.create()})}return E[m]}function fe(E,F){for(var I=0;I<F;++I)E[I]=Math.random()*255|0;return E}function z(E){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(E)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(E)):fe(new Uint8Array(E),E):fe(new Array(E),E)}function L(){var E=z(p);E[6]=E[6]&79|64,E[8]=E[8]&191|128;for(var F="",I=0;I<p;++I){var vt=E[I];(I===4||I===6||I===8)&&(F+="-"),vt<16&&(F+="0"),F+=vt.toString(16).toLowerCase()}return F}}function qn(p){return p.__=void 0,delete p.__,p}})})(Fr||(Fr={}));class R extends sa{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new ed(this)}static define(){}connectedCallback(){super.connectedCallback(),this.setAttribute("gds-element",this.gdsElementName?.toString()||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}}R.isDefined=!1;R.styleExpressionBaseSelector=":host";o([ie()],R.prototype,"_isUsingTransitionalStyles",2);const ia=`/**
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
  --gds-sys-shadow-xs-offset-x-1: 0;
  --gds-sys-shadow-xs-offset-y-1: 0;
  --gds-sys-shadow-xs-blur-1: 1;
  --gds-sys-shadow-xs-spread-1: 0;
  --gds-sys-shadow-xs-color-1: #000000;
  --gds-sys-shadow-xs-offset-x-2: 0;
  --gds-sys-shadow-xs-offset-y-2: 0;
  --gds-sys-shadow-xs-blur-2: 1;
  --gds-sys-shadow-xs-spread-2: 0;
  --gds-sys-shadow-xs-color-2: #000000;
  --gds-sys-shadow-s-offset-x-1: 0;
  --gds-sys-shadow-s-offset-y-1: 1;
  --gds-sys-shadow-s-blur-1: 3;
  --gds-sys-shadow-s-spread-1: 0;
  --gds-sys-shadow-s-color-1: #000000;
  --gds-sys-shadow-s-offset-x-2: 0;
  --gds-sys-shadow-s-offset-y-2: 1;
  --gds-sys-shadow-s-blur-2: 2;
  --gds-sys-shadow-s-spread-2: 0;
  --gds-sys-shadow-s-color-2: #000000;
  --gds-sys-shadow-m-offset-x-1: 0;
  --gds-sys-shadow-m-offset-y-1: 4;
  --gds-sys-shadow-m-blur-1: 8;
  --gds-sys-shadow-m-spread-1: -2;
  --gds-sys-shadow-m-color-1: #000000;
  --gds-sys-shadow-m-offset-x-2: 0;
  --gds-sys-shadow-m-offset-y-2: 2;
  --gds-sys-shadow-m-blur-2: 4;
  --gds-sys-shadow-m-spread-2: -2;
  --gds-sys-shadow-m-color-2: #000000;
  --gds-sys-shadow-l-offset-x-1: 0;
  --gds-sys-shadow-l-offset-y-1: 12;
  --gds-sys-shadow-l-blur-1: 16;
  --gds-sys-shadow-l-spread-1: -4;
  --gds-sys-shadow-l-color-1: #000000;
  --gds-sys-shadow-l-offset-x-2: 0;
  --gds-sys-shadow-l-offset-y-2: 4;
  --gds-sys-shadow-l-blur-2: 6;
  --gds-sys-shadow-l-spread-2: -2;
  --gds-sys-shadow-l-color-2: #000000;
  --gds-sys-shadow-xl-offset-x-1: 0;
  --gds-sys-shadow-xl-offset-y-1: 20;
  --gds-sys-shadow-xl-blur-1: 24;
  --gds-sys-shadow-xl-spread-1: -4;
  --gds-sys-shadow-xl-color-1: #000000;
  --gds-sys-shadow-xl-offset-x-2: 0;
  --gds-sys-shadow-xl-offset-y-2: 8;
  --gds-sys-shadow-xl-blur-2: 8;
  --gds-sys-shadow-xl-spread-2: -4;
  --gds-sys-shadow-xl-color-2: #000000;
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
  --gds-sys-space-max: 999px;`,no=`/**
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
  --gds-sys-color-l3-states-negative-pressed: #ee8375 20%;`,ra=`/**
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
  --gds-sys-color-l3-states-negative-pressed: #a63e2a 20%;`;var td={};const Wn=typeof process<"u"&&td!==void 0,sd=/iPad|iPhone|iPod/.test(navigator.userAgent);var oo,fn,yn,Zi,io,aa,ro,la;function nd(){return Wn?[]:document.adoptedStyleSheets||[]}const od=class da{constructor(){d(this,io),d(this,ro),d(this,oo,!qi()),d(this,fn,new Map),d(this,yn,new Map),d(this,Zi,nd())}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new da),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(t,s){if(a(this,oo)){const n=Array.isArray(s)?s.map(i=>i.toString()).join(""):s.toString();x(this,io,aa).call(this,t,n)}else s.styleSheet&&x(this,ro,la).call(this,t,s.styleSheet)}};oo=new WeakMap;fn=new WeakMap;yn=new WeakMap;Zi=new WeakMap;io=new WeakSet;aa=function(e,t){if(Wn)return;let s=a(this,yn).get(e);s||(s=document.createElement("style"),a(this,yn).set(e,s)),s.textContent=t,document.head.appendChild(s)};ro=new WeakSet;la=function(e,t){Wn||(a(this,fn).set(e,t),document.adoptedStyleSheets=[...a(this,Zi),...Array.from(a(this,fn).values())])};let ca=od;const G=[D`
    :host {
      ${ce(ia)}
    }
  `];ca.instance.injectGlobalStyles("root-tokens",D`
    :root,
    :root[gds-theme='light'] {
      ${ce(ia)}
      ${ce(ra)}
    }
    :root[gds-theme='dark'] {
      ${ce(no)}
    }
  `);const id={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},rd=/^([<|>]=?)?([0-9a-z]+)/,ha=["{","}",";",":",","],Ir=[" ","/n"];function ad(e=""){const t=[];let s="";for(let n=0;n<e.length;n++){const i=e[n];if(Ir.includes(i)||(s+=i),ha.includes(i)){t.push(s.slice(0,-1)),t.push(i),s="";continue}if(Ir.includes(i)||n===e.length-1){t.push(s),s="";continue}}return t.filter(n=>n!=="")}function ld(e){const t=[];let s={breakpoint:"-",values:[]};const n=()=>({sel:"",values:[]});let i=n();for(const r of e){if(!ha.includes(r)){i.values.push(r);continue}if(r==="{"&&(s={breakpoint:i.values.join(","),values:[]},i=n()),r===";"&&(t.length===0&&t.push(s),i.values.length>0&&(s.values.push(i),i=n())),r===":"){const l=i.values.pop()??"";i.sel=l}s&&r==="}"&&(s.values.push(i),i=n(),t.push(s))}return i.values.length>0&&s.values.push(i),t.length===0&&t.push(s),t}function dd(e){return e.split(",").map(s=>{const n=s.trim().match(rd);if(!n)throw new Error(`Invalid breakpoint specifier: ${s}`);return{condition:n[1],value:n[2]}})}function cd(e,t,s,n=r=>r,i=(r,l)=>`${r}: ${l.join(" ")};`){let r="";for(const l of s){const g=`@media ${(l.breakpoint==="-"?[{condition:">=",value:"0"}]:dd(l.breakpoint)).map(v=>`(${v.condition?.includes("<")?"max-width":"min-width"}: ${id[v.value]??v.value})`).join(" and ")} {${l.values.map(v=>{let y=e;v.sel.length>0&&(y=e===":host"?`:host(:${v.sel})`:`${e}:${v.sel}`);const _=i(t,v.values.map(n));return v.sel==="hover"?`@media (hover: hover) {${y}{${_}}}`:`${y}{${_}}`}).join("")}}`;r+=g}return r}const Qn=new Map;function b(e){return(t,s)=>{const n=e?.property??String(s),i=e?.valueTemplate,r=e?.styleTemplate,l=e?.cacheOverrideKey??"0";c({attribute:e?.attribute,noAccessor:!0})(t,s),Object.defineProperty(t,s,{get:function(){return this["__"+String(s)]},set:async function(h){if(!h)return;this["__"+String(s)]=h,await this.updateComplete;const u=e?.selector??this.constructor.styleExpressionBaseSelector,g=this.level??"0",v=u+n+h+g+l;if(Qn.has(v)){this._dynamicStylesController.inject(`sep_${String(s)}`,Qn.get(v));return}const y=ld(ad(h)),_=cd(u,n,y,i?.bind(this),r?.bind(this)),k=ce(_);Qn.set(v,k),this._dynamicStylesController.inject(`sep_${String(s)}`,k)}})}}function ua(e,t,s){if(e==="transparent"||e==="currentColor"||e==="inherit")return e;const[n,i]=e.split("/"),r=`var(--gds-sys-color-l${s}-${t}-${n})`;return i?`color-mix(in srgb, ${r} ${parseFloat(i)*100}%, transparent 0%)`:r}function Rs(e){return{valueTemplate:function(t){return ua(t,e,this.level)}}}const It={valueTemplate:e=>`var(--gds-sys-space-${e}, 0)`},be={valueTemplate:e=>`var(--gds-sys-space-${hd(e)}, ${e})`},Jn={valueTemplate:e=>{const s=(e.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${e})`:`calc(var(--gds-sys-space-${e.substring(1)}) * -1)`;return e==="auto"?"auto":s},styleTemplate:(e,t)=>{const s=h=>h==="auto"?"auto":`${h}`,n=s(t[0]),i=t.length>1?s(t[1]):n,r=t.length>2?s(t[2]):n,l=t.length>3?s(t[3]):i;return`${e}: ${n} ${i} ${r} ${l};`}};function hd(e){return e.replace(/[^a-zA-Z0-9-]/g,"")}function xe(e){class t extends e{}return o([b(be)],t.prototype,"width",2),o([b(be)],t.prototype,"min-width",2),o([b(be)],t.prototype,"max-width",2),o([b(be)],t.prototype,"inline-size",2),o([b(be)],t.prototype,"min-inline-size",2),o([b(be)],t.prototype,"max-inline-size",2),t}function On(e){class t extends e{}return o([b(be)],t.prototype,"height",2),o([b(be)],t.prototype,"min-height",2),o([b(be)],t.prototype,"max-height",2),o([b(be)],t.prototype,"block-size",2),o([b(be)],t.prototype,"min-block-size",2),o([b(be)],t.prototype,"max-block-size",2),t}function $e(e){class t extends e{}return o([b(Jn)],t.prototype,"margin",2),o([b(Jn)],t.prototype,"margin-inline",2),o([b(Jn)],t.prototype,"margin-block",2),t}function ud(e){class t extends e{}return o([b(It)],t.prototype,"padding",2),o([b(It)],t.prototype,"padding-inline",2),o([b(It)],t.prototype,"padding-block",2),t}function we(e){class t extends e{}return o([b()],t.prototype,"align-self",2),o([b()],t.prototype,"justify-self",2),o([b()],t.prototype,"place-self",2),o([b()],t.prototype,"grid-column",2),o([b()],t.prototype,"grid-row",2),o([b()],t.prototype,"grid-area",2),o([b()],t.prototype,"flex",2),o([b()],t.prototype,"order",2),t}function Vn(e){class t extends e{}return o([b()],t.prototype,"position",2),o([b()],t.prototype,"transform",2),o([b()],t.prototype,"inset",2),t}const pd=D`
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
`;var gd=pd;let V=class extends xe(On($e(ud(we(Vn(R)))))){constructor(){super(...arguments),this.level="2"}render(){return w`<slot></slot>`}};V.styles=[G,gd];o([b()],V.prototype,"display",2);o([c()],V.prototype,"level",2);o([b(Rs("content"))],V.prototype,"color",2);o([b(Rs("background"))],V.prototype,"background",2);o([b({styleTemplate:function(e,t){const s=this,[n,i=s["border-style"]||"solid",r=s["border-color"]||"primary"]=t,l=`var(--gds-sys-space-${n})`,h=ua(r,"border",s.level);return`border: ${l} ${i} ${h};`}})],V.prototype,"border",2);o([b(Rs("border"))],V.prototype,"border-color",2);o([b(It)],V.prototype,"border-width",2);o([b()],V.prototype,"border-style",2);o([b(It)],V.prototype,"border-radius",2);o([b({valueTemplate:e=>`var(--gds-sys-shadow-${e})`})],V.prototype,"box-shadow",2);o([b()],V.prototype,"opacity",2);o([b()],V.prototype,"overflow",2);o([b()],V.prototype,"box-sizing",2);o([b()],V.prototype,"z-index",2);o([b({styleTemplate:(e,t)=>{const s=t[0],n=`font-size: var(--gds-sys-text-size-${s});`,i=`line-height: var(--gds-sys-text-line-height-${s});`;return n+i}})],V.prototype,"font-size",2);o([b({valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],V.prototype,"font-weight",2);o([b()],V.prototype,"text-align",2);o([b()],V.prototype,"text-wrap",2);o([b()],V.prototype,"overflow-wrap",2);o([b()],V.prototype,"white-space",2);o([b({...It,styleTemplate:(e,t)=>{const s=t[0],n=t[1]||s;return`gap: ${s} ${n};`},cacheOverrideKey:"flex"})],V.prototype,"gap",2);o([b()],V.prototype,"align-items",2);o([b()],V.prototype,"align-content",2);o([b()],V.prototype,"justify-content",2);o([b()],V.prototype,"justify-items",2);o([b()],V.prototype,"flex-direction",2);o([b()],V.prototype,"flex-wrap",2);o([b()],V.prototype,"place-items",2);o([b()],V.prototype,"place-content",2);V=o([$("gds-div")],V);const fd=D`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-l2-border-primary);
  }
`;var yd=fd;let it=class extends V{render(){return w`<slot></slot>`}};it.styles=[G,yd];it=o([$("gds-flex")],it);const bd=D`
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
`;var vd=bd,ao,pa,lo,ga,Qi,fa,co,ya;let Te=class extends xe($e(we(R))){constructor(){super(...arguments),d(this,ao),d(this,lo),d(this,Qi),d(this,co),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){const e=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",t=this.disabled?"disabled":this.notification?"primary":this.variant,s=this.size==="small"||this.notification?"2xs":"xs",n=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return w`<gds-flex
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
      ${x(this,ao,pa).call(this)} ${x(this,lo,ga).call(this)}
      ${x(this,co,ya).call(this)}
    </gds-flex>`}};ao=new WeakSet;pa=function(){if(this.size!=="small"||!this.notification)return w`<slot name="lead"></slot>`};lo=new WeakSet;ga=function(){return w`<slot @slotchange=${x(this,Qi,fa)}></slot>`};Qi=new WeakSet;fa=function(e){const s=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=s.length>0&&s.some(n=>n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE&&n.textContent?.trim()!=="")};co=new WeakSet;ya=function(){return w`<slot name="trail"></slot>`};Te.styles=[G,vd];o([c()],Te.prototype,"variant",2);o([c({type:String})],Te.prototype,"size",2);o([c({attribute:"disabled",type:Boolean,reflect:!0})],Te.prototype,"disabled",2);o([c({attribute:"notification",type:Boolean,reflect:!0})],Te.prototype,"notification",2);o([c({attribute:"rounded",type:Boolean,reflect:!0})],Te.prototype,"rounded",2);o([ie()],Te.prototype,"mainSlotOccupied",2);Te=o([$("gds-badge",{dependsOn:[it]})],Te);Te.define();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},cs=e=>(...t)=>({_$litDirective$:e,values:t});let Fs=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=cs(class extends Fs{constructor(e){if(super(e),e.type!==Bs.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const s=e.element.classList;for(const n of this.st)n in t||(s.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(s.add(n),this.st.add(n)):(s.remove(n),this.st.delete(n)))}return As}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=e=>e??he;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(e,t,s){return e?t(e):s?.(e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ji=Symbol.for(""),md=e=>{if(e?.r===Ji)return e?._$litStatic$},xd=e=>({_$litStatic$:e,r:Ji}),bn=(e,...t)=>({_$litStatic$:t.reduce((s,n,i)=>s+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[i+1],e[0]),r:Ji}),Pr=new Map,wd=e=>(t,...s)=>{const n=s.length;let i,r;const l=[],h=[];let u,g=0,v=!1;for(;g<n;){for(u=t[g];g<n&&(r=s[g],(i=md(r))!==void 0);)u+=i+t[++g],v=!0;g!==n&&h.push(r),l.push(u),g++}if(g===n&&l.push(t[n]),v){const y=l.join("$$lit$$");(t=Pr.get(y))===void 0&&(l.raw=l,Pr.set(y,t=l)),s=h}return e(t,...s)},hs=wd(ye),_d=`:host {
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
}`;let zs=class extends R{constructor(){super(...arguments),this.onmousedown=e=>{const s=e.target.getBoundingClientRect(),n=this._rippleEl;n&&(n.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-s.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-s.left}px`),setTimeout(()=>{n.classList.add("gds-ripple-effect")},20))}}render(){return ye`<div></div>`}};zs.styles=[G,ce(_d)];o([U("div")],zs.prototype,"_rippleEl",2);zs=o([$("gds-ripple")],zs);var Ys,js,ho;const kd=class ba{constructor(){d(this,Ys,new Map),d(this,js,new Map),d(this,ho,!qi())}static get instance(){return globalThis.__gdsTransitionalStyles?.[Zn]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[Zn]:new ba}),globalThis.__gdsTransitionalStyles[Zn]}apply(t,s){if(!t.shadowRoot)return;const n=a(this,Ys).get(s);n&&(a(this,js).set(s,t),this.applyToElement(s,n))}applyToElement(t,s){const n=a(this,js).get(t);if(!n||!n.shadowRoot)return;const i=()=>{n._dynamicStylesController.clearInitial(),n._dynamicStylesController.inject("t-styles",ce(s)),n._isUsingTransitionalStyles=!0},r=()=>{n._isUsingTransitionalStyles=!1,n._dynamicStylesController.clear("t-styles"),n._dynamicStylesController.restoreInitial()},l="[gds-element=gds-theme]";let h=n.getRootNode(),u=n.closest(l);for(;u===null&&h!==document;)u=h.host?.closest(l),h=h.host?.getRootNode();if(u){const g=u,v=()=>{g.designVersion==="2023"?r():i()};if(g.addEventListener("gds-design-version-changed",v),n.addEventListener("gds-element-disconnected",()=>g.removeEventListener("gds-design-version-changed",v)),g.designVersion==="2023"){r();return}}i()}register(t,s){let n=s;a(this,ho)&&(n=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${s}`),a(this,Ys).set(t,n),this.applyToElement(t,n)}};Ys=new WeakMap;js=new WeakMap;ho=new WeakMap;let ue=kd;function Z(e,t){const s={waitUntilFirstUpdate:!1,...t};return(n,i,r)=>{const{update:l}=n,h=Array.isArray(e)?e:[e];n.update=function(u){h.forEach(g=>{const v=g;if(u.has(v)){const y=u.get(v),_=this[v];y!==_&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&r.value?.call(this,y,_)}}),l.call(this,u)}}}function Xi(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,n)=>{let i;const r=t.connectedCallback,l=t.disconnectedCallback;t.connectedCallback=function(){r?.call(this);const h=(u,g)=>{n.value?.call(this)};i=new MutationObserver(h),i.observe(this,e)},t.disconnectedCallback=function(){l?.call(this),i.disconnect()}}}function Cd(e){return(t,s,n)=>{if(Wn)return;const i=window.matchMedia(e),r=t.connectedCallback,l=t.disconnectedCallback;t.connectedCallback=function(){r?.call(this);const h=u=>{n.value?.call(this,u.matches)};i.addEventListener("change",h),this.disconnectedCallback=function(){l?.call(this),i.removeEventListener("change",h)},n.value?.call(this,i.matches)}}}class $d extends Fs{constructor(t){if(super(t),t.type!==Bs.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return he}update(t,[s]){const n=t.element,i=t.options?.host;Array.from(i.attributes).forEach(r=>{s(r)&&n.setAttribute(r.name.replace("gds-",""),r.value)})}}const Ki=cs($d),Nr=new WeakMap;function Sd(e){return(t,...s)=>{let n=Nr.get(t);return n||(n=t.map(i=>i.replace(/\n[\s]+</gm,"<")),n.raw=t.raw,Nr.set(t,n)),e(n,...s)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hr="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Md=(e,...t)=>({strTag:!0,strings:e,values:t}),Ed=Md,Td=e=>typeof e!="string"&&"strTag"in e,Ad=(e,t,s)=>{let n=e[0];for(let i=1;i<e.length;i++)n+=t[i-1],n+=e[i];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zd=e=>Td(e)?Ad(e.strings,e.values):e;let A=zd;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Dd{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(Hr,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Hr,this.__litLocalizeEventHandler)}}const Ld=e=>e.addController(new Dd(e)),Wd=Ld;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=()=>(e,t)=>(e.addInitializer(Wd),e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Od{constructor(){this.settled=!1,this.promise=new Promise((t,s)=>{this._resolve=t,this._reject=s})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let e=0;e<256;e++)(e>>4&15).toString(16)+(e&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Vd=new Od;Vd.resolve();var ne;class pe extends R{constructor(){super(),d(this,ne,void 0),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{H(this,ne,this.attachInternals())}catch{H(this,ne,{form:this.closest("form"),setFormValue:s=>{this.value=s},setValidity:(s,n)=>{a(this,ne).validity=s,this.errorMessage=n||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0})}}set invalid(t){const s=this.invalid;a(this,ne).setValidity({...a(this,ne).validity,customError:t,valid:!t},this.validationMessage||A("Error message."),this._getValidityAnchor()||void 0),this.requestUpdate("invalid",s),a(this,ne).checkValidity()}get invalid(){return!a(this,ne).validity.valid}get value(){return this._internalValue}set value(t){this._internalValue=t}get form(){return a(this,ne).form}get validity(){return a(this,ne).validity}get validationMessage(){return a(this,ne).validationMessage}get willValidate(){return a(this,ne).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const s=this.invalid,n=this.validator.validate(this)||[{...this.validity,valid:!0},""];return a(this,ne).setValidity(n[0],n[1],this._getValidityAnchor()),s!==this.invalid&&(this.requestUpdate("invalid",s),this.dispatchEvent(new CustomEvent("gds-validity-state",{bubbles:!0,composed:!0,detail:{valid:this.validity.valid,message:this.validationMessage}}))),a(this,ne).checkValidity()}reportValidity(){return a(this,ne).reportValidity()}__handleValueChange(){a(this,ne).setFormValue(this.value),this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(t){t?.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(t){this.checkValidity(),this.validity.valid||t.preventDefault()}focus(t){this._getValidityAnchor().focus(t)}}ne=new WeakMap;pe.formAssociated=!0;o([c({attribute:!1})],pe.prototype,"validator",2);o([c({type:Boolean})],pe.prototype,"required",2);o([c({attribute:"error-message"})],pe.prototype,"errorMessage",2);o([c({type:Boolean,reflect:!0})],pe.prototype,"invalid",1);o([c()],pe.prototype,"label",2);o([c()],pe.prototype,"value",1);o([c({reflect:!0})],pe.prototype,"name",2);o([c({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);o([Z("value",{waitUntilFirstUpdate:!0})],pe.prototype,"__handleValueChange",1);const Rd=`@layer tokens, core, a11y, ranks, sizes, variants, disabled;

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
`;var ms,et,mt,uo,va,po,go;const Bd=["aria-label","aria-haspopup","aria-expanded"],Fd=Sd(w);class re extends pe{constructor(){super(...arguments),d(this,et),d(this,uo),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",d(this,ms,!1),d(this,po,()=>{const t=this._mainSlot?.assignedElements()??[];H(this,ms,t.length===1&&t.some(s=>s.tagName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),d(this,go,t=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:t})),this.form&&!a(this,et,mt)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),ue.instance.apply(this,"gds-button")}render(){const t={button:!0,circle:a(this,ms),icon:a(this,ms),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",positive:this.variant==="positive",negative:this.variant==="negative",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},s=a(this,et,mt)?bn`a`:bn`button`;return hs`
      <${s}
        class=${Be(t)}
        type="${de(a(this,et,mt)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||he}
        href=${de(a(this,et,mt)?this.href:void 0)}
        target=${de(a(this,et,mt)?this.target:void 0)}
        rel=${de(a(this,et,mt)?this.rel||a(this,uo,va):void 0)}
        download=${de(a(this,et,mt)?this.download:void 0)}
        part="_button"
        @click="${a(this,go)}"
        ${Ki(n=>n.name.startsWith("gds-aria")||n.name==="gds-role"||Bd.includes(n.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${a(this,po)}></slot>
        <slot name="trail"></slot>
        ${N(!this._isUsingTransitionalStyles,()=>Fd`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${s}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}}ms=new WeakMap;et=new WeakSet;mt=function(){return this.href.length>0};uo=new WeakSet;va=function(){return this.target==="_blank"?"noreferrer noopener":void 0};po=new WeakMap;go=new WeakMap;re.styles=[G,ce(Rd)];re.shadowRootOptions={mode:"open",delegatesFocus:!0};o([c({type:Boolean,reflect:!0})],re.prototype,"disabled",2);o([b({selector:".button"})],re.prototype,"justify-content",2);o([c({reflect:!0})],re.prototype,"type",2);o([c({reflect:!0})],re.prototype,"rank",2);o([c({reflect:!0})],re.prototype,"variant",2);o([c({reflect:!0})],re.prototype,"size",2);o([c()],re.prototype,"label",2);o([c()],re.prototype,"href",2);o([c()],re.prototype,"target",2);o([c()],re.prototype,"rel",2);o([c()],re.prototype,"download",2);o([U("slot:not([name])")],re.prototype,"_mainSlot",2);o([U(".button")],re.prototype,"_button",2);o([Xi({attributes:!0,childList:!1,subtree:!1,characterData:!1})],re.prototype,"_attributeChanged",1);let He=class extends xe($e(we(re))){};He=o([$("gds-button",{dependsOn:[zs]})],He);He.define();function fo(e){"@babel/helpers - typeof";return fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fo(e)}function Tt(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function se(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function ee(e){se(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||fo(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Ft(e,t){se(2,arguments);var s=ee(e),n=Tt(t);return isNaN(n)?new Date(NaN):(n&&s.setDate(s.getDate()+n),s)}function ma(e,t){se(2,arguments);var s=ee(e),n=Tt(t);if(isNaN(n))return new Date(NaN);if(!n)return s;var i=s.getDate(),r=new Date(s.getTime());r.setMonth(s.getMonth()+n+1,0);var l=r.getDate();return i>=l?r:(s.setFullYear(r.getFullYear(),r.getMonth(),i),s)}var Id={};function er(){return Id}function os(e,t){var s,n,i,r,l,h,u,g;se(1,arguments);var v=er(),y=Tt((s=(n=(i=(r=t?.weekStartsOn)!==null&&r!==void 0?r:t==null||(l=t.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&i!==void 0?i:v.weekStartsOn)!==null&&n!==void 0?n:(u=v.locale)===null||u===void 0||(g=u.options)===null||g===void 0?void 0:g.weekStartsOn)!==null&&s!==void 0?s:0);if(!(y>=0&&y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var _=ee(e),k=_.getDay(),S=(k<y?7:0)+k-y;return _.setDate(_.getDate()-S),_.setHours(0,0,0,0),_}function Gr(e){se(1,arguments);var t=ee(e);return t.setHours(0,0,0,0),t}function Pd(e,t){se(2,arguments);var s=Tt(t),n=s*7;return Ft(e,n)}function xt(e,t){se(2,arguments);var s=Gr(e),n=Gr(t);return s.getTime()===n.getTime()}function Nd(e){se(1,arguments);var t=ee(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(23,59,59,999),t}function Hd(e,t){var s;se(1,arguments);var n=e||{},i=ee(n.start),r=ee(n.end),l=r.getTime();if(!(i.getTime()<=l))throw new RangeError("Invalid interval");var h=[],u=i;u.setHours(0,0,0,0);var g=Number((s=void 0)!==null&&s!==void 0?s:1);if(g<1||isNaN(g))throw new RangeError("`options.step` must be a number greater than 1");for(;u.getTime()<=l;)h.push(ee(u)),u.setDate(u.getDate()+g),u.setHours(0,0,0,0);return h}function Gd(e,t){se(1,arguments);var s=e||{},n=ee(s.start),i=ee(s.end),r=i.getTime();if(!(n.getTime()<=r))throw new RangeError("Invalid interval");var l=os(n,t),h=os(i,t);l.setHours(15),h.setHours(15),r=h.getTime();for(var u=[],g=l;g.getTime()<=r;)g.setHours(0),u.push(ee(g)),g=Pd(g,1),g.setHours(15);return u}function Yd(e){se(1,arguments);var t=ee(e);return t.setDate(1),t.setHours(0,0,0,0),t}function jd(e,t){var s,n,i,r,l,h;se(1,arguments);var u=ee(e),g=u.getFullYear(),v=er(),y=Tt((s=(n=(i=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&i!==void 0?i:v.firstWeekContainsDate)!==null&&n!==void 0?n:(l=v.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var _=new Date(0);_.setFullYear(g+1,0,y),_.setHours(0,0,0,0);var k=os(_,t),S=new Date(0);S.setFullYear(g,0,y),S.setHours(0,0,0,0);var T=os(S,t);return u.getTime()>=k.getTime()?g+1:u.getTime()>=T.getTime()?g:g-1}function Ud(e,t){var s,n,i,r,l,h;se(1,arguments);var u=er(),g=Tt((s=(n=(i=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&i!==void 0?i:u.firstWeekContainsDate)!==null&&n!==void 0?n:(l=u.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&s!==void 0?s:1),v=jd(e,t),y=new Date(0);y.setFullYear(v,0,g),y.setHours(0,0,0,0);var _=os(y,t);return _}var qd=6048e5;function Zd(e,t){se(1,arguments);var s=ee(e),n=os(s,t).getTime()-Ud(s,t).getTime();return Math.round(n/qd)+1}function Qd(e){se(1,arguments);var t=ee(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(0,0,0,0),t}function Jd(e,t){se(2,arguments);var s=ee(e),n=ee(t);return s.getFullYear()===n.getFullYear()&&s.getMonth()===n.getMonth()}function Xd(e,t){se(2,arguments);var s=ee(e),n=Tt(t);return s.setHours(n),s}function Kd(e,t){se(2,arguments);var s=Tt(t);return ma(e,-s)}const ec=D`
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
`;var tc=ec;function sc(e,t){const s=Yd(e),n=Nd(e),i=Gd({start:s,end:n},{weekStartsOn:1});for(;i.length<6;)i.push(Ft(i[i.length-1],7));return ye`${t(i.map(r=>({days:Hd({start:r,end:Ft(r,6)})})))}`}var vn,tr,yo,xa;let q=class extends R{constructor(){super(...arguments),d(this,vn),d(this,yo),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=e=>e.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=Qd(new Date(this.focusedYear,e,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),s.setMonth(e),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){return this.shadowRoot?.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),ue.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",x(this,yo,xa)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){super.focus(),this._elFocusedCell?.focus()}render(){const e=new Date;return ye`<table role="grid" aria-label="${de(this.label)}">
      ${N(!this.hideDayNames,()=>ye`<thead role="rowgroup">
            <tr role="row">
              ${N(this.showWeekNumbers,()=>ye`<th></th>`)}
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
        ${sc(this.focusedDate,t=>ye`
            ${t.map(s=>ye`
                <tr role="row">
                  ${N(this.showWeekNumbers,()=>ye`<td class="week-number" scope="row">
                        ${Zd(s.days[0])}
                      </td>`)}
                  ${s.days.map(n=>{const i=this.customizedDates&&this.customizedDates.find(y=>xt(y.date,n)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(y=>xt(y,n))),...i},l=!Jd(this.focusedDate,n),h=(n<this.min||n>this.max)&&!xt(n,this.min)&&!xt(n,this.max),u=n.getDay()===0||n.getDay()===6,g=r.disabled||l||h||this.disabledWeekends&&u;return this.hideExtraneousDays&&l?ye`<td inert></td>`:ye`
                          <td
                            role="${de(g?void 0:"gridcell")}"
                            class="${Be({"custom-date":!!i,disabled:!!g,today:xt(e,n)})}"
                            ?disabled=${g}
                            tabindex="${xt(this.focusedDate,n)?0:-1}"
                            aria-selected="${this.value&&xt(this.value,n)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(n)}"
                            @click=${()=>g?null:x(this,vn,tr).call(this,n)}
                            id="dateCell-${n.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${r?r?.color:""}"
                              >${n.getDate()}</span
                            >

                            ${N(r.indicator,()=>ye`<span
                                  class="indicator-${r?.indicator}"
                                  style="--_color: ${r?.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};vn=new WeakSet;tr=function(e){const t=Xd(e,12);this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t,bubbles:!1,composed:!1}))};yo=new WeakSet;xa=function(e){let t=!1,s=new Date(this.focusedDate);e.key==="ArrowLeft"?(s=Ft(this.focusedDate,-1),t=!0):e.key==="ArrowRight"?(s=Ft(this.focusedDate,1),t=!0):e.key==="ArrowUp"?(s=Ft(this.focusedDate,-7),t=!0):e.key==="ArrowDown"?(s=Ft(this.focusedDate,7),t=!0):e.key==="Enter"||e.key===" "?(this._elFocusedCell?.hasAttribute("disabled")||x(this,vn,tr).call(this,this.focusedDate),t=!0):e.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):e.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):e.key==="PageUp"?(s=Kd(this.focusedDate,1),t=!0):e.key==="PageDown"&&(s=ma(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus()}))};q.styles=[G,tc];q.shadowRootOptions={mode:"open",delegatesFocus:!0};o([c()],q.prototype,"value",2);o([c({type:Date})],q.prototype,"min",2);o([c({type:Date})],q.prototype,"max",2);o([c()],q.prototype,"focusedDate",2);o([c({type:Boolean,attribute:"disabled-weekends"})],q.prototype,"disabledWeekends",2);o([c({type:Array,attribute:"disabled-dates"})],q.prototype,"disabledDates",2);o([c({type:Number})],q.prototype,"focusedMonth",1);o([c({type:Number})],q.prototype,"focusedYear",1);o([c({type:Boolean})],q.prototype,"showWeekNumbers",2);o([c({type:Boolean})],q.prototype,"hideExtraneousDays",2);o([c({type:Boolean})],q.prototype,"hideDayNames",2);o([c({attribute:!1})],q.prototype,"customizedDates",2);o([c()],q.prototype,"label",2);o([c({attribute:!1})],q.prototype,"dateLabelTemplate",2);o([ie()],q.prototype,"_currentLocale",2);o([U('td[tabindex="0"]')],q.prototype,"_elFocusedCell",2);o([Z("value")],q.prototype,"_valueChanged",1);q=o([$("gds-calendar"),Fe()],q);q.define();let Ct=class extends V{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return w`<slot></slot>`}};Ct.styles=[G,D`
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
    `];o([b({property:"box-shadow",valueTemplate:e=>`var(--gds-sys-shadow-${e})`})],Ct.prototype,"shadow",2);o([b({styleTemplate:function(e,t){return`
      --_border-color: var(--gds-sys-color-l${this.level}-background-${t});
      --_background-color: var(--gds-sys-color-l${this.level}-background-${t});
      --_color: var(--gds-sys-color-l${this.level}-content-${t});
      `}})],Ct.prototype,"variant",2);Ct=o([$("gds-card")],Ct);Ct.define();let bo=class extends V{};bo=o([$("gds-container")],bo);bo.define();const wa=e=>{class t extends e{constructor(){super(...arguments),this.onblur=n=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:n.relatedTarget}))},this.onfocus=n=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:n.relatedTarget}))}}focus(n){this.setAttribute("tabindex","0"),super.focus(n)}}return t},nc=D`
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
`;var _a=nc,vo;let is=class extends wa(R){constructor(){super(...arguments),d(this,vo,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",a(this,vo)),ue.instance.apply(this,"gds-option")}render(){return w`<div><slot></slot></div>`}};vo=new WeakMap;is.styles=[_a];is=o([$("gds-menu-item")],is);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:oc}=jl,ic=e=>e===null||typeof e!="object"&&typeof e!="function",rc=e=>e.strings===void 0,Yr=()=>document.createComment(""),bs=(e,t,s)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(s===void 0){const r=n.insertBefore(Yr(),i),l=n.insertBefore(Yr(),i);s=new oc(r,l,e,e.options)}else{const r=s._$AB.nextSibling,l=s._$AM,h=l!==e;if(h){let u;s._$AQ?.(e),s._$AM=e,s._$AP!==void 0&&(u=e._$AU)!==l._$AU&&s._$AP(u)}if(r!==i||h){let u=s._$AA;for(;u!==r;){const g=u.nextSibling;n.insertBefore(u,i),u=g}}}return s},zt=(e,t,s=e)=>(e._$AI(t,s),e),ac={},lc=(e,t=ac)=>e._$AH=t,dc=e=>e._$AH,Xn=e=>{e._$AP?.(!1,!0);let t=e._$AA;const s=e._$AB.nextSibling;for(;t!==s;){const n=t.nextSibling;t.remove(),t=n}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Es=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(t,!1),Es(n,t);return!0},mn=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},ka=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),uc(t)}};function cc(e){this._$AN!==void 0?(mn(this),this._$AM=e,ka(this)):this._$AM=e}function hc(e,t=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let r=s;r<n.length;r++)Es(n[r],!1),mn(n[r]);else n!=null&&(Es(n,!1),mn(n));else Es(this,e)}const uc=e=>{e.type==Bs.CHILD&&(e._$AP??=hc,e._$AQ??=cc)};class Ca extends Fs{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),ka(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(Es(this,t),mn(this))}setValue(t){if(rc(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $a=()=>new pc;let pc=class{};const Kn=new WeakMap,Sa=cs(class extends Ca{render(e){return he}update(e,[t]){const s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),he}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let s=Kn.get(t);s===void 0&&(s=new WeakMap,Kn.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return typeof this.Y=="function"?Kn.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Us;class Ma{constructor(t){d(this,Us,s=>{const n=s.target;if(!this.host.navigableItems.includes(n))return;let i=!1;if(s.key==="ArrowDown"){const r=this.host.navigableItems.indexOf(n)+1;this.host.navigableItems[r]?.focus(),i=!0}else if(s.key==="ArrowUp"){const r=this.host.navigableItems.indexOf(n)-1;this.host.navigableItems[r]?.focus(),i=!0}else if(s.key==="Home")this.host.navigableItems[0]?.focus(),i=!0;else if(s.key==="End")this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),i=!0;else{const r=s.key.toLowerCase();if(r.length!==1)return;const l=r>="a"&&r<="z",h=r>="0"&&r<="9";(l||h)&&(this.host.navigableItems.find(g=>g.textContent?.trim().toLowerCase()?.startsWith(r))?.focus(),i=!0)}i&&(s.preventDefault(),s.stopPropagation())}),(this.host=t).addController(this)}hostConnected(){this.host.addEventListener("keydown",a(this,Us))}hostDisconnected(){this.host.removeEventListener("keydown",a(this,Us))}}Us=new WeakMap;function Ea(e){let t=e;for(;t.assignedElements().length>0&&t.assignedElements()[0].nodeName==="SLOT";)t=t.assignedElements()[0];return t}var xs;let mo=class extends R{constructor(){super(),d(this,xs,$a()),new Ma(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),ue.instance.apply(this,"gds-listbox")}get navigableItems(){return a(this,xs).value?Ea(a(this,xs).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){this.navigableItems[0]?.focus()}render(){return w`<slot ${Sa(a(this,xs))}></slot>`}};xs=new WeakMap;mo=o([$("gds-menu",{dependsOn:[is]})],mo);const xn=Math.min,Pt=Math.max,wn=Math.round,Gs=Math.floor,Ne=e=>({x:e,y:e}),gc={left:"right",right:"left",bottom:"top",top:"bottom"},fc={start:"end",end:"start"};function jr(e,t,s){return Pt(e,xn(t,s))}function Rn(e,t){return typeof e=="function"?e(t):e}function Ht(e){return e.split("-")[0]}function Bn(e){return e.split("-")[1]}function Ta(e){return e==="x"?"y":"x"}function Aa(e){return e==="y"?"height":"width"}function rs(e){return["top","bottom"].includes(Ht(e))?"y":"x"}function za(e){return Ta(rs(e))}function yc(e,t,s){s===void 0&&(s=!1);const n=Bn(e),i=za(e),r=Aa(i);let l=i==="x"?n===(s?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(l=_n(l)),[l,_n(l)]}function bc(e){const t=_n(e);return[xo(e),t,xo(t)]}function xo(e){return e.replace(/start|end/g,t=>fc[t])}function vc(e,t,s){const n=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return s?t?i:n:t?n:i;case"left":case"right":return t?r:l;default:return[]}}function mc(e,t,s,n){const i=Bn(e);let r=vc(Ht(e),s==="start",n);return i&&(r=r.map(l=>l+"-"+i),t&&(r=r.concat(r.map(xo)))),r}function _n(e){return e.replace(/left|right|bottom|top/g,t=>gc[t])}function xc(e){return{top:0,right:0,bottom:0,left:0,...e}}function wc(e){return typeof e!="number"?xc(e):{top:e,right:e,bottom:e,left:e}}function kn(e){const{x:t,y:s,width:n,height:i}=e;return{width:n,height:i,top:s,left:t,right:t+n,bottom:s+i,x:t,y:s}}function Ur(e,t,s){let{reference:n,floating:i}=e;const r=rs(t),l=za(t),h=Aa(l),u=Ht(t),g=r==="y",v=n.x+n.width/2-i.width/2,y=n.y+n.height/2-i.height/2,_=n[h]/2-i[h]/2;let k;switch(u){case"top":k={x:v,y:n.y-i.height};break;case"bottom":k={x:v,y:n.y+n.height};break;case"right":k={x:n.x+n.width,y};break;case"left":k={x:n.x-i.width,y};break;default:k={x:n.x,y:n.y}}switch(Bn(t)){case"start":k[l]-=_*(s&&g?-1:1);break;case"end":k[l]+=_*(s&&g?-1:1);break}return k}const _c=async(e,t,s)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:l}=s,h=r.filter(Boolean),u=await(l.isRTL==null?void 0:l.isRTL(t));let g=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:v,y}=Ur(g,n,u),_=n,k={},S=0;for(let T=0;T<h.length;T++){const{name:B,fn:O}=h[T],{x:Y,y:Q,data:ae,reset:X}=await O({x:v,y,initialPlacement:n,placement:_,strategy:i,middlewareData:k,rects:g,platform:l,elements:{reference:e,floating:t}});v=Y??v,y=Q??y,k={...k,[B]:{...k[B],...ae}},X&&S<=50&&(S++,typeof X=="object"&&(X.placement&&(_=X.placement),X.rects&&(g=X.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:i}):X.rects),{x:v,y}=Ur(g,_,u)),T=-1)}return{x:v,y,placement:_,strategy:i,middlewareData:k}};async function Da(e,t){var s;t===void 0&&(t={});const{x:n,y:i,platform:r,rects:l,elements:h,strategy:u}=e,{boundary:g="clippingAncestors",rootBoundary:v="viewport",elementContext:y="floating",altBoundary:_=!1,padding:k=0}=Rn(t,e),S=wc(k),B=h[_?y==="floating"?"reference":"floating":y],O=kn(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(B)))==null||s?B:B.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(h.floating)),boundary:g,rootBoundary:v,strategy:u})),Y=y==="floating"?{x:n,y:i,width:l.floating.width,height:l.floating.height}:l.reference,Q=await(r.getOffsetParent==null?void 0:r.getOffsetParent(h.floating)),ae=await(r.isElement==null?void 0:r.isElement(Q))?await(r.getScale==null?void 0:r.getScale(Q))||{x:1,y:1}:{x:1,y:1},X=kn(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:h,rect:Y,offsetParent:Q,strategy:u}):Y);return{top:(O.top-X.top+S.top)/ae.y,bottom:(X.bottom-O.bottom+S.bottom)/ae.y,left:(O.left-X.left+S.left)/ae.x,right:(X.right-O.right+S.right)/ae.x}}const kc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,n;const{placement:i,middlewareData:r,rects:l,initialPlacement:h,platform:u,elements:g}=t,{mainAxis:v=!0,crossAxis:y=!0,fallbackPlacements:_,fallbackStrategy:k="bestFit",fallbackAxisSideDirection:S="none",flipAlignment:T=!0,...B}=Rn(e,t);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const O=Ht(i),Y=rs(h),Q=Ht(h)===h,ae=await(u.isRTL==null?void 0:u.isRTL(g.floating)),X=_||(Q||!T?[_n(h)]:bc(h)),ft=S!=="none";!_&&ft&&X.push(...mc(h,T,S,ae));const jn=[h,...X],gs=await Da(t,B),Zt=[];let At=((n=r.flip)==null?void 0:n.overflows)||[];if(v&&Zt.push(gs[O]),y){const Se=yc(i,l,ae);Zt.push(gs[Se[0]],gs[Se[1]])}if(At=[...At,{placement:i,overflows:Zt}],!Zt.every(Se=>Se<=0)){var Ps,yt;const Se=(((Ps=r.flip)==null?void 0:Ps.index)||0)+1,ys=jn[Se];if(ys)return{data:{index:Se,overflows:At},reset:{placement:ys}};let bt=(yt=At.filter(Xe=>Xe.overflows[0]<=0).sort((Xe,Me)=>Xe.overflows[1]-Me.overflows[1])[0])==null?void 0:yt.placement;if(!bt)switch(k){case"bestFit":{var fs;const Xe=(fs=At.filter(Me=>{if(ft){const Ee=rs(Me.placement);return Ee===Y||Ee==="y"}return!0}).map(Me=>[Me.placement,Me.overflows.filter(Ee=>Ee>0).reduce((Ee,Ns)=>Ee+Ns,0)]).sort((Me,Ee)=>Me[1]-Ee[1])[0])==null?void 0:fs[0];Xe&&(bt=Xe);break}case"initialPlacement":bt=h;break}if(i!==bt)return{reset:{placement:bt}}}return{}}}};async function Cc(e,t){const{placement:s,platform:n,elements:i}=e,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),l=Ht(s),h=Bn(s),u=rs(s)==="y",g=["left","top"].includes(l)?-1:1,v=r&&u?-1:1,y=Rn(t,e);let{mainAxis:_,crossAxis:k,alignmentAxis:S}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:y.mainAxis||0,crossAxis:y.crossAxis||0,alignmentAxis:y.alignmentAxis};return h&&typeof S=="number"&&(k=h==="end"?S*-1:S),u?{x:k*v,y:_*g}:{x:_*g,y:k*v}}const $c=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var s,n;const{x:i,y:r,placement:l,middlewareData:h}=t,u=await Cc(t,e);return l===((s=h.offset)==null?void 0:s.placement)&&(n=h.arrow)!=null&&n.alignmentOffset?{}:{x:i+u.x,y:r+u.y,data:{...u,placement:l}}}}},Sc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:n,placement:i}=t,{mainAxis:r=!0,crossAxis:l=!1,limiter:h={fn:B=>{let{x:O,y:Y}=B;return{x:O,y:Y}}},...u}=Rn(e,t),g={x:s,y:n},v=await Da(t,u),y=rs(Ht(i)),_=Ta(y);let k=g[_],S=g[y];if(r){const B=_==="y"?"top":"left",O=_==="y"?"bottom":"right",Y=k+v[B],Q=k-v[O];k=jr(Y,k,Q)}if(l){const B=y==="y"?"top":"left",O=y==="y"?"bottom":"right",Y=S+v[B],Q=S-v[O];S=jr(Y,S,Q)}const T=h.fn({...t,[_]:k,[y]:S});return{...T,data:{x:T.x-s,y:T.y-n,enabled:{[_]:r,[y]:l}}}}}};function Fn(){return typeof window<"u"}function us(e){return La(e)?(e.nodeName||"").toLowerCase():"#document"}function ve(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Je(e){var t;return(t=(La(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function La(e){return Fn()?e instanceof Node||e instanceof ve(e).Node:!1}function Ae(e){return Fn()?e instanceof Element||e instanceof ve(e).Element:!1}function Ge(e){return Fn()?e instanceof HTMLElement||e instanceof ve(e).HTMLElement:!1}function qr(e){return!Fn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ve(e).ShadowRoot}function Is(e){const{overflow:t,overflowX:s,overflowY:n,display:i}=ze(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+s)&&!["inline","contents"].includes(i)}function Mc(e){return["table","td","th"].includes(us(e))}function In(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function sr(e){const t=nr(),s=Ae(e)?ze(e):e;return s.transform!=="none"||s.perspective!=="none"||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(s.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(s.contain||"").includes(n))}function Ec(e){let t=$t(e);for(;Ge(t)&&!as(t);){if(sr(t))return t;if(In(t))return null;t=$t(t)}return null}function nr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function as(e){return["html","body","#document"].includes(us(e))}function ze(e){return ve(e).getComputedStyle(e)}function Pn(e){return Ae(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function $t(e){if(us(e)==="html")return e;const t=e.assignedSlot||e.parentNode||qr(e)&&e.host||Je(e);return qr(t)?t.host:t}function Wa(e){const t=$t(e);return as(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ge(t)&&Is(t)?t:Wa(t)}function Ds(e,t,s){var n;t===void 0&&(t=[]),s===void 0&&(s=!0);const i=Wa(e),r=i===((n=e.ownerDocument)==null?void 0:n.body),l=ve(i);if(r){const h=wo(l);return t.concat(l,l.visualViewport||[],Is(i)?i:[],h&&s?Ds(h):[])}return t.concat(i,Ds(i,[],s))}function wo(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Oa(e){const t=ze(e);let s=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=Ge(e),r=i?e.offsetWidth:s,l=i?e.offsetHeight:n,h=wn(s)!==r||wn(n)!==l;return h&&(s=r,n=l),{width:s,height:n,$:h}}function or(e){return Ae(e)?e:e.contextElement}function ns(e){const t=or(e);if(!Ge(t))return Ne(1);const s=t.getBoundingClientRect(),{width:n,height:i,$:r}=Oa(t);let l=(r?wn(s.width):s.width)/n,h=(r?wn(s.height):s.height)/i;return(!l||!Number.isFinite(l))&&(l=1),(!h||!Number.isFinite(h))&&(h=1),{x:l,y:h}}const Tc=Ne(0);function Va(e){const t=ve(e);return!nr()||!t.visualViewport?Tc:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ac(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==ve(e)?!1:t}function Gt(e,t,s,n){t===void 0&&(t=!1),s===void 0&&(s=!1);const i=e.getBoundingClientRect(),r=or(e);let l=Ne(1);t&&(n?Ae(n)&&(l=ns(n)):l=ns(e));const h=Ac(r,s,n)?Va(r):Ne(0);let u=(i.left+h.x)/l.x,g=(i.top+h.y)/l.y,v=i.width/l.x,y=i.height/l.y;if(r){const _=ve(r),k=n&&Ae(n)?ve(n):n;let S=_,T=wo(S);for(;T&&n&&k!==S;){const B=ns(T),O=T.getBoundingClientRect(),Y=ze(T),Q=O.left+(T.clientLeft+parseFloat(Y.paddingLeft))*B.x,ae=O.top+(T.clientTop+parseFloat(Y.paddingTop))*B.y;u*=B.x,g*=B.y,v*=B.x,y*=B.y,u+=Q,g+=ae,S=ve(T),T=wo(S)}}return kn({width:v,height:y,x:u,y:g})}function ir(e,t){const s=Pn(e).scrollLeft;return t?t.left+s:Gt(Je(e)).left+s}function Ra(e,t,s){s===void 0&&(s=!1);const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-(s?0:ir(e,n)),r=n.top+t.scrollTop;return{x:i,y:r}}function zc(e){let{elements:t,rect:s,offsetParent:n,strategy:i}=e;const r=i==="fixed",l=Je(n),h=t?In(t.floating):!1;if(n===l||h&&r)return s;let u={scrollLeft:0,scrollTop:0},g=Ne(1);const v=Ne(0),y=Ge(n);if((y||!y&&!r)&&((us(n)!=="body"||Is(l))&&(u=Pn(n)),Ge(n))){const k=Gt(n);g=ns(n),v.x=k.x+n.clientLeft,v.y=k.y+n.clientTop}const _=l&&!y&&!r?Ra(l,u,!0):Ne(0);return{width:s.width*g.x,height:s.height*g.y,x:s.x*g.x-u.scrollLeft*g.x+v.x+_.x,y:s.y*g.y-u.scrollTop*g.y+v.y+_.y}}function Dc(e){return Array.from(e.getClientRects())}function Lc(e){const t=Je(e),s=Pn(e),n=e.ownerDocument.body,i=Pt(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=Pt(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let l=-s.scrollLeft+ir(e);const h=-s.scrollTop;return ze(n).direction==="rtl"&&(l+=Pt(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:l,y:h}}function Wc(e,t){const s=ve(e),n=Je(e),i=s.visualViewport;let r=n.clientWidth,l=n.clientHeight,h=0,u=0;if(i){r=i.width,l=i.height;const g=nr();(!g||g&&t==="fixed")&&(h=i.offsetLeft,u=i.offsetTop)}return{width:r,height:l,x:h,y:u}}function Oc(e,t){const s=Gt(e,!0,t==="fixed"),n=s.top+e.clientTop,i=s.left+e.clientLeft,r=Ge(e)?ns(e):Ne(1),l=e.clientWidth*r.x,h=e.clientHeight*r.y,u=i*r.x,g=n*r.y;return{width:l,height:h,x:u,y:g}}function Zr(e,t,s){let n;if(t==="viewport")n=Wc(e,s);else if(t==="document")n=Lc(Je(e));else if(Ae(t))n=Oc(t,s);else{const i=Va(e);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return kn(n)}function Ba(e,t){const s=$t(e);return s===t||!Ae(s)||as(s)?!1:ze(s).position==="fixed"||Ba(s,t)}function Vc(e,t){const s=t.get(e);if(s)return s;let n=Ds(e,[],!1).filter(h=>Ae(h)&&us(h)!=="body"),i=null;const r=ze(e).position==="fixed";let l=r?$t(e):e;for(;Ae(l)&&!as(l);){const h=ze(l),u=sr(l);!u&&h.position==="fixed"&&(i=null),(r?!u&&!i:!u&&h.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Is(l)&&!u&&Ba(e,l))?n=n.filter(v=>v!==l):i=h,l=$t(l)}return t.set(e,n),n}function Rc(e){let{element:t,boundary:s,rootBoundary:n,strategy:i}=e;const l=[...s==="clippingAncestors"?In(t)?[]:Vc(t,this._c):[].concat(s),n],h=l[0],u=l.reduce((g,v)=>{const y=Zr(t,v,i);return g.top=Pt(y.top,g.top),g.right=xn(y.right,g.right),g.bottom=xn(y.bottom,g.bottom),g.left=Pt(y.left,g.left),g},Zr(t,h,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Bc(e){const{width:t,height:s}=Oa(e);return{width:t,height:s}}function Fc(e,t,s){const n=Ge(t),i=Je(t),r=s==="fixed",l=Gt(e,!0,r,t);let h={scrollLeft:0,scrollTop:0};const u=Ne(0);if(n||!n&&!r)if((us(t)!=="body"||Is(i))&&(h=Pn(t)),n){const _=Gt(t,!0,r,t);u.x=_.x+t.clientLeft,u.y=_.y+t.clientTop}else i&&(u.x=ir(i));const g=i&&!n&&!r?Ra(i,h):Ne(0),v=l.left+h.scrollLeft-u.x-g.x,y=l.top+h.scrollTop-u.y-g.y;return{x:v,y,width:l.width,height:l.height}}function eo(e){return ze(e).position==="static"}function Qr(e,t){if(!Ge(e)||ze(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return Je(e)===s&&(s=s.ownerDocument.body),s}function Fa(e,t){const s=ve(e);if(In(e))return s;if(!Ge(e)){let i=$t(e);for(;i&&!as(i);){if(Ae(i)&&!eo(i))return i;i=$t(i)}return s}let n=Qr(e,t);for(;n&&Mc(n)&&eo(n);)n=Qr(n,t);return n&&as(n)&&eo(n)&&!sr(n)?s:n||Ec(e)||s}const Ic=async function(e){const t=this.getOffsetParent||Fa,s=this.getDimensions,n=await s(e.floating);return{reference:Fc(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Pc(e){return ze(e).direction==="rtl"}const Nc={convertOffsetParentRelativeRectToViewportRelativeRect:zc,getDocumentElement:Je,getClippingRect:Rc,getOffsetParent:Fa,getElementRects:Ic,getClientRects:Dc,getDimensions:Bc,getScale:ns,isElement:Ae,isRTL:Pc};function Hc(e,t){let s=null,n;const i=Je(e);function r(){var h;clearTimeout(n),(h=s)==null||h.disconnect(),s=null}function l(h,u){h===void 0&&(h=!1),u===void 0&&(u=1),r();const{left:g,top:v,width:y,height:_}=e.getBoundingClientRect();if(h||t(),!y||!_)return;const k=Gs(v),S=Gs(i.clientWidth-(g+y)),T=Gs(i.clientHeight-(v+_)),B=Gs(g),Y={rootMargin:-k+"px "+-S+"px "+-T+"px "+-B+"px",threshold:Pt(0,xn(1,u))||1};let Q=!0;function ae(X){const ft=X[0].intersectionRatio;if(ft!==u){if(!Q)return l();ft?l(!1,ft):n=setTimeout(()=>{l(!1,1e-7)},1e3)}Q=!1}try{s=new IntersectionObserver(ae,{...Y,root:i.ownerDocument})}catch{s=new IntersectionObserver(ae,Y)}s.observe(e)}return l(!0),r}function Gc(e,t,s,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:h=typeof IntersectionObserver=="function",animationFrame:u=!1}=n,g=or(e),v=i||r?[...g?Ds(g):[],...Ds(t)]:[];v.forEach(O=>{i&&O.addEventListener("scroll",s,{passive:!0}),r&&O.addEventListener("resize",s)});const y=g&&h?Hc(g,s):null;let _=-1,k=null;l&&(k=new ResizeObserver(O=>{let[Y]=O;Y&&Y.target===g&&k&&(k.unobserve(t),cancelAnimationFrame(_),_=requestAnimationFrame(()=>{var Q;(Q=k)==null||Q.observe(t)})),s()}),g&&!u&&k.observe(g),k.observe(t));let S,T=u?Gt(e):null;u&&B();function B(){const O=Gt(e);T&&(O.x!==T.x||O.y!==T.y||O.width!==T.width||O.height!==T.height)&&s(),T=O,S=requestAnimationFrame(B)}return s(),()=>{var O;v.forEach(Y=>{i&&Y.removeEventListener("scroll",s),r&&Y.removeEventListener("resize",s)}),y?.(),(O=k)==null||O.disconnect(),k=null,u&&cancelAnimationFrame(S)}}const Ia=$c,Yc=Sc,jc=kc,Uc=(e,t,s)=>{const n=new Map,i={platform:Nc,...s},r={...i.platform,_c:n};return _c(e,t,{...i,platform:r})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _o extends Fs{constructor(t){if(super(t),this.it=he,t.type!==Bs.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===he||t==null)return this._t=void 0,this.it=t;if(t===As)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}_o.directiveName="unsafeHTML",_o.resultType=1;const Pa=cs(_o),qc=D`
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
`;var Zc=qc;class J extends $e(we(R)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.box=!1,this.label=""}get svgAttributes(){const t=this.constructor,s={fill:"none",xmlns:"http://www.w3.org/2000/svg",...this.size===void 0&&{width:this.width||t._width,height:this.width||t._height}||{},viewBox:this.box||t._viewBox,part:"icon"};return this.label?{...s,"aria-label":this.label}:{...s,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([s,n])=>n!==void 0).map(([s,n])=>`${s}="${n}"`).join(`
      `)}render(){const t=this.svgAttributes;let s=this.svgContent||"";this.stroke&&(s=this.applyStroke(s));const n=`
      <svg ${this.generateAttributesString(t)}>
        ${s}
      </svg>
    `;return ye`${Pa(n)}`}}J.styles=[G,Zc];o([b({...be,property:"height",selector:"svg"})],J.prototype,"size",2);o([c({type:Number})],J.prototype,"width",2);o([c({type:Number})],J.prototype,"height",2);o([c({type:Boolean})],J.prototype,"solid",2);o([c({type:Number})],J.prototype,"stroke",2);o([c()],J.prototype,"level",2);o([b(Rs("content"))],J.prototype,"color",2);o([c({type:String})],J.prototype,"box",2);o([c({type:String})],J.prototype,"label",2);J.define();let rt=class extends J{};rt._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';rt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>';rt._name="cross-small";rt._width=24;rt._height=24;rt._viewBox="0 0 24 24";rt=o([$("gds-icon-cross-small")],rt);const Qc=D`
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
`;var Jc=Qc,ko,Na,Nt,Cn,wt,ws,Dt,Co,qs,$o,So,Ha,Mo,Ga,Zs,Eo,Nn,Hn,Qs,Js;let W=class extends R{constructor(){super(...arguments),d(this,ko),d(this,qs),d(this,So),d(this,Mo),d(this,Zs),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.autofocus=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>`${window.innerHeight-16}px`,this.nonmodal=!1,this.floatingUIMiddleware=W.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,d(this,Nt,void 0),d(this,Cn,!1),d(this,wt,void 0),d(this,ws,()=>{a(this,Dt).call(this,"cancel")&&(this.open=!1)}),d(this,Dt,e=>{const t=e==="show";return this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:t,reason:e},bubbles:!1,composed:!1,cancelable:!0}))}),d(this,Co,e=>{e.stopPropagation(),e.preventDefault(),a(this,Dt).call(this,"close")&&(this.open=!1,setTimeout(()=>this._trigger?.focus(),250))}),d(this,Nn,e=>{(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),this.open=!0,a(this,Dt).call(this,"show")),e.key==="Escape"&&this.open&&a(this,ws).call(this)}),d(this,Hn,e=>{e.preventDefault(),a(this,Dt).call(this,this.open?"close":"show")&&(this.open=!this.open)}),d(this,Qs,()=>{const e=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then(()=>{e?.focus()})}),d(this,Js,e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const i=s.getBoundingClientRect();!(i.top<=t.clientY&&t.clientY<=i.top+i.height&&i.left<=t.clientX&&t.clientX<=i.left+i.width)&&a(this,Dt).call(this,"close")&&(this.open=!1)}})}_handleTriggerRefChanged(){this.triggerRef?.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){this.anchorRef?.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){x(this,qs,$o).call(this),x(this,Mo,Ga).call(this)}_handleAnchorChanged(){x(this,Zs,Eo).call(this)}connectedCallback(){super.connectedCallback(),ue.instance.apply(this,"gds-popover"),x(this,qs,$o).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{e.key==="Escape"&&this.open&&(a(this,ws).call(this),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{const t=e.target;t.tagName==="INPUT"||t.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),x(this,So,Ha).call(this)}render(){return w`<slot
        name="trigger"
        @slotchange=${x(this,ko,Na)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${Be({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&a(this,ws).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${a(this,Co)}
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
      </div>`}_handleOpenChange(){const e=(this.nonmodal?a(this,wt):this._elDialog)||document;this.updateComplete.then(()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?this._elDialog?.setAttribute("open","true"):this._elDialog?.showModal(),this.autofocus&&(a(this,Qs).call(this),setTimeout(()=>a(this,Qs).call(this),250)),requestAnimationFrame(()=>{a(this,wt)&&(a(this,wt).show=!0)}),setTimeout(()=>e.addEventListener("click",a(this,Js)),0)):(this._elDialog?.close(),e.removeEventListener("click",a(this,Js)),a(this,wt)&&(a(this,wt).show=!1))})}_handleBackdropChange(){const e=this.parentElement?.getRootNode();!this.backdrop||!e||H(this,wt,e.querySelector(this.backdrop))}_handleMobileLayout(e){var t;H(this,Cn,e),e&&!this.disableMobileStyles?((t=a(this,Nt))==null||t.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("minWidth"),this.updateComplete.then(()=>{this.open&&this._elDialog?.showModal()})):this.updateComplete.then(()=>{x(this,Zs,Eo).call(this)})}};ko=new WeakSet;Na=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};Nt=new WeakMap;Cn=new WeakMap;wt=new WeakMap;ws=new WeakMap;Dt=new WeakMap;Co=new WeakMap;qs=new WeakSet;$o=function(){this._trigger?.addEventListener("keydown",a(this,Nn)),this._trigger?.addEventListener("click",a(this,Hn))};So=new WeakSet;Ha=function(){var e;this._trigger?.removeEventListener("keydown",a(this,Nn)),this._trigger?.removeEventListener("click",a(this,Hn)),(e=a(this,Nt))==null||e.call(this)};Mo=new WeakSet;Ga=function(){if(this._trigger){this._trigger?.setAttribute("aria-expanded",String(this.open));const e=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||e.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const s=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";this._trigger.getAttribute(s)===null&&this._trigger.setAttribute(s,this.popupRole)}};Zs=new WeakSet;Eo=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;!e||!t||a(this,Cn)&&!this.disableMobileStyles||(a(this,Nt)&&a(this,Nt).call(this),H(this,Nt,Gc(e,t,()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),Uc(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:s,y:n})=>Object.assign(t.style,{left:`${s}px`,top:`${n}px`}))})))};Nn=new WeakMap;Hn=new WeakMap;Qs=new WeakMap;Js=new WeakMap;W.styles=ce(Jc);W.DefaultMiddleware=[Ia(8),Yc({crossAxis:!0,padding:8})];o([c({type:Boolean,reflect:!0})],W.prototype,"open",2);o([c({attribute:"popup-role"})],W.prototype,"popupRole",2);o([c({attribute:!1})],W.prototype,"triggerRef",2);o([c({attribute:!1})],W.prototype,"anchorRef",2);o([c()],W.prototype,"label",2);o([c()],W.prototype,"placement",2);o([c({type:Boolean})],W.prototype,"disableMobileStyles",2);o([c({type:Boolean})],W.prototype,"autofocus",2);o([c({attribute:!1})],W.prototype,"calcMinWidth",2);o([c({attribute:!1})],W.prototype,"calcMaxWidth",2);o([c({attribute:!1})],W.prototype,"calcMinHeight",2);o([c({attribute:!1})],W.prototype,"calcMaxHeight",2);o([c({type:Boolean,reflect:!0})],W.prototype,"nonmodal",2);o([c()],W.prototype,"backdrop",2);o([c({attribute:!1})],W.prototype,"floatingUIMiddleware",2);o([ie()],W.prototype,"_trigger",2);o([ie()],W.prototype,"_anchor",2);o([ie()],W.prototype,"_isVirtKbVisible",2);o([U("slot:not([name])")],W.prototype,"_elDefaultSlot",2);o([U('slot[name="trigger"]')],W.prototype,"_elTriggerSlot",2);o([U("dialog")],W.prototype,"_elDialog",2);o([Z("triggerRef")],W.prototype,"_handleTriggerRefChanged",1);o([Z("anchorRef")],W.prototype,"_handleAnchorRefChanged",1);o([Z("_trigger")],W.prototype,"_handleTriggerChanged",1);o([Z("_anchor")],W.prototype,"_handleAnchorChanged",1);o([Z("open")],W.prototype,"_handleOpenChange",1);o([Z("backdrop")],W.prototype,"_handleBackdropChange",1);o([Cd("(max-width: 576px)")],W.prototype,"_handleMobileLayout",1);W=o([$("gds-popover",{dependsOn:[rt]}),Fe()],W);const Xc=D`
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
`;var Kc=Xc;const eh=D`
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
`;var th=eh;let $n=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>ue.instance.apply(this,"gds-menu-heading"))}render(){return ye`<slot></slot>`}};$n.styles=th;$n=o([$("gds-menu-heading")],$n);var To,Ao,Ya;let De=class extends $e(we(R)){constructor(){super(...arguments),d(this,Ao),this.open=!1,this.buttonLabel=A("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",d(this,To,()=>w`<gds-popover
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
        @gds-menu-item-click=${x(this,Ao,Ya)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),ue.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return w`<button
        id="trigger"
        class="icon border-0 small ${Be({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${()=>this.open=!0}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:he}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"
              fill="#353531"
            />
          </svg>
        </slot>
      </button>
      ${N(this.open,a(this,To))}`}};To=new WeakMap;Ao=new WeakSet;Ya=function(){this.open=!1};De.styles=[G,Kc];De.shadowRootOptions={mode:"open",delegatesFocus:!0};o([c({type:Boolean,reflect:!0})],De.prototype,"open",2);o([c({attribute:"button-label"})],De.prototype,"buttonLabel",2);o([c({attribute:"show-label",type:Boolean})],De.prototype,"showLabel",2);o([c()],De.prototype,"label",2);o([c()],De.prototype,"placement",2);o([Et("#trigger")],De.prototype,"elTriggerBtn",2);De=o([$("gds-context-menu",{dependsOn:[is,mo,W]}),Fe()],De);De.define();is.define();$n.define();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*sh(e,t){const s=typeof t=="function";if(e!==void 0){let n=-1;for(const i of e)n>-1&&(yield s?t(n):t),n++,yield i}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*nh(e,t){if(e!==void 0){let s=0;for(const n of e)yield t(n,s++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jr=(e,t,s)=>{const n=new Map;for(let i=t;i<=s;i++)n.set(e[i],i);return n},oh=cs(class extends Fs{constructor(e){if(super(e),e.type!==Bs.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let n;s===void 0?s=t:t!==void 0&&(n=t);const i=[],r=[];let l=0;for(const h of e)i[l]=n?n(h,l):l,r[l]=s(h,l),l++;return{values:r,keys:i}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,n]){const i=dc(e),{values:r,keys:l}=this.dt(t,s,n);if(!Array.isArray(i))return this.ut=l,r;const h=this.ut??=[],u=[];let g,v,y=0,_=i.length-1,k=0,S=r.length-1;for(;y<=_&&k<=S;)if(i[y]===null)y++;else if(i[_]===null)_--;else if(h[y]===l[k])u[k]=zt(i[y],r[k]),y++,k++;else if(h[_]===l[S])u[S]=zt(i[_],r[S]),_--,S--;else if(h[y]===l[S])u[S]=zt(i[y],r[S]),bs(e,u[S+1],i[y]),y++,S--;else if(h[_]===l[k])u[k]=zt(i[_],r[k]),bs(e,i[y],i[_]),_--,k++;else if(g===void 0&&(g=Jr(l,k,S),v=Jr(h,y,_)),g.has(h[y]))if(g.has(h[_])){const T=v.get(l[k]),B=T!==void 0?i[T]:null;if(B===null){const O=bs(e,i[y]);zt(O,r[k]),u[k]=O}else u[k]=zt(B,r[k]),bs(e,i[y],B),i[T]=null;k++}else Xn(i[_]),_--;else Xn(i[y]),y++;for(;k<=S;){const T=bs(e,u[S+1]);zt(T,r[k]),u[k++]=T}for(;y<=_;){const T=i[y++];T!==null&&Xn(T)}return this.ut=l,lc(e,u),As}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ih{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class rh{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(t=>this.q=t)}resume(){this.q?.(),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xr=e=>!ic(e)&&typeof e.then=="function",Kr=1073741823;class ah extends Ca{constructor(){super(...arguments),this._$Cwt=Kr,this._$Cbt=[],this._$CK=new ih(this),this._$CX=new rh}render(...t){return t.find(s=>!Xr(s))??As}update(t,s){const n=this._$Cbt;let i=n.length;this._$Cbt=s;const r=this._$CK,l=this._$CX;this.isConnected||this.disconnected();for(let h=0;h<s.length&&!(h>this._$Cwt);h++){const u=s[h];if(!Xr(u))return this._$Cwt=h,u;h<i&&u===n[h]||(this._$Cwt=Kr,i=0,Promise.resolve(u).then(async g=>{for(;l.get();)await l.get();const v=r.deref();if(v!==void 0){const y=v._$Cbt.indexOf(u);y>-1&&y<v._$Cwt&&(v._$Cwt=y,v.setValue(g))}}))}return As}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const lh=cs(ah),dh=D`
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
`;var ps,zo,ja,rr,Ua,ar,qa,lr,Za,dr,Qa;let ge=class extends R{constructor(){super(),d(this,zo),d(this,rr),d(this,ar),d(this,lr),d(this,dr),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,d(this,ps,(e,t)=>{const n=t.target.assignedNodes({flatten:!0}),i=n.length>0&&n.some(r=>r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&r.textContent?.trim()!=="");e==="lead"?this._leadSlotOccupied=i:e==="trail"?this._trailSlotOccupied=i:e==="action"&&(this._actionSlotOccupied=i)})}connectedCallback(){super.connectedCallback(),ue.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return w`
      <div class="field ${Be(e)}" part="_base">
        ${x(this,zo,ja).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};ps=new WeakMap;zo=new WeakSet;ja=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return w`
      ${x(this,rr,Ua).call(this)} ${x(this,ar,qa).call(this)}
      <div class="${Be(e)}">
        ${x(this,lr,Za).call(this)} ${x(this,dr,Qa).call(this)}
      </div>
    `};rr=new WeakSet;Ua=function(){return w` <slot
      name="lead"
      @slotchange=${e=>a(this,ps).call(this,"lead",e)}
    ></slot>`};ar=new WeakSet;qa=function(){return w`<div
      class="main-slot-wrap ${Be({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>a(this,ps).call(this,"main",e)}
      ></slot>
    </div>`};lr=new WeakSet;Za=function(){return w`
      <slot
        name="action"
        @slotchange=${e=>a(this,ps).call(this,"action",e)}
      ></slot>
    `};dr=new WeakSet;Qa=function(){return w`
      <slot
        name="trail"
        @slotchange=${e=>a(this,ps).call(this,"trail",e)}
      ></slot>
    `};ge.styles=[dh];o([c()],ge.prototype,"size",2);o([c({type:Boolean})],ge.prototype,"multiline",2);o([c({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);o([c({type:Boolean})],ge.prototype,"invalid",2);o([U("slot:not([name])")],ge.prototype,"_mainSlotElement",2);o([ie()],ge.prototype,"_leadSlotOccupied",2);o([ie()],ge.prototype,"_trailSlotOccupied",2);o([ie()],ge.prototype,"_actionSlotOccupied",2);o([Z("disabled")],ge.prototype,"_handleDisabledChange",1);ge=o([$("gds-field-base"),Fe()],ge);let at=class extends J{};at._regularSVG='<path d="M12 2.75L12.6457 2.36845C12.5108 2.1401 12.2652 2 12 2C11.7348 2 11.4892 2.1401 11.3543 2.36845L12 2.75ZM2.25 19.25L1.60431 18.8685C1.4673 19.1003 1.46512 19.3878 1.59859 19.6217C1.73207 19.8556 1.9807 20 2.25 20V19.25ZM21.75 19.25V20C22.0193 20 22.2679 19.8556 22.4014 19.6217C22.5349 19.3878 22.5327 19.1003 22.3957 18.8685L21.75 19.25ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75H11.25ZM12.75 15.74C12.75 15.3258 12.4142 14.99 12 14.99C11.5858 14.99 11.25 15.3258 11.25 15.74H12.75ZM11.3543 2.36845L1.60431 18.8685L2.89569 19.6315L12.6457 3.13155L11.3543 2.36845ZM2.25 20H21.75V18.5H2.25V20ZM22.3957 18.8685L12.6457 2.36845L11.3543 3.13155L21.1043 19.6315L22.3957 18.8685ZM11.25 9.75V13.25H12.75V9.75H11.25ZM11.5 15.75C11.5 15.4739 11.7239 15.25 12 15.25V16.75C12.5523 16.75 13 16.3023 13 15.75H11.5ZM12 15.25C12.2761 15.25 12.5 15.4739 12.5 15.75H11C11 16.3023 11.4477 16.75 12 16.75V15.25ZM12.5 15.75C12.5 16.0261 12.2761 16.25 12 16.25V14.75C11.4477 14.75 11 15.1977 11 15.75H12.5ZM12 16.25C11.7239 16.25 11.5 16.0261 11.5 15.75H13C13 15.1977 12.5523 14.75 12 14.75V16.25ZM12.75 15.75V15.74H11.25V15.75H12.75Z" fill="currentColor"/>';at._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5108 2.1401 12.6457 2.36845L22.3957 18.8685C22.5327 19.1003 22.5349 19.3878 22.4014 19.6217C22.2679 19.8556 22.0193 20 21.75 20H2.25C1.9807 20 1.73207 19.8556 1.59859 19.6217C1.46512 19.3878 1.4673 19.1003 1.60431 18.8685L11.3543 2.36845C11.4892 2.1401 11.7348 2 12 2ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z" fill="currentColor"/>';at._name="triangle-exclamation";at._width=24;at._height=24;at._viewBox="0 0 24 24";at=o([$("gds-icon-triangle-exclamation")],at);const ch=D`
  @layer base, reset, transitional-styles;
  @layer base {
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
`;var Do,Ja;let St=class extends R{constructor(){super(...arguments),d(this,Do)}render(){return w`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${N(this.validationMessage,()=>w`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.validationMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter">
        ${N(Number.isInteger(this.charCounter),()=>x(this,Do,Ja).call(this,this.charCounter))}
      </div>
    </div>`}};Do=new WeakSet;Ja=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",w`<gds-badge variant="${t}">${e}</gds-badge>`};St.styles=[ch];o([c({type:Number})],St.prototype,"charCounter",2);o([c()],St.prototype,"validationMessage",2);St=o([$("gds-form-control-footer",{dependsOn:[Te,at]})],St);let lt=class extends J{};lt._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7.375C11.6548 7.375 11.375 7.65482 11.375 8C11.375 8.34518 11.6548 8.625 12 8.625C12.3452 8.625 12.625 8.34518 12.625 8C12.625 7.65482 12.3452 7.375 12 7.375Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>';lt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>';lt._name="circle-info";lt._width=24;lt._height=24;lt._viewBox="0 0 24 24";lt=o([$("gds-icon-circle-info")],lt);const hh=D`
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
`;var cr,Xa,Lo,Wo,Oo,Ka;let dt=class extends R{constructor(){super(...arguments),d(this,cr),d(this,Oo),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,d(this,Lo,()=>w`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${A("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${a(this,Wo)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),d(this,Wo,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this._extendedSupportingText?.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))})}render(){return w`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${N(this._hasExtendedSupportingText,a(this,Lo))}
      </div>

      ${x(this,Oo,Ka).call(this)}
    `}};cr=new WeakSet;Xa=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};Lo=new WeakMap;Wo=new WeakMap;Oo=new WeakSet;Ka=function(){return w`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${x(this,cr,Xa)}
        ></slot>
      </div>
    `};dt.styles=[hh];o([c({type:Boolean,reflect:!0})],dt.prototype,"showExtendedSupportingText",2);o([ie()],dt.prototype,"_hasExtendedSupportingText",2);o([U("#extended-supporting-text")],dt.prototype,"_extendedSupportingText",2);dt=o([$("gds-form-control-header",{dependsOn:[He,Ct,lt]}),Fe()],dt);const uh=D`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var ph=uh;let Le=class extends J{};Le._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Le._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99442C22.2979 3.40452 22.4156 4.18717 22.0055 4.74251L10.0055 20.9925C9.80429 21.2651 9.50102 21.4442 9.1652 21.489C8.82937 21.5338 8.48976 21.4403 8.22413 21.23L2.22413 16.48C1.68286 16.0515 1.59144 15.2654 2.01995 14.7241C2.44845 14.1828 3.23461 14.0914 3.77588 14.5199L8.76237 18.4675L19.9945 3.2574C20.4046 2.70206 21.1872 2.58432 21.7426 2.99442Z" fill="currentColor"/>';Le._name="checkmark";Le._width=24;Le._height=24;Le._viewBox="0 0 24 24";Le=o([$("gds-icon-checkmark")],Le);var _s,Xs,Vo;let Ye=class extends wa(R){constructor(){super(),d(this,Xs),d(this,_s,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",x(this,Xs,Vo)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),x(this,Xs,Vo).call(this,e))})}get hidden(){return a(this,_s)}set hidden(e){const t=e.toString();H(this,_s,t==="true"),a(this,_s)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),ue.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){const e=this.parentElement?.multiple,t=w`
      <span class="checkbox ${Be({checked:this.selected})}">
        ${this.selected?w`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),w`<div>${N(e,()=>t)} <slot></slot></div>`}};_s=new WeakMap;Xs=new WeakSet;Vo=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};Ye.styles=[G,_a];o([c()],Ye.prototype,"value",2);o([c({type:Boolean,reflect:!0})],Ye.prototype,"hidden",1);o([c({attribute:"aria-selected",reflect:!0})],Ye.prototype,"selected",2);o([c({type:Boolean,reflect:!0})],Ye.prototype,"isPlaceholder",2);o([Z("isPlaceholder")],Ye.prototype,"_handlePlaceholderStatusChange",1);Ye=o([$("gds-option",{dependsOn:[Le]})],Ye);var ks,Ro;let Yt=class extends R{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,d(this,ks,$a()),d(this,Ro,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new Ma(this)}get navigableItems(){return this.visibleOptionElements}get options(){return a(this,ks).value?Ea(a(this,ks).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),ue.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",a(this,Ro))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return w`<slot ${Sa(a(this,ks))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};ks=new WeakMap;Ro=new WeakMap;Yt.styles=ph;o([c({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],Yt.prototype,"multiple",2);o([c()],Yt.prototype,"compareWith",2);o([Z("multiple")],Yt.prototype,"_rerenderOptions",1);Yt=o([$("gds-listbox",{dependsOn:[Ye]})],Yt);var Gn=D`
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
`;let ct=class extends J{};ct._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';ct._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>';ct._name="chevron-bottom";ct._width=24;ct._height=24;ct._viewBox="0 0 24 24";ct=o([$("gds-icon-chevron-bottom")],ct);const gh=D`
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
`;var fh=gh,Lt,Bo,el,Fo,Io,Po,_t,No,Ks,Ho,Go,Yo,jo,tl,Sn,Mn,Uo,sl,qo,nl,ls,Yn;let j=class extends pe{constructor(){super(...arguments),d(this,Bo),d(this,jo),d(this,Uo),d(this,qo),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,d(this,Lt,void 0),d(this,Fo,()=>w`
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
        @input=${e=>{this.value=e.target.value,a(this,Sn).call(this),a(this,Ks).call(this,e),a(this,_t).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{e.key==="ArrowDown"&&(e.preventDefault(),a(this,_t).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(t=>t.focus())),e.key==="Enter"&&a(this,Mn).call(this)}}
      />
    `),d(this,Io,()=>w`
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
          <span>${Pa(this.displayValue)}</span>
        </slot>
      </button>
    `),d(this,Po,e=>{if(this.combobox){const s=e.getBoundingClientRect(),i=window.innerHeight-s.bottom,r=s.top;let l=Math.min(r,this.maxHeight);return i>r&&(l=Math.min(i,this.maxHeight)),`${l-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),d(this,_t,(e,t)=>this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1,cancelable:!0}))),d(this,No,e=>{a(this,_t).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),d(this,Ks,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchEvent(new CustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value},cancelable:!0}))))return;const s=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!s.value)return;this.options.filter(i=>!this.searchFilter(s.value,i)).forEach(i=>i.hidden=!0)}),d(this,Ho,e=>{this._elListbox?.then(t=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),t.focus();return}})}),d(this,Go,e=>{if(e.key==="Tab"&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),d(this,Yo,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),d(this,Sn,()=>{this.updateComplete.then(()=>this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))}),d(this,Mn,()=>{this.updateComplete.then(()=>this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})))}),d(this,ls,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&a(this,_t).call(this,!1,"close")&&(this.open=!1)}),d(this,Yn,e=>{e.key==="Tab"&&!this.searchable&&a(this,_t).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())})}get type(){return"gds-dropdown"}get options(){return a(this,Lt)?Array.from(a(this,Lt)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(a(this,Lt))return Array.from(a(this,Lt)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){let e;return Array.isArray(this.value)?this.value.length>2?e=A(Ed`${this.value.length} selected`):e=this.value.reduce((t,s)=>t+this.options.find(n=>n.value===s)?.innerHTML+", ","").slice(0,-2):e=this.options.find(t=>t.selected)?.innerHTML,e||this.placeholder?.innerHTML||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}render(){return w`
      ${N(!this.plain&&!this.hideLabel,()=>w`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${N(this.supportingText.length>0,()=>w`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${a(this,Po)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[Ia(8),jc()]:W.DefaultMiddleware}
        @gds-ui-state=${a(this,No)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.combobox&&!this.multiple?a(this,Fo).call(this):a(this,Io).call(this)}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${N(this.searchable,()=>w`<input
              id="searchinput"
              type="text"
              aria-label="${A("Filter available options")}"
              placeholder="${A("Search")}"
              @keydown=${a(this,Ho)}
              @input=${a(this,Ks)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${de(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${x(this,jo,tl)}"
          @gds-focus="${a(this,Yo)}"
          @keydown=${a(this,Go)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${N(x(this,Bo,el).call(this),()=>w`
          <gds-form-control-footer class="size-${this.size}">
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage||this.validationMessage}
            </slot>
          </gds-form-control-footer>
        `)}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){if(this.requestUpdate(),H(this,Lt,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:!this.combobox&&!this.placeholder&&this.options.find(e=>this.compareWith(e.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?x(this,Uo,sl).call(this):(x(this,qo,nl).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t?.scrollIntoView({block:"center"})})}};Lt=new WeakMap;Bo=new WeakSet;el=function(){return!this.plain&&this.invalid};Fo=new WeakMap;Io=new WeakMap;Po=new WeakMap;_t=new WeakMap;No=new WeakMap;Ks=new WeakMap;Ho=new WeakMap;Go=new WeakMap;Yo=new WeakMap;jo=new WeakSet;tl=function(){this._elListbox.then(e=>{this.multiple?this.value=e.selection.map(t=>t.value):(this.value=e.selection[0]?.value,a(this,_t).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0))),a(this,Sn).call(this),a(this,Mn).call(this)})};Sn=new WeakMap;Mn=new WeakMap;Uo=new WeakSet;sl=function(){this.addEventListener("blur",a(this,ls)),this.addEventListener("gds-blur",a(this,ls)),this.addEventListener("keydown",a(this,Yn))};qo=new WeakSet;nl=function(){this.removeEventListener("blur",a(this,ls)),this.removeEventListener("gds-blur",a(this,ls)),this.removeEventListener("keydown",a(this,Yn))};ls=new WeakMap;Yn=new WeakMap;j.styles=[G,Gn,fh];o([c({attribute:"supporting-text"})],j.prototype,"supportingText",2);o([c({type:Boolean,reflect:!0})],j.prototype,"open",2);o([c({type:Boolean,reflect:!0})],j.prototype,"searchable",2);o([c({type:Boolean,reflect:!0})],j.prototype,"multiple",2);o([c({type:Boolean,reflect:!0})],j.prototype,"combobox",2);o([c()],j.prototype,"compareWith",2);o([c()],j.prototype,"searchFilter",2);o([c({type:Boolean,attribute:"sync-popover-width"})],j.prototype,"syncPopoverWidth",2);o([c({type:Number,attribute:"max-height"})],j.prototype,"maxHeight",2);o([c()],j.prototype,"size",2);o([c({type:Boolean,attribute:"hide-label"})],j.prototype,"hideLabel",2);o([c({type:Boolean})],j.prototype,"plain",2);o([c({type:Boolean})],j.prototype,"disableMobileStyles",2);o([c({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],j.prototype,"showExtendedSupportingText",2);o([U("#trigger")],j.prototype,"_elTriggerBtn",2);o([Et("#listbox")],j.prototype,"_elListbox",2);o([U("#searchinput")],j.prototype,"_elSearchInput",2);o([Xi({attributes:!0,childList:!0,subtree:!0,characterData:!0})],j.prototype,"_handleLightDOMChange",1);o([Z("value")],j.prototype,"_handleValueChange",1);o([Z("open")],j.prototype,"_handleOpenChange",1);j=o([$("gds-dropdown",{dependsOn:[dt,St,ge,Yt,W,Le,ct]}),Fe()],j);const hr={fromAttribute(e){return new Date(e)},toAttribute(e){return e.toISOString()}},yh={fromAttribute(e){return e.split(",").map(t=>new Date(t.trim()))},toAttribute(e){return JSON.stringify(e.map(t=>t.toISOString()))}},bh={fromAttribute(e){return e.split(",")},toAttribute(e){return Array.isArray(e)?e.join(","):e}};let ht=class extends J{};ht._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';ht._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>';ht._name="calendar";ht._width=24;ht._height=24;ht._viewBox="0 0 24 24";ht=o([$("gds-icon-calendar")],ht);let ut=class extends J{};ut._regularSVG='<path d="M7.75 4.75H3.75V9.25M7.75 4.75H16.25M7.75 4.75V2.75M16.25 4.75H20.25V9.25M16.25 4.75V2.75M11.25 20.25H3.75V9.25M3.75 9.25H20.25M20.25 9.25V11.25M17.75 14.75V18M17.75 18V21.25M17.75 18H14.5M17.75 18H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';ut._solidSVG='<path d="M8.5 2.75C8.5 2.33579 8.16421 2 7.75 2C7.33579 2 7 2.33579 7 2.75V4H3.75C3.33579 4 3 4.33579 3 4.75V20.25C3 20.6642 3.33579 21 3.75 21H11.25C11.6642 21 12 20.6642 12 20.25C12 19.8358 11.6642 19.5 11.25 19.5H4.5V10H19.5V11.25C19.5 11.6642 19.8358 12 20.25 12C20.6642 12 21 11.6642 21 11.25V4.75C21 4.33579 20.6642 4 20.25 4H17V2.75C17 2.33579 16.6642 2 16.25 2C15.8358 2 15.5 2.33579 15.5 2.75V4H8.5V2.75Z" fill="currentColor"/><path d="M18.5 14.75C18.5 14.3358 18.1642 14 17.75 14C17.3358 14 17 14.3358 17 14.75V17.25H14.5C14.0858 17.25 13.75 17.5858 13.75 18C13.75 18.4142 14.0858 18.75 14.5 18.75H17V21.25C17 21.6642 17.3358 22 17.75 22C18.1642 22 18.5 21.6642 18.5 21.25V18.75H21C21.4142 18.75 21.75 18.4142 21.75 18C21.75 17.5858 21.4142 17.25 21 17.25H18.5V14.75Z" fill="currentColor"/>';ut._name="calender-add";ut._width=24;ut._height=24;ut._viewBox="0 0 24 24";ut=o([$("gds-icon-calender-add")],ut);let je=class extends J{};je._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';je._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>';je._name="chevron-left";je._width=24;je._height=24;je._viewBox="0 0 24 24";je=o([$("gds-icon-chevron-left")],je);let Ue=class extends J{};Ue._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Ue._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>';Ue._name="chevron-right";Ue._width=24;Ue._height=24;Ue._viewBox="0 0 24 24";Ue=o([$("gds-icon-chevron-right")],Ue);var st,en,tn,sn,nn,Zo,Qo,Jo,Xo,ol,Xt,Cs,on,Ko,Kt,$s,Ss,rn;let We=class extends R{constructor(){super(...arguments),d(this,Xo),d(this,Xt),d(this,on),d(this,Kt),d(this,Ss),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=x(this,on,Ko).call(this,this.value,this.length),d(this,st,""),d(this,en,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=x(this,Kt,$s).call(this,e+1),x(this,Xt,Cs).call(this)}),d(this,tn,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=x(this,Kt,$s).call(this,e-1),x(this,Xt,Cs).call(this)}),d(this,sn,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),d(this,nn,()=>{x(this,Ss,rn).call(this)}),d(this,Zo,()=>{a(this,st)!==""&&(x(this,Ss,rn).call(this),this.value=x(this,Kt,$s).call(this,parseInt(this.value.toString())),x(this,Xt,Cs).call(this))}),d(this,Qo,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?a(this,tn).call(this):a(this,en).call(this)}),d(this,Jo,e=>{let t=!1;if(e.key==="ArrowUp")a(this,en).call(this),t=!0;else if(e.key==="ArrowDown")a(this,tn).call(this),t=!0;else{const s=parseInt(e.key);isNaN(s)||(a(this,st).length<this.length&&(H(this,st,a(this,st)+s.toString()),this.value=parseInt(a(this,st))),a(this,st).length===this.length&&(this.value=x(this,Kt,$s).call(this,this.value),x(this,Ss,rn).call(this),x(this,Xo,ol).call(this),x(this,Xt,Cs).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",a(this,Qo)),this.addEventListener("keydown",a(this,Jo)),this.addEventListener("blur",a(this,Zo)),this.addEventListener("focus",a(this,nn)),this.addEventListener("click",a(this,sn)),this.addEventListener("mousedown",a(this,sn))}focus(e){super.focus(e),a(this,nn).call(this)}render(){return w`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=x(this,on,Ko).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};st=new WeakMap;en=new WeakMap;tn=new WeakMap;sn=new WeakMap;nn=new WeakMap;Zo=new WeakMap;Qo=new WeakMap;Jo=new WeakMap;Xo=new WeakSet;ol=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof We){e.focus();break}e=e.nextElementSibling}};Xt=new WeakSet;Cs=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};on=new WeakSet;Ko=function(e,t){return String(e).padStart(t,"0")};Kt=new WeakSet;$s=function(e){return Math.max(this.min,Math.min(this.max,e))};Ss=new WeakSet;rn=function(){H(this,st,"")};We.formAssociated=!0;o([c({type:Number})],We.prototype,"value",2);o([c({type:Number})],We.prototype,"length",2);o([c({type:Number,attribute:"aria-valuemin"})],We.prototype,"min",2);o([c({type:Number,attribute:"aria-valuemax"})],We.prototype,"max",2);o([ie()],We.prototype,"displayValue",2);o([Z("value")],We.prototype,"_refreshDisplayValue",1);We=o([$("gds-date-part-spinner")],We);const vh=D`
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
        background-color: var(--gds-color-l2-background-tertiary);
        color: var(--gds-color-l2-content-tertiary);
      }
    }
  }
`;var Ms,ei,il,ti,rl,Ls,En,si,al,ni,ll,an,oi,Wt,es,Ot,ts,dl,ii,ri,ai,li,di,ci,hi,ui,pi,Tn,gi,fi,ln,yi,bi,tt,vi,cl,ur,hl;let P=class extends pe{constructor(){super(),d(this,ei),d(this,ti),d(this,Ls),d(this,si),d(this,ni),d(this,an),d(this,Wt),d(this,Ot),d(this,ln),d(this,vi),d(this,ur),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=x(this,ln,yi).call(this,"y-m-d"),d(this,Ms,void 0),d(this,dl,e=>{this._elTrigger.then(t=>{e.relatedTarget?.parentElement!==e.target&&document.getSelection()?.removeAllRanges()})}),d(this,ii,e=>{this._elTrigger.then(t=>{document.getSelection()?.removeAllRanges();const s=new Range;s.setStart(t.firstChild,0),s.setEnd(t.lastChild,4),document.getSelection()?.addRange(s)})}),d(this,ri,e=>{this._elFieldAsync.then(t=>{e.currentTarget===t&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),d(this,ai,e=>{this._elFieldAsync.then(t=>{if(e.currentTarget!==t)return;e.preventDefault();const s=e.clipboardData?.getData("text/plain");if(!s)return;let n=new Date("-");const i="Invalid Date",r=s.split(this._dateFormatLayout.delimiter);if(r.length===3){const l=this._dateFormatLayout.layout,h=parseInt(r[l.findIndex(v=>v.token==="y")]),u=parseInt(r[l.findIndex(v=>v.token==="m")])-1,g=parseInt(r[l.findIndex(v=>v.token==="d")]);!isNaN(h)&&!isNaN(u)&&!isNaN(g)&&(n=new Date(`${h}-${u+1}-${g}`))}n.toString()===i&&(n=new Date(s),n.toString()===i)||(this.value=n,x(this,Wt,es).call(this))})}),d(this,li,e=>{this._elSpinners[0]?.focus()}),d(this,di,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,x(this,Wt,es).call(this),x(this,Ot,ts).call(this)}),d(this,ci,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),d(this,hi,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),d(this,ui,e=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),d(this,pi,e=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),d(this,Tn,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),x(this,Ot,ts).call(this)}),d(this,gi,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;!xt(t||new Date(0),a(this,Ms)||new Date(0))&&(this.value=t,x(this,Wt,es).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=a(this,Ms),x(this,Ot,ts).call(this))}}),d(this,fi,e=>{const t=Array.from(this._elSpinners).findIndex(s=>s===e.target);if(e.key==="ArrowRight"){const s=this._elSpinners[t+1];s&&s.focus()}if(e.key==="ArrowLeft"){const s=this._elSpinners[t-1];s&&s.focus()}}),d(this,bi,(e,t)=>{a(this,tt)[t]=e;const s=new Date;s.setFullYear(parseInt(a(this,tt).year)),s.setMonth(parseInt(a(this,tt).month)-1),s.setDate(parseInt(a(this,tt).day)),s.setHours(12,0,0,0),s.toString()!=="Invalid Date"&&(this.value=s,x(this,Wt,es).call(this),x(this,Ot,ts).call(this))}),d(this,tt,{year:"yyyy",month:"mm",day:"dd"}),We.define()}get type(){return"gds-datepicker"}get value(){return this._internalValue}set value(e){this._internalValue=e}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=x(this,ln,yi).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),ue.instance.apply(this,"gds-datepicker")}render(){return w`
      ${N(!this.plain,()=>w`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${N(this.supportingText.length>0,()=>w`<span slot="supporting-text" id="supporting-text">
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
        @click=${a(this,li)}
        @copy=${a(this,ri)}
        @paste=${a(this,ai)}
        id="field"
      >
        <div class="spinners">
          ${sh(nh(this._dateFormatLayout.layout,(e,t)=>w`<gds-date-part-spinner
                  id="spinner-${t}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${a(this,tt)[e.name]}
                  aria-valuemin=${x(this,ni,ll).call(this,e.name)}
                  aria-valuemax=${x(this,an,oi).call(this,e.name)}
                  aria-label=${x(this,si,al).call(this,e.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${x(this,an,oi).call(this,e.name).toString().length}
                  @keydown=${a(this,fi)}
                  @change=${s=>a(this,bi).call(this,s.detail.value,e.name)}
                  @focus=${a(this,ii)}
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
          ${N(this.size==="small",()=>w`<gds-icon-calender-add
                height="16"
                stroke="2"
              ></gds-icon-calender-add>`,()=>w`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${N(x(this,ei,il).call(this),()=>w`<gds-form-control-footer class="size-${this.size}">
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage||this.validationMessage}
            </slot>
          </gds-form-control-footer>`)}

      <gds-popover
        autofocus
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elFieldAsync}
        .open=${this.open}
        @gds-ui-state=${a(this,gi)}
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
              @click=${a(this,pi)}
              aria-label=${A("Previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${a(this,ci)}
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
              @change=${a(this,hi)}
              .maxHeight=${300}
              label="${A("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${oh(a(this,vi,cl),e=>e,e=>w`<gds-option value=${e}>${e}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${a(this,ui)}
              aria-label=${A("Next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${a(this,di)}
            @gds-date-focused=${a(this,Tn)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${N(this.clearable||!this.hideTodayButton,()=>w`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="0 m m m"
              >
                ${N(this.clearable,()=>w` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,x(this,Ot,ts).call(this),x(this,Wt,es).call(this)}}
                    >
                      ${A("Clear")}
                    </gds-button>`)}
                ${lh(x(this,ti,rl).call(this),he)}
                ${N(!this.hideTodayButton,()=>w` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),x(this,Ls,En).call(this,new Date)}}
                    >
                      ${A("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){H(this,tt,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");H(this,tt,{year:t,month:s,day:n})}_handleOpenChange(){this.open&&(H(this,Ms,this.value),this._elCalendar.then(e=>e.focus()))}};Ms=new WeakMap;ei=new WeakSet;il=function(){return!this.plain&&this.invalid};ti=new WeakSet;rl=async function(){const e=await this.getFocusedDate();let t="",s;return e&&e>this.max?(t=A("Last available date"),s=n=>{n.stopPropagation(),x(this,Ls,En).call(this,this.max)}):e&&e<this.min&&(t=A("First available date"),s=n=>{n.stopPropagation(),x(this,Ls,En).call(this,this.min)}),w`${N(t.length>0,()=>w`<gds-button rank="tertiary" size="small" @click=${s}>
          ${t}
        </gds-button>`,()=>he)}`};Ls=new WeakSet;En=function(e){const t=new Date(e);this._elCalendar.then(s=>s.focusedDate=t).then(a(this,Tn))};si=new WeakSet;al=function(e){return`${{year:A("Year"),month:A("Month"),day:A("Day")}[e]} ${this.label}`};ni=new WeakSet;ll=function(e){return{year:1900,month:1,day:1}[e]};an=new WeakSet;oi=function(e){return{year:9999,month:12,day:31}[e]};Wt=new WeakSet;es=function(){this.updateComplete.then(()=>this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))};Ot=new WeakSet;ts=function(){this.updateComplete.then(()=>this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))};dl=new WeakMap;ii=new WeakMap;ri=new WeakMap;ai=new WeakMap;li=new WeakMap;di=new WeakMap;ci=new WeakMap;hi=new WeakMap;ui=new WeakMap;pi=new WeakMap;Tn=new WeakMap;gi=new WeakMap;fi=new WeakMap;ln=new WeakSet;yi=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),n=s.findIndex(u=>u==="y"),i=s.findIndex(u=>u==="m"),r=s.findIndex(u=>u==="d");if(n===-1||i===-1||r===-1)throw new Error("Invalid date format for <gds-datepicker>");const h=[n,i,r].sort((u,g)=>u-g).map(u=>s[u]).map(u=>({token:u,name:u==="y"?"year":u==="m"?"month":"day"}));return{delimiter:t,layout:h}};bi=new WeakMap;tt=new WeakMap;vi=new WeakSet;cl=function(){const e=this.min.getFullYear(),t=this.max.getFullYear(),s=a(this,ur,hl),n=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield n);for(let i=e;i<=t;i++)yield i}}};ur=new WeakSet;hl=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};P.styles=[G,Gn,vh];o([c({converter:hr})],P.prototype,"value",1);o([c({converter:hr})],P.prototype,"min",2);o([c({converter:hr})],P.prototype,"max",2);o([c({type:Boolean})],P.prototype,"open",2);o([c({attribute:"supporting-text"})],P.prototype,"supportingText",2);o([c({type:String})],P.prototype,"size",2);o([c({type:Boolean})],P.prototype,"plain",2);o([c({type:Boolean,attribute:"show-week-numbers"})],P.prototype,"showWeekNumbers",2);o([c({type:Boolean,attribute:"hide-label"})],P.prototype,"hideLabel",2);o([c({type:Boolean,attribute:"clearable"})],P.prototype,"clearable",2);o([c({type:Boolean,attribute:"hide-today-button"})],P.prototype,"hideTodayButton",2);o([c()],P.prototype,"dateformat",1);o([c({type:Boolean,attribute:"disabled-weekends"})],P.prototype,"disabledWeekends",2);o([c({converter:yh,attribute:"disabled-dates"})],P.prototype,"disabledDates",2);o([c({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],P.prototype,"showExtendedSupportingText",2);o([Et("#calendar-button")],P.prototype,"test_calendarButton",2);o([U("#clear-button")],P.prototype,"test_clearButton",2);o([U("#today-button")],P.prototype,"test_todayButton",2);o([ie()],P.prototype,"_focusedMonth",2);o([ie()],P.prototype,"_focusedYear",2);o([ie()],P.prototype,"_dateFormatLayout",2);o([Et("#calendar")],P.prototype,"_elCalendar",2);o([Et("#calendar-button")],P.prototype,"_elTrigger",2);o([Et("#field")],P.prototype,"_elFieldAsync",2);o([Jl("[role=spinbutton]")],P.prototype,"_elSpinners",2);o([U("#field")],P.prototype,"_elField",2);o([Z("value")],P.prototype,"_handleValueChange",1);o([Z("open")],P.prototype,"_handleOpenChange",1);P=o([Fe()],P);let mi=class extends xe($e(we(P))){};mi=o([$("gds-datepicker",{dependsOn:[it,He,j,q,W,ht,ut,je,Ue]})],mi);mi.define();let Oe=class extends J{};Oe._regularSVG='<path d="M4.75 4.75L19.25 19.25M19.25 4.75L4.75 19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';Oe._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.11612 4.11612C4.60427 3.62796 5.39573 3.62796 5.88388 4.11612L12 10.2322L18.1161 4.11612C18.6043 3.62796 19.3957 3.62796 19.8839 4.11612C20.372 4.60427 20.372 5.39573 19.8839 5.88388L13.7678 12L19.8839 18.1161C20.372 18.6043 20.372 19.3957 19.8839 19.8839C19.3957 20.372 18.6043 20.372 18.1161 19.8839L12 13.7678L5.88388 19.8839C5.39573 20.372 4.60427 20.372 4.11612 19.8839C3.62796 19.3957 3.62796 18.6043 4.11612 18.1161L10.2322 12L4.11612 5.88388C3.62796 5.39573 3.62796 4.60427 4.11612 4.11612Z" fill="currentColor"/>';Oe._name="cross-large";Oe._width=24;Oe._height=24;Oe._viewBox="0 0 24 24";Oe=o([$("gds-icon-cross-large")],Oe);const mh=D`
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
      width: 600px;
      height: 100vh;
      inset: 0 0 0 auto;
      @starting-style {
        transform: translateX(96px);
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
      font-size: 1.5rem;
      font-weight: 450;
    }
  }
`,xi=new Set;function xh(){ca.instance.injectGlobalStyles("dialog-scroll-lock",D`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function wh(e){if(xi.add(e),!document.documentElement.classList.contains("gds-scroll-lock")){const t=_h()+kh();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),t<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${t}px`)}}function ea(e){xi.delete(e),xi.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function _h(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function kh(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}var Vt,wi,_i,ki,dn,Ci,ul,pr;xh();let Ve=class extends xe(On(R)){constructor(){super(...arguments),d(this,Ci),this.open=!1,this.variant="default",d(this,Vt,void 0),d(this,wi,e=>{const s=e.target.returnValue;this.close(s||"native-close"),s!=="prop-change"&&a(this,_i).call(this,s)}),d(this,_i,e=>{this.dispatchEvent(new CustomEvent("gds-close",{detail:e,bubbles:!1,composed:!1})),a(this,dn).call(this,e)}),d(this,ki,e=>{this.dispatchEvent(new CustomEvent("gds-show",{detail:e,bubbles:!1,composed:!1})),a(this,dn).call(this,e)}),d(this,dn,e=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:e,open:this.open},bubbles:!1,composed:!1}))}),d(this,pr,e=>{this.show("slotted-trigger")})}show(e){this.open=!0,e&&a(this,ki).call(this,e)}close(e){H(this,Vt,e),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),ea(this)}render(){return w`<slot
        name="trigger"
        @slotchange=${x(this,Ci,ul)}
      ></slot>
      ${N(this.open,()=>w`<dialog
            @close=${a(this,wi)}
            class=${this.variant}
            aria-describedby="heading"
          >
            <gds-card
              class="card"
              display="flex"
              variant="secondary"
              box-shadow="xl"
              padding="s"
              border-radius=${this.variant==="default"?"s":"0"}
            >
              <gds-flex
                justify-content="space-between"
                border-width="0 0 4xs 0"
                margin="0 -s"
                padding="0 s s"
                background-color="secondary"
              >
                <h2 id="heading">${this.heading}</h2>
                <gds-button
                  id="close-btn"
                  rank="secondary"
                  size="small"
                  label=${A("Close")}
                  @click=${()=>this.close("btn-close")}
                  ><gds-icon-cross-large></gds-icon-cross-large
                ></gds-button>
              </gds-flex>
              <gds-div id="content" padding="m 0" overflow="auto" flex="1">
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
          </dialog>`)}`}_handleOpenChange(){this.open?(H(this,Vt,void 0),this.updateComplete.then(()=>{this._elDialog?.showModal(),wh(this),sd&&this._elDialog?.focus()})):(H(this,Vt,a(this,Vt)||"prop-change"),this._elDialog?.close(a(this,Vt)),ea(this),this.requestUpdate("open"))}};Vt=new WeakMap;wi=new WeakMap;_i=new WeakMap;ki=new WeakMap;dn=new WeakMap;Ci=new WeakSet;ul=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const e=this._elTriggerSlot.assignedElements()[0];e?.addEventListener("click",a(this,pr)),e?.setAttribute("aria-haspopup","dialog")}};pr=new WeakMap;Ve.styles=[mh];Ve.styleExpressionBaseSelector="dialog";o([c({type:Boolean,reflect:!0})],Ve.prototype,"open",2);o([c()],Ve.prototype,"heading",2);o([c()],Ve.prototype,"variant",2);o([U("dialog")],Ve.prototype,"_elDialog",2);o([U('slot[name="trigger"]')],Ve.prototype,"_elTriggerSlot",2);o([Z("open")],Ve.prototype,"_handleOpenChange",1);Ve=o([$("gds-dialog",{dependsOn:[He,Ct,it,Oe]}),Fe()],Ve);Ve.define();const Ch=D`
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
`;var $h=Ch;let pt=class extends R{constructor(){super(...arguments),this.level="2",this.role=null}render(){return w`<hr role=${this.role||he} />`}};pt.styles=[G,$h];o([c()],pt.prototype,"level",2);o([b(Rs("border"))],pt.prototype,"color",2);o([b({property:"--_size",valueTemplate:e=>`var(--gds-sys-space-${e})`})],pt.prototype,"size",2);o([b()],pt.prototype,"opacity",2);o([c()],pt.prototype,"role",2);pt=o([$("gds-divider")],pt);pt.define();j.define();Ye.define();const Sh=D`
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
`;var Mh=Sh;let $i=class extends Vn(He){connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",Mh)}};$i=o([$("gds-fab")],$i);$i.define();function gr(){return(e,t,s)=>{const n=e.connectedCallback,i=e.disconnectedCallback;e.connectedCallback=function(){n?.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{s.value?.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){i?.call(this),this.__resizeObservers[t].disconnect()}}}const Eh=D`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`;let jt=class extends R{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),ue.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return w`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${Be(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};jt.styles=[Eh];o([c({reflect:!0,type:Boolean})],jt.prototype,"selected",2);o([c()],jt.prototype,"value",2);jt=o([$("gds-filter-chip",{dependsOn:[He,Le]})],jt);const Th=D`
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
`;var Si,Mi,cn,Ei,pl,Ti,gl;let _e=class extends pe{constructor(){super(...arguments),d(this,Ei),d(this,Ti),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,d(this,Si,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0})))}),d(this,Mi,3),d(this,cn,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return w`<div
      class="chips ${Be(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${a(this,Si)}
        @slotchange=${x(this,Ti,gl)}
        role="none"
      ></slot>
    </div>`}_getValidityAnchor(){return this}_handleResize(){if(!this.rowCollapse)return;const e=x(this,Ei,pl).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*a(this,Mi)&&(this._collapsed=!0,H(this,cn,s)),s>a(this,cn)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})}))}};Si=new WeakMap;Mi=new WeakMap;cn=new WeakMap;Ei=new WeakSet;pl=function(){return this.chips[0]?.offsetHeight||0};Ti=new WeakSet;gl=function(){const e=this.chips.find(t=>t.selected)?.value;e&&(this.value=e)};_e.styles=[Th];o([c({converter:bh})],_e.prototype,"value",1);o([c({type:Boolean})],_e.prototype,"multiple",2);o([c()],_e.prototype,"label",2);o([c({type:Boolean,attribute:"row-collapse"})],_e.prototype,"rowCollapse",2);o([ie()],_e.prototype,"_collapsed",2);o([U("slot")],_e.prototype,"_elSlot",2);o([gr()],_e.prototype,"_handleResize",1);o([Z("value")],_e.prototype,"_updateSelectedFromValue",1);_e=o([$("gds-filter-chips",{dependsOn:[jt]})],_e);_e.define();jt.define();it.define();const Ah=D`
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
`;var zh=Ah;let Ut=class extends V{render(){return w`<slot></slot>`}};Ut.styles=[G,zh];o([b({property:"--_c"})],Ut.prototype,"columns",2);o([b({...It,styleTemplate:(e,t)=>{const s=t[0];return`--_gap-column: ${t[1]||s}; --_gap-row: ${s};`}})],Ut.prototype,"gap",2);o([b({property:"--_col-width",valueTemplate:e=>`${isNaN(e)?e:`${e}px`}`})],Ut.prototype,"auto-columns",2);Ut=o([$("gds-grid")],Ut);Ut.define();let An=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return w`<slot></slot>`}};An=o([$("gds-list-item")],An);let zn=class extends R{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),ue.instance.apply(this,"gds-grouped-list")}render(){return w`${N(this.label,()=>w`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};o([c()],zn.prototype,"label",2);zn=o([$("gds-grouped-list",{dependsOn:[An]})],zn);zn.define();An.define();let gt=class extends J{};gt._regularSVG='<path d="M19.25 9.25V17.25M15.25 17.25V9.25M4.75 9.25V17.25M8.75 17.25V9.25M2.75 7.17308L12 2.5L21.25 7.17308V9.25H2.75V7.17308ZM2.75 20.25H21.25L20.25 17.25H3.75L2.75 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>';gt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3382 1.83058C12.1255 1.72314 11.8745 1.72314 11.6618 1.83058L2.41181 6.50365C2.15926 6.63125 2.00001 6.89012 2.00001 7.17308V9.25C2.00001 9.66421 2.33579 10 2.75001 10H4.00001V16.5H3.75001C3.42718 16.5 3.14058 16.7066 3.03849 17.0128L2.03849 20.0128C1.96226 20.2415 2.00061 20.493 2.14157 20.6885C2.28254 20.8841 2.50892 21 2.75001 21H21.25C21.4911 21 21.7175 20.8841 21.8584 20.6885C21.9994 20.493 22.0378 20.2415 21.9615 20.0128L20.9615 17.0128C20.8594 16.7066 20.5728 16.5 20.25 16.5H20V10H21.25C21.6642 10 22 9.66421 22 9.25V7.17308C22 6.89012 21.8408 6.63125 21.5882 6.50365L12.3382 1.83058ZM16 10H18.5V16.5H16V10ZM8.00001 16.5H5.50001V10H8.00001V16.5ZM9.50001 16.5V10H14.5V16.5H9.50001Z" fill="currentColor"/>';gt._name="bank";gt._width=24;gt._height=24;gt._viewBox="0 0 24 24";gt=o([$("gds-icon-bank")],gt);gt.define();const Dh=D`
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
`;var Lh=Dh;let qe=class extends Vn(xe(On(R))){render(){return w`<img src="${this.src}" alt="${this.alt}" />`}};qe.styles=[G,Lh];o([b()],qe.prototype,"aspect-ratio",2);o([b({property:"border-radius",valueTemplate:e=>`var(--gds-sys-space-${e})`})],qe.prototype,"border-radius",2);o([b({selector:"img"})],qe.prototype,"object-fit",2);o([b({selector:"img"})],qe.prototype,"object-position",2);o([c()],qe.prototype,"src",2);o([c()],qe.prototype,"alt",2);qe=o([$("gds-img")],qe);qe.define();const Wh=D``;var Ai,fl,fr,yr,br,zi,vr,Di,yl,mr,bl,xr,vl,wr,ml,_r,xl,Dn,kr;let ke=class extends pe{constructor(){super(),d(this,Ai),d(this,Di),d(this,mr),d(this,xr),d(this,wr),d(this,_r),d(this,Dn),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,d(this,fr,e=>["type","placeholder","required"].includes(e.name)),d(this,yr,e=>{const t=e.target;this.value=t.value}),d(this,br,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),d(this,zi,()=>{this.elInputAsync.then(e=>e.focus())}),d(this,vr,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}render(){return w`
      ${N(!this.plain,()=>w`<gds-form-control-header class="size-${this.size}">
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
        @click=${a(this,zi)}
        id="field"
      >
        ${x(this,Di,yl).call(this)}
      </gds-field-base>
      ${N(x(this,Ai,fl).call(this),()=>w`<gds-form-control-footer
            class="size-${this.size}"
            .charCounter=${a(this,Dn,kr)&&this.maxlength-(this.value?.length||0)}
            .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
          ></gds-form-control-footer>`)}
    `}_getValidityAnchor(){return this.elInput}};Ai=new WeakSet;fl=function(){return!this.plain&&(this.invalid||a(this,Dn,kr))};fr=new WeakMap;yr=new WeakMap;br=new WeakMap;zi=new WeakMap;vr=new WeakMap;Di=new WeakSet;yl=function(){return[x(this,mr,bl).call(this),x(this,wr,ml).call(this),x(this,_r,xl).call(this),x(this,xr,vl).call(this)].map(t=>w`${t}`)};mr=new WeakSet;bl=function(){return w` <slot slot="lead" name="lead"></slot> `};xr=new WeakSet;vl=function(){return w`<slot slot="trail" name="trail"></slot>`};wr=new WeakSet;ml=function(){return w`
      <input
        class="native-control"
        @input=${a(this,yr)}
        @change=${a(this,br)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-label=${this.plain&&this.label||he}
        placeholder=" "
        ${Ki(a(this,fr))}
      />
    `};_r=new WeakSet;xl=function(){return this.clearable&&(this.value?.length||0)>0?w`<gds-button
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
      </gds-button>`:he};Dn=new WeakSet;kr=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};ke.styles=[G,Gn,Wh];o([c({attribute:"supporting-text"})],ke.prototype,"supportingText",2);o([c({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],ke.prototype,"showExtendedSupportingText",2);o([c({type:Boolean})],ke.prototype,"clearable",2);o([c({type:Number})],ke.prototype,"maxlength",2);o([c({type:String})],ke.prototype,"size",2);o([c({type:Boolean})],ke.prototype,"plain",2);o([Et("input")],ke.prototype,"elInputAsync",2);o([U("input")],ke.prototype,"elInput",2);ke=o([Fe()],ke);let Li=class extends xe($e(we(ke))){};Li=o([$("gds-input",{dependsOn:[dt,St,ge,it,He,Oe]})],Li);Li.define();const Oh=D`
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
`;var Vh=Oh,Wi,wl;let Re=class extends $e(xe(we(R))){constructor(){super(...arguments),d(this,Wi),this.href="",this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return hs`
      <a
        href=${de(this.href)}
        target=${de(this.target)}
        rel=${de(this.rel||a(this,Wi,wl))}
        download=${de(this.download)}
        aria-label=${this.label||he}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};Wi=new WeakSet;wl=function(){return this.target==="_blank"?"noreferrer noopener":void 0};Re.styles=[G,ce(Vh)];Re.shadowRootOptions={mode:"open",delegatesFocus:!0};o([c()],Re.prototype,"href",2);o([c()],Re.prototype,"target",2);o([c()],Re.prototype,"rel",2);o([c()],Re.prototype,"label",2);o([c()],Re.prototype,"download",2);o([b({valueTemplate:e=>e,selector:"a"})],Re.prototype,"text-decoration",2);Re=o([$("gds-link")],Re);Re.define();const Rh=D`
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
`;var Bh=Rh;let Ze=class extends it{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.inset="0"}render(){return hs`<div part="mask"></div>
      <div part="content"><slot></slot></div>`}};Ze.styles=[G,Bh];o([b({selector:'[part="mask"]',valueTemplate:e=>{const[t]=e.split("/");return`linear-gradient(to ${t}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`}})],Ze.prototype,"mask-image",2);o([b({valueTemplate:e=>e,selector:'[part="mask"]'})],Ze.prototype,"mask-size",2);o([b({valueTemplate:e=>e,selector:'[part="mask"]'})],Ze.prototype,"mask-repeat",2);o([b({valueTemplate:e=>e,selector:'[part="mask"]'})],Ze.prototype,"mask-position",2);o([b({selector:'[part="mask"]',valueTemplate:function(e){const[t,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-background-${t}) ${parseFloat(s)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-background-${t})`}})],Ze.prototype,"background-color",2);o([b({valueTemplate:e=>e,selector:'[part="mask"]'})],Ze.prototype,"backdrop-filter",2);Ze=o([$("gds-mask")],Ze);Ze.define();const Fh=D`
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
`;var Ih=Fh,Rt,ss,Oi,_l;let me=class extends xe(we(R)){constructor(){super(),d(this,Rt),d(this,Oi),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const e={button:!0,selected:this.selected,compact:this.compact},t=a(this,Rt,ss)?bn`a`:bn`button`;return hs`
      <${t}
        class="${Be(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${de(a(this,Rt,ss)?this.href:void 0)}
        target=${de(a(this,Rt,ss)?this.target:void 0)}
        rel=${de(a(this,Rt,ss)?this.rel||a(this,Oi,_l):void 0)}
        download=${de(a(this,Rt,ss)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${t}>
    `}};Rt=new WeakSet;ss=function(){return this.href.length>0};Oi=new WeakSet;_l=function(){return this.target==="_blank"?"noreferrer noopener":void 0};me.styles=[G,ce(Ih)];me.shadowRootOptions={mode:"open",delegatesFocus:!0};o([c({type:Boolean,reflect:!0})],me.prototype,"disabled",2);o([c()],me.prototype,"label",2);o([c()],me.prototype,"href",2);o([c()],me.prototype,"target",2);o([c()],me.prototype,"rel",2);o([c()],me.prototype,"download",2);o([c({type:Boolean,reflect:!0})],me.prototype,"compact",2);o([c({type:Boolean,reflect:!0})],me.prototype,"selected",2);me=o([$("gds-menu-button")],me);me.define();W.define();let Ws=class extends R{constructor(){super(...arguments),this.show=!1}render(){return w``}};Ws.styles=D`
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
  `;o([c({type:Boolean,reflect:!0})],Ws.prototype,"show",2);Ws=o([$("gds-backdrop")],Ws);Ws.define();const kl=D`
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
`,Ph=D`
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
`;let ds=class extends we($e(R)){constructor(){super(...arguments),this.captureMode="clone"}querySelectorAll(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):new NodeList}querySelector(e){return this.shadowRoot?this.shadowRoot.querySelector(e):null}get innerHTML(){return this.shadowRoot?.innerHTML||""}set innerHTML(e){this.shadowRoot&&(this.shadowRoot.innerHTML=e)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){if(!this.shadowRoot||this.childNodes.length===0)return;if(this.captureMode==="move"){this.shadowRoot.replaceChildren(...Array.from(this.childNodes));return}const e=Array.from(this.childNodes).map(t=>t.cloneNode(!0));this.shadowRoot.replaceChildren(...e)}};ds.styles=[G,kl,Ph];o([c()],ds.prototype,"captureMode",2);o([Xi({childList:!0,subtree:!0,attributes:!0,characterData:!0})],ds.prototype,"_captureDOM",1);ds=o([$("gds-rich-text")],ds);ds.define();const Nh=`@layer base {
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
`;let qt=class extends xe(R){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),ue.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return w`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};qt.styles=[...G,ce(Nh)];o([c({type:Boolean,reflect:!0})],qt.prototype,"selected",2);o([c()],qt.prototype,"value",2);o([c({type:Boolean,reflect:!0})],qt.prototype,"disabled",2);qt=o([$("gds-segment")],qt);const Hh=`@layer base {
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
`;var kt,Vi,Cl,Ri,Bi,Fi,Ts,hn,Ii,Pi;const Gh=(e,t)=>{let s;return()=>{clearTimeout(s),s=setTimeout(e,t)}};let Ce=class extends we(xe($e(R))){constructor(){super(...arguments),d(this,Vi),this.size="medium",d(this,kt,void 0),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,d(this,Ri,()=>{const e=this.segments.filter((t,s,n)=>n[s+1]?.isVisible&&!t.isVisible)[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),d(this,Bi,()=>{const e=this.segments.filter((t,s,n)=>n[s-1]?.isVisible&&!t.isVisible).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),d(this,Fi,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),d(this,Ts,Gh(a(this,Fi),50)),d(this,hn,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,s=e.offsetLeft;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),d(this,Ii,e=>{const t=this.segments.find(s=>s===e.target||s.contains(e.target));t&&(this.segments.forEach(s=>s.selected=!1),t.selected=!0,H(this,kt,t.value),a(this,hn).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0})))}),d(this,Pi,()=>{a(this,kt)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===a(this,kt));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return a(this,kt)}set value(e){H(this,kt,e),a(this,Pi).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),ue.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{a(this,Ts).call(this)})})}render(){return w`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${a(this,Ri)}
        aria-label=${A("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${a(this,Ii)}
          @slotchange=${x(this,Vi,Cl)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${a(this,Bi)}
        aria-label=${A("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{a(this,Ts).call(this),a(this,hn).call(this)})}};kt=new WeakMap;Vi=new WeakSet;Cl=function(){const e=this.segments.find(t=>t.selected)?.value;e&&H(this,kt,e),this.intersectionObserver?.disconnect(),this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(s=>{const n=s.target;n._isVisible=s.intersectionRatio>.99,a(this,Ts).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(t=>{this.intersectionObserver?.observe(t)})};Ri=new WeakMap;Bi=new WeakMap;Fi=new WeakMap;Ts=new WeakMap;hn=new WeakMap;Ii=new WeakMap;Pi=new WeakMap;Ce.styles=[G,ce(Hh)];o([c({reflect:!0})],Ce.prototype,"size",2);o([c()],Ce.prototype,"value",1);o([U("slot")],Ce.prototype,"_elSlot",2);o([U("#indicator")],Ce.prototype,"_elIndicator",2);o([U("#track")],Ce.prototype,"_elTrack",2);o([ie()],Ce.prototype,"_showPrevButton",2);o([ie()],Ce.prototype,"_showNextButton",2);o([gr(),Z("value")],Ce.prototype,"_recalculateMinWidth",1);Ce=o([$("gds-segmented-control",{dependsOn:[qt,je,Ue]}),Fe()],Ce);Ce.define();const Yh=D`
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
`;var jh=Yh;let Os=class extends R{render(){return hs`<div part="signal"></div>`}};Os.styles=[G,jh];o([b({valueTemplate:e=>`var(--gds-color-${e})`,selector:'[part="signal"]'})],Os.prototype,"color",2);Os=o([$("gds-signal")],Os);Os.define();let Vs=class extends R{render(){return w``}};Vs.styles=[G];o([b({property:"height",valueTemplate:e=>`var(--gds-sys-space-${e})`})],Vs.prototype,"size",2);Vs=o([$("gds-spacer")],Vs);Vs.define();const Uh=D`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var qh=Uh;let Qe=class extends V{constructor(){super(...arguments),this.tag="span"}render(){const e=xd(encodeURI(this.tag));return hs`<${e} tag><slot></slot></${e}>`}};Qe.styles=[G,kl,qh];o([c({type:String})],Qe.prototype,"tag",2);o([b({selector:"[tag]",styleTemplate:(e,t)=>{const s=t[0],n=`font-size: var(--gds-sys-text-size-${s});`,i=`line-height: var(--gds-sys-text-line-height-${s});`;return n+i}})],Qe.prototype,"font-size",2);o([b({selector:"[tag]",valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],Qe.prototype,"font-weight",2);o([b()],Qe.prototype,"text-transform",2);o([b({selector:"[tag]"})],Qe.prototype,"text-decoration",2);o([b({selector:"[tag]",styleTemplate:(e,t)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${t[0]};
      -webkit-box-orient: vertical;`})],Qe.prototype,"lines",2);Qe=o([$("gds-text")],Qe);Qe.define();const Zh=D`
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
`;var Ni,$l,Cr,$r,Sr,Mr,Hi,Er,Gi,Sl,Tr,Ml,Ar,El,zr,Tl,Dr,Al,Ln,Lr;let te=class extends pe{constructor(){super(),d(this,Ni),d(this,Gi),d(this,Tr),d(this,Ar),d(this,zr),d(this,Dr),d(this,Ln),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.showExtendedSupportingText=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},d(this,Cr,e=>["type","placeholder","required"].includes(e.name)),d(this,$r,e=>{const t=e.target;this.value=t.value}),d(this,Sr,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),d(this,Mr,e=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),d(this,Hi,()=>{this.elTextareaAsync.then(e=>e.focus())}),d(this,Er,()=>{this.value="",this.elTextareaAsync.then(e=>{if(this.resizable==="manual")e.style.height="";else if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString()),e.style.height=""}}),this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}),this.value=""}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{const e=this.fieldBase?.shadowRoot;if(!e)return;const t=e.querySelector(".right");if(t){const s=t.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${s.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return w`
      ${N(!this.plain,()=>w`<gds-form-control-header
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
        @click=${a(this,Hi)}
        multiline
      >
        ${x(this,Gi,Sl).call(this)}
      </gds-field-base>

      ${N(x(this,Ni,$l).call(this),()=>w`<gds-form-control-footer
            lass="size-${this.size}"
            .charCounter=${a(this,Ln,Lr)&&this.maxlength-(this.value?.length||0)}
            .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
          ></gds-form-control-footer>`)}
    `}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(e.value===""){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=getComputedStyle(e),s=parseFloat(t.lineHeight),n=e.scrollHeight,i=Math.ceil(n/s),r=this._initialRows??this._defaultRows;this.rows=Math.max(r,i),e.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(e=>{this.resizable==="false"&&e.style.setProperty("--_lines",this.rows.toString())})}};Ni=new WeakSet;$l=function(){return!this.plain&&(this.invalid||a(this,Ln,Lr))};Cr=new WeakMap;$r=new WeakMap;Sr=new WeakMap;Mr=new WeakMap;Hi=new WeakMap;Er=new WeakMap;Gi=new WeakSet;Sl=function(){return[x(this,Tr,Ml).call(this),x(this,zr,Tl).call(this),x(this,Dr,Al).call(this),x(this,Ar,El).call(this)].map(t=>w`${t}`)};Tr=new WeakSet;Ml=function(){return w`<slot slot="lead" name="lead"></slot>`};Ar=new WeakSet;El=function(){return w`<slot slot="trail" name="trail"></slot>`};zr=new WeakSet;Tl=function(){return w`
      <textarea
        @input=${a(this,$r)}
        @change=${a(this,Sr)}
        @paste=${a(this,Mr)}
        .value=${this.value}
        id="input"
        class="native-control resize-${this.resizable}"
        aria-label=${this.plain&&this.label||he}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        placeholder=" "
        ${Ki(a(this,Cr))}
      ></textarea>
    `};Dr=new WeakSet;Al=function(){return this.clearable&&(this.value?.length||0)>0?w`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${A("Clear input")}"
          @click=${a(this,Er)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:he};Ln=new WeakSet;Lr=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};te.styles=[G,Gn,Zh];o([b({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],te.prototype,"rows",2);o([c({attribute:"supporting-text"})],te.prototype,"supportingText",2);o([c({type:Boolean})],te.prototype,"clearable",2);o([c({type:String})],te.prototype,"resizable",2);o([c({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],te.prototype,"showExtendedSupportingText",2);o([c({type:Number})],te.prototype,"maxlength",2);o([c({type:String})],te.prototype,"size",2);o([c({type:Boolean})],te.prototype,"plain",2);o([Et("textarea")],te.prototype,"elTextareaAsync",2);o([U("textarea")],te.prototype,"elTextarea",2);o([U("gds-field-base")],te.prototype,"fieldBase",2);o([gr()],te.prototype,"_handleResize",1);o([Z("value")],te.prototype,"_setAutoHeight",1);o([Z("rows")],te.prototype,"_handleRowsChange",1);te=o([Fe()],te);let Yi=class extends we(xe($e(te))){};Yi=o([$("gds-textarea",{dependsOn:[dt,St,He,ge,Oe]})],Yi);Yi.define();let Mt=class extends R{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2016"}connectedCallback(){super.connectedCallback(),ue.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",ce(`:host {${no}}`))}render(){return w`<slot></slot>`}_onColorSchemeChange(){this.colorScheme==="dark"?this._dynamicStylesController.inject("color-scheme",ce(`:host { ${no}}`)):this._dynamicStylesController.inject("color-scheme",ce(`:host { ${ra}}`)),this.dispatchEvent(new CustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}}))}_onDesignVersionChange(){this.dispatchEvent(new CustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}}))}};Mt.styles=[G,D`
      :host {
        display: contents;
      }
    `];o([c({reflect:!0,attribute:"color-scheme"})],Mt.prototype,"colorScheme",2);o([c({reflect:!0,attribute:"design-version"})],Mt.prototype,"designVersion",2);o([Z("colorScheme")],Mt.prototype,"_onColorSchemeChange",1);o([Z("designVersion")],Mt.prototype,"_onDesignVersionChange",1);Mt=o([$("gds-theme")],Mt);Mt.define();const Qh=D`
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
`;var Jh=Qh;let oe=class extends xe(On($e(we(Vn(R))))){applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return w`<video></video>`}firstUpdated(){this.applyVideoSettings()}};oe.styles=[G,Jh];o([b()],oe.prototype,"aspect-ratio",2);o([b({selector:"video"})],oe.prototype,"object-position",2);o([b()],oe.prototype,"opacity",2);o([b({selector:"video"})],oe.prototype,"object-fit",2);o([b({selector:"video"})],oe.prototype,"pointer-events",2);o([b({valueTemplate:e=>`var(--gds-sys-space-${e})`})],oe.prototype,"border-radius",2);o([c()],oe.prototype,"src",2);o([c()],oe.prototype,"poster",2);o([c({type:Boolean})],oe.prototype,"muted",2);o([c({type:Boolean})],oe.prototype,"playsinline",2);o([c({type:Boolean})],oe.prototype,"autoplay",2);o([c({type:Boolean})],oe.prototype,"loop",2);o([U("video")],oe.prototype,"videoElement",2);oe=o([$("gds-video")],oe);oe.define();var Xh=Object.defineProperty,Kh=Object.getOwnPropertyDescriptor,eu=(e,t,s,n)=>{for(var i=n>1?void 0:n?Kh(t,s):t,r=e.length-1,l;r>=0;r--)(l=e[r])&&(i=(n?l(t,s,i):l(i))||i);return n&&i&&Xh(t,s,i),i};let ta=class extends sa{createRenderRoot(){return this}render(){return w`<gds-flex flex-direction="column" gap="xl" max-width="800px">
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
    </gds-flex>`}};ta=eu([Ul("all-components")],ta);export{ta as AllComponents};
