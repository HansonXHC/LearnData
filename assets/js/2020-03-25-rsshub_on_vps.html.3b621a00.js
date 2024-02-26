"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[4552],{3671:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}},993:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>P,data:()=>F});var r=n(7847);const l=(0,r.Lk)("p",null,[(0,r.eW)("RSSHub 使用非常简单，但随着使用者增多，微博、知乎加大了反爬限制。目前大量源都无法直接使用，只能自建 RSSHub 来解决稳定性。部署前，准备好"),(0,r.Lk)("strong",null,"域名和服务器"),(0,r.eW)("。")],-1),o=(0,r.Lk)("p",null,"新手使用 RSSHub 部署教程报错较多，本篇将使用宝塔 PM2 管理器进行部署。",-1),i=(0,r.Lk)("h2",{id:"部署步骤",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#部署步骤"},[(0,r.Lk)("span",null,"部署步骤")])],-1),a=(0,r.Lk)("li",null,[(0,r.Lk)("p",null,[(0,r.eW)("将 RSSHub 代码下载到根目录 root，执行命令 "),(0,r.Lk)("code",null,"git clone https://github.com/DIYgod/RSSHub.git"),(0,r.eW)("。")])],-1),p={href:"https://www.bt.cn/bbs/thread-19376-1-1.html",target:"_blank",rel:"noopener noreferrer"},s=(0,r.Fv)('<li><p>登陆宝塔面板，点击「软件商店」-「运行环境」，安装<strong>PM2 管理器</strong>。</p><figure><img src="https://img.newzone.top/20200325120705.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>点击 PM2 管理器右侧的设置，按图中红字添加项目路径，启动文件名称为 <code>lib</code>。</p><figure><img src="https://img.newzone.top/20200325121639.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>添加后，点击项目中的「映射」，输入指定域名，如 <code>rsshub.xxx.com</code>，服务器的 1200 端口将指向该域名。映射域名需解析到服务器 IP。</p><figure><img src="https://img.newzone.top/20200325121921.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li>',3),u=(0,r.Lk)("p",null,[(0,r.eW)("程序运行时，如果遇到报错，可以直接用命令运行 pm2，如 "),(0,r.Lk)("code",null,"pm2 start /root/RSSHub/lib/index.js --name rsshub"),(0,r.eW)("。")],-1),g=(0,r.Lk)("h2",{id:"使用步骤",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#使用步骤"},[(0,r.Lk)("span",null,"使用步骤")])],-1),b={href:"https://docs.rsshub.app/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://docs.rsshub.app/social-media.html#bilibili",target:"_blank",rel:"noopener noreferrer"},c=(0,r.Lk)("code",null,"https://rsshub.app/bilibili/bangumi/media/9192",-1),S=(0,r.Lk)("code",null,"https://rsshub.app",-1),m=(0,r.Lk)("code",null,"http://rsshub.xxx.com/bilibili/bangumi/media/9192",-1),d=(0,r.Lk)("code",null,"mode=fulltext",-1),k=(0,r.Lk)("code",null,"https://rsshub.xxx.com/guokr/scientific?mode=fulltext",-1),f={href:"https://docs.rsshub.app/parameter.html",target:"_blank",rel:"noopener noreferrer"},L=(0,r.Lk)("h2",{id:"rsshub-vs-huginn",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#rsshub-vs-huginn"},[(0,r.Lk)("span",null,"RSSHub VS. Huginn")])],-1),R=(0,r.Lk)("ul",null,[(0,r.Lk)("li",null,"RSSHub：使用简单，使用现成的抓取规则，适用于国内主流网站；但无法抓取对小众网站，必须 RSSHub 官方定制订阅源。"),(0,r.Lk)("li",null,"Huginn：适用于所有网站，可设定抓取频率、内容结构、js 结果、输出样式等；但部署、配置复杂，入门门槛高，需要针对网站单独定制抓取规则。")],-1),H=(0,r.Lk)("h2",{id:"rss-合集",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#rss-合集"},[(0,r.Lk)("span",null,"RSS 合集")])],-1),_=(0,r.Lk)("p",null,"汇总的 RSS 永久订阅 feeds，均通过 RSSHub 和 Huginn 制作。如果有兴趣自制 RSS，可参考以下教程。",-1),w={href:"https://newzone.top/posts/2017-04-22-rss_feed43_feedex.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://newzone.top/posts/2018-10-07-huginn_scraping_any_website.html",target:"_blank",rel:"noopener noreferrer"},W={href:"https://newzone.top/posts/2019-04-01-rsshub_noob.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://newzone.top/posts/2020-03-25-rsshub_on_vps.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://newzone.top/posts/2021-10-23-nas_with_rsshub_and_huginn.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://newzone.top/posts/2022-03-17-rss_persistent_link_collection.html",target:"_blank",rel:"noopener noreferrer"},v={},P=(0,n(3671).A)(v,[["render",function(e,t){const n=(0,r.g2)("ExternalLinkIcon");return(0,r.uX)(),(0,r.CE)("div",null,[l,o,i,(0,r.Lk)("ol",null,[a,(0,r.Lk)("li",null,[(0,r.Lk)("p",null,[(0,r.eW)("安装宝塔面板，查看"),(0,r.Lk)("a",p,[(0,r.eW)("官方安装教程"),(0,r.bF)(n)]),(0,r.eW)("。")])]),s]),u,g,(0,r.Lk)("ol",null,[(0,r.Lk)("li",null,[(0,r.Lk)("p",null,[(0,r.eW)("打开 "),(0,r.Lk)("a",b,[(0,r.eW)("RSSHub 接口指南"),(0,r.bF)(n)]),(0,r.eW)("，搜索需要订阅的网站。RSSHub 支持国内大部分的主流网站。")])]),(0,r.Lk)("li",null,[(0,r.Lk)("p",null,[(0,r.eW)("根据 "),(0,r.Lk)("a",h,[(0,r.eW)("bilibili 番剧路由"),(0,r.bF)(n)]),(0,r.eW)("的文档，将生成源 "),c,(0,r.eW)(" 其中的域名 "),S,(0,r.eW)(" 替换为你自部署的域名，如 "),m,(0,r.eW)("。")])])]),(0,r.Lk)("p",null,[(0,r.eW)("另外 RSSHub 支持很多实用的参数，比如内容过滤、全文输出等。全文输出参数为 "),d,(0,r.eW)("，应用举例：果壳科学人全文输出 "),k,(0,r.eW)("。其他可以在"),(0,r.Lk)("a",f,[(0,r.eW)("通用参数"),(0,r.bF)(n)]),(0,r.eW)("官方文档了解具体使用方法。")]),L,R,H,_,(0,r.Lk)("ul",null,[(0,r.Lk)("li",null,[(0,r.Lk)("p",null,[(0,r.Lk)("a",w,[(0,r.eW)("RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源"),(0,r.bF)(n)])])]),(0,r.Lk)("li",null,[(0,r.Lk)("p",null,[(0,r.Lk)("a",x,[(0,r.eW)("RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）"),(0,r.bF)(n)])])]),(0,r.Lk)("li",null,[(0,r.Lk)("p",null,[(0,r.Lk)("a",W,[(0,r.eW)("RSS 速成篇：RSSHub 捡现成的轮子"),(0,r.bF)(n)])])]),(0,r.Lk)("li",null,[(0,r.Lk)("p",null,[(0,r.Lk)("a",y,[(0,r.eW)("RSS 速成篇 2：RSSHub 自部署"),(0,r.bF)(n)])])]),(0,r.Lk)("li",null,[(0,r.Lk)("p",null,[(0,r.Lk)("a",z,[(0,r.eW)("RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS"),(0,r.bF)(n)])])]),(0,r.Lk)("li",null,[(0,r.Lk)("p",null,[(0,r.Lk)("a",M,[(0,r.eW)("RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效"),(0,r.bF)(n)])])])])])}]]),F=JSON.parse('{"path":"/posts/2020-03-25-rsshub_on_vps.html","title":"RSS 速成篇 2：RSSHub 自部署","lang":"zh-CN","frontmatter":{"title":"RSS 速成篇 2：RSSHub 自部署","date":"2020-03-25T00:00:00.000Z","category":["自动化"],"tag":["rss","RSSHub"],"order":-28,"description":"RSSHub 使用非常简单，但随着使用者增多，微博、知乎加大了反爬限制。目前大量源都无法直接使用，只能自建 RSSHub 来解决稳定性。部署前，准备好域名和服务器。 新手使用 RSSHub 部署教程报错较多，本篇将使用宝塔 PM2 管理器进行部署。 部署步骤 将 RSSHub 代码下载到根目录 root，执行命令 git clone https://g...","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2020-03-25-rsshub_on_vps.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"RSS 速成篇 2：RSSHub 自部署"}],["meta",{"property":"og:description","content":"RSSHub 使用非常简单，但随着使用者增多，微博、知乎加大了反爬限制。目前大量源都无法直接使用，只能自建 RSSHub 来解决稳定性。部署前，准备好域名和服务器。 新手使用 RSSHub 部署教程报错较多，本篇将使用宝塔 PM2 管理器进行部署。 部署步骤 将 RSSHub 代码下载到根目录 root，执行命令 git clone https://g..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.newzone.top/20200325120705.png?imageMogr2/format/webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-26T17:51:54.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"RSS 速成篇 2：RSSHub 自部署"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:tag","content":"rss"}],["meta",{"property":"article:tag","content":"RSSHub"}],["meta",{"property":"article:published_time","content":"2020-03-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-26T17:51:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RSS 速成篇 2：RSSHub 自部署\\",\\"image\\":[\\"https://img.newzone.top/20200325120705.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/20200325121639.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/20200325121921.png?imageMogr2/format/webp\\"],\\"datePublished\\":\\"2020-03-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-26T17:51:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"部署步骤","slug":"部署步骤","link":"#部署步骤","children":[]},{"level":2,"title":"使用步骤","slug":"使用步骤","link":"#使用步骤","children":[]},{"level":2,"title":"RSSHub VS. Huginn","slug":"rsshub-vs-huginn","link":"#rsshub-vs-huginn","children":[]},{"level":2,"title":"RSS 合集","slug":"rss-合集","link":"#rss-合集","children":[]}],"git":{"createdTime":1708969914000,"updatedTime":1708969914000,"contributors":[{"name":"HansonXHC","email":"107744279+HansonXHC@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.3,"words":689},"filePathRelative":"_posts/2020-03-25-rsshub_on_vps.md","localizedDate":"2020年3月25日","excerpt":"<p>RSSHub 使用非常简单，但随着使用者增多，微博、知乎加大了反爬限制。目前大量源都无法直接使用，只能自建 RSSHub 来解决稳定性。部署前，准备好<strong>域名和服务器</strong>。</p>\\n<p>新手使用 RSSHub 部署教程报错较多，本篇将使用宝塔 PM2 管理器进行部署。</p>\\n<h2>部署步骤</h2>\\n<ol>\\n<li>\\n<p>将 RSSHub 代码下载到根目录 root，执行命令 <code>git clone https://github.com/DIYgod/RSSHub.git</code>。</p>\\n</li>\\n<li>\\n<p>安装宝塔面板，查看<a href=\\"https://www.bt.cn/bbs/thread-19376-1-1.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方安装教程</a>。</p>\\n</li>\\n<li>\\n<p>登陆宝塔面板，点击「软件商店」-「运行环境」，安装<strong>PM2 管理器</strong>。</p>\\n<figure><img src=\\"https://img.newzone.top/20200325120705.png?imageMogr2/format/webp\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p>点击 PM2 管理器右侧的设置，按图中红字添加项目路径，启动文件名称为 <code>lib</code>。</p>\\n<figure><img src=\\"https://img.newzone.top/20200325121639.png?imageMogr2/format/webp\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p>添加后，点击项目中的「映射」，输入指定域名，如 <code>rsshub.xxx.com</code>，服务器的 1200 端口将指向该域名。映射域名需解析到服务器 IP。</p>\\n<figure><img src=\\"https://img.newzone.top/20200325121921.png?imageMogr2/format/webp\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n</ol>","autoDesc":true}')}}]);