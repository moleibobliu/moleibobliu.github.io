/* =========================================================
   Edit this file to update most content on the website.
   For group members, add objects to PEOPLE below.
   ========================================================= */

const I18N = {
  en: {
    nav: {
      about: "About", research: "Research", publications: "Publications",
      people: "Group", experience: "Experience", service: "Service", contact: "Contact"
    },
    hero: {
      eyebrow: "Statistical Machine Learning · Biomedical Data Science",
      title: "Researcher & Assistant Professor (Tenure Track), Peking University",
      lead: "I develop robust and transferable statistical learning methods for heterogeneous biomedical data, with emphasis on transfer learning, semi-supervised learning, model-X inference, and electronic health records.",
      publications: "Selected publications",
      cv: "CV (Chinese)",
      affiliationTitle: "Current affiliation",
      affiliation1: "Peking University Health Science Center",
      affiliation2: "Beijing International Center for Mathematical Research",
      trainingTitle: "Training",
      training: "Ph.D. in Biostatistics, Harvard University"
    },
    strengths: {
      oneKicker: "Methodology", oneTitle: "Robust & transferable learning",
      oneText: "Methods designed for distribution shift, heterogeneous sources, weak supervision, and imperfect models.",
      twoKicker: "Impact", twoTitle: "Statistics + machine learning",
      twoText: "Work spanning Biometrika, JRSSB, JASA, JMLR, NeurIPS, ICML, and Science.",
      threeKicker: "Application", threeTitle: "Biomedical data science",
      threeText: "Electronic health records, biobanks, genetics, clinical prediction, and data integration."
    },
    about: {
      title: "About",
      subtitle: "Statistical foundations for reliable learning across populations and data sources.",
      p1: "My research lies at the intersection of statistics, machine learning, and biomedical data science. A central goal is to make statistical learning reliable when data are distributed across institutions, populations differ, labels are limited, or working models are misspecified.",
      p2: "Methodologically, I work on transfer and federated learning, semi-supervised learning, robust model-X inference, distributionally robust optimization, and integrative analysis of high-dimensional data. I am particularly interested in translating these ideas into tools for electronic health records, biobanks, genetics, and clinical research."
    },
    research: {
      title: "Research",
      subtitle: "A compact view of my main methodological themes."
    },
    publications: {
      title: "Selected Publications",
      subtitle: "Selected methodological and collaborative work.",
      showAll: "Show all listed work",
      showSelected: "Show selected only",
      filters: { all: "All", statistics: "Statistics", ml: "Machine Learning", biomedical: "Biomedical" },
      empty: "No publications in this category."
    },
    people: {
      title: "Research Group",
      subtitle: "Postdoctoral fellows, Ph.D. students, and master’s students.",
      note: "Member information is stored in one data file. Add a photo and update a few fields to publish a new profile card.",
      groups: { postdoc: "Postdoctoral Fellows", phd: "Ph.D. Students", master: "Master’s Students" },
      empty: "Members will be added here.",
      homepage: "Homepage"
    },
    experience: {
      title: "Experience & Education",
      subtitle: "Academic appointments, training, awards, and research support.",
      appointments: "Academic appointments",
      education: "Education",
      awards: "Selected honors",
      funding: "Selected research support"
    },
    service: {
      title: "Academic Service",
      subtitle: "Professional service to statistics, machine learning, and biomedical data science.",
      editorial: "Journal & conference reviewing",
      editorialText: "Reviewer for leading outlets including JASA, JRSSB, JMLR, Biometrika, Biometrics, Annals of Statistics, Statistical Science, COLT, and others.",
      society: "Professional societies",
      societyText: "Deputy Secretary-General, Medical Mathematics Branch of the Chinese Mathematical Society; Standing Committee Member, Medical and Biostatistics Branch of the Chinese Association for Applied Statistics.",
      talks: "Talks & organization",
      talksText: "Invited talks on transfer learning, model-X inference, EHR data science, and robust learning; organizer of an IMS-invited session at ENAR 2024."
    },
    contact: {
      title: "Contact",
      text: "I am interested in collaborations at the interface of statistical methodology, machine learning, and biomedical research.",
      affiliation: "Peking University, Beijing, China",
      cv: "Download CV"
    },
    footer: { text: "Built as a lightweight bilingual GitHub Pages site." }
  },

  zh: {
    nav: {
      about: "关于我", research: "研究方向", publications: "论文",
      people: "课题组", experience: "经历", service: "学术服务", contact: "联系"
    },
    hero: {
      eyebrow: "统计机器学习 · 生物医学数据科学",
      title: "北京大学 研究员 & 助理教授（终身教职轨道）",
      lead: "我的研究聚焦异质生物医学数据中的稳健与可迁移统计学习，重点关注迁移学习、半监督学习、Model-X 推断以及电子健康记录数据分析。",
      publications: "代表性论文",
      cv: "中文简历",
      affiliationTitle: "现任单位",
      affiliation1: "北京大学医学部公共卫生学院",
      affiliation2: "北京国际数学研究中心",
      trainingTitle: "教育背景",
      training: "哈佛大学 生物统计学博士"
    },
    strengths: {
      oneKicker: "方法学", oneTitle: "稳健与可迁移学习",
      oneText: "面向分布偏移、多源异质性、弱监督以及模型误设等真实数据问题发展统计学习方法。",
      twoKicker: "学术影响", twoTitle: "统计学 + 机器学习",
      twoText: "代表性成果发表于 Biometrika、JRSSB、JASA、JMLR、NeurIPS、ICML 与 Science 等。",
      threeKicker: "应用", threeTitle: "生物医学数据科学",
      threeText: "聚焦电子健康记录、生物样本库、遗传学、临床预测与多源数据融合。"
    },
    about: {
      title: "关于我",
      subtitle: "研究不同人群与不同数据源之间可靠统计学习的理论与方法。",
      p1: "我的研究位于统计学、机器学习与生物医学数据科学的交叉领域。核心目标之一，是在数据分散于不同机构、人群存在差异、标签稀缺或工作模型可能误设的情况下，仍然实现可靠的统计学习与推断。",
      p2: "主要方法学方向包括迁移学习与联邦学习、半监督学习、稳健 Model-X 推断、分布鲁棒优化以及高维多源数据融合；同时关注这些方法在电子健康记录、生物样本库、遗传学和临床研究中的应用。"
    },
    research: {
      title: "研究方向",
      subtitle: "当前主要方法学研究方向概览。"
    },
    publications: {
      title: "代表性论文",
      subtitle: "部分方法学与合作研究成果。",
      showAll: "显示全部论文",
      showSelected: "仅显示代表作",
      filters: { all: "全部", statistics: "统计学", ml: "机器学习", biomedical: "生物医学" },
      empty: "当前分类下暂无论文。"
    },
    people: {
      title: "课题组成员",
      subtitle: "博士后、博士研究生与硕士研究生。",
      note: "成员信息统一保存在 data.js 中。新增成员时，只需添加照片并修改几个字段即可生成个人卡片。",
      groups: { postdoc: "博士后", phd: "博士研究生", master: "硕士研究生" },
      empty: "成员信息将在此处更新。",
      homepage: "个人主页"
    },
    experience: {
      title: "工作与教育经历",
      subtitle: "学术任职、教育背景、代表性荣誉与科研项目。",
      appointments: "学术工作经历",
      education: "教育背景",
      awards: "代表性荣誉",
      funding: "代表性科研项目"
    },
    service: {
      title: "学术服务",
      subtitle: "服务统计学、机器学习与生物医学数据科学学术共同体。",
      editorial: "期刊与会议审稿",
      editorialText: "长期为 JASA、JRSSB、JMLR、Biometrika、Biometrics、Annals of Statistics、Statistical Science、COLT 等期刊与会议审稿。",
      society: "学会任职",
      societyText: "中国数学会医学数学分会副秘书长；中国现场统计研究会医药与生物统计分会常务委员。",
      talks: "学术报告与组织",
      talksText: "围绕迁移学习、Model-X 推断、电子健康记录数据科学与稳健学习开展学术报告；曾组织 ENAR 2024 IMS 邀请专题。"
    },
    contact: {
      title: "联系",
      text: "欢迎围绕统计方法学、机器学习与生物医学研究的交叉问题开展合作。",
      affiliation: "中国 · 北京 · 北京大学",
      cv: "下载简历"
    },
    footer: { text: "基于轻量级静态页面构建，可直接部署于 GitHub Pages。" }
  }
};

