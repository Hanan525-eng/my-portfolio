// // ملف الترجمات للبورتفوليو

import { desc } from "framer-motion/client";

// ملف الترجمات للبورتفوليو
export const translations = {
  ar: {
    // Navigation
    nav: {
      projects: "المشاريع",
      apps: "التطبيقات",
      cv: "السيرة الذاتية",
      contact: "تواصل معي",
    },

    // Header
    header: {
      toggleTheme: "تغيير الوضع",
      contactButton: "تواصل معي",
    },

    // Hero Section
    hero: {
      title: "بورتفوليو مصممة تجربة واجهة المستحدم",
      subtitle: "UX · UI ",
      description: `مرحبًا بك في حافظتي الإبداعية!
هنا ستجد مشاريعي في تصميم تجربة المستخدم وواجهات الاستخدام، بالإضافة إلى التطبيقات التي قمت         بتطويرها   باستخدام أحدث التقنيات.
يمكنك أيضًا تحميل سيرتي الذاتية والتواصل معي مباشرة عبر واتساب.`,
      exploreButton: "استكشف مشاريعي",
      contactButton: "تواصل معي الآن",
      interactiveDemo: `حنان عوض`,
      demoDescription: `مثال على تصميم واجهة تفاعلية حديثة وسلسة —  تحتوى على بعض المشاريع التي قد عملت ع تنفيذها `,
    },

    // Projects Section
    projects: {
      title: "مشاريع التصميم (UX/UI)",
      viewProject: "عرض المشروع",
      liveDemo: "عرض مباشر",
    },

    // Apps Section
    apps: {
      title: "تطبيقات فرونت إند",
      viewProject: "عرض المشروع",
      liveDemo: "عرض مباشر",
    },

    // CV Section
    cv: {
      title: "السيرة الذاتية",
      uploadTitle: "رفع وتحميل السيرة الذاتية",
      uploadDescription:
        "يمكنك رفع ملف السيرة الذاتية هنا لتحميله لاحقًا. يدعم النظام ملفات PDF و DOCX",
      uploadButton: "📁 رفع ملف السيرة الذاتية",
      downloadButton: "⬇️ تحميل السيرة الذاتية",
      deleteButton: "🗑️ حذف الملف",
      uploadSuccess: "تم رفع الملف بنجاح!",
      fileName: "الملف",
      fileSize: "الحجم",
      // note: "ملاحظة",
      // noteText:
      //   "هذه النسخة تعمل محليًا على المتصفح فقط. للحفظ الدائم، ستحتاج لإعداد خادم أو استخدام خدمات الاستضافة.",
    },

    // Contact Section
    contact: {
      title: "تواصل معي",
      whatsappTitle: "تواصل معي على الواتساب",
      whatsappDescription:
        "اضغط على الزر لفتح محادثة مباشرة على الواتساب. يمكنك تغيير الرقم في الكود.",
      whatsappButton: "📱 أرسل رسالة على الواتساب",
      customMessage: "أو اكتب رسالة مخصصة:",
      customMessagePlaceholder: "اكتب رسالتك هنا...",
      linksTitle: "روابط سريعة",
      linksDescription: "تابع أحدث أعمالي ومشاريعي على المنصات المختلفة",
      behanceDesc: "مشاريع التصميم والواجهات",
      githubDesc: "الكود والمشاريع البرمجية",
      linkedinDesc: "الملف المهني والخبرات",
      // rememberText: "تذكر",
      // rememberNote:
      //   "استبدل هذه الروابط بروابط حسابك الحقيقية على المنصات المختلفة.",
    },

    // Footer
    footer: {
      thankYou: "شكرًا لزيارتك بورتفوليو حنان عوض",
      subtitle: "مصممة ومطورة واجهات متخصصة في UX/UI و Frontend Development",
      copyright:
        "© {year} — مبني بـ React & Tailwind CSS — تصميم وإبداع حنان عوض",
    },

    // Sample Projects Data
    sampleProjects: {
      project1: {
        title: "تصميم جديد لموقع التجارة الإلكترونية",
        desc: "تصميم واجهة وتجربة مستخدم لمتجر إلكتروني حديث، مع التركيز على تجربة تسوق سلسة وجذاب. المشروع قيد التنفيذ. ",
      },
      project2: {
        title: "Real Estate Platform – UX/UI Design",
        desc: "تصميم واجهة وتجربة مستخدم لمنصة عقارية، مع التركيز على عرض العقارات وتجربة تصفح سلسة للمستخدم. المشروع قيد التنفيذ.",
      },
      project3: {
        title: "Hafsa Restoran: تصميم واجهة مطعم لخدمات التوصيل",
        desc: "تصميم وتطوير واجهة مستخدم عصرية ومحفزة لموقع مطعم Hafsa Restoran متخصص في خدمات توصيل الطعام السريعة.",
      },
      project4: {
        title: "Restaurant Admin Dashboard – UX/UI Design",
        desc: "تصميم واجهة وتجربة مستخدم للوحة تحكم إدارة المطعم، مع أدوات لإدارة الطلبات والمخزون ومتابعة أداء المطعم. المشروع قيد التنفيذ.",
      },
      project5: {
        title: "تطبيق توصيل ",
        desc: "تطبيق لتوصيل جميع أنواع الطلبات بسهولة وسرعة مع إمكانية تتبع الطلب لحظة بلحظة.",
      },
      project6: {
        title: "Dashboard: واجهة تحليل وإدارة مهام المطورين",
        desc: "تصميم وتنفيذ لوحة تحكم (Dashboard) متكاملة لنظام EITOP الإداري، تهدف إلى تتبع وإدارة المشاريع، الإحصائيات، والأهداف المالية للمستخدمين.",
      },
      project7: {
        title: "إلتوب: بوابة الابتكار والتطوير",
        desc: "تصميم وتنفيذ واجهة مستخدم لموقع وكالة رقمية شاملة (Eltop World) تعرض خدماتها الفنية والتقنية.",
      },
    },
  },

  en: {
    // Navigation
    nav: {
      projects: "Projects",
      apps: "Apps",
      cv: "CV",
      contact: "Contact",
    },

    // Header
    header: {
      toggleTheme: "Toggle Theme", // تم تصحيح الكتابة
      contactButton: "Contact Me",
    },

    // Hero Section
    hero: {
      title: "UX/UI Designer Portfolio",
      subtitle: "UX · UI · Frontend",
      description: `Welcome to my creative portfolio! Here you'll find my **UX/UI design projects**,
      as well as the **Frontend applications** I've built using modern technologies.
      You can also upload and download my **CV**, and reach me directly via WhatsApp.`, // تم تحسين الصياغة والوضوح
      exploreButton: "Explore My Work",
      contactButton: "Contact Me Now",
      interactiveDemo: "Hanan Awad",
      demoDescription: `An example of a modern, smooth, and interactive interface design —
      ready to showcase your creative projects.`, // تم تحسين الصياغة
    },

    // Projects Section
    projects: {
      title: "Design Projects (UX/UI)",
      viewProject: "View Project",
      liveDemo: "Live Demo",
    },

    // Apps Section
    apps: {
      title: "Frontend Applications",
      viewProject: "View Project",
      liveDemo: "Live Demo",
    },

    // CV Section
    cv: {
      title: "CV / Resume", // إضافة Resume كخيار
      uploadTitle: "Upload & Download CV",
      uploadDescription:
        "You can upload your CV file here to download later. The system supports PDF and DOCX files.", // تم إضافة نقطة نهاية
      uploadButton: "📁 Upload CV File",
      downloadButton: "⬇️ Download CV",
      deleteButton: "🗑️ Delete File",
      uploadSuccess: "File uploaded successfully!",
      fileName: "File Name", // تم إضافة Name للوضوح
      fileSize: "Size",
      // note: "Note",
      // noteText:
      //   "This version works locally in the browser only. For permanent storage, you'll need to set up a server or use hosting services.",
    },

    // Contact Section
    contact: {
      title: "Contact Me",
      whatsappTitle: "Message Me on WhatsApp",
      whatsappDescription:
        "Click the button to open a direct WhatsApp conversation. You can change the number in the code.",
      whatsappButton: "📱 Send WhatsApp Message",
      customMessage: "Or write a custom message:", // تعديل المفتاح ليطابق العربي
      customMessagePlaceholder: "Type your message here...",
      linksTitle: "Quick Links",
      linksDescription:
        "Follow my latest work and projects on different platforms.", // تم إضافة نقطة نهاية
      behanceDesc: "Design & Interface Projects (UX/UI)", // توضيح أن Behance لمشاريع الـ UX/UI
      githubDesc: "Code & Software Projects (Frontend)", // توضيح أن GitHub لمشاريع الـ Frontend
      linkedinDesc: "Professional Profile & Experience",
    },

    // Footer
    footer: {
      thankYou: "Thank You for Visiting Hanan Awad's Portfolio",
      subtitle:
        "UX/UI Designer & Frontend Developer specializing in modern web technologies.", // تم تحسين الصياغة وإضافة نقطة نهاية
      copyright:
        "© {year} — Built with React & Tailwind CSS — Designed by Hanan Awad",
    },

    // Sample Projects Data
    sampleProjects: {
      project1: {
        title: "E-commerce Website Redesign",
        desc: "Full UX/UI design for a modern e-commerce platform, focusing on a smooth and engaging shopping experience.", // ترجمة أكثر تفصيلاً ودقة
      },
      project2: {
        title: "Real Estate Platform – UX/UI Design",
        desc: "UX/UI design for a real estate marketplace, emphasizing property viewing and a seamless user browsing experience.", // ترجمة أكثر تفصيلاً ودقة
      },
      project3: {
        title: "Hafsa Restoran:",
        desc: "Designing and developing a modern and engaging user interface for Hafsa Restoran's fast food delivery services website.", // ترجمة أكثر تفصيلاً ودقة
      },
      project4: {
        title: "Restaurant Admin Dashboard – UX/UI Design",
        desc: "UX/UI design for a restaurant management dashboard, including tools for order management, inventory, and performance tracking.", // ترجمة أكثر تفصيلاً ودقة
      },
      project5: {
        title: "Delivery APP – UX/UI Design",
        desc: "An app for fast and easy delivery of all types of orders with real-time tracking.", // ترجمة أكثر تفصيلاً ودقة
      },
      project6: {
        title: "Dashboard: Developer Task Management & Analytics",
        desc: "Design and implementation of an integrated Dashboard for EITOP, aiming to track and manage projects, statistics, and financial goals.", // ترجمة أكثر تفصيلاً ودقة
      },

      project7: {
        title: "Eltop: The Gateway to Innovation and Development",
        desc: "Design and implementation of a user interface for Eltop World, a comprehensive digital agency showcasing its technical services.", // ترجمة أكثر تفصيلاً ودقة
      },
    },
  },
};


