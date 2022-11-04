import{_ as s,c as n,o as a,a as p}from"./app.f3e6f992.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/nodeModules/patch-package.md","lastUpdated":null}'),l={name:"frontend/nodeModules/patch-package.md"},e=p(`<p>###\u4F9D\u8D56\u5305\u91CD\u65B0\u6253\u5305</p><p>######\u8BBE\u7F6Epackage.json</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">postinstall</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">patch-package</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yarn install \u65F6\u5C06\u4F1A\u81EA\u52A8\u4E3A\u4F9D\u8D56\u5305\u6253\u8865\u4E01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// yarn install --registry=http://nexus.simulate.com:8081/repository/npm-group/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>######1\u3001\u5B89\u88C5\u4F9D\u8D56</p><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yarn add patch-package postinstall-postinstall</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Notes\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn\u73AF\u5883\u5B89\u88C5postinstall-postinstall\u662F\u4E3A\u4E86\u4F7F\u7528yarn remove\u540E\u4E5F\u53EF\u4EE5\u91CD\u65B0\u6267\u884Cpostinstall hook</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>######2\u3001\u4FEE\u6539\u4F9D\u8D56\u5305</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// javascript code</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>######3\u3001\u521B\u5EFA\u8865\u4E01</p><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u4E3A\u4F9D\u8D56\u5305\u521B\u5EFA\u8865\u4E01</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn patch-package packageName</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E3A\u4F9D\u8D56\u5305\u7684\u4F9D\u8D56\u5305\u521B\u5EFA\u8865\u4E01(\u901A\u8FC7 / \u5206\u5272)</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn patch-package packageName/packageName</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">eg: node_modules/package/node_modules/another-package</span></span>
<span class="line"><span style="color:#A6ACCD;">a\u3001yarn patch-package package/another-package</span></span>
<span class="line"><span style="color:#A6ACCD;">b\u3001yarn patch-package @my/package/@my/other-package  // scoped packages</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Options:</span></span>
<span class="line"><span style="color:#A6ACCD;">--create-issue</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5BF9\u4E8E\u6E90\u5728 GitHub \u4E0A\u6258\u7BA1\u7684\u5305\uFF0C\u6B64\u9009\u9879\u4F1A\u6839\u636E\u60A8\u7684\u5DEE\u5F02\u5728 Web \u6D4F\u89C8\u5668\u6253\u5F00\u5E26\u6709\u8BE5\u95EE\u9898\u7684issue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--use-yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">patch-package \u9ED8\u8BA4\u662F\u6839\u636E\u9879\u76EE\u4E2D\u7684 lockfile \u6765\u51B3\u5B9A\u4F7F\u7528 npm \u8FD8\u662F yarn\uFF0C\u5982\u679C\u4E24\u79CD\u90FD\u6709\uFF0C\u5219\u4F7F\u7528 npm\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u53C2\u6570\u542F\u7528 yarn</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--exclude &lt;regexp&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">\u521B\u5EFA\u8865\u4E01\u6587\u4EF6\u65F6\uFF0C\u5FFD\u7565\u4E0E\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u7684\u8DEF\u5F84\uFF0C\u8DEF\u5F84\u76F8\u5BF9\u4E8E\u8981\u4FEE\u6539\u7684\u4F9D\u8D56\u5305\u7684\u6839\u76EE\u5F55\uFF0C\u9ED8\u8BA4: package\\\\.json$</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--include &lt;regexp&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E0E --exclude &lt;regexp&gt; \u76F8\u53CD\uFF0C\u521B\u5EFA\u8865\u4E01\u6587\u4EF6\u65F6\u4EC5\u8003\u8651\u4E0E\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u7684\u8DEF\u5F84\uFF0C\u9ED8\u8BA4: .*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--case-sensitive-path-filtering</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4F7F --include \u6216 --exclude \u4E2D\u4F7F\u7528\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u533A\u5206\u5927\u5C0F\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--patch-dir</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6307\u5B9A\u653E\u7F6E\u8865\u4E01\u6587\u4EF6\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>######4\u3001\u5E94\u7528\u8865\u4E01</p><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yarn patch-package \u4E0D\u5E26\u53C2\u6570\u5E94\u7528\u6240\u6709\u8865\u4E01</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Options\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">--error-on-fail</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5931\u8D25\u540E\u5F3A\u5236 patch-package \u4EE5\u4EE3\u7801 1 \u9000\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--reverse</span></span>
<span class="line"><span style="color:#A6ACCD;">\u53D6\u6D88\u5E94\u7528\u6240\u6709\u8865\u4E01\u3002\u5982\u679C\u6253\u8865\u4E01\u540E\uFF0C\u8865\u4E01\u6587\u4EF6\u88AB\u4FEE\u6539\u8FC7\uFF0C\u6B64\u64CD\u4F5C\u5C06\u5931\u8D25\uFF0C\u6B64\u65F6\u53EF\u4EE5\u91CD\u65B0\u5B89\u88C5 node_modules</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--patch-dir</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6307\u5B9A\u653E\u7F6E\u8865\u4E01\u6587\u4EF6\u7684\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>######Dev-only</p><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u6253\u5305 devDependencies \u4E2D\u7684\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">package-name+0.44.0.patch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">to</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">package-name+0.44.0.dev.patch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,14),c=[e];function r(o,t,i,b,C,A){return a(),n("div",null,c)}const m=s(l,[["render",r]]);export{y as __pageData,m as default};
