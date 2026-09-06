/* =========================================================
   Data for: Energy Management (ab.energymanagement.html)
   Everything specific to THIS skill lives here. The engine
   (shared/engine.js) reads this object to build the page.
   ========================================================= */

window.SKILL_DATA = {
    badge: "Core Skill #12",
    title: "Energy Management",
    subtitle: "Manage your physical and mental energy, not just your time",
    backLink: { href: "01.html", text: "Back to Oneself" },

    definition: "Energy management is the practice of tracking and protecting your physical and mental energy so you can perform well when it matters, rather than assuming every hour of the day offers equal capacity. Time is fixed, but energy fluctuates throughout the day and across activities — managing it well means matching demanding work to your peak periods and protecting recovery time.",

    pillars: [
        {
            title: "Energy Is Not Constant",
            text: "Most people have identifiable peaks and dips in energy and focus across the day. Scheduling demanding work around these patterns beats ignoring them."
        },
        {
            title: "Different Types of Energy",
            text: "Physical, mental, and emotional energy are related but distinct — you can be physically rested yet mentally drained, or vice versa."
        },
        {
            title: "Renewal, Not Just Endurance",
            text: "Pushing through fatigue works briefly but degrades performance over time. Deliberate recovery restores capacity rather than just delaying a crash."
        },
        {
            title: "Draining vs. Energizing Activities",
            text: "Some tasks and interactions replenish energy while others deplete it, even if they take the same amount of time. Noticing the difference lets you rebalance your day."
        }
    ],

    actions: [
        {
            icon: "📈",
            title: "Energy Audit",
            text: "For a few days, note your energy level every couple of hours to identify your personal peak and low periods, then schedule demanding work accordingly."
        },
        {
            icon: "🔋",
            title: "Ultradian Rhythm Breaks",
            text: "Work in roughly 90-minute focused stretches followed by a real break, matching the body's natural cycles of alertness and fatigue."
        },
        {
            icon: "🛌",
            title: "Protect Recovery Time",
            text: "Treat sleep, meals, and short breaks as non-negotiable inputs to performance, not optional extras to cut when busy."
        },
        {
            icon: "⚖️",
            title: "Energy Balance Sheet",
            text: "List your regular activities as either energy-giving or energy-draining, and look for ways to add more of the former into your week."
        }
    ],

    proTip: "Before adding one more task to a tired day, ask whether the real problem is time or energy — often what looks like a scheduling issue is actually a need for rest.",

    questionsPerQuiz: 10, // sampled randomly from quizBank below

    quizBank: [
        {
            question: "What is the central idea of energy management?",
            options: [
                { text: "Working as many hours as possible", explanation: "More hours isn't the goal — using energy well within available hours is." },
                { text: "Managing your physical and mental energy so you perform well when it matters", explanation: "It's about matching capacity to demand, not maximizing hours worked." },
                { text: "Only physical exercise matters for energy", explanation: "Physical, mental, and emotional energy all play a role." },
                { text: "Treating every hour of the day as equally productive", explanation: "The whole premise is that energy — and therefore capacity — varies throughout the day." }
            ],
            correctIndex: 1
        },
        {
            question: "Why should demanding tasks be scheduled around personal energy peaks?",
            options: [
                { text: "Energy peaks have no effect on performance", explanation: "Performance on demanding tasks is strongly affected by energy and alertness levels." },
                { text: "Most people have identifiable peaks and dips in energy across the day", explanation: "Matching hard tasks to high-energy periods generally produces better results." },
                { text: "It's only relevant for physical labor", explanation: "It applies to mental and creative work just as much as physical work." },
                { text: "Energy is the same at every hour for everyone", explanation: "Energy naturally fluctuates across the day for most people." }
            ],
            correctIndex: 1
        },
        {
            question: "What's the difference between physical, mental, and emotional energy?",
            options: [
                { text: "There is no real difference; they're identical", explanation: "They're related but distinct — you can be low in one while fine in another." },
                { text: "They are related but distinct, so you can be rested in one and drained in another", explanation: "For example, you might be physically rested but mentally exhausted from a hard problem." },
                { text: "Only physical energy actually affects performance", explanation: "Mental and emotional energy meaningfully affect performance too." },
                { text: "Emotional energy is irrelevant to work performance", explanation: "Emotional depletion can significantly affect focus and decision quality." }
            ],
            correctIndex: 1
        },
        {
            question: "What happens when you consistently push through fatigue instead of recovering?",
            options: [
                { text: "Performance stays exactly the same indefinitely", explanation: "Ignoring fatigue tends to degrade performance and increase burnout risk over time." },
                { text: "Performance briefly holds but tends to degrade over time without recovery", explanation: "Pushing through works short-term but isn't sustainable without renewal." },
                { text: "It permanently increases your energy capacity", explanation: "There's no lasting boost from ignoring fatigue — the opposite is more typical." },
                { text: "It has no long-term effects at all", explanation: "Chronic fatigue without recovery has well-documented long-term costs." }
            ],
            correctIndex: 1
        },
        {
            question: "What is an 'energy audit' meant to reveal?",
            options: [
                { text: "How much money you spend on energy drinks", explanation: "It's about tracking personal energy levels, not financial spending." },
                { text: "Your personal peak and low energy periods across the day", explanation: "Tracking energy over time reveals patterns you can plan work around." },
                { text: "How many hours you sleep each night only", explanation: "Sleep is one factor, but the audit tracks energy across the whole day." },
                { text: "Which coworkers have the most energy", explanation: "It's a personal self-tracking tool, not a comparison with others." }
            ],
            correctIndex: 1
        },
        {
            question: "Why might two activities that take the same amount of time affect you differently?",
            options: [
                { text: "Time is the only factor that matters for energy", explanation: "Duration alone doesn't determine energy impact — the nature of the activity does." },
                { text: "Some activities are energizing while others are draining, regardless of duration", explanation: "A short difficult conversation can drain more energy than a longer relaxing one." },
                { text: "All tasks drain the same amount of energy", explanation: "Different tasks have very different energy costs even at equal length." },
                { text: "Energy impact is completely random and unpredictable", explanation: "With attention, most people can identify consistent patterns in what drains or restores them." }
            ],
            correctIndex: 1
        },
        {
            question: "What is the purpose of working in roughly 90-minute focused stretches with breaks?",
            options: [
                { text: "To match the body's natural cycles of alertness and fatigue", explanation: "This approach aligns work sessions with natural ultradian rhythms." },
                { text: "To make the workday feel longer", explanation: "The goal is sustainable output, not a longer perceived day." },
                { text: "Because 90 minutes is a fixed universal law with no flexibility", explanation: "It's a general guideline based on common rhythms, not a rigid rule for everyone." },
                { text: "To avoid ever having to take a full break", explanation: "Breaks are still a core part of this approach, not something to avoid." }
            ],
            correctIndex: 0
        },
        {
            question: "You feel too tired to focus, so you add another coffee and push through a fourth demanding task in a row. What might be a better approach?",
            options: [
                { text: "Keep pushing since willpower always overcomes fatigue", explanation: "Willpower has limits, and ignoring fatigue tends to reduce quality of work." },
                { text: "Take a genuine recovery break and reassess whether this is a rest issue, not a scheduling issue", explanation: "Often what looks like a time problem is really a depleted-energy problem." },
                { text: "Skip meals to save more time for the task", explanation: "Skipping meals typically worsens energy and focus rather than helping." },
                { text: "Add a fifth task to the list to power through everything at once", explanation: "Adding more demanding work onto depleted energy usually backfires." }
            ],
            correctIndex: 1
        },
        {
            question: "Why should sleep and breaks be treated as non-negotiable rather than optional?",
            options: [
                { text: "They have little real impact on performance", explanation: "Sleep and recovery have strong, well-documented effects on performance and focus." },
                { text: "They are core inputs to sustained performance, not extras to cut when busy", explanation: "Cutting recovery to 'save time' often costs more time through reduced effectiveness." },
                { text: "They only matter for athletes", explanation: "Recovery matters for cognitive and emotional performance just as much as physical." },
                { text: "Skipping them saves time with no real downside", explanation: "There is a real downside — reduced focus, mood, and decision-making quality." }
            ],
            correctIndex: 1
        },
        {
            question: "What's a good use of an 'energy balance sheet'?",
            options: [
                { text: "Listing activities as energy-giving or energy-draining to rebalance your week", explanation: "This makes invisible energy patterns visible so you can act on them." },
                { text: "Tracking your income and expenses", explanation: "That's a financial tool, unrelated to energy management." },
                { text: "Recording only the hours you slept", explanation: "Sleep is one input, but the balance sheet covers a broader range of activities." },
                { text: "Deciding which coworkers to avoid entirely", explanation: "It's about your own activities and their energy effect, not judging others." }
            ],
            correctIndex: 0
        }
    ]
};
