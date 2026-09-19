/* ==========================================================================
   tools-data.js — بيانات الأقسام التفاعلية (اختبارات، تحدّي 21 يوم،
   مكتبة لغة الجسد، وأسئلة مجهولة). كلّ المحتوى ثنائي اللغة.
   ========================================================================== */

/* ------------------------------------------------------------------
   1) الاختبارات الذاتية السريعة — QUIZZES
   كل سؤال له 4 خيارات بقيمة 0–3. المجموع الأقصى = عدد الأسئلة × 3.
   ------------------------------------------------------------------ */
const QUIZZES = [
  {
    id: "stress",
    icon: "🌊",
    color: "violet",
    category: "psychology",
    title: { ar: "مقياس مستوى التوتر", en: "Stress Level Check" },
    desc: {
      ar: "ستة أسئلة سريعة تساعدك على قراءة مستوى التوتر الذي تعيشه هذه الفترة، وما إذا كان صحياً أم يستدعي الانتباه.",
      en: "Six quick questions to read the level of stress you're carrying right now — and whether it's healthy or needs attention."
    },
    questions: [
      {
        q: { ar: "كيف تنام في الأسبوع الماضي؟", en: "How have you been sleeping this past week?" },
        options: [
          { text: { ar: "أنام بسهولة وأستيقظ مرتاحاً", en: "I fall asleep easily and wake refreshed" }, score: 0 },
          { text: { ar: "نومي مقبول مع بعض التقطّع", en: "My sleep is okay with some interruptions" }, score: 1 },
          { text: { ar: "أجد صعوبة في النوم أو الاستمرار فيه", en: "I struggle to fall or stay asleep" }, score: 2 },
          { text: { ar: "الأرق يرافقني أغلب الليالي", en: "Insomnia keeps me up most nights" }, score: 3 }
        ]
      },
      {
        q: { ar: "عندما تفكر في مهامك، ماذا تشعر؟", en: "When you think about your tasks, what do you feel?" },
        options: [
          { text: { ar: "هدوء ووضوح في الأولويات", en: "Calm and clear about priorities" }, score: 0 },
          { text: { ar: "شيء من الضغط لكنني أتدبّر", en: "Some pressure, but I manage" }, score: 1 },
          { text: { ar: "أشعر أنني مثقل ولا أعرف من أين أبدأ", en: "I feel overloaded and don't know where to start" }, score: 2 },
          { text: { ar: "قلق دائم حتى في أوقات الراحة", en: "Constant anxiety even when resting" }, score: 3 }
        ]
      },
      {
        q: { ar: "كيف يتفاعل جسمك مع الضغط؟", en: "How does your body react to pressure?" },
        options: [
          { text: { ar: "لا أعراض جسدية ملحوظة", en: "No noticeable physical symptoms" }, score: 0 },
          { text: { ar: "شدّ خفيف في الرقبة أو الكتفين", en: "Mild tension in neck or shoulders" }, score: 1 },
          { text: { ar: "صداع أو اضطراب في المعدة أحياناً", en: "Occasional headaches or stomach upset" }, score: 2 },
          { text: { ar: "خفقان أو ضيق تنفّس متكرر", en: "Frequent palpitations or shortness of breath" }, score: 3 }
        ]
      },
      {
        q: { ar: "ما مدى قدرتك على قول «لا» للطلبات الزائدة؟", en: "How able are you to say “no” to extra demands?" },
        options: [
          { text: { ar: "أضع حدودي بسهولة", en: "I set boundaries easily" }, score: 0 },
          { text: { ar: "أرفض أحياناً وأوافق مجاملاً", en: "I sometimes decline, sometimes oblige" }, score: 1 },
          { text: { ar: "يصعب عليّ الرفض فأتحمل فوق طاقتي", en: "It's hard to refuse, so I overcommit" }, score: 2 },
          { text: { ar: "أوافق دائماً ثم أندم وأتوتر", en: "I always agree, then regret and stress" }, score: 3 }
        ]
      },
      {
        q: { ar: "كيف هو تركيزك في العمل أو الدراسة؟", en: "How is your focus at work or study?" },
        options: [
          { text: { ar: "أركّز لساعات طويلة بارتياح", en: "I focus for long stretches comfortably" }, score: 0 },
          { text: { ar: "أحتاج لفترات راحة منتظمة", en: "I need regular breaks" }, score: 1 },
          { text: { ar: "يتشتت ذهني بسرعة وأؤجل كثيراً", en: "My mind wanders fast and I procrastinate a lot" }, score: 2 },
          { text: { ar: "لا أكاد أنجز أي شيء بسبب التشتت", en: "I barely finish anything because of distraction" }, score: 3 }
        ]
      },
      {
        q: { ar: "هل لديك مساحة تستعيد فيها طاقتك؟", en: "Do you have space to recharge your energy?" },
        options: [
          { text: { ar: "نعم، أخصّص وقتاً منتظماً لنفسي", en: "Yes, I set regular time for myself" }, score: 0 },
          { text: { ar: "أحياناً حين يسمح الوقت", en: "Sometimes, when time allows" }, score: 1 },
          { text: { ar: "نادراً، أشعر أنني في سباق دائم", en: "Rarely — I feel like I'm always racing" }, score: 2 },
          { text: { ar: "لا أتذكر آخر مرة استرحت فيها", en: "I can't remember the last time I rested" }, score: 3 }
        ]
      }
    ],
    results: [
      {
        min: 0,
        max: 6,
        title: { ar: "توتر منخفض — توازن جيد", en: "Low stress — well balanced" },
        text: {
          ar: "تبدو في حالة توازن جيدة هذه الفترة. مستوى توترك ضمن النطاق الصحي الذي يُبقيك نشيطاً دون أن يستنزفك.",
          en: "You appear well balanced right now. Your stress sits in the healthy range that keeps you alert without draining you."
        },
        tip: {
          ar: "حافظ على روتينك الحالي في النوم والراحة، واجعل منه عادة ثابتة لا تتخلّى عنها في أوقات الانشغال.",
          en: "Protect your current sleep and rest routine, and make it a fixed habit you don't drop when life gets busy."
        }
      },
      {
        min: 7,
        max: 12,
        title: { ar: "توتر متوسط — يحتاج متابعة", en: "Moderate stress — worth monitoring" },
        text: {
          ar: "تحمل قدراً ملحوظاً من الضغط. إنه مستوى يمكن إدارته، لكنه إشارة إلى أن بعض العادات تستهلكك أكثر مما تخدمك.",
          en: "You're carrying a noticeable load. It's manageable, but it signals that some habits are draining you more than serving you."
        },
        tip: {
          ar: "جرّب تمرين التنفّس 4-7-8 مرتين يومياً، وخصّص مساءً واحداً أسبوعياً بلا مهام ولا شاشات.",
          en: "Try 4-7-8 breathing twice a day, and keep one screen-free, task-free evening each week."
        }
      },
      {
        min: 13,
        max: 18,
        title: { ar: "توتر مرتفع — أولوية للعناية بنفسك", en: "High stress — make self-care a priority" },
        text: {
          ar: "مستوى توترك مرتفع وقد ينعكس على نومك وتركيزك وصحتك. لست ضعيفاً، أنت فقط تحمل أكثر مما ينبغي بمفردك.",
          en: "Your stress level is high and may be affecting your sleep, focus and health. You're not weak — you're simply carrying more than you should alone."
        },
        tip: {
          ar: "ابدأ بخطوة واحدة صغيرة اليوم: قلّل التزاماً زائداً، ونم مبكراً، وإن استمرت الأعراض فاستشارة مختصّ خطوة شجاعة.",
          en: "Start with one small step today: drop one extra commitment, sleep earlier, and if symptoms persist, seeing a professional is a courageous move."
        }
      }
    ]
  },
  {
    id: "growth",
    icon: "🌱",
    color: "amber",
    category: "selfdev",
    title: { ar: "اختبار عقلية النمو", en: "Growth Mindset Quiz" },
    desc: {
      ar: "هل تنظر إلى التحديات كفرص أم كتهديد؟ هذا الاختبار يكشف مدى تبنّيك لعقلية النمو التي تصنع الفارق في التعلّم.",
      en: "Do you see challenges as opportunities or threats? This quiz reveals how much you embrace the growth mindset that drives real learning."
    },
    questions: [
      {
        q: { ar: "عندما تفشل في مهمة، ما أول فكرة تراودك؟", en: "When you fail at a task, what's your first thought?" },
        options: [
          { text: { ar: "ماذا يمكنني أن أتعلم من هذا؟", en: "What can I learn from this?" }, score: 3 },
          { text: { ar: "سأحاول بطريقة مختلفة", en: "I'll try a different approach" }, score: 2 },
          { text: { ar: "ربما أحتاج للمساعدة", en: "Maybe I need help" }, score: 1 },
          { text: { ar: "أنا لست جيداً في هذا", en: "I'm just not good at this" }, score: 0 }
        ]
      },
      {
        q: { ar: "كيف تتعامل مع النقد البنّاء؟", en: "How do you handle constructive criticism?" },
        options: [
          { text: { ar: "أستمع له وأستفيد منه", en: "I listen and use it to improve" }, score: 3 },
          { text: { ar: "أتقبله بصدر رحب", en: "I take it well" }, score: 2 },
          { text: { ar: "أشعر بالانزعاج لكنني أصمت", en: "I feel stung but stay quiet" }, score: 1 },
          { text: { ar: "أعتبره هجوماً شخصياً", en: "I take it as a personal attack" }, score: 0 }
        ]
      },
      {
        q: { ar: "حين ترى شخصاً يتفوّق عليك في مهارة؟", en: "When you see someone outperform you at a skill?" },
        options: [
          { text: { ar: "ألهمني وأتعلّم من طريقته", en: "They inspire me and I learn from them" }, score: 3 },
          { text: { ar: "أهنّئه وأسأله كيف فعلها", en: "I congratulate them and ask how" }, score: 2 },
          { text: { ar: "أشعر بالغيرة قليلاً", en: "I feel a bit envious" }, score: 1 },
          { text: { ar: "أشعر أنني أقلّ منه", en: "I feel inferior" }, score: 0 }
        ]
      },
      {
        q: { ar: "ما موقفك من المهارات الصعبة؟", en: "What's your stance on hard skills?" },
        options: [
          { text: { ar: "الصعوبة تعني أنني أتقدّم", en: "Difficulty means I'm growing" }, score: 3 },
          { text: { ar: "أستمتع بالتحدي", en: "I enjoy the challenge" }, score: 2 },
          { text: { ar: "أتحمّلها إذا اضطررت", en: "I endure them if I must" }, score: 1 },
          { text: { ar: "أتجنّبها لأنها تُحبطني", en: "I avoid them — they frustrate me" }, score: 0 }
        ]
      },
      {
        q: { ar: "كيف تنظر إلى الجهد المبذول؟", en: "How do you view effort?" },
        options: [
          { text: { ar: "الجهد هو طريق الإتقان", en: "Effort is the path to mastery" }, score: 3 },
          { text: { ar: "الجهد مهم رغم موهبتي", en: "Effort matters despite my talent" }, score: 2 },
          { text: { ar: "أبذل جهداً فقط عند الضرورة", en: "I put in effort only when needed" }, score: 1 },
          { text: { ar: "إن احتجت للجهد فأنا غير موهوب", en: "If I need effort, I'm not talented" }, score: 0 }
        ]
      },
      {
        q: { ar: "عند مواجهة عقبة كبيرة؟", en: "When facing a big obstacle?" },
        options: [
          { text: { ar: "أبحث عن طريق بديل", en: "I look for an alternative route" }, score: 3 },
          { text: { ar: "أثابر حتى أتجاوزها", en: "I persist until I get past it" }, score: 2 },
          { text: { ar: "أنتظر أن تتحسّن الظروف", en: "I wait for conditions to improve" }, score: 1 },
          { text: { ar: "أستسلم بسرعة", en: "I give up quickly" }, score: 0 }
        ]
      }
    ],
    results: [
      {
        min: 0,
        max: 8,
        title: { ar: "عقلية ثابتة — مجال كبير للنمو", en: "Fixed mindset — big room to grow" },
        text: {
          ar: "تميل لرؤية قدراتك كصفات ثابتة، ما يجعلك تتجنّب التحدي وتخشى الخطأ. الخبر الجيّد: العقلية مهارة تُكتسب لا صفة تولد بها.",
          en: "You tend to see abilities as fixed traits, which makes you avoid challenge and fear mistakes. Good news: mindset is a learnable skill, not an innate trait."
        },
        tip: {
          ar: "أضف كلمة «بعد» إلى عباراتك: «لا أجيد هذا… بعد». هذا التحويل الصغير يعيد برمغة عقلك على إمكانية التعلّم.",
          en: "Add the word “yet” to your sentences: “I'm not good at this… yet.” This small shift rewires your brain toward learning."
        }
      },
      {
        min: 9,
        max: 14,
        title: { ar: "عقلية نامية جزئياً — في الطريق", en: "Partly growth — on your way" },
        text: {
          ar: "تملك أساساً جيداً من عقلية النمو، لكنها تتزعزع تحت الضغط أو عند المقارنة. أنت في المنطقة الأكثر قابلية للتطوّر.",
          en: "You have a solid growth foundation, but it wobbles under pressure or comparison. You're in the zone most open to development."
        },
        tip: {
          ar: "ركّز على مقارنة نفسك بنسختك السابقة فقط، وسجّل كل أسبوع مهارة تحسّنت فيها ولو قليلاً.",
          en: "Compare yourself only to your past self, and note one skill — however slightly — that improved each week."
        }
      },
      {
        min: 15,
        max: 18,
        title: { ar: "عقلية نمو قوية — استمر", en: "Strong growth mindset — keep going" },
        text: {
          ar: "تتبنّى عقلية النمو بوضوح: ترى التحدّي فرصة، والنقد معلومة، والجهد طريقاً للإتقان. هذه أثمن أدواتك في الحياة.",
          en: "You clearly embrace a growth mindset: challenge is opportunity, criticism is data, and effort is the road to mastery. This is your most valuable life tool."
        },
        tip: {
          ar: "انقل هذه العقلية لمن حولك — شارك قصص فشلك وتعلّمك، فالتعليم يثبّت المهارة ويلهم الآخرين.",
          en: "Pass this mindset on — share your failure-and-learning stories. Teaching it deepens the skill and inspires others."
        }
      }
    ]
  },
  {
    id: "eq",
    icon: "💞",
    color: "rose",
    category: "relationships",
    title: { ar: "مقياس الذكاء العاطفي", en: "Emotional Intelligence Scale" },
    desc: {
      ar: "قياس سريع لقدرتك على فهم مشاعرك ومشاعر الآخرين وإدارة العلاقات بوعي — مهارة تصنع جودة حياتك الاجتماعية.",
      en: "A quick measure of your ability to understand your own and others' feelings and manage relationships with awareness — the skill that shapes your social life."
    },
    questions: [
      {
        q: { ar: "هل تستطيع تسمية ما تشعر به بدقة؟", en: "Can you name exactly what you feel?" },
        options: [
          { text: { ar: "نعم، أميّز بين مشاعري بوضوح", en: "Yes, I distinguish my feelings clearly" }, score: 3 },
          { text: { ar: "غالباً أعرف سبب انزعاجي", en: "I usually know why I'm upset" }, score: 2 },
          { text: { ar: "أحياناً أشعر بالضيق دون سبب واضح", en: "Sometimes I feel off without knowing why" }, score: 1 },
          { text: { ar: "نادراً، مشاعري غامضة عليّ", en: "Rarely — my feelings are a blur" }, score: 0 }
        ]
      },
      {
        q: { ar: "عندما يغضب منك شخص مقرّب؟", en: "When someone close gets angry at you?" },
        options: [
          { text: { ar: "أحاول فهم سبب غضبه أولاً", en: "I try to understand the cause first" }, score: 3 },
          { text: { ar: "أهدّئ الموقف ثم نناقش", en: "I calm things down, then we talk" }, score: 2 },
          { text: { ar: "أدافع عن نفسي فوراً", en: "I defend myself immediately" }, score: 1 },
          { text: { ar: "أردّ بالغضب أو أنسحب", en: "I react with anger or withdraw" }, score: 0 }
        ]
      },
      {
        q: { ar: "كيف تستمع لمن يشاركك همّه؟", en: "How do you listen to someone sharing a worry?" },
        options: [
          { text: { ar: "أصغي وأتحقّق من مشاعره قبل النصيحة", en: "I listen and reflect feelings before advising" }, score: 3 },
          { text: { ar: "أصغي باهتمام وأواسي", en: "I listen attentively and comfort" }, score: 2 },
          { text: { ar: "أقدّم الحلول سريعاً", en: "I jump straight to solutions" }, score: 1 },
          { text: { ar: "أشرد أو أقارن همّه بهمّي", en: "I drift off or compare to my own problems" }, score: 0 }
        ]
      },
      {
        q: { ar: "هل تضبط انفعالك تحت الضغط؟", en: "Do you control your emotions under pressure?" },
        options: [
          { text: { ar: "أتوقّف وأفكر قبل أن أتصرّف", en: "I pause and think before acting" }, score: 3 },
          { text: { ar: "أتمالك نفسي غالباً", en: "I keep my composure most of the time" }, score: 2 },
          { text: { ar: "أنفعل أحياناً ثم أندم", en: "I sometimes react, then regret" }, score: 1 },
          { text: { ar: "مشاعري تقودني فوراً", en: "My emotions drive me instantly" }, score: 0 }
        ]
      },
      {
        q: { ar: "كيف تتعامل مع اختلاف الرأي؟", en: "How do you handle disagreement?" },
        options: [
          { text: { ar: "أحترم الاختلاف وأبحث عن المشترك", en: "I respect difference and seek common ground" }, score: 3 },
          { text: { ar: "أناقش بهدوء وأتقبّل رأي الآخر", en: "I discuss calmly and accept their view" }, score: 2 },
          { text: { ar: "أحاول إقناعه أنني على حق", en: "I try to prove I'm right" }, score: 1 },
          { text: { ar: "أنزعج وأنهي الحوار", en: "I get upset and end the conversation" }, score: 0 }
        ]
      },
      {
        q: { ar: "هل تلاحظ مشاعر الآخرين من إشاراتهم؟", en: "Do you read others' feelings from their cues?" },
        options: [
          { text: { ar: "نعم، ألتقط ما لا يُقال", en: "Yes, I pick up what's unsaid" }, score: 3 },
          { text: { ar: "ألاحظ التغيّرات الواضحة", en: "I notice obvious changes" }, score: 2 },
          { text: { ar: "أحتاج أن يخبرني الشخص مباشرة", en: "I need them to tell me directly" }, score: 1 },
          { text: { ar: "نادراً ما أنتبه لمشاعرهم", en: "I rarely notice their feelings" }, score: 0 }
        ]
      }
    ],
    results: [
      {
        min: 0,
        max: 8,
        title: { ar: "ذكاء عاطفي مبتدئ — ابدأ بالوعي", en: "Developing EQ — start with awareness" },
        text: {
          ar: "قد تجد صعوبة في قراءة مشاعرك ومشاعر الآخرين، وهذا ينعكس على علاقاتك. الذكاء العاطفي مهارة تُبنى بالتدريب لا موهبة فطرية فقط.",
          en: "You may find it hard to read your own and others' emotions, which affects your relationships. EQ is a trainable skill, not only an innate gift."
        },
        tip: {
          ar: "ابدأ بمفكرة مشاعر يومية: اكتب ثلاث مرات اليوم «ماذا أشعر الآن ولماذا؟». الوعي هو حجر الأساس لكل ما يليه.",
          en: "Start a daily feelings log: three times a day write “what do I feel now and why?” Awareness is the foundation for everything else."
        }
      },
      {
        min: 9,
        max: 14,
        title: { ar: "ذكاء عاطفي جيد — وازن بين الوعي والفعل", en: "Good EQ — balance awareness and action" },
        text: {
          ar: "تملك وعياً عاطفياً جيداً وتتعامل بمرونة مع معظم المواقف، لكن بعض اللحظات الضاغطة قد تُخرج أسوأ ما فيك.",
          en: "You have good emotional awareness and handle most situations flexibly, but a few pressure moments can bring out your worst."
        },
        tip: {
          ar: "تدرّب على قاعدة الثواني الست: قبل أي ردّ انفعالي، خذ نفساً وعدّ لستة. هذه المسافة الصغيرة تغيّر جودة استجابتك.",
          en: "Practice the six-second rule: before any reactive reply, breathe and count to six. That small gap changes the quality of your response."
        }
      },
      {
        min: 15,
        max: 18,
        title: { ar: "ذكاء عاطفي مرتفع — قائد علاقاتي", en: "High EQ — a relational leader" },
        text: {
          ar: "تفهم مشاعرك وتديرها بوعي، وتقرأ الآخرين بتعاطف، وتحافظ على علاقات صحية حتى في الخلاف. هذه مهارة نادرة وثمينة.",
          en: "You understand and manage your emotions with awareness, read others with empathy, and keep relationships healthy even in conflict. A rare and valuable skill."
        },
        tip: {
          ar: "استخدم هذه المهارة لدعم من حولك، واحذر من الإرهاق العاطفي — الاعتناء بالآخرين يبدأ من الاعتناء بنفسك.",
          en: "Use this skill to support those around you, and beware emotional burnout — caring for others starts with caring for yourself."
        }
      }
    ]
  }
];

