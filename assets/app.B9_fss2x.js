import{i as o,aJ as p,aK as u,aL as l,aM as c,aN as f,aO as d,aP as m,aQ as h,aR as g,aS as A,d as P,a as v,h as w,w as R,aT as y,aU as C,aV as S,av as T}from"./chunks/framework.ub0QPT6g.js";import{R as b}from"./chunks/theme.DoWspS6Z.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(b),E=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return w(()=>{R(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&y(),C(),S(),s.setup&&s.setup(),()=>T(s.Layout)}});async function _(){globalThis.__VITEPRESS__=!0;const e=L(),a=D();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function D(){return h(E)}function L(){let e=o,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&_().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{_ as createApp};
