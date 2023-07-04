import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/vite-press/assets/img.a4ef83c3.png";
const _imports_1 = "/vite-press/assets/img_1.5e390f4e.png";
const __pageData = JSON.parse('{"title":"原型链","description":"百问不厌的原型链","frontmatter":{"title":"原型链","description":"百问不厌的原型链","category":"javascript","tags":["prototype"]},"headers":[],"relativePath":"frontend/javascript/prototype.md","filePath":"frontend/javascript/prototype.md","lastUpdated":1686303485000}');
const _sfc_main = { name: "frontend/javascript/prototype.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="原型链" tabindex="-1">原型链 <a class="header-anchor" href="#原型链" aria-label="Permalink to &quot;原型链&quot;">​</a></h1><h2 id="原型对象" tabindex="-1">原型对象 <a class="header-anchor" href="#原型对象" aria-label="Permalink to &quot;原型对象&quot;">​</a></h2><ul><li><p><code>JS</code> 的每个函数（<code>Person</code>）在创建的时候，都会生成一个 <code>prototype</code> 属性，这个属性指向一个对象，这个对象就是此函数的原型对象（<code>Person.prototype</code>）。</p></li><li><p>每一个对象（包括普通对象、实例、<code>prototype</code>）都有一个 <code>__proto__</code> 属性，这个属性指向该对象的构造函数的原型对象（<code>Person.prototype</code>）。</p></li><li><p>原型对象（<code>Person.prototype</code>）中有个 <code>constructor</code> 属性，这个属性指向该构造函数。这样原型对象和它的构造函数之间就产生了联系。</p></li></ul><p><img${ssrRenderAttr("src", _imports_0)} alt="img.png"></p><h2 id="原型链-1" tabindex="-1">原型链 <a class="header-anchor" href="#原型链-1" aria-label="Permalink to &quot;原型链&quot;">​</a></h2><p>当我们访问一个 <code>对象</code> 的属性或者方法的时候，会先在对象自身属性上查找，有则直接使用，没有则通过他的隐式属性<code>person.__proto__（Person.prototype）</code> 上查找，如果没有找到则会在其构造函数的 <code>prototype</code> 的 <code>__proto__</code> 中查找，没有找到就再往上一层查找，直到 <code>Object</code>，这样一层一层的查找就会形成一个链式结构——<strong>原型链</strong></p><p><img${ssrRenderAttr("src", _imports_1)} alt="img.png"></p><h2 id="new" tabindex="-1">new <a class="header-anchor" href="#new" aria-label="Permalink to &quot;new&quot;">​</a></h2><p><code>new</code> 关键字会进行如下的操作：</p><ol><li><p>创建一个空的简单 <code>JavaScript</code> 对象（即 <code>{}</code>）；</p></li><li><p>为步骤 <code>1</code> 新创建的对象添加属性 <code>__proto__</code>，将该属性链接至构造函数的原型对象；</p></li><li><p>将步骤 <code>1</code> 新创建的对象作为 <code>this</code> 的上下文；</p></li><li><p>如果该函数没有返回对象，则返回 <code>this</code>。</p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/javascript/prototype.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const prototype = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  prototype as default
};
