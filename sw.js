if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const o=s=>n(s,r),t={module:{uri:r},exports:a,require:o};e[r]=Promise.all(l.map((s=>t[s]||o(s)))).then((s=>(i(...s),a)))}}define(["./workbox-2512edc6"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"22bfda0b12013f7ab922000489a36843"},{url:"archive/index.html",revision:"83df2d38416e287236d1f8d3a6d7318a"},{url:"assets/app.B9_fss2x.js",revision:null},{url:"assets/archive_index.md.TREMYYbv.js",revision:null},{url:"assets/archive_index.md.TREMYYbv.lean.js",revision:null},{url:"assets/backend_index.md.BZAAdVHX.js",revision:null},{url:"assets/backend_index.md.BZAAdVHX.lean.js",revision:null},{url:"assets/backend_koa_start.md.yGQhvy4S.js",revision:null},{url:"assets/backend_koa_start.md.yGQhvy4S.lean.js",revision:null},{url:"assets/backend_koa_use.md.i8o7bKSS.js",revision:null},{url:"assets/backend_koa_use.md.i8o7bKSS.lean.js",revision:null},{url:"assets/backend_mysql_install.md.75HW4IdF.js",revision:null},{url:"assets/backend_mysql_install.md.75HW4IdF.lean.js",revision:null},{url:"assets/backend_node_env.md.BQ_V3XVw.js",revision:null},{url:"assets/backend_node_env.md.BQ_V3XVw.lean.js",revision:null},{url:"assets/backend_node_process.md.B1RWefrd.js",revision:null},{url:"assets/backend_node_process.md.B1RWefrd.lean.js",revision:null},{url:"assets/backend_redis_install.md.DTc8RMQE.js",revision:null},{url:"assets/backend_redis_install.md.DTc8RMQE.lean.js",revision:null},{url:"assets/backend_sqlite_recursion.md.B_2YhBws.js",revision:null},{url:"assets/backend_sqlite_recursion.md.B_2YhBws.lean.js",revision:null},{url:"assets/chunks/base-80a1f760.BN8L3h3Y.js",revision:null},{url:"assets/chunks/consoleHook-59e792cb.DxW9QxE8.js",revision:null},{url:"assets/chunks/DocShici.DUqrgO3b.js",revision:null},{url:"assets/chunks/DocTag.CQmpMCAt.js",revision:null},{url:"assets/chunks/framework.ub0QPT6g.js",revision:null},{url:"assets/chunks/ImageLazyLoad.CYwKdCge.js",revision:null},{url:"assets/chunks/index-585bceb7.C7rsiFev.js",revision:null},{url:"assets/chunks/index.C8CR2hdn.js",revision:null},{url:"assets/chunks/index.OmcZtxIx.js",revision:null},{url:"assets/chunks/SvgIcon.DI4F8s02.js",revision:null},{url:"assets/chunks/theme.DoWspS6Z.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.DsYunOLp.js",revision:null},{url:"assets/chunks/WordCloud.D1ZUGma7.js",revision:null},{url:"assets/cli_git_cli.md.CZAekmA8.js",revision:null},{url:"assets/cli_git_cli.md.CZAekmA8.lean.js",revision:null},{url:"assets/cli_git_commitlint.md.BzE7svjr.js",revision:null},{url:"assets/cli_git_commitlint.md.BzE7svjr.lean.js",revision:null},{url:"assets/cli_git_FAQ.md.B4AlaBLA.js",revision:null},{url:"assets/cli_git_FAQ.md.B4AlaBLA.lean.js",revision:null},{url:"assets/cli_git_hub.md.QlYESND8.js",revision:null},{url:"assets/cli_git_hub.md.QlYESND8.lean.js",revision:null},{url:"assets/cli_git_use.md.BfQtRskw.js",revision:null},{url:"assets/cli_git_use.md.BfQtRskw.lean.js",revision:null},{url:"assets/cli_index.md.CgNbZVcQ.js",revision:null},{url:"assets/cli_index.md.CgNbZVcQ.lean.js",revision:null},{url:"assets/cli_linux_cli.md.DTf89h3t.js",revision:null},{url:"assets/cli_linux_cli.md.DTf89h3t.lean.js",revision:null},{url:"assets/cli_linux_use.md.r21YWA65.js",revision:null},{url:"assets/cli_linux_use.md.r21YWA65.lean.js",revision:null},{url:"assets/cli_windows_cli.md.DCNr9bMH.js",revision:null},{url:"assets/cli_windows_cli.md.DCNr9bMH.lean.js",revision:null},{url:"assets/cli_windows_FAQ.md.D9rblXbO.js",revision:null},{url:"assets/cli_windows_FAQ.md.D9rblXbO.lean.js",revision:null},{url:"assets/cli_windows_wsl.md.DyHIHQw0.js",revision:null},{url:"assets/cli_windows_wsl.md.DyHIHQw0.lean.js",revision:null},{url:"assets/custom_img_1.CGkHfgEH.png",revision:null},{url:"assets/custom_img_10.AGMAQ1Rd.png",revision:null},{url:"assets/custom_img_2.CN5bQUr9.png",revision:null},{url:"assets/custom_img_3.BZVwLRbR.png",revision:null},{url:"assets/custom_img_4.CaLD13BG.png",revision:null},{url:"assets/custom_img_5.B2kmntr6.png",revision:null},{url:"assets/custom_img_6.Dox5s5QI.png",revision:null},{url:"assets/custom_img_7.D13dXrhY.png",revision:null},{url:"assets/custom_img_8.DZ9TVheR.png",revision:null},{url:"assets/custom_img_9.o8fKYfPz.png",revision:null},{url:"assets/download_img_1.aoozj56f.png",revision:null},{url:"assets/download_img_2.Bur_WCNs.png",revision:null},{url:"assets/download_img.CjihJziR.png",revision:null},{url:"assets/frontend_browser_basics.md.DW22mp1s.js",revision:null},{url:"assets/frontend_browser_basics.md.DW22mp1s.lean.js",revision:null},{url:"assets/frontend_browser_cache.md.CoPTclDe.js",revision:null},{url:"assets/frontend_browser_cache.md.CoPTclDe.lean.js",revision:null},{url:"assets/frontend_browser_storage.md.BM2iGkP6.js",revision:null},{url:"assets/frontend_browser_storage.md.BM2iGkP6.lean.js",revision:null},{url:"assets/frontend_build_monorepo_quickstart.md.BTeIQoYv.js",revision:null},{url:"assets/frontend_build_monorepo_quickstart.md.BTeIQoYv.lean.js",revision:null},{url:"assets/frontend_build_monorepo_turborepo.md.BTq2Cgz0.js",revision:null},{url:"assets/frontend_build_monorepo_turborepo.md.BTq2Cgz0.lean.js",revision:null},{url:"assets/frontend_build_rollup_lib-js.md.d5YXdiuY.js",revision:null},{url:"assets/frontend_build_rollup_lib-js.md.d5YXdiuY.lean.js",revision:null},{url:"assets/frontend_build_rollup_lib-ts.md.BLmwEaQr.js",revision:null},{url:"assets/frontend_build_rollup_lib-ts.md.BLmwEaQr.lean.js",revision:null},{url:"assets/frontend_build_rollup_quickstart.md.vi9PswT2.js",revision:null},{url:"assets/frontend_build_rollup_quickstart.md.vi9PswT2.lean.js",revision:null},{url:"assets/frontend_build_vite_ts.md.DQ2ZZm2V.js",revision:null},{url:"assets/frontend_build_vite_ts.md.DQ2ZZm2V.lean.js",revision:null},{url:"assets/frontend_build_webpack_FAQ.md.BuEh8XDr.js",revision:null},{url:"assets/frontend_build_webpack_FAQ.md.BuEh8XDr.lean.js",revision:null},{url:"assets/frontend_build_webpack_lib-icon.md.9Qa-qFkW.js",revision:null},{url:"assets/frontend_build_webpack_lib-icon.md.9Qa-qFkW.lean.js",revision:null},{url:"assets/frontend_code_debounce-throttle.md.D9t_mL80.js",revision:null},{url:"assets/frontend_code_debounce-throttle.md.D9t_mL80.lean.js",revision:null},{url:"assets/frontend_code_excel-json.md.BaRZZxi0.js",revision:null},{url:"assets/frontend_code_excel-json.md.BaRZZxi0.lean.js",revision:null},{url:"assets/frontend_code_image-lazy.md.Xh4QRh32.js",revision:null},{url:"assets/frontend_code_image-lazy.md.Xh4QRh32.lean.js",revision:null},{url:"assets/frontend_code_list-tree.md.CVwzVDfv.js",revision:null},{url:"assets/frontend_code_list-tree.md.CVwzVDfv.lean.js",revision:null},{url:"assets/frontend_code_others.md.D5ay-Kz-.js",revision:null},{url:"assets/frontend_code_others.md.D5ay-Kz-.lean.js",revision:null},{url:"assets/frontend_code_pretter.md.C5e7ocGo.js",revision:null},{url:"assets/frontend_code_pretter.md.C5e7ocGo.lean.js",revision:null},{url:"assets/frontend_css_selector.md.CnzphZmK.js",revision:null},{url:"assets/frontend_css_selector.md.CnzphZmK.lean.js",revision:null},{url:"assets/frontend_css_weight.md.DdL64aYV.js",revision:null},{url:"assets/frontend_css_weight.md.DdL64aYV.lean.js",revision:null},{url:"assets/frontend_html_index.md.YNj-Fwhi.js",revision:null},{url:"assets/frontend_html_index.md.YNj-Fwhi.lean.js",revision:null},{url:"assets/frontend_html_og.md.DOqwt58R.js",revision:null},{url:"assets/frontend_html_og.md.DOqwt58R.lean.js",revision:null},{url:"assets/frontend_index.md.CkhGy2I4.js",revision:null},{url:"assets/frontend_index.md.CkhGy2I4.lean.js",revision:null},{url:"assets/frontend_javascript_ajax.md.Bz2-O986.js",revision:null},{url:"assets/frontend_javascript_ajax.md.Bz2-O986.lean.js",revision:null},{url:"assets/frontend_javascript_array.md.D1aIquiW.js",revision:null},{url:"assets/frontend_javascript_array.md.D1aIquiW.lean.js",revision:null},{url:"assets/frontend_javascript_binary.md.CrdR7uvw.js",revision:null},{url:"assets/frontend_javascript_binary.md.CrdR7uvw.lean.js",revision:null},{url:"assets/frontend_javascript_BOMObserver.md.Djy0dzn8.js",revision:null},{url:"assets/frontend_javascript_BOMObserver.md.Djy0dzn8.lean.js",revision:null},{url:"assets/frontend_javascript_CallStack.md.C9gZxNUc.js",revision:null},{url:"assets/frontend_javascript_CallStack.md.C9gZxNUc.lean.js",revision:null},{url:"assets/frontend_javascript_dictionary.md.UUpDxLNm.js",revision:null},{url:"assets/frontend_javascript_dictionary.md.UUpDxLNm.lean.js",revision:null},{url:"assets/frontend_javascript_ElementPosition.md.Lf2qxL7b.js",revision:null},{url:"assets/frontend_javascript_ElementPosition.md.Lf2qxL7b.lean.js",revision:null},{url:"assets/frontend_javascript_ES6_.md.CgabPTx1.js",revision:null},{url:"assets/frontend_javascript_ES6_.md.CgabPTx1.lean.js",revision:null},{url:"assets/frontend_javascript_EventLoop.md.CMV_WuXp.js",revision:null},{url:"assets/frontend_javascript_EventLoop.md.CMV_WuXp.lean.js",revision:null},{url:"assets/frontend_javascript_fetch.md.BPyj7lOj.js",revision:null},{url:"assets/frontend_javascript_fetch.md.BPyj7lOj.lean.js",revision:null},{url:"assets/frontend_javascript_object.md.WdFWZNi6.js",revision:null},{url:"assets/frontend_javascript_object.md.WdFWZNi6.lean.js",revision:null},{url:"assets/frontend_javascript_promise.md.C1GayBh-.js",revision:null},{url:"assets/frontend_javascript_promise.md.C1GayBh-.lean.js",revision:null},{url:"assets/frontend_javascript_prototype.md.hA0iqKny.js",revision:null},{url:"assets/frontend_javascript_prototype.md.hA0iqKny.lean.js",revision:null},{url:"assets/frontend_javascript_scope.md.DjJ0nxqM.js",revision:null},{url:"assets/frontend_javascript_scope.md.DjJ0nxqM.lean.js",revision:null},{url:"assets/frontend_javascript_string.md.XvdXfpp7.js",revision:null},{url:"assets/frontend_javascript_string.md.XvdXfpp7.lean.js",revision:null},{url:"assets/frontend_network_cors.md.BCtKTmD5.js",revision:null},{url:"assets/frontend_network_cors.md.BCtKTmD5.lean.js",revision:null},{url:"assets/frontend_network_encryption.md.yyYWFx2t.js",revision:null},{url:"assets/frontend_network_encryption.md.yyYWFx2t.lean.js",revision:null},{url:"assets/frontend_network_http.md.D76XJVTA.js",revision:null},{url:"assets/frontend_network_http.md.D76XJVTA.lean.js",revision:null},{url:"assets/frontend_network_KeepAlive.md.CONKyypY.js",revision:null},{url:"assets/frontend_network_KeepAlive.md.CONKyypY.lean.js",revision:null},{url:"assets/frontend_network_request.md.DJwGUYda.js",revision:null},{url:"assets/frontend_network_request.md.DJwGUYda.lean.js",revision:null},{url:"assets/frontend_network_security.md.C2p2G015.js",revision:null},{url:"assets/frontend_network_security.md.C2p2G015.lean.js",revision:null},{url:"assets/frontend_network_tcp.md.1oME2FQ3.js",revision:null},{url:"assets/frontend_network_tcp.md.1oME2FQ3.lean.js",revision:null},{url:"assets/frontend_npm_changesets.md.Cpb9M-Xe.js",revision:null},{url:"assets/frontend_npm_changesets.md.Cpb9M-Xe.lean.js",revision:null},{url:"assets/frontend_npm_cli.md.B4xeAyye.js",revision:null},{url:"assets/frontend_npm_cli.md.B4xeAyye.lean.js",revision:null},{url:"assets/frontend_npm_FAQ.md.B5YNffz3.js",revision:null},{url:"assets/frontend_npm_FAQ.md.B5YNffz3.lean.js",revision:null},{url:"assets/frontend_npm_libs.md.BCH3-58j.js",revision:null},{url:"assets/frontend_npm_libs.md.BCH3-58j.lean.js",revision:null},{url:"assets/frontend_npm_license.md.eesREFJN.js",revision:null},{url:"assets/frontend_npm_license.md.eesREFJN.lean.js",revision:null},{url:"assets/frontend_npm_package-exports.md.DjuiCr0O.js",revision:null},{url:"assets/frontend_npm_package-exports.md.DjuiCr0O.lean.js",revision:null},{url:"assets/frontend_npm_package-json.md.BDaSdVRD.js",revision:null},{url:"assets/frontend_npm_package-json.md.BDaSdVRD.lean.js",revision:null},{url:"assets/frontend_npm_package-manager.md.Remy6c6j.js",revision:null},{url:"assets/frontend_npm_package-manager.md.Remy6c6j.lean.js",revision:null},{url:"assets/frontend_npm_package-patch.md.CEB7N-1B.js",revision:null},{url:"assets/frontend_npm_package-patch.md.CEB7N-1B.lean.js",revision:null},{url:"assets/frontend_npm_release-it.md.DQ1MGKR7.js",revision:null},{url:"assets/frontend_npm_release-it.md.DQ1MGKR7.lean.js",revision:null},{url:"assets/frontend_npm_SemVer.md.CbPl30D-.js",revision:null},{url:"assets/frontend_npm_SemVer.md.CbPl30D-.lean.js",revision:null},{url:"assets/frontend_regex_basics.md.DCActNaN.js",revision:null},{url:"assets/frontend_regex_basics.md.DCActNaN.lean.js",revision:null},{url:"assets/frontend_regex_use.md.Jb9nq7eM.js",revision:null},{url:"assets/frontend_regex_use.md.Jb9nq7eM.lean.js",revision:null},{url:"assets/frontend_vue_vue2-components.md.PFLwdWwN.js",revision:null},{url:"assets/frontend_vue_vue2-components.md.PFLwdWwN.lean.js",revision:null},{url:"assets/img_1.BCbKMi5_.png",revision:null},{url:"assets/img_1.Bl13jjtB.png",revision:null},{url:"assets/img_1.CS20ER24.png",revision:null},{url:"assets/img_1.DicLmG9K.png",revision:null},{url:"assets/img_10.BOUCCO8v.png",revision:null},{url:"assets/img_2.0-8H1RLL.png",revision:null},{url:"assets/img_2.BuKY2qSG.png",revision:null},{url:"assets/img_2.CYJ5yXGp.png",revision:null},{url:"assets/img_3.C0HM3Flz.png",revision:null},{url:"assets/img_3.DSHJBiI4.png",revision:null},{url:"assets/img_4.C6yJjs_O.png",revision:null},{url:"assets/img_4.CyvbB8IR.png",revision:null},{url:"assets/img_5.DI_3nrgt.png",revision:null},{url:"assets/img_5.Drs_5nC6.png",revision:null},{url:"assets/img_6.D2LuyJYR.png",revision:null},{url:"assets/img_6.m_OcWdgB.png",revision:null},{url:"assets/img_7.CR5SbeYH.png",revision:null},{url:"assets/img_7.iL_LI8U6.png",revision:null},{url:"assets/img_8.8w_PlJhI.png",revision:null},{url:"assets/img_9.CLyFwxk8.png",revision:null},{url:"assets/img.B7sppRf9.png",revision:null},{url:"assets/img.BgZoOJV_.png",revision:null},{url:"assets/img.BmT6qltY.png",revision:null},{url:"assets/img.C6hasugO.png",revision:null},{url:"assets/img.CfMEkuav.png",revision:null},{url:"assets/img.DHDt8zXD.png",revision:null},{url:"assets/index.md.M_fYkje0.js",revision:null},{url:"assets/index.md.M_fYkje0.lean.js",revision:null},{url:"assets/install_img_0.DQVSnpoe.png",revision:null},{url:"assets/install_img_1.B5q_bPI8.png",revision:null},{url:"assets/install_img_10.BNvJA5Me.png",revision:null},{url:"assets/install_img_11.CQ3HoZZI.png",revision:null},{url:"assets/install_img_12.CGiVZpoS.png",revision:null},{url:"assets/install_img_13.Db9xSiAF.png",revision:null},{url:"assets/install_img_14.DNFuuEKe.png",revision:null},{url:"assets/install_img_15.BoeBKURi.png",revision:null},{url:"assets/install_img_16.D-TlDM4h.png",revision:null},{url:"assets/install_img_17.hjwZMQNX.png",revision:null},{url:"assets/install_img_18.BmsYTOlu.png",revision:null},{url:"assets/install_img_19.C7vYwvFN.png",revision:null},{url:"assets/install_img_2.Dp7yUC1F.png",revision:null},{url:"assets/install_img_20.DxLMDcdF.png",revision:null},{url:"assets/install_img_3.F-Jb-JAT.png",revision:null},{url:"assets/install_img_4.C7kcrhRK.png",revision:null},{url:"assets/install_img_5.BInxtkQs.png",revision:null},{url:"assets/install_img_6.DYCJNwuT.png",revision:null},{url:"assets/install_img_7.Cjq92TJQ.png",revision:null},{url:"assets/install_img_8.DebWRHkr.png",revision:null},{url:"assets/install_img_9.sdnZHWlQ.png",revision:null},{url:"assets/install_img.S-46VbZB.png",revision:null},{url:"assets/inter-italic-cyrillic-ext.r48I6akx.woff2",revision:null},{url:"assets/inter-italic-cyrillic.By2_1cv3.woff2",revision:null},{url:"assets/inter-italic-greek-ext.1u6EdAuj.woff2",revision:null},{url:"assets/inter-italic-greek.DJ8dCoTZ.woff2",revision:null},{url:"assets/inter-italic-latin-ext.CN1xVJS-.woff2",revision:null},{url:"assets/inter-italic-latin.C2AdPX0b.woff2",revision:null},{url:"assets/inter-italic-vietnamese.BSbpV94h.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.BBPuwvHQ.woff2",revision:null},{url:"assets/inter-roman-cyrillic.C5lxZ8CY.woff2",revision:null},{url:"assets/inter-roman-greek-ext.CqjqNYQ-.woff2",revision:null},{url:"assets/inter-roman-greek.BBVDIX6e.woff2",revision:null},{url:"assets/inter-roman-latin-ext.4ZJIpNVo.woff2",revision:null},{url:"assets/inter-roman-latin.Di8DUHzh.woff2",revision:null},{url:"assets/inter-roman-vietnamese.BjW4sHH5.woff2",revision:null},{url:"assets/navigation_index.md.xc3dE2oi.js",revision:null},{url:"assets/navigation_index.md.xc3dE2oi.lean.js",revision:null},{url:"assets/npm_license_img.BlecLQ15.png",revision:null},{url:"assets/origin_index.md.DwJsFOlD.js",revision:null},{url:"assets/origin_index.md.DwJsFOlD.lean.js",revision:null},{url:"assets/style.KB8IpJDZ.css",revision:null},{url:"backend/index.html",revision:"2073ca4a7ba13e8aca62b113308627d7"},{url:"backend/koa/start.html",revision:"c2e86c9e7681cce8126ba12ce4a9ec67"},{url:"backend/koa/use.html",revision:"16da15071c1b04f418190e82dc0dbf9d"},{url:"backend/mysql/install.html",revision:"68b8780e402fb6f0d693fa0490fc9a40"},{url:"backend/node/env.html",revision:"91d7d3ac2413a46451bb69d7d62dcd85"},{url:"backend/node/process.html",revision:"4a2ed648c293fe7beda57f7120defb2f"},{url:"backend/redis/install.html",revision:"567b4a8e3ef0fcee62bbf9ca25208052"},{url:"backend/sqlite/recursion.html",revision:"afaa7c84da3bd4fe058cea758e9dc797"},{url:"cli/git/cli.html",revision:"b26f6c006797d48dcfa9cc7c5f19534a"},{url:"cli/git/commitlint.html",revision:"dea71cf17e65735c1c83d15abaabeec9"},{url:"cli/git/FAQ.html",revision:"95bad20773501a291f40f86425c7916f"},{url:"cli/git/hub.html",revision:"d58d213f7e9a7d37f76f9543094104e4"},{url:"cli/git/use.html",revision:"31557c3e881ec7ada22e78df1ea6ead9"},{url:"cli/index.html",revision:"836516fb0d59c03e8f65fbe07cb4b25a"},{url:"cli/linux/cli.html",revision:"c403ab3454ee3319ee4e78a02ab3e9c5"},{url:"cli/linux/use.html",revision:"6b4cef883dae3d7d3657e4bad2808528"},{url:"cli/windows/cli.html",revision:"a6ea807c04c3c980838c5626a9c89b96"},{url:"cli/windows/FAQ.html",revision:"d84379e98531245a7c5d181755eb0375"},{url:"cli/windows/wsl.html",revision:"161377962b8dcc3cde8266d4ff34ef1b"},{url:"favicon.ico",revision:"710702509c00e4fe7442447e555df1ff"},{url:"frontend/browser/basics.html",revision:"e3b0587d78341a8e25cf0e50230acb3f"},{url:"frontend/browser/cache.html",revision:"0d60d2273b1c6cfef6ee24c4f3c5c7bc"},{url:"frontend/browser/storage.html",revision:"5efe04e3176efa7edbe3c82eb27001c1"},{url:"frontend/build/monorepo/quickstart.html",revision:"d8154341842d45dcc5ff636a0fc1a273"},{url:"frontend/build/monorepo/turborepo.html",revision:"9d0e4c8642ad23d489f223776a9e9333"},{url:"frontend/build/rollup/lib-js.html",revision:"67beb9f9057e90571b424dd6e3f8af2c"},{url:"frontend/build/rollup/lib-ts.html",revision:"b90d8a677afde0a9663822f41be9c58a"},{url:"frontend/build/rollup/quickstart.html",revision:"36e709420fbcacb6d65fad54ce21ce06"},{url:"frontend/build/vite/ts.html",revision:"9bfe1f9ec3e3ae64a6a30c2383e0a0bc"},{url:"frontend/build/webpack/FAQ.html",revision:"653deac6547e1cdc8df4c96a35d55724"},{url:"frontend/build/webpack/lib-icon.html",revision:"a5e25ebc869709f1a10a2fe456ec010f"},{url:"frontend/code/debounce-throttle.html",revision:"10443845c683e2b4e229991aabd6a781"},{url:"frontend/code/excel-json.html",revision:"85a80c9a429eede215791032cf7a9b19"},{url:"frontend/code/image-lazy.html",revision:"5320ab7a73395a9392d80afcd7cc8e42"},{url:"frontend/code/list-tree.html",revision:"b5e207ac4c1f7ffa51b12aca6d66f722"},{url:"frontend/code/others.html",revision:"a47b5456b358f2e6408cecc11a488c1c"},{url:"frontend/code/pretter.html",revision:"2f4f119bbaee175725fe5e43fb90c8cf"},{url:"frontend/css/selector.html",revision:"5735a2e8629636e191f2f24ddf3c7a99"},{url:"frontend/css/weight.html",revision:"f0afeeff564c4f3a8c6c71bc1da7e49c"},{url:"frontend/html/index.html",revision:"045d0cd6afe50fdc17a88e34426334bf"},{url:"frontend/html/og.html",revision:"d8fb7efe6a8aa4a0a5d0d1757ed8051b"},{url:"frontend/index.html",revision:"23b982812e8543d25a84482ac9057101"},{url:"frontend/javascript/ajax.html",revision:"a2119169b21e2ab71cd6fe8fb2d0a2b7"},{url:"frontend/javascript/array.html",revision:"deb3be0b3fc0c31b8a5ce86e2ffa5201"},{url:"frontend/javascript/binary.html",revision:"7e569f0cd9ded01483a99f26dc6eb9eb"},{url:"frontend/javascript/BOMObserver.html",revision:"8ba58609334592d924d1d6594d8bbc77"},{url:"frontend/javascript/CallStack.html",revision:"98f8014f274d2939d7d1b64f53a57979"},{url:"frontend/javascript/dictionary.html",revision:"979c89ad950802dd97eb363f06e833ed"},{url:"frontend/javascript/ElementPosition.html",revision:"8fda2353789d7586d0a9cd4f8c443de5"},{url:"frontend/javascript/ES6+.html",revision:"59dddc410cd28657173eceb407b63114"},{url:"frontend/javascript/EventLoop.html",revision:"2e5b1551ad647db4b7e144c53aa2232f"},{url:"frontend/javascript/fetch.html",revision:"8bfa5f14e635be0ab62bf887b59ad2c3"},{url:"frontend/javascript/object.html",revision:"ab90f7e227aad2879fa9b0839fed478a"},{url:"frontend/javascript/promise.html",revision:"0630bf0de0fb63f6bb573081a8b34493"},{url:"frontend/javascript/prototype.html",revision:"c33b41d1cc6e4b46db1096fc945922e8"},{url:"frontend/javascript/scope.html",revision:"5e1eb7c54e068a9434c4da887706eb4c"},{url:"frontend/javascript/string.html",revision:"74f965f3e04272073a6c7e14845ab37a"},{url:"frontend/network/cors.html",revision:"3016e0a10e4837830c9101fdbe031619"},{url:"frontend/network/encryption.html",revision:"2b4d46fbd08c1d85f34c9144af08472a"},{url:"frontend/network/http.html",revision:"a184b719d93785a9becef303beef3969"},{url:"frontend/network/KeepAlive.html",revision:"f291bf388267bff6eba43cca41d9abd4"},{url:"frontend/network/request.html",revision:"6464c52db6f48dbfde536570aca298f0"},{url:"frontend/network/security.html",revision:"7ebcba7ba4f55daa8137d7a9ee164038"},{url:"frontend/network/tcp.html",revision:"8df9eb079e0ebc98af02a8c0f93d3f22"},{url:"frontend/npm/changesets.html",revision:"b75ed56d951f97657781f23e5eb0c145"},{url:"frontend/npm/cli.html",revision:"88783633cac4e03636d993d4569c421a"},{url:"frontend/npm/FAQ.html",revision:"b33442f8072865ad3445d7e744f2e8f2"},{url:"frontend/npm/libs.html",revision:"98cbc5d685f9bdf23e8639ea280b3255"},{url:"frontend/npm/license.html",revision:"b2d29d149ff4ac15dc60d4b08b42bd97"},{url:"frontend/npm/package-exports.html",revision:"a7254983e96dc790e90586de4bc08229"},{url:"frontend/npm/package-json.html",revision:"561fab3c6699572f7b679d74cf9cc543"},{url:"frontend/npm/package-manager.html",revision:"6e29195ef622d56c8cd219ef944991a5"},{url:"frontend/npm/package-patch.html",revision:"2fa225ca195bd1782fc9379577a74d3f"},{url:"frontend/npm/release-it.html",revision:"01405b4ed604ac75f4be83771f620703"},{url:"frontend/npm/SemVer.html",revision:"f4f513daccf7be70c398a70341232785"},{url:"frontend/regex/basics.html",revision:"6006b4304a100bb36e5fd63ccbecfd5f"},{url:"frontend/regex/use.html",revision:"32c44d107703e44de81671345044b7ff"},{url:"frontend/vue/vue2-components.html",revision:"892ff3d723bc82bf6049c4a064070642"},{url:"giscus/noborder_dark.css",revision:"0381017c9f23173fc52539b760cbc7b3"},{url:"giscus/noborder_light.css",revision:"1514a7d3868ce0bc5faae416baaf6a56"},{url:"icons/create.svg",revision:"4596b23f730edc20645b66213f234a9d"},{url:"icons/tags.svg",revision:"a89835a6d5f3d0f6314cb20684bfd01c"},{url:"icons/update.svg",revision:"13a037f2fbd6ef84d88997aa4cc27339"},{url:"icons/zodiac/dog.svg",revision:"7f255c221ebc536ae168bd061ce4fcd4"},{url:"icons/zodiac/dragon.svg",revision:"a6811eb3e6ac9f931f8510604b35990e"},{url:"icons/zodiac/goat.svg",revision:"8d7e96e3d87b51fc866a9706747051c0"},{url:"icons/zodiac/horse.svg",revision:"f0d014be2cf1f15ef06214b1eb480062"},{url:"icons/zodiac/monkey.svg",revision:"1160fea5b17cd96f5df29508bd455586"},{url:"icons/zodiac/ox.svg",revision:"e62223d23b89c74e26812692e78754e9"},{url:"icons/zodiac/pig.svg",revision:"ab2396b4707b864301dbd5eda5732b12"},{url:"icons/zodiac/rabbit.svg",revision:"3a89782cda47e40f4a7732ff9ba0553f"},{url:"icons/zodiac/rat.svg",revision:"45e7451cea0ef25237e19ff13fedc7e0"},{url:"icons/zodiac/rooster.svg",revision:"15d1a5484eea17d9ecf87df3841996f1"},{url:"icons/zodiac/snake.svg",revision:"abbce3bed7859d23b33c1c86517f01e2"},{url:"icons/zodiac/tiger.svg",revision:"5e9bb5ee0924f9b96b2a86e9b645bc55"},{url:"index.html",revision:"7f2928c903d0cc072a52c19a419a9adc"},{url:"live2d/core/live2dCubismCore.min.js",revision:"1ae0f80720323fd164deb9c2af05848a"},{url:"live2d/models/hijiki/hijiki.2048/texture_00.png",revision:"0cc2f2880ef801c9bdcdcfddcdddafb3"},{url:"live2d/models/tororo/tororo.2048/texture_00.png",revision:"ee9c6155217d874a3825b07dd672a029"},{url:"logo.default.svg",revision:"c13222dbc0049bf4be184901a9a20949"},{url:"logo.png",revision:"276008f0fc30e3c90ae57daf41766cbb"},{url:"logo.svg",revision:"ac82ac1a2751f04c23460d2c6861c6a4"},{url:"navigation/index.html",revision:"1ab671ce088382c24410291e2f587120"},{url:"origin/index.html",revision:"c5411219bfe57f6c4d3a9d4b5077af95"},{url:"pwa-192x192.svg",revision:"b0229250796c6572bb422e21ef82e933"},{url:"pwa-512x512.svg",revision:"aa97e375b04bcd0f65f015503c2acbf3"},{url:"logo.svg",revision:"ac82ac1a2751f04c23460d2c6861c6a4"},{url:"manifest.webmanifest",revision:"0d11bc0f310f0a653f1b9314aaf82311"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute((({sameOrigin:s,url:e})=>s&&["images","icons","svg"].some((s=>e.pathname.startsWith(`/assets/${s}/`)))),new s.StaleWhileRevalidate({cacheName:"assets-images-cache",plugins:[new s.ExpirationPlugin({purgeOnQuotaError:!0,maxEntries:256,maxAgeSeconds:604800}),new s.CacheableResponsePlugin({statuses:[200]})]}),"GET"),s.registerRoute(/^https:\/\/peiyanlu.github.io\/.*/i,new s.StaleWhileRevalidate({cacheName:"gh-images-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/someInterface/i,new s.StaleWhileRevalidate({cacheName:"interface-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(js|css|ts)/,new s.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new s.StaleWhileRevalidate({cacheName:"image-cache",plugins:[]}),"GET")}));
