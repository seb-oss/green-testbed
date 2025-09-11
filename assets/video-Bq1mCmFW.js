import{f as Hl,u as Pl,i as Nl,V as ws,r as De,a as T,h as v,g as $,T as Qs,E as ye,x as $e,Z as jl,b as Yl}from"./index-DCr2rRyY.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ul={attribute:!0,type:String,converter:Pl,reflect:!1,hasChanged:Hl},ql=(e=Ul,t,s)=>{const{kind:o,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(s.name,e),o==="accessor"){const{name:l}=s;return{set(c){const h=t.get.call(this);t.set.call(this,c),this.requestUpdate(l,h,e)},init(c){return c!==void 0&&this.C(l,void 0,e,c),c}}}if(o==="setter"){const{name:l}=s;return function(c){const h=this[l];t.call(this,c),this.requestUpdate(l,h,e)}}throw Error("Unsupported decorator location: "+o)};function d(e){return(t,s)=>typeof s=="object"?ql(e,t,s):((o,r,n)=>{const l=r.hasOwnProperty(n);return r.constructor.createProperty(n,o),l?Object.getOwnPropertyDescriptor(r,n):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function le(e){return d({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Or=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q(e,t){return(s,o,r)=>{const n=l=>l.renderRoot?.querySelector(e)??null;return Or(s,o,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Zl;function Xl(e){return(t,s)=>Or(t,s,{get(){return(this.renderRoot??(Zl??=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vt(e){return(t,s)=>Or(t,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}var Kl=Object.defineProperty,Jl=Object.getOwnPropertyDescriptor,Wn=e=>{throw TypeError(e)},i=(e,t,s,o)=>{for(var r=o>1?void 0:o?Jl(t,s):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=(o?l(t,s,r):l(r))||r);return o&&r&&Kl(t,s,r),r},zr=(e,t,s)=>t.has(e)||Wn("Cannot "+s),a=(e,t,s)=>(zr(e,t,"read from private field"),s?s.call(e):t.get(e)),g=(e,t,s)=>t.has(e)?Wn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),U=(e,t,s,o)=>(zr(e,t,"write to private field"),t.set(e,s),s),f=(e,t,s)=>(zr(e,t,"access private method"),s),st,Wo,Ct,Ro,rs,ot,St,Fo,Rt,Rn,Rs,Fn;class Ql{constructor(t){g(this,Rt),g(this,st,!Vr()),g(this,Wo,!1),g(this,Ct,[]),g(this,Ro,[]),g(this,rs,new Map),g(this,ot,new Map),g(this,St,[]),g(this,Fo,[]),this.host=t,this.host.addController(this)}hostConnected(){f(this,Rt,Fn).call(this)}has(t){return a(this,st)?a(this,ot).has(t):a(this,rs).has(t)}inject(t,s){f(this,Rt,Rn).call(this,t,s),f(this,Rt,Rs).call(this)}clear(t){a(this,st)?this.host.updateComplete.then(()=>{a(this,ot).get(t)?.remove(),a(this,ot).delete(t)}):a(this,rs).delete(t),f(this,Rt,Rs).call(this)}clearAll(){a(this,st)?this.host.updateComplete.then(()=>{a(this,ot).forEach(t=>t.remove()),a(this,St).forEach(t=>t.remove()),a(this,ot).clear(),U(this,St,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],a(this,rs).clear(),U(this,Ct,[]))}clearInitial(){a(this,st)?this.host.updateComplete.then(()=>{a(this,St).forEach(t=>t.remove()),U(this,St,[])}):U(this,Ct,[]),f(this,Rt,Rs).call(this)}restoreInitial(){a(this,st)?a(this,Fo).forEach(t=>{a(this,St).push(t.cloneNode(!0))}):U(this,Ct,[...a(this,Ro)]),f(this,Rt,Rs).call(this)}}st=new WeakMap;Wo=new WeakMap;Ct=new WeakMap;Ro=new WeakMap;rs=new WeakMap;ot=new WeakMap;St=new WeakMap;Fo=new WeakMap;Rt=new WeakSet;Rn=function(e,t){if(a(this,st)){let s=a(this,ot).get(e);s||(s=document.createElement("style"),a(this,ot).set(e,s)),s.textContent=t.cssText}else{if(!this.host.shadowRoot||!t.styleSheet)return;a(this,rs).set(e,t.styleSheet)}};Rs=function(){if(a(this,st))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(e=>{e.remove()}),a(this,St).forEach(e=>{this.host.shadowRoot?.appendChild(e)}),a(this,ot).forEach(e=>{this.host.shadowRoot?.appendChild(e)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...a(this,Ct),...Array.from(a(this,rs).values())]}};Fn=function(){a(this,Wo)||(a(this,st)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(e=>{a(this,St).push(e),a(this,Fo).push(e.cloneNode(!0))})}):this.host.shadowRoot&&a(this,Ct).length===0&&(U(this,Ct,[...this.host.shadowRoot.adoptedStyleSheets||[]]),U(this,Ro,[...a(this,Ct)])),U(this,Wo,!0))};function Vr(){try{return new CSSStyleSheet,!0}catch{return!1}}var fn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yn={};/*! *****************************************************************************
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
***************************************************************************** */var bn;function ed(){if(bn)return yn;bn=1;var e;return function(t){(function(s){var o=typeof fn=="object"?fn:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),r=n(t);typeof o.Reflect>"u"?o.Reflect=t:r=n(o.Reflect,r),s(r);function n(l,c){return function(h,p){typeof l[h]!="function"&&Object.defineProperty(l,h,{configurable:!0,writable:!0,value:p}),c&&c(h,p)}}})(function(s){var o=Object.prototype.hasOwnProperty,r=typeof Symbol=="function",n=r&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",l=r&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",c=typeof Object.create=="function",h={__proto__:[]}instanceof Array,p=!c&&!h,m={create:c?function(){return ui(Object.create(null))}:h?function(){return ui({__proto__:null})}:function(){return ui({})},has:p?function(u,y){return o.call(u,y)}:function(u,y){return y in u},get:p?function(u,y){return o.call(u,y)?u[y]:void 0}:function(u,y){return u[y]}},b=Object.getPrototypeOf(Function),k=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",w=!k&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:Fl(),C=!k&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:Gl(),D=!k&&typeof WeakMap=="function"?WeakMap:Il(),B=new D;function W(u,y,x,S){if(oe(x)){if(!hn(u))throw new TypeError;if(!un(y))throw new TypeError;return es(u,y)}else{if(!hn(u))throw new TypeError;if(!ge(y))throw new TypeError;if(!ge(S)&&!oe(S)&&!ys(S))throw new TypeError;return ys(S)&&(S=void 0),x=xt(x),mt(u,y,x,S)}}s("decorate",W);function Y(u,y){function x(S,M){if(!ge(S))throw new TypeError;if(!oe(M)&&!Ol(M))throw new TypeError;Ce(u,y,S,M)}return x}s("metadata",Y);function J(u,y,x,S){if(!ge(x))throw new TypeError;return oe(S)||(S=xt(S)),Ce(u,y,x,S)}s("defineMetadata",J);function re(u,y,x){if(!ge(y))throw new TypeError;return oe(x)||(x=xt(x)),ne(u,y,x)}s("hasMetadata",re);function te(u,y,x){if(!ge(y))throw new TypeError;return oe(x)||(x=xt(x)),Pe(u,y,x)}s("hasOwnMetadata",te);function Ge(u,y,x){if(!ge(y))throw new TypeError;return oe(x)||(x=xt(x)),ze(u,y,x)}s("getMetadata",Ge);function ke(u,y,x){if(!ge(y))throw new TypeError;return oe(x)||(x=xt(x)),Se(u,y,x)}s("getOwnMetadata",ke);function Qt(u,y){if(!ge(u))throw new TypeError;return oe(y)||(y=xt(y)),Ne(u,y)}s("getMetadataKeys",Qt);function vt(u,y){if(!ge(u))throw new TypeError;return oe(y)||(y=xt(y)),ho(u,y)}s("getOwnMetadataKeys",vt);function Ie(u,y,x){if(!ge(y))throw new TypeError;oe(x)||(x=xt(x));var S=He(y,x,!1);if(oe(S)||!S.delete(u))return!1;if(S.size>0)return!0;var M=B.get(y);return M.delete(x),M.size>0||B.delete(y),!0}s("deleteMetadata",Ie);function es(u,y){for(var x=u.length-1;x>=0;--x){var S=u[x],M=S(y);if(!oe(M)&&!ys(M)){if(!un(M))throw new TypeError;y=M}}return y}function mt(u,y,x,S){for(var M=u.length-1;M>=0;--M){var ce=u[M],L=ce(y,x,S);if(!oe(L)&&!ys(L)){if(!ge(L))throw new TypeError;S=L}}return S}function He(u,y,x){var S=B.get(u);if(oe(S)){if(!x)return;S=new w,B.set(u,S)}var M=S.get(y);if(oe(M)){if(!x)return;M=new w,S.set(y,M)}return M}function ne(u,y,x){var S=Pe(u,y,x);if(S)return!0;var M=hi(y);return ys(M)?!1:ne(u,M,x)}function Pe(u,y,x){var S=He(y,x,!1);return oe(S)?!1:Ll(S.has(u))}function ze(u,y,x){var S=Pe(u,y,x);if(S)return Se(u,y,x);var M=hi(y);if(!ys(M))return ze(u,M,x)}function Se(u,y,x){var S=He(y,x,!1);if(!oe(S))return S.get(u)}function Ce(u,y,x,S){var M=He(x,S,!0);M.set(u,y)}function Ne(u,y){var x=ho(u,y),S=hi(u);if(S===null)return x;var M=Ne(S,y);if(M.length<=0)return x;if(x.length<=0)return M;for(var ce=new C,L=[],O=0,E=x;O<E.length;O++){var I=E[O],H=ce.has(I);H||(ce.add(I),L.push(I))}for(var Wt=0,gn=M;Wt<gn.length;Wt++){var I=gn[Wt],H=ce.has(I);H||(ce.add(I),L.push(I))}return L}function ho(u,y){var x=[],S=He(u,y,!1);if(oe(S))return x;for(var M=S.keys(),ce=zl(M),L=0;;){var O=Wl(ce);if(!O)return x.length=L,x;var E=Vl(O);try{x[L]=E}catch(I){try{Rl(ce)}finally{throw I}}L++}}function cn(u){if(u===null)return 1;switch(typeof u){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return u===null?1:6;default:return 6}}function oe(u){return u===void 0}function ys(u){return u===null}function Tl(u){return typeof u=="symbol"}function ge(u){return typeof u=="object"?u!==null:typeof u=="function"}function Dl(u,y){switch(cn(u)){case 0:return u;case 1:return u;case 2:return u;case 3:return u;case 4:return u;case 5:return u}var x="string",S=pn(u,n);if(S!==void 0){var M=S.call(u,x);if(ge(M))throw new TypeError;return M}return Al(u)}function Al(u,y){var x,S,M;{var ce=u.toString;if(uo(ce)){var S=ce.call(u);if(!ge(S))return S}var x=u.valueOf;if(uo(x)){var S=x.call(u);if(!ge(S))return S}}throw new TypeError}function Ll(u){return!!u}function Bl(u){return""+u}function xt(u){var y=Dl(u);return Tl(y)?y:Bl(y)}function hn(u){return Array.isArray?Array.isArray(u):u instanceof Object?u instanceof Array:Object.prototype.toString.call(u)==="[object Array]"}function uo(u){return typeof u=="function"}function un(u){return typeof u=="function"}function Ol(u){switch(cn(u)){case 3:return!0;case 4:return!0;default:return!1}}function pn(u,y){var x=u[y];if(x!=null){if(!uo(x))throw new TypeError;return x}}function zl(u){var y=pn(u,l);if(!uo(y))throw new TypeError;var x=y.call(u);if(!ge(x))throw new TypeError;return x}function Vl(u){return u.value}function Wl(u){var y=u.next();return y.done?!1:y}function Rl(u){var y=u.return;y&&y.call(u)}function hi(u){var y=Object.getPrototypeOf(u);if(typeof u!="function"||u===b||y!==b)return y;var x=u.prototype,S=x&&Object.getPrototypeOf(x);if(S==null||S===Object.prototype)return y;var M=S.constructor;return typeof M!="function"||M===u?y:M}function Fl(){var u={},y=[],x=function(){function L(O,E,I){this._index=0,this._keys=O,this._values=E,this._selector=I}return L.prototype["@@iterator"]=function(){return this},L.prototype[l]=function(){return this},L.prototype.next=function(){var O=this._index;if(O>=0&&O<this._keys.length){var E=this._selector(this._keys[O],this._values[O]);return O+1>=this._keys.length?(this._index=-1,this._keys=y,this._values=y):this._index++,{value:E,done:!1}}return{value:void 0,done:!0}},L.prototype.throw=function(O){throw this._index>=0&&(this._index=-1,this._keys=y,this._values=y),O},L.prototype.return=function(O){return this._index>=0&&(this._index=-1,this._keys=y,this._values=y),{value:O,done:!0}},L}();return function(){function L(){this._keys=[],this._values=[],this._cacheKey=u,this._cacheIndex=-2}return Object.defineProperty(L.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),L.prototype.has=function(O){return this._find(O,!1)>=0},L.prototype.get=function(O){var E=this._find(O,!1);return E>=0?this._values[E]:void 0},L.prototype.set=function(O,E){var I=this._find(O,!0);return this._values[I]=E,this},L.prototype.delete=function(O){var E=this._find(O,!1);if(E>=0){for(var I=this._keys.length,H=E+1;H<I;H++)this._keys[H-1]=this._keys[H],this._values[H-1]=this._values[H];return this._keys.length--,this._values.length--,O===this._cacheKey&&(this._cacheKey=u,this._cacheIndex=-2),!0}return!1},L.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=u,this._cacheIndex=-2},L.prototype.keys=function(){return new x(this._keys,this._values,S)},L.prototype.values=function(){return new x(this._keys,this._values,M)},L.prototype.entries=function(){return new x(this._keys,this._values,ce)},L.prototype["@@iterator"]=function(){return this.entries()},L.prototype[l]=function(){return this.entries()},L.prototype._find=function(O,E){return this._cacheKey!==O&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=O)),this._cacheIndex<0&&E&&(this._cacheIndex=this._keys.length,this._keys.push(O),this._values.push(void 0)),this._cacheIndex},L}();function S(L,O){return L}function M(L,O){return O}function ce(L,O){return[L,O]}}function Gl(){return function(){function u(){this._map=new w}return Object.defineProperty(u.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),u.prototype.has=function(y){return this._map.has(y)},u.prototype.add=function(y){return this._map.set(y,y),this},u.prototype.delete=function(y){return this._map.delete(y)},u.prototype.clear=function(){this._map.clear()},u.prototype.keys=function(){return this._map.keys()},u.prototype.values=function(){return this._map.values()},u.prototype.entries=function(){return this._map.entries()},u.prototype["@@iterator"]=function(){return this.keys()},u.prototype[l]=function(){return this.keys()},u}()}function Il(){var u=16,y=m.create(),x=S();return function(){function E(){this._key=S()}return E.prototype.has=function(I){var H=M(I,!1);return H!==void 0?m.has(H,this._key):!1},E.prototype.get=function(I){var H=M(I,!1);return H!==void 0?m.get(H,this._key):void 0},E.prototype.set=function(I,H){var Wt=M(I,!0);return Wt[this._key]=H,this},E.prototype.delete=function(I){var H=M(I,!1);return H!==void 0?delete H[this._key]:!1},E.prototype.clear=function(){this._key=S()},E}();function S(){var E;do E="@@WeakMap@@"+O();while(m.has(y,E));return y[E]=!0,E}function M(E,I){if(!o.call(E,x)){if(!I)return;Object.defineProperty(E,x,{value:m.create()})}return E[x]}function ce(E,I){for(var H=0;H<I;++H)E[H]=Math.random()*255|0;return E}function L(E){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(E)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(E)):ce(new Uint8Array(E),E):ce(new Array(E),E)}function O(){var E=L(u);E[6]=E[6]&79|64,E[8]=E[8]&191|128;for(var I="",H=0;H<u;++H){var Wt=E[H];(H===4||H===6||H===8)&&(I+="-"),Wt<16&&(I+="0"),I+=Wt.toString(16).toLowerCase()}return I}}function ui(u){return u.__=void 0,delete u.__,u}})}(e||(e={})),yn}ed();function vn(e){return e.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}class R extends Nl{constructor(){super(),this.semanticVersion="2.5.1",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new Ql(this)}static define(){}connectedCallback(){super.connectedCallback(),this.setAttribute("gds-element",this.gdsElementName?.toString()||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(t,s){const o={bubbles:!0,composed:!1,cancelable:!0,...s};return[this.dispatchEvent(new Event(t,o)),this.dispatchEvent(new Event(vn(t),o))].every(r=>r!==!1)}dispatchCustomEvent(t,s={}){const o={bubbles:!0,composed:!1,cancelable:!0,...s};return[this.dispatchEvent(new CustomEvent(t,o)),this.dispatchEvent(new CustomEvent(vn(t),o))].every(r=>r!==!1)}}R.isDefined=!1;R.styleExpressionBaseSelector=":host";i([le()],R.prototype,"_isUsingTransitionalStyles",2);const Gn=`/**
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
  --gds-sys-radius-max: 999px;`,go=`/**
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
  --gds-sys-color-state-warning-06: #f19e38 20%;`,vi=`/**
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
  --gds-sys-color-state-warning-06: #8f530a 16%;`,In=`/**
 * Do not edit directly, this file was auto-generated.
 */

  --gds-sys-shadow-s-01: 0px 0px 2px 0px #060D1314;
  --gds-sys-shadow-s-02: 0px 0px 0px 0px transparent;
  --gds-sys-shadow-m-01: 0px 4px 8px -2px #060D131a;
  --gds-sys-shadow-m-02: 0px 2px 4px -2px #060D130f;
  --gds-sys-shadow-l-01: 0px 20px 24px -4px #060D1314;
  --gds-sys-shadow-l-02: 0px 8px 8px -4px #060D1308;
  --gds-sys-shadow-xl-01: 0px 24px 48px -12px #060D132e;
  --gds-sys-shadow-xl-02: 0px 0px 0px 0px transparent;`;var td={};const As=typeof process<"u"&&td!==void 0,sd=/iPad|iPhone|iPod/.test(As?"":navigator.userAgent);var mi,Go,Io,Wr,fo,Hn,Pn;function od(){return As?[]:document.adoptedStyleSheets||[]}const id=class Nn{constructor(){g(this,fo),g(this,mi,!Vr()),g(this,Go,new Map),g(this,Io,new Map),g(this,Wr,od())}static get instance(){return globalThis.__gdsGlobalStylesRegistryScoped?.[ws]||(globalThis.__gdsGlobalStylesRegistryScoped={...globalThis.__gdsGlobalStylesRegistryScoped,[ws]:new Nn}),globalThis.__gdsGlobalStylesRegistryScoped[ws]}injectGlobalStyles(t,s){if(a(this,mi)){const o=Array.isArray(s)?s.map(r=>r.toString()).join(""):s.toString();f(this,fo,Hn).call(this,t,o)}else s.styleSheet&&f(this,fo,Pn).call(this,t,s.styleSheet)}};mi=new WeakMap;Go=new WeakMap;Io=new WeakMap;Wr=new WeakMap;fo=new WeakSet;Hn=function(e,t){if(As)return;let s=a(this,Io).get(e);s||(s=document.createElement("style"),a(this,Io).set(e,s)),s.textContent=t,document.head.appendChild(s)};Pn=function(e,t){As||(a(this,Go).set(e,t),document.adoptedStyleSheets=[...a(this,Wr),...Array.from(a(this,Go).values())])};let jn=id;const j=[T`
    :host {
      ${De(Gn)}
      ${De(In)}
    }
  `];jn.instance.injectGlobalStyles("root-tokens",T`
    :root,
    :root[gds-theme='light'] {
      ${De(Gn)}
      ${De(In)}
      ${De(vi)}
    }
    :root[gds-theme='dark'] {
      ${De(go)}
    }
  `);const rd={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},nd=/^([<|>]=?)?([0-9a-z]+)/,Yn=["{","}",";",":",","],mn=[" ","/n"];function ad(e=""){const t=[];let s="";for(let o=0;o<e.length;o++){const r=e[o];if(mn.includes(r)||(s+=r),Yn.includes(r)){t.push(s.slice(0,-1)),t.push(r),s="";continue}if(mn.includes(r)||o===e.length-1){t.push(s),s="";continue}}return t.filter(o=>o!=="")}function ld(e){const t=[];let s={breakpoint:"-",values:[]};const o=()=>({sel:"",values:[]});let r=o();for(const n of e){if(!Yn.includes(n)){r.values.push(n);continue}if(n==="{"&&(s={breakpoint:r.values.join(","),values:[]},r=o()),n===";"&&(t.length===0&&t.push(s),r.values.length>0&&(s.values.push(r),r=o())),n===":"){const l=r.values.pop()??"";r.sel=l}s&&n==="}"&&(s.values.push(r),r=o(),t.push(s))}return r.values.length>0&&s.values.push(r),t.length===0&&t.push(s),t}function dd(e){return e.split(",").map(s=>{const o=s.trim().match(nd);if(!o)throw new Error(`Invalid breakpoint specifier: ${s}`);return{condition:o[1],value:o[2]}})}function cd(e,t,s,o=n=>n,r=(n,l)=>`${n}: ${l.join(" ")};`){let n="";for(const l of s){const p=`@media ${(l.breakpoint==="-"?[{condition:">=",value:"0"}]:dd(l.breakpoint)).map(m=>`(${m.condition?.includes("<")?"max-width":"min-width"}: ${rd[m.value]??m.value})`).join(" and ")} {${l.values.map(m=>{let b=e;m.sel.length>0&&(b=e===":host"?`:host(:${m.sel})`:`${e}:${m.sel}`);const k=r(t,m.values.map(o));return m.sel==="hover"?`@media (hover: hover) {${b}{${k}}}`:`${b}{${k}}`}).join("")}}`;n+=p}return n}const pi=new Map;function _(e){return(t,s)=>{const o=e?.property??String(s),r=e?.valueTemplate,n=e?.styleTemplate,l=e?.cacheOverrideKey??"0";d({attribute:e?.attribute,noAccessor:!0})(t,s),Object.defineProperty(t,s,{get:function(){return this["__"+String(s)]},set:async function(c){if(!c)return;this["__"+String(s)]=c,await this.updateComplete;const h=e?.selector??this.constructor.styleExpressionBaseSelector,p=this.level??"0",m=h+o+c+p+l;if(pi.has(m)){this._dynamicStylesController.inject(`sep_${String(s)}`,pi.get(m));return}const b=ld(ad(c)),k=cd(h,o,b,r?.bind(this),n?.bind(this)),w=De(k);pi.set(m,w),this._dynamicStylesController.inject(`sep_${String(s)}`,w)}})}}function Rr(e,t,s){if(e==="transparent"||e==="currentColor"||e==="inherit")return e;const[o,r]=e.split("/");let n;return s&&t==="background"?n=`var(--gds-sys-color-l${s}-${o})`:n=`var(--gds-sys-color-${t}-${o})`,r?`color-mix(in srgb, ${n} ${parseFloat(r)*100}%, transparent 0%)`:n}function ro(e){return{valueTemplate:function(t){return Rr(t,e,this.level)}}}const ks={valueTemplate:e=>`var(--gds-sys-space-${e}, 0)`},hd={valueTemplate:e=>`var(--gds-sys-radius-${e}, 0)`},Te={valueTemplate:e=>`var(--gds-sys-space-${ud(e)}, ${e})`},gi={valueTemplate:e=>{const s=(e.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${e})`:`calc(var(--gds-sys-space-${e.substring(1)}) * -1)`;return e==="auto"?"auto":s},styleTemplate:(e,t)=>{const s=c=>c==="auto"?"auto":`${c}`,o=s(t[0]),r=t.length>1?s(t[1]):o,n=t.length>2?s(t[2]):o,l=t.length>3?s(t[3]):r;return`${e}: ${o} ${r} ${n} ${l};`}};function ud(e){return e.replace(/[^a-zA-Z0-9-]/g,"")}function _e(e){class t extends e{}return i([_(Te)],t.prototype,"width",2),i([_(Te)],t.prototype,"min-width",2),i([_(Te)],t.prototype,"max-width",2),i([_(Te)],t.prototype,"inline-size",2),i([_(Te)],t.prototype,"min-inline-size",2),i([_(Te)],t.prototype,"max-inline-size",2),t}function si(e){class t extends e{}return i([_(Te)],t.prototype,"height",2),i([_(Te)],t.prototype,"min-height",2),i([_(Te)],t.prototype,"max-height",2),i([_(Te)],t.prototype,"block-size",2),i([_(Te)],t.prototype,"min-block-size",2),i([_(Te)],t.prototype,"max-block-size",2),t}function Ee(e){class t extends e{}return i([_(gi)],t.prototype,"margin",2),i([_(gi)],t.prototype,"margin-inline",2),i([_(gi)],t.prototype,"margin-block",2),t}function Un(e){class t extends e{}return i([_(ks)],t.prototype,"padding",2),i([_(ks)],t.prototype,"padding-inline",2),i([_(ks)],t.prototype,"padding-block",2),t}function we(e){class t extends e{}return i([_()],t.prototype,"align-self",2),i([_()],t.prototype,"justify-self",2),i([_()],t.prototype,"place-self",2),i([_()],t.prototype,"grid-column",2),i([_()],t.prototype,"grid-row",2),i([_()],t.prototype,"grid-area",2),i([_()],t.prototype,"flex",2),i([_()],t.prototype,"order",2),t}function Fr(e){class t extends e{}return i([_()],t.prototype,"position",2),i([_()],t.prototype,"transform",2),i([_()],t.prototype,"inset",2),t}const pd=T`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
  :host(:focus-visible) {
    outline-color: color-mix(in srgb, currentcolor, #000 100%);
    outline-offset: var(--gds-sys-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-sys-space-3xs);
  }
`;var gd=pd;let z=class extends _e(si(Ee(Un(we(Fr(R)))))){constructor(){super(...arguments),this.level="2"}render(){return v`<slot></slot>`}};z.styles=[j,gd];i([_()],z.prototype,"display",2);i([d()],z.prototype,"level",2);i([_(ro("content"))],z.prototype,"color",2);i([_(ro("background"))],z.prototype,"background",2);i([_({styleTemplate:function(e,t){const s=this,[o,r=s["border-style"]||"solid",n=s["border-color"]||"subtle-01"]=t,l=`var(--gds-sys-space-${o})`,c=Rr(n,"border",s.level);return`border: ${l} ${r} ${c};`}})],z.prototype,"border",2);i([_(ro("border"))],z.prototype,"border-color",2);i([_(ks)],z.prototype,"border-width",2);i([_()],z.prototype,"border-style",2);i([_(hd)],z.prototype,"border-radius",2);i([_({valueTemplate:e=>`var(--gds-sys-shadow-${e}-01), var(--gds-sys-shadow-${e}-02)`})],z.prototype,"box-shadow",2);i([_()],z.prototype,"opacity",2);i([_()],z.prototype,"overflow",2);i([_()],z.prototype,"box-sizing",2);i([_()],z.prototype,"z-index",2);i([_({styleTemplate:(e,t)=>`font: var(--gds-sys-text-${t[0]});`})],z.prototype,"font",2);i([_({valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],z.prototype,"font-weight",2);i([_()],z.prototype,"text-align",2);i([_()],z.prototype,"text-wrap",2);i([_()],z.prototype,"overflow-wrap",2);i([_()],z.prototype,"white-space",2);i([_({...ks,styleTemplate:(e,t)=>{const s=t[0],o=t[1]||s;return`gap: ${s} ${o};`},cacheOverrideKey:"flex"})],z.prototype,"gap",2);i([_()],z.prototype,"align-items",2);i([_()],z.prototype,"align-content",2);i([_()],z.prototype,"justify-content",2);i([_()],z.prototype,"justify-items",2);i([_()],z.prototype,"flex-direction",2);i([_()],z.prototype,"flex-wrap",2);i([_()],z.prototype,"place-items",2);i([_()],z.prototype,"place-content",2);z=i([$("gds-div")],z);const fd=T`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
`;var yd=fd;let Mt=class extends z{render(){return v`<slot></slot>`}};Mt.styles=[j,yd];Mt=i([$("gds-flex")],Mt);const bd=T`
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
`;var vd=bd,_s,qn,Zn,Xn,Kn;let nt=class extends _e(Ee(we(R))){constructor(){super(...arguments),g(this,_s),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){let e,t;if(this.notification)e="negative-01",t="inversed";else switch(this.variant){case"information":e="information-03",t="information-01";break;case"notice":e="notice-03",t="notice-01";break;case"positive":e="positive-03",t="positive-03";break;case"warning":e="warning-03",t="warning-01";break;case"negative":e="negative-03",t="negative-01";break;case"disabled":e="disabled-03",t="disabled-01";break;default:e="information-03",t="information-01";break}const s=this.size==="small"||this.notification?"2xs":"xs",o=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return v`<gds-flex
      level="3"
      background=${e}
      color=${t}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${s}"
      border-radius="${this.notification||this.rounded?"max":"2xs"}"
      block-size="${o}"
      width="100%"
      font="${this.size==="small"||this.notification?"detail-regular-xs":"detail-regular-s"}"
    >
      ${f(this,_s,qn).call(this)} ${f(this,_s,Zn).call(this)}
      ${f(this,_s,Kn).call(this)}
    </gds-flex>`}};_s=new WeakSet;qn=function(){if(this.size!=="small"||!this.notification)return v`<slot name="lead"></slot>`};Zn=function(){return v`<slot @slotchange=${f(this,_s,Xn)}></slot>`};Xn=function(e){const s=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=s.length>0&&s.some(o=>o.nodeType===Node.ELEMENT_NODE||o.nodeType===Node.TEXT_NODE&&o.textContent?.trim()!=="")};Kn=function(){return v`<slot name="trail"></slot>`};nt.styles=[j,vd];i([d()],nt.prototype,"variant",2);i([d({type:String})],nt.prototype,"size",2);i([d({attribute:"notification",type:Boolean,reflect:!0})],nt.prototype,"notification",2);i([d({attribute:"rounded",type:Boolean,reflect:!0})],nt.prototype,"rounded",2);i([le()],nt.prototype,"mainSlotOccupied",2);nt=i([$("gds-badge",{dependsOn:[Mt]})],nt);nt.define();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const no={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Ls=e=>(...t)=>({_$litDirective$:e,values:t});let ao=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,o){this._$Ct=t,this._$AM=s,this._$Ci=o}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=Ls(class extends ao{constructor(e){if(super(e),e.type!==no.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const s=e.element.classList;for(const o of this.st)o in t||(s.remove(o),this.st.delete(o));for(const o in t){const r=!!t[o];r===this.st.has(o)||this.nt?.has(o)||(r?(s.add(o),this.st.add(o)):(s.remove(o),this.st.delete(o)))}return Qs}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=e=>e??ye;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(e,t,s){return e?t(e):s?.(e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gr=Symbol.for(""),md=e=>{if(e?.r===Gr)return e?._$litStatic$},xd=e=>({_$litStatic$:e,r:Gr}),Ho=(e,...t)=>({_$litStatic$:t.reduce((s,o,r)=>s+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[r+1],e[0]),r:Gr}),xn=new Map,_d=e=>(t,...s)=>{const o=s.length;let r,n;const l=[],c=[];let h,p=0,m=!1;for(;p<o;){for(h=t[p];p<o&&(n=s[p],(r=md(n))!==void 0);)h+=r+t[++p],m=!0;p!==o&&c.push(n),l.push(h),p++}if(p===o&&l.push(t[o]),m){const b=l.join("$$lit$$");(t=xn.get(b))===void 0&&(l.raw=l,xn.set(b,t=l)),s=c}return e(t,...s)},Bs=_d($e),wd=T`
  :host {
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
  }
`;var kd=wd;let eo=class extends R{constructor(){super(...arguments),this.onmousedown=e=>{const s=e.target.getBoundingClientRect(),o=this._rippleEl;o&&(o.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-s.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-s.left}px`),setTimeout(()=>{o.classList.add("gds-ripple-effect")},20))}}render(){return $e`<div></div>`}};eo.styles=[j,kd];i([q("div")],eo.prototype,"_rippleEl",2);eo=i([$("gds-ripple")],eo);var Ir=T`
  .rbcb {
    --_toggle-size: var(--gds-sys-space-m);
    --_toggle-radius: var(--gds-sys-space-2xs);
    --_perimeter-size: var(--gds-sys-space-xl);
    --_toggle-border-width-checked: var(--gds-sys-space-s);

    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-neutral-02),
      var(--gds-sys-color-state-neutral-03)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-neutral-02),
      var(--gds-sys-color-state-neutral-04)
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
      var(--gds-sys-color-l3-neutral-01);
    background-color: var(--gds-sys-color-l1-neutral-01);
    box-sizing: border-box;
    transition-property: box-shadow;
    transition-duration: var(--gds-sys-motion-duration-fastest);
    transition-timing-function: var(--gds-sys-motion-easing-linear);
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
    color: var(--gds-sys-color-content-neutral-03);
  }

  .rbcb__perimeter {
    display: flex;
    box-sizing: border-box;
    backface-visibility: hidden;
    transition-property: background-color, scale, outline-color;
    transition-duration: var(--gds-sys-motion-duration-fastest);
    transition-timing-function: var(--gds-sys-motion-easing-linear);
    outline-style: solid;
    outline-offset: calc(-1 * var(--gds-sys-space-3xs));
    outline-width: 0;
    outline-color: var(--gds-sys-color-content-neutral-01);
    border-radius: calc(var(--_toggle-radius) + 4px);
    min-width: var(--_perimeter-size);
    min-height: var(--_perimeter-size);
    position: absolute;
    left: calc(1 - calc((var(--_perimeter-size) - var(--_toggle-size)) / 2));
    top: calc(1 - calc((var(--_perimeter-size) - var(--_toggle-size)) / 2));
    scale: 0.8;
  }

  /**
   * Modifiers
   */

  .--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-l3-neutral-01);
  }

  .--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-border-interactive);
  }

  .--invalid.--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
      var(--gds-sys-color-border-negative-01);
  }

  .--disabled {
    cursor: default;
  }

  .--disabled .rbcb__toggle {
    box-shadow: none;
    background-color: var(--gds-sys-color-l3-disabled-02);
  }

  .--invalid .rbcb__toggle {
    background-color: var(--gds-sys-color-l3-negative-02);
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
      var(--gds-sys-color-border-negative-01);
  }

  .--invalid.--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
      var(--gds-sys-color-l3-negative-01);
  }

  .--invalid .rbcb__perimeter {
    outline-color: var(--gds-sys-color-border-negative-01);
    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-negative-02),
      var(--gds-sys-color-state-negative-hover)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-negative-02),
      var(--gds-sys-color-l3-states-negative-pressed)
    );
  }

  .--invalid .rbcb__icon {
    color: var(--gds-sys-color-content-negative-01);
  }

  /*
   * When using the checkbox in a listbox, we need to remove the outline
   * from the checkbox since it exsist on the list item
   */
  :host([gds-element='gds-option']) .rbcb__perimeter {
    outline: none;
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
    scale: 0.9;
  }
