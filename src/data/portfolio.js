export const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: "kimia-farma",
    title: "Kimia Farma Business Performance Analytics",
    category: "Business Intelligence & Big Data Analytics",
    year: "2026",
    description:
      "A business intelligence project integrating four Kimia Farma datasets in Google BigQuery to analyze sales, profitability, transactions, regional contribution, customer ratings, and branch performance from 2020 to 2023.",
    technologies: ["SQL", "Google BigQuery", "Looker Studio"],
    previewType: "kimia",
    cardImage: "/projects/kimia-farma-dashboard-1.webp",
    cardImagePosition: "top",
    images: [
      {
        src: "/projects/kimia-farma-dashboard-1.webp",
        alt: "Kimia Farma Performance Analytics dashboard page showing key performance snapshot, sales and profit trends, regional contribution, and summary insights.",
        caption:
          "Dashboard Page 1 — Executive KPI, sales & profit trends, regional contribution, and summary insights.",
      },
      {
        src: "/projects/kimia-farma-dashboard-2.webp",
        alt: "Kimia Farma Performance Analytics dashboard page showing branch transactions, sales, rating gaps, improvement priority matrix, and management priorities.",
        caption:
          "Dashboard Page 2 — Branch performance, rating gaps, priority matrix, and management action guide.",
      },
    ],
    overview:
      "A business performance analytics project completed as part of the Kimia Farma Big Data Analytics Project-Based Internship. The project integrates transaction, product, inventory, and branch datasets in Google BigQuery, transforms them into a transaction-level analytical table using SQL, and connects the resulting data directly to a two-page Looker Studio dashboard for executive and operational performance analysis.",
    background:
      "Kimia Farma's operational data was provided across four separate sources covering sales transactions, products, inventory, and branch information. Analyzing business performance across these sources required a reliable integration process that preserved transaction-level granularity while combining commercial, geographic, product, and customer-rating dimensions into a consistent analytical dataset.",
    objective:
      "Build a single source of truth for Kimia Farma's 2020–2023 business data, calculate key financial and operational metrics, evaluate performance across time, products, regions, and branches, and communicate the findings through an interactive management dashboard.",
    workflow: [
      "4 Raw CSV Datasets",
      "BigQuery Data Import",
      "SQL Data Integration & Transformation",
      "kf_analysis Analytical Table",
      "Data & Metric Validation",
      "Looker Studio Dashboard",
      "Management Insights & Actions",
    ],
    tools: [
      "SQL",
      "Google BigQuery",
      "Google Cloud Platform",
      "Google Looker Studio",
    ],
    contributions: [
      "Imported and integrated four operational datasets covering 672,458 transactions, product information, inventory records, and branch data using Google BigQuery.",
      "Built the kf_analysis analytical table using SQL as a single source of truth while preserving one-row-per-transaction granularity.",
      "Prevented transaction duplication caused by one-to-many inventory records by creating an inventory_unique CTE before joining the datasets.",
      "Calculated business metrics including nett sales, nett profit, gross-profit percentages, transaction ratings, and normalized discount values using SQL.",
      "Validated row consistency, required fields, numeric metrics, geographic dimensions, and date fields before connecting the analytical table to Looker Studio.",
      "Designed a two-page interactive dashboard covering executive KPIs, time trends, geographic performance, branch analysis, product categories, rating gaps, and management priorities.",
      "Developed dynamic summary insights and a branch improvement framework using Protect, Improve, and Grow management actions.",
    ],
    areas: [
      "Data Integration",
      "SQL Data Transformation",
      "Business Performance Analysis",
      "Sales & Profitability",
      "Time-Series Performance",
      "Regional Analysis",
      "Branch Performance",
      "Product Category Analysis",
      "Customer & Branch Ratings",
      "Management Prioritization",
    ],
    insights: [
      "Across 2020–2023, the integrated dataset recorded approximately Rp321.17 billion in nett sales and Rp72.56 billion in nett profit, representing a 22.59% profit margin.",
      "The analysis covered 672,458 transactions, with an average transaction rating of 4.0/5 and an average branch rating of 4.4/5.",
      "2022 recorded the strongest annual sales performance, generating approximately Rp80.58 billion in nett sales.",
      "West Java was the largest profit-contributing province, generating approximately Rp21.43 billion in nett profit.",
    ],
    recommendations: [
      {
        label: "Protect",
        text: "Maintain service quality and product availability at high-profit branches that already demonstrate strong transaction ratings.",
      },
      {
        label: "Improve",
        text: "Prioritize service improvements at high-profit branches with low transaction ratings or large gaps between branch and transaction ratings.",
      },
      {
        label: "Grow",
        text: "Increase promotion and product availability at branches with strong ratings but relatively lower sales and profitability.",
      },
    ],
    links: [
      {
        label: "Live Dashboard",
        url: "https://datastudio.google.com/reporting/02b9510f-a829-492d-bf4e-bce2fbdfaa07",
      },
    ],
  },
  {
    id: "descan-kahuripan",
    title: "Desa Cantik Kahuripan Survey Analytics Pipeline",
    category: "Survey Data Analytics & Quality Monitoring",
    year: "2025",

    description:
      "A survey analytics workflow developed from the 2025 Desa Cantik Kahuripan program to monitor household-based micro and small business data, identify data-quality issues, and prepare structured analytical outputs.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Microsoft Excel",
      "Google Colab",
    ],

    previewType: "descan",

    overview:
      "A real-world survey analytics case developed from internship work at BPS Kota Tasikmalaya. The project transforms multi-sheet survey data into a structured workflow for data-quality review, survey progress monitoring, descriptive analysis, and reporting.",

    background:
      "The 2025 Desa Cantik Kahuripan program collected household-based micro and small business information across 19 RW in Kelurahan Kahuripan, Kota Tasikmalaya. The survey required structured data validation, progress monitoring, and analytical preparation before the results could be used for reporting and local economic analysis.",

    objective:
      "Develop a repeatable analytics workflow to validate survey data, monitor completion, identify anomalies, and prepare descriptive statistics and visual outputs while preserving the integrity of the original source data.",

    contributions: [
      "Structured survey data processing and validation using Python and Microsoft Excel.",
      "Developed data-quality checks for incomplete records, duplicate entries, inconsistent classifications, and survey anomalies.",
      "Prepared monitoring outputs to evaluate survey completion and data coverage across 19 RW.",
      "Performed descriptive analysis and prepared visualization-ready outputs for reporting.",
      "Contributed to the final Desa Cantik Kahuripan publication through data processing and analysis, writing, and graphic layout.",
    ],

    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Microsoft Excel",
      "Google Colab",
    ],

    workflow: [
      "Survey Data Collection",
      "Data Preparation",
      "Data Validation",
      "Quality Monitoring",
      "Descriptive Analysis",
      "Visualization & Reporting",
    ],

    areas: [
      "Survey Data Processing",
      "Data Quality",
      "Survey Monitoring",
      "Data Validation",
      "Descriptive Analytics",
      "Reporting",
    ],

    insights: [
      "Separating survey monitoring from final analysis makes the workflow easier to audit and maintain.",
      "Data-quality checks help identify incomplete, inconsistent, and potentially problematic survey records before analysis.",
      "RW-level monitoring provides a clearer view of survey coverage and completion across the study area.",
      "Preserving original survey values while flagging questionable records improves transparency during the review process.",
    ],

    recommendations: [
      {
        label: "Validate",
        text: "Run structured data-quality checks before using survey records for final analysis.",
      },
      {
        label: "Monitor",
        text: "Track survey completion and data coverage by RW to identify areas requiring follow-up.",
      },
      {
        label: "Document",
        text: "Maintain traceable analytical outputs so data cleaning and validation decisions can be reviewed.",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/luthfiaw13/descan_kahuripan_analytics",
      },
    ],
  },
  {
    id: "kitchen-equipment",
    title: "Kitchen Equipment Sales Performance Dashboard",
    category: "Sales Analytics & Business Intelligence",
    year: "2026",
    description:
      "An interactive sales performance dashboard built from 10,000 cleaned kitchen-equipment transactions, using Google BigQuery as the data source and Looker Studio to analyze revenue, order performance, monthly trends, products, categories, and geographic sales.",
    technologies: ["Microsoft Excel", "Google BigQuery", "Looker Studio"],
    previewType: "sales",
    cardImage: "/projects/kitchen-equipment-dashboard.webp",
    cardImagePosition: "center",
    images: [
      {
        src: "/projects/kitchen-equipment-dashboard.webp",
        alt: "Kitchen Equipment Store sales dashboard showing revenue, orders, completion rate, monthly trend, city performance, category mix, product performance, and business insights.",
        caption:
          "Interactive sales dashboard — revenue, order performance, monthly trends, city contribution, category mix, and product insights.",
      },
    ],
    overview:
      "A sales analytics project developed from a cleaned dataset of 10,000 kitchen-equipment transactions from 2025. The source data was prepared and standardized in Microsoft Excel, uploaded to Google BigQuery, and connected to Looker Studio to build an interactive dashboard for monitoring sales, orders, completion rates, product performance, categories, and geographic contribution.",
    background:
      "The original retail dataset contained 10,000 kitchen-equipment transactions with information on dates, orders, customers, products, categories, prices, quantities, discounts, shipping fees, order status, and shipping locations. Before visualization, several categorical and location fields required cleaning and standardization to create a more consistent dataset for analysis.",
    objective:
      "Prepare a reliable transaction dataset and develop an interactive business intelligence dashboard that allows sales performance to be evaluated across time, products, categories, order status, and geographic markets.",
    contributions: [
      "Cleaned and standardized the original retail transaction dataset in Microsoft Excel, including order-status, city, and category fields.",
      "Prepared the resulting 10,000-record cleaned dataset for analytical use and uploaded it to Google BigQuery as the dashboard data source.",
      "Connected the BigQuery dataset to Google Looker Studio and defined dashboard-level metrics for sales revenue, total orders, completion rate, and average order value.",
      "Designed an interactive sales dashboard with date, category, order-status, and city filters.",
      "Built visual analyses covering monthly sales trends, geographic performance, Top 5 products by revenue, Top 10 cities, category contribution, and product sales performance.",
      "Summarized key dashboard findings into concise business insights for sales-performance monitoring.",
    ],
    tools: ["Microsoft Excel", "Google BigQuery", "Google Looker Studio"],
    workflow: [
      "Raw Transaction Data",
      "Data Cleaning & Standardization",
      "Cleaned Transaction Dataset",
      "Google BigQuery Data Source",
      "Looker Studio Dashboard",
      "Sales Performance Insights",
    ],
    areas: [
      "Data Cleaning",
      "Data Standardization",
      "Sales Performance Analysis",
      "KPI Monitoring",
      "Monthly Sales Trends",
      "Product Performance",
      "Category Performance",
      "Geographic Analysis",
      "Interactive Dashboard",
    ],
    insights: [
      "The dashboard summarizes Rp5.87 billion in sales revenue from 10,000 orders, with an overall completion rate of 89.72% and an average order value of approximately Rp587.27 thousand.",
      "August recorded the highest monthly sales at approximately Rp523.78 million, while February recorded the lowest at approximately Rp453.11 million.",
      "Mesin Kopi Espresso Rumahan was the highest-revenue product, generating approximately Rp751.74 million.",
      "Jakarta Pusat was the strongest geographic market, contributing approximately Rp635.34 million in sales revenue.",
      "The Alat Masak category dominated revenue contribution at approximately 79.5% of total sales.",
    ],
    recommendations: [
      {
        label: "Prioritize",
        text: "Maintain product availability and commercial focus for high-revenue products, particularly Mesin Kopi Espresso Rumahan.",
      },
      {
        label: "Monitor",
        text: "Track monthly sales and order completion rates to identify performance changes and periods requiring further investigation.",
      },
      {
        label: "Target",
        text: "Use city and category performance to support more focused inventory allocation and sales initiatives across stronger and weaker markets.",
      },
    ],
    links: [
      {
        label: "Live Dashboard",
        url: "https://datastudio.google.com/reporting/73c5299f-32d2-4fba-9c5c-cfca5643044a",
      },
    ],
  },
  {
    id: "excel-dashboard",
    title: "Fashion Sales Performance Dashboard",
    category: "Excel Analytics & Dashboard",
    year: "2026",
    description:
      "An interactive Microsoft Excel dashboard analyzing 15,000 fashion sales transactions through KPI monitoring, monthly sales trends, product and city performance, platform contribution, order status, and dynamic slicer-based filtering.",
    technologies: [
      "Microsoft Excel",
      "PivotTables",
      "PivotCharts",
      "Slicers & Timeline",
    ],
    previewType: "excel",
    cardImage: "/projects/excel-dashboard.webp",
    cardImagePosition: "center",
    images: [
      {
        src: "/projects/excel-dashboard.webp",
        alt: "Microsoft Excel sales dashboard showing net sales, quantity, average customer rating, shipping fee, monthly sales trend, platform mix, city and product rankings, and order status.",
        caption:
          "Microsoft Excel dashboard — KPI summary, filters, monthly trend, platform mix, product/city rankings, order status, and management summary.",
      },
    ],
    overview:
      "An interactive sales dashboard developed in Microsoft Excel using 15,000 fashion retail transactions. The project summarizes key sales indicators and provides interactive analysis across time, locations, products, platforms, order status, size, and customer gender segments using PivotTables, PivotCharts, slicers, and a Timeline.",
    background:
      "The project uses a dataset of 15,000 fashion sales transactions containing order dates, customers, cities, products, prices, quantities, discounts, sales values, shipping fees, payment methods, order status, sales platforms, customer ratings, sizes, materials, and gender segments. The dashboard was developed to summarize this transaction data into an interactive view of sales performance.",
    objective:
      "Transform fashion retail transaction data into an interactive Excel dashboard that enables users to monitor key sales metrics and explore performance across multiple business dimensions.",
    contributions: [
      "Analyzed 15,000 fashion sales transactions and summarized key performance indicators including net sales, quantity sold, average customer rating, and shipping fees.",
      "Built PivotTables and PivotCharts to analyze monthly sales trends, city performance, product performance, platform contribution, and order-status distribution.",
      "Designed an interactive Excel dashboard combining KPI cards and multiple sales-performance visualizations in a single reporting view.",
      "Implemented a Timeline and Size and Gender slicers to allow users to interactively filter and explore dashboard results.",
      "Prepared narrative business insights highlighting sales patterns, strongest markets, leading products, and platform contribution.",
    ],
    tools: [
      "Microsoft Excel",
      "PivotTables",
      "PivotCharts",
      "Slicers",
      "Timeline",
    ],
    workflow: [
      "Fashion Sales Dataset",
      "PivotTable Analysis",
      "KPI Calculation",
      "PivotChart Visualization",
      "Interactive Dashboard",
      "Sales Insights",
    ],
    areas: [
      "Sales Performance Analysis",
      "KPI Reporting",
      "Monthly Trend Analysis",
      "Product Performance",
      "City Performance",
      "Platform Analysis",
      "Order Status Analysis",
      "Interactive Excel Dashboard",
    ],
    insights: [
      "The dashboard recorded approximately Rp7.09 billion in net sales across 15,000 fashion transactions, with 26,453 units sold and approximately Rp357.57 million in shipping fees.",
      "January recorded the highest monthly total sales at approximately Rp609.04 million, while September recorded the lowest at approximately Rp542.25 million.",
      "Jakarta was the strongest city among the Top 10 sales locations, contributing approximately Rp338.85 million in total sales.",
      "Gamis was the highest-performing product among the Top 10 products, generating approximately Rp619.18 million in total sales.",
      "Toko Fashion App was the largest platform contributor, accounting for approximately 35.26% of total sales.",
    ],
    recommendations: [
      {
        label: "Maintain",
        text: "Maintain sales momentum in high-performing markets such as Jakarta while monitoring the continued performance of leading products such as Gamis.",
      },
      {
        label: "Leverage",
        text: "Use Toko Fashion App's strong sales contribution as a reference point when evaluating performance and opportunities across other sales platforms.",
      },
      {
        label: "Monitor",
        text: "Track order-status distribution and customer ratings alongside sales performance to identify potential operational and customer-experience issues.",
      },
    ],
    linksNote:
      "This project is delivered as a Microsoft Excel workbook, so there is no public live dashboard URL. The dashboard screenshot is included above as the project preview.",
  },
  {
    id: "bakul-chatbot",
    title: "BAKUL Kahuripan Rule-Based Chatbot",
    category: "Information Retrieval / NLP",
    year: "2025",
    description:
      "A rule-based chatbot developed to support access to KBLI classification information and UMKM-related knowledge within the BAKUL Kahuripan platform.",
    technologies: [
      "Python",
      "NLP",
      "TF-IDF",
      "Rule-Based Retrieval",
      "Information Retrieval",
    ],
    previewType: "chatbot",
    cardImage: "/projects/bakul-chatbot.webp",
    cardImagePosition: "top",
    images: [
      {
        src: "/projects/bakul-home.webp",
        alt: "BAKUL Kahuripan homepage showing the UMKM portal navigation, introduction, and local UMKM hero section.",
        caption: "BAKUL Kahuripan — UMKM portal homepage.",
      },
      {
        src: "/projects/bakul-chatbot.webp",
        alt: "BAKUL Kahuripan virtual UMKM assistant page showing chatbot features and the ChatBot UMKM interface.",
        caption:
          "Asisten Virtual UMKM — chatbot feature integrated into the BAKUL Kahuripan website.",
      },
    ],
    overview:
      "A rule-based information-retrieval chatbot integrated into the BAKUL Kahuripan UMKM portal to help users access KBLI classification information and UMKM-related knowledge through a more direct conversational interface.",
    background:
      "Classification and UMKM information can be difficult to navigate when users do not know the correct terminology. A focused chatbot can provide a more direct way to retrieve relevant information from a structured knowledge source.",
    objective:
      "Create a lightweight retrieval flow that interprets user queries, matches them against relevant knowledge using rule-based logic and TF-IDF techniques, and returns useful information within an accessible UMKM portal experience.",
    contributions: [
      "Developed the chatbot retrieval logic using Python, TF-IDF, and rule-based matching.",
      "Structured KBLI classification and UMKM-related information for query-response retrieval.",
      "Processed user queries and matched them with relevant information from the chatbot knowledge base.",
      "Tested the chatbot response flow within the BAKUL Kahuripan platform.",
    ],
    tools: [
      "Python",
      "NLP",
      "TF-IDF",
      "Rule-Based Retrieval",
      "Information Retrieval",
    ],
    workflow: [
      "Knowledge Base",
      "Text Preprocessing",
      "TF-IDF Representation",
      "Rule-Based Matching",
      "Response Retrieval",
      "Chatbot Testing",
    ],
    areas: [
      "Query Processing",
      "Text Representation",
      "Rule-Based Matching",
      "Information Retrieval",
      "Response Delivery",
    ],
    insights: [
      "A rule-based approach can be practical when the knowledge domain is focused and expected question patterns are reasonably constrained.",
      "TF-IDF provides a straightforward baseline for matching user language to a structured information collection.",
      "Integrating the assistant into the broader UMKM portal gives users a single place to access information, navigation, and conversational support.",
    ],
    recommendations: [
      {
        label: "Expand",
        text: "Grow the knowledge base using recurring user questions and missing-query logs.",
      },
      {
        label: "Evaluate",
        text: "Track retrieval quality with representative user queries and relevance checks.",
      },
      {
        label: "Improve",
        text: "Add stronger intent handling or semantic retrieval if the supported question range becomes broader.",
      },
    ],
    links: [
      {
        label: "Live Website",
        url: "https://bakul-umkm.vercel.app/",
      },
    ],
  },
];