const RESEARCH = [
  {
    title: {
      en: "Transfer, Federated & Integrative Learning",
      zh: "迁移学习、联邦学习与多源数据融合"
    },
    text: {
      en: "Statistical learning across heterogeneous institutions and populations, with robustness to distribution shift, privacy constraints, and source heterogeneity.",
      zh: "研究跨机构、跨人群与多来源数据的统计学习，在分布偏移、隐私约束和数据源异质性下提升稳健性与效率。"
    }
  },
  {
    title: {
      en: "Semi-supervised & Weakly Supervised Learning",
      zh: "半监督与弱监督学习"
    },
    text: {
      en: "Efficient use of unlabeled data, surrogate outcomes, and auxiliary information for inference, prediction, and high-dimensional learning.",
      zh: "利用无标签数据、代理结局和辅助信息提升统计推断、预测以及高维学习的效率。"
    }
  },
  {
    title: {
      en: "Robust Model-X Inference",
      zh: "稳健 Model-X 推断"
    },
    text: {
      en: "Conditional randomization tests and related inference procedures that remain powerful while reducing sensitivity to model misspecification.",
      zh: "发展条件随机化检验及相关推断方法，在提升检验效能的同时降低对工作模型误设的敏感性。"
    }
  },
  {
    title: {
      en: "Robust Learning for Biomedical Data",
      zh: "面向生物医学数据的稳健学习"
    },
    text: {
      en: "Methods motivated by EHRs, biobanks, genetics, clinical prediction, individualized treatment effects, and durable clinical AI.",
      zh: "围绕电子健康记录、生物样本库、遗传学、临床预测、个体化治疗效应和稳健临床 AI 发展新方法。"
    }
  }
];

