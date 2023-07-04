import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"加密算法","description":"了解常用的加密算法","frontmatter":{"title":"加密算法","description":"了解常用的加密算法","category":"network","tags":["network","encryption"]},"headers":[],"relativePath":"frontend/network/encryption.md","filePath":"frontend/network/encryption.md","lastUpdated":1686303485000}');
const _sfc_main = { name: "frontend/network/encryption.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="加密算法" tabindex="-1">加密算法 <a class="header-anchor" href="#加密算法" aria-label="Permalink to &quot;加密算法&quot;">​</a></h1><p>非对称加密和对称加密是两种常用的加密方式。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>通常，在实际应用中，对称加密和非对称加密会结合使用。例如，使用对称加密算法加密数据，然后使用非对称加密算法加密对称密钥，这样可以保证数据的安全性，并且在保证安全性的前提下提高效率。</p></div><h2 id="对称加密" tabindex="-1">对称加密 <a class="header-anchor" href="#对称加密" aria-label="Permalink to &quot;对称加密&quot;">​</a></h2><p>对称加密是指发送方和接收方使用同一把密钥进行加密和解密。这种加密方式速度较快，但是密钥必须安全地传输，如果密钥泄露了，那么加密就失去了意义。</p><p><strong>特点：</strong></p><ul><li><p>对称加密使用相同的密钥进行加密和解密。</p></li><li><p>加密和解密的速度非常快。</p></li><li><p>密钥必须安全地传输给接收方，否则容易被拦截。</p></li><li><p>密钥管理非常困难，特别是在多个用户之间共享密钥时。</p></li></ul><h2 id="非对称加密" tabindex="-1">非对称加密 <a class="header-anchor" href="#非对称加密" aria-label="Permalink to &quot;非对称加密&quot;">​</a></h2><p>非对称加密是指使用一对公开密钥和私有密钥进行加密和解密。公开密钥是公开的，任何人都可以获得，用于加密数据；私有密钥只有私有密钥的拥有者可以使用，用于解密数据。非对称加密方式相对对称加密更加安全，因为即使攻击者获得了公开密钥，也无法解密数据，必须拥有私有密钥才能进行解密。</p><p><strong>特点：</strong></p><ul><li><p>非对称加密使用两个密钥进行加密和解密，分别为公钥和私钥。</p></li><li><p>加密和解密的速度较慢。</p></li><li><p>公钥可以公开发布，私钥必须严格保密。</p></li><li><p>密钥管理相对容易，因为每个用户都有自己的密钥对。</p></li></ul><h2 id="它们的区别" tabindex="-1">它们的区别 <a class="header-anchor" href="#它们的区别" aria-label="Permalink to &quot;它们的区别&quot;">​</a></h2><ul><li><p>对称加密和非对称加密的密钥数量不同，对称加密使用相同的密钥进行加密和解密，而非对称加密使用两个密钥，分别为公钥和私钥。</p></li><li><p>加密和解密速度不同，对称加密速度非常快，而非对称加密速度相对较慢。</p></li><li><p>密钥的管理方式不同，对称加密的密钥管理非常困难，而非对称加密的密钥管理相对容易。</p></li><li><p>对称加密相对来说不太安全，因为密钥需要安全地传输给接收方，否则可能被拦截，而非对称加密相对较安全，因为公钥可以公开发布。</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/network/encryption.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const encryption = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  encryption as default
};