// export const translations = {
//   ar: {
//     // Navigation
//     nav: {
//       projects: "المشاريع",
//       apps: "التطبيقات",
//       cv: "السيرة الذاتية",
//       contact: "تواصل معي",
//     },

//     // Header
//     header: {
//       toggleTheme: "تغيير الوضع",
//       contactButton: "تواصل معي",
//     },

//     // Hero Section
//     hero: {
//       title: "بورتفوليو مصممة ومطورة واجهات",
//       subtitle: "UX · UI · Frontend",
//       description: `مرحبًا بك في حافظتي الإبداعية! هنا تجد مشاريعي في مجال تصميم
//       تجربة المستخدم والواجهات، بالإضافة إلى التطبيقات التي طورتها
//       باستخدام التقنيات الحديثة. يمكنك أيضًا رفع وتحميل السيرة الذاتية
//       والتواصل معي مباشرة عبر الواتساب.`,
//       exploreButton: "استكشف مشاريعي",
//       contactButton: "تواصل معي الآن",
//       interactiveDemo: "معاينة تفاعلية",
//       demoDescription: `مثال على تصم sysم واجهة تفاعلية حديثة وسلسة — جاهزة لأن تحتوي
//       على مشاريعك الإبداعية`,
//     },

//     // Projects Section
//     projects: {
//       title: "مشاريع التصميم (UX/UI)",
//       viewProject: "عرض المشروع",
//       liveDemo: "عرض مباشر",
//     },

