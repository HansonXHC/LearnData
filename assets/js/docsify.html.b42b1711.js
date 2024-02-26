"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[3689],{3671:(e,s)=>{s.A=(e,s)=>{const a=e.__vccOpts||e;for(const[e,n]of s)a[e]=n;return a}},6916:(e,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>d});var n=a(7847);const t=(0,n.Lk)("p",null,"在日常工作中，我需要管理大量以 Markdown 格式编写的笔记和文档。这些资料往往包含敏感信息，不适合公开分享，但我又希望能有一个方便的方式来查看和管理这些文档。Docsify 是一个轻量级的文档网站生成器，支持将 Markdown 文件即时转换为网页格式，非常适合作为个人或团队的文档查看工具。",-1),o=(0,n.Lk)("code",null,"Run, PowerShell.exe -NoExit -Command &{docsify serve --port 3030}, D:\\web\\marketing",-1),i={href:"https://github.com/rockbenben/docsify-docker",target:"_blank",rel:"noopener noreferrer"},c=(0,n.Fv)('<p>以下是通过 Docker 部署 Docsify 的命令，这可以让你轻松地在任何支持 Docker 的环境中部署自己的私密文件服务器：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.8&quot;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">docsify</span><span class="token punctuation">:</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> docsify<span class="token punctuation">-</span>server\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> rockben/docsify<span class="token punctuation">-</span>server\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/docsify/docs<span class="token punctuation">:</span>/docs\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;3310:3000&quot;</span>\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 Docker 配置文件定义了一个服务 <code>docsify</code>：</p><ul><li><code>volumes</code> 映射了本地的文档目录到容器内，使得容器可以访问并展示这些 Markdown 文件。</li><li><code>ports</code> 将容器的 3000 端口映射到本地的 3310 端口，你可以通过访问本地的 3310 端口来查看文档。</li></ul><p>通过以上步骤，我们可以轻松地利用 Docsify 和 Docker 构建一个私密且高效的文件服务器。这不仅简化了我们的工作流程，还提高了文档管理的安全性和便捷性。无论是个人笔记、团队协作文件还是企业内部资料，利用这种方法，你都能享受到快速、安全且易于管理的文档服务。现在，尝试动手实践，为你的文档管理带来一场革新吧！</p><p>如果你在部署或使用过程中遇到任何问题，欢迎在评论区留言交流，我们可以一起探讨解决方案。</p>',6),r={},l=(0,a(3671).A)(r,[["render",function(e,s){const a=(0,n.g2)("ExternalLinkIcon");return(0,n.uX)(),(0,n.CE)("div",null,[t,(0,n.Lk)("p",null,[(0,n.eW)("起初，我通过一个 ahk 脚本在开机时执行 "),o,(0,n.eW)(" 命令来启动 Docsify 服务。虽然这种方法能够工作，但启动和维护过程相对繁琐。为了提高效率并实现更好的部署方式，我转向了 Docker 技术，并构建了一个名为 "),(0,n.Lk)("a",i,[(0,n.eW)("docsify-docker"),(0,n.bF)(a)]),(0,n.eW)(" 的项目。这个项目不仅简化了部署流程，还能自动检测 docsify-cli 的更新，确保文档服务器始终保持最新状态。")]),c])}]]),d=JSON.parse('{"path":"/services/dockers-on-nas/docsify.html","title":"Docsify：私密文件服务器","lang":"zh-CN","frontmatter":{"article":false,"title":"Docsify：私密文件服务器","order":103,"description":"在日常工作中，我需要管理大量以 Markdown 格式编写的笔记和文档。这些资料往往包含敏感信息，不适合公开分享，但我又希望能有一个方便的方式来查看和管理这些文档。Docsify 是一个轻量级的文档网站生成器，支持将 Markdown 文件即时转换为网页格式，非常适合作为个人或团队的文档查看工具。 起初，我通过一个 ahk 脚本在开机时执行 Run, ...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/docsify.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Docsify：私密文件服务器"}],["meta",{"property":"og:description","content":"在日常工作中，我需要管理大量以 Markdown 格式编写的笔记和文档。这些资料往往包含敏感信息，不适合公开分享，但我又希望能有一个方便的方式来查看和管理这些文档。Docsify 是一个轻量级的文档网站生成器，支持将 Markdown 文件即时转换为网页格式，非常适合作为个人或团队的文档查看工具。 起初，我通过一个 ahk 脚本在开机时执行 Run, ..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-26T17:51:54.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-26T17:51:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Docsify：私密文件服务器\\",\\"description\\":\\"在日常工作中，我需要管理大量以 Markdown 格式编写的笔记和文档。这些资料往往包含敏感信息，不适合公开分享，但我又希望能有一个方便的方式来查看和管理这些文档。Docsify 是一个轻量级的文档网站生成器，支持将 Markdown 文件即时转换为网页格式，非常适合作为个人或团队的文档查看工具。 起初，我通过一个 ahk 脚本在开机时执行 Run, ...\\"}"]]},"headers":[],"git":{"createdTime":1708969914000,"updatedTime":1708969914000,"contributors":[{"name":"HansonXHC","email":"107744279+HansonXHC@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.93,"words":578},"filePathRelative":"services/dockers-on-nas/docsify.md","localizedDate":"2024年2月26日","excerpt":"<p>在日常工作中，我需要管理大量以 Markdown 格式编写的笔记和文档。这些资料往往包含敏感信息，不适合公开分享，但我又希望能有一个方便的方式来查看和管理这些文档。Docsify 是一个轻量级的文档网站生成器，支持将 Markdown 文件即时转换为网页格式，非常适合作为个人或团队的文档查看工具。</p>\\n<p>起初，我通过一个 ahk 脚本在开机时执行 <code>Run, PowerShell.exe -NoExit -Command &amp;{docsify serve --port 3030}, D:\\\\web\\\\marketing</code> 命令来启动 Docsify 服务。虽然这种方法能够工作，但启动和维护过程相对繁琐。为了提高效率并实现更好的部署方式，我转向了 Docker 技术，并构建了一个名为 <a href=\\"https://github.com/rockbenben/docsify-docker\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">docsify-docker</a> 的项目。这个项目不仅简化了部署流程，还能自动检测 docsify-cli 的更新，确保文档服务器始终保持最新状态。</p>","autoDesc":true}')},5470:(e,s,a)=>{a.r(s),a.d(s,{comp:()=>O,data:()=>I});var n=a(7847);const t={href:"https://docsify.js.org/#/zh-cn/",target:"_blank",rel:"noopener noreferrer"},o={href:"https://docsify.js.org/#/zh-cn/",target:"_blank",rel:"noopener noreferrer"},i=(0,n.Lk)("h2",{id:"插件",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#插件"},[(0,n.Lk)("span",null,"插件")])],-1),c={href:"https://github.com/docsifyjs/awesome-docsify#plugins",target:"_blank",rel:"noopener noreferrer"},r={class:"task-list-container"},l={class:"task-list-item"},d=(0,n.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-0",checked:"checked",disabled:"disabled"},null,-1),p={class:"task-list-item-label",for:"task-item-0"},k={href:"https://notebook.js.org/#/README",target:"_blank",rel:"noopener noreferrer"},u={class:"task-list-item"},h=(0,n.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-1",checked:"checked",disabled:"disabled"},null,-1),f={class:"task-list-item-label",for:"task-item-1"},m={href:"https://github.com/827652549/docsify-count",target:"_blank",rel:"noopener noreferrer"},b={class:"task-list-item"},y=(0,n.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-2",checked:"checked",disabled:"disabled"},null,-1),g={class:"task-list-item-label",for:"task-item-2"},v={href:"https://github.com/cxcn/docsify-waline/blob/main/README.zh-CN.md",target:"_blank",rel:"noopener noreferrer"},L={class:"task-list-item"},W=(0,n.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-3",checked:"checked",disabled:"disabled"},null,-1),x={class:"task-list-item-label",for:"task-item-3"},w={href:"https://github.com/mrpotatoes/docsify-toc",target:"_blank",rel:"noopener noreferrer"},_={href:"https://tainacan.github.io/tainacan-wiki/#/general-concepts",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/dromara/sureness/blob/master/docs/index.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://wiki.lifeupapp.fun/zh-cn/#/features/174",target:"_blank",rel:"noopener noreferrer"},C={class:"task-list-item"},F=(0,n.Lk)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-4",checked:"checked",disabled:"disabled"},null,-1),M={class:"task-list-item-label",for:"task-item-4"},z={href:"https://github.com/meff34/docsify-to-pdf-converter",target:"_blank",rel:"noopener noreferrer"},E=(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,[(0,n.Lk)("code",null,"illegal operation on a directory"),(0,n.eW)(" 报错：sidebar 中不要使用简写地址，将 "),(0,n.Lk)("code",null,"main/"),(0,n.eW)(" 改为 "),(0,n.Lk)("code",null,"main/README.md"),(0,n.eW)("，否则将读取到目录而报错。")]),(0,n.Lk)("li",null,[(0,n.Lk)("code",null,"'node_modules' 不是内部或外部命令"),(0,n.eW)(" 报错：将 package.json 的设置修改为 "),(0,n.Lk)("code",null,'"convert": "node_modules\\\\.bin\\\\docsify-pdf-converter"'),(0,n.eW)("。这问题多发生在 Windows，是由 Windows 与 Linux 路径规则不同而引起的。")])],-1),N=(0,n.Lk)("h2",{id:"配置",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#配置"},[(0,n.Lk)("span",null,"配置")])],-1),T=(0,n.Lk)("h3",{id:"docsify-emoji",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#docsify-emoji"},[(0,n.Lk)("span",null,"docsify emoji")])],-1),H={href:"https://docsify.js.org/#/zh-cn/plugins?id=emoji",target:"_blank",rel:"noopener noreferrer"},P=(0,n.Lk)("code",null,"&#58;",-1),R=(0,n.Lk)("code",null,":100:",-1),S=(0,n.Lk)("code",null,"&#58;100:",-1),A=(0,n.Lk)("p",null,"实际使用中，我直接复制 emoji，都能正常显示。",-1),q=(0,n.Lk)("h2",{id:"本地命令",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#本地命令"},[(0,n.Lk)("span",null,"本地命令")])],-1),X={href:"https://github.com/docsifyjs/docsify-cli",target:"_blank",rel:"noopener noreferrer"},Z=(0,n.Fv)('<p><code>&lt;path&gt;</code> 默认为当前路径，可使用子文件夹指定路径，如 <code>./docs</code> 或 <code>docs</code>。</p><p><code>[]</code> 为可省略命令区，无实际作用，输出时需要去除。</p><h3 id="serve-启动" tabindex="-1"><a class="header-anchor" href="#serve-启动"><span>Serve 启动</span></a></h3><p>若要在电脑上查看 docsify 页面，可执行 serve 架构命令，在本地主机上运行服务。默认本地端口为 3000，可以指定端口。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>docsify serve <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span> <span class="token punctuation">[</span>--open false<span class="token punctuation">]</span> <span class="token punctuation">[</span>--port <span class="token number">3000</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用时不要关闭命令终端，否则 serve 也会停止。</p><h3 id="生成侧边栏" tabindex="-1"><a class="header-anchor" href="#生成侧边栏"><span>生成侧边栏</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>docsify generate <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span> <span class="token punctuation">[</span>--sidebar _sidebar.md<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>generate 命令会遍历指定目录及其子目录的所有 markdown 文件，并生成全路径的 _sidebar.md。<code>&lt;path&gt;</code> 不能省略，需指定子文件夹路径。</p><p>如果路径中存在 _sidebar.md，则会报错。</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="引用路径" tabindex="-1"><a class="header-anchor" href="#引用路径"><span>引用路径</span></a></h3><p>docsify 引用内部文件时，路径会自带添加域名。</p><p>例如：指向子文档时，链接是 <code>子文件夹/文档名.md</code>；指向子文档的小标题时，链接是 <code>子文件夹/文档名？id=小标题</code>。</p><h3 id="页面未同步更新" tabindex="-1"><a class="header-anchor" href="#页面未同步更新"><span>页面未同步更新</span></a></h3><blockquote><p>CDN 默认是有缓存的，如果文件更新，访问的可能不是最新的文件。</p><p>我设置了 routerMode 为 history，使用 CDN 访问非首页，再次刷新会找不到文件。</p><p>如果开启了 <code>relativePath: true</code>，文件可以找到，但是侧栏上边的标题点击又有点问题。</p></blockquote><h3 id="github-pages-报错" tabindex="-1"><a class="header-anchor" href="#github-pages-报错"><span>GitHub Pages 报错</span></a></h3><p>如果 SSL 链接 404 报错，显示「There isn&#39;t a GitHub Pages site here」，则目录中加入 <code>CNAME</code> 文件。</p>',18),G={},O=(0,a(3671).A)(G,[["render",function(e,s){const a=(0,n.g2)("ExternalLinkIcon");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("p",null,[(0,n.Lk)("a",t,[(0,n.eW)("docsify"),(0,n.bF)(a)]),(0,n.eW)(" 是一个神奇的文档网站生成器，可以快速帮你将 .md 文档生成为网站。docsify 入门简单且无需服务器，非常适合个人笔记的简单整理分享。")]),(0,n.Lk)("p",null,[(0,n.eW)("本页集中了我使用 docsify 中遇到的问题，新手先看 "),(0,n.Lk)("a",o,[(0,n.eW)("docsify 入门文档"),(0,n.bF)(a)]),(0,n.eW)("。")]),i,(0,n.Lk)("p",null,[(0,n.Lk)("a",c,[(0,n.eW)("docsify 插件列表"),(0,n.bF)(a)]),(0,n.eW)("：")]),(0,n.Lk)("ul",r,[(0,n.Lk)("li",l,[d,(0,n.Lk)("label",p,[(0,n.Lk)("a",k,[(0,n.eW)("docsify 笔记类参考"),(0,n.bF)(a)]),(0,n.eW)("：看板娘，多级页面，页面点击效果，网站运行时间。")])]),(0,n.Lk)("li",u,[h,(0,n.Lk)("label",f,[(0,n.Lk)("a",m,[(0,n.eW)("docsify-count"),(0,n.bF)(a)]),(0,n.eW)("：docsify 的字数和阅读时长插件。")])]),(0,n.Lk)("li",b,[y,(0,n.Lk)("label",g,[(0,n.Lk)("a",v,[(0,n.eW)("docsify-waline"),(0,n.bF)(a)]),(0,n.eW)("：提供评论功能的同时，借用 docsify-count 接口展示阅读量。暂时停止 1300 宽度的 waline 显示，避免页面显示异常。")])]),(0,n.Lk)("li",L,[W,(0,n.Lk)("label",x,[(0,n.Lk)("a",w,[(0,n.eW)("docsify-toc"),(0,n.bF)(a)]),(0,n.eW)("：给笔记页内部添加目录。不过本插件与 gitalk、waline 冲突，页面宽于 1300px 时出现 toc 目录，评论区位置也跟着挤到页面顶部，需手动修改。参考链接："),(0,n.Lk)("a",_,[(0,n.eW)("Tainacan Wiki"),(0,n.bF)(a)]),(0,n.eW)("，"),(0,n.Lk)("a",D,[(0,n.eW)("Sureness"),(0,n.bF)(a)]),(0,n.eW)("，"),(0,n.Lk)("a",j,[(0,n.eW)("lifeupapp"),(0,n.bF)(a)]),(0,n.eW)("。")])]),(0,n.Lk)("li",C,[F,(0,n.Lk)("label",M,[(0,n.Lk)("a",z,[(0,n.eW)("docsify-pdf-converter"),(0,n.bF)(a)]),(0,n.eW)("：将 docsify 转为 pdf，不带书签目录。")]),E])]),N,T,(0,n.Lk)("p",null,[(0,n.Lk)("a",H,[(0,n.eW)("emoji 插件"),(0,n.bF)(a)]),(0,n.eW)("在标题中使用容易出错，建议使用 "),P,(0,n.eW)("。例如，原本是 "),R,(0,n.eW)("，替换为 "),S,(0,n.eW)("。")]),A,q,(0,n.Lk)("p",null,[(0,n.Lk)("a",X,[(0,n.eW)("docsify 本地命令"),(0,n.bF)(a)]),(0,n.eW)(":")]),Z])}]]),I=JSON.parse('{"path":"/web/docsify.html","title":"docsify","lang":"zh-CN","frontmatter":{"article":false,"title":"docsify","icon":"edit","order":2,"description":"docsify 是一个神奇的文档网站生成器，可以快速帮你将 .md 文档生成为网站。docsify 入门简单且无需服务器，非常适合个人笔记的简单整理分享。 本页集中了我使用 docsify 中遇到的问题，新手先看 docsify 入门文档。 插件 docsify 插件列表： docsify 笔记类参考：看板娘，多级页面，页面点击效果，网站运行时间。 d...","head":[["meta",{"property":"og:url","content":"https://newzone.top/web/docsify.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"docsify"}],["meta",{"property":"og:description","content":"docsify 是一个神奇的文档网站生成器，可以快速帮你将 .md 文档生成为网站。docsify 入门简单且无需服务器，非常适合个人笔记的简单整理分享。 本页集中了我使用 docsify 中遇到的问题，新手先看 docsify 入门文档。 插件 docsify 插件列表： docsify 笔记类参考：看板娘，多级页面，页面点击效果，网站运行时间。 d..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-26T17:51:54.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-26T17:51:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"docsify\\",\\"description\\":\\"docsify 是一个神奇的文档网站生成器，可以快速帮你将 .md 文档生成为网站。docsify 入门简单且无需服务器，非常适合个人笔记的简单整理分享。 本页集中了我使用 docsify 中遇到的问题，新手先看 docsify 入门文档。 插件 docsify 插件列表： docsify 笔记类参考：看板娘，多级页面，页面点击效果，网站运行时间。 d...\\"}"]]},"headers":[{"level":2,"title":"插件","slug":"插件","link":"#插件","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"docsify emoji","slug":"docsify-emoji","link":"#docsify-emoji","children":[]}]},{"level":2,"title":"本地命令","slug":"本地命令","link":"#本地命令","children":[{"level":3,"title":"Serve 启动","slug":"serve-启动","link":"#serve-启动","children":[]},{"level":3,"title":"生成侧边栏","slug":"生成侧边栏","link":"#生成侧边栏","children":[]}]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"引用路径","slug":"引用路径","link":"#引用路径","children":[]},{"level":3,"title":"页面未同步更新","slug":"页面未同步更新","link":"#页面未同步更新","children":[]},{"level":3,"title":"GitHub Pages 报错","slug":"github-pages-报错","link":"#github-pages-报错","children":[]}]}],"git":{"createdTime":1708969914000,"updatedTime":1708969914000,"contributors":[{"name":"HansonXHC","email":"107744279+HansonXHC@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.7,"words":811},"filePathRelative":"web/docsify.md","localizedDate":"2024年2月26日","excerpt":"<p><a href=\\"https://docsify.js.org/#/zh-cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">docsify</a> 是一个神奇的文档网站生成器，可以快速帮你将 .md 文档生成为网站。docsify 入门简单且无需服务器，非常适合个人笔记的简单整理分享。</p>\\n<p>本页集中了我使用 docsify 中遇到的问题，新手先看 <a href=\\"https://docsify.js.org/#/zh-cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">docsify 入门文档</a>。</p>","autoDesc":true}')}}]);