/* ------------------------------------------------------------------
   2) تحدّي الـ 21 يوماً — CHALLENGE_DAYS
   ثلاثة أسابيع: الوعي (1-7)، البناء (8-14)، التثبيت (15-21).
   ------------------------------------------------------------------ */
const CHALLENGE_WEEKS = [
  { id: 1, color: "violet", theme: { ar: "أسبوع الوعي", en: "Awareness Week" },
    desc: { ar: "تلاحظ نفسك وأفكارك وعاداتك دون حكم.", en: "You observe yourself, your thoughts and habits without judgment." } },
  { id: 2, color: "amber", theme: { ar: "أسبوع البناء", en: "Building Week" },
    desc: { ar: "تزرع عادات صغيرة إيجابية وتستبدل أخرى.", en: "You plant small positive habits and replace others." } },
  { id: 3, color: "teal", theme: { ar: "أسبوع التثبيت", en: "Consolidation Week" },
    desc: { ar: "تحوّل ما بنيته إلى نظام حياة دائم.", en: "You turn what you built into a lasting life system." } }
];

const CHALLENGE_DAYS = [
  { day: 1, week: 1, icon: "📓", title: { ar: "ابدأ مفكرة يومية", en: "Start a daily journal" },
    task: { ar: "اكتب صفحة واحدة عن حالتك اليوم: ماذا شعرت؟ وماذا شغل تفكيرك؟", en: "Write one page about your day: what did you feel? what occupied your mind?" },
    tip: { ar: "لا تهتم بالأسلوب، المهم أن تفرغ ما في رأسك على الورق.", en: "Don't worry about style — the point is to empty your head onto paper." } },
  { day: 2, week: 1, icon: "🧘", title: { ar: "دقيقتا تنفّس واعٍ", en: "Two minutes of mindful breathing" },
    task: { ar: "اجلس بهدوء وتابع نفسَك الداخل والخارج لمدة دقيقتين دون مقاطعة.", en: "Sit quietly and follow your breath in and out for two minutes, uninterrupted." },
    tip: { ar: "حين يشرد ذهنك — وسيشرد — أعده بلطف إلى النفس دون لوم.", en: "When your mind wanders — it will — gently return it to the breath without blame." } },
  { day: 3, week: 1, icon: "💭", title: { ar: "راقب حديثك الذاتي", en: "Watch your self-talk" },
    task: { ar: "دوّن ثلاث جمل قلتها لنفسك اليوم، وصنّفها: داعمة أم قاسية؟", en: "Note three things you said to yourself today and label them: supportive or harsh?" },
    tip: { ar: "لن تستطيع تغيير ما لا تلاحظه. الوعي أول خطوة.", en: "You can't change what you don't notice. Awareness is step one." } },
  { day: 4, week: 1, icon: "📵", title: { ar: "ساعة بلا شاشات", en: "One screen-free hour" },
    task: { ar: "اختر ساعة اليوم بلا هاتف ولا تلفاز، ولاحظ ماذا تفعل بالملل.", en: "Pick one hour today with no phone or TV, and notice what you do with the boredom." },
    tip: { ar: "الملل ليس عدواً؛ إنه الباب الذي تدخل منه الأفكار الإبداعية.", en: "Boredom isn't the enemy; it's the door creative ideas come through." } },
  { day: 5, week: 1, icon: "🙏", title: { ar: "ثلاثة أشياء ممتنّ لها", en: "Three things you're grateful for" },
    task: { ar: "اكتب ثلاثة أشياء صغيرة امتننت لها اليوم ولماذا.", en: "Write three small things you were grateful for today and why." },
    tip: { ar: "التفاصيل الصغيرة (قهوة دافئة، رسالة صديق) أقوى من العموميات.", en: "Small specifics (a warm coffee, a friend's message) beat vague generalities." } },
  { day: 6, week: 1, icon: "🚶", title: { ar: "مشية واعية", en: "A mindful walk" },
    task: { ar: "امشِ عشر دقائق بلا سماعات، وركّز على ما تراه وتسمعه وتشعر به.", en: "Walk ten minutes with no earphones, focusing on what you see, hear and feel." },
    tip: { ar: "الجسد يتحرك والعقل يهدأ؛ الحركة أبسط أنواع التأمل.", en: "The body moves and the mind settles; movement is the simplest meditation." } },
  { day: 7, week: 1, icon: "🔍", title: { ar: "مراجعة الأسبوع الأول", en: "Week-one review" },
    task: { ar: "أعد قراءة ملاحظاتك هذا الأسبوع، واكتب نمطاً واحداً اكتشفته عن نفسك.", en: "Reread this week's notes and write one pattern you discovered about yourself." },
    tip: { ar: "لا تحكم على نفسك، فقط لاحظ. أنت تجمع بيانات عن صديق.", en: "Don't judge yourself, just observe. You're gathering data about a friend." } },

  { day: 8, week: 2, icon: "⏰", title: { ar: "ثبّت وقت استيقاظك", en: "Fix your wake-up time" },
    task: { ar: "استيقظ اليوم في وقت محدّد والتزم به، حتى لو نمت متأخراً.", en: "Wake at a set time today and keep it, even if you slept late." },
    tip: { ar: "انتظام الاستيقاظ يضبط ساعتك البيولوجية أكثر من انتظام النوم.", en: "A consistent wake time anchors your body clock more than a consistent bedtime." } },
  { day: 9, week: 2, icon: "🎯", title: { ar: "مهمة واحدة مهمة", en: "One important task" },
    task: { ar: "حدّد أهم مهمة لليوم وأنجزها قبل فتح أي شيء آخر.", en: "Define today's most important task and finish it before opening anything else." },
    tip: { ar: "ابدأ بأصعب شيء وطاقتك في ذروتها، وسيرتاح بقية يومك.", en: "Start with the hardest thing while energy peaks, and the rest of the day feels lighter." } },
  { day: 10, week: 2, icon: "💧", title: { ar: "اهتمّ بجسدك", en: "Care for your body" },
    task: { ar: "اشرب ثمانية أكواب ماء اليوم وتحرّك 20 دقيقة على الأقل.", en: "Drink eight glasses of water today and move for at least 20 minutes." },
    tip: { ar: "العقل يعيش في جسد؛ إهمال الثاني يكلّفك صفاء الأول.", en: "The mind lives in a body; neglecting the second costs the clarity of the first." } },
  { day: 11, week: 2, icon: "🔄", title: { ar: "استبدل عادة واحدة", en: "Replace one habit" },
    task: { ar: "اختر عادة سلبية وقرّر بديلاً إيجابياً لها عند نفس المحفّز.", en: "Pick a negative habit and decide a positive replacement for the same trigger." },
    tip: { ar: "لا نحذف العادات بل نستبدلها؛ الدماغ يحتاج بديلاً لا فراغاً.", en: "We don't delete habits, we replace them; the brain needs an alternative, not a void." } },
  { day: 12, week: 2, icon: "🤝", title: { ar: "لطف متعمّد", en: "A deliberate kindness" },
    task: { ar: "أرسل رسالة تقدير صادقة لشخص أثّر فيك إيجاباً.", en: "Send a sincere message of appreciation to someone who positively impacted you." },
    tip: { ar: "العلاقات تُبنى بلحظات صغيرة متعمّدة لا بمناسبات كبيرة.", en: "Relationships are built on small deliberate moments, not grand occasions." } },
  { day: 13, week: 2, icon: "📚", title: { ar: "عشرون دقيقة تعلّم", en: "Twenty minutes of learning" },
    task: { ar: "خصّص 20 دقيقة لقراءة أو مشاهدة شيء يعلّمك مهارة جديدة.", en: "Spend 20 minutes reading or watching something that teaches a new skill." },
    tip: { ar: "الاستمرارية الصغيرة تتفوّق على الجلسات الطويلة المتقطّعة.", en: "Small consistency beats long, sporadic sessions." } },
  { day: 14, week: 2, icon: "🔍", title: { ar: "مراجعة الأسبوع الثاني", en: "Week-two review" },
    task: { ar: "قيّم التزامك من 10، وحدّد أكبر عقبة واجهتك وكيف تتجاوزها.", en: "Rate your commitment out of 10, and name the biggest obstacle and how to beat it." },
    tip: { ar: "التعثّر جزء من المسار لا نهاية له؛ الأهم أن تعود بسرعة.", en: "Stumbling is part of the path, not the end; what matters is returning quickly." } },

  { day: 15, week: 3, icon: "🗂️", title: { ar: "رتّب مساحتك", en: "Tidy your space" },
    task: { ar: "رتّب مكاناً واحداً تستخدمه يومياً (مكتبك، غرفتك، هاتفك).", en: "Organize one space you use daily (your desk, room, or phone)." },
    tip: { ar: "الفوضى الخارجية تسرّب طاقة ذهنية؛ الترتيب يهدّئ العقل.", en: "Outer clutter leaks mental energy; tidying calms the mind." } },
  { day: 16, week: 3, icon: "🚫", title: { ar: "ضع حدوداً واضحة", en: "Set a clear boundary" },
    task: { ar: "ارفض اليوم بلطف طلباً يرهقك، أو حدّد وقتاً لا يُقاطع فيه أحد.", en: "Politely decline one draining request today, or set an uninterrupted time block." },
    tip: { ar: "«لا» للآخرين هي في الحقيقة «نعم» لطاقتك وأولوياتك.", en: "Saying “no” to others is really saying “yes” to your energy and priorities." } },
  { day: 17, week: 3, icon: "🌙", title: { ar: "روتين نوم هادئ", en: "A calm sleep routine" },
    task: { ar: "أطفئ الشاشات قبل النوم بساعة، وهيّئ طقساً مهدّئاً ثابتاً.", en: "Turn off screens an hour before bed and build a fixed calming ritual." },
    tip: { ar: "الدماغ يحب الإشارات المتكررة؛ الطقس الثابت يمهّد للنوم العميق.", en: "The brain loves repeated cues; a consistent ritual paves the way to deep sleep." } },
  { day: 18, week: 3, icon: "🧩", title: { ar: "خطوة نحو هدف مؤجَّل", en: "One step toward a postponed goal" },
    task: { ar: "اختر هدفاً أجّلته طويلاً ونفّذ أصغر خطوة ممكنة نحوه اليوم.", en: "Pick a long-postponed goal and take the smallest possible step toward it today." },
    tip: { ar: "البدء أصعب من الاستمرار؛ الخطوة الأولى تكسر الجمود.", en: "Starting is harder than continuing; the first step breaks the inertia." } },
  { day: 19, week: 3, icon: "❤️", title: { ar: "رفق بالذات", en: "Practice self-compassion" },
    task: { ar: "اكتب لنفسك رسالة لطف كما تكتب لصديق يمرّ بظرفك نفسه.", en: "Write yourself a kind message, as you would to a friend in your exact situation." },
    tip: { ar: "قسوتك على نفسك لا تحفّزك، إنها تستنزفك. كن صديقك الأول.", en: "Harshness doesn't motivate you, it drains you. Be your own first friend." } },
  { day: 20, week: 3, icon: "📈", title: { ar: "تتبّع تقدّمك", en: "Track your progress" },
    task: { ar: "قارن بين اليوم الأول والآن: ما الذي تغيّر في مزاجك أو عاداتك؟", en: "Compare day one to now: what changed in your mood or habits?" },
    tip: { ar: "رؤية التقدّم وقود للاستمرار، حتى لو كان التغيير بسيطاً.", en: "Seeing progress is fuel to continue, even when the change is small." } },
  { day: 21, week: 3, icon: "🏁", title: { ar: "خطّة ما بعد التحدّي", en: "Your post-challenge plan" },
    task: { ar: "اختر ثلاث عادات من الـ21 يوماً تريد تثبيتها دائماً، واكتب خطّتها.", en: "Choose three habits from the 21 days to keep forever, and write their plan." },
    tip: { ar: "الـ21 يوماً بداية لا نهاية. ما تبنيه هنا يصير جزءاً من هويتك.", en: "The 21 days are a beginning, not an end. What you build becomes part of who you are." } }
];

