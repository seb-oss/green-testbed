import{u as pl,f as fl,_ as c,a as x,b as l,c as R,r as j,i as W,d as r,e as gs,g as $,h as C,j as oo,k as Fs,V as Es,T as so,E as ge,x as be,Z as vl,l as bl,t as yl}from"./index-C26X918Q.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ml={attribute:!0,type:String,converter:pl,reflect:!1,hasChanged:fl},xl=(e=ml,t,o)=>{const{kind:s,metadata:i}=o;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(o.name,e),s==="accessor"){const{name:a}=o;return{set(d){const u=t.get.call(this);t.set.call(this,d),this.requestUpdate(a,u,e)},init(d){return d!==void 0&&this.P(a,void 0,e),d}}}if(s==="setter"){const{name:a}=o;return function(d){const u=this[a];t.call(this,d),this.requestUpdate(a,u,e)}}throw Error("Unsupported decorator location: "+s)};function h(e){return(t,o)=>typeof o=="object"?xl(e,t,o):((s,i,n)=>{const a=i.hasOwnProperty(n);return i.constructor.createProperty(n,a?{...s,wrapped:!0}:s),a?Object.getOwnPropertyDescriptor(i,n):void 0})(e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ie(e){return h({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Q(e,t){return(o,s,i)=>{const n=a=>a.renderRoot?.querySelector(e)??null;return bi(o,s,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let wl;function kl(e){return(t,o)=>bi(t,o,{get(){return(this.renderRoot??(wl??=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qe(e){return(t,o)=>bi(t,o,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}var Ae,qo,Pe,Zo,vt,De,rt,Qo,zs,An,Ct,Yt,Ws,Dn,_l=class{constructor(e){c(this,zs),c(this,Ct),c(this,Ws),c(this,Ae,!yi()),c(this,qo,!1),c(this,Pe,[]),c(this,Zo,[]),c(this,vt,new Map),c(this,De,new Map),c(this,rt,[]),c(this,Qo,[]),this.host=e,this.host.addController(this)}hostConnected(){x(this,Ws,Dn).call(this)}has(e){return l(this,Ae)?l(this,De).has(e):l(this,vt).has(e)}inject(e,t){x(this,zs,An).call(this,e,t),x(this,Ct,Yt).call(this)}clear(e){if(l(this,Ae)){const t=l(this,De).get(e);t?.remove(),l(this,De).delete(e)}else l(this,vt).delete(e);x(this,Ct,Yt).call(this)}clearAll(){l(this,Ae)?(l(this,De).forEach(e=>e.remove()),l(this,rt).forEach(e=>e.remove()),l(this,De).clear(),R(this,rt,[])):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],l(this,vt).clear(),R(this,Pe,[]))}clearInitial(){l(this,Ae)?(l(this,rt).forEach(e=>e.remove()),R(this,rt,[])):R(this,Pe,[]),x(this,Ct,Yt).call(this)}restoreInitial(){l(this,Ae)?l(this,Qo).forEach(e=>{l(this,rt).push(e.cloneNode(!0))}):R(this,Pe,[...l(this,Zo)]),x(this,Ct,Yt).call(this)}};Ae=new WeakMap;qo=new WeakMap;Pe=new WeakMap;Zo=new WeakMap;vt=new WeakMap;De=new WeakMap;rt=new WeakMap;Qo=new WeakMap;zs=new WeakSet;An=function(e,t){if(l(this,Ae)){let o=l(this,De).get(e);o||(o=document.createElement("style"),l(this,De).set(e,o)),o.textContent=t.cssText}else{if(!this.host.shadowRoot||!t.styleSheet)return;l(this,vt).set(e,t.styleSheet)}};Ct=new WeakSet;Yt=function(){if(l(this,Ae)){if(!this.host.shadowRoot)return;this.host.shadowRoot.querySelectorAll("style").forEach(e=>{e.remove()}),l(this,De).forEach(e=>{var t;(t=this.host.shadowRoot)==null||t.appendChild(e)})}else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...l(this,Pe),...Array.from(l(this,vt).values())]}};Ws=new WeakSet;Dn=function(){if(!l(this,qo)){if(l(this,Ae)){if(!this.host.shadowRoot)return;this.host.shadowRoot.querySelectorAll("style").forEach(e=>{l(this,rt).push(e),l(this,Qo).push(e.cloneNode(!0))})}else this.host.shadowRoot&&l(this,Pe).length===0&&(R(this,Pe,[...this.host.shadowRoot.adoptedStyleSheets||[]]),R(this,Zo,[...l(this,Pe)]));R(this,qo,!0)}};function yi(){try{return new CSSStyleSheet,!0}catch{return!1}}var Ls,Jo,Xo,mi,Os,Fn,Bs,zn,Cl=class Wn{constructor(){c(this,Os),c(this,Bs),c(this,Ls,!yi()),c(this,Jo,new Map),c(this,Xo,new Map),c(this,mi,document.adoptedStyleSheets||[])}static get instance(){return globalThis.__gdsGlobalStylesRegistry||(globalThis.__gdsGlobalStylesRegistry=new Wn),globalThis.__gdsGlobalStylesRegistry}injectGlobalStyles(t,o){if(l(this,Ls)){const s=Array.isArray(o)?o.map(i=>i.toString()).join(""):o.toString();x(this,Os,Fn).call(this,t,s)}else o.styleSheet&&x(this,Bs,zn).call(this,t,o.styleSheet)}};Ls=new WeakMap;Jo=new WeakMap;Xo=new WeakMap;mi=new WeakMap;Os=new WeakSet;Fn=function(e,t){let o=l(this,Xo).get(e);o||(o=document.createElement("style"),l(this,Xo).set(e,o)),o.textContent=t,document.head.appendChild(o)};Bs=new WeakSet;zn=function(e,t){l(this,Jo).set(e,t),document.adoptedStyleSheets=[...l(this,mi),...Array.from(l(this,Jo).values())]};var Ln=Cl,Vs=`/**
 * Do not edit directly
 * Generated on Fri, 29 Nov 2024 23:54:56 GMT
 */

color-scheme: dark;
  --gds-color-l1-background-primary: #0e0e0e;
  --gds-color-l1-background-tertiary: #d7d7d7;
  --gds-color-l1-background-secondary: #131313;
  --gds-color-l1-content-positive: #54b561;
  --gds-color-l1-content-negative: #a63e2a;
  --gds-color-l1-content-primary: #d7d7d7;
  --gds-color-l1-content-secondary: #ababab;
  --gds-color-l1-content-tertiary: #1b1b1b;
  --gds-color-l2-background-primary: #242424;
  --gds-color-l2-background-secondary: #242424;
  --gds-color-l2-background-tertiary: #d7d7d7;
  --gds-color-l2-background-positive: #1d3f22;
  --gds-color-l2-background-negative: #4a1c13;
  --gds-color-l2-background-notice: #152c41;
  --gds-color-l2-background-warning: #4c3212;
  --gds-color-l2-background-information: #353535;
  --gds-color-l2-background-copper-01: #f2efeb;
  --gds-color-l2-background-copper-02: #332a18;
  --gds-color-l2-background-purple-01: #f3eff7;
  --gds-color-l2-background-purple-02: #372b40;
  --gds-color-l2-background-green-01: #ecf6ed;
  --gds-color-l2-background-green-02: #1d3f22;
  --gds-color-l2-background-blue-01: #eaf0f7;
  --gds-color-l2-background-blue-02: #152c41;
  --gds-color-l2-content-primary: #d7d7d7;
  --gds-color-l2-content-secondary: #ababab;
  --gds-color-l2-content-tertiary: #1b1b1b;
  --gds-color-l2-content-positive: #54b561;
  --gds-color-l2-content-negative: #ee8375;
  --gds-color-l2-content-warning: #f3b274;
  --gds-color-l2-content-notice: #78a3d5;
  --gds-color-l2-content-infomation: #d7d7d7;
  --gds-color-l2-content-copper-01: #1b1b1b;
  --gds-color-l2-content-copper-02: #ffffff;
  --gds-color-l2-content-purple-01: #1b1b1b;
  --gds-color-l2-content-purple-02: #ffffff;
  --gds-color-l2-content-green-01: #1b1b1b;
  --gds-color-l2-content-green-02: #ffffff;
  --gds-color-l2-content-blue-01: #1b1b1b;
  --gds-color-l2-content-blue-02: #ffffff;
  --gds-color-l2-border-primary: #353535;
  --gds-color-l2-border-secondary: #5e5e5e;
  --gds-color-l2-border-tertiary: #2c2c2c;
  --gds-color-l2-border-quarternary: #d7d7d7;
  --gds-color-l2-border-inversed: #1b1b1b;
  --gds-color-l3-background-primary: #d7d7d7;
  --gds-color-l3-background-secondary: #353535;
  --gds-color-l3-background-tertiary: #424242;
  --gds-color-l3-background-quarternary: #0e0e0e;
  --gds-color-l3-background-positive: #54b561;
  --gds-color-l3-background-positive-secondary: #25512b;
  --gds-color-l3-background-positive-badge: #306938;
  --gds-color-l3-background-negative: #c04831;
  --gds-color-l3-background-negative-secondary: #602418;
  --gds-color-l3-background-negative-badge: #4A1C13;
  --gds-color-l3-background-notice: #78a3d5;
  --gds-color-l3-background-notice-secondary: #1A3853;
  --gds-color-l3-background-notice-badge: #214769;
  --gds-color-l3-background-warning: #f3b274;
  --gds-color-l3-background-warning-secondary: #624017;
  --gds-color-l3-background-warning-badge: #744C1B;
  --gds-color-l3-background-information: #d7d7d7;
  --gds-color-l3-background-information-secondary: #424242;
  --gds-color-l3-background-information-badge: #616161;
  --gds-color-l3-background-buy: #3571a6;
  --gds-color-l3-background-copper-01: #e4ded5;
  --gds-color-l3-background-copper-02: #42361f;
  --gds-color-l3-background-purple-01: #e7deee;
  --gds-color-l3-background-purple-02: #473752;
  --gds-color-l3-background-green-01: #d7edd9;
  --gds-color-l3-background-green-02: #25512b;
  --gds-color-l3-background-blue-01: #d3dfef;
  --gds-color-l3-background-blue-02: #1a3853;
  --gds-color-l3-background-disabled: #181818;
  --gds-color-l3-background-disabled-secondary: #1b1b1b;
  --gds-color-l3-content-primary: #1b1b1b;
  --gds-color-l3-content-secondary: #ababab;
  --gds-color-l3-content-tertiary: #d7d7d7;
  --gds-color-l3-content-notice: #78a3d5;
  --gds-color-l3-content-warning: #f3b274;
  --gds-color-l3-content-information: #d7d7d7;
  --gds-color-l3-content-buy: #ffffff;
  --gds-color-l3-content-copper-01: #1b1b1b;
  --gds-color-l3-content-copper-02: #ffffff;
  --gds-color-l3-content-purple-01: #1b1b1b;
  --gds-color-l3-content-purple-02: #ffffff;
  --gds-color-l3-content-green-01: #1b1b1b;
  --gds-color-l3-content-green-02: #ffffff;
  --gds-color-l3-content-blue-01: #1b1b1b;
  --gds-color-l3-content-blue-02: #ffffff;
  --gds-color-l3-content-disabled: #5e5e5e;
  --gds-color-l3-content-positive: #54b561;
  --gds-color-l3-content-negative: #ee8375;
  --gds-color-l3-border-primary: #d7d7d7;
  --gds-color-l3-border-secondary: #ababab;
  --gds-color-l3-border-tertiary: #1b1b1b;
  --gds-color-l3-border-negative: #ee8375;
  --gds-color-l3-states-dark-hover: #ffffff 10%;
  --gds-color-l3-states-dark-pressed: #ffffff 20%;
  --gds-color-l3-states-light-hover: #d7d7d7 10%;
  --gds-color-l3-states-light-pressed: #d7d7d7 20%;
  --gds-color-l3-states-positive-hover: #54b561 10%;
  --gds-color-l3-states-positive-pressed: #54b561 20%;
  --gds-color-l3-states-negative-hover: #ee8375 10%;
  --gds-color-l3-states-negative-pressed: #ee8375 20%;
`,On=`/**
 * Do not edit directly
 * Generated on Fri, 29 Nov 2024 23:54:56 GMT
 */

color-scheme: light;
  --gds-color-l1-background-primary: #ffffff;
  --gds-color-l1-background-tertiary: #1b1b1b;
  --gds-color-l1-background-secondary: #eeeeee;
  --gds-color-l1-content-positive: #35723d;
  --gds-color-l1-content-negative: #a63e2a;
  --gds-color-l1-content-primary: #1b1b1b;
  --gds-color-l1-content-secondary: #5e5e5e;
  --gds-color-l1-content-tertiary: #ffffff;
  --gds-color-l2-background-primary: #f3f3f3;
  --gds-color-l2-background-secondary: #ffffff;
  --gds-color-l2-background-tertiary: #242424;
  --gds-color-l2-background-positive: #ecf6ed;
  --gds-color-l2-background-negative: #fcecea;
  --gds-color-l2-background-notice: #eaf0f7;
  --gds-color-l2-background-warning: #fcecbc;
  --gds-color-l2-background-information: #e2e2e2;
  --gds-color-l2-background-copper-01: #f2efeb;
  --gds-color-l2-background-copper-02: #332a18;
  --gds-color-l2-background-purple-01: #f3eff7;
  --gds-color-l2-background-purple-02: #372b40;
  --gds-color-l2-background-green-01: #ecf6ed;
  --gds-color-l2-background-green-02: #1d3f22;
  --gds-color-l2-background-blue-01: #eaf0f7;
  --gds-color-l2-background-blue-02: #152c41;
  --gds-color-l2-content-primary: #1b1b1b;
  --gds-color-l2-content-secondary: #5e5e5e;
  --gds-color-l2-content-tertiary: #ffffff;
  --gds-color-l2-content-positive: #35723d;
  --gds-color-l2-content-negative: #a63e2a;
  --gds-color-l2-content-warning: #65581e;
  --gds-color-l2-content-notice: #005fac;
  --gds-color-l2-content-infomation: #1b1b1b;
  --gds-color-l2-content-copper-01: #1b1b1b;
  --gds-color-l2-content-copper-02: #ffffff;
  --gds-color-l2-content-purple-01: #1b1b1b;
  --gds-color-l2-content-purple-02: #ffffff;
  --gds-color-l2-content-green-01: #1b1b1b;
  --gds-color-l2-content-green-02: #ffffff;
  --gds-color-l2-content-blue-01: #1b1b1b;
  --gds-color-l2-content-blue-02: #ffffff;
  --gds-color-l2-border-primary: #d7d7d7;
  --gds-color-l2-border-secondary: #6f6f6f;
  --gds-color-l2-border-tertiary: #f9f9f9;
  --gds-color-l2-border-quarternary: #1b1b1b;
  --gds-color-l2-border-inversed: #ffffff;
  --gds-color-l3-background-primary: #1b1b1b;
  --gds-color-l3-background-secondary: #e2e2e2;
  --gds-color-l3-background-tertiary: #d7d7d7;
  --gds-color-l3-background-quarternary: #ffffff;
  --gds-color-l3-background-positive: #35723d;
  --gds-color-l3-background-positive-secondary: #d7edd9;
  --gds-color-l3-background-positive-badge: #d7edd9;
  --gds-color-l3-background-negative: #a63e2a;
  --gds-color-l3-background-negative-secondary: #fcecea;
  --gds-color-l3-background-negative-badge: #f8d6d3;
  --gds-color-l3-background-notice: #005fac;
  --gds-color-l3-background-notice-secondary: #d3dfef;
  --gds-color-l3-background-notice-badge: #d3dfef;
  --gds-color-l3-background-warning: #65581e;
  --gds-color-l3-background-warning-secondary: #fadf7b;
  --gds-color-l3-background-warning-badge: #fadf7b;
  --gds-color-l3-background-information: #1b1b1b;
  --gds-color-l3-background-information-secondary: #d7d7d7;
  --gds-color-l3-background-information-badge: #d7d7d7;
  --gds-color-l3-background-buy: #2e6290;
  --gds-color-l3-background-copper-01: #e4ded5;
  --gds-color-l3-background-copper-02: #42361f;
  --gds-color-l3-background-purple-01: #e7deee;
  --gds-color-l3-background-purple-02: #473752;
  --gds-color-l3-background-green-01: #d7edd9;
  --gds-color-l3-background-green-02: #25512b;
  --gds-color-l3-background-blue-01: #d3dfef;
  --gds-color-l3-background-blue-02: #1a3853;
  --gds-color-l3-background-disabled: #f9f9f9;
  --gds-color-l3-background-disabled-secondary: #f3f3f3;
  --gds-color-l3-content-primary: #ffffff;
  --gds-color-l3-content-secondary: #5e5e5e;
  --gds-color-l3-content-tertiary: #1b1b1b;
  --gds-color-l3-content-notice: #005fac;
  --gds-color-l3-content-warning: #65581e;
  --gds-color-l3-content-information: #1b1b1b;
  --gds-color-l3-content-buy: #ffffff;
  --gds-color-l3-content-copper-01: #1b1b1b;
  --gds-color-l3-content-copper-02: #ffffff;
  --gds-color-l3-content-purple-01: #1b1b1b;
  --gds-color-l3-content-purple-02: #ffffff;
  --gds-color-l3-content-green-01: #1b1b1b;
  --gds-color-l3-content-green-02: #ffffff;
  --gds-color-l3-content-blue-01: #1b1b1b;
  --gds-color-l3-content-blue-02: #ffffff;
  --gds-color-l3-content-disabled: #ababab;
  --gds-color-l3-content-positive: #35723d;
  --gds-color-l3-content-negative: #a63e2a;
  --gds-color-l3-border-primary: #1b1b1b;
  --gds-color-l3-border-secondary: #6f6f6f;
  --gds-color-l3-border-tertiary: #d7d7d7;
  --gds-color-l3-border-negative: #a63e2a;
  --gds-color-l3-states-dark-hover: #ffffff 10%;
  --gds-color-l3-states-dark-pressed: #ffffff 20%;
  --gds-color-l3-states-light-hover: #1b1b1b 10%;
  --gds-color-l3-states-light-pressed: #1b1b1b 20%;
  --gds-color-l3-states-positive-hover: #35723d 10%;
  --gds-color-l3-states-positive-pressed: #35723d 20%;
  --gds-color-l3-states-negative-hover: #a63e2a 10%;
  --gds-color-l3-states-negative-pressed: #a63e2a 20%;
`,$l=`/**
 * Do not edit directly
 * Generated on Fri, 29 Nov 2024 23:54:56 GMT
 */

:host {
  --gds-sys-motion-duration-slowest: 1.5s;
  --gds-sys-motion-duration-slow: 1s;
  --gds-sys-motion-duration-default: .5s;
  --gds-sys-motion-duration-fast: .4s;
  --gds-sys-motion-duration-fastest: .2s;
  --gds-sys-motion-easing-linear: cubic-bezier(0, 0, 1, 1);
  --gds-sys-motion-easing-ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --gds-sys-motion-easing-ease-in-out: cubic-bezier(0.83, 0, 0.17, 1);
  --gds-sys-motion-easing-ease-in: cubic-bezier(0.64, 0, 0.78, 0);
}
`,Sl=`/**
 * Do not edit directly
 * Generated on Fri, 29 Nov 2024 23:54:56 GMT
 */

:host {
  --gds-ref-color-neutral-000: #ffffff;
  --gds-ref-color-neutral-050: #f8f8f8;
  --gds-ref-color-neutral-100: #e9e9e9;
  --gds-ref-color-neutral-150: #eeeeee;
  --gds-ref-color-neutral-200: #dedede;
  --gds-ref-color-neutral-250: #cecece;
  --gds-ref-color-neutral-300: #ababab;
  --gds-ref-color-neutral-350: #adadad;
  --gds-ref-color-neutral-400: #868686;
  --gds-ref-color-neutral-450: #757575;
  --gds-ref-color-neutral-500: #494949;
  --gds-ref-color-neutral-525: #464646;
  --gds-ref-color-neutral-550: #333333;
  --gds-ref-color-neutral-600: #2c2c2c;
  --gds-ref-color-neutral-650: #272727;
  --gds-ref-color-neutral-700: #222222;
  --gds-ref-color-neutral-750: #1a1a1a;
  --gds-ref-color-neutral-800: #121212;
  --gds-ref-color-neutral-1000: #000000;
  --gds-ref-color-blue-100: #58b8ee;
  --gds-ref-color-blue-200: #41b0ee;
  --gds-ref-color-blue-300: #00adff;
  --gds-ref-color-blue-400: #2c9cd9;
  --gds-ref-color-blue-500: #0092e1;
  --gds-ref-color-blue-600: #007ac7;
  --gds-ref-color-blue-700: #0062bc;
  --gds-ref-color-green-100: #75b44a;
  --gds-ref-color-green-200: #60cd18;
  --gds-ref-color-green-300: #45b400;
  --gds-ref-color-green-400: #308800;
  --gds-ref-color-red-100: #f7706d;
  --gds-ref-color-red-200: #ff594f;
  --gds-ref-color-red-300: #f03529;
  --gds-ref-color-red-400: #d81a1a;
  --gds-ref-color-red-500: #c82a29;
  --gds-ref-color-red-600: #bb000c;
  --gds-ref-color-red-700: #9f000a;
  --gds-ref-color-red-800: #9e2120;
  --gds-ref-color-purple-100: #ad91dc;
  --gds-ref-color-purple-200: #7e52cc;
  --gds-ref-color-purple-300: #673ab6;
  --gds-ref-color-purple-400: #4f2C99;
  --gds-ref-color-purple-500: #4a328f;
  --gds-ref-color-purple-600: #3f2587;
  --gds-ref-color-yellow-100: #ffe182;
  --gds-ref-color-yellow-200: #ffc500;
  --gds-ref-color-yellow-300: #ffb400;
  --gds-ref-color-yellow-400: #f8a000;
  --gds-ref-color-yellow-500: #f0be47;
  --gds-ref-color-yellow-600: #ebab39;
  --gds-ref-color-blue-5: #001127;
  --gds-ref-color-blue-10: #001C39;
  --gds-ref-color-blue-15: #00264B;
  --gds-ref-color-blue-20: #00315D;
  --gds-ref-color-blue-25: #003C70;
  --gds-ref-color-blue-30: #004883;
  --gds-ref-color-blue-35: #005397;
  --gds-ref-color-blue-40: #005FAC;
  --gds-ref-color-blue-45: #006CC1;
  --gds-ref-color-blue-50: #0078D7;
  --gds-ref-color-blue-55: #0085EC;
  --gds-ref-color-blue-60: #1992FF;
  --gds-ref-color-blue-65: #4EA0FF;
  --gds-ref-color-blue-70: #6FAEFF;
  --gds-ref-color-blue-75: #8ABBFF;
  --gds-ref-color-blue-80: #A4C9FF;
  --gds-ref-color-blue-85: #BCD6FF;
  --gds-ref-color-blue-90: #D4E3FF;
  --gds-ref-color-blue-95: #EBF1FF;
  --gds-ref-color-blue-98: #F8F9FF;
  --gds-ref-color-green-5: #001505;
  --gds-ref-color-green-10: #00210E;
  --gds-ref-color-green-15: #002D10;
  --gds-ref-color-green-20: #003916;
  --gds-ref-color-green-25: #00461D;
  --gds-ref-color-green-30: #005323;
  --gds-ref-color-green-35: #00602A;
  --gds-ref-color-green-40: #006D31;
  --gds-ref-color-green-45: #007B38;
  --gds-ref-color-green-50: #138942;
  --gds-ref-color-green-55: #29964D;
  --gds-ref-color-green-60: #39A459;
  --gds-ref-color-green-65: #48B265;
  --gds-ref-color-green-70: #57C071;
  --gds-ref-color-green-75: #65CE7E;
  --gds-ref-color-green-80: #73DC8A;
  --gds-ref-color-green-85: #81EA97;
  --gds-ref-color-green-90: #8FF9A4;
  --gds-ref-color-green-95: #C5FFCA;
  --gds-ref-color-green-98: #EAFFE8;
  --gds-ref-color-black: #000000;
  --gds-ref-color-white: #FFFFFF;
  --gds-ref-color-grey-5: #0D0D0C;
  --gds-ref-color-grey-10: #1B1B18;
  --gds-ref-color-grey-15: #282825;
  --gds-ref-color-grey-20: #353531;
  --gds-ref-color-grey-25: #42423D;
  --gds-ref-color-grey-30: #505049;
  --gds-ref-color-grey-35: #5D5D56;
  --gds-ref-color-grey-40: #6A6A62;
  --gds-ref-color-grey-45: #77776E;
  --gds-ref-color-grey-50: #85857A;
  --gds-ref-color-grey-55: #919188;
  --gds-ref-color-grey-60: #9D9D95;
  --gds-ref-color-grey-65: #A9A9A2;
  --gds-ref-color-grey-70: #B6B6AF;
  --gds-ref-color-grey-75: #C2C2BD;
  --gds-ref-color-grey-80: #CECECA;
  --gds-ref-color-grey-85: #DADAD7;
  --gds-ref-color-grey-90: #E7E7E4;
  --gds-ref-color-grey-95: #F3F3F2;
  --gds-ref-color-grey-98: #F9F9F9;
  --gds-ref-color-orange-5: #1A0F00;
  --gds-ref-color-orange-10: #271900;
  --gds-ref-color-orange-15: #352200;
  --gds-ref-color-orange-20: #422C00;
  --gds-ref-color-orange-25: #503700;
  --gds-ref-color-orange-30: #503700;
  --gds-ref-color-orange-35: #6E4C00;
  --gds-ref-color-orange-40: #7D5700;
  --gds-ref-color-orange-45: #8D6300;
  --gds-ref-color-orange-50: #9D6E00;
  --gds-ref-color-orange-55: #AE7A00;
  --gds-ref-color-orange-60: #BE8600;
  --gds-ref-color-orange-65: #CF9300;
  --gds-ref-color-orange-70: #E19F00;
  --gds-ref-color-orange-75: #F2AC00;
  --gds-ref-color-orange-80: #FFBA30;
  --gds-ref-color-orange-85: #FFCC77;
  --gds-ref-color-orange-90: #FFDEAB;
  --gds-ref-color-orange-95: #FFEED9;
  --gds-ref-color-orange-98: #FFF8F3;
  --gds-ref-color-red-5: #2B0200;
  --gds-ref-color-red-10: #3E0400;
  --gds-ref-color-red-15: #510700;
  --gds-ref-color-red-20: #650B00;
  --gds-ref-color-red-25: #790F00;
  --gds-ref-color-red-30: #8E1400;
  --gds-ref-color-red-35: #A31800;
  --gds-ref-color-red-40: #BA1D00;
  --gds-ref-color-red-45: #D02200;
  --gds-ref-color-red-50: #E23010;
  --gds-ref-color-red-55: #F53E1D;
  --gds-ref-color-red-60: #FF5636;
  --gds-ref-color-red-65: #FF7257;
  --gds-ref-color-red-70: #FF8A73;
  --gds-ref-color-red-75: #FFA08D;
  --gds-ref-color-red-80: #FFB4A5;
  --gds-ref-color-red-85: #FFC8BC;
  --gds-ref-color-red-90: #FFDAD3;
  --gds-ref-color-red-95: #FFEDE9;
  --gds-ref-color-red-98: #FFF8F6;
}
`,El=`/**
 * Do not edit directly
 * Generated on Fri, 29 Nov 2024 23:54:56 GMT
 */