/*
  PUBLICATIONS
  - selected: true  => shown in the default compact view.
  - category: statistics | ml | biomedical
  - badge: optional short highlight.
*/
const PUBLICATIONS = [
  {
    year: "2026",
    title: "Transfer Learning of CATE with Kernel Ridge Regression",
    authors: "S. Kim†, H. Liu†, M. Liu, K. Wang",
    venue: "Journal of the American Statistical Association, forthcoming",
    category: "statistics",
    selected: true,
    badge: "JASA"
  },
  {
    year: "2026",
    title: "Model-Assisted and Knowledge-Guided Transfer Regression for the Underrepresented Population",
    authors: "D. Zhou, M. Li, Y. Wang, T. Cai, M. Liu",
    venue: "Journal of Machine Learning Research, forthcoming",
    category: "ml",
    selected: true,
    badge: "JMLR"
  },
  {
    year: "2026",
    title: "Efficient Modeling of Surrogates to Improve Multi-source High-dimensional Integrative Regression",
    authors: "Y. Liu†, M. Liu, Z. Guo, T. Cai",
    venue: "Journal of Machine Learning Research, forthcoming",
    category: "ml",
    selected: false,
    badge: "JMLR"
  },
  {
    year: "2025",
    title: "Doubly Robust Augmented Model Accuracy Transfer Inference with High Dimensional Features",
    authors: "D. Zhou†, M. Liu, M. Li, T. Cai",
    venue: "Journal of the American Statistical Association",
    category: "statistics",
    selected: true,
    badge: "JASA"
  },
  {
    year: "2025",
    title: "Semi-supervised Triply Robust Inductive Transfer Learning",
    authors: "T. Cai, M. Liu, M. Li",
    venue: "Journal of the American Statistical Association",
    category: "statistics",
    selected: false,
    badge: "JASA"
  },
  {
    year: "2025",
    title: "Robust and Efficient Semi-supervised Learning for Ising Model",
    authors: "D. Wu†, M. Liu",
    venue: "Biometrics, 81, ujaf060",
    category: "statistics",
    selected: false,
    badge: "Biometrics"
  },
  {
    year: "2025",
    title: "Knowledge-Guided Wasserstein Distributionally Robust Optimization",
    authors: "Z. Wang†, Z. Wang†, M. Liu, N. Si",
    venue: "ICML",
    category: "ml",
    selected: true,
    badge: "ICML"
  },
  {
    year: "2025",
    title: "CEGA: A Cost-Effective Approach for Graph-Based Model Extraction Attacks",
    authors: "Z. Wang†, M. Lin, B. Shen, K. Anderson, M. Liu, T. Cai, Y. Dong",
    venue: "ICML",
    category: "ml",
    selected: false,
    badge: "ICML"
  },
  {
    year: "2025",
    title: "Intrinsic health as a foundation for a science of health",
    authors: "A. Cohen, M. Picard, …, M. Liu, N. Makarem, D. Malinsky, S. Pei, Y. Wei",
    venue: "Science Advances, 11(25), eadu8437",
    category: "biomedical",
    selected: false,
    badge: "Science Advances"
  },
  {
    year: "2024",
    title: "Diversity and scale: genetic architecture of 2,068 traits in the VA Million Veteran Program",
    authors: "A. Verma, J.E. Huffman, A. Rodriguez, M. Conery, M. Liu, …, M.D. Scott, K.P. Liao",
    venue: "Science, 385(6706), eadj1182",
    category: "biomedical",
    selected: true,
    badge: "Science"
  },
  {
    year: "2024",
    title: "Covariate Shift Corrected Conditional Randomization Test",
    authors: "B. Xu†, Y. Huang†, C. Hong, S. Li, M. Liu",
    venue: "NeurIPS",
    category: "ml",
    selected: true,
    badge: "NeurIPS"
  },
  {
    year: "2023",
    title: "Maxway CRT: Improving the Robustness of Model-X Inference",
    authors: "S. Li, M. Liu",
    venue: "Journal of the Royal Statistical Society: Series B, 85, 1441–1470",
    category: "statistics",
    selected: true,
    badge: "JRSSB"
  },
  {
    year: "2023",
    title: "Augmented Transfer Regression Learning with Semi-non-parametric Nuisance Models",
    authors: "M. Liu, Y. Zhang†, K.P. Liao, T. Cai",
    venue: "Journal of Machine Learning Research, 24, 1–50",
    category: "ml",
    selected: true,
    badge: "JMLR"
  },
  {
    year: "2023",
    title: "Assessing the Most Vulnerable Subgroup to Type II Diabetes Associated with Statin Usage: Evidence from Electronic Health Record Data",
    authors: "X. Guo, W. Wei, M. Liu, T. Cai, C. Wu",
    venue: "Journal of the American Statistical Association (Application and Case Study), 118, 1488–1499",
    category: "biomedical",
    selected: false,
    badge: "JASA"
  },
  {
    year: "2022",
    title: "Fast and Powerful Conditional Randomization Testing via Distillation",
    authors: "M. Liu, E. Katsevich, L. Janson, A. Ramdas",
    venue: "Biometrika, 109, 277–293",
    category: "statistics",
    selected: true,
    badge: "Biometrika"
  },
  {
    year: "2022",
    title: "Efficient Evaluation of Prediction Rules in Semi-supervised Settings under Stratified Sampling",
    authors: "J. Gronsbell, M. Liu, L. Tian, T. Cai",
    venue: "Journal of the Royal Statistical Society: Series B, 84, 1353–1391",
    category: "statistics",
    selected: false,
    badge: "JRSSB"
  },
  {
    year: "2022",
    title: "Individual Data Protected Integrative Regression Analysis of High-dimensional Heterogeneous Data",
    authors: "T. Cai, M. Liu, Y. Xia",
    venue: "Journal of the American Statistical Association, 117, 2105–2119",
    category: "statistics",
    selected: false,
    badge: "JASA"
  },
  {
    year: "2022",
    title: "Prior Adaptive Semi-supervised Learning with Application to EHR Phenotyping",
    authors: "Y. Zhang, M. Liu, M. Neykov, T. Cai",
    venue: "Journal of Machine Learning Research, 23, 83:1–83:25",
    category: "ml",
    selected: false,
    badge: "JMLR"
  },
  {
    year: "2021",
    title: "Integrative High Dimensional Multiple Testing with Heterogeneity under Data Sharing Constraints",
    authors: "M. Liu, Y. Xia, K. Cho, T. Cai",
    venue: "Journal of Machine Learning Research, 22, 126:1–126:26",
    category: "ml",
    selected: false,
    badge: "JMLR"
  },
  {
    year: "2021",
    title: "Double/debiased Machine Learning for the Logistic Partially Linear Model",
    authors: "M. Liu, Y. Zhang†, D. Zhou†",
    venue: "The Econometrics Journal, 24, 559–588",
    category: "statistics",
    selected: false,
    badge: "Econometrics J."
  },
  {
    year: "2021",
    title: "Clinical Knowledge Extraction via Sparse Embedding Regression (KESER) with Multi-center Large-scale Electronic Health Record Data",
    authors: "C. Hong, E. Rush, M. Liu, D. Zhou, J. Sun, A. Sonabend, …, K.P. Liao, T. Cai",
    venue: "npj Digital Medicine, 4, 1–11",
    category: "biomedical",
    selected: false,
    badge: "npj Digital Medicine"
  },
  {
    year: "2019",
    title: "Joint Models for Time-to-event Data and Longitudinal Biomarkers of High Dimension",
    authors: "M. Liu, J. Sun, J.D. Herazo-Maya, N. Kaminski, H. Zhao",
    venue: "Statistics in Biosciences, 11, 614–629",
    category: "statistics",
    selected: false,
    badge: ""
  },
  {
    year: "2018",
    title: "Modeling Individualized Coefficient Alpha to Measure the Quality of Test Score Data",
    authors: "M. Liu, M. Hu, X. Zhou",
    venue: "Statistics in Medicine, 37, 3230–3243",
    category: "statistics",
    selected: false,
    badge: ""
  }
];

