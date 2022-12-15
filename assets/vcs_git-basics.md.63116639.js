import{_ as s,c as n,o as a,a as l}from"./app.2516fd24.js";const m=JSON.parse('{"title":"Git 常用命令","description":"","frontmatter":{},"headers":[{"level":2,"title":"仓库","slug":"仓库","link":"#仓库","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"增加/删除文件","slug":"增加-删除文件","link":"#增加-删除文件","children":[]},{"level":2,"title":"代码提交","slug":"代码提交","link":"#代码提交","children":[]},{"level":2,"title":"分支","slug":"分支","link":"#分支","children":[]},{"level":2,"title":"标签","slug":"标签","link":"#标签","children":[]},{"level":2,"title":"查看信息","slug":"查看信息","link":"#查看信息","children":[]},{"level":2,"title":"远程同步","slug":"远程同步","link":"#远程同步","children":[]},{"level":2,"title":"撤销","slug":"撤销","link":"#撤销","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"relativePath":"vcs/git-basics.md","lastUpdated":1669197850000}'),p={name:"vcs/git-basics.md"},e=l(`<h1 id="git-常用命令" tabindex="-1">Git 常用命令 <a class="header-anchor" href="#git-常用命令" aria-hidden="true">#</a></h1><h2 id="仓库" tabindex="-1">仓库 <a class="header-anchor" href="#仓库" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 在当前目录新建一个Git代码库</span></span>
<span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 新建一个目录，将其初始化为Git代码库</span></span>
<span class="line"><span style="color:#A6ACCD;">git init </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">project-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 显示当前的Git配置</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 编辑Git配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">git config -e </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">--global</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 设置提交代码时的用户信息</span></span>
<span class="line"><span style="color:#A6ACCD;">git config </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">--global</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> user.name </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[name]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">git config </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">--global</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> user.email </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[email address]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="增加-删除文件" tabindex="-1">增加/删除文件 <a class="header-anchor" href="#增加-删除文件" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 添加指定文件到暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 添加指定目录到暂存区，包括子目录</span></span>
<span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 添加当前目录的所有文件到暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 添加每个变化前，都会要求确认</span></span>
<span class="line"><span style="color:#676E95;"># 对于同一个文件的多处变化，可以实现分次提交</span></span>
<span class="line"><span style="color:#A6ACCD;">git add -p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm --cached </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 改名文件，并且将这个改名放入暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">git mv </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file-original</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file-renamed</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="代码提交" tabindex="-1">代码提交 <a class="header-anchor" href="#代码提交" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki has-diff"><code><span class="line"><span style="color:#676E95;"># 提交暂存区到仓库区</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 提交暂存区的指定文件到仓库区</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ... -m </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 提交工作区自上次commit之后的变化，直接到仓库区</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 提交时显示所有diff信息</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 使用一次新的commit，替代上一次提交</span></span>
<span class="line"><span style="color:#676E95;"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit --amend -m </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 重做上一次commit，并包括指定文件的新变化</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit --amend </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="分支" tabindex="-1">分支 <a class="header-anchor" href="#分支" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#676E95;"># 列出所有本地分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 列出所有远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 列出所有本地分支和远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 从远程分支新建一个分支，并切换到该分支</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">git checkout -b </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> origin/</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote-branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch --track </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote-branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 切换到指定分支，并更新工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 切换到上一个分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch --set-upstream </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote-branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 合并指定分支到当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 选择一个commit，合并进当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git cherry-pick </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 删除分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -d </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 删除远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin --delete </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch-name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -dr </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote/branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="标签" tabindex="-1">标签 <a class="header-anchor" href="#标签" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 列出所有tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 新建一个tag在当前commit</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 新建一个tag在指定commit</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 删除本地tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag -d </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 删除远程tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin :refs/tags/</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tagName</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 查看tag信息</span></span>
<span class="line"><span style="color:#A6ACCD;">git show </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 提交指定tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 提交所有tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> --tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="查看信息" tabindex="-1">查看信息 <a class="header-anchor" href="#查看信息" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki has-diff"><code><span class="line"><span style="color:#676E95;"># 显示有变更的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">git status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示当前分支的版本历史</span></span>
<span class="line"><span style="color:#A6ACCD;">git log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">git log --stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#A6ACCD;">git log -S </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">keyword</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line"><span style="color:#A6ACCD;">git log </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> HEAD --pretty=format:%s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"><span style="color:#A6ACCD;">git log </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> HEAD --grep feature</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#A6ACCD;">git log --follow </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">git whatchanged </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#A6ACCD;">git log -p </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#A6ACCD;">git log -5 --pretty --oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"><span style="color:#A6ACCD;">git shortlog -sn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"><span style="color:#A6ACCD;">git blame </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示暂存区和上一个commit的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff --cached </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示两次提交之间的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">first-branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">second-branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff --shortstat </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@{0 day ago}</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示某次提交的元数据和内容变化</span></span>
<span class="line"><span style="color:#A6ACCD;">git show </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示某次提交发生变化的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">git show --name-only </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示某次提交时，某个文件的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">git show </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">filename</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示当前分支的最近几次提交</span></span>
<span class="line"><span style="color:#A6ACCD;">git reflog</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h2 id="远程同步" tabindex="-1">远程同步 <a class="header-anchor" href="#远程同步" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 下载远程仓库的所有变动</span></span>
<span class="line"><span style="color:#A6ACCD;">git fetch </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示所有远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote -v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 显示某个远程仓库的信息</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote show </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 增加一个新的远程仓库，并命名</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">shortname</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 取回远程仓库的变化，并与本地分支合并</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 上传本地指定分支到远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> --force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 推送所有分支到远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">remote</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> --all</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="撤销" tabindex="-1">撤销 <a class="header-anchor" href="#撤销" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 恢复暂存区的指定文件到工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 恢复某个commit的指定文件到暂存区和工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 恢复暂存区的所有文件到工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 重置暂存区与工作区，与上一次commit保持一致</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --keep </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 新建一个commit，用来撤销指定commit</span></span>
<span class="line"><span style="color:#676E95;"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git revert </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#暂时将未提交的变化移除，稍后再移入</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash pop</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 生成一个可供发布的压缩包</span></span>
<span class="line"><span style="color:#A6ACCD;">git archive</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,21),r=[e];function c(o,i,t,b,D,y){return a(),n("div",null,r)}const A=s(p,[["render",c]]);export{m as __pageData,A as default};
