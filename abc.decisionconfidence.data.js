/* =========================================================
   Data for: Decision Confidence (abc.decisionconfidence.html)
   Everything specific to THIS skill lives here. The engine
   (shared/engine.js) reads this object to build the page.
   ========================================================= */

window.SKILL_DATA = {
    badge: "Core Skill #22",
    title: "Decision Confidence",
    subtitle: "Commit to choices without endless second-guessing",
    backLink: { href: "03.html", text: "Back to Social" },

    definition: "Decision confidence is the ability to make a choice with reasonable information, commit to it, and move forward without endless second-guessing or paralysis. It's not about always being right — it's about trusting your process enough to act despite uncertainty, and handling a wrong outcome as useful feedback rather than proof you can't be trusted to decide.",

    pillars: [
        {
            title: "Good Decisions vs. Good Outcomes",
            text: "A well-reasoned decision can still lead to a bad outcome due to factors outside your control. Judging yourself only by outcomes ignores the quality of your process."
        },
        {
            title: "Enough Information, Not Perfect Information",
            text: "Waiting for complete certainty before deciding often means missing the window entirely. Most real decisions require acting on 'good enough' information."
        },
        {
            title: "Reversible vs. Irreversible Decisions",
            text: "Low-stakes, reversible decisions deserve quick action; only genuinely high-stakes, hard-to-reverse ones justify extensive deliberation."
        },
        {
            title: "Trusting Your Own Judgment",
            text: "Constantly outsourcing every decision to others' opinions prevents you from building the track record that fuels future decision confidence."
        }
    ],

    actions: [
        {
            icon: "⏳",
            title: "The Decision Deadline",
            text: "Set a firm deadline for smaller decisions to prevent analysis paralysis, accepting that a timely good decision beats an endlessly delayed perfect one."
        },
        {
            icon: "🔄",
            title: "Reversibility Check",
            text: "Before deliberating extensively, ask whether the decision is easily reversible; if so, decide quickly and adjust later if needed."
        },
        {
            icon: "📋",
            title: "Decision Journal",
            text: "Record your reasoning at the time of a decision, then review it later against the outcome to learn whether the process, not just the result, was sound."
        },
        {
            icon: "🧮",
            title: "Good-Enough Threshold",
            text: "Define in advance how much information or certainty is actually needed for a given decision, rather than chasing more data indefinitely."
        }
    ],

    proTip: "If you find yourself relitigating the same decision for the fifth time with no new information, that's a sign to stop deliberating and start acting.",

    questionsPerQuiz: 10, // sampled randomly from quizBank below

    quizBank: [
        {
            question: "What is decision confidence?",
            options: [
                { text: "Being certain every decision will turn out well", explanation: "Confidence is about committing to act despite uncertainty, not guaranteeing outcomes." },
                { text: "The ability to make a choice with reasonable information and commit to it without endless second-guessing", explanation: "This captures both timely commitment and resistance to unproductive rumination." },
                { text: "Always making decisions instantly without any thought", explanation: "Confidence includes reasonable consideration, not skipping thought altogether." },
                { text: "Letting other people make your decisions for you", explanation: "Decision confidence is specifically about trusting your own judgment to decide." }
            ],
            correctIndex: 1
        },
        {
            question: "Why is it important to distinguish 'good decisions' from 'good outcomes'?",
            options: [
                { text: "They are always the same thing", explanation: "A sound decision can still lead to a bad outcome due to factors outside your control." },
                { text: "A well-reasoned decision can still lead to a bad outcome due to outside factors", explanation: "Judging only by outcomes ignores whether the decision-making process itself was sound." },
                { text: "Outcomes are the only thing that matters when evaluating a decision", explanation: "The quality of the reasoning process matters too, independent of the eventual result." },
                { text: "This distinction only applies to business decisions", explanation: "The distinction applies to personal decisions just as much as professional ones." }
            ],
            correctIndex: 1
        },
        {
            question: "Why is waiting for 'perfect information' before deciding often a mistake?",
            options: [
                { text: "Perfect information is always available if you look hard enough", explanation: "Perfect information is rarely available, and waiting for it often means missing the decision window." },
                { text: "Waiting for complete certainty often means missing the window to decide at all", explanation: "Most real decisions require acting on reasonably good, not perfect, information." },
                { text: "More information always leads to a worse decision", explanation: "More information can help, but the issue is the unrealistic expectation of completeness." },
                { text: "Decisions with less information are always better", explanation: "The point isn't that less information is better, but that waiting for total certainty is unrealistic." }
            ],
            correctIndex: 1
        },
        {
            question: "How should reversible decisions typically be handled compared to irreversible ones?",
            options: [
                { text: "Both should get equal, extensive deliberation", explanation: "Reversible, low-stakes decisions generally warrant much less deliberation than irreversible ones." },
                { text: "Reversible decisions deserve quicker action; irreversible ones justify more deliberation", explanation: "Matching deliberation time to stakes and reversibility is a practical way to build decision confidence." },
                { text: "Reversible decisions should always be avoided", explanation: "Reversibility is actually a reason to decide more quickly and adjust later if needed." },
                { text: "Irreversible decisions should be made as fast as possible", explanation: "High-stakes, hard-to-reverse decisions generally warrant more careful deliberation, not less." }
            ],
            correctIndex: 1
        },
        {
            question: "Why might constantly outsourcing decisions to others undermine decision confidence over time?",
            options: [
                { text: "Outsourcing decisions always builds confidence faster", explanation: "Relying entirely on others' opinions prevents you from building your own track record." },
                { text: "It prevents you from building the track record of trusting your own judgment", explanation: "Confidence tends to grow from experience making and living with your own decisions." },
                { text: "Outsourcing has no effect on future decision-making ability", explanation: "It can measurably slow the development of independent decision confidence." },
                { text: "This only applies to major life decisions", explanation: "The pattern applies to everyday decisions too, not just major ones." }
            ],
            correctIndex: 1
        },
        {
            question: "What is the purpose of setting a 'decision deadline' for smaller choices?",
            options: [
                { text: "To force bad decisions through arbitrary time pressure", explanation: "The purpose is to prevent unproductive over-deliberation, not to force poor choices." },
                { text: "To prevent analysis paralysis on decisions that don't warrant extensive deliberation", explanation: "A firm deadline keeps smaller decisions from consuming disproportionate time and energy." },
                { text: "Deadlines should only be used for major, irreversible decisions", explanation: "Deadlines are especially useful for smaller decisions prone to unnecessary over-thinking." },
                { text: "It removes the need to think about the decision at all", explanation: "Some thought still happens; the deadline just caps how long that thought continues." }
            ],
            correctIndex: 1
        },
        {
            question: "What is a 'decision journal' used for?",
            options: [
                { text: "Recording only decisions that turned out badly", explanation: "It's meant to capture reasoning at the time, for both good and bad outcomes." },
                { text: "Recording your reasoning at the time of a decision to review later against the outcome", explanation: "This helps evaluate whether the decision-making process, not just the result, was sound." },
                { text: "Making decisions for you automatically", explanation: "It's a reflection tool, not a decision-making tool that decides for you." },
                { text: "Tracking how quickly you make decisions only", explanation: "It focuses on capturing and reviewing reasoning, not just speed." }
            ],
            correctIndex: 1
        },
        {
            question: "You made a well-reasoned decision that still led to a poor outcome due to unforeseen events. What's the most useful takeaway?",
            options: [
                { text: "You should never trust your judgment again", explanation: "One poor outcome from a sound decision doesn't mean your judgment can't be trusted." },
                { text: "The decision process may still have been sound, even though the outcome wasn't ideal", explanation: "Evaluating the process separately from the outcome supports continued decision confidence." },
                { text: "You should have waited for absolute certainty before deciding", explanation: "Absolute certainty is rarely available, and waiting for it isn't a realistic standard." },
                { text: "This proves that all decisions are essentially random", explanation: "One outcome doesn't prove decisions are random; reasoning quality still matters overall." }
            ],
            correctIndex: 1
        },
        {
            question: "What does the 'good-enough threshold' concept help with?",
            options: [
                { text: "Defining in advance how much certainty is actually needed before deciding", explanation: "Setting this threshold prevents endlessly chasing more data beyond what's actually useful." },
                { text: "Ensuring every decision is made with 100% certainty", explanation: "The concept specifically rejects the need for complete certainty." },
                { text: "Avoiding decisions altogether until certainty is reached", explanation: "The goal is timely action at a reasonable threshold, not indefinite avoidance." },
                { text: "Making all decisions instantly with no consideration", explanation: "Some consideration still happens, just bounded by a reasonable threshold." }
            ],
            correctIndex: 0
        },
        {
            question: "Which statement best reflects healthy decision confidence?",
            options: [
                { text: "Confidence means being right every single time", explanation: "Confidence is compatible with occasionally being wrong; it's about trusting the process, not guaranteeing perfection." },
                { text: "Trusting your process enough to act despite uncertainty, and treating a wrong outcome as feedback", explanation: "This balances realistic humility about outcomes with a willingness to commit and act." },
                { text: "Avoiding decisions entirely to prevent ever being wrong", explanation: "Avoidance isn't decision confidence; it's decision avoidance." },
                { text: "Only making decisions when someone else confirms they are correct", explanation: "This describes outsourcing confidence, not building your own." }
            ],
            correctIndex: 1
        }
    ]
};