//     // Apps Section
//     apps: {
//       title: "تطبيقات فرونت إند",
//       viewProject: "عرض المشروع",
//       liveDemo: "عرض مباشر",
//     },

//     // CV Section
//     cv: {
//       title: "السيرة الذاتية",
//       uploadTitle: "رفع وتحميل السيرة الذاتية",
//       uploadDescription:
//         "يمكنك رفع ملف السيرة الذاتية هنا لتحميله لاحقًا. يدعم النظام ملفات PDF و DOCX",
//       uploadButton: "📁 رفع ملف السيرة الذاتية",
//       downloadButton: "⬇️ تحميل السيرة الذاتية",
//       deleteButton: "🗑️ حذف الملف",
//       uploadSuccess: "تم رفع الملف بنجاح!",
//       fileName: "الملف",
//       fileSize: "الحجم",
//       note: "ملاحظة",
//       noteText:
//         "هذه النسخة تعمل محليًا على المتصفح فقط. للحفظ الدائم، ستحتاج لإعداد خادم أو استخدام خدمات الاستضافة.",
//     },

//     // Contact Section
//     contact: {
//       title: "تواصل معي",
//       whatsappTitle: "تواصل معي على الواتساب",
//       whatsappDescription:
//         "اضغط على الزر لفتح محادثة مباشرة على الواتساب. يمكنك تغيير الرقم في الكود.",
//       whatsappButton: "📱 أرسل رسالة على الواتساب",
//       customMessage: "أو اكتب رسالة مخصصة:",
//       customMessagePlaceholder: "اكتب رسالتك هنا...",
//       linksTitle: "روابط سريعة",
//       linksDescription: "تابع أحدث أعمالي ومشاريعي على المنصات المختلفة",
//       behanceDesc: "مشاريع التصميم والواجهات",
//       githubDesc: "الكود والمشاريع البرمجية",
//       linkedinDesc: "الملف المهني والخبرات",
//       rememberText: "تذكر",
//       rememberNote:
//         "استبدل هذه الروابط بروابط حسابك الحقيقية على المنصات المختلفة.",
//     },

