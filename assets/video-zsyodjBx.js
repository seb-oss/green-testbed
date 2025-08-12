import{f as qd,u as Zd,i as Xd,V as fs,r as re,a as z,h as v,g as S,T as Ps,E as fe,x as Ce,Z as Kd}from"./index-CbLEaq3H.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jd={attribute:!0,type:String,converter:Zd,reflect:!1,hasChanged:qd},Qd=(e=Jd,t,s)=>{const{kind:n,metadata:i}=s;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),r.set(s.name,e),n==="accessor"){const{name:l}=s;return{set(h){const u=t.get.call(this);t.set.call(this,h),this.requestUpdate(l,u,e)},init(h){return h!==void 0&&this.C(l,void 0,e,h),h}}}if(n==="setter"){const{name:l}=s;return function(h){const u=this[l];t.call(this,h),this.requestUpdate(l,u,e)}}throw Error("Unsupported decorator location: "+n)};function d(e){return(t,s)=>typeof s=="object"?Qd(e,t,s):((n,i,r)=>{const l=i.hasOwnProperty(r);return i.constructor.createProperty(r,n),l?Object.getOwnPropertyDescriptor(i,r):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function le(e){return d({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const br=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Z(e,t){return(s,n,i)=>{const r=l=>l.renderRoot?.querySelector(e)??null;return br(s,n,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ec;function tc(e){return(t,s)=>br(t,s,{get(){return(this.renderRoot??(ec??=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Nt(e){return(t,s)=>br(t,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}var sc=Object.defineProperty,nc=Object.getOwnPropertyDescriptor,o=(e,t,s,n)=>{for(var i=n>1?void 0:n?nc(t,s):t,r=e.length-1,l;r>=0;r--)(l=e[r])&&(i=(n?l(t,s,i):l(i))||i);return n&&i&&sc(t,s,i),i},vr=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},a=(e,t,s)=>(vr(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},U=(e,t,s,n)=>(vr(e,t,"write to private field"),t.set(e,s),s),f=(e,t,s)=>(vr(e,t,"access private method"),s),Je,zn,vt,An,Jt,Qe,bt,Ln,bo,Pa,cs,Ts,vo,Ga;class oc{constructor(t){c(this,bo),c(this,cs),c(this,vo),c(this,Je,!mr()),c(this,zn,!1),c(this,vt,[]),c(this,An,[]),c(this,Jt,new Map),c(this,Qe,new Map),c(this,bt,[]),c(this,Ln,[]),this.host=t,this.host.addController(this)}hostConnected(){f(this,vo,Ga).call(this)}has(t){return a(this,Je)?a(this,Qe).has(t):a(this,Jt).has(t)}inject(t,s){f(this,bo,Pa).call(this,t,s),f(this,cs,Ts).call(this)}clear(t){a(this,Je)?this.host.updateComplete.then(()=>{a(this,Qe).get(t)?.remove(),a(this,Qe).delete(t)}):a(this,Jt).delete(t),f(this,cs,Ts).call(this)}clearAll(){a(this,Je)?this.host.updateComplete.then(()=>{a(this,Qe).forEach(t=>t.remove()),a(this,bt).forEach(t=>t.remove()),a(this,Qe).clear(),U(this,bt,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],a(this,Jt).clear(),U(this,vt,[]))}clearInitial(){a(this,Je)?this.host.updateComplete.then(()=>{a(this,bt).forEach(t=>t.remove()),U(this,bt,[])}):U(this,vt,[]),f(this,cs,Ts).call(this)}restoreInitial(){a(this,Je)?a(this,Ln).forEach(t=>{a(this,bt).push(t.cloneNode(!0))}):U(this,vt,[...a(this,An)]),f(this,cs,Ts).call(this)}}Je=new WeakMap;zn=new WeakMap;vt=new WeakMap;An=new WeakMap;Jt=new WeakMap;Qe=new WeakMap;bt=new WeakMap;Ln=new WeakMap;bo=new WeakSet;Pa=function(e,t){if(a(this,Je)){let s=a(this,Qe).get(e);s||(s=document.createElement("style"),a(this,Qe).set(e,s)),s.textContent=t.cssText}else{if(!this.host.shadowRoot||!t.styleSheet)return;a(this,Jt).set(e,t.styleSheet)}};cs=new WeakSet;Ts=function(){if(a(this,Je))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(e=>{e.remove()}),a(this,bt).forEach(e=>{this.host.shadowRoot?.appendChild(e)}),a(this,Qe).forEach(e=>{this.host.shadowRoot?.appendChild(e)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...a(this,vt),...Array.from(a(this,Jt).values())]}};vo=new WeakSet;Ga=function(){a(this,zn)||(a(this,Je)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(e=>{a(this,bt).push(e),a(this,Ln).push(e.cloneNode(!0))})}):this.host.shadowRoot&&a(this,vt).length===0&&(U(this,vt,[...this.host.shadowRoot.adoptedStyleSheets||[]]),U(this,An,[...a(this,vt)])),U(this,zn,!0))};function mr(){try{return new CSSStyleSheet,!0}catch{return!1}}var _a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},wa={};/*! *****************************************************************************
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
***************************************************************************** */var ka;function ic(){if(ka)return wa;ka=1;var e;return function(t){(function(s){var n=typeof _a=="object"?_a:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),i=r(t);typeof n.Reflect>"u"?n.Reflect=t:i=r(n.Reflect,i),s(i);function r(l,h){return function(u,g){typeof l[u]!="function"&&Object.defineProperty(l,u,{configurable:!0,writable:!0,value:g}),h&&h(u,g)}}})(function(s){var n=Object.prototype.hasOwnProperty,i=typeof Symbol=="function",r=i&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",l=i&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",h=typeof Object.create=="function",u={__proto__:[]}instanceof Array,g=!h&&!u,m={create:h?function(){return ho(Object.create(null))}:u?function(){return ho({__proto__:null})}:function(){return ho({})},has:g?function(p,y){return n.call(p,y)}:function(p,y){return y in p},get:g?function(p,y){return n.call(p,y)?p[y]:void 0}:function(p,y){return p[y]}},b=Object.getPrototypeOf(Function),k=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",w=!k&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:jd(),$=!k&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:Yd(),T=!k&&typeof WeakMap=="function"?WeakMap:Ud(),D=new T;function F(p,y,_,C){if(se(_)){if(!ba(p))throw new TypeError;if(!va(y))throw new TypeError;return jt(p,y)}else{if(!ba(p))throw new TypeError;if(!ge(y))throw new TypeError;if(!ge(C)&&!se(C)&&!ds(C))throw new TypeError;return ds(C)&&(C=void 0),_=pt(_),ut(p,y,_,C)}}s("decorate",F);function j(p,y){function _(C,E){if(!ge(C))throw new TypeError;if(!se(E)&&!Id(E))throw new TypeError;ke(p,y,C,E)}return _}s("metadata",j);function X(p,y,_,C){if(!ge(_))throw new TypeError;return se(C)||(C=pt(C)),ke(p,y,_,C)}s("defineMetadata",X);function oe(p,y,_){if(!ge(y))throw new TypeError;return se(_)||(_=pt(_)),ie(p,y,_)}s("hasMetadata",oe);function ee(p,y,_){if(!ge(y))throw new TypeError;return se(_)||(_=pt(_)),Re(p,y,_)}s("hasOwnMetadata",ee);function We(p,y,_){if(!ge(y))throw new TypeError;return se(_)||(_=pt(_)),ze(p,y,_)}s("getMetadata",We);function _e(p,y,_){if(!ge(y))throw new TypeError;return se(_)||(_=pt(_)),we(p,y,_)}s("getOwnMetadata",_e);function Gt(p,y){if(!ge(p))throw new TypeError;return se(y)||(y=pt(y)),Fe(p,y)}s("getMetadataKeys",Gt);function ht(p,y){if(!ge(p))throw new TypeError;return se(y)||(y=pt(y)),sn(p,y)}s("getOwnMetadataKeys",ht);function Oe(p,y,_){if(!ge(y))throw new TypeError;se(_)||(_=pt(_));var C=Ve(y,_,!1);if(se(C)||!C.delete(p))return!1;if(C.size>0)return!0;var E=D.get(y);return E.delete(_),E.size>0||D.delete(y),!0}s("deleteMetadata",Oe);function jt(p,y){for(var _=p.length-1;_>=0;--_){var C=p[_],E=C(y);if(!se(E)&&!ds(E)){if(!va(E))throw new TypeError;y=E}}return y}function ut(p,y,_,C){for(var E=p.length-1;E>=0;--E){var ce=p[E],L=ce(y,_,C);if(!se(L)&&!ds(L)){if(!ge(L))throw new TypeError;C=L}}return C}function Ve(p,y,_){var C=D.get(p);if(se(C)){if(!_)return;C=new w,D.set(p,C)}var E=C.get(y);if(se(E)){if(!_)return;E=new w,C.set(y,E)}return E}function ie(p,y,_){var C=Re(p,y,_);if(C)return!0;var E=co(y);return ds(E)?!1:ie(p,E,_)}function Re(p,y,_){var C=Ve(y,_,!1);return se(C)?!1:Fd(C.has(p))}function ze(p,y,_){var C=Re(p,y,_);if(C)return we(p,y,_);var E=co(y);if(!ds(E))return ze(p,E,_)}function we(p,y,_){var C=Ve(y,_,!1);if(!se(C))return C.get(p)}function ke(p,y,_,C){var E=Ve(_,C,!0);E.set(p,y)}function Fe(p,y){var _=sn(p,y),C=co(p);if(C===null)return _;var E=Fe(C,y);if(E.length<=0)return _;if(_.length<=0)return E;for(var ce=new $,L=[],W=0,M=_;W<M.length;W++){var B=M[W],I=ce.has(B);I||(ce.add(B),L.push(B))}for(var Tt=0,xa=E;Tt<xa.length;Tt++){var B=xa[Tt],I=ce.has(B);I||(ce.add(B),L.push(B))}return L}function sn(p,y){var _=[],C=Ve(p,y,!1);if(se(C))return _;for(var E=C.keys(),ce=Hd(E),L=0;;){var W=Pd(ce);if(!W)return _.length=L,_;var M=Nd(W);try{_[L]=M}catch(B){try{Gd(ce)}finally{throw B}}L++}}function ya(p){if(p===null)return 1;switch(typeof p){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return p===null?1:6;default:return 6}}function se(p){return p===void 0}function ds(p){return p===null}function Od(p){return typeof p=="symbol"}function ge(p){return typeof p=="object"?p!==null:typeof p=="function"}function Vd(p,y){switch(ya(p)){case 0:return p;case 1:return p;case 2:return p;case 3:return p;case 4:return p;case 5:return p}var _="string",C=ma(p,r);if(C!==void 0){var E=C.call(p,_);if(ge(E))throw new TypeError;return E}return Rd(p)}function Rd(p,y){var _,C,E;{var ce=p.toString;if(nn(ce)){var C=ce.call(p);if(!ge(C))return C}var _=p.valueOf;if(nn(_)){var C=_.call(p);if(!ge(C))return C}}throw new TypeError}function Fd(p){return!!p}function Bd(p){return""+p}function pt(p){var y=Vd(p);return Od(y)?y:Bd(y)}function ba(p){return Array.isArray?Array.isArray(p):p instanceof Object?p instanceof Array:Object.prototype.toString.call(p)==="[object Array]"}function nn(p){return typeof p=="function"}function va(p){return typeof p=="function"}function Id(p){switch(ya(p)){case 3:return!0;case 4:return!0;default:return!1}}function ma(p,y){var _=p[y];if(_!=null){if(!nn(_))throw new TypeError;return _}}function Hd(p){var y=ma(p,l);if(!nn(y))throw new TypeError;var _=y.call(p);if(!ge(_))throw new TypeError;return _}function Nd(p){return p.value}function Pd(p){var y=p.next();return y.done?!1:y}function Gd(p){var y=p.return;y&&y.call(p)}function co(p){var y=Object.getPrototypeOf(p);if(typeof p!="function"||p===b||y!==b)return y;var _=p.prototype,C=_&&Object.getPrototypeOf(_);if(C==null||C===Object.prototype)return y;var E=C.constructor;return typeof E!="function"||E===p?y:E}function jd(){var p={},y=[],_=function(){function L(W,M,B){this._index=0,this._keys=W,this._values=M,this._selector=B}return L.prototype["@@iterator"]=function(){return this},L.prototype[l]=function(){return this},L.prototype.next=function(){var W=this._index;if(W>=0&&W<this._keys.length){var M=this._selector(this._keys[W],this._values[W]);return W+1>=this._keys.length?(this._index=-1,this._keys=y,this._values=y):this._index++,{value:M,done:!1}}return{value:void 0,done:!0}},L.prototype.throw=function(W){throw this._index>=0&&(this._index=-1,this._keys=y,this._values=y),W},L.prototype.return=function(W){return this._index>=0&&(this._index=-1,this._keys=y,this._values=y),{value:W,done:!0}},L}();return function(){function L(){this._keys=[],this._values=[],this._cacheKey=p,this._cacheIndex=-2}return Object.defineProperty(L.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),L.prototype.has=function(W){return this._find(W,!1)>=0},L.prototype.get=function(W){var M=this._find(W,!1);return M>=0?this._values[M]:void 0},L.prototype.set=function(W,M){var B=this._find(W,!0);return this._values[B]=M,this},L.prototype.delete=function(W){var M=this._find(W,!1);if(M>=0){for(var B=this._keys.length,I=M+1;I<B;I++)this._keys[I-1]=this._keys[I],this._values[I-1]=this._values[I];return this._keys.length--,this._values.length--,W===this._cacheKey&&(this._cacheKey=p,this._cacheIndex=-2),!0}return!1},L.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=p,this._cacheIndex=-2},L.prototype.keys=function(){return new _(this._keys,this._values,C)},L.prototype.values=function(){return new _(this._keys,this._values,E)},L.prototype.entries=function(){return new _(this._keys,this._values,ce)},L.prototype["@@iterator"]=function(){return this.entries()},L.prototype[l]=function(){return this.entries()},L.prototype._find=function(W,M){return this._cacheKey!==W&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=W)),this._cacheIndex<0&&M&&(this._cacheIndex=this._keys.length,this._keys.push(W),this._values.push(void 0)),this._cacheIndex},L}();function C(L,W){return L}function E(L,W){return W}function ce(L,W){return[L,W]}}function Yd(){return function(){function p(){this._map=new w}return Object.defineProperty(p.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),p.prototype.has=function(y){return this._map.has(y)},p.prototype.add=function(y){return this._map.set(y,y),this},p.prototype.delete=function(y){return this._map.delete(y)},p.prototype.clear=function(){this._map.clear()},p.prototype.keys=function(){return this._map.keys()},p.prototype.values=function(){return this._map.values()},p.prototype.entries=function(){return this._map.entries()},p.prototype["@@iterator"]=function(){return this.keys()},p.prototype[l]=function(){return this.keys()},p}()}function Ud(){var p=16,y=m.create(),_=C();return function(){function M(){this._key=C()}return M.prototype.has=function(B){var I=E(B,!1);return I!==void 0?m.has(I,this._key):!1},M.prototype.get=function(B){var I=E(B,!1);return I!==void 0?m.get(I,this._key):void 0},M.prototype.set=function(B,I){var Tt=E(B,!0);return Tt[this._key]=I,this},M.prototype.delete=function(B){var I=E(B,!1);return I!==void 0?delete I[this._key]:!1},M.prototype.clear=function(){this._key=C()},M}();function C(){var M;do M="@@WeakMap@@"+W();while(m.has(y,M));return y[M]=!0,M}function E(M,B){if(!n.call(M,_)){if(!B)return;Object.defineProperty(M,_,{value:m.create()})}return M[_]}function ce(M,B){for(var I=0;I<B;++I)M[I]=Math.random()*255|0;return M}function L(M){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(M)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(M)):ce(new Uint8Array(M),M):ce(new Array(M),M)}function W(){var M=L(p);M[6]=M[6]&79|64,M[8]=M[8]&191|128;for(var B="",I=0;I<p;++I){var Tt=M[I];(I===4||I===6||I===8)&&(B+="-"),Tt<16&&(B+="0"),B+=Tt.toString(16).toLowerCase()}return B}}function ho(p){return p.__=void 0,delete p.__,p}})}(e||(e={})),wa}ic();function Ca(e){return e.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}class R extends Xd{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new oc(this)}static define(){}connectedCallback(){super.connectedCallback(),this.setAttribute("gds-element",this.gdsElementName?.toString()||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(t,s){const n={bubbles:!0,composed:!1,cancelable:!0,...s};return[this.dispatchEvent(new Event(t,n)),this.dispatchEvent(new Event(Ca(t),n))].every(i=>i!==!1)}dispatchCustomEvent(t,s={}){const n={bubbles:!0,composed:!1,cancelable:!0,...s};return[this.dispatchEvent(new CustomEvent(t,n)),this.dispatchEvent(new CustomEvent(Ca(t),n))].every(i=>i!==!1)}}R.isDefined=!1;R.styleExpressionBaseSelector=":host";o([le()],R.prototype,"_isUsingTransitionalStyles",2);const ja=`/**
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
  --gds-sys-space-max: 999px;`,mo=`/**
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
  --gds-sys-color-l3-states-negative-pressed: #ee8375 20%;`,Ya=`/**
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
  --gds-sys-color-l3-states-negative-pressed: #a63e2a 20%;`,Ua=`/**
 * Do not edit directly, this file was auto-generated.
 */

--gds-sys-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
--gds-sys-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
--gds-sys-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
--gds-sys-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03);
--gds-sys-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03);
`;var rc={};const Jn=typeof process<"u"&&rc!==void 0,ac=/iPad|iPhone|iPod/.test(navigator.userAgent);var xo,Dn,Wn,xr,_o,qa,wo,Za;function lc(){return Jn?[]:document.adoptedStyleSheets||[]}const dc=class Xa{constructor(){c(this,_o),c(this,wo),c(this,xo,!mr()),c(this,Dn,new Map),c(this,Wn,new Map),c(this,xr,lc())}static get instance(){return globalThis.__gdsGlobalStylesRegistryScoped?.[fs]||(globalThis.__gdsGlobalStylesRegistryScoped={...globalThis.__gdsGlobalStylesRegistryScoped,[fs]:new Xa}),globalThis.__gdsGlobalStylesRegistryScoped[fs]}injectGlobalStyles(t,s){if(a(this,xo)){const n=Array.isArray(s)?s.map(i=>i.toString()).join(""):s.toString();f(this,_o,qa).call(this,t,n)}else s.styleSheet&&f(this,wo,Za).call(this,t,s.styleSheet)}};xo=new WeakMap;Dn=new WeakMap;Wn=new WeakMap;xr=new WeakMap;_o=new WeakSet;qa=function(e,t){if(Jn)return;let s=a(this,Wn).get(e);s||(s=document.createElement("style"),a(this,Wn).set(e,s)),s.textContent=t,document.head.appendChild(s)};wo=new WeakSet;Za=function(e,t){Jn||(a(this,Dn).set(e,t),document.adoptedStyleSheets=[...a(this,xr),...Array.from(a(this,Dn).values())])};let Ka=dc;const G=[z`
    :host {
      ${re(ja)}
      ${re(Ua)}
    }
  `];Ka.instance.injectGlobalStyles("root-tokens",z`
    :root,
    :root[gds-theme='light'] {
      ${re(ja)}
      ${re(Ua)}
      ${re(Ya)}
    }
    :root[gds-theme='dark'] {
      ${re(mo)}
    }
  `);const cc={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},hc=/^([<|>]=?)?([0-9a-z]+)/,Ja=["{","}",";",":",","],$a=[" ","/n"];function uc(e=""){const t=[];let s="";for(let n=0;n<e.length;n++){const i=e[n];if($a.includes(i)||(s+=i),Ja.includes(i)){t.push(s.slice(0,-1)),t.push(i),s="";continue}if($a.includes(i)||n===e.length-1){t.push(s),s="";continue}}return t.filter(n=>n!=="")}function pc(e){const t=[];let s={breakpoint:"-",values:[]};const n=()=>({sel:"",values:[]});let i=n();for(const r of e){if(!Ja.includes(r)){i.values.push(r);continue}if(r==="{"&&(s={breakpoint:i.values.join(","),values:[]},i=n()),r===";"&&(t.length===0&&t.push(s),i.values.length>0&&(s.values.push(i),i=n())),r===":"){const l=i.values.pop()??"";i.sel=l}s&&r==="}"&&(s.values.push(i),i=n(),t.push(s))}return i.values.length>0&&s.values.push(i),t.length===0&&t.push(s),t}function gc(e){return e.split(",").map(s=>{const n=s.trim().match(hc);if(!n)throw new Error(`Invalid breakpoint specifier: ${s}`);return{condition:n[1],value:n[2]}})}function fc(e,t,s,n=r=>r,i=(r,l)=>`${r}: ${l.join(" ")};`){let r="";for(const l of s){const g=`@media ${(l.breakpoint==="-"?[{condition:">=",value:"0"}]:gc(l.breakpoint)).map(m=>`(${m.condition?.includes("<")?"max-width":"min-width"}: ${cc[m.value]??m.value})`).join(" and ")} {${l.values.map(m=>{let b=e;m.sel.length>0&&(b=e===":host"?`:host(:${m.sel})`:`${e}:${m.sel}`);const k=i(t,m.values.map(n));return m.sel==="hover"?`@media (hover: hover) {${b}{${k}}}`:`${b}{${k}}`}).join("")}}`;r+=g}return r}const uo=new Map;function x(e){return(t,s)=>{const n=e?.property??String(s),i=e?.valueTemplate,r=e?.styleTemplate,l=e?.cacheOverrideKey??"0";d({attribute:e?.attribute,noAccessor:!0})(t,s),Object.defineProperty(t,s,{get:function(){return this["__"+String(s)]},set:async function(h){if(!h)return;this["__"+String(s)]=h,await this.updateComplete;const u=e?.selector??this.constructor.styleExpressionBaseSelector,g=this.level??"0",m=u+n+h+g+l;if(uo.has(m)){this._dynamicStylesController.inject(`sep_${String(s)}`,uo.get(m));return}const b=pc(uc(h)),k=fc(u,n,b,i?.bind(this),r?.bind(this)),w=re(k);uo.set(m,w),this._dynamicStylesController.inject(`sep_${String(s)}`,w)}})}}function Qa(e,t,s){if(e==="transparent"||e==="currentColor"||e==="inherit")return e;const[n,i]=e.split("/"),r=`var(--gds-sys-color-l${s}-${t}-${n})`;return i?`color-mix(in srgb, ${r} ${parseFloat(i)*100}%, transparent 0%)`:r}function Ks(e){return{valueTemplate:function(t){return Qa(t,e,this.level)}}}const es={valueTemplate:e=>`var(--gds-sys-space-${e}, 0)`},Me={valueTemplate:e=>`var(--gds-sys-space-${yc(e)}, ${e})`},po={valueTemplate:e=>{const s=(e.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${e})`:`calc(var(--gds-sys-space-${e.substring(1)}) * -1)`;return e==="auto"?"auto":s},styleTemplate:(e,t)=>{const s=h=>h==="auto"?"auto":`${h}`,n=s(t[0]),i=t.length>1?s(t[1]):n,r=t.length>2?s(t[2]):n,l=t.length>3?s(t[3]):i;return`${e}: ${n} ${i} ${r} ${l};`}};function yc(e){return e.replace(/[^a-zA-Z0-9-]/g,"")}function ve(e){class t extends e{}return o([x(Me)],t.prototype,"width",2),o([x(Me)],t.prototype,"min-width",2),o([x(Me)],t.prototype,"max-width",2),o([x(Me)],t.prototype,"inline-size",2),o([x(Me)],t.prototype,"min-inline-size",2),o([x(Me)],t.prototype,"max-inline-size",2),t}function Qn(e){class t extends e{}return o([x(Me)],t.prototype,"height",2),o([x(Me)],t.prototype,"min-height",2),o([x(Me)],t.prototype,"max-height",2),o([x(Me)],t.prototype,"block-size",2),o([x(Me)],t.prototype,"min-block-size",2),o([x(Me)],t.prototype,"max-block-size",2),t}function $e(e){class t extends e{}return o([x(po)],t.prototype,"margin",2),o([x(po)],t.prototype,"margin-inline",2),o([x(po)],t.prototype,"margin-block",2),t}function bc(e){class t extends e{}return o([x(es)],t.prototype,"padding",2),o([x(es)],t.prototype,"padding-inline",2),o([x(es)],t.prototype,"padding-block",2),t}function me(e){class t extends e{}return o([x()],t.prototype,"align-self",2),o([x()],t.prototype,"justify-self",2),o([x()],t.prototype,"place-self",2),o([x()],t.prototype,"grid-column",2),o([x()],t.prototype,"grid-row",2),o([x()],t.prototype,"grid-area",2),o([x()],t.prototype,"flex",2),o([x()],t.prototype,"order",2),t}function _r(e){class t extends e{}return o([x()],t.prototype,"position",2),o([x()],t.prototype,"transform",2),o([x()],t.prototype,"inset",2),t}const vc=z`
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
`;var mc=vc;let O=class extends ve(Qn($e(bc(me(_r(R)))))){constructor(){super(...arguments),this.level="2"}render(){return v`<slot></slot>`}};O.styles=[G,mc];o([x()],O.prototype,"display",2);o([d()],O.prototype,"level",2);o([x(Ks("content"))],O.prototype,"color",2);o([x(Ks("background"))],O.prototype,"background",2);o([x({styleTemplate:function(e,t){const s=this,[n,i=s["border-style"]||"solid",r=s["border-color"]||"primary"]=t,l=`var(--gds-sys-space-${n})`,h=Qa(r,"border",s.level);return`border: ${l} ${i} ${h};`}})],O.prototype,"border",2);o([x(Ks("border"))],O.prototype,"border-color",2);o([x(es)],O.prototype,"border-width",2);o([x()],O.prototype,"border-style",2);o([x(es)],O.prototype,"border-radius",2);o([x({valueTemplate:e=>`var(--gds-sys-shadow-${e})`})],O.prototype,"box-shadow",2);o([x()],O.prototype,"opacity",2);o([x()],O.prototype,"overflow",2);o([x()],O.prototype,"box-sizing",2);o([x()],O.prototype,"z-index",2);o([x({styleTemplate:(e,t)=>{const s=t[0],n=`font-size: var(--gds-sys-text-size-${s});`,i=`line-height: var(--gds-sys-text-line-height-${s});`;return n+i}})],O.prototype,"font-size",2);o([x({valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],O.prototype,"font-weight",2);o([x()],O.prototype,"text-align",2);o([x()],O.prototype,"text-wrap",2);o([x()],O.prototype,"overflow-wrap",2);o([x()],O.prototype,"white-space",2);o([x({...es,styleTemplate:(e,t)=>{const s=t[0],n=t[1]||s;return`gap: ${s} ${n};`},cacheOverrideKey:"flex"})],O.prototype,"gap",2);o([x()],O.prototype,"align-items",2);o([x()],O.prototype,"align-content",2);o([x()],O.prototype,"justify-content",2);o([x()],O.prototype,"justify-items",2);o([x()],O.prototype,"flex-direction",2);o([x()],O.prototype,"flex-wrap",2);o([x()],O.prototype,"place-items",2);o([x()],O.prototype,"place-content",2);O=o([S("gds-div")],O);const xc=z`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-l2-border-primary);
  }
`;var _c=xc;let mt=class extends O{render(){return v`<slot></slot>`}};mt.styles=[G,_c];mt=o([S("gds-flex")],mt);const wc=z`
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
`;var kc=wc,ko,el,Co,tl,wr,sl,$o,nl;let Be=class extends ve($e(me(R))){constructor(){super(...arguments),c(this,ko),c(this,Co),c(this,wr),c(this,$o),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){const e=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",t=this.disabled?"disabled":this.notification?"primary":this.variant,s=this.size==="small"||this.notification?"2xs":"xs",n=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return v`<gds-flex
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
      ${f(this,ko,el).call(this)} ${f(this,Co,tl).call(this)}
      ${f(this,$o,nl).call(this)}
    </gds-flex>`}};ko=new WeakSet;el=function(){if(this.size!=="small"||!this.notification)return v`<slot name="lead"></slot>`};Co=new WeakSet;tl=function(){return v`<slot @slotchange=${f(this,wr,sl)}></slot>`};wr=new WeakSet;sl=function(e){const s=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=s.length>0&&s.some(n=>n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE&&n.textContent?.trim()!=="")};$o=new WeakSet;nl=function(){return v`<slot name="trail"></slot>`};Be.styles=[G,kc];o([d()],Be.prototype,"variant",2);o([d({type:String})],Be.prototype,"size",2);o([d({attribute:"disabled",type:Boolean,reflect:!0})],Be.prototype,"disabled",2);o([d({attribute:"notification",type:Boolean,reflect:!0})],Be.prototype,"notification",2);o([d({attribute:"rounded",type:Boolean,reflect:!0})],Be.prototype,"rounded",2);o([le()],Be.prototype,"mainSlotOccupied",2);Be=o([S("gds-badge",{dependsOn:[mt]})],Be);Be.define();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Js={ATTRIBUTE:1,CHILD:2,ELEMENT:6},ks=e=>(...t)=>({_$litDirective$:e,values:t});let Qs=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=ks(class extends Qs{constructor(e){if(super(e),e.type!==Js.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const s=e.element.classList;for(const n of this.st)n in t||(s.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(s.add(n),this.st.add(n)):(s.remove(n),this.st.delete(n)))}return Ps}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=e=>e??fe;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(e,t,s){return e?t(e):s?.(e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kr=Symbol.for(""),Cc=e=>{if(e?.r===kr)return e?._$litStatic$},$c=e=>({_$litStatic$:e,r:kr}),On=(e,...t)=>({_$litStatic$:t.reduce((s,n,i)=>s+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[i+1],e[0]),r:kr}),Sa=new Map,Sc=e=>(t,...s)=>{const n=s.length;let i,r;const l=[],h=[];let u,g=0,m=!1;for(;g<n;){for(u=t[g];g<n&&(r=s[g],(i=Cc(r))!==void 0);)u+=i+t[++g],m=!0;g!==n&&h.push(r),l.push(u),g++}if(g===n&&l.push(t[n]),m){const b=l.join("$$lit$$");(t=Sa.get(b))===void 0&&(l.raw=l,Sa.set(b,t=l)),s=h}return e(t,...s)},Cs=Sc(Ce),Mc=`:host {
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
}`;let Gs=class extends R{constructor(){super(...arguments),this.onmousedown=e=>{const s=e.target.getBoundingClientRect(),n=this._rippleEl;n&&(n.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-s.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-s.left}px`),setTimeout(()=>{n.classList.add("gds-ripple-effect")},20))}}render(){return Ce`<div></div>`}};Gs.styles=[G,re(Mc)];o([Z("div")],Gs.prototype,"_rippleEl",2);Gs=o([S("gds-ripple")],Gs);var rn,an,So;const Ec=class ol{constructor(){c(this,rn,new Map),c(this,an,new Map),c(this,So,!mr())}static get instance(){return globalThis.__gdsTransitionalStyles?.[fs]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[fs]:new ol}),globalThis.__gdsTransitionalStyles[fs]}apply(t,s){if(!t.shadowRoot)return;const n=a(this,rn).get(s);n&&(a(this,an).set(s,t),this.applyToElement(s,n))}applyToElement(t,s){const n=a(this,an).get(t);if(!n||!n.shadowRoot)return;const i=()=>{n._dynamicStylesController.clearInitial(),n._dynamicStylesController.inject("t-styles",re(s)),n._isUsingTransitionalStyles=!0},r=()=>{n._isUsingTransitionalStyles=!1,n._dynamicStylesController.clear("t-styles"),n._dynamicStylesController.restoreInitial()},l="[gds-element=gds-theme]";let h=n.getRootNode(),u=n.closest(l);for(;u===null&&h!==document;)u=h.host?.closest(l),h=h.host?.getRootNode();if(u){const g=u,m=()=>{g.designVersion==="2023"?r():i()};if(g.addEventListener("gds-design-version-changed",m),n.addEventListener("gds-element-disconnected",()=>g.removeEventListener("gds-design-version-changed",m)),g.designVersion==="2023"){r();return}}i()}register(t,s){let n=s;a(this,So)&&(n=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${s}`),a(this,rn).set(t,n),this.applyToElement(t,n)}};rn=new WeakMap;an=new WeakMap;So=new WeakMap;let ye=Ec;function Y(e,t){const s={waitUntilFirstUpdate:!1,...t};return(n,i,r)=>{const{update:l}=n,h=Array.isArray(e)?e:[e];n.update=function(u){h.forEach(g=>{const m=g;if(u.has(m)){const b=u.get(m),k=this[m];b!==k&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&r.value?.call(this,b,k)}}),l.call(this,u)}}}function eo(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,n)=>{let i;const r=t.connectedCallback,l=t.disconnectedCallback;t.connectedCallback=function(){r?.call(this);const h=(u,g)=>{n.value?.call(this)};i=new MutationObserver(h),i.observe(this,e)},t.disconnectedCallback=function(){l?.call(this),i.disconnect()}}}function Tc(e){return(t,s,n)=>{if(Jn)return;const i=window.matchMedia(e),r=t.connectedCallback,l=t.disconnectedCallback;t.connectedCallback=function(){r?.call(this);const h=u=>{n.value?.call(this,u.matches)};i.addEventListener("change",h),this.disconnectedCallback=function(){l?.call(this),i.removeEventListener("change",h)},n.value?.call(this,i.matches)}}}class zc extends Qs{constructor(t){if(super(t),t.type!==Js.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return fe}update(t,[s]){const n=t.element,i=t.options?.host;Array.from(i.attributes).forEach(r=>{s(r)&&n.setAttribute(r.name.replace("gds-",""),r.value)})}}const Ac=ks(zc),Ma=new WeakMap;function Lc(e){return(t,...s)=>{let n=Ma.get(t);return n||(n=t.map(i=>i.replace(/\n[\s]+</gm,"<")),n.raw=t.raw,Ma.set(t,n)),e(n,...s)}}(function(e){if(typeof e.requestSubmit=="function")return;e.requestSubmit=function(n=null){n?(t(n,this),n.click()):(n=document.createElement("input"),n.type="submit",n.hidden=!0,this.appendChild(n),n.click(),this.removeChild(n))};function t(n,i){n instanceof HTMLElement||s(TypeError,"parameter 1 is not of type 'HTMLElement'"),n.type=="submit"||s(TypeError,"The specified element is not a submit button"),n.form==i||s(DOMException,"The specified element is not owned by this form element","NotFoundError")}function s(n,i,r="Error"){throw new n("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+i+".",r)}})(HTMLFormElement.prototype);var he;class ne extends R{constructor(){super(),c(this,he,void 0),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{U(this,he,this.attachInternals())}catch{U(this,he,{form:this.closest("form"),setFormValue:s=>{this._internalValue=s},setValidity:(s,n)=>{a(this,he).validity=s,this.errorMessage=n||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:this.checkValidity.bind(this),reportValidity:this.reportValidity.bind(this)})}}connectedCallback(){if(super.connectedCallback(),typeof this.attachInternals!="function"){const t=this.closest("form");t&&(t.addEventListener("submit",this._handleFormSubmit.bind(this)),t.addEventListener("reset",this.formResetCallback.bind(this)))}}set invalid(t){const s=this.invalid;a(this,he).setValidity({...a(this,he).validity,customError:t,valid:!t},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",s),a(this,he).checkValidity()}get invalid(){return!a(this,he).validity.valid}get value(){return this._internalValue}set value(t){this._internalValue=t,a(this,he).setFormValue(t)}get form(){return a(this,he).form}get validity(){return a(this,he).validity}get validationMessage(){return a(this,he).validationMessage}get willValidate(){return a(this,he).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const s=this.invalid,n=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=n[1]||this.errorMessage,a(this,he).setValidity(n[0],n[1],this._getValidityAnchor()),s!==this.invalid&&(this.requestUpdate("invalid",s),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),a(this,he).checkValidity()}reportValidity(){return a(this,he).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(t){t?.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(t){this.checkValidity(),this.validity.valid||t.preventDefault()}}he=new WeakMap;ne.formAssociated=!0;o([d({attribute:!1})],ne.prototype,"validator",2);o([d({type:Boolean})],ne.prototype,"required",2);o([d({attribute:"error-message"})],ne.prototype,"errorMessage",2);o([d({type:Boolean,reflect:!0})],ne.prototype,"invalid",1);o([d()],ne.prototype,"label",2);o([d()],ne.prototype,"value",1);o([d({reflect:!0})],ne.prototype,"name",2);o([d({type:Boolean,reflect:!0})],ne.prototype,"disabled",2);o([Y("value",{waitUntilFirstUpdate:!0})],ne.prototype,"__handleValueChange",1);const Dc=`@layer tokens, core, a11y, ranks, sizes, variants, disabled;

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
`;var zs,gt,zt,Mo,il,Eo,To;const Wc=["aria-label","aria-haspopup","aria-expanded"],Oc=Lc(v);class pe extends ne{constructor(){super(...arguments),c(this,gt),c(this,Mo),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",c(this,zs,!1),c(this,Eo,()=>{const t=this._mainSlot?.assignedElements()??[];U(this,zs,t.length===1&&t.some(s=>s.tagName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),c(this,To,t=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:t}),this.form&&!a(this,gt,zt)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),ye.instance.apply(this,"gds-button")}focus(t){this._getValidityAnchor()?.focus(t)}render(){const t={button:!0,circle:a(this,zs),icon:a(this,zs),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",positive:this.variant==="positive",negative:this.variant==="negative",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},s=a(this,gt,zt)?On`a`:On`button`;return Cs`
      <${s}
        class=${xe(t)}
        type="${N(a(this,gt,zt)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||fe}
        href=${N(a(this,gt,zt)?this.href:void 0)}
        target=${N(a(this,gt,zt)?this.target:void 0)}
        rel=${N(a(this,gt,zt)?this.rel||a(this,Mo,il):void 0)}
        download=${N(a(this,gt,zt)?this.download:void 0)}
        part="_button"
        @click="${a(this,To)}"
        ${Ac(n=>n.name.startsWith("gds-aria")||n.name==="gds-role"||Wc.includes(n.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${a(this,Eo)}></slot>
        <slot name="trail"></slot>
        ${P(!this._isUsingTransitionalStyles,()=>Oc`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${s}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}}zs=new WeakMap;gt=new WeakSet;zt=function(){return this.href.length>0};Mo=new WeakSet;il=function(){return this.target==="_blank"?"noreferrer noopener":void 0};Eo=new WeakMap;To=new WeakMap;pe.styles=[G,re(Dc)];pe.shadowRootOptions={mode:"open",delegatesFocus:!0};o([d({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);o([x({selector:".button"})],pe.prototype,"justify-content",2);o([d({reflect:!0})],pe.prototype,"type",2);o([d({reflect:!0})],pe.prototype,"rank",2);o([d({reflect:!0})],pe.prototype,"variant",2);o([d({reflect:!0})],pe.prototype,"size",2);o([d()],pe.prototype,"label",2);o([d()],pe.prototype,"href",2);o([d()],pe.prototype,"target",2);o([d()],pe.prototype,"rel",2);o([d()],pe.prototype,"download",2);o([Z("slot:not([name])")],pe.prototype,"_mainSlot",2);o([Z(".button")],pe.prototype,"_button",2);o([eo({attributes:!0,childList:!1,subtree:!1,characterData:!1})],pe.prototype,"_attributeChanged",1);let xt=class extends ve($e(me(pe))){};xt=o([S("gds-button",{dependsOn:[Gs]})],xt);xt.define();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ea="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vc=(e,...t)=>({strTag:!0,strings:e,values:t}),Rc=Vc,Fc=e=>typeof e!="string"&&"strTag"in e,Bc=(e,t,s)=>{let n=e[0];for(let i=1;i<e.length;i++)n+=t[i-1],n+=e[i];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ic=e=>Fc(e)?Bc(e.strings,e.values):e;let A=Ic;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Hc{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(Ea,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Ea,this.__litLocalizeEventHandler)}}const Nc=e=>e.addController(new Hc(e)),Pc=Nc;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=()=>(e,t)=>(e.addInitializer(Pc),e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Gc{constructor(){this.settled=!1,this.promise=new Promise((t,s)=>{this._resolve=t,this._reject=s})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let e=0;e<256;e++)(e>>4&15).toString(16)+(e&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let jc=new Gc;jc.resolve();function zo(e){"@babel/helpers - typeof";return zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zo(e)}function Pt(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function de(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function ae(e){de(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||zo(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Qt(e,t){de(2,arguments);var s=ae(e),n=Pt(t);return isNaN(n)?new Date(NaN):(n&&s.setDate(s.getDate()+n),s)}function rl(e,t){de(2,arguments);var s=ae(e),n=Pt(t);if(isNaN(n))return new Date(NaN);if(!n)return s;var i=s.getDate(),r=new Date(s.getTime());r.setMonth(s.getMonth()+n+1,0);var l=r.getDate();return i>=l?r:(s.setFullYear(r.getFullYear(),r.getMonth(),i),s)}var Yc={};function Cr(){return Yc}function bs(e,t){var s,n,i,r,l,h,u,g;de(1,arguments);var m=Cr(),b=Pt((s=(n=(i=(r=t?.weekStartsOn)!==null&&r!==void 0?r:t==null||(l=t.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&i!==void 0?i:m.weekStartsOn)!==null&&n!==void 0?n:(u=m.locale)===null||u===void 0||(g=u.options)===null||g===void 0?void 0:g.weekStartsOn)!==null&&s!==void 0?s:0);if(!(b>=0&&b<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var k=ae(e),w=k.getDay(),$=(w<b?7:0)+w-b;return k.setDate(k.getDate()-$),k.setHours(0,0,0,0),k}function Ta(e){de(1,arguments);var t=ae(e);return t.setHours(0,0,0,0),t}function Uc(e,t){de(2,arguments);var s=Pt(t),n=s*7;return Qt(e,n)}function At(e,t){de(2,arguments);var s=Ta(e),n=Ta(t);return s.getTime()===n.getTime()}function qc(e){de(1,arguments);var t=ae(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(23,59,59,999),t}function Zc(e,t){var s;de(1,arguments);var n=e||{},i=ae(n.start),r=ae(n.end),l=r.getTime();if(!(i.getTime()<=l))throw new RangeError("Invalid interval");var h=[],u=i;u.setHours(0,0,0,0);var g=Number((s=void 0)!==null&&s!==void 0?s:1);if(g<1||isNaN(g))throw new RangeError("`options.step` must be a number greater than 1");for(;u.getTime()<=l;)h.push(ae(u)),u.setDate(u.getDate()+g),u.setHours(0,0,0,0);return h}function Xc(e,t){de(1,arguments);var s=e||{},n=ae(s.start),i=ae(s.end),r=i.getTime();if(!(n.getTime()<=r))throw new RangeError("Invalid interval");var l=bs(n,t),h=bs(i,t);l.setHours(15),h.setHours(15),r=h.getTime();for(var u=[],g=l;g.getTime()<=r;)g.setHours(0),u.push(ae(g)),g=Uc(g,1),g.setHours(15);return u}function Kc(e){de(1,arguments);var t=ae(e);return t.setDate(1),t.setHours(0,0,0,0),t}function Jc(e,t){var s,n,i,r,l,h;de(1,arguments);var u=ae(e),g=u.getFullYear(),m=Cr(),b=Pt((s=(n=(i=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&i!==void 0?i:m.firstWeekContainsDate)!==null&&n!==void 0?n:(l=m.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var k=new Date(0);k.setFullYear(g+1,0,b),k.setHours(0,0,0,0);var w=bs(k,t),$=new Date(0);$.setFullYear(g,0,b),$.setHours(0,0,0,0);var T=bs($,t);return u.getTime()>=w.getTime()?g+1:u.getTime()>=T.getTime()?g:g-1}function Qc(e,t){var s,n,i,r,l,h;de(1,arguments);var u=Cr(),g=Pt((s=(n=(i=(r=void 0)!==null&&r!==void 0?r:void 0)!==null&&i!==void 0?i:u.firstWeekContainsDate)!==null&&n!==void 0?n:(l=u.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&s!==void 0?s:1),m=Jc(e,t),b=new Date(0);b.setFullYear(m,0,g),b.setHours(0,0,0,0);var k=bs(b,t);return k}var eh=6048e5;function th(e,t){de(1,arguments);var s=ae(e),n=bs(s,t).getTime()-Qc(s,t).getTime();return Math.round(n/eh)+1}function sh(e){de(1,arguments);var t=ae(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(0,0,0,0),t}function nh(e,t){de(2,arguments);var s=ae(e),n=ae(t);return s.getFullYear()===n.getFullYear()&&s.getMonth()===n.getMonth()}function oh(e,t){de(2,arguments);var s=ae(e),n=Pt(t);return s.setHours(n),s}function ih(e,t){de(2,arguments);var s=Pt(t);return rl(e,-s)}const rh=z`
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
`;var ah=rh;function lh(e,t){const s=Kc(e),n=qc(e),i=Xc({start:s,end:n},{weekStartsOn:1});for(;i.length<6;)i.push(Qt(i[i.length-1],7));return Ce`${t(i.map(r=>({days:Zc({start:r,end:Qt(r,6)})})))}`}var Vn,$r,Ao,al;let te=class extends R{constructor(){super(...arguments),c(this,Vn),c(this,Ao),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=e=>e.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=sh(new Date(this.focusedYear,e,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),s.setMonth(e),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){return this.shadowRoot?.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),ye.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",f(this,Ao,al)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){super.focus(),this._elFocusedCell?.focus()}render(){const e=new Date;return Ce`<table role="grid" aria-label="${N(this.label)}">
      ${P(!this.hideDayNames,()=>Ce`<thead role="rowgroup">
            <tr role="row">
              ${P(this.showWeekNumbers,()=>Ce`<th></th>`)}
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
        ${lh(this.focusedDate,t=>Ce`
            ${t.map(s=>Ce`
                <tr role="row">
                  ${P(this.showWeekNumbers,()=>Ce`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${th(s.days[0])}
                      </td>`)}
                  ${s.days.map(n=>{const i=this.customizedDates&&this.customizedDates.find(b=>At(b.date,n)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(b=>At(b,n))),...i},l=!nh(this.focusedDate,n),h=(n<this.min||n>this.max)&&!At(n,this.min)&&!At(n,this.max),u=n.getDay()===0||n.getDay()===6,g=r.disabled||l||h||this.disabledWeekends&&u;return this.hideExtraneousDays&&l?Ce`<td inert></td>`:Ce`
                          <td
                            role="${N(g?void 0:"gridcell")}"
                            class="${xe({"custom-date":!!i,disabled:!!g,today:At(e,n)})}"
                            ?disabled=${g}
                            tabindex="${At(this.focusedDate,n)?0:-1}"
                            aria-selected="${this.value&&At(this.value,n)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(n)}"
                            @click=${()=>g?null:f(this,Vn,$r).call(this,n)}
                            id="dateCell-${n.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${r?r?.color:""}"
                              >${n.getDate()}</span
                            >

                            ${P(r.indicator,()=>Ce`<span
                                  class="indicator-${r?.indicator}"
                                  style="--_color: ${r?.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};Vn=new WeakSet;$r=function(e){const t=oh(e,12);this.value=t,this.dispatchCustomEvent("change",{detail:t,bubbles:!1,composed:!1})};Ao=new WeakSet;al=function(e){let t=!1,s=new Date(this.focusedDate);e.key==="ArrowLeft"?(s=Qt(this.focusedDate,-1),t=!0):e.key==="ArrowRight"?(s=Qt(this.focusedDate,1),t=!0):e.key==="ArrowUp"?(s=Qt(this.focusedDate,-7),t=!0):e.key==="ArrowDown"?(s=Qt(this.focusedDate,7),t=!0):e.key==="Enter"||e.key===" "?(this._elFocusedCell?.hasAttribute("disabled")||f(this,Vn,$r).call(this,this.focusedDate),t=!0):e.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):e.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):e.key==="PageUp"?(s=ih(this.focusedDate,1),t=!0):e.key==="PageDown"&&(s=rl(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus()}))};te.styles=[G,ah];te.shadowRootOptions={mode:"open",delegatesFocus:!0};o([d()],te.prototype,"value",2);o([d({type:Date})],te.prototype,"min",2);o([d({type:Date})],te.prototype,"max",2);o([d()],te.prototype,"focusedDate",2);o([d({type:Boolean,attribute:"disabled-weekends"})],te.prototype,"disabledWeekends",2);o([d({type:Array,attribute:"disabled-dates"})],te.prototype,"disabledDates",2);o([d({type:Number})],te.prototype,"focusedMonth",1);o([d({type:Number})],te.prototype,"focusedYear",1);o([d({type:Boolean})],te.prototype,"showWeekNumbers",2);o([d({type:Boolean})],te.prototype,"hideExtraneousDays",2);o([d({type:Boolean})],te.prototype,"hideDayNames",2);o([d({attribute:!1})],te.prototype,"customizedDates",2);o([d()],te.prototype,"label",2);o([d({attribute:!1})],te.prototype,"dateLabelTemplate",2);o([le()],te.prototype,"_currentLocale",2);o([Z('td[tabindex="0"]')],te.prototype,"_elFocusedCell",2);o([Y("value")],te.prototype,"_valueChanged",1);te=o([S("gds-calendar"),Se()],te);let Ft=class extends O{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return v`<slot></slot>`}};Ft.styles=[G,z`
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
    `];o([x({property:"box-shadow",valueTemplate:e=>`var(--gds-sys-shadow-${e})`})],Ft.prototype,"shadow",2);o([x({styleTemplate:function(e,t){return`
      --_border-color: var(--gds-sys-color-l${this.level}-background-${t});
      --_background-color: var(--gds-sys-color-l${this.level}-background-${t});
      --_color: var(--gds-sys-color-l${this.level}-content-${t});
      `}})],Ft.prototype,"variant",2);Ft=o([S("gds-card")],Ft);Ft.define();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Lo=class extends Qs{constructor(t){if(super(t),this.it=fe,t.type!==Js.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===fe||t==null)return this._t=void 0,this.it=t;if(t===Ps)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};Lo.directiveName="unsafeHTML",Lo.resultType=1;const ll=ks(Lo),dh=z`
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
`;var ch=dh;class Q extends $e(me(R)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.box=!1,this.label=""}get svgAttributes(){const t=this.constructor,s={fill:"none",xmlns:"http://www.w3.org/2000/svg",...this.size===void 0&&{width:this.width||t._width,height:this.width||t._height}||{},viewBox:this.box||t._viewBox,part:"icon"};return this.label?{...s,"aria-label":this.label}:{...s,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([s,n])=>n!==void 0).map(([s,n])=>`${s}="${n}"`).join(`
      `)}render(){const t=this.svgAttributes;let s=this.svgContent||"";this.stroke&&(s=this.applyStroke(s));const n=`
      <svg ${this.generateAttributesString(t)}>
        ${s}
      </svg>
    `;return Ce`${ll(n)}`}}Q.styles=[G,ch];o([x({...Me,property:"height",selector:"svg"})],Q.prototype,"size",2);o([d({type:Number})],Q.prototype,"width",2);o([d({type:Number})],Q.prototype,"height",2);o([d({type:Boolean})],Q.prototype,"solid",2);o([d({type:Number})],Q.prototype,"stroke",2);o([d()],Q.prototype,"level",2);o([x(Ks("content"))],Q.prototype,"color",2);o([d({type:String})],Q.prototype,"box",2);o([d({type:String})],Q.prototype,"label",2);Q.define();let _t=class extends Q{};_t._regularSVG='<path d="M12 2.75L12.6457 2.36845C12.5108 2.1401 12.2652 2 12 2C11.7348 2 11.4892 2.1401 11.3543 2.36845L12 2.75ZM2.25 19.25L1.60431 18.8685C1.4673 19.1003 1.46512 19.3878 1.59859 19.6217C1.73207 19.8556 1.9807 20 2.25 20V19.25ZM21.75 19.25V20C22.0193 20 22.2679 19.8556 22.4014 19.6217C22.5349 19.3878 22.5327 19.1003 22.3957 18.8685L21.75 19.25ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75H11.25ZM12.75 15.74C12.75 15.3258 12.4142 14.99 12 14.99C11.5858 14.99 11.25 15.3258 11.25 15.74H12.75ZM12 2.75L11.3543 2.36845L1.60431 18.8685L2.25 19.25L2.89569 19.6315L12.6457 3.13155L12 2.75ZM2.25 19.25V20H21.75V19.25V18.5H2.25V19.25ZM21.75 19.25L22.3957 18.8685L12.6457 2.36845L12 2.75L11.3543 3.13155L21.1043 19.6315L21.75 19.25ZM12 9.75H11.25V13.25H12H12.75V9.75H12ZM12.25 15.75H11.5C11.5 15.4739 11.7239 15.25 12 15.25V16V16.75C12.5523 16.75 13 16.3023 13 15.75H12.25ZM12 16V15.25C12.2761 15.25 12.5 15.4739 12.5 15.75H11.75H11C11 16.3023 11.4477 16.75 12 16.75V16ZM11.75 15.75H12.5C12.5 16.0261 12.2761 16.25 12 16.25V15.5V14.75C11.4477 14.75 11 15.1977 11 15.75H11.75ZM12 15.5V16.25C11.7239 16.25 11.5 16.0261 11.5 15.75H12.25H13C13 15.1977 12.5523 14.75 12 14.75V15.5ZM12 15.75H12.75V15.74H12H11.25V15.75H12Z" fill="currentColor"/>';_t._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5108 2.1401 12.6457 2.36845L22.3957 18.8685C22.5327 19.1003 22.5349 19.3878 22.4014 19.6217C22.2679 19.8556 22.0193 20 21.75 20H2.25C1.9807 20 1.73207 19.8556 1.59859 19.6217C1.46512 19.3878 1.4673 19.1003 1.60431 18.8685L11.3543 2.36845C11.4892 2.1401 11.7348 2 12 2ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z" fill="currentColor"/>';_t._name="triangle-exclamation";_t._width=24;_t._height=24;_t._viewBox="0 0 24 24";_t=o([S("gds-icon-triangle-exclamation")],_t);const hh=z`
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
`;var Do,dl;let Ie=class extends R{constructor(){super(...arguments),c(this,Do)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter)}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return v`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${P(this.errorMessage,()=>v`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${P(Number.isInteger(this.charCounter),()=>f(this,Do,dl).call(this,this.charCounter))}
      </div>
    </div>`}};Do=new WeakSet;dl=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",v`<gds-badge variant="${t}">${e}</gds-badge>`};Ie.styles=[hh];o([d({type:Number})],Ie.prototype,"charCounter",2);o([d()],Ie.prototype,"errorMessage",2);o([Y("charCounter"),Y("errorMessage")],Ie.prototype,"_handleVisibilityChange",1);Ie=o([S("gds-form-control-footer",{dependsOn:[Be,_t]})],Ie);let wt=class extends Q{};wt._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7.375C12.3452 7.375 12.625 7.65482 12.625 8C12.625 8.34518 12.3452 8.625 12 8.625C11.6548 8.625 11.375 8.34518 11.375 8C11.375 7.65482 11.6548 7.375 12 7.375Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>';wt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>';wt._name="circle-info";wt._width=24;wt._height=24;wt._viewBox="0 0 24 24";wt=o([S("gds-icon-circle-info")],wt);const uh=z`
  @layer base, reset, transitional-styles;
  @layer base {
    #label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: var(--gds-sys-text-line-height-detail-m);
      color: var(--gds-sys-color-l2-content-primary);
    }

    #label-row > div {
      display: flex;
      flex-direction: column;
    }

    ::slotted(label) {
      font-weight: var(--gds-sys-text-weight-book);
    }

    :host(.size-small) slot[name='supporting-text'],
    :host(.size-small) ::slotted(label) {
      font-size: var(--gds-sys-text-size-detail-s);
      line-height: var(--gds-sys-text-line-height-detail-s);
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
`;var Sr,cl,Wo,Oo,ln,Vo,hl;let He=class extends R{constructor(){super(...arguments),c(this,Sr),c(this,Vo),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,c(this,Wo,()=>v`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${A("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${a(this,Oo)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),c(this,Oo,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this._extendedSupportingText?.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText})}),c(this,ln,()=>{this.showExtendedSupportingText&&this._extendedSupportingText?.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`)})}render(){return v`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${P(this._hasExtendedSupportingText,a(this,Wo))}
      </div>

      ${f(this,Vo,hl).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",a(this,ln))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",a(this,ln))}};Sr=new WeakSet;cl=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};Wo=new WeakMap;Oo=new WeakMap;ln=new WeakMap;Vo=new WeakSet;hl=function(){return v`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${f(this,Sr,cl)}
        ></slot>
      </div>
    `};He.styles=[uh];o([d({type:Boolean,reflect:!0})],He.prototype,"showExtendedSupportingText",2);o([le()],He.prototype,"_hasExtendedSupportingText",2);o([Z("#extended-supporting-text")],He.prototype,"_extendedSupportingText",2);He=o([S("gds-form-control-header",{dependsOn:[xt,Ft,wt]}),Se()],He);const ph=z`
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
`;var Ro,Fo,ul,Mr,pl,Er,gl,Tr,fl,Rn,zr,Ar,yl,Lr,bl;let Ne=class extends ne{constructor(){super(...arguments),c(this,Fo),c(this,Mr),c(this,Er),c(this,Tr),c(this,Rn),c(this,Ar),c(this,Lr),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,c(this,Ro,()=>{this.checkboxes.forEach(e=>{e.invalid=this.invalid})})}get value(){return this._internalValue||[]}set value(e){this._internalValue=e}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this.checkboxes.pop()}_handleValueChange(){this.checkboxes.forEach(e=>{e.checked=this.value.includes(e.value)||!1})}focus(){this.checkboxes[0]?.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",a(this,Ro))}render(){const e={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return v`<div
      role="group"
      id="checkboxgroup"
      class=${xe(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${f(this,Fo,ul).call(this)}
    </div>`}_syncOnDOMChange(){f(this,Rn,zr).call(this)}};Ro=new WeakMap;Fo=new WeakSet;ul=function(){return[f(this,Mr,pl).call(this),f(this,Er,gl).call(this),f(this,Lr,bl).call(this)].map(t=>v`${t}`)};Mr=new WeakSet;pl=function(){if(this.label)return v`<gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};Er=new WeakSet;gl=function(){return v`<div class="content">
      <slot @input=${f(this,Tr,fl)}></slot>
    </div>`};Tr=new WeakSet;fl=function(e){e&&e.stopPropagation(),f(this,Rn,zr).call(this),f(this,Ar,yl).call(this)};Rn=new WeakSet;zr=function(){const e=this.checkboxes.filter(t=>t.checked).map(t=>t.value);JSON.stringify(e)!==JSON.stringify(this.value)&&(this.value=e)};Ar=new WeakSet;yl=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};Lr=new WeakSet;bl=function(){return v`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};Ne.styles=[ph];o([d()],Ne.prototype,"size",2);o([d()],Ne.prototype,"direction",2);o([d({attribute:"supporting-text"})],Ne.prototype,"supportingText",2);o([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],Ne.prototype,"showExtendedSupportingText",2);o([d({type:Array})],Ne.prototype,"value",1);o([Y("value",{waitUntilFirstUpdate:!0})],Ne.prototype,"_handleValueChange",1);o([eo({attributes:!0,childList:!0,subtree:!0,characterData:!0})],Ne.prototype,"_syncOnDOMChange",1);Ne=o([Se()],Ne);let Bo=class extends me($e(ve(Ne))){};Bo=o([S("gds-checkbox-group",{dependsOn:[He,Ie]})],Bo);Bo.define();const gh=z`
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
`;let ns=class extends R{constructor(){super(),this.label="",this.supportingText=""}render(){const e={label:!0,"has-supporting-text":!!this.supportingText};return v`
      <div class="container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${xe(e)}">
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
      </div>
    `}};ns.styles=[G,gh];o([d()],ns.prototype,"label",2);o([d({attribute:"supporting-text"})],ns.prototype,"supportingText",2);ns=o([S("gds-toggle-control-base"),Se()],ns);var vl=z`
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
`;const fh=e=>ml({...e,type:"checkbox"}),yh=e=>ml({...e,type:"radio"}),ml=e=>{const{type:t,checked:s,indeterminate:n,disabled:i,invalid:r}=e;return v`
    <div class="rbcb ${xe({"rbcb--checkbox":t==="checkbox","rbcb--radio":t==="radio","--checked":s,"--indeterminate":n,"--disabled":i,"--invalid":r})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${P(t==="checkbox",()=>v`
            ${P(n,()=>v`<gds-icon-minus-small
                  class="rbcb__icon"
                  stroke="4"
                ></gds-icon-minus-small>`,()=>P(s,()=>v`<gds-icon-checkmark
                      class="rbcb__icon"
                      stroke="4"
                    ></gds-icon-checkmark>`))}
          `)}
      </div>
    </div>
  `};let Ae=class extends Q{};Ae._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Ae._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7425 2.99442C22.2979 3.40452 22.4156 4.18717 22.0055 4.74251L10.0055 20.9925C9.80427 21.2651 9.501 21.4442 9.16518 21.489C8.82936 21.5338 8.48974 21.4403 8.22411 21.23L2.22411 16.48C1.68284 16.0515 1.59143 15.2654 2.01993 14.7241C2.44844 14.1828 3.2346 14.0914 3.77587 14.5199L8.76235 18.4675L19.9944 3.2574C20.4045 2.70206 21.1872 2.58432 21.7425 2.99442Z" fill="currentColor"/>';Ae._name="checkmark";Ae._width=24;Ae._height=24;Ae._viewBox="0 0 24 24";Ae=o([S("gds-icon-checkmark")],Ae);const xl=e=>{class t extends e{constructor(){super(...arguments),this.onblur=n=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:n.relatedTarget}))},this.onfocus=n=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:n.relatedTarget}))}}focus(n){this.setAttribute("tabindex","0"),super.focus(n)}}return t},bh=z`
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
    }

    :host(:focus-visible) div::before {
      inset: var(--gds-sys-space-2xs);
      opacity: 1;
      visivility: visible;
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
`;var _l=bh,As,dn,Io;let tt=class extends xl(R){constructor(){super(),c(this,dn),c(this,As,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",f(this,dn,Io)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),f(this,dn,Io).call(this,e))})}get hidden(){return a(this,As)}set hidden(e){const t=e.toString();U(this,As,t==="true"),a(this,As)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),ye.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){const e=this.parentElement?.multiple,t=v`
      <span class="checkbox ${xe({checked:this.selected})}">
        ${this.selected?v`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),v`<div>${P(e,()=>t)} <slot></slot></div>`}};As=new WeakMap;dn=new WeakSet;Io=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};tt.styles=[G,_l];o([d()],tt.prototype,"value",2);o([d({type:Boolean,reflect:!0})],tt.prototype,"hidden",1);o([d({attribute:"aria-selected",reflect:!0})],tt.prototype,"selected",2);o([d({type:Boolean,reflect:!0})],tt.prototype,"isPlaceholder",2);o([Y("isPlaceholder")],tt.prototype,"_handlePlaceholderStatusChange",1);tt=o([S("gds-option",{dependsOn:[Ae]})],tt);const vh=z`
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
`;var mh=vh;let Fn=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>ye.instance.apply(this,"gds-menu-heading"))}render(){return Ce`<slot></slot>`}};Fn.styles=mh;Fn=o([S("gds-menu-heading")],Fn);var Ho;let vs=class extends xl(R){constructor(){super(...arguments),c(this,Ho,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",a(this,Ho)),ye.instance.apply(this,"gds-option")}render(){return v`<div><slot></slot></div>`}};Ho=new WeakMap;vs.styles=[_l];vs=o([S("gds-menu-item")],vs);let st=class extends Q{};st._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';st._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>';st._name="chevron-left";st._width=24;st._height=24;st._viewBox="0 0 24 24";st=o([S("gds-icon-chevron-left")],st);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:xh}=Kd,_h=e=>e===null||typeof e!="object"&&typeof e!="function",wh=e=>e.strings===void 0,za=()=>document.createComment(""),Es=(e,t,s)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(s===void 0){const r=n.insertBefore(za(),i),l=n.insertBefore(za(),i);s=new xh(r,l,e,e.options)}else{const r=s._$AB.nextSibling,l=s._$AM,h=l!==e;if(h){let u;s._$AQ?.(e),s._$AM=e,s._$AP!==void 0&&(u=e._$AU)!==l._$AU&&s._$AP(u)}if(r!==i||h){let u=s._$AA;for(;u!==r;){const g=u.nextSibling;n.insertBefore(u,i),u=g}}}return s},Yt=(e,t,s=e)=>(e._$AI(t,s),e),kh={},Ch=(e,t=kh)=>e._$AH=t,$h=e=>e._$AH,go=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hs=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(t,!1),Hs(n,t);return!0},Bn=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},wl=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Eh(t)}};function Sh(e){this._$AN!==void 0?(Bn(this),this._$AM=e,wl(this)):this._$AM=e}function Mh(e,t=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let r=s;r<n.length;r++)Hs(n[r],!1),Bn(n[r]);else n!=null&&(Hs(n,!1),Bn(n));else Hs(this,e)}const Eh=e=>{e.type==Js.CHILD&&(e._$AP??=Mh,e._$AQ??=Sh)};class kl extends Qs{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),wl(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(Hs(this,t),Bn(this))}setValue(t){if(wh(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cl=()=>new Th;let Th=class{};const fo=new WeakMap,$l=ks(class extends kl{render(e){return fe}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),fe}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=fo.get(t);s===void 0&&(s=new WeakMap,fo.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?fo.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),zh=["top","right","bottom","left"],ms=Math.min,ts=Math.max,In=Math.round,on=Math.floor,et=e=>({x:e,y:e}),Ah={left:"right",right:"left",bottom:"top",top:"bottom"},Lh={start:"end",end:"start"};function No(e,t,s){return ts(e,ms(t,s))}function $s(e,t){return typeof e=="function"?e(t):e}function os(e){return e.split("-")[0]}function en(e){return e.split("-")[1]}function Sl(e){return e==="x"?"y":"x"}function Dr(e){return e==="y"?"height":"width"}const Dh=new Set(["top","bottom"]);function Rt(e){return Dh.has(os(e))?"y":"x"}function Wr(e){return Sl(Rt(e))}function Wh(e,t,s){s===void 0&&(s=!1);const n=en(e),i=Wr(e),r=Dr(i);let l=i==="x"?n===(s?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(l=Hn(l)),[l,Hn(l)]}function Oh(e){const t=Hn(e);return[Po(e),t,Po(t)]}function Po(e){return e.replace(/start|end/g,t=>Lh[t])}const Aa=["left","right"],La=["right","left"],Vh=["top","bottom"],Rh=["bottom","top"];function Fh(e,t,s){switch(e){case"top":case"bottom":return s?t?La:Aa:t?Aa:La;case"left":case"right":return t?Vh:Rh;default:return[]}}function Bh(e,t,s,n){const i=en(e);let r=Fh(os(e),s==="start",n);return i&&(r=r.map(l=>l+"-"+i),t&&(r=r.concat(r.map(Po)))),r}function Hn(e){return e.replace(/left|right|bottom|top/g,t=>Ah[t])}function Ih(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ml(e){return typeof e!="number"?Ih(e):{top:e,right:e,bottom:e,left:e}}function Nn(e){const{x:t,y:s,width:n,height:i}=e;return{width:n,height:i,top:s,left:t,right:t+n,bottom:s+i,x:t,y:s}}function Da(e,t,s){let{reference:n,floating:i}=e;const r=Rt(t),l=Wr(t),h=Dr(l),u=os(t),g=r==="y",m=n.x+n.width/2-i.width/2,b=n.y+n.height/2-i.height/2,k=n[h]/2-i[h]/2;let w;switch(u){case"top":w={x:m,y:n.y-i.height};break;case"bottom":w={x:m,y:n.y+n.height};break;case"right":w={x:n.x+n.width,y:b};break;case"left":w={x:n.x-i.width,y:b};break;default:w={x:n.x,y:n.y}}switch(en(t)){case"start":w[l]-=k*(s&&g?-1:1);break;case"end":w[l]+=k*(s&&g?-1:1);break}return w}const Hh=async(e,t,s)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:l}=s,h=r.filter(Boolean),u=await(l.isRTL==null?void 0:l.isRTL(t));let g=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:m,y:b}=Da(g,n,u),k=n,w={},$=0;for(let T=0;T<h.length;T++){const{name:D,fn:F}=h[T],{x:j,y:X,data:oe,reset:ee}=await F({x:m,y:b,initialPlacement:n,placement:k,strategy:i,middlewareData:w,rects:g,platform:l,elements:{reference:e,floating:t}});m=j??m,b=X??b,w={...w,[D]:{...w[D],...oe}},ee&&$<=50&&($++,typeof ee=="object"&&(ee.placement&&(k=ee.placement),ee.rects&&(g=ee.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:i}):ee.rects),{x:m,y:b}=Da(g,k,u)),T=-1)}return{x:m,y:b,placement:k,strategy:i,middlewareData:w}};async function js(e,t){var s;t===void 0&&(t={});const{x:n,y:i,platform:r,rects:l,elements:h,strategy:u}=e,{boundary:g="clippingAncestors",rootBoundary:m="viewport",elementContext:b="floating",altBoundary:k=!1,padding:w=0}=$s(t,e),$=Ml(w),D=h[k?b==="floating"?"reference":"floating":b],F=Nn(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(D)))==null||s?D:D.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(h.floating)),boundary:g,rootBoundary:m,strategy:u})),j=b==="floating"?{x:n,y:i,width:l.floating.width,height:l.floating.height}:l.reference,X=await(r.getOffsetParent==null?void 0:r.getOffsetParent(h.floating)),oe=await(r.isElement==null?void 0:r.isElement(X))?await(r.getScale==null?void 0:r.getScale(X))||{x:1,y:1}:{x:1,y:1},ee=Nn(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:h,rect:j,offsetParent:X,strategy:u}):j);return{top:(F.top-ee.top+$.top)/oe.y,bottom:(ee.bottom-F.bottom+$.bottom)/oe.y,left:(F.left-ee.left+$.left)/oe.x,right:(ee.right-F.right+$.right)/oe.x}}const Nh=e=>({name:"arrow",options:e,async fn(t){const{x:s,y:n,placement:i,rects:r,platform:l,elements:h,middlewareData:u}=t,{element:g,padding:m=0}=$s(e,t)||{};if(g==null)return{};const b=Ml(m),k={x:s,y:n},w=Wr(i),$=Dr(w),T=await l.getDimensions(g),D=w==="y",F=D?"top":"left",j=D?"bottom":"right",X=D?"clientHeight":"clientWidth",oe=r.reference[$]+r.reference[w]-k[w]-r.floating[$],ee=k[w]-r.reference[w],We=await(l.getOffsetParent==null?void 0:l.getOffsetParent(g));let _e=We?We[X]:0;(!_e||!await(l.isElement==null?void 0:l.isElement(We)))&&(_e=h.floating[X]||r.floating[$]);const Gt=oe/2-ee/2,ht=_e/2-T[$]/2-1,Oe=ms(b[F],ht),jt=ms(b[j],ht),ut=Oe,Ve=_e-T[$]-jt,ie=_e/2-T[$]/2+Gt,Re=No(ut,ie,Ve),ze=!u.arrow&&en(i)!=null&&ie!==Re&&r.reference[$]/2-(ie<ut?Oe:jt)-T[$]/2<0,we=ze?ie<ut?ie-ut:ie-Ve:0;return{[w]:k[w]+we,data:{[w]:Re,centerOffset:ie-Re-we,...ze&&{alignmentOffset:we}},reset:ze}}}),Ph=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,n;const{placement:i,middlewareData:r,rects:l,initialPlacement:h,platform:u,elements:g}=t,{mainAxis:m=!0,crossAxis:b=!0,fallbackPlacements:k,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:$="none",flipAlignment:T=!0,...D}=$s(e,t);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const F=os(i),j=Rt(h),X=os(h)===h,oe=await(u.isRTL==null?void 0:u.isRTL(g.floating)),ee=k||(X||!T?[Hn(h)]:Oh(h)),We=$!=="none";!k&&We&&ee.push(...Bh(h,T,$,oe));const _e=[h,...ee],Gt=await js(t,D),ht=[];let Oe=((n=r.flip)==null?void 0:n.overflows)||[];if(m&&ht.push(Gt[F]),b){const ie=Wh(i,l,oe);ht.push(Gt[ie[0]],Gt[ie[1]])}if(Oe=[...Oe,{placement:i,overflows:ht}],!ht.every(ie=>ie<=0)){var jt,ut;const ie=(((jt=r.flip)==null?void 0:jt.index)||0)+1,Re=_e[ie];if(Re&&(!(b==="alignment"?j!==Rt(Re):!1)||Oe.every(ke=>Rt(ke.placement)===j?ke.overflows[0]>0:!0)))return{data:{index:ie,overflows:Oe},reset:{placement:Re}};let ze=(ut=Oe.filter(we=>we.overflows[0]<=0).sort((we,ke)=>we.overflows[1]-ke.overflows[1])[0])==null?void 0:ut.placement;if(!ze)switch(w){case"bestFit":{var Ve;const we=(Ve=Oe.filter(ke=>{if(We){const Fe=Rt(ke.placement);return Fe===j||Fe==="y"}return!0}).map(ke=>[ke.placement,ke.overflows.filter(Fe=>Fe>0).reduce((Fe,sn)=>Fe+sn,0)]).sort((ke,Fe)=>ke[1]-Fe[1])[0])==null?void 0:Ve[0];we&&(ze=we);break}case"initialPlacement":ze=h;break}if(i!==ze)return{reset:{placement:ze}}}return{}}}};function Wa(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Oa(e){return zh.some(t=>e[t]>=0)}const Gh=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:s}=t,{strategy:n="referenceHidden",...i}=$s(e,t);switch(n){case"referenceHidden":{const r=await js(t,{...i,elementContext:"reference"}),l=Wa(r,s.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:Oa(l)}}}case"escaped":{const r=await js(t,{...i,altBoundary:!0}),l=Wa(r,s.floating);return{data:{escapedOffsets:l,escaped:Oa(l)}}}default:return{}}}}},jh=new Set(["left","top"]);async function Yh(e,t){const{placement:s,platform:n,elements:i}=e,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),l=os(s),h=en(s),u=Rt(s)==="y",g=jh.has(l)?-1:1,m=r&&u?-1:1,b=$s(t,e);let{mainAxis:k,crossAxis:w,alignmentAxis:$}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:b.mainAxis||0,crossAxis:b.crossAxis||0,alignmentAxis:b.alignmentAxis};return h&&typeof $=="number"&&(w=h==="end"?$*-1:$),u?{x:w*m,y:k*g}:{x:k*g,y:w*m}}const Uh=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var s,n;const{x:i,y:r,placement:l,middlewareData:h}=t,u=await Yh(t,e);return l===((s=h.offset)==null?void 0:s.placement)&&(n=h.arrow)!=null&&n.alignmentOffset?{}:{x:i+u.x,y:r+u.y,data:{...u,placement:l}}}}},qh=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:n,placement:i}=t,{mainAxis:r=!0,crossAxis:l=!1,limiter:h={fn:D=>{let{x:F,y:j}=D;return{x:F,y:j}}},...u}=$s(e,t),g={x:s,y:n},m=await js(t,u),b=Rt(os(i)),k=Sl(b);let w=g[k],$=g[b];if(r){const D=k==="y"?"top":"left",F=k==="y"?"bottom":"right",j=w+m[D],X=w-m[F];w=No(j,w,X)}if(l){const D=b==="y"?"top":"left",F=b==="y"?"bottom":"right",j=$+m[D],X=$-m[F];$=No(j,$,X)}const T=h.fn({...t,[k]:w,[b]:$});return{...T,data:{x:T.x-s,y:T.y-n,enabled:{[k]:r,[b]:l}}}}}};function to(){return typeof window<"u"}function Ss(e){return El(e)?(e.nodeName||"").toLowerCase():"#document"}function Ee(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ct(e){var t;return(t=(El(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function El(e){return to()?e instanceof Node||e instanceof Ee(e).Node:!1}function Pe(e){return to()?e instanceof Element||e instanceof Ee(e).Element:!1}function nt(e){return to()?e instanceof HTMLElement||e instanceof Ee(e).HTMLElement:!1}function Va(e){return!to()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ee(e).ShadowRoot}const Zh=new Set(["inline","contents"]);function tn(e){const{overflow:t,overflowX:s,overflowY:n,display:i}=Ge(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+s)&&!Zh.has(i)}const Xh=new Set(["table","td","th"]);function Kh(e){return Xh.has(Ss(e))}const Jh=[":popover-open",":modal"];function so(e){return Jh.some(t=>{try{return e.matches(t)}catch{return!1}})}const Qh=["transform","translate","scale","rotate","perspective"],eu=["transform","translate","scale","rotate","perspective","filter"],tu=["paint","layout","strict","content"];function Or(e){const t=Vr(),s=Pe(e)?Ge(e):e;return Qh.some(n=>s[n]?s[n]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||eu.some(n=>(s.willChange||"").includes(n))||tu.some(n=>(s.contain||"").includes(n))}function su(e){let t=Bt(e);for(;nt(t)&&!xs(t);){if(Or(t))return t;if(so(t))return null;t=Bt(t)}return null}function Vr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const nu=new Set(["html","body","#document"]);function xs(e){return nu.has(Ss(e))}function Ge(e){return Ee(e).getComputedStyle(e)}function no(e){return Pe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Bt(e){if(Ss(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Va(e)&&e.host||ct(e);return Va(t)?t.host:t}function Tl(e){const t=Bt(e);return xs(t)?e.ownerDocument?e.ownerDocument.body:e.body:nt(t)&&tn(t)?t:Tl(t)}function Ys(e,t,s){var n;t===void 0&&(t=[]),s===void 0&&(s=!0);const i=Tl(e),r=i===((n=e.ownerDocument)==null?void 0:n.body),l=Ee(i);if(r){const h=Go(l);return t.concat(l,l.visualViewport||[],tn(i)?i:[],h&&s?Ys(h):[])}return t.concat(i,Ys(i,[],s))}function Go(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function zl(e){const t=Ge(e);let s=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=nt(e),r=i?e.offsetWidth:s,l=i?e.offsetHeight:n,h=In(s)!==r||In(n)!==l;return h&&(s=r,n=l),{width:s,height:n,$:h}}function Rr(e){return Pe(e)?e:e.contextElement}function ys(e){const t=Rr(e);if(!nt(t))return et(1);const s=t.getBoundingClientRect(),{width:n,height:i,$:r}=zl(t);let l=(r?In(s.width):s.width)/n,h=(r?In(s.height):s.height)/i;return(!l||!Number.isFinite(l))&&(l=1),(!h||!Number.isFinite(h))&&(h=1),{x:l,y:h}}const ou=et(0);function Al(e){const t=Ee(e);return!Vr()||!t.visualViewport?ou:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function iu(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==Ee(e)?!1:t}function is(e,t,s,n){t===void 0&&(t=!1),s===void 0&&(s=!1);const i=e.getBoundingClientRect(),r=Rr(e);let l=et(1);t&&(n?Pe(n)&&(l=ys(n)):l=ys(e));const h=iu(r,s,n)?Al(r):et(0);let u=(i.left+h.x)/l.x,g=(i.top+h.y)/l.y,m=i.width/l.x,b=i.height/l.y;if(r){const k=Ee(r),w=n&&Pe(n)?Ee(n):n;let $=k,T=Go($);for(;T&&n&&w!==$;){const D=ys(T),F=T.getBoundingClientRect(),j=Ge(T),X=F.left+(T.clientLeft+parseFloat(j.paddingLeft))*D.x,oe=F.top+(T.clientTop+parseFloat(j.paddingTop))*D.y;u*=D.x,g*=D.y,m*=D.x,b*=D.y,u+=X,g+=oe,$=Ee(T),T=Go($)}}return Nn({width:m,height:b,x:u,y:g})}function Fr(e,t){const s=no(e).scrollLeft;return t?t.left+s:is(ct(e)).left+s}function Ll(e,t,s){s===void 0&&(s=!1);const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-(s?0:Fr(e,n)),r=n.top+t.scrollTop;return{x:i,y:r}}function ru(e){let{elements:t,rect:s,offsetParent:n,strategy:i}=e;const r=i==="fixed",l=ct(n),h=t?so(t.floating):!1;if(n===l||h&&r)return s;let u={scrollLeft:0,scrollTop:0},g=et(1);const m=et(0),b=nt(n);if((b||!b&&!r)&&((Ss(n)!=="body"||tn(l))&&(u=no(n)),nt(n))){const w=is(n);g=ys(n),m.x=w.x+n.clientLeft,m.y=w.y+n.clientTop}const k=l&&!b&&!r?Ll(l,u,!0):et(0);return{width:s.width*g.x,height:s.height*g.y,x:s.x*g.x-u.scrollLeft*g.x+m.x+k.x,y:s.y*g.y-u.scrollTop*g.y+m.y+k.y}}function au(e){return Array.from(e.getClientRects())}function lu(e){const t=ct(e),s=no(e),n=e.ownerDocument.body,i=ts(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=ts(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let l=-s.scrollLeft+Fr(e);const h=-s.scrollTop;return Ge(n).direction==="rtl"&&(l+=ts(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:l,y:h}}function du(e,t){const s=Ee(e),n=ct(e),i=s.visualViewport;let r=n.clientWidth,l=n.clientHeight,h=0,u=0;if(i){r=i.width,l=i.height;const g=Vr();(!g||g&&t==="fixed")&&(h=i.offsetLeft,u=i.offsetTop)}return{width:r,height:l,x:h,y:u}}const cu=new Set(["absolute","fixed"]);function hu(e,t){const s=is(e,!0,t==="fixed"),n=s.top+e.clientTop,i=s.left+e.clientLeft,r=nt(e)?ys(e):et(1),l=e.clientWidth*r.x,h=e.clientHeight*r.y,u=i*r.x,g=n*r.y;return{width:l,height:h,x:u,y:g}}function Ra(e,t,s){let n;if(t==="viewport")n=du(e,s);else if(t==="document")n=lu(ct(e));else if(Pe(t))n=hu(t,s);else{const i=Al(e);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Nn(n)}function Dl(e,t){const s=Bt(e);return s===t||!Pe(s)||xs(s)?!1:Ge(s).position==="fixed"||Dl(s,t)}function uu(e,t){const s=t.get(e);if(s)return s;let n=Ys(e,[],!1).filter(h=>Pe(h)&&Ss(h)!=="body"),i=null;const r=Ge(e).position==="fixed";let l=r?Bt(e):e;for(;Pe(l)&&!xs(l);){const h=Ge(l),u=Or(l);!u&&h.position==="fixed"&&(i=null),(r?!u&&!i:!u&&h.position==="static"&&!!i&&cu.has(i.position)||tn(l)&&!u&&Dl(e,l))?n=n.filter(m=>m!==l):i=h,l=Bt(l)}return t.set(e,n),n}function pu(e){let{element:t,boundary:s,rootBoundary:n,strategy:i}=e;const l=[...s==="clippingAncestors"?so(t)?[]:uu(t,this._c):[].concat(s),n],h=l[0],u=l.reduce((g,m)=>{const b=Ra(t,m,i);return g.top=ts(b.top,g.top),g.right=ms(b.right,g.right),g.bottom=ms(b.bottom,g.bottom),g.left=ts(b.left,g.left),g},Ra(t,h,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function gu(e){const{width:t,height:s}=zl(e);return{width:t,height:s}}function fu(e,t,s){const n=nt(t),i=ct(t),r=s==="fixed",l=is(e,!0,r,t);let h={scrollLeft:0,scrollTop:0};const u=et(0);function g(){u.x=Fr(i)}if(n||!n&&!r)if((Ss(t)!=="body"||tn(i))&&(h=no(t)),n){const w=is(t,!0,r,t);u.x=w.x+t.clientLeft,u.y=w.y+t.clientTop}else i&&g();r&&!n&&i&&g();const m=i&&!n&&!r?Ll(i,h):et(0),b=l.left+h.scrollLeft-u.x-m.x,k=l.top+h.scrollTop-u.y-m.y;return{x:b,y:k,width:l.width,height:l.height}}function yo(e){return Ge(e).position==="static"}function Fa(e,t){if(!nt(e)||Ge(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return ct(e)===s&&(s=s.ownerDocument.body),s}function Wl(e,t){const s=Ee(e);if(so(e))return s;if(!nt(e)){let i=Bt(e);for(;i&&!xs(i);){if(Pe(i)&&!yo(i))return i;i=Bt(i)}return s}let n=Fa(e,t);for(;n&&Kh(n)&&yo(n);)n=Fa(n,t);return n&&xs(n)&&yo(n)&&!Or(n)?s:n||su(e)||s}const yu=async function(e){const t=this.getOffsetParent||Wl,s=this.getDimensions,n=await s(e.floating);return{reference:fu(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function bu(e){return Ge(e).direction==="rtl"}const vu={convertOffsetParentRelativeRectToViewportRelativeRect:ru,getDocumentElement:ct,getClippingRect:pu,getOffsetParent:Wl,getElementRects:yu,getClientRects:au,getDimensions:gu,getScale:ys,isElement:Pe,isRTL:bu};function Ol(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function mu(e,t){let s=null,n;const i=ct(e);function r(){var h;clearTimeout(n),(h=s)==null||h.disconnect(),s=null}function l(h,u){h===void 0&&(h=!1),u===void 0&&(u=1),r();const g=e.getBoundingClientRect(),{left:m,top:b,width:k,height:w}=g;if(h||t(),!k||!w)return;const $=on(b),T=on(i.clientWidth-(m+k)),D=on(i.clientHeight-(b+w)),F=on(m),X={rootMargin:-$+"px "+-T+"px "+-D+"px "+-F+"px",threshold:ts(0,ms(1,u))||1};let oe=!0;function ee(We){const _e=We[0].intersectionRatio;if(_e!==u){if(!oe)return l();_e?l(!1,_e):n=setTimeout(()=>{l(!1,1e-7)},1e3)}_e===1&&!Ol(g,e.getBoundingClientRect())&&l(),oe=!1}try{s=new IntersectionObserver(ee,{...X,root:i.ownerDocument})}catch{s=new IntersectionObserver(ee,X)}s.observe(e)}return l(!0),r}function xu(e,t,s,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:h=typeof IntersectionObserver=="function",animationFrame:u=!1}=n,g=Rr(e),m=i||r?[...g?Ys(g):[],...Ys(t)]:[];m.forEach(F=>{i&&F.addEventListener("scroll",s,{passive:!0}),r&&F.addEventListener("resize",s)});const b=g&&h?mu(g,s):null;let k=-1,w=null;l&&(w=new ResizeObserver(F=>{let[j]=F;j&&j.target===g&&w&&(w.unobserve(t),cancelAnimationFrame(k),k=requestAnimationFrame(()=>{var X;(X=w)==null||X.observe(t)})),s()}),g&&!u&&w.observe(g),w.observe(t));let $,T=u?is(e):null;u&&D();function D(){const F=is(e);T&&!Ol(T,F)&&s(),T=F,$=requestAnimationFrame(D)}return s(),()=>{var F;m.forEach(j=>{i&&j.removeEventListener("scroll",s),r&&j.removeEventListener("resize",s)}),b?.(),(F=w)==null||F.disconnect(),w=null,u&&cancelAnimationFrame($)}}const Mp=js,Vl=Uh,_u=qh,wu=Ph,Ep=Gh,Tp=Nh,ku=(e,t,s)=>{const n=new Map,i={platform:vu,...s},r={...i.platform,_c:n};return Hh(e,t,{...i,platform:r})};let jo=class extends O{};jo=o([S("gds-container")],jo);var cn;class Rl{constructor(t){c(this,cn,s=>{const n=s.target;if(!this.host.navigableItems.includes(n))return;let i=!1;if(s.key==="ArrowDown"){const r=this.host.navigableItems.indexOf(n)+1;this.host.navigableItems[r]?.focus(),i=!0}else if(s.key==="ArrowUp"){const r=this.host.navigableItems.indexOf(n)-1;this.host.navigableItems[r]?.focus(),i=!0}else if(s.key==="Home")this.host.navigableItems[0]?.focus(),i=!0;else if(s.key==="End")this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),i=!0;else{const r=s.key.toLowerCase();if(r.length!==1)return;const l=r>="a"&&r<="z",h=r>="0"&&r<="9";(l||h)&&(this.host.navigableItems.find(g=>g.textContent?.trim().toLowerCase()?.startsWith(r))?.focus(),i=!0)}i&&(s.preventDefault(),s.stopPropagation())}),(this.host=t).addController(this)}hostConnected(){this.host.addEventListener("keydown",a(this,cn))}hostDisconnected(){this.host.removeEventListener("keydown",a(this,cn))}}cn=new WeakMap;function Fl(e){let t=e;for(;t.assignedElements().length>0&&t.assignedElements()[0].nodeName==="SLOT";)t=t.assignedElements()[0];return t}var Ls;let Yo=class extends R{constructor(){super(),c(this,Ls,Cl()),new Rl(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),ye.instance.apply(this,"gds-listbox")}get navigableItems(){return a(this,Ls).value?Fl(a(this,Ls).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){this.navigableItems[0]?.focus()}render(){return v`<slot ${$l(a(this,Ls))}></slot>`}};Ls=new WeakMap;Yo=o([S("gds-menu",{dependsOn:[vs]})],Yo);let ot=class extends Q{};ot._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';ot._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>';ot._name="cross-small";ot._width=24;ot._height=24;ot._viewBox="0 0 24 24";ot=o([S("gds-icon-cross-small")],ot);const Cu=z`
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
`;var $u=Cu,Uo,Bl,ss,Pn,Lt,Ds,Dt,qo,hn,Zo,Xo,Il,Ko,Hl,un,Jo,oo,io,pn,gn,Ws;let V=class extends R{constructor(){super(...arguments),c(this,Uo),c(this,hn),c(this,Xo),c(this,Ko),c(this,un),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.autofocus=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>`${window.innerHeight-16}px`,this.nonmodal=!1,this.floatingUIMiddleware=V.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,c(this,ss,void 0),c(this,Pn,!1),c(this,Lt,void 0),c(this,Ds,()=>{a(this,Dt).call(this,"cancel")&&(this.open=!1)}),c(this,Dt,e=>{const t=e==="show";return this.dispatchCustomEvent("gds-ui-state",{detail:{open:t,reason:e},bubbles:!1,composed:!1,cancelable:!0})}),c(this,qo,e=>{e.stopPropagation(),e.preventDefault(),a(this,Dt).call(this,"close")&&(this.open=!1,setTimeout(()=>this._trigger?.focus(),250))}),c(this,oo,e=>{(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),this.open=!0,a(this,Dt).call(this,"show")),e.key==="Escape"&&this.open&&a(this,Ds).call(this)}),c(this,io,e=>{e.preventDefault(),a(this,Dt).call(this,this.open?"close":"show")&&(this.open=!this.open)}),c(this,pn,()=>{const e=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then(()=>{e?.focus()})}),c(this,gn,e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const i=s.getBoundingClientRect();!(i.top<=t.clientY&&t.clientY<=i.top+i.height&&i.left<=t.clientX&&t.clientX<=i.left+i.width)&&a(this,Dt).call(this,"close")&&(this.open=!1)}}),c(this,Ws,()=>{this.open&&a(this,Dt).call(this,"close")&&(this.open=!1)})}_handleTriggerRefChanged(){this.triggerRef?.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){this.anchorRef?.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){f(this,hn,Zo).call(this),f(this,Ko,Hl).call(this)}_handleAnchorChanged(){f(this,un,Jo).call(this)}connectedCallback(){super.connectedCallback(),ye.instance.apply(this,"gds-popover"),f(this,hn,Zo).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{e.key==="Escape"&&this.open&&(a(this,Ds).call(this),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{const t=e.target;t!==this&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1)}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),f(this,Xo,Il).call(this),window.removeEventListener("scroll",a(this,Ws))}render(){return v`<slot
        name="trigger"
        @slotchange=${f(this,Uo,Bl)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${xe({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&a(this,Ds).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${a(this,qo)}
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
      </div>`}_handleOpenChange(){const e=(this.nonmodal?a(this,Lt):this._elDialog)||document;this.updateComplete.then(()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?this._elDialog?.setAttribute("open","true"):this._elDialog?.showModal(),this.autofocus&&(a(this,pn).call(this),setTimeout(()=>a(this,pn).call(this),250)),requestAnimationFrame(()=>{a(this,Lt)&&(a(this,Lt).show=!0)}),setTimeout(()=>e.addEventListener("click",a(this,gn)),0),window.addEventListener("scroll",a(this,Ws),{passive:!0})):(this._elDialog?.close(),e.removeEventListener("click",a(this,gn)),window.removeEventListener("scroll",a(this,Ws)),a(this,Lt)&&(a(this,Lt).show=!1))})}_handleBackdropChange(){const e=this.parentElement?.getRootNode();!this.backdrop||!e||U(this,Lt,e.querySelector(this.backdrop))}_handleMobileLayout(e){var t;U(this,Pn,e),e&&!this.disableMobileStyles?((t=a(this,ss))==null||t.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("minWidth"),this.updateComplete.then(()=>{this.open&&this._elDialog?.showModal()})):this.updateComplete.then(()=>{f(this,un,Jo).call(this)})}};Uo=new WeakSet;Bl=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};ss=new WeakMap;Pn=new WeakMap;Lt=new WeakMap;Ds=new WeakMap;Dt=new WeakMap;qo=new WeakMap;hn=new WeakSet;Zo=function(){this._trigger?.addEventListener("keydown",a(this,oo)),this._trigger?.addEventListener("click",a(this,io))};Xo=new WeakSet;Il=function(){var e;this._trigger?.removeEventListener("keydown",a(this,oo)),this._trigger?.removeEventListener("click",a(this,io)),(e=a(this,ss))==null||e.call(this)};Ko=new WeakSet;Hl=function(){if(this._trigger){this._trigger?.setAttribute("aria-expanded",String(this.open));const e=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||e.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const s=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";this._trigger.getAttribute(s)===null&&this._trigger.setAttribute(s,this.popupRole)}};un=new WeakSet;Jo=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;!e||!t||a(this,Pn)&&!this.disableMobileStyles||(a(this,ss)&&a(this,ss).call(this),U(this,ss,xu(e,t,()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),ku(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:s,y:n})=>Object.assign(t.style,{left:`${s}px`,top:`${n}px`}))})))};oo=new WeakMap;io=new WeakMap;pn=new WeakMap;gn=new WeakMap;Ws=new WeakMap;V.styles=re($u);V.DefaultMiddleware=[Vl(8),_u({crossAxis:!0,padding:8})];o([d({type:Boolean,reflect:!0})],V.prototype,"open",2);o([d({attribute:"popup-role"})],V.prototype,"popupRole",2);o([d({attribute:!1})],V.prototype,"triggerRef",2);o([d({attribute:!1})],V.prototype,"anchorRef",2);o([d()],V.prototype,"label",2);o([d()],V.prototype,"placement",2);o([d({type:Boolean})],V.prototype,"disableMobileStyles",2);o([d({type:Boolean})],V.prototype,"autofocus",2);o([d({attribute:!1})],V.prototype,"calcMinWidth",2);o([d({attribute:!1})],V.prototype,"calcMaxWidth",2);o([d({attribute:!1})],V.prototype,"calcMinHeight",2);o([d({attribute:!1})],V.prototype,"calcMaxHeight",2);o([d({type:Boolean,reflect:!0})],V.prototype,"nonmodal",2);o([d()],V.prototype,"backdrop",2);o([d({attribute:!1})],V.prototype,"floatingUIMiddleware",2);o([le()],V.prototype,"_trigger",2);o([le()],V.prototype,"_anchor",2);o([le()],V.prototype,"_isVirtKbVisible",2);o([Z("slot:not([name])")],V.prototype,"_elDefaultSlot",2);o([Z('slot[name="trigger"]')],V.prototype,"_elTriggerSlot",2);o([Z("dialog")],V.prototype,"_elDialog",2);o([Y("triggerRef")],V.prototype,"_handleTriggerRefChanged",1);o([Y("anchorRef")],V.prototype,"_handleAnchorRefChanged",1);o([Y("_trigger")],V.prototype,"_handleTriggerChanged",1);o([Y("_anchor")],V.prototype,"_handleAnchorChanged",1);o([Y("open")],V.prototype,"_handleOpenChange",1);o([Y("backdrop")],V.prototype,"_handleBackdropChange",1);o([Tc("(max-width: 576px)")],V.prototype,"_handleMobileLayout",1);V=o([S("gds-popover",{dependsOn:[ot]}),Se()],V);const Su=z`
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
`;var Mu=Su,Qo,ei,Nl;let je=class extends $e(me(R)){constructor(){super(...arguments),c(this,ei),this.open=!1,this.buttonLabel=A("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",c(this,Qo,()=>v`<gds-popover
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
        @gds-menu-item-click=${f(this,ei,Nl)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),ye.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return v`<button
        id="trigger"
        class="icon border-0 small ${xe({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${()=>this.open=!0}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:fe}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"
              fill="#353531"
            />
          </svg>
        </slot>
      </button>
      ${P(this.open,a(this,Qo))}`}};Qo=new WeakMap;ei=new WeakSet;Nl=function(){this.open=!1};je.styles=[G,Mu];je.shadowRootOptions={mode:"open",delegatesFocus:!0};o([d({type:Boolean,reflect:!0})],je.prototype,"open",2);o([d({attribute:"button-label"})],je.prototype,"buttonLabel",2);o([d({attribute:"show-label",type:Boolean})],je.prototype,"showLabel",2);o([d()],je.prototype,"label",2);o([d()],je.prototype,"placement",2);o([Nt("#trigger")],je.prototype,"elTriggerBtn",2);je=o([S("gds-context-menu",{dependsOn:[vs,Yo,V]}),Se()],je);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Eu(e,t){const s=typeof t=="function";if(e!==void 0){let n=-1;for(const i of e)n>-1&&(yield s?t(n):t),n++,yield i}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Tu(e,t){if(e!==void 0){let s=0;for(const n of e)yield t(n,s++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ba=(e,t,s)=>{const n=new Map;for(let i=t;i<=s;i++)n.set(e[i],i);return n},zu=ks(class extends Qs{constructor(e){if(super(e),e.type!==Js.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let n;s===void 0?s=t:t!==void 0&&(n=t);const i=[],r=[];let l=0;for(const h of e)i[l]=n?n(h,l):l,r[l]=s(h,l),l++;return{values:r,keys:i}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,n]){const i=$h(e),{values:r,keys:l}=this.dt(t,s,n);if(!Array.isArray(i))return this.ut=l,r;const h=this.ut??=[],u=[];let g,m,b=0,k=i.length-1,w=0,$=r.length-1;for(;b<=k&&w<=$;)if(i[b]===null)b++;else if(i[k]===null)k--;else if(h[b]===l[w])u[w]=Yt(i[b],r[w]),b++,w++;else if(h[k]===l[$])u[$]=Yt(i[k],r[$]),k--,$--;else if(h[b]===l[$])u[$]=Yt(i[b],r[$]),Es(e,u[$+1],i[b]),b++,$--;else if(h[k]===l[w])u[w]=Yt(i[k],r[w]),Es(e,i[b],i[k]),k--,w++;else if(g===void 0&&(g=Ba(l,w,$),m=Ba(h,b,k)),g.has(h[b]))if(g.has(h[k])){const T=m.get(l[w]),D=T!==void 0?i[T]:null;if(D===null){const F=Es(e,i[b]);Yt(F,r[w]),u[w]=F}else u[w]=Yt(D,r[w]),Es(e,i[b],D),i[T]=null;w++}else go(i[k]),k--;else go(i[b]),b++;for(;w<=$;){const T=Es(e,u[$+1]);Yt(T,r[w]),u[w++]=T}for(;b<=k;){const T=i[b++];T!==null&&go(T)}return this.ut=l,Ch(e,u),Ps}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Au{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Lu{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ia=e=>!_h(e)&&typeof e.then=="function",Ha=1073741823;class Du extends kl{constructor(){super(...arguments),this._$Cwt=Ha,this._$Cbt=[],this._$CK=new Au(this),this._$CX=new Lu}render(...t){return t.find(s=>!Ia(s))??Ps}update(t,s){const n=this._$Cbt;let i=n.length;this._$Cbt=s;const r=this._$CK,l=this._$CX;this.isConnected||this.disconnected();for(let h=0;h<s.length&&!(h>this._$Cwt);h++){const u=s[h];if(!Ia(u))return this._$Cwt=h,u;h<i&&u===n[h]||(this._$Cwt=Ha,i=0,Promise.resolve(u).then(async g=>{for(;l.get();)await l.get();const m=r.deref();if(m!==void 0){const b=m._$Cbt.indexOf(u);b>-1&&b<m._$Cwt&&(m._$Cwt=b,m.setValue(g))}}))}return Ps}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Wu=ks(Du),Ou=z`
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
`;var Ms,ti,Pl,Br,Gl,Ir,jl,Hr,Yl,Nr,Ul;let be=class extends R{constructor(){super(),c(this,ti),c(this,Br),c(this,Ir),c(this,Hr),c(this,Nr),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,c(this,Ms,(e,t)=>{const n=t.target.assignedNodes({flatten:!0}),i=n.length>0&&n.some(r=>r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&r.textContent?.trim()!=="");e==="lead"?this._leadSlotOccupied=i:e==="trail"?this._trailSlotOccupied=i:e==="action"&&(this._actionSlotOccupied=i)})}connectedCallback(){super.connectedCallback(),ye.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return v`
      <div class="field ${xe(e)}" part="_base">
        ${f(this,ti,Pl).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};Ms=new WeakMap;ti=new WeakSet;Pl=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return v`
      ${f(this,Br,Gl).call(this)} ${f(this,Ir,jl).call(this)}
      <div class="${xe(e)}">
        ${f(this,Hr,Yl).call(this)} ${f(this,Nr,Ul).call(this)}
      </div>
    `};Br=new WeakSet;Gl=function(){return v` <slot
      name="lead"
      @slotchange=${e=>a(this,Ms).call(this,"lead",e)}
    ></slot>`};Ir=new WeakSet;jl=function(){return v`<div
      class="main-slot-wrap ${xe({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>a(this,Ms).call(this,"main",e)}
      ></slot>
    </div>`};Hr=new WeakSet;Yl=function(){return v`
      <slot
        name="action"
        @slotchange=${e=>a(this,Ms).call(this,"action",e)}
      ></slot>
    `};Nr=new WeakSet;Ul=function(){return v`
      <slot
        name="trail"
        @slotchange=${e=>a(this,Ms).call(this,"trail",e)}
      ></slot>
    `};be.styles=[Ou];o([d()],be.prototype,"size",2);o([d({type:Boolean})],be.prototype,"multiline",2);o([d({type:Boolean,reflect:!0})],be.prototype,"disabled",2);o([d({type:Boolean})],be.prototype,"invalid",2);o([Z("slot:not([name])")],be.prototype,"_mainSlotElement",2);o([le()],be.prototype,"_leadSlotOccupied",2);o([le()],be.prototype,"_trailSlotOccupied",2);o([le()],be.prototype,"_actionSlotOccupied",2);o([Y("disabled")],be.prototype,"_handleDisabledChange",1);be=o([S("gds-field-base"),Se()],be);const Vu=z`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`;var Ru=Vu,Os,si;let rs=class extends R{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,c(this,Os,Cl()),c(this,si,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new Rl(this)}get navigableItems(){return this.visibleOptionElements}get options(){return a(this,Os).value?Fl(a(this,Os).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),ye.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",a(this,si))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return v`<slot ${$l(a(this,Os))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};Os=new WeakMap;si=new WeakMap;rs.styles=Ru;o([d({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],rs.prototype,"multiple",2);o([d()],rs.prototype,"compareWith",2);o([Y("multiple")],rs.prototype,"_rerenderOptions",1);rs=o([S("gds-listbox",{dependsOn:[tt]})],rs);var ro=z`
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
`;let kt=class extends Q{};kt._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';kt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>';kt._name="chevron-bottom";kt._width=24;kt._height=24;kt._viewBox="0 0 24 24";kt=o([S("gds-icon-chevron-bottom")],kt);const Fu=z`
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
`;var Bu=Fu,Ut,ni,ql,oi,ii,ri,Ot,ai,fn,li,di,ci,hi,Zl,Gn,jn,ui,Xl,pi,Kl,_s,ao;let K=class extends ne{constructor(){super(...arguments),c(this,ni),c(this,hi),c(this,ui),c(this,pi),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,c(this,Ut,void 0),c(this,oi,()=>v`
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
        @input=${e=>{this.value=e.target.value,a(this,Gn).call(this),a(this,fn).call(this,e),a(this,Ot).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{e.key==="ArrowDown"&&(e.preventDefault(),a(this,Ot).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(t=>t.focus())),e.key==="Enter"&&a(this,jn).call(this)}}
      />
    `),c(this,ii,()=>v`
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
          <span>${ll(this.displayValue)}</span>
        </slot>
      </button>
    `),c(this,ri,e=>{if(this.combobox){const s=e.getBoundingClientRect(),i=window.innerHeight-s.bottom,r=s.top;let l=Math.min(r,this.maxHeight);return i>r&&(l=Math.min(i,this.maxHeight)),`${l-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),c(this,Ot,(e,t)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1})),c(this,ai,e=>{a(this,Ot).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),c(this,fn,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const s=e.currentTarget;if(this.options.forEach(i=>i.hidden=!1),!s.value)return;this.options.filter(i=>!this.searchFilter(s.value,i)).forEach(i=>i.hidden=!0)}),c(this,li,e=>{this._elListbox?.then(t=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),t.focus();return}})}),c(this,di,e=>{if(e.key==="Tab"&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),c(this,ci,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),c(this,Gn,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),c(this,jn,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),c(this,_s,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&a(this,Ot).call(this,!1,"close")&&(this.open=!1)}),c(this,ao,e=>{e.key==="Tab"&&!this.searchable&&a(this,Ot).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())})}get type(){return"gds-dropdown"}get options(){return a(this,Ut)?Array.from(a(this,Ut)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(a(this,Ut))return Array.from(a(this,Ut)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){let e;return Array.isArray(this.value)?this.value.length>2?e=A(Rc`${this.value.length} selected`):e=this.value.reduce((t,s)=>t+this.options.find(n=>n.value===s)?.innerText+", ","").slice(0,-2):e=this.options.find(t=>t.selected)?.innerText,e||this.placeholder?.innerText||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}render(){return v`
      ${P(!this.plain&&!this.hideLabel,()=>v`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${P(this.supportingText.length>0,()=>v`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${a(this,ri)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[Vl(8),wu()]:V.DefaultMiddleware}
        @gds-ui-state=${a(this,ai)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.combobox&&!this.multiple?a(this,oi).call(this):a(this,ii).call(this)}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${P(this.searchable,()=>v`<input
              id="searchinput"
              type="text"
              aria-label="${A("Filter available options")}"
              placeholder="${A("Search")}"
              @keydown=${a(this,li)}
              @input=${a(this,fn)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${N(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${f(this,hi,Zl)}"
          @gds-focus="${a(this,ci)}"
          @keydown=${a(this,di)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${P(f(this,ni,ql).call(this),()=>v`
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
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){if(this.requestUpdate(),U(this,Ut,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:!this.combobox&&!this.placeholder&&this.options.find(e=>this.compareWith(e.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?f(this,ui,Xl).call(this):(f(this,pi,Kl).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t?.scrollIntoView({block:"center"})})}};Ut=new WeakMap;ni=new WeakSet;ql=function(){return!this.plain};oi=new WeakMap;ii=new WeakMap;ri=new WeakMap;Ot=new WeakMap;ai=new WeakMap;fn=new WeakMap;li=new WeakMap;di=new WeakMap;ci=new WeakMap;hi=new WeakSet;Zl=function(){this._elListbox.then(e=>{this.multiple?this.value=e.selection.map(t=>t.value):(this.value=e.selection[0]?.value,a(this,Ot).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0))),a(this,Gn).call(this),a(this,jn).call(this)})};Gn=new WeakMap;jn=new WeakMap;ui=new WeakSet;Xl=function(){this.addEventListener("blur",a(this,_s)),this.addEventListener("gds-blur",a(this,_s)),this.addEventListener("keydown",a(this,ao))};pi=new WeakSet;Kl=function(){this.removeEventListener("blur",a(this,_s)),this.removeEventListener("gds-blur",a(this,_s)),this.removeEventListener("keydown",a(this,ao))};_s=new WeakMap;ao=new WeakMap;K.styles=[G,ro,Bu];o([d({attribute:"supporting-text"})],K.prototype,"supportingText",2);o([d({type:Boolean,reflect:!0})],K.prototype,"open",2);o([d({type:Boolean,reflect:!0})],K.prototype,"searchable",2);o([d({type:Boolean,reflect:!0})],K.prototype,"multiple",2);o([d({type:Boolean,reflect:!0})],K.prototype,"combobox",2);o([d()],K.prototype,"compareWith",2);o([d()],K.prototype,"searchFilter",2);o([d({type:Boolean,attribute:"sync-popover-width"})],K.prototype,"syncPopoverWidth",2);o([d({type:Number,attribute:"max-height"})],K.prototype,"maxHeight",2);o([d()],K.prototype,"size",2);o([d({type:Boolean,attribute:"hide-label"})],K.prototype,"hideLabel",2);o([d({type:Boolean})],K.prototype,"plain",2);o([d({type:Boolean})],K.prototype,"disableMobileStyles",2);o([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],K.prototype,"showExtendedSupportingText",2);o([Z("#trigger")],K.prototype,"_elTriggerBtn",2);o([Nt("#listbox")],K.prototype,"_elListbox",2);o([Z("#searchinput")],K.prototype,"_elSearchInput",2);o([eo({attributes:!0,childList:!0,subtree:!0,characterData:!0})],K.prototype,"_handleLightDOMChange",1);o([Y("value")],K.prototype,"_handleValueChange",1);o([Y("open")],K.prototype,"_handleOpenChange",1);K=o([S("gds-dropdown",{dependsOn:[He,Ie,be,rs,V,Ae,kt]}),Se()],K);const Pr={fromAttribute(e){return new Date(e)},toAttribute(e){return e.toISOString()}},Iu={fromAttribute(e){return e.split(",").map(t=>new Date(t.trim()))},toAttribute(e){return JSON.stringify(e.map(t=>t.toISOString()))}},Hu={fromAttribute(e){return e.split(",")},toAttribute(e){return Array.isArray(e)?e.join(","):e}};let Ct=class extends Q{};Ct._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Ct._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>';Ct._name="calendar";Ct._width=24;Ct._height=24;Ct._viewBox="0 0 24 24";Ct=o([S("gds-icon-calendar")],Ct);let $t=class extends Q{};$t._regularSVG='<path d="M7.75 4.75H3.75V9.25M7.75 4.75H16.25M7.75 4.75V2.75M16.25 4.75H20.25V9.25M16.25 4.75V2.75M11.25 20.25H3.75V9.25M3.75 9.25H20.25M20.25 9.25V11.25M17.75 14.75V18M17.75 18V21.25M17.75 18H14.5M17.75 18H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';$t._solidSVG='<path d="M8.5 2.75C8.5 2.33579 8.16421 2 7.75 2C7.33579 2 7 2.33579 7 2.75V4H3.75C3.33579 4 3 4.33579 3 4.75V20.25C3 20.6642 3.33579 21 3.75 21H11.25C11.6642 21 12 20.6642 12 20.25C12 19.8358 11.6642 19.5 11.25 19.5H4.5V10H19.5V11.25C19.5 11.6642 19.8358 12 20.25 12C20.6642 12 21 11.6642 21 11.25V4.75C21 4.33579 20.6642 4 20.25 4H17V2.75C17 2.33579 16.6642 2 16.25 2C15.8358 2 15.5 2.33579 15.5 2.75V4H8.5V2.75Z" fill="currentColor"/><path d="M18.5 14.75C18.5 14.3358 18.1642 14 17.75 14C17.3358 14 17 14.3358 17 14.75V17.25H14.5C14.0858 17.25 13.75 17.5858 13.75 18C13.75 18.4142 14.0858 18.75 14.5 18.75H17V21.25C17 21.6642 17.3358 22 17.75 22C18.1642 22 18.5 21.6642 18.5 21.25V18.75H21C21.4142 18.75 21.75 18.4142 21.75 18C21.75 17.5858 21.4142 17.25 21 17.25H18.5V14.75Z" fill="currentColor"/>';$t._name="calender-add";$t._width=24;$t._height=24;$t._viewBox="0 0 24 24";$t=o([S("gds-icon-calender-add")],$t);let it=class extends Q{};it._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';it._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>';it._name="chevron-right";it._width=24;it._height=24;it._viewBox="0 0 24 24";it=o([S("gds-icon-chevron-right")],it);var yt,yn,bn,vn,mn,gi,fi,yi,bi,Jl,hs,Vs,xn,vi,us,Rs,Fs,_n;let Ye=class extends R{constructor(){super(...arguments),c(this,bi),c(this,hs),c(this,xn),c(this,us),c(this,Fs),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=f(this,xn,vi).call(this,this.value,this.length),c(this,yt,""),c(this,yn,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=f(this,us,Rs).call(this,e+1),f(this,hs,Vs).call(this)}),c(this,bn,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=f(this,us,Rs).call(this,e-1),f(this,hs,Vs).call(this)}),c(this,vn,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),c(this,mn,()=>{f(this,Fs,_n).call(this)}),c(this,gi,()=>{a(this,yt)!==""&&(f(this,Fs,_n).call(this),this.value=f(this,us,Rs).call(this,parseInt(this.value.toString())),f(this,hs,Vs).call(this))}),c(this,fi,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?a(this,bn).call(this):a(this,yn).call(this)}),c(this,yi,e=>{let t=!1;if(e.key==="ArrowUp")a(this,yn).call(this),t=!0;else if(e.key==="ArrowDown")a(this,bn).call(this),t=!0;else{const s=parseInt(e.key);isNaN(s)||(a(this,yt).length<this.length&&(U(this,yt,a(this,yt)+s.toString()),this.value=parseInt(a(this,yt))),a(this,yt).length===this.length&&(this.value=f(this,us,Rs).call(this,this.value),f(this,Fs,_n).call(this),f(this,bi,Jl).call(this),f(this,hs,Vs).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",a(this,fi)),this.addEventListener("keydown",a(this,yi)),this.addEventListener("blur",a(this,gi)),this.addEventListener("focus",a(this,mn)),this.addEventListener("click",a(this,vn)),this.addEventListener("mousedown",a(this,vn))}focus(e){super.focus(e),a(this,mn).call(this)}render(){return v`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=f(this,xn,vi).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};yt=new WeakMap;yn=new WeakMap;bn=new WeakMap;vn=new WeakMap;mn=new WeakMap;gi=new WeakMap;fi=new WeakMap;yi=new WeakMap;bi=new WeakSet;Jl=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof Ye){e.focus();break}e=e.nextElementSibling}};hs=new WeakSet;Vs=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};xn=new WeakSet;vi=function(e,t){return String(e).padStart(t,"0")};us=new WeakSet;Rs=function(e){return Math.max(this.min,Math.min(this.max,e))};Fs=new WeakSet;_n=function(){U(this,yt,"")};Ye.formAssociated=!0;o([d({type:Number})],Ye.prototype,"value",2);o([d({type:Number})],Ye.prototype,"length",2);o([d({type:Number,attribute:"aria-valuemin"})],Ye.prototype,"min",2);o([d({type:Number,attribute:"aria-valuemax"})],Ye.prototype,"max",2);o([le()],Ye.prototype,"displayValue",2);o([Y("value")],Ye.prototype,"_refreshDisplayValue",1);Ye=o([S("gds-date-part-spinner")],Ye);const Nu=z`
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
`;var Bs,mi,Ql,xi,ed,Us,Yn,_i,td,wi,sd,wn,ki,Wt,qt,Zt,ps,nd,Ci,$i,Si,Mi,Ei,Ti,zi,Ai,Li,Un,Di,Wi,kn,Oi,Vi,ft,Ri,od,Gr,id;let H=class extends ne{constructor(){super(),c(this,mi),c(this,xi),c(this,Us),c(this,_i),c(this,wi),c(this,wn),c(this,Wt),c(this,Zt),c(this,kn),c(this,Ri),c(this,Gr),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=f(this,kn,Oi).call(this,"y-m-d"),c(this,Bs,void 0),c(this,nd,e=>{this._elTrigger.then(t=>{e.relatedTarget?.parentElement!==e.target&&document.getSelection()?.removeAllRanges()})}),c(this,Ci,e=>{this._elTrigger.then(t=>{document.getSelection()?.removeAllRanges();const s=new Range;s.setStart(t.firstChild,0),s.setEnd(t.lastChild,4),document.getSelection()?.addRange(s)})}),c(this,$i,e=>{this._elFieldAsync.then(t=>{e.currentTarget===t&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),c(this,Si,e=>{this._elFieldAsync.then(t=>{if(e.currentTarget!==t)return;e.preventDefault();const s=e.clipboardData?.getData("text/plain");if(!s)return;let n=new Date("-");const i="Invalid Date",r=s.split(this._dateFormatLayout.delimiter);if(r.length===3){const l=this._dateFormatLayout.layout,h=parseInt(r[l.findIndex(m=>m.token==="y")]),u=parseInt(r[l.findIndex(m=>m.token==="m")])-1,g=parseInt(r[l.findIndex(m=>m.token==="d")]);!isNaN(h)&&!isNaN(u)&&!isNaN(g)&&(n=new Date(`${h}-${u+1}-${g}`))}n.toString()===i&&(n=new Date(s),n.toString()===i)||(this.value=n,f(this,Wt,qt).call(this))})}),c(this,Mi,e=>{this._elSpinners[0]?.focus()}),c(this,Ei,e=>{e.stopPropagation(),this.value=new Date(e.detail),this.open=!1,f(this,Wt,qt).call(this),f(this,Zt,ps).call(this)}),c(this,Ti,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),c(this,zi,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),c(this,Ai,e=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),c(this,Li,e=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),c(this,Un,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),f(this,Zt,ps).call(this)}),c(this,Di,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;if(!t){this.value=void 0,f(this,Wt,qt).call(this);return}!At(t||new Date(0),a(this,Bs)||new Date(0))&&(this.value=new Date(t),f(this,Wt,qt).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=a(this,Bs),f(this,Zt,ps).call(this))}}),c(this,Wi,e=>{const t=Array.from(this._elSpinners).findIndex(s=>s===e.target);if(e.key==="ArrowRight"){const s=this._elSpinners[t+1];s&&s.focus()}if(e.key==="ArrowLeft"){const s=this._elSpinners[t-1];s&&s.focus()}}),c(this,Vi,(e,t)=>{a(this,ft)[t]=e;const s=new Date;s.setFullYear(parseInt(a(this,ft).year)),s.setMonth(parseInt(a(this,ft).month)-1),s.setDate(parseInt(a(this,ft).day)),s.setHours(12,0,0,0),s.toString()!=="Invalid Date"&&(this.value=s,f(this,Wt,qt).call(this),f(this,Zt,ps).call(this))}),c(this,ft,{year:"yyyy",month:"mm",day:"dd"}),Ye.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(e){super.value=e}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=f(this,kn,Oi).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),ye.instance.apply(this,"gds-datepicker")}focus(e){this._getValidityAnchor()?.focus(e)}render(){return v`
      ${P(!this.plain,()=>v`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${P(this.supportingText.length>0,()=>v`<span slot="supporting-text" id="supporting-text">
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
        @click=${a(this,Mi)}
        @copy=${a(this,$i)}
        @paste=${a(this,Si)}
        id="field"
      >
        <div class="spinners">
          ${Eu(Tu(this._dateFormatLayout.layout,(e,t)=>v`<gds-date-part-spinner
                  id="spinner-${t}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${a(this,ft)[e.name]}
                  aria-valuemin=${f(this,wi,sd).call(this,e.name)}
                  aria-valuemax=${f(this,wn,ki).call(this,e.name)}
                  aria-label=${f(this,_i,td).call(this,e.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${f(this,wn,ki).call(this,e.name).toString().length}
                  @keydown=${a(this,Wi)}
                  @change=${s=>a(this,Vi).call(this,s.detail.value,e.name)}
                  @focus=${a(this,Ci)}
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
          ${P(this.size==="small",()=>v`<gds-icon-calender-add
                height="16"
                stroke="2"
              ></gds-icon-calender-add>`,()=>v`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${P(f(this,mi,Ql).call(this),()=>v`<gds-form-control-footer
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
        @gds-ui-state=${a(this,Di)}
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
              @click=${a(this,Li)}
              aria-label=${A("Previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${a(this,Ti)}
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
              @change=${a(this,zi)}
              .maxHeight=${300}
              label="${A("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${zu(a(this,Ri,od),e=>e,e=>v`<gds-option value=${e}>${e}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${a(this,Ai)}
              aria-label=${A("Next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${a(this,Ei)}
            @gds-date-focused=${a(this,Un)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${P(this.clearable||!this.hideTodayButton,()=>v`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="0 m m m"
              >
                ${P(this.clearable,()=>v` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,f(this,Zt,ps).call(this),f(this,Wt,qt).call(this)}}
                    >
                      ${A("Clear")}
                    </gds-button>`)}
                ${Wu(f(this,xi,ed).call(this),fe)}
                ${P(!this.hideTodayButton,()=>v` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),f(this,Us,Yn).call(this,new Date)}}
                    >
                      ${A("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){U(this,ft,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");U(this,ft,{year:t,month:s,day:n})}_handleOpenChange(){this.open&&(U(this,Bs,this.value),this._elCalendar.then(e=>e.focus()))}};Bs=new WeakMap;mi=new WeakSet;Ql=function(){return!this.plain};xi=new WeakSet;ed=async function(){const e=await this.getFocusedDate();let t="",s;return e&&e>this.max?(t=A("Last available date"),s=n=>{n.stopPropagation(),f(this,Us,Yn).call(this,this.max)}):e&&e<this.min&&(t=A("First available date"),s=n=>{n.stopPropagation(),f(this,Us,Yn).call(this,this.min)}),v`${P(t.length>0,()=>v`<gds-button rank="tertiary" size="small" @click=${s}>
          ${t}
        </gds-button>`,()=>fe)}`};Us=new WeakSet;Yn=function(e){const t=new Date(e);this._elCalendar.then(s=>s.focusedDate=t).then(a(this,Un))};_i=new WeakSet;td=function(e){return`${{year:A("Year"),month:A("Month"),day:A("Day")}[e]} ${this.label}`};wi=new WeakSet;sd=function(e){return{year:1900,month:1,day:1}[e]};wn=new WeakSet;ki=function(e){return{year:9999,month:12,day:31}[e]};Wt=new WeakSet;qt=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};Zt=new WeakSet;ps=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};nd=new WeakMap;Ci=new WeakMap;$i=new WeakMap;Si=new WeakMap;Mi=new WeakMap;Ei=new WeakMap;Ti=new WeakMap;zi=new WeakMap;Ai=new WeakMap;Li=new WeakMap;Un=new WeakMap;Di=new WeakMap;Wi=new WeakMap;kn=new WeakSet;Oi=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),n=s.findIndex(u=>u==="y"),i=s.findIndex(u=>u==="m"),r=s.findIndex(u=>u==="d");if(n===-1||i===-1||r===-1)throw new Error("Invalid date format for <gds-datepicker>");const h=[n,i,r].sort((u,g)=>u-g).map(u=>s[u]).map(u=>({token:u,name:u==="y"?"year":u==="m"?"month":"day"}));return{delimiter:t,layout:h}};Vi=new WeakMap;ft=new WeakMap;Ri=new WeakSet;od=function(){const e=this.min.getFullYear(),t=this.max.getFullYear(),s=a(this,Gr,id),n=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield n);for(let i=e;i<=t;i++)yield i}}};Gr=new WeakSet;id=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};H.styles=[G,ro,Nu];o([d({converter:Pr})],H.prototype,"value",1);o([d({converter:Pr})],H.prototype,"min",2);o([d({converter:Pr})],H.prototype,"max",2);o([d({type:Boolean})],H.prototype,"open",2);o([d({attribute:"supporting-text"})],H.prototype,"supportingText",2);o([d({type:String})],H.prototype,"size",2);o([d({type:Boolean})],H.prototype,"plain",2);o([d({type:Boolean,attribute:"show-week-numbers"})],H.prototype,"showWeekNumbers",2);o([d({type:Boolean,attribute:"hide-label"})],H.prototype,"hideLabel",2);o([d({type:Boolean,attribute:"clearable"})],H.prototype,"clearable",2);o([d({type:Boolean,attribute:"hide-today-button"})],H.prototype,"hideTodayButton",2);o([d()],H.prototype,"dateformat",1);o([d({type:Boolean,attribute:"disabled-weekends"})],H.prototype,"disabledWeekends",2);o([d({converter:Iu,attribute:"disabled-dates"})],H.prototype,"disabledDates",2);o([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],H.prototype,"showExtendedSupportingText",2);o([Nt("#calendar-button")],H.prototype,"test_calendarButton",2);o([Z("#clear-button")],H.prototype,"test_clearButton",2);o([Z("#today-button")],H.prototype,"test_todayButton",2);o([le()],H.prototype,"_focusedMonth",2);o([le()],H.prototype,"_focusedYear",2);o([le()],H.prototype,"_dateFormatLayout",2);o([Nt("#calendar")],H.prototype,"_elCalendar",2);o([Nt("#calendar-button")],H.prototype,"_elTrigger",2);o([Nt("#field")],H.prototype,"_elFieldAsync",2);o([tc("[role=spinbutton]")],H.prototype,"_elSpinners",2);o([Z("#field")],H.prototype,"_elField",2);o([Y("value")],H.prototype,"_handleValueChange",1);o([Y("open")],H.prototype,"_handleOpenChange",1);H=o([Se()],H);let Fi=class extends ve($e(me(H))){};Fi=o([S("gds-datepicker",{dependsOn:[mt,xt,K,te,V,Ct,$t,st,it]})],Fi);const Pu=z`
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
`,Bi=new Set;function Gu(){Ka.instance.injectGlobalStyles("dialog-scroll-lock",z`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function ju(e){if(Bi.add(e),!document.documentElement.classList.contains("gds-scroll-lock")){const t=Yu()+Uu();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),t<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${t}px`)}}function Na(e){Bi.delete(e),Bi.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function Yu(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Uu(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}var Xt,Ii,Cn,Hi,$n,Ni,rd,jr,Is;Gu();let Ue=class extends ve(Qn(R)){constructor(){super(...arguments),c(this,Ni),this.open=!1,this.variant="default",c(this,Xt,void 0),c(this,Ii,e=>{const s=e.target.returnValue;if(s!=="prop-change"){if(!a(this,Cn).call(this,s))return;this.close(s||"native-close");return}this.close(s||"native-close")}),c(this,Cn,e=>(this.dispatchCustomEvent("gds-close",{detail:e}),a(this,$n).call(this,e))),c(this,Hi,e=>(this.dispatchCustomEvent("gds-show",{detail:e}),a(this,$n).call(this,e))),c(this,$n,e=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:e,open:this.open}})),c(this,jr,e=>{this.show("slotted-trigger")}),c(this,Is,e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const i=s.getBoundingClientRect(),r=i.top<=t.clientY&&t.clientY<=i.top+i.height&&i.left<=t.clientX&&t.clientX<=i.left+i.width,l="click-outside";!r&&a(this,Cn).call(this,l)&&this.close(l)}})}show(e){this.open=!0,e&&a(this,Hi).call(this,e)}close(e){U(this,Xt,e),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),Na(this)}render(){return v`<slot
        name="trigger"
        @slotchange=${f(this,Ni,rd)}
      ></slot>
      ${P(this.open,()=>v`<dialog
            @close=${a(this,Ii)}
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
          </dialog>`)}`}_handleOpenChange(){this.open?(U(this,Xt,void 0),this.updateComplete.then(()=>{this._elDialog?.showModal(),ju(this),document.removeEventListener("click",a(this,Is)),requestAnimationFrame(()=>document.addEventListener("click",a(this,Is))),ac&&this._elDialog?.focus()})):(U(this,Xt,a(this,Xt)||"prop-change"),this._elDialog?.close(a(this,Xt)),Na(this),document.removeEventListener("click",a(this,Is)),this.requestUpdate("open"))}};Xt=new WeakMap;Ii=new WeakMap;Cn=new WeakMap;Hi=new WeakMap;$n=new WeakMap;Ni=new WeakSet;rd=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const e=this._elTriggerSlot.assignedElements()[0];e?.addEventListener("click",a(this,jr)),e?.setAttribute("aria-haspopup","dialog")}};jr=new WeakMap;Is=new WeakMap;Ue.styles=[Pu];Ue.styleExpressionBaseSelector="dialog";o([d({type:Boolean,reflect:!0})],Ue.prototype,"open",2);o([d()],Ue.prototype,"heading",2);o([d()],Ue.prototype,"variant",2);o([Z("dialog")],Ue.prototype,"_elDialog",2);o([Z('slot[name="trigger"]')],Ue.prototype,"_elTriggerSlot",2);o([Y("open")],Ue.prototype,"_handleOpenChange",1);Ue=o([S("gds-dialog",{dependsOn:[xt,Ft,O,mt,ot]}),Se()],Ue);const qu=z`
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
`;var Zu=qu;let St=class extends R{constructor(){super(...arguments),this.level="2",this.role=null}render(){return v`<hr role=${this.role||fe} />`}};St.styles=[G,Zu];o([d()],St.prototype,"level",2);o([x(Ks("border"))],St.prototype,"color",2);o([x({property:"--_size",valueTemplate:e=>`var(--gds-sys-space-${e})`})],St.prototype,"size",2);o([x()],St.prototype,"opacity",2);o([d()],St.prototype,"role",2);St=o([S("gds-divider")],St);function Yr(){return(e,t,s)=>{const n=e.connectedCallback,i=e.disconnectedCallback;e.connectedCallback=function(){n?.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{s.value?.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){i?.call(this),this.__resizeObservers[t].disconnect()}}}const Xu=z`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`;let as=class extends R{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),ye.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return v`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${xe(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};as.styles=[Xu];o([d({reflect:!0,type:Boolean})],as.prototype,"selected",2);o([d()],as.prototype,"value",2);as=o([S("gds-filter-chip",{dependsOn:[xt,Ae]})],as);const Ku=z`
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
`;var Pi,Gi,Sn,ji,ad,Yi,ld;let Le=class extends ne{constructor(){super(...arguments),c(this,ji),c(this,Yi),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,c(this,Pi,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),c(this,Gi,3),c(this,Sn,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return v`<div
      class="chips ${xe(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${a(this,Pi)}
        @slotchange=${f(this,Yi,ld)}
        role="none"
      ></slot>
    </div>`}focus(e){this.chips[0]?.focus(e)}_getValidityAnchor(){return this.shadowRoot?.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=f(this,ji,ad).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*a(this,Gi)&&(this._collapsed=!0,U(this,Sn,s)),s>a(this,Sn)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})}))}};Pi=new WeakMap;Gi=new WeakMap;Sn=new WeakMap;ji=new WeakSet;ad=function(){return this.chips[0]?.offsetHeight||0};Yi=new WeakSet;ld=function(){const e=this.chips.find(t=>t.selected)?.value;e&&(this.value=e)};Le.styles=[Ku];o([d({converter:Hu})],Le.prototype,"value",1);o([d({type:Boolean})],Le.prototype,"multiple",2);o([d()],Le.prototype,"label",2);o([d({type:Boolean,attribute:"row-collapse"})],Le.prototype,"rowCollapse",2);o([le()],Le.prototype,"_collapsed",2);o([Z("slot")],Le.prototype,"_elSlot",2);o([Yr()],Le.prototype,"_handleResize",1);o([Y("value")],Le.prototype,"_updateSelectedFromValue",1);Le=o([S("gds-filter-chips",{dependsOn:[as]})],Le);const Ju=z`
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
`;var Qu=Ju;let ls=class extends O{render(){return v`<slot></slot>`}};ls.styles=[G,Qu];o([x({property:"--_c"})],ls.prototype,"columns",2);o([x({...es,styleTemplate:(e,t)=>{const s=t[0];return`--_gap-column: ${t[1]||s}; --_gap-row: ${s};`}})],ls.prototype,"gap",2);o([x({property:"--_col-width",valueTemplate:e=>`${isNaN(e)?e:`${e}px`}`})],ls.prototype,"auto-columns",2);ls=o([S("gds-grid")],ls);let qn=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return v`<slot></slot>`}};qn=o([S("gds-list-item")],qn);let Zn=class extends R{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),ye.instance.apply(this,"gds-grouped-list")}render(){return v`${P(this.label,()=>v`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};o([d()],Zn.prototype,"label",2);Zn=o([S("gds-grouped-list",{dependsOn:[qn]})],Zn);let Mt=class extends Q{};Mt._regularSVG='<path d="M19.25 9.25V17.25M15.25 17.25V9.25M4.75 9.25V17.25M8.75 17.25V9.25M2.75 7.17308L12 2.5L21.25 7.17308V9.25H2.75V7.17308ZM2.75 20.25H21.25L20.25 17.25H3.75L2.75 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>';Mt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3382 1.83058C12.1255 1.72314 11.8745 1.72314 11.6618 1.83058L2.41181 6.50365C2.15926 6.63125 2.00001 6.89012 2.00001 7.17308V9.25C2.00001 9.66421 2.33579 10 2.75001 10H4.00001V16.5H3.75001C3.42718 16.5 3.14058 16.7066 3.03849 17.0128L2.03849 20.0128C1.96226 20.2415 2.00061 20.493 2.14157 20.6885C2.28254 20.8841 2.50892 21 2.75001 21H21.25C21.4911 21 21.7175 20.8841 21.8584 20.6885C21.9994 20.493 22.0378 20.2415 21.9615 20.0128L20.9615 17.0128C20.8594 16.7066 20.5728 16.5 20.25 16.5H20V10H21.25C21.6642 10 22 9.66421 22 9.25V7.17308C22 6.89012 21.8408 6.63125 21.5882 6.50365L12.3382 1.83058ZM16 10H18.5V16.5H16V10ZM8.00001 16.5H5.50001V10H8.00001V16.5ZM9.50001 16.5V10H14.5V16.5H9.50001Z" fill="currentColor"/>';Mt._name="bank";Mt._width=24;Mt._height=24;Mt._viewBox="0 0 24 24";Mt=o([S("gds-icon-bank")],Mt);let rt=class extends Q{};rt._regularSVG='<path d="M4.75 4.75L19.25 19.25M19.25 4.75L4.75 19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';rt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.11612 4.11612C4.60427 3.62796 5.39573 3.62796 5.88388 4.11612L12 10.2322L18.1161 4.11612C18.6043 3.62796 19.3957 3.62796 19.8839 4.11612C20.372 4.60427 20.372 5.39573 19.8839 5.88388L13.7678 12L19.8839 18.1161C20.372 18.6043 20.372 19.3957 19.8839 19.8839C19.3957 20.372 18.6043 20.372 18.1161 19.8839L12 13.7678L5.88388 19.8839C5.39573 20.372 4.60427 20.372 4.11612 19.8839C3.62796 19.3957 3.62796 18.6043 4.11612 18.1161L10.2322 12L4.11612 5.88388C3.62796 5.39573 3.62796 4.60427 4.11612 4.11612Z" fill="currentColor"/>';rt._name="cross-large";rt._width=24;rt._height=24;rt._viewBox="0 0 24 24";rt=o([S("gds-icon-cross-large")],rt);let Et=class extends Q{};Et._regularSVG='<path d="M6.75 12H17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';Et._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 11.5858 6.33579 11.25 6.75 11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H6.75C6.33579 12.75 6 12.4142 6 12Z" fill="currentColor"/>';Et._name="minus-small";Et._width=24;Et._height=24;Et._viewBox="0 0 24 24";Et=o([S("gds-icon-minus-small")],Et);const ep=z`
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
`;var tp=ep;let at=class extends _r(ve(Qn(R))){render(){return v`<img src="${this.src}" alt="${this.alt}" />`}};at.styles=[G,tp];o([x()],at.prototype,"aspect-ratio",2);o([x({property:"border-radius",valueTemplate:e=>`var(--gds-sys-space-${e})`})],at.prototype,"border-radius",2);o([x({selector:"img"})],at.prototype,"object-fit",2);o([x({selector:"img"})],at.prototype,"object-position",2);o([d()],at.prototype,"src",2);o([d()],at.prototype,"alt",2);at=o([S("gds-img")],at);const sp=z``;var Ui,dd,Ur,qr,qi,Zr,Zi,cd,Xr,hd,Kr,ud,Jr,pd,Qr,gd,Xi,fd;let J=class extends ne{constructor(){super(),c(this,Ui),c(this,Zi),c(this,Xr),c(this,Kr),c(this,Jr),c(this,Qr),c(this,Xi),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autofocus=!1,this.spellcheck=!0,c(this,Ur,e=>{const t=e.target;this.value=t.value}),c(this,qr,e=>{const t=e.target;this.value=t.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),c(this,qi,()=>{this.elInputAsync.then(e=>e.focus())}),c(this,Zr,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}focus(e){this._getValidityAnchor()?.focus(e)}render(){return v`
      ${P(!this.plain,()=>v`<gds-form-control-header class="size-${this.size}">
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
        @click=${a(this,qi)}
        id="field"
      >
        ${f(this,Zi,cd).call(this)}
      </gds-field-base>
      ${P(f(this,Ui,dd).call(this),()=>v` <gds-form-control-footer
            class="size-${this.size}"
            .charCounter=${a(this,Xi,fd)?this.maxlength-(this.value?.length||0):void 0}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_getValidityAnchor(){return this.elInput}};Ui=new WeakSet;dd=function(){return!this.plain};Ur=new WeakMap;qr=new WeakMap;qi=new WeakMap;Zr=new WeakMap;Zi=new WeakSet;cd=function(){return[f(this,Xr,hd).call(this),f(this,Jr,pd).call(this),f(this,Qr,gd).call(this),f(this,Kr,ud).call(this)].map(t=>v`${t}`)};Xr=new WeakSet;hd=function(){return v` <slot slot="lead" name="lead"></slot> `};Kr=new WeakSet;ud=function(){return v`<slot slot="trail" name="trail"></slot>`};Jr=new WeakSet;pd=function(){return v`
      <input
        class="native-control"
        @input=${a(this,Ur)}
        @change=${a(this,qr)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-label=${this.plain&&this.label||fe}
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
    `};Qr=new WeakSet;gd=function(){return this.clearable&&(this.value?.length||0)>0?v`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${A("Clear input")}"
        @click=${a(this,Zr)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-large />
      </gds-button>`:fe};Xi=new WeakSet;fd=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};J.styles=[G,ro,sp];o([d({attribute:"supporting-text"})],J.prototype,"supportingText",2);o([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],J.prototype,"showExtendedSupportingText",2);o([d({type:Boolean})],J.prototype,"clearable",2);o([d({type:Number})],J.prototype,"maxlength",2);o([d({type:String})],J.prototype,"size",2);o([d({type:Boolean})],J.prototype,"plain",2);o([d({reflect:!0})],J.prototype,"type",2);o([d()],J.prototype,"min",2);o([d()],J.prototype,"max",2);o([d()],J.prototype,"step",2);o([d()],J.prototype,"autocapitalize",2);o([d()],J.prototype,"autocorrect",2);o([d()],J.prototype,"autocomplete",2);o([d({type:Boolean})],J.prototype,"autofocus",2);o([d()],J.prototype,"enterkeyhint",2);o([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],J.prototype,"spellcheck",2);o([d()],J.prototype,"inputmode",2);o([Nt("input")],J.prototype,"elInputAsync",2);o([Z("input")],J.prototype,"elInput",2);J=o([Se()],J);let Ki=class extends ve($e(me(J))){};Ki=o([S("gds-input",{dependsOn:[He,Ie,be,mt,xt,rt]})],Ki);const np=z`
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
`;var op=np,Ji,yd;let qe=class extends $e(ve(me(R))){constructor(){super(...arguments),c(this,Ji),this.href="",this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return Cs`
      <a
        href=${N(this.href)}
        target=${N(this.target)}
        rel=${N(this.rel||a(this,Ji,yd))}
        download=${N(this.download)}
        aria-label=${this.label||fe}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};Ji=new WeakSet;yd=function(){return this.target==="_blank"?"noreferrer noopener":void 0};qe.styles=[G,re(op)];qe.shadowRootOptions={mode:"open",delegatesFocus:!0};o([d()],qe.prototype,"href",2);o([d()],qe.prototype,"target",2);o([d()],qe.prototype,"rel",2);o([d()],qe.prototype,"label",2);o([d()],qe.prototype,"download",2);o([x({valueTemplate:e=>e,selector:"a"})],qe.prototype,"text-decoration",2);qe=o([S("gds-link")],qe);const ip=z`
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
`;var rp=ip;let lt=class extends mt{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.inset="0"}render(){return Cs`<div part="mask"></div>
      <div part="content"><slot></slot></div>`}};lt.styles=[G,rp];o([x({selector:'[part="mask"]',valueTemplate:e=>{const[t]=e.split("/");return`linear-gradient(to ${t}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`}})],lt.prototype,"mask-image",2);o([x({valueTemplate:e=>e,selector:'[part="mask"]'})],lt.prototype,"mask-size",2);o([x({valueTemplate:e=>e,selector:'[part="mask"]'})],lt.prototype,"mask-repeat",2);o([x({valueTemplate:e=>e,selector:'[part="mask"]'})],lt.prototype,"mask-position",2);o([x({selector:'[part="mask"]',valueTemplate:function(e){const[t,s]=e.split("/");return s?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-background-${t}) ${parseFloat(s)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-background-${t})`}})],lt.prototype,"background-color",2);o([x({valueTemplate:e=>e,selector:'[part="mask"]'})],lt.prototype,"backdrop-filter",2);lt=o([S("gds-mask")],lt);const ap=z`
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
`;var lp=ap,Kt,gs,Qi,bd;let Te=class extends ve(me(R)){constructor(){super(),c(this,Kt),c(this,Qi),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const e={button:!0,selected:this.selected,compact:this.compact},t=a(this,Kt,gs)?On`a`:On`button`;return Cs`
      <${t}
        class="${xe(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${N(a(this,Kt,gs)?this.href:void 0)}
        target=${N(a(this,Kt,gs)?this.target:void 0)}
        rel=${N(a(this,Kt,gs)?this.rel||a(this,Qi,bd):void 0)}
        download=${N(a(this,Kt,gs)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${t}>
    `}};Kt=new WeakSet;gs=function(){return this.href.length>0};Qi=new WeakSet;bd=function(){return this.target==="_blank"?"noreferrer noopener":void 0};Te.styles=[G,re(lp)];Te.shadowRootOptions={mode:"open",delegatesFocus:!0};o([d({type:Boolean,reflect:!0})],Te.prototype,"disabled",2);o([d()],Te.prototype,"label",2);o([d()],Te.prototype,"href",2);o([d()],Te.prototype,"target",2);o([d()],Te.prototype,"rel",2);o([d()],Te.prototype,"download",2);o([d({type:Boolean,reflect:!0})],Te.prototype,"compact",2);o([d({type:Boolean,reflect:!0})],Te.prototype,"selected",2);Te=o([S("gds-menu-button")],Te);const dp=z`
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
`;var Mn,er,ea,vd,lo,ta,sa,md,na,xd,Xn,tr,sr,_d,oa,wd,ia,kd,ra,Cd;let Ze=class extends ne{constructor(){super(...arguments),c(this,Mn),c(this,ea),c(this,lo),c(this,sa),c(this,na),c(this,Xn),c(this,sr),c(this,oa),c(this,ia),c(this,ra),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0,this.updateComplete.then(()=>{this._syncRadioStates(),f(this,Mn,er).call(this)}),this.addEventListener("invalid",this._syncRadioStates)}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}focus(e){this._getValidityAnchor()?.focus(e)}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected&&(this._syncRadioStates(),this.updateComplete.then(()=>{f(this,Mn,er).call(this)}))}_syncRadioStates(){this._isConnected&&this.radios.forEach(e=>{e.checked=e.value===this.value,e.size=this.size,e.invalid=this.invalid})}render(){const e={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return v`<div
      role="radiogroup"
      id="radiogroup"
      class=${xe(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${f(this,sr,_d).call(this)}
    </div>`}};Mn=new WeakSet;er=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(t=>t.checked);e?(e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter(t=>!t.checked).forEach(t=>t.setAttribute("tabindex","-1"))};ea=new WeakSet;vd=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(s=>s.checked),t=e||this.radios[0];t&&(t.focus(),e||(this.radios.forEach(s=>s.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))};lo=new WeakSet;ta=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{composed:!0,bubbles:!0})),this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};sa=new WeakSet;md=function(e){e.stopPropagation();const t=e.target;this.value=t.value,this._syncRadioStates(),f(this,lo,ta).call(this)};na=new WeakSet;xd=function(e){if(!this._isConnected)return;const t=this.radios.filter(n=>!n.disabled);if(t.length===0)return;let s=t.findIndex(n=>document.activeElement===n);switch(s===-1&&(s=t.findIndex(n=>n.checked),s===-1&&(s=0)),e.key){case"ArrowDown":case"ArrowRight":{e.preventDefault();const n=(s+1)%t.length;f(this,Xn,tr).call(this,t[n]);break}case"ArrowUp":case"ArrowLeft":{e.preventDefault();const n=(s-1+t.length)%t.length;f(this,Xn,tr).call(this,t[n]);break}default:return}};Xn=new WeakSet;tr=function(e){!this._contentElement||!this._isConnected||(this.radios.forEach(t=>t.setAttribute("tabindex","-1")),e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),e.checked=!0,e.focus(),this.value=e.value,this._syncRadioStates(),f(this,lo,ta).call(this))};sr=new WeakSet;_d=function(){return[f(this,oa,wd).call(this),f(this,ia,kd).call(this),f(this,ra,Cd).call(this)].map(t=>v`${t}`)};oa=new WeakSet;wd=function(){if(this.label)return v` <gds-form-control-header
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
      </gds-form-control-header>`};ia=new WeakSet;kd=function(){return v` <div
      class="content"
      @keydown=${f(this,na,xd)}
      @focus=${f(this,ea,vd)}
    >
      <slot @input=${f(this,sa,md)}></slot>
    </div>`};ra=new WeakSet;Cd=function(){return v` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};Ze.styles=[G,dp];o([d()],Ze.prototype,"size",2);o([d()],Ze.prototype,"direction",2);o([d({attribute:"supporting-text"})],Ze.prototype,"supportingText",2);o([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],Ze.prototype,"showExtendedSupportingText",2);o([Z(".content")],Ze.prototype,"_contentElement",2);o([Y("value")],Ze.prototype,"_handleValueChange",1);o([Y("invalid")],Ze.prototype,"_syncRadioStates",1);Ze=o([Se()],Ze);let nr=class extends me($e(ve(Ze))){};nr=o([S("gds-radio-group",{dependsOn:[He,Ie]})],nr);const cp=z`
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
`;var En,or;let Xe=class extends R{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,c(this,En,e=>{this.disabled||!this.value||!this.label||(e.preventDefault(),this.checked=!0,this.focus(),this.dispatchStandardEvent("input",{bubbles:!0}))}),c(this,or,e=>{this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.checked=!0,this.dispatchStandardEvent("input",{bubbles:!0}))}),this.addEventListener("keydown",a(this,or)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",a(this,En))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}updated(e){super.updated(e),(e.has("checked")||e.has("disabled")||e.has("invalid"))&&this._updateAriaState()}render(){return v`
      <gds-toggle-control-base type="radio">
        <label slot="label" @click=${a(this,En)}> ${this.label} </label>
        <span slot="supporting-text"> ${this.supportingText} </span>
        ${yh({checked:this.checked,disabled:this.disabled,indeterminate:!1,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}};En=new WeakMap;or=new WeakMap;Xe.styles=[vl,cp];o([d()],Xe.prototype,"label",2);o([d({attribute:"supporting-text"})],Xe.prototype,"supportingText",2);o([d()],Xe.prototype,"value",2);o([d({type:Boolean,reflect:!0})],Xe.prototype,"checked",2);o([d({type:Boolean,reflect:!0})],Xe.prototype,"disabled",2);o([d({type:Boolean})],Xe.prototype,"invalid",2);o([le()],Xe.prototype,"_isFocused",2);Xe=o([S("gds-radio",{dependsOn:[ns]})],Xe);const hp=`@layer base {
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
`;let It=class extends ve(R){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),ye.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return v`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};It.styles=[...G,re(hp)];o([d({type:Boolean,reflect:!0})],It.prototype,"selected",2);o([d()],It.prototype,"value",2);o([d({type:Boolean,reflect:!0})],It.prototype,"disabled",2);It=o([S("gds-segment")],It);const up=`@layer base {
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
`;var Vt,ir,$d,rr,ar,lr,Ns,Tn,dr,cr;const pp=(e,t)=>{let s;return()=>{clearTimeout(s),s=setTimeout(e,t)}};let De=class extends me(ve($e(R))){constructor(){super(...arguments),c(this,ir),this.size="medium",c(this,Vt,void 0),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,c(this,rr,()=>{const e=this.segments.filter((t,s,n)=>n[s+1]?.isVisible&&!t.isVisible)[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),c(this,ar,()=>{const e=this.segments.filter((t,s,n)=>n[s-1]?.isVisible&&!t.isVisible).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),c(this,lr,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),c(this,Ns,pp(a(this,lr),50)),c(this,Tn,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,s=e.offsetLeft;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),c(this,dr,e=>{const t=this.segments.find(s=>s===e.target||s.contains(e.target));t&&(this.segments.forEach(s=>s.selected=!1),t.selected=!0,U(this,Vt,t.value),a(this,Tn).call(this),this.dispatchCustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0}))}),c(this,cr,()=>{a(this,Vt)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===a(this,Vt));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return a(this,Vt)}set value(e){U(this,Vt,e),a(this,cr).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),ye.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{a(this,Ns).call(this)})})}render(){return v`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${a(this,rr)}
        aria-label=${A("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${a(this,dr)}
          @slotchange=${f(this,ir,$d)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${a(this,ar)}
        aria-label=${A("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{a(this,Ns).call(this),a(this,Tn).call(this)})}};Vt=new WeakMap;ir=new WeakSet;$d=function(){const e=this.segments.find(t=>t.selected)?.value;e&&U(this,Vt,e),this.intersectionObserver?.disconnect(),this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(s=>{const n=s.target;n._isVisible=s.intersectionRatio>.99,a(this,Ns).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(t=>{this.intersectionObserver?.observe(t)})};rr=new WeakMap;ar=new WeakMap;lr=new WeakMap;Ns=new WeakMap;Tn=new WeakMap;dr=new WeakMap;cr=new WeakMap;De.styles=[G,re(up)];o([d({reflect:!0})],De.prototype,"size",2);o([d()],De.prototype,"value",1);o([Z("slot")],De.prototype,"_elSlot",2);o([Z("#indicator")],De.prototype,"_elIndicator",2);o([Z("#track")],De.prototype,"_elTrack",2);o([le()],De.prototype,"_showPrevButton",2);o([le()],De.prototype,"_showNextButton",2);o([Yr(),Y("value")],De.prototype,"_recalculateMinWidth",1);De=o([S("gds-segmented-control",{dependsOn:[It,st,it]}),Se()],De);const gp=z`
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
`;var fp=gp;let qs=class extends R{render(){return Cs`<div part="signal"></div>`}};qs.styles=[G,fp];o([x({valueTemplate:e=>`var(--gds-color-${e})`,selector:'[part="signal"]'})],qs.prototype,"color",2);qs=o([S("gds-signal")],qs);let Zs=class extends R{render(){return v``}};Zs.styles=[G];o([x({property:"height",valueTemplate:e=>`var(--gds-sys-space-${e})`})],Zs.prototype,"size",2);Zs=o([S("gds-spacer")],Zs);const Sd=z`
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
`,yp=z`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var bp=yp;let dt=class extends O{constructor(){super(...arguments),this.tag="span"}render(){const e=$c(encodeURI(this.tag));return Cs`<${e} tag><slot></slot></${e}>`}};dt.styles=[G,Sd,bp];o([d({type:String})],dt.prototype,"tag",2);o([x({selector:"[tag]",styleTemplate:(e,t)=>{const s=t[0],n=`font-size: var(--gds-sys-text-size-${s});`,i=`line-height: var(--gds-sys-text-line-height-${s});`;return n+i}})],dt.prototype,"font-size",2);o([x({selector:"[tag]",valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],dt.prototype,"font-weight",2);o([x()],dt.prototype,"text-transform",2);o([x({selector:"[tag]"})],dt.prototype,"text-decoration",2);o([x({selector:"[tag]",styleTemplate:(e,t)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${t[0]};
      -webkit-box-orient: vertical;`})],dt.prototype,"lines",2);dt=o([S("gds-text")],dt);const vp=z`
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
`;var hr,Md,aa,la,da,ur,ca,pr,Ed,ha,Td,ua,zd,pa,Ad,ga,Ld,gr,Dd;let q=class extends ne{constructor(){super(),c(this,hr),c(this,pr),c(this,ha),c(this,ua),c(this,pa),c(this,ga),c(this,gr),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.showExtendedSupportingText=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.autocapitalize="off",this.autofocus=!1,this.spellcheck=!0,this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},c(this,aa,e=>{const t=e.target;this.value=t.value}),c(this,la,e=>{const t=e.target;this.value=t.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),c(this,da,e=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),c(this,ur,()=>{this.elTextareaAsync.then(e=>e.focus())}),c(this,ca,()=>{this.value="",this.elTextareaAsync.then(e=>{if(this.resizable==="manual")e.style.height="";else if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString()),e.style.height=""}}),this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}focus(e){this._getValidityAnchor()?.focus(e)}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{const e=this.fieldBase?.shadowRoot;if(!e)return;const t=e.querySelector(".right");if(t){const s=t.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${s.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return v`
      ${P(!this.plain,()=>v`<gds-form-control-header
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
        @click=${a(this,ur)}
        multiline
      >
        ${f(this,pr,Ed).call(this)}
      </gds-field-base>

      ${P(f(this,hr,Md).call(this),()=>v`<gds-form-control-footer
            id="footer"
            class="size-${this.size}"
            .charCounter=${a(this,gr,Dd)?this.maxlength-(this.value?.length||0):void 0}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(e.value===""){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=getComputedStyle(e),s=parseFloat(t.lineHeight),n=e.scrollHeight,i=Math.ceil(n/s),r=this._initialRows??this._defaultRows;this.rows=Math.max(r,i),e.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(e=>{this.resizable==="false"&&e.style.setProperty("--_lines",this.rows.toString())})}};hr=new WeakSet;Md=function(){return!this.plain};aa=new WeakMap;la=new WeakMap;da=new WeakMap;ur=new WeakMap;ca=new WeakMap;pr=new WeakSet;Ed=function(){return[f(this,ha,Td).call(this),f(this,pa,Ad).call(this),f(this,ga,Ld).call(this),f(this,ua,zd).call(this)].map(t=>v`${t}`)};ha=new WeakSet;Td=function(){return v`<slot slot="lead" name="lead"></slot>`};ua=new WeakSet;zd=function(){return v`<slot slot="trail" name="trail"></slot>`};pa=new WeakSet;Ad=function(){return v`
      <textarea
        @input=${a(this,aa)}
        @change=${a(this,la)}
        @paste=${a(this,da)}
        .value=${this.value}
        id="input"
        class="native-control resize-${this.resizable}"
        aria-label=${this.plain&&this.label||fe}
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
    `};ga=new WeakSet;Ld=function(){return this.clearable&&(this.value?.length||0)>0?v`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${A("Clear input")}"
          @click=${a(this,ca)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:fe};gr=new WeakSet;Dd=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};q.styles=[G,ro,vp];o([x({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],q.prototype,"rows",2);o([d({attribute:"supporting-text"})],q.prototype,"supportingText",2);o([d({type:Boolean})],q.prototype,"clearable",2);o([d({type:String})],q.prototype,"resizable",2);o([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],q.prototype,"showExtendedSupportingText",2);o([d({type:Number})],q.prototype,"maxlength",2);o([d({type:String})],q.prototype,"size",2);o([d({type:Boolean})],q.prototype,"plain",2);o([d()],q.prototype,"autocapitalize",2);o([d()],q.prototype,"autocorrect",2);o([d()],q.prototype,"autocomplete",2);o([d({type:Boolean})],q.prototype,"autofocus",2);o([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],q.prototype,"spellcheck",2);o([d()],q.prototype,"wrap",2);o([d()],q.prototype,"enterkeyhint",2);o([d()],q.prototype,"inputmode",2);o([Nt("textarea")],q.prototype,"elTextareaAsync",2);o([Z("textarea")],q.prototype,"elTextarea",2);o([Z("gds-field-base")],q.prototype,"fieldBase",2);o([Yr()],q.prototype,"_handleResize",1);o([Y("value")],q.prototype,"_setAutoHeight",1);o([Y("rows")],q.prototype,"_handleRowsChange",1);q=o([Se()],q);let fr=class extends me(ve($e(q))){};fr=o([S("gds-textarea",{dependsOn:[He,Ie,xt,be,rt]})],fr);let Ht=class extends R{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2016"}connectedCallback(){super.connectedCallback(),ye.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",re(`:host {${mo}}`))}render(){return v`<slot></slot>`}_onColorSchemeChange(){this.colorScheme==="dark"?this._dynamicStylesController.inject("color-scheme",re(`:host { ${mo}}`)):this._dynamicStylesController.inject("color-scheme",re(`:host { ${Ya}}`)),this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};Ht.styles=[G,z`
      :host {
        display: contents;
      }
    `];o([d({reflect:!0,attribute:"color-scheme"})],Ht.prototype,"colorScheme",2);o([d({reflect:!0,attribute:"design-version"})],Ht.prototype,"designVersion",2);o([Y("colorScheme")],Ht.prototype,"_onColorSchemeChange",1);o([Y("designVersion")],Ht.prototype,"_onDesignVersionChange",1);Ht=o([S("gds-theme")],Ht);const mp=z`
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
`;var xp=mp;let ue=class extends ve(Qn($e(me(_r(R))))){applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return v`<video></video>`}firstUpdated(){this.applyVideoSettings()}};ue.styles=[G,xp];o([x()],ue.prototype,"aspect-ratio",2);o([x({selector:"video"})],ue.prototype,"object-position",2);o([x()],ue.prototype,"opacity",2);o([x({selector:"video"})],ue.prototype,"object-fit",2);o([x({selector:"video"})],ue.prototype,"pointer-events",2);o([x({valueTemplate:e=>`var(--gds-sys-space-${e})`})],ue.prototype,"border-radius",2);o([d()],ue.prototype,"src",2);o([d()],ue.prototype,"poster",2);o([d({type:Boolean})],ue.prototype,"muted",2);o([d({type:Boolean})],ue.prototype,"playsinline",2);o([d({type:Boolean})],ue.prototype,"autoplay",2);o([d({type:Boolean})],ue.prototype,"loop",2);o([Z("video")],ue.prototype,"videoElement",2);ue=o([S("gds-video")],ue);const _p=z`
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
`;var yr,Wd,Kn,fa;let Ke=class extends ne{constructor(){super(...arguments),c(this,yr),c(this,Kn),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1}get value(){return this._internalValue||""}set value(e){this._internalValue=e}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}render(){return v`
      <input
        type="checkbox"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        ?indeterminate=${this.indeterminate}
        aria-invalid=${this.invalid}
        aria-describedby=${N(this.supportingText?"supporting-text":"")}
        id="checkbox-input"
        @change=${()=>{this.checked=this._elCheckbox.checked,f(this,Kn,fa).call(this)}}
      />
      <gds-toggle-control-base type="checkbox" @click=${f(this,yr,Wd)}>
        <label for="checkbox-input" slot="label"> ${this.label} </label>
        <span
          slot="supporting-text"
          class="supporting-text"
          id="supporting-text"
        >
          ${this.supportingText}
        </span>
        ${fh({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}_getValidityAnchor(){return this._elCheckbox||this}formResetCallback(){this.checked=!1}};yr=new WeakSet;Wd=function(e){this.disabled||e.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,f(this,Kn,fa).call(this))};Kn=new WeakSet;fa=function(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};Ke.styles=[G,vl,_p];o([d()],Ke.prototype,"label",2);o([d({attribute:"supporting-text"})],Ke.prototype,"supportingText",2);o([d({type:Boolean})],Ke.prototype,"checked",2);o([d({type:Boolean,reflect:!0})],Ke.prototype,"indeterminate",2);o([d({type:Boolean,reflect:!0})],Ke.prototype,"disabled",2);o([Z('input[type="checkbox"]')],Ke.prototype,"_elCheckbox",2);o([Y("indeterminate")],Ke.prototype,"_handleIndeterminateChange",1);Ke=o([S("gds-checkbox",{dependsOn:[ns,Ae,Et]})],Ke);Ke.define();jo.define();je.define();vs.define();Fn.define();Fi.define();Ue.define();St.define();K.define();tt.define();Le.define();as.define();mt.define();ls.define();Zn.define();qn.define();Mt.define();at.define();Ki.define();qe.define();lt.define();Te.define();V.define();let Xs=class extends R{constructor(){super(...arguments),this.show=!1}render(){return v``}};Xs.styles=z`
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
  `;o([d({type:Boolean,reflect:!0})],Xs.prototype,"show",2);Xs=o([S("gds-backdrop")],Xs);Xs.define();Xe.define();nr.define();const wp=z`
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
`;let ws=class extends me($e(R)){constructor(){super(...arguments),this.captureMode="clone"}querySelectorAll(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):new NodeList}querySelector(e){return this.shadowRoot?this.shadowRoot.querySelector(e):null}get innerHTML(){return this.shadowRoot?.innerHTML||""}set innerHTML(e){this.shadowRoot&&(this.shadowRoot.innerHTML=e)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){if(!this.shadowRoot||this.childNodes.length===0)return;if(this.captureMode==="move"){this.shadowRoot.replaceChildren(...Array.from(this.childNodes));return}const e=Array.from(this.childNodes).map(t=>t.cloneNode(!0));this.shadowRoot.replaceChildren(...e)}};ws.styles=[G,Sd,wp];o([d()],ws.prototype,"captureMode",2);o([eo({childList:!0,subtree:!0,attributes:!0,characterData:!0})],ws.prototype,"_captureDOM",1);ws=o([S("gds-rich-text")],ws);ws.define();De.define();It.define();qs.define();Zs.define();dt.define();fr.define();Ht.define();ue.define();export{Ae as $,Rc as A,Wu as B,Nt as C,Ft as D,mt as E,O as F,te as G,xt as H,st as I,ne as J,ro as K,Z as L,eo as M,Y as N,He as O,Ie as P,be as Q,kt as R,_r as S,$c as T,Cs as U,_t as V,wt as W,ot as X,Ct as Y,$t as Z,o as _,ve as a,it as a0,rt as a1,Et as a2,$e as b,R as c,c as d,xe as e,Cl as f,f as g,P as h,$l as i,a as j,U as k,Se as l,A as m,d as n,xu as o,ku as p,Vl as q,le as r,_u as s,G as t,wu as u,Ep as v,me as w,Tp as x,Mp as y,Q as z};
