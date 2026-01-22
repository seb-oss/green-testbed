const Se=globalThis,We=Se.ShadowRoot&&(Se.ShadyCSS===void 0||Se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ze=Symbol(),dt=new WeakMap;let Tt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(We&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=dt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&dt.set(t,e))}return e}toString(){return this.cssText}};const M=s=>new Tt(typeof s=="string"?s:s+"",void 0,ze),ke=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((n,r,i)=>n+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[i+1],s[0]);return new Tt(t,s,ze)},vs=(s,e)=>{if(We)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),r=Se.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,s.appendChild(n)}},ft=We?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return M(t)})(s):s;const{is:_s,defineProperty:bs,getOwnPropertyDescriptor:$s,getOwnPropertyNames:ws,getOwnPropertySymbols:Es,getPrototypeOf:xs}=Object,Me=globalThis,ht=Me.trustedTypes,As=ht?ht.emptyScript:"",Cs=Me.reactiveElementPolyfillSupport,le=(s,e)=>s,be={toAttribute(s,e){switch(e){case Boolean:s=s?As:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Ve=(s,e)=>!_s(s,e),ut={attribute:!0,type:String,converter:be,reflect:!1,useDefault:!1,hasChanged:Ve};Symbol.metadata??=Symbol("metadata"),Me.litPropertyMetadata??=new WeakMap;let se=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ut){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&bs(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:i}=$s(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get:r,set(l){const u=r?.call(this);i?.call(this,l),this.requestUpdate(e,u,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ut}static _$Ei(){if(this.hasOwnProperty(le("elementProperties")))return;const e=xs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(le("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(le("properties"))){const t=this.properties,n=[...ws(t),...Es(t)];for(const r of n)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(ft(r))}else e!==void 0&&t.push(ft(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vs(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){const i=(n.converter?.toAttribute!==void 0?n.converter:be).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){const n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const i=n.getPropertyOptions(r),l=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:be;this._$Em=r;const u=l.fromAttribute(t,i.type);this[r]=u??this._$Ej?.get(r)??u,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){const l=this.constructor;if(r===!1&&(i=this[e]),n??=l.getPropertyOptions(e),!((n.hasChanged??Ve)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},l){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,l??t??this[e]),i!==!0||l!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,i]of n){const{wrapped:l}=i,u=this[r];l!==!0||this._$AL.has(r)||u===void 0||this.C(r,void 0,i,u)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};se.elementStyles=[],se.shadowRootOptions={mode:"open"},se[le("elementProperties")]=new Map,se[le("finalized")]=new Map,Cs?.({ReactiveElement:se}),(Me.reactiveElementVersions??=[]).push("2.1.2");const qe=globalThis,pt=s=>s,$e=qe.trustedTypes,yt=$e?$e.createPolicy("lit-html",{createHTML:s=>s}):void 0,kt="$lit$",V=`lit$${Math.random().toFixed(9).slice(2)}$`,Mt="?"+V,Ts=`<${Mt}>`,Q=document,fe=()=>Q.createComment(""),he=s=>s===null||typeof s!="object"&&typeof s!="function",Fe=Array.isArray,ks=s=>Fe(s)||typeof s?.[Symbol.iterator]=="function",Ue=`[ 	
\f\r]`,ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,St=/>/g,J=RegExp(`>|${Ue}(?:([^\\s"'>=/]+)(${Ue}*=${Ue}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,vt=/"/g,Bt=/^(?:script|style|textarea|title)$/i,Ms=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),Pt=Ms(1),K=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),_t=new WeakMap,X=Q.createTreeWalker(Q,129);function Ot(s,e){if(!Fe(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(e):e}const Bs=(s,e)=>{const t=s.length-1,n=[];let r,i=e===2?"<svg>":e===3?"<math>":"",l=ie;for(let u=0;u<t;u++){const f=s[u];let b,S,v=-1,x=0;for(;x<f.length&&(l.lastIndex=x,S=l.exec(f),S!==null);)x=l.lastIndex,l===ie?S[1]==="!--"?l=gt:S[1]!==void 0?l=St:S[2]!==void 0?(Bt.test(S[2])&&(r=RegExp("</"+S[2],"g")),l=J):S[3]!==void 0&&(l=J):l===J?S[0]===">"?(l=r??ie,v=-1):S[1]===void 0?v=-2:(v=l.lastIndex-S[2].length,b=S[1],l=S[3]===void 0?J:S[3]==='"'?vt:mt):l===vt||l===mt?l=J:l===gt||l===St?l=ie:(l=J,r=void 0);const B=l===J&&s[u+1].startsWith("/>")?" ":"";i+=l===ie?f+Ts:v>=0?(n.push(b),f.slice(0,v)+kt+f.slice(v)+V+B):f+V+(v===-2?u:B)}return[Ot(s,i+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class ue{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,l=0;const u=e.length-1,f=this.parts,[b,S]=Bs(e,t);if(this.el=ue.createElement(b,n),X.currentNode=this.el.content,t===2||t===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(r=X.nextNode())!==null&&f.length<u;){if(r.nodeType===1){if(r.hasAttributes())for(const v of r.getAttributeNames())if(v.endsWith(kt)){const x=S[l++],B=r.getAttribute(v).split(V),G=/([.?@])?(.*)/.exec(x);f.push({type:1,index:i,name:G[2],strings:B,ctor:G[1]==="."?Os:G[1]==="?"?Ds:G[1]==="@"?Rs:Be}),r.removeAttribute(v)}else v.startsWith(V)&&(f.push({type:6,index:i}),r.removeAttribute(v));if(Bt.test(r.tagName)){const v=r.textContent.split(V),x=v.length-1;if(x>0){r.textContent=$e?$e.emptyScript:"";for(let B=0;B<x;B++)r.append(v[B],fe()),X.nextNode(),f.push({type:2,index:++i});r.append(v[x],fe())}}}else if(r.nodeType===8)if(r.data===Mt)f.push({type:2,index:i});else{let v=-1;for(;(v=r.data.indexOf(V,v+1))!==-1;)f.push({type:7,index:i}),v+=V.length-1}i++}}static createElement(e,t){const n=Q.createElement("template");return n.innerHTML=e,n}}function ne(s,e,t=s,n){if(e===K)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl;const i=he(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(s),r._$AT(s,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=ne(s,r._$AS(s,e.values),r,n)),e}class Ps{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Q).importNode(t,!0);X.currentNode=r;let i=X.nextNode(),l=0,u=0,f=n[0];for(;f!==void 0;){if(l===f.index){let b;f.type===2?b=new re(i,i.nextSibling,this,e):f.type===1?b=new f.ctor(i,f.name,f.strings,this,e):f.type===6&&(b=new Us(i,this,e)),this._$AV.push(b),f=n[++u]}l!==f?.index&&(i=X.nextNode(),l++)}return X.currentNode=Q,r}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class re{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ne(this,e,t),he(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ks(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&he(this._$AH)?this._$AA.nextSibling.data=e:this.T(Q.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ue.createElement(Ot(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{const i=new Ps(r,this),l=i.u(this.options);i.p(t),this.T(l),this._$AH=i}}_$AC(e){let t=_t.get(e.strings);return t===void 0&&_t.set(e.strings,t=new ue(e)),t}k(e){Fe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const i of e)r===t.length?t.push(n=new re(this.O(fe()),this.O(fe()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const n=pt(e).nextSibling;pt(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Be{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}_$AI(e,t=this,n,r){const i=this.strings;let l=!1;if(i===void 0)e=ne(this,e,t,0),l=!he(e)||e!==this._$AH&&e!==K,l&&(this._$AH=e);else{const u=e;let f,b;for(e=i[0],f=0;f<i.length-1;f++)b=ne(this,u[n+f],t,f),b===K&&(b=this._$AH[f]),l||=!he(b)||b!==this._$AH[f],b===A?e=A:e!==A&&(e+=(b??"")+i[f+1]),this._$AH[f]=b}l&&!r&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Os extends Be{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class Ds extends Be{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class Rs extends Be{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ne(this,e,t,0)??A)===K)return;const n=this._$AH,r=e===A&&n!==A||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==A&&(n===A||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Us{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ne(this,e)}}const $n={I:re},Gs=qe.litHtmlPolyfillSupport;Gs?.(ue,re),(qe.litHtmlVersions??=[]).push("3.3.2");const js=(s,e,t)=>{const n=t?.renderBefore??e;let r=n._$litPart$;if(r===void 0){const i=t?.renderBefore??null;n._$litPart$=r=new re(e.insertBefore(fe(),i),i,void 0,t??{})}return r._$AI(s),r};const Ze=globalThis;let ce=class extends se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=js(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}};ce._$litElement$=!0,ce.finalized=!0,Ze.litElementHydrateSupport?.({LitElement:ce});const Is=Ze.litElementPolyfillSupport;Is?.({LitElement:ce});(Ze.litElementVersions??=[]).push("4.2.2");const En=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};const Ns={attribute:!0,type:String,converter:be,reflect:!1,hasChanged:Ve},Hs=(s=Ns,e,t)=>{const{kind:n,metadata:r}=t;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),n==="setter"&&((s=Object.create(s)).wrapped=!0),i.set(t.name,s),n==="accessor"){const{name:l}=t;return{set(u){const f=e.get.call(this);e.set.call(this,u),this.requestUpdate(l,f,s,!0,u)},init(u){return u!==void 0&&this.C(l,void 0,s,u),u}}}if(n==="setter"){const{name:l}=t;return function(u){const f=this[l];e.call(this,u),this.requestUpdate(l,f,s,!0,u)}}throw Error("Unsupported decorator location: "+n)};function F(s){return(e,t)=>typeof t=="object"?Hs(s,e,t):((n,r,i)=>{const l=r.hasOwnProperty(i);return r.constructor.createProperty(i,n),l?Object.getOwnPropertyDescriptor(r,i):void 0})(s,e,t)}function Ls(s){return F({...s,state:!0,attribute:!1})}var Ws=Object.defineProperty,zs=Object.getOwnPropertyDescriptor,Dt=s=>{throw TypeError(s)},g=(s,e,t,n)=>{for(var r=n>1?void 0:n?zs(e,t):e,i=s.length-1,l;i>=0;i--)(l=s[i])&&(r=(n?l(e,t,r):l(r))||r);return n&&r&&Ws(e,t,r),r},Je=(s,e,t)=>e.has(s)||Dt("Cannot "+t),y=(s,e,t)=>(Je(s,e,"read from private field"),t?t.call(s):e.get(s)),T=(s,e,t)=>e.has(s)?Dt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),q=(s,e,t,n)=>(Je(s,e,"write to private field"),e.set(s,t),t),z=(s,e,t)=>(Je(s,e,"access private method"),t);const D="-12162f";class Xe{static get instance(){return globalThis.__gdsElementLookupTable?.[D]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[D]:new Map}),globalThis.__gdsElementLookupTable[D]}}const Rt=(s,e)=>function(t){var n;return n=class extends t{constructor(){super(...arguments),this.gdsElementName=s}static define(){if(n.isDefined)return;const i=globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?s:s+D;customElements.get(i)||(n.isDefined=!0,Xe.instance.set(s,i),customElements.define(i,n),e?.dependsOn&&e.dependsOn.forEach(l=>l.define()))}},n.isDefined=!1,n},bt=new WeakMap;function Vs(s,...e){let t=bt.get(s);return t||(t=$t(s),t.raw=$t(s.raw),bt.set(s,t)),[t,...e]}const $t=s=>s.map(e=>{for(const[t,n]of Xe.instance.entries())e=e.replace(new RegExp(`${t}(?![-a-z])`,"mg"),n);return e});function qs(s){return(e,...t)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return s(e,...t);const[n,...r]=Vs(e,...t);return s(n,...r)}}const Fs=qs(Pt);function xn(s,e=!1){return Xe.instance.get(s)??s+(e?D:"")}const Zs={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Js=s=>(...e)=>({_$litDirective$:s,values:e});class Xs{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class Ne extends Xs{constructor(e){if(super(e),this.it=A,e.type!==Zs.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===A||e==null)return this._t=void 0,this.it=e;if(e===K)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Ne.directiveName="unsafeHTML",Ne.resultType=1;const Ys=Js(Ne);var R,we,N,Ee,Y,U,I,xe,W,Ut,ae,Gt;class Qs{constructor(e){T(this,W),T(this,R,!Ye()),T(this,we,!1),T(this,N,[]),T(this,Ee,[]),T(this,Y,new Map),T(this,U,new Map),T(this,I,[]),T(this,xe,[]),this.host=e,this.host.addController(this)}hostConnected(){z(this,W,Gt).call(this)}has(e){return y(this,R)?y(this,U).has(e):y(this,Y).has(e)}inject(e,t){z(this,W,Ut).call(this,e,t),z(this,W,ae).call(this)}clear(e){y(this,R)?this.host.updateComplete.then(()=>{y(this,U).get(e)?.remove(),y(this,U).delete(e)}):y(this,Y).delete(e),z(this,W,ae).call(this)}clearAll(){y(this,R)?this.host.updateComplete.then(()=>{y(this,U).forEach(e=>e.remove()),y(this,I).forEach(e=>e.remove()),y(this,U).clear(),q(this,I,[])}):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],y(this,Y).clear(),q(this,N,[]))}clearInitial(){y(this,R)?this.host.updateComplete.then(()=>{y(this,I).forEach(e=>e.remove()),q(this,I,[])}):q(this,N,[]),z(this,W,ae).call(this)}restoreInitial(){y(this,R)?y(this,xe).forEach(e=>{y(this,I).push(e.cloneNode(!0))}):q(this,N,[...y(this,Ee)]),z(this,W,ae).call(this)}}R=new WeakMap;we=new WeakMap;N=new WeakMap;Ee=new WeakMap;Y=new WeakMap;U=new WeakMap;I=new WeakMap;xe=new WeakMap;W=new WeakSet;Ut=function(s,e){if(y(this,R)){let t=y(this,U).get(s);t||(t=document.createElement("style"),y(this,U).set(s,t)),t.textContent=e.cssText}else{if(!this.host.shadowRoot||!e.styleSheet)return;y(this,Y).set(s,e.styleSheet)}};ae=function(){if(y(this,R))this.host.updateComplete.then(()=>{this.host.shadowRoot&&(this.host.shadowRoot.querySelectorAll("style").forEach(s=>{s.remove()}),y(this,I).forEach(s=>{this.host.shadowRoot?.appendChild(s)}),y(this,U).forEach(s=>{this.host.shadowRoot?.appendChild(s)}))});else{if(!this.host.shadowRoot)return;this.host.shadowRoot.adoptedStyleSheets=[...y(this,N),...Array.from(y(this,Y).values())]}};Gt=function(){y(this,we)||(y(this,R)?this.host.updateComplete.then(()=>{this.host.shadowRoot&&this.host.shadowRoot.querySelectorAll("style").forEach(s=>{y(this,I).push(s),y(this,xe).push(s.cloneNode(!0))})}):this.host.shadowRoot&&y(this,N).length===0&&(q(this,N,[...this.host.shadowRoot.adoptedStyleSheets||[]]),q(this,Ee,[...y(this,N)])),q(this,we,!0))};function Ye(){try{return new CSSStyleSheet,!0}catch{return!1}}function wt(s){return s&&(s.includes("-")?s.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""):s.charAt(0).toUpperCase()+s.slice(1))}var Et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xt={};var At;function Ks(){if(At)return xt;At=1;var s;return(function(e){(function(t){var n=typeof Et=="object"?Et:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),r=i(e);typeof n.Reflect>"u"?n.Reflect=e:r=i(n.Reflect,r),t(r);function i(l,u){return function(f,b){typeof l[f]!="function"&&Object.defineProperty(l,f,{configurable:!0,writable:!0,value:b}),u&&u(f,b)}}})(function(t){var n=Object.prototype.hasOwnProperty,r=typeof Symbol=="function",i=r&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",l=r&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",u=typeof Object.create=="function",f={__proto__:[]}instanceof Array,b=!u&&!f,S={create:u?function(){return Re(Object.create(null))}:f?function(){return Re({__proto__:null})}:function(){return Re({})},has:b?function(o,a){return n.call(o,a)}:function(o,a){return a in o},get:b?function(o,a){return n.call(o,a)?o[a]:void 0}:function(o,a){return o[a]}},v=Object.getPrototypeOf(Function),x=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",B=!x&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:gs(),G=!x&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:Ss(),Ft=!x&&typeof WeakMap=="function"?WeakMap:ms(),ye=new Ft;function Zt(o,a,c,d){if(C(c)){if(!it(o))throw new TypeError;if(!at(a))throw new TypeError;return rs(o,a)}else{if(!it(o))throw new TypeError;if(!k(a))throw new TypeError;if(!k(d)&&!C(d)&&!te(d))throw new TypeError;return te(d)&&(d=void 0),c=j(c),os(o,a,c,d)}}t("decorate",Zt);function Jt(o,a){function c(d,h){if(!k(d))throw new TypeError;if(!C(h)&&!fs(h))throw new TypeError;st(o,a,d,h)}return c}t("metadata",Jt);function Xt(o,a,c,d){if(!k(c))throw new TypeError;return C(d)||(d=j(d)),st(o,a,c,d)}t("defineMetadata",Xt);function Yt(o,a,c){if(!k(a))throw new TypeError;return C(c)||(c=j(c)),Ke(o,a,c)}t("hasMetadata",Yt);function Qt(o,a,c){if(!k(a))throw new TypeError;return C(c)||(c=j(c)),Oe(o,a,c)}t("hasOwnMetadata",Qt);function Kt(o,a,c){if(!k(a))throw new TypeError;return C(c)||(c=j(c)),et(o,a,c)}t("getMetadata",Kt);function es(o,a,c){if(!k(a))throw new TypeError;return C(c)||(c=j(c)),tt(o,a,c)}t("getOwnMetadata",es);function ts(o,a){if(!k(o))throw new TypeError;return C(a)||(a=j(a)),nt(o,a)}t("getMetadataKeys",ts);function ss(o,a){if(!k(o))throw new TypeError;return C(a)||(a=j(a)),rt(o,a)}t("getOwnMetadataKeys",ss);function ns(o,a,c){if(!k(a))throw new TypeError;C(c)||(c=j(c));var d=oe(a,c,!1);if(C(d)||!d.delete(o))return!1;if(d.size>0)return!0;var h=ye.get(a);return h.delete(c),h.size>0||ye.delete(a),!0}t("deleteMetadata",ns);function rs(o,a){for(var c=o.length-1;c>=0;--c){var d=o[c],h=d(a);if(!C(h)&&!te(h)){if(!at(h))throw new TypeError;a=h}}return a}function os(o,a,c,d){for(var h=o.length-1;h>=0;--h){var P=o[h],m=P(a,c,d);if(!C(m)&&!te(m)){if(!k(m))throw new TypeError;d=m}}return d}function oe(o,a,c){var d=ye.get(o);if(C(d)){if(!c)return;d=new B,ye.set(o,d)}var h=d.get(a);if(C(h)){if(!c)return;h=new B,d.set(a,h)}return h}function Ke(o,a,c){var d=Oe(o,a,c);if(d)return!0;var h=De(a);return te(h)?!1:Ke(o,h,c)}function Oe(o,a,c){var d=oe(a,c,!1);return C(d)?!1:cs(d.has(o))}function et(o,a,c){var d=Oe(o,a,c);if(d)return tt(o,a,c);var h=De(a);if(!te(h))return et(o,h,c)}function tt(o,a,c){var d=oe(a,c,!1);if(!C(d))return d.get(o)}function st(o,a,c,d){var h=oe(c,d,!0);h.set(o,a)}function nt(o,a){var c=rt(o,a),d=De(o);if(d===null)return c;var h=nt(d,a);if(h.length<=0)return c;if(c.length<=0)return h;for(var P=new G,m=[],_=0,p=c;_<p.length;_++){var $=p[_],w=P.has($);w||(P.add($),m.push($))}for(var L=0,ct=h;L<ct.length;L++){var $=ct[L],w=P.has($);w||(P.add($),m.push($))}return m}function rt(o,a){var c=[],d=oe(o,a,!1);if(C(d))return c;for(var h=d.keys(),P=hs(h),m=0;;){var _=ps(P);if(!_)return c.length=m,c;var p=us(_);try{c[m]=p}catch($){try{ys(P)}finally{throw $}}m++}}function ot(o){if(o===null)return 1;switch(typeof o){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return o===null?1:6;default:return 6}}function C(o){return o===void 0}function te(o){return o===null}function is(o){return typeof o=="symbol"}function k(o){return typeof o=="object"?o!==null:typeof o=="function"}function as(o,a){switch(ot(o)){case 0:return o;case 1:return o;case 2:return o;case 3:return o;case 4:return o;case 5:return o}var c="string",d=lt(o,i);if(d!==void 0){var h=d.call(o,c);if(k(h))throw new TypeError;return h}return ls(o)}function ls(o,a){var c,d;{var h=o.toString;if(ge(h)){var d=h.call(o);if(!k(d))return d}var c=o.valueOf;if(ge(c)){var d=c.call(o);if(!k(d))return d}}throw new TypeError}function cs(o){return!!o}function ds(o){return""+o}function j(o){var a=as(o);return is(a)?a:ds(a)}function it(o){return Array.isArray?Array.isArray(o):o instanceof Object?o instanceof Array:Object.prototype.toString.call(o)==="[object Array]"}function ge(o){return typeof o=="function"}function at(o){return typeof o=="function"}function fs(o){switch(ot(o)){case 3:return!0;case 4:return!0;default:return!1}}function lt(o,a){var c=o[a];if(c!=null){if(!ge(c))throw new TypeError;return c}}function hs(o){var a=lt(o,l);if(!ge(a))throw new TypeError;var c=a.call(o);if(!k(c))throw new TypeError;return c}function us(o){return o.value}function ps(o){var a=o.next();return a.done?!1:a}function ys(o){var a=o.return;a&&a.call(o)}function De(o){var a=Object.getPrototypeOf(o);if(typeof o!="function"||o===v||a!==v)return a;var c=o.prototype,d=c&&Object.getPrototypeOf(c);if(d==null||d===Object.prototype)return a;var h=d.constructor;return typeof h!="function"||h===o?a:h}function gs(){var o={},a=[],c=(function(){function m(_,p,$){this._index=0,this._keys=_,this._values=p,this._selector=$}return m.prototype["@@iterator"]=function(){return this},m.prototype[l]=function(){return this},m.prototype.next=function(){var _=this._index;if(_>=0&&_<this._keys.length){var p=this._selector(this._keys[_],this._values[_]);return _+1>=this._keys.length?(this._index=-1,this._keys=a,this._values=a):this._index++,{value:p,done:!1}}return{value:void 0,done:!0}},m.prototype.throw=function(_){throw this._index>=0&&(this._index=-1,this._keys=a,this._values=a),_},m.prototype.return=function(_){return this._index>=0&&(this._index=-1,this._keys=a,this._values=a),{value:_,done:!0}},m})();return(function(){function m(){this._keys=[],this._values=[],this._cacheKey=o,this._cacheIndex=-2}return Object.defineProperty(m.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),m.prototype.has=function(_){return this._find(_,!1)>=0},m.prototype.get=function(_){var p=this._find(_,!1);return p>=0?this._values[p]:void 0},m.prototype.set=function(_,p){var $=this._find(_,!0);return this._values[$]=p,this},m.prototype.delete=function(_){var p=this._find(_,!1);if(p>=0){for(var $=this._keys.length,w=p+1;w<$;w++)this._keys[w-1]=this._keys[w],this._values[w-1]=this._values[w];return this._keys.length--,this._values.length--,_===this._cacheKey&&(this._cacheKey=o,this._cacheIndex=-2),!0}return!1},m.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=o,this._cacheIndex=-2},m.prototype.keys=function(){return new c(this._keys,this._values,d)},m.prototype.values=function(){return new c(this._keys,this._values,h)},m.prototype.entries=function(){return new c(this._keys,this._values,P)},m.prototype["@@iterator"]=function(){return this.entries()},m.prototype[l]=function(){return this.entries()},m.prototype._find=function(_,p){return this._cacheKey!==_&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=_)),this._cacheIndex<0&&p&&(this._cacheIndex=this._keys.length,this._keys.push(_),this._values.push(void 0)),this._cacheIndex},m})();function d(m,_){return m}function h(m,_){return _}function P(m,_){return[m,_]}}function Ss(){return(function(){function o(){this._map=new B}return Object.defineProperty(o.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),o.prototype.has=function(a){return this._map.has(a)},o.prototype.add=function(a){return this._map.set(a,a),this},o.prototype.delete=function(a){return this._map.delete(a)},o.prototype.clear=function(){this._map.clear()},o.prototype.keys=function(){return this._map.keys()},o.prototype.values=function(){return this._map.values()},o.prototype.entries=function(){return this._map.entries()},o.prototype["@@iterator"]=function(){return this.keys()},o.prototype[l]=function(){return this.keys()},o})()}function ms(){var o=16,a=S.create(),c=d();return(function(){function p(){this._key=d()}return p.prototype.has=function($){var w=h($,!1);return w!==void 0?S.has(w,this._key):!1},p.prototype.get=function($){var w=h($,!1);return w!==void 0?S.get(w,this._key):void 0},p.prototype.set=function($,w){var L=h($,!0);return L[this._key]=w,this},p.prototype.delete=function($){var w=h($,!1);return w!==void 0?delete w[this._key]:!1},p.prototype.clear=function(){this._key=d()},p})();function d(){var p;do p="@@WeakMap@@"+_();while(S.has(a,p));return a[p]=!0,p}function h(p,$){if(!n.call(p,c)){if(!$)return;Object.defineProperty(p,c,{value:S.create()})}return p[c]}function P(p,$){for(var w=0;w<$;++w)p[w]=Math.random()*255|0;return p}function m(p){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(p)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(p)):P(new Uint8Array(p),p):P(new Array(p),p)}function _(){var p=m(o);p[6]=p[6]&79|64,p[8]=p[8]&191|128;for(var $="",w=0;w<o;++w){var L=p[w];(w===4||w===6||w===8)&&($+="-"),L<16&&($+="0"),$+=L.toString(16).toLowerCase()}return $}}function Re(o){return o.__=void 0,delete o.__,o}})})(s||(s={})),xt}Ks();class pe extends ce{constructor(){super(),this.semanticVersion="2.26.1",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new Qs(this)}static define(){}connectedCallback(){super.connectedCallback(),this.setAttribute("gds-element",this.gdsElementName?.toString()||"")}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("gds-element-disconnected",{bubbles:!0,composed:!1}))}dispatchStandardEvent(e,t){const n={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new Event(e,n)),this.dispatchEvent(new Event(wt(e),n))].every(r=>r!==!1)}dispatchCustomEvent(e,t={}){const n={bubbles:!0,composed:!1,cancelable:!0,...t};return[this.dispatchEvent(new CustomEvent(e,n)),this.dispatchEvent(new CustomEvent(wt(e),n))].every(r=>r!==!1)}}pe.isDefined=!1;pe.styleExpressionBaseSelector=":host";g([Ls()],pe.prototype,"_isUsingTransitionalStyles",2);const jt=`/**
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
  --gds-sys-radius-max: 999px;`,de=`/**
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
  --gds-sys-color-state-warning-06: #f19e38 20%;`,Ae=`/**
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
  --gds-sys-shadow-2xl-02: 0px 0px 0px 0px transparent;`;var en={};const Pe=typeof process<"u"&&en!==void 0,An=/iPad|iPhone|iPod/.test(Pe?"":navigator.userAgent);var He,Ce,Te,Qe,me,Nt,Ht;function tn(){return Pe?[]:document.adoptedStyleSheets||[]}const sn=class Lt{constructor(){T(this,me),T(this,He,!Ye()),T(this,Ce,new Map),T(this,Te,new Map),T(this,Qe,tn())}static get instance(){return globalThis.__gdsGlobalStylesRegistryScoped?.[D]||(globalThis.__gdsGlobalStylesRegistryScoped={...globalThis.__gdsGlobalStylesRegistryScoped,[D]:new Lt}),globalThis.__gdsGlobalStylesRegistryScoped[D]}injectGlobalStyles(e,t){if(y(this,He)){const n=Array.isArray(t)?t.map(r=>r.toString()).join(""):t.toString();z(this,me,Nt).call(this,e,n)}else t.styleSheet&&z(this,me,Ht).call(this,e,t.styleSheet)}};He=new WeakMap;Ce=new WeakMap;Te=new WeakMap;Qe=new WeakMap;me=new WeakSet;Nt=function(s,e){if(Pe)return;let t=y(this,Te).get(s);t||(t=document.createElement("style"),y(this,Te).set(s,t)),t.textContent=e,document.head.appendChild(t)};Ht=function(s,e){Pe||(y(this,Ce).set(s,e),document.adoptedStyleSheets=[...y(this,Qe),...Array.from(y(this,Ce).values())])};let nn=sn;const Wt=[ke`
    :host {
      ${M(jt)}
      ${M(It)}
    }
  `];nn.instance.injectGlobalStyles("root-tokens",ke`
    :root {
      ${M(jt)}
      ${M(It)}
    }
    :root:not([gds-theme]),
    :root[gds-theme='light'] {
      ${M(Ae)}
    }
    :root[gds-theme='dark'] {
      ${M(de)}
    }
    :root[gds-theme='auto'] {
      @media (prefers-color-scheme: dark) {
        ${M(de)}
      }
      @media (prefers-color-scheme: light) {
        ${M(Ae)}
      }
    }
  `);const rn={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},on=/^([<|>]=?)?([0-9a-z]+)/,zt=["{","}",";",":",","],Ct=[" ","/n"];function an(s=""){const e=[];let t="";for(let n=0;n<s.length;n++){const r=s[n];if(Ct.includes(r)||(t+=r),zt.includes(r)){e.push(t.slice(0,-1)),e.push(r),t="";continue}if(Ct.includes(r)||n===s.length-1){e.push(t),t="";continue}}return e.filter(n=>n!=="")}function ln(s){const e=[];let t={breakpoint:"-",values:[]};const n=()=>({sel:"",values:[]});let r=n();for(const i of s){if(!zt.includes(i)){r.values.push(i);continue}if(i==="{"&&(t={breakpoint:r.values.join(","),values:[]},r=n()),i===";"&&(e.length===0&&e.push(t),r.values.length>0&&(t.values.push(r),r=n())),i===":"){const l=r.values.pop()??"";r.sel=l}t&&i==="}"&&(t.values.push(r),r=n(),e.push(t))}return r.values.length>0&&t.values.push(r),e.length===0&&e.push(t),e}function cn(s){return s.split(",").map(t=>{const n=t.trim().match(on);if(!n)throw new Error(`Invalid breakpoint specifier: ${t}`);return{condition:n[1],value:n[2]}})}function dn(s,e,t,n=i=>i,r=(i,l)=>`${i}: ${l.join(" ")};`){let i="";for(const l of t){const b=`@media ${(l.breakpoint==="-"?[{condition:">=",value:"0"}]:cn(l.breakpoint)).map(S=>`(${S.condition?.includes("<")?"max-width":"min-width"}: ${rn[S.value]??S.value})`).join(" and ")} {${l.values.map(S=>{let v=s;S.sel.length>0&&(v=s===":host"?`:host(:${S.sel})`:`${s}:${S.sel}`);const x=r(e,S.values.map(n));return S.sel==="hover"?`@media (hover: hover) {${v}{${x}}}`:`${v}{${x}}`}).join("")}}`;i+=b}return i}const Ge=new Map;function E(s){return(e,t)=>{const n=s?.property??String(t),r=s?.valueTemplate,i=s?.styleTemplate,l=s?.cacheOverrideKey??"0",u=s?.attribute??String(t);F({attribute:u,reflect:s?.reflect,noAccessor:!0})(e,t),Object.defineProperty(e,t,{get:function(){return this["__"+String(t)]},set:async function(f){f=f?.toString().trim()??"",this["__"+String(t)]=f,s?.reflect&&(f?this.setAttribute(u,String(f)):this.removeAttribute(u)),await this.updateComplete;const b=s?.selector??this.constructor.styleExpressionBaseSelector,S=this.level??"0",v=b+n+f+S+l;if(Ge.has(v)){this._dynamicStylesController.inject(`sep_${String(t)}`,Ge.get(v));return}const x=ln(an(f)),B=dn(b,n,x,r?.bind(this),i?.bind(this)),G=M(B);Ge.set(v,G),this._dynamicStylesController.inject(`sep_${String(t)}`,G)}})}}function fn(s,e,t){if(s==="transparent"||s==="currentColor"||s==="inherit")return s;const[n,r]=s.split("/");let i;return t&&e==="background"?i=`var(--gds-sys-color-l${t}-${n})`:i=`var(--gds-sys-color-${e}-${n})`,r?`color-mix(in srgb, ${i} ${parseFloat(r)*100}%, transparent 0%)`:i}function hn(s){return{valueTemplate:function(e){return fn(e,s,this.level)}}}const je={valueTemplate:s=>`var(--gds-sys-space-${s}, 0)`},Cn={valueTemplate:s=>`var(--gds-sys-radius-${s}, 0)`},O={valueTemplate:s=>`var(--gds-sys-space-${un(s)}, ${s})`},Ie={valueTemplate:s=>{const t=(s.startsWith("-")?"neg":"pos")=="pos"?`var(--gds-sys-space-${s})`:`calc(var(--gds-sys-space-${s.substring(1)}) * -1)`;return s==="auto"?"auto":t},styleTemplate:(s,e)=>{const t=u=>u==="auto"?"auto":`${u}`,n=t(e[0]),r=e.length>1?t(e[1]):n,i=e.length>2?t(e[2]):n,l=e.length>3?t(e[3]):r;return`${s}: ${n} ${r} ${i} ${l};`}};function un(s){return s.replace(/[^a-zA-Z0-9-]/g,"")}function Tn(s){class e extends s{}return g([E(O)],e.prototype,"width",2),g([E(O)],e.prototype,"min-width",2),g([E(O)],e.prototype,"max-width",2),g([E(O)],e.prototype,"inline-size",2),g([E(O)],e.prototype,"min-inline-size",2),g([E(O)],e.prototype,"max-inline-size",2),e}function kn(s){class e extends s{}return g([E(O)],e.prototype,"height",2),g([E(O)],e.prototype,"min-height",2),g([E(O)],e.prototype,"max-height",2),g([E(O)],e.prototype,"block-size",2),g([E(O)],e.prototype,"min-block-size",2),g([E(O)],e.prototype,"max-block-size",2),e}function pn(s){class e extends s{}return g([E(Ie)],e.prototype,"margin",2),g([E(Ie)],e.prototype,"margin-inline",2),g([E(Ie)],e.prototype,"margin-block",2),e}function Mn(s){class e extends s{}return g([E(je)],e.prototype,"padding",2),g([E(je)],e.prototype,"padding-inline",2),g([E(je)],e.prototype,"padding-block",2),e}function yn(s){class e extends s{}return g([E()],e.prototype,"align-self",2),g([E()],e.prototype,"justify-self",2),g([E()],e.prototype,"place-self",2),g([E()],e.prototype,"grid-column",2),g([E()],e.prototype,"grid-row",2),g([E()],e.prototype,"grid-area",2),g([E()],e.prototype,"flex",2),g([E()],e.prototype,"order",2),e}function Bn(s){class e extends s{}return g([E()],e.prototype,"position",2),g([E()],e.prototype,"transform",2),g([E()],e.prototype,"inset",2),e}const gn=ke`
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
`;var Sn=gn;class Z extends pn(yn(pe)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const t={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...t,"aria-label":this.label}:{...t,role:"presentation"}}get svgContent(){const e=this.constructor;return this.solid?e._solidSVG:e._regularSVG}applyStroke(e){return this.stroke?e.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):e}generateAttributesString(e){return Object.entries(e).filter(([t,n])=>n!==void 0).map(([t,n])=>`${t}="${n}"`).join(`
      `)}render(){const e=this.svgAttributes;let t=this.svgContent||"";this.stroke&&(t=this.applyStroke(t));const n=`
      <svg ${this.generateAttributesString(e)}>
        ${t}
      </svg>
    `;return Pt`${Ys(n)}`}}Z.styles=[Wt,Sn];g([E({...O,property:"height",selector:"svg"})],Z.prototype,"size",2);g([F({type:Boolean})],Z.prototype,"solid",2);g([F({type:Number})],Z.prototype,"stroke",2);g([F()],Z.prototype,"level",2);g([E(hn("content"))],Z.prototype,"color",2);g([F({type:String})],Z.prototype,"label",2);var ve,_e,Le;const mn=class Vt{constructor(){T(this,ve,new Map),T(this,_e,new Map),T(this,Le,!Ye())}static get instance(){return globalThis.__gdsTransitionalStyles?.[D]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[D]:new Vt}),globalThis.__gdsTransitionalStyles[D]}apply(e,t){if(!e.shadowRoot)return;const n=y(this,ve).get(t);n&&(y(this,_e).set(t,e),this.applyToElement(t,n))}applyToElement(e,t){const n=y(this,_e).get(e);if(!n||!n.shadowRoot)return;const r=()=>{n._dynamicStylesController.clearInitial(),n._dynamicStylesController.inject("t-styles",M(t)),n._isUsingTransitionalStyles=!0},i=()=>{n._isUsingTransitionalStyles=!1,n._dynamicStylesController.clear("t-styles"),n._dynamicStylesController.restoreInitial()},l="[gds-element=gds-theme]";let u=n.getRootNode(),f=n.closest(l);for(;f===null&&u!==document;)f=u.host?.closest(l),u=u.host?.getRootNode();if(f){const b=f,S=()=>{b.designVersion==="2023"?i():r()};if(b.addEventListener("gds-design-version-changed",S),n.addEventListener("gds-element-disconnected",()=>b.removeEventListener("gds-design-version-changed",S)),b.designVersion==="2023"){i();return}}r()}register(e,t){let n=t;y(this,Le)&&(n=`@layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${t}`),y(this,ve).set(e,n),this.applyToElement(e,n)}};ve=new WeakMap;_e=new WeakMap;Le=new WeakMap;let vn=mn;function qt(s,e){const t={waitUntilFirstUpdate:!1,...e};return(n,r,i)=>{const{update:l}=n,u=Array.isArray(s)?s:[s];n.update=function(f){u.forEach(b=>{const S=b;if(f.has(S)){const v=f.get(S),x=this[S];v!==x&&(!t.waitUntilFirstUpdate||this.hasUpdated)&&i.value?.call(this,v,x)}}),l.call(this,f)}}}let H=class extends Z{};H._regularSVG='<path d="M6.75 12H17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';H._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 11.5858 6.33579 11.25 6.75 11.25H17.25C17.6642 11.25 18 11.5858 18 12C18 12.4142 17.6642 12.75 17.25 12.75H6.75C6.33579 12.75 6 12.4142 6 12Z" fill="currentColor"/>';H._name="minus-small";H._width=24;H._height=24;H._viewBox="0 0 24 24";H=g([Rt("gds-icon-minus-small")],H);let ee=class extends pe{constructor(){super(...arguments),this.colorScheme="light",this.designVersion="2023"}connectedCallback(){super.connectedCallback(),vn.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",M(`:host {${de}}`))}render(){return Fs`<slot></slot>`}_onColorSchemeChange(){switch(this.colorScheme){case"dark":this._dynamicStylesController.inject("color-scheme",M(`:host { ${de}}`));break;case"light":default:this._dynamicStylesController.inject("color-scheme",M(`:host { ${Ae}}`));break;case"auto":this._dynamicStylesController.inject("color-scheme",M(`:host { ${Ae}} @media (prefers-color-scheme: dark) { :host { ${de} } }`));break}this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}_onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}};ee.styles=[Wt,ke`
      :host {
        display: contents;
        color: var(--gds-sys-color-content-neutral-01);
        font-family: var(--gds-sys-text-family);
      }
    `];g([F({reflect:!0,attribute:"color-scheme"})],ee.prototype,"colorScheme",2);g([F({reflect:!0,attribute:"design-version"})],ee.prototype,"designVersion",2);g([qt("colorScheme")],ee.prototype,"_onColorSchemeChange",1);g([qt("designVersion")],ee.prototype,"_onDesignVersionChange",1);ee=g([Rt("gds-theme")],ee);H.define();export{A,Bn as B,hn as C,fn as D,K as E,je as F,ee as G,Cn as H,xn as I,Ls as J,M as K,H as L,Ys as M,nn as N,An as O,O as P,vn as T,g as _,Z as a,ke as b,Xs as c,Zs as d,Js as e,Pe as f,Rt as g,Fs as h,ce as i,T as j,z as k,y as l,q as m,pe as n,Wt as o,F as p,Pt as q,$n as r,Tn as s,En as t,pn as u,yn as v,qt as w,E as x,kn as y,Mn as z};