`,yo,bo,xi;const Sd=class Jn{constructor(){g(this,yo,new Map),g(this,bo,new Map),g(this,xi,!Vr())}static get instance(){return globalThis.__gdsTransitionalStyles?.[ws]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[ws]:new Jn}),globalThis.__gdsTransitionalStyles[ws]}apply(t,s){if(!t.shadowRoot)return;const o=a(this,yo).get(s);o&&(a(this,bo).set(s,t),this.applyToElement(s,o))}applyToElement(t,s){const o=a(this,bo).get(t);if(!o||!o.shadowRoot)return;const r=()=>{o._dynamicStylesController.clearInitial(),o._dynamicStylesController.inject("t-styles",De(s)),o._isUsingTransitionalStyles=!0},n=()=>{o._isUsingTransitionalStyles=!1,o._dynamicStylesController.clear("t-styles"),o._dynamicStylesController.restoreInitial()},l="[gds-element=gds-theme]";let c=o.getRootNode(),h=o.closest(l);for(;h===null&&c!==document;)h=c.host?.closest(l),c=c.host?.getRootNode();if(h){const p=h,m=()=>{p.designVersion==="2023"?n():r()};if(p.addEventListener("gds-design-version-changed",m),o.addEventListener("gds-element-disconnected",()=>p.removeEventListener("gds-design-version-changed",m)),p.designVersion==="2023"){n();return}}r()}register(t,s){let o=s;a(this,xi)&&(o=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${s}`),a(this,yo).set(t,o),this.applyToElement(t,o)}};yo=new WeakMap;bo=new WeakMap;xi=new WeakMap;let be=Sd;function N(e,t){const s={waitUntilFirstUpdate:!1,...t};return(o,r,n)=>{const{update:l}=o,c=Array.isArray(e)?e:[e];o.update=function(h){c.forEach(p=>{const m=p;if(h.has(m)){const b=h.get(m),k=this[m];b!==k&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&n.value?.call(this,b,k)}}),l.call(this,h)}}}function oi(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,o)=>{let r;const n=t.connectedCallback,l=t.disconnectedCallback;t.connectedCallback=function(){n?.call(this);const c=(h,p)=>{o.value?.call(this)};r=new MutationObserver(c),r.observe(this,e)},t.disconnectedCallback=function(){l?.call(this),r.disconnect()}}}function Cd(e){return(t,s,o)=>{if(As)return;const r=window.matchMedia(e),n=t.connectedCallback,l=t.disconnectedCallback;t.connectedCallback=function(){n?.call(this);const c=h=>{o.value?.call(this,h.matches)};r.addEventListener("change",c),this.disconnectedCallback=function(){l?.call(this),r.removeEventListener("change",c)},o.value?.call(this,r.matches)}}}class $d extends ao{constructor(t){if(super(t),t.type!==no.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return ye}update(t,[s]){const o=t.element,r=t.options?.host;Array.from(r.attributes).forEach(n=>{s(n)&&o.setAttribute(n.name.replace("gds-",""),n.value)})}}const Ed=Ls($d),_n=new WeakMap;function Md(e){return(t,...s)=>{let o=_n.get(t);return o||(o=t.map(r=>r.replace(/\n[\s]+</gm,"<")),o.raw=t.raw,_n.set(t,o)),e(o,...s)}}As||function(e){if(typeof e.requestSubmit=="function")return;e.requestSubmit=function(o=null){o?(t(o,this),o.click()):(o=document.createElement("input"),o.type="submit",o.hidden=!0,this.appendChild(o),o.click(),this.removeChild(o))};function t(o,r){o instanceof HTMLElement||s(TypeError,"parameter 1 is not of type 'HTMLElement'"),o.type=="submit"||s(TypeError,"The specified element is not a submit button"),o.form==r||s(DOMException,"The specified element is not owned by this form element","NotFoundError")}function s(o,r,n="Error"){throw new o("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+r+".",n)}}(HTMLFormElement.prototype);var he;class ie extends R{constructor(){super(),g(this,he),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{U(this,he,this.attachInternals())}catch{U(this,he,{form:this.closest("form"),setFormValue:s=>{this._internalValue=s},setValidity:(s,o)=>{a(this,he).validity=s,this.errorMessage=o||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:this.checkValidity.bind(this),reportValidity:this.reportValidity.bind(this)})}}connectedCallback(){if(super.connectedCallback(),typeof this.attachInternals!="function"){const t=this.closest("form");t&&(t.addEventListener("submit",this._handleFormSubmit.bind(this)),t.addEventListener("reset",this.formResetCallback.bind(this)))}}set invalid(t){const s=this.invalid;a(this,he).setValidity({...a(this,he).validity,customError:t,valid:!t},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",s),a(this,he).checkValidity()}get invalid(){return!a(this,he).validity.valid}get value(){return this._internalValue}set value(t){this._internalValue=t,a(this,he).setFormValue(t)}get form(){return a(this,he).form}get validity(){return a(this,he).validity}get validationMessage(){return a(this,he).validationMessage}get willValidate(){return a(this,he).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const s=this.invalid,o=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=o[1]||this.errorMessage,a(this,he).setValidity(o[0],o[1],this._getValidityAnchor()),s!==this.invalid&&(this.requestUpdate("invalid",s),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),a(this,he).checkValidity()}reportValidity(){return a(this,he).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(t){t?.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(t){this.checkValidity(),this.validity.valid||t.preventDefault()}}he=new WeakMap;ie.formAssociated=!0;i([d({attribute:!1})],ie.prototype,"validator",2);i([d({type:Boolean})],ie.prototype,"required",2);i([d({attribute:"error-message"})],ie.prototype,"errorMessage",2);i([d({type:Boolean,reflect:!0})],ie.prototype,"invalid",1);i([d()],ie.prototype,"label",2);i([d()],ie.prototype,"value",1);i([d({reflect:!0})],ie.prototype,"name",2);i([d({type:Boolean,reflect:!0})],ie.prototype,"disabled",2);i([N("value",{waitUntilFirstUpdate:!0})],ie.prototype,"__handleValueChange",1);const Td=T`
  @layer tokens, core, a11y, ranks, sizes, variants, disabled;

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
      background-color: var(--gds-sys-color-l3-neutral-01);
      color: var(--gds-sys-color-content-neutral-03);
      border-radius: var(--gds-sys-radius-max);
      font-family: inherit;
      font: var(--gds-sys-text-detail-book-m);
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
        outline-color: var(--gds-sys-color-content-neutral-01);

        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-neutral-01),
            var(--gds-sys-color-state-neutral-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-01),
          var(--gds-sys-color-state-neutral-02)
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
    background-color: var(--gds-sys-color-l3-disabled-01);
    color: var(--gds-sys-color-content-disabled-01);
  }

  @layer ranks {
    :host([rank*='secondary']) .button {
      background-color: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-neutral-02),
            var(--gds-sys-color-state-neutral-03)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-02),
          var(--gds-sys-color-state-neutral-04)
        );
      }
    }

    :host([rank*='tertiary']) .button {
      background-color: transparent;
      color: var(--gds-sys-color-content-neutral-01);

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-neutral-05)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-06)
        );
      }
    }
  }

  @layer sizes {
    :host([size='xs']) .button {
      --_block-size: var(--gds-sys-space-l);
      font: var(--gds-sys-text-detail-book-s);
      padding-inline: var(--gds-sys-space-m);
    }

    :host([size='small']) .button {
      --_block-size: var(--gds-sys-space-xl);
      font: var(--gds-sys-text-detail-book-s);
      padding-block: var(--gds-sys-space-2xs);
      padding-inline: var(--gds-sys-space-m);
    }

    :host([size='medium']) .button {
      --_block-size: var(--gds-sys-space-2xl);
      font: var(--gds-sys-text-detail-book-m);
    }
  }

  @layer variants {
    .brand {
      background-color: var(--gds-sys-color-l3-brand-01);

      &:focus {
        outline-color: var(--gds-sys-color-content-brand-01);

        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-brand-01),
            var(--gds-sys-color-state-brand-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-brand-01),
          var(--gds-sys-color-state-brand-02)
        );
      }

      &.secondary {
        background-color: var(--gds-sys-color-l3-neutral-02);
        color: var(--gds-sys-color-content-neutral-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-neutral-02),
              var(--gds-sys-color-state-brand-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-neutral-02),
            var(--gds-sys-color-state-brand-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-neutral-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              transparent,
              var(--gds-sys-color-state-brand-05)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-brand-06)
          );
        }
      }
    }

    .positive {
      background-color: var(--gds-sys-color-l3-positive-01);
      color: var(--gds-sys-color-content-inversed);

      &:focus {
        outline-color: var(--gds-sys-color-content-positive-01);

        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-positive-01),
            var(--gds-sys-color-state-positive-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-positive-01),
          var(--gds-sys-color-state-positive-02)
        );
      }

      &.secondary {
        background-color: var(--gds-sys-color-l3-positive-02);
        color: var(--gds-sys-color-content-positive-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-positive-02),
              var(--gds-sys-color-state-positive-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-positive-02),
            var(--gds-sys-color-state-positive-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-positive-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              transparent,
              var(--gds-sys-color-state-positive-05)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-positive-06)
          );
        }
      }
    }

    .negative {
      background-color: var(--gds-sys-color-l3-negative-01);
      color: var(--gds-sys-color-content-inversed);

      &:focus {
        outline-color: var(--gds-sys-color-content-negative-01);
        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-negative-01),
            var(--gds-sys-color-state-negative-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-negative-01),
          var(--gds-sys-color-state-negative-02)
        );
      }

      &.secondary {
        background-color: var(--gds-sys-color-l3-negative-02);
        color: var(--gds-sys-color-content-negative-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-negative-02),
              var(--gds-sys-color-state-negative-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-negative-02),
            var(--gds-sys-color-state-negative-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-negative-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              transparent,
              var(--gds-sys-color-state-negative-05)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-negative-06)
          );
        }
      }
    }

    .notice {
      background-color: var(--gds-sys-color-l3-notice-01);
      color: var(--gds-sys-color-content-inversed);

      &:focus {
        outline-color: var(--gds-sys-color-content-notice-01);
        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-notice-01),
            var(--gds-sys-color-state-notice-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-notice-01),
          var(--gds-sys-color-state-notice-02)
        );
      }

      &.secondary {
        background-color: var(--gds-sys-color-l3-notice-02);
        color: var(--gds-sys-color-content-notice-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-notice-02),
              var(--gds-sys-color-state-notice-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-notice-02),
            var(--gds-sys-color-state-notice-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-notice-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              transparent,
              var(--gds-sys-color-state-notice-05)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-notice-06)
          );
        }
      }
    }

    .warning {
      background-color: var(--gds-sys-color-l3-warning-01);
      color: var(--gds-sys-color-content-neutral-03);

      &:focus {
        outline-color: var(--gds-sys-color-content-warning-01);
        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-warning-01),
            var(--gds-sys-color-state-warning-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-warning-01),
          var(--gds-sys-color-state-warning-02)
        );
      }

      &.secondary {
        background-color: var(--gds-sys-color-l3-warning-02);
        color: var(--gds-sys-color-content-warning-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-warning-02),
              var(--gds-sys-color-state-warning-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-warning-02),
            var(--gds-sys-color-state-warning-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-warning-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              transparent,
              var(--gds-sys-color-state-warning-05)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-warning-06)
          );
        }
      }
    }
  }
`;var Dd=Td,Fs,tt,Ft,Qn,_i,wi;const Ad=["aria-label","aria-haspopup","aria-expanded"],Ld=Md(v);class pe extends ie{constructor(){super(...arguments),g(this,tt),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",g(this,Fs,!1),g(this,_i,()=>{const t=this._mainSlot?.assignedElements()??[];U(this,Fs,t.length===1&&(t[0].tagName.toLowerCase().startsWith("gds-icon")||t[0].getAttribute("name")==="icon")),this.requestUpdate()}),g(this,wi,t=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:t}),this.form&&!a(this,tt,Ft)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),be.instance.apply(this,"gds-button")}focus(t){this._getValidityAnchor()?.focus(t)}render(){const t={button:!0,circle:a(this,Fs),icon:a(this,Fs),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",brand:this.variant==="brand",positive:this.variant==="positive",negative:this.variant==="negative",notice:this.variant==="notice",warning:this.variant==="warning",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},s=a(this,tt,Ft)?Ho`a`:Ho`button`;return Bs`
      <${s}
        class=${me(t)}
        type="${G(a(this,tt,Ft)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||ye}
        href=${G(a(this,tt,Ft)?this.href:void 0)}
        target=${G(a(this,tt,Ft)?this.target:void 0)}
        rel=${G(a(this,tt,Ft)?this.rel||a(this,tt,Qn):void 0)}
        download=${G(a(this,tt,Ft)?this.download:void 0)}
        part="_button"
        @click="${a(this,wi)}"
        ${Ed(o=>o.name.startsWith("gds-aria")||o.name==="gds-role"||Ad.includes(o.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${a(this,_i)}></slot>
        <slot name="trail"></slot>
        ${F(!this._isUsingTransitionalStyles,()=>Ld`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${s}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}}Fs=new WeakMap;tt=new WeakSet;Ft=function(){return this.href.length>0};Qn=function(){return this.target==="_blank"?"noreferrer noopener":void 0};_i=new WeakMap;wi=new WeakMap;pe.styles=[j,Dd];pe.shadowRootOptions={mode:"open",delegatesFocus:!0};i([d({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);i([_({selector:".button"})],pe.prototype,"justify-content",2);i([d({reflect:!0})],pe.prototype,"type",2);i([d({reflect:!0})],pe.prototype,"rank",2);i([d({reflect:!0})],pe.prototype,"variant",2);i([d({reflect:!0})],pe.prototype,"size",2);i([d()],pe.prototype,"label",2);i([d()],pe.prototype,"href",2);i([d()],pe.prototype,"target",2);i([d()],pe.prototype,"rel",2);i([d()],pe.prototype,"download",2);i([q("slot:not([name])")],pe.prototype,"_mainSlot",2);i([q(".button")],pe.prototype,"_button",2);i([oi({attributes:!0,childList:!1,subtree:!1,characterData:!1})],pe.prototype,"_attributeChanged",1);let at=class extends _e(Ee(we(pe))){};at=i([$("gds-button",{dependsOn:[eo]})],at);at.define();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wn="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bd=(e,...t)=>({strTag:!0,strings:e,values:t}),Od=Bd,zd=e=>typeof e!="string"&&"strTag"in e,Vd=(e,t,s)=>{let o=e[0];for(let r=1;r<e.length;r++)o+=t[r-1],o+=e[r];return o};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wd=e=>zd(e)?Vd(e.strings,e.values):e;let A=Wd;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Rd{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(wn,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(wn,this.__litLocalizeEventHandler)}}const Fd=e=>e.addController(new Rd(e)),Gd=Fd;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=()=>(e,t)=>(e.addInitializer(Gd),e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Id{constructor(){this.settled=!1,this.promise=new Promise((t,s)=>{this._resolve=t,this._reject=s})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let e=0;e<256;e++)(e>>4&15).toString(16)+(e&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Hd=new Id;Hd.resolve();function ki(e){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ki(e)}function Jt(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function de(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function ae(e){de(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||ki(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function ns(e,t){de(2,arguments);var s=ae(e),o=Jt(t);return isNaN(o)?new Date(NaN):(o&&s.setDate(s.getDate()+o),s)}function ea(e,t){de(2,arguments);var s=ae(e),o=Jt(t);if(isNaN(o))return new Date(NaN);if(!o)return s;var r=s.getDate(),n=new Date(s.getTime());n.setMonth(s.getMonth()+o+1,0);var l=n.getDate();return r>=l?n:(s.setFullYear(n.getFullYear(),n.getMonth(),r),s)}var Pd={};function Hr(){return Pd}function Cs(e,t){var s,o,r,n,l,c,h,p;de(1,arguments);var m=Hr(),b=Jt((s=(o=(r=(n=t?.weekStartsOn)!==null&&n!==void 0?n:t==null||(l=t.locale)===null||l===void 0||(c=l.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&r!==void 0?r:m.weekStartsOn)!==null&&o!==void 0?o:(h=m.locale)===null||h===void 0||(p=h.options)===null||p===void 0?void 0:p.weekStartsOn)!==null&&s!==void 0?s:0);if(!(b>=0&&b<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var k=ae(e),w=k.getDay(),C=(w<b?7:0)+w-b;return k.setDate(k.getDate()-C),k.setHours(0,0,0,0),k}function kn(e){de(1,arguments);var t=ae(e);return t.setHours(0,0,0,0),t}function Nd(e,t){de(2,arguments);var s=Jt(t),o=s*7;return ns(e,o)}function Gt(e,t){de(2,arguments);var s=kn(e),o=kn(t);return s.getTime()===o.getTime()}function jd(e){de(1,arguments);var t=ae(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(23,59,59,999),t}function Yd(e,t){var s;de(1,arguments);var o=e||{},r=ae(o.start),n=ae(o.end),l=n.getTime();if(!(r.getTime()<=l))throw new RangeError("Invalid interval");var c=[],h=r;h.setHours(0,0,0,0);var p=Number((s=void 0)!==null&&s!==void 0?s:1);if(p<1||isNaN(p))throw new RangeError("`options.step` must be a number greater than 1");for(;h.getTime()<=l;)c.push(ae(h)),h.setDate(h.getDate()+p),h.setHours(0,0,0,0);return c}function Ud(e,t){de(1,arguments);var s=e||{},o=ae(s.start),r=ae(s.end),n=r.getTime();if(!(o.getTime()<=n))throw new RangeError("Invalid interval");var l=Cs(o,t),c=Cs(r,t);l.setHours(15),c.setHours(15),n=c.getTime();for(var h=[],p=l;p.getTime()<=n;)p.setHours(0),h.push(ae(p)),p=Nd(p,1),p.setHours(15);return h}function qd(e){de(1,arguments);var t=ae(e);return t.setDate(1),t.setHours(0,0,0,0),t}function Zd(e,t){var s,o,r,n,l,c;de(1,arguments);var h=ae(e),p=h.getFullYear(),m=Hr(),b=Jt((s=(o=(r=(n=void 0)!==null&&n!==void 0?n:void 0)!==null&&r!==void 0?r:m.firstWeekContainsDate)!==null&&o!==void 0?o:(l=m.locale)===null||l===void 0||(c=l.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var k=new Date(0);k.setFullYear(p+1,0,b),k.setHours(0,0,0,0);var w=Cs(k,t),C=new Date(0);C.setFullYear(p,0,b),C.setHours(0,0,0,0);var D=Cs(C,t);return h.getTime()>=w.getTime()?p+1:h.getTime()>=D.getTime()?p:p-1}function Xd(e,t){var s,o,r,n,l,c;de(1,arguments);var h=Hr(),p=Jt((s=(o=(r=(n=void 0)!==null&&n!==void 0?n:void 0)!==null&&r!==void 0?r:h.firstWeekContainsDate)!==null&&o!==void 0?o:(l=h.locale)===null||l===void 0||(c=l.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&s!==void 0?s:1),m=Zd(e,t),b=new Date(0);b.setFullYear(m,0,p),b.setHours(0,0,0,0);var k=Cs(b,t);return k}var Kd=6048e5;function Jd(e,t){de(1,arguments);var s=ae(e),o=Cs(s,t).getTime()-Xd(s,t).getTime();return Math.round(o/Kd)+1}function Qd(e){de(1,arguments);var t=ae(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(0,0,0,0),t}function ec(e,t){de(2,arguments);var s=ae(e),o=ae(t);return s.getFullYear()===o.getFullYear()&&s.getMonth()===o.getMonth()}function tc(e,t){de(2,arguments);var s=ae(e),o=Jt(t);return s.setHours(o),s}function sc(e,t){de(2,arguments);var s=Jt(t);return ea(e,-s)}const oc=T`
  @layer base, reset;

  @layer base {
    .controls {
      padding-bottom: 0.25rem;
      margin: 0.5rem 1rem -0.5rem 1rem;
    }

    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-sys-space-xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;

      &.indicators {
        border-spacing: var(--gds-sys-space-xs) var(--gds-sys-space-l);
      }

      &.small {
        border-spacing: var(--gds-sys-space-2xs);

        thead th {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
        }

        tbody tr .week-number {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
          font: var(--gds-sys-text-body-book-s);
          line-height: var(--gds-sys-text-line-height-detail-s);
        }

        &.indicators {
          border-spacing: var(--gds-sys-space-xs) var(--gds-sys-space-l);
        }
      }
    }

    thead {
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
        width: var(--gds-sys-space-2xl);
        height: var(--gds-sys-space-2xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-sys-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-sys-radius-max);
        transition: background 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-sys-space-3xs);
        //--_background: transparent;

        &.short {
          width: var(--gds-sys-space-4xl);
        }

        &.wide {
          width: var(--gds-sys-space-5xl);
        }

        &.long {
          width: var(--gds-sys-space-7xl);
        }

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          cursor: pointer;
        }

        &[aria-selected='true'] {
          background: var(--gds-sys-color-l3-neutral-01);
          color: var(--gds-sys-color-content-neutral-03);
        }

        &:not(.disabled):hover {
          background: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-neutral-05)
          );
        }

        &[aria-selected='true']:not(.disabled):hover {
          background: color-mix(
            in srgb,
            var(--gds-sys-color-l3-neutral-01),
            var(--gds-sys-color-state-neutral-01)
          );
        }

        &.today {
          border-color: var(--gds-sys-color-border-strong);
        }

        &.disabled:not(.week-number) {
          background: var(--gds-sys-color-l3-disabled-01);
          color: var(--gds-sys-color-content-disabled-01);
          cursor: not-allowed;
        }

        &.disabled.week-number {
          color: var(--gds-sys-color-content-neutral-02);
          cursor: default;
        }

        &[aria-selected='false']:active:not(.disabled) {
          background: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-neutral-06)
          );
        }

        &[aria-selected='true']:active:not(.disabled) {
          background: color-mix(
            in srgb,
            var(--gds-sys-color-l3-neutral-01),
            var(--gds-sys-color-state-neutral-02)
          );
        }

        &:focus-visible {
          outline-color: var(--gds-sys-color-content-neutral-01);
          outline-width: var(--gds-sys-space-3xs);
          outline-offset: 3.75px;
        }

        &.small {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
          font: var(--gds-sys-text-body-book-s);
          line-height: var(--gds-sys-text-line-height-detail-s);

          &.short {
            width: var(--gds-sys-space-2xl);
          }

          &.wide {
            width: var(--gds-sys-space-3xl);
          }

          &.long {
            width: var(--gds-sys-space-6xl);
          }
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-xs);
        height: var(--gds-sys-space-xs);
        border-radius: var(--gds-sys-radius-max);
        background: var(--gds-sys-color-l3-neutral-01);
        inset: calc(100% + var(--gds-sys-space-xs))
          calc(50% - var(--gds-sys-space-xs) / 2) auto auto;
      }
    }
  }
