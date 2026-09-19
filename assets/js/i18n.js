/* ==========================================================================
   i18n.js — محرك الترجمة وتبديل الاتجاه (RTL / LTR)
   Translation engine + direction switcher for Mindful Blog
   ========================================================================== */

const I18N = {
  ar: {
    /* ---------- الترويسة والتنقل ---------- */
    "brand.name": "مدوّنة وعي",
    "brand.tagline": "علم النفس · تطوير الذات · لغة الجسد",
    "nav.home": "الرئيسية",
    "nav.articles": "المقالات",
    "nav.psychology": "علم النفس",
    "nav.selfDev": "تطوير الذات",
    "nav.bodyLang": "لغة الجسد",
    "nav.relationships": "العلاقات",
    "nav.productivity": "الإنتاجية",
    "nav.tools": "الأدوات التفاعلية",
    "nav.quizzes": "الاختبارات الذاتية",
    "nav.challenge": "تحدّي 21 يوماً",
    "nav.bodylang": "مكتبة لغة الجسد",
    "nav.ask": "اسأل بسرية",
    "nav.about": "من نحن",
    "nav.privacy": "سياسة الخصوصية",
    "nav.menu": "القائمة",
    "nav.search": "ابحث في المقالات…",
    "lang.switch": "English",
    "lang.switchTitle": "التبديل إلى الإنجليزية",
    "mode.toDark": "تفعيل الوضع الداكن",
    "mode.toLight": "تفعيل الوضع الفاتح",

    /* ---------- الصفحة الرئيسية ---------- */
    "hero.badge": "مدوّنة تثقيفية غير طبية",
    "hero.title": "افهم عقلك… لتفهم حياتك",
    "hero.subtitle":
      "مقالات مبسّطة وموثوقة في علم النفس وتطوير الذات ولغة الجسد والعلاقات الإنسانية، مكتوبة بلغة قريبة من القارئ العربي ومترجمة إلى الإنجليزية.",
    "hero.cta.read": "ابدأ القراءة",
    "hero.cta.about": "تعرّف علينا",
    "section.featured": "مقالات مختارة",
    "section.featuredSub": "اختيارات المحرر لهذا الأسبوع",
    "section.latest": "أحدث المقالات",
    "section.latestSub": "جديد المدوّنة أولاً بأول",
    "section.categories": "تصفّح حسب الموضوع",
    "stat.articles": "مقال منشور",
    "stat.categories": "مواضيع رئيسية",
    "stat.languages": "لغتان للاختيار",
    "filter.all": "الكل",
    "posts.count": "مقال",
    "empty.results": "لا توجد مقالات مطابقة لبحثك.",

    /* ---------- بطاقة المقال ---------- */
    "card.read": "اقرأ المقال",
    "card.min": "دقيقة قراءة",
    "card.by": "بقلم",
    "card.author": "فريق تحرير وعي",

    /* ---------- صفحة المقال ---------- */
    "article.back": "العودة إلى الرئيسية",
    "article.related": "مقالات ذات صلة",
    "article.publishedOn": "نُشر في",
    "article.updatedOn": "آخر تحديث",
    "article.share": "شارك المقال",
    "article.disclaimerTitle": "تنبيه مهم",
    "article.disclaimer":
      "هذا المقال تثقيفي عام ولا يُغني عن الاستشارة النفسية المتخصصة. إن كنت تمرّ بأزمة نفسية أو أفكار مؤلمة، يرجى مراجعة مختصّ مرخّص في بلدك.",
    "article.progress": "نسبة القراءة",
    "article.toc": "محتويات المقال",
    "article.notFound": "لم يتم العثور على المقال المطلوب.",
    "article.notFoundHint": "قد يكون الرابط قديماً. تصفّح أحدث المقالات من الصفحة الرئيسية.",

    /* ---------- الإعلانات ---------- */
    "ads.label": "مساحة إعلانية — Google AdSense",
    "ads.note": "استبدل هذا العنصر بكود وحدة AdSense بعد الموافقة على موقعك.",

    /* ---------- النشرة البريدية ---------- */
    "newsletter.title": "اشترك في النشرة البريدية",
    "newsletter.text": "ملخّص أسبوعي بأهم المقالات، بدون إزعاج ويمكنك إلغاء الاشتراك في أي وقت.",
    "newsletter.email": "بريدك الإلكتروني",
    "newsletter.submit": "اشترك الآن",
    "newsletter.thanks": "شكراً لك! تم تسجيل بريدك بنجاح.",
    "newsletter.error": "يرجى إدخال بريد إلكتروني صحيح.",

    /* ---------- الأدوات التفاعلية: ترويسات الصفحات ---------- */
    "tools.hero.badge": "أدوات تفاعلية مجانية",
    "tools.disclaimer": "هذه الأدوات تثقيفية وليست تشخيصاً طبياً. نتائجها استرشادية ولا تُغني عن استشارة مختصّ مرخّص.",

    "page.quizzes.title": "الاختبارات الذاتية السريعة",
    "page.quizzes.subtitle": "اختبارات قصيرة تساعدك على فهم حالتك النفسية ومهاراتك، بواجهة واضحة ونتيجة فورية وإرشاد عملي.",

    "page.challenge.title": "تحدّي الـ 21 يوماً لتطوير الذات",
    "page.challenge.subtitle": "برنامج عملي مقسّم إلى ثلاثة أسابيع، بمهمة يومية واحدة بسيطة. علّم إنجازك ليُحفظ تلقائياً في متصفحك.",

    "page.bodylang.title": "مكتبة لغة الجسد المرئية",
    "page.bodylang.subtitle": "بطاقات مصوّرة تشرح أبرز الإشارات الجسدية ودلالاتها، مع السياق الذي تظهر فيه وكيفية استخدامها بوعي.",

    "page.ask.title": "زاوية سؤال وجواب مجهولة",
    "page.ask.subtitle": "اطرح سؤالك بسرية تامة وبدون تسجيل أي بيانات شخصية، وتصفّح إجابات تثقيفية على أسئلة شائعة.",

    /* ---------- الاختبارات ---------- */
    "quiz.questions": "أسئلة",
    "quiz.time": "دقيقتان تقريباً",
    "quiz.start": "ابدأ الاختبار",
    "quiz.exit": "إنهاء الاختبار",
    "quiz.prev": "السابق",
    "quiz.next": "التالي",
    "quiz.finish": "اعرض النتيجة",
    "quiz.tip": "خطوة عملية",
    "quiz.retake": "إعادة الاختبار",
    "quiz.others": "اختبارات أخرى",
    "quiz.disclaimer": "النتيجة استرشادية وتثقيفية وليست تشخيصاً طبياً.",

    /* ---------- تحدّي 21 يوماً ---------- */
    "challenge.progress": "تقدّمك في التحدّي",
    "challenge.reset": "إعادة الضبط",
    "challenge.week": "الأسبوع",
    "challenge.day": "اليوم",
    "challenge.tipLabel": "نصيحة:",

    /* ---------- مكتبة لغة الجسد ---------- */
    "bl.more": "اعرف المزيد",
    "bl.less": "إظهار أقل",

    /* ---------- زاوية السؤال والجواب ---------- */
    "ask.qaTitle": "أسئلة وأجوبة منشورة",
    "ask.qaSub": "نماذج من استشارات مجهولة أجبنا عليها — ربما تجد فيها ما يشبه سؤالك.",
    "ask.formTitle": "أرسل استشارتك بسرية تامة",
    "ask.banner": "🔒 لا نطلب اسمك ولا بريدك ولا أي بيانات تعريفية. رسالتك تُرسل من جهازك مباشرة إلى بريد فريق التحرير، ولا تُخزَّن على الموقع إطلاقاً.",
    "ask.field.topic": "الموضوع",
    "ask.field.age": "الفئة العمرية",
    "ask.field.message": "سؤالك أو استشارتك",
    "ask.placeholder.topic": "اختر الموضوع…",
    "ask.placeholder.age": "اختر فئتك العمرية…",
    "ask.placeholder.message": "اكتب سؤالك بتفصيل كافٍ (20 حرفاً على الأقل)…",
    "ask.topic.anxiety": "القلق والضغوط",
    "ask.topic.relationships": "العلاقات والأسرة",
    "ask.topic.selfdev": "تطوير الذات والعادات",
    "ask.topic.bodylang": "لغة الجسد والتواصل",
    "ask.topic.productivity": "الإنتاجية والعمل",
    "ask.topic.other": "موضوع آخر",
    "ask.age.u18": "أقل من 18",
    "ask.age.1825": "18 – 25",
    "ask.age.2635": "26 – 35",
    "ask.age.3650": "36 – 50",
    "ask.age.50p": "أكثر من 50",
    "ask.age.prefer": "أفضّل عدم التحديد",
    "ask.consent": "أوافق على أن تُستخدم رسالتي — بشكل مجهول تماماً — لأغراض تثقيفية، وأفهم أن الموقع لا يقدّم تشخيصاً أو علاجاً طبياً.",
    "ask.submit": "إرسال بسرية",
    "ask.err.topic": "اختر الموضوع",
    "ask.err.age": "اختر الفئة العمرية",
    "ask.err.message": "اكتب سؤالاً (20 حرفاً على الأقل)",
    "ask.err.consent": "يلزم الموافقة على التنبيه",
    "ask.mail.subject": "استشارة مجهولة من مدوّنة وعي",
    "ask.mail.ref": "رقم المرجع",
    "ask.mail.anon": "أُرسلت بشكل مجهول عبر موقع مدوّنة وعي",
    "ask.modal.close": "إغلاق",
    "ask.modal.title": "تم تجهيز رسالتك السرية",
    "ask.modal.text": "رسالتك جاهزة للإرسال. اضغط الزر لفتح تطبيق البريد وإرسالها مباشرة إلى فريق التحرير. لا نحفظ أي نسخة على الموقع.",
    "ask.modal.ref": "احتفظ بهذا الرقم لمتابعة ردّنا:",
    "ask.modal.openMail": "فتح البريد وإرسال",
    "ask.modal.copy": "نسخ نص الرسالة",
    "ask.modal.copied": "تم النسخ ✓",
    "ask.modal.note": "إن كنت تمرّ بأزمة نفسية حادّة أو أفكار مؤلمة، فالرجاء التواصل فوراً مع مختصّ مرخّص أو خط مساعدة في بلدك.",

    /* ---------- التذييل ---------- */
    "footer.about":
      "مدوّنة وعي منصّة تثقيفية عربية/إنجليزية تهدف إلى نشر الوعي النفسي ومهارات تطوير الذات وفهم لغة الجسد وبناء علاقات إنسانية صحية. المحتوى المعروض تعليمي ولا يُعدّ استشارة طبية.",
    "footer.links": "روابط سريعة",
    "footer.topics": "المواضيع",
    "footer.contact": "تواصل معنا",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.madeWith": "صُنع بشغف لمساعدة القارئ على فهم نفسه.",
    "footer.langNote": "هذا الموقع متوفّر بالعربية والإنجليزية — استخدم زر تبديل اللغة في الأعلى."
  },

  en: {
    /* ---------- Header & navigation ---------- */
    "brand.name": "Mindful Blog",
    "brand.tagline": "Psychology · Self-Development · Body Language",
    "nav.home": "Home",
    "nav.articles": "Articles",
    "nav.psychology": "Psychology",
    "nav.selfDev": "Self-Development",
    "nav.bodyLang": "Body Language",
    "nav.relationships": "Relationships",
    "nav.productivity": "Productivity",
    "nav.tools": "Interactive Tools",
    "nav.quizzes": "Self-Assessment Quizzes",
    "nav.challenge": "21-Day Challenge",
    "nav.bodylang": "Body Language Library",
    "nav.ask": "Ask Privately",
    "nav.about": "About Us",
    "nav.privacy": "Privacy Policy",
    "nav.menu": "Menu",
    "nav.search": "Search articles…",
    "lang.switch": "العربية",
    "lang.switchTitle": "Switch to Arabic",
    "mode.toDark": "Switch to dark mode",
    "mode.toLight": "Switch to light mode",

    /* ---------- Home ---------- */
    "hero.badge": "Educational blog — not medical advice",
    "hero.title": "Understand your mind, reshape your life",
    "hero.subtitle":
      "Clear, reliable articles on psychology, self-development, body language and human relationships — written for readers in two languages.",
    "hero.cta.read": "Start reading",
    "hero.cta.about": "About us",
    "section.featured": "Featured articles",
    "section.featuredSub": "Editor's picks this week",
    "section.latest": "Latest articles",
    "section.latestSub": "Fresh posts, newest first",
    "section.categories": "Browse by topic",
    "stat.articles": "published articles",
    "stat.categories": "core topics",
    "stat.languages": "languages available",
    "filter.all": "All",
    "posts.count": "posts",
    "empty.results": "No articles match your search.",

    /* ---------- Article card ---------- */
    "card.read": "Read article",
    "card.min": "min read",
    "card.by": "By",
    "card.author": "Mindful Blog Editorial Team",

    /* ---------- Article page ---------- */
    "article.back": "Back to home",
    "article.related": "Related articles",
    "article.publishedOn": "Published on",
    "article.updatedOn": "Last updated",
    "article.share": "Share this article",
    "article.disclaimerTitle": "Important notice",
    "article.disclaimer":
      "This article is general educational content and is not a substitute for professional psychological advice. If you are going through a crisis, please contact a licensed professional in your country.",
    "article.progress": "Reading progress",
    "article.toc": "In this article",
    "article.notFound": "The requested article could not be found.",
    "article.notFoundHint": "The link may be outdated. Browse the latest posts from the home page.",

    /* ---------- Ads ---------- */
    "ads.label": "Advertisement space — Google AdSense",
    "ads.note": "Replace this block with your AdSense unit code once your site is approved.",

    /* ---------- Newsletter ---------- */
    "newsletter.title": "Subscribe to our newsletter",
    "newsletter.text": "A weekly digest of our best articles. No spam, unsubscribe anytime.",
    "newsletter.email": "Your email address",
    "newsletter.submit": "Subscribe",
    "newsletter.thanks": "Thank you! Your email has been recorded.",
    "newsletter.error": "Please enter a valid email address.",

    /* ---------- Interactive tools: page heroes ---------- */
    "tools.hero.badge": "Free interactive tools",
    "tools.disclaimer": "These tools are educational, not a medical diagnosis. Their results are indicative and never replace a licensed professional.",

    "page.quizzes.title": "Quick Self-Assessment Quizzes",
    "page.quizzes.subtitle": "Short quizzes that help you understand your state and skills — with a clear interface, an instant result and practical guidance.",

    "page.challenge.title": "21-Day Self-Development Challenge",
    "page.challenge.subtitle": "A practical program in three weeks, one simple daily task. Tick your progress and it's saved automatically in your browser.",

    "page.bodylang.title": "Visual Body-Language Library",
    "page.bodylang.subtitle": "Illustrated cards explaining key body signals and what they mean, with the context they appear in and how to use them consciously.",

    "page.ask.title": "Anonymous Q&A Corner",
    "page.ask.subtitle": "Ask your question in full privacy without registering any personal data, and browse educational answers to common questions.",

    /* ---------- Quizzes ---------- */
    "quiz.questions": "questions",
    "quiz.time": "about 2 minutes",
    "quiz.start": "Start quiz",
    "quiz.exit": "Exit quiz",
    "quiz.prev": "Previous",
    "quiz.next": "Next",
    "quiz.finish": "Show result",
    "quiz.tip": "Practical step",
    "quiz.retake": "Retake quiz",
    "quiz.others": "Other quizzes",
    "quiz.disclaimer": "This result is indicative and educational, not a medical diagnosis.",

    /* ---------- 21-day challenge ---------- */
    "challenge.progress": "Your challenge progress",
    "challenge.reset": "Reset",
    "challenge.week": "Week",
    "challenge.day": "Day",
    "challenge.tipLabel": "Tip:",

    /* ---------- Body-language library ---------- */
    "bl.more": "Read more",
    "bl.less": "Show less",

    /* ---------- Q&A corner ---------- */
    "ask.qaTitle": "Published Q&A",
    "ask.qaSub": "Samples of anonymous consultations we've answered — you may find one close to your question.",
    "ask.formTitle": "Send your consultation in full privacy",
    "ask.banner": "🔒 We never ask for your name, email or any identifying data. Your message is sent from your device directly to our editors' inbox and is never stored on the site.",
    "ask.field.topic": "Topic",
    "ask.field.age": "Age band",
    "ask.field.message": "Your question or consultation",
    "ask.placeholder.topic": "Choose a topic…",
    "ask.placeholder.age": "Choose your age band…",
    "ask.placeholder.message": "Write your question with enough detail (at least 20 characters)…",
    "ask.topic.anxiety": "Anxiety & stress",
    "ask.topic.relationships": "Relationships & family",
    "ask.topic.selfdev": "Self-development & habits",
    "ask.topic.bodylang": "Body language & communication",
    "ask.topic.productivity": "Productivity & work",
    "ask.topic.other": "Other topic",
    "ask.age.u18": "Under 18",
    "ask.age.1825": "18 – 25",
    "ask.age.2635": "26 – 35",
    "ask.age.3650": "36 – 50",
    "ask.age.50p": "Over 50",
    "ask.age.prefer": "Prefer not to say",
    "ask.consent": "I agree that my message may be used — fully anonymized — for educational purposes, and I understand the site offers no medical diagnosis or treatment.",
    "ask.submit": "Send privately",
    "ask.err.topic": "Choose a topic",
    "ask.err.age": "Choose an age band",
    "ask.err.message": "Write a question (at least 20 characters)",
    "ask.err.consent": "You must accept the notice",
    "ask.mail.subject": "Anonymous consultation from Mindful Blog",
    "ask.mail.ref": "Reference number",
    "ask.mail.anon": "Sent anonymously via the Mindful Blog website",
    "ask.modal.close": "Close",
    "ask.modal.title": "Your private message is ready",
    "ask.modal.text": "Your message is ready to send. Press the button to open your mail app and send it directly to our editors. We keep no copy on the site.",
    "ask.modal.ref": "Keep this number to follow up on our reply:",
    "ask.modal.openMail": "Open mail & send",
    "ask.modal.copy": "Copy message text",
    "ask.modal.copied": "Copied ✓",
    "ask.modal.note": "If you are going through an acute crisis or painful thoughts, please contact a licensed professional or a helpline in your country right away.",

    /* ---------- Footer ---------- */
    "footer.about":
      "Mindful Blog is a bilingual educational platform dedicated to spreading psychological awareness, self-development skills, body-language literacy and healthy human relationships. All content is educational and not medical advice.",
    "footer.links": "Quick links",
    "footer.topics": "Topics",
    "footer.contact": "Contact us",
    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Made with care to help readers understand themselves.",
    "footer.langNote": "This site is available in Arabic and English — use the language switcher at the top."
  }
};

