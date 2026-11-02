# SEO / GEO 检查与优化记录

检查日期：2026-11-02（中国时间）。范围：当前仓库源码、生产构建产物及可访问性请求。不包含站长平台后台和未授权账户数据。

## 结论

站内已有静态 HTML 正文、独立标题及 description、正式域名 canonical、robots.txt、XML sitemap、内部导航和移动适配。这些是有效基础，不代表已经收录、获得排名或被 AI 引用。

本次完善了产品事实表达、跨页面实体关联、面包屑、文章发布时间及分享元信息，并为 Vercel Preview 构建显式设置 noindex。没有添加虚构价格、评分、用户量、兼容性测试或导出结果。

## 本次已完成

| 项目     | 调整                                                                              |
| -------- | --------------------------------------------------------------------------------- |
| 网站身份 | WebSite、WebPage、发布方使用稳定的 @id 相互关联                                   |
| 插件身份 | SoftwareApplication 关联对应的 Chrome / Edge / Firefox 商店页面，列出实际功能     |
| 面包屑   | 非首页内容页提供与可见面包屑一致的 BreadcrumbList，移除功能页的重复定义           |
| 教程信息 | 增加初次发布日、关联作者/发布方、文章 OG 类型及日期；日期在正文可见               |
| sitemap  | 教程 lastmod 使用内容中维护的更新时间，不随每次构建自动刷新                       |
| 内容说明 | 首页增加“是什么、导出什么、支持哪些浏览器”的直接答案；关于页增加产品信息表        |
| 预览索引 | VERCEL_ENV=preview 时页面输出 noindex，生产构建仍允许索引；不妨碍爬虫读取 noindex |
| 自动验证 | 检查面包屑数量与关联、文章日期、唯一 description、跨页面锚点及原有链接完整性      |

## 线上检查限制

本地验证通过：27 个文件的类型检查无错误或警告；生产构建生成 20 个 HTML 页面；654 处站内链接/资源引用、38 个 JSON-LD 块和 19 个 sitemap URL 通过检查。另行验证了 20 个预览页面均为 noindex、正式首页允许索引，以及 6 篇教程的 lastmod。

网页抓取工具未能访问正式域名及 www 版本。本机对首页、robots、sitemap 和不存在页面的请求也被连接重置。当前本机 DNS 返回的 198.18.x.x 地址可能受本机网络/代理环境影响，不能据此认定域名公网 DNS 有误。

因此，以下事项仍须在实际线上和站长平台确认：

1. 正式首页和全部内容页返回 200；不存在页面真实返回 404，而不是 200 首页或软 404。
2. HTTP、www 与非 www 域名最终统一到 https://chatgptexporter.cn，重定向和 canonical 不冲突。
3. robots.txt、sitemap.xml 可公开访问；页面无意外的 noindex、登录墙或爬虫挑战。
4. Vercel 防火墙/机器人配置不会误拦截目标搜索抓取，预览部署保持不索引。
5. 从中国大陆实际检查字体、图片、页面速度；Core Web Vitals 需要线上实测或真实用户数据。
6. 真实收录、关键词、来源流量、安装转化和 AI 引用情况需要后台数据，不能由源码推断。

## 后续优先级

### P0：正式入口与收录验证

在 Vercel 完成正式域名配置，确认上述状态码与重定向。验证 Google Search Console、Bing Webmaster Tools，并评估百度搜索资源平台，提交 sitemap。提交后查看 URL 检查与抓取报告，不以 site: 搜索结果数量作为精确收录统计。

### P1：原创证据与品牌一致性

补充插件实际操作截图、短视频，以及 DOCX/PDF/XLSX 的真实导出文件。记录插件版本、文档软件与复现内容。现在的示意图和输入测试素材继续明确标注，不能作为实际兼容性证明。

更新浏览器商店中的官网、支持、隐私链接，保持品牌和开发者信息一致。核实转换服务的数据处理规则与商店披露，避免官网、商店与真实行为互相矛盾。

### P1：形成增长数据闭环

站内目前仅有安装点击事件接口，尚无接收或分析服务。接入选定分析平台前同步隐私说明；将 store_click 与商店实际安装数据分开。观察“非品牌搜索访问 → 安装入口点击 → 商店安装”的各环节。

### P2：按真实需求补充内容

功能页解释产品能力，教程页解释如何完成任务，避免大量生产相似关键词页。优先补充真实问题的实测答案，再根据搜索查询扩展独立教程。涉及对比时标明条件、版本与证据。

## GEO 实施边界

本次目标是让真实信息更容易被检索、理解和引用，不承诺任何模型的推荐或引用。Google AI 搜索沿用常规 SEO 要求，没有特殊 AI 文件或 Schema 的强制要求。llms.txt 不作为首期效果承诺。保持常见问题正文可读，不依赖 FAQ 富结果获取曝光。

软件结构化数据目前用于描述产品实体，不代表已满足 Google 软件应用富结果的全部要求。价格和评价尚未核实，因此未填充 offers 或评分；后续只能根据真实、可见且符合规范的信息补充。文章图片同样优先使用与教程相关的真实截图，不用品牌 Logo 代替教程配图。

## 参考依据

- [Google：AI 功能与网站](https://developers.google.com/search/docs/appearance/ai-features)
- [Google：Article 结构化数据](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Google：构建与提交 sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google：规范网址](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

结构化数据的语法与站内一致性通过本地检查，不等于通过线上富结果测试，也不保证展示。
