var O=Object.defineProperty;var w=(n,e,t)=>e in n?O(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var p=(n,e,t)=>(w(n,typeof e!="symbol"?e+"":e,t),t);var u=class{constructor(e,t){this.strings=e,this.keys=t,this.templateId="web-cmp-"+ ++u.templateId,this.template=null,this.dom=null,this.fnId=0,this.functions={}}get content(){return(this.template??this.build()).content}build(){let e=this,t=e.strings.map((i,c)=>{let s=e.keys[c];if(!s)return i;if(typeof s!="function")return[i,s];let l=this.getFnId();this.functions[l]=s;let o=s.call(e.context,e.context),a=o instanceof u?o.innerHTML:o;return[i,"<!--",l,"-->",a,"<!--\\",l,"-->"]}).flat().filter(Boolean).join(""),r=u.create(t);return this.template=r,r}getFnId(){return this.templateId+"-"+ ++this.fnId}get innerHTML(){let e=document.createElement("div");return e.appendChild(this.content.cloneNode(!0)),e.innerHTML}refresh(e=null,t){t=t??this.dom;let r=document.createTreeWalker(t,NodeFilter.SHOW_COMMENT);for(var i;i=r.nextNode();){let s=r.currentNode.textContent;if(!s)continue;let l=this.functions[s];if(!l)continue;let o=l.call(e,e),a=o instanceof u?o.content:o instanceof HTMLElement?o:u.create(o).content;if(!a)continue;let h="\\"+s;for(var c;(c=i.nextSibling)&&!(c.nodeType===8&&c.textContent===h);)c.remove();!i||i.parentNode.insertBefore(a,i.nextSibling)}}},d=u;p(d,"templateId",0),p(d,"create",e=>{let t=document.createElement("template");return t.innerHTML=e,t});var C=(n,...e)=>new d(n,e);var E=(n,{formAssociated:e=!0,elements:t={},connectedCallback:r=()=>{},attributes:i={},attributeChangedCallback:c=()=>{},properties:s={},...l}={})=>{let o=class extends HTMLElement{static formAssociated=e;constructor(){super(),this.template=n,this.internals=this.attachInternals();let h=this.attachShadow({mode:"open"});h.appendChild(n.content.cloneNode(!0)),j(this,h,t)}static get observedAttributes(){return Object.keys(i)}attributeChangedCallback(h,m,g){let f=i[h];f&&typeof f=="function"&&f.call(this,g,m),c.call(this,h,m,g)}refresh(){this.template.refresh(this,this.shadowRoot)}connectedCallback(){setTimeout(()=>{this.refresh(),r.call(this)})}},a=o.prototype;return b(a,s),b(a,l),o},j=(n,e,t)=>{Object.entries(t).reduce((r,[i,c])=>{let s=i==="."||i==="this"?[e]:e.querySelectorAll(i);return!s.length===0||s.forEach(l=>{let o=typeof c=="function"?c.call(n,l):{...c};r.set(l,Object.assign(r.get(l)||{},o))}),r},new Map).forEach((r,i)=>{let c=r.id||i.id;if(delete r.id,c&&i!==e){if(n[c])return;n[c]=i}Object.entries(r).forEach(([s,l])=>{let o=typeof l=="function";if(s[0]=="$"&&o){i.addEventListener(s.slice(1),l.bind(n));return}i[s]=o?l.bind(n):l})})},b=(n,e)=>{Object.getOwnPropertyNames(e).forEach(t=>{let r=Object.getOwnPropertyDescriptor(e,t);r.hasOwnProperty("value")?n[t]=r.value:("get"in r||"set"in r)&&Object.defineProperty(n,t,{get:r.get,set:r.set})})};var T=n=>{let{cssRules:e}=Array.from(document.styleSheets).filter(t=>t.href?.indexOf(n)>=0)[0]||{};return e?Object.values(e).map(t=>t.cssText).join(`
`):""};var x={toggleClass:(n,e)=>{let t=n.classList;t[t.contains(e)?"remove":"add"](e)}},I=Object.entries(x).reduce((n,[e,t])=>(n[e]=function(){let r=this.el;if(!r)throw new Error("element undefined");return t.apply(this,[r].concat(Array.from(arguments)))??this},n),{}),y=n=>Object.assign({...I},{el:n});Object.assign(y,x);export{y as El,d as Template,T as getCssText,C as template,E as webCmp};
//# sourceMappingURL=web-cmp.js.map