/* التصنيفات — Categories */
const CATEGORIES = {
  psychology: { ar: "علم النفس", en: "Psychology", color: "violet", nav: "psychology", cover: 5 },
  selfdev: { ar: "تطوير الذات", en: "Self-Development", color: "amber", nav: "selfDev", cover: 2 },
  bodylanguage: { ar: "لغة الجسد", en: "Body Language", color: "teal", nav: "bodyLang", cover: 3 },
  relationships: { ar: "العلاقات الإنسانية", en: "Relationships", color: "rose", nav: "relationships", cover: 4 },
  productivity: { ar: "الإنتاجية", en: "Productivity", color: "sky", nav: "productivity", cover: 7 }
};

const LANG_KEY = "mindful_lang";
const DIR_KEY = "mindful_dir";

let currentLang = "ar";

/* ---------- الدوال الأساسية ---------- */
function detectInitialLang() {
  const stored = localStorage.getItem(LANG_KEY);
  if (stored === "ar" || stored === "en") return stored;
  const nav = (navigator.language || "ar").toLowerCase();
  return nav.startsWith("ar") ? "ar" : "en";
}

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
}

function applyLang(lang, options = {}) {
  currentLang = lang === "en" ? "en" : "ar";
  const html = document.documentElement;

  html.lang = currentLang;
  html.dir = currentLang === "ar" ? "rtl" : "ltr";
  html.classList.toggle("lang-ar", currentLang === "ar");
  html.classList.toggle("lang-en", currentLang === "en");

  /* 0) إعادة رسم المحتوى الديناميكي قبل تمرير النصوص */
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: currentLang } }));

  /* 1) نصوص الواجهة عبر data-i18n */
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(el.dataset.i18n);
    if (el.dataset.i18nTarget === "html") el.innerHTML = value;
    else el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", t(el.dataset.i18nTitle));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });

  /* 2) الكتل ثنائية اللغة عبر data-lang */
  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.hidden = el.dataset.lang !== currentLang;
  });

  /* 3) عنوان الصفحة (يدعم عنوان المقال في صفحة المقال) */
  const siteAr = document.body.dataset.titleAr;
  const siteEn = document.body.dataset.titleEn;
  const artAr = document.body.dataset.articleTitleAr;
  const artEn = document.body.dataset.articleTitleEn;
  if (siteAr && siteEn) {
    document.title =
      currentLang === "ar"
        ? [artAr, siteAr].filter(Boolean).join(" | ")
        : [artEn, siteEn].filter(Boolean).join(" | ");
  }

  if (options.persist !== false) {
    localStorage.setItem(LANG_KEY, currentLang);
    localStorage.setItem(DIR_KEY, html.dir);
  }
}

function toggleLang() {
  applyLang(currentLang === "ar" ? "en" : "ar");
  const btn = document.querySelector("[data-lang-toggle]");
  if (btn) btn.focus();
}

/* ---------- قراءة اللغة من الرابط ---------- */
function readLangFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  return lang === "ar" || lang === "en" ? lang : null;
}

/* ---------- التهيئة المبكرة (لمنع وميض الاتجاه) ---------- */
(function initEarly() {
  const lang = readLangFromUrl() || detectInitialLang();
  currentLang = lang;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  html.classList.add(lang === "ar" ? "lang-ar" : "lang-en");
})();

document.addEventListener("DOMContentLoaded", () => {
  applyLang(readLangFromUrl() || detectInitialLang(), { persist: false });
});

/* تفويض الأحداث: زر تبديل اللغة يُعاد رسمه مع الترويسة */
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-lang-toggle]");
  if (!btn) return;
  e.preventDefault();
  toggleLang();
});
