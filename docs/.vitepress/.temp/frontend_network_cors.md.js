import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"跨域","description":"什么是跨域","frontmatter":{"title":"跨域","description":"什么是跨域","category":"network","tags":["network","cors"]},"headers":[],"relativePath":"frontend/network/cors.md","filePath":"frontend/network/cors.md","lastUpdated":1686303485000}');
const _sfc_main = { name: "frontend/network/cors.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="跨域-cors" tabindex="-1">跨域 CORS <a class="header-anchor" href="#跨域-cors" aria-label="Permalink to &quot;跨域 CORS&quot;">​</a></h1><p>跨域问题指的是：浏览器限制了当前网页从不同的域名、端口、协议访问另一个网站的资源的限制。浏览器是基于同源策略来限制跨域访问的。</p><p>同源策略指的是：<strong>协议</strong>、<strong>域名</strong>、<strong>端口号</strong>必须完全相同</p><p>解决跨域指的是：通过各种方式，避开浏览器的安全限制</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><ol><li><p><code>JSONP</code>：通过动态创建 <code>&lt;script&gt;</code> 标签，通过 <code>src</code> 属性加载一个 <code>API</code>，并在 <code>url</code> 参数中携带回调函数名，服务端返回一个执行该回调函数的 <code>JavaScript</code> 脚本。<code>JSONP</code> 仅支持 <code>GET</code> 请求，且只能用于跨域获取数据，无法实现向服务器提交数据。</p></li><li><p><code>CORS</code>：服务器设置响应头中的 <code>Access-Control-Allow-Origin</code> 字段，允许指定的域名跨域访问该资源。使用 <code>CORS</code> 需要服务器端支持，且需要前端进行额外的配置，可以支持 <code>GET/POST</code> 等请求类型。</p></li><li><p><code>代理服务器</code>：前端请求自己的服务器，自己的服务器再去请求目标服务器，最后将目标服务器的响应返回给前端。由于是同源请求，不存在跨域问题，但需要在自己的服务器上进行配置。</p></li><li><p><code>WebSocket</code>：<code>WebSocket</code> 协议是一种在单个 <code>TCP</code> 连接上进行全双工通信的协议，它不受同源策略的限制。通过在客户端和服务器之间建立 <code>WebSocket</code> 连接，可以在跨域情况下进行实时通信。</p></li><li><p><code>postMessage</code>：可以在跨域的窗口之间发送消息，通过对消息的监听来实现跨域通信。</p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/network/cors.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cors = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cors as default
};
