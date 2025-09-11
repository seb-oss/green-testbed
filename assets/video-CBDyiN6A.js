import{E as se,T as Ss,n as a,k as Vr,_ as o,a as C,G as L,x as ce,b as O,g as w,h as b,l as Wr,w as V,c as p,d as g,e as l,f as j,m as ae,r as J,Z as _a,j as wa,o as ka,p as $a,q as Ca}from"./index-DEa68_aL.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yi=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(e,t){return(s,i,r)=>{const n=d=>d.renderRoot?.querySelector(e)??null;return Yi(s,i,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Sa;function Ma(e){return(t,s)=>Yi(t,s,{get(){return(this.renderRoot??(Sa??=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(e){return(t,s)=>Yi(t,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(e,t,s){return e?t(e):s?.(e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ls={ATTRIBUTE:1,CHILD:2,ELEMENT:6},os=e=>(...t)=>({_$litDirective$:e,values:t});let zs=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Lo=class extends zs{constructor(t){if(super(t),this.it=se,t.type!==Ls.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===se||t==null)return this._t=void 0,this.it=t;if(t===Ss)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};Lo.directiveName="unsafeHTML",Lo.resultType=1;const Rr=os(Lo),Ea={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},Ta=/^([<|>]=?)?([0-9a-z]+)/,Br=["{","}",";",":",","],yr=[" ","/n"];function Aa(e=""){const t=[];let s="";for(let i=0;i<e.length;i++){const r=e[i];if(yr.includes(r)||(s+=r),Br.includes(r)){t.push(s.slice(0,-1)),t.push(r),s="";continue}if(yr.includes(r)||i===e.length-1){t.push(s),s="";continue}}return t.filter(i=>i!=="")}function Da(e){const t=[];let s={breakpoint:"-",values:[]};const i=()=>({sel:"",values:[]});let r=i();for(const n of e){if(!Br.includes(n)){r.values.push(n);continue}if(n==="{"&&(s={breakpoint:r.values.join(","),values:[]},r=i()),n===";"&&(t.length===0&&t.push(s),r.values.length>0&&(s.values.push(r),r=i())),n===":"){const d=r.values.pop()??"";r.sel=d}s&&n==="}"&&(s.values.push(r),r=i(),t.push(s))}return r.values.length>0&&s.values.push(r),t.length===0&&t.push(s),t}function La(e){return e.split(",").map(s=>{const i=s.trim().match(Ta);if(!i)throw new Error(`Invalid breakpoint specifier: ${s}`);return{condition:i[1],value:i[2]}})}function za(e,t,s,i=n=>n,r=(n,d)=>`${n}: ${d.join(" ")};`){let n="";for(const d of s){const u=`@media ${(d.breakpoint==="-"?[{condition:">=",value:"0"}]:La(d.breakpoint)).map(m=>`(${m.condition?.includes("<")?"max-width":"min-width"}: ${Ea[m.value]??m.value})`).join(" and ")} {${d.values.map(m=>{let f=e;m.sel.length>0&&(f=e===":host"?`:host(:${m.sel})`:`${e}:${m.sel}`);const x=r(t,m.values.map(i));return m.sel==="hover"?`@media (hover: hover) {${f}{${x}}}`:`${f}{${x}}`}).join("")}}`;n+=u}return n}const Mo=new Map;function y(e){return(t,s)=>{const i=e?.property??String(s),r=e?.valueTemplate,n=e?.styleTemplate,d=e?.cacheOverrideKey??"0";a({attribute:e?.attribute,noAccessor:!0})(t,s),Object.defineProperty(t,s,{get:function(){return this["__"+String(s)]},set:async function(c){if(!c)return;this["__"+String(s)]=c,await this.updateComplete;const h=e?.selector??this.constructor.styleExpressionBaseSelector,u=this.level??"0",m=h+i+c+u+d;if(Mo.has(m)){this._dynamicStylesController.inject(`sep_${String(s)}`,Mo.get(m));return}const f=Da(Aa(c)),x=za(h,i,f,r?.bind(this),n?.bind(this)),v=Vr(x);Mo.set(m,v),this._dynamicStylesController.inject(`sep_${String(s)}`,v)}})}}function ji(e,t,s){if(e==="transparent"||e==="currentColor"||e==="inherit")return e;const[i,r]=e.split("/");let n;return s&&t==="background"?n=`var(--gds-sys-color-l${s}-${i})`:n=`var(--gds-sys-color-${t}-${i})`,r?`color-mix(in srgb, ${n} ${parseFloat(r)*100}%, transparent 0%)`:n}function Os(e){return{valueTemplate:function(t){return ji(t,e,this.level)}}}const Ut={valueTemplate:e=>`var(--gds-sys-space-${e}, 0)`},Oa={valueTemplate:e=>`var(--gds-sys-radius-${e}, 0)`},pe={valueTemplate:e=>`var(--gds-sys-space-${Va(e)}, ${e})`},Eo={valueTemplate:e=>{const s=(e.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${e})`:`calc(var(--gds-sys-space-${e.substring(1)}) * -1)`;return e==="auto"?"auto":s},styleTemplate:(e,t)=>{const s=c=>c==="auto"?"auto":`${c}`,i=s(t[0]),r=t.length>1?s(t[1]):i,n=t.length>2?s(t[2]):i,d=t.length>3?s(t[3]):r;return`${e}: ${i} ${r} ${n} ${d};`}};function Va(e){return e.replace(/[^a-zA-Z0-9-]/g,"")}function le(e){class t extends e{}return o([y(pe)],t.prototype,"width",2),o([y(pe)],t.prototype,"min-width",2),o([y(pe)],t.prototype,"max-width",2),o([y(pe)],t.prototype,"inline-size",2),o([y(pe)],t.prototype,"min-inline-size",2),o([y(pe)],t.prototype,"max-inline-size",2),t}function vo(e){class t extends e{}return o([y(pe)],t.prototype,"height",2),o([y(pe)],t.prototype,"min-height",2),o([y(pe)],t.prototype,"max-height",2),o([y(pe)],t.prototype,"block-size",2),o([y(pe)],t.prototype,"min-block-size",2),o([y(pe)],t.prototype,"max-block-size",2),t}function he(e){class t extends e{}return o([y(Eo)],t.prototype,"margin",2),o([y(Eo)],t.prototype,"margin-inline",2),o([y(Eo)],t.prototype,"margin-block",2),t}function Fr(e){class t extends e{}return o([y(Ut)],t.prototype,"padding",2),o([y(Ut)],t.prototype,"padding-inline",2),o([y(Ut)],t.prototype,"padding-block",2),t}function de(e){class t extends e{}return o([y()],t.prototype,"align-self",2),o([y()],t.prototype,"justify-self",2),o([y()],t.prototype,"place-self",2),o([y()],t.prototype,"grid-column",2),o([y()],t.prototype,"grid-row",2),o([y()],t.prototype,"grid-area",2),o([y()],t.prototype,"flex",2),o([y()],t.prototype,"order",2),t}function qi(e){class t extends e{}return o([y()],t.prototype,"position",2),o([y()],t.prototype,"transform",2),o([y()],t.prototype,"inset",2),t}const Wa=C`
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
`;var Ra=Wa;class P extends he(de(L)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const s={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...s,"aria-label":this.label}:{...s,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([s,i])=>i!==void 0).map(([s,i])=>`${s}="${i}"`).join(`
      `)}render(){const t=this.svgAttributes;let s=this.svgContent||"";this.stroke&&(s=this.applyStroke(s));const i=`
      <svg ${this.generateAttributesString(t)}>
        ${s}
      </svg>
    `;return ce`${Rr(i)}`}}P.styles=[O,Ra];o([y({...pe,property:"height",selector:"svg"})],P.prototype,"size",2);o([a({type:Boolean})],P.prototype,"solid",2);o([a({type:Number})],P.prototype,"stroke",2);o([a()],P.prototype,"level",2);o([y(Os("content"))],P.prototype,"color",2);o([a({type:String})],P.prototype,"label",2);P.define();let me=class extends P{};me._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';me._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7425 2.99442C22.2979 3.40452 22.4156 4.18717 22.0055 4.74251L10.0055 20.9925C9.80427 21.2651 9.501 21.4442 9.16518 21.489C8.82936 21.5338 8.48974 21.4403 8.22411 21.23L2.22411 16.48C1.68284 16.0515 1.59143 15.2654 2.01993 14.7241C2.44844 14.1828 3.2346 14.0914 3.77587 14.5199L8.76235 18.4675L19.9944 3.2574C20.4045 2.70206 21.1872 2.58432 21.7425 2.99442Z" fill="currentColor"/>';me._name="checkmark";me._width=24;me._height=24;me._viewBox="0 0 24 24";me=o([w("gds-icon-checkmark")],me);var Zi=C`
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
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=os(class extends zs{constructor(e){if(super(e),e.type!==Ls.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const s=e.element.classList;for(const i of this.st)i in t||(s.remove(i),this.st.delete(i));for(const i in t){const r=!!t[i];r===this.st.has(i)||this.nt?.has(i)||(r?(s.add(i),this.st.add(i)):(s.remove(i),this.st.delete(i)))}return Ss}}),Hr=e=>Nr({...e,type:"checkbox"}),Ba=e=>Nr({...e,type:"radio"}),Nr=e=>{const{type:t,checked:s,indeterminate:i,disabled:r,invalid:n}=e;return b`
    <div class="rbcb ${re({"rbcb--checkbox":t==="checkbox","rbcb--radio":t==="radio","--checked":s,"--indeterminate":i,"--disabled":r,"--invalid":n})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${T(t==="checkbox",()=>b`
            ${T(i,()=>b`<gds-icon-minus-small
                  class="rbcb__icon"
                  stroke="4"
                ></gds-icon-minus-small>`,()=>T(s,()=>b`<gds-icon-checkmark
                      class="rbcb__icon"
                      stroke="4"
                    ></gds-icon-checkmark>`))}
          `)}
      </div>
    </div>
  `};function mo(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,s,i)=>{let r;const n=t.connectedCallback,d=t.disconnectedCallback;t.connectedCallback=function(){n?.call(this);const c=(h,u)=>{i.value?.call(this)};r=new MutationObserver(c),r.observe(this,e)},t.disconnectedCallback=function(){d?.call(this),r.disconnect()}}}function Fa(e){return(t,s,i)=>{if(Wr)return;const r=window.matchMedia(e),n=t.connectedCallback,d=t.disconnectedCallback;t.connectedCallback=function(){n?.call(this);const c=h=>{i.value?.call(this,h.matches)};r.addEventListener("change",c),this.disconnectedCallback=function(){d?.call(this),r.removeEventListener("change",c)},i.value?.call(this,r.matches)}}}const Ir=e=>{class t extends e{constructor(){super(...arguments),this.onblur=i=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:i.relatedTarget}))},this.onfocus=i=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:i.relatedTarget}))}}focus(i){this.setAttribute("tabindex","0"),super.focus(i)}}return t},Ha=C`
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
`;var Gr=Ha,us,Bs,zo;let Be=class extends Ir(L){constructor(){super(),p(this,Bs),p(this,us,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",g(this,Bs,zo)),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),g(this,Bs,zo).call(this,e))})}get hidden(){return l(this,us)}set hidden(e){const t=e.toString();j(this,us,t==="true"),l(this,us)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then(()=>{this.isPlaceholder&&(this.hidden=!0),ae.instance.apply(this,"gds-option")})}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){const e=this.parentElement?.multiple;return e||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),b`<div class="item">
      ${T(e,()=>Hr({checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1}))} <slot></slot>
    </div>`}};us=new WeakMap;Bs=new WeakSet;zo=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})};Be.styles=[O,Zi,Gr];o([a()],Be.prototype,"value",2);o([a({type:Boolean,reflect:!0})],Be.prototype,"hidden",1);o([a({attribute:"aria-selected",reflect:!0})],Be.prototype,"selected",2);o([a({type:Boolean,reflect:!0})],Be.prototype,"isPlaceholder",2);o([V("isPlaceholder")],Be.prototype,"_handlePlaceholderStatusChange",1);Be=o([w("gds-option",{dependsOn:[me]})],Be);const Na=C`
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
`;var Ia=Na;let oo=class extends L{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>ae.instance.apply(this,"gds-menu-heading"))}render(){return ce`<slot></slot>`}};oo.styles=Ia;oo=o([w("gds-menu-heading")],oo);var Oo;let Kt=class extends Ir(L){constructor(){super(...arguments),p(this,Oo,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",l(this,Oo)),ae.instance.apply(this,"gds-option")}render(){return b`<div class="item"><slot></slot></div>`}};Oo=new WeakMap;Kt.styles=[Gr];Kt=o([w("gds-menu-item")],Kt);const Ga=C`
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
`;var Pa=Ga;let S=class extends le(vo(he(Fr(de(qi(L)))))){constructor(){super(...arguments),this.level="2"}render(){return b`<slot></slot>`}};S.styles=[O,Pa];o([y()],S.prototype,"display",2);o([a()],S.prototype,"level",2);o([y(Os("content"))],S.prototype,"color",2);o([y(Os("background"))],S.prototype,"background",2);o([y({styleTemplate:function(e,t){const s=this,[i,r=s["border-style"]||"solid",n=s["border-color"]||"subtle-01"]=t,d=`var(--gds-sys-space-${i})`,c=ji(n,"border",s.level);return`border: ${d} ${r} ${c};`}})],S.prototype,"border",2);o([y(Os("border"))],S.prototype,"border-color",2);o([y(Ut)],S.prototype,"border-width",2);o([y()],S.prototype,"border-style",2);o([y(Oa)],S.prototype,"border-radius",2);o([y({valueTemplate:e=>`var(--gds-sys-shadow-${e}-01), var(--gds-sys-shadow-${e}-02)`})],S.prototype,"box-shadow",2);o([y()],S.prototype,"opacity",2);o([y()],S.prototype,"overflow",2);o([y()],S.prototype,"box-sizing",2);o([y()],S.prototype,"z-index",2);o([y({styleTemplate:(e,t)=>`font: var(--gds-sys-text-${t[0]});`})],S.prototype,"font",2);o([y({valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],S.prototype,"font-weight",2);o([y()],S.prototype,"text-align",2);o([y()],S.prototype,"text-wrap",2);o([y()],S.prototype,"overflow-wrap",2);o([y()],S.prototype,"white-space",2);o([y({...Ut,styleTemplate:(e,t)=>{const s=t[0],i=t[1]||s;return`gap: ${s} ${i};`},cacheOverrideKey:"flex"})],S.prototype,"gap",2);o([y()],S.prototype,"align-items",2);o([y()],S.prototype,"align-content",2);o([y()],S.prototype,"justify-content",2);o([y()],S.prototype,"justify-items",2);o([y()],S.prototype,"flex-direction",2);o([y()],S.prototype,"flex-wrap",2);o([y()],S.prototype,"place-items",2);o([y()],S.prototype,"place-content",2);S=o([w("gds-div")],S);const Ya=C`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
`;var ja=Ya;let it=class extends S{render(){return b`<slot></slot>`}};it.styles=[O,ja];it=o([w("gds-flex")],it);const qa=C`
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
`;var Za=qa,Zt,Pr,Yr,jr,qr;let Fe=class extends le(he(de(L))){constructor(){super(...arguments),p(this,Zt),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){let e,t;if(this.notification)e="negative-01",t="inversed";else switch(this.variant){case"information":e="information-03",t="information-01";break;case"notice":e="notice-03",t="notice-01";break;case"positive":e="positive-03",t="positive-03";break;case"warning":e="warning-03",t="warning-01";break;case"negative":e="negative-03",t="negative-01";break;case"disabled":e="disabled-03",t="disabled-01";break;default:e="information-03",t="information-01";break}const s=this.size==="small"||this.notification?"2xs":"xs",i=this.mainSlotOccupied?this.size==="small"||this.notification?"m":"l":"xs";return b`<gds-flex
      level="3"
      background=${e}
      color=${t}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${s}"
      border-radius="${this.notification||this.rounded?"max":"2xs"}"
      block-size="${i}"
      width="100%"
      font="${this.size==="small"||this.notification?"detail-regular-xs":"detail-regular-s"}"
    >
      ${g(this,Zt,Pr).call(this)} ${g(this,Zt,Yr).call(this)}
      ${g(this,Zt,qr).call(this)}
    </gds-flex>`}};Zt=new WeakSet;Pr=function(){if(this.size!=="small"||!this.notification)return b`<slot name="lead"></slot>`};Yr=function(){return b`<slot @slotchange=${g(this,Zt,jr)}></slot>`};jr=function(e){const s=e.target.assignedNodes({flatten:!0});this.mainSlotOccupied=s.length>0&&s.some(i=>i.nodeType===Node.ELEMENT_NODE||i.nodeType===Node.TEXT_NODE&&i.textContent?.trim()!=="")};qr=function(){return b`<slot name="trail"></slot>`};Fe.styles=[O,Za];o([a()],Fe.prototype,"variant",2);o([a({type:String})],Fe.prototype,"size",2);o([a({attribute:"notification",type:Boolean,reflect:!0})],Fe.prototype,"notification",2);o([a({attribute:"rounded",type:Boolean,reflect:!0})],Fe.prototype,"rounded",2);o([J()],Fe.prototype,"mainSlotOccupied",2);Fe=o([w("gds-badge",{dependsOn:[it]})],Fe);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vr="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ua=(e,...t)=>({strTag:!0,strings:e,values:t}),Xa=Ua,Ka=e=>typeof e!="string"&&"strTag"in e,Ja=(e,t,s)=>{let i=e[0];for(let r=1;r<e.length;r++)i+=t[r-1],i+=e[r];return i};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qa=e=>Ka(e)?Ja(e.strings,e.values):e;let k=Qa;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class el{constructor(t){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(vr,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(vr,this.__litLocalizeEventHandler)}}const tl=e=>e.addController(new el(e)),sl=tl;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=()=>(e,t)=>(e.addInitializer(sl),e);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ol{constructor(){this.settled=!1,this.promise=new Promise((t,s)=>{this._resolve=t,this._reject=s})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let e=0;e<256;e++)(e>>4&15).toString(16)+(e&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let il=new ol;il.resolve();let He=class extends P{};He._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';He._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>';He._name="chevron-left";He._width=24;He._height=24;He._viewBox="0 0 24 24";He=o([w("gds-icon-chevron-left")],He);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=e=>e??se;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ui=Symbol.for(""),rl=e=>{if(e?.r===Ui)return e?._$litStatic$},nl=e=>({_$litStatic$:e,r:Ui}),io=(e,...t)=>({_$litStatic$:t.reduce((s,i,r)=>s+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[r+1],e[0]),r:Ui}),mr=new Map,al=e=>(t,...s)=>{const i=s.length;let r,n;const d=[],c=[];let h,u=0,m=!1;for(;u<i;){for(h=t[u];u<i&&(n=s[u],(r=rl(n))!==void 0);)h+=r+t[++u],m=!0;u!==i&&c.push(n),d.push(h),u++}if(u===i&&d.push(t[i]),m){const f=d.join("$$lit$$");(t=mr.get(f))===void 0&&(d.raw=d,mr.set(f,t=d)),s=c}return e(t,...s)},is=al(ce),ll=C`
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
`;var dl=ll;let Ms=class extends L{constructor(){super(...arguments),this.onmousedown=e=>{const s=e.target.getBoundingClientRect(),i=this._rippleEl;i&&(i.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-s.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-s.left}px`),setTimeout(()=>{i.classList.add("gds-ripple-effect")},20))}}render(){return ce`<div></div>`}};Ms.styles=[O,dl];o([R("div")],Ms.prototype,"_rippleEl",2);Ms=o([w("gds-ripple")],Ms);class cl extends zs{constructor(t){if(super(t),t.type!==Ls.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return se}update(t,[s]){const i=t.element,r=t.options?.host;Array.from(r.attributes).forEach(n=>{s(n)&&i.setAttribute(n.name.replace("gds-",""),n.value)})}}const hl=os(cl),xr=new WeakMap;function ul(e){return(t,...s)=>{let i=xr.get(t);return i||(i=t.map(r=>r.replace(/\n[\s]+</gm,"<")),i.raw=t.raw,xr.set(t,i)),e(i,...s)}}Wr||function(e){if(typeof e.requestSubmit=="function")return;e.requestSubmit=function(i=null){i?(t(i,this),i.click()):(i=document.createElement("input"),i.type="submit",i.hidden=!0,this.appendChild(i),i.click(),this.removeChild(i))};function t(i,r){i instanceof HTMLElement||s(TypeError,"parameter 1 is not of type 'HTMLElement'"),i.type=="submit"||s(TypeError,"The specified element is not a submit button"),i.form==r||s(DOMException,"The specified element is not owned by this form element","NotFoundError")}function s(i,r,n="Error"){throw new i("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+r+".",n)}}(HTMLFormElement.prototype);var X;class q extends L{constructor(){super(),p(this,X),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{j(this,X,this.attachInternals())}catch{j(this,X,{form:this.closest("form"),setFormValue:s=>{this._internalValue=s},setValidity:(s,i)=>{l(this,X).validity=s,this.errorMessage=i||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:this.checkValidity.bind(this),reportValidity:this.reportValidity.bind(this)})}}connectedCallback(){if(super.connectedCallback(),typeof this.attachInternals!="function"){const t=this.closest("form");t&&(t.addEventListener("submit",this._handleFormSubmit.bind(this)),t.addEventListener("reset",this.formResetCallback.bind(this)))}}set invalid(t){const s=this.invalid;l(this,X).setValidity({...l(this,X).validity,customError:t,valid:!t},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",s),l(this,X).checkValidity()}get invalid(){return!l(this,X).validity.valid}get value(){return this._internalValue}set value(t){this._internalValue=t,l(this,X).setFormValue(t)}get form(){return l(this,X).form}get validity(){return l(this,X).validity}get validationMessage(){return l(this,X).validationMessage}get willValidate(){return l(this,X).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const s=this.invalid,i=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=i[1]||this.errorMessage,l(this,X).setValidity(i[0],i[1],this._getValidityAnchor()),s!==this.invalid&&(this.requestUpdate("invalid",s),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),l(this,X).checkValidity()}reportValidity(){return l(this,X).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(t){t?.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(t){this.checkValidity(),this.validity.valid||t.preventDefault()}}X=new WeakMap;q.formAssociated=!0;o([a({attribute:!1})],q.prototype,"validator",2);o([a({type:Boolean})],q.prototype,"required",2);o([a({attribute:"error-message"})],q.prototype,"errorMessage",2);o([a({type:Boolean,reflect:!0})],q.prototype,"invalid",1);o([a()],q.prototype,"label",2);o([a()],q.prototype,"value",1);o([a({reflect:!0})],q.prototype,"name",2);o([a({type:Boolean,reflect:!0})],q.prototype,"disabled",2);o([V("value",{waitUntilFirstUpdate:!0})],q.prototype,"__handleValueChange",1);const pl=C`
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
`;var gl=pl,ps,Ve,gt,Zr,Vo,Wo;const fl=["aria-label","aria-haspopup","aria-expanded"],bl=ul(b);class Q extends q{constructor(){super(...arguments),p(this,Ve),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",p(this,ps,!1),p(this,Vo,()=>{const t=this._mainSlot?.assignedElements()??[];j(this,ps,t.length===1&&(t[0].tagName.toLowerCase().startsWith("gds-icon")||t[0].getAttribute("name")==="icon")),this.requestUpdate()}),p(this,Wo,t=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:t}),this.form&&!l(this,Ve,gt)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),ae.instance.apply(this,"gds-button")}focus(t){this._getValidityAnchor()?.focus(t)}render(){const t={button:!0,circle:l(this,ps),icon:l(this,ps),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",brand:this.variant==="brand",positive:this.variant==="positive",negative:this.variant==="negative",notice:this.variant==="notice",warning:this.variant==="warning",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},s=l(this,Ve,gt)?io`a`:io`button`;return is`
      <${s}
        class=${re(t)}
        type="${D(l(this,Ve,gt)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||se}
        href=${D(l(this,Ve,gt)?this.href:void 0)}
        target=${D(l(this,Ve,gt)?this.target:void 0)}
        rel=${D(l(this,Ve,gt)?this.rel||l(this,Ve,Zr):void 0)}
        download=${D(l(this,Ve,gt)?this.download:void 0)}
        part="_button"
        @click="${l(this,Wo)}"
        ${hl(i=>i.name.startsWith("gds-aria")||i.name==="gds-role"||fl.includes(i.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${l(this,Vo)}></slot>
        <slot name="trail"></slot>
        ${T(!this._isUsingTransitionalStyles,()=>bl`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${s}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}}ps=new WeakMap;Ve=new WeakSet;gt=function(){return this.href.length>0};Zr=function(){return this.target==="_blank"?"noreferrer noopener":void 0};Vo=new WeakMap;Wo=new WeakMap;Q.styles=[O,gl];Q.shadowRootOptions={mode:"open",delegatesFocus:!0};o([a({type:Boolean,reflect:!0})],Q.prototype,"disabled",2);o([y({selector:".button"})],Q.prototype,"justify-content",2);o([a({reflect:!0})],Q.prototype,"type",2);o([a({reflect:!0})],Q.prototype,"rank",2);o([a({reflect:!0})],Q.prototype,"variant",2);o([a({reflect:!0})],Q.prototype,"size",2);o([a()],Q.prototype,"label",2);o([a()],Q.prototype,"href",2);o([a()],Q.prototype,"target",2);o([a()],Q.prototype,"rel",2);o([a()],Q.prototype,"download",2);o([R("slot:not([name])")],Q.prototype,"_mainSlot",2);o([R(".button")],Q.prototype,"_button",2);o([mo({attributes:!0,childList:!1,subtree:!1,characterData:!1})],Q.prototype,"_attributeChanged",1);let Ne=class extends le(he(de(Q))){};Ne=o([w("gds-button",{dependsOn:[Ms]})],Ne);let Bt=class extends S{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return b`<slot></slot>`}};Bt.styles=[O,C`
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
    `];o([y({styleTemplate:function(e,t){let s,i,r;switch(t[0]){case"primary":s="transparent",i=`var(--gds-sys-color-l${this.level}-neutral-01)`,r="var(--gds-sys-color-content-neutral-01)";break;case"secondary":s="var(--gds-sys-color-border-subtle-01)",i=`var(--gds-sys-color-l${this.level}-neutral-02)`,r="var(--gds-sys-color-content-neutral-01)";break;case"brand-01":s="transparent",i=`var(--gds-sys-color-l${this.level}-brand-01)`,r="var(--gds-sys-color-content-inversed)";break;case"brand-02":s="transparent",i=`var(--gds-sys-color-l${this.level}-brand-02)`,r="var(--gds-sys-color-content-brand-02)";break;case"positive":case"negative":case"warning":case"information":case"notice":s=`var(--gds-sys-color-border-${t[0]}-02)`,i=`var(--gds-sys-color-l${this.level}-${t[0]}-01)`,r=`var(--gds-sys-color-content-${t[0]}-01)`;break;default:s="transparent",i=`var(--gds-sys-color-l${this.level}-neutral-01)`,r="var(--gds-sys-color-content-neutral-01)";break}return`
      --_border-color: ${s};
      --_background-color: ${i};
      --_color: ${r};
      `}})],Bt.prototype,"variant",2);Bt=o([w("gds-card")],Bt);let rt=class extends P{};rt._regularSVG='<path d="M12 2.75L12.6457 2.36845C12.5108 2.1401 12.2652 2 12 2C11.7348 2 11.4892 2.1401 11.3543 2.36845L12 2.75ZM2.25 19.25L1.60431 18.8685C1.4673 19.1003 1.46512 19.3878 1.59859 19.6217C1.73207 19.8556 1.9807 20 2.25 20V19.25ZM21.75 19.25V20C22.0193 20 22.2679 19.8556 22.4014 19.6217C22.5349 19.3878 22.5327 19.1003 22.3957 18.8685L21.75 19.25ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75H11.25ZM12.75 15.74C12.75 15.3258 12.4142 14.99 12 14.99C11.5858 14.99 11.25 15.3258 11.25 15.74H12.75ZM12 2.75L11.3543 2.36845L1.60431 18.8685L2.25 19.25L2.89569 19.6315L12.6457 3.13155L12 2.75ZM2.25 19.25V20H21.75V19.25V18.5H2.25V19.25ZM21.75 19.25L22.3957 18.8685L12.6457 2.36845L12 2.75L11.3543 3.13155L21.1043 19.6315L21.75 19.25ZM12 9.75H11.25V13.25H12H12.75V9.75H12ZM12.25 15.75H11.5C11.5 15.4739 11.7239 15.25 12 15.25V16V16.75C12.5523 16.75 13 16.3023 13 15.75H12.25ZM12 16V15.25C12.2761 15.25 12.5 15.4739 12.5 15.75H11.75H11C11 16.3023 11.4477 16.75 12 16.75V16ZM11.75 15.75H12.5C12.5 16.0261 12.2761 16.25 12 16.25V15.5V14.75C11.4477 14.75 11 15.1977 11 15.75H11.75ZM12 15.5V16.25C11.7239 16.25 11.5 16.0261 11.5 15.75H12.25H13C13 15.1977 12.5523 14.75 12 14.75V15.5ZM12 15.75H12.75V15.74H12H11.25V15.75H12Z" fill="currentColor"/>';rt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5108 2.1401 12.6457 2.36845L22.3957 18.8685C22.5327 19.1003 22.5349 19.3878 22.4014 19.6217C22.2679 19.8556 22.0193 20 21.75 20H2.25C1.9807 20 1.73207 19.8556 1.59859 19.6217C1.46512 19.3878 1.4673 19.1003 1.60431 18.8685L11.3543 2.36845C11.4892 2.1401 11.7348 2 12 2ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z" fill="currentColor"/>';rt._name="triangle-exclamation";rt._width=24;rt._height=24;rt._viewBox="0 0 24 24";rt=o([w("gds-icon-triangle-exclamation")],rt);const yl=C`
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
`;var vl=yl,Ro,Ur;let Ce=class extends L{constructor(){super(...arguments),p(this,Ro)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter)}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return b`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${T(this.errorMessage,()=>b`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `)}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${T(Number.isInteger(this.charCounter),()=>g(this,Ro,Ur).call(this,this.charCounter))}
      </div>
    </div>`}};Ro=new WeakSet;Ur=function(e){let t;return e<0?t="negative":e<20?t="warning":t="positive",b`<gds-badge variant="${t}">${e}</gds-badge>`};Ce.styles=[vl];o([a({type:Number})],Ce.prototype,"charCounter",2);o([a()],Ce.prototype,"errorMessage",2);o([V("charCounter"),V("errorMessage")],Ce.prototype,"_handleVisibilityChange",1);Ce=o([w("gds-form-control-footer",{dependsOn:[Fe,rt]})],Ce);let nt=class extends P{};nt._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7.375C12.3452 7.375 12.625 7.65482 12.625 8C12.625 8.34518 12.3452 8.625 12 8.625C11.6548 8.625 11.375 8.34518 11.375 8C11.375 7.65482 11.6548 7.375 12 7.375Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>';nt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>';nt._name="circle-info";nt._width=24;nt._height=24;nt._viewBox="0 0 24 24";nt=o([w("gds-icon-circle-info")],nt);const ml=C`
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
`;var xl=ml,ro,Xr,Bo,Fo,Fs,Kr;let Se=class extends L{constructor(){super(...arguments),p(this,ro),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,p(this,Bo,()=>b`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${k("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${l(this,Fo)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `),p(this,Fo,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this._extendedSupportingText?.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText})}),p(this,Fs,()=>{this.showExtendedSupportingText&&this._extendedSupportingText?.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`)})}render(){return b`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${T(this._hasExtendedSupportingText,l(this,Bo))}
      </div>

      ${g(this,ro,Kr).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",l(this,Fs))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",l(this,Fs))}};ro=new WeakSet;Xr=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0};Bo=new WeakMap;Fo=new WeakMap;Fs=new WeakMap;Kr=function(){return b`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${g(this,ro,Xr)}
        ></slot>
      </div>
    `};Se.styles=[xl];o([a({type:Boolean,reflect:!0})],Se.prototype,"showExtendedSupportingText",2);o([J()],Se.prototype,"_hasExtendedSupportingText",2);o([R("#extended-supporting-text")],Se.prototype,"_extendedSupportingText",2);Se=o([w("gds-form-control-header",{dependsOn:[Ne,Bt,nt]}),ue()],Se);const _l=C`
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
`;var Hs,We,Jr,Qr,en,tn,Xi,sn,on;let fe=class extends q{constructor(){super(...arguments),p(this,We),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,p(this,Hs,()=>{this.checkboxes.forEach(e=>{e.invalid=this.invalid})})}get value(){return this._internalValue||[]}set value(e){this._internalValue=e}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this._elCheckboxGroup}_handleValueChange(){this.checkboxes.forEach(e=>{e.checked=this.value.includes(e.value)||!1})}_handleGroupInvalidChange(){l(this,Hs).call(this)}focus(){this.checkboxes[0]?.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",l(this,Hs))}render(){const e={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return b`<div
      role="group"
      id="checkboxgroup"
      class=${re(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${g(this,We,Jr).call(this)}
    </div>`}_syncOnDOMChange(){g(this,We,Xi).call(this)}};Hs=new WeakMap;We=new WeakSet;Jr=function(){return[g(this,We,Qr).call(this),g(this,We,en).call(this),g(this,We,on).call(this)].map(t=>b`${t}`)};Qr=function(){if(this.label)return b`<gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};en=function(){return b`<div class="content">
      <slot @input=${g(this,We,tn)}></slot>
    </div>`};tn=function(e){e&&e.stopPropagation(),g(this,We,Xi).call(this),g(this,We,sn).call(this)};Xi=function(){const e=this.checkboxes.filter(t=>t.checked).map(t=>t.value);JSON.stringify(e)!==JSON.stringify(this.value)&&(this.value=e)};sn=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};on=function(){return b`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};fe.styles=[_l];o([a()],fe.prototype,"size",2);o([a()],fe.prototype,"direction",2);o([a({attribute:"supporting-text"})],fe.prototype,"supportingText",2);o([a({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],fe.prototype,"showExtendedSupportingText",2);o([a({type:Array})],fe.prototype,"value",1);o([R("#checkboxgroup")],fe.prototype,"_elCheckboxGroup",2);o([V("value",{waitUntilFirstUpdate:!0})],fe.prototype,"_handleValueChange",1);o([V("invalid")],fe.prototype,"_handleGroupInvalidChange",1);o([mo({attributes:!0,childList:!0,subtree:!0,characterData:!0})],fe.prototype,"_syncOnDOMChange",1);fe=o([ue()],fe);let Ho=class extends de(he(le(fe))){};Ho=o([w("gds-checkbox-group",{dependsOn:[Se,Ce]})],Ho);const wl=C`
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
`;var kl=wl;let Ft=class extends L{constructor(){super(),this.label="",this.supportingText=""}render(){const e={label:!0,"has-supporting-text":!!this.supportingText};return b`
      <div class="container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${re(e)}">
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
      </div>
    `}};Ft.styles=[O,kl];o([a()],Ft.prototype,"label",2);o([a({attribute:"supporting-text"})],Ft.prototype,"supportingText",2);Ft=o([w("gds-toggle-control-base"),ue()],Ft);const $l=C`
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
`;var Cl=$l,ws,rn,Ki;let Me=class extends q{constructor(){super(...arguments),p(this,ws),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1}get value(){return this._internalValue||""}set value(e){this._internalValue=e}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}render(){return b`
      <input
        type="checkbox"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        ?indeterminate=${this.indeterminate}
        aria-invalid=${this.invalid}
        aria-describedby=${D(this.supportingText?"supporting-text":"")}
        id="checkbox-input"
        @change=${()=>{this.checked=this._elCheckbox.checked,g(this,ws,Ki).call(this)}}
      />
      <gds-toggle-control-base type="checkbox" @click=${g(this,ws,rn)}>
        <label for="checkbox-input" slot="label"> ${this.label} </label>
        <span
          slot="supporting-text"
          class="supporting-text"
          id="supporting-text"
        >
          ${this.supportingText}
        </span>
        ${Hr({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}_getValidityAnchor(){return this._elCheckbox}formResetCallback(){this.checked=!1}};ws=new WeakSet;rn=function(e){this.disabled||e.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,g(this,ws,Ki).call(this))};Ki=function(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};Me.styles=[O,Zi,Cl];o([a()],Me.prototype,"label",2);o([a({attribute:"supporting-text"})],Me.prototype,"supportingText",2);o([a({type:Boolean})],Me.prototype,"checked",2);o([a({type:Boolean,reflect:!0})],Me.prototype,"indeterminate",2);o([a({type:Boolean,reflect:!0})],Me.prototype,"disabled",2);o([R('input[type="checkbox"]')],Me.prototype,"_elCheckbox",2);o([V("indeterminate")],Me.prototype,"_handleIndeterminateChange",1);Me=o([w("gds-checkbox",{dependsOn:[Ft,me,ht]})],Me);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Sl}=_a,Ml=e=>e===null||typeof e!="object"&&typeof e!="function",El=e=>e.strings===void 0,_r=()=>document.createComment(""),hs=(e,t,s)=>{const i=e._$AA.parentNode,r=t===void 0?e._$AB:t._$AA;if(s===void 0){const n=i.insertBefore(_r(),r),d=i.insertBefore(_r(),r);s=new Sl(n,d,e,e.options)}else{const n=s._$AB.nextSibling,d=s._$AM,c=d!==e;if(c){let h;s._$AQ?.(e),s._$AM=e,s._$AP!==void 0&&(h=e._$AU)!==d._$AU&&s._$AP(h)}if(n!==r||c){let h=s._$AA;for(;h!==n;){const u=h.nextSibling;i.insertBefore(h,r),h=u}}}return s},At=(e,t,s=e)=>(e._$AI(t,s),e),Tl={},Al=(e,t=Tl)=>e._$AH=t,Dl=e=>e._$AH,To=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ks=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const i of s)i._$AO?.(t,!1),ks(i,t);return!0},no=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},nn=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Ol(t)}};function Ll(e){this._$AN!==void 0?(no(this),this._$AM=e,nn(this)):this._$AM=e}function zl(e,t=!1,s=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let n=s;n<i.length;n++)ks(i[n],!1),no(i[n]);else i!=null&&(ks(i,!1),no(i));else ks(this,e)}const Ol=e=>{e.type==Ls.CHILD&&(e._$AP??=zl,e._$AQ??=Ll)};class an extends zs{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),nn(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(ks(this,t),no(this))}setValue(t){if(El(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ln=()=>new Vl;let Vl=class{};const Ao=new WeakMap,dn=os(class extends an{render(e){return se}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),se}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=Ao.get(t);s===void 0&&(s=new WeakMap,Ao.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Ao.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Wl=["top","right","bottom","left"],Jt=Math.min,Wt=Math.max,ao=Math.round,Rs=Math.floor,Re=e=>({x:e,y:e}),Rl={left:"right",right:"left",bottom:"top",top:"bottom"},Bl={start:"end",end:"start"};function No(e,t,s){return Wt(e,Jt(t,s))}function rs(e,t){return typeof e=="function"?e(t):e}function Ht(e){return e.split("-")[0]}function Vs(e){return e.split("-")[1]}function cn(e){return e==="x"?"y":"x"}function Ji(e){return e==="y"?"height":"width"}const Fl=new Set(["top","bottom"]);function _t(e){return Fl.has(Ht(e))?"y":"x"}function Qi(e){return cn(_t(e))}function Hl(e,t,s){s===void 0&&(s=!1);const i=Vs(e),r=Qi(e),n=Ji(r);let d=r==="x"?i===(s?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(d=lo(d)),[d,lo(d)]}function Nl(e){const t=lo(e);return[Io(e),t,Io(t)]}function Io(e){return e.replace(/start|end/g,t=>Bl[t])}const wr=["left","right"],kr=["right","left"],Il=["top","bottom"],Gl=["bottom","top"];function Pl(e,t,s){switch(e){case"top":case"bottom":return s?t?kr:wr:t?wr:kr;case"left":case"right":return t?Il:Gl;default:return[]}}function Yl(e,t,s,i){const r=Vs(e);let n=Pl(Ht(e),s==="start",i);return r&&(n=n.map(d=>d+"-"+r),t&&(n=n.concat(n.map(Io)))),n}function lo(e){return e.replace(/left|right|bottom|top/g,t=>Rl[t])}function jl(e){return{top:0,right:0,bottom:0,left:0,...e}}function hn(e){return typeof e!="number"?jl(e):{top:e,right:e,bottom:e,left:e}}function co(e){const{x:t,y:s,width:i,height:r}=e;return{width:i,height:r,top:s,left:t,right:t+i,bottom:s+r,x:t,y:s}}function $r(e,t,s){let{reference:i,floating:r}=e;const n=_t(t),d=Qi(t),c=Ji(d),h=Ht(t),u=n==="y",m=i.x+i.width/2-r.width/2,f=i.y+i.height/2-r.height/2,x=i[c]/2-r[c]/2;let v;switch(h){case"top":v={x:m,y:i.y-r.height};break;case"bottom":v={x:m,y:i.y+i.height};break;case"right":v={x:i.x+i.width,y:f};break;case"left":v={x:i.x-r.width,y:f};break;default:v={x:i.x,y:i.y}}switch(Vs(t)){case"start":v[d]-=x*(s&&u?-1:1);break;case"end":v[d]+=x*(s&&u?-1:1);break}return v}const ql=async(e,t,s)=>{const{placement:i="bottom",strategy:r="absolute",middleware:n=[],platform:d}=s,c=n.filter(Boolean),h=await(d.isRTL==null?void 0:d.isRTL(t));let u=await d.getElementRects({reference:e,floating:t,strategy:r}),{x:m,y:f}=$r(u,i,h),x=i,v={},_=0;for(let $=0;$<c.length;$++){const{name:A,fn:E}=c[$],{x:W,y:N,data:ee,reset:Y}=await E({x:m,y:f,initialPlacement:i,placement:x,strategy:r,middlewareData:v,rects:u,platform:d,elements:{reference:e,floating:t}});m=W??m,f=N??f,v={...v,[A]:{...v[A],...ee}},Y&&_<=50&&(_++,typeof Y=="object"&&(Y.placement&&(x=Y.placement),Y.rects&&(u=Y.rects===!0?await d.getElementRects({reference:e,floating:t,strategy:r}):Y.rects),{x:m,y:f}=$r(u,x,h)),$=-1)}return{x:m,y:f,placement:x,strategy:r,middlewareData:v}};async function Es(e,t){var s;t===void 0&&(t={});const{x:i,y:r,platform:n,rects:d,elements:c,strategy:h}=e,{boundary:u="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:x=!1,padding:v=0}=rs(t,e),_=hn(v),A=c[x?f==="floating"?"reference":"floating":f],E=co(await n.getClippingRect({element:(s=await(n.isElement==null?void 0:n.isElement(A)))==null||s?A:A.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(c.floating)),boundary:u,rootBoundary:m,strategy:h})),W=f==="floating"?{x:i,y:r,width:d.floating.width,height:d.floating.height}:d.reference,N=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c.floating)),ee=await(n.isElement==null?void 0:n.isElement(N))?await(n.getScale==null?void 0:n.getScale(N))||{x:1,y:1}:{x:1,y:1},Y=co(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:W,offsetParent:N,strategy:h}):W);return{top:(E.top-Y.top+_.top)/ee.y,bottom:(Y.bottom-E.bottom+_.bottom)/ee.y,left:(E.left-Y.left+_.left)/ee.x,right:(Y.right-E.right+_.right)/ee.x}}const Zl=e=>({name:"arrow",options:e,async fn(t){const{x:s,y:i,placement:r,rects:n,platform:d,elements:c,middlewareData:h}=t,{element:u,padding:m=0}=rs(e,t)||{};if(u==null)return{};const f=hn(m),x={x:s,y:i},v=Qi(r),_=Ji(v),$=await d.getDimensions(u),A=v==="y",E=A?"top":"left",W=A?"bottom":"right",N=A?"clientHeight":"clientWidth",ee=n.reference[_]+n.reference[v]-x[v]-n.floating[_],Y=x[v]-n.reference[v],Xe=await(d.getOffsetParent==null?void 0:d.getOffsetParent(u));let ve=Xe?Xe[N]:0;(!ve||!await(d.isElement==null?void 0:d.isElement(Xe)))&&(ve=c.floating[N]||n.floating[_]);const ls=ee/2-Y/2,Mt=ve/2-$[_]/2-1,Ke=Jt(f[E],Mt),ds=Jt(f[W],Mt),Et=Ke,cs=ve-$[_]-ds,oe=ve/2-$[_]/2+ls,Tt=No(Et,oe,cs),Je=!h.arrow&&Vs(r)!=null&&oe!==Tt&&n.reference[_]/2-(oe<Et?Ke:ds)-$[_]/2<0,ke=Je?oe<Et?oe-Et:oe-cs:0;return{[v]:x[v]+ke,data:{[v]:Tt,centerOffset:oe-Tt-ke,...Je&&{alignmentOffset:ke}},reset:Je}}}),Ul=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,i;const{placement:r,middlewareData:n,rects:d,initialPlacement:c,platform:h,elements:u}=t,{mainAxis:m=!0,crossAxis:f=!0,fallbackPlacements:x,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:$=!0,...A}=rs(e,t);if((s=n.arrow)!=null&&s.alignmentOffset)return{};const E=Ht(r),W=_t(c),N=Ht(c)===c,ee=await(h.isRTL==null?void 0:h.isRTL(u.floating)),Y=x||(N||!$?[lo(c)]:Nl(c)),Xe=_!=="none";!x&&Xe&&Y.push(...Yl(c,$,_,ee));const ve=[c,...Y],ls=await Es(t,A),Mt=[];let Ke=((i=n.flip)==null?void 0:i.overflows)||[];if(m&&Mt.push(ls[E]),f){const oe=Hl(r,d,ee);Mt.push(ls[oe[0]],ls[oe[1]])}if(Ke=[...Ke,{placement:r,overflows:Mt}],!Mt.every(oe=>oe<=0)){var ds,Et;const oe=(((ds=n.flip)==null?void 0:ds.index)||0)+1,Tt=ve[oe];if(Tt&&(!(f==="alignment"?W!==_t(Tt):!1)||Ke.every($e=>_t($e.placement)===W?$e.overflows[0]>0:!0)))return{data:{index:oe,overflows:Ke},reset:{placement:Tt}};let Je=(Et=Ke.filter(ke=>ke.overflows[0]<=0).sort((ke,$e)=>ke.overflows[1]-$e.overflows[1])[0])==null?void 0:Et.placement;if(!Je)switch(v){case"bestFit":{var cs;const ke=(cs=Ke.filter($e=>{if(Xe){const pt=_t($e.placement);return pt===W||pt==="y"}return!0}).map($e=>[$e.placement,$e.overflows.filter(pt=>pt>0).reduce((pt,xa)=>pt+xa,0)]).sort(($e,pt)=>$e[1]-pt[1])[0])==null?void 0:cs[0];ke&&(Je=ke);break}case"initialPlacement":Je=c;break}if(r!==Je)return{reset:{placement:Je}}}return{}}}};function Cr(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Sr(e){return Wl.some(t=>e[t]>=0)}const Xl=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:s}=t,{strategy:i="referenceHidden",...r}=rs(e,t);switch(i){case"referenceHidden":{const n=await Es(t,{...r,elementContext:"reference"}),d=Cr(n,s.reference);return{data:{referenceHiddenOffsets:d,referenceHidden:Sr(d)}}}case"escaped":{const n=await Es(t,{...r,altBoundary:!0}),d=Cr(n,s.floating);return{data:{escapedOffsets:d,escaped:Sr(d)}}}default:return{}}}}},Kl=new Set(["left","top"]);async function Jl(e,t){const{placement:s,platform:i,elements:r}=e,n=await(i.isRTL==null?void 0:i.isRTL(r.floating)),d=Ht(s),c=Vs(s),h=_t(s)==="y",u=Kl.has(d)?-1:1,m=n&&h?-1:1,f=rs(t,e);let{mainAxis:x,crossAxis:v,alignmentAxis:_}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return c&&typeof _=="number"&&(v=c==="end"?_*-1:_),h?{x:v*m,y:x*u}:{x:x*u,y:v*m}}const Ql=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var s,i;const{x:r,y:n,placement:d,middlewareData:c}=t,h=await Jl(t,e);return d===((s=c.offset)==null?void 0:s.placement)&&(i=c.arrow)!=null&&i.alignmentOffset?{}:{x:r+h.x,y:n+h.y,data:{...h,placement:d}}}}},ed=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:i,placement:r}=t,{mainAxis:n=!0,crossAxis:d=!1,limiter:c={fn:A=>{let{x:E,y:W}=A;return{x:E,y:W}}},...h}=rs(e,t),u={x:s,y:i},m=await Es(t,h),f=_t(Ht(r)),x=cn(f);let v=u[x],_=u[f];if(n){const A=x==="y"?"top":"left",E=x==="y"?"bottom":"right",W=v+m[A],N=v-m[E];v=No(W,v,N)}if(d){const A=f==="y"?"top":"left",E=f==="y"?"bottom":"right",W=_+m[A],N=_-m[E];_=No(W,_,N)}const $=c.fn({...t,[x]:v,[f]:_});return{...$,data:{x:$.x-s,y:$.y-i,enabled:{[x]:n,[f]:d}}}}}};function xo(){return typeof window<"u"}function ns(e){return un(e)?(e.nodeName||"").toLowerCase():"#document"}function ge(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ue(e){var t;return(t=(un(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function un(e){return xo()?e instanceof Node||e instanceof ge(e).Node:!1}function Ee(e){return xo()?e instanceof Element||e instanceof ge(e).Element:!1}function Ie(e){return xo()?e instanceof HTMLElement||e instanceof ge(e).HTMLElement:!1}function Mr(e){return!xo()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ge(e).ShadowRoot}const td=new Set(["inline","contents"]);function Ws(e){const{overflow:t,overflowX:s,overflowY:i,display:r}=Te(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+s)&&!td.has(r)}const sd=new Set(["table","td","th"]);function od(e){return sd.has(ns(e))}const id=[":popover-open",":modal"];function _o(e){return id.some(t=>{try{return e.matches(t)}catch{return!1}})}const rd=["transform","translate","scale","rotate","perspective"],nd=["transform","translate","scale","rotate","perspective","filter"],ad=["paint","layout","strict","content"];function er(e){const t=tr(),s=Ee(e)?Te(e):e;return rd.some(i=>s[i]?s[i]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||nd.some(i=>(s.willChange||"").includes(i))||ad.some(i=>(s.contain||"").includes(i))}function ld(e){let t=wt(e);for(;Ie(t)&&!Qt(t);){if(er(t))return t;if(_o(t))return null;t=wt(t)}return null}function tr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const dd=new Set(["html","body","#document"]);function Qt(e){return dd.has(ns(e))}function Te(e){return ge(e).getComputedStyle(e)}function wo(e){return Ee(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function wt(e){if(ns(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Mr(e)&&e.host||Ue(e);return Mr(t)?t.host:t}function pn(e){const t=wt(e);return Qt(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ie(t)&&Ws(t)?t:pn(t)}function Ts(e,t,s){var i;t===void 0&&(t=[]),s===void 0&&(s=!0);const r=pn(e),n=r===((i=e.ownerDocument)==null?void 0:i.body),d=ge(r);if(n){const c=Go(d);return t.concat(d,d.visualViewport||[],Ws(r)?r:[],c&&s?Ts(c):[])}return t.concat(r,Ts(r,[],s))}function Go(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function gn(e){const t=Te(e);let s=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=Ie(e),n=r?e.offsetWidth:s,d=r?e.offsetHeight:i,c=ao(s)!==n||ao(i)!==d;return c&&(s=n,i=d),{width:s,height:i,$:c}}function sr(e){return Ee(e)?e:e.contextElement}function Xt(e){const t=sr(e);if(!Ie(t))return Re(1);const s=t.getBoundingClientRect(),{width:i,height:r,$:n}=gn(t);let d=(n?ao(s.width):s.width)/i,c=(n?ao(s.height):s.height)/r;return(!d||!Number.isFinite(d))&&(d=1),(!c||!Number.isFinite(c))&&(c=1),{x:d,y:c}}const cd=Re(0);function fn(e){const t=ge(e);return!tr()||!t.visualViewport?cd:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function hd(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==ge(e)?!1:t}function Nt(e,t,s,i){t===void 0&&(t=!1),s===void 0&&(s=!1);const r=e.getBoundingClientRect(),n=sr(e);let d=Re(1);t&&(i?Ee(i)&&(d=Xt(i)):d=Xt(e));const c=hd(n,s,i)?fn(n):Re(0);let h=(r.left+c.x)/d.x,u=(r.top+c.y)/d.y,m=r.width/d.x,f=r.height/d.y;if(n){const x=ge(n),v=i&&Ee(i)?ge(i):i;let _=x,$=Go(_);for(;$&&i&&v!==_;){const A=Xt($),E=$.getBoundingClientRect(),W=Te($),N=E.left+($.clientLeft+parseFloat(W.paddingLeft))*A.x,ee=E.top+($.clientTop+parseFloat(W.paddingTop))*A.y;h*=A.x,u*=A.y,m*=A.x,f*=A.y,h+=N,u+=ee,_=ge($),$=Go(_)}}return co({width:m,height:f,x:h,y:u})}function or(e,t){const s=wo(e).scrollLeft;return t?t.left+s:Nt(Ue(e)).left+s}function bn(e,t,s){s===void 0&&(s=!1);const i=e.getBoundingClientRect(),r=i.left+t.scrollLeft-(s?0:or(e,i)),n=i.top+t.scrollTop;return{x:r,y:n}}function ud(e){let{elements:t,rect:s,offsetParent:i,strategy:r}=e;const n=r==="fixed",d=Ue(i),c=t?_o(t.floating):!1;if(i===d||c&&n)return s;let h={scrollLeft:0,scrollTop:0},u=Re(1);const m=Re(0),f=Ie(i);if((f||!f&&!n)&&((ns(i)!=="body"||Ws(d))&&(h=wo(i)),Ie(i))){const v=Nt(i);u=Xt(i),m.x=v.x+i.clientLeft,m.y=v.y+i.clientTop}const x=d&&!f&&!n?bn(d,h,!0):Re(0);return{width:s.width*u.x,height:s.height*u.y,x:s.x*u.x-h.scrollLeft*u.x+m.x+x.x,y:s.y*u.y-h.scrollTop*u.y+m.y+x.y}}function pd(e){return Array.from(e.getClientRects())}function gd(e){const t=Ue(e),s=wo(e),i=e.ownerDocument.body,r=Wt(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),n=Wt(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let d=-s.scrollLeft+or(e);const c=-s.scrollTop;return Te(i).direction==="rtl"&&(d+=Wt(t.clientWidth,i.clientWidth)-r),{width:r,height:n,x:d,y:c}}function fd(e,t){const s=ge(e),i=Ue(e),r=s.visualViewport;let n=i.clientWidth,d=i.clientHeight,c=0,h=0;if(r){n=r.width,d=r.height;const u=tr();(!u||u&&t==="fixed")&&(c=r.offsetLeft,h=r.offsetTop)}return{width:n,height:d,x:c,y:h}}const bd=new Set(["absolute","fixed"]);function yd(e,t){const s=Nt(e,!0,t==="fixed"),i=s.top+e.clientTop,r=s.left+e.clientLeft,n=Ie(e)?Xt(e):Re(1),d=e.clientWidth*n.x,c=e.clientHeight*n.y,h=r*n.x,u=i*n.y;return{width:d,height:c,x:h,y:u}}function Er(e,t,s){let i;if(t==="viewport")i=fd(e,s);else if(t==="document")i=gd(Ue(e));else if(Ee(t))i=yd(t,s);else{const r=fn(e);i={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return co(i)}function yn(e,t){const s=wt(e);return s===t||!Ee(s)||Qt(s)?!1:Te(s).position==="fixed"||yn(s,t)}function vd(e,t){const s=t.get(e);if(s)return s;let i=Ts(e,[],!1).filter(c=>Ee(c)&&ns(c)!=="body"),r=null;const n=Te(e).position==="fixed";let d=n?wt(e):e;for(;Ee(d)&&!Qt(d);){const c=Te(d),h=er(d);!h&&c.position==="fixed"&&(r=null),(n?!h&&!r:!h&&c.position==="static"&&!!r&&bd.has(r.position)||Ws(d)&&!h&&yn(e,d))?i=i.filter(m=>m!==d):r=c,d=wt(d)}return t.set(e,i),i}function md(e){let{element:t,boundary:s,rootBoundary:i,strategy:r}=e;const d=[...s==="clippingAncestors"?_o(t)?[]:vd(t,this._c):[].concat(s),i],c=d[0],h=d.reduce((u,m)=>{const f=Er(t,m,r);return u.top=Wt(f.top,u.top),u.right=Jt(f.right,u.right),u.bottom=Jt(f.bottom,u.bottom),u.left=Wt(f.left,u.left),u},Er(t,c,r));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function xd(e){const{width:t,height:s}=gn(e);return{width:t,height:s}}function _d(e,t,s){const i=Ie(t),r=Ue(t),n=s==="fixed",d=Nt(e,!0,n,t);let c={scrollLeft:0,scrollTop:0};const h=Re(0);function u(){h.x=or(r)}if(i||!i&&!n)if((ns(t)!=="body"||Ws(r))&&(c=wo(t)),i){const v=Nt(t,!0,n,t);h.x=v.x+t.clientLeft,h.y=v.y+t.clientTop}else r&&u();n&&!i&&r&&u();const m=r&&!i&&!n?bn(r,c):Re(0),f=d.left+c.scrollLeft-h.x-m.x,x=d.top+c.scrollTop-h.y-m.y;return{x:f,y:x,width:d.width,height:d.height}}function Do(e){return Te(e).position==="static"}function Tr(e,t){if(!Ie(e)||Te(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return Ue(e)===s&&(s=s.ownerDocument.body),s}function vn(e,t){const s=ge(e);if(_o(e))return s;if(!Ie(e)){let r=wt(e);for(;r&&!Qt(r);){if(Ee(r)&&!Do(r))return r;r=wt(r)}return s}let i=Tr(e,t);for(;i&&od(i)&&Do(i);)i=Tr(i,t);return i&&Qt(i)&&Do(i)&&!er(i)?s:i||ld(e)||s}const wd=async function(e){const t=this.getOffsetParent||vn,s=this.getDimensions,i=await s(e.floating);return{reference:_d(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function kd(e){return Te(e).direction==="rtl"}const $d={convertOffsetParentRelativeRectToViewportRelativeRect:ud,getDocumentElement:Ue,getClippingRect:md,getOffsetParent:vn,getElementRects:wd,getClientRects:pd,getDimensions:xd,getScale:Xt,isElement:Ee,isRTL:kd};function mn(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Cd(e,t){let s=null,i;const r=Ue(e);function n(){var c;clearTimeout(i),(c=s)==null||c.disconnect(),s=null}function d(c,h){c===void 0&&(c=!1),h===void 0&&(h=1),n();const u=e.getBoundingClientRect(),{left:m,top:f,width:x,height:v}=u;if(c||t(),!x||!v)return;const _=Rs(f),$=Rs(r.clientWidth-(m+x)),A=Rs(r.clientHeight-(f+v)),E=Rs(m),N={rootMargin:-_+"px "+-$+"px "+-A+"px "+-E+"px",threshold:Wt(0,Jt(1,h))||1};let ee=!0;function Y(Xe){const ve=Xe[0].intersectionRatio;if(ve!==h){if(!ee)return d();ve?d(!1,ve):i=setTimeout(()=>{d(!1,1e-7)},1e3)}ve===1&&!mn(u,e.getBoundingClientRect())&&d(),ee=!1}try{s=new IntersectionObserver(Y,{...N,root:r.ownerDocument})}catch{s=new IntersectionObserver(Y,N)}s.observe(e)}return d(!0),n}function Sd(e,t,s,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:h=!1}=i,u=sr(e),m=r||n?[...u?Ts(u):[],...Ts(t)]:[];m.forEach(E=>{r&&E.addEventListener("scroll",s,{passive:!0}),n&&E.addEventListener("resize",s)});const f=u&&c?Cd(u,s):null;let x=-1,v=null;d&&(v=new ResizeObserver(E=>{let[W]=E;W&&W.target===u&&v&&(v.unobserve(t),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{var N;(N=v)==null||N.observe(t)})),s()}),u&&!h&&v.observe(u),v.observe(t));let _,$=h?Nt(e):null;h&&A();function A(){const E=Nt(e);$&&!mn($,E)&&s(),$=E,_=requestAnimationFrame(A)}return s(),()=>{var E;m.forEach(W=>{r&&W.removeEventListener("scroll",s),n&&W.removeEventListener("resize",s)}),f?.(),(E=v)==null||E.disconnect(),v=null,h&&cancelAnimationFrame(_)}}const oh=Es,xn=Ql,Md=ed,Ed=Ul,ih=Xl,rh=Zl,Td=(e,t,s)=>{const i=new Map,r={platform:$d,...s},n={...r.platform,_c:i};return ql(e,t,{...r,platform:n})};var Ns;class _n{constructor(t){p(this,Ns,s=>{const i=s.target;if(!this.host.navigableItems.includes(i))return;let r=!1;if(s.key==="ArrowDown"){const n=this.host.navigableItems.indexOf(i)+1;this.host.navigableItems[n]?.focus(),r=!0}else if(s.key==="ArrowUp"){const n=this.host.navigableItems.indexOf(i)-1;this.host.navigableItems[n]?.focus(),r=!0}else if(s.key==="Home")this.host.navigableItems[0]?.focus(),r=!0;else if(s.key==="End")this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),r=!0;else{const n=s.key.toLowerCase();if(n.length!==1)return;const d=n>="a"&&n<="z",c=n>="0"&&n<="9";(d||c)&&(this.host.navigableItems.find(u=>u.textContent?.trim().toLowerCase()?.startsWith(n))?.focus(),r=!0)}r&&(s.preventDefault(),s.stopPropagation())}),(this.host=t).addController(this)}hostConnected(){this.host.addEventListener("keydown",l(this,Ns))}hostDisconnected(){this.host.removeEventListener("keydown",l(this,Ns))}}Ns=new WeakMap;function wn(e){let t=e;for(;t.assignedElements().length>0&&t.assignedElements()[0].nodeName==="SLOT";)t=t.assignedElements()[0];return t}var gs;let Po=class extends L{constructor(){super(),p(this,gs,ln()),new _n(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),ae.instance.apply(this,"gds-listbox")}get navigableItems(){return l(this,gs).value?wn(l(this,gs).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){this.navigableItems[0]?.focus()}render(){return b`<slot ${dn(l(this,gs))}></slot>`}};gs=new WeakMap;Po=o([w("gds-menu",{dependsOn:[Kt]})],Po);let Ge=class extends P{};Ge._regularSVG='<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" fill="currentColor"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" fill="currentColor"/><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Ge._solidSVG='<path d="M3.75 10.25C2.7835 10.25 2 11.0335 2 12C2 12.9665 2.7835 13.75 3.75 13.75C4.7165 13.75 5.5 12.9665 5.5 12C5.5 11.0335 4.7165 10.25 3.75 10.25Z" fill="currentColor"/><path d="M12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25Z" fill="currentColor"/><path d="M20.25 10.25C19.2835 10.25 18.5 11.0335 18.5 12C18.5 12.9665 19.2835 13.75 20.25 13.75C21.2165 13.75 22 12.9665 22 12C22 11.0335 21.2165 10.25 20.25 10.25Z" fill="currentColor"/>';Ge._name="dot-grid-one-horizontal";Ge._width=24;Ge._height=24;Ge._viewBox="0 0 24 24";Ge=o([w("gds-icon-dot-grid-one-horizontal")],Ge);Ge.define();let Pe=class extends P{};Pe._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';Pe._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>';Pe._name="cross-small";Pe._width=24;Pe._height=24;Pe._viewBox="0 0 24 24";Pe=o([w("gds-icon-cross-small")],Pe);const Ad=C`
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
`;var Dd=Ad,Qe,kn,Rt,ho,ft,fs,bt,Yo,jo,$n,Cn,qo,ko,$o,Is,Gs,bs;let M=class extends L{constructor(){super(...arguments),p(this,Qe),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.autofocus=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>`${window.innerHeight-16}px`,this.nonmodal=!1,this.floatingUIMiddleware=M.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,p(this,Rt),p(this,ho,!1),p(this,ft),p(this,fs,()=>{l(this,bt).call(this,"cancel")&&(this.open=!1)}),p(this,bt,e=>{const t=e==="show";return this.dispatchCustomEvent("gds-ui-state",{detail:{open:t,reason:e},bubbles:!1,composed:!1,cancelable:!0})}),p(this,Yo,e=>{e.stopPropagation(),e.preventDefault(),l(this,bt).call(this,"close")&&(this.open=!1,setTimeout(()=>this._trigger?.focus(),250))}),p(this,ko,e=>{(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),this.open=!0,l(this,bt).call(this,"show")),e.key==="Escape"&&this.open&&l(this,fs).call(this)}),p(this,$o,e=>{e.preventDefault(),l(this,bt).call(this,this.open?"close":"show")&&(this.open=!this.open)}),p(this,Is,()=>{const e=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then(()=>{e?.focus()})}),p(this,Gs,e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const r=s.getBoundingClientRect();!(r.top<=t.clientY&&t.clientY<=r.top+r.height&&r.left<=t.clientX&&t.clientX<=r.left+r.width)&&l(this,bt).call(this,"close")&&(this.open=!1)}}),p(this,bs,()=>{this.open&&window.innerWidth>767&&l(this,bt).call(this,"close")&&(this.open=!1)})}_handleTriggerRefChanged(){this.triggerRef?.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){this.anchorRef?.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){g(this,Qe,jo).call(this),g(this,Qe,Cn).call(this)}_handleAnchorChanged(){g(this,Qe,qo).call(this)}connectedCallback(){super.connectedCallback(),ae.instance.apply(this,"gds-popover"),g(this,Qe,jo).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{e.key==="Escape"&&this.open&&(l(this,fs).call(this),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{const t=e.target;t!==this&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1)}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),g(this,Qe,$n).call(this),window.removeEventListener("scroll",l(this,bs))}render(){return b`<slot
        name="trigger"
        @slotchange=${g(this,Qe,kn)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${re({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":!!(this.backdrop&&this.backdrop==="true")})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&l(this,fs).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${l(this,Yo)}
              class="close"
              label="${k("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></gds-icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const e=(this.nonmodal?l(this,ft):this._elDialog)||document;this.updateComplete.then(()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?this._elDialog?.setAttribute("open","true"):this._elDialog?.showModal(),this.autofocus&&(l(this,Is).call(this),setTimeout(()=>l(this,Is).call(this),250)),requestAnimationFrame(()=>{l(this,ft)&&(l(this,ft).show=!0)}),setTimeout(()=>e.addEventListener("click",l(this,Gs)),0),window.addEventListener("scroll",l(this,bs),{passive:!0})):(this._elDialog?.close(),e.removeEventListener("click",l(this,Gs)),window.removeEventListener("scroll",l(this,bs)),l(this,ft)&&(l(this,ft).show=!1))})}_handleBackdropChange(){const e=this.parentElement?.getRootNode();!this.backdrop||!e||j(this,ft,e.querySelector(this.backdrop))}_handleMobileLayout(e){var t;j(this,ho,e),e&&!this.disableMobileStyles?((t=l(this,Rt))==null||t.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("minWidth"),this._elDialog?.style.removeProperty("min-width"),this.updateComplete.then(()=>{this.open&&this._elDialog?.showModal()})):this.updateComplete.then(()=>{g(this,Qe,qo).call(this)})}};Qe=new WeakSet;kn=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])};Rt=new WeakMap;ho=new WeakMap;ft=new WeakMap;fs=new WeakMap;bt=new WeakMap;Yo=new WeakMap;jo=function(){this._trigger?.addEventListener("keydown",l(this,ko)),this._trigger?.addEventListener("click",l(this,$o))};$n=function(){var e;this._trigger?.removeEventListener("keydown",l(this,ko)),this._trigger?.removeEventListener("click",l(this,$o)),(e=l(this,Rt))==null||e.call(this)};Cn=function(){if(this._trigger){this._trigger?.setAttribute("aria-expanded",String(this.open));const e=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||e.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const s=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";this._trigger.getAttribute(s)===null&&this._trigger.setAttribute(s,this.popupRole)}};qo=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;!e||!t||l(this,ho)&&!this.disableMobileStyles||(l(this,Rt)&&l(this,Rt).call(this),j(this,Rt,Sd(e,t,()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),Td(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:s,y:i})=>Object.assign(t.style,{left:`${s}px`,top:`${i}px`}))})))};ko=new WeakMap;$o=new WeakMap;Is=new WeakMap;Gs=new WeakMap;bs=new WeakMap;M.styles=Dd;M.DefaultMiddleware=[xn(8),Md({crossAxis:!0,padding:8})];o([a({type:Boolean,reflect:!0})],M.prototype,"open",2);o([a({attribute:"popup-role"})],M.prototype,"popupRole",2);o([a({attribute:!1})],M.prototype,"triggerRef",2);o([a({attribute:!1})],M.prototype,"anchorRef",2);o([a()],M.prototype,"label",2);o([a()],M.prototype,"placement",2);o([a({type:Boolean})],M.prototype,"disableMobileStyles",2);o([a({type:Boolean})],M.prototype,"autofocus",2);o([a({attribute:!1})],M.prototype,"calcMinWidth",2);o([a({attribute:!1})],M.prototype,"calcMaxWidth",2);o([a({attribute:!1})],M.prototype,"calcMinHeight",2);o([a({attribute:!1})],M.prototype,"calcMaxHeight",2);o([a({type:Boolean,reflect:!0})],M.prototype,"nonmodal",2);o([a()],M.prototype,"backdrop",2);o([a({attribute:!1})],M.prototype,"floatingUIMiddleware",2);o([J()],M.prototype,"_trigger",2);o([J()],M.prototype,"_anchor",2);o([J()],M.prototype,"_isVirtKbVisible",2);o([R("slot:not([name])")],M.prototype,"_elDefaultSlot",2);o([R('slot[name="trigger"]')],M.prototype,"_elTriggerSlot",2);o([R("dialog")],M.prototype,"_elDialog",2);o([V("triggerRef")],M.prototype,"_handleTriggerRefChanged",1);o([V("anchorRef")],M.prototype,"_handleAnchorRefChanged",1);o([V("_trigger")],M.prototype,"_handleTriggerChanged",1);o([V("_anchor")],M.prototype,"_handleAnchorChanged",1);o([V("open")],M.prototype,"_handleOpenChange",1);o([V("backdrop")],M.prototype,"_handleBackdropChange",1);o([Fa("(max-width: 576px)")],M.prototype,"_handleMobileLayout",1);M=o([w("gds-popover",{dependsOn:[Pe]}),ue()],M);var Pt,Ps,Zo,Sn;let xe=class extends he(de(L)){constructor(){super(...arguments),p(this,Pt),this.open=!1,this.buttonLabel=k("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",p(this,Zo,()=>b`<gds-popover
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
        @gds-menu-item-click=${g(this,Pt,Sn)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),ae.instance.apply(this,"gds-context-menu"),g(this,Pt,Ps).call(this),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return b`<gds-button
        .rank=${"secondary"}
        id="trigger"
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        label=${this.buttonLabel}
        @click=${()=>this.open=!0}
      >
        ${this.showLabel?b`<slot
                name="icon"
                slot="lead"
                @slotchange=${g(this,Pt,Ps)}
              ></slot
              >${this.buttonLabel}`:b`<slot
              name="icon"
              @slotchange=${g(this,Pt,Ps)}
            ></slot>`}
      </gds-button>
      ${T(this.open,l(this,Zo))}`}};Pt=new WeakSet;Ps=function(){this.elIconSlot.then(e=>{if(!e.assignedNodes({flatten:!0}).some(t=>t instanceof Element&&t.tagName.toLowerCase().startsWith("gds-icon"))){const t=document.createElement(wa("gds-icon-dot-grid-one-horizontal"));e.appendChild(t),this.requestUpdate()}})};Zo=new WeakMap;Sn=function(){this.open=!1};xe.styles=[O];xe.shadowRootOptions={mode:"open",delegatesFocus:!0};o([a({type:Boolean,reflect:!0})],xe.prototype,"open",2);o([a({attribute:"button-label"})],xe.prototype,"buttonLabel",2);o([a({attribute:"show-label",type:Boolean})],xe.prototype,"showLabel",2);o([a()],xe.prototype,"label",2);o([a()],xe.prototype,"placement",2);o([ut("#trigger")],xe.prototype,"elTriggerBtn",2);o([ut('slot[name="icon"]')],xe.prototype,"elIconSlot",2);xe=o([w("gds-context-menu",{dependsOn:[Kt,Po,M,Ne,Ge]}),ue()],xe);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ld(e,t){const s=typeof t=="function";if(e!==void 0){let i=-1;for(const r of e)i>-1&&(yield s?t(i):t),i++,yield r}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*zd(e,t){if(e!==void 0){let s=0;for(const i of e)yield t(i,s++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ar=(e,t,s)=>{const i=new Map;for(let r=t;r<=s;r++)i.set(e[r],r);return i},Od=os(class extends zs{constructor(e){if(super(e),e.type!==Ls.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,s){let i;s===void 0?s=t:t!==void 0&&(i=t);const r=[],n=[];let d=0;for(const c of e)r[d]=i?i(c,d):d,n[d]=s(c,d),d++;return{values:n,keys:r}}render(e,t,s){return this.dt(e,t,s).values}update(e,[t,s,i]){const r=Dl(e),{values:n,keys:d}=this.dt(t,s,i);if(!Array.isArray(r))return this.ut=d,n;const c=this.ut??=[],h=[];let u,m,f=0,x=r.length-1,v=0,_=n.length-1;for(;f<=x&&v<=_;)if(r[f]===null)f++;else if(r[x]===null)x--;else if(c[f]===d[v])h[v]=At(r[f],n[v]),f++,v++;else if(c[x]===d[_])h[_]=At(r[x],n[_]),x--,_--;else if(c[f]===d[_])h[_]=At(r[f],n[_]),hs(e,h[_+1],r[f]),f++,_--;else if(c[x]===d[v])h[v]=At(r[x],n[v]),hs(e,r[f],r[x]),x--,v++;else if(u===void 0&&(u=Ar(d,v,_),m=Ar(c,f,x)),u.has(c[f]))if(u.has(c[x])){const $=m.get(d[v]),A=$!==void 0?r[$]:null;if(A===null){const E=hs(e,r[f]);At(E,n[v]),h[v]=E}else h[v]=At(A,n[v]),hs(e,r[f],A),r[$]=null;v++}else To(r[x]),x--;else To(r[f]),f++;for(;v<=_;){const $=hs(e,h[_+1]);At($,n[v]),h[v++]=$}for(;f<=x;){const $=r[f++];$!==null&&To($)}return this.ut=d,Al(e,h),Ss}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vd{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Wd{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dr=e=>!Ml(e)&&typeof e.then=="function",Lr=1073741823;class Rd extends an{constructor(){super(...arguments),this._$Cwt=Lr,this._$Cbt=[],this._$CK=new Vd(this),this._$CX=new Wd}render(...t){return t.find(s=>!Dr(s))??Ss}update(t,s){const i=this._$Cbt;let r=i.length;this._$Cbt=s;const n=this._$CK,d=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<s.length&&!(c>this._$Cwt);c++){const h=s[c];if(!Dr(h))return this._$Cwt=c,h;c<r&&h===i[c]||(this._$Cwt=Lr,r=0,Promise.resolve(h).then(async u=>{for(;d.get();)await d.get();const m=n.deref();if(m!==void 0){const f=m._$Cbt.indexOf(h);f>-1&&f<m._$Cwt&&(m._$Cwt=f,m.setValue(u))}}))}return Ss}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Bd=os(Rd);function Uo(e){"@babel/helpers - typeof";return Uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Uo(e)}function St(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function U(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function Z(e){U(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||Uo(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Ot(e,t){U(2,arguments);var s=Z(e),i=St(t);return isNaN(i)?new Date(NaN):(i&&s.setDate(s.getDate()+i),s)}function Mn(e,t){U(2,arguments);var s=Z(e),i=St(t);if(isNaN(i))return new Date(NaN);if(!i)return s;var r=s.getDate(),n=new Date(s.getTime());n.setMonth(s.getMonth()+i+1,0);var d=n.getDate();return r>=d?n:(s.setFullYear(n.getFullYear(),n.getMonth(),r),s)}var Fd={};function ir(){return Fd}function es(e,t){var s,i,r,n,d,c,h,u;U(1,arguments);var m=ir(),f=St((s=(i=(r=(n=t?.weekStartsOn)!==null&&n!==void 0?n:t==null||(d=t.locale)===null||d===void 0||(c=d.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&r!==void 0?r:m.weekStartsOn)!==null&&i!==void 0?i:(h=m.locale)===null||h===void 0||(u=h.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&s!==void 0?s:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var x=Z(e),v=x.getDay(),_=(v<f?7:0)+v-f;return x.setDate(x.getDate()-_),x.setHours(0,0,0,0),x}function zr(e){U(1,arguments);var t=Z(e);return t.setHours(0,0,0,0),t}function Hd(e,t){U(2,arguments);var s=St(t),i=s*7;return Ot(e,i)}function yt(e,t){U(2,arguments);var s=zr(e),i=zr(t);return s.getTime()===i.getTime()}function Nd(e){U(1,arguments);var t=Z(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(23,59,59,999),t}function Id(e,t){var s;U(1,arguments);var i=e||{},r=Z(i.start),n=Z(i.end),d=n.getTime();if(!(r.getTime()<=d))throw new RangeError("Invalid interval");var c=[],h=r;h.setHours(0,0,0,0);var u=Number((s=void 0)!==null&&s!==void 0?s:1);if(u<1||isNaN(u))throw new RangeError("`options.step` must be a number greater than 1");for(;h.getTime()<=d;)c.push(Z(h)),h.setDate(h.getDate()+u),h.setHours(0,0,0,0);return c}function Gd(e,t){U(1,arguments);var s=e||{},i=Z(s.start),r=Z(s.end),n=r.getTime();if(!(i.getTime()<=n))throw new RangeError("Invalid interval");var d=es(i,t),c=es(r,t);d.setHours(15),c.setHours(15),n=c.getTime();for(var h=[],u=d;u.getTime()<=n;)u.setHours(0),h.push(Z(u)),u=Hd(u,1),u.setHours(15);return h}function Pd(e){U(1,arguments);var t=Z(e);return t.setDate(1),t.setHours(0,0,0,0),t}function Yd(e,t){var s,i,r,n,d,c;U(1,arguments);var h=Z(e),u=h.getFullYear(),m=ir(),f=St((s=(i=(r=(n=void 0)!==null&&n!==void 0?n:void 0)!==null&&r!==void 0?r:m.firstWeekContainsDate)!==null&&i!==void 0?i:(d=m.locale)===null||d===void 0||(c=d.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=new Date(0);x.setFullYear(u+1,0,f),x.setHours(0,0,0,0);var v=es(x,t),_=new Date(0);_.setFullYear(u,0,f),_.setHours(0,0,0,0);var $=es(_,t);return h.getTime()>=v.getTime()?u+1:h.getTime()>=$.getTime()?u:u-1}function jd(e,t){var s,i,r,n,d,c;U(1,arguments);var h=ir(),u=St((s=(i=(r=(n=void 0)!==null&&n!==void 0?n:void 0)!==null&&r!==void 0?r:h.firstWeekContainsDate)!==null&&i!==void 0?i:(d=h.locale)===null||d===void 0||(c=d.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&s!==void 0?s:1),m=Yd(e,t),f=new Date(0);f.setFullYear(m,0,u),f.setHours(0,0,0,0);var x=es(f,t);return x}var qd=6048e5;function Zd(e,t){U(1,arguments);var s=Z(e),i=es(s,t).getTime()-jd(s,t).getTime();return Math.round(i/qd)+1}function Ud(e){U(1,arguments);var t=Z(e),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(0,0,0,0),t}function Xd(e,t){U(2,arguments);var s=Z(e),i=Z(t);return s.getFullYear()===i.getFullYear()&&s.getMonth()===i.getMonth()}function Kd(e,t){U(2,arguments);var s=Z(e),i=St(t);return s.setHours(i),s}function Jd(e,t){U(2,arguments);var s=St(t);return Mn(e,-s)}const Qd=C`
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
`;var ec=Qd,as,Vt,En,Tn,An,Dn,Ln;let ne=class extends L{constructor(){super(),p(this,Vt),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,p(this,as,(e,t)=>{const i=t.target.assignedNodes({flatten:!0}),r=i.length>0&&i.some(n=>n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE&&n.textContent?.trim()!=="");e==="lead"?this._leadSlotOccupied=r:e==="trail"?this._trailSlotOccupied=r:e==="action"&&(this._actionSlotOccupied=r)})}connectedCallback(){super.connectedCallback(),ae.instance.apply(this,"gds-field-base")}render(){const e={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:this.size==="small"};return b`
      <div class="field ${re(e)}" part="_base">
        ${g(this,Vt,En).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};as=new WeakMap;Vt=new WeakSet;En=function(){const e={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return b`
      ${g(this,Vt,Tn).call(this)} ${g(this,Vt,An).call(this)}
      <div class="${re(e)}">
        ${g(this,Vt,Dn).call(this)} ${g(this,Vt,Ln).call(this)}
      </div>
    `};Tn=function(){return b` <slot
      name="lead"
      @slotchange=${e=>l(this,as).call(this,"lead",e)}
    ></slot>`};An=function(){return b`<div
      class="main-slot-wrap ${re({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>l(this,as).call(this,"main",e)}
      ></slot>
    </div>`};Dn=function(){return b`
      <slot
        name="action"
        @slotchange=${e=>l(this,as).call(this,"action",e)}
      ></slot>
    `};Ln=function(){return b`
      <slot
        name="trail"
        @slotchange=${e=>l(this,as).call(this,"trail",e)}
      ></slot>
    `};ne.styles=[ec];o([a()],ne.prototype,"size",2);o([a({type:Boolean})],ne.prototype,"multiline",2);o([a({type:Boolean,reflect:!0})],ne.prototype,"disabled",2);o([a({type:Boolean})],ne.prototype,"invalid",2);o([R("slot:not([name])")],ne.prototype,"_mainSlotElement",2);o([J()],ne.prototype,"_leadSlotOccupied",2);o([J()],ne.prototype,"_trailSlotOccupied",2);o([J()],ne.prototype,"_actionSlotOccupied",2);o([V("disabled")],ne.prototype,"_handleDisabledChange",1);ne=o([w("gds-field-base"),ue()],ne);const tc=C`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overscroll-behavior: contain;
    }
  }
`;var sc=tc,ys,Xo;let It=class extends L{constructor(){super(),this.multiple=!1,this.compareWith=(e,t)=>e===t,p(this,ys,ln()),p(this,Xo,e=>{const t=e.target;this.multiple?t.selected=!t.selected:(t.selected=!0,Array.from(this.options).forEach(s=>{s!==t&&(s.selected=!1)})),this.ariaActiveDescendantElement=t,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})}),new _n(this)}get navigableItems(){return this.visibleOptionElements}get options(){return l(this,ys).value?wn(l(this,ys).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-option")||[]:[]}get visibleOptionElements(){return this.options.filter(e=>!e.hidden)}get visibleSelectedOptionElements(){return this.options.filter(e=>e.selected&&!e.hidden)}get selection(){return this.options.filter(e=>e.selected)}set selection(e){this.options.forEach(t=>{t.selected=e.some(s=>this.compareWith(s,t.value))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),ae.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",l(this,Xo))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return b`<slot ${dn(l(this,ys))}></slot>`}_rerenderOptions(){this.options.forEach(e=>{e.requestUpdate()})}};ys=new WeakMap;Xo=new WeakMap;It.styles=sc;o([a({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:e=>e.toString()}})],It.prototype,"multiple",2);o([a()],It.prototype,"compareWith",2);o([V("multiple")],It.prototype,"_rerenderOptions",1);It=o([w("gds-listbox",{dependsOn:[Be]})],It);var Co=C`
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
`;let at=class extends P{};at._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';at._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>';at._name="chevron-bottom";at._width=24;at._height=24;at._viewBox="0 0 24 24";at=o([w("gds-icon-chevron-bottom")],at);let Ae=class extends P{};Ae._regularSVG='<path d="M4.75 4.75L19.25 19.25M19.25 4.75L4.75 19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';Ae._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.11612 4.11612C4.60427 3.62796 5.39573 3.62796 5.88388 4.11612L12 10.2322L18.1161 4.11612C18.6043 3.62796 19.3957 3.62796 19.8839 4.11612C20.372 4.60427 20.372 5.39573 19.8839 5.88388L13.7678 12L19.8839 18.1161C20.372 18.6043 20.372 19.3957 19.8839 19.8839C19.3957 20.372 18.6043 20.372 18.1161 19.8839L12 13.7678L5.88388 19.8839C5.39573 20.372 4.60427 20.372 4.11612 19.8839C3.62796 19.3957 3.62796 18.6043 4.11612 18.1161L10.2322 12L4.11612 5.88388C3.62796 5.39573 3.62796 4.60427 4.11612 4.11612Z" fill="currentColor"/>';Ae._name="cross-large";Ae._width=24;Ae._height=24;Ae._viewBox="0 0 24 24";Ae=o([w("gds-icon-cross-large")],Ae);const oc=C`
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
`;var ic=oc,Dt,Yt,zn,Ko,Jo,Qo,mt,ei,ti,Ys,si,oi,ii,On,uo,po,Vn,Wn,ts,So;let F=class extends q{constructor(){super(...arguments),p(this,Yt),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.clearable=!1,this.combobox=!1,this.compareWith=(e,t)=>e===t,this.searchFilter=(e,t)=>t.innerHTML.toLowerCase().includes(e.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,p(this,Dt),p(this,Ko,()=>b`
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
        @input=${e=>{this.value=e.target.value,l(this,uo).call(this),l(this,Ys).call(this,e),l(this,mt).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{e.key==="ArrowDown"&&(e.preventDefault(),l(this,mt).call(this,!0,"show")&&(this.open=!0),this._elListbox.then(t=>t.focus())),e.key==="Enter"&&l(this,po).call(this)}}
      />
    `),p(this,Jo,()=>b`
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
          <span>${Rr(this.displayValue)}</span>
        </slot>
      </button>
    `),p(this,Qo,e=>{if(this.combobox){const s=e.getBoundingClientRect(),r=window.innerHeight-s.bottom,n=s.top;let d=Math.min(n,this.maxHeight);return r>n&&(d=Math.min(r,this.maxHeight)),`${d-16}px`}return`${Math.min(window.innerHeight,this.maxHeight)-16}px`}),p(this,mt,(e,t)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:t,open:e},bubbles:!1,composed:!1})),p(this,ei,e=>{l(this,mt).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)}),p(this,ti,e=>{e.preventDefault(),e.stopPropagation(),this.value=void 0}),p(this,Ys,e=>{if(!e.currentTarget||(e.stopPropagation(),!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}})))return;const s=e.currentTarget;if(this.options.forEach(r=>r.hidden=!1),!s.value)return;this.options.filter(r=>!this.searchFilter(s.value,r)).forEach(r=>r.hidden=!0)}),p(this,si,e=>{this._elListbox?.then(t=>{if(e.key==="ArrowDown"||e.key==="Tab"){e.preventDefault(),t.focus();return}})}),p(this,oi,e=>{if(e.key==="Tab"&&this.searchable){e.preventDefault(),this._elSearchInput?.focus();return}}),p(this,ii,e=>{const t=this._elTriggerBtn;t&&(t.ariaActiveDescendantElement=e.target)}),p(this,uo,()=>{this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))}),p(this,po,()=>{this.updateComplete.then(()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}),p(this,ts,e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&l(this,mt).call(this,!1,"close")&&(this.open=!1)}),p(this,So,e=>{e.key==="Tab"&&!this.searchable&&l(this,mt).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())})}get type(){return"gds-dropdown"}get options(){return l(this,Dt)?Array.from(l(this,Dt)).filter(e=>!e.hasAttribute("isplaceholder")):[]}get placeholder(){if(l(this,Dt))return Array.from(l(this,Dt)).find(e=>e.hasAttribute("isplaceholder"))}get displayValue(){let e;return Array.isArray(this.value)?e=this.value.slice(0,5).reduce((t,s)=>t+this.options.find(i=>i.value===s)?.innerText+", ","").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):e=this.options.find(t=>t.selected)?.innerText,e||this.placeholder?.innerText||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()})}render(){return b`
      ${T(!this.plain&&!this.hideLabel,()=>b`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${T(this.supportingText.length>0,()=>b`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${l(this,Qo)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[xn(8),Ed()]:M.DefaultMiddleware}
        @gds-ui-state=${l(this,ei)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${T(this.value&&this.multiple&&this.value.length>0,()=>b`<gds-badge
                rounded
                size=${this.size==="small"?"small":"default"}
                slot="lead"
                aria-label=${k(Xa`${this.value.length} options selected`)}
              >
                ${this.value.length}</gds-badge
              >`)}
          ${T(this.clearable&&this.value&&!this.disabled,()=>b`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${this.size==="small"?"xs":"small"}
                label="${k("Clear selection")}"
                @click=${l(this,ti)}
                slot="trail"
              >
                <gds-icon-cross-large></gds-icon-cross-large>
              </gds-button>`)}
          ${T(this.combobox&&!this.multiple,()=>l(this,Ko).call(this))}
          ${T(!this.combobox||this.multiple,()=>l(this,Jo).call(this))}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${T(this.searchable,()=>b`<input
              id="searchinput"
              type="text"
              aria-label="${k("Filter available options")}"
              placeholder="${k("Search")}"
              @keydown=${l(this,si)}
              @input=${l(this,Ys)}
            />`)}
        <gds-listbox
          id="listbox"
          .multiple="${D(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${g(this,Yt,On)}"
          @gds-focus="${l(this,ii)}"
          @keydown=${l(this,oi)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${T(g(this,Yt,zn).call(this),()=>b`
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
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){if(this.requestUpdate(),j(this,Dt,this.querySelectorAll("[gds-element=gds-option]")),this.multiple){this._handleValueChange();return}this.value===void 0?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:!this.combobox&&!this.placeholder&&this.options.find(e=>this.compareWith(e.value,this.value))===void 0&&(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value)}_handleValueChange(){this._elListbox.then(e=>{e&&(Array.isArray(this.value)?e.selection=this.value:e.selection=[this.value])})}_handleOpenChange(){const e=this.open;this.options.forEach(s=>s.hidden=!e),e?g(this,Yt,Vn).call(this):(g(this,Yt,Wn).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const t=this.options.find(s=>s.selected);requestAnimationFrame(async()=>{await this.updateComplete,t?.scrollIntoView({block:"center"})})}};Dt=new WeakMap;Yt=new WeakSet;zn=function(){return!this.plain};Ko=new WeakMap;Jo=new WeakMap;Qo=new WeakMap;mt=new WeakMap;ei=new WeakMap;ti=new WeakMap;Ys=new WeakMap;si=new WeakMap;oi=new WeakMap;ii=new WeakMap;On=function(){this._elListbox.then(e=>{this.multiple?this.value=e.selection.map(t=>t.value):(this.value=e.selection[0]?.value,l(this,mt).call(this,!1,"close")&&(this.open=!1,setTimeout(()=>this._elTriggerBtn?.focus(),0))),l(this,uo).call(this),l(this,po).call(this)})};uo=new WeakMap;po=new WeakMap;Vn=function(){this.addEventListener("blur",l(this,ts)),this.addEventListener("gds-blur",l(this,ts)),this.addEventListener("keydown",l(this,So))};Wn=function(){this.removeEventListener("blur",l(this,ts)),this.removeEventListener("gds-blur",l(this,ts)),this.removeEventListener("keydown",l(this,So))};ts=new WeakMap;So=new WeakMap;F.styles=[O,Co,ic];o([a({attribute:"supporting-text"})],F.prototype,"supportingText",2);o([a({type:Boolean,reflect:!0})],F.prototype,"open",2);o([a({type:Boolean,reflect:!0})],F.prototype,"searchable",2);o([a({type:Boolean,reflect:!0})],F.prototype,"multiple",2);o([a({type:Boolean,reflect:!0})],F.prototype,"clearable",2);o([a({type:Boolean,reflect:!0})],F.prototype,"combobox",2);o([a()],F.prototype,"compareWith",2);o([a()],F.prototype,"searchFilter",2);o([a({type:Boolean,attribute:"sync-popover-width"})],F.prototype,"syncPopoverWidth",2);o([a({type:Number,attribute:"max-height"})],F.prototype,"maxHeight",2);o([a({reflect:!0})],F.prototype,"size",2);o([a({type:Boolean,attribute:"hide-label"})],F.prototype,"hideLabel",2);o([a({type:Boolean})],F.prototype,"plain",2);o([a({type:Boolean})],F.prototype,"disableMobileStyles",2);o([a({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],F.prototype,"showExtendedSupportingText",2);o([R("#trigger")],F.prototype,"_elTriggerBtn",2);o([ut("#listbox")],F.prototype,"_elListbox",2);o([R("#searchinput")],F.prototype,"_elSearchInput",2);o([mo({attributes:!0,childList:!0,subtree:!0,characterData:!0})],F.prototype,"_handleLightDOMChange",1);o([V("value")],F.prototype,"_handleValueChange",1);o([V("open")],F.prototype,"_handleOpenChange",1);F=o([w("gds-dropdown",{dependsOn:[Se,Ce,ne,It,M,me,at,Ae]}),ue()],F);const rr={fromAttribute(e){return new Date(e)},toAttribute(e){return e.toISOString()}},rc={fromAttribute(e){return e.split(",").map(t=>new Date(t.trim()))},toAttribute(e){return JSON.stringify(e.map(t=>t.toISOString()))}},nc={fromAttribute(e){return e.split(",")},toAttribute(e){return Array.isArray(e)?e.join(","):e}},ac=C`
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
`;var lc=ac;function dc(e,t){const s=Pd(e),i=Nd(e),r=Gd({start:s,end:i},{weekStartsOn:1});for(;r.length<6;)r.push(Ot(r[r.length-1],7));return ce`${t(r.map(n=>({days:Id({start:n,end:Ot(n,6)})})))}`}var $s,nr,Rn;let I=class extends L{constructor(){super(...arguments),p(this,$s),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=e=>e.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=Ud(new Date(this.focusedYear,e,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),s.setMonth(e),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){return this.shadowRoot?.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),ae.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",g(this,$s,Rn)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){super.focus(),this._elFocusedCell?.focus()}render(){const e=new Date;return ce`<table
      role="grid"
      aria-label="${D(this.label)}"
      class="${re({small:this.size==="small",indicators:!!this.customizedDates})}"
    >
      ${T(!this.hideDayNames,()=>ce`<thead role="rowgroup">
            <tr role="row">
              ${T(this.showWeekNumbers,()=>ce`<th></th>`)}
              <th>${k("Mon").substring(0,1)}</th>
              <th>${k("Tue").substring(0,1)}</th>
              <th>${k("Wed").substring(0,1)}</th>
              <th>${k("Thu").substring(0,1)}</th>
              <th>${k("Fri").substring(0,1)}</th>
              <th>${k("Sat").substring(0,1)}</th>
              <th>${k("Sun").substring(0,1)}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${dc(this.focusedDate,t=>ce`
            ${t.map(s=>ce`
                <tr role="row">
                  ${T(this.showWeekNumbers,()=>ce`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${Zd(s.days[0])}
                      </td>`)}
                  ${s.days.map(i=>{const r=this.customizedDates&&this.customizedDates.find(f=>yt(f.date,i)),n={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(f=>yt(f,i))),...r},d=!Xd(this.focusedDate,i),c=(i<this.min||i>this.max)&&!yt(i,this.min)&&!yt(i,this.max),h=i.getDay()===0||i.getDay()===6,u=n.disabled||d||c||this.disabledWeekends&&h;return this.hideExtraneousDays&&d?ce`<td inert></td>`:ce`
                          <td
                            role="${D(u?void 0:"gridcell")}"
                            class="${re({small:this.size==="small","custom-date":!!r,disabled:!!u,today:yt(e,i)})}"
                            ?disabled=${u}
                            tabindex="${yt(this.focusedDate,i)?0:-1}"
                            aria-selected="${this.value&&yt(this.value,i)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(i)}"
                            @click=${()=>u?null:g(this,$s,nr).call(this,i)}
                            id="dateCell-${i.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${n?n?.color:""}"
                              >${i.getDate()}</span
                            >

                            ${T(n.indicator,()=>ce`<span
                                  class="indicator-${n?.indicator}"
                                  style="--_color: ${n?.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};$s=new WeakSet;nr=function(e){const t=Kd(e,12);this.value=t,this.dispatchCustomEvent("change",{detail:t,bubbles:!1,composed:!1})};Rn=function(e){let t=!1,s=new Date(this.focusedDate);e.key==="ArrowLeft"?(s=Ot(this.focusedDate,-1),t=!0):e.key==="ArrowRight"?(s=Ot(this.focusedDate,1),t=!0):e.key==="ArrowUp"?(s=Ot(this.focusedDate,-7),t=!0):e.key==="ArrowDown"?(s=Ot(this.focusedDate,7),t=!0):e.key==="Enter"||e.key===" "?(this._elFocusedCell?.hasAttribute("disabled")||g(this,$s,nr).call(this,this.focusedDate),t=!0):e.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):e.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):e.key==="PageUp"?(s=Jd(this.focusedDate,1),t=!0):e.key==="PageDown"&&(s=Mn(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus()}))};I.styles=[O,lc];I.shadowRootOptions={mode:"open",delegatesFocus:!0};o([a()],I.prototype,"value",2);o([a({type:Date})],I.prototype,"min",2);o([a({type:Date})],I.prototype,"max",2);o([a()],I.prototype,"focusedDate",2);o([a({type:Boolean,attribute:"disabled-weekends"})],I.prototype,"disabledWeekends",2);o([a({type:Array,attribute:"disabled-dates"})],I.prototype,"disabledDates",2);o([a({type:Number})],I.prototype,"focusedMonth",1);o([a({type:Number})],I.prototype,"focusedYear",1);o([a({reflect:!0})],I.prototype,"size",2);o([a({type:Boolean})],I.prototype,"showWeekNumbers",2);o([a({type:Boolean})],I.prototype,"hideExtraneousDays",2);o([a({type:Boolean})],I.prototype,"hideDayNames",2);o([a({attribute:!1})],I.prototype,"customizedDates",2);o([a()],I.prototype,"label",2);o([a({attribute:!1})],I.prototype,"dateLabelTemplate",2);o([J()],I.prototype,"_currentLocale",2);o([R('td[tabindex="0"]')],I.prototype,"_elFocusedCell",2);o([V("value")],I.prototype,"_valueChanged",1);I=o([w("gds-calendar"),ue()],I);let lt=class extends P{};lt._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';lt._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>';lt._name="calendar";lt._width=24;lt._height=24;lt._viewBox="0 0 24 24";lt=o([w("gds-icon-calendar")],lt);let dt=class extends P{};dt._regularSVG='<path d="M7.75 4.75H3.75V9.25M7.75 4.75H16.25M7.75 4.75V2.75M16.25 4.75H20.25V9.25M16.25 4.75V2.75M11.25 20.25H3.75V9.25M3.75 9.25H20.25M20.25 9.25V11.25M17.75 14.75V18M17.75 18V21.25M17.75 18H14.5M17.75 18H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';dt._solidSVG='<path d="M8.5 2.75C8.5 2.33579 8.16421 2 7.75 2C7.33579 2 7 2.33579 7 2.75V4H3.75C3.33579 4 3 4.33579 3 4.75V20.25C3 20.6642 3.33579 21 3.75 21H11.25C11.6642 21 12 20.6642 12 20.25C12 19.8358 11.6642 19.5 11.25 19.5H4.5V10H19.5V11.25C19.5 11.6642 19.8358 12 20.25 12C20.6642 12 21 11.6642 21 11.25V4.75C21 4.33579 20.6642 4 20.25 4H17V2.75C17 2.33579 16.6642 2 16.25 2C15.8358 2 15.5 2.33579 15.5 2.75V4H8.5V2.75Z" fill="currentColor"/><path d="M18.5 14.75C18.5 14.3358 18.1642 14 17.75 14C17.3358 14 17 14.3358 17 14.75V17.25H14.5C14.0858 17.25 13.75 17.5858 13.75 18C13.75 18.4142 14.0858 18.75 14.5 18.75H17V21.25C17 21.6642 17.3358 22 17.75 22C18.1642 22 18.5 21.6642 18.5 21.25V18.75H21C21.4142 18.75 21.75 18.4142 21.75 18C21.75 17.5858 21.4142 17.25 21 17.25H18.5V14.75Z" fill="currentColor"/>';dt._name="calender-add";dt._width=24;dt._height=24;dt._viewBox="0 0 24 24";dt=o([w("gds-icon-calender-add")],dt);let Ye=class extends P{};Ye._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';Ye._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>';Ye._name="chevron-right";Ye._width=24;Ye._height=24;Ye._viewBox="0 0 24 24";Ye=o([w("gds-icon-chevron-right")],Ye);var tt,js,qs,Zs,Us,ri,ni,ai,te,Bn,vs,li,ms,Xs;let De=class extends L{constructor(){super(...arguments),p(this,te),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=g(this,te,li).call(this,this.value,this.length),p(this,tt,""),p(this,js,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=g(this,te,ms).call(this,e+1),g(this,te,vs).call(this)}),p(this,qs,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=g(this,te,ms).call(this,e-1),g(this,te,vs).call(this)}),p(this,Zs,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),p(this,Us,()=>{g(this,te,Xs).call(this)}),p(this,ri,()=>{l(this,tt)!==""&&(g(this,te,Xs).call(this),this.value=g(this,te,ms).call(this,parseInt(this.value.toString())),g(this,te,vs).call(this))}),p(this,ni,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?l(this,qs).call(this):l(this,js).call(this)}),p(this,ai,e=>{let t=!1;if(e.key==="ArrowUp")l(this,js).call(this),t=!0;else if(e.key==="ArrowDown")l(this,qs).call(this),t=!0;else{const s=parseInt(e.key);isNaN(s)||(l(this,tt).length<this.length&&(j(this,tt,l(this,tt)+s.toString()),this.value=parseInt(l(this,tt))),l(this,tt).length===this.length&&(this.value=g(this,te,ms).call(this,this.value),g(this,te,Xs).call(this),g(this,te,Bn).call(this),g(this,te,vs).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",l(this,ni)),this.addEventListener("keydown",l(this,ai)),this.addEventListener("blur",l(this,ri)),this.addEventListener("focus",l(this,Us)),this.addEventListener("click",l(this,Zs)),this.addEventListener("mousedown",l(this,Zs))}focus(e){super.focus(e),l(this,Us).call(this)}render(){return b`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=g(this,te,li).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};tt=new WeakMap;js=new WeakMap;qs=new WeakMap;Zs=new WeakMap;Us=new WeakMap;ri=new WeakMap;ni=new WeakMap;ai=new WeakMap;te=new WeakSet;Bn=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof De){e.focus();break}e=e.nextElementSibling}};vs=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};li=function(e,t){return String(e).padStart(t,"0")};ms=function(e){return Math.max(this.min,Math.min(this.max,e))};Xs=function(){j(this,tt,"")};De.formAssociated=!0;o([a({type:Number})],De.prototype,"value",2);o([a({type:Number})],De.prototype,"length",2);o([a({type:Number,attribute:"aria-valuemin"})],De.prototype,"min",2);o([a({type:Number,attribute:"aria-valuemax"})],De.prototype,"max",2);o([J()],De.prototype,"displayValue",2);o([V("value")],De.prototype,"_refreshDisplayValue",1);De=o([w("gds-date-part-spinner")],De);const cc=C`
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
`;var hc=cc,xs,B,Fn,Hn,go,Nn,In,di,Lt,jt,Gn,ci,hi,ui,pi,gi,fi,bi,yi,vi,fo,mi,xi,_i,wi,et,Pn,Yn;let z=class extends q{constructor(){super(),p(this,B),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=g(this,B,_i).call(this,"y-m-d"),p(this,xs),p(this,Gn,e=>{this._elTrigger.then(t=>{e.relatedTarget?.parentElement!==e.target&&document.getSelection()?.removeAllRanges()})}),p(this,ci,e=>{this._elTrigger.then(t=>{document.getSelection()?.removeAllRanges();const s=new Range;s.setStart(t.firstChild,0),s.setEnd(t.lastChild,4),document.getSelection()?.addRange(s)})}),p(this,hi,e=>{this._elFieldAsync.then(t=>{e.currentTarget===t&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),p(this,ui,e=>{this._elFieldAsync.then(t=>{if(e.currentTarget!==t)return;e.preventDefault();const s=e.clipboardData?.getData("text/plain");if(!s)return;let i=new Date("-");const r="Invalid Date",n=s.split(this._dateFormatLayout.delimiter);if(n.length===3){const d=this._dateFormatLayout.layout,c=parseInt(n[d.findIndex(m=>m.token==="y")]),h=parseInt(n[d.findIndex(m=>m.token==="m")])-1,u=parseInt(n[d.findIndex(m=>m.token==="d")]);!isNaN(c)&&!isNaN(h)&&!isNaN(u)&&(i=new Date(`${c}-${h+1}-${u}`))}i.toString()===r&&(i=new Date(s),i.toString()===r)||(this.value=i,g(this,B,Lt).call(this))})}),p(this,pi,e=>{this._elSpinners[0]?.focus()}),p(this,gi,e=>{e.stopPropagation(),this.value=new Date(e.detail),this.open=!1,g(this,B,Lt).call(this),g(this,B,jt).call(this)}),p(this,fi,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),p(this,bi,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),p(this,yi,e=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),p(this,vi,e=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),p(this,fo,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),g(this,B,jt).call(this)}),p(this,mi,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;if(!t){this.value=void 0,g(this,B,Lt).call(this);return}!yt(t||new Date(0),l(this,xs)||new Date(0))&&(this.value=new Date(t),g(this,B,Lt).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=l(this,xs),g(this,B,jt).call(this))}}),p(this,xi,e=>{const t=Array.from(this._elSpinners).findIndex(s=>s===e.target);if(e.key==="ArrowRight"){const s=this._elSpinners[t+1];s&&s.focus()}if(e.key==="ArrowLeft"){const s=this._elSpinners[t-1];s&&s.focus()}}),p(this,wi,(e,t)=>{l(this,et)[t]=e;const s=new Date;s.setFullYear(parseInt(l(this,et).year)),s.setMonth(parseInt(l(this,et).month)-1),s.setDate(parseInt(l(this,et).day)),s.setHours(12,0,0,0),s.toString()!=="Invalid Date"&&(this.value=s,g(this,B,Lt).call(this),g(this,B,jt).call(this))}),p(this,et,{year:"yyyy",month:"mm",day:"dd"}),De.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(e){super.value=e}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=g(this,B,_i).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),ae.instance.apply(this,"gds-datepicker")}focus(e){this._getValidityAnchor()?.focus(e)}render(){return b`
      ${T(!this.plain,()=>b`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${T(this.supportingText.length>0,()=>b`<span slot="supporting-text" id="supporting-text">
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
        @click=${l(this,pi)}
        @copy=${l(this,hi)}
        @paste=${l(this,ui)}
        id="field"
      >
        <div class="spinners">
          ${Ld(zd(this._dateFormatLayout.layout,(e,t)=>b`<gds-date-part-spinner
                  id="spinner-${t}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${l(this,et)[e.name]}
                  aria-valuemin=${g(this,B,In).call(this,e.name)}
                  aria-valuemax=${g(this,B,di).call(this,e.name)}
                  aria-label=${g(this,B,Nn).call(this,e.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${g(this,B,di).call(this,e.name).toString().length}
                  @keydown=${l(this,xi)}
                  @change=${s=>l(this,wi).call(this,s.detail.value,e.name)}
                  @focus=${l(this,ci)}
                  @touchend=${s=>{this.open=!0,s.preventDefault()}}
                ></gds-date-part-spinner>`),b`<span class="separator"
              >${this._dateFormatLayout.delimiter}</span
            >`)}
        </div>
        <gds-button
          id="calendar-button"
          slot="action"
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant=${this.invalid?"negative":""}
          aria-label="${k("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          ${T(this.size==="small",()=>b`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`,()=>b`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${T(g(this,B,Fn).call(this),()=>b`<gds-form-control-footer
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
        @gds-ui-state=${l(this,mi)}
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
              @click=${l(this,vi)}
              aria-label=${k("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${l(this,fi)}
              .maxHeight=${300}
              label="${k("Month")}"
              size="small"
              class="month"
              hide-label
            >
              <gds-option value="0">${k("January")}</gds-option>
              <gds-option value="1">${k("February")}</gds-option>
              <gds-option value="2">${k("March")}</gds-option>
              <gds-option value="3">${k("April")}</gds-option>
              <gds-option value="4">${k("May")}</gds-option>
              <gds-option value="5">${k("June")}</gds-option>
              <gds-option value="6">${k("July")}</gds-option>
              <gds-option value="7">${k("August")}</gds-option>
              <gds-option value="8">${k("September")}</gds-option>
              <gds-option value="9">${k("October")}</gds-option>
              <gds-option value="10">${k("November")}</gds-option>
              <gds-option value="11">${k("December")}</gds-option>
            </gds-dropdown>
            <gds-dropdown
              .value=${this._focusedYear.toString()}
              @change=${l(this,bi)}
              .maxHeight=${300}
              label="${k("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${Od(l(this,B,Pn),e=>e,e=>b`<gds-option value=${e}>${e}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${l(this,yi)}
              aria-label=${k("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${l(this,gi)}
            @gds-date-focused=${l(this,fo)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${T(this.clearable||!this.hideTodayButton,()=>b`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                ${T(this.clearable,()=>b` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,g(this,B,jt).call(this),g(this,B,Lt).call(this)}}
                      aria-label=${k("Clear selected date")}
                    >
                      ${k("Clear")}
                    </gds-button>`)}
                ${Bd(g(this,B,Hn).call(this),se)}
                ${T(!this.hideTodayButton,()=>b` <gds-button
                      id="today-button"
                      rank="primary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),g(this,B,go).call(this,new Date)}}
                      aria-label=${k("Select today's date")}
                    >
                      ${k("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){j(this,et,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0");j(this,et,{year:t,month:s,day:i})}_handleOpenChange(){this.open&&(j(this,xs,this.value),this._elCalendar.then(e=>e.focus()))}};xs=new WeakMap;B=new WeakSet;Fn=function(){return!this.plain};Hn=async function(){const e=await this.getFocusedDate();let t="",s;return e&&e>this.max?(t=k("Last available date"),s=i=>{i.stopPropagation(),g(this,B,go).call(this,this.max)}):e&&e<this.min&&(t=k("First available date"),s=i=>{i.stopPropagation(),g(this,B,go).call(this,this.min)}),b`${T(t.length>0,()=>b`<gds-button rank="tertiary" size="small" @click=${s}>
          ${t}
        </gds-button>`,()=>se)}`};go=function(e){const t=new Date(e);this._elCalendar.then(s=>s.focusedDate=t).then(l(this,fo))};Nn=function(e){return`${{year:k("Year"),month:k("Month"),day:k("Day")}[e]} ${this.label}`};In=function(e){return{year:1900,month:1,day:1}[e]};di=function(e){return{year:9999,month:12,day:31}[e]};Lt=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};jt=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};Gn=new WeakMap;ci=new WeakMap;hi=new WeakMap;ui=new WeakMap;pi=new WeakMap;gi=new WeakMap;fi=new WeakMap;bi=new WeakMap;yi=new WeakMap;vi=new WeakMap;fo=new WeakMap;mi=new WeakMap;xi=new WeakMap;_i=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),i=s.findIndex(h=>h==="y"),r=s.findIndex(h=>h==="m"),n=s.findIndex(h=>h==="d");if(i===-1||r===-1||n===-1)throw new Error("Invalid date format for <gds-datepicker>");const c=[i,r,n].sort((h,u)=>h-u).map(h=>s[h]).map(h=>({token:h,name:h==="y"?"year":h==="m"?"month":"day"}));return{delimiter:t,layout:c}};wi=new WeakMap;et=new WeakMap;Pn=function(){const e=this.min.getFullYear(),t=this.max.getFullYear(),s=l(this,B,Yn),i=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield i);for(let r=e;r<=t;r++)yield r}}};Yn=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};z.styles=[O,Co,hc];o([a({converter:rr})],z.prototype,"value",1);o([a({converter:rr})],z.prototype,"min",2);o([a({converter:rr})],z.prototype,"max",2);o([a({type:Boolean})],z.prototype,"open",2);o([a({attribute:"supporting-text"})],z.prototype,"supportingText",2);o([a({type:String})],z.prototype,"size",2);o([a({type:Boolean})],z.prototype,"plain",2);o([a({type:Boolean,attribute:"show-week-numbers"})],z.prototype,"showWeekNumbers",2);o([a({type:Boolean,attribute:"hide-label"})],z.prototype,"hideLabel",2);o([a({type:Boolean,attribute:"clearable"})],z.prototype,"clearable",2);o([a({type:Boolean,attribute:"hide-today-button"})],z.prototype,"hideTodayButton",2);o([a()],z.prototype,"dateformat",1);o([a({type:Boolean,attribute:"disabled-weekends"})],z.prototype,"disabledWeekends",2);o([a({converter:rc,attribute:"disabled-dates"})],z.prototype,"disabledDates",2);o([a({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],z.prototype,"showExtendedSupportingText",2);o([ut("#calendar-button")],z.prototype,"test_calendarButton",2);o([R("#clear-button")],z.prototype,"test_clearButton",2);o([R("#today-button")],z.prototype,"test_todayButton",2);o([J()],z.prototype,"_focusedMonth",2);o([J()],z.prototype,"_focusedYear",2);o([J()],z.prototype,"_dateFormatLayout",2);o([ut("#calendar")],z.prototype,"_elCalendar",2);o([ut("#calendar-button")],z.prototype,"_elTrigger",2);o([ut("#field")],z.prototype,"_elFieldAsync",2);o([Ma("[role=spinbutton]")],z.prototype,"_elSpinners",2);o([R("#field")],z.prototype,"_elField",2);o([V("value")],z.prototype,"_handleValueChange",1);o([V("open")],z.prototype,"_handleOpenChange",1);z=o([ue()],z);let ki=class extends le(he(de(z))){};ki=o([w("gds-datepicker",{dependsOn:[it,Ne,F,I,M,lt,dt,He,Ye]})],ki);const uc=C`
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
`;var pc=uc;const $i=new Set;function gc(){ka.instance.injectGlobalStyles("dialog-scroll-lock",C`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function fc(e){if($i.add(e),!document.documentElement.classList.contains("gds-scroll-lock")){const t=bc()+yc();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),t<2&&(s=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",s),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${t}px`)}}function Or(e){$i.delete(e),$i.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function bc(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function yc(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}var zt,Ci,Ks,Si,Js,Mi,jn,ar,_s;gc();let be=class extends le(vo(Fr(L))){constructor(){super(...arguments),p(this,Mi),this.open=!1,this.variant="default",this.placement="initial",this.scrollable=!1,p(this,zt),p(this,Ci,e=>{const s=e.target.returnValue;if(s!=="prop-change"){if(!l(this,Ks).call(this,s))return;this.close(s||"native-close");return}this.close(s||"native-close")}),p(this,Ks,e=>(this.dispatchCustomEvent("gds-close",{detail:e}),l(this,Js).call(this,e))),p(this,Si,e=>(this.dispatchCustomEvent("gds-show",{detail:e}),l(this,Js).call(this,e))),p(this,Js,e=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason:e,open:this.open}})),p(this,ar,e=>{this.show("slotted-trigger")}),p(this,_s,e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const r=s.getBoundingClientRect(),n=r.top<=t.clientY&&t.clientY<=r.top+r.height&&r.left<=t.clientX&&t.clientX<=r.left+r.width,d="click-outside";!n&&l(this,Ks).call(this,d)&&this.close(d)}})}show(e){this.open=!0,e&&l(this,Si).call(this,e)}close(e){j(this,zt,e),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),Or(this)}render(){return b`<slot
        name="trigger"
        @slotchange=${g(this,Mi,jn)}
      ></slot>
      ${T(this.open,()=>b`<dialog
            @close=${l(this,Ci)}
            class=${re({[this.variant]:!0,[`placement-${this.placement}`]:!0})}
            aria-label=${D(this.heading)}
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
                    label=${k("Close")}
                    @click=${()=>this.close("btn-close")}
                    ><gds-icon-cross-small></gds-icon-cross-small
                  ></gds-button>
                </gds-flex>
                <gds-div
                  id="content"
                  flex="1"
                  overflow=${D(this.scrollable)?"auto":se}
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
                      >${k("Cancel")}</gds-button
                    >
                    <gds-button value="ok" @click=${()=>this.close("btn-ok")}
                      >Ok</gds-button
                    >
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`)}`}_handleOpenChange(){this.open?(j(this,zt,void 0),this.updateComplete.then(()=>{this._elDialog?.showModal(),fc(this),document.removeEventListener("click",l(this,_s)),requestAnimationFrame(()=>document.addEventListener("click",l(this,_s))),$a&&this._elDialog?.focus()})):(j(this,zt,l(this,zt)||"prop-change"),this._elDialog?.close(l(this,zt)),Or(this),document.removeEventListener("click",l(this,_s)),this.requestUpdate("open"))}};zt=new WeakMap;Ci=new WeakMap;Ks=new WeakMap;Si=new WeakMap;Js=new WeakMap;Mi=new WeakSet;jn=function(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){const e=this._elTriggerSlot.assignedElements()[0];e?.addEventListener("click",l(this,ar)),e?.setAttribute("aria-haspopup","dialog")}};ar=new WeakMap;_s=new WeakMap;be.styles=[pc];be.styleExpressionBaseSelector=".card";o([a({type:Boolean,reflect:!0})],be.prototype,"open",2);o([a()],be.prototype,"heading",2);o([a()],be.prototype,"variant",2);o([a()],be.prototype,"placement",2);o([a({type:Boolean})],be.prototype,"scrollable",2);o([R("dialog")],be.prototype,"_elDialog",2);o([R('slot[name="trigger"]')],be.prototype,"_elTriggerSlot",2);o([V("open")],be.prototype,"_handleOpenChange",1);be=o([w("gds-dialog",{dependsOn:[Ne,Bt,S,it,Pe]}),ue()],be);const vc=C`
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
`;var mc=vc;let kt=class extends L{constructor(){super(...arguments),this.role=null}render(){return b`<hr role=${this.role||se} />`}};kt.styles=[O,mc];o([y({...Os("border"),property:"--_color"})],kt.prototype,"color",2);o([y({property:"--_size",valueTemplate:e=>`var(--gds-sys-space-${e})`})],kt.prototype,"size",2);o([y()],kt.prototype,"opacity",2);o([a()],kt.prototype,"role",2);kt=o([w("gds-divider")],kt);function lr(){return(e,t,s)=>{const i=e.connectedCallback,r=e.disconnectedCallback;e.connectedCallback=function(){i?.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[t]=new ResizeObserver(()=>{this.__resizeObserver_tids[t]&&clearTimeout(this.__resizeObserver_tids[t]),this.__resizeObserver_tids[t]=setTimeout(()=>{s.value?.call(this)},20)}),this.__resizeObservers[t].observe(this)},e.disconnectedCallback=function(){r?.call(this),this.__resizeObservers[t].disconnect()}}}const xc=C`
  @layer base, reset, transitional-styles;
  @layer base {
    .icon {
      width: 1rem;
    }
  }
`;let $t=class extends L{constructor(){super(...arguments),this.selected=!1,this.size="large"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),ae.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return b`<gds-button
      class="btn"
      .size=${this.size==="large"?"medium":"small"}
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${re(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        size="1rem"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};$t.styles=[xc];o([a({reflect:!0,type:Boolean})],$t.prototype,"selected",2);o([a()],$t.prototype,"value",2);o([a({reflect:!0,type:String})],$t.prototype,"size",2);$t=o([w("gds-filter-chip",{dependsOn:[Ne,me]})],$t);const _c=C`
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
`;var wc=_c,Ei,Ti,Qs,eo,qn,Zn;let _e=class extends q{constructor(){super(...arguments),p(this,eo),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,p(this,Ei,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),p(this,Ti,3),p(this,Qs,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return b`<div
      class="chips ${re(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${l(this,Ei)}
        @slotchange=${g(this,eo,Zn)}
        role="none"
      ></slot>
    </div>`}focus(e){this.chips[0]?.focus(e)}_getValidityAnchor(){return this.shadowRoot?.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=g(this,eo,qn).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*l(this,Ti)&&(this._collapsed=!0,j(this,Qs,s)),s>l(this,Qs)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})}))}};Ei=new WeakMap;Ti=new WeakMap;Qs=new WeakMap;eo=new WeakSet;qn=function(){return this.chips[0]?.offsetHeight||0};Zn=function(){const e=this.chips.find(t=>t.selected)?.value;e&&(this.value=e)};_e.styles=[wc];o([a({converter:nc})],_e.prototype,"value",1);o([a({type:Boolean})],_e.prototype,"multiple",2);o([a()],_e.prototype,"label",2);o([a({type:Boolean,attribute:"row-collapse"})],_e.prototype,"rowCollapse",2);o([J()],_e.prototype,"_collapsed",2);o([R("slot")],_e.prototype,"_elSlot",2);o([lr()],_e.prototype,"_handleResize",1);o([V("value")],_e.prototype,"_updateSelectedFromValue",1);_e=o([w("gds-filter-chips",{dependsOn:[$t]})],_e);const kc=C`
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
`;var $c=kc;let Gt=class extends S{render(){return b`<slot></slot>`}};Gt.styles=[O,$c];o([y({property:"--_c"})],Gt.prototype,"columns",2);o([y({...Ut,styleTemplate:(e,t)=>{const s=t[0];return`--_gap-column: ${t[1]||s}; --_gap-row: ${s};`}})],Gt.prototype,"gap",2);o([y({property:"--_col-width",valueTemplate:e=>`${isNaN(e)?e:`${e}px`}`})],Gt.prototype,"auto-columns",2);Gt=o([w("gds-grid")],Gt);let bo=class extends L{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return b`<slot></slot>`}};bo=o([w("gds-list-item")],bo);let yo=class extends L{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),ae.instance.apply(this,"gds-grouped-list")}render(){return b`${T(this.label,()=>b`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`}};o([a()],yo.prototype,"label",2);yo=o([w("gds-grouped-list",{dependsOn:[bo]})],yo);let ct=class extends P{};ct._regularSVG='<path d="M19.25 9.25V17.25M15.25 17.25V9.25M4.75 9.25V17.25M8.75 17.25V9.25M2.75 7.17308L12 2.5L21.25 7.17308V9.25H2.75V7.17308ZM2.75 20.25H21.25L20.25 17.25H3.75L2.75 20.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>';ct._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3382 1.83058C12.1255 1.72314 11.8745 1.72314 11.6618 1.83058L2.41181 6.50365C2.15926 6.63125 2.00001 6.89012 2.00001 7.17308V9.25C2.00001 9.66421 2.33579 10 2.75001 10H4.00001V16.5H3.75001C3.42718 16.5 3.14058 16.7066 3.03849 17.0128L2.03849 20.0128C1.96226 20.2415 2.00061 20.493 2.14157 20.6885C2.28254 20.8841 2.50892 21 2.75001 21H21.25C21.4911 21 21.7175 20.8841 21.8584 20.6885C21.9994 20.493 22.0378 20.2415 21.9615 20.0128L20.9615 17.0128C20.8594 16.7066 20.5728 16.5 20.25 16.5H20V10H21.25C21.6642 10 22 9.66421 22 9.25V7.17308C22 6.89012 21.8408 6.63125 21.5882 6.50365L12.3382 1.83058ZM16 10H18.5V16.5H16V10ZM8.00001 16.5H5.50001V10H8.00001V16.5ZM9.50001 16.5V10H14.5V16.5H9.50001Z" fill="currentColor"/>';ct._name="bank";ct._width=24;ct._height=24;ct._viewBox="0 0 24 24";ct=o([w("gds-icon-bank")],ct);let ht=class extends P{};ht._regularSVG='<path d="M6.75 12H17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';ht._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 11.5858 6.33579 11.25 6.75 11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H6.75C6.33579 12.75 6 12.4142 6 12Z" fill="currentColor"/>';ht._name="minus-small";ht._width=24;ht._height=24;ht._viewBox="0 0 24 24";ht=o([w("gds-icon-minus-small")],ht);const Cc=C`
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
`;var Sc=Cc;let je=class extends qi(le(vo(L))){render(){return b`<img src="${this.src}" alt="${this.alt}" />`}};je.styles=[O,Sc];o([y()],je.prototype,"aspect-ratio",2);o([y({property:"border-radius",valueTemplate:e=>`var(--gds-sys-space-${e})`})],je.prototype,"border-radius",2);o([y({selector:"img"})],je.prototype,"object-fit",2);o([y({selector:"img"})],je.prototype,"object-position",2);o([a()],je.prototype,"src",2);o([a()],je.prototype,"alt",2);je=o([w("gds-img")],je);const Mc=C``;var Ec=Mc,st,Un,dr,cr,Ai,hr,Xn,Kn,Jn,Qn,ea,ta;let G=class extends q{constructor(){super(),p(this,st),this.supportingText="",this.showExtendedSupportingText=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.type="text",this.autocapitalize="off",this.autofocus=!1,this.spellcheck=!0,p(this,dr,e=>{const t=e.target;this.value=t.value}),p(this,cr,e=>{const t=e.target;this.value=t.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),p(this,Ai,()=>{this.elInputAsync.then(e=>e.focus())}),p(this,hr,()=>{this.value="",this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}focus(e){this._getValidityAnchor()?.focus(e)}render(){return b`
      ${T(!this.plain,()=>b`<gds-form-control-header class="size-${this.size}">
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
        @click=${l(this,Ai)}
        id="field"
      >
        ${g(this,st,Xn).call(this)}
      </gds-field-base>
      ${T(g(this,st,Un).call(this),()=>b` <gds-form-control-footer
            class="size-${this.size}"
            .charCounter=${l(this,st,ta)?this.maxlength-(this.value?.length||0):void 0}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_getValidityAnchor(){return this.elInput}};st=new WeakSet;Un=function(){return!this.plain};dr=new WeakMap;cr=new WeakMap;Ai=new WeakMap;hr=new WeakMap;Xn=function(){return[g(this,st,Kn).call(this),g(this,st,Qn).call(this),g(this,st,ea).call(this),g(this,st,Jn).call(this)].map(t=>b`${t}`)};Kn=function(){return b` <slot slot="lead" name="lead"></slot> `};Jn=function(){return b`<slot slot="trail" name="trail"></slot>`};Qn=function(){return b`
      <input
        class="native-control"
        @input=${l(this,dr)}
        @change=${l(this,cr)}
        .value=${this.value}
        id="input"
        ?disabled=${this.disabled}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${this.invalid}
        aria-label=${this.plain&&this.label||se}
        placeholder=" "
        type=${this.type}
        min=${D(this.min)}
        max=${D(this.max)}
        step=${D(this.step)}
        autocapitalize=${D(this.autocapitalize)}
        autocomplete=${D(this.autocomplete)}
        autocorrect=${D(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${D(this.enterkeyhint)}
        inputmode=${D(this.inputmode)}
        ?required=${this.required}
      />
    `};ea=function(){return this.clearable&&(this.value?.length||0)>0?b`<gds-button
        size="${this.size==="small"?"xs":"small"}"
        rank="tertiary"
        variant="${this.invalid?"negative":""}"
        ?disabled="${this.disabled}"
        label="${k("Clear input")}"
        @click=${l(this,hr)}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-large />
      </gds-button>`:se};ta=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};G.styles=[O,Co,Ec];o([a({attribute:"supporting-text"})],G.prototype,"supportingText",2);o([a({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],G.prototype,"showExtendedSupportingText",2);o([a({type:Boolean})],G.prototype,"clearable",2);o([a({type:Number})],G.prototype,"maxlength",2);o([a({type:String})],G.prototype,"size",2);o([a({type:Boolean})],G.prototype,"plain",2);o([a({reflect:!0})],G.prototype,"type",2);o([a()],G.prototype,"min",2);o([a()],G.prototype,"max",2);o([a()],G.prototype,"step",2);o([a()],G.prototype,"autocapitalize",2);o([a()],G.prototype,"autocorrect",2);o([a()],G.prototype,"autocomplete",2);o([a({type:Boolean})],G.prototype,"autofocus",2);o([a()],G.prototype,"enterkeyhint",2);o([a({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],G.prototype,"spellcheck",2);o([a()],G.prototype,"inputmode",2);o([ut("input")],G.prototype,"elInputAsync",2);o([R("input")],G.prototype,"elInput",2);G=o([ue()],G);let Di=class extends le(he(de(G))){};Di=o([w("gds-input",{dependsOn:[Se,Ce,ne,it,Ne,Ae]})],Di);const Tc=C`
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
`;var Ac=Tc,Li,sa;let Le=class extends he(le(de(L))){constructor(){super(...arguments),p(this,Li),this.href="",this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return is`
      <a
        href=${D(this.href)}
        target=${D(this.target)}
        rel=${D(this.rel||l(this,Li,sa))}
        download=${D(this.download)}
        aria-label=${this.label||se}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};Li=new WeakSet;sa=function(){return this.target==="_blank"?"noreferrer noopener":void 0};Le.styles=[O,Vr(Ac)];Le.shadowRootOptions={mode:"open",delegatesFocus:!0};o([a()],Le.prototype,"href",2);o([a()],Le.prototype,"target",2);o([a()],Le.prototype,"rel",2);o([a()],Le.prototype,"label",2);o([a()],Le.prototype,"download",2);o([y({valueTemplate:e=>e,selector:"a"})],Le.prototype,"text-decoration",2);Le=o([w("gds-link")],Le);const Dc=C`
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
`;var Lc=Dc;let qe=class extends it{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.display="flex",this.inset="0"}render(){return is`<div part="mask"></div>
      <slot></slot>`}};qe.styles=[O,Lc];o([y({selector:'[part="mask"]',valueTemplate:function(e){return ji(e,"background",this.level)}})],qe.prototype,"background",2);o([y({valueTemplate:e=>{const[t]=e.split("/");return`linear-gradient(to ${t}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`},selector:'[part="mask"]'})],qe.prototype,"mask-image",2);o([y({valueTemplate:e=>e,selector:'[part="mask"]'})],qe.prototype,"mask-size",2);o([y({valueTemplate:e=>e,selector:'[part="mask"]'})],qe.prototype,"mask-repeat",2);o([y({valueTemplate:e=>e,selector:'[part="mask"]'})],qe.prototype,"mask-position",2);o([y({valueTemplate:e=>e,selector:'[part="mask"]'})],qe.prototype,"backdrop-filter",2);qe=o([w("gds-mask")],qe);const zc=C`
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
`;var Oc=zc,vt,qt,oa;let ye=class extends le(de(L)){constructor(){super(),p(this,vt),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const e={button:!0,selected:this.selected,compact:this.compact},t=l(this,vt,qt)?io`a`:io`button`;return is`
      <${t}
        class="${re(e)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${D(l(this,vt,qt)?this.href:void 0)}
        target=${D(l(this,vt,qt)?this.target:void 0)}
        rel=${D(l(this,vt,qt)?this.rel||l(this,vt,oa):void 0)}
        download=${D(l(this,vt,qt)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${t}>
    `}};vt=new WeakSet;qt=function(){return this.href.length>0};oa=function(){return this.target==="_blank"?"noreferrer noopener":void 0};ye.styles=[O,Oc];ye.shadowRootOptions={mode:"open",delegatesFocus:!0};o([a({type:Boolean,reflect:!0})],ye.prototype,"disabled",2);o([a()],ye.prototype,"label",2);o([a()],ye.prototype,"href",2);o([a()],ye.prototype,"target",2);o([a()],ye.prototype,"rel",2);o([a()],ye.prototype,"download",2);o([a({type:Boolean,reflect:!0})],ye.prototype,"compact",2);o([a({type:Boolean,reflect:!0})],ye.prototype,"selected",2);ye=o([w("gds-menu-button")],ye);const Vc=C`
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
`;var ie,zi,ia,ur,ra,na,Oi,aa,la,da,ca;let ze=class extends q{constructor(){super(...arguments),p(this,ie),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0,this.updateComplete.then(()=>{this._syncRadioStates(),g(this,ie,zi).call(this)}),this.addEventListener("invalid",this._syncRadioStates)}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}focus(e){this._getValidityAnchor()?.focus(e)}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected&&(this._syncRadioStates(),this.updateComplete.then(()=>{g(this,ie,zi).call(this)}))}_syncRadioStates(){this._isConnected&&this.radios.forEach(e=>{e.checked=e.value===this.value,e.size=this.size,e.invalid=this.invalid})}render(){const e={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return b`<div
      role="radiogroup"
      id="radiogroup"
      class=${re(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${g(this,ie,aa).call(this)}
    </div>`}};ie=new WeakSet;zi=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(t=>t.checked);e?(e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter(t=>!t.checked).forEach(t=>t.setAttribute("tabindex","-1"))};ia=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(s=>s.checked),t=e||this.radios[0];t&&(t.focus(),e||(this.radios.forEach(s=>s.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))};ur=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{composed:!0,bubbles:!0})),this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};ra=function(e){e.stopPropagation();const t=e.target;this.value=t.value,this._syncRadioStates(),g(this,ie,ur).call(this)};na=function(e){if(!this._isConnected)return;const t=this.radios.filter(i=>!i.disabled);if(t.length===0)return;let s=t.findIndex(i=>document.activeElement===i);switch(s===-1&&(s=t.findIndex(i=>i.checked),s===-1&&(s=0)),e.key){case"ArrowDown":case"ArrowRight":{e.preventDefault();const i=(s+1)%t.length;g(this,ie,Oi).call(this,t[i]);break}case"ArrowUp":case"ArrowLeft":{e.preventDefault();const i=(s-1+t.length)%t.length;g(this,ie,Oi).call(this,t[i]);break}default:return}};Oi=function(e){!this._contentElement||!this._isConnected||(this.radios.forEach(t=>t.setAttribute("tabindex","-1")),e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),e.checked=!0,e.focus(),this.value=e.value,this._syncRadioStates(),g(this,ie,ur).call(this))};aa=function(){return[g(this,ie,la).call(this),g(this,ie,da).call(this),g(this,ie,ca).call(this)].map(t=>b`${t}`)};la=function(){if(this.label)return b` <gds-form-control-header
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
      </gds-form-control-header>`};da=function(){return b` <div
      class="content"
      @keydown=${g(this,ie,na)}
      @focus=${g(this,ie,ia)}
    >
      <slot @input=${g(this,ie,ra)}></slot>
    </div>`};ca=function(){return b` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};ze.styles=[O,Vc];o([a()],ze.prototype,"size",2);o([a()],ze.prototype,"direction",2);o([a({attribute:"supporting-text"})],ze.prototype,"supportingText",2);o([a({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],ze.prototype,"showExtendedSupportingText",2);o([R(".content")],ze.prototype,"_contentElement",2);o([V("value")],ze.prototype,"_handleValueChange",1);o([V("invalid")],ze.prototype,"_syncRadioStates",1);ze=o([ue()],ze);let Vi=class extends de(he(le(ze))){};Vi=o([w("gds-radio-group",{dependsOn:[Se,Ce]})],Vi);const Wc=C`
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
`;var Rc=Wc,to,Wi;let Oe=class extends L{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,p(this,to,e=>{this.disabled||!this.value||!this.label||(e.preventDefault(),this.checked=!0,this.focus(),this.dispatchStandardEvent("input",{bubbles:!0}))}),p(this,Wi,e=>{this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.checked=!0,this.dispatchStandardEvent("input",{bubbles:!0}))}),this.addEventListener("keydown",l(this,Wi)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",l(this,to))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}updated(e){super.updated(e),(e.has("checked")||e.has("disabled")||e.has("invalid"))&&this._updateAriaState()}render(){return b`
      <gds-toggle-control-base type="radio">
        <label slot="label" @click=${l(this,to)}> ${this.label} </label>
        <span slot="supporting-text"> ${this.supportingText} </span>
        ${Ba({checked:this.checked,disabled:this.disabled,indeterminate:!1,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}};to=new WeakMap;Wi=new WeakMap;Oe.styles=[Zi,Rc];o([a()],Oe.prototype,"label",2);o([a({attribute:"supporting-text"})],Oe.prototype,"supportingText",2);o([a()],Oe.prototype,"value",2);o([a({type:Boolean,reflect:!0})],Oe.prototype,"checked",2);o([a({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);o([a({type:Boolean})],Oe.prototype,"invalid",2);o([J()],Oe.prototype,"_isFocused",2);Oe=o([w("gds-radio",{dependsOn:[Ft]})],Oe);const Bc=C`
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
`;var Fc=Bc;let Ct=class extends le(L){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),ae.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return b`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};Ct.styles=[...O,Fc];o([a({type:Boolean,reflect:!0})],Ct.prototype,"selected",2);o([a()],Ct.prototype,"value",2);o([a({type:Boolean,reflect:!0})],Ct.prototype,"disabled",2);Ct=o([w("gds-segment")],Ct);const Hc=C`
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
`;var Nc=Hc,xt,Ri,ha,Bi,Fi,Hi,Cs,so,Ni,Ii;const Ic=(e,t)=>{let s;return()=>{clearTimeout(s),s=setTimeout(e,t)}};let we=class extends de(le(he(L))){constructor(){super(...arguments),p(this,Ri),this.size="medium",p(this,xt),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,p(this,Bi,()=>{const e=this.segments.filter((t,s,i)=>i[s+1]?.isVisible&&!t.isVisible)[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),p(this,Fi,()=>{const e=this.segments.filter((t,s,i)=>i[s-1]?.isVisible&&!t.isVisible).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),p(this,Hi,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),p(this,Cs,Ic(l(this,Hi),50)),p(this,so,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,s=e.offsetLeft;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),p(this,Ni,e=>{const t=this.segments.find(s=>s===e.target||s.contains(e.target));t&&(this.segments.forEach(s=>s.selected=!1),t.selected=!0,j(this,xt,t.value),l(this,so).call(this),this.dispatchCustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0}))}),p(this,Ii,()=>{l(this,xt)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===l(this,xt));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return l(this,xt)}set value(e){j(this,xt,e),l(this,Ii).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),ae.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{l(this,Cs).call(this)})})}render(){return b`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${l(this,Bi)}
        aria-label=${k("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${l(this,Ni)}
          @slotchange=${g(this,Ri,ha)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${l(this,Fi)}
        aria-label=${k("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{l(this,Cs).call(this),l(this,so).call(this)})}};xt=new WeakMap;Ri=new WeakSet;ha=function(){const e=this.segments.find(t=>t.selected)?.value;e&&j(this,xt,e),this.intersectionObserver?.disconnect(),this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(s=>{const i=s.target;i._isVisible=s.intersectionRatio>.99,l(this,Cs).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(t=>{this.intersectionObserver?.observe(t)})};Bi=new WeakMap;Fi=new WeakMap;Hi=new WeakMap;Cs=new WeakMap;so=new WeakMap;Ni=new WeakMap;Ii=new WeakMap;we.styles=[O,Nc];o([a({reflect:!0})],we.prototype,"size",2);o([a()],we.prototype,"value",1);o([R("slot")],we.prototype,"_elSlot",2);o([R("#indicator")],we.prototype,"_elIndicator",2);o([R("#track")],we.prototype,"_elTrack",2);o([J()],we.prototype,"_showPrevButton",2);o([J()],we.prototype,"_showNextButton",2);o([lr(),V("value")],we.prototype,"_recalculateMinWidth",1);we=o([w("gds-segmented-control",{dependsOn:[Ct,He,Ye]}),ue()],we);const Gc=C`
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
`;var Pc=Gc;let As=class extends L{render(){return is`<div part="signal"></div>`}};As.styles=[O,Pc];o([y({valueTemplate:e=>`var(--gds-sys-color-${e})`,selector:'[part="signal"]'})],As.prototype,"color",2);As=o([w("gds-signal")],As);const ua=C`
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
`,Yc=C`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`;var jc=Yc;let Ze=class extends S{constructor(){super(...arguments),this.tag="span"}render(){const e=nl(encodeURI(this.tag));return is`<${e} tag><slot></slot></${e}>`}};Ze.styles=[O,ua,jc];o([a({type:String})],Ze.prototype,"tag",2);o([y({selector:"[tag]",styleTemplate:(e,t)=>`font: var(--gds-sys-text-${t[0]});`})],Ze.prototype,"font",2);o([y({selector:"[tag]",valueTemplate:e=>`var(--gds-sys-text-weight-${e})`})],Ze.prototype,"font-weight",2);o([y()],Ze.prototype,"text-transform",2);o([y({selector:"[tag]"})],Ze.prototype,"text-decoration",2);o([y({selector:"[tag]",styleTemplate:(e,t)=>`overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${t[0]};
      -webkit-box-orient: vertical;`})],Ze.prototype,"lines",2);Ze=o([w("gds-text")],Ze);const qc=C`
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
`;var Zc=qc,ot,pa,pr,gr,fr,Gi,br,ga,fa,ba,ya,va,ma;let H=class extends q{constructor(){super(),p(this,ot),this._defaultRows=4,this.rows=4,this.supportingText="",this.clearable=!1,this.resizable="auto",this.showExtendedSupportingText=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.size="large",this.plain=!1,this.autocapitalize="off",this.autofocus=!1,this.spellcheck=!0,this._handleSlotChange=()=>{requestAnimationFrame(()=>{this._handleResize()})},p(this,pr,e=>{const t=e.target;this.value=t.value}),p(this,gr,e=>{const t=e.target;this.value=t.value,this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})}),p(this,fr,e=>{requestAnimationFrame(()=>{this._setAutoHeight()})}),p(this,Gi,()=>{this.elTextareaAsync.then(e=>e.focus())}),p(this,br,()=>{this.value="",this.elTextareaAsync.then(e=>{if(this.resizable==="manual")e.style.height="";else if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString()),e.style.height=""}}),this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}),this.value=""}test_getClearButton(){return this.shadowRoot?.querySelector("#clear-button")}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}focus(e){this._getValidityAnchor()?.focus(e)}_handleResize(){this.fieldBase&&Promise.resolve().then(()=>{const e=this.fieldBase?.shadowRoot;if(!e)return;const t=e.querySelector(".right");if(t){const s=t.getBoundingClientRect();this.elTextarea.style.setProperty("--padding-inline-end",`${s.width}px`)}else this.elTextarea.style.removeProperty("--padding-inline-end")})}connectedCallback(){super.connectedCallback(),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("slotchange",this._handleSlotChange)}render(){return b`
      ${T(!this.plain,()=>b`<gds-form-control-header
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
        @click=${l(this,Gi)}
        multiline
      >
        ${g(this,ot,ga).call(this)}
      </gds-field-base>

      ${T(g(this,ot,pa).call(this),()=>b`<gds-form-control-footer
            id="footer"
            class="size-${this.size}"
            .charCounter=${l(this,ot,ma)?this.maxlength-(this.value?.length||0):void 0}
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{if(this.resizable==="false"){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString());return}if(this.resizable!=="manual"&&this.resizable==="auto")if(e.value===""){const t=this._initialRows??this._defaultRows;this.rows=t,e.style.setProperty("--_lines",t.toString())}else{const t=getComputedStyle(e),s=parseFloat(t.lineHeight),i=e.scrollHeight,r=Math.ceil(i/s),n=this._initialRows??this._defaultRows;this.rows=Math.max(n,r),e.style.setProperty("--_lines",this.rows.toString())}})}_handleRowsChange(){this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then(e=>{this.resizable==="false"&&e.style.setProperty("--_lines",this.rows.toString())})}};ot=new WeakSet;pa=function(){return!this.plain};pr=new WeakMap;gr=new WeakMap;fr=new WeakMap;Gi=new WeakMap;br=new WeakMap;ga=function(){return[g(this,ot,fa).call(this),g(this,ot,ya).call(this),g(this,ot,va).call(this),g(this,ot,ba).call(this)].map(t=>b`${t}`)};fa=function(){return b`<slot slot="lead" name="lead"></slot>`};ba=function(){return b`<slot slot="trail" name="trail"></slot>`};ya=function(){return b`
      <textarea
        @input=${l(this,pr)}
        @change=${l(this,gr)}
        @paste=${l(this,fr)}
        .value=${this.value}
        id="input"
        class="native-control resize-${this.resizable}"
        aria-label=${this.plain&&this.label||se}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-errormessage="footer"
        placeholder=" "
        autocapitalize=${D(this.autocapitalize)}
        autocomplete=${D(this.autocomplete)}
        autocorrect=${D(this.autocorrect)}
        ?autofocus=${this.autofocus}
        spellcheck=${this.spellcheck}
        enterkeyhint=${D(this.enterkeyhint)}
        inputmode=${D(this.inputmode)}
        wrap=${D(this.wrap)}
        ?required=${this.required}
      ></textarea>
    `};va=function(){return this.clearable&&(this.value?.length||0)>0?b`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${k("Clear input")}"
          @click=${l(this,br)}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-large></gds-icon-cross-large>
        </gds-button>
      `:se};ma=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};H.styles=[O,Co,Zc];o([y({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],H.prototype,"rows",2);o([a({attribute:"supporting-text"})],H.prototype,"supportingText",2);o([a({type:Boolean})],H.prototype,"clearable",2);o([a({type:String})],H.prototype,"resizable",2);o([a({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],H.prototype,"showExtendedSupportingText",2);o([a({type:Number})],H.prototype,"maxlength",2);o([a({type:String})],H.prototype,"size",2);o([a({type:Boolean})],H.prototype,"plain",2);o([a()],H.prototype,"autocapitalize",2);o([a()],H.prototype,"autocorrect",2);o([a()],H.prototype,"autocomplete",2);o([a({type:Boolean})],H.prototype,"autofocus",2);o([a({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],H.prototype,"spellcheck",2);o([a()],H.prototype,"wrap",2);o([a()],H.prototype,"enterkeyhint",2);o([a()],H.prototype,"inputmode",2);o([ut("textarea")],H.prototype,"elTextareaAsync",2);o([R("textarea")],H.prototype,"elTextarea",2);o([R("gds-field-base")],H.prototype,"fieldBase",2);o([lr()],H.prototype,"_handleResize",1);o([V("value")],H.prototype,"_setAutoHeight",1);o([V("rows")],H.prototype,"_handleRowsChange",1);H=o([ue()],H);let Pi=class extends de(le(he(H))){};Pi=o([w("gds-textarea",{dependsOn:[Se,Ce,Ne,ne,Ae]})],Pi);const Uc=C`
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
`;var Xc=Uc;let K=class extends le(vo(he(de(qi(L))))){applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}render(){return b`<video></video>`}firstUpdated(){this.applyVideoSettings()}};K.styles=[O,Xc];o([y()],K.prototype,"aspect-ratio",2);o([y({selector:"video"})],K.prototype,"object-position",2);o([y()],K.prototype,"opacity",2);o([y({selector:"video"})],K.prototype,"object-fit",2);o([y({selector:"video"})],K.prototype,"pointer-events",2);o([y({valueTemplate:e=>`var(--gds-sys-space-${e})`})],K.prototype,"border-radius",2);o([a()],K.prototype,"src",2);o([a()],K.prototype,"poster",2);o([a({type:Boolean})],K.prototype,"muted",2);o([a({type:Boolean})],K.prototype,"playsinline",2);o([a({type:Boolean})],K.prototype,"autoplay",2);o([a({type:Boolean})],K.prototype,"loop",2);o([R("video")],K.prototype,"videoElement",2);K=o([w("gds-video")],K);Fe.define();Ne.define();Bt.define();Ho.define();Me.define();xe.define();Kt.define();oo.define();ki.define();be.define();kt.define();S.define();F.define();Be.define();_e.define();$t.define();it.define();Gt.define();yo.define();bo.define();ct.define();je.define();Di.define();Le.define();qe.define();ye.define();M.define();let Ds=class extends L{constructor(){super(...arguments),this.show=!1}render(){return b``}};Ds.styles=C`
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
  `;o([a({type:Boolean,reflect:!0})],Ds.prototype,"show",2);Ds=o([w("gds-backdrop")],Ds);Ds.define();Oe.define();Vi.define();const Kc=C`
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
`;var Jc=Kc;let ss=class extends de(he(L)){constructor(){super(...arguments),this.captureMode="clone"}querySelectorAll(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):new NodeList}querySelector(e){return this.shadowRoot?this.shadowRoot.querySelector(e):null}get innerHTML(){return this.shadowRoot?.innerHTML||""}set innerHTML(e){this.shadowRoot&&(this.shadowRoot.innerHTML=e)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){if(!this.shadowRoot||this.childNodes.length===0)return;if(this.captureMode==="move"){this.shadowRoot.replaceChildren(...Array.from(this.childNodes));return}const e=Array.from(this.childNodes).map(t=>t.cloneNode(!0));this.shadowRoot.replaceChildren(...e)}};ss.styles=[O,ua,Jc];o([a()],ss.prototype,"captureMode",2);o([mo({childList:!0,subtree:!0,attributes:!0,characterData:!0})],ss.prototype,"_captureDOM",1);ss=o([w("gds-rich-text")],ss);ss.define();we.define();Ct.define();As.define();Ze.define();Pi.define();Ca.define();K.define();export{Co as A,R as B,mo as C,Se as D,Ce as E,ne as F,I as G,at as H,He as I,qi as J,nl as K,is as L,rt as M,nt as N,Pe as O,lt as P,dt as Q,me as R,Ye as S,Ae as T,ht as U,le as a,he as b,ln as c,dn as d,re as e,Sd as f,Td as g,Ed as h,ih as i,rh as j,oh as k,ue as l,k as m,T as n,xn as o,P as p,Xa as q,Bd as r,Md as s,ut as t,Bt as u,it as v,de as w,S as x,Ne as y,q as z};