`;var ic=oc;function rc(e,t){const s=qd(e),o=jd(e),r=Ud({start:s,end:o},{weekStartsOn:1});for(;r.length<6;)r.push(ns(r[r.length-1],7));return $e`${t(r.map(n=>({days:Yd({start:n,end:ns(n,6)})})))}`}var Zs,Pr,ta;let Q=class extends R{constructor(){super(...arguments),g(this,Zs),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=e=>e.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=Qd(new Date(this.focusedYear,e,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),s.setMonth(e),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){return this.shadowRoot?.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),be.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",f(this,Zs,ta)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){super.focus(),this._elFocusedCell?.focus()}render(){const e=new Date;return $e`<table
      role="grid"
      aria-label="${G(this.label)}"
      class="${me({small:this.size==="small",indicators:!!this.customizedDates})}"
    >
      ${F(!this.hideDayNames,()=>$e`<thead role="rowgroup">
            <tr role="row">
              ${F(this.showWeekNumbers,()=>$e`<th></th>`)}
              <th>${A("Mon").substring(0,1)}</th>
              <th>${A("Tue").substring(0,1)}</th>
              <th>${A("Wed").substring(0,1)}</th>
              <th>${A("Thu").substring(0,1)}</th>
              <th>${A("Fri").substring(0,1)}</th>
              <th>${A("Sat").substring(0,1)}</th>
              <th>${A("Sun").substring(0,1)}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${rc(this.focusedDate,t=>$e`
            ${t.map(s=>$e`
                <tr role="row">
                  ${F(this.showWeekNumbers,()=>$e`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${Jd(s.days[0])}
                      </td>`)}
                  ${s.days.map(o=>{const r=this.customizedDates&&this.customizedDates.find(b=>Gt(b.date,o)),n={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(b=>Gt(b,o))),...r},l=!ec(this.focusedDate,o),c=(o<this.min||o>this.max)&&!Gt(o,this.min)&&!Gt(o,this.max),h=o.getDay()===0||o.getDay()===6,p=n.disabled||l||c||this.disabledWeekends&&h;return this.hideExtraneousDays&&l?$e`<td inert></td>`:$e`
                          <td
                            role="${G(p?void 0:"gridcell")}"
                            class="${me({small:this.size==="small","custom-date":!!r,disabled:!!p,today:Gt(e,o)})}"
                            ?disabled=${p}
                            tabindex="${Gt(this.focusedDate,o)?0:-1}"
                            aria-selected="${this.value&&Gt(this.value,o)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(o)}"
                            @click=${()=>p?null:f(this,Zs,Pr).call(this,o)}
                            id="dateCell-${o.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${n?n?.color:""}"
                              >${o.getDate()}</span
                            >

                            ${F(n.indicator,()=>$e`<span
                                  class="indicator-${n?.indicator}"
                                  style="--_color: ${n?.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};Zs=new WeakSet;Pr=function(e){const t=tc(e,12);this.value=t,this.dispatchCustomEvent("change",{detail:t,bubbles:!1,composed:!1})};ta=function(e){let t=!1,s=new Date(this.focusedDate);e.key==="ArrowLeft"?(s=ns(this.focusedDate,-1),t=!0):e.key==="ArrowRight"?(s=ns(this.focusedDate,1),t=!0):e.key==="ArrowUp"?(s=ns(this.focusedDate,-7),t=!0):e.key==="ArrowDown"?(s=ns(this.focusedDate,7),t=!0):e.key==="Enter"||e.key===" "?(this._elFocusedCell?.hasAttribute("disabled")||f(this,Zs,Pr).call(this,this.focusedDate),t=!0):e.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):e.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):e.key==="PageUp"?(s=sc(this.focusedDate,1),t=!0):e.key==="PageDown"&&(s=ea(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus()}))};Q.styles=[j,ic];Q.shadowRootOptions={mode:"open",delegatesFocus:!0};i([d()],Q.prototype,"value",2);i([d({type:Date})],Q.prototype,"min",2);i([d({type:Date})],Q.prototype,"max",2);i([d()],Q.prototype,"focusedDate",2);i([d({type:Boolean,attribute:"disabled-weekends"})],Q.prototype,"disabledWeekends",2);i([d({type:Array,attribute:"disabled-dates"})],Q.prototype,"disabledDates",2);i([d({type:Number})],Q.prototype,"focusedMonth",1);i([d({type:Number})],Q.prototype,"focusedYear",1);i([d({reflect:!0})],Q.prototype,"size",2);i([d({type:Boolean})],Q.prototype,"showWeekNumbers",2);i([d({type:Boolean})],Q.prototype,"hideExtraneousDays",2);i([d({type:Boolean})],Q.prototype,"hideDayNames",2);i([d({attribute:!1})],Q.prototype,"customizedDates",2);i([d()],Q.prototype,"label",2);i([d({attribute:!1})],Q.prototype,"dateLabelTemplate",2);i([le()],Q.prototype,"_currentLocale",2);i([q('td[tabindex="0"]')],Q.prototype,"_elFocusedCell",2);i([N("value")],Q.prototype,"_valueChanged",1);Q=i([$("gds-calendar"),Me()],Q);let cs=class extends z{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return v`<slot></slot>`}};cs.styles=[j,T`
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
    `];i([_({styleTemplate:function(e,t){let s,o,r;switch(t[0]){case"primary":s="transparent",o=`var(--gds-sys-color-l${this.level}-neutral-01)`,r="var(--gds-sys-color-content-neutral-01)";break;case"secondary":s="var(--gds-sys-color-border-subtle-01)",o=`var(--gds-sys-color-l${this.level}-neutral-02)`,r="var(--gds-sys-color-content-neutral-01)";break;case"brand-01":s="transparent",o=`var(--gds-sys-color-l${this.level}-brand-01)`,r="var(--gds-sys-color-content-inversed)";break;case"brand-02":s="transparent",o=`var(--gds-sys-color-l${this.level}-brand-02)`,r="var(--gds-sys-color-content-brand-02)";break;case"positive":case"negative":case"warning":case"information":case"notice":s=`var(--gds-sys-color-border-${t[0]}-02)`,o=`var(--gds-sys-color-l${this.level}-${t[0]}-01)`,r=`var(--gds-sys-color-content-${t[0]}-01)`;break;default:s="transparent",o=`var(--gds-sys-color-l${this.level}-neutral-01)`,r="var(--gds-sys-color-content-neutral-01)";break}return`
      --_border-color: ${s};
      --_background-color: ${o};
      --_color: ${r};
      `}})],cs.prototype,"variant",2);cs=i([$("gds-card")],cs);cs.define();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Si=class extends ao{constructor(t){if(super(t),this.it=ye,t.type!==no.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ye||t==null)return this._t=void 0,this.it=t;if(t===Qs)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};Si.directiveName="unsafeHTML",Si.resultType=1;const sa=Ls(Si),nc=T`
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
`;var ac=nc;class se extends Ee(we(R)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const s={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...s,"aria-label":this.label}:{...s,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([s,o])=>o!==void 0).map(([s,o])=>`${s}="${o}"`).join(`
      `)}render(){const t=this.svgAttributes;let s=this.svgContent||"";this.stroke&&(s=this.applyStroke(s));const o=`
      <svg ${this.generateAttributesString(t)}>
        ${s}
      </svg>
    `;return $e`${sa(o)}`}}se.styles=[j,ac];i([_({...Te,property:"height",selector:"svg"})],se.prototype,"size",2);i([d({type:Boolean})],se.prototype,"solid",2);i([d({type:Number})],se.prototype,"stroke",2);i([d()],se.prototype,"level",2);i([_(ro("content"))],se.prototype,"color",2);i([d({type:String})],se.prototype,"label",2);se.define();let Tt=class extends se{};Tt._regularSVG='<path d="M12 2.75L12.6457 2.36845C12.5108 2.1401 12.2652 2 12 2C11.7348 2 11.4892 2.1401 11.3543 2.36845L12 2.75ZM2.25 19.25L1.60431 18.8685C1.4673 19.1003 1.46512 19.3878 1.59859 19.6217C1.73207 19.8556 1.9807 20 2.25 20V19.25ZM21.75 19.25V20C22.0193 20 22.2679 19.8556 22.4014 19.6217C22.5349 19.3878 22.5327 19.1003 22.3957 18.8685L21.75 19.25ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75H11.25ZM12.75 15.74C12.75 15.3258 12.4142 14.99 12 14.99C11.5858 14.99 11.25 15.3258 11.25 15.74H12.75ZM12 2.75L11.3543 2.36845L1.60431 18.8685L2.25 19.25L2.89569 19.6315L12.6457 3.13155L12 2.75ZM2.25 19.25V20H21.75V19.25V18.5H2.25V19.25ZM21.75 19.25L22.3957 18.8685L12.6457 2.36845L12 2.75L11.3543 3.13155L21.1043 19.6315L21.75 19.25ZM12 9.75H11.25V13.25H12H12.75V9.75H12ZM12.25 15.75H11.5C11.5 15.4739 11.7239 15.25 12 15.25V16V16.75C12.5523 16.75 13 16.3023 13 15.75H12.25ZM12 16V15.25C12.2761 15.25 12.5 15.4739 12.5 15.75H11.75H11C11 16.3023 11.4477 16.75 12 16.75V16ZM11.75 15.75H12.5C12.5 16.0261 12.2761 16.25 12 16.25V15.5V14.75C11.4477 14.75 11 15.1977 11 15.75H11.75ZM12 15.5V16.25C11.7239 16.25 11.5 16.0261 11.5 15.75H12.25H13C13 15.1977 12.5523 14.75 12 14.75V15.5ZM12 15.75H12.75V15.74H12H11.25V15.75H12Z" fill="currentColor"/>';Tt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5108 2.1401 12.6457 2.36845L22.3957 18.8685C22.5327 19.1003 22.5349 19.3878 22.4014 19.6217C22.2679 19.8556 22.0193 20 21.75 20H2.25C1.9807 20 1.73207 19.8556 1.59859 19.6217C1.46512 19.3878 1.4673 19.1003 1.60431 18.8685L11.3543 2.36845C11.4892 2.1401 11.7348 2 12 2ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z" fill="currentColor"/>';Tt._name="triangle-exclamation";Tt._width=24;Tt._height=24;Tt._viewBox="0 0 24 24";Tt=i([$("gds-icon-triangle-exclamation")],Tt);const lc=T`
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
      font: var(--gds-sys-text-detail-regular-s);
      color: var(--gds-sys-color-content-negative-01);
    }

    [gds-element^='gds-icon'] {
      width: 18px;
      height: 18px;
    }

    :host(.size-small) {
      & .error-message {
        font: var(--gds-sys-text-detail-xs);
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
`;var dc=lc,Ci,oa;let je=class extends R{constructor(){super(...arguments),g(this,Ci)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter)}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return v`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${F(this.errorMessage,()=>v`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${F(Number.isInteger(this.charCounter),()=>f(this,Ci,oa).call(this,this.charCounter))}
      </div>
    </div>`}};Ci=new WeakSet;oa=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",v`<gds-badge variant="${t}">${e}</gds-badge>`};je.styles=[dc];i([d({type:Number})],je.prototype,"charCounter",2);i([d()],je.prototype,"errorMessage",2);i([N("charCounter"),N("errorMessage")],je.prototype,"_handleVisibilityChange",1);je=i([$("gds-form-control-footer",{dependsOn:[nt,Tt]})],je);let Dt=class extends se{};Dt._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7.375C12.3452 7.375 12.625 7.65482 12.625 8C12.625 8.34518 12.3452 8.625 12 8.625C11.6548 8.625 11.375 8.34518 11.375 8C11.375 7.65482 11.6548 7.375 12 7.375Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>';Dt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>';Dt._name="circle-info";Dt._width=24;Dt._height=24;Dt._viewBox="0 0 24 24";Dt=i([$("gds-icon-circle-info")],Dt);const cc=T`
  @layer base, reset, transitional-styles;
  @layer base {
    #label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--gds-sys-color-content-neutral-01);
    }

    #label-row > div {
      display: flex;
      flex-direction: column;
    }

    slot[name='label']::slotted(*) {
      font: var(--gds-sys-text-detail-book-m);
    }
    slot[name='supporting-text']::slotted(*) {
      font: var(--gds-sys-text-detail-regular-s);
    }

    :host(.size-small) slot[name='supporting-text'],
    :host(.size-small) ::slotted(label) {
      font: var(--gds-sys-text-detail-s);
    }

    #extended-supporting-text {
      opacity: 1;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: all;
      font: var(--gds-sys-text-detail-regular-s);
      border-radius: var(--gds-sys-space-xs);
      background-color: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);
      max-height: var(--_max-height);
    }

    #extended-supporting-text[aria-hidden='false'] {
      margin: var(--gds-sys-space-2xs) 0 0 0;
      padding: var(--gds-sys-space-s) var(--gds-sys-space-m);
    }

    #extended-supporting-text[aria-hidden='true'] {
      max-height: 0;
      opacity: 0;
      translate: 0 2px;
      padding: 0 var(--gds-sys-space-m);
      margin: 0;
      overflow: hidden;
    }
  }
`;var hc=cc,Po,ia,$i,Ei,vo,ra;let Ye=class extends R{constructor(){super(...arguments),g(this,Po),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,g(this,$i,()=>v`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${A("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${a(this,Ei)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),g(this,Ei,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this._extendedSupportingText?.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText})}),g(this,vo,()=>{this.showExtendedSupportingText&&this._extendedSupportingText?.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`)})}render(){return v`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${F(this._hasExtendedSupportingText,a(this,$i))}
      </div>

      ${f(this,Po,ra).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",a(this,vo))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",a(this,vo))}};Po=new WeakSet;ia=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};$i=new WeakMap;Ei=new WeakMap;vo=new WeakMap;ra=function(){return v`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${f(this,Po,ia)}
        ></slot>
      </div>
    `};Ye.styles=[hc];i([d({type:Boolean,reflect:!0})],Ye.prototype,"showExtendedSupportingText",2);i([le()],Ye.prototype,"_hasExtendedSupportingText",2);i([q("#extended-supporting-text")],Ye.prototype,"_extendedSupportingText",2);Ye=i([$("gds-form-control-header",{dependsOn:[at,cs,Dt]}),Me()],Ye);const uc=T`
  :host {
    /* Font Sizes */
    --_font-label: var(--gds-sys-text-detail-book-m);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-s);
    font: var(--_font-label);

    /* Color */
    --_checkbox-label-color: var(--gds-sys-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --_checkbox-label-color: var(--gds-sys-color-content-negative-01);
  }

  :host([size='small']) {
    --_font-label: var(--gds-sys-text-detail-book-s);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-s);
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
`;var mo,it,na,aa,la,da,Nr,ca,ha;let Le=class extends ie{constructor(){super(...arguments),g(this,it),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,g(this,mo,()=>{this.checkboxes.forEach(e=>{e.invalid=this.invalid})})}get value(){return this._internalValue||[]}set value(e){this._internalValue=e}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this._elCheckboxGroup}_handleValueChange(){this.checkboxes.forEach(e=>{e.checked=this.value.includes(e.value)||!1})}_handleGroupInvalidChange(){a(this,mo).call(this)}focus(){this.checkboxes[0]?.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",a(this,mo))}render(){const e={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return v`<div
      role="group"
      id="checkboxgroup"
      class=${me(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${f(this,it,na).call(this)}
    </div>`}_syncOnDOMChange(){f(this,it,Nr).call(this)}};mo=new WeakMap;it=new WeakSet;na=function(){return[f(this,it,aa).call(this),f(this,it,la).call(this),f(this,it,ha).call(this)].map(t=>v`${t}`)};aa=function(){if(this.label)return v`<gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};la=function(){return v`<div class="content">
      <slot @input=${f(this,it,da)}></slot>
    </div>`};da=function(e){e&&e.stopPropagation(),f(this,it,Nr).call(this),f(this,it,ca).call(this)};Nr=function(){const e=this.checkboxes.filter(t=>t.checked).map(t=>t.value);JSON.stringify(e)!==JSON.stringify(this.value)&&(this.value=e)};ca=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};ha=function(){return v`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};Le.styles=[uc];i([d()],Le.prototype,"size",2);i([d()],Le.prototype,"direction",2);i([d({attribute:"supporting-text"})],Le.prototype,"supportingText",2);i([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],Le.prototype,"showExtendedSupportingText",2);i([d({type:Array})],Le.prototype,"value",1);i([q("#checkboxgroup")],Le.prototype,"_elCheckboxGroup",2);i([N("value",{waitUntilFirstUpdate:!0})],Le.prototype,"_handleValueChange",1);i([N("invalid")],Le.prototype,"_handleGroupInvalidChange",1);i([oi({attributes:!0,childList:!0,subtree:!0,characterData:!0})],Le.prototype,"_syncOnDOMChange",1);Le=i([Me()],Le);let Mi=class extends we(Ee(_e(Le))){};Mi=i([$("gds-checkbox-group",{dependsOn:[Ye,je]})],Mi);Mi.define();const pc=T`
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
      font: var(--gds-sys-text-detail-book-m);
      cursor: inherit;
    }

    slot[name='supporting-text']::slotted(*) {
      font: var(--_font-supporting-text);
      font-weight: var(--gds-sys-text-weight-regular);
    }
  }
