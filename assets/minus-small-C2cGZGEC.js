const _e=globalThis,ze=_e.ShadowRoot&&(_e.ShadyCSS===void 0||_e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ve=Symbol(),dt=new WeakMap;let Tt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ze&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=dt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&dt.set(t,e))}return e}toString(){return this.cssText}};const k=s=>new Tt(typeof s=="string"?s:s+"",void 0,Ve),ke=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((n,r,i)=>n+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[i+1],s[0]);return new Tt(t,s,Ve)},_s=(s,e)=>{if(ze)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),r=_e.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,s.appendChild(n)}},ft=ze?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return k(t)})(s):s;const{is:bs,defineProperty:$s,getOwnPropertyDescriptor:ws,getOwnPropertyNames:Es,getOwnPropertySymbols:xs,getPrototypeOf:As}=Object,Be=globalThis,ht=Be.trustedTypes,Cs=ht?ht.emptyScript:"",Ts=Be.reactiveElementPolyfillSupport,fe=(s,e)=>s,Ee={toAttribute(s,e){switch(e){case Boolean:s=s?Cs:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},qe=(s,e)=>!bs(s,e),ut={attribute:!0,type:String,converter:Ee,reflect:!1,useDefault:!1,hasChanged:qe};Symbol.metadata??=Symbol("metadata"),Be.litPropertyMetadata??=new WeakMap;let ne=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ut){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&$s(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:i}=ws(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get:r,set(l){const p=r?.call(this);i?.call(this,l),this.requestUpdate(e,p,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ut}static _$Ei(){if(this.hasOwnProperty(fe("elementProperties")))return;const e=As(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(fe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fe("properties"))){const t=this.properties,n=[...Es(t),...xs(t)];for(const r of n)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(ft(r))}else e!==void 0&&t.push(ft(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){const i=(n.converter?.toAttribute!==void 0?n.converter:Ee).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){const n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const i=n.getPropertyOptions(r),l=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Ee;this._$Em=r;const p=l.fromAttribute(t,i.type);this[r]=p??this._$Ej?.get(r)??p,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){const l=this.constructor;if(r===!1&&(i=this[e]),n??=l.getPropertyOptions(e),!((n.hasChanged??qe)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},l){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,l??t??this[e]),i!==!0||l!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,i]of n){const{wrapped:l}=i,p=this[r];l!==!0||this._$AL.has(r)||p===void 0||this.C(r,void 0,i,p)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ne.elementStyles=[],ne.shadowRootOptions={mode:"open"},ne[fe("elementProperties")]=new Map,ne[fe("finalized")]=new Map,Ts?.({ReactiveElement:ne}),(Be.reactiveElementVersions??=[]).push("2.1.2");const Fe=globalThis,pt=s=>s,xe=Fe.trustedTypes,yt=xe?xe.createPolicy("lit-html",{createHTML:s=>s}):void 0,Mt="$lit$",V=`lit$${Math.random().toFixed(9).slice(2)}$`,kt="?"+V,Ms=`<${kt}>`,K=document,pe=()=>K.createComment(""),ye=s=>s===null||typeof s!="object"&&typeof s!="function",Ze=Array.isArray,ks=s=>Ze(s)||typeof s?.[Symbol.iterator]=="function",je=`[ 	
\f\r]`,le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,St=/>/g,J=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,vt=/"/g,Bt=/^(?:script|style|textarea|title)$/i,Bs=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),Pt=Bs(1),ee=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),_t=new WeakMap,X=K.createTreeWalker(K,129);function Ot(s,e){if(!Ze(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(e):e}const Ps=(s,e)=>{const t=s.length-1,n=[];let r,i=e===2?"<svg>":e===3?"<math>":"",l=le;for(let p=0;p<t;p++){const f=s[p];let b,S,v=-1,x=0;for(;x<f.length&&(l.lastIndex=x,S=l.exec(f),S!==null);)x=l.lastIndex,l===le?S[1]==="!--"?l=gt:S[1]!==void 0?l=St:S[2]!==void 0?(Bt.test(S[2])&&(r=RegExp("</"+S[2],"g")),l=J):S[3]!==void 0&&(l=J):l===J?S[0]===">"?(l=r??le,v=-1):S[1]===void 0?v=-2:(v=l.lastIndex-S[2].length,b=S[1],l=S[3]===void 0?J:S[3]==='"'?vt:mt):l===vt||l===mt?l=J:l===gt||l===St?l=le:(l=J,r=void 0);const B=l===J&&s[p+1].startsWith("/>")?" ":"";i+=l===le?f+Ms:v>=0?(n.push(b),f.slice(0,v)+Mt+f.slice(v)+V+B):f+V+(v===-2?p:B)}return[Ot(s,i+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class ge{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,l=0;const p=e.length-1,f=this.parts,[b,S]=Ps(e,t);if(this.el=ge.createElement(b,n),X.currentNode=this.el.content,t===2||t===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(r=X.nextNode())!==null&&f.length<p;){if(r.nodeType===1){if(r.hasAttributes())for(const v of r.getAttributeNames())if(v.endsWith(Mt)){const x=S[l++],B=r.getAttribute(v).split(V),G=/([.?@])?(.*)/.exec(x);f.push({type:1,index:i,name:G[2],strings:B,ctor:G[1]==="."?Ds:G[1]==="?"?Rs:G[1]==="@"?Us:Pe}),r.removeAttribute(v)}else v.startsWith(V)&&(f.push({type:6,index:i}),r.removeAttribute(v));if(Bt.test(r.tagName)){const v=r.textContent.split(V),x=v.length-1;if(x>0){r.textContent=xe?xe.emptyScript:"";for(let B=0;B<x;B++)r.append(v[B],pe()),X.nextNode(),f.push({type:2,index:++i});r.append(v[x],pe())}}}else if(r.nodeType===8)if(r.data===kt)f.push({type:2,index:i});else{let v=-1;for(;(v=r.data.indexOf(V,v+1))!==-1;)f.push({type:7,index:i}),v+=V.length-1}i++}}static createElement(e,t){const n=K.createElement("template");return n.innerHTML=e,n}}function oe(s,e,t=s,n){if(e===ee)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl;const i=ye(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(s),r._$AT(s,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=oe(s,r._$AS(s,e.values),r,n)),e}class Os{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??K).importNode(t,!0);X.currentNode=r;let i=X.nextNode(),l=0,p=0,f=n[0];for(;f!==void 0;){if(l===f.index){let b;f.type===2?b=new ie(i,i.nextSibling,this,e):f.type===1?b=new f.ctor(i,f.name,f.strings,this,e):f.type===6&&(b=new Gs(i,this,e)),this._$AV.push(b),f=n[++p]}l!==f?.index&&(i=X.nextNode(),l++)}return X.currentNode=K,r}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ie{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=oe(this,e,t),ye(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==ee&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ks(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&ye(this._$AH)?this._$AA.nextSibling.data=e:this.T(K.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ge.createElement(Ot(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{const i=new Os(r,this),l=i.u(this.options);i.p(t),this.T(l),this._$AH=i}}_$AC(e){let t=_t.get(e.strings);return t===void 0&&_t.set(e.strings,t=new ge(e)),t}k(e){Ze(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const i of e)r===t.length?t.push(n=new ie(this.O(pe()),this.O(pe()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const n=pt(e).nextSibling;pt(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Pe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}_$AI(e,t=this,n,r){const i=this.strings;let l=!1;if(i===void 0)e=oe(this,e,t,0),l=!ye(e)||e!==this._$AH&&e!==ee,l&&(this._$AH=e);else{const p=e;let f,b;for(e=i[0],f=0;f<i.length-1;f++)b=oe(this,p[n+f],t,f),b===ee&&(b=this._$AH[f]),l||=!ye(b)||b!==this._$AH[f],b===A?e=A:e!==A&&(e+=(b??"")+i[f+1]),this._$AH[f]=b}l&&!r&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ds extends Pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class Rs extends Pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class Us extends Pe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=oe(this,e,t,0)??A)===ee)return;const n=this._$AH,r=e===A&&n!==A||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==A&&(n===A||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Gs{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){oe(this,e)}}const wn={I:ie},js=Fe.litHtmlPolyfillSupport;js?.(ge,ie),(Fe.litHtmlVersions??=[]).push("3.3.2");const Is=(s,e,t)=>{const n=t?.renderBefore??e;let r=n._$litPart$;if(r===void 0){const i=t?.renderBefore??null;n._$litPart$=r=new ie(e.insertBefore(pe(),i),i,void 0,t??{})}return r._$AI(s),r};const Je=globalThis;let he=class extends ne{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Is(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ee}};he._$litElement$=!0,he.finalized=!0,Je.litElementHydrateSupport?.({LitElement:he});const Ns=Je.litElementPolyfillSupport;Ns?.({LitElement:he});(Je.litElementVersions??=[]).push("4.2.2");const xn=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};const Hs={attribute:!0,type:String,converter:Ee,reflect:!1,hasChanged:qe},Ls=(s=Hs,e,t)=>{const{kind:n,metadata:r}=t;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),n==="setter"&&((s=Object.create(s)).wrapped=!0),i.set(t.name,s),n==="accessor"){const{name:l}=t;return{set(p){const f=e.get.call(this);e.set.call(this,p),this.requestUpdate(l,f,s,!0,p)},init(p){return p!==void 0&&this.C(l,void 0,s,p),p}}}if(n==="setter"){const{name:l}=t;return function(p){const f=this[l];e.call(this,p),this.requestUpdate(l,f,s,!0,p)}}throw Error("Unsupported decorator location: "+n)};function F(s){return(e,t)=>typeof t=="object"?Ls(s,e,t):((n,r,i)=>{const l=r.hasOwnProperty(i);return r.constructor.createProperty(i,n),l?Object.getOwnPropertyDescriptor(r,i):void 0})(s,e,t)}function Ws(s){return F({...s,state:!0,attribute:!1})}var zs=Object.defineProperty,Vs=Object.getOwnPropertyDescriptor,Dt=s=>{throw TypeError(s)},g=(s,e,t,n)=>{for(var r=n>1?void 0:n?Vs(e,t):e,i=s.length-1,l;i>=0;i--)(l=s[i])&&(r=(n?l(e,t,r):l(r))||r);return n&&r&&zs(e,t,r),r},Xe=(s,e,t)=>e.has(s)||Dt("Cannot "+t),u=(s,e,t)=>(Xe(s,e,"read from private field"),t?t.call(s):e.get(s)),T=(s,e,t)=>e.has(s)?Dt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),q=(s,e,t,n)=>(Xe(s,e,"write to private field"),e.set(s,t),t),I=(s,e,t)=>(Xe(s,e,"access private method"),t);const D="-f33a14";class Ye{static get instance(){return globalThis.__gdsElementLookupTable?.[D]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[D]:new Map}),globalThis.__gdsElementLookupTable[D]}}const Rt=(s,e)=>function(t){var n;return n=class extends t{constructor(){super(...arguments),this.gdsElementName=s}static define(){if(n.isDefined)return;const i=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?s:s+D;customElements.get(i)||(n.isDefined=!0,Ye.instance.set(s,i),customElements.define(i,n),e?.dependsOn&&e.dependsOn.forEach(l=>l.define()))}},n.isDefined=!1,n},bt=new WeakMap;function qs(s,...e){let t=bt.get(s);return t||(t=$t(s),t.raw=$t(s.raw),bt.set(s,t)),[t,...e]}const $t=s=>s.map(e=>{for(const[t,n]of Ye.instance.entries())e=e.replace(new RegExp(`${t}(?![-a-z])`,"mg"),n);return e});function Fs(s){return(e,...t)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return s(e,...t);const[n,...r]=qs(e,...t);return s(n,...r)}}const Zs=Fs(Pt);function An(s,e=!1){return Ye.instance.get(s)??s+(e?D:"")}const Js={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Xs=s=>(...e)=>({_$litDirective$:s,values:e});class Ys{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class Le extends Ys{constructor(e){if(super(e),this.it=A,e.type!==Js.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===A||e==null)return this._t=void 0,this.it=e;if(e===ee)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Le.directiveName="unsafeHTML",Le.resultType=1;const Qs=Xs(Le);var R,Ae,H,Ce,Y,U,N,Te,z,Ut,ce,Gt;class Ks{constructor(e){T(this,z),T(this,R,!Qe()),T(this,Ae,!1),T(this,H,[]),T(this,Ce,[]),T(this,Y,new Map),T(this,U,new Map),T(this,N,[]),T(this,Te,[]),this.host=e,this.host.addController(this)}hostConnected(){I(this,z,Gt).call(this)}has(e){return u(this,R)?u(this,U).has(e):u(this,Y).has(e)}inject(e,t){I(this,z,Ut).call(this,e,t),I(this,z,ce).call(this)}clear(e){u(this,R)?this.host.updateComplete.then(()=>{u(this,U).get(e)?.remove(),u(this,U).delete(e)}):u(this,Y).delete(e),I(this,z,ce).call(this)}clearAll(){u(this,R)?this.host.updateComplete.then(()=>{u(this,U).forEach(e=>e.remove()),u(this,N).forEach(e=>e.remove()),u(this,U).clear(),q(this,N,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],u(this,Y).clear(),q(this,H,[]))}clearInitial(){u(this,R)?this.host.updateComplete.then(()=>{u(this,N).forEach(e=>e.remove()),q(this,N,[])}):q(this,H,[]),I(this,z,ce).call(this)}restoreInitial(){u(this,R)?u(this,Te).forEach(e=>{u(this,N).push(e.cloneNode(!0))}):q(this,H,[...u(this,Ce)]),I(this,z,ce).call(this)}}R=new WeakMap;Ae=new WeakMap;H=new WeakMap;Ce=new WeakMap;Y=new WeakMap;U=new WeakMap;N=new WeakMap;Te=new WeakMap;z=new WeakSet;Ut=function(s,e){if(u(this,R)){let t=u(this,U).get(s);t||(t=document.createElement("style"),u(this,U).set(s,t)),t.textContent=e.cssText}else{if(!this.host.shadowRoot||!e.styleSheet)return;u(this,Y).set(s,e.styleSheet)}};ce=function(){if(u(this,R))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(s=>{s.remove()}),u(this,N).forEach(s=>{this.host.shadowRoot?.appendChild(s)}),u(this,U).forEach(s=>{this.host.shadowRoot?.appendChild(s)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...u(this,H),...Array.from(u(this,Y).values())]}};Gt=function(){u(this,Ae)||(u(this,R)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(s=>{u(this,N).push(s),u(this,Te).push(s.cloneNode(!0))})}):this.host.shadowRoot&&u(this,H).length===0&&(q(this,H,[...this.host.shadowRoot.adoptedStyleSheets||[]]),q(this,Ce,[...u(this,H)])),q(this,Ae,!0))};function Qe(){try{return new CSSStyleSheet,!0}catch{return!1}}function wt(s){return s&&(s.includes("-")?s.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""):s.charAt(0).toUpperCase()+s.slice(1))}var Et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xt={};var At;function en(){if(At)return xt;At=1;var s;return(function(e){(function(t){var n=typeof Et=="object"?Et:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),r=i(e);typeof n.Reflect>"u"?n.Reflect=e:r=i(n.Reflect,r),t(r);function i(l,p){return function(f,b){typeof l[f]!="function"&&Object.defineProperty(l,f,{configurable:!0,writable:!0,value:b}),p&&p(f,b)}}})(function(t){var n=Object.prototype.hasOwnProperty,r=typeof Symbol=="function",i=r&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",l=r&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",p=typeof Object.create=="function",f={__proto__:[]}instanceof Array,b=!p&&!f,S={create:p?function(){return Ge(Object.create(null))}:f?function(){return Ge({__proto__:null})}:function(){return Ge({})},has:b?function(o,a){return n.call(o,a)}:function(o,a){return a in o},get:b?function(o,a){return n.call(o,a)?o[a]:void 0}:function(o,a){return o[a]}},v=Object.getPrototypeOf(Function),x=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",B=!x&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:Ss(),G=!x&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:ms(),Zt=!x&&typeof WeakMap=="function"?WeakMap:vs(),me=new Zt;function Jt(o,a,c,d){if(C(c)){if(!it(o))throw new TypeError;if(!at(a))throw new TypeError;return os(o,a)}else{if(!it(o))throw new TypeError;if(!M(a))throw new TypeError;if(!M(d)&&!C(d)&&!se(d))throw new TypeError;return se(d)&&(d=void 0),c=j(c),is(o,a,c,d)}}t("decorate",Jt);function Xt(o,a){function c(d,h){if(!M(d))throw new TypeError;if(!C(h)&&!hs(h))throw new TypeError;st(o,a,d,h)}return c}t("metadata",Xt);function Yt(o,a,c,d){if(!M(c))throw new TypeError;return C(d)||(d=j(d)),st(o,a,c,d)}t("defineMetadata",Yt);function Qt(o,a,c){if(!M(a))throw new TypeError;return C(c)||(c=j(c)),Ke(o,a,c)}t("hasMetadata",Qt);function Kt(o,a,c){if(!M(a))throw new TypeError;return C(c)||(c=j(c)),Re(o,a,c)}t("hasOwnMetadata",Kt);function es(o,a,c){if(!M(a))throw new TypeError;return C(c)||(c=j(c)),et(o,a,c)}t("getMetadata",es);function ts(o,a,c){if(!M(a))throw new TypeError;return C(c)||(c=j(c)),tt(o,a,c)}t("getOwnMetadata",ts);function ss(o,a){if(!M(o))throw new TypeError;return C(a)||(a=j(a)),nt(o,a)}t("getMetadataKeys",ss);function ns(o,a){if(!M(o))throw new TypeError;return C(a)||(a=j(a)),rt(o,a)}t("getOwnMetadataKeys",ns);function rs(o,a,c){if(!M(a))throw new TypeError;C(c)||(c=j(c));var d=ae(a,c,!1);if(C(d)||!d.delete(o))return!1;if(d.size>0)return!0;var h=me.get(a);return h.delete(c),h.size>0||me.delete(a),!0}t("deleteMetadata",rs);function os(o,a){for(var c=o.length-1;c>=0;--c){var d=o[c],h=d(a);if(!C(h)&&!se(h)){if(!at(h))throw new TypeError;a=h}}return a}function is(o,a,c,d){for(var h=o.length-1;h>=0;--h){var P=o[h],m=P(a,c,d);if(!C(m)&&!se(m)){if(!M(m))throw new TypeError;d=m}}return d}function ae(o,a,c){var d=me.get(o);if(C(d)){if(!c)return;d=new B,me.set(o,d)}var h=d.get(a);if(C(h)){if(!c)return;h=new B,d.set(a,h)}return h}function Ke(o,a,c){var d=Re(o,a,c);if(d)return!0;var h=Ue(a);return se(h)?!1:Ke(o,h,c)}function Re(o,a,c){var d=ae(a,c,!1);return C(d)?!1:ds(d.has(o))}function et(o,a,c){var d=Re(o,a,c);if(d)return tt(o,a,c);var h=Ue(a);if(!se(h))return et(o,h,c)}function tt(o,a,c){var d=ae(a,c,!1);if(!C(d))return d.get(o)}function st(o,a,c,d){var h=ae(c,d,!0);h.set(o,a)}function nt(o,a){var c=rt(o,a),d=Ue(o);if(d===null)return c;var h=nt(d,a);if(h.length<=0)return c;if(c.length<=0)return h;for(var P=new G,m=[],_=0,y=c;_<y.length;_++){var $=y[_],w=P.has($);w||(P.add($),m.push($))}for(var W=0,ct=h;W<ct.length;W++){var $=ct[W],w=P.has($);w||(P.add($),m.push($))}return m}function rt(o,a){var c=[],d=ae(o,a,!1);if(C(d))return c;for(var h=d.keys(),P=us(h),m=0;;){var _=ys(P);if(!_)return c.length=m,c;var y=ps(_);try{c[m]=y}catch($){try{gs(P)}finally{throw $}}m++}}function ot(o){if(o===null)return 1;switch(typeof o){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return o===null?1:6;default:return 6}}function C(o){return o===void 0}function se(o){return o===null}function as(o){return typeof o=="symbol"}function M(o){return typeof o=="object"?o!==null:typeof o=="function"}function ls(o,a){switch(ot(o)){case 0:return o;case 1:return o;case 2:return o;case 3:return o;case 4:return o;case 5:return o}var c="string",d=lt(o,i);if(d!==void 0){var h=d.call(o,c);if(M(h))throw new TypeError;return h}return cs(o)}function cs(o,a){var c,d;{var h=o.toString;if(ve(h)){var d=h.call(o);if(!M(d))return d}var c=o.valueOf;if(ve(c)){var d=c.call(o);if(!M(d))return d}}throw new TypeError}function ds(o){return!!o}function fs(o){return""+o}function j(o){var a=ls(o);return as(a)?a:fs(a)}function it(o){return Array.isArray?Array.isArray(o):o instanceof Object?o instanceof Array:Object.prototype.toString.call(o)==="[object Array]"}function ve(o){return typeof o=="function"}function at(o){return typeof o=="function"}function hs(o){switch(ot(o)){case 3:return!0;case 4:return!0;default:return!1}}function lt(o,a){var c=o[a];if(c!=null){if(!ve(c))throw new TypeError;return c}}function us(o){var a=lt(o,l);if(!ve(a))throw new TypeError;var c=a.call(o);if(!M(c))throw new TypeError;return c}function ps(o){return o.value}function ys(o){var a=o.next();return a.done?!1:a}function gs(o){var a=o.return;a&&a.call(o)}function Ue(o){var a=Object.getPrototypeOf(o);if(typeof o!="function"||o===v||a!==v)return a;var c=o.prototype,d=c&&Object.getPrototypeOf(c);if(d==null||d===Object.prototype)return a;var h=d.constructor;return typeof h!="function"||h===o?a:h}function Ss(){var o={},a=[],c=(function(){function m(_,y,$){this._index=0,this._keys=_,this._values=y,this._selector=$}return m.prototype["@@iterator"]=function(){return this},m.prototype[l]=function(){return this},m.prototype.next=function(){var _=this._index;if(_>=0&&_<this._keys.length){var y=this._selector(this._keys[_],this._values[_]);return _+1>=this._keys.length?(this._index=-1,this._keys=a,this._values=a):this._index++,{value:y,done:!1}}return{value:void 0,done:!0}},m.prototype.throw=function(_){throw this._index>=0&&(this._index=-1,this._keys=a,this._values=a),_},m.prototype.return=function(_){return this._index>=0&&(this._index=-1,this._keys=a,this._values=a),{value:_,done:!0}},m})();return(function(){function m(){this._keys=[],this._values=[],this._cacheKey=o,this._cacheIndex=-2}return Object.defineProperty(m.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),m.prototype.has=function(_){return this._find(_,!1)>=0},m.prototype.get=function(_){var y=this._find(_,!1);return y>=0?this._values[y]:void 0},m.prototype.set=function(_,y){var $=this._find(_,!0);return this._values[$]=y,this},m.prototype.delete=function(_){var y=this._find(_,!1);if(y>=0){for(var $=this._keys.length,w=y+1;w<$;w++)this._keys[w-1]=this._keys[w],this._values[w-1]=this._values[w];return this._keys.length--,this._values.length--,_===this._cacheKey&&(this._cacheKey=o,this._cacheIndex=-2),!0}return!1},m.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=o,this._cacheIndex=-2},m.prototype.keys=function(){return new c(this._keys,this._values,d)},m.prototype.values=function(){return new c(this._keys,this._values,h)},m.prototype.entries=function(){return new c(this._keys,this._values,P)},m.prototype["@@iterator"]=function(){return this.entries()},m.prototype[l]=function(){return this.entries()},m.prototype._find=function(_,y){return this._cacheKey!==_&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=_)),this._cacheIndex<0&&y&&(this._cacheIndex=this._keys.length,this._keys.push(_),this._values.push(void 0)),this._cacheIndex},m})();function d(m,_){return m}function h(m,_){return _}function P(m,_){return[m,_]}}function ms(){return(function(){function o(){this._map=new B}return Object.defineProperty(o.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),o.prototype.has=function(a){return this._map.has(a)},o.prototype.add=function(a){return this._map.set(a,a),this},o.prototype.delete=function(a){return this._map.delete(a)},o.prototype.clear=function(){this._map.clear()},o.prototype.keys=function(){return this._map.keys()},o.prototype.values=function(){return this._map.values()},o.prototype.entries=function(){return this._map.entries()},o.prototype["@@iterator"]=function(){return this.keys()},o.prototype[l]=function(){return this.keys()},o})()}function vs(){var o=16,a=S.create(),c=d();return(function(){function y(){this._key=d()}return y.prototype.has=function($){var w=h($,!1);return w!==void 0?S.has(w,this._key):!1},y.prototype.get=function($){var w=h($,!1);return w!==void 0?S.get(w,this._key):void 0},y.prototype.set=function($,w){var W=h($,!0);return W[this._key]=w,this},y.prototype.delete=function($){var w=h($,!1);return w!==void 0?delete w[this._key]:!1},y.prototype.clear=function(){this._key=d()},y})();function d(){var y;do y="@@WeakMap@@"+_();while(S.has(a,y));return a[y]=!0,y}function h(y,$){if(!n.call(y,c)){if(!$)return;Object.defineProperty(y,c,{value:S.create()})}return y[c]}function P(y,$){for(var w=0;w<$;++w)y[w]=Math.random()*255|0;return y}function m(y){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(y)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(y)):P(new Uint8Array(y),y):P(new Array(y),y)}function _(){var y=m(o);y[6]=y[6]&79|64,y[8]=y[8]&191|128;for(var $="",w=0;w<o;++w){var W=y[w];(w===4||w===6||w===8)&&($+="-"),W<16&&($+="0"),$+=W.toString(16).toLowerCase()}return $}}function Ge(o){return o.__=void 0,delete o.__,o}})})(s||(s={})),xt}en();class Se extends he{constructor(){super(),this.semanticVersion="2.29.1-rc.20260212113439679",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new Ks(this)}static define(){}connectedCallback(){super.connectedCallback(),this.setAttribute("gds-element",this.gdsElementName?.toString()||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(e,t){const n={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new Event(e,n)),this.dispatchEvent(new Event(wt(e),n))].every(r=>r!==!1)}dispatchCustomEvent(e,t={}){const n={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new CustomEvent(e,n)),this.dispatchEvent(new CustomEvent(wt(e),n))].every(r=>r!==!1)}}Se.isDefined=!1;Se.styleExpressionBaseSelector=":host";g([Ws()],Se.prototype,"_isUsingTransitionalStyles",2);const jt=`/**
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
  --gds-sys-text-display-2xl: 450 5.125rem/5.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-xl: 450 4rem/4.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-l: 450 3rem/3.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-m: 450 2.25rem/2.75rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-display-s: 450 2rem/2.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-xl: 450 2rem/2.75rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-l: 450 1.75rem/2.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-m: 450 1.5rem/2rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-s: 450 1.25rem/1.75rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-xs: 450 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-heading-2xs: 450 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-2xl: 450 2rem/2.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-xl: 450 1.75rem/2.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-l: 450 1.5rem/2rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-m: 450 1.25rem/1.75rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-s: 450 1.125rem/1.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-preamble-xs: 450 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-book-m: 450 1rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-book-s: 450 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-book-xs: 450 0.75rem/1rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-regular-m: 400 1rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-regular-s: 400 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-detail-regular-xs: 400 0.75rem/1rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-medium-m: 500 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-medium-s: 500 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-book-m: 450 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-book-s: 450 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-regular-l: 400 1.25rem/1.625rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-regular-m: 400 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-regular-s: 400 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-italic-m: italic 400 1rem/1.5rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
  --gds-sys-text-body-italic-s: italic 400 0.875rem/1.25rem SEB SansSerif, SEB SansSerif GDS, SEBSansSerif;
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
  --gds-sys-radius-max: 999px;`,ue=`/**
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
  --gds-sys-color-border-subtle-01: #454a48;
  --gds-sys-color-border-subtle-02: #282a29;
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
  --gds-sys-color-state-warning-06: #f19e38 20%;`,Me=`/**
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
  --gds-sys-color-state-warning-06: #8f530a 16%;`,It=`/**
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
  --gds-sys-shadow-2xl-02: 0px 0px 0px 0px transparent;`;var tn={};const Oe=typeof process<"u"&&tn!==void 0,Cn=/iPad|iPhone|iPod/.test(Oe?"":navigator.userAgent);var be,Q,re,De,de,Nt,Ht,Lt;function sn(){return Oe?[]:[...document.adoptedStyleSheets]}const nn=class Wt{constructor(){T(this,de),T(this,be,!Qe()),T(this,Q,new Map),T(this,re,new Map),T(this,De,sn())}static get instance(){return globalThis.__gdsGlobalStylesRegistryScoped?.[D]||(globalThis.__gdsGlobalStylesRegistryScoped={...globalThis.__gdsGlobalStylesRegistryScoped,[D]:new Wt}),globalThis.__gdsGlobalStylesRegistryScoped[D]}injectGlobalStyles(e,t){if(u(this,be)){const n=Array.isArray(t)?t.map(r=>r.toString()).join(""):t.toString();I(this,de,Nt).call(this,e,n)}else t.styleSheet&&I(this,de,Ht).call(this,e,t.styleSheet)}clearGlobalStyles(e){if(u(this,be)){const t=u(this,re).get(e);t&&t.parentNode&&(t.parentNode.removeChild(t),u(this,re).delete(e))}else I(this,de,Lt).call(this,e)}};be=new WeakMap;Q=new WeakMap;re=new WeakMap;De=new WeakMap;de=new WeakSet;Nt=function(s,e){if(Oe)return;let t=u(this,re).get(s);t||(t=document.createElement("style"),u(this,re).set(s,t)),t.textContent=e,document.head.appendChild(t)};Ht=function(s,e){Oe||(u(this,Q).set(s,e),document.adoptedStyleSheets=[...u(this,De),...Array.from(u(this,Q).values())])};Lt=function(s){u(this,Q).has(s)&&(u(this,Q).delete(s),document.adoptedStyleSheets=[...u(this,De),...Array.from(u(this,Q).values())])};let rn=nn;const zt=[ke`
    :host {
      ${k(jt)}
      ${k(It)}
    }
  `];rn.instance.injectGlobalStyles("root-tokens",ke`
    :root {
      ${k(jt)}
      ${k(It)}
    }
    :root:not([gds-theme]),
    :root[gds-theme='light'] {
      ${k(Me)}
    }
    :root[gds-theme='dark'] {
      ${k(ue)}
    }
    :root[gds-theme='auto'] {
      @media (prefers-color-scheme: dark) {
        ${k(ue)}
      }
      @media (prefers-color-scheme: light) {
        ${k(Me)}
      }
    }
  `);const on={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},an=/^([<|>]=?)?([0-9a-z]+)/,Vt=["{","}",";",":",","],Ct=[" ","/n"];function ln(s=""){const e=[];let t="";for(let n=0;n<s.length;n++){const r=s[n];if(Ct.includes(r)||(t+=r),Vt.includes(r)){e.push(t.slice(0,-1)),e.push(r),t="";continue}if(Ct.includes(r)||n===s.length-1){e.push(t),t="";continue}}return e.filter(n=>n!=="")}function cn(s){const e=[];let t={breakpoint:"-",values:[]};const n=()=>({sel:"",values:[]});let r=n();for(const i of s){if(!Vt.includes(i)){r.values.push(i);continue}if(i==="{"&&(t={breakpoint:r.values.join(","),values:[]},r=n()),i===";"&&(e.length===0&&e.push(t),r.values.length>0&&(t.values.push(r),r=n())),i===":"){const l=r.values.pop()??"";r.sel=l}t&&i==="}"&&(t.values.push(r),r=n(),e.push(t))}return r.values.length>0&&t.values.push(r),e.length===0&&e.push(t),e}function dn(s){return s.split(",").map(t=>{const n=t.trim().match(an);if(!n)throw new Error(`Invalid breakpoint specifier: ${t}`);return{condition:n[1],value:n[2]}})}function fn(s,e,t,n=i=>i,r=(i,l)=>`${i}: ${l.join(" ")};`){let i="";for(const l of t){const b=`@media ${(l.breakpoint==="-"?[{condition:">=",value:"0"}]:dn(l.breakpoint)).map(S=>`(${S.condition?.includes("<")?"max-width":"min-width"}: ${on[S.value]??S.value})`).join(" and ")} {${l.values.map(S=>{let v=s;S.sel.length>0&&(v=s===":host"?`:host(:${S.sel})`:`${s}:${S.sel}`);const x=r(e,S.values.map(n));return S.sel==="hover"?`@media (hover: hover) {${v}{${x}}}`:`${v}{${x}}`}).join("")}}`;i+=b}return i}const Ie=new Map;function E(s){return(e,t)=>{const n=s?.property??String(t),r=s?.valueTemplate,i=s?.styleTemplate,l=s?.cacheOverrideKey??"0",p=s?.attribute??String(t);F({attribute:p,reflect:s?.reflect,noAccessor:!0})(e,t),Object.defineProperty(e,t,{get:function(){return this["__"+String(t)]},set:async function(f){f=f?.toString().trim()??"",this["__"+String(t)]=f,s?.reflect&&(f?this.setAttribute(p,String(f)):this.removeAttribute(p)),await this.updateComplete;const b=s?.selector??this.constructor.styleExpressionBaseSelector,S=this.level??"0",v=b+n+f+S+l;if(Ie.has(v)){this._dynamicStylesController.inject(`sep_${String(t)}`,Ie.get(v));return}const x=cn(ln(f)),B=fn(b,n,x,r?.bind(this),i?.bind(this)),G=k(B);Ie.set(v,G),this._dynamicStylesController.inject(`sep_${String(t)}`,G)}})}}function hn(s,e,t){if(s==="transparent"||s==="currentColor"||s==="inherit")return s;const[n,r]=s.split("/");let i;return t&&e==="background"?i=`var(--gds-sys-color-l${t}-${n})`:i=`var(--gds-sys-color-${e}-${n})`,r?`color-mix(in srgb, ${i} ${parseFloat(r)*100}%, transparent 0%)`:i}function un(s){return{valueTemplate:function(e){return hn(e,s,this.level)}}}const Ne={valueTemplate:s=>`var(--gds-sys-space-${s}, 0)`},Tn={valueTemplate:s=>`var(--gds-sys-radius-${s}, 0)`},O={valueTemplate:s=>`var(--gds-sys-space-${pn(s)}, ${s})`},He={valueTemplate:s=>{const t=(s.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${s})`:`calc(var(--gds-sys-space-${s.substring(1)}) * -1)`;return s==="auto"?"auto":t},styleTemplate:(s,e)=>{const t=p=>p==="auto"?"auto":`${p}`,n=t(e[0]),r=e.length>1?t(e[1]):n,i=e.length>2?t(e[2]):n,l=e.length>3?t(e[3]):r;return`${s}: ${n} ${r} ${i} ${l};`}};function pn(s){return s.replace(/[^a-zA-Z0-9-]/g,"")}function Mn(s){class e extends s{}return g([E(O)],e.prototype,"width",2),g([E(O)],e.prototype,"min-width",2),g([E(O)],e.prototype,"max-width",2),g([E(O)],e.prototype,"inline-size",2),g([E(O)],e.prototype,"min-inline-size",2),g([E(O)],e.prototype,"max-inline-size",2),e}function kn(s){class e extends s{}return g([E(O)],e.prototype,"height",2),g([E(O)],e.prototype,"min-height",2),g([E(O)],e.prototype,"max-height",2),g([E(O)],e.prototype,"block-size",2),g([E(O)],e.prototype,"min-block-size",2),g([E(O)],e.prototype,"max-block-size",2),e}function yn(s){class e extends s{}return g([E(He)],e.prototype,"margin",2),g([E(He)],e.prototype,"margin-inline",2),g([E(He)],e.prototype,"margin-block",2),e}function Bn(s){class e extends s{}return g([E(Ne)],e.prototype,"padding",2),g([E(Ne)],e.prototype,"padding-inline",2),g([E(Ne)],e.prototype,"padding-block",2),e}function gn(s){class e extends s{}return g([E()],e.prototype,"align-self",2),g([E()],e.prototype,"justify-self",2),g([E()],e.prototype,"place-self",2),g([E()],e.prototype,"grid-column",2),g([E()],e.prototype,"grid-row",2),g([E()],e.prototype,"grid-area",2),g([E()],e.prototype,"flex",2),g([E()],e.prototype,"order",2),e}function Pn(s){class e extends s{}return g([E()],e.prototype,"position",2),g([E()],e.prototype,"transform",2),g([E()],e.prototype,"inset",2),e}const Sn=ke`
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
`;var mn=Sn;class Z extends yn(gn(Se)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const t={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...t,"aria-label":this.label}:{...t,role:"presentation"}}get svgContent(){const e=this.constructor;return this.solid?e._solidSVG:e._regularSVG}applyStroke(e){return this.stroke?e.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):e}generateAttributesString(e){return Object.entries(e).filter(([t,n])=>n!==void 0).map(([t,n])=>`${t}="${n}"`).join(`
      `)}render(){const e=this.svgAttributes;let t=this.svgContent||"";this.stroke&&(t=this.applyStroke(t));const n=`
      <svg ${this.generateAttributesString(e)}>
        ${t}
      </svg>
    `;return Pt`${Qs(n)}`}}Z.styles=[zt,mn];g([E({...O,property:"height",selector:"svg"})],Z.prototype,"size",2);g([F({type:Boolean})],Z.prototype,"solid",2);g([F({type:Number})],Z.prototype,"stroke",2);g([F()],Z.prototype,"level",2);g([E(un("content"))],Z.prototype,"color",2);g([F({type:String})],Z.prototype,"label",2);var $e,we,We;const vn=class qt{constructor(){T(this,$e,new Map),T(this,we,new Map),T(this,We,!Qe())}static get instance(){return globalThis.__gdsTransitionalStyles?.[D]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[D]:new qt}),globalThis.__gdsTransitionalStyles[D]}apply(e,t){if(!e.shadowRoot)return;const n=u(this,$e).get(t);n&&(u(this,we).set(t,e),this.applyToElement(t,n))}applyToElement(e,t){const n=u(this,we).get(e);if(!n||!n.shadowRoot)return;const r=()=>{n._dynamicStylesController.clearInitial(),n._dynamicStylesController.inject("t-styles",k(t)),n._isUsingTransitionalStyles=!0},i=()=>{n._isUsingTransitionalStyles=!1,n._dynamicStylesController.clear("t-styles"),n._dynamicStylesController.restoreInitial()},l="[gds-element=gds-theme]";let p=n.getRootNode(),f=n.closest(l);for(;f===null&&p!==document;)f=p.host?.closest(l),p=p.host?.getRootNode();if(f){const b=f,S=()=>{b.designVersion==="2023"?i():r()};if(b.addEventListener("gds-design-version-changed",S),n.addEventListener("gds-element-disconnected",()=>b.removeEventListener("gds-design-version-changed",S)),b.designVersion==="2023"){i();return}}r()}register(e,t){let n=t;u(this,We)&&(n=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${t}`),u(this,$e).set(e,n),this.applyToElement(e,n)}};$e=new WeakMap;we=new WeakMap;We=new WeakMap;let _n=vn;function Ft(s,e){const t={waitUntilFirstUpdate:!1,...e};return(n,r,i)=>{const{update:l}=n,p=Array.isArray(s)?s:[s];n.update=function(f){p.forEach(b=>{const S=b;if(f.has(S)){const v=f.get(S),x=this[S];v!==x&&(!t.waitUntilFirstUpdate||this.hasUpdated)&&i.value?.call(this,v,x)}}),l.call(this,f)}}}let L=class extends Z{};L._regularSVG='<path d="M6.75 12H17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';L._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 11.5858 6.33579 11.25 6.75 11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H6.75C6.33579 12.75 6 12.4142 6 12Z" fill="currentColor"/>';L._name="minus-small";L._width=24;L._height=24;L._viewBox="0 0 24 24";L=g([Rt("gds-icon-minus-small")],L);let te=class extends Se{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2023"}connectedCallback(){super.connectedCallback(),_n.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",k(`:host {${ue}}`))}render(){return Zs`<slot></slot>`}_onColorSchemeChange(){switch(this.colorScheme){case"dark":this._dynamicStylesController.inject("color-scheme",k(`:host { ${ue}}`));break;case"light":default:this._dynamicStylesController.inject("color-scheme",k(`:host { ${Me}}`));break;case"auto":this._dynamicStylesController.inject("color-scheme",k(`:host { ${Me}} @media (prefers-color-scheme: dark) { :host { ${ue} } }`));break}this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};te.styles=[zt,ke`
      :host {
        display: contents;
        color: var(--gds-sys-color-content-neutral-01);
        font-family: var(--gds-sys-text-family);
      }
    `];g([F({reflect:!0,attribute:"color-scheme"})],te.prototype,"colorScheme",2);g([F({reflect:!0,attribute:"design-version"})],te.prototype,"designVersion",2);g([Ft("colorScheme")],te.prototype,"_onColorSchemeChange",1);g([Ft("designVersion")],te.prototype,"_onDesignVersionChange",1);te=g([Rt("gds-theme")],te);L.define();export{A,Pn as B,un as C,hn as D,ee as E,Ne as F,te as G,Tn as H,An as I,Ws as J,k as K,L,Qs as M,rn as N,Cn as O,O as P,_n as T,g as _,Z as a,ke as b,Ys as c,Js as d,Xs as e,Oe as f,Rt as g,Zs as h,he as i,T as j,I as k,u as l,q as m,Se as n,zt as o,F as p,Pt as q,wn as r,Mn as s,xn as t,yn as u,gn as v,Ft as w,E as x,kn as y,Bn as z};
