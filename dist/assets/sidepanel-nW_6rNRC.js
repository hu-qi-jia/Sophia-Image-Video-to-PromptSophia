import{_ as e,a as t,b as n,c as r,d as i,f as a,g as o,h as s,i as c,l,n as u,o as d,p as f,r as p,s as m,t as h,u as g,v as _,y as v}from"./shared-DNV6Jc-z.js";var y=`-ms-`,b=`-moz-`,x=`-webkit-`,S=`comm`,C=`rule`,w=`decl`,T=`@import`,ee=`@namespace`,E=`@keyframes`,te=`@layer`,D=Math.abs,O=String.fromCharCode,k=Object.assign;function ne(e,t){return N(e,0)^45?(((t<<2^N(e,0))<<2^N(e,1))<<2^N(e,2))<<2^N(e,3):0}function re(e){return e.trim()}function A(e,t){return(e=t.exec(e))?e[0]:e}function j(e,t,n){return e.replace(t,n)}function M(e,t,n){return e.indexOf(t,n)}function N(e,t){return e.charCodeAt(t)|0}function P(e,t,n){return e.slice(t,n)}function F(e){return e.length}function ie(e){return e.length}function I(e,t){return t.push(e),e}function ae(e,t){return e.map(t).join(``)}function oe(e,t){return e.filter(function(e){return!A(e,t)})}var se=1,L=1,R=0,z=0,B=0,V=``;function H(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:se,column:L,length:o,return:``,siblings:s}}function U(e,t){return k(H(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function W(e){for(;e.root;)e=U(e.root,{children:[e]});I(e,e.siblings)}function G(){return B}function ce(){return B=z>0?N(V,--z):0,L--,B===10&&(L=1,se--),B}function K(){return B=z<R?N(V,z++):0,L++,B===10&&(L=1,se++),B}function q(){return N(V,z)}function le(){return z}function ue(e,t){return P(V,e,t)}function de(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fe(e){return se=L=1,R=F(V=e),z=0,[]}function pe(e){return V=``,e}function J(e){return re(ue(z-1,Y(e===91?e+2:e===40?e+1:e)))}function me(e){for(;(B=q())&&B<33;)K();return de(e)>2||de(B)>3?``:` `}function he(e,t){for(;--t&&K()&&!(B<48||B>102||B>57&&B<65||B>70&&B<97););return ue(e,le()+(t<6&&q()==32&&K()==32))}function Y(e){for(;K();)switch(B){case e:return z;case 34:case 39:e!==34&&e!==39&&Y(B);break;case 40:e===41&&Y(e);break;case 92:K();break}return z}function ge(e,t){for(;K()&&e+B!==57&&!(e+B===84&&q()===47););return`/*`+ue(t,z-1)+`*`+O(e===47?e:K())}function _e(e){for(;!de(q());)K();return ue(e,z)}function ve(e){return pe(ye(``,null,null,null,[``],e=fe(e),0,[0],e))}function ye(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=K()){case 40:if(m!=108&&N(C,d-1)==58){M(C+=j(J(v),`&`,`&\f`),`&\f`,D(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=J(v);break;case 9:case 10:case 13:case 32:C+=me(m);break;case 92:C+=he(le()-1,7);continue;case 47:switch(q()){case 42:case 47:I(xe(ge(K(),le()),t,n,c),c),(de(m||1)==5||de(q()||1)==5)&&F(C)&&P(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=F(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=j(C,/\f/g,``)),p>0&&(F(C)-d||h===0&&m===47)&&I(p>32?Se(C+`;`,r,n,d-1,c):Se(j(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(I(S=be(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)ye(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(N(C,3)===110)break;case 108:if(N(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?ye(e,S,S,r&&I(be(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):ye(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+F(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&ce()==125)continue}switch(C+=O(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(F(C)-1)*_,_=1;break;case 64:q()===45&&(C+=J(K())),f=q(),u=d=F(y=C+=_e(le())),v++;break;case 45:m===45&&F(C)==2&&(h=0)}}return a}function be(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=ie(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=P(e,f+1,f=D(g=o[h])),b=e;v<m;++v)(b=re(g>0?p[v]+` `+y:j(y,/&\f/g,p[v])))&&(c[_++]=b);return H(e,t,n,i===0?C:s,c,l,u,d)}function xe(e,t,n,r){return H(e,t,n,S,O(G()),P(e,2,-2),0,r)}function Se(e,t,n,r,i){return H(e,t,n,w,P(e,0,r),P(e,r+1,-1),r,i)}function Ce(e,t,n){switch(ne(e,t)){case 5103:return x+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return x+e+e;case 4855:return x+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return b+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return x+e+b+e+y+e+e;case 5936:switch(N(e,t+11)){case 114:return x+e+y+j(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return x+e+y+j(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return x+e+y+j(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return x+e+y+e+e;case 6165:return x+e+y+`flex-`+e+e;case 5187:return x+e+j(e,/(\w+).+(:[^]+)/,x+`box-$1$2`+y+`flex-$1$2`)+e;case 5443:return x+e+y+`flex-item-`+j(e,/flex-|-self/g,``)+(A(e,/flex-|baseline/)?``:y+`grid-row-`+j(e,/flex-|-self/g,``))+e;case 4675:return x+e+y+`flex-line-pack`+j(e,/align-content|flex-|-self/g,``)+e;case 5548:return x+e+y+j(e,`shrink`,`negative`)+e;case 5292:return x+e+y+j(e,`basis`,`preferred-size`)+e;case 6060:return x+`box-`+j(e,`-grow`,``)+x+e+y+j(e,`grow`,`positive`)+e;case 4554:return x+j(e,/([^-])(transform)/g,`$1`+x+`$2`)+e;case 6187:return j(j(j(e,/(zoom-|grab)/,x+`$1`),/(image-set)/,x+`$1`),e,``)+e;case 5495:case 3959:return j(e,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return j(j(e,/(.+:)(flex-)?(.*)/,x+`box-pack:$3`+y+`flex-pack:$3`),/space-between/,`justify`)+x+e+e;case 4200:if(!A(e,/flex-|baseline/))return y+`grid-column-align`+P(e,t)+e;break;case 2592:case 3360:return y+j(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,A(e.props,/grid-\w+-end/)})?~M(e+(n=n[t].value),`span`,0)?e:y+j(e,`-start`,``)+e+y+`grid-row-span:`+(~M(n,`span`,0)?A(n,/\d+/):A(n,/\d+/)-+A(e,/\d+/))+`;`:y+j(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return A(e.props,/grid-\w+-start/)})?e:y+j(j(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return j(e,/(.+)-inline(.+)/,x+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(F(e)-1-t>6)switch(N(e,t+1)){case 109:if(N(e,t+4)!==45)break;case 102:return j(e,/(.+:)(.+)-([^]+)/,`$1`+x+`$2-$3$1`+b+(N(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~M(e,`stretch`,0)?Ce(j(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return j(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return y+n+`:`+r+s+(i?y+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(N(e,t+6)===121)return j(e,`:`,`:`+x)+e;break;case 6444:switch(N(e,N(e,14)===45?18:11)){case 120:return j(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+x+(N(e,14)===45?`inline-`:``)+`box$3$1`+x+`$2$3$1`+y+`$2box$3`)+e;case 100:return j(e,`:`,`:`+y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return j(e,`scroll-`,`scroll-snap-`)+e}return e}function we(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Te(e,t,n,r){switch(e.type){case te:if(e.children.length)break;case T:case ee:case w:return e.return=e.return||e.value;case S:return``;case E:return e.return=e.value+`{`+we(e.children,r)+`}`;case C:if(!F(e.value=e.props.join(`,`)))return``}return F(n=we(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Ee(e){var t=ie(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function De(e){return function(t){t.root||(t=t.return)&&e(t)}}function Oe(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case w:e.return=Ce(e.value,e.length,n);return;case E:return we([U(e,{value:j(e.value,`@`,`@`+x)})],r);case C:if(e.length)return ae(n=e.props,function(t){switch(A(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:W(U(e,{props:[j(t,/:(read-\w+)/,`:`+b+`$1`)]})),W(U(e,{props:[t]})),k(e,{props:oe(n,r)});break;case`::placeholder`:W(U(e,{props:[j(t,/:(plac\w+)/,`:`+x+`input-$1`)]})),W(U(e,{props:[j(t,/:(plac\w+)/,`:`+b+`$1`)]})),W(U(e,{props:[j(t,/:(plac\w+)/,y+`input-$1`)]})),W(U(e,{props:[t]})),k(e,{props:oe(n,r)});break}return``})}}var ke=n(_(),1),X=n(v()),Z=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Ae=`active`,je=`data-styled-version`,Me=`6.4.2`,Ne=`/*!sc*/
`,Pe=typeof window<`u`&&typeof document<`u`;function Fe(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Ie=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:Fe(`REACT_APP_SC_DISABLE_SPEEDY`)??Fe(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),Le=`sc-keyframes-`;function Re(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var ze=new Map,Be=new Map,Ve=1,He=e=>{if(ze.has(e))return ze.get(e);for(;Be.has(Ve);)Ve++;let t=Ve++;return ze.set(e,t),Be.set(t,e),t},Ue=e=>Be.get(e),We=(e,t)=>{Ve=t+1,ze.set(e,t),Be.set(t,e)},Ge=Object.freeze([]),Ke=Object.freeze({});function qe(e,t,n=Ke){return e.theme!==n.theme&&e.theme||t||n.theme}var Je=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ye=/(^-|-$)/g;function Xe(e){return e.replace(Je,`-`).replace(Ye,``)}var Ze=/(a)(d)/gi,Qe=e=>String.fromCharCode(e+(e>25?39:97));function $e(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=Qe(t%52)+n;return(Qe(t%52)+n).replace(Ze,`$1-$2`)}var et=5381,tt=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},nt=e=>tt(et,e);function rt(e){return $e(nt(e)>>>0)}function it(e){return e.displayName||e.name||`Component`}function at(e){return typeof e==`string`&&!0}function ot(e){return at(e)?`styled.${e}`:`Styled(${it(e)})`}var st=Symbol.for(`react.memo`),ct=Symbol.for(`react.forward_ref`),lt={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},ut={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ft={[ct]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[st]:dt};function pt(e){return(`type`in(t=e)&&t.type.$$typeof)===st?dt:`$$typeof`in e?ft[e.$$typeof]:lt;var t}var mt=Object.defineProperty,ht=Object.getOwnPropertyNames,gt=Object.getOwnPropertySymbols,_t=Object.getOwnPropertyDescriptor,vt=Object.getPrototypeOf,yt=Object.prototype;function bt(e,t,n){if(typeof t!=`string`){let r=vt(t);r&&r!==yt&&bt(e,r,n);let i=ht(t).concat(gt(t)),a=pt(e),o=pt(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in ut||n&&n[s]||o&&s in o||a&&s in a)){let n=_t(t,s);try{mt(e,s,n)}catch{}}}}return e}function xt(e){return typeof e==`function`}var St=Symbol.for(`react.forward_ref`);function Ct(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===St&&`styledComponentId`in e}function wt(e,t){return e&&t?e+` `+t:e||t||``}function Tt(e,t){return e.join(t||``)}function Et(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Dt(e,t,n=!1){if(!n&&!Et(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Dt(e[n],t[n]);else if(Et(t))for(let n in t)e[n]=Dt(e[n],t[n]);return e}function Ot(e,t){Object.defineProperty(e,"toString",{value:t})}var kt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Re(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Ne;return t}},At=`style[${Z}][${je}="${Me}"]`,jt=RegExp(`^${Z}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Mt=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Nt=e=>{if(!e)return document;if(Mt(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Mt(t))return t}return document},Pt=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},Ft=(e,t)=>{let n=(t.textContent??``).split(Ne),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(jt);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(We(n,t),Pt(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},It=e=>{let t=Nt(e.options.target).querySelectorAll(At);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Z)!==Ae&&(Ft(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Lt=!1;function Rt(){if(!1!==Lt)return Lt;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Lt=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Lt=t.getAttribute(`content`)||void 0}return Lt=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var zt=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Z}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Z,Ae),i.setAttribute(je,Me);let s=t||Rt();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Bt=class{constructor(e,t){this.element=zt(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Re(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},Vt=class{constructor(e,t){this.element=zt(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Ht=Pe,Ut={isServer:!Pe,useCSSOMInjection:!Ie},Wt=class e{static registerId(e){return He(e)}constructor(e=Ke,t={},n){this.options=Object.assign(Object.assign({},Ut),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Pe&&Ht&&(Ht=!1,It(this)),Ot(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Ue(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Z+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&Pe&&It(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Pe&&t.target!==this.options.target&&Nt(this.options.target)!==Nt(t.target)&&It(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Bt(t,n):new Vt(t,n))(this.options),new kt(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){He(e),e.startsWith(Le)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(He(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(He(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},Gt=new WeakSet,Kt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function qt(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in Kt||e.startsWith(`--`)?String(t).trim():t+`px`}var Jt=47;function Yt(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var Xt=Symbol.for(`sc-keyframes`);function Zt(e){return typeof e==`object`&&!!e&&Xt in e}function Qt(e){return xt(e)&&!(e.prototype&&e.prototype.isReactComponent)}var $t=e=>e==null||!1===e||e===``,en=Symbol.for(`react.client.reference`);function tn(e){return e.$$typeof===en}function nn(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!$t(r)&&(Array.isArray(r)&&Gt.has(r)||xt(r)?t.push(Yt(n)+`:`,r,`;`):Et(r)?(t.push(n+` {`),nn(r,t),t.push(`}`)):t.push(Yt(n)+`: `+qt(n,r)+`;`))}}function rn(e,t,n,r,i=[]){if($t(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return tn(e)?i:Qt(e)&&t?rn(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)rn(e[a],t,n,r,i);return i}return Ct(e)?(i.push(`.${e.styledComponentId}`),i):Zt(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):tn(e)?i:Et(e)&&e.toString===Object.prototype.toString?(nn(e,i),i):(i.push(e.toString()),i)}var an=nt(Me),on=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=tt(an,t),this.baseStyle=n,Wt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a)if(Qt(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Tt(rn(r,e,t,n)))}else i+=Tt(rn(a,e,t,n))}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=$e(tt(tt(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=wt(r,a)}}return r}},sn=/&/g;function cn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function ln(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==Jt||e.charCodeAt(c+1)!==42)if(o)l===42&&e.charCodeAt(c+1)===Jt&&(o=!1,c++);else if(l!==34&&l!==39||cn(e,c)){if(a===0)if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else a===0?a=l:a===l&&(a=0);else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function un(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&un(a.children,t)}return e}function dn({options:e=Ke,plugins:t=Ge}=Ke){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(sn,r).replace(i,a))}),e.prefix&&o.push(Oe),o.push(Te);let s=[],c=Ee(o.concat(De(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return ln(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||cn(e,o))if(s===0)if(t===Jt&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==Jt);)o++;o+=2}else if(t!==40)if(t!==41)if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===Jt)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===Jt&&o+1<r&&e.charCodeAt(o+1)===Jt){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++;else c>0&&c--,o++;else c++,o++;else o++;else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:ln(i)):l===0?e:ln(e)}(t),d=ve(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=un(d,e.namespace)),s=[],we(d,c),s},u=e,d=et;for(let e=0;e<t.length;e++)t[e].name||Re(15),d=tt(d,t[e].name);return u!=null&&u.namespace&&(d=tt(d,u.namespace)),u!=null&&u.prefix&&(d=tt(d,`p`)),l.hash=d===et?``:d.toString(),l}var fn=new Wt,pn=dn(),mn=X.createContext({shouldForwardProp:void 0,styleSheet:fn,stylis:pn,stylisPlugins:void 0});mn.Consumer;function hn(){return X.useContext(mn)}var gn=X.createContext(void 0);gn.Consumer;var _n=Object.prototype.hasOwnProperty,vn={};function yn(e,t){let n=typeof e==`string`?Xe(e):`sc`;vn[n]=(vn[n]||0)+1;let r=n+`-`+rt(Me+n+vn[n]);return t?t+`-`+r:r}function bn(e,t,n){let r=Ct(e),i=e,a=!at(e),{attrs:o=Ge,componentId:s=yn(t.displayName,t.parentComponentId),displayName:c=ot(e)}=t,l=t.displayName&&t.componentId?Xe(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new on(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=X.useContext(gn),u=hn(),d=e.shouldForwardProp||u.shouldForwardProp,f=qe(t,l,a)||Ke,p,m;{let e=X.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(_n.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=xt(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=wt(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=wt(r.className,t.className)),r}(r,t,f),m=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(i,p,u.styleSheet,u.stylis);let n=0;for(let e in t)_n.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),_=wt(o,s);return m&&(_+=` `+m),p.className&&(_+=` `+p.className),g[at(h)&&h.includes(`-`)?`class`:`className`]=_,n&&(g.ref=n),(0,X.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=X.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?wt(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Dt(e,n,!0);return e}({},i.defaultProps,e):e}}),Ot(m,()=>`.${m.styledComponentId}`),a&&bt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var xn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Sn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Cn=e=>(Gt.add(e),e);function wn(e,...t){if(xt(e)||Et(e))return Cn(rn(Sn(Ge,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?rn(n):Cn(rn(Sn(n,t)))}function Tn(e,t,n=Ke){if(!t)throw Re(1,t);let r=(r,...i)=>e(t,n,wn(r,...i));return r.attrs=r=>Tn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Tn(e,t,Object.assign(Object.assign({},n),r)),r}var En=e=>Tn(bn,e),Dn=En;xn.forEach(e=>{Dn[e]=En(e)}),`${Z}`,`${Z}`,`${Z}`;function On(e){return e.replace(/^```(?:\w+)?\s*/i,``).replace(/```$/i,``).replace(/^(?:enhanced\s+prompt|video\s+prompt|image\s+prompt|final\s+prompt|prompt)\s*:\s*/i,``).trim()}function kn(e){let t=e.match(/^data:(.+?);base64,(.+)$/);if(!t)throw Error(`不支持的帧格式。`);return{mimeType:t[1],data:t[2]}}function An(e){if(e&&typeof e==`object`){let t=e;if(t.error&&typeof t.error==`object`){let e=t.error;if(typeof e.message==`string`)return e.message}if(typeof t.message==`string`)return t.message}return null}function jn(e){return`You are an expert AI video prompt engineer.

Rewrite the user's short idea into one complete structured English AI video prompt.

This enhancer is for short idea to ready-to-use video prompt.
The final formatted prompt should match the same structure used by a high-quality AI video prompt workflow.

Keep the user's original idea and intent.
Do not invent major story events that are not supported by the idea.

Return valid JSON only.
Do not include Markdown.
Do not include code fences.
Do not include explanations outside the JSON.

The prompt must use this structure:
1. Global Style
2. Shot-by-Shot Timeline
3. Consistency & Quality Constraints

Global Style requirements:
- One natural English paragraph.
- Include visual style, image quality, lighting tone, color mood, overall atmosphere, and aspect ratio only when it is obvious.

Shot-by-Shot Timeline requirements:
- Use 2 to 4 time segments for most short ideas unless the content clearly needs more.
- Use approximate time ranges when exact timing is unclear.
- Every time segment must contain:
  - Subject
  - Action
  - Setting
  - Camera
  - Mood
  - Sound
- Mood must be visually concrete through expression, posture, movement rhythm, and body language.
- Sound must describe ambient sound, music, sound effects, or environmental audio.
- Do not invent dialogue unless clearly necessary.
- If little sound is implied, use: "subtle ambient sound only, no dialogue."

Consistency & Quality Constraints requirements:
- Return English bullet-point constraints.
- Cover subject consistency, natural motion, anti-deformation, stable scene, stable lighting, clean image quality, camera movement control, and sound consistency.
- Include constraints equivalent to these ideas:
  - Keep the same subject consistent across all shots, including face, clothing, body shape, hairstyle, accessories, and proportions.
  - Motion should be smooth, physically natural, and free from jitter, twitching, sticky limbs, or sudden speed jumps.
  - Avoid face distortion, extra fingers, folded limbs, object intersections, warped objects, or broken anatomy.
  - Keep backgrounds stable without flickering, sudden changes, perspective collapse, or texture crawling.
  - Maintain stable exposure and shadow direction consistent with the global lighting tone.
  - Keep the image clean, sharp, and free from noise, mosaic artifacts, edge aliasing, or compression artifacts.
  - Use only one main camera movement per time segment.
  - Keep sound consistent with the scene.

The JSON must follow this exact structure:

{
  "videoSummary": "A short English summary of the prompt, including subject, action, scene, mood, and visual style.",
  "targetModel": "Seedance 2.0-style prompt",
  "generatedPrompt": {
    "globalStyle": "One natural English paragraph describing the shared global style of the whole video.",
    "timeline": [
      {
        "time": "0-3s",
        "subject": "Describe the subject in this time segment.",
        "action": "Describe the visible action in this time segment.",
        "setting": "Describe the visible setting in this time segment.",
        "camera": "Describe one main camera movement or camera setup only.",
        "mood": "Describe visible emotion through facial expression, posture, movement rhythm, and body language.",
        "sound": "Describe ambient sound, music, and sound effects, or say subtle ambient sound only, no dialogue."
      }
    ],
    "consistencyConstraints": [
      "One bullet-point style quality or consistency constraint.",
      "Another bullet-point style quality or consistency constraint."
    ]
  }
}

Keep every value in English and make the prompt directly usable in AI video generation systems.

User idea:
${e}`}function Mn(e){return`You are an expert AI image prompt writer.

Rewrite the user's short idea into one complete image generation prompt.

The prompt must be general and model-neutral. It must work for most image generation models.

Keep the user's original idea and intent.
Expand it with:
- Subject
- Scene / background
- Composition
- Visual style
- Lighting
- Color palette
- Mood / atmosphere
- Details / textures
- Material
- Perspective
- Image quality

Rules:
- Output only one final prompt.
- Do not output JSON.
- Do not output Markdown.
- Do not output analysis.
- Do not output multiple versions.
- Do not add a title or prefix.
- Do not start with "Enhanced Prompt:", "Image Prompt:", or similar labels.
- Do not include video language such as camera movement, motion continuity, pacing, transition, timeline, or key shots.
- Do not include model-specific parameters such as --ar, --v, --style, --s, or --q.
- Make it directly copyable and usable.

User idea:
${e}`}function Nn(t){return e.find(e=>e.id===t)?.label??t}var Pn={type:`object`,properties:{image_archetype:{type:`object`},subjects:{type:`array`},composition:{type:`object`},lighting_and_color:{type:`object`},imperfections:{type:`object`},shortPrompt:{type:`string`},detailedPrompt:{type:`string`},negativePrompt:{type:`string`}},required:[`image_archetype`,`subjects`,`composition`,`lighting_and_color`,`imperfections`,`shortPrompt`,`detailedPrompt`,`negativePrompt`]};function Fn(e,t){return Nn(e),`You are a professional visual reverse-engineering system. Analyze the image and output structured JSON for accurate image recreation.

## Core Rules
- Detect the IMAGE DOMAIN first: photo, CGI render, illustration, UI, poster, product shot, meme, scan, screenshot, concept art, etc.
- Focus only on visually dominant elements (max 3-6 subjects)
- Use observable physical descriptions only — avoid emotion, symbolism, storytelling, quality judgments
- Describe geometry, materials, surfaces, lighting behavior, spatial hierarchy, and camera properties
- Prioritize reconstruction fidelity over interpretation
- Ignore insignificant background clutter unless compositionally important
- Record visible defects, compression, motion blur, chromatic aberration, noise, or distortion if present

## Modules

### image_archetype
{ image_domain, visual_medium, style_category, scene_context }

### subjects (3-6 max)
Each:
{ name, category, physical_attributes, material, surface_texture, primary_colors, position, scale, orientation, interaction }

### composition
{ aspect_ratio, framing, camera_angle, focal_behavior, perspective_depth, layer_structure, negative_space, visual_focus }

### lighting_and_color
{ light_sources, light_quality, contrast_level, color_temperature, dominant_palette[], accent_palette[], reflections, shadow_behavior }

### imperfections
{ grain_or_noise, blur, compression_artifacts, distortions }

## Prompt Generation
- shortPrompt: one-line visual summary
- detailedPrompt:
  image domain → primary subjects → composition → spatial structure → materials/surfaces → lighting → color system → optical qualities → imperfections
- Use dense visual language optimized for image generation
- No markdown, explanations, opinions, or model parameters
- negativePrompt: visual traits, styles, objects, lighting, rendering artifacts, or compositions inconsistent with the image identity

## Output
Return valid JSON only.

{
  "image_archetype": {
    "image_domain": "...",
    "visual_medium": "...",
    "style_category": "...",
    "scene_context": "..."
  },
  "subjects": [
    {
      "name": "...",
      "category": "...",
      "physical_attributes": "...",
      "material": "...",
      "surface_texture": "...",
      "primary_colors": "...",
      "position": "...",
      "scale": "...",
      "orientation": "...",
      "interaction": "..."
    }
  ],
  "composition": {
    "aspect_ratio": "...",
    "framing": "...",
    "camera_angle": "...",
    "focal_behavior": "...",
    "perspective_depth": "...",
    "layer_structure": "...",
    "negative_space": "...",
    "visual_focus": "..."
  },
  "lighting_and_color": {
    "light_sources": "...",
    "light_quality": "...",
    "contrast_level": "...",
    "color_temperature": "...",
    "dominant_palette": ["..."],
    "accent_palette": ["..."],
    "reflections": "...",
    "shadow_behavior": "..."
  },
  "imperfections": {
    "grain_or_noise": "...",
    "blur": "...",
    "compression_artifacts": "...",
    "distortions": "..."
  },
  "shortPrompt": "...",
  "detailedPrompt": "...",
  "negativePrompt": "..."
}`}function In(t){return e.find(e=>e.id===t)?.label??t}function Ln(e){if(!e?.videoWidth||!e.videoHeight)return null;let t=e.videoWidth/e.videoHeight;return t>1.7?`16:9`:t<.8?`9:16`:`1:1 or 4:5`}var Rn={type:`object`,properties:{videoSummary:{type:`string`},targetModel:{type:`string`},generatedPrompt:{type:`object`,properties:{globalStyle:{type:`string`},timeline:{type:`array`,items:{type:`object`,properties:{time:{type:`string`},subject:{type:`string`},action:{type:`string`},setting:{type:`string`},camera:{type:`string`},mood:{type:`string`},sound:{type:`string`}},required:[`time`,`subject`,`action`,`setting`,`camera`,`mood`,`sound`]}},consistencyConstraints:{type:`array`,items:{type:`string`}}},required:[`globalStyle`,`timeline`,`consistencyConstraints`]}},required:[`videoSummary`,`targetModel`,`generatedPrompt`]};function zn(e,t){let n=In(e),r=typeof t?.duration==`number`&&Number.isFinite(t.duration)?`${Math.max(1,Math.round(t.duration))} seconds`:`the source video length`,i=Ln(t);return`You are an expert AI video prompt engineer.

Analyze the provided video keyframes and infer the full video structure.

Generate one structured English AI video prompt optimized for the selected target model: ${n}.

Video metadata:
- Page title: ${t?.pageTitle??`Unknown`}
- Page URL: ${t?.pageUrl??`Unknown`}
- Source duration hint: ${r}
- Source aspect ratio hint: ${i??`unknown`}

Output goals:
- The final result must still be one single usable prompt.
- Inside that prompt, organize the content into three sections:
  1. Global Style
  2. Shot-by-Shot Timeline
  3. Consistency & Quality Constraints
- Keep the writing natural and production-ready.
- Do not invent major story events that are not supported by the video.

Global Style requirements:
- Describe the global visual style shared across the full video.
- Include visual style, image quality, lighting tone, color mood, and overall atmosphere.
- Include aspect ratio only if it is reasonably clear from the video.
- If the lighting changes over time, say that it changes naturally across the timeline.
- Write this as one natural English paragraph.

Shot-by-Shot Timeline requirements:
- Split the video into 2 to 4 time segments for short videos, or more only when the content clearly needs it.
- Use approximate time ranges when exact timing is unclear.
- Each segment must contain:
  - Subject
  - Action
  - Setting
  - Camera
  - Mood
  - Sound
- Subject should stay clear. If it is the same subject, you may say "same subject" only when clarity is still preserved.
- Action must be specific and visible.
- Setting must describe the visible environment.
- Camera must use one main camera move only.
- Mood must be visually concrete through expression, body language, movement rhythm, and visible emotion.
- Sound must describe ambient sound, music, sound effects, or environmental audio. Do not invent dialogue unless clearly visible.
- If little sound is implied, use: "subtle ambient sound only, no dialogue."

Consistency & Quality Constraints requirements:
- Return clear English bullet-point constraints.
- Cover subject consistency, natural motion, anti-deformation, stable scene, stable lighting, clean image quality, camera movement control, and sound consistency.
- Include constraints equivalent to these ideas:
  - Keep the same subject consistent across all shots, including face, clothing, body shape, hairstyle, accessories, and proportions.
  - Motion should be smooth, physically natural, and free from jitter, twitching, sticky limbs, or sudden speed jumps.
  - Avoid face distortion, extra fingers, folded limbs, object intersections, warped objects, or broken anatomy.
  - Keep backgrounds stable without flickering, sudden changes, perspective collapse, or texture crawling.
  - Maintain stable exposure and shadow direction consistent with the global lighting tone.
  - Keep the image clean, sharp, and free from noise, mosaic artifacts, edge aliasing, or compression artifacts.
  - Use only one main camera movement per time segment.
  - Keep sound consistent with the scene.

Return valid JSON only.
Do not include Markdown.
Do not include code fences.
Do not include explanations outside the JSON.

The JSON must follow this exact structure:

{
  "videoSummary": "A short English summary of the video, including subject, action, scene, mood, and visual style.",
  "targetModel": "${n}",
  "generatedPrompt": {
    "globalStyle": "One natural English paragraph describing the shared global style of the whole video.",
    "timeline": [
      {
        "time": "0-3s",
        "subject": "Describe the subject in this time segment.",
        "action": "Describe the visible action in this time segment.",
        "setting": "Describe the visible setting in this time segment.",
        "camera": "Describe one main camera movement or camera setup only.",
        "mood": "Describe visible emotion through facial expression, posture, movement rhythm, and body language.",
        "sound": "Describe ambient sound, music, and sound effects, or say subtle ambient sound only, no dialogue."
      }
    ],
    "consistencyConstraints": [
      "One bullet-point style quality or consistency constraint.",
      "Another bullet-point style quality or consistency constraint."
    ]
  }
}

`}function Bn(e){let t=e.indexOf(`{`);if(t===-1)return null;let n=0,r=!1,i=!1;for(let a=t;a<e.length;a+=1){let o=e[a];if(r){i?i=!1:o===`\\`?i=!0:o===`"`&&(r=!1);continue}if(o===`"`){r=!0;continue}if(o===`{`)n+=1;else if(o===`}`&&(--n,n===0))return e.slice(t,a+1)}return null}function Vn(e){let t=e.indexOf(`{`);if(t===-1)return null;let n=[],r=!1,i=!1;for(let a=t;a<e.length;a++){let t=e[a];if(r){i?i=!1:t===`\\`?i=!0:t===`"`&&(r=!1);continue}if(t===`"`){r=!0;continue}t===`{`||t===`[`?n.push(t===`{`?`}`:`]`):(t===`}`||t===`]`)&&n.length>0&&n[n.length-1]===t&&n.pop()}let a=e;for(r&&(a+=`"`);n.length>0;)a+=n.pop();try{let e=Bn(a);if(e)return JSON.parse(e),e}catch{}return null}function Hn(e){let t=e.trim();try{return JSON.parse(t)}catch{let n=Bn(t);if(!n){let n=Vn(t);if(n)try{return JSON.parse(n)}catch{}let r=e.slice(0,300),i=e.slice(-200);throw Error(`模型返回JSON被截断或不完整。(E1) 长度:${e.length} 开头:${r}... 结尾:...${i}`)}try{return JSON.parse(n)}catch{throw Error(`模型返回了无效JSON。(E2) 截取内容: ${n.slice(0,200)}`)}}}function Q(e){return typeof e==`string`&&e.trim().length>0}function Un(e){let t=e.generatedPrompt?.timeline,n=Array.isArray(t)?t.filter(e=>!!e&&typeof e==`object`&&Q(e.time)&&Q(e.subject)&&Q(e.action)&&Q(e.setting)&&Q(e.camera)&&Q(e.mood)&&Q(e.sound)).map(e=>({time:e.time.trim(),subject:e.subject.trim(),action:e.action.trim(),setting:e.setting.trim(),camera:e.camera.trim(),mood:e.mood.trim(),sound:e.sound.trim()})):[],r=Array.isArray(e.generatedPrompt?.consistencyConstraints)?e.generatedPrompt.consistencyConstraints.filter(Q).map(e=>e.trim()).filter(Boolean):[],i={videoSummary:e.videoSummary?.trim?.()??``,targetModel:e.targetModel?.trim?.()??``,generatedPrompt:{globalStyle:e.generatedPrompt?.globalStyle?.trim?.()??``,timeline:n,consistencyConstraints:r}};if(!Q(i.videoSummary)||!Q(i.targetModel)||!Q(i.generatedPrompt.globalStyle)||n.length===0||r.length===0)throw Error(`模型返回了无效的响应格式，请重试。`);return i}function Wn(e){let t=Un(Hn(e));return{videoSummary:t.videoSummary,generatedPrompt:JSON.stringify(t,null,2),rawResult:JSON.stringify(t,null,2),promptResult:t}}function Gn(e){return typeof e==`string`&&e.trim().length>0}function Kn(e){return String(e??``).trim()}function qn(e){for(let t of[`image_archetype`,`composition`,`imperfections`]){let n=e[t],r={};if(n&&typeof n==`object`&&!Array.isArray(n))for(let[e,t]of Object.entries(n))r[e]=Kn(t);e[t]=r}if(e.lighting_and_color&&typeof e.lighting_and_color==`object`&&!Array.isArray(e.lighting_and_color)){let t={};for(let[n,r]of Object.entries(e.lighting_and_color))t[n]=Array.isArray(r)?r.map(e=>Kn(e)):Kn(r);e.lighting_and_color=t}if(e.subjects=Array.isArray(e.subjects)?e.subjects:[],e.shortPrompt=Kn(e.shortPrompt),e.detailedPrompt=Kn(e.detailedPrompt),e.negativePrompt=Kn(e.negativePrompt),!Gn(e.shortPrompt)&&!Gn(e.detailedPrompt))throw Error(`模型返回了无效的响应格式，请重试。(E3)`);return e}function Jn(e){let t=Array.isArray(e.analysis?.keywords)?e.analysis.keywords.filter(Gn).map(e=>e.trim()).filter(Boolean):[],n={analysis:{subject:e.analysis?.subject?.trim?.()??``,scene:e.analysis?.scene?.trim?.()??``,composition:e.analysis?.composition?.trim?.()??``,style:e.analysis?.style?.trim?.()??``,lighting:e.analysis?.lighting?.trim?.()??``,colorPalette:e.analysis?.colorPalette?.trim?.()??``,mood:e.analysis?.mood?.trim?.()??``,details:e.analysis?.details?.trim?.()??``,medium:e.analysis?.medium?.trim?.()??``,keywords:t},shortPrompt:e.shortPrompt?.trim?.()??``,detailedPrompt:e.detailedPrompt?.trim?.()??``,imagePrompt:e.imagePrompt?.trim?.()??``},r=n.analysis;if(!Gn(r.subject)||!Gn(r.scene)||!Gn(n.imagePrompt))throw Error(`模型返回了无效的响应格式，请重试。(E4)`);return n}function Yn(e){let t=Hn(e);if(t&&typeof t==`object`&&!(`image_archetype`in t)&&!(`global_overview`in t)&&`analysis`in t){let e=t.analysis;e&&typeof e==`object`&&!Array.isArray(e)&&(`image_archetype`in e||`global_overview`in e)&&(t={...e,shortPrompt:t.shortPrompt??e.shortPrompt,detailedPrompt:t.detailedPrompt??e.detailedPrompt,negativePrompt:t.negativePrompt??e.negativePrompt})}if(t&&typeof t==`object`&&`image_archetype`in t){let e=qn(t);return{imageSummary:e.shortPrompt,generatedPrompt:JSON.stringify(e,null,2),rawResult:JSON.stringify(e,null,2),promptResult:e}}if(t&&typeof t==`object`&&`global_overview`in t){let e=t,n=qn({image_archetype:e.global_overview??{},subjects:Array.isArray(e.all_subjects_and_objects)?e.all_subjects_and_objects:[],composition:e.composition_and_camera??{},lighting_and_color:e.light_and_color??{},imperfections:e.details_and_imperfections??{},shortPrompt:String(e.shortPrompt??``),detailedPrompt:String(e.detailedPrompt??``),negativePrompt:String(e.negativePrompt??``)});return{imageSummary:n.shortPrompt,generatedPrompt:JSON.stringify(n,null,2),rawResult:JSON.stringify(n,null,2),promptResult:n}}if(t&&typeof t==`object`&&`negativePrompt`in t){let e=t,n=qn({image_archetype:e.analysis??{},subjects:[],composition:{},lighting_and_color:{},imperfections:{},shortPrompt:String(e.shortPrompt??``),detailedPrompt:String(e.detailedPrompt??``),negativePrompt:String(e.negativePrompt??``)});return{imageSummary:n.shortPrompt,generatedPrompt:JSON.stringify(n,null,2),rawResult:JSON.stringify(n,null,2),promptResult:n}}let n=Jn(t);return{imageSummary:n.shortPrompt,generatedPrompt:JSON.stringify(n,null,2),rawResult:JSON.stringify(n,null,2),promptResult:n}}function Xn(e,t,n){let r=Math.max(e,t);if(r<=n)return{width:e,height:t};let i=n/r;return{width:Math.max(1,Math.round(e*i)),height:Math.max(1,Math.round(t*i))}}async function Zn(e){let t=new Image;return t.src=e,await new Promise((e,n)=>{t.onload=()=>e(),t.onerror=()=>n(Error(`无法加载图片。`))}),t}async function Qn(e){let t=document.createElement(`video`);return t.src=e,t.preload=`auto`,t.muted=!0,t.playsInline=!0,t.crossOrigin=`anonymous`,await new Promise((e,n)=>{let r=()=>{a(),e()},i=()=>{a(),n(Error(`无法加载所选视频文件。`))},a=()=>{t.removeEventListener(`loadeddata`,r),t.removeEventListener(`error`,i)};t.addEventListener(`loadeddata`,r,{once:!0}),t.addEventListener(`error`,i,{once:!0}),t.load()}),t}async function $n(e,t=1536,n=.7){let r=await Zn(e),{width:i,height:a}=Xn(r.naturalWidth,r.naturalHeight,t);if(i===r.naturalWidth&&a===r.naturalHeight)return e;let o=document.createElement(`canvas`);o.width=i,o.height=a;let s=o.getContext(`2d`);return s?(s.drawImage(r,0,0,i,a),o.toDataURL(`image/jpeg`,n)):e}async function er(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{if(typeof r.result==`string`){t(r.result);return}n(Error(`无法读取所选图片文件。`))},r.onerror=()=>n(Error(`无法读取所选图片文件。`)),r.readAsDataURL(e)})}function tr(e){let{mimeType:t,data:n}=kn(e);return{mimeType:t,base64:n}}function nr(e){if(e&&typeof e==`object`){let t=e;if(t.error&&typeof t.error==`object`){let e=t.error;if(typeof e.message==`string`)return e.message}if(typeof t.message==`string`)return t.message}return null}function rr(e){if(e&&typeof e==`object`){let t=e,n=nr(e);if(n)throw Error(n);if(`choices`in t&&Array.isArray(t.choices)&&t.choices.length>0){let e=t.choices[0];if(e&&typeof e==`object`){let t=e;if(t.message&&typeof t.message==`object`){let e=t.message;if(typeof e.content==`string`)return e.content}}}}throw Error(`模型未返回有效的提示词，请重试。`)}async function ir({apiKey:e,baseUrl:t,modelName:n,targetModel:r,frames:i,videoInfo:a,signal:o}){let s=`${t}/chat/completions`,c=[{type:`text`,text:zn(r,a)}];for(let e=0;e<i.length;e++){let t=i[e],{mimeType:n,base64:r}=tr(t.dataUrl);c.push({type:`text`,text:`Frame ${e+1} at ${t.timestamp.toFixed(2)} seconds`}),c.push({type:`image_url`,image_url:{url:`data:${n};base64,${r}`}})}let l=await fetch(s,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${e}`},body:JSON.stringify({model:n,messages:[{role:`user`,content:c}],temperature:.4,top_p:.9}),signal:o}),u=await l.json();if(!l.ok)throw Error(nr(u)??`API 请求失败，请检查您的 API 密钥、配额或网络连接。`);return Wn(rr(u))}async function ar({apiKey:e,baseUrl:t,modelName:n,targetModel:r,imageDataUrl:i,imageInfo:a,signal:o,onProgress:s}){let c=`${t}/chat/completions`,l=Fn(r,a),{mimeType:u,base64:d}=tr(await $n(i)),f=await fetch(c,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${e}`},body:JSON.stringify({model:n,messages:[{role:`user`,content:[{type:`text`,text:l},{type:`image_url`,image_url:{url:`data:${u};base64,${d}`}}]}],temperature:.4,top_p:.9,max_tokens:32768,stream:!0}),signal:o});if(!f.ok){let e=await f.text().catch(()=>``);throw Error(`API 请求失败 (${f.status}): ${e.slice(0,300)}`)}let p=f.body?.getReader();if(!p)throw Error(`当前 API 端点不支持流式响应，请在设置中检查接口地址。`);let m=new TextDecoder,h=``,g=``;try{for(;;){let{done:e,value:t}=await p.read();if(e)break;if(o?.aborted)throw p.releaseLock(),new DOMException(`Aborted`,`AbortError`);g+=m.decode(t,{stream:!0});let n=g.split(`
`);g=n.pop()??``;for(let e of n){let t=e.trim();if(!t||!t.startsWith(`data: `))continue;let n=t.slice(6);if(n!==`[DONE]`)try{let e=JSON.parse(n),t=nr(e);if(t)throw Error(t);let r=e?.choices?.[0]?.delta?.content;typeof r==`string`&&(h+=r,s?.(h))}catch(e){if(e instanceof SyntaxError)continue;throw e}}}}finally{p.releaseLock()}if(!h.trim())throw Error(`模型未返回有效的提示词，请重试。`);return Yn(h)}async function or({apiKey:e,baseUrl:t,modelName:n,mode:r,idea:i,signal:a}){let o=i.trim();if(!o)throw Error(`请先输入简短创意。`);let s=`${t}/chat/completions`;if(r===`video`){let t=await fetch(s,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${e}`},body:JSON.stringify({model:n,messages:[{role:`user`,content:jn(o)}],temperature:.45,top_p:.9}),signal:a}),r=await t.json();if(!t.ok)throw Error(nr(r)??`API 请求失败，请检查您的 API 密钥、配额或网络连接。`);return Wn(rr(r)).generatedPrompt}let c=await fetch(s,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${e}`},body:JSON.stringify({model:n,messages:[{role:`user`,content:Mn(o)}],temperature:.55,top_p:.9}),signal:a}),l=await c.json();if(!c.ok)throw Error(nr(l)??`API 请求失败，请检查您的 API 密钥、配额或网络连接。`);let u=On(rr(l));if(!u)throw Error(`模型未返回有效的提示词，请重试。`);return u}function sr(e){let{mimeType:t,data:n}=kn(e);return{mimeType:t,data:n}}function cr(e){let t=new URL(e).pathname.toLowerCase();return t.endsWith(`.png`)?`image/png`:t.endsWith(`.webp`)?`image/webp`:t.endsWith(`.gif`)?`image/gif`:`image/jpeg`}function lr(e){return e&&typeof e==`object`&&`error`in e&&e.error&&typeof e.error==`object`&&`message`in e.error&&typeof e.error.message==`string`?e.error.message:An(e)}function ur(e){if(e&&typeof e==`object`&&`candidates`in e&&Array.isArray(e.candidates)){let t=e.candidates.flatMap(e=>!e||typeof e!=`object`||!(`content`in e)||!e.content||typeof e.content!=`object`||!(`parts`in e.content)||!Array.isArray(e.content.parts)?[]:e.content.parts.flatMap(e=>e&&typeof e==`object`&&`text`in e&&typeof e.text==`string`?[e.text]:[])).join(`
`).trim();if(t)return t}throw Error(`Gemini 未返回有效的提示词，请重试。`)}async function dr({apiKey:e,targetModel:t,frames:n,videoInfo:r}){let i=`https://generativelanguage.googleapis.com/v1beta/models/${s}:generateContent`,a=zn(t,r),o=n.flatMap((e,t)=>{let n=sr(e.dataUrl);return[{text:`Frame ${t+1} at ${e.timestamp.toFixed(2)} seconds`},{inline_data:n}]}),c=await fetch(i,{method:`POST`,headers:{"Content-Type":`application/json`,"x-goog-api-key":e},body:JSON.stringify({contents:[{role:`user`,parts:[{text:a},...o]}],generationConfig:{responseMimeType:`application/json`,responseSchema:Rn,temperature:.4,topP:.9}})}),l=await c.json();if(!c.ok)throw Error(lr(l)??`Gemini API 请求失败，请检查您的 API 密钥、配额或网络连接。`);return Wn(ur(l))}async function fr({apiKey:e,targetModel:t,imageUrl:n,imageDataUrl:r,imageInfo:i}){let a=`https://generativelanguage.googleapis.com/v1beta/models/${s}:generateContent`,o=Fn(t,i),c=n?{file_data:{mime_type:cr(n),file_uri:n}}:r?{inline_data:sr(r)}:null;if(!c)throw Error(`未提供用于分析的图片数据。`);let l=await fetch(a,{method:`POST`,headers:{"Content-Type":`application/json`,"x-goog-api-key":e},body:JSON.stringify({contents:[{role:`user`,parts:[{text:o},c]}],generationConfig:{responseMimeType:`application/json`,responseSchema:Pn,temperature:.4,topP:.9}})}),u=await l.json();if(!l.ok)throw Error(lr(u)??`Gemini API 请求失败，请检查您的 API 密钥、配额或网络连接。`);return Yn(ur(u))}async function pr({apiKey:e,mode:t,idea:n}){let r=n.trim();if(!r)throw Error(`请先输入简短创意。`);let i=`https://generativelanguage.googleapis.com/v1beta/models/${s}:generateContent`;if(t===`video`){let t=await fetch(i,{method:`POST`,headers:{"Content-Type":`application/json`,"x-goog-api-key":e},body:JSON.stringify({contents:[{role:`user`,parts:[{text:jn(r)}]}],generationConfig:{responseMimeType:`application/json`,responseSchema:Rn,temperature:.45,topP:.9}})}),n=await t.json();if(!t.ok)throw Error(lr(n)??`Gemini API 请求失败，请检查您的 API 密钥、配额或网络连接。`);return Wn(ur(n)).generatedPrompt}let a=await fetch(i,{method:`POST`,headers:{"Content-Type":`application/json`,"x-goog-api-key":e},body:JSON.stringify({contents:[{role:`user`,parts:[{text:Mn(r)}]}],generationConfig:{temperature:.55,topP:.9}})}),o=await a.json();if(!a.ok)throw Error(lr(o)??`Gemini API 请求失败，请检查您的 API 密钥、配额或网络连接。`);let c=On(ur(o));if(!c)throw Error(`Gemini 未返回有效的提示词，请重试。`);return c}async function mr({apiKey:e,baseUrl:t,modelName:n,providerType:r,targetModel:i,frames:a,videoInfo:o,signal:s}){return r===`gemini`?dr({apiKey:e,targetModel:i,frames:a,videoInfo:o}):ir({apiKey:e,baseUrl:t,modelName:n,targetModel:i,frames:a,videoInfo:o,signal:s})}async function hr({apiKey:e,baseUrl:t,modelName:n,providerType:r,targetModel:i,imageDataUrl:a,imageInfo:o,signal:s,onProgress:c}){if(r===`gemini`){let t=await fr({apiKey:e,targetModel:i,imageDataUrl:a,imageInfo:o});return c&&c(t.generatedPrompt),t}return ar({apiKey:e,baseUrl:t,modelName:n,targetModel:i,imageDataUrl:a,imageInfo:o,signal:s,onProgress:c})}async function gr({apiKey:e,baseUrl:t,modelName:n,providerType:r,mode:i,idea:a,signal:o}){return r===`gemini`?pr({apiKey:e,mode:i,idea:a}):or({apiKey:e,baseUrl:t,modelName:n,mode:i,idea:a,signal:o})}var _r=2e3;function vr(e,t,n=8e3){return new Promise((r,i)=>{let a=0,o=()=>{e.removeEventListener(t,s),window.clearTimeout(a)},s=()=>{o(),r()};a=window.setTimeout(()=>{o(),i(Error(`Timed out waiting for ${t}.`))},n),e.addEventListener(t,s,{once:!0})})}async function yr(e){e.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA||await vr(e,`loadeddata`)}function br(e,t){return Number.isFinite(e.duration)&&e.duration>0?Promise.resolve(!0):new Promise(n=>{let r=0,i=()=>{e.removeEventListener(`loadedmetadata`,a),e.removeEventListener(`durationchange`,a),window.clearTimeout(r)},a=()=>{Number.isFinite(e.duration)&&e.duration>0&&(i(),n(!0))};r=window.setTimeout(()=>{i(),n(Number.isFinite(e.duration)&&e.duration>0)},t),e.addEventListener(`loadedmetadata`,a),e.addEventListener(`durationchange`,a)})}function xr(e,t){return t===`fast`?5:t===`standard`?e<=10?6:e<=30?10:e<=60?14:16:e<=10?10:e<=30?16:e<=60?24:32}function Sr(e){return e===`fast`?{maxSide:640,quality:.65}:{maxSide:768,quality:.7}}function Cr(e,t){if(!Number.isFinite(e)||e<=0||t<=0)return[];if(t===1)return[0];let n=e*.95,r=n/(t-1);return Array.from({length:t},(e,i)=>i===t-1?n:r*i)}function wr(e){let t=[];for(let n of e){let e=Math.max(0,Number(n.toFixed(3)));t.some(t=>Math.abs(t-e)<.05)||t.push(e)}return t}function Tr(e){let t=e.currentTime||0;return wr([-3,-1.5,0,1.5,3].map(e=>Math.max(0,t+e)))}function Er(e,t){let{width:n,height:r}=Xn(e.videoWidth||1280,e.videoHeight||720,t.maxSide),i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`);if(!a)throw Error(`无法为此视频准备画布上下文。`);a.drawImage(e,0,0,n,r);try{return i.toDataURL(`image/jpeg`,t.quality)}catch(e){throw Error(e instanceof Error&&/tainted|cross-origin/i.test(e.message)?`FRAME_EXTRACTION_BLOCKED`:`FRAME_EXTRACTION_FAILED`)}}async function Dr(e,t,n){if(Math.abs(e.currentTime-t)>.05){try{e.currentTime=t}catch{throw Error(`FRAME_EXTRACTION_UNSEEKABLE`)}try{await vr(e,`seeked`)}catch{throw Error(`FRAME_EXTRACTION_UNSEEKABLE`)}}return await yr(e),{timestamp:t,dataUrl:Er(e,n)}}async function Or(e,t={}){let n=t.mode??`standard`,r=Sr(n),i=e.currentTime||0,a=e.paused,o=[],s=!1,c=!1;try{await yr(e),e.pause();let t=await br(e,_r)&&Number.isFinite(e.duration)&&e.duration>0?Cr(e.duration,xr(e.duration,n)):Tr(e);for(let n of t)try{o.push(await Dr(e,n,r))}catch(e){if(!(e instanceof Error))continue;if(e.message===`FRAME_EXTRACTION_BLOCKED`){s=!0;break}e.message===`FRAME_EXTRACTION_UNSEEKABLE`&&(c=!0)}if(o.length>0)return o;throw Error(s?`FRAME_EXTRACTION_BLOCKED`:c?`此视频无法通过跳转来提取帧。`:`无法从该视频提取帧。网站可能因 CORS 或流媒体限制阻止了视频访问。`)}catch(e){throw e instanceof Error&&e.message===`FRAME_EXTRACTION_BLOCKED`?Error(`无法直接分析此视频，因为网站阻止了帧提取。请尝试其他本地视频文件。`):Error(e instanceof Error?e.message:`无法从该视频提取帧。请尝试其他本地视频文件。`)}finally{try{Math.abs(e.currentTime-i)>.05&&(e.currentTime=i)}catch{}if(a)e.pause();else try{await e.play()}catch{}}}function kr(e=f){return{mediaSource:{kind:`none`},isAnalyzingLocal:!1,resultMode:`empty`,resultText:`结果将在此呈现`,streamText:``,rawResultText:``,promptResult:null,resultMediaType:`image`,displayFormat:`json`,copyLabel:`复制`,uploadError:null,isExpanded:!1,analysisState:{phase:`idle`,statusText:`结果将在此呈现`,targetModel:e,tabId:null,updatedAt:Date.now()},editedResultText:null}}var Ar={fast:{label:`快速`,description:`更少帧数，速度更快，适合快速预览。`},standard:{label:`标准`,description:`速度与质量均衡，适合大多数视频。`},detailed:{label:`详细`,description:`更多帧数，适合复杂运动或深度分析。`}},jr=`image/jpeg,image/png,image/webp,image/gif,image/bmp,image/svg+xml`,Mr=`video/mp4,video/webm,video/ogg,video/quicktime,video/x-msvideo`,Nr=new Set(jr.split(`,`)),Pr=new Set(Mr.split(`,`));function Fr(e,t){return{found:!0,duration:Number.isFinite(e.duration)?e.duration:void 0,currentTime:e.currentTime,videoWidth:e.videoWidth||void 0,videoHeight:e.videoHeight||void 0,src:t,pageTitle:`本地上传`,pageUrl:`local://upload`}}function Ir(e,t){return{found:!0,imageWidth:e.naturalWidth||void 0,imageHeight:e.naturalHeight||void 0,src:t,pageTitle:`本地上传`,pageUrl:`local://upload`}}async function Lr(e){if(e)try{let t=new Image;t.src=e,await new Promise((e,n)=>{t.onload=()=>e(),t.onerror=()=>n(Error(`无法加载缩略图。`))});let n=Math.min(1,320/t.width),r=document.createElement(`canvas`);r.width=Math.max(1,Math.round(t.width*n)),r.height=Math.max(1,Math.round(t.height*n));let i=r.getContext(`2d`);return i?(i.drawImage(t,0,0,r.width,r.height),r.toDataURL(`image/jpeg`,.68)):e}catch{return e}}function Rr(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function zr(e){return new Intl.DateTimeFormat(void 0,{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`}).format(e)}function Br(e){if(e.kind===`local-video`&&e.videoInfo?.videoWidth&&e.videoInfo?.videoHeight)return`${e.videoInfo.videoWidth} / ${e.videoInfo.videoHeight}`;if(e.kind===`local-image`&&e.imageInfo?.imageWidth&&e.imageInfo?.imageHeight||e.kind===`web-image`&&e.imageInfo?.imageWidth&&e.imageInfo?.imageHeight)return`${e.imageInfo.imageWidth} / ${e.imageInfo.imageHeight}`}function Vr(e){return e.phase===`error`&&(e.errorMessage??e.statusText).toLowerCase().includes(`api key required`)}var $=h();function Hr(){let[e,n]=(0,X.useState)(p),[o,s]=(0,X.useState)([]),[f,h]=(0,X.useState)(null),[_,v]=(0,X.useState)({image:kr(),video:kr()}),[y,b]=(0,X.useState)(`image`),[x,S]=(0,X.useState)(`main`),[C,w]=(0,X.useState)(null),[T,ee]=(0,X.useState)(`video`),[E,te]=(0,X.useState)(``),[D,O]=(0,X.useState)(`empty`),[k,ne]=(0,X.useState)(`增强结果将在此呈现`),[re,A]=(0,X.useState)(`复制`),[j,M]=(0,X.useState)(!1),[N,P]=(0,X.useState)(null),[F,ie]=(0,X.useState)(null),[I,ae]=(0,X.useState)(``),oe=(0,X.useRef)(null),se=(0,X.useRef)(null),L=(0,X.useRef)({image:null,video:null}),R=(0,X.useRef)({image:null,video:null}),z=(0,X.useRef)(null),B=(0,X.useRef)(null),V=(0,X.useRef)(null);function H(e,t){v(n=>({...n,[e]:{...n[e],...t}}))}let U=y===`video`?`video`:`image`,W=_[U],G=d(e),ce=G!==null&&G.apiKey.trim().length>0&&G.modelName.trim().length>0&&(G.providerType===`gemini`||G.baseUrl.trim().length>0),K=W.mediaSource.kind!==`none`,q=W.isAnalyzingLocal||W.analysisState.phase===`detecting`||W.analysisState.phase===`extracting`||W.analysisState.phase===`analyzing`,le=K&&!q,ue=W.resultMode===`text`&&W.resultText.trim().length>0,de=E.trim().length>0&&!j,fe=D===`text`&&k.trim().length>0,pe=(0,X.useMemo)(()=>W.resultMode!==`text`||!W.promptResult?W.resultText:W.editedResultText===null?W.rawResultText:W.editedResultText,[W.resultMode,W.promptResult,W.rawResultText,W.resultText,W.editedResultText]);(0,X.useEffect)(()=>{(async()=>{let[e,t]=await Promise.all([r(),m()]);n(e),s(t);let i=await chrome.runtime.sendMessage({type:`VIDEO2PROMPT_GET_PANEL_CONTEXT`});h(i.activeTabId),i.state?he(i.state):(Y(`image`),Y(`video`))})();let e=e=>{if(e.type===`VIDEO2PROMPT_ANALYSIS_STATE_UPDATED`){he(e.state),e.state.tabId&&h(e.state.tabId);return}e.type===`VIDEO2PROMPT_FOCUS_API_KEY`&&S(`settings`)},t=(e,t)=>{if(t===`local`){if(e[`video2prompt:settings`]){let t=e[`video2prompt:settings`].newValue;n({...p,...t??{}})}e[`video2prompt:history`]&&s(e[`video2prompt:history`].newValue??[])}};return chrome.runtime.onMessage.addListener(e),chrome.storage.onChanged.addListener(t),()=>{chrome.runtime.onMessage.removeListener(e),chrome.storage.onChanged.removeListener(t);for(let e of[`image`,`video`])L.current[e]&&(URL.revokeObjectURL(L.current[e]),L.current[e]=null);V.current&&window.clearTimeout(V.current)}},[]);function J(e){w(e),V.current&&window.clearTimeout(V.current),V.current=window.setTimeout(()=>w(null),1800)}async function me(e){!e.promptText.trim()||B.current===e.dedupeKey||(B.current=e.dedupeKey,s(await i({id:Rr(),createdAt:Date.now(),sourceType:e.sourceType,mediaType:e.mediaType,sourceUrl:e.sourceUrl,pageTitle:e.pageTitle,thumbnailDataUrl:await Lr(e.thumbnailDataUrl),promptText:e.promptText,videoSummary:e.videoSummary,promptResult:e.promptResult})))}function he(e){let t=Vr(e),n=e.mediaType===`video`?`video`:`image`;if(H(n,{analysisState:e}),S(t?`settings`:`main`),e.mediaType===`image`&&(e.previewFrameUrl||e.imageInfo)&&(H(n,{mediaSource:{kind:`web-image`,previewUrl:e.previewFrameUrl,imageInfo:e.imageInfo}}),b(`image`)),e.phase===`generated`&&e.generatedPrompt){H(n,{resultMode:`text`,resultText:e.generatedPrompt,rawResultText:e.rawResult??``,promptResult:e.promptResult??null,resultMediaType:e.mediaType??`image`,displayFormat:`json`,copyLabel:`复制`}),me({sourceType:e.sourceType??`web`,mediaType:e.mediaType??`image`,sourceUrl:e.imageInfo?.pageUrl??e.imageInfo?.src,pageTitle:e.imageInfo?.pageTitle,thumbnailDataUrl:e.previewFrameUrl,promptText:e.generatedPrompt,videoSummary:e.mediaType===`video`?e.videoSummary:e.imageSummary,promptResult:e.promptResult,dedupeKey:`${e.sourceType??`web`}:${e.mediaType??`image`}:${e.updatedAt}:${e.generatedPrompt}`});return}if(e.phase===`error`){if(t){Y(n);return}H(n,{resultMode:`error`,resultText:e.errorMessage??e.statusText});return}if(e.phase===`detecting`||e.phase===`extracting`||e.phase===`analyzing`){let t=e.streamProgress;H(n,{resultMode:`loading`,resultText:t||`正在识别中...`,streamText:t||``});return}e.phase===`ready`&&!e.generatedPrompt&&Y(n)}function Y(e){H(e,{resultMode:`empty`,resultText:`结果将在此呈现`,streamText:``,rawResultText:``,promptResult:null,copyLabel:`复制`,editedResultText:null,isExpanded:!1})}async function ge(){if(!ce){S(`settings`);return}if(!K||q)return;let t=U,n=_[t].mediaSource;Y(t),H(t,{resultMode:`loading`,resultText:`正在识别中...`});let r=new AbortController;if(R.current[t]=r,n.kind===`web-image`){let e=await chrome.runtime.sendMessage({type:`VIDEO2PROMPT_START_ANALYSIS`,tabId:f??void 0,imageUrl:n.imageInfo?.src,triggeredFrom:`sidePanel`});e?.state&&he(e.state),R.current[t]=null;return}if(n.kind===`local-video`){H(t,{isAnalyzingLocal:!0});try{let i=await Qn(n.objectUrl),a=Fr(i,n.fileName),o=await Or(i,{mode:e.frameSamplingMode}),s=await mr({apiKey:G.apiKey,baseUrl:G.baseUrl,modelName:G.modelName,providerType:G.providerType,targetModel:e.targetModel,frames:o,videoInfo:a,signal:r.signal}),c=u(f,`generated`,`识别完成`,e.targetModel,{mediaType:`video`,sourceType:`local`,videoInfo:a,previewFrameUrl:o[0]?.dataUrl,keyframeCount:o.length,...s,promptResult:s.promptResult});H(t,{mediaSource:{kind:`local-video`,objectUrl:n.objectUrl,fileName:n.fileName,videoInfo:a},analysisState:c,resultMode:`text`,resultText:s.generatedPrompt,rawResultText:s.rawResult,promptResult:s.promptResult,resultMediaType:`video`,displayFormat:`json`,isAnalyzingLocal:!1}),await me({sourceType:`local`,mediaType:`video`,sourceUrl:a.src,pageTitle:a.pageTitle,thumbnailDataUrl:o[0]?.dataUrl,promptText:s.generatedPrompt,videoSummary:s.videoSummary,promptResult:s.promptResult,dedupeKey:`local:${c.updatedAt}:${s.generatedPrompt}`})}catch(n){if(n instanceof DOMException&&n.name===`AbortError`){Y(t),H(t,{isAnalyzingLocal:!1});return}let r=n instanceof Error?n.message:`无法从该视频提取帧。`;H(t,{analysisState:u(f,`error`,r,e.targetModel,{errorMessage:r}),resultMode:`error`,resultText:r,isAnalyzingLocal:!1})}finally{R.current[t]=null}}if(n.kind===`local-image`){H(t,{isAnalyzingLocal:!0,streamText:``});try{let[i,a]=await Promise.all([Zn(n.objectUrl),er(n.file)]),o=Ir(i,n.fileName),s=await hr({apiKey:G.apiKey,baseUrl:G.baseUrl,modelName:G.modelName,providerType:G.providerType,targetModel:e.targetModel,imageDataUrl:a,imageInfo:o,signal:r.signal,onProgress:e=>{H(t,{streamText:e,resultText:e})}}),c=u(f,`generated`,`识别完成`,e.targetModel,{mediaType:`image`,sourceType:`local`,imageInfo:o,previewFrameUrl:a,...s,promptResult:s.promptResult});H(t,{mediaSource:{kind:`local-image`,objectUrl:n.objectUrl,fileName:n.fileName,file:n.file,imageInfo:o},analysisState:c,resultMode:`text`,resultText:s.generatedPrompt,rawResultText:s.rawResult,promptResult:s.promptResult,resultMediaType:`image`,displayFormat:`json`,isAnalyzingLocal:!1}),await me({sourceType:`local`,mediaType:`image`,sourceUrl:o.src,pageTitle:o.pageTitle,thumbnailDataUrl:a,promptText:s.generatedPrompt,videoSummary:s.imageSummary,promptResult:s.promptResult,dedupeKey:`local:image:${c.updatedAt}:${s.generatedPrompt}`})}catch(n){if(n instanceof DOMException&&n.name===`AbortError`){Y(t),H(t,{isAnalyzingLocal:!1});return}let r=n instanceof Error?n.message:`无法分析此图片，请尝试其他文件。`;H(t,{analysisState:u(f,`error`,r,e.targetModel,{mediaType:`image`,sourceType:`local`,errorMessage:r}),resultMode:`error`,resultText:r,isAnalyzingLocal:!1})}finally{R.current[t]=null}}}async function _e(){if(q)return;let t=U;L.current[t]&&(URL.revokeObjectURL(L.current[t]),L.current[t]=null),f&&await chrome.runtime.sendMessage({type:`VIDEO2PROMPT_CLEAR_ACTIVE_ANALYSIS`,tabId:f}),H(t,{mediaSource:{kind:`none`},analysisState:u(f,`idle`,`结果将在此呈现`,e.targetModel),uploadError:null}),Y(t)}function ve(){let e=U;R.current[e]&&(R.current[e].abort(),R.current[e]=null)}function ye(){H(U,{uploadError:null}),y===`image`?oe.current?.click():y===`video`&&se.current?.click()}async function be(t,n){L.current[n]&&URL.revokeObjectURL(L.current[n]);let r=URL.createObjectURL(t);if(L.current[n]=r,t.type.startsWith(`image/`)){let i=Ir(await Zn(r),t.name);H(n,{mediaSource:{kind:`local-image`,objectUrl:r,fileName:t.name,file:t,imageInfo:i},analysisState:u(f,`ready`,`图片已就绪`,e.targetModel,{mediaType:`image`,sourceType:`local`,imageInfo:i,previewFrameUrl:r})})}else{let i=Fr(await Qn(r),t.name);H(n,{mediaSource:{kind:`local-video`,objectUrl:r,fileName:t.name,videoInfo:i},analysisState:u(f,`ready`,`视频已就绪`,e.targetModel,{mediaType:`video`,sourceType:`local`,videoInfo:i})})}Y(n)}async function xe(e,t){let n=e.target.files?.[0];if(!n)return;let r=t;if(t===`image`&&!Nr.has(n.type)){H(r,{uploadError:`请上传图片文件（JPG / PNG / WebP / GIF / BMP / SVG）`}),e.target.value=``;return}if(t===`video`&&!Pr.has(n.type)){H(r,{uploadError:`请上传视频文件（MP4 / WebM / OGG / MOV / AVI）`}),e.target.value=``;return}H(r,{uploadError:null}),await be(n,r),e.target.value=``}async function Se(e,t){let n=t;if(H(n,{uploadError:null}),t===`image`&&!Nr.has(e.type)){H(n,{uploadError:`请上传图片文件（JPG / PNG / WebP / GIF / BMP / SVG）`});return}if(t===`video`&&!Pr.has(e.type)){H(n,{uploadError:`请上传视频文件（MP4 / WebM / OGG / MOV / AVI）`});return}await be(e,n)}async function Ce(){if(!ue)return;let e=U,t=_[e],n=t.editedResultText===null?pe:t.editedResultText;try{await navigator.clipboard.writeText(n),H(e,{copyLabel:`已复制`}),window.setTimeout(()=>H(e,{copyLabel:`复制`}),1600)}catch{H(e,{copyLabel:`复制`})}}function we(e){return e.promptResult?JSON.stringify(e.promptResult,null,2):e.promptText}async function Te(e){try{await navigator.clipboard.writeText(we(e)),P(e.id),window.setTimeout(()=>{P(t=>t===e.id?null:t)},1600)}catch{P(null)}}function Ee(e){return e.sourceType===`enhancer`?`提示词增强`:e.mediaType===`video`?`视频识词`:`图片识词`}async function De(e){s(await t(e.id))}function Oe(e){ie(e.id),ae(we(e))}function ke(){ie(null),ae(``)}async function Z(){try{await navigator.clipboard.writeText(I),P(`edit`),window.setTimeout(()=>{P(e=>e===`edit`?null:e)},1600)}catch{}}async function Ae(e){n(await a(e)),J(`已切换模型`)}async function je(t){await g([...e.models,t]),n(await a(t.id)),J(`模型已添加`)}async function Me(t){n(await g(e.models.map(e=>e.id===t.id?t:e))),J(`模型已更新`)}async function Ne(e){window.confirm(`确定删除此模型配置吗？`)&&(n(await c(e)),J(`模型已删除`))}async function Pe(t){e.frameSamplingMode!==t&&(n(await l(t)),J(`帧采样模式已保存`))}function Fe(){O(`empty`),ne(`增强结果将在此呈现`),A(`复制`)}async function Ie(){if(!E.trim()||j)return;if(!ce){S(`settings`);return}M(!0),O(`loading`),ne(`正在增强中...`),A(`复制`);let e=new AbortController;z.current=e;try{let t=await gr({apiKey:G.apiKey,baseUrl:G.baseUrl,modelName:G.modelName,providerType:G.providerType,mode:T,idea:E,signal:e.signal});O(`text`),ne(t),await me({sourceType:`enhancer`,mediaType:T,sourceUrl:`prompt-enhancer://${T}`,pageTitle:T===`video`?`视频提示词增强`:`图片提示词增强`,promptText:t,videoSummary:E.trim(),dedupeKey:`enhancer:${T}:${t}`})}catch(e){if(e instanceof DOMException&&e.name===`AbortError`){Fe();return}let t=e instanceof Error?e.message:`无法增强此提示词，请重试。`;O(`error`),ne(t)}finally{M(!1),z.current=null}}function Le(){z.current&&=(z.current.abort(),null)}async function Re(){if(fe)try{await navigator.clipboard.writeText(k),A(`已复制`),window.setTimeout(()=>A(`复制`),1600)}catch{A(`复制`)}}function ze(e){b(e),S(`main`)}return{state:{settings:e,historyItems:o,activeTabId:f,ivTabData:_,activeTab:y,subView:x,statusMessage:C,enhancerMode:T,enhancerInput:E,enhancerResultMode:D,enhancerResultText:k,enhancerCopyLabel:re,isEnhancingPrompt:j,copiedHistoryId:N,editingCardId:F,editingText:I,currentIVTab:U,currentData:W,hasApiKey:ce,hasMedia:K,isAnalyzing:q,canAnalyze:le,showCopy:ue,canEnhancePrompt:de,showEnhancerCopy:fe,displayResultText:pe,currentMediaPreview:(0,X.useMemo)(()=>{let e=W.mediaSource;return e.kind===`web-image`&&e.previewUrl?(0,$.jsx)(`img`,{src:e.previewUrl,alt:`图片预览`,className:`video-preview-media`}):e.kind===`local-video`?(0,$.jsx)(`video`,{className:`video-preview-media`,src:e.objectUrl,muted:!0,playsInline:!0,preload:`metadata`}):e.kind===`local-image`?(0,$.jsx)(`img`,{src:e.objectUrl,alt:`图片预览`,className:`video-preview-media`}):e.kind===`web-image`?(0,$.jsx)(`div`,{className:`video-preview-placeholder`}):null},[W.mediaSource]),currentMediaAspectRatio:(0,X.useMemo)(()=>Br(W.mediaSource),[W.mediaSource])},refs:{imageFileRef:oe,videoFileRef:se},actions:{setActiveTab:b,setSubView:S,setEnhancerMode:ee,setEnhancerInput:te,setEditingText:ae,updateIVTab:H,handleAnalyze:ge,handleClear:_e,handleAbort:ve,handleUploadClick:ye,handleLocalUpload:xe,handleFileDrop:Se,handleCopy:Ce,handleCopyHistory:Te,getHistoryTypeLabel:Ee,handleDeleteHistory:De,handleEditStart:Oe,handleEditClose:ke,handleEditCopy:Z,handleSelectModel:Ae,handleAddModel:je,handleUpdateModel:Me,handleDeleteModel:Ne,handleFrameSamplingModeChange:Pe,resetEnhancerResult:Fe,handleEnhancePrompt:Ie,handleAbortEnhancer:Le,handleCopyEnhancerResult:Re,handleTabChange:ze}}}function Ur(e,t){let n=(0,X.useRef)(null);return(0,X.useEffect)(()=>{if(!e)return;function r(e){n.current&&!n.current.contains(e.target)&&t()}return document.addEventListener(`mousedown`,r),()=>document.removeEventListener(`mousedown`,r)},[e,t]),n}function Wr(){return(0,$.jsx)(`span`,{className:`mini-spinner`,"aria-hidden":`true`})}function Gr(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tab-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`rect`,{x:`3`,y:`5`,width:`18`,height:`14`,rx:`2`}),(0,$.jsx)(`circle`,{cx:`8.5`,cy:`10.5`,r:`1.5`}),(0,$.jsx)(`path`,{d:`M21 15l-5-5L5 19`})]})}function Kr(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tab-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`rect`,{x:`2`,y:`4`,width:`15`,height:`16`,rx:`2`}),(0,$.jsx)(`path`,{d:`M17 8l5-3v14l-5-3`})]})}function qr(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tab-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M15 4V2`}),(0,$.jsx)(`path`,{d:`M15 16v-2`}),(0,$.jsx)(`path`,{d:`M8 9h2`}),(0,$.jsx)(`path`,{d:`M20 9h2`}),(0,$.jsx)(`path`,{d:`M17.8 11.8L19 13`}),(0,$.jsx)(`path`,{d:`M15 9h.01`}),(0,$.jsx)(`path`,{d:`M17.8 6.2L19 5`}),(0,$.jsx)(`path`,{d:`m3 21 9-9`}),(0,$.jsx)(`path`,{d:`m12.2 6.2 1.4-1.4`})]})}function Jr(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`rect`,{x:`9`,y:`9`,width:`11`,height:`11`,rx:`2`}),(0,$.jsx)(`path`,{d:`M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1`})]})}function Yr(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M3 6h18`}),(0,$.jsx)(`path`,{d:`M8 6V4h8v2`}),(0,$.jsx)(`path`,{d:`M19 6l-1 14H6L5 6`}),(0,$.jsx)(`path`,{d:`M10 11v6`}),(0,$.jsx)(`path`,{d:`M14 11v6`})]})}function Xr(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,$.jsx)(`path`,{d:`M12 7v5l3 2`})]})}function Zr({expanded:e}){return e?(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M4 14h6v6`}),(0,$.jsx)(`path`,{d:`M20 10h-6V4`}),(0,$.jsx)(`path`,{d:`M14 10l7-7`}),(0,$.jsx)(`path`,{d:`M3 21l7-7`})]}):(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M15 3h6v6`}),(0,$.jsx)(`path`,{d:`M9 21H3v-6`}),(0,$.jsx)(`path`,{d:`M21 3l-7 7`}),(0,$.jsx)(`path`,{d:`M3 21l7-7`})]})}function Qr(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`rect`,{x:`3`,y:`6`,width:`13`,height:`12`,rx:`2`}),(0,$.jsx)(`path`,{d:`M16 10l5-3v10l-5-3`})]})}function $r(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`rect`,{x:`3`,y:`5`,width:`18`,height:`14`,rx:`2`}),(0,$.jsx)(`circle`,{cx:`9`,cy:`10`,r:`1.5`}),(0,$.jsx)(`path`,{d:`M21 15l-4.2-4.2a1.4 1.4 0 0 0-2 0L9 16.5`})]})}function ei(){return(0,$.jsx)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,$.jsx)(`path`,{d:`M17 3a2.83 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5Z`})})}function ti(){return(0,$.jsx)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,$.jsx)(`polyline`,{points:`20 6 9 17 4 12`})})}function ni(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M18 6 6 18`}),(0,$.jsx)(`path`,{d:`M6 6l12 12`})]})}function ri(){return(0,$.jsx)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,$.jsx)(`path`,{d:`M15 18L9 12L15 6`})})}function ii(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`placeholder-sparkle`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,$.jsx)(`path`,{d:`M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z`,fill:`currentColor`}),(0,$.jsx)(`path`,{d:`M18.4 3.8L19 5.4L20.6 6L19 6.6L18.4 8.2L17.8 6.6L16.2 6L17.8 5.4L18.4 3.8Z`,fill:`currentColor`})]})}var ai=Dn.section`
  background: var(--glass-bg);
  -webkit-backdrop-filter: var(--glass-blur);
  backdrop-filter: var(--glass-blur);
  border-radius: var(--radius-xl);
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px dashed rgba(0, 0, 0, 0.2);
  box-shadow: var(--glass-shadow), var(--glass-inner-shadow), inset 0 2px 12px rgba(0, 0, 0, 0.03);
  overflow: visible;
  position: relative;
  transition: all var(--duration-normal) var(--ease-out);
  min-height: 260px;
  max-height: 320px;

  &.is-drag-over {
    border-color: var(--glass-border-hover);
    border-style: solid;
    box-shadow: var(--glass-shadow-hover), var(--glass-inner-shadow), inset 0 2px 16px rgba(0, 0, 0, 0.06);
    transform: scale(1.005);
  }

  .upload-label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: var(--space-5) var(--space-6);
    box-sizing: border-box;
    flex: 1;
    min-height: 0;
  }

  .upload-design {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    width: 100%;
  }

  .upload-design svg {
    margin-bottom: var(--space-2);
    flex-shrink: 0;
  }

  .upload-title {
    font-size: var(--text-base);
    font-weight: var(--font-medium);
    color: var(--text-primary);
    margin: 0;
  }

  .upload-or {
    font-size: var(--text-xs);
    color: var(--text-tertiary);
    margin: var(--space-1) 0;
  }

  .upload-hint {
    font-size: var(--text-xxs);
    color: var(--text-tertiary);
    margin: var(--space-3) 0 0;
  }

  .upload-error {
    color: var(--danger);
    font-size: var(--text-xs);
    margin: var(--space-2) 0 0;
    text-align: center;
  }

  .upload-preview {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    overflow: hidden;
    padding: var(--space-3);
    box-sizing: border-box;
    min-height: 0;

    img, video {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      display: block;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &.is-expanded {
    max-height: 120px;
    min-height: 80px;

    .upload-preview {
      padding: var(--space-1);
      img, video {
        max-height: 60px;
        min-height: 60px;
        max-width: 80px;
      }
    }

    .upload-actions {
      padding: var(--space-1) var(--space-3);
      gap: var(--space-2);

      .btn-primary, .btn-secondary {
        font-size: var(--text-xs);
        padding: 4px 10px;
        height: auto;
      }
    }
  }

  .upload-actions {
    display: flex;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-5);
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
    flex-shrink: 0;
  }

  .upload-hint-warn {
    font-size: var(--text-xs);
    color: var(--danger);
    text-align: center;
    padding: 0 var(--space-5) var(--space-4);
    margin: 0;
  }
`;function oi({mode:e,tabData:t,isAnalyzing:n,canAnalyze:r,hasApiKey:i,displayResultText:a,showCopy:o,currentMediaPreview:s,currentMediaAspectRatio:c,frameSamplingMode:l,onUploadClick:u,onAnalyze:d,onClear:f,onAbort:p,onCopy:m,onEditResult:h,onToggleExpanded:g,onFrameSamplingModeChange:_,onFileDrop:v}){let y=e===`image`,b=y?`图片`:`视频`,x=y?`JPG / PNG / WebP / GIF`:`MP4 / WebM / MOV`,S=y?Nr:Pr,C=t.isExpanded,[w,T]=(0,X.useState)(!1),ee=Ur(w,()=>T(!1)),[E,te]=(0,X.useState)(!1),[D,O]=(0,X.useState)(!1);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(ai,{className:`${D?`is-drag-over`:``} ${C?`is-expanded`:``}`,children:t.mediaSource.kind===`none`?(0,$.jsxs)(`label`,{className:`upload-label`,onClick:u,role:`button`,tabIndex:0,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&u()},onDragOver:e=>{e.preventDefault(),e.stopPropagation(),O(!0)},onDragLeave:e=>{e.preventDefault(),e.stopPropagation(),O(!1)},onDrop:e=>{e.preventDefault(),e.stopPropagation(),O(!1);let t=e.dataTransfer.files?.[0];t&&S.has(t.type)&&v&&v(t)},children:[(0,$.jsxs)(`div`,{className:`upload-design`,children:[(0,$.jsx)(`svg`,{height:`36`,viewBox:`0 0 640 512`,fill:`rgb(82, 82, 82)`,children:(0,$.jsx)(`path`,{d:`M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z`})}),(0,$.jsxs)(`p`,{className:`upload-title`,children:[`拖拽`,b,`到此处`]}),(0,$.jsx)(`p`,{className:`upload-or`,children:`或`}),(0,$.jsx)(`span`,{className:`btn-primary`,children:`选择文件`}),(0,$.jsxs)(`p`,{className:`upload-hint`,children:[`支持 `,x,` 等格式`]})]}),t.uploadError?(0,$.jsx)(`p`,{className:`upload-error`,children:t.uploadError}):null]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`upload-preview`,style:c?{aspectRatio:c}:void 0,children:s}),(0,$.jsxs)(`div`,{className:`upload-actions`,children:[(0,$.jsx)(`button`,{className:`btn-primary ${n?`btn-primary--busy`:``}`,onClick:d,disabled:!r,children:n?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Wr,{}),`识别中`]}):t.resultMode===`text`?`重新生成`:`生成`}),(0,$.jsx)(`button`,{className:`btn-secondary`,onClick:f,disabled:n,children:`清除`}),n?(0,$.jsx)(`button`,{className:`btn-secondary`,onClick:p,children:`中止`}):null]}),i?null:(0,$.jsx)(`p`,{className:`upload-hint-warn`,children:`请先在设置中配置模型信息`})]})}),!y&&l&&_?(0,$.jsxs)(`div`,{className:`frame-sampling-row`,children:[(0,$.jsxs)(`div`,{className:`frame-sampling-header`,children:[(0,$.jsx)(`span`,{className:`frame-sampling-title`,children:`帧采样`}),(0,$.jsx)(`button`,{type:`button`,className:`frame-sampling-info-btn`,onMouseEnter:()=>te(!0),onMouseLeave:()=>te(!1),children:(0,$.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,$.jsx)(`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`}),(0,$.jsx)(`line`,{x1:`12`,y1:`17`,x2:`12.01`,y2:`17`})]})}),E?(0,$.jsx)(`div`,{className:`frame-sampling-tooltip`,children:`选择帧采样方式，控制从视频中提取的帧数量和策略`}):null]}),(0,$.jsxs)(`div`,{className:`frame-sampling-dropdown`,ref:ee,children:[(0,$.jsxs)(`button`,{type:`button`,className:`frame-sampling-trigger ${w?`is-open`:``}`,onClick:()=>T(e=>!e),children:[(0,$.jsx)(`span`,{className:`frame-sampling-label`,children:Ar[l].label}),(0,$.jsx)(`svg`,{className:`frame-sampling-chevron`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,$.jsx)(`path`,{d:`M6 9l6 6 6-6`})})]}),w?(0,$.jsx)(`div`,{className:`frame-sampling-menu`,children:Object.keys(Ar).map(e=>(0,$.jsxs)(`button`,{type:`button`,className:`frame-sampling-opt ${l===e?`is-selected`:``}`,onClick:()=>{_(e),T(!1)},children:[(0,$.jsx)(`span`,{className:`frame-sampling-opt-label`,children:Ar[e].label}),(0,$.jsx)(`span`,{className:`frame-sampling-opt-desc`,children:Ar[e].description})]},e))}):null]})]}):null,(0,$.jsxs)(`section`,{className:`result-card ${C?`result-card--expanded`:``}`,children:[(0,$.jsxs)(`div`,{className:`result-card-head`,children:[(0,$.jsx)(`span`,{className:`result-card-title`,children:`识别结果`}),t.resultMode===`text`?(0,$.jsxs)(`div`,{className:`result-card-actions`,children:[o?(0,$.jsx)(`button`,{className:`result-copy-icon-btn${t.copyLabel===`已复制`?` is-copied`:``}`,onClick:m,title:t.copyLabel===`已复制`?`已复制`:`复制`,children:t.copyLabel===`已复制`?(0,$.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,$.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}):(0,$.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,ry:`2`}),(0,$.jsx)(`path`,{d:`M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1`})]})}):null,(0,$.jsx)(`button`,{className:`result-expand-btn`,onClick:g,title:C?`收起`:`展开`,children:(0,$.jsx)(Zr,{expanded:C})})]}):null]}),(0,$.jsxs)(`div`,{className:`result-card-body result-body-${t.resultMode}`,children:[t.resultMode===`loading`?(0,$.jsxs)(`div`,{className:`result-loading`,children:[(0,$.jsx)(Wr,{}),t.streamText?(0,$.jsx)(`pre`,{className:`result-stream-text`,children:t.streamText}):null]}):null,t.resultMode===`empty`?(0,$.jsxs)(`div`,{className:`result-empty`,children:[(0,$.jsx)(ii,{}),(0,$.jsxs)(`p`,{children:[`上传`,b,`后点击生成，结果将在此呈现`]})]}):null,t.resultMode===`error`?(0,$.jsx)(`div`,{className:`result-error-state`,children:(0,$.jsx)(`p`,{children:t.resultText})}):null,t.resultMode===`text`?(0,$.jsx)(`textarea`,{className:`result-edit-area`,value:a,onChange:e=>h(e.target.value),spellCheck:!1}):null]})]})]})}var si=Dn.section`
  position: relative;
  border-radius: var(--radius-xl);
  background: var(--glass-bg);
  -webkit-backdrop-filter: var(--glass-blur);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow), var(--glass-inner-shadow);
  padding: var(--space-4);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all var(--duration-normal) var(--ease-out);

  &:hover {
    box-shadow: var(--glass-shadow-hover), var(--glass-inner-shadow);
  }

  .enhancer-mode-pills {
    display: flex;
    gap: 0;
    padding: 0;
    border-radius: 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--glass-border);
    margin-bottom: var(--space-3);
    width: 100%;
  }

  .enhancer-pill {
    min-height: 32px;
    border: none;
    border-bottom: 2px solid transparent;
    border-radius: 0;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    font-size: var(--text-xxs);
    font-weight: var(--font-medium);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 0 var(--space-3) var(--space-2);
    transition: all var(--duration-fast) var(--ease-out);
    flex: 1;

    svg {
      width: 14px;
      height: 14px;
    }

    &:hover {
      color: var(--text-primary);
    }
  }

  .enhancer-pill--active {
    color: var(--text-primary);
    background: transparent;
    box-shadow: none;
    border-bottom: 2px solid var(--accent);
    border-left: none;
    border-right: none;
    border-top: none;

    &:hover {
      color: var(--text-primary);
    }
  }

  .enhancer-input-wrap {
    display: grid;
    gap: var(--space-1);
    width: 100%;
  }

  .enhancer-textarea {
    width: 100%;
    min-height: 200px;
    resize: vertical;
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-md);
    background: var(--bg-input);
    color: var(--text-primary);
    padding: var(--space-3);
    font-size: var(--text-sm);
    line-height: 1.7;
    outline: none;
    transition: border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);
    font-family: inherit;
    box-sizing: border-box;
    will-change: height;
    contain: content;

    &::placeholder {
      color: var(--text-placeholder);
    }

    &:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px var(--accent-glow);
    }
  }

  .enhancer-action-row {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-3);
    margin-top: var(--space-12);
    width: 100%;
    padding-top: var(--space-5);
  }

  .upload-hint-warn {
    margin: var(--space-3) 0 0;
    color: var(--text-secondary);
    font-size: var(--text-xs);
    text-align: center;
  }
`;function ci({enhancerMode:e,enhancerInput:t,isEnhancingPrompt:n,canEnhancePrompt:r,hasApiKey:i,enhancerResultMode:a,enhancerResultText:o,enhancerCopyLabel:s,showEnhancerCopy:c,onSetEnhancerMode:l,onSetEnhancerInput:u,onEnhance:d,onAbortEnhancer:f,onCopyEnhancer:p}){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(si,{children:[(0,$.jsxs)(`div`,{className:`enhancer-mode-pills`,role:`tablist`,"aria-label":`增强器模式`,children:[(0,$.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":e===`video`,className:`enhancer-pill ${e===`video`?`enhancer-pill--active`:``}`,onClick:()=>l(`video`),children:[(0,$.jsx)(Qr,{}),(0,$.jsx)(`span`,{children:`视频`})]}),(0,$.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":e===`image`,className:`enhancer-pill ${e===`image`?`enhancer-pill--active`:``}`,onClick:()=>l(`image`),children:[(0,$.jsx)($r,{}),(0,$.jsx)(`span`,{children:`图片`})]})]}),(0,$.jsx)(`div`,{className:`enhancer-input-wrap`,children:(0,$.jsx)(`textarea`,{value:t,onChange:e=>u(e.target.value),placeholder:e===`video`?`描述你的视频创意，例如：一个女孩在雨中漫步，慢镜头，电影质感`:`描述你的图片创意，例如：一只金毛幼犬在草地上奔跑，阳光明媚`,rows:5,className:`enhancer-textarea`})}),n?(0,$.jsxs)(`div`,{className:`enhancer-action-row`,children:[(0,$.jsxs)(`button`,{className:`btn-primary btn-primary--busy`,disabled:!0,children:[(0,$.jsx)(Wr,{}),`增强中`]}),(0,$.jsx)(`button`,{className:`btn-secondary btn-secondary--danger`,onClick:f,children:`中止`})]}):(0,$.jsx)(`div`,{className:`enhancer-action-row`,children:(0,$.jsx)(`button`,{className:`btn-primary`,onClick:()=>void d(),disabled:!r,children:`增强`})}),i?null:(0,$.jsx)(`p`,{className:`upload-hint-warn`,children:`请先在设置中配置模型信息`})]}),(0,$.jsxs)(`section`,{className:`result-card`,children:[(0,$.jsxs)(`div`,{className:`result-card-head`,children:[(0,$.jsx)(`span`,{className:`result-card-title`,children:`增强结果`}),c?(0,$.jsx)(`button`,{className:`result-copy-btn`,onClick:()=>void p(),children:s}):null]}),(0,$.jsxs)(`div`,{className:`result-card-body result-body-${a}`,children:[a===`loading`?(0,$.jsxs)(`div`,{className:`result-loading`,children:[(0,$.jsx)(Wr,{}),(0,$.jsx)(`strong`,{children:`正在增强中...`})]}):null,a===`empty`?(0,$.jsxs)(`div`,{className:`result-empty`,children:[(0,$.jsx)(ii,{}),(0,$.jsx)(`p`,{children:`输入创意后点击增强，结果将在此呈现`})]}):null,a===`error`?(0,$.jsx)(`div`,{className:`result-error-state`,children:(0,$.jsx)(`p`,{children:o})}):null,a===`text`?(0,$.jsx)(`div`,{className:`result-text-block`,children:o}):null]})]})]})}function li({historyItems:e,copiedHistoryId:t,editingCardId:n,editingText:r,onBack:i,onCopyHistory:a,onDeleteHistory:o,onEditStart:s,onEditClose:c,onEditCopy:l,onEditingTextChange:u,getHistoryTypeLabel:d}){return(0,$.jsxs)(`section`,{className:`subview-screen`,children:[(0,$.jsx)(`div`,{className:`subview-topbar`,children:(0,$.jsxs)(`div`,{className:`subview-title-row`,children:[(0,$.jsx)(`button`,{className:`back-button back-button-box`,onClick:i,children:(0,$.jsx)(ri,{})}),(0,$.jsxs)(`div`,{className:`subview-title-group`,children:[(0,$.jsx)(`h2`,{className:`subview-title`,children:`历史记录`}),(0,$.jsx)(`p`,{className:`subview-subtitle`,children:`最近生成的记录`})]})]})}),(0,$.jsx)(`section`,{className:`history-panel`,children:e.length===0?(0,$.jsxs)(`div`,{className:`history-empty-state`,children:[(0,$.jsx)(`strong`,{children:`暂无历史记录`}),(0,$.jsx)(`p`,{children:`生成结果后会自动保存到这里`})]}):(0,$.jsx)(`div`,{className:`history-masonry`,children:e.map(e=>{let i=t===e.id,f=n===e.id,p=e.sourceType===`enhancer`,m=e.promptText||``,h=d(e);return(0,$.jsx)(`article`,{className:`history-card${f?` is-editing`:``}`,children:f?(0,$.jsxs)(`div`,{className:`history-card-edit-view`,children:[(0,$.jsxs)(`div`,{className:`history-card-edit-top`,children:[e.thumbnailDataUrl?(0,$.jsx)(`div`,{className:`history-card-edit-thumb`,children:(0,$.jsx)(`img`,{src:e.thumbnailDataUrl,alt:``})}):(0,$.jsx)(`div`,{className:`history-card-edit-thumb history-card-edit-thumb--placeholder`,children:p?(0,$.jsx)(qr,{}):e.mediaType===`video`?(0,$.jsx)(Kr,{}):(0,$.jsx)(Gr,{})}),(0,$.jsxs)(`div`,{className:`history-card-edit-info`,children:[(0,$.jsxs)(`span`,{className:`history-card-type-badge`,children:[p?(0,$.jsx)(qr,{}):e.mediaType===`video`?(0,$.jsx)(Kr,{}):(0,$.jsx)(Gr,{}),h]}),(0,$.jsxs)(`div`,{className:`history-card-date`,children:[(0,$.jsx)(Xr,{}),zr(e.createdAt)]})]})]}),(0,$.jsxs)(`div`,{className:`history-card-edit-prompt`,children:[(0,$.jsx)(`label`,{children:`提示词`}),(0,$.jsx)(`textarea`,{value:r,onChange:e=>u(e.target.value),rows:5})]}),(0,$.jsxs)(`div`,{className:`history-card-edit-actions`,children:[(0,$.jsx)(`button`,{className:`history-card-btn ${i?`history-card-btn--copied`:``}`,title:`复制`,onClick:l,children:i?(0,$.jsx)(ti,{}):(0,$.jsx)(Jr,{})}),(0,$.jsx)(`button`,{className:`history-card-btn history-card-btn--close`,title:`收起`,onClick:c,children:(0,$.jsx)(ni,{})})]})]}):(0,$.jsxs)(`div`,{className:`history-card-inner`,children:[(0,$.jsx)(`div`,{className:`history-card-front`,children:p?(0,$.jsx)(`div`,{className:`history-card-text`,children:(0,$.jsx)(`p`,{children:e.videoSummary||e.promptText})}):e.thumbnailDataUrl?(0,$.jsx)(`div`,{className:`history-card-media`,children:(0,$.jsx)(`img`,{src:e.thumbnailDataUrl,alt:``,loading:`lazy`})}):(0,$.jsx)(`div`,{className:`history-card-text`,children:(0,$.jsx)(`p`,{children:e.videoSummary||e.promptText})})}),(0,$.jsxs)(`div`,{className:`history-card-back`,children:[(0,$.jsx)(`div`,{className:`history-card-type-row`,children:(0,$.jsxs)(`span`,{className:`history-card-type-badge`,children:[p?(0,$.jsx)(qr,{}):e.mediaType===`video`?(0,$.jsx)(Kr,{}):(0,$.jsx)(Gr,{}),h]})}),(0,$.jsxs)(`div`,{className:`history-card-date`,children:[(0,$.jsx)(Xr,{}),zr(e.createdAt)]}),(0,$.jsx)(`p`,{className:`history-card-prompt`,children:m}),(0,$.jsxs)(`div`,{className:`history-card-actions`,children:[(0,$.jsx)(`button`,{className:`history-card-btn history-card-btn--edit`,title:`编辑`,onClick:t=>{t.stopPropagation(),s(e)},children:(0,$.jsx)(ei,{})}),(0,$.jsx)(`button`,{className:`history-card-btn ${i?`history-card-btn--copied`:``}`,title:`复制`,onClick:t=>{t.stopPropagation(),a(e)},children:i?(0,$.jsx)(ti,{}):(0,$.jsx)(Jr,{})}),(0,$.jsx)(`button`,{className:`history-card-btn history-card-btn--delete`,title:`删除`,onClick:t=>{t.stopPropagation(),o(e)},children:(0,$.jsx)(Yr,{})})]})]})]})},e.id)})})})]})}function ui({settings:e,onBack:t,onSelectModel:n,onAddModel:r,onUpdateModel:i,onDeleteModel:a}){d(e);let[s,c]=(0,X.useState)(!1),l=Ur(s,()=>c(!1)),[u,f]=(0,X.useState)(null),[p,m]=(0,X.useState)(``),[h,g]=(0,X.useState)(``),[_,v]=(0,X.useState)(`https://api.openai.com/v1`),[y,b]=(0,X.useState)(!1),[x,S]=(0,X.useState)(null),[C,w]=(0,X.useState)(null),[T,ee]=(0,X.useState)(``),[E,te]=(0,X.useState)(``),[D,O]=(0,X.useState)(`https://api.openai.com/v1`),[k,ne]=(0,X.useState)(!1),[re,A]=(0,X.useState)(null);function j(e){c(!1),S(null),f(e),m(``),g(``),v(`https://api.openai.com/v1`),b(!1),w(null)}function M(){f(null),S(null)}function N(){if(u){if(!p.trim()){S(`请填写模型名称`);return}if(!h.trim()){S(`请填写 API 密钥`);return}if(u===`openai`&&!_.trim()){S(`请填写接口地址`);return}S(null),r({id:crypto.randomUUID(),name:p.trim()||`未命名`,providerType:u,apiKey:h.trim(),baseUrl:u===`openai`?_.trim()||`https://api.openai.com/v1`:``,modelName:p.trim()}),M()}}function P(e){w(e.id),A(null),ee(e.modelName),te(e.apiKey),O(e.baseUrl||`https://api.openai.com/v1`),ne(!1),f(null)}function F(){w(null),A(null)}function ie(){if(!C)return;if(!T.trim()){A(`请填写模型名称`);return}if(!E.trim()){A(`请填写 API 密钥`);return}let t=e.models.find(e=>e.id===C);if(t){if(t.providerType===`openai`&&!D.trim()){A(`请填写接口地址`);return}A(null),i({id:C,name:T.trim()||`未命名`,providerType:t.providerType,apiKey:E.trim(),baseUrl:t.providerType===`openai`?D.trim()||`https://api.openai.com/v1`:``,modelName:T.trim()}),F()}}let I=u!==null;return(0,$.jsxs)(`section`,{className:`subview-screen`,children:[(0,$.jsx)(`div`,{className:`subview-topbar`,children:(0,$.jsxs)(`div`,{className:`subview-title-row`,children:[(0,$.jsx)(`button`,{className:`back-button back-button-box`,onClick:t,children:(0,$.jsx)(ri,{})}),(0,$.jsx)(`h2`,{className:`subview-title`,children:`设置`})]})}),(0,$.jsxs)(`section`,{className:`settings-stack`,children:[(0,$.jsxs)(`article`,{className:`sophia-card settings-hero-card`,children:[(0,$.jsxs)(`div`,{className:`settings-hero-top`,style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,$.jsx)(`h3`,{className:`settings-hero-title`,children:`模型配置`}),(0,$.jsxs)(`div`,{className:`add-model-dropdown${s?` open`:``}`,ref:l,children:[(0,$.jsx)(`button`,{className:`add-model-trigger-icon`,onClick:()=>c(!s),children:(0,$.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`line`,{x1:`12`,y1:`5`,x2:`12`,y2:`19`}),(0,$.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`})]})}),s?(0,$.jsx)(`div`,{className:`add-model-menu`,children:o.map(e=>(0,$.jsx)(`button`,{className:`add-model-menu-item`,onClick:()=>j(e.id),children:(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`add-model-menu-item-label`,children:e.label}),(0,$.jsx)(`div`,{className:`add-model-menu-item-desc`,children:e.id===`openai`?`支持任意兼容 OpenAI 接口的模型`:`Google Gemini 原生接口`})]})},e.id))}):null]})]}),(0,$.jsx)(`div`,{className:`settings-hero-divider`}),I?(0,$.jsxs)(`div`,{className:`model-config-form`,children:[(0,$.jsxs)(`div`,{style:{fontSize:`var(--text-sm)`,fontWeight:`var(--font-medium)`,marginBottom:`var(--space-3)`},children:[`添加`,o.find(e=>e.id===u)?.label??``,`模型`]}),(0,$.jsxs)(`label`,{className:`settings-field settings-field-large`,children:[(0,$.jsx)(`span`,{children:`模型名称`}),(0,$.jsx)(`input`,{type:`text`,value:p,onChange:e=>m(e.target.value),placeholder:u===`gemini`?`例如 gemini-2.5-flash`:`例如 gpt-4o、deepseek-chat`,autoComplete:`off`})]}),u===`openai`?(0,$.jsxs)(`label`,{className:`settings-field settings-field-large`,children:[(0,$.jsx)(`span`,{children:`接口地址`}),(0,$.jsx)(`input`,{type:`text`,value:_,onChange:e=>v(e.target.value),placeholder:`https://api.openai.com/v1`,autoComplete:`off`})]}):null,(0,$.jsxs)(`label`,{className:`settings-field settings-field-large`,children:[(0,$.jsx)(`span`,{children:`API 密钥`}),(0,$.jsxs)(`div`,{className:`settings-input-wrap`,children:[(0,$.jsx)(`input`,{type:y?`text`:`password`,value:h,onChange:e=>g(e.target.value),placeholder:u===`gemini`?`输入 Gemini API 密钥`:`输入 API 密钥`,autoComplete:`off`}),(0,$.jsx)(`button`,{type:`button`,className:`input-icon-button`,onClick:()=>b(!y),children:y?(0,$.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24`}),(0,$.jsx)(`line`,{x1:`1`,y1:`1`,x2:`23`,y2:`23`})]}):(0,$.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`}),(0,$.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`})]})})]})]}),x?(0,$.jsx)(`div`,{style:{fontSize:`var(--text-xs)`,color:`var(--danger)`,marginBottom:`var(--space-2)`},children:x}):null,(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,$.jsx)(`button`,{className:`btn-secondary`,onClick:M,children:`取消`}),(0,$.jsx)(`button`,{className:`btn-primary`,onClick:N,style:{flex:1},children:`添加模型`})]})]}):null,e.models.length>0?(0,$.jsx)($.Fragment,{children:(0,$.jsx)(`div`,{className:`model-list`,children:e.models.map(t=>(0,$.jsxs)(`div`,{className:`model-list-item-wrapper`,children:[(0,$.jsxs)(`div`,{className:`model-list-item${t.id===e.activeModelId?` is-active`:``}`,onClick:()=>n(t.id),children:[(0,$.jsx)(`div`,{className:`model-list-info`,children:(0,$.jsxs)(`div`,{className:`model-list-name`,children:[(0,$.jsx)(`div`,{children:t.name||`未命名`}),(0,$.jsx)(`span`,{className:`provider-badge provider-badge--${t.providerType}`,children:o.find(e=>e.id===t.providerType)?.label??t.providerType})]})}),(0,$.jsxs)(`div`,{className:`model-list-actions`,children:[(0,$.jsx)(`button`,{className:`icon-btn-sm`,title:`编辑`,onClick:e=>{e.stopPropagation(),P(t)},children:(0,$.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7`}),(0,$.jsx)(`path`,{d:`M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z`})]})}),(0,$.jsx)(`button`,{className:`icon-btn-sm icon-btn-sm--danger`,title:`删除`,onClick:e=>{e.stopPropagation(),a(t.id)},children:(0,$.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`polyline`,{points:`3 6 5 6 21 6`}),(0,$.jsx)(`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`})]})})]})]}),C===t.id?(0,$.jsx)(`div`,{className:`model-edit-form-wrapper is-open`,children:(0,$.jsxs)(`div`,{className:`model-edit-form`,children:[(0,$.jsx)(`div`,{style:{fontSize:`var(--text-sm)`,fontWeight:`var(--font-semibold)`,marginBottom:`var(--space-3)`},children:`编辑模型`}),(0,$.jsxs)(`label`,{className:`settings-field settings-field-large`,children:[(0,$.jsx)(`span`,{children:`模型名称`}),(0,$.jsx)(`input`,{type:`text`,value:T,onChange:e=>ee(e.target.value),placeholder:t.providerType===`gemini`?`例如 gemini-2.5-flash`:`例如 gpt-4o、deepseek-chat`,autoComplete:`off`})]}),t.providerType===`openai`?(0,$.jsxs)(`label`,{className:`settings-field settings-field-large`,children:[(0,$.jsx)(`span`,{children:`接口地址`}),(0,$.jsx)(`input`,{type:`text`,value:D,onChange:e=>O(e.target.value),placeholder:`https://api.openai.com/v1`,autoComplete:`off`})]}):null,(0,$.jsxs)(`label`,{className:`settings-field settings-field-large`,children:[(0,$.jsx)(`span`,{children:`API 密钥`}),(0,$.jsxs)(`div`,{className:`settings-input-wrap`,children:[(0,$.jsx)(`input`,{type:k?`text`:`password`,value:E,onChange:e=>te(e.target.value),placeholder:t.providerType===`gemini`?`输入 Gemini API 密钥`:`输入 API 密钥`,autoComplete:`off`}),(0,$.jsx)(`button`,{type:`button`,className:`input-icon-button`,onClick:()=>ne(!k),children:k?(0,$.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24`}),(0,$.jsx)(`line`,{x1:`1`,y1:`1`,x2:`23`,y2:`23`})]}):(0,$.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`}),(0,$.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`})]})})]})]}),re?(0,$.jsx)(`div`,{style:{fontSize:`var(--text-xs)`,color:`var(--danger)`,marginBottom:`var(--space-2)`},children:re}):null,(0,$.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,$.jsx)(`button`,{className:`btn-secondary`,onClick:F,children:`取消`}),(0,$.jsx)(`button`,{className:`btn-primary`,onClick:ie,style:{flex:1},children:`保存修改`})]})]})}):null]},t.id))})}):I?null:(0,$.jsx)(`div`,{className:`model-empty`,style:{padding:`var(--space-4) 0`},children:`尚未配置模型，点击"+ 添加"开始配置`})]}),(0,$.jsx)(`article`,{className:`sophia-card settings-privacy-card`,children:(0,$.jsx)(`div`,{className:`settings-privacy-row`,children:(0,$.jsxs)(`div`,{className:`settings-privacy-copy`,children:[(0,$.jsx)(`h3`,{className:`settings-privacy-title`,children:`隐私`}),(0,$.jsx)(`p`,{children:`你的 API 密钥和配置仅存储在浏览器本地，不会上传至任何服务器`})]})})})]})]})}function di(){let{state:e,refs:t,actions:n}=Hr(),[r,i]=(0,X.useState)(!1),a=Ur(r,()=>i(!1));return(0,$.jsxs)(`main`,{className:`sophia-shell`,children:[(0,$.jsx)(`input`,{ref:t.imageFileRef,className:`hidden-file-input`,type:`file`,accept:jr,onChange:e=>void n.handleLocalUpload(e,`image`)}),(0,$.jsx)(`input`,{ref:t.videoFileRef,className:`hidden-file-input`,type:`file`,accept:Mr,onChange:e=>void n.handleLocalUpload(e,`video`)}),e.subView===`main`?(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(fi,{children:[(0,$.jsx)(`div`,{className:`header-brand`,children:(0,$.jsx)(`img`,{src:`icons/logo_new1.png`,alt:`Sophia`,className:`brand-icon`})}),(0,$.jsx)(`div`,{className:`header-nav-wrap`,children:(0,$.jsxs)(`nav`,{className:`tab-nav`,role:`tablist`,children:[(0,$.jsxs)(`button`,{role:`tab`,"aria-selected":e.activeTab===`image`,className:`tab-nav-btn ${e.activeTab===`image`?`tab-nav-btn--active`:``}`,onClick:()=>n.handleTabChange(`image`),title:`图片视图`,children:[(0,$.jsx)(`img`,{src:`icons/image.svg`,alt:`图片视图`,className:`tab-icon-img`}),(0,$.jsx)(`span`,{className:`tab-tooltip`,children:`图片视图`})]}),(0,$.jsxs)(`button`,{role:`tab`,"aria-selected":e.activeTab===`video`,className:`tab-nav-btn ${e.activeTab===`video`?`tab-nav-btn--active`:``}`,onClick:()=>n.handleTabChange(`video`),title:`视频视图`,children:[(0,$.jsx)(`img`,{src:`icons/video.svg`,alt:`视频视图`,className:`tab-icon-img`}),(0,$.jsx)(`span`,{className:`tab-tooltip`,children:`视频视图`})]}),(0,$.jsxs)(`button`,{role:`tab`,"aria-selected":e.activeTab===`enhancer`,className:`tab-nav-btn ${e.activeTab===`enhancer`?`tab-nav-btn--active`:``}`,onClick:()=>n.handleTabChange(`enhancer`),title:`提示词增强`,children:[(0,$.jsx)(`img`,{src:`icons/text.svg`,alt:`提示词增强`,className:`tab-icon-img`}),(0,$.jsx)(`span`,{className:`tab-tooltip`,children:`提示词增强`})]})]})}),(0,$.jsxs)(`div`,{className:`header-actions`,ref:a,children:[(0,$.jsx)(`button`,{className:`header-action-btn`,"aria-label":`菜单`,onClick:()=>i(!r),children:(0,$.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`line`,{x1:`4`,y1:`6`,x2:`20`,y2:`6`}),(0,$.jsx)(`line`,{x1:`4`,y1:`12`,x2:`20`,y2:`12`}),(0,$.jsx)(`line`,{x1:`4`,y1:`18`,x2:`20`,y2:`18`})]})}),r&&(0,$.jsxs)(`div`,{className:`action-menu-dropdown`,children:[(0,$.jsxs)(`button`,{className:`menu-item`,onClick:()=>{n.setSubView(`history`),i(!1)},children:[(0,$.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M3 12a9 9 0 1 0 3-6.7`}),(0,$.jsx)(`path`,{d:`M3 3v4h4`}),(0,$.jsx)(`path`,{d:`M12 7v5l3 2`})]}),(0,$.jsx)(`span`,{children:`历史记录`})]}),(0,$.jsxs)(`button`,{className:`menu-item`,onClick:()=>{n.setSubView(`settings`),i(!1)},children:[(0,$.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`}),(0,$.jsx)(`path`,{d:`M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z`})]}),(0,$.jsx)(`span`,{children:`设置`})]})]})]})]}),(0,$.jsxs)(`div`,{className:`page-content`,children:[e.activeTab===`image`?(0,$.jsx)(oi,{mode:`image`,tabData:e.ivTabData.image,isAnalyzing:e.isAnalyzing,canAnalyze:e.canAnalyze,hasApiKey:e.hasApiKey,displayResultText:e.displayResultText,showCopy:e.showCopy,currentMediaPreview:e.currentMediaPreview,currentMediaAspectRatio:e.currentMediaAspectRatio,onUploadClick:n.handleUploadClick,onAnalyze:n.handleAnalyze,onClear:n.handleClear,onAbort:n.handleAbort,onCopy:n.handleCopy,onEditResult:e=>n.updateIVTab(`image`,{editedResultText:e}),onToggleExpanded:()=>n.updateIVTab(`image`,{isExpanded:!e.ivTabData.image.isExpanded}),onFileDrop:e=>n.handleFileDrop(e,`image`)}):null,e.activeTab===`video`?(0,$.jsx)(oi,{mode:`video`,tabData:e.ivTabData.video,isAnalyzing:e.isAnalyzing,canAnalyze:e.canAnalyze,hasApiKey:e.hasApiKey,displayResultText:e.displayResultText,showCopy:e.showCopy,currentMediaPreview:e.currentMediaPreview,currentMediaAspectRatio:e.currentMediaAspectRatio,frameSamplingMode:e.settings.frameSamplingMode,onUploadClick:n.handleUploadClick,onAnalyze:n.handleAnalyze,onClear:n.handleClear,onAbort:n.handleAbort,onCopy:n.handleCopy,onEditResult:e=>n.updateIVTab(`video`,{editedResultText:e}),onToggleExpanded:()=>n.updateIVTab(`video`,{isExpanded:!e.ivTabData.video.isExpanded}),onFrameSamplingModeChange:n.handleFrameSamplingModeChange,onFileDrop:e=>n.handleFileDrop(e,`video`)}):null,e.activeTab===`enhancer`?(0,$.jsx)(ci,{enhancerMode:e.enhancerMode,enhancerInput:e.enhancerInput,isEnhancingPrompt:e.isEnhancingPrompt,canEnhancePrompt:e.canEnhancePrompt,hasApiKey:e.hasApiKey,enhancerResultMode:e.enhancerResultMode,enhancerResultText:e.enhancerResultText,enhancerCopyLabel:e.enhancerCopyLabel,showEnhancerCopy:e.showEnhancerCopy,onSetEnhancerMode:e=>{n.setEnhancerMode(e),n.resetEnhancerResult()},onSetEnhancerInput:n.setEnhancerInput,onEnhance:n.handleEnhancePrompt,onAbortEnhancer:n.handleAbortEnhancer,onCopyEnhancer:()=>void n.handleCopyEnhancerResult()}):null]})]}):null,e.subView===`history`?(0,$.jsx)(li,{historyItems:e.historyItems,copiedHistoryId:e.copiedHistoryId,editingCardId:e.editingCardId,editingText:e.editingText,onBack:()=>n.setSubView(`main`),onCopyHistory:e=>void n.handleCopyHistory(e),onDeleteHistory:e=>void n.handleDeleteHistory(e),onEditStart:n.handleEditStart,onEditClose:n.handleEditClose,onEditCopy:()=>void n.handleEditCopy(),onEditingTextChange:n.setEditingText,getHistoryTypeLabel:n.getHistoryTypeLabel}):null,e.subView===`settings`?(0,$.jsx)(ui,{settings:e.settings,onBack:()=>n.setSubView(`main`),onSelectModel:e=>n.handleSelectModel(e),onAddModel:e=>void n.handleAddModel(e),onUpdateModel:e=>void n.handleUpdateModel(e),onDeleteModel:e=>void n.handleDeleteModel(e)}):null,e.statusMessage?(0,$.jsx)(`div`,{className:`toast-modern`,children:e.statusMessage}):null]})}var fi=Dn.header`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--glass-bg);
  -webkit-backdrop-filter: var(--glass-blur);
  backdrop-filter: var(--glass-blur);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: var(--glass-inner-shadow);
  position: sticky;
  top: 0;
  z-index: 10;

  .header-brand {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .header-brand .brand-icon {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  .header-nav-wrap {
    flex: 1;
    min-width: 0;
    display: flex;
    justify-content: center;
  }

  .tab-nav {
    display: flex;
    gap: 12px;
    background: rgba(0, 0, 0, 0.04);
    -webkit-backdrop-filter: var(--glass-blur-sm);
    backdrop-filter: var(--glass-blur-sm);
    border-radius: var(--radius-pill);
    padding: 5px 8px;
    border: 1px solid var(--glass-border);
  }

  .tab-nav-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 32px;
    border: 1px solid transparent;
    border-radius: var(--radius-pill);
    background: transparent;
    color: var(--text-tertiary);
    cursor: pointer;
    transition: all 0.3s var(--ease-out);

    svg {
      width: 15px;
      height: 15px;
    }

    .tab-icon-img {
      width: 15px;
      height: 15px;
      object-fit: contain;
      filter: invert(60%) sepia(8%) saturate(200%) hue-rotate(180deg) brightness(85%) contrast(85%);
      transition: filter 0.3s var(--ease-out);
    }

    &:hover .tab-icon-img {
      filter: invert(30%) sepia(8%) saturate(200%) hue-rotate(180deg) brightness(90%) contrast(90%);
    }

    &:hover {
      color: var(--text-secondary);
      background: rgba(0, 0, 0, 0.03);
    }
  }

  .tab-nav-btn--active .tab-icon-img {
    filter: invert(0%) brightness(0%) contrast(100%);
  }

  .tab-tooltip {
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) translateY(-6px);
    background: var(--bg-card-solid);
    color: var(--text-primary);
    font-size: var(--text-xxs);
    font-weight: var(--font-medium);
    padding: 5px 12px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow-elevated);
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.25s var(--ease-out), transform 0.25s var(--ease-out);
  }

  .tab-tooltip::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-bottom-color: var(--glass-border);
  }

  .tab-nav-btn:hover .tab-tooltip {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  .tab-nav-btn--active {
    color: var(--text-primary);
    background: var(--glass-bg-hover);
    -webkit-backdrop-filter: var(--glass-blur-sm);
    backdrop-filter: var(--glass-blur-sm);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), var(--glass-inner-shadow);
    border: 1px solid var(--glass-border-hover);
    transform: translateY(-1px);
  }

  .tab-nav-btn--active:hover {
    color: var(--text-primary);
    background: var(--glass-bg-hover);
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 2px;
    flex-shrink: 0;
  }

  .header-action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: var(--radius-md);
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--text-secondary);
    transition: all var(--duration-fast) var(--ease-out);

    svg {
      width: 17px;
      height: 17px;
    }

    &:hover {
      background: var(--bg-hover);
      color: var(--text-primary);
    }
  }

  .action-menu-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    min-width: 160px;
    background: var(--bg-card-solid);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--glass-shadow-elevated);
    padding: var(--space-1);
    display: flex;
    flex-direction: column;
    gap: 2px;
    z-index: 100;
    animation: menu-dropdown-in 0.2s var(--ease-out);
  }

  @keyframes menu-dropdown-in {
    from {
      opacity: 0;
      transform: translateY(-8px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: 10px var(--space-3);
    border: none;
    background: transparent;
    border-radius: var(--radius-sm);
    cursor: pointer;
    color: var(--text-primary);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    transition: all var(--duration-fast) var(--ease-out);
    text-align: left;

    svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }

    &:hover {
      background: var(--bg-hover);
      color: var(--text-primary);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;ke.createRoot(document.getElementById(`root`)).render((0,$.jsx)(X.StrictMode,{children:(0,$.jsx)(di,{})}));