`;var gc=pc;let hs=class extends R{constructor(){super(),this.label="",this.supportingText=""}render(){const e={label:!0,"has-supporting-text":!!this.supportingText};return v`
      <div class="container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${me(e)}">
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
      </div>
    `}};hs.styles=[j,gc];i([d()],hs.prototype,"label",2);i([d({attribute:"supporting-text"})],hs.prototype,"supportingText",2);hs=i([$("gds-toggle-control-base"),Me()],hs);const ua=e=>pa({...e,type:"checkbox"}),fc=e=>pa({...e,type:"radio"}),pa=e=>{const{type:t,checked:s,indeterminate:o,disabled:r,invalid:n}=e;return v`
    <div class="rbcb ${me({"rbcb--checkbox":t==="checkbox","rbcb--radio":t==="radio","--checked":s,"--indeterminate":o,"--disabled":r,"--invalid":n})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${F(t==="checkbox",()=>v`
            ${F(o,()=>v`<gds-icon-minus-small
                  class="rbcb__icon"
                  stroke="4"
                ></gds-icon-minus-small>`,()=>F(s,()=>v`<gds-icon-checkmark
                      class="rbcb__icon"
                      stroke="4"
                    ></gds-icon-checkmark>`))}
          `)}
      </div>
    </div>
  `};let Ve=class extends se{};Ve._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Ve._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7425 2.99442C22.2979 3.40452 22.4156 4.18717 22.0055 4.74251L10.0055 20.9925C9.80427 21.2651 9.501 21.4442 9.16518 21.489C8.82936 21.5338 8.48974 21.4403 8.22411 21.23L2.22411 16.48C1.68284 16.0515 1.59143 15.2654 2.01993 14.7241C2.44844 14.1828 3.2346 14.0914 3.77587 14.5199L8.76235 18.4675L19.9944 3.2574C20.4045 2.70206 21.1872 2.58432 21.7425 2.99442Z" fill="currentColor"/>';Ve._name="checkmark";Ve._width=24;Ve._height=24;Ve._viewBox="0 0 24 24";Ve=i([$("gds-icon-checkmark")],Ve);const ga=e=>{class t extends e{constructor(){super(...arguments),this.onblur=o=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:o.relatedTarget}))},this.onfocus=o=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:o.relatedTarget}))}}focus(o){this.setAttribute("tabindex","0"),super.focus(o)}}return t},yc=T`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-border-subtle-01);
    }

    :host .item {
      display: flex;
      align-items: center;
      user-select: none;
      padding-inline: var(--gds-sys-space-m);
      padding-block: var(--gds-sys-space-s);
      cursor: pointer;
      font: var(--gds-sys-text-detail-regular-m);
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
      background-color: var(--gds-sys-color-l3-neutral-01);
      color: var(--gds-sys-color-content-inversed);
    }

    :host(:hover:not([highlighted])) .item {
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-sys-color-state-neutral-05)
      );
    }

    :host(:focus-visible) {
      outline: none;
    }

    :host(:focus-visible) div::before {
      inset: var(--gds-sys-space-2xs);
      opacity: 1;
      visivility: visible;
    }

    :host([inert]) {
      display: none;
    }
  }
`;var fa=yc,Gs,xo,Ti;let lt=class extends ga(R){constructor(){super(),g(this,xo),g(this,Gs,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",f(this,xo,Ti)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),f(this,xo,Ti).call(this,e))})}get hidden(){return a(this,Gs)}set hidden(e){const t=e.toString();U(this,Gs,t==="true"),a(this,Gs)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),be.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){const e=this.parentElement?.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),v`<div class="item">
      ${F(e,()=>ua({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};Gs=new WeakMap;xo=new WeakSet;Ti=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};lt.styles=[j,Ir,fa];i([d()],lt.prototype,"value",2);i([d({type:Boolean,reflect:!0})],lt.prototype,"hidden",1);i([d({attribute:"aria-selected",reflect:!0})],lt.prototype,"selected",2);i([d({type:Boolean,reflect:!0})],lt.prototype,"isPlaceholder",2);i([N("isPlaceholder")],lt.prototype,"_handlePlaceholderStatusChange",1);lt=i([$("gds-option",{dependsOn:[Ve]})],lt);const bc=T`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-sys-color-content-neutral-02);
      background-color: var(--gds-sys-color-l2-neutral-01);
      border-bottom: 1px solid var(--gds-sys-color-border-subtle-01);
      font: var(--gds-sys-text-detail-book-s);
      padding-inline: var(--gds-sys-space-s);
      padding-block: var(--gds-sys-space-xs);
    }
  }
`;var vc=bc;let No=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>be.instance.apply(this,"gds-menu-heading"))}render(){return $e`<slot></slot>`}};No.styles=vc;No=i([$("gds-menu-heading")],No);var Di;let $s=class extends ga(R){constructor(){super(...arguments),g(this,Di,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",a(this,Di)),be.instance.apply(this,"gds-option")}render(){return v`<div class="item"><slot></slot></div>`}};Di=new WeakMap;$s.styles=[fa];$s=i([$("gds-menu-item")],$s);let dt=class extends se{};dt._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';dt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>';dt._name="chevron-left";dt._width=24;dt._height=24;dt._viewBox="0 0 24 24";dt=i([$("gds-icon-chevron-left")],dt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:mc}=jl,xc=e=>e===null||typeof e!="object"&&typeof e!="function",_c=e=>e.strings===void 0,Sn=()=>document.createComment(""),Ws=(e,t,s)=>{const o=e._$AA.parentNode,r=t===void 0?e._$AB:t._$AA;if(s===void 0){const n=o.insertBefore(Sn(),r),l=o.insertBefore(Sn(),r);s=new mc(n,l,e,e.options)}else{const n=s._$AB.nextSibling,l=s._$AM,c=l!==e;if(c){let h;s._$AQ?.(e),s._$AM=e,s._$AP!==void 0&&(h=e._$AU)!==l._$AU&&s._$AP(h)}if(n!==r||c){let h=s._$AA;for(;h!==n;){const p=h.nextSibling;o.insertBefore(h,r),h=p}}}return s},ts=(e,t,s=e)=>(e._$AI(t,s),e),wc={},kc=(e,t=wc)=>e._$AH=t,Sc=e=>e._$AH,fi=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xs=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const o of s)o._$AO?.(t,!1),Xs(o,t);return!0},jo=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},ya=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Ec(t)}};function Cc(e){this._$AN!==void 0?(jo(this),this._$AM=e,ya(this)):this._$AM=e}function $c(e,t=!1,s=0){const o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(o))for(let n=s;n<o.length;n++)Xs(o[n],!1),jo(o[n]);else o!=null&&(Xs(o,!1),jo(o));else Xs(this,e)}const Ec=e=>{e.type==no.CHILD&&(e._$AP??=$c,e._$AQ??=Cc)};class ba extends ao{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,o){super._$AT(t,s,o),ya(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(Xs(this,t),jo(this))}setValue(t){if(_c(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const va=()=>new Mc;let Mc=class{};const yi=new WeakMap,ma=Ls(class extends ba{render(e){return ye}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),ye}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=yi.get(t);s===void 0&&(s=new WeakMap,yi.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?yi.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Tc=["top","right","bottom","left"],Es=Math.min,ls=Math.max,Yo=Math.round,po=Math.floor,rt=e=>({x:e,y:e}),Dc={left:"right",right:"left",bottom:"top",top:"bottom"},Ac={start:"end",end:"start"};function Ai(e,t,s){return ls(e,Es(t,s))}function Os(e,t){return typeof e=="function"?e(t):e}function us(e){return e.split("-")[0]}function lo(e){return e.split("-")[1]}function xa(e){return e==="x"?"y":"x"}function jr(e){return e==="y"?"height":"width"}const Lc=new Set(["top","bottom"]);function Yt(e){return Lc.has(us(e))?"y":"x"}function Yr(e){return xa(Yt(e))}function Bc(e,t,s){s===void 0&&(s=!1);const o=lo(e),r=Yr(e),n=jr(r);let l=r==="x"?o===(s?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(l=Uo(l)),[l,Uo(l)]}function Oc(e){const t=Uo(e);return[Li(e),t,Li(t)]}function Li(e){return e.replace(/start|end/g,t=>Ac[t])}const Cn=["left","right"],$n=["right","left"],zc=["top","bottom"],Vc=["bottom","top"];function Wc(e,t,s){switch(e){case"top":case"bottom":return s?t?$n:Cn:t?Cn:$n;case"left":case"right":return t?zc:Vc;default:return[]}}function Rc(e,t,s,o){const r=lo(e);let n=Wc(us(e),s==="start",o);return r&&(n=n.map(l=>l+"-"+r),t&&(n=n.concat(n.map(Li)))),n}function Uo(e){return e.replace(/left|right|bottom|top/g,t=>Dc[t])}function Fc(e){return{top:0,right:0,bottom:0,left:0,...e}}function _a(e){return typeof e!="number"?Fc(e):{top:e,right:e,bottom:e,left:e}}function qo(e){const{x:t,y:s,width:o,height:r}=e;return{width:o,height:r,top:s,left:t,right:t+o,bottom:s+r,x:t,y:s}}function En(e,t,s){let{reference:o,floating:r}=e;const n=Yt(t),l=Yr(t),c=jr(l),h=us(t),p=n==="y",m=o.x+o.width/2-r.width/2,b=o.y+o.height/2-r.height/2,k=o[c]/2-r[c]/2;let w;switch(h){case"top":w={x:m,y:o.y-r.height};break;case"bottom":w={x:m,y:o.y+o.height};break;case"right":w={x:o.x+o.width,y:b};break;case"left":w={x:o.x-r.width,y:b};break;default:w={x:o.x,y:o.y}}switch(lo(t)){case"start":w[l]-=k*(s&&p?-1:1);break;case"end":w[l]+=k*(s&&p?-1:1);break}return w}const Gc=async(e,t,s)=>{const{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:l}=s,c=n.filter(Boolean),h=await(l.isRTL==null?void 0:l.isRTL(t));let p=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:m,y:b}=En(p,o,h),k=o,w={},C=0;for(let D=0;D<c.length;D++){const{name:B,fn:W}=c[D],{x:Y,y:J,data:re,reset:te}=await W({x:m,y:b,initialPlacement:o,placement:k,strategy:r,middlewareData:w,rects:p,platform:l,elements:{reference:e,floating:t}});m=Y??m,b=J??b,w={...w,[B]:{...w[B],...re}},te&&C<=50&&(C++,typeof te=="object"&&(te.placement&&(k=te.placement),te.rects&&(p=te.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):te.rects),{x:m,y:b}=En(p,k,h)),D=-1)}return{x:m,y:b,placement:k,strategy:r,middlewareData:w}};async function to(e,t){var s;t===void 0&&(t={});const{x:o,y:r,platform:n,rects:l,elements:c,strategy:h}=e,{boundary:p="clippingAncestors",rootBoundary:m="viewport",elementContext:b="floating",altBoundary:k=!1,padding:w=0}=Os(t,e),C=_a(w),B=c[k?b==="floating"?"reference":"floating":b],W=qo(await n.getClippingRect({element:(s=await(n.isElement==null?void 0:n.isElement(B)))==null||s?B:B.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(c.floating)),boundary:p,rootBoundary:m,strategy:h})),Y=b==="floating"?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,J=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c.floating)),re=await(n.isElement==null?void 0:n.isElement(J))?await(n.getScale==null?void 0:n.getScale(J))||{x:1,y:1}:{x:1,y:1},te=qo(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:Y,offsetParent:J,strategy:h}):Y);return{top:(W.top-te.top+C.top)/re.y,bottom:(te.bottom-W.bottom+C.bottom)/re.y,left:(W.left-te.left+C.left)/re.x,right:(te.right-W.right+C.right)/re.x}}const Ic=e=>({name:"arrow",options:e,async fn(t){const{x:s,y:o,placement:r,rects:n,platform:l,elements:c,middlewareData:h}=t,{element:p,padding:m=0}=Os(e,t)||{};if(p==null)return{};const b=_a(m),k={x:s,y:o},w=Yr(r),C=jr(w),D=await l.getDimensions(p),B=w==="y",W=B?"top":"left",Y=B?"bottom":"right",J=B?"clientHeight":"clientWidth",re=n.reference[C]+n.reference[w]-k[w]-n.floating[C],te=k[w]-n.reference[w],Ge=await(l.getOffsetParent==null?void 0:l.getOffsetParent(p));let ke=Ge?Ge[J]:0;(!ke||!await(l.isElement==null?void 0:l.isElement(Ge)))&&(ke=c.floating[J]||n.floating[C]);const Qt=re/2-te/2,vt=ke/2-D[C]/2-1,Ie=Es(b[W],vt),es=Es(b[Y],vt),mt=Ie,He=ke-D[C]-es,ne=ke/2-D[C]/2+Qt,Pe=Ai(mt,ne,He),ze=!h.arrow&&lo(r)!=null&&ne!==Pe&&n.reference[C]/2-(ne<mt?Ie:es)-D[C]/2<0,Se=ze?ne<mt?ne-mt:ne-He:0;return{[w]:k[w]+Se,data:{[w]:Pe,centerOffset:ne-Pe-Se,...ze&&{alignmentOffset:Se}},reset:ze}}}),Hc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,o;const{placement:r,middlewareData:n,rects:l,initialPlacement:c,platform:h,elements:p}=t,{mainAxis:m=!0,crossAxis:b=!0,fallbackPlacements:k,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:C="none",flipAlignment:D=!0,...B}=Os(e,t);if((s=n.arrow)!=null&&s.alignmentOffset)return{};const W=us(r),Y=Yt(c),J=us(c)===c,re=await(h.isRTL==null?void 0:h.isRTL(p.floating)),te=k||(J||!D?[Uo(c)]:Oc(c)),Ge=C!=="none";!k&&Ge&&te.push(...Rc(c,D,C,re));const ke=[c,...te],Qt=await to(t,B),vt=[];let Ie=((o=n.flip)==null?void 0:o.overflows)||[];if(m&&vt.push(Qt[W]),b){const ne=Bc(r,l,re);vt.push(Qt[ne[0]],Qt[ne[1]])}if(Ie=[...Ie,{placement:r,overflows:vt}],!vt.every(ne=>ne<=0)){var es,mt;const ne=(((es=n.flip)==null?void 0:es.index)||0)+1,Pe=ke[ne];if(Pe&&(!(b==="alignment"?Y!==Yt(Pe):!1)||Ie.every(Ce=>Yt(Ce.placement)===Y?Ce.overflows[0]>0:!0)))return{data:{index:ne,overflows:Ie},reset:{placement:Pe}};let ze=(mt=Ie.filter(Se=>Se.overflows[0]<=0).sort((Se,Ce)=>Se.overflows[1]-Ce.overflows[1])[0])==null?void 0:mt.placement;if(!ze)switch(w){case"bestFit":{var He;const Se=(He=Ie.filter(Ce=>{if(Ge){const Ne=Yt(Ce.placement);return Ne===Y||Ne==="y"}return!0}).map(Ce=>[Ce.placement,Ce.overflows.filter(Ne=>Ne>0).reduce((Ne,ho)=>Ne+ho,0)]).sort((Ce,Ne)=>Ce[1]-Ne[1])[0])==null?void 0:He[0];Se&&(ze=Se);break}case"initialPlacement":ze=c;break}if(r!==ze)return{reset:{placement:ze}}}return{}}}};function Mn(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Tn(e){return Tc.some(t=>e[t]>=0)}const Pc=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:s}=t,{strategy:o="referenceHidden",...r}=Os(e,t);switch(o){case"referenceHidden":{const n=await to(t,{...r,elementContext:"reference"}),l=Mn(n,s.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:Tn(l)}}}case"escaped":{const n=await to(t,{...r,altBoundary:!0}),l=Mn(n,s.floating);return{data:{escapedOffsets:l,escaped:Tn(l)}}}default:return{}}}}},Nc=new Set(["left","top"]);async function jc(e,t){const{placement:s,platform:o,elements:r}=e,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),l=us(s),c=lo(s),h=Yt(s)==="y",p=Nc.has(l)?-1:1,m=n&&h?-1:1,b=Os(t,e);let{mainAxis:k,crossAxis:w,alignmentAxis:C}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:b.mainAxis||0,crossAxis:b.crossAxis||0,alignmentAxis:b.alignmentAxis};return c&&typeof C=="number"&&(w=c==="end"?C*-1:C),h?{x:w*m,y:k*p}:{x:k*p,y:w*m}}const Yc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var s,o;const{x:r,y:n,placement:l,middlewareData:c}=t,h=await jc(t,e);return l===((s=c.offset)==null?void 0:s.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:r+h.x,y:n+h.y,data:{...h,placement:l}}}}},Uc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:o,placement:r}=t,{mainAxis:n=!0,crossAxis:l=!1,limiter:c={fn:B=>{let{x:W,y:Y}=B;return{x:W,y:Y}}},...h}=Os(e,t),p={x:s,y:o},m=await to(t,h),b=Yt(us(r)),k=xa(b);let w=p[k],C=p[b];if(n){const B=k==="y"?"top":"left",W=k==="y"?"bottom":"right",Y=w+m[B],J=w-m[W];w=Ai(Y,w,J)}if(l){const B=b==="y"?"top":"left",W=b==="y"?"bottom":"right",Y=C+m[B],J=C-m[W];C=Ai(Y,C,J)}const D=c.fn({...t,[k]:w,[b]:C});return{...D,data:{x:D.x-s,y:D.y-o,enabled:{[k]:n,[b]:l}}}}}};function ii(){return typeof window<"u"}function zs(e){return wa(e)?(e.nodeName||"").toLowerCase():"#document"}function Ae(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function bt(e){var t;return(t=(wa(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function wa(e){return ii()?e instanceof Node||e instanceof Ae(e).Node:!1}function Ue(e){return ii()?e instanceof Element||e instanceof Ae(e).Element:!1}function ct(e){return ii()?e instanceof HTMLElement||e instanceof Ae(e).HTMLElement:!1}function Dn(e){return!ii()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ae(e).ShadowRoot}const qc=new Set(["inline","contents"]);function co(e){const{overflow:t,overflowX:s,overflowY:o,display:r}=qe(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+s)&&!qc.has(r)}const Zc=new Set(["table","td","th"]);function Xc(e){return Zc.has(zs(e))}const Kc=[":popover-open",":modal"];function ri(e){return Kc.some(t=>{try{return e.matches(t)}catch{return!1}})}const Jc=["transform","translate","scale","rotate","perspective"],Qc=["transform","translate","scale","rotate","perspective","filter"],eh=["paint","layout","strict","content"];function Ur(e){const t=qr(),s=Ue(e)?qe(e):e;return Jc.some(o=>s[o]?s[o]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||Qc.some(o=>(s.willChange||"").includes(o))||eh.some(o=>(s.contain||"").includes(o))}function th(e){let t=Ut(e);for(;ct(t)&&!Ms(t);){if(Ur(t))return t;if(ri(t))return null;t=Ut(t)}return null}function qr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const sh=new Set(["html","body","#document"]);function Ms(e){return sh.has(zs(e))}function qe(e){return Ae(e).getComputedStyle(e)}function ni(e){return Ue(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ut(e){if(zs(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Dn(e)&&e.host||bt(e);return Dn(t)?t.host:t}function ka(e){const t=Ut(e);return Ms(t)?e.ownerDocument?e.ownerDocument.body:e.body:ct(t)&&co(t)?t:ka(t)}function so(e,t,s){var o;t===void 0&&(t=[]),s===void 0&&(s=!0);const r=ka(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),l=Ae(r);if(n){const c=Bi(l);return t.concat(l,l.visualViewport||[],co(r)?r:[],c&&s?so(c):[])}return t.concat(r,so(r,[],s))}function Bi(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Sa(e){const t=qe(e);let s=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=ct(e),n=r?e.offsetWidth:s,l=r?e.offsetHeight:o,c=Yo(s)!==n||Yo(o)!==l;return c&&(s=n,o=l),{width:s,height:o,$:c}}function Zr(e){return Ue(e)?e:e.contextElement}function Ss(e){const t=Zr(e);if(!ct(t))return rt(1);const s=t.getBoundingClientRect(),{width:o,height:r,$:n}=Sa(t);let l=(n?Yo(s.width):s.width)/o,c=(n?Yo(s.height):s.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!c||!Number.isFinite(c))&&(c=1),{x:l,y:c}}const oh=rt(0);function Ca(e){const t=Ae(e);return!qr()||!t.visualViewport?oh:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ih(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==Ae(e)?!1:t}function ps(e,t,s,o){t===void 0&&(t=!1),s===void 0&&(s=!1);const r=e.getBoundingClientRect(),n=Zr(e);let l=rt(1);t&&(o?Ue(o)&&(l=Ss(o)):l=Ss(e));const c=ih(n,s,o)?Ca(n):rt(0);let h=(r.left+c.x)/l.x,p=(r.top+c.y)/l.y,m=r.width/l.x,b=r.height/l.y;if(n){const k=Ae(n),w=o&&Ue(o)?Ae(o):o;let C=k,D=Bi(C);for(;D&&o&&w!==C;){const B=Ss(D),W=D.getBoundingClientRect(),Y=qe(D),J=W.left+(D.clientLeft+parseFloat(Y.paddingLeft))*B.x,re=W.top+(D.clientTop+parseFloat(Y.paddingTop))*B.y;h*=B.x,p*=B.y,m*=B.x,b*=B.y,h+=J,p+=re,C=Ae(D),D=Bi(C)}}return qo({width:m,height:b,x:h,y:p})}function Xr(e,t){const s=ni(e).scrollLeft;return t?t.left+s:ps(bt(e)).left+s}function $a(e,t,s){s===void 0&&(s=!1);const o=e.getBoundingClientRect(),r=o.left+t.scrollLeft-(s?0:Xr(e,o)),n=o.top+t.scrollTop;return{x:r,y:n}}function rh(e){let{elements:t,rect:s,offsetParent:o,strategy:r}=e;const n=r==="fixed",l=bt(o),c=t?ri(t.floating):!1;if(o===l||c&&n)return s;let h={scrollLeft:0,scrollTop:0},p=rt(1);const m=rt(0),b=ct(o);if((b||!b&&!n)&&((zs(o)!=="body"||co(l))&&(h=ni(o)),ct(o))){const w=ps(o);p=Ss(o),m.x=w.x+o.clientLeft,m.y=w.y+o.clientTop}const k=l&&!b&&!n?$a(l,h,!0):rt(0);return{width:s.width*p.x,height:s.height*p.y,x:s.x*p.x-h.scrollLeft*p.x+m.x+k.x,y:s.y*p.y-h.scrollTop*p.y+m.y+k.y}}function nh(e){return Array.from(e.getClientRects())}function ah(e){const t=bt(e),s=ni(e),o=e.ownerDocument.body,r=ls(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),n=ls(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let l=-s.scrollLeft+Xr(e);const c=-s.scrollTop;return qe(o).direction==="rtl"&&(l+=ls(t.clientWidth,o.clientWidth)-r),{width:r,height:n,x:l,y:c}}function lh(e,t){const s=Ae(e),o=bt(e),r=s.visualViewport;let n=o.clientWidth,l=o.clientHeight,c=0,h=0;if(r){n=r.width,l=r.height;const p=qr();(!p||p&&t==="fixed")&&(c=r.offsetLeft,h=r.offsetTop)}return{width:n,height:l,x:c,y:h}}const dh=new Set(["absolute","fixed"]);function ch(e,t){const s=ps(e,!0,t==="fixed"),o=s.top+e.clientTop,r=s.left+e.clientLeft,n=ct(e)?Ss(e):rt(1),l=e.clientWidth*n.x,c=e.clientHeight*n.y,h=r*n.x,p=o*n.y;return{width:l,height:c,x:h,y:p}}function An(e,t,s){let o;if(t==="viewport")o=lh(e,s);else if(t==="document")o=ah(bt(e));else if(Ue(t))o=ch(t,s);else{const r=Ca(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return qo(o)}function Ea(e,t){const s=Ut(e);return s===t||!Ue(s)||Ms(s)?!1:qe(s).position==="fixed"||Ea(s,t)}function hh(e,t){const s=t.get(e);if(s)return s;let o=so(e,[],!1).filter(c=>Ue(c)&&zs(c)!=="body"),r=null;const n=qe(e).position==="fixed";let l=n?Ut(e):e;for(;Ue(l)&&!Ms(l);){const c=qe(l),h=Ur(l);!h&&c.position==="fixed"&&(r=null),(n?!h&&!r:!h&&c.position==="static"&&!!r&&dh.has(r.position)||co(l)&&!h&&Ea(e,l))?o=o.filter(m=>m!==l):r=c,l=Ut(l)}return t.set(e,o),o}function uh(e){let{element:t,boundary:s,rootBoundary:o,strategy:r}=e;const l=[...s==="clippingAncestors"?ri(t)?[]:hh(t,this._c):[].concat(s),o],c=l[0],h=l.reduce((p,m)=>{const b=An(t,m,r);return p.top=ls(b.top,p.top),p.right=Es(b.right,p.right),p.bottom=Es(b.bottom,p.bottom),p.left=ls(b.left,p.left),p},An(t,c,r));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function ph(e){const{width:t,height:s}=Sa(e);return{width:t,height:s}}function gh(e,t,s){const o=ct(t),r=bt(t),n=s==="fixed",l=ps(e,!0,n,t);let c={scrollLeft:0,scrollTop:0};const h=rt(0);function p(){h.x=Xr(r)}if(o||!o&&!n)if((zs(t)!=="body"||co(r))&&(c=ni(t)),o){const w=ps(t,!0,n,t);h.x=w.x+t.clientLeft,h.y=w.y+t.clientTop}else r&&p();n&&!o&&r&&p();const m=r&&!o&&!n?$a(r,c):rt(0),b=l.left+c.scrollLeft-h.x-m.x,k=l.top+c.scrollTop-h.y-m.y;return{x:b,y:k,width:l.width,height:l.height}}function bi(e){return qe(e).position==="static"}function Ln(e,t){if(!ct(e)||qe(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return bt(e)===s&&(s=s.ownerDocument.body),s}function Ma(e,t){const s=Ae(e);if(ri(e))return s;if(!ct(e)){let r=Ut(e);for(;r&&!Ms(r);){if(Ue(r)&&!bi(r))return r;r=Ut(r)}return s}let o=Ln(e,t);for(;o&&Xc(o)&&bi(o);)o=Ln(o,t);return o&&Ms(o)&&bi(o)&&!Ur(o)?s:o||th(e)||s}const fh=async function(e){const t=this.getOffsetParent||Ma,s=this.getDimensions,o=await s(e.floating);return{reference:gh(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function yh(e){return qe(e).direction==="rtl"}const bh={convertOffsetParentRelativeRectToViewportRelativeRect:rh,getDocumentElement:bt,getClippingRect:uh,getOffsetParent:Ma,getElementRects:fh,getClientRects:nh,getDimensions:ph,getScale:Ss,isElement:Ue,isRTL:yh};function Ta(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function vh(e,t){let s=null,o;const r=bt(e);function n(){var c;clearTimeout(o),(c=s)==null||c.disconnect(),s=null}function l(c,h){c===void 0&&(c=!1),h===void 0&&(h=1),n();const p=e.getBoundingClientRect(),{left:m,top:b,width:k,height:w}=p;if(c||t(),!k||!w)return;const C=po(b),D=po(r.clientWidth-(m+k)),B=po(r.clientHeight-(b+w)),W=po(m),J={rootMargin:-C+"px "+-D+"px "+-B+"px "+-W+"px",threshold:ls(0,Es(1,h))||1};let re=!0;function te(Ge){const ke=Ge[0].intersectionRatio;if(ke!==h){if(!re)return l();ke?l(!1,ke):o=setTimeout(()=>{l(!1,1e-7)},1e3)}ke===1&&!Ta(p,e.getBoundingClientRect())&&l(),re=!1}try{s=new IntersectionObserver(te,{...J,root:r.ownerDocument})}catch{s=new IntersectionObserver(te,J)}s.observe(e)}return l(!0),n}function mh(e,t,s,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:h=!1}=o,p=Zr(e),m=r||n?[...p?so(p):[],...so(t)]:[];m.forEach(W=>{r&&W.addEventListener("scroll",s,{passive:!0}),n&&W.addEventListener("resize",s)});const b=p&&c?vh(p,s):null;let k=-1,w=null;l&&(w=new ResizeObserver(W=>{let[Y]=W;Y&&Y.target===p&&w&&(w.unobserve(t),cancelAnimationFrame(k),k=requestAnimationFrame(()=>{var J;(J=w)==null||J.observe(t)})),s()}),p&&!h&&w.observe(p),w.observe(t));let C,D=h?ps(e):null;h&&B();function B(){const W=ps(e);D&&!Ta(D,W)&&s(),D=W,C=requestAnimationFrame(B)}return s(),()=>{var W;m.forEach(Y=>{r&&Y.removeEventListener("scroll",s),n&&Y.removeEventListener("resize",s)}),b?.(),(W=w)==null||W.disconnect(),w=null,h&&cancelAnimationFrame(C)}}const zu=to,Da=Yc,xh=Uc,_h=Hc,Vu=Pc,Wu=Ic,wh=(e,t,s)=>{const o=new Map,r={platform:bh,...s},n={...r.platform,_c:o};return Gc(e,t,{...r,platform:n})};var _o;class Aa{constructor(t){g(this,_o,s=>{const o=s.target;if(!this.host.navigableItems.includes(o))return;let r=!1;if(s.key==="ArrowDown"){const n=this.host.navigableItems.indexOf(o)+1;this.host.navigableItems[n]?.focus(),r=!0}else if(s.key==="ArrowUp"){const n=this.host.navigableItems.indexOf(o)-1;this.host.navigableItems[n]?.focus(),r=!0}else if(s.key==="Home")this.host.navigableItems[0]?.focus(),r=!0;else if(s.key==="End")this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),r=!0;else{const n=s.key.toLowerCase();if(n.length!==1)return;const l=n>="a"&&n<="z",c=n>="0"&&n<="9";(l||c)&&(this.host.navigableItems.find(p=>p.textContent?.trim().toLowerCase()?.startsWith(n))?.focus(),r=!0)}r&&(s.preventDefault(),s.stopPropagation())}),(this.host=t).addController(this)}hostConnected(){this.host.addEventListener("keydown",a(this,_o))}hostDisconnected(){this.host.removeEventListener("keydown",a(this,_o))}}_o=new WeakMap;function La(e){let t=e;for(;t.assignedElements().length>0&&t.assignedElements()[0].nodeName==="SLOT";)t=t.assignedElements()[0];return t}var Is;let Oi=class extends R{constructor(){super(),g(this,Is,va()),new Aa(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),be.instance.apply(this,"gds-listbox")}get navigableItems(){return a(this,Is).value?La(a(this,Is).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){this.navigableItems[0]?.focus()}render(){return v`<slot ${ma(a(this,Is))}></slot>`}};Is=new WeakMap;Oi=i([$("gds-menu",{dependsOn:[$s]})],Oi);let ht=class extends se{};ht._regularSVG='<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" fill="currentColor"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" fill="currentColor"/><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';ht._solidSVG='<path d="M3.75 10.25C2.7835 10.25 2 11.0335 2 12C2 12.9665 2.7835 13.75 3.75 13.75C4.7165 13.75 5.5 12.9665 5.5 12C5.5 11.0335 4.7165 10.25 3.75 10.25Z" fill="currentColor"/><path d="M12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25Z" fill="currentColor"/><path d="M20.25 10.25C19.2835 10.25 18.5 11.0335 18.5 12C18.5 12.9665 19.2835 13.75 20.25 13.75C21.2165 13.75 22 12.9665 22 12C22 11.0335 21.2165 10.25 20.25 10.25Z" fill="currentColor"/>';ht._name="dot-grid-one-horizontal";ht._width=24;ht._height=24;ht._viewBox="0 0 24 24";ht=i([$("gds-icon-dot-grid-one-horizontal")],ht);ht.define();let ut=class extends se{};ut._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';ut._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>';ut._name="cross-small";ut._width=24;ut._height=24;ut._viewBox="0 0 24 24";ut=i([$("gds-icon-cross-small")],ut);const kh=T`
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
      box-shadow: var(--gds-sys-shadow-l-01);
      border: var(--gds-sys-space-4xs) solid
        var(--gds-sys-color-border-subtle-01);
      border-radius: var(--gds-sys-radius-s);
      overscroll-behavior: contain;
    }

    :host([nonmodal]) dialog {
      z-index: 1;
    }

    @media (max-width: 576px) {
      dialog.use-modal-in-mobile {
        border-radius: var(--gds-sys-radius-m) var(--gds-sys-radius-m) 0 0;
        transition: transform var(--gds-sys-motion-duration-fastest) ease;
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
          transition: opacity var(--gds-sys-motion-duration-fast) ease;
          @starting-style {
            opacity: 0;
          }
        }
      }
    }

    @media (min-width: 577px) {
      header {
        display: none;
      }
    }

    header {
      display: none;
    }

    @media (min-width: 577px) {
      dialog:not(.has-backdrop)::backdrop {
        background-color: transparent;
        display: block;
        position: fixed;
      }
    }
  }