/* ------------------------------------------------------------------
   3) مكتبة لغة الجسد المرئية — BODY_LANGUAGE
   ------------------------------------------------------------------ */
const BODY_LANGUAGE = [
  {
    id: "open-posture",
    image: "assets/images/bl-open-posture.jpg",
    tag: { ar: "انفتاح", en: "Openness" },
    color: "teal",
    title: { ar: "الوضعية المنفتحة", en: "Open Posture" },
    meaning: { ar: "الأذرع غير متقاطعة والجذع مكشوف ومتّجه نحو الآخر", en: "Uncrossed arms, exposed torso, body turned toward the other" },
    detail: {
      ar: "عندما يكون الجذع مكشوفاً والكتفان مسترخيين والأذرع مفتوحة، فهذه إشارة راحة وانفتاح على التواصل. الشخص مستعد للإنصات وغير متحفّز للدفاع. لاحظ أن انفتاح الصدر يكشف المناطق الحيوية، وهو ما لا نفعله إلا حين نشعر بالأمان. استخدمها أنت أيضاً: الجلوس بوضعية منفتحة يرسل لعقلك وللآخرين رسالة هدوء وثقة.",
      en: "When the torso is exposed, shoulders relaxed and arms open, it signals comfort and openness to connection. The person is ready to listen and not braced to defend. Note that opening the chest reveals vital areas — something we only do when we feel safe. Use it yourself too: sitting in an open posture sends a message of calm and confidence to both your brain and others."
    },
    context: [
      { ar: "لقاء أول", en: "First meeting" },
      { ar: "مقابلة عمل", en: "Job interview" },
      { ar: "حوار ودي", en: "Friendly talk" }
    ]
  },
  {
    id: "crossed-arms",
    image: "assets/images/bl-crossed-arms.jpg",
    tag: { ar: "تحفّظ", en: "Guarded" },
    color: "violet",
    title: { ar: "تقاطع الذراعين", en: "Crossed Arms" },
    meaning: { ar: "ذراعان مطويتان أمام الصدر كحاجز جسدي", en: "Arms folded across the chest like a physical barrier" },
    detail: {
      ar: "تقاطع الذراعين من أشهر الإشارات وأكثرها سوء فهم. قد يعني الدفاع أو الانغلاق أو عدم الموافقة، لكنه قد يكون ببساطة شعوراً بالبرد أو عادة مريحة للشخص. لذلك لا تقرأ الإشارة منفردة، بل ضمن سياقها: هل ترافقها عبوس أو ابتعاد بالجسد؟ إن ظهرت مع إشارات انزعاج أخرى، فهي غالباً حاجز نفسي. امنح الشخص أماناً ووقتناً قبل أن تستنتج.",
      en: "Crossed arms is among the most famous and most misread signals. It can mean defensiveness, closure or disagreement — or simply feeling cold or a comfortable personal habit. So don't read it in isolation, but in context: is it paired with a frown or the body leaning away? If it appears with other discomfort cues, it's likely a psychological barrier. Give the person safety and time before concluding."
    },
    context: [
      { ar: "خلاف", en: "Disagreement" },
      { ar: "شعور بالبرد", en: "Feeling cold" },
      { ar: "عدم ارتياح", en: "Discomfort" }
    ]
  },
  {
    id: "duchenne-smile",
    image: "assets/images/bl-duchenne-smile.jpg",
    tag: { ar: "صدق", en: "Genuine" },
    color: "amber",
    title: { ar: "الابتسامة الصادقة", en: "The Duchenne Smile" },
    meaning: { ar: "ابتسامة تحرّك عضلات حول العينين لا الفم فقط", en: "A smile that engages the muscles around the eyes, not just the mouth" },
    detail: {
      ar: "الابتسامة الحقيقية — وتُسمّى ابتسامة دوشين — لا تُرسم على الشفاه وحدها، بل تنكمش معها زوايا العينين وتظهر تجاعيد صغيرة حولهما («أقدام الغراب»). أما الابتسامة الاجتماعية أو المصطنعة فتحرّك الفم فقط وتبقى العينان ساكنتين. لأن عضلات العين يصعب التحكّم بها إرادياً، فهي أدقّ مؤشر على الفرح الحقيقي. راقب العينين لا الفم لتعرف صدق المشاعر.",
      en: "A genuine smile — the Duchenne smile — isn't drawn on the lips alone; the corners of the eyes contract and small crow's-feet appear. A social or fake smile moves only the mouth while the eyes stay still. Because the eye muscles are hard to control voluntarily, they're the most accurate indicator of true joy. Watch the eyes, not the mouth, to read sincerity."
    },
    context: [
      { ar: "فرح حقيقي", en: "Real joy" },
      { ar: "ترحيب صادق", en: "Warm welcome" },
      { ar: "تواصل ودّي", en: "Friendly rapport" }
    ]
  },
  {
    id: "mirroring",
    image: "assets/images/bl-mirroring.jpg",
    tag: { ar: "توافق", en: "Rapport" },
    color: "rose",
    title: { ar: "المحاكاة اللاواعية", en: "Mirroring" },
    meaning: { ar: "تقليد لاواعي لوضعية الطرف الآخر وإيماءاته", en: "Unconsciously copying the other person's posture and gestures" },
    detail: {
      ar: "حين يشعر شخصان بتوافق وانسجام، يبدآن تلقائياً بمحاكاة وضعية جسد أحدهما الآخر وإيماءاته ونبرة صوته — كأنهما في مرآة. هذه المحاكاة اللاواعية دليل قوي على الانجذاب والثقة والارتياح، وتحدث دون قصد. يمكن استخدامها بوعي لبناء الألفة: بعد لحظة من التوافق، حاكي بلطف وضعية محدّثك، فستلاحظ ارتفاعاً في مستوى التفاهم. لكن اجعلها ناعمة ومتأخرة قليلاً حتى لا تبدو تقليداً ساخراً.",
      en: "When two people feel in sync, they automatically begin mirroring each other's posture, gestures and tone of voice — as if reflected. This unconscious mirroring is a strong sign of attraction, trust and ease, and it happens without intent. It can be used consciously to build rapport: after a moment of connection, gently mirror your partner's posture and you'll notice deeper understanding. Keep it subtle and slightly delayed so it never looks like mockery."
    },
    context: [
      { ar: "انسجام", en: "Connection" },
      { ar: "بناء ثقة", en: "Building trust" },
      { ar: "جاذبية", en: "Attraction" }
    ]
  },
  {
    id: "steepling",
    image: "assets/images/bl-steepling.jpg",
    tag: { ar: "ثقة", en: "Confidence" },
    color: "violet",
    title: { ar: "وضعية القمّة (البرج)", en: "Steepling" },
    meaning: { ar: "أطراف أصابع اليدين متلامسة مشكّلة مثلثاً", en: "Fingertips of both hands touching, forming a triangle" },
    detail: {
      ar: "وضعية «القمّة» أو «البرج» تكون بملامسة أطابع أصابع اليدين مع تباعد الراحة، فيشكّلان مثلثاً يشبه برج الكنيسة. إنها من أقوى إشارات الثقة بالذات واليقين فيما يُقال، وكثيراً ما يظهر بها القادة والمفاوضون الواثقون. قد تكون مرتفعة (أمام الوجه) عند التحدث، أو منخفضة (على الطاولة) عند الإنصات. ظهورها يعني أن الشخص مطمئن لموقفه؛ أما تحوّلها إلى تشبيك الأصابع المضغوط فقد يشير إلى توتّر خلف الثقة الظاهرة.",
      en: "Steepling is made by touching the fingertips of both hands with palms apart, forming a triangle like a church steeple. It's one of the strongest signals of self-confidence and certainty in what's being said, often seen in confident leaders and negotiators. It can be high (near the face) when speaking, or low (on the table) when listening. Its appearance means the person is secure in their position; a shift into tightly interlaced fingers, however, may signal tension beneath the confident surface."
    },
    context: [
      { ar: "تفاوض", en: "Negotiation" },
      { ar: "قيادة", en: "Leadership" },
      { ar: "يقين", en: "Certainty" }
    ]
  },
  {
    id: "feet-direction",
    image: "assets/images/bl-feet-direction.jpg",
    tag: { ar: "نيّة", en: "Intent" },
    color: "teal",
    title: { ar: "اتجاه القدمين", en: "Feet Direction" },
    meaning: { ar: "القدمان تشير إلى حيث يريد الشخص الذهاب حقاً", en: "The feet point to where the person truly wants to go" },
    detail: {
      ar: "نركّز عادةً على الوجه لأنه الأكثر تعبيراً والأكثر تحكّماً، لكن القدمين هما الأصدق لأننا نادراً ما ننتبه لهما. إن كانت قدما محدّثك موجّهتين نحوك، فهو مندمج ومهتم بالحوار. وإن تحوّلت إحدى القدمين نحو الباب أو بعيداً عنك، فرغم ابتسامته، يشير جسده إلى رغبة في المغادرة. هذه إشارة مبكرة ودقيقة على نيّته الحقيقية، تفوق بكثير ما تقوله تعابير الوجه المتحكَّم بها.",
      en: "We usually focus on the face because it's the most expressive and most controlled, but the feet are the most honest since we rarely pay attention to them. If your partner's feet point toward you, they're engaged and interested. If one foot turns toward the door or away from you, then despite the smile, their body signals a wish to leave. This is an early, accurate cue to their real intent — far truer than controlled facial expressions."
    },
    context: [
      { ar: "رغبة بالرحيل", en: "Wanting to leave" },
      { ar: "اهتمام", en: "Interest" },
      { ar: "لغة صادقة", en: "Honest cue" }
    ]
  },
  {
    id: "eye-contact",
    image: "assets/images/bl-eye-contact.jpg",
    tag: { ar: "انتباه", en: "Attention" },
    color: "amber",
    title: { ar: "التواصل البصري المتوازن", en: "Balanced Eye Contact" },
    meaning: { ar: "نظر مريح متواصل بنسبة 60–70% من وقت الحوار", en: "Comfortable gaze held for about 60–70% of the conversation" },
    detail: {
      ar: "التواصل البصري سلاح ذو حدّين. النسبة المريحة اجتماعياً تتراوح بين 60% و70% من وقت الحديث، مع كسر النظر بشكل طبيعي كل بضع ثوانٍ. النظر الزائد المطوّل يتحوّل إلى تحدٍّ أو اختراق مزعج، بينما النظر القليل جداً يوحي بالتوتّر أو عدم الاهتمام أو عدم الصدق. التوازن هو المفتاح: انظر بعينيك إلى مثلث الوجه (العينان والفم)، واكسر النظر أفقياً لا إلى الأسفل، ليبقى الانطباع واثقاً ومحترماً.",
      en: "Eye contact is a double-edged sword. The socially comfortable range is about 60–70% of speaking time, breaking gaze naturally every few seconds. Excessive staring becomes challenging or uncomfortably intrusive, while too little suggests nervousness, disinterest or dishonesty. Balance is key: gaze at the face triangle (eyes and mouth), and break your gaze sideways rather than downward, to keep the impression confident and respectful."
    },
    context: [
      { ar: "ثقة", en: "Confidence" },
      { ar: "إنصات فعّال", en: "Active listening" },
      { ar: "احترام", en: "Respect" }
    ]
  },
  {
    id: "head-tilt",
    image: "assets/images/bl-head-tilt.jpg",
    tag: { ar: "انخراط", en: "Engagement" },
    color: "rose",
    title: { ar: "إمالة الرأس", en: "Head Tilt" },
    meaning: { ar: "ميل الرأس جانباً أثناء الإنصات يدلّ على الاهتمام", en: "Tilting the head to one side while listening shows interest" },
    detail: {
      ar: "إمالة الرأس قليلاً إلى أحد الجانبين أثناء الإنصات إشارة قديمة وعميقة على الاهتمام الحقيقي والتعاطف. حين نميل الرأس نكشف الرقبة — وهي منطقة ضعيفة — ما يدلّ على الاسترخاء والثقة بالآخر وعدم الشعور بالتهديد. غالباً ما تظهر هذه الإيماءة لدى المستمعين المنخرطين والمتعاطفين، وتزيد من شعور المتحدث بأنه مسموع ومفهوم. جرّبها في حوارك القادم: ميل بسيط مع إيماءة رأس يجعل محدّثك يشعر باهتمامك الصادق.",
      en: "Tilting the head slightly to one side while listening is an old, deep signal of genuine interest and empathy. When we tilt the head we expose the neck — a vulnerable area — signaling relaxation, trust in the other, and a lack of threat. This gesture often appears in engaged, empathetic listeners and increases the speaker's sense of being heard and understood. Try it in your next conversation: a slight tilt with a nod makes your partner feel your sincere attention."
    },
    context: [
      { ar: "إنصات", en: "Listening" },
      { ar: "تعاطف", en: "Empathy" },
      { ar: "فضول", en: "Curiosity" }
    ]
  }
];

