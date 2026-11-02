# ChatGPT Exporter 中文站｜ChatGPT 对话导出 Word、PDF、Excel

**面向中文用户，服务工作与学习。**

ChatGPT Exporter 是一款 ChatGPT 对话导出插件，可将回答整理为 **Word（DOCX）、PDF 和 Excel（XLSX）**，支持数学公式、表格与代码内容转换，也支持选择当前对话中的多条消息合并导出。适用于桌面端 **Chrome、Edge、360 浏览器和 Firefox（火狐）**。

[访问中文官网](https://chatgptexporter.cn/) · [安装与使用教程](https://chatgptexporter.cn/install/) · [常见问题](https://chatgptexporter.cn/faq/) · [反馈问题](https://github.com/Lonely7th/ChatGPT-Exporter/issues/new/choose)

本仓库维护 **chatgptexporter.cn 官网源码和说明文档**。如果你想使用导出功能，请从下方安装对应浏览器的插件。

## 安装 ChatGPT Exporter

请在电脑上使用对应浏览器打开安装入口：

| 浏览器                                                                                                | 安装入口                                                                                                                                      | 说明                    |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| <img src="src/assets/browsers/chrome.png" width="22" height="22" alt="Chrome 图标"> Chrome            | [Chrome 应用商店](https://chromewebstore.google.com/detail/chatgpt-exporter-%E2%80%93-chatgp/hpcgnbhdkbajengeapopcckejikkmhcb)                | 按商店提示安装扩展      |
| <img src="src/assets/browsers/edge.png" width="22" height="22" alt="Edge 图标"> Edge                  | [Microsoft Edge 加载项](https://microsoftedge.microsoft.com/addons/detail/chatgpt-exporter-%E2%80%93-chatgp/dmljnfinhbjeaooocieckmjbajlcgblg) | 使用 Edge 打开并安装    |
| <img src="src/assets/browsers/360.png" width="22" height="22" alt="360 浏览器图标"> 360 浏览器        | [360 浏览器安装页面](https://chatgpt.aiwhaler.com/index/)                                                                                     | 按安装页面说明操作      |
| <img src="src/assets/browsers/firefox.png" width="22" height="22" alt="Firefox 图标"> Firefox（火狐） | [Firefox 附加组件](https://addons.mozilla.org/zh-CN/firefox/addon/chatgpt-exporter-ai2word/)                                                  | 使用 Firefox 打开并安装 |

同名产品可能来自不同开发者，请使用上方对应入口。Chrome 版本的扩展 ID 为 `hpcgnbhdkbajengeapopcckejikkmhcb`；其他浏览器版本的 ID 可能不同。

## 第一次使用：安装、打开对话、选择导出格式

1. **安装并启用插件。** 根据浏览器提示确认权限，为插件启用 `chatgpt.com` 的站点访问权限。
2. **打开 ChatGPT 对话。** 进入 [chatgpt.com](https://chatgpt.com/)，等待回答生成完成。安装前已打开的页面请刷新一次。
3. **选择格式并导出。** 找到回答附近的导出入口，选择 Word、PDF 或 Excel，按提示完成必要的登录，下载后核对文件内容。

需要整理多条消息时，点击“批量导出”，选择**当前对话中**需要保留的消息，再合并导出为 **Word 或 Markdown**。具体入口以已安装版本为准。

[查看完整安装指南](https://chatgptexporter.cn/install/) · [获取公开测试素材](https://chatgptexporter.cn/examples/)

## 选择适合你的导出格式

| 你的任务                           | 推荐格式        | 使用要点                                     |
| ---------------------------------- | --------------- | -------------------------------------------- |
| 整理报告、学习笔记、教案或技术文档 | Word（.docx）   | 继续编辑正文，检查标题、公式、表格和代码排版 |
| 保存阅读材料、打印或分享           | PDF（.pdf）     | 检查分页、宽公式和长表格                     |
| 整理数据清单、对比表与任务表       | Excel（.xlsx）  | 核对日期、金额、前导零和长数字的数据类型     |
| 合并当前对话中的多条消息           | Word / Markdown | 先确认已加载并选中了需要的消息               |

数学内容针对 LaTeX、行内公式和块级公式进行转换适配。复杂公式的显示及可编辑性、Word/WPS 的兼容效果，请在目标软件中实测。导出表格不代表会自动生成 Excel 公式、宏或分析模型。

## 按问题查找教程

- [如何将 ChatGPT 对话导出为 Word](https://chatgptexporter.cn/guides/chatgpt-to-word/)
- [ChatGPT 数学公式复制到 Word 乱码怎么办？](https://chatgptexporter.cn/guides/math-equations-to-word/)
- [ChatGPT 导出 PDF：插件导出与浏览器打印怎么选？](https://chatgptexporter.cn/guides/chatgpt-to-pdf/)
- [如何将 ChatGPT 表格导出到 Excel](https://chatgptexporter.cn/guides/chatgpt-to-excel/)
- [如何批量导出当前对话中的多条消息](https://chatgptexporter.cn/guides/batch-export/)
- [导出失败或格式异常的排查方法](https://chatgptexporter.cn/guides/export-troubleshooting/)

官网暂时无法访问时，可直接阅读仓库内的[教程 Markdown 文件](src/content/guides/)。这些文件中的站内路径需在官网打开。

## 常见问题

### 中文站是否只能导出中文对话？

不是。“中文站”表示网站内容与服务面向中文用户，不限制对话语言。你可以整理中文、英文或中英混排的工作与学习内容。

### 可以一键导出全部历史会话吗？

本项目介绍的批量导出范围是**当前对话内已加载并选中的多条消息**，不等同于备份账号中的全部历史会话。

### 是否需要联网、登录或付费？

转换需要连接在线服务；部分操作需要登录，并受可用额度或会员权益影响。价格、额度与权益以插件当前界面为准。

### 内容是否只在本地处理？

不是纯本地处理。所选内容可能被发送至在线转换服务生成文件。处理敏感材料前，请阅读[隐私与数据处理说明](https://chatgptexporter.cn/privacy/)，并确认你有权提交这些内容。

### 安装后看不到导出按钮怎么办？

确认位于 `chatgpt.com` 对话页面，插件已启用并获得站点访问权限，再刷新页面。如仍异常，请按[排查指南](https://chatgptexporter.cn/guides/export-troubleshooting/)检查，并提供版本和复现步骤。

## 反馈问题与提出建议

- 使用异常：[提交问题反馈](https://github.com/Lonely7th/ChatGPT-Exporter/issues/new?template=bug-report.yml)。请注明问题发生在官网还是插件、浏览器与插件版本、导出格式及复现步骤。
- 产品建议：[提交功能建议](https://github.com/Lonely7th/ChatGPT-Exporter/issues/new?template=feature-request.yml)。说明你希望完成的任务及现有操作中的困难。
- 需要私下沟通：[872751451@qq.com](mailto:872751451@qq.com)。

GitHub Issues 是公开的。请使用脱敏后的最小样例，不要上传账号口令、登录令牌或未脱敏的敏感对话。

## 官网开发与部署

官网使用 **Astro + TypeScript**，静态构建输出至 `dist/`。建议 Node.js 24 和 npm 9.6.5 或更高版本。

```sh
git clone https://github.com/Lonely7th/ChatGPT-Exporter.git
cd ChatGPT-Exporter
npm ci
npm run dev
```

本地地址以终端输出为准。修改后运行 `npm run check`、`npm run build` 和 `npm test`。

[完整开发与部署说明](docs/development.md) · [SEO / GEO 检查记录](docs/seo-geo-audit-2026-11-02.md) · [网站更新记录](https://chatgptexporter.cn/changelog/)

## English overview

**ChatGPT Exporter 中文站** provides Chinese-language guides for exporting ChatGPT conversations to Word (DOCX), PDF and Excel (XLSX). The extension supports desktop Chrome, Edge, 360 Browser and Firefox. Batch selection combines selected messages in the current conversation into Word or Markdown. Conversion uses online services; sign-in and usage limits may apply.

This repository contains the website source and documentation. Use the browser installation links above to install the extension. Chinese-language support does not restrict the language of your conversations.

ChatGPT 及相关商标归其各自权利人所有。本产品与 OpenAI 无隶属或背书关系；本站名称不表示获得其他同名产品的地区授权。
