import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/vite-press/assets/img.fa4a579c.png";
const _imports_1 = "/vite-press/assets/img_1.b295697c.png";
const _imports_2 = "/vite-press/assets/img_2.2810f483.png";
const _imports_3 = "/vite-press/assets/img_3.8118008d.png";
const _imports_4 = "/vite-press/assets/img_4.726c4310.png";
const _imports_5 = "/vite-press/assets/img_5.2dbf15aa.png";
const _imports_6 = "/vite-press/assets/img_6.0ade014a.png";
const _imports_7 = "/vite-press/assets/img_7.6a52f8bc.png";
const _imports_8 = "/vite-press/assets/img_8.2991d750.png";
const _imports_9 = "/vite-press/assets/img_9.a4f5bf01.png";
const _imports_10 = "/vite-press/assets/img_10.200e566d.png";
const __pageData = JSON.parse('{"title":"调用栈","description":"掌握函数的调用关系","frontmatter":{"title":"调用栈","description":"掌握函数的调用关系","category":"javascript","tags":["调用栈"]},"headers":[],"relativePath":"frontend/javascript/CallStack.md","filePath":"frontend/javascript/CallStack.md","lastUpdated":1686303485000}');
const _sfc_main = { name: "frontend/javascript/CallStack.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="调用栈-callstack" tabindex="-1">调用栈 CallStack <a class="header-anchor" href="#调用栈-callstack" aria-label="Permalink to &quot;调用栈 CallStack&quot;">​</a></h1><p>函数是 <code>JS</code> 中的最高公民，<strong>调用栈</strong>就是用来管理函数调用关系的一种 <strong>数据结构</strong>。</p><h2 id="函数调用" tabindex="-1">函数调用 <a class="header-anchor" href="#函数调用" aria-label="Permalink to &quot;函数调用&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">var</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> a </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">function</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">add</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F07178" })}">  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">var</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">b</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">10</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F07178" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">a</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">b</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">add</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>编译阶段</li></ul><p>编译结束后会生成：<strong>全局执行上下文</strong> 和 <strong>可执行代码</strong></p><p><img${ssrRenderAttr("src", _imports_0)} alt="img.png"></p><ul><li>执行阶段</li></ul><p>生成可执行代码之后，<code>JS</code> 引擎开始顺序执行代码，执行到 <code>add</code> 这里时，<code>JS</code> 引擎判断出这里是函数调用，然后执行下面操作：</p><ol><li><p>从全局上下文中取出 <code>add</code> 函数代码</p></li><li><p>对 <code>add</code> 函数的这段代码进行编译（创建函数的执行上下文环境和可执行代码）</p></li><li><p>执行 <code>add</code> 函数，输出结果</p></li></ol><p><img${ssrRenderAttr("src", _imports_1)} alt="img.png"></p><p>函数调用完毕，在执行 <code>add</code> 函数时，会存在两个执行上下文，一个是全局执行上下文，一个是 <code>add</code> 函数的执行上下文。 那么 <code>JS</code> 引擎是怎么管理多个执行上下文的呢？<code>JS</code> 引擎是通过栈来管理这些执行上下文的。</p><h2 id="栈" tabindex="-1">栈 <a class="header-anchor" href="#栈" aria-label="Permalink to &quot;栈&quot;">​</a></h2><p>栈是一种数据呈<strong>线性排列</strong>的数据结构，特点是 <strong>先进后出</strong>。</p><p><img${ssrRenderAttr("src", _imports_2)} alt="img.png"></p><h2 id="调用栈" tabindex="-1">调用栈 <a class="header-anchor" href="#调用栈" aria-label="Permalink to &quot;调用栈&quot;">​</a></h2><p>管理执行上下文的栈，就叫调用栈。每次创建好一个执行上下文之后，就会放入调用栈中。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">var</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> a </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">2</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">function</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">add</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}">b</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}">c</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F07178" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">b</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">c</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">function</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">addAll</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}">b</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}">c</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F07178" })}">  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">var</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">d</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">10</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F07178" })}">  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">var</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">result</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">add</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">b</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">c</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F07178" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">a</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">result</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">d</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">addAll</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">6</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>上面代码中，在 <code>addAll</code> 函数中调用了 <code>add</code> 函数，现在逐步分析调用栈如何变化</p><ul><li>第一步，创建全局执行上下文，并将其压入栈底。变量 <code>a</code>、函数 <code>add</code>、函数 <code>addAll</code> 都保存到 <code>全局执行上下文</code> 的变量环境对象中。如下图：</li></ul><p><img${ssrRenderAttr("src", _imports_3)} alt="img.png"></p><ul><li>第二步，执行上下文环境压入调用栈之后，<code>JS</code> 引擎开始执行全局代码：</li></ul><p>执行 <code>a = 2;</code> 该语句会将全局执行上下文变量环境中 <code>a</code> 的值设置为 <code>2</code>。全局执行上下文环境状态如下图：</p><p><img${ssrRenderAttr("src", _imports_4)} alt="img.png"></p><ul><li>第三步，执行 <code>addAll(3, 6)</code> 调用 <code>addAll</code> 函数时：</li></ul><p><code>JS</code> 引擎会编译 <code>addAll</code> 函数，并为 <code>addAll</code> 创建一个 <code>执行上下文</code>，最后将 <code>addAll</code> 函数的执行上下文环境压入栈中，如下图：</p><p><img${ssrRenderAttr("src", _imports_5)} alt="img.png"></p><ul><li>第四步，<code>addAll</code> 函数的执行上下文创建成功之后，接着执行 <code>addAll</code> 函数的可执行代码：</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">d </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">10</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">result </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">add</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">(b</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> c)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">return</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> a </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">+</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> result </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">+</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>第五步，执行到 <code>add</code> 函数调用语句时，同样会为 <code>add</code> 函数创建一个执行上下文环境，并将其压入调用栈，如图所示：</li></ul><p><img${ssrRenderAttr("src", _imports_6)} alt="img.png"></p><ul><li>第六步，创建好 <code>add</code> 函数的执行上下文环境之后，接着执行 <code>add</code> 函数的可执行代码 <code>return b + c;</code>。</li></ul><p><code>add</code> 函数返回时，<code>add</code> 函数的执行上下文环境就会从调用栈顶部弹出，并将 <code>result</code> 的值设置为 <code>add</code> 函数的返回值 <code>9</code>，如下图：</p><p><img${ssrRenderAttr("src", _imports_7)} alt="img.png"></p><ul><li>第六步，执行 <code>addAll</code> 函数中接下来可执行代码 <code>return a + result + d;</code></li></ul><p>这个语句执行完成之后，把结果返回，<code>addAll</code> 函数的执行上下文环境也会从调用栈顶部弹出，此时调用栈中就只剩下全局执行上下文了。至此，整个 <code>JS</code> 流程执行结束，如下图所示：</p><p><img${ssrRenderAttr("src", _imports_8)} alt="img.png"></p><p><code>JS</code> 调用栈是 <code>JS</code> 引擎追踪函数执行的一个机制，当一次有多个函数被调用时，通过调用栈就能够追踪到哪个函数正在被执行以及各个函数之间的调用关系。</p><h2 id="浏览器中查看堆栈" tabindex="-1">浏览器中查看堆栈 <a class="header-anchor" href="#浏览器中查看堆栈" aria-label="Permalink to &quot;浏览器中查看堆栈&quot;">​</a></h2><p><img${ssrRenderAttr("src", _imports_9)} alt="img.png"></p><p>右边的 <code>CallStack</code> 下面显示出了函数的调用关系： 栈的底部是 <code>anonymous</code>，也就是全局的函数入口；中间是 <code>addAll</code> 函数，顶部是 <code>add</code> 函数。非常清晰的反映了函数的调用关系。在分析复杂的代码时，调用栈是非常有用的。</p><h2 id="console-trace" tabindex="-1">console.trace() <a class="header-anchor" href="#console-trace" aria-label="Permalink to &quot;console.trace()&quot;">​</a></h2><p>也可以在代码中添加 <code>console.trace()</code> 来输出函数的调用关系，如在 <code>add</code> 函数中增加 <code>console.trace()</code> ，如下图：</p><p><img${ssrRenderAttr("src", _imports_10)} alt="img.png"></p><h2 id="栈溢出" tabindex="-1">栈溢出 <a class="header-anchor" href="#栈溢出" aria-label="Permalink to &quot;栈溢出&quot;">​</a></h2><p>调用栈是用来管理执行上下文的数据结构，先进后出。需要注意的是，他是有大小的，当入栈的执行上下文超过一定输入，<code>JS</code> 引擎就会报错，这种错误就叫做 <strong>栈溢出</strong>。</p><hr><p>递归函数，很容易出现栈溢出，如下代码，当执行时就会出现栈溢出情况</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">function</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">add</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}">a</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD", "font-style": "italic" })}">b</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F07178" })}">  </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">add</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">a</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">b</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">add</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">2</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>分析：当 <code>JS</code> 引擎开始执行 <code>add</code> 函数时，就会为 <code>add</code> 函数创建执行上下文环境压入调用栈中，但是这个函数是递归的并且没有终止条件，所以 <code>JS</code> 引擎会一直创建新的函数执行上下文，并反复将其压入调用栈中，当超过调用栈的最大限度之后，就会出现栈溢出错误。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/javascript/CallStack.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CallStack = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CallStack as default
};
