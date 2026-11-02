export const SITE = {
  name: 'ChatGPT Exporter 中文站',
  origin: 'https://chatgptexporter.cn',
  store:
    'https://chromewebstore.google.com/detail/chatgpt-exporter-%E2%80%93-chatgp/hpcgnbhdkbajengeapopcckejikkmhcb',
  email: '872751451@qq.com',
  updated: '2026-11-02',
};
export const features = [
  {
    slug: 'chatgpt-to-word',
    format: 'Word',
    ext: '.docx',
    color: 'blue',
    icon: 'document',
    title: 'ChatGPT 导出 Word',
    short: '从灵感，到可编辑的文档。',
    description:
      '将 ChatGPT 回答整理成 Word 文档，保留标题、列表、表格和代码块，让后续编辑更轻松。',
    points: [
      '适合报告、教案、学习笔记与技术文档',
      '支持行内公式、块级公式和 LaTeX 内容转换',
      '打开文件后可继续调整样式与页面布局',
    ],
    boundary:
      '公式的显示、可编辑性及复杂布局效果受转换结果和文档软件影响。建议先用一段代表性内容试导出，并在目标软件中核对。',
    guide: 'chatgpt-to-word',
  },
  {
    slug: 'chatgpt-to-pdf',
    format: 'PDF',
    ext: '.pdf',
    color: 'red',
    icon: 'document',
    title: 'ChatGPT 导出 PDF',
    short: '整理好，再分享。',
    description:
      '将对话导出为便于阅读、打印和分享的 PDF 文件，减少复制粘贴后的手动整理。',
    points: [
      '适合归档、打印和分享阅读材料',
      '保留文档结构，便于跨设备查看',
      '包含公式、表格时可先检查分页与显示效果',
    ],
    boundary:
      'PDF 更适合固定版式阅读。长表格、超宽代码和复杂公式需要核对分页；如需继续编辑正文，建议选择 Word。',
    guide: 'chatgpt-to-pdf',
  },
  {
    slug: 'chatgpt-to-excel',
    format: 'Excel',
    ext: '.xlsx',
    color: 'green',
    icon: 'table',
    title: 'ChatGPT 表格导出 Excel',
    short: '让表格，进入工作流。',
    description:
      '把 ChatGPT 回答中的结构化表格整理到 Excel 文件中，继续筛选、计算和分析。',
    points: [
      '适合方案对比、数据清单与任务表',
      '先让 ChatGPT 输出列结构清晰的表格',
      '在电子表格软件中继续整理与分析',
    ],
    boundary:
      '导出表格不等于自动生成 Excel 公式、宏或数据模型。金额、日期、百分比、前导零和长数字请在导出后核对。',
    guide: 'chatgpt-to-excel',
  },
  {
    slug: 'batch-export',
    format: '批量导出',
    ext: '多条消息',
    color: 'purple',
    icon: 'layers',
    title: 'ChatGPT 对话批量导出',
    short: '把一次讨论，收进一份文档。',
    description:
      '在当前对话中选择需要保留的多条消息，合并导出为 Word 或 Markdown，减少重复操作。',
    points: [
      '选择当前对话中的多条消息',
      '支持合并导出为 Word 或 Markdown',
      '适合整理连续推导、问答与专题笔记',
    ],
    boundary:
      '批量导出针对当前对话内已加载、可选择的消息，不代表一键备份账号内全部历史会话。其他格式以插件实际界面为准。',
    guide: 'batch-export',
  },
];
export const faqs = [
  {
    q: '“中文站”是否意味着只能导出中文对话？',
    a: '不是。“中文站”指网站内容与服务面向中文用户，不限制对话语言。你可以导出工作与学习中的中文、英文及中英混排内容，具体排版效果建议通过实际文件核对。',
  },
  {
    q: 'ChatGPT Exporter 可以导出哪些格式？',
    a: '插件提供 Word（.docx）、PDF（.pdf）和 Excel（.xlsx）导出。当前对话的批量选择模式支持 Word 和 Markdown；可用入口以已安装版本为准。',
  },
  {
    q: '数学公式可以保留吗？',
    a: '插件针对 LaTeX、行内公式与块级公式进行了转换适配。复杂公式的显示和可编辑性请在导出文件及目标软件中实测，尤其是多行对齐、矩阵和特殊符号。',
  },
  {
    q: '批量导出可以备份账号内全部历史对话吗？',
    a: '本网站介绍的批量导出，是在当前对话内勾选多条消息后合并导出。它不等同于账号级全部历史数据备份。',
  },
  {
    q: '是否需要登录或付费？',
    a: '部分转换流程会检查登录状态，插件提供微信扫码登录入口。可用额度、会员权益与价格以插件中的实际提示为准；本站不承诺所有功能永久免费。',
  },
  {
    q: '导出需要联网吗？内容是否只在本地处理？',
    a: '导出转换需要连接在线服务，所选内容可能被发送至转换服务生成文件，因此不能视为纯本地处理工具。处理敏感内容前，请先阅读隐私说明和插件当前的隐私政策。',
  },
  {
    q: '支持手机、其他浏览器或其他 AI 平台吗？',
    a: '本网站的安装入口对应桌面 Chrome 应用商店版本，主要用于 chatgpt.com。其他浏览器、移动端及其他 AI 平台不在本站当前安装教程的验证范围内。',
  },
  {
    q: '安装后看不到导出按钮怎么办？',
    a: '先确认位于 chatgpt.com 的对话页面，且插件已启用并获得该站点的访问权限，再刷新页面。若仍无法显示，请记录浏览器和插件版本，通过关于页面的联系方式反馈。',
  },
];
