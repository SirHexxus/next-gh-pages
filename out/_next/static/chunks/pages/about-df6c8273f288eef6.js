(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{7942:function(e,n,t){"use strict";var r=t(5696);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(4957),u=t(9898),i=t(639);var l={};function f(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=u.useRouter(),s=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):u||a}}),[o,e.href,e.as]),d=s.href,v=s.as,p=e.children,h=e.replace,b=e.shallow,y=e.scroll,_=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var g=(n=a.default.Children.only(p))&&"object"===typeof n&&n.ref,E=i.useIntersection({rootMargin:"200px"}),L=r(E,2),k=L[0],m=L[1],w=a.default.useCallback((function(e){k(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,k]);a.default.useEffect((function(){var e=m&&t&&c.isLocalURL(d),n="undefined"!==typeof _?_:o&&o.locale,r=l[d+"%"+v+(n?"%"+n:"")];e&&!r&&f(o,d,v,{locale:n})}),[v,d,m,_,t,o]);var M={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}))}(e,o,d,v,h,b,y,_)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(d)&&f(o,d,v,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof _?_:o&&o.locale,x=o&&o.isLocaleDomain&&c.getDomainLocale(v,C,o&&o.locales,o&&o.domainLocales);M.href=x||c.addBasePath(c.addLocale(v,C,o&&o.defaultLocale))}return a.default.cloneElement(n,M)};n.default=s},639:function(e,n,t){"use strict";var r=t(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=o.useRef(),l=o.useState(!1),f=r(l,2),s=f[0],d=f[1],v=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),t||s||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!c&&!s){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[v,s]};var o=t(7294),a=t(6286),c="undefined"!==typeof IntersectionObserver;var u=new Map},2780:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(1664),o=t(5893);function a(){return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:"About us"}),(0,o.jsxs)("div",{children:["Back to"," ",(0,o.jsx)(r.default,{href:"/",as:"/next-gh-pages/",children:(0,o.jsx)("a",{children:"Home"})})]})]})}},8961:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(2780)}])},1664:function(e,n,t){e.exports=t(7942)}},function(e){e.O(0,[774,888,179],(function(){return n=8961,e(e.s=n);var n}));var n=e.O();_N_E=n}]);