:host {
--gds-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
--gds-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
--gds-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
--gds-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03);
--gds-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03);
}
`,Tl=`/**
 * Do not edit directly
 * Generated on Fri, 29 Nov 2024 23:54:56 GMT
 */

:host {
  --gds-space-max: 999px;
  --gds-space-8xl: 120px;
  --gds-space-7xl: 112px;
  --gds-space-6xl: 96px;
  --gds-space-5xl: 80px;
  --gds-space-4xl: 64px;
  --gds-space-3xl: 48px;
  --gds-space-2xl: 40px;
  --gds-space-xl: 32px;
  --gds-space-l: 24px;
  --gds-space-m: 16px;
  --gds-space-s: 12px;
  --gds-space-xs: 8px;
  --gds-space-2xs: 4px;
  --gds-space-3xs: 2px;
  --gds-space-4xs: 1px;
  --gds-space-0: 0px;
}
`,Ml=`/**
 * Do not edit directly
 * Generated on Fri, 29 Nov 2024 23:54:56 GMT
 */

:host {
  --gds-text-weight-bold: 700;
  --gds-text-weight-medium: 500;
  --gds-text-weight-book: 450;
  --gds-text-weight-regular: 400;
  --gds-text-weight-light: 300;
  --gds-text-size-preamble-xs: 16px;
  --gds-text-size-preamble-s: 18px;
  --gds-text-size-preamble-m: 20px;
  --gds-text-size-preamble-l: 24px;
  --gds-text-size-preamble-xl: 28px;
  --gds-text-size-preamble-2xl: 32px;
  --gds-text-size-display-s: 32px;
  --gds-text-size-display-m: 36px;
  --gds-text-size-display-l: 48px;
  --gds-text-size-display-xl: 64px;
  --gds-text-size-display-2xl: 82px;
  --gds-text-size-body-s: 14px;
  --gds-text-size-body-m: 16px;
  --gds-text-size-body-l: 20px;
  --gds-text-size-detail-xs: 12px;
  --gds-text-size-detail-s: 14px;
  --gds-text-size-detail-m: 16px;
  --gds-text-size-heading-2xl: 14px;
  --gds-text-size-heading-xs: 16px;
  --gds-text-size-heading-s: 20px;
  --gds-text-size-heading-m: 24px;
  --gds-text-size-heading-l: 28px;
  --gds-text-size-heading-xl: 32px;
  --gds-text-line-height-preamble-xs: 24px;
  --gds-text-line-height-preamble-s: 26px;
  --gds-text-line-height-preamble-m: 28px;
  --gds-text-line-height-preamble-l: 32px;
  --gds-text-line-height-preamble-xl: 36px;
  --gds-text-line-height-preamble-2xl: 40px;
  --gds-text-line-height-display-s: 40px;
  --gds-text-line-height-display-m: 44px;
  --gds-text-line-height-display-l: 56px;
  --gds-text-line-height-display-xl: 72px;
  --gds-text-line-height-display-2xl: 90px;
  --gds-text-line-height-body-s: 20px;
  --gds-text-line-height-body-m: 24px;
  --gds-text-line-height-body-l: 26px;
  --gds-text-line-height-detail-xs: 16px;
  --gds-text-line-height-detail-s: 18px;
  --gds-text-line-height-detail-m: 20px;
  --gds-text-line-height-heading-2xs: 20px;
  --gds-text-line-height-heading-xs: 24px;
  --gds-text-line-height-heading-s: 28px;
  --gds-text-line-height-heading-m: 32px;
  --gds-text-line-height-heading-l: 40px;
  --gds-text-line-height-heading-xl: 44px;
}
`,Al=`/**
 * Do not edit directly
 * Generated on Fri, 29 Nov 2024 23:54:56 GMT
 */

:host {
  color-scheme: light;
  --gds-sys-color-blue: #41b0ee;
  --gds-sys-color-dark-blue-1: #0092e1;
  --gds-sys-color-dark-blue-2: #007ac7;
  --gds-sys-color-green: #60cd18;
  --gds-sys-color-dark-green-1: #45b400;
  --gds-sys-color-dark-green-2: #308800;
  --gds-sys-color-yellow: #ffc500;
  --gds-sys-color-dark-yellow-1: #ffb400;
  --gds-sys-color-dark-yellow-2: #f8a000;
  --gds-sys-color-text-primary: #333333;
  --gds-sys-color-text-secondary: #ababab;
  --gds-sys-color-text-white: #ffffff;
  --gds-sys-color-text-black: #333333;
  --gds-sys-color-text-inverted: #ffffff;
  --gds-sys-color-text-link: #0062bc;
  --gds-sys-color-text-error: #9f000a;
  --gds-sys-color-text-disabled: #adadad;
  --gds-sys-color-red: #f03529;
  --gds-sys-color-dark-red-1: #d81a1a;
  --gds-sys-color-dark-red-2: #bb000c;
  --gds-sys-color-purple: #673ab6;
  --gds-sys-color-dark-purple-1: #4f2C99;
  --gds-sys-color-dark-purple-2: #3f2587;
  --gds-sys-color-white: #ffffff;
  --gds-sys-color-black: #000000;
  --gds-sys-color-background-primary: #ffffff;
  --gds-sys-color-background-secondary: #eeeeee;
  --gds-sys-color-base100: #f8f8f8;
  --gds-sys-color-base200: #e9e9e9;
  --gds-sys-color-base300: #dedede;
  --gds-sys-color-base400: #cecece;
  --gds-sys-color-base500: #adadad;
  --gds-sys-color-base600: #868686;
  --gds-sys-color-base700: #494949;
  --gds-sys-color-base800: #333333;
  --gds-sys-color-base900: #1a1a1a;
  --gds-sys-color-hover-10: #ffffff 10%;
  --gds-sys-color-hover-20: #ffffff 20%;
  --gds-sys-color-accent-accent-green: #006D31;
  --gds-sys-color-accent-on-accent-green: #FFFFFF;
  --gds-sys-color-accent-accent-orange: #FFBA30;
  --gds-sys-color-accent-on-accent-orange: #353531;
  --gds-sys-color-background-background: #FFFFFF;
  --gds-sys-color-background-background-dim: #F3F3F2;
  --gds-sys-color-container-container: #F3F3F2;
  --gds-sys-color-container-container-dim1: #E7E7E4;
  --gds-sys-color-container-container-dim2: #DADAD7;
  --gds-sys-color-container-container-bright: #FFFFFF;
  --gds-sys-color-container-container-shade1: #353531;
  --gds-sys-color-container-container-shade2: #1B1B18;
  --gds-sys-color-container-container-shade3: #353531;
  --gds-sys-color-container-container-disabled: #F9F9F9;
  --gds-sys-color-container-container-positive: #006D31;
  --gds-sys-color-container-container-negative: #BA1D00;
  --gds-sys-color-container-container-negative-bright: #FFEDE9;
  --gds-sys-color-content-content: #353531;
  --gds-sys-color-content-content-inverse: #FFFFFF;
  --gds-sys-color-content-content-secondary: #6A6A62;
  --gds-sys-color-content-content-positive: #006D31;
  --gds-sys-color-content-content-positive-bright: #EAFFE8;
  --gds-sys-color-content-content-negative: #BA1D00;
  --gds-sys-color-content-content-negative-bright: #FFF8F6;
  --gds-sys-color-content-content-custom-blue-bright: #F8F9FF;
  --gds-sys-color-content-content-disabled: #9D9D95;
  --gds-sys-color-custom-custom-blue: #005FAC;
  --gds-sys-color-custom-on-custom-blue: #D4E3FF;
  --gds-sys-color-custom-custom-blue-bright: #D4E3FF;
  --gds-sys-color-custom-on-custom-blue-bright: #00315D;
  --gds-sys-color-custom-custom-green: #003916;
  --gds-sys-color-custom-on-custom-green: #EAFFE8;
  --gds-sys-color-custom-custom-green-bright: #EAFFE8;
  --gds-sys-color-custom-on-custom-green-bright: #003916;
  --gds-sys-color-custom-custom-grey: #353531;
  --gds-sys-color-custom-on-custom-grey: #E7E7E4;
  --gds-sys-color-custom-custom-grey-bright: #E7E7E4;
  --gds-sys-color-custom-on-custom-grey-bright: #353531;
  --gds-sys-color-primary-primary: #353531;
  --gds-sys-color-state-layers-state-black: #000000 10%;
  --gds-sys-color-state-layers-state-black-dim1: #000000 20%;
  --gds-sys-color-state-layers-state-black-dim2: #000000 40%;
  --gds-sys-color-state-layers-state-black-shade: #000000 60%;
  --gds-sys-color-state-layers-state-positive: #006d31 10%;
  --gds-sys-color-state-layers-state-positive-dim: #006d31 20%;
  --gds-sys-color-state-layers-state-negative: #ba1d00 10%;
  --gds-sys-color-state-layers-state-negative-dim: #ba1d00 20%;
  --gds-sys-color-state-layers-state-custom-blue: #005fac 20%;
  --gds-sys-color-status-information-information: #353531;
  --gds-sys-color-status-information-on-information: #FFFFFF;
  --gds-sys-color-status-information-information-bright: #F3F3F2;
  --gds-sys-color-status-information-on-information-bright: #353531;
  --gds-sys-color-status-negative-negative: #BA1D00;
  --gds-sys-color-status-negative-on-negative: #FFFFFF;
  --gds-sys-color-status-negative-negative-bright: #FFEDE9;
  --gds-sys-color-status-negative-on-negative-bright: #BA1D00;
  --gds-sys-color-status-warning-warning: #9D6E00;
  --gds-sys-color-status-warning-on-warning: #FFFFFF;
  --gds-sys-color-status-warning-warning-bright: #FFEED9;
  --gds-sys-color-status-warning-on-warning-bright: #7D5700;
  --gds-sys-color-status-positive-positive: #006D31;
  --gds-sys-color-status-positive-on-positive: #FFFFFF;
  --gds-sys-color-status-positive-positive-bright: #EAFFE8;
  --gds-sys-color-status-positive-on-positive-bright: #006D31;
  --gds-sys-color-status-notice-notice: #005FAC;
  --gds-sys-color-status-notice-on-notice: #FFFFFF;
  --gds-sys-color-status-notice-notice-bright: #EBF1FF;
  --gds-sys-color-status-notice-on-notice-bright: #005FAC;
  --gds-sys-color-stroke-stroke: #353531;
  --gds-sys-color-stroke-stroke-variant1: #85857A;
  --gds-sys-color-stroke-stroke-variant2: #CECECA;
  --gds-sys-color-stroke-stroke-disabled: #9D9D95;
  --gds-sys-color-stroke-stroke-notice: #005FAC;
  --gds-sys-color-stroke-stroke-positive: #006D31;
  --gds-sys-color-stroke-stroke-warning: #7D5700;
  --gds-sys-color-stroke-stroke-negative: #BA1D00;
  --gds-sys-color-stroke-stroke-custom-blue: #005FAC;
  --gds-sys-color-stroke-stroke-custom-blue-bright: #6FAEFF;
  --gds-sys-color-stroke-stroke-inversed: #FFFFFF;
  --gds-color-level-l1-background-primary: #ffffff;
  --gds-color-level-l1-background-tertiary: #1b1b1b;
  --gds-color-level-l1-background-secondary: #eeeeee;
  --gds-color-level-l1-content-positive: #35723d;
  --gds-color-level-l1-content-negative: #a63e2a;
  --gds-color-level-l1-content-primary: #1b1b1b;
  --gds-color-level-l1-content-secondary: #5e5e5e;
  --gds-color-level-l1-content-tertiary: #ffffff;
  --gds-color-level-l2-background-primary: #f3f3f3;
  --gds-color-level-l2-background-secondary: #ffffff;
  --gds-color-level-l2-background-tertiary: #242424;
  --gds-color-level-l2-background-positive: #ecf6ed;
  --gds-color-level-l2-background-negative: #fcecea;
  --gds-color-level-l2-background-notice: #eaf0f7;
  --gds-color-level-l2-background-warning: #fcecbc;
  --gds-color-level-l2-background-information: #e2e2e2;
  --gds-color-level-l2-background-copper-01: #f2efeb;
  --gds-color-level-l2-background-copper-02: #332a18;
  --gds-color-level-l2-background-purple-01: #f3eff7;
  --gds-color-level-l2-background-purple-02: #372b40;
  --gds-color-level-l2-background-green-01: #ecf6ed;
  --gds-color-level-l2-background-green-02: #1d3f22;
  --gds-color-level-l2-background-blue-01: #eaf0f7;
  --gds-color-level-l2-background-blue-02: #152c41;
  --gds-color-level-l2-content-primary: #1b1b1b;
  --gds-color-level-l2-content-secondary: #5e5e5e;
  --gds-color-level-l2-content-tertiary: #ffffff;
  --gds-color-level-l2-content-positive: #35723d;
  --gds-color-level-l2-content-negative: #a63e2a;
  --gds-color-level-l2-content-warning: #65581e;
  --gds-color-level-l2-content-notice: #005fac;
  --gds-color-level-l2-content-infomation: #1b1b1b;
  --gds-color-level-l2-content-copper-01: #1b1b1b;
  --gds-color-level-l2-content-copper-02: #ffffff;
  --gds-color-level-l2-content-purple-01: #1b1b1b;
  --gds-color-level-l2-content-purple-02: #ffffff;
  --gds-color-level-l2-content-green-01: #1b1b1b;
  --gds-color-level-l2-content-green-02: #ffffff;
  --gds-color-level-l2-content-blue-01: #1b1b1b;
  --gds-color-level-l2-content-blue-02: #ffffff;
  --gds-color-level-l2-border-primary: #d7d7d7;
  --gds-color-level-l2-border-secondary: #6f6f6f;
  --gds-color-level-l2-border-tertiary: #f9f9f9;
  --gds-color-level-l2-border-quarternary: #1b1b1b;
  --gds-color-level-l2-border-inversed: #ffffff;
  --gds-color-level-l3-background-primary: #1b1b1b;
  --gds-color-level-l3-background-secondary: #e2e2e2;
  --gds-color-level-l3-background-tertiary: #d7d7d7;
  --gds-color-level-l3-background-quarternary: #ffffff;
  --gds-color-level-l3-background-positive: #35723d;
  --gds-color-level-l3-background-positive-secondary: #d7edd9;
  --gds-color-level-l3-background-positive-badge: #d7edd9;
  --gds-color-level-l3-background-negative: #a63e2a;
  --gds-color-level-l3-background-negative-secondary: #fcecea;
  --gds-color-level-l3-background-negative-badge: #f8d6d3;
  --gds-color-level-l3-background-notice: #005fac;
  --gds-color-level-l3-background-notice-secondary: #d3dfef;
  --gds-color-level-l3-background-notice-badge: #d3dfef;
  --gds-color-level-l3-background-warning: #65581e;
  --gds-color-level-l3-background-warning-secondary: #fadf7b;
  --gds-color-level-l3-background-warning-badge: #fadf7b;
  --gds-color-level-l3-background-information: #1b1b1b;
  --gds-color-level-l3-background-information-secondary: #d7d7d7;
  --gds-color-level-l3-background-information-badge: #d7d7d7;
  --gds-color-level-l3-background-buy: #2e6290;
  --gds-color-level-l3-background-copper-01: #e4ded5;
  --gds-color-level-l3-background-copper-02: #42361f;
  --gds-color-level-l3-background-purple-01: #e7deee;
  --gds-color-level-l3-background-purple-02: #473752;
  --gds-color-level-l3-background-green-01: #d7edd9;
  --gds-color-level-l3-background-green-02: #25512b;
  --gds-color-level-l3-background-blue-01: #d3dfef;
  --gds-color-level-l3-background-blue-02: #1a3853;
  --gds-color-level-l3-background-disabled: #f9f9f9;
  --gds-color-level-l3-background-disabled-secondary: #f3f3f3;
  --gds-color-level-l3-content-primary: #ffffff;
  --gds-color-level-l3-content-secondary: #5e5e5e;
  --gds-color-level-l3-content-tertiary: #1b1b1b;
  --gds-color-level-l3-content-notice: #005fac;
  --gds-color-level-l3-content-warning: #65581e;
  --gds-color-level-l3-content-information: #1b1b1b;
  --gds-color-level-l3-content-buy: #ffffff;
  --gds-color-level-l3-content-copper-01: #1b1b1b;
  --gds-color-level-l3-content-copper-02: #ffffff;
  --gds-color-level-l3-content-purple-01: #1b1b1b;
  --gds-color-level-l3-content-purple-02: #ffffff;
  --gds-color-level-l3-content-green-01: #1b1b1b;
  --gds-color-level-l3-content-green-02: #ffffff;
  --gds-color-level-l3-content-blue-01: #1b1b1b;
  --gds-color-level-l3-content-blue-02: #ffffff;
  --gds-color-level-l3-content-disabled: #ababab;
  --gds-color-level-l3-content-positive: #35723d;
  --gds-color-level-l3-content-negative: #a63e2a;
  --gds-color-level-l3-border-primary: #1b1b1b;
  --gds-color-level-l3-border-secondary: #6f6f6f;
  --gds-color-level-l3-border-tertiary: #d7d7d7;
  --gds-color-level-l3-border-negative: #a63e2a;
  --gds-color-level-l3-states-dark-hover: #ffffff NaN%;
  --gds-color-level-l3-states-dark-pressed: #ffffff NaN%;
  --gds-color-level-l3-states-light-hover: #1b1b1b NaN%;
  --gds-color-level-l3-states-light-pressed: #1b1b1b NaN%;
  --gds-color-level-l3-states-positive-hover: #35723d NaN%;
  --gds-color-level-l3-states-positive-pressed: #35723d NaN%;
  --gds-color-level-l3-states-negative-hover: #a63e2a NaN%;
  --gds-color-level-l3-states-negative-pressed: #a63e2a NaN%;
}
`,Dl=`/**
 * Do not edit directly
 * Generated on Fri, 29 Nov 2024 23:54:56 GMT
 */

:host {
  --gds-vp-3xl: 3840px;
  --gds-vp-2xl: 2560px;
  --gds-vp-xl: 1440px;
  --gds-vp-l: 1024px;
  --gds-vp-m: 768px;
  --gds-vp-s: 430px;
  --gds-vp-xs: 375px;
}
`,H=[j(Sl),j(Al),j(Tl),j(Dl),j(Ml),j($l),j(El)];Ln.instance.injectGlobalStyles("root-tokens",W`
    :root,
    :root[gds-theme='light'] {
      ${j(On)}
    }
    :root[gds-theme='dark'] {
      ${j(Vs)}
    }
  `);var hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/*! *****************************************************************************
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
***************************************************************************** */var un;(function(e){(function(t){var o=typeof hn=="object"?hn:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),s=i(e);typeof o.Reflect>"u"?o.Reflect=e:s=i(o.Reflect,s),t(s);function i(n,a){return function(d,u){typeof n[d]!="function"&&Object.defineProperty(n,d,{configurable:!0,writable:!0,value:u}),a&&a(d,u)}}})(function(t){var o=Object.prototype.hasOwnProperty,s=typeof Symbol=="function",i=s&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",n=s&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",a=typeof Object.create=="function",d={__proto__:[]}instanceof Array,u=!a&&!d,p={create:a?function(){return Ss(Object.create(null))}:d?function(){return Ss({__proto__:null})}:function(){return Ss({})},has:u?function(g,v){return o.call(g,v)}:function(g,v){return v in g},get:u?function(g,v){return o.call(g,v)?g[v]:void 0}:function(g,v){return g[v]}},m=Object.getPrototypeOf(Function),f=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",w=!f&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:hl(),k=!f&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:ul(),T=!f&&typeof WeakMap=="function"?WeakMap:gl(),A=new T;function I(g,v,y,_){if(J(y)){if(!an(g))throw new TypeError;if(!ln(v))throw new TypeError;return dt(g,v)}else{if(!an(g))throw new TypeError;if(!le(v))throw new TypeError;if(!le(_)&&!J(_)&&!_t(_))throw new TypeError;return _t(_)&&(_=void 0),y=Ve(y),Co(g,v,y,_)}}t("decorate",I);function L(g,v){function y(_,S){if(!le(_))throw new TypeError;if(!J(S)&&!nl(S))throw new TypeError;Be(g,v,_,S)}return y}t("metadata",L);function G(g,v,y,_){if(!le(y))throw new TypeError;return J(_)||(_=Ve(_)),Be(g,v,y,_)}t("defineMetadata",G);function K(g,v,y){if(!le(v))throw new TypeError;return J(y)||(y=Ve(y)),Ht(g,v,y)}t("hasMetadata",K);function ae(g,v,y){if(!le(v))throw new TypeError;return J(y)||(y=Ve(y)),ke(g,v,y)}t("hasOwnMetadata",ae);function Z(g,v,y){if(!le(v))throw new TypeError;return J(y)||(y=Ve(y)),Gt(g,v,y)}t("getMetadata",Z);function Qe(g,v,y){if(!le(v))throw new TypeError;return J(y)||(y=Ve(y)),Xe(g,v,y)}t("getOwnMetadata",Qe);function Cs(g,v){if(!le(g))throw new TypeError;return J(v)||(v=Ve(v)),_e(g,v)}t("getMetadataKeys",Cs);function Pt(g,v){if(!le(g))throw new TypeError;return J(v)||(v=Ve(v)),Ce(g,v)}t("getOwnMetadataKeys",Pt);function kt(g,v,y){if(!le(v))throw new TypeError;J(y)||(y=Ve(y));var _=Je(v,y,!1);if(J(_)||!_.delete(g))return!1;if(_.size>0)return!0;var S=A.get(v);return S.delete(y),S.size>0||A.delete(v),!0}t("deleteMetadata",kt);function dt(g,v){for(var y=g.length-1;y>=0;--y){var _=g[y],S=_(v);if(!J(S)&&!_t(S)){if(!ln(S))throw new TypeError;v=S}}return v}function Co(g,v,y,_){for(var S=g.length-1;S>=0;--S){var ve=g[S],F=ve(v,y,_);if(!J(F)&&!_t(F)){if(!le(F))throw new TypeError;_=F}}return _}function Je(g,v,y){var _=A.get(g);if(J(_)){if(!y)return;_=new w,A.set(g,_)}var S=_.get(v);if(J(S)){if(!y)return;S=new w,_.set(v,S)}return S}function Ht(g,v,y){var _=ke(g,v,y);if(_)return!0;var S=$s(v);return _t(S)?!1:Ht(g,S,y)}function ke(g,v,y){var _=Je(v,y,!1);return J(_)?!1:rl(_.has(g))}function Gt(g,v,y){var _=ke(g,v,y);if(_)return Xe(g,v,y);var S=$s(v);if(!_t(S))return Gt(g,S,y)}function Xe(g,v,y){var _=Je(v,y,!1);if(!J(_))return _.get(g)}function Be(g,v,y,_){var S=Je(y,_,!0);S.set(g,v)}function _e(g,v){var y=Ce(g,v),_=$s(g);if(_===null)return y;var S=_e(_,v);if(S.length<=0)return y;if(y.length<=0)return S;for(var ve=new k,F=[],z=0,E=y;z<E.length;z++){var O=E[z],B=ve.has(O);B||(ve.add(O),F.push(O))}for(var Ke=0,cn=S;Ke<cn.length;Ke++){var O=cn[Ke],B=ve.has(O);B||(ve.add(O),F.push(O))}return F}function Ce(g,v){var y=[],_=Je(g,v,!1);if(J(_))return y;for(var S=_.keys(),ve=al(S),F=0;;){var z=dl(ve);if(!z)return y.length=F,y;var E=ll(z);try{y[F]=E}catch(O){try{cl(ve)}finally{throw O}}F++}}function $o(g){if(g===null)return 1;switch(typeof g){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return g===null?1:6;default:return 6}}function J(g){return g===void 0}function _t(g){return g===null}function tl(g){return typeof g=="symbol"}function le(g){return typeof g=="object"?g!==null:typeof g=="function"}function ol(g,v){switch($o(g)){case 0:return g;case 1:return g;case 2:return g;case 3:return g;case 4:return g;case 5:return g}var y="string",_=dn(g,i);if(_!==void 0){var S=_.call(g,y);if(le(S))throw new TypeError;return S}return sl(g)}function sl(g,v){var y,_;{var S=g.toString;if(So(S)){var _=S.call(g);if(!le(_))return _}var y=g.valueOf;if(So(y)){var _=y.call(g);if(!le(_))return _}}throw new TypeError}function rl(g){return!!g}function il(g){return""+g}function Ve(g){var v=ol(g);return tl(v)?v:il(v)}function an(g){return Array.isArray?Array.isArray(g):g instanceof Object?g instanceof Array:Object.prototype.toString.call(g)==="[object Array]"}function So(g){return typeof g=="function"}function ln(g){return typeof g=="function"}function nl(g){switch($o(g)){case 3:return!0;case 4:return!0;default:return!1}}function dn(g,v){var y=g[v];if(y!=null){if(!So(y))throw new TypeError;return y}}function al(g){var v=dn(g,n);if(!So(v))throw new TypeError;var y=v.call(g);if(!le(y))throw new TypeError;return y}function ll(g){return g.value}function dl(g){var v=g.next();return v.done?!1:v}function cl(g){var v=g.return;v&&v.call(g)}function $s(g){var v=Object.getPrototypeOf(g);if(typeof g!="function"||g===m||v!==m)return v;var y=g.prototype,_=y&&Object.getPrototypeOf(y);if(_==null||_===Object.prototype)return v;var S=_.constructor;return typeof S!="function"||S===g?v:S}function hl(){var g={},v=[],y=function(){function F(z,E,O){this._index=0,this._keys=z,this._values=E,this._selector=O}return F.prototype["@@iterator"]=function(){return this},F.prototype[n]=function(){return this},F.prototype.next=function(){var z=this._index;if(z>=0&&z<this._keys.length){var E=this._selector(this._keys[z],this._values[z]);return z+1>=this._keys.length?(this._index=-1,this._keys=v,this._values=v):this._index++,{value:E,done:!1}}return{value:void 0,done:!0}},F.prototype.throw=function(z){throw this._index>=0&&(this._index=-1,this._keys=v,this._values=v),z},F.prototype.return=function(z){return this._index>=0&&(this._index=-1,this._keys=v,this._values=v),{value:z,done:!0}},F}();return function(){function F(){this._keys=[],this._values=[],this._cacheKey=g,this._cacheIndex=-2}return Object.defineProperty(F.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),F.prototype.has=function(z){return this._find(z,!1)>=0},F.prototype.get=function(z){var E=this._find(z,!1);return E>=0?this._values[E]:void 0},F.prototype.set=function(z,E){var O=this._find(z,!0);return this._values[O]=E,this},F.prototype.delete=function(z){var E=this._find(z,!1);if(E>=0){for(var O=this._keys.length,B=E+1;B<O;B++)this._keys[B-1]=this._keys[B],this._values[B-1]=this._values[B];return this._keys.length--,this._values.length--,z===this._cacheKey&&(this._cacheKey=g,this._cacheIndex=-2),!0}return!1},F.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=g,this._cacheIndex=-2},F.prototype.keys=function(){return new y(this._keys,this._values,_)},F.prototype.values=function(){return new y(this._keys,this._values,S)},F.prototype.entries=function(){return new y(this._keys,this._values,ve)},F.prototype["@@iterator"]=function(){return this.entries()},F.prototype[n]=function(){return this.entries()},F.prototype._find=function(z,E){return this._cacheKey!==z&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=z)),this._cacheIndex<0&&E&&(this._cacheIndex=this._keys.length,this._keys.push(z),this._values.push(void 0)),this._cacheIndex},F}();function _(F,z){return F}function S(F,z){return z}function ve(F,z){return[F,z]}}function ul(){return function(){function g(){this._map=new w}return Object.defineProperty(g.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),g.prototype.has=function(v){return this._map.has(v)},g.prototype.add=function(v){return this._map.set(v,v),this},g.prototype.delete=function(v){return this._map.delete(v)},g.prototype.clear=function(){this._map.clear()},g.prototype.keys=function(){return this._map.keys()},g.prototype.values=function(){return this._map.values()},g.prototype.entries=function(){return this._map.entries()},g.prototype["@@iterator"]=function(){return this.keys()},g.prototype[n]=function(){return this.keys()},g}()}function gl(){var g=16,v=p.create(),y=_();return function(){function E(){this._key=_()}return E.prototype.has=function(O){var B=S(O,!1);return B!==void 0?p.has(B,this._key):!1},E.prototype.get=function(O){var B=S(O,!1);return B!==void 0?p.get(B,this._key):void 0},E.prototype.set=function(O,B){var Ke=S(O,!0);return Ke[this._key]=B,this},E.prototype.delete=function(O){var B=S(O,!1);return B!==void 0?delete B[this._key]:!1},E.prototype.clear=function(){this._key=_()},E}();function _(){var E;do E="@@WeakMap@@"+z();while(p.has(v,E));return v[E]=!0,E}function S(E,O){if(!o.call(E,y)){if(!O)return;Object.defineProperty(E,y,{value:p.create()})}return E[y]}function ve(E,O){for(var B=0;B<O;++B)E[B]=Math.random()*255|0;return E}function F(E){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(E)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(E)):ve(new Uint8Array(E),E):ve(new Array(E),E)}function z(){var E=F(g);E[6]=E[6]&79|64,E[8]=E[8]&191|128;for(var O="",B=0;B<g;++B){var Ke=E[B];(B===4||B===6||B===8)&&(O+="-"),Ke<16&&(O+="0"),O+=Ke.toString(16).toLowerCase()}return O}}function Ss(g){return g.__=void 0,delete g.__,g}})})(un||(un={}));var V=class extends gs{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new _l(this)}connectedCallback(){var e;super.connectedCallback(),this.setAttribute("gds-element",((e=this.gdsElementName)==null?void 0:e.toString())||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}};r([ie()],V.prototype,"_isUsingTransitionalStyles",2);var Fl=W`
  :host {
    display: inline-block;
  }

  slot[name='lead']::slotted(*) {
    line-height: var(--gds-space-m);
  }

  :host([notification]) slot[name='trail']::slotted(*) {
    line-height: var(--gds-space-s);
  }

  :host([notification]) slot[name='lead']::slotted(*) {
    line-height: var(--gds-space-s);
  }
