# ChatGPT Exporter 中文站

面向中文用户的插件官网，品牌统一为 **ChatGPT Exporter 中文站**。“中文站”指网站语言与服务，不限制导出对话的语言。

## 开发

建议 Node.js 24 LTS 和 npm 9.6.5 或更高版本。

```sh
npm install
npm run dev
```

本地地址以终端输出为准，默认 http://127.0.0.1:4321。

```sh
npm run check
npm run build
npm test
npm run preview
```

Astro 静态输出目录为 `dist/`，可以部署至支持静态 HTML 的托管平台。无需服务端数据库或运行时密钥。

## 内容与配置

- `src/data/site.ts`：品牌、正式域名、商店入口、联系方式、功能和 FAQ。
- `src/content/guides/*.md`：六篇教程，字段由 `src/content.config.ts` 校验。
- `src/pages/index.astro`：首页。
- `src/pages/features/[slug].astro`：功能页模板。
- `src/layouts/Base.astro`：导航、页脚、SEO 元信息、点击事件接口。
- `src/styles/`：响应式视觉样式，无远程字体或图标依赖。
- `public/samples/`：输入测试素材；不是插件实际生成的文件。
- `scripts/verify.mjs`：构建产物完整性、内部链接、锚点、JSON-LD 与 sitemap 校验。
- `scripts/social.ps1`：Windows 下重新生成本地社交分享图片。

## 已实现

首页、4 个功能页、安装页、示例页、教程索引及 6 篇教程、FAQ、关于、隐私、条款、网站更新记录和 404。

独立 title/description/canonical、OG/Twitter 分享信息、JSON-LD、sitemap、robots、移动导航、键盘可操作的格式切换、FAQ 原生折叠。首屏演示为明确标注的排版示意，不冒充插件实际截图。

当前 `site` 与 canonical 指向正式域名 `https://chatgptexporter.cn`。预览环境应通过托管访问控制或 `X-Robots-Tag: noindex` 避免被公开索引；正式上线前移除环境级 noindex。404 需由托管平台正确返回 404 状态，不要将全部缺失路径重写为首页。

## 分析事件接口

默认不加载第三方分析 SDK、不设置追踪 Cookie、不保存或发送个人标识。安装跳转发送页面内自定义事件：

```js
window.addEventListener('exporter:analytics', ({ detail }) => {
  // detail: { event: 'store_click', page_path, button_location }
  // 在这里接入选定且已完成隐私披露的分析服务。
});
```

`store_click` 仅表示前往商店，不表示安装成功。安装、卸载应使用商店后台的可用指标；不要从站内点击推算已完成安装。

## 正式上线交接

1. 将正式域名 DNS 指向实际托管服务并启用 HTTPS；本项目不会修改 DNS。
2. 用插件生成真实 Word/PDF/XLSX 文件和操作录像，补充案例页；保留版本、日期与测试环境。
3. 核实在线转换服务的数据留存、删除方式、服务提供方，以及插件商店隐私披露的一致性。当前代码检查发现在线转换，不应宣传“纯本地处理”。
4. 核实价格、额度、会员权益、公式可编辑性、Word/WPS 兼容性；当前页面未作未经验证的承诺。
5. 更新商店的官网、支持和隐私链接；仅对实际迁移的旧页面做逐页 301，勿重定向其他产品。
6. 验证站长平台后提交 sitemap；根据真实搜索和转化数据更新内容。

当前没有价格表、评分结构化数据、第三方评价或虚构用户数据。上线配置与真实素材不应以占位值代替。
