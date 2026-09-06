/* =========================================================
   Data for: Focus (ab.focus.html)
   Everything specific to THIS skill lives here. The engine
   (shared/engine.js) reads this object to build the page.
   ========================================================= */

window.SKILL_DATA = {
    badge: "Core Skill #10",
    title: "Focus",
    subtitle: "Train sustained, deep attention on what matters",
    backLink: { href: "03.html", text: "Back to Social" },

    definition: "Focus is the ability to direct and sustain your attention on a single task while resisting the pull of distractions, notifications, and your own wandering mind. It's a trainable skill rather than a fixed trait — the more deliberately you practice single-tasking and manage your environment, the longer and deeper your attention span becomes.",

    pillars: [
        {
            title: "Single-Tasking Over Multitasking",
            text: "The brain doesn't truly multitask on demanding work — it switches rapidly between tasks, losing time and quality with every switch."
        },
        {
            title: "Environment Design",
            text: "Willpower alone rarely beats a phone buzzing nearby. Removing distractions from your environment is more reliable than resisting them in the moment."
        },
        {
            title: "Working With Attention Cycles",
            text: "Deep focus naturally comes in waves, often 25–90 minutes, followed by a need for rest. Fighting this rhythm leads to diminishing returns."
        },
        {
            title: "Recovery Between Sessions",
            text: "Sustained focus depletes mental energy. Short breaks between focus sessions restore attention rather than being wasted time."
        }
    ],

    actions: [
        {
            icon: "🍅",
            title: "Pomodoro Technique",
            text: "Work in focused 25-minute intervals followed by a 5-minute break, using the short deadline to reduce the temptation to check distractions."
        },
        {
            icon: "📵",
            title: "Distraction-Free Environment",
            text: "Turn off non-essential notifications and physically remove your phone from reach before starting a task that requires deep concentration."
        },
        {
            icon: "🎯",
            title: "Single-Tasking Rule",
            text: "Commit to working on exactly one task at a time; when your mind wanders to another task, jot it down to handle later instead of switching immediately."
        },
        {
            icon: "🧠",
            title: "Attention Warm-Up",
            text: "Start a focus session with a very small, easy piece of the task to build momentum before tackling the most demanding part."
        }
    ],

    proTip: "Treat focus like a muscle: start with shorter, achievable sessions and gradually extend them, rather than expecting hours of deep concentration on day one.",

    questionsPerQuiz: 10, // sampled randomly from quizBank below

    quizBank: [
        {
            question: "What does research suggest about multitasking on demanding tasks?",
            options: [
                { text: "The brain truly processes multiple demanding tasks simultaneously", explanation: "For complex tasks, the brain switches rapidly rather than processing them at once." },
                { text: "The brain rapidly switches between tasks, losing time and quality with each switch", explanation: "This 'switching cost' is why multitasking often feels busy but produces worse results." },
                { text: "Multitasking always improves performance", explanation: "Multitasking on demanding work generally reduces both speed and accuracy." },
                { text: "Multitasking has no measurable effect", explanation: "Studies consistently show a measurable cost to task-switching." }
            ],
            correctIndex: 1
        },
        {
            question: "Why is environment design often more effective than willpower for maintaining focus?",
            options: [
                { text: "Willpower is unlimited and always wins", explanation: "Willpower is a limited resource that depletes with repeated resistance." },
                { text: "Removing distractions prevents the temptation from appearing in the first place", explanation: "It's easier to avoid a distraction that isn't there than to resist one that is." },
                { text: "Environment has no real impact on attention", explanation: "Environment strongly shapes how easy or hard it is to stay focused." },
                { text: "Willpower should always be relied on instead of planning", explanation: "Relying purely on willpower tends to fail more often than planning ahead." }
            ],
            correctIndex: 1
        },
        {
            question: "What is the basic structure of the Pomodoro Technique?",
            options: [
                { text: "Work for as long as possible without stopping", explanation: "This ignores the value of scheduled breaks." },
                { text: "Work in focused intervals (e.g. 25 minutes) followed by short breaks", explanation: "The technique uses timed work sessions with built-in recovery periods." },
                { text: "Only work when you feel motivated", explanation: "It works even without motivation because the timer itself creates structure." },
                { text: "Multitask across several projects every 25 minutes", explanation: "The technique is built around single-tasking, not switching between projects." }
            ],
            correctIndex: 1
        },
        {
            question: "Why are breaks between focus sessions considered useful rather than wasted time?",
            options: [
                { text: "Breaks have no actual effect on performance", explanation: "Breaks measurably help restore attention for the next session." },
                { text: "They restore mental energy that sustained focus depletes", explanation: "Attention is a limited resource, and short recovery periods help refill it." },
                { text: "Breaks are only useful for physical rest, not mental", explanation: "Breaks help mental recovery specifically, not just physical rest." },
                { text: "Taking breaks always means you're procrastinating", explanation: "Scheduled recovery is different from avoidance-driven procrastination." }
            ],
            correctIndex: 1
        },
        {
            question: "You're mid-task and suddenly think of something unrelated you need to do later. What's the best response?",
            options: [
                { text: "Immediately switch to that task", explanation: "Switching immediately breaks your current focus and loses momentum." },
                { text: "Try to forget about it completely", explanation: "Trying to force it out of mind often makes it more distracting." },
                { text: "Quickly jot it down to handle later, then return to the current task", explanation: "Capturing it removes the mental itch without breaking your current focus." },
                { text: "Stop working entirely for the day", explanation: "One passing thought doesn't require abandoning the whole session." }
            ],
            correctIndex: 2
        },
        {
            question: "What does it mean to treat focus as a trainable skill rather than a fixed trait?",
            options: [
                { text: "Some people simply cannot ever improve their focus", explanation: "The trainable view holds that most people can improve with practice." },
                { text: "Deliberate practice, like shorter sessions extended over time, can build stronger attention", explanation: "Like a muscle, focus can be strengthened gradually through consistent practice." },
                { text: "Focus is entirely determined at birth", explanation: "This contradicts the idea that focus can be trained and improved." },
                { text: "Focus has nothing to do with practice or habits", explanation: "Practice and habit-building are central to improving focus." }
            ],
            correctIndex: 1
        },
        {
            question: "Why might starting a focus session with a small, easy piece of a task help?",
            options: [
                { text: "It wastes time better spent on the hard part", explanation: "It's a deliberate warm-up, not wasted time — it builds momentum." },
                { text: "It builds momentum before tackling the most demanding part", explanation: "Starting small lowers the barrier to entry and eases you into deeper focus." },
                { text: "It guarantees you'll finish the entire task quickly", explanation: "It helps you start, but doesn't guarantee overall speed." },
                { text: "Difficulty order doesn't affect focus at all", explanation: "Where you start can meaningfully affect how easily you get into flow." }
            ],
            correctIndex: 1
        },
        {
            question: "What is a realistic expectation about attention span during deep work?",
            options: [
                { text: "It should stay constant for many hours without any dip", explanation: "Sustained peak attention for many hours straight is unrealistic for most people." },
                { text: "It naturally comes in waves, often 25–90 minutes, followed by a need for rest", explanation: "Attention has a natural rhythm rather than being a flat, unlimited resource." },
                { text: "It only applies to certain personality types", explanation: "Attention cycles are a general feature of how most people's focus works." },
                { text: "It's unrelated to how long you've been working", explanation: "Duration of sustained work is directly related to how attention cycles play out." }
            ],
            correctIndex: 1
        },
        {
            question: "Notifications keep interrupting your work session. What's the most effective fix?",
            options: [
                { text: "Just try harder to ignore them", explanation: "Willpower-based ignoring is less reliable than removing the interruption source." },
                { text: "Turn off non-essential notifications before starting the task", explanation: "Preventing the interruption from happening beats resisting it after it appears." },
                { text: "Check each notification immediately to 'get it over with'", explanation: "Checking immediately reinforces the interruption habit and breaks focus." },
                { text: "Switch to working on multiple things so interruptions matter less", explanation: "Adding more tasks compounds the distraction problem instead of solving it." }
            ],
            correctIndex: 1
        },
        {
            question: "Which statement best reflects a healthy approach to building focus?",
            options: [
                { text: "Expect long, unbroken deep-focus sessions from the very first attempt", explanation: "This sets an unrealistic bar and often leads to discouragement." },
                { text: "Start with shorter, achievable focus sessions and gradually extend them", explanation: "Gradual, consistent practice is more sustainable than expecting instant mastery." },
                { text: "Only rely on caffeine or stimulants to force concentration", explanation: "Stimulants may help temporarily but don't build the underlying skill." },
                { text: "Avoid tracking your focus sessions since it's a waste of time", explanation: "Tracking can help you notice patterns and gradually improve." }
            ],
            correctIndex: 1
        }
    ]
};