/* ------------------------------------------------------------------
   4) زاوية سؤال وجواب مجهولة — QA_SEED
   أسئلة منشورة مسبقاً (مجهولة تماماً) مع إجابات تثقيفية.
   ------------------------------------------------------------------ */
const QA_SEED = [
  {
    id: "qa-1",
    topic: { ar: "القلق", en: "Anxiety" },
    ageBand: { ar: "شاب/ة 18–25", en: "Adult 18–25" },
    question: {
      ar: "أشعر بقلق دائم قبل أي مناسبة اجتماعية، وأفكّر كثيراً في كيفية حكم الآخرين عليّ. كيف أتعامل مع هذا؟",
      en: "I feel constant anxiety before any social event and overthink how people judge me. How do I deal with this?"
    },
    answer: {
      ar: "ما تصفه يُعرف بالقلق الاجتماعي، وهو من أكثر الأنواع شيوعاً وقابلية للتحسّن. ابدأ بإدراك أن معظم الناس منشغلون بأنفسهم أكثر مما تتخيّل — ما يُسمّى «وهم بقعة الضوء»، حيث نبالغ في تقدير انتباه الآخرين لنا. درّب نفسك بخطوات متدرّجة: مواقف اجتماعية صغيرة ثم أكبر. وقبل المناسبة، حوّل انتباهك من «كيف أبدو؟» إلى «من سألتقي وماذا سأتعلّم؟». تحويل التركيز للخارج يخفّض القلق بشكل ملحوظ.",
      en: "What you describe is social anxiety — among the most common and most improvable types. Start by recognizing that most people are busier with themselves than you imagine: this is the “spotlight effect,” where we overestimate how much others notice us. Train yourself in gradual steps — small social situations, then larger. Before an event, shift your attention from “how do I look?” to “who will I meet and what will I learn?” Turning focus outward noticeably lowers anxiety."
    }
  },
  {
    id: "qa-2",
    topic: { ar: "العلاقات", en: "Relationships" },
    ageBand: { ar: "بالغ/ة 26–35", en: "Adult 26–35" },
    question: {
      ar: "أجد صعوبة في التعبير عن احتياجاتي لشريكي وأخشى أن يُفهم ذلك كتذمّر. ما النصيحة؟",
      en: "I find it hard to express my needs to my partner and fear it'll be taken as complaining. Any advice?"
    },
    answer: {
      ar: "التعبير عن الاحتياجات مهارة لا صفة، وتُبنى بأسلوب «أنا» بدل «أنت». قل: «أشعر بالوحدة حين لا نتحدث مساءً، وأحتاج لعشر دقائق حوار» بدل «أنت تهملني دائماً». الصيغة الأولى تصف مشاعرك وحاجتك دون اتهام، فتقلّل دفاعية الطرف الآخر. اختر أيضاً وقتاً هادئاً لا لحظة انفعال. الشريك لا يقرأ أفكارك، والحاجة غير المعلنة تتحوّل مع الوقت إلى استياء صامت. الوضوح اللطيف أقوى صيانة للعلاقة.",
      en: "Expressing needs is a skill, not a trait, built on “I” statements instead of “you.” Say: “I feel lonely when we don't talk in the evening, and I need ten minutes of conversation” instead of “you always neglect me.” The first form describes your feeling and need without accusation, lowering the other's defensiveness. Also pick a calm moment, not a heated one. Your partner can't read your mind, and an unspoken need slowly turns into silent resentment. Kind clarity is the strongest relationship maintenance."
    }
  },
  {
    id: "qa-3",
    topic: { ar: "تطوير الذات", en: "Self-development" },
    ageBand: { ar: "طالب/ة 18–25", en: "Student 18–25" },
    question: {
      ar: "أضع أهدافاً كبيرة ثم أتخلّى عنها بعد أيام. كيف أبني الالتزام بالعادات؟",
      en: "I set big goals then abandon them after a few days. How do I build commitment to habits?"
    },
    answer: {
      ar: "المشكلة ليست في إرادتك بل في حجم الهدف. الدماغ يقاوم التغييرات الكبيرة المفاجئة. الحل: صغّر العادة حتى تصبح تافهة — بدل «سأتمرن ساعة» قل «سأرتدي حذاء الرياضة». اربطها بعادة قائمة (بعد فنجان القهوة سأقرأ صفحتين). وثبّتها في نفس الوقت والمكان يومياً ليصير المحفّز تلقائياً. لا تكسر السلسلة مرتين: إن فوّت يوماً، الأولوية القصوى أن تعود في اليوم التالي مباشرة. الالتزام يُبنى بالتكرار الصغير لا بالحماسة الكبيرة.",
      en: "The problem isn't your willpower but the size of the goal. The brain resists sudden big changes. The fix: shrink the habit until it's trivial — instead of “I'll train an hour,” say “I'll put on my sneakers.” Attach it to an existing habit (after my coffee I'll read two pages). Keep it at the same time and place daily so the cue becomes automatic. Don't break the chain twice: if you miss a day, the top priority is returning the very next day. Commitment is built by small repetition, not big enthusiasm."
    }
  },
  {
    id: "qa-4",
    topic: { ar: "لغة الجسد", en: "Body language" },
    ageBand: { ar: "محترف/ة 26–40", en: "Professional 26–40" },
    question: {
      ar: "في اجتماعات العمل أشعر أن لغة جسدي توحي بالتوتر. كيف أظهر أكثر ثقة؟",
      en: "In work meetings I feel my body language signals nervousness. How do I appear more confident?"
    },
    answer: {
      ar: "الثقة الظاهرة تُصنع بتعديلات بسيطة مقصودة. أولاً الوضعية: اجلس أو قف بعمود فقري مستقيم وكتفين مرتاحين للخلف — هذا وحده يرفع إحساسك بالثقة. ثانياً اليدين: اجعلهما مرئيتين فوق الطاولة، فإخفاؤهما يوحي بالتحفّز؛ استخدم وضعية «القمّة» عند اليقين. ثالثاً التواصل البصري المتوازن 60–70% مع كسر النظر أفقياً. رابعاً أبطئ كلامك وحركاتك قليلاً؛ السرعة توحي بالتوتر. تذكّر أن تبنّي هذه الوضعيات لا يغيّر نظرة الآخرين فقط، بل يعيد تغذية عقلك بشعور حقيقي بالهدوء.",
      en: "Visible confidence is built with small deliberate adjustments. First, posture: sit or stand with a straight spine and shoulders relaxed back — this alone raises your felt confidence. Second, hands: keep them visible on the table, as hiding them suggests wariness; use steepling when certain. Third, balanced eye contact of 60–70%, breaking gaze sideways. Fourth, slow your speech and gestures slightly; speed signals nerves. Remember, adopting these postures doesn't just change how others see you — it feeds your brain a real sense of calm."
    }
  }
];