//     // Footer
//     footer: {
//       thankYou: "شكرًا لزيارتك بورتفوليو هنادي",
//       subtitle: "مصممة ومطورة واجهات متخصصة في UX/UI و Frontend Development",
//       copyright: "© {year} — مبني بـ React & Tailwind CSS — تصميم وإبداع هنادي",
//     },

//     // Sample Projects Data
//     sampleProjects: {
//       project1: {
//         title: "تصميم جديد لموقع التجارة الإلكترونية",
//         desc: "تصميم واجهة وتجربة مستخدم لمتجر إلكتروني حديث، مع التركيز على تجربة تسوق سلسة وجذاب. المشروع قيد التنفيذ. ",
//       },
//       project2: {
//         title: "Real Estate Platform – UX/UI Design",
//         desc: "تصميم واجهة وتجربة مستخدم لمنصة عقارية، مع التركيز على عرض العقارات وتجربة تصفح سلسة للمستخدم. المشروع قيد التنفيذ.",
//       },
//       project3: {
//         title: "Hafsa Restoran: تصميم واجهة مطعم لخدمات التوصيل",
//         desc: "تصميم وتطوير واجهة مستخدم عصرية ومحفزة لموقع مطعم Hafsa Restoran متخصص في خدمات توصيل الطعام السريعة.",
//       },
//       project4: {
//         title: "Restaurant Admin Dashboard – UX/UI Design",
//         desc: "تصميم واجهة وتجربة مستخدم للوحة تحكم إدارة المطعم، مع أدوات لإدارة الطلبات والمخزون ومتابعة أداء المطعم. المشروع قيد التنفيذ.",
//       },
//       project5: {
//         title: "Dashboard: واجهة تحليل وإدارة مهام المطورين",
//         desc: "تصميم وتنفيذ لوحة تحكم (Dashboard) متكاملة لنظام EITOP الإداري، تهدف إلى تتبع وإدارة المشاريع، الإحصائيات، والأهداف المالية للمستخدمين.",
//       },
//       project6: {
//         title: "إلتوب: بوابة الابتكار والتطوير",
//         desc: "تصميم وتنفيذ واجهة مستخدم لموقع وكالة رقمية شاملة (Eltop World) تعرض خدماتها الفنية والتقنية.",
//       },
//     },
//   },

