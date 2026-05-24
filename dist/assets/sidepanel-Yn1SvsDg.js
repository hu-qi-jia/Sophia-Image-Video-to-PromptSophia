import{_ as e,a as t,c as n,d as r,f as i,g as a,h as o,i as s,l as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h,v as g}from"./sidepanel-CE7iQz2m.js";var _=`-ms-`,v=`-moz-`,y=`-webkit-`,b=`comm`,x=`rule`,S=`decl`,C=`@import`,ee=`@namespace`,w=`@keyframes`,te=`@layer`,ne=Math.abs,T=String.fromCharCode,re=Object.assign;function ie(e,t){return O(e,0)^45?(((t<<2^O(e,0))<<2^O(e,1))<<2^O(e,2))<<2^O(e,3):0}function ae(e){return e.trim()}function E(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function oe(e,t,n){return e.indexOf(t,n)}function O(e,t){return e.charCodeAt(t)|0}function k(e,t,n){return e.slice(t,n)}function A(e){return e.length}function se(e){return e.length}function j(e,t){return t.push(e),e}function ce(e,t){return e.map(t).join(``)}function le(e,t){return e.filter(function(e){return!E(e,t)})}var M=1,N=1,ue=0,P=0,F=0,I=``;function L(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:M,column:N,length:o,return:``,siblings:s}}function R(e,t){return re(L(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function z(e){for(;e.root;)e=R(e.root,{children:[e]});j(e,e.siblings)}function de(){return F}function B(){return F=P>0?O(I,--P):0,N--,F===10&&(N=1,M--),F}function V(){return F=P<ue?O(I,P++):0,N++,F===10&&(N=1,M++),F}function H(){return O(I,P)}function U(){return P}function fe(e,t){return k(I,e,t)}function W(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pe(e){return M=N=1,ue=A(I=e),P=0,[]}function me(e){return I=``,e}function he(e){return ae(fe(P-1,ve(e===91?e+2:e===40?e+1:e)))}function ge(e){for(;(F=H())&&F<33;)V();return W(e)>2||W(F)>3?``:` `}function _e(e,t){for(;--t&&V()&&!(F<48||F>102||F>57&&F<65||F>70&&F<97););return fe(e,U()+(t<6&&H()==32&&V()==32))}function ve(e){for(;V();)switch(F){case e:return P;case 34:case 39:e!==34&&e!==39&&ve(F);break;case 40:e===41&&ve(e);break;case 92:V();break}return P}function ye(e,t){for(;V()&&e+F!==57&&!(e+F===84&&H()===47););return`/*`+fe(t,P-1)+`*`+T(e===47?e:V())}function be(e){for(;!W(H());)V();return fe(e,P)}function G(e){return me(xe(``,null,null,null,[``],e=pe(e),0,[0],e))}function xe(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=V()){case 40:if(m!=108&&O(C,d-1)==58){oe(C+=D(he(v),`&`,`&\f`),`&\f`,ne(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=he(v);break;case 9:case 10:case 13:case 32:C+=ge(m);break;case 92:C+=_e(U()-1,7);continue;case 47:switch(H()){case 42:case 47:j(Ce(ye(V(),U()),t,n,c),c),(W(m||1)==5||W(H()||1)==5)&&A(C)&&k(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=A(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=D(C,/\f/g,``)),p>0&&(A(C)-d||h===0&&m===47)&&j(p>32?we(C+`;`,r,n,d-1,c):we(D(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(j(S=Se(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)xe(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(O(C,3)===110)break;case 108:if(O(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?xe(e,S,S,r&&j(Se(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):xe(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+A(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&B()==125)continue}switch(C+=T(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(A(C)-1)*_,_=1;break;case 64:H()===45&&(C+=he(V())),f=H(),u=d=A(y=C+=be(U())),v++;break;case 45:m===45&&A(C)==2&&(h=0)}}return a}function Se(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=se(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=k(e,f+1,f=ne(g=o[h])),b=e;v<m;++v)(b=ae(g>0?p[v]+` `+y:D(y,/&\f/g,p[v])))&&(c[_++]=b);return L(e,t,n,i===0?x:s,c,l,u,d)}function Ce(e,t,n,r){return L(e,t,n,b,T(de()),k(e,2,-2),0,r)}function we(e,t,n,r,i){return L(e,t,n,S,k(e,0,r),k(e,r+1,-1),r,i)}function Te(e,t,n){switch(ie(e,t)){case 5103:return y+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return y+e+e;case 4855:return y+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return v+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return y+e+v+e+_+e+e;case 5936:switch(O(e,t+11)){case 114:return y+e+_+D(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return y+e+_+D(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return y+e+_+D(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return y+e+_+e+e;case 6165:return y+e+_+`flex-`+e+e;case 5187:return y+e+D(e,/(\w+).+(:[^]+)/,y+`box-$1$2`+_+`flex-$1$2`)+e;case 5443:return y+e+_+`flex-item-`+D(e,/flex-|-self/g,``)+(E(e,/flex-|baseline/)?``:_+`grid-row-`+D(e,/flex-|-self/g,``))+e;case 4675:return y+e+_+`flex-line-pack`+D(e,/align-content|flex-|-self/g,``)+e;case 5548:return y+e+_+D(e,`shrink`,`negative`)+e;case 5292:return y+e+_+D(e,`basis`,`preferred-size`)+e;case 6060:return y+`box-`+D(e,`-grow`,``)+y+e+_+D(e,`grow`,`positive`)+e;case 4554:return y+D(e,/([^-])(transform)/g,`$1`+y+`$2`)+e;case 6187:return D(D(D(e,/(zoom-|grab)/,y+`$1`),/(image-set)/,y+`$1`),e,``)+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,y+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,y+`box-pack:$3`+_+`flex-pack:$3`),/space-between/,`justify`)+y+e+e;case 4200:if(!E(e,/flex-|baseline/))return _+`grid-column-align`+k(e,t)+e;break;case 2592:case 3360:return _+D(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,E(e.props,/grid-\w+-end/)})?~oe(e+(n=n[t].value),`span`,0)?e:_+D(e,`-start`,``)+e+_+`grid-row-span:`+(~oe(n,`span`,0)?E(n,/\d+/):E(n,/\d+/)-+E(e,/\d+/))+`;`:_+D(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return E(e.props,/grid-\w+-start/)})?e:_+D(D(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,y+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(e)-1-t>6)switch(O(e,t+1)){case 109:if(O(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,`$1`+y+`$2-$3$1`+v+(O(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~oe(e,`stretch`,0)?Te(D(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return D(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return _+n+`:`+r+s+(i?_+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(O(e,t+6)===121)return D(e,`:`,`:`+y)+e;break;case 6444:switch(O(e,O(e,14)===45?18:11)){case 120:return D(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+y+(O(e,14)===45?`inline-`:``)+`box$3$1`+y+`$2$3$1`+_+`$2box$3`)+e;case 100:return D(e,`:`,`:`+_)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return D(e,`scroll-`,`scroll-snap-`)+e}return e}function Ee(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function De(e,t,n,r){switch(e.type){case te:if(e.children.length)break;case C:case ee:case S:return e.return=e.return||e.value;case b:return``;case w:return e.return=e.value+`{`+Ee(e.children,r)+`}`;case x:if(!A(e.value=e.props.join(`,`)))return``}return A(n=Ee(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Oe(e){var t=se(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function ke(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ae(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case S:e.return=Te(e.value,e.length,n);return;case w:return Ee([R(e,{value:D(e.value,`@`,`@`+y)})],r);case x:if(e.length)return ce(n=e.props,function(t){switch(E(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:z(R(e,{props:[D(t,/:(read-\w+)/,`:`+v+`$1`)]})),z(R(e,{props:[t]})),re(e,{props:le(n,r)});break;case`::placeholder`:z(R(e,{props:[D(t,/:(plac\w+)/,`:`+y+`input-$1`)]})),z(R(e,{props:[D(t,/:(plac\w+)/,`:`+v+`$1`)]})),z(R(e,{props:[D(t,/:(plac\w+)/,_+`input-$1`)]})),z(R(e,{props:[t]})),re(e,{props:le(n,r)});break}return``})}}var je=g(a(),1),K=g(e()),q=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Me=`active`,Ne=`data-styled-version`,Pe=`6.4.2`,Fe=`/*!sc*/
`,Ie=typeof window<`u`&&typeof document<`u`;function Le(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Re=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:Le(`REACT_APP_SC_DISABLE_SPEEDY`)??Le(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),ze=`sc-keyframes-`;function Be(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var J=new Map,Ve=new Map,Y=1,He=e=>{if(J.has(e))return J.get(e);for(;Ve.has(Y);)Y++;let t=Y++;return J.set(e,t),Ve.set(t,e),t},Ue=e=>Ve.get(e),We=(e,t)=>{Y=t+1,J.set(e,t),Ve.set(t,e)},Ge=Object.freeze([]),X=Object.freeze({});function Ke(e,t,n=X){return e.theme!==n.theme&&e.theme||t||n.theme}var qe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Je=/(^-|-$)/g;function Ye(e){return e.replace(qe,`-`).replace(Je,``)}var Xe=/(a)(d)/gi,Ze=e=>String.fromCharCode(e+(e>25?39:97));function Qe(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=Ze(t%52)+n;return(Ze(t%52)+n).replace(Xe,`$1-$2`)}var $e=5381,et=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},tt=e=>et($e,e);function nt(e){return Qe(tt(e)>>>0)}function rt(e){return e.displayName||e.name||`Component`}function it(e){return typeof e==`string`&&!0}function at(e){return it(e)?`styled.${e}`:`Styled(${rt(e)})`}var ot=Symbol.for(`react.memo`),st=Symbol.for(`react.forward_ref`),ct={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},lt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ut={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dt={[st]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[ot]:ut};function ft(e){return(`type`in(t=e)&&t.type.$$typeof)===ot?ut:`$$typeof`in e?dt[e.$$typeof]:ct;var t}var pt=Object.defineProperty,mt=Object.getOwnPropertyNames,ht=Object.getOwnPropertySymbols,gt=Object.getOwnPropertyDescriptor,_t=Object.getPrototypeOf,vt=Object.prototype;function yt(e,t,n){if(typeof t!=`string`){let r=_t(t);r&&r!==vt&&yt(e,r,n);let i=mt(t).concat(ht(t)),a=ft(e),o=ft(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in lt||n&&n[s]||o&&s in o||a&&s in a)){let n=gt(t,s);try{pt(e,s,n)}catch{}}}}return e}function bt(e){return typeof e==`function`}var xt=Symbol.for(`react.forward_ref`);function St(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===xt&&`styledComponentId`in e}function Ct(e,t){return e&&t?e+` `+t:e||t||``}function wt(e,t){return e.join(t||``)}function Tt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Et(e,t,n=!1){if(!n&&!Tt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Et(e[n],t[n]);else if(Tt(t))for(let n in t)e[n]=Et(e[n],t[n]);return e}function Dt(e,t){Object.defineProperty(e,"toString",{value:t})}var Ot=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Be(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Fe;return t}},kt=`style[${q}][${Ne}="${Pe}"]`,At=RegExp(`^${q}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),jt=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Mt=e=>{if(!e)return document;if(jt(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(jt(t))return t}return document},Nt=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},Pt=(e,t)=>{let n=(t.textContent??``).split(Fe),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(At);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(We(n,t),Nt(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Ft=e=>{let t=Mt(e.options.target).querySelectorAll(kt);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(q)!==Me&&(Pt(e,r),r.parentNode&&r.parentNode.removeChild(r))}},It=!1;function Lt(){if(!1!==It)return It;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return It=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return It=t.getAttribute(`content`)||void 0}return It=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Rt=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${q}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(q,Me),i.setAttribute(Ne,Pe);let s=t||Lt();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},zt=class{constructor(e,t){this.element=Rt(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Be(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},Bt=class{constructor(e,t){this.element=Rt(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Vt=Ie,Ht={isServer:!Ie,useCSSOMInjection:!Re},Ut=class e{static registerId(e){return He(e)}constructor(e=X,t={},n){this.options=Object.assign(Object.assign({},Ht),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ie&&Vt&&(Vt=!1,Ft(this)),Dt(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Ue(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=q+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&Ie&&Ft(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Ie&&t.target!==this.options.target&&Mt(this.options.target)!==Mt(t.target)&&Ft(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new zt(t,n):new Bt(t,n))(this.options),new Ot(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){He(e),e.startsWith(ze)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(He(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(He(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},Wt=new WeakSet,Gt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Kt(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in Gt||e.startsWith(`--`)?String(t).trim():t+`px`}var Z=47;function qt(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var Jt=Symbol.for(`sc-keyframes`);function Yt(e){return typeof e==`object`&&!!e&&Jt in e}function Xt(e){return bt(e)&&!(e.prototype&&e.prototype.isReactComponent)}var Zt=e=>e==null||!1===e||e===``,Qt=Symbol.for(`react.client.reference`);function $t(e){return e.$$typeof===Qt}function en(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!Zt(r)&&(Array.isArray(r)&&Wt.has(r)||bt(r)?t.push(qt(n)+`:`,r,`;`):Tt(r)?(t.push(n+` {`),en(r,t),t.push(`}`)):t.push(qt(n)+`: `+Kt(n,r)+`;`))}}function tn(e,t,n,r,i=[]){if(Zt(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return $t(e)?i:Xt(e)&&t?tn(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)tn(e[a],t,n,r,i);return i}return St(e)?(i.push(`.${e.styledComponentId}`),i):Yt(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):$t(e)?i:Tt(e)&&e.toString===Object.prototype.toString?(en(e,i),i):(i.push(e.toString()),i)}var nn=tt(Pe),rn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=et(nn,t),this.baseStyle=n,Ut.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a)if(Xt(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=wt(tn(r,e,t,n)))}else i+=wt(tn(a,e,t,n))}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=Qe(et(et(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Ct(r,a)}}return r}},an=/&/g;function on(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function sn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==Z||e.charCodeAt(c+1)!==42)if(o)l===42&&e.charCodeAt(c+1)===Z&&(o=!1,c++);else if(l!==34&&l!==39||on(e,c)){if(a===0)if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else a===0?a=l:a===l&&(a=0);else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function cn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&cn(a.children,t)}return e}function ln({options:e=X,plugins:t=Ge}=X){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(an,r).replace(i,a))}),e.prefix&&o.push(Ae),o.push(De);let s=[],c=Oe(o.concat(ke(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return sn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||on(e,o))if(s===0)if(t===Z&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==Z);)o++;o+=2}else if(t!==40)if(t!==41)if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===Z)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===Z&&o+1<r&&e.charCodeAt(o+1)===Z){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++;else c>0&&c--,o++;else c++,o++;else o++;else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:sn(i)):l===0?e:sn(e)}(t),d=G(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=cn(d,e.namespace)),s=[],Ee(d,c),s},u=e,d=$e;for(let e=0;e<t.length;e++)t[e].name||Be(15),d=et(d,t[e].name);return u!=null&&u.namespace&&(d=et(d,u.namespace)),u!=null&&u.prefix&&(d=et(d,`p`)),l.hash=d===$e?``:d.toString(),l}var un=new Ut,dn=ln(),fn=K.createContext({shouldForwardProp:void 0,styleSheet:un,stylis:dn,stylisPlugins:void 0});fn.Consumer;function pn(){return K.useContext(fn)}var mn=K.createContext(void 0);mn.Consumer;var hn=Object.prototype.hasOwnProperty,gn={};function _n(e,t){let n=typeof e==`string`?Ye(e):`sc`;gn[n]=(gn[n]||0)+1;let r=n+`-`+nt(Pe+n+gn[n]);return t?t+`-`+r:r}function vn(e,t,n){let r=St(e),i=e,a=!it(e),{attrs:o=Ge,componentId:s=_n(t.displayName,t.parentComponentId),displayName:c=at(e)}=t,l=t.displayName&&t.componentId?Ye(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new rn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=K.useContext(mn),u=pn(),d=e.shouldForwardProp||u.shouldForwardProp,f=Ke(t,l,a)||X,p,m;{let e=K.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(hn.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=bt(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=Ct(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=Ct(r.className,t.className)),r}(r,t,f),m=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(i,p,u.styleSheet,u.stylis);let n=0;for(let e in t)hn.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),_=Ct(o,s);return m&&(_+=` `+m),p.className&&(_+=` `+p.className),g[it(h)&&h.includes(`-`)?`class`:`className`]=_,n&&(g.ref=n),(0,K.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=K.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Ct(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Et(e,n,!0);return e}({},i.defaultProps,e):e}}),Dt(m,()=>`.${m.styledComponentId}`),a&&yt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var yn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function bn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var xn=e=>(Wt.add(e),e);function Sn(e,...t){if(bt(e)||Tt(e))return xn(tn(bn(Ge,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?tn(n):xn(tn(bn(n,t)))}function Cn(e,t,n=X){if(!t)throw Be(1,t);let r=(r,...i)=>e(t,n,Sn(r,...i));return r.attrs=r=>Cn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Cn(e,t,Object.assign(Object.assign({},n),r)),r}var wn=e=>Cn(vn,e),Tn=wn;yn.forEach(e=>{Tn[e]=wn(e)}),`${q}`,`${q}`,`${q}`;function En(e){return`You are an expert AI video prompt engineer.

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
${e}`}function Dn(e){return`You are an expert AI image prompt writer.

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
${e}`}function On(e){return o.find(t=>t.id===e)?.label??e}function kn(e,t){return On(e),`You are a professional visual reverse-engineering system. Analyze the image and output structured JSON for accurate image recreation.

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
}`}function An(e){return o.find(t=>t.id===e)?.label??e}function jn(e){if(!e?.videoWidth||!e.videoHeight)return null;let t=e.videoWidth/e.videoHeight;return t>1.7?`16:9`:t<.8?`9:16`:`1:1 or 4:5`}function Mn(e,t){let n=An(e),r=typeof t?.duration==`number`&&Number.isFinite(t.duration)?`${Math.max(1,Math.round(t.duration))} seconds`:`the source video length`,i=jn(t);return`You are an expert AI video prompt engineer.

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

`}function Nn(e){let t=e.indexOf(`{`);if(t===-1)return null;let n=0,r=!1,i=!1;for(let a=t;a<e.length;a+=1){let o=e[a];if(r){i?i=!1:o===`\\`?i=!0:o===`"`&&(r=!1);continue}if(o===`"`){r=!0;continue}if(o===`{`)n+=1;else if(o===`}`&&(--n,n===0))return e.slice(t,a+1)}return null}function Pn(e){let t=e.indexOf(`{`);if(t===-1)return null;let n=[],r=!1,i=!1;for(let a=t;a<e.length;a++){let t=e[a];if(r){i?i=!1:t===`\\`?i=!0:t===`"`&&(r=!1);continue}if(t===`"`){r=!0;continue}t===`{`||t===`[`?n.push(t===`{`?`}`:`]`):(t===`}`||t===`]`)&&n.length>0&&n[n.length-1]===t&&n.pop()}let a=e;for(r&&(a+=`"`);n.length>0;)a+=n.pop();try{let e=Nn(a);if(e)return JSON.parse(e),e}catch{}return null}function Fn(e){let t=e.trim();try{return JSON.parse(t)}catch{let n=Nn(t);if(!n){let n=Pn(t);if(n)try{return JSON.parse(n)}catch{}let r=e.slice(0,300),i=e.slice(-200);throw console.error(`[parseGeminiJson] No valid JSON found. Length:`,e.length,`Head:`,r,`Tail:`,i),Error(`模型返回JSON被截断或不完整。(E1) 长度:${e.length} 开头:${r}... 结尾:...${i}`)}try{return JSON.parse(n)}catch{throw console.error(`[parseGeminiJson] Invalid JSON substring:`,n.slice(0,500)),Error(`模型返回了无效JSON。(E2) 截取内容: ${n.slice(0,200)}`)}}}function Q(e){return typeof e==`string`&&e.trim().length>0}function In(e){let t=e.generatedPrompt?.timeline,n=Array.isArray(t)?t.filter(e=>!!e&&typeof e==`object`&&Q(e.time)&&Q(e.subject)&&Q(e.action)&&Q(e.setting)&&Q(e.camera)&&Q(e.mood)&&Q(e.sound)).map(e=>({time:e.time.trim(),subject:e.subject.trim(),action:e.action.trim(),setting:e.setting.trim(),camera:e.camera.trim(),mood:e.mood.trim(),sound:e.sound.trim()})):[],r=Array.isArray(e.generatedPrompt?.consistencyConstraints)?e.generatedPrompt.consistencyConstraints.filter(Q).map(e=>e.trim()).filter(Boolean):[],i={videoSummary:e.videoSummary?.trim?.()??``,targetModel:e.targetModel?.trim?.()??``,generatedPrompt:{globalStyle:e.generatedPrompt?.globalStyle?.trim?.()??``,timeline:n,consistencyConstraints:r}};if(!Q(i.videoSummary)||!Q(i.targetModel)||!Q(i.generatedPrompt.globalStyle)||n.length===0||r.length===0)throw Error(`模型返回了无效的响应格式，请重试。`);return i}function Ln(e){return String(e??``).trim()}function Rn(e){for(let t of[`image_archetype`,`composition`,`imperfections`]){let n=e[t],r={};if(n&&typeof n==`object`&&!Array.isArray(n))for(let[e,t]of Object.entries(n))r[e]=Ln(t);e[t]=r}if(e.lighting_and_color&&typeof e.lighting_and_color==`object`&&!Array.isArray(e.lighting_and_color)){let t={};for(let[n,r]of Object.entries(e.lighting_and_color))t[n]=Array.isArray(r)?r.map(e=>Ln(e)):Ln(r);e.lighting_and_color=t}if(e.subjects=Array.isArray(e.subjects)?e.subjects:[],e.shortPrompt=Ln(e.shortPrompt),e.detailedPrompt=Ln(e.detailedPrompt),e.negativePrompt=Ln(e.negativePrompt),!Q(e.shortPrompt)&&!Q(e.detailedPrompt))throw console.error(`[normalizeStructured] Both prompts empty. shortPrompt type:`,typeof e.shortPrompt,`detailedPrompt type:`,typeof e.detailedPrompt),Error(`模型返回了无效的响应格式，请重试。(E3)`);return e}function zn(e){let t=Array.isArray(e.analysis?.keywords)?e.analysis.keywords.filter(Q).map(e=>e.trim()).filter(Boolean):[],n={analysis:{subject:e.analysis?.subject?.trim?.()??``,scene:e.analysis?.scene?.trim?.()??``,composition:e.analysis?.composition?.trim?.()??``,style:e.analysis?.style?.trim?.()??``,lighting:e.analysis?.lighting?.trim?.()??``,colorPalette:e.analysis?.colorPalette?.trim?.()??``,mood:e.analysis?.mood?.trim?.()??``,details:e.analysis?.details?.trim?.()??``,medium:e.analysis?.medium?.trim?.()??``,keywords:t},shortPrompt:e.shortPrompt?.trim?.()??``,detailedPrompt:e.detailedPrompt?.trim?.()??``,imagePrompt:e.imagePrompt?.trim?.()??``},r=n.analysis;if(!Q(r.subject)||!Q(r.scene)||!Q(n.imagePrompt))throw console.error(`[normalizeLegacy] Missing required fields. Has subject:`,Q(r.subject),`Has scene:`,Q(r.scene),`Has imagePrompt:`,Q(n.imagePrompt)),Error(`模型返回了无效的响应格式，请重试。(E4)`);return n}function Bn(e){return JSON.stringify(e,null,2)}function Vn(e){return JSON.stringify(e,null,2)}function Hn(e){return JSON.stringify(e,null,2)}function Un(e){let t=In(Fn(e));return{videoSummary:t.videoSummary,generatedPrompt:Bn(t),rawResult:JSON.stringify(t,null,2),promptResult:t}}function Wn(e){let t=Fn(e);if(console.log(`[parseGeminiImage] Parsed top-level keys:`,Object.keys(t)),console.log(`[parseGeminiImage] Has image_archetype:`,`image_archetype`in t),console.log(`[parseGeminiImage] Has global_overview:`,`global_overview`in t),console.log(`[parseGeminiImage] Has negativePrompt:`,`negativePrompt`in t),t&&typeof t==`object`&&!(`image_archetype`in t)&&!(`global_overview`in t)&&`analysis`in t){let e=t.analysis;e&&typeof e==`object`&&!Array.isArray(e)&&(`image_archetype`in e||`global_overview`in e)&&(console.log(`[parseGeminiImage] → unwrapping nested analysis`),t={...e,shortPrompt:t.shortPrompt??e.shortPrompt,detailedPrompt:t.detailedPrompt??e.detailedPrompt,negativePrompt:t.negativePrompt??e.negativePrompt})}if(t&&typeof t==`object`&&`image_archetype`in t){console.log(`[parseGeminiImage] → new structured path`);let e=Rn(t);return{imageSummary:e.shortPrompt,generatedPrompt:Hn(e),rawResult:JSON.stringify(e,null,2),promptResult:e}}if(t&&typeof t==`object`&&`global_overview`in t){console.log(`[parseGeminiImage] → old structured path`);let e=t,n=Rn({image_archetype:e.global_overview??{},subjects:Array.isArray(e.all_subjects_and_objects)?e.all_subjects_and_objects:[],composition:e.composition_and_camera??{},lighting_and_color:e.light_and_color??{},imperfections:e.details_and_imperfections??{},shortPrompt:String(e.shortPrompt??``),detailedPrompt:String(e.detailedPrompt??``),negativePrompt:String(e.negativePrompt??``)});return{imageSummary:n.shortPrompt,generatedPrompt:Hn(n),rawResult:JSON.stringify(n,null,2),promptResult:n}}if(t&&typeof t==`object`&&`negativePrompt`in t){console.log(`[parseGeminiImage] → legacy skill path`);let e=t,n=Rn({image_archetype:e.analysis??{},subjects:[],composition:{},lighting_and_color:{},imperfections:{},shortPrompt:String(e.shortPrompt??``),detailedPrompt:String(e.detailedPrompt??``),negativePrompt:String(e.negativePrompt??``)});return{imageSummary:n.shortPrompt,generatedPrompt:Hn(n),rawResult:JSON.stringify(n,null,2),promptResult:n}}console.log(`[parseGeminiImage] → legacy fallback path`);let n=zn(t);return{imageSummary:n.shortPrompt,generatedPrompt:Vn(n),rawResult:JSON.stringify(n,null,2),promptResult:n}}function Gn(e,t,n){let r=Math.max(e,t);if(r<=n)return{width:e,height:t};let i=n/r;return{width:Math.max(1,Math.round(e*i)),height:Math.max(1,Math.round(t*i))}}async function Kn(e){let t=new Image;return t.src=e,await new Promise((e,n)=>{t.onload=()=>e(),t.onerror=()=>n(Error(`无法加载图片。`))}),t}async function qn(e,t=1536,n=.7){let r=await Kn(e),{width:i,height:a}=Gn(r.naturalWidth,r.naturalHeight,t);if(i===r.naturalWidth&&a===r.naturalHeight)return e;let o=document.createElement(`canvas`);o.width=i,o.height=a;let s=o.getContext(`2d`);return s?(s.drawImage(r,0,0,i,a),o.toDataURL(`image/jpeg`,n)):e}async function Jn(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{if(typeof r.result==`string`){t(r.result);return}n(Error(`无法读取所选图片文件。`))},r.onerror=()=>n(Error(`无法读取所选图片文件。`)),r.readAsDataURL(e)})}function Yn(e){let t=e.match(/^data:(.+?);base64,(.+)$/);if(!t)throw Error(`不支持的帧格式。`);return{mimeType:t[1],base64:t[2]}}function Xn(e){if(e&&typeof e==`object`){let t=e;if(t.error&&typeof t.error==`object`){let e=t.error;if(typeof e.message==`string`)return e.message}if(typeof t.message==`string`)return t.message}return null}function Zn(e){if(e&&typeof e==`object`){let t=e,n=Xn(e);if(n)throw Error(n);if(`choices`in t&&Array.isArray(t.choices)&&t.choices.length>0){let e=t.choices[0];if(e&&typeof e==`object`){let t=e;if(t.message&&typeof t.message==`object`){let e=t.message;if(typeof e.content==`string`)return e.content}}}}throw Error(`模型未返回有效的提示词，请重试。`)}function Qn(e){return e.replace(/^```(?:\w+)?\s*/i,``).replace(/```$/i,``).replace(/^(?:enhanced\s+prompt|video\s+prompt|image\s+prompt|final\s+prompt|prompt)\s*:\s*/i,``).trim()}async function $n({apiKey:e,baseUrl:t,modelName:n,targetModel:r,frames:i,videoInfo:a,signal:o}){let s=`${t}/chat/completions`,c=[{type:`text`,text:Mn(r,a)}];for(let e=0;e<i.length;e++){let t=i[e],{mimeType:n,base64:r}=Yn(t.dataUrl);c.push({type:`text`,text:`Frame ${e+1} at ${t.timestamp.toFixed(2)} seconds`}),c.push({type:`image_url`,image_url:{url:`data:${n};base64,${r}`}})}let l=await fetch(s,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${e}`},body:JSON.stringify({model:n,messages:[{role:`user`,content:c}],temperature:.4,top_p:.9}),signal:o}),u=await l.json();if(!l.ok)throw Error(Xn(u)??`API 请求失败，请检查您的 API 密钥、配额或网络连接。`);return Un(Zn(u))}async function er({apiKey:e,baseUrl:t,modelName:n,targetModel:r,imageDataUrl:i,imageInfo:a,signal:o,onProgress:s}){let c=`${t}/chat/completions`,l=kn(r,a),{mimeType:u,base64:d}=Yn(await qn(i)),f=await fetch(c,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${e}`},body:JSON.stringify({model:n,messages:[{role:`user`,content:[{type:`text`,text:l},{type:`image_url`,image_url:{url:`data:${u};base64,${d}`}}]}],temperature:.4,top_p:.9,max_tokens:32768,stream:!0}),signal:o});if(!f.ok){let e=await f.text().catch(()=>``);throw Error(`API 请求失败 (${f.status}): ${e.slice(0,300)}`)}let p=f.body?.getReader();if(!p)throw Error(`当前 API 端点不支持流式响应，请在设置中检查接口地址。`);let m=new TextDecoder,h=``,g=``;try{for(;;){let{done:e,value:t}=await p.read();if(e)break;if(o?.aborted)throw p.releaseLock(),new DOMException(`Aborted`,`AbortError`);g+=m.decode(t,{stream:!0});let n=g.split(`
`);g=n.pop()??``;for(let e of n){let t=e.trim();if(!t||!t.startsWith(`data: `))continue;let n=t.slice(6);if(n!==`[DONE]`)try{let e=JSON.parse(n),t=Xn(e);if(t)throw Error(t);let r=e?.choices?.[0]?.delta?.content;typeof r==`string`&&(h+=r,s?.(h))}catch(e){if(e instanceof SyntaxError)continue;throw e}}}}finally{p.releaseLock()}if(!h.trim())throw Error(`模型未返回有效的提示词，请重试。`);return Wn(h)}async function tr({apiKey:e,baseUrl:t,modelName:n,mode:r,idea:i,signal:a}){let o=i.trim();if(!o)throw Error(`请先输入简短创意。`);let s=`${t}/chat/completions`;if(r===`video`){let t=await fetch(s,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${e}`},body:JSON.stringify({model:n,messages:[{role:`user`,content:En(o)}],temperature:.45,top_p:.9}),signal:a}),r=await t.json();if(!t.ok)throw Error(Xn(r)??`API 请求失败，请检查您的 API 密钥、配额或网络连接。`);return Un(Zn(r)).generatedPrompt}let c=await fetch(s,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${e}`},body:JSON.stringify({model:n,messages:[{role:`user`,content:Dn(o)}],temperature:.55,top_p:.9}),signal:a}),l=await c.json();if(!c.ok)throw Error(Xn(l)??`API 请求失败，请检查您的 API 密钥、配额或网络连接。`);let u=Qn(Zn(l));if(!u)throw Error(`模型未返回有效的提示词，请重试。`);return u}async function nr({apiKey:e,baseUrl:t,modelName:n,targetModel:r,frames:i,videoInfo:a,signal:o}){return $n({apiKey:e,baseUrl:t,modelName:n,targetModel:r,frames:i,videoInfo:a,signal:o})}async function rr({apiKey:e,baseUrl:t,modelName:n,targetModel:r,imageDataUrl:i,imageInfo:a,signal:o,onProgress:s}){return er({apiKey:e,baseUrl:t,modelName:n,targetModel:r,imageDataUrl:i,imageInfo:a,signal:o,onProgress:s})}async function ir({apiKey:e,baseUrl:t,modelName:n,mode:r,idea:i,signal:a}){return tr({apiKey:e,baseUrl:t,modelName:n,mode:r,idea:i,signal:a})}var ar=2e3;function or(e,t,n=8e3){return new Promise((r,i)=>{let a=0,o=()=>{e.removeEventListener(t,s),window.clearTimeout(a)},s=()=>{o(),r()};a=window.setTimeout(()=>{o(),i(Error(`Timed out waiting for ${t}.`))},n),e.addEventListener(t,s,{once:!0})})}async function sr(e){e.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA||await or(e,`loadeddata`)}function cr(e,t){return Number.isFinite(e.duration)&&e.duration>0?Promise.resolve(!0):new Promise(n=>{let r=0,i=()=>{e.removeEventListener(`loadedmetadata`,a),e.removeEventListener(`durationchange`,a),window.clearTimeout(r)},a=()=>{Number.isFinite(e.duration)&&e.duration>0&&(i(),n(!0))};r=window.setTimeout(()=>{i(),n(Number.isFinite(e.duration)&&e.duration>0)},t),e.addEventListener(`loadedmetadata`,a),e.addEventListener(`durationchange`,a)})}function lr(e,t){return t===`fast`?5:t===`standard`?e<=10?6:e<=30?10:e<=60?14:16:e<=10?10:e<=30?16:e<=60?24:32}function ur(e){return e===`fast`?{maxSide:640,quality:.65}:{maxSide:768,quality:.7}}function dr(e,t){if(!Number.isFinite(e)||e<=0||t<=0)return[];if(t===1)return[0];let n=e*.95,r=n/(t-1);return Array.from({length:t},(e,i)=>i===t-1?n:r*i)}function fr(e){let t=[];for(let n of e){let e=Math.max(0,Number(n.toFixed(3)));t.some(t=>Math.abs(t-e)<.05)||t.push(e)}return t}function pr(e){let t=e.currentTime||0;return fr([-3,-1.5,0,1.5,3].map(e=>Math.max(0,t+e)))}function mr(e,t,n){let r=Math.max(e,t);if(r<=n)return{width:e,height:t};let i=n/r;return{width:Math.max(1,Math.round(e*i)),height:Math.max(1,Math.round(t*i))}}function hr(e,t){let{width:n,height:r}=mr(e.videoWidth||1280,e.videoHeight||720,t.maxSide),i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`);if(!a)throw Error(`无法为此视频准备画布上下文。`);a.drawImage(e,0,0,n,r);try{return i.toDataURL(`image/jpeg`,t.quality)}catch(e){throw Error(e instanceof Error&&/tainted|cross-origin/i.test(e.message)?`FRAME_EXTRACTION_BLOCKED`:`FRAME_EXTRACTION_FAILED`)}}async function gr(e,t,n){if(Math.abs(e.currentTime-t)>.05){try{e.currentTime=t}catch{throw Error(`FRAME_EXTRACTION_UNSEEKABLE`)}try{await or(e,`seeked`)}catch{throw Error(`FRAME_EXTRACTION_UNSEEKABLE`)}}return await sr(e),{timestamp:t,dataUrl:hr(e,n)}}async function _r(e,t={}){let n=t.mode??`standard`,r=ur(n),i=e.currentTime||0,a=e.paused,o=[],s=!1,c=!1;try{await sr(e),e.pause();let t=await cr(e,ar)&&Number.isFinite(e.duration)&&e.duration>0?dr(e.duration,lr(e.duration,n)):pr(e);for(let n of t)try{o.push(await gr(e,n,r))}catch(e){if(!(e instanceof Error))continue;if(e.message===`FRAME_EXTRACTION_BLOCKED`){s=!0;break}e.message===`FRAME_EXTRACTION_UNSEEKABLE`&&(c=!0)}if(o.length>0)return o;throw Error(s?`FRAME_EXTRACTION_BLOCKED`:c?`此视频无法通过跳转来提取帧。`:`无法从该视频提取帧。网站可能因 CORS 或流媒体限制阻止了视频访问。`)}catch(e){throw e instanceof Error&&e.message===`FRAME_EXTRACTION_BLOCKED`?Error(`无法直接分析此视频，因为网站阻止了帧提取。请尝试其他本地视频文件。`):Error(e instanceof Error?e.message:`无法从该视频提取帧。请尝试其他本地视频文件。`)}finally{try{Math.abs(e.currentTime-i)>.05&&(e.currentTime=i)}catch{}if(a)e.pause();else try{await e.play()}catch{}}}var $=m();function vr(e=d){return{mediaSource:{kind:`none`},isAnalyzingLocal:!1,resultMode:`empty`,resultText:`结果将在此呈现`,streamText:``,rawResultText:``,promptResult:null,resultMediaType:`image`,displayFormat:`json`,copyLabel:`复制`,uploadError:null,analysisState:l(null,`idle`,`结果将在此呈现`,e),editedResultText:null}}var yr={fast:{label:`快速`,description:`更少帧数，速度更快，适合快速预览。`},standard:{label:`标准`,description:`速度与质量均衡，适合大多数视频。`},detailed:{label:`详细`,description:`更多帧数，适合复杂运动或深度分析。`}},br=`image/jpeg,image/png,image/webp,image/gif,image/bmp,image/svg+xml`,xr=`video/mp4,video/webm,video/ogg,video/quicktime,video/x-msvideo`,Sr=new Set(br.split(`,`)),Cr=new Set(xr.split(`,`));function wr(){return(0,$.jsx)(`span`,{className:`mini-spinner`,"aria-hidden":`true`})}function Tr(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tab-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`rect`,{x:`3`,y:`5`,width:`18`,height:`14`,rx:`2`}),(0,$.jsx)(`circle`,{cx:`8.5`,cy:`10.5`,r:`1.5`}),(0,$.jsx)(`path`,{d:`M21 15l-5-5L5 19`})]})}function Er(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tab-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`rect`,{x:`2`,y:`4`,width:`15`,height:`16`,rx:`2`}),(0,$.jsx)(`path`,{d:`M17 8l5-3v14l-5-3`})]})}function Dr(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tab-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M15 4V2`}),(0,$.jsx)(`path`,{d:`M15 16v-2`}),(0,$.jsx)(`path`,{d:`M8 9h2`}),(0,$.jsx)(`path`,{d:`M20 9h2`}),(0,$.jsx)(`path`,{d:`M17.8 11.8L19 13`}),(0,$.jsx)(`path`,{d:`M15 9h.01`}),(0,$.jsx)(`path`,{d:`M17.8 6.2L19 5`}),(0,$.jsx)(`path`,{d:`m3 21 9-9`}),(0,$.jsx)(`path`,{d:`m12.2 6.2 1.4-1.4`})]})}function Or(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`rect`,{x:`9`,y:`9`,width:`11`,height:`11`,rx:`2`}),(0,$.jsx)(`path`,{d:`M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1`})]})}function kr(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M3 6h18`}),(0,$.jsx)(`path`,{d:`M8 6V4h8v2`}),(0,$.jsx)(`path`,{d:`M19 6l-1 14H6L5 6`}),(0,$.jsx)(`path`,{d:`M10 11v6`}),(0,$.jsx)(`path`,{d:`M14 11v6`})]})}function Ar(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`circle`,{cx:`8`,cy:`15`,r:`4`}),(0,$.jsx)(`path`,{d:`M12 15h9`}),(0,$.jsx)(`path`,{d:`M18 15v-3`}),(0,$.jsx)(`path`,{d:`M21 15v-2`})]})}function jr(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z`}),(0,$.jsx)(`path`,{d:`M9.5 12.5l1.8 1.8l3.7-4`})]})}function Mr(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M2 12s3.5-6 10-6s10 6 10 6s-3.5 6-10 6S2 12 2 12Z`}),(0,$.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`})]})}function Nr(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,$.jsx)(`path`,{d:`M12 7v5l3 2`})]})}function Pr({expanded:e}){return e?(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M4 14h6v6`}),(0,$.jsx)(`path`,{d:`M20 10h-6V4`}),(0,$.jsx)(`path`,{d:`M14 10l7-7`}),(0,$.jsx)(`path`,{d:`M3 21l7-7`})]}):(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M15 3h6v6`}),(0,$.jsx)(`path`,{d:`M9 21H3v-6`}),(0,$.jsx)(`path`,{d:`M21 3l-7 7`}),(0,$.jsx)(`path`,{d:`M3 21l7-7`})]})}function Fr(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`rect`,{x:`3`,y:`6`,width:`13`,height:`12`,rx:`2`}),(0,$.jsx)(`path`,{d:`M16 10l5-3v10l-5-3`})]})}function Ir(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`rect`,{x:`3`,y:`5`,width:`18`,height:`14`,rx:`2`}),(0,$.jsx)(`circle`,{cx:`9`,cy:`10`,r:`1.5`}),(0,$.jsx)(`path`,{d:`M21 15l-4.2-4.2a1.4 1.4 0 0 0-2 0L9 16.5`})]})}function Lr(){return(0,$.jsx)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,$.jsx)(`path`,{d:`M17 3a2.83 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5Z`})})}function Rr(){return(0,$.jsx)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,$.jsx)(`polyline`,{points:`20 6 9 17 4 12`})})}function zr(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M18 6 6 18`}),(0,$.jsx)(`path`,{d:`M6 6l12 12`})]})}function Br(e,t){return{found:!0,duration:Number.isFinite(e.duration)?e.duration:void 0,currentTime:e.currentTime,videoWidth:e.videoWidth||void 0,videoHeight:e.videoHeight||void 0,src:t,pageTitle:`本地上传`,pageUrl:`local://upload`}}function Vr(e,t){return{found:!0,imageWidth:e.naturalWidth||void 0,imageHeight:e.naturalHeight||void 0,src:t,pageTitle:`本地上传`,pageUrl:`local://upload`}}async function Hr(e){let t=document.createElement(`video`);return t.src=e,t.preload=`auto`,t.muted=!0,t.playsInline=!0,t.crossOrigin=`anonymous`,await new Promise((e,n)=>{let r=()=>{a(),e()},i=()=>{a(),n(Error(`无法加载所选视频文件。`))},a=()=>{t.removeEventListener(`loadeddata`,r),t.removeEventListener(`error`,i)};t.addEventListener(`loadeddata`,r,{once:!0}),t.addEventListener(`error`,i,{once:!0}),t.load()}),t}async function Ur(e){let t=new Image;return t.src=e,await new Promise((e,n)=>{t.onload=()=>e(),t.onerror=()=>n(Error(`无法加载所选图片文件。`))}),t}async function Wr(e){if(e)try{let t=new Image;t.src=e,await new Promise((e,n)=>{t.onload=()=>e(),t.onerror=()=>n(Error(`无法加载缩略图。`))});let n=Math.min(1,320/t.width),r=document.createElement(`canvas`);r.width=Math.max(1,Math.round(t.width*n)),r.height=Math.max(1,Math.round(t.height*n));let i=r.getContext(`2d`);return i?(i.drawImage(t,0,0,r.width,r.height),r.toDataURL(`image/jpeg`,.68)):e}catch{return e}}function Gr(){return`${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function Kr(e){return new Intl.DateTimeFormat(void 0,{month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`}).format(e)}function qr(e){if(e.kind===`local-video`&&e.videoInfo?.videoWidth&&e.videoInfo?.videoHeight)return`${e.videoInfo.videoWidth} / ${e.videoInfo.videoHeight}`;if(e.kind===`local-image`&&e.imageInfo?.imageWidth&&e.imageInfo?.imageHeight||e.kind===`web-image`&&e.imageInfo?.imageWidth&&e.imageInfo?.imageHeight)return`${e.imageInfo.imageWidth} / ${e.imageInfo.imageHeight}`}function Jr(){return(0,$.jsxs)(`svg`,{"aria-hidden":`true`,className:`placeholder-sparkle`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,$.jsx)(`path`,{d:`M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z`,fill:`currentColor`}),(0,$.jsx)(`path`,{d:`M18.4 3.8L19 5.4L20.6 6L19 6.6L18.4 8.2L17.8 6.6L16.2 6L17.8 5.4L18.4 3.8Z`,fill:`currentColor`})]})}function Yr(e){return e.phase===`error`&&(e.errorMessage??e.statusText).toLowerCase().includes(`api key required`)}function Xr(){let[e,a]=(0,K.useState)(f),[o,d]=(0,K.useState)(``),[m,g]=(0,K.useState)(`https://api.openai.com/v1`),[_,v]=(0,K.useState)(``),[y,b]=(0,K.useState)([]),[x,S]=(0,K.useState)(null),[C,ee]=(0,K.useState)({image:vr(),video:vr()}),[w,te]=(0,K.useState)(`image`),[ne,T]=(0,K.useState)(`main`),[re,ie]=(0,K.useState)(null),[ae,E]=(0,K.useState)(!1),[D,oe]=(0,K.useState)(`video`),[O,k]=(0,K.useState)(``),[A,se]=(0,K.useState)(`empty`),[j,ce]=(0,K.useState)(`增强结果将在此呈现`),[le,M]=(0,K.useState)(`复制`),[N,ue]=(0,K.useState)(!1),P=(0,K.useRef)(null),F=(0,K.useRef)(null),I=(0,K.useRef)({image:null,video:null}),L=(0,K.useRef)({image:null,video:null}),R=(0,K.useRef)(null),z=(0,K.useRef)(null),de=(0,K.useRef)(null);function B(e,t){ee(n=>({...n,[e]:{...n[e],...t}}))}let V=w===`video`?`video`:`image`,H=C[V],U=e.apiKey.trim().length>0&&e.baseUrl.trim().length>0&&e.modelName.trim().length>0,fe=H.mediaSource.kind!==`none`,W=H.isAnalyzingLocal||H.analysisState.phase===`detecting`||H.analysisState.phase===`extracting`||H.analysisState.phase===`analyzing`,pe=fe&&!W,me=H.resultMode===`text`&&H.resultText.trim().length>0,he=O.trim().length>0&&!N,ge=A===`text`&&j.trim().length>0,_e=(0,K.useMemo)(()=>H.resultMode!==`text`||!H.promptResult?H.resultText:H.editedResultText===null?H.rawResultText:H.editedResultText,[H.resultMode,H.promptResult,H.rawResultText,H.resultText,H.editedResultText]);(0,K.useEffect)(()=>{(async()=>{let[e,t]=await Promise.all([p(),u()]);a(e),d(e.apiKey),g(e.baseUrl),v(e.modelName),b(t);let n=await chrome.runtime.sendMessage({type:`VIDEO2PROMPT_GET_PANEL_CONTEXT`});S(n.activeTabId),n.state?be(n.state):(G(`image`),G(`video`))})();let e=e=>{if(e.type===`VIDEO2PROMPT_ANALYSIS_STATE_UPDATED`){be(e.state),e.state.tabId&&S(e.state.tabId);return}e.type===`VIDEO2PROMPT_FOCUS_API_KEY`&&(T(`settings`),setMenuOpen(!1))},t=(e,t)=>{if(t===`local`){if(e[`video2prompt:settings`]){let t=e[`video2prompt:settings`].newValue,n={...f,...t??{}};a(n),d(n.apiKey),g(n.baseUrl),v(n.modelName)}e[`video2prompt:history`]&&b(e[`video2prompt:history`].newValue??[])}};return chrome.runtime.onMessage.addListener(e),chrome.storage.onChanged.addListener(t),()=>{chrome.runtime.onMessage.removeListener(e),chrome.storage.onChanged.removeListener(t);for(let e of[`image`,`video`])I.current[e]&&(URL.revokeObjectURL(I.current[e]),I.current[e]=null);de.current&&window.clearTimeout(de.current)}},[]);function ve(e){ie(e),de.current&&window.clearTimeout(de.current),de.current=window.setTimeout(()=>ie(null),1800)}async function ye(e){!e.promptText.trim()||z.current===e.dedupeKey||(z.current=e.dedupeKey,b(await i({id:Gr(),createdAt:Date.now(),sourceType:e.sourceType,mediaType:e.mediaType,sourceUrl:e.sourceUrl,pageTitle:e.pageTitle,thumbnailDataUrl:await Wr(e.thumbnailDataUrl),promptText:e.promptText,videoSummary:e.videoSummary,promptResult:e.promptResult})))}function be(e){let t=Yr(e),n=e.mediaType===`video`?`video`:`image`;if(B(n,{analysisState:e}),T(t?`settings`:`main`),e.mediaType===`image`&&(e.previewFrameUrl||e.imageInfo)&&(B(n,{mediaSource:{kind:`web-image`,previewUrl:e.previewFrameUrl,imageInfo:e.imageInfo}}),te(`image`)),e.phase===`generated`&&e.generatedPrompt){B(n,{resultMode:`text`,resultText:e.generatedPrompt,rawResultText:e.rawResult??``,promptResult:e.promptResult??null,resultMediaType:e.mediaType??`image`,displayFormat:`json`,copyLabel:`复制`}),ye({sourceType:e.sourceType??`web`,mediaType:e.mediaType??`image`,sourceUrl:e.imageInfo?.pageUrl??e.imageInfo?.src,pageTitle:e.imageInfo?.pageTitle,thumbnailDataUrl:e.previewFrameUrl,promptText:e.generatedPrompt,videoSummary:e.mediaType===`video`?e.videoSummary:e.imageSummary,promptResult:e.promptResult,dedupeKey:`${e.sourceType??`web`}:${e.mediaType??`image`}:${e.updatedAt}:${e.generatedPrompt}`});return}if(e.phase===`error`){if(t){G(n);return}B(n,{resultMode:`error`,resultText:e.errorMessage??e.statusText});return}if(e.phase===`detecting`||e.phase===`extracting`||e.phase===`analyzing`){let t=e.streamProgress;B(n,{resultMode:`loading`,resultText:t||`正在识别中...`,streamText:t||``});return}e.phase===`ready`&&!e.generatedPrompt&&G(n)}function G(e){B(e,{resultMode:`empty`,resultText:`结果将在此呈现`,streamText:``,rawResultText:``,promptResult:null,copyLabel:`复制`,editedResultText:null})}async function xe(){if(!U){T(`settings`),setMenuOpen(!1);return}if(!fe||W)return;let t=V,n=C[t].mediaSource;G(t),B(t,{resultMode:`loading`,resultText:`正在识别中...`});let r=new AbortController;if(L.current[t]=r,n.kind===`web-image`){let e=await chrome.runtime.sendMessage({type:`VIDEO2PROMPT_START_ANALYSIS`,tabId:x??void 0,imageUrl:n.imageInfo?.src,triggeredFrom:`sidePanel`});e?.state&&be(e.state),L.current[t]=null;return}if(n.kind===`local-video`){B(t,{isAnalyzingLocal:!0});try{let i=await Hr(n.objectUrl),a=Br(i,n.fileName),o=await _r(i,{mode:e.frameSamplingMode}),s=await nr({apiKey:e.apiKey,baseUrl:e.baseUrl,modelName:e.modelName,targetModel:e.targetModel,frames:o,videoInfo:a,signal:r.signal}),c=l(x,`generated`,`识别完成`,e.targetModel,{mediaType:`video`,sourceType:`local`,videoInfo:a,previewFrameUrl:o[0]?.dataUrl,keyframeCount:o.length,...s,promptResult:s.promptResult});B(t,{mediaSource:{kind:`local-video`,objectUrl:n.objectUrl,fileName:n.fileName,videoInfo:a},analysisState:c,resultMode:`text`,resultText:s.generatedPrompt,rawResultText:s.rawResult,promptResult:s.promptResult,resultMediaType:`video`,displayFormat:`json`,isAnalyzingLocal:!1}),await ye({sourceType:`local`,mediaType:`video`,sourceUrl:a.src,pageTitle:a.pageTitle,thumbnailDataUrl:o[0]?.dataUrl,promptText:s.generatedPrompt,videoSummary:s.videoSummary,promptResult:s.promptResult,dedupeKey:`local:${c.updatedAt}:${s.generatedPrompt}`})}catch(n){if(n instanceof DOMException&&n.name===`AbortError`){G(t),B(t,{isAnalyzingLocal:!1});return}let r=n instanceof Error?n.message:`无法从该视频提取帧。`;B(t,{analysisState:l(x,`error`,r,e.targetModel,{errorMessage:r}),resultMode:`error`,resultText:r,isAnalyzingLocal:!1})}finally{L.current[t]=null}}if(n.kind===`local-image`){B(t,{isAnalyzingLocal:!0,streamText:``});try{let[i,a]=await Promise.all([Ur(n.objectUrl),Jn(n.file)]),o=Vr(i,n.fileName),s=await rr({apiKey:e.apiKey,baseUrl:e.baseUrl,modelName:e.modelName,targetModel:e.targetModel,imageDataUrl:a,imageInfo:o,signal:r.signal,onProgress:e=>{B(t,{streamText:e,resultText:e})}}),c=l(x,`generated`,`识别完成`,e.targetModel,{mediaType:`image`,sourceType:`local`,imageInfo:o,previewFrameUrl:a,...s,promptResult:s.promptResult});B(t,{mediaSource:{kind:`local-image`,objectUrl:n.objectUrl,fileName:n.fileName,file:n.file,imageInfo:o},analysisState:c,resultMode:`text`,resultText:s.generatedPrompt,rawResultText:s.rawResult,promptResult:s.promptResult,resultMediaType:`image`,displayFormat:`json`,isAnalyzingLocal:!1}),await ye({sourceType:`local`,mediaType:`image`,sourceUrl:o.src,pageTitle:o.pageTitle,thumbnailDataUrl:a,promptText:s.generatedPrompt,videoSummary:s.imageSummary,promptResult:s.promptResult,dedupeKey:`local:image:${c.updatedAt}:${s.generatedPrompt}`})}catch(n){if(n instanceof DOMException&&n.name===`AbortError`){G(t),B(t,{isAnalyzingLocal:!1});return}let r=n instanceof Error?n.message:`无法分析此图片，请尝试其他文件。`;B(t,{analysisState:l(x,`error`,r,e.targetModel,{mediaType:`image`,sourceType:`local`,errorMessage:r}),resultMode:`error`,resultText:r,isAnalyzingLocal:!1})}finally{L.current[t]=null}}}async function Se(){if(W)return;let t=V;I.current[t]&&(URL.revokeObjectURL(I.current[t]),I.current[t]=null),x&&await chrome.runtime.sendMessage({type:`VIDEO2PROMPT_CLEAR_ACTIVE_ANALYSIS`,tabId:x}),B(t,{mediaSource:{kind:`none`},analysisState:l(x,`idle`,`结果将在此呈现`,e.targetModel),uploadError:null}),G(t)}function Ce(){let e=V;L.current[e]&&(L.current[e].abort(),L.current[e]=null)}function we(){B(V,{uploadError:null}),w===`image`?P.current?.click():w===`video`&&F.current?.click()}async function Te(t,n){let r=t.target.files?.[0];if(!r)return;let i=n;if(n===`image`&&!Sr.has(r.type)){B(i,{uploadError:`请上传图片文件（JPG / PNG / WebP / GIF / BMP / SVG）`}),t.target.value=``;return}if(n===`video`&&!Cr.has(r.type)){B(i,{uploadError:`请上传视频文件（MP4 / WebM / OGG / MOV / AVI）`}),t.target.value=``;return}B(i,{uploadError:null}),I.current[i]&&URL.revokeObjectURL(I.current[i]);let a=URL.createObjectURL(r);if(I.current[i]=a,r.type.startsWith(`image/`)){let t=Vr(await Ur(a),r.name);B(i,{mediaSource:{kind:`local-image`,objectUrl:a,fileName:r.name,file:r,imageInfo:t},analysisState:l(x,`ready`,`图片已就绪`,e.targetModel,{mediaType:`image`,sourceType:`local`,imageInfo:t,previewFrameUrl:a})})}else{let t=Br(await Hr(a),r.name);B(i,{mediaSource:{kind:`local-video`,objectUrl:a,fileName:r.name,videoInfo:t},analysisState:l(x,`ready`,`视频已就绪`,e.targetModel,{mediaType:`video`,sourceType:`local`,videoInfo:t})})}G(i),t.target.value=``}async function Ee(t,n){let r=n;if(B(r,{uploadError:null}),n===`image`&&!Sr.has(t.type)){B(r,{uploadError:`请上传图片文件（JPG / PNG / WebP / GIF / BMP / SVG）`});return}if(n===`video`&&!Cr.has(t.type)){B(r,{uploadError:`请上传视频文件（MP4 / WebM / OGG / MOV / AVI）`});return}I.current[r]&&URL.revokeObjectURL(I.current[r]);let i=URL.createObjectURL(t);if(I.current[r]=i,t.type.startsWith(`image/`)){let n=Vr(await Ur(i),t.name);B(r,{mediaSource:{kind:`local-image`,objectUrl:i,fileName:t.name,file:t,imageInfo:n},analysisState:l(x,`ready`,`图片已就绪`,e.targetModel,{mediaType:`image`,sourceType:`local`,imageInfo:n,previewFrameUrl:i})})}else{let n=Br(await Hr(i),t.name);B(r,{mediaSource:{kind:`local-video`,objectUrl:i,fileName:t.name,videoInfo:n},analysisState:l(x,`ready`,`视频已就绪`,e.targetModel,{mediaType:`video`,sourceType:`local`,videoInfo:n})})}G(r)}async function De(){if(!me)return;let e=V,t=C[e],n=t.editedResultText===null?_e:t.editedResultText;try{await navigator.clipboard.writeText(n),B(e,{copyLabel:`已复制`}),window.setTimeout(()=>B(e,{copyLabel:`复制`}),1600)}catch{B(e,{copyLabel:`复制`})}}function Oe(e){return e.promptResult?JSON.stringify(e.promptResult,null,2):e.promptText}async function ke(e){try{await navigator.clipboard.writeText(Oe(e)),Y(e.id),window.setTimeout(()=>{Y(t=>t===e.id?null:t)},1600)}catch{Y(null)}}function Ae(e){return e.sourceType===`enhancer`?`提示词增强`:e.mediaType===`video`?`视频识词`:`图片识词`}async function je(e){b(await t(e.id))}function q(e){Ue(e.id),Ge(Oe(e))}function Me(){Ue(null),Ge(``)}async function Ne(){try{await navigator.clipboard.writeText(We),Y(`edit`),window.setTimeout(()=>{Y(e=>e===`edit`?null:e)},1600)}catch{}}async function Pe(){let e=await n(o);e=await c(m),e=await r(_),a(e),d(e.apiKey),g(e.baseUrl),v(e.modelName),ve(`配置已保存`)}async function Fe(){window.confirm(`确定删除已保存的模型配置吗？
重新配置后才能继续使用。`)&&(a(await s()),d(``),g(f.baseUrl),v(``),ve(`配置已删除`))}async function Ie(t){e.frameSamplingMode!==t&&(a(await h(t)),ve(`帧采样模式已保存`))}function Le(){se(`empty`),ce(`增强结果将在此呈现`),M(`复制`)}async function Re(){if(!O.trim()||N)return;if(!U){T(`settings`),setMenuOpen(!1);return}ue(!0),se(`loading`),ce(`正在增强中...`),M(`复制`);let t=new AbortController;R.current=t;try{let n=await ir({apiKey:e.apiKey,baseUrl:e.baseUrl,modelName:e.modelName,mode:D,idea:O,signal:t.signal});se(`text`),ce(n),await ye({sourceType:`enhancer`,mediaType:D,sourceUrl:`prompt-enhancer://${D}`,pageTitle:D===`video`?`视频提示词增强`:`图片提示词增强`,promptText:n,videoSummary:O.trim(),dedupeKey:`enhancer:${D}:${n}`})}catch(e){if(e instanceof DOMException&&e.name===`AbortError`){Le();return}let t=e instanceof Error?e.message:`无法增强此提示词，请重试。`;se(`error`),ce(t)}finally{ue(!1),R.current=null}}function ze(){R.current&&=(R.current.abort(),null)}async function Be(){if(ge)try{await navigator.clipboard.writeText(j),M(`已复制`),window.setTimeout(()=>M(`复制`),1600)}catch{M(`复制`)}}function J(e){te(e),T(`main`)}let[Ve,Y]=(0,K.useState)(null),[He,Ue]=(0,K.useState)(null),[We,Ge]=(0,K.useState)(``),X=(0,K.useMemo)(()=>{let e=H.mediaSource;return e.kind===`web-image`&&e.previewUrl?(0,$.jsx)(`img`,{src:e.previewUrl,alt:`图片预览`,className:`video-preview-media`}):e.kind===`local-video`?(0,$.jsx)(`video`,{className:`video-preview-media`,src:e.objectUrl,muted:!0,playsInline:!0,preload:`metadata`}):e.kind===`local-image`?(0,$.jsx)(`img`,{src:e.objectUrl,alt:`图片预览`,className:`video-preview-media`}):e.kind===`web-image`?(0,$.jsx)(`div`,{className:`video-preview-placeholder`}):null},[H.mediaSource]),Ke=(0,K.useMemo)(()=>qr(H.mediaSource),[H.mediaSource]);return(0,$.jsxs)(`main`,{className:`sophia-shell`,children:[(0,$.jsx)(`input`,{ref:P,className:`hidden-file-input`,type:`file`,accept:br,onChange:e=>void Te(e,`image`)}),(0,$.jsx)(`input`,{ref:F,className:`hidden-file-input`,type:`file`,accept:xr,onChange:e=>void Te(e,`video`)}),ne===`main`?(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(Qr,{children:[(0,$.jsx)(`div`,{className:`header-brand`,children:(0,$.jsx)(`img`,{src:`icons/logo_new1.png`,alt:`Sophia`,className:`brand-icon`})}),(0,$.jsx)(`div`,{className:`header-nav-wrap`,children:(0,$.jsxs)(`nav`,{className:`tab-nav`,role:`tablist`,children:[(0,$.jsxs)(`button`,{role:`tab`,"aria-selected":w===`image`,className:`tab-nav-btn ${w===`image`?`tab-nav-btn--active`:``}`,onClick:()=>J(`image`),title:`图片视图`,children:[(0,$.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`}),(0,$.jsx)(`circle`,{cx:`9`,cy:`9`,r:`2`}),(0,$.jsx)(`path`,{d:`M21 15l-3.5-3.5a2 2 0 0 0-3 0L6 20`})]}),(0,$.jsx)(`span`,{className:`tab-tooltip`,children:`图片视图`})]}),(0,$.jsxs)(`button`,{role:`tab`,"aria-selected":w===`video`,className:`tab-nav-btn ${w===`video`?`tab-nav-btn--active`:``}`,onClick:()=>J(`video`),title:`视频视图`,children:[(0,$.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`rect`,{x:`2`,y:`4`,width:`15`,height:`16`,rx:`2`}),(0,$.jsx)(`path`,{d:`M17 8l4-2v12l-4-2`})]}),(0,$.jsx)(`span`,{className:`tab-tooltip`,children:`视频视图`})]}),(0,$.jsxs)(`button`,{role:`tab`,"aria-selected":w===`enhancer`,className:`tab-nav-btn ${w===`enhancer`?`tab-nav-btn--active`:``}`,onClick:()=>J(`enhancer`),title:`提示词增强`,children:[(0,$.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),(0,$.jsx)(`polyline`,{points:`14 2 14 8 20 8`}),(0,$.jsx)(`line`,{x1:`9`,y1:`13`,x2:`15`,y2:`13`}),(0,$.jsx)(`line`,{x1:`9`,y1:`17`,x2:`13`,y2:`17`})]}),(0,$.jsx)(`span`,{className:`tab-tooltip`,children:`提示词增强`})]})]})}),(0,$.jsxs)(`div`,{className:`header-actions`,children:[(0,$.jsx)(`button`,{className:`header-action-btn`,"aria-label":`历史记录`,onClick:()=>T(`history`),children:(0,$.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`path`,{d:`M3 12a9 9 0 1 0 3-6.7`}),(0,$.jsx)(`path`,{d:`M3 3v4h4`}),(0,$.jsx)(`path`,{d:`M12 7v5l3 2`})]})}),(0,$.jsx)(`button`,{className:`header-action-btn`,"aria-label":`设置`,onClick:()=>T(`settings`),children:(0,$.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`}),(0,$.jsx)(`path`,{d:`M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z`})]})})]})]}),(0,$.jsxs)(`div`,{className:`page-content`,children:[w===`image`?(0,$.jsx)(Zr,{mode:`image`,tabData:C.image,isAnalyzing:W,canAnalyze:pe,hasApiKey:U,displayResultText:_e,showCopy:me,currentMediaPreview:X,currentMediaAspectRatio:Ke,onUploadClick:we,onAnalyze:xe,onClear:Se,onAbort:Ce,onCopy:De,onEditResult:e=>B(`image`,{editedResultText:e}),onFileDrop:e=>Ee(e,`image`)}):null,w===`video`?(0,$.jsx)(Zr,{mode:`video`,tabData:C.video,isAnalyzing:W,canAnalyze:pe,hasApiKey:U,displayResultText:_e,showCopy:me,currentMediaPreview:X,currentMediaAspectRatio:Ke,frameSamplingMode:e.frameSamplingMode,onUploadClick:we,onAnalyze:xe,onClear:Se,onAbort:Ce,onCopy:De,onEditResult:e=>B(`video`,{editedResultText:e}),onFrameSamplingModeChange:Ie,onFileDrop:e=>Ee(e,`video`)}):null,w===`enhancer`?(0,$.jsx)(ti,{enhancerMode:D,enhancerInput:O,isEnhancingPrompt:N,canEnhancePrompt:he,hasApiKey:U,enhancerResultMode:A,enhancerResultText:j,enhancerCopyLabel:le,showEnhancerCopy:ge,onSetEnhancerMode:e=>{oe(e),Le()},onSetEnhancerInput:k,onEnhance:Re,onAbortEnhancer:ze,onCopyEnhancer:()=>void Be()}):null]})]}):null,ne===`history`?(0,$.jsxs)(`section`,{className:`subview-screen`,children:[(0,$.jsx)(`div`,{className:`subview-topbar`,children:(0,$.jsxs)(`div`,{className:`subview-title-row`,children:[(0,$.jsx)(`button`,{className:`back-button back-button-box`,onClick:()=>T(`main`),children:(0,$.jsx)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,$.jsx)(`path`,{d:`M15 18L9 12L15 6`})})}),(0,$.jsxs)(`div`,{className:`subview-title-group`,children:[(0,$.jsx)(`h2`,{className:`subview-title`,children:`历史记录`}),(0,$.jsx)(`p`,{className:`subview-subtitle`,children:`最近生成的记录`})]})]})}),(0,$.jsx)(`section`,{className:`history-panel`,children:y.length===0?(0,$.jsxs)(`div`,{className:`history-empty-state`,children:[(0,$.jsx)(`strong`,{children:`暂无历史记录`}),(0,$.jsx)(`p`,{children:`生成结果后会自动保存到这里`})]}):(0,$.jsx)(`div`,{className:`history-masonry`,children:y.map(e=>{let t=Ve===e.id,n=He===e.id,r=e.sourceType===`enhancer`,i=e.promptText||``,a=Ae(e);return(0,$.jsx)(`article`,{className:`history-card${n?` is-editing`:``}`,children:n?(0,$.jsxs)(`div`,{className:`history-card-edit-view`,children:[(0,$.jsxs)(`div`,{className:`history-card-edit-top`,children:[e.thumbnailDataUrl?(0,$.jsx)(`div`,{className:`history-card-edit-thumb`,children:(0,$.jsx)(`img`,{src:e.thumbnailDataUrl,alt:``})}):(0,$.jsx)(`div`,{className:`history-card-edit-thumb history-card-edit-thumb--placeholder`,children:r?(0,$.jsx)(Dr,{}):e.mediaType===`video`?(0,$.jsx)(Er,{}):(0,$.jsx)(Tr,{})}),(0,$.jsxs)(`div`,{className:`history-card-edit-info`,children:[(0,$.jsxs)(`span`,{className:`history-card-type-badge`,children:[r?(0,$.jsx)(Dr,{}):e.mediaType===`video`?(0,$.jsx)(Er,{}):(0,$.jsx)(Tr,{}),a]}),(0,$.jsxs)(`div`,{className:`history-card-date`,children:[(0,$.jsx)(Nr,{}),Kr(e.createdAt)]})]})]}),(0,$.jsxs)(`div`,{className:`history-card-edit-prompt`,children:[(0,$.jsx)(`label`,{children:`提示词`}),(0,$.jsx)(`textarea`,{value:We,onChange:e=>Ge(e.target.value),rows:5})]}),(0,$.jsxs)(`div`,{className:`history-card-edit-actions`,children:[(0,$.jsx)(`button`,{className:`history-card-btn ${t?`history-card-btn--copied`:``}`,title:`复制`,onClick:()=>void Ne(),children:t?(0,$.jsx)(Rr,{}):(0,$.jsx)(Or,{})}),(0,$.jsx)(`button`,{className:`history-card-btn history-card-btn--close`,title:`收起`,onClick:Me,children:(0,$.jsx)(zr,{})})]})]}):(0,$.jsxs)(`div`,{className:`history-card-inner`,children:[(0,$.jsx)(`div`,{className:`history-card-front`,children:r?(0,$.jsx)(`div`,{className:`history-card-text`,children:(0,$.jsx)(`p`,{children:e.videoSummary||e.promptText})}):e.thumbnailDataUrl?(0,$.jsx)(`div`,{className:`history-card-media`,children:(0,$.jsx)(`img`,{src:e.thumbnailDataUrl,alt:``,loading:`lazy`})}):(0,$.jsx)(`div`,{className:`history-card-text`,children:(0,$.jsx)(`p`,{children:e.videoSummary||e.promptText})})}),(0,$.jsxs)(`div`,{className:`history-card-back`,children:[(0,$.jsx)(`div`,{className:`history-card-type-row`,children:(0,$.jsxs)(`span`,{className:`history-card-type-badge`,children:[r?(0,$.jsx)(Dr,{}):e.mediaType===`video`?(0,$.jsx)(Er,{}):(0,$.jsx)(Tr,{}),a]})}),(0,$.jsxs)(`div`,{className:`history-card-date`,children:[(0,$.jsx)(Nr,{}),Kr(e.createdAt)]}),(0,$.jsx)(`p`,{className:`history-card-prompt`,children:i}),(0,$.jsxs)(`div`,{className:`history-card-actions`,children:[(0,$.jsx)(`button`,{className:`history-card-btn history-card-btn--edit`,title:`编辑`,onClick:t=>{t.stopPropagation(),q(e)},children:(0,$.jsx)(Lr,{})}),(0,$.jsx)(`button`,{className:`history-card-btn ${t?`history-card-btn--copied`:``}`,title:`复制`,onClick:t=>{t.stopPropagation(),ke(e)},children:t?(0,$.jsx)(Rr,{}):(0,$.jsx)(Or,{})}),(0,$.jsx)(`button`,{className:`history-card-btn history-card-btn--delete`,title:`删除`,onClick:t=>{t.stopPropagation(),je(e)},children:(0,$.jsx)(kr,{})})]})]})]})},e.id)})})})]}):null,ne===`settings`?(0,$.jsxs)(`section`,{className:`subview-screen`,children:[(0,$.jsx)(`div`,{className:`subview-topbar`,children:(0,$.jsxs)(`div`,{className:`subview-title-row`,children:[(0,$.jsx)(`button`,{className:`back-button back-button-box`,onClick:()=>T(`main`),children:(0,$.jsx)(`svg`,{"aria-hidden":`true`,className:`tiny-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,$.jsx)(`path`,{d:`M15 18L9 12L15 6`})})}),(0,$.jsx)(`h2`,{className:`subview-title`,children:`设置`})]})}),(0,$.jsxs)(`section`,{className:`settings-stack`,children:[(0,$.jsxs)(`article`,{className:`sophia-card settings-hero-card`,children:[(0,$.jsxs)(`div`,{className:`settings-hero-top`,children:[(0,$.jsx)(`div`,{className:`settings-icon-box`,children:(0,$.jsx)(Ar,{})}),(0,$.jsx)(`h3`,{className:`settings-hero-title`,children:`模型配置`})]}),(0,$.jsx)(`div`,{className:`settings-hero-divider`}),(0,$.jsxs)(`label`,{className:`settings-field settings-field-large`,children:[(0,$.jsx)(`span`,{children:`模型名称`}),(0,$.jsx)(`input`,{type:`text`,value:_,onChange:e=>v(e.target.value),placeholder:`例如 gpt-4o、deepseek-chat`,autoComplete:`off`})]}),(0,$.jsxs)(`label`,{className:`settings-field settings-field-large`,children:[(0,$.jsx)(`span`,{children:`API 密钥`}),(0,$.jsxs)(`div`,{className:`settings-input-wrap`,children:[(0,$.jsx)(`input`,{type:ae?`text`:`password`,value:o,onChange:e=>d(e.target.value),placeholder:`输入你的 API 密钥`,autoComplete:`off`}),(0,$.jsx)(`button`,{type:`button`,className:`input-icon-button`,"aria-label":ae?`隐藏`:`显示`,onClick:()=>E(e=>!e),children:(0,$.jsx)(Mr,{})})]})]}),(0,$.jsxs)(`label`,{className:`settings-field settings-field-large`,children:[(0,$.jsx)(`span`,{children:`接口地址`}),(0,$.jsx)(`input`,{type:`text`,value:m,onChange:e=>g(e.target.value),placeholder:`https://api.openai.com/v1`,autoComplete:`off`})]}),(0,$.jsxs)(`div`,{className:`settings-actions-column settings-actions-column-large`,children:[(0,$.jsxs)(`button`,{className:`settings-save-button`,onClick:()=>void Pe(),children:[(0,$.jsx)(jr,{}),(0,$.jsx)(`span`,{children:e.apiKey?`更新配置`:`保存配置`})]}),e.apiKey?(0,$.jsxs)(`button`,{className:`settings-delete-button`,onClick:()=>void Fe(),children:[(0,$.jsx)(kr,{}),(0,$.jsx)(`span`,{children:`删除配置`})]}):null]})]}),(0,$.jsx)(`article`,{className:`sophia-card settings-privacy-card`,children:(0,$.jsxs)(`div`,{className:`settings-privacy-row`,children:[(0,$.jsx)(`div`,{className:`settings-icon-box settings-icon-box-soft`,children:(0,$.jsx)(jr,{})}),(0,$.jsxs)(`div`,{className:`settings-privacy-copy`,children:[(0,$.jsx)(`h3`,{className:`settings-privacy-title`,children:`隐私`}),(0,$.jsx)(`p`,{children:`你的 API 密钥和配置仅存储在浏览器本地，不会上传至任何服务器`})]})]})})]})]}):null,re?(0,$.jsx)(`div`,{className:`toast-modern`,children:re}):null]})}function Zr({mode:e,tabData:t,isAnalyzing:n,canAnalyze:r,hasApiKey:i,displayResultText:a,showCopy:o,currentMediaPreview:s,currentMediaAspectRatio:c,frameSamplingMode:l,onUploadClick:u,onAnalyze:d,onClear:f,onAbort:p,onCopy:m,onEditResult:h,onFrameSamplingModeChange:g,onFileDrop:_}){let v=e===`image`,y=v?`图片`:`视频`,b=v?`JPG / PNG / WebP / GIF`:`MP4 / WebM / MOV`,[x,S]=(0,K.useState)(!1),[C,ee]=(0,K.useState)(!1),[w,te]=(0,K.useState)(!1),[ne,T]=(0,K.useState)(!1);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)($r,{className:`${ne?`is-drag-over`:``} ${x?`is-expanded`:``}`,children:t.mediaSource.kind===`none`?(0,$.jsxs)(`label`,{className:`upload-label`,onClick:u,role:`button`,tabIndex:0,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&u()},onDragOver:e=>{e.preventDefault(),e.stopPropagation(),T(!0)},onDragLeave:e=>{e.preventDefault(),e.stopPropagation(),T(!1)},onDrop:e=>{e.preventDefault(),e.stopPropagation(),T(!1);let t=e.dataTransfer.files?.[0];t&&_&&_(t)},children:[(0,$.jsxs)(`div`,{className:`upload-design`,children:[(0,$.jsx)(`svg`,{height:`36`,viewBox:`0 0 640 512`,fill:`rgb(82, 82, 82)`,children:(0,$.jsx)(`path`,{d:`M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z`})}),(0,$.jsxs)(`p`,{className:`upload-title`,children:[`拖拽`,y,`到此处`]}),(0,$.jsx)(`p`,{className:`upload-or`,children:`或`}),(0,$.jsx)(`span`,{className:`upload-browse-btn`,children:`选择文件`}),(0,$.jsxs)(`p`,{className:`upload-hint`,children:[`支持 `,b,` 等格式`]})]}),t.uploadError?(0,$.jsx)(`p`,{className:`upload-error`,children:t.uploadError}):null]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`upload-preview`,style:c?{aspectRatio:c}:void 0,children:s}),(0,$.jsxs)(`div`,{className:`upload-actions`,children:[(0,$.jsx)(`button`,{className:`upload-action-primary ${n?`upload-action-primary--busy`:``}`,onClick:d,disabled:!r,children:n?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(wr,{}),`识别中`]}):t.resultMode===`text`?`重新生成`:`生成`}),(0,$.jsx)(`button`,{className:`upload-action-secondary`,onClick:f,disabled:n,children:`清除`}),n?(0,$.jsx)(`button`,{className:`upload-action-secondary`,onClick:p,children:`中止`}):null]}),i?null:(0,$.jsx)(`p`,{className:`upload-hint-warn`,children:`请先在设置中配置模型信息`})]})}),!v&&l&&g?(0,$.jsxs)(`div`,{className:`frame-sampling-row`,children:[(0,$.jsxs)(`div`,{className:`frame-sampling-header`,children:[(0,$.jsx)(`span`,{className:`frame-sampling-title`,children:`帧采样`}),(0,$.jsx)(`button`,{type:`button`,className:`frame-sampling-info-btn`,onMouseEnter:()=>te(!0),onMouseLeave:()=>te(!1),children:(0,$.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,$.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,$.jsx)(`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`}),(0,$.jsx)(`line`,{x1:`12`,y1:`17`,x2:`12.01`,y2:`17`})]})}),w?(0,$.jsx)(`div`,{className:`frame-sampling-tooltip`,children:`选择帧采样方式，控制从视频中提取的帧数量和策略`}):null]}),(0,$.jsxs)(`div`,{className:`frame-sampling-dropdown`,children:[(0,$.jsxs)(`button`,{type:`button`,className:`frame-sampling-trigger ${C?`is-open`:``}`,onClick:()=>ee(e=>!e),children:[(0,$.jsx)(`span`,{className:`frame-sampling-label`,children:yr[l].label}),(0,$.jsx)(`svg`,{className:`frame-sampling-chevron`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,$.jsx)(`path`,{d:`M6 9l6 6 6-6`})})]}),C?(0,$.jsx)(`div`,{className:`frame-sampling-menu`,children:Object.keys(yr).map(e=>(0,$.jsxs)(`button`,{type:`button`,className:`frame-sampling-opt ${l===e?`is-selected`:``}`,onClick:()=>{g(e),ee(!1)},children:[(0,$.jsx)(`span`,{className:`frame-sampling-opt-label`,children:yr[e].label}),(0,$.jsx)(`span`,{className:`frame-sampling-opt-desc`,children:yr[e].description})]},e))}):null]})]}):null,(0,$.jsxs)(`section`,{className:`result-card ${x?`result-card--expanded`:``}`,children:[(0,$.jsxs)(`div`,{className:`result-card-head`,children:[(0,$.jsx)(`span`,{className:`result-card-title`,children:`识别结果`}),t.resultMode===`text`?(0,$.jsxs)(`div`,{className:`result-card-actions`,children:[o?(0,$.jsx)(`button`,{className:`result-copy-btn`,onClick:m,children:t.copyLabel===`已复制`?`已复制`:`复制`}):null,(0,$.jsx)(`button`,{className:`result-expand-btn`,onClick:()=>S(e=>!e),title:x?`收起`:`展开`,children:(0,$.jsx)(Pr,{expanded:x})})]}):null]}),(0,$.jsxs)(`div`,{className:`result-card-body result-body-${t.resultMode}`,children:[t.resultMode===`loading`?(0,$.jsxs)(`div`,{className:`result-loading`,children:[(0,$.jsx)(wr,{}),(0,$.jsx)(`strong`,{children:t.streamText?`实时生成中...`:`正在识别中...`}),t.streamText?(0,$.jsx)(`pre`,{className:`result-stream-text`,children:t.streamText}):null]}):null,t.resultMode===`empty`?(0,$.jsxs)(`div`,{className:`result-empty`,children:[(0,$.jsx)(Jr,{}),(0,$.jsxs)(`p`,{children:[`上传`,y,`后点击生成，结果将在此呈现`]})]}):null,t.resultMode===`error`?(0,$.jsx)(`div`,{className:`result-error-state`,children:(0,$.jsx)(`p`,{children:t.resultText})}):null,t.resultMode===`text`?(0,$.jsx)(`textarea`,{className:`result-edit-area`,value:a,onChange:e=>h(e.target.value),spellCheck:!1}):null]})]})]})}var Qr=Tn.header`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background-color: #ffffff;
  border-bottom: 1px solid var(--border-light);
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
    gap: 6px;
    background-color: var(--bg-subtle);
    border-radius: var(--radius-pill);
    padding: 4px 6px;
  }

  .tab-nav-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 36px;
    border: none;
    border-radius: var(--radius-pill);
    background: transparent;
    color: var(--text-tertiary);
    cursor: pointer;
    transition: all var(--duration-normal) ease;

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      color: var(--text-secondary);
    }
  }

  .tab-tooltip {
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) translateY(-6px);
    background: var(--bg-dark);
    color: var(--text-on-dark);
    font-size: 11px;
    font-weight: 500;
    padding: 5px 12px;
    border-radius: var(--radius-sm);
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .tab-tooltip::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-bottom-color: var(--bg-dark);
  }

  .tab-nav-btn:hover .tab-tooltip {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  .tab-nav-btn--active {
    color: var(--text-primary);
    background-color: var(--bg-card);
    box-shadow: var(--shadow-sm);
  }

  .tab-nav-btn--active:hover {
    color: var(--text-primary);
    background-color: var(--bg-card);
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
    color: var(--text-tertiary);
    transition: background-color var(--duration-fast) ease, color var(--duration-fast) ease;

    svg {
      width: 17px;
      height: 17px;
    }

    &:hover {
      background-color: var(--bg-hover);
      color: var(--text-primary);
    }
  }
`,$r=Tn.section`
  background-color: var(--bg-card);
  border-radius: var(--radius-xl);
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px dashed var(--border-medium);
  box-shadow: var(--shadow-card);
  overflow: visible;
  position: relative;
  transition: border-color var(--duration-normal) ease, box-shadow var(--duration-normal) ease, background-color var(--duration-normal) ease;
  min-height: 260px;
  max-height: 320px;

  &.is-drag-over {
    border-color: var(--accent);
    background-color: var(--bg-subtle);
    box-shadow: var(--shadow-elevated);
  }

  .upload-label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 28px var(--space-6) var(--space-5);
    box-sizing: border-box;
    flex: 1;
  }

  .upload-design {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
  }

  .upload-design svg {
    margin-bottom: var(--space-3);
  }

  .upload-title {
    font-size: var(--text-base);
    font-weight: 500;
    color: var(--text-primary);
    margin: 0;
  }

  .upload-or {
    font-size: var(--text-xs);
    color: var(--text-tertiary);
    margin: var(--space-1) 0;
  }

  .upload-browse-btn {
    background-color: var(--accent);
    padding: 7px 22px;
    border-radius: var(--radius-md);
    color: var(--text-on-dark);
    font-size: var(--text-sm);
    font-weight: 500;
    cursor: pointer;
    transition: background-color var(--duration-normal) ease;

    &:hover {
      background-color: var(--accent-hover);
    }
  }

  .upload-hint {
    font-size: 11px;
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

    img, video {
      max-width: 95%;
      max-height: 180px;
      object-fit: contain;
      display: block;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &.is-expanded .upload-preview {
    img, video {
      max-height: 60px;
      max-width: 70px;
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

  .upload-action-primary {
    background-color: var(--accent);
    color: var(--text-on-dark);
    border: none;
    border-radius: var(--radius-md);
    padding: 8px 32px;
    font-size: var(--text-sm);
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    transition: background-color var(--duration-fast) ease;

    &:hover:not(:disabled) {
      background-color: var(--accent-hover);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    svg {
      width: 14px;
      height: 14px;
      animation: spin 1s linear infinite;
    }
  }

  .upload-action-primary--busy svg {
    animation: spin 1s linear infinite;
  }

  .upload-action-secondary {
    background-color: transparent;
    color: var(--text-primary);
    border: 1.5px solid var(--border-medium);
    border-radius: var(--radius-md);
    padding: 8px 28px;
    font-size: var(--text-sm);
    font-weight: 400;
    cursor: pointer;
    transition: all var(--duration-fast) ease;

    &:hover:not(:disabled) {
      border-color: var(--accent);
      color: var(--accent);
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  .upload-hint-warn {
    font-size: var(--text-xs);
    color: var(--danger);
    text-align: center;
    padding: 0 var(--space-5) var(--space-4);
    margin: 0;
  }
`,ei=Tn.section`
  background-color: var(--bg-card);
  border-radius: var(--radius-xl);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px dashed var(--border-medium);
  box-shadow: var(--shadow-card);
  gap: var(--space-3);

  .enhancer-mode-pills {
    display: flex;
    gap: 4px;
    background-color: var(--bg-subtle);
    border-radius: var(--radius-md);
    padding: 3px;
    width: 100%;
  }

  .enhancer-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-1);
    flex: 1;
    padding: 8px 0;
    border-radius: var(--radius-sm);
    border: none;
    background: transparent;
    color: var(--text-tertiary);
    font-size: var(--text-sm);
    font-weight: 400;
    cursor: pointer;
    transition: all var(--duration-fast) ease;

    svg {
      width: 14px;
      height: 14px;
    }

    &:hover {
      color: var(--text-primary);
    }
  }

  .enhancer-pill--active {
    background-color: var(--accent);
    color: var(--text-on-dark);

    &:hover {
      color: var(--text-on-dark);
    }
  }

  .enhancer-input-wrap {
    width: 100%;
  }

  .enhancer-textarea {
    width: 100%;
    border: 1.5px solid var(--border-light);
    border-radius: var(--radius-lg);
    padding: var(--space-4);
    font-size: var(--text-sm);
    line-height: 1.5;
    resize: vertical;
    min-height: 100px;
    box-sizing: border-box;
    font-family: inherit;
    color: var(--text-primary);
    background: var(--bg-input);
    transition: border-color var(--duration-fast) ease;

    &:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 3px var(--accent-glow);
    }

    &::placeholder {
      color: var(--text-placeholder);
    }
  }

  .enhancer-action-row {
    display: flex;
    gap: var(--space-2);
    width: 100%;
    justify-content: center;
  }

  .upload-action-primary {
    width: 100%;
    background-color: var(--bg-card);
    color: var(--text-primary);
    border: 1.5px solid var(--accent);
    border-radius: var(--radius-lg);
    padding: 11px var(--space-5);
    font-size: var(--text-sm);
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    transition: all var(--duration-fast) ease;

    &:hover:not(:disabled) {
      background-color: var(--bg-subtle);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    svg {
      width: 14px;
      height: 14px;
      animation: spin 1s linear infinite;
    }
  }

  .upload-hint-warn {
    font-size: var(--text-xs);
    color: var(--danger);
    text-align: center;
    margin: 0;
  }
`;function ti({enhancerMode:e,enhancerInput:t,isEnhancingPrompt:n,canEnhancePrompt:r,hasApiKey:i,enhancerResultMode:a,enhancerResultText:o,enhancerCopyLabel:s,showEnhancerCopy:c,onSetEnhancerMode:l,onSetEnhancerInput:u,onEnhance:d,onAbortEnhancer:f,onCopyEnhancer:p}){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(ei,{children:[(0,$.jsxs)(`div`,{className:`enhancer-mode-pills`,role:`tablist`,"aria-label":`增强器模式`,children:[(0,$.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":e===`video`,className:`enhancer-pill ${e===`video`?`enhancer-pill--active`:``}`,onClick:()=>l(`video`),children:[(0,$.jsx)(Fr,{}),(0,$.jsx)(`span`,{children:`视频`})]}),(0,$.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":e===`image`,className:`enhancer-pill ${e===`image`?`enhancer-pill--active`:``}`,onClick:()=>l(`image`),children:[(0,$.jsx)(Ir,{}),(0,$.jsx)(`span`,{children:`图片`})]})]}),(0,$.jsx)(`div`,{className:`enhancer-input-wrap`,children:(0,$.jsx)(`textarea`,{value:t,onChange:e=>u(e.target.value),placeholder:e===`video`?`描述你的视频创意，例如：一个女孩在雨中漫步，慢镜头，电影质感`:`描述你的图片创意，例如：一只金毛幼犬在草地上奔跑，阳光明媚`,rows:5,className:`enhancer-textarea`})}),n?(0,$.jsxs)(`div`,{className:`enhancer-action-row`,children:[(0,$.jsxs)(`button`,{className:`upload-action-primary upload-action-primary--busy`,disabled:!0,children:[(0,$.jsx)(wr,{}),`增强中`]}),(0,$.jsx)(`button`,{className:`upload-action-secondary`,onClick:f,children:`中止`})]}):(0,$.jsxs)(`button`,{className:`upload-action-primary`,onClick:()=>void d(),disabled:!r,children:[(0,$.jsx)(Dr,{}),(0,$.jsx)(`span`,{children:`增强`})]}),i?null:(0,$.jsx)(`p`,{className:`upload-hint-warn`,children:`请先在设置中配置模型信息`})]}),(0,$.jsxs)(`section`,{className:`result-card`,children:[(0,$.jsxs)(`div`,{className:`result-card-head`,children:[(0,$.jsx)(`span`,{className:`result-card-title`,children:`增强结果`}),c?(0,$.jsx)(`button`,{className:`result-copy-btn`,onClick:()=>void p(),children:s}):null]}),(0,$.jsxs)(`div`,{className:`result-card-body result-body-${a}`,children:[a===`loading`?(0,$.jsxs)(`div`,{className:`result-loading`,children:[(0,$.jsx)(wr,{}),(0,$.jsx)(`strong`,{children:`正在增强中...`})]}):null,a===`empty`?(0,$.jsxs)(`div`,{className:`result-empty`,children:[(0,$.jsx)(Jr,{}),(0,$.jsx)(`p`,{children:`输入创意后点击增强，结果将在此呈现`})]}):null,a===`error`?(0,$.jsx)(`div`,{className:`result-error-state`,children:(0,$.jsx)(`p`,{children:o})}):null,a===`text`?(0,$.jsx)(`div`,{className:`result-text-block`,children:o}):null]})]})]})}je.createRoot(document.getElementById(`root`)).render((0,$.jsx)(K.StrictMode,{children:(0,$.jsx)(Xr,{})}));