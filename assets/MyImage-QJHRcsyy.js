import{af as Ce,ag as Be,r as be,w as Ve,y as We,j as ze}from"./index-LzFP3sjf.js";function Ue(T,q,h,J,b){const[l,c]=be.useState(()=>b&&h?h(T).matches:J?J(T).matches:q);return Ve(()=>{let $=!0;if(!h)return;const S=h(T),N=()=>{$&&c(S.matches)};return N(),S.addListener(N),()=>{$=!1,S.removeListener(N)}},[T,h]),l}const Ie=be.useSyncExternalStore;function $e(T,q,h,J,b){const l=be.useCallback(()=>q,[q]),c=be.useMemo(()=>{if(b&&h)return()=>h(T).matches;if(J!==null){const{matches:v}=J(T);return()=>v}return l},[l,T,J,b,h]),[$,S]=be.useMemo(()=>{if(h===null)return[l,()=>()=>{}];const v=h(T);return[()=>v.matches,D=>(v.addListener(D),()=>{v.removeListener(D)})]},[l,h,T]);return Ie(S,$,c)}function He(T,q={}){const h=Ce(),J=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:b=!1,matchMedia:l=J?window.matchMedia:null,ssrMatchMedia:c=null,noSsr:$=!1}=Be({name:"MuiUseMediaQuery",props:q,theme:h});let S=typeof T=="function"?T(h):T;return S=S.replace(/^@media( ?)/m,""),(Ie!==void 0?$e:Ue)(S,b,l,c,$)}var Re={exports:{}};(()=>{var T={296:(b,l,c)=>{var $=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,v=/^0o[0-7]+$/i,D=parseInt,oe=typeof c.g=="object"&&c.g&&c.g.Object===Object&&c.g,fe=typeof self=="object"&&self&&self.Object===Object&&self,ue=oe||fe||Function("return this")(),se=Object.prototype.toString,ie=Math.max,pe=Math.min,ee=function(){return ue.Date.now()};function K(m){var j=typeof m;return!!m&&(j=="object"||j=="function")}function ce(m){if(typeof m=="number")return m;if(function(p){return typeof p=="symbol"||function(E){return!!E&&typeof E=="object"}(p)&&se.call(p)=="[object Symbol]"}(m))return NaN;if(K(m)){var j=typeof m.valueOf=="function"?m.valueOf():m;m=K(j)?j+"":j}if(typeof m!="string")return m===0?m:+m;m=m.replace($,"");var Q=N.test(m);return Q||v.test(m)?D(m.slice(2),Q?2:8):S.test(m)?NaN:+m}b.exports=function(m,j,Q){var p,E,C,L,x,F,B=0,X=!1,H=!1,Z=!0;if(typeof m!="function")throw new TypeError("Expected a function");function A(R){var k=p,W=E;return p=E=void 0,B=R,L=m.apply(W,k)}function te(R){var k=R-F;return F===void 0||k>=j||k<0||H&&R-B>=C}function I(){var R=ee();if(te(R))return G(R);x=setTimeout(I,function(k){var W=j-(k-F);return H?pe(W,C-(k-B)):W}(R))}function G(R){return x=void 0,Z&&p?A(R):(p=E=void 0,L)}function V(){var R=ee(),k=te(R);if(p=arguments,E=this,F=R,k){if(x===void 0)return function(W){return B=W,x=setTimeout(I,j),X?A(W):L}(F);if(H)return x=setTimeout(I,j),A(F)}return x===void 0&&(x=setTimeout(I,j)),L}return j=ce(j)||0,K(Q)&&(X=!!Q.leading,C=(H="maxWait"in Q)?ie(ce(Q.maxWait)||0,j):C,Z="trailing"in Q?!!Q.trailing:Z),V.cancel=function(){x!==void 0&&clearTimeout(x),B=0,p=F=E=x=void 0},V.flush=function(){return x===void 0?L:G(ee())},V}},96:(b,l,c)=>{var $="Expected a function",S=NaN,N="[object Symbol]",v=/^\s+|\s+$/g,D=/^[-+]0x[0-9a-f]+$/i,oe=/^0b[01]+$/i,fe=/^0o[0-7]+$/i,ue=parseInt,se=typeof c.g=="object"&&c.g&&c.g.Object===Object&&c.g,ie=typeof self=="object"&&self&&self.Object===Object&&self,pe=se||ie||Function("return this")(),ee=Object.prototype.toString,K=Math.max,ce=Math.min,m=function(){return pe.Date.now()};function j(p){var E=typeof p;return!!p&&(E=="object"||E=="function")}function Q(p){if(typeof p=="number")return p;if(function(L){return typeof L=="symbol"||function(x){return!!x&&typeof x=="object"}(L)&&ee.call(L)==N}(p))return S;if(j(p)){var E=typeof p.valueOf=="function"?p.valueOf():p;p=j(E)?E+"":E}if(typeof p!="string")return p===0?p:+p;p=p.replace(v,"");var C=oe.test(p);return C||fe.test(p)?ue(p.slice(2),C?2:8):D.test(p)?S:+p}b.exports=function(p,E,C){var L=!0,x=!0;if(typeof p!="function")throw new TypeError($);return j(C)&&(L="leading"in C?!!C.leading:L,x="trailing"in C?!!C.trailing:x),function(F,B,X){var H,Z,A,te,I,G,V=0,R=!1,k=!1,W=!0;if(typeof F!="function")throw new TypeError($);function he(z){var Y=H,ne=Z;return H=Z=void 0,V=z,te=F.apply(ne,Y)}function ve(z){var Y=z-G;return G===void 0||Y>=B||Y<0||k&&z-V>=A}function re(){var z=m();if(ve(z))return me(z);I=setTimeout(re,function(Y){var ne=B-(Y-G);return k?ce(ne,A-(Y-V)):ne}(z))}function me(z){return I=void 0,W&&H?he(z):(H=Z=void 0,te)}function ae(){var z=m(),Y=ve(z);if(H=arguments,Z=this,G=z,Y){if(I===void 0)return function(ne){return V=ne,I=setTimeout(re,B),R?he(ne):te}(G);if(k)return I=setTimeout(re,B),he(G)}return I===void 0&&(I=setTimeout(re,B)),te}return B=Q(B)||0,j(X)&&(R=!!X.leading,A=(k="maxWait"in X)?K(Q(X.maxWait)||0,B):A,W="trailing"in X?!!X.trailing:W),ae.cancel=function(){I!==void 0&&clearTimeout(I),V=0,H=G=Z=I=void 0},ae.flush=function(){return I===void 0?te:me(m())},ae}(p,E,{leading:L,maxWait:E,trailing:x})}},703:(b,l,c)=>{var $=c(414);function S(){}function N(){}N.resetWarningCache=S,b.exports=function(){function v(fe,ue,se,ie,pe,ee){if(ee!==$){var K=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw K.name="Invariant Violation",K}}function D(){return v}v.isRequired=v;var oe={array:v,bigint:v,bool:v,func:v,number:v,object:v,string:v,symbol:v,any:v,arrayOf:D,element:v,elementType:v,instanceOf:D,node:v,objectOf:D,oneOf:D,oneOfType:D,shape:D,exact:D,checkPropTypes:N,resetWarningCache:S};return oe.PropTypes=oe,oe}},697:(b,l,c)=>{b.exports=c(703)()},414:b=>{b.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},q={};function h(b){var l=q[b];if(l!==void 0)return l.exports;var c=q[b]={exports:{}};return T[b](c,c.exports,h),c.exports}h.n=b=>{var l=b&&b.__esModule?()=>b.default:()=>b;return h.d(l,{a:l}),l},h.d=(b,l)=>{for(var c in l)h.o(l,c)&&!h.o(b,c)&&Object.defineProperty(b,c,{enumerable:!0,get:l[c]})},h.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),h.o=(b,l)=>Object.prototype.hasOwnProperty.call(b,l),h.r=b=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})};var J={};(()=>{h.r(J),h.d(J,{LazyLoadComponent:()=>Te,LazyLoadImage:()=>Ne,trackWindowScroll:()=>G});const b=be;var l=h.n(b),c=h(697);const $=We;var S=h.n($);function N(){return typeof window<"u"&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function v(n){return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(n)}function D(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(f){return Object.getOwnPropertyDescriptor(n,f).enumerable})),o.push.apply(o,i)}return o}function oe(n,e,o){return(e=ue(e))in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function fe(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,ue(i.key),i)}}function ue(n){var e=function(o,i){if(v(o)!=="object"||o===null)return o;var f=o[Symbol.toPrimitive];if(f!==void 0){var y=f.call(o,"string");if(v(y)!=="object")return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(n);return v(e)==="symbol"?e:String(e)}function se(n,e){return se=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},se(n,e)}function ie(n){return ie=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ie(n)}var pe=function(n){n.forEach(function(e){e.isIntersecting&&e.target.onVisible()})},ee={},K=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&se(t,r)})(g,n);var e,o,i,f,y=(i=g,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=ie(i);if(f){var a=ie(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return function(u,s){if(s&&(v(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(d){if(d===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d}(u)}(this,t)});function g(t){var r;if(function(u,s){if(!(u instanceof s))throw new TypeError("Cannot call a class as a function")}(this,g),(r=y.call(this,t)).supportsObserver=!t.scrollPosition&&t.useIntersectionObserver&&N(),r.supportsObserver){var a=t.threshold;r.observer=function(u){return ee[u]=ee[u]||new IntersectionObserver(pe,{rootMargin:u+"px"}),ee[u]}(a)}return r}return e=g,o=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.scrollPosition,r=this.placeholder.getBoundingClientRect(),a=S().findDOMNode(this.placeholder).style,u=parseInt(a.getPropertyValue("margin-left"),10)||0,s=parseInt(a.getPropertyValue("margin-top"),10)||0;return{bottom:t.y+r.bottom+s,left:t.x+r.left+u,right:t.x+r.right+u,top:t.y+r.top+s}}},{key:"isPlaceholderInViewport",value:function(){if(typeof window>"u"||!this.placeholder)return!1;var t=this.props,r=t.scrollPosition,a=t.threshold,u=this.getPlaceholderBoundingBox(r),s=r.y+window.innerHeight,d=r.x,w=r.x+window.innerWidth,P=r.y;return P-a<=u.bottom&&s+a>=u.top&&d-a<=u.right&&w+a>=u.left}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var t=this,r=this.props,a=r.className,u=r.height,s=r.placeholder,d=r.style,w=r.width;if(s&&typeof s.type!="function")return l().cloneElement(s,{ref:function(O){return t.placeholder=O}});var P=function(O){for(var M=1;M<arguments.length;M++){var _=arguments[M]!=null?arguments[M]:{};M%2?D(Object(_),!0).forEach(function(U){oe(O,U,_[U])}):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(_)):D(Object(_)).forEach(function(U){Object.defineProperty(O,U,Object.getOwnPropertyDescriptor(_,U))})}return O}({display:"inline-block"},d);return w!==void 0&&(P.width=w),u!==void 0&&(P.height=u),l().createElement("span",{className:a,ref:function(O){return t.placeholder=O},style:P},s)}}],o&&fe(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),g}(l().Component);K.propTypes={onVisible:c.PropTypes.func.isRequired,className:c.PropTypes.string,height:c.PropTypes.oneOfType([c.PropTypes.number,c.PropTypes.string]),placeholder:c.PropTypes.element,threshold:c.PropTypes.number,useIntersectionObserver:c.PropTypes.bool,scrollPosition:c.PropTypes.shape({x:c.PropTypes.number.isRequired,y:c.PropTypes.number.isRequired}),width:c.PropTypes.oneOfType([c.PropTypes.number,c.PropTypes.string])},K.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const ce=K;var m=h(296),j=h.n(m),Q=h(96),p=h.n(Q),E=function(n){var e=getComputedStyle(n,null);return e.getPropertyValue("overflow")+e.getPropertyValue("overflow-y")+e.getPropertyValue("overflow-x")};const C=function(n){if(!(n instanceof HTMLElement))return window;for(var e=n;e&&e instanceof HTMLElement;){if(/(scroll|auto)/.test(E(e)))return e;e=e.parentNode}return window};function L(n){return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(n)}var x=["delayMethod","delayTime"];function F(){return F=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},F.apply(this,arguments)}function B(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(f=function(y,g){if(L(y)!=="object"||y===null)return y;var t=y[Symbol.toPrimitive];if(t!==void 0){var r=t.call(y,"string");if(L(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(i.key),L(f)==="symbol"?f:String(f)),i)}var f}function X(n,e){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},X(n,e)}function H(n,e){if(e&&(L(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Z(n)}function Z(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function A(n){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(n)}var te=function(){return typeof window>"u"?0:window.scrollX||window.pageXOffset},I=function(){return typeof window>"u"?0:window.scrollY||window.pageYOffset};const G=function(n){var e=function(o){(function(a,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(u&&u.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),u&&X(a,u)})(r,o);var i,f,y,g,t=(y=r,g=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var a,u=A(y);if(g){var s=A(this).constructor;a=Reflect.construct(u,arguments,s)}else a=u.apply(this,arguments);return H(this,a)});function r(a){var u;if(function(d,w){if(!(d instanceof w))throw new TypeError("Cannot call a class as a function")}(this,r),(u=t.call(this,a)).useIntersectionObserver=a.useIntersectionObserver&&N(),u.useIntersectionObserver)return H(u);var s=u.onChangeScroll.bind(Z(u));return a.delayMethod==="debounce"?u.delayedScroll=j()(s,a.delayTime):a.delayMethod==="throttle"&&(u.delayedScroll=p()(s,a.delayTime)),u.state={scrollPosition:{x:te(),y:I()}},u.baseComponentRef=l().createRef(),u}return i=r,(f=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){typeof window>"u"||this.useIntersectionObserver||C(S().findDOMNode(this.baseComponentRef.current))!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement=C(S().findDOMNode(this.baseComponentRef.current)),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:te(),y:I()}})}},{key:"render",value:function(){var a=this.props,u=(a.delayMethod,a.delayTime,function(d,w){if(d==null)return{};var P,O,M=function(U,de){if(U==null)return{};var le,we,xe={},_e=Object.keys(U);for(we=0;we<_e.length;we++)le=_e[we],de.indexOf(le)>=0||(xe[le]=U[le]);return xe}(d,w);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(d);for(O=0;O<_.length;O++)P=_[O],w.indexOf(P)>=0||Object.prototype.propertyIsEnumerable.call(d,P)&&(M[P]=d[P])}return M}(a,x)),s=this.useIntersectionObserver?null:this.state.scrollPosition;return l().createElement(n,F({forwardRef:this.baseComponentRef,scrollPosition:s},u))}}])&&B(i.prototype,f),Object.defineProperty(i,"prototype",{writable:!1}),r}(l().Component);return e.propTypes={delayMethod:c.PropTypes.oneOf(["debounce","throttle"]),delayTime:c.PropTypes.number,useIntersectionObserver:c.PropTypes.bool},e.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},e};function V(n){return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(n)}function R(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(f=function(y,g){if(V(y)!=="object"||y===null)return y;var t=y[Symbol.toPrimitive];if(t!==void 0){var r=t.call(y,"string");if(V(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(i.key),V(f)==="symbol"?f:String(f)),i)}var f}function k(n,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},k(n,e)}function W(n){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},W(n)}var he=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&k(t,r)})(g,n);var e,o,i,f,y=(i=g,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=W(i);if(f){var a=W(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return function(u,s){if(s&&(V(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(d){if(d===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d}(u)}(this,t)});function g(t){return function(r,a){if(!(r instanceof a))throw new TypeError("Cannot call a class as a function")}(this,g),y.call(this,t)}return e=g,(o=[{key:"render",value:function(){return l().createElement(ce,this.props)}}])&&R(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),g}(l().Component);const ve=G(he);function re(n){return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re(n)}function me(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(f=function(y,g){if(re(y)!=="object"||y===null)return y;var t=y[Symbol.toPrimitive];if(t!==void 0){var r=t.call(y,"string");if(re(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(y)}(i.key),re(f)==="symbol"?f:String(f)),i)}var f}function ae(n,e){return ae=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},ae(n,e)}function z(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Y(n){return Y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(n)}var ne=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&ae(t,r)})(g,n);var e,o,i,f,y=(i=g,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=Y(i);if(f){var a=Y(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return function(u,s){if(s&&(re(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return z(u)}(this,t)});function g(t){var r;(function(w,P){if(!(w instanceof P))throw new TypeError("Cannot call a class as a function")})(this,g),r=y.call(this,t);var a=t.afterLoad,u=t.beforeLoad,s=t.scrollPosition,d=t.visibleByDefault;return r.state={visible:d},d&&(u(),a()),r.onVisible=r.onVisible.bind(z(r)),r.isScrollTracked=!!(s&&Number.isFinite(s.x)&&s.x>=0&&Number.isFinite(s.y)&&s.y>=0),r}return e=g,(o=[{key:"componentDidUpdate",value:function(t,r){r.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var t=this.props,r=t.className,a=t.delayMethod,u=t.delayTime,s=t.height,d=t.placeholder,w=t.scrollPosition,P=t.style,O=t.threshold,M=t.useIntersectionObserver,_=t.width;return this.isScrollTracked||M&&N()?l().createElement(ce,{className:r,height:s,onVisible:this.onVisible,placeholder:d,scrollPosition:w,style:P,threshold:O,useIntersectionObserver:M,width:_}):l().createElement(ve,{className:r,delayMethod:a,delayTime:u,height:s,onVisible:this.onVisible,placeholder:d,style:P,threshold:O,width:_})}}])&&me(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),g}(l().Component);ne.propTypes={afterLoad:c.PropTypes.func,beforeLoad:c.PropTypes.func,useIntersectionObserver:c.PropTypes.bool,visibleByDefault:c.PropTypes.bool},ne.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const Te=ne;function ye(n){return ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ye(n)}var ke=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function Se(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(f){return Object.getOwnPropertyDescriptor(n,f).enumerable})),o.push.apply(o,i)}return o}function Ee(n){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?Se(Object(o),!0).forEach(function(i){De(n,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Se(Object(o)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(o,i))})}return n}function De(n,e,o){return(e=Le(e))in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function ge(){return ge=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},ge.apply(this,arguments)}function Me(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,Le(i.key),i)}}function Le(n){var e=function(o,i){if(ye(o)!=="object"||o===null)return o;var f=o[Symbol.toPrimitive];if(f!==void 0){var y=f.call(o,"string");if(ye(y)!=="object")return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(n);return ye(e)==="symbol"?e:String(e)}function Pe(n,e){return Pe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},Pe(n,e)}function Oe(n){return Oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Oe(n)}var je=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Pe(t,r)})(g,n);var e,o,i,f,y=(i=g,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=Oe(i);if(f){var a=Oe(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return function(u,s){if(s&&(ye(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(d){if(d===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d}(u)}(this,t)});function g(t){var r;return function(a,u){if(!(a instanceof u))throw new TypeError("Cannot call a class as a function")}(this,g),(r=y.call(this,t)).state={loaded:!1},r}return e=g,(o=[{key:"onImageLoad",value:function(){var t=this;return this.state.loaded?null:function(r){t.props.onLoad(r),t.props.afterLoad(),t.setState({loaded:!0})}}},{key:"getImg",value:function(){var t=this.props,r=(t.afterLoad,t.beforeLoad,t.delayMethod,t.delayTime,t.effect,t.placeholder,t.placeholderSrc,t.scrollPosition,t.threshold,t.useIntersectionObserver,t.visibleByDefault,t.wrapperClassName,t.wrapperProps,function(a,u){if(a==null)return{};var s,d,w=function(O,M){if(O==null)return{};var _,U,de={},le=Object.keys(O);for(U=0;U<le.length;U++)_=le[U],M.indexOf(_)>=0||(de[_]=O[_]);return de}(a,u);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(a);for(d=0;d<P.length;d++)s=P[d],u.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(a,s)&&(w[s]=a[s])}return w}(t,ke));return l().createElement("img",ge({},r,{onLoad:this.onImageLoad()}))}},{key:"getLazyLoadImage",value:function(){var t=this.props,r=t.beforeLoad,a=t.className,u=t.delayMethod,s=t.delayTime,d=t.height,w=t.placeholder,P=t.scrollPosition,O=t.style,M=t.threshold,_=t.useIntersectionObserver,U=t.visibleByDefault,de=t.width;return l().createElement(Te,{beforeLoad:r,className:a,delayMethod:u,delayTime:s,height:d,placeholder:w,scrollPosition:P,style:O,threshold:M,useIntersectionObserver:_,visibleByDefault:U,width:de},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(t){var r=this.props,a=r.effect,u=r.height,s=r.placeholderSrc,d=r.width,w=r.wrapperClassName,P=r.wrapperProps,O=this.state.loaded,M=O?" lazy-load-image-loaded":"",_=O||!s?{}:{backgroundImage:"url(".concat(s,")"),backgroundSize:"100% 100%"};return l().createElement("span",ge({className:w+" lazy-load-image-background "+a+M,style:Ee(Ee({},_),{},{color:"transparent",display:"inline-block",height:u,width:d})},P),t)}},{key:"render",value:function(){var t=this.props,r=t.effect,a=t.placeholderSrc,u=t.visibleByDefault,s=t.wrapperClassName,d=t.wrapperProps,w=this.getLazyLoadImage();return(r||a)&&!u||s||d?this.getWrappedLazyLoadImage(w):w}}])&&Me(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),g}(l().Component);je.propTypes={onLoad:c.PropTypes.func,afterLoad:c.PropTypes.func,beforeLoad:c.PropTypes.func,delayMethod:c.PropTypes.string,delayTime:c.PropTypes.number,effect:c.PropTypes.string,placeholderSrc:c.PropTypes.string,threshold:c.PropTypes.number,useIntersectionObserver:c.PropTypes.bool,visibleByDefault:c.PropTypes.bool,wrapperClassName:c.PropTypes.string,wrapperProps:c.PropTypes.object},je.defaultProps={onLoad:function(){},afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const Ne=je})(),Re.exports=J})();var Qe=Re.exports;const Ye=({image:T,scrollPosition:q})=>ze.jsx(Qe.LazyLoadImage,{src:T.src,alt:T.alt,style:T.style,className:T.className,effect:"opacity",scrollPosition:q});export{Ye as M,Qe as b,He as u};