`;var Sh=kh,_t,Ba,ds,Zo,It,Hs,Ht,zi,Vi,Oa,za,Wi,ai,li,wo,ko,Ps;let V=class extends R{constructor(){super(...arguments),g(this,_t),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.autofocus=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>`${window.innerHeight-16}px`,this.nonmodal=!1,this.floatingUIMiddleware=V.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,g(this,ds),g(this,Zo,!1),g(this,It),g(this,Hs,()=>{a(this,Ht).call(this,"cancel")&&(this.open=!1)}),g(this,Ht,e=>{const t=e==="show";return this.dispatchCustomEvent("gds-ui-state",{detail:{open:t,reason:e},bubbles:!1,composed:!1,cancelable:!0})}),g(this,zi,e=>{e.stopPropagation(),e.preventDefault(),a(this,Ht).call(this,"close")&&(this.open=!1,setTimeout(()=>this._trigger?.focus(),250))}),g(this,ai,e=>{(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),this.open=!0,a(this,Ht).call(this,"show")),e.key==="Escape"&&this.open&&a(this,Hs).call(this)}),g(this,li,e=>{e.preventDefault(),a(this,Ht).call(this,this.open?"close":"show")&&(this.open=!this.open)}),g(this,wo,()=>{const e=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then(()=>{e?.focus()})}),g(this,ko,e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const r=s.getBoundingClientRect();!(r.top<=t.clientY&&t.clientY<=r.top+r.height&&r.left<=t.clientX&&t.clientX<=r.left+r.width)&&a(this,Ht).call(this,"close")&&(this.open=!1)}}),g(this,Ps,()=>{this.open&&window.innerWidth>767&&a(this,Ht).call(this,"close")&&(this.open=!1)})}_handleTriggerRefChanged(){this.triggerRef?.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){this.anchorRef?.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){f(this,_t,Vi).call(this),f(this,_t,za).call(this)}_handleAnchorChanged(){f(this,_t,Wi).call(this)}connectedCallback(){super.connectedCallback(),be.instance.apply(this,"gds-popover"),f(this,_t,Vi).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{e.key==="Escape"&&this.open&&(a(this,Hs).call(this),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{const t=e.target;t!==this&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1)}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),f(this,_t,Oa).call(this),window.removeEventListener("scroll",a(this,Ps))}render(){return v`<slot
        name="trigger"
        @slotchange=${f(this,_t,Ba)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${me({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&a(this,Hs).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${a(this,zi)}
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
      </div>`}_handleOpenChange(){const e=(this.nonmodal?a(this,It):this._elDialog)||document;this.updateComplete.then(()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?this._elDialog?.setAttribute("open","true"):this._elDialog?.showModal(),this.autofocus&&(a(this,wo).call(this),setTimeout(()=>a(this,wo).call(this),250)),requestAnimationFrame(()=>{a(this,It)&&(a(this,It).show=!0)}),setTimeout(()=>e.addEventListener("click",a(this,ko)),0),window.addEventListener("scroll",a(this,Ps),{passive:!0})):(this._elDialog?.close(),e.removeEventListener("click",a(this,ko)),window.removeEventListener("scroll",a(this,Ps)),a(this,It)&&(a(this,It).show=!1))})}_handleBackdropChange(){const e=this.parentElement?.getRootNode();!this.backdrop||!e||U(this,It,e.querySelector(this.backdrop))}_handleMobileLayout(e){var t;U(this,Zo,e),e&&!this.disableMobileStyles?((t=a(this,ds))==null||t.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("minWidth"),this._elDialog?.style.removeProperty("min-width"),this.updateComplete.then(()=>{this.open&&this._elDialog?.showModal()})):this.updateComplete.then(()=>{f(this,_t,Wi).call(this)})}};_t=new WeakSet;Ba=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};ds=new WeakMap;Zo=new WeakMap;It=new WeakMap;Hs=new WeakMap;Ht=new WeakMap;zi=new WeakMap;Vi=function(){this._trigger?.addEventListener("keydown",a(this,ai)),this._trigger?.addEventListener("click",a(this,li))};Oa=function(){var e;this._trigger?.removeEventListener("keydown",a(this,ai)),this._trigger?.removeEventListener("click",a(this,li)),(e=a(this,ds))==null||e.call(this)};za=function(){if(this._trigger){this._trigger?.setAttribute("aria-expanded",String(this.open));const e=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||e.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const s=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";this._trigger.getAttribute(s)===null&&this._trigger.setAttribute(s,this.popupRole)}};Wi=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;!e||!t||a(this,Zo)&&!this.disableMobileStyles||(a(this,ds)&&a(this,ds).call(this),U(this,ds,mh(e,t,()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),wh(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:s,y:o})=>Object.assign(t.style,{left:`${s}px`,top:`${o}px`}))})))};ai=new WeakMap;li=new WeakMap;wo=new WeakMap;ko=new WeakMap;Ps=new WeakMap;V.styles=Sh;V.DefaultMiddleware=[Da(8),xh({crossAxis:!0,padding:8})];i([d({type:Boolean,reflect:!0})],V.prototype,"open",2);i([d({attribute:"popup-role"})],V.prototype,"popupRole",2);i([d({attribute:!1})],V.prototype,"triggerRef",2);i([d({attribute:!1})],V.prototype,"anchorRef",2);i([d()],V.prototype,"label",2);i([d()],V.prototype,"placement",2);i([d({type:Boolean})],V.prototype,"disableMobileStyles",2);i([d({type:Boolean})],V.prototype,"autofocus",2);i([d({attribute:!1})],V.prototype,"calcMinWidth",2);i([d({attribute:!1})],V.prototype,"calcMaxWidth",2);i([d({attribute:!1})],V.prototype,"calcMinHeight",2);i([d({attribute:!1})],V.prototype,"calcMaxHeight",2);i([d({type:Boolean,reflect:!0})],V.prototype,"nonmodal",2);i([d()],V.prototype,"backdrop",2);i([d({attribute:!1})],V.prototype,"floatingUIMiddleware",2);i([le()],V.prototype,"_trigger",2);i([le()],V.prototype,"_anchor",2);i([le()],V.prototype,"_isVirtKbVisible",2);i([q("slot:not([name])")],V.prototype,"_elDefaultSlot",2);i([q('slot[name="trigger"]')],V.prototype,"_elTriggerSlot",2);i([q("dialog")],V.prototype,"_elDialog",2);i([N("triggerRef")],V.prototype,"_handleTriggerRefChanged",1);i([N("anchorRef")],V.prototype,"_handleAnchorRefChanged",1);i([N("_trigger")],V.prototype,"_handleTriggerChanged",1);i([N("_anchor")],V.prototype,"_handleAnchorChanged",1);i([N("open")],V.prototype,"_handleOpenChange",1);i([N("backdrop")],V.prototype,"_handleBackdropChange",1);i([Cd("(max-width: 576px)")],V.prototype,"_handleMobileLayout",1);V=i([$("gds-popover",{dependsOn:[ut]}),Me()],V);var bs,So,Ri,Va;let We=class extends Ee(we(R)){constructor(){super(...arguments),g(this,bs),this.open=!1,this.buttonLabel=A("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",g(this,Ri,()=>v`<gds-popover
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
        @gds-menu-item-click=${f(this,bs,Va)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),be.instance.apply(this,"gds-context-menu"),f(this,bs,So).call(this),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return v`<gds-button
        .rank=${"secondary"}
        id="trigger"
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        label=${this.buttonLabel}
        @click=${()=>this.open=!0}
      >
        ${this.showLabel?v`<slot
                name="icon"
                slot="lead"
                @slotchange=${f(this,bs,So)}
              ></slot
              >${this.buttonLabel}`:v`<slot
              name="icon"
              @slotchange=${f(this,bs,So)}
            ></slot>`}
      </gds-button>
      ${F(this.open,a(this,Ri))}`}};bs=new WeakSet;So=function(){this.elIconSlot.then(e=>{if(!e.assignedNodes({flatten:!0}).some(t=>t instanceof Element&&t.tagName.toLowerCase().startsWith("gds-icon"))){const t=document.createElement(Yl("gds-icon-dot-grid-one-horizontal"));e.appendChild(t),this.requestUpdate()}})};Ri=new WeakMap;Va=function(){this.open=!1};We.styles=[j];We.shadowRootOptions={mode:"open",delegatesFocus:!0};i([d({type:Boolean,reflect:!0})],We.prototype,"open",2);i([d({attribute:"button-label"})],We.prototype,"buttonLabel",2);i([d({attribute:"show-label",type:Boolean})],We.prototype,"showLabel",2);i([d()],We.prototype,"label",2);i([d()],We.prototype,"placement",2);i([Vt("#trigger")],We.prototype,"elTriggerBtn",2);i([Vt('slot[name="icon"]')],We.prototype,"elIconSlot",2);We=i([$("gds-context-menu",{dependsOn:[$s,Oi,V,at,ht]}),Me()],We);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ch(e,t){const s=typeof t=="function";if(e!==void 0){let o=-1;for(const r of e)o>-1&&(yield s?t(o):t),o++,yield r}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*$h(e,t){if(e!==void 0){let s=0;for(const o of e)yield t(o,s++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bn=(e,t,s)=>{const o=new Map;for(let r=t;r<=s;r++)o.set(e[r],r);return o},Eh=Ls(class extends ao{constructor(e){if(super(e),e.type!==no.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let o;s===void 0?s=t:t!==void 0&&(o=t);const r=[],n=[];let l=0;for(const c of e)r[l]=o?o(c,l):l,n[l]=s(c,l),l++;return{values:n,keys:r}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,o]){const r=Sc(e),{values:n,keys:l}=this.dt(t,s,o);if(!Array.isArray(r))return this.ut=l,n;const c=this.ut??=[],h=[];let p,m,b=0,k=r.length-1,w=0,C=n.length-1;for(;b<=k&&w<=C;)if(r[b]===null)b++;else if(r[k]===null)k--;else if(c[b]===l[w])h[w]=ts(r[b],n[w]),b++,w++;else if(c[k]===l[C])h[C]=ts(r[k],n[C]),k--,C--;else if(c[b]===l[C])h[C]=ts(r[b],n[C]),Ws(e,h[C+1],r[b]),b++,C--;else if(c[k]===l[w])h[w]=ts(r[k],n[w]),Ws(e,r[b],r[k]),k--,w++;else if(p===void 0&&(p=Bn(l,w,C),m=Bn(c,b,k)),p.has(c[b]))if(p.has(c[k])){const D=m.get(l[w]),B=D!==void 0?r[D]:null;if(B===null){const W=Ws(e,r[b]);ts(W,n[w]),h[w]=W}else h[w]=ts(B,n[w]),Ws(e,r[b],B),r[D]=null;w++}else fi(r[k]),k--;else fi(r[b]),b++;for(;w<=C;){const D=Ws(e,h[C+1]);ts(D,n[w]),h[w++]=D}for(;b<=k;){const D=r[b++];D!==null&&fi(D)}return this.ut=l,kc(e,h),Qs}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Mh{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Th{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const On=e=>!xc(e)&&typeof e.then=="function",zn=1073741823;class Dh extends ba{constructor(){super(...arguments),this._$Cwt=zn,this._$Cbt=[],this._$CK=new Mh(this),this._$CX=new Th}render(...t){return t.find(s=>!On(s))??Qs}update(t,s){const o=this._$Cbt;let r=o.length;this._$Cbt=s;const n=this._$CK,l=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<s.length&&!(c>this._$Cwt);c++){const h=s[c];if(!On(h))return this._$Cwt=c,h;c<r&&h===o[c]||(this._$Cwt=zn,r=0,Promise.resolve(h).then(async p=>{for(;l.get();)await l.get();const m=n.deref();if(m!==void 0){const b=m._$Cbt.indexOf(h);b>-1&&b<m._$Cwt&&(m._$Cwt=b,m.setValue(p))}}))}return Qs}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Ah=Ls(Dh),Lh=T`
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
      background: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);
      border: var(--gds-sys-space-4xs) solid
        var(--gds-sys-color-border-interactive);
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
      background: var(--gds-sys-color-l3-disabled-01);
      color: var(--gds-sys-color-content-disabled-01);
      border-color: transparent;
      pointer-events: none;
    }

    .field.invalid {
      background: var(--gds-sys-color-l3-negative-02);
      border-color: var(--gds-sys-color-border-negative-01);
      color: var(--gds-sys-color-content-negative-01);
    }

    slot:not([name])::slotted(*) {
      color: currentColor;
    }

    .main-slot-wrap {
      display: flex;
      gap: var(--gds-sys-space-xs);
      flex: 1;
      align-self: stretch;
    }

    .main-slot-wrap.multiline {
      height: max-content;
    }

    @media (hover: hover) {
      .field:hover {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-02),
          var(--gds-sys-color-state-neutral-03)
        );
      }

      .field.invalid:hover {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-negative-02),
          var(--gds-sys-color-state-negative-hover)
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
`;var Bh=Lh,Vs,as,Wa,Ra,Fa,Ga,Ia;let xe=class extends R{constructor(){super(),g(this,as),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,g(this,Vs,(e,t)=>{const o=t.target.assignedNodes({flatten:!0}),r=o.length>0&&o.some(n=>n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE&&n.textContent?.trim()!=="");e==="lead"?this._leadSlotOccupied=r:e==="trail"?this._trailSlotOccupied=r:e==="action"&&(this._actionSlotOccupied=r)})}connectedCallback(){super.connectedCallback(),be.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return v`
      <div class="field ${me(e)}" part="_base">
        ${f(this,as,Wa).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};Vs=new WeakMap;as=new WeakSet;Wa=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return v`
      ${f(this,as,Ra).call(this)} ${f(this,as,Fa).call(this)}
      <div class="${me(e)}">
        ${f(this,as,Ga).call(this)} ${f(this,as,Ia).call(this)}
      </div>
    `};Ra=function(){return v` <slot
      name="lead"
      @slotchange=${e=>a(this,Vs).call(this,"lead",e)}
    ></slot>`};Fa=function(){return v`<div
      class="main-slot-wrap ${me({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>a(this,Vs).call(this,"main",e)}
      ></slot>
    </div>`};Ga=function(){return v`
      <slot
        name="action"
        @slotchange=${e=>a(this,Vs).call(this,"action",e)}
      ></slot>
    `};Ia=function(){return v`
      <slot
        name="trail"
        @slotchange=${e=>a(this,Vs).call(this,"trail",e)}
      ></slot>
    `};xe.styles=[Bh];i([d()],xe.prototype,"size",2);i([d({type:Boolean})],xe.prototype,"multiline",2);i([d({type:Boolean,reflect:!0})],xe.prototype,"disabled",2);i([d({type:Boolean})],xe.prototype,"invalid",2);i([q("slot:not([name])")],xe.prototype,"_mainSlotElement",2);i([le()],xe.prototype,"_leadSlotOccupied",2);i([le()],xe.prototype,"_trailSlotOccupied",2);i([le()],xe.prototype,"_actionSlotOccupied",2);i([N("disabled")],xe.prototype,"_handleDisabledChange",1);xe=i([$("gds-field-base"),Me()],xe);const Oh=T`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overscroll-behavior: contain;
    }
  }
`;var zh=Oh,Ns,Fi;let gs=class extends R{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,g(this,Ns,va()),g(this,Fi,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new Aa(this)}get navigableItems(){return this.visibleOptionElements}get options(){return a(this,Ns).value?La(a(this,Ns).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),be.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",a(this,Fi))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return v`<slot ${ma(a(this,Ns))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};Ns=new WeakMap;Fi=new WeakMap;gs.styles=zh;i([d({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],gs.prototype,"multiple",2);i([d()],gs.prototype,"compareWith",2);i([N("multiple")],gs.prototype,"_rerenderOptions",1);gs=i([$("gds-listbox",{dependsOn:[lt]})],gs);var di=T`
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
    font: var(--gds-sys-text-detail-regular-s);
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    pointer-events: none;
  }

  .native-control {
    font: var(--gds-sys-text-detail-regular-m);
    align-items: center;
    align-self: center;
    appearance: none;
    background-color: transparent;
    border: 0;
    font-family: inherit;
    margin: unset;
    outline: none;
    overflow: hidden;
    padding: unset;
    width: 100%;
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
`;let At=class extends se{};At._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';At._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>';At._name="chevron-bottom";At._width=24;At._height=24;At._viewBox="0 0 24 24";At=i([$("gds-icon-chevron-bottom")],At);let Ze=class extends se{};Ze._regularSVG='<path d="M4.75 4.75L19.25 19.25M19.25 4.75L4.75 19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';Ze._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.11612 4.11612C4.60427 3.62796 5.39573 3.62796 5.88388 4.11612L12 10.2322L18.1161 4.11612C18.6043 3.62796 19.3957 3.62796 19.8839 4.11612C20.372 4.60427 20.372 5.39573 19.8839 5.88388L13.7678 12L19.8839 18.1161C20.372 18.6043 20.372 19.3957 19.8839 19.8839C19.3957 20.372 18.6043 20.372 18.1161 19.8839L12 13.7678L5.88388 19.8839C5.39573 20.372 4.60427 20.372 4.11612 19.8839C3.62796 19.3957 3.62796 18.6043 4.11612 18.1161L10.2322 12L4.11612 5.88388C3.62796 5.39573 3.62796 4.60427 4.11612 4.11612Z" fill="currentColor"/>';Ze._name="cross-large";Ze._width=24;Ze._height=24;Ze._viewBox="0 0 24 24";Ze=i([$("gds-icon-cross-large")],Ze);const Vh=T`
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
      border-radius: var(--gds-sys-radius-xs);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-size: inherit;
      line-height: inherit;
      border: none;
      outline: none;
      color: var(--gds-sys-color-content-disabled-01);
      border-color: var(--gds-sys-color-border-interactive);
      border-width: 0 0 var(--gds-sys-space-4xs) 0;
      border-style: solid;
      width: 100%;
      padding: var(--gds-sys-space-m);
      font-weight: var(--gds-sys-text-weight-regular);
      flex: 1;
      box-sizing: border-box;
      font-family: inherit;

      &:focus {
        border-color: var(--gds-sys-color-border-interactive);
        color: var(--gds-sys-color-content-neutral-01);
      }

      &::placeholder {
        font-family: inherit;
        font-weight: var(--gds-sys-text-weight-book);
        color: var(--gds-sys-color-content-disabled-01);
      }
    }

    [aria-expanded='true'] [slot='trail'] {
      transform: scaleY(-1);
    }
  }
`;var Wh=Vh,ss,vs,Ha,Gi,Ii,Hi,Nt,Pi,Ni,Co,ji,Yi,Ui,Pa,Xo,Ko,Na,ja,Ts,ci;let X=class extends ie{constructor(){super(...arguments),g(this,vs),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,g(this,ss),g(this,Gi,()=>v`
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
        @input=${e=>{this.value=e.target.value,a(this,Xo).call(this),a(this,Co).call(this,e),a(this,Nt).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{e.key==="ArrowDown"&&(e.preventDefault(),a(this,Nt).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(t=>t.focus())),e.key==="Enter"&&a(this,Ko).call(this)}}
      />
    `),g(this,Ii,()=>v`
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
          <span>${sa(this.displayValue)}</span>
        </slot>
      </button>
    `),g(this,Hi,e=>{if(this.combobox){const s=e.getBoundingClientRect(),r=window.innerHeight-s.bottom,n=s.top;let l=Math.min(n,this.maxHeight);return r>n&&(l=Math.min(r,this.maxHeight)),`${l-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),g(this,Nt,(e,t)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1})),g(this,Pi,e=>{a(this,Nt).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),g(this,Ni,e=>{e.preventDefault(),e.stopPropagation(),this.value=void 0}),g(this,Co,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const s=e.currentTarget;if(this.options.forEach(r=>r.hidden=!1),!s.value)return;this.options.filter(r=>!this.searchFilter(s.value,r)).forEach(r=>r.hidden=!0)}),g(this,ji,e=>{this._elListbox?.then(t=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),t.focus();return}})}),g(this,Yi,e=>{if(e.key==="Tab"&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),g(this,Ui,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),g(this,Xo,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),g(this,Ko,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),g(this,Ts,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&a(this,Nt).call(this,!1,"close")&&(this.open=!1)}),g(this,ci,e=>{e.key==="Tab"&&!this.searchable&&a(this,Nt).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())})}get type(){return"gds-dropdown"}get options(){return a(this,ss)?Array.from(a(this,ss)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(a(this,ss))return Array.from(a(this,ss)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){let e;return Array.isArray(this.value)?e=this.value.slice(0,5).reduce((t,s)=>t+this.options.find(o=>o.value===s)?.innerText+", ","").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):e=this.options.find(t=>t.selected)?.innerText,e||this.placeholder?.innerText||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}render(){return v`
      ${F(!this.plain&&!this.hideLabel,()=>v`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${F(this.supportingText.length>0,()=>v`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${a(this,Hi)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[Da(8),_h()]:V.DefaultMiddleware}
        @gds-ui-state=${a(this,Pi)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${F(this.value&&this.multiple&&this.value.length>0,()=>v`<gds-badge
                rounded
                size=${this.size==="small"?"small":"default"}
                slot="lead"
                aria-label=${A(Od`${this.value.length} options selected`)}
              >
                ${this.value.length}</gds-badge
              >`)}
          ${F(this.clearable&&this.value&&!this.disabled,()=>v`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${this.size==="small"?"xs":"small"}
                label="${A("Clear selection")}"
                @click=${a(this,Ni)}
                slot="trail"
              >
                <gds-icon-cross-large></gds-icon-cross-large>
              </gds-button>`)}
          ${F(this.combobox&&!this.multiple,()=>a(this,Gi).call(this))}
          ${F(!this.combobox||this.multiple,()=>a(this,Ii).call(this))}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${F(this.searchable,()=>v`<input
              id="searchinput"
              type="text"
              aria-label="${A("Filter available options")}"
              placeholder="${A("Search")}"
              @keydown=${a(this,ji)}
              @input=${a(this,Co)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${G(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${f(this,vs,Pa)}"
          @gds-focus="${a(this,Ui)}"
          @keydown=${a(this,Yi)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${F(f(this,vs,Ha).call(this),()=>v`
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
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){if(this.requestUpdate(),U(this,ss,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:!this.combobox&&!this.placeholder&&this.options.find(e=>this.compareWith(e.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?f(this,vs,Na).call(this):(f(this,vs,ja).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t?.scrollIntoView({block:"center"})})}};ss=new WeakMap;vs=new WeakSet;Ha=function(){return!this.plain};Gi=new WeakMap;Ii=new WeakMap;Hi=new WeakMap;Nt=new WeakMap;Pi=new WeakMap;Ni=new WeakMap;Co=new WeakMap;ji=new WeakMap;Yi=new WeakMap;Ui=new WeakMap;Pa=function(){this._elListbox.then(e=>{this.multiple?this.value=e.selection.map(t=>t.value):(this.value=e.selection[0]?.value,a(this,Nt).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0))),a(this,Xo).call(this),a(this,Ko).call(this)})};Xo=new WeakMap;Ko=new WeakMap;Na=function(){this.addEventListener("blur",a(this,Ts)),this.addEventListener("gds-blur",a(this,Ts)),this.addEventListener("keydown",a(this,ci))};ja=function(){this.removeEventListener("blur",a(this,Ts)),this.removeEventListener("gds-blur",a(this,Ts)),this.removeEventListener("keydown",a(this,ci))};Ts=new WeakMap;ci=new WeakMap;X.styles=[j,di,Wh];i([d({attribute:"supporting-text"})],X.prototype,"supportingText",2);i([d({type:Boolean,reflect:!0})],X.prototype,"open",2);i([d({type:Boolean,reflect:!0})],X.prototype,"searchable",2);i([d({type:Boolean,reflect:!0})],X.prototype,"multiple",2);i([d({type:Boolean,reflect:!0})],X.prototype,"clearable",2);i([d({type:Boolean,reflect:!0})],X.prototype,"combobox",2);i([d()],X.prototype,"compareWith",2);i([d()],X.prototype,"searchFilter",2);i([d({type:Boolean,attribute:"sync-popover-width"})],X.prototype,"syncPopoverWidth",2);i([d({type:Number,attribute:"max-height"})],X.prototype,"maxHeight",2);i([d({reflect:!0})],X.prototype,"size",2);i([d({type:Boolean,attribute:"hide-label"})],X.prototype,"hideLabel",2);i([d({type:Boolean})],X.prototype,"plain",2);i([d({type:Boolean})],X.prototype,"disableMobileStyles",2);i([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],X.prototype,"showExtendedSupportingText",2);i([q("#trigger")],X.prototype,"_elTriggerBtn",2);i([Vt("#listbox")],X.prototype,"_elListbox",2);i([q("#searchinput")],X.prototype,"_elSearchInput",2);i([oi({attributes:!0,childList:!0,subtree:!0,characterData:!0})],X.prototype,"_handleLightDOMChange",1);i([N("value")],X.prototype,"_handleValueChange",1);i([N("open")],X.prototype,"_handleOpenChange",1);X=i([$("gds-dropdown",{dependsOn:[Ye,je,xe,gs,V,Ve,At,Ze]}),Me()],X);const Kr={fromAttribute(e){return new Date(e)},toAttribute(e){return e.toISOString()}},Rh={fromAttribute(e){return e.split(",").map(t=>new Date(t.trim()))},toAttribute(e){return JSON.stringify(e.map(t=>t.toISOString()))}},Fh={fromAttribute(e){return e.split(",")},toAttribute(e){return Array.isArray(e)?e.join(","):e}};let Lt=class extends se{};Lt._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Lt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>';Lt._name="calendar";Lt._width=24;Lt._height=24;Lt._viewBox="0 0 24 24";Lt=i([$("gds-icon-calendar")],Lt);let Bt=class extends se{};Bt._regularSVG='<path d="M7.75 4.75H3.75V9.25M7.75 4.75H16.25M7.75 4.75V2.75M16.25 4.75H20.25V9.25M16.25 4.75V2.75M11.25 20.25H3.75V9.25M3.75 9.25H20.25M20.25 9.25V11.25M17.75 14.75V18M17.75 18V21.25M17.75 18H14.5M17.75 18H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Bt._solidSVG='<path d="M8.5 2.75C8.5 2.33579 8.16421 2 7.75 2C7.33579 2 7 2.33579 7 2.75V4H3.75C3.33579 4 3 4.33579 3 4.75V20.25C3 20.6642 3.33579 21 3.75 21H11.25C11.6642 21 12 20.6642 12 20.25C12 19.8358 11.6642 19.5 11.25 19.5H4.5V10H19.5V11.25C19.5 11.6642 19.8358 12 20.25 12C20.6642 12 21 11.6642 21 11.25V4.75C21 4.33579 20.6642 4 20.25 4H17V2.75C17 2.33579 16.6642 2 16.25 2C15.8358 2 15.5 2.33579 15.5 2.75V4H8.5V2.75Z" fill="currentColor"/><path d="M18.5 14.75C18.5 14.3358 18.1642 14 17.75 14C17.3358 14 17 14.3358 17 14.75V17.25H14.5C14.0858 17.25 13.75 17.5858 13.75 18C13.75 18.4142 14.0858 18.75 14.5 18.75H17V21.25C17 21.6642 17.3358 22 17.75 22C18.1642 22 18.5 21.6642 18.5 21.25V18.75H21C21.4142 18.75 21.75 18.4142 21.75 18C21.75 17.5858 21.4142 17.25 21 17.25H18.5V14.75Z" fill="currentColor"/>';Bt._name="calender-add";Bt._width=24;Bt._height=24;Bt._viewBox="0 0 24 24";Bt=i([$("gds-icon-calender-add")],Bt);let pt=class extends se{};pt._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';pt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>';pt._name="chevron-right";pt._width=24;pt._height=24;pt._viewBox="0 0 24 24";pt=i([$("gds-icon-chevron-right")],pt);var kt,$o,Eo,Mo,To,qi,Zi,Xi,fe,Ya,js,Ki,Ys,Do;let Xe=class extends R{constructor(){super(...arguments),g(this,fe),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=f(this,fe,Ki).call(this,this.value,this.length),g(this,kt,""),g(this,$o,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=f(this,fe,Ys).call(this,e+1),f(this,fe,js).call(this)}),g(this,Eo,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=f(this,fe,Ys).call(this,e-1),f(this,fe,js).call(this)}),g(this,Mo,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),g(this,To,()=>{f(this,fe,Do).call(this)}),g(this,qi,()=>{a(this,kt)!==""&&(f(this,fe,Do).call(this),this.value=f(this,fe,Ys).call(this,parseInt(this.value.toString())),f(this,fe,js).call(this))}),g(this,Zi,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?a(this,Eo).call(this):a(this,$o).call(this)}),g(this,Xi,e=>{let t=!1;if(e.key==="ArrowUp")a(this,$o).call(this),t=!0;else if(e.key==="ArrowDown")a(this,Eo).call(this),t=!0;else{const s=parseInt(e.key);isNaN(s)||(a(this,kt).length<this.length&&(U(this,kt,a(this,kt)+s.toString()),this.value=parseInt(a(this,kt))),a(this,kt).length===this.length&&(this.value=f(this,fe,Ys).call(this,this.value),f(this,fe,Do).call(this),f(this,fe,Ya).call(this),f(this,fe,js).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",a(this,Zi)),this.addEventListener("keydown",a(this,Xi)),this.addEventListener("blur",a(this,qi)),this.addEventListener("focus",a(this,To)),this.addEventListener("click",a(this,Mo)),this.addEventListener("mousedown",a(this,Mo))}focus(e){super.focus(e),a(this,To).call(this)}render(){return v`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=f(this,fe,Ki).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};kt=new WeakMap;$o=new WeakMap;Eo=new WeakMap;Mo=new WeakMap;To=new WeakMap;qi=new WeakMap;Zi=new WeakMap;Xi=new WeakMap;fe=new WeakSet;Ya=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof Xe){e.focus();break}e=e.nextElementSibling}};js=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};Ki=function(e,t){return String(e).padStart(t,"0")};Ys=function(e){return Math.max(this.min,Math.min(this.max,e))};Do=function(){U(this,kt,"")};Xe.formAssociated=!0;i([d({type:Number})],Xe.prototype,"value",2);i([d({type:Number})],Xe.prototype,"length",2);i([d({type:Number,attribute:"aria-valuemin"})],Xe.prototype,"min",2);i([d({type:Number,attribute:"aria-valuemax"})],Xe.prototype,"max",2);i([le()],Xe.prototype,"displayValue",2);i([N("value")],Xe.prototype,"_refreshDisplayValue",1);Xe=i([$("gds-date-part-spinner")],Xe);const Gh=T`
  @layer base, reset;

  @layer base {
    #calendar-button::part(_button) {
      outline-offset: -1px;
    }

    .spinners {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      inline-size: 12ch;
      gap: var(--gds-sys-space-4xs);
      font: var(--gds-sys-text-detail-regular-m);
    }

    :host([size='small']) .spinners {
      font: var(--gds-sys-text-detail-regular-s);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      outline: none;
      padding-block: var(--gds-sys-space-3xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;
      padding: var(--gds-sys-space-3xs);
      margin: calc(-1 * var(--gds-sys-space-3xs));
      border-radius: var(--gds-sys-radius-2xs);

      &:focus-visible {
        background-color: var(--gds-sys-color-l3-neutral-01);
        color: var(--gds-sys-color-content-inversed);
      }
    }
  }
`;var Ih=Gh,Us,Z,Ua,qa,Jo,Za,Xa,Ji,os,ms,Ka,Qi,er,tr,sr,or,ir,rr,nr,ar,Qo,lr,dr,cr,hr,wt,Ja,Qa;let P=class extends ie{constructor(){super(),g(this,Z),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=f(this,Z,cr).call(this,"y-m-d"),g(this,Us),g(this,Ka,e=>{this._elTrigger.then(t=>{e.relatedTarget?.parentElement!==e.target&&document.getSelection()?.removeAllRanges()})}),g(this,Qi,e=>{this._elTrigger.then(t=>{document.getSelection()?.removeAllRanges();const s=new Range;s.setStart(t.firstChild,0),s.setEnd(t.lastChild,4),document.getSelection()?.addRange(s)})}),g(this,er,e=>{this._elFieldAsync.then(t=>{e.currentTarget===t&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),g(this,tr,e=>{this._elFieldAsync.then(t=>{if(e.currentTarget!==t)return;e.preventDefault();const s=e.clipboardData?.getData("text/plain");if(!s)return;let o=new Date("-");const r="Invalid Date",n=s.split(this._dateFormatLayout.delimiter);if(n.length===3){const l=this._dateFormatLayout.layout,c=parseInt(n[l.findIndex(m=>m.token==="y")]),h=parseInt(n[l.findIndex(m=>m.token==="m")])-1,p=parseInt(n[l.findIndex(m=>m.token==="d")]);!isNaN(c)&&!isNaN(h)&&!isNaN(p)&&(o=new Date(`${c}-${h+1}-${p}`))}o.toString()===r&&(o=new Date(s),o.toString()===r)||(this.value=o,f(this,Z,os).call(this))})}),g(this,sr,e=>{this._elSpinners[0]?.focus()}),g(this,or,e=>{e.stopPropagation(),this.value=new Date(e.detail),this.open=!1,f(this,Z,os).call(this),f(this,Z,ms).call(this)}),g(this,ir,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),g(this,rr,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),g(this,nr,e=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),g(this,ar,e=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),g(this,Qo,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),f(this,Z,ms).call(this)}),g(this,lr,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;if(!t){this.value=void 0,f(this,Z,os).call(this);return}!Gt(t||new Date(0),a(this,Us)||new Date(0))&&(this.value=new Date(t),f(this,Z,os).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=a(this,Us),f(this,Z,ms).call(this))}}),g(this,dr,e=>{const t=Array.from(this._elSpinners).findIndex(s=>s===e.target);if(e.key==="ArrowRight"){const s=this._elSpinners[t+1];s&&s.focus()}if(e.key==="ArrowLeft"){const s=this._elSpinners[t-1];s&&s.focus()}}),g(this,hr,(e,t)=>{a(this,wt)[t]=e;const s=new Date;s.setFullYear(parseInt(a(this,wt).year)),s.setMonth(parseInt(a(this,wt).month)-1),s.setDate(parseInt(a(this,wt).day)),s.setHours(12,0,0,0),s.toString()!=="Invalid Date"&&(this.value=s,f(this,Z,os).call(this),f(this,Z,ms).call(this))}),g(this,wt,{year:"yyyy",month:"mm",day:"dd"}),Xe.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(e){super.value=e}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=f(this,Z,cr).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),be.instance.apply(this,"gds-datepicker")}focus(e){this._getValidityAnchor()?.focus(e)}render(){return v`
      ${F(!this.plain,()=>v`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${F(this.supportingText.length>0,()=>v`<span slot="supporting-text" id="supporting-text">
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
        @click=${a(this,sr)}
        @copy=${a(this,er)}
        @paste=${a(this,tr)}
        id="field"
      >
        <div class="spinners">
          ${Ch($h(this._dateFormatLayout.layout,(e,t)=>v`<gds-date-part-spinner
                  id="spinner-${t}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${a(this,wt)[e.name]}
                  aria-valuemin=${f(this,Z,Xa).call(this,e.name)}
                  aria-valuemax=${f(this,Z,Ji).call(this,e.name)}
                  aria-label=${f(this,Z,Za).call(this,e.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${f(this,Z,Ji).call(this,e.name).toString().length}
                  @keydown=${a(this,dr)}
                  @change=${s=>a(this,hr).call(this,s.detail.value,e.name)}
                  @focus=${a(this,Qi)}
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
          aria-label="${A("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          ${F(this.size==="small",()=>v`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`,()=>v`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${F(f(this,Z,Ua).call(this),()=>v`<gds-form-control-footer
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
        @gds-ui-state=${a(this,lr)}
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
              @click=${a(this,ar)}
              aria-label=${A("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${a(this,ir)}
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
              @change=${a(this,rr)}
              .maxHeight=${300}
              label="${A("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${Eh(a(this,Z,Ja),e=>e,e=>v`<gds-option value=${e}>${e}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${a(this,nr)}
              aria-label=${A("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${a(this,or)}
            @gds-date-focused=${a(this,Qo)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${F(this.clearable||!this.hideTodayButton,()=>v`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                ${F(this.clearable,()=>v` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,f(this,Z,ms).call(this),f(this,Z,os).call(this)}}
                      aria-label=${A("Clear selected date")}
                    >
                      ${A("Clear")}
                    </gds-button>`)}
                ${Ah(f(this,Z,qa).call(this),ye)}
                ${F(!this.hideTodayButton,()=>v` <gds-button
                      id="today-button"
                      rank="primary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),f(this,Z,Jo).call(this,new Date)}}
                      aria-label=${A("Select today's date")}
                    >
                      ${A("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){U(this,wt,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),o=e.getDate().toString().padStart(2,"0");U(this,wt,{year:t,month:s,day:o})}_handleOpenChange(){this.open&&(U(this,Us,this.value),this._elCalendar.then(e=>e.focus()))}};Us=new WeakMap;Z=new WeakSet;Ua=function(){return!this.plain};qa=async function(){const e=await this.getFocusedDate();let t="",s;return e&&e>this.max?(t=A("Last available date"),s=o=>{o.stopPropagation(),f(this,Z,Jo).call(this,this.max)}):e&&e<this.min&&(t=A("First available date"),s=o=>{o.stopPropagation(),f(this,Z,Jo).call(this,this.min)}),v`${F(t.length>0,()=>v`<gds-button rank="tertiary" size="small" @click=${s}>
          ${t}
        </gds-button>`,()=>ye)}`};Jo=function(e){const t=new Date(e);this._elCalendar.then(s=>s.focusedDate=t).then(a(this,Qo))};Za=function(e){return`${{year:A("Year"),month:A("Month"),day:A("Day")}[e]} ${this.label}`};Xa=function(e){return{year:1900,month:1,day:1}[e]};Ji=function(e){return{year:9999,month:12,day:31}[e]};os=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};ms=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};Ka=new WeakMap;Qi=new WeakMap;er=new WeakMap;tr=new WeakMap;sr=new WeakMap;or=new WeakMap;ir=new WeakMap;rr=new WeakMap;nr=new WeakMap;ar=new WeakMap;Qo=new WeakMap;lr=new WeakMap;dr=new WeakMap;cr=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),o=s.findIndex(h=>h==="y"),r=s.findIndex(h=>h==="m"),n=s.findIndex(h=>h==="d");if(o===-1||r===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const c=[o,r,n].sort((h,p)=>h-p).map(h=>s[h]).map(h=>({token:h,name:h==="y"?"year":h==="m"?"month":"day"}));return{delimiter:t,layout:c}};hr=new WeakMap;wt=new WeakMap;Ja=function(){const e=this.min.getFullYear(),t=this.max.getFullYear(),s=a(this,Z,Qa),o=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield o);for(let r=e;r<=t;r++)yield r}}};Qa=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};P.styles=[j,di,Ih];i([d({converter:Kr})],P.prototype,"value",1);i([d({converter:Kr})],P.prototype,"min",2);i([d({converter:Kr})],P.prototype,"max",2);i([d({type:Boolean})],P.prototype,"open",2);i([d({attribute:"supporting-text"})],P.prototype,"supportingText",2);i([d({type:String})],P.prototype,"size",2);i([d({type:Boolean})],P.prototype,"plain",2);i([d({type:Boolean,attribute:"show-week-numbers"})],P.prototype,"showWeekNumbers",2);i([d({type:Boolean,attribute:"hide-label"})],P.prototype,"hideLabel",2);i([d({type:Boolean,attribute:"clearable"})],P.prototype,"clearable",2);i([d({type:Boolean,attribute:"hide-today-button"})],P.prototype,"hideTodayButton",2);i([d()],P.prototype,"dateformat",1);i([d({type:Boolean,attribute:"disabled-weekends"})],P.prototype,"disabledWeekends",2);i([d({converter:Rh,attribute:"disabled-dates"})],P.prototype,"disabledDates",2);i([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],P.prototype,"showExtendedSupportingText",2);i([Vt("#calendar-button")],P.prototype,"test_calendarButton",2);i([q("#clear-button")],P.prototype,"test_clearButton",2);i([q("#today-button")],P.prototype,"test_todayButton",2);i([le()],P.prototype,"_focusedMonth",2);i([le()],P.prototype,"_focusedYear",2);i([le()],P.prototype,"_dateFormatLayout",2);i([Vt("#calendar")],P.prototype,"_elCalendar",2);i([Vt("#calendar-button")],P.prototype,"_elTrigger",2);i([Vt("#field")],P.prototype,"_elFieldAsync",2);i([Xl("[role=spinbutton]")],P.prototype,"_elSpinners",2);i([q("#field")],P.prototype,"_elField",2);i([N("value")],P.prototype,"_handleValueChange",1);i([N("open")],P.prototype,"_handleOpenChange",1);P=i([Me()],P);let ur=class extends _e(Ee(we(P))){};ur=i([$("gds-datepicker",{dependsOn:[Mt,at,X,Q,V,Lt,Bt,dt,pt]})],ur);const Hh=T`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;

      --_margin: var(--gds-sys-space-l);
    }

    dialog {
      transition: transform var(--gds-sys-motion-duration-fast)
        cubic-bezier(var(--gds-sys-motion-easing-ease-out));
      background: transparent;
      padding: 0;
      border-width: 0;
      overflow: visible;
      max-width: calc(100vw - var(--_margin));
      max-height: 100vh;
      display: flex;
      width: 400px;

      @starting-style {
        opacity: 0;
        transform: translateY(-16px);
        &::backdrop {
          opacity: 0;
        }
      }

      &::backdrop {
        transition: all var(--gds-sys-motion-duration-fast)
          cubic-bezier(var(--gds-sys-motion-easing-ease-out));
        background: rgba(100, 100, 100, 0.4);
      }
    }

    dialog > * {
      flex-grow: 1;
    }

    dialog.default.placement-initial {
      margin: auto;
      --_margin: 0px;
    }

    dialog.default.placement-top {
      margin: var(--gds-sys-space-l) auto auto;
    }

    dialog.default.placement-bottom {
      margin: auto auto var(--gds-sys-space-l) auto;
    }

    dialog.default.placement-left {
      margin: auto var(--gds-sys-space-l) auto auto;
    }
    dialog.default.placement-right {
      margin: auto auto auto var(--gds-sys-space-l);
    }

    dialog.slide-out {
      --_in: var(--gds-sys-space-m);
      --_margin: var(--gds-sys-space-l);

      height: auto;

      &.placement-initial,
      &.placement-right {
        inset: var(--_in);

        @media (min-width: 648px) {
          --_in: var(--gds-sys-space-l);
          inset: var(--_in) var(--_in) var(--_in) auto;
        }

        @starting-style {
          transform: translateX(var(--gds-sys-space-6xl));
        }
      }

      &.placement-left {
        @starting-style {
          transform: translateX(calc(-1 * var(--gds-sys-space-6xl)));
        }
        inset: var(--_in);

        @media (min-width: 648px) {
          --_in: var(--gds-sys-space-l);
          inset: var(--_in) auto var(--_in) var(--_in);
        }
      }

      &.placement-top {
        @starting-style {
          transform: translateY(calc(-1 * var(--gds-sys-space-6xl)));
        }
        inset: var(--_in) var(--_in) auto var(--_in);
      }

      &.placement-bottom {
        @starting-style {
          transform: translateY(calc(var(--gds-sys-space-6xl)));
        }
        inset: auto var(--_in) var(--_in) var(--_in);
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
      font: var(--gds-sys-text-heading-s);
    }
  }
`;var Ph=Hh;const pr=new Set;function Nh(){jn.instance.injectGlobalStyles("dialog-scroll-lock",T`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function jh(e){if(pr.add(e),!document.documentElement.classList.contains("gds-scroll-lock")){const t=Yh()+Uh();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),t<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${t}px`)}}function Vn(e){pr.delete(e),pr.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function Yh(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Uh(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}var is,gr,Ao,fr,Lo,yr,el,Jr,qs;Nh();let Be=class extends _e(si(Un(R))){constructor(){super(...arguments),g(this,yr),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,g(this,is),g(this,gr,e=>{const s=e.target.returnValue;if(s!=="prop-change"){if(!a(this,Ao).call(this,s))return;this.close(s||"native-close");return}this.close(s||"native-close")}),g(this,Ao,e=>(this.dispatchCustomEvent("gds-close",{detail:e}),a(this,Lo).call(this,e))),g(this,fr,e=>(this.dispatchCustomEvent("gds-show",{detail:e}),a(this,Lo).call(this,e))),g(this,Lo,e=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:e,open:this.open}})),g(this,Jr,e=>{this.show("slotted-trigger")}),g(this,qs,e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const r=s.getBoundingClientRect(),n=r.top<=t.clientY&&t.clientY<=r.top+r.height&&r.left<=t.clientX&&t.clientX<=r.left+r.width,l="click-outside";!n&&a(this,Ao).call(this,l)&&this.close(l)}})}show(e){this.open=!0,e&&a(this,fr).call(this,e)}close(e){U(this,is,e),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),Vn(this)}render(){return v`<slot
        name="trigger"
        @slotchange=${f(this,yr,el)}
      ></slot>
      ${F(this.open,()=>v`<dialog
            @close=${a(this,gr)}
            class=${me({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${G(this.heading)}
          >
            <gds-card
              class="card"
              variant="secondary"
              box-shadow="xl"
              gap="l"
              border-radius="s"
            >
              <slot name="dialog">
                <gds-flex justify-content="space-between">
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
                <gds-div
                  id="content"
                  flex="1"
                  overflow=${G(this.scrollable)?"auto":ye}
                >
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
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){this.open?(U(this,is,void 0),this.updateComplete.then(()=>{this._elDialog?.showModal(),jh(this),document.removeEventListener("click",a(this,qs)),requestAnimationFrame(()=>document.addEventListener("click",a(this,qs))),sd&&this._elDialog?.focus()})):(U(this,is,a(this,is)||"prop-change"),this._elDialog?.close(a(this,is)),Vn(this),document.removeEventListener("click",a(this,qs)),this.requestUpdate("open"))}};is=new WeakMap;gr=new WeakMap;Ao=new WeakMap;fr=new WeakMap;Lo=new WeakMap;yr=new WeakSet;el=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const e=this._elTriggerSlot.assignedElements()[0];e?.addEventListener("click",a(this,Jr)),e?.setAttribute("aria-haspopup","dialog")}};Jr=new WeakMap;qs=new WeakMap;Be.styles=[Ph];Be.styleExpressionBaseSelector=".card";i([d({type:Boolean,reflect:!0})],Be.prototype,"open",2);i([d()],Be.prototype,"heading",2);i([d()],Be.prototype,"variant",2);i([d()],Be.prototype,"placement",2);i([d({type:Boolean})],Be.prototype,"scrollable",2);i([q("dialog")],Be.prototype,"_elDialog",2);i([q('slot[name="trigger"]')],Be.prototype,"_elTriggerSlot",2);i([N("open")],Be.prototype,"_handleOpenChange",1);Be=i([$("gds-dialog",{dependsOn:[at,cs,z,Mt,ut]}),Me()],Be);const qh=T`
  :host {
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--_size);
  }

  hr {
    width: 100%;
    height: 1px;
    min-height: 1px;
    max-height: 1px;
    border: 0;
    margin: 0;
    padding: 0;
    background: var(--_color, currentColor);
    box-sizing: border-box;
  }
`;var Zh=qh;let qt=class extends R{constructor(){super(...arguments),this.role=null}render(){return v`<hr role=${this.role||ye} />`}};qt.styles=[j,Zh];i([_({...ro("border"),property:"--_color"})],qt.prototype,"color",2);i([_({property:"--_size",valueTemplate:e=>`var(--gds-sys-space-${e})`})],qt.prototype,"size",2);i([_()],qt.prototype,"opacity",2);i([d()],qt.prototype,"role",2);qt=i([$("gds-divider")],qt);function Qr(){return(e,t,s)=>{const o=e.connectedCallback,r=e.disconnectedCallback;e.connectedCallback=function(){o?.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{s.value?.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){r?.call(this),this.__resizeObservers[t].disconnect()}}}const Xh=T`
  @layer base, reset, transitional-styles;
  @layer base {
    .icon {
      width: 1rem;
    }
  }
`;let Zt=class extends R{constructor(){super(...arguments),this.selected=!1,this.size="large"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),be.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return v`<gds-button
      class="btn"
      .size=${this.size==="large"?"medium":"small"}
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${me(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        size="1rem"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};Zt.styles=[Xh];i([d({reflect:!0,type:Boolean})],Zt.prototype,"selected",2);i([d()],Zt.prototype,"value",2);i([d({reflect:!0,type:String})],Zt.prototype,"size",2);Zt=i([$("gds-filter-chip",{dependsOn:[at,Ve]})],Zt);const Kh=T`
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
`;var Jh=Kh,br,vr,Bo,Oo,tl,sl;let Re=class extends ie{constructor(){super(...arguments),g(this,Oo),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,g(this,br,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),g(this,vr,3),g(this,Bo,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return v`<div
      class="chips ${me(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${a(this,br)}
        @slotchange=${f(this,Oo,sl)}
        role="none"
      ></slot>
    </div>`}focus(e){this.chips[0]?.focus(e)}_getValidityAnchor(){return this.shadowRoot?.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=f(this,Oo,tl).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*a(this,vr)&&(this._collapsed=!0,U(this,Bo,s)),s>a(this,Bo)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})}))}};br=new WeakMap;vr=new WeakMap;Bo=new WeakMap;Oo=new WeakSet;tl=function(){return this.chips[0]?.offsetHeight||0};sl=function(){const e=this.chips.find(t=>t.selected)?.value;e&&(this.value=e)};Re.styles=[Jh];i([d({converter:Fh})],Re.prototype,"value",1);i([d({type:Boolean})],Re.prototype,"multiple",2);i([d()],Re.prototype,"label",2);i([d({type:Boolean,attribute:"row-collapse"})],Re.prototype,"rowCollapse",2);i([le()],Re.prototype,"_collapsed",2);i([q("slot")],Re.prototype,"_elSlot",2);i([Qr()],Re.prototype,"_handleResize",1);i([N("value")],Re.prototype,"_updateSelectedFromValue",1);Re=i([$("gds-filter-chips",{dependsOn:[Zt]})],Re);const Qh=T`
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
`;var eu=Qh;let fs=class extends z{render(){return v`<slot></slot>`}};fs.styles=[j,eu];i([_({property:"--_c"})],fs.prototype,"columns",2);i([_({...ks,styleTemplate:(e,t)=>{const s=t[0];return`--_gap-column: ${t[1]||s}; --_gap-row: ${s};`}})],fs.prototype,"gap",2);i([_({property:"--_col-width",valueTemplate:e=>`${isNaN(e)?e:`${e}px`}`})],fs.prototype,"auto-columns",2);fs=i([$("gds-grid")],fs);let ei=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return v`<slot></slot>`}};ei=i([$("gds-list-item")],ei);let ti=class extends R{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),be.instance.apply(this,"gds-grouped-list")}render(){return v`${F(this.label,()=>v`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};i([d()],ti.prototype,"label",2);ti=i([$("gds-grouped-list",{dependsOn:[ei]})],ti);let Ot=class extends se{};Ot._regularSVG='<path d="M19.25 9.25V17.25M15.25 17.25V9.25M4.75 9.25V17.25M8.75 17.25V9.25M2.75 7.17308L12 2.5L21.25 7.17308V9.25H2.75V7.17308ZM2.75 20.25H21.25L20.25 17.25H3.75L2.75 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>';Ot._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3382 1.83058C12.1255 1.72314 11.8745 1.72314 11.6618 1.83058L2.41181 6.50365C2.15926 6.63125 2.00001 6.89012 2.00001 7.17308V9.25C2.00001 9.66421 2.33579 10 2.75001 10H4.00001V16.5H3.75001C3.42718 16.5 3.14058 16.7066 3.03849 17.0128L2.03849 20.0128C1.96226 20.2415 2.00061 20.493 2.14157 20.6885C2.28254 20.8841 2.50892 21 2.75001 21H21.25C21.4911 21 21.7175 20.8841 21.8584 20.6885C21.9994 20.493 22.0378 20.2415 21.9615 20.0128L20.9615 17.0128C20.8594 16.7066 20.5728 16.5 20.25 16.5H20V10H21.25C21.6642 10 22 9.66421 22 9.25V7.17308C22 6.89012 21.8408 6.63125 21.5882 6.50365L12.3382 1.83058ZM16 10H18.5V16.5H16V10ZM8.00001 16.5H5.50001V10H8.00001V16.5ZM9.50001 16.5V10H14.5V16.5H9.50001Z" fill="currentColor"/>';Ot._name="bank";Ot._width=24;Ot._height=24;Ot._viewBox="0 0 24 24";Ot=i([$("gds-icon-bank")],Ot);let zt=class extends se{};zt._regularSVG='<path d="M6.75 12H17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';zt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 11.5858 6.33579 11.25 6.75 11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H6.75C6.33579 12.75 6 12.4142 6 12Z" fill="currentColor"/>';zt._name="minus-small";zt._width=24;zt._height=24;zt._viewBox="0 0 24 24";zt=i([$("gds-icon-minus-small")],zt);const tu=T`
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
`;var su=tu;let gt=class extends Fr(_e(si(R))){render(){return v`<img src="${this.src}" alt="${this.alt}" />`}};gt.styles=[j,su];i([_()],gt.prototype,"aspect-ratio",2);i([_({property:"border-radius",valueTemplate:e=>`var(--gds-sys-space-${e})`})],gt.prototype,"border-radius",2);i([_({selector:"img"})],gt.prototype,"object-fit",2);i([_({selector:"img"})],gt.prototype,"object-position",2);i([d()],gt.prototype,"src",2);i([d()],gt.prototype,"alt",2);gt=i([$("gds-img")],gt);const ou=T``;var iu=ou,$t,ol,en,tn,mr,sn,il,rl,nl,al,ll,dl;let ee=class extends ie{constructor(){super(),g(this,$t),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autofocus=!1,this.spellcheck=!0,g(this,en,e=>{const t=e.target;this.value=t.value}),g(this,tn,e=>{const t=e.target;this.value=t.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),g(this,mr,()=>{this.elInputAsync.then(e=>e.focus())}),g(this,sn,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}focus(e){this._getValidityAnchor()?.focus(e)}render(){return v`
      ${F(!this.plain,()=>v`<gds-form-control-header class="size-${this.size}">
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
        @click=${a(this,mr)}
        id="field"
      >
        ${f(this,$t,il).call(this)}
      </gds-field-base>
      ${F(f(this,$t,ol).call(this),()=>v` <gds-form-control-footer
            class="size-${this.size}"
            .charCounter=${a(this,$t,dl)?this.maxlength-(this.value?.length||0):void 0}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_getValidityAnchor(){return this.elInput}};$t=new WeakSet;ol=function(){return!this.plain};en=new WeakMap;tn=new WeakMap;mr=new WeakMap;sn=new WeakMap;il=function(){return[f(this,$t,rl).call(this),f(this,$t,al).call(this),f(this,$t,ll).call(this),f(this,$t,nl).call(this)].map(t=>v`${t}`)};rl=function(){return v` <slot slot="lead" name="lead"></slot> `};nl=function(){return v`<slot slot="trail" name="trail"></slot>`};al=function(){return v`
      <input
        class="native-control"
        @input=${a(this,en)}
        @change=${a(this,tn)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-label=${this.plain&&this.label||ye}
        placeholder=" "
        type=${this.type}
        min=${G(this.min)}
        max=${G(this.max)}
        step=${G(this.step)}
        autocapitalize=${G(this.autocapitalize)}
        autocomplete=${G(this.autocomplete)}
        autocorrect=${G(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${G(this.enterkeyhint)}
        inputmode=${G(this.inputmode)}
        ?required=${this.required}
      />
    `};ll=function(){return this.clearable&&(this.value?.length||0)>0?v`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${A("Clear input")}"
        @click=${a(this,sn)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-large />
      </gds-button>`:ye};dl=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};ee.styles=[j,di,iu];i([d({attribute:"supporting-text"})],ee.prototype,"supportingText",2);i([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],ee.prototype,"showExtendedSupportingText",2);i([d({type:Boolean})],ee.prototype,"clearable",2);i([d({type:Number})],ee.prototype,"maxlength",2);i([d({type:String})],ee.prototype,"size",2);i([d({type:Boolean})],ee.prototype,"plain",2);i([d({reflect:!0})],ee.prototype,"type",2);i([d()],ee.prototype,"min",2);i([d()],ee.prototype,"max",2);i([d()],ee.prototype,"step",2);i([d()],ee.prototype,"autocapitalize",2);i([d()],ee.prototype,"autocorrect",2);i([d()],ee.prototype,"autocomplete",2);i([d({type:Boolean})],ee.prototype,"autofocus",2);i([d()],ee.prototype,"enterkeyhint",2);i([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],ee.prototype,"spellcheck",2);i([d()],ee.prototype,"inputmode",2);i([Vt("input")],ee.prototype,"elInputAsync",2);i([q("input")],ee.prototype,"elInput",2);ee=i([Me()],ee);let xr=class extends _e(Ee(we(ee))){};xr=i([$("gds-input",{dependsOn:[Ye,je,xe,Mt,at,Ze]})],xr);const ru=T`
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
`;var nu=ru,_r,cl;let Ke=class extends Ee(_e(we(R))){constructor(){super(...arguments),g(this,_r),this.href="",this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return Bs`
      <a
        href=${G(this.href)}
        target=${G(this.target)}
        rel=${G(this.rel||a(this,_r,cl))}
        download=${G(this.download)}
        aria-label=${this.label||ye}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};_r=new WeakSet;cl=function(){return this.target==="_blank"?"noreferrer noopener":void 0};Ke.styles=[j,De(nu)];Ke.shadowRootOptions={mode:"open",delegatesFocus:!0};i([d()],Ke.prototype,"href",2);i([d()],Ke.prototype,"target",2);i([d()],Ke.prototype,"rel",2);i([d()],Ke.prototype,"label",2);i([d()],Ke.prototype,"download",2);i([_({valueTemplate:e=>e,selector:"a"})],Ke.prototype,"text-decoration",2);Ke=i([$("gds-link")],Ke);const au=T`
  :host {
    contain: strict;
  }

  [part='mask'] {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    mask-composite: intersect;
  }
`;var lu=au;let ft=class extends Mt{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.display="flex",this.inset="0"}render(){return Bs`<div part="mask"></div>
      <slot></slot>`}};ft.styles=[j,lu];i([_({selector:'[part="mask"]',valueTemplate:function(e){return Rr(e,"background",this.level)}})],ft.prototype,"background",2);i([_({valueTemplate:e=>{const[t]=e.split("/");return`linear-gradient(to ${t}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`},selector:'[part="mask"]'})],ft.prototype,"mask-image",2);i([_({valueTemplate:e=>e,selector:'[part="mask"]'})],ft.prototype,"mask-size",2);i([_({valueTemplate:e=>e,selector:'[part="mask"]'})],ft.prototype,"mask-repeat",2);i([_({valueTemplate:e=>e,selector:'[part="mask"]'})],ft.prototype,"mask-position",2);i([_({valueTemplate:e=>e,selector:'[part="mask"]'})],ft.prototype,"backdrop-filter",2);ft=i([$("gds-mask")],ft);const du=T`
  @layer tokens, core, a11y, disabled, variants, sizes, sets;

  @layer tokens {
    :host {
      --_gap: var(--gds-sys-space-xs);

      --_padding-inline: var(--gds-sys-space-m);
      --_padding-block: var(--gds-sys-space-xs);

      --_color-bg: transparent;
      --_color-text: var(--gds-sys-color-content-neutral-01);
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
      border-bottom-width: 2px;
      border-style: none;
      border-color: var(--_color-border);
      border-bottom-style: solid;
      box-sizing: border-box;
      color-scheme: dark light;
      color: var(--_color-text);
      cursor: pointer;
      display: inline-flex;
      font-family: inherit;
      font-size: var(--_font-size);
      font-weight: var(--_font-weight);
      gap: var(--_gap);
      height: 100%;
      inline-size: 100%;
      justify-content: space-between;
      justify-items: center;
      line-height: var(--_line-height);
      outline-color: transparent;
      outline-offset: -2px;
      outline-style: solid;
      outline-width: 2px;
      padding-block: var(--_padding-block);
      padding-inline: var(--_padding-inline);
      position: relative;
      transition-property: color, border-color;
      transition: all var(--gds-sys-motion-duration-fastest);

      &:focus-visible {
        border-color: transparent;
        border-radius: 6px;
        outline-color: currentColor;
        overflow: visible;
      }

      &:hover,
      &.selected:hover,
      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-05)
        );
        --_color-border: var(--gds-sys-color-border-interactive);
      }

      &.selected {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-06)
        );
        --_color-border: var(--gds-sys-color-border-strong);
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
    color: var(--gds-sys-color-content-disabled-01);
    pointer-events: none;
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .button {
        transition: none;
      }
    }
  }
`;var cu=du,Pt,xs,hl;let Oe=class extends _e(we(R)){constructor(){super(),g(this,Pt),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const e={button:!0,selected:this.selected,compact:this.compact},t=a(this,Pt,xs)?Ho`a`:Ho`button`;return Bs`
      <${t}
        class="${me(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${G(a(this,Pt,xs)?this.href:void 0)}
        target=${G(a(this,Pt,xs)?this.target:void 0)}
        rel=${G(a(this,Pt,xs)?this.rel||a(this,Pt,hl):void 0)}
        download=${G(a(this,Pt,xs)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${t}>
    `}};Pt=new WeakSet;xs=function(){return this.href.length>0};hl=function(){return this.target==="_blank"?"noreferrer noopener":void 0};Oe.styles=[j,cu];Oe.shadowRootOptions={mode:"open",delegatesFocus:!0};i([d({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);i([d()],Oe.prototype,"label",2);i([d()],Oe.prototype,"href",2);i([d()],Oe.prototype,"target",2);i([d()],Oe.prototype,"rel",2);i([d()],Oe.prototype,"download",2);i([d({type:Boolean,reflect:!0})],Oe.prototype,"compact",2);i([d({type:Boolean,reflect:!0})],Oe.prototype,"selected",2);Oe=i([$("gds-menu-button")],Oe);const hu=T`
  :host {
    /* Font Sizes */
    --_font-label: var(--gds-sys-text-detail-book-m);
    --_font-supporting-text: var(--gds-sys-text-detail-s);
    font: var(--_font-label);

    /* Color */
    --_radio-label-color: var(--gds-sys-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --_radio-label-color: var(--gds-sys-color-content-negative-01);
  }

  :host([size='small']) {
    --_font-label: var(--gds-sys-text-detail-book-s);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-s);
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
`;var ve,wr,ul,on,pl,gl,kr,fl,yl,bl,vl;let Je=class extends ie{constructor(){super(...arguments),g(this,ve),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0,this.updateComplete.then(()=>{this._syncRadioStates(),f(this,ve,wr).call(this)}),this.addEventListener("invalid",this._syncRadioStates)}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}focus(e){this._getValidityAnchor()?.focus(e)}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected&&(this._syncRadioStates(),this.updateComplete.then(()=>{f(this,ve,wr).call(this)}))}_syncRadioStates(){this._isConnected&&this.radios.forEach(e=>{e.checked=e.value===this.value,e.size=this.size,e.invalid=this.invalid})}render(){const e={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return v`<div
      role="radiogroup"
      id="radiogroup"
      class=${me(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${f(this,ve,fl).call(this)}
    </div>`}};ve=new WeakSet;wr=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(t=>t.checked);e?(e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter(t=>!t.checked).forEach(t=>t.setAttribute("tabindex","-1"))};ul=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(s=>s.checked),t=e||this.radios[0];t&&(t.focus(),e||(this.radios.forEach(s=>s.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))};on=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{composed:!0,bubbles:!0})),this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};pl=function(e){e.stopPropagation();const t=e.target;this.value=t.value,this._syncRadioStates(),f(this,ve,on).call(this)};gl=function(e){if(!this._isConnected)return;const t=this.radios.filter(o=>!o.disabled);if(t.length===0)return;let s=t.findIndex(o=>document.activeElement===o);switch(s===-1&&(s=t.findIndex(o=>o.checked),s===-1&&(s=0)),e.key){case"ArrowDown":case"ArrowRight":{e.preventDefault();const o=(s+1)%t.length;f(this,ve,kr).call(this,t[o]);break}case"ArrowUp":case"ArrowLeft":{e.preventDefault();const o=(s-1+t.length)%t.length;f(this,ve,kr).call(this,t[o]);break}default:return}};kr=function(e){!this._contentElement||!this._isConnected||(this.radios.forEach(t=>t.setAttribute("tabindex","-1")),e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),e.checked=!0,e.focus(),this.value=e.value,this._syncRadioStates(),f(this,ve,on).call(this))};fl=function(){return[f(this,ve,yl).call(this),f(this,ve,bl).call(this),f(this,ve,vl).call(this)].map(t=>v`${t}`)};yl=function(){if(this.label)return v` <gds-form-control-header
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
      </gds-form-control-header>`};bl=function(){return v` <div
      class="content"
      @keydown=${f(this,ve,gl)}
      @focus=${f(this,ve,ul)}
    >
      <slot @input=${f(this,ve,pl)}></slot>
    </div>`};vl=function(){return v` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};Je.styles=[j,hu];i([d()],Je.prototype,"size",2);i([d()],Je.prototype,"direction",2);i([d({attribute:"supporting-text"})],Je.prototype,"supportingText",2);i([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],Je.prototype,"showExtendedSupportingText",2);i([q(".content")],Je.prototype,"_contentElement",2);i([N("value")],Je.prototype,"_handleValueChange",1);i([N("invalid")],Je.prototype,"_syncRadioStates",1);Je=i([Me()],Je);let Sr=class extends we(Ee(_e(Je))){};Sr=i([$("gds-radio-group",{dependsOn:[Ye,je]})],Sr);const uu=T`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    cursor: default;
  }

  :host(:focus) {
    outline: none;
  }
`;var pu=uu,zo,Cr;let Qe=class extends R{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,g(this,zo,e=>{this.disabled||!this.value||!this.label||(e.preventDefault(),this.checked=!0,this.focus(),this.dispatchStandardEvent("input",{bubbles:!0}))}),g(this,Cr,e=>{this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.checked=!0,this.dispatchStandardEvent("input",{bubbles:!0}))}),this.addEventListener("keydown",a(this,Cr)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",a(this,zo))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}updated(e){super.updated(e),(e.has("checked")||e.has("disabled")||e.has("invalid"))&&this._updateAriaState()}render(){return v`
      <gds-toggle-control-base type="radio">
        <label slot="label" @click=${a(this,zo)}> ${this.label} </label>
        <span slot="supporting-text"> ${this.supportingText} </span>
        ${fc({checked:this.checked,disabled:this.disabled,indeterminate:!1,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}};zo=new WeakMap;Cr=new WeakMap;Qe.styles=[Ir,pu];i([d()],Qe.prototype,"label",2);i([d({attribute:"supporting-text"})],Qe.prototype,"supportingText",2);i([d()],Qe.prototype,"value",2);i([d({type:Boolean,reflect:!0})],Qe.prototype,"checked",2);i([d({type:Boolean,reflect:!0})],Qe.prototype,"disabled",2);i([d({type:Boolean})],Qe.prototype,"invalid",2);i([le()],Qe.prototype,"_isFocused",2);Qe=i([$("gds-radio",{dependsOn:[hs]})],Qe);const gu=T`
  @layer base {
    :host {
      display: flex;
      z-index: 1;
    }

    button {
      appearance: none;
      background: transparent;
      border-radius: var(--gds-sys-radius-max);
      border-width: 0;
      color: var(--gds-sys-color-content-neutral-01);
      cursor: pointer;
      flex-grow: 1;
      flex-shrink: 0;
      font-family: inherit;
      font-size: inherit;
      font: var(--gds-sys-text-detail-book-m);
      overflow: hidden;
      padding: 0 1rem;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      transition:
        background-color var(--gds-sys-motion-fast),
        border-color var(--gds-sys-motion-fast),
        color var(--gds-sys-motion-fast);
      outline-width: var(--gds-sys-space-3xs);
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
          transparent,
          var(--gds-sys-color-state-neutral-05)
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
`;var fu=gu;let Xt=class extends _e(R){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),be.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return v`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};Xt.styles=[...j,fu];i([d({type:Boolean,reflect:!0})],Xt.prototype,"selected",2);i([d()],Xt.prototype,"value",2);i([d({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);Xt=i([$("gds-segment")],Xt);const yu=T`
  @layer base {
    :host {
      background-color: var(--gds-sys-color-l3-neutral-02);
      border: 0.25rem solid transparent;
      border-radius: var(--gds-sys-radius-max);
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
      appearance: none;
      aspect-ratio: 1;
      border-radius: var(--gds-sys-radius-max);
      border-width: 0;
      background-color: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);
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
            var(--gds-sys-color-l3-neutral-02),
            var(--gds-sys-color-state-neutral-03)
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
      background-color: var(--gds-sys-color-l3-neutral-04);
      border-radius: var(--gds-sys-radius-max);
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
`;var bu=yu,jt,$r,ml,Er,Mr,Tr,Ks,Vo,Dr,Ar;const vu=(e,t)=>{let s;return()=>{clearTimeout(s),s=setTimeout(e,t)}};let Fe=class extends we(_e(Ee(R))){constructor(){super(...arguments),g(this,$r),this.size="medium",g(this,jt),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,g(this,Er,()=>{const e=this.segments.filter((t,s,o)=>o[s+1]?.isVisible&&!t.isVisible)[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),g(this,Mr,()=>{const e=this.segments.filter((t,s,o)=>o[s-1]?.isVisible&&!t.isVisible).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),g(this,Tr,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),g(this,Ks,vu(a(this,Tr),50)),g(this,Vo,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,s=e.offsetLeft;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),g(this,Dr,e=>{const t=this.segments.find(s=>s===e.target||s.contains(e.target));t&&(this.segments.forEach(s=>s.selected=!1),t.selected=!0,U(this,jt,t.value),a(this,Vo).call(this),this.dispatchCustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0}))}),g(this,Ar,()=>{a(this,jt)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===a(this,jt));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return a(this,jt)}set value(e){U(this,jt,e),a(this,Ar).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),be.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{a(this,Ks).call(this)})})}render(){return v`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${a(this,Er)}
        aria-label=${A("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${a(this,Dr)}
          @slotchange=${f(this,$r,ml)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${a(this,Mr)}
        aria-label=${A("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{a(this,Ks).call(this),a(this,Vo).call(this)})}};jt=new WeakMap;$r=new WeakSet;ml=function(){const e=this.segments.find(t=>t.selected)?.value;e&&U(this,jt,e),this.intersectionObserver?.disconnect(),this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(s=>{const o=s.target;o._isVisible=s.intersectionRatio>.99,a(this,Ks).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(t=>{this.intersectionObserver?.observe(t)})};Er=new WeakMap;Mr=new WeakMap;Tr=new WeakMap;Ks=new WeakMap;Vo=new WeakMap;Dr=new WeakMap;Ar=new WeakMap;Fe.styles=[j,bu];i([d({reflect:!0})],Fe.prototype,"size",2);i([d()],Fe.prototype,"value",1);i([q("slot")],Fe.prototype,"_elSlot",2);i([q("#indicator")],Fe.prototype,"_elIndicator",2);i([q("#track")],Fe.prototype,"_elTrack",2);i([le()],Fe.prototype,"_showPrevButton",2);i([le()],Fe.prototype,"_showNextButton",2);i([Qr(),N("value")],Fe.prototype,"_recalculateMinWidth",1);Fe=i([$("gds-segmented-control",{dependsOn:[Xt,dt,pt]}),Me()],Fe);const mu=T`
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
    border-radius: var(--gds-sys-radius-max);
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
`;var xu=mu;let oo=class extends R{render(){return Bs`<div part="signal"></div>`}};oo.styles=[j,xu];i([_({valueTemplate:e=>`var(--gds-sys-color-${e})`,selector:'[part="signal"]'})],oo.prototype,"color",2);oo=i([$("gds-signal")],oo);const xl=T`
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
      font: var(--gds-sys-text-heading-xl);
    }

    h2 {
      font: var(--gds-sys-text-heading-l);
    }

    h3 {
      font: var(--gds-sys-text-heading-m);
    }

    h4 {
      font: var(--gds-sys-text-heading-s);
    }

    h5 {
      font: var(--gds-sys-text-heading-xs);
    }

    h6 {
      font: var(--gds-sys-text-heading-2xs);
    }

    p,
    li {
      font: var(--gds-sys-text-body-book-m);
    }

    strong {
      font: var(--gds-sys-text-body-book-m);
      font-weight: var(--gds-sys-text-weight-medium);
    }
  }
`,_u=T`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var wu=_u;let yt=class extends z{constructor(){super(...arguments),this.tag="span"}render(){const e=xd(encodeURI(this.tag));return Bs`<${e} tag><slot></slot></${e}>`}};yt.styles=[j,xl,wu];i([d({type:String})],yt.prototype,"tag",2);i([_({selector:"[tag]",styleTemplate:(e,t)=>`font: var(--gds-sys-text-${t[0]});`})],yt.prototype,"font",2);i([_({selector:"[tag]",valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],yt.prototype,"font-weight",2);i([_()],yt.prototype,"text-transform",2);i([_({selector:"[tag]"})],yt.prototype,"text-decoration",2);i([_({selector:"[tag]",styleTemplate:(e,t)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${t[0]};
      -webkit-box-orient: vertical;`})],yt.prototype,"lines",2);yt=i([$("gds-text")],yt);const ku=T`
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
`;var Su=ku,Et,_l,rn,nn,an,Lr,ln,wl,kl,Sl,Cl,$l,El;let K=class extends ie{constructor(){super(),g(this,Et),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.showExtendedSupportingText=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.autocapitalize="off",this.autofocus=!1,this.spellcheck=!0,this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},g(this,rn,e=>{const t=e.target;this.value=t.value}),g(this,nn,e=>{const t=e.target;this.value=t.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),g(this,an,e=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),g(this,Lr,()=>{this.elTextareaAsync.then(e=>e.focus())}),g(this,ln,()=>{this.value="",this.elTextareaAsync.then(e=>{if(this.resizable==="manual")e.style.height="";else if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString()),e.style.height=""}}),this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}focus(e){this._getValidityAnchor()?.focus(e)}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{const e=this.fieldBase?.shadowRoot;if(!e)return;const t=e.querySelector(".right");if(t){const s=t.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${s.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return v`
      ${F(!this.plain,()=>v`<gds-form-control-header
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
        @click=${a(this,Lr)}
        multiline
      >
        ${f(this,Et,wl).call(this)}
      </gds-field-base>

      ${F(f(this,Et,_l).call(this),()=>v`<gds-form-control-footer
            id="footer"
            class="size-${this.size}"
            .charCounter=${a(this,Et,El)?this.maxlength-(this.value?.length||0):void 0}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(e.value===""){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=getComputedStyle(e),s=parseFloat(t.lineHeight),o=e.scrollHeight,r=Math.ceil(o/s),n=this._initialRows??this._defaultRows;this.rows=Math.max(n,r),e.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(e=>{this.resizable==="false"&&e.style.setProperty("--_lines",this.rows.toString())})}};Et=new WeakSet;_l=function(){return!this.plain};rn=new WeakMap;nn=new WeakMap;an=new WeakMap;Lr=new WeakMap;ln=new WeakMap;wl=function(){return[f(this,Et,kl).call(this),f(this,Et,Cl).call(this),f(this,Et,$l).call(this),f(this,Et,Sl).call(this)].map(t=>v`${t}`)};kl=function(){return v`<slot slot="lead" name="lead"></slot>`};Sl=function(){return v`<slot slot="trail" name="trail"></slot>`};Cl=function(){return v`
      <textarea
        @input=${a(this,rn)}
        @change=${a(this,nn)}
        @paste=${a(this,an)}
        .value=${this.value}
        id="input"
        class="native-control resize-${this.resizable}"
        aria-label=${this.plain&&this.label||ye}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-errormessage="footer"
        placeholder=" "
        autocapitalize=${G(this.autocapitalize)}
        autocomplete=${G(this.autocomplete)}
        autocorrect=${G(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${G(this.enterkeyhint)}
        inputmode=${G(this.inputmode)}
        wrap=${G(this.wrap)}
        ?required=${this.required}
      ></textarea>
    `};$l=function(){return this.clearable&&(this.value?.length||0)>0?v`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${A("Clear input")}"
          @click=${a(this,ln)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:ye};El=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};K.styles=[j,di,Su];i([_({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],K.prototype,"rows",2);i([d({attribute:"supporting-text"})],K.prototype,"supportingText",2);i([d({type:Boolean})],K.prototype,"clearable",2);i([d({type:String})],K.prototype,"resizable",2);i([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],K.prototype,"showExtendedSupportingText",2);i([d({type:Number})],K.prototype,"maxlength",2);i([d({type:String})],K.prototype,"size",2);i([d({type:Boolean})],K.prototype,"plain",2);i([d()],K.prototype,"autocapitalize",2);i([d()],K.prototype,"autocorrect",2);i([d()],K.prototype,"autocomplete",2);i([d({type:Boolean})],K.prototype,"autofocus",2);i([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],K.prototype,"spellcheck",2);i([d()],K.prototype,"wrap",2);i([d()],K.prototype,"enterkeyhint",2);i([d()],K.prototype,"inputmode",2);i([Vt("textarea")],K.prototype,"elTextareaAsync",2);i([q("textarea")],K.prototype,"elTextarea",2);i([q("gds-field-base")],K.prototype,"fieldBase",2);i([Qr()],K.prototype,"_handleResize",1);i([N("value")],K.prototype,"_setAutoHeight",1);i([N("rows")],K.prototype,"_handleRowsChange",1);K=i([Me()],K);let Br=class extends we(_e(Ee(K))){};Br=i([$("gds-textarea",{dependsOn:[Ye,je,at,xe,Ze]})],Br);let Kt=class extends R{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2023"}connectedCallback(){super.connectedCallback(),be.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",De(`:host {${go}}`))}render(){return v`<slot></slot>`}_onColorSchemeChange(){switch(this.colorScheme){case"dark":this._dynamicStylesController.inject("color-scheme",De(`:host { ${go}}`));break;case"light":this._dynamicStylesController.inject("color-scheme",De(`:host { ${vi}}`));break;case"auto":default:this._dynamicStylesController.inject("color-scheme",De(`:host { ${vi}} @media (prefers-color-scheme: dark) { :host { ${go} } }`));break}this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};Kt.styles=[j,T`
      :host {
        display: contents;
        color: var(--gds-sys-color-content-neutral-01);
        font-family: var(--gds-sys-text-family);
      }
    `];i([d({reflect:!0,attribute:"color-scheme"})],Kt.prototype,"colorScheme",2);i([d({reflect:!0,attribute:"design-version"})],Kt.prototype,"designVersion",2);i([N("colorScheme")],Kt.prototype,"_onColorSchemeChange",1);i([N("designVersion")],Kt.prototype,"_onDesignVersionChange",1);Kt=i([$("gds-theme")],Kt);const Cu=T`
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
`;var $u=Cu;let ue=class extends _e(si(Ee(we(Fr(R))))){applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return v`<video></video>`}firstUpdated(){this.applyVideoSettings()}};ue.styles=[j,$u];i([_()],ue.prototype,"aspect-ratio",2);i([_({selector:"video"})],ue.prototype,"object-position",2);i([_()],ue.prototype,"opacity",2);i([_({selector:"video"})],ue.prototype,"object-fit",2);i([_({selector:"video"})],ue.prototype,"pointer-events",2);i([_({valueTemplate:e=>`var(--gds-sys-space-${e})`})],ue.prototype,"border-radius",2);i([d()],ue.prototype,"src",2);i([d()],ue.prototype,"poster",2);i([d({type:Boolean})],ue.prototype,"muted",2);i([d({type:Boolean})],ue.prototype,"playsinline",2);i([d({type:Boolean})],ue.prototype,"autoplay",2);i([d({type:Boolean})],ue.prototype,"loop",2);i([q("video")],ue.prototype,"videoElement",2);ue=i([$("gds-video")],ue);const Eu=T`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    cursor: default;
  }

  :host(:invalid) {
    color: var(--gds-sys-color-content-negative-01);
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
`;var Mu=Eu,Js,Ml,dn;let et=class extends ie{constructor(){super(...arguments),g(this,Js),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1}get value(){return this._internalValue||""}set value(e){this._internalValue=e}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}render(){return v`
      <input
        type="checkbox"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        ?indeterminate=${this.indeterminate}
        aria-invalid=${this.invalid}
        aria-describedby=${G(this.supportingText?"supporting-text":"")}
        id="checkbox-input"
        @change=${()=>{this.checked=this._elCheckbox.checked,f(this,Js,dn).call(this)}}
      />
      <gds-toggle-control-base type="checkbox" @click=${f(this,Js,Ml)}>
        <label for="checkbox-input" slot="label"> ${this.label} </label>
        <span
          slot="supporting-text"
          class="supporting-text"
          id="supporting-text"
        >
          ${this.supportingText}
        </span>
        ${ua({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}_getValidityAnchor(){return this._elCheckbox}formResetCallback(){this.checked=!1}};Js=new WeakSet;Ml=function(e){this.disabled||e.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,f(this,Js,dn).call(this))};dn=function(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};et.styles=[j,Ir,Mu];i([d()],et.prototype,"label",2);i([d({attribute:"supporting-text"})],et.prototype,"supportingText",2);i([d({type:Boolean})],et.prototype,"checked",2);i([d({type:Boolean,reflect:!0})],et.prototype,"indeterminate",2);i([d({type:Boolean,reflect:!0})],et.prototype,"disabled",2);i([q('input[type="checkbox"]')],et.prototype,"_elCheckbox",2);i([N("indeterminate")],et.prototype,"_handleIndeterminateChange",1);et=i([$("gds-checkbox",{dependsOn:[hs,Ve,zt]})],et);et.define();We.define();$s.define();No.define();ur.define();Be.define();qt.define();z.define();X.define();lt.define();Re.define();Zt.define();Mt.define();fs.define();ti.define();ei.define();Ot.define();gt.define();xr.define();Ke.define();ft.define();Oe.define();V.define();let io=class extends R{constructor(){super(...arguments),this.show=!1}render(){return v``}};io.styles=T`
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
  `;i([d({type:Boolean,reflect:!0})],io.prototype,"show",2);io=i([$("gds-backdrop")],io);io.define();Qe.define();Sr.define();const Tu=T`
  :host {
    font: var(--gds-sys-text-body-regular-m);
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

  code {
    background: var(--gds-sys-color-l3-neutral-02);
    color: var(--gds-sys-color-content-neutral-01);
    border-radius: var(--gds-sys-radius-xs);
    padding: var(--gds-sys-space-2xs);
    font: var(--gds-sys-text-body-book-s);
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
    border-radius: var(--gds-sys-radius-xs);
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
    border-radius: var(--gds-sys-radius-s);
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
    font: var(--gds-sys-text-body-regular-m);
  }

  summary {
    font-weight: var(--gds-sys-text-weight-regular);
    list-style: none;
    padding: 0.4lh 0.2ch;
    font: var(--gds-sys-text-body-regular-l);
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
    border-radius: var(--gds-sys-radius-2xs);
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
    font: var(--gds-sys-text-body-regular-l);
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

  a,
  a:visited {
    color: currentColor;
    text-decoration-color: currentColor;
  }

  /*
  * Iframe
  */
  iframe {
    border: var(--gds-sys-space-4xs) solid var(--gds-sys-color-border-subtle-01);
    border-radius: var(--gds-sys-radius-xs);
    min-width: 100%;
    margin-bottom: var(--gds-sys-space-l);
  }
`;var Du=Tu;let Ds=class extends we(Ee(R)){constructor(){super(...arguments),this.captureMode="clone"}querySelectorAll(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):new NodeList}querySelector(e){return this.shadowRoot?this.shadowRoot.querySelector(e):null}get innerHTML(){return this.shadowRoot?.innerHTML||""}set innerHTML(e){this.shadowRoot&&(this.shadowRoot.innerHTML=e)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){if(!this.shadowRoot||this.childNodes.length===0)return;if(this.captureMode==="move"){this.shadowRoot.replaceChildren(...Array.from(this.childNodes));return}const e=Array.from(this.childNodes).map(t=>t.cloneNode(!0));this.shadowRoot.replaceChildren(...e)}};Ds.styles=[j,xl,Du];i([d()],Ds.prototype,"captureMode",2);i([oi({childList:!0,subtree:!0,attributes:!0,characterData:!0})],Ds.prototype,"_captureDOM",1);Ds=i([$("gds-rich-text")],Ds);Ds.define();Fe.define();Xt.define();oo.define();yt.define();Br.define();Kt.define();ue.define();export{Ve as $,Od as A,Ah as B,Vt as C,cs as D,Mt as E,z as F,Q as G,at as H,dt as I,ie as J,di as K,q as L,oi as M,N,Ye as O,je as P,xe as Q,At as R,Fr as S,xd as T,Bs as U,Tt as V,Dt as W,ut as X,Lt as Y,Bt as Z,i as _,_e as a,pt as a0,Ze as a1,zt as a2,Ee as b,R as c,g as d,me as e,va as f,f as g,F as h,ma as i,a as j,U as k,Me as l,A as m,d as n,mh as o,wh as p,Da as q,le as r,xh as s,j as t,_h as u,Vu as v,we as w,Wu as x,zu as y,se as z};
