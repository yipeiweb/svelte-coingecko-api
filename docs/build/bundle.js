var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,s;function a(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t){s=t}function y(t){(function(){if(!s)throw new Error("Function called outside component initialization");return s})().$$.on_mount.push(t)}const b=[],x=[],v=[],w=[],k=Promise.resolve();let L=!1;function C(t){v.push(t)}let E=!1;const S=new Set;function j(){if(!E){E=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];_(e),A(e.$$)}for(_(null),b.length=0;x.length;)x.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];S.has(e)||(S.add(e),e())}v.length=0}while(b.length);for(;w.length;)w.pop()();L=!1,E=!1,S.clear()}}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const P=new Set;function M(t,e){-1===t.$$.dirty[0]&&(b.push(t),L||(L=!0,k.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(c,l,a,i,u,d,h,p=[-1]){const m=s;_(c);const g=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:l.context||[]),callbacks:n(),dirty:p,skip_bound:!1,root:l.target||m.$$.root};h&&h(g.root);let $=!1;if(g.ctx=a?a(c,l.props||{},((t,e,...n)=>{const r=n.length?n[0]:e;return g.ctx&&u(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),$&&M(c,t)),e})):[],g.update(),$=!0,r(g.before_update),g.fragment=!!i&&i(g.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);g.fragment&&g.fragment.l(t),t.forEach(f)}else g.fragment&&g.fragment.c();l.intro&&((y=c.$$.fragment)&&y.i&&(P.delete(y),y.i(b))),function(t,n,c,l){const{fragment:s,on_mount:a,on_destroy:i,after_update:u}=t.$$;s&&s.m(n,c),l||C((()=>{const n=a.map(e).filter(o);i?i.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(C)}(c,l.target,l.anchor,l.customElement),j()}var y,b;_(m)}function O(t,e,n){const r=t.slice();return r[8]=e[n],r[10]=n,r}function T(t,e,n){const r=t.slice();return r[11]=e[n],r}function q(e){let n;return{c(){n=h("div"),n.innerHTML='<div class="spinner-border text-light" role="status" style="width: 9rem; height: 9rem;"><span class="visually-hidden">Loading...</span></div>',g(n,"class","d-flex justify-content-center align-items-center")},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function z(t){let e,n,r,o,c,l=t[3],s=[];for(let e=0;e<l.length;e+=1)s[e]=B(T(t,l,e));let a=t[1],p=[];for(let e=0;e<a.length;e+=1)p[e]=F(O(t,a,e));return{c(){e=h("table"),n=h("thead"),r=h("tr");for(let t=0;t<s.length;t+=1)s[t].c();o=m(),c=h("tbody");for(let t=0;t<p.length;t+=1)p[t].c();g(e,"class","table table-dark")},m(t,l){u(t,e,l),i(e,n),i(n,r);for(let t=0;t<s.length;t+=1)s[t].m(r,null);i(e,o),i(e,c);for(let t=0;t<p.length;t+=1)p[t].m(c,null)},p(t,e){if(8&e){let n;for(l=t[3],n=0;n<l.length;n+=1){const o=T(t,l,n);s[n]?s[n].p(o,e):(s[n]=B(o),s[n].c(),s[n].m(r,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=l.length}if(2&e){let n;for(a=t[1],n=0;n<a.length;n+=1){const r=O(t,a,n);p[n]?p[n].p(r,e):(p[n]=F(r),p[n].c(),p[n].m(c,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=a.length}},d(t){t&&f(e),d(s,t),d(p,t)}}}function B(e){let n,r,o=e[11]+"";return{c(){n=h("th"),r=p(o)},m(t,e){u(t,n,e),i(n,r)},p:t,d(t){t&&f(n)}}}function F(t){let e,n,r,o,c,l,s,d,_,y,b,x,v,w,k,L,C,E,S,j,A,P,M,N,O,T,q,z,B=t[10]+1+"",F=t[8].name+"",H=t[8].symbol+"",V=t[8].current_price.toLocaleString()+"",D=t[8].price_change_percentage_24h+"",G=t[8].total_volume.toLocaleString()+"";return{c(){var i,u,f;e=h("tr"),n=h("td"),r=p(B),o=m(),c=h("td"),l=h("img"),_=m(),y=h("span"),b=p(F),x=m(),v=h("span"),w=p(H),k=m(),L=h("td"),C=p(V),E=p("€"),S=m(),j=h("td"),A=p(D),P=p("%"),N=m(),O=h("td"),T=p(G),q=p("€"),z=m(),g(n,"class","text-muted"),a(l.src,s=t[8].image)||g(l,"src",s),g(l,"alt",d=t[8].name),i="width",u="2rem",l.style.setProperty(i,u,f?"important":""),g(l,"class","img-fluid me-2"),g(v,"class","text-muted text-uppercase ms-2"),g(L,"class",""),g(j,"class",M=t[8].price_change_percentage_24h>0?"text-success":"text-danger"),g(O,"class","")},m(t,s){u(t,e,s),i(e,n),i(n,r),i(e,o),i(e,c),i(c,l),i(c,_),i(c,y),i(y,b),i(c,x),i(c,v),i(v,w),i(e,k),i(e,L),i(L,C),i(L,E),i(e,S),i(e,j),i(j,A),i(j,P),i(e,N),i(e,O),i(O,T),i(O,q),i(e,z)},p(t,e){2&e&&!a(l.src,s=t[8].image)&&g(l,"src",s),2&e&&d!==(d=t[8].name)&&g(l,"alt",d),2&e&&F!==(F=t[8].name+"")&&$(b,F),2&e&&H!==(H=t[8].symbol+"")&&$(w,H),2&e&&V!==(V=t[8].current_price.toLocaleString()+"")&&$(C,V),2&e&&D!==(D=t[8].price_change_percentage_24h+"")&&$(A,D),2&e&&M!==(M=t[8].price_change_percentage_24h>0?"text-success":"text-danger")&&g(j,"class",M),2&e&&G!==(G=t[8].total_volume.toLocaleString()+"")&&$(T,G)},d(t){t&&f(e)}}}function H(e){let n,r,o,c,l,s,a,d;function p(t,e){return t[0].length>0?z:q}let $=p(e),_=$(e);return{c(){n=h("div"),r=h("div"),o=h("h1"),o.textContent="CoinMarket",c=m(),l=h("input"),s=m(),_.c(),g(o,"class","text-white"),g(l,"type","text"),g(l,"class","form-control bg-dark text-white rounded-0 border-0 my-4"),g(l,"placeholder","Search your coin for name or symbol"),g(r,"class","row"),g(n,"class","container")},m(t,f){var h,p,m,g;u(t,n,f),i(n,r),i(r,o),i(r,c),i(r,l),e[6](l),i(r,s),_.m(r,null),a||(h=l,p="keyup",m=e[5],h.addEventListener(p,m,g),d=()=>h.removeEventListener(p,m,g),a=!0)},p(t,[e]){$===($=p(t))&&_?_.p(t,e):(_.d(1),_=$(t),_&&(_.c(),_.m(r,null)))},i:t,o:t,d(t){t&&f(n),e[6](null),_.d(),a=!1,d()}}}function V(t,e,n){let r=[],o=[],c=null;const l=t=>{n(1,o=r.filter((e=>e.name.toLowerCase().includes(t.toLowerCase())||e.symbol.toLowerCase().includes(t.toLowerCase()))))};(async()=>{const t=await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"),e=await t.json();n(0,r=e),n(1,o=e)})(),y((()=>{c.focus()}));return[r,o,c,["#","Coin","Price","Price Change","24h Volume"],l,({target:{value:t}})=>l(t),function(t){x[t?"unshift":"push"]((()=>{c=t,n(2,c)}))}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),N(this,t,V,H,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
