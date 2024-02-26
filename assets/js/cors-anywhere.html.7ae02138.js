"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[9011],{3671:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},4412:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>c,data:()=>i});var e=a(7847);const t={href:"https://github.com/Rob--W/cors-anywhere",target:"_blank",rel:"noopener noreferrer"},p={href:"https://hub.docker.com/r/rockben/cors-anywhere",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Fv)('<p>以下是使用 Docker 部署 CORS Anywhere 的示例配置：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">cors-anywhere</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> rockben/cors<span class="token punctuation">-</span>anywhere\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> cors<span class="token punctuation">-</span>anywhere\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;49152:8080&quot;</span>\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2><p>在 JavaScript 中利用 CORS Anywhere 的过程非常直接。以下是一个简单的调用示例：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> corsAnywhereUrl <span class="token operator">=</span> <span class="token string">&quot;http://192.168.2.3:49152/&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> targetUrl <span class="token operator">=</span> <span class="token string">&quot;http://example.com/&quot;</span><span class="token punctuation">;</span>\n$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">// 使用 CORS Anywhere URL 前缀和目标 URL</span>\n  <span class="token literal-property property">url</span><span class="token operator">:</span> corsAnywhereUrl <span class="token operator">+</span> targetUrl<span class="token punctuation">,</span>\n  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 展示从资源获取的数据</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#rawid&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构建自定义-docker-镜像" tabindex="-1"><a class="header-anchor" href="#构建自定义-docker-镜像"><span>构建自定义 Docker 镜像</span></a></h2><p>你还可以通过提供的 Dockerfile 根据自己的需求构建一个专属的 CORS Anywhere 镜像。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token comment"># 使用 Alpine 为基础镜像，该镜像体积较小</span>\n<span class="token instruction"><span class="token keyword">FROM</span> node:lts-alpine <span class="token keyword">as</span> builder</span>\n\n<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>\n\n<span class="token comment"># 克隆 CORS Anywhere 的代码，并清理 git 以及其它不必要的文件</span>\n<span class="token instruction"><span class="token keyword">RUN</span> apk add --no-cache git &amp;&amp; <span class="token operator">\\</span>\n    git clone https://github.com/Rob--W/cors-anywhere.git . &amp;&amp; <span class="token operator">\\</span>\n    npm install &amp;&amp; <span class="token operator">\\</span>\n    apk del git &amp;&amp; <span class="token operator">\\</span>\n    npm cache clean --force &amp;&amp; <span class="token operator">\\</span>\n    rm -rf /var/cache/apk/* /tmp/* /var/tmp/*</span>\n\n<span class="token comment"># 使用多阶段构建</span>\n<span class="token instruction"><span class="token keyword">FROM</span> node:lts-alpine</span>\n\n<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>\n\n<span class="token comment"># 从上一个阶段拷贝构建好的 node_modules 目录和必要的文件</span>\n<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/node_modules ./node_modules/</span>\n<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/lib/ ./lib/</span>\n<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/server.js ./server.js</span>\n\n<span class="token comment"># 设置服务运行的端口</span>\n<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>\n\n<span class="token comment"># 启动服务</span>\n<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;node&quot;</span>, <span class="token string">&quot;server.js&quot;</span>]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Dockerfile 所在的目录下，执行以下命令即可构建并运行 cors-anywhere：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 构建 Docker 镜像</span>\n<span class="token function">sudo</span> <span class="token function">docker</span> build <span class="token parameter variable">-t</span> cors-anywhere <span class="token builtin class-name">.</span>\n\n<span class="token comment"># 运行 Docker 容器</span>\n<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> cors-anywhere <span class="token parameter variable">-p</span> <span class="token number">49152</span>:8080 cors-anywhere\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上述步骤，你可以快速部署并开始使用 CORS Anywhere，轻松解锁跨域访问的限制，使前端开发更加灵活和便捷。如果你在部署或使用过程中遇到任何问题，欢迎在评论区留言交流，我们可以一起探讨解决方案。</p>',11),r={},c=(0,a(3671).A)(r,[["render",function(n,s){const a=(0,e.g2)("ExternalLinkIcon");return(0,e.uX)(),(0,e.CE)("div",null,[(0,e.Lk)("p",null,[(0,e.Lk)("a",t,[(0,e.eW)("CORS Anywhere"),(0,e.bF)(a)]),(0,e.eW)(" 是一个基于 NodeJS 的代理服务，它通过向跨源请求中注入 CORS（跨源资源共享）头部，实现了跨域访问的功能。这个服务的存在是基于浏览器的同源策略：通常，浏览器会阻止前端 JavaScript 代码从一个域访问另一个域的内容，除非被访问的域设置了合适的 CORS 头部。借助 CORS Anywhere，这些浏览器的安全限制就可以被轻松绕过。")]),(0,e.Lk)("p",null,[(0,e.eW)("若你想要自行部署 CORS Anywhere，可以自建镜像，或者使用我提供的预先配置好的 Docker 镜像 "),(0,e.Lk)("a",p,[(0,e.eW)("rockben/cors-anywhere"),(0,e.bF)(a)]),(0,e.eW)("。")]),o])}]]),i=JSON.parse('{"path":"/services/dockers-on-nas/cors-anywhere.html","title":"CORS Anywhere：解锁跨域限制","lang":"zh-CN","frontmatter":{"article":false,"title":"CORS Anywhere：解锁跨域限制","order":201,"description":"CORS Anywhere 是一个基于 NodeJS 的代理服务，它通过向跨源请求中注入 CORS（跨源资源共享）头部，实现了跨域访问的功能。这个服务的存在是基于浏览器的同源策略：通常，浏览器会阻止前端 JavaScript 代码从一个域访问另一个域的内容，除非被访问的域设置了合适的 CORS 头部。借助 CORS Anywhere，这些浏览器的安全限...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/cors-anywhere.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"CORS Anywhere：解锁跨域限制"}],["meta",{"property":"og:description","content":"CORS Anywhere 是一个基于 NodeJS 的代理服务，它通过向跨源请求中注入 CORS（跨源资源共享）头部，实现了跨域访问的功能。这个服务的存在是基于浏览器的同源策略：通常，浏览器会阻止前端 JavaScript 代码从一个域访问另一个域的内容，除非被访问的域设置了合适的 CORS 头部。借助 CORS Anywhere，这些浏览器的安全限..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-26T17:51:54.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-26T17:51:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"CORS Anywhere：解锁跨域限制\\",\\"description\\":\\"CORS Anywhere 是一个基于 NodeJS 的代理服务，它通过向跨源请求中注入 CORS（跨源资源共享）头部，实现了跨域访问的功能。这个服务的存在是基于浏览器的同源策略：通常，浏览器会阻止前端 JavaScript 代码从一个域访问另一个域的内容，除非被访问的域设置了合适的 CORS 头部。借助 CORS Anywhere，这些浏览器的安全限...\\"}"]]},"headers":[{"level":2,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[]},{"level":2,"title":"构建自定义 Docker 镜像","slug":"构建自定义-docker-镜像","link":"#构建自定义-docker-镜像","children":[]}],"git":{"createdTime":1708969914000,"updatedTime":1708969914000,"contributors":[{"name":"HansonXHC","email":"107744279+HansonXHC@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2,"words":599},"filePathRelative":"services/dockers-on-nas/cors-anywhere.md","localizedDate":"2024年2月26日","excerpt":"<p><a href=\\"https://github.com/Rob--W/cors-anywhere\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">CORS Anywhere</a> 是一个基于 NodeJS 的代理服务，它通过向跨源请求中注入 CORS（跨源资源共享）头部，实现了跨域访问的功能。这个服务的存在是基于浏览器的同源策略：通常，浏览器会阻止前端 JavaScript 代码从一个域访问另一个域的内容，除非被访问的域设置了合适的 CORS 头部。借助 CORS Anywhere，这些浏览器的安全限制就可以被轻松绕过。</p>\\n<p>若你想要自行部署 CORS Anywhere，可以自建镜像，或者使用我提供的预先配置好的 Docker 镜像 <a href=\\"https://hub.docker.com/r/rockben/cors-anywhere\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">rockben/cors-anywhere</a>。</p>","autoDesc":true}')}}]);