export const experiences = [
  {
    role: "Work Practice Intern — Data Processing & Analytics",
    organization: "Badan Pusat Statistik (BPS) Kota Tasikmalaya",
    period: "June 2025 – August 2025",
    description:
      "Supported statistical data processing, quality control, analysis, reporting, and publication activities at BPS Kota Tasikmalaya, including work related to the 2025 Desa Cantik Kahuripan survey program.",
    bullets: [
      "Supported monitoring and quality control of Desa Cantik Kahuripan survey data covering 19 RW in Kelurahan Kahuripan, Kota Tasikmalaya.",
      "Validated survey records and reviewed data-quality issues such as inconsistent enumerator information and duplicate identifiers for follow-up.",
      "Processed and analyzed survey data to prepare structured statistical outputs and visualizations for reporting.",
      "Contributed to the final Desa Cantik Kahuripan publication through data processing and analysis, report writing, and graphic layout.",
    ],
  },
  {
    role: "Head of Membership & Cadre Development",
    organization: "UKM Seni Musik Universitas Siliwangi",
    period: "2026 – Present",
    description:
      "Leading membership development, internal engagement, and cadre development activities within the student organization.",
    bullets: [
      "Coordinate membership and cadre development programs for active members.",
      "Support internal communication, member engagement, and participation across organizational activities.",
      "Collaborate with other organizational divisions to plan and execute internal development programs.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Data Analytics",
    skills: [
      "Data Cleaning & Validation",
      "Exploratory Data Analysis",
      "Survey Data Analytics",
      "Data Quality Analysis",
      "SQL Data Analysis",
      "Business Performance Analysis",
    ],
  },
  {
    title: "Data Visualization & Reporting",
    skills: [
      "Dashboard Development",
      "Interactive Reporting",
      "Data Visualization",
      "KPI Analysis",
      "Statistical Reporting",
      "Insight Communication",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Microsoft Excel",
      "SQL",
      "Google BigQuery",
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Google Colab",
      "Google Looker Studio",
    ],
  },
  {
    title: "Technical Foundations",
    skills: [
      "Chatbot Development",
      "Information Retrieval",
      "TF-IDF",
      "Basic Machine Learning",
    ],
  },
];

export const certifications = [
  {
    title: "Data Analyst Bootcamp",
    provider: "KarirNex",
    date: "July 2026",
    focus:
      "Data preparation with Excel, SQL analysis in Google BigQuery, Python-based exploratory analysis in Google Colab, and dashboard development with Looker Studio",
    achievement: "Predicate: Expert",
    image: "/certificates/data-analyst-karirnex.webp",
    imageAlt:
      "KarirNex Certificate of Appreciation for Luthfi Awaludin, Data Analyst Bootcamp, with Expert predicate.",
  },
  {
    title: "Kimia Farma Big Data Analytics Project-Based Internship",
    provider: "Rakamin Academy × Kimia Farma",
    date: "July – August 2026",
    focus: "Data Analysis, Big Data, Big Data Processing and Scheduling",
    achievement: "Average score: 93.44 · Excellent",
    image: "/certificates/kimia-farma-rakamin.webp",
    imageAlt:
      "Rakamin Academy and Kimia Farma Certificate of Achievement for Luthfi Awaludin in the Big Data Analytics Project-Based Internship Program.",
  },
  {
    title: "Microsoft Excel Bootcamp",
    provider: "KarirNex",
    date: "June 2026",
    focus:
      "Excel formulas, conditional and multi-criteria analysis, PivotTables, PivotCharts, interactive dashboards, and introductory VBA automation",
    achievement: "Proficiency level: Expert",
    image: "/certificates/excel-bootcamp-karirnex.webp",
    imageAlt:
      "KarirNex Certificate of Appreciation for Luthfi Awaludin, Intensive 3-Week Microsoft Excel Bootcamp, with Expert proficiency level.",
  },
  {
    title: "Excel Case Study & Office Work Simulation",
    provider: "ITBOX",
    date: "16 June 2026",
    focus: "Practical Excel case studies and office-work simulation exercises.",
    achievement: "Certificate of Completion",
    image: "/certificates/itbox-excel-case-study.webp",
    imageAlt:
      "ITBOX Certificate of Completion for Luthfi Awaludin for the DAE-08 Excel case study and office work simulation course.",
  },
  {
    title: "BPS Work Practice Program",
    provider: "Badan Pusat Statistik (BPS) Kota Tasikmalaya",
    date: "June – August 2025",
    focus:
      "Statistical data processing, data validation, reporting, and publication support during a professional work practice program.",
    achievement: "Completed with Good rating",
    image: "/certificates/bps-internship-certificate.webp",
    imageAlt:
      "Badan Pusat Statistik Kota Tasikmalaya certificate awarded to Luthfi Awaludin for completing the Work Practice Program from June to August 2025 with a Good rating.",
  },
];