`,zl=Fl,Rs,Bn,Ns,Vn,xi,Rn,Is,Nn,He=class extends V{constructor(){super(),c(this,Rs),c(this,Ns),c(this,xi),c(this,Is),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){const e=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",t=this.disabled?"disabled":this.notification?"primary":this.variant,o=this.size==="small"||this.notification?"2xs":"xs",s=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return C`<gds-flex
      level="3"
      background=${e}
      color=${t}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${o}"
      border-radius="${this.notification||this.rounded?"max":"2xs"}"
      block-size="${s}"
      width="max-content"
      font-size="${this.size==="small"||this.notification?"detail-xs":"detail-s"}"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${x(this,Rs,Bn).call(this)} ${x(this,Ns,Vn).call(this)}
      ${x(this,Is,Nn).call(this)}
    </gds-flex>`}};Rs=new WeakSet;Bn=function(){if(this.size!=="small"||!this.notification)return C`<slot name="lead"></slot>`};Ns=new WeakSet;Vn=function(){return C`<slot @slotchange=${x(this,xi,Rn)}></slot>`};xi=new WeakSet;Rn=function(e){const o=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=o.length>0&&o.some(s=>{var i;return s.nodeType===Node.ELEMENT_NODE||s.nodeType===Node.TEXT_NODE&&((i=s.textContent)==null?void 0:i.trim())!==""})};Is=new WeakSet;Nn=function(){return C`<slot name="trail"></slot>`};He.styles=[H,zl];r([h()],He.prototype,"variant",2);r([h({type:String})],He.prototype,"size",2);r([h({attribute:"disabled",type:Boolean,reflect:!0})],He.prototype,"disabled",2);r([h({attribute:"notification",type:Boolean,reflect:!0})],He.prototype,"notification",2);r([h({attribute:"rounded",type:Boolean,reflect:!0})],He.prototype,"rounded",2);r([ie()],He.prototype,"mainSlotOccupied",2);He=r([$("gds-badge")],He);var Wl={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},Ll=/^([<|>]=?)?([0-9a-z]+)/,In=["{","}",";",":",","],gn=[" ","/n"];function Ol(e){const t=[];let o="";for(let s=0;s<e.length;s++){const i=e[s];if(gn.includes(i)||(o+=i),In.includes(i)){t.push(o.slice(0,-1)),t.push(i),o="";continue}if(gn.includes(i)||s===e.length-1){t.push(o),o="";continue}}return t.filter(s=>s!=="")}function Bl(e){var t;const o=[];let s={breakpoint:"-",values:[]};const i=()=>({sel:"",values:[]});let n=i();for(const a of e){if(!In.includes(a)){n.values.push(a);continue}if(a==="{"&&(s={breakpoint:n.values.join(","),values:[]},n=i()),a===";"&&(o.length===0&&o.push(s),n.values.length>0&&(s.values.push(n),n=i())),a===":"){const d=(t=n.values.pop())!=null?t:"";n.sel=d}s&&a==="}"&&(s.values.push(n),n=i(),o.push(s))}return n.values.length>0&&s.values.push(n),o.length===0&&o.push(s),o}function Vl(e){return e.split(",").map(o=>{const s=o.trim().match(Ll);if(!s)throw new Error(`Invalid breakpoint specifier: ${o}`);return{condition:s[1],value:s[2]}})}function Rl(e,t,o,s=n=>n,i=(n,a)=>`${n}: ${a.join(" ")};`){let n="";for(const a of o){const p=`@media ${(a.breakpoint==="-"?[{condition:">=",value:"0"}]:Vl(a.breakpoint)).map(m=>{var f,w;return`(${(f=m.condition)!=null&&f.includes("<")?"max-width":"min-width"}: ${(w=Wl[m.value])!=null?w:m.value})`}).join(" and ")} {${a.values.map(m=>{let f=e;m.sel.length>0&&(f=e===":host"?`:host(:${m.sel})`:`${e}:${m.sel}`);const w=i(t,m.values.map(s));return m.sel==="hover"?`@media (hover: hover) {${f}{${w}}}`:`${f}{${w}}`}).join("")}}`;n+=p}return n}var Ts=new Map;function b(e){return(t,o)=>{var s,i,n,a;const d=(s=e?.selector)!=null?s:":host",u=(i=e?.property)!=null?i:String(o),p=(n=e?.valueTemplate)!=null?n:w=>`var(--gds-space-${w}, 0)`,m=e?.styleTemplate,f=(a=e?.cacheOverrideKey)!=null?a:"0";h({attribute:e?.attribute,noAccessor:!0})(t,o),Object.defineProperty(t,o,{get:function(){return this["__"+String(o)]},set:async function(w){var k;this["__"+String(o)]=w,await this.updateComplete;const T=(k=this.level)!=null?k:"0",A=d+u+w+T+f;if(Ts.has(A)){this._dynamicStylesController.inject(`sep_${String(o)}`,Ts.get(A));return}const I=Bl(Ol(w)),L=Rl(d,u,I,p.bind(this),m?.bind(this)),G=j(L);Ts.set(A,G),this._dynamicStylesController.inject(`sep_${String(o)}`,G)}})}}var Nl=W`
  :host {
    box-sizing: border-box;
  }
  :host(:focus-visible) {
    outline-color: color-mix(in srgb, currentcolor, #000 100%);
    outline-offset: var(--gds-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-space-3xs);
  }
`,Il=Nl,M=class extends V{constructor(){super(...arguments),this.display="block",this.level="2"}render(){return C`<slot></slot>`}};M.styles=[H,Il];r([b({valueTemplate:e=>e})],M.prototype,"display",2);r([h()],M.prototype,"level",2);r([b({valueTemplate:e=>e})],M.prototype,"place-items",2);r([b({valueTemplate:e=>e})],M.prototype,"place-content",2);r([b({valueTemplate:function(e){const[t,o]=e.split("/"),s=a=>{const d=a.trim();return d.startsWith("#")||d.startsWith("rgb(")||d.startsWith("rgba(")||d.startsWith("hsl(")||d.startsWith("hsla(")},i=(a,d)=>`var(--gds-color-l${a}-content-${d})`;return((a,d)=>s(a)?d?`color-mix(in srgb, ${a} ${parseFloat(d)*100}%, transparent 0%)`:a:i(this.level,a))(t,o)}})],M.prototype,"color",2);r([b({valueTemplate:function(e){const[t,o]=e.split("/"),s=a=>{const d=a.trim();return d.startsWith("#")||d.startsWith("rgb(")||d.startsWith("rgba(")||d.startsWith("hsl(")||d.startsWith("hsla(")},i=(a,d)=>`var(--gds-color-l${a}-background-${d})`;return((a,d)=>s(a)?d?`color-mix(in srgb, ${a} ${parseFloat(d)*100}%, transparent 0%)`:a:i(this.level,a))(t,o)}})],M.prototype,"background",2);r([b({valueTemplate:function(e){const[t,o]=e.split("/"),s=a=>{const d=a.trim();return d.startsWith("#")||d.startsWith("rgb(")||d.startsWith("rgba(")||d.startsWith("hsl(")||d.startsWith("hsla(")},i=(a,d)=>`var(--gds-color-l${a}-border-${d})`;return`var(--gds-space-${t}) solid ${o?(a=>s(a)?a:i(this.level,a))(o):"currentColor"}`},styleTemplate:(e,t)=>{const o=t[0],s=t.length>1?t[1]:o,i=t.length>2?t[2]:o,n=t.length>3?t[3]:o;return`
        border-top: ${o};
        border-right: ${s};
        border-bottom: ${i};
        border-left: ${n};
      `}})],M.prototype,"border",2);r([b({valueTemplate:function(e){const[t]=e.split("/"),o=n=>{const a=n.trim();return a.startsWith("#")||a.startsWith("rgb(")||a.startsWith("rgba(")||a.startsWith("hsl(")||a.startsWith("hsla(")},s=(n,a)=>`var(--gds-color-l${n}-border-${a})`;return t?(n=>o(n)?n:s(this.level,n))(t):"currentColor"},styleTemplate:(e,t)=>{const o=t[0],s=t.length>1?t[1]:o,i=t.length>2?t[2]:o,n=t.length>3?t[3]:o;return`
        border-top-color: ${o};
        border-right-color: ${s};
        border-bottom-color: ${i};
        border-left-color: ${n};
      `}})],M.prototype,"border-color",2);r([b({styleTemplate:(e,t)=>{const o=t[0],s=t.length>1?t[1]:o,i=t.length>2?t[2]:o,n=t.length>3?t[3]:o;return`
        border-top-width: ${o};
        border-right-width: ${s};
        border-bottom-width: ${i};
        border-left-width: ${n};
        border-style: solid;
      `}})],M.prototype,"border-width",2);r([b({valueTemplate:e=>`var(--gds-space-${e})`})],M.prototype,"border-radius",2);r([b({valueTemplate:e=>e})],M.prototype,"opacity",2);r([b()],M.prototype,"padding",2);r([b()],M.prototype,"padding-inline",2);r([b()],M.prototype,"padding-block",2);r([b({valueTemplate:e=>{const o=(e.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-space-${e})`:`calc(var(--gds-space-${e.substring(1)}) * -1)`;return e==="auto"?"auto":o},styleTemplate:(e,t)=>{const o=d=>d==="auto"?"auto":`${d}`,s=o(t[0]),i=t.length>1?o(t[1]):s,n=t.length>2?o(t[2]):s,a=t.length>3?o(t[3]):i;return`margin: ${s} ${i} ${n} ${a};`}})],M.prototype,"margin",2);r([b({valueTemplate:e=>e})],M.prototype,"position",2);r([b({valueTemplate:e=>e})],M.prototype,"inset",2);r([b({valueTemplate:e=>e})],M.prototype,"overflow",2);r([b({valueTemplate:e=>e})],M.prototype,"height",2);r([b({valueTemplate:e=>e})],M.prototype,"max-height",2);r([b({valueTemplate:e=>e})],M.prototype,"min-height",2);r([b()],M.prototype,"block-size",2);r([b()],M.prototype,"min-block-size",2);r([b({valueTemplate:e=>e})],M.prototype,"width",2);r([b({valueTemplate:e=>e})],M.prototype,"max-width",2);r([b({valueTemplate:e=>e})],M.prototype,"min-width",2);r([b()],M.prototype,"inline-size",2);r([b({valueTemplate:e=>e})],M.prototype,"box-sizing",2);r([b({valueTemplate:e=>e})],M.prototype,"cursor",2);r([b({valueTemplate:e=>e})],M.prototype,"pointer-events",2);r([b({valueTemplate:e=>e})],M.prototype,"user-select",2);r([b({valueTemplate:e=>e})],M.prototype,"z-index",2);r([b({valueTemplate:e=>e})],M.prototype,"transform",2);r([b({valueTemplate:e=>e})],M.prototype,"transform-style",2);r([b({valueTemplate:e=>e})],M.prototype,"transition",2);r([b({valueTemplate:e=>e})],M.prototype,"transition-behavior",2);r([b({valueTemplate:e=>e})],M.prototype,"animation",2);r([b({valueTemplate:e=>`${e}`,styleTemplate:(e,t)=>{const o=t[0],s=`font-size: var(--gds-text-size-${o});`,i=`line-height: var(--gds-text-line-height-${o});`;return s+i}})],M.prototype,"font-size",2);r([b({property:"font-weight",valueTemplate:e=>`var(--gds-text-weight-${e})`})],M.prototype,"font-weight",2);r([b({valueTemplate:e=>`${e}`})],M.prototype,"grid-column",2);r([b({valueTemplate:e=>`${e}`})],M.prototype,"grid-row",2);r([b({valueTemplate:e=>`${e}`})],M.prototype,"flex",2);M=r([$("gds-container")],M);var Pl=W`
  :host {
    box-sizing: border-box;
  }
`,Hl=Pl,pe=class extends M{connectedCallback(){super.connectedCallback(),this.display="flex"}render(){return C`<slot></slot>`}};pe.styles=[H,Hl];r([b({styleTemplate:(e,t)=>{const o=t[0],s=t[1]||o;return`gap: ${o} ${s};`},cacheOverrideKey:"flex"})],pe.prototype,"gap",2);r([b({valueTemplate:e=>e})],pe.prototype,"flex",2);r([b({valueTemplate:e=>e})],pe.prototype,"align-self",2);r([b({valueTemplate:e=>e})],pe.prototype,"align-items",2);r([b({valueTemplate:e=>e})],pe.prototype,"align-content",2);r([b({valueTemplate:e=>e})],pe.prototype,"justify-content",2);r([b({valueTemplate:e=>e})],pe.prototype,"place-content",2);r([b({valueTemplate:e=>e})],pe.prototype,"justify-items",2);r([b({valueTemplate:e=>e})],pe.prototype,"justify-self",2);r([b({property:"flex-direction",valueTemplate:e=>e})],pe.prototype,"flex-direction",2);r([b({property:"flex-wrap",valueTemplate:e=>e})],pe.prototype,"flex-wrap",2);pe=r([$("gds-flex")],pe);function q(e,t){const o=oo({waitUntilFirstUpdate:!1},t);return(s,i,n)=>{const{update:a}=s,d=Array.isArray(e)?e:[e];s.update=function(u){d.forEach(p=>{var m;const f=p;if(u.has(f)){const w=u.get(f),k=this[f];w!==k&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&((m=n.value)==null||m.call(this,w,k))}}),a.call(this,u)}}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pn="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gl=(e,...t)=>({strTag:!0,strings:e,values:t}),jl=Gl,Yl=e=>typeof e!="string"&&"strTag"in e,Ul=(e,t,o)=>{let s=e[0];for(let i=1;i<e.length;i++)s+=t[i-1],s+=e[i];return s};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ql=e=>Yl(e)?Ul(e.strings,e.values):e;let D=ql;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Zl{constructor(t){this.__litLocalizeEventHandler=o=>{o.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(pn,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(pn,this.__litLocalizeEventHandler)}}const Ql=e=>e.addController(new Zl(e)),Pn=Ql;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze=()=>(e,t)=>(e.addInitializer(Pn),e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Jl{constructor(){this.settled=!1,this.promise=new Promise((t,o)=>{this._resolve=t,this._reject=o})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let e=0;e<256;e++)(e>>4&15).toString(16)+(e&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Xl=new Jl;Xl.resolve();var de,ye=class extends V{constructor(){super(),c(this,de,void 0),this.required=!1,this.label="",this.name="";try{R(this,de,this.attachInternals())}catch{R(this,de,{form:this.closest("form"),setFormValue:t=>{this.value=t},setValidity:(t,o)=>{this.invalid=t.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0})}}set invalid(e){const t=this.invalid;l(this,de).setValidity(Fs(oo({},l(this,de).validity),{customError:e,valid:!e}),this.validationMessage||D("Error message."),this._getValidityAnchor()||void 0),this.requestUpdate("invalid",t),l(this,de).checkValidity()}get invalid(){return!l(this,de).validity.valid}get form(){return l(this,de).form}get validity(){return l(this,de).validity}get validationMessage(){return l(this,de).validationMessage}get willValidate(){return l(this,de).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const t=this.invalid,o=this.validator.validate(this)||[Fs(oo({},this.validity),{valid:!0}),""];return l(this,de).setValidity(o[0],o[1],this._getValidityAnchor()),this.requestUpdate("invalid",t),l(this,de).checkValidity()}reportValidity(){return l(this,de).reportValidity()}__handleValueChange(){l(this,de).setFormValue(this.value),this.checkValidity()}formResetCallback(){this.value=void 0}formAssociatedCallback(e){e?.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(e){this.checkValidity(),this.validity.valid||e.preventDefault()}focus(e){this._getValidityAnchor().focus(e)}};de=new WeakMap;ye.formAssociated=!0;r([h({attribute:!1})],ye.prototype,"validator",2);r([h({type:Boolean})],ye.prototype,"required",2);r([h({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:e=>e?.toString()}})],ye.prototype,"invalid",1);r([h()],ye.prototype,"label",2);r([h()],ye.prototype,"value",2);r([h({reflect:!0})],ye.prototype,"name",2);r([q("value")],ye.prototype,"__handleValueChange",1);function wi(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,o,s)=>{let i;const n=t.connectedCallback,a=t.disconnectedCallback;t.connectedCallback=function(){n?.call(this);const d=(u,p)=>{var m;(m=s.value)==null||m.call(this)};i=new MutationObserver(d),i.observe(this,e)},t.disconnectedCallback=function(){a?.call(this),i.disconnect()}}}function Kl(e){return(t,o,s)=>{const i=window.matchMedia(e),n=t.connectedCallback,a=t.disconnectedCallback;t.connectedCallback=function(){var d;n?.call(this);const u=p=>{var m;(m=s.value)==null||m.call(this,p.matches)};i.addEventListener("change",u),this.disconnectedCallback=function(){a?.call(this),i.removeEventListener("change",u)},(d=s.value)==null||d.call(this,i.matches)}}}var To,Mo,Ps,ed=class Hn{constructor(){c(this,To,new Map),c(this,Mo,new Map),c(this,Ps,!yi())}static get instance(){var t;return(t=globalThis.__gdsTransitionalStyles)!=null&&t[Es]||(globalThis.__gdsTransitionalStyles=Fs(oo({},globalThis.__gdsTransitionalStyles),{[Es]:new Hn})),globalThis.__gdsTransitionalStyles[Es]}apply(t,o){if(!t.shadowRoot)return;const s=l(this,To).get(o);s&&(l(this,Mo).set(o,t),this.applyToElement(o,s))}applyToElement(t,o){var s,i;const n=l(this,Mo).get(t);if(!n||!n.shadowRoot)return;const a=()=>{n._dynamicStylesController.clearInitial(),n._dynamicStylesController.inject("t-styles",j(o)),n._isUsingTransitionalStyles=!0},d=()=>{n._isUsingTransitionalStyles=!1,n._dynamicStylesController.clear("t-styles"),n._dynamicStylesController.restoreInitial()},u="[gds-element=gds-theme]";let p=n.getRootNode(),m=n.closest(u);for(;m===null&&p!==document;)m=(s=p.host)==null?void 0:s.closest(u),p=(i=p.host)==null?void 0:i.getRootNode();if(m){const f=m,w=()=>{f.designVersion==="2023"?d():a()};if(f.addEventListener("gds-design-version-changed",w),n.addEventListener("gds-element-disconnected",()=>f.removeEventListener("gds-design-version-changed",w)),f.designVersion==="2023"){d();return}}a()}register(t,o){let s=o;l(this,Ps)&&(s=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${o}`),l(this,To).set(t,s),this.applyToElement(t,s)}};To=new WeakMap;Mo=new WeakMap;Ps=new WeakMap;var re=ed;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Rt=e=>(...t)=>({_$litDirective$:e,values:t});let ko=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=Rt(class extends ko{constructor(e){if(super(e),e.type!==wo.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(t)}const o=e.element.classList;for(const s of this.st)s in t||(o.remove(s),this.st.delete(s));for(const s in t){const i=!!t[s];i===this.st.has(s)||this.nt?.has(s)||(i?(o.add(s),this.st.add(s)):(o.remove(s),this.st.delete(s)))}return so}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=e=>e??ge;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(e,t,o){return e?t(e):o?.(e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ki=Symbol.for(""),td=e=>{if(e?.r===ki)return e?._$litStatic$},od=e=>({_$litStatic$:e,r:ki}),Ko=(e,...t)=>({_$litStatic$:t.reduce((o,s,i)=>o+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+e[i+1],e[0]),r:ki}),fn=new Map,sd=e=>(t,...o)=>{const s=o.length;let i,n;const a=[],d=[];let u,p=0,m=!1;for(;p<s;){for(u=t[p];p<s&&(n=o[p],(i=td(n))!==void 0);)u+=i+t[++p],m=!0;p!==s&&d.push(n),a.push(u),p++}if(p===s&&a.push(t[s]),m){const f=a.join("$$lit$$");(t=fn.get(f))===void 0&&(a.raw=a,fn.set(f,t=a)),o=d}return e(t,...o)},Nt=sd(be);var rd=class extends ko{constructor(e){if(super(e),e.type!==wo.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(e){return ge}update(e,[t]){var o;const s=e.element,i=(o=e.options)==null?void 0:o.host;Array.from(i.attributes).forEach(n=>{t(n)&&s.setAttribute(n.name.replace("gds-",""),n.value)})}},_i=Rt(rd),vn=new WeakMap;function id(e){return(t,...o)=>{let s=vn.get(t);return s||(s=t.map(i=>i.replace(/\n[\s]+</gm,"<")),s.raw=t.raw,vn.set(t,s)),e(s,...o)}}var nd=`@layer tokens, core, a11y, ranks, sizes, variants, disabled;

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
    --_block-size: var(--gds-space-3xl);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    block-size: var(--_block-size);
    background-color: var(--gds-color-l3-background-primary);
    color: var(--gds-color-l3-content-primary);
    border-radius: var(--gds-space-max);
    font-family: inherit;
    font-size: var(--gds-text-size-detail-m);
    line-height: var(--gds-text-line-height-detail-m);
    font-weight: var(--gds-text-weight-book);
    gap: var(--gds-space-s);
    outline-color: transparent;
    outline-offset: var(--gds-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-space-3xs);
    padding-block: var(--gds-space-s);
    padding-inline: var(--gds-space-l);
    position: relative;
    text-decoration: none;
    transition-property: color, border-colorm, background;
    transition-duration: 0.4s;
    max-width: 100%;
    flex: 1;

    &:focus {
      outline-color: color-mix(in srgb, currentcolor, #000 100%);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-primary),
        var(--gds-color-l3-states-dark-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-primary),
        var(--gds-color-l3-states-dark-pressed)
      );
    }

    &:not(.circle) slot:not([name]) {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

/* High specificity */
.button.circle {
  aspect-ratio: 1/1;
  padding: 0;
  min-block-size: var(--_block-size);
}

.button:disabled {
  pointer-events: none;
  background-color: var(--gds-color-l3-background-disabled);
  color: var(--gds-color-l3-content-disabled);
}

@layer ranks {
  :host([rank*='secondary']) .button {
    background-color: var(--gds-color-l3-background-secondary);
    color: var(--gds-color-l3-content-tertiary);

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-secondary),
        var(--gds-color-l3-states-light-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-secondary),
        var(--gds-color-l3-states-light-pressed)
      );
    }
  }

  :host([rank*='tertiary']) .button {
    background-color: transparent;
    color: var(--gds-color-l3-content-tertiary);

    &:hover {
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-color-l3-states-light-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-color-l3-states-light-pressed)
      );
    }
  }
}

@layer sizes {
  :host([size='xs']) .button {
    --_block-size: var(--gds-space-l);
    font-size: var(--gds-text-size-detail-s);
    line-height: var(--gds-text-line-height-detail-s);
    padding-inline: var(--gds-space-m);
  }

  :host([size='small']) .button {
    --_block-size: var(--gds-space-xl);
    font-size: var(--gds-text-size-detail-s);
    line-height: var(--gds-text-line-height-detail-s);
    padding-inline: var(--gds-space-m);
  }

  :host([size='medium']) .button {
    --_block-size: var(--gds-space-2xl);
    font-size: var(--gds-text-size-detail-m);
    line-height: var(--gds-text-line-height-detail-m);
  }
}

