/* =========================================================
   Data for: Communication Confidence (abc.communicationconfidence.html)
   Everything specific to THIS skill lives here. The engine
   (shared/engine.js) reads this object to build the page.
   ========================================================= */

window.SKILL_DATA = {
    badge: "Core Skill #21",
    title: "Communication Confidence",
    subtitle: "Speak up and express yourself clearly, even under pressure",
    backLink: { href: "03.html", text: "Back to Social" },

    definition: "Communication confidence is the ability to express your thoughts, needs, and ideas clearly in conversations, presentations, or group settings, without being paralyzed by fear of judgment. It's built less on eliminating nervousness entirely and more on developing the skills and repeated practice that let you speak effectively even while some nerves are present.",

    pillars: [
        {
            title: "Preparation Reduces Anxiety",
            text: "Much communication fear comes from uncertainty about what to say. Structuring your key points in advance reduces the unknowns that fuel nervousness."
        },
        {
            title: "Clarity Over Perfection",
            text: "Confident communicators aim to be understood, not flawless. Chasing perfect delivery often creates more anxiety than it prevents."
        },
        {
            title: "Body Language Feeds Back",
            text: "Posture and tone don't just express confidence — deliberately adopting more confident body language can measurably shift how confident you feel."
        },
        {
            title: "Exposure Builds Comfort",
            text: "Like most fears, communication anxiety typically decreases with repeated, gradual exposure rather than avoidance."
        }
    ],

    actions: [
        {
            icon: "📝",
            title: "Key Points Outline",
            text: "Before an important conversation or presentation, jot down 3–4 key points you want to land, rather than trying to script every word."
        },
        {
            icon: "🎤",
            title: "Low-Stakes Practice Reps",
            text: "Practice speaking up in smaller, lower-pressure settings regularly, building comfort before facing higher-stakes situations."
        },
        {
            icon: "🧍",
            title: "Confident Posture Priming",
            text: "Adopt an open, upright posture for a minute or two before speaking, using the body-mind connection to shift your internal state."
        },
        {
            icon: "⏸️",
            title: "The Pause Technique",
            text: "Allow yourself brief pauses while speaking instead of rushing to fill silence, which reduces filler words and projects more composure."
        }
    ],

    proTip: "You don't need to feel confident to act confidently — the behaviors (steady voice, eye contact, pacing) often come first and the feeling follows.",

    questionsPerQuiz: 10, // sampled randomly from quizBank below

    quizBank: [
        {
            question: "What is communication confidence?",
            options: [
                { text: "Never feeling nervous while speaking", explanation: "Some nervousness can remain present even with strong communication confidence." },
                { text: "The ability to express thoughts and ideas clearly without being paralyzed by fear of judgment", explanation: "It's about functioning well despite nerves, not eliminating them entirely." },
                { text: "Speaking as much as possible in every conversation", explanation: "Confidence is about clarity and effectiveness, not simply talking more." },
                { text: "Only relevant to public speaking on a stage", explanation: "It applies to everyday conversations and group settings, not just formal speaking." }
            ],
            correctIndex: 1
        },
        {
            question: "Why does preparation reduce communication anxiety?",
            options: [
                { text: "Preparation has no effect on anxiety levels", explanation: "Preparation directly reduces the uncertainty that fuels much communication fear." },
                { text: "Much of the fear comes from uncertainty about what to say, which structure reduces", explanation: "Knowing your key points in advance removes some of the unknowns driving anxiety." },
                { text: "Preparation only helps with written communication", explanation: "Preparation helps with spoken communication just as much, if not more." },
                { text: "Being prepared guarantees a flawless delivery", explanation: "Preparation reduces anxiety and improves clarity, but doesn't guarantee perfection." }
            ],
            correctIndex: 1
        },
        {
            question: "Why is 'clarity over perfection' a useful mindset for confident communication?",
            options: [
                { text: "Perfection is always achievable with enough effort", explanation: "Chasing perfect delivery often creates more anxiety than it resolves." },
                { text: "Chasing flawless delivery often creates more anxiety than simply aiming to be understood", explanation: "Focusing on clarity is a more attainable and less anxiety-inducing goal." },
                { text: "Clarity is less important than sounding impressive", explanation: "Being understood is generally more valuable than sounding impressive but unclear." },
                { text: "This mindset only applies to written communication", explanation: "It applies to spoken communication as much as written." }
            ],
            correctIndex: 1
        },
        {
            question: "How can body language affect how confident you actually feel?",
            options: [
                { text: "Body language has no effect on internal feelings", explanation: "There's a real feedback loop — posture and tone can shift how confident you feel." },
                { text: "Deliberately adopting more confident posture can measurably shift how confident you feel", explanation: "This mind-body feedback loop means acting confident can help generate the feeling." },
                { text: "Only facial expressions matter, not posture", explanation: "Posture, tone, and other body language all contribute to this feedback effect." },
                { text: "Confident feelings must always come before confident behavior", explanation: "In fact, confident behavior can come first and help generate the feeling." }
            ],
            correctIndex: 1
        },
        {
            question: "Why does repeated, gradual exposure help reduce communication anxiety?",
            options: [
                { text: "Exposure typically has no effect on this type of anxiety", explanation: "Like most fears, communication anxiety tends to decrease with repeated, gradual practice." },
                { text: "Like most fears, this anxiety typically decreases with repeated, gradual practice rather than avoidance", explanation: "Consistent low-stakes practice builds comfort and reduces the fear response over time." },
                { text: "Avoiding speaking situations is the fastest way to reduce anxiety", explanation: "Avoidance tends to maintain or worsen anxiety rather than reduce it." },
                { text: "Exposure only works for extroverted personality types", explanation: "The exposure principle applies broadly, regardless of personality type." }
            ],
            correctIndex: 1
        },
        {
            question: "Before an important conversation, what's a helpful preparation step?",
            options: [
                { text: "Memorizing a word-for-word script of everything you'll say", explanation: "Rigid scripts can increase anxiety if anything goes off-plan; outlining key points is usually more effective." },
                { text: "Jotting down 3–4 key points you want to communicate", explanation: "This structures your message without requiring rigid, word-perfect delivery." },
                { text: "Avoiding any preparation to stay spontaneous", explanation: "Some preparation generally reduces anxiety rather than undermining spontaneity." },
                { text: "Preparing only what you'll say if things go wrong", explanation: "Focusing solely on worst-case scenarios can increase anxiety rather than build confidence." }
            ],
            correctIndex: 1
        },
        {
            question: "What is the benefit of practicing communication in low-stakes settings first?",
            options: [
                { text: "There is no benefit; only high-stakes practice counts", explanation: "Low-stakes practice builds comfort progressively before higher-pressure situations." },
                { text: "It builds comfort and skill before facing higher-pressure situations", explanation: "Gradual practice, from lower to higher stakes, tends to build confidence more sustainably." },
                { text: "Low-stakes practice makes high-stakes situations irrelevant", explanation: "Both types of practice matter; low-stakes practice supports readiness for high-stakes ones." },
                { text: "It should be avoided since it doesn't feel 'real'", explanation: "Even lower-stakes practice provides genuine, transferable skill-building." }
            ],
            correctIndex: 1
        },
        {
            question: "What is the purpose of the 'pause technique' while speaking?",
            options: [
                { text: "To make the listener wait uncomfortably", explanation: "The goal is composure, not discomfort for the listener." },
                { text: "To reduce filler words and project more composure by resisting the urge to rush", explanation: "Brief pauses often make speech clearer and calmer, rather than rushed and filled with 'um's." },
                { text: "Pauses should always be avoided while speaking", explanation: "Well-placed pauses are actually a sign of confident, composed communication." },
                { text: "It's only useful for very long speeches", explanation: "The technique is useful in everyday conversation too, not just long speeches." }
            ],
            correctIndex: 1
        },
        {
            question: "You feel nervous before a presentation despite being prepared. What does this suggest?",
            options: [
                { text: "You are not actually prepared enough", explanation: "Some nervousness is normal even with solid preparation; it doesn't mean preparation failed." },
                { text: "Nervousness can coexist with genuine confidence and preparation; the goal is functioning well despite it", explanation: "Confidence isn't about eliminating nerves entirely, but performing well alongside them." },
                { text: "You should cancel the presentation", explanation: "Nervousness alone isn't a reason to cancel; it's a normal part of the process." },
                { text: "This means you have no communication confidence at all", explanation: "Confidence is compatible with residual nervousness, especially before high-stakes moments." }
            ],
            correctIndex: 1
        },
        {
            question: "Which statement best reflects a healthy view of communication confidence?",
            options: [
                { text: "Confident behavior can come first, with the feeling of confidence following", explanation: "Acting with steady voice, eye contact, and pacing can help generate genuine confidence over time." },
                { text: "You must feel completely confident before you're allowed to speak", explanation: "Waiting for complete confidence would prevent most people from ever practicing and improving." },
                { text: "Only naturally extroverted people can develop real communication confidence", explanation: "Communication confidence can be built by anyone through preparation and practice." },
                { text: "Confidence means never making a mistake while speaking", explanation: "Confidence includes handling mistakes gracefully, not avoiding them entirely." }
            ],
            correctIndex: 0
        }
    ]
};
