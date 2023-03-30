var q=Object.defineProperty;var W=(e,t,s)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var r=(e,t,s)=>(W(e,typeof t!="symbol"?t+"":t,s),s);import{d as M,f as j,e as K,h as P,v as G,w as J,o as H,c as S,x as i,n as m,b as a,t as T,Y as I,F as Q,_ as D,a3 as t3,a4 as e3,u as E,i as s3,a5 as $,C as o3,a6 as n3,K as _,a7 as a3,l as r3,a8 as i3,a9 as l3,aa as c3,ab as h3,ac as u3,ad as d3,ae as m3,af as p3,ag as v3,ah as f3,ai as g3,aj as w3,H as _3}from"./chunks/framework.afe4a6f4.js";import{t as C}from"./chunks/theme.ff2448b3.js";function g(e,t,s){let o=e;return t&&(o+=`__${t}`),s&&(o+=`--${s}`),o}function M3(e,t=!1){const s=t?`.VPDoc-${e}`:`VPDoc-${e}`;return{b:()=>g(s),e:h=>h?g(s,h):"",m:h=>h?g(s,"",h):"",em:(h,f)=>h&&f?g(s,h,f):""}}const u={close:'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M556.8 512L832 236.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L512 467.2l-275.2-277.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l275.2 277.333333-277.333333 275.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333L512 556.8 787.2 832c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8L556.8 512z" fill="currentColor" ></path></svg>',left:'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M384 512L731.733333 202.666667c17.066667-14.933333 19.2-42.666667 4.266667-59.733334-14.933333-17.066667-42.666667-19.2-59.733333-4.266666l-384 341.333333c-10.666667 8.533333-14.933333 19.2-14.933334 32s4.266667 23.466667 14.933334 32l384 341.333333c8.533333 6.4 19.2 10.666667 27.733333 10.666667 12.8 0 23.466667-4.266667 32-14.933333 14.933333-17.066667 14.933333-44.8-4.266667-59.733334L384 512z" fill="currentColor" ></path></svg>',right:'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M731.733333 480l-384-341.333333c-17.066667-14.933333-44.8-14.933333-59.733333 4.266666-14.933333 17.066667-14.933333 44.8 4.266667 59.733334L640 512 292.266667 821.333333c-17.066667 14.933333-19.2 42.666667-4.266667 59.733334 8.533333 8.533333 19.2 14.933333 32 14.933333 10.666667 0 19.2-4.266667 27.733333-10.666667l384-341.333333c8.533333-8.533333 14.933333-19.2 14.933334-32s-4.266667-23.466667-14.933334-32z" fill="currentColor" ></path></svg>',zoomOut:'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z" fill="currentColor" ></path><path d="M597.333333 437.333333H341.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h256c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" fill="currentColor" ></path></svg>',zoomIn:'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z" fill="currentColor" ></path><path d="M597.333333 437.333333h-96V341.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v96H341.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h96V597.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-96H597.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" fill="currentColor" ></path></svg>',reset:'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M149.333333 394.666667c17.066667 0 32-14.933333 32-32v-136.533334l187.733334 187.733334c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c12.8-12.8 12.8-32 0-44.8l-187.733333-187.733334H362.666667c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H149.333333c-4.266667 0-8.533333 0-10.666666 2.133334-8.533333 4.266667-14.933333 10.666667-19.2 17.066666-2.133333 4.266667-2.133333 8.533333-2.133334 12.8v213.333334c0 17.066667 14.933333 32 32 32zM874.666667 629.333333c-17.066667 0-32 14.933333-32 32v136.533334L642.133333 597.333333c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8l200.533334 200.533334H661.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h213.333334c4.266667 0 8.533333 0 10.666666-2.133334 8.533333-4.266667 14.933333-8.533333 17.066667-17.066666 2.133333-4.266667 2.133333-8.533333 2.133333-10.666667V661.333333c2.133333-17.066667-12.8-32-29.866666-32zM381.866667 595.2l-200.533334 200.533333V661.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v213.333334c0 4.266667 0 8.533333 2.133334 10.666666 4.266667 8.533333 8.533333 14.933333 17.066666 17.066667 4.266667 2.133333 8.533333 2.133333 10.666667 2.133333h213.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32h-136.533333l200.533333-200.533333c12.8-12.8 12.8-32 0-44.8s-29.866667-10.666667-42.666666 0zM904.533333 138.666667c0-2.133333 0-2.133333 0 0-4.266667-8.533333-10.666667-14.933333-17.066666-17.066667-4.266667-2.133333-8.533333-2.133333-10.666667-2.133333H661.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h136.533334l-187.733334 187.733333c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466667-8.533333l187.733333-187.733333V362.666667c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V149.333333c-2.133333-4.266667-2.133333-8.533333-4.266667-10.666666z" fill="currentColor" ></path></svg>',rotate:'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M929 849a30 30 0 0 1-30-30v-83.137a447.514 447.514 0 0 1-70.921 92.209C722.935 933.225 578.442 975.008 442 953.482a444.917 444.917 0 0 1-241.139-120.591 30 30 0 1 1 37.258-47.01l0.231-0.231A385.175 385.175 0 0 0 442 892.625v-0.006c120.855 22.123 250.206-13.519 343.656-106.975a386.646 386.646 0 0 0 70.6-96.653h-87.247a30 30 0 0 1 0-60H929a30 30 0 0 1 30 30V819a30 30 0 0 1-30 30zM632 342a50 50 0 0 1 50 50v240a50 50 0 0 1-50 50H392a50 50 0 0 1-50-50V392a50 50 0 0 1 50-50h240zM402 607a15 15 0 0 0 15 15h190a15 15 0 0 0 15-15V417a15 15 0 0 0-15-15H417a15 15 0 0 0-15 15v190z m403.005-362.025a29.87 29.87 0 0 1-19.117-6.882l-0.232 0.231A386.5 386.5 0 0 0 689.478 168h-0.011c-145.646-75.182-329.021-51.747-451.117 70.35a386.615 386.615 0 0 0-70.6 96.65H255a30 30 0 0 1 0 60H95a30 30 0 0 1-30-30V205a30 30 0 0 1 60 0v83.129a447.534 447.534 0 0 1 70.923-92.206C317.981 73.866 493.048 37.2 647 85.836v-0.045a444.883 444.883 0 0 1 176.143 105.291 30 30 0 0 1-18.138 53.893z" fill="currentColor" ></path></svg>',best:'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M970.837333 919.850667l-205.696-205.653334A382.421333 382.421333 0 0 0 853.333333 469.333333a384 384 0 0 0-384-384 384 384 0 0 0-384 384 384 384 0 0 0 384 384 382.421333 382.421333 0 0 0 244.906667-88.192l205.653333 205.653334a36.053333 36.053333 0 0 0 50.986667 0 36.266667 36.266667 0 0 0-0.042667-50.944z m-380.117333-162.986667c-38.4 16.256-79.189333 24.448-121.386667 24.448a311.296 311.296 0 0 1-220.586666-91.392A311.296 311.296 0 0 1 157.312 469.333333 311.296 311.296 0 0 1 248.746667 248.746667 311.296 311.296 0 0 1 469.333333 157.354667a311.296 311.296 0 0 1 220.586667 91.392A311.296 311.296 0 0 1 781.354667 469.333333a311.296 311.296 0 0 1-91.392 220.586667 310.186667 310.186667 0 0 1-99.242667 66.901333z" fill="currentColor"></path><path d="M280.490667 597.333333v-35.541333h47.488V422.016h-40.021334v-27.178667c22.101333-4.181333 37.333333-9.856 51.370667-18.517333h32.554667v185.472h41.514666V597.333333H280.490667z m199.808-109.312c-15.530667 0-27.178667-12.245333-27.178667-28.373333 0-16.426667 11.648-28.672 27.178667-28.672 15.829333 0 27.477333 12.245333 27.477333 28.672 0 16.128-11.648 28.373333-27.477333 28.373333z m0 113.493334c-15.530667 0-27.178667-12.544-27.178667-28.672 0-16.128 11.648-28.672 27.178667-28.672 15.829333 0 27.477333 12.544 27.477333 28.672 0 16.128-11.648 28.672-27.477333 28.672zM553.472 597.333333v-35.541333h47.488V422.016h-40.021333v-27.178667c22.101333-4.181333 37.333333-9.856 51.370666-18.517333h32.554667v185.472h41.514667V597.333333h-132.906667z" fill="currentColor"></path></svg>',download:'<svg t="1680136000523" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3550" width="200" height="200"><path d="M896 672c-17.066667 0-32 14.933333-32 32v128c0 6.4-4.266667 10.666667-10.666667 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667v-128c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v128c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667v-128c0-17.066667-14.933333-32-32-32z" fill="#666666" p-id="3551"></path><path d="M488.533333 727.466667c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466667-8.533333l213.333333-213.333334c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0l-157.866667 157.866667V170.666667c0-17.066667-14.933333-32-32-32s-34.133333 14.933333-34.133333 32v456.533333L322.133333 469.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l211.2 213.333334z" fill="#666666" p-id="3552"></path></svg>'};class b3{constructor(t,s={}){r(this,"el");r(this,"oTransformX",0);r(this,"oTransformY",0);r(this,"transformX");r(this,"transformY");r(this,"zoom");r(this,"rotate");r(this,"STEP",.25);r(this,"MIN_SCALE",.2);r(this,"MAX_SCALE",2.5);r(this,"TRANSFORM_X",0);r(this,"TRANSFORM_Y",0);r(this,"ZOOM",1);r(this,"ROTATE",0);this.el=t,this.transformX=s.transformX||this.TRANSFORM_X,this.transformY=s.transformY||this.TRANSFORM_Y,this.zoom=s.zoom||this.ZOOM,this.rotate=s.rotate||this.ROTATE,this.handleDefaultDraggable(),this.onDraggable(),this.onMouseWheel()}handleDefaultDraggable(){document.body.ondragstart=t=>(t.returnValue=!1,t.preventDefault(),!1)}onDraggable(){this.el.onmousedown=t=>{const s=t.clientX,o=t.clientY;document.onmousemove=n=>{const l=n.clientX-s,d=n.clientY-o;this.transformX=this.oTransformX+l,this.transformY=this.oTransformY+d,this.el.style.cursor="grabbing",this.setPosition()}},document.onmouseup=()=>{document.onmousemove=null,this.oTransformX=this.transformX,this.oTransformY=this.transformY,this.el.style.cursor="grab"}}onMouseWheel(){const t=this.throttle(this.setMouseWheel,100);this.el.onwheel=s=>{const o=s.deltaY||s.detail;t(o)}}throttle(t,s){let o=null;return(...n)=>{o||(o=setTimeout(()=>{o=null,t.apply(this,n)},s))}}setMouseWheel(t){if(t<0){if(this.zoom>=this.MAX_SCALE){this.el.style.cursor="not-allowed";return}this.el.style.cursor="zoom-in",this.setZoomIn(this.STEP)}else{if(this.zoom<=this.MIN_SCALE){this.el.style.cursor="not-allowed";return}this.el.style.cursor="zoom-out",this.setZoomOut(this.STEP)}this.setPosition()}setZoomIn(t=this.STEP){this.zoom=Math.min(this.MAX_SCALE,this.zoom+t),this.setPosition()}setZoomOut(t=this.STEP){this.zoom=Math.max(this.MIN_SCALE,this.zoom-t),this.setPosition()}setZoomBest(){const t=this.rotate/.25%2===0,{clientWidth:s,clientHeight:o}=this.el,{clientWidth:n=0,clientHeight:l=0}=this.el.parentElement||{},d=t?Math.min(n,l)/Math.min(s,o):Math.min(n,l)/Math.max(s,o);this.zoom=Math.min(this.MAX_SCALE,d),this.setPosition()}setZoomOriginal(){this.reset(),this.setPosition()}setRotate(){this.rotate+=.25,this.setPosition()}reset(){this.transformX=this.TRANSFORM_X,this.transformY=this.TRANSFORM_Y,this.oTransformX=this.transformX,this.oTransformY=this.transformY,this.zoom=this.ZOOM}setPosition(){this.el.style.transform=`translate(${this.transformX}px, ${this.transformY}px) scale(${this.zoom}) rotate(${this.rotate}turn)`}}const x3=["src"],y3=["innerHTML"],z3=["innerHTML"],L3=["innerHTML"],T3=["innerHTML"],I3=["innerHTML"],C3=["innerHTML"],A3=["innerHTML"],P3=["innerHTML"],H3=["innerHTML"],S3=M({__name:"image-preview",props:{url:{type:String,default:"",required:!0},previewUrlList:{type:Array,default:()=>[],required:!0},zIndex:{type:Number,required:!1},backDropZIndex:{type:Number,required:!1}},setup(e){const t=e,s=M3("image-preview");let o=null;const n=j(0),l=K(()=>t.previewUrlList[n.value]),d=t.zIndex?{zIndex:t.zIndex}:{},h=t.backDropZIndex?{zIndex:t.backDropZIndex}:{},f=()=>{const c=document.querySelector(`.${s.e("main-image")}`);o=new b3(c)},V=()=>{n.value=t.previewUrlList.findIndex(c=>c===t.url)},b=()=>{n.value=n.value<=0?t.previewUrlList.length-1:n.value-1,o==null||o.setZoomOriginal()},x=()=>{n.value=n.value>=t.previewUrlList.length-1?0:n.value+1,o==null||o.setZoomOriginal()},y=()=>{p.close()},X=()=>o==null?void 0:o.setZoomIn(),B=()=>o==null?void 0:o.setZoomOut(),Y=()=>o==null?void 0:o.setRotate(),z=()=>o==null?void 0:o.setZoomBest(),N=()=>o==null?void 0:o.setZoomOriginal(),L=c=>{c.defaultPrevented||(c.code==="Escape"?y():c.code==="ArrowLeft"?b():c.code==="ArrowRight"&&x())},F=()=>{document.addEventListener("keydown",L,!1)},U=()=>{document.removeEventListener("keydown",L,!1)};return P(()=>{V(),f(),F()}),G(()=>{U()}),J(()=>o==null?void 0:o.zoom,c=>{console.log(c)}),(c,q3)=>(H(),S(Q,null,[i("div",{class:m(a(s).b()),style:I(a(d))},[i("img",{class:m(a(s).e("main-image")),src:a(l),alt:""},null,10,x3),i("div",{class:m(a(s).e("toolbar"))},[i("div",{class:m(a(s).e("toolbar-left"))},[i("button",{onClick:b,innerHTML:a(u).left},null,8,y3),i("button",null,T(n.value+1)+" / "+T(t.previewUrlList.length),1),i("button",{onClick:x,innerHTML:a(u).right},null,8,z3)],2),i("div",{class:m(a(s).e("toolbar-middle"))},[i("button",{onClick:X,innerHTML:a(u).zoomIn},null,8,L3),i("button",{onClick:B,innerHTML:a(u).zoomOut},null,8,T3),i("button",{onClick:Y,innerHTML:a(u).rotate},null,8,I3),i("button",{onClick:N,innerHTML:a(u).best},null,8,C3),i("button",{onClick:z,innerHTML:a(u).reset},null,8,A3),i("button",{onClick:z,innerHTML:a(u).download},null,8,P3)],2),i("div",{class:m(a(s).e("toolbar-right"))},[i("button",{onClick:y,innerHTML:a(u).close},null,8,H3)],2)],2)],6),i("div",{class:m(a(s).e("bg")),style:I(a(h))},null,6)],64))}});const D3=D(S3,[["__scopeId","data-v-37246861"]]),E3=e=>t3(D3,e);class p{static open(t){this.$body=document.body,this.$div=document.createElement("div"),this.$overflow=this.$body.style.overflow,this.$body.appendChild(this.$div),E3(t).mount(this.$div),this.$body.style.setProperty("overflow","hidden","important")}static close(){var t,s;(t=this.$body)==null||t.style.setProperty("overflow",this.$overflow),this.$overflow="",this.$div&&((s=this.$body)==null||s.removeChild(this.$div)),this.$body=null,this.$div=null}}r(p,"$body",null),r(p,"$div",null),r(p,"$overflow","");const Z=e=>{p.open({url:e.url,previewUrlList:e.previewUrlList,zIndex:e.zIndex,backDropZIndex:e.backDropZIndex})},A=()=>{p.close()},O=e=>{let t=null;return e.scopeSelector&&(t=document.querySelector(e.scopeSelector)),[...(t||e).querySelectorAll("img")].map(o=>o.getAttribute("preview-src")||o.getAttribute("src")||"")},k=e=>{var o;e.stopPropagation();const t=e.currentTarget,s=e.target;if(((o=s==null?void 0:s.nodeName)==null?void 0:o.toLowerCase())==="img"){const n=O(t),l=s.getAttribute("src");Z({url:l,previewUrlList:n,zIndex:t==null?void 0:t.zIndex,backDropZIndex:t==null?void 0:t.backDropZIndex})}},w=e=>{e.addEventListener("click",k)},$3=e=>{e.removeEventListener("click",k)},Z3={mounted(e,t){if(!(t!=null&&t.value))return w(e);const{custom:s,disableDefault:o,scopeSelector:n}=t.value;e.scopeSelector=n,s&&(s.open=()=>{const l=O(e);Z({url:l==null?void 0:l[0],previewUrlList:l,zIndex:e==null?void 0:e.zIndex,backDropZIndex:e==null?void 0:e.backDropZIndex})},s.close=()=>A()),!o&&w(e)},unmounted(){A()},updated(e,t){var s,o;if(e.zIndex=(s=t.value)==null?void 0:s.zIndex,e.backDropZIndex=(o=t.value)==null?void 0:o.backDropZIndex,t.value){const{value:{disableDefault:n},oldValue:l}=t,{disableDefault:d}=l||{};n!==d&&(n?$3(e):w(e))}}},O3={class:"image-preview"},k3=["src"],R3=M({__name:"ImagePreview",props:{src:null},setup(e){const t=Z3;return(s,o)=>e3((H(),S("div",O3,[i("img",{src:e.src,alt:""},null,8,k3)])),[[a(t),{scopeSelector:".VPDoc .main"}]])}});const V3=D(R3,[["__scopeId","data-v-b05c9e67"]]);const X3={...C,Layout:()=>{var t;const e=E();return s3(B3).catch(s=>console.error(s)),$(C.Layout,{class:(t=e.frontmatter.value)==null?void 0:t.layoutClass})}},B3=()=>{if(!globalThis.document)return;document.querySelectorAll("p > img").forEach(t=>{const s=t.parentElement;if(!s)return;let o;s.childNodes.length>1?(o=document.createElement("div"),s.appendChild(o)):o=s;const n=o3(V3,{src:t.getAttribute("src")});t.remove(),n3(n,o)})};function R(e){if(e.extends){const t=R(e.extends);return{...t,...e,async enhanceApp(s){t.enhanceApp&&await t.enhanceApp(s),e.enhanceApp&&await e.enhanceApp(s)}}}return e}const v=R(X3),Y3=M({name:"VitePressApp",setup(){const{site:e}=E();return P(()=>{r3(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),i3(),l3(),c3(),v.setup&&v.setup(),()=>$(v.Layout)}});async function N3(){const e=U3(),t=F3();t.provide(h3,e);const s=u3(e.route);return t.provide(d3,s),t.component("Content",m3),t.component("ClientOnly",p3),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return s.frontmatter.value}},$params:{get(){return s.page.value.params}}}),v.enhanceApp&&await v.enhanceApp({app:t,router:e,siteData:v3}),{app:t,router:e,data:s}}function F3(){return f3(Y3)}function U3(){let e=_,t;return g3(s=>{let o=w3(s);return e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),_&&(e=!1),_3(()=>import(o),[])},v.NotFound)}_&&N3().then(({app:e,router:t,data:s})=>{t.go().then(()=>{a3(t.route,s.site),e.mount("#app")})});export{N3 as createApp};
