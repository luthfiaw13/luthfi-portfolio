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
    title: "Kimia Farma Performance Analytics",
    category: "Business Performance Analytics",
    year: "2026",
    description:
      "An interactive business performance analytics project analyzing Kimia Farma data from 2020 to 2023. The project explores net sales, net profit, transactions, customer satisfaction, regional contribution, and branch performance.",
    technologies: ["Google BigQuery", "SQL", "Google Looker Studio"],
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
      "A project-based analytics case focused on turning multi-year transaction and branch data into a management-ready performance view. The work combines SQL-based data preparation with a structured dashboard that highlights commercial performance, customer experience, regional contribution, and branch priorities.",
    background:
      "Business performance data becomes more useful when management can connect sales and profitability with transaction quality, customer ratings, and geographic contribution. This project organizes those dimensions into a single analytical flow to make branch-level performance easier to interpret.",
    objective:
      "Build a clear analytical view of performance from 2020–2023, identify meaningful patterns across sales, profit, transactions, satisfaction, regions, and branches, then translate the findings into practical branch-management priorities.",
    workflow: [
      "Raw Transaction Data",
      "Data Preparation in BigQuery",
      "SQL Analysis & KPI Calculation",
      "Data Validation",
      "Looker Studio Dashboard",
      "Insights & Recommendations",
    ],
    tools: ["Google BigQuery", "SQL", "Google Looker Studio"],
    contributions: [
      "Prepared and queried the project dataset in Google BigQuery using SQL.",
      "Defined and analyzed KPIs covering net sales, net profit, transactions, customer ratings, regional contribution, and branch performance.",
      "Designed a two-page interactive dashboard in Google Looker Studio.",
      "Translated analytical findings into branch management priorities using Protect, Improve, and Grow strategies.",
    ],
    areas: [
      "Key Performance Snapshot",
      "Sales and Profit Analysis",
      "Transaction Trends",
      "Customer Satisfaction",
      "Regional Contribution",
      "Branch Performance",
      "Branch Management Priorities",
    ],
    insights: [
      "From 2020 to 2023, the analyzed data recorded approximately Rp321.17 billion in net sales and Rp72.56 billion in net profit, resulting in a profit margin of about 22.59%.",
      "A total of 672,458 transactions were recorded, with an average transaction rating of 4.0/5 and an average branch rating of 4.4/5.",
      "2022 generated the strongest annual sales performance, reaching approximately Rp80.58 billion in net sales.",
      "West Java was the highest profit-contributing province, generating approximately Rp21.43 billion in net profit.",
    ],
    recommendations: [
      {
        label: "Protect",
        text: "Maintain service quality and product availability at high-performing branches.",
      },
      {
        label: "Improve",
        text: "Prioritize service improvements for branches with low transaction ratings or large rating gaps.",
      },
      {
        label: "Grow",
        text: "Increase promotion and product availability for branches with strong ratings but relatively low sales and profit.",
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
    id: "kitchen-equipment",
    title: "Kitchen Equipment Sales Analysis",
    category: "End-to-End Data Analytics",
    year: "2026",
    description:
      "An end-to-end data analytics project using 10,000 kitchen equipment sales transactions. The project covers data cleaning, SQL analysis, exploratory data analysis, and interactive dashboard development.",
    technologies: [
      "Microsoft Excel",
      "Google BigQuery",
      "SQL",
      "Python",
      "Google Colab",
      "Google Looker Studio",
    ],
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
      "An end-to-end analytics workflow built around 10,000 kitchen-equipment sales transactions, from initial data preparation through SQL-based analysis, exploratory analysis, and dashboard communication.",
    background:
      "Raw sales transaction data can contain formatting inconsistencies and is difficult to interpret without a structured analysis workflow. This project focuses on organizing the data and making performance patterns easier to understand.",
    objective:
      "Clean and structure the transaction dataset, explore commercial patterns with SQL and Python, and present the results through an interactive dashboard suitable for business review.",
    contributions: [
      "Cleaned and structured 10,000 kitchen equipment sales transaction records.",
      "Performed SQL-based analysis in Google BigQuery and exploratory data analysis using Python in Google Colab.",
      "Analyzed sales trends, product performance, geographic contribution, and order completion.",
      "Designed an interactive business dashboard in Google Looker Studio and summarized the main findings.",
    ],
    tools: [
      "Microsoft Excel",
      "Google BigQuery",
      "SQL",
      "Python",
      "Google Colab",
      "Google Looker Studio",
    ],
    workflow: [
      "Raw Sales Data",
      "Data Cleaning in Excel",
      "SQL Analysis in BigQuery",
      "EDA in Python / Colab",
      "Looker Studio Dashboard",
      "Business Insights",
    ],
    areas: [
      "Data Cleaning",
      "SQL Analysis",
      "Exploratory Data Analysis",
      "Sales Performance Review",
      "Dashboard Development",
    ],
    insights: [
      "The 10,000 analyzed orders generated total sales revenue of approximately Rp5.87 billion, with an order completion rate of 89.72%.",
      "August recorded the highest monthly sales at approximately Rp523.78 million, while February recorded the lowest at approximately Rp453.11 million.",
      "Mesin Kopi Espresso Rumahan was the highest-revenue product, generating approximately Rp751.74 million.",
      "Jakarta Pusat was the strongest sales market, contributing approximately Rp635.34 million in revenue.",
    ],
    recommendations: [
      {
        label: "Prioritize",
        text: "Maintain product availability and promotional support for high-revenue products such as Mesin Kopi Espresso Rumahan.",
      },
      {
        label: "Optimize",
        text: "Use strong-performing markets such as Jakarta Pusat as a reference while evaluating opportunities in lower-contributing cities.",
      },
      {
        label: "Monitor",
        text: "Track monthly sales variation and order completion consistently to identify operational or seasonal changes.",
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
    title: "Microsoft Excel Business Analysis Dashboard",
    category: "Business Analysis & Reporting",
    year: "2026",
    description:
      "A business analysis project focused on transforming raw data into structured reports, pivot tables, and interactive dashboards using Microsoft Excel.",
    technologies: [
      "Microsoft Excel",
      "Pivot Tables",
      "Data Cleaning",
      "Data Visualization",
      "Dashboard Development",
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
      "A spreadsheet-based business analysis project demonstrating how structured Excel workflows can turn raw operational data into concise reports, pivot-table analysis, and interactive dashboards.",
    background:
      "Excel remains a practical analysis tool for many business teams. The project emphasizes clean data organization, repeatable reporting logic, and a dashboard layout that makes key metrics easy to scan.",
    objective:
      "Transform raw business data into a structured analytical workbook with cleaned data, pivot-based reporting, and a dashboard designed for routine performance monitoring.",
    contributions: [
      "Cleaned and organized raw sales data in Microsoft Excel.",
      "Created Pivot Tables and KPI summaries for sales, product, city, platform, and order-status analysis.",
      "Built interactive filters and dashboard visualizations using Excel features.",
      "Developed a management summary based on the resulting business performance indicators.",
    ],
    tools: [
      "Microsoft Excel",
      "Pivot Tables",
      "Data Cleaning",
      "Data Visualization",
      "Dashboard Development",
    ],
    workflow: [
      "Raw Sales Data",
      "Data Cleaning",
      "Pivot Table Analysis",
      "KPI Calculation",
      "Charts & Slicers",
      "Excel Dashboard & Summary",
    ],
    areas: [
      "Data Preparation",
      "Pivot Table Analysis",
      "Business Reporting",
      "Dashboard Development",
    ],
    insights: [
      "The analyzed sales data generated approximately Rp7.09 billion in net sales from 26,453 units, with an average customer rating of 3.0 and total shipping fees of approximately Rp357.57 million.",
      "Jakarta was the strongest city in the dashboard, generating approximately Rp338.85 million in sales.",
      "Gamis was the highest-performing product, generating approximately Rp619.18 million in sales.",
      "Toko Fashion App contributed the largest platform share at approximately 35% of total sales.",
      "Completed orders accounted for 18,186 units, while returned orders reached 3,673 units, highlighting an area worth monitoring operationally.",
    ],
    recommendations: [
      {
        label: "Maintain",
        text: "Maintain sales momentum in high-contributing markets such as Jakarta and monitor the performance of leading products such as Gamis.",
      },
      {
        label: "Promote",
        text: "Increase promotional attention in lower-contributing markets while using stronger regions as performance benchmarks.",
      },
      {
        label: "Monitor",
        text: "Track returned, cancelled, and pending orders alongside customer ratings to identify potential service and operational improvements.",
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
    role: "Statistics and Data Analytics Intern",
    organization: "Badan Pusat Statistik (BPS) Kota Tasikmalaya",
    period: "June 2025 – August 2025",
    description:
      "Supported statistical data processing, analytics, and reporting activities during the work-practice program.",
    bullets: [
      "Supported statistical data validation and processing activities.",
      "Contributed to data analysis, reporting, and visualization for statistical information.",
      "Supported dashboard development to communicate data in a more accessible format.",
    ],
  },
  {
    role: "Head of Membership & Cadre Development",
    organization: "UKM Seni Musik Universitas Siliwangi",
    period: "2026 – Present",
    description:
      "Leading membership development and organizational engagement initiatives.",
    bullets: [
      "Lead membership and cadre development initiatives within the organization.",
      "Coordinate programs related to member engagement and internal communication.",
      "Support organizational development and member participation through structured programs.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Data Analytics",
    skills: [
      "Data Cleaning",
      "Data Analysis",
      "Exploratory Data Analysis",
      "Business Analysis",
      "SQL-Based Analysis",
    ],
  },
  {
    title: "Data Visualization",
    skills: [
      "Dashboard Development",
      "Data Reporting",
      "KPI Analysis",
      "Business Insight Communication",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Microsoft Excel",
      "SQL",
      "Google BigQuery",
      "Python",
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
      "Excel, SQL (Google BigQuery), Python (Google Colab), Google Looker Studio",
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
    focus: "Intensive 3-Week Microsoft Excel Bootcamp Program",
    achievement: "Proficiency level: Expert",
    image: "/certificates/excel-bootcamp-karirnex.webp",
    imageAlt:
      "KarirNex Certificate of Appreciation for Luthfi Awaludin, Intensive 3-Week Microsoft Excel Bootcamp, with Expert proficiency level.",
  },
  {
    title: "Excel Case Study & Office Work Simulation",
    provider: "ITBOX",
    date: "16 June 2026",
    focus: "DAE-08 Studi Kasus & Latihan Excel: Simulasi Dunia Kerja Kantoran",
    achievement: "Certificate of Completion",
    image: "/certificates/itbox-excel-case-study.webp",
    imageAlt:
      "ITBOX Certificate of Completion for Luthfi Awaludin for the DAE-08 Excel case study and office work simulation course.",
  },
  {
    title: "BPS Work Practice Program",
    provider: "Badan Pusat Statistik (BPS) Kota Tasikmalaya",
    date: "June – August 2025",
    focus: "Work Practice Program at BPS Kota Tasikmalaya",
    achievement: "Completion: Good",
    image: "/certificates/bps-internship-certificate.webp",
    imageAlt:
      "Badan Pusat Statistik Kota Tasikmalaya internship certificate for Luthfi Awaludin for completing the work practice program from June to August 2025.",
  },
];