//   en: {
//     // Navigation
//     nav: {
//       projects: "Projects",
//       apps: "Apps",
//       cv: "CV",
//       contact: "Contact",
//     },

//     // Header
//     header: {
//       toggleTheme: "toggle theme",
//       contactButton: "Contact Me",
//     },

//     // Hero Section
//     hero: {
//       title: "UX/UI Designer & Frontend Developer Portfolio",
//       subtitle: "UX · UI · Frontend",
//       description: `Welcome to my creative portfolio! Here you'll find my design projects in UX/UI,
//       as well as applications that I've built using modern technologies. You can also
//       upload and download your CV, and communicate with me directly via WhatsApp.`,
//       exploreButton: "Explore My Work",
//       contactButton: "Contact Me Now",
//       interactiveDemo: "Interactive Demo",
//       demoDescription: `An example of modern, smooth interactive interface design —
//       ready to contain your creative projects`,
//     },

//     // Projects Section
//     projects: {
//       title: "Design Projects (UX/UI)",
//       viewProject: "View Project",
//       liveDemo: "Live Demo",
//     },

//     // Apps Section
//     apps: {
//       title: "Frontend Applications",
//       viewProject: "View Project",
//       liveDemo: "Live Demo",
//     },

//     // CV Section
//     cv: {
//       title: "CV",
//       uploadTitle: "Upload & Download CV",
//       uploadDescription:
//         "You can upload your CV file here to download later. The system supports PDF and DOCX files",
//       uploadButton: "📁 Upload CV File",
//       downloadButton: "⬇️ Download CV",
//       deleteButton: "🗑️ Delete File",
//       uploadSuccess: "File uploaded successfully!",
//       fileName: "File",
//       fileSize: "Size",
//       note: "Note",
//       noteText:
//         "This version works locally in the browser only. For permanent storage, you'll need to set up a server or use hosting services.",
//     },

//     // Contact Section
//     contact: {
//       title: "Contact Me",
//       whatsappTitle: "Message Me on WhatsApp",
//       whatsappDescription:
//         "Click the button to open a direct WhatsApp conversation. You can change the number in the code.",
//       whatsappButton: "📱 Send WhatsApp Message",
//       newlinePlaceholder: "Or write a custom message:",
//       customMessagePlaceholder: "Type your message here...",
//       linksTitle: "Quick Links",
//       linksDescription:
//         "Follow my latest work and projects on different platforms",
//       behanceDesc: "Design & Interface Projects",
//       githubDesc: "Code & Programming Projects",
//       linkedinDesc: "Professional Profile & Experience",
//       rememberText: "Remember",
//       rememberNote:
//         "Replace these links with your real account links on different platforms.",
//     },

//     // Footer
//     footer: {
//       thankYou: "Thank You for Visiting Hanadi's Portfolio",
//       subtitle:
//         "UX/UI Designer & Frontend Developer specializing in modern web technologies",
//       copyright:
//         "© {year} — Built with React & Tailwind CSS — Designed by Hanadi",
//     },

//     // Sample Projects Data
//     sampleProjects: {
//       project1: {
//         title: "E-commerce Website Redesign",
//         desc: "Case study & wireframes",
//       },
//       project2: {
//         title: "Dashboard UI Kit",
//         desc: "Design system & components",
//       },
//       project3: {
//         title: "Recipe Mobile App",
//         desc: "Mobile app with React Native",
//       },
//       project4: {
//         siteFlow: "Booking Platform Flow",
//         desc: "User flows & interactions",
//       },
//       project5: {
//         title: "Interactive Portfolio Site",
//         desc: "Full interactive website",
//       },
//       project6: {
//         title: "Task Management App",
//         desc: "Task management app with database",
//       },
//     },
//   },
// };



