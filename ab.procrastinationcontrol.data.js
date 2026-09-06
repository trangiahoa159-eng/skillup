/* =========================================================
   Data for: Procrastination Control (ab.procrastinationcontrol.html)
   Everything specific to THIS skill lives here. The engine
   (shared/engine.js) reads this object to build the page.
   ========================================================= */

window.SKILL_DATA = {
    badge: "Core Skill #11",
    title: "Procrastination Control",
    subtitle: "Understand why you delay, and build habits that get you moving",
    backLink: { href: "03.html", text: "Back to Social" },

    definition: "Procrastination control is the skill of recognizing why you're avoiding a task — fear, overwhelm, boredom, or unclear next steps — and using that understanding to get started anyway. It's rarely a laziness problem; it's usually an emotional regulation problem, where starting the task feels worse in the moment than the discomfort of delaying it.",

    pillars: [
        {
            title: "Procrastination Is Emotional, Not Lazy",
            text: "People typically delay tasks that trigger anxiety, boredom, or self-doubt, not tasks they're incapable of doing. Naming the underlying feeling is the first step to addressing it."
        },
        {
            title: "The Starting Barrier",
            text: "Beginning a task is usually harder than continuing it. Once momentum exists, the task often feels far more manageable than it did beforehand."
        },
        {
            title: "Shrinking the Task",
            text: "Big, vague tasks feel threatening. Breaking a task into a tiny, low-stakes first step makes starting dramatically easier."
        },
        {
            title: "Self-Compassion Over Self-Criticism",
            text: "Harsh self-judgment after procrastinating tends to increase stress and make future procrastination more likely, not less."
        }
    ],

    actions: [
        {
            icon: "⏱️",
            title: "Two-Minute Rule",
            text: "Commit to working on the dreaded task for just two minutes; the goal is to lower the barrier to starting, not to finish everything at once."
        },
        {
            icon: "🧩",
            title: "Task Chunking",
            text: "Break an intimidating task into the smallest possible first sub-step, small enough that it feels almost too easy to put off."
        },
        {
            icon: "🚫",
            title: "Temptation Bundling",
            text: "Pair a task you tend to avoid with something enjoyable — like listening to a favorite podcast only while doing it — to make starting less unpleasant."
        },
        {
            icon: "🪞",
            title: "Name the Real Feeling",
            text: "Before forcing yourself to work, pause and identify what emotion is driving the avoidance (fear of failure, boredom, overwhelm) so you can address it directly."
        }
    ],

    proTip: "The goal isn't to eliminate the urge to procrastinate — it's to build a reliable habit of starting anyway, even in small ways, until the resistance fades.",

    questionsPerQuiz: 10, // sampled randomly from quizBank below

    quizBank: [
        {
            question: "What is procrastination most often driven by?",
            options: [
                { text: "Simple laziness", explanation: "Most procrastination research points to emotional regulation, not laziness." },
                { text: "An underlying emotion like fear, boredom, or overwhelm", explanation: "People often delay tasks that trigger discomfort, not tasks they're incapable of doing." },
                { text: "A lack of intelligence", explanation: "Intelligence isn't the driver — emotional discomfort with the task usually is." },
                { text: "Having too much free time", explanation: "Even busy people procrastinate; free time isn't the root cause." }
            ],
            correctIndex: 1
        },
        {
            question: "Why is starting often the hardest part of a task?",
            options: [
                { text: "Starting requires the least effort of any part of a task", explanation: "Actually, starting typically feels like it requires the most activation energy." },
                { text: "The task usually feels more manageable once momentum exists", explanation: "Momentum reduces the perceived difficulty that made starting feel so hard." },
                { text: "Tasks get harder the longer you work on them", explanation: "Most tasks feel easier once you're already underway, not harder." },
                { text: "Starting has no real psychological difference from continuing", explanation: "Psychologically, starting typically feels like a much bigger barrier than continuing." }
            ],
            correctIndex: 1
        },
        {
            question: "What is the idea behind the 'Two-Minute Rule' for procrastination?",
            options: [
                { text: "Only spend two minutes total on any task", explanation: "The rule is about lowering the barrier to start, not limiting total time." },
                { text: "Commit to just two minutes of work to make starting easier", explanation: "A tiny, low-pressure commitment reduces the resistance to beginning." },
                { text: "Take a two-minute break before every task", explanation: "The rule is about starting the task itself, not about breaks." },
                { text: "Wait two minutes before deciding whether to start", explanation: "Waiting adds delay rather than reducing the barrier to starting." }
            ],
            correctIndex: 1
        },
        {
            question: "After procrastinating, harshly criticizing yourself tends to have what effect?",
            options: [
                { text: "It reliably prevents future procrastination", explanation: "Harsh self-criticism tends to increase stress, which often worsens future avoidance." },
                { text: "It increases stress and can make future procrastination more likely", explanation: "Self-compassion research shows criticism tends to backfire compared to self-kindness." },
                { text: "It has no effect either way", explanation: "Self-criticism has a measurable, generally negative effect on future behavior." },
                { text: "It boosts motivation the next day", explanation: "Motivation is usually better supported by self-compassion than by criticism." }
            ],
            correctIndex: 1
        },
        {
            question: "A big project feels overwhelming, so you keep avoiding it. What's a good next step?",
            options: [
                { text: "Wait until you feel fully motivated to start", explanation: "Motivation often follows action, not the other way around, so waiting can delay things indefinitely." },
                { text: "Break it into the smallest possible first sub-step", explanation: "Shrinking the task reduces the perceived threat enough to make starting realistic." },
                { text: "Force yourself to complete the entire project in one sitting", explanation: "Trying to do everything at once often increases the avoidance instead of solving it." },
                { text: "Give up on the project since it feels too big", explanation: "Feeling overwhelmed is a solvable problem, not a reason to abandon the goal." }
            ],
            correctIndex: 1
        },
        {
            question: "What is 'temptation bundling'?",
            options: [
                { text: "Avoiding all enjoyable activities until work is done", explanation: "This is the opposite — it pairs enjoyable things with the task, not withholds them." },
                { text: "Pairing a task you avoid with something enjoyable to make starting easier", explanation: "Combining the dreaded task with something pleasant reduces the resistance to starting." },
                { text: "Bundling several unrelated tasks together to finish faster", explanation: "It's about pairing emotion, not combining unrelated tasks." },
                { text: "Rewarding yourself only after finishing an entire project", explanation: "That's delayed reward, which is different from bundling enjoyment into the task itself." }
            ],
            correctIndex: 1
        },
        {
            question: "Why is naming the specific emotion behind avoidance useful?",
            options: [
                { text: "It has no practical use, just self-indulgence", explanation: "Identifying the emotion often points directly at the real barrier to address." },
                { text: "It helps you address the actual barrier instead of just forcing willpower", explanation: "Different emotions (fear vs. boredom, for example) call for different solutions." },
                { text: "It's only useful for therapists, not everyday tasks", explanation: "This applies directly to everyday procrastination, not just clinical settings." },
                { text: "Naming emotions makes procrastination worse", explanation: "Naming the emotion tends to reduce its grip, not increase it." }
            ],
            correctIndex: 1
        },
        {
            question: "Which best describes a realistic goal for managing procrastination?",
            options: [
                { text: "Completely eliminating the urge to procrastinate forever", explanation: "The urge may still appear; the realistic goal is building a habit of starting anyway." },
                { text: "Building a reliable habit of starting small, even when resistance is present", explanation: "Consistent small starts, done repeatedly, is what actually reduces procrastination's grip." },
                { text: "Never feeling any discomfort about tasks again", explanation: "Some discomfort is normal; the goal is acting despite it, not eliminating it." },
                { text: "Relying entirely on last-minute pressure to get things done", explanation: "Last-minute pressure can work occasionally but usually increases stress and lowers quality." }
            ],
            correctIndex: 1
        },
        {
            question: "You keep avoiding a task because it feels boring rather than scary. What might help most?",
            options: [
                { text: "Force yourself through it with no changes at all", explanation: "Pure willpower against boredom often fails repeatedly; addressing the boredom directly helps more." },
                { text: "Pair it with something enjoyable or add a game-like element to it", explanation: "Making a boring task more engaging directly addresses the actual barrier." },
                { text: "Assume boredom means the task isn't important", explanation: "Boredom doesn't indicate importance — some important tasks are simply dull." },
                { text: "Wait for the boredom to disappear on its own", explanation: "Passive waiting rarely resolves the underlying issue." }
            ],
            correctIndex: 1
        },
        {
            question: "What's the most accurate way to think about procrastination?",
            options: [
                { text: "A permanent character flaw that can't be changed", explanation: "Procrastination is a pattern of behavior, and patterns can be changed with practice." },
                { text: "A workable pattern shaped by emotion, task design, and habits that can be adjusted", explanation: "This view opens the door to real strategies rather than just self-blame." },
                { text: "Something only undisciplined people experience", explanation: "Procrastination is extremely common across all kinds of people, disciplined or not." },
                { text: "Completely unrelated to how a task is framed or broken down", explanation: "How a task is framed and broken down has a big effect on the urge to avoid it." }
            ],
            correctIndex: 1
        }
    ]
};
