/* =========================================================
   Data for: Task Management (ab.taskmanagement.html)
   Everything specific to THIS skill lives here. The engine
   (shared/engine.js) reads this object to build the page.
   ========================================================= */

window.SKILL_DATA = {
    badge: "Core Skill #09",
    title: "Task Management",
    subtitle: "Keep your day-to-day work organized, visible, and under control",
    backLink: { href: "03.html", text: "Back to Social" },

    definition: "Task management is the ongoing discipline of capturing, organizing, and tracking everything you need to do so nothing important slips through the cracks. It's different from planning a single project — it's the system that keeps your entire workload visible and manageable day after day, so your mental energy goes toward doing the work instead of remembering it.",

    pillars: [
        {
            title: "Capture Everything",
            text: "Tasks that only live in your head compete for mental bandwidth and get forgotten. Writing them down immediately frees your mind to focus."
        },
        {
            title: "One Trusted System",
            text: "Scattering tasks across sticky notes, chats, and memory makes it easy to lose track. A single place you check regularly keeps things visible."
        },
        {
            title: "Clear Next Actions",
            text: "A vague task like 'website' stalls. Breaking it into a specific next physical action makes it obvious what to actually do."
        },
        {
            title: "Regular Maintenance",
            text: "A task list left unchecked becomes stale and overwhelming. Reviewing and updating it regularly keeps it useful instead of ignored."
        }
    ],

    actions: [
        {
            icon: "📥",
            title: "Capture & Inbox System (GTD)",
            text: "Immediately write down any task or idea into a single inbox the moment it comes to mind, then process that inbox regularly instead of trying to remember everything."
        },
        {
            icon: "🗂️",
            title: "Kanban Board",
            text: "Track tasks visually across columns like To Do, In Progress, and Done, so you can see workload and bottlenecks at a glance."
        },
        {
            icon: "✅",
            title: "Next-Action Thinking",
            text: "For every task, define the very next concrete physical step required, rather than leaving it as a broad, intimidating project name."
        },
        {
            icon: "🧹",
            title: "Weekly Cleanup",
            text: "Set a recurring time to review your full task list, delete what's no longer relevant, and reprioritize what's left."
        }
    ],

    proTip: "If a task keeps getting pushed to tomorrow over and over, it's usually not actually a single task — break it down further until the next step feels almost too easy to skip.",

    questionsPerQuiz: 10, // sampled randomly from quizBank below

    quizBank: [
        {
            question: "What is the main goal of task management?",
            options: [
                { text: "Making a to-do list once and never updating it", explanation: "Static, unmaintained lists quickly become outdated and unreliable." },
                { text: "Keeping your workload organized and visible so nothing important is forgotten", explanation: "That's the core purpose — organization and visibility over time." },
                { text: "Doing as many tasks as possible each day", explanation: "Volume isn't the goal; managing the right tasks well is." },
                { text: "Memorizing every task instead of writing it down", explanation: "Relying on memory increases the chance something important is dropped." }
            ],
            correctIndex: 1
        },
        {
            question: "Why is it recommended to capture tasks immediately rather than trying to remember them?",
            options: [
                { text: "Because writing is inherently more important than doing", explanation: "Writing isn't more important than doing — it's a support for doing." },
                { text: "Holding tasks in your head consumes mental energy and risks forgetting them", explanation: "Offloading tasks to a trusted system frees mental bandwidth for actual work." },
                { text: "It looks more organized to other people", explanation: "The benefit is functional, not about appearances." },
                { text: "Memory is always unreliable for everyone", explanation: "The point isn't that memory never works, but that relying on it is risky and draining." }
            ],
            correctIndex: 1
        },
        {
            question: "What is a Kanban board typically used for?",
            options: [
                { text: "Tracking tasks visually through stages like To Do, In Progress, and Done", explanation: "It gives an at-a-glance view of where every task stands." },
                { text: "Deciding which employee to fire", explanation: "It's a workflow visualization tool, unrelated to personnel decisions." },
                { text: "Replacing the need for deadlines entirely", explanation: "It works alongside deadlines rather than eliminating them." },
                { text: "Storing long-term files permanently", explanation: "It's meant for tracking active work, not archival file storage." }
            ],
            correctIndex: 0
        },
        {
            question: "A task on your list says 'Website.' Why might this stall for weeks?",
            options: [
                { text: "It's not vague enough", explanation: "The problem is the opposite — it's too vague to act on." },
                { text: "It has no clear next physical action defined", explanation: "Without a specific next step, it's easy to keep postponing an unclear task." },
                { text: "It's too small a task to matter", explanation: "Size isn't the issue here — clarity is." },
                { text: "Websites are inherently impossible tasks", explanation: "The task itself is fine; it just needs to be broken down." }
            ],
            correctIndex: 1
        },
        {
            question: "Why should you use a single trusted system instead of scattering tasks across sticky notes, chats, and memory?",
            options: [
                { text: "A single system prevents tasks from getting lost or overlooked", explanation: "Consolidating everything in one place means you only have to check one location." },
                { text: "Multiple systems always work better", explanation: "Scattering information across many places usually increases the chance something is missed." },
                { text: "It's required for professional-looking work", explanation: "The main benefit is practical reliability, not appearance." },
                { text: "It eliminates the need to ever prioritize", explanation: "You still need to prioritize; a single system just makes that easier to do." }
            ],
            correctIndex: 0
        },
        {
            question: "What tends to happen to a task list that's never reviewed or cleaned up?",
            options: [
                { text: "It stays perfectly useful forever", explanation: "Without maintenance, lists tend to grow stale and overwhelming." },
                { text: "It becomes stale, cluttered, and overwhelming to look at", explanation: "Old, irrelevant items pile up and bury what actually matters." },
                { text: "It automatically reorganizes itself", explanation: "No system self-maintains; it needs periodic review." },
                { text: "It has no effect on your productivity", explanation: "A cluttered list often leads to avoidance and lost tasks." }
            ],
            correctIndex: 1
        },
        {
            question: "What does 'next-action thinking' mean in task management?",
            options: [
                { text: "Doing tasks in whatever order they appear on the list", explanation: "Order alone doesn't address whether a task is actionable." },
                { text: "Identifying the very next concrete step required to move a task forward", explanation: "This turns an abstract project into something you can immediately start doing." },
                { text: "Only thinking about the final outcome", explanation: "Focusing solely on the end result can make the task feel too big to start." },
                { text: "Skipping planning and just reacting", explanation: "Next-action thinking is a form of planning, not reacting." }
            ],
            correctIndex: 1
        },
        {
            question: "You feel overwhelmed by a long, unsorted task list. What's a good first step?",
            options: [
                { text: "Add even more tasks to it", explanation: "Adding more without organizing will only increase the overwhelm." },
                { text: "Ignore the list until it disappears", explanation: "Ignoring it doesn't remove the underlying tasks or the stress." },
                { text: "Review it, remove what's no longer relevant, and reprioritize what remains", explanation: "A cleanup pass turns an overwhelming list back into something manageable." },
                { text: "Try to complete every task in one day", explanation: "Cramming everything into one day is unrealistic and likely to fail." }
            ],
            correctIndex: 2
        },
        {
            question: "What is the benefit of an 'inbox' step (as in GTD-style systems) for capturing tasks?",
            options: [
                { text: "It forces you to decide everything the instant it's captured", explanation: "Capturing and deciding are separate steps — the inbox is just for quick capture." },
                { text: "It gives you one place to dump any task or idea instantly, to be processed later", explanation: "This separates capturing from organizing, so nothing gets lost in the moment." },
                { text: "It's only useful for work tasks, not personal ones", explanation: "An inbox system works for any kind of task or idea." },
                { text: "It replaces the need for a calendar", explanation: "An inbox and a calendar serve different, complementary purposes." }
            ],
            correctIndex: 1
        },
        {
            question: "Which habit most directly supports good long-term task management?",
            options: [
                { text: "Never revisiting your task list once it's made", explanation: "Static, unreviewed lists lose their usefulness quickly." },
                { text: "A recurring weekly review to clean up and reprioritize", explanation: "Regular maintenance keeps the system trustworthy and relevant over time." },
                { text: "Keeping tasks only in your memory", explanation: "Memory-based tracking is unreliable for larger workloads." },
                { text: "Adding tasks without ever removing completed or irrelevant ones", explanation: "A system without pruning becomes cluttered and hard to trust." }
            ],
            correctIndex: 1
        }
    ]
};