/*
  PEOPLE — this is the only block you normally need to edit for group members.

  Example:
  {
    name: { en: "Firstname Lastname", zh: "中文名" },
    role: { en: "Ph.D. Student", zh: "博士研究生" },
    interests: { en: "Transfer learning; causal inference", zh: "迁移学习；因果推断" },
    photo: "assets/images/people/firstname.jpg",
    email: "name@pku.edu.cn",
    homepage: "https://..."
  }

  Leave homepage/email as "" if you do not want them shown.
*/
const PEOPLE = {
  postdoc: [],
  phd: [],
  master: []
};

const APPOINTMENTS = [
  {
    date: { en: "Mar 2025 – Present", zh: "2025.03 – 至今" },
    title: {
      en: "Researcher & Assistant Professor (Tenure Track)",
      zh: "研究员 & 助理教授（终身教职轨道）"
    },
    detail: {
      en: "Peking University Health Science Center · Beijing International Center for Mathematical Research",
      zh: "北京大学医学部公共卫生学院 · 北京国际数学研究中心"
    }
  },
  {
    date: { en: "Aug 2022 – Feb 2025", zh: "2022.08 – 2025.02" },
    title: {
      en: "Assistant Professor (Tenure Track)",
      zh: "助理教授（终身教职轨道）"
    },
    detail: {
      en: "Columbia University Mailman School of Public Health",
      zh: "哥伦比亚大学梅尔曼公共卫生学院"
    }
  }
];

