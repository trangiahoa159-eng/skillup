/* =========================================================
   Data for: Planning (ab.planning.html)
   Everything specific to THIS skill lives here. The engine
   (shared/engine.js) reads this object to build the page.
   ========================================================= */

window.SKILL_DATA = {
    badge: "Core Skill #08",
    title: "Planning",
    subtitle: "Turn goals into a realistic, workable sequence of steps",
    backLink: { href: "03.html", text: "Back to Social" },

    definition: "Planning is the skill of translating a goal into a concrete sequence of steps, resources, and timeframes before you start working. Good planning doesn't try to predict every detail perfectly — it creates a realistic map that reduces wasted effort, prevents last-minute scrambling, and makes it easier to adjust when reality doesn't match expectations.",

    pillars: [
        {
            title: "Clear Outcome First",
            text: "A plan needs a specific destination. Vague goals like 'do better' can't be broken into steps until they're defined concretely."
        },
        {
            title: "Breaking Down the Work",
            text: "Large goals become manageable when split into smaller milestones and tasks, each with a rough sense of time and effort required."
        },
        {
            title: "Realistic Time Estimation",
            text: "Most people underestimate how long tasks take. Building in buffer time keeps a plan from collapsing at the first delay."
        },
        {
            title: "Flexibility Built In",
            text: "A rigid plan breaks the moment something unexpected happens. A good plan expects change and has room to adapt."
        }
    ],

    actions: [
        {
            icon: "🗺️",
            title: "Backward Planning",
            text: "Start from the deadline and work backward, marking out what needs to be finished by when to arrive at the goal on time."
        },
        {
            icon: "🧱",
            title: "Work Breakdown Structure",
            text: "Split a big goal into major phases, then break each phase into specific, assignable tasks small enough to actually start on."
        },
        {
            icon: "📆",
            title: "Time Blocking",
            text: "Assign specific blocks of your calendar to specific tasks or types of work, rather than leaving execution to whenever you 'find time.'"
        },
        {
            icon: "🔄",
            title: "Weekly Review & Replan",
            text: "Set aside time each week to check progress against the plan and adjust the next week's steps based on what actually happened."
        }
    ],

    proTip: "A plan is a living document, not a contract — expect to revise it as you learn more, and don't treat the first draft as something you failed to follow perfectly.",

    questionsPerQuiz: 10, // sampled randomly from quizBank below

    quizBank: [
        {
            question: "What is the main purpose of planning?",
            options: [
                { text: "To predict the future with certainty", explanation: "No plan can guarantee certainty; it's about preparation, not prophecy." },
                { text: "To turn a goal into a realistic sequence of steps", explanation: "Planning maps out how to get from where you are to where you want to be." },
                { text: "To fill up your calendar", explanation: "A full calendar isn't the goal — a useful, realistic path forward is." },
                { text: "To avoid ever changing your mind", explanation: "Good plans are meant to be adjusted, not treated as unchangeable." }
            ],
            correctIndex: 1
        },
        {
            question: "What does 'backward planning' involve?",
            options: [
                { text: "Starting from today and hoping to reach the goal eventually", explanation: "That's forward planning without a fixed target, which is less reliable." },
                { text: "Starting from the deadline and working backward to today", explanation: "This reveals what must happen by when to hit the final date." },
                { text: "Ignoring deadlines completely", explanation: "Deadlines are the whole reference point in backward planning." },
                { text: "Only planning the very last step", explanation: "Backward planning maps the whole sequence, not just the end." }
            ],
            correctIndex: 1
        },
        {
            question: "Why is it important to build buffer time into a plan?",
            options: [
                { text: "Buffers waste valuable time", explanation: "Buffers protect the plan; they aren't wasted, they're insurance against delays." },
                { text: "Because most people underestimate how long tasks actually take", explanation: "Buffer time absorbs the inevitable delays and surprises that arise." },
                { text: "Buffers are only needed for unimportant tasks", explanation: "Buffers matter most for tasks with real consequences if they slip." },
                { text: "Plans should never include extra time", explanation: "Rigid plans with zero slack tend to fall apart at the first hiccup." }
            ],
            correctIndex: 1
        },
        {
            question: "A project plan hits an unexpected obstacle halfway through. What's the best response?",
            options: [
                { text: "Abandon the plan entirely", explanation: "One obstacle doesn't make the whole plan useless." },
                { text: "Force the original plan through no matter what", explanation: "Rigid adherence ignores new information that could improve the outcome." },
                { text: "Adjust the plan based on the new information while keeping the goal in sight", explanation: "Good planning includes adapting steps without losing the destination." },
                { text: "Pretend the obstacle doesn't exist", explanation: "Ignoring real problems usually makes them worse later." }
            ],
            correctIndex: 2
        },
        {
            question: "What is a Work Breakdown Structure used for?",
            options: [
                { text: "Splitting a big goal into phases and smaller tasks", explanation: "It turns an overwhelming goal into concrete, actionable pieces." },
                { text: "Deciding who to blame if a project fails", explanation: "It's a planning tool, not an accountability-assignment tool." },
                { text: "Measuring how much time was wasted", explanation: "It's used before and during work, not just for retrospective measurement." },
                { text: "Replacing the need for deadlines", explanation: "It works alongside deadlines, not instead of them." }
            ],
            correctIndex: 0
        },
        {
            question: "Why does time blocking help with execution?",
            options: [
                { text: "It guarantees you'll never be interrupted", explanation: "Interruptions can still happen; time blocking just protects intended focus." },
                { text: "It assigns specific times to specific tasks instead of leaving execution vague", explanation: "A concrete slot makes a task far more likely to actually happen." },
                { text: "It removes the need for prioritization", explanation: "You still need to decide what's worth blocking time for." },
                { text: "It only works for creative work", explanation: "Time blocking applies to almost any kind of task." }
            ],
            correctIndex: 1
        },
        {
            question: "What's a sign that a plan is too rigid?",
            options: [
                { text: "It includes some buffer time", explanation: "Buffer time is a sign of a well-made plan, not rigidity." },
                { text: "It falls apart completely the first time something unexpected happens", explanation: "A rigid plan has no room to absorb change, so a single surprise derails it." },
                { text: "It gets reviewed weekly", explanation: "Regular review is a sign of a healthy, adaptable plan." },
                { text: "It has clear milestones", explanation: "Clear milestones support planning; they don't make it inflexible." }
            ],
            correctIndex: 1
        },
        {
            question: "You're planning a project but the final goal is vague ('improve the website'). What should you do first?",
            options: [
                { text: "Start scheduling tasks immediately", explanation: "Without a clear outcome, tasks may not actually serve the real goal." },
                { text: "Define a specific, concrete outcome before breaking down steps", explanation: "You can't plan a path to a destination you haven't defined." },
                { text: "Skip planning and work as you go", explanation: "This often leads to wasted effort and constant rework." },
                { text: "Assign the vague goal to someone else", explanation: "Vagueness is a planning problem to solve, not something to delegate away." }
            ],
            correctIndex: 1
        },
        {
            question: "What is the value of a weekly review in planning?",
            options: [
                { text: "It replaces the need for an original plan", explanation: "A review checks and adjusts a plan; it doesn't replace having one." },
                { text: "It lets you compare progress to the plan and adjust upcoming steps", explanation: "Regular check-ins catch drift early, before it becomes a bigger problem." },
                { text: "It's only useful at the very end of a project", explanation: "Waiting until the end means you can't correct course along the way." },
                { text: "It should focus only on what went wrong", explanation: "A useful review considers both what worked and what needs adjusting." }
            ],
            correctIndex: 1
        },
        {
            question: "Which statement best reflects a healthy attitude toward planning?",
            options: [
                { text: "A plan should be followed exactly no matter what changes", explanation: "This treats a plan as a contract instead of a flexible guide." },
                { text: "Plans are useless since things always change anyway", explanation: "Even imperfect plans provide direction and reduce wasted effort." },
                { text: "A plan is a living guide that should be revised as circumstances change", explanation: "This balances structure with the flexibility real projects need." },
                { text: "Only professionals need to plan anything", explanation: "Planning benefits any goal, not just professional projects." }
            ],
            correctIndex: 2
        }
    ]
};