@layer variants {
  .positive {
    background-color: var(--gds-color-l3-background-positive);

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-positive),
        var(--gds-color-l3-states-dark-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-positive),
        var(--gds-color-l3-states-dark-pressed)
      );
    }

    &.secondary {
      background-color: var(--gds-color-l3-background-positive-secondary);
      color: var(--gds-color-l3-content-positive);

      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-color-l3-background-positive-secondary),
          var(--gds-color-l3-states-positive-hover)
        );
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-color-l3-background-positive-secondary),
          var(--gds-color-l3-states-positive-pressed)
        );
      }
    }

    &.tertiary {
      background-color: transparent;
      color: var(--gds-color-l3-content-positive);

      &:hover {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-positive-hover)
        );
      }

      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-positive-pressed)
        );
      }
    }
  }

  .negative {
    background-color: var(--gds-color-l3-background-negative);

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-negative),
        var(--gds-color-l3-states-dark-hover)
      );
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-negative),
        var(--gds-color-l3-states-dark-pressed)
      );
    }

    &.secondary {
      background-color: var(--gds-color-l3-background-negative-secondary);
      color: var(--gds-color-l3-content-negative);

      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-color-l3-background-negative-secondary),
          var(--gds-color-l3-states-negative-hover)
        );
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-color-l3-background-negative-secondary),
          var(--gds-color-l3-states-negative-pressed)
        );
      }
    }

    &.tertiary {
      background-color: transparent;
      color: var(--gds-color-l3-content-negative);

      &:hover {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-negative-hover)
        );
      }

      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-negative-pressed)
        );
      }
    }
  }
}
`,ad=["aria-label","aria-haspopup","aria-expanded"],ld=id(C),Ut,Re,et,Hs,Gn,Gs,js,te=class extends ye{constructor(){super(),c(this,Re),c(this,Hs),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",c(this,Ut,!1),c(this,Gs,()=>{var e,t;const o=(t=(e=this._mainSlot)==null?void 0:e.assignedElements())!=null?t:[];R(this,Ut,o.length===1&&o.some(s=>s.tagName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),c(this,js,e=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e})),this.form&&!l(this,Re,et)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),re.instance.apply(this,"gds-button")}render(){const e={button:!0,circle:l(this,Ut),icon:l(this,Ut),small:this.size==="small",large:this.size==="large",positive:this.variant==="positive",negative:this.variant==="negative",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},t=l(this,Re,et)?Ko`a`:Ko`button`;return Nt`
      <${t}
        class=${$e(e)}
        type="${ce(l(this,Re,et)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||ge}
        href=${ce(l(this,Re,et)?this.href:void 0)}
        target=${ce(l(this,Re,et)?this.target:void 0)}
        rel=${ce(l(this,Re,et)?this.rel||l(this,Hs,Gn):void 0)}
        download=${ce(l(this,Re,et)?this.download:void 0)}
        part="_button"
        @click="${l(this,js)}"
        ${_i(o=>o.name.startsWith("gds-aria")||o.name==="gds-role"||ad.includes(o.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${l(this,Gs)}></slot>
        <slot name="trail"></slot>
        ${he(!this._isUsingTransitionalStyles,()=>ld`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${t}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}};Ut=new WeakMap;Re=new WeakSet;et=function(){return this.href.length>0};Hs=new WeakSet;Gn=function(){return this.target==="_blank"?"noreferrer noopener":void 0};Gs=new WeakMap;js=new WeakMap;te.styles=[H,j(nd)];te.shadowRootOptions={mode:"open",delegatesFocus:!0};r([h({type:Boolean,reflect:!0})],te.prototype,"disabled",2);r([h({reflect:!0})],te.prototype,"type",2);r([h({reflect:!0})],te.prototype,"rank",2);r([h({reflect:!0})],te.prototype,"variant",2);r([h({reflect:!0})],te.prototype,"size",2);r([h()],te.prototype,"label",2);r([h()],te.prototype,"href",2);r([h()],te.prototype,"target",2);r([h()],te.prototype,"rel",2);r([h()],te.prototype,"download",2);r([Q("slot:not([name])")],te.prototype,"_mainSlot",2);r([Q(".button")],te.prototype,"_button",2);r([wi({attributes:!0,childList:!1,subtree:!1,characterData:!1})],te.prototype,"_attributeChanged",1);te=r([$("gds-button")],te);var dd=`:host {
  --gds-ripple-motion-name: ripple;
  --gds-ripple-motion: var(--gds-ripple-motion-name) 1.2s
    cubic-bezier(0.46, 0.03, 0.52, 0.96) 0s 1 normal none running;
  border-radius: var(--gds-space-max);
  contain: strict;
  display: flex;
  height: 100%;
  inset: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

div {
  background-color: currentColor;
  border-radius: var(--gds-space-max);
  display: flex;
  height: 20px;
  left: var(--gds-ripple-left, 50%);
  margin-left: -10px;
  margin-top: -10px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: var(--gds-ripple-top, 50%);
  width: 20px;
  will-change: transform;
}

div.gds-ripple-effect {
  animation: var(--gds-ripple-motion);
}

@keyframes ripple {
  from {
    opacity: 0.5;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(calc(3 * var(--mt-ripple-spread, 4)));
  }
}
@media (prefers-reduced-motion: reduce) {
  :host {
    --gds-ripple-motion-name: none !important;
  }
}`,es=class extends gs{constructor(){super(...arguments),this.onmousedown=e=>{const o=e.target.getBoundingClientRect(),s=this._rippleEl;s&&(s.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-o.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-o.left}px`),setTimeout(()=>{s.classList.add("gds-ripple-effect")},20))}}render(){return be`<div></div>`}};es.styles=[H,j(dd)];r([Q("div")],es.prototype,"_rippleEl",2);es=r([$("gds-ripple")],es);function Ys(e){"@babel/helpers - typeof";return Ys=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ys(e)}function lt(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function se(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function ee(e){se(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||Ys(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function bt(e,t){se(2,arguments);var o=ee(e),s=lt(t);return isNaN(s)?new Date(NaN):(s&&o.setDate(o.getDate()+s),o)}function jn(e,t){se(2,arguments);var o=ee(e),s=lt(t);if(isNaN(s))return new Date(NaN);if(!s)return o;var i=o.getDate(),n=new Date(o.getTime());n.setMonth(o.getMonth()+s+1,0);var a=n.getDate();return i>=a?n:(o.setFullYear(n.getFullYear(),n.getMonth(),i),o)}var cd={};function Ci(){return cd}function Dt(e,t){var o,s,i,n,a,d,u,p;se(1,arguments);var m=Ci(),f=lt((o=(s=(i=(n=t?.weekStartsOn)!==null&&n!==void 0?n:t==null||(a=t.locale)===null||a===void 0||(d=a.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&i!==void 0?i:m.weekStartsOn)!==null&&s!==void 0?s:(u=m.locale)===null||u===void 0||(p=u.options)===null||p===void 0?void 0:p.weekStartsOn)!==null&&o!==void 0?o:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=ee(e),k=w.getDay(),T=(k<f?7:0)+k-f;return w.setDate(w.getDate()-T),w.setHours(0,0,0,0),w}function bn(e){se(1,arguments);var t=ee(e);return t.setHours(0,0,0,0),t}function hd(e,t){se(2,arguments);var o=lt(t),s=o*7;return bt(e,s)}function tt(e,t){se(2,arguments);var o=bn(e),s=bn(t);return o.getTime()===s.getTime()}function ud(e){se(1,arguments);var t=ee(e),o=t.getMonth();return t.setFullYear(t.getFullYear(),o+1,0),t.setHours(23,59,59,999),t}function gd(e,t){var o;se(1,arguments);var s=e||{},i=ee(s.start),n=ee(s.end),a=n.getTime();if(!(i.getTime()<=a))throw new RangeError("Invalid interval");var d=[],u=i;u.setHours(0,0,0,0);var p=Number((o=void 0)!==null&&o!==void 0?o:1);if(p<1||isNaN(p))throw new RangeError("`options.step` must be a number greater than 1");for(;u.getTime()<=a;)d.push(ee(u)),u.setDate(u.getDate()+p),u.setHours(0,0,0,0);return d}function pd(e,t){se(1,arguments);var o=e||{},s=ee(o.start),i=ee(o.end),n=i.getTime();if(!(s.getTime()<=n))throw new RangeError("Invalid interval");var a=Dt(s,t),d=Dt(i,t);a.setHours(15),d.setHours(15),n=d.getTime();for(var u=[],p=a;p.getTime()<=n;)p.setHours(0),u.push(ee(p)),p=hd(p,1),p.setHours(15);return u}function fd(e){se(1,arguments);var t=ee(e);return t.setDate(1),t.setHours(0,0,0,0),t}function vd(e,t){var o,s,i,n,a,d;se(1,arguments);var u=ee(e),p=u.getFullYear(),m=Ci(),f=lt((o=(s=(i=(n=void 0)!==null&&n!==void 0?n:void 0)!==null&&i!==void 0?i:m.firstWeekContainsDate)!==null&&s!==void 0?s:(a=m.locale)===null||a===void 0||(d=a.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setFullYear(p+1,0,f),w.setHours(0,0,0,0);var k=Dt(w,t),T=new Date(0);T.setFullYear(p,0,f),T.setHours(0,0,0,0);var A=Dt(T,t);return u.getTime()>=k.getTime()?p+1:u.getTime()>=A.getTime()?p:p-1}function bd(e,t){var o,s,i,n,a,d;se(1,arguments);var u=Ci(),p=lt((o=(s=(i=(n=void 0)!==null&&n!==void 0?n:void 0)!==null&&i!==void 0?i:u.firstWeekContainsDate)!==null&&s!==void 0?s:(a=u.locale)===null||a===void 0||(d=a.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&o!==void 0?o:1),m=vd(e,t),f=new Date(0);f.setFullYear(m,0,p),f.setHours(0,0,0,0);var w=Dt(f,t);return w}var yd=6048e5;function md(e,t){se(1,arguments);var o=ee(e),s=Dt(o,t).getTime()-bd(o,t).getTime();return Math.round(s/yd)+1}function xd(e){se(1,arguments);var t=ee(e),o=t.getMonth();return t.setFullYear(t.getFullYear(),o+1,0),t.setHours(0,0,0,0),t}function wd(e,t){se(2,arguments);var o=ee(e),s=ee(t);return o.getFullYear()===s.getFullYear()&&o.getMonth()===s.getMonth()}function kd(e,t){se(2,arguments);var o=ee(e),s=lt(t);return o.setHours(s),o}function _d(e,t){se(2,arguments);var o=lt(t);return jn(e,-o)}function Cd(e,t){const o=fd(e),s=ud(e),i=pd({start:o,end:s},{weekStartsOn:1});for(;i.length<6;)i.push(bt(i[i.length-1],7));return be`${t(i.map(n=>({days:gd({start:n,end:bt(n,6)})})))}`}var $d=W`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-space-2xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;
    }

    thead {
      box-shadow: 0 var(--gds-space-4xs) 0 0 var(--gds-color-l2-border-primary);
      th {
        height: var(--gds-space-2xl);
        width: var(--gds-space-2xl);
        background: var(--gds-sys-color-container-container-bright);
        box-sizing: border-box;
        text-align: center;
        font-weight: normal;
      }
    }

    tbody {
      td {
        position: relative;
        height: var(--gds-space-3xl);
        width: var(--gds-space-3xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-space-2xs);
        transition: all 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-space-3xs);

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          background: var(--gds-sys-color-base800);
          cursor: pointer;
          color: var(--gds-sys-color-base-white);
        }

        &.today {
          border-color: var(--gds-sys-color-base800);
        }

        &.disabled {
          background-color: var(--gds-sys-color-base100);
          color: var(--gds-sys-color-base500);
          cursor: not-allowed;
        }

        &:active:not(.disabled) {
          scale: 0.96;
        }

        &:focus-visible {
          outline-color: color-mix(in srgb, currentColor, transparent 50%);
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-space-2xs);
        height: var(--gds-space-2xs);
        border-radius: var(--gds-space-max);
        background-color: var(--_color, currentColor);
        inset: var(--gds-space-2xs) var(--gds-space-2xs) auto auto;
      }
    }
  }
`,Sd=$d,ts,$i,Us,Yn,Y=class extends V{constructor(){super(...arguments),c(this,ts),c(this,Us),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=e=>e.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=xd(new Date(this.focusedYear,e,1)),o=new Date(this.focusedDate);o.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),o.setMonth(e),o.setHours(12,0,0,0),this.focusedDate=o}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),re.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",x(this,Us,Yn)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date;return be`<table role="grid" aria-label="${ce(this.label)}">
      ${he(!this.hideDayNames,()=>be`<thead role="rowgroup">
            <tr role="row">
              ${he(this.showWeekNumbers,()=>be`<th></th>`)}
              <th>${D("Mon")}</th>
              <th>${D("Tue")}</th>
              <th>${D("Wed")}</th>
              <th>${D("Thu")}</th>
              <th>${D("Fri")}</th>
              <th>${D("Sat")}</th>
              <th>${D("Sun")}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${Cd(this.focusedDate,t=>be`
            ${t.map(o=>be`
                <tr role="row">
                  ${he(this.showWeekNumbers,()=>be`<td class="week-number" scope="row">
                        ${md(o.days[0])}
                      </td>`)}
                  ${o.days.map(s=>{const i=this.customizedDates&&this.customizedDates.find(f=>tt(f.date,s)),n=oo({color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(f=>tt(f,s)))},i),a=!wd(this.focusedDate,s),d=(s<this.min||s>this.max)&&!tt(s,this.min)&&!tt(s,this.max),u=s.getDay()===0||s.getDay()===6,p=n.disabled||a||d||this.disabledWeekends&&u;return this.hideExtraneousDays&&a?be`<td inert></td>`:be`
                          <td
                            role="${ce(p?void 0:"gridcell")}"
                            class="${$e({"custom-date":!!i,disabled:!!p,today:tt(e,s)})}"
                            ?disabled=${p}
                            tabindex="${tt(this.focusedDate,s)?0:-1}"
                            aria-selected="${this.value&&tt(this.value,s)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(s)}"
                            @click=${()=>p?null:x(this,ts,$i).call(this,s)}
                            id="dateCell-${s.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${n?n?.color:""}"
                              >${s.getDate()}</span
                            >

                            ${he(n.indicator,()=>be`<span
                                  class="indicator-${n?.indicator}"
                                  style="--_color: ${n?.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};ts=new WeakSet;$i=function(e){const t=kd(e,12);this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t,bubbles:!1,composed:!1}))};Us=new WeakSet;Yn=function(e){var t;let o=!1,s=new Date(this.focusedDate);e.key==="ArrowLeft"?(s=bt(this.focusedDate,-1),o=!0):e.key==="ArrowRight"?(s=bt(this.focusedDate,1),o=!0):e.key==="ArrowUp"?(s=bt(this.focusedDate,-7),o=!0):e.key==="ArrowDown"?(s=bt(this.focusedDate,7),o=!0):e.key==="Enter"||e.key===" "?((t=this._elFocusedCell)!=null&&t.hasAttribute("disabled")||x(this,ts,$i).call(this,this.focusedDate),o=!0):e.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),o=!0):e.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),o=!0):e.key==="PageUp"?(s=_d(this.focusedDate,1),o=!0):e.key==="PageDown"&&(s=jn(this.focusedDate,1),o=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=s),o&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var i;(i=this._elFocusedCell)==null||i.focus()}))};Y.styles=[H,Sd];Y.shadowRootOptions={mode:"open",delegatesFocus:!0};r([h()],Y.prototype,"value",2);r([h({type:Date})],Y.prototype,"min",2);r([h({type:Date})],Y.prototype,"max",2);r([h()],Y.prototype,"focusedDate",2);r([h({type:Boolean,attribute:"disabled-weekends"})],Y.prototype,"disabledWeekends",2);r([h({type:Array,attribute:"disabled-dates"})],Y.prototype,"disabledDates",2);r([h({type:Number})],Y.prototype,"focusedMonth",1);r([h({type:Number})],Y.prototype,"focusedYear",1);r([h({type:Boolean})],Y.prototype,"showWeekNumbers",2);r([h({type:Boolean})],Y.prototype,"hideExtraneousDays",2);r([h({type:Boolean})],Y.prototype,"hideDayNames",2);r([h({attribute:!1})],Y.prototype,"customizedDates",2);r([h()],Y.prototype,"label",2);r([h({attribute:!1})],Y.prototype,"dateLabelTemplate",2);r([ie()],Y.prototype,"_currentLocale",2);r([Q('td[tabindex="0"]')],Y.prototype,"_elFocusedCell",2);r([q("value")],Y.prototype,"_valueChanged",1);Y=r([$("gds-calendar"),Ze()],Y);var ro=class extends M{constructor(){super(),this.variant="primary",this.padding="s; m{l}",this["border-radius"]="xs; m{s}",this["border-width"]="4xs"}render(){return C`<slot></slot>`}};ro.styles=[H,W`
      :host {
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
      }
    `];r([b({property:"box-shadow",valueTemplate:e=>`var(--gds-shadow-${e})`})],ro.prototype,"shadow",2);r([b({valueTemplate:e=>e,styleTemplate:function(e,t){return`
      --_border-color: var(--gds-color-l${this.level}-background-${t});
      --_background-color: var(--gds-color-l${this.level}-background-${t});
      --_color: var(--gds-color-l${this.level}-content-${t});
      `}})],ro.prototype,"variant",2);ro=r([$("gds-card")],ro);var Ed=W`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-sys-color-primary-text);
      background-color: var(--gds-sys-color-container-container-dim1);
      font-size: var(--gds-text-size-label-input-medium);
      line-height: var(--gds-text-line-height-label-input-medium);
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-xs);
    }
  }
`,Td=Ed,qs=class extends V{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>re.instance.apply(this,"gds-menu-heading"))}render(){return be`<slot></slot>`}};qs.styles=Td;qs=r([$("gds-menu-heading")],qs);var Md=W`
  @layer base, reset, transitional-styles;
  @layer base {
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
`,Ad=Md,Zs,Un,ze=class extends V{constructor(){super(),c(this,Zs),this.open=!1,this.buttonLabel=D("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start"}connectedCallback(){super.connectedCallback(),re.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){var e,t,o;return C`<button
        id="trigger"
        class="icon border-0 small ${$e({highlighted:this.open})}"
        aria-label=${(e=this.buttonLabel)!=null?e:this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
      >
        <slot name="trigger">
          ${this.showLabel?(t=this.buttonLabel)!=null?t:this.label:ge}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"
              fill="#353531"
            />
          </svg>
        </slot>
      </button>
      <gds-popover
        id="menu"
        .open=${this.open}
        .triggerRef=${this.elTriggerBtn}
        .anchorRef=${this.elTriggerBtn}
        .label=${this.label}
        .placement=${this.placement}
        @gds-ui-state=${s=>this.open=s.detail.open}
      >
        <gds-menu
          aria-label=${(o=this.label)!=null?o:this.buttonLabel}
          @gds-menu-item-click=${x(this,Zs,Un)}
        >
          <slot></slot>
        </gds-menu>
      </gds-popover>`}};Zs=new WeakSet;Un=function(){this.open=!1};ze.styles=[Ad];ze.shadowRootOptions={mode:"open",delegatesFocus:!0};r([h({type:Boolean,reflect:!0})],ze.prototype,"open",2);r([h({attribute:"button-label"})],ze.prototype,"buttonLabel",2);r([h({attribute:"show-label",type:Boolean})],ze.prototype,"showLabel",2);r([h()],ze.prototype,"label",2);r([h()],ze.prototype,"placement",2);r([qe("#trigger")],ze.prototype,"elTriggerBtn",2);ze=r([$("gds-context-menu"),Ze()],ze);var Ao,qn=class{constructor(e){c(this,Ao,t=>{var o,s;const i=t.target;if(!this.host.navigableItems.includes(i))return;let n=!1;if(t.key==="ArrowDown"){const a=this.host.navigableItems.indexOf(i)+1,d=this.host.navigableItems[a];d?.focus(),n=!0}else if(t.key==="ArrowUp"){const a=this.host.navigableItems.indexOf(i)-1,d=this.host.navigableItems[a];d?.focus(),n=!0}else if(t.key==="Home")(o=this.host.navigableItems[0])==null||o.focus(),n=!0;else if(t.key==="End")(s=this.host.navigableItems[this.host.navigableItems.length-1])==null||s.focus(),n=!0;else{const a=t.key.toLowerCase();if(a.length!==1)return;const d=a>="a"&&a<="z",u=a>="0"&&a<="9";if(d||u){const p=this.host.navigableItems.find(m=>{var f;const w=(f=m.textContent)==null?void 0:f.trim().toLowerCase();return w?.startsWith(a)});p?.focus(),n=!0}}n&&(t.preventDefault(),t.stopPropagation())}),(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",l(this,Ao))}hostDisconnected(){this.host.removeEventListener("keydown",l(this,Ao))}};Ao=new WeakMap;function Zn(e){let t=e;for(;t.assignedElements().length>0&&t.assignedElements()[0].nodeName==="SLOT";)t=t.assignedElements()[0];return t}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Dd}=vl,Fd=e=>e===null||typeof e!="object"&&typeof e!="function",zd=e=>e.strings===void 0,yn=()=>document.createComment(""),jt=(e,t,o)=>{const s=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(o===void 0){const n=s.insertBefore(yn(),i),a=s.insertBefore(yn(),i);o=new Dd(n,a,e,e.options)}else{const n=o._$AB.nextSibling,a=o._$AM,d=a!==e;if(d){let u;o._$AQ?.(e),o._$AM=e,o._$AP!==void 0&&(u=e._$AU)!==a._$AU&&o._$AP(u)}if(n!==i||d){let u=o._$AA;for(;u!==n;){const p=u.nextSibling;s.insertBefore(u,i),u=p}}}return o},ct=(e,t,o=e)=>(e._$AI(t,o),e),Wd={},Ld=(e,t=Wd)=>e._$AH=t,Od=e=>e._$AH,Ms=e=>{e._$AP?.(!1,!0);let t=e._$AA;const o=e._$AB.nextSibling;for(;t!==o;){const s=t.nextSibling;t.remove(),t=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const to=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const s of o)s._$AO?.(t,!1),to(s,t);return!0},os=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},Qn=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),Rd(t)}};function Bd(e){this._$AN!==void 0?(os(this),this._$AM=e,Qn(this)):this._$AM=e}function Vd(e,t=!1,o=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let n=o;n<s.length;n++)to(s[n],!1),os(s[n]);else s!=null&&(to(s,!1),os(s));else to(this,e)}const Rd=e=>{e.type==wo.CHILD&&(e._$AP??=Vd,e._$AQ??=Bd)};class Jn extends ko{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,s){super._$AT(t,o,s),Qn(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(to(this,t),os(this))}setValue(t){if(zd(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xn=()=>new Nd;let Nd=class{};const As=new WeakMap,Kn=Rt(class extends Jn{render(e){return ge}update(e,[t]){const o=t!==this.Y;return o&&this.Y!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),ge}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let o=As.get(t);o===void 0&&(o=new WeakMap,As.set(t,o)),o.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),o.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return typeof this.Y=="function"?As.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var qt,mn=class extends V{constructor(){super(),c(this,qt,Xn()),new qn(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),re.instance.apply(this,"gds-listbox")}get navigableItems(){return l(this,qt).value?Zn(l(this,qt).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return C`<slot ${Kn(l(this,qt))}></slot>`}};qt=new WeakMap;mn=r([$("gds-menu")],mn);var ea=e=>{class t extends e{constructor(){super(...arguments),this.onblur=s=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:s.relatedTarget}))},this.onfocus=s=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:s.relatedTarget}))}}focus(s){this.setAttribute("tabindex","0"),super.focus(s)}}return t},Id=W`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-border-stroke-variant2);
    }

    :host div {
      display: flex;
      align-items: center;
      user-select: none;
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-m);
      cursor: pointer;
      font-size: var(--gds-text-size-label-input-large);
      font-weight: var(--gds-text-weight-regular);
      line-height: var(--gds-text-line-height-label-input-large);
      gap: 1ch;
      max-width: 100%;
      box-sizing: border-box;
    }

    :host([highlighted]) div {
      background-color: var(--gds-sys-color-container-container-shade1);
      color: var(--gds-sys-color-content-content-inverse);
    }

    :host(:hover:not([highlighted])) div {
      background-color: var(--gds-sys-color-container-container-dim1);
    }

    :host(:focus-visible) {
      outline: auto;
      outline-offset: -6px;
      outline-color: currentColor;
      outline-width: 2px;
    }

    :host([aria-hidden='true']) div {
      display: none;
    }

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1lh;
      width: auto;
      box-sizing: border-box;
      position: relative;
      aspect-ratio: 1/1;
      border-radius: var(--gds-space-2xs);
      border: var(--gds-space-3xs) solid currentColor;
      padding: var(--gds-space-3xs);

      &.checked {
        background-color: currentColor;

        gds-icon-checkmark {
          &::part(icon) {
            color: var(--gds-sys-color-base-white);
            stroke-width: var(--gds-space-2xs);
          }
        }
      }
    }
  }
`,ta=Id,Qs,Js=class extends ea(V){constructor(){super(...arguments),c(this,Qs,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",l(this,Qs)),re.instance.apply(this,"gds-option")}render(){return C`<div><slot></slot></div>`}};Qs=new WeakMap;Js.styles=[ta];Js=r([$("gds-menu-item")],Js);var ss=class extends V{constructor(){super(...arguments),this.show=!1}render(){return C``}};ss.styles=W`
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
  `;r([h({type:Boolean,reflect:!0})],ss.prototype,"show",2);ss=r([$("gds-backdrop")],ss);const Xs=Math.min,Mt=Math.max,rs=Math.round,Eo=Math.floor,Fe=e=>({x:e,y:e}),Pd={left:"right",right:"left",bottom:"top",top:"bottom"},Hd={start:"end",end:"start"};function Si(e,t){return typeof e=="function"?e(t):e}function Ft(e){return e.split("-")[0]}function ps(e){return e.split("-")[1]}function Gd(e){return e==="x"?"y":"x"}function oa(e){return e==="y"?"height":"width"}function io(e){return["top","bottom"].includes(Ft(e))?"y":"x"}function sa(e){return Gd(io(e))}function jd(e,t,o){o===void 0&&(o=!1);const s=ps(e),i=sa(e),n=oa(i);let a=i==="x"?s===(o?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(a=is(a)),[a,is(a)]}function Yd(e){const t=is(e);return[Ks(e),t,Ks(t)]}function Ks(e){return e.replace(/start|end/g,t=>Hd[t])}function Ud(e,t,o){const s=["left","right"],i=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return o?t?i:s:t?s:i;case"left":case"right":return t?n:a;default:return[]}}function qd(e,t,o,s){const i=ps(e);let n=Ud(Ft(e),o==="start",s);return i&&(n=n.map(a=>a+"-"+i),t&&(n=n.concat(n.map(Ks)))),n}function is(e){return e.replace(/left|right|bottom|top/g,t=>Pd[t])}function Zd(e){return{top:0,right:0,bottom:0,left:0,...e}}function Qd(e){return typeof e!="number"?Zd(e):{top:e,right:e,bottom:e,left:e}}function ns(e){const{x:t,y:o,width:s,height:i}=e;return{width:s,height:i,top:o,left:t,right:t+s,bottom:o+i,x:t,y:o}}function xn(e,t,o){let{reference:s,floating:i}=e;const n=io(t),a=sa(t),d=oa(a),u=Ft(t),p=n==="y",m=s.x+s.width/2-i.width/2,f=s.y+s.height/2-i.height/2,w=s[d]/2-i[d]/2;let k;switch(u){case"top":k={x:m,y:s.y-i.height};break;case"bottom":k={x:m,y:s.y+s.height};break;case"right":k={x:s.x+s.width,y:f};break;case"left":k={x:s.x-i.width,y:f};break;default:k={x:s.x,y:s.y}}switch(ps(t)){case"start":k[a]-=w*(o&&p?-1:1);break;case"end":k[a]+=w*(o&&p?-1:1);break}return k}const Jd=async(e,t,o)=>{const{placement:s="bottom",strategy:i="absolute",middleware:n=[],platform:a}=o,d=n.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(t));let p=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:m,y:f}=xn(p,s,u),w=s,k={},T=0;for(let A=0;A<d.length;A++){const{name:I,fn:L}=d[A],{x:G,y:K,data:ae,reset:Z}=await L({x:m,y:f,initialPlacement:s,placement:w,strategy:i,middlewareData:k,rects:p,platform:a,elements:{reference:e,floating:t}});m=G??m,f=K??f,k={...k,[I]:{...k[I],...ae}},Z&&T<=50&&(T++,typeof Z=="object"&&(Z.placement&&(w=Z.placement),Z.rects&&(p=Z.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):Z.rects),{x:m,y:f}=xn(p,w,u)),A=-1)}return{x:m,y:f,placement:w,strategy:i,middlewareData:k}};async function Xd(e,t){var o;t===void 0&&(t={});const{x:s,y:i,platform:n,rects:a,elements:d,strategy:u}=e,{boundary:p="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:w=!1,padding:k=0}=Si(t,e),T=Qd(k),I=d[w?f==="floating"?"reference":"floating":f],L=ns(await n.getClippingRect({element:(o=await(n.isElement==null?void 0:n.isElement(I)))==null||o?I:I.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(d.floating)),boundary:p,rootBoundary:m,strategy:u})),G=f==="floating"?{x:s,y:i,width:a.floating.width,height:a.floating.height}:a.reference,K=await(n.getOffsetParent==null?void 0:n.getOffsetParent(d.floating)),ae=await(n.isElement==null?void 0:n.isElement(K))?await(n.getScale==null?void 0:n.getScale(K))||{x:1,y:1}:{x:1,y:1},Z=ns(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:G,offsetParent:K,strategy:u}):G);return{top:(L.top-Z.top+T.top)/ae.y,bottom:(Z.bottom-L.bottom+T.bottom)/ae.y,left:(L.left-Z.left+T.left)/ae.x,right:(Z.right-L.right+T.right)/ae.x}}const Kd=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,s;const{placement:i,middlewareData:n,rects:a,initialPlacement:d,platform:u,elements:p}=t,{mainAxis:m=!0,crossAxis:f=!0,fallbackPlacements:w,fallbackStrategy:k="bestFit",fallbackAxisSideDirection:T="none",flipAlignment:A=!0,...I}=Si(e,t);if((o=n.arrow)!=null&&o.alignmentOffset)return{};const L=Ft(i),G=io(d),K=Ft(d)===d,ae=await(u.isRTL==null?void 0:u.isRTL(p.floating)),Z=w||(K||!A?[is(d)]:Yd(d)),Qe=T!=="none";!w&&Qe&&Z.push(...qd(d,A,T,ae));const Cs=[d,...Z],Pt=await Xd(t,I),kt=[];let dt=((s=n.flip)==null?void 0:s.overflows)||[];if(m&&kt.push(Pt[L]),f){const ke=jd(i,a,ae);kt.push(Pt[ke[0]],Pt[ke[1]])}if(dt=[...dt,{placement:i,overflows:kt}],!kt.every(ke=>ke<=0)){var Co,Je;const ke=(((Co=n.flip)==null?void 0:Co.index)||0)+1,Gt=Cs[ke];if(Gt)return{data:{index:ke,overflows:dt},reset:{placement:Gt}};let Xe=(Je=dt.filter(Be=>Be.overflows[0]<=0).sort((Be,_e)=>Be.overflows[1]-_e.overflows[1])[0])==null?void 0:Je.placement;if(!Xe)switch(k){case"bestFit":{var Ht;const Be=(Ht=dt.filter(_e=>{if(Qe){const Ce=io(_e.placement);return Ce===G||Ce==="y"}return!0}).map(_e=>[_e.placement,_e.overflows.filter(Ce=>Ce>0).reduce((Ce,$o)=>Ce+$o,0)]).sort((_e,Ce)=>_e[1]-Ce[1])[0])==null?void 0:Ht[0];Be&&(Xe=Be);break}case"initialPlacement":Xe=d;break}if(i!==Xe)return{reset:{placement:Xe}}}return{}}}};async function ec(e,t){const{placement:o,platform:s,elements:i}=e,n=await(s.isRTL==null?void 0:s.isRTL(i.floating)),a=Ft(o),d=ps(o),u=io(o)==="y",p=["left","top"].includes(a)?-1:1,m=n&&u?-1:1,f=Si(t,e);let{mainAxis:w,crossAxis:k,alignmentAxis:T}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return d&&typeof T=="number"&&(k=d==="end"?T*-1:T),u?{x:k*m,y:w*p}:{x:w*p,y:k*m}}const tc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,s;const{x:i,y:n,placement:a,middlewareData:d}=t,u=await ec(t,e);return a===((o=d.offset)==null?void 0:o.placement)&&(s=d.arrow)!=null&&s.alignmentOffset?{}:{x:i+u.x,y:n+u.y,data:{...u,placement:a}}}}};function fs(){return typeof window<"u"}function It(e){return ra(e)?(e.nodeName||"").toLowerCase():"#document"}function me(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Oe(e){var t;return(t=(ra(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ra(e){return fs()?e instanceof Node||e instanceof me(e).Node:!1}function Se(e){return fs()?e instanceof Element||e instanceof me(e).Element:!1}function We(e){return fs()?e instanceof HTMLElement||e instanceof me(e).HTMLElement:!1}function wn(e){return!fs()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof me(e).ShadowRoot}function _o(e){const{overflow:t,overflowX:o,overflowY:s,display:i}=Ee(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+o)&&!["inline","contents"].includes(i)}function oc(e){return["table","td","th"].includes(It(e))}function vs(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Ei(e){const t=Ti(),o=Se(e)?Ee(e):e;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(o.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(o.contain||"").includes(s))}function sc(e){let t=nt(e);for(;We(t)&&!zt(t);){if(Ei(t))return t;if(vs(t))return null;t=nt(t)}return null}function Ti(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function zt(e){return["html","body","#document"].includes(It(e))}function Ee(e){return me(e).getComputedStyle(e)}function bs(e){return Se(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function nt(e){if(It(e)==="html")return e;const t=e.assignedSlot||e.parentNode||wn(e)&&e.host||Oe(e);return wn(t)?t.host:t}function ia(e){const t=nt(e);return zt(t)?e.ownerDocument?e.ownerDocument.body:e.body:We(t)&&_o(t)?t:ia(t)}function no(e,t,o){var s;t===void 0&&(t=[]),o===void 0&&(o=!0);const i=ia(e),n=i===((s=e.ownerDocument)==null?void 0:s.body),a=me(i);if(n){const d=er(a);return t.concat(a,a.visualViewport||[],_o(i)?i:[],d&&o?no(d):[])}return t.concat(i,no(i,[],o))}function er(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function na(e){const t=Ee(e);let o=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const i=We(e),n=i?e.offsetWidth:o,a=i?e.offsetHeight:s,d=rs(o)!==n||rs(s)!==a;return d&&(o=n,s=a),{width:o,height:s,$:d}}function Mi(e){return Se(e)?e:e.contextElement}function At(e){const t=Mi(e);if(!We(t))return Fe(1);const o=t.getBoundingClientRect(),{width:s,height:i,$:n}=na(t);let a=(n?rs(o.width):o.width)/s,d=(n?rs(o.height):o.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!d||!Number.isFinite(d))&&(d=1),{x:a,y:d}}const rc=Fe(0);function aa(e){const t=me(e);return!Ti()||!t.visualViewport?rc:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ic(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==me(e)?!1:t}function mt(e,t,o,s){t===void 0&&(t=!1),o===void 0&&(o=!1);const i=e.getBoundingClientRect(),n=Mi(e);let a=Fe(1);t&&(s?Se(s)&&(a=At(s)):a=At(e));const d=ic(n,o,s)?aa(n):Fe(0);let u=(i.left+d.x)/a.x,p=(i.top+d.y)/a.y,m=i.width/a.x,f=i.height/a.y;if(n){const w=me(n),k=s&&Se(s)?me(s):s;let T=w,A=er(T);for(;A&&s&&k!==T;){const I=At(A),L=A.getBoundingClientRect(),G=Ee(A),K=L.left+(A.clientLeft+parseFloat(G.paddingLeft))*I.x,ae=L.top+(A.clientTop+parseFloat(G.paddingTop))*I.y;u*=I.x,p*=I.y,m*=I.x,f*=I.y,u+=K,p+=ae,T=me(A),A=er(T)}}return ns({width:m,height:f,x:u,y:p})}function Ai(e,t){const o=bs(e).scrollLeft;return t?t.left+o:mt(Oe(e)).left+o}function la(e,t,o){o===void 0&&(o=!1);const s=e.getBoundingClientRect(),i=s.left+t.scrollLeft-(o?0:Ai(e,s)),n=s.top+t.scrollTop;return{x:i,y:n}}function nc(e){let{elements:t,rect:o,offsetParent:s,strategy:i}=e;const n=i==="fixed",a=Oe(s),d=t?vs(t.floating):!1;if(s===a||d&&n)return o;let u={scrollLeft:0,scrollTop:0},p=Fe(1);const m=Fe(0),f=We(s);if((f||!f&&!n)&&((It(s)!=="body"||_o(a))&&(u=bs(s)),We(s))){const k=mt(s);p=At(s),m.x=k.x+s.clientLeft,m.y=k.y+s.clientTop}const w=a&&!f&&!n?la(a,u,!0):Fe(0);return{width:o.width*p.x,height:o.height*p.y,x:o.x*p.x-u.scrollLeft*p.x+m.x+w.x,y:o.y*p.y-u.scrollTop*p.y+m.y+w.y}}function ac(e){return Array.from(e.getClientRects())}function lc(e){const t=Oe(e),o=bs(e),s=e.ownerDocument.body,i=Mt(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),n=Mt(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let a=-o.scrollLeft+Ai(e);const d=-o.scrollTop;return Ee(s).direction==="rtl"&&(a+=Mt(t.clientWidth,s.clientWidth)-i),{width:i,height:n,x:a,y:d}}function dc(e,t){const o=me(e),s=Oe(e),i=o.visualViewport;let n=s.clientWidth,a=s.clientHeight,d=0,u=0;if(i){n=i.width,a=i.height;const p=Ti();(!p||p&&t==="fixed")&&(d=i.offsetLeft,u=i.offsetTop)}return{width:n,height:a,x:d,y:u}}function cc(e,t){const o=mt(e,!0,t==="fixed"),s=o.top+e.clientTop,i=o.left+e.clientLeft,n=We(e)?At(e):Fe(1),a=e.clientWidth*n.x,d=e.clientHeight*n.y,u=i*n.x,p=s*n.y;return{width:a,height:d,x:u,y:p}}function kn(e,t,o){let s;if(t==="viewport")s=dc(e,o);else if(t==="document")s=lc(Oe(e));else if(Se(t))s=cc(t,o);else{const i=aa(e);s={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return ns(s)}function da(e,t){const o=nt(e);return o===t||!Se(o)||zt(o)?!1:Ee(o).position==="fixed"||da(o,t)}function hc(e,t){const o=t.get(e);if(o)return o;let s=no(e,[],!1).filter(d=>Se(d)&&It(d)!=="body"),i=null;const n=Ee(e).position==="fixed";let a=n?nt(e):e;for(;Se(a)&&!zt(a);){const d=Ee(a),u=Ei(a);!u&&d.position==="fixed"&&(i=null),(n?!u&&!i:!u&&d.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||_o(a)&&!u&&da(e,a))?s=s.filter(m=>m!==a):i=d,a=nt(a)}return t.set(e,s),s}function uc(e){let{element:t,boundary:o,rootBoundary:s,strategy:i}=e;const a=[...o==="clippingAncestors"?vs(t)?[]:hc(t,this._c):[].concat(o),s],d=a[0],u=a.reduce((p,m)=>{const f=kn(t,m,i);return p.top=Mt(f.top,p.top),p.right=Xs(f.right,p.right),p.bottom=Xs(f.bottom,p.bottom),p.left=Mt(f.left,p.left),p},kn(t,d,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function gc(e){const{width:t,height:o}=na(e);return{width:t,height:o}}function pc(e,t,o){const s=We(t),i=Oe(t),n=o==="fixed",a=mt(e,!0,n,t);let d={scrollLeft:0,scrollTop:0};const u=Fe(0);if(s||!s&&!n)if((It(t)!=="body"||_o(i))&&(d=bs(t)),s){const w=mt(t,!0,n,t);u.x=w.x+t.clientLeft,u.y=w.y+t.clientTop}else i&&(u.x=Ai(i));const p=i&&!s&&!n?la(i,d):Fe(0),m=a.left+d.scrollLeft-u.x-p.x,f=a.top+d.scrollTop-u.y-p.y;return{x:m,y:f,width:a.width,height:a.height}}function Ds(e){return Ee(e).position==="static"}function _n(e,t){if(!We(e)||Ee(e).position==="fixed")return null;if(t)return t(e);let o=e.offsetParent;return Oe(e)===o&&(o=o.ownerDocument.body),o}function ca(e,t){const o=me(e);if(vs(e))return o;if(!We(e)){let i=nt(e);for(;i&&!zt(i);){if(Se(i)&&!Ds(i))return i;i=nt(i)}return o}let s=_n(e,t);for(;s&&oc(s)&&Ds(s);)s=_n(s,t);return s&&zt(s)&&Ds(s)&&!Ei(s)?o:s||sc(e)||o}const fc=async function(e){const t=this.getOffsetParent||ca,o=this.getDimensions,s=await o(e.floating);return{reference:pc(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function vc(e){return Ee(e).direction==="rtl"}const bc={convertOffsetParentRelativeRectToViewportRelativeRect:nc,getDocumentElement:Oe,getClippingRect:uc,getOffsetParent:ca,getElementRects:fc,getClientRects:ac,getDimensions:gc,getScale:At,isElement:Se,isRTL:vc};function yc(e,t){let o=null,s;const i=Oe(e);function n(){var d;clearTimeout(s),(d=o)==null||d.disconnect(),o=null}function a(d,u){d===void 0&&(d=!1),u===void 0&&(u=1),n();const{left:p,top:m,width:f,height:w}=e.getBoundingClientRect();if(d||t(),!f||!w)return;const k=Eo(m),T=Eo(i.clientWidth-(p+f)),A=Eo(i.clientHeight-(m+w)),I=Eo(p),G={rootMargin:-k+"px "+-T+"px "+-A+"px "+-I+"px",threshold:Mt(0,Xs(1,u))||1};let K=!0;function ae(Z){const Qe=Z[0].intersectionRatio;if(Qe!==u){if(!K)return a();Qe?a(!1,Qe):s=setTimeout(()=>{a(!1,1e-7)},1e3)}K=!1}try{o=new IntersectionObserver(ae,{...G,root:i.ownerDocument})}catch{o=new IntersectionObserver(ae,G)}o.observe(e)}return a(!0),n}function mc(e,t,o,s){s===void 0&&(s={});const{ancestorScroll:i=!0,ancestorResize:n=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:u=!1}=s,p=Mi(e),m=i||n?[...p?no(p):[],...no(t)]:[];m.forEach(L=>{i&&L.addEventListener("scroll",o,{passive:!0}),n&&L.addEventListener("resize",o)});const f=p&&d?yc(p,o):null;let w=-1,k=null;a&&(k=new ResizeObserver(L=>{let[G]=L;G&&G.target===p&&k&&(k.unobserve(t),cancelAnimationFrame(w),w=requestAnimationFrame(()=>{var K;(K=k)==null||K.observe(t)})),o()}),p&&!u&&k.observe(p),k.observe(t));let T,A=u?mt(e):null;u&&I();function I(){const L=mt(e);A&&(L.x!==A.x||L.y!==A.y||L.width!==A.width||L.height!==A.height)&&o(),A=L,T=requestAnimationFrame(I)}return o(),()=>{var L;m.forEach(G=>{i&&G.removeEventListener("scroll",o),n&&G.removeEventListener("resize",o)}),f?.(),(L=k)==null||L.disconnect(),k=null,u&&cancelAnimationFrame(T)}}const xc=tc,wc=Kd,kc=(e,t,o)=>{const s=new Map,i={platform:bc,...o},n={...i.platform,_c:s};return Jd(e,t,{...i,platform:n})};var _c=W`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;
    }

    :host([open]) dialog {
      opacity: 1;
      box-sizing: border-box;
      transform: translate3d(0, 0, 0);
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

    header {
      display: none;
    }

    dialog:not(.has-backdrop)::backdrop {
      background-color: transparent;
      display: block;
      position: fixed;
    }
  }
`,Cc=_c,tr,ha,yt,as,ot,Zt,ht,or,Do,sr,rr,ua,ir,ga,Fo,nr,ys,ms,zo,Wo,N=class extends V{constructor(){super(...arguments),c(this,tr),c(this,Do),c(this,rr),c(this,ir),c(this,Fo),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>"500px",this.nonmodal=!1,this.floatingUIMiddleware=[xc(8),wc()],this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,c(this,yt,void 0),c(this,as,!1),c(this,ot,void 0),c(this,Zt,()=>{this.open=!1,l(this,ht).call(this,"cancel")}),c(this,ht,e=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason:e},bubbles:!1,composed:!1}))}),c(this,or,e=>{e.stopPropagation(),e.preventDefault(),this.open=!1,l(this,ht).call(this,"close"),setTimeout(()=>{var t;return(t=this._trigger)==null?void 0:t.focus()},250)}),c(this,ys,e=>{(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),this.open=!0,l(this,ht).call(this,"show")),e.key==="Escape"&&this.open&&l(this,Zt).call(this)}),c(this,ms,e=>{e.preventDefault(),this.open=!this.open,l(this,ht).call(this,this.open?"show":"close")}),c(this,zo,()=>{var e;const t=(e=this._elDefaultSlot)==null?void 0:e.assignedElements()[0];this.updateComplete.then(()=>{t?.focus()})}),c(this,Wo,e=>{const t=e,o=this._elDialog;if((t.clientX>0||t.clientY>0)&&o&&this.open){const i=o.getBoundingClientRect();i.top<=t.clientY&&t.clientY<=i.top+i.height&&i.left<=t.clientX&&t.clientX<=i.left+i.width||(this.open=!1,l(this,ht).call(this,"close"))}})}_handleTriggerRefChanged(){var e;(e=this.triggerRef)==null||e.then(t=>{t&&(this._trigger=t)})}_handleAnchorRefChanged(){var e;(e=this.anchorRef)==null||e.then(t=>{t&&(this._anchor=t)})}_handleTriggerChanged(){x(this,Do,sr).call(this),x(this,ir,ga).call(this)}_handleAnchorChanged(){x(this,Fo,nr).call(this)}connectedCallback(){super.connectedCallback(),re.instance.apply(this,"gds-popover"),x(this,Do,sr).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{e.key==="Escape"&&this.open&&(l(this,Zt).call(this),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{const t=e.target;t.tagName==="INPUT"||t.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),x(this,rr,ua).call(this)}render(){return C`<slot
        name="trigger"
        @slotchange=${x(this,tr,ha)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${$e({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          aria-hidden="${String(!this.open)}"
          @close=${()=>this.open&&l(this,Zt).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${l(this,or)}
              class="close"
              label="${D("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const e=(this.nonmodal?l(this,ot):this._elDialog)||document;this.updateComplete.then(()=>{var t,o,s,i;(t=this._trigger)==null||t.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?(s=this._elDialog)==null||s.setAttribute("open","true"):(o=this._elDialog)==null||o.showModal(),l(this,zo).call(this),requestAnimationFrame(()=>{l(this,ot)&&(l(this,ot).show=!0)}),setTimeout(()=>l(this,zo).call(this),250),setTimeout(()=>e.addEventListener("click",l(this,Wo)),0)):((i=this._elDialog)==null||i.close(),e.removeEventListener("click",l(this,Wo)),l(this,ot)&&(l(this,ot).show=!1))})}_handleBackdropChange(){var e;const t=(e=this.parentElement)==null?void 0:e.getRootNode();!this.backdrop||!t||R(this,ot,t.querySelector(this.backdrop))}_handleMobileLayout(e){var t,o,s,i;R(this,as,e),e&&!this.disableMobileStyles?((t=l(this,yt))==null||t.call(this),(o=this._elDialog)==null||o.style.removeProperty("left"),(s=this._elDialog)==null||s.style.removeProperty("top"),(i=this._elDialog)==null||i.style.removeProperty("minWidth"),this.updateComplete.then(()=>{var n;this.open&&((n=this._elDialog)==null||n.showModal())})):this.updateComplete.then(()=>{x(this,Fo,nr).call(this)})}};tr=new WeakSet;ha=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};yt=new WeakMap;as=new WeakMap;ot=new WeakMap;Zt=new WeakMap;ht=new WeakMap;or=new WeakMap;Do=new WeakSet;sr=function(){var e,t;(e=this._trigger)==null||e.addEventListener("keydown",l(this,ys)),(t=this._trigger)==null||t.addEventListener("click",l(this,ms))};rr=new WeakSet;ua=function(){var e,t,o;(e=this._trigger)==null||e.removeEventListener("keydown",l(this,ys)),(t=this._trigger)==null||t.removeEventListener("click",l(this,ms)),(o=l(this,yt))==null||o.call(this)};ir=new WeakSet;ga=function(){var e;if(this._trigger){(e=this._trigger)==null||e.setAttribute("aria-expanded",String(this.open));const t=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||t.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const s=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";this._trigger.getAttribute(s)===null&&this._trigger.setAttribute(s,this.popupRole)}};Fo=new WeakSet;nr=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;!e||!t||l(this,as)&&!this.disableMobileStyles||(l(this,yt)&&l(this,yt).call(this),R(this,yt,mc(e,t,()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),kc(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:o,y:s})=>Object.assign(t.style,{left:`${o}px`,top:`${s}px`}))})))};ys=new WeakMap;ms=new WeakMap;zo=new WeakMap;Wo=new WeakMap;N.styles=j(Cc);r([h({type:Boolean,reflect:!0})],N.prototype,"open",2);r([h({attribute:"popup-role"})],N.prototype,"popupRole",2);r([h({attribute:!1})],N.prototype,"triggerRef",2);r([h({attribute:!1})],N.prototype,"anchorRef",2);r([h()],N.prototype,"label",2);r([h()],N.prototype,"placement",2);r([h({type:Boolean})],N.prototype,"disableMobileStyles",2);r([h({attribute:!1})],N.prototype,"calcMinWidth",2);r([h({attribute:!1})],N.prototype,"calcMaxWidth",2);r([h({attribute:!1})],N.prototype,"calcMinHeight",2);r([h({attribute:!1})],N.prototype,"calcMaxHeight",2);r([h({type:Boolean})],N.prototype,"nonmodal",2);r([h()],N.prototype,"backdrop",2);r([h({attribute:!1})],N.prototype,"floatingUIMiddleware",2);r([ie()],N.prototype,"_trigger",2);r([ie()],N.prototype,"_anchor",2);r([ie()],N.prototype,"_isVirtKbVisible",2);r([Q("slot:not([name])")],N.prototype,"_elDefaultSlot",2);r([Q('slot[name="trigger"]')],N.prototype,"_elTriggerSlot",2);r([Q("dialog")],N.prototype,"_elDialog",2);r([q("triggerRef")],N.prototype,"_handleTriggerRefChanged",1);r([q("anchorRef")],N.prototype,"_handleAnchorRefChanged",1);r([q("_trigger")],N.prototype,"_handleTriggerChanged",1);r([q("_anchor")],N.prototype,"_handleAnchorChanged",1);r([q("open")],N.prototype,"_handleOpenChange",1);r([q("backdrop")],N.prototype,"_handleBackdropChange",1);r([Kl("(max-width: 576px)")],N.prototype,"_handleMobileLayout",1);N=r([$("gds-popover"),Ze()],N);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ar extends ko{constructor(t){if(super(t),this.it=ge,t.type!==wo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ge||t==null)return this._t=void 0,this.it=t;if(t===so)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const o=[t];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}}ar.directiveName="unsafeHTML",ar.resultType=1;const pa=Rt(ar);var $c=W`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
    }
  }
`,Sc=$c,ne=class extends V{constructor(){super(...arguments),this.solid=!1,this.box=!1,this.label=""}render(){const e=this.constructor._name==="brand-seb",t=e?"55":this.width!==void 0?this.width.toString():void 0,o=e?"24":this.height!==void 0?this.height.toString():"1lh",s=e?"0 0 55 24":this.box||"0 0 24 24";let i=`<svg
      ${t?`width="${t}"`:""}
      height="${o}"
      viewBox="${s}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}
      role="graphics-symbol"
      part="icon" 
    >
      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}
    </svg>`;return this.stroke&&(i=i.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`)),be`${pa(i)}`}};ne.styles=[Sc];r([h({type:Number})],ne.prototype,"width",2);r([h({type:Number})],ne.prototype,"height",2);r([h({type:Boolean})],ne.prototype,"solid",2);r([h({type:Number})],ne.prototype,"stroke",2);r([h({type:String})],ne.prototype,"box",2);r([h({type:String})],ne.prototype,"label",2);var ao=class extends ne{};ao._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';ao._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>';ao._name="cross-small";ao=r([$("gds-icon-cross-small")],ao);var Di={fromAttribute(e){return new Date(e)},toAttribute(e){return e.toISOString()}},Ec={fromAttribute(e){return e.split(",").map(t=>new Date(t.trim()))},toAttribute(e){return JSON.stringify(e.map(t=>t.toISOString()))}},Tc={fromAttribute(e){return e.split(",")},toAttribute(e){return Array.isArray(e)?e.join(","):e}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Mc(e,t){const o=typeof t=="function";if(e!==void 0){let s=-1;for(const i of e)s>-1&&(yield o?t(s):t),s++,yield i}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ac(e,t){if(e!==void 0){let o=0;for(const s of e)yield t(s,o++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cn=(e,t,o)=>{const s=new Map;for(let i=t;i<=o;i++)s.set(e[i],i);return s},Dc=Rt(class extends ko{constructor(e){if(super(e),e.type!==wo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let s;o===void 0?o=t:t!==void 0&&(s=t);const i=[],n=[];let a=0;for(const d of e)i[a]=s?s(d,a):a,n[a]=o(d,a),a++;return{values:n,keys:i}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,s]){const i=Od(e),{values:n,keys:a}=this.dt(t,o,s);if(!Array.isArray(i))return this.ut=a,n;const d=this.ut??=[],u=[];let p,m,f=0,w=i.length-1,k=0,T=n.length-1;for(;f<=w&&k<=T;)if(i[f]===null)f++;else if(i[w]===null)w--;else if(d[f]===a[k])u[k]=ct(i[f],n[k]),f++,k++;else if(d[w]===a[T])u[T]=ct(i[w],n[T]),w--,T--;else if(d[f]===a[T])u[T]=ct(i[f],n[T]),jt(e,u[T+1],i[f]),f++,T--;else if(d[w]===a[k])u[k]=ct(i[w],n[k]),jt(e,i[f],i[w]),w--,k++;else if(p===void 0&&(p=Cn(a,k,T),m=Cn(d,f,w)),p.has(d[f]))if(p.has(d[w])){const A=m.get(a[k]),I=A!==void 0?i[A]:null;if(I===null){const L=jt(e,i[f]);ct(L,n[k]),u[k]=L}else u[k]=ct(I,n[k]),jt(e,i[f],I),i[A]=null;k++}else Ms(i[w]),w--;else Ms(i[f]),f++;for(;k<=T;){const A=jt(e,u[T+1]);ct(A,n[k]),u[k++]=A}for(;f<=w;){const A=i[f++];A!==null&&Ms(A)}return this.ut=a,Ld(e,u),so}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Fc{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class zc{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(t=>this.q=t)}resume(){this.q?.(),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $n=e=>!Fd(e)&&typeof e.then=="function",Sn=1073741823;class Wc extends Jn{constructor(){super(...arguments),this._$Cwt=Sn,this._$Cbt=[],this._$CK=new Fc(this),this._$CX=new zc}render(...t){return t.find(o=>!$n(o))??so}update(t,o){const s=this._$Cbt;let i=s.length;this._$Cbt=o;const n=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let d=0;d<o.length&&!(d>this._$Cwt);d++){const u=o[d];if(!$n(u))return this._$Cwt=d,u;d<i&&u===s[d]||(this._$Cwt=Sn,i=0,Promise.resolve(u).then(async p=>{for(;a.get();)await a.get();const m=n.deref();if(m!==void 0){const f=m._$Cbt.indexOf(u);f>-1&&f<m._$Cwt&&(m._$Cwt=f,m.setValue(p))}}))}return so}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Lc=Rt(Wc);var Oc=W`
  @layer base, reset;

  @layer base {
    :host {
      font-family: inherit;
      display: flex;
      flex-direction: column;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-inline: var(--gds-space-s);
      padding-block-start: var(--gds-space-m);
      gap: var(--gds-space-xs);
      box-sizing: border-box;
    }

    .header gds-dropdown.month {
      min-width: 140px;
      flex: 1;
    }

    .header gds-dropdown.year {
      width: 110px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      padding-inline: var(--gds-space-s);
      padding-block-end: var(--gds-space-s);
    }

    label {
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-book);
      font-family: inherit;
    }

    .form-info {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
      font-weight: var(--gds-text-weight-regular);
    }

    .field {
      display: flex;
      justify-content: space-between;
      gap: var(--gds-space-2xs);
      padding: var(--gds-space-2xs);
      border-radius: var(--gds-space-xs);
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-regular);
      font-family: inherit;
      overflow: hidden;
      margin-block: var(--gds-space-xs);
      max-width: 100%;
      cursor: pointer;
      color: currentColor;
      height: var(--gds-space-3xl);
      box-sizing: border-box;
      border-width: var(--gds-space-4xs);
      border-style: solid;

      // TODO: Update colors with tokens
      border-color: #6f6f6f;
      color: #1b1b1b;
      background-color: #e2e2e2;

      &:hover {
        background-color: #cecece;
      }

      .input {
        display: flex;
        align-items: center;
        flex-direction: row;
        max-width: max-content;
        text-transform: uppercase;
        flex: 1;
        font-variant-numeric: tabular-nums;

        &:focus-within span {
          opacity: 0;
        }

        .spinner {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          outline-color: currentcolor;
          outline-offset: -4px;
          outline-width: var(--gds-space-3xs);
          box-sizing: border-box;
          border-radius: var(--gds-space-xs);
          padding-inline: 1ch;

          &:focus-visible {
            outline-style: solid;
          }
        }
      }

      button {
        appearance: none;
        background: transparent;
        border: 0;
        box-sizing: border-box;
        color: currentColor;
        cursor: pointer;
        aspect-ratio: 1;
        margin: 0;
        padding: 0;
        outline-color: inherit;
        outline-offset: -4px;
        border-radius: var(--gds-space-xs);
        padding-top: var(--gds-space-3xs);
        font-family: inherit;

        &:focus-visible,
        &:hover {
          outline: var(--gds-space-3xs) solid currentcolor;
        }
      }

      &.small {
        height: var(--gds-space-xl);
        font-size: var(--gds-text-size-detail-s);
        padding: 0;

        button {
          outline-offset: -4px;
          border-radius: var(--gds-space-xs);
          padding-top: 3px;
        }
      }
    }
  }
`,Qt,lr,fa,lo,ls,dr,va,cr,ba,hr,ya,ut,$t,ur,ma,gr,pr,fr,vr,br,yr,mr,xr,wr,kr,ds,_r,Cr,Lo,$r,Sr,Ne,Er,xa,Fi,wa,P=class extends ye{constructor(){super(...arguments),c(this,lr),c(this,lo),c(this,dr),c(this,cr),c(this,hr),c(this,ut),c(this,ur),c(this,Lo),c(this,Er),c(this,Fi),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=x(this,Lo,$r).call(this,"y-m-d"),c(this,Qt,void 0),c(this,gr,e=>{this._elTrigger.then(t=>{var o,s;((o=e.relatedTarget)==null?void 0:o.parentElement)!==e.target&&((s=document.getSelection())==null||s.removeAllRanges())})}),c(this,pr,e=>{this._elTrigger.then(t=>{var o,s;(o=document.getSelection())==null||o.removeAllRanges();const i=new Range;i.setStart(t.firstChild,0),i.setEnd(t.lastChild,4),(s=document.getSelection())==null||s.addRange(i)})}),c(this,fr,e=>{this._elField.then(t=>{var o;e.currentTarget===t&&(e.preventDefault(),(o=e.clipboardData)==null||o.setData("text/plain",this.displayValue))})}),c(this,vr,e=>{this._elField.then(t=>{var o;if(e.currentTarget!==t)return;e.preventDefault();const s=(o=e.clipboardData)==null?void 0:o.getData("text/plain");if(!s)return;let i=new Date("-");const n="Invalid Date",a=s.split(this._dateFormatLayout.delimiter);if(a.length===3){const d=this._dateFormatLayout.layout,u=parseInt(a[d.findIndex(f=>f.token==="y")]),p=parseInt(a[d.findIndex(f=>f.token==="m")])-1,m=parseInt(a[d.findIndex(f=>f.token==="d")]);!isNaN(u)&&!isNaN(p)&&!isNaN(m)&&(i=new Date(`${u}-${p+1}-${m}`))}i.toString()===n&&(i=new Date(s),i.toString()===n)||(this.value=i,x(this,ut,$t).call(this))})}),c(this,br,e=>{var t;(t=this._elSpinners[0])==null||t.focus()}),c(this,yr,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,x(this,ut,$t).call(this)}),c(this,mr,e=>{var t;e.stopPropagation(),this._focusedMonth=(t=e.target)==null?void 0:t.value}),c(this,xr,e=>{var t;e.stopPropagation(),this._focusedYear=(t=e.target)==null?void 0:t.value}),c(this,wr,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),c(this,kr,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),c(this,ds,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),x(this,ur,ma).call(this)}),c(this,_r,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;!tt(t||new Date(0),l(this,Qt)||new Date(0))&&(this.value=t,x(this,ut,$t).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=l(this,Qt))}}),c(this,Cr,e=>{const t=Array.from(this._elSpinners).findIndex(o=>o===e.target);if(e.key==="ArrowRight"){const o=this._elSpinners[t+1];o&&o.focus()}if(e.key==="ArrowLeft"){const o=this._elSpinners[t-1];o&&o.focus()}}),c(this,Sr,(e,t)=>{l(this,Ne)[t]=e;const o=new Date;o.setFullYear(parseInt(l(this,Ne).year)),o.setMonth(parseInt(l(this,Ne).month)-1),o.setDate(parseInt(l(this,Ne).day)),o.setHours(12,0,0,0),o.toString()!=="Invalid Date"&&(this.value=o,x(this,ut,$t).call(this))}),c(this,Ne,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=x(this,Lo,$r).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),re.instance.apply(this,"gds-datepicker")}render(){return C`${he(this.label&&!this.hideLabel,()=>C`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info" id="sub-label"><slot name="sub-label"></slot></div>

      <div
        class=${$e({field:!0,small:this.size==="small"})}
        id="field"
        @click=${l(this,br)}
        @copy=${l(this,fr)}
        @paste=${l(this,vr)}
      >
        <div
          class=${$e({input:!0,"is-placeholder":!this.value})}
          @focusout=${l(this,gr)}
        >
          ${Mc(Ac(this._dateFormatLayout.layout,(e,t)=>C`<gds-date-part-spinner
                  id="spinner-${t}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${l(this,Ne)[e.name]}
                  aria-valuemin=${x(this,cr,ba).call(this,e.name)}
                  aria-valuemax=${x(this,hr,ya).call(this,e.name)}
                  aria-label=${x(this,dr,va).call(this,e.name)}
                  aria-describedby="label sub-label message"
                  @keydown=${l(this,Cr)}
                  @change=${o=>l(this,Sr).call(this,o.detail.value,e.name)}
                  @focus=${l(this,pr)}
                  @touchend=${o=>{this.open=!0,o.preventDefault()}}
                ></gds-date-part-spinner>`),C`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${D("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          size=${this.size}
        >
          <gds-icon-calendar></gds-icon-calendar>
        </button>
      </div>

      <div class="form-info" aria-live="polite" id="message">
        <slot name="message">${this.validationMessage}</slot>
      </div>

      <gds-popover
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elField}
        .open=${this.open}
        @gds-ui-state=${l(this,_r)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var t;((t=e.target)==null?void 0:t.id)==="calendar-popover"&&this._elCalendar.then(s=>s.focus())}}
      >
        <div class="header">
          <gds-button
            @click=${l(this,kr)}
            aria-label=${D("Previous month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </gds-button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${l(this,mr)}
            .maxHeight=${300}
            label="${D("Month")}"
            size="small"
            class="month"
            hide-label
          >
            <gds-option value="0">${D("January")}</gds-option>
            <gds-option value="1">${D("February")}</gds-option>
            <gds-option value="2">${D("March")}</gds-option>
            <gds-option value="3">${D("April")}</gds-option>
            <gds-option value="4">${D("May")}</gds-option>
            <gds-option value="5">${D("June")}</gds-option>
            <gds-option value="6">${D("July")}</gds-option>
            <gds-option value="7">${D("August")}</gds-option>
            <gds-option value="8">${D("September")}</gds-option>
            <gds-option value="9">${D("October")}</gds-option>
            <gds-option value="10">${D("November")}</gds-option>
            <gds-option value="11">${D("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${l(this,xr)}
            .maxHeight=${300}
            label="${D("Year")}"
            size="small"
            class="year"
            hide-label
          >
            ${Dc(l(this,Er,xa),e=>e,e=>C`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <gds-button
            @click=${l(this,wr)}
            aria-label=${D("Next month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${l(this,yr)}
          @gds-date-focused=${l(this,ds)}
          .focusedMonth=${this._focusedMonth}
          .focusedYear=${this._focusedYear}
          .value=${this.value}
          .min=${this.min}
          .max=${this.max}
          .showWeekNumbers=${this.showWeekNumbers}
          .disabledWeekends=${this.disabledWeekends}
          .disabledDates=${this.disabledDates}
        ></gds-calendar>

        <div class="footer">
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,x(this,ut,$t).call(this)}}
          >
            ${D("Clear")}
          </gds-button>
          ${Lc(x(this,lr,fa).call(this),ge)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),x(this,lo,ls).call(this,new Date)}}
          >
            ${D("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(!this.value){R(this,Ne,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),o=(e.getMonth()+1).toString().padStart(2,"0"),s=e.getDate().toString().padStart(2,"0");R(this,Ne,{year:t,month:o,day:s})}_handleOpenChange(){this.open&&(R(this,Qt,this.value),this._elCalendar.then(e=>e.focus()))}};Qt=new WeakMap;lr=new WeakSet;fa=async function(){const e=await this.getFocusedDate();let t="",o;return e&&e>this.max?(t=D("Last available date"),o=s=>{s.stopPropagation(),x(this,lo,ls).call(this,this.max)}):e&&e<this.min&&(t=D("First available date"),o=s=>{s.stopPropagation(),x(this,lo,ls).call(this,this.min)}),C`${he(t.length>0,()=>C`<gds-button rank="tertiary" size="small" @click=${o}>
          ${t}
        </gds-button>`,()=>ge)}`};lo=new WeakSet;ls=function(e){const t=new Date(e);this._elCalendar.then(o=>o.focusedDate=t).then(l(this,ds))};dr=new WeakSet;va=function(e){return{year:D("Year"),month:D("Month"),day:D("Day")}[e]};cr=new WeakSet;ba=function(e){return{year:1900,month:1,day:1}[e]};hr=new WeakSet;ya=function(e){return{year:9999,month:12,day:31}[e]};ut=new WeakSet;$t=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};ur=new WeakSet;ma=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};gr=new WeakMap;pr=new WeakMap;fr=new WeakMap;vr=new WeakMap;br=new WeakMap;yr=new WeakMap;mr=new WeakMap;xr=new WeakMap;wr=new WeakMap;kr=new WeakMap;ds=new WeakMap;_r=new WeakMap;Cr=new WeakMap;Lo=new WeakSet;$r=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],o=e.split(t),s=o.findIndex(u=>u==="y"),i=o.findIndex(u=>u==="m"),n=o.findIndex(u=>u==="d");if(s===-1||i===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const d=[s,i,n].sort((u,p)=>u-p).map(u=>o[u]).map(u=>({token:u,name:u==="y"?"year":u==="m"?"month":"day"}));return{delimiter:t,layout:d}};Sr=new WeakMap;Ne=new WeakMap;Er=new WeakSet;xa=function(){var e;const t=this.min.getFullYear(),o=this.max.getFullYear(),s=l(this,Fi,wa),i=(e=this.value)==null?void 0:e.getFullYear();return{*[Symbol.iterator](){s&&(yield i);for(let n=t;n<=o;n++)yield n}}};Fi=new WeakSet;wa=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};P.styles=[H,Oc];P.shadowRootOptions={mode:"open",delegatesFocus:!0};r([h({converter:Di})],P.prototype,"value",2);r([h({converter:Di})],P.prototype,"min",2);r([h({converter:Di})],P.prototype,"max",2);r([h({type:Boolean})],P.prototype,"open",2);r([h()],P.prototype,"label",2);r([h({type:Boolean,attribute:"show-week-numbers"})],P.prototype,"showWeekNumbers",2);r([h()],P.prototype,"size",2);r([h({type:Boolean,attribute:"hide-label"})],P.prototype,"hideLabel",2);r([h()],P.prototype,"dateformat",1);r([h({type:Boolean,attribute:"disabled-weekends"})],P.prototype,"disabledWeekends",2);r([h({converter:Ec,attribute:"disabled-dates"})],P.prototype,"disabledDates",2);r([qe("#calendar-button")],P.prototype,"test_calendarButton",2);r([ie()],P.prototype,"_focusedMonth",2);r([ie()],P.prototype,"_focusedYear",2);r([ie()],P.prototype,"_dateFormatLayout",2);r([qe("#calendar")],P.prototype,"_elCalendar",2);r([qe("#calendar-button")],P.prototype,"_elTrigger",2);r([qe("#field")],P.prototype,"_elField",2);r([kl("[role=spinbutton]")],P.prototype,"_elSpinners",2);r([Q(".input")],P.prototype,"_elInput",2);r([q("value")],P.prototype,"_handleValueChange",1);r([q("open")],P.prototype,"_handleOpenChange",1);P=r([$("gds-datepicker"),Ze()],P);var co=class extends ne{};co._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';co._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>';co._name="chevron-left";co=r([$("gds-icon-chevron-left")],co);var ho=class extends ne{};ho._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';ho._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>';ho._name="chevron-right";ho=r([$("gds-icon-chevron-right")],ho);var uo=class extends ne{};uo._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';uo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>';uo._name="calendar";uo=r([$("gds-icon-calendar")],uo);var Bc=W`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      color: var(--gds-sys-color-base800);
      font-family: inherit;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--gds-space-m);
      height: var(--gds-space-3xl);
      border: var(--gds-space-4xs) solid #6f6f6f;
      border-radius: var(--gds-space-xs);
      padding-inline: var(--gds-space-m);
      cursor: pointer;
      box-sizing: border-box;
      font-size: var(--gds-space-m);
      font-family: inherit;

      // TODO: Update colors to use tokens
      border-color: #6f6f6f;
      color: #1b1b1b;
      background-color: #e2e2e2;

      &.small {
        height: var(--gds-space-xl);
        padding: var(--gds-space-s);
        padding-right: var(--gds-space-xs);
        font-size: calc(var(--gds-space-s) + 2px);

        .icon {
          width: var(--gds-space-l);
          height: var(--gds-space-l);
        }
      }

      &:hover {
        background-color: #cecece;
      }

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        height: var(--gds-space-xl);
        width: var(--gds-space-xl);
      }

      &[aria-expanded='true'] ::part(icon) {
        transform: scaleY(-1);
      }
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    label {
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-book);
      padding-block: var(--gds-space-2xs);
      font-family: inherit;
    }

    input[type='text'] {
      border-radius: var(--gds-space-xs);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-size: inherit;
      line-height: inherit;
      border: none;
      outline: none;
      color: var(--gds-sys-color-base800);
      border-bottom: 1px solid var(--gds-sys-color-base400);
      width: 100%;
      padding: var(--gds-space-m);
      font-weight: var(--gds-text-weight-book);
      flex: 1;
      box-sizing: border-box;
      font-family: inherit;

      &:focus {
        border-color: var(--gds-sys-color-base800);
      }

      &::placeholder {
        color: currrentColor;
        font-family: inherit;
        font-weight: var(--gds-text-weight-book);
        color: var(--gds-sys-color-base800);
      }
    }
  }
`,Vc=Bc,st,Tr,Mr,Ar,Dr,Fr,zr,ka,Wr,_a,Lr,Ca,Wt,xs,U=class extends ye{constructor(){super(),c(this,zr),c(this,Wr),c(this,Lr),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,c(this,st,void 0),c(this,Tr,e=>{const t=e.getBoundingClientRect(),s=window.innerHeight-t.bottom,i=t.top;let n=Math.min(i,this.maxHeight);return s>i&&(n=Math.min(s,this.maxHeight)),`${n-16}px`}),c(this,Mr,e=>{if(!e.currentTarget)return;const t=e.currentTarget;if(this.options.forEach(s=>s.hidden=!1),!t.value)return;this.options.filter(s=>!this.searchFilter(t.value,s)).forEach(s=>s.hidden=!0)}),c(this,Ar,e=>{var t;(t=this._elListbox)==null||t.then(o=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),o.focus();return}})}),c(this,Dr,e=>{var t;if(e.key==="Tab"&&this.searchable){e.preventDefault(),(t=this._elSearchInput)==null||t.focus();return}}),c(this,Fr,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),c(this,Wt,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)}),c(this,xs,e=>{var t;e.key==="Tab"&&!this.searchable&&(e.preventDefault(),this.open=!1,(t=this._elTriggerBtn)==null||t.focus())}),Pn(this)}get type(){return"gds-dropdown"}get options(){return l(this,st)?Array.from(l(this,st)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(l(this,st))return Array.from(l(this,st)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){var e,t;let o;return Array.isArray(this.value)?this.value.length>2?o=D(jl`${this.value.length} selected`):o=this.value.reduce((s,i)=>{var n;return s+((n=this.options.find(a=>a.value===i))==null?void 0:n.innerHTML)+", "},"").slice(0,-2):o=(e=this.options.find(s=>s.selected))==null?void 0:e.innerHTML,o||((t=this.placeholder)==null?void 0:t.innerHTML)||""}connectedCallback(){super.connectedCallback(),re.instance.apply(this,"gds-dropdown"),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange()})}render(){return C`
      ${he(this.label&&!this.hideLabel,()=>C`<label for="trigger">${this.label}</label>`)}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${e=>this.syncPopoverWidth?`${e.offsetWidth}px`:"auto"}
        .calcMaxHeight=${l(this,Tr)}
        .disableMobileStyles=${this.disableMobileStyles}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <button
          id="trigger"
          name="trigger"
          aria-haspopup="listbox"
          slot="trigger"
          role="combobox"
          aria-owns="listbox"
          aria-controls="listbox"
          aria-expanded="${this.open}"
          aria-label="${this.label}"
          part="trigger"
          class=${$e({small:this.size==="small"})}
        >
          <slot name="trigger">
            <span>${pa(this.displayValue)}</span>
          </slot>
          <div class="icon">
            <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
          </div>
        </button>
        ${he(this.searchable,()=>C`<input
              id="searchinput"
              type="text"
              aria-label="${D("Filter available options")}"
              placeholder="${D("Search")}"
              @keydown=${l(this,Ar)}
              @input=${l(this,Mr)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${ce(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${x(this,zr,ka)}"
          @gds-focus="${l(this,Fr)}"
          @keydown=${l(this,Dr)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var e,t;if(this.requestUpdate(),R(this,st,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=(e=this.options[0])==null?void 0:e.value:!this.placeholder&&this.options.find(o=>this.compareWith(o.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=(t=this.options[0])==null?void 0:t.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_onOpenChange(){var e;const t=this.open;(e=l(this,st))==null||e.forEach(s=>s.hidden=!t),t?x(this,Wr,_a).call(this):(x(this,Lr,Ca).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const o=this.options.find(s=>s.selected);this.updateComplete.then(()=>o?.scrollIntoView()),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:t},bubbles:!0,composed:!0}))}};st=new WeakMap;Tr=new WeakMap;Mr=new WeakMap;Ar=new WeakMap;Dr=new WeakMap;Fr=new WeakMap;zr=new WeakSet;ka=function(){this._elListbox.then(e=>{var t;this.multiple?this.value=e.selection.map(o=>o.value):(this.value=(t=e.selection[0])==null?void 0:t.value,this.open=!1,setTimeout(()=>{var o;return(o=this._elTriggerBtn)==null?void 0:o.focus()},0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})};Wr=new WeakSet;_a=function(){this.addEventListener("blur",l(this,Wt)),this.addEventListener("gds-blur",l(this,Wt)),this.addEventListener("keydown",l(this,xs))};Lr=new WeakSet;Ca=function(){this.removeEventListener("blur",l(this,Wt)),this.removeEventListener("gds-blur",l(this,Wt)),this.removeEventListener("keydown",l(this,xs))};Wt=new WeakMap;xs=new WeakMap;U.styles=[H,Vc];U.shadowRootOptions={mode:"open",delegatesFocus:!0};r([h()],U.prototype,"label",2);r([h({type:Boolean,reflect:!0})],U.prototype,"open",2);r([h({type:Boolean,reflect:!0})],U.prototype,"searchable",2);r([h({type:Boolean,reflect:!0})],U.prototype,"multiple",2);r([h()],U.prototype,"compareWith",2);r([h()],U.prototype,"searchFilter",2);r([h({type:Boolean,attribute:"sync-popover-width"})],U.prototype,"syncPopoverWidth",2);r([h({type:Number,attribute:"max-height"})],U.prototype,"maxHeight",2);r([h()],U.prototype,"size",2);r([h({type:Boolean,attribute:"hide-label"})],U.prototype,"hideLabel",2);r([h()],U.prototype,"disableMobileStyles",2);r([Q("#trigger")],U.prototype,"_elTriggerBtn",2);r([qe("#listbox")],U.prototype,"_elListbox",2);r([Q("#searchinput")],U.prototype,"_elSearchInput",2);r([wi({attributes:!0,childList:!0,subtree:!0,characterData:!0})],U.prototype,"_handleLightDOMChange",1);r([q("value")],U.prototype,"_handleValueChange",1);r([q("open")],U.prototype,"_onOpenChange",1);U=r([$("gds-dropdown")],U);var Rc=W`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`,Nc=Rc,Jt,Or,Lt=class extends V{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,c(this,Jt,Xn()),c(this,Or,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(o=>{o!==t&&(o.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))}),new qn(this)}get navigableItems(){return this.visibleOptionElements}get options(){return l(this,Jt).value?Zn(l(this,Jt).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(o=>this.compareWith(o,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),re.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",l(this,Or))}focus(){var e;(e=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])==null||e.focus()}render(){return C`<slot ${Kn(l(this,Jt))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};Jt=new WeakMap;Or=new WeakMap;Lt.styles=Nc;r([h({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],Lt.prototype,"multiple",2);r([h()],Lt.prototype,"compareWith",2);r([q("multiple")],Lt.prototype,"_rerenderOptions",1);Lt=r([$("gds-listbox")],Lt);var gt,Oo,Br,at=class extends ea(V){constructor(){super(),c(this,Oo),c(this,gt,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",x(this,Oo,Br)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),x(this,Oo,Br).call(this,e))})}get hidden(){return l(this,gt)}set hidden(e){this.isPlaceholder||(R(this,gt,e==="true"||e===!0),this.setAttribute("aria-hidden",e.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&(R(this,gt,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then(()=>re.instance.apply(this,"gds-option"))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?(R(this,gt,!0),this.setAttribute("aria-hidden","true")):(R(this,gt,!1),this.setAttribute("aria-hidden","false"))}render(){var e;const t=(e=this.parentElement)==null?void 0:e.multiple,o=C`
      <span class="checkbox ${$e({checked:this.selected})}">
        ${this.selected?C`<gds-icon-checkmark stroke="4"></gds-icon-checkmark>`:""}
      </span>
    `;return t||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),C`<div>${he(t,()=>o)} <slot></slot></div>`}};gt=new WeakMap;Oo=new WeakSet;Br=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))};at.styles=[H,ta];r([h()],at.prototype,"value",2);r([h({attribute:"aria-hidden",reflect:!0})],at.prototype,"hidden",1);r([h({attribute:"aria-selected",reflect:!0})],at.prototype,"selected",2);r([h({type:Boolean,reflect:!0})],at.prototype,"isPlaceholder",2);r([q("isplaceholder")],at.prototype,"_handlePlaceholderStatusChange",1);at=r([$("gds-option")],at);var go=class extends ne{};go._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';go._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>';go._name="chevron-bottom";go=r([$("gds-icon-chevron-bottom")],go);var po=class extends ne{};po._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';po._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99454C22.2979 3.40464 22.4157 4.18729 22.0056 4.74263L10.0056 20.9926C9.80433 21.2652 9.50107 21.4443 9.16524 21.4891C8.82942 21.5339 8.4898 21.4404 8.22417 21.2301L2.22417 16.4801C1.6829 16.0516 1.59149 15.2655 2.01999 14.7242C2.4485 14.1829 3.23466 14.0915 3.77593 14.52L8.76241 18.4677L19.9945 3.25753C20.4046 2.70218 21.1873 2.58444 21.7426 2.99454Z" fill="currentColor"/>';po._name="checkmark";po=r([$("gds-icon-checkmark")],po);var Ie,Bo,Vo,Ro,No,Vr,Rr,Nr,Ir,$a,St,Xt,Io,Pr,Et,Kt,eo,Po,Le=class extends gs{constructor(){super(...arguments),c(this,Ir),c(this,St),c(this,Io),c(this,Et),c(this,eo),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=x(this,Io,Pr).call(this,this.value,this.length),c(this,Ie,""),c(this,Bo,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=x(this,Et,Kt).call(this,e+1),x(this,St,Xt).call(this)}),c(this,Vo,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=x(this,Et,Kt).call(this,e-1),x(this,St,Xt).call(this)}),c(this,Ro,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),c(this,No,()=>{x(this,eo,Po).call(this)}),c(this,Vr,()=>{l(this,Ie)!==""&&(x(this,eo,Po).call(this),this.value=x(this,Et,Kt).call(this,parseInt(this.value.toString())),x(this,St,Xt).call(this))}),c(this,Rr,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?l(this,Vo).call(this):l(this,Bo).call(this)}),c(this,Nr,e=>{let t=!1;if(e.key==="ArrowUp")l(this,Bo).call(this),t=!0;else if(e.key==="ArrowDown")l(this,Vo).call(this),t=!0;else{const o=parseInt(e.key);isNaN(o)||(l(this,Ie).length<this.length&&(R(this,Ie,l(this,Ie)+o.toString()),this.value=parseInt(l(this,Ie))),l(this,Ie).length===this.length&&(this.value=x(this,Et,Kt).call(this,this.value),x(this,eo,Po).call(this),x(this,Ir,$a).call(this),x(this,St,Xt).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",l(this,Rr)),this.addEventListener("keydown",l(this,Nr)),this.addEventListener("blur",l(this,Vr)),this.addEventListener("focus",l(this,No)),this.addEventListener("click",l(this,Ro)),this.addEventListener("mousedown",l(this,Ro))}focus(e){super.focus(e),l(this,No).call(this)}render(){return C`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=x(this,Io,Pr).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};Ie=new WeakMap;Bo=new WeakMap;Vo=new WeakMap;Ro=new WeakMap;No=new WeakMap;Vr=new WeakMap;Rr=new WeakMap;Nr=new WeakMap;Ir=new WeakSet;$a=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof Le){e.focus();break}e=e.nextElementSibling}};St=new WeakSet;Xt=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};Io=new WeakSet;Pr=function(e,t){return String(e).padStart(t,"0")};Et=new WeakSet;Kt=function(e){return Math.max(this.min,Math.min(this.max,e))};eo=new WeakSet;Po=function(){R(this,Ie,"")};Le.formAssociated=!0;r([h({type:Number})],Le.prototype,"value",2);r([h({type:Number})],Le.prototype,"length",2);r([h({type:Number,attribute:"aria-valuemin"})],Le.prototype,"min",2);r([h({type:Number,attribute:"aria-valuemax"})],Le.prototype,"max",2);r([ie()],Le.prototype,"displayValue",2);r([q("value")],Le.prototype,"_refreshDisplayValue",1);Le=r([$("gds-date-part-spinner")],Le);var Hr=new Set;function Ic(){Ln.instance.injectGlobalStyles("dialog-scroll-lock",W`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function Pc(e){if(Hr.add(e),!document.documentElement.classList.contains("gds-scroll-lock")){const t=Hc()+Gc();let o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),t<2&&(o=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",o),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${t}px`)}}function En(e){Hr.delete(e),Hr.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function Hc(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Gc(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}var jc=W`
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
          backdrop-filter: blur(0);
        }
      }

      &::backdrop {
        transition: 0.3s;
        background: rgba(100, 100, 100, 0.3);
        backdrop-filter: blur(3px);
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
`;Ic();var pt,Gr,jr,Yr,Ho,Ur,Sa,zi,Ge=class extends V{constructor(){super(...arguments),c(this,Ur),this.open=!1,this.variant="default",c(this,pt,void 0),c(this,Gr,e=>{const o=e.target.returnValue;this.close(o||"native-close"),o!=="prop-change"&&l(this,jr).call(this,o)}),c(this,jr,e=>{this.dispatchEvent(new CustomEvent("gds-close",{detail:e,bubbles:!1,composed:!1})),l(this,Ho).call(this,e)}),c(this,Yr,e=>{this.dispatchEvent(new CustomEvent("gds-show",{detail:e,bubbles:!1,composed:!1})),l(this,Ho).call(this,e)}),c(this,Ho,e=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason:e,open:this.open},bubbles:!1,composed:!1}))}),c(this,zi,e=>{this.show("slotted-trigger")})}show(e){this.open=!0,e&&l(this,Yr).call(this,e)}close(e){R(this,pt,e),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),En(this)}render(){return C`<slot
        name="trigger"
        @slotchange=${x(this,Ur,Sa)}
      ></slot>
      ${he(this.open,()=>C`<dialog
            @close=${l(this,Gr)}
            class=${this.variant}
            aria-describedby="heading"
          >
            <gds-card
              class="card"
              display="flex"
              variant="secondary"
              shadow="xl"
              padding="s"
              border-radius=${this.variant==="default"?"s":"0"}
            >
              <gds-flex
                justify-content="space-between"
                border="0 0 4xs/primary 0"
                margin="0 -s"
                padding="0 s s"
                background-color="secondary"
              >
                <h2 id="heading">${this.heading}</h2>
                <gds-button
                  id="close-btn"
                  rank="secondary"
                  size="small"
                  label=${D("Close")}
                  @click=${()=>this.close("btn-close")}
                  ><gds-icon-cross-large></gds-icon-cross-large
                ></gds-button>
              </gds-flex>
              <gds-container
                id="content"
                padding="m 0"
                overflow="auto"
                flex="1"
              >
                <slot></slot>
              </gds-container>
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
                    >${D("Cancel")}</gds-button
                  >
                  <gds-button value="ok" @click=${()=>this.close("btn-ok")}
                    >Ok</gds-button
                  >
                </slot>
              </gds-flex>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){var e;this.open?(R(this,pt,void 0),this.updateComplete.then(()=>{var t;(t=this._elDialog)==null||t.showModal(),Pc(this)})):(R(this,pt,l(this,pt)||"prop-change"),(e=this._elDialog)==null||e.close(l(this,pt)),En(this),this.requestUpdate("open"))}};pt=new WeakMap;Gr=new WeakMap;jr=new WeakMap;Yr=new WeakMap;Ho=new WeakMap;Ur=new WeakSet;Sa=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const e=this._elTriggerSlot.assignedElements()[0];e?.addEventListener("click",l(this,zi)),e?.setAttribute("aria-haspopup","dialog")}};zi=new WeakMap;Ge.styles=[jc];r([h({type:Boolean,reflect:!0})],Ge.prototype,"open",2);r([h()],Ge.prototype,"heading",2);r([h()],Ge.prototype,"variant",2);r([Q("dialog")],Ge.prototype,"_elDialog",2);r([Q('slot[name="trigger"]')],Ge.prototype,"_elTriggerSlot",2);r([q("open")],Ge.prototype,"_handleOpenChange",1);Ge=r([$("gds-dialog"),Ze()],Ge);var fo=class extends ne{};fo._regularSVG='<path d="M4.75 4.75L19.25 19.25M19.25 4.75L4.75 19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';fo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.11612 4.11612C4.60427 3.62796 5.39573 3.62796 5.88388 4.11612L12 10.2322L18.1161 4.11612C18.6043 3.62796 19.3957 3.62796 19.8839 4.11612C20.372 4.60427 20.372 5.39573 19.8839 5.88388L13.7678 12L19.8839 18.1161C20.372 18.6043 20.372 19.3957 19.8839 19.8839C19.3957 20.372 18.6043 20.372 18.1161 19.8839L12 13.7678L5.88388 19.8839C5.39573 20.372 4.60427 20.372 4.11612 19.8839C3.62796 19.3957 3.62796 18.6043 4.11612 18.1161L10.2322 12L4.11612 5.88388C3.62796 5.39573 3.62796 4.60427 4.11612 4.11612Z" fill="currentColor"/>';fo._name="cross-large";fo=r([$("gds-icon-cross-large")],fo);var Yc=W`
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
`,Uc=Yc,xt=class extends V{constructor(){super(...arguments),this.level="2"}render(){return C`<hr />`}};xt.styles=[H,Uc];r([h()],xt.prototype,"level",2);r([b({valueTemplate:function(e){const[t,o]=e.split("/"),s=a=>{const d=a.trim();return d.startsWith("#")||d.startsWith("rgb(")||d.startsWith("rgba(")||d.startsWith("hsl(")||d.startsWith("hsla(")},i=(a,d)=>`var(--gds-color-l${a}-border-${d})`;return((a,d)=>s(a)?d?`color-mix(in srgb, ${a} ${parseFloat(d)*100}%, transparent 0%)`:a:i(this.level,a))(t,o)}})],xt.prototype,"color",2);r([b({property:"--_size",valueTemplate:e=>`var(--gds-space-${e})`})],xt.prototype,"size",2);r([b({property:"opacity",valueTemplate:e=>e})],xt.prototype,"opacity",2);xt=r([$("gds-divider")],xt);var qc=W`
  :host {
    display: flex;
    z-index: 1050;
    position: fixed;
    inset: auto var(--gds-space-3xl) var(--gds-space-3xl) auto;
  }
  .button {
    box-shadow: var(--gds-shadow-m);
    block-size: calc(var(--_block-size) + var(--gds-space-xs));
    width: max-content;
  }
`,Zc=qc,vo=class extends te{connectedCallback(){super.connectedCallback(),this._dynamicStylesController.inject("FAB_styles",Zc)}};r([b({valueTemplate:e=>e})],vo.prototype,"position",2);r([b({valueTemplate:e=>e})],vo.prototype,"transform",2);r([b({valueTemplate:e=>e})],vo.prototype,"inset",2);vo=r([$("gds-fab")],vo);function Ea(){return(e,t,o)=>{const s=e.connectedCallback,i=e.disconnectedCallback;e.connectedCallback=function(){s?.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{var n;(n=o.value)==null||n.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){i?.call(this),this.__resizeObservers[t].disconnect()}}}var Qc=W`
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
`,qr,Zr,Go,Qr,Ta,Jr,Ma,Te=class extends ye{constructor(){super(...arguments),c(this,Qr),c(this,Jr),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,c(this,qr,e=>{const t=this.chips.find(o=>o===e.target||o.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(o=>o!==t.value):this.value=[...this.value,t.value]:this.value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0})))}),c(this,Zr,3),c(this,Go,0)}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return C`<div
      class="chips ${$e(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${l(this,qr)}
        @slotchange=${x(this,Jr,Ma)}
        role="none"
      ></slot>
    </div>`}_getValidityAnchor(){return this}_handleResize(){if(!this.rowCollapse)return;const e=x(this,Qr,Ta).call(this),t=this.offsetHeight,o=this.offsetWidth;t>=e*l(this,Zr)&&(this._collapsed=!0,R(this,Go,o)),o>l(this,Go)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})}))}};qr=new WeakMap;Zr=new WeakMap;Go=new WeakMap;Qr=new WeakSet;Ta=function(){var e;return((e=this.chips[0])==null?void 0:e.offsetHeight)||0};Jr=new WeakSet;Ma=function(){var e;const t=(e=this.chips.find(o=>o.selected))==null?void 0:e.value;t&&(this.value=t)};Te.styles=[Qc];r([h({converter:Tc})],Te.prototype,"value",2);r([h({type:Boolean})],Te.prototype,"multiple",2);r([h()],Te.prototype,"label",2);r([h({type:Boolean,attribute:"row-collapse"})],Te.prototype,"rowCollapse",2);r([ie()],Te.prototype,"_collapsed",2);r([Q("slot")],Te.prototype,"_elSlot",2);r([Ea()],Te.prototype,"_handleResize",1);r([q("value")],Te.prototype,"_updateSelectedFromValue",1);Te=r([$("gds-filter-chips")],Te);var Jc=W`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`,Ot=class extends V{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),re.instance.apply(this,"gds-filter-chip"),this._button.then(e=>{re.instance.apply(e,"gds-button")})}render(){const e={"btn-p":!this.selected};return C`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${$e(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};Ot.styles=[Jc];r([h({reflect:!0,type:Boolean})],Ot.prototype,"selected",2);r([h()],Ot.prototype,"value",2);r([qe(bl("gds-button"))],Ot.prototype,"_button",2);Ot=r([$("gds-filter-chip")],Ot);var Xc=W`
  :host {
    --_c: 12;
    --_grid-col: repeat(var(--_c), 1fr);
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
`,Kc=Xc,Bt=class extends M{constructor(){super(),this.display="grid",this.width="100%"}render(){return C`<slot></slot>`}};Bt.styles=[H,Kc];r([b({property:"--_c",valueTemplate:e=>e})],Bt.prototype,"columns",2);r([b({styleTemplate:(e,t)=>{const o=t[0];return`--_gap-column: ${t[1]||o}; --_gap-row: ${o};`}})],Bt.prototype,"gap",2);r([b({property:"--_col-width",valueTemplate:e=>`${e}px`})],Bt.prototype,"auto-columns",2);Bt=r([$("gds-grid")],Bt);var Xr=class extends V{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),re.instance.apply(this,"gds-grouped-list")}render(){return C`${he(this.label,()=>C`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};r([h()],Xr.prototype,"label",2);Xr=r([$("gds-grouped-list")],Xr);var Tn=class extends V{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return C`<slot></slot>`}};Tn=r([$("gds-list-item")],Tn);var bo=class extends ne{};bo._regularSVG='<path d="M19.25 9.25V17.25M15.25 17.25V9.25M4.75 9.25V17.25M8.75 17.25V9.25M2.75 7.17308L12 2.5L21.25 7.17308V9.25H2.75V7.17308ZM2.75 20.25H21.25L20.25 17.25H3.75L2.75 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>';bo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3382 1.83058C12.1255 1.72314 11.8745 1.72314 11.6618 1.83058L2.41181 6.50365C2.15926 6.63125 2.00001 6.89012 2.00001 7.17308V9.25C2.00001 9.66421 2.33579 10 2.75001 10H4.00001V16.5H3.75001C3.42718 16.5 3.14058 16.7066 3.03849 17.0128L2.03849 20.0128C1.96226 20.2415 2.00061 20.493 2.14157 20.6885C2.28254 20.8841 2.50892 21 2.75001 21H21.25C21.4911 21 21.7175 20.8841 21.8584 20.6885C21.9994 20.493 22.0378 20.2415 21.9615 20.0128L20.9615 17.0128C20.8594 16.7066 20.5728 16.5 20.25 16.5H20V10H21.25C21.6642 10 22 9.66421 22 9.25V7.17308C22 6.89012 21.8408 6.63125 21.5882 6.50365L12.3382 1.83058ZM16 10H18.5V16.5H16V10ZM8.00001 16.5H5.50001V10H8.00001V16.5ZM9.50001 16.5V10H14.5V16.5H9.50001Z" fill="currentColor"/>';bo._name="bank";bo=r([$("gds-icon-bank")],bo);var eh=W`
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
`,th=eh,xe=class extends V{render(){return C`<img src="${this.src}" alt="${this.alt}" />`}};xe.styles=[H,th];r([b({property:"aspect-ratio",valueTemplate:e=>e})],xe.prototype,"aspect-ratio",2);r([b({property:"object-position",selector:"img",valueTemplate:e=>e})],xe.prototype,"position",2);r([b({property:"inset",valueTemplate:e=>e})],xe.prototype,"inset",2);r([b({property:"width",valueTemplate:e=>e})],xe.prototype,"width",2);r([b({property:"height",valueTemplate:e=>e})],xe.prototype,"height",2);r([b({property:"opacity",valueTemplate:e=>e})],xe.prototype,"opacity",2);r([b({property:"object-fit",selector:"img",valueTemplate:e=>e})],xe.prototype,"object-fit",2);r([h()],xe.prototype,"src",2);r([h()],xe.prototype,"alt",2);r([b({property:"border-radius",valueTemplate:e=>`var(--gds-space-${e})`})],xe.prototype,"border-radius",2);xe=r([$("gds-img")],xe);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Aa=(e,t,o)=>{for(const s of t)if(s[0]===e)return(0,s[1])();return o?.()};var oh=W`
  @layer tokens, a11y, base, simplified;

  @layer tokens {
    :host {
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      :host {
        --_transition: none;
      }
    }

    @media (prefers-reduced-transparency: reduce) {
      :host {
        --_transparency: 1;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      contain: layout;
      isolation: isolate;
      gap: var(--gds-space-xs);
    }

    :host([disabled]) {
      color: var(--gds-color-l3-content-disabled);
      pointer-events: none;
    }

    :host([size='small']) input {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
    }

    .field {
      transition: var(--_transition);
      position: relative;
      outline: 2px solid transparent;
      outline-offset: 2px;

      &:has(input:focus-visible) {
        border-color: var(--gds-color-l3-border-primary);
        outline-color: currentColor;
      }

      &.invalid:has(input:focus-visible) {
        border-color: var(--gds-color-l3-border-negative);
      }
    }

    @media (hover: hover) {
      .field {
        &:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-secondary),
            var(--gds-color-l3-states-light-hover)
          );
        }

        &.invalid:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-negative-secondary),
            var(--gds-color-l3-states-negative-hover)
          );
        }
      }
    }

    input {
      appearance: none;
      background-color: transparent;
      border: 0;
      box-sizing: border-box;
      font-family: inherit;
      margin: unset;
      outline: none;
      overflow: hidden;
      padding: unset;
      transition: var(--_transition);
      width: 100%;
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      line-height: 18px;
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-m);
      max-width: var(--gds-space-m);
      display: flex;
    }

    slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-l);
      display: flex;
    }
  }

  @layer simplified {
  }
`,Kr,Da,ei,Fa,Wi,Li,Oi,Bi,Vi,Ri,za,Ni,Wa,Ii,La,Pi,Oa,Hi,Ba,Gi,Va,fe=class extends ye{constructor(){super(),c(this,Kr),c(this,ei),c(this,Ri),c(this,Ni),c(this,Ii),c(this,Pi),c(this,Hi),c(this,Gi),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.size="large",this.trailSlotOccupied=!1,c(this,Wi,e=>["type","placeholder","required"].includes(e.name)),c(this,Li,e=>{const t=e.target;this.value=t.value}),c(this,Oi,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),c(this,Bi,()=>{this.elInputAsync.then(e=>e.focus())}),c(this,Vi,()=>{this.value="",this.dispatchEvent(new Event("gds-input-cleared",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return C`${Aa(this.variant,[["default",()=>x(this,Kr,Da).call(this)],["floating-label",()=>x(this,ei,Fa).call(this)]])}`}_getValidityAnchor(){return this.elInput}};Kr=new WeakSet;Da=function(){return C`
      <gds-form-control-header class="size-${this.size}">
        <label for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text"
          >${this.supportingText}</span
        >
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>

      <gds-flex
        level="3"
        position="relative"
        align-items="center"
        justify-content="center"
        gap="${this.size==="small"?"2xs":"xs"}"
        padding="${this.size==="small"?"xs s":this.trailSlotOccupied?"xs m":"xs xs xs m"}"
        min-block-size="${this.size==="small"?"xl":"3xl"}"
        block-size="${this.size==="small"?"xl":"3xl"}"
        border-radius="xs"
        .background=${this.disabled?"disabled":this.invalid?"negative-secondary":"secondary"}
        .border=${this.disabled?"":this.invalid?"4xs/negative":"4xs/secondary"}
        class="field ${this.invalid?"invalid":""}"
        @click=${l(this,Bi)}
        cursor="text"
        color="${this.disabled?"disabled":this.invalid?"negative":"tertiary"}"
      >
        ${x(this,Ri,za).call(this)} ${x(this,Pi,Oa).call(this)}
        <gds-flex gap="xs" align-items="center">
          ${x(this,Hi,Ba).call(this)} ${x(this,Ni,Wa).call(this)}
        </gds-flex>
      </gds-flex>

      <gds-form-control-footer
        class="size-${this.size}"
        .charCounter=${l(this,Gi,Va)&&this.maxlength-this.value.length}
        .validationMessage=${this.invalid&&this.validationMessage}
      ></gds-form-control-footer>
    `};ei=new WeakSet;Fa=function(){return ge};Wi=new WeakMap;Li=new WeakMap;Oi=new WeakMap;Bi=new WeakMap;Vi=new WeakMap;Ri=new WeakSet;za=function(){return C` <slot name="lead"></slot> `};Ni=new WeakSet;Wa=function(){return C`
      <slot name="trail" @slotchange=${x(this,Ii,La)}></slot>
    `};Ii=new WeakSet;La=function(e){const o=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=o.length>0&&o.some(s=>{var i;return s.nodeType===Node.ELEMENT_NODE||s.nodeType===Node.TEXT_NODE&&((i=s.textContent)==null?void 0:i.trim())!==""})};Pi=new WeakSet;Oa=function(){return C`
      <input
        @input=${l(this,Li)}
        @change=${l(this,Oi)}
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text"
        aria-invalid=${this.invalid}
        placeholder=" "
        ${_i(l(this,Wi))}
      />
    `};Hi=new WeakSet;Ba=function(){return this.clearable&&this.value.length>0?C`
        <gds-button
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${D("Clear input")}"
          @click=${l(this,Vi)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:ge};Gi=new WeakSet;Va=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};fe.styles=[H,oh];r([h()],fe.prototype,"value",2);r([h()],fe.prototype,"label",2);r([h({attribute:"supporting-text"})],fe.prototype,"supportingText",2);r([h({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],fe.prototype,"showExtendedSupportingText",2);r([h({attribute:"disabled",type:Boolean,reflect:!0})],fe.prototype,"disabled",2);r([h({type:Boolean})],fe.prototype,"clearable",2);r([h({type:Number})],fe.prototype,"maxlength",2);r([h({type:String})],fe.prototype,"variant",2);r([h({type:String})],fe.prototype,"size",2);r([qe("input")],fe.prototype,"elInputAsync",2);r([Q("input")],fe.prototype,"elInput",2);r([ie()],fe.prototype,"trailSlotOccupied",2);fe=r([$("gds-input"),Ze()],fe);var sh=W`
  @layer base, reset, transitional-styles;
  @layer base {
    #label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: var(--gds-text-line-height-detail-m);

      & > div {
        display: flex;
        flex-direction: column;
      }
    }

    ::slotted(label) {
      font-weight: var(--gds-text-weight-book);
    }

    :host(.size-small) {
      & slot[name='supporting-text'],
      & ::slotted(label) {
        font-size: var(--gds-text-size-detail-s);
        line-height: var(--gds-text-line-height-detail-s);
      }
    }

    #extended-supporting-text {
      opacity: 1;
      transition: var(--_transition);
      font-size: var(--gds-text-size-body-s);
      line-height: var(--gds-text-line-height-body-s);
      border-radius: var(--gds-space-xs);
      background-color: var(--gds-color-l3-background-secondary);
      color: var(--gds-color-l3-content-tertiary);
      max-height: var(--_max-height);

      &[aria-hidden='false'] {
        margin: var(--gds-space-2xs) 0 0 0;
        padding: var(--gds-space-s) var(--gds-space-m);
      }

      &[aria-hidden='true'] {
        max-height: 0;
        opacity: 0;
        translate: 0 2px;
        padding: 0 var(--gds-space-m);
        margin: 0;
        overflow: hidden;
      }
    }
  }
`,ji,Ra,ti,oi,si,Na,Vt=class extends V{constructor(){super(...arguments),c(this,ji),c(this,si),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,c(this,ti,()=>C`
      <gds-button
        size="small"
        rank="tertiary"
        label="${D("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${l(this,oi)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),c(this,oi,()=>{var e;this.showExtendedSupportingText=!this.showExtendedSupportingText,(e=this._extendedSupportingText)==null||e.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))})}render(){return C`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${he(this._hasExtendedSupportingText,l(this,ti))}
      </div>

      ${x(this,si,Na).call(this)}
    `}};ji=new WeakSet;Ra=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};ti=new WeakMap;oi=new WeakMap;si=new WeakSet;Na=function(){return C`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${x(this,ji,Ra)}
        ></slot>
      </div>
    `};Vt.styles=[sh];r([h({type:Boolean,reflect:!0})],Vt.prototype,"showExtendedSupportingText",2);r([ie()],Vt.prototype,"_hasExtendedSupportingText",2);r([Q("#extended-supporting-text")],Vt.prototype,"_extendedSupportingText",2);Vt=r([$("gds-form-control-header"),Ze()],Vt);var rh=W`
  @layer base, reset, transitional-styles;
  @layer base {
    :host > *:not(style) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--gds-space-xl);
    }

    .error-message {
      display: flex;
      align-items: flex-start;
      gap: var(--gds-space-xs);
      margin-top: var(--gds-space-2xs);
      font-weight: var(--gds-text-weight-book);
      font-size: var(--gds-text-size-detail-s);
      color: var(--gds-color-l3-content-negative);
    }

    [gds-element^='gds-icon'] {
      width: 18px;
      height: 18px;
    }

    :host(.size-small) {
      & .error-message {
        font-size: var(--gds-text-size-detail-xs);
        line-height: var(--gds-text-line-height-detail-s);
        gap: var(--gds-space-2xs);
      }
      & [gds-element^='gds-icon'] {
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-right: 2px;
      }
    }
  }
`,ri,Ia,yo=class extends V{constructor(){super(...arguments),c(this,ri)}render(){return C`<div aria-live="polite">
      <div class="error-message">
        ${he(this.validationMessage,()=>C`
            <gds-icon-triangle-exclamation
              solid
            ></gds-icon-triangle-exclamation>
            ${this.validationMessage}
          `)}
      </div>
      <div class="char-counter">
        ${he(Number.isInteger(this.charCounter),()=>x(this,ri,Ia).call(this,this.charCounter))}
      </div>
    </div>`}};ri=new WeakSet;Ia=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",C`<gds-badge variant="${t}">${e}</gds-badge>`};yo.styles=[rh];r([h({type:Number})],yo.prototype,"charCounter",2);r([h()],yo.prototype,"validationMessage",2);yo=r([$("gds-form-control-footer")],yo);var mo=class extends ne{};mo._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.375 8C11.375 8.34518 11.6548 8.625 12 8.625C12.3452 8.625 12.625 8.34518 12.625 8C12.625 7.65482 12.3452 7.375 12 7.375C11.6548 7.375 11.375 7.65482 11.375 8Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>';mo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>';mo._name="circle-info";mo=r([$("gds-icon-circle-info")],mo);var xo=class extends ne{};xo._regularSVG='<path d="M12 2.75L12.6457 2.36845C12.5108 2.1401 12.2652 2 12 2C11.7348 2 11.4892 2.1401 11.3543 2.36845L12 2.75ZM2.25 19.25L1.60431 18.8685C1.4673 19.1003 1.46512 19.3878 1.59859 19.6217C1.73207 19.8556 1.9807 20 2.25 20V19.25ZM21.75 19.25V20C22.0193 20 22.2679 19.8556 22.4014 19.6217C22.5349 19.3878 22.5327 19.1003 22.3957 18.8685L21.75 19.25ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75H11.25ZM12.75 15.74C12.75 15.3258 12.4142 14.99 12 14.99C11.5858 14.99 11.25 15.3258 11.25 15.74H12.75ZM11.3543 2.36845L1.60431 18.8685L2.89569 19.6315L12.6457 3.13155L11.3543 2.36845ZM2.25 20H21.75V18.5H2.25V20ZM22.3957 18.8685L12.6457 2.36845L11.3543 3.13155L21.1043 19.6315L22.3957 18.8685ZM11.25 9.75V13.25H12.75V9.75H11.25ZM11.5 15.75C11.5 15.4739 11.7239 15.25 12 15.25V16.75C12.5523 16.75 13 16.3023 13 15.75H11.5ZM12 15.25C12.2761 15.25 12.5 15.4739 12.5 15.75H11C11 16.3023 11.4477 16.75 12 16.75V15.25ZM12.5 15.75C12.5 16.0261 12.2761 16.25 12 16.25V14.75C11.4477 14.75 11 15.1977 11 15.75H12.5ZM12 16.25C11.7239 16.25 11.5 16.0261 11.5 15.75H13C13 15.1977 12.5523 14.75 12 14.75V16.25ZM12.75 15.75V15.74H11.25V15.75H12.75Z" fill="currentColor"/>';xo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5108 2.1401 12.6457 2.36845L22.3957 18.8685C22.5327 19.1003 22.5349 19.3878 22.4014 19.6217C22.2679 19.8556 22.0193 20 21.75 20H2.25C1.9807 20 1.73207 19.8556 1.59859 19.6217C1.46512 19.3878 1.4673 19.1003 1.60431 18.8685L11.3543 2.36845C11.4892 2.1401 11.7348 2 12 2ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z" fill="currentColor"/>';xo._name="triangle-exclamation";xo=r([$("gds-icon-triangle-exclamation")],xo);var ih=W`
  @layer core, link;

  @layer core {
    :host {
      display: inline-block;
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
      font-weight: var(--gds-text-weight-book);
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
`,nh=ih,ii,Pa,je=class extends V{constructor(){super(),c(this,ii),this.href=""}render(){return Nt`
      <a
        href=${ce(this.href)}
        target=${ce(this.target)}
        rel=${ce(this.rel||l(this,ii,Pa))}
        download=${ce(this.download)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};ii=new WeakSet;Pa=function(){return this.target==="_blank"?"noreferrer noopener":void 0};je.styles=[H,j(nh)];je.shadowRootOptions={mode:"open",delegatesFocus:!0};r([h()],je.prototype,"href",2);r([h()],je.prototype,"target",2);r([h()],je.prototype,"rel",2);r([h()],je.prototype,"download",2);r([b({valueTemplate:e=>e,selector:"a"})],je.prototype,"text-decoration",2);je=r([$("gds-link")],je);var ah=W`
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
`,lh=ah,Ye=class extends pe{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.inset="0"}render(){return Nt`<div part="mask"></div>
      <div part="content"><slot></slot></div>`}};Ye.styles=[H,lh];r([b({selector:'[part="mask"]',valueTemplate:e=>{const[t]=e.split("/");return`linear-gradient(to ${t}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`}})],Ye.prototype,"mask-image",2);r([b({valueTemplate:e=>e,selector:'[part="mask"]'})],Ye.prototype,"mask-size",2);r([b({valueTemplate:e=>e,selector:'[part="mask"]'})],Ye.prototype,"mask-repeat",2);r([b({valueTemplate:e=>e,selector:'[part="mask"]'})],Ye.prototype,"mask-position",2);r([b({selector:'[part="mask"]',valueTemplate:function(e){const[t,o]=e.split("/");return o?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-background-${t}) ${parseFloat(o)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-background-${t})`}})],Ye.prototype,"background-color",2);r([b({valueTemplate:e=>e,selector:'[part="mask"]'})],Ye.prototype,"backdrop-filter",2);Ye=r([$("gds-mask")],Ye);var dh=W`
  @layer tokens, core, a11y, disabled, variants, sizes, sets;

  @layer tokens {
    :host {
      --_gap: var(--gds-space-xs);

      --_padding-inline: var(--gds-space-m);
      --_padding-block: var(--gds-space-xs);

      --_color-bg: transparent;
      --_color-text: var(--gds-color-l3-content-tertiary);
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
          var(--gds-color-l3-states-light-hover)
        );
        --_color-border: var(--gds-color-l3-border-secondary);
      }

      &.selected {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-light-hover)
        );
        --_color-border: var(--gds-color-l3-border-primary);
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
      --_padding-inline: var(--gds-space-s);
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
    color: var(--gds-color-l3-content-disabled);
    pointer-events: none;
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .button {
        transition: none;
      }
    }
  }
`,ch=dh,ft,Tt,ni,Ha,we=class extends V{constructor(){super(),c(this,ft),c(this,ni),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const e={button:!0,selected:this.selected,compact:this.compact},t=l(this,ft,Tt)?Ko`a`:Ko`button`;return Nt`
      <${t}
        class="${$e(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${ce(l(this,ft,Tt)?this.href:void 0)}
        target=${ce(l(this,ft,Tt)?this.target:void 0)}
        rel=${ce(l(this,ft,Tt)?this.rel||l(this,ni,Ha):void 0)}
        download=${ce(l(this,ft,Tt)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${t}>
    `}};ft=new WeakSet;Tt=function(){return this.href.length>0};ni=new WeakSet;Ha=function(){return this.target==="_blank"?"noreferrer noopener":void 0};we.styles=[H,j(ch)];we.shadowRootOptions={mode:"open",delegatesFocus:!0};r([h({type:Boolean,reflect:!0})],we.prototype,"disabled",2);r([h()],we.prototype,"label",2);r([h()],we.prototype,"href",2);r([h()],we.prototype,"target",2);r([h()],we.prototype,"rel",2);r([h()],we.prototype,"download",2);r([h({type:Boolean,reflect:!0})],we.prototype,"compact",2);r([h({type:Boolean,reflect:!0})],we.prototype,"selected",2);we=r([$("gds-menu-button")],we);var Ga=W`
  @layer defaults {
    a:link {
      color: currentColor;
      text-undeline-offset: 0.2lh;
      font-weight: var(--gds-text-weight-book);
    }

    h1 {
      font-size: var(--gds-text-size-heading-xl);
      line-height: var(--gds-text-line-height-heading-xl);
      font-weight: var(--gds-text-weight-regular);
    }

    h2 {
      font-size: var(--gds-text-size-heading-l);
      line-height: var(--gds-text-line-height-heading-l);
      font-weight: var(--gds-text-weight-regular);
    }

    h3 {
      font-size: var(--gds-text-size-heading-m);
      line-height: var(--gds-text-line-height-heading-m);
      font-weight: var(--gds-text-weight-regular);
    }

    h4 {
      font-size: var(--gds-text-size-heading-s);
      line-height: var(--gds-text-line-height-heading-s);
      font-weight: var(--gds-text-weight-regular);
    }

    h5 {
      font-size: var(--gds-text-size-heading-xs);
      line-height: var(--gds-text-line-height-heading-xs);
      font-weight: var(--gds-text-weight-regular);
    }

    h6 {
      font-size: var(--gds-text-size-heading-2xs);
      line-height: var(--gds-text-line-height-heading-2xs);
      font-weight: var(--gds-text-weight-regular);
    }

    p,
    li {
      font-size: var(--gds-text-size-body-m);
      line-height: var(--gds-text-line-height-body-m);
    }

    strong {
      font-weight: var(--gds-text-weight-medium);
    }
  }
`,hh=W`
  :host {
    font-size: var(--gds-text-size-body-m);
    line-height: var(--gds-text-line-height-body-m);
    --default-border: 1px solid
      color-mix(in srgb, currentColor, transparent 80%);
    letter-spacing: 0.0125rem;
  }

  :host > :first-child {
    margin-top: 0;
  }

  /*
  * typography
  * -----------------------------------------------------------
  */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0.6lh;
    margin-bottom: 0.3lh;
  }

  p {
    margin-bottom: 1lh;
    max-width: 80ch;
  }

  blockquote {
    margin: unset;
    margin-block: 2lh;
    border-left: 0.2rem solid currentColor;
    padding-left: 2ch;
    max-width: 40ch;
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
  ol,
  li {
    margin: 0 0 0 1ch;
    padding: 0 0 0.3lh 0;
  }
  li:last-child {
    padding: 0;
  }

  ul li::marker {
    content: '– ';
  }

  /*
  * figure
  * -----------------------------------------------------------
  */
  figure {
    margin: 0;
    padding: 0;
    & img {
      display: block;
    }
  }
  figcaption {
    font-size: smaller;
    margin-block-start: 0.4lh;
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
    border-radius: var(--gds-space-s);
  }
  th {
    font-weight: var(--gds-text-weight-book);
    text-align: left;
    border-bottom: var(--default-border);
    border-left: transparent;
    border-right: transparent;
    color: var(--gds-color-l3-content-secondary);
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
    border-top: solid var(--gds-space-4xs) var(--gds-color-l3-border-tertiary);
    font-size: var(--gds-text-size-body-m);
    line-height: var(--gds-text-line-height-body-m);
    color: var(--gds-color-l2-content-secondary);
  }

  summary {
    font-weight: var(--gds-text-weight-regular);
    list-style: none;
    padding: 0.4lh 0.2ch;
    font-size: var(--gds-text-size-body-l);
    line-height: var(--gds-text-line-height-body-l);
    color: var(--gds-color-l2-content-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
    outline-offset: var(--gds-space-2xs);
    outline-color: currentColor;

    &:focus-visible {
      border-radius: var(--gds-space-2xs);
    }
  }

  summary::after {
    content: '+';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    font-weight: var(--gds-text-weight-regular);
    font-size: var(--gds-text-size-body-l);
  }

  details[open] summary::after {
    content: '-';
  }

  details[open] {
    margin-bottom: 1lh;
  }

  details[open] summary {
    border-bottom: var(--gds-space-4xs) solid
      var(--gds-color-l3-border-tertiary);
  }
`,cs=class extends V{querySelectorAll(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):new NodeList}querySelector(e){return this.shadowRoot?this.shadowRoot.querySelector(e):null}get innerHTML(){var e;return((e=this.shadowRoot)==null?void 0:e.innerHTML)||""}set innerHTML(e){this.shadowRoot&&(this.shadowRoot.innerHTML=e)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){!this.shadowRoot||this.childNodes.length===0||this.shadowRoot.replaceChildren(...Array.from(this.childNodes))}};cs.styles=[H,Ga,hh];r([wi()],cs.prototype,"_captureDOM",1);cs=r([$("gds-rich-text")],cs);var uh=`@layer base {
  :host {
    background-color: var(--gds-sys-color-container-container-dim1);
    border: 0.25rem solid var(--gds-sys-color-container-container-dim1);
    border-radius: calc(infinity * 1px);
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
    background-color: var(--gds-sys-color-container-container-dim1);
    border-radius: calc(infinity * 1px);
    border-width: 0;
    color: var(--gds-sys-color-content-content);
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
          var(--gds-sys-color-state-layers-state-black-dim1),
          var(--gds-sys-color-container-container-dim1)
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
    background-color: var(--gds-sys-color-container-container-bright);
    border-radius: calc(infinity * 1px);
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
`,gh=(e,t)=>{let o;return()=>{clearTimeout(o),o=setTimeout(e,t)}},it,ai,ja,li,di,ci,jo,Yo,hi,ui,Me=class extends V{constructor(){super(...arguments),c(this,ai),this.size="medium",c(this,it,void 0),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,c(this,li,()=>{const e=this.segments.filter((t,o,s)=>{var i;return((i=s[o+1])==null?void 0:i.isVisible)&&!t.isVisible})[0];this._elTrack.scrollLeft=e.offsetLeft}),c(this,di,()=>{const e=this.segments.filter((t,o,s)=>{var i;return((i=s[o-1])==null?void 0:i.isVisible)&&!t.isVisible}).reverse()[0];this._elTrack.scrollLeft=e.offsetLeft}),c(this,ci,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),c(this,jo,gh(l(this,ci),50)),c(this,Yo,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,o=e.offsetLeft;this._elIndicator.style.transform=`translateX(${o}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),c(this,hi,e=>{const t=this.segments.find(o=>o===e.target||o.contains(e.target));t&&(this.segments.forEach(o=>o.selected=!1),t.selected=!0,R(this,it,t.value),l(this,Yo).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0})))}),c(this,ui,()=>{l(this,it)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===l(this,it));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return l(this,it)}set value(e){R(this,it,e),l(this,ui).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),re.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{l(this,jo).call(this)})})}render(){return C`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${l(this,li)}
        aria-label=${D("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${l(this,hi)}
          @slotchange=${x(this,ai,ja)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${l(this,di)}
        aria-label=${D("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{l(this,jo).call(this),l(this,Yo).call(this)})}};it=new WeakMap;ai=new WeakSet;ja=function(){var e,t;const o=(e=this.segments.find(s=>s.selected))==null?void 0:e.value;o&&R(this,it,o),(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=new IntersectionObserver(s=>{s.forEach(i=>{const n=i.target;n._isVisible=i.intersectionRatio>.99})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(s=>{var i;(i=this.intersectionObserver)==null||i.observe(s)})};li=new WeakMap;di=new WeakMap;ci=new WeakMap;jo=new WeakMap;Yo=new WeakMap;hi=new WeakMap;ui=new WeakMap;Me.styles=[H,j(uh)];r([h({reflect:!0})],Me.prototype,"size",2);r([h()],Me.prototype,"value",1);r([Q("slot")],Me.prototype,"_elSlot",2);r([Q("#indicator")],Me.prototype,"_elIndicator",2);r([Q("#track")],Me.prototype,"_elTrack",2);r([ie()],Me.prototype,"_showPrevButton",2);r([ie()],Me.prototype,"_showNextButton",2);r([Ea(),q("segMinWidth")],Me.prototype,"_recalculateMinWidth",1);Me=r([$("gds-segmented-control"),Ze()],Me);var ph=`@layer base {
  :host {
    display: flex;
    z-index: 1;
  }

  button {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    background: transparent;
    border-radius: calc(infinity * 1px);
    border-width: 0;
    color: var(--gds-sys-color-content-content);
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
    transition: 0.1s;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  @media (pointer: fine) {
    :host(:not([selected])) button:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-state-layers-state-black-dim1),
        transparent
      );

      &:disabled {
        background-color: transparent;
      }
    }
  }

  button:focus-visible {
    outline: 2px solid #000;
    outline-offset: -2px;
  }
}
`,Ue=class extends V{constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),re.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return C`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};Ue.styles=[...H,j(ph)];r([h({type:Boolean,reflect:!0})],Ue.prototype,"selected",2);r([h()],Ue.prototype,"value",2);r([h({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);r([b({valueTemplate:e=>e})],Ue.prototype,"min-width",2);r([b({valueTemplate:e=>e})],Ue.prototype,"max-width",2);r([b()],Ue.prototype,"width",2);Ue=r([$("gds-segment")],Ue);var fh=W`
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
    border-radius: var(--gds-space-max);
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
`,vh=fh,hs=class extends V{render(){return Nt`<div part="signal"></div>`}};hs.styles=[H,vh];r([b({valueTemplate:e=>`var(--gds-color-${e})`,selector:'[part="signal"]'})],hs.prototype,"color",2);hs=r([$("gds-signal")],hs);var us=class extends V{render(){return C`<div></div>`}};us.styles=[H];r([b({property:"height",selector:"div",valueTemplate:e=>`var(--gds-space-${e})`})],us.prototype,"size",2);us=r([$("gds-spacer")],us);var bh=W`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`,yh=bh,ue=class extends V{constructor(){super(...arguments),this.level="2",this.tag="span"}render(){const e=od(encodeURI(this.tag));return Nt`<${e} tag><slot></slot></${e}>`}};ue.styles=[H,Ga,yh];r([h()],ue.prototype,"level",2);r([h({type:String})],ue.prototype,"tag",2);r([b({valueTemplate:e=>`${e}`,selector:"[tag]",styleTemplate:(e,t)=>{const o=t[0],s=`font-size: var(--gds-text-size-${o});`,i=`line-height: var(--gds-text-line-height-${o});`;return s+i}})],ue.prototype,"font-size",2);r([b({property:"font-weight",selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],ue.prototype,"font-weight",2);r([b({property:"margin",valueTemplate:e=>e})],ue.prototype,"margin",2);r([b({property:"text-wrap",valueTemplate:e=>e})],ue.prototype,"text-wrap",2);r([b({property:"text-transform",valueTemplate:e=>e})],ue.prototype,"text-transform",2);r([b({property:"max-width",valueTemplate:e=>`${e}ch`})],ue.prototype,"max-width",2);r([b({property:"min-width",valueTemplate:e=>`${e}ch`})],ue.prototype,"min-width",2);r([b({property:"text-align",valueTemplate:e=>e})],ue.prototype,"text-align",2);r([b({valueTemplate:e=>e,selector:"[tag]"})],ue.prototype,"text-decoration",2);r([b({valueTemplate:e=>e,styleTemplate:(e,t)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${t[0]};
      -webkit-box-orient: vertical;`})],ue.prototype,"lines",2);r([b({property:"color",valueTemplate:function(e){const[t,o]=e.split("/");return o?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-content-${t}) ${parseFloat(o)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-content-${t})`}})],ue.prototype,"color",2);ue=r([$("gds-text")],ue);var mh=W`
  @layer tokens, a11y, base, simplified;

  @layer tokens {
    :host {
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1), height 0s;
    }
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      :host {
        --_transition: none;
      }
    }

    @media (prefers-reduced-transparency: reduce) {
      :host {
        --_transparency: 1;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      contain: layout;
      isolation: isolate;
      gap: var(--gds-space-xs);
    }

    :host([disabled]) {
      color: var(--gds-color-l3-content-disabled);
      pointer-events: none;
    }

    :host([size='small']) textarea {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
    }

    .field {
      transition: var(--_transition);
      position: relative;
      outline: 2px solid transparent;
      outline-offset: 2px;

      &:has(textarea:focus-visible) {
        border-color: var(--gds-color-l3-border-primary);
        outline-color: currentColor;
      }

      &.invalid:has(textarea:focus-visible) {
        border-color: var(--gds-color-l3-border-negative);
      }
    }

    @media (hover: hover) {
      .field {
        &:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-secondary),
            var(--gds-color-l3-states-light-hover)
          );
        }

        &.invalid:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-negative-secondary),
            var(--gds-color-l3-states-negative-hover)
          );
        }
      }
    }

    textarea {
      appearance: none;
      background-color: transparent;
      border: 0;
      box-sizing: border-box;
      font-family: inherit;
      font-size: var(--gds-text-size-detail-m);
      height: calc(1lh * var(--_lines));
      line-height: var(--gds-text-line-height-detail-m);
      margin: unset;
      min-height: calc(1lh * 4);
      outline: none;
      overflow: hidden;
      padding: unset;
      resize: none;
      transition:
        var(--_transition),
        resize 0s;

      width: 100%;
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      width: var(--gds-space-m);
    }

    slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-l);
      display: flex;
    }

    .resize-handle {
      &:hover,
      &:active {
        &::before {
          width: 22px;
          opacity: 1;
          height: 1px;
        }
      }
      &::before {
        content: '';
        position: absolute;
        background: currentColor;
        inset: 0;
        margin-inline: auto;
        height: 0px;
        width: 12px;
        opacity: 0;
        border-radius: 100px;
        transition: var(--_transition);
      }
    }
  }

  @layer simplified {
  }
`,gi,Ya,pi,Ua,Yi,Ui,qi,Zi,Qi,Ji,qa,Xi,Za,Uo,fi,ws,Ki,ks,en,_s,vi,tn,Qa,on,Ja,sn,Xa,rn,Ka,nn,el,oe=class extends ye{constructor(){super(),c(this,gi),c(this,pi),c(this,Ji),c(this,Xi),c(this,Uo),c(this,ws),c(this,ks),c(this,_s),c(this,tn),c(this,on),c(this,sn),c(this,rn),c(this,nn),this.value="",this.label="",this.rows=4,this.lines=4,this.isDragging=!1,this.lastMouseY=0,this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.resize="",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.trailSlotOccupied=!1,c(this,Yi,e=>["type","placeholder","required"].includes(e.name)),c(this,Ui,e=>{const t=e.target;this.value=t.value}),c(this,qi,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),c(this,Zi,()=>{this.elTextareaAsync.then(e=>e.focus())}),c(this,Qi,()=>{this.value=""}),this.lines=0,this.resize="auto"}connectedCallback(){super.connectedCallback(),this._setAutoHeight(),x(this,Uo,fi).call(this)}disconnectedCallback(){super.disconnectedCallback(),x(this,Uo,fi).call(this)}render(){return C`${Aa(this.variant,[["default",()=>x(this,gi,Ya).call(this)],["floating-label",()=>x(this,pi,Ua).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e?.style.setProperty("--_lines",t.toString())})}};gi=new WeakSet;Ya=function(){return C`
      <gds-form-control-header>
        <label for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text"
          >${this.supportingText}</span
        >
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>

      <gds-flex
        position="relative"
        align-items="flex-start"
        justify-content="center"
        gap="xs"
        level="3"
        padding=${this.trailSlotOccupied?"s m s m":"s s s m"}
        border-radius="xs"
        .background=${this.disabled?"disabled":this.invalid?"negative-secondary":"secondary"}
        .border=${this.disabled?"":this.invalid?"4xs/negative":"4xs/secondary"}
        class="field ${this.invalid?"invalid":""}"
        @click=${l(this,Zi)}
        cursor="text"
      >
        ${x(this,Ji,qa).call(this)} ${x(this,sn,Xa).call(this)}

        <gds-flex gap="xs" align-items="center" block-size="l">
          ${x(this,rn,Ka).call(this)} ${x(this,Xi,Za).call(this)}
        </gds-flex>
        ${he(this.resize==="auto",()=>x(this,tn,Qa).call(this),()=>ge)}
      </gds-flex>

      <gds-form-control-footer
        .charCounter=${l(this,nn,el)&&this.maxlength-this.value.length}
        .validationMessage=${this.invalid&&this.validationMessage}
      ></gds-form-control-footer>
    `};pi=new WeakSet;Ua=function(){return ge};Yi=new WeakMap;Ui=new WeakMap;qi=new WeakMap;Zi=new WeakMap;Qi=new WeakMap;Ji=new WeakSet;qa=function(){return C` <slot name="lead"></slot> `};Xi=new WeakSet;Za=function(){return C`
      <slot name="trail" @slotchange=${x(this,on,Ja)}></slot>
    `};Uo=new WeakSet;fi=function(){const e=this.querySelector(".resize-handle");e&&e.addEventListener("mousedown",x(this,ws,Ki).bind(this))};ws=new WeakSet;Ki=function(e){e.preventDefault(),this.isDragging=!0,this.lastMouseY=e.clientY,document.addEventListener("mousemove",x(this,ks,en).bind(this)),document.addEventListener("mouseup",x(this,_s,vi).bind(this))};ks=new WeakSet;en=function(e){if(!this.isDragging)return;const t=e.clientY-this.lastMouseY;Math.abs(t)>=20&&(t>0?this.lines+=1:this.lines=Math.max(1,this.lines-1),this.elTextareaAsync.then(o=>{o?.style.setProperty("--_lines",this.lines.toString())}),this.lastMouseY=e.clientY)};_s=new WeakSet;vi=function(){this.isDragging=!1,document.removeEventListener("mousemove",x(this,ks,en).bind(this)),document.removeEventListener("mouseup",x(this,_s,vi).bind(this))};tn=new WeakSet;Qa=function(){return C`
      <gds-container
        class="resize-handle"
        position="absolute"
        inset="auto auto -10px 0"
        width="100%"
        height="20px"
        cursor="row-resize"
        z-index="2"
        @mousedown=${x(this,ws,Ki)}
      ></gds-container>
    `};on=new WeakSet;Ja=function(e){const o=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=o.length>0&&o.some(s=>{var i;return s.nodeType===Node.ELEMENT_NODE||s.nodeType===Node.TEXT_NODE&&((i=s.textContent)==null?void 0:i.trim())!==""})};sn=new WeakSet;Xa=function(){return C`
      <textarea
        @input=${l(this,Ui)}
        @change=${l(this,qi)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${_i(l(this,Yi))}
      ></textarea>
    `};rn=new WeakSet;Ka=function(){return this.clearable&&this.value.length>0?C`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${D("Clear input")}"
          @click=${l(this,Qi)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:ge};nn=new WeakSet;el=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};oe.styles=[H,mh];r([h()],oe.prototype,"value",2);r([h()],oe.prototype,"label",2);r([b({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],oe.prototype,"rows",2);r([ie()],oe.prototype,"lines",2);r([h({attribute:"supporting-text"})],oe.prototype,"supportingText",2);r([h({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],oe.prototype,"showExtendedSupportingText",2);r([h({attribute:"disabled",type:Boolean,reflect:!0})],oe.prototype,"disabled",2);r([h({type:Boolean})],oe.prototype,"clearable",2);r([h()],oe.prototype,"resize",2);r([h({type:Number})],oe.prototype,"maxlength",2);r([h({type:String})],oe.prototype,"variant",2);r([qe("textarea")],oe.prototype,"elTextareaAsync",2);r([Q("textarea")],oe.prototype,"elTextarea",2);r([ie()],oe.prototype,"trailSlotOccupied",2);r([q("value")],oe.prototype,"_setAutoHeight",1);oe=r([$("gds-textarea"),Ze()],oe);var wt=class extends V{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2016"}connectedCallback(){super.connectedCallback(),re.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",j(`:host {${Vs}}`))}render(){return C`<slot></slot>`}_onColorSchemeChange(){this.colorScheme==="dark"?this._dynamicStylesController.inject("color-scheme",j(`:host { ${Vs}}`)):this._dynamicStylesController.inject("color-scheme",j(`:host { ${On}}`)),this.dispatchEvent(new CustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}}))}_onDesignVersionChange(){this.dispatchEvent(new CustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}}))}};wt.styles=[H,W`
      :host {
        display: contents;
      }
    `];r([h({reflect:!0,attribute:"color-scheme"})],wt.prototype,"colorScheme",2);r([h({reflect:!0,attribute:"design-version"})],wt.prototype,"designVersion",2);r([q("colorScheme")],wt.prototype,"_onColorSchemeChange",1);r([q("designVersion")],wt.prototype,"_onDesignVersionChange",1);wt=r([$("gds-theme")],wt);var xh=W`
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
`,wh=xh,X=class extends V{applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return C`<video></video>`}firstUpdated(){this.applyVideoSettings()}};X.styles=[H,wh];r([b({property:"aspect-ratio",valueTemplate:e=>e})],X.prototype,"aspect-ratio",2);r([b({property:"object-position",selector:"video",valueTemplate:e=>e})],X.prototype,"object-position",2);r([b({property:"inset",valueTemplate:e=>e})],X.prototype,"inset",2);r([b({property:"width",valueTemplate:e=>e})],X.prototype,"width",2);r([b({property:"height",valueTemplate:e=>e})],X.prototype,"height",2);r([b({property:"opacity",valueTemplate:e=>e})],X.prototype,"opacity",2);r([b({property:"object-fit",selector:"video",valueTemplate:e=>e})],X.prototype,"object-fit",2);r([b({property:"pointer-events",selector:"video",valueTemplate:e=>e})],X.prototype,"pointer-events",2);r([b({property:"border-radius",valueTemplate:e=>`var(--gds-space-${e})`})],X.prototype,"border-radius",2);r([h()],X.prototype,"src",2);r([h()],X.prototype,"poster",2);r([h({type:Boolean})],X.prototype,"muted",2);r([h({type:Boolean})],X.prototype,"playsinline",2);r([h({type:Boolean})],X.prototype,"autoplay",2);r([h({type:Boolean})],X.prototype,"loop",2);r([Q("video")],X.prototype,"videoElement",2);X=r([$("gds-video")],X);var kh=Object.defineProperty,_h=Object.getOwnPropertyDescriptor,Ch=(e,t,o,s)=>{for(var i=s>1?void 0:s?_h(t,o):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(i=(s?a(t,o,i):a(i))||i);return s&&i&&kh(t,o,i),i};let Mn=class extends gs{createRenderRoot(){return this}render(){return C`<gds-flex flex-direction="column" gap="xl" max-width="800px">
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
    </gds-flex>`}};Mn=Ch([yl("all-components")],Mn);export{Mn as AllComponents};