const EDUCATION = [
  {
    date: { en: "2017 – 2022", zh: "2017 – 2022" },
    title: { en: "Ph.D. in Biostatistics", zh: "生物统计学博士" },
    detail: {
      en: "Harvard University · Advisors: Tianxi Cai and Lucas Janson",
      zh: "哈佛大学 · 导师：Tianxi Cai 与 Lucas Janson"
    }
  },
  {
    date: { en: "2013 – 2017", zh: "2013 – 2017" },
    title: { en: "B.S. in Statistics", zh: "统计学学士" },
    detail: { en: "Peking University", zh: "北京大学" }
  }
];

const AWARDS = [
  {
    year: "2024",
    text: {
      en: "Sanford Bolton Faculty Scholar Award, Columbia University Mailman School of Public Health",
      zh: "桑福德·博尔顿教职学者奖，哥伦比亚大学梅尔曼公共卫生学院"
    }
  },
  {
    year: "2021",
    text: {
      en: "Outstanding Teaching Assistant Award, Harvard T.H. Chan School of Public Health",
      zh: "优秀助教奖，哈佛大学陈曾熙公共卫生学院"
    }
  },
  {
    year: "2019",
    text: {
      en: "Robert B. Reed Distinguished Award in Biostatistical Science, Harvard T.H. Chan School of Public Health",
      zh: "罗伯特·巴伦坦·里德生物统计科学杰出奖，哈佛大学陈曾熙公共卫生学院"
    }
  }
];

const FUNDING = [
  {
    year: "2025–2027",
    text: {
      en: "National Natural Science Foundation of China — Excellent Young Scientists Fund (Overseas), PI",
      zh: "国家自然科学基金优秀青年科学基金项目（海外），项目负责人"
    }
  },
  {
    year: "2024–2025",
    text: {
      en: "U.S. National Institute on Aging R01 — Statistical framework for age-dependent genetic architecture of Alzheimer’s disease, MPI (1/3)",
      zh: "美国国家老龄化研究所 R01——解析阿尔茨海默病年龄依赖性遗传图谱的统计框架，共同项目负责人（1/3）"
    }
  }
];
