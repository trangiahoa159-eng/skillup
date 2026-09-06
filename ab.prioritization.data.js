/* =========================================================
   Data for: Prioritization (ab.prioritization.html)
   Everything specific to THIS skill lives here. The engine
   (shared/engine.js) reads this object to build the page.
   ========================================================= */

window.SKILL_DATA = {
    badge: "Core Skill #07",
    title: "Prioritization",
    subtitle: "Decide what actually deserves your time first",
    backLink: { href: "03.html", text: "Back to Social" },

    definition: "Prioritization is the skill of deciding which tasks matter most and tackling them in the right order, instead of working on whatever feels most urgent or most comfortable in the moment. It means separating what truly moves your goals forward from what only feels productive, so your limited time and energy go where they create the most value.",

    pillars: [
        {
            title: "Urgent vs. Important",
            text: "Urgent tasks demand attention right now; important tasks move you toward your goals. Confusing the two means you spend your day reacting instead of progressing."
        },
        {
            title: "Value-Based Ranking",
            text: "Not all tasks are worth the same. Ranking work by the impact it creates prevents easy, low-value tasks from crowding out the few that really matter."
        },
        {
            title: "Saying No On Purpose",
            text: "Every yes to a low-priority request is a no to something more important. Protecting your top priorities means declining or delaying the rest."
        },
        {
            title: "Regular Re-Evaluation",
            text: "Priorities shift as circumstances change. Revisiting your list daily or weekly keeps you working on what matters now, not what mattered last week."
        }
    ],

    actions: [
        {
            icon: "🧭",
            title: "Eisenhower Matrix",
            text: "Sort tasks into four boxes — urgent/important, important/not urgent, urgent/not important, neither — and schedule, delegate, or drop accordingly."
        },
        {
            icon: "🐸",
            title: "Eat That Frog",
            text: "Identify the single hardest or most important task of the day and do it first, before your willpower is drained by smaller distractions."
        },
        {
            icon: "📊",
            title: "ABCDE Method",
            text: "Label every task A (must do), B (should do), C (nice to do), D (delegate), or E (eliminate), and only start B once every A is handled."
        },
        {
            icon: "⚖️",
            title: "80/20 Rule (Pareto)",
            text: "Look for the roughly 20% of tasks that generate 80% of your results, and give those disproportionate attention over everything else."
        }
    ],

    proTip: "When everything feels equally urgent, that's usually a sign you haven't prioritized yet — force yourself to rank, even roughly, rather than treating every task as a tie.",

    questionsPerQuiz: 10, // sampled randomly from quizBank below

    quizBank: [
        {
            question: "What is the core idea behind prioritization?",
            options: [
                { text: "Doing every task as fast as possible", explanation: "Speed alone doesn't guarantee you're working on the right things." },
                { text: "Deciding which tasks matter most and doing those first", explanation: "Prioritization is about order and value, not just effort." },
                { text: "Finishing easy tasks before hard ones", explanation: "Ease isn't the same as importance; easy tasks can still be low-value." },
                { text: "Doing whatever your boss asks first", explanation: "Following instructions can matter, but true prioritization is about impact, not just authority." }
            ],
            correctIndex: 1
        },
        {
            question: "In the Eisenhower Matrix, where should you spend most of your proactive effort?",
            options: [
                { text: "Urgent and important", explanation: "This quadrant is necessary but reactive — you're often just handling crises." },
                { text: "Important but not urgent", explanation: "This is where planning, prevention, and growth happen, but it gets neglected without deliberate effort." },
                { text: "Urgent but not important", explanation: "These tasks feel pressing but often belong to someone else and should be delegated." },
                { text: "Neither urgent nor important", explanation: "These tasks should generally be eliminated, not prioritized." }
            ],
            correctIndex: 1
        },
        {
            question: "You have ten tasks on your list. What's the best first step?",
            options: [
                { text: "Start with whichever is quickest", explanation: "Quick wins feel good but may not be what matters most." },
                { text: "Rank them by impact and urgency before starting", explanation: "Ranking first ensures your effort goes where it counts." },
                { text: "Do them in the order they arrived", explanation: "Arrival order has nothing to do with actual importance." },
                { text: "Wait until you feel motivated", explanation: "Waiting for motivation often means low-priority distractions fill the time instead." }
            ],
            correctIndex: 1
        },
        {
            question: "What does the 80/20 rule (Pareto Principle) suggest?",
            options: [
                { text: "80% of tasks are unnecessary", explanation: "It's about impact distribution, not task necessity." },
                { text: "A small portion of your efforts often produce most of your results", explanation: "Roughly 20% of actions frequently drive about 80% of outcomes." },
                { text: "You should spend 80% of your time planning", explanation: "The rule is about output distribution, not a time-allocation formula." },
                { text: "Every task deserves equal time", explanation: "The whole point is that tasks are NOT equally valuable." }
            ],
            correctIndex: 1
        },
        {
            question: "A colleague asks for help on something urgent but low-value to your goals. What should you do?",
            options: [
                { text: "Always say yes immediately", explanation: "Automatic yes-saying can quietly erode time for your real priorities." },
                { text: "Ignore the request entirely", explanation: "Ignoring people isn't necessary — a clear response is better." },
                { text: "Weigh it against your current priorities and respond accordingly, even if that means declining or delaying", explanation: "Prioritization sometimes means saying no or negotiating timing." },
                { text: "Drop everything you're doing without evaluating it", explanation: "Reacting to every urgent request undermines your own priorities." }
            ],
            correctIndex: 2
        },
        {
            question: "What is the danger of treating all tasks as equally urgent?",
            options: [
                { text: "None — it keeps you thorough", explanation: "Treating everything as urgent usually causes burnout and scattered focus." },
                { text: "You may spend your best energy on low-impact work", explanation: "Without ranking, important-but-quiet tasks get crowded out by noisy but minor ones." },
                { text: "It automatically makes you more productive", explanation: "Constant urgency mode tends to reduce, not increase, real productivity." },
                { text: "It has no real effect on outcomes", explanation: "It has a real effect — misallocated effort produces worse results over time." }
            ],
            correctIndex: 1
        },
        {
            question: "In the ABCDE method, what should you do with a 'D' task?",
            options: [
                { text: "Do it immediately yourself", explanation: "'D' stands for delegate, not do it yourself right away." },
                { text: "Delegate it to someone else if possible", explanation: "Delegating frees your time for A and B tasks that need your specific attention." },
                { text: "Delete it completely", explanation: "Deleting is the 'E' (eliminate) category, not 'D'." },
                { text: "Save it for tomorrow", explanation: "Postponing isn't the same as delegating; 'D' specifically means handing it off." }
            ],
            correctIndex: 1
        },
        {
            question: "Why should priorities be re-evaluated regularly?",
            options: [
                { text: "They never actually change", explanation: "Circumstances, deadlines, and goals shift regularly, so priorities shift too." },
                { text: "Because circumstances and goals change over time", explanation: "A fixed list can quickly become outdated as new information arrives." },
                { text: "Only if you finish everything on your list", explanation: "Waiting until everything is done means you're reacting too late." },
                { text: "To make your to-do list look busier", explanation: "Re-evaluating is about accuracy and value, not appearances." }
            ],
            correctIndex: 1
        },
        {
            question: "Which best describes an 'important but not urgent' task?",
            options: [
                { text: "A fire that needs to be put out today", explanation: "That describes an urgent-and-important task, not this quadrant." },
                { text: "Long-term planning, skill-building, or relationship maintenance", explanation: "These build future value even though nothing forces you to do them today." },
                { text: "A meeting someone else scheduled without asking", explanation: "That's often urgent-but-not-important — worth delegating or declining." },
                { text: "Checking notifications throughout the day", explanation: "This is typically a low-value, low-importance habit, not this quadrant." }
            ],
            correctIndex: 1
        },
        {
            question: "You keep completing lots of small tasks but your main goals aren't progressing. What is most likely happening?",
            options: [
                { text: "You are being extremely productive", explanation: "Being busy is not the same as being effective toward your real goals." },
                { text: "You are prioritizing based on ease or volume instead of impact", explanation: "Completing many small tasks can create an illusion of progress while important work stalls." },
                { text: "Your goals are simply too big", explanation: "The size of the goal isn't the issue if effort keeps going elsewhere." },
                { text: "You need to work longer hours", explanation: "More hours on the wrong tasks won't fix a prioritization problem." }
            ],
            correctIndex: 1
        }
    ]
};
