/* ==========================================================================
   content.js — قاعدة بيانات المقالات التجريبية (عربي / إنجليزي)
   Sample bilingual articles database.
   ========================================================================== */

const ARTICLES = [
  {
    id: "anxiety-in-the-body",
    image: "assets/images/anxiety-in-the-body.jpg",
    category: "psychology",
    date: "2026-09-14",
    updated: "2026-09-16",
    readTime: { ar: 7, en: 6 },
    featured: true,
    cover: "cover-1",
    emoji: "🫀",
    title: {
      ar: "لماذا يظهر القلق في جسدك قبل أن تلاحظه في عقلك؟",
      en: "Why Anxiety Shows Up in Your Body Before Your Mind Notices"
    },
    excerpt: {
      ar: "تسارع القلب، ضيق التنفس، برودة الأطراف… كيف يعمل جهاز الإنذار الداخلي، وما الأدوات العلمية البسيطة لإعادته إلى وضعه الطبيعي؟",
      en: "Racing heart, shallow breathing, cold hands — how your internal alarm system works, and the simple evidence-based tools to calm it down."
    },
    body: {
      ar: `
        <p>كثير من الناس يظنون أن القلق فكرة مزعجة تبدأ في الرأس ثم تنتقل إلى الجسد. الحقيقة العلمية أقرب إلى العكس: في معظم نوبات القلق يبدأ الجسد أولاً، ثم يبحث العقل عن تفسير لما يحدث. هذه الظاهرة تُعرف في الأدبيات النفسية بـ<strong>التغذية الراجعة الجسدية</strong>، وهي سبب رئيسي في تحوّل التوتر العابر إلى نوبة هلع كاملة.</p>

        <h2>ما الذي يحدث فعلياً داخل جسمك؟</h2>
        <p>عندما يلتقط الدماغ إشارة خطر — حقيقية أو متخيَّلة — يُطلق الجهاز العصبي الودّي سلسلة استجابات سريعة: يتسع بؤبؤ العين، يزداد معدل ضربات القلب لضخّ الدم نحو العضلات الكبيرة، يتباطأ الهضم، ويتغير نمط التنفس ليصبح سريعاً وسطحياً. كل هذه التغيرات مفيدة جداً إن كان الخطر أسداً يطاردك، لكنها مزعجة ومحيرة إن كان الخطر رسالة بريد إلكتروني من مديرك.</p>
        <p>المشكلة أن الجسد لا يميّز بين الخطرين. لذلك تشعر بأعراض جسدية حقيقية تماماً، ثم يبدأ عقلك بسؤال خطير: <em>«هل أنا مريض؟ هل سأفقد السيطرة؟»</em> — وهذا السؤال نفسه يرفع مستوى القلق درجة أخرى، فتزداد الأعراض، وتكتمل الحلقة.</p>

        <h2>الحلقة المغلقة: عرض → تفسير → مزيد من العرض</h2>
        <ul>
          <li><strong>العرض:</strong> خفقان مفاجئ في القلب أثناء الاجتماع.</li>
          <li><strong>التفسير الكارثي:</strong> «قلبي سيتوقف» أو «سيفضحني الجميع».</li>
          <li><strong>الاستجابة:</strong> شدّ عضلي وحبس للنفس ومراقبة مفرطة للجسد.</li>
          <li><strong>النتيجة:</strong> أعراض أقوى تؤكد للتفسير الأول أنه كان صحيحاً.</li>
        </ul>
        <p>كسر الحلقة لا يكون بمقاومة الأعراض، بل بتغيير التفسير. حين تقول لنفسك: «هذا أدرينالين فقط، جهاز إنذار حسّاس وليس خطراً»، ينخفض مستوى التهديد المُدرك، فيهدأ الجسد تدريجياً.</p>

        <h2>أربع أدوات عملية مدعومة بالأبحاث</h2>
        <h3>1. التنفّس البطيء بزفير أطول</h3>
        <p>استنشق من الأنف لأربع عدّات، ثم أخرج الهواء ببطء لستّ أو ثماني عدّات. الزفير الأطول من الشهيق يُنشّط الجهاز العصبي نظير الودّي (المكابح الطبيعية للجسم). مارس ذلك دقيقتين فقط، وستلاحظ فرقاً ملموساً في معدل ضربات القلب.</p>

        <h3>2. التسمية العاطفية</h3>
        <p>أظهرت دراسات تصوير الدماغ أن تسمية الشعور بكلمات دقيقة («أشعر بالقلق لأنني غير مستعد») تُقلّل نشاط اللوزة الدماغية المرتبطة بالخوف. الوصف يحوّل التجربة من موجة غامرة إلى معلومة يمكن التعامل معها.</p>

        <h3>3. التحرّك بدل التجمّد</h3>
        <p>القلق طاقة مُعبّأة للحركة. عشر دقائق من المشي السريع أو صعود الدرج تُكمل الدورة الفسيولوجية التي بدأها الجسم، فتُصرف هرمونات التوتر بدل أن تبقى معلّقة في دمك.</p>

        <h3>4. تأجيل القلق</h3>
        <p>خصّص 15 دقيقة يومياً في وقت محدد «لجلسة القلق». حين تظهر فكرة مزعجة خارج هذا الوقت، اكتبها وقل لنفسك: «سأنظر فيها في موعدها». هذه التقنية تُدرّب الدماغ على أن الأفكار ليست أوامر فورية.</p>

        <blockquote>القلق ليس علامة ضعف، بل علامة على نظام حماية يعمل بجدّ أكثر من اللازم. مهمتك ليست إلغاء النظام، بل تخفيض حساسيته.</blockquote>

        <h2>متى يجب طلب المساعدة المتخصصة؟</h2>
        <p>التمارين السابقة مفيدة للقلق اليومي المعتدل. لكن إن كان القلق يمنعك من العمل أو الدراسة أو النوم لأسابيع، أو ظهرت نوبات هلع متكررة، أو لجأت إلى تجنّب أماكن ومواقف محددة، فالأفضل مراجعة مختصّ نفسي مرخّص. العلاج المعرفي السلوكي من أكثر الأساليب فعالية في هذا المجال، ونسب التحسّن فيه مرتفعة.</p>

        <h2>خلاصة عملية</h2>
        <p>ابدأ اليوم بخطوة واحدة: حين تشعر بأعراض جسدية غامضة، توقّف واسأل نفسك «ما الذي أشعر به الآن؟» ثم سمّه، وتنفس ببطء، وتحرك. هذه الثلاثية البسيطة تكفي لتغيير مسار معظم نوبات القلق الخفيفة قبل أن تتضخم.</p>
      `,
      en: `
        <p>Most people assume anxiety starts as a troubling thought that then spreads into the body. The science points the other way: in most anxiety episodes, the body fires first and the mind scrambles for an explanation afterwards. This is known as <strong>somatic feedback</strong>, and it is a major reason ordinary stress escalates into a full panic attack.</p>

        <h2>What actually happens inside your body?</h2>
        <p>When the brain detects a threat — real or imagined — the sympathetic nervous system launches a rapid cascade: pupils dilate, heart rate climbs to push blood toward large muscles, digestion slows, and breathing becomes fast and shallow. All of this is extremely useful if the threat is a chasing predator. It is confusing and uncomfortable if the threat is an email from your manager.</p>
        <p>The body does not distinguish between the two. So you feel genuinely real physical symptoms, and then your mind asks a dangerous question: <em>“Am I ill? Am I losing control?”</em> That question raises the threat level another notch, symptoms intensify, and the loop closes.</p>

        <h2>The closed loop: symptom → interpretation → bigger symptom</h2>
        <ul>
          <li><strong>Symptom:</strong> a sudden heart flutter during a meeting.</li>
          <li><strong>Catastrophic interpretation:</strong> “My heart is failing” or “Everyone will see me fall apart.”</li>
          <li><strong>Response:</strong> muscle tension, breath-holding, hyper-vigilant body scanning.</li>
          <li><strong>Outcome:</strong> stronger symptoms that appear to confirm the first interpretation.</li>
        </ul>
        <p>You break the loop not by fighting the symptoms but by changing the interpretation. Telling yourself “this is just adrenaline — a sensitive alarm, not a danger” lowers the perceived threat, and the body settles with it.</p>

        <h2>Four practical, research-backed tools</h2>
        <h3>1. Slow breathing with a longer exhale</h3>
        <p>Inhale through the nose for four counts, then exhale slowly for six to eight. An exhale longer than the inhale activates the parasympathetic nervous system — the body's natural brake. Two minutes is enough to produce a measurable drop in heart rate.</p>

        <h3>2. Affect labelling</h3>
        <p>Brain-imaging studies show that naming a feeling precisely (“I feel anxious because I am under-prepared”) reduces amygdala activity linked to fear. Describing the experience turns an overwhelming wave into information you can act on.</p>

        <h3>3. Move instead of freeze</h3>
        <p>Anxiety is mobilised energy. Ten minutes of brisk walking or stair climbing completes the physiological cycle the body started, allowing stress hormones to be metabolised rather than left circulating.</p>

        <h3>4. Worry postponement</h3>
        <p>Reserve 15 minutes each day, at a fixed time, as your “worry session”. When an intrusive thought appears outside that window, write it down and tell yourself you will examine it at the appointed time. This trains the brain that thoughts are not urgent commands.</p>

        <blockquote>Anxiety is not a sign of weakness. It is a sign of a protection system working far harder than necessary. Your task is not to delete the system, but to lower its sensitivity.</blockquote>

        <h2>When to seek professional help</h2>
        <p>The techniques above suit everyday, moderate anxiety. But if anxiety has disrupted your work, studies or sleep for weeks, if panic attacks recur, or if you have started avoiding specific places and situations, consult a licensed mental-health professional. Cognitive behavioural therapy is among the most effective treatments available, with high improvement rates.</p>

        <h2>A practical takeaway</h2>
        <p>Start with one step today: when you notice unexplained physical symptoms, pause and ask “what am I feeling right now?” Then name it, breathe slowly, and move. That simple trio is usually enough to redirect a mild anxiety episode before it grows.</p>
      `
    }
  },

  {
    id: "habit-loop",
    image: "assets/images/habit-loop.jpg",
    category: "selfdev",
    date: "2026-09-10",
    updated: "2026-09-12",
    readTime: { ar: 6, en: 5 },
    featured: true,
    cover: "cover-2",
    emoji: "🔁",
    title: {
      ar: "حلقة العادة: لماذا تفشل خططك في الأسبوع الثالث وكيف تنجح بعدها",
      en: "The Habit Loop: Why Your Plans Collapse in Week Three — and How to Fix That"
    },
    excerpt: {
      ar: "دليل عملي مبني على علم سلوك العادات: الإشارة، الرغبة، الاستجابة، المكافأة — مع خطة أسبوعية قابلة للتطبيق.",
      en: "A practical guide built on habit science: cue, craving, response, reward — plus a realistic week-by-week plan."
    },
    body: {
      ar: `
        <p>كل عام تُتخذ ملايين القرارات، ومعظمها يموت في الأسبوع الثالث. السبب ليس ضعفاً في الشخصية، بل تصميماً خاطئاً للعادة نفسها. العادات لا تعمل بالإرادة، بل تعمل بالحلقية والتكرار. ومن يفهم هذه الحلقة يستطيع بناء عادة تدوم سنوات.</p>

        <h2>مكوّنات الحلقة الأربعة</h2>
        <ol>
          <li><strong>الإشارة:</strong> ما يُشغّل السلوك — وقت، مكان، حالة مزاجية، شخص، أو فعل سابق.</li>
          <li><strong>الرغبة:</strong> التوق لتغيّر الحالة الداخلية، لا للسلوك نفسه.</li>
          <li><strong>الاستجابة:</strong> الفعل الذي تقوم به، ومدى صعوبته.</li>
          <li><strong>المكافأة:</strong> ما يحصل بعده ويُخبر دماغك أن الأمر يستحق التكرار.</li>
        </ol>
        <p>معظم الناس يركّزون على الاستجابة فقط («سأتمرّن ساعة يومياً») ويتجاهلون الثلاثة الأخرى، فتسقط الخطة عند أول يوم مزدحم.</p>

        <h2>قاعدة الدقيقتين: اجعل البداية سخيفة الصغر</h2>
        <p>بدل «سأقرأ 30 صفحة»، قل «سأفتح الكتاب وأقرأ فقرة واحدة». الهدف ليس القراءة، بل <strong>إثبات الهوية</strong>: أنت شخص يقرأ كل يوم. حين تصبح العادة موجودة، يمكن تكبيرها لاحقاً بسهولة، لأن أصعب جزء هو البدء لا الاستمرار.</p>

        <h2>اربط العادة الجديدة بإشارة قائمة</h2>
        <p>الصيغة التي أثبتت فعاليتها: <em>«بعد [عادة راسخة]، سأفعل [عادة جديدة صغيرة]»</em>. مثال: بعد أن أضع كوب القهوة على المكتب، سأكتب أهم مهمة لليوم. الإشارة القديمة تعمل كمُشغّل تلقائي ولا تحتاج إلى تذكير أو إرادة.</p>

        <h2>اجعل المكافأة فورية</h2>
        <p>الدماغ يُقدّر المكافأة الآنية أضعاف المكافأة المؤجلة. فائدة التمرين تظهر بعد أسابيع، لذا تحتاج إلى مكافأة الآن: شعور الإنجاز، علامة ✓ على تقويم ظاهر، أو دقيقة استرخاء بعد الأداء. بدون مكافأة فورية ستبهت العادة مهما كانت نواياك صادقة.</p>

        <h2>لا تفوّت مرتين</h2>
        <p>التفويت يوماً واحداً حادث عابر. التفويت يومين متتاليين بداية عادة جديدة معاكسة. اجعل قاعدتك: إن فاتني يوم، أعود في اليوم التالي مهما كان الأداء صغيراً. الاستمرارية أهم من الكمال، والكمال عدوّ الاستمرار.</p>

        <blockquote>أنت لا ترتقي إلى مستوى أهدافك، بل تهبط إلى مستوى أنظمتك. ابنِ النظام وستتكفّل الأهداف بنفسها.</blockquote>

        <h2>خطة أربعة أسابيع</h2>
        <ul>
          <li><strong>الأسبوع 1:</strong> عادة واحدة فقط، بحجم دقيقتين، مربوطة بإشارة ثابتة.</li>
          <li><strong>الأسبوع 2:</strong> تتبّع يومي بسيط + مكافأة فورية بعد كل أداء.</li>
          <li><strong>الأسبوع 3:</strong> توقع الانقطاع، وطبّق قاعدة «لا تفوّت مرتين».</li>
          <li><strong>الأسبوع 4:</strong> زد الحجم تدريجياً أو أضف عادة ثانية صغيرة.</li>
        </ul>
        <p>بعد أربعة أسابيع لن تعتمد على الحماس. ستجد نفسك تؤدي السلوك تلقائياً — وهذه هي اللحظة التي تتحوّل فيها النية إلى هوية.</p>
      `,
      en: `
        <p>Millions of resolutions are made every year, and most of them die in week three. The cause is rarely weak character; it is usually a badly designed habit. Habits do not run on willpower — they run on loops and repetition. Understand the loop and you can build a habit that lasts for years.</p>

        <h2>The four components of the loop</h2>
        <ol>
          <li><strong>Cue:</strong> what triggers the behaviour — a time, a place, a mood, a person, or a preceding action.</li>
          <li><strong>Craving:</strong> the desire for a change in internal state, not for the behaviour itself.</li>
          <li><strong>Response:</strong> the action you take and how hard it is to perform.</li>
          <li><strong>Reward:</strong> what follows, telling your brain the effort was worth repeating.</li>
        </ol>
        <p>Most people focus only on the response (“I will train for an hour a day”) and ignore the other three, so the plan collapses on the first busy day.</p>

        <h2>The two-minute rule: make the start absurdly small</h2>
        <p>Instead of “read 30 pages”, say “open the book and read one paragraph”. The goal is not reading — it is <strong>proving the identity</strong>: you are someone who reads daily. Once the habit exists, scaling it is easy, because starting is the hard part, not continuing.</p>

        <h2>Anchor the new habit to an existing cue</h2>
        <p>The formula that works: <em>“After [established habit], I will [small new habit].”</em> For example: after I set my coffee on the desk, I will write down today's most important task. The old cue acts as an automatic trigger and requires no reminders or willpower.</p>

        <h2>Make the reward immediate</h2>
        <p>The brain values immediate rewards many times more than delayed ones. The benefit of exercise appears weeks later, so you need a reward now: a sense of completion, a visible tick on a calendar, or a minute of relaxation right after. Without an immediate reward, habits fade regardless of how sincere your intentions are.</p>

        <h2>Never miss twice</h2>
        <p>Missing one day is an accident. Missing two is the start of a new, opposite habit. Make your rule: if I miss a day, I return the next day no matter how small the effort. Consistency beats perfection, and perfection kills consistency.</p>

        <blockquote>You do not rise to the level of your goals; you fall to the level of your systems. Build the system and the goals take care of themselves.</blockquote>

        <h2>A four-week plan</h2>
        <ul>
          <li><strong>Week 1:</strong> one habit only, two minutes in size, anchored to a fixed cue.</li>
          <li><strong>Week 2:</strong> simple daily tracking plus an immediate reward after each repetition.</li>
          <li><strong>Week 3:</strong> expect interruptions and apply the “never miss twice” rule.</li>
          <li><strong>Week 4:</strong> increase the volume gradually or add a second small habit.</li>
        </ul>
        <p>After four weeks you will no longer rely on motivation. You will find yourself doing the thing automatically — and that is the moment an intention becomes an identity.</p>
      `
    }
  },

  {
    id: "confidence-body-signals",
    image: "assets/images/confidence-body-signals.jpg",
    category: "bodylanguage",
    date: "2026-09-06",
    updated: null,
    readTime: { ar: 6, en: 5 },
    featured: true,
    cover: "cover-3",
    emoji: "🧍",
    title: {
      ar: "سبع إشارات جسدية تجعلك تبدو واثقاً… وتشعرك بالثقة فعلاً",
      en: "Seven Body-Language Signals That Make You Look Confident — and Feel It"
    },
    excerpt: {
      ar: "لغة الجسد ليست تمثيلاً خارجياً فقط؛ إنها قناة تغذية راجعة تُغيّر إحساسك الداخلي. إليك أهم سبع إشارات وتطبيقاتها.",
      en: "Body language is not just outward performance; it is a feedback channel that changes how you feel inside. Here are the seven signals that matter most."
    },
    body: {
      ar: `
        <p>حين تدخل غرفة اجتماعات، يبدأ الآخرون بتكوين انطباع عنك خلال ثوانٍ — قبل أن تنطق بكلمة. هذه الانطباعات تُبنى على إشارات جسدية يمكن تعلّمها. والأهم من ذلك: تغيير جسدك يُغيّر حالتك الداخلية أيضاً، لأن الدماغ يقرأ وضعيتك ليستنتج كيف يجب أن تشعر.</p>

        <h2>1. الوقفة المفتوحة</h2>
        <p>الأكتاف المرتخية للخلف قليلاً، والصدر غير المنكمش، والذراعان غير المتقاطعتين. الوضعية المغلقة تُرسل رسالتين في وقت واحد: «أنا متوتر» و«لا تقترب». الافتتاح لا يعني التصلّب؛ يعني ببساطة ألا تُخفي جسدك.</p>

        <h2>2. التواصل البصري المتوازن</h2>
        <p>القاعدة العملية: حافظ على النظر في عيني المتحدث معظم الوقت، مع كسر النظر بشكل طبيعي كل بضع ثوانٍ نحو الجانب لا نحو الأرض. النظر إلى الأسفل يُقرأ كخضوع أو ارتباك، بينما التحديق المتواصل يُقرأ كتهديد.</p>

        <h2>3. اليدين المرئيتين</h2>
        <p>إخفاء اليدين في الجيوب أو خلف الظهر أو تحت الطاولة يُفعّل لدى الآخرين شعوراً خفياً بالحذر — تاريخياً، اليد غير المرئية تعني نية غير معلومة. أبقِ يديك مرئيتين واستخدمهما لوصف أفكارك بحركات مفتوحة وهادئة.</p>

        <h2>4. إبطاء الحركة</h2>
        <p>الحركات السريعة المتقطعة توحي بالتوتر. القادة والمرتاحون نفسياً يتحركون بإيقاع أهدأ: يلتفتون ببطء، ويمدّون أيديهم بثبات، ويستقرون في أماكنهم بدل التململ. خفّض سرعتك بنسبة 20% ولاحظ الفرق في انطباع الآخرين.</p>

        <h2>5. الإيماء بالرأس</h2>
        <p>الإيماءات الصغيرة أثناء الاستماع تُرسل رسالة «أنا معك» وتُشعر المتحدث بالأمان، مما يجعله أكثر انفتاحاً تجاهك. لكن الإيماء المتواصل السريع يُقرأ كتوتر ورغبة في إنهاء الحديث.</p>

        <h2>6. احتلال مساحة معقولة</h2>
        <p>من يثق بنفسه لا ينكمش على الكرسي. اجلس بحيث يشغل جسدك المساحة الطبيعية المخصصة له: قدماك على الأرض، وظهرك لا يلتصق بظهر الكرسي بالكامل، وذراعاك مرتاحتان على الجانبين. الاحتلال المعتدل للمساحة يُقرأ كحضور، لا كعدوانية.</p>

        <h2>7. الصوت والوقفة</h2>
        <p>قبل الكلام، خذ نفساً عميقاً من البطن لا من الصدر. التنفس البطني يُخفض نبرة الصوت ويجعله أكثر استقراراً، ويمنحك ثانية إضافية للتفكير. الجملة التي تبدأ بنَفَس كافٍ لا تنتهي بنبرة مرتفعة مترددة.</p>

        <blockquote>لغة الجسد ليست قناعاً ترتديه، بل حوار دائم بين ما في داخلك وما يراه الناس. غيّر طرفاً منه وسيتغيّر الطرف الآخر.</blockquote>

        <h2>تحذير مهم: لا تقرأ الإشارات منفردة</h2>
        <p>أكثر أخطاء المبتدئين شيوعاً تفسير إشارة واحدة بمعزل عن السياق. الذراعان المتقاطعتان قد تعنيان الانغلاق، وقد تعنيان ببساطة أن الغرفة باردة. القاعدة المهنية: ابحث عن <strong>مجموعات من ثلاث إشارات</strong> ولاحظ <strong>التغيّر</strong> عن الحالة الطبيعية للشخص، ولا تحكم أبداً من لقطة واحدة.</p>

        <h2>تمرين أسبوعي</h2>
        <p>اختر إشارة واحدة هذا الأسبوع (مثلاً: إبقاء اليدين مرئيتين) وركّز عليها في ثلاثة مواقف يومياً. في نهاية الأسبوع ستجد أنها أصبحت شبه تلقائية، عندها انتقل إلى الإشارة التالية. بهذه الطريقة تبني حضوراً جسدياً واثقاً في أقل من شهرين.</p>
      `,
      en: `
        <p>The moment you walk into a meeting room, people form an impression of you within seconds — before you say a word. That impression is built from physical signals you can learn. More importantly, changing your body changes your internal state, because the brain reads your posture to infer how it should feel.</p>

        <h2>1. The open stance</h2>
        <p>Shoulders relaxed slightly back, chest uncollapsed, arms uncrossed. A closed posture sends two messages at once: “I am nervous” and “do not approach”. Openness does not mean rigidity; it simply means not hiding your body.</p>

        <h2>2. Balanced eye contact</h2>
        <p>A workable rule: keep your gaze on the speaker's eyes most of the time, breaking naturally every few seconds to the side rather than down. Looking at the floor reads as submission or confusion, while unbroken staring reads as a threat.</p>

        <h2>3. Visible hands</h2>
        <p>Hiding your hands in pockets, behind your back or under the table triggers a subtle wariness in others — historically, an unseen hand meant an unknown intention. Keep your hands visible and use open, calm gestures to describe your ideas.</p>

        <h2>4. Slow down your movement</h2>
        <p>Fast, jerky movement signals anxiety. Confident, settled people move at a calmer tempo: they turn slowly, reach steadily, and stay in place instead of fidgeting. Reduce your speed by 20% and notice how differently people respond.</p>

        <h2>5. Nodding</h2>
        <p>Small nods while listening send the message “I am with you” and make the speaker feel safe, which in turn makes them more open to you. Continuous rapid nodding, however, reads as nervousness or impatience.</p>

        <h2>6. Reasonable use of space</h2>
        <p>Confident people do not shrink into the chair. Sit so your body occupies its natural space: feet on the floor, back not fully pressed into the chair, arms relaxed at your sides. Moderate space-claiming reads as presence, not aggression.</p>

        <h2>7. Voice and breath</h2>
        <p>Before speaking, take a deep breath from the belly rather than the chest. Diaphragmatic breathing lowers pitch, steadies delivery, and buys you an extra second to think. A sentence that starts with enough breath does not end on a rising, uncertain note.</p>

        <blockquote>Body language is not a mask you wear; it is an ongoing dialogue between your inner state and what others see. Change one side and the other follows.</blockquote>

        <h2>An important warning: never read single signals</h2>
        <p>The most common beginner mistake is interpreting one gesture in isolation. Crossed arms may mean defensiveness — or simply that the room is cold. The professional rule: look for <strong>clusters of three signals</strong>, watch for <strong>deviations from a person's baseline</strong>, and never judge from a single snapshot.</p>

        <h2>A weekly exercise</h2>
        <p>Pick one signal this week (for example: keeping your hands visible) and focus on it in three situations a day. By the end of the week it will feel nearly automatic; then move to the next signal. In under two months you will have built a confident physical presence.</p>
      `
    }
  },

  {
    id: "active-listening",
    image: "assets/images/active-listening.jpg",
    category: "relationships",
    date: "2026-09-02",
    updated: "2026-09-04",
    readTime: { ar: 6, en: 5 },
    featured: false,
    cover: "cover-4",
    emoji: "👂",
    title: {
      ar: "الإنصات الفعّال: المهارة التي تُنقذ العلاقات أكثر من النصائح",
      en: "Active Listening: The Skill That Saves Relationships Better Than Advice"
    },
    excerpt: {
      ar: "معظم الخلافات لا تنشأ من اختلاف الآراء، بل من شعور أحد الطرفين أنه غير مسموع. تعلّم كيف تُنصت فعلاً.",
      en: "Most conflicts do not come from differing opinions but from one person feeling unheard. Learn what real listening looks like."
    },
    body: {
      ar: `
        <p>حين يأتيك شخص بمشكلة، يكون ردّ فعلك الطبيعي أن تقدّم حلاً. لكن الدراسات والممارسة السريرية تُظهر أن الغالبية العظمى من الناس لا يبحثون عن حل في اللحظة الأولى، بل عن <strong>الشعور بأنهم مفهومون</strong>. وحين يتحقق هذا الشعور، يصبح الحل أسهل بعشرة أضعاف.</p>

        <h2>الفرق بين السماع والإنصات</h2>
        <p>السماع عملية فسيولوجية تحدث تلقائياً. الإنصات قرار واعٍ يتضمن ثلاثة مستويات: الكلمات، والمشاعر خلف الكلمات، والمعنى الذي يقصده المتحدث. من يُنصت على مستوى الكلمات فقط يردّ على ما قيل؛ ومن يُنصت على مستوى المشاعر يردّ على ما عُنِي.</p>

        <h2>الخطوة الأولى: اسكت عن الحل</h2>
        <p>قبل أن تقدّم أي نصيحة، اسأل: <em>«هل تريد أن أستمع، أم تريد رأيي؟»</em> هذا السؤال البسيط يمنع أكثر الخلافات شيوعاً بين الأزقاء والأصدقاء، لأنه يوضّح التوقعات منذ البداية.</p>

        <h2>الخطوة الثانية: الانعكاس</h2>
        <p>لخّص ما سمعته بكلماتك ثم تحقق منه: «يبدو أن ما أزعجك هو أنك بذلت جهداً كبيراً ولم يُلاحَظ — هل هذا صحيح؟». الانعكاس يُشعر الطرف الآخر بأنه مسموع، ويمنحك فرصة لتصحيح فهمك قبل أن تُبنى عليه ردودك.</p>

        <h2>الخطوة الثالثة: تسمية المشاعر</h2>
        <p>«يبدو أنك محبط» أو «أشعر أن في الأمر خيبة أمل». تسمية العاطفة تُخفّف شدّتها فعلياً على المستوى العصبي، وتفتح باباً للحديث عما هو أعمق من الحدث نفسه. احذر أن تُسمّي المشاعر بنبرة تشخيصية متعالية؛ اجعلها سؤالاً لطيفاً لا حكماً.</p>

        <h2>الخطوة الرابعة: الأسئلة المفتوحة</h2>
        <p>استبدل الأسئلة التي تُجاب بنعم أو لا بأسئلة تبدأ بـ«كيف» و«ماذا»: «كيف شعرت حين حدث ذلك؟» و«ماذا كان أصعب جزء في الموقف؟». هذه الأسئلة تدعو للتوسّع بدل الإغلاق.</p>

        <h2>حواجز الإنصات الشائعة</h2>
        <ul>
          <li><strong>الإصلاح المبكر:</strong> تقديم الحل قبل اكتمال الشكوى.</li>
          <li><strong>المقارنة:</strong> «وأنا حدث لي ما هو أسوأ» — هذه تُسكت المتحدث ولا تُريحه.</li>
          <li><strong>التحضير للرد:</strong> أن تنشغل بصياغة جملتك التالية بدل الاستماع.</li>
          <li><strong>الهاتف:</strong> النظر إلى الشاشة أثناء الحديث رسالة صريحة بأن هناك ما هو أهم.</li>
        </ul>

        <blockquote>أندر هدية تقدّمها لإنسان في عصرنا هي انتباهك الكامل لدقيقتين متواصلتين.</blockquote>

        <h2>تطبيق خلال خلاف</h2>
        <p>في لحظات التوتر، جرّب قاعدة الأدوار: يتحدث الطرف الأول دقيقتين دون مقاطعة، ويُلخّص الطرف الثاني ما سمعه قبل أن يُعبّر عن رأيه، ثم يتبادلان. تبدو القاعدة ميكانيكية في البداية، لكنها تُخفض التصعيد بفاعلية مذهلة لأنها تُخرج الطرفين من وضع الدفاع.</p>

        <h2>خلاصة</h2>
        <p>الإنصات الفعّال ليس لطافة، بل مهارة قابلة للتدريب. ابدأ اليوم بسؤال واحد: «هل تريد أن أستمع أم تريد رأيي؟» وستلاحظ خلال أسبوع تغيّراً واضحاً في جودة محادثاتك.</p>
      `,
      en: `
        <p>When someone brings you a problem, your natural reaction is to offer a solution. Yet research and clinical practice consistently show that most people are not looking for a fix in the first moment — they are looking to <strong>feel understood</strong>. Once that feeling lands, solving the problem becomes ten times easier.</p>

        <h2>Hearing versus listening</h2>
        <p>Hearing is a physiological process that happens automatically. Listening is a conscious decision that operates on three levels: the words, the feelings behind the words, and the meaning the speaker intends. Someone who listens only to the words responds to what was said; someone who listens to the feelings responds to what was meant.</p>

        <h2>Step one: hold the advice</h2>
        <p>Before offering any suggestion, ask: <em>“Do you want me to listen, or do you want my take?”</em> This single question prevents the most common conflict between partners and friends, because it sets expectations from the start.</p>

        <h2>Step two: reflection</h2>
        <p>Summarise what you heard in your own words, then check it: “It sounds like what upset you was putting in a lot of effort and not being seen — is that right?” Reflection makes the other person feel heard and gives you a chance to correct your understanding before you build a response on it.</p>

        <h2>Step three: naming the feeling</h2>
        <p>“You seem frustrated” or “I hear some disappointment in this.” Labelling an emotion measurably reduces its intensity at a neural level and opens the door to what lies beneath the event. Just avoid a diagnostic, superior tone — make it a gentle question, not a verdict.</p>

        <h2>Step four: open questions</h2>
        <p>Replace yes/no questions with ones beginning “how” or “what”: “How did you feel when that happened?” and “What was the hardest part of it?” These invite expansion rather than closure.</p>

        <h2>Common barriers to listening</h2>
        <ul>
          <li><strong>Premature fixing:</strong> offering a solution before the complaint is complete.</li>
          <li><strong>Comparing:</strong> “I had it far worse” — this silences the speaker without comforting them.</li>
          <li><strong>Rehearsing:</strong> busy composing your next sentence instead of listening.</li>
          <li><strong>The phone:</strong> glancing at a screen mid-conversation says plainly that something else matters more.</li>
        </ul>

        <blockquote>The rarest gift you can offer someone in our era is two uninterrupted minutes of your complete attention.</blockquote>

        <h2>Applying it during conflict</h2>
        <p>In tense moments, try the turn-taking rule: the first person speaks for two minutes without interruption, the second summarises what they heard before stating their own view, then they swap. The rule feels mechanical at first, but it de-escalates remarkably well because it takes both people out of a defensive posture.</p>

        <h2>Summary</h2>
        <p>Active listening is not mere politeness — it is a trainable skill. Start today with one question: “Do you want me to listen, or do you want my opinion?” Within a week you will notice a clear change in the quality of your conversations.</p>
      `
    }
  },

  {
    id: "cognitive-biases",
    image: "assets/images/cognitive-biases.jpg",
    category: "psychology",
    date: "2026-08-28",
    updated: null,
    readTime: { ar: 7, en: 6 },
    featured: false,
    cover: "cover-5",
    emoji: "🧠",
    title: {
      ar: "التحيّزات المعرفية: سبعة اختصارات عقلية تخدعك كل يوم",
      en: "Cognitive Biases: Seven Mental Shortcuts That Fool You Every Day"
    },
    excerpt: {
      ar: "دماغك مُصمَّم للسرعة لا للدقة. تعرّف على أكثر التحيّزات تأثيراً على قراراتك وعلاقاتك، وكيف تُقلّل أثرها.",
      en: "Your brain is built for speed, not accuracy. Meet the biases that most affect your decisions and relationships — and how to weaken their grip."
    },
    body: {
      ar: `
        <p>يتخذ الإنسان آلاف القرارات يومياً، ولو فكّر في كل واحدة منها بعمق لانهار من التعب. لذلك يستخدم الدماغ اختصارات ذهنية تُسمّى <strong>الإرشادات</strong>. هذه الاختصارات مفيدة في الغالب، لكنها تُنتج أخطاء منتظمة يمكن التنبؤ بها تُسمّى التحيّزات المعرفية.</p>

        <h2>1. تحيّز التأكيد</h2>
        <p>نبحث عن المعلومات التي تدعم رأينا ونتجاهل ما يناقضه. إن اعتقدت أن زميلك لا يحبك، ستلاحظ كل مرة لم يردّ فيها تحيتك، ولن تلاحظ عشرين مرة ابتسم فيها لك. <strong>المضاد:</strong> اسأل نفسك صراحة «ما الدليل الذي سيُغيّر رأيي؟».</p>

        <h2>2. التأثير الأساسي (الترسيخ)</h2>
        <p>أول رقم أو معلومة تصلك تُثبّت تقديرك لاحقاً، حتى لو كانت عشوائية. لهذا يبدأ البائع بسعر مرتفع. <strong>المضاد:</strong> كوّن تقديرك المستقل قبل سماع أي رقم.</p>

        <h2>3. تحيّز الإسناد الأساسي</h2>
        <p>حين يخطئ غيرك تقول: «هذا بسبب شخصيته». وحين تخطئ أنت تقول: «الظروف كانت صعبة». هذا التحيّز يدمّر العلاقات لأنه يحوّل كل خطأ إلى حكم أخلاقي. <strong>المضاد:</strong> امنح الآخرين التفسير الظرفي الذي تمنحه لنفسك.</p>

        <h2>4. قراءة الأفكار والتنبؤ بالكارثة</h2>
        <p>«هو غاضب مني بالتأكيد» و«العرض التقديمي سيفشل حتماً» — هذان ليسا تحليلين بل توقّعان مُقنّعان بالمنطق. <strong>المضاد:</strong> اكتب التوقّع، ثم اكتب بديلاً محايداً واحتماله، وقارن الأدلة على كل منهما.</p>

        <h2>5. انحياز التوفّر</h2>
        <p>نحكم على احتمال الشيء بمدى سهولة تذكّر أمثلة عليه. حوادث الطيران تُغطّى إعلامياً فتبدو أكثر خطورة من حوادث السيارات، رغم العكس إحصائياً. <strong>المضاد:</strong> حين تشعر بالخوف من احتمال ما، ابحث عن المعدّل الإحصائي لا عن القصة الأشهر.</p>

        <h2>6. مغالطة التكلفة الغارقة</h2>
        <p>البقاء في علاقة أو وظيفة أو مشروع لمجرد أنك استثمرت فيه سنوات. ما دُفع لا يعود؛ السؤال الصحيح هو: «لو بدأت اليوم من الصفر، هل سأختار هذا؟» <strong>المضاد:</strong> قرّر بناءً على المستقبل فقط.</p>

        <h2>7. تأثير الهالة</h2>
        <p>صفة إيجابية واحدة (الجاذبية، الفصاحة، الشهادة المرموقة) تجعلنا نفترض وجود صفات إيجابية أخرى. لهذا ينجح المتحدّث الواثق في تمرير أفكار ضعيفة. <strong>المضاد:</strong> افصل بين أسلوب الطرح ومحتواه، وقيّم الحجة وحدها.</p>

        <blockquote>لا يمكنك حذف التحيّزات من دماغك، لكن يمكنك بناء عادات تُبطئ قراراتك المهمة بما يكفي لتجاوزها.</blockquote>

        <h2>كيف تُقلّل أثر التحيّزات عملياً؟</h2>
        <ul>
          <li><strong>أبطئ القرارات الكبيرة:</strong> اجعل قاعدة 24 ساعة لأي قرار مالي أو علائقي مهم.</li>
          <li><strong>اطلب رأياً مخالفاً:</strong> اسأل شخصاً تثق به: «أين ترى الخطأ في تفكيري؟».</li>
          <li><strong>اكتب:</strong> التفكير المكتوب يُظهر القفزات المنطقية التي تُخفيها سرعة التفكير الذهني.</li>
          <li><strong>افحص النتائج لا النوايا:</strong> بعد ثلاثة أشهر، راجع هل كان تقديرك صحيحاً؟ هذا يبني معايرة أدق.</li>
        </ul>

        <h2>خلاصة</h2>
        <p>معرفة التحيّزات لا تجعلك محصّناً منها، لكنها تمنحك لحظة تردد مفيدة قبل الحكم. وفي هذه اللحظة بالذات تكمن الحرية الفكرية.</p>
      `,
      en: `
        <p>People make thousands of decisions a day. Thinking deeply about each one would be exhausting, so the brain relies on mental shortcuts called <strong>heuristics</strong>. These shortcuts are usually helpful, but they produce predictable, systematic errors known as cognitive biases.</p>

        <h2>1. Confirmation bias</h2>
        <p>We seek information that supports our existing view and discount what contradicts it. If you believe a colleague dislikes you, you will notice every unreturned greeting and none of the twenty smiles. <strong>Counter-move:</strong> ask yourself explicitly, “what evidence would change my mind?”</p>

        <h2>2. Anchoring</h2>
        <p>The first number or fact you encounter fixes your later estimates, even when it is arbitrary. This is why sellers open high. <strong>Counter-move:</strong> form your own independent estimate before hearing any figure.</p>

        <h2>3. Fundamental attribution error</h2>
        <p>When others fail, we say “that is who they are”. When we fail, we say “the circumstances were hard”. This bias wrecks relationships because it converts every mistake into a moral verdict. <strong>Counter-move:</strong> grant others the situational explanation you grant yourself.</p>

        <h2>4. Mind-reading and catastrophising</h2>
        <p>“He is definitely angry with me” and “the presentation will be a disaster” are not analyses; they are predictions dressed as logic. <strong>Counter-move:</strong> write the prediction down, write one neutral alternative with its probability, then compare the evidence for each.</p>

        <h2>5. Availability bias</h2>
        <p>We judge likelihood by how easily examples come to mind. Plane crashes dominate the news and so feel more dangerous than car crashes, though the statistics say the opposite. <strong>Counter-move:</strong> when a possibility frightens you, look up base rates instead of the loudest story.</p>

        <h2>6. Sunk-cost fallacy</h2>
        <p>Staying in a relationship, job or project simply because you already invested years in it. What is spent does not return; the correct question is “if I started from zero today, would I choose this?” <strong>Counter-move:</strong> decide on the future alone.</p>

        <h2>7. The halo effect</h2>
        <p>One positive trait — attractiveness, fluency, a prestigious degree — makes us assume other positive traits exist too. This is why confident speakers get weak ideas accepted. <strong>Counter-move:</strong> separate delivery from content and evaluate the argument on its own.</p>

        <blockquote>You cannot delete biases from your brain, but you can build habits that slow your important decisions down enough to step over them.</blockquote>

        <h2>How to reduce their influence in practice</h2>
        <ul>
          <li><strong>Slow down big decisions:</strong> adopt a 24-hour rule for any significant financial or relational choice.</li>
          <li><strong>Invite disagreement:</strong> ask someone you trust, “where do you think my reasoning is wrong?”</li>
          <li><strong>Write it out:</strong> written thinking exposes the logical leaps that speed hides.</li>
          <li><strong>Review outcomes, not intentions:</strong> three months later, check whether your estimate was right. This builds better calibration.</li>
        </ul>

        <h2>Summary</h2>
        <p>Knowing about biases does not immunise you against them, but it buys a useful moment of hesitation before you judge — and that moment is where intellectual freedom lives.</p>
      `
    }
  },

  {
    id: "healthy-boundaries",
    image: "assets/images/healthy-boundaries.jpg",
    category: "relationships",
    date: "2026-08-22",
    updated: "2026-08-25",
    readTime: { ar: 6, en: 5 },
    featured: false,
    cover: "cover-6",
    emoji: "🚧",
    title: {
      ar: "كيف تضع حدوداً صحية دون أن تشعر بالذنب",
      en: "How to Set Healthy Boundaries Without Feeling Guilty"
    },
    excerpt: {
      ar: "الحدود ليست أنانية، بل شرط لبقاء العلاقة. صيغة عملية من ثلاث خطوات لقول «لا» باحترام ووضوح.",
      en: "Boundaries are not selfishness; they are a condition for a relationship to survive. A practical three-step formula for saying no with respect and clarity."
    },
    body: {
      ar: `
        <p>يشعر كثير من الطيبين أنهم أمام خيارين: إما تلبية كل الطلبات والإنهاك، أو الرفض والشعور بالذنب. الحقيقة أن المشكلة ليست في الرفض، بل في طريقة صياغته وفي الاعتقاد الخاطئ بأن قيمة الإنسان تُقاس بمدى استعداده للتضحية بنفسه.</p>

        <h2>ما هي الحدود فعلياً؟</h2>
        <p>الحدود ليست جداراً يمنع الناس منك، بل خطوط تُوضّح مسؤولياتك ومسؤوليات غيرك. في العلاقة الصحية: أنت مسؤول عن تصرّفاتك ومشاعرك ووعودك، ولست مسؤولاً عن مشاعر الآخرين تجاه قراراتك المشروعة.</p>

        <h2>لماذا نشعر بالذنب؟</h2>
        <ul>
          <li>تعلّمنا في الطفولة أن «الولد/البنت الجيدة» هي من تُرضي الجميع.</li>
          <li>نخلط بين مشاعر الآخر وحقّه: من حقّه أن ينزعج، وليس من حقّه أن يفرض.</li>
          <li>نخشى فقدان العلاقة، مع أن العلاقة التي تنتهي بسبب «لا» واحدة لم تكن علاقة بل استغلالاً منظماً.</li>
        </ul>

        <h2>صيغة الخطوات الثلاث</h2>
        <p>عند الرفض، استخدم هذا الترتيب: <strong>تقدير + رفض واضح + بديل (اختياري)</strong>.</p>
        <p>مثال: «أقدّر ثقتك بي في هذا المشروع (تقدير)، لكنني لا أستطيع الالتزام به هذا الأسبوع لأن لدي أولويات مُتعَب عليها (رفض واضح). أستطيع مساعدتك بعد عشرة أيام إن كان ذلك مناسباً (بديل)».</p>
        <p>لاحظ ما غاب عن الجملة: الاعتذار المفرط، والتبرير الطويل، والكذب. كلما زاد التبرير، زادت فرص التفاوض على حدّك.</p>

        <h2>أخطاء تُضعف حدّك</h2>
        <ul>
          <li><strong>«لا» بنبرة اعتذار:</strong> الصوت المتردد يُقرأ كدعوة للإلحاح.</li>
          <li><strong>اختلاق أعذار كاذبة:</strong> حين تُكشف، تفقد مصداقيتك وحدّك معاً.</li>
          <li><strong>الحد المؤقت:</strong> قول «لا أستطيع الآن» عندما تقصد «لا أريد أبداً».</li>
          <li><strong>التراجع تحت الضغط:</strong> التراجع مرة واحدة بعد الإلحاح يُعلّم الطرف الآخر أن الإلحاح يعمل.</li>
        </ul>

        <blockquote>«لا» كلمة كاملة. وحين تُقال باحترام، فهي لا تُنهي العلاقة — بل تُنهي سوء الفهم حولها.</blockquote>

        <h2>الحدود في العمل</h2>
        <p>في البيئة المهنية، اجعل حدودك متعلقة بالقدرة لا بالرغبة: «طاقتي هذا الأسبوع مخصّصة للمهمة (أ)، وأستطيع إدراج (ب) في الأسبوع القادم». هذه الصيغة مهنية ولا تُشعرك بالحرج، وتُظهر أنك تُدير أولوياتك لا أنك ترفض العمل.</p>

        <h2>الحدود مع العائلة</h2>
        <p>العلاقات العائلية أصعب لأن الرفض يُفسَّر أحياناً كعقوق. ابدأ بالحدود الصغيرة والمتكررة بدل المواجهة الكبرى: وقت اتصال محدد، مواضيع لا تُناقش، زيارات بمدة معلومة. الثبات الهادئ على مدى أشهر يُغيّر التوقعات دون صراع.</p>

        <h2>تمرين عملي</h2>
        <p>اكتب قائمة بثلاثة مواقف تقول فيها «نعم» وأنت تتمنى «لا». هذا الأسبوع، اختر واحداً وطبّق صيغة الخطوات الثلاث. ستلاحظ أن الشعور بالذنب يظهر في أول عشر دقائق ثم يتلاشى — وهذا النمط يتكرر في كل مرة حتى يضعف تماماً.</p>
      `,
      en: `
        <p>Kind people often feel trapped between two options: meet every request and burn out, or refuse and drown in guilt. The real problem is not the refusal — it is how the refusal is phrased, and the false belief that a person's worth is measured by their willingness to sacrifice themselves.</p>

        <h2>What boundaries actually are</h2>
        <p>A boundary is not a wall that keeps people out; it is a line that clarifies your responsibilities and theirs. In a healthy relationship you are responsible for your actions, your feelings and your promises — not for how others feel about your legitimate decisions.</p>

        <h2>Why we feel guilty</h2>
        <ul>
          <li>We learned as children that a “good boy” or “good girl” is one who pleases everyone.</li>
          <li>We confuse another person's feelings with their rights: they have a right to be displeased, not a right to impose.</li>
          <li>We fear losing the relationship, though a relationship that ends over one “no” was never a relationship — it was organised exploitation.</li>
        </ul>

        <h2>The three-step formula</h2>
        <p>When refusing, use this order: <strong>appreciation + clear refusal + optional alternative</strong>.</p>
        <p>Example: “I appreciate you trusting me with this (appreciation), but I cannot commit to it this week because I have prior obligations (clear refusal). I could help in ten days if that works (alternative).”</p>
        <p>Notice what is missing: excessive apology, lengthy justification, and fabrication. The more you over-explain, the more you invite negotiation over your boundary.</p>

        <h2>Mistakes that weaken your boundary</h2>
        <ul>
          <li><strong>A “no” delivered apologetically:</strong> a hesitant tone reads as an invitation to push.</li>
          <li><strong>Inventing false excuses:</strong> when exposed, you lose both credibility and the boundary.</li>
          <li><strong>The temporary no:</strong> saying “not right now” when you mean “never”.</li>
          <li><strong>Caving under pressure:</strong> caving once after persistence teaches the other person that persistence works.</li>
        </ul>

        <blockquote>“No” is a complete sentence. Delivered with respect, it does not end the relationship — it ends the misunderstanding about it.</blockquote>

        <h2>Boundaries at work</h2>
        <p>In professional settings, frame boundaries in terms of capacity rather than desire: “My capacity this week is committed to project A, and I can take on B next week.” This is professional, embarrassment-free, and shows you manage priorities rather than refuse work.</p>

        <h2>Boundaries with family</h2>
        <p>Family boundaries are harder because refusal is sometimes read as ingratitude. Start with small, repeated limits instead of one big confrontation: a fixed calling window, topics that are off-limits, visits with a known end time. Calm consistency over months changes expectations without conflict.</p>

        <h2>A practical exercise</h2>
        <p>Write down three situations where you say “yes” while wishing you could say “no”. This week, pick one and apply the three-step formula. You will notice the guilt appears for about ten minutes and then fades — and that pattern repeats until it weakens altogether.</p>
      `
    }
  },

  {
    id: "micro-expressions",
    image: "assets/images/micro-expressions.jpg",
    category: "bodylanguage",
    date: "2026-08-15",
    updated: null,
    readTime: { ar: 6, en: 5 },
    featured: false,
    cover: "cover-3",
    emoji: "👁️",
    title: {
      ar: "التعبيرات الدقيقة: كيف تقرأ المشاعر العابرة على الوجه",
      en: "Micro-Expressions: How to Read the Feelings That Flash Across a Face"
    },
    excerpt: {
      ar: "تعبيرات لا تتجاوز أجزاء من الثانية تكشف المشاعر الحقيقية قبل أن يتدخل القناع الاجتماعي. دليل مبسّط للتمييز بينها.",
      en: "Expressions lasting fractions of a second reveal real feelings before the social mask takes over. A simple guide to telling them apart."
    },
    body: {
      ar: `
        <p>التعبير الدقيق هو انفعال عاطفي حقيقي يظهر على الوجه لفترة قصيرة جداً (بين 1/25 و1/15 من الثانية) قبل أن يضبط الشخص تعبيره عمداً. أهميته أنه يصعب تزييفه أو كبته بالكامل، لأنه ينشأ من مناطق دماغية أسرع من السيطرة الواعية.</p>

        <h2>الفرق بين التعبير الحقيقي والمُفتعل</h2>
        <p>الابتسامة الصادقة (ابتسامة دوشين) تشمل عضلتين: عضلة الفم التي ترفع الزوايا، وعضلة العين التي تُنتج تجاعيد حولها وترفع الخد. الابتسامة المصطنعة تشغل الفم فقط، فتبدو العينان ساكنتين. هذا الفارق البسيط هو أكثر المؤشرات موثوقية في الحياة اليومية.</p>

        <h2>العلامات الأساسية للمشاعر السبعة</h2>
        <ul>
          <li><strong>الفرح:</strong> رفع زوايا الفم + تجاعيد حول العين + ارتفاع الخدود.</li>
          <li><strong>الحزن:</strong> انخفاض الزاوية الداخلية للحاجب، هبوط زوايا الشفاه، نظرات ثابتة نحو الأسفل.</li>
          <li><strong>الغضب:</strong> تقريب الحاجبين للأسفل، ضغط الشفتين أو تضييقهما، اتساع فتحتي الأنف.</li>
          <li><strong>الخوف:</strong> رفع الحاجبين وضمّهما معاً، اتساع العين وظهور البياض أعلاها، شدّ زاويتي الفم للخلف.</li>
          <li><strong>المفاجأة:</strong> رفع الحاجبين عالياً، فتح الفم والعينين — وهي أقصر التعبيرات مدةً (أقل من ثانية).</li>
          <li><strong>الاشمئزاز:</strong> تجعيد الأنف ورفع الشفة العليا.</li>
          <li><strong>الاحتقار:</strong> رفع جانب واحد من الفم — وهو التعبير الوحيد غير المتماثل بين السبعة.</li>
        </ul>

        <h2>كيف تتدرّب على ملاحظتها؟</h2>
        <ol>
          <li><strong>شاهد بلا صوت:</strong> أوقف صوت أي مقطع حواري وركّز على الوجوه فقط؛ سيزداد انتباهك للإشارات البصرية.</li>
          <li><strong>أبطئ السرعة:</strong> إن كان المشغّل يسمح، شاهد بسرعة 0.5 لملاحظة ما يفوتك في الوقت الحقيقي.</li>
          <li><strong>راقب نقطة التغيّر:</strong> أهم لحظة هي لحظة الانتقال بين تعبيرين، لا التعبير المستقر.</li>
          <li><strong>سجّل ملاحظاتك:</strong> اكتب ما لاحظته وراجع دقّته لاحقاً مع السياق.</li>
        </ol>

        <blockquote>لا تحكم على شخص من تعبير عابر واحد؛ احكم على النمط، وامنح الناس دائماً حق السياق.</blockquote>

        <h2>تحذيرات أخلاقية وعملية</h2>
        <p>قراءة التعبيرات الدقيقة ليست كشف كذب مضموناً. لا يوجد سلوك واحد يعني الكذب؛ ما يوجد هو <strong>تناقض</strong> بين الكلام والتعبير، أو <strong>تغيّر</strong> عن الحالة الأساسية للشخص. استخدم هذه المعرفة لتحسين التعاطف وفهم الآخرين، لا لاتهامهم. كما أن استخدامها للضغط أو التلاعب سلوك مرفوض أخلاقياً ويُدمّر الثقة.</p>

        <h2>السياق يظلّ الحاكم</h2>
        <p>قبل أن تُفسّر أي إشارة، اسأل: ما الحالة الطبيعية لهذا الشخص؟ هل هو متعب أو مريض أو في ثقافة مختلفة؟ هل هناك سبب بيئي (برد، ضوء ساطع)؟ التفسير الصحيح يأتي من جمع الإشارات مع السياق، لا من لقطة معزولة.</p>
      `,
      en: `
        <p>A micro-expression is a genuine emotional display that crosses the face for a very short time (between 1/25 and 1/15 of a second) before the person deliberately adjusts their expression. Its importance lies in how hard it is to fake or fully suppress, since it originates in brain regions faster than conscious control.</p>

        <h2>Genuine versus posed</h2>
        <p>A sincere smile (the Duchenne smile) involves two muscle groups: the one that lifts the corners of the mouth, and the one around the eye that produces crow's feet and raises the cheek. A posed smile engages the mouth only, leaving the eyes still. This single difference is the most reliable cue in everyday life.</p>

        <h2>The core markers of the seven emotions</h2>
        <ul>
          <li><strong>Joy:</strong> raised mouth corners + eye crinkling + lifted cheeks.</li>
          <li><strong>Sadness:</strong> inner eyebrow corners pulled down, drooping lip corners, gaze fixed downward.</li>
          <li><strong>Anger:</strong> eyebrows pulled down and together, pressed or narrowed lips, flared nostrils.</li>
          <li><strong>Fear:</strong> eyebrows raised and drawn together, widened eyes with white visible above the iris, mouth corners pulled back.</li>
          <li><strong>Surprise:</strong> high raised eyebrows, open mouth and eyes — the shortest of all expressions (under one second).</li>
          <li><strong>Disgust:</strong> wrinkled nose with raised upper lip.</li>
          <li><strong>Contempt:</strong> one-sided mouth raise — the only asymmetrical expression of the seven.</li>
        </ul>

        <h2>How to train yourself to notice them</h2>
        <ol>
          <li><strong>Watch without sound:</strong> mute any conversation clip and focus purely on faces; visual attention rises sharply.</li>
          <li><strong>Slow the playback:</strong> at 0.5 speed you will catch what real-time viewing misses.</li>
          <li><strong>Watch the transition point:</strong> the shift between two expressions matters more than the settled expression.</li>
          <li><strong>Log your observations:</strong> write what you saw and check its accuracy later against context.</li>
        </ol>

        <blockquote>Never judge a person by a single fleeting expression. Judge the pattern — and always grant people the benefit of context.</blockquote>

        <h2>Ethical and practical warnings</h2>
        <p>Reading micro-expressions is not a guaranteed lie detector. No single behaviour means deception; what exists is a <strong>mismatch</strong> between words and expression, or a <strong>deviation</strong> from a person's baseline. Use this knowledge to improve empathy and understanding, never to accuse. Using it to pressure or manipulate others is ethically wrong and destroys trust.</p>

        <h2>Context remains the judge</h2>
        <p>Before interpreting any signal, ask: what is this person's normal state? Are they tired, ill, or from a different culture? Is there an environmental cause (cold, bright light)? Accurate reading comes from combining signals with context, never from an isolated snapshot.</p>
      `
    }
  },

  {
    id: "focus-deep-work",
    image: "assets/images/focus-deep-work.jpg",
    category: "selfdev",
    date: "2026-08-09",
    updated: "2026-08-11",
    readTime: { ar: 6, en: 5 },
    featured: false,
    cover: "cover-2",
    emoji: "🎯",
    title: {
      ar: "استعادة التركيز في عصر التشتيت: خطة عملية من خمس خطوات",
      en: "Reclaiming Focus in the Age of Distraction: A Five-Step Practical Plan"
    },
    excerpt: {
      ar: "لماذا ينهار انتباهك كل بضع دقائق، وكيف تُعيد تدريب دماغك على العمل العميق دون حرمان من التكنولوجيا.",
      en: "Why your attention breaks every few minutes, and how to retrain your brain for deep work without giving up technology."
    },
    body: {
      ar: `
        <p>المتوسط الشائع لجلسة تركيز متصلة على الهاتف أو الحاسوب انخفض بشكل ملحوظ خلال العقد الماضي. المشكلة ليست كسلاً، بل بيئة مُصمَّمة لاستقطاب الانتباه. وكل بيئة مُصمَّمة يمكن إعادة تصميمها.</p>

        <h2>لماذا يصعب التركيز؟</h2>
        <p>الدماغ يُفضّل المعلومات الجديدة لأنها ترتبط بنظام المكافأة. كل إشعار يقدّم جرعة صغيرة وغير متوقعة من الجِدة، وهذا النمط — المكافأة المتغيرة — هو أقوى نمط تعلّم معروف. لذا فالرغبة في فحص الهاتف ليست ضعفاً أخلاقياً، بل استجابة طبيعية لمحفّز قوي.</p>

        <h2>الخطوة 1: اجعل التشتيت أصعب</h2>
        <p>ضع الهاتف في غرفة أخرى أو في درج مغلق أثناء جلسة العمل. الدراسات تُظهر أن مجرد وجود الهاتف مرئياً على المكتب يستهلك جزءاً من موارد الانتباه حتى لو كان صامتاً ومقلوباً. الإبعاد الفيزيائي أقوى من قوة الإرادة بمراحل.</p>

        <h2>الخطوة 2: اعمل في كتل زمنية</h2>
        <p>ابدأ بـ25 دقيقة عمل متصل ثم 5 دقائق راحة، وزد المدة تدريجياً حتى 50–90 دقيقة. الأهم: في فترة الراحة لا تفتح مواقع التواصل، لأن الانتقال من تشتيت إلى تركيز عميق يحتاج وقتاً أطول مما تظن. امشِ، اشرب ماء، انظر إلى مسافة بعيدة.</p>

        <h2>الخطوة 3: حدّد المهمة قبل أن تجلس</h2>
        <p>«سأعمل» هدف غامض يُنتج تسويفاً. «سأكتب المسودة الأولى للقسم الثاني خلال 40 دقيقة» هدف واضح يُنشّط البدء. الغموض هو العدو الأول للتركيز، والوضوح نصف الإنجاز.</p>

        <h2>الخطوة 4: سجل المقاطعات</h2>
        <p>أبقِ ورقة بجانبك، وكلما ظهرت فكرة مُلحّة («أرسل تلك الرسالة»، «ابحث عن هذا»)، اكتبها في الورقة وواصل عملك. هذه التقنية تُفرّغ الدماغ من الخوف من النسيان دون كسر التركيز.</p>

        <h2>الخطوة 5: احترم الإيقاع اليومي</h2>
        <p>لكل شخص نافذتا تركيز عالٍ في اليوم، غالباً في أول ساعتين بعد اليقظة الكاملة وبعد العصر. ضع أصعب أعمالك في نوافذك الشخصية، والأعمال الإدارية الروتينية في فترات الانخفاض. محاربة الإيقاع البيولوجي تُنتج عملاً بطيئاً وإحباطاً دائماً.</p>

        <blockquote>التركيز ليس موهبة بل بيئة. غيّر محيطك يتغيّر أداؤك دون أن تحتاج إلى إنسان آخر غير نفسك.</blockquote>

        <h2>ماذا عن الملل؟</h2>
        <p>قدرة الدماغ على العمل العميق تتآكل حين يُملأ كل فراغ بالمحتوى. إن كنت تُشاهد مقاطع أثناء الانتظار أو الأكل أو المشي القصير، فلن يتحمل دماغك جلسة عمل بلا تحفيز. جرّب أن تترك فترات الانتظار فارغة لبضعة أيام، وستلاحظ تحسناً ملحوظاً في قدرتك على البقاء مع مهمة واحدة.</p>

        <h2>قياس التقدّم</h2>
        <p>لا تقيس عدد الساعات، بل عدد الكتل المكتملة بلا مقاطعة. ابدأ بثلاث كتل يومياً، واستهدف خمساً خلال شهر. هذا المقياس بسيط وصادق، ويُظهر التحسّن بوضوح خلال أسبوعين فقط.</p>
      `,
      en: `
        <p>The typical length of an uninterrupted focus session on a phone or computer has dropped markedly over the past decade. The cause is not laziness; it is an environment engineered to capture attention. And any engineered environment can be re-engineered.</p>

        <h2>Why focus is hard</h2>
        <p>The brain prefers novel information because novelty is tied to the reward system. Every notification delivers a small, unpredictable dose of it — and variable reward is the most powerful learning pattern known. Wanting to check your phone is therefore not a moral failing but a normal response to a strong stimulus.</p>

        <h2>Step 1: make distraction harder</h2>
        <p>Put the phone in another room or a closed drawer during a work session. Research shows that merely having the phone visible on the desk consumes attentional resources, even when it is silent and face-down. Physical distance beats willpower by a wide margin.</p>

        <h2>Step 2: work in time blocks</h2>
        <p>Start with 25 minutes of continuous work and 5 minutes of rest, then lengthen gradually toward 50–90 minutes. Crucially, do not open social media during the break: switching from distraction to deep focus takes longer than you think. Walk, drink water, look into the distance.</p>

        <h2>Step 3: define the task before you sit down</h2>
        <p>“I will work” is a vague goal that produces procrastination. “I will write the first draft of section two in 40 minutes” is a clear goal that triggers action. Ambiguity is the first enemy of focus; clarity is half the achievement.</p>

        <h2>Step 4: log interruptions</h2>
        <p>Keep a sheet of paper beside you. Whenever an urgent thought appears (“send that message”, “look this up”), write it down and keep working. The technique relieves the fear of forgetting without breaking concentration.</p>

        <h2>Step 5: respect your daily rhythm</h2>
        <p>Everyone has two high-focus windows a day, usually in the first two hours after full waking and again in the late afternoon. Place your hardest work in your personal windows and routine admin in the dips. Fighting your biology produces slow output and constant frustration.</p>

        <blockquote>Focus is not a talent; it is an environment. Change your surroundings and your performance changes without needing anyone but yourself.</blockquote>

        <h2>What about boredom?</h2>
        <p>The capacity for deep work erodes when every gap is filled with content. If you watch clips while waiting, eating or taking a short walk, your brain will not tolerate a work session without stimulation. Try leaving waiting moments empty for a few days and you will notice a clear improvement in your ability to stay with a single task.</p>

        <h2>Measuring progress</h2>
        <p>Do not count hours; count completed uninterrupted blocks. Start at three a day and aim for five within a month. The metric is simple, honest, and shows improvement within just two weeks.</p>
      `
    }
  },

  {
    id: "emotional-intelligence",
    image: "assets/images/emotional-intelligence.jpg",
    category: "psychology",
    date: "2026-09-18",
    updated: null,
    readTime: { ar: 7, en: 6 },
    featured: true,
    cover: "cover-5",
    emoji: "💞",
    title: {
      ar: "الذكاء العاطفي: لماذا يتفوق على معدل الذكاء في تحديد نجاحك؟",
      en: "Emotional Intelligence: Why It Outperforms IQ in Predicting Your Success"
    },
    excerpt: {
      ar: "أربعة مكوّنات يمكن تدريبها تُحدّد جودة قراراتك وعلاقاتك أكثر من درجة ذكائك: الوعي بالذات، إدارتها، الوعي بالآخرين، وإدارة العلاقات.",
      en: "Four trainable components shape the quality of your decisions and relationships more than your IQ: self-awareness, self-management, social awareness and relationship management."
    },
    body: {
      ar: `
        <p>تأمل شخصين بنفس الدرجة العلمية ونفس الخبرة: أحدهما يصعد بثبات ويكسب ثقة من حوله، والآخر يتعثر في كل مشروع رغم كفاءته التقنية العالية. الفرق نادراً ما يكون في المعرفة، بل في شيء أقل ظهوراً في الشهادات: <strong>الذكاء العاطفي</strong> — القدرة على ملاحظة ما تشعر به وفهمه وتوجيهه، وقراءة ما يشعر به الآخرون والتعامل معه بذكاء.</p>

        <h2>ما الذكاء العاطفي فعلياً؟</h2>
        <p>ليس اللطف الزائد ولا كبت المشاعر، بل منظومة من أربع قدرات متراتبة:</p>
        <ol>
          <li><strong>الوعي بالذات:</strong> أن تلاحظ حالتك الداخلية لحظة حدوثها («أنا منزعج الآن لأنني شعرت بالتجاهل»).</li>
          <li><strong>إدارة الذات:</strong> أن تختار استجابتك بدل أن تنقاد لانفعالك، خاصة تحت الضغط.</li>
          <li><strong>الوعي الاجتماعي:</strong> قراءة مشاعر الآخرين وحاجاتهم غير المعلنة من نبرتهم ولغتهم وسياقهم.</li>
          <li><strong>إدارة العلاقات:</strong> تحويل كل ما سبق إلى تواصل فعّال: إقناع، احتواء خلاف، بناء ثقة.</li>
        </ol>
        <p>الترتيب مهم: من لا يرى مشاعره نفسه لا يستطيع إدارتها، ومن لا يديرها لا يستطيع قراءة الآخرين بصفاء.</p>

        <h2>لماذا يتفوق على معدل الذكاء؟</h2>
        <p>معدل الذكاء يتنبأ بأدائك في مهام محددة المعالم: تحليل، حفظ، حل مسائل. لكن الحياة العملية معظمها مهام غير محددة المعالم: تفاوض، تعاون، إقناع، تحمّل غموض. وفي هذه المساحة تتقدم المهارات العاطفية. الأبحاث التنظيمية المتراكمة تُظهر أن الفارق بين المؤدين المتوسطين والمتميزين في الأدوار القيادية يعود في جزء كبير منه إلى كفاءات عاطفية لا معرفية، وأن فرق العمل ذات الأمان النفسي — وهو منتج ذكاء عاطفي جماعي — تنتج جودة أعلى باستمرار.</p>
        <p>بمعنى أدق: ذكاؤك يفتح لك الباب، لكن ذكاءك العاطفي هو ما يُبقيك في الغرفة.</p>

        <h2>إشارات تستحق الانتباه</h2>
        <ul>
          <li>تتفاجأ بانفعالك بعد فوات الأوان: «لا أعرف ماذا حدث لي».</li>
          <li>تتكرر نفس الخلافات مع أشخاص مختلفين بنفس النمط.</li>
          <li>تنزعج من نقد بسيط أكثر مما يتناسب مع محتواه.</li>
          <li>تجد صعوبة في تسمية ما تشعر به beyond «تمام» أو «متضايق».</li>
          <li>تتجنب المحادثات الصعبة حتى تتحول إلى أزمات.</li>
        </ul>

        <h2>أربع ممارسات تُدرَّب عليها يوميّاً</h2>
        <h3>1. توسيع مفرداتك العاطفية</h3>
        <p>جرّب أن تستبدل «متضايق» بوصف أدق: محبط؟ مُهمَل؟ قلق؟ غيور؟ الإرهاق؟ التسمية الدقيقة تُخفّف حدّة الانفعال وتمنحك خيار الاستجابة. ثلاث تسميات دقيقة يومياً كافية لبناء هذه العضلة خلال أسابيع.</p>

        <h3>2. قاعدة الوقفة</h3>
        <p>بين المثير والاستجابة مساحة صغيرة. وسّعها عمداً: نفس عميق واحد وعدّ إلى ستة قبل الرد على رسالة استفزتك. ستة ثوانٍ تكفي لتنتقل القيادة من مركز الإنفعال إلى مركز التفكير.</p>

        <h3>3. إعادة التقييم لا الكبت</h3>
        <p>الكبت («لا شيء يزعجني») يستهلك طاقتك ويظهر لاحقاً بشكل أسوأ. إعادة التقييم تعني تغيير تفسير الحدث: «لم يردّ على رسالتي لأنه مشغول، لا لأنه يحتقرني». نفس الحدث، انفعال مختلف تماماً.</p>

        <h3>4. طلب تغذية راجعة عاطفية</h3>
        <p>اسأل شخصاً تثق به: «كيف أبدو عندما أتوتر؟ وما الذي لا أنتبه له في تعاملي؟». وعينا الذاتي به نقاط عمياء، والآخرون مرآتنا الأسرع.</p>

        <blockquote>الذكاء العاطفي ليس أن تكون لطيفاً دائماً، بل أن تكون واضحاً مع نفسك وصادقاً مع الآخرين في الوقت المناسب.</blockquote>

        <h2>في العمل: أين يظهر أثره؟</h2>
        <p>في الاجتماعات: من يصغي قبل أن يرد يُوجّه النقاش أكثر ممن يرفع صوته. في الخلاف: من يفصل بين الشخص والمشكلة يُنهي الخلاف بلا جراح. في القيادة: من يسمّي مشاعر الفريق («أعرف أن الأسبوعين الماضيين كانا ضاغطين») يرفع الأداء أكثر من أي حافز مادي مؤقت.</p>

        <h2>خلاصة</h2>
        <p>ابدأ اليوم بممارسة واحدة: ثلاث مرات يومياً، توقّف واسأل «ما الذي أشعر به الآن بالضبط، وما حاجتي خلف هذا الشعور؟». خلال شهر ستلاحظ أن ردود فعلك صارت أهدأ، وقراراتك أوضح، وعلاقاتك أقل ضجيجاً.</p>
      `,
      en: `
        <p>Consider two people with identical degrees and identical experience: one rises steadily and earns the trust of everyone around them, while the other stalls in every project despite outstanding technical skill. The difference is rarely knowledge. It is something less visible on certificates: <strong>emotional intelligence</strong> — the ability to notice, understand and direct what you feel, and to read and handle what others feel with skill.</p>

        <h2>What emotional intelligence actually is</h2>
        <p>It is not excessive niceness and not suppressing emotion. It is a system of four layered capabilities:</p>
        <ol>
          <li><strong>Self-awareness:</strong> noticing your internal state as it happens (“I am irritated right now because I felt overlooked”).</li>
          <li><strong>Self-management:</strong> choosing your response instead of being driven by your impulse, especially under pressure.</li>
          <li><strong>Social awareness:</strong> reading others' emotions and unspoken needs from tone, body language and context.</li>
          <li><strong>Relationship management:</strong> turning all of the above into effective interaction: persuasion, containing conflict, building trust.</li>
        </ol>
        <p>The order matters: someone who cannot see their own feelings cannot manage them, and someone who cannot manage them cannot read others clearly.</p>

        <h2>Why it outperforms IQ</h2>
        <p>IQ predicts performance in well-defined tasks: analysis, memorisation, problem solving. But most of working life is ill-defined: negotiating, collaborating, persuading, tolerating ambiguity. In that space emotional skills take the lead. Accumulated organisational research shows that the gap between average and outstanding performers in leadership roles is largely explained by emotional rather than cognitive competencies, and that teams with psychological safety — a product of collective emotional intelligence — consistently produce higher quality work.</p>
        <p>Put precisely: your IQ opens the door, but your emotional intelligence is what keeps you in the room.</p>

        <h2>Signals worth noticing</h2>
        <ul>
          <li>You are surprised by your own reaction after the fact: “I don't know what came over me.”</li>
          <li>The same conflicts repeat with different people in the same pattern.</li>
          <li>Mild criticism upsets you far more than its content warrants.</li>
          <li>You struggle to name what you feel beyond “fine” or “upset”.</li>
          <li>You avoid difficult conversations until they become crises.</li>
        </ul>

        <h2>Four practices you can train daily</h2>
        <h3>1. Expand your emotional vocabulary</h3>
        <p>Replace “upset” with a more precise word: frustrated? overlooked? anxious? envious? exhausted? Precise labelling softens the intensity of the emotion and hands you a choice of response. Three precise labels a day are enough to build this muscle within weeks.</p>

        <h3>2. The pause rule</h3>
        <p>Between stimulus and response there is a small space. Deliberately widen it: one deep breath and a count to six before replying to a message that provoked you. Six seconds is enough for the lead to shift from the alarm centre to the thinking centre.</p>

        <h3>3. Reappraise, don't suppress</h3>
        <p>Suppression (“nothing bothers me”) drains your energy and resurfaces worse later. Reappraisal means changing the interpretation of the event: “He didn't reply because he's busy, not because he disdains me.” Same event, entirely different emotion.</p>

        <h3>4. Ask for emotional feedback</h3>
        <p>Ask someone you trust: “How do I come across when I'm stressed? What do I miss in how I interact?” Self-awareness has blind spots, and other people are our fastest mirror.</p>

        <blockquote>Emotional intelligence is not about being nice all the time; it is about being clear with yourself and honest with others at the right moment.</blockquote>

        <h2>At work: where the impact shows</h2>
        <p>In meetings: the person who listens before replying steers the discussion more than the one who raises their voice. In conflict: separating the person from the problem ends disputes without wounds. In leadership: naming the team's feelings (“I know the past two weeks have been heavy”) lifts performance more than any temporary monetary incentive.</p>

        <h2>Summary</h2>
        <p>Start today with one practice: three times a day, pause and ask “what exactly am I feeling right now, and what need sits behind it?” Within a month your reactions will be calmer, your decisions clearer, and your relationships far less noisy.</p>
      `
    }
  },

  {
    id: "deep-work-90-20",
    image: "assets/images/deep-work-90-20.jpg",
    category: "productivity",
    date: "2026-09-17",
    updated: null,
    readTime: { ar: 6, en: 5 },
    featured: false,
    cover: "cover-7",
    emoji: "⏳",
    title: {
      ar: "قاعدة 90/20: كيف تُنتج في جلستين ما ينتجه غيرك في يوم كامل",
      en: "The 90/20 Rule: Producing in Two Sessions What Takes Others a Full Day"
    },
    excerpt: {
      ar: "90 دقيقة عمل عميق تليها 20 دقيقة استعادة حقيقية، وفق إيقاع جسمك الطبيعي — خطة عملية لتصميم الجلسة وتفادي الأخطاء الشائعة.",
      en: "90 minutes of deep work followed by 20 minutes of genuine recovery, aligned with your body's natural rhythm — a practical plan for designing the session and avoiding common mistakes."
    },
    body: {
      ar: `
        <p>كم مرة أنهيت يوم عمل مزدحماً بالشعور أنك لم تُنجز شيئاً حقيقياً؟ المشكلة غالباً ليست في عدد الساعات، بل في طريقة توزيعها. الدماغ لا يعمل بخط مستقيم، بل بموجات. ومن يصمّم يومه وفق هذه الموجات ينتج في جلستين مركّزتين ما يعجز عنه يوم كامل من العمل المتقطع.</p>

        <h2>ما قاعدة 90/20؟</h2>
        <p>الفكرة بسيطة: <strong>90 دقيقة</strong> من العمل العميق على مهمة واحدة ذات قيمة، تليها <strong>20 دقيقة</strong> من الاستعادة الحقيقية بعيداً عن الشاشات. ليست رقماً سحرياً، بل تقريباَ عملياً لدورات «الألتراديان» الطبيعية التي يمر بها الجسم والدماغ كل 90–120 دقيقة: ذروة تركيز ثم انخفاض يحتاج تعويضاً.</p>
        <p>حين تعمل ضد الدورة، تستمر في الجلوس لكن بجودة متدنية: قراءة نفس الفقرة ثلاث مرات، وإعادة صياغة نفس الجملة. وحين تحترمها، تحصل على ذروتين أو ثلاث ذروات عالية في اليوم — وهذا يكفي لمعظم الأعمال المهمة.</p>

        <h2>تصميم الجلسة: قبل أن تبدأ</h2>
        <ul>
          <li><strong>حدّد الناتج لا النشاط:</strong> «مسودة القسم الأول» لا «العمل على التقرير». الناتج الواضح يُنهي الجلسة بشعور اكتمال.</li>
          <li><strong>طقس بدء ثابت:</strong> نفس المكان، نفس المشروب، نفس قائمة التشغيل. الدماغ يربط الطقس بحالة التركيز فيدخلها أسرع.</li>
          <li><strong>أغلق الحلقات المفتوحة:</strong> ورقة بجانبك لأي فكرة جانبية تُكتب وتُؤجَّل، حتى لا تنازعك على الانتباه.</li>
          <li><strong>هاتف خارج الغرفة:</strong> مجرد رؤيته مرئياً يستهلك جزءاً من سعة الانتباه حتى وهو صامت.</li>
        </ul>

        <h2>الـ20 دقيقة: لماذا هي نصف المعادلة؟</h2>
        <p>الاستراحة التي تُقضى على شاشة ليست استراحة؛ إنها تبديل مصدر تحفيز، ولا تُعيد موارد الانتباه. الاستعادة الحقيقية تشمل:</p>
        <ul>
          <li>حركة خفيفة: مشي قصير، صعود درج، تمدّد.</li>
          <li>ضوء طبيعي ونظر إلى مسافة بعيدة لإراحة العضلة الهدبية في العين.</li>
          <li>ماء أو شيء تأكله ببطء وبدون شاشة.</li>
          <li>لحظة صمت أو تنفس بطيء لخفض مستوى التنبيه.</li>
        </ul>
        <p>هذه العشرين دقيقة هي ما يجعل الجلسة الثانية بنفس جودة الأولى. من يحذفها يحصل على جلسة جيدة ثم انحدار طويل.</p>

        <h2>يوم مبني على القاعدة (مثال)</h2>
        <ol>
          <li><strong>9:00–10:30</strong> الجلسة الأولى: أصعب مهمة في اليوم (كتابة، تصميم، تحليل).</li>
          <li><strong>10:30–10:50</strong> استعادة: مشي خارجي + ماء.</li>
          <li><strong>10:50–12:20</strong> الجلسة الثانية: المهمة الثانية أهميةً أو إكمال الأولى.</li>
          <li><strong>بعد الظهر</strong> أعمال سطحية: بريد، اجتماعات، تنسيق — في فترة الانخفاض الطبيعي.</li>
        </ol>
        <p>لاحظ ما حدث: أهم عملين في اليوم أُنجزا قبل الظهر، بينما يُصرف الانخفاض الطبيعي على أعمال لا تحتاج ذروة.</p>

        <h2>أخطاء تُفرغ القاعدة من مضمونها</h2>
        <ul>
          <li><strong>جلسة بلا ناتج محدد:</strong> تتحول إلى تصفح «مستندات العمل» لساعة ونصف.</li>
          <li><strong>multitasking داخل الجلسة:</strong> تبديل المهام يكلّف دقائق استعادة في كل نقلة.</li>
          <li><strong>استراحة بشاشة:</strong> تعود للجلسة الثانية بنفس المستوى المنخفض.</li>
          <li><strong>ثلاث جلسات عميق متتالية:</strong> الذروة الثالثة نادرة؛ اجعلها يومياً جلستين ثم زد بحذر.</li>
          <li><strong>جلد الذات عند جلسة ضعيفة:</strong> يوم واحد سيء بيانات، وليس حكماً على قدرتك.</li>
        </ul>

        <blockquote>الإنتاجية ليست ساعات أكثر، بل ذروات محمية. من يحرس ذروتيه اليوميتين ينتج بهدوء ما يعجز عنه يوم مزدحم.</blockquote>

        <h2>كيف تقيس؟</h2>
        <p>لا تقيس بالساعات بل بعدد الجلسات المكتملة بناتجها المحدد. سجّل كل جلسة بثلاث كلمات: الناتج، مستوى التركيز (1–5)، وأكبر مقاطعة. بعد أسبوعين سترى نمطك: أي ساعة ذروتك، وما المقاطع الذي يتكرر، فتحمي الأول وتُزيل الثاني.</p>

        <h2>خلاصة</h2>
        <p>جرّب غداً جلسة واحدة فقط وفق القاعدة: ناتج محدد، هاتف خارج الغرفة، ثم 20 دقيقة استعادة بلا شاشة. إن شعرت بالفرق — وستشعر به — أضف الجلسة الثانية بعد أسبوع. هذا كل ما تحتاجه لتحويل يوم مزدحم إلى يوم منتج.</p>
      `,
      en: `
        <p>How often have you finished a busy workday feeling you accomplished nothing real? The problem is rarely the number of hours; it is how they are distributed. The brain does not run in a straight line but in waves. Whoever designs their day around those waves produces in two focused sessions what a full day of fragmented work cannot.</p>

        <h2>What is the 90/20 rule?</h2>
        <p>The idea is simple: <strong>90 minutes</strong> of deep work on a single valuable task, followed by <strong>20 minutes</strong> of genuine recovery away from screens. It is not a magic number but a practical approximation of the natural ultradian cycles the body and brain pass through every 90–120 minutes: a peak of focus, then a dip that needs replenishing.</p>
        <p>Work against the cycle and you keep sitting but at low quality: rereading the same paragraph three times, rewriting the same sentence. Respect it and you get two or three high peaks a day — enough for most important work.</p>

        <h2>Designing the session: before you start</h2>
        <ul>
          <li><strong>Define the output, not the activity:</strong> “first-section draft”, not “work on the report”. A clear output ends the session with a sense of completion.</li>
          <li><strong>A fixed starting ritual:</strong> same place, same drink, same playlist. The brain links the ritual to the focus state and enters it faster.</li>
          <li><strong>Close open loops:</strong> keep a sheet beside you for any side thought; write it and postpone it so it stops competing for attention.</li>
          <li><strong>Phone out of the room:</strong> merely seeing it consumes part of your attentional capacity even when silent.</li>
        </ul>

        <h2>The 20 minutes: why they are half the equation</h2>
        <p>A break spent on a screen is not a break; it is swapping one stimulus source for another and does not restore attentional resources. Genuine recovery includes:</p>
        <ul>
          <li>Light movement: a short walk, stairs, stretching.</li>
          <li>Natural light and looking into the distance to rest the eye's ciliary muscle.</li>
          <li>Water, or food eaten slowly without a screen.</li>
          <li>A moment of silence or slow breathing to lower arousal.</li>
        </ul>
        <p>These twenty minutes are what make the second session as good as the first. Delete them and you get one good session followed by a long decline.</p>

        <h2>A day built on the rule (example)</h2>
        <ol>
          <li><strong>9:00–10:30</strong> First session: the hardest task of the day (writing, design, analysis).</li>
          <li><strong>10:30–10:50</strong> Recovery: outdoor walk + water.</li>
          <li><strong>10:50–12:20</strong> Second session: the second most important task, or finishing the first.</li>
          <li><strong>Afternoon</strong> shallow work: email, meetings, coordination — during the natural dip.</li>
        </ol>
        <p>Notice what happened: the two most important pieces of work were done before noon, while the natural dip is spent on work that needs no peak.</p>

        <h2>Mistakes that empty the rule of meaning</h2>
        <ul>
          <li><strong>A session with no defined output:</strong> it becomes ninety minutes of browsing “work documents”.</li>
          <li><strong>Multitasking inside the session:</strong> each switch costs minutes of recovery.</li>
          <li><strong>A screen break:</strong> you return to session two at the same low level.</li>
          <li><strong>Three deep sessions back to back:</strong> a third peak is rare; make it two daily, then increase cautiously.</li>
          <li><strong>Self-flagellation after a weak session:</strong> one bad day is data, not a verdict on your ability.</li>
        </ul>

        <blockquote>Productivity is not more hours; it is protected peaks. Whoever guards two peaks a day calmly produces what a crowded day cannot.</blockquote>

        <h2>How to measure</h2>
        <p>Measure not hours but completed sessions with their defined output. Log each session in three words: the output, focus level (1–5), and the biggest interruption. After two weeks your pattern appears: which hour is your peak and which interruption recurs — protect the first and remove the second.</p>

        <h2>Summary</h2>
        <p>Try just one session tomorrow according to the rule: a defined output, phone out of the room, then 20 screen-free minutes of recovery. If you feel the difference — and you will — add the second session after a week. That is all it takes to turn a busy day into a productive one.</p>
      `
    }
  },

  {
    id: "self-talk-rewire",
    image: "assets/images/self-talk-rewire.jpg",
    category: "selfdev",
    date: "2026-09-16",
    updated: null,
    readTime: { ar: 6, en: 5 },
    featured: false,
    cover: "cover-2",
    emoji: "🪞",
    title: {
      ar: "حوار الذات: كيف تعيد برمجة الصوت الداخلي الذي يدير يومك؟",
      en: "Self-Talk: Rewiring the Inner Voice That Runs Your Day"
    },
    excerpt: {
      ar: "الصوت الذي يحدثك طوال اليوم ليس حقيقة، بل عادة لغوية قابلة لإعادة التدريب. ثلاث خطوات: رصد، تسمية، إعادة صياغة.",
      en: "The voice that talks to you all day is not truth but a linguistic habit that can be retrained. Three steps: catch it, name it, reframe it."
    },
    body: {
      ar: `
        <p>هناك شخص واحد لا يتوقف عن حديثك طوال اليوم: أنت. هذا الصوت يعلّق على كل شيء — «لن أستطيع»، «تأخرت كالعادة»، «أكيد انزعجوا مني». ومع الوقت تتحول هذه التعليقات من مجرد كلام إلى عدسة ترى بها نفسك والعالم. الخبر الجيد: حوار الذات عادة لغوية، والعادات اللغوية قابلة لإعادة التدريب.</p>

        <h2>ما حوار الذات… وما ليس</h2>
        <p>حوار الذات هو السرد الداخلي المستمر الذي يفسّر الأحداث. وجوده طبيعي وصحي؛ فهو يساعد على التخطيط والتنظيم («خذ المظلة، السماء ملبّدة»). المشكلة ليست في وجود الصوت، بل في <strong>نبرته وأنماطه</strong> حين يصبح ناقداً قاسياً أو متنبئاً بالسوء.</p>

        <h2>الأنماط السلبية الأكثر شيوعاً</h2>
        <ul>
          <li><strong>التعميم الشامل:</strong> «دائماً أفشل»، «لا شيء يمشي معي» — حكم مطلق من حادثة واحدة.</li>
          <li><strong>الكارثة:</strong> «لو رفضوا العرض فسأنهار مهنياً» — القفز من احتمال إلى نهاية العالم.</li>
          <li><strong>قراءة الأفكار:</strong> «هم يعتقدون أنني غير كفء» — افتراض معرفة ما في رؤوس الآخرين.</li>
          <li><strong>المفروضات القاسية:</strong> «يجب ألا أخطئ أبداً»، «لا ينبغي أن أتعب» — قوانين مستحيلة تولّد ذنباً دائماً.</li>
          <li><strong>التصفية السلبية:</strong> تذكر ملاحظة سلبية واحدة ونسيان عشر ملاحظات إيجابية.</li>
        </ul>

        <h2>لماذا يهم هذا الكلام الداخلي؟</h2>
        <p>لأنه يوجّه الانتباه والسلوك فعلياً. من يقول «أنا سيء في العروض» سيتجنب فرص العرض، فيتوقف تمرينه، فتتنبأ النبوءة بنفسها. والأبحاث في الحديث الذاتي تُظهر فرقاً واضحاً بين نوعين: <strong>الحديث التقييمي</strong> («أنا فاشل») الذي يستنزف، و<strong>الحديث التوجيهي</strong> («ابدأ بالشريحة الأولى، ثم الثانية») الذي يحسّن الأداء في المهام الصعبة بشكل ملموس.</p>

        <h2>إعادة الصياغة: ثلاث خطوات</h2>
        <h3>1. الرصد</h3>
        <p>لأسبوع واحد، دوّن أي جملة داخلية قاسية تلاحظها كما هي، بدون تصحيح. الهدف بناء وعي: لا يمكنك تعديل ما لا تسمعه.</p>

        <h3>2. التسمية</h3>
        <p>أعطِ النمط اسماً: «هذا تعميم شامل»، «هذه كارثة». التسمية تُبعدك خطوة عن الجملة فتتحول من حقيقة إلى مجرد فكرة عابرة.</p>

        <h3>3. إعادة الصياغة</h3>
        <p>استبدل الجملة بصيغة أدق وأعدل، لا بإيجابية زائفة: «أنا فاشل» تصبح «هذه المحاولة لم تنجح، وأستطيع تحديد سببين لذلك». الدقة أهم من التفاؤل؛ فالعقل يرفض الجمل الوردية غير المصدّقة، ويقبل الوصف العادل القابل للفحص.</p>

        <h2>حيلة المخاطَب: نادِ نفسك باسمك</h2>
        <p>أظهرت دراسات الحديث الذاتي أن مخاطبة النفس بصيغة الغائب أو بالاسم («يا سيمو، ما أول خطوة؟») يمنح مسافة نفسية تشبه مسافة الناصح الصديق، ويخفض حدة القلق قبل المهام الضاغطة مقارنة بصيغة «أنا». جرّبها قبل المقابلات والعروض: جملة توجيهية باسمك، لا حكماً عليها.</p>

        <h2>قبل المهمة الصعبة: وجّه لا تُقيّم</h2>
        <p>حوّل الصوت من معلّق إلى مدرّب: «افتح الملف، اقرأ الفقرة الأولى، لخّصها في سطرين». الجمل التوجيهية الصغيرة تُقلّل حمل الذاكرة العاملة وتُخفض تردد البدء — وهو غالباً أصعب جزء في أي مهمة.</p>

        <blockquote>لن تستطيع إسكات الصوت الداخلي، لكن يمكنك تغيير وظيفته: من قاضٍ يصدر أحكاماً، إلى مدرّب يعطي التعليمات.</blockquote>

        <h2>متى تحتاج مساعدة مختص؟</h2>
        <p>إن كان الصوت الداخلي مهيناً باستمرار، أو مرتبطاً بأرق وفقدان شهية وانسحاب اجتماعي لأسابيع، فالأمر تجاوز حدود العادة اللغوية إلى حالة تستحق دعماً مهنياً. العلاج المعرفي السلوكي تحديداً مبني على تعديل هذه الأنماط، وهو فعّال ومحدود المدة في الغالب.</p>

        <h2>خلاصة</h2>
        <p>ابدأ اليوم بخطوة الرصد فقط: ثلاث جمل داخلية تدوّنها كما هي. بعد أسبوع ستملك قائمة أنماطك الشخصية، وعندها تصبح إعادة الصياغة سهلة لأنها تستهدف عبارات محددة تعرفها، لا ضباباً عاماً من «الشعور السيئ».</p>
      `,
      en: `
        <p>There is one person who never stops talking to you all day: you. That voice comments on everything — “I can't do this”, “late as usual”, “they must be annoyed with me”. Over time these comments stop being mere words and become the lens through which you see yourself and the world. The good news: self-talk is a linguistic habit, and linguistic habits can be retrained.</p>

        <h2>What self-talk is… and isn't</h2>
        <p>Self-talk is the continuous internal narration that interprets events. Having it is normal and healthy; it helps with planning and organisation (“take an umbrella, the sky is overcast”). The problem is not the voice's existence but its <strong>tone and patterns</strong> when it turns into a harsh critic or a doom-forecaster.</p>

        <h2>The most common negative patterns</h2>
        <ul>
          <li><strong>Overgeneralisation:</strong> “I always fail”, “nothing ever works for me” — an absolute verdict from a single incident.</li>
          <li><strong>Catastrophising:</strong> “if they reject the proposal I'm professionally finished” — leaping from a possibility to the end of the world.</li>
          <li><strong>Mind-reading:</strong> “they think I'm incompetent” — assuming you know what is inside other heads.</li>
          <li><strong>Harsh shoulds:</strong> “I must never make mistakes”, “I shouldn't get tired” — impossible rules that generate constant guilt.</li>
          <li><strong>Negative filtering:</strong> remembering one critical remark and forgetting ten positive ones.</li>
        </ul>

        <h2>Why this internal speech matters</h2>
        <p>Because it genuinely directs attention and behaviour. Someone who says “I'm bad at presentations” will avoid presenting, stop practising, and the prophecy fulfils itself. Research on self-talk shows a clear difference between two types: <strong>evaluative talk</strong> (“I'm a failure”), which drains, and <strong>instructional talk</strong> (“start with slide one, then slide two”), which measurably improves performance on difficult tasks.</p>

        <h2>Reframing: three steps</h2>
        <h3>1. Catch it</h3>
        <p>For one week, write down any harsh internal sentence exactly as you notice it, without correcting it. The goal is awareness: you cannot edit what you do not hear.</p>

        <h3>2. Name it</h3>
        <p>Give the pattern a label: “this is overgeneralisation”, “this is catastrophising”. Labelling moves you one step away from the sentence, turning it from truth into a passing thought.</p>

        <h3>3. Reframe it</h3>
        <p>Replace the sentence with a more accurate and fairer formulation, not fake positivity: “I'm a failure” becomes “this attempt didn't work, and I can identify two reasons why”. Accuracy matters more than optimism; the mind rejects unearned rosy sentences and accepts fair, testable descriptions.</p>

        <h2>The distanced-self trick: use your own name</h2>
        <p>Self-talk studies show that addressing yourself in the second person or by name (“Sam, what's the first step?”) creates psychological distance similar to a friend advising you, and lowers anxiety before pressurised tasks compared with “I” statements. Try it before interviews and presentations: one instructional sentence with your name, not a verdict on it.</p>

        <h2>Before a hard task: instruct, don't evaluate</h2>
        <p>Turn the voice from commentator into coach: “open the file, read the first paragraph, summarise it in two lines”. Small instructional sentences reduce working-memory load and lower starting friction — usually the hardest part of any task.</p>

        <blockquote>You cannot silence the inner voice, but you can change its job: from a judge issuing verdicts to a coach giving instructions.</blockquote>

        <h2>When to seek professional help</h2>
        <p>If the inner voice is constantly insulting, or is linked to insomnia, loss of appetite and social withdrawal for weeks, the matter has moved beyond a linguistic habit into a state that deserves professional support. Cognitive behavioural therapy in particular is built on modifying these patterns, and is usually effective and time-limited.</p>

        <h2>Summary</h2>
        <p>Start today with the catching step only: three internal sentences written exactly as they are. After a week you will own a list of your personal patterns, and reframing becomes easy because it targets specific phrases you know — not a general fog of “feeling bad”.</p>
      `
    }
  }
];

/* ---------- دوال مساعدة للبيانات ---------- */
function getArticle(id) {
  return ARTICLES.find((a) => a.id === id) || null;
}

function getFeatured() {
  return ARTICLES.filter((a) => a.featured);
}

function getByCategory(cat) {
  if (!cat || cat === "all") return [...ARTICLES];
  return ARTICLES.filter((a) => a.category === cat);
}

function getRelated(article, limit = 3) {
  return ARTICLES.filter((a) => a.id !== article.id)
    .sort((a, b) => {
      const scoreA = a.category === article.category ? 0 : 1;
      const scoreB = b.category === article.category ? 0 : 1;
      return scoreA - scoreB || new Date(b.date) - new Date(a.date);
    })
    .slice(0, limit);
}

function sortedArticles(list) {
  return [...list].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function formatDate(dateStr, lang) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function searchArticles(query, lang) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return ARTICLES.filter((a) => {
    return (
      a.title[lang].toLowerCase().includes(q) ||
      a.excerpt[lang].toLowerCase().includes(q) ||
      CATEGORIES[a.category][lang].toLowerCase().includes(q) ||
      a.body[lang].toLowerCase().includes(q)
    );
  });
}
