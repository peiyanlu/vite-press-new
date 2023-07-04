import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"辞海","description":"开发中常用术语","frontmatter":{"title":"辞海","description":"开发中常用术语","category":"javascript","tags":["Dictionary","web"],"order":99},"headers":[],"relativePath":"frontend/javascript/dictionary.md","filePath":"frontend/javascript/dictionary.md","lastUpdated":1686488104000}');
const _sfc_main = { name: "frontend/javascript/dictionary.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dictionary-for-webdeveloper" tabindex="-1">Dictionary For WebDeveloper <a class="header-anchor" href="#dictionary-for-webdeveloper" aria-label="Permalink to &quot;Dictionary For WebDeveloper&quot;">​</a></h1><h2 id="json" tabindex="-1">JSON <a class="header-anchor" href="#json" aria-label="Permalink to &quot;JSON&quot;">​</a></h2><p><code>JSON</code> 是一种轻量级的数据交换格式，常用于客户端和服务器之间的数据传输。<code>JSON</code> 代表 <strong><code>JavaScript</code> 对象表示法</strong>（<code>JavaScript Object Notation</code>），它使用可读性强的文本格式来表示结构化数据。</p><p>优点：</p><ol><li><p>易于理解和使用：<code>JSON</code> 使用简单的文本格式，易于理解和使用。因为它是一种文本格式，所以它可以在任何支持文本输入的系统之间进行交换。</p></li><li><p>轻量级：相比其他数据交换格式，如 <code>XML</code>，<code>JSON</code> 更加轻量级。这意味着在传输数据时，它需要更少的带宽和资源。</p></li><li><p>可读性好：<code>JSON</code> 使用键值对的方式来表示数据，这使得数据的阅读和编辑变得更加容易。</p></li><li><p>易于处理：由于 <code>JSON</code> 数据可以被转换为 <code>JavaScript</code> 对象，因此在客户端可以很容易地进行处理。</p></li></ol><p>缺点：</p><ol><li><p>不支持注释：与 <code>XML</code> 不同，<code>JSON</code> 不支持注释，这可能使得阅读和理解 <code>JSON</code> 数据变得更加困难。</p></li><li><p>不能处理大型数据：由于 <code>JSON</code> 数据是基于文本的，因此它不能很好地处理大型数据。这可能会导致性能问题。</p></li><li><p>不适合描述复杂结构：<code>JSON</code> 的数据结构比 <code>XML</code> 简单，因此它不适合描述非常复杂的数据结构。这可能会使得某些应用程序难以使用 <code>JSON</code> 作为数据交换格式。</p></li></ol><h2 id="pwa" tabindex="-1">P<wbr>WA <a class="header-anchor" href="#pwa" aria-label="Permalink to &quot;P&lt;wbr&gt;WA&quot;">​</a></h2><p><code>P<wbr>WA</code> 全称 <code>Progressive Web App</code>，即渐进式 <code>WEB</code> 应用。</p><ol><li><p>可以添加至主屏幕，点击主屏幕图标可以实现启动动画以及隐藏地址栏</p></li><li><p>实现离线缓存功能，即使用户手机没有网络，依然可以使用一些离线功能</p></li><li><p>实现了消息推送</p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/javascript/dictionary.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dictionary = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dictionary